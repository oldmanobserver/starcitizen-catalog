# 10 for the Designers: Episode 06

**Video:** https://www.youtube.com/watch?v=pigtF3Xxjfg
**Date:** 2015-10-12
**Duration:** 32:55

## Transcript

[00:01] [Music]
[00:08] [Music]
[00:10] Hi guys, welcome to 10 for the
[00:11] designers. My name is Randy Bassos. I'm
[00:13] a tech designer. Uh my name is Kirk Toé.
[00:15] I'm a senior technical designer here at
[00:17] Cloud Imperium Games. So, first of all,
[00:19] we'd like to thank the subscribers for
[00:21] making this show possible and for us
[00:22] actually being able to like share extra
[00:25] information with you guys on what we've
[00:26] been doing. So, we have some questions.
[00:28] We'll see if we can get them answered.
[00:30] Yeah, this is uh exciting for us because
[00:31] this is our first uh stab at this
[00:34] particular um show and uh yeah uh but we
[00:38] hope to have a lot of fun with it and uh
[00:39] we're going to enjoy um this direct
[00:42] interaction with the uh the subscribers
[00:44] and the community. Uh this question is
[00:46] from Willie Pete. Uh it's specifically
[00:49] about the Jean Scout. Um so the spec
[00:52] sheet has almost no information for the
[00:54] Jean Scout. He's right. Um could can you
[00:57] please give us some of the basics uh
[00:59] such as weapon loadout, max speed, size
[01:02] of components like shields, generators,
[01:04] etc. Um it is built as uh a scout
[01:07] explorer. What jump point size can it go
[01:10] through and how is that implemented in
[01:12] the ship? Uh the pictures only show the
[01:14] cockpit and not any interior space. Um
[01:17] what are we looking at if anything for
[01:19] the interior space? Okay. So, uh quite a
[01:22] few questions about uh the ship and um
[01:24] we do have some of the specs uh uh
[01:28] determined. Um these are um going into
[01:32] what we call the white box phase. It's
[01:34] the very first phase of the ship
[01:36] implement implementation where we take
[01:38] um the raw geometry for the ship and
[01:41] then um try to do things like determine
[01:43] where the thrusters go, how that's going
[01:45] to um actually um make the ship handle
[01:49] uh in space. Um because of our new uh
[01:52] internal um and physicalized ship
[01:55] components, we're determining the sizes
[01:57] of those and where they can actually go
[01:58] onto the ship itself as well. Uh so to
[02:01] answer some of the questions um the uh
[02:05] the ship is going to have uh two size
[02:08] three lasers uh for sure. Um looking
[02:12] into possibly putting another set of
[02:14] size two lasers up on the top of the
[02:16] ship to give it some extra armament. Um
[02:19] there's going to be one uh medium
[02:21] shield. Um it's a rather large ship uh
[02:25] when um it is it is open and flying. So,
[02:28] we wanted to give it some u additional
[02:30] uh protection from um you know forward-
[02:33] facing uh shots. Uh it's going to have
[02:36] two possibly four um small power plants
[02:40] and um much like the Herold is going to
[02:43] have um it's going to have one uh small
[02:46] jump drive. Um because it is smaller
[02:49] than I believe the Endeavor um it is
[02:53] going to be able to you utilize any size
[02:55] jump uh size jump point. So, it can use
[02:58] any jump point. Um, and uh, it won't
[03:00] have any trouble using any of the jump
[03:02] points in the uh, in the PU. Uh, its top
[03:06] speed is going to be 270 uh, meters/s.
[03:09] This is as opposed to the Hornets's 200
[03:11] m/ second. So, it's going to be a very
[03:13] fast maneuverable ship. Um, there is no
[03:16] interior space plan. Um, so much like
[03:19] the Hornet, it's going to be a um a
[03:22] fighter type of um spacecraft and so
[03:25] there's no internal um uh internal space
[03:28] that is planned for the ship itself. So
[03:31] I hope that answers the questions about
[03:32] the the
[03:33] scout
[03:35] solless regarding modularity of the
[03:37] Caterpillar. Some elements of the design
[03:38] like the repair and salvage shop for
[03:40] example seems to need external access to
[03:42] outer space. Others like the crew module
[03:44] would ideally not have that exposure.
[03:47] Will there be limitations on what order
[03:49] the modules can be assembled in order to
[03:51] have the correct access to the air lock
[03:53] and the forward module or will these
[03:55] have modular units have their own
[03:58] external airlocks so that they can be
[04:00] assembled without order restrictions? So
[04:03] talking with a lot of the designers
[04:05] we've kind of discussed that like each
[04:06] module is going to be designed with a
[04:08] thought that it'll need to be interfaced
[04:10] with all the other modules around it.
[04:12] And basically, so some of the modules
[04:14] will have the extra air lock. Um, some
[04:17] of them are going to have will directly
[04:18] open up to the outside like we talked
[04:20] about like the clam shells kind of just
[04:21] open up a little bit so that way um
[04:24] things can be like set up like the ramp.
[04:26] Mhm. I think you helped me out I think
[04:28] with some of the the modules kind of
[04:29] looking how they would kind of fit in
[04:31] with the other ones. Sure.
[04:32] Um, so like we played around with the
[04:35] concept of like the side opening, the
[04:37] whole side being turned into a ramp. And
[04:39] so there's going to be some
[04:41] restrictions. Um, like the for instance,
[04:44] the front module is going to have it set
[04:45] up to where only the front module can be
[04:48] changed out with front modules and then
[04:49] the other modules are all basically the
[04:51] same modules that can go in there and
[04:53] then um the players can basically just
[04:56] make their choice of what modules are
[04:58] there. Sure. But it seems like it's
[05:00] going to be less of like a a Lego type
[05:02] of system and more of a these are the uh
[05:05] particular module types that can go into
[05:08] this bay of the the ship itself. Yeah.
[05:11] And that's one of the things we played
[05:12] with like we had some ideas of making a
[05:14] restriction where we had some other
[05:16] ideas where like you know what if the
[05:17] player just wants to put in all
[05:19] personnel modules let them you know and
[05:22] then kind of so we're still up in the
[05:24] air about whether we're going to let
[05:25] them just do whatever they want or set
[05:27] it to be pure restrictions. So, it kind
[05:30] of answers the question, but we're still
[05:32] thinking about it and we have a lot of
[05:33] modules planned. So, so beer for the
[05:36] beer god um nice name um asked um at
[05:40] what stage of development is thruster
[05:41] placement, thruster power, mass
[05:43] distribution and other elements related
[05:45] to flight integrated? Um how far along
[05:47] the process does a ship go before it or
[05:49] effects of the ship is flown for the
[05:52] first time? Um dead weight responded
[05:54] with good question. Uh, how will ships
[05:56] like the Jean Scout um which is all
[05:59] thrusters handle against a ship like the
[06:01] Cutless, which is um which has fewer but
[06:04] more powerful thrusters? Is there a
[06:05] blank ship that can um have variable
[06:08] mass and variable thrusters thrown all
[06:10] about it um to take a dry run of the
[06:13] ship before the uh design is finalized?
[06:16] This is a great question. Um so um Randy
[06:19] uh is also uh involved in implementing
[06:22] uh ships and so he has some experience
[06:24] in this as well. But uh our flight
[06:26] system um uses the the mass and the
[06:30] actual u physics of physics bounds of
[06:32] the ship uh along with its center of
[06:35] mass to determine um what its flight
[06:37] characteristics are. um our thruster
[06:40] placement and um the thruster um the
[06:45] output of the thrusters um what uh
[06:48] angles of attack the thrusters can
[06:49] actually influence um and other
[06:52] variables like our turning speed um for
[06:56] the or like the actual spinning speed of
[06:57] the ship um are variables that we can
[06:59] all play with. Um but to the uh the end
[07:03] result of all this is that we can take a
[07:05] cube and make it fly um and we can place
[07:09] thrusters on it um how we want um and um
[07:14] fortunately we don't have to get to that
[07:15] step. Typically we do have uh the the
[07:19] white box model that we can take as a
[07:22] reference. Um we physicalize it. So we
[07:24] put actual um uh geometry that
[07:28] determines its physical bounds and then
[07:31] we um position the thrusters um based on
[07:34] the concept and see how it actually
[07:36] flies. Um we can do things like take um
[07:40] uh actually nudge the actual uh
[07:42] thrusters themselves so that they can
[07:45] influence the the mass of the ship
[07:47] better. Um but all this stuff is is
[07:50] possible without having uh any finalized
[07:53] geometry. So, um, we can actually figure
[07:56] out what the ship is going to fly like
[07:58] before having something that's anywhere
[08:00] close to final. Um, and so that helps a
[08:02] lot in determining what the ship's
[08:04] flight characteristics is going to be.
[08:06] What was what's been your experience
[08:07] with that? Um, so Catacle that I've been
[08:11] working on, you helped me out with the
[08:13] we're looking at the thruster placement
[08:14] on that and then trying to get it and
[08:16] one of the things that we had issues
[08:17] with was it's the asymmetric of it
[08:21] asymmetricalness. Mhm. So the asymmetry
[08:23] of it basically when we had placed the
[08:26] original thrusters like that thing was
[08:28] just like flying all over the place and
[08:29] it was like so hard to control. Right.
[08:31] And then so like we were trying you were
[08:33] helping me like trying to like adjust
[08:34] some of the things. So Right. And
[08:36] something uh that Randy uh discussed
[08:38] with me earlier was that uh the mass
[08:41] distribution does take does play an
[08:43] important part in the flight
[08:45] characteristics of a ship. And so
[08:47] asymmetrical ships with mass that is um
[08:50] that aren't that isn't quite um balanced
[08:54] makes it a challenge to to have uh the
[08:57] ship fly straight um and in a way that
[09:00] you kind of need the ship to fly uh the
[09:03] ship to fly so that you can actually um
[09:06] make it do what you want to do in space.
[09:08] the the ballast also like the ballast
[09:11] controls and everything that we were
[09:12] trying to like start getting on board
[09:13] and online like that would with the
[09:15] asymmetrical ships like that would help
[09:17] out big time. Even the regular ships
[09:19] like once the ballast gameplay and
[09:20] everything gets in stuff. So like if
[09:22] you're using so much ammo then the ammo
[09:23] goes away ballast like filling in for
[09:26] that and adjusting to where it needs or
[09:28] whatever. Yep. We'll eventually uh be
[09:30] able to do things like uh put ballast in
[09:34] places of the ship. Here's a secret. Uh
[09:36] the um the uh Vandal ships are
[09:40] completely faked as far as the their
[09:43] their balance because the wings um are
[09:47] so large that they make the flight
[09:49] characteristics difficult to balance.
[09:51] And so cheated a little bit on the
[09:52] wings. Um and uh this is especially true
[09:57] in the case of the um the scythe. uh
[10:00] because of its its large right wing and
[10:03] it's rather minuscule left wing uh we
[10:05] needed to uh kind of cheat the system so
[10:08] that uh the the uh the flight model
[10:12] thinks that u both of them weigh the
[10:14] same therefore it'll find a straight
[10:15] line otherwise it would just be this
[10:17] this crazy thing that you could not
[10:19] control and so um but you know rest
[10:22] assured we're using real physics um to
[10:24] actually make the ships fly in space
[10:28] can the command module we're talking
[10:30] about the caterpillar reattach in the
[10:31] field space or will we need to somehow
[10:34] get the main body towed back to port.
[10:37] So, um the command module is actually
[10:39] being designed as like a kind of escape
[10:42] pod or like a quick getaway and it's
[10:45] going to have limited um QT
[10:46] capabilities. It's going to be able to
[10:48] dock and redock with the main hole of
[10:50] the ship.
[10:52] So, the reason why to undock or to
[10:55] redock is basically up to the crew. And
[10:57] one of the ideas I had was basically to
[10:59] hit like a baton pass with the main hole
[11:01] of the ship. And we had discussed this
[11:03] um earlier about like um you gave me the
[11:05] example of like the 18-wheeler. Do you
[11:07] want to explain?
[11:08] Well, it's actually yours. Why don't you
[11:10] just explain cuz cuz it's it's it's a
[11:12] great analogy and I think I think it
[11:14] really um it really illustrates how this
[11:16] whole mechanical work. Yeah. So
[11:19] basically taking like a 18-wheeler ship,
[11:20] right? or 18-wheeler today and it has
[11:24] like the main cabin that drives the
[11:26] engine and then you have the actual like
[11:28] the back part the rear part of it. So
[11:31] basically just detaching that main cabin
[11:34] part and then having popping up the
[11:36] 18-wheeler part or the rear another one
[11:38] can just pop right in. So you can play
[11:40] like potato with it kind of like
[11:42] all right well now I'm controlling it
[11:44] I'm taking it in this leg of the journey
[11:45] I'm taking it this leg of the journey
[11:46] and stuff even swapping cargo or
[11:49] whatever like just the different it
[11:51] works within the different variants but
[11:52] the gameplay is still pending so we'll
[11:54] see how all that works cuz you had
[11:56] mentioned like all the security stuff
[11:58] that need to be done. Yeah, I think uh
[12:00] something we need to to think about is
[12:02] uh because you can hot swap these these
[12:04] command modules, we want to put in some
[12:07] kind of security measures so that um you
[12:09] couldn't just pirate one away uh without
[12:11] at least a little bit of effort. Um and
[12:14] um so, you know, we're we're actively
[12:16] discussing these types of things and uh
[12:19] hopefully we'll have these systems
[12:20] online when the when the ship is
[12:21] actually available to
[12:24] fly. Okay. Uh, next question comes from
[12:28] Zodiac Medicay. Um, another cool name.
[12:31] Um, is it difficult to do hanger ready
[12:33] designs for concepts that are not fully
[12:35] fleshed out yet? Uh, I would constantly
[12:37] second guess myself with interface
[12:39] design on stuff like ew consoles. Yes
[12:42] and no. Um while it is difficult to
[12:45] design um interfaces for uh components
[12:49] um that haven't been fleshed out yet um
[12:53] the the happy answer for us is that we
[12:56] don't need to. Um so what what we do is
[13:00] we determine the um the actual uh
[13:03] physical sizes of the screens that are
[13:05] going to serve as the bed for the uh the
[13:08] actual interaction. Um then the team
[13:11] that is responsible for doing this
[13:13] interaction such as ew or other things
[13:16] such as uh ship power management um in
[13:19] any of the stations that we have um they
[13:22] they get to work actually designing out
[13:23] the systems and interface along with the
[13:25] UI team for how that's going to work. We
[13:27] basically have a big blank canvas that
[13:30] we just need to position um and make
[13:32] useful within the ship. So that part of
[13:35] it is rather easy. We designed the space
[13:38] so that the player can um take that
[13:41] station and then um the magic of the
[13:45] design system once it comes online uh
[13:48] simply shows up on that screen and the
[13:50] player is able to interact with that. So
[13:52] um kind of roundabout answer to your
[13:54] question, but I hope that that serves to
[13:56] describe how we do um our ship interior
[14:01] design when we're in the white box
[14:03] phase. Yeah, I mean the two ships that
[14:06] I've worked on that I'm working on so
[14:08] far was like, you know, the Star Liner,
[14:10] which had a whole another host of just
[14:13] interior designs and layouts that we
[14:15] went through, like all those iterations
[14:16] and which you guys should have already
[14:18] hopefully seen. Um, and then hopefully
[14:20] next I'll be able to actually show them
[14:22] all the interior layouts and designs for
[14:24] the Caterpillar cuz right all the all
[14:26] the interiors are crazy and making sure
[14:29] that they fit within the FPS metrics and
[14:31] then making sure that they are fitting
[14:33] for like the hull of the ship, the
[14:35] exterior and making sure it just matches
[14:37] with the ship itself. Just it is a blank
[14:39] canvas. It sometimes gets a little
[14:41] overwhelming because especially at start
[14:42] like starting you're like what what what
[14:44] can I do with this? Right? But you know
[14:45] uh so you know there's there's going to
[14:47] be systems that we haven't designed yet
[14:49] um because of the the particular type of
[14:52] uh responsibility that the caliper is
[14:53] going to have. But we know that we need
[14:55] to make a station for uh doing um say
[14:59] the cargo management. Um we know that we
[15:02] have a 16x9 space that we need to fill
[15:05] the screen with um when the player is
[15:07] man at that station. So, we designed
[15:09] that space um and um when the uh that
[15:14] particular uh gameplay um is flushed out
[15:18] with this UI, it'll just magically
[15:20] overlay onto that space that we've
[15:21] already set aside for that particular
[15:22] mechanic. Yeah. Well, some of the stuff
[15:23] we've already talked about with like
[15:24] multi crew and everything and then
[15:26] working with the designers in UK,
[15:28] working with like Zay and everything for
[15:30] um just all the different screens, the
[15:32] seats, the functions of those seats,
[15:34] what each one kind of does, like all
[15:36] that stuff's really starting to come on
[15:38] board. So hopefully when you guys
[15:40] actually get to play with more of the
[15:41] multicrew stuff, then you'll be able to
[15:43] see a lot more of the designs actually
[15:45] come alive and stuff like that and we
[15:46] can keep kind of just pushing the
[15:48] envelope of what we want for the
[15:50] intention of what like Star Citizen is,
[15:52] you know? Right. Good plug. When I when
[15:53] I say UI, I really mean Zane.
[15:57] I have a question from um beer for the
[15:59] beer god as well. Both the Herald and
[16:02] Caterpillar advertise as being intended
[16:03] for various pirate purposes. A common
[16:06] example is the Herald jamming signals
[16:08] while the Caterpillar with Cutless
[16:10] Export does the dirty work. How do both
[16:12] of you how do both of you envision
[16:14] piracy to work within Star Citizen? And
[16:16] how have you designed the Herod and
[16:18] Caterpillar in accordance with that
[16:19] understanding? The Caterpillar in
[16:21] particular was always designed as a
[16:25] search and rescue, right? Then the other
[16:27] variants when they were starting to be
[16:29] designed and concepted, that's when it
[16:32] was taken to like, oh, well, it could do
[16:34] this, it could do this, and it was
[16:35] always kind of designed to support and
[16:38] work in tandem with the other um Drake
[16:40] ships. So, it kind of started with that.
[16:43] So basically talking with a lot of the
[16:45] other designers and seeing what they
[16:47] were because like um I think you and
[16:49] Sherman were actually working on the
[16:51] Herald for a bit. Yep. As far as the
[16:52] internal components and whatnot. Yeah.
[16:54] So then like I got a chance to look at
[16:55] the look at that look at the components
[16:57] they're doing and then look at the
[16:58] intent of that and then kind of just
[17:00] build in stuff right to Caterpillar to
[17:02] kind of work with those guys. So, can't
[17:04] really talk about too much gameplay yet
[17:07] because it's still being designed and
[17:10] whenever when I'm actually able to show
[17:11] them the actual interior spaces and talk
[17:14] about more of the Caterpillar designs,
[17:15] then I'll be able to get more
[17:16] information. But yeah, they are built
[17:18] with the intention to support one
[17:19] another. Um, and like the example I gave
[17:22] you earlier was like I really see the
[17:24] Herold running close support and being
[17:27] really close to like the caterpillar
[17:29] where the caterpillar is kind of being
[17:30] like the main the main person of the
[17:32] formation and then having like cutlesses
[17:34] kind of sim around them, right? and like
[17:36] just being like support and dropping in
[17:38] and taking out. So that way they can do
[17:41] like they can do the quick um dash and
[17:43] grabs and stuff like that and then store
[17:44] it right on the on the caterpillar as
[17:46] well as kind of blanket the area for
[17:48] like just eore stuff, right? And piracy
[17:52] seems to be a very popular topic. Um and
[17:54] uh truth is we're still ironing out a
[17:56] lot of the details. Uh but rest assured
[17:59] whenever we um we're designing any
[18:01] systems for these ships uh because of
[18:03] how um pirate ccentric this ship is uh
[18:07] that's always um at the forefront of any
[18:10] of the designs that we implement for the
[18:12] ship. Um okay, next question is from
[18:15] Mount OG
[18:17] Bogei. Okay. There seems to be a
[18:20] disparity in ship weights compared to
[18:23] what's represented in the model and XML
[18:25] values etc. a ship that is big on the
[18:27] exterior but is mostly on the inside but
[18:30] weighs as much as it looks like from the
[18:32] outside um and ships that are smaller
[18:35] and ted to have armor obviously solid or
[18:38] densely packed that weigh less than
[18:40] slightly bigger hollow ships. Is there
[18:42] going to be a standard metric to
[18:44] determining the ship weights based on
[18:46] the volume the ship takes up and the
[18:48] possible list of materials the ship
[18:50] would be made out of? Great question. Um
[18:53] and I'm gonna be honest with you all. Um
[18:55] this is all currently a guess. So all of
[18:57] our ship masses at the moment are rough
[19:00] estimates based on the um typically the
[19:04] the general bounds of that the ship
[19:06] takes up. So it's volume um the we don't
[19:10] currently have solid metrics for um the
[19:14] actual physical space um and therefore
[19:16] the mass um would would be represented
[19:20] in the ship. Um there's also
[19:23] um material densities that we have we
[19:26] haven't quite figured out yet. Um that
[19:27] is coming down the pike. Um but until
[19:30] then we it's kind of all eyeballed. So
[19:34] hopefully in the future we'll be able to
[19:35] get uh more more concrete metrics for
[19:39] all of these um all these masses and
[19:42] densities and whatnot to determine more
[19:45] realistic uh values of ships. Um this
[19:48] will be especially important when uh
[19:51] ballast and especially cargo come
[19:53] online. So cargo itself is going to be a
[19:56] um they're obviously going to take up
[19:57] space and mass and they will change the
[20:00] characteristics the flight
[20:01] characteristic of ships when you are
[20:03] laden with um a bunch of cargo
[20:06] especially on ships that can take on a
[20:08] bunch like you know massive amounts such
[20:10] as the constellation huge huge cargo bay
[20:13] when it's full of um really massive uh
[20:17] boxes of stuff the flight
[20:19] characteristics going to change. How
[20:21] will they change? That's that's what
[20:22] we're terming now. So, um that will come
[20:25] someday soon. Um and when we figure that
[20:27] out, um I think we'll have a little bit
[20:29] more um uh realistic values for all the
[20:32] masses of our one of the one of the
[20:34] things like you mentioned the
[20:35] constellation. And one of the things is
[20:38] whenever we get cargo up and running and
[20:40] then that adds extra weight mass the
[20:43] center of mass changes on the ships. So
[20:45] the thrusters will have to be smart
[20:47] enough to adjust you know. And then
[20:49] again going back to asymmetrical ships
[20:52] like my Caterpillar like um we had
[20:54] talked all that cargo will be in the
[20:56] front of the ship and then all the
[20:58] weight for like fuel and everything else
[20:59] will be in the back of the ship. So when
[21:01] it's empty the center of mass is
[21:03] actually closer to engineering but then
[21:05] when all the cargo is there then the
[21:07] mass changes by like like a good almost
[21:10] 10 meters. Sure. It changes. So it's
[21:13] going to be interesting once we get that
[21:14] on board. Sure. Sure. And once all this
[21:15] stuff is working, uh it will uh help
[21:18] incentivize us to better design uh
[21:21] interchangeable thrusters so that hey,
[21:23] maybe you do need um like uh thrusters
[21:27] that have slightly slower attack but are
[21:30] able to move more mass efficiently,
[21:32] especially across the uh uh you know
[21:35] long long stretches of space. That will
[21:38] um encompass the PU gameplay for for
[21:40] moving tons of cargo. Yeah, cargo is
[21:43] going to be very encompassing for all
[21:45] the stuff we have like with mining and
[21:46] salvaging and repair and all that stuff.
[21:49] Yep. Cool. So, I have a question that
[21:51] actually multiple people asked. Can the
[21:53] Caterpillar stretch or contract with
[21:55] more or less modules? So, as of right
[21:57] now, the design is to not stretch. It's
[22:01] not going to be like one of the whole
[22:02] series. It's basically going to be the
[22:05] modules um the modules will fit within
[22:08] there. So, like right now I think six
[22:10] modules. So like the front module and
[22:12] then like five other ones and then the
[22:15] players can basically just swap whatever
[22:17] they want based on whatever their needs
[22:18] and based on what they want the ship to
[22:20] do. Yeah. So I think the this again
[22:23] going back to that Lego uh analogy um
[22:26] that system I think it just causes too
[22:29] much uh too much havoc. you could have,
[22:32] you know, might let you make just a
[22:35] single module ship or a thousand module
[22:37] ship and it's not something that we
[22:39] really um want to plan around. So, I
[22:42] would hate to put like a thousand
[22:44] thrusters. Yes. I think I think start
[22:45] starting off with with a with a
[22:48] determined uh number of modules is is
[22:51] going to be um uh resultant in the best
[22:54] um working ship that we can deliver.
[22:58] Definitely agree on that one. So yeah,
[22:59] hopefully once we release more
[23:01] information on the catapult, we can
[23:02] actually let you guys know all the
[23:04] different module variants and stuff that
[23:05] we could that you could play with. My
[23:07] final question, um, Skiffy writes, uh,
[23:10] with many citizens opening owning
[23:12] multiple ships, I'm curious if it would
[23:14] be possible to staff spare ships
[23:16] entirely by NPCs. For example, if I'd
[23:18] like to pilot my Carrick to go
[23:20] exploring, but send my research back to
[23:23] have NPCs on the Endeavor start
[23:24] crunching, plus send coordinates I
[23:26] discovered back to my claimer, who could
[23:29] start basic salvage operations, or to a
[23:31] lesser extent, could I simply send
[23:32] coordinates to my ship's NPCs who could
[23:34] get them staged for my arrival? A lot of
[23:36] ships in that question. Um, there was a
[23:38] response from Wilborg 1978. Um, I have
[23:42] similar questions of that. If I run as a
[23:44] player in a Carrick with an uh on all
[23:47] NPC crew, um can I hire additional NPCs
[23:49] to escort my Carrick with a Starfare and
[23:52] or Vanguard? Or is it ship size for
[23:54] escorts limited so that only little
[23:56] ships like a Herald, Hornet, and so on
[23:58] can be used for escorts? Is it possible
[24:00] as a solo solo player to play the
[24:01] Carrick with an NPC crew and put an NPC
[24:04] on the Endeavor so I can transfer uh the
[24:07] found stuff from my character or is it
[24:09] imposs impossible for a solo player?
[24:12] These are all great questions and the
[24:14] happy answer is yes. We plan for um the
[24:18] NPCs to completely man a ship that you
[24:21] own um or multiple ships. They'll it'll
[24:23] work just like the contract system for
[24:25] uh a human player that um is going to be
[24:29] flying your ship um but they'll simply
[24:31] be NPCs. And so how does that how does
[24:33] that work though with like if I'm in one
[24:36] ship though and then just the NPC
[24:39] captain cuz like how the seats are
[24:41] broken down with everything. Sure. Well,
[24:42] uh when when we get the NPCs to work, um
[24:46] you you'll actually give them contracts
[24:47] and so you're telling them what to do
[24:49] with the ship. So if this if the command
[24:52] is um I'm transferring my cargo to the
[24:55] ship that is owned by me um and I want
[24:58] you to take it back to our hanger or
[25:00] base or whatever um and sell it. Um that
[25:03] is something that is uh planned to
[25:06] happen. And so, um, you don't need to
[25:09] babysit all of the, um, the standard
[25:13] activities that a ship that you own can
[25:15] can handle, so long as you have NPCs
[25:18] that can, um, handle all the stations on
[25:20] that ship. Um, and so I think that'll be
[25:23] a lot of fun because risky though. Sure.
[25:26] But you know with that um it lets you um
[25:30] take uh give some of the
[25:32] responsibilities for the stuff that you
[25:34] need to get done but may not want to sit
[25:37] um you know on the ship itself awaiting
[25:41] it uh its uh function to go do. So if
[25:44] it's a if it's a lesser task um and I
[25:46] have a ship to do that why not let why
[25:48] not let me do that? So, it's going to be
[25:50] I think uh I'd love to have a fleet. I'd
[25:53] love to have a fleet of ships, but at
[25:54] the same time, it's like do I want to
[25:55] bring my whole fleet out because if I
[25:56] get attacked, I can only do so much.
[25:58] It's like that's a throw risk, right?
[26:00] Right. And that's that's the decision
[26:01] you make. And so, I think that's where
[26:03] the fun comes because you figure out
[26:05] what works best for you and what you
[26:07] want to um allow these NPCs to handle.
[26:10] Um and uh you know, with experience um
[26:13] uh as time goes on, I think people will
[26:15] figure out what works optimally for
[26:17] them. So, um, I would just get like 10
[26:19] hornets then and just have my one ship
[26:21] then I have like 10 hornet escorts if
[26:23] anything comes in they're not messing
[26:24] with me. All right. Or I might wait for
[26:25] you outside your hanger and as soon as
[26:27] you you put you send your ship and I'm
[26:29] attacking and taking everything you got.
[26:31] So, yeah. So, that'll be fun. Cool. So,
[26:34] last question is actually from
[26:35] Deadweight. Um, a question about the
[26:37] design process itself in regards to
[26:39] heavily modular ships like the
[26:41] Caterpillar Endeavor and whole series.
[26:43] How do you go about sketching out the
[26:45] game mechanics that revolve around the
[26:46] modules themselves? Do you all sit
[26:48] around a conference room throwing out
[26:49] around ideas to see what might and might
[26:51] not work? Are there any balance
[26:53] considerations with ships that can
[26:55] effectively change the entire makeup
[26:57] from heavy combat to almost to mostly
[26:58] harmless or from repair and medical to
[27:01] pure hauling? Or do you just let mass
[27:03] and power limitations govern what
[27:05] players can and can't do? We do actually
[27:09] design each module out for purpose. We
[27:12] do sometimes sit around in a conference
[27:14] room and we also do have a lot of design
[27:18] considerations that we put into it and
[27:21] sometimes we have the power limitations
[27:23] govern what the design is based on just
[27:25] whether it's OP, whether it's
[27:27] functional, whether it's so like the
[27:29] main thing is like each ship is
[27:30] completely different. In the case of the
[27:32] Caterpillar, like we looked a lot into
[27:34] what it was intended to do. So like you
[27:36] know the original intent was search and
[27:37] rescue and then we started looking at
[27:39] some of the other ones like the other
[27:40] variants which you know we were like the
[27:42] possibility of variants were the marine
[27:44] the merchant marine and then the small
[27:46] scale salvage. So we started looking at,
[27:48] okay, well, what does a search and
[27:51] rescue need, right? So search and
[27:53] rescue, you need like a medical bay. So
[27:55] boom, we got a medical bay check. We
[27:57] need a place to house the crew as well
[27:59] as the medical crew. So bam, now that's
[28:02] like an extra personnel one right there.
[28:04] And then, you know, you need cargo just
[28:07] in case. You also need launch bays so
[28:09] that way you can get people launched out
[28:11] to go save people and stuff, you know,
[28:13] like it's like kind of like this like
[28:14] the dive rescues, right? Sure. I think
[28:17] what you're describing is like the whole
[28:18] top down approach though you first the
[28:21] ship function itself is determined and
[28:24] then once we determine the particular
[28:26] type of function then we design the
[28:28] module so that it'll serve that function
[28:31] and what um those needs are for that
[28:34] particular module. And so, um, we keep
[28:36] diving down deeper to try to figure out,
[28:38] um, you know, because for us as
[28:42] designers, we're determining what the
[28:45] player interaction with the ships are.
[28:47] And therefore to uh accomplish those
[28:49] particular tasks that the ship is suited
[28:52] for, what works best as far as uh the
[28:54] components, in this case, the modules uh
[28:57] on that ship. The important thing is
[28:59] also feasibility. Like because we had
[29:00] some I made a couple modules or designed
[29:02] inspect some couple modules and people
[29:04] were like I don't know if that would
[29:06] work or they needed we need to tone that
[29:08] down a little bit just to make sure it
[29:10] wasn't you know crazy over overpowered.
[29:13] Yeah. But can you talk about some of the
[29:14] examples of the ones that have been
[29:16] designed out so far? Um so yeah. Yeah.
[29:18] Like we have like the medical bay and we
[29:21] have the cargo bay. We have some of the
[29:22] personnel bays and we have multiple
[29:24] variants um even different of the
[29:26] different modules themselves. So like we
[29:27] have two different cargo modules, right?
[29:29] So what are the differences in those? So
[29:31] like one of the cargo ones we have is
[29:32] where one has like a catwalk. So that
[29:34] way people you lose about like 15 to 20
[29:37] SCU I think with a catwalk. But then
[29:40] it's basically it's a catwalk. So you
[29:42] can actually go through and walk through
[29:43] the cargo and get through the entire
[29:45] ship cuz if you fill up an entire bay of
[29:47] cargo then you can't walk through it. So
[29:50] if you wanted to get to the other side
[29:51] of the ship, basically you either have
[29:54] to like exit the ship to go back in
[29:56] through a different docking port and
[29:57] something like that. So the player can
[29:59] set up the ship however they want. And
[30:00] based on what modules they choose for
[30:02] their ship, they have to deal with the
[30:04] consequences of okay, this is what's
[30:06] this is what this one has the strengths.
[30:08] This is what the weaknesses of this one
[30:10] and this module does this. That's good.
[30:11] Uh so that there's um there are
[30:14] positives and negatives to each type and
[30:15] then the player is able to determine
[30:17] what works best for them. you know, one
[30:19] of the ones we're playing with. So,
[30:20] like, um, everybody's always talking
[30:22] about like the pirate stuff. So, we're
[30:23] talking about like, you know, some more
[30:25] attack, more aggressive type modules to
[30:27] add to it. And also the ones like people
[30:29] are like, "Oh, it's useless." But cargo
[30:31] is kind of, you know, still has like
[30:33] still has hard points on it. So, like
[30:35] each side of the bay has like tractor
[30:37] beam hard points, right? Like size ones.
[30:39] So, if you wanted to, you could put swap
[30:41] those tractor bum beams out for like two
[30:44] size ones, right? Ship. So you can kind
[30:46] of like I wouldn't I know I I keep the
[30:48] tractor beans but you never know people
[30:51] want to put like you know guns on the
[30:52] bay cargo bay. Let them do it. Have fun.
[30:55] Good luck. If you can come up you guys
[30:57] come up with other ways to use this
[30:58] stuff. Awesome. Cuz emergent gameplay is
[31:01] something that we're really trying to
[31:03] just let them have the toy and then let
[31:05] them see what they do with it. Cool. So
[31:08] cool. Um I think that's our 10
[31:10] questions. Yeah, I think that's it. Uh
[31:13] well this was a blast. Um, thank you
[31:15] everybody, especially the subscribers
[31:18] for allowing us to um have this moment
[31:20] of uh of interaction. Uh, not the
[31:24] quickest. It's not instantaneous, but at
[31:26] least we're we're attempting some sort
[31:28] of back and forth with the community. Um
[31:30] but uh this this really allows us to um
[31:33] get feedback uh from from everyone and
[31:37] uh come up with what we um feel is um in
[31:42] the community's best interest and what
[31:44] you guys want to see. Um and this helps
[31:46] a lot. So um this has been fun. Yeah,
[31:49] been fun. Keep hitting up the forums.
[31:51] Let us know what you think. Also give us
[31:54] question more questions even if it's not
[31:55] just 10 for whatever department with the
[31:58] writers and stuff like that. like we'd
[31:59] love to read the forums and get you guys
[32:02] um feedback and everything. So, see you
[32:03] guys out
[32:05] [Music]
[32:13] there. Hey guys, thanks for watching um
[32:16] Temp for the Chairman. Uh if you guys
[32:18] would like to uh see more episodes, go
[32:20] here. If you guys would like to
[32:22] subscribe to our YouTube channel and
[32:23] always keep up to date with all our
[32:25] video content, go here. And uh if you
[32:27] guys would like to watch episodes of
[32:28] Round the Verse, go here please. And I
[32:31] will see you in the
[32:41] verse. This video made possible by the
[32:43] ICC stellar surveyors and subscribers
[32:46] like you.

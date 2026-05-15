# Holiday Livestream 2015: Ship Pipeline - Part One

**Video:** https://www.youtube.com/watch?v=aomcCXt3300
**Date:** 2015-12-16
**Duration:** 7:30

## Transcript

[00:16] spaceship is any word more exciting in
[00:19] the English language uh certainly the
[00:22] very basis the heart of Star Citizen is
[00:24] the fantasy that you can own and operate
[00:27] and explore and battle in spaceships so
[00:30] it's incredibly important that we come
[00:32] up with a process for creating these
[00:34] spaceships to a high degree of fidelity
[00:37] both uh how they work in the universe
[00:38] and how they work in our very complex
[00:40] game and uh today we're going to look at
[00:42] how that happens probably the very first
[00:45] thing we do in the process of creating
[00:46] ship is come up with the role that's the
[00:50] absolute most important thing it's about
[00:53] uh taking Chris's Vision along with the
[00:56] information supplied by Ben Lesnik for
[00:59] you know if it's a new ship what its
[01:00] functions are and then from there
[01:03] working with the concept artists and
[01:05] fully realizing a ship so basically it
[01:08] works for design it works for the game
[01:10] looks cool fits in with the manufacturer
[01:13] the next step is that we essentially put
[01:15] together a design document how does this
[01:17] ship work here's how it should work
[01:19] here's how many thrusters it has it has
[01:22] you know this checklist of things it
[01:24] needs five Escape pods it needs bunks
[01:25] for six people and the concept artist
[01:28] takes you know our ramblings and turns
[01:30] it into a uh a beautiful concept model
[01:33] who's one of our concept artists um
[01:36] basically we're looking at the javelin
[01:40] uh which is undergoing second pass
[01:42] concept say you know that he sort of
[01:44] fully understands um what's involved for
[01:48] this manufacturer and just taking all
[01:50] that design language um that we've
[01:52] established already and putting it onto
[01:54] the javelin so that so basically it's
[01:56] consistent it's good for the uee you
[01:58] know when you see it you're like okay
[02:00] that's an AIS uee ship all the cues are
[02:03] consistent again you can see the sort of
[02:05] level of detail that Dan putting into
[02:08] the work panel
[02:10] lines uh all the decals again you know
[02:14] from you'll see here from this Thruster
[02:16] there's a similarity and this this task
[02:19] will take a couple of weeks and then of
[02:21] course running it past Chris just make
[02:22] sure he's got final sign off so once
[02:25] Paul's done with the concept and pretty
[02:27] much Discovery phase we call it
[02:29] sometimes with his team it then goes
[02:32] into a phase that we call white box um
[02:34] the white box is essentially the very
[02:38] raw Bare Bones of the ship it's not
[02:42] pretty but it's functional and the key
[02:45] with the stage of the white box when it
[02:47] comes to larger ships such as the Idis
[02:50] or the javelin is to understand can we
[02:53] make it work um so the design team will
[02:56] flesh out a white box interior for
[02:58] example and and on a given day I may go
[03:01] in and go well is this going to
[03:03] technically work if we stand the player
[03:05] in this corner of the ship and he's
[03:07] drawing the whole ship then that's not
[03:09] going to work we've got the Idis hanger
[03:11] okay the Idis has got a lot of detail
[03:14] inside obviously we can't draw that all
[03:16] the time so we have to set the interior
[03:19] and design the interior around being as
[03:21] efficient as possible as you bring the
[03:23] camera
[03:24] around you'll see that it will actually
[03:27] start streaming in all of that geometry
[03:29] and all of that fog if we take it back
[03:33] it completely does it in reverse the
[03:34] advantage of that is that we can throw
[03:36] more detail inside and not worry about
[03:38] the cost of it from outside um and just
[03:41] generally massive improvement with frame
[03:43] rate massive Improvement on memory costs
[03:45] so that's the purpose of the white box
[03:47] is to
[03:48] identify problems before they turn up in
[03:51] the pipeline the next step is that the
[03:53] the high resolution super detailed model
[03:56] that our concept artists come up with is
[03:58] given to our technical designers here at
[04:00] the company gray box is essentially
[04:02] taking the white box to final geometry
[04:05] everything should be
[04:07] identifiable um in its in its current
[04:09] form just with polygons uh this is sta
[04:11] era actually it's uh not been seen by
[04:14] the public yet but it's this is a really
[04:16] good example of um a gray box this is
[04:19] the cargo bay of that ship you'll notice
[04:22] there's no textures there's no shaders
[04:24] it's just kind of just gray Checker box
[04:27] um so this is pretty much kind of final
[04:29] geometry now and is is ready to go into
[04:31] production it's taking shape quite
[04:34] nicely so we'll then kind of break this
[04:36] down into various kind of modular
[04:39] elements that we can kind of pull away
[04:41] assign those to the team to kind of
[04:43] crack on with the interior of the ship
[04:45] for me is a map it's a multiplayer map
[04:47] it's certainly bigger than a multiplayer
[04:48] the map and it has to be fun to walk
[04:50] around and you have to be able to
[04:51] navigate it easy and these are all the
[04:52] things that we try to apply very very
[04:56] early on so it goes from gray box here
[04:58] and then it'll go into lot of production
[05:00] here and that's a good a good example to
[05:03] look at right now um she's pretty much
[05:05] done from there that's handed on to Tech
[05:08] design in Tech design we pretty much
[05:10] take all the other areas uh on the
[05:14] project and glue them together to make
[05:16] pretty spaceships actually fly and
[05:18] behave as you'd expect we take the the
[05:21] mesh and we split it up how it's going
[05:23] to fall apart in game so the nose will
[05:26] come off body splits here Wings come off
[05:29] so we create the actual hierarchy which
[05:31] is one of the key things animation need
[05:33] so they can get their animations in and
[05:35] as long as that hierarchy stays the same
[05:37] those animations will be fine everything
[05:39] else can change around it when the
[05:42] modelers and artists get to a graybox
[05:45] phase of the ship they hand it off to me
[05:47] and I break out certain geometries set
[05:49] up hierarchies name the different
[05:52] objects and then animate them within Max
[05:55] and this case uh we have the Aegis
[05:59] Vanguard here
[06:01] and the wings are able to deploy and
[06:06] retract it's my job to animate all these
[06:08] on the proper axis so nothing Clips in
[06:11] it all works correct
[06:12] mechanically so we animated opening
[06:15] animated closing add some tension in
[06:18] there and then we have back here we've
[06:20] got this cargo bay that opens up and
[06:23] lets you into the interior of the ship
[06:26] in addition to that I'll break out
[06:28] different components like we'll uh take
[06:30] out the seat to where we animate the
[06:32] character entering and exiting the ship
[06:34] any ship interaction he has typically
[06:36] we'll animate all those emotion Boulders
[06:38] and Export that for the character the
[06:40] the next step in the ship process the
[06:42] one that everybody else sees is that it
[06:43] becomes hanger ready it'll pop up in
[06:45] your staris and hanger you know if you
[06:47] have bought that particular ship and you
[06:49] get to explore it and see what's inside
[06:51] it takes a lot of work to get the ships
[06:54] in game to the the standard we want and
[06:56] the standard the fans want for them we
[06:59] have backers come around every time they
[07:01] sit with the ship team they're
[07:02] completely blown away by the amount of
[07:05] work that isn't seen in the final
[07:07] product Bon J's animated all the
[07:10] sections of the ship that need animation
[07:12] um landing gears doors anything like
[07:14] that um it's ready then to go to to fine
[07:16] tuning

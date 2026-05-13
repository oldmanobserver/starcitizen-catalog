# Star Citizen: Around the Verse - Yo! ATV Maps | 3.4 Ep. 1

**Video:** https://www.youtube.com/watch?v=I5WjdBaqv0k
**Date:** 2019-01-10
**Duration:** 14:16

## Transcript

[00:09] [Music]
[00:28] hello and welcome to another episode of
[00:30] on the verse I'm Sean Tracy and I'm Eric
[00:32] Kon Davis in today's update we'll call
[00:34] some fully Mayhem with the audio team
[00:36] check in on the new flight model as well
[00:37] as build a map and some structures but
[00:39] first let's see what the community has
[00:41] been up to some players rang in the new
[00:42] year with a PVE event that ended up
[00:44] becoming a massive PVP battle M snipers
[00:48] engaged the enemy turning a standard
[00:50] attack Mission into an emergency Evac
[00:52] situation yes Fighters and Evac Vehicles
[00:54] work side by side to get the group to
[00:56] safety But ultimately it well didn't
[00:59] work out for them spoilers spoilers
[01:01] sorry so moving on to development the
[01:04] audio team have been up to their fully
[01:05] Shenanigans again a recent recording
[01:08] session in Austin captured practical
[01:09] sound effects for a variety of in-game
[01:14] uses sounds were captured that will be
[01:16] used for physical eyes interactive props
[01:19] bullet impacts and things like
[01:25] that they also recorded various metal
[01:28] objects colliding with each other to
[01:29] emulate the sound of metal debris for
[01:31] scenarios like ship parts being broken
[01:33] or
[01:35] [Music]
[01:37] destroyed yeah and metal objects under
[01:40] stress and strain to be used for
[01:42] vibrational sound components for when
[01:44] ship holes are under strain from damage
[01:46] or atmosphere that'll be cool when
[01:48] there's pressure in the cre that's cool
[01:51] so impact and mechanical sounds were
[01:53] recorded in a hanger size space with
[01:55] microphones placed at close medium and
[01:57] far distances from The Source yeah this
[02:00] recording process is used to add a sense
[02:01] of depth and Ambience to the
[02:03] environments like
[02:06] lorville additionally they used large
[02:08] impacts on the steel plate to create
[02:11] sounds that will be used when ships land
[02:13] slide or make contact with other
[02:20] objects devs have been digging into
[02:22] various aspects in features with a
[02:25] recent focus on combat landing and
[02:27] takeoff heat management and Atmospheric
[02:29] flight they've also been tweaking the
[02:31] controls based on feedback from players
[02:33] who got to try out the new flight model
[02:35] experience at citizen con dialing in the
[02:37] throttle logic and control among other
[02:39] aspects so stay tuned to Future updates
[02:41] for the continuing development of the
[02:43] system and as we build out stand and the
[02:45] entire universe we continue to improve
[02:48] and refine the procedural tools that
[02:50] allow us to create the massive
[02:51] environments for Star Citizen massive
[02:54] under understatement yeah say it any
[02:56] bigger with more massive yeah for a look
[02:59] at how procedural layout tools are
[03:00] helping to build stations Habs and other
[03:03] large structures let's go to Scott
[03:04] Fitzgerald We Wan and Patrick
[03:09] [Music]
[03:27] aaro reason we developed the procedur
[03:30] layout to is that we need a lot of
[03:32] locations plenty of variation throughout
[03:35] the entire universe of Star Citizen and
[03:37] to do that we couldn't do it manually so
[03:39] we needed a smart procedural tool to
[03:42] achieve this goal and do the work the
[03:45] key requirements for this procedural
[03:48] tool was to ensure that the art team
[03:50] didn't have to learn a new set of rules
[03:52] and change drastically their
[03:55] workflow we wanted to be able to control
[03:57] prop placement tinting brand
[04:01] we wanted to be able to say make
[04:02] adjustments to an existing area how much
[04:05] effort is involved in doing that so user
[04:08] experience is key and from that we
[04:12] should be able to create a larger
[04:14] variety of environments with minimal
[04:17] effort and therefore populate our
[04:19] universe
[04:20] quicker the core of the tool relies in
[04:23] this building blocks that we call
[04:24] Elements they represent for example
[04:26] rooms of a space station and just pieces
[04:29] of whatever the location needs to be
[04:30] built off these building blocks are then
[04:33] connected to each other through specific
[04:35] attachment points that the artists or
[04:37] designers can Define and all of this is
[04:40] governed by a graph the graph is usually
[04:43] used by designers because they want to
[04:44] control the logical flow of the location
[04:46] and make sure that the game play is
[04:48] suitable for the player and this feeds
[04:51] information to the elements via tags cuz
[04:55] they control which element comes in and
[04:57] which doesn't in the specific location
[05:00] from this core things we develop
[05:02] additional features for example an
[05:04] intelligent smarter way to generate
[05:07] routes between these elements for
[05:08] example
[05:09] corridors and also some verticality
[05:13] control so that we can build larger
[05:15] locations and larger space stations like
[05:18] larger truck STS and refineries that
[05:20] will come later in the game the design
[05:22] requirements for the procedural tours to
[05:24] allow us to have more control over how
[05:25] we distribute the rooms so this in tail
[05:30] would bring towards a much larger rest
[05:32] stop the idea here is we can now start
[05:35] blending into separate floors of one
[05:37] sort of stair stairwell node that we run
[05:39] from here so with using the selection of
[05:43] rooms that we've
[05:46] configured through the LTA
[05:49] set running some uh seed variations off
[05:53] of this node
[05:56] graph we can start to make some very
[05:59] very large rest
[06:11] stops taking everything from the truck
[06:13] stop learning from all that refining the
[06:15] development of the pipeline as we went
[06:17] along we can now roll that out to
[06:19] looking at Habs for the Habs at the
[06:21] moment we can theme them so it it
[06:24] tailors to the occupant so if we have a
[06:26] weight lifter we can actually have
[06:27] weights there you can have protein
[06:29] shakes and so on and those will spawn in
[06:31] appropriately we can theme the
[06:33] apartments to do that if he's a
[06:36] scientist perhaps he has a little hobby
[06:37] on the side a military guy security and
[06:41] so on but if it's a civilian well who
[06:43] knows we could have any number of props
[06:45] that they they have an interest in so
[06:48] yes it's really powerful to be able to
[06:50] generate a large number of apartments
[06:53] and
[06:54] Habs just by clicking a button
[07:01] [Music]
[07:23] didn't you uh show something like that
[07:25] at a previous citizen con busted yes
[07:28] you're right so yes we did and uh we
[07:30] showed basically the first iteration of
[07:32] the procedural layout tool with the uh
[07:34] uh procedural Planet tools at the same
[07:35] time so I like to call it procedural
[07:37] assistance rather than procedurally
[07:38] generating because it definitely helps
[07:40] the designers along U so Scott way and
[07:42] Patrick uh led by Marco been working on
[07:45] this for a little while the the big job
[07:46] though uh that they had finished is one
[07:48] tons of usability improvements but
[07:50] generally moving the whole tool from a
[07:52] python uh uh Tool uh into C++ so
[07:55] properly embedding it in the engine and
[07:56] the editor and everything not just a
[07:57] python layer on top so it's faster uh a
[07:59] little bit easier to maintain that's
[08:01] very cool what tools that are we we're
[08:03] working on right now that you're really
[08:04] excited about that we can talk about
[08:06] that's a fantas question um oh man I
[08:09] mean it's going to sound like not a very
[08:13] interesting tool I think to people but
[08:15] uh it's a huge huge deal it's the um
[08:19] basic asset referencing database I would
[08:20] say is the one I'm most excited about
[08:22] because what that's going to give us the
[08:23] ability to do and none of the community
[08:25] really sees this our inclusions
[08:27] inclusion exclusions thing the way our
[08:28] streams are
[08:30] allows us to decouple our data from uh
[08:32] pu and Squadron 42 properly um so that
[08:34] there's no cross talk really me between
[08:36] them yes Squadron can include some pu
[08:38] stuff but pu stuff shouldn't be
[08:39] including Squadron stuff so aset
[08:41] referencing database makes us ship only
[08:43] what we use and only what we need rather
[08:46] than us kind of having to just take care
[08:49] of it manually um it'll be nice
[08:50] automated that's great well that's going
[08:52] to be exciting we've also just started
[08:54] working on a new 3D map feature that
[08:56] will make traversal easier here is Simon
[08:58] bery with more
[08:59] so the area we're working on right now
[09:01] is called uh the the local area map so
[09:04] we have the star map in the game so this
[09:05] is the equivalent for when you're
[09:06] walking around on foot at the moment
[09:08] we're at the end of the prev
[09:09] visualization phase the the first thing
[09:11] was is it going to be 2D or 3D everybody
[09:13] wanted to do 3D so we did a test out and
[09:16] it looked looked pretty good there's
[09:18] also things like do we want to be able
[09:19] to see the enemy characters on there so
[09:21] we did a little test for that um also it
[09:24] was interesting how we work out how the
[09:26] player moves between floors looking at
[09:27] the map so how they look at the next
[09:29] floor up next floor down that kind of
[09:30] thing it's a case of working how to make
[09:33] that in the game in a functional way so
[09:35] UI team itself is is fairly small and
[09:38] there's all these big systems in the
[09:39] game that this links in with so um we
[09:41] have to deal with the other teams for
[09:43] example that we have to work out how we
[09:45] get that the map information from the
[09:47] level where do we store the locations of
[09:49] all the items all that kind of thing so
[09:51] there's there's lots of things to talk
[09:53] about with the rest of the studio to get
[09:54] this done and also it also needs a
[09:57] certain level of call so you know what
[09:59] out it looks good and makes it a bit
[10:00] different to to other games at the
[10:02] moment it doesn't have that quite that
[10:03] level of visual polish that we want so
[10:05] we want it to look want it to be as good
[10:07] as what you'd see in a Sci-Fi movie for
[10:09] example so just now it's it's functional
[10:11] and it's fine um but we don't want fine
[10:13] we want it to look really good as the
[10:14] game's got bigger obviously there's more
[10:16] places to get lost now so that having a
[10:17] map is has become more important with a
[10:20] feature like that uh he says that it's
[10:23] you know just coming to the end of the
[10:24] prev stage but how complicated is to
[10:26] take a feature like that you know all
[10:27] the way into the game you know you be
[10:29] dictating this direct feature itself but
[10:31] you know what's the normal lifespan of a
[10:32] feature like that and how what it's
[10:33] going to take to e in the game sure and
[10:35] I mean it really of course depends on
[10:37] the feature and I like that we're
[10:38] talking about 3D maps because it's
[10:39] something that I've been very very very
[10:41] keen to have actually the first time I
[10:42] sort of traes around the outside of the
[10:44] the one of the ships trying to get in
[10:46] looking for a particular door and I
[10:48] didn't know where it was now a lot of
[10:49] people go yes learning immersion I
[10:51] totally understand that but sometimes I
[10:52] just want to know where to go so I I
[10:55] think taking a feature you know from
[10:57] from from just idea all the way to in
[10:59] game already is a pretty decent Chu of
[11:01] time right but the most important thing
[11:03] you've just got to get that that unified
[11:05] objective or that intent what's the
[11:07] intent of the feature the intent of the
[11:08] feature is not make a 3D map right it's
[11:11] a I I I want the player to know where he
[11:13] is I want the player to understand how
[11:16] to get to the next position or something
[11:18] like this where it's um you know to use
[11:21] a production term like a user story
[11:23] basically is some sort of unified
[11:24] objective to the feature so once you get
[11:26] there you get some level of previs done
[11:28] um and as they were talking about they
[11:30] wanted higher and higher visual Fidelity
[11:32] with this and to make it look different
[11:33] from the other games because yes other
[11:35] games have done 3D maps like this before
[11:36] you've got you know Zelda breath of the
[11:38] wild these kind of games um that have
[11:40] done them before so how do we
[11:41] differentiate or how do we take some
[11:42] great version great uh features out of
[11:45] thatp and and add some more to it so
[11:48] basically he'll get it from this concept
[11:49] get the unified objective get the nice
[11:52] visuals to it and now get an in-game
[11:54] prototype going and at that point you're
[11:55] going to really work on your
[11:56] functionality so that's where all the
[11:58] iteration will come in right um and that
[12:00] will usually take the vast majority of
[12:01] that feature time so usually to get a
[12:03] feature just online and you're working
[12:04] with it and playing with it is really
[12:06] fast most of the time it's it's it's
[12:08] maintenance and bugs uh after the fact
[12:10] that are going to come up so that bit of
[12:11] iteration that goes on um also some
[12:14] things can add or remove complexities
[12:15] one of the one of the big pieces that he
[12:17] talked about was enemies okay so those
[12:18] enemies on the map and and not being
[12:20] directly related to the feature you know
[12:22] I'm going to ask my own questions uh are
[12:24] those enemies players or those AI
[12:26] because actually that might change how
[12:28] that that that feature being developed
[12:29] and it might take a little bit longer if
[12:30] that's actually going to be showing
[12:31] players as enemies how do they know the
[12:33] players are enemies doesn't it have to
[12:35] check the reputation system doesn't it
[12:36] have to check the crime stats doesn't
[12:38] have to check all of those sort of
[12:39] things just to show a little red blip on
[12:41] the radar right so um yeah I think
[12:44] there's a lot of pieces that can go into
[12:45] that feature but uh generally to take
[12:47] those features all the way through you
[12:48] got that concept phase you've got you
[12:50] know unified objective kind of user
[12:51] story kind of phase iteration on the
[12:53] feature you've got a bit of polish at
[12:55] the end some feedback maybe a little
[12:57] more polish and then a shipping there
[12:59] you go that's cool and what what would
[13:00] be the difference on say something like
[13:02] that in a multiplayer environment like
[13:04] Star Citizen versus a single player
[13:05] environment like Squad 42 it's a good
[13:07] question it changes a lot between
[13:08] different features right like if you
[13:10] have a weapon and and you're firing the
[13:11] weapon in multiplayer versus single
[13:13] player very very different things so it
[13:14] depends on what that map's going to have
[13:16] to do but yeah multiplayer featur is
[13:17] definitely harder yeah very cool aome
[13:19] that does it for us uh this week a big
[13:21] thanks to all the subscribers who
[13:23] sponsored these shows yes and of course
[13:25] thanks to every backer for making the
[13:26] development of our games possible wrap
[13:29] in and get ready for a wild and fun
[13:32] 2949 49 2019 but more yep and until next
[13:37] time we'll see you around the
[13:42] [Music]
[13:54] verse thanks for watching for the latest
[13:57] and greatest in Star C in a squadron 42
[13:59] you can subscribe to our Channel or you
[14:01] can check out some of the other shows
[14:03] and you can also head to our website at
[14:04] www. robertsspaceindustries.com
[14:07] thank you very much for watching

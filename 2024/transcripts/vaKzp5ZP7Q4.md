# Inside Star Citizen: Alpha 4.0 - Playing With Fire

**Video:** https://www.youtube.com/watch?v=vaKzp5ZP7Q4
**Date:** 2024-08-08
**Duration:** 15:35

## Transcript

[00:00] last week we explored some of the new
[00:01] adventures available to players in space
[00:03] in the upcoming Alpha 4.0 but there are
[00:06] even more dangers to be found within
[00:08] your spacecraft and vehicles fire is
[00:10] blazing a trail towards its awaited
[00:12] debut in the persistent universe and
[00:14] while we don't want to burn any Bridges
[00:17] with the resource management team we'll
[00:19] jump out of the fire and into their
[00:21] frying pan in just a few weeks w i
[00:24] really bet their ears are
[00:25] burning we're fired up to give the VFX
[00:28] arsonist a chance to set the world on
[00:30] fire this week or at least just the
[00:32] interior of spaceships because we don't
[00:34] want them to burn themselves out playing
[00:37] with
[00:38] fire I'm out of idioms now I'm going to
[00:41] go see if I can add more fuel to the
[00:43] fire
[00:57] [Music]
[01:03] in 4.0 we'll have fire inside of ships
[01:06] for our initial roll out we didn't
[01:08] really want players to start fires
[01:10] everywhere uh the poor service they
[01:12] really wouldn't be able to handle it so
[01:14] we decided to focus on the the interior
[01:17] of ships uh they're smaller more
[01:20] contained and more controlled fire is
[01:23] tightly integrated with the Resource
[01:25] Network system and a great fit for a
[01:29] first release with in the spaceships
[01:30] where Resource Network will be focusing
[01:33] on as many ships as we
[01:36] can starting a fire is based on damage
[01:40] and like different kinds of
[01:42] damage fires can be caused by ship items
[01:47] when they hit zero Health there are also
[01:50] ways for ship items to cause fires in
[01:53] the normal running and operation of them
[01:55] we're currently looking at making it so
[01:57] that when they Mis fire and they have
[02:00] the highest level of wear that there is
[02:02] a chance that they can also cause
[02:05] fires but other types of damage like
[02:08] impacts from weapons or explosions they
[02:11] could also ignite a
[02:13] fire another way to start a fire is
[02:17] getting the environment hot enough to
[02:19] actually get your surfaces to autoc
[02:21] combust for example if you open up your
[02:24] door on a really really hot planet and
[02:27] the hot air starts to flow into your
[02:29] ship then uh if that air is hot enough
[02:32] and some surfaces might start igniting
[02:35] from that seriously I can open my door
[02:36] and my ship might catch fire you would
[02:39] need a room to reach think it's like
[02:42] 1,000 Kelvin for those materials to
[02:45] start to smoke so it's something that's
[02:48] technically possible but it's not likely
[02:50] if the planet is warm enough yes is
[02:53] there a Planet warm enough to do that
[02:55] right now don't think so okay I just
[02:57] want to be sure you're saying systemic
[03:00] it's possible systemically it's possible
[03:02] yeah it's technically possible but very
[03:04] unlikely don't worry
[03:09] everybody part of the fire hazard system
[03:12] propagation is based on the fire
[03:14] triangle which is oxygen Fuel and
[03:17] temperature oxygen is tracked by the
[03:20] room system the atmosphere that is most
[03:23] rooms in Universe have their atmosphere
[03:25] tracked uh including oxygen the fuels
[03:29] they will be tracked on the surfaces so
[03:31] every surface in the universe is marked
[03:33] up with a surface type that surface type
[03:36] has different properties for fire
[03:39] propagation to work the heat that is
[03:42] usually from a ignition source is the
[03:45] damage that could happen but also if you
[03:47] have an object already on fire that
[03:49] could start a fire again based on the
[03:53] heat that that fire is
[03:55] emitting fire will start small if you
[03:59] have a small ignition point so it will
[04:01] not start blazing immediately so it will
[04:04] start propagating quite slowly but if
[04:06] you leave it untended then the fire will
[04:09] starts growing and the more it grows the
[04:12] faster the propagation will happen and
[04:15] the larger the fire will gets it's quite
[04:18] complicated to have a control over that
[04:21] much energy heat it's a balance I think
[04:25] that's the hardest thing to get having
[04:27] the balance having the fire tech texture
[04:30] that works well with the particle
[04:31] Behavior with the heat the Sparks you
[04:35] need to to have the whole feeling of
[04:36] heat and danger and it's when you get
[04:39] this spot where it really starts to make
[04:42] you look Sly afraid of it that yeah it
[04:45] starts to get gets good I would
[04:48] say each of the materials that we have
[04:51] marked up they have their properties and
[04:54] we can set a material to be combustible
[04:57] or not most surfaces will be combustible
[05:00] a few exceptions such as glass will not
[05:05] be but the ones that are especially in
[05:08] ships we decided to go for a more Tech
[05:11] approach so even if metal itself will
[05:14] not easily combust we assume that behind
[05:18] that metal there will be pipes and
[05:20] cables that can catch fire based on the
[05:24] properties that each surface type has
[05:26] for example wood will burn different
[05:28] from rubber or plastic or metal so the
[05:31] propagation between those will interact
[05:34] differently don't worry like not
[05:36] everything will catch fire at the same
[05:38] time we have these different properties
[05:41] that will cause different surfaces to
[05:44] catch fire at different
[05:45] times you have to think of the other
[05:48] things that can also catch fire things
[05:50] like your cargo which you probably don't
[05:52] want to catch fire because if it burns
[05:54] out you will lose it other things might
[05:57] be loose ship items that you have have
[05:59] laying around just in case you want to
[06:01] repair your ship the player itself will
[06:04] not be able to catch fire but the player
[06:08] will feel the influences of fire in
[06:11] their environment so if you step into
[06:13] the fire then you will take
[06:15] damage if you are near to the fire you
[06:18] will feel the heat so your uh actor
[06:20] status will start showing up with like
[06:23] higher temperatures if the fire is not
[06:27] managed properly for example your life
[06:29] ports uh can't feed in enough oxygen
[06:32] then oxygen will be drained and your
[06:35] player will start to asfixiate why can't
[06:37] I set people on
[06:38] fire
[06:41] te will you commit here and now that
[06:43] someday we'll set people on fire I will
[06:45] commit to
[06:47] nothing I tried
[06:52] everybody people will have different
[06:54] ways of setting fires to ships hopefully
[06:57] other people's ships not your own it is
[07:00] important to know for 4.0 that we will
[07:02] not have fire outside of ships so if you
[07:06] set fire to an item inside one ship you
[07:09] can bring it to another ship given that
[07:11] the medium that you're traveling through
[07:14] has enough oxygen to sustain the fire
[07:17] you can set fire by damaging items in
[07:20] the ship so shooting them when an item
[07:23] dies that has a chance to set
[07:26] fire other ways to set fire are are
[07:29] bringing in ignited items and placing
[07:33] them in someone else's
[07:39] ship one of the biggest challenges that
[07:42] we recently had with fire was the
[07:44] networking and Francesco has done a
[07:47] really really amazing job with getting
[07:49] that
[07:51] ready the presence or absence of fire is
[07:54] an very very important thing to convey
[07:56] to players you don't want a player
[07:58] stepping into a thing that doesn't look
[07:59] like it's burning or avoiding a that
[08:01] looks like it's burning synchronizing
[08:03] fire was a very important part of making
[08:06] sure that the F should function
[08:07] correctly and we have a lot of data that
[08:10] fire generates and a lot of data doesn't
[08:12] work well over
[08:14] networks there was a lot of work put
[08:16] being put into relying as much as
[08:19] possible on the fact that our fire
[08:20] system is stable it's deterministic it
[08:23] will always do the same thing given the
[08:25] same initial
[08:26] parameters there were a lot of cases
[08:28] there were cases of players is joining
[08:30] in late they obviously don't get where
[08:32] the fire was 3 hours ago they just say
[08:34] now they need to know what it is now
[08:37] there's players who have really bad
[08:39] internet connectivity or servers
[08:40] struggling a lot situations that bring a
[08:43] hold to The Continuous progress of fire
[08:45] from one end or the other and we need to
[08:48] reconcile that so we needed a way to
[08:50] know when fire was no longer suitably
[08:54] similar between what the player was
[08:56] seeing and what the server thought was
[08:58] there and refresh it at that point and
[09:01] minimize how much data we needed to
[09:03] refresh it at that point we are pretty
[09:06] happy with the way it works now uh we
[09:07] have it so that it sends as little data
[09:10] as possible to sort of create these
[09:12] summarized States for the CLI in server
[09:14] and only when these differ enough do we
[09:17] actually send a relatively big still
[09:19] compressed but relatively big snapshot
[09:20] to synchronize everything back
[09:23] together a fire that is left unchecked
[09:27] will spread throughout your ship and if
[09:30] it does this and it reaches your ship
[09:32] components system is offline then you'll
[09:35] be having a very bad day and this could
[09:38] lead to your ship being both crippled or
[09:40] destroyed so this means you will be able
[09:43] to put out fires using a fire
[09:45] extinguisher where possible we have made
[09:47] sure that fire extinguishers are readily
[09:50] available throughout our ships the
[09:53] extinguishers they're very simple to use
[09:55] they are point and shoot you have to be
[09:58] careful that you don't start flailing
[10:01] wildly with your extinguisher if you
[10:03] have to aim at the base of your fire and
[10:06] then keep it there to cool down the
[10:08] surface and take away enough of the Heat
[10:10] and the oxygen so that the fire calms
[10:13] down there will be temperature readout
[10:16] where you can see how strong the fire is
[10:18] still where you're aiming and you need
[10:21] to keep your finger on the trigger until
[10:23] it actually goes out fires can just be
[10:27] smoking there and technically it's very
[10:29] close to being on fire so you really do
[10:31] want to make sure it's really out before
[10:33] you move on because if you just leave
[10:36] them smoking and then go wandering off
[10:39] there's a good chance it will heat up
[10:40] again and Catch Fire
[10:42] again it's worth knowing that a fire
[10:45] extinguisher has a limited amount of
[10:47] ammo within it to your benefit you can
[10:51] also take your fire extinguishers back
[10:52] to where they are stored plug them in
[10:55] and then they will recharge their ammo
[10:58] however it is important to know that if
[11:01] your ship doesn't have a functioning
[11:04] life support at this moment the recharge
[11:06] will not work if you leave the fire
[11:09] completely untended then your ship can
[11:12] completely burn out so it will be look
[11:15] completely black if the life support can
[11:18] keep up providing enough oxygen then it
[11:21] will just keep going until all of the
[11:24] fuel that is the surfaces has been burnt
[11:27] out or if the life support is not
[11:30] running then your fire will start to
[11:33] diminish but if you don't do anything
[11:36] the life support will keep feeding in
[11:38] oxygen enough for the fire to be
[11:40] sustained and start spreading everywhere
[11:43] you don't want people to put fires out
[11:45] no I I want them to die in a
[11:48] [Music]
[11:50] fire views and opinions of Leo do not
[11:53] represent those of Cl here in games r
[11:54] space Industries or subsidiaries
[12:00] there are more ways to extinguish fire
[12:03] with the life supports and Resource
[12:04] Network you can cut uh Power to your
[12:07] life support for a room and that means
[12:10] that there will be no more oxygen
[12:12] provided which means that the fire
[12:14] itself will start using up all the
[12:16] oxygen and it will extinguish Slowly by
[12:20] itself another way is to open up your
[12:24] doors to open space and that will mean
[12:27] that all of the atmosphere is being
[12:29] sucked out into open space and again no
[12:31] more oxygen for your fire to
[12:34] continue after a fire you can repair
[12:38] your items or replace them fire can
[12:41] damage your interior of your spaceship
[12:44] we have some very beautiful burn decals
[12:47] that Francesco and Gom have been working
[12:49] on to show you where your ship has been
[12:54] burnt the visual damage to the surfaces
[12:57] is not something you can repair manually
[12:59] but you can go to a repair station and
[13:03] uh repair your ship there and that will
[13:05] get rid of all of the visual burn but if
[13:08] I want to leave it burned cuz it looks
[13:10] cool I can do that you can do that it
[13:16] persists I'm very happy with the current
[13:19] progress It's been a very long route for
[13:21] the team to get to this point it's
[13:24] amazing to finally be able to roll this
[13:26] out to the
[13:27] players it's am amazing to work with
[13:30] it's just so fun and the results are
[13:32] very good and very quick so I'm looking
[13:34] forward to to see what people will do
[13:38] with it like what kind of weird Edge
[13:40] case they'll find and we'll probably
[13:42] have to fix up but it's as long as the
[13:45] servers don't die because of fire and I
[13:47] think we will be able to deal with
[13:52] it so what did we learn this week well
[13:55] we learned where and how fire will make
[13:56] its first appearances in the persistent
[13:58] universe in your spaceships how it'll
[14:01] spread and the dangers of leaving it
[14:03] unchecked your spaceships will burn and
[14:05] maybe go boom and both how you'll put
[14:08] them out or potentially spread the fire
[14:10] to other vehicles and I'm banking you
[14:12] all might find some ways that we missed
[14:15] now don't forget the ship Showdown is
[14:16] still underway it's your chance to vote
[14:18] on which vehicles you like best as well
[14:20] as send John crew messages on social
[14:22] media that he legally has to respond to
[14:24] during this
[14:25] time hi all David here the only thing I
[14:28] have to to say about this is no just no
[14:33] our program will now conclude for inside
[14:36] Star Citizen I'm Jared Huckabee thanks
[14:38] for letting us share the people and
[14:39] process of game development with you and
[14:41] we'll see you all here next week it's
[14:43] time to go pyop Planet
[14:45] [Music]
[14:50] Side how do you start a fire first you
[14:53] contact the
[14:54] ATC yeah yeah I could start with that
[14:58] that would be good I could say that I
[15:00] could say that you want me to do
[15:03] that well first of all you start yeah
[15:06] you you you call the ATC and they set
[15:09] fire to your ship
[15:12] [Music]

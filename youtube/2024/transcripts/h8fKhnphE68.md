# Inside Star Citizen: Alpha 4.0 - Engineering

**Video:** https://www.youtube.com/watch?v=h8fKhnphE68
**Date:** 2024-09-19
**Duration:** 16:38

## Transcript

[00:00] engineering the next major step forward
[00:02] in multi-crew gameplay built on top of
[00:05] the in development resource networking
[00:07] system itself a Harbinger a fire and a
[00:09] new reality for all life aboard
[00:11] spacecraft it's been the subject of
[00:13] Citizen con presentations q&as on Star
[00:16] Citizen live Explorations on inside Star
[00:18] Citizen and frevent discussion by many
[00:20] of the content creators in our community
[00:23] and on this final episode of ISC before
[00:25] Hiatus and we turn all of our attentions
[00:27] towards citizen con we invited Torsten
[00:30] Bastion and G mod to update us once
[00:32] again on the current intention and
[00:34] implementation of engineering and what
[00:36] you can expect when the first iteration
[00:38] makes its way into the persistent
[00:41] Universe Resource Network enables us to
[00:44] actually give you the gameplay that you
[00:45] were always looking for which is having
[00:48] meaningful multi crew gameplay which
[00:50] means that it really makes sense to have
[00:53] multiple people running around on your
[00:54] ship and that wouldn't be possible
[00:56] without the Resource Network
[01:14] so we say the resource network is a
[01:16] system that allows all the items and
[01:19] components that are part of the ship to
[01:21] talk to each other every ground vehicle
[01:24] every base everything that runs in Star
[01:29] Citizen with
[01:31] resources fundamentally Resource Network
[01:33] is a replacement for the pipe system we
[01:35] had in the past that you may have heard
[01:37] about we CH a similar system basically
[01:41] doing most of what we're doing right now
[01:42] with the resource network but in a way
[01:44] that was not as scalable as what we
[01:46] intend to do Landing complete so right
[01:48] now we just have one type of hydrogen
[01:50] fuel but if we want to extend that in
[01:52] the future to having like multiple types
[01:55] that have some specific benefits on the
[01:58] thrusters it's very easy now to add that
[02:01] resource it's just a data
[02:04] setup so Resource Network is the
[02:06] underlying technology for the system to
[02:08] work and Engineering is the game playay
[02:11] we intend to have on top of this
[02:13] technology so that players may
[02:14] experience it your shfe flies because
[02:17] you know the thrusters get fueled the
[02:18] power plants output power that the
[02:20] weapons and the seals and also the
[02:21] thrusters use engineering is all about
[02:24] both maximizing the use you get out of
[02:26] the Resource
[02:28] Network and also so getting the r of
[02:30] network itself going so that you're not
[02:32] dead in the water it's all thing that
[02:35] players will be able to interact with
[02:37] they will have to dedicate roles in
[02:39] their ships so that crew members are
[02:40] assigned to fixing those issues and they
[02:43] can encounter more Dynamic situations
[02:45] that will not happen in the pr
[02:47] systems the goal right now is to have
[02:50] all the components on the ship being
[02:53] physicalized that means that the things
[02:57] that will take damage will be the
[02:59] components that then means that those
[03:02] components are reasons to the failure of
[03:06] your ship we have the power plants which
[03:09] generate the energy your ship consumes
[03:11] you have the she generators which take
[03:14] in some of that energy to convert it to
[03:16] Shield power you have a radar system
[03:20] that allows you to Target the signatures
[03:22] of ships around you you have coolers
[03:25] that generate a coolant resource
[03:33] it is all the weapons that you have it's
[03:36] the Quantum Drive but there are also new
[03:39] components that will be added to the mix
[03:41] and that is the relay with its fuses
[03:44] then there's the Live support
[03:48] generator the biggest thing we are
[03:50] aiming for is switching from your health
[03:54] pool of the bespoke ship to just moving
[03:57] that completely over to the physicalized
[03:59] comp component so damaging the component
[04:02] is damaging your
[04:04] ship I think this is the part where the
[04:07] biggest change for the players happen
[04:09] because there the game play of repair
[04:11] comes in and then you can Revitalize
[04:14] your ship system activ so you can
[04:16] actually use your formerly dead in the
[04:19] water ship after exchanging or repairing
[04:21] the
[04:23] components but we mentioned uh one of
[04:25] the new components which is the life
[04:27] support generator so let's talk about
[04:30] life
[04:31] support the life support does all the
[04:33] task necessary to maintain the life
[04:34] support inside a sa so it's the
[04:37] temperature it's the atmosphere
[04:39] composition it's the pressure inside the
[04:44] room your main responsibility is making
[04:48] sure that there is always enough life
[04:49] support resource produced to maintain a
[04:52] healthy atmosphere in the
[04:54] ship so making sure that all the CO2
[04:58] that you breathe out is actually
[04:59] converted into O2
[05:04] again or if you vented a room that the
[05:07] room is filled
[05:11] again if your room is getting too hot
[05:15] it's cooled down again so it's all about
[05:17] managing this resource inside the
[05:20] rooms and uh as already mentioned in the
[05:24] previous episodes it's uh life support
[05:26] management is also a good way to to
[05:29] counter
[05:31] fire another aspect the players have to
[05:33] to counter or react to is misfires on
[05:38] components misfires are something that
[05:40] is already in the game in some form
[05:42] Thruster sges seal generator failure
[05:44] stuff like that or gu expanding it a bit
[05:46] and pretty much the idea is that you
[05:48] know items that are damaged that are too
[05:50] hot or that for example are very old and
[05:52] degraded will start misfiring in some
[05:54] cases that will be that it will take
[05:55] some extra damage in other cases it will
[05:58] but it will stop working for a while
[05:59] other times they will work indefinitely
[06:02] until an engineer comes by and manages
[06:03] to do some repairs and some of the worst
[06:06] cases would be starting a fire or in the
[06:08] case of for example power plants
[06:10] engaging in a critical reactor failure
[06:12] and taking the ship with them there was
[06:13] a chance that if the power plant reaches
[06:16] zero Health it will run into a critical
[06:19] failure and that critical failure then
[06:21] will cause the entire ship to
[06:23] explode it will give the player the time
[06:26] frame to react to that so so either by
[06:30] removing the component and throwing it
[06:32] out of the door and preventing your ship
[06:34] to explode or even countering it by
[06:37] repairing the component and bringing it
[06:39] up to life
[06:41] again for the initial release we have a
[06:44] limited amount of misfires but we are
[06:47] preparing the system or we did prepare
[06:49] the system to scale well for for the
[06:53] future so we can introduce uh multiple
[06:55] misfires and that leads us to damage
[06:58] penetration
[07:00] so damage penetration it's a simplified
[07:02] version of what will be getting
[07:04] eventually with a more physicalized
[07:06] system but essentially what it means is
[07:08] that now certain types of weapons can
[07:09] penetrate through the H of a
[07:11] ship and this is a function of the
[07:13] weapon itself it's penetration values
[07:15] and also of the armor of the ship which
[07:16] can be depleted over time so if you use
[07:19] btics you have a higher penetration
[07:21] which allows you to cut through the
[07:23] armor more deeply and touch the um
[07:26] components inside the ship directly as
[07:27] opposed to this you can uh you also have
[07:29] energy weapons which will be more
[07:31] effective at melting down the armor the
[07:34] goal here is that you first need to
[07:36] bring down the armor health value to get
[07:40] to the fullest potential of your
[07:41] penetrating weapons then you can
[07:44] penetrate the ship and actually damage
[07:47] the components that sit inside the ship
[07:49] and not on the outside of the hall
[07:52] obviously there's degrees to this larger
[07:54] ballistic weapons may have enough
[07:55] penetration against smaller ships that
[07:57] they will be able to penetrate directly
[07:58] but it's you it's it's all of a game of
[08:00] choices and it's going to depend on your
[08:02] ships and your weapons so with damage
[08:04] penetration and misfires happening that
[08:07] brings us to
[08:09] repair as your fight progresses and
[08:12] components take damage in your ship it
[08:13] becomes the duty of some of your cre
[08:15] members to First investigate what are
[08:18] the issues caused by battle
[08:21] damage and go there to physically
[08:24] replace the parts in your ship so you
[08:27] have your multi-tool so you have the
[08:28] Savage and repair and uh the repair part
[08:32] of it also affects now ship components
[08:35] precisely like what you see in the arena
[08:38] command you will be able to repair items
[08:42] that were fully
[08:45] destroyed you will not be able to repair
[08:48] the item to its fullest so you cannot
[08:50] repair an item that got fully destroyed
[08:52] to 100% Health again so to repair your
[08:56] ship components to the fullest you
[08:59] actually you have to bring them to the
[09:00] shop again and uh do the
[09:03] station or if you did think ahead and
[09:06] brought spare items with you you can
[09:08] simply exchange them to pristine new
[09:11] ones but with the caveat uh it only
[09:14] works just as a reminder uh for size one
[09:17] and size two components size three and
[09:19] above cannot be exchanged uh using the
[09:22] tractor beam detach and attach mode so
[09:25] now that we looked at what your
[09:28] responsibility are in the physical space
[09:30] running around in your ship let's take a
[09:32] look at what you do on the virual part
[09:35] which is power management and Analysis
[09:37] of your ship on the engineering
[09:41] screen so the first thing that you will
[09:44] see is the 3D view of your ship that
[09:49] highlights the location of all the ship
[09:53] components and how they are actually
[09:55] connected where the relay positions are
[09:58] what's the status of the relay are you
[10:01] will see the the Holograms of each
[10:04] component as you can see they have
[10:05] different colors what they are the uh
[10:07] representing is the overall state of the
[10:10] item so an item that is very damaged or
[10:12] it's on fire or it's not getting enough
[10:14] power will be in a critical State items
[10:16] are less damaged are receiving only
[10:18] partial resources or are going through a
[10:19] misfire we have moderate colors and
[10:23] items that are otherwise fine will have
[10:25] the functional or blue colors
[10:29] the biggest change that happened to the
[10:31] engineering UI screen is basically the
[10:34] power management part of it we moved
[10:37] away completely from Slider control for
[10:41] every individual item there is indicator
[10:45] now for fuel this is not relevant for
[10:48] the initial release but it will be
[10:49] relevant for the future next to it you
[10:52] see the power plant the power plant
[10:55] segments gives you an idea of how many
[10:59] power segments you can distribute to the
[11:03] ship items and on the right of each of
[11:05] the power Parts you can generally see
[11:07] the temperature bar if it goes into
[11:10] overheating the item will stop both
[11:11] consuming or producing and it will be
[11:13] completely inoperable until it cools
[11:15] down again so that means that assigning
[11:16] power to your coolers in advance is
[11:18] probably a good idea if you're going
[11:19] into a fight all the items on your ship
[11:22] generate heat so this is where you can
[11:24] see the amount of heat that each item
[11:25] has accumulated and you can see the
[11:27] amount of coolant that you are you
[11:28] producing and whether or not you are
[11:30] also running a deficit so what you want
[11:32] to do is put as much power as you can
[11:34] into the coolers until your items do not
[11:36] overheat but do not assign more
[11:39] resources than necessary because you are
[11:40] running a limited pool of resources the
[11:43] same applies to the life support
[11:44] generator so you have to make sure that
[11:47] you produce enough life support resource
[11:50] that the demand is fulfilled in your
[11:51] ship if your demand isn't fulfilled it
[11:54] will cause some
[11:56] failures here's also notifications panel
[11:59] here the main warnings about the state
[12:01] of the ship will be displayed If an item
[12:03] is damaged doesn't get enough power or
[12:05] is misfiring it will create a warning
[12:07] you will be able to see it as a
[12:08] notification take a look at it go to the
[12:10] item or just remove it so you have an
[12:13] option that allows you to basically log
[12:15] the controls so that you or the pilot
[12:18] which has access to the MFD which shares
[12:20] some of the power management
[12:21] functionality do not conflict with your
[12:23] controls so by locking this you are able
[12:26] to override the MFD settings to only
[12:30] have it being authoritative from the
[12:32] engineering station you are able to take
[12:35] the power assignment you have at a given
[12:37] time and save it locally on your
[12:39] computer meaning that when you fly again
[12:41] with this ship or even if it's not your
[12:42] ship but somebody else's ship you can
[12:44] quickly apply your presets this is very
[12:46] useful in the middle of combat and you
[12:48] can quickly switch to a combat preset
[12:50] where you will give for example more
[12:52] power to seals weapons and thrusters or
[12:55] at the same time uh you may want to have
[12:57] some nap mode preset where you know you
[12:59] you reduce the power to everything and
[13:01] just put it on a bare minimum so there's
[13:02] no degradation or misfires related to
[13:04] power use so you can set a preset on
[13:07] your ship and then jump on somebody
[13:09] else's ship and load it up indeed uh
[13:12] your presets are stored locally so as
[13:14] long as you have access to the screen
[13:15] and you're using the same ship you can
[13:16] apply a preset obviously if the
[13:18] components have changed or you know the
[13:20] ship has a different Loadout the preset
[13:22] might not apply perfectly and you might
[13:23] need to adjust it and but it gives you a
[13:25] quick Baseline on how your power is
[13:27] assigned
[13:30] we hope that with these challenges
[13:32] players will have more valed
[13:33] opportunities to experience the game
[13:36] we'll encounter more situations where it
[13:37] feels relevant and enjoyable to have
[13:39] multi crew gameplay in the ships so that
[13:41] you do not think it's just about filling
[13:44] in the battle positions like the the
[13:46] turrets and pilot seats but it's more
[13:48] invol gamep play to actually manage your
[13:50] ships and try to fix the ongoing
[13:53] situation that occur within them and we
[13:56] also hope that this makes larger
[13:58] Vehicles which are have more interior
[14:00] space both more Troublesome but also
[14:02] more enjoyable to play with we are still
[14:05] working hard to get it done for all of
[14:07] you there are ships that already have
[14:10] the functionality there are still ships
[14:12] that we are working on but overall we
[14:15] are super excited to finally get it into
[14:18] the Pu so the arena command experimental
[14:21] mode was already fun to observe what you
[14:22] can do uh with the entire system and now
[14:26] with having the feedback from that
[14:28] adjust ing the gaml a little from the
[14:31] feedback that we received from you I am
[14:34] really looking forward to to see what
[14:37] you all will be doing with
[14:41] it so what did we learn this week well
[14:44] we learned that there's a sweet new
[14:45] interface for dedicated engineering
[14:46] terminals aboard spacecraft that the
[14:49] first implementation of armor and damage
[14:51] penetration means that the ways that you
[14:53] kill and keep your spaceships alive will
[14:55] fundamentally change and that when this
[14:57] arrives in the Pu life aboard spaceships
[15:00] will never be the same again now that's
[15:03] it for this season of inside Star
[15:04] Citizen while everybody here turns their
[15:06] focus towards the upcoming citizen con
[15:08] where we'll be showcasing the future of
[15:10] Star Citizen Beyond Alpha 4.0 yes it's a
[15:14] show you're not going to want to miss so
[15:16] from the small team that makes every ISC
[15:18] thank you so much for letting us stretch
[15:20] our proverbial Wings this year thank you
[15:22] for continuing to let us share the
[15:24] people and process of game development
[15:26] with you and we'll see you all back here
[15:28] after the Big Show
[15:29] so I can't believe we got this
[15:40] [Music]
[15:47] [Music]
[15:55] [Music]
[15:59] he
[16:04] [Music]
[16:17] [Music]
[16:27] rate e

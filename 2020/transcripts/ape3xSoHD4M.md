# Star Citizen: Calling All Devs - Talking Ship

**Video:** https://www.youtube.com/watch?v=ape3xSoHD4M
**Date:** 2020-09-25
**Duration:** 20:13

## Transcript

[00:08] hey everybody welcome to another episode
[00:10] of calling all devs our question and
[00:12] answer series where we take questions
[00:13] from you the star citizen community
[00:15] impose
[00:15] them directly to our developers on this
[00:17] month's show we are talking
[00:19] ship we have collected a series of ship
[00:21] related
[00:22] ship feature related questions and we're
[00:25] going to post them to our
[00:26] vehicle director director of vehicles mr
[00:28] john crew john how you doing
[00:31] hey i'm good thanks how are you are we
[00:32] all right let's jump right into this
[00:34] because we got we
[00:36] we we got questions we got time uh our
[00:38] first question
[00:39] uh we've seen on isc recently that work
[00:42] has begun
[00:43] on ship to ship docking ship to station
[00:45] docking
[00:46] can you give us an update on both
[00:50] yep i sure can um we sort of think of
[00:52] them in three different ways
[00:54] although the two are sort of under the
[00:56] same umbrella of ship to ship docking so
[00:58] with shipship docking uh there's two
[01:00] aspects we're
[01:01] looking at so there's the direct heart
[01:03] attachment which the prime example is
[01:05] the constellation of merlin
[01:07] and then there's ship to ship docking as
[01:09] a journal which is just any ship with a
[01:11] docking port connecting to another one
[01:13] so first up we're doing the connie and
[01:15] merlin uh hard
[01:17] docking uh that is well underway we've
[01:19] got to the point where the vehicle
[01:22] is attached to each other and you can
[01:23] get in and out and we're now
[01:25] at the point of just sort of dealing
[01:27] with all the quirks of
[01:28] having two vehicles physically joined
[01:30] together
[01:32] intentionally uh which has thrown up
[01:34] some weird physics problems that we're
[01:35] just working through
[01:36] how does that how does that docking work
[01:38] did does the pilot have to
[01:40] pilot it in is there some kind of ar
[01:41] thing they've got to follow
[01:43] completely automatic pilot it's it's not
[01:46] completely automatic so
[01:47] you you communicate to the the target
[01:49] ship and they
[01:51] accept your request to dock because if
[01:53] there if there was no sort of permission
[01:55] system you could have anybody
[01:56] just randomly trying to dock with you
[01:59] but once that's all sorted out you get a
[02:02] docking ui
[02:04] which gives you an idea of how far off
[02:07] on each axis and role
[02:09] you are you line up all the symbols
[02:12] you're in the right place and then
[02:13] the very last few meters it takes over
[02:16] and automatically
[02:17] guides you in so you have to do sort of
[02:19] 99 of the flying into it and that's the
[02:22] very last bit where
[02:23] we have to ensure that you are
[02:25] orientated a very specific way to get
[02:28] like you think about the merlin there is
[02:31] a baked animation sequence to get out
[02:33] the ship so if you are
[02:34] five centimeters off to the left you
[02:35] could end up getting out
[02:38] through the constellation out the other
[02:39] side so we have to ensure you're a very
[02:41] specific position so that's why there's
[02:42] automatic there
[02:43] okay um i'll come back to the bit of
[02:47] shift ship talking uh shift station
[02:49] docking is also
[02:50] well underway we've got a fairly
[02:51] functional prototype at this point
[02:53] uh we're just working out some of the
[02:54] last technical hurdles for that before
[02:56] we
[02:56] enter full production on that so that's
[02:58] you taking your large ships and docking
[03:00] at any of the
[03:01] orbital stations or other places that
[03:04] have these large extended docking tubes
[03:05] that i think you saw in ifc
[03:08] um so that's that's the order of battle
[03:10] there really we're doing the
[03:12] constellation merlin docking first then
[03:14] we're doing ship to station docking and
[03:15] then at some point after that we'll do
[03:17] the ship to ship
[03:18] um purely because there's there's less
[03:21] of a need for that right now
[03:23] um the constellation merlin thing solves
[03:25] some tech problems for ship to station
[03:27] docking
[03:27] ship to station docking is needed for
[03:29] ships that are coming
[03:30] uh ship to ship is a sort of nice to
[03:33] have that we will do but it's not
[03:34] as important as those other two yeah all
[03:37] right
[03:37] um let's move on to the next question
[03:40] then uh
[03:42] a lot of people asking about the current
[03:44] status of
[03:45] physicalized things like physicalized
[03:46] armor um
[03:48] armor penetration of course uh and then
[03:51] updated sdf shield so
[03:52] the the the tech features that surround
[03:55] vehicles
[03:55] uh what can you tell us yep all those
[03:58] three things are in active production at
[04:00] the moment
[04:01] um they're not just for vehicles uh
[04:03] especially the the physicalized armor
[04:05] and penetration that's also
[04:06] going to be applicable to actors and the
[04:08] fps game
[04:10] so again we've got to a point where
[04:13] we're working on the
[04:15] the initial parameters and tuning them
[04:17] in making sure that
[04:18] they're working as we expect um before
[04:21] we start
[04:22] really putting all hands on it chris has
[04:24] been involved in it a lot of physics
[04:26] guys are doing the
[04:27] work the vehicle and the actor teams are
[04:28] working together to go right
[04:30] we need all these parameters
[04:33] please please make them the the physics
[04:35] guys give us a
[04:36] build back and go sure that that sort of
[04:39] works this bit doesn't work when you're
[04:40] small tuning here so
[04:42] we're definitely working on it right now
[04:44] um how far through that process
[04:46] we are i i it's hard to say until we get
[04:49] something
[04:49] that works across the system um
[04:53] so it sounds like you're you're working
[04:54] on the the prototype the tech itself
[04:57] as opposed to actively converting all
[04:59] the other ships
[05:00] you know yeah okay we have our internal
[05:04] like milestones for this so it would be
[05:07] foolish to
[05:08] work on the tech alongside converting
[05:10] all the ships to it because there's just
[05:11] so many ships
[05:13] so we want to get a very small set of
[05:15] ships working first with it all get them
[05:17] all playing nicely against each other
[05:19] understand the tools we have to balance
[05:21] this now because it moves away
[05:22] completely from weapon does 100 damage
[05:25] ship has a thousand health
[05:26] right 10 shots equals death um whilst we
[05:29] have a lot of that all on paper
[05:31] paper doesn't necessarily translate to
[05:33] fun game play
[05:35] once it's all implemented so yeah all
[05:37] the other teams are working on the
[05:38] physicalized armor and the armor
[05:40] penetration
[05:40] so penetration will be a thing over
[05:42] penetration will be a thing
[05:44] um sdf shields was the last thing there
[05:47] i think
[05:48] so in recent builds
[05:53] all ships have uh sdfs generated for
[05:56] their
[05:56] what will be their shield bubbles uh the
[05:58] build process is now
[06:00] splitting them out for us um you will
[06:02] have seen the
[06:03] atmospheric reentry effect in 310 uses
[06:06] that
[06:07] as the basis so 310 was a sort of
[06:10] precursor for
[06:11] rolling it out on a a slightly simpler
[06:14] problem
[06:14] to solve which is atmospheric entry
[06:16] effects sort of
[06:18] reacting to whatever angle your ship is
[06:20] right shields takes that to the next
[06:21] level so
[06:22] cortec wise it's pretty much there
[06:26] and it's really now working with the vfx
[06:28] team and
[06:29] the vfx engineering team to to make the
[06:33] shields look
[06:34] good because we can't use any of the
[06:36] existing shield effects
[06:38] work we have to recreate that from
[06:39] scratch and that that brings up a lot of
[06:41] uh not tech but sort of visual gameplay
[06:45] how do we make it look good at
[06:46] short range and far range without
[06:49] blinding players
[06:50] and then of course after you make it
[06:52] look good then making it performative
[06:54] like it's finding that balance between
[06:56] you know you can make it look
[06:57] amazing and like if you only had one
[06:59] ship to blow up you were fine
[07:01] but in when it comes to giant melees
[07:04] of multiple ships you need something
[07:06] that can scale you know
[07:07] scale and be performative and stuff so a
[07:09] lot of work to be done there i would
[07:11] imagine
[07:11] yeah certainly the the initial stuff
[07:13] we've seen of the sdf shields internally
[07:15] looks
[07:16] very promising in terms of just how it
[07:18] looks and how it behaves
[07:20] because one of the big things is when
[07:21] you lose a wing the sdf adapts to
[07:23] losing that you don't have this weird
[07:25] bubble floating out so it's going to be
[07:26] a really nice change
[07:28] and we will of course be showing that to
[07:30] the community it's just as soon as we
[07:32] get
[07:32] closer to the more performative model
[07:35] it's one of those things where
[07:36] we you show it now and it could lead to
[07:40] inappropriate expectations about what's
[07:42] going to actually be there so
[07:45] um all right so that's exciting though
[07:47] the physicize armor
[07:48] armor penetration sdf stuff all in
[07:51] active development now
[07:53] uh it's pretty cool um
[07:56] at times throughout star citizen
[07:58] development we've heard about
[08:00] how each ship manufacturer would have
[08:02] its own hud
[08:03] um there would be an aegis hud or an
[08:05] anvil hud or something like that
[08:06] um we have we used to have some version
[08:09] of that and they kind of went away for
[08:10] an homogenization uh
[08:12] is that coming back yep that's coming
[08:15] back uh in fact we're
[08:16] we're actively working i keep saying
[08:18] actively working but it's true
[08:20] um it's it's true uh the
[08:23] the aegis ships or specifically the
[08:26] gladius for
[08:27] squadron reasons is going to be getting
[08:29] a completely fresh
[08:30] hud overall and then we have
[08:33] i think we've also worked on an rsi
[08:35] styling
[08:36] so all the manufacturers will be getting
[08:39] thematically heat themed
[08:41] huds for their ships rather than just
[08:42] being the same hud
[08:44] recoloured and that will apply to the
[08:46] mfds as well so
[08:47] the core functionality of the mfds when
[08:49] they're reworked will be the same
[08:51] but they'll just have a visual styling
[08:53] over it to make it feel like this is a
[08:54] drake mfd versus an aegis mft
[08:57] and this i guess i would imagine this is
[08:59] part of why uh the
[09:00] ship had has been being converted into
[09:02] building blocks
[09:03] in recent patches people have seen
[09:06] aspects of it
[09:06] being converted over and it looks like
[09:08] what they had before
[09:10] but it's being converted so that they
[09:11] can be modular so that we can plug them
[09:13] into the rsi style the aegis style the
[09:17] you know every other manufacturer's
[09:18] style yeah pretty much
[09:20] it's it's uh it looks exactly the same
[09:22] as it did but it is in fact all new
[09:24] uh and now we have the ability to say
[09:27] style it by just applying one style
[09:29] sheet much like uh
[09:30] web css you can change the theme with a
[09:33] very simple change
[09:34] which you can't do with flash you just
[09:35] have to remake the entire asset
[09:38] and then you've got two things to update
[09:40] every time you want to add or change
[09:41] something
[09:41] uh so this new uh aegis uh style is it
[09:45] going to be
[09:46] different than we've seen it's going to
[09:49] be very different to what's in game and
[09:50] what people have seen
[09:52] cool well we'll we'll we'll we'll uh
[09:55] hang tight until we can
[09:56] show folks what it looks like um
[10:00] another big popular question when it
[10:02] comes to vehicles or vehicle tech that
[10:04] folks have been waiting for
[10:05] the ability to spawn smaller vehicles
[10:08] inside larger vehicles uh whether that's
[10:11] the
[10:12] whether that's the pisces inside the
[10:13] carrick or the
[10:15] or a rover ursa rover inside a
[10:17] constellation
[10:18] uh any we've been on a good tr trail so
[10:21] far all these things in active
[10:22] development
[10:23] is this an active development uh it's
[10:26] it's sort of semi-active we did some
[10:30] internal tests
[10:31] uh we we got a we got it working um
[10:35] it's important to differentiate some of
[10:36] those things from
[10:38] like connie and merlin docking that's
[10:39] that's almost like an entirely different
[10:41] thing
[10:42] right um anything that
[10:45] is always going to be in a repeatable
[10:46] position every time you spawn the ship
[10:48] or customize the ship like the murder
[10:49] and the connie
[10:50] uh will work um things where you can
[10:54] change it out
[10:55] between multiple ships uh we're looking
[10:58] at this it ultimately it still creates
[11:00] item ports that ships are attached to
[11:02] but it does them dynamically
[11:03] um and for various technical reasons
[11:05] we're sort of waiting for
[11:06] eye cash to be more complete on this
[11:09] certain area
[11:10] certain other areas and then we'll pick
[11:11] that up because if we try and chew on it
[11:13] in now it'll just be
[11:14] throwaway code that icash does out the
[11:17] box for it
[11:18] that makes sense that makes sense we
[11:20] we've run into that situation in a
[11:22] number of features
[11:23] so so all right so that one's not in
[11:26] active development like the other things
[11:28] just waiting on other dependencies yes
[11:30] all right so lastly our last ship
[11:32] feature-related question has to do with
[11:33] the hull c uh we know that work was
[11:36] paused on it some time ago because it
[11:37] was rated
[11:38] uh waiting for other ship related tech
[11:40] like the expandable collapsible physics
[11:42] grids i look at the ship to station
[11:45] docking and i
[11:47] i see similarities there uh are we
[11:49] getting closer to
[11:50] making this thing a reality uh we are
[11:54] um like say the ship station docking uh
[11:57] required uh animatable and multiple
[12:00] physics grids which is what the whole
[12:01] seed
[12:01] requires uh so we now have those uh so
[12:04] that's one thing
[12:05] ticked off the list of whole sea
[12:06] dependencies uh we still have a few more
[12:08] that we need to solve before we can
[12:10] release the ship but we are
[12:12] uh able to actually progress internally
[12:14] now a bit more with it
[12:15] um so we need the ability for rooms to
[12:18] scale like uh physics areas because
[12:22] now you can have gravity in that central
[12:23] spine but there'll be no air
[12:25] so it's sort of equally as problematic
[12:28] for release
[12:29] okay um and that also help all the level
[12:32] designers and the vehicle designers
[12:33] because
[12:34] we want to unify the way all the rooms
[12:36] and shapes are made in the engine
[12:38] um at the moment they're all sort of
[12:40] individual shapes so
[12:41] a design has to go in and mark up a room
[12:43] for the air an audio designer has to go
[12:45] in a marketplace room for
[12:46] the audio volume uh i have to go in and
[12:49] mark up a room for
[12:50] vis areas and portals to stop light
[12:52] coming in so you want to all put them
[12:54] into one single
[12:55] feature that can support scaling and
[12:58] then bam
[12:59] that's the whole c part solved
[13:03] um the two other bits needed are
[13:06] awaiting nicely triggered state machines
[13:08] on vehicles so
[13:09] we sort of fudge it together at the
[13:11] moment by tying state changes into the
[13:13] landing gear
[13:14] deployments uh we need to split that out
[13:16] that's scheduled for
[13:18] one of the vehicle teams um and then the
[13:20] last one is really the cargo system it
[13:22] obviously carries thousands of units of
[13:24] cargo and we only supply cargo in one se
[13:26] boxes at the moment
[13:28] and that system needs to support not
[13:31] doing that
[13:31] it needs to go right you've bought 4 000
[13:33] units of uh
[13:35] laronite and here's
[13:38] 100 big boxes of it or
[13:41] um because it will just server
[13:43] performance
[13:44] we've seen what happens when people go
[13:46] wild with picos this would be
[13:48] a whole lot of a lot worse than that
[13:51] and it's one of those things where the
[13:52] upcoming cargo decks in 311
[13:55] uh while not the functionality it's in
[13:56] 311 but the cargo decks themselves are a
[13:59] platform for additional
[14:00] features and those will tie into uh
[14:03] being able to offload
[14:05] uh things like the hull c and maybe even
[14:07] load them up to begin with
[14:08] yeah they're the perfectly designed
[14:10] places for that because you don't want
[14:11] to take your whole sea
[14:12] well you can't land with the cargo out
[14:14] so there's very little point taking it
[14:15] down to the surface to land but
[14:18] you will need to drop these off at
[14:19] orbital stations right so
[14:21] a lot of good progress being made uh
[14:23] it's exciting to hear
[14:24] uh it's exciting to hear about things
[14:26] like the physicalized armor and the
[14:28] armor penetration and the sdf shields
[14:30] and the
[14:31] two different versions of ship docking
[14:33] you all in active
[14:35] development you know some we hear so
[14:37] often about
[14:38] you know dependencies and this has to
[14:40] wait for this but to know that these
[14:41] things are actually in active motion now
[14:43] uh the the the hud styling for aegis
[14:47] another big thing uh it's another big
[14:49] part of
[14:50] making these ships feel different and
[14:52] unique and bespoke
[14:53] um lots of exciting stuff um
[14:56] we we blazed through this we got a
[14:58] little time left in what we're allowed
[15:00] so i'm i'm gonna veer a little bit
[15:03] point one on my own in there it's not a
[15:05] ship feature related thing but it's a
[15:07] ship thing
[15:08] my dad when he when when he pledged
[15:12] for star citizen the first ship that
[15:14] brought him in
[15:15] was the was was the redeemer i mean that
[15:18] was
[15:19] that was that was his first pledge uh it
[15:20] brought him into star citizen
[15:22] um we've talked about how it was going
[15:25] to be reconcepted
[15:26] re-envisioned you know for for a couple
[15:28] reasons
[15:30] it's been quiet has there been any
[15:32] movement on this
[15:34] yeah so we we talked about this a while
[15:36] back about moving it into a sort of a
[15:38] full gunship role
[15:40] and that that has happened we had a
[15:43] little hollow viewer of it at the
[15:45] fleet week invictus launch week event so
[15:49] if you uh eagle-eyed you will have
[15:51] spotted the redeemer was there in the
[15:53] hollywood and
[15:54] it wasn't quite looking the same as
[15:57] it does in the hangars or it does in the
[15:59] original concept
[16:00] so we have done some work on it and
[16:03] um i can maybe share a few pictures of
[16:06] it before this gets
[16:08] okay so yeah a gunship
[16:12] needs lots of guns so um
[16:15] i can't quite remember off the top of my
[16:17] head the the sizings off these
[16:19] um but the
[16:22] the exterior of the redeemer has pretty
[16:24] much been entirely reworked
[16:27] but keeping it in the same style as it
[16:29] was
[16:30] we were on the fence about do we just
[16:32] move it to a different manufacturer
[16:33] because it looks so different to aegis
[16:35] but in the end we decide to keep it
[16:36] aegis we'll keep the cracker wings
[16:39] but we'll just do a little massaging of
[16:41] all the shapes here to bring it more
[16:42] into the
[16:43] aegis style so the nose has changed the
[16:46] turret design has changed the tail has
[16:48] changed
[16:48] it's not quite as rounded as it was
[16:51] uh there's some some harsher aegis lines
[16:54] in there uh
[16:55] still got the wheels on the bottom we
[16:57] toyed around with skids but
[16:59] we'll keep it to the original concept
[17:01] you can see here there's
[17:03] there's a lot more aegis right right
[17:05] trying to do my best paul jones
[17:08] impersonation um i think the tales
[17:10] slightly changed as well
[17:13] um so it has a manned turret on the top
[17:15] manta on the bottom
[17:16] that are entirely accessible from within
[17:18] the ship you don't need to go on a
[17:19] little
[17:19] ghost training ride out into outer space
[17:22] to get to the turrets anymore
[17:24] um still has the ramp on the back uh
[17:28] and so not a drastic reinvision no no
[17:32] it's still the redeemer that people you
[17:34] would still look at and go this is the
[17:35] redeemer it's not a
[17:36] complete reimagining of it we try to
[17:39] keep it faithful to the original
[17:41] concept but just bring it up to modern
[17:43] standards
[17:44] i don't have any of the interiors here
[17:46] to show but that is that's had much more
[17:48] of a
[17:49] upgrade from uh what was there uh
[17:52] there's the drop seats are gone they've
[17:54] been replaced with
[17:56] space to sort of walk around the ship
[17:59] if people have gotten to the one in the
[18:00] hangar still they'll know it's it's
[18:02] quite compact to move around in there
[18:04] so we've uh enlargened it
[18:08] got access to components you've got
[18:09] access to all the turrets you can
[18:11] freely move around without it being
[18:13] cavernous
[18:16] but yeah you can see there's a there's a
[18:18] lot of turrets there's two at the front
[18:19] one of those is pilot control
[18:20] there's the manned one behind it there's
[18:22] manual on top uh there's the one on the
[18:24] tail as well
[18:25] so yeah this is really designed for for
[18:27] hovering around these nutcrackers will
[18:30] rotate for vtol so you can really go
[18:33] full ac 130 style and
[18:36] engage in ground combat nice uh and
[18:40] this is this is still the this is still
[18:41] the concept mesh we're looking at this
[18:43] this is
[18:44] being actively built in engine right now
[18:46] this isn't being actively worked on by
[18:48] the vehicle team right now this is the
[18:50] the pre-production uh concept for us
[18:53] just like any other ship um we we
[18:57] for ones that have been previously
[18:58] available and are going to go back into
[19:00] production we we treat them as a new
[19:01] ship we take them through the entire
[19:03] concept pipeline
[19:04] um to just vet that everything is there
[19:07] there needs to be there before
[19:09] artists put pen to paper okay
[19:13] well that's that's enough of your
[19:15] surprise treats all right well
[19:16] thank you so much john the redeemer
[19:18] looks like it's in good hands
[19:20] uh i think folks will be really happy to
[19:21] have to see that it's uh
[19:23] made some progress here of course when
[19:25] it does go into active production
[19:26] uh we will let the community know and
[19:28] keep an eye on the public roadmap
[19:30] for when you can expect it uh in any
[19:32] live release
[19:33] so john i'll let you go thank you so
[19:34] much man thank you that's been good
[19:37] all right that about does it for this
[19:38] episode of calling all devs a special
[19:40] thanks to john crew for taking time to
[19:41] be here on the show with us for this
[19:42] special talk and ship episode
[19:44] remember you can submit your questions
[19:46] for consideration on each episode up in
[19:47] the thread
[19:48] up on spectrum so for calling all debs
[19:50] i'm jared huckaby
[19:51] until next time take care
[20:13] you

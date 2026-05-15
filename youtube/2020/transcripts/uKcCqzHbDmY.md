# Star Citizen: Calling All Devs - Idris and Multicrew

**Video:** https://www.youtube.com/watch?v=uKcCqzHbDmY
**Date:** 2020-03-27
**Duration:** 24:09

## Transcript

[00:07] hey everybody welcome to another edition
[00:10] of calling all Deb's our Q&A series
[00:11] where we take cushions from you the star
[00:13] citizen community and pose them directly
[00:15] to our developers usually over
[00:17] videoconferencing I'm Jared Huckaby
[00:18] let's get right to it all right so this
[00:21] question I think is perfect for Ally
[00:22] Brown or director of graphics
[00:23] engineering we're gonna see what he has
[00:25] to say Ali how you doing man I'm good
[00:27] thanks thank you for taking the call
[00:30] from home we are of course in a
[00:31] work-from-home era here with all the
[00:33] world stuff going on so we're gonna
[00:35] we're gonna jump right into it I got a
[00:38] question here from a star citizen we've
[00:40] been getting this a lot just gonna jump
[00:43] right into it it says how's work on the
[00:45] gen 12 Vulcan conversion going what can
[00:48] you tell us so folks you start
[00:52] explaining what it is before we saying
[00:54] where it is at the moment very tough so
[00:56] so yeah we've mentioned two things there
[00:57] there's the gen 12 when do or generation
[01:00] 12 when were and then there is the fact
[01:02] that it's gonna primarily use the Vulcan
[01:04] API so the gen 12 is just a name we came
[01:07] up with for our renderer which is going
[01:09] to utilizing multiple CPU cores more
[01:13] than the previous vendor which mainly
[01:14] only runs on two CPU cores these days we
[01:17] tend to have eight or 16 cores or more
[01:20] so there's a lot of focus on pleat
[01:23] computations so that at one time it's
[01:25] much faster so that's type of the gems
[01:27] well and under the hood it's going to
[01:29] use the Vulcan graphics API in fact
[01:32] initially it's going to use DirectX 11
[01:34] which is the current engine uses and
[01:36] Vulcan and then once we've got the
[01:38] Vulcan support to be better though the
[01:40] DirectX 11 support or drop DirectX 11
[01:42] and we fully over to Vulcan Vulcan is a
[01:45] more modern API it's much lighter weight
[01:49] much faster as much closer a thinner
[01:52] layer of abstraction over what the GPU
[01:54] actually does so that gives us a lot of
[01:57] performance boost but it takes a lot
[01:58] more time to program for so it's a lot
[02:00] more
[02:00] initial investment but then we get big
[02:02] performance wins once we get over the
[02:04] initial hurdle
[02:05] okay and where we are so it's
[02:13] complicated the answer so we have a lot
[02:16] of multiple mini teams we've set up in
[02:20] the graphics and engine program at
[02:21] departments and they're tackling type of
[02:23] six separate areas so each of those six
[02:26] and where we're up to so there is type
[02:29] of the the highest level one is the the
[02:31] pipeline render pipeline we call init
[02:33] which is type of the way we structure a
[02:35] frame that we might first we render some
[02:38] shadows and then we some renter
[02:40] detective work and then we'll get on to
[02:42] a depth pass a color pass then we'll do
[02:44] the UI and such but I'd type of pipeline
[02:46] it's type of the frame of the glues all
[02:48] together but it is starting soon but we
[02:51] haven't actually needed to do that bit
[02:52] first so that's the first but that's not
[02:55] what you would imagine we'd start there
[02:56] but actually it's the opposite we've
[02:58] started when this is the new reality so
[03:11] at the other end of the system we have
[03:14] the the Vulcan device this is the lowest
[03:16] level part of it which is where we
[03:18] actually issue commands to the GPU using
[03:22] the Vulkan API so that's such the first
[03:24] thing which died on at the very lowest
[03:25] level the most difficult part oh my god
[03:28] a couple of guys just working on that
[03:29] one section alone and then another
[03:32] studio we've got some people looking at
[03:34] the type of the DirectX 11 equivalent so
[03:37] type of what we're going to use in the
[03:39] meantime while we get this lender up and
[03:40] running and because we already have
[03:42] DirectX 11 support that's pretty much
[03:44] done there's not a lot to do there
[03:45] there's not a lot of concerns so that
[03:47] section is okay and then we have like
[03:50] above them both we have this common
[03:52] layer so there is differences between
[03:54] DirectX and vulcan and by having this
[03:57] type of common layer above we can type
[03:58] of abstract that and hide that
[04:00] difference of a higher level rendering
[04:02] code doesn't need to worry about whether
[04:03] it's direct X or Vulcan and again that
[04:06] part of it is pretty much done and
[04:07] that's not a particularly complicated
[04:08] bit but then the wheelwork it comes down
[04:11] to two remaining topics so we have the
[04:13] post effects and we have the type of
[04:16] what we call in the scene submission the
[04:18] scene when doing so the post effect
[04:20] our bloom our lighting you know all
[04:23] these type of things like the general
[04:24] effects you know and some of the facts
[04:26] of people hate you know motion blur and
[04:28] for my separation as well but you know
[04:31] the ones that people don't hate so much
[04:32] as well and then we have the land that's
[04:35] a big chunk of work and we have two guys
[04:38] just working on that they're getting
[04:39] quite far though quite far food that I
[04:41] couldn't give a percentage but they've
[04:42] made very good progress and they've
[04:44] started with the hardest ones
[04:45] intentionally so that we proved the
[04:47] system and then there's that there's
[04:48] gonna be a bit of grunt work to get
[04:49] through the more trivial ones afterwards
[04:51] and then the final big topic is the
[04:53] scene submission which is getting
[04:55] basically the geometry into the game
[04:56] into the regulars so like you know our
[04:59] shadows and our color pass and just type
[05:01] of getting all of this geometry very
[05:03] quickly and efficiently into the
[05:04] renderer and that's probably one of the
[05:07] larger sections and that's only that's
[05:09] just about started so the moment we've
[05:11] got good progress on the Vulcan device
[05:14] the DirectX 11 device the common layer
[05:16] that binds them together and we've made
[05:20] good pose and the post effects and then
[05:21] that the main large areas that are still
[05:23] tougher to be started or to make
[05:25] sniffing progress is the scene
[05:27] submission and the the overall render
[05:29] pipeline it glues all together so yeah
[05:32] it's hard to give it like a to give this
[05:37] if this is the time where we it's like
[05:40] from beginning to end but we're here
[05:42] it's not me but I don't know it's hard
[05:47] to give a these are each these six
[05:50] things are extremely big and complicated
[05:52] in themselves we have lots of designs
[05:53] there's endless discussions on each of
[05:55] these topics
[05:56] so even when programming hasn't started
[05:58] we can be many weeks into work before we
[06:01] even got to that stage so yeah there's
[06:05] progressing well though and there's a
[06:06] lot of resources dedicated this
[06:07] internally well you could save some time
[06:10] if you just skip the chromatic
[06:11] aberration public it wouldn't be a lot
[06:14] of time
[06:17] I won't even get into that argument okay
[06:21] and what are the before I let you go
[06:26] what are the you touched on the benefits
[06:29] earlier but but just in a short looking
[06:32] for the sound but I guess in summary
[06:34] what's the benefit of this work why are
[06:37] we doing this work two reasons the first
[06:40] reason is performance we get the ability
[06:42] to spread I use a more efficient API
[06:45] they can spread work over all of your
[06:47] CPU cores which rules all in a much much
[06:50] faster rendering process on the CPU side
[06:52] and much lower latency as well latency
[06:55] is quite important a lot of people these
[06:57] days and the second side is because more
[07:00] modern API it opens a door to many new
[07:03] features that we didn't previously have
[07:05] access to which are things like ray
[07:08] tracing VRS and async compute and
[07:11] there's a lot of things we couldn't do
[07:12] locked to the previous API ID so
[07:15] performance then features afterwards so
[07:19] it seems like a big part in letting star
[07:21] citizen realize its full potential
[07:24] we don't really have a choice this has
[07:26] to happen this is the next logical step
[07:28] we can't really achieve the performance
[07:29] or the visuals we want without taking a
[07:32] step first want to put a date on it No
[07:39] thank you it's our biggest focus this
[07:42] year there's nothing else that we are
[07:43] putting anywhere as much resource in for
[07:46] the graphics team for the graphs to go
[07:48] yeah jitter just a graphics an engine
[07:50] team yeah fair enough all right Ali
[07:52] thank you I think that was great
[07:54] I think we covered what it is how it
[07:57] works and why we're doing it and
[07:58] couldn't ask for anything more so thank
[08:00] you so much I'll let you go
[08:01] thanks a lot I take it alright so for
[08:05] our next question we were going to
[08:06] senior system designer Geoffrey coffin
[08:08] for a question about the idris Jeffery
[08:10] how you doing man
[08:12] I'm alright I'm alright it's a different
[08:14] working from home but I'm progressing
[08:16] that's our that's our reality for the
[08:18] moment thank you for taking the call
[08:19] we're gonna jump right into this we have
[08:22] a question about the Idris now players
[08:25] know that the Idris is being introduced
[08:28] into the persistent universe with the
[08:29] upcoming Arlington bounty series but
[08:32] that's an NPC controlled address this
[08:34] question is about the player facing
[08:38] address you give us a status update on
[08:41] where the Idris is in regards to being
[08:44] available for players in the brazils
[08:46] universe yeah sure so the x-ray of the
[08:49] address is mostly there which is why
[08:51] we're gonna be putting on to be using
[08:52] its all the damages so a lot of damages
[08:55] set up for it the exterior networks all
[08:58] their thrusters etc which is why that
[08:59] can happen but for the interior it's
[09:02] still fairly working progress because
[09:03] squadron 42
[09:04] it's very working progress they're still
[09:06] we need like anybody works to go in any
[09:10] changes to the peak up or anything needs
[09:12] to be updated within the address the
[09:14] interior is still very much in flux and
[09:16] in addition to all that as well it's a
[09:18] big multi cruise ship so as these as
[09:20] these features get implemented we need
[09:21] to obviously refine what's present
[09:23] inside the ship so currently as it
[09:25] stands really the ship interior isn't in
[09:28] the stage where we can give it to the
[09:29] public and probably won't be for a while
[09:31] you make you mean you made a comment
[09:34] there about the multi crew and we're
[09:36] gonna talk to Dave Coulson here in a
[09:37] little bit about multi crew gameplay it
[09:40] can't be understated how important that
[09:41] is to something like the interest
[09:42] because the interest is is because
[09:44] there's a capital ship yeah you mean is
[09:48] one person meant to just fly this thing
[09:50] around like a fighter is one person can
[09:53] technically fly around like a fighter
[09:55] but you you will be getting barely any
[09:58] other ships functionality out of it I
[09:59] mean your pilot will be able to you know
[10:02] fly the ship but you're supposed to have
[10:03] a navigator who will be navigating where
[10:05] you're going to go to and helping you
[10:06] avoid or go to hotspots you'll have
[10:08] people Manning the air traffic control
[10:11] seats who if you want to have any ships
[10:13] take off and fly away or even new ones
[10:14] flying in you'll need to have you know
[10:16] someone to manage all about the pilot
[10:18] can't do all of this on their own you
[10:19] know weapon sees to handle
[10:21] the railgun at the front even a captain
[10:23] who if someone's being belligerent in
[10:25] the crew might be able to turn around
[10:26] and like demote someone on the fly and
[10:28] say no you can't do that anymore so
[10:29] there's a lot of this functionality that
[10:31] is going to be going into the ship it
[10:33] should be going into the ship but it's
[10:35] just not there yet we don't have it
[10:36] ready like so essentially what you would
[10:38] have if you release the interest right
[10:40] now is a giant fighter and just no I
[10:44] don't think most people would appreciate
[10:45] that it's very nerve talk to me a little
[10:49] bit about the work for the Arlington
[10:51] Bennie mission before we let you go now
[10:52] it is coming the the exterior control
[10:54] the NPC control the exterior is coming
[10:56] to the - there are n thin bounty series
[10:59] in half of three point nine how do you
[11:02] balance something like this it was
[11:05] really tricky so initially before
[11:07] obviously like the mission took too much
[11:10] shape one of the first things that came
[11:11] my ways was to actually try to balance
[11:12] the address around fighting different
[11:14] amounts of ships so I'd start spawning
[11:16] like hammer head after hammer head after
[11:18] hammer head just having like tons of
[11:20] hammer hits fighting the ship and then I
[11:21] try out maybe throwing in some Italia
[11:23] toes with their torpedoes one of the
[11:24] first things we quickly discovered was
[11:26] with the way the ship's currently set up
[11:27] there they've got like a small health
[11:29] pool on multiple parts of the ship and
[11:31] as you take damage it'll spread up the
[11:33] ship and eventually go to the core
[11:34] location then kill the ship what
[11:36] happened with one size 9 torpedo is the
[11:38] Splash Damage within so many locations
[11:40] one would just kill the interest
[11:41] straightaway so we immediately like
[11:43] right we need to give this thing a
[11:44] bigger centralized health pool and then
[11:46] kind of have have the other areas have
[11:48] slightly less just to kind of balance it
[11:50] out so it was a lot of iteration just on
[11:52] the health of the ship alone let alone
[11:54] tweaking the the shield generators
[11:56] because this things are capital size
[11:57] your generators like the 890 has which
[11:59] make it huge and very difficult to
[12:01] damage in the first place so there was a
[12:03] lot of juice or base iteration just
[12:05] making this thing resilient enough to
[12:06] actually require a bunch of people to
[12:09] kill but not be completely unkillable in
[12:11] the first place and I imagine one of the
[12:13] benefits of it going into the precision
[12:16] universes that we're going to be able to
[12:17] to witness thousands and thousands of
[12:21] players you know fighting this thing and
[12:23] taking this on and
[12:24] and getting that data back that will
[12:26] help additional balance see in the
[12:27] future absolutely like these capital
[12:30] ships they're kind of untested waters as
[12:31] far as obviously net game play games you
[12:33] had fighters out in there in the
[12:34] university years we know very like very
[12:36] well how they work but for these much
[12:39] larger ships which you're not supposed
[12:41] to be able to take that with an
[12:42] individual fighter so having you know in
[12:44] a radius just ramming to the interesting
[12:46] killer would be a problem
[12:47] so having taking out the players who are
[12:50] a fairly creative bunch there's probably
[12:51] going to be a lot of interesting ways to
[12:54] kill the interest that I'll get
[12:54] discovered and we can start trying to
[12:56] you know work around whatever gets
[12:57] discovered out there is going to be
[12:59] interesting certainly you're looking
[13:01] forward to seeing in action it's like
[13:05] every ship I work on you know you get
[13:07] that sense of pride for what you really
[13:08] wanted to do well even like I worked on
[13:10] the Argo Emperor and that's just yes I
[13:13] think you won about but I still I'm
[13:14] still really proud of it and this ship
[13:16] is it's huge I've been working on this
[13:17] one for years so I'm really looking
[13:19] forward to it actually getting to go out
[13:20] there and even if the players can't fly
[13:22] it they can at least blow it up we'll
[13:25] see alright man I'll let you go thank
[13:28] you so much for taking the time to
[13:29] answer our questions today man alright
[13:34] so last but certainly not least this
[13:36] question is a biggie and I think we're
[13:38] gonna go to Dave Coulson gameplay
[13:40] programmer from the vehicle feature team
[13:41] Dave how you doing man pretty good
[13:43] thanks I called you Dave I know you
[13:45] don't appreciate that I'm sorry David
[13:46] that's right we're gonna jump right into
[13:49] this this question from the starsin
[13:52] tobacker voted up is deeper multi crew
[13:55] gameplay planned
[13:58] yeah absolutely deeper multi-crew
[14:00] gameplay has been planned for I have
[14:02] since the beginning right some interest
[14:04] has been kind of picking up on it
[14:06] recently we've had some discussions with
[14:08] CR and to kind of refine how we're gonna
[14:11] go about things
[14:13] we've been looking into you know
[14:16] building this permission system for
[14:18] ships where the captain can assign item
[14:23] control to specific people in the ship
[14:25] so he can you know give the engineer the
[14:28] role to control the power plan and the
[14:30] coolers and a weapons officer in the
[14:32] related control weapons that sort of
[14:34] thing right and the hope is that over
[14:37] time as we add more and more depth of
[14:40] service systems gameplay inside the
[14:42] ships that combined with the permission
[14:45] system will be conducive to more and
[14:47] more deep multi to gameplay because
[14:49] right now I think all of the ship
[14:51] control pretty much gets funneled to the
[14:53] pilot and that's kind of the issue that
[14:55] we want to solve in the near term and
[14:57] then we'll continue adding depth to add
[15:00] to make the multi crew experience more
[15:01] interesting as we keep going right so
[15:04] where does that start does that start
[15:06] with the development of the individual
[15:08] game features like like the evolution of
[15:10] power systems the evolution of
[15:12] components and subcomponents and stuff
[15:14] like break the process out for for us
[15:20] how this comes to life it starts with
[15:23] game systems I imagine yeah it starts
[15:26] with game systems it's it's one of those
[15:28] things that like we don't want to have
[15:30] this like very artificial feeling oh
[15:33] this is what you do if you're this role
[15:35] and you know if you're a weapons officer
[15:38] this is your screen and it's designed
[15:40] for economics we want it to feel a
[15:42] little bit more natural where players
[15:43] can come up with these roles themselves
[15:47] but what we need to do is we need to
[15:50] consider how the gameplay systems in the
[15:52] ship interact with each other and more
[15:54] importantly how players interact with
[15:56] them so that when they get combined
[16:00] together the natural result will be you
[16:04] know roles like you see in like you know
[16:06] a stereotypical multi-crew spaceship and
[16:10] so that's pretty much what we're doing
[16:12] like reviewing a lot of a lot of ship
[16:14] systems and trying to see what we can do
[16:17] to increase the depth and make it
[16:20] interesting for players to engage with
[16:24] those systems and then obviously you
[16:26] know longer term is adding more features
[16:28] to ships and I think that's probably
[16:31] enough discussion for another calling
[16:32] event are we talking like like mini
[16:36] games or QuickTime events how does this
[16:39] manifest to the to the play like let's
[16:42] just say something like an engineer for
[16:43] an example if I'm playing an engineer am
[16:45] I gonna be sitting here going you're
[16:48] playing Simon Says do me and then the
[16:51] thing is magically fixed we don't want
[16:53] we don't want mini games we don't want
[16:55] QuickTime events as I said it's it needs
[16:58] to feel natural it needs to feel like
[17:00] this is the obvious thing for that
[17:02] player to do so take engineer for
[17:03] example the way an engineer might go
[17:07] about things is if we increase the sort
[17:10] of interaction inside ships which you
[17:13] have you know maybe we have like
[17:16] life-support inside the ship is failing
[17:18] and you're you've run out of oxygen or
[17:19] something like that the engineer might
[17:21] have to walk over to a panel that has an
[17:26] oxygen bottle have to open the panel go
[17:28] inside get this oxygen what lab do some
[17:31] actions to repair it I'm not exactly
[17:33] sure how they'll work we haven't haven't
[17:35] flesh that out quite yet and then
[17:39] they'll go back and put that back in and
[17:41] make sure it's working and so that's the
[17:44] kind of thing where it's it's not it's
[17:47] not minigames for a role its actions
[17:50] that that interact with the ship systems
[17:53] as the players yes physicalized some of
[17:57] them are physicalized right learned
[17:59] about one is obviously physicalized but
[18:00] like for example you know scanning for
[18:04] stuff is probably not physicalized it's
[18:06] gonna be something where you're at a
[18:08] scanning station with like a you know a
[18:10] globe that shows you nearby context on
[18:13] the radar and you know that sort of
[18:15] thing it'll it'll depend a little bit on
[18:16] what the feature is as to how it'll
[18:19] manifest in the ship but obviously we
[18:22] want some kind of a writing so and it's
[18:24] not silly capabilities of that ship
[18:25] because not every ship has yes yeah
[18:27] obviously yeah yeah so like for example
[18:30] a ship that has a med bed might have
[18:33] more sort of gameplay for a medical
[18:35] officer whereas ships that don't that
[18:37] won't be applicable but yeah absolutely
[18:39] yeah I you said you just you recently
[18:42] just had a meeting with with CR that
[18:44] this is a topic of conversation that's
[18:46] current right now did you come out of
[18:48] that with any particular roles by the
[18:53] way that we're looking at that we're
[18:54] considering yeah
[18:57] so captain obviously is the the biggest
[19:01] most interesting one the captain first
[19:05] and foremost has this ability to assign
[19:07] permissions to players but the captain
[19:10] also we view as kind of like you know
[19:13] being a captain is kind of like playing
[19:14] a real-time strategy game where you you
[19:17] say you will be able to see what's going
[19:19] on in the nearby like battlefields say
[19:22] if you're in a bow to the globe and then
[19:24] the captain is like you know pointing
[19:27] things out and giving orders to various
[19:28] people on the ship and you know trying
[19:31] to direct how things are progressing
[19:32] while you're playing the game and that's
[19:36] kind of Celeste the captain that's the
[19:37] first role or how we kind of see what
[19:39] their their actions are and pilot
[19:42] obviously is pretty much already defined
[19:45] engineer is a big one
[19:47] this is going to be you know when we get
[19:51] to increasing the depth of the power
[19:53] systems inside large ships the engineer
[19:56] will be you know naturally suited to
[19:58] that kind of role there's also like
[19:59] security officers which they can control
[20:02] door access and that sort of thing
[20:06] I played generally yeah I've not played
[20:09] gyre but I'm one of those before you
[20:11] know as old people will know what I'm
[20:14] talking about you didn't know yeah so
[20:18] those I think those are probably like
[20:19] core pillars right so you got like
[20:21] engineer captain pilot and then probably
[20:24] like tactical officer or I don't know
[20:28] what you would call the person who's
[20:29] looking after scouting and radar is that
[20:31] tactical officer or science officer if
[20:35] you're not yes it's not a battle for
[20:37] instance
[20:38] yeah I think those are the main roles
[20:41] and then I think there might be specific
[20:43] roles for certain ships depending on
[20:45] their feature set and players could also
[20:48] just define their own roles if they want
[20:49] it's not up to us if they want to give
[20:52] players that or give a certain player a
[20:55] specific set of items to control you can
[20:57] make up that role however they want I
[20:59] think I think that's that that's a big
[21:02] part of this I don't want to bury the
[21:03] lead there it's less about I think it's
[21:06] less about us designating the types of
[21:08] roles that players will be able to
[21:10] assume on a ship and more about
[21:12] providing people the tools and the
[21:15] systemic ability to create their own
[21:19] rules absolutely I think that's a much
[21:22] more interesting gameplay prospect and
[21:25] it's definitely what Chris is always
[21:27] wanted for a multi-crew and this is this
[21:30] is why interest and this is like picking
[21:32] up for us at the moment because we want
[21:33] to help the players define these roles a
[21:37] little bit better and give those roles
[21:39] something to do but I think that will
[21:42] result in the most interesting and
[21:44] varied multi-crew experience rather than
[21:46] having these like originally defined
[21:48] calls so so it sounds like before I let
[21:52] you go just to make sure I kind of
[21:54] understand
[21:56] not necessarily a timeline but but but a
[21:59] flow here it's developing the individual
[22:03] ship systems like like power like
[22:06] scanning like you know making scanning
[22:07] more robust making power management more
[22:09] robust making components and component
[22:12] systems damages step more robust
[22:14] developing those individual systems and
[22:17] then it's finding a way to assign
[22:21] permissions to manage those systems and
[22:24] and study but yeah and then from there
[22:27] players will have the tools necessary to
[22:29] to create their own rules on ships yeah
[22:33] absolutely
[22:33] I think the order when things to come is
[22:36] not exactly known like we it may be that
[22:41] the ability to assign permissions is
[22:43] something that we end up doing sooner
[22:45] rather than later just because of how my
[22:47] core that is to you know that experience
[22:50] because right now as I said
[22:51] just assigning all the permissions to a
[22:53] specific player ruins a lot of this
[22:56] right so yeah and then obviously
[23:01] increasing the depth of the features is
[23:04] going to be an ongoing process cool man
[23:09] I think that's it I think that's a
[23:11] productive we haven't we haven't been
[23:12] able to update on this topic for a while
[23:14] so I appreciate it especially since you
[23:17] just had the meeting with CR recently
[23:18] about it so yeah I'll let you go man all
[23:22] right so your thank you we'll see you
[23:23] again all right well that wraps up this
[23:25] episode of calling all Deb's
[23:27] I want to thank Allie Brown Jeffrey
[23:28] Kaufman and Dave Coulson for taking time
[23:31] out of their schedule to answer our
[23:32] questions for us this episode remember
[23:34] that you can submit your questions for
[23:36] consideration up on spectrum which is
[23:38] the communication platform available on
[23:40] Roberts space industries calm and you
[23:42] can vote to see which questions you want
[23:43] to see address most for calling out debs
[23:45] i'm jared huckaby we'll see you next
[23:47] time
[24:03] you

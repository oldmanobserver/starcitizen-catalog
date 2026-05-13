# Inside Star Citizen: 890 Reasons | 3.5 Ep. 4

**Video:** https://www.youtube.com/watch?v=uFGfDDlAsUc
**Date:** 2019-05-16
**Duration:** 10:34

## Transcript

[00:05] they say a ship is more than the sum of
[00:08] its parts and part of the fun of
[00:09] spaceships is putting yours against
[00:11] others in the persisting universe now we
[00:13] all know the joy of utterly destroying
[00:15] your opponents in a spirited spectacle
[00:17] of space but sometimes you'd rather
[00:19] disable them and leave your options open
[00:22] like maybe searching through those
[00:23] ship's parts and that's exactly what
[00:25] Matthew and Patrick are working on right
[00:27] now preparing ships for the sub system
[00:29] targeting of components let's check in
[00:31] with them and see where they're at we've
[00:35] been helping out the I FCS team with the
[00:38] thruster items helping them with the
[00:41] damage there's about a hundred twenty
[00:43] thrusters that you've been going through
[00:44] uh yeah so far so good so the first
[00:47] thing I did was actually I went through
[00:49] and I did all the individual thrusters
[00:51] so now every single thruster item which
[00:53] has its own health also has its own
[00:55] proxy which is collision yeah that is a
[00:57] collision mesh which means that's what
[00:59] dictates that damage happens to the
[01:01] asset after I finished all the thrusters
[01:03] I had to go through every ship and then
[01:05] heat ship needed to be accessible so
[01:08] like for example like over here we see
[01:10] there's a concavity now where the
[01:12] thruster sits it's that way we can
[01:15] strike it directly yeah so you could see
[01:17] that over here on the prospector that
[01:19] was actually flat now but you can go in
[01:20] and you can actually shoot it damage it
[01:22] individually get right in there and in
[01:24] the debug here we see these green bars
[01:26] or the health is actually going down as
[01:28] you shoot basically when we're shooting
[01:30] the thing these little health bars go
[01:31] down which are also represented on the
[01:33] mesh so each individual thruster can
[01:35] show me where it is
[01:36] how much health it has and I can see the
[01:38] damage transfer through that asset into
[01:40] others and that's similar how players
[01:42] will see in their MFD they'll see the
[01:45] thruster glow from yellow and into red
[01:49] as it's like about to be destroyed
[01:51] mm-hmm and mains for example have some V
[01:53] effects that happen as they slowly
[01:54] degrade they take some damage they emit
[01:56] more particles so that's kind of how
[01:59] those are getting set up now no right
[02:01] now like you have to shoot into these
[02:03] recesses to actually strike the thruster
[02:06] right correct but like in the future
[02:08] we'll be able to shoot through the hole
[02:09] with our Pierce ability to
[02:11] and then strike the thruster that's
[02:14] under the hall when you're attacking
[02:16] someone they'll slowly degree their
[02:18] performance and that's kind of the end
[02:20] result is to create Ward like a dynamic
[02:22] gameplay flow and you could see in this
[02:24] mission particularly capped so I had to
[02:27] go in and sort of chisel the whole back
[02:28] come in extrude these out that way you
[02:30] can shoot each thruster individually
[02:32] same thing goes for the rest of the
[02:33] ships down the line alright so is that
[02:36] good is that is that pretty much what
[02:37] you wanna do all set yeah all right
[02:39] okay can I actually get back to work now
[02:41] ever get things to do I got a lot of
[02:43] thrusters to do the proxies to model the
[02:46] public roadmap is your tool to see what
[02:48] features are in active development
[02:49] heading your way each quarter but
[02:52] oftentimes some of the less flashy
[02:54] features can get overlooked I'm looking
[02:57] at you game object extensions conversion
[02:59] or at least I would be if you had a
[03:01] visual component to look at with that in
[03:04] mind we asked Jen's and Gordon to sit
[03:06] down and talk with us a little bit about
[03:08] what client-to-server
[03:09] actor networking rework means hi sir I
[03:13] almost got through it let's find out
[03:16] more
[03:17] [Music]
[03:18] the first step for this was the server
[03:21] decline actor Network can rework so this
[03:23] is changing how the clients our client
[03:26] server serves client yeah the client
[03:28] server this is changing how the client
[03:29] talks the server when we released on
[03:31] marine one thing we found this every we
[03:34] really wanted to improve was lag or the
[03:37] person perception of like Tim poor
[03:39] improved the PvP experience currently
[03:43] were Philly quite assertive and so that
[03:45] means when I press forward in my machine
[03:47] and my actor runs forwards to meters it
[03:51] works out his new position in that
[03:52] position set up the server which is fine
[03:56] that's an okay wait in there the
[03:57] networking and we're switching to being
[03:59] separate oh yeah essentially on the
[04:01] server you're just teleporting around
[04:02] instead of everyone else seen you
[04:05] teleport around said the way around so
[04:06] it's no use Excel weren't around so your
[04:08] experience is degraded rather than every
[04:10] other player in the server having their
[04:11] experience degree just about finished
[04:13] client server the next one server
[04:14] decline improving the communication down
[04:16] the way and so at the moment for
[04:18] instance we've got an artificial core of
[04:21] a second
[04:21] rewind time injected into the system and
[04:25] to try and smooth over note and the idea
[04:26] is to reduce that significantly don't to
[04:28] maybe a frame or two so when I'm hunting
[04:30] you install marine where I see you are
[04:32] is where you are what you do no longer
[04:34] bunny hopping around when you're trying
[04:36] I may turn on your chief this server is
[04:39] gonna punish you when you're trying to
[04:40] hunt me in story and yes it will be a
[04:43] much better experience for you we would
[04:44] shoot me much easier good so why do you
[04:51] think well I mean it's an important
[04:53] thing that we need to be talking about
[04:54] it has no visuals though I wish to
[04:56] episode had more of a punch to it a
[04:59] punch like what do you mean well it
[05:02] would have been really cool to do a
[05:03] sprint report this episode but we didn't
[05:04] me didn't get it in in time camera racer
[05:07] hmm for the camera
[05:09] Wendy little button there's been in
[05:11] camera right there you mean do a spree
[05:13] report right now that was unplanned and
[05:15] not in the original host
[05:16] why not I mean let's do it hey it's our
[05:21] show here's your sprit report
[05:25] the EU gameplay feature team continues
[05:27] their sprint on clustered harvestable
[05:29] shown here with some test assets
[05:31] provided by the art teams the new tech
[05:33] on display here is the ability to spawn
[05:34] clusters of harvestable entities and
[05:36] varying degrees of density and distance
[05:38] from one another and this tech can
[05:40] potentially be applied to additional
[05:42] features like surface side my novel
[05:44] entities and even asteroids in space now
[05:47] it'll be a while before you see this
[05:48] tech in the game but this is an
[05:50] important milestone that lays the
[05:51] groundwork for future development now a
[05:53] couple weeks ago in the RSI weekly
[05:55] newsletter you may have noticed this
[05:57] image of a new helmet with hologram
[05:59] imaging coming to subscribers in quarter
[06:01] three of this year it's part of an
[06:03] initiative we're taking to revamp the
[06:04] subscriber program in general
[06:06] starting with unique decorative items
[06:08] that you won't be able to find anywhere
[06:09] else also slated for cuerda 3 is this
[06:12] Centurion s helmet and to those of you
[06:14] that have been asking both will be
[06:16] completely wearable by players the US
[06:19] vehicle team is working on materials
[06:21] development for the band new defender
[06:22] you know follow-up to our segment a
[06:24] couple weeks ago what you're seeing here
[06:26] is essentially an untextured version of
[06:28] the exterior as the team explores a
[06:30] variety of alien material types that
[06:32] have to work in a multitude of
[06:34] environments and lighting situations
[06:36] finally the environment art team is
[06:38] continuing their work developing the
[06:40] shared resources that will make up much
[06:42] of micro Tech's buildings and interiors
[06:44] referred to internally as the high tech
[06:47] common elements set now here's one
[06:49] potential exploration of what a transit
[06:51] hub might look like and well these these
[06:56] trains these trains might be placeholder
[06:59] they're they're almost certainly
[07:01] basically that's a hotdog
[07:05] spaceships come in all shapes and sizes
[07:08] from the tiny Argo MPU V to the massive
[07:10] Aegis javelin and beyond their
[07:13] cornerstone to the star citizen
[07:14] experience and one of the most
[07:16] anticipated ships on our roadmap is the
[07:17] 890 jump from origin this massive luxury
[07:20] ship is being worked on by multiple team
[07:22] members ahead of its intended release in
[07:24] alpha 3.6 and Peter it was kind enough
[07:26] to give us a tour of some of the
[07:29] interior areas that he's been working on
[07:31] this week let's take a look
[07:36] currently on the 890 jump we're at the
[07:39] final art phase which means we've took
[07:43] all their gray box geometry that's been
[07:45] well established and we've worked out
[07:47] all our car styling and we just add in
[07:49] all the final text years that lighting
[07:51] all the bells and whistles that pull it
[07:54] together now Nova fins in there at fan
[07:57] alert but what we have here is the fire
[08:00] area that leads you into the social hub
[08:04] of the ship this is where you do all
[08:06] your entertaining so as we go through
[08:08] your father's they've got your toilets
[08:10] got your bar area you'll notice here
[08:13] we've got a little side room and this is
[08:15] your service lift that the crew who look
[08:18] after the guests that used to come and
[08:20] bring you your drinks in your food
[08:21] really notices it's quite can a bit of a
[08:25] change of the palate from the rest of
[08:27] the ship and this is intentional that
[08:29] may feel more relaxed this is import
[08:32] from feedback from the 600 community
[08:34] felt it was a little wasteful with a
[08:37] space that used the styling it's a bit
[08:39] more fancy because it's a luxury ship
[08:42] after all rather than an exploration
[08:45] vessel like the 600's so that's the bar
[08:48] area and we go through to the dining
[08:51] area this room ended up being a little
[08:55] larger than we first planned and that's
[08:57] because I was here sir ship wood decks
[09:00] and changes of knock arms and we wanted
[09:04] a pool in here actually I was showing
[09:07] this to a backer he was actually part of
[09:09] an 890 Club and I can use that to bring
[09:11] Romi 819 marries and we can discuss our
[09:14] plan for things planned for
[09:15] get-togethers basically that's what this
[09:18] ship is all about it's you your
[09:20] partnership where you're going up your
[09:22] mates around you're gonna have fun you
[09:25] can use it for different things but
[09:27] that's essentially what it's about so
[09:30] what do we learn this week we learned
[09:33] that we're another step closer to the
[09:34] greater gameplay opportunities provided
[09:37] by disabling ships instead of blowing
[09:39] them up performance improvements are
[09:41] made in a variety of smaller features
[09:42] that add to the overall whole and the
[09:45] eight ninety jump is big enough to fill
[09:47] eight hundred and ninety segments
[09:49] gonna drag this thing out because we
[09:51] still have a lot of shows to fill every
[09:52] quarter to our subscribers will see some
[09:55] of you tomorrow for our live studio
[09:56] audience edition of star citizen live in
[09:59] to everyone else out there in backer
[10:00] land we'll see you next week
[10:04] [Music]
[10:13] thanks for watching for the latest and
[10:16] greatest in star citizen squadron 42 you
[10:18] can subscribe to our Channel or you can
[10:20] check out some of the other shows and
[10:21] you can also head to our website at

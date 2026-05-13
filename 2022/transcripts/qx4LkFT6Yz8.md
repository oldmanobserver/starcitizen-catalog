# Inside Star Citizen: Q3 Follow Up | Summer 2022

**Video:** https://www.youtube.com/watch?v=qx4LkFT6Yz8
**Date:** 2022-09-29
**Duration:** 15:08

## Transcript

[00:04] it's a time of change here at Star
[00:06] Citizen the Frankfurt office has moved
[00:09] into their new digs the Winslow office
[00:11] prepares to migrate to Manchester
[00:13] starting next week our citizencon
[00:15] presentations are looming just nine days
[00:18] away and much of the focus of our
[00:20] development teams at present is in
[00:21] preparing for the upcoming Alpha 318
[00:24] with persistent entity streaming that
[00:26] serves as the foundation not only of
[00:28] server meshing in Alpha 4.0 but
[00:30] everything else in the persistent
[00:32] universe as well and since Alpha 318 is
[00:35] now scheduled to arrive in the first
[00:37] half of November and ISC enters its
[00:40] regularly scheduled Hiatus the next few
[00:42] weeks we thought we'd take the
[00:43] opportunity to try something new with
[00:46] our last episode of the quarter a
[00:48] follow-up to each of the 318 related
[00:50] feature segments that we've done this
[00:51] quarter looking at how they've continued
[00:53] to grow since we last showed them to you
[00:55] answering your questions that you had
[00:57] after watching and rolling them all into
[01:00] one big super sized report that we're
[01:02] calling the ISC follow-up
[01:05] because we're we're really really good
[01:07] at naming things
[01:09] enjoy
[01:12] so since updating you on the rivers
[01:14] earlier this year I've been focusing on
[01:15] the visual quality of the rivers
[01:16] themselves so when you explore them they
[01:19] are looking better than ever
[01:21] I think the biggest visual change I've
[01:23] introduced to the rivers is the new
[01:24] Cliff spawn points previously where we
[01:28] had steep edges along the river we just
[01:30] had the terrain texture that we get on
[01:32] steeper parts of the terrain but I
[01:34] wanted to kind of increase the visual
[01:37] Fidelity of this by spawning Cliff
[01:38] meshes along the edge of it so that's
[01:41] exactly what we've done
[01:43] for the cliff mesh spawn points we add a
[01:46] new spawn point at the height of where
[01:48] the terrain would have been if the river
[01:50] wasn't there so that we can control
[01:51] where the top of the cliff is relative
[01:54] to the edge of the terrain near it and
[01:57] that's these red spawn points you can
[01:58] see here
[01:59] when I turn these back off
[02:04] you can see we have Cliff meshes that
[02:06] look as if they're the right height you
[02:08] can walk onto them from this terrain
[02:10] here while still providing a nice kind
[02:13] of closed-in gorge for this River
[02:17] and actually we were so happy with the
[02:19] results of adding additional spawn
[02:21] points around these gorgey areas that we
[02:24] decided to add more spawn points along
[02:25] the edge of normal Rivers as well so
[02:28] that we can get rocks right along the
[02:29] edge of the water to break up the
[02:31] silhouette between the terrain and the
[02:32] water you can see those points here and
[02:35] when I turn back on the scattering you
[02:37] can see what that looks like
[02:38] so as you can see that really helps to
[02:40] break up the silhouette of the water but
[02:42] also makes the whole area feel denser
[02:44] and more real
[02:46] another visual Improvement I've worked
[02:48] on for the river is using more splines
[02:50] for the river modifiers instead of just
[02:52] a single Central spline along the path
[02:55] of the river we now have a spline for
[02:57] where each of the edges can be and this
[02:59] gives us much finer control over how the
[03:01] terrain should dip down into the river
[03:03] which is what actually matters rather
[03:05] than the depth at the middle for most
[03:07] cases but it also means that we
[03:09] eliminate some of the effects we were
[03:10] getting at sharp bends what we used to
[03:14] get at the sharp Bend of a river was a
[03:16] pinching effect in the middle here where
[03:19] the terrain would jump from referencing
[03:21] a point somewhere here on the spline to
[03:23] reference single point somewhere here on
[03:24] the spline so you can see that they're
[03:26] basically equal distance from a point
[03:28] over here so we'd either be referencing
[03:30] the terrain from one or the other
[03:31] without ever kind of passing through
[03:33] this middle bit now that we have a
[03:36] spline for each Edge we can pick which
[03:38] Edge is closer and then more closely
[03:41] reference that when picking the final
[03:42] height for that part of the terrain and
[03:45] it just means that the the edges of our
[03:47] rivers are much much cleaner we're
[03:49] getting much less in terms of
[03:50] artifacting that we were seeing before
[03:52] and the overall result is just a lot
[03:55] better in my opinion
[03:56] [Music]
[03:58] I'm really really excited to see all of
[04:01] the new Rivers come into 318 very very
[04:04] soon put a lot of work into improving
[04:06] the visual quality of the rivers as well
[04:08] as improving the tooling for our artists
[04:10] to be able to place more and more
[04:12] interesting Rivers our Tech artists have
[04:15] been hard at work for the object presets
[04:16] for the for the rivers to make the make
[04:19] sure that we're getting really really
[04:20] cool distributions of objects around
[04:22] them and I just think what we're going
[04:24] to see in 318 is going to be A Cut Above
[04:26] what we've had so far and I'm really
[04:27] looking forward to it thanks all
[04:35] foreign
[04:39] we spoke about the PTV racetrack it's
[04:42] been mostly just bug fixing for the most
[04:45] part it's been like the usual occasional
[04:48] Collision issue we had to fix up
[04:51] um also there was like instances where
[04:55] rqa testers just
[04:57] took the card and went off the of the
[04:59] track and like drove into the elevators
[05:01] and got into other parts of the level so
[05:04] I kind of had to go around and fence off
[05:07] all the areas where people could leave
[05:09] the track also just in some cases
[05:14] on like inside the track there was
[05:17] a little shortcuts
[05:19] that could be taken so also these ones
[05:22] had to unfortunately block them off so
[05:24] nobody can gain an unfair advantage
[05:27] one of the things we didn't discuss last
[05:29] time is where the buggies actually come
[05:30] from so this they're not something the
[05:33] players bring themselves into the space
[05:34] there is this little side section of the
[05:37] track where they spawn and you take them
[05:40] and then just kind of bring them over to
[05:42] the to the starting line and start from
[05:44] there
[05:46] and when they're destroyed then they
[05:48] basically respawn in that section again
[05:50] so there's always eight buggies for the
[05:52] players
[05:54] I can't wait to see what place uh we'll
[05:56] do with it once they get it in their
[05:58] hands
[06:01] it's the last time we spoke Korea has
[06:04] changed a lot in its environment uh
[06:06] we've been sort of building opened
[06:08] sort of breathing new life into it
[06:11] making it on par with uh some of our
[06:13] locations in terms of branding and sort
[06:16] of how we want the player to move
[06:18] through the space
[06:22] with this cs1 and two crimes that one
[06:26] and two are no longer going to be things
[06:29] that get you shocked or get you you know
[06:32] stop you from landing at a location
[06:33] these fines will essentially just be
[06:36] like mini slaps on the wrists law
[06:37] enforcement or comment on them when they
[06:39] stop you and tell you to go pay you find
[06:41] off but they're not going to be as big
[06:43] of a a meaning as they once was
[06:46] alongside this we've also added uh other
[06:50] ways for the players to
[06:52] get rid of their sort of criminality to
[06:55] find kiosks that you can find all around
[06:57] now have a button that allows you to
[06:59] surrender to law enforcement this gives
[07:01] you the 20 discount of your time served
[07:05] when you go into prison
[07:08] uh and as always this is gonna go live
[07:10] and we're going to continue iterating on
[07:12] it reading feedback and making
[07:13] improvements
[07:17] so when the first video released and we
[07:21] was talking about cluster I was watching
[07:22] HC vertigo
[07:24] um and he pretty much nailed the mission
[07:26] and who was given it so uh I'm not gonna
[07:29] spoil it I don't want to let you know
[07:30] but uh yeah if you want to find out who
[07:32] it is go check out he Virgo
[07:35] since the last time we talked about
[07:37] clasher and the new updates to that
[07:39] things are going along nicely we have ai
[07:42] walking about uh they have Loot on them
[07:45] uh they're making the environment feel
[07:47] more alive the black spot is in the
[07:51] mission is working in the mission we've
[07:54] added roots coming out of the wall so
[07:56] that even though people might know how
[07:58] to beeline it out of there now they have
[08:00] to figure out how to get to this place
[08:02] they've never been to before and break
[08:04] the route they're normally used to and
[08:06] then have to rejoin which is the
[08:08] difficult part because we always make
[08:09] the rejoining bit harder and they can
[08:11] fall all the way down or you know
[08:13] whatever so that's it for the updates to
[08:15] clasha uh check it out when you get a
[08:17] chance
[08:18] foreign
[08:21] caves changed since we last spoke about
[08:24] them just on my fixes and some Polish
[08:27] work so
[08:29] yeah they're done
[08:33] so it's been a couple of weeks since the
[08:35] last time we talked about the Daymark
[08:37] crash site and since then we've mostly
[08:39] been polishing and debugging we had a go
[08:42] no-go during which everything went
[08:45] smoothly
[08:46] we actually noticed during play tests
[08:48] that the missions were too easy so we
[08:51] just did some tweaking we added some AI
[08:53] on the level art side they were working
[08:55] on some lods so how far the objects are
[08:59] going to display we did the better
[09:02] navigation pass for AI and for the
[09:04] player
[09:06] um and I think we tweaked a little bit
[09:07] the cave but there's just a crash chip
[09:10] in there nothing else
[09:12] we've also been working in integrating
[09:15] all the missions so there's going to be
[09:16] three missions on the Denmark crash site
[09:19] there's going to be a kill specific a
[09:20] kill all and a delivery missions where
[09:22] you need to go in and uh gather some
[09:25] crates and deliver them uh We've also
[09:28] been working on changing up the AI
[09:31] That's there because currently it's the
[09:33] nine tails and we wanted to add a little
[09:35] bit more diversity in there so we're
[09:38] working on adding in the sand Nomads
[09:40] which are probably not going to be here
[09:42] for this release but possibly the next
[09:44] one
[09:45] [Music]
[09:49] since we last talked about The Siege
[09:51] Verizon Mission last week uh I forgot to
[09:55] mention there's also submissions just
[09:57] coming to the islands that the siege of
[09:59] horizon takes place on
[10:02] so these missions are going to take
[10:03] place on the islands when Siege isn't
[10:06] active uh the missions we have you doing
[10:08] will take you from building to building
[10:10] eliminating a number of enemies or maybe
[10:13] taking out a high value Target
[10:16] these missions are currently just like a
[10:19] prototype they're very basic they're
[10:21] just kind of exploring what direction we
[10:23] want to go at for these and other
[10:25] Islands
[10:26] so these will be another small addition
[10:28] when 318 goes live
[10:34] so there were some questions after we
[10:36] released our last ISC where we talked
[10:38] about Hull scraping and uh there are
[10:42] some things that I can clarify from our
[10:44] position so what makes a reclaimer more
[10:48] profitable or better for in comparison
[10:51] to the vulture for t0 there is no real
[10:54] difference so the only difference there
[10:56] is you have more space to store your
[10:58] your script of Home material but the
[11:02] proper differences only come with Savage
[11:05] T1 so once we talk about
[11:07] munching and uh actually uh like
[11:11] converting proper ship debris into
[11:14] smaller bits the size of the the
[11:16] reclaimers definitely an advantage here
[11:19] some comments were all all asking about
[11:22] how can we use the scraper beam in an
[11:26] offensive manner technically you can but
[11:29] you have to make sure that the target
[11:32] ship has its Shield deactivated so as
[11:35] long as another ship is shielded you
[11:38] will not be able to touch the Hub
[11:39] because there's like this energy field
[11:41] that is protecting the hull
[11:44] so there were also some questions on the
[11:46] repair side and
[11:48] sadly this repair iteration isn't the
[11:51] full fleshed out repair that you might
[11:54] need if your ship is fully destroyed so
[11:56] if you lost the wing the wing is lost if
[11:59] you lost your engine the engine is lost
[12:01] so your your magically repair gun that
[12:05] right now is taking the hull material to
[12:07] create new Hull material so it this gun
[12:11] isn't able to 3D print you an engine a
[12:13] fully functional Engine with all its its
[12:15] parts so what it does is just cover up
[12:18] of like your Hull so it increases your
[12:23] health of the ship again but only to a
[12:26] degree where it is
[12:28] reasonable in comparison to to what the
[12:31] hull actually stands for
[12:33] so the material that you gather with the
[12:35] vehicle can be converted into the
[12:39] material that you use for your
[12:40] multi-tool to repair ships
[12:44] there's one more thing so we saw that
[12:48] you were already asking for what about
[12:51] players that are not interested in any
[12:53] combat scenario or in awaiting others to
[12:56] shoot themselves to shreds and then
[12:58] picking up the debris pieces for for
[13:01] profit from the hull scraping
[13:04] well we have a solution for for for you
[13:07] and um well the miners of you might
[13:10] already know it so we we will expand our
[13:13] harvestable system
[13:15] uh to also facilitate to spawn fresh
[13:18] derelicts and what our fresh derelicts
[13:21] basically they are just the husks of
[13:24] existing ships
[13:25] that have a probability to spawn in
[13:28] Asteroid Fields or like basically around
[13:31] all the LaGrange points and you will be
[13:35] able to find them using scanning and
[13:39] then approach them like you would do
[13:41] with a minable and then scrape off their
[13:44] home
[13:45] and that is coming in Alpha 380.
[13:49] so what did we learn this week well we
[13:51] learned that when you show a feature the
[13:53] very first week of the Season there's
[13:55] lots of room for additional improvements
[13:57] like we saw with rivertech that QA can
[14:00] be just as squirrely as players when
[14:03] testing the arena racetrack that Curry
[14:05] is looking pretty fresh with its
[14:06] Crusader makeover and that changes to
[14:08] the law system will make crime Stat one
[14:10] and two less Troublesome to deal with in
[14:13] the future
[14:14] in theory and that while Hall stripping
[14:16] won't be the offensive weapon some folks
[14:18] were theorizing using the harvestable
[14:20] system to generate non-combat wrecks
[14:23] will be a welcome addition to the more
[14:24] peaceful minded citizens out there now
[14:27] don't forget that citizencon is next
[14:28] Saturday October 8th at 8 A.M Pacific 3
[14:31] P.M UTC it's shaping up to be a really
[14:33] informative quarter day and not just
[14:35] visual updates that you've come to
[14:37] expect but more design and gameplay
[14:39] presentations that'll lead the way in
[14:41] the star citizens future where inside
[14:43] Star Citizen I'm Jared Huckabee we'll
[14:45] see you next week at citizen gun
[14:47] [Music]
[14:48] foreign
[14:50] [Music]

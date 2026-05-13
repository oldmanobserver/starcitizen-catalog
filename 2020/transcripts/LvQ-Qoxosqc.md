# Inside Star Citizen: Night and Day | Spring 2020

**Video:** https://www.youtube.com/watch?v=LvQ-Qoxosqc
**Date:** 2020-05-07
**Duration:** 10:13

## Transcript

[00:01] what is lighting it's more than just
[00:04] placing many lights around to brighten
[00:07] up a scene we also want to make objects
[00:10] and characters look good for example
[00:13] this scene right here it's it's clearly
[00:15] too dark the background is too dark you
[00:17] can't see me very well so for an
[00:20] interview situation this won't do so how
[00:23] would I fix this first of all turn on
[00:25] this light this adds a little bit of
[00:27] warmth a little bit of character on me
[00:29] specifically the background still too
[00:31] dark but we can take care of that later
[00:32] I think the next step is I would add
[00:35] some filled lights so now I'm a little
[00:38] bit better lit I've got this is mag
[00:41] light here I could probably turn that on
[00:42] you know this is it's too much light now
[00:44] for me it's it's blowing out things and
[00:46] now for the background I think I think
[00:49] we can harness the power of natural
[00:51] lighting for this one and there we go
[00:53] that's much better
[00:54] so lighting pretty cool the role of
[01:08] lighting artistically is to create a
[01:11] very interesting atmosphere that the
[01:12] player maybe hasn't seen before
[01:14] and makes them excited to explore this
[01:16] specific space and the other primary
[01:18] focus is to assist the player in being
[01:21] able to navigate a certain space so
[01:23] that's calling out certain places that
[01:26] the player can go or points of interest
[01:28] that the player can interact with so one
[01:30] of the biggest problems we have lighting
[01:31] in this game specifically is that the
[01:34] the planets are rotating around their
[01:35] axis which means that we have a fully
[01:38] dynamic time of day and all of our
[01:40] locations can be placed in any kind of
[01:42] orientation or location on any planet
[01:45] which means that we have no control over
[01:47] where the Sun is what the path and the
[01:49] travel path of the Sun is and we have to
[01:52] work around where the Sun is and make it
[01:55] look as good as possible at all times of
[01:57] day as much as
[01:58] again so in the past two concessions
[02:01] that we've had to make for our
[02:03] environment lighting is that for the
[02:06] ambient lighting specifically we've had
[02:08] to pre-bake our environment probes which
[02:10] are basically entities that take a
[02:12] sampling of the ambient lighting around
[02:14] it and then reproject that lighting into
[02:16] the environment because these are static
[02:19] we've had to choose what time of day we
[02:21] want to make them out which could be
[02:23] daytime nighttime or dusk anywhere in
[02:25] between
[02:26] but they stayed static the whole time of
[02:28] day cycle the other concession that
[02:31] we've had to make is that the lights are
[02:33] always on 24 hours a day which means
[02:36] that even if the Sun is higher noon then
[02:39] street lights are still on supporting
[02:41] lights are still on this has impacts on
[02:44] the performance obviously and doesn't
[02:46] look so good it makes it environments
[02:47] feel quite static but that said the
[02:50] lighting team has been working on two
[02:51] big improvements to our attack which
[02:54] helped us tackle these issues so the
[02:56] first new feature that we worked on was
[02:58] what we call runtime probes this
[03:01] basically is a an extra flag for the
[03:03] environment probe entity that you can
[03:05] enable and this tells the entity to
[03:07] periodically update itself and and
[03:09] recapture the ambient lighting based on
[03:12] several things primarily the the
[03:14] movement of the Sun so every few degrees
[03:15] that the Sun moves in the sky the probe
[03:17] will try and recapture that ambient
[03:19] lighting and reprojected into the
[03:21] environment the benefit for the players
[03:24] in this case is that you can sit in an
[03:26] environment and watch the the time of
[03:28] day pass and the ambient lighting should
[03:31] update accordingly which will help these
[03:33] environments feel a lot more dynamic and
[03:35] a lot more immersive so the second major
[03:38] feature that we've been working on is
[03:40] what I called a nightlight groups this
[03:43] basically takes the existing light
[03:45] groups feature that we've had running
[03:46] previously in ships for things like
[03:48] damaged states and emergency states this
[03:51] allows us to use those same controls but
[03:53] on a time of day basis so we can choose
[03:56] a specific state for the light group to
[03:58] use during the day and for the night
[03:59] time
[04:01] what this means for the lighting team is
[04:03] that we can add a whole new layer of
[04:05] complexity to environments such as
[04:07] turning on overall city lights when it
[04:10] becomes nighttime and turning them off
[04:12] during the day which saves performance
[04:14] because you can't see them anyway it
[04:17] allows us to turn on and off street
[04:19] lights based on the time of day which
[04:21] feels very realistic and it allows us to
[04:25] in the case of new beverage we can
[04:27] create a an entirely new mood and
[04:29] atmosphere in a specific location when
[04:32] it's night time compared to when it's
[04:34] daytime
[04:35] the ambient lighting also changes over
[04:38] the course of the day thanks to the the
[04:39] runtime probes so personally I'm really
[04:43] excited about these features because
[04:44] they allow me to to really create
[04:46] variety within a single environment so
[04:49] we have the same geometry but we can
[04:51] make it feel like very different
[04:52] locations very simply and also
[04:54] dynamically so as for when these
[04:57] features will be rolled out we're
[04:59] looking to in the next patch and beyond
[05:01] convert our existing legacy landing
[05:04] zones like Laurel and airy 18 and other
[05:06] planetary locations to use runtime
[05:09] probes and day-night like groups we're
[05:12] also looking to expand this into other
[05:14] planetary locations like our surface
[05:17] outposts and underground facilities and
[05:19] other locations and you can actually
[05:22] already see these features live now in
[05:25] patch 3.9 in new Babich which was our
[05:28] first kind of testbed for this if you go
[05:31] to Wally's bar you'll notice that
[05:32] there's a very distinct nighttime mood
[05:34] compared to the daytime so yeah we're
[05:38] we're really excited about these
[05:39] features and what they will bring to
[05:41] star citizen we hope that you guys enjoy
[05:43] it as much as the lighting team has
[05:45] enjoyed breathing new life into legacy
[05:47] locations
[05:48] new locations as well from lighting the
[05:53] universe to filling it with characters
[05:54] locations and spacecraft here's this
[05:57] prim report starting things off with
[06:00] characters we've got a quick look at
[06:02] additional concepts for yoga outfits for
[06:04] the NP seeds of new Babbage where
[06:07] personal health and well-being is an
[06:09] important aspect in maintaining the
[06:11] optimum productivity for any valued
[06:13] employee and at Microtech every employee
[06:16] is valued take that workers of
[06:19] Louisville also a new Babbage's work on
[06:23] a mission giver named Eddie Parr now
[06:25] Eddie's the bartender at Wally's and
[06:27] since there's a slew of entertainment
[06:29] coming in and out of Microtech it's
[06:31] believed he's been running a side racket
[06:33] with his old friend Michael shot a
[06:34] smuggle we'll call it contraband in for
[06:37] the locals hey people got to cut loose
[06:40] and yoga ain't for everyone but before
[06:44] we see Eddie Parr in yoga outfits the
[06:46] environment art team is putting the
[06:48] finishing touches on their hi-tech
[06:50] hangar set that will eventually populate
[06:52] the spaceport at new Babbage like the
[06:54] hangars already in place in Lord Ville
[06:57] an area 18 these will come in a variety
[06:59] of shapes and sizes to accommodate most
[07:01] ships in the persisting universe just it
[07:05] just wait for the doors to be completely
[07:07] open before you try to pass through
[07:08] don't don't be like disco the cargo
[07:12] module interiors we first saw concepts
[07:14] for two weeks ago have moved into white
[07:16] box phase as they look to expand the
[07:18] gameplay opportunities for cargo haulers
[07:20] everywhere with new contracts new
[07:22] opportunities and eventually tie-in
[07:24] functionality with the upcoming player
[07:26] trading app which when used together
[07:28] will facilitate the transfer of
[07:30] commodities and such between players in
[07:33] tech updates on Friday viewers of star
[07:36] citizen live got an in-depth look at the
[07:38] gas tech being developed from both star
[07:40] citizen and squadron 42 and what we
[07:42] showed on Friday's show could be done in
[07:44] about an hour but what you're seeing
[07:46] here are tests that are much farther
[07:48] along the idea here is to explore where
[07:51] we can add texture to the space escapes
[07:53] of the persistent universe with this
[07:55] test specifically for those wayward
[07:57] space stations found between the planets
[07:59] of the Stan
[08:00] system now this is look dev in its
[08:02] purest form as artists explore what's
[08:04] possible as opposed to building
[08:06] something specifically that you'll find
[08:08] around one station or another
[08:10] now once the capabilities have been
[08:12] identified in the process is developed
[08:14] and streamlined this work will form the
[08:16] basis for her gases found throughout the
[08:18] persistent universe including in
[08:20] asteroid fields around space stations
[08:22] near jump points and beyond
[08:24] finally from outer space down to the
[08:26] surface of our planets and moons as the
[08:29] planet tech team continues to enhance
[08:30] and build upon planet tech before
[08:32] sometimes it's required to go back and
[08:35] update older content to match the still
[08:37] advancing state of our tech in the case
[08:39] of these new height maps which we
[08:41] touched on a little last quarter the
[08:43] main objective here is to make better
[08:45] use of the available texture resolution
[08:46] for every piece of elevation and climate
[08:49] data in both the persistent universe and
[08:51] squadron 42 the benefits of which will
[08:54] be better object distribution nicer
[08:56] ground material breakup natural color
[08:58] transitions more accurate for additions
[09:01] reeds and more another benefit of this
[09:04] enhanced detail pass is that our artists
[09:06] can now work with data that is much more
[09:08] accurate which will in turn be more
[09:10] predictable and ultimately makes for a
[09:12] much easier and more efficient time
[09:14] painting the planets which will just
[09:16] speed up the overall process even more
[09:18] than it already has so what we learn
[09:21] about this week well we learned that it
[09:23] can often be the little things like turn
[09:25] the lights off when the Sun comes up or
[09:27] enabling ambient light to fill a room as
[09:29] we'd expect that can lead to the greater
[09:31] sense of immersion that there's even
[09:33] more coming a new Babbage and all 43.1
[09:36] and beyond the gas clouds can add a bit
[09:38] of texturing to make space scaping more
[09:40] interesting and that even with planet x
[09:42] v4 as good as it already is there could
[09:44] still be ways to make the process faster
[09:47] and look better than ever before for
[09:49] inside star status and i'm jared huckaby
[09:51] we'll see you next week
[09:52] [Music]
[10:06] you

# Star Citizen: Around the Verse - Piano Man-Less

**Video:** https://www.youtube.com/watch?v=UuQFNUA0fow
**Date:** 2018-08-23
**Duration:** 9:28

## Transcript

[00:04] [Music]
[00:13] hello and welcome to another episode of
[00:16] around the verse
[00:18] I'm sandy Gardner I'm Chris Robbins in
[00:20] this week's update we'll see and hear
[00:22] more about the state of foot and voice
[00:24] check back in on the exciting world of
[00:26] mining improvements take a look at
[00:29] contract missions with a narrative team
[00:30] and tickle the ivories in the
[00:32] constellation Phoenix but first let's
[00:35] see what's new from our community so
[00:37] last weekend an organization called
[00:39] Vashta industrial organized an event
[00:40] called the Shubin shuffle folks the
[00:43] juban shuffle was brought to you in part
[00:45] by Tara Mills we've seen all sorts of
[00:49] DIY races throughout the PU but I
[00:51] believe this is the first foot race
[00:52] players from a whopping thirty seven
[00:55] point eight kilometers across day mark
[00:57] racing from Shubin mining to ager flats
[01:00] yeah community has been getting really
[01:02] creative with this type of emergent
[01:03] gameplay and it's always fun when they
[01:05] add a bit of humor as surrend Eve Ashtar
[01:07] has here
[01:08] now let's March onto development updates
[01:10] and check in with the gameplay feature
[01:12] team they've been working on some core
[01:14] tech that represents the first steps
[01:16] towards enabling a much more streamlined
[01:18] workflow for designing and implementing
[01:20] user interfaces into the game this
[01:23] polymer e node graph tool shows how a
[01:25] designer can iterate on UI display logic
[01:27] quickly in real time without needing to
[01:29] wait on engineers to make simple changes
[01:30] this tech will be useful for things like
[01:33] weapons and ammo displays comm array
[01:35] screens MF days and ships the new
[01:37] storage lockers and more here we see on
[01:42] the roadmap that several new MPC mission
[01:44] givers are being worked on for
[01:45] up-and-coming releases and while they
[01:47] stand to bring more personality to the
[01:49] pu a big part of the starts to the
[01:51] submission system continues to be built
[01:53] around mobi glass contracts let's go to
[01:55] will wise bomb for some insight and how
[01:58] these missions are conceived and
[01:59] designed when working on contracts is
[02:02] this past week a lot of it's been going
[02:05] through the kind of high-level with Luke
[02:07] and a live design team about what
[02:09] mechanics we're gonna have available in
[02:11] three three and how that's going to be
[02:12] affecting current missions and what new
[02:14] missions can we create to tie into that
[02:17] previously a lot of the contracts were
[02:19] even though they were randomized and
[02:21] procedurally generated there were still
[02:23] the logic of them was very
[02:25] hard-coded by the designer so they said
[02:27] this mission can use location X Y & Z so
[02:32] now for the future what we want to do as
[02:35] we adding more and more locations and
[02:37] Stanton's getting bigger and bigger to
[02:39] have to go back and update every single
[02:41] mission every time you add a new
[02:43] location is very time costly so we've
[02:46] been going back and working together to
[02:48] retrofit stuff so it works off a system
[02:51] that can be automatically updated
[02:52] through tagging for players what they'll
[02:54] be seeing is that the the same missions
[02:56] will be able to start utilizing the new
[02:58] locations as soon as we add them which
[03:00] will hopefully give a broader experience
[03:03] and send them traveling through
[03:05] outstanding system here we see early
[03:07] modular work on a larval transit station
[03:10] we've seen concept and reference art for
[03:12] these train platforms in past episodes
[03:14] and I think we can expect to see much
[03:16] more of the city at citizencon
[03:25] [Music]
[03:28] we've been optimising fight and VoIP
[03:30] transmission over the network to get it
[03:32] working correctly in the live game here
[03:34] is Graham philipson back again with a
[03:36] progress report in recent weeks I've
[03:38] been working on data compression for the
[03:40] Foyt system a lot of fight data won't be
[03:43] transmitted by our normal game servers
[03:44] we still need to be aware of the amount
[03:46] of data that we're transmitting there's
[03:48] a result of this we need to compress the
[03:49] data as much as possible in the case of
[03:52] the facial data we have a few options
[03:53] available for example we can scale the
[03:56] bit depth of the animation values and we
[03:58] can also apply a level of detail culling
[04:00] to those animation values that express
[04:01] more subtle movements in the face when
[04:03] the player is at a distance from the
[04:04] camera this cooling needs to be applied
[04:06] both of the client side and on the
[04:08] server so that each client receives at a
[04:10] level of detail that's appropriate
[04:12] severe experience we also need to
[04:14] compress the audio data in this instance
[04:16] we have control over the audio bitrate
[04:18] of the server side this allows us to
[04:20] provide an audio experience that's
[04:22] appropriate to what the player is doing
[04:23] in game for example if somebody's
[04:26] talking using the communication system
[04:28] in the game we can afford to provide a
[04:29] lower bitrate audio experience since the
[04:32] communication system itself can be
[04:33] expected to degrade the audio whereas if
[04:51] somebody is in the same room as you in
[04:53] game you would expect their voice to be
[04:55] clear as possible and in this case we
[04:57] will provide the best possible audio
[04:59] experience voice comms audio test
[05:04] compression low
[05:07] one two three four five we use both
[05:13] listening tests and spectral analysis
[05:15] tools to ensure that the audio is of the
[05:17] quality that we require that's pretty
[05:19] cool thanks thanks Graham so now here we
[05:22] see a test case for the new elevator
[05:24] management tech which will help us
[05:25] integrate more dynamic elevators into
[05:27] the game the tech still needs a lot of
[05:29] finesse and development before you'll
[05:31] see it in the pu but eventually it will
[05:33] also be applied to trams trains and
[05:35] other public transportation just when
[05:37] you thought it was safe to watch a TV
[05:39] it's the return of mining improvements
[05:43] yes the devs continue to make subtle but
[05:45] noticeable improvements to the mechanic
[05:47] here's Dan treffen with more some of
[05:50] these things are improvements on housing
[05:52] stability and resistances are calculated
[05:54] basically we had to cap some of those
[05:56] numbers to not jump over the value of
[06:00] 100% for resistances and also
[06:02] instability was capped at 100% so now we
[06:04] can take the instability and take it
[06:06] past the value of 100% so you'll find
[06:09] rocks they're very very unstable
[06:11] depending on how we play with the values
[06:13] we can reach very unstable rocks that
[06:16] are really hard to mine to counter that
[06:18] we bring in a new mechanic that makes it
[06:22] easier to mine a rock once you keep your
[06:25] mining blazer stable on that box if you
[06:27] keep it steady in one point then
[06:30] instability of the rock decreases over
[06:32] time your your laser manages to be less
[06:35] erratic work continues on rest stops
[06:38] with asymmetrical exteriors being the
[06:40] current focus the procedural tech team
[06:42] is adding more false shop fronts and
[06:44] advertisements to bring these locations
[06:46] to life we've been exploring recipes in
[06:48] our procedural layout tool and we want
[06:50] to achieve more variation and have a
[06:52] symmetry in the scene to achieve the
[06:54] symmetry we are moving from strings to
[06:57] tags and doing that to have a lot less
[06:59] errors a lot less typos and a lot of
[07:02] problems connected with strings are gone
[07:04] tags are a lot useful because they give
[07:07] us a lot more better filtering better
[07:09] theming and they are a common interface
[07:13] between all the departments so we know
[07:14] exactly what we're getting and thanks
[07:17] the tags we also have
[07:19] theming of for example an engineering
[07:22] room tag engineering then we'll have
[07:25] connections props and all the stuff
[07:28] related to the room for example adverts
[07:30] will be themed engineering too so this
[07:32] gives us consistency even in a symmetric
[07:34] recipe
[07:35] between all the parts of the recipe so
[07:38] moving on to ships we would usually
[07:40] start a Jared here for a pipeline update
[07:42] but not today today we take the pipeline
[07:45] back oh wait that's right hey Jared out
[07:48] in Germany for games come it's all up to
[07:50] us this week updates to the
[07:52] constellation Phoenix continue including
[07:54] improved landing gear compression
[07:56] animation and interior refinements
[08:03] [Music]
[08:09] [Music]
[08:14] here we get a first look at the Sentinel
[08:16] piano and it's pretty slick cool see
[08:19] that in the game while your sightseeing
[08:21] over yellow so there you go mm-hmm if
[08:24] you miss Jarrod drop in and find him at
[08:26] games con or you can tune in to reverse
[08:28] the verse exclusively airing on our
[08:31] youtube channel of this week and if that
[08:33] still doesn't scratch your ship
[08:35] check out our alpha 3.2 free fly events
[08:38] starting tomorrow where you can try out
[08:39] star citizen for free in one of several
[08:42] ships and that's all for us this week
[08:44] thanks to the subscribers first month
[08:46] during our shows yes and to all the
[08:48] backers thank you very much as well
[08:50] until next time we will see you around
[08:53] the world thanks for watching for the
[09:09] latest and greatest in star citizen
[09:10] squadron 42 you can subscribe to our
[09:12] channel or you can check out some of the
[09:14] other shows and you can also head to our
[09:16] website at www.uvu.edu/library

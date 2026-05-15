# Inside Star Citizen: First-Rate Resonate

**Video:** https://www.youtube.com/watch?v=ZAX4aAozxuE
**Date:** 2023-08-17
**Duration:** 12:31

## Transcript

[00:00] foreign
[00:01] [Music]
[00:03] it's been a long time since I've been in
[00:05] front of a camera so this is a new
[00:06] experience for me fresh one but yeah I'm
[00:09] enjoying it this is going to do better
[00:11] you are great
[00:12] Graham he's an old town he knows what
[00:14] he's doing
[00:16] [Music]
[00:17] he didn't notice you there
[00:19] [Music]
[00:21] So today we're talking about resonance
[00:22] within the Claudius tool what's Claudius
[00:25] oh it's a question okay Claudius is our
[00:28] new audio tool that brings together all
[00:30] the different audio functions into one
[00:32] place so the sound designers can access
[00:34] everything they need without going
[00:37] through needless code requests all the
[00:39] time my favorite thing about Claudius is
[00:42] the fact that I won't have to jump into
[00:43] so many different tools and programs to
[00:46] get in-game and get the sound sounding
[00:48] the way that I want them to and the way
[00:50] that I Envision them in my head we did a
[00:52] whole thing on a citizen car a few years
[00:54] ago you should go watch it I'll just win
[00:56] a much more natural on that camera when
[00:58] I'm not looking
[01:03] one of the ways in which we're looking
[01:05] to improve the audio experience of Star
[01:07] Citizen is to find ways to better meet
[01:09] the players expectations of what is
[01:11] being heard in the game world we already
[01:13] create the sounds that you would expect
[01:15] for objects and interactions in the game
[01:17] and glue them together with Reverb and
[01:19] effects but we can always go further our
[01:21] latest piece of tech within the Claudius
[01:23] editor is resonance which allows us to
[01:26] take a game event that is either loud or
[01:28] particularly high sound pressure and
[01:30] make other elements of the game respond
[01:31] in much the same way as you would expect
[01:33] in the real world
[01:36] resonance put simply is the sensitivity
[01:39] of objects to vibration and in terms of
[01:41] our Tech it's the sound that they make
[01:43] as a result we're aiming to fill a gap
[01:45] that currently exists with certain
[01:47] things not dynamically responding at
[01:49] least in an audible sense to player
[01:51] import and events transpiring in world
[01:59] we want to add another layer to the
[02:00] soundscape that just sprinkles a little
[02:02] more life into it and makes it just that
[02:04] little bit more real you're there you're
[02:06] experiencing it our new tech allows us
[02:09] to quickly create resonances around
[02:11] points in the world in response to game
[02:13] events that can then be reflected by the
[02:15] objects and geometry around those points
[02:17] we can add a resonance driver node in
[02:20] Claudius and set the size of its sphere
[02:22] of influence and also how long it takes
[02:24] Decay to nothing
[02:25] we can then add resonator nodes to any
[02:28] audio object that we see fit when the
[02:30] resonator is caught in the sphere of
[02:31] influence of the driver during gameplay
[02:33] we use the resulting output to decide
[02:36] how loudly the object should resonate
[02:37] what we're saying is we're taking game
[02:40] events in the world and we're trying to
[02:42] make the world around you respond in a
[02:44] much more realistic way to what you're
[02:46] doing so if you're firing a weapon next
[02:49] to a window you'd expect it to go or
[02:51] something like that you know a master
[02:52] panel sheet panel that kind of thing we
[02:54] can also set frequencies for both the
[02:56] driver and the resonator and make them
[02:58] respond only if the driver hits the
[03:00] resonant frequency of the resonator
[03:03] so basically at the frequency of a
[03:04] driver is changing it might hit a
[03:06] certain frequency that excites an object
[03:08] much more than it does at other
[03:09] frequencies even with a simple example
[03:12] there's already a greater sense of cause
[03:14] and effect the props around you feel
[03:16] connected to your actions and you feel
[03:18] more immersed as a result
[03:37] foreign
[03:59] this being implemented via Claudius in a
[04:01] straightforward visual logic based
[04:03] scripting way means that getting your
[04:05] sounds in-game and working is just that
[04:07] much quicker
[04:08] there are so many interweaving systems
[04:10] that play on the engine side that it
[04:12] usually can prove a challenge to get the
[04:14] desired outcome just from the resonator
[04:16] and resonance knowns alone we can manage
[04:18] quick tweaks to dial in the exact kind
[04:20] of sounds we want to and we're having it
[04:22] happen live and in context as we go
[04:24] claudius's design philosophy is to put
[04:26] workflow first and with this in mind the
[04:29] resonance Tech makes it easy to take a
[04:31] location or ship and populate it with
[04:33] the kind of responses you hear happening
[04:35] around you in real life
[04:37] the potential here is large so having a
[04:40] tool that makes it easy becomes
[04:41] incredibly important the underlying Tech
[04:44] is designed to give the designers
[04:46] everything they need to implement we're
[04:48] not relying on repeated code support
[04:50] requests to get this kind of dynamism in
[04:52] for our sounds
[04:53] no one knows what you need to achieve
[04:55] the result you're aiming for in your
[04:57] head better than yourself and that can
[04:59] take time and iteration but here we have
[05:01] all the tools to do that by ourselves so
[05:04] now we can take a location look around
[05:06] it and think about what we'd expect to
[05:08] hear when for example a weapon is fired
[05:10] and quickly add the mark up to the game
[05:12] to make it do what we expect here we can
[05:15] see a few candidates metal Locker doors
[05:19] a waste bin
[05:21] empty cans some windows
[05:24] containers
[05:26] by adding audio components to these
[05:28] objects or adding audio entities to the
[05:30] world markup we can easily create their
[05:33] resonant responses
[05:35] adding these resonances brings variety
[05:37] and realism to the soundscape
[05:49] thank you
[06:00] so we're no longer just hearing weapons
[06:02] and Reverb we're now hearing the objects
[06:04] and materials around the player too we
[06:06] can use the tech to support visual
[06:08] physical movements or even to imply them
[06:10] using audio alone we can listen to the
[06:13] resonances in isolation to understand
[06:14] what's being added here
[06:37] thank you this system is hooked into our
[06:40] propagation Tech which allows sounds to
[06:43] respect paths through rooms and doorways
[06:45] to reach the listener normally the
[06:46] player but in this case rather than
[06:49] ensuring that what you hear respects the
[06:51] propagation paths within the world we
[06:53] use the system to decide whether for
[06:55] example a resonance driver in one room
[06:57] should excite a resonator in another so
[07:00] basically if someone fires a weapon
[07:02] within a room the objects in that room
[07:03] will vibrate differently to any objects
[07:05] that are outside that room as with all
[07:07] Tech we have things to consider from a
[07:09] design perspective there isn't going to
[07:11] be a one-size-fits-all system take for
[07:14] example Uranus ship you might want to
[07:16] let the players experience a huge impact
[07:18] from the missile is it given you'd
[07:20] expect the ship in its internal contents
[07:22] to resonate when that happens and this
[07:24] is perfect for that but what about
[07:25] continuous resonances in a ship we may
[07:28] want to use the system much more
[07:29] sparingly in these cases in order to
[07:31] avoid fatigue and focus more on the
[07:33] transient resonances as they convey more
[07:36] important information to the player much
[07:38] like a computer the system needs rules
[07:40] to govern its output so design needs to
[07:42] inform the system how it should be
[07:44] behaving resonance can become more of an
[07:47] event to convey excitement and useful
[07:49] information
[07:50] it should serve the experience and could
[07:52] help make scenes pop from an audio
[07:54] perspective
[08:25] while we have the option of using
[08:27] propagation to ensure that resonances
[08:29] don't travel through walls or geometry
[08:31] we can see that there are cases where we
[08:33] may want it to do just that a ship
[08:36] receiving an impact from a huge missile
[08:38] would have vibrations resonating through
[08:40] its structure which in turn would
[08:42] resonate its contents by vibrating the
[08:44] ship and the objects around the player
[08:46] the impact becomes much more visceral
[08:48] and feels like a direct threat to the
[08:50] player rather than an event that just
[08:52] happened to some other part of the ship
[08:54] the player's experience of the impact
[08:56] can then be more reflective of the
[08:57] Damage Done to their ship
[08:59] [Music]
[09:07] foreign
[09:28] so this is cool because if you have a
[09:31] huge impact of hitting your ship yeah if
[09:33] you're in the cockpit you can see the
[09:35] impact you can really feel it there but
[09:37] if you're down in the guts of the ship
[09:38] in an engineering role or something like
[09:40] that and impacts are happening on the
[09:42] ship you're maybe not going to feel it
[09:43] so much so what this system does is it
[09:46] brings the whole experience of the ship
[09:48] being hit to wherever you are
[09:50] resonance also sits nicely alongside our
[09:52] physical audio system which handles the
[09:54] audio for the physicalization of props
[09:56] and objects in the world you can already
[09:58] hear audible actions in the game such as
[10:01] objects being thrown rolled handled or
[10:03] impacted this adds another layer to that
[10:06] physicality though with resonance it
[10:08] doesn't need to be beholden to the
[10:10] physics of an object
[10:11] Claudius and its underlying engine Sig
[10:13] audio have been designed with rapid
[10:15] feature developments at their core
[10:17] now that a lot of the hard work under
[10:19] the hood has been done we're able to
[10:21] quickly develop penetrate on features
[10:23] such as resonance that allow us to
[10:25] improve the experience of Star Citizen
[10:27] and enhance immersion to create a living
[10:30] breathing world as with all Claudius
[10:32] features this is available to any object
[10:34] in any context so its use doesn't even
[10:37] have to be limited to what we've shown
[10:38] here for example we could use the blast
[10:41] radius of an explosion to drive a
[10:43] player's earringing effect using the
[10:45] same system or we could affect mixed
[10:47] changes within the radius of an event
[10:49] such as a large explosion ducking the
[10:51] other sounds around it to make even more
[10:53] room for impact the tools are developed
[10:55] with creative freedom in mind and
[10:57] ultimately encourage experimentation so
[10:59] usually the graphics and the visuals get
[11:01] all the headlines but to us the audio is
[11:03] equally if not more important and we
[11:06] hope that you'll feel the same when all
[11:07] this work comes online
[11:09] how'd I do good
[11:11] thank you
[11:13] so what do we learn this week well we
[11:16] learned that Claudius and it's
[11:17] procedural audio tools allow for the
[11:19] systemic propagation of sounds and ships
[11:22] stations and space above and beyond and
[11:26] that reverberations don't just mean the
[11:28] events around you sounding and feeling
[11:30] as they should they can also lead to
[11:32] Tactical and gameplay implications for
[11:34] combat wear and tear and much much more
[11:37] now don't forget the ship Showdown is
[11:39] heading into the top 16 in just the next
[11:41] few days and of course the mission
[11:43] Spotlight is still underway and then of
[11:45] course we're only nine weeks away nine
[11:47] weeks away
[11:49] nine weeks away from citizencon 2953 the
[11:53] now two-day event at the Los Angeles
[11:54] Convention Center and tickets are still
[11:56] available for inside Star Citizen I'm
[11:59] Jared Huckabee thanks for letting us
[12:00] share the process of game development
[12:02] with you and we'll see you all here next
[12:03] week
[12:04] [Music]

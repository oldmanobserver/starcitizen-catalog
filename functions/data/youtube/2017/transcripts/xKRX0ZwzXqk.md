# Star Citizen: Around the Verse - Lighting the Universe

**Video:** https://www.youtube.com/watch?v=xKRX0ZwzXqk
**Date:** 2017-05-18
**Duration:** 40:08

## Transcript

[00:15] Hello and welcome to Around the Verse,
[00:17] our weekly look at the development of
[00:19] Star Citizen. I'm Sandy Gardner.
[00:21] And I'm for Stefan. Uh for the past
[00:23] week, you've been intercepting messages
[00:26] about a top secret ship in development.
[00:29] Here's the latest transmission.
[00:42] [Music]
[00:52] [Music]
[01:04] [Music]
[01:15] As you probably guessed, the ship in
[01:17] development is the Aegis Eclipse. And
[01:19] starting tomorrow, the eclipse will be
[01:21] available as part of our latest concept
[01:23] sale. You can check the comm link
[01:24] tomorrow to learn all about the eclipse,
[01:26] its role, and its history.
[01:28] And in today's show, we will see how
[01:30] story and tone can be reinforced through
[01:33] the art of lighting. But first, let's go
[01:35] to the Los Angeles for their studio
[01:38] update. Hi, and welcome back to Los
[01:40] Angeles. I'm senior producer Eric Kaine
[01:42] Davis here with your monthly studio
[01:44] update. This month, we've made great
[01:46] strides and finished a variety of tasks
[01:48] across both projects, and the team here
[01:50] in Los Angeles continued to grow, which
[01:52] really helped us knock things out
[01:53] quickly. Now, in the past, we've talked
[01:56] all about item system 2.0 and its
[01:58] impacts on the myriad of game features.
[02:01] Regarding its impact specifically on
[02:02] ships, it is an improvement to how
[02:04] players can interact with ships and
[02:06] their systems, such as how adjustments
[02:08] to item settings can affect gameplay.
[02:10] Now, our tech design, engineering, and
[02:12] QA teams have made steady progress in
[02:15] their various disciplines. Now, in our
[02:17] endeavor to reach the goal of rolling
[02:19] out a fleet of item system 2.0 ships
[02:22] with updated or new items that can be
[02:24] loaded onto them, we've now successfully
[02:27] converted the Origin M50 Interceptor to
[02:29] fully utilize this new system. We've
[02:31] chose to start with this ship because
[02:33] it's the least complex example while
[02:35] still allowing us to discover issues
[02:37] that we can address for all 49 flyable
[02:39] ships and beyond. It's been the perfect
[02:42] test monkey. No offense, M50 pilots. And
[02:45] you've probably learned from your own
[02:47] experiences that one tends to be a bit
[02:49] more meticulous the first time you
[02:50] attempt something. We do the same thing
[02:52] at Star Citizen by properly documenting
[02:54] all necessary steps, thereby creating
[02:57] guides to speed up future processes. And
[03:00] now in our first round through, we also
[03:02] look to identify opportunities to create
[03:04] tools further speeding up our overall
[03:06] implementation time. And this attention
[03:09] to detail has really allowed us to
[03:11] balance power usage, heat generation, uh
[03:14] associate EM and IR signals, and balance
[03:17] hydrogen and quantum fuel consumption.
[03:19] This will also give players a reason to
[03:21] consider upgrading their ship components
[03:23] and make multiplayer gameplay a bit more
[03:26] rewarding. Now, QA aided with this
[03:29] conversion by taking an early look at
[03:31] the ship and determined how to convert
[03:33] all existing checklists to the new 2.0
[03:35] framework. When making any impact to our
[03:38] game, QA has to test everything, which
[03:40] in this case included all the different
[03:43] interaction points. Now, prior to the
[03:45] interaction points, it was limited to
[03:47] just testing enter and exits, but checks
[03:49] were added for ladder enter exits, entry
[03:52] enter exits, power on and off, engines
[03:54] on and off, as well as looking ahead for
[03:56] features not yet implemented, such as
[03:58] ejections and cases which more than one
[04:00] player attempts a particular
[04:02] interaction. Now, the engineering team
[04:04] has also made strides in the areas of
[04:06] persistence and inventory. They're
[04:09] currently working on creating a
[04:10] technique for clients to request
[04:12] persistent information. This work
[04:15] supports several large features in 3.0,
[04:18] including cargo, shops, commodities, air
[04:20] traffic control, ships, players, and a
[04:23] whole lot more. It will allow game code
[04:25] to query for a modified data for entries
[04:28] that aren't even spawned, such as
[04:29] selling cargo for a ship that's landed
[04:31] at a station and hidden away from ATC.
[04:34] These features will also allow game code
[04:36] to correctly respawn and orient ships or
[04:38] items that have been abandoned on
[04:40] planets or in space. Meaning you can
[04:42] expect the world and your possessions to
[04:44] remain in the same state in between game
[04:46] sessions. Unless, of course, a pesky
[04:49] pirate comes along and does what pesky
[04:51] pirates do. Now, we've also made
[04:53] progress on the system which allows one
[04:56] to park their ship inside of another.
[04:58] This should be pretty straightforward as
[05:01] possible and result in being able to
[05:03] transport any stowable ship safely from
[05:05] point A to point B. This was based off
[05:08] of a rework of the landing mechanic that
[05:10] is currently in game. Now, the new
[05:12] docking areas are set up the exact same
[05:14] way as landing pads used within the
[05:16] current universe, taking components with
[05:19] a different interface and a new
[05:20] mechanism for locking. There has also
[05:23] been some work on the physics of getting
[05:25] the Ursa rover to sit inside the cargo
[05:27] bay of the constellation Andromeda
[05:30] without it popping through the walls and
[05:32] jittering. So in other words, hopefully
[05:34] physics won't go wild and blow
[05:36] everything up, literally. Now the team
[05:39] also now has converted the basic quantum
[05:42] drive to item system 2.0, giving it the
[05:44] ability to store quantum travel and
[05:46] other nav points. This means that all
[05:48] discovered quantum travel points are
[05:51] able to be set as travel destinations
[05:53] for use at any time regardless of
[05:55] distance and signature strength. Now,
[05:58] the next goal is to make quantum drive
[06:01] look and sound as awesome as it behaves
[06:04] by connecting the VFX and the audio to
[06:06] the actual transit. This also involves
[06:09] working closely with design on a way to
[06:11] better display them to a player in a
[06:13] logical interface. And then from here,
[06:15] we can move on to pure 2.0. 0 systems as
[06:18] Quantum Dry now uses the pipe system for
[06:21] fuel and for power checks. Now, also
[06:24] this month, we've implemented a few new
[06:26] features into our IFCS or intelligent
[06:28] flight control system. On the physics
[06:30] side, we've now implemented an autopilot
[06:33] system to allow our AI and any other
[06:36] system to utilize IFCS like takeoff,
[06:38] landing, or quantum drive or anywhere a
[06:41] ship control really needs to be
[06:42] automated. And we've also added some
[06:44] support for cinematics to be able to
[06:47] automate the motion of thrusters on
[06:48] ships. So they don't need to hand
[06:50] animate every thruster action in a
[06:52] cinematic. The thrusters on a ship will
[06:54] now behave as intelligently as they do
[06:57] in our current game. Now our ship team
[07:00] has been making very steady progress on
[07:02] the RSI Aurora since our last update.
[07:05] The art team has now completed the seat
[07:07] geo for the ES and LN variants and be
[07:10] begun work on the engines while tech
[07:12] design is implementing these new assets
[07:15] utilizing the item system 2.0 framework
[07:17] directly into the ship archetype making
[07:20] this our first first scratchuilt item
[07:22] system 2.0 ship. Also, the Anvil
[07:25] Terrapin's exterior is nearing
[07:26] completion of the graybox phase and has
[07:29] near final animation. Our tech content
[07:32] team continues to improve performance by
[07:34] automating and improving processes. As
[07:36] you know, the scale of Star Citizen is
[07:38] such that even large teams need some
[07:40] additional support in the form of
[07:41] outsourcing partners. One of the
[07:43] difficulties with outsourcing tends to
[07:45] be ensuring a team's refined processes
[07:48] are adhered to and assets delivered meet
[07:50] all requirements for simple integration
[07:52] into our game. As you've heard in the
[07:54] past, there are many pipelines and
[07:56] processes within Star Citizen and some
[07:58] of them are more complicated than
[08:00] others. onboarding and outsourcing team
[08:02] requires that the tools can be installed
[08:04] and run in an external environment with
[08:07] limited support from us really in order
[08:09] to save time. So this month the tech
[08:11] animation team developed a standalone
[08:13] installer that automatically mounts
[08:16] sample assets, tools, and documentation.
[08:19] No matter if it's for motion builder or
[08:21] for Maya, we can now easily bring
[08:23] onboard any potential partners quickly,
[08:25] saving both them and us time. as well as
[08:28] these same partners benefit from our
[08:30] extensive internal tool development that
[08:32] we did for our own needs. Tech animation
[08:35] is also responsible for character
[08:37] skeletons. And like all things, creating
[08:39] a character skeleton can be done
[08:41] manually or automatically. Typically in
[08:44] the games, the rig is not really that
[08:46] complex, nor does it change often. Thus,
[08:48] the manual approach could actually save
[08:49] time. But when you're on the cutting
[08:51] edge of technology, updates are often
[08:53] required. For example, an animation
[08:55] engineer may require the addition of a
[08:58] specifically named joint for code
[09:00] purposes, thus requiring changes to all
[09:02] skeletons in the game. This would be
[09:04] very timeconuming if done manually. But
[09:07] we've now completed our SRC or source
[09:10] rigging scripts and can make these kind
[09:12] of updates quickly, easily, and
[09:14] bug-free. The time and energy saved is
[09:16] not only for the rigging team, but also
[09:18] for the animation team who will be
[09:20] utilizing these skeletons day after day.
[09:22] Now, a programming analogy would be to
[09:24] think of the rig as a compiled
[09:25] executable. The SRC rigging scripts are
[09:28] the source code. So, if we need to add
[09:30] something to the skeleton, we update the
[09:32] source code and compile it rather than
[09:34] patching the executable. You would just
[09:37] really build a new. Now, changing gears
[09:39] a little bit. Up until now, you may have
[09:41] noticed all of our characters eyes have
[09:44] been more or less the same, but the tech
[09:46] art team has created a new data
[09:48] structure that will allow players to
[09:50] customize their eye color. This supports
[09:53] the first pass of the character creator
[09:55] where players will be able to select
[09:56] from a preset color palette.
[10:02] [Music]
[10:16] Now, the tech art team has also taken
[10:18] advantage of a feature recently provided
[10:20] by the LA engineering team. Through the
[10:22] magic of item port tags, the body skin
[10:25] tone will now automatically adjust to
[10:27] the skin tone of the face. In the case
[10:29] of NPCs, this will make maintain
[10:32] consistency for our characters. And in
[10:34] the case of players, this will ensure
[10:35] your body always matches your face.
[10:38] Also, they've created uh a process to
[10:41] generate SDF or signed distance field
[10:44] volume textures which are used in
[10:46] conjunction with our atmospheric flight
[10:48] model to simulate engine trails. We've
[10:51] made solid progress on art tools for our
[10:53] various art teams. And one such tool is
[10:55] our unbevel tool, which simplifies LODs
[10:58] or level of details creation process to
[11:01] increase performance on anything beyond
[11:03] our first LOD and speed up the delivery
[11:05] time for our ship pipeline. We've also
[11:07] taken large steps forward on our
[11:09] procedural system for outposts,
[11:11] including color tinting, material
[11:13] variation, and even variation of props
[11:15] and their placement within the outposts.
[11:24] Lastly, our tech art and character team
[11:26] have added more armor to the armory with
[11:28] a fully rigged female medium marine as
[11:30] well as a male heavy outlaw suit that
[11:33] we've shown in previous updates going
[11:34] from now concept all the way into final
[11:37] implementation.
[11:38] We're also far along on many new
[11:40] uniforms, costumes, characters, and
[11:43] heads. The male OMC light is wrapping up
[11:45] its initial high poly pass and moved
[11:47] onto in-game mesh creation. The male
[11:50] Schuban minor uniform has moved to
[11:52] in-game texturing now that the in-game
[11:54] mesh is complete. And a new shipjacker
[11:56] uniform for Squadron 42 just finished up
[11:59] concepting and is on its way to high
[12:01] poly. Our female marine BDU finished up
[12:03] sculpting and is now headed to in-game
[12:05] modeling. And with the FOV slider work
[12:07] in progress for 3.0, The character team
[12:09] is doing a bit of work on our helmet
[12:11] interior, starting with the heavy outlaw
[12:13] and the heavy marine, which is used by
[12:15] our UI team to establish necessary
[12:17] boundaries. Well, that wraps us up for
[12:20] this month's update. We really enjoy
[12:21] bringing you these in-depth looks into
[12:23] our progress. Thank you so much for your
[12:25] support and see you again next time.
[12:28] Thanks, Eric. It's great to see all the
[12:30] detail going into character
[12:31] customization, even down to eye color.
[12:34] Yes, we really want to give the players
[12:36] the ability to create unique characters
[12:38] and this is just the start. As Star
[12:41] Citizen grows, so will the possibilities
[12:43] for character customization.
[12:45] It's all about building a believable
[12:47] universe. And one very important way to
[12:49] do that is through lighting, use of
[12:50] shadow and fog to help set a scene,
[12:53] which is why our lighting team is
[12:55] building a tool that can handle a game
[12:57] as large as Star Citizen. Uh, take a
[13:00] look. It's pretty cool.
[13:08] My name's Emry Schwitzer. I'm a lighting
[13:10] artist here at Cloud Bureum Games.
[13:12] Hello, my name is Nate. I'm the vehicle
[13:14] art director here at Foundry 42.
[13:16] I'm Chris Campbell. I'm lead lighting
[13:18] artist at Foundry 42 in Frankfurt.
[13:20] Hi. Uh my name is Maria. I'm the
[13:22] lighting artist for Star Citizen.
[13:24] I'm Ben. I'm a graphics programmer and
[13:26] by habit I've sort of become the
[13:28] volutrics and the lighting kind of guy.
[13:31] Lighting in general, um, my my opinion
[13:33] of it is is pretty much the most
[13:35] important pass. It goes into an
[13:37] environment or a ship or or or a planet
[13:39] before it goes out the door.
[13:40] Bad lighting can make good assets look
[13:42] terrible or good lighting can make bad
[13:45] assets quite nice. Actually,
[13:48] you can have substandard assets and and
[13:50] light it well. We don't make substandard
[13:51] assets, so we're pretty lucky with with
[13:53] with really good quality to start with,
[13:55] but it is the basis of it's not just the
[13:57] cake, it's the cake and the cherry on
[13:59] top. Lighting is the the character of
[14:01] the scene. It it creates this feeling of
[14:03] like either glooiness or or happiness.
[14:06] You can use lighting and and color as a
[14:09] way to uh to create a um a continual
[14:13] story line uh from start to finish. So
[14:16] like a story can start warm and happy
[14:19] and then by the end it can feel cold and
[14:21] and more bluish and stuff like that. And
[14:23] that's all told through lighting. We
[14:25] started um with essentially Cry Engine
[14:27] which is now Lumberiard quite a long
[14:29] time ago. Uh and the game and the engine
[14:32] was very focused to delivering a certain
[14:35] type of scenario. So it was out of the
[14:38] box really good at creating outdoor
[14:41] environments. It had a a sun time of day
[14:43] system. Interiors it wasn't so good. Um
[14:47] it kind of fell down a lot of areas. You
[14:48] could certainly get good results with it
[14:49] but it was very kind of cumbersome. Its
[14:51] lighting systems were mainly built for
[14:54] either large open like smallish levels
[14:58] up to about 4 km. It didn't really
[15:01] account for
[15:02] uh really dynamic worlds. So over the
[15:06] years we've tried our best to cater the
[15:09] engine to something that will scale and
[15:11] and scale from your little basement
[15:13] under the stairs to drawing a whole
[15:15] galaxy. So that's like the ultimate
[15:17] challenge.
[15:17] The the scale of our lighting is is
[15:20] really interesting. the sun uh is a
[15:22] light source all the way down to like a
[15:24] small decorative light on on a table or
[15:27] something like that. We we try and keep
[15:29] the the power of those lights in
[15:31] relative terms. So obviously the sun
[15:33] needs to feel hundreds or thousands of
[15:35] times more powerful than a little desk
[15:37] lamp. And that creates interesting
[15:40] questions for like how the camera auto
[15:42] exposure works. So, how like it feels
[15:45] when you when you come from a small dark
[15:47] room and walk into like a a brightly lit
[15:50] exterior like on the surface of a planet
[15:52] or something that uh we need to create
[15:54] that feeling that uh there's a real
[15:57] difference of intensity between these
[15:59] lighting sources. In Star Citizen, the
[16:01] idea is that you'll be able to go up and
[16:02] literally shoot out every single light
[16:04] in an environment and the environment
[16:05] has to be able to react to that. So,
[16:08] how do you build that using the existing
[16:10] tech? We we couldn't. So, we had to
[16:11] retool a lot of things. You know,
[16:13] there's all these variables now at play
[16:15] and and the tech wasn't there. So, a lot
[16:17] of the the improvements that the
[16:18] graphics team has been working on has
[16:20] been to allow those things to exist.
[16:22] We're we're kind of like halfway there,
[16:24] I'd say. Um, we've we've approached many
[16:26] different uh things in in several
[16:29] different ways. So, for example, last
[16:32] year, I think sometime you saw the
[16:33] animal for screen space flares come in.
[16:35] Again, that's tied to the lighting
[16:36] system. Um we've got on horizon
[16:39] real-time cube map generation. The whole
[16:41] sun system that we had um has gone. Um
[16:44] there is one sun in the galaxy uh which
[16:47] will light all of the planets. So
[16:49] there's there's the guys in Frankfurt
[16:51] obviously who are developing the the
[16:52] planetary tools and the lighting system
[16:54] for all the planetary tools are in the
[16:57] planetary tools I should say. So, it's
[16:58] it's completely driven by by the
[17:00] atmosphere of the planets. And for a for
[17:02] an artist to get his head around all
[17:03] that at times, it's pretty challenging,
[17:05] but it's it's good fun.
[17:07] We do use lighting for uh for creating a
[17:12] a change in the in the physical like in
[17:14] the player character as well. Not not
[17:16] normally in the the lights themselves,
[17:18] but through things like color grading
[17:20] and and post effects on the camera. Uh
[17:22] which generally falls underneath the the
[17:24] lighting umbrella as well. So changing
[17:27] the the color of the screen like either
[17:29] desaturating it or or adding more
[17:32] contrast and stuff like that. That's uh
[17:34] that's part of lighting as well. Like if
[17:36] the player is hurt or injured then the
[17:38] color grading can react in in the way
[17:40] that uh that it either desaturates or or
[17:43] uh makes the color more vivid or
[17:45] something like that.
[17:46] When it comes to the ships then you're
[17:48] talking really about a different set of
[17:50] challenges. All the lighting in the
[17:51] ships is 100% dynamic um and 100%
[17:54] physically correct. Hence, we have a
[17:56] physically based rendering system.
[17:57] You do want to have some sort of
[17:58] feedback loop with the artists. Um to to
[18:02] make sure that the light bulbs are
[18:03] positioned properly to, you know, just
[18:05] just make sure that even within a small
[18:07] ship like that, your eye is looking at,
[18:09] you know, specific things that you want
[18:10] to call, right? If there's a turret
[18:11] somewhere, you want to know that the
[18:13] turrets there. It's not hidden away in
[18:14] darkness. Um, so there's definitely call
[18:16] outs that that we notice, but it's also,
[18:18] you know, a collaborative effort going
[18:20] back and talking to the designers and
[18:21] the artists and making sure that, you
[18:22] know, if there's a component that you
[18:23] interact with on a wall that you know
[18:25] that that component's there and maybe
[18:27] it's flashing if it's, you know, damaged
[18:28] or something, right?
[18:30] The challenge with that is you kind of
[18:32] need these tools put in place um to to
[18:34] make that happen. Now, what was
[18:35] happening up until a few weeks ago now,
[18:38] we we have a layering system. So, um,
[18:40] you'd essentially group lights into
[18:42] small groups and switch them on and off
[18:44] at different times during the ship's
[18:46] state. So, if it was in an emergency
[18:48] state, you'd switch the default state on
[18:51] uh off, sorry, and then switch the
[18:52] emergency state on. Now, that kind of
[18:54] works in theory, but it has a lot of a
[18:57] lot of problems with it. First problem
[18:59] is your your your cry file or your
[19:02] lumbumberard file ends up being
[19:03] obscenely big because we have thousands
[19:06] upon thousands of lights. Um that
[19:09] essentially 3/4 of them most of the time
[19:10] are switched off and the transition
[19:12] between one state to the other is is
[19:15] kind of it's on and then it's off. Um so
[19:18] you can walk around the world today, you
[19:19] can come into this room, you can switch
[19:21] switch these office lights on and
[19:22] they'll have a distinct style when they
[19:24] switch on. um they might flicker if
[19:26] they're an LED. They might come up to a
[19:28] a temperature and cycle through a
[19:30] temperature color. We have temperature
[19:32] charts that we use that's that's in the
[19:33] engine. So, it's completely correct. And
[19:36] that kind of negates things going wrong
[19:38] color-wise. So, we we wanted a system
[19:41] where we could we could transition from
[19:43] on in a very creative manner to
[19:46] different states. So, whether that's
[19:48] evacuation or auxiliary or even to off,
[19:50] we now have a light grouping system so
[19:52] that each room has its own power state.
[19:54] So you can go in, you can enable or
[19:56] disable power to a specific room. You
[19:57] can that room can take damage and now
[19:59] maybe that has to be put into an
[20:00] emergency state.
[20:01] That controller is creating these
[20:03] transitions for for me as the artist to
[20:05] control. So when ship A takes damage at
[20:09] location B, like everything within that
[20:12] radius of location start to use starts
[20:14] to use this system. And when you
[20:15] actually see it working, it's it's
[20:17] really quite powerful. Um, and it goes
[20:19] to show how powerful lighting is because
[20:21] you can completely change a really
[20:23] ambient soft feeling environment into
[20:26] something that feels very very
[20:27] aggressive extremely extremely quickly
[20:30] just through light alone, not nothing
[20:32] else.
[20:32] I mean, the the challenge is is finding
[20:34] that right balance. I mean, if if things
[20:36] are out of whack, then it can feel like
[20:39] uh when you when you leave a small
[20:41] interior and the interior is too
[20:43] brightly lit, then all of a sudden the
[20:44] sun feels really underwhelming by
[20:46] comparison. Or vice versa, if if it's uh
[20:50] really bright outside and you walk into
[20:52] a really dimly lit interior, then it's
[20:54] just pitch black and it just doesn't it
[20:56] doesn't feel very uh immersive or
[20:58] helpful for the player if you can't see
[21:00] where you're going.
[21:00] I think that there's a general vibe that
[21:02] every single level tries to achieve. You
[21:04] know, there's some levels that are
[21:06] vibrant and and you want to be welcome
[21:08] there. You you or the goal of the art
[21:10] director is to make you feel welcome
[21:11] there. Um it's a nice calm place. And
[21:15] then there's the other side of things
[21:16] where it's tense and it's you know
[21:18] something like Grim Hex where stepping
[21:19] in there you kind of kind of you might
[21:22] want to watch your back, right? Um so
[21:24] there's definitely different moods that
[21:25] the environments want to convey and
[21:27] lighting plays a huge role in that. It
[21:29] all kind of starts out as a concept.
[21:30] There's some ideas thrown around. Then
[21:32] the design team goes in and blocks out
[21:33] the environment and gets an idea for the
[21:35] forms and the shapes uh as well as the
[21:37] gameplay and the pathing the players are
[21:39] going to take. And then art goes in and
[21:41] kind of details it using all of our
[21:42] modular sets that don't necessarily mesh
[21:44] together very well. Then they do decal
[21:47] passes and prop passes to kind of bring
[21:49] it all together. But then lighting is
[21:50] really the thing that that kind of makes
[21:52] all those elements of the environment
[21:53] cohesive. It blends all of the different
[21:56] assets that we have together and guides
[21:59] the player in the right direction and
[22:01] enhances gameplay as well as just
[22:03] overall makes the general composition of
[22:06] the level as good as it can be.
[22:07] Lighting also heavily affects or heavily
[22:11] impacts um visual effects uh because
[22:15] things like particles aren't aren't
[22:16] normally directly lit in the same way
[22:18] that basic geometry is lit. Uh they in
[22:22] our game they receive lighting from from
[22:24] direct light sources and also from cube
[22:26] maps to to give them a kind of an
[22:28] ambient lighting feel. Uh but that's
[22:31] that's not always it doesn't always look
[22:34] directly the same as as the environment
[22:36] might look. And so there's a lot of
[22:38] balancing and back and forth between the
[22:39] visual effects artists that they that
[22:41] they tweak their uh their particles to
[22:44] the same level that the that the
[22:46] lighting looks and vice versa that we
[22:48] also try and keep that in mind so that
[22:49] we don't create a a situation where
[22:52] nothing can work.
[22:54] So basically uh what starts here is like
[22:57] all the uh interior area is ready. Of
[22:59] course, for now it's purely dark and the
[23:03] as the rule for lighting artist is once
[23:05] we light on the room, we're going to
[23:06] tell the space. But how we light up this
[23:09] thing is basically uh introduced by the
[23:12] atmosphere from our art director. So
[23:15] here is a good example from our art
[23:17] director. So basically this is a uh the
[23:19] lighting setup before and this is what
[23:21] we are trying to achieve. So according
[23:25] here is like because we have the
[23:27] different version of the light.
[23:29] Basically we have three different
[23:30] version of the light. Uh first one is
[23:33] like it's a fake light light source
[23:35] which going to trigger the uh emission
[23:37] power. So here is a light feature and
[23:40] what we do is like we linked it with the
[23:43] uh emission power to turn them on. So
[23:46] obviously each space once they have the
[23:48] feature the light should comes from the
[23:50] direction of the feature. However, uh in
[23:53] this industry, what we did is like we
[23:56] have this lighting feature first which
[23:58] going to control the uh image ship map
[24:00] and then we have another actual light
[24:03] going to tell this space like where the
[24:05] light comes from uh from this spot
[24:08] direction.
[24:10] And after we set up all this space, we
[24:13] were trying to push like different color
[24:15] for car and warm. And once I turned
[24:18] around the fork, I will try to get them
[24:20] even closer with the uh guidance from
[24:24] the art director. So basically that is
[24:26] how we work.
[24:29] Uh usually once I've done the lighting,
[24:31] I'm going to just do the uh character
[24:33] testing cuz character is a very
[24:36] important part of the game. So usually
[24:38] once I done the lighting setup, I'll
[24:40] just use this test feature to see and
[24:42] walking around and make sure like in
[24:45] different positions. Those light going
[24:47] to cast the character correctly and
[24:50] they're going to able to see this
[24:51] character and also uh we have two
[24:54] different light setup. The one is like a
[24:56] cold light like you can see casting from
[24:58] the H exit of the door. It's very cold.
[25:02] So in that case I designed some like
[25:04] warm light to make sure the character
[25:06] always have different code and warm tone
[25:08] to make the image looks more
[25:10] interesting.
[25:10] There's new lighting tools created on a
[25:13] probably a weekly basis at this point.
[25:16] Um we've we've just recently uh
[25:19] integrated a first pass of our lit fog
[25:22] technology which is basically a way of
[25:23] transferring old fog which is very kind
[25:26] of uh I mean it has depth but it feels
[25:29] quite flat in the way that it renders
[25:30] the scene. Um but this new technology
[25:33] allows us to basically gives you a sense
[25:35] of where the light comes from or like
[25:37] light sources can actually cast light
[25:40] into the scene from uh from their
[25:42] source. At the moment, the the old fog
[25:44] doesn't react to lights in any way. So,
[25:46] what an artist will have done is they'll
[25:48] have put fog in an area and they'll have
[25:49] sort of set the color and the thickness
[25:51] of it to roughly approximate what it
[25:54] would have looked like if it had had
[25:55] lighting on it. So, as an example, if
[25:57] someone's put a red light in a room,
[26:00] they'll probably have put some red fog
[26:01] in there to go with. What they're
[26:03] actually trying to get the impression of
[26:05] is some very thin white fog with a
[26:07] really strong red light on it. So now
[26:09] when you put some really thick red fog
[26:12] in the room and then you shine a red
[26:13] light on it, it's going to go completely
[26:15] like opaque and it's going to be
[26:16] incredibly red and it's going to look
[26:18] terrible. What it's actually doing is
[26:20] it's it's basically just drawing a large
[26:25] uh sort of cuboid onto the screen and
[26:27] then because it knows how far into the
[26:29] scene the opaque objects are in that
[26:31] scene, it can sort of it can work out
[26:33] how much fog it would have to it would
[26:35] have to put on here. but it has a few
[26:38] problems. So, as a very simple example,
[26:40] you can kind of tell in the shadows, it
[26:43] tends to over brighten the shadows. It
[26:44] sort of it flattens out the the effect
[26:47] of the entire scene. And the other
[26:49] problem we've actually got is if you add
[26:51] more lights,
[26:53] you can sort of see that the the scenery
[26:55] lights up, but the fog itself is just
[26:58] still this sort of like fixed yellow
[26:59] color that I've that I've picked in
[27:01] advance. Now, another issue that it had,
[27:04] this is a transparent sphere. And so,
[27:06] because it doesn't have any depth
[27:08] information, it can't actually apply the
[27:10] fog to this. So, the old fog system, um,
[27:14] the on the CPU side, it just does a a
[27:16] very simplistic approach to this. And it
[27:18] it works out what how much fog the very
[27:20] middle of the sphere would have and then
[27:21] just sort of applies it over the entire
[27:23] thing. So if I zoom in on it a bit and
[27:27] then I lift it up, you can see that it
[27:30] sort of stays fogged even as it pokes
[27:31] out and then just as it crosses the
[27:33] entire thing sort of leaves the fog. So
[27:36] it that was mostly work roundable but um
[27:40] you often have problems with um windows
[27:41] on ships or anything with a large canopy
[27:43] would suddenly it would s the the whole
[27:46] canopy would then suddenly sort of pick
[27:48] up the fog of the inside of the place.
[27:51] So now we've got dynamic fog, dynamic
[27:53] particles to go in the lighting. It's
[27:55] incredibly cool. I've got a bit of a
[27:57] reputation for liking the fog and
[27:59] particles a little bit too much. It's
[28:00] actually the the second thing I do as
[28:02] soon as it goes into a level. You
[28:04] automatically get depth. You get a
[28:06] certain ambient and a mood via via the
[28:08] fog. Um, and yeah, it's just incredibly
[28:11] powerful. It kind of backs up uh all all
[28:13] the hard work the lighting guys put into
[28:15] into the levels.
[28:17] That's intense. That's very intense. So,
[28:20] with the new fog, you can obviously see
[28:22] that the the lights are actually
[28:23] affecting it. Um, we've got a spotlight
[28:25] here going into it. What's quite nice is
[28:28] that if you get down into the soup, you
[28:30] can kind of
[28:32] you can actually very clearly see that
[28:34] there are these sort of
[28:37] shafts of darkness
[28:39] where the shadows properly affect the
[28:41] fog.
[28:43] So, this is um this is tech that we're
[28:45] integrating from from Lumbiard at the
[28:46] moment. to sort of it's still in
[28:47] progress at the moment, but um if I
[28:49] switch over to the debug modes, I can
[28:51] sort of show how it's working. So, this
[28:53] is just like a horizontal slice that
[28:54] we've taken through the texture that we
[28:57] use. So, what we've got here is um it's
[29:00] kind of a it's a volutric texture that's
[29:03] at the moment it's about a fifth of the
[29:04] screen resolution and about 64 slices
[29:07] deep. And so, the the samples are kind
[29:10] of distributed towards the viewer end so
[29:12] that you get more detail up at that end.
[29:13] And just because because the camera sort
[29:15] of widens your field of view widens in
[29:17] the distance the same amount the same uh
[29:20] number of divisions is sort of spread
[29:22] over many more meters in the distance.
[29:24] But as you can see this um this
[29:26] rectangular volume has been sort of
[29:28] inserted into um the volutric texture.
[29:32] It doesn't bother inserting them here
[29:33] because it knows uh it knows that
[29:35] there's an opaque object. So it doesn't
[29:36] really need to know what values it's got
[29:37] there. So that's just a an optimization.
[29:40] So that's just the density and the color
[29:42] of the the volume that's been inserted
[29:44] there. So then after that we have a
[29:46] second pass that um it takes it takes
[29:49] all the lights in the scene and again
[29:50] this is just a a single thread of the of
[29:53] a compute shader is run for every uh
[29:56] every voxil of of this volume. So into a
[29:59] second texture we take all the lights in
[30:02] the scene. um we multiply them through
[30:05] with the with the density and with the
[30:08] opacity of the volume. Um and we
[30:12] actually you you can't really tell here,
[30:13] but it's it's working out depending on
[30:16] your viewing angle, it's sort of saying
[30:19] a light will sort of scatter towards the
[30:21] camera more. So I think that you
[30:23] probably can't see it, but the
[30:24] highlights will change shape very
[30:25] slightly. Maybe not. But also from here
[30:28] you can see that um this this dark lump
[30:31] here is casting a shadow from the main
[30:32] light but it's then it's still receiving
[30:34] kind of blue light from the sides. So
[30:36] then the next pass after that we
[30:39] actually we do a little bit of blurring
[30:40] after this point. But um the next
[30:42] interesting pass what this is is it's
[30:44] actually it's a ray march that's been
[30:46] done through the entire volume. So at
[30:48] this point it's worked out that any
[30:50] object that wants to be wants to have
[30:52] fog applied to it now just has to it can
[30:56] just read a single point in the texture
[30:58] and it knows that that's exactly how
[30:59] much fog something at that distance
[31:01] would need. So up near the front you can
[31:04] sort of start seeing the fog coming in.
[31:06] But as you get deeper anything beyond
[31:09] about this point is going to get exactly
[31:11] the same fog drawn over it as about this
[31:13] point because it's it's pretty much
[31:14] opaque by that point. The great thing
[31:16] about that is that whereas the old
[31:18] transparency you had to just work out
[31:20] for a single object on CPU how much fog
[31:23] in general it would get, uh, this you
[31:26] can now just any pixel that's being
[31:28] drawn can just read this text to find
[31:29] out how much how much fog it should
[31:31] have. So it doesn't have any of the same
[31:33] problems. Another quite nice thing
[31:36] actually about this, if we go back to
[31:38] the to this view. So this is now
[31:42] evaluating a noise function and just
[31:43] applying it onto the fog. So you can
[31:45] sort of see the patchiness just sort of
[31:47] slowly drifting around inside it. And uh
[31:49] if I turn off the debug, you can now see
[31:51] that there's a sort of there's slightly
[31:53] more richness and there's slightly more
[31:54] kind of complexity drifting around which
[31:57] sort of lets you kind of work into the
[31:58] scene a little bit more like sort of get
[32:00] more interest, get more variation. In
[32:03] order to switch over, we need to
[32:04] basically pick a date where every old
[32:07] fog volume in the game will break and
[32:08] every new one will start working. And so
[32:11] it's just a case of once we once we've
[32:14] got the tech in and we're satisfied that
[32:16] none of the parameters are going to
[32:17] shift around um and you know suddenly
[32:20] the density value won't mean twice as
[32:22] much as it did yesterday or you know
[32:24] whatever like that. At that point the
[32:27] environment teams and the ship teams
[32:29] have to go through absolutely everything
[32:31] that's got fog volumes on it and just
[32:33] make sure that they all look good or
[32:34] delete them if they don't or replace
[32:36] them or whatever. check that the lights
[32:38] shining onto it don't show anything that
[32:40] was slightly dodgy about how the lights
[32:42] were set up or all that kind of thing.
[32:44] It basically replaces the old fog
[32:46] technology completely. It looks better
[32:48] in almost every conceivable way.
[32:50] We've been integrating it from the most
[32:51] recent Lumbiard release that we've got.
[32:54] A lot of the work that I'm doing at the
[32:55] moment is just sort of moving taking
[32:58] that and integrating it with the with
[32:59] the things that we've changed in our in
[33:01] our copy of the engine. So minor things
[33:04] like um exactly where you get shadows
[33:07] from for the sun, we've changed that to
[33:09] be slightly more efficient, but
[33:10] obviously the new code is coming from a
[33:13] system that hasn't done that. And so we
[33:15] just have to go patch that up, find find
[33:18] where those parameters are coming from,
[33:19] find where that data is coming from,
[33:21] make sure that it all feeds through in
[33:22] the right way, sort of hunt down bugs
[33:23] that are caused by by differences
[33:25] between the two systems.
[33:26] The fog, uh especially in space, is
[33:28] going to make a huge difference. Um, the
[33:31] UK graphics guys are looking into
[33:32] creating a unified fog system so that
[33:34] even in, you know, the asteroid belt
[33:36] right now, they're kind of dull and and
[33:37] plain looking. It's just a bunch of
[33:38] rocks floating around. But in in space,
[33:40] you have a ton of ice particles. You
[33:42] have a ton of rock particles, you have
[33:44] all these little dust particles floating
[33:45] around, and that creates volume. Um, so
[33:50] really one of the focuses going forward
[33:51] is making those spaces feel more alive
[33:54] and and like there's matter there. um
[33:56] like there's stuff that you're passing
[33:58] through as you're flying through the the
[34:00] asteroid belt. Uh and that's that's
[34:02] driven by the fog system. So that fog
[34:04] system is going to be be massive. But
[34:06] having that in the engine is is
[34:07] incredibly cool. Um you can create a
[34:09] sense of depth just with fog alone. And
[34:11] then as soon as you you introduce lights
[34:13] dynamically reacting to that fog, which
[34:15] is what an artist would spend a long
[34:17] time trying to recreate, it's an
[34:18] incredibly powerful tool to have to be
[34:20] able to guide players like we kind of
[34:22] touched on before. Uh and to create a
[34:24] sense of depth away from the camera,
[34:26] sometimes the things that you don't see
[34:29] in the world and your your mind makes up
[34:32] what that is is is far more powerful
[34:33] than actually seeing that asset. So so
[34:35] strong silhouettes and things like that
[34:37] is is a very kind of distinct and cool
[34:39] style in my opinion. The fork was only
[34:43] uh different for so if by default the
[34:47] fork going to come like really intense.
[34:50] So it's depends on what kind of thing
[34:53] you are working for. I can show this is
[34:55] the default sense. So they just come as
[34:58] a volume but you going to active the fog
[35:01] scattering with the light. So depends on
[35:05] the situation of each sin we have to
[35:07] design like where the fog is come from
[35:09] or what may possibly cause the fog and
[35:13] usually the fog effect shows up on the
[35:16] like brightest point. See we have a hot
[35:18] spot around the ground and we got the
[35:20] window the lighting traveling through
[35:22] here. So in my way how I design the fox
[35:25] scattering is like alongside the
[35:27] direction of the uh possible lighting
[35:29] source comes from. See here's the
[35:31] window. So that's why those fork kind of
[35:33] falling in that way. So this is actual
[35:36] lighting source. And again um if I turn
[35:40] it on this is everything life. So the
[35:43] entire sense uh lighting wise it's
[35:45] consisted with basic image shift light
[35:48] fixture and the real lighting hotel
[35:50] space and the fog effect.
[35:52] It's brand new. It's only come in this
[35:54] week and we're we're at the stages now
[35:56] of scaling it up. So we we it's going to
[35:58] work in an environment like this. Uh,
[36:01] great reference. Thanks, guys. But we've
[36:03] got uh we obviously need to make that
[36:04] work on the scale of a nebula, which is
[36:06] is is bigger than a, you know, a solar
[36:09] system.
[36:10] I am I'm very excited about the lit fog.
[36:13] It's something I've played with for for
[36:14] a few years, and it constantly amazes me
[36:17] with how how much it improves the
[36:19] atmosphere of of an area. Um, it just
[36:22] makes things just the air feel thicker,
[36:24] and you can really feel like you're
[36:26] you're in this space. Like every single
[36:28] day I basically grab a new build and
[36:30] there's always some kind of new thing
[36:32] that's just like a new value that I can
[36:34] tweak that just makes things look a
[36:35] little bit cooler. And it's it's really
[36:37] exciting being able to see that kind of
[36:39] stuff.
[36:41] Wow.
[37:06] Heat.
[37:09] Heat.
[37:45] [Music]
[37:55] Uh, I bet the crew had a lot of fun
[37:57] covering Nate and all that fog.
[37:58] Uh, does that count as research and
[38:00] development?
[38:01] I'm sure it does. And I'm going to say
[38:03] yes. Then, uh, before we go, I just want
[38:05] to remind subscribers that this month's
[38:07] issue of Jump Point will be available
[38:08] tomorrow. Subscribers can also fly the
[38:10] Drake Buccaneer as part of the ship of
[38:12] the month. And if you're interested in
[38:14] learning about our subscriber program,
[38:16] check out the link in the description.
[38:18] That's all for this episode of ATV.
[38:21] Happy Hour Friday returns tomorrow at
[38:23] noon Pacific. The talented Josh Herman
[38:25] will create another creature live on
[38:27] Twitch, so be sure to check that out.
[38:30] Super cool. Let's see if he can top the
[38:32] flying spider. And I also want to thank
[38:34] all the subscribers out there. You're
[38:35] the reason why we can make shows like
[38:37] this one and happy hour. Of course, Star
[38:40] Citizen wouldn't exist without our
[38:42] backers. So, big thanks to all of you.
[38:45] Yes. And thanks for watching. We will
[38:47] see you
[38:49] around the verse.
[38:57] [Music]
[39:17] Everything I change blows up the game,
[39:18] so that's fine.
[39:29] Are you all right?
[39:29] Could have had it could have doubled
[39:30] with it being a bit longer.
[39:32] It's pretty intense. Yeah,
[39:33] that's pretty awesome.
[39:35] It has got a funny smell to it though.
[39:37] It's quite It's not bad. This is when
[39:39] the fire alarms go off. It's going to be
[39:41] hilarious if it does go off.
[39:45] Thank you for watching. So, if you want
[39:46] to keep up with the latest and greatest
[39:47] in Star Citizen and Squadron 42's
[39:49] development, please follow us on our
[39:51] social media channels. See you soon.
[40:00] [Music]

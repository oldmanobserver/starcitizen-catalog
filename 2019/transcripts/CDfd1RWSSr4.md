# Star Citizen: CitizenCon 2949 - Shipsounds

**Video:** https://www.youtube.com/watch?v=CDfd1RWSSr4
**Date:** 2019-12-04
**Duration:** 52:01

## Transcript

[00:03] yeah hello and welcome to our talk the
[00:10] evolution of ship audio our talk is
[00:14] probably not as cool as the one in micro
[00:15] tech but it's definitely gonna be louder
[00:18] okay so hi everyone I'm Josh Bell I'm a
[00:22] sound designer on CR G's audio team and
[00:25] my name is Eric lat I'm on the audio
[00:27] call team so we're just kind of you two
[00:33] we're just going to show you a quick
[00:35] video of like a quick video showcasing
[00:39] some of star citizen's ship audio from
[00:40] the past like three months
[00:50] [Music]
[01:33] thank you
[01:37] Thanks so what we're going to talk about
[01:39] is pure the sound of ships and how we
[01:43] will use it to give you a better game
[01:45] experience and as such we will just
[01:47] focus on the ships we will not to talk
[01:49] about UI sounds or cockpit sorry ship
[01:55] computer voice so it's just about the
[01:56] diegetic sounds of the ships as we hear
[01:58] them in the game oh yeah right
[02:04] so and the biggest step we did in terms
[02:08] of ship audio development was started in
[02:11] early 2018 because at that time the
[02:15] updated flight model was scheduled for
[02:17] development I'm talking about the flight
[02:19] model that was released with 3.5 a
[02:21] couple of months ago yeah and this point
[02:27] was a really huge opportunity for the
[02:28] audio team to change a lot of stuff
[02:31] because we had a couple of problems with
[02:34] the old technology that we had I mean
[02:36] you're all played or some of you may be
[02:38] played starts it's before 3.5 and you
[02:42] know the ships had sounds at at the time
[02:44] but we were not really happy with them
[02:48] so they were working okay ish but they
[02:50] had a had a couple of problems so so
[02:55] because at that time what were good for
[02:56] arena commander was not good and
[02:59] scalable for a huge vast dynamic
[03:01] universe I've been out talking to talk
[03:04] about what kinds of problems we had back
[03:06] then so we can separate our issues we
[03:11] had back then between code issues and
[03:13] design issues on the code side thank you
[03:18] yes the audio technology was mostly
[03:22] based on on the old lumberyard audio
[03:24] tech for vehicles and we usually just
[03:27] extended this
[03:29] so we built more features on top of it
[03:32] on top of it and this was working okay
[03:34] for a while but at some point it became
[03:36] quite apparent that we when we went into
[03:39] a couple of like
[03:42] that locks no we basically just it
[03:45] wasn't you know like having ten ships
[03:47] playing at the same time as expect was
[03:49] ten times more expensive than playing
[03:51] one and we had like no smart way to save
[03:54] calculations so you can imagine if you
[03:56] had twenty ships in the scene we had to
[03:58] do all the necessary all the
[04:00] calculations for every single of that
[04:01] ship and every frame which means that
[04:03] one ship was okay but fifty ships were
[04:07] 50 times more expensive than one ship
[04:10] and this doesn't scale well when you
[04:11] have a big scene also we could not help
[04:16] a lot existing data which means like
[04:18] poor sound designers like George had to
[04:21] spawn a respawn a ship to actually see
[04:23] the changes in the game next oh yeah and
[04:27] then when you work on a code system and
[04:31] you just add features on top of it like
[04:33] we get something that because by Getty
[04:35] code right at some point it becomes so
[04:37] huge and so hard to deal with that it
[04:39] becomes a maintenance problem I remember
[04:41] a specific instance I had to add one
[04:42] single feature to the old system and it
[04:44] took me like three days because it was
[04:46] just very hard to work with the old
[04:48] system so but they also design issues
[04:51] right yes one of the main ones was the
[04:53] engine sounds were directly coupled to
[04:55] the particle effect which means that if
[04:57] the VFX stopped triggering for some
[04:59] reason like some bug it would also stop
[05:01] the audio and we get a lot of bugs you
[05:03] know like just wasting our time we know
[05:06] we'd look into it for quite a while and
[05:08] just figure out oh it's not our problem
[05:09] but affect us all you was missing a part
[05:14] was actually missing and it also wasn't
[05:17] great for surround sound support because
[05:19] we could only play sounds from the
[05:21] locations of the thrusters and you know
[05:24] almost all ships than main thrusters and
[05:26] the loudest Firsters are directly behind
[05:27] you so you got this really weird thing
[05:29] in there were five point one system
[05:31] seven point one system where basically
[05:32] the whole zone of the ship was going
[05:33] from behind you which was you know
[05:35] physically accurate but not you know not
[05:37] cool you know you want to feel like
[05:39] you're enveloped within the ship and
[05:41] there's all this stuff around you it's
[05:43] making it sound
[05:45] yeah also there no conceptual
[05:47] distinction between inside and outside
[05:48] we have some very happy ways of you know
[05:50] playing different sounds for the outside
[05:53] versus the inside and we couldn't really
[05:58] do any really nuanced stuff of the ships
[06:00] it was very basic
[06:01] you know accelerate forwards backwards
[06:02] your left right we couldn't do the cool
[06:06] stuff that we do now like changing the
[06:08] sound of the ship of a time when you
[06:09] hold a certain speed or you know all
[06:11] that kind of stuff and the worst one was
[06:15] just the fact that it was all done in
[06:16] XML for other than dedicated tools so
[06:18] you know you want to make a change to
[06:19] one of the ships you've got to edit 30
[06:21] different XML files yeah like like in
[06:25] 2003 right yeah so it looked like that
[06:28] right and this is how we looked yeah
[06:35] kind of unhappy with me with the old
[06:37] tech so at this point we took a good
[06:41] look what we had at the moment and we
[06:43] what we wanted to do in the future and
[06:46] essentially we set out some new high
[06:47] level goals that the new audio tag for
[06:50] the new flight model should should offer
[06:52] us right so the first thing is obviously
[06:54] we want more power for the sound
[06:56] designers right we don't know XML
[06:58] editing it was we instead want to use
[07:00] what you see on the on the on the shot
[07:03] there we wanted to use existing tools
[07:04] that we had in the company which means
[07:05] data Forge for data management and the
[07:08] lumberyard editor for in-game editing
[07:12] and we also wanted to massively reduce
[07:15] the amount of time that it took to set
[07:16] up a single or especially a new shape
[07:18] right yeah so it all comes down to we
[07:22] just wanted to work faster which button
[07:24] which doesn't mean like oh god I have to
[07:27] have to rush right it just means that we
[07:29] wanted to have more efficient towards to
[07:30] use the existing time that we have
[07:32] better yeah it's we're all about you
[07:34] know taking the time that we used to
[07:36] spend you know fixing books and trying
[07:37] to figure things out and spend that
[07:40] actually making it sound good which is
[07:41] what you know some designers were there
[07:43] for really on the technology side we
[07:48] also wanted to improve performance and
[07:50] scalability I previously mentioned the
[07:52] the problem that 15 ships are 15 times
[07:55] more expensive on ship and so this is a
[07:58] typical
[07:59] big space little scene from from star
[08:01] citizen it's we didn't not just like
[08:03] spawn 150 ships in the scenes but we
[08:06] wanted to the audio tech to support
[08:09] these kinds of massive environments
[08:11] right with like hundred fifty ships in
[08:13] the scene if necessary and yeah so then
[08:17] we only wanted to of course to only play
[08:19] what is needed because what you don't
[08:20] play doesn't cost any CPU time therefore
[08:23] we wanted to avoid unnecessary arrests
[08:25] unnecessary calculations what's next
[08:27] night yeah the stuff you already said
[08:31] yeah so but if we reworked the tech we
[08:35] also wanted to rework a little bit or
[08:38] take a good look at what we wanted to
[08:40] achieve in the future for the
[08:41] experiencial side of of working with
[08:44] thee wasn't you check it on the ships so
[08:46] this is we were we were really happy
[08:48] with the the core sound design of the
[08:50] ships like on an asset level you know
[08:52] like each of the manufacturers kind of
[08:56] had their own sound you know all the
[08:57] ships within them were distinctive like
[08:59] this on their size and stuff so we're
[09:01] really really happy with that we just
[09:02] kind of wanted to you know get you know
[09:07] bring all of the potential out of the
[09:09] sound design that was already there by
[09:11] improving our implementation yeah and we
[09:16] knew quite early that the new flight
[09:17] model would offer a lot of cool new
[09:19] things for us and we wanted to hook into
[09:21] these things so we knew that something
[09:23] like next like the flight dynamics would
[09:26] be included right we would get direct
[09:28] calculations we will get lift
[09:29] calculations and and this would allow us
[09:32] to add a lot of more like nuances in
[09:34] detail to to the audio environments of
[09:36] the ships oh yeah
[09:39] okay yeah the ultimate goal was really
[09:41] just to not just put audio in there but
[09:44] to enable everybody who is on that ship
[09:46] to actually listen to and know what the
[09:49] ship is doing we wanted to the ship to
[09:50] talk to the pilots and to the crew yeah
[09:54] I mean the bottom line was to make it
[09:55] believable which is not to be confused
[09:57] with realistic it's not all about
[09:59] simulating you know exactly where the
[10:02] component is what sound that would make
[10:04] my stuff's about making it feel like
[10:06] you're in that ship which is not
[10:07] necessarily making it realistic we
[10:10] wanted every sound to be placed for a
[10:12] purpose
[10:12] and to actually come from a specific
[10:14] place in the ship district you know
[10:16] really enhanced this sense of being in a
[10:18] big machine you know like a kind of a
[10:23] kind of sense that you get when you're
[10:25] in like a jet plane or something it's
[10:26] not just you know you can't localize
[10:28] where things are you just feel like
[10:29] you're in a big a big heavy hole yeah
[10:31] and the sound is not coming just from
[10:33] the engine that's coming from everywhere
[10:34] around you right because the whole hull
[10:35] is shaking yeah okay so then we ask
[10:41] ourselves how do we create a great
[10:43] flight experience or how do we make
[10:44] flying actually better so what did we do
[10:47] we went into a research mode and check a
[10:50] lot of research and reference materials
[10:51] which means four meant for us we were
[10:53] watching films good films to watch for
[10:56] that kind of stuff is of course Top Gun
[10:58] right who doesn't know Top Gun a lot of
[11:01] the vibration stuff you'll see there it
[11:02] was like inspired by the first month the
[11:07] film about the scene at the beginning
[11:09] where he's in that experimental test
[11:11] plane and he leaves the atmosphere and
[11:13] then comes back in also a nice film for
[11:15] reference is Sulley because he's flying
[11:16] an f4 phantom and in a flashback scene
[11:19] and there's also a lot of like shaky
[11:20] noises in the cockpit and which we sell
[11:22] the flight experience right okay the
[11:25] other thing is like of course we played
[11:26] other games very stressful and we
[11:29] started to talk to subject matter
[11:31] experts and if you want to talk about
[11:33] flight with people you talk to area
[11:36] knocks technicians people who work with
[11:38] airplanes and with pilots and luckily
[11:40] our community has a lot of pilots we got
[11:42] in contact with chopper pilots with
[11:43] pilots from the Royal Air Force with
[11:46] Royal Navy business jet pilots general
[11:49] aviation pilots so essentially the whole
[11:50] spectrum and we interviewed all of them
[11:52] to tell us eh what do you think what how
[11:55] does it feel in the cockpit what can you
[11:57] hear what can you feel how can we make
[12:00] this thing better yep so essentially we
[12:03] learned about flying and then we OH
[12:06] which we did not were cave and came up
[12:09] with a for the game plan so we made our
[12:12] planning did our work and then we
[12:14] thought the best thing we could possibly
[12:16] do is to rewrite the complete audios
[12:18] code from scratch
[12:19] this comes with pro and cons right on
[12:22] the concepts of course it's really it's
[12:24] a lot rather long task right
[12:26] also it there's a high initial
[12:30] investment cost in this and when you do
[12:32] this and we work a whole a whole bunch
[12:35] of systems that already in place you
[12:37] break the game right and remember this
[12:39] is a very very unsettling yeah had
[12:43] people message me all the time like what
[12:44] you know why is this ship so quiet this
[12:46] one makes no sound this one makes way
[12:48] too much you know I can't even have my
[12:50] headphones on but hopefully in the game
[12:51] of a-flat did you break it if I send an
[12:54] email didn't I please don't book
[12:55] anything for next four months yeah the
[12:59] pearls are the good sides of this are
[13:02] obviously we wanted to build a good
[13:04] friend foundation for the future right
[13:05] we didn't want to waste any more time on
[13:08] Maintenon maintain old code and the good
[13:12] side about this if you make your tools
[13:13] nice right and really nice to work with
[13:15] then you get less frustration on the
[13:16] game designer on this sound designers
[13:18] height and if you also excite the
[13:21] workflows means they can spend so much
[13:22] time of their workday
[13:24] making cool things and not just fighting
[13:27] the tools that we have yeah more time to
[13:29] make it sound good
[13:30] yeah so so what did we done we joined
[13:34] the flat model team so Colson's and crew
[13:36] etc and went to work and yeah and the
[13:44] way how Josh and me work were like we
[13:46] essentially had to full autonomy on this
[13:48] right we said we gotta okay yeah just do
[13:50] your stuff make it make it cool make it
[13:51] nice and essentially the process was
[13:54] like that yeah so yeah I can't play wind
[13:57] sounds on the canopy class okay let's
[13:59] talk about this huh I do have cooked
[14:03] prototype hey is would that work for you
[14:04] yes
[14:05] answer wind door 12 yeah so essentially
[14:08] I got him a broken prototype and while
[14:10] he was already working with the data I
[14:11] cleaned up the prototype made it nice
[14:13] and shiny and then we went on and we we
[14:16] worked like this for quite a long time
[14:17] this is of course a little bit
[14:18] oversimplified right but it was actually
[14:19] the thing we went into like at some days
[14:22] I sent you like five or six custom
[14:24] builds from the game just with new stuff
[14:26] to try out because we were getting so
[14:28] much like autonomy and Trust to like
[14:31] implement the things that we felt were
[14:32] needed because we were the closest to
[14:34] the process that was going on you know
[14:35] we kind of came up with ideas that we
[14:38] wouldn't have Ness
[14:39] thank you audio leads thank you yes so
[14:45] contrary to the way we did it in the
[14:46] past we want to have a really layered
[14:48] approach where everything was like
[14:49] siloed each type of sound was like
[14:51] siloed into its own system you know it's
[14:53] to make it easy to debug easy to work on
[14:55] you know easy to isolate something
[14:57] that's wrong so these are trustus which
[15:00] is what we're all the audio is triggered
[15:02] from before the ship audio component
[15:04] which we use to trigger things
[15:06] everything that is like a bit of
[15:08] machinery on the ship that is not a
[15:10] thruster and then we also have things to
[15:13] simulate external physical forces on the
[15:15] ship like vibrations from collisions and
[15:17] drag and then like wind sounds and
[15:20] weather in the future and then obviously
[15:23] past byes and then just to help sell
[15:25] atmospheric flight that a bit more we
[15:27] added bespoke things for being for
[15:30] flying in a pressurized environment and
[15:32] this this was like the the mock-up like
[15:36] for the first for the first iteration of
[15:38] the new flat model which was released in
[15:39] 3.5 so all that stuff was already in
[15:41] there so the first and now we're going
[15:45] to talk about each system individually
[15:47] and we're gonna show you videos with
[15:48] each of the systems so load in the mix
[15:51] right so you only hear what sounds the
[15:52] specific category of subsystem place in
[15:56] the gamer so the first category is
[15:58] sisters which play sounds on each
[16:01] individual thruster differentiated by
[16:03] type like mavmail retro VTOL and you
[16:08] know the player sounds on that thruster
[16:09] based on what that particular individual
[16:11] thrusters doing and as we said this was
[16:13] in the past the only way it shaker
[16:14] sounds on a ship and now it's just part
[16:16] of a larger system and these are
[16:19] reactive to a heat health degradation
[16:21] all that kind of stuff and to help solve
[16:24] our like surround sound problem where we
[16:26] only had stuff coming from mainly from
[16:29] the rear we've kind of massively
[16:30] emphasized these and you know we bring
[16:33] in all these other systems to help fill
[16:35] out the kind of to fill out the mix
[16:37] around you such so just to say this
[16:39] again when you see a ship flying far
[16:41] we're like two miles in front of your so
[16:43] you're not hearing the thrusters of the
[16:44] ship you're hearing it like a simplified
[16:46] variation thrusters now are just
[16:47] detailed but when you get close to them
[16:49] they have a lot of detail
[16:50] way more than before yeah now so okay so
[16:57] this is not an adequate no
[16:59] representation them up first the
[17:02] locations incorrect this is where you
[17:06] typically find the sounds of twisters
[17:08] unsurprisingly on the thrusters yeah and
[17:11] this is a video of just the first as so
[17:14] does in the mix on the Gladius so you're
[17:16] not hearing anything else but the sound
[17:18] coming from the maneuvering thrusters
[17:19] the retro thrusters and the main
[17:21] thrusters
[17:43] [Music]
[17:52] [Music]
[17:57] [Music]
[18:03] okay so the next component were going to
[18:05] describe is the ship all your component
[18:07] this is the component that is actually
[18:10] interfacing with new flight model and it
[18:12] gives us all like or it generates a lot
[18:17] of noises which are not thrusters little
[18:20] helper like little helper objects in the
[18:22] in the cockpit that try to self
[18:24] experience better next right so
[18:28] essentially the ifcs gives us like a lot
[18:31] of like numbers we can just query and
[18:32] query really really fast which are
[18:35] different rotation rates of the ship the
[18:36] velocity the age of the ship so wear and
[18:38] tear also brace plays a role in here the
[18:40] acceleration the health itself because
[18:43] we want to tell everything on the ship
[18:46] like hey man
[18:47] the ship is quite unhealthy and it's got
[18:49] a die soon so we want every bear on the
[18:51] ship to everything on the ship to sound
[18:54] really readily and broken down yeah and
[18:57] the cool thing is we can now we can use
[18:59] all these parameters generated by the
[19:00] ship audio component from the flight
[19:03] model to change the sound of basically
[19:04] anything on the ship so we use this
[19:06] quite a lot to like change the sound of
[19:09] the room sonar the or the ambience based
[19:11] on like the ship health how how powered
[19:15] on the ship is all this kind of stuff
[19:17] then in the in the future you know we
[19:19] can use age and all that kind of stuff
[19:22] and part of this is vehicle audio points
[19:25] which is the sound of everything else on
[19:27] the ship that isn't a thruster so you
[19:29] know we can place these really really
[19:31] precisely in the editor for is in the
[19:33] past so you know we couldn't do that so
[19:35] you know you'd load up the ship level
[19:36] you just kind of you know look around
[19:38] the ship and think if you sat there
[19:39] where would you expect to hear something
[19:40] from and then you can just you know
[19:42] plunk it right on there
[19:43] and this also goes back to the other
[19:46] thing when you and when you in an
[19:47] airline alright when you're flying you
[19:49] hear maybe the main engines are left or
[19:51] right but the whole thing around you is
[19:53] also doing something right like the
[19:55] airplane banks and so on so you hear
[19:57] something some some creeks maybe in the
[19:59] in the hole somewhere but it's it's not
[20:02] just the engines that make sound and
[20:03] this this vehicle all dew points they
[20:06] they sell the idea that there's more
[20:07] these are essentially proxy points for
[20:09] what the engines are doing without being
[20:11] the engines
[20:12] like what's doing to the frame and all
[20:13] this kind of yeah fame of the ship and
[20:15] this is the main thing that you know
[20:16] allowed us to massively improve our
[20:18] surround sound experience from three
[20:19] point four to three point five yep and
[20:22] on this is where you typically find
[20:23] those on a ship you know so you've got
[20:26] your vehicle audio points here you just
[20:29] you know as I said you go around the
[20:30] ship and place them where you would
[20:32] expect to hear some things basically and
[20:34] then you've got your ambience room tone
[20:36] which is yeah well just in the rooms
[20:38] around the ship the sound of that room
[20:40] and the stuff within it how many would
[20:41] you place like it depends on the size of
[20:44] the ship
[20:44] well like the Gladius has got like eight
[20:46] and then the thought around the cockpit
[20:49] in the constellation I don't know like
[20:50] well vehicle all your points like 10 but
[20:52] ambience things there's a lot more like
[20:54] 30 40 something - yeah so this is a
[20:57] video with the same like flight pattern
[21:00] just with the vehicle audio points so
[21:03] load in the mix so you're not hearing
[21:04] the first is a vibration or anything
[21:06] like that
[21:08] [Music]
[21:20] [Music]
[21:36] [Music]
[21:46] yeah okay external forces so a big part
[21:51] of flying is not what the pilot does
[21:53] with a airplane for example but what
[21:55] nature does they are plane then this is
[21:57] really interesting and this was like a
[22:00] thing that was really missing in the
[22:01] past for us so we like based on that
[22:05] like feedback from pilots that we
[22:07] actually created two new systems for
[22:08] fresh ships one is yeah oh yeah okay
[22:14] yeah okay
[22:15] one is the vibration component and one
[22:18] is the oh yeah do you write me feedback
[22:21] component so the vibration component and
[22:23] is the thing that makes your ship sound
[22:25] vulnerable right so you can imagine like
[22:28] if you're getting like a collision or if
[22:30] you getting some some a lot of lift or
[22:33] drag from when you're flying through the
[22:35] atmosphere then this will induce
[22:37] vibrations in the ship and Josh is using
[22:41] these these these vibrations to create
[22:43] rattles and creaks and stress now noises
[22:46] and so they make you really like feel oh
[22:49] god this is too much for the ship this
[22:51] is gonna like break apart soon right
[22:52] yeah we've also got the environment
[22:56] feedback which is you know used to
[22:57] simulate like what and just to let the
[23:00] pilot know what kind of environment is
[23:02] outside of the ship so we've got like
[23:04] more static things like you know when
[23:06] you're in an atmosphere you're in you're
[23:08] in an atmosphere zone so when you go
[23:09] fast enough we play wind sounds on the
[23:11] canopy and on the on the ship body but
[23:13] also like more dynamically created ones
[23:15] like when you destroy your ship it
[23:16] creates a debris zone and that expands
[23:19] if you find your ship within that then
[23:20] you hear that on your canopy on your
[23:21] ship yeah but basically used for other
[23:24] things it could be used for like
[23:26] submarine well if you if you crash your
[23:30] ship in the in the ocean I know it
[23:32] doesn't work at the moment that
[23:33] theoretically this component would also
[23:35] create those noises for that yeah so
[23:37] it's set up to be really like divers
[23:40] usually really extensible like
[23:42] you know any any new kind of environment
[23:44] that player could find themselves in
[23:46] this we just have to add a zoom and then
[23:49] you could have played the appropriate
[23:50] sounds for that you put this on the
[23:51] actor as well right
[23:52] oh yeah one day I was just like what
[23:54] would happen if I put the this
[23:56] environment feedback component on on the
[23:58] players head in town in the New York it
[24:01] was like well just try it it might work
[24:02] and there so yes and I just plunked it
[24:05] on the player and then you know put an
[24:07] emitter on each year so now when you
[24:10] stand on a planet and there's wind you
[24:13] can hear the wind hitting the players
[24:15] head and the winds going from the right
[24:17] it's more health on the right year and
[24:19] same for the left this also works me to
[24:21] jump out of the ship because we get more
[24:22] wind this way yeah yeah so the way this
[24:26] works we have we have set up a long list
[24:33] of like different materials and the size
[24:35] of that material so you know we'll go
[24:38] around and place a vibration point on
[24:39] like a big metal panel in the cockpit of
[24:42] a constellation and we choose like metal
[24:44] large and we want one on the on the
[24:46] glass we know glass medium and then when
[24:51] then when that sound needs to play it
[24:53] will select the appropriate sound for
[24:55] that size of material and that mitt and
[24:57] that material and it's the same thing
[24:59] for the environment feedback points you
[25:01] know so we just go like you know when
[25:03] them glass lodged and when you find
[25:05] yourself in an atmosphere or just you
[25:07] know play sounds appropriate to that
[25:09] glass panel in the wind and you know we
[25:12] play some all and the body of the ship
[25:13] different sizes of different bits that
[25:15] stick out and all that stuff okay let's
[25:18] take a look at this this is just the
[25:20] year the components or just the sounds
[25:23] for external forces all this stuff is
[25:25] you know crucial to like really kind of
[25:27] grounding the ship and materializing the
[25:30] ship into the game world so you know it
[25:32] feels more real and more physical eyes
[25:43] [Music]
[26:14] if you could see the moment when the
[26:16] canopy opens were then those are the
[26:18] wind sounds on the players years rather
[26:20] than the wind hitting the canopy in
[26:21] front of them so obviously if you're
[26:22] flying through the air like 200 metres
[26:24] per second on even if you got a helmet
[26:26] on and that's flying past your head it
[26:28] would be incredibly low it's yeah oh
[26:32] yeah they were depressed by component so
[26:36] we also separated out this component
[26:38] that was generating passed by noises I
[26:40] mean there's a lot of videos on YouTube
[26:42] or so we're like a little an avatar or
[26:45] like a player stands on top of a planet
[26:47] yeah on the mountain or so and the ship
[26:49] whizzes by right these things were not
[26:51] working properly in the past I don't
[26:54] know if you remember but you would
[26:56] trigger some of these flyby sounds this
[26:58] do things right on high-speed formation
[27:01] flying for example you fly with thousand
[27:03] meters per second forward and have your
[27:05] friend there and you'd constantly get
[27:06] mm-hmm it was just it didn't work well
[27:09] right in all situations so we reworked
[27:11] the system as well it works now really
[27:13] good and then and then we release it 3.5
[27:16] and we forgot to activate a checkbox and
[27:20] then we got a little shitstorm at our
[27:21] hands because everybody was saying you
[27:23] broke the flyby sounds yeah we broke
[27:25] them but then we couldn't repair them in
[27:29] a point that you broke again later again
[27:33] yeah we also added additional sounds
[27:38] that trigger just when you in atmosphere
[27:40] that I just came from the ship as a
[27:41] whole because all of you know the
[27:43] vibrations environment feedback vehicle
[27:46] olia points and thrusters all behave
[27:47] differently in atmosphere because they
[27:48] after you know fight through the medium
[27:50] but we just found that that in itself
[27:52] didn't really completely sell it so we
[27:55] just really had a bunch of sounds for
[27:56] the ship using stuff like
[27:58] terrain height to kind of give the
[27:59] feeling of the sound of the thrusters
[28:01] reflecting off the ground as you get
[28:03] lower and just special effects for low
[28:06] altitude flying and these are just both
[28:11] of these are just triggered from the
[28:12] ship as a whole right there on this
[28:16] video we're gonna show you is just with
[28:18] all of these special atmospheric sounds
[28:20] so loading the mix so you know this is
[28:22] not the thrusters no vibrations no win
[28:25] nothing like that just the kind of
[28:26] special effects that we are based on
[28:28] what kind of atmosphere
[28:36] [Music]
[28:44] [Music]
[29:22] so another topic that we wanted to
[29:26] approach with a new technology is
[29:27] performance right yeah so you know to
[29:32] solve the issue we had an the old system
[29:33] where every ship there was no
[29:35] distinction between what was in like we
[29:37] use the term NLP see non-local player
[29:39] character and there's no distinction
[29:41] between what was your ship and what was
[29:43] someone else's ship now we have that
[29:46] distinction and to you know make it so
[29:49] that whereas scalable as possible while
[29:51] still sounding good we have a separate
[29:53] set of sounds for NPC ships that are
[29:56] outside of a certain range you know
[29:59] these are completely different to the
[30:00] player ship sounds but like still per
[30:02] manufacturer per model but um have a
[30:05] different set of sounds until you get
[30:07] within 150 meters of the ship and then
[30:08] you get basically the same experience as
[30:11] if it was your ship so this allows us to
[30:15] have to calculate less parameters cuz we
[30:18] only need this small subset that we need
[30:20] these we need to make these simplified
[30:23] sounds work and the result is that you
[30:26] know a typical ship that isn't yours
[30:28] will use about 10% of the like
[30:31] processing cost compared to your own
[30:33] ship and this is kind of a philosophy
[30:34] that we use is to like try and go and it
[30:38] was much detail as possible on the ship
[30:40] that you're in and uses little resources
[30:43] as possible on other ships while still
[30:44] making them sound good yeah and another
[30:48] thing that we did a couple of more
[30:50] tricks to improve the performance one
[30:52] thing is like we have different kinds of
[30:54] priority like one priorities
[30:57] a typical priority that we use for
[30:58] figuring out which ship and the
[31:00] sweetness is important the most
[31:02] important one is just into a comparison
[31:03] between like how much space does it take
[31:05] on the screen where those versus how far
[31:07] is it away so we can make a good
[31:10] estimation of what kind of sound we
[31:12] actually need on the ship and what stuff
[31:14] we we don't need and then when we made
[31:17] these decisions what you're gonna need
[31:19] need to keep we just hardly cut away
[31:21] everything else what do you think just
[31:25] just scream how many how many ships can
[31:27] you hear at the same time in the game
[31:29] just shout five yeah not all of them no
[31:41] we're not going to go back it's like the
[31:44] thing in the film when you hear you know
[31:45] people running you can make out you can
[31:48] make out one person's footsteps two
[31:50] three four when it starts getting five
[31:52] six you'll just hear a crowd and that's
[31:54] yeah and also this hoops has helped the
[31:57] mixing process a lot because just like
[31:58] tons and tons of ships which are audible
[32:00] they will just create noise in the
[32:01] background that's it's not nice and easy
[32:03] to map it makes you you would think here
[32:05] and more would make it sound bigger or
[32:08] like there was more but it often just
[32:09] makes it sound like a mess and there's
[32:12] less ships okay yeah we mentioned that
[32:14] before we based on that we simply do not
[32:17] update data that we don't need so if a
[32:19] strip is like not audible we don't care
[32:21] about it and suddenly we have all the
[32:22] CPU budget available for something else
[32:26] yes these simplified sounds like play
[32:28] from the ship as a whole we're gonna
[32:31] show you a video with just like just a
[32:34] sort of dogfight scenario where you're
[32:36] only hearing the movement sounds of the
[32:38] NPC ships nothing else nothing else
[32:44] [Music]
[33:01] [Music]
[33:19] I play a bit of a work in progress and
[33:30] that's a very new thing but the idea was
[33:31] just to and the idea was just to you
[33:39] know kind of Nicolas sounds we have to
[33:43] as few important from it as as possible
[33:45] so you can quite easily tell it for
[33:47] ships and I've coming towards you moving
[33:49] away from you accelerating in any
[33:51] direction just from you know kind of
[33:53] modulating a very small set of sounds
[33:55] yeah so yep this is everything we've
[34:00] went through this is ship audio this is
[34:01] uh yeah this is 3.5 like the audio tech
[34:04] or 3.5 and this is everything you've
[34:11] heard but with nothing sewed everything
[34:13] together like in the normal game mix
[34:19] [Music]
[34:54] [Music]
[35:10] [Music]
[35:52] [Applause]
[35:56] [Music]
[35:59] okay so all this mixing sorry there's a
[36:06] couple of other things that we do is
[36:12] dynamic mixing so we what people would
[36:15] often know is sidechain and where you
[36:17] change the volume of one sound category
[36:20] based on the volume of the sound
[36:22] category so example like we decrease the
[36:25] volume certainly of your own ship if an
[36:27] npc ship is making a lot of noise
[36:29] because then we'd assume that that's
[36:31] something you want to know to look at or
[36:33] you know would be important to you
[36:36] also things like you know when you when
[36:39] you fire your weapon will suddenly duck
[36:41] your ship sounds for a split second for
[36:44] you here you know that your weapons
[36:45] fired basically just kind of drawing
[36:47] attention to what's important and
[36:50] there's more things like you know we
[36:52] know which ships are the closest to you
[36:54] and like a ranked order we know this
[36:57] also combined with the size of the ship
[37:00] like which ships are targeting youth so
[37:02] we can give them a slight volume bump to
[37:04] draw your attention to them whether
[37:07] they're hitting you and even they are
[37:09] whether they're friendly or friendly or
[37:12] an enemy ship you know we kind of
[37:13] assumed you'd want to know about the
[37:15] enemy once more so we bring up their
[37:17] volume slightly and these are all really
[37:18] really subtle things that you kind of
[37:20] wouldn't really notice in isolation but
[37:21] if we were to take from the way the game
[37:24] would sound quite a bit worse
[37:31] yes adding new sounds to a ship is now
[37:35] extremely simple like 90% of the self is
[37:37] done automatically by all of the ships
[37:40] just inheriting from one master
[37:41] spaceship record with all of the data
[37:44] every ship needs already so you can
[37:47] place the points extremely accurately
[37:49] and quickly in the editor we can
[37:51] audition vibrations in the editor by
[37:53] just saying play a vibration of this
[37:54] force what does that sound like before
[37:56] we've actually gone through the process
[37:58] of exporting the ship
[37:59] and basically from the moment we export
[38:01] the sound from our digital audio
[38:03] workstation where we create all of our
[38:04] assets we can have it on the ship
[38:06] playing in the actual game within two
[38:09] minutes and I recorded a video of me
[38:10] doing that that's just a random sound I
[38:19] just grabbed I just want to stick on the
[38:20] ship just for the purposes of this so I
[38:23] export it and then I import it to wise
[38:26] which is our you know which is all your
[38:28] tool that we use at sea at AIG and then
[38:33] I put it into the into the into the
[38:35] event then I add a couple of our TPC
[38:38] behaviors on it so what I'm doing is
[38:41] making the Sun wobble a bit when you
[38:43] accelerate quickly pick one from the big
[38:52] list of ship parameters were you rushing
[38:54] it a tiny bit
[38:57] look it is possible to do this quickly
[38:59] if you know if you know what you do
[39:07] cool yep then I've done a lot I built
[39:10] the bank going to the game refresh the
[39:13] audio system and then I choose where I
[39:17] want to place my sound so you know place
[39:19] it there paste in my play triggers
[39:26] choose which RT pcs are neat which
[39:29] parameters from the flight model I need
[39:30] to use on that point to get what I want
[39:32] save it export the ship go into game
[39:39] mode on the ship then I've solo that
[39:43] sound so we only hear the new sound
[39:54] [Music]
[40:01] sounds a bit strange next mission
[40:05] [Music]
[40:09] and how long Chuck this previously 10
[40:13] minutes maybe before yeah
[40:14] all of our tools have generally I've
[40:16] just start balanced in the time as well
[40:18] yeah
[40:19] so with that foundation done we have a
[40:23] lot of things to look forward to so
[40:26] essentially we're not done yet right so
[40:28] we have now a good foundation we can do
[40:29] more extensions of the existing existing
[40:32] system and make them nicely intact with
[40:34] us and one thing we want to do in the
[40:37] future is a title link with the ship
[40:39] power system so if you if you think
[40:42] about like you're in a room and like
[40:43] parts of the room like in a ship let's
[40:45] say the back side of the ship is powered
[40:47] off then we want the audio to reflect
[40:48] that at the moment we cannot do this but
[40:49] this will probably happen over the
[40:51] course of the next year yeah then yeah
[40:55] we want you know sound on each specific
[40:58] ship components so you know you could go
[41:00] to your shield generator and just by
[41:03] listening to it then you would help give
[41:05] you a hint about that something was
[41:07] wrong with it
[41:08] same with power plants flight support
[41:10] any kind of component that can perform
[41:12] well perform badly we turned off we want
[41:15] to support it by having a sound placed
[41:16] on the component inside the ship from
[41:18] where it actually is and you you've seen
[41:20] maybe on the ship's there are slots like
[41:22] maintenance slots where later like few
[41:24] generators and power generators can be
[41:25] put in so we will hook into that as well
[41:29] another thing that's coming online next
[41:31] year is sound some implementation
[41:32] because we all know there's no sound in
[41:35] space and this might be boring and sound
[41:38] some is the thing that makes makes
[41:41] things audible in space this is like we
[41:43] actually have like a lightweight
[41:45] implementation of that already so if you
[41:47] are in your ship and you turn off your
[41:48] sensors or take a few helmet you will
[41:50] not you will not be able to all of your
[41:52] senses you'll get a slight change okay
[41:55] so and and we will greatly expand the
[41:57] system over there in the course of the
[41:58] next year oh yeah now we've got all this
[42:02] new technology we want to kind of go
[42:04] back to the ships that were made really
[42:06] really early on and other sounds and I'm
[42:07] really really early on and make like a
[42:10] hit list of ones to kind of extend given
[42:13] all this new technology that we have and
[42:15] that's just like a gradual ongoing
[42:16] process yeah
[42:18] okay also of course we want still to
[42:21] improve the flight experience we think
[42:23] we're on a good path but we're not done
[42:24] with that yet
[42:25] so one thing we do ritmo recently is to
[42:28] do real audio recordings maybe it tell
[42:31] the story about the vibration components
[42:34] and then it was all working really
[42:37] really well and we had no content to but
[42:40] in it so I have to very very quickly
[42:41] come up with like a whole suite of
[42:42] different stress sounds and rattle
[42:45] sounds to cover the whole range of ship
[42:46] movement and the only thing I had was my
[42:49] filing cabinet in my in my sound booth
[42:52] at work and my saw buffa so I played a
[42:54] synthesizer through just the subwoofer
[42:56] and then kind of strap that to the side
[42:58] of the filing cabinet and put different
[43:00] kinds of things in it and annoyed
[43:02] everyone for like half a day weekend of
[43:06] all of all of the vibration sounds in
[43:07] the game right now all my filing cabinet
[43:09] but not alone we've planned to do some
[43:12] actual recordings of we have a video and
[43:14] the person with the mouse cursor can you
[43:17] click on the lower left side of the
[43:18] screen okay so every every messed up
[43:41] your immersion now yeah no but we will
[43:47] we will get nicer assets for that in
[43:48] future as well yeah yeah then a nice
[43:52] little private endeavour of - I'm went
[43:55] into flight school and during the first
[43:57] couple of flights already noticed a
[43:59] couple of things right which could be
[44:00] used for the game because you cannot
[44:01] turn off your develop developer brain
[44:03] can we have a click on the top left
[44:05] video please so that's me I had a GoPro
[44:09] strapped to my head and then I mean this
[44:12] is this is like a silent video because I
[44:15] cruise a lot during flying but you get a
[44:18] good feeling about what's important for
[44:19] a pilot right and you get a good feeling
[44:20] about what can be done in the future to
[44:22] make the flight experience better and I
[44:24] also recorded a couple of sounds which
[44:26] made inmate into keenya so
[44:30] you probably go back and recording some
[44:32] GLaDOS at some point because you get
[44:33] very pure wind sounds but yeah so we're
[44:37] going more out into reality to get some
[44:40] nice source material also we were in an
[44:43] ad show recently and we visited we saw a
[44:47] display of a profile jet fighter right
[44:49] and this one is just like droning out
[44:50] everything around you in terms of audio
[44:52] and I came back really really excited
[44:54] was like Josh Josh to make fake please
[44:58] please make sure flour and make them
[45:00] more growly and all that and this is
[45:03] most directly fed into that's when we
[45:05] came up with the extra level of detail
[45:07] atmospheric stuff so and this is like
[45:09] why the ships in the atmosphere now
[45:11] sound like they are so you just get a
[45:13] lot of good reference materials right so
[45:16] but the most important thing that we can
[45:19] do and can get is your feedback so if
[45:23] you are and unhappy with your sounds or
[45:24] if you saw it with our sounds and if you
[45:28] want to give us feedback make good or be
[45:30] back please leave us a message at
[45:32] spectrum what we cannot guarantee to
[45:35] answer everything we read everything
[45:37] that you that you write to us right
[45:40] and please prefer spectrum because like
[45:43] this is the this platform is not just
[45:45] for for you it's also first developers
[45:48] to read what you about the community of
[45:49] thinking so we're almost at the end of
[45:53] our talk so as you can imagine we're now
[45:55] in a much nicer place and we have time
[45:59] for questions I think we have time for
[46:01] questions
[46:02] see person with microphone appeared we
[46:06] have time for questions
[46:09] [Applause]
[46:16] oh I I'm just wondering how are you
[46:21] gonna sound alien ships what kind of
[46:24] technique we'll use for that
[46:26] okay so code sight it would be exactly
[46:29] the same sound design wise Josh did the
[46:35] bunny defender which was the first bunny
[46:37] one their Spanish ship that we've had in
[46:39] the game flyable is basically just like
[46:43] you just come up with like a kind of
[46:46] it's like I sort of sound Bible you know
[46:49] it's like a few key words from the law
[46:52] and all that sort of stuff to kind of
[46:54] inform what kind of sounds you pick and
[46:57] it was very useful to kind of restrict
[47:01] what sounds we build the whole part from
[47:05] so I was kind of struggling with the
[47:07] binary defender in all honesty for a
[47:08] little while and then I really dug down
[47:11] at this sound Bible idea picking a few
[47:14] key words picking sounds fit that and
[47:16] then restricting myself to just those
[47:18] sounds and then you know just like put
[47:22] them all in a folder of fifty sounds I
[47:24] can only use these for the whole ship
[47:25] and by doing that you force yourself to
[47:28] kind of you know do something unique for
[47:32] that because you're not using stuff
[47:34] that's already been designed or any of
[47:36] that you know it's about noticing yeah
[47:40] getting a good base for yeah that's
[47:42] things like we use the law and you know
[47:44] how and the art to inform a lot of
[47:46] income of keywords that we follow yeah
[47:53] so great job button on the sound so far
[47:56] I love it
[47:57] when it comes to Estonia plan to
[47:59] implement a more even event based like
[48:03] effect sort of like and when you're
[48:05] breaking the sound barrier and make what
[48:07] is it called like a sonic boom or for
[48:09] example when you're landing with a a
[48:11] spaceship that had wheels and you're
[48:14] like almost gliding on the surface
[48:16] you're kind of missing that whole
[48:19] feedback from the ground it's trying to
[48:22] plan to implement that
[48:25] okay A to D to the sonic boom stuff what
[48:28] you mentioned that it's a complex thing
[48:31] that is on our to-do list but it's it's
[48:34] not very easy to do because if you want
[48:36] to do properly you need to take an
[48:37] account like different speeds of sound
[48:39] because speed of sound is depending on
[48:40] the temperature on the only and the
[48:42] density of the medium and we don't know
[48:44] what we do when you for example well
[48:47] think about you have a sound right and
[48:49] then you you accelerate so fast that you
[48:52] get going faster than the sound and then
[48:54] you stop and the sound catches you again
[48:56] is that that might be very confusing for
[48:59] players right also if you if you imagine
[49:01] if you have like a dogfight far ahead of
[49:03] you and you have like this delay between
[49:05] a sound happening or a visual explosion
[49:08] and then you get a delayed feedback
[49:09] there's player expectations so it's not
[49:13] quite clear if the players will accept
[49:15] that I mean we had a we had a chat at
[49:16] some point I was like oh cool this is so
[49:19] impressive right there it's like because
[49:21] we tested that we tested like just like
[49:22] basic sound speed of sound parameters
[49:27] and we had a scene where a ship just
[49:28] exploded and like a second later weird
[49:31] like thing came it was like wow this is
[49:34] powerful and he was like well this is
[49:36] right so it's it's it's kind of
[49:39] like it depends what you what you
[49:41] experience and then when we're not quite
[49:43] sure where we're gonna go in this
[49:44] direction but it someone ought to do
[49:45] this to to do something about this and
[49:47] about the other stuff like the Eco
[49:49] support so most laughs so far went into
[49:53] into our ship audio system though we
[49:56] have a dedicated audio coder is just
[49:58] looking at vehicle eco support so
[50:00] there's gonna be some some we're looking
[50:03] to we're also going to improve the whole
[50:05] landing experience like you know the
[50:07] feeling of the like the power of the
[50:08] ship but I mean we've really quite sold
[50:09] that yet when you come into land that
[50:13] we're always improving that and they're
[50:14] as four-wheeled when you if ships can
[50:18] ever land on a runway than we love did
[50:20] you mean wheels on ships or wields on
[50:22] like cars yeah yeah will some will some
[50:26] ships like Ivan a Avenger or if you're
[50:29] using a another type of landing gear
[50:32] where you're like you're scraping
[50:32] towards okay so obviously we want to
[50:35] have better support for that but we're
[50:37] not there yet but
[50:38] it will happen you are there guys great
[50:45] panel a day thing you've always been a
[50:51] big fan of creating sounds in particular
[50:53] always fought ever really good now on
[50:55] though it's a filing cabinet wanna know
[50:57] what you're gonna be using next what's
[51:03] the plan we just want to be you know as
[51:06] a start get more materials and more like
[51:10] actual different office is there's only
[51:12] so far you can go up in pitching up and
[51:14] down one filing cabinet before it just
[51:15] sounds like a bigger or smaller filing
[51:16] cabinet we want to you know get more
[51:19] materials involved because it's not just
[51:21] metal inside of a ship it's you know all
[51:23] these kind of composite plastics and
[51:24] like the kind of you know if you had
[51:27] like a glass pane that could resonate
[51:29] with you know if it wouldn't be wrapped
[51:30] me but it would kind of hum of kind of
[51:32] stuff also when you land with a glider
[51:35] in the field that's readily that's
[51:37] really readily so we're probably gonna
[51:39] yeah get involved just getting more more
[51:42] more more sizes of materials more
[51:44] materials in there okay stuff yeah
[51:47] thanks okay that was sadly the last
[51:49] question because we ran out of time
[51:50] thank you so much for watching that dude
[51:53] and you're on

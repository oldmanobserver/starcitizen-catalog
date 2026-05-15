# CitizenCon 2953: Taking Flight

**Video:** https://www.youtube.com/watch?v=xGM60FRVolY
**Date:** 2023-10-30
**Duration:** 48:56

## Transcript

[00:20] okay hello everyone is my microphone
[00:23] okay can you hear me
[00:25] fine uh these are the wrong slides hang
[00:28] on
[00:30] well hello everyone my name is Yogi
[00:32] clatt I'm a principal vehicle programmer
[00:35] at Cloud Imperium games and the focus on
[00:37] uh space flight and the um and space
[00:39] combat I really love my job so this is
[00:42] why I'm really excited to show you the
[00:44] progress that we did on squading 42 in
[00:46] the last two years so there's two things
[00:49] I need to say here first thing is we're
[00:51] doing a live demo and the build is
[00:54] about 12 hours old so there is a good
[00:57] chance
[01:00] there is a good chance for for bucks
[01:03] which um well if you see them just just
[01:05] look away it will be
[01:07] fine uh the second thing is um I'm not
[01:11] flying myself today it will be brand
[01:12] gunzinger
[01:14] [Music]
[01:17] he's using a setup of two vkb sticks so
[01:22] left and right HOSA setup from vkb and
[01:24] he's also using the Fantastic Toby
[01:26] device so we'll swap during the
[01:27] presentation between using hatw and not
[01:30] using hat wracking um yes so but the
[01:34] good thing is the relationship between
[01:36] you and your Starship it doesn't start
[01:38] when you take off it starts way before
[01:40] that there's a lot of stuff we do now in
[01:41] pre-flight um so please welcome back
[01:43] Ines kalas who will walk us through that
[01:48] [Applause]
[01:51] process this working yeah okay hello
[01:54] everyone it's a privilege to be here
[01:57] back on stage to tell you all about what
[01:59] do you can expect about the player
[02:01] interaction experience inside your
[02:03] cockpit if you like I've told you before
[02:06] how we've been working towards improving
[02:08] the player interaction experience all
[02:10] across our game and we wanted to bring
[02:12] this improvements to what happens inside
[02:15] the cockpit so we wanted to give you a
[02:17] greater immersion
[02:21] and okay okay yeah the slide on sorry
[02:24] about that yeah so you want to give you
[02:27] a greater immersion and have and give
[02:29] you a closer experience to what pilots
[02:31] go through in real life not only when
[02:34] you're flying around your ship but the
[02:36] moment you take your seat at the
[02:39] cockpit so to achieve this we've created
[02:43] when you enter your ship you'll be put
[02:44] in what do we call a new relax pose so
[02:47] in this pose you'll have free look enabl
[02:49] so you can easily look around the
[02:52] cockpit and your
[02:54] dashboard the promps will be showing
[02:56] over the button so you can easily find
[02:58] the ones you have to interract and you
[03:00] the pilot have to press all the
[03:03] different buttons to get your ship ready
[03:04] for flying and the car hands will be
[03:06] lowered away from the control stick so
[03:09] all of this Blends neatly into our new
[03:12] player animated interaction system
[03:15] whereby as any button is now physically
[03:18] pressed so this new system uses what we
[03:21] call a CD ik approach this stands for
[03:24] code driven ik or inverse kinematics and
[03:27] gives full control of the ik setup to
[03:30] the code so this among of things allows
[03:34] us to record the path of the hand
[03:36] relative to its Target so we can have
[03:39] more detail animations than just simply
[03:41] blending the hand into position so for
[03:44] example we can open a flap and then
[03:47] press the button but you know enough of
[03:49] me talking let's go jump into the demo
[03:52] and see all of this in action so
[03:56] now so brand very kindly will get us
[03:59] into the shape well you'll see the new
[04:01] enter sequence and you'll see the new
[04:04] animations we have been working
[04:23] on so you can see now that you won't
[04:26] directly grab the control stick you'll
[04:28] be put on to this free on this relax
[04:31] pose with free look enabled and you can
[04:33] see the different prompts appear over
[04:34] the buttons so let's get this show
[04:37] started and let get your ship ready for
[04:39] flying so Brent if you could close the
[04:41] canopy so we don't go flying around with
[04:44] that
[04:45] open power our
[04:50] systems look at
[04:53] that and finally turn our
[04:56] entrance yeah so we are you are now
[04:58] ready for flying so we will be be
[05:01] bringing all of this to all of our ships
[05:03] in our Fleet and that's all for me so
[05:05] please W join me in welcoming to the
[05:08] stage Tony to tell you all about the MU
[05:11] [Applause]
[05:22] UI hi everyone my name is Tony I'm
[05:25] senior UI programmer here at C and I'm
[05:28] here to explain
[05:30] some of the spoilers that you saw
[05:31] yesterday about our new ship UI so are
[05:35] you ready to see the ship UI in
[05:39] action right bone play the demo the I
[05:42] mean brand continue with the
[05:46] demo so as you can see already this ship
[05:49] has less intrusive UI with more space to
[05:52] enjoy the standing Vistas that planets
[05:54] can offer and less clut views so you can
[05:57] focus during combat this also means than
[06:00] the UI elements are now more relevant to
[06:01] the situation linked to the operator
[06:04] mode for example when we change to scan
[06:07] mode the Crosshair has scanning
[06:09] information about your Target and even
[06:12] the mfds have changed some of these
[06:14] elements can be customize but we'll see
[06:16] more about that
[06:18] later for this demo we're showing the UI
[06:21] develop for this gladios basic
[06:24] information related to navigation will
[06:25] always be available on your view and
[06:27] this Gladius displays all of that with
[06:29] Holograms around the dashboard but other
[06:32] ships may have different layers and
[06:35] styles on brand with a
[06:37] manufacturer for example the Drake that
[06:39] makes more affordable ships rather than
[06:42] fancy and probably expensive Holograms
[06:44] may use physical screens dials and light
[06:49] indicators this dashboard shows your
[06:51] current speed the remaining afterburn
[06:54] and some decoys available on both far
[06:57] sides we have status indicators that
[06:59] will show things like if your landing
[07:02] gear is on or any any other flight
[07:05] systems what mentioning that we have
[07:07] prototyped these for the demo so right
[07:09] now they're Holograms but on the final
[07:11] design these are going to be physical
[07:13] screens on the far left on the top of
[07:15] the dashboard we have the indicator of
[07:18] which Master mode and operator mode are
[07:19] you on so let's change that to combat
[07:22] and talk about this new
[07:25] mfds so we have reworked all of these
[07:27] mfds from scratch with brand new views
[07:30] using our UI Technology Building Blocks
[07:34] we can still navigate through these mfds
[07:36] using the classic Mouse interaction
[07:38] holding F and then moving the mouse on
[07:41] the left here we can see the scanning
[07:42] view which is going to show information
[07:44] that you obtain when you scan a Target
[07:46] it may show information about the ship
[07:48] name the pilot name or even the current
[07:51] operator mode of your target so you know
[07:53] if they are just chilling around or they
[07:55] are ready to fight
[07:56] you cycling to the left one we have the
[07:59] target status which will focus on
[08:01] emissions damage and orientation of your
[08:03] target we'll see that in action
[08:06] later the next one continuing to the
[08:08] left will be the self status which is
[08:11] contextual so during navigation that
[08:13] will show your current fuel but during
[08:16] combat like right now we show
[08:17] information about your guns you can
[08:19] click on the gun and you can see basic
[08:21] information about that you will see the
[08:23] name and you can also see in which group
[08:25] they are assigned which Yogi will
[08:27] explain later
[08:30] on the MFD on the right side we have the
[08:32] power management where we can distribute
[08:34] the power of different systems of the
[08:36] ship you can click on the triangle and
[08:38] move it around to change the
[08:39] distribution and you can turn down the
[08:41] total power of the ship that will
[08:43] generate the classic key Bindings that
[08:45] you all know already works so when you
[08:48] change the power management you will see
[08:51] now a triangle on top of the radar to
[08:53] show you the
[08:54] [Music]
[08:58] changes now now instead of using Mouse
[09:01] you can also use key bindings to select
[09:03] mfds and cycle through the views which
[09:05] might be faster when you are in certain
[09:07] situations like during combat and for
[09:10] those Pro players out there we have
[09:11] added about a 100 key bindings and I
[09:14] mean a 100 to navigate through all of
[09:16] these systems so you can fully customize
[09:18] how you want to navigate through
[09:21] them and I really hope that's more than
[09:25] enough to use on your keyboard on your
[09:27] hotas or even on your game glass setup
[09:29] but if you need more just let us
[09:31] [Music]
[09:33] know anyway I think you're not going to
[09:35] need even th many shortcuts for each
[09:39] operator mode we now persistently Save
[09:41] which views are shown on each mfp so you
[09:44] can customiz what's important to you for
[09:47] every
[09:48] [Applause]
[09:50] situation so as an example during combat
[09:53] you might want to have Target
[09:54] information on your mfds but maybe when
[09:56] you change to Quantum travel have your
[09:58] current fuel spend some time on the
[10:00] configuration screen for
[10:02] example let's talk about this
[10:04] configuration screen we're going to have
[10:07] now here a variety of options from
[10:09] customizing UI elements to enable
[10:11] systems of the ship we maying some of
[10:14] these later in action with
[10:15] ji these settings are now available on
[10:18] this screen not in the global settings
[10:20] of the game for quick access so just as
[10:22] a warning expect changes on the settings
[10:25] that you already know but we'll tell you
[10:26] all about it when we have it ready
[10:30] and the important bit about this is that
[10:32] they will persist to your ship so you
[10:34] can keep different setup of which UI
[10:36] elements and even ship systems enabl for
[10:40] how you personally use each of your
[10:42] [Applause]
[10:47] ships now some of you might be thinking
[10:50] that these gladio stes have enough
[10:53] mfds can we enable the top
[10:58] setting for those of you that you want
[11:00] to see even more information you can now
[11:02] cast versions of these mfds to your
[11:05] [Music]
[11:07] [Applause]
[11:15] helmet for this you're going to need to
[11:17] equip the appropriate helmet so it's
[11:19] connected to your ship and get I can get
[11:21] all this
[11:23] information you can use the key bindings
[11:25] as I mentioned before so you can select
[11:27] which cast do you want to control and
[11:28] how to cycle through them so you can pin
[11:31] views that are important to you with
[11:33] with your that will move with your
[11:35] camera so as you have seen if you're AIT
[11:37] at the Target or if you're moving with
[11:39] your head trackers those views are going
[11:40] to be always with
[11:43] you with all this tools you can
[11:46] customize your experience and have it
[11:48] ready for every situation that you
[11:49] encounter with your ship always
[11:51] displaying the relevant information to
[11:54] you so for example during combat you may
[11:57] want to have all the U elements enabled
[11:59] all all the peeps all the crosshairs so
[12:01] the information of your ship on the
[12:03] physical mfds and maybe focus on the
[12:05] target information on your cast so
[12:07] they're always on your view but maybe
[12:09] when you go to Quantum travel you can
[12:11] turn those cast off so you can enjoy the
[12:15] vistas that's all from me now we have
[12:17] mfds reies and let bring Yogi back to
[12:20] tell you all about flying your ship
[12:21] thank you very much
[12:31] okay at this point our ship is fully
[12:33] fully powered up ready to fly pre-flight
[12:36] is complete so Brent please uh take off
[12:39] put the landing gear in and bring us
[12:45] out have you seen the interaction this
[12:47] is great isn't it okay so um one of the
[12:51] problems we always have in uh Space
[12:53] Games is to produce a sense of speed
[12:55] space is is big and the sense of speed
[12:58] is always produced by you know small
[13:01] things going around you so although it's
[13:03] not very visible here the VFX team has
[13:05] actually added space t so in the future
[13:07] you can tell where your ship is going
[13:09] even by uh even without looking at
[13:11] instruments another thing we're focusing
[13:13] on as well is uh GeForce reactions uh so
[13:16] brand if you could jump come to a stop
[13:18] for a
[13:20] second when your ship is sitting like
[13:22] that and you strave left and right you
[13:25] have these small head
[13:27] motions uh that basically
[13:29] make your head and your body react to
[13:31] the gForce they're currently enduring
[13:33] we're actually increasing them now we
[13:35] also added rotational g-forces into the
[13:36] mix so if brand is now rotating the ship
[13:38] to the left you also can see that your
[13:40] head is swaying a little bit things get
[13:43] a little bit more interesting um when
[13:45] Brent is actually taking boost into the
[13:47] mix so if we um now boost forwards we
[13:49] now added camera Shake we added uh fov
[13:52] changes um and this all then plays
[13:55] together with the other things like you
[13:56] know the other exhaustion effects that
[13:58] we have so overall the ship should now
[14:00] feel a little bit more reactive than
[14:03] before the same thing
[14:06] [Applause]
[14:09] sorry at the same time we reduce the um
[14:13] extensions that your uh that look ahead
[14:15] code is does uh is doing so um we
[14:19] basically narrowed it down a little bit
[14:20] so it mixes better with GeForce reaction
[14:22] so that even when you don't have a hat
[14:23] tracker or something like that it will
[14:25] still feel uh pretty good but this is
[14:28] just a minor change
[14:30] um we also improve the flight controls
[14:32] themselves so take a look at the speed
[14:34] gauge for example it's a little bit uh
[14:37] trdy today what that speed gaug is
[14:39] telling you the number that's currently
[14:41] moving is what kind of speed goal brand
[14:44] is actually putting in if he puts his
[14:46] stick all the way forward the left one
[14:48] you will now be able to see and read the
[14:50] number that you're asking ifcs to speed
[14:52] and forward momentum this also allows us
[14:56] to bring back the sticky throttle we had
[14:59] uh pre 3.5 where you now if you play
[15:02] with mouse and keyboard you can press W
[15:03] and S to increase and decrease your
[15:05] speed and that go of the key and the
[15:07] ship will not automatically come to a
[15:09] stop of course this is all completely
[15:11] configurable so you can enable that or
[15:13] not if you
[15:20] want okay Bren give me some hot flying
[15:23] now like a blackout and all that okay so
[15:27] um another thing we changed in the SL
[15:29] model is that we actually looked at the
[15:30] tri coding exploits these are really
[15:32] important for PVP and racing uh players
[15:34] among you because Tri coding gives us a
[15:37] mathematical problem that we're trying
[15:38] to resolve on some ships when you tri
[15:40] cord you get actually up to 50% more
[15:43] acceleration that huge difference uh
[15:47] actually makes a lot of the ship
[15:48] difference meaningless so we're cutting
[15:50] back on those so um a first
[15:53] implementation of that is already
[15:54] available in the master mode testing
[15:55] areas in 3.21 I think um but we're
[15:58] improving the um algorithm right now so
[16:00] that it actually is L uh is less
[16:03] punishing um in future Master mode
[16:06] builds uh this actually a current
[16:07] version so as long as you go roughly
[16:10] forward you get the full G's um from
[16:12] your from your back from your back
[16:15] engines okay so now the biggy in the
[16:17] room we're talking Master
[16:19] modes Master modes is by far the biggest
[16:22] change we're doing on the ship gam
[16:23] playay in general all of your ships will
[16:26] be put into or will get a master mode
[16:28] set up and the master mode is affecting
[16:31] basically everything surrounding uh
[16:33] everything on the ship the ship itself
[16:34] the the the flight Model A little bit
[16:37] but specifically the items and what they
[16:39] do um and there are two Master modes
[16:41] we're going to talk today about one is
[16:43] semm which stands for space combat
[16:45] maneuvering and the other one is
[16:46] navigation so let's look into uh sem sem
[16:50] is the mode that brand currently has um
[16:53] has active so you see the um Bren can
[16:54] you go into the uh indication please for
[16:57] the master mode just point with a mouse
[16:59] there if you
[17:01] can yeah so this is your current Master
[17:03] mode it says semm when you're you use
[17:06] sem for basically all the gaml that is
[17:08] not raval so combat mining salvaging
[17:12] using it for that you have full access
[17:14] to your combat system your Shields are
[17:16] working your Thruster boes is fully
[17:18] active your weapons are working it's the
[17:20] high performance High alertness mode
[17:22] that you're in however we will heavily
[17:25] restrict how fast we can go um we we can
[17:29] go with your ship okay Brent go to um
[17:31] full Max Speed so this Gladius on max
[17:34] speed and SC can reach about 225 m/s
[17:37] that might seem slow compared what you
[17:38] have in the Pew right now but it's still
[17:40] pretty fast however you can extend that
[17:42] speed um brand if you just go forward
[17:44] and
[17:45] boost so the Gladius can extend up to
[17:48] 500 550 m/ second on this slide here you
[17:53] can see the speed gate uh the speed
[17:55] spaces we're talking about so if you're
[17:57] just walk U flying around in sem which
[18:00] is like the max speed of your of your
[18:01] ship you can reach the 225 m/s if you
[18:05] boost you can reach up to 500 or 550
[18:08] however that boost space is not spheric
[18:12] that means if you boost forward you
[18:14] reach higher speeds than if you boost
[18:16] backwards that is really important for
[18:17] space combat maneuvering because or for
[18:19] dock fighting in general because it
[18:21] discourages back strafing it actively
[18:24] actually punishes back strafing and it
[18:26] creates more interesting combat
[18:28] maneuvers
[18:29] um the PVP players among you they
[18:31] basically call this uh encouragement to
[18:33] closing the gap which is basically more
[18:36] forward Centric combat which is much
[18:37] much more exciting than back strafing
[18:39] and just trying to get some shots on it
[18:41] also forces you as combat players to uh
[18:44] to commit to the decisions you did
[18:45] earlier in the fight so it's going to be
[18:48] uh we think it's much more
[18:52] [Applause]
[18:57] exciting so in short you pick semm when
[19:00] you need to fight when you want to fight
[19:02] or when you need to fight right um the
[19:05] thing with the master mode switches is
[19:07] that they do not happen instantly they
[19:09] take a while to move over so um we're
[19:11] now going to put our ship into uh the
[19:13] second mode which is
[19:15] navigation so navigation mode is
[19:18] basically the opposite of SCM what uh
[19:21] this does it gives you a high speed low
[19:24] performance mode your Shields they will
[19:27] collapse your weapons will not be able
[19:29] to fire your defensive systems will will
[19:32] not be functional um but you have higher
[19:35] speeds so in NF mode you can still speed
[19:38] uh reach the speeds of uh what you have
[19:39] currently in the Pu something I mean
[19:41] depending on the ship sometimes thousand
[19:42] meters or 1400 m/ second um but all your
[19:47] regenerative systems so regenerating the
[19:49] weapon capacitor your Thruster boost
[19:51] will be
[19:52] inhibited so this means when you want to
[19:55] go fast you need to be very very careful
[19:57] when you want to swap over so imagine
[19:59] you're in a fight and you want to escape
[20:02] you should not do it right away because
[20:05] if you just swap to navigation mode in
[20:06] the hope to flee you're being left with
[20:08] no Shields and the first thing that will
[20:11] go offline when you're hitting with
[20:13] Distortion guns is the Quantum Drive and
[20:16] that is important because the Quantum
[20:17] Drive will spool automatically up when
[20:19] you enter Nerf mode and it will then
[20:21] unlock the higher
[20:23] speeds so this means when you're in N
[20:26] mode and you're fighting you're very
[20:28] vulnerable so you should get out as fast
[20:29] as possible luckily navigation mode not
[20:33] only allows you higher speed but also uh
[20:36] gives you access to the new Quantum
[20:38] travel experience which we're going to
[20:40] show in in a
[20:41] minute so that is enough point that you
[20:44] see there on screen this is the point we
[20:47] want to go to in Quantum travel
[20:49] to before we do that I need to quickly
[20:51] explain what this is about So currently
[20:54] in the Pu when you Quantum travel from A
[20:56] to B you're actually not not really
[20:58] moving you're going on a spline and
[21:01] you're teleported in every frame along
[21:03] that spline so there's basically no no
[21:05] meaningful gaml we can add there the new
[21:08] Quantum travel experience is fully
[21:10] physicalized physics is always on which
[21:12] means when you Quantum travel from A to
[21:14] B you are actually accelerating using
[21:16] our awesome physics engine and because
[21:19] it's physicalized it give us it gives us
[21:21] a lot more meaningful gameplay we can we
[21:24] can play with so Brent will start the
[21:27] quantum travel in a second what will
[21:28] happen then is your Quantum Drive will
[21:30] initiate the jump you will see an effect
[21:33] that distorts the space around you and
[21:36] you will accelerate forward during the
[21:38] acceleration process and this so this is
[21:40] the time until you actually reached your
[21:42] cruise
[21:43] speed the ship will experience forces
[21:46] and you as a player you're responsible
[21:48] to counter these forces so there is an
[21:50] element of failure okay Brent um let's
[21:53] show
[21:55] that ini and take your hands off
[22:25] thank
[22:26] you so what you just saw is is basically
[22:29] the failed attempt to Quantum
[22:31] travel Brad wasn't countering the forces
[22:33] therefore he was thrown out the the
[22:35] quantum bubble collapsed and threw you
[22:36] out your ship doesn't like that ifcs
[22:39] leads five six seconds to recover from
[22:41] that during which time you uh you just
[22:43] you're just tumbling right so um so and
[22:47] this is not just uh like dependent on
[22:49] your on your skills if you think
[22:51] selecting a proper Quantum Drive doesn't
[22:53] matter in the
[22:55] future think again you want to take care
[22:57] of your Quantum Drive you want to repair
[22:58] it and keep it in good shape so if you
[23:00] buy a cheap
[23:01] one your travel will not necessarily be
[23:03] faster but it might be harder okay so
[23:06] Bren shouts how it's done properly
[23:10] [Music]
[23:36] the B is locked you can now go hands
[23:53] [Applause]
[23:55] off okay so there's a second variant of
[23:58] quantum travel and this is for short
[23:59] range jumps sometimes you jump somewhere
[24:01] or you go somewhere and you and you see
[24:03] the next point of interest is like 1200
[24:05] kilm away we're not going to force you
[24:07] anymore to travel that by hand you will
[24:09] use a technique called Quantum boosting
[24:11] it's a Quantum based short range jump
[24:14] for like something between a couple of
[24:15] hundred kilometers to like 30,000
[24:18] kilomet or so when you use quantum
[24:22] boosting the process is practically the
[24:24] same but the quantum bubble will not
[24:27] stabilize itself so you need to be
[24:28] hands- on for for the whole time and the
[24:31] speeds are naturally well slower but
[24:33] it's not slow it's still Quantum
[24:34] traveling right okay so Brent can you
[24:36] boost to uh oh reinforcement needed yeah
[24:40] let's go there let's boost oh actually
[24:43] sorry thank
[24:46] you okay so what brand is currently um
[24:49] showing here is I think I forgot to
[24:52] mention Quantum boosting Works in every
[24:54] direction you don't need KN points
[25:06] Brent is awesome thank you okay so now
[25:10] please boost to reinforcements
[25:13] needed so if there's knife point and you
[25:17] boost your Quantum travel system will
[25:20] pick that knife point to go
[25:24] to welcome to pyro 3
[25:31] [Music]
[25:34] as you can see there's a lot of UI
[25:36] happening right now there's a lots of
[25:37] context there and this is not an online
[25:39] demo it's a single player so that means
[25:41] all these units
[25:43] there they're friendly at hostiles
[25:45] they're probably fighting with each
[25:46] other which is a good seg way to talk
[25:48] about AI improvements and there's one
[25:50] man who can tell tell you all about AI
[25:52] this is the man with the nicest legs at
[25:54] cig well please welcome Diego Marty
[25:56] Mason
[25:58] [Applause]
[26:07] so who's excited to see the new AI
[26:13] changes hi everyone as Yi said my name
[26:16] is Diego Marty Mason and I am the AI
[26:18] programmer focusing on the fly combat
[26:21] over the past year we've been working on
[26:23] delivering a thrilling experience to the
[26:25] AI
[26:26] encounters let me first walk you through
[26:29] our journey we first started looking at
[26:32] the Kur behavior in the Pu we quickly
[26:35] realized how uniform fighting was and
[26:38] how we were not using all of the tech
[26:39] available to us to make a more
[26:41] interesting experience we had the
[26:43] foundations and we wanted to learn more
[26:46] about how you the players do your combat
[26:48] Encounters in the verse so we did this
[26:51] by getting combat recordings analyzing
[26:53] videos and internal play testing where
[26:56] we were hammering each other for hour
[26:58] hours it was fun unless you went up
[27:00] against experienced Fighters like
[27:03] be anyway with all of these data we
[27:06] started crafting the first prototype
[27:09] with the focus of bringing that human
[27:11] behavior into the AI brain when the
[27:13] first version was ready to be tested I
[27:16] handed it out to one of the best
[27:17] internal pilots in the team
[27:20] Yogi so Yogi what do you think about my
[27:23] first
[27:26] prototype it was an exercise of
[27:30] humility it was an exercise of
[27:33] humiliation I hated it and I blam
[27:38] Theo so this was due to the AI being
[27:41] able to keep a good range control and a
[27:43] perfect orbit run their target while
[27:45] maintaining a constant finding solution
[27:47] come on it's a
[27:48] computer we learned a lot from our
[27:50] initial prototype and it really help us
[27:52] to Define what we wanted to deliver a
[27:54] combat experience where the AI get
[27:56] challenging makes mistake just like us
[28:00] humans we want players to leave every
[28:02] combat encounter with a feel of
[28:04] Satisfaction by encouraging you to keep
[28:06] on the move and make use of the Vehicle
[28:09] Systems available to you so you can at
[28:11] least try to win the
[28:13] fight let's see how we brought this new
[28:15] iteration of combat to life we BR down
[28:18] in multiple
[28:20] stages the first one
[28:24] interception then the main engage phase
[28:27] which which we broken different tactics
[28:30] strafer
[28:32] jouster
[28:33] Chaser and finally
[28:37] disengage let's switch to the demo as
[28:40] you can see Bren has encountered a scar
[28:42] M let's talk more about the combat flow
[28:47] [Music]
[28:49] there okay we will start with
[28:52] interception after acing the target the
[28:54] prary aim is to close the gap with the
[28:55] target if the AI is already the target
[28:58] the inter interception phase is skipped
[29:01] completely if it's too far it will tell
[29:03] the AI to use the new Master modes to
[29:05] swap into navigation mode and make use
[29:07] of the fullest speit to chase swapping
[29:10] back to STM mode when we are in a
[29:12] Striking Distance that leads us to our
[29:15] second phase
[29:17] engage here the AA selects an adequate
[29:19] tactic based on combat environment these
[29:21] are choosing VI the traits and tactic
[29:23] selector system you've heard more about
[29:25] them in the previous to by Franchesco
[29:28] so let's talk about the straford as this
[29:31] is a six degrees of freedom game is the
[29:33] natural combat shape adopted by pilots
[29:36] we have to related the same behavior to
[29:38] our AI ensuring also that orbits are
[29:40] closed and adding variations to include
[29:42] rolling sters will break combat if they
[29:45] cannot keep an
[29:46] orbit so now we see how the Hammerhead
[29:50] is being attacked by Hornets this Hornet
[29:52] are jousters jousters consist of
[29:55] Performing stay in attacks while
[29:57] outputting a lot of Fire power blowing
[29:59] through smooth turning and repeating we
[30:02] added variations for the M skill Pilots
[30:05] like a skit roll attacks that provide a
[30:07] spider-like fly path Jers are also good
[30:10] at monitoring for back strifers so if
[30:13] they cannot get into strike distance
[30:14] they will just
[30:15] break and finally the
[30:18] Chaser now Bren is going to get there in
[30:21] a second but the Chas it is going to be
[30:23] the catus which is following one of the
[30:25] Hornets and it's Alli with the uh hammer
[30:30] head now we are really far far away 10
[30:39] kilometers so the Chaser it will try to
[30:42] always stay on the target six the idea
[30:44] is to force the target into defensive
[30:46] stance by making them turn into the
[30:48] change this maneuver will be seen mainly
[30:50] in squats and atmosphere
[30:53] combat the Final Phase which can happen
[30:55] at any time depending on the combat
[30:58] situation is disengage this SP is
[31:01] trigger based on constantly listen to
[31:03] multiple events in parallel to name a
[31:05] few critical Health damage to Shields or
[31:08] weapons
[31:09] depleted there is also a shorter version
[31:11] of disengage that we call Pace breaks
[31:14] which occurs during long periods of
[31:15] combats due to fatigue nature of the
[31:18] combat encounters these space breaks are
[31:20] short and the main objective is to
[31:23] perform a simple maneuver to gain a new
[31:25] Advantage position in the strike again
[31:28] this new flow is what encompasses the
[31:31] code of our new AI fly combat experience
[31:34] in combination with AI trades that will
[31:36] give designers the tools to tailor each
[31:39] combat encounter in the vers like for
[31:42] example they can choose the a sta that
[31:44] will allow AI Pilots to make use of all
[31:47] of the ship's angular velocity so they
[31:49] can keep a more precise orbit so for
[31:51] some of you out there is going to be a
[31:53] good
[31:54] challenge while we've been while we've
[31:57] we've been mainly focusing on fighter
[31:59] Behavior we've also started to follow
[32:00] the same process to other ship types
[32:02] like gunships and capitals in the near
[32:05] future we want to deliver experience
[32:07] where going against a capital ship like
[32:09] an Idis is a tough fight that unless you
[32:11] bring the right combinations of tools
[32:13] meaning ships that are equipped to take
[32:14] down Capital ships you will get the mge
[32:17] by their powerful
[32:18] turrets now after all of the feedback in
[32:22] our first internal play t we've receive
[32:24] a lot of constructive and positive
[32:25] feedback and Yogi is not longer been
[32:27] destroyed by the AI so I think he likes
[32:29] toar a bit more thank you everyone I
[32:31] hope you enjoy the new Ai and back to
[32:33] you
[32:34] [Applause]
[32:40] Yogi thank you Diego okay so now we're
[32:43] going to talk about uh we heard about
[32:45] how AI makes my life hard now let's talk
[32:48] about how to return the favor we're
[32:49] talking
[32:50] weapons so the weapon and aiming systems
[32:53] and squadrons they went through a lot of
[32:55] changes I can only mention a couple of
[32:57] them so I will go through them
[32:59] relatively quickly first thing on our
[33:02] to-do list is basically weapon tuning at
[33:04] the moment almost all weapons in the Pu
[33:05] are practically the same in scon that's
[33:08] not the case almost all weapons have
[33:10] different properties uh they're being
[33:12] they have like different projector
[33:13] velocities different DPS numbers but
[33:15] they're not just um different in terms
[33:17] of these numbers they also they also
[33:19] feel different remember the Cinch
[33:21] cannons from like a couple of years ago
[33:24] there were they were very powerful
[33:26] weapons but there were extremely easy to
[33:28] use which which made the meta weapons so
[33:30] we're going to bring the Cinch Canon
[33:32] back but we make sure that the amount of
[33:34] work you put into these cannons in order
[33:36] to employ them is on par with the other
[33:39] guns so there's a lot of stuff that
[33:40] we're going to do um to make sure that
[33:43] we like weapons have very a lot of pros
[33:45] and cons um and avoid uh meta
[33:48] specifically for this build Brent is
[33:50] equipped with a nose uh I think a Clos
[33:53] and run laser repeater can you fire it
[33:54] once yeah and the other weapon he has is
[33:57] a he has um two weapons on the wings
[34:00] which are um gats ballistics U sorry
[34:03] gats gats cannons uh size three with one
[34:06] push they're actually firing two so we
[34:08] also going to have uh burst weapons um
[34:11] and so on Okay cool
[34:14] so a problem we have in Space Games is
[34:17] controlling the engagement ranges
[34:19] because we want to bring the fights
[34:21] close but the problem is
[34:25] that well how do I put this
[34:28] um weapons usually in order to bring
[34:31] them close what the games game usually
[34:34] do is they just restrict the ranges like
[34:35] in the Pew a lot of the weapons have
[34:38] exactly a range of 1,400 kilometers
[34:40] which means often the fights occur at
[34:42] 1,399 M um this is not for this is not a
[34:46] good um way for us to control the
[34:47] weapons um and we we tried out things
[34:50] like damage fall off so that uh bullets
[34:53] get more damaging the closer you are but
[34:55] the problem there is how do you
[34:56] communicate that to the player so we're
[34:58] going to do a couple of different things
[35:00] with that in the
[35:01] future let's see when the graph comes on
[35:04] okay so show fans or show which of you
[35:07] has an
[35:10] Aries okay as an Aries pilot you might
[35:13] uh know the following problem you have a
[35:16] Target you're going to aim at
[35:18] it um and then you
[35:22] um this is what
[35:25] the okay
[35:28] I need to go back okay there's actually
[35:30] some stuff not not there anymore I don't
[35:32] know what happens when you aim with your
[35:36] Crosshair on the over the PIP um is that
[35:40] you actually not aiming at the PIP the
[35:43] Legacy system gives you a pip which does
[35:44] not show you where the PIP where the
[35:46] weapon needs the PIP the new aiming
[35:48] system actually produces the PIP space
[35:51] them where the weapon sees them and
[35:53] rejects them on the Target that means
[35:55] the aiming information you're getting is
[35:57] actually much much more precise and uh
[36:00] this is a very interesting um sorry I
[36:04] said the completely wrong
[36:07] thing I'm sorry I'm nervous okay
[36:10] controlling weapon ranges sorry I'll do
[36:12] it now
[36:18] sorry okay sorry okay controlling ranges
[36:22] in the future all the weapons will get
[36:24] much much longer ranges size one weapons
[36:27] will fly to up to 5 or 6 kilomet before
[36:29] the despawn the way how we do this wait
[36:32] the way how we do this is we're adding
[36:34] spread because spread is for us is a
[36:37] very good indication on how to control
[36:39] the ranges this is not a onetoone uh
[36:41] relationship there so don't worry you
[36:42] won't get like spread with like 20°
[36:44] offset or something like that don't
[36:45] worry right but if we compare the spread
[36:49] of the uh spread of the weapon with the
[36:51] target size we know when the weapon is
[36:53] in range we know when the uh when you
[36:58] actually are close enough so that the
[37:00] majority of your hits can hit and we're
[37:02] telling that we're telling you that via
[37:04] the um by the aiming system now so Brent
[37:07] let's go back to the demo if you get a
[37:09] green pip and a green Crosshair it means
[37:11] you have a high chance of your weapons
[37:14] hitting hitting the target if Brent
[37:16] takes a little bit of a step back and
[37:18] waits until the Pips and the crossair
[37:20] turn red this does not mean that the
[37:23] ship is out of range you can still hit
[37:25] it but you might waste bullets um this
[37:29] also has the benefit that I'm not sure
[37:30] if you saw that before but if you look
[37:32] at how many how many bullets are in the
[37:34] air you actually getting a lot of
[37:36] bullets uh uh a lot more bullets and it
[37:39] just looks a lot better okay Brent just
[37:41] just kill these guys
[37:43] now
[37:47] [Applause]
[37:49] bam oh
[37:53] well okay
[37:55] so um that was was the this one okay the
[37:59] thing you might have seen is that um
[38:02] brand has is loaded with size three guns
[38:05] on size three gimbals that means we're
[38:08] removing the M minus one system
[38:13] that the reason for that is the original
[38:17] intention of like controlling the
[38:18] performance between joystick and mouse
[38:19] players just didn't work out and the new
[38:21] aiming system is flexible enough to deal
[38:22] with these differences so we're just
[38:24] removing it and keep going so next Point
[38:28] pip
[38:30] grouping if you have different weapons
[38:32] of different with different projector
[38:34] velocities you will get different Pips
[38:36] because merging the Pips makes no sense
[38:38] for us anymore because the weapons going
[38:41] to have vastly different projectile
[38:42] speeds so if brand for example enables
[38:45] all the weapons now you get separate
[38:48] Pips so let's talk a bit about pip
[38:50] optimizations here and this is the thing
[38:51] I messed up
[38:54] before again who is an Aries
[38:58] if you aim at your target you get a pip
[39:02] right your a owners know that you aim at
[39:05] the PIP you shoot you
[39:08] miss and this is because the PIP is not
[39:10] being shown where you need it in the
[39:12] future we're actually offsetting the PIP
[39:15] where the weapon sees it and then
[39:16] reproject this onto the
[39:19] Crosshair like that and when you then
[39:21] hit you hit no when you then shoot you
[39:25] hit um and this is of course also
[39:28] communicated by the aiming system so
[39:29] when the when the Pips turn green and
[39:31] when the when the Crosser turns green
[39:33] just
[39:34] shoot okay so now to the actual best
[39:39] part we cannot take down this Hammerhead
[39:42] it's too big for us we need but we can
[39:44] it the weak points on the
[39:45] Hammerhead are the turrets the way are
[39:47] we going to do this in the future is
[39:48] with Precision targeting mode
[39:50] [Music]
[39:52] Brent enable phys targeting mode there
[39:55] we go
[40:02] what this does it does three things you
[40:05] get this full zoom on the target um you
[40:09] get a lower RPM of your weapons which
[40:11] increases or decreases the spreads for
[40:13] more prision and to get the painting
[40:15] mechanic anywhere where you put your
[40:17] Crosshair on that on that ship it will
[40:20] tell the gimbal system where to aim at
[40:22] so if friend now attacks the
[40:25] turrets your aiming system will
[40:27] automatically lead the
[40:33] shots bam one through it
[40:43] down Okay so this Hammer had now
[40:46] understood that is not good that doesn't
[40:49] stand a chance right now but this will
[40:51] be the way how you in the future will
[40:53] will uh fight um against sub targets and
[40:57] so on
[40:57] the good thing about this it also works
[40:59] even without um painting the target
[41:02] directly so you can do very very precise
[41:03] warning shots um and and there's no aim
[41:07] assist that kind of like destroys your
[41:08] aiming processes okay so the fight is
[41:11] now
[41:12] over sorry I need to rush this a little
[41:14] bit because I messed up stuff
[41:17] before and you're going to look at pyro
[41:19] 3 okay Brent switch to na mode and bring
[41:23] us down to that landing spot
[41:28] so pyro 3 is also called
[41:30] Bloom it's a very big planet with a nice
[41:36] atmosphere and um oh something wrong
[41:39] with
[41:40] throttle oh well something's wrong with
[41:42] a throttle we try to go down as fast as
[41:44] possible
[41:49] though I said gameplay demo might have
[41:51] [Music]
[41:55] bucks okay going to go there now okay
[41:59] yeah steeper angle that
[42:01] works okay so the um the thrusters on
[42:05] your ship they do not like the they do
[42:08] like the vacuum of space they're we're
[42:10] talking spaceships here right and we
[42:12] have thrust efficiency curves on these
[42:14] thrusters so at some point especially
[42:15] the me thrusters they will cease working
[42:17] because they don't like atmosphere they
[42:19] will overheat very very quickly so
[42:21] there's the question what happens when
[42:22] you go down to a planet and you want to
[42:24] rotate your ship with your thrusters off
[42:28] well we'll see can you go to external
[42:32] view can you wagle your
[42:43] tail okay back first
[42:46] person okay so what you see here is the
[42:48] new aerodynamics model because obviously
[42:50] our uh left stick is somewhat damaged or
[42:53] so we can't be as fast as we want um
[42:56] actually Bren can you try W and S on the
[42:58] keyboard
[42:59] instead oh it doesn't work ah why would
[43:02] you
[43:05] add no doesn't yep okay no the stick is
[43:09] uh is the stick is uh affecting us okay
[43:12] anyways we're going to go down as much
[43:13] as as far as possible so the new
[43:15] aerodynamic system is a complete
[43:17] replacement of the aerodynamic system
[43:19] that you currently have and you need th
[43:21] um you need to control surfaces to
[43:23] actually uh turn the ship around it
[43:26] simulates the airflow over your lift
[43:27] surfaces and therefore the slower you
[43:30] become the less effective those uh
[43:32] control surfaces will be in order to
[43:33] turn your ship so we can demonstrate
[43:35] this so if brand just sits here and Ys
[43:37] left and
[43:38] right you will see he cannot go uh
[43:41] further than that that is in line with
[43:43] what real airplanes uh also experience
[43:45] when they're trying to use the rudder to
[43:47] your left uh left uh left and right so
[43:49] what brand can do here is he can roll
[43:52] and he can pull to actually change
[43:55] um his Direction
[43:57] [Applause]
[44:03] okay so just for this demo we added a
[44:05] button the button is called thrust a
[44:07] disconnect because um at the moment in
[44:11] the Pu when you go through a planet
[44:13] you're using the thrusters to rotate
[44:14] we're not doing that anymore so Brent
[44:16] disconnect the thrusters please and put
[44:19] the ship into a purposeful stall a stall
[44:22] happens when the air flow over a wing
[44:24] seizes um or over a lift surface ceases
[44:28] and then at some point you will not have
[44:29] any Authority anymore and your ship will
[44:31] not turn and so on and you will
[44:32] basically fall out of the sky that is
[44:34] naturally a state that every plane wants
[44:37] to avoid naturally right and this is
[44:39] happening right here Brent is not able
[44:41] to to use the control surfaces right now
[44:43] because the ship is in a in in a process
[44:45] of stalling however the airf flow will
[44:48] pull the nose back into the wind and
[44:50] once you have enough speed he can
[44:52] actually well he gets Authority back
[44:54] over the control surfaces
[45:03] that means for you as players what what
[45:04] you can actually do you can do Arrow
[45:06] breaking you can do pure gliding if you
[45:08] want to uh you can even do like
[45:10] competitions like I don't know like Drop
[45:12] ships out of orbit and then see how fast
[45:14] far they Glide this is all possible with
[45:15] a new system so let's talk about the
[45:18] problem how do you come to a stop
[45:21] now to come to a stop with a new system
[45:24] you need to purposefully put the ship
[45:26] into a stall
[45:27] but don't worry when we don't have the
[45:29] thrusters disconnected ifcs will help
[45:31] you so you're going to bring down the
[45:34] speed more and more until you're
[45:37] reaching stall speed which is about now
[45:39] and then the thrusters will kick in and
[45:44] and catch
[45:46] you that means however you are now in a
[45:49] state that the thrusters don't don't
[45:51] like right so at the moment we have
[45:53] turned this up but in the future you
[45:54] will not be able to hold this for long
[45:56] so if brand for example now from a hover
[45:59] strave his
[46:00] left more left more left more left the
[46:03] wind flow again pulls the ship over and
[46:06] you go forward
[46:08] [Applause]
[46:15] again okay so now brand Now show us uh
[46:18] how to come to a hover and uh do we have
[46:21] some water here oh yeah there's our
[46:23] Point okay
[46:31] [Music]
[46:38] W okay so there's our Landing
[46:45] Point can become a little bit slower I
[46:47] don't know 100 m/
[46:49] second so we're trying to land somewhere
[46:51] here
[47:02] whoa look at
[47:08] this yeah that water's great like
[47:12] awesome okay so now we're coming to a uh
[47:15] so now brand will try to land with a
[47:17] broken throttle
[47:31] and yeah he's aided a little bit here by
[47:33] uh by the landing gear so he has landing
[47:35] gear out I think because that
[47:37] automatically enables Precision mode at
[47:39] the moment so that you're a little bit
[47:40] slower but you can of course like turn
[47:41] this off as a player and then you come
[47:44] smoothly down to a landing the best way
[47:46] to land your ship is in decoupled
[47:48] because you can
[47:50] just like very smoothly landed on the
[47:54] surface and clonk
[47:59] and now you're going to power down the
[48:00] ship using the new
[48:06] interactions engines are first then
[48:09] we're in the relaxed pose again as in
[48:11] showed before power
[48:15] off and the canopy off uh no open not
[48:19] off don't don't put the canopy
[48:24] off and get out of the ship
[48:28] and probably go for a swim or
[48:33] something okay that was a bit of a buggy
[48:35] bumpy ride but um thank you for taking
[48:38] um the time with
[48:48] us and we'll see you in the verse thank
[48:50] you

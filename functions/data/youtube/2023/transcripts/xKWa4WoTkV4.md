# CitizenCon 2953: Shaping the ‘Verse - The Future of StarEngine

**Video:** https://www.youtube.com/watch?v=xKWa4WoTkV4
**Date:** 2023-10-24
**Duration:** 1:34:53

## Transcript

[00:13] [Music]
[00:18] B bjo citizen KH we are so happy to be
[00:22] here it's been so long to see you guys
[00:25] physically and just being able to
[00:27] interact has been fantastic so far and
[00:30] we're super excited about all this the
[00:33] video you just watched outline a lot of
[00:36] features in the star engine it's a
[00:39] reminder of what makes this game so
[00:41] special it's a focus on Fidelity I said
[00:45] it it's a focus on
[00:47] immersion and it's a focus on
[00:49] seamlessness being able to go everywhere
[00:52] and you just you're just there the
[00:55] accomplishments from the tech teams at
[00:56] cig have been numerous in building all
[00:59] the techn ology that allow you to run
[01:01] the game and allow you to experience the
[01:03] same things that we see in our de setups
[01:06] and so what we're about to see today is
[01:07] a deep dive into all these features but
[01:10] first I wanted to touch really quickly
[01:12] on this last year we have launched
[01:15] persistence or added persistence it's
[01:18] been a rocky road this year and I want
[01:20] to thank you guys for keep on keeping on
[01:22] playing giving us a hand giving us good
[01:24] bug reports it's been fantastic for us
[01:26] to improve the stability of the game so
[01:28] thank you so much you guys deserve a
[01:30] hand of Applause thank you so
[01:37] much I just want to touch on one bit
[01:40] which is that all the people you will
[01:42] see in the next couple Tech panels are
[01:44] really the best of their crafts in the
[01:47] world they are
[01:50] infused by a value that we tremendously
[01:53] value at cig which is Relentless
[01:56] optimism that this game can be
[02:00] that this Vision can be achieved and so
[02:05] without further
[02:06] Ado but first I got one more thing to
[02:08] say so in all of the different panels
[02:11] that you'll see the all the updates um
[02:14] everything that you'll see on screen
[02:15] whether it's a HUD an MFD a ship UI uh
[02:20] FPS weapons everything all of this is
[02:23] new so as you watch the clips you're
[02:26] going to see some differences that's
[02:28] because this all comes from the freshest
[02:30] implementation that we have we love open
[02:33] development we love to show you guys the
[02:35] work in progress and so that's exactly
[02:37] what we're going to look at today and so
[02:39] without further Ado I leave you with
[02:41] Marco we will show you all the cool and
[02:44] amazing features of our engine and the
[02:45] challenges that we face thank you so
[02:47] much
[02:48] [Applause]
[02:55] guys thanks B hello I am Mar Coretta VP
[03:01] of technology and we are going to talk
[03:03] about star engine today we have been
[03:06] developing star engine for many years
[03:09] with the goal of creating an online
[03:12] living universe but creating a universe
[03:16] is not an easy task and even more
[03:20] difficult to do everything seamless
[03:22] without any loading screens or invisible
[03:26] walls and massive spaceships flying very
[03:29] fast close to the terrain and objects
[03:32] are pushing the limits of procedural
[03:34] generation and
[03:37] streaming this is not a single player
[03:39] game so creating this Universe Online is
[03:43] making everything more challenging we
[03:46] stream and generate physics on server on
[03:49] CPU and we already support more than 100
[03:53] players on a single server more with
[03:56] server mching to support all this the
[03:59] engine must do a lot of work every frame
[04:03] so in a typical star engine frame update
[04:06] we got up to 64 Hardware threads about
[04:11] 200 soft ones over 700,000 streamed in
[04:16] entities and millions of entities
[04:18] overall in the solar system about
[04:22] 150,000 updates per frame we have over
[04:27] 200 Vehicles spaceships and round ones
[04:31] over 2 million physical objects over
[04:34] 100,000 objects generated per frame when
[04:37] flying over the terrain we have many
[04:40] unique location streaming on demand in a
[04:43] seamless gigantic space Also we are
[04:47] supporting many new features that we are
[04:50] going to Showcase today I'm going to
[04:53] starting introducing the new and
[04:55] improved clouds and fog worked on by
[04:58] custom vener in the R&D
[05:01] team the First new feature is the light
[05:04] shafts where volumetric Shadows from
[05:06] clouds cast into the atmosphere but
[05:09] truly volumetric and 3D fully integrated
[05:13] they're not just a PST effect as it is
[05:17] usually done in
[05:18] games with this the atmosphere from an
[05:21] overcast Sky gets dark and this is
[05:24] important for planets and locations with
[05:28] bad weather
[05:30] another component is the new ground fog
[05:33] it follows the terrain up to a specified
[05:36] elevation for different locations it is
[05:39] also fully integrated into the
[05:42] atmosphere it receives volumetric
[05:44] Shadows from clouds and terrain it
[05:47] reduces the light scatter into the
[05:51] viewray and in this video we're showing
[05:56] all the features combined together
[06:01] in addition we made many improvements to
[06:03] Cloud shaping to allow for more
[06:06] variation and
[06:09] details the shape noise blending a
[06:12] vertical variation has been improved a
[06:24] [Applause]
[06:28] lot
[06:36] also we made improvements to short and
[06:39] long distance read and the tiling is
[06:41] less
[06:49] [Music]
[06:58] visible
[07:12] [Music]
[07:21] [Music]
[07:23] and
[07:25] and and best of all best of all we're
[07:29] going to include all these new features
[07:32] and improvements in the next 3.22
[07:35] release okay thank you thank
[07:42] [Applause]
[07:58] you hi everyone uh so I'm Mike Snowden
[08:01] I'm the director of visual effects and
[08:04] I'm Ali Brown the director of graphics
[08:06] and procedural
[08:10] Tech thank you very much really happy to
[08:13] be here really excited to show you uh
[08:15] we're going to be showing Dynamic Fire
[08:17] in Star
[08:25] engine so Dynamic Fire is a driver uh
[08:28] for gameplay both FPS and multi
[08:32] experiences it creates emergent sandbox
[08:35] gameplay and it can be used by designers
[08:36] to craft very dangerous scenarios for
[08:39] players and as you can see from the
[08:40] video it gets very
[08:49] intense okay so how do fire start in
[08:52] Star engine well there needs to be a
[08:54] source of ignition and there are
[08:56] multiple ways in which it can occur for
[08:58] example weapon impacts or misfires
[09:01] explosions or damaged items and the
[09:03] player needs to be alert to their
[09:05] surroundings with fire and every present
[09:07] threat if a fire does break out you're
[09:10] going to see it dynamically propagate
[09:12] through the area uh causing damage to
[09:14] environment and player and at this point
[09:16] the play needs to limit the damage of
[09:18] course by extinguishing the fire uh in
[09:21] any way that they can so when doing so
[09:23] they're going to need to wear protective
[09:24] clothing to protect them from extreme
[09:26] heat they're going to need to wear a
[09:28] closed helmet to protect them from smoke
[09:31] inhalation poor oxygen
[09:33] levels and there's actually multiple
[09:35] ways the fire can be extinguished
[09:37] including the removal of heat uh for
[09:40] example using the fire extinguisher
[09:42] which is my personal favorite it's a lot
[09:44] of fun doing
[09:45] that the removal of oxygen for example
[09:48] locking off the area vening the oxygen
[09:51] creating a
[09:52] vacuum or simply the fires burn so
[09:55] fiercely that it's it's done everything
[09:57] it needed to do it there's nothing left
[09:58] for it to destroyed and if you let it
[10:00] get this bad it's probably time to
[10:01] consider repairing your
[10:04] ship okay so how do we achieve this from
[10:07] the technical perspective the first
[10:08] thing the artists and designers do is
[10:10] they mark up their scene to tell us what
[10:11] physical properties that each surface is
[10:13] made from whether it's wood or metal but
[10:15] not only on the surface we have to
[10:17] describe what is behind the surface you
[10:19] might see a metal panel on your
[10:20] spaceship but is it got cladding or
[10:22] wiring behind it it's important we know
[10:23] all this so we know how flammable it is
[10:25] then after this we have to to find all
[10:27] the physical properties that go with
[10:28] these surfaces so for example what the
[10:31] mass is the energy density combustion
[10:33] temperature a fuel ratio and we use all
[10:35] these physical properties and we sum up
[10:37] in each voxal which is a 1 by 1 M Cube
[10:40] and then once we have these voxal this
[10:42] forms the basis of our
[10:44] simulation uh so then as we first thing
[10:46] we do is we look for sources of ignition
[10:48] and then wor so here's our debug mode
[10:51] that shows us what what was going on in
[10:53] the simulation is what we used to track
[10:55] it and you can see these squares
[10:57] enlarging to show us where the fire is
[10:58] spreading for each of these boxels we're
[11:00] tracking the fire the temperature fuel
[11:03] remaining the amount of smoke and the
[11:05] fire is propagating via convection and
[11:08] radiation which are both accurately
[11:09] simulated and it's consuming the gases
[11:11] and producing the knock on products as
[11:13] well as it goes and because we're using
[11:15] a proper simulation like Mike mentioned
[11:17] when you vent a room not only you
[11:19] removing the oxygen and putting the fire
[11:20] out but if the temperature Remains the
[11:22] Same if oxygen is reintroduced the fire
[11:24] will reignite and it'll continue burning
[11:26] just like it would in real life
[11:37] so what's next for this so our Focus has
[11:40] been on Interiors in particular
[11:42] spaceships but all interior spaces
[11:43] really and this box will grid really
[11:45] helps us solve that problem our next
[11:47] focus is going to be on planets
[11:48] obviously they represent a slightly
[11:49] different challenge the vastness of them
[11:51] we have to transfer this over the
[11:53] network and simulate it slightly
[11:54] differently uh and we also have to
[11:56] render it a scale but the the way we've
[11:58] done it the the the core Tech we've used
[12:00] we should be able to scale this up quite
[12:01] easily so that's that's going to be our
[12:02] next
[12:04] Focus okay so how do we create realistic
[12:06] Dynamic Fire visuals in Star engine well
[12:09] we start with the simulation as just
[12:11] described by Alli and this gives us the
[12:12] data we need to drive the
[12:17] visuals then we bring in the burn Shader
[12:20] so this can be applied to static
[12:21] environments and we have a lightweight
[12:23] version of the Shader for entities which
[12:24] is kind of based on the um the dirt
[12:27] Shader and wear then we've got the glow
[12:29] which is an animated surface decal
[12:30] Shader for static environments this is
[12:32] where we get start to bring in some nice
[12:36] motion and then we bring in the GPU
[12:38] particles which are spawning from voils
[12:39] and in screen space obviously these are
[12:41] doing a lot of the work
[12:45] visually then we bring in the lights
[12:48] these are spawned for clusters of voxal
[12:49] as opposed to per voxal as an
[12:51] optimization a cluster being a
[12:53] representation of oxil close to each
[12:56] other and then we bring in the fog so
[12:58] this is height laid volumetric fog the
[13:00] smoke fills the room and it goes up to
[13:01] the ceiling before filling the rest and
[13:03] we're simulating
[13:06] that so to finish we're going to take a
[13:09] look at all of that put together in the
[13:11] game thank
[13:27] you
[14:14] thanks very much everyone thank you
[14:15] thanks a
[14:15] [Applause]
[14:24] lot hello everyone I'm will Hae I'm here
[14:26] to talk about water in Star engine
[14:28] [Applause]
[14:33] so water is a huge part of both of our
[14:35] games Star Citizen Squadron for 2 and we
[14:37] wanted to give it a major upgrade we
[14:40] were going to set three ideas that we
[14:41] wanted to impart on our water we want it
[14:44] to look as good as possible obviously we
[14:45] want it to look realistic we want it to
[14:47] be beautiful we want it to be in motion
[14:50] constantly it should always be moving
[14:52] and always be reacting to everything
[14:53] around it whether that be players or
[14:55] objects or vehicles and we wanted this
[14:57] to work on the whole scales of all of
[15:00] Star Citizen all the way down from
[15:02] Footprints in puddles to enormous ships
[15:04] crashing into the ocean I'm going to
[15:07] talk about our updates to the water
[15:08] rendering first and then we'll move on
[15:10] to the other stuff I discussed so first
[15:12] of all the water shaders particularly
[15:14] the ocean and the river once were in
[15:16] dire need of a major upgrade they were
[15:18] currently using a technique called
[15:19] deferred shading which is really fast
[15:21] and fantastic for Opa objects but does
[15:24] not translate well for transparent ones
[15:26] which of course water is so the first
[15:28] step that we made was to transition to
[15:30] forward shading that allowed us to
[15:32] introduce more physically based
[15:33] techniques such as proper lighting
[15:35] reflection and refraction it in allowed
[15:38] us to integrate the atmosphere properly
[15:40] into our water lighting setup and it
[15:42] also meant that we could get more fun
[15:43] more fun techniques such as uh wave
[15:46] Crest backlight scattering as adding
[15:48] better foam rendering which includes
[15:50] half tone blending surf surface a and
[15:53] much more detailed bubbles on the
[15:54] individual bits of foam I've got some
[15:56] examples of that here in this particular
[15:58] screenshot you can see the icebergs in
[16:00] the near frame you can see we're
[16:01] refracting the iceberg underneath it's
[16:04] correctly refracted in the midf frame
[16:06] you can see that the iceberg is
[16:07] reflected back onto the water that is
[16:09] now accurate we weren't doing that
[16:10] properly before here you can see our
[16:12] accurate water lighting from this really
[16:14] beautiful screenshot of the Gladius over
[16:15] the water I love this one so this is the
[16:19] objects under the water have been
[16:20] correctly lit which is new and then we
[16:22] are applying the lighting changes from
[16:25] the um the specular highlights on the
[16:27] surface and also considering the
[16:28] lighting from the suspended particles in
[16:30] the water depending on how deep and
[16:32] dense the water is which gives us this
[16:33] really beautiful effect uh this
[16:35] screenshot just looks good but what he's
[16:37] going on is that is demonstrating that
[16:39] the atmosphere and the water are sorting
[16:41] properly this looks like everything is
[16:43] normal but it's challenging to implement
[16:44] with forward rendered water and uh
[16:47] proper Ray March clouds like we have in
[16:49] game props to Allan who worked on all of
[16:51] this I I did the the next bit uh and
[16:53] here we can see the wave crash light
[16:55] scattering see how the sun is coming
[16:56] across the back of those waves it's
[16:57] lighting up the the suspended particles
[16:59] in them it just looks gorgeous here we
[17:02] have the multi-layered foam and from a
[17:05] distance we have both surface foam and
[17:08] subsurface foam rendering correctly
[17:09] looking really really nice I've just got
[17:11] a video here before and after first of
[17:13] all uh this is our our Lakes on standing
[17:17] 4 uh next we have water volumes on
[17:21] oron there you go and this last demo
[17:24] this is a Cleo on the Stanton system
[17:26] this is what it currently looks like in
[17:27] game and I think you agree pretty
[17:29] dramatic
[17:32] difference so the next bit that I want
[17:34] to talk to you that me and U the team of
[17:36] Planet Tech and Graphics have been
[17:37] working on is of course water surface
[17:39] simulation this has been absolute
[17:41] pleasure to work on so we had a few aims
[17:43] for this we wanted it to be multi-input
[17:45] we want physics to influence this we
[17:46] want our mfx system to influence this we
[17:49] want bullets we want everything we want
[17:51] High concurrency you guys it's a Sandbox
[17:53] game you're going to break it you're
[17:54] going to stick a thousand P thousand
[17:56] Picos in our puddles it's got to work
[17:58] and it's got to be scalable it's got to
[18:00] work from the tiny scales to the
[18:01] footprints in the puddles all the way up
[18:03] to as I said giant crashes giant ships
[18:06] crashing into the ocean so the technique
[18:08] that we chose for this is a form of
[18:10] surface wave propagation it's GPU based
[18:12] it's highly realistic at a low cost and
[18:14] it can be scale for ways of different
[18:15] amplitudes so we can have all of that
[18:16] built right in just by adjusting a few
[18:18] constants I've got a demonstration here
[18:20] we're going to have the player walking
[18:21] through the puddle as you can see as he
[18:24] steps you get a bigger Ripple but even
[18:26] as he's stepping the toe is being
[18:27] dragged through the water and moving the
[18:29] water accurately this is not a copout
[18:31] we're doing this in 3D you see as I'm
[18:33] jumping and then this next demo we're
[18:35] going to fire some some bullets this is
[18:37] a bit loud this
[18:44] one right the one more thing that we had
[18:46] to look at so it's all well and good
[18:48] this working on a puddle but Star
[18:49] Citizen is not made of Puddles it's made
[18:51] of oceanic planets it's made of
[18:53] everything we needed to make this
[18:54] multisale so we yeah we wanted the water
[18:57] near and far not just in a square around
[18:59] the camera we wanted lots and lots at
[19:01] once the solution we picked was a multi-
[19:04] region water Sim now this was really
[19:05] really tricky to get right but I really
[19:07] think we have now which basically means
[19:09] that we can dynamically allocate all of
[19:10] the simulation regions depending on what
[19:11] is colliding where and what resolution
[19:13] we need at what parts of the screen we
[19:15] can optimize this very heavily to make
[19:17] sure that you get what you want to see
[19:19] at the right time we still need to get
[19:21] that information onto the water though
[19:23] and that's a bit trickier so what we
[19:25] devised is yet another of regions now
[19:29] the regions are slightly different the
[19:30] simulation regions need to happen
[19:32] wherever something is contact in the
[19:33] water and that needs to happen
[19:34] regardless as to whether you can see it
[19:36] because there's a collision going on
[19:37] there I look away and then I look back
[19:39] if it stops going and has to restart
[19:41] that looks bad whereas the water we only
[19:43] need to know the total result when it's
[19:45] actually in view so we have these new
[19:47] regions which cover all water in View
[19:49] and the beauty of this is that we can
[19:50] use this for multi-input and multi-
[19:52] output systems anything can influence
[19:54] our water whether it be the simulation
[19:55] whether it be weather whether it be VFX
[19:58] and and then anything can be affected by
[20:00] water now so the water rendering reads
[20:01] from this but then we can also spawn VFX
[20:03] particles from wave crests we can add
[20:05] screen space effects we can have a line
[20:07] across your visor we don't have this yet
[20:08] but it's accurate to the displaced water
[20:11] in front of you we've got this
[20:13] technology now so we can use it to
[20:14] influence any of our work going forward
[20:16] and here's a really good video of some
[20:18] of it in action just I'll let that play
[20:20] this is a debug mode essentially we're
[20:21] moving a sphere of basically infinite
[20:23] Mass through the water and as you see if
[20:26] we pan out a bit we'll make our sphere a
[20:27] bit bigger we get a much different
[20:29] result from the Sim spawning the phone
[20:32] properly it looks really nice really
[20:34] happy with this
[20:38] one so what I'm going to do in a second
[20:40] is I'm going to turn on the the debug
[20:42] mode so you can see where the regions
[20:43] are you see we've got these gray boxes
[20:45] they light up green when there is a hit
[20:46] Inside the Box we've also got different
[20:48] sizes going on if you look near the
[20:50] shore there there's a big cluster of
[20:51] text that is a whole bunch of other
[20:53] regions because there's some stuff
[20:54] floating there causing little ripples
[20:55] that we can't actually see and as you
[20:57] see these SC scale properly we can add
[20:59] the results from multiple sizes of
[21:01] simulation together and they influence
[21:03] and interact with one another accurately
[21:05] you see those big waves crashing over
[21:06] the Little Sim
[21:08] there yeah it it works pretty
[21:11] nicely I've gone ahead of my subtitles
[21:14] but I'll just let that video play
[21:18] out so what does that look like when we
[21:22] bring it all together what's it going to
[21:23] look like in game now you did see a
[21:24] little bit of this in the star engine
[21:25] trailer but actually I think this video
[21:28] does a little bit more Justice to it so
[21:29] I'm just going to let that play out for
[21:33] [Music]
[21:49] you forward in a second you're going to
[21:51] see the Wake start to happen behind us
[21:54] there and from the cockpit
[21:57] perspective water droplets on the glass
[21:59] thrown up from the water Sim this is
[22:01] what I'm talking about using multi
[22:06] [Applause]
[22:12] [Music]
[22:16] output and that's us thank you so much
[22:18] siton handing back over to
[22:26] Ali
[22:28] [Applause]
[22:29] [Music]
[22:31] hello
[22:32] again so here here to talk to you today
[22:36] about a few of the graphical things
[22:37] we've got coming in I'm really proud of
[22:40] the work we've done on the fire and the
[22:41] water they both look amazing features
[22:44] I'm going to talk to you about a few a
[22:45] few smaller features and a few longer
[22:47] term R&D features we're coming in on the
[22:49] visual side this first one something we
[22:51] wanted for cinematics and telling a
[22:53] story but also to tie into our active
[22:55] feature system but just to get their a
[22:57] face to sell a little a little bit more
[22:58] story on our characters so this Blood
[23:00] Sweat and tear system is something we
[23:02] implemented recently and it allows us to
[23:04] use a GPU particle simulation which we
[23:06] project onto the face and we integrate
[23:09] it into the skin Shader so we can get
[23:10] realistic reflection and refraction of
[23:12] water on your face and we even uh make
[23:14] the skin go a little bit redder to
[23:16] simulate the extra blood flow when
[23:17] you're tired or
[23:24] upset so none of this is a pre-and
[23:27] animation is completely Dynamic we have
[23:29] complete control over everything we can
[23:31] key frame every single tier if we want
[23:32] to and we can even simulate blood like
[23:42] here so next thing I want to talk about
[23:44] is our scope Shader uh design came to me
[23:46] telling me that they really wanted to up
[23:48] up the game with the rifle scopes they
[23:50] weren't quite good enough they didn't
[23:52] really feel realistic for them and they
[23:54] thought it was a real core part of the
[23:56] uh first person shoo experience so to
[23:58] give you an idea of what we used to do
[23:59] we have these type of used to use these
[24:01] type of fake scope meshes which you see
[24:03] here which is where we type of slic the
[24:05] scope in half so you can see through it
[24:07] and sometimes you put these big black
[24:08] planes around them to obscure your
[24:09] vision and do we put a bit of Glass on
[24:12] the front of it but there was nothing
[24:13] really to tell you that it was a lens so
[24:16] we've worked on a new scope Shader which
[24:17] is now going to be on all of our Scopes
[24:19] moving forwards and I'll give you a
[24:21] quick show of what that looks like in
[24:23] game so on the first scope here we're
[24:26] going to see it's got a infite projected
[24:28] Red Dot scope uh site we've got lens
[24:31] distortions you can see this little
[24:32] refraction and bending of light on
[24:34] it I you see it works when you you don't
[24:37] have to be actually holding the rifle
[24:38] for it to
[24:41] work we've got a correct emulation of
[24:45] eye relief on the scope so we have the
[24:47] blur distortions chromatic
[24:49] aberation and then we also got sport for
[24:52] digital displays like this one which has
[24:54] light amplification and has a sport for
[24:56] emps you know you know if you get an EMP
[24:58] you're going to have the the the slay is
[25:00] going to get started so we're quite
[25:02] proud of this we think it's going to
[25:03] have a much better more realistic uh
[25:04] simulation of the Scopes in the game and
[25:07] I think I've kind of mentioned before
[25:08] but it's it's not a fake effect it it
[25:10] applies to our Scopes no matter where
[25:12] they are you don't have to be using the
[25:14] scope you could look down somebody
[25:15] else's scope and see the same thing it's
[25:16] fully integrated into it so it's really
[25:18] quite proud of
[25:24] that next feature I want to talk about
[25:27] hopefully if any of you have a HDR
[25:28] Monitor and you've been playing 320
[25:30] hopefully you've given a go of the HDR
[25:32] feature we're really proud of this it
[25:34] looks really good and we've got some
[25:35] great feedback from you guys as well
[25:37] there's been some uh strong feedback
[25:38] about we want extra Black Level controls
[25:40] so we're going be adding that for you so
[25:42] make sure you can tweak the image
[25:43] exactly how you want uh and there's a
[25:45] great user guide on Spectrum as well if
[25:46] you want to know how to get the best out
[25:47] of it because it's not always a
[25:48] straightforward Tech to get the best out
[25:50] of um just to give you an Insight of how
[25:52] this works um we've got something called
[25:54] unified tone mapping curve and this is
[25:56] the process where we map the real life
[25:58] colors of uh real real life intensities
[26:00] of light onto what your monitor can
[26:02] display and rather than having an SDR
[26:04] mode and HDR mode we have like a
[26:06] smoothly uh smooth system where we can
[26:08] blend between SDR and HDR depending on
[26:11] the peak brightness of your monitor we
[26:13] also pay a lot attention to make sure we
[26:14] preserve the colors and the Hues to keep
[26:16] an accurate image for the artist and
[26:18] especially for skin tones we don't want
[26:19] them turning red or white or doing
[26:20] everything bizarre um just one thing to
[26:23] mention we've got some content
[26:24] adjustments that will be ongoing we've
[26:25] got a lot of content in Star Citizen
[26:27] takes a little bit of time to make sure
[26:28] we balance everything so it doesn't look
[26:29] too dim or look like a
[26:32] supernova next we want to mention
[26:34] temporal upscaling this has been
[26:35] something's been asked for for a long
[26:36] time we're proud to finally get it into
[26:38] your hands we've got three different
[26:40] techniques we're going to be
[26:41] implementing uh we've got CS uh we've
[26:44] got our own Temple super resolution
[26:46] solution called TSR we've got AMD
[26:48] Fidelity effect super resolution 2 and
[26:50] we've got Nvidia DSS2 as well um the
[26:54] each have different characteristics and
[26:55] Hardware requirements and tradeoffs so
[26:57] we put p is important to get you all
[26:58] free so you could have a choice of what
[27:00] you want to look on left here got a zoom
[27:04] in from one of our outposts that's no
[27:05] anti- aing for people that really love
[27:07] to see Jagged edges uh the center one is
[27:09] our TSA which is what you've got in the
[27:11] current release today and on the right
[27:13] hand side is TSR without doing upscaling
[27:16] and this is going to be replaced in the
[27:17] TSA solution and this gives us better
[27:19] quality and more stable image and
[27:20] hopefully much less ghting we can use
[27:23] our TSR to do upscaling here's the
[27:25] example of how it looks at each
[27:26] resolution
[27:28] and similar results from amd's
[27:30] FSR and some numbers here which I'm sure
[27:33] you can p over later but basically we
[27:35] can get about two times GPU performance
[27:37] if you're interested in using the
[27:38] upscaling
[27:39] technique obviously if your CPU limited
[27:41] you man I get quite them numbers it
[27:42] depends on your machine uh we also
[27:44] intend to look at frame generation
[27:46] techniques like FSR 3 and dss3 but these
[27:49] are going to come a bit later we're
[27:50] going to focus on GPU performance
[27:51] getting that up first frame generation
[27:53] isn't really applicable unless you got a
[27:54] really good performance
[27:56] first some other Qui quick updates we've
[27:58] got the screen space Shadows is added to
[28:00] Alpha 320 uh gives us some extra detail
[28:02] in our shadows across characters and
[28:04] it's particularly on planets it helps a
[28:06] lot and we've also got a new texture and
[28:08] mesh uh streaming engine that helps us
[28:11] get as much possible detail as we can
[28:13] onto your vran on your GPU and it type
[28:15] of does something we call load balancing
[28:17] it will scale dynamically for your GPU
[28:19] to make sure we can get the absolute
[28:21] best possible results uh We've also got
[28:23] some more streaming improvements coming
[28:25] in the next release just to give you a
[28:27] quick show of what the screen space
[28:28] Shadows mean here we've got a planet
[28:30] with no Shadows I it's micr uh the
[28:33] shadow Maps you see these the normal
[28:34] Shadow maps that fill in half the scene
[28:36] but then when we get the screen space
[28:37] Shadows you look in the top of the
[28:39] screen or in the uh the flowers they
[28:41] have of fill in the detail for the rest
[28:42] they really help type of bed the scene
[28:44] in and stop these things looking and
[28:52] floating next up just want to talk about
[28:55] planets for a little bit uh something I
[28:56] get asked about a lot of what's
[28:57] Happening next with planets so we've got
[28:59] quite a lot of R&D in progress first
[29:01] thing we've got two new uh pie of tech
[29:03] being started recently first is virtual
[29:05] terrain texturing uh it's quite a
[29:07] technical detail but what this means for
[29:09] you is we're hopefully going to get much
[29:11] less popping or no popping at all and
[29:13] we're going to achieve this by moving
[29:15] all the calculations to the GPU and
[29:17] we'll be reusing the same type of patch
[29:19] based system that we talked about in his
[29:21] water presentation and it should give
[29:23] you major CPU savings as well so we're
[29:24] quite looking forward to getting this in
[29:26] another benefit is that it's going to
[29:28] give us the ability to add more
[29:29] complicated Logic on so we can type of
[29:31] do more diverse and interesting terrain
[29:33] like things like you not we don't have
[29:34] beaches at the moment we'll be able to
[29:36] achieve that and there's other similar
[29:37] things where based on the local
[29:39] conditions we're able to do more
[29:40] advanced decision making next thing we
[29:42] want to look at which is probably the
[29:43] thing we asked about the most is our
[29:45] scattering system which is what
[29:46] responsible for putting all the trees
[29:47] and the Rocks down in the world um we're
[29:50] going to again move this to 100% of the
[29:52] GPU and that should let us have vastly
[29:54] longer draw distances uh right up until
[29:56] the Horizon and much better better
[29:57] performance uh so finally get rid of the
[29:59] dreaded pop of trees coming in for you
[30:02] um we also have to integrate it with our
[30:03] harvestable system the resource system
[30:05] and the the awesome fire system you just
[30:06] saw a minute ago um another point is
[30:09] it's going to be a hierarchical based
[30:10] system which what that means is we'll be
[30:12] able to use nearby vegetational rocks to
[30:15] influence what other vegetation rocks
[30:17] can grow or will show up and this lets
[30:19] us produce much more complicated rule
[30:21] sets so we can do things like have a
[30:23] tree that maybe underneath it it doesn't
[30:25] have any grass or maybe certain trees
[30:27] come together in clumps and we get much
[30:29] more natural distribution of
[30:33] vegetation and final thing we want for
[30:35] planets is we want to be able to build
[30:37] them much easier much faster and we want
[30:39] to make sure they are truly unique at
[30:41] the moment our planets are unique
[30:43] however they are built from type of tile
[30:45] sets like pre-built things that get
[30:47] mixed and matched together and Blended
[30:49] in complicated ways so you don't see the
[30:50] repetition but it's not truly unique not
[30:53] in the same way that the Grand Canyon
[30:54] might be or the River Nile or Mount
[30:56] Everest and that's that's what we want
[30:58] so to get that we need to replicate the
[31:01] complicated natural processes on earth
[31:03] like geology climate erosion and these
[31:05] things aren't trivial so we've got three
[31:07] options we've got offline tools Houdini
[31:09] teragen things like this we could
[31:11] simulate all these appr proces in the
[31:12] engine but we've started some R&D a few
[31:15] months ago on uh whether we can use
[31:17] machine learning to do some of this so
[31:19] just to give you a quick idea of how
[31:20] that would work or how it could work if
[31:22] you just start with some random input
[31:24] here it's just like some noise uh we run
[31:26] it for a tempor simulation temporary
[31:29] simulation so we can type of get a more
[31:31] uh reasonable uh approximation of
[31:33] simulation at different altitudes and
[31:34] latitudes on Earth um and then we what
[31:37] we do is we categorize all this into
[31:39] different biomes so basic on the
[31:41] temperature and moisture you'd find out
[31:42] what is a desert what is a forest and
[31:45] this this part is crucial so this is the
[31:47] input for our machine learning algorithm
[31:49] we could come up with this image any
[31:50] other way you could hand paint it as an
[31:51] artist or we could just randomize the
[31:53] noise to get a different set of images
[31:56] and then what we do is we take the large
[31:58] data sets we already have from Earth
[31:59] from Mars and from the Moon and we train
[32:02] it on exactly the same uh distribution
[32:04] uh so biomes so forests uh grasslands
[32:08] and things like this and by training it
[32:10] on exactly the type of data we get in
[32:12] reality we can take this and then push
[32:15] just that and then we can get these
[32:16] lovely height Maps out of it that tell
[32:18] us a really realistic distribution you
[32:20] can see here this is a height map so the
[32:21] black areas are low you can see all the
[32:23] little rivers and valleys and this had
[32:26] zero art input aside from this image
[32:28] which is very nice result um it's early
[32:31] days uh this is based on something
[32:33] called a custom diffusion Neal Network
[32:36] um it's like I said it's pre-trained on
[32:37] Earth data and it's been built up in
[32:39] patches so it just doesn't become too
[32:41] expensive to build and the little
[32:42] circular patches get like added together
[32:45] and they to avoid all any seams in the
[32:47] image and just to help you visualize it
[32:49] I've just put some colorization on it to
[32:51] show you where like snow and beaches
[32:52] might be and just wrapped around a
[32:53] planet to give you a better sense so it
[32:54] doesn't look quite so abstract yeah but
[32:57] this is very early days this stuff but
[32:58] we're hopeful this will be helping the
[33:00] future of how we build planets quickly
[33:02] and
[33:03] efficiently um thank
[33:10] you so the last thing I wanted to talk
[33:12] about today is our gen 12 renderer and
[33:15] Vulcan um this has been ongoing for
[33:17] quite some time taking a lot longer than
[33:19] we would have liked but we're finally
[33:20] getting to the end of this this long
[33:22] journey um for those who don't know the
[33:24] reason this was been implemented is
[33:26] largely for performance we're going to
[33:28] be getting at least two times better
[33:29] performance on our CPU submission for
[33:31] rendering which is often the bottleneck
[33:33] for the game so that will directly
[33:34] hopefully translate to performance
[33:36] improvements we also get better control
[33:38] of memory with Advanced GPU features
[33:40] like resizable bar and it also opens a
[33:42] door for some things like R tracing and
[33:44] new mesh shaders uh so we've got a video
[33:47] of Vulcan running to live captured so uh
[33:50] that I can't is this which ship is this
[33:52] but it's um yeah it's all working fine
[33:54] now there's a couple of hitches and
[33:55] performance so we can't quite release it
[33:57] yet but we looking into them uh the last
[34:00] few performance issues and stability
[34:01] issues and hopefully we'll releasing it
[34:04] soon so like I said the one thing or one
[34:07] of the things we really were interested
[34:08] in by implementing Vulcan was to get
[34:10] support for new hardware features and
[34:12] the one of the big ones was R Racing so
[34:15] with that I want to hand you over to Ben
[34:16] who's going to talk about some of our
[34:17] lighting
[34:20] [Applause]
[34:25] research
[34:26] [Applause]
[34:31] hi I'm Ben Perry and this is global
[34:40] illumination so as Ali just said um
[34:43] using moving over to the Vulcan renderer
[34:44] and now that that's fully online we've
[34:46] got access to Hardware Ray tracing on
[34:49] the gpus that have support for it and
[34:53] the best thing to do with Hardware R
[34:54] Racing would be to create a new updated
[34:57] Global illumination system for us to
[35:00] use now I'm here to give you a fairly
[35:02] early preview of the work that we've
[35:04] done so far uh but first off I'm just
[35:06] going to simplify some things and ask
[35:08] what is global
[35:10] illumination um well you can break the
[35:12] lighting in a game down to three
[35:14] components U first off youve got direct
[35:16] lighting that's not Global illumination
[35:18] but that's uh the sun lights in the
[35:20] level that kind of
[35:22] thing next up you've got diffused Global
[35:24] illumination now that's uh like a whole
[35:27] hemisphere like a soft lighting that
[35:28] affects the entire that takes from the
[35:30] entire scene and lights up the pixel and
[35:33] then finally you've got glossy GI and
[35:36] Reflections um that's like your shiny
[35:38] surface glints your mirror Reflections
[35:40] that kind of thing and now all of those
[35:42] combine together to form one glorious
[35:44] penguin
[35:53] now now for the rest of this
[35:54] presentation we're specifically talking
[35:56] about about this guy the diffus penguin
[35:59] um glossy GI has actually been disabled
[36:01] in all the videos even the old the old
[36:03] System videos don't show the gloss of GI
[36:05] here just to Aid the comparison uh first
[36:08] off we've got a video from Chris
[36:09] Campbell who's going to make us look
[36:15] [Music]
[36:21] [Music]
[36:25] cool
[36:27] [Music]
[36:35] [Music]
[37:46] [Applause]
[37:51] so next up the boring or the interesting
[37:53] bit um how are we doing it how does the
[37:55] tech work um I'm just going to dig into
[37:58] that just a little
[38:00] bit so we're closely based on amd's
[38:03] recent paper GI 1.0 we're probably going
[38:05] to build on top of that but at the
[38:06] moment we're quite close to it uh We R
[38:09] Trace against a simplified world so that
[38:11] we get um like smoother lighting for the
[38:14] since it's a diffuse scene we want a
[38:16] sort of diffuse smooth signal um this
[38:19] also means that we get more Rays per
[38:21] millisecond which is always
[38:24] good and we do generate a lot of probes
[38:26] so the new system is generating well for
[38:29] comparison the old probe was about one
[38:31] probe per room and the new system is
[38:33] about 25,000 probes that are all on
[38:36] screen at the same time and we're going
[38:38] to see that
[38:40] now so here's a scene that I've
[38:42] dramatized a little bit just to give
[38:44] trouble to the old lighting system and
[38:46] this is what the ray tracing sees so
[38:48] it's a simplified single color per
[38:50] object kind of
[38:52] thing but then we've also got this uh
[38:54] kind of a 3D dictionary of average light
[38:57] values so that the light is kind of
[38:59] shared over things in a similar
[39:10] area so going back to the scene uh this
[39:12] is the old system so you'd render a
[39:14] single image from the center of the room
[39:16] blur it and then slap it onto the entire
[39:18] scene now as you can see like the middle
[39:20] of the scene is about the right lighting
[39:22] but everything else has got the middle
[39:23] of the scene's lighting like these red
[39:25] lights at the sides the basically
[39:26] drowned out by the table bounce that
[39:29] somehow made it across the room to them
[39:31] so we want to replace that system with
[39:34] 25,000 probes each one of them only
[39:36] providing light to a small area around
[39:40] themselves and then we interpolate that
[39:42] to provide like a smooth bounce and you
[39:45] can see already in the distance like the
[39:47] red light is is really bouncing up there
[39:50] and then we add a screen space occlusion
[39:51] pass just to uh just to tidy up the
[39:53] edges on things and there is the final
[39:55] composite
[39:57] [Applause]
[40:05] so what else does it
[40:07] do well because it's it's realtime
[40:09] generation it means we can do a real
[40:11] time bounce and we can do that with
[40:13] quite small areas you can get like a
[40:14] really vibrant bounce that picks up off
[40:16] small objects in the
[40:19] scene and that means that the art team
[40:21] can really lean into like strong local
[40:23] variation on
[40:25] color as again we will
[40:28] see so we'll do a side by side
[40:30] comparison on this one as you can
[40:32] already see like the spotlights really
[40:33] like throwing stuff into the scene this
[40:35] is just one light in the
[40:37] room and we could actually we did have
[40:39] live updating as you can see in the old
[40:42] system but it's it was designed for like
[40:43] time of day changes rather than this
[40:45] continuous smooth
[40:47] View and finally it means that we can do
[40:49] things like glowing surfaces can just
[40:51] illuminate the world without having to
[40:53] add special lights to to fake
[40:55] it
[40:57] [Applause]
[41:04] so yeah there's two really common cases
[41:05] in sty cism particularly that this is
[41:07] going to help with first off cockpit
[41:09] brightness we capture at the moment
[41:15] the at the moment we capture that
[41:18] cockpit probe in a in a setup scene and
[41:20] then we don't update it as you're flying
[41:22] around so you're not going to get the
[41:23] sky color in and you're not going to get
[41:25] the ground color in and then we've got
[41:27] the opposite problem that I don't have a
[41:28] picture for this but cargo Bays
[41:30] sometimes they're light you land
[41:31] somewhere dark you open up the doors and
[41:33] now you've just got this weird little
[41:35] light room with uh with nothing spilling
[41:37] out of it so again let's have a
[41:42] video oh yeah so this is the old system
[41:44] the sun's working but you can see
[41:45] there's no Sky there's no ground
[41:47] lighting by the way I've turned off a
[41:48] lot of the cockpit lights so that you
[41:49] can see
[41:50] this and then in the new one you can
[41:52] already see the Skylight is kind of
[41:54] helping a little but then as you turn
[41:56] over you get all the ground
[42:03] lighting yeah there's
[42:06] more see one of the concerns we had was
[42:08] that we didn't want to create a two-tier
[42:10] system if people have got Hardware R
[42:12] tracing and it's working for them that's
[42:15] great but you can't really have the art
[42:18] team optimizing was for one type of
[42:20] lighting and then having to optimize it
[42:22] for another type of lighting and having
[42:23] to trade off decisions about the two of
[42:25] them so what we've been experimenting
[42:27] with is trying to create a new low bar
[42:29] that's higher than the old low bar as
[42:31] well as creating a new high bar and the
[42:33] idea for this is basically to take that
[42:35] single room um environment probe system
[42:38] that we have been using update it so
[42:40] that we can do live relighting on that
[42:42] and then to sort of slot that in where
[42:44] the ray tracing would be while still
[42:46] keeping all of the other stuff like you
[42:47] know the the 25,000 probes and all that
[42:49] kind of stuff can look at the old system
[42:52] and we kind of Frankenstein them
[42:53] together so I'll show you what we've got
[42:55] so far for this
[42:58] so this is just the old one and the new
[42:59] one so that you can see the problems
[43:01] like just it's it's overly lit let's be
[43:08] honest and now this is what star cism
[43:10] would have looked like if we released it
[43:11] on the PS1 um the Sharpe among you may
[43:15] have noticed also the ship is missing
[43:17] but you know we can't do Dynamic objects
[43:19] in
[43:20] this you'll be surprised it doesn't seem
[43:23] to
[43:25] mind
[43:27] and then we have software GI in the
[43:28] middle which is yeah like I say it was
[43:30] using the same 25,000 probe
[43:32] system but not having to use any kind of
[43:35] Hardware rate tracing as you can see
[43:37] it's not a perfect match it's not
[43:38] identical but it's a lot more Dynamic
[43:42] than the old
[43:47] system and
[43:52] [Applause]
[43:54] finally and finally I'm just going to
[43:56] show you a to-do list here I don't have
[43:57] pictures because it's stuff we've not
[43:59] done glossy Reflections obviously we
[44:02] want to complete the picture and for
[44:04] that we need to handle glossy
[44:05] Reflections
[44:07] uh that self-explanatory really I don't
[44:09] know what to say about
[44:11] that secondly you've only seen it on on
[44:13] opaque surfaces so far the next step is
[44:16] to extend this so that it can support
[44:18] glass and water and all the other
[44:20] transparent things in the game and
[44:22] beyond that we've obviously got fog
[44:24] we've got other atmospherics we want to
[44:26] expand GI to make sure that it affects
[44:28] everything smoothly and
[44:29] equally and the final thing is a star
[44:32] cism thing we've got giant scenes we've
[44:35] got a ridiculous scale on some things
[44:37] and we've got plans to make sure that
[44:38] this GI extends to handle that full
[44:42] scale anyway that's all I've got to tell
[44:44] you now I've been Ben Parry next up
[44:48] we've got stara with Chris
[44:50] [Applause]
[44:54] Rain
[45:02] hello
[45:04] everyone
[45:05] I
[45:09] hi I am Chris rain and I would like to
[45:11] show you not one not two but three new
[45:16] physics of our physics engine and I
[45:20] would like to start off by introducing
[45:22] star cloth our new character cloth
[45:25] simulation with the short
[45:31] video so this is just regular player
[45:34] movement that was actually me playing
[45:36] you can see the cloth collides with the
[45:43] ground you can see multiple layers of
[45:46] cloth that do not
[45:50] interpenetrate cloth gets influenced
[45:52] from
[45:54] wind and as accurate collisions with the
[45:57] player's
[46:15] body we now have support for collisions
[46:18] from Dynamic
[46:24] objects
[46:28] you can play football in any
[46:45] outfit star cloth supports the full
[46:48] range of motion a human can make from
[46:51] Fast
[46:52] movement to extreme poses
[47:05] [Applause]
[47:18] starcloth is designed to be a first
[47:20] class member of our physics engine it
[47:23] interacts with everything we have to
[47:25] offer from character movement over
[47:27] forces like wind Thruster backwash
[47:30] explosion to projectile impacts and
[47:33] collisions it's efficient it always
[47:36] updates at 120 FPS regardless of the
[47:39] frame rate and is hand optimized it's
[47:42] immersive and believable it's a
[47:45] realistic simulation based on physical
[47:47] properties it's High Fidelity high
[47:50] quality we want to raise the bar with
[47:54] this the visual geometry you see on the
[47:57] right is complex and not suitable for
[48:00] simulation the visual geometry is made
[48:03] with visual quality in mind and that
[48:05] does not translate well to simulation so
[48:08] we decided to add the ability to use
[48:11] bespoke meshes that are made to simulate
[48:15] well and let their movement then deform
[48:18] the visual
[48:19] geometry this allows us to share the
[48:22] same sim setup across multiple visual
[48:25] mes which is a huge productivity boost
[48:27] for Tech art we can seamlessly blend the
[48:31] simulation on and off so we can disable
[48:35] the simulation at a
[48:39] distance back to the
[48:41] football everything that is dynamically
[48:44] simulated is able to interact with the
[48:46] cloth from ships over crates boxes and
[48:50] even
[48:51] footballs we ensured that the collisions
[48:53] are accurate and believable
[48:56] as you can see in the image the football
[48:58] Parts both layers of the Gown the cloth
[49:01] itself supports self collisions which
[49:03] means it will create folds and wrinkles
[49:06] but not interpenetrate itself or other
[49:09] layers of
[49:11] cloth the same applies to the static
[49:13] environment as well the cloth will drape
[49:16] itself around the
[49:18] environment so brushing up against
[49:20] objects will will result in the behavior
[49:23] you expect
[49:27] we added tapered capsules to improve
[49:30] Collision detection accuracy a tapered
[49:33] capsule is a capsule which has two
[49:35] different radi at the end
[49:38] points human anatomy is complex and we
[49:41] need to accurately represent it for
[49:44] collisions the traditional capsules we
[49:47] use on our acts lead to jumps in the
[49:50] Collision surface now notice how there
[49:52] is a jump between the elbow and the
[49:55] lower arm and another jump where the
[49:58] forearm connects to the hands these
[50:01] jumps pose significant problems for our
[50:04] cloth simulation if you look at the
[50:06] upper torso you can see the Collision
[50:08] proxies are actually completely hiding
[50:11] the cloth and they're essentially
[50:13] completely
[50:15] useless so now notice the difference on
[50:19] the same body represented with tapered
[50:21] CL capsules we can now Faithfully
[50:24] represent the hips legs and arms of the
[50:28] character an additional benefit of
[50:31] tapered capsules is that the Collis
[50:33] detection is significantly faster than
[50:37] with regular capsules currently we're
[50:39] only using them for uh cloth Collision
[50:42] detection but in the end we'd like to
[50:45] use them for
[50:49] everything we simulate the cloth always
[50:52] at 120 FPS or 120 hertz regardless at
[50:56] which update rate the game is running at
[50:59] we do this to be Faithfully able to
[51:02] detect collisions with a fast-moving
[51:04] character as we're simulating at a
[51:06] higher rate than the game updates we
[51:09] have to interpolate the Joint positions
[51:12] between updates we get from the
[51:14] game at each simulation step we perform
[51:18] Collision detection simulation and
[51:21] update the Sim the cloth Sim cage now if
[51:25] the game is running at 120 FPS we do one
[51:29] update for the for the CLA simulation if
[51:32] the game updates at 60 FPS like in the
[51:35] image we simulate the cloth
[51:39] twice now if the game runs slower like
[51:42] at 30 FPS we need to update the cloth
[51:45] four times you can see this in the image
[51:48] it's it becomes apparent that we need to
[51:51] make the cloth run as fast as possible
[51:54] and we spent a great deal amount of time
[51:56] optimizing this with various techniques
[51:58] including handwritten vectorization and
[52:01] using every trick in the optimization
[52:03] handbook the effort pays off because we
[52:07] can Faithfully capture very complex
[52:09] movement and fast-moving characters even
[52:12] at low frame rates without any clipping
[52:15] or
[52:18] [Applause]
[52:21] tunneling thank
[52:24] you one area that poses a significant
[52:29] challenge for character cloth is when
[52:31] multiple pieces of garments layer on top
[52:34] of each other like a tight fitting
[52:36] jacket that lies on top of the pants as
[52:39] you can see in the image
[52:41] above this is a very difficult region to
[52:44] simulate properly because you don't have
[52:46] much space and the simulation collisions
[52:49] have to be absolutely accurate this what
[52:52] I'm going to show you is a very subtle
[52:55] effect but once you notice it you cannot
[52:58] stop noticing
[53:01] it I want to focus your attention to the
[53:04] waste region of the character here we
[53:06] tweak the simulation settings in real
[53:09] time to see the
[53:15] effect here you see a a rendering with a
[53:20] high fidelity cloth
[53:24] disabled
[53:26] and here the same scene with it
[53:32] [Applause]
[53:42] enabled to be
[53:44] continued
[53:46] tomorrow uh much more can be seen about
[53:50] star cloth in the character advancement
[53:52] panel be sure not to miss out
[53:56] [Applause]
[54:01] so next up Star
[54:07] Hair currently we have the ability to
[54:10] simulate the effect of moving hair with
[54:12] joints that are essentially simulated
[54:16] pendulums the hair is skinned to these
[54:19] joints and when the these joints move
[54:22] due to the pendulum simulation the hair
[54:24] moves with it this leads to a fast and
[54:27] believable movement of hair however the
[54:30] quality is directly correlated to the
[54:33] quality of the skinning which is tedious
[54:36] for Tech art to achieve for some complex
[54:39] hairstyles further apart from Gravity
[54:42] the pendulum joints do not react to
[54:45] external forces like collisions or wind
[54:48] or explosions so we asked ourselves can
[54:52] we somehow improve upon this and I'd
[54:55] like to show you some early prototype
[54:57] results of our
[55:00] research this is an image of the raw
[55:04] geometry you saw in the previous image
[55:07] you can see many strands of hair and we
[55:09] thought to ourselves maybe we can
[55:12] simulate all of these
[55:15] strands this is a single strand isolated
[55:18] from the rest as these are simple
[55:20] triangle measures we initially thought
[55:23] we could simply use our cloth
[55:26] simulation and simulate such a strand
[55:29] like a sheet of cloth that didn't work
[55:32] out at all it turns out hair does not
[55:34] behave like
[55:37] clothing also the sheer number of
[55:40] strands and their individual triangles
[55:42] and vertices are simply too much to
[55:44] simulate efficiently even for our highly
[55:47] optimized cloth
[55:50] engine we realized then that our artists
[55:53] are actually using splines
[55:55] to create these transs and a spline is a
[55:59] smooth curve or line through space you
[56:03] could see that in yellow um and we
[56:05] thought maybe we can just simulate these
[56:08] they they're much
[56:09] simpler so and hair simulations need to
[56:13] be able to maintain the original
[56:15] hairstyle you cannot have the hair
[56:18] simulation change the visual appearance
[56:21] of a character one of the reasons we're
[56:24] using the CL simulation for hair did not
[56:26] work out as at all is that the cloth
[56:29] only simulates vertices and they have no
[56:32] concept of orientation so you do not
[56:35] know how the next segment has bent in
[56:38] relation to your current segment in
[56:41] other words you cannot easily simulate
[56:44] twist with vertices alone for splines
[56:48] however that is very easy to
[56:51] do
[56:53] so all of this together allows us to
[56:56] simulate the strands according to the
[56:59] theory of kerat rods a cerat rod allows
[57:03] you to model the behavior of Slender
[57:06] onedimensional rods exactly what our
[57:09] splines are and simulate Bend twist
[57:12] stretch and Shear exactly what we
[57:16] need hair also needs exact Collision
[57:19] detection to not intersect with the head
[57:22] the ears the cheeks the jaw
[57:28] region the video I'm about to show you
[57:32] is some very early prototype footage of
[57:35] how such a simulation actually looks
[57:51] like so this is a test of various head
[57:55] movements to see how the hair reacts
[57:58] hair simulation is one of the hardest
[58:00] things to special uh to simulate
[58:02] especially in a real-time context and
[58:05] very tricky to get
[58:08] right we're actually simulating all the
[58:11] hair
[58:14] [Applause]
[58:20] strands so we will have characters being
[58:24] able to to run their hands through their
[58:26] hair and have the hair react
[58:31] realistically a barber simulation
[58:41] next actually being a bold man this
[58:46] was very touching moment for me when I
[58:49] made this
[58:53] video thank you thank
[59:05] [Applause]
[59:12] you next I would like to introduce
[59:15] melstrom our physically based
[59:17] destruction
[59:22] system and I would like to do that with
[59:25] a video that I believe speaks for
[59:36] [Applause]
[59:47] [Applause]
[59:53] itself
[59:58] [Applause]
[1:00:07] see the water
[1:00:09] [Applause]
[1:00:17] [Applause]
[1:00:22] splashes we want players intuitive
[1:00:25] prediction of the effect a weapon or a
[1:00:29] collision has to actually happen in the
[1:00:33] engine or in the
[1:00:34] game so we decided to move away from hit
[1:00:38] point pools or other abstract models to
[1:00:41] simulate damage but rather have damage
[1:00:44] be calculated from a physical model and
[1:00:47] from the physical material properties of
[1:00:50] each
[1:00:51] entity if something breaks off due to
[1:00:54] its structural Integrity decreasing be
[1:00:57] below a certain threshold melstrom
[1:01:00] allows it to break off in a realistic
[1:01:02] fashion if you shoot off a wing the
[1:01:05] missiles and weapons on that Wing should
[1:01:07] still remain
[1:01:08] attached if the broken off part still
[1:01:11] has power electric items should still
[1:01:14] function this means melstrom was needed
[1:01:17] to be designed to work with a
[1:01:18] hierarchical setup to begin with from
[1:01:21] the hierarchical representation of the
[1:01:23] geometry we want to break off to the
[1:01:25] same hierarchy on a higher level item
[1:01:29] for items like power plants lights
[1:01:32] weapon systems and so
[1:01:34] on Maelstrom is persistent and
[1:01:38] networking ready we designed it from the
[1:01:41] ground up to work with high latency
[1:01:45] situations to persist and replicate
[1:01:53] easily
[1:01:56] [Applause]
[1:01:58] to achieve all this we gave each
[1:02:00] physical geometry instance and then
[1:02:03] identifier to be able to uniquely
[1:02:05] identify it within the
[1:02:07] universe so your Gladius Wing is your
[1:02:11] Gladius
[1:02:13] Wing we added physical material and
[1:02:17] damage properties that can now be
[1:02:19] replicated across the the network one of
[1:02:22] them and that's the most important one
[1:02:24] we call
[1:02:25] Integrity and this determines how much
[1:02:28] structural or internal Integrity a
[1:02:31] physical geometry has Integrity is
[1:02:34] modified from dissipating or rather
[1:02:37] absorbing energy from kinetic impacts or
[1:02:40] energy weapons and also in the future
[1:02:43] from absorbing energy from external
[1:02:46] factors like extreme temperature or fire
[1:02:48] as you've seen
[1:02:52] before we also track which physical part
[1:02:56] or geometry the uh belongs to which
[1:03:00] visual geometry and which high level
[1:03:03] entity so if the structural or inter
[1:03:06] internal Integrity
[1:03:08] collapses we know which visual geometry
[1:03:11] is affected and which item might be
[1:03:14] affected as well so a power plant will
[1:03:16] seize to emit power or implode explode a
[1:03:20] weapon will seize to Fire and so
[1:03:23] on
[1:03:25] to make things break apart we create
[1:03:28] what we call breakable clusters a
[1:03:31] breakable cluster is a set of physical
[1:03:34] geometry the visual geometry and the
[1:03:37] entities on top that can break
[1:03:40] off between breakable clusters we create
[1:03:43] abstract canti lever beams to be able to
[1:03:46] model stress and strain I'll go into
[1:03:48] more detail in that in a
[1:03:51] bit breakable clusters are hierarchical
[1:03:55] they mirror the hierarchy of all
[1:03:57] attached entities involved they also
[1:04:00] embed the hierarchy of all animated
[1:04:03] joints and they also embed the hierarchy
[1:04:05] of all physical geometries they
[1:04:08] essentially represent a ground truth of
[1:04:11] the entire hierarchy necessary to
[1:04:13] perform all our goals for
[1:04:15] mstom this
[1:04:17] image is showing a breakable cluster
[1:04:21] graph of the
[1:04:23] Gladius
[1:04:26] I'd like to show one more video of
[1:04:28] melstrom before we
[1:04:47] [Applause]
[1:04:53] continue
[1:05:00] we needed to find a good way to easily
[1:05:02] and efficiently determine when a
[1:05:04] breakable cluster breaks we chose a
[1:05:06] wellestablished model from Material
[1:05:09] Sciences and Structural Engineering
[1:05:11] canver
[1:05:13] beams in essence a canver beam a canver
[1:05:17] is a structural member that has a fixed
[1:05:19] support and a free end forces experience
[1:05:24] on the free end can be used to calculate
[1:05:26] the amount of stress the fixed support
[1:05:29] is
[1:05:30] enduring the basic be ideas behind that
[1:05:34] are best explained from a very simple
[1:05:36] example if a ship were to collide with
[1:05:40] the horizontal part of the crane in the
[1:05:42] image far from the vertical part the
[1:05:46] fixed support would endure a higher
[1:05:49] stress as if the ship were to collide
[1:05:51] closer to the vertical part
[1:05:56] but not only does the point of in Impact
[1:06:00] determine how much stress the cter lever
[1:06:03] beam experiences also how large the
[1:06:06] surface area is but uh connecting the
[1:06:10] Canter lever and the fixed support has a
[1:06:13] large influence on when a Canter lever
[1:06:16] beam will break in our case this
[1:06:18] actually means we analyze the
[1:06:21] crosssection of the intersection of the
[1:06:23] set of geometry from two breakable
[1:06:25] clusters to calculate the surface area a
[1:06:29] wing attached to the body has a rather
[1:06:32] large connecting surface area compared
[1:06:35] to the surface area calculated for the
[1:06:37] stabilizers connected to the
[1:06:42] body we then project forces from impacts
[1:06:46] and explosions onto these caner lever
[1:06:49] beams and calculate the stress the beams
[1:06:52] experience over time this stress turns
[1:06:55] into strain and if we reach a certain
[1:06:57] threshold the beam snaps the results
[1:07:01] simple efficient and deterministic
[1:07:05] breakability but this is not just about
[1:07:07] ships and buildings that you saw in the
[1:07:10] videos before we want melstrom to be a
[1:07:13] systemic system that we can use on all
[1:07:16] types of entities so here is some video
[1:07:19] of some test footage of AI shooting each
[1:07:22] other behind breakable CL cover and
[1:07:25] mastr
[1:07:52] barrels
[1:07:58] [Applause]
[1:08:05] physical material properties influence
[1:08:08] damage and breaking and have a direct
[1:08:10] influence to how things break and
[1:08:13] Fracture to achieve this we added
[1:08:16] various
[1:08:17] properties
[1:08:19] density yield strength resilience
[1:08:25] thickness
[1:08:26] toughness Young's modulus and this is
[1:08:30] more or less what I wanted to talk about
[1:08:32] Maelstrom but I don't want to leave
[1:08:35] without showing one more video of what
[1:08:37] Carnage melstrom can Co can
[1:08:52] create
[1:09:02] [Applause]
[1:09:10] so so thank you very much and with that
[1:09:14] I'd like to hand over to
[1:09:17] [Applause]
[1:09:22] benois Great thank
[1:09:26] all
[1:09:27] right I am not this person but I'm
[1:09:30] filling him with him so so far I mean
[1:09:34] you guys think this is going to change
[1:09:35] your game up to now all these new
[1:09:37] features hell
[1:09:40] yeah Okay so we've seen updates from
[1:09:44] fire water we've just seen Force we've
[1:09:48] seen Sun and light so the next thing
[1:09:50] that's left to build a ludicrous space
[1:09:52] game is audio and so I'll leave you at
[1:09:56] Graham who's going to show you some of
[1:09:57] the new audio enhancements we bring to
[1:10:00] Star engine to make it even more
[1:10:01] realistic than it is
[1:10:03] now hi citizen con gr I'm here good to
[1:10:06] see you recently in the audio team we've
[1:10:09] been looking at how we can create a
[1:10:11] greater psychological connection and
[1:10:12] emotional impact within our games
[1:10:14] through the use of improved audio
[1:10:16] technology audio can play a crucial role
[1:10:19] in the immersion of the player and with
[1:10:21] that in mind the audio code and
[1:10:23] Technical sound design teams have been
[1:10:25] looking at all of our Tech from the
[1:10:26] ground up for example when you're under
[1:10:29] threat you should feel a real sense of
[1:10:31] danger when you're armed you should feel
[1:10:33] the dangerous power that you hold within
[1:10:35] your hands earlier this year we showed
[1:10:38] you our resonance Tech which allows us
[1:10:40] to bring the action much closer to the
[1:10:42] player even when they're deep in the
[1:10:43] bowels of a ship and far away from where
[1:10:45] all the hits and the explosions are
[1:10:47] happening but that's just one part of a
[1:10:49] much larger push to create a better more
[1:10:51] immersive audio experience
[1:10:54] with that in mind let's take a look at
[1:10:55] some of the tech we've been working on
[1:10:58] first let's listen to some of our weapon
[1:11:00] sounds in
[1:11:15] action they're a great simulation but we
[1:11:18] wanted to take them further and express
[1:11:20] the sound pressure the forces being
[1:11:22] exerted our new in-house audio effects
[1:11:25] particularly the multiband compressor
[1:11:27] tuned by our sound designers give us
[1:11:29] this
[1:11:35] result the compression serves to
[1:11:37] illustrate the power of the weapons and
[1:11:39] the effect that they have when going
[1:11:40] beyond the limits of The
[1:11:46] Listener let's show you the same audio
[1:11:48] effects applied to the ship weapons
[1:11:50] taking us from
[1:11:52] this
[1:12:00] to
[1:12:12] this but it's not just about feeling
[1:12:15] powerful changes in audio can create a
[1:12:17] sense of danger of being out on your own
[1:12:19] and under threat here's an example of
[1:12:22] ship combat
[1:12:29] [Music]
[1:12:31] sounds good but what if we wanted a
[1:12:33] little more
[1:12:44] [Music]
[1:12:52] realism
[1:12:54] the audio propagation Tech that we've
[1:12:55] been rolling out makes it easier to
[1:12:57] change the soundscape in real time and a
[1:12:59] nice use of that technology is to
[1:13:01] provide a more realistic
[1:13:06] option here your own weapons resonate
[1:13:09] through the hull of the ship only what's
[1:13:11] in the pressurized cockpit is heard
[1:13:12] clearly and the Threat Level feels
[1:13:14] higher due to the isolating lack of
[1:13:16] enemy weapon and ship
[1:13:22] audio
[1:13:27] making these changes creates space in
[1:13:29] the audio both spectrally and temporally
[1:13:32] making impacts seem bigger more damaging
[1:13:34] more of a problem for the
[1:13:39] player this realistic mode isn't limited
[1:13:42] to the flight experience it's applied
[1:13:44] appropriately to the game as a whole
[1:13:46] here's an FPS battle in a depressurized
[1:13:50] [Music]
[1:13:52] area
[1:13:54] [Music]
[1:14:02] with realistic mode we get that sense of
[1:14:05] isolation again giving the location a
[1:14:07] different color and adding variety to
[1:14:09] the audio
[1:14:10] [Music]
[1:14:17] experience player breathing and folley
[1:14:19] are exaggerated and other sounds are
[1:14:21] transmitted through physical contact
[1:14:36] [Music]
[1:14:39] that's all from us for now we look
[1:14:41] forward to getting these new audio
[1:14:42] features into your
[1:14:46] [Music]
[1:14:52] hands
[1:14:59] all
[1:15:00] right hello
[1:15:04] everyone
[1:15:06] so persistent entity streaming
[1:15:08] replication layer and beyond my name is
[1:15:11] Paul reindel I'm director for online
[1:15:14] technology and I'm going to show you a
[1:15:17] little bit Insight in our technology for
[1:15:20] pist entity streaming and the
[1:15:21] replication layer
[1:15:24] I thought about what's the best way to
[1:15:26] show you something about that Tech and I
[1:15:29] thought about putting some technical
[1:15:32] drawings on this on the slides or maybe
[1:15:34] show video like we did two years ago but
[1:15:38] really the best way to show you how
[1:15:41] persistent entity streaming works is to
[1:15:44] give you a life demonstration and that's
[1:15:46] what I'm going to
[1:15:47] do all
[1:15:49] [Applause]
[1:15:52] right
[1:15:54] so this will all be live so please bear
[1:15:56] with me if there's any glitches
[1:16:03] um so let's keep this rolling uh I think
[1:16:07] I'm supposed to press the button no it's
[1:16:09] already
[1:16:11] switched um before we start a little bit
[1:16:14] um I just give you a little bit an
[1:16:17] overview what you see
[1:16:18] here um let me set up
[1:16:22] everything
[1:16:34] uh one moment sorry so on this left side
[1:16:38] you will see my client window and on the
[1:16:41] bottom side uh you will see the server
[1:16:44] render so for this
[1:16:46] demonstration and I start a second
[1:16:48] client I'm
[1:16:50] just stopping that sorry about that
[1:16:56] that this is live all right so again on
[1:17:00] this s you see the
[1:17:03] client and he just locked out because I
[1:17:05] started a second client so let's do this
[1:17:08] again one more
[1:17:12] time on this side you see the server
[1:17:14] rendra which is currently uh it has
[1:17:16] nothing streamed in I'm showing a small
[1:17:19] uh demonstration
[1:17:21] level and on this side see the entity
[1:17:23] graph which is our online database um
[1:17:27] that's powering what you see in persist
[1:17:29] entity streaming what you play in
[1:17:32] 3.18 and I also have some metrics on the
[1:17:34] screen um which shows the entity graph
[1:17:37] uh worker the requests per minutes uh
[1:17:40] per seconds the mutations and you also
[1:17:43] will see entities created and destroyed
[1:17:45] once I do
[1:17:47] that all right so
[1:17:50] let's wait for my client to come up and
[1:17:52] uh join this
[1:17:57] level so the first thing that will
[1:17:59] happen when I join this level you will
[1:18:01] see on that server everything streams
[1:18:03] in and my client get connected and also
[1:18:07] streams in everything on the client view
[1:18:10] um what would happened on this on the
[1:18:12] behind the scenes is that my player just
[1:18:15] got unstowed into that chart and we had
[1:18:17] Real Time created everything for this
[1:18:19] player so you will see his body is
[1:18:22] attached to the player you will see his
[1:18:25] Mobi glass his head with all his
[1:18:29] customizations um his undersuit and then
[1:18:32] all his uh customizations as well on the
[1:18:34] UND
[1:18:35] suit um what you also see is that this
[1:18:38] player just got unstowed and attached to
[1:18:41] an static Zone object container and this
[1:18:45] is how our zone system
[1:18:47] works basically on the server you will
[1:18:49] see three different zones purple green
[1:18:52] and red
[1:18:53] that and they each Zone comes with its
[1:18:56] own coordinate system and its own
[1:18:59] physical grid and this is how we
[1:19:01] actually on live do uh Zone transitions
[1:19:04] between your ship empty space space
[1:19:08] station um or a
[1:19:11] planet and you will see as I walk
[1:19:14] between those
[1:19:16] zones I will at real time update it in
[1:19:19] that entity graph and this all happen
[1:19:22] seamless so for a client this is
[1:19:23] completely transparent you don't notice
[1:19:26] that but this is actually what's
[1:19:27] happening when you step in or out into a
[1:19:29] ship and this is very unique to our
[1:19:31] engine um no other engine has this zone
[1:19:34] system and this allows us to do all the
[1:19:37] amazing stuff you saw in the videos
[1:19:39] before transitioning in and out of uh
[1:19:42] planets and go from the smallest scope
[1:19:45] to the largest
[1:19:47] scope um
[1:19:50] so everything we do
[1:19:53] in a shart so this is like a mini level
[1:19:56] like the miniu level is also persisted
[1:19:59] in this database um when we create new
[1:20:02] entities in our engine in Star
[1:20:05] engine those entities get pushed into
[1:20:08] our entity graph into our online
[1:20:10] database at real time and then from
[1:20:12] there replicate it to our clients so if
[1:20:14] I go ahead and spawn a couple of ples
[1:20:19] here you will see they spawn uh they get
[1:20:22] created immediately on my entity graph
[1:20:26] and replicated on the server and on the
[1:20:28] client um so spawn couple more
[1:20:34] here and you see this the uh pangles I
[1:20:38] spawn in the other Zone get attached to
[1:20:41] the other Zone um and then if I go and
[1:20:45] transition one of those they will also
[1:20:49] transition between the different zones
[1:20:51] um and this same works for ships or more
[1:20:54] complex entities if I spawn uh this buy
[1:20:58] here you will see this one gets created
[1:21:00] with all its attachments and it's and
[1:21:02] everything else attached to it and this
[1:21:05] is just my small demo level here on live
[1:21:09] we have up to 600,000 Dynamic entities
[1:21:12] that get created for one single chart
[1:21:15] and this is just the initial state after
[1:21:17] 2 weeks 3 weeks of game playay when you
[1:21:20] guys go in and Destroy stuff spawn stuff
[1:21:22] play around it's it goes in the millions
[1:21:25] of
[1:21:26] entities um so this in itself is pretty
[1:21:29] pretty amazing
[1:21:30] Tech um the next time I want to talk
[1:21:33] about is our streaming
[1:21:36] system um most engines do stream on
[1:21:41] stream on uh texture or uh geometry we
[1:21:46] actually stream entities and we do
[1:21:48] stream persistent
[1:21:50] entities so when I turn on the the
[1:21:53] streaming system here and I walk into
[1:21:55] this uh if if I walk over to the red
[1:21:58] area you will see that the purple area
[1:22:01] will stream out together with all the
[1:22:03] entities on that server so it does not
[1:22:06] only stream out on my client it actually
[1:22:08] streams out on that server and when I
[1:22:10] come back in the green zone that purple
[1:22:13] Zone streams back in with all the
[1:22:15] entities in there with their full
[1:22:16] persistent
[1:22:19] State um so now I have uh second player
[1:22:23] joined benir is going to join
[1:22:26] me so Ben if you want to join okay I
[1:22:29] think you see him over
[1:22:30] there hey
[1:22:35] Ben
[1:22:37] sorry nice all right I'm going to spawn
[1:22:40] a couple more penos here and because the
[1:22:44] next thing I want to talk about is new
[1:22:46] technology we are right now developing
[1:22:50] and we about to put on the tech preview
[1:22:52] for you to play um and this is actually
[1:22:55] the replication layer
[1:22:58] split and that's the big next step in
[1:23:01] our in our great vision obviously as you
[1:23:04] might know so in this demo my client and
[1:23:08] my servers they are no longer directly
[1:23:10] connected actually I have a a new
[1:23:14] service running
[1:23:15] here and that is our replication
[1:23:19] service so my client is connected to
[1:23:21] this replication service and my server
[1:23:24] connected to this replication service
[1:23:26] and the replication service its own per
[1:23:29] the sole purpose is to get all the
[1:23:31] entities which are in The Entity graph
[1:23:33] and stream them to clients and servers
[1:23:35] which are connected
[1:23:38] to and and what's really cool about this
[1:23:42] is uh let's do a little experiment here
[1:23:45] um I mean you all know our game has bugs
[1:23:50] uh it's it's still Alpha and sometimes
[1:23:53] things can happen so let's see what's
[1:23:57] happening uh when I kill my server
[1:24:01] here and so this is my server uh the
[1:24:04] actual console so let's just shut it
[1:24:10] down and yes this is where you would
[1:24:12] usually see a 30k or something uh you
[1:24:15] can see benoir kind of froze there for a
[1:24:18] bit um and the buggy does a bit weird
[1:24:21] stuff I can shoot those pingles but the
[1:24:24] world is really in a frozen state right
[1:24:26] now but I didn't disconnect because I'm
[1:24:29] connected to the replication layer and
[1:24:31] not to the server anymore uh in the
[1:24:33] meantime I'm just starting a new server
[1:24:36] let's be a bit patient for it should
[1:24:38] come back online in a
[1:24:44] second and as you can see now that the
[1:24:46] server came back it restored the
[1:24:51] state
[1:24:58] it it restored the state and the
[1:25:00] simulation just continues to work uh as
[1:25:03] as as before um so this will be again
[1:25:08] this is a very early Tech but this is
[1:25:11] this is a a great benefit of what we
[1:25:13] have with our replication layer
[1:25:16] split but there's one more
[1:25:19] thing um and let's try this thing again
[1:25:24] I just killed myself and I'm I'm trying
[1:25:25] to do that again but this time um we
[1:25:29] doing something different so let's first
[1:25:32] go in
[1:25:33] here and this is my development tool I
[1:25:36] can talk about it in a second so let's
[1:25:38] stop that server
[1:25:44] again and
[1:25:51] restart
[1:25:54] and this will take a little bit um I'm
[1:25:56] running this tool you see here this is
[1:25:58] our internal development tool um this
[1:26:01] tool runs the entire stack of our game
[1:26:04] on this PC um this is obviously for
[1:26:07] development only and I can do that with
[1:26:09] my small test level um but this really
[1:26:11] helps online deaths and all people who
[1:26:14] work on the incredible complicated Tech
[1:26:16] we here to be able to develop uh our
[1:26:21] game and because I run everything on
[1:26:23] this PC it's a bit slow so let's let's
[1:26:25] wait and see what's happening
[1:26:31] here all right simulation continues I
[1:26:35] can see Ben moving again hey
[1:26:37] Ben
[1:26:39] however what just
[1:26:41] happened well as you can see on my
[1:26:44] screen I no longer have one server
[1:26:47] connected I have three servers connected
[1:26:50] to this replication layer so what you
[1:26:53] guys see
[1:26:54] here this is the very first version of a
[1:26:58] working server
[1:26:59] [Applause]
[1:27:13] mesh all right so now I'm going to
[1:27:16] explain a little bit how this magic
[1:27:18] works because it is truly
[1:27:21] Magic
[1:27:23] each server when it came up and the
[1:27:25] replication there realized there are
[1:27:27] three servers we assigned different
[1:27:31] zones to those servers and we said okay
[1:27:34] server one you are the authority over
[1:27:36] the purple area server two you are the
[1:27:40] authority over the green area and the
[1:27:42] last server is authoritative over the
[1:27:45] red
[1:27:46] area um you can still see that those
[1:27:48] servers have all those entities
[1:27:51] replicated
[1:27:52] but only this the entities within their
[1:27:55] zone are actually authoritative on that
[1:27:57] server so while I'm in this green zone
[1:28:01] at the
[1:28:02] moment my entity is simulated on that
[1:28:04] green server and just replicated on the
[1:28:07] other
[1:28:08] server um and now as I transition
[1:28:12] between those
[1:28:13] zones you will see that on that green
[1:28:18] server I just lost Authority and on that
[1:28:22] purple server I just gained Authority um
[1:28:24] and because it my entity was my player
[1:28:26] was replicated on both servers this
[1:28:29] completely uh Works seamless um and
[1:28:32] again let's do that a couple of times
[1:28:33] you see on my client here I don't notice
[1:28:37] anything of that this is this all
[1:28:39] happens behind the
[1:28:40] scene and this uh doesn't work only on
[1:28:44] me let's turn on the uh the Zone colors
[1:28:48] and the object the uh Authority
[1:28:50] assignment on the client as well um you
[1:28:54] can see that even entities as they
[1:28:57] transition into the other Zone
[1:28:59] seamlessly transition to that
[1:29:06] zone and not only that I can also
[1:29:09] interact with entities that are on the
[1:29:12] other side so if I go on the screen zone
[1:29:15] for example and I shoot this I can still
[1:29:17] shoot that purple uh
[1:29:20] entity and I can also just go ahead and
[1:29:23] destroy that buggy which sits on that
[1:29:25] other
[1:29:29] Zone there you
[1:29:30] go always fun to blow stuff up
[1:29:35] right all right um so there's more to
[1:29:39] this um the first thing I will do let's
[1:29:42] spawn a fresh bug here just destroy it
[1:29:43] mold one um when I go into this
[1:29:48] buggy I will become part of the
[1:29:51] Aggregate and that that means that
[1:29:53] now my buggy and myself will transition
[1:29:56] Authority together and this is how we
[1:29:57] make sure that my player while he's
[1:30:00] driving this buggy is always
[1:30:02] authoritative on the same server so you
[1:30:04] can see as I drive around with this
[1:30:06] buggy between the zones I will switch
[1:30:09] between the different
[1:30:13] servers all right um but there's more to
[1:30:17] this so remember when I turned on the
[1:30:19] streaming earlier the same streaming
[1:30:22] mechanics work here as well like
[1:30:25] obviously in this example right now you
[1:30:26] can see all those servers they have all
[1:30:28] those entities
[1:30:29] replicated and it's a little bit
[1:30:32] wasteful because you have three servers
[1:30:35] all need to replicate all those entities
[1:30:37] um and that's where streaming come into
[1:30:39] play I can turn on streaming here and
[1:30:42] you will see that suddenly my purple
[1:30:44] server no longer has the red area
[1:30:46] streamed in and the red server no longer
[1:30:49] has the purple area streamed in um so
[1:30:52] let's see what's happen when I drive my
[1:30:55] my buggy backwards into that red uh into
[1:30:58] the Red Zone what happens on that purple
[1:31:02] server
[1:31:04] um and I just disappear so right now on
[1:31:08] this
[1:31:09] server there's only benoir replicated
[1:31:12] and benoir if you come come to me over
[1:31:14] in the red
[1:31:17] area you will see that now on this
[1:31:20] server there's no client at all and in
[1:31:22] theory we could now completely stream
[1:31:24] out the entire area on that server or
[1:31:27] stream in a new
[1:31:29] [Applause]
[1:31:35] area and you will also see as I drive
[1:31:38] back into the green area I will
[1:31:40] magically reappear on that purple server
[1:31:44] and this obviously works on uh on on the
[1:31:46] other side as well uh let's get a couple
[1:31:49] more player join I have a couple more QA
[1:31:53] in the back so you can just see the
[1:31:54] whole thing uh running at life a running
[1:31:58] in life with with a bit more uh things
[1:32:00] going
[1:32:05] on let me get out of this
[1:32:11] buggy and you will see on each server
[1:32:14] renderer which clients are currently
[1:32:16] replicated on those servers and which
[1:32:19] clients are actually authoritative on
[1:32:21] those servers and you can see this the
[1:32:23] green server because it's the middle one
[1:32:25] has most entities replicated um and then
[1:32:28] you can see this purple one at the
[1:32:30] moment only has one one uh one client
[1:32:36] replicated
[1:32:43] yeah so yes this is pretty much
[1:32:50] it
[1:32:53] I hope I hope you guys guys enjoyed
[1:32:57] this um it has been a long time to come
[1:33:00] to this
[1:33:02] point and I can't I just can't put in
[1:33:06] words how much Tech and work we had to
[1:33:10] put into this big shout outs to the
[1:33:12] network team big shout outs to the
[1:33:14] online services team big shout outs to
[1:33:17] Chris to let us doing
[1:33:20] this
[1:33:22] [Applause]
[1:33:26] it's been a really long journey to get
[1:33:30] to this point uh and I've got to say the
[1:33:33] team has done an amazing job they've
[1:33:36] been working diligently for the last
[1:33:39] four five years we've had a couple of
[1:33:42] false starts we've finally have an
[1:33:45] incredible I mean the way the
[1:33:46] replication layer works and how we can
[1:33:48] spin up servers and down and keep the
[1:33:50] state constant even even if a server
[1:33:52] goes down is I think a genius design and
[1:33:57] the first time I saw
[1:33:59] this about three weeks ago working fully
[1:34:03] I
[1:34:06] cried it's like giving birth we did
[1:34:10] it and we wouldn't have been able to do
[1:34:13] this and work on this kind of tech
[1:34:15] without all your support that's right
[1:34:18] you guys allowing us to take the time to
[1:34:20] do it right to really build it so thank
[1:34:23] you so much for everyone and thank you
[1:34:27] everyone at cig that's really worked
[1:34:29] hard to deliver all this amazing stuff
[1:34:32] that will be either in your hands now or
[1:34:34] in your hands very soon and this is just
[1:34:37] the beginning of Citizen con we got a
[1:34:39] lot more stuff to show you that's what
[1:34:41] we need for this MMO guys that's what we
[1:34:45] need great demo by the
[1:34:50] way

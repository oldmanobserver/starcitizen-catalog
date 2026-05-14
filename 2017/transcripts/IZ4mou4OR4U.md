# Star Citizen: Around the Verse - Secondary Viewports

**Video:** https://www.youtube.com/watch?v=IZ4mou4OR4U
**Date:** 2017-08-04
**Duration:** 16:57

## Transcript

[00:16] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizens ongoing development I'm Sandy
[00:22] Gardner and I'm Chris Roberts on today's
[00:25] show we take a look at the systems we'll
[00:27] be using to render Holograms and Fs in
[00:30] real time yeah it's pretty cool so can't
[00:32] wait to show you guys but first as many
[00:35] of you know the team is very focused on
[00:36] completing our 30 update for the
[00:38] persistent Universe uh so 30 is a giant
[00:40] link forward from what's currently
[00:41] available in game and thanks to the dev
[00:43] team's hard work the majority of 30's
[00:46] new features are almost complete and
[00:48] we've shifted into the final phase of
[00:50] the production process that focuses on
[00:52] feature and content integration
[00:54] optimization and Bug fixing now we're
[00:57] also expecting many new players or
[00:59] people who have been busy playing
[01:01] something else to come back in and log
[01:02] in and play 30 so we wanted to make sure
[01:05] the user experience is really good so
[01:07] we've decided to spend more time
[01:08] polishing and optimizing than we have in
[01:11] recent releases uh in addition we're
[01:13] also aiming to introduce our new Delta
[01:15] Patcher so you will only need to
[01:16] download just the files that have
[01:18] changed for each subsequent patch which
[01:19] means no more 30 gigabyte downloads uh
[01:22] but of course this will require some
[01:24] fine-tuning and a lot of testing to make
[01:26] sure it works as intended now we know
[01:29] that 30 is a big release and you're all
[01:31] eager to play uh and we're excited for
[01:34] you to play too and we can't wait to get
[01:36] it done uh but we want to make sure that
[01:38] it's ready so uh if you've read the list
[01:41] of carots we gave when we first started
[01:42] sharing our internal unpadded schedules
[01:44] our very first point was quality would
[01:46] always Trump schedule and the second and
[01:48] third points about task estimates you
[01:50] know being unpredictable due to the
[01:52] nature of developing something that
[01:53] hasn't been done before and the
[01:55] difficulty of estimating bug fixing and
[01:57] polish time are also important to
[01:58] remember as we go for forward uh with
[02:01] our schedules on uh finishing 30 so
[02:04] that's why we've seen the constant
[02:05] changes to production schedule over the
[02:07] past few weeks as new issues or
[02:09] advancements cross our paths we've
[02:11] worked hard to communicate those to you
[02:12] no matter how good or bad the news may
[02:14] be uh by its very nature game
[02:17] development can be an exhilarating and
[02:19] frustrating and unpredictable process uh
[02:22] so if our three Z schedule wasn't that
[02:24] then you wouldn't be getting the true
[02:26] development experience oh you wouldn't
[02:28] for our new backers you may not know
[02:30] with each of our major releases we've
[02:32] done different things to help you track
[02:34] our progress for the point8 Patcher that
[02:36] launched Arena commander and the 20
[02:39] patch which introduced the Pu we had our
[02:41] weekly development updates that listed
[02:43] current blockers and resolved bugs and
[02:45] for the march to 30 we've been tracking
[02:48] the major tasks we're doing with our
[02:50] weekly production schedule reports so
[02:52] now that we've reached this latest stage
[02:53] in the process we're planning to adjust
[02:55] the format of ATV to highlight exactly
[02:57] what we're working on to get 30 out the
[02:58] door now as all studios are working hard
[03:00] to get 30 out we have decided to suspend
[03:03] the studio update portion of the show so
[03:05] as to not distract developers with
[03:06] providing footage of their work for the
[03:08] Sho updates and instead starting next
[03:11] week we'll be launching a new segment
[03:12] called burndown uh with this segment
[03:15] you'll be able to be a fly on thewall
[03:17] for some of our production meetings and
[03:18] hear directly from the developers and QA
[03:20] testers about the week's biggest bugs
[03:23] blockers and challenges that we've been
[03:25] battling it will be another great way
[03:27] for you to follow 30's progress the
[03:30] weekly production report on the website
[03:31] will also be adjusting its focus to
[03:33] match alongside the new burndown segment
[03:37] ATV will bring you a weekly Deep dive
[03:39] into a feature we're working on for the
[03:41] game that way you'll still be getting
[03:43] the same great detail about what we have
[03:45] planned alongside the most current
[03:47] information on exactly where we are on
[03:49] the path to releasing 30 yep and then
[03:52] once 30 is out we'll resume the normal
[03:54] ATV Cadence with the weekly Studio
[03:56] reports uh and all that lovely eye candy
[03:58] that you guys like to see every week now
[04:01] let's shift gears to focus on two
[04:02] systems we've recently got working
[04:04] together the secondary viewport and
[04:06] render to text your system when combined
[04:09] these systems can do a wide variety of
[04:11] things from dynamically creating com
[04:13] calls from other locations to rendering
[04:15] Holograms in real time yeah and I'm
[04:17] pretty excited about the potential of
[04:19] this technology as it's going to allow
[04:20] us to do some really cool things in
[04:21] Squadron 42 and Star Citizen um which
[04:25] we're going to you'll see maybe a little
[04:26] hint of to come let's take a look
[04:36] we've been working with the graphics
[04:38] engineering team in the UK to develop
[04:40] and make use of their new secondary
[04:41] fport Tech which in itself makes use of
[04:44] the new render to texture system it
[04:45] allows us to do some really cool things
[04:47] for our in Universe narrative in both
[04:49] Squadron 42 and the Pu so far we have
[04:51] used it for com skulls and holographic
[04:54] volume rendering and we' have been sying
[04:55] very closely with the engineers that
[04:57] write all the new rendering code to make
[04:59] this happen and we're slowly homing in
[05:00] on a final feature set first of which is
[05:02] secondary view ports which allows us to
[05:04] get a second view onto the world or many
[05:07] different views onto the world this is
[05:08] built on top of some uh new tech we have
[05:11] called the render DET texture system
[05:12] prior to the render DET texure system if
[05:14] you wanted to render some uh user
[05:16] interfaces or screens or visors we would
[05:18] have to render them directly into the
[05:20] game World um and this happened after
[05:23] all of the rest of the scene had been
[05:24] rendered what that meant is that the UI
[05:26] would always look on top of the game
[05:28] world it would never truly fit in
[05:30] and therefore it would never correctly
[05:31] be obscured by things like glass or fog
[05:34] or bloom in the same way as everything
[05:36] else in the scene and this is always
[05:37] bored our UI artists so the new system
[05:40] the idea is we render all of this
[05:42] content into textures first and then we
[05:44] use that them Textures in the actual
[05:47] main rendering pass of the scene and
[05:49] composite them in with uh whatever
[05:50] effects we need like whether we need
[05:52] them to look holographic or like they're
[05:53] on glass or whatever it might be and it
[05:56] lets them to bed themselves in the game
[05:58] World much better and have a much better
[05:59] better uh lighting and sorting with the
[06:01] rest of the scene we also get a few
[06:03] other benefits from this we get better
[06:05] anti-aliasing better sorting we get uh
[06:08] better performance actually with the
[06:10] fact that we can reuse the same screen
[06:12] on many different displays in the game
[06:14] world uh just by rendering it once and
[06:16] we can even use the same screen uh on
[06:18] the next frame of the games to be able
[06:19] to avoid rendering cost if for example
[06:21] you've got a a screen which doesn't need
[06:23] to animate or doesn't animate very
[06:25] quickly these new pieces of tech we've
[06:27] been using in many different systems so
[06:28] we've got all of our UI screens and our
[06:31] visors all of our Holograms and video
[06:33] comment calls and there'll be several
[06:34] other uses we're hoping to fit in
[06:36] further down the line like things like
[06:37] mirrors things that are typically really
[06:39] difficult to achieve in games the render
[06:40] detex system starts uh at the engine
[06:42] level when we're Gathering all the
[06:45] objects really at this point all we
[06:46] really need to know is that the objects
[06:49] are going to be streamed so the
[06:50] streaming system needs to be informed
[06:51] and we also need the Max and Min screen
[06:54] space size we use the maxim screen space
[06:56] size along with the UV texal density to
[06:59] be able to calculate how much screen
[07:01] resolution is required for that texture
[07:03] the minimum screen space size is
[07:05] required cuz that texture may be used on
[07:07] multiple different objects uh as it's
[07:09] used on multiple different objects we
[07:11] then need to get the largest size and
[07:14] use mid mapping down to the smallest
[07:15] size when you have a screen within a
[07:17] screen we need to know the ordering of
[07:19] the rtts so as one RT uh is rendered
[07:23] before another it can then be used as a
[07:25] texture within the second one we also
[07:27] need to know that an R T within an RT
[07:30] within the main pass if the first rtt is
[07:33] half res of its parent RT and that rtt
[07:38] is half res of the main pass the first
[07:40] rtt must be a quarter of the res at
[07:41] rendering size the rendering system has
[07:43] a fixed memory budget to do this we we
[07:46] allocate one large texture ahead of time
[07:49] this texture is called the texture pool
[07:51] uh or in this case the render texture
[07:52] pool it's very similar to a standard
[07:54] Shadow pool system we recently rewrote
[07:57] our shadow pool packing system
[08:00] uh to be a power of two quadry allocator
[08:02] we use the same Power of Two quadry
[08:04] allocator for the render the texture
[08:06] system we render the textures as pair of
[08:08] two so IE 128 256 512 1K we use the
[08:12] light or the smallest size for that the
[08:15] texture needs uh that we can fit in so
[08:17] if if you need a a rendered texture
[08:19] object at 800 by 800 we'd use a 1024x
[08:23] 1024 and as you move closer and further
[08:26] away from the object it will require a
[08:28] lower or higher resol solution and we
[08:30] progressively move up and down one of
[08:32] the benefits of rendered texture is we
[08:33] can reuse those textures for multiple
[08:35] objects so if you have a scene with many
[08:38] different Billboards in them let's say
[08:39] 12 Billboards we would render that
[08:41] texture for the billboard once and then
[08:44] reuse that texture over 12 different
[08:46] Billboards um the original system the UI
[08:48] system for instance uh wouldn't do that
[08:50] it would render the UI or that billboard
[08:52] 12 times because the uh rendered texture
[08:55] system is now a texture and it's not uh
[08:58] you know flat just rendered into the
[09:00] world it means we can render any any
[09:02] Curve screen anything like that the only
[09:04] downside to that was we had to implement
[09:07] a new system to to manage the mouse
[09:09] pointer interactivity uh that we already
[09:11] had we had to make some modifications um
[09:14] to bring in a mouse pointer system which
[09:16] which takes screen space size and remap
[09:19] remaps that into uh object UV
[09:21] coordinates and then we can then pass
[09:23] that object UV coordinates to the UI
[09:25] system the UI system is able to to work
[09:28] out where on the object
[09:29] that Mouse pointer is and then in
[09:31] reference to where on the flash that is
[09:33] and then therefore you can then start
[09:34] selecting things with the character
[09:36] animation it normally goes through the
[09:37] camera system to decide whether it's
[09:40] needs to be animated whether any of the
[09:42] facial animations need to be run and as
[09:44] we were running this through the
[09:45] rendered texture it wasn't in view of
[09:47] the main camera what would happen is it
[09:48] just wouldn't render when it was in the
[09:49] rendered texture system we resolved this
[09:51] by having the the usual camera calling
[09:54] system and the facial animation system
[09:56] stuff like that communicating with the
[09:58] render texture manager that Tex manager
[10:00] will allow it to go through all the
[10:01] different cameras and work out exactly
[10:04] how big it is on screen or how big it is
[10:06] with inside or Rend texture manager and
[10:09] it will allow it to decide on the level
[10:10] of detail of the facial animations and
[10:12] level of detail in the character
[10:13] animations if you do pre-rendered coms
[10:15] you can't really acknowledge characters
[10:17] changing costumes or ships or locations
[10:19] so real-time rendering for us makes a
[10:21] big difference for immersion coms calls
[10:23] reflect what's going on in the worse and
[10:25] for the persistent Universe it opens up
[10:26] customized player avatars calling each
[10:28] other all rendered life another
[10:31] possibility are for example CCTV or
[10:33] other room view style puzzles or life
[10:36] recording of views to be featured
[10:37] somewhere else in the verse there are
[10:39] some remarkable consequences of these
[10:40] advances in the tech our Capital ships
[10:42] feature big holographic volumes on
[10:44] Bridges or in briefing rooms and that
[10:46] means the player can walk around them
[10:47] freely for those we wanted to not just
[10:49] render a second viewport using 2D
[10:51] display screens but actual 3D Holograms
[10:54] and you can f them from all angles
[11:36] secondary viewport camera is updated
[11:38] dynamically to match the relative
[11:40] viewing angle from the main player's um
[11:43] camera to the projection volume and then
[11:46] as you move around the secondary
[11:48] viewport camera moves and therefore you
[11:50] can essentially move around the
[11:51] holographic projection using the
[11:53] existing rendering pipeline means that
[11:55] we can render essentially any object
[11:57] into the holographic projection
[11:59] where there's no need for material
[12:01] duplicates or any duplicating of
[12:04] material setup it just basically works
[12:06] with these existing shaders so as well
[12:08] as the existing shaders we also have uh
[12:11] developed dedicated shaders for various
[12:13] things for example like abstract user
[12:15] interface objects or if in a mission
[12:18] briefing you wanted to go to a waypoint
[12:21] the Waypoint could be displayed as
[12:23] holographic and it'll be using the one
[12:25] of the dedicated shaders that we
[12:26] developed and the cool thing about this
[12:28] is that we can automatically fade the
[12:31] objects that are in the source volume uh
[12:34] as they get closer to the boundary of
[12:36] the volume we can automa fade them out
[12:37] so it doesn't clip as it goes through
[12:40] the boundary we also exposed two new
[12:43] artistic features where we basically
[12:45] allow the objects to dissolve and tint
[12:47] independent of the material set up being
[12:50] able to light these 2D and Hollow rtt
[12:52] presences in real time at a source
[12:54] location and then seeing the results in
[12:56] the corresponding 2D display screen or
[12:58] in the 3D Target area immediately felt
[13:01] exciting to me with this new tech we can
[13:03] have a character calling another ship or
[13:04] location and the call appears on either
[13:06] a 2d display screen or inside a 3D
[13:08] Volume with the calling partner
[13:10] essentially being telepresence then
[13:12] what's really cool about the holocom or
[13:14] telepresence is we can arbitrarily scale
[13:16] The Source volume up or down and easily
[13:19] create Larger than Life representations
[13:20] of characters without having to resort
[13:22] to cheats like scaling up or anything of
[13:25] the scene and this makes it possible to
[13:27] have something like a grand Admiral
[13:28] appearing in as a looming figure inside
[13:30] the bangal carrier Hol Globe versus him
[13:32] just being a small life-size presence we
[13:34] also added the ability to tint or
[13:36] dissolve any object in our scenes at
[13:38] will which helps staging something like
[13:39] Mission briefings where way points would
[13:41] need to flash green or enemy presence is
[13:43] marked as red so this text progressed
[13:45] really really fast and we got some
[13:47] really great results but there's more we
[13:48] want to do with it next thing for us is
[13:50] to optimize it further we really want to
[13:52] make sure that there was no performance
[13:53] impact when you have these secondary
[13:55] renders or these Holograms and such in
[13:57] the scene we're doing a bunch of
[13:58] exciting things to try and combat the
[14:00] performance issues such as if you're
[14:02] going to video call someone and you can
[14:03] only see like a SL slight part of the
[14:05] background behind them we'll use what we
[14:07] call the Environ probe which is normally
[14:09] used for reflections of the scene we're
[14:11] going to render that directly behind the
[14:12] player to avoid having to render the
[14:14] entire background scene and in most
[14:15] situations you won't be able to actually
[14:17] tell the difference so that's one of the
[14:19] examples of the optimizations we're
[14:20] going to be making but there'll be many
[14:21] more to make sure that we can really use
[14:23] this Tech in as many situations as
[14:25] possible so that you get to see the fun
[14:26] gameplay that will result from it so now
[14:28] that we the basics of our holotech in
[14:30] place we want to stabilize it more and
[14:32] spend more time finalizing the look of
[14:34] these Holograms that means all the good
[14:36] post effects goodies you can think of
[14:37] interlacing lines I want to have
[14:38] flickering when there's poor signal
[14:40] quality or when the holographic display
[14:42] is damaged yeah we can't wait to show
[14:44] you more of this when it comes to life
[14:46] later in the PE and of course in our squ
[14:49] 42 narrative thanks for
[14:51] watching pretty awesome he uh and for
[14:54] the Eagle Eye amongst you you will have
[14:55] spotted the first appearance of Ben
[14:57] Mendelson's character in Squadron 4 42
[14:59] and Liam onion night Cunningham in the
[15:02] work in progress Hollow briefing test
[15:04] scene that we've been doing uh our
[15:06] Graphics team have really created
[15:07] something I haven't seen any other
[15:09] engine and allows us to actually do
[15:10] proper holographic
[15:12] telepresence uh none of it pre-rendered
[15:15] or Faked it's all live and the
[15:16] possibilities for longer term gameplay
[15:18] are pretty exciting and that's all for
[15:20] today's episode as always thanks to all
[15:23] of our subscribers for making it
[15:24] possible for us to produce all of our
[15:26] video content we've just announced that
[15:28] August ship of the month is the apua
[15:31] carall so that means subscribers can
[15:33] test out this Jean ship all month long
[15:36] just log into to the game to take it out
[15:38] first spin yeah and thanks to all our
[15:40] backers who have supported the game over
[15:41] the years opening up the development
[15:43] process to you all has been both
[15:45] challenging and extremely rewarding and
[15:47] I would say the emphasis would be mostly
[15:49] on rewarding so I can't thank you enough
[15:51] for making all possible finally if you
[15:53] want to know what all of our offices did
[15:55] over the past month then check out the
[15:56] July monthly report which goes live to
[15:58] tomorrow so until next week we'll see
[16:01] you around the verse
[16:11] [Music]
[16:34] thank you for watching so if you want to
[16:36] keep up with the latest and greatest and
[16:37] staff citizen of Squadron 42's
[16:39] development please follow us on our
[16:40] social media channels see you soon
[16:50] [Music]

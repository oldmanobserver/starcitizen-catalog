# Star Citizen: Around the Verse - All Systems Argo | 3.4 Ep. 6

**Video:** https://www.youtube.com/watch?v=B-Y4MztLu-s
**Date:** 2019-02-14
**Duration:** 12:08

## Transcript

[00:10] [Music]
[00:27] w
[00:31] [Music]
[00:41] [Music]
[00:51] w
[01:04] [Music]
[01:14] whether it's sunsets or Finish Lines
[01:15] you're chasing choose tumbrl to get you
[01:18] there tumbrl RC's improved handling and
[01:21] modified controlled intake system
[01:22] provide you all the power you need just
[01:25] when you need it
[01:27] [Music]
[01:32] tumbril
[01:34] RC get in front of
[01:38] it hello and welcome to another episode
[01:41] of around the verse I'm Sean Tracy and
[01:43] I'm Josh Herman that was the winning
[01:45] entry in our recent tumbril Cyclone
[01:47] commercial contest as always there were
[01:50] a ton of great submissions it's true you
[01:51] can check them all out right now on
[01:53] Spectrum awesome today we'll dive into
[01:55] the flowing ground traffic of AR Corp
[01:57] and I hear there's news about a new
[01:59] vehicle in Star Citizen it's true we'll
[02:01] jump into that in a second but first the
[02:03] exciting world of asset optimization
[02:05] using layer Blends you know it's not
[02:07] always about the flashy stuff in game
[02:09] development we're constantly striving
[02:10] for ways to make our work as efficient
[02:12] as possible and we've recently
[02:13] implemented a way to improve performance
[02:15] with all our characters that's true and
[02:17] better character performance means more
[02:18] characters on screen at a time yeah it
[02:20] means more work for you guys too it's
[02:22] true well that's good here's for Stefan
[02:24] with more recently here in La we did a
[02:27] training seminar um basically we took
[02:30] all the artists and walk through the
[02:33] process of performance and walk through
[02:36] what exactly causes bad performance and
[02:39] how to get good performance one of these
[02:41] things is completely crucial to
[02:43] rendering objects is draw calls you need
[02:46] them to draw all the objects to the
[02:48] screen so it's something that you have
[02:51] to keep count of in order to ensure that
[02:54] you have the best performance possible
[02:56] the characters use what's called a layer
[02:58] blend Shader and a layer Shader so the
[03:01] layer Shader is essentially a list of
[03:04] materials textures similar to in
[03:06] Photoshop how you have different layers
[03:08] that get stacked up the layer blend
[03:10] Shader is what Blends all of these
[03:12] layers together so the reason that's
[03:14] beneficial is the characters get to use
[03:15] these two shaders together and we can
[03:18] take all of these different sub IDs and
[03:21] collapse them all together which
[03:22] normally every layer would be a separate
[03:24] draw call so instead of the clothing
[03:26] being 10 12 15 draw calls it's just one
[03:30] one of the reasons is important to do
[03:32] the performance and the profiling now uh
[03:35] for the draw calls is because later on
[03:38] in the development process you have a
[03:40] lot more assets and if you train the
[03:42] artist they'll start making the assets
[03:45] correct now which will be less assets we
[03:48] have to optimize in the future so that
[03:50] kind of empowers the character artists
[03:52] to be in control of their own assets and
[03:53] ensure that they're making not only the
[03:55] best looking asset possible but an asset
[03:58] that will perform the best of its
[04:01] complexity which is a huge benefit um
[04:04] across all disciplines because having
[04:06] better optimized characters increases
[04:08] the memory pull and the draw call pull
[04:10] for other assets such as ships and
[04:12] environments because everything kind of
[04:14] works together in regards to an overall
[04:16] performance so what's great about having
[04:18] the opportunity to give this training
[04:20] session is it's not always about
[04:22] refining our tools but it's also about
[04:24] educating our internal staff to ensure
[04:27] that everything from the create of the
[04:30] art to the way that it draws on screen
[04:33] is correct and is as optimal and
[04:36] gorgeous as possible so there wasn't
[04:39] really new technology per se unless
[04:41] Forest you know giving a training is new
[04:42] technology it's more of like a like a
[04:44] training initiative um and that's really
[04:46] important because we've got you know
[04:47] some mid and some Junior guys that are
[04:49] coming up in the industry you know it
[04:51] might be their first product and
[04:53] generally a lot of these guys get shown
[04:54] how to do a thing but they don't really
[04:56] know why um and this just is something
[04:58] that's is good for their Career
[05:00] Development and everything because yeah
[05:01] our our Tempo is really really high so
[05:03] we can't really feed in you know how
[05:05] many different polyes you got to use how
[05:06] many different draw calls you going to
[05:07] do how many different materials you
[05:09] going to do for that particular
[05:10] character do you want to use a shadow
[05:11] proxy do you want to use how about the
[05:12] new vehicle oh I hear that's from a
[05:15] manufacturer we haven't heard from in a
[05:17] while oh mysterious let's go to vehicle
[05:19] pipeline director John crew and concept
[05:21] artist Sarah MCA to find out what draw
[05:23] cost the Aro SRV is a entrylevel uh
[05:28] single man uh search recovery vehicle
[05:31] that primarily focuses around using
[05:33] tractor beams so it's our first ship
[05:34] that has dedicated tractor beam
[05:37] functionalities it's main gameplay
[05:38] feature lots of other ships do have
[05:40] tractor beams but they're sort of
[05:41] ancillary for helping do their their
[05:44] primary function but it's a very
[05:46] collaborative ship um obviously is a
[05:49] recovery ship you need someone else to
[05:51] be recovered if there's not players
[05:52] requesting this we'll have NPC missions
[05:55] to accept and take on so there there
[05:57] will always be something to do whether
[05:58] it's NPC or players but you can use it
[06:00] as a group for some of those other
[06:02] gameplay Loops like mining or Salvage to
[06:03] help with those the SRV it's its sole
[06:06] focus is purely around its tractor beam
[06:08] and recovering other vehicles for me
[06:10] I've never really I suppose done
[06:12] anything quite like this which is quite
[06:14] exciting it's so versatile and you don't
[06:17] necessarily have to pull ships either
[06:19] you can pull cargo as well so with that
[06:22] in mind I had to make the tractor beam
[06:24] quite versatile in terms of its movement
[06:27] and also it's radius of traction the SRV
[06:32] has quite a large power plant to to
[06:34] power the tractor be which is quite a a
[06:36] power hungry device obviously masses
[06:39] vary hugely depending on planets and
[06:42] what car goes inside the ship but we
[06:44] envisage that the default operating
[06:46] range to be around the cutless up to
[06:48] perhaps the constellation depending on
[06:50] how it's loaded but for a single SRV
[06:53] cutlasses and that area should be what
[06:55] you're able to recover yourself if
[06:57] there's more than one of you you can
[06:59] pull it together together to be able to
[07:00] maneuver larger ships same for the
[07:03] reverse for smaller you might be able to
[07:04] pick up a couple of smaller Vehicles
[07:07] sort of just Clump them up and take them
[07:09] together the considerations that went
[07:11] into mainly the the arms of this SRV is
[07:15] they had to be quite versatile and they
[07:17] also had to move quite a significant
[07:20] amount so that it didn't matter where
[07:23] you were where or got stuck these arms
[07:26] and this tractor pad could hone in and
[07:29] pull you up so I had to make sure that
[07:32] this back section had enough room for
[07:33] these arms to grab you essentially but I
[07:36] also wanted to make it look really like
[07:38] grounded as well like like Cool Tech and
[07:41] with a bit of cool hard surface as well
[07:43] just thrown in as I say I looked at real
[07:45] life to just see the range of movement
[07:49] particularly uh as well wrists I think
[07:51] the human body is really good to see how
[07:54] flexible uh how flexible you are because
[07:58] you know you've got this great degree of
[08:00] movement in your own body I think
[08:02] Machinery as well as always trying to
[08:06] imitate parts of the human body which is
[08:09] what I thought is in this toe arm you
[08:11] want this flexibility in order to
[08:13] doesn't matter where you are or you're
[08:15] stuck you've got this degree of movement
[08:18] that allows you to just track wherever
[08:20] you need to to be and then hone in on it
[08:22] and pull it up so I just look at real
[08:26] life nature and and also Robotics and
[08:29] try to ground it in reality but also
[08:32] give it the Sci-Fi twist that you know
[08:34] is is really cool and looks really
[08:37] feasible we picked Argo for this ship
[08:41] because we wanted to expand the Argo
[08:42] range we could have picked misk or some
[08:44] of the other more industrial ships but
[08:46] Argo we've only got really the mpuv as
[08:48] the sole ship there and we wanted to
[08:50] build that line up so in future we can
[08:53] put other ships in there and we have a a
[08:55] wider range of Concepts to pull from the
[08:58] Argo SRV is available to everyone
[09:00] tomorrow so head to the RSI website for
[09:02] more details on Friday there's also a
[09:04] special edition Super Hornet heartseeker
[09:06] available just in time to celebrate
[09:08] Valentine's Day it's a custom Loadout
[09:10] with a thematically appropriate skin
[09:12] while you're checking that out you can
[09:13] also take a look at the winners and all
[09:15] the great entries of our be my Valentine
[09:18] card contest yeah that's right we
[09:19] challenge the community to design Star
[09:21] Citizen Valentine's and as usual the
[09:23] results were impressive yeah I'm going
[09:25] to print some of these out and use them
[09:27] my Valentine is going to be stoked I
[09:29] sure
[09:30] will Steve's going to be upset
[09:32] undoubtedly now let's dive into the
[09:34] ground traffic of art Corp where the
[09:36] environment art team is working on the
[09:37] ways to make this planet's surface look
[09:39] populated and busy here's Daniel Harris
[09:42] with details I've been working on the
[09:44] traffic tests and it's mainly about
[09:46] getting this sort of low-level very
[09:48] small scale traffic along the city
[09:50] streets so at the moment this feature is
[09:52] in the early stages we've done some
[09:54] initial testing very simple geometry
[09:57] very simple uh textures and we just want
[10:00] to get the effect in and see how it
[10:01] works in the game because it sort of
[10:03] adds a bit more interest to the city
[10:05] it's not static you know there's
[10:07] movement and you can fly around and you
[10:09] can sort of spot these distant lights
[10:10] and distant specs of glow as you fly
[10:12] through the city and I think it just
[10:13] gives you the sense that you're in a
[10:15] real city which I think is kind of
[10:16] important and it's done in a simple way
[10:19] but it's quite effective because we can
[10:20] simply have a texture that Scrolls
[10:22] across some geometry allowing us to do
[10:24] simple roads and paths through the city
[10:26] the traffic itself is sort of staggered
[10:28] up and down so we can can add some
[10:29] variation in the heights this allows us
[10:31] to add some simple glows that add a
[10:33] sense of scale and interest as a player
[10:35] flies over the city well the traffic
[10:37] itself you wouldn't necessarily see it
[10:39] from space it would be from quite far up
[10:42] but it would be more sort of in
[10:43] atmosphere I'd imagine and then you'd
[10:45] sort of see it down up until the no fly
[10:47] zone and then you know that would be
[10:49] where you'd see it clearest I guess it's
[10:51] just a small scale effect but I think it
[10:53] it helps sell the uh the city as you fly
[10:55] through thanks Daniel well that's all
[10:58] for us this week if you haven't read
[10:59] January's monthly report head to the
[11:01] website for the skinny on what all our
[11:02] Studios have been working and tune in to
[11:04] twitch.tv/ starcitizen tomorrow at 10:
[11:07] a.m. Pacific for a new episode of
[11:08] reverse the verse live where Jared talks
[11:10] shop with the audio team sounds like a
[11:13] good time we're also currently working
[11:15] on revamping the selection of physical
[11:17] merchandise in our online store and we
[11:19] want your input yeah we do so head to
[11:20] Spectrum and let us know what you think
[11:22] would make the best additions to our
[11:23] merch offerings and thanks to our
[11:25] subscribers for their continued
[11:26] sponsorship and thanks of course to all
[11:28] the backers from making our games
[11:29] possible so until next time we'll see
[11:31] you around the
[11:35] [Music]
[11:47] verse thanks for watching for the latest
[11:49] and greatest in Star CS in a squadron 42
[11:51] you can subscribe to our Channel or you
[11:53] can check out some of the other shows
[11:55] and you can also head to our website at
[11:57] www. Roberts Space industries.com thank
[12:01] you very much for watching

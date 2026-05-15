# Star Citizen: Around the Verse - Can You Hear Me Now?

**Video:** https://www.youtube.com/watch?v=Wg9I68Us5B0
**Date:** 2018-09-13
**Duration:** 10:58

## Transcript

[00:06] [Music]
[00:17] [Music]
[00:23] hello and welcome to another episode of
[00:25] around the verse I'm Sandy Gardner and
[00:27] I'm Eric Kiren Davis this week we'll
[00:29] dive into to flight AI audio design and
[00:32] get a lot of this asteroid
[00:34] mining but first let's see what players
[00:37] have been up to in the verse recently a
[00:39] strange monolithic Effigy appeared in
[00:41] the unforgiving dear
[00:44] desert dubbed the dear Rocket Man this
[00:47] emergent art project was the culmination
[00:49] of 10 players working to position a
[00:51] bunch of ships including 40 gray cat
[00:54] buggies into the shape of a huge and
[00:56] seemingly happy
[00:58] human Sandy can you name all the ships
[01:01] used to construct said Rocket Man yes I
[01:03] can constellations caterpillars there's
[01:07] a couple star yeah there you go at any
[01:09] rate impressive work there now let's
[01:11] march on to development updates we've
[01:14] been following the development of
[01:16] asteroid mining for a while now and the
[01:18] mechanic is now feature complete yay
[01:20] with the gameplay team making final
[01:22] tweaks to space friction here's Dan
[01:24] truffin to take us through a full
[01:26] gameplay Loop hey I'm Dan truffin I'm
[01:28] the lead system designer uh in the
[01:30] Frankfurt office and uh I'm going to
[01:32] show you some of our work on the on the
[01:35] asterid mining basically it's an
[01:38] evolution of our planetary Mining and
[01:40] the next logical place to take it would
[01:42] been space so here it
[01:45] is we are here in the asteroid belt
[01:48] around yella we're going to find a rock
[01:50] and try to extract various important
[01:53] minerals from it uh generally rocks are
[01:56] going to be a bit harder to find in
[01:58] space at least usable rocks they're
[02:00] going to be a lot further apart
[02:02] generally we use new assets for this but
[02:04] we also manage to reuse some of the
[02:07] existing rocks with just with a nice
[02:10] texture they went again through our
[02:11] minable Rock pipeline they have a
[02:13] different texture and on the inside of
[02:16] them uh they also when they break they
[02:18] they look different from the rocks on
[02:20] the planet the mining process basically
[02:23] works very similar to how you guys are
[02:25] used to you just aim the mining laser
[02:27] and try to keep the rock energy level
[02:30] where it needs to be in the optimum Zone
[02:32] you try to keep it in the green zone and
[02:34] not go in the red zone as I am right
[02:36] now going in the red zone is a lot more
[02:40] detrimental in space because once the
[02:42] rock explodes the pieces will end up
[02:44] going in every
[02:47] direction since this is space they take
[02:49] a while to stop there's no ground to
[02:51] stop them as you see they'll be flying
[02:54] and flying and flying so if you do a bad
[02:56] job you really will have to run after
[02:58] every piece of Rock
[03:00] provided you guys don't mess it up and
[03:03] do what I did you should be able to
[03:05] extract valuable resources if you manage
[03:07] to keep your extractor beam in the same
[03:10] position you'll extract faster if you
[03:12] move it around on the Rock they'll
[03:14] extract slower so obviously a rock that
[03:16] is hurtling through space is going to be
[03:18] slower to
[03:20] extract that's about it I'm really not
[03:22] going to spend time searching all of
[03:24] these rocks they might take a while to
[03:26] get all of them but uh hope you guys
[03:28] enjoy this
[03:31] that's not all from the exciting world
[03:33] of mineral extraction new Surface side
[03:36] rocks are being introduced as well the
[03:39] environment team has been working on
[03:41] minable formations for the acidic biomes
[03:43] will see on Hurston and its Moon Arial
[03:46] they've been improving the existing Rock
[03:48] generator pipeline to create a variety
[03:50] of different shapes faster not only does
[03:52] this help when creating new types of
[03:54] minerals it also helps improve the look
[03:56] of existing minable rocks and adds clear
[03:58] visual differentiation
[04:00] between their exterior and interior
[04:04] textures the audio team has been working
[04:06] on a feature that lets the player Focus
[04:08] their listening this will allow you to
[04:10] listen to specific cues or conversations
[04:13] even if you're in a crowded room or
[04:15] noisy area let's go to Bob Rolo and
[04:18] Simon price for more on this feature so
[04:21] listener focus is a new feature we're
[04:23] working on to mimic the phenomenon that
[04:25] happens when you focus intently on
[04:28] something you get this sense of tunnel
[04:30] vision you kind of focus on what's in
[04:32] front of you and everything behind you
[04:34] starts to blur out well we want to do
[04:36] this with audio the thing that you're
[04:38] looking at intently comes sharply into
[04:41] focus in the mix and then everything
[04:43] else drops back into the background and
[04:45] it allows for better immersion it really
[04:47] kind of has that realistic feel to it
[04:49] cuz it's a natural phenomenon The
[04:51] Listener Focus effect is sometimes
[04:53] called the cocktail party effect so I
[04:56] thought I'd load into Cafe Misan to
[04:58] demonstrate it to today so here we are
[05:01] in game I'll enable some debug commands
[05:03] so we can visualize what the audio
[05:05] engine's doing the gray balls represent
[05:08] a neutral Focus because we're not paying
[05:10] attention to any person in the bar right
[05:12] now I'll play a little dialogue so you
[05:15] can hear the reference levels what do
[05:17] you want whiskey beer or whiskey can
[05:21] hear the bartender struggling over the
[05:23] music and art over the other side is
[05:26] barely
[05:27] audible now imagine we're really thirsty
[05:30] I set the focus to be on the bartender
[05:32] the music dies
[05:34] down and there are red bulls represent
[05:38] negative Focus what do you want whiskey
[05:42] beer or whiskey we can hear the
[05:44] bartender clearly now if we Zoom back
[05:47] out we can hardly hear art at
[05:50] all imagine we're not thirsty we're
[05:53] looking for a mission we're here to meet
[05:54] someone I set the focus on to
[05:58] eart the green green balls represent a
[06:01] positive Focus so here I'm using the
[06:04] effect additively I'm not only bringing
[06:06] down sounds that we're not interested in
[06:08] but we're raising eart so that we can
[06:10] hear him from all the way across the bar
[06:13] look at and that's how the listener
[06:15] Focus effect works we've previously
[06:17] taken looks at some of the background
[06:19] effects and details the various teams
[06:21] have been developing to make lorville
[06:23] feel like a bustling kinetic location
[06:25] one such detail that is being worked on
[06:27] currently is the presence of AI Control
[06:29] old non-combat ships taking off and
[06:31] landing at the city's Interstellar
[06:33] Transit hubs here is Andre beu to walk
[06:36] us through the process of getting these
[06:38] ships into and out of
[06:40] [Music]
[06:43] lorville hello my name is Andreu I'm a
[06:46] senior system designer on Star Citizen
[06:49] at the moment for 33 I am working on
[06:51] enabling civilian AI ships to appear
[06:55] over lville then make their way down to
[06:58] the city touch down stick around for a
[07:00] bit take off again make their way back
[07:02] to orbit and then Quantum travel
[07:04] somewhere else what I can show you here
[07:07] is in a test environment what this looks
[07:09] like so this is a star farer coming down
[07:12] from orbit via a spline which is
[07:14] basically a pre-placed path once the
[07:17] star farer has reached this placeholder
[07:19] landing pad it will switch over to the
[07:22] takeoff and Landing system which is
[07:24] powered by uh the ifcs it will then
[07:27] touch down stick around for a few
[07:29] seconds
[07:30] though this is still placeholder in the
[07:31] final version they will stick around for
[07:33] longer the ifcs lets it take off again
[07:37] and then it switches back to the
[07:39] pre-placed spline the path which will
[07:42] take it back to orbit launch sequence
[07:46] complete this is the environment where
[07:48] the city will be but with everything
[07:50] else but the splines made invisible the
[07:53] spines are those blue paths they are
[07:56] coming down from the
[07:57] orbit to the surf surface of the
[08:00] planet where the landing zones are which
[08:03] are those lzs here and then there are
[08:06] more splines going back into orbit what
[08:09] I'm doing right now is I'm trying to
[08:14] give the ship a more cinematic feel by
[08:17] adding something that looks like the air
[08:19] bre that ships usually do in other
[08:22] cinematic products so in this case for
[08:25] example this is the orientation of the
[08:27] ship which I can adjust on the spine so
[08:29] I will pull up its nose a bit and on the
[08:32] next point maybe a bit
[08:34] more and then on the final one it goes
[08:38] down a bit again and this is when ifcs
[08:40] takes over
[08:43] and on the next
[08:45] spine everything is already taken care
[08:48] of by the automated system but if for
[08:51] example I wanted it to fly a bit more
[08:53] straightfor a bit I could do
[08:56] this or to bank around
[09:02] so this is what we're working on for 33
[09:05] we hope you like it and see you in the
[09:08] verse here we see more of the props in
[09:10] this case cable sets being polished and
[09:12] implemented into utilitarian hangers and
[09:15] other locations around
[09:17] lville designers continue working on
[09:19] combat AI for FPS situations with
[09:22] attention being given to Sharp
[09:24] turns Guard and Patrol behaviors using
[09:26] new idle animations hit reactions both
[09:29] in and out of
[09:31] cover and search path
[09:35] logic anyone joining us on October 10th
[09:38] in Austin Texas for citizen con 2948
[09:41] should take advantage of a fun contest
[09:43] we have going right now yeah you can
[09:45] enter your best ideas for new emotes on
[09:48] Spectrum the winner will get to direct
[09:50] professional map actors live at citizen
[09:52] con where their winning emote will begin
[09:54] its Journey towards in-game
[09:56] implementation just imagine every Star
[09:58] Citizen we'll be thinking of you
[10:00] whenever it is you're doing the Hoke
[10:02] Pokey or really other dance types yeah
[10:06] okay and with that we say goodbye for
[10:09] this week don't miss reverse the verse
[10:11] back in the USA and streaming live on
[10:13] Twitch tomorrow big thanks to our
[10:15] subscribers who sponsor the shows and of
[10:17] course thank you to our backers yes
[10:19] thank you until next time we will see
[10:21] you around the
[10:24] [Music]
[10:38] thanks for watching for the latest and
[10:39] greatest in Star C in Squadron 42 you
[10:41] can subscribe to our Channel or you can
[10:43] check out some of the other shows and
[10:45] you can also head to our website at www.
[10:47] robertsspaceindustries.com
[10:50] thank you very much for watching

# Star Citizen Live Gamedev: Making VFX

**Video:** https://www.youtube.com/watch?v=khH5invHmLI
**Date:** 2022-08-05
**Duration:** 1:01:04

## Transcript

[00:00] and then uh
[00:01] wait where's this and we're live hi
[00:03] everybody
[00:04] uh welcome to star citizen live game dev
[00:07] making vfx i'm your
[00:10] host uh uh uh
[00:12] creative
[00:14] i forgot my title uh jared huckaby
[00:16] welcome to the show uh if you've never
[00:18] seen star citizen live before it's where
[00:20] we take about an hour out of the end of
[00:22] our week and we hang out with some of
[00:24] our developers uh usually the poor uh
[00:27] unfortunate people that i convince uh to
[00:30] to stay late on their fridays when
[00:32] they're trying to go home and do this
[00:34] with me uh so the this week's victims
[00:38] are two esteemed members from our uh
[00:40] manchester vfx team uh we we have we
[00:43] have mike snowden the the the
[00:46] the vfx director
[00:48] say hi mike
[00:49] hi
[00:50] and we have leo or what what's your tile
[00:53] like principal vfx engine programs i
[00:55] don't remember
[00:57] yeah principal vfx programmer oh see i
[01:00] was i was close i was close yeah
[01:02] close enough
[01:04] i i literally have anomic of asia i got
[01:06] diagnosed last year it's like i cannot
[01:09] hold names so i got an excuse i try not
[01:11] to use it all right so uh
[01:15] star citizen live game dev if you've
[01:16] never seen a game dev before it's where
[01:19] uh instead of the usual hour-long q a iq
[01:22] q a we are going to make something uh
[01:26] with a feedback from the community
[01:29] we do this to demonstrate process
[01:32] and show a show a bit about how we work
[01:34] if you're watching live on twitch right
[01:36] now you should see a poll at the top of
[01:38] the chat right now using the twitch's uh
[01:40] in-house uh poll thing uh if you're
[01:43] watching on youtube uh later uh sorry
[01:48] uh our four choices this on this week's
[01:50] show are terraformer beam uh vehicle
[01:55] thruster
[01:56] uh dome shield
[01:58] and the ever popular explosions
[02:02] um mike you provided these four choices
[02:05] and you will be doing the work how did
[02:07] you narrow it down to these four choices
[02:10] they just felt like fairly
[02:12] kind of sim relatively simple things to
[02:14] be able to recreate in a shortish space
[02:16] of time and to be able to and kind of
[02:19] receive
[02:21] direction from from the people watching
[02:25] uh yes and it as the uh
[02:27] the standard disclaimer that we give out
[02:29] every game dev episode uh very little
[02:33] can effectively be made in less than an
[02:35] hour
[02:36] so remember you are going to see a
[02:39] truncated uh abbreviated experience here
[02:43] uh but you know it's still part part and
[02:45] parcel of open development in the star
[02:47] citizen process to show how our
[02:50] developers work and as much of their
[02:52] process as we can
[02:54] right now uh it is neck and neck between
[02:57] terraformer beam and dome shield uh it
[03:00] was an early lead for terraformer beam
[03:01] and then dome shield is is coming back i
[03:04] really thought explosions would have
[03:05] been uh would have would have been
[03:08] stronger but i guess you know
[03:10] everybody's seen explosions
[03:12] um
[03:13] leo well we're gonna let this go for
[03:15] another minute so what does a
[03:18] graphic what does a vfx graphics
[03:20] programmer do what which what's your
[03:23] day like
[03:26] um we support the vfx team and
[03:30] yeah just features tools um anything
[03:34] that
[03:36] we want to kind of achieve the nice
[03:38] visuals that artists vfx artists
[03:41] want to implement
[03:45] there is quite a bit of bug fixing in
[03:46] there but also feature developments um
[03:50] features range from
[03:52] fire hazard to currently we're also
[03:54] working on damage maps which is a big
[03:56] project for the salvage feature um but
[04:00] yeah there are
[04:02] are quite a lot of features in the
[04:03] pipeline that are being planned out as
[04:06] well
[04:07] um and then in terms of kind of tools
[04:10] it's it's like the the particle editor
[04:12] that mike will be showing
[04:15] it yeah we we have quite an
[04:17] extensive particle system and if there's
[04:21] anything new in there that needs to be
[04:24] yeah
[04:25] that kind of the artists want to achieve
[04:28] then we
[04:29] kind of talk to them and and try and
[04:32] implement their
[04:33] requests i guess yeah
[04:36] um and mike uh
[04:39] is there anything in star citizen that
[04:41] doesn't get touched by vfx at some point
[04:44] but uh are you
[04:46] we we talked with the ui guys and you i
[04:48] guys touched just about everything audio
[04:51] touches just about everything
[04:53] okay certain anything you like they
[04:55] never let us play
[04:57] we never get to work on that
[04:59] there's not much i mean i guess
[05:01] i guess
[05:02] characters in star citizen there's kind
[05:04] of less character specific vfx work but
[05:07] there's still there's still effects
[05:08] requirements for characters
[05:10] blurred and
[05:11] um
[05:13] eva thruster effects and things like
[05:15] that so no not not much really there is
[05:17] a lot of yeah pretty much everything has
[05:19] vfx in it at some point
[05:22] so we are going to call that uh it looks
[05:24] like dome shield uh uh one with 48 of
[05:28] the vote
[05:29] so
[05:30] yeah
[05:31] where do we start with a dome shield
[05:34] well because of time constraints yeah
[05:39] did take the liberty well what i'm going
[05:41] to do i'm going to i'm going to
[05:42] depending on what the what people
[05:43] request and what the feedback is
[05:45] i'm going to use the particle system to
[05:47] create the dome
[05:49] um
[05:50] so i've said i've started myself and
[05:51] give myself a bit of a head start but
[05:53] i'll just quickly talk through what i've
[05:54] got here
[05:55] so
[05:56] um yeah this is this is a previously
[05:58] placed particle effect which is
[06:00] uh
[06:01] i'll just kind of use one of the things
[06:03] that leo gave us which takes me to the
[06:04] database so by clicking on this option
[06:07] here in the particle menu that's taking
[06:08] me to the to the database which shows
[06:10] the
[06:11] that's the library
[06:13] where the particle lives and
[06:16] uh yeah i've got i'll switch it off i'll
[06:20] just kind of pretend
[06:21] i've started from scratch so
[06:23] when i drop a particle in from scratch
[06:25] there's literally nothing there it's
[06:26] literally just it's just an empty
[06:28] particle effect
[06:30] so the first thing i need to do is give
[06:32] it a positive count so here you can see
[06:33] i've got a count of 2000
[06:35] uh if i didn't
[06:37] uh i'll need to make sure it's enabled
[06:39] so i'll enable it
[06:40] i'm also going to set it to continuous
[06:42] by setting it to continuous it means
[06:44] it's going to actually constantly spawn
[06:45] rather than being a burst effect
[06:48] um so
[06:50] the reason that this particle effect
[06:51] itself has actually got this kind of
[06:53] dome dome shape
[06:54] uh is because i've got some speed on it
[06:57] and i've got a gravity scale so if i
[06:59] switch off the gravity scale
[07:03] uh the speed is kind of pushing it out
[07:04] like a disc
[07:06] and the reason it's pushing it out like
[07:07] a disc is because i'm using the velocity
[07:09] direction from the shape
[07:12] so on its own this effect let me just
[07:14] switch the speed up as well so first
[07:15] thing i'm going to see when i make an
[07:16] effect is it's just going to look like
[07:18] this it's just going to be like a blob
[07:19] on the screen
[07:20] so um
[07:22] i gave it some speed that's obviously
[07:24] going up in the wire
[07:25] which axis is it i always get confused
[07:28] yeah up in the y axis
[07:31] um
[07:33] uh because i've given it an emission
[07:34] size so emission size is basically
[07:35] defining like the bounds
[07:38] of
[07:39] the effects if i increase that to one by
[07:42] one
[07:43] you can kind of see
[07:45] uh and actually there's a
[07:48] there's an emission debug draw which
[07:50] will show what that bounce is
[07:52] uh
[07:54] bring that back down was it point one
[07:55] coming would i even have it set doesn't
[07:57] really matter
[07:58] so certainly point one and what i did
[08:00] was to get that to get it forming that
[08:02] disc i was using this setting here which
[08:04] is velocity direction for shape and
[08:06] that's that's literally just gonna use
[08:08] the the shape
[08:10] i guess normals of the of the shape to
[08:12] to fire it in that direction because i
[08:14] don't have any
[08:16] value in in this middle
[08:19] uh axis
[08:21] it's it's keeping it basically 2d so
[08:23] it's like a it's a disc if i give that
[08:25] point one as well it's just firing
[08:27] everything out radially
[08:29] so
[08:30] um full disclosure there's there's tons
[08:32] of ways that i could make a dome based
[08:35] effect i could just use
[08:36] like you focus on using the mesh
[08:38] entirely but i wouldn't really get to
[08:40] use as many of the settings if it did
[08:42] that it might be a bit more a bit more
[08:44] kind of boring to to view
[08:46] um
[08:48] okay so the other thing that i sorry
[08:50] gotcha oh no i was gonna say i don't
[08:51] think it's any surprise that there's no
[08:53] one way to
[08:54] build anything in video games that's one
[08:57] of the reasons we call it development
[08:59] and not construction it's not it's not
[09:00] enough to just make a thing you have to
[09:02] figure out the most effective way to
[09:04] make a thing you have to figure out the
[09:06] the most cost efficient way to make a
[09:07] thing and you have to figure out a way
[09:09] to make a thing where it works with all
[09:10] the other things that you've already
[09:12] made and all the things you ever will
[09:14] make
[09:15] lots of considerations
[09:17] yeah yeah and also playing to the
[09:18] strengths like i see our particle system
[09:21] as one of our
[09:23] real strengths with our with our with
[09:25] our engine so it's always fun to to use
[09:27] the the particle system
[09:29] all right so
[09:30] it's obviously not a dome at the moment
[09:32] that's because i got rid of the gravity
[09:34] scale
[09:35] gravity scales is is basically just a
[09:38] multiplier of the actual gravity in the
[09:39] level uh by default in a test level
[09:42] there wouldn't be any gravity but i've
[09:43] got a gravity box in here
[09:45] i've also got a wind volume but we
[09:48] probably won't really care about that
[09:51] for this
[09:52] so just quickly
[09:54] get rid of all the debug stuff so
[09:58] you have to you have to stop me if i'm
[10:00] whizzing the camera around too quickly
[10:02] as well because i
[10:04] i'm aware that sometimes that's a little
[10:05] bit jarring when people are showing
[10:07] things
[10:08] um
[10:09] so yeah you kind of see the the the
[10:10] broad shape of it there that that's kind
[10:12] of working for me scale wise uh this is
[10:16] kind of i'll jump into game mode in a a
[10:18] little bit later on but yeah this is
[10:20] kind of
[10:21] the player is
[10:22] it's it's quite kind of tight tightly
[10:24] conforming to the to the player height
[10:26] so it's like a player force field okay
[10:28] so yeah you're thinking like a
[10:30] deployable dome shield that the pla that
[10:32] the player could put around themselves
[10:34] to protect why not sure yeah
[10:37] why not
[10:38] um
[10:40] so
[10:41] that's yeah that's that's the main shape
[10:43] that that's kind of me set up now to
[10:45] really start to be able to to sculpt
[10:47] this in a way that obviously you could
[10:50] go in a million different directions for
[10:52] this from a stylistic point of view from
[10:53] an artistic point of view
[10:55] uh
[10:56] do you want do you want to give me some
[10:58] feedback should i just freestyle it what
[11:00] would you like to do jared what do you
[11:01] need to know
[11:04] what should it look like
[11:05] oh you want you want it to
[11:08] what are options you want colors you
[11:09] want texture what are you what are you
[11:11] looking for yeah uh just whatever
[11:13] whatever people want like what what what
[11:15] is the thing what what what's the reason
[11:17] it exists is it is it plasma is it
[11:20] is it is it kind of is it something more
[11:21] kind of um
[11:24] like more like digital
[11:26] there's so many things that we can do
[11:27] i'll just give you a quick example okay
[11:28] so at the moment there's no texture on
[11:30] each particle it's just a black it's
[11:32] just a black square if i just drop
[11:34] my old faithful um
[11:37] glow particle set it to additive
[11:40] uh this is in the appearance
[11:42] settings so i'm using a texture now
[11:44] whereas before there was no texture
[11:46] assigned to the quad each particle's got
[11:48] got that got that square
[11:50] uh i'm gonna whack on some emissive
[11:52] lighting
[11:54] and i'm gonna i'll just crank it up
[11:55] actually
[11:56] so this is this is this emissive
[11:58] lighting isn't it is measured in knits
[12:00] so it's kind of technical
[12:02] physically based within within reason
[12:05] but if you see that
[12:07] kind of glow that we get now um i'll do
[12:10] even crack it up even more
[12:14] just done another one but i don't know
[12:16] sorry why not
[12:20] so now we've got something that's
[12:22] looking much more like there's energy
[12:24] coming from that now it's looking a lot
[12:25] more like it's some kind of
[12:27] like a missive energy source
[12:30] although it's obviously looking a little
[12:32] bit a little bit blobby because it's
[12:33] just these
[12:34] these dots and for those who are
[12:36] watching live at home uh what you're
[12:38] seeing is the zoom delay uh more more
[12:42] data information going through zoom and
[12:44] zoom tends to
[12:45] tends to crap out a little bit so
[12:47] yeah that's a good part i mean
[12:49] anytime you see
[12:51] particle effects fast moving effects
[12:54] uh compression and streaming can kind of
[12:56] struggle a little bit um so i'll drop
[12:59] that emissive down because that's that's
[13:01] obviously affecting the exposure so one
[13:03] of the things that i mentioned you'll
[13:04] see that the brighter the the the
[13:07] um the effects that that exposure is
[13:09] kicking in so it's darkening and
[13:10] everything around it so
[13:13] i could actually use the lighting
[13:16] toolbar to clamp that
[13:18] do you remember that the dome shields
[13:20] from
[13:21] from phantom menace the ones that the
[13:23] the gungans used
[13:25] i do i do um because we
[13:28] we recreated them
[13:30] uh in a game that i made a former
[13:32] company
[13:35] you think we could pull off something
[13:36] approximating
[13:39] that
[13:41] before i volunteer you for
[13:43] something we could we could try it but
[13:45] the thing with that is it's more like
[13:47] that would that's almost like a kind of
[13:49] like almost like a
[13:51] i think of it like sort of per lesson
[13:53] it's more like i think that would be a
[13:54] mesh based approach so that would
[13:57] probably work that's right that's fair
[13:58] that's right we could we can we can
[14:00] maybe try it later on if i get time
[14:02] because i do have an actual
[14:04] uh sphere mesh that there's a kind of
[14:06] backup that i was going to use
[14:08] um okay i feel like i'm kind of rambling
[14:10] and i'm not really making much progress
[14:12] here so would you what do you want to do
[14:14] joe do you want to just start kind of
[14:16] noodling away freestyling let's go to
[14:18] digital
[14:20] digital okay you you said that earlier
[14:22] what what make what makes a shield look
[14:24] digital
[14:26] so typically for me it's more like you
[14:28] sort of emphasize the pixels and and
[14:30] that that kind of thing so i'm just
[14:31] going to go straight to uh
[14:35] just go straight to a square texture
[14:37] what can i use
[14:42] just stay in the flow folder
[14:44] uh as for people who in the chat are
[14:47] asking are you actually going to do dome
[14:49] shields for the game that's a question
[14:51] for designers
[14:52] uh who who make gameplay decisions and
[14:55] then send them over to
[14:57] vfx people and saying now you need to
[14:59] make this
[15:00] so uh yeah
[15:01] the answer is we don't know
[15:04] not the folks here on this show
[15:06] if someone want if if a designer decides
[15:09] they need it for the game then we'll be
[15:11] ready to make one for them no problem
[15:14] okay so dead simple thing i mean i'm
[15:16] just using like a square texture so for
[15:17] me that's instantly like my mind is
[15:19] reading that like sort of pixel pixely
[15:22] kind of thing so
[15:24] it's a very very simple change i've
[15:26] obviously changed the color as well uh i
[15:29] feel like that's already reading a bit
[15:30] more digital than it than it was before
[15:32] yeah
[15:33] um linear two says alternatively the
[15:35] gameplay designers watch the stream and
[15:37] go we need this let's go that has
[15:39] happened more than once
[15:41] that has happened more than once
[15:44] yeah not necessarily that the thing we
[15:45] made on stream is what gets me in the
[15:47] game but the thing that we make on
[15:48] stream that inspires an idea that that
[15:51] then turns into something else so let's
[15:54] just let's just say i i i i keep a
[15:56] little list
[15:57] uh in the back of my mind of all the
[15:59] things that are in the game because of
[16:00] some dumb idea that started with some
[16:02] dumb thing i did
[16:04] and it's growing
[16:06] i'm very pleased with that list
[16:09] so
[16:10] what i've just done is i've just set the
[16:12] time scale to zero basically just frozen
[16:14] the effect in time and i just wanted to
[16:16] kind of show um
[16:18] kind of cheating a little bit here
[16:19] because i'm using a i should just
[16:22] i am quite lazy i'm being honest
[16:25] um you already said you're a dragon no i
[16:27] am i mean no i i i
[16:29] i'm always looking for like the easiest
[16:30] way to to do a thing because then if i
[16:32] can do it more easily then i can do it
[16:34] more quickly and then i can do more
[16:35] things so
[16:37] the fastest route
[16:38] to the to the point i'm trying to get to
[16:41] is my favorite one um so what i've done
[16:43] here is instead of just finding like a
[16:45] much crisper square texture which we've
[16:47] definitely got
[16:48] although i kind of glaze over sometimes
[16:50] when i'm when i'm when i'm trying to
[16:51] find things
[16:52] uh against the clock i'm like oh my god
[16:54] i can't find it so uh
[16:56] you can see here like it's the kind of
[16:58] glow is built in yeah i mean that's
[17:00] that's actually pretty i quite like that
[17:02] you know that but if i was trying to if
[17:04] i was thinking again staying on the kind
[17:05] of the digital theme i i want it to be
[17:08] crisper so what all i'm doing here is
[17:10] i'm using the alpha erosion setting that
[17:11] we've got
[17:13] and that's essentially like eroding
[17:15] the
[17:16] uh leo d is there like a more or
[17:19] technical description i'm just going to
[17:20] say it's like eroding the alpha so it's
[17:23] so it's clipping away that the the alpha
[17:25] the index
[17:27] of that alpha in the texture um yeah
[17:30] which is that yeah it's basically
[17:33] clipping curling
[17:34] based on the alpha value of the texture
[17:37] yeah
[17:38] it's quite a cool technique actually
[17:40] it's very very very common one as well
[17:41] in
[17:43] vfx
[17:47] that was a happy accident i don't know
[17:48] if you saw what i just did then that was
[17:50] pretty cool
[17:52] i said it i set the time skill to minus
[17:54] one
[17:55] and it reversed time
[17:57] does that work
[17:59] shouldn't do but it does look at that
[18:04] we've been able to track view that happy
[18:06] accidents
[18:08] that's amazing cool all right um
[18:10] chad is saying that you know at some
[18:12] point we need to add a trail effect
[18:15] a trail effect oh what a trail to each
[18:19] each pixel yeah it's like so we we can
[18:21] see where they where they were as
[18:22] they're moving along
[18:24] it's a great idea like little
[18:27] here's what we're comets to do then
[18:28] we're going to make a child particle
[18:32] so the child particle i'm going to use
[18:35] just going to drop this down
[18:37] so i'm going to use another another kind
[18:39] of
[18:40] lazy lazy tricks not really lazy this is
[18:42] just good a good good practice we've got
[18:44] an inheritance option here which is
[18:46] which is
[18:47] by default is set to system
[18:49] um
[18:51] i'm going to use parent inheritance on
[18:53] this child particle what that's done is
[18:54] that that child particle is now
[18:56] inheriting all the properties from the
[18:59] parent
[19:01] uh i can now override
[19:03] if i make changes to the parent the
[19:05] child will inherit all them changes just
[19:07] just by default
[19:09] which is great like if you
[19:11] i still see it actually with with the
[19:13] vfx i swear there'll be you'll have an
[19:16] effect that's got kind of three four
[19:18] maybe more
[19:19] children hierarchy and they're all kind
[19:21] of similar that this kind of needs to
[19:23] sort of roughly match what the parents
[19:24] doing
[19:25] um but they're not using parent
[19:26] inheritance so it's a bit more of a
[19:28] manual process each time they make a
[19:29] change to the to the parent they've got
[19:31] to
[19:32] do the changes manually to the child so
[19:34] i'm
[19:35] using parent inheritance what i'm going
[19:36] to do is i'm going to override
[19:40] the count of the child what i'm going to
[19:42] now do is put this back up to 2000.
[19:46] this child has got a count of 1
[19:50] i'm then going to set it to uh
[19:53] spawn i'm going to change the spawn
[19:56] excuse me the spawn settings of the
[19:58] child
[19:59] to be from parent birth
[20:01] so
[20:04] so what's happening now is i need to
[20:06] just zero out a few settings it's a
[20:08] little bit ironic because i'm saying
[20:09] about like i wanted to inherit all the
[20:11] settings but i'm actually going to get
[20:12] rid of a lot of them so i'm killing
[20:15] uh
[20:16] the speed and gravity scale this might
[20:18] just might kind of in in zoom at the top
[20:22] in the top of the page at the top of the
[20:23] window mic there's an option to optimize
[20:26] for video it takes the resolution down
[20:28] but it gives us a little more speed
[20:32] yeah i don't see you guys anymore
[20:35] because it automatically gets rid of
[20:37] doesn't it
[20:38] uh
[20:39] that definitely changed go go back to
[20:41] scene let me see it there
[20:43] how does that look it's smoother but
[20:45] it's it's less detailed and that's also
[20:47] that's always the trade-off with zoom
[20:49] yeah yeah yeah well i'll stay i'll stay
[20:51] with this if people want me to kind of i
[20:53] don't know if you want to like do time
[20:55] scale zero every now and then just kind
[20:57] of see how it looks in a single frame
[20:59] then i'm happy to do that um that's no
[21:02] this looks bad and we can't read the
[21:03] screen anymore let's go back
[21:05] we can't read what you're clicking on
[21:07] anymore
[21:08] okay uh
[21:09] you know when
[21:10] once we've returned to office once we're
[21:13] all there and all in the same place we
[21:15] won't have this issue anymore
[21:17] you'll just be sitting right next to me
[21:19] on a computer that's right into the
[21:20] stream computer and
[21:21] it'll be awesome
[21:23] someday indeed i think
[21:26] uh one quick thing i just did then as i
[21:28] said the texture shot and i've done it
[21:29] on the child and the textures set the
[21:32] texture sharpness to one which will just
[21:34] re-emphasize it that'll just that
[21:36] basically puts it to the it changes the
[21:39] the mid map
[21:40] uh the the lowest map it sets it at the
[21:42] highest possible uh texture quality i
[21:45] guess so that'll just keep it crisp and
[21:46] sharp uh right okay so
[21:50] making it what am i doing making a trail
[21:52] owner so i'm gonna give it i'm gonna
[21:53] give the child a count off let's just do
[21:55] 10 for now
[21:57] for people in the chat asking when
[21:58] questions
[22:00] the answer to all when questions is
[22:01] always the same
[22:04] when it's ready
[22:07] so this is doing some weird things i've
[22:09] got to debug this slightly this looks
[22:12] good too you guys know better
[22:16] is it spawning
[22:18] so i've got a lifetime
[22:20] i've got a light so i need to just do a
[22:22] little bit i need to just step back and
[22:23] just think about what i've just done
[22:25] so it's spawning
[22:27] it's like it's like it's like well that
[22:29] kind of looks cool
[22:31] there are
[22:32] there can be happy accidents quite
[22:34] frequently when you're working with
[22:35] effects because there's so many
[22:36] different combinations you don't always
[22:38] expect
[22:40] excellent i think i know what's
[22:42] happening it's is it the
[22:45] so
[22:46] it's spawning every
[22:48] like every second after the particle
[22:50] response and because every second is
[22:53] always at the same distance from the
[22:55] original point you get these rings where
[22:57] the child particles spawn
[22:59] i think i need to just tell you what i
[23:01] need to just i'm going to change the i'm
[23:03] going to change the color
[23:05] right the actual vfx is screaming and
[23:08] screaming at me another what are you
[23:09] doing like it's so obvious what's gone
[23:11] wrong um
[23:13] it's not gone wrong it's just it's just
[23:15] doing a thing
[23:16] so uh we have a running gag on seo where
[23:19] people forget their names like if if
[23:22] if people can forget their names in the
[23:24] heat of a live show where you've got the
[23:26] pressure
[23:27] you're allowed to forget what a
[23:29] what what a variable
[23:31] i almost use my one swear right there
[23:34] i almost use my one
[23:43] leo i'm gonna i'm gonna risk
[23:45] that weird flickering issue i'm gonna
[23:47] use
[23:49] trail segments on the child to make it a
[23:51] proper a proper trail
[23:53] if this is gonna work living dangerous
[23:55] mike
[24:00] i don't think it likes it now it looks
[24:02] like a lady gaga wig
[24:05] let's just try
[24:10] i'll do that do you know what i'll tell
[24:12] you what i'm quickly gonna do
[24:15] i'm gonna quickly
[24:20] see you later red wolf one
[24:22] it's not a train station you don't have
[24:24] to announce your departure
[24:25] that's cool
[24:29] people are people are switching off
[24:34] so
[24:38] all right test i'm going to snap that
[24:41] yeah
[24:43] out the way
[24:48] i'm going to give that
[24:54] give that texture
[25:02] okay see that was weird see what i had
[25:05] to have to do then was it it wasn't
[25:06] showing up and i was thinking why is it
[25:08] not sure enough i had to reload the
[25:10] entity for it to actually appear
[25:12] um
[25:16] so what i'm going to do now i'm just
[25:17] going to i'm just going to prove that my
[25:20] very simple parent child hierarchy is
[25:22] actually
[25:24] valid and correct and isn't isn't
[25:27] isn't causing me more problems so the
[25:29] more complex you go with the effect and
[25:31] the more you try and change it when it
[25:32] goes wrong that's when it becomes really
[25:33] difficult so it's always good to kind of
[25:35] sort of extract
[25:37] um
[25:38] like part of what you're trying to do
[25:40] and just sort of just make that more
[25:42] simple to to debug so this is my parent
[25:45] i'm going to make a child for this
[25:47] excuse my terrible naming conventions
[25:50] um
[25:52] set that's continuous
[25:57] folks who might remember
[26:00] yay old days i remember uh
[26:02] atv in
[26:05] 2016 that
[26:07] had a terrible naming convention seen on
[26:10] screen
[26:11] about 40 times
[26:13] that
[26:14] we learned to zoom in when we captured
[26:16] gameplay footage after that
[26:19] so your naming convention is fine
[26:26] this guy needs to make shield noises
[26:30] [Music]
[26:34] of course
[26:35] not too much
[26:50] this yeah so it's working the trailer is
[26:54] working
[26:55] um
[26:57] how strange
[26:59] so the green particle
[27:02] is the trail
[27:04] if i just give it a much shorter life
[27:07] yeah
[27:09] give it a bit of i'll tell you what
[27:11] negative speed
[27:13] yeah bizarre
[27:16] there you go it's like a little
[27:18] little tiny kind of mutual can you just
[27:21] turn this into the dome now
[27:24] well
[27:27] i'll just copy this
[27:44] right scrap it we're not going to worry
[27:46] about the trails for now because it's
[27:47] just gonna i'm just gonna lose myself
[27:49] uh i'll tell you what i'm gonna do i'm
[27:51] gonna use
[27:55] segments on the parent effect itself
[27:59] and that will just
[28:03] hopefully do what people are asking it
[28:04] to do so that's kind of showing
[28:06] hopefully that and again is this because
[28:08] of the
[28:09] compression but um
[28:12] what i was trying to do before was use a
[28:14] child to trail because that would have
[28:15] given me more options more i could have
[28:17] done some more cool things with the with
[28:19] the trailing effect but what i've got
[28:20] here
[28:21] is um
[28:23] go inside it for a bit
[28:26] i'm using our
[28:29] we've got ribbon and motion trails
[28:31] trail segments this is sort of like a
[28:36] an approximation of a motion trail
[28:39] as it were
[28:40] um and you can obviously change the the
[28:43] the length of time the trailer last one
[28:45] that looks kind of
[28:47] i don't know we're back to another lady
[28:48] gaga wig now
[28:50] yeah there's a lot a lot of the more
[28:52] lady gaga references and i was expecting
[28:54] to be honest
[28:56] i have multitudes man
[29:00] uh can i just can i just do a thing can
[29:02] i just
[29:03] it's just
[29:05] yeah okay
[29:06] just gonna
[29:08] um
[29:11] oh sia would be more accurate skydancer
[29:14] good call
[29:15] that was much more ceo wig than a lady
[29:17] gaga wig i stand crazy
[29:22] right i'm gonna
[29:23] i'm gonna use uh spawn at
[29:27] parent death on this child
[29:31] oh wait no no what's up sorry set that
[29:33] back to one
[29:35] set list of parent inheritance
[29:38] uh
[29:39] set this count
[29:42] to two
[29:44] get back
[29:46] to 2000 on the parent
[29:49] whoa
[29:50] okay
[29:54] oh yeah
[29:56] like straw hats
[30:00] what did you say like a straw hat
[30:02] yeah
[30:03] we just illustrated the difference
[30:05] between you and i leo
[30:08] if there was a straw hat in star citizen
[30:10] i i know full well that you'd your
[30:13] character would be wearing one leo
[30:15] yes yeah yeah definitely
[30:18] all right quick explanation of what i've
[30:20] just done so i've i've used
[30:23] uh i've used parent and title no sorry
[30:25] wrong i've used the parent and child
[30:27] hierarchy again what i've got in this
[30:29] case is i've got
[30:31] the child
[30:32] spawning when the parent dies now as it
[30:34] happens i've just got the parent
[30:36] um
[30:39] it's not car i don't know anything i've
[30:40] just got it set so it kind of roughly
[30:42] dies
[30:45] i'll just drop it down a bit in fact
[30:47] yeah oh yeah yeah see i've gone too low
[30:49] so it's basically the parent is is dying
[30:52] and when it dies there's a child
[30:53] particle that's getting spawned from
[30:56] that and then the child is it's because
[30:57] i've used parent inheritances it's
[30:59] inherited a lot of the settings from the
[31:01] from the parent which is actually quite
[31:03] again like a happy accident i wasn't
[31:04] really
[31:05] expecting that almost like doughnut uh
[31:08] formation to come from them it's because
[31:10] i've got velocity direction shape
[31:13] take that go ahead and switch back to uh
[31:15] optimizer video
[31:19] okay
[31:20] uh
[31:27] yes
[31:29] how's that
[31:32] it's a reminder to folks watching at
[31:33] home uh the
[31:35] frame rate issues or with zoom not with
[31:39] the editor or the engine or the
[31:40] workspace or
[31:42] microsoft oh yeah yeah don't
[31:44] don't worry about that the the threat
[31:45] the frame is absolutely fine you can
[31:47] stay in this mode for a little while
[31:49] okay
[31:51] right okay we now know what everything
[31:53] says
[31:55] i'm gonna just tidy this up a little bit
[31:57] i'm gonna reduce the size over the life
[32:00] the riyadh will see the direction shape
[32:04] what is this this is the new sombrero
[32:06] shield that's coming in out the 318.
[32:12] go make a write a thread
[32:16] right
[32:17] so now we're starting to what what i
[32:19] really want to do i i feel like i have
[32:20] gotten a little bit sidetracked i want
[32:22] to kind of start layering this up i want
[32:23] to start adding complexity to to the
[32:25] effect and one thing i've just done
[32:26] there is i've checked i've checked color
[32:28] well z buffer option in in the collision
[32:32] section which uh backers will be well
[32:35] aware we've talked about this a lot of
[32:36] times this means the the particle now
[32:39] actually collides
[32:41] with the with the floor in this case
[32:44] it's colliding with the zebrafish
[32:45] specifically but it's now kind of looks
[32:48] more natural it's even though it's a
[32:49] very unnatural looking effect
[32:52] uh it's colliding with the flow
[32:54] it's
[32:55] about the sombrero
[32:58] uh i'm gonna just set this to
[33:02] thanks
[33:04] um
[33:06] would anyone mind if i drop the trail
[33:07] time down
[33:08] i feel like with the trail it's lost
[33:10] that kind of digital yeah this looks
[33:12] more digital yeah i just got the digital
[33:13] look back
[33:14] yeah just gonna quickly save um
[33:19] so they're free facing now i've set them
[33:21] to free facing before they were camera
[33:22] facing
[33:24] and with it being camera facing it the
[33:27] the the quad is always twisting to to
[33:29] face the direction of the camera when
[33:31] you're making kind of a digital effect
[33:33] that can look a little bit too random
[33:35] you want you kind of want the
[33:37] the squares to be
[33:39] like aligned as it were
[33:42] so i'm just going to leave them as
[33:43] free-facing because i feel like that
[33:44] that that works better for the digital
[33:46] theme that we're working with um
[33:49] right so back to the
[33:52] sorry no somebody put moo bot in the
[33:54] chat
[33:55] robots trying to shield for the game get
[33:56] out of here mobot
[33:58] i don't know what that is
[34:01] um probably left over from the battle of
[34:03] the bricks go away nobody likes you
[34:10] right something i just quickly did was i
[34:12] i used i've set the parent
[34:15] to
[34:16] be colliding with the zeb buffer as well
[34:18] now so that means if i increase the life
[34:23] of the
[34:24] parent
[34:28] it's
[34:28] it's now physically colliding
[34:31] but what's happening is it you can't
[34:33] kind of see that child spawning
[34:35] frantically like it was and what the
[34:37] reason for that is
[34:39] that
[34:40] because i've got child collision
[34:42] spawning when the parent dies
[34:45] the parent is alive for longer so it's
[34:47] colliding the parent is and it's just
[34:49] hanging around which kind of looks quite
[34:51] nice because it's created this this this
[34:53] nice kind of shape and form um but
[34:55] you're only kind of occasionally seeing
[34:57] this little kickback of these these
[34:59] particles the children kind of kind of
[35:01] like that it's quite quite yeah yeah
[35:03] yeah cool yeah
[35:05] um but what i'm gonna do is i'm gonna
[35:09] change the spawn options on the child to
[35:11] spawn at parent collide so now
[35:15] this just works kind of it's a bit more
[35:17] kind of robust now
[35:19] uh just go back into f11
[35:23] so every time the parent collides it's
[35:25] spawning the child and what you see if i
[35:27] just drop down below
[35:29] the this because it said before
[35:31] collision there's no there's no mesh
[35:33] there now there's no zed buffer kind of
[35:34] information there so it's just going to
[35:36] fall continually down
[35:39] um
[35:40] but that's kind of a side note really so
[35:43] now i have a challenge for you mike
[35:45] okay can the color change
[35:49] along the way i can start out blue like
[35:51] this in end
[35:53] hot pink
[35:56] great choice great choice of color
[35:58] always hot pink if in doubt yes it can
[36:01] that's that's that's the happy answer so
[36:03] um
[36:04] just gonna use
[36:07] oh look i've just found leo i've just
[36:09] found a bug
[36:12] did you see that okay
[36:13] coffee coffee color paste
[36:16] color into key and it doesn't
[36:18] doesn't like it i mean it's a nice color
[36:20] but
[36:21] it's not what i asked
[36:22] yeah
[36:24] put it on the back clock
[36:29] oh okay so
[36:31] let's go let's find a nice yes yes i
[36:34] boot i i banned moobot nobody gets to
[36:36] chill for star citizen in my stream
[36:38] except me i'm the only chill here
[36:42] um
[36:44] so
[36:46] so what's happening here is uh oh hot
[36:48] pink we said helping
[36:58] there you go jared
[36:59] so the parent this is oh this is this is
[37:01] the parent now starts blue
[37:03] turns pink now what what i need to do
[37:06] is i need to edit the child because it
[37:08] doesn't make sense that the child is
[37:10] following that exact same color
[37:13] scheme on its age because it should be
[37:14] the other way around really can i
[37:17] i'm going to swap it come on let me do
[37:19] it yeah
[37:21] i'll just cheat the engine
[37:23] um
[37:24] i've done the reverse
[37:28] in fact i'm just gonna keep hipping so
[37:30] yeah yeah
[37:32] that that's a better match now because
[37:33] obviously what's happening is the child
[37:36] is spawning when the parent collides you
[37:37] kind of want that to be
[37:39] roughly equivalent
[37:40] depending on what you've what you're
[37:42] going for visually but yeah that's got a
[37:45] bit of a kind of uh
[37:47] like synthwave neon thing going on now
[37:49] isn't it good good choice good direction
[37:51] like that
[37:52] um
[37:55] okay
[37:56] i'm just gonna i'm just gonna
[37:59] just slightly noodle away at the z
[38:01] buffer options if you want to give me
[38:03] any more kind of
[38:05] feedback or any other requests feel free
[38:08] to but i'm just going to play around
[38:09] with some of the
[38:11] elasticity options
[38:13] on these children
[38:15] uh how can i get them
[38:20] i guess one of the cool thing with the
[38:22] collisions is that if you were to put
[38:24] like a different
[38:26] object underneath like the line would
[38:28] kind of follow the objects
[38:31] we have to see this yeah
[38:34] right in that case it's going to drop
[38:37] oh there let's just go knobs let's just
[38:39] let's just
[38:43] why are they so big
[38:45] okay right now that's pretty cool
[38:48] um
[38:50] i'll just re-introduce the chaos
[38:53] of the
[38:54] velocity direction shape
[38:57] pop that speed back up
[39:02] okay
[39:04] i'm going to save i press f11 for full
[39:06] screen mode i'm going to
[39:08] go into game mode and it's not going to
[39:09] crash
[39:12] all right so
[39:14] here we go
[39:19] oh see that
[39:22] that coming through okay yep
[39:25] gives a little more profile there you go
[39:27] slowly walk through there we go
[39:30] like the t-1000 through jail bars
[39:36] i suppose it was psychiatric ward bars
[39:40] so this guy's just got digital rain
[39:44] coming right at him
[39:47] so yeah that's that's what we get from
[39:49] the zebra for collision again i
[39:51] appreciate we've shown this this before
[39:53] but um
[39:54] it it's it's kind of yeah i think we've
[39:56] gained like 300 000 new citizens since
[39:59] the last time
[40:00] so
[40:01] it's always new
[40:03] yeah good that's good
[40:06] um
[40:10] so i'm cranking up the count this does
[40:12] obviously make the effect more expensive
[40:14] just a quick quick note on
[40:16] for anyone who's noticed the the color
[40:19] of the icons changing to red what that
[40:21] means is
[40:22] by default
[40:24] this might be where i let you talk talk
[40:26] the science leo but by default our
[40:29] effects are deterministic
[40:31] and
[40:32] in very very simple terms that just
[40:34] means they're they're kind of more
[40:36] optimal
[40:37] cheaper to to have in the game
[40:40] certain things i will do to certain
[40:43] settings i will add to an effect will
[40:45] cause it to become non-deterministic
[40:48] and
[40:49] that
[40:50] can be more expensive
[40:52] there's more
[40:53] there's more kind of uh
[40:56] information that the engine needs to
[40:57] know about
[40:58] um
[41:00] so yeah it can become quite expensive on
[41:02] the pfx update cost in particular on its
[41:05] own just just doing one thing like i've
[41:07] done here isn't going to kind of break
[41:09] the game at all
[41:10] from the point of view of efficiency but
[41:12] this red color change indicates that
[41:15] it's now become non-deterministic it's
[41:16] not always obvious why it is it's not
[41:18] it's sometimes you'll make a change and
[41:20] it's like oh yeah yeah i forgot that
[41:21] that makes it non-deterministic
[41:24] um leo is there anything you want to add
[41:27] to
[41:28] that
[41:29] yeah it's it's kind of various reasons
[41:31] but like the main difference is that
[41:33] like deterministic particles is a at any
[41:36] given time during the lifetime you will
[41:38] know the exact states of a particle so
[41:41] position and all those kind of things so
[41:43] if you say
[41:45] at five seconds you know like the
[41:47] particle will be at
[41:48] an exact position while for the
[41:50] non-thermic to non-deterministic
[41:53] particles we kind of
[41:55] the state changes from frame to frame
[41:57] but because it's more random or there is
[42:00] some yeah some thing affecting it over
[42:05] frames like the the state and the
[42:07] position will not always be the same uh
[42:10] at five seconds so it's
[42:12] non-deterministic in the sense like we
[42:14] can't determine like the exact states
[42:18] over the lifetime of particle
[42:20] do
[42:21] yeah
[42:22] i know so much in
[42:23] game dev is bound by draw calls and
[42:27] stuff do do vfx
[42:29] have the same
[42:31] uh restrictions in that regard
[42:35] yes
[42:37] um it's a little bit out of my knowledge
[42:40] sphere
[42:41] but yeah in essence they they kind of do
[42:46] it's a it's a little bit out of point as
[42:48] well being completely honest that's
[42:49] where we're going to go to the graphics
[42:51] stuff and
[42:53] yeah and and hopefully you know gen 12
[42:55] and
[42:56] after that vulcan
[42:57] can free us up from these draw call
[43:00] limits we've currently got
[43:02] just i was just while leo was was very
[43:05] eloquently talking i just thought maybe
[43:07] i could just try and
[43:08] tidy up that that very obvious kind of
[43:11] central point where where this is all
[43:12] spraying out from uh
[43:16] i don't know if i want to kind of noodle
[43:17] around with it too much but
[43:19] there's various things i could do to
[43:21] tidy that up only one d shot says
[43:23] where's the emitter that's on the props
[43:25] team
[43:28] oh we'll see what see what he means yeah
[43:30] because when you say admit i mean in the
[43:32] engine terms that that's the metaphor
[43:34] the physical thing in terms of the law
[43:36] yeah um
[43:38] that'll be a little bit out of that's
[43:39] another team
[43:41] yeah
[43:42] yeah um all right what should what shall
[43:44] i do next
[43:46] [Music]
[43:48] you've only got 15 minutes
[43:50] um
[43:51] oh my goodness yeah yeah uh uh uh what
[43:54] what what do you think you can turn this
[43:56] into instead of starting over brand new
[44:00] uh i feel like i wanna
[44:03] do i wanna kind of have it powering up
[44:05] could i do
[44:07] would that would that be easy to do in a
[44:09] short space of time
[44:11] like if i just weren't
[44:13] oh yeah i know what to do
[44:19] could this be used to make hair maybe
[44:22] for a hologram character sure
[44:27] we already accidentally made some
[44:28] hairstyles earlier
[44:34] uh
[44:39] yeah so here's here's a kind of that's
[44:40] not let me just do that keep that also
[44:42] quite like
[44:44] quite like what that does what if he had
[44:46] what if he had a thruster effect coming
[44:48] in from the side and how would the
[44:50] thruster effect
[44:52] interact with the
[44:54] oh don't you well
[44:57] well
[44:58] uh
[44:59] do you mean because it's like like with
[45:01] the wind affecting the
[45:04] or particle colliding with particle
[45:07] well let's just try
[45:09] see this will work uh allie brown if we
[45:13] i'm sorry marco if we crash the engine
[45:15] it was my idea it wasn't mike's
[45:19] mark who is um have you ever played
[45:22] football with marco no
[45:26] he's so good
[45:29] let's just make that square
[45:35] this might not work so the full
[45:36] disclaimer is that this this definitely
[45:40] uh
[45:41] definitely might not work
[45:42] it's really because
[45:44] d-shot that's a question for game design
[45:46] and not bfx vfx are visuals as far as
[45:50] what their purpose and intention and how
[45:51] they would
[45:52] what they would and when it deflected
[45:54] all that stuff that's that's
[45:56] stuff determined by other teams
[45:59] i like how i'm kind of getting here it's
[46:01] probably not coming through because of
[46:02] the resolution but i like how i'm
[46:04] getting occasional glint see that leo
[46:06] something yeah
[46:07] and that's again that's just yeah it's
[46:09] kind of it's kind of not intentional
[46:11] that's just because it's free facing and
[46:13] also because of the temporary
[46:15] anti-aliasing uh one thing that i
[46:17] normally do when i'm making uh like
[46:19] really small particles is enable
[46:21] responsive a which which does that see
[46:24] the difference there
[46:25] that's quite significant um
[46:28] yeah when we when we when we changed
[46:30] over to the temporal anti-aliasing it
[46:32] actually caused quite a few problems
[46:34] with the particles but the graphics guys
[46:37] and engine guys gave us this responsive
[46:39] aa option we can also use them in pixels
[46:41] as well
[46:43] i said that's a two
[46:44] so what that'll do
[46:46] uh
[46:49] yeah yeah so
[46:51] i mean pixels can actually just keep the
[46:54] keep the particle a minimum pixel size
[46:56] on the screen regardless of how far you
[46:58] away from it you are so if i just did
[47:00] something really silly like that
[47:05] it's forcing each particle to be a
[47:08] minimum of um
[47:10] what did i put it 100 100 pixels now i
[47:13] can't i can't count how many pixels are
[47:15] on this viewport
[47:17] uh
[47:18] maybe you can do that leo it's got a
[47:19] ratio of
[47:21] 1894 to 1351
[47:26] um
[47:28] yeah let's uh ask someone in the chat
[47:30] maybe with the calculator
[47:34] oh some folks are saying that actually
[47:36] look cooler that way
[47:38] well i mean exactly so there's so
[47:40] there's ways that
[47:42] there's ways that we can kind of exploit
[47:43] it you know it's kind of oh gosh that's
[47:47] ruined
[47:48] okay ruined
[47:49] saved it's all right just i just think i
[47:52] incurred a huge overdraw cost then
[47:55] because i set the pixel size so the pit
[47:57] the particles basically like full on the
[47:59] screen but because there's what
[48:02] there's four thousand well there's more
[48:03] than four thousand there's there's
[48:04] there's four thousand plus
[48:06] uh two spawning every time those four
[48:08] thousand particles collide so all of a
[48:10] sudden then i was absolutely killing the
[48:12] the overdraw
[48:13] um
[48:15] i was gonna do a windfalling wasn't that
[48:16] yeah
[48:17] let's kick the
[48:18] window
[48:20] uh okay
[48:22] let us find it where did i put that with
[48:24] diary so that is
[48:28] what are you trying to do with the wind
[48:29] volume
[48:31] oh you're gonna tell me i can't do it i
[48:32] was i was going to see if it would push
[48:35] the particles if i use wing scale
[48:38] uh
[48:39] it will
[48:40] if
[48:42] well it will only work if if um for the
[48:45] whole emitter writes rights
[48:48] it won't work for only like a part of
[48:50] the particles yeah yeah yeah it's not
[48:52] gonna yeah i appreciate that it's not
[48:54] gonna like punch a hole in it per se
[48:56] um
[49:00] i think it's because i've got another
[49:02] one volume in the scene that's
[49:07] yeah you can kind of see that there it's
[49:10] kind of
[49:11] a skew
[49:13] yeah right
[49:14] yeah and that's because
[49:19] why is that one
[49:24] uh where is my switch that off
[49:27] i think i need to reload the entity
[49:32] yeah
[49:33] that was it okay so
[49:35] uh
[49:37] debug options where where can i
[49:42] should i be able to
[49:44] see the
[49:46] yeah you need to reload the wind volume
[49:49] as well i was just uh before this
[49:54] stream
[49:55] i was playing around with it's well it's
[49:57] not the most intuitive
[49:59] okay
[50:00] okay so i don't think this is going to
[50:01] like be as cool as i i had hoped it
[50:03] would be but it yeah so if i increased
[50:06] it so do i have to do that every time
[50:07] that
[50:08] yeah
[50:09] i think so
[50:10] set it to if i set the speed to 200 i've
[50:12] got a reload
[50:15] and then i've got to reload
[50:22] what am i going wrong earlier what's the
[50:25] is my direction wrong
[50:29] physics guys will be
[50:31] shouting now
[50:36] not entirely sure to be honest here
[50:49] yeah if you want to code for it's
[50:52] uh that was leo not me okay
[50:55] let's do it you got eight minutes left
[50:58] oh god so stressed
[51:02] out
[51:13] come on
[51:16] just open there are names in here
[51:19] uh
[51:20] rollo says that used gen 12 uh if you
[51:22] follow along with the monthly reports uh
[51:25] that are released every month uh on the
[51:27] broader space industries.com website
[51:29] rollo uh you'll know that uh
[51:32] gen 12 is not like a one thing it's like
[51:34] it just goes in and then it's suddenly
[51:35] in it's parts and parts and parts and
[51:37] parts that have been added and
[51:39] implemented into various areas over the
[51:41] last uh most of the last year
[51:44] so
[51:44] that's a much more complicated question
[51:46] to answer than
[51:48] just yes or no
[51:51] the answer is both
[51:53] whoa
[51:55] whoa what did you do so that's that's
[51:58] not the that's not part of the effect
[52:00] that's that's the vector field that i've
[52:01] dropped in um what i'm gonna have to
[52:03] quickly do
[52:05] can't believe you
[52:07] you asked me to do this leo
[52:09] outrageous
[52:11] i know
[52:13] but look
[52:14] look how cool it starts to look already
[52:17] i mean
[52:20] all right so
[52:22] quick quick uh quick explanation there
[52:24] so what i've done is i've dropped a
[52:26] particle field entity into the into the
[52:28] scene we've got two
[52:30] two options with particle fields with
[52:31] some right we've got sign distance
[52:32] fields we've got vector fields i'm using
[52:34] the vector field it's a pre-created one
[52:37] um the the texture format is it a 3d
[52:40] texture i have a question of its 3d
[52:42] texture yes yeah exactly yeah so this is
[52:46] uh occupying if i bring the bounds back
[52:49] on so within this bounding box the
[52:51] vector field exists draw advanced
[52:54] is
[52:55] how does it come through does it come
[52:57] through it's basically
[52:59] the direction so it's it's so it's a bit
[53:01] like uh how would you describe it leo
[53:02] well i'll let you
[53:04] let you describe it
[53:06] a 3d grid with like each cell in the
[53:10] grid having its own direction
[53:13] does that make sense
[53:15] it's a storm sounds good
[53:18] yeah
[53:18] um
[53:20] and so the directions for each each cell
[53:23] can affect the
[53:26] particles which are inside the same cell
[53:28] so there is a link between the the grid
[53:31] and the particle system so the particle
[53:33] system can react to the
[53:36] directions it's it's less digital now i
[53:39] have to say it's
[53:42] when i wake up
[53:44] yeah i mean i don't know what i don't
[53:46] know how would you even describe what
[53:47] we're what we're drawing now
[53:50] stranger things something take take
[53:53] mike take the volume
[53:55] and the the the the scf and move it half
[53:58] in and half out like
[54:00] so so we can see it affect half of the
[54:05] oh yeah see you see it do all kinds of
[54:08] weird stuff now
[54:10] slide a little more
[54:15] it's good so now we can see what the
[54:16] volume is doing
[54:18] you see the volume so on this side
[54:21] yeah it's like
[54:24] absolute chaos on this side and the
[54:26] reason i'll just bring it down again i
[54:28] increase the strength multiply of the
[54:29] actual vector field itself
[54:32] um
[54:33] one actually one quite nicely means like
[54:36] what we could what we weren't able to do
[54:38] with the wind volume which i think is
[54:39] what we were hoping to do
[54:41] was um
[54:44] like pass the wind through
[54:46] but we can do that with a vector field
[54:48] so now that the
[54:51] now that the bounds are
[54:54] kind of smaller than the the thing
[54:56] smaller than the effect itself it's kind
[54:57] of you can see it influencing as it
[54:59] passes through
[55:01] especially if i increase it again
[55:03] strength multiplier
[55:06] just kind of slicing through and
[55:08] disrupting the
[55:10] disrupting the particle flow as it goes
[55:12] through it
[55:13] uh
[55:14] vector fields and sine distance fields
[55:16] kind of there's a lot of
[55:17] a lot of things that we can do it kind
[55:20] of it helps us to kind of be more
[55:22] creative with the shapes and the motion
[55:25] of the effects that we make
[55:29] yeah actually it's interesting if you
[55:30] look at the the floor there like you can
[55:32] really see when i'm sliding it across
[55:34] kind of see it was dragging through
[55:36] that's interesting
[55:40] oh because the child particles al also
[55:43] gets affected i guess
[55:45] yeah because i've got parent inheritance
[55:47] yeah yeah
[55:49] oh wait the core one isn't yeah but the
[55:50] chart yeah the child is is affected by
[55:52] the vector field
[55:53] um
[55:54] shall i i'll just jump into how we're
[55:57] doing for time oh two minutes
[56:00] okay
[56:00] so let's get the
[56:04] camera out a bit
[56:08] so leo uh can you think of some creative
[56:10] ways we're using vector fields in in the
[56:12] game at the moment
[56:15] yes uh the
[56:18] atmospheric entry effects um are a very
[56:21] nice example um
[56:23] it's it's it's one of the it's kind of
[56:25] an interesting
[56:28] or that's not the vector fields actually
[56:30] it's it's that's the sdf um
[56:33] yes sign distance field um in
[56:37] i think in one of the engine rooms which
[56:39] one was it was it the reclaimer
[56:42] we got it we got a few actually the the
[56:44] vector field i'm using and this is is
[56:45] one of the engine room uh vector fields
[56:48] yeah
[56:49] yeah and so
[56:51] it's
[56:52] basically the particles will follow the
[56:54] shape of the room so the vector filters
[56:56] has been created from the geometry in
[56:58] the room and so
[57:00] anything that's in the room will kind of
[57:02] make give a little bit of a sense of
[57:04] wind inside the room so that it doesn't
[57:07] kind of just
[57:08] drop on
[57:09] everything it will kind of flow away a
[57:12] little bit
[57:12] which is yeah
[57:14] good use for this
[57:17] definitely
[57:19] uh all right
[57:22] so so so one one last thing mike
[57:27] can you just like
[57:28] put your face on the keyboard and roll
[57:29] it
[57:31] my face
[57:33] on the keyboard
[57:37] so it happens my actual face
[57:42] i know what will happen
[57:43] i'll look really silly
[57:46] forever because it'll be immortalized
[57:49] in a video i tried everybody all right
[57:52] thank you mike and leo for taking your
[57:55] time uh at the end of the week and and
[57:58] and showing us i think uh uh besides
[58:01] just how cool and
[58:05] inventive vfx vfxr i think it was an
[58:08] excellent demonstration of why we call
[58:10] it
[58:11] uh game development and not game
[58:13] construction you don't go into a thing
[58:16] with
[58:17] blueprints
[58:18] and engineering and all this stuff like
[58:20] oh we're just following the instructions
[58:22] and making the thing on on the paper
[58:24] right it's game development is about
[58:26] exploration and about uh testing things
[58:29] and happy accidents so
[58:32] many
[58:33] happy accidents throughout all of game
[58:36] development stuff
[58:37] and this was a very good demonstration
[58:39] of of principles that apply to
[58:41] everything
[58:43] a lot of it is you go in and you see
[58:47] what happens
[58:48] and uh you're going with a plan i mean
[58:50] you always have a plan but mostly you
[58:51] allow for discovery and stuff oh what
[58:53] are you doing now with the with the
[58:54] thing hold on
[58:56] uh sorry i was just totally
[58:58] you're pretty styling while you were
[58:59] you're going crazy
[59:01] all right so
[59:02] that's it everybody thanks for thanks
[59:04] for hanging out uh with us on this
[59:05] week's star citizen live um
[59:08] if you haven't already uh check out uh
[59:11] inside star citizen this week uh with a
[59:13] look at uh two recent additions to
[59:16] racing one that just went live in the
[59:17] recent alpha 317 two uh the snake pit
[59:20] which is a racetrack inspired by you the
[59:22] community and uh the upcoming uh uh
[59:26] orizon arena racetrack coming in uh
[59:29] alpha three eight three eighteen that
[59:32] was also inspired by a lot of really old
[59:35] and long-standing requests from the
[59:36] community and
[59:38] and both of them are fantastic examples
[59:41] of
[59:42] just a single developer uh finding time
[59:46] between tasks and going i i gotta wait
[59:49] for a little bit for this person to get
[59:50] ready for this and for this resource
[59:52] we're ready i wanna keep busy and being
[59:54] inspired by the community and making
[59:56] some very fun things
[59:58] very happy accidents uh that go into
[1:00:00] star citizen so check that out and then
[1:00:03] we will be back with isc next week
[1:00:07] for an entire sprint report episode uh
[1:00:10] i'm still i'm still writing it we're
[1:00:12] still putting it together i don't know
[1:00:13] what's going to be in it but it will be
[1:00:14] a 100 percent all oops all sprint report
[1:00:17] four uh they don't happen very often but
[1:00:19] it's happening the next week so check
[1:00:21] that out uh
[1:00:23] destruction that's mike
[1:00:25] that's leo i'm jared thanks for hanging
[1:00:28] out with us uh a star citizen and uh
[1:00:32] we'll see you next week everybody take
[1:00:33] care
[1:00:34] see you
[1:00:35] see you
[1:00:38] we love you santa claus santa claus me
[1:00:42] i'm gonna have to
[1:00:43] get a haircut and shave soon
[1:01:03] you

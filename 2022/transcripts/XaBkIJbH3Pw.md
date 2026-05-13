# Star Citizen Live Gamedev: The Pyro Proposition

**Video:** https://www.youtube.com/watch?v=XaBkIJbH3Pw
**Date:** 2022-02-18
**Duration:** 59:47

## Transcript

[00:02] why do you want to start the show since
[00:03] we're we're just doing it on let me just
[00:05] do the title card we'll just do a title
[00:07] card there we go
[00:09] and then we'll do we'll do me like hi
[00:11] everybody
[00:12] uh welcome to star citizen live
[00:14] uh i'm talking to you uh from from the
[00:17] void uh i am traveling uh this week uh
[00:21] doing some things we'll talk about uh in
[00:24] the future
[00:25] uh
[00:26] but we're doing today's show from the
[00:28] void here uh joining us on the show this
[00:31] week are our two members from our uh
[00:34] esteemed uh props team uh that's louis
[00:37] and thomas say hi lewis and thomas
[00:40] hello everyone
[00:41] thomas do you have any light in your
[00:43] room whatsoever why are you so dark i i
[00:46] don't know why i'm so dark i uh but i
[00:48] got everything before and do this oh
[00:50] open a blank notepad open up blank
[00:52] notepad and make it really big on your
[00:53] screen oh that's small
[00:57] look at that look at that
[00:59] there we go that worked from home glow
[01:02] who's who's been doing this forever he's
[01:04] been doing this forever
[01:06] all right now granted uh this is a game
[01:09] dev show uh if you've never seen a game
[01:10] dev episode it's where uh we spend most
[01:13] of our time uh in screen share and you
[01:16] won't see our faces anyway uh as we
[01:18] create something uh
[01:20] to potentially go into the persistent
[01:21] universe uh louis what are we making
[01:23] today
[01:26] today so today what we're going to be
[01:27] doing is uh
[01:29] you know we looked at the feedback from
[01:30] the cone
[01:33] and we thought uh we do think of a bit
[01:35] more interesting today um so what we're
[01:37] going to be doing is turning a cone 2.0
[01:40] yeah we're doing a cone again uh because
[01:42] everyone loved the first one
[01:44] no um today we're going to be turning um
[01:46] a white box mesh that we've been working
[01:48] on that's going uh into the game so this
[01:50] is not specifically made for this stream
[01:52] but this is actually something that's
[01:53] going to be going into our um our pyro
[01:56] stations later on um which is
[01:59] it's basically a trolley so we're going
[02:00] to be doing the setup on the trolley and
[02:02] we're going to have at the end of the
[02:03] stream hopefully if all goes well an
[02:06] interactable trolley that we could push
[02:07] around with some cool items on it so
[02:10] yeah
[02:11] fingers crossed all day as well knowing
[02:13] date at forge it won't but
[02:15] but we'll see and before we get started
[02:17] uh who who who are you ever it's
[02:19] everybody's first show so louis
[02:21] introduce yourself and then thomas you
[02:22] can introduce yourself
[02:26] so yeah i'm lewis thompson i'm a i'm a
[02:28] cone modeler from the box team um but
[02:31] yeah just make props um so
[02:35] i think probably the most notable thing
[02:36] that i've done in the game so far i made
[02:38] the medical beds um
[02:40] so when that update came out you've all
[02:42] probably woken up in one of my beds at
[02:44] one point so
[02:46] yeah
[02:47] you heard it here first you've all woken
[02:50] up in lewis's bed
[02:51] uh thomas who are you what do you do
[02:54] i'm thomas uh i'm also part of the box
[02:57] team
[02:59] and i've yeah i've been working for cig
[03:02] since six months now and i passed
[03:04] probation not long ago so i'm a full
[03:07] artist a box team member now
[03:10] and
[03:10] and yeah i've done the trophy for the
[03:13] citizencon this year so you probably got
[03:16] it in your hands and that's my first
[03:17] props
[03:18] i implemented in the game so i'm pretty
[03:20] proud of it
[03:21] all right
[03:22] an awesome trophy as well awesome
[03:25] thank you
[03:26] well lewis if you want if you want to
[03:28] start up the screen share we can jump
[03:30] into it
[03:31] okay let's go
[03:33] okay let's go
[03:36] oh my my perforce is crying
[03:40] all right cool
[03:42] so
[03:43] um
[03:45] everything's disappeared
[03:47] that's per tradition
[03:49] so what we have here um we basically
[03:51] wait wait
[03:53] hold on hold on real quick richard tyres
[03:55] is calling me
[03:57] hey
[03:58] hey rich we're live on the stream right
[04:00] now how are you awesome
[04:02] what's going on man hey you you called
[04:05] me and i'm just you know being happy and
[04:06] calling you back
[04:08] oh well how you doing i'm doing well
[04:10] i'll i'll leave you to your stream if
[04:12] you're
[04:12] streaming that's just lewis
[04:15] just
[04:15] okay now i'll call you back after the
[04:17] show all right have fun bye-bye bye
[04:24] all right
[04:25] as you were lewis and thomas right cool
[04:30] so
[04:31] what usually happens when we we start a
[04:33] new task on props we get sent a cool
[04:35] piece of concept art by one of our many
[04:37] talented concept artists
[04:39] um this is this is one of them um
[04:43] so yeah we'll have this image and we've
[04:44] basically got to go around and
[04:46] and work out how to turn it from this 2d
[04:49] image into a working object in the game
[04:51] so
[04:53] um obviously this is like a little pump
[04:55] truck trolley type thing so
[04:59] we can make it interactable uh we've got
[05:01] wheels we've got a handle so we can turn
[05:04] this into a trolley essentially
[05:06] that players can interact with so and in
[05:08] the us would we refer to that as a
[05:10] pallet mover
[05:11] a pallet neither yeah hell yeah
[05:15] i always get confused when we're naming
[05:17] stuff uh on on props especially because
[05:20] like there's so many different ways of
[05:21] saying
[05:22] like is it the american way or the
[05:24] british way and we always get sick yeah
[05:26] the the the the colloquial
[05:29] is pallet jack
[05:31] is what we would call it
[05:32] because the forks go into the prime into
[05:35] the holes at the bottom of the pallet
[05:37] and then you crank the handle down and
[05:39] it it jacks it up off the ground like a
[05:41] like an automotive jack
[05:43] yep yeah so a pallet jet we've got a
[05:45] we've got actually got a pallet in the
[05:47] scene that hopefully we're going to be
[05:48] able to once we've got it running
[05:49] hopefully be able to get it
[05:51] on there so
[05:53] i'm gonna start uh yeah i'm just gonna
[05:55] go away so tom if you wanna like
[05:58] start
[05:59] chatting so i'll try to make some way on
[06:01] this
[06:02] yeah so basically uh now lewis is
[06:06] checking if everything is you know
[06:08] separated to put the anchor points so
[06:11] like he is checking like if the wheel as
[06:14] it's gonna roll by itself it is being
[06:17] separated
[06:18] and just making sure the whole hierarchy
[06:21] is
[06:22] well done
[06:23] in this uh in this scene
[06:26] and
[06:27] once it cut that we will separate it
[06:30] things up
[06:31] so we can actually push it in the scene
[06:34] and having fun with it
[06:36] so this this was something that was
[06:37] created previously just to be a a visual
[06:40] item in the background and and now you
[06:43] have to convert it into something that
[06:44] npcs can actually move around
[06:47] yeah essentially right okay
[06:50] like i said because we're not doing this
[06:52] just for the stream this is actually a a
[06:54] prop that i've been assigned to work on
[06:55] this week so um eventually it's going to
[06:57] look something like this with all the
[06:59] pom details and the materials like done
[07:01] up
[07:02] at the moment it is literally just
[07:04] kind of white yeah
[07:06] grey box so
[07:08] it's still uh if i move this back over
[07:11] here
[07:12] is there a designer attached to this do
[07:14] we have any stats on this pallet jack
[07:17] can it lift above its weight class
[07:20] i've heard that uh it can lift the
[07:22] reclaimer uh it's that is that good we
[07:24] designed them strong
[07:29] if you go if you if you go back to a
[07:30] really old scl uh the reclaimer can't
[07:33] even escape the gravity of a planet's
[07:35] atmosphere
[07:37] oh my god i didn't call it flying that
[07:39] for the first time
[07:40] yes we're creating this in response to
[07:42] uh for that special reclaimer so we can
[07:45] lift it up
[07:47] yeah essentially so what we have um to
[07:50] make a trolley what we need to do um let
[07:52] me let me move this
[07:55] um
[07:56] so we've got two points on each wheel so
[07:59] we've got the point at which uh
[08:01] the wheel rotates so
[08:03] for example like this so that we can
[08:06] maneuver it and then there's one for the
[08:08] actual wheel to spin so that the wheels
[08:10] spin like they do in the game like like
[08:12] a realistic wheel um
[08:15] and basically what we need to do in
[08:16] order to
[08:17] uh have this function is create two
[08:20] point helpers so i believe
[08:23] yeah the main one and the wheel one yeah
[08:25] so this will be wheel turn one so we'll
[08:28] call this wheel will be wheel one um
[08:32] you know we're really good with naming
[08:33] conventions here we don't have the
[08:35] lights over
[08:36] this this will be the uh uk version of
[08:39] maneuvering with an extra u in it right
[08:41] yeah exactly
[08:43] so um so
[08:45] with this new point helper we've got
[08:47] this um we then attach the geometry
[08:50] which we want to rotate so now basically
[08:52] when we rotate this the geometry will
[08:54] move with it and when we create um
[08:57] like collision meshes for it as well we
[08:59] can put that in under that in the
[09:00] hierarchy and that will also uh move
[09:03] along with that
[09:04] um so we've got that mesh
[09:07] so now what we need to do is make
[09:08] another helper so that tells that that
[09:11] mesh where to spin
[09:13] uh like this
[09:14] so the next one uh is gonna tell the
[09:17] wheel
[09:18] what to do so we're gonna do instead of
[09:20] wheel turn this one's going to be called
[09:23] uh wheel spin spin again again we like
[09:27] we like our fancy naming conventions
[09:29] but now we've got so for this wheel
[09:32] we'll go ahead sorry i'm going to say
[09:33] everybody knows that star citizen we're
[09:35] really good at naming things that's one
[09:37] word strong suits
[09:39] um somebody in chat was asking uh why
[09:42] are you using 3d max in a blender
[09:45] uh as long as you are like i think that
[09:48] in in cig what's cool that it's that you
[09:51] can use any tool that you want as long
[09:53] as you work well with it and you are
[09:55] efficient and everything i think
[09:56] everyone really agree with that
[09:58] and that's
[10:00] yeah that's yeah you'd agree that
[10:02] blender is better though
[10:09] trying to learn blender at home but it's
[10:11] it's so once you've you've got max
[10:13] ingrained in your head when you go to
[10:14] blender it's like it's exactly different
[10:16] it's so like there's so much to it i'm
[10:20] really really trying i'm really trying
[10:21] to like it
[10:23] as long as you're making good art the
[10:24] tool that you're using is
[10:26] it's not really the model i would say
[10:28] i'd like to load up an old copy of like
[10:30] bryce 3d from 1999 see what i could do
[10:34] when i was younger i used to use a
[10:36] sketchup and you'd always have like
[10:38] creepy 2d man uh staring here when you
[10:41] start the program
[10:42] the one that always turns to face the
[10:44] camera
[10:45] i i used to learn uh 3d on maxon
[10:48] actually cinema 4d
[10:52] that was quite cool yeah i i i used 3d
[10:55] max
[10:56] in the late 90s and you know back when
[10:58] we were we used to like
[11:00] download models of like x-wings
[11:04] that other people had posted the
[11:05] bulletin boards uh and then you know
[11:08] make our own little animated uh trench
[11:11] runs
[11:13] well i think what i didn't that i opened
[11:16] in sketchup once i downloaded someone
[11:18] had done like a a model of the citadel
[11:20] from mass effect
[11:21] like one of the um you know the big bit
[11:23] that curves around and it's got all the
[11:25] foliage and the balconies and like the
[11:27] main presidium i think it is i i loaded
[11:30] that in and i remember my like my 150
[11:33] pound laptop literally like started
[11:35] screaming i've never heard a sound like
[11:37] that come from a computer
[11:39] but my god it was like nope
[11:42] can't handle this please sexy
[11:45] i'm thrilled to see some
[11:47] some people my age that remember bryce
[11:48] 3d
[11:49] yeah bryce 3d how many canyons did you
[11:52] guys make i made hundreds of canyons
[11:55] i used to fly those x-wings through them
[12:03] i was just gonna stay uh yeah do it when
[12:05] i learned 3d i was like
[12:07] a lot of like star wars stuff as well
[12:09] like in jared it's yeah
[12:12] what scene was it you made again for
[12:13] your personal work
[12:16] uh the one on youtube
[12:18] was it the i mean it was palpatine's
[12:19] room wasn't it
[12:21] ah yeah yeah i did like the the
[12:22] palpatine's office and then regine
[12:25] yeah
[12:26] yeah when i'm doing 3d for my personal
[12:28] work it's often star wars related thing
[12:32] did you do palpatine's throne room and
[12:34] jedi or did you do his office in like
[12:36] you know you know now in you know the
[12:38] office in uh on coruscant you know
[12:40] yeah
[12:42] you know with his office uh yeah i did
[12:43] that in another engine
[12:47] oh we're missing a wheel
[12:50] there it is
[12:53] now don't forget to add the uh weapon
[12:54] hardpoints here and uh yeah
[12:57] do you know what let me let me let me
[12:59] just go through my
[13:01] downloads quickly because i swear when
[13:03] we were making the original trolleys we
[13:04] made a like a
[13:07] battle trolley
[13:10] [Laughter]
[13:11] we were working on it cory made a gif of
[13:13] it and we've got like uh like the i
[13:16] can't i don't know what hard points
[13:17] those are but we put a quantum drive on
[13:19] the back of the trolley we've got
[13:21] missiles we've got
[13:23] a pilot's seat
[13:26] i'm trying to convince these people the
[13:27] props team aren't a bunch of screw-ups
[13:29] and you're not helping me right now
[13:31] this this was a research task this was
[13:33] very important
[13:35] it's a very interesting research test
[13:37] yeah
[13:40] now if you want the battle trolley folks
[13:42] i suggest you take to reddit into a
[13:45] spectrum
[13:46] and start your threads now
[13:48] uh r request the battle trolley uh lti
[13:52] token
[13:55] do it now it's glorious it's glorious
[13:58] given to the might of the battle trolley
[14:01] right um
[14:03] grips there though no not yet so this is
[14:06] what i'm gonna do next so um
[14:08] basically we've got the wheels now uh
[14:10] we've got the helpers that tell date of
[14:12] forge uh how the wheels need to turn um
[14:16] so they should all turn independently
[14:18] and stuff uh considering hoping i've set
[14:21] them up right the next thing we need uh
[14:23] is a place for the player to be able to
[14:25] grip the trolley and interact with it so
[14:28] i'm just going to start making that now
[14:29] but you got to make that one wheel that
[14:32] has like a 15 degree
[14:34] less turning radius that's you know
[14:36] there's always one wheel it's always
[14:37] sketchy
[14:39] yeah
[14:40] the part of the workflow that we love
[14:42] about it most is when we send this off
[14:43] to audio to
[14:45] to basically add in a squeaky wheel uh
[14:49] the
[14:50] two-week research trip to tesco's the
[14:53] first round
[14:57] probably they can
[14:59] so this is going to be a really
[15:01] like
[15:04] quick version obviously we take a lot
[15:06] more time
[15:07] for now i'm just going to do this so
[15:09] this will be
[15:10] mesh
[15:11] interaction
[15:13] one so yeah now you're making the mesh
[15:15] and then you're gonna put the encode
[15:17] points
[15:19] and that's for like the targeted
[15:20] animations so that they'll reach out and
[15:22] grab for that
[15:25] so
[15:26] yeah
[15:28] yeah uh for for folks
[15:30] excuse me for folks who are just tuning
[15:32] in and whatnot
[15:33] a lot of what we're doing now it's it's
[15:35] we had a three we had a white box uh
[15:38] model of a trolley but it was meant for
[15:41] like background and just you know
[15:43] sitting there we are now converting it
[15:45] into a usable
[15:47] uh option with you know with wheels that
[15:49] can uh rotate and function independently
[15:51] uh the grip here so that uh players and
[15:54] embassies like have a targeted location
[15:56] for the animations to to grab onto and
[15:59] then once it's been converted into a
[16:01] proper usable we'll begin building it up
[16:03] for
[16:04] uh
[16:05] the force potential use inside uh a pyro
[16:08] space station uh this is a work that was
[16:11] nor that was already on their workload
[16:13] this is not something being created
[16:15] specifically uh for the show uh this is
[16:17] a task that um that these guys already
[16:20] have on their uh a development docket so
[16:24] we're just we're just killing two birds
[16:26] uh with one stone here
[16:28] this is how yours money is used spider
[16:32] studio specifically yours money
[16:35] yeah we handpicked yours
[16:41] right
[16:43] so yeah now you're put yeah did you put
[16:45] the interaction point which is gonna be
[16:47] the the text where the text of grip is
[16:49] gonna appear i guess yeah so basically
[16:52] this is a
[16:53] this is where the interaction takes
[16:55] place i believe
[16:56] the interaction highlight is driven by
[16:58] the collision mesh for it which is
[17:01] why is that over here and a completely
[17:03] different shape toward
[17:06] ah again did it go this is fun right why
[17:08] do you do it different way
[17:10] why do you always kill birds lando i
[17:12] just like the phrase i don't kill
[17:14] anything i'm the guy that catches a fly
[17:16] and walks it out outside of my front
[17:19] door and lets it go
[17:23] so no
[17:24] there's a problem
[17:25] that's about the only aspect of me
[17:26] that's remotely awesome
[17:30] is that like bias towards different
[17:32] insects
[17:33] i just i just
[17:35] i just
[17:36] everything's got its place in the
[17:37] universe i don't have to like it but
[17:40] you know just it doesn't and it doesn't
[17:42] just doesn't have to do it inside my
[17:43] house so i just move it out
[17:45] of the house and then they can go off
[17:46] and live their life
[17:48] and do whatever task nature wanted them
[17:50] to do somewhere else
[17:54] right here we go so
[17:55] so now it is converted as a proxy
[17:58] so yeah this uh
[18:00] if i rename it
[18:02] my rename tool is not working fantastic
[18:06] uh
[18:07] let me just i'll do it manually
[18:10] if i can remember physics
[18:14] proxy yeah
[18:16] and one yes and for the uh for the
[18:18] blender questions that come in um
[18:21] again uh as as usual this is one of
[18:23] those kind of things we just we end up
[18:24] repeating quite a bit over the eight
[18:26] years that i've been doing this here at
[18:27] cig
[18:29] we we we allow uh most of our artists to
[18:32] work in the tools with which they're
[18:33] more they're most professional with so
[18:36] so we have a a marvelous a tools team
[18:40] here
[18:41] whose job is to create all of these
[18:43] importers and exporters and bridges and
[18:46] and stuff between all these softwares so
[18:48] that when we bring folks into the
[18:50] project if their primary experience is
[18:52] on 3d max or it's on blender or it's in
[18:54] houdini or or whatever
[18:57] we support that and let them work in the
[18:59] aspects in which they are most uh
[19:02] familiar yeah if they want to learn
[19:03] other software's like like um
[19:07] you just start saying that you're trying
[19:09] to learn blender right now in his spare
[19:10] time that's fine nothing but but we're
[19:13] one of the things that i think we're
[19:14] really proud of is how we support our
[19:17] artists and letting them work in the
[19:19] software that is most
[19:21] native or comfortable to them yeah we
[19:24] had a guy on the team that that
[19:25] literally worked in blender and then
[19:27] when he was finished he'd
[19:28] move his assets over to max uh just to
[19:31] use the tools that we used to export
[19:33] them and stuff
[19:34] so it's really flexible to be honest um
[19:37] it's just whatever works fastest because
[19:39] that's what you want really like fast
[19:41] yeah i'm actually i'm actually getting
[19:43] ready uh i think the next uh segment we
[19:46] do for isc
[19:48] uh that has to do with turbulent will
[19:50] actually be with their tools team and
[19:52] talking about magic bridge
[19:54] it's have you ever seen that with that
[19:56] with what they're building
[19:58] between uh now they've built it they
[20:00] built a new tool that uh
[20:02] uh basically brings houdini inside of
[20:05] yeah inside of the game engine and lets
[20:07] them do it let's
[20:08] that's that's houdini it basically does
[20:11] live houdini stuff inside the game
[20:13] engine and stuff it's really cool
[20:14] but it's great oh no i know what i mean
[20:16] yeah it's terrific for prop placements
[20:19] you know it's they can sit there and
[20:20] they just point at a shelf and go fill
[20:23] this up with stuff and it fills it up
[20:24] with bottles and you know all the things
[20:25] that you guys have been making it now
[20:27] makes the place go for it super cool
[20:29] yeah
[20:30] yeah i see what you mean now yeah we've
[20:32] been trying to take a delve into houdini
[20:34] on our side like developing some work no
[20:36] place for it it's it's going to be
[20:38] essential to to to really get that
[20:40] coffee shop
[20:41] uh gameplay into uh
[20:44] 317.
[20:45] i know
[20:46] i just love me in the chat and people
[20:47] are super stoked about that copy shop
[20:49] stuff so
[20:52] and also what what i think it's really
[20:54] great about what we do is
[20:56] do you give us also the time to like
[20:59] improve our skills in other softwares
[21:01] from time to time
[21:03] and it's really awesome to have like
[21:04] this time to just work on on new skills
[21:06] that we can grow
[21:10] yeah definitely um like i said we've
[21:12] been doing a bit houdini stuff um yeah
[21:14] upcoming work that we're doing trying to
[21:16] integrate that into our workflow um
[21:19] yeah it's just it's really nice to be
[21:22] able to
[21:23] you know
[21:24] this place really does recognize the
[21:26] power of these these tools uh and i
[21:28] think that's taken for granted
[21:30] a bit in the game industry in some some
[21:33] places you know
[21:34] a lot of the times the engines will be
[21:36] using like old tech and
[21:38] and people are too afraid to move on and
[21:40] learn some new stuff
[21:41] there there's there's virtue to to both
[21:44] approaches it's just yeah it's just if
[21:47] there's one
[21:49] underlying truth to all game development
[21:51] unless this is all game development
[21:52] anywhere is that there's no one right
[21:55] way
[21:56] to do every everything
[21:58] it's just uh so we're we're big
[22:00] proponents here of all right we got to
[22:02] do this and then we got to do this we
[22:03] gotta do this other thing this fourth
[22:05] thing what are the most effective ways
[22:07] to do each one and if they're not they
[22:09] don't happen to be the same thing
[22:10] through the same process you know that's
[22:12] fine
[22:13] as long as that as long as they all end
[22:14] up in the same place
[22:17] that's fine but
[22:18] but the the arguments go both ways i i
[22:21] see plenty of people
[22:23] i could sit here and make a solid
[22:25] argument for forcing everybody to use
[22:26] the same tool
[22:27] it's like this
[22:29] that that's game development though
[22:31] there's just no one way to do it
[22:35] so
[22:36] blender is better than 3d max though
[22:39] i'm sorry i didn't mean to interrupt
[22:40] your time
[22:42] no no no no
[22:43] straight for the first straight
[22:46] so
[22:47] here lewis did on this trolley i don't
[22:50] know if you noticed but two anchor
[22:52] points one for the left hand and one for
[22:54] the right hand oh sorry yeah let's go
[22:56] back yeah yeah just show them yeah
[22:57] quickly so in the middle it's a grip
[23:00] well it's the interactive point so
[23:02] that's where you will see the text
[23:03] messaging grip the thing and under the
[23:06] two one the other two other one is just
[23:08] the left hand right hand
[23:10] so you can put your hands on it and now
[23:11] we are gonna configure on it the how the
[23:14] hands gonna behave on this and
[23:17] to just say uh to do to the ai and to
[23:20] your interaction points what and how you
[23:23] are interacting with it
[23:24] so here lewis is just renaming the
[23:27] variant
[23:29] yes
[23:30] look
[23:31] we've got like uh luckily we've got like
[23:33] a a bunch of like templates we can pick
[23:35] from depending what trolley we're using
[23:37] so for example we got you know a
[23:39] multi-grip one which means like a
[23:41] trolley that you can grip from like
[23:43] basically
[23:44] uh two ends
[23:46] um
[23:47] there's
[23:48] the single grip one which is just one
[23:50] grip point which is what we're going to
[23:51] be using there's stuff like the you know
[23:53] the wheelchairs for
[23:55] hospitals and stuff and and all sorts um
[24:00] you know so for now what we're going to
[24:02] do is going to jump in here
[24:06] and plug in our geometry basically so
[24:07] this is going to be
[24:10] where we are where you link your your
[24:12] mesh
[24:18] my brain is ticking away i gotta give it
[24:20] a refresh
[24:24] come on
[24:25] and my favorite part is it's gonna crash
[24:26] my editor when i create this
[24:29] ass
[24:33] will we ever be able to use and sit in
[24:36] the wheelchairs in the hospital
[24:38] uh unknown
[24:40] unknown uh
[24:42] i think
[24:44] i think it's safe to say that we would
[24:46] all prefer that you can
[24:48] it just it's it's the answer if it's
[24:51] ever does it make things seem more
[24:53] diegetic does it make things
[24:56] act like we expect them to act the
[24:58] answer is always going to be yes that's
[25:00] what we want to do
[25:02] but it always comes down to priorities
[25:04] in time it's just
[25:05] it's just do do we have a spot to take
[25:08] the people necessary and assign them to
[25:11] that task
[25:12] yeah
[25:13] we want to
[25:14] but yeah
[25:16] like for us uh usually we're just you
[25:18] know making the geometry and plugging it
[25:20] into something that's already been
[25:21] programmed uh and then just configuring
[25:23] it and tweaking it
[25:24] but uh you know for us i know we're
[25:26] always very very busy uh so
[25:29] i can only imagine you know the
[25:30] programming side creating these features
[25:32] and you know there's a hell of a lot
[25:33] that goes into just like you know it's
[25:35] all good for me to come and just create
[25:37] a variant but you know someone's already
[25:39] come and paved the way for me to do this
[25:42] in a big way you know it's been
[25:43] developed over a long time when i first
[25:46] joined like over a year ago like that
[25:48] was when
[25:49] this was being worked on
[25:51] um
[25:52] and there was like a good few months
[25:54] where i joined in just to help support
[25:56] the development of the trolleys and
[25:58] there was a lot that went into it a lot
[26:01] a lot of stress a lot of pain
[26:03] um
[26:04] but you know it's good it's good we love
[26:06] this yeah and and for the for people who
[26:09] have questions like why do we have
[26:11] people working on trolleys and stuff
[26:13] like this uh they are
[26:15] principally a component of squadron 42
[26:17] uh that they they are used in in several
[26:20] of the background animations and and
[26:23] things that are going on aboard life on
[26:25] a on a ship like the idris or the
[26:27] javelin or whatnot and so working is
[26:30] prioritized for that purpose as we you
[26:32] know
[26:33] continue to
[26:34] bring that game to completion and then
[26:36] as what always does is the technology of
[26:38] one the assets of one
[26:41] can often be used to help and you know
[26:43] push forward the other so
[26:46] so we have our first
[26:48] yeah
[26:49] we have our first issue here it's a big
[26:52] wheel it's the big wheel yeah
[26:55] yeah
[26:56] so maybe you have a rotation issue there
[26:58] yeah yeah it was coming in at 90
[27:01] instead of a zero
[27:04] so i'm just going to move these out here
[27:08] one for now
[27:09] so we've got a bunch of like dodgy
[27:11] transforms here so i'm just going to
[27:13] reset all of those
[27:14] and then
[27:16] if we bring these back
[27:17] i can use them already that's this one
[27:20] yeah we'll we will turn that
[27:25] when you look at the hierarchy sometimes
[27:27] it's just it just blends into like yeah
[27:29] it's just a blur of white and you're
[27:31] like oh
[27:32] i can't see so no it's right
[27:38] oh it doesn't like this
[27:42] that's because i'm disconnected from the
[27:43] vpn to improve my internet connection oh
[27:46] so if you connect in you're gonna
[27:48] it might drop you from the show
[27:51] um
[27:53] we can give it a shot
[27:55] it will still do it it just takes ages
[27:56] to export so i just hope we get well
[27:58] that's yeah almost
[28:00] this is an issue from before this is
[28:02] something i i need to go and fix but
[28:04] it's it's not a huge issue for yeah just
[28:07] the geometry issue yeah
[28:10] um
[28:11] max please come back to me uh why does
[28:14] the vanguard's landing gear have wheels
[28:16] and treads when he can't roll uh it
[28:18] can't roll
[28:20] at present
[28:21] you can't roll now
[28:24] that's all i'll say about that
[28:27] max is not behaving let me let me try
[28:30] let me try this
[28:31] you're gonna stop the screen share if
[28:33] you want until you
[28:34] get the square
[28:37] it's all right i just can't the thing is
[28:39] i can't remember how to um
[28:42] how to disconnect max from perforce when
[28:45] it's
[28:46] when it's disconnected from vpn because
[28:47] basically uh it does a bunch of perforce
[28:49] checks uh
[28:50] when you export it so that all your
[28:52] files that you're working on appear and
[28:55] um
[28:56] yeah it's all fine though um right so
[28:59] and then we've also got this this wheels
[29:01] bit funky sorry it's it's maybe the
[29:04] second one yeah
[29:05] the wheel same thing again
[29:07] um
[29:08] just double checking 90 degrees so we'll
[29:10] reset that as well i've got a hot key
[29:12] set up for that because reset x forms
[29:14] and transforms is uh very important very
[29:17] very yeah
[29:20] there we go so that's resolved
[29:22] cool
[29:23] we got the same issues
[29:27] so if i press ai in physics you see it
[29:30] like it doesn't like that it it jumps
[29:33] out the way
[29:34] because of the way everything's set up
[29:36] so lewis
[29:37] while you fix that uh let's talk about
[29:40] that art test that you had to do
[29:42] um we actually had some folks in the in
[29:44] uh chat asking what what what are the
[29:47] what's what was the art test like for
[29:49] you since you hired in so recently
[29:56] yeah me i have like to do
[29:58] a test for two weeks so
[30:01] yeah you get the concept art uh corey
[30:05] was really
[30:06] cool he was just saying that they want
[30:08] you to track your time of course play
[30:11] the game and don't worry about this
[30:13] uh just work like you would do um
[30:16] show you like the steps that you did so
[30:19] for example on my artist i just showed
[30:21] that
[30:23] i went to white box at this stage i went
[30:25] to detail at that stage and worked on
[30:28] the final art at that stage while
[30:30] showing it in my track of time and yeah
[30:32] it gives you
[30:34] all the details of what you need to know
[30:36] for your artist
[30:38] and
[30:39] yeah and basically you have fun with it
[30:41] and show your artistic
[30:43] view on the concept art because of
[30:45] course you don't have to
[30:47] that's the thing with concept art and
[30:48] even our work in every day you have to
[30:51] kind of have like a
[30:52] big of an art
[30:54] thing like side of things like you don't
[30:56] do like
[30:58] from
[30:59] a to z to what you see in the concept
[31:01] art just have fun with it like try to
[31:05] adapt the shapes adapt the the props to
[31:07] what you feel like it could be
[31:09] uh
[31:10] so it you know it is kind of
[31:13] interesting to see and
[31:14] how you see the props being interesting
[31:17] basically and that's one thing that i
[31:19] think we value a lot is seeing those
[31:21] things
[31:22] that you can have like an artistic side
[31:24] of you those things
[31:25] and yeah and it's really truly fun it's
[31:28] really
[31:30] it was a really great taste in my
[31:32] opinion
[31:33] i think you're back heavy there
[31:35] louis i love it i love watching this
[31:37] this stuff happens i remember the first
[31:39] time i set up a trolley it i pressed
[31:41] play and it just pinged off into the
[31:43] distance and i was like uh-huh
[31:53] yeah if we activate the physics we can
[31:54] see the wheels are in the right
[31:55] positions uh it rotates the points that
[31:58] we want it to rotate uh this is a bit
[32:00] down at the moment but that's something
[32:02] i can fix by extending this mesh down
[32:05] um but it's everything's sitting in the
[32:07] right position um but obviously it's
[32:09] very back heavy at the moment so at the
[32:11] moment uh we don't have
[32:14] apart from these so these are um
[32:17] the debug for these is a bit dodgy but
[32:19] if we go over to this um
[32:21] this water we have
[32:23] you can see that what data forge is
[32:24] actually doing is um on that
[32:27] those um those points
[32:30] like here um it's actually spawning uh a
[32:33] collision mesh
[32:35] um
[32:36] where the wheel is
[32:37] and that basically what that allows us
[32:39] to do is these essentially become the
[32:42] collision for the wheels uh allowing us
[32:44] to push them about
[32:45] and obviously the actual mesh also has a
[32:47] collision
[32:48] uh
[32:50] a collision mesh as well
[32:52] um and we don't so the way that um the
[32:56] physics are calculated for these objects
[32:59] now i don't want to go too far into it
[33:00] could be completely wrong but the the
[33:02] way it's the way it's done
[33:04] um my understanding is that it's done
[33:07] via the collision proxy so if we
[33:10] put the box for like the
[33:12] box on each of these four blocks
[33:16] uh it's a good time to remind you that
[33:18] uh we're already halfway done by the way
[33:21] time wise i think we do it i think we're
[33:23] doing all right this time i think this
[33:24] was a much better
[33:26] uh
[33:27] i think we're doing better for time than
[33:29] we did the last stream we did yeah i
[33:30] just want to make sure you you have time
[33:32] to build it up that's all
[33:34] okay
[33:36] activate turbo let's go
[33:39] so yeah i'll just
[33:41] grow it yeah on the shape so it doesn't
[33:44] go too far
[33:45] i'll do another one
[33:49] right it's not 100 accurate but it will
[33:51] do for now we just at the moment we want
[33:53] to get it working as best as we can and
[33:56] then later on uh we can go and do tweaks
[33:58] because it's really important um
[34:01] essentially
[34:02] with doing something like a white box
[34:04] you want to get something
[34:06] into
[34:07] the game as quickly as you can so that
[34:09] you know other teams aren't waiting
[34:12] on you to be able to so for example if
[34:14] the environment artists wanted to place
[34:15] this um in a scene or to create a puzzle
[34:18] with it or something like that um
[34:21] you'd want to get the functionality done
[34:22] as soon as you can
[34:24] um
[34:25] just
[34:26] be not
[34:28] holding
[34:29] really
[34:30] so we can drag this in here to answer
[34:33] the folks in in chat
[34:35] yes
[34:37] what you're seeing is lag from the
[34:39] internet uh the uk is having a pretty
[34:42] heavy storm right now and that's why
[34:44] lewis's voice attenuates the way it does
[34:46] sometimes and he's the one sharing so
[34:49] that that is that's why your frame rate
[34:50] looks like it does sometimes so uh and
[34:53] also it's called the pyro proposition
[34:56] because we're making a prop for the pyro
[34:58] space stations and yeah i i just like
[35:00] really bad crappy titles
[35:03] because they amuse me
[35:05] so don't read too much into it other
[35:07] than that
[35:08] yeah the prop for the pyro system is
[35:11] really amazing like i had really a lot
[35:12] of fun with what we
[35:14] do they are really doing a pretty good
[35:17] job concert artist ronda yeah like like
[35:20] my art test
[35:21] back in the day was i had to i i made
[35:23] this
[35:24] uh
[35:25] these one-off shows called the wonderful
[35:27] world of star citizen that i made
[35:30] before and then like
[35:32] i did that that was sort of my audition
[35:33] and they're like can you make can you
[35:35] make videos that are more professional
[35:37] and with less funny haha in them and i'm
[35:40] like no
[35:42] and like all right we'll hire you anyway
[35:44] i'm like cool
[35:47] so it's always been a it's always been a
[35:49] it's been a thing since day one
[35:51] it's like no
[35:53] always be yourself
[35:55] you too
[35:55] you told me i could be crappy i'm crappy
[35:58] it's like all right
[36:01] that's the thing as well you have to be
[36:03] yourself why acting as someone you are
[36:05] not no that's it's it's it's literally
[36:08] one of my you know people ask
[36:11] you know there's lots of reasons to like
[36:13] your job and whatever but one of the
[36:14] things that i like most about my job
[36:16] probably the thing that i like most
[36:17] about this job
[36:19] is that they've never asked me to be
[36:20] anything other than who i am
[36:24] yeah sometimes they've made you know so
[36:28] occasionally i get a suggestion like
[36:30] could you be more
[36:31] like this or whatever and i'm like not
[36:34] really
[36:36] that this is
[36:37] it's it's you know sometimes the joke is
[36:39] a little too
[36:40] obtuse and just like i don't get it i'm
[36:42] like yeah i know but i did and it made
[36:45] me laugh so
[36:47] worth it every time
[36:48] sometimes i make things for an audience
[36:50] of one
[36:53] so essentially what just happened there
[36:55] god gone i'll let you i'll let you know
[36:58] i was i was gonna say just but perks is
[37:01] to have weight on it and i was asking if
[37:03] it was going to work ah yes
[37:06] yeah so so two things happened um so
[37:11] originally the template comes with four
[37:13] wheels so obviously we don't have four
[37:15] wheels unless we have three um so i
[37:17] removed one of them and
[37:19] the wheels at the front were quite big
[37:21] by default so i've changed the sizes uh
[37:25] down for those so these are a lot
[37:26] smaller now um and also this back one uh
[37:30] the size increased a bit
[37:32] um and then we because we've got these
[37:34] proxies on the front now and the weight
[37:36] distribution is way better so
[37:39] now when we we activate our physics
[37:43] it's a lot better um
[37:45] obviously stuff like this the wheel you
[37:47] know
[37:48] you can tweak these basically so that
[37:51] the mesh isn't clipping with the floor
[37:53] um
[37:54] so for example here it's still a bit
[37:55] dodge
[37:57] but um
[37:58] you know stuff we can all tweak later
[38:00] the thing i'm interested in now
[38:04] you see if it's worse with your hands
[38:06] well actually i need to turn this off
[38:11] let's see if this works now
[38:15] surprise surprise
[38:17] it's broken so i'm gonna go quickly
[38:20] check
[38:22] where it's gone wrong
[38:24] jared is an on-air personality no that's
[38:27] like 90 minutes of my job every week i
[38:29] still got another
[38:31] another 50 hours that's my actual job
[38:35] the on-air stuff is like the bonus
[38:44] what did you do louis
[38:46] is it the right name for the for the
[38:48] proxy
[38:51] maybe it's just that that he doesn't
[38:53] have the right name
[38:55] uh the group should be the right name
[38:58] where is
[39:09] this is the fun part this is the this is
[39:11] the most time consuming part exactly
[39:15] interaction grips
[39:17] i should be working
[39:19] interesting
[39:26] yeah i don't know it's not appearing so
[39:28] this one i prepared earlier
[39:30] which also oh
[39:32] this could get spicy is it gonna do what
[39:34] it did to me last stream no this one
[39:36] works
[39:38] so you might just press this one
[39:42] this is what i set up earlier just so
[39:44] that i ironed out any kinks with
[39:46] with what was going on so
[39:48] we could probably move this one because
[39:50] you only got like 20 minutes left
[39:52] yeah exactly so
[39:54] so yeah that that totally went fine
[39:57] this is totally not one that we made
[39:58] earlier but it's all good
[40:00] so
[40:00] we're going to quickly drag this into
[40:02] the trash
[40:06] okay
[40:07] guys we've talked about the frame rate
[40:08] it's a screen share
[40:10] across the world during a storm
[40:15] yeah my window came in at any point
[40:17] that's how bad it is
[40:22] it's really bad right now in the uk
[40:25] it's the worst come on
[40:30] cool
[40:32] so i'm just gonna quickly replace this
[40:35] right let's start adding stuff
[40:37] so
[40:38] being my infinite wisdom i decided we're
[40:41] going to add
[40:43] we'll start off with the palette
[40:46] now what's the brief for this because so
[40:48] far we've only spent the time time
[40:50] talking about physicalizing this palette
[40:52] but what are you actually adding to it
[40:54] what's the brief here what's the mandate
[40:56] what are we trying to do
[40:58] so so essentially we want to i believe
[41:01] this is going to be used um you can use
[41:04] it as an interactable but there's also
[41:05] going to be some around levels with like
[41:08] items on them
[41:09] you can use this cover pretty much so um
[41:13] essentially we want to create
[41:16] a version that has a palette on with
[41:18] some cargo on it so
[41:20] what i'm going to do is i'm going to
[41:21] start dragging
[41:24] but the cargo isn't you know just a scu
[41:26] box full of stuff it's
[41:28] the this is like an npc's personal
[41:31] belongings that they're yeah we just
[41:34] want a load of random crap on it really
[41:37] anyway
[41:40] anyway um so yeah what the way the way
[41:42] i'm gonna i've picked a few random items
[41:45] uh these are obviously
[41:47] gonna change because there's you know we
[41:49] want to tell a story with this uh for
[41:51] this first iteration it's just gonna be
[41:53] some placeholder stuff so the first
[41:54] thing we want
[41:55] is gonna be a palette
[41:57] because that gives us a bit more uh
[42:01] room to
[42:02] start placing stuff
[42:04] so i've got a tool here basically lets
[42:07] me move one helper
[42:09] uh and it updates the position of the
[42:11] mesh so i could do this and then
[42:14] wait what am i doing
[42:17] obviously i can do that but um i can
[42:20] also
[42:21] create
[42:22] more nodes rotate them in whatever
[42:24] direction i want
[42:28] and put them
[42:29] and if i hit update it then updates it
[42:31] with all all the stuff so
[42:34] it's a cool little way of like uh kind
[42:37] of addressing
[42:39] you know how you want something to be
[42:40] and then instancing the meshes so that
[42:43] you can make changes on a larger scale
[42:45] so for example if we've got all these
[42:46] placed like this
[42:48] um in random orientations and we wanted
[42:50] to change like a detail on the palette
[42:52] we can just change one here and we just
[42:53] hit update and it will it'll update
[42:55] globally on everything so it's really
[42:57] handy tool to have
[42:58] so
[42:59] now um i'm just going to drag
[43:02] this over
[43:06] and wax that there in the middle so we
[43:08] have like the palette on the right place
[43:12] uh and then what we're gonna go for next
[43:14] what have we got this hierarchy is a
[43:16] mess i'm really sorry i should have
[43:19] cleaned this up
[43:21] uh next we'll do the next biggest thing
[43:23] which was this is an honest
[43:24] demonstration of workflow
[43:28] yeah i think it's really important as
[43:29] well because i think a lot of people
[43:33] come onto these like you know streams
[43:35] i've seen streams before people come on
[43:37] they they edit out all of the
[43:39] the happy accidents and the mistakes and
[43:42] and you don't get to see the
[43:45] you know the
[43:46] the process because it does take a long
[43:48] time it does take a long time
[43:52] oh come on it works always takes time
[43:57] and so does yours
[44:01] would it work update yeah
[44:04] crisis of it
[44:07] now you're going to same with the
[44:08] generator
[44:09] yeah so i'll add that
[44:15] no that's not working
[44:18] oh it is it's just not okay i just had
[44:21] it hidden
[44:22] basically i'm an idiot
[44:24] cool
[44:25] so add that on there uh i don't know
[44:28] maybe maybe we have two
[44:30] because we're adventurous
[44:34] we'll even put a bit of rotation on it
[44:36] whoa
[44:40] i don't know why there we go
[44:46] i use this little sidebar
[44:48] to quickly i can display all the proxies
[44:50] i can hide them uh the collision meshes
[44:52] um i can change between
[44:55] lots
[44:57] this is a cool little tool i actually
[44:59] use
[45:00] uh what next
[45:04] [Music]
[45:12] [Laughter]
[45:16] is a plush whale really going to provide
[45:19] effective cover
[45:22] this one
[45:23] that's huge
[45:24] is that the is that the right size
[45:26] that's the big one that's the big one
[45:30] that's bigger than one two sizes yeah
[45:33] oh we to judge the size of the plush
[45:34] whale come on that's that's not very
[45:36] inclusive that's way bigger than the one
[45:38] we shipped out recently
[45:42] maybe uh i don't know
[45:44] maybe it grow
[45:48] because of silence
[45:49] like i'm i'm fed up with my artist
[45:51] already
[45:57] it's close it just might have more
[45:59] profanity in it
[46:04] please i would like to come back again
[46:09] okay hopefully this works
[46:12] that's like my favorite tagline for our
[46:14] team hopefully this works
[46:16] i know
[46:17] in an attempt to make the internet
[46:19] run a bit smoother uh i disconnected
[46:21] from the vpn again so
[46:25] i need to learn how to disconnect from
[46:26] perforce
[46:28] but we'll wait
[46:29] there we go object file oh no
[46:32] it's all right it's just yeah see that
[46:34] you can fix with the form
[46:36] has eight degenerate faces
[46:42] where's object five in the scene oh my
[46:44] god
[46:46] and then this is the part where max it's
[46:48] trying to trying to do stuff
[46:51] uh
[46:53] did you all remove versus go now
[46:55] yeah yeah i turned it off because it was
[46:57] it was making everything that could be
[46:59] white sticking time now yeah
[47:02] i need to learn how to disconnect it
[47:04] yeah uh brexit says i just realized we
[47:06] don't currently have squashable objects
[47:08] eddie from we we have we have soft body
[47:10] physics
[47:11] uh they just have to we just have to
[47:13] choose to enable them for certain things
[47:19] oh
[47:21] wow
[47:22] i mean it's a different it's a different
[47:23] colored version uh it's a material but
[47:27] it's because no like a tintable i guess
[47:30] right
[47:32] yeah maybe
[47:33] so
[47:34] then i'll buy now yeah
[47:37] now we can stroll about with our
[47:40] uh our new object
[47:42] and we can add more so
[47:46] in general what we do is uh when
[47:49] we're creating this this this will be to
[47:50] cover metrics so obviously we won't have
[47:53] a giant plushie um to take cover behind
[47:57] in a realistic scenario but we'd have
[47:59] some you know maybe more variety of
[48:01] stuff so if it's for pyro it could be
[48:03] like scrap metal and like engine parts
[48:06] and
[48:07] bits from the station or you know a big
[48:10] benny's vending machine it could be
[48:11] anything really like it's
[48:14] it's down to
[48:15] the the story we're trying to create but
[48:17] uh
[48:18] put a benny's
[48:30] make it
[48:32] work oh
[48:34] i've only got top secret ones
[48:38] not the top secret one
[48:40] no no no no
[48:42] well here hold on i'll i'll turn the
[48:44] screen shirt off you show me
[48:45] here they can't see your screen show it
[48:47] to me and i'll tell you whether you can
[48:48] show it or not
[48:50] what is it
[48:52] let me get these they're looking at my
[48:54] face right now instead of you so you can
[48:56] show me let me see
[48:58] i'm just trying to find the image
[49:02] oh my god
[49:03] i need to clean my files out
[49:06] there's so much cursed stuff here so
[49:09] i literally dumped everything it's uh
[49:11] it's this one but the mesh for this one
[49:14] that's all right
[49:15] yeah yeah that's all right
[49:19] all right
[49:20] that was that was actually uh originally
[49:23] uh that was actually part of a
[49:24] citizencon and then it got cut
[49:26] but only because of time only because of
[49:28] time so we're clear on that one
[49:32] all right
[49:33] i'll do my best to get it in
[49:36] we got 10 minutes we can do this 10
[49:39] minutes
[49:40] in advance
[49:42] this
[49:48] they could all say i was there
[49:50] i fought for this one
[49:53] yeah
[49:56] i had a really long task and i was like
[49:57] i really want to do this one next
[49:59] because it
[50:00] yeah
[50:02] yeah i say you guys can sit here and try
[50:04] to recreate it from the reflection of my
[50:05] glasses but we're just going to show it
[50:06] to you in a minute so you save yourself
[50:08] the effort
[50:10] i gotta go back on the vpn for one bit
[50:16] load faster
[50:18] there's too many polygons
[50:24] i'm
[50:27] this is the part where i take a coffee
[50:28] break
[50:32] it's the most minor inconvenience you go
[50:34] for a coffee break
[50:36] oh my god
[50:38] what is that is that never before seen
[50:40] prop okay i better be able to start i
[50:42] swear corey comes back from holiday and
[50:44] he's like why'd you let jared do that
[50:47] why'd you let him
[50:49] this is not allowed it's illegal
[50:52] right i'm going to hit my magic copy
[50:54] button
[50:58] it's defending amazing
[51:06] i love it i love it already
[51:09] right you could remove those yeah
[51:15] oh that wasn't the right button
[51:27] i was like where's my root no
[51:29] you put it up there
[51:45] there we go
[51:48] see this in this shape it doesn't really
[51:49] look like anything they can't tell what
[51:51] it is
[51:52] ah this this is the thing
[51:55] hopefully i submitted it correctly
[51:58] but but but a bit of uh too late what i
[52:01] was going to say
[52:05] there we go oh this look i'll tell you
[52:06] what this lighting doesn't do it justice
[52:08] like yeah change it to can you change
[52:10] the time of day change it to like night
[52:12] time
[52:13] i didn't remember how to do that i'm on
[52:15] it i'm in the test lab at the moment i
[52:16] can't
[52:19] you can change the time of day in the
[52:20] test level
[52:22] i don't have the facilities for that
[52:24] oh my god it's like
[52:26] it's like a
[52:28] where is it it's like a one button push
[52:29] i can't remember what the button is
[52:30] right now but you just it has uh it has
[52:33] like five different preset pre-baked and
[52:37] i just can't remember what the button is
[52:38] for it
[52:39] uh
[52:40] it's all right it doesn't matter uh what
[52:42] folks are seeing right here uh
[52:44] so to explain it is uh
[52:47] because some of the pyro space stations
[52:49] are a bit older
[52:50] uh you know they're old and abandoned
[52:52] some of them go back uh
[52:54] maybe even a hundred years uh
[52:57] one of the tasks was to develop a what
[52:59] what a big benny's machine look like
[53:00] from
[53:01] from
[53:03] many many years ago years ago yeah yeah
[53:05] so what you're seeing is like a classic
[53:07] vintage retro
[53:09] uh big betty's vending machine here you
[53:12] can show them the concept
[53:16] uh
[53:16] yeah yeah so okay yes the lighting here
[53:19] is a bit worked so let me show you the
[53:22] content
[53:23] you can even show your screenshot i
[53:25] guess i'm thinking of the screenshot
[53:27] yeah the thing that you just showed me
[53:29] the thing that you just showed me when i
[53:30] had it off you can show that
[53:32] okay
[53:34] because he also has a good screenshot
[53:36] with
[53:38] spyro station and it looks really very
[53:40] good
[53:42] that was the concept yeah
[53:44] i've got one of i've got a good
[53:46] screenshot of it in the game but i don't
[53:48] know i can show that would you you can
[53:50] can you okay here i'm gonna change the
[53:52] camera so that i don't see anything else
[53:53] but go ahead and bring it up yeah
[53:57] okay
[54:00] there we go okay yeah
[54:02] yeah i'll go back there there you go
[54:04] yeah so so that's it actually in the
[54:06] game with proper lighting
[54:08] and working yep without the dodgy screen
[54:14] so yeah
[54:16] essentially using those tools we can
[54:18] create trolleys we can do different
[54:19] variants of these so you know this could
[54:21] be like a full height cover one for
[54:23] example
[54:24] uh you could do one that's like crouch
[54:26] height
[54:27] um
[54:28] and yeah you could put it in any
[54:29] orientation and
[54:31] you can even walk this around now i'm
[54:32] gonna say yeah try pushing it around see
[54:34] if it works
[54:36] you could even imagine to have like a
[54:38] place that you need to go and you can
[54:40] push it to just access it you know
[54:42] secret spaces and stuff like this could
[54:43] be fun
[54:44] yeah i'd tip it over and kill somebody
[54:46] with it
[54:49] i wish i hadn't made the level so big i
[54:50] would run it off the cliff
[54:54] but yeah um
[54:56] anyway this this asset
[54:58] at the moment it's it's very basic
[55:00] there's going to be more done to it it
[55:02] obviously needs cleaning up like this
[55:03] spring that i've made for it is is not
[55:06] the right size it's clipping through
[55:08] there's
[55:10] stuff as well to get details and after
[55:12] details
[55:14] but the main thing when you're
[55:14] submitting something like this is to get
[55:16] all the collision working and uh just so
[55:19] that it's in a position where you know
[55:21] the level designers can then go in and
[55:22] start integrating it and then what you
[55:24] do is you slowly carry on developing the
[55:26] asset until you reach uh final art on it
[55:30] so
[55:32] yeah yeah
[55:34] that's uh that's trolley 101 players
[55:37] uh can you can you bring up the the
[55:39] battle trolley one more time
[55:41] uh the battle trolley yeah bring out the
[55:42] battle trailer one more time
[55:52] all right all right folks so hold on
[55:55] leave this up on the screen for a little
[55:56] bit go where's it animated it's not
[55:58] playing anymore
[56:01] it was playing the door nope does my
[56:03] mouse need to be over it i don't know
[56:06] there it is there it is
[56:07] okay so here
[56:09] what what i want you to do folks
[56:11] look at me this is my serious face
[56:14] i want you to go to twitter i want you
[56:16] to tag john crew
[56:18] and i want you to be like hey john crew
[56:21] we saw battle trolley on scl
[56:24] uh when is it when is it coming to the
[56:26] persistent universe
[56:28] oh on every single like if you don't
[56:30] have a twitter account go make a twitter
[56:32] account
[56:33] and then and then
[56:35] create create this you can screen you
[56:37] know i'm gonna put on the screen you can
[56:38] screenshot it right now and screenshot
[56:39] it right now again
[56:40] and just
[56:42] and just i wanna see
[56:43] i want to see
[56:45] at least
[56:46] 300 posts 300 posts
[56:49] on john cruz twitter account say jared
[56:52] said we could we could have the battle
[56:54] trolley if we got the 300
[56:56] posts
[56:57] but that you have to tag it in there so
[56:58] he gets the notification though if you
[57:00] don't tag it it doesn't count
[57:01] it has to like buzz his phone every time
[57:04] it happens because i know he has
[57:05] notifications on
[57:06] so
[57:07] so so so go to go to twitter
[57:10] and and and tag john with a screenshot
[57:12] of this
[57:13] so that his phone keeps buzzing
[57:15] he's going to be fuming
[57:16] [Laughter]
[57:21] he's just going to start like rolling
[57:22] off his desk
[57:24] all right uh you can stop the screen
[57:25] share
[57:27] awesome
[57:29] all right
[57:30] uh louis thomas thank you so much for
[57:33] for uh hanging out uh
[57:36] showing us a bit of your showing us a
[57:38] bit of your workflow yes it's underscore
[57:40] it's at underscore john crew on twitter
[57:43] folks look in the chat look in the chat
[57:45] right now if you're watching if you're
[57:46] watching on youtube if you're watching
[57:48] on youtube later uh somebody added to
[57:50] the youtube uh comments so people can
[57:52] find it it's at underscore john crew all
[57:55] one word c-r-e-w-e
[57:57] don't forget the e at the end um
[58:01] lewis thomas again thank you so much for
[58:03] hanging out with us at the end of the
[58:04] week uh
[58:06] that's all i got remember folks um
[58:09] there is a free fly going on right now
[58:11] uh so check that out uh there's a new uh
[58:14] armor and stuff on the referral program
[58:16] be sure you check that out
[58:18] uh
[58:19] and uh yeah we'll be back uh we'll we'll
[58:22] be back uh next week with more isc and
[58:26] seo i don't remember what's on either
[58:28] one of them right now
[58:29] because i'm in total travel mode right
[58:30] now so i'm i'm space brained so uh
[58:34] late everybody
[58:45] was we don't do c universe more that was
[58:47] the other show why don't you see
[58:48] universe
[58:50] every day every we do every day on the
[58:53] props
[58:58] he just waits and then he spotlights his
[59:00] camera in the meeting and he goes we'll
[59:02] see you around the verse
[59:06] you guys are up in there and everyone on
[59:08] the team
[59:09] every guy on the team just like leaves
[59:10] slowly and
[59:11] sadly
[59:13] we'd live before he says it
[59:15] definitely yes
[59:17] yeah i know it's still on
[59:20] i was giving you bonus content
[59:22] oh my gosh i was giving you bonus
[59:24] content i know it was still on
[59:27] they don't want us to go yet
[59:30] do
[59:32] do what i like
[59:46] you

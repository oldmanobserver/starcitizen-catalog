# Star Citizen Live Gamedev: Mood Lighting

**Video:** https://www.youtube.com/watch?v=Cqt1fl56BlE
**Date:** 2021-07-16
**Duration:** 1:00:58

## Transcript

[00:02] hello everybody
[00:03] welcome to another episode of star
[00:05] citizen live game dev
[00:08] what do we call it mood lighting mood
[00:10] lighting
[00:11] uh i'm your host jared huckabee and if
[00:13] you've never seen star citizen live
[00:15] before well it's where it's
[00:16] well it's where we take about an hour at
[00:18] the end of our week
[00:19] we hang out with some of our developers
[00:21] here at cloud imperium games
[00:23] uh we answer questions we chat about the
[00:26] best version of
[00:27] of hello and uh sometimes we
[00:30] dip into the workflow and we see a
[00:32] little bit about how they work
[00:34] uh that's what we're doing this week in
[00:35] our game dev show let me bring our
[00:37] guests in here
[00:38] we have got chris and zach from
[00:41] the cig lighting team how you guys doing
[00:44] hello
[00:45] doing well how about yourself it's i'm
[00:48] back i had a week of vacation
[00:50] last week and it was delightful i
[00:52] actually forgot about work for
[00:54] at least several hours over the course
[00:57] of a week it was it was wonderful
[00:59] it was like but i'm back and we're here
[01:01] at work and
[01:03] we are talking lighting today so uh
[01:06] before we get into it because
[01:07] every show is somebody's first show and
[01:09] zach i know this is your first show
[01:10] let's take a sick a minute or two
[01:12] to introduce yourselves to the community
[01:15] tell them who you are
[01:16] what you do chris we'll start with you
[01:19] who are you what do you do and what's
[01:21] your favorite sandwich
[01:23] oh i'm chris campbell i am the uh the
[01:26] lead lighting artist
[01:27] for the pu uh and my favorite sandwich
[01:31] i mean i'm gonna be controversial and
[01:32] say i don't really like sandwiches that
[01:34] much
[01:35] but i mean i don't know a blt
[01:38] is pretty good how do you not like
[01:42] sandwiches
[01:43] oh well i guess it depends on how you
[01:45] define a sandwich and we could get into
[01:46] that but
[01:48] i was going to say the same thing not a
[01:50] sandwich fan so maybe it's thanksgiving
[01:51] being a lighting artist and hating
[01:53] sandwiches
[01:55] but i'm zach and i'm a junior lighting
[01:57] artist for star citizen
[02:00] and i hate sandwiches
[02:03] the correct answer is a monte cristo by
[02:04] the way a monte cristo from club 33 at
[02:07] disneyland is the correct answer
[02:10] um all right there's a monte cristo
[02:13] so we are you are lighting artists um
[02:17] and what does a lighting artist do uh
[02:20] not in game development at cig uh what
[02:23] do we do
[02:25] uh well i mean the lighting artists i
[02:27] mean it's fairly self-explanatory it's
[02:29] in the title
[02:30] but it's um it's basically taking the
[02:33] environment that's get that gets made by
[02:35] you know the environment artists and
[02:36] level designers and
[02:38] adding lighting to it in a way that
[02:40] represents the
[02:42] art director's visual target for the
[02:44] game
[02:45] um while also keeping in mind things
[02:47] like performance constraints
[02:49] uh technical restraints and also some
[02:51] gameplay considerations like
[02:53] leading the player making sure that they
[02:55] have good visibility where we
[02:56] want them to have good visibility that
[02:58] they know where they need to go if it's
[03:00] uh something like a linear level design
[03:01] or something
[03:04] and today on the show we are doing a
[03:07] game dev stream where we're going to
[03:08] showcase uh some aspect of your process
[03:11] what are we doing today
[03:13] yeah uh so today um we're going to show
[03:16] kind of the process of how we are
[03:19] relighting some of the haves
[03:23] around the pu um you may have noticed in
[03:26] the in orizon
[03:28] currently on the ptu we have added you
[03:31] know we've got new habs there and we've
[03:32] added a button
[03:33] by the door which allows you to you can
[03:36] push it and basically turn
[03:38] down the lights i hesitate to say
[03:40] turning off the lights because obviously
[03:42] there is still lighting there
[03:44] but you basically put the hab into a
[03:46] state of like a you know a chill
[03:48] nighttime uh either relaxation or sleep
[03:51] kind of uh
[03:52] state um and uh so yeah what we're gonna
[03:55] do is
[03:56] show how we do that process um and
[03:59] kind of our thoughts behind what why
[04:02] we're
[04:03] picking certain moods or you know make
[04:05] certain decisions
[04:06] uh while doing that um and it's actually
[04:08] it's something that we're doing
[04:10] you know right now so uh this is this is
[04:13] like real-time game dev sure yeah i said
[04:16] this is actually tasks that you are
[04:18] working on
[04:20] at present in the game so we're not
[04:22] creating any special work or anything
[04:24] for today you're actually just
[04:25] you have to do this and i'm like can we
[04:27] watch it for an hour you're like
[04:29] sure so yeah so yeah this is literally
[04:32] what we're doing this week
[04:34] all right so we've got the screen share
[04:35] up uh zach
[04:37] why don't you take us through it yeah
[04:40] sure so this is orizon
[04:42] and this is uh one of the switches that
[04:45] we've used
[04:48] to change the lighting
[04:55] that's it all right so thanks everybody
[04:58] remember that uh
[04:59] we'll be back next week
[05:04] all right so so explain to me your tasks
[05:06] what what
[05:07] what do you actually do because these
[05:08] things are already lit obviously
[05:10] so why are we going back why are we
[05:13] revisiting
[05:15] yeah so i mean uh yeah i mean as you say
[05:17] we're not we're not reinventing the habs
[05:19] we're not like changing them completely
[05:21] um but we've always had a a kind of a
[05:24] desire to add more
[05:26] player interactivity um from a lighting
[05:29] perspective i mean you've already got
[05:30] some
[05:31] things that you can interact with in
[05:32] your habs uh and we wanted to add to
[05:35] that
[05:35] uh through lighting so um the obvious
[05:38] way to do that is we've already got
[05:40] these
[05:40] uh these tools um called light groups
[05:44] which allow us to basically change the
[05:45] the state uh of a light based on
[05:49] you know whatever kind of logic and
[05:52] you know traditionally that's mostly
[05:53] been in the
[05:55] the ships like when you take damage or
[05:57] when you're powering up the ship for the
[05:58] first time there's like a low power
[06:00] state and a full powered state and an
[06:01] emergency state
[06:03] um and we've been you know over the over
[06:06] the course of the last year or so
[06:08] introducing some of those elements into
[06:10] locations where we feel it makes sense
[06:12] and where we can get the most
[06:13] uh bang for buck um and yeah the next
[06:16] kind of obvious thing was to do it in
[06:19] the habs
[06:20] where we recently got some some new kind
[06:23] of uh
[06:25] gameplay entities that allow us to tie
[06:27] the light group
[06:29] into a switch which is player
[06:32] interactable so the player
[06:33] himself or herself can can manually
[06:37] change the uh the light state all right
[06:40] so
[06:40] so we're going back through all of the
[06:42] existing habs and adding
[06:44] multiple lighting states and now you
[06:46] mentioned the ships the ships
[06:48] have like normal operation and then
[06:50] emergency
[06:51] or low power or whatever what what
[06:53] lighting states are are we talking about
[06:55] for habitations
[06:57] uh i mean so for the time being for
[06:59] habitations it's just going to be a
[07:01] a low power state and a full powered
[07:04] state
[07:06] yeah we're not we're not adding too much
[07:08] complexity to it at the moment we just
[07:10] want to
[07:11] get something in um kind of as a proof
[07:14] of concept
[07:15] and then see where we can expand it
[07:16] where it makes sense to expand it
[07:19] okay so no no red alerts no no no no
[07:21] switch they have directions no not yet i
[07:23] mean
[07:23] maybe in the future you could be cooking
[07:25] something and then the fire alarm goes
[07:27] off and the whole hab
[07:28] changes what about like a what about
[07:31] like a
[07:31] sexy time entertaining well i mean you
[07:35] know
[07:35] some some of these uh low-powered states
[07:37] are very
[07:38] very sensual
[07:41] and we're already off track all right so
[07:44] zach
[07:45] uh we we've been bouncing through the
[07:47] the hab now
[07:48] uh for a few minutes um take it away
[07:51] where do we start
[07:53] yeah sure so um i guess
[07:57] one of the first things we could show is
[07:59] uh the lights themselves
[08:02] and right here we have a kind of default
[08:05] state auxiliary state emergency state
[08:07] and so the first thing we'll do is go
[08:08] through for our kind of default state
[08:11] and set everything the way that we want
[08:13] it
[08:14] and then if you're really prepared
[08:17] in that process you kind of set some
[08:19] auxiliary values but normally we don't
[08:21] so as soon as you switch to an auxiliary
[08:23] state it looks horrible
[08:25] and so you have to go back through and
[08:26] tweak all the auxiliary kind of define
[08:28] like what your low power state is going
[08:30] to be
[08:31] and there's also ways in which you
[08:33] control how that transition happens
[08:35] so if you notice
[08:38] the lights don't just kind of
[08:40] immediately switch
[08:42] from the default state to the auxiliary
[08:43] state there's a bit of a
[08:45] transition and uh i did this one so it's
[08:49] not the most interesting but there are
[08:51] some others where
[08:54] different lights kind of transition at
[08:55] different times and you get a bit of
[08:56] like a
[08:57] different lights across the room
[09:01] this is the new bab hab
[09:04] and we can have a look at the loreville
[09:06] one as well
[09:15] a bit of a slower one with some stuff
[09:16] that like flickers on towards the end
[09:19] yeah this one's so dramatic like an air
[09:21] purifier
[09:22] in here yeah
[09:25] crap floating in the air
[09:28] now this transition uh you you're
[09:32] continuously transitioning between two
[09:33] modes
[09:34] you're flying around in free fly and
[09:36] then you're transitioning into
[09:38] another mode to do this what is this
[09:39] mode that you're transitioning into
[09:41] um we have a little hotkey control g
[09:44] that kind of
[09:45] spawns you a character and just gives
[09:47] you
[09:48] the kind of interactions that you'd
[09:49] expect to have as a character so it's
[09:51] just a quick way to kind of verify
[09:53] um how this interaction feels and how
[09:56] these characters are kind of receiving
[09:58] light
[09:58] in these spaces there are other ways
[10:01] that we can
[10:02] look at that um we have a client that we
[10:06] can run where you can actually have your
[10:07] own kind of version of a server on your
[10:09] pc
[10:10] and do the whole process spawning a hab
[10:12] move around you know visiting
[10:14] the entire kind of pu but this is just a
[10:16] quick way of doing it in the editor for
[10:18] these smaller spaces
[10:20] yeah and it looks a bit nauseating when
[10:23] you go
[10:25] yeah so as i we've seen it a couple of
[10:28] times and i'm like we should probably
[10:29] explain what that thing is that we're
[10:31] seeing over and over and over again
[10:34] yeah i'm not sure what that noise
[10:35] nauseousness is when you jump into game
[10:38] mode
[10:38] uh i think it's some some bug which will
[10:41] no doubt be fixed but
[10:42] uh yeah i mean as zach was saying like
[10:45] the
[10:46] the the benefit of uh of being able to
[10:48] jump in game like this is that
[10:50] you know we we're trying to make the
[10:52] environment look good
[10:53] uh but you know in the actual game
[10:56] itself there's a lot of characters
[10:57] running around and so we also have to
[10:58] verify that
[10:59] the player character looks good and you
[11:02] know by doing that we also make sure
[11:03] that any other npcs
[11:04] or ai can theoretically also you know
[11:08] look their best under the same lighting
[11:10] circumstances so that's something we
[11:11] always
[11:12] always keeping in mind when we light
[11:13] environments
[11:18] so we can take a look at a few more if
[11:20] that's interesting or we can just kind
[11:21] of like jump in and
[11:22] and have a crack at one yeah well let's
[11:25] jump in
[11:27] and see what it is what your task is
[11:29] what you're actually trying to do here
[11:31] we we've we've seen these these habs
[11:34] before
[11:36] uh
[11:40] this is area 18 and just this week i've
[11:42] done
[11:43] a kind of auxiliary setup for this hab
[11:50] and we thought today we do kind of a
[11:52] completely different alternate state
[11:54] alternate universe what area 18 habs
[11:56] could have looked like
[11:58] just to show you kind of the impact that
[12:00] the lighting can have
[12:01] and then this is our neon kind of
[12:04] downtown inspired area 18 um
[12:10] let's see we're halfway to the sexy time
[12:12] lighting i was talking about
[12:13] exactly cool so we're going to do an
[12:16] alternate state for this one that's the
[12:18] plan
[12:19] and show a little bit of that process
[12:21] and it sounds like we're going to make
[12:22] it
[12:23] sexy time by the sounds of it
[12:27] it's it's let's do a shag pad
[12:31] yeah right you got it
[12:35] so the first step is kind of defining
[12:37] like what lights are we going to keep on
[12:40] what lights are we going to turn off
[12:41] and i can also show you the horrifying
[12:44] thing that we're faced with before we've
[12:45] set up any auxiliary lighting
[12:48] where everything's just default values
[12:52] so is this every light in the room just
[12:54] turned a hundred
[12:56] it's just one uh and white
[13:00] every light turned to one and everything
[13:02] white
[13:04] and yeah that's kind of the the starting
[13:06] point
[13:07] by default interesting
[13:14] you can see that here and chris i don't
[13:17] know what you normally do but my lazy
[13:19] method is to kind of select
[13:21] most of them and turn them off in the
[13:22] auxiliary state and then bring back the
[13:24] ones that i
[13:26] like yeah i think that's usually the the
[13:29] easiest way
[13:30] uh i think it's easier to start from
[13:31] black than it is from
[13:33] this horrible white nightmare that we
[13:36] find ourselves in
[13:48] so now we should
[13:55] everything except these cute maps
[13:59] which i think you went over last in your
[14:01] last kind of lighting
[14:03] stream but they're essentially uh the
[14:06] kind of ambient lighting solution
[14:08] they take a little snapshot on all six
[14:10] sides of the lighting in the space and
[14:11] reproject it out
[14:13] so instead of just having complete
[14:15] darkness in the areas that aren't being
[14:17] hit by direct lighting
[14:19] you get a bit of ambient lighting and
[14:21] the correct kind of reflections that
[14:22] should be there as well
[14:25] yeah yeah yeah yeah exactly
[14:31] i think we've lost a host that's all
[14:34] right we'll
[14:34] we'll just go through it so uh changing
[14:38] i was changing my lighting to match your
[14:40] sexy time lighting
[14:41] oh hell yeah there you go see i i i got
[14:44] i got the same look
[14:46] it's like we're in the same place
[14:52] so i think if we're going sexy time we
[14:54] should probably keep all these pink ones
[14:56] because that's what's giving us that
[14:59] that vibe so we can either go for the
[15:01] same values that we have
[15:03] in the default state so the other lights
[15:06] will kind of fade out around them and
[15:07] these ones will stay consistent
[15:10] so with the pink lighting and then add
[15:12] on top of it
[15:23] so what you just selected a bunch of
[15:26] lights
[15:27] so intel for these lights here we have
[15:29] like a couple of different
[15:31] uh light types because they're longer
[15:33] strip lights i'm using these ones that
[15:35] are in the engine they called planar
[15:37] and they represent like kind of
[15:40] rectangle of light and emits out from
[15:43] there
[15:44] and then i also have these little lights
[15:46] here which are linked to these fixtures
[15:48] that control the glow
[15:50] so that controls the brightness of the
[15:52] glow
[15:54] and the color of the glow
[16:00] so i'm just grabbing all of those and
[16:02] copying over the values that they have
[16:05] in the default state to the auxiliary
[16:08] state so they're the same between both
[16:13] is riveting we need the lighting team to
[16:16] go over to jared's apartment
[16:18] i'm not in my apartment i'm in the
[16:20] studio
[16:21] i'm in the studio this is the la studio
[16:26] i'm back in the office
[16:30] yeah it's kind of ironic like we spent
[16:31] so much time lighting
[16:33] these like 3d environments but the
[16:36] lighting in my
[16:37] apartment is very uninspiring by
[16:39] comparison
[16:47] forgot to make them pink classic
[16:58] we need to decide what we're going to do
[17:00] about these sexy origin bulbs as well
[17:04] that i've brought in we can keep them
[17:07] blue or make them pink
[17:11] i want you to chip in jared and give a
[17:13] bit of a
[17:14] stand in for our art director sure we'll
[17:17] put the question to the
[17:18] chat what do you what are you wanting to
[17:20] know
[17:22] what uh what what should the um the
[17:25] alternate color be so we are looks like
[17:27] our primary
[17:28] like key light color is going to be this
[17:29] pink that's gonna define like the
[17:32] overall mood for the uh
[17:33] for the broom and then we've got these
[17:35] um these accent lights
[17:37] uh up in the ceiling and uh spotlights
[17:39] and stuff and we need a
[17:41] we need a color for that that's gonna
[17:43] work
[17:44] uh well it can't be pink the other ones
[17:47] are already pink people you can't just
[17:48] put pink and pink and pink and pink
[17:51] uh let's go can you'll get a very pink
[17:53] room but yeah let's go with purple
[17:56] purple like a deeper a deeper kind of
[17:59] purple
[18:00] that could work
[18:17] so now that you're you're working in the
[18:19] alternate light state
[18:20] uh zack you just uh mentioned how
[18:23] how you do that like in game we can
[18:25] obviously flick the switch
[18:27] but then as soon as you jump out of game
[18:29] it goes back to the default light state
[18:32] yeah so oh god um
[18:35] the way that that kind of switch works
[18:38] is that it's hooked
[18:39] up to one of these light groups uh which
[18:42] is something that in theory should be in
[18:44] every kind of
[18:46] what we call object container or area
[18:48] like a hab or a
[18:50] hab floor and within this
[18:54] you can set how you want so
[18:57] for example like orison we have the day
[18:59] night states where it switches from
[19:01] uh we switch on all those kind of lights
[19:03] in the garden on the trees
[19:04] at night time so one of the things we
[19:06] can do from this light group
[19:07] is set to be affected by day night
[19:10] and set which of those states auxiliary
[19:13] default or emergency we want to switch
[19:15] to
[19:16] and then the engine uh when the kind of
[19:19] sun reaches about the horizon level on a
[19:21] planet it will switch between them
[19:23] and so i'm just manually in here
[19:25] switching between these states so i can
[19:27] see
[19:28] whilst i'm working what we're going to
[19:31] have
[19:31] and then once we've established those
[19:33] two different states this one we'll
[19:34] probably go back and do
[19:35] the transition and how those lights are
[19:37] going to kind of flick on or fade off
[19:40] and that's the tricky bit
[19:58] so jared hopefully you can answer my
[19:59] question how long do we expect 314
[20:02] to go live when it's ready the answer
[20:04] that question is always
[20:06] the same pedro when we think it's ready
[20:16] oh crap we wanted purple not blue i'm
[20:18] doing blue let's uh let's make
[20:20] it a little bit more here we go
[20:36] oof is that 2p i think
[20:39] what is purple somewhere like 270 on the
[20:43] hue spectrum i think yeah somewhere in
[20:47] there maybe
[20:50] that's quite a pinky purple
[20:53] yeah i think it's because of the um the
[20:56] glow
[20:56] on the actual uh bulb itself
[21:00] obviously as something gets brighter as
[21:02] we put more light into it
[21:04] the you know the brighter the glow is
[21:05] and the more it turns towards like a
[21:07] white
[21:08] uh and sometimes that can be that can
[21:11] make it difficult to like to pick an
[21:13] exact color
[21:13] like usually if you've got like a
[21:15] concept art piece uh the concept artist
[21:17] can always make it
[21:18] you know exactly the color they want
[21:20] just by picking you know a brush color
[21:22] and that's what they paint
[21:23] colors always translating that into 3d
[21:25] takes a little
[21:27] a little bit more finesse color is
[21:29] always an
[21:30] annoying conversation because in in
[21:34] video you know we use rgb red blue green
[21:37] uh uh zero a zero value is black then
[21:41] you know the absence of color is black
[21:43] and the addition of all colors is how
[21:46] you get white
[21:47] but in print they use you know cymk
[21:50] where it's the exact opposite where the
[21:52] absence of color is white
[21:53] and the addition of all colors is black
[21:56] and it's
[21:57] it's always just it's one of those you
[21:58] know weird
[22:00] you know uh mark skelton deep thoughts
[22:02] thing where you're like
[22:03] like how is one the absence of color how
[22:06] is white the absence of color in one
[22:08] and black is the absence of color in
[22:10] another and then how do you have these
[22:12] two polar opposite
[22:13] systems existing and then how do they
[22:16] both
[22:16] manage to be crayons yeah if if if
[22:20] if if in either situation one is the
[22:23] absence of color
[22:23] how do they both manage to be crayons
[22:25] and both be candidates of color
[22:27] and then what's transparent
[22:30] where does transparent fit into all that
[22:32] and then you figure out they can make a
[22:33] transparent crayon too they got those
[22:35] little clear wax crayons that they use
[22:36] for like easter egg coloring kits
[22:38] so and that at that point you just need
[22:40] to
[22:41] sit down and take a break step back
[22:56] shout out to mark skelton if you're out
[22:57] there deep thoughts
[23:03] no it wasn't called deep thoughts it was
[23:05] called hazy thoughts wasn't it i don't
[23:06] remember so somebody somebody in the
[23:08] chat will remember
[23:15] i'm throwing back like 2013 stuff here
[23:20] uh one of the other things we always try
[23:22] and think about is like these walkways
[23:24] or kind of made
[23:25] what what is it that we call them i
[23:27] forget critical path
[23:29] critical part yeah that's right so like
[23:32] any kind of doorways or spaces that
[23:33] you're supposed to interact with you
[23:35] kind of need to see what you're doing
[23:36] and where you're going
[23:38] so i don't know
[23:42] do i not have a doormat yeah so
[23:45] even though it's like an mmo with like
[23:47] so much space
[23:49] that you can go around to there's always
[23:51] you know especially in locations like
[23:53] this
[23:54] areas where we know that the player is
[23:56] always going to be going through always
[23:57] transitioning through
[23:59] and that's where we we generally focus
[24:02] either the highest quality of the
[24:04] lighting so we we spend more
[24:06] we we pay for shadows if that's what
[24:08] needs to be there to make it look good
[24:10] put more area lights there that kind of
[24:11] stuff i i like that phrase pay for
[24:14] shadows
[24:16] talk to me about paying for shadows
[24:19] everything has a cost
[24:20] there's no no free lunch in the in
[24:23] lighting
[24:25] so um yeah i mean like the i mean i
[24:29] i don't think i even can get too
[24:30] technical into it because i don't really
[24:32] know
[24:32] but um like every light has the option
[24:36] of being a shadow casting light and
[24:40] you know in computer graphics like
[24:41] shadows are
[24:44] generally extremely expensive uh one of
[24:47] the more expensive parts of rendering
[24:49] a theme um and
[24:52] and so whenever we use shadows we have
[24:55] to keep in mind um
[24:57] how many shadows we're using the more
[24:59] that you have
[25:00] on the scene at one given time it can
[25:02] kind of exponentially get more expensive
[25:06] and uh adds adds a cost both to the the
[25:10] gpu
[25:11] in terms of like actually rendering the
[25:12] shadows themselves and then also a cost
[25:14] on the cpu
[25:15] for all the additional draw calls that
[25:17] get uh introduced by
[25:19] um by the cpu trying to calculate uh
[25:23] you know how many extra shadows have to
[25:25] be
[25:26] computed right the the lighting budget
[25:29] if you would
[25:30] yeah exactly the overall lighting budget
[25:32] every
[25:34] every location doesn't have the same
[25:36] budget though but
[25:38] like how do you how do do you determine
[25:40] that is that something the art director
[25:41] determines how do you how do you
[25:43] determine
[25:44] like what your budget is for a
[25:45] particular location
[25:48] um i mean like we we generally get uh
[25:51] kind of guidelines from the graphics
[25:53] department uh again mostly because
[25:55] lighting is is almost purely a
[25:57] a graphics side of the the equation
[26:00] um so the graphics department gives us
[26:02] kind of a set of budgets
[26:04] to stick within and that's you know like
[26:06] the the number of overlapping shadows
[26:08] that you can have
[26:09] on screen at any given moment like two
[26:11] shadow casting lights next to each other
[26:14] um how many uh lights in general
[26:17] make up the overall scene that you can
[26:20] render on screen at one
[26:21] one moment and stuff like that and so
[26:26] we basically just have to stay within
[26:28] those those boundaries
[26:29] uh and then we also we have to allow for
[26:31] a certain amount of overhead
[26:33] for unknown light sources basically
[26:35] right because
[26:36] again this is like flashlights
[26:39] flashlights ships uh all of these things
[26:42] can
[26:43] depending on the location can be
[26:44] introduced to the location and then that
[26:46] just
[26:46] adds on top of that that budget and i
[26:49] imagine the
[26:51] size shape layout and everything of the
[26:53] location
[26:54] uh matters too because it's what you can
[26:57] hide behind a wall
[26:58] you know you know the the layout of the
[27:00] place what you can see at any given time
[27:02] well you would determine what can be
[27:04] hidden and unloaded from the
[27:06] you know from the from the computer so
[27:08] yeah
[27:09] it's like a something like an
[27:11] underground facility with a lot of
[27:13] twists and turns and hallways and
[27:14] whatnot probably frees you up to do a
[27:17] lot more
[27:18] but something like origin where it's
[27:21] sitting out
[27:22] and open and you can see one end of the
[27:25] city from the other
[27:27] uh that's got to be a a hell of a
[27:29] challenge
[27:30] yeah exactly so i mean like these kind
[27:32] of examples like we
[27:34] we generally love working on habs and
[27:36] and shops and stuff like that because
[27:37] they're
[27:38] not only they're very self-contained so
[27:40] you can you can do a lot but as you say
[27:42] because they're
[27:42] they're very confined environments
[27:44] within like a culling volume
[27:47] we can spend a lot more lighting budget
[27:49] uh
[27:50] you know really making it look as good
[27:52] as as good as we
[27:53] envisage it um whereas something like
[27:56] ours and
[27:57] outdoor environments in general there's
[27:59] a lot more
[28:00] a lot more variables at play that that
[28:03] always have to be rebalanced so
[28:05] you know when it comes to lighting
[28:07] somewhere like ours and there's just a
[28:08] constant process of
[28:10] iterating you know you make a bunch of
[28:11] changes
[28:13] those get populated because there's so
[28:14] many different like platforms which are
[28:16] duplicates of each other
[28:17] so if you add one light you could end up
[28:19] adding 500 lights
[28:20] to the overall scene of ours and then we
[28:24] have to balance
[28:25] using our various optimization methods
[28:28] to keep
[28:28] keypad numbers within a certain range
[28:31] yeah
[28:32] uh bed slayer and a couple other folks
[28:34] in chat have been asking about ray trace
[28:36] lighting
[28:36] that's actually a question for the
[28:38] graphics team
[28:40] uh bed slayer it's these are the
[28:42] lighting artists are the ones that use
[28:44] the tools that are provided to them
[28:46] and stuff and actually like it it's like
[28:49] to
[28:49] you're asking a question about where
[28:51] whether we'll get
[28:52] better or different brushes these are
[28:54] the guys that use the brushes to paint
[28:56] the picture so
[28:57] that's really a question for our
[28:59] graphics team i don't have any answer
[29:00] for you
[29:02] yeah exactly
[29:05] that wasn't my best analogy but i think
[29:06] it worked
[29:08] oh it works it works back to the
[29:10] lighting budget uh
[29:12] thing and the performance cost stuff
[29:16] have there ever been have there been
[29:18] moments where
[29:20] you have something and it looks just the
[29:22] way you want it
[29:24] and you're like so happy with it like
[29:26] this is perfect
[29:27] and then somebody has to come back to
[29:28] you and be like you're
[29:31] you're you're 50 entities over your
[29:32] budget it's like
[29:34] you've got to bring it back and like how
[29:37] how do you process that
[29:39] well i mean it it can happen absolutely
[29:43] and it's it's always pretty devastating
[29:45] um because you know it's like
[29:46] you gotta hack away at your baby take
[29:48] off some limbs
[29:49] and uh hope that it still is pretty
[29:53] but uh yeah i mean sometimes that's just
[29:55] the the cost of things like
[29:57] it it all it all comes down to weighing
[29:59] up like
[30:00] where we want the budgets to go so i
[30:02] mean like you know in a small
[30:04] environment like this
[30:05] where there's not so many much vfx for
[30:07] example
[30:08] if we wanted to or if there was a
[30:10] decision made you could
[30:11] push some more of the lighting budget
[30:13] into the in towards the vfx budget
[30:15] because they're not using it
[30:17] i mean the ultimate goal is always to
[30:18] get like a certain frame rate and
[30:20] everyone
[30:21] every department has their own little
[30:22] budgets to fit within that
[30:24] um but if some departments don't exist
[30:26] in a location then
[30:27] you know we can we can just kind of
[30:29] creep in there a little bit
[30:31] yeah well they say that adversity is the
[30:33] mother of invention
[30:36] uh many of you you see you know being
[30:39] able to do
[30:40] anything you want is not always a recipe
[30:42] for success
[30:44] uh you know you know famously when when
[30:48] george lucas struggled to make the
[30:50] movies he wanted
[30:52] you got star wars empire the jedi and
[30:55] when he had the power
[30:56] and the wealth and the resources to do
[30:58] anything he wanted we got phantom menace
[31:01] attack of the clones and revenge says so
[31:04] you know adversity can be a can be a
[31:05] good thing
[31:06] uh a lot of times but uh yeah
[31:09] how many battles do you have with the
[31:11] vfx team if i got mike snowden in here
[31:13] for a while
[31:13] in here would you would he have a bone
[31:15] to pick with you guys
[31:17] no i i don't think so i think i'm i'm on
[31:18] good speaking terms with mike
[31:20] as far as i know he may feel differently
[31:23] but no we we work uh
[31:24] like on our zone as well for example we
[31:26] work quite closely with the vfx team
[31:28] on some of the volumetric particles that
[31:31] they were adding onto the industrial
[31:32] platform
[31:33] um there was uh i think there was some
[31:35] improvements to
[31:36] the way that particles are lit um and
[31:39] how they receive light and cast shadows
[31:41] that was added a little while ago
[31:44] and so there was a bunch of vfx added to
[31:45] the industrial platform
[31:47] and so we had to work kind of together
[31:49] to make sure that
[31:50] their vfx looks really good and also
[31:52] that we kind of show off
[31:54] you know how nicely like the shadows
[31:55] cast through and how that
[31:57] we couldn't really do that before
[32:03] so where are we at zach what's been
[32:05] going on
[32:06] we've got a kind of like our bulbs in
[32:09] here our nice
[32:10] sexy bulbs and i've done a little bit of
[32:13] work
[32:14] yeah i don't know very pink and purple
[32:17] we've got uh of course
[32:21] if this is some sort of love den then
[32:23] the bed
[32:24] is gonna be quite important small
[32:29] it would be tricky wouldn't it it'd be a
[32:31] bit tricky
[32:32] if if you could quickly model out like a
[32:34] heart-shaped bed with like a nice
[32:36] leopard print
[32:37] uh cover i think that would go a long
[32:39] way absolutely
[32:41] just a sec on like a rotating platform
[32:48] these um teddy bears they're not in i
[32:51] saw one in louisville as well are they
[32:53] in some of the older hubs but not in the
[32:54] new ones
[32:56] that's a good question i thought we'd
[32:58] come down
[33:01] the teddy bear is a it's a much beloved
[33:03] asset
[33:04] by the environment understandably
[33:08] yeah well the props to you at least the
[33:10] props team sorry yes
[33:13] well the props team is on the
[33:14] environment team it's it's
[33:16] but i i i i i'm pretty sure it's the
[33:19] props team that's been
[33:21] dropping those in there so we could
[33:24] probably
[33:25] i mean i don't know how much how far you
[33:27] want to take this we could move on to
[33:29] the stage of
[33:30] there would be a lot further that we
[33:31] would take this and a lot of the kind of
[33:33] detail lightings in the
[33:34] the shelves and cupboards i haven't done
[33:37] but that stuff does take quite a lot of
[33:38] time
[33:39] so we could uh keep going or we could
[33:42] jump into the kind of transition
[33:45] phases with these lights yeah let's go
[33:47] into the transitions
[33:48] let's see that i've i've i i've redone
[33:51] mine
[33:52] and my mine took way less time than
[33:54] yours did
[33:55] so i mean i don't think it was just
[33:57] right right i don't want it yeah mine's
[33:59] got ray tracing
[34:00] and i don't have a shadow budget so
[34:03] i mean i don't want to tell you your job
[34:05] here zach but i mean
[34:06] it didn't take me much time to do this
[34:07] at all
[34:09] damn shots fired yeah i'm hurt
[34:18] okay so the transitions is where it gets
[34:22] a tiny bit more complicated um the way
[34:25] that these light groups appear when you
[34:27] first kind of drop them in
[34:29] the things that i mentioned at the
[34:30] beginning that kind of handle the
[34:32] transitions for the lights
[34:33] is that they just look like this and
[34:35] then
[34:36] you have to add within them these
[34:39] different kind of transitions
[34:42] and the way that you distinguish between
[34:44] them is with these
[34:46] uh styles um and we have some kind of
[34:49] like setup levels that show all of these
[34:51] there are some that flicker and there
[34:52] are some that fade and there are some
[34:54] that
[34:54] take longer and some that happen much
[34:56] quicker and we'll kind of jump back and
[34:58] forth between
[34:59] that setup level see what kind of
[35:01] transitions are going on grab
[35:03] the code for the one we want and put it
[35:05] in here and then you also
[35:06] establish how long you want the total
[35:08] transition to take
[35:09] and you give a couple of different
[35:11] offsets so if you wanted a bunch of
[35:12] different lights to have the same
[35:13] transition but happen at slightly
[35:15] different times
[35:16] um you'd use these kind of offset values
[35:18] to trigger them at different points
[35:23] when it works that's how how it happens
[35:26] yeah when it works
[35:27] yeah yeah it's uh
[35:30] it's it's a bit of a like it's a lot to
[35:33] wrap your mind around when you're
[35:35] when you're working on it but it's
[35:36] actually quite a powerful tool which
[35:38] gives us a lot of freedom to
[35:40] kind of create these transitions in uh
[35:42] in various different
[35:43] styles or uh you know you can get a lot
[35:45] of you can get quite creative with them
[35:51] so within the each of the individual
[35:53] lights has this section here
[35:55] for each state that says preset tag
[35:58] you define the the tag that you want for
[36:00] any given transition
[36:02] so like seek seek reverse sequence
[36:05] reverse flipper one
[36:06] flicker two and then you punch that into
[36:09] the light
[36:10] and you also punch in that id for the
[36:13] offset you want and you do that for
[36:15] every light basically and if you do it
[36:18] for each
[36:19] night you do have to do it
[36:22] but it does mean that you have a very
[36:24] like chris was kind of saying you have a
[36:26] very fine control and it's quite
[36:27] powerful in terms of if you have a
[36:29] vision for exactly
[36:30] what you want to do and you know how to
[36:32] do it you can get some quite interesting
[36:34] complex transitions
[36:38] not that i can do that right now
[36:43] yeah it takes a it's a lot of iteration
[36:45] time you know
[36:46] figuring out how what feels natural it's
[36:49] like it's a
[36:50] it's a balance between like what feels
[36:52] natural for how lights would behave
[36:54] what type of light it is if it's like a
[36:56] you know a compact fluorescent which
[36:58] like
[36:58] slowly flickers before the the power
[37:00] kind of comes on
[37:02] something incandescent where it has to
[37:04] burn for a little while before it
[37:05] reaches its full
[37:06] full brightness that kind of stuff um
[37:11] yeah it's a it takes a bit of iteration
[37:15] to go back and forth and you
[37:16] test the animation that you test the
[37:18] transition you see if it feels right
[37:20] you find what elements don't feel quite
[37:22] right and you go and you tweak them a
[37:23] little bit
[37:25] this hab looks so sterile after looking
[37:27] at our
[37:28] shack guys for so long
[37:34] i'm just cheating there and grabbing the
[37:35] values that i'd already used
[37:38] so i don't choke in the moment and
[37:40] completely mess up
[37:41] yeah there's a little bit of a cooking
[37:43] show here's one i prepared earlier
[37:45] yeah kind of uh workflow yeah we always
[37:48] have to
[37:49] we always have to make this disclaimer
[37:50] make this reminder that
[37:52] there is almost nothing in game
[37:54] development that can be
[37:56] finished in an hour uh
[37:59] every time we do one of these
[38:00] demonstration streams we are we are
[38:02] showing a very truncated version
[38:04] of the process uh either you know
[38:08] you are going through the process itself
[38:09] very truncated or
[38:11] there have been hours of prep and
[38:13] setting things up before the
[38:15] before the live stream so it's uh we
[38:17] always we always appreciate the time
[38:19] that you guys put into this but
[38:20] uh i love these shows because
[38:24] nobody else does these shows you'll
[38:26] never see
[38:27] you'll never see ea you know hanging out
[38:30] with
[38:30] lighting artists or props artists and
[38:32] showing how they make a box and stuff
[38:34] like that you'll never see
[38:35] you know activision doing this stuff my
[38:37] my first criteria
[38:38] people often ask like how do you do how
[38:39] do you determine what you're going to do
[38:40] on the shows and whatever
[38:42] like like most things you know multiple
[38:45] reasons but one of them is always
[38:47] would any other game studio do this and
[38:49] if the answer is no
[38:50] i'm instantly interested it's it's like
[38:53] i i i'll
[38:55] absolutely consider this if nobody else
[38:57] will do it
[38:58] um you know because i
[39:02] i don't want to get off on a on a rant
[39:04] here but it's
[39:05] one of the one of the things that one of
[39:08] the things that makes
[39:10] my job worth doing is highlighting
[39:13] as many aspects of game development as
[39:15] possible is
[39:16] is combating this notion that games are
[39:18] made by
[39:20] one person you know you know it's like
[39:22] when you watch
[39:23] what was that last game that uh kojima
[39:26] made the
[39:26] death stranding it's like kojima yeah
[39:28] it's like that is an okiejima game and
[39:31] his name is on everything and i'm sure
[39:32] he did a lot but there were also
[39:35] 100 other people who who who spent years
[39:38] making that game and i liked i like to
[39:40] give everybody at least their one hour
[39:43] yeah to shine people were like why did
[39:45] you do a show with the i.t
[39:46] people once i'm like because you think
[39:49] we could do any of this without the i.t
[39:50] people yeah
[39:51] i think they're not absolutely essential
[39:53] to the game development process
[39:55] yeah you give them one hour the unsung
[39:58] heroes
[39:59] that's the point that's the point it's i
[40:01] see this show if people are like
[40:03] if people are ever wondering what the
[40:04] purpose of this show is this one the one
[40:06] on friday
[40:07] it's about the unsung stuff it's it's my
[40:09] chance to
[40:10] just to show a light no pun intended
[40:14] to to show a light on uh the aspects of
[40:17] game development that never get
[40:18] shown anywhere else yeah are we does
[40:21] that mean we're not the glamorous
[40:23] front cover devs we're the unsung ones
[40:27] not the glossy print
[40:30] that's devastating not not at 23. maybe
[40:33] when you get older
[40:37] but i i i i think that's one of the yeah
[40:40] for me that's one of the nice things
[40:41] about
[40:42] this kind of open game development that
[40:44] we're doing is
[40:45] being able to show the process live and
[40:49] you know showing stuff at
[40:50] how we work and how we do it i think is
[40:53] for me it's quite interesting obviously
[40:54] as a game developer i'm interested in
[40:56] game development so
[40:58] um yeah i think it's quite it's quite
[41:01] fun to
[41:01] to show the community this stuff and uh
[41:04] hopefully also interesting to people
[41:05] oh yeah no it's it's uh people have uh
[41:10] mean to me a little bit for uh for
[41:12] ending
[41:13] uh every isc with what did we learn this
[41:15] week but it's
[41:16] it's oh i do it for a couple like i said
[41:19] most things you do it for a couple of
[41:20] reasons one of the reasons i do
[41:21] is because somebody who meant a lot for
[41:23] me and got me my start in this industry
[41:25] used to say that
[41:26] so it's my tribute to them but second is
[41:30] that i want to always remind people that
[41:32] the purpose of this step is education
[41:34] it's not it's you know sometimes
[41:36] sometimes
[41:37] sometimes this stuff you know dips into
[41:40] marketing
[41:41] and stuff like this you know i work for
[41:42] a marketing department it's absolutely
[41:43] true there's a marketing element to it
[41:46] but uh i always try to come at it from
[41:48] an education standpoint
[41:49] that's where my that's where my passion
[41:51] is i used to be a teacher
[41:53] way back when so
[41:57] what did you teach okay uh i taught
[42:01] uh high school uh
[42:04] drama well i i i i i
[42:08] i taught at a performing arts high
[42:10] school actually uh you ever seen that
[42:11] high school musical
[42:12] show i taught at the high school that
[42:15] was the basis
[42:16] of that show so it was a performing arts
[42:19] high school
[42:20] where kids actually did break out into
[42:22] song and dance in the
[42:23] hallways is there a character based on
[42:26] you
[42:28] no no no no uh high school musical had
[42:30] already been like it had already been
[42:31] out but it's been
[42:32] i don't know i don't know if it had
[42:34] already been out i don't know i've never
[42:36] seen a high school musical i just know
[42:37] it's based on that
[42:38] school okay
[42:48] i really like the pink and gold that you
[42:50] started out with
[42:51] though and so did the chat like when we
[42:53] first started the uh
[42:55] when we first started the screen share
[42:56] like chat was like we need this
[42:58] put this in the game oh that this one's
[43:00] more gold than pink
[43:01] right now but yeah pink lights are off
[43:05] yeah what you had at the beginning that
[43:06] was that nice mix of pink and gold
[43:08] looked really cool i butchered it so i
[43:11] could show the transitions
[43:13] because all of the interesting lights i
[43:15] already had on in the default
[43:18] so we can bring them back but then we
[43:21] don't get our
[43:22] transitions so i i like that transition
[43:26] how they they turn on
[43:27] you know in the direction coming towards
[43:29] the camera i think that feels really
[43:30] cool
[43:31] white skies i'm sorry no you go you go
[43:34] uh i was going off topic
[43:38] uh white skies major says like i'm so
[43:39] bad at improv
[43:41] in school but now i'm role playing in d
[43:43] d uh
[43:44] and they asked if we play d and d do you
[43:46] guys play d d
[43:48] i i have unfortunately never played dnd
[43:50] i hear great things
[43:52] i've heard from a lot of people that
[43:53] it's a lot of fun but i've never had the
[43:55] opportunity the the answer is yes i play
[43:57] d d in fact i i host a uh
[44:00] d d live stream on my personal twitch
[44:02] channel every two weeks
[44:03] there's a game tonight actually i'm not
[44:06] here to promote it so i won't tell you
[44:07] where the channel is or what time
[44:09] but yes i've also never played it
[44:13] in the club of sandwich haters and
[44:16] religious
[44:17] d not players coffee hating and t hating
[44:26] [Laughter]
[44:30] you're american i mean zack's british
[44:31] he's he's genetically predisposed
[44:34] to liking tea yeah i'll be torn to
[44:36] shreds if that gets out but i don't like
[44:38] to
[44:39] but you don't like to you just don't
[44:40] want it to get out i definitely like to
[44:44] just to be clear he does not look very
[44:46] convincing
[44:47] look at look at his cam look at his
[44:49] camera right here look at that does that
[44:50] look very convincing
[44:52] i like i love tea
[44:56] and fish and chips i love fish and chips
[44:59] i'm okay with fish and chips chips is
[45:01] great
[45:02] but tea is just hot garbage hot garbage
[45:05] water
[45:07] it's like it's like here here's hot
[45:09] water and a little bag of dirt
[45:14] but coffee's just a spot oh i don't like
[45:16] off either so you won't get any argument
[45:17] from
[45:18] either so there you go zac you're among
[45:21] like company
[45:25] what was the other thing we brought up
[45:26] earlier there are dozens of you
[45:28] [Laughter]
[45:30] oh beer don't like beer yeah
[45:34] because a lot of uh the lighting team is
[45:36] german
[45:37] about half of us are german so that was
[45:39] a controversial one as well
[45:45] um i mean i've kind of i feel like we've
[45:46] kind of showed
[45:48] i can just keep going or we can do
[45:51] something else
[45:52] well we've got about what 15 minutes
[45:54] left
[45:55] we could try some like different color
[45:56] schemes maybe like without uh
[45:58] you know going too far into it but like
[46:00] just pick the
[46:02] swap around like the the primaries and
[46:03] secondaries
[46:05] we can do that other kind of moods we
[46:06] can get we can do that or
[46:11] we we no it's that i was going to say or
[46:14] we could just add all the lights and
[46:16] and just keep adding lights
[46:19] until the engine crashes and then as
[46:21] soon as that happens we're done
[46:25] that that was me the uh if you were
[46:28] wondering what that sound was that was
[46:29] me
[46:29] like having that one of those little
[46:30] angel and devil arguments
[46:32] you know on one on each shoulder it's
[46:34] like how i really just want to crash the
[46:36] engine
[46:37] it's like i'm in a very subversive mood
[46:40] today
[46:42] it's uh it's been a little crash happy
[46:45] with me
[46:45] the last couple of days so we're doing
[46:47] well that it hasn't cracked
[46:49] yeah absolutely in the stream behaving
[46:51] very well
[46:54] so we don't want to anchor it too much
[46:59] all right so uh we got we got 15 minutes
[47:02] we'll ask the chat
[47:03] uh chat if we were to create another
[47:05] mood
[47:06] what other what other mood let's look at
[47:09] your sexy time put your sexy time on
[47:11] there
[47:11] let us see your sexy time did you just
[47:13] mess up the sexy time
[47:14] yeah we're going back here we go the
[47:16] power of undo yeah
[47:18] yeah that's a way to crash it yeah so so
[47:20] we've got our sexy time here what other
[47:22] mood should we get
[47:23] [Music]
[47:30] can we do a red alert yeah we can do
[47:33] that
[47:35] it's due red alert in the uh in the have
[47:36] what what is an emergency
[47:39] lighting state for a habit for for a hab
[47:41] look like
[47:42] yeah everything is right submarine red
[47:46] absolutely red on red on red uh disco
[47:49] mood you just you just saw disco moon
[47:51] like it's
[47:51] all there what is going on with my hair
[47:54] today
[47:56] this is this is i took a shower this
[47:58] morning and then didn't do anything with
[47:59] it
[48:00] that's what that is
[48:10] red wow
[48:14] yes there's a new
[48:18] a little a little more s m club rather
[48:20] than uh
[48:21] sensual sexy times it reminds me of um
[48:26] the prison house oh i'm in the wrong
[48:28] level
[48:29] but the prison hubs have kind of a nice
[48:32] alternate light state that leans on red
[48:35] emergency sexy time
[48:41] oh yeah there we go
[48:51] ah and now yeah here we go there you go
[48:59] i don't like the red and the blue though
[49:02] yeah
[49:03] red and blue is very uh it's very
[49:06] um star wars 789
[49:09] kind of vibes
[49:13] i always go back to superman superman
[49:17] too
[49:18] the superman 2 was all right i prefer
[49:19] superman though
[49:27] superman 2 did have kneel before zod
[49:29] though
[49:30] it's pretty good yeah planet
[49:33] houston
[49:37] you see there were years where every
[49:39] time someone would bring up houston it'd
[49:40] be like
[49:41] planet houston nobody knew what the heck
[49:43] i was talking about
[49:46] how long how many years did you feel
[49:48] what was that
[49:49] what did you just do there that was me
[49:51] accidentally instead of clicking this
[49:53] slider
[49:54] perfectly to input a value clicking and
[49:57] dragging
[49:57] and then setting the light value at
[49:59] twenty seven thousand
[50:03] yeah several professional sun's worth of
[50:06] intensity
[50:11] so you're saying that just adding more
[50:13] light is not the answer to these
[50:14] situations
[50:16] not always not always just sometimes
[50:20] sometimes you have to go too far before
[50:22] you realize
[50:23] what how how good you had it before
[50:26] oh yeah no it's it's actually it's
[50:30] actually a very
[50:31] a very common refrain in many aspects of
[50:34] game development it's it's it's
[50:36] it's you you bring it to the point of
[50:37] excess and then you bring it back to the
[50:39] point and then you start dialing it back
[50:40] you start dialing it back down
[50:42] because because if you just keep if you
[50:46] just keep
[50:46] building and building and building and
[50:48] building you never know if you've gotten
[50:49] where you need to be
[50:50] you know you never got to know if you've
[50:51] gotten accidentally go past the line
[50:53] is that you have to go past the line you
[50:55] you have to find the line
[50:57] and then you come back to just before it
[50:59] and that's how you know that you've
[51:00] pushed something as far as it can go
[51:02] yeah if you never find that line
[51:07] that's definitely ian our art director's
[51:09] approach to fog
[51:12] get more fog more fog in there
[51:16] i'm messaging ian right now
[51:20] yep
[51:27] [Music]
[51:44] as promised everything is red
[51:47] red almost almost there
[51:51] once we get there uh zach could you do
[51:53] me one favor and add like a really nice
[51:56] strong bright either white or red key
[51:59] light
[51:59] that like kind of casts a shadow like
[52:01] either blinks or like like flashes
[52:03] or like spins around that would be cool
[52:06] oh my god yes i don't know how to do it
[52:09] spinning around off the top of my head
[52:10] but you can talk me through it and do a
[52:12] live
[52:12] just rotate the tutorial just manually
[52:16] rotate it
[52:17] exactly that's the secret it's like a
[52:21] it's like that simpsons joke where i
[52:23] can't remember someone was talking about
[52:25] animating live like if the the animated
[52:27] show was a live broadcast and they said
[52:29] no that would be a terrible strain on
[52:30] the animator's wrists
[52:35] didn't they do something though that
[52:37] they did they did something where like
[52:38] like three minutes of it was
[52:40] was like voice acted live i thought they
[52:43] i thought simpsons did an episode where
[52:45] like one section of it was supposedly
[52:47] like the voice record
[52:49] was a voice acted live yeah that sounds
[52:52] about right i think
[52:53] simpsons has probably tried just about
[52:55] everything at this point
[52:56] yeah i don't know i haven't seen an
[52:59] episode of the simpsons
[53:00] since like the fifth season uh when
[53:03] whenever whenever they shot mr burns
[53:07] that's when you gave up he was that was
[53:10] the line for you
[53:11] yeah it was before the movie was out
[53:13] i've never seen the movie
[53:15] it's pretty good i enjoyed the movie i
[53:18] think the movie was
[53:19] better than it had any right to be shots
[53:22] fired at simpsons
[53:27] yeah spoiler alert they shot mr burns
[53:32] wow what was that like 1994 1995. i
[53:36] haven't had
[53:37] somewhere around there
[53:43] and you get to be my age it all just
[53:44] blurs
[53:50] we go from the back towards the door
[53:54] absolutely
[54:03] yeah so there should be i think down in
[54:05] the options there's like a
[54:07] angular speed uh setting
[54:10] it's down onto the general options or
[54:14] under the animation settings
[54:18] uh it's trying to read like a
[54:22] a list of values under pressure angular
[54:24] speed
[54:26] yeah somewhat something like five
[54:27] hundred twisters
[54:29] turn it back on and then you gotta find
[54:32] the right
[54:35] how do you what you just have to spin it
[54:36] around yeah
[54:39] so i think you want to spin it on y like
[54:41] 90 degrees
[54:42] to get it to go horizontally
[54:55] there you go oh is that it i went
[54:58] straight past it
[55:00] there we go
[55:06] oh yes there you go it's panic inducing
[55:10] as it should be now make it red
[55:14] surely that's too much and
[55:17] much brighter yeah there you go oh jesus
[55:22] maybe too much red
[55:29] that's not what you want to wake up to
[55:30] is it no
[55:32] i i love how the the white is though is
[55:35] is washing out the red as it passes over
[55:37] it's
[55:41] it's always my absolute my absolute
[55:44] favorite thing in all of game dev is
[55:45] when something works exactly like you
[55:47] would expect it to in real life
[55:49] it's like when you when you do when you
[55:51] do that like hey that's
[55:52] that's that's just like it should be
[55:55] it's just how i expect it to be
[55:56] yeah just how you expect it to be which
[55:58] is such a weird thing because it's like
[56:00] i think so much of game dev is actually
[56:01] striving for just that
[56:03] it's it's like if we're doing it right
[56:06] it shouldn't
[56:06] seem weird or different to you
[56:10] it shouldn't seem impressive it should
[56:11] just seem like it's a beautiful moment
[56:13] when it works
[56:19] there you go
[56:25] ah it's not as good when it doesn't cast
[56:26] those nice long yeah you got
[56:28] to get the
[56:36] that's a lot of the like the general
[56:38] pipeline that we do as well like we just
[56:39] stick a big bright key light
[56:41] in the scene and find what looks good
[56:43] from what angle where you get the nicest
[56:45] shadows
[56:46] and then kind of build it out from there
[56:50] and we always every time then add a
[56:53] fixture
[56:53] that that light should be emitted yeah
[56:55] exactly and then we tell the environment
[56:58] art people okay now make it actually fit
[57:00] into the environment
[57:01] it's one of those because that's where
[57:02] the light is going to go cart before the
[57:04] horse
[57:04] things you guys come in you try to work
[57:07] with what's there
[57:08] and then you get to a point where it's
[57:09] like i really want a light right
[57:12] here it's like this looks so good if i
[57:13] could have a light right here and you
[57:14] have to go back to the environment guys
[57:16] and be like
[57:19] oh i didn't know you could do that
[57:25] it does feel very star wars as well
[57:29] uh uh try making it a gold
[57:38] yeah yeah
[57:42] now it's iron man's workshop
[57:46] i give it like a flash give it like a
[57:47] style of two is like the crazy flash i
[57:52] think
[57:54] yes
[58:02] now what happens if you push the button
[58:03] is it is it is it going to like
[58:05] gracefully go back to the default state
[58:07] or have we completely
[58:08] passed it
[58:09] [Laughter]
[58:14] ah that's that's not too bad it's a
[58:16] little not bad
[58:17] it's a little weird yeah that that red
[58:21] to pink transition doesn't feel so good
[58:23] but
[58:23] no and it's really slow
[58:27] yeah yeah
[58:31] we can finesse that later we'll show it
[58:33] to ian see what he thinks flip it
[58:36] just ship it yes yeah yeah well but
[58:39] show it to ian to be like this zach made
[58:41] this today and after the message i just
[58:43] sent him
[58:43] i'll have a really great opinion about
[58:45] that zach
[58:46] i'm gonna need to try to come
[58:50] we can try and like hide a button
[58:52] somewhere in the hab you know something
[58:53] secret where if you push it then this is
[58:55] what you get
[58:57] hey absolutely you get you get is there
[58:59] a limit to the number of light states
[59:02] uh yeah unfortunately the uh the light
[59:04] groups only handle
[59:05] technically four states so like off
[59:07] default auxiliary and emergency because
[59:09] it was
[59:10] it was the feature was initially
[59:11] designed for ships specifically
[59:13] so even though like the nomenclature of
[59:16] auxiliary and emergency doesn't always
[59:17] match up to what we're doing with the
[59:18] light states we're
[59:19] kind of bound by those four states for
[59:21] now
[59:22] cool well that's it gentlemen
[59:26] we did it yeah right on time nice yeah
[59:29] we did it
[59:30] uh thank you so much for taking your
[59:32] time and hanging out with us
[59:34] uh zach is your first is your first any
[59:37] kind of video for us
[59:39] it is it's been a pleasure very good
[59:42] thank you
[59:43] still want to work here it well if i'm
[59:46] allowed to
[59:47] after this after you've called me out to
[59:49] ian on several things oh wait
[59:51] ian's responded uh is
[59:54] are you kidding sort of
[59:58] all right um thanks everybody
[1:00:02] uh thanks for watching this has been
[1:00:03] star citizen live uh we are still
[1:00:05] on our isc uh hiatus uh
[1:00:09] but uh we'll be back here with another
[1:00:10] episode of star citizen live next week
[1:00:12] uh for the lighting team that's it it's
[1:00:15] chris
[1:00:17] and that's zach and i'm
[1:00:20] hair i just i'm realizing i don't look
[1:00:24] at myself very often and i'm like i
[1:00:25] gotta do something about this soon
[1:00:27] i'll talk to you later everybody take
[1:00:28] care bye bye guys
[1:00:57] you

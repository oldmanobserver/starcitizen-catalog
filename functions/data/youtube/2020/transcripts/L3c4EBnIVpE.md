# Star Citizen Live: The Pico Proposition

**Video:** https://www.youtube.com/watch?v=L3c4EBnIVpE
**Date:** 2020-11-13
**Duration:** 59:35

## Transcript

[00:03] hi
[00:03] everybody welcome to another episode of
[00:05] star citizen live
[00:07] game dev the pico proposition i'm your
[00:09] host jared huckabee
[00:10] and if you've never seen star citizen
[00:12] live before it's where we take about an
[00:13] hour
[00:14] out of our day at the end of a week kick
[00:16] back hang out sometimes we
[00:18] do some q a sometimes we follow along
[00:20] with the developer and take a look at a
[00:22] bit of their process
[00:24] this week we are doing the process show
[00:26] and joining us on the show this week
[00:27] is john carney from the uk uh
[00:31] props and weapons team john how you
[00:32] doing man i'm not surprised man thanks
[00:34] for having me it's always a pleasure to
[00:35] be here thanks for hanging out
[00:37] the you've done one of one of these
[00:39] shows before
[00:40] yeah so when i just started a couple of
[00:42] months in i was uh
[00:44] i was on with uh corey for the 8.90
[00:46] right and that was it that was
[00:47] way over a year ago now which is crazy
[00:49] coming up on two years here
[00:51] is it all just blurs together for me if
[00:53] i'm being completely honest
[00:55] it does feel like since we've locked
[00:58] down everything
[00:58] everything's sort of been on pause but
[01:00] then everything carries on at the same
[01:01] time as well it's good
[01:03] i was just saying because i'm i'm i'm on
[01:05] six years at this point so it's hard to
[01:06] tell the difference between
[01:08] it's like what year did we do that in
[01:09] what version of the show were we doing
[01:10] then uh
[01:12] so uh today uh as a member of the props
[01:16] and weapons teams
[01:17] uh we are we are going to follow along
[01:19] with the creation
[01:20] of a uh of an asset uh for the star
[01:23] citizen persistent universe
[01:25] uh can you tell us what we're making
[01:26] today uh well we were such a big fan of
[01:29] the halloween episode that uh we felt
[01:31] that the
[01:32] the diy sort of castaway pico head
[01:36] uh needed to be in the game um we
[01:38] decided we were gonna make it and put it
[01:40] i actually if i thought about this ahead
[01:41] of time i would have grabbed it hold on
[01:56] so so yeah this is this this is the
[01:59] online we've got to keep it in focus so
[02:00] this is the
[02:01] this is the pico we'll go back to full
[02:03] screen here real quick so this is the
[02:05] this is the picot ball uh that was
[02:07] created by yours truly
[02:09] for our halloween episode this year um
[02:14] it it is masterful i'm not going to lie
[02:16] i'm not going to lie like normally
[02:18] you know it's like it's like i'll do a
[02:20] little humility a little humility a
[02:21] little
[02:22] little humble pie here but not not on
[02:24] this guy this this is this is this
[02:26] over on the prop scene we were very
[02:27] impressed this is this will be my legacy
[02:30] uh so we are going we're going to create
[02:32] we're going to see if we can't create
[02:34] this
[02:34] uh in engine uh for addition to the
[02:37] persistent universe
[02:38] so if you want why don't you go ahead
[02:40] and uh share your screen
[02:42] we'll get started and all right
[02:45] the john carney pico proposition that
[02:47] sounds like an album name
[02:48] the john carney pico preposition i'll be
[02:50] coming after the show
[02:52] we'll get started all right uh yeah so
[02:54] like all great models
[02:55] it starts with humble beginnings with a
[02:57] cube
[02:58] um i suppose what i really explain is at
[03:01] first what i was after doing was sort of
[03:02] like
[03:03] breaking down the model into the sort of
[03:04] shapes and i'm sure like you started
[03:06] with the volleyball and built onto it
[03:08] i sort of wanted to approach the model
[03:09] from the same way so start with a
[03:11] volleyball
[03:12] which a bit weird to start with a cube
[03:15] but by turbo smoothing it pretty quickly
[03:17] we can get a sphere
[03:18] and they're already that sort of like
[03:20] squared for uh sphere what
[03:22] we're already 90 of the way there you
[03:24] really sell the difficulty of your work
[03:25] right there
[03:27] done completed uh one thing i do
[03:30] because i'm really lazy is i'm just
[03:32] going to actually work on one face and
[03:33] i'm going to copy it
[03:34] around in instances so i'll sort of
[03:37] explain that
[03:38] that's a very common thing when you talk
[03:39] to artists as much as i have
[03:41] they they love symmetry because it
[03:44] allows them to
[03:45] just make one half of it and then copy
[03:48] it
[03:49] yeah work um work smart not hard that's
[03:52] what i always say
[03:54] so now yeah we're just going to be able
[03:55] to make changes oh you know what
[03:57] speaking of uh working smart i've not
[04:01] actually set them as instances
[04:02] so just to demonstrate for that is for
[04:04] anyone at home who isn't familiar with
[04:06] max's
[04:07] now basically when i make changes to
[04:08] this face it'll make changes to that one
[04:10] we can make little dances with our
[04:11] models like this um
[04:14] and then yeah we need all our sides to
[04:16] make it a
[04:17] a good volleyball otherwise it won't
[04:19] bounce very well
[04:21] and then now that we've got this like
[04:23] one face as well as just like making
[04:25] changes to the
[04:26] individual faces on it we can actually
[04:28] apply modifiers in macs
[04:30] that will um apply to all of them now so
[04:32] if we put another turbo smooth on this
[04:35] you can see it's applied to all of them
[04:37] so now i can almost forget about
[04:39] those ones and just work entirely off
[04:41] this one
[04:42] and um looking at our reference always
[04:45] got to work from reference
[04:46] uh these volleyballs you know they have
[04:48] the they're split into sort of panels
[04:50] um i was never good at sports so i don't
[04:53] know i'm just
[04:54] that's what i'm guessing from the photo
[04:56] um so we're going to split these into
[04:58] panels
[05:01] so these are still part of the same
[05:02] model but they're now detached so from
[05:04] there we can apply
[05:05] a shell modifier which is basically
[05:07] going to make these planes become
[05:09] 3d so they have a little bit of depth to
[05:10] it and
[05:12] you have to crank it a little bit more
[05:13] than that
[05:15] so we have our sort of like rubber
[05:17] panels that would go in the volleyball
[05:19] and then if we apply a chamfer
[05:22] to soften the edges a little bit and
[05:24] then our turbo smooth on top
[05:28] we should have some pretty high poly
[05:30] nice looking panels
[05:32] right on the high door you can see the
[05:34] rest of them
[05:35] these are probably going to need a 90
[05:37] degree rotation on them i feel like the
[05:39] uh
[05:40] maker of the original volleyball be
[05:42] throwing up right now and how easily
[05:44] you're doing this
[05:46] i spent so much time inventing the
[05:47] original volleyball
[05:49] and i've copied it in 30 seconds
[05:52] um so yeah not good to have a holes on
[05:55] your volleyball all the air is going to
[05:56] come out so i'm just going to throw a
[05:57] push modifier on
[05:59] which as you can imagine it's just going
[06:00] to push everything out a little bit
[06:02] to fill the crevices and then that's it
[06:05] we have our volleyball
[06:06] which is it's 90 of uh of the project
[06:10] um so yeah then from here we thought all
[06:13] right how are we gonna how are we gonna
[06:14] get tape on the model
[06:15] and get that sort of tape look um so
[06:19] just copying the geo of one of the
[06:21] models because again i'm a lazy artist
[06:23] i'm not going to make something again
[06:25] remember you got an hour to fill yeah i
[06:28] should probably slow down a bit
[06:30] well and you know in actual production
[06:32] what i did now is i made a coffee
[06:34] i drank it and i played a game of pool
[06:36] by myself in the office
[06:37] and then then i came back to so if i
[06:40] detach this now
[06:43] i have my tape she's got hidden away for
[06:46] a second
[06:47] and i'm just gonna make my life a little
[06:49] bit easier and make that a different
[06:51] color so i can see it
[06:55] um so we'll give that a little bit more
[06:57] geo so we can play around with it i'm
[06:59] gonna
[06:59] show one of my favorite tools which is
[07:01] the conform tool
[07:02] um so if you can imagine
[07:06] you know tape sits very close to what
[07:09] you stick it to
[07:09] right uh so to get this to stick this
[07:12] closely now it could be very tedious
[07:16] job of moving all the edges in try and
[07:18] get it as flush as possible
[07:20] so instead i use the conform tool where
[07:22] i can pick a surface
[07:24] in this case i'm picking this one and
[07:26] now i can get all the verts and i can
[07:29] it should paint and conform it
[07:33] in true game that fashion it's not
[07:35] working
[07:37] uh uh someone in the chat was asking if
[07:40] you've
[07:40] if you pre-gamed any of this
[07:44] if i made so if i what prepared
[07:46] something earlier
[07:47] yeah like like you see you seem to have
[07:48] all these steps down and
[07:50] you're speaking in the past tense when
[07:51] you explain yourself like the next thing
[07:53] i did
[07:54] the next thing i did you so it's
[07:58] i had a little think before the stream
[08:00] of how i did it and what i was going to
[08:01] talk about so
[08:02] you know it's not completely off the
[08:03] cusp but yeah i i i may have
[08:05] done it before it might be a surprise
[08:07] we'll see we'll see how far we get
[08:09] in the street well it's it's people who
[08:12] watch the game dev streams
[08:13] know that we you very rarely if ever can
[08:15] make something
[08:16] in an hour in that case then yeah
[08:20] the gig's up i've i've made this before
[08:23] guys
[08:24] but you know i'm going to show you the
[08:26] to show you the steps
[08:28] um you sit on a throne of lies
[08:35] it's it's all real guys i promise yeah
[08:37] it's just like a a
[08:39] gone link dead has a it's just like
[08:40] cooking on tv it's like when they sit
[08:42] there they go to the cooking show
[08:43] and oh yeah that's not the first time
[08:45] and they said like we're gonna do this
[08:46] we're gonna do it
[08:47] they do all the mixing ingredients here
[08:48] and they chop everything they put in the
[08:49] oven and they go to the
[08:51] oven that's right next to it and here's
[08:52] what it looks like when it's done
[08:55] yeah yeah i was i might just get it
[08:57] working now and as you can see
[08:59] using the conform tool i can paint this
[09:02] uh
[09:02] really really close to the surface to
[09:04] get that tape like effect i probably
[09:06] should have uh before i did that
[09:08] give it a little bit of rotation because
[09:09] nothing's ever perfect especially when
[09:11] you're applying tape
[09:13] is that a dig at me uh
[09:17] let's just say we love the sort of
[09:18] little quirks of the production of the
[09:21] the pico high it wasn't perfect but we
[09:23] love it for that hey i'm i may i made
[09:25] the
[09:25] i made the original in about 20 minutes
[09:28] so
[09:29] count disco made the original from what
[09:31] i understand
[09:34] that's right so yeah that's fair yeah
[09:36] yeah from here same process again we've
[09:38] shelled it a little bit so we get a
[09:39] little bit of depth and one thing i like
[09:40] to do as well
[09:41] uh again to reiterate the point
[09:43] nothing's ever perfect we're gonna throw
[09:45] a little bit of noise on
[09:47] um and that's just gonna make it wrinkly
[09:49] we don't like it too wrinkly
[09:52] that's probably a good example of what
[09:54] your wrinkly is
[09:57] as you can see a little bit of surface
[09:58] noise
[10:00] it adds a lot of character and again to
[10:02] uh
[10:03] to own up yes i have made one before
[10:06] um and this is what it looks like with a
[10:09] couple of more pieces of
[10:10] tape on it and if i get the tape there
[10:14] as well so yeah this would be
[10:19] this is over number two that i'm pulling
[10:20] the food out of
[10:22] um you know a couple of a couple of more
[10:25] times spent
[10:26] applying those bits of tape and getting
[10:28] it to look natural we've uh
[10:30] we've basically got got this and a lot
[10:32] of these wrinkles and stuff that aren't
[10:33] in the high poly we can we can add one
[10:35] with texturing as well you don't
[10:36] have to do everything in the high poly
[10:38] you're just trying to get the general
[10:40] shapes and forms and so i i did the same
[10:43] thing
[10:43] um that i did with the tape then for the
[10:46] smaller bits of tape and i
[10:48] quickly modeled you know these are just
[10:50] plains
[10:52] have been dragged out and down to sort
[10:53] of get that like card look
[10:55] and same again they've had a little bit
[10:57] of noise applied to them you can sort of
[10:59] see
[10:59] in their shape they're not completely
[11:01] perfect
[11:02] uh nothing ever is with especially with
[11:04] arts and crafts sort of stuff
[11:06] um and then yeah we've got our little a
[11:08] little nose put on
[11:10] and he's taped that on as well we
[11:11] experiment with the idea of putting like
[11:13] buttons for
[11:14] eyes you know that you'd get on like
[11:15] sock puppets or something but
[11:17] we decided to stay true to the original
[11:21] uh eco head um
[11:24] and then yeah from a high poly obviously
[11:27] this
[11:28] super dense can't put this model in game
[11:31] as much as i'd love to
[11:32] uh corey would fire me uh the game
[11:34] wouldn't run
[11:35] so i have to make a low poly and through
[11:38] texture and magic we're basically going
[11:39] to get
[11:40] a lot of this information onto the low
[11:42] poly in the form of a texture
[11:44] so i'm gonna do something called bacon
[11:46] and when we're baking
[11:47] basically the uh high poly is gonna sit
[11:51] above the low poly and through the
[11:53] magical process of bacon
[11:54] it's gonna it's gonna sort of uh emboss
[11:57] all that details down so i think i have
[12:00] i think i have one i can show so this is
[12:02] our
[12:03] texturing package that we do for unique
[12:04] textures i'm sure if
[12:06] they've seen the sort of um show before
[12:08] they know our usual workflow on props is
[12:10] that we use a lot of thailand textures
[12:12] and we get a lot of our details um
[12:15] through pom
[12:16] uh this this is one of the sort of few
[12:17] instances that everyone on the prop team
[12:20] uh jumps with joy to get to do where we
[12:22] get to make something completely unique
[12:23] with a high and low and
[12:25] it just means we gotta get that extra
[12:26] level of detail and stuff because we're
[12:28] not relying on
[12:29] doing everything with tile levels so
[12:31] when we are doing those unique textures
[12:33] we use a substituter so we're bringing
[12:36] in our low poly which
[12:37] as you can see on its own not really
[12:39] getting the whole uh
[12:41] not really getting the pico vibe from it
[12:42] yet we bring in our high poly
[12:44] which we've seen with all our tape on it
[12:46] our little nose popping out and
[12:48] all those little imperfections in the
[12:50] noise and we can do a little bake
[12:54] and that's basically getting all the
[12:55] detail from the high and it's putting it
[12:57] on our low and it's going to give the
[12:58] illusion that there's
[12:59] sort of geometry there that isn't uh so
[13:02] we look at this now
[13:04] we can see that it appears like there's
[13:05] tape on this thing but it is actually
[13:08] perfectly flat well it's very cool sure
[13:11] you see where i'm coming from
[13:13] and that is uh that's you've seen behind
[13:16] the curtain that's how we do everything
[13:18] nothing is real
[13:19] everything's baked that's how you get
[13:22] that's how you get it to be performative
[13:23] while still maintaining you know all the
[13:26] detail that people have absolutely
[13:27] absolutely yeah this is this is how we
[13:28] get it to to actually run as much as i'd
[13:31] love to just stick the high poly model
[13:33] yeah
[13:33] straight in we use that we use it uh in
[13:36] our ships as well you know
[13:37] all that parallax occlusion mapping yeah
[13:39] yeah
[13:41] it's like when you see the uh the the
[13:44] floor grating
[13:45] that looks like there's a there's a
[13:47] tract underneath your feet with a bunch
[13:48] of cables and everything that's not
[13:50] actually there that was tricky trick of
[13:53] the year it's quite clever and
[13:54] because we have that sort of technology
[13:56] to do that it means that we can sort of
[13:58] create a game with such
[13:59] huge scope you know yeah universe size
[14:03] game because uh because of all those
[14:05] little sort of like savings we get from
[14:06] doing things like that
[14:08] um so yeah we've got our we've got our
[14:11] very basic
[14:12] pico with the information from the
[14:15] high poly breakdown um i've gone through
[14:18] the effort
[14:19] all the tedious boring process of
[14:21] exporting it and putting it
[14:22] into uh into editor we've got our little
[14:25] scene here
[14:27] count disco gave me permission to make
[14:29] the pico head so
[14:30] in return we've given him a little shout
[14:32] out on another volleyball
[14:33] and to create this sort of
[14:35] castaway-esque scene
[14:36] you know i think every good prop tells a
[14:38] story we've placed them
[14:40] by the sea on the hosting so as
[14:47] somewhere in the future these things
[14:49] have washed up and someone someone in
[14:51] the verse is going to find them
[14:52] and know that uh yeah know that count
[14:54] disco was here with these uh his pete go
[14:56] ahead
[14:59] so yeah we can't leave it like this in
[15:01] the game it's a little bit boring so we
[15:02] better get some textures on it
[15:04] um so you might have noticed when i was
[15:06] in uh max that i have all these funky
[15:08] colors
[15:08] on the pico head that isn't the intended
[15:10] final color scheme for this thing
[15:12] what i'm making is a an id map so if you
[15:15] imagine when you come to
[15:16] texture in the package you're going to
[15:18] want to be able to quickly highlight
[15:20] all the tape so i can make all the tape
[15:22] the tape material i can make the
[15:23] volleyball the volleyball material in
[15:25] the paper this and
[15:26] and uh because there's actually no
[15:27] details on the low poly
[15:29] there's no way of selecting where the
[15:31] tape's going to be
[15:32] so we bake out something called an id
[15:35] mask
[15:36] you can see here it's like a
[15:40] it's a colorful mask that breaks
[15:41] everything up i'll find a better way to
[15:43] show it
[15:44] so right now let's say we want the
[15:46] volleyball to be
[15:47] red which we don't
[15:51] if we add the mask with a color
[15:52] selection then pick the color we bring
[15:54] our mask up
[15:55] and now i can just color pick the green
[15:58] um and i'll put it on the tape or i
[16:00] could color pick the orange that puts it
[16:02] on the nose and this is just gonna
[16:04] speed up the the texture in tenfold
[16:08] and hopefully hopefully means we can get
[16:10] this done within the hour otherwise it
[16:12] would be a very long stream
[16:14] um so first things first i'll probably
[16:16] start breaking things down into folders
[16:18] and getting sort of like base textures
[16:20] in
[16:21] uh so the volleyball is obviously going
[16:23] to be white but i think we'll do a bit
[16:24] of like a an off-white you know
[16:26] where yeah it seems it's seen some
[16:30] it seems yeah yeah i mean it's washed up
[16:32] and hurst and it's uh
[16:34] it's uh it has it has a it's had a hard
[16:37] life
[16:38] so if we could pick that and we can
[16:39] apply it straight to the volleyball
[16:42] and as you can see we're off so we'll do
[16:45] another folder this one will do
[16:47] yeah i should probably set a good
[16:48] example and name these things
[16:52] not let everyone know how messy i
[16:53] actually work in real life
[16:55] for those who asked what program uh you
[16:56] can see in the upper left-hand corner
[16:58] right now we're in substance painter
[17:00] yeah so this is um algorithmic i believe
[17:03] make substance painter
[17:04] we use a couple of other softwares um i
[17:07] think in the 890 episode that was last
[17:08] on
[17:09] we were using designer
[17:13] but this is painter so for this we'll do
[17:15] we'll call this one
[17:16] uh the black tape um
[17:19] and then we'll put a layer in there and
[17:21] i know you know that
[17:23] material wise they're probably not being
[17:24] sold as what they're intended to be at
[17:26] the moment but these
[17:27] we really are just like blocking in
[17:29] colors the same way you know if you
[17:31] if you're making a painting or a
[17:33] portrait of someone you wouldn't
[17:34] immediately jump into just
[17:35] painting in perfect detail what their
[17:36] eyeball looks like you blocking the big
[17:38] shapes that's
[17:39] basically what we're doing here
[17:43] uh for a grand lebowski who says why are
[17:46] they doing this instead of programming
[17:49] uh because i am not a programmer and
[17:52] neither is john yeah i mean i could i
[17:54] could try and program
[17:56] john is a props artist so he's he's
[17:59] doing what he does
[18:00] and i am a video host so i'm doing what
[18:04] i do
[18:05] doing a great job as well can i say
[18:10] maybe yeah maybe for the next stream uh
[18:12] i'll have a go at programming
[18:14] see how far we get that would that
[18:17] that that would be an interesting show
[18:19] at some point like at some point like
[18:21] i i haven't hit i haven't hit everything
[18:23] we can do yet but at some point i'm
[18:24] going to run out of stuff
[18:26] then we'll start doing like we'll start
[18:27] doing like challenge shows where we take
[18:30] programmers and have them work in hr for
[18:32] a day yeah yeah
[18:34] just see what goes on for all the people
[18:37] that seem to think
[18:38] uh each person can do everybody's job
[18:42] all right if only if only it was that
[18:44] simple i wish it was
[18:48] so we've got our masking tape folder
[18:52] and then again with our masking tape
[18:54] we'll do a bit of a
[18:55] an off-color desaturate a bit
[18:59] there we go the good thing about these
[19:02] um this color mask is you might see that
[19:05] there's a little bit of like bleeding
[19:07] at the moment um we can play around with
[19:09] the tolerance of the mask
[19:12] um so we can play around
[19:15] so it just covers just the edges and
[19:16] that way we're not getting any of these
[19:18] uh
[19:19] white lines between things
[19:22] um yeah so we're just missing the top
[19:24] bits
[19:30] yeah this would have been a lot easier
[19:31] for you to if you made the diy pico head
[19:33] a lot simpler you know
[19:38] yeah i i mean honestly you're you're you
[19:40] got based on how long it took me to make
[19:42] the original you got like three minutes
[19:43] left
[19:44] [Laughter]
[19:47] in in our artist challenge jared versus
[19:49] john you if you can't finish this in
[19:51] three minutes i'm
[19:52] clearly the yeah i think it might be it
[19:54] might be time to open the third oven
[19:56] and get the finished thing out if i've
[19:58] got three minutes left no
[20:00] so i'm just going to play around with
[20:01] this tolerance again get rid of those
[20:03] you can see those white edges
[20:04] disappearing on the
[20:05] tape yeah all right awesome so yeah this
[20:08] is
[20:08] uh very boring very basic but we've uh
[20:13] we've blocked it in and then here comes
[20:15] the boring bits where we have to uh
[20:16] export our textures and then if i've got
[20:20] everything correctly linked
[20:22] these should start to appear yeah we've
[20:24] got our basic basic textures in
[20:26] so on the sec other screen because it's
[20:28] really boring i'll just
[20:29] get those exported and we can get a get
[20:32] a first look of what it's going to look
[20:33] like
[20:34] um in engine
[20:37] amongst this amongst the sea
[20:45] every time you say that i want to sing
[20:46] beyond the sea and i'm i'm really
[20:48] holding myself hey yeah don't make me
[20:50] hold you back man go crazy
[20:52] now i will say i noticed uh some of the
[20:55] you took some artistic license with the
[20:57] with the small little tape bits
[21:00] yeah yeah no i like i like them i'm i'm
[21:03] not complaining at all
[21:04] i'm just saying yeah no my modelling
[21:05] scores aren't as good as your craft
[21:06] skills so that's a how to compensate you
[21:08] know
[21:09] i think it has a little bit of character
[21:10] it does it does
[21:12] um i like him he looks i don't know
[21:14] about you but he looks
[21:16] he's really weirding me out without any
[21:17] eyes yes so
[21:19] just to make me feel a little bit more
[21:20] comfortable i'm just going to give him
[21:22] some eyes because i don't like the
[21:24] sort of like void blanks there i'm
[21:26] getting from the whole thing
[21:27] um so if we put a layer over everything
[21:30] and we just call this
[21:33] marker pen oh not market pen
[21:39] and then we add a black mask but this
[21:40] time rather than using the
[21:42] id to mask it we can just kind of paint
[21:44] straight onto it
[21:46] and then we can paint our little pico
[21:48] eyes um don't worry we're going to
[21:49] refine those later
[21:50] they're not going to stay looking like
[21:52] that shimmy
[21:56] this is how pico feels right now because
[21:59] he uh
[22:00] he's he's not looking his best that's
[22:02] how he feels
[22:03] so usually about now i'd go through like
[22:05] my sort of second pass
[22:06] of refining materials so i think we'll
[22:09] do that i think we'll start with the
[22:10] volleyball and
[22:12] uh we'll elaborate on this sort of like
[22:15] base texture
[22:16] that we have so a specular we're going
[22:19] to keep quite low because we don't want
[22:20] it reflecting too much light
[22:22] i'm going to ramp the glossiness a
[22:23] little bit so it looks
[22:25] sort of brand new which sounds crazy but
[22:28] we're going to make it count during the
[22:29] other layers so
[22:30] the base one will keep it quite clean so
[22:33] when we were
[22:34] doing our bacon before you'll see that
[22:35] we generate a bunch of masks as well as
[22:37] like normal
[22:38] and ambient occlusion we've got things
[22:40] like curvature position thickness
[22:43] those maps don't actually go in the game
[22:45] but the helpers
[22:47] use the smart masks in the software when
[22:49] we're texturing so i'll explain that a
[22:51] little bit
[22:52] so just for the sake of an example we
[22:54] get a really bright color like a red
[22:56] and we'll uh mask it we can use
[22:59] something called
[23:00] smart mask which is where it's going to
[23:01] sort of look at those maps that we baked
[23:03] and look at the curvature of the model
[23:05] look at the crevices on the model um and
[23:08] figure out where things like dust
[23:10] and rust would uh begin to accumulate
[23:13] and it'll mask it out for us so here's a
[23:16] good example this mask wow
[23:18] yeah so using all those maps that we
[23:21] baked from the high to the low
[23:23] it's now figuring out you know despite
[23:25] there actually being no crevice here
[23:26] perfectly flat it's figuring out you
[23:28] know on the high poly and the real thing
[23:31] is where they would go and that's how we
[23:32] can get that sort of like extra level of
[23:34] detail on our models that
[23:35] as artists we love to love to do
[23:39] so for the color i'm gonna pick our base
[23:42] one
[23:43] and i imagine it would get just a little
[23:44] bit darker in these crevices
[23:46] as things like dust and dirt would get
[23:48] in there and obviously they wouldn't be
[23:49] very
[23:50] glossy we'd want them to be quite rough
[23:53] and if we throw a height layer on just
[23:56] drop it a little bit
[23:57] you can almost like subtract from the
[23:59] model a little bit
[24:02] death snake says who betsey will be a
[24:03] sub item it won't be a sub item
[24:07] um if i just play around with
[24:10] our masks there as well we can actually
[24:12] play with the intensity of how it's
[24:13] spreading
[24:15] i i don't actually know if i want to use
[24:17] this mask i think
[24:19] um try trying to remember what i may
[24:23] have used on one i made earlier
[24:26] i think something like this whoa
[24:30] yeah so you start starting to get that
[24:31] sort of like surface noise that you
[24:33] would get on a as you can imagine like
[24:34] quite an aged volleyball
[24:36] like you know it's it wouldn't just be
[24:37] perfectly smooth like this
[24:39] it would have some sort of texture to it
[24:41] i mean otherwise you know your hand
[24:42] wouldn't grip when you're playing
[24:43] volleyball
[24:45] um so we pull that back a little bit
[24:47] because we just want to be subtle about
[24:48] it we don't want to go
[24:49] overboard you know right um and then on
[24:52] top of this
[24:53] we'll just add a little bit of dirt so a
[24:55] lot of the texturing process is like
[24:56] this it's sort of like slowly building
[24:58] it up in layers and then you'll go back
[25:00] and you'll do another pass and maybe
[25:02] you'll
[25:02] take away or add a little bit more and
[25:04] stuff it's a very iterative process
[25:07] i think sometimes people think we just
[25:08] sort of like get it right first time or
[25:11] something and i
[25:11] assure you that's never the case i don't
[25:14] think that's ever been the case in
[25:16] any video game in the history of video
[25:18] game development yeah we got it the
[25:19] first time
[25:21] yeah nailed it i sat down and it just
[25:23] like
[25:24] sprang out of my head like hercules from
[25:26] z from zeus just
[25:28] into into creation that's not how it
[25:30] works so i think we'll throw some
[25:32] some like scratches on here um
[25:36] again just to imply that this thing is
[25:38] uh you know washed up on the shores of
[25:40] hurston
[25:41] it's not been well looked after again
[25:44] if we uh subtract on the height we can
[25:48] start to get a little bit of like
[25:49] surface information not too much
[25:52] you know just just a little sort of
[25:53] thing and uh
[25:56] yeah it's gonna i think our mask might
[25:58] be played up because it seems to be
[26:00] putting it everywhere
[26:02] i think we'll leave the volleyball for
[26:03] now and we'll move on to the tape
[26:06] oh we've lost his eyes again so yeah
[26:09] same thing for the tape
[26:11] um we had our base layer which was just
[26:14] a plain flat i think it's a little bit
[26:15] too dark
[26:17] and i'm just going to bring that up a
[26:18] little bit same thing again we're going
[26:20] to want a bit of a
[26:22] sort of like noise on the surface to
[26:23] really sell it as tape
[26:25] so rather than add in another layer with
[26:27] colors on it or something i'm going to
[26:28] add a height layer
[26:29] and then in the subsus design they have
[26:31] all these really cool sort of like
[26:33] procedural generators
[26:34] that will just generate um
[26:37] sort of like various types of noise um
[26:40] so we'll go on here that's like a clouds
[26:42] three
[26:43] uh if we apply this to our height oh
[26:45] yeah that's a great one
[26:46] that's a great clouds three is a really
[26:49] choice
[26:50] it's a fan favorite that's for sure in
[26:53] my heart it's clouds one
[26:56] so we play around with the scale on this
[26:59] um
[26:59] and then would you want to drop the
[27:01] intensity because this is
[27:02] even for for heavy dewy doctor this is
[27:05] pretty intense
[27:06] um so go into our height layer and
[27:10] so this side panel here works just like
[27:12] photoshop in that you know we can play
[27:13] around with
[27:14] how the layer overlays and its opacity
[27:17] and that sort of stuff
[27:19] draw that down just a little bit got a
[27:21] little bit of surface noise for our duct
[27:23] tape
[27:24] um one thing i haven't done yet which i
[27:26] like to do on all my models just to
[27:27] really help sell
[27:29] um sort of like 3dness of it
[27:33] is a one of our textures that we got
[27:35] from bacon
[27:36] uh ambient occlusion which is just a
[27:39] sort of map that highlights all the
[27:41] sort of crevices and the shadows and
[27:44] stuff so this is what it looks like
[27:45] like standard and then one cheeky little
[27:48] trick we do
[27:49] is we overlay that with a multiply over
[27:52] all our other work
[27:53] i just play around with the opacity here
[27:54] you can see how it just sort of fills in
[27:56] the crevices
[27:57] yeah makes everything pop a little bit
[27:59] you start to get shadows forming
[28:01] in these areas which you know we're
[28:03] trying to imply that these are two
[28:05] little bits of paper that aren't
[28:06] touching or anything
[28:07] um you know we know they're actually
[28:10] exactly just
[28:11] one poly but uh by using our
[28:14] ambient occlusion we can help help solve
[28:16] that so i'm just going to do another
[28:18] export again
[28:19] to get an update of how uh our
[28:20] volleyball material is coming
[28:22] in engine i think sometimes uh
[28:27] you can get quite stuck and focused on
[28:29] making things look nice in here and then
[28:30] by the time
[28:31] you export it in engine and put it in a
[28:32] hanger or wherever it is you intend for
[28:35] the model to go eventually
[28:36] it can end up looking completely
[28:38] different to what you actually intended
[28:41] it's always important that we sort of
[28:42] flick back and forth even though it
[28:44] involves this long tedious process of
[28:46] exporting all our textures through
[28:48] photoshop
[28:56] okay and this should update pretty
[28:58] quickly ah so there we go
[29:00] i think maybe went a little bit too
[29:02] yellow with the volleyball
[29:04] um but yeah all our surface information
[29:07] is coming through
[29:08] uh ignore these bits because uh i've
[29:10] just you know i've turned the layers off
[29:12] so they're not appearing
[29:13] um we just sort of like focusing on the
[29:15] volleyball material for now
[29:18] yeah i think we're getting there we're
[29:19] okay with the volleyball material
[29:21] we'll keep pushing all the other ones
[29:23] okay so you want
[29:24] you're about halfway through right now
[29:26] all right awesome uh
[29:27] so foil foil's always a tricky one
[29:31] um trying to get like metals to render
[29:34] correctly in here
[29:35] and in engine they sort of render a
[29:37] little bit differently so we sort of
[29:38] have to
[29:40] just through trial and error we know
[29:41] what it's going to look like in here and
[29:42] it'll look wrong but we know by the time
[29:44] it gets an engine
[29:45] it'll look uh it'll look it'll look
[29:47] right
[29:48] so from when i definitely didn't make
[29:51] one prior
[29:52] from what i can remember i think i used
[29:54] a chrome or
[29:56] uh procedural generator to get that sort
[29:58] of uh wrinkly effect that you get on
[30:00] foil
[30:02] uh if i bring back my reference again
[30:04] we're basically trying to recreate this
[30:06] at the moment
[30:10] um so we're just going to want this in
[30:13] the height
[30:15] so if we drop the height and we add a
[30:16] mask
[30:18] and then we use the chrome pull in our
[30:20] mask
[30:28] and hopefully see you know i think for
[30:30] the time being i'm just going to throw a
[30:32] blank material on there so we can see it
[30:33] better
[30:34] you can see we're starting to get that
[30:35] uh that rippled effect
[30:39] if we ramp that up a little bit
[30:43] yeah we're starting to get that sort of
[30:44] like wrinkly tinfoil i'm just going to
[30:46] change the scale a little bit
[30:48] so there we go now we're getting tin
[30:50] foil
[30:51] and then i'm just gonna drop the
[30:53] intensity of it a little bit
[30:55] it's a little bit too much for my liking
[30:58] and then get rid of the layer i just
[31:01] added
[31:03] you see you can get lost quite quickly
[31:05] with all the other layers you're adding
[31:07] especially when you're
[31:09] being naughty and not naming it
[31:13] see if our foil is looking like foil and
[31:14] engine again
[31:30] are people uh people liking pico in the
[31:33] uh in the old shot
[31:36] for the most part some some some
[31:39] some folks are are
[31:42] let's just let's just say that the uh
[31:44] the mercury star runner hit the ptu
[31:46] yesterday so
[31:50] we've got some attention com uh
[31:52] competition at the moment
[31:54] all right it's a big picture
[31:57] that's a good looking ship
[32:00] hey we've not finished yet man don't
[32:02] we're not down and out yet
[32:04] we've still got 30 minutes to sell pico
[32:06] [Laughter]
[32:10] look at that the tinfoil coming through
[32:11] you're telling me that the ship looks
[32:13] better than this tin foil
[32:17] i don't know this is pretty good
[32:20] yeah i hope you can see as well the the
[32:23] difference and
[32:24] how it renders in the in the package
[32:27] it looks like black treacle but uh yeah
[32:30] just trial and error through uh texture
[32:31] and so many props
[32:33] you can almost see what it's gonna look
[32:35] like an engine by how bad it looks like
[32:37] in painter
[32:38] yeah i i feel like uh
[32:41] some of the wrinkles that you added to
[32:43] the foil
[32:45] would probably work for the tape as well
[32:47] not to that extent but as i'm looking at
[32:49] the original
[32:50] uh the tape is actually fairly wrinkled
[32:52] as well
[32:53] yeah we could probably add that and then
[32:55] change the scale so it's probably not as
[32:57] scaled under yeah because you don't want
[32:58] it to look just like a different colored
[33:00] foil
[33:00] yeah totally change the severity change
[33:03] the scale
[33:04] from the original pico creator himself i
[33:07] will be here
[33:08] on his suggestion i'll be adding some
[33:09] crumples
[33:11] um i just will put it in the height
[33:15] again
[33:16] we'll add a black mask we'll use our
[33:18] crumples again
[33:20] definitely getting my use out of the
[33:21] crumble texture today
[33:23] at some point after this goes into the
[33:26] uh
[33:26] after this goes into the uh pu
[33:30] there'll be there'll be people who take
[33:32] this thing and take it to the basketball
[33:34] court
[33:37] oh you couldn't do that to pick up use
[33:39] the new improved throw
[33:43] so yeah maybe something maybe something
[33:44] like this it's not quite as intense i
[33:46] think one more thing we could do is
[33:47] probably
[33:49] if we added a blur to the crumbles so
[33:52] they're a little bit softer
[33:55] uh dragon ghost says can you confirm
[33:57] price on msr no
[33:58] john is a props artist he does not have
[34:00] that information
[34:02] nor do i as a video person
[34:06] i could have a guess
[34:09] um if i just get the base texture i
[34:11] think the our tape's probably looking a
[34:13] little bit too shiny
[34:14] for tape so i'm just going to drop the
[34:16] glossiness a little bit
[34:18] and hopefully if we compare our gloss
[34:20] values in here
[34:22] yeah we should get a little bit of
[34:23] contrast uh i think the noise we added
[34:26] as well
[34:28] i'm gonna see if we can add a little bit
[34:30] of that noise in the gloss so if we go
[34:32] back to our procedural
[34:34] generators again and we'll look for a
[34:37] grunge one
[34:39] i do appreciate the harry carry
[34:40] reference stone steeler
[34:46] i worked with real hairy carry in 1995.
[34:50] that was the year i was born i hate to
[34:52] make you feel old oh
[34:53] that was the year i was born ah it was a
[34:56] good year
[34:57] you you met that person i was born
[35:01] maybe evens out
[35:08] yeah and i'm asking tapes again though
[35:10] it's an iterative process i'm
[35:12] i'm not putting a you know i'm putting a
[35:14] pin in the uh the tape for now we'll
[35:16] come back to that
[35:20] masking tape it's not a whole lot you
[35:23] can do with masking tape it's pretty
[35:24] plain
[35:25] but uh we'll do our best we're gonna
[35:27] drop the gloss on it a little bit
[35:29] because it's not very glossy
[35:32] i think i'm just going to bump the
[35:34] height a little bit as well and that's
[35:35] just going to make it uh
[35:36] pop out a little bit really give that
[35:39] illusion of depth
[35:41] um i might just lighten that color a
[35:43] little bit
[35:44] there we go a bit more masking tape
[35:48] um and he needs his beak picot picot's
[35:51] got to have his beak
[35:53] his beak was originally created from a
[35:55] uh the
[35:56] manila envelope that uh the uh brian
[36:00] chambers wig was shipped to us in
[36:03] i was i was wondering why you got the
[36:04] yellow card i thought i thought you'd uh
[36:06] well i should say i thought uh count
[36:08] disco had gone to the craft store and
[36:10] you know really
[36:11] really went all out on the pico head
[36:18] you know i should probably be looking at
[36:20] my uh
[36:21] my reference as a good artist should i
[36:24] think
[36:25] see a question from the chat uh does the
[36:27] pickleball come with lti
[36:30] of course
[36:35] put this in a little folder called
[36:39] pico is very important beak
[36:43] he's lifetime terror insurance
[36:49] okay he's really coming to life now i
[36:51] think i think i think the big selling it
[36:54] once again gonna drop the glossiness on
[36:56] that it's a very shiny beak
[37:01] and for his helmet tops
[37:04] they're great again not so much you can
[37:07] do with them they are just card after
[37:08] all
[37:11] drop the gloss on those there we go so i
[37:14] think we should probably jump into uh
[37:15] into the pen and some pen details
[37:19] the pen details uh
[37:23] and then we need uh i like the eyebrows
[37:27] the original well it looks a little
[37:29] aggressive well
[37:31] technically the the original did have i
[37:34] i guess it's kind of a unibrow
[37:36] let me let me can you can you see the
[37:38] camera as i'm as i'm showing it to you
[37:42] so so so like like the tape ended here
[37:46] yeah and then this is drawn in the this
[37:49] is this is this
[37:49] this is drawn in in the same thing so
[37:53] yeah okay we'll do that the creator has
[37:56] spoken
[37:58] well um just kind of i could just keep
[38:00] this here and just make it
[38:04] i'll start comparing it and it'll make
[38:05] it'll make me feel bad
[38:07] i know i can never live up to it no it's
[38:10] great like i said i
[38:11] i really like the the the little it's
[38:14] like scotch tape editions
[38:16] yeah it's i think it's a they're a
[38:17] genuine improvement on the original
[38:20] okay oh he's not supposed to be that
[38:24] cool
[38:26] you know what i'm gonna start with a new
[38:30] texture
[38:34] i promise when i uh when i'm not making
[38:36] things on stream
[38:37] i am very meticulous and i name all my
[38:39] layers
[38:41] i see if cory's listening to this some
[38:43] layers are called new layer one
[38:52] terrible to show the folder of how many
[38:54] final versions of even
[38:56] even just the halloween episode there
[38:57] was there's you know final v2
[39:00] really final final this time one one one
[39:04] one i've i've been there
[39:07] um okay yeah so probably won't
[39:10] paint with this because it doesn't look
[39:12] very pen like so we'll go back into our
[39:13] alphas
[39:14] and we have lots of cool uh swirly brush
[39:17] type ones
[39:19] they're a little bit more marker penny
[39:21] and
[39:22] we're going to do some other tricks down
[39:23] the line to really help sell it as
[39:25] as pen so just bear with me audience
[39:29] for the time period um
[39:34] i get my uh my reference up again
[39:38] yeah so he's got these big mono brows i
[39:40] see what you've done you've tried to
[39:42] you've you've used the tape to bulk in
[39:43] the most of the the color black and then
[39:45] you've
[39:46] you've sort of softened the edges with
[39:47] your pen am i right actually no i i only
[39:49] did the pen in the in the center there
[39:51] was no pin on the other ones
[39:53] no no the side no there's no there's no
[39:55] pain on the sides at all
[39:56] that's correct it's just it was just in
[39:59] the center
[40:01] okay no problem yeah just just the
[40:03] monobrow in the center
[40:11] there we go see he's got he's got a lot
[40:15] more of a face now i think yeah yeah
[40:19] he's looking a bit yeah the monobrow was
[40:21] essential
[40:23] it was it was definitely a deal breaker
[40:24] yeah without it it was not pico
[40:28] okay yeah no so i think i'll do the eyes
[40:30] on another layer because i have a
[40:31] suspicion that
[40:32] i will say i'm doing this with a mouse
[40:34] right now and i usually have a tablet so
[40:35] my drawing abilities it's not the best
[40:38] right now hey
[40:39] paul jones draws with a mouse paul jones
[40:42] has the steadiest
[40:43] mouse hand of any human being i've ever
[40:45] seen i'm not there yet
[40:47] i'm getting there like like we actually
[40:49] we did a little
[40:50] we did a little competition with with
[40:52] paul jones once like he he can draw
[40:54] a perfectly straight line without the
[40:57] mouse
[40:57] with a mouse without holding down you
[41:00] know any alignment
[41:01] keys he don't you don't think he's got
[41:03] like a ruler on his mouse mat
[41:05] he's tricking you i've seen it i've seen
[41:07] i've seen your life i just it just
[41:09] you just you just like he did it once
[41:11] and we're like that's a fluke
[41:12] and he just went line after line after
[41:15] line up the line
[41:15] like how does that happen and he's not
[41:18] rocking like he's not rocking like a 600
[41:21] mouse or anything with 9 million dpi he
[41:23] just
[41:24] he's just it's just the man just magic
[41:28] so i noticed uh in all your eye drawing
[41:32] ability
[41:32] we've just got a little bit of white a
[41:34] little bit of black missing on the end
[41:36] there
[41:37] yeah that was my artistic flair oh
[41:40] hey i was sold man
[41:45] i think it really adds character you
[41:46] know if we zoom out now
[41:50] yeah the one on the right a lot more
[41:51] character yeah
[41:57] there you go so it's a little rough
[42:00] we'll export this we'll go we'll get a
[42:01] little update on how it's looking in
[42:03] editor
[42:04] and uh yeah we'll we'll come back on
[42:06] iterate
[42:07] this is not the final version of the ice
[42:10] no
[42:14] do you think uh do you think count disco
[42:16] would approve of this so far
[42:18] so far i'm curious what we're going to
[42:22] do for the visor though
[42:24] oh i might have not had a plan for the
[42:27] visa
[42:28] i was wondering i was like in all the
[42:30] versions you've shown me
[42:31] the visor hasn't been there man you
[42:34] picked 45 minutes in the stream to to
[42:36] point out the visor
[42:37] we could have gone back to like minute
[42:40] three i could have done but don't know
[42:41] about that
[42:42] i so i suppose um i mean i said at the
[42:45] beginning every
[42:46] every good prop has a little bit of
[42:47] storytelling in it we could say the
[42:49] visor
[42:50] fell off in its journey across the
[42:52] oceans
[42:56] we not sold not sold
[42:59] i i i i'm i'm i'm i'm just i'm i'm just
[43:02] curious to see what you're going to do
[43:07] yeah it fell off pico um
[43:10] prizes for when you're in space and uh
[43:12] he's on the planet now so he's popped
[43:13] his visor up he's hidden away behind the
[43:15] tape
[43:16] and uh yeah he's just chilling now i
[43:19] keep forgetting to get rid of that uh we
[43:20] went really yellow on the ball
[43:22] yeah and it lived the weathered life but
[43:25] i don't know if it lived that was a
[43:26] double life
[43:27] just gonna go back and tweak that
[43:34] and we'll make a little light a little
[43:35] bit more
[43:39] see dissatisfied iterative this is the
[43:41] this is the side of art you probably
[43:43] don't get a c which is me spending 20
[43:45] minutes
[43:45] uh changing it going into engine going
[43:48] no coming back
[43:49] changing it uh and then changing it back
[43:51] and then
[43:52] settling for what i originally had in
[43:53] the first place eventually
[44:00] so i'm gonna get rid of that find our
[44:04] marker pen
[44:05] which i definitely
[44:10] and then yeah over time you know like
[44:12] marker pen always gets like rubbed away
[44:14] and stuff
[44:14] we're gonna try and like recreate that
[44:16] effect of like uh
[44:18] you know it's sort of missing in the
[44:19] texture of the ball and the crevices and
[44:20] stuff so we put this in a folder
[44:23] and we call er pen
[44:28] and we're going to do exactly what we
[44:29] did before when we were sort of adding
[44:30] details to the crevices of the
[44:32] volleyball
[44:33] but this time we're going to take away
[44:34] so rather than adding pen to the
[44:36] crevices we're gonna take it away from
[44:37] the crevices and stuff and
[44:39] hopefully get that sort of rubbed effect
[44:40] on it um
[44:42] so if we go back into our smart masks
[44:44] and we'll look for
[44:45] [Music]
[44:47] you know what we'll just play around
[44:48] with all of them
[44:50] yes red wolf the whole scl is going to
[44:53] be
[44:53] this
[44:55] [Laughter]
[44:57] every friday 50 some odd weeks a year
[45:01] after six years there's like hundreds of
[45:03] these this is what this one is
[45:07] so you can see we're sort of getting it
[45:09] it's like rubbed away a little bit
[45:12] that's cool yeah it's probably a little
[45:14] bit intense
[45:16] we keep it at that for now and then one
[45:17] thing i always like to do just to give a
[45:19] bit of a human touch because
[45:21] these automated generation things never
[45:23] sort of get it
[45:25] always quite right needs an artist's
[45:27] touch otherwise i'm out of a job
[45:33] needs a nice touch definitely let's have
[45:34] computers do everything
[45:36] so if we make you know what this isn't
[45:39] the brush we want
[45:41] how about however else
[45:44] think something like this and we just
[45:47] imagine
[45:48] that as uh count disco is making it
[45:52] his uh his elbow has just just smudged
[45:55] the corner of the eye a little bit but
[45:58] he's not bothered to
[45:59] put it back he's fine with it and then
[46:00] when he was doing the other side he's
[46:02] oh no he didn't smudge it that much his
[46:04] elbow smudged it a little bit there as
[46:06] well
[46:07] and somewhere in his journey across the
[46:09] universe flown across the ocean
[46:12] lost a little bit there as well um
[46:15] i'm not making this up these are all
[46:16] artistic decisions that i'm making
[46:20] years training go into this sort of
[46:22] decision making
[46:23] that's what i want to know well not too
[46:24] many years mr i was born in 1995
[46:27] too many years um two maybe three
[46:32] i lost a little bit more here and yeah
[46:33] there's just a lot more character now if
[46:35] we
[46:36] you know just a little bit more
[46:40] yeah see how this comes out
[46:46] you know what whilst those exploring as
[46:48] well i'll do a little bit more work
[46:50] giving you two birds one stone um so our
[46:53] card at the top it's probably looking a
[46:55] little bit boring i think we're going to
[46:56] need a little bit of texture for that
[46:58] um so we've got our base one here we've
[47:00] dropped the gloss so it's a bit more
[47:01] papery
[47:02] i'm just going to add another layer and
[47:04] we're going to do what we did before i
[47:05] don't think we're going to use the
[47:08] oh no actually we'll use the crumple
[47:09] again we'll get we'll get our use out of
[47:11] it today
[47:17] chat's pretty insistent on the visor i
[47:19] don't think we'll have time for the
[47:20] visor today guys
[47:24] yeah maybe i could after the stream i
[47:27] could make a few tweaks
[47:30] unfortunately the visor requires going
[47:32] back like to step three
[47:34] [Laughter]
[47:36] and adding it before we baked it down
[47:39] was was no one buying the story that it
[47:40] fell off in space
[47:41] was no one no one buying that this is
[47:43] this is the star citizen crowd
[47:47] please no no no that's that's not true
[47:50] it's just about it's just about fidelity
[47:52] yeah i mean it's about they know a
[47:53] thing's supposed to be there and it's
[47:55] not there
[47:56] they're big pico fans they know they
[47:58] know how we should look
[47:59] and i understand yeah it's just so yeah
[48:02] it's just about the fidelity i've got
[48:05] the crumples on the top so
[48:07] it's getting a little bit more solder's
[48:08] paper now if i just turn that off you
[48:09] can see what we had before versus what
[48:10] we have now
[48:12] um in fact i think i've done such a good
[48:13] job on that if i say so myself
[48:15] i'm going to do it for the the nose as
[48:17] well because it's a little bit weird
[48:18] that everything got so tattered
[48:20] in space but his nose
[48:23] remained pristine so i think we're going
[48:25] to need a little bit on his on his nose
[48:33] and
[48:34] drop the height once again add a mask
[48:46] yeah so we'll explore that we'll see how
[48:48] this is looking in uh
[48:50] in engine
[48:53] i wonder if we could paint a visor on
[48:58] you've got 10 minutes left got 10
[49:01] minutes i think i'll go
[49:02] do a couple more uh editions
[49:06] and then i may i may open the third oven
[49:08] and reveal a finished one
[49:14] but i think i think we've done quite
[49:15] well for 45 minutes if if anything
[49:18] i think i think my lead corey's gonna
[49:20] he's gonna have some questions about how
[49:22] quickly i've done this
[49:23] i think he's gonna be cracking the whip
[49:24] on monday a little bit too quick
[49:33] ah there we go our details are coming in
[49:36] now yeah i think that's the right amount
[49:37] of uh
[49:38] sort of disheveledness yeah grunts
[49:42] the tin foils still looking quite shiny
[49:44] i think what i'm gonna start doing now
[49:45] rather than working on each of the uh
[49:49] individual materials is sort of like uh
[49:52] start focusing on the sort of that
[49:53] accumulates over the whole thing because
[49:55] you know it's looking quite pristine
[49:56] considering it's uh it's literally
[49:58] washed up on the banks
[49:59] outside laureville with all the rubble
[50:02] and the the space seaweed
[50:05] so yeah we'll do a couple more sort of
[50:08] overall passes with grunge
[50:12] if i stick all of this in a folder
[50:16] i will just call it
[50:20] um call it base it's got the base
[50:23] and then we'll add a dirt layer so
[50:28] we get looking for that sort of like
[50:30] maroony
[50:32] brownie wet sort of mud
[50:36] but then you know we probably don't want
[50:37] to be too specific to this area if it's
[50:39] going to be across the universe so
[50:41] we'll keep it sort of like generic
[50:44] generic sort of dirt
[50:49] there we go and uh dirt is very rarely
[50:52] glossy
[50:54] so we'll bring that right back and we'll
[50:57] turn off the normal
[50:58] keep the height and add a little bit of
[51:00] height information to it so it pops
[51:02] and then we're gonna go play around with
[51:03] those smart masks we've been playing
[51:05] around with so much today
[51:06] so again using all that sort of
[51:08] information we baked out like its
[51:09] position in the world we can do all
[51:10] sorts of cool masks like uh
[51:12] ground dirt so it will literally know
[51:15] what the base where the base of this
[51:17] model is and where the top is
[51:19] um from the maps that we baked and be
[51:21] able to
[51:22] sort of mask the dirt specifically to
[51:24] the bottom
[51:27] you see we're we're just getting it on
[51:28] the bottom yeah and i'll
[51:30] fade out slowly upwards just gonna pop
[51:33] the height on that a little bit
[51:36] really drop the gloss on the spec
[51:42] yeah pico seen bad days that's for sure
[51:47] i have to bring the angry eyebrows back
[51:49] i don't think you'd be happy about this
[51:52] um we'll do one more so at this point as
[51:54] things start to get noisy
[51:56] i start to sort of like put like debug
[51:58] colors on so i can actually see what i'm
[51:59] doing as i'm applying it
[52:00] and then go back so no one should be
[52:03] worried i'm not gonna just pop bright
[52:05] red all over this
[52:06] um so if we get for a a sort of
[52:10] i want sort of like an overall wear on
[52:12] everything so maybe a dust
[52:17] seems to be applying all over the place
[52:19] so yeah now that i can
[52:22] sort of get how i'm applying it to be
[52:24] where i want
[52:26] you know it's it's building up like
[52:28] quite naturally in the crevices but
[52:30] you're still getting it over the general
[52:31] surface
[52:32] as well once i've sort of like settled
[52:34] on that then i can get rid of the
[52:36] creepy color red to something a little
[52:38] bit more small
[52:40] there we go and just drop down a bit
[52:48] all right i'll get that overall dirt
[52:51] going
[52:52] okay that is a very disheveled pico uh
[52:54] wonka says just add the words replace me
[52:56] to the red and call it done
[52:58] uh true story of funko the third
[53:01] volleyball the mark hamill volleyball
[53:03] was going to be a replacement ball
[53:05] i was going to paint the entire ball
[53:06] read and write replacement
[53:09] until will uh
[53:12] will had the idea for the mark camo ball
[53:14] and i'm like i'm like that's better
[53:16] that was one of my favorite props from
[53:18] um citizencon last year
[53:20] uh a bunch of people who came to the
[53:22] event and had their stalls they
[53:23] obviously sort of like
[53:24] dressed the stalls and they had all
[53:25] sorts of like props from the game i
[53:27] think i have one here someone made like
[53:28] a 3d printed a medical pen
[53:30] and stuff and one of my favorite ones is
[53:32] someone that actually just made a
[53:33] replacement cube
[53:35] and just had gone round the event
[53:36] placing it in random places
[53:39] you know like where i thought like a
[53:40] plant pot would be or something and
[53:42] you just have this bright red
[53:43] replacement i thought it was funny
[53:46] as well as some turtles as well do i
[53:47] hide in turtles around the event as well
[53:51] i thought i was going crazy at one point
[53:52] i just kept countering all these uh
[53:55] turtles hidden in stairwells and well
[53:57] the turtles are all you guys you're the
[53:59] ones who
[53:59] was that with those those no the the
[54:02] first turtle that was that was just put
[54:04] in
[54:05] game randomly that was from that was
[54:06] from your team
[54:08] i'm saying oh no i mean i mean at the
[54:09] event they were placed everywhere oh
[54:11] no someone had brought model turtles and
[54:14] placed them all around
[54:15] all round citizencon as well as these
[54:17] replacement cubes
[54:19] i really thought i was going crazy at
[54:21] one point
[54:27] okay if we go back to engine now okay
[54:29] yeah all are where
[54:31] and stuff starts coming in i think it's
[54:33] just updating
[54:34] um one of the maps this is where
[54:37] super fast hard drives come in handy
[54:41] this one might be on its last legs
[54:44] i just ordered a i just ordered an eight
[54:47] terabyte m2 that's arriving tomorrow
[54:50] am i right i'm thinking the n2 that's
[54:52] the ones that plug into your motherboard
[54:54] right
[54:54] yeah man those are the really really
[54:56] quick ones right
[54:58] yeah man i'm pretty jealous i remember
[55:00] when ssd was as fast as you could go
[55:02] you know
[55:06] um i think what we went on five minutes
[55:08] left i
[55:09] think now is time to maybe
[55:12] see behind the red curtain open the the
[55:15] third open door
[55:16] reporter's like how much did that cost
[55:18] i'm not thinking about it
[55:20] [Laughter]
[55:22] no just install it don't think ask
[55:24] questions later
[55:25] um i'm gonna reveal what i managed to
[55:28] get up to
[55:29] i probably shouldn't delete my work but
[55:31] before the stream
[55:33] i had to go a texture myself and you can
[55:35] see i went through the extra details
[55:37] yeah of adding on his beak gives him a
[55:40] lot more character
[55:44] you drew on the unibrow there yeah i
[55:46] drew on here i drew things around here
[55:48] as well i thought
[55:49] it works too i mean it all works it all
[55:52] works
[55:53] it's i'm sold it looks to pico like me
[55:56] um and yeah i spent a really long time
[55:58] trying to get like directional stuff on
[56:00] the duct tape for this
[56:02] it took more than the the 55 minutes
[56:04] we've been making this so i didn't want
[56:05] to
[56:06] i didn't want to go into too much detail
[56:08] on the duct tape on stream because uh
[56:10] that's a rabbit hole we do not have time
[56:12] to go down
[56:13] um so let's get the final version or
[56:16] what could be the final version i'm i'm
[56:19] i'm starting to think that maybe i could
[56:20] add some
[56:21] lenses but let's get the [ __ ] yeah i i
[56:25] think before we can
[56:26] make like not for the stream today but i
[56:28] think before we
[56:30] sign the thing off yeah yeah we have to
[56:32] we have to we have to take a shot at the
[56:34] lens
[56:35] it's a it's a it's a critical part oh
[56:37] he's just not the same without him i
[56:39] think that's why he has such a sad
[56:40] expression in his face
[56:42] he's missing he's missing his lens yeah
[56:45] you've got maybe he's just got really
[56:46] sore eyes because of all the dirt that
[56:47] keeps going and
[56:48] you've got mando without his helmet
[56:50] right now
[56:52] okay i'm just exporting the final
[56:54] textures now
[56:56] i imagine my computer's so slow it's
[56:59] probably
[57:00] it's probably still loading the textures
[57:02] i exported last time
[57:04] um and we're gonna need our spec
[57:09] so that's exporting as well it would be
[57:12] just my luck that we come to the end of
[57:13] the stream and as i try and present the
[57:15] final one
[57:16] none of my textures will load we're just
[57:19] left with this uh
[57:21] that is how it happens i'm just thinking
[57:24] uh you know a couple of minutes to go do
[57:27] i risk do i risk reloading the level
[57:29] in a and i hope that it will work
[57:32] i'll see uh it's probably just like uh
[57:34] my taxes are just compiling in the
[57:36] material or something
[57:42] [Music]
[57:47] very strange all right well
[57:51] maybe we'll wrap it here while you you
[57:53] can you can address that
[57:55] um john thanks so much
[57:58] man thanks for taking the time to make
[58:02] my personal pickle ball dream a reality
[58:05] uh uh as for of the folks who the folks
[58:09] who have uh
[58:10] been asking uh where pico will go in the
[58:13] verse uh we don't know yet
[58:15] uh it won't be a subscriber flare won't
[58:17] it won't be anything that
[58:18] you know costs money or anything uh the
[58:20] props team was just like we'd like to
[58:22] make it and stick it in the verse
[58:23] somewhere fun
[58:24] so uh i have no idea uh if
[58:27] if or when it gets added you guys can
[58:28] tell me because i honestly won't know
[58:30] um we are gonna throw the raid today to
[58:34] who are we who are we rating molly uh
[58:36] most noodle we are rating moist
[58:38] noodle today uh uh she says he's a pvp
[58:41] extraordinaire he's he's all right
[58:45] moist and i go way back he's all right
[58:46] he's he's all right
[58:48] uh he is he pvp streamer uh he's he's
[58:51] playing on the live
[58:52] environment right now uh so yeah so
[58:54] we'll throw the rate over to moist
[58:55] uh tell him uh tell him uh
[58:59] i don't know sound pico says hi
[59:03] all right uh for john i'm jared uh take
[59:05] care everybody
[59:06] we'll see you next week
[59:34] you

# Inside Star Citizen: Extra-Vehicular Particulars

**Video:** https://www.youtube.com/watch?v=J9HrLgZhmfk
**Date:** 2024-02-01
**Duration:** 15:26

## Transcript

[00:00] [Music]
[00:01] it's a new year and with every New Year
[00:03] comes the refresh after holiday break
[00:05] the review of process and Personnel
[00:07] alike and the renewed sense of
[00:09] determination to make each year of star
[00:12] citizens development even better than
[00:14] the last and in 2024 that includes the
[00:17] return of so many Squadron 42 developers
[00:20] to our persistent Universe fold all of
[00:23] which are working to add their features
[00:25] and advancements to the already Stellar
[00:27] work of the SC devs we all know and love
[00:31] and so to get this uh multi-month
[00:33] Marathon started let's throw it now to
[00:35] Chris Alexis genned ANZ and Ken of
[00:39] theonomous named Team Ken to show us a a
[00:42] bit of what they're working on for Alpha
[00:46] 323 so we showed a lot of interesting
[00:49] things in citizen con um and a lot of
[00:50] which is from keen's team we're going to
[00:52] be bringing a lot of that to you guys
[00:54] soon this year uh and we're going to be
[00:56] talking about the designs of those
[00:58] features and also how we went about
[01:00] making them you're going to be doing a
[01:01] lot of these for the next four months
[01:02] aren't you
[01:06] [Music]
[01:14] yeah the old Eva system had its purpose
[01:18] but it had a lot of problems so the old
[01:21] Eva was not quite controllable the entry
[01:26] and exit into Eva not being very smooth
[01:28] a lot of face planting
[01:35] changing orientation was a problem you
[01:38] never really knew which kind of way your
[01:39] body was in the upright pose was a
[01:42] little bit awkward for traversing spaces
[01:44] as
[01:45] well it couldn't really fit into narrow
[01:47] spaces and it just it was a bit
[01:49] restrictive for transitioning around
[01:50] space stations and things like that
[01:52] especially interior spaces and addition
[01:54] to that the sort of volume you take in
[01:56] order to rotate and look around uh is is
[01:58] huge it's basically rotating your your
[01:59] body or every time you just you know
[02:02] look to the right look up Etc that
[02:04] doesn't look terrible but it doesn't
[02:06] look great and it it doesn't f in the
[02:07] fall if you're in a confined space
[02:09] because again you're clipping against
[02:11] everything just don't really think it
[02:13] fit with what we want to do in our game
[02:15] it's it's not a bad system it got us to
[02:16] where we are
[02:18] today but we want to make improvements
[02:21] and there are other features and systems
[02:22] that we need to tie into Eva which
[02:24] brings us to what's coming uh this
[02:28] year so there's multiple aspects of the
[02:31] newva system that makes it a lot more
[02:34] versatile the first is that when you
[02:36] start looking around uh it's your camera
[02:38] and your head is moving uh your body
[02:41] most of the time doesn't so if I'm
[02:43] heading in a certain direction and I
[02:44] want to see what's behind me uh I can
[02:46] just look behind me but I see my body I
[02:49] get that instant frame of reference as
[02:50] to where I am where my body is and you
[02:54] know it just grounds The Experience so
[02:57] with the new system we put the player
[02:58] into a a more prone pose kind of a
[03:01] superhero pose makes them a much smaller
[03:04] silhouette when traversing around areas
[03:07] can you show us how the Eva Works show
[03:08] us how the Eva works so now Eva works
[03:11] like this you you you
[03:14] move forward and
[03:17] you you just
[03:24] fly turn rot and when you
[03:27] rotate the footprint of the character
[03:30] doesn't start to change so if I want to
[03:32] look around in this tightnit space I'm
[03:34] not suddenly spinning around and locking
[03:36] all the things off the shells I'm I'm
[03:38] just looking around which means that the
[03:39] the metrics we can support for that
[03:41] feature certainly become much more
[03:42] versatile you can get on a vent rather
[03:44] than not being a to fit into a
[03:48] room it's also uh a lot prettier uh to
[03:52] watch someone who's got a weapon or just
[03:54] looking around rotating around as
[03:56] they're doing so from the outside it
[03:58] looks better from the player experience
[04:00] it just just really helps out uh you
[04:02] know where you are and what you're
[04:05] doing we've smed out transitions
[04:07] entering and exiting
[04:09] Eva so no more face planting unless you
[04:12] really really
[04:14] try in new Eva you can just press
[04:19] forward and you fly if you release the
[04:22] button you keep flying while you still
[04:26] can rotate and look around yeah we'
[04:29] allowed it so you can turn on the spot
[04:31] without altering your silhouette um
[04:34] which is quite nice for interior
[04:35] traversal again feels a lot more natural
[04:38] a lot more responsive to the player yeah
[04:40] go like
[04:46] [Music]
[04:52] like the features were going to be
[04:54] bringing out um at some point later
[04:57] soon we've got Zer G traversal and
[04:59] that's you attaching to a surface in the
[05:02] previous system again because the
[05:04] character was upright the entire time it
[05:05] just wouldn't have gelled well with that
[05:07] feature um you're effectively impr prone
[05:10] but attached to a surface uh and and
[05:12] you're moving along that surface or
[05:14] gliding along it if you sprint that just
[05:16] transitions really nicely from the pose
[05:18] we have for Zero D traversal to the Eva
[05:20] pose uh it's almost exactly the same
[05:23] it's also very similar to prone so for
[05:25] example if if you were in a event and
[05:27] all of a sudden gravity went out you
[05:29] could R along it in Z traversal or move
[05:31] around it in Eva without changing what
[05:34] your body's doing uh which just means
[05:36] that it's a far more seamless experience
[05:39] um there's a much less chance of
[05:40] anything going wrong as a result of that
[05:41] as
[05:43] well we've also introduced the Eva Fuel
[05:47] and momentum so once you start traveling
[05:50] forwards in One Direction you'll keep
[05:52] going in that direction until you press
[05:55] another input or the space breake to
[05:57] stop this becomes especially important
[05:59] when we introduce Eva fuel so you'll
[06:01] have a finite amount of fuel and just
[06:04] that little boost could be enough just
[06:06] to get you back to the safety of a space
[06:08] station or your ship sets us up nicely
[06:11] for zero gep Push Pull which comes
[06:13] further down the line so in terms of
[06:15] what that means for us a player and what
[06:16] you're going to be doing this feature uh
[06:18] it allows us to use Eva to get you guys
[06:22] going from your ship to another ship
[06:25] from your ship to an abandoned space
[06:26] station you can fly inside um ships and
[06:30] space stations without gravity now
[06:32] without fear of bashing your head and
[06:34] your legs all over the place uh it
[06:36] really makes it much more smooth and and
[06:38] easy to use uh system and honestly at
[06:41] the end of the day it's it's just more
[06:42] fun I enjoy just flying in and out of
[06:45] test levels between ships Etc uh with
[06:48] the old system it's a bit slow and
[06:50] lackluster with this I feel like I'm a
[06:52] superhero while I'm going around in
[06:56] space so yeah the new Eva feature as you
[07:00] guys see it today it's hopefully going
[07:01] even better when once it gets um into
[07:03] your hands and yeah we're really excited
[07:05] to see what you guys think of
[07:09] [Music]
[07:14] it all right let's let's talk
[07:16] about
[07:20] piss well it was better when it was piss
[07:22] P used to be piss pit yeah play
[07:26] interaction yeah so let's talk about the
[07:28] new pipus
[07:30] that stop
[07:34] saying I was too late to change it I
[07:37] like to say pis
[07:39] because yep sounds
[07:47] better try to try to avoid HR
[07:52] complaints so the bur question is what
[07:54] is pie piss uh well it's everything you
[07:58] interact with around you and how you go
[08:00] about doing
[08:04] that it's not always easy to select the
[08:07] interaction that you're looking for you
[08:09] have to drag your curs at then to make
[08:11] your
[08:12] selection and it's not really very fast
[08:16] or intuitive and in general it got in
[08:18] the way of you doing what you wanted it
[08:21] added an extra layer of menuing that
[08:24] wasn't necessary but there's some things
[08:27] that we wanted to solve and that's what
[08:28] the new system does so with the new
[08:30] personal interaction experience uh we
[08:33] have multiple ways of improving how you
[08:35] interact the GES around you so we've
[08:37] released little parts of the new system
[08:39] in the past with the pit wheel and the
[08:42] quick select wheels and the control
[08:44] hints this is by far the biggest
[08:47] iteration on it and will totally change
[08:49] how you interact with things in the
[08:51] world we've introduced the new
[08:54] interaction prompt uh which will show
[08:56] you which item you will interact with by
[08:59] just tapping F and we also show you the
[09:01] type of interaction that will be
[09:02] performed so the new system the players
[09:05] don't have to go into interaction mode
[09:07] to interact with the objects uh We've
[09:09] updated that uh to have a an onscreen
[09:12] icon uh gives you the input that you
[09:13] need to press and it gives you an idea
[09:15] of what you're actually going to do when
[09:17] you press it so that ambiguity of am I
[09:19] in range is it the item I'm going to
[09:21] interact with gone uh you've got an
[09:23] immediate bit of feedback that tells you
[09:24] what you're going to interact with what
[09:25] you need to press to interact with it
[09:27] and what you'll do when you interact
[09:28] with it so if you're looking at a plushy
[09:30] on the desk it'll show an F above it
[09:33] with grab and you can just pick that
[09:35] item up with
[09:36] that we've also introduced the personal
[09:39] interaction wheel which instead of the
[09:42] list view will now give us a nice radio
[09:44] menu that lets you select exactly what
[09:46] you want to do in a much more intuitive
[09:48] Manner and with the wheel it's much more
[09:51] seamless and it feels more like there's
[09:54] no barrier between you and the
[09:56] interactions and that's locked for the
[09:59] the screen so you can't miss you already
[10:02] selecting something uh and it's you know
[10:05] 99% of the time what you want to
[10:06] interact with don't sneeze while you're
[10:08] pressing the button it's much more
[10:11] intuitive uh it's much easier to use and
[10:14] that option that problem I mentioned
[10:16] where if you're trying to interact with
[10:17] what's in your hand that's gone now the
[10:20] new system just opens the wheel and you
[10:21] decide what you want to do with what's
[10:22] in your hand it just works so this new
[10:24] interaction wheel plays really nicely
[10:26] with default item actions which has been
[10:28] in development for a while but it needed
[10:30] the whole system uh to come together as
[10:32] one before we released it if for example
[10:35] you're out mining gems after blowing up
[10:37] rocks with uh your multitool you might
[10:40] want to stick a gem up and look at it or
[10:43] you might want to just store it directly
[10:44] into your backpack you now have to get
[10:46] the option to customize and say uh want
[10:48] to look down at that piece of gem show
[10:51] me the prompt it's always going to show
[10:52] store or it's always going to show carry
[10:55] or inspect it's up to you and you can
[10:57] change that on the Fly and it'll
[10:59] remember it and it just allows you to
[11:02] customize your own
[11:05] experience now the player doesn't have
[11:07] to go to interaction mode to make a
[11:09] selection it can just simply tap to
[11:11] trigger the behavior the new system is
[11:14] enti dat driven so from our perspective
[11:16] it makes it really easy to customize
[11:18] from a designer point of view and again
[11:20] because we've set up that data you can
[11:21] then customize it yourself it allows you
[11:23] to customize the primary and the
[11:25] secondary interaction so you can change
[11:28] what just tapping F while looking at
[11:30] something
[11:31] does if the player changes the the
[11:33] default item on that item the the
[11:36] selection will be saved across all the
[11:39] items that match that state and the and
[11:41] the item
[11:42] category it picks up on what you want to
[11:46] do with different item types so if you
[11:48] want to cuddle the plushy you can set
[11:50] that to be your default inspect if you
[11:53] want to be picking up um golden memons
[11:55] and storing them directly whilst you're
[11:57] harvesting you can set store to be your
[11:59] default and then that's the way it'll
[12:01] stay if you want to equip uh ammo as
[12:04] soon you come across it to your suit you
[12:06] can set that as your default item action
[12:08] so it's something that with a little bit
[12:10] of interaction from yourself means that
[12:11] you can customize and tweak your own
[12:13] play experience and really rough out the
[12:14] edges uh in terms of your minute to-
[12:18] minute gameplay and how you interact
[12:19] with things we've also introduced a new
[12:21] scoring system for interaction points
[12:23] they allows us to better select which
[12:25] interaction point is of interest to the
[12:27] player this is based on distance from
[12:30] the player angle to the curse for or
[12:32] Center screen and whether it's on screen
[12:34] or
[12:36] not it also allows us to interact with
[12:38] things that aren't quite on screen so if
[12:40] there's a trolley handle just below you
[12:41] uh you'll be able to tap F and you
[12:43] should just grab it this makes it a lot
[12:45] more intuitive something on the ground
[12:47] can have a different default action to
[12:49] something in your hand this is all set
[12:51] up and customized through the
[12:52] interaction wheel and then obviously the
[12:54] player now doesn't have to like go into
[12:56] interaction mode drag the cursor make
[12:58] the selection you can just simply tap or
[13:01] double tap to trigger the secondary
[13:03] action and that should be a yeah much
[13:06] easier experience for the player we'll
[13:09] forget about what was there before it'll
[13:11] feel like it has always belonged you
[13:14] won't be able to live without it really
[13:16] that's just some of the things our team
[13:18] has been working on over the last few
[13:19] months and bringing to se for 323 we're
[13:23] looking at bringing you lots more stuff
[13:25] from a work on Squad 42 into into star
[13:29] CM uh we're really excited to get that
[13:30] into your hands to improve your overall
[13:32] player experience uh the way you travel
[13:34] through the verse yeah when you get your
[13:36] hands on it please let's know what you
[13:37] think we're really excited to find
[13:38] [Music]
[13:40] out so what did we learn this week well
[13:43] we learned that Eva looks
[13:46] sick sure usually I'm a bit more
[13:49] eloquent than that but damn I'm allowed
[13:51] to Mark out sometimes that the way we
[13:53] interact with the persistent Universe
[13:55] around us is getting a whole lot more
[13:56] intuitive and customizable and that this
[13:59] new Eva new default item actions and new
[14:02] personal interaction system are just the
[14:05] beginning of what this Springs Alpha 323
[14:08] has to offer Yes Virginia it's going to
[14:10] be a big one for inside Star Citizen I'm
[14:13] Jared Huckaby be sure you check out
[14:15] Tomorrow's Star Citizen live where we
[14:16] dive into even more Alpha 323 goodness
[14:19] and we'll see you all here next
[14:21] [Music]
[14:27] week
[14:32] [Music]
[14:54] da da da da
[14:56] da da da da
[15:00] da da da
[15:24] da

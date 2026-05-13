# Star Citizen Live Gamedev: New Player Experience

**Video:** https://www.youtube.com/watch?v=5otvfjJ_3dE
**Date:** 2023-05-12
**Duration:** 51:14

## Transcript

[00:01] California love that you're intending to
[00:04] get and you'd always get some other
[00:05] version of California Love it's like why
[00:06] do I have the remix why do I you know
[00:09] there's a version that focuses more on
[00:11] Dre a version of focus is more On Tupac
[00:13] it's like I just want the original that
[00:15] I grew up with like is that so hard like
[00:17] you know what I'm talking about yes yeah
[00:19] I know what you're talking you know what
[00:20] you're talking about James has no idea
[00:22] hi everybody welcome to another exciting
[00:25] edition of Star Citizen LIVE Game Dev
[00:28] the improved new player experience I'm
[00:30] your host Jared Huckabee and we're just
[00:32] talking about the the discography of
[00:34] Tupac
[00:37] the joining us on the show this week are
[00:39] senior members from our Star Citizen
[00:41] development team we've got uh Star
[00:43] Citizen live game director Mr Todd Pappy
[00:45] hello
[00:46] and uh lead game designer yeah
[00:50] James K how you doing man
[00:53] uh welcome to the show uh because this
[00:55] is always somebody's first show let's do
[00:57] some quick introductions besides what I
[00:58] just did Todd who are you what do you do
[01:01] for Star City uh I'm a game director on
[01:03] Star Citizen so Tony and I are the code
[01:06] game directors of it um but I watch over
[01:09] more the player experience and and
[01:11] basically what players are doing moment
[01:13] to moment as well as content going into
[01:15] the game
[01:16] and James
[01:19] um I am the lead content designer
[01:22] um we focus I would say mostly our
[01:25] missions but is there's all kinds of
[01:27] curation going on um so it can be a
[01:29] location set up Bluetooth mindable
[01:31] distribution things like that so sandbox
[01:34] experience as well as missions some
[01:36] books yeah
[01:37] so you take the the stuff all the tools
[01:40] that are created by like mft and whatnot
[01:42] and then put them together in different
[01:44] exciting ways and then create that list
[01:47] of requests like hey I really want to do
[01:49] this but I don't have the module I need
[01:50] to do this and it's like that so all
[01:52] right cool we've had mft on the show a
[01:54] bunch of times in the last couple months
[01:56] so it's nice to get on the other side of
[01:57] that and see how that works
[01:59] um
[01:59] Today's Show
[02:01] is about uh one of the new features that
[02:04] are coming in 319 uh the improved new
[02:07] player experience
[02:08] but before we get into that I want to
[02:11] talk about
[02:12] creating things for new players to begin
[02:14] with
[02:15] um Star Citizen is a notoriously
[02:19] deep heavy game to try to try to get
[02:22] into you know to try to just walk into
[02:24] off the streets yeah the learning curve
[02:25] the learning curve is huge it extends
[02:27] even to our website you're trying to
[02:29] have the time trying to figure you know
[02:31] out what what you want to do shout out
[02:33] to turbulent I'm going to get an email
[02:34] letter from from Benoit on that uh but
[02:37] uh they're doing great work uh
[02:39] we have tried a tutorial before many
[02:44] years ago
[02:45] um talk to me about that first effort
[02:49] well I mean basically obviously that one
[02:52] was hand scripted from end to end and so
[02:56] if any new feature came online anything
[02:58] else that the player needed to learn
[03:00] came online at that point in time it was
[03:03] very difficult to separate things and
[03:05] move them apart and then interject new
[03:07] aspects of gameplay there so it really
[03:11] fell to the Wayside you know as as we
[03:14] were so heavy in development at that
[03:16] time
[03:17] um so it upkeeping that thing just
[03:21] became too big of a task so we we let it
[03:24] slide and we knew that we were going to
[03:25] come back to it at a later point in time
[03:28] it was also outside of the persistent
[03:30] Universe it was in its own little pocket
[03:32] Dimension you know based off the old
[03:33] hanger module background yeah do you
[03:36] remember what that old flow was
[03:38] no
[03:40] no I I I couldn't recite it off the top
[03:42] of my head
[03:44] there was gunny yes and there was a
[03:47] magnificence a score from uh Pedro that
[03:51] was very
[03:52] um inspired by a popular uh uh uh aerial
[03:56] dogfight combat movie that I'm not
[03:59] legally allowed to acknowledge it was
[04:01] inspired by and it was and it was it was
[04:03] an experience you know getting in and
[04:05] taking off and flying out but again
[04:06] limited yes
[04:08] strictly to the flight and takeoff
[04:11] experience and it existed before the
[04:13] persistent Universe yeah way before yeah
[04:16] so so
[04:17] [Music]
[04:18] you meant you mentioned this I want to
[04:20] touch on this before we get deep into
[04:21] the new thing
[04:23] developing a tutorial develop while
[04:26] you're still making the game while
[04:28] you're still adding stuff to the game
[04:31] that seems crazy well I I think now
[04:34] we're so far along like we we know what
[04:37] our base hero mechanics are from a from
[04:40] a player perspective we know what our
[04:42] base mechanics are from a ship
[04:43] perspective so I think right now is is
[04:46] one of the best times to be doing it
[04:48] um but you know in previous games and
[04:50] everything like that first level and
[04:52] last level we're always the ones that we
[04:54] built um just because you understood you
[04:57] know here's everything I need to teach
[04:59] and then I can do it at that point in
[05:01] time
[05:03] um but since we have such a high
[05:05] learning curve you know we decided all
[05:07] right there's certain things in here
[05:08] that
[05:10] um we needed done first and uh we felt
[05:13] once those were completed
[05:15] um and really that to me was the
[05:19] contextual controls and contextual hints
[05:21] um those were the biggest things and and
[05:23] everything was built around that thought
[05:26] process and and what we wanted to teach
[05:29] um and then from there we felt like we
[05:31] can add on certain things later on and
[05:34] uh have it be still a cohesive
[05:38] experience but
[05:40] um also at the same time uh
[05:43] drip feed it a little bit better because
[05:46] right you know I think getting in and
[05:48] playing it and not having some of those
[05:51] hints some of those controls that
[05:53] because you know we use all the keyboard
[05:56] and plus some
[05:57] with all of our shift modifications and
[06:00] everything like it's
[06:02] um we wanted to make sure that the
[06:05] players could always remember it oh you
[06:07] know let's say they went away for two
[06:09] weeks or three months or whatever and
[06:11] then they come back to it it's like how
[06:13] did I do this again so and so forth so
[06:15] we wanted to kind of always have those
[06:17] constant reminders there and then that's
[06:20] really was the Catalyst for us you know
[06:23] pushing forward on this so what were the
[06:25] big so moving into that we've now we're
[06:28] now getting ready to release our first
[06:30] version of the new player experience it
[06:31] won't be the last one as you said we'll
[06:33] continue to iterate on it uh before as
[06:35] we're starting on this process what were
[06:37] the high level goals what did we know we
[06:40] absolutely needed to what would like the
[06:43] biggest ticket items like we've got to
[06:44] help people with this we've got to help
[06:46] people so for for from my standpoint
[06:49] because I was the one who wrote the
[06:50] initial doc
[06:51] um it was really teaching the player
[06:54] um very very core basic things so like
[06:57] getting up moving around
[06:59] um what are the basic controls for this
[07:01] interactions
[07:03] um you know eating drinking
[07:05] um anything that will kill you you know
[07:07] if you don't do it and then uh once you
[07:12] start getting into other aspects as far
[07:14] as what happens when you buy something
[07:16] and we have a deeper thread there that
[07:18] we haven't unlocked yet you know as far
[07:20] as being able to go and use a weapon or
[07:22] being able to go and try something out
[07:23] or or being able to try and compare and
[07:26] and all of those aspects that need to be
[07:29] taught as well then there's the player
[07:31] combat side from an FPS and then there's
[07:34] the ship combat side so like us just
[07:37] hitting very high level
[07:39] high level things which was teaching you
[07:42] you know interaction teaching you how to
[07:46] um eat and drink teaching you how to
[07:48] deal with inventory you know it we still
[07:51] need to teach more on that teaching you
[07:54] how to walk and Run and Jump and and
[07:56] then being able to teach you how to get
[07:58] out of you know the Spaceport and fly
[08:01] your ship but still trying to Dole that
[08:04] out and and kind of have some of those
[08:08] repetitious experiences that sometimes
[08:11] people need to to do to to actually
[08:13] learn it properly
[08:15] so we have a video we're gonna we're
[08:16] gonna start here in a moment and do some
[08:18] commentary over it but it's it starts
[08:21] once you're already in the universe so I
[08:22] want to start I want to go to even
[08:24] before that so you've looked so the new
[08:25] player has you know pledged for the game
[08:28] they've downloaded the game and they've
[08:29] started it up uh how do they does the
[08:33] game automatically put them into the new
[08:35] player experience does it give them an
[08:36] option
[08:37] so on the front end when you first load
[08:41] boot the game up
[08:43] um we ask the player do you want to um
[08:46] do you want to
[08:47] take part in the new player experience
[08:50] if they do then we will set their start
[08:53] location to area rating because that's
[08:55] where the new player experience takes
[08:57] place and then we will guide them
[08:59] through the process just automatically
[09:02] so as soon as they're in game the
[09:04] mission is accepted and we will guide
[09:06] them through as toddler saying all the
[09:08] basics eating and drinking and we will
[09:10] guide them through Area 18 onto the tram
[09:13] over to the Spaceport into their ship
[09:14] and then flying around so yeah it's uh
[09:18] we we start right at the beginning cool
[09:20] so let's go ahead and start our video
[09:22] here so this starts this video starts
[09:25] we've gone the the main menu we've
[09:28] selected the tutorial uh let's go ahead
[09:31] and put this on screen here so now we
[09:33] are obviously about to wake up in our uh
[09:36] where are we
[09:39] Yep this is your Hub in in area 18. so
[09:43] you spawn just as you would spawn
[09:45] normally except in this case there's the
[09:47] uh there's the tutorial running already
[09:50] so Moby glass was another thing that we
[09:52] thought we needed to teach so
[09:54] um and also the other thing with this
[09:56] room the idea is that you're locked in
[09:58] this room like obviously with persistent
[10:00] Universe there's not too many places
[10:02] that you can actually lock a player into
[10:03] space
[10:05] um you know like a traditional tutorial
[10:07] would be uh
[10:08] let let's pause the game let's um you
[10:12] know make it so that the player has to
[10:14] push this button for it to continue and
[10:16] so on and so forth so we have that here
[10:19] you know in certain areas but once you
[10:23] walk out of the hab
[10:24] you're free you know and and trying to
[10:28] teach that like it's it's it's very
[10:30] difficult
[10:31] yeah you don't have that it's like when
[10:33] you ignore a GPS and it's like it's
[10:35] telling you to turn right and you don't
[10:36] turn right and it reroutes right we
[10:38] don't have that yeah
[10:39] not yet anyway
[10:42] um so how did you well rather why did we
[10:45] decide on our Corp well
[10:47] um well the the thought process behind
[10:48] it was
[10:49] [Music]
[10:49] um
[10:51] basically we have two locations that in
[10:55] order to get to you know our Central or
[10:57] our shopping area you can walk directly
[11:00] from uh the Habs to the shopping area
[11:05] um and then you've got some that you
[11:07] actually have to get onto the tram to so
[11:12] um eritin and loreville are the only
[11:13] ones that you can walk to the shopping
[11:14] area other ones if you have to new
[11:17] Babbage and Horizon you have to go to
[11:19] um the the tram first so
[11:23] um we wanted to
[11:25] also just teach the player all right hey
[11:28] this is clean and simple it it allows
[11:32] you to go shopping
[11:33] um and then also with the with cubby
[11:37] blast this one made sense from an armor
[11:39] and weapon perspective to to lead the
[11:42] player there to that point this is my
[11:44] first time watching this video I'll go
[11:45] back this looks like like we're teaching
[11:47] people to drink their Prime
[11:49] the Prime energy drink here yeah I never
[11:51] realized how much this bottle looks like
[11:52] the prime
[11:55] sorry I was watching WWE lately okay so
[11:58] we're now outside of our Hab
[12:01] and where are we being directed and
[12:03] cleaning my glasses I can't read it
[12:06] um so right now the players exited the
[12:08] Hub and we're gonna send them down to
[12:11] Kobe blast so they can they can get some
[12:15] experience
[12:16] um in a shop basically the main thing we
[12:19] wanted to teach there was you don't talk
[12:22] to the MPC behind the council are you
[12:24] doing most games but you interact with
[12:25] the kiosk so we're red chroming the
[12:28] player
[12:29] um down through the uh through the
[12:32] elevator which will be the first time
[12:33] that they've used an elevator so we
[12:36] guide them to the little panel next to
[12:38] the next to the elevator itself and
[12:40] teach them to interact with that and
[12:42] then when they get in should tell them
[12:44] which Which floor that they need to go
[12:46] to and as to be honest there's not
[12:49] really they can't really go wrong at
[12:52] this point because there is no other
[12:53] exit than the elevator but you know it's
[12:57] it's theoretically it's literally their
[12:59] first time in game so it doesn't do any
[13:02] harm to put a little little marker over
[13:04] the elevator panels that hey
[13:10] um you know on through the landing Zone
[13:14] um basically the brand new team and and
[13:17] the environment our team have gone
[13:18] through and said okay oh yeah if you go
[13:21] this way then you this is what you get
[13:22] if you go to the left then you get you
[13:25] know this other
[13:27] um you know experience uh or shopping or
[13:30] so and so forth so it it this is
[13:33] something that we will roll out to every
[13:35] major Landing Zone and then we'll also
[13:37] figure out how we can do it in space
[13:39] stations just so that you know it's very
[13:42] very clear for the player to understand
[13:44] where they can go and what they can do
[13:46] yeah we're going to see more of this as
[13:48] this goes on but I'm glad you shouted
[13:50] Out The Branding team in their work the
[13:52] signage change in our Corp is huge yeah
[13:55] uh it's yeah when I first started adding
[13:57] signs like okay I'll admit I kind of
[13:59] dismissed it like you know you're going
[14:01] to add some signs some directional
[14:02] arrows here and there and seeing the
[14:05] sheer amount that they've done and and
[14:09] how effective each one is uh I was like
[14:11] oh oh yeah okay like this we're coming
[14:14] up on you know the first big obvious one
[14:17] a brand new kind of overhead map to Area
[14:19] 18 here
[14:21] yeah it I mean it took us a while to to
[14:23] go through and work out obviously
[14:27] um you know for every major Landing Zone
[14:29] we want it to feel
[14:31] uh unique to itself so for example
[14:36] um you know an airport sign in Germany
[14:38] is different than an airport signed in
[14:40] the UK versus it's different in in the
[14:43] US but it still has something to do with
[14:46] their airplane you know
[14:48] um same with food
[14:50] um you know in Asia would be different
[14:51] than than uh in Europe so there's
[14:55] certain
[14:56] um terminology and certain things that
[14:58] we look at
[15:00] um to basically say okay hey this is
[15:03] this is something that we can carry
[15:05] through but this will feel special for
[15:07] our core versus all right when we do
[15:09] loreville it'll be a different somewhat
[15:11] different icon pass but it's got to fit
[15:13] still in this this box so this is the
[15:16] part where we've already forgotten what
[15:17] we're here to do and we're rechecking
[15:21] a shout out to Sam Molina who recorded
[15:24] this for us earlier in the day
[15:26] earlier in the week brother yeah Sam I'm
[15:28] disappointed that you did not give the
[15:30] person your hair or your beard
[15:35] um you mentioned the works so we got to
[15:37] come into cubby blast we got to talk to
[15:38] the kiosk as opposed to the shopkeeper
[15:40] that is obviously a that goes back to
[15:43] the creating tutorials and experiences
[15:45] for a game that's still in development
[15:46] obviously we want folks to one day
[15:50] eventually interact with the shopkeepers
[15:51] that's what they're there for and stuff
[15:53] like this but this is a good example of
[15:55] something that you do an interim version
[15:57] of this experience now and then you'll
[16:00] have to continue to update well and and
[16:02] even with this um so for example like
[16:04] you go in and buy a weapon like we want
[16:06] you to be able to go and test the weapon
[16:09] so that you don't have buyer's remorse
[16:11] you know all right I'm spending my hard
[16:13] earned cash on this what am I actually
[16:15] getting you know does this fit my play
[16:17] style so it's that to me is is going
[16:21] forward in the future like this is one
[16:23] of the big things that was called out in
[16:25] the original new user experience that
[16:27] obviously hasn't made it to this one I
[16:30] did notice that Sam is a dirty cheater
[16:31] and he started his new account with a
[16:33] million UEC so Sam expected better of
[16:37] you
[16:38] all right so it's it's this tryout I'll
[16:41] follow up on this you're talking about
[16:42] like giving cubby blast like a firing
[16:44] range kind of thing whether it's a
[16:47] firing range within its actual location
[16:50] so it's it's like a
[16:52] um
[16:54] you know the player actually walks up to
[16:56] it or via Sim pod or something so the
[17:00] but the the the idea is for the player
[17:03] to be able to go and and try out
[17:06] um different uh
[17:08] weapons different ships so and so forth
[17:12] so like
[17:13] um you know if you're buying a ship item
[17:16] or or something oh I want to buy this
[17:17] power plant versus this other power
[17:19] plant like
[17:20] you want to be able to go and test it
[17:22] and see if it fits your playstyle was
[17:24] there a prompt that told him to go into
[17:25] his inventory and I missed it no not at
[17:28] the moment
[17:29] um some of the feedback we got was that
[17:31] we should really be um at least telling
[17:34] players that they might need a helmet
[17:36] because
[17:37] well yeah
[17:39] to bring that up but I was just noticing
[17:41] in that moment it's like that that
[17:43] seemed to be Sam possessing some
[17:45] knowledge already that yeah well you
[17:47] know that I need to go to my inventory
[17:48] to do this stuff yeah so right right now
[17:51] we we encourage the player to buy a
[17:53] helmet and maybe in a future iteration
[17:57] um we can sort of incorporate that into
[17:58] part of the flow
[18:00] um but yeah Sam's got special knowledge
[18:03] yeah I I think we've said this before
[18:06] and I think we're going to reiterate it
[18:07] a couple times like mining like Salvage
[18:10] like any other gameplay feature this is
[18:12] a the new player experience is something
[18:13] that will continue to evolve and be
[18:15] iterated on uh maybe not every single
[18:17] patch but in subsequent patches yeah
[18:20] you know not just for the new features
[18:22] that come online but per feedback for
[18:25] you you know stuff you know that's well
[18:28] and
[18:30] during
[18:31] um a summit you know you know Chris and
[18:33] myself and other directors we we had a
[18:37] very long conversation in regards to you
[18:40] know what will the final
[18:43] you know nuclear experience look like
[18:45] and you know the the Bare Bones aspect
[18:49] that we're building here you know it
[18:51] might be that we started started a
[18:53] different place beside your Hab but
[18:55] we're teaching you the same exact things
[18:57] we're teaching you you know the very
[19:00] Basics
[19:01] um and then from there again we wanted
[19:03] it to be kind of a a small bite-sized
[19:06] you know gameplay and then unleash the
[19:10] player into the world because again we
[19:12] don't know what you're doing it could be
[19:14] that that you're going through this
[19:16] experience just to meet up with some
[19:18] friends and
[19:20] you know we don't want to keep you from
[19:22] that so
[19:24] um but we want to at least be able to if
[19:28] the player needs to have their hand held
[19:30] a little bit we can
[19:32] we can help them out I want to I want to
[19:34] shout out The Branding team again I'm
[19:35] trying to remember
[19:36] uh the name of the of the of the guy in
[19:40] charge right now I can't Nick Forte Nick
[19:42] and and Dominic also did a lot of this
[19:44] as well another shout out to Nick and
[19:46] domic just it's I mean this this is the
[19:50] same hardcore being we our corpse been
[19:51] around for a while RIT has been around
[19:53] but I mean it is
[19:54] it is transformed by these signs I don't
[19:57] want to oversell it but it really does
[19:59] look like it is so much better than it
[20:01] was
[20:02] well especially when you go to the other
[20:03] Landing zones so this is something that
[20:06] we know we need to take you know to the
[20:09] other Landing zones and and
[20:11] um basically Dole out throughout the
[20:13] year and and going forward
[20:18] so this window that's on the right the
[20:21] the one that's kind of just
[20:23] managing our what are those the the
[20:25] objectives there on the right
[20:27] I've got well those are friends
[20:30] was that a new system with with the blue
[20:33] bar at the top I don't remember seeing
[20:35] that before
[20:37] um yeah so previously hence would be
[20:41] kind of at the bottom in the center
[20:43] and we've got some tech which kind of
[20:47] makes them
[20:48] you know dresses them up a little bit
[20:50] moves them up and to the right and just
[20:52] below that we've got the new contact
[20:54] contextual hint system
[20:56] I noticed that when you open up the
[20:58] Mobile Glass we had text on text
[21:00] that's one of the things we need to fix
[21:02] yeah we we know that um basically with
[21:06] the old Moby glass it needs to burn in
[21:08] hell and then with the the visor um you
[21:12] know it's it's being worked on and being
[21:14] adjusted hold on can we can we switch to
[21:17] Todd's camera please yeah
[21:22] what you think of it it needs to burn in
[21:25] hell
[21:26] very very deep hell
[21:28] okay
[21:30] let's go let's go ahead and go no don't
[21:31] remember
[21:37] so we're on the tram always a always a
[21:40] cool experience your first time yeah
[21:42] less so you're 100 or 200th time but
[21:46] so we got we got some new tech
[21:48] um that enables us to figure out when
[21:51] the player gets on and off any kind of
[21:54] Transit entity we didn't have that
[21:56] before
[21:56] so anytime they get in or outer of an
[21:59] elevator or on and off tram we can we
[22:02] can know where they are and what what uh
[22:05] Transit entity they got off
[22:08] um I think that's a good example of the
[22:11] functionality that we got for the new
[22:14] player experience that we can now use
[22:15] throughout
[22:17] throughout any kind of any Mission
[22:20] activity in in the Pu
[22:24] well and and I think one of the things
[22:27] that needs to be talked about is is the
[22:30] contextual controls and the amount of
[22:32] work that a lot of the the code team did
[22:36] you know is going through and adding
[22:38] these hooks for everything every single
[22:42] state and making sure that what's being
[22:44] shown there is is as as appropriate as
[22:47] possible at that time
[22:49] um and that was a long experience and it
[22:52] took a lot of work to go back and forth
[22:54] between the designers and the team on
[22:57] that so but basically you know it's it's
[23:02] something that we felt
[23:04] um you know was the core of the system
[23:06] and and basically what's the the new
[23:09] player experience was was all wrapped
[23:11] around
[23:12] and I want to address some of the folks
[23:14] who are commenting on the frame rate uh
[23:17] obviously there's a couple factors that
[23:19] play one this is still a work in
[23:20] progress build unlike any you know just
[23:22] like any other this is pre-release
[23:24] content
[23:25] um there's a misconception that every
[23:27] single member of the team has the most
[23:28] powerful rigs in the universe they don't
[23:31] uh you know especially you know
[23:33] designers and content designers and live
[23:35] designers stuff like that also you know
[23:37] he's capturing at the same time he's
[23:39] recording on the same machine and
[23:41] running his own server and his own
[23:42] running his own service so this is you
[23:44] know it's it's one of those things we we
[23:46] make do with what we got in order to
[23:48] make the show possible but uh yeah your
[23:51] experience will vary
[23:53] playing on your own and not doing all
[23:55] these other things so I I think this
[23:57] needs to be talked about and if you want
[23:59] to explain a little bit more Jameson
[24:01] about the Partnerships yeah
[24:03] um so for the new player experience
[24:07] um we've basically gifted the player a
[24:09] rented Pisces the reason we do that is
[24:13] so they have a suitable ship to learning
[24:17] we don't sort of completely lock them
[24:21] out from any any purchase purchased
[24:23] ships they get unlocked at the end of
[24:26] the new player experience but for the
[24:28] for the very first flight and if you
[24:30] want to the the flights uh subsequent to
[24:33] that the player's got a nice ship it's
[24:36] easy to fly it's very small
[24:38] so it's uh it's it's kind of suitable
[24:41] for the very first experience
[24:44] yeah
[24:45] it's got a little sink preview of our
[24:47] console there
[24:51] all right so is there is there Hangar
[24:53] three uh it's always saying or three
[24:55] it's always it's really it's always
[24:57] well it's whenever
[25:00] um because I would go over to James's
[25:01] desk and he'd he'd be getting it ready
[25:05] um and so when I was doing reviews on it
[25:07] and everything like that it's always
[25:08] hanger three
[25:09] I don't know why but but for this one
[25:12] well he's running his own private server
[25:14] there's no other player so correct but
[25:16] but no matter what it's always hanger
[25:19] three so if I was doing it in James's
[25:22] desk even if we were we tried out
[25:24] different ships in in the beginning it
[25:26] was always hanger three but on live
[25:29] servers it'll be whatever right yeah
[25:33] and uh people like they don't know why
[25:36] no that's what it's part of what happens
[25:38] when you build a systemic Universe it's
[25:40] You're Building all these individual
[25:41] systems well it's I mean Hangar One and
[25:43] Two could be like the oversized hangers
[25:45] I I don't know how this one is exactly
[25:48] you know set up so it might be that
[25:50] those are the extra large hangers that
[25:52] are sort of how do you have name that
[25:54] every single game developer doesn't know
[25:55] the work and content of every single
[25:57] other game developer yes it's also I I
[26:00] don't know how some of these stuff how I
[26:03] know how it's hooked up from a technical
[26:04] standpoint I don't know what order they
[26:06] hooked it up in
[26:08] right
[26:10] just as long as it works and it is duct
[26:13] taped together you know
[26:15] I got it got it go to camera one
[26:19] abusing opinions of Todd Pappy do not
[26:21] represent those of cloud and frame games
[26:22] Robert Space Industries or subsidiaries
[26:26] right back
[26:31] we really need that disclaimer reclaimer
[26:33] Tom
[26:36] you didn't hear this but there was this
[26:38] utterly dejected British sorry
[26:42] all right so we're now in our Hangar
[26:44] we've now jumped into our Pisces
[26:48] yeah with this to me there's still some
[26:51] work that needs to be done like uh
[26:54] when you request you know um
[26:57] uh basically to take off like to me
[27:00] there should be class ends and warnings
[27:01] and other lights spinning you know going
[27:04] off
[27:05] um and the vo for it to be for you to
[27:10] take off safely should be at the end
[27:12] once the doors are actually open versus
[27:14] at the beginning you know so there's
[27:16] still some Polish there that needs to
[27:17] happen and not every hanger is the top
[27:19] loading hanger correct we've got
[27:21] vertical as well as horizontal yeah so I
[27:23] mean if you didn't if this were your
[27:24] first time you didn't know there were
[27:25] there was a doorway up would you even
[27:27] look up yeah well this this is why we
[27:30] teach them to hold the ZK down and just
[27:33] look around before they actually take
[27:35] off because
[27:36] yeah for Todd it's always hanging three
[27:40] but for the public it could be anything
[27:41] so it could be front door in which case
[27:43] you see it fine but if not if you've got
[27:45] a top loading hanger then yeah you need
[27:47] to know to look up so something to add
[27:49] to the yeah we added that yeah so what
[27:52] is he doing in the console right here
[27:55] well it's lods oh yeah it's gone a lot
[27:59] well to somebody who doesn't know what
[28:01] he's doing uh it's basically we have um
[28:05] things off in the distance that will
[28:07] show uh designer or
[28:11] um
[28:11] kind of arted boxes
[28:14] um so it basically helps us run a
[28:18] consistent frame rate so he was just
[28:21] going through and turning that stuff off
[28:22] so it actually gave a decent looking
[28:25] Skyline represents what the player would
[28:28] see yeah exactly
[28:31] all right so we're leaving Area 18 where
[28:33] are we going
[28:35] um so at the moment the players so
[28:38] they've left their Hangar and we're
[28:40] giving them just a basic flight around
[28:43] area 18.
[28:45] um it's it's night time at the moment so
[28:47] you don't get to see very much but the
[28:50] idea is that you get an idea of how to
[28:53] fly your ship because this is the first
[28:55] time that the player's been in their
[28:56] ship so the path is pretty straight you
[28:59] can see objective markers appearing
[29:01] giving them new new places to go to so
[29:03] we keep them pretty much in line so
[29:05] they're not appearing off to the side
[29:07] and you're having to sort of swerve your
[29:09] way around
[29:10] but we're also popping up hints that
[29:13] give them basic controls so so you know
[29:15] at the start you'll say hey you need to
[29:16] raise your landing gear and this is your
[29:19] throttle and how to adjust your speed
[29:20] and just just various base basic hints
[29:25] like that just so they get an idea of
[29:26] how to fly this looks so good at night
[29:29] time is there a way to always make sure
[29:31] a new player gets the night time our
[29:33] Corp experience no
[29:38] well basically because whenever we do
[29:42] the testing it's always spinning up a
[29:44] new server right so I would always get
[29:47] to beginning point and it's completely
[29:49] dark completely black and
[29:52] um so it's it's difficult to see so we
[29:55] still need to work you know through some
[29:58] issues for folks in the chat our clouds
[30:00] obviously again this is this is a
[30:02] internal build uh it's only got the
[30:05] stuff we need to show the feature on
[30:06] like we saw with the LOD stuff it
[30:09] doesn't have all the bells and whistles
[30:10] you would normally see on live
[30:13] um somebody in the chat was literally I
[30:16] guess I guess I guess in the recording
[30:18] he just noticed the clouds were up
[30:20] um one of the folks in chat mentioned
[30:22] that on some localized keyboards uh z
[30:25] and y are flipped correct uh does that
[30:28] does that change the input no no
[30:31] well it's sorry it should be that
[30:34] um
[30:35] yeah because it like with the German
[30:37] keyboards z and y are flipped but it
[30:40] should just be that's the the placement
[30:43] of where it's actually at on the
[30:44] keyboards it will be why it should be a
[30:47] y instead of Z instead of Z and the text
[30:50] will reflect that yes it should okay
[30:53] it doesn't then please let us know and
[30:55] we'll fix it
[31:00] so okay I mean for this again like we
[31:03] were just thinking what are some of the
[31:06] basic things that we need to do so like
[31:08] James said you know raising landing gear
[31:10] teaching them basic controls as far as
[31:13] you know speeding up slowing down
[31:15] um and then then the next thing that was
[31:18] big that we needed to teach him was was
[31:20] QT and right and how to actually QT so
[31:25] um blue Minx and the chat was asking why
[31:27] is he just flying around why isn't he
[31:29] just Q team there we're literally
[31:31] teaching the process yeah so and um
[31:34] again for this
[31:36] I mean Sam Sam's going through and
[31:38] trying to make it look pretty and and
[31:41] um versus you know as an average player
[31:43] you're going to be looking at it from
[31:45] your cockpit you're going to be trying
[31:46] to speed through it I think or or do a
[31:49] speed run for it
[31:51] um and
[31:54] usually our reviews take 30 minutes and
[31:56] maybe 10 of those are calling out notes
[31:58] and talking about you know
[32:00] um any sort of blockers or anything like
[32:02] that so I think James and I can get
[32:04] through this in what 15 minutes if that
[32:06] probably yeah so
[32:09] um it's usually a pretty quick
[32:11] experience
[32:14] so for for example like here you know
[32:17] right now you have a whole bunch of QT
[32:18] markers associated with this like again
[32:20] one of the things that we were trying to
[32:22] do was strip away all of these or or
[32:26] have it be that you didn't have enough
[32:28] fuel to to fly over there so then he
[32:31] would have to come here refuel and then
[32:33] you know things are open to uh the
[32:36] player
[32:37] um there's other aspects in regards to
[32:39] the amount of missions that are shown to
[32:40] the player and and everything yeah
[32:44] yeah we we were conscious that once the
[32:46] player finishes the tutorial
[32:49] um of these sort of
[32:51] um the missions that would be available
[32:53] immediately afterwards and while we
[32:55] couldn't get to all of them we've
[32:58] hopefully well we've cut down the number
[33:00] and we've hopefully cut down some of the
[33:03] more difficult ones for new players
[33:07] um so they should be they should have a
[33:09] more suitable selection than they would
[33:11] do previously let's say well and also so
[33:14] if we talk about this let's say let's
[33:17] say you are a new new player or you've
[33:20] maybe you've played this one patch okay
[33:22] if we do any sort of resets or wipes or
[33:26] anything like that the idea would be
[33:27] after you finish the new player
[33:29] experience that gets you to the same
[33:30] Baseline that everybody else starts the
[33:33] game if they don't choose the new player
[33:34] experience that is and they just started
[33:37] and everything's reset it gets everybody
[33:40] at the same Baseline and so again for
[33:43] our missions we want to make sure that
[33:45] they they Branch out it's not like
[33:47] you've got you get you know 40 choices
[33:50] in the very beginning you'll have three
[33:52] and then you do have one and then now
[33:54] that opens up two more and now you have
[33:56] five available so like it's it it's
[33:59] slowly Doling those things out and it's
[34:02] pretty standard you know logging
[34:05] features behind a long team of them I
[34:07] see the key bindings on screen is that
[34:09] part of the that is the contextual
[34:11] control aspects that we were talking
[34:13] about and also the um and part of the
[34:15] contextual hands so
[34:18] um because there's certain things that
[34:19] we wanted to teach or reinforce to the
[34:21] player
[34:22] all the time
[34:24] [Music]
[34:25] again you know if you haven't played the
[34:27] game in a while or
[34:29] um or you're coming back Fresh then
[34:33] basically this this allows us to
[34:37] gently remind you
[34:39] now uh some somebody in the chat brings
[34:42] up a good question is this all within a
[34:45] green zone or will or because what what
[34:48] happens to group to groupers who decide
[34:50] to because all the new players are going
[34:52] along the same path here it basically
[34:55] becomes a chow line to Grievers it does
[34:58] unfortunately it does
[35:00] so it's right now this is what we have
[35:04] and we will continue to make it better
[35:06] but we will roll this out to different
[35:09] Landing zones
[35:10] um obviously from there we'll also look
[35:12] at feedback on you know if if people are
[35:16] clubbing the baby seals over and over
[35:17] and over again then we will
[35:20] Institute other things to block that but
[35:24] again we without I mean we had talked
[35:28] about putting it on a unique uh planet
[35:32] that nobody could get to nobody could QT
[35:35] to and it's it's it's its own space like
[35:38] we had thought about that and where
[35:41] but that wasn't that's not our game yeah
[35:45] you know and
[35:46] um so we had those those conversations
[35:48] and and talked about it
[35:51] um but it just didn't feel right so uh
[35:55] this is what we have and and so we need
[35:58] to build and tune for a game
[36:00] um and
[36:02] obviously I I think you know the new
[36:05] player experience at loreville versus a
[36:06] new player experience at at Horizon will
[36:10] be a little bit different but you know
[36:12] we're just trying to teach you the main
[36:14] Concepts
[36:15] is the intention to develop a new player
[36:18] experience for the multiple Landing
[36:20] zones yes the intention is to take it to
[36:23] those multiple Landing zones
[36:27] but uh
[36:28] I mean it's no secret that our next star
[36:31] system is is pyro can you can you see a
[36:34] version of the new player experience
[36:36] that exists in pyro right now yeah that
[36:39] I mean that that's a little bit more
[36:41] difficult and I think that's something
[36:42] that that James and Dan and
[36:47] um Kristoff and I will need to sit down
[36:49] and you know really really go through
[36:54] um and and and talk about because like
[36:56] right now in Empire like
[37:00] should just be a guy that hands you a
[37:01] pistol and says good luck yeah and like
[37:03] have you enjoyed your new player
[37:04] experience yeah yeah if you choose to
[37:06] start in Pyro
[37:09] so I turned away what are we doing now
[37:11] um it well basically it teaches you to
[37:13] store your ship oh and then James can go
[37:16] into more details on that
[37:18] yeah
[37:19] um so when the player lands
[37:22] um they they get out their shape and
[37:23] you're sort of
[37:25] um asked to ask to store it and as soon
[37:28] as you stole your ship you've Landed It
[37:30] by Genie points you've
[37:32] learned all kinds of stuff and uh the uh
[37:35] yeah that's that's the ending point
[37:37] so yeah there we go
[37:39] short and sweet yeah is this hydration
[37:41] at 37 is that what it says yeah so it
[37:45] allows you to go through and read about
[37:47] any of the things that we that we teach
[37:50] the player so you can you can refer back
[37:53] to it and obviously for uh you know in
[37:57] case you missed something or or want to
[37:59] read up you know more information on on
[38:02] that then this allows you to to do that
[38:04] yeah one one thing we do throughout the
[38:07] new player experience is to point
[38:09] players towards the journal because the
[38:12] journal is uh is a really good source of
[38:14] information not just during the new
[38:16] player experience but throughout it will
[38:18] teach you about law and crime stats and
[38:20] all that kind of stuff so pointing plays
[38:23] to that early on gives them a tool which
[38:25] they can use throughout their time with
[38:27] Star Citizen and then as the new movie
[38:31] glass comes online that ideally that
[38:35] will free you to do all manner of
[38:36] additional things to tell people yeah
[38:39] like
[38:41] uh the the thing the thing that
[38:45] got me the whole time is the text on the
[38:47] text is not being able to reposition the
[38:49] windows and stuff like that that's
[38:52] yeah I like Todd said because this is
[38:54] the version of what we have right now
[38:55] where we build we build on top of that
[38:57] we build on top of that as new features
[38:59] come on we add those in that is the
[39:01] nature of star citizens development
[39:03] yeah and I mean
[39:06] basically s42 is building you know new
[39:10] mobile glass framework we'll take that
[39:11] framework and and adjust it you know
[39:14] from a visual standpoint but then
[39:16] continue to build on that for the
[39:18] persistent Universe needs and so it's
[39:21] it's basically we just need to wait you
[39:23] know but we felt like
[39:26] um the new player experience and and
[39:27] what we were able to develop right now
[39:30] was good enough you know obviously
[39:32] there's still some bugs that we need to
[39:33] work through but it was good enough to
[39:35] to introduce and make sure that you know
[39:38] we can actually uh lower the learning
[39:41] curve that that basically new players
[39:43] run into all the time
[39:45] so that was a look at what's coming in
[39:49] 319 we talked about maybe you know
[39:53] adding a a prompt to tell you to put
[39:55] your helmet on before you you go out
[39:57] will that make 319 is or is that going
[39:59] to have to be another I don't think
[40:00] that'll make 2019
[40:02] um but it's possibility for a for a
[40:05] future uh patch yeah okay
[40:07] um until then we'll have to rely on our
[40:09] wonderful community and the guides and
[40:11] whatnot well and I think the other thing
[40:14] that needs to be stated there is is in
[40:16] the on the front end there's a actual
[40:18] button there that will take you it's a
[40:20] hyperlink that will take you out and
[40:22] it'll take you to the guide you know on
[40:25] um on the Robert Space Industries uh
[40:28] website and and you'll be able to
[40:31] request a guide if you want thank you
[40:34] um so that so that's 319 that's it's
[40:37] currently available on open PTU right
[40:40] now uh any any star system backer can
[40:42] can copy their account over the PTU and
[40:45] test it now it's coming when 319
[40:48] releases hopefully sometime in the next
[40:50] week
[40:53] uh it's as close as I'll get to a date
[40:56] um
[40:57] let's talk a little bit about the future
[40:59] uh where do we we've said we've
[41:02] mentioned a couple things are already
[41:04] but but summarize where do we want to
[41:06] take this in the future what do we
[41:07] already know is on the menu that
[41:09] whenever we can get to it when features
[41:12] and time and everything Collide to make
[41:14] it happen uh well we can do it real
[41:17] quick I think um taking it to the
[41:19] different Landing zones
[41:21] um taking certain uh feedback that we
[41:24] that we acquire
[41:25] um that we need to basically flesh out
[41:29] more
[41:30] um and adjust that and then long term it
[41:34] would be thinking about okay do we need
[41:37] to do short little Mission training for
[41:39] combat whether that be FPS or ship do we
[41:43] need to do it for Eva do we need to do
[41:45] it for missile lock so and so forth so
[41:48] like everything that's you know or do we
[41:51] need to do it for mining or salvaging or
[41:54] any of our gameplay Loops
[41:56] um and do we do these small little
[41:58] Snippets of of missions that you can
[42:00] load up and you can kind of rinse and
[42:03] repeat those over and over again like
[42:05] like a combat Mission and then a yeah a
[42:08] deliver a cargo delivery Mission kind of
[42:10] thing I mean it could be even smaller
[42:12] than that like okay I want to
[42:16] practice missile lock okay so all right
[42:20] how you know spawn the scenario
[42:24] you know even probably via senpod like
[42:27] I'm sitting there and I can practice
[42:28] okay this is how I do missile lock or I
[42:31] want to shoot down a missile okay you've
[42:33] got a missile coming in shoot that down
[42:35] or shoot down three of them in x amount
[42:37] of time so just ways for you to uh
[42:41] Harden your skills and and work on very
[42:45] specific scenarios that might not
[42:47] opportune might not spawn themselves
[42:49] unless it's in battle or something like
[42:52] that so
[42:53] um we're we're almost done it's it's a
[42:56] shorter show this week than normal
[42:58] um we all got places to go I do want to
[43:00] ask you
[43:02] the first version of the tutorial the
[43:04] old gunny thing that was instance it was
[43:07] it was essentially Arena Commander you
[43:09] could say it was a simulation kind of
[43:11] thing
[43:12] this is obviously not this is in the Pu
[43:15] was there a consideration of of making
[43:18] the new player experience a simulation
[43:20] you do it and then you step out of the
[43:21] Sim pod and you're just safe and
[43:24] completely isolated that whole time and
[43:26] nobody can mess you up or why did we why
[43:29] was it important that we put you in the
[43:32] Pu from the moment you start so yes we
[43:36] talked about it and
[43:38] um that was one of the one of the
[43:40] initial pitches that I did was that it
[43:42] was Sim pod only and then you know after
[43:44] you get out of it then now you're in a
[43:47] safe area obviously there's certain
[43:49] aspects you know like
[43:52] um getting out of the hangar and
[43:54] crashing your ship and then going to the
[43:55] medical center and then so and so forth
[43:57] like there were certain things there
[43:58] that
[43:59] um were not new user friendly
[44:02] um and so but at the same time we were
[44:06] we are at MMO you know and we want to
[44:09] make sure that we don't isolate the
[44:12] players um from their friends or from
[44:14] other things that's uh you know they
[44:16] could experience on their their Journey
[44:18] on on the new player experience right so
[44:21] so there's a certain amount of
[44:23] I don't think it's a secret there's a
[44:25] certain amount of chaos that comes with
[44:28] the persistent universe and we're not
[44:30] totally a hundred percent against chaos
[44:32] you know no we like that we like that
[44:36] emergent nature the the how other
[44:38] players affect things exactly I I think
[44:41] if if we teach them you know hey this is
[44:43] what it you know works like in a in a
[44:46] vacuum
[44:47] you know then it's it's it's not it's
[44:50] not us you know and so
[44:53] um the the most vacuum aspects that we
[44:55] did was all right we we said all right
[44:57] this is the halves now it might be that
[45:00] you know in the future you're on a ship
[45:02] going to you know whatever uh major
[45:05] Landing zone is going to be your home
[45:07] you know and then at that point in time
[45:09] you get off and and uh we still teach
[45:11] you how to get to your halves or or away
[45:13] from your Hab and so it there's certain
[45:16] things that we know that we need to
[45:18] train it's just going to be how do we go
[45:20] about it and and do it but I think a lot
[45:23] of the work that James and Sam and and
[45:25] the rest of the team have done
[45:28] um you know on creating this uh is
[45:31] basically laying the foundation for
[45:33] anything that we do in the future
[45:36] cool well that's about it Todd James is
[45:40] there is there something else I haven't
[45:41] touched is there some aspect of this
[45:43] that we want to make sure folks
[45:44] understand before
[45:46] Before I Let You Go
[45:48] um I I guess for me it's been more
[45:52] a labor of love I I did the initial
[45:54] pitch of this
[45:56] two years ago
[45:57] so yeah like for for me this is this is
[46:01] something that I've been wanting to see
[46:03] for quite a while and now that's not the
[46:06] same because people are going to grab
[46:07] onto that that's not to say that this
[46:09] took two years of continuous work it is
[46:11] there's this has to go into the schedule
[46:13] and into the resources yeah and there's
[46:17] certain fundamental things that we
[46:19] wanted in place first before we would do
[46:22] it so
[46:24] um it's just that's you know there's
[46:25] other higher priorities or there's other
[46:27] things but this this allowed us to you
[46:30] know align you know everything comes in
[46:33] in line and we understand that okay
[46:35] certain features you know on and because
[46:38] for example like the Henson the training
[46:41] like that was on the actor team but they
[46:43] had other priorities that they needed to
[46:44] do and so this allowed us to to go
[46:47] through and and get it
[46:49] um done but like you know the initial
[46:52] thought process of it and the initial
[46:54] document that I wrote was yeah about two
[46:56] years ago I I imagine because there's a
[46:59] there's a
[47:02] misapprehension that
[47:05] all aspects of a game are worked on
[47:07] continuously at the same time in
[47:09] conjunction and stuff like this it's
[47:12] it's they hear oh you're working on this
[47:14] whatever it is in one month and it means
[47:17] well it's been eight months it's weird
[47:18] about they've been working on it for
[47:20] eight months and that's not true teams
[47:22] get pulled off there are dependencies
[47:23] that come up we need new tech to be
[47:25] developed before we can continue our
[47:27] work there's any number of reasons for
[47:28] people to part the project new people
[47:30] join the project with new ideas and we
[47:32] rethink you know oh well that's a better
[47:34] idea than what we were doing it's like
[47:36] this is all there's there's no end of
[47:37] the reasons why development Bobs and
[47:40] weaves and so that's why I always say
[47:42] the only constant game development has
[47:44] changed but I just I wanted to yeah no I
[47:47] mean from from James's standpoint I
[47:49] think you started on this wood
[47:51] three four months ago yeah late last
[47:54] year so you know and and
[47:57] like he he was the one that did the
[48:00] initial Mission and then calling out to
[48:03] mft and saying hey we need this we need
[48:06] this we need this and then you know it'd
[48:08] be myself and and
[48:10] um Phil and Jonathan from production
[48:12] standpoint going around chasing up
[48:13] people saying okay we need this feature
[48:15] when is this coming online
[48:18] um you know there was there was some new
[48:20] tech that had to be created for like
[48:21] mission that starts you know
[48:25] um basically when the player initiates
[48:27] into the world like there there were
[48:29] certain fundamental things that were not
[48:30] there and then there were definitely
[48:33] some gotcha moments when we're going
[48:35] through and we're like oh we missed this
[48:37] you know oh we need this or you know and
[48:40] with a lot of these things um for the
[48:43] most part the way that we do our our
[48:45] feedback you know or or our play tests
[48:48] we do a lot of those via um
[48:52] uh
[48:53] you've seen seen PTU you know and seen
[48:57] the evocati playing and
[49:00] um it's
[49:01] that's so it's the hardcore of the
[49:04] hardcore but we knew for this feature
[49:06] like the people wouldn't be doing that
[49:08] or needing that so
[49:10] um
[49:11] you know so we did internal play tests
[49:14] and we watched them yes a lot yeah yeah
[49:16] some some real gotcha moments on James
[49:19] certainly why some just just things that
[49:22] surprised you well I'm looking at one
[49:25] right now yeah
[49:32] episode of Star Citizen live
[49:34] and light improve new player experience
[49:35] thank you to Todd and James for taking
[49:38] time out of the end of your your week uh
[49:40] uh uh thank you to Todd's uh uh uh
[49:44] Offspring we're in our studio audience
[49:46] uh we're forced to hang around hang out
[49:48] and and see us do this uh they just
[49:51] turned bright red and I love it we
[49:53] didn't we don't have a camera on them
[49:55] um join us back here next week uh uh
[49:59] inside Star Citizen you can probably
[50:01] guess what it's about I didn't see if I
[50:04] was allowed to say it early so I'm not
[50:05] going to say it but I mean if you watch
[50:07] the very end of this week's ISC you can
[50:10] probably guess what next week's ISC is
[50:11] all about and then there is no uh Star
[50:13] Citizen live uh next week because I'll
[50:15] be on a plane to Belgium for uh Beacon
[50:18] the Belgian community's annual
[50:20] convention uh so you can see me over
[50:22] there I'm sure there's probably a live
[50:24] stream or something I'll pop up on so
[50:26] for Todd and for James and for me thanks
[50:29] for watching uh take care keep an eye
[50:32] out on all things 319 on the
[50:33] robertspaceans.com website and of course
[50:35] our Star Citizen socials on Twitter and
[50:37] Instagram and Tick Tock which is blowing
[50:39] up apparently uh and uh yeah
[50:43] I thought I had an ending for this and I
[50:45] don't
[50:46] bye everybody

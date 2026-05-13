# Introducing Inside Star Citizen | 3.5 Ep. 1

**Video:** https://www.youtube.com/watch?v=vKvI_eDpOgg
**Date:** 2019-04-25
**Duration:** 13:53

## Transcript

[00:06] welcome everyone to inside star citizen
[00:09] I'm your host Jared Huckaby now each
[00:11] week we'll invite you to come inside our
[00:13] studios and join our developers that
[00:16] they share their latest work bringing
[00:18] the star citizen universe to life with
[00:20] interviews about specific features demos
[00:22] of the latest game systems that are
[00:24] currently in development and semi
[00:26] regular updates on sprint progress from
[00:28] teams around the world now to get things
[00:30] started for us this week let's check in
[00:32] with Simon Daniel as they share with us
[00:34] their work on a new lighting model for
[00:36] particles that's both better-looking and
[00:38] less resource-intensive kind of like me
[00:41] let's check it out
[00:43] today we're going to talk about the new
[00:45] lighting system for GPU particle system
[00:48] all decoupled lighting
[00:51] [Music]
[00:54] it's hard to our ongoing process of
[00:58] essentially replacing the old CPU
[01:01] particle system with this new GPU
[01:03] particle system the difference between
[01:05] the old particle system the new particle
[01:08] system is that now we have implemented
[01:10] some new features which allows us to
[01:13] focus much more on the visual quality of
[01:15] the particles then on the performance
[01:17] like started off beginning of this year
[01:20] on the GPU particles each particle had
[01:22] its one single sample of light things
[01:24] for example in shadows that the whole
[01:26] particle way either in shadow or not in
[01:29] shadows now the method we based it on it
[01:32] is a technique invented by id Tech and
[01:35] we took that technique and we also
[01:37] pushed it for further you can see very
[01:41] nice shadows on the old system if we
[01:45] wanted to use shadows then we had a huge
[01:49] impact on the performance so with the
[01:52] new one there is no worries about the
[01:54] performance but only to focus on the
[01:57] quality aspect of the particles lighting
[02:01] means that we can borrow color from the
[02:03] Sun from the environment also from the
[02:05] cue maps and then this will translate
[02:08] actually in making the particles the
[02:11] assets belong to this environment or to
[02:14] this planet so the way it will improve
[02:16] the player experience because it
[02:18] benefits the performance so that means
[02:20] that you running a better frame right
[02:22] because we have a control how their
[02:24] solution overall total resolution of the
[02:26] Atlas that sort of defines the worst
[02:29] case so so we get more controllable
[02:32] performance better performance the
[02:34] lighting will be much better so it looks
[02:38] better and better performance basically
[02:40] by the frame rate I feel like it punch
[02:43] it punch it up right now I don't like
[02:45] this nearly as much as Shawn Tracy does
[02:46] this is I'm convinced the only reason we
[02:49] ever got shot in Tracy to do h-e-b was
[02:51] because of this this is a is C Los
[02:53] Angeles soon there's gonna be is C Miami
[02:55] and I see a Special Victims Unit
[03:03] spaceships more than just a means of
[03:05] getting from A to B they're a great way
[03:08] to
[03:08] make your mark in the persistent
[03:09] universe and members of our ship teams
[03:11] work to bring additional vehicles to
[03:13] life in every major patch including the
[03:15] upcoming alpha 3.6 now it might be a bit
[03:19] early for this but we thought it'd be
[03:21] cool if we took a look inside the
[03:23] insides of the upcoming Vanguard series
[03:25] of variants with our ship teams very own
[03:27] John Neville so the objective of this
[03:30] exercise has been to redevelop and
[03:33] incorporate components into the abundant
[03:36] firstly behind the cockpit is not gonna
[03:39] be the component room behind every wall
[03:41] are you gonna have various things like
[03:43] coolers shields power plants under the
[03:46] stairs here we have radar after working
[03:50] on the component room it was the past to
[03:54] redevelop the modular interior of the
[03:57] ship this is the new warden interior
[03:59] you're gonna have your a little service
[04:01] station here that you can interact with
[04:02] the ship with again this has components
[04:04] in this slot here we've redesigned the
[04:08] bathroom and all of the storage around
[04:11] there and then across here you've got a
[04:13] new gun tree next to these things here
[04:16] we have the gun racks where you can
[04:18] store all your weapons in and then on
[04:20] either side you also have a space for a
[04:24] locker
[04:24] thank you for your clothes and things
[04:26] its objective of this middle room here
[04:28] was to build a framework where we could
[04:30] build a modular pod in the sense that
[04:33] when you buy a Vanguard the cockpit the
[04:36] component room in the rear room are all
[04:38] gonna be the same basically whenever you
[04:40] buy a variant for the ship we are to
[04:41] change out this middle section here I've
[04:44] also been working on Harbinger Varian
[04:46] and the harbinger variant is the torpedo
[04:49] ship and then here again you've got
[04:50] space for crew in the bathroom and the
[04:54] country here with weapons locking next
[04:57] to it and inside this one here we also
[04:59] have a big torpedo Bay so that whenever
[05:02] the pilot is deploying the torpedoes
[05:05] you'll be able to see these Toby there's
[05:07] getting loaded down and deployed and
[05:09] then you've also redeveloped the hoplite
[05:12] variant which is introducing more space
[05:14] for storing the weapons away so yeah
[05:17] like an almost like an armor at the side
[05:18] here where you put all your assault
[05:20] rifles and
[05:21] guns and all kinds of cool stuff and
[05:23] then also space for introducing heavy
[05:25] weapons too so you can really kick this
[05:27] area out and be able to turn it into
[05:30] quite a versatile Arsenal workshop yeah
[05:33] so the the objective of this exercise
[05:36] has been to make a modular Vanguard
[05:39] which allows developers to build
[05:43] variants a lot more rapidly in the
[05:44] future and also it gives the end user a
[05:48] much more versatile and richer
[05:51] experience telemetry now Webster's
[05:54] dictionary defines telemetry as I'm hey
[05:58] Dave someone so what's going on we're
[06:02] shooting the shuffle can I help you so
[06:06] what we did here yeah yeah we don't want
[06:10] to do it in the stage anymore we want to
[06:12] be inside development and everything oh
[06:14] cool that's cool yeah cool
[06:21] so are you like hosting it out yeah yeah
[06:25] you know everybody's busy we figured I
[06:26] do this and it frees you guys up to
[06:28] focus on like water sleep making star
[06:30] citizen yeah yeah totally totally that's
[06:32] cool it's really cool hey come to work
[06:38] let's go now to kick your Standefer who
[06:41] can tell us about a recent update to the
[06:42] telemetry page currently available in
[06:44] Roberts space industries comm Hey
[06:47] we recently published an update to this
[06:50] dashboard that includes a few new
[06:52] features and some additional filters
[06:54] that you can look at the data with this
[06:56] allows you to drill down on the heat map
[06:58] to see all the data that we display and
[07:00] divide it not only by the different
[07:02] resolutions that people are running as
[07:03] well as the different versions of the
[07:05] game that we've published in the past
[07:07] additionally we added some statistics
[07:09] about loading times for our game the
[07:12] loading times that we're displaying not
[07:13] only track your average loading times as
[07:16] well as you can take a look at the
[07:18] community's average loading times
[07:20] divided not only by the different
[07:22] versions of the game so you can see how
[07:24] loading times change as we publish new
[07:26] versions but you can also take a look at
[07:28] what percentage of the community uses
[07:31] SSD versus HDD and how
[07:33] affects their loading times as well
[07:34] another thing that we've added to the
[07:37] public to limit your dashboard is the
[07:39] ability to see or average ping compared
[07:41] to the average ping of the community so
[07:43] you can see generally where you lie
[07:45] along the lines of the average player
[07:48] for your connectivity and finally we've
[07:51] also added data about the stability of
[07:54] our different game versions this is
[07:55] shown via the stability score which
[07:57] contains a tooltip that you'll be able
[07:58] to read more information about how this
[08:00] stability score is generated with all of
[08:03] these new data points headed to our
[08:04] public telemetry dashboard it means you
[08:07] have an increased number of metrics to
[08:10] really dig into how your gameplay
[08:13] performance relates to that of other
[08:15] players and how it's changed over the
[08:16] lifetime of the different versions we've
[08:18] published in star citizen and just like
[08:20] us as developers we know too that our
[08:22] fan base is very data driven as well and
[08:25] loves to digest all of the very specific
[08:27] details so that's why we want to provide
[08:30] all this data to you each quarter inside
[08:33] star citizen will focus on the patch
[08:35] currently in development but
[08:37] occasionally sometimes if the stars
[08:39] align and things work out the way we
[08:41] hope we can take a look ahead at
[08:43] something that's a bit farther down the
[08:45] line like we get to do this week so
[08:47] let's go now to Robin from the
[08:49] environment art team who's been working
[08:50] on additional look dev for orison the
[08:53] first landing zone for the planet
[08:54] crusader
[08:59] orison is quite a unique location it's
[09:01] the second planet in the Stanton
[09:03] universe it is owned by Crusader
[09:06] industries they have created this giant
[09:09] shipyard it's quite high up into the
[09:11] clouds that exists out of a network of
[09:14] floating platforms the main functional
[09:17] location is generally to create the big
[09:19] commercial airliners from Crusader
[09:21] industries it's floating in the air
[09:24] because of the unique properties of the
[09:26] planet there we get you those nice
[09:27] sunset sunrise colors and feeling
[09:31] everything flows by itself so instead of
[09:33] making it in space which would require
[09:36] spacesuits it's like an ideal place to
[09:39] actually do something like this the key
[09:42] features are mainly of course the ship
[09:45] Wharf itself that exists out of like a
[09:47] refineries dry docks were like flying
[09:50] dry docks of course housing for the
[09:52] people themselves to get that utopian
[09:55] feeling of parks and like a lot of green
[09:58] a lot of trees and then there's of
[10:01] course also the flying hub for the
[10:04] transport because everything is being
[10:06] transported with trains so we're trying
[10:10] to home down the key functions that we
[10:12] need for this apartment I think it's
[10:14] gonna look quite amazing with some very
[10:17] interesting views looking out over the
[10:19] horizon like Sun setting that kind of
[10:21] stuff looking down seeing this big gas
[10:24] giant looking like around you you'll see
[10:28] these big platforms creating ships
[10:30] buzzing transport that kind of stuff
[10:33] yeah I think it's gonna be pretty cool
[10:36] last week alpha 3.5 completed its
[10:39] journey through the evocati and pichu
[10:40] test phases on its way to publish on our
[10:43] live environment to discuss how that
[10:44] went and because we'll take every
[10:47] opportunity to have these two on the
[10:48] show that we get let's welcome Chris
[10:50] Roberts and Sandi Gardiner to the show
[10:51] Chris sandy I'm well but you have to
[10:56] tell me what's going on here what are
[10:57] they sure yes thank you to our Aussie
[10:59] fans who organized the croc stuff yep
[11:01] and set system Tim times and Maltesers
[11:04] which were enjoyed by the office here as
[11:07] well as sandy all right so we got a few
[11:11] minutes with you I want to ask three
[11:12] points
[11:12] I've just made its way to life I had
[11:14] that go well many brave bugs died to
[11:17] bring us the release and we appreciate
[11:18] their sacrifice many cups of coffee were
[11:20] drunk and a lot of late night hours were
[11:24] burned by the team and the testers or
[11:27] the community out there working really
[11:28] hard so last few days games pretty
[11:30] stable people having some like fun and a
[11:34] lot of the missions are now starting to
[11:35] work well which is good so it's nice I
[11:37] really like watching all the videos
[11:39] everyone's making and the stories of the
[11:41] various things are up to it's great
[11:42] there's been some whispers of a rebound
[11:45] to the subscriber program coming up
[11:46] anything we are ready to share just
[11:48] whispers whispers yes I mean as more of
[11:52] the game comes online which
[11:53] three-point-five there's you know we're
[11:56] getting somewhere then we're going to
[11:59] revamp and a little bit more in that bit
[12:03] more better balance - in-game stuff to
[12:05] sort of out of a you know jump point or
[12:08] whatever just you need to revise these
[12:09] things as things change and when we
[12:11] start about putting things into the game
[12:12] that has to be okay I'm just saying to
[12:19] me it's history is over and it's my time
[12:26] now so just take off
[12:32] no we will see you so what have we
[12:40] learned today we learned that you can
[12:43] make particles look better while costing
[12:45] less the interior the Vanguard variants
[12:47] have so much more room for activities
[12:49] tonometry is great until you see that
[12:51] everybody else's computer is just a
[12:53] little bit better than yours and we're
[12:55] not so far away from the day there are
[12:56] characters can live amongst the clouds
[12:58] now if you enjoyed this week's show
[13:01] you can thank our subscribers for making
[13:03] each and every one possible and if you
[13:06] didn't like the show my name is Mike and
[13:08] Shella and we'll be back next week until
[13:11] next time we'll see you in star citizen
[13:14] insights now we're working on it's a
[13:19] work in progress
[13:21] [Music]
[13:32] thanks for watching for the latest and
[13:34] greatest in star citizen squadron 42 you
[13:36] can subscribe to our Channel or you can
[13:38] check out some of the other shows and
[13:39] you can also head to our website at
[13:44] www.uvu.edu/library

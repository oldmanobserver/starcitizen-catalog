# Star Citizen: Bugsmashers! - Here Today, Spawn Tomorrow

**Video:** https://www.youtube.com/watch?v=cmWbGsNGmU8
**Date:** 2018-01-17
**Duration:** 11:16

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers it's a
[00:18] whole new year it's a whole new fun and
[00:20] it's a whole lot of new optimizations so
[00:29] I have here a fun little test level that
[00:32] I use all the time and we are going to
[00:36] show some new stuff that we're working
[00:38] on and you have yet to finish but
[00:41] hopefully we'll bring a lot more
[00:42] optimizations as we make a bigger and
[00:45] bigger world one of the things that we
[00:48] have issues with now is let me just
[00:50] spawn into the game anytime I spawn an
[00:52] entity say a Cutlass the game takes a
[00:57] while to load that Cutlass in and it
[00:59] basically stalls the entire game so if
[01:02] I'm in multiplayer and some guys spawns
[01:03] a ship on the other side of the universe
[01:05] my game will halt because I have to load
[01:08] it in not fun the reason for this is
[01:11] because when we load in this ship and
[01:14] all of the assets and all the things
[01:15] that need it it all happens in one
[01:17] continuous block on the main thread so
[01:20] as you're running the game we have to
[01:21] spawn
[01:22] stop everything load in everything spawn
[01:25] the ship then we could continue on not
[01:28] very efficient and physically this is
[01:32] our interface we want to spawn a ship in
[01:34] this particular case and it's a it's a
[01:37] blocking spawn everything halts until it
[01:40] is finished and then we carry on our
[01:42] merry way instead we want to use this
[01:45] idea that we want to spawn this entity
[01:49] but let's have it in the background and
[01:52] when it's ready
[01:53] then we'll handle it so a lot of the
[01:56] guys in the UK and in the Frankfurt
[01:58] Studios have been building in this
[02:01] framework that allows us to do this it's
[02:03] not quite ready but it is there in a way
[02:05] that we can start utilizing it so let's
[02:09] get rid of this blocking spawn and
[02:11] instead
[02:12] we're gonna spawn a ship we gonna do my
[02:19] magical ship and she's you system I
[02:24] can't type for anything we're a spawn
[02:28] identity with our spawn properties that
[02:31] tells it where what and when and a new
[02:35] thing is because this is going to be an
[02:37] asynchronous call like before as soon as
[02:40] we spawn it then we could access it we
[02:43] can't access this right then and there
[02:44] because it's not gonna spawn now it's
[02:46] gonna spawn maybe a second maybe two
[02:48] seconds later so we can't handle
[02:52] anything immediately so we need to say
[02:55] when this is spawn here's a call back or
[02:58] a function call back saying this is bond
[03:00] I want to handle it this way so we're
[03:03] gonna use C++ this awesome new
[03:06] functionality called a lambda and in
[03:10] this lambda we need to have our
[03:13] signature of the call back
[03:16] doot-doot-doot which is the entity ID of
[03:20] this thing which will be the entity ID
[03:23] of our ship and the spawn friend we
[03:26] don't need these here this is mostly for
[03:29] other features that people use in this
[03:33] particular instance we need to get the
[03:36] vehicle so from this entity ID you need
[03:41] to get the vehicle so now I'm gonna send
[03:49] ZD we look up the entity grab the
[03:51] vehicle pointer and we access this
[03:57] callback from before that we used all
[04:00] the way up here to initialize the
[04:02] vehicle but instead of we have to
[04:06] capture it so now when we do our lambda
[04:09] we need to copy did you do
[04:15] so these guys are basically our lambda
[04:18] we capture these values we copy them in
[04:22] a sense so that when our spawn entity
[04:25] has finished and these get called we can
[04:28] invoke the callback later that we want
[04:32] so let's magic recode button see how
[04:36] this magical thing works for recode
[04:39] finishes I realized this won't work
[04:42] immediately so this will make this
[04:43] vehicle spawn correctly however it items
[04:46] will still be blocking and that will be
[04:49] a huge problem because now we're
[04:50] spawning something on the backend but
[04:52] we're doing a blocking spawn for all the
[04:55] items on it so we basically won't gain
[04:57] anything so we need to convert our item
[05:00] port system also into this so here's
[05:04] where we do our blocking spawn and it
[05:06] does a bunch of crap what we want to do
[05:09] is turn this into the same framework
[05:15] that let's go back to game rolls haha
[05:23] so here we go we need to get rid of all
[05:29] little sponge because we don't know what
[05:30] we need yet we're gonna spawn our entity
[05:33] it's an asynchronous call we're gonna
[05:35] have our call back right here send in
[05:39] our spawn print send in our spawn params
[05:43] Shazam so here is our spawn entities
[05:46] here's our asynchronous call where we
[05:50] have our entity from in here do close
[05:54] this guy it's him yes all right so we're
[06:03] gonna spawn this entity we're going to
[06:05] and do a bunch of fun stuff when it dips
[06:10] down spawning however we need to capture
[06:12] some of these local variables so some of
[06:14] the things we need is the item port ID
[06:18] we need our entity luckily we have our
[06:21] into the entity ID so we could grab that
[06:24] guy he is finished spawning at this time
[06:30] to get our entity it's kind of a weird
[06:37] thing because it's like hey I'm gonna
[06:40] spawn this guy here's a callback to
[06:42] handle him at a later time
[06:44] so you kind of have to write code saying
[06:47] alright once he's done spawning what
[06:49] would I need to do but push it into
[06:51] something that I might need later and
[06:53] that's what kind of this guy is it's
[06:56] like hey this is gonna happen later so I
[06:58] need to store off all the things I need
[07:01] to do with them hence the capture
[07:03] mechanic we gotta capture this
[07:08] fun little variables see what else do we
[07:15] have params so those are the spawn
[07:17] params
[07:21] haha fun friends are from in this guy
[07:29] we're gonna copy those - where do we go
[07:33] copy all the trams copy more params
[07:41] Shazam we got everything we need so on
[07:44] this guy's spawned we could access all
[07:46] the fun data excellent but there's an
[07:50] item port and we need to keep track of
[07:54] whether or not we want to cancel this so
[07:58] the vehicle spawning we just spawn it
[08:00] into a fire forget this guy we may spawn
[08:03] something but a part two touches before
[08:05] it gets attached so we need to go know
[08:07] so we need at least keep track of this
[08:09] luckily there's already set something up
[08:12] so spawn entity when we want to spawn it
[08:16] you'll actually return this job and
[08:18] access er so we go hey I want to spawn
[08:21] this if something were to happen I could
[08:23] say sometime in the future I want to
[08:26] cancel or abort or even reset it for
[08:33] example right here it's more of a safety
[08:36] code it's like hey I want to spawn this
[08:38] Cup 10 seconds later but in 5 seconds I
[08:41] delete the whole vehicle
[08:43] well that cups gonna spawn and it's
[08:45] gonna try to access all this stuff and
[08:47] go back so this bad boy right here will
[08:51] make sure that if we ever need to do
[08:53] some cleanup for example we're going to
[08:55] delete this item for we cancel any
[08:58] pending jobs so now that our item port
[09:03] is asynchronous our vehicle's
[09:05] asynchronous let's go to our recode fun
[09:08] again
[09:11] Shazaam recode is there now if
[09:13] everything was done right
[09:15] nothing should have changed so we spun
[09:17] our cut list it gets processed and it's
[09:23] now spawned just as before and all the
[09:27] items are on there and everything
[09:29] Shazaam
[09:30] we have framework for any synchronous
[09:34] bonding now there's still a lot of the
[09:36] work to do to move a lot of stuff off
[09:38] the main thread into some background
[09:40] stuff but this is the foundation to get
[09:43] us there
[09:44] hope you guys enjoyed until next time so
[09:47] as you guys saw we had a fun little
[09:49] experiment there where we're trying to
[09:52] build a framework for background
[09:55] asynchronous spawned so we can build
[09:58] something much bigger and yeah start
[10:03] over so as you guys saw we're building a
[10:06] nice nifty framework to process stuff in
[10:09] the background so that your game doesn't
[10:11] get interfered by some guy spawning a
[10:14] Cutlass a few feet behind you or who
[10:18] knows an interest which is a gigantic
[10:20] love practically a level that you fly
[10:23] around in we want to spawn and create
[10:26] everything in the background so it just
[10:29] pops into existence rather than stalling
[10:31] you for ten seconds go moving your mouse
[10:33] going or what's happening but it's gonna
[10:37] take a bit to get there and part of that
[10:38] is building this asynchronous framework
[10:40] you know you build the framework and
[10:42] then you start working a little chunks
[10:44] here and there and then before you know
[10:45] it we have an asynchronous fully
[10:47] systemized system on background threads
[10:49] well hope you guys enjoyed until next
[10:52] time thank you for watching so if you
[10:55] want to keep up with the latest and
[10:56] greatest in star citizen and squadron 42
[10:57] development please follow us on our
[10:59] social media channels see you soon
[11:04] you
[11:08] [Music]

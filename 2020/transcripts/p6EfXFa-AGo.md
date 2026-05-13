# Inside Star Citizen: Council Calls | Spring 2020

**Video:** https://www.youtube.com/watch?v=p6EfXFa-AGo
**Date:** 2020-04-30
**Duration:** 10:04

## Transcript

[00:05] so imagine if you will
[00:06] i'm coming into new babbage spaceport uh
[00:09] i've checked my hunger meter i'm a bit
[00:11] low i know i need to go and get
[00:12] something to eat
[00:14] so i head down to the fruit market and i
[00:17] buy a piece of apple with the
[00:18] streamlined new interface we got
[00:21] and it comes up into my inspect post
[00:23] it's all looking great
[00:24] and just as it does i notice all around
[00:26] me players are appearing with an apple
[00:28] in their hand
[00:39] that's good that's the money shot well
[00:42] done
[00:44] we have a wonderful qa team all over the
[00:47] world but there are some
[00:48] issues that we can detect faster at
[00:51] scale with a lot of players playing the
[00:52] game
[00:53] and that's where the issue council comes
[00:55] in the issue council
[00:56] is a tool on spectrum where players can
[00:59] report
[00:59] new bugs they can contribute to existing
[01:02] bugs and
[01:03] they can priority vote bugs they feel
[01:05] are most egregious
[01:07] we use that contribution system if it
[01:10] gets to a certain level
[01:11] to pull those bugs into our system to
[01:13] pull our those bugs into our own jira
[01:15] and we use the priority voting to figure
[01:17] out which ones are the worst
[01:19] i think the issue issue console is one
[01:21] of the really big benefits we have
[01:24] with a live product now also the fact
[01:26] that they can provide
[01:27] repro steps how did they get there what
[01:30] did they do sometimes
[01:31] you do something unexpected and that's
[01:32] what creating the bug and it's hard for
[01:34] us to reproduce without knowing
[01:36] that's what you did we determine an
[01:39] issue is valid by the number of
[01:40] contributions it has once it hits a
[01:42] certain threshold
[01:43] in the case of the live issue council
[01:46] that's 10 contributions
[01:47] then we it gets confirmed and we realize
[01:50] it's a valid issue
[01:52] so when i first saw this particular bug
[01:56] players were reporting that food was
[01:58] randomly appearing in their hands which
[01:59] is obviously a little bit strange
[02:01] i went to the game and checked it out
[02:03] and sure enough you could be riding the
[02:05] train you could be flying your ship
[02:07] whatever and just hamburger would just
[02:09] appear in your hand
[02:10] um i thought it was convenient i kind of
[02:13] wished it
[02:14] happened in real life obviously really
[02:17] really funny bug
[02:19] you know for me it's kind of almost
[02:20] almost a feature at the time obviously
[02:22] didn't realize that it was taking
[02:25] money money out of your account you were
[02:27] paying for that freebie food
[02:29] it wasn't that much freebie anymore
[02:32] discussed it quite a lot with keon we
[02:34] kind of went through
[02:36] the code kind of a bit backwards to to
[02:38] see
[02:39] where exactly is this extra piece of
[02:42] food appearing from
[02:44] um and then over time we kind of
[02:47] traced it back to this purchase logic
[02:50] that was
[02:51] executing on all the machines and
[02:54] send it over to spencer and his team
[02:58] the bug made its way down to me because
[03:00] i was responsible for implementing this
[03:02] new feature
[03:02] of picking up food when you buy it from
[03:05] the store and so this is not just that
[03:06] we're spawning fruit in your hand and
[03:08] charging a uec
[03:09] but you could see ridiculous scenarios
[03:11] where you'd reach off to grab this item
[03:13] and slide across the universe to get it
[03:15] because
[03:16] the way the carriable system works
[03:17] trying to get that in your hands
[03:20] so initially my thought was okay this
[03:23] bug might have to do with how the item
[03:25] is getting picked up and how we network
[03:26] that
[03:27] because uh i use the functionality we
[03:29] already have called
[03:30] post spawn action on our carriable items
[03:33] so when you have that set the instant
[03:35] this item is spawned it says oh
[03:36] somebody's trying to carry me i need to
[03:38] be picked up let me request that
[03:39] i thought there was something wrong with
[03:40] the networking there and this was a
[03:42] total dead end
[03:43] and was not at all what the problem was
[03:45] so later down the road
[03:47] i was investigating our new quick buy
[03:49] feature which is
[03:51] you'll see in shops instead of just
[03:52] saying like oh buy or
[03:54] try on there's also now a quick buy
[03:57] option that you can get
[03:58] and what that does is it circumvents the
[04:00] need to like oh buy open moby glass uh
[04:02] do i want to buy this buy okay
[04:03] buy all right we got it as with a lot of
[04:05] things adding a new feature
[04:07] suddenly breaks things because this was
[04:08] totally the problem
[04:10] and the reason is because we circumvent
[04:12] that mobi glass step
[04:14] when you interact with something in the
[04:16] game it's all server authoritative
[04:18] and so like oh if i'm going to try to
[04:19] pick up this item right now and i reach
[04:21] and grab it
[04:21] the server knows that you did that it
[04:23] tells everybody else that you did that
[04:26] and so here's where the problem is
[04:28] normally when you interact with a shop
[04:30] item and you say okay
[04:31] there's the thing i'm going to interact
[04:33] with that i'm going to open my mobi
[04:34] glass so i have a chance to buy it
[04:36] opening the moby glass is something that
[04:38] only happens on your client
[04:40] right so when everybody else gets told
[04:42] about this interaction they say hey
[04:43] spencer just opened up his moby glass
[04:45] but like it's not your movie glass so
[04:47] don't worry about opening it you know
[04:49] um there's nothing there's not a real
[04:52] moby glass there for me
[04:53] on your computer but when we circumvent
[04:55] the movieglass and say hey this person
[04:57] tried to buy this thing essentially
[04:59] everybody would get this interaction
[05:00] call back
[05:01] and just say i want to buy this item
[05:03] everybody else doesn't have that step of
[05:05] oh i don't have a mobile glass for that
[05:06] character
[05:07] it went right to the buy just spend
[05:09] their own real money because somebody
[05:10] else tried to make a purchase
[05:12] so in the end the fix was actually
[05:13] pretty straightforward and pretty easy
[05:15] to implement it was only a few lines of
[05:17] code really
[05:18] but as with a lot of bugs in our game
[05:20] the the hardest part is tracking down
[05:22] why the issue is happening in the first
[05:23] place going down several dead ends and
[05:25] saying
[05:26] okay this is really where the issue is
[05:28] let's just put a couple lines of code in
[05:29] let's prevent this scenario from
[05:30] happening and now we're good
[05:32] and it's really great that for issues
[05:33] like this we have the issue council
[05:35] to bring up like hey this this bug is
[05:37] happening when we have a lot of players
[05:39] and they're in the same location and
[05:40] stuff
[05:41] uh things that are harder for me as a
[05:42] single developer to try to reproduce on
[05:44] my own machine
[05:45] and that you know it's easy to go
[05:46] unnoticed with just one person it's
[05:48] super important and it's a really great
[05:50] thing and it it's
[05:52] one of the things about this project
[05:53] that adds to the whole um
[05:56] life cycle you know that it's all live
[05:58] it's all there you're always playing
[06:00] almost what we're doing um as we're
[06:03] doing it
[06:03] so it's a direct connection between us
[06:06] and
[06:06] the players way back when
[06:10] games like wing commander pioneered the
[06:11] use of in-situation coms calls
[06:13] where npcs would call into a screen in
[06:16] the player's cockpit and provide
[06:17] exposition
[06:18] or react to current happenings in game
[06:20] play for the upcoming squadron 42
[06:23] this feature is being brought into the
[06:24] 21st century by the comms call strike
[06:27] team
[06:27] who are working to develop a systemic
[06:29] solution that can stand up to scrutiny
[06:31] from all angles
[06:32] while providing experience that is both
[06:34] diegetic within the game universe
[06:37] and relatable to players who today have
[06:40] video calls as a regular part
[06:42] of their daily lives so comms calls
[06:45] are a communication system from ship to
[06:48] ship
[06:49] and with squadron 42 involving the
[06:52] player taking the role as a pilot
[06:54] it's their primary use of communication
[07:00] nice
[07:03] brilliant brilliant
[07:10] what we're currently doing with squadron
[07:12] 42 is you can even see
[07:14] the person who's communicating to you
[07:15] you know they're right there next to you
[07:17] and then you can even fly over to them
[07:19] and see them
[07:20] animating and talking to you so we have
[07:22] four types of cons calls we have cockpit
[07:25] we have terminals we have mobi glass and
[07:27] we even have fps weapons
[07:28] we are currently shifting our focus to
[07:32] the cockpit controls towards gold
[07:34] standard gold standard is a term used
[07:36] in the industry for when a feature team
[07:39] or any cam development team
[07:41] focuses on one aspect or one feature of
[07:44] development and we
[07:45] take full focus all the way to the end
[07:47] delivery of it this
[07:48] includes making sure that helmets for
[07:51] pilots are lit
[07:52] in the correct way to deliver a good
[07:53] performance on the face we have cameras
[07:56] set up
[07:56] per ship so maybe some manufacturers
[07:59] will have a different camera set up to
[08:01] others
[08:01] we also look at the
[08:05] skeleton and animation of the pilot
[08:07] themselves
[08:08] making sure that each character brings
[08:09] their own personality even to their
[08:11] flight pose as well as their
[08:12] deliberately of their lines
[08:14] the imc is going to kill you and all
[08:17] your mug friends
[08:19] due to the current state of the pu the
[08:22] coms calls are pre-recorded and
[08:24] delivered based on context
[08:26] ultimately it will be working the same
[08:28] situ as squadron 42
[08:30] where all dialogue lines we played in
[08:33] real time
[08:34] as it adds that next level of immersion
[08:37] for instance
[08:37] maybe your wingman is coming you that
[08:39] needs to get these pirates off his back
[08:40] and he's getting shot at left right and
[08:42] center by their energy weapons and
[08:44] they're dynamically listening to the
[08:45] cockpit
[08:46] last thing you want to see is all these
[08:48] blasterfire on the cockpit
[08:49] and then just have a pre-recorded
[08:51] animation of an unlit cockpit can really
[08:54] break the immersion
[08:55] so the team is really coming together to
[08:56] bring a terrific cockpit experience for
[08:58] the player of squadron 42.
[09:00] we have over 100 characters with
[09:02] hundreds of dialogue
[09:03] that's delivered all through different
[09:05] ships different circumstances and should
[09:08] be an experience to remember
[09:11] so what did we learn this week well we
[09:13] learned that even the most seemingly
[09:15] innocuous bugs can have a potentially
[09:17] devastating effect on the in-game
[09:18] wallets of players everywhere
[09:20] that with tools like the issue council
[09:22] players can take an active role in the
[09:24] development of star citizen
[09:26] and that successful immersion for a
[09:28] storytelling experience like squadron 42
[09:30] can often come down to the little things
[09:33] like
[09:33] simply knowing the responses of our
[09:35] opponents are accurately reflected in
[09:37] the
[09:37] mayhem around them for inside star
[09:40] citizen
[09:41] i'm jared huckaby
[10:03] you

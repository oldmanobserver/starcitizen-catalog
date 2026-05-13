# Inside Star Citizen: Persistence Existence | Summer 2022

**Video:** https://www.youtube.com/watch?v=1eQ17OMAXSQ
**Date:** 2022-09-01
**Duration:** 14:09

## Transcript

[00:04] hey all space dad here coming to you
[00:07] from a secret facility that we'll be
[00:08] talking more about next quarter now
[00:11] alpha 318 has a whole lot of features
[00:13] that players have been anxious for
[00:15] updates on and while we'll get to all of
[00:17] them like we always do before this
[00:19] quarter is out we wanted to take this
[00:22] week's show and slow things down a bit
[00:24] for an uninterrupted unabridged chat
[00:27] about persistent entity streaming what
[00:30] it is how it's been going where it's at
[00:32] now and what's coming up next and we'll
[00:35] get back to our normal features next
[00:38] week but for now please join me in
[00:40] welcoming benoit beauceur cto of our
[00:43] partners at turbulent for what we're
[00:45] calling our very first pes report
[00:50] so benoit
[00:52] welcome back to isc to start things off
[00:54] give us a nickel version of what
[00:57] persistent entity streaming is
[00:59] it's a personality streaming is a system
[01:02] that allows us to persist the entire
[01:04] game world and restore it from disk so
[01:07] that it's never lost and changes from
[01:09] players are meaningful and what's that
[01:11] look like to the player how will players
[01:13] know if pes is working or not uh it's
[01:16] again they're gonna know because every
[01:17] time they come back to the same server
[01:19] the state will be the same so if you
[01:21] leave a ship a can or any kind of items
[01:24] in the world will stay there
[01:26] you blow up a door it'll be blown on
[01:28] that server forever but part of this is
[01:30] something that cleans up the junk
[01:32] afterwards right
[01:33] yeah some items will be covered under
[01:35] life cycle management which will get
[01:37] recycled rights because obviously we
[01:39] need some kind of janitorial
[01:42] system behind the scenes but there also
[01:44] are discussions about gameplay to do
[01:46] that to help players to get players to
[01:49] help us clean up the game world but yes
[01:51] those are that's a new avenue that
[01:52] persistent enemy streaming opens up
[01:55] all right so we brought everyone up to
[01:57] speed on what pes is let's get to the
[01:59] updates now last time we heard anything
[02:02] was from chris's letter from the
[02:03] chairman back in may where we'd just
[02:05] dropped something on the ground shut the
[02:07] servers down brought the servers back up
[02:10] and it was still there
[02:12] what's happened in the last three months
[02:14] uh well so the the team which is fairly
[02:17] large team at this point has been
[02:20] working really hard to get our first
[02:22] stage delivery to what we call game dev
[02:24] which is our main branch what that means
[02:26] is we've moved from a prototypical
[02:29] work branch into what everybody in the
[02:32] company is using to develop the game and
[02:34] so that's the big achievement is now the
[02:36] the technology is in the game dev branch
[02:39] so everybody is using it in day to day
[02:41] day in day out testing uh and every you
[02:44] know so all the bugs appear they're
[02:46] right in our faces we fix them right
[02:48] away
[02:48] it's been a
[02:50] bit of a crazy crazy time but that's the
[02:53] big achievement in the last three three
[02:55] months is that we've stabilized the
[02:57] technology enough so that the entire
[02:58] company can now be working on it
[03:01] uh define crazy
[03:04] they find crazy everything being on fire
[03:07] like
[03:08] you know this technology touches on
[03:10] every subsystem in the game so transit
[03:12] was busted uh you know like stuff was
[03:15] persisting in the wrong locations
[03:18] uh you can log into the game because
[03:21] obviously with pes comes the a new login
[03:24] flow to get players into the game
[03:25] because we need to bring your items into
[03:28] a new database so that entire system was
[03:30] also as rocky to get in because there's
[03:33] a lot of cases uh to deal with like
[03:36] timeouts if you have too many items what
[03:38] happens if you have too many items uh
[03:40] you know and dealing with the different
[03:42] all the different stages of the login
[03:44] from authentication to you being
[03:46] actually spawning in the game and so
[03:48] it's been a lot of debugging
[03:50] uh encountering issues on different
[03:52] types of machines because when we start
[03:54] you know all the developers have some
[03:55] pretty good machines on the on those
[03:58] feature branches but when we move to
[03:59] game dev now we're exposed to all kinds
[04:01] of different hardware
[04:03] and you know
[04:04] timing issues occur those are the weird
[04:06] ones to find
[04:07] uh they're really difficult to trace in
[04:09] fact but uh so that's been the the
[04:12] craziness is getting exposed to way more
[04:15] machine types or users as well right
[04:18] like uh the game requires a lot of
[04:20] resources to run when we develop locally
[04:23] and so sometimes you know one service
[04:25] doesn't start on somebody's machine and
[04:26] that causes you know all these crashes
[04:29] to start being reported and now we have
[04:30] to investigate them and so that's been a
[04:32] bit of it's the real time effect that
[04:34] makes it crazy it's like you know it's
[04:36] not we're not making technology in a
[04:37] bubble anymore where everybody's using
[04:39] it and so that makes it really really
[04:41] difficult to follow but it's been it's
[04:43] been
[04:43] fun to
[04:44] finally get the technology in the hands
[04:46] of people that can
[04:47] uh really adjust it for the game and for
[04:50] the players and
[04:52] so that's been fantastic
[04:53] so that's been the last couple months
[04:55] but where are we at right now
[04:58] so right now on the technology side
[05:01] we're in bug fixing mode right and
[05:03] identifying the elements that are left
[05:05] that we are still you know rough around
[05:08] the edges so let's i don't want to call
[05:10] it polish it's really bug fixing back
[05:12] testing stabilization
[05:14] uh stabilization is the right word
[05:16] that's what we're doing right now so
[05:17] it's feature parity and making sure
[05:19] everything works though it should
[05:21] uh on the
[05:22] other side there's a new team that's
[05:24] kicking in work which is deployment
[05:26] teams right so this is taking the
[05:28] technology that we have working on a
[05:30] game dev build and locally and basically
[05:34] breaking it up into a lot of small
[05:36] services that run in the cloud so the
[05:39] operationalization of the technology
[05:41] that's what we're uh really focusing on
[05:43] now
[05:44] it's like a dependent project right so
[05:46] this allows us to basically uh bring the
[05:49] game to you guys
[05:51] that's where we can do ptu so ptu is for
[05:54] a lot larger than
[05:56] a developer running the game on his
[05:57] machine
[05:58] even though there's tons of services
[06:00] when we go to the cloud you know we've
[06:01] got operators that deploy that on
[06:03] multiple machines and scale this out
[06:05] this is made to scale so
[06:08] so now it's about testing that that's
[06:09] true so we've got the technology is
[06:11] working now we're trying to scale it out
[06:13] to the cloud c you know how many users
[06:15] were kicking in and there the weight of
[06:17] the entities how many entities we end up
[06:19] having in the databases can they reload
[06:20] fast enough you know testing all of the
[06:23] facets of the assumptions that we had
[06:27] but really getting the getting this
[06:28] technology ready to be deployed for
[06:30] players to play on
[06:31] has the recent change in server player
[06:34] counts had any effect on pes testing or
[06:36] its development
[06:37] well at first we thought it was going to
[06:39] have an effect but the reality is the
[06:42] same amount of entities get stored
[06:45] whether 100 players are simulated or 50
[06:48] so no for the moment there is no side
[06:50] effect to having more
[06:53] player player caps because the
[06:55] you know obviously there's more entities
[06:57] being changed but ultimately for the
[06:58] same amount of players online whether
[07:00] they're divided on 5100 players per
[07:02] server doesn't doesn't change anything
[07:04] for ps
[07:06] great awesome uh but what's next where
[07:08] do we go from here
[07:10] where do we go from here it's a straight
[07:12] line to uh deployment right that's the
[07:14] only thing that matters right now is is
[07:16] to make sure that
[07:18] the technology can run in the cloud
[07:20] properly that it scales out uh that if
[07:23] we have more players coming in either in
[07:25] a short period of time or in a long
[07:26] period of time that we can
[07:28] you know add more provisioning add more
[07:31] machines to run it
[07:32] um making sure it operates well at scale
[07:35] uh so when you know
[07:38] all of you guys are online to make sure
[07:39] that everything's functioning properly
[07:41] that we cover for we recover from hairs
[07:43] this tech comes with a lot more
[07:45] observability than the previous systems
[07:47] that we had so we have tons of graphs
[07:50] and like data that's coming in from the
[07:53] system operating
[07:55] uh and we're you know the teams need to
[07:57] get used to this to be able to identify
[07:59] problems to be able to help support we
[08:02] have a bunch of new tools that we're
[08:03] also working in the last
[08:05] stretch here to uh allow game support to
[08:09] uh help players that have issues for so
[08:12] uh character repair is something that
[08:13] we're starting to work on uh
[08:16] mine the word here is not character
[08:17] reset but character repair which is
[08:20] something that we can now do
[08:22] that we could not do before so
[08:24] that will allow us to not
[08:27] you know just destroy people's
[08:28] inventories and items but really go and
[08:31] fix one issue on their on so that they
[08:33] can keep playing so
[08:34] we're trying to get that in before we
[08:36] launch it because we think that would be
[08:37] a very beneficial uh for if there are
[08:41] corruption uh events again we're trying
[08:44] to this the technology is made to not
[08:46] have those but
[08:48] like better say that story right so
[08:50] so yeah so that's the that's really the
[08:52] work now is login flow and pes is just
[08:55] stabilization and deployment so that we
[08:57] can launch it so it's bee line for for
[08:59] 318 is is all it's like we're banging on
[09:02] it
[09:03] until it gets it properly
[09:05] now i know we don't like to do dates but
[09:07] we got a whole lot of player testers
[09:09] waiting to help bang on the pipes you
[09:11] wanna you wanna forecast anything oh no
[09:14] i'm not even gonna try to gamble on that
[09:16] one uh i mean we have it running in in
[09:19] the cloud it's running right but you
[09:21] know before we're comfortable
[09:24] not sending the etf team into a you know
[09:27] just fire drill
[09:30] that's gonna be you know there's a big
[09:32] difference between testers internal
[09:34] testers developers using the system and
[09:37] when we get real users on it it's
[09:38] completely completely different right
[09:40] and
[09:41] uh so it's hard to say for me like i
[09:43] can't i don't want to forecast it that's
[09:45] fair that's fair now before we let you
[09:47] go i want to reiterate that pes isn't a
[09:50] traditional feature like players are
[09:52] used to when it works star citizen isn't
[09:54] going to look any different it'll just
[09:57] be another step closer to functioning
[09:59] like we've always intended to it's it's
[10:02] a major step forward in stability
[10:04] when all is said and done
[10:06] yeah you know i'm not saying we're not
[10:07] going to have wipes anymore because
[10:09] there's always data changes that will
[10:11] require us to do that but we're really
[10:12] hoping that the technology will allow us
[10:15] to have consistent
[10:16] data which we don't always have right
[10:18] now
[10:19] uh you know all the every players had
[10:21] horror stories of so you know how
[10:23] they're you know losing their movie
[10:24] glass or their eyes
[10:26] which is incidentally one thing i
[10:28] discovered in this project is that if
[10:30] you don't have eyes you don't see
[10:31] markers in your visor that's an
[10:33] interesting one
[10:34] uh but uh so trying to make sure that
[10:37] the data's you know the technology will
[10:39] make sure that the data is safe and
[10:41] sound so obviously less corruption so
[10:43] that's the first thing we expect second
[10:45] one
[10:46] stuff will persist and to be honest at
[10:48] this time we don't totally know
[10:51] what that's gonna mean
[10:53] when we put real players in it right so
[10:56] we do have life cycle systems and
[10:58] cleanups and all that stuff yes we've
[11:00] planned for that but we don't yet know
[11:02] what you guys will do with it and that
[11:03] will greatly affect how the technology
[11:06] functions right in the end uh so that's
[11:09] going to be interesting to see so as as
[11:10] a player stuff you put on one server
[11:12] will stay there right it's there until
[11:14] the server gets you know wiped
[11:17] manually but by default every server
[11:19] will just persist
[11:20] you know
[11:22] like you said it's a stepping stone
[11:23] technology
[11:25] really what this means is behind the
[11:26] scenes the simulation and the
[11:29] replication of the game so simulation is
[11:31] the stuff that runs the physics and the
[11:33] rendering and the ai
[11:35] right is one thing and the replication
[11:38] which is sending updates and the state
[11:41] of all these entities as they're being
[11:42] simulated this used to be like this
[11:45] right and now with pes and the game
[11:47] server this is split into two and that's
[11:49] the big achievement that ps allows us to
[11:52] do
[11:53] yes we get persistent state that's
[11:54] awesome that's great but the real
[11:57] thing is that we separate simulation
[11:59] from replication and that allows us to
[12:01] do server meshing after that and that's
[12:03] the whole that's the reason why we're
[12:05] doing this
[12:06] all right last question then
[12:09] how do you feel
[12:10] good
[12:11] i feel good tired but you know we're in
[12:13] the home stretch so i'm i'm happy
[12:16] i'm happy about where we are i'm happy
[12:17] that the the company now can use the
[12:20] technology and see what it what it's
[12:21] like to persist everything i mean my our
[12:24] dev servers are not littered with
[12:26] you know stuff
[12:27] playing around which uh which is cool uh
[12:31] but uh i i know i feel good i feel
[12:32] encouraged uh also stressed out because
[12:35] like we need to scale it right so that's
[12:37] the it's that it's that ten percent that
[12:40] takes ninety percent of the time right
[12:42] so that's the effect i'm
[12:44] a bit stressed out for but it's okay i
[12:46] feel good about it all right well thank
[12:48] you for your time man
[12:49] thank you man
[12:50] so what did we learn this week well
[12:53] hopefully it's that persistent entity
[12:55] streaming may not be the most uh visual
[12:59] of features but it is the next big step
[13:02] in realizing a universe where players
[13:04] can truly leave their mark the the last
[13:07] major milestone that'll make server
[13:09] meshing possible and that it's still
[13:11] heading your way in the upcoming alpha
[13:13] 318. now thank you for taking this iscd
[13:17] tour with us this week but don't worry
[13:19] we've still got four more episodes left
[13:21] this quarter where we'll be covering
[13:23] things like hull stripping cargo
[13:25] refactor the new 600i and msr crash
[13:28] lights and more as well as meeting the
[13:30] performance capture team and exploring
[13:32] their new facility next door and then
[13:35] maybe we'll stop by his people are
[13:38] talking to my people we'll see what we
[13:40] can make happen
[13:44] for inside star citizen i'm jared
[13:46] huckaby we'll see you all next week
[14:08] you

# Star Citizen Live: Persistent Entity Streaming

**Video:** https://www.youtube.com/watch?v=jXvIO8vJkgI
**Date:** 2022-09-16
**Duration:** 1:03:41

## Transcript

[00:01] hello everybody Welcome to Star Citizen
[00:04] live persistent entity streaming I'm
[00:07] your host Jared Huckabee and if you've
[00:09] never seen Star Citizen live before it's
[00:10] the where we take about an hour out of
[00:12] the end of our week and we chat with our
[00:14] developers uh sometimes we take a look
[00:16] at what they're working on have them
[00:17] demonstrate some live process for us
[00:19] other times we hold their feet to the
[00:22] fire and make them answer the questions
[00:23] from you the Star Citizen Community and
[00:26] this week we are going to watch Benoit
[00:29] and Paul's macrame art for the next hour
[00:32] it's the art it's the art show I'm sorry
[00:35] sorry
[00:37] I've been practicing all month guys I'm
[00:40] ready for this so uh about a week and a
[00:42] half ago we posted a thread up on
[00:44] spectrum and we collect we we collect we
[00:46] collected
[00:47] we collected a bunch of questions that
[00:50] the community had about uh one of the
[00:53] biggest kind of tent pole kind of name
[00:55] recognition features coming to Star
[00:57] Citizen in the upcoming Alpha 318
[00:59] persistent entity streaming and so we're
[01:01] going to talk about that today what it
[01:03] is what it isn't uh what it does what it
[01:05] doesn't and so forth and before we get
[01:08] into it allow me to introduce uh the man
[01:10] who probably needs no introduction but
[01:12] we're gonna do it anyway uh uh CEO and
[01:15] founder of turbulent our partners inter
[01:17] Benoit
[01:19] yeah hey everybody I'm the same guy yeah
[01:22] CTO though CEO would be great that's
[01:25] right that's right yeah CEO would be
[01:27] great I'm gonna get a message from Mark
[01:28] right now oh there he is exactly there's
[01:30] the three dots from Mark oh there we go
[01:32] uh and and then and then uh someone you
[01:35] might recognize from last year's
[01:37] citizengon presentation on persistence
[01:39] and server meshing uh Mr Paul Randall
[01:43] hey guys how you doing Paul good we
[01:47] don't get to do many videos the last
[01:48] time we were together was when we were
[01:49] filming that that citizen gun thing
[01:51] that's true almost all all alone in the
[01:56] office everyone was still working I was
[01:58] thinking about it it was almost exactly
[02:00] a year ago as I'm looking at the date
[02:01] right now so so it was painful to do
[02:04] that alone right like the of filming all
[02:06] those segments on the side like it was
[02:08] difficult the graphics were nice though
[02:10] yeah the graphics were nice yeah the
[02:14] graphics were nice once they were done
[02:16] they were up yes of course yeah no you
[02:19] know all right so uh right off the bat
[02:22] we we we we we we vamped for three
[02:25] minutes uh let's start let's talk about
[02:27] Precision in your streaming before we
[02:28] get into the questions let's just start
[02:29] let's set the table
[02:31] what is persistent energy streaming now
[02:34] I know we just did the ISE segment to
[02:36] three weeks ago and whatnot but
[02:37] everybody watches different things and
[02:39] whenever now we got Paul we got Paul's
[02:40] answer to the question so actually we
[02:42] had Ben y answer it last time so Paul
[02:44] I'm going to point this one to you
[02:46] what is persistent entity streaming
[02:48] well plus it's an anti-distrieving is
[02:51] basically taking the entire scene graph
[02:55] of the engine which is the entire
[02:58] hierarchy of the universe players all
[03:00] objects and take that which was
[03:02] previously stored on and at most game
[03:05] engine that's stored in the memory of
[03:07] the server
[03:09] or on the client we take all of that
[03:11] and we push it to a database and it
[03:14] gives us the foundation to basically
[03:16] stream the entire entities hierarchy to
[03:21] client servers and to persist so that
[03:24] means we can shut down all the processes
[03:26] and we can continue where we left off
[03:30] so it's basically taking this entire
[03:32] chunk of of state of the universe and
[03:35] pushing it to a persistent database
[03:37] you used a word I was really happy you
[03:39] used Foundation uh the way I the way I
[03:42] see Precision ended streaming it's a new
[03:44] foundation for everything that comes
[03:46] from Star Citizen comes to Star Citizen
[03:49] from this point forward uh when when
[03:51] we've had we've had to discuss
[03:53] internally and I've explained to other
[03:55] folks you know what this is in 318 the
[03:57] best analogy I found is it's if you
[04:00] imagine Star Citizen All-Star citizen is
[04:02] a giant skyscraper it's like lifting the
[04:04] skyscraper up 150 feet off the ground
[04:07] digging out the old Foundation pouring
[04:10] in a brand new foundation and then
[04:12] dropping the building back on top of it
[04:14] and trying desperately not to spill and
[04:17] knock everything over that's inside the
[04:18] building while you do it I'm making sure
[04:20] the doors still work yeah exactly and
[04:22] it's that's a very good analogy because
[04:25] if you look at it the entity system and
[04:28] the the scene graph that's the
[04:30] foundation of the engine right so
[04:32] everything everything uses it touches
[04:34] everything every every single game team
[04:36] everything a a Game feature is touched
[04:39] by this change so it's it is a very good
[04:42] like a picture you're drawing there so
[04:44] and uh to address some expectations that
[04:48] the community may have had I we see we
[04:50] see the different streaming talk shows
[04:52] and the threads on spectrum and stuff
[04:54] like this uh
[04:56] while persistent energy streaming will
[04:58] be again the thing that so many future
[05:00] systems and new systems will be built on
[05:02] for 318 the focus of this is mostly in
[05:07] maintaining what came before converting
[05:10] what came before and ensuring it works
[05:13] with this new Foundation
[05:15] yes pretty much okay like right now
[05:17] right now I know one of the questions if
[05:20] you want to jump a little bit into those
[05:22] is uh when we talk about PS we talk
[05:24] about the server and we talk about the
[05:27] player chart I think that was one one
[05:29] question and people asking okay what's
[05:31] the difference between a server and a
[05:32] shot
[05:34] um and for now for this very first
[05:36] version there is not a difference
[05:39] between both because we still run one
[05:41] server per shot
[05:43] um we separate those two words because
[05:46] eventually the shot will be much larger
[05:49] than just one server once we get to
[05:51] server meshing which will be in later
[05:53] iterations that's when we have multiple
[05:55] servers per shot but in this very first
[05:57] iteration as you said we basically we we
[06:01] took the foundation of the engine and we
[06:03] replaced it with this new persistent
[06:05] entity database we try to get add parvis
[06:09] what's there right so that means we
[06:10] basically take all the tech we already
[06:13] have one server per shot um and we we
[06:16] replace that with special entity stream
[06:19] uh hungola in the chat says drink every
[06:22] time someone says eventually don't do
[06:24] that
[06:26] if it's coffee you're good
[06:30] exactly what you drink right stay
[06:32] hydrated if you drink water then yeah
[06:34] now as just to add to what Paul was
[06:37] saying about the 318 version of PS
[06:40] um you know being on a single server and
[06:44] persisting the state of this right the
[06:46] the I think the most major effect that
[06:48] we'll see from that is over time on a
[06:52] given server because uh items will
[06:54] persist now right as a typically right
[06:57] now when a server restarts
[06:59] the the state of the world is sort of
[07:02] lost other than your your ships and your
[07:04] character which actually live outside of
[07:06] that in the current version
[07:08] when a server restarts everything else
[07:10] is gone NPCs reset to their initial
[07:13] spawn positions you know doors reset uh
[07:16] you know the entire thing starts back up
[07:18] to the designed initial state of the of
[07:21] the game world uh so that's that's true
[07:23] after a server crash that's true on a
[07:25] brand new server that we're adding uh
[07:27] and so this sort of Auto cleanup servers
[07:30] also restart over time like with you
[07:33] know some of them sometimes don't have
[07:34] players left on them and then we restart
[07:35] them to recycle their memory things like
[07:38] this currently the state of these
[07:40] servers are are lost right so what that
[07:42] means is
[07:43] the effect in in 318 will be that over
[07:46] time you're you'll start seeing things
[07:48] that persist across restarts right and
[07:51] then so an old server will have a lot of
[07:55] modifications right because all of that
[07:57] stuff doesn't get necessarily cleaned up
[07:59] by a restart I would I would I would add
[08:02] though though with a person streaming
[08:04] and our new shot database but also the
[08:08] global database there's uh the added
[08:11] benefit that every items you take from
[08:13] your shot and put in your inventories
[08:15] they persist in the exact State you take
[08:18] them out of the shot so previously your
[08:21] your persistent database was just an
[08:23] external database it was very limited
[08:25] just a list of items basically this
[08:27] person streaming when you have a ship
[08:30] and you load stuff into that chip and
[08:33] you put that ship into your inventory
[08:35] because you landed on a landing Zone and
[08:37] it gets stowed into your lending Zone
[08:39] inventory if you play on the next day
[08:41] and you take that chip out of that
[08:43] inventory it actually comes in the full
[08:45] persistent State as we stowed it from
[08:48] the from the shot so there will be there
[08:50] will be uh things which which you will
[08:53] notice which obviously weren't possible
[08:54] without persistent entity stream but
[08:57] again to stress on on Jared's Point like
[08:59] right now we did all this foundational
[09:01] work and now gamecode teams need to
[09:03] adjust to those changes and there's a
[09:06] lot of good stuff they can do now
[09:09] um but we just integrated our big chunk
[09:11] of work into our main branch
[09:14] um
[09:14] a couple months ago and now game code
[09:17] teams just start to adding those
[09:19] features so you can't expect just
[09:21] because we have the core foundational
[09:23] Tech ready and pushed to to our main
[09:26] branch that all the game code teams
[09:28] actually like take full full advantage
[09:31] of all the new cool features um they can
[09:33] do with it and we will go over those
[09:35] points while we go over the questions I
[09:38] would say so let's jump into we
[09:40] basically just did we basically just
[09:42] back doored into our first question
[09:43] which is what is the difference between
[09:44] a server and A Shard eventually it'll be
[09:47] very different but for the time being it
[09:49] is it is kind of a one-one thing uh you
[09:52] know for 318 and and then until server
[09:55] Mission comes in uh but before server
[09:58] meshing which is ultimately where this
[10:00] New Foundation is taking us uh is uh the
[10:04] question is uh since PES is per server
[10:07] then how do we get back onto the same
[10:10] server that our items are on
[10:12] well with the very very so the the first
[10:15] part of the question is before server
[10:18] matching uh is PS per server and as I
[10:21] kind of touched on the on the previous
[10:22] answer
[10:24] um yes persistent anti-streaming is per
[10:26] server but as you can take items out of
[10:30] the server database into your Global
[10:32] database and we made sure it's the same
[10:34] exact database the same data structures
[10:37] there will be more persistence so you
[10:39] can take persistence from one server to
[10:41] another server by putting items into
[10:43] your inventory and then taking them out
[10:45] of the inventory into a new into a new
[10:47] server
[10:49] um your second question is how do we get
[10:52] back onto the same server
[10:54] um for 3.18 we won't address any
[10:58] matchmaking changes and it again comes
[11:01] back to we want to get at pubs what we
[11:03] have so far before we start to to adding
[11:05] the new features also matchmaking
[11:06] changes will be become a part of our
[11:10] server meshing uh work which we will
[11:12] start obviously right after personality
[11:14] streaming hits so for for the very first
[11:17] version of uh personal entity streaming
[11:19] you will just use the same matchmaking
[11:21] logic you have right now that means if
[11:23] you start up your client you get
[11:25] randomly matched to uh to a server
[11:28] warshot I can use those terms
[11:30] interchangeable at the moment because
[11:32] they are pretty much the same thing
[11:33] obviously it's the same as right now you
[11:36] can play with your friends so you would
[11:37] join the same instance if you crash out
[11:40] of a game we reserve the slot of your
[11:43] current chart so that means if you crash
[11:44] out
[11:45] you will be able to have I think it's 10
[11:47] minutes
[11:49] um to lock back in and get connected to
[11:52] that chart so you can recover anything
[11:54] and as I said earlier uh all items uh
[11:59] which you take into your inventory uh
[12:02] that's what you what you will keep with
[12:04] you which you can bring to any chart so
[12:06] that is your way to basically make sure
[12:07] uh the stuff you want to really like
[12:10] keep
[12:11] um you can keep by just putting it into
[12:13] your inventories
[12:15] big differences between what stowed and
[12:17] what's unstowed yes so let's talk some
[12:20] we have a few more questions that are in
[12:22] that vein the the stowing things versus
[12:26] unstowing uh does PES allow entities to
[12:31] persist across all servers or does it
[12:33] only persist on the server that the item
[12:36] was originally spawned on so this is
[12:38] almost certainly you already answered
[12:39] the question you store it you take it
[12:40] with you this is about if I dump a can
[12:44] what happens I can't does it get
[12:45] replicated everywhere else is it how
[12:48] does this work
[12:49] so if you uh so depending on the type of
[12:52] item and of course if if there's legal
[12:55] ownership attached to it right you can
[12:57] stow it and keep it and bring it with
[12:59] you across shards right so that's the
[13:00] first thing but for items even that you
[13:03] legally own that you leave let's say I
[13:06] have a gun that I already legally own
[13:08] and I drop it somewhere in Port alisar
[13:12] and then I stopped playing and then I
[13:15] come back later and I get match made
[13:16] into another Shard that gun is still in
[13:18] the other chart it's it persists per
[13:21] shard uh so everything that's in the
[13:23] game world so unstowed items persist in
[13:26] each server that they're on right that's
[13:29] why there's a mechanism like Insurance
[13:30] to get stuff back if something happens
[13:33] that's what there's mechanism like
[13:34] stowing so you can take them across
[13:36] servers
[13:37] um obviously
[13:39] uh that's a bit of a downer in in
[13:41] because we have a lot of shards right uh
[13:44] for the moment but the the intent and
[13:46] the goal from this foundational work is
[13:49] that we're gonna get to our very large
[13:51] shards and so uh and and with the
[13:55] matchmaking changes that Paul entered on
[13:58] related to matchmaking then we'll be
[13:59] able to have Shard affinity and so the
[14:02] gun that you left on Shard X your your
[14:04] chance of getting back on chart X will
[14:06] be extremely high but for the moment
[14:08] it's not the case so everything that's
[14:09] unstowed in the game World lives in that
[14:11] server
[14:13] um uh until it's reaped or until it's
[14:15] destroyed or until it's cleaned up or
[14:17] what there's many we're going to talk
[14:19] about a lot of reasons why stuff would
[14:20] go away from A Shard but yeah I think
[14:23] it's important to I think we're going to
[14:25] make this reminder periodically as I see
[14:27] the chat and everything uh shards and
[14:29] servers will be
[14:32] different things they are they are
[14:34] different things for 3 18.
[14:37] they are it is one Shard per one server
[14:41] so when we use those terms
[14:43] interchangeably like that we are
[14:45] speaking about the state of our very
[14:47] next patch 318 so we're gonna one of the
[14:51] we talked about this before the show one
[14:52] of the confusing aspects of this
[14:54] conversation and indeed why we're having
[14:56] another hour-long conversation after the
[14:58] 20 minute thing I've been wanted I did
[15:00] before is because we we have to discuss
[15:03] both how this will be 319 320 321 4.0
[15:09] whatever the numbers on don't read into
[15:12] the numbers I'm just saying numbers
[15:13] people uh how it will be in the future
[15:17] versus how it will be in this very first
[15:20] patch that includes it so so we're we're
[15:22] going to bounce back and forth between
[15:25] Talk of the future and where it's going
[15:27] and talk of what this next first
[15:30] iteration is so uh I
[15:34] this is one of those things we're going
[15:35] to have to rely on our wonderful
[15:37] Community content creators out there to
[15:39] follow the discussion follow the threads
[15:41] and
[15:43] we're gonna bet we're gonna be bouncing
[15:45] back and forth that's the only way to
[15:46] discuss this at this point
[15:48] um so uh
[15:51] so yeah so if I it will that coffee cup
[15:54] or gun still be there for others to find
[15:56] when the player placing it isn't online
[15:58] so that thing that you don't own when I
[16:01] log off does it disappear with me or
[16:02] does it persist there and for how long
[16:06] it stock cleanup
[16:09] um well as as we hinted earlier
[16:12] um if you take a coffee cup and you
[16:14] unstow it or you drop it on the floor in
[16:17] a shot it stays on that chart and it
[16:20] stays there as long as we will talk
[16:23] about the the cleanup process a bit
[16:25] later but it will stay there basically
[16:27] forever and everyone can go there and
[16:29] pick it up
[16:30] foreign
[16:41] forever yeah that was one one confusion
[16:44] I saw throughout the questions was the
[16:46] like uh it's important to notice that
[16:49] it's not like you log into the game
[16:51] world and all of the items you've placed
[16:53] in the world are now suddenly overlaid
[16:55] in it no when you put something in one
[16:58] world one Shard one server it's in that
[17:01] server and and so whether you're online
[17:03] or not at that moment right so the so
[17:06] yeah that's the conf there's no if I log
[17:09] off is my coffee cup I placed on Clio
[17:12] still there yes doesn't matter if you're
[17:15] online or not for that specific uh for
[17:17] for items place in the game room uh I
[17:20] think the the only the only expectation
[17:22] the only uh exception to that is that
[17:26] when you log out obviously your player
[17:28] gets stowed back into into your player
[17:30] inventory and if you do to a ship
[17:32] padlock out your ship gets stowed
[17:34] together with you into your ship into
[17:37] your player inventory and that includes
[17:39] items that are in the ship as well it's
[17:42] always yes if we talk about stowing and
[17:44] unstowing it's always the entire uh the
[17:47] entire current state of that object
[17:49] including everything which is you know I
[17:52] talked about the scene graph and the
[17:54] hierarchy earlier if you look at the
[17:56] ship and all items placed inside the
[17:58] ship you can imagine that it's like a
[18:01] tree the hierarchical tree of items and
[18:04] if you take the the top the root of the
[18:07] tree and we put it into an inventory
[18:09] everything which is under it follows it
[18:12] so again looking at the chat right now
[18:14] uh we're gonna we're gonna need to
[18:16] reiterate I think we need to say this a
[18:18] different way uh replication
[18:21] yes is there replication in 318 if if I
[18:25] throw something on the ground on server
[18:28] 14
[18:30] you know it does it just stay on server
[18:32] 14 and only 14 and only exists on 14
[18:35] until it's eventually cleaned up it does
[18:37] not replicate to other servers it does
[18:39] not replicate to other scores at the
[18:41] moment the only
[18:43] the only way you can bring something so
[18:46] the first the first fundamental uh point
[18:49] you have to understand is every single
[18:51] item can only exist once right so you
[18:54] can't have a copy of the same exact
[18:56] instance of an item in multiple shots if
[18:59] you have your ship and you bring it to
[19:01] Shard a it is in chart a that chip can't
[19:04] exist in a different chart and that's a
[19:06] good reason for it if it would exist in
[19:08] multiple charts what happen if in one
[19:10] shot someone shoots the left wing off in
[19:13] the other shot someone shoots the right
[19:14] wing off right we can't we can't allow
[19:16] that to happen so what that means is if
[19:19] that ship is in a shot it's locked to
[19:21] the shot it's it it is just part of that
[19:24] instance if you take that chip and bring
[19:27] it into your Global inventory that's
[19:29] then your way to take this ship and
[19:32] bring it with you to a different shot so
[19:34] every every every shot in in this very
[19:37] first iteration is its own isolated
[19:40] instance basically and then drawing that
[19:42] line
[19:43] forward to server meshing server meshing
[19:46] isn't about replication either server
[19:48] meshing is about bringing all of these
[19:51] things to all these uh servers together
[19:53] in a mesh and it is it transitions it
[19:58] doesn't work I mean if you talk about
[20:00] replication I mean obviously if I talk
[20:02] about replication I probably have a
[20:04] different thing in my head because in
[20:06] server meshing we do replicate objects
[20:08] between different servers because
[20:10] multiple servers will eventually
[20:12] simulate the same shot right and
[20:15] obviously in that case you might have
[20:17] two servers and they replicate the same
[20:19] object between each other for uh for
[20:23] simulation reasons right so we don't be
[20:25] like it could be that server a simulates
[20:27] one area and so a b simulates another
[20:29] area there's overlap in that overlap you
[20:32] have objects in the Nova area replicated
[20:34] to both servers right that's uh that's
[20:38] why for me replication is a bit
[20:39] different word but you can see a shot
[20:41] again as it's Unique individual instance
[20:44] there's no cross shot replication plant
[20:47] we do once we talk about player bases
[20:51] and so on we do have discussions with
[20:53] design right now how we can do that for
[20:55] like if if a player builds a base on a
[20:58] planet for example uh we kind of want to
[21:00] show that on all charts
[21:03] um not just on the one shot the players
[21:04] in but those discussion discussions are
[21:07] still happening
[21:08] I'm going to skip ahead on our list here
[21:10] because the next couple questions are
[21:12] all kind of Hit the same point but uh so
[21:15] let's talk about a very typical scenario
[21:17] that happens we're a game that's still
[21:20] in development uh
[21:22] you land on ship on a planet
[21:24] and the server crashes at 30k uh if this
[21:29] if you load back into a new server how
[21:32] does the player find their ship at that
[21:35] I find their Old Ship at this point
[21:36] since it wasn't stowed properly it was
[21:38] landed out
[21:41] okay
[21:42] um I don't know been well if you want to
[21:44] take that yeah yeah sure so first of all
[21:46] there's no 30 kids never happened
[21:51] so uh using opinions expressed by Benoit
[21:54] buses
[21:57] right so uh the so in the case of so you
[22:02] have a let's start from the beginning
[22:03] you uh go to the Aesop terminal and you
[22:05] unstow a ship so the ship lives is first
[22:08] in your in your location inventory and
[22:10] it's in the global DB
[22:12] you uh
[22:14] um request the ship shows up on the
[22:16] lending bed that's that actually behind
[22:18] the scenes unstows the ship so it moves
[22:20] from the global database to The Shard
[22:22] now you can you can now it's being
[22:24] actively simulated by a game server and
[22:26] so there's thousands of updates on it
[22:28] right uh to keep it up to date in the DB
[22:31] uh you go in it you start flying it out
[22:34] um you put Cargo in it you drop some
[22:36] items in it whatever
[22:38] then
[22:39] uh 30k happens right server ran out of
[22:42] memory or you know something like this
[22:43] happens uh now when you come back to the
[22:47] game the that ship is still in that
[22:50] Shard all right it's it's still
[22:53] in the persisted database of Shard 24
[22:56] for example and so if you come back and
[22:59] your match made most likely going to be
[23:01] match made on another server because
[23:03] chart 24 is not available at the time
[23:05] especially if you log in rapidly back in
[23:09] when you enter your new Shard that ship
[23:12] will not be available for sure right so
[23:15] but it will be available for insurance
[23:16] claims
[23:18] uh what we are looking at at this moment
[23:22] for this problem because we know that's
[23:24] a problem obviously this is not cool
[23:26] right it is that when a server crashes
[23:31] well we have a dedicated recovery
[23:33] mechanism that we're actually putting in
[23:35] place right this moment we're working
[23:37] actively on this right now
[23:39] um throughout our current stability
[23:41] testing which will Auto Stow back the
[23:44] ship into your location inventory and so
[23:47] what that means is uh we don't want you
[23:50] to be stuck with your ship stuck in a
[23:52] Shard that's no longer available right
[23:53] you were actively playing with that ship
[23:55] it's got cargo and we want you to be
[23:57] able to grab it and so in the case of a
[24:00] 30k
[24:01] your your ship would get out of stone
[24:03] same as your player right because
[24:05] there's no difference between a ship and
[24:07] a player in this instance right so uh
[24:10] that's the goal that we have for 318 is
[24:12] to make sure that that case doesn't
[24:13] happen so that in the case of a 30k your
[24:16] ship is just stowed back in in the exact
[24:18] state it was in at the moment of the
[24:19] crash
[24:21] um and so uh you keep your stuff right
[24:23] that's the we don't want you to be you
[24:25] know stuck with a ship that's
[24:27] unavailable and then you need to find
[24:28] The Shard again and it's in you know
[24:30] that's like a guessing game so we don't
[24:32] want you to be stuck in that exactly I
[24:34] do want to add though that eventually
[24:35] and that's a great feature of
[24:37] Personality streaming if that server
[24:39] 30ks
[24:41] um with specificity stream before
[24:43] processing entity streaming that means
[24:45] that this whole world would be dead
[24:47] because the memory is gone everything is
[24:49] gone with persistently streaming however
[24:51] the shot and the state of the shot still
[24:54] exist right the server crashed because
[24:55] it ran out of memory or there was a game
[24:57] code bug or whatever
[24:59] um it's always game code Box by the way
[25:00] yes it's never the core attack
[25:03] um anyways when that happens we can
[25:06] actually start up a new server and it
[25:09] can load back that chart
[25:10] and then continue simulation for exactly
[25:13] where we left off again for 3.18 because
[25:16] we don't want to address matchmaking
[25:18] just yet
[25:20] um we will do what Ben Rogers said where
[25:22] we try to take locate all the ships and
[25:24] we Stow them into your location
[25:25] inventory so you don't lose your ship
[25:28] and the progress on that chip however
[25:30] the ultimate goal is that when a sharp
[25:34] server crashes
[25:36] um that we restart a new server for the
[25:38] chart and that matchmaking will allow
[25:41] your player to reconnect to that chart
[25:43] and then matchmaking will be able to do
[25:45] to resolve the slot for that exact chart
[25:47] so when you start ultimately or not in
[25:51] in a next iteration you will be able to
[25:54] start your client and there will be a
[25:56] little dialogue which is telling you do
[25:58] you want to wait for your old chart to
[26:00] come back online because obviously it
[26:01] takes a couple of minutes before shot is
[26:04] back online and then you will be able to
[26:06] join back to exactly where we left off
[26:08] and then eventually the final ago once
[26:12] we have a complete the the server
[26:15] matching and the replication layer and
[26:18] the Gateway layers all separated at that
[26:21] point when a server 30ks you won't even
[26:24] notice you will still stay connected and
[26:26] we start a new server or we have a fleet
[26:28] of servers already running which can
[26:30] take over that work right but that's
[26:31] obviously far in the future so what we
[26:33] what what we're saying is in this very
[26:35] first version to be on Powers what we
[26:37] have right now server crashes we take
[26:40] player and we take the ships put them
[26:42] all into your inventory so you don't
[26:43] lose progression and you do and you will
[26:46] get exact persistent State back from the
[26:49] ship at the moment the server crash so
[26:51] you don't lose anything
[26:52] in the next version we then try to re
[26:58] uh revive that chart and let you let
[27:01] matchmaking allow you to come back to
[27:03] that chart and then ultimately in the in
[27:05] the final version it should be all
[27:07] almost transparent to the player so what
[27:10] you're saying is three versions and then
[27:11] we're done
[27:14] it's always just three words right yeah
[27:16] we're always three versions away
[27:18] um so uh this is a really a great
[27:21] example chat went through a a roller
[27:24] coaster of emotions there uh here
[27:26] hearing the problem and and and and
[27:28] hearing the struggle and then oh no and
[27:31] then getting to what we're doing just to
[27:33] solving like oh yeah you know it was
[27:35] like fail and save almost this is a good
[27:37] example of what the work for 318 is uh
[27:41] 318 is not about uh with regards to
[27:44] percentage stream they're still
[27:45] salvaging and the and the PTV race track
[27:48] and New Rivers and there's all those new
[27:50] things but for p-e-s-p-s is not about
[27:53] unlocking new you know developments for
[27:56] for 318 that will be 19 and so forth and
[27:59] so forth and so on this is about
[28:02] discovering all the things that break
[28:04] because of this foundational change and
[28:07] then developing new tools and new
[28:09] methodologies like this Auto stove for
[28:12] the player and the [ __ ] that you talked
[28:13] about to get us back to what we had
[28:16] before a a an experience similar to what
[28:19] we had before with this brand new
[28:21] Foundation that sits underneath
[28:24] um you did say something else in there
[28:26] that I want to follow up on right now
[28:28] you say because we don't want to do
[28:29] matchmaking right now
[28:31] uh
[28:33] why
[28:35] well there's always there's always the
[28:38] resource constraint right so the same
[28:41] team who would probably work on
[28:43] matchmaking is currently working on the
[28:45] entity graph and it's also about risk if
[28:49] we go and and
[28:52] quite Frank 3.18 is a giant risk already
[28:55] because so much new technology right we
[28:58] have we're replacing a database which we
[29:01] have built over the last five years
[29:04] um and it it came to its limits in the
[29:06] last couple of patches as we all I think
[29:09] experienced
[29:10] um but that is like five years of
[29:12] development which you're now replacing
[29:13] with complete brand new tech we have I
[29:16] think it's at at that point probably
[29:19] eight different like kinds of new
[29:22] Services which we deploying
[29:24] um we also at the same time switched our
[29:28] underlying uh back end
[29:30] communication Tech to a new framework
[29:33] which we already battle testing in life
[29:36] right now but like a lot of new services
[29:38] using that new tech so there's a lot of
[29:40] like moving parts coming together so
[29:42] every piece we had on top of that adds
[29:45] more risk right so now we also need to
[29:46] change matchmaking now we need to change
[29:48] like all those things and it obviously
[29:52] makes me makes the release way less
[29:54] manageable right so what we do is we try
[29:56] to reduce the risk by let's obviously
[29:59] the the core needs to come as one piece
[30:02] because there's no way to just
[30:05] introduce the replication layer without
[30:07] the database for example we need the the
[30:09] minimum set pushed together but we can't
[30:11] like we try to reduce okay what can we
[30:13] not do right now let's do that in the
[30:16] next iteration otherwise it will be just
[30:19] a burning pile of of issues we have to
[30:23] walk through and even then I I think it
[30:27] will be it will be a very rough start to
[30:29] get 3.8 in life and just because it is
[30:32] so much new technology and every time
[30:34] you you take uh something we build
[30:37] in-house which is already very
[30:39] complicated because it has
[30:41] thousands of different moving parts and
[30:43] then we take that into the cloud and
[30:45] open it up for whatever ten thousand
[30:48] twenty thousand fifty thousand players
[30:50] that's always where you get another
[30:52] chunk of new things we haven't
[30:54] anticipated like all all to manage all
[30:57] of that it's already a giant piece so
[30:59] everything we can put off for later
[31:02] scope down exactly is is in my my book's
[31:06] a good thing and I think also for you
[31:08] players we don't want to like absolutely
[31:10] ruin your experience
[31:12] um I hope we won't
[31:14] um
[31:15] so I think even though the feature set
[31:17] might be limited on this first version
[31:20] ultimately you guys will benefit from it
[31:22] because otherwise you will just get like
[31:25] a complete unstable patch and then you
[31:28] you have to suffer through it for like
[31:29] one two three patches uh until until we
[31:32] get get live and also helps us obviously
[31:35] to bring it faster into your hands right
[31:37] as you know we we rely so heavy on you
[31:41] guys to play our game and be our beta
[31:44] tester which which is Amazing by the way
[31:46] um but in order to to to to to benefit
[31:50] from that we need to push things out as
[31:53] they come online and not just wait until
[31:56] it's fully perfect and fully polished
[31:58] and then give it to you so we we won't
[32:01] give you iterations as fast as we can
[32:04] but that sometimes means that it's maybe
[32:06] a step back or it's it's not fully
[32:09] feature complete just yet I mean you
[32:11] guys all been in the game for a bit so
[32:13] so we're just saying is that we're
[32:15] already juggling puppies lightsabers and
[32:18] chainsaws to get through to 18 we don't
[32:20] need to add a giraffe into it
[32:23] yes that's exactly that's a pretty good
[32:26] not my best analogy
[32:28] um I do want to detour a little bit and
[32:30] talk about chat uh uh Chad's like hey he
[32:34] didn't mention cargo refactor when he
[32:36] was listing off 318 things I didn't
[32:37] mention a lot of things in 318 but I
[32:40] will remind folks who've read who are
[32:42] regular readers of our monthly report
[32:43] and who are regular Watchers of ISC and
[32:46] scl the cargo refactor is necessary for
[32:50] Salvage to work uh if you watch the
[32:53] whole scraping and vulture segments in
[32:55] last week's episode The bit where the
[32:57] cargo was physicalized in the back of
[32:59] the ship and you had to move the boxes
[33:00] that was the cargo refactor so remember
[33:03] as uh we the roadmap Roundup announced
[33:06] yesterday the day before I don't know
[33:08] what day it is now uh 318 is not
[33:10] scheduled to come out until early
[33:12] November mid-november something around
[33:14] that I don't remember what it says so we
[33:16] have time to show the cargo refactor in
[33:19] ISC so we still got weeks this quarter
[33:21] and then we got a couple weeks next
[33:22] quarter before the patch comes out so uh
[33:25] as of this moment
[33:27] with the only constant in game
[33:28] development being changed but as of this
[33:31] moment cargo refactor is still very much
[33:32] in 318 it's still very much expected in
[33:35] 318 it is necessary to have Salvage and
[33:38] Hull scraping and the vulture so
[33:41] yes and on top of that I would also it
[33:43] it's not not just for Savages also as I
[33:46] said this persistent anti-streaming we
[33:48] replacing the whole Foundation a lot of
[33:50] game systems actually need some form of
[33:53] refactor to work with that it's not just
[33:55] cargo but part of why the cargo team
[33:57] needs to do their reflectors also to
[33:59] support personal entity streaming but
[34:01] other things like the insurance system
[34:03] the VMA the character customizer
[34:06] whatever the scanning transaction
[34:09] systems
[34:11] even the trended system all those things
[34:15] they needed changes for personality
[34:18] streaming so there's a lot of like those
[34:19] teams they like it would be awesome if
[34:22] they could always just work on new
[34:23] features but especially with large
[34:26] foundational changes like this they need
[34:29] to go back and just adjust what we
[34:31] already have which is also again
[34:33] which is why there's not just cats and
[34:36] dogs and chainsaws that's actually 20
[34:39] other things in that mix already so
[34:43] double slasher says Benoit is already
[34:45] laughing nervously that's just how we
[34:46] laugh
[34:48] yeah that is true
[34:51] um
[34:52] uh I'm gonna jump ahead in our list
[34:54] again to to a question that's come up
[34:56] quite a bit in the chat make sure we get
[34:57] them all in since we're already in the
[34:59] back half of our show here
[35:01] um
[35:02] let's say
[35:04] I'm engaged in
[35:06] Furious one-on-one combat with another
[35:09] player uh we're we're we're we're we're
[35:11] we're we're in our furball and I'm about
[35:16] to lose and I decide rather than to take
[35:19] my death I choose to alt f4 and just
[35:23] quit the client uh what does PES do for
[35:27] this situation how does PES handle this
[35:29] situation if at all
[35:31] first of all that's a bastard move right
[35:34] but
[35:36] um
[35:37] so uh not entirely related to PES I
[35:41] understand the mental link right between
[35:43] like persistence and spawn points and
[35:46] you know out the flooring and stuff
[35:49] um there already have been some changes
[35:51] in the game related to quote unquote
[35:53] combat logging which is basically
[35:55] outdooring while in combat to save your
[35:57] FPS items uh already the ships stay in
[36:02] the game World in 317 uh and then you
[36:05] can you know they basically get
[36:06] destroyed uh on basically that move sort
[36:11] of allows you to save your your weapons
[36:13] and armor right where you respawn
[36:14] outside so PS is not gonna solve that
[36:17] because that's driven by game rules uh
[36:20] so even though we have persistence
[36:22] that's the thing I wanted to stress out
[36:24] even though entities persist the game
[36:26] rules and the game code can still decide
[36:28] what to do they can override any values
[36:31] right so like if you think about
[36:33] respawning or things like that same
[36:34] thing for logging so
[36:36] for combat logging more specifically
[36:39] uh the which is a problem obviously
[36:42] right and we it's something that we're
[36:44] gonna want to tackle at some point but
[36:46] it's the the real fix for that is not a
[36:48] new persistent system if if PES solved
[36:51] all the world problems that would be
[36:52] awesome but it's not the case uh the the
[36:55] real solution is a proper logout timer
[36:58] where if you decide to alt the four or
[37:03] to kill your client or whatever you stay
[37:06] in the game world for that lockout timer
[37:09] which will allow your assailants to
[37:11] basically finish the job if they have to
[37:14] right and that makes the game fair most
[37:16] other games also do the same thing so
[37:18] that's where we're that's the idea that
[37:19] we have on the table now but obviously
[37:21] we're not tackling this specifically
[37:23] with PS as uh even though there is
[37:25] persistence it's not going to affect
[37:27] combat logging specifically it's a game
[37:29] design task not a PES task yeah pretty
[37:31] much yes I would add though though
[37:33] because of PS the log in and log out
[37:36] code has to change slightly it gives the
[37:39] game game the game code teams actually
[37:41] the opportunity to address this issue
[37:43] and as when was said we're currently
[37:44] discussing some of the login logout flow
[37:48] and as Ben was said adding a proper
[37:51] logout timer to that would be a would be
[37:54] a good opportunity right now to do
[37:55] another question I also saw ask a lot is
[38:00] when I log out with persistent entity
[38:02] streaming will I log back in where I
[38:05] left off right
[38:06] and again to our Point let's go get back
[38:10] to feature parity
[38:11] um for 3.18 we will keep our current
[38:15] lockout system so when you log out and
[38:17] you log back in you look back at your
[38:19] last Landing Zone location however
[38:22] um PS does
[38:24] enable all of that cool stuff so with PS
[38:27] it would be very trivial for game code
[38:31] to change their systems to allow you to
[38:34] lock exactly back where you where you
[38:36] left off right however it always comes
[38:39] back to how much risk we want to add for
[38:42] 3.18 and also
[38:44] the devil is always in the details if we
[38:47] want to have game code now to complete
[38:49] the change okay you log back in where
[38:52] you log back out and that doesn't mean
[38:54] okay we have the tech right now so we
[38:55] can just enable this feature that means
[38:57] a lot of design work like how does it
[38:59] work for example if I am suffocating and
[39:02] I log out I think the design wants you
[39:04] for example then to run a timer and
[39:06] eventually when you log back in you
[39:08] would be dead because you were
[39:10] suffocating at that moment so you want
[39:12] to spawn back in hospital and so on so
[39:14] there's a lot of design a consideration
[39:16] coming into play and then also game code
[39:19] systems which need to handle that
[39:20] properly for example what if I log out
[39:23] on a planet and then on the next day I
[39:26] log back in and that exact position is
[39:28] another ship Blended at the moment right
[39:30] so all right game code would need to
[39:31] probably do some position resolving and
[39:34] all those kind of things so in order to
[39:36] not tackle that right now
[39:37] um we would just keep the login logout
[39:39] flow how it is um however as I said with
[39:42] persistent entity streaming
[39:45] game code teams now have all the tools
[39:47] at their hands to fully persist whatever
[39:50] they want at this at the state and and
[39:53] restore at exactly the state uh how they
[39:56] left it goes back to what we said at the
[39:58] beginning this is a new Foundation a new
[40:00] set of tools and abilities that then it
[40:02] gets handed to every other designer and
[40:05] programmer in the in the game and then
[40:08] they can begin to address the things
[40:11] they've always wanted to address but the
[40:13] old Foundation couldn't let them or even
[40:16] conceive entirely new ideas based on
[40:18] these this new 100 yes and and that's
[40:21] also a very good point you're bringing
[40:22] up there I mean we we as a company we
[40:24] are a very large company with different
[40:26] teams work on the different features and
[40:28] this is an entity streaming uh when we
[40:31] did this as our as our core Strike Team
[40:34] and work on the core foundational Tech a
[40:36] lot of like of the other game teams they
[40:38] probably don't really grasp yet what
[40:39] they can actually do with it right so
[40:41] now that we've brought our Tech into the
[40:44] main line and the game now starts using
[40:47] using new technology I think that's the
[40:49] moment where game teams and designers
[40:50] really see how it works and how they can
[40:52] interact with it and that's when exactly
[40:54] how you you said hey Jared that's when
[40:57] new ideas spark and okay how can we
[41:00] exploit this new tech how can we make
[41:01] really cool features and oh now we can
[41:03] do the thing which we couldn't do three
[41:05] years ago let's re-wam power login
[41:08] logout works but all this stuff will
[41:10] just come online now as the the
[41:13] foundational Tech is in the game I think
[41:15] there's also an interesting element of
[41:17] surprise I think that we're expecting
[41:20] already just uh you know being in the
[41:22] main line for a little bit where uh the
[41:25] you know the entity system has this
[41:27] concept of serialized variable I'm sure
[41:28] we've talked about this in the past
[41:30] right which are basically variables that
[41:32] are replicated when we say replicated
[41:34] it's between the server and the client
[41:38] um now these things did not persist for
[41:40] right so everything that needed to be
[41:42] persisted needed to be handled as a
[41:45] persistent item whatever PS makes all of
[41:49] those serialized variables persistent
[41:51] and so that means that any game
[41:53] component that was made using serialized
[41:55] verbals suddenly has persistence so I'm
[41:58] expecting uh some surprises right so
[42:02] things that oh oh [ __ ] now this persists
[42:04] wow this is cool uh for example wear and
[42:07] tear on your armor or things like that
[42:09] you know like uh you know are are now
[42:12] gonna just stick right because before
[42:14] they were lost every respawn now these
[42:16] things can actually persist for real
[42:17] exactly it's it's I want to follow up on
[42:20] some things before we move on
[42:22] um obviously with regards to the with
[42:24] regards to the log out timer uh anybody
[42:27] any person that's ever worked on any
[42:29] online game knows the difficulty of
[42:33] managing a log out timer and stuff that
[42:36] that
[42:37] you know punishes the people who alt f4
[42:40] and and and try to abuse the system
[42:43] without also punishing folks who have
[42:46] legitimate client crashes or internet
[42:48] outage and whatever that that balances
[42:50] is one of the forever challenges of
[42:52] every online game and Star Citizen is no
[42:55] more immune to it than anything else so
[42:57] that is one of those considerations that
[42:59] will obviously be debated and talked
[43:01] about and discussed and for Ad nauseam
[43:05] until we come up with whatever our
[43:07] solution is and I'd no doubt we'll look
[43:09] at what other online games are doing and
[43:10] stuff like that because you don't have
[43:12] to reinvent the wheel if there's a
[43:13] solution out there already
[43:15] um and then
[43:17] I do want to add on a personal note
[43:21] um folks will often it's easy to assume
[43:24] that we do these shows just for the
[43:26] backers that when we produce an ISC or
[43:28] an SEL it's just for the people who
[43:30] support the game but one of the weird
[43:32] kind of
[43:34] Hidden Truths that have emerged over the
[43:36] years is that it's also a great way to
[43:38] inform your work base a lot of the
[43:41] people who work for cig learn about what
[43:43] other teams are doing and how they're
[43:45] progressing and get ideas for oh they
[43:48] got that you know I can do it over here
[43:49] I already had somebody one I had
[43:51] somebody message me and say the camper
[43:53] chair that they saw Lewis making one
[43:55] episode is the exact thing they need for
[43:56] this other thing they were considering
[43:58] they didn't know it existed until they
[43:59] saw it on SEL one of the reasons we
[44:02] decided to do this show was because a
[44:05] lot of these misconceptions and
[44:06] misunderstandings and stuff that we were
[44:08] seeing within the community also existed
[44:11] within our own teams oh yeah so it's
[44:14] it's you know it's I'm not ashamed to
[44:16] admit that this is a really big huge
[44:18] change to the foundation of the game so
[44:20] so as as Paul said it's it's one of the
[44:23] reasons 318 will be about maintaining
[44:26] and converting uh what we had and then
[44:30] like We're Off to the Races with what
[44:32] with with the with what every other
[44:34] programmer and designer in this company
[44:36] once they have this tool set with them
[44:38] uh is inspired to create and that's
[44:40] what's really exciting about PES
[44:44] um all right we have got 15 minutes left
[44:46] so I want to talk I want to talk about
[44:48] some density management stuff because a
[44:51] lot of the big a lot of the conversation
[44:52] is about you know I'm gonna throw a can
[44:54] somebody's gonna throw a can somebody's
[44:55] gonna throw a can of prison we're gonna
[44:56] have giant mountains of trash like it's
[44:58] Idiocracy
[44:59] um uh uh what are the movie by the way
[45:02] what are the plans for culling in PES
[45:05] will it involve staying when in
[45:08] proximity to players uh what can you
[45:10] tell us about calling plans okay uh
[45:13] that's a good question
[45:15] um with our old system we had this uh
[45:18] it's called lifetime management and it
[45:20] would arbitrarily remove entities once
[45:23] they had a certain cup and we realized
[45:26] that's not really great for play
[45:29] experience for example I think at the
[45:32] moment players can only spawn up to
[45:34] three ships if they spawn another ship
[45:36] the old one gets removed
[45:38] um for persons and entity streaming we
[45:40] actually revisit that problem and we we
[45:43] decided okay how can we make this a uh
[45:46] nicer for the player but also B how can
[45:49] we make this actually work uh good for
[45:51] personality streaming and also for
[45:54] Server meshing where maybe it doesn't
[45:56] make sense if if a player has five ships
[45:58] spawned and they're all separated in
[46:01] open space and streamed out they don't
[46:03] really cost us performance so why why do
[46:05] we still need to arbitrarily limit that
[46:06] and for that we have uh the the guys in
[46:10] Frankfurt developed a new system it's
[46:13] called density management
[46:16] and it operates on relative cost of an
[46:19] area so the idea is that instead of just
[46:22] taking arbitrary numbers on objects we
[46:24] look at areas and we look at the amount
[46:28] of items in that area and we only start
[46:31] to remove items the moment the the
[46:36] relative cost of that area becomes too
[46:38] high so as long you spawn your ships in
[46:42] different locations and they're all
[46:44] spread out we will never touch them or
[46:46] remove them however if like now everyone
[46:48] goes to the same spot and you start
[46:50] spawning ships and spawning ships at the
[46:52] same location that's when this the
[46:55] system will find out okay now the
[46:56] performance goes down because our
[46:58] relative cost in that specific area goes
[47:01] to high and then we will start deleting
[47:03] items which also follows a certain rule
[47:06] set so we will delete all those items
[47:08] first we will also have a relative
[47:11] priority on items so a playership for
[47:13] example is very high priority right so
[47:16] we would not delete the playership
[47:18] versus a coffee cup for example would be
[47:20] the first item to to go away
[47:23] um and then with with that we try to get
[47:26] the game to like where it's very uh it's
[47:29] not very invasive to you so you don't
[47:30] just see stuff disappearing out of out
[47:34] of an air exactly like the the approach
[47:36] we're taking is that most of this
[47:38] cleanup will happen during stream out so
[47:40] if an area streams out that's when the
[47:42] density management will make a first
[47:44] initial pass I will say hey in this area
[47:46] we had 50 coffee cups and that's uh
[47:49] that's that's too much so we start
[47:51] removing them and then we only go into
[47:53] the more aggressive policies once it's
[47:56] really becoming maybe an area never
[47:58] streams out or whatever all players
[48:00] decided hey I mean I kind of expect that
[48:02] right once we go get PSL probably
[48:05] everyone will like let's all go to port
[48:07] olusa and drop all our coffee mugs on
[48:11] the floor and like keep doing that right
[48:13] that's what you guys will do anyways
[48:15] um so I hope I didn't gave you any ideas
[48:19] that idea was already out no sure yeah I
[48:23] figured I figured that's as much so uh
[48:25] basically the system the system will
[48:28] take care of this but it will be a
[48:30] smarter system it's a smarter system
[48:32] than what we have right now yeah one one
[48:34] thing to add to density management too
[48:36] is that it it also has this concept of
[48:39] references and so for example if an
[48:42] entity because this also covers NPC
[48:44] entities right so like AIS and you know
[48:47] whatever else and so if a specific
[48:52] um entity is actually being referenced
[48:53] by a mission active Mission or active
[48:56] player for example then there's a ref
[48:57] Gant thing a reference counting system
[49:00] that will prevent those from being
[49:01] actively reaped so that you know it
[49:03] again the the I think the goal with
[49:05] density management is really to make
[49:07] sure stuff doesn't pop out of your view
[49:09] you know and and break your game
[49:12] experience so but we still need a a
[49:14] density measurement system to prevent
[49:16] you know overloads but that's the
[49:18] approach in general with the with the
[49:21] talk about the priority system and and
[49:22] that's all very very cool and very
[49:25] needed I think whatever current priority
[49:27] system we have thinks hospital gowns are
[49:30] the most important thing in the entire
[49:31] universe they are just the sheer number
[49:35] of hospitals and I guess weapon crates
[49:37] too but sure just yes box armor less but
[49:40] I think it's a flaw of the current
[49:42] system because uh it's not that's not
[49:44] intended not if you really like
[49:46] hospitals
[49:47] it is it is basically a design bug by
[49:51] with our current lifetime system you
[49:53] have to put in a lifetime policy on
[49:55] every single item uh entity class and
[49:58] then if you if you forgot that for
[50:00] example on an item box that means those
[50:01] item box never get cleaned up uh or if
[50:04] you set a wrong value on it so it's very
[50:07] uh like at this when we initially
[50:10] designed that I thought we thought it's
[50:11] a good idea to give like per entity
[50:13] class a policy however with so many
[50:15] different entity classes it it becomes a
[50:18] maintenance and uh also uh a balance uh
[50:23] Nightmare and for that we basically went
[50:26] away and said okay well let's
[50:27] programmatically calculate the cost of
[50:30] items and it it doesn't really matter
[50:32] like uh if if someone changes the the
[50:36] asset for an item it will automatically
[50:38] update the cost of the item because we
[50:40] look at the actual the mesh and the size
[50:42] the bounding box and and and figure out
[50:45] the cost that way
[50:46] um and then the only thing designed
[50:48] needs to do is give it a little bit of
[50:50] different priority
[50:52] um and at the same time as Benoit said
[50:54] also like a mission relevant objects we
[50:56] just like give them a ref counter while
[50:59] the mission is active so the density
[51:01] system wouldn't delete a mission
[51:03] relevant objects which would render your
[51:05] mission for example uncompletable so we
[51:08] want to avoid basically the density
[51:09] system deleting whatever your your
[51:12] mission box you're supposed to pick up
[51:14] right
[51:15] um but but that system
[51:18] um like again it's not intentional what
[51:20] we have right now in the game it's just
[51:21] the result of our old lifetime system
[51:25] and and just the sheer amount of uh
[51:27] maintenance and and balancing design
[51:31] needs to do to uh to to get the system
[51:34] right and that's that's also part why we
[51:36] replaced it with the new density
[51:38] management and it also the old system
[51:40] never took a location into account right
[51:43] it doesn't matter if 50 items are on the
[51:46] same location or 50 items spread out if
[51:48] the system thinks oh 51 it's one item
[51:51] too much I delete the render one
[51:53] um and obviously that's not really what
[51:56] what we want and it also predates even
[52:00] server streaming with server side
[52:02] streaming we can now have items in the
[52:05] world as long they're not streamed in
[52:06] they don't cost anything right they they
[52:08] are just in memory and now they're in a
[52:11] database so it's even cheaper to hold
[52:12] them so
[52:14] if density was too too aggressive it
[52:18] would basically undo whatever PS is
[52:20] trying to achieve so it needs to be
[52:22] perfectly balanced right that's that's
[52:24] actually exactly that that set though I
[52:26] still expect the first iterations of our
[52:30] first evocati test that we need to tweak
[52:33] the system heavily because we haven't
[52:34] like really seen how it behaves with you
[52:38] know we can do all our testing in-house
[52:40] it's never the same as if you open it to
[52:44] you guys and you just do whatever you
[52:46] guys do in the game so until until that
[52:48] happens we obviously there will be there
[52:50] will be heavily tweaking so maybe the
[52:51] first version will be very aggressive
[52:53] and then we need to tone it down
[52:55] um but in the end the system will will
[52:57] give a better play experience for sure
[52:59] so bad news for anybody that's been
[53:00] hoarding hospital gowns to use the
[53:02] currency in the post-apocalyptic future
[53:05] of Star Citizen
[53:07] um I took note that we should lower the
[53:09] priority of Hospital guns
[53:10] all right so I think we got time for
[53:12] maybe two more questions
[53:14] um uh I want to jump ahead to uh to a
[53:17] very common one about mfds and stuff uh
[53:21] will PES allow for ship States uh mfds
[53:25] gimbal modes scanning angles all these
[53:28] things to persist uh within player ships
[53:31] so the I did actually inquire about this
[53:34] a little bit before we came here because
[53:35] obviously this is game go driven so it's
[53:37] not something that the PS team actually
[53:40] controls though we do enable persistence
[53:42] for those things so
[53:44] um
[53:45] I do believe that gimbal's modes might
[53:48] persist because they're implemented with
[53:49] a serialized variable so that mean that
[53:51] this would stay for mfds and scanning
[53:53] angles we don't know yet that needs to
[53:55] be confirmed by the combat team uh but
[53:59] there if it's implemented with
[54:00] serialized variable then yes uh if it's
[54:03] not and it's a reset like again a bit
[54:06] like the spawning location right if they
[54:08] every time you sit in the seat it
[54:09] changes a value then doesn't matter if
[54:11] it's persisting right so uh but that's
[54:14] something that all the game teams will
[54:15] be tweaking up until we get there and if
[54:17] they can benefit from it I'm sure they
[54:18] will jump on it absolutely yeah this is
[54:21] I I really like this question because it
[54:24] demonstrates
[54:25] the uncertainty that's involved in
[54:28] what's going to happen in in the next
[54:30] couple weeks uh obviously this the first
[54:34] version of the persistent Universe went
[54:35] out in December 2015. since I mean
[54:38] there's there's a lot of entities
[54:39] there's a lot of code there's there's a
[54:42] lot of people who have come through cig
[54:43] and and created things in one way or
[54:46] another way and it's impossible to know
[54:48] how this change is going to affect
[54:50] everything that's been the huge testing
[54:52] that we've been doing internally we
[54:54] already talked about that's the months
[54:56] of testing that CI referred to in the
[54:59] letter from the chairman back in uh
[55:01] spring of this year I don't remember
[55:02] what month uh but yeah so it's we're
[55:05] going to discover that stuff together
[55:07] when we go to ebukati through PTU and
[55:10] then yeah it's just it's a question of
[55:12] just converting those things that aren't
[55:14] two so that they will work uh last
[55:17] question uh before we go
[55:21] um I asked you this at the end of our
[55:23] last is our last Bes report Benoit I'm
[55:25] going to do it again because now that
[55:27] Paul's here
[55:28] how do you feel it it's we've done we've
[55:31] done a lot of tech talk we've done a lot
[55:33] of you know process stuff but you guys
[55:36] have been on this for over a year I I
[55:39] mean I don't I don't know exactly how
[55:41] long you've been on it but with with the
[55:44] light at the end of this tunnel not
[55:46] exactly close but closer now than it's
[55:49] ever been how are you guys feeling
[55:57] me personally I'm super excited like as
[56:01] you said we worked on this like almost
[56:03] two years uh on the new database on a
[56:05] new tech and we worked obviously with
[56:07] our Strike Team pretty hard but in
[56:10] isolation in our own stream to develop
[56:13] all the tech develop new Services uh all
[56:16] this stuff and now that we finally in
[56:18] gained if it's really exciting to see it
[56:20] all come together uh to start seeing
[56:23] game code teams jump on it and adjust
[56:25] their system uh so it's really it's it's
[56:27] really great and and for me I also
[56:30] personally feel it's it's a very big
[56:32] stepping stone towards server meshing
[56:35] because that this is the tech which
[56:37] actually enables us to separate the
[56:39] simulation from the state and that will
[56:41] allow us to introduce server nodes and
[56:44] it will allow us to replicate State
[56:45] between different servers and that will
[56:47] also allow us to really scale scale the
[56:50] system right so I'm super excited uh at
[56:53] the same time time it's also a giant
[56:55] challenge as I said it's a ton of new
[56:57] Services ton of new technology it all
[57:00] needs to be better tested
[57:02] um we're working hard on that
[57:04] um but yeah I'm I'm I'm excited I'm
[57:07] happy that we we got the tech together
[57:08] like the the foundational work uh we got
[57:11] it in the main main line and now it's
[57:13] just tweaking stabilizing and getting it
[57:16] uh in your hands for for testing and
[57:19] destroying it yeah I'm still I'm still
[57:22] excited as well like the the it's been a
[57:25] super big rush to get it in the main
[57:27] line but now we get all the energy of
[57:29] the entire company behind us so it's
[57:31] really
[57:32] you know that gives us another boost
[57:34] right to you know get there obviously it
[57:37] also comes with a bunch of issues but at
[57:39] this point it's it's fun to fix them and
[57:41] you know we actually see the effect in
[57:43] game and different subsystems and stuff
[57:44] so it's it's super exciting and it's
[57:47] also it was great to go through
[57:49] questions from the community and try to
[57:51] you know get the especially the plans
[57:54] for 318 which I know are not simple to
[57:56] understand because of the where we're
[57:58] going and this is like the stepping
[58:00] stone to get there but it was really
[58:02] interesting to see how you guys see it
[58:04] uh also some questions were interesting
[58:07] in that in in sort of predicting what
[58:10] could happen which is which is also
[58:12] great we're in the same boat right like
[58:14] even though we do try stuff and we know
[58:16] what will work and what will not there's
[58:18] so many subsystems there that you know
[58:20] there's a lot of room for surprises so
[58:22] we'll see but yeah I'm totally
[58:26] pumped yeah uh I I feel like other
[58:30] projects might be afraid to admit how
[58:33] much they don't know but that's that's
[58:34] not what that's not that's not cig
[58:36] that's not us uh we're going to discover
[58:39] a lot of this together
[58:40] as it continues to go um all right we've
[58:42] still got a minute I'm gonna ask one
[58:44] more question then
[58:46] [Music]
[58:47] you've you've you've got this audience
[58:50] here that'll go up on YouTube you've got
[58:51] the audience there what one thing do you
[58:54] want to make sure everybody understands
[58:57] about this work about PES about 318
[59:00] about your role in it whatever you want
[59:02] if if you could if if you could make
[59:04] sure drive home one last thing that you
[59:07] want to make sure everybody takes away
[59:09] from this what would it be
[59:11] like for me it would really be the
[59:14] appreciation and the understanding that
[59:16] while on the surface especially with
[59:19] 3.18 it might not feel too different of
[59:22] what we have in the previous build
[59:25] the foundational changes underneath and
[59:30] the the structural changes in our core
[59:32] engine in our core entity system all
[59:35] like everything you do runs to complete
[59:39] new set of servers complete new set of
[59:42] like the replication layer got
[59:43] completely Rewritten
[59:45] The Entity system got completely changed
[59:47] we separated entity creation and entity
[59:49] spawning there's a lot of like really
[59:52] cool stuff and like really exciting Tech
[59:54] behind powering that uh and it's also
[59:58] all made to scale and to like run in the
[1:00:01] cloud have stateless Services be able to
[1:00:03] horizontally scale this thing and like
[1:00:06] all this stuff even though in this very
[1:00:07] first version it won't
[1:00:09] feel so much different like the code
[1:00:12] that runs behind the scenes a little
[1:00:14] bits and bytes are completely different
[1:00:17] um and just to get to parity this is
[1:00:20] what we had before is a giant
[1:00:22] achievement even though it doesn't feel
[1:00:25] so different in the very first version
[1:00:27] yeah no I think I think you hit the nail
[1:00:30] perfectly I think that's the that's the
[1:00:32] big change right is that we're we're
[1:00:34] finally making with this I think the
[1:00:37] game at true cloud service as it should
[1:00:40] be a cloud native service which is
[1:00:42] really what we need to make a real
[1:00:44] persistent universe and so we're this is
[1:00:47] a giant step in that direction right uh
[1:00:50] in moving the game server and its
[1:00:52] services together into a true Cloud
[1:00:53] native setup that can really scale to
[1:00:56] the vision that Chris has for this game
[1:00:58] which you know even for persistence
[1:01:00] itself it's persisting the entire game
[1:01:02] world is you know so it's crazy like
[1:01:06] it's a lot of data it's tell you know
[1:01:09] it's millions of entities that need to
[1:01:11] be stored and retrieved and so
[1:01:15] like Paul said well it doesn't look like
[1:01:17] much has changed
[1:01:18] getting the data in the game server and
[1:01:21] out of it has completely changed which
[1:01:23] which is a big it's a lot of code and a
[1:01:26] lot of code changes that touched it
[1:01:28] all right gentlemen you did it you typed
[1:01:31] my persistent enemy
[1:01:33] and we made it through the full hour uh
[1:01:35] I think it was a good show to coding
[1:01:37] yeah we got a lot of good information
[1:01:39] out there hope you guys enjoyed it as as
[1:01:41] much as I did uh remember uh iscs just
[1:01:45] came out uh updates on hole stripping
[1:01:48] and uh uh the Drake bulture and a little
[1:01:50] bit about FPS repair in there and tucked
[1:01:53] in there so check that out uh next week
[1:01:55] on ISC we've got a meet the team for a
[1:01:59] brand new team that is that has not
[1:02:01] existed in at cig before uh they were
[1:02:04] founded just five months ago and this
[1:02:06] will be the very first time you're
[1:02:07] hearing from this team and getting
[1:02:08] introduced to the team I'm not going to
[1:02:09] tell you who it is you're gonna have to
[1:02:10] tune in to find out uh and then uh and
[1:02:13] then yeah we'll be back here for Star
[1:02:14] Citizen live next week
[1:02:16] um
[1:02:18] I didn't look at who it was before I did
[1:02:21] this I'm not perfect I really should do
[1:02:23] that stuff and then the big thing though
[1:02:25] I remember citizen con is coming back on
[1:02:28] October 8th uh it is your chance to see
[1:02:32] the latest and greatest uh uh uh from
[1:02:34] many of our teams around the around the
[1:02:36] globe as we begin this journey to 4.0 uh
[1:02:40] uh uh storytelling promotion that we're
[1:02:42] doing you're gonna see that stuff in
[1:02:43] citizencon and then you know continue
[1:02:45] beyond that so check that out uh that'll
[1:02:48] be on Twitch uh I I think we're starting
[1:02:50] at 8 A.M Pacific but check out
[1:02:52] citizencon.com for the details because I
[1:02:54] clearly cannot remember them so for Star
[1:02:57] Citizen live I'm Jared Huckabee that's
[1:03:00] Ben Wabo seizure and I always say his
[1:03:02] name because it took me so long to learn
[1:03:04] it I'm so proud of myself
[1:03:07] Paul Rendell thank you so much for
[1:03:09] hanging out with us and we'll see you
[1:03:11] next week everybody take care thanks
[1:03:12] guys thank you bye-bye
[1:03:17] that sounds perfect you have it I know
[1:03:19] excellent it only took me like six years
[1:03:21] that's okay you have to you have to work
[1:03:24] on your grindel though reindel
[1:03:27] yeah
[1:03:29] I'll work on it

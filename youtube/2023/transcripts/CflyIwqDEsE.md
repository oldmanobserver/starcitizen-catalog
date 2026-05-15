# Inside Star Citizen: Design Brief: Cargo Career, Part I

**Video:** https://www.youtube.com/watch?v=CflyIwqDEsE
**Date:** 2023-09-14
**Duration:** 15:45

## Transcript

[00:00] in looking at the way that our teams are
[00:02] structured especially after the Montreal
[00:04] merger with turbulence we decided to
[00:07] combine
[00:08] uspu as well as Montreal pu into napu
[00:12] napu stands for North American
[00:15] persistent Universe Napo is the
[00:18] recruitment of three different cities in
[00:20] order to kind of create a super team
[00:22] that gives them a lot of coding
[00:24] Firepower as well as design firepowered
[00:27] napu is really a collection of people
[00:29] from Austin from LA from Montreal we're
[00:32] all just getting together to try to make
[00:34] some
[00:35] amazing new features for Star Citizen pu
[00:39] so that includes physicalized cargo
[00:41] in-game shops and newer features that
[00:45] we're looking into such as exploration
[00:47] we're working mostly currently cargo and
[00:50] things regarding that we recently
[00:52] finished work on the hall sea an APU was
[00:55] formed in order to work on larger
[00:57] feature sets for Star Citizen so that
[00:59] those features have the time and
[01:01] resources required to deliver them at
[01:03] the Quality level that we want to see in
[01:05] Apu includes several Engineers
[01:07] production and QA we have six different
[01:11] programmers actually we have a few that
[01:14] are in LA and then we have a few more in
[01:16] Austin right now that includes James
[01:19] Mitch Kevin myself as well as Preston on
[01:24] production and and Alicia in QA
[01:28] did I say everyone we have two Matthew
[01:31] and Emma that are here in Montreal yes I
[01:34] think I got them all so at this point a
[01:36] lot of what we're working on is still in
[01:38] the design phase I would say in the
[01:40] technical design and planning phase but
[01:42] yeah there's a lot of tdd like technical
[01:45] design document going on preparing the
[01:47] the feature and all the parts there's a
[01:49] lot of work in that area
[01:52] the North American persistent Universe
[01:55] team are currently at the Forefront to
[01:57] the next major evolution of cargo Hangar
[01:59] and related inventory systems and as
[02:02] their work begins to enter the Pu over
[02:04] the next three to six to nine months and
[02:07] beyond all building to what we hope will
[02:09] collectively become a true cargo career
[02:11] we here at ISC well we didn't want to
[02:15] wait to begin telling the story as much
[02:17] like the engineering and Resource
[02:18] Management systems of the eupu team this
[02:21] work promises to be utterly
[02:22] transformative to the overall Star
[02:24] Citizen experience
[02:26] so these next two shows while they're
[02:28] going to be a bit different than normal
[02:29] that's because we're not going to have
[02:31] anything to Dazzle your eyeballs with
[02:32] just yet yes the ISC gameplay capture
[02:35] team as great as they are well we're
[02:37] going to let them take a break this week
[02:38] as we let members of the napu team take
[02:41] you through the design and intention of
[02:43] their current work in a two-part special
[02:45] we're calling design brief cargo career
[02:49] foreign
[02:50] [Music]
[02:58] Apu and the foreseeable future is going
[03:01] to include features such as freight
[03:04] elevators and instance hangers as well
[03:06] as persistent hangers bright elevators
[03:08] are one of the biggest changes to Cargo
[03:12] that we've seen in the entire history of
[03:14] the game they bring the feature from
[03:16] being something that's somewhat magical
[03:19] to something that's physical it adds
[03:21] friction but also a gameplay experience
[03:24] around hauling Cargo in our game this
[03:27] one addition I think is going to change
[03:30] not just cargo but also the way that we
[03:32] interact with everything else in the
[03:34] game inventory player items purchases
[03:37] ship items it's a fundamental change to
[03:40] how players are going to deal with the
[03:43] world
[03:44] freight elevators are going to be
[03:45] implemented as an access point inside of
[03:48] player hangers where the player can
[03:50] interface with cargo to get it ready to
[03:53] put it on their ship and you'll use a
[03:55] kiosk to interact with the freight
[03:57] platform in order to call things up from
[03:59] your inventory or to put things into
[04:01] your inventory the way that the freight
[04:03] elevators are going to be implemented is
[04:05] actually using the same technology as we
[04:08] use for the cargo grids and the ships
[04:10] players will be using their tractor
[04:12] beams in order to detach things from the
[04:14] platform and then haul it onto their
[04:16] ship and vice versa they'll be using the
[04:18] tractor beams in order to detach things
[04:19] from the cargo grids and put them onto
[04:21] the freight platform I think that this
[04:23] is going to make the whole experience
[04:24] feel a lot more tactile and organic as
[04:27] well as there's a lot of fun and
[04:29] interesting gameplay around just how you
[04:31] stack things how you sequence them take
[04:33] a group of people decide how you're
[04:35] actually going to load things together
[04:37] it's like that time that you go and move
[04:39] with a U-Haul and your friends you got
[04:42] to figure out where to put the couch but
[04:44] in game it's going to be figuring out
[04:45] where do we take that big box where do
[04:47] we put the the ship items where do we
[04:49] put the guns and try to sequence it in a
[04:51] way that's both optimal as well as I
[04:54] think fun we don't just want to have the
[04:56] feature you know exist and avoid really
[04:59] what we want to try and do is work with
[05:02] the whole scope of the game to support
[05:03] cargo so this is something for outposts
[05:08] for ugf where we want to look at how do
[05:10] we really take advantage of cargo in
[05:13] these spaces however it does mean that
[05:15] the Outpost will also support the same
[05:18] manual loading process that the hangers
[05:20] and those other locations use so not
[05:23] only are you participating in cargo you
[05:25] know in a hangar in a station but out in
[05:28] the verse as well at an outpost
[05:32] and while freight elevators will be
[05:34] available throughout locations in the
[05:35] Precision Universe much of the work
[05:37] involved in manually loading and
[05:39] unloading your vehicles will always
[05:40] involve your hangers which presented the
[05:43] team with some unique challenges to
[05:45] address and overcome starting with the
[05:47] next iteration of instanced hangers
[05:51] instanced hangers solve a particular
[05:53] problem how do we have people spinning
[05:55] an extended period of time in their
[05:58] Hangar loading cargo now that we've
[06:00] added these Freight platforms but also
[06:03] allow the locations to have traffic
[06:05] coming in and out of the landing zones
[06:07] what we're doing here is decoupling the
[06:09] access to a hanger from the occupancy
[06:13] and all that really means is that we can
[06:15] dynamically create these hangers at
[06:17] runtime and they're kind of set aside
[06:19] for players to spend time inside of
[06:21] without getting too much into it right
[06:23] you're going to have a personal space
[06:25] we're just looking at ways that a lot
[06:28] more players can do this simultaneously
[06:31] we don't want to have a big choke point
[06:33] of everybody trying to load their ships
[06:35] and unload and all trying to do that in
[06:38] the same space so we have instance
[06:40] hangers as a way to to put you in an
[06:43] area where you can feel comfortable you
[06:45] can take the time that you want to load
[06:47] your or unload your cargo and you know
[06:50] really engage in that system the way
[06:53] that you choose and so you can actually
[06:55] have your personal space to deal with
[06:56] cargo inside a hanger and depending on
[06:59] your ship you know they'll be different
[07:01] different situations and different
[07:03] locations for that but the thing with
[07:04] this one is that when you leave things
[07:06] gonna basically go away once you want to
[07:09] leave you'll just make a request to ATC
[07:11] and the hangar will move into place
[07:14] we'll open up the doors and you'll be
[07:15] able to leave and then the same thing
[07:17] when Landing you make a request to ATC
[07:19] the system will allocate the space for
[07:22] you open the hanger and you can land for
[07:24] the players it will seem seamless but
[07:26] underneath the hood the system itself is
[07:29] going to be maintaining a representation
[07:31] of where all the players are what
[07:33] requirements are needed without having a
[07:36] bottleneck for players who are actually
[07:37] just trying to play the game otherwise
[07:39] and then we have persistent hangers
[07:41] persistent hangers are kind of an
[07:44] evolution of instant hangers and really
[07:46] what it is is our first step towards
[07:49] Real Player ownership in the game Beyond
[07:52] ships the cool things that you will be
[07:54] able to put your stuff in it come back
[07:56] to it and it's still going to be there
[07:58] it's just whatever the player wants to
[08:00] keep inside their hanger that's their
[08:03] home they can just leave them lie around
[08:05] they can arrange them however they want
[08:07] be it weapons or cargo or dead corpses
[08:10] or whatever very very long term I have
[08:13] no clue of any dates or anything but
[08:16] you'll be able to customize it and
[08:18] upgrade it so it becomes bigger you can
[08:21] have bigger ships in them and maybe at
[08:23] some point even having them like at
[08:25] distant location you could buy a second
[08:27] one for now it's going to really be on
[08:30] your own location it's persistent to you
[08:33] and your character and you can invite
[08:35] friends to your Hangar you can load up
[08:37] your ship and you can take the hall from
[08:39] your mission you know out of your ship
[08:41] and distribute it to your buddies so
[08:43] Persistence of hangers is really
[08:45] important this is going to be developed
[08:48] more in the future and we're going to
[08:50] use the same technology that we're using
[08:52] to build this for other things in the
[08:54] game such as player abs and it's a real
[08:57] I think exciting way for the players to
[08:59] feel like they have a more permanent
[09:02] place in the game that they can call
[09:03] their own
[09:04] I
[09:05] I can't help but notice the ISC gameplay
[09:08] capture team snuck some conceptual
[09:10] visualization in there after all what
[09:13] can I say they love what they do
[09:15] and of course I'd be remiss if I didn't
[09:18] say that everything you're hearing about
[09:20] today is the current intention of the
[09:22] design team at the time that we filmed
[09:24] this now as with all things you see and
[09:26] hear about on any ISE it's always a work
[09:29] in progress and May and often will
[09:31] continue to evolve as development
[09:33] progresses and concepts are tested
[09:36] now so far in our design brief cargo
[09:38] career we've talked about how you'll
[09:40] move and store your boxes so let's find
[09:42] out more about what happens inside those
[09:44] boxes going forward
[09:45] [Music]
[09:46] with 320 we introduced a new packing
[09:50] system that allows us to use a larger
[09:53] set of box sizes right now that includes
[09:56] one Su 2 4 8 16 24 and 32. however with
[10:01] this new version of cargo coming out
[10:03] subsequently we're gonna be adding the
[10:05] ability to have what we call inventory
[10:07] container boxes inventory actually plays
[10:10] a big part of cargo as well when you
[10:12] look at the sheer scope of number of
[10:15] boxes and you know a number of weapons
[10:18] and armor and FPS entities that we have
[10:22] in our game we really want to make sure
[10:24] that not only is Cargo physicalized but
[10:28] that inventory has a proper location in
[10:31] place as well if you go to Port Tressler
[10:34] and you hit I you'll bring up the player
[10:36] inventory screen and you'll see that
[10:39] okay I have my access to Port Tressler
[10:42] inventory no matter where I am standing
[10:44] in this station that's going to go away
[10:46] this is very important because what it
[10:48] means is it gives the players a way to
[10:50] transfer in a very clean and effective
[10:53] way all of the loose items that you
[10:55] collect during game play
[10:57] a big change that's coming up is going
[11:00] to be having properties for those boxes
[11:02] so that could be something like a box
[11:04] that's fragile
[11:10] or a box that could be Radioactive
[11:16] or that needs to be kept cool
[11:20] the other thing we're looking at with
[11:22] cargo and cargo boxes is the ability to
[11:25] store large items in your cargo boxes
[11:27] this could be anything from a ship
[11:30] weapon uh to even smaller Vehicles like
[11:33] gray cats that way when you're going
[11:35] with your friends you're going to do a
[11:37] long haul across the verse you can have
[11:40] these larger boxes filled to the brim
[11:43] with as many ship weapons as your ship
[11:45] is going to carry anything that you
[11:47] think you want to take with you and hold
[11:49] on to now you can put them in an
[11:51] inventory container box snap them into
[11:53] the cargo grid and haul it into your
[11:55] ship additionally you'll be able to take
[11:57] those to the freight Platforms in order
[11:59] to put them into your inventories
[12:03] so it gives a kind of universal way to
[12:06] haul things around in the game as well
[12:08] as a way for players to be able to
[12:10] Pirate player inventories now
[12:14] [Music]
[12:15] foreign
[12:19] [Music]
[12:23] now that you have these Goods that are
[12:24] locked up together in these inventory
[12:26] containers it just takes a tractor beam
[12:29] in order to carry them off so it gives a
[12:31] lot of gameplay possibilities for us to
[12:33] have with these loose items
[12:38] a lot of these things will tie into
[12:40] missions and where you decide to place
[12:43] them on your ship so we're really trying
[12:45] to make sure with cargo it's not just a
[12:48] wide system but that we're actually
[12:50] adding these kind of elements to help
[12:52] further gameplay missions and purpose
[12:56] [Music]
[13:00] you guys had the week
[13:06] on talking
[13:07] it's intense and none of this stuff is
[13:10] ready to show yet
[13:12] you want a week off
[13:17] so weird anyway
[13:21] no no weird stuff for cargo grid
[13:25] back to the spaceship
[13:28] [Music]
[13:29] we have some additional changes that
[13:32] we're going to be making to the cargo
[13:33] grids that allow them to have any sized
[13:36] item attached into them at the moment we
[13:39] have effectively one kinds of items that
[13:43] attach to the cargo grids those are the
[13:45] cargo boxes and they all have a similar
[13:48] size step on the dimension what I just
[13:50] mean by that is they're all what we call
[13:52] one seu length multiples on each side
[13:56] we're going to have it to where anything
[13:59] can attach to the cargo grid as long as
[14:01] it's a physical item in the game
[14:03] anything that you can grab with that
[14:04] tractor beam that can reasonably snap
[14:07] into a place will be able to snap into
[14:09] place and this is a requirement just to
[14:11] satisfying the inventory changes that
[14:15] we're making now that you won't have
[14:16] this kind of magical access but it also
[14:18] I think broadens the horizons about what
[14:21] your cargo grid and all of your ships
[14:24] can be used for I think it'll also open
[14:26] up a lot of fun gameplay around just
[14:28] figuring out how to arrange change all
[14:30] these things in a way that works well
[14:34] so yeah that's part one of our talk
[14:37] about design brief cargo career next
[14:39] week we'll be back with changes to
[14:41] vehicles and location inventory larger
[14:43] cargo item support kiosk changes the
[14:46] item bank and even unique item recovery
[14:48] so come on back and get the full scope
[14:50] of things next week
[14:52] and is testing and fixing continues on
[14:54] Alpha 320 over on the PTU with the
[14:56] latest additions to Arena commander and
[14:58] the Precision Universe heading your way
[15:00] you can check out the
[15:01] robertspaceindustries.com website or
[15:03] launcher for details on when that
[15:05] releases for inside Star Citizen I'm
[15:07] Jared Huckabee thanks for letting us
[15:09] share the process of game development
[15:11] with you and for indulging Us in these
[15:13] mostly visual free design brief shows
[15:15] and we'll see you all here for part two
[15:17] next week
[15:18] [Music]

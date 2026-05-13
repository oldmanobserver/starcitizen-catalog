# Inside Star Citizen: Danger! High Voltage! | Spring 2020

**Video:** https://www.youtube.com/watch?v=B4BcHX38Cpo
**Date:** 2020-05-28
**Duration:** 11:40

## Transcript

[00:04] [Music]
[00:07] the players and the people they get shot
[00:09] by one of these things are gonna be
[00:11] fried to words
[00:13] unlimited power you feel like a god
[00:15] firing the sniper rifle it's like you're
[00:17] firing lightning down from the heavens
[00:22] electron damage is a new energy damage
[00:25] type that we've got going in game and
[00:27] it's comprised of several different
[00:29] other damage types really it's a little
[00:31] bit of energy a little bit of distortion
[00:33] and a little bit of a new damage type
[00:35] that we have another called stun so the
[00:37] damage types we've got in game at the
[00:39] moment they're a little bit more
[00:40] straightforward ISM we've got ballistic
[00:42] and laser and it's kind of like it's
[00:44] very straightforward what those things
[00:45] do there's no like additional special
[00:47] behaviors one of the big things about
[00:48] electron is and there's multiple levels
[00:50] we can kind of pull as designers it's
[00:52] comprised of energy damage distortion
[00:54] damage and something called stun damage
[00:56] which you will have seen in the new
[00:57] melee damaged systems so with the new
[00:59] damage type we obviously needed new
[01:01] weapons to go with that and after a
[01:03] discussion with the writers we thought
[01:05] lightning bolt company would be the best
[01:07] fit that we kind of had on paper it was
[01:08] only a couple of sentences but there's a
[01:10] cooperation matrix that we looked
[01:12] through and we saw that is like they
[01:14] were called lightning bolt company and
[01:16] it was like a PMC turned like military
[01:18] weapons manufacturer are the sick of
[01:20] everyone else's crap it was quite cool
[01:22] too and I linked them in and get
[01:23] something really in the cave the two
[01:28] weapons that we wanted to work on were a
[01:30] sniper rifle and a pistol because
[01:31] they're like opposite ends of the
[01:32] spectrum we get to test this new damage
[01:34] type really thoroughly with them both
[01:36] when it came time to start modeling the
[01:38] actual weapons in game it starts off
[01:40] with a website that has the development
[01:43] of the weapon up to that point we're
[01:45] given a concept piece as well as a
[01:48] concept model it's been rendered in
[01:50] keyShot which just adds some materials
[01:52] to it though which is great for us to
[01:54] work from and to be honest because it
[01:56] allows us to already build upon the work
[01:58] of somebody else's so you can get a
[02:00] better product in the end of things and
[02:02] then it's our job to kind of take that
[02:05] to a functionable level a lot of the
[02:06] time you have to make changes such as
[02:08] are this grip is too far away this
[02:10] doesn't quite work you have to kind of
[02:12] reject the concepts
[02:13] it's actually functional to sniper from
[02:16] the pistol are both very different in
[02:17] their usage so the sniper rifle is a
[02:19] kind of extreme power end of the
[02:22] spectrum it fires very slowly
[02:24] despite the sniper rifle being quite a
[02:26] high-tech weapon it does have a pull
[02:27] action for reloading and that's so it
[02:31] always feels much more powerful that way
[02:34] because you can really see the
[02:35] resistance of the character pulling it
[02:37] back adding power to the shot when you
[02:39] do fire it on top of it
[02:43] Plus on top of that it also chains
[02:45] electron damage between targets with the
[02:47] damage some of the key elements of
[02:52] lightning weapons are the moving parts
[02:54] all those things that you don't really
[02:56] see on other weapons really make this
[02:58] one stand out so the sniper rifle has
[03:00] the vents at the side that open up it
[03:03] has all the pins that spin same as the
[03:06] pistol but I think the pistol is more of
[03:07] a shrunken down version of the sniper
[03:10] rifle but it is weaker but what that
[03:14] does mean is if you do shoot someone you
[03:16] can shoot them quickly twice in
[03:17] succession it makes it a lot more
[03:19] exciting to use and wield just the
[03:21] reload animation alone getting that to
[03:24] work as well as a challenge but I think
[03:26] it's really worth it for how you get to
[03:28] like whip it out and you have to take
[03:30] out it's a bit like a flare gun that
[03:31] gives a lot of opportunities for VF at
[03:33] the effects artists to play around as
[03:35] well and see some of the effects there
[03:37] once we had the concept put together
[03:40] some effects just initially block out
[03:42] how the gameplay loop would work so like
[03:45] placeholder effects for each of the
[03:48] vents the muzzle flare having it fire
[03:52] yeah just just trying to work out
[03:54] visually how the lining would arc around
[03:58] the gun how it would affect the player
[04:00] we knew for a fact that down the barrel
[04:03] we want to get all the visual interest
[04:04] in there and the mechanisms that we
[04:06] wanted to play with we're all to do with
[04:07] this charge system that you were having
[04:09] to cycle out and discharge so we were
[04:12] already talking to VFX in the concept
[04:14] phase to make sure that we were giving
[04:16] them kind of these items all over the
[04:18] gun that you can see
[04:19] you know me doing your shots doing your
[04:21] reloads there's tons of interesting
[04:24] things to see and look at so when the
[04:26] weapon is fired it releases this
[04:27] powerful arcing electrical discharge
[04:29] that propagates down the end of the
[04:31] barrel towards the target so for this
[04:33] I'm using like beams blinds and the
[04:36] trail limiters to make a sort of
[04:40] lightning arcing effect really like
[04:42] releasing from the actual muzzle flash
[04:43] itself then when when it actually hits
[04:47] the target it impacts which is just
[04:50] generally GPU sparks some steam there's
[04:53] an electrical crackle which is again
[04:55] trails
[04:56] that's mixture of textures and some
[04:58] distortion once it's fired again another
[05:01] target it creates this Chain Lightning
[05:03] effect then if you get shot again it
[05:05] causes an electron discharge which is
[05:07] like a mini which does a little bit of
[05:10] additional damage to you and anyone new
[05:11] and then that can also someone else's
[05:14] charge NIMH will cause a chain reaction
[05:15] and cause them to pay you as well which
[05:18] is a big big wave of release of like
[05:22] plasma and distortion and some extra
[05:25] crack the electric
[05:28] these two weapons robbed the lethal
[05:30] variety of electron and there are many
[05:32] kind of aspects we can play with the the
[05:34] multiple damage types in there that
[05:35] we've got and then down the line we want
[05:37] to do bouncing into weapons like Tasers
[05:39] we've already been talking about so you
[05:41] know completely non-lethal it'll just
[05:43] knock someone out to be captured but
[05:45] yeah these two a very highly lethal
[05:46] primarily like they'll be doing energy
[05:48] damage to people I really like these
[05:50] weapons cuz all the teams that you get
[05:52] on them they really bring it together
[05:55] and it looks better every single time
[05:58] somebody does that pass on things in
[06:01] addition to our first electron damage
[06:03] FPS weapons the upcoming alpha 3.10 also
[06:06] aims to bring with it the first
[06:08] iteration of our new player trading app
[06:10] an attachment to MOBA glasses over the
[06:12] next several patches aims to set a
[06:14] foundation that will allow citizens
[06:16] better control of their emerging
[06:18] commercial destinies so a key feature in
[06:22] any MMO is the ability for players to
[06:24] trade goods and services with each other
[06:27] and pay each other for those goods and
[06:30] services you might want to be able to
[06:32] say here have this item or hey I'll buy
[06:35] that spaceship off of you for X amount
[06:38] or even hey if you can bring me from
[06:43] point A to point B I will pay you this
[06:45] amount these are core things in any MMO
[06:48] and they've been lacking in star citizen
[06:49] for a while now and we're gonna finally
[06:51] be able to put them in place with the
[06:53] player trading app
[06:55] up until now we've had the service
[06:57] beacons which are a system that allows
[07:00] players to say I need a service
[07:02] performed and I'm willing to pay this
[07:04] amount of money for it and anybody could
[07:07] accept them it was more of a grand
[07:09] Craigslist call kind of situation as
[07:12] with many other features we're going to
[07:14] be developing this over time and rolling
[07:16] it out in stages for what we call the
[07:18] tier 0 the first release that's going to
[07:20] come out we're going to allow players to
[07:22] gift each other currency in this case a
[07:26] alpha UEC and merit this will be a
[07:29] one-way send there will not be any kind
[07:32] of handshake process and it will be
[07:33] limited exclusively to currency the
[07:36] reason we're starting with this and it
[07:37] seems very simple really but this is the
[07:40] first time that we're really in star
[07:42] citizen having ownership of something
[07:44] transfer from one player to another
[07:46] player and so we need to start with
[07:48] something very simple and very easy to
[07:50] track currency is that thing that way we
[07:53] can make sure that there aren't any
[07:55] hitches and he exploits all those things
[07:57] kind of iron out any of the flaws before
[07:59] we roll into more complicated things the
[08:02] way the players will be interacting with
[08:04] this they'll bring up a mobile glass app
[08:06] it'll be one of the first new mobile
[08:09] glass apps that were going to be
[08:09] implementing in a while and it's going
[08:11] to use our new building blocks
[08:12] technology which is pretty exciting and
[08:14] it's going to allow you to essentially
[08:16] select a player from any player whether
[08:19] they're on your server on a different
[08:21] server whether they're offline online
[08:22] and via name search similar to how we do
[08:26] friends list searching and you'll be
[08:28] able to select them and then type in an
[08:30] amount of merit or a UC that you want to
[08:33] send them and hit send and there will be
[08:35] a confirmation process of course and
[08:37] then they will get a notification that
[08:39] your gift has arrived you will get one
[08:41] that they have received it and there we
[08:43] go our recent work in three nine on the
[08:47] unified friendslist has actually allowed
[08:49] us to search very easily a massive
[08:52] database of all players that are playing
[08:53] the game and with this we are now able
[08:56] to allow you to quickly find a person
[08:59] that you just type in their name no
[09:00] matter where they are and send them
[09:03] currency
[09:04] and this just wouldn't have been
[09:05] possible for so it's a pretty nice leap
[09:07] forward so as we move from tier 0 to
[09:10] future tiers we're going to be
[09:12] implementing a few additional features
[09:14] the first thing is a two-way trade
[09:17] rather than simply sending a gift when
[09:20] we do that what we will allow is for
[09:22] players actually open an active trade
[09:24] interface in between players where they
[09:26] can almost barter you can put up a few
[09:29] items on one side of the screen and see
[09:31] what the other person is putting up on
[09:32] their side of the screen and you'll be
[09:33] able to see and see and trade and and
[09:36] basically debate what you want to send
[09:38] them and that is to allow the other
[09:41] player to essentially say no I don't
[09:43] want this or yes I do want that or
[09:45] please give me more of this the next
[09:48] step with that of course since we're
[09:50] still at currency at that stage is to
[09:52] add items when we say items that could
[09:54] be ships that could be commodities that
[09:56] could be guns that could be all kinds of
[09:58] things and that next step is of course a
[10:01] pretty massive layer of complexity which
[10:03] is why we've kind of strict it out of
[10:05] the earlier bids and then finally and
[10:08] this is a very important bit up until
[10:10] now when we've been doing these trades
[10:13] and sending ownership if it was currency
[10:15] it didn't have a physical location and
[10:17] up until this point if it was a
[10:19] commodity or something physical it was
[10:21] going to basically stay where it was we
[10:24] in a later iteration will allow players
[10:28] to place their goods in the cargo decks
[10:30] that you may have been hearing about
[10:31] elsewhere and when you place them in
[10:34] these publicly accessible spaces and put
[10:36] them up for tray and put them to trade
[10:38] with other players that will allow them
[10:41] to be then shipped to other places we
[10:43] actually hope to integrate this very
[10:46] thoroughly with the shipping gameplay
[10:47] that is so core to star citizen what we
[10:51] learn this week well we learned that
[10:53] there's more to fighting FPS battles
[10:55] than just bullets and lasers that while
[10:57] lethal at the moment electron damage
[10:59] sets the stage for the kind of
[11:01] non-lethal enforcement some bounty
[11:02] hunters look forward to in the future
[11:04] that when all is said and done shooting
[11:06] lightning is just cool and that the
[11:09] player trading app will continue to
[11:10] iterate adding additional features and
[11:12] functionality patch after
[11:15] we're inside star citizen i'm jared
[11:17] huckaby we'll see you next week
[11:32] you

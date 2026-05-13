# Star Citizen: CitizenCon 2949 - Locked Up

**Video:** https://www.youtube.com/watch?v=99Z7tXKEOwk
**Date:** 2019-12-01
**Duration:** 32:58

## Transcript

[00:02] thank you I'm just a bit of forewarning
[00:07] and I'm not very charismatic when I'm
[00:09] reading from notes and I have a lot of
[00:11] notes so um apologies if my head's down
[00:15] for half of this but at the end we'll be
[00:16] doing a big Q&A I'm sure you'll have a
[00:18] lot of questions so let's crack on hello
[00:23] and welcome to locked up I'm Lee Presley
[00:26] Lee designer and star citizen of PE
[00:28] aspect of him and in this presentation
[00:31] I'm going to be talking about the design
[00:33] and development of a first prison in
[00:35] star citizen but first I'm going to
[00:37] explain why it's necessary yeah people
[00:42] like being bad but starts dissident is
[00:45] more than just a space simulator and
[00:48] already players enjoy freedoms and
[00:50] thinkable in most games but freedoms
[00:52] bring with it a scope to misbehave
[00:56] lots of scope as it turns out and these
[01:00] are just some of the laws we've had to
[01:02] implement to try in a reign you guys in
[01:10] yeah these aren't achievements yeah
[01:20] so we've all heard the phrase crime pays
[01:24] but the truth is they only pays as long
[01:27] as there's a functioning economy
[01:28] underneath to exploit and without an
[01:31] effective system of law crime runs rife
[01:34] and economies collapse and this isn't as
[01:36] much for case in videogames in the real
[01:38] world and normally to avoid having to
[01:42] deal with this games impose arbitrary
[01:44] limits on what the play can do sometimes
[01:47] preventing actions which the games
[01:48] mechanics would otherwise allow and
[01:51] obviously this is something but we don't
[01:53] want to do in star citizen and it's why
[01:56] we've been working so hard on our lower
[01:58] system it's a system that's complex
[02:01] enough to allow players the freedom they
[02:03] want to so they can do anything they
[02:05] want we can play the game however they'd
[02:07] like but always at the risk of losing
[02:09] their of the freedoms for a time but
[02:14] before I get too deep into the design I
[02:16] want to quickly go over the purpose of
[02:18] prisons because of parallels between
[02:20] game and real life are actually quite
[02:22] startling I got a few rare legitimate
[02:26] and illegitimate purposes of prisons
[02:29] here so retribution means that victims
[02:33] will feel justice is served
[02:34] the issue with star citizen right now is
[02:37] that once a criminal is killed by bounty
[02:39] hunter or law enforcement the arrest
[02:41] function is triggered it's pretty empty
[02:44] at the moment I'm afraid and all it
[02:47] currently does is remove the crime stat
[02:49] from players and this is just so you
[02:51] don't get stuck in that endless loop of
[02:54] waking at a law landing zone and being
[02:57] shot dead by the security and rinse
[02:59] repeat so basically you're getting off
[03:02] scot-free
[03:02] and you receive no punishment and your
[03:06] victims can't be satisfied that justice
[03:08] has been served then you've got in the
[03:11] real world incapacitation means that
[03:14] players are taken out of society for a
[03:15] time this should be the case in star
[03:18] citizen but currently criminals
[03:20] immediately respawn ready to offend
[03:22] again giving their victims no respite in
[03:25] the real world serving prison time is a
[03:28] deterrent
[03:30] and it would be service the same in star
[03:31] citizen as prisons take the player out
[03:34] of the main gameplay loop inhibiting
[03:36] their ability to learn earn money and
[03:38] reputation and heavily restricting the
[03:41] mechanics available to them now this
[03:43] isn't something a game designer does
[03:45] lightly taking players out of a main
[03:47] game loop and it's another reason we're
[03:50] introducing this early because it's
[03:51] gonna take time it's gonna take tests in
[03:53] it's gonna take your guys's feedback and
[03:56] lots of iteration to ensure that prisons
[03:58] feel both fair and offer enough options
[04:01] to keep players engaged rehabilitation
[04:07] and it's possibly the only function but
[04:10] prison serve where real life and game
[04:14] parallels break down or not depending on
[04:17] your opinion of how well real prisons
[04:18] reform their inmates in the real world
[04:22] there are very few reasons a person
[04:25] would actually want to go to jail and
[04:27] put in star citizen I'm gonna make sure
[04:30] there's are many reasons and I'll give
[04:33] you a few examples like for example
[04:35] there may be a mission giver in prison
[04:38] who's trust you have to earn to unlock
[04:40] missions on the outside there may be an
[04:42] inmate who needs breaking out you could
[04:45] be sent to intimidate kidnap or kill a
[04:48] target within the prison or they may be
[04:51] a VIP who's been arrested and he's
[04:53] protection for the duration of a
[04:54] sentence possibly requiring you to up
[04:57] your sentence in line with theirs or
[04:59] maybe work with them to lower their
[05:02] sentence and the list goes on but I know
[05:06] you'll be good to see what these prisons
[05:08] look like in star citizen I have a video
[05:11] here and a little disclaimer this is
[05:16] Vivat work of many decent different
[05:19] disciplines so I feel very privileged
[05:21] people want to show you for the first
[05:22] time and gameplay isn't a stage where I
[05:26] can show you this at the moment this is
[05:28] very art in the atmosphere heavy demo
[05:31] although I did try to create a little a
[05:32] little story and excitement in it this
[05:36] is not made by our marketing department
[05:39] I made this yesterday on a very
[05:43] dodgy build and I'm noticing the
[05:46] monography so apologies it's quite
[05:48] generic so if you can just imagine that
[05:52] it has been usual polish but videos from
[05:55] CAG do then we good right oh and assets
[06:01] are obviously working project progress
[06:03] should go without saying
[06:18] [Music]
[06:44] [Music]
[06:59] [Music]
[07:32] [Music]
[07:53] [Music]
[08:46] [Music]
[08:50] [Applause]
[08:53] [Music]
[09:10] [Applause]
[09:17] unlike Glen I made by jumping one go
[09:22] okay and so what you saw there obviously
[09:25] you wake up on yourself and I believe
[09:28] there's about sixty four of those in
[09:29] each cell block
[09:31] we're on you're doing one cell block and
[09:33] for now and you walk out into the main
[09:38] cell block what you see in the middle is
[09:39] the guard tower now this this place is
[09:41] entirely automated there'll be automated
[09:44] turrets on there and in the middle of
[09:46] the bottom of it there is a they like
[09:50] information consoles they tell you how
[09:52] much of your sentence is left and it's
[09:56] where you can also transfer merits back
[09:57] and forth between players between over
[10:00] inmates and which I will get to sorry
[10:03] I'm kind of jumping ahead here but you
[10:06] also then saw him walk walk into the
[10:09] mine a part of it now there's an
[10:11] in-and-out apart there's there's a
[10:13] section where there's a machine where
[10:16] you'd pick up your mining tools and any
[10:18] of their additions that you want to pay
[10:19] for on the way in and and a way out
[10:22] where you get showered like that the
[10:25] mines are pretty and noxious and you're
[10:28] not allowed to bring anything back in
[10:30] from the mine
[10:31] you get like forcibly showered as you
[10:33] walk walk for air back in and and yet
[10:37] yeah the mines they are a lot like the
[10:39] caves that we have but you can see
[10:40] there's like women in there better light
[10:42] and and such but as you get deeper into
[10:44] the caves it turns more into like the
[10:47] caves that you recognize a lot a lot
[10:49] less and like man-made objects in there
[10:52] but I'm gonna give you I should have
[10:55] taken a drink during that you know one
[10:57] second alright okay a bit of background
[11:02] on the prison then so the writers have
[11:07] named this extremely difficult to wear
[11:09] to read outloud and the prison is run by
[11:12] clay shirt pleasure rehabilitation
[11:15] facilities on behalf of you II pleasure
[11:19] is a private Corrections provider who's
[11:21] committed to providing safe secure
[11:24] rehabilitation facilities or at least
[11:27] that's what their brochures say in
[11:28] reality
[11:30] inmates pay off their debt to society by
[11:32] mining in hazardous environments with
[11:34] woefully inadequate inadequate equipment
[11:38] the prison cell bar blocks are fully
[11:40] automated the guards are unmanned
[11:42] turrets the commissary is a vending
[11:44] machine and attempts at rehabilitation
[11:45] come in the form of motivational
[11:47] announcements played on a loop the
[11:51] prison is by no means secure either
[11:54] under investment and poor monitoring of
[11:56] led to escape routes being developed
[11:57] which while no means are easy to
[11:59] navigate have allowed multiple
[12:01] successful escapes and yet clay sure
[12:05] isn't - I pronounced out differently
[12:07] every time I save every way so bear with
[12:09] me clay sure is not too concerned
[12:11] because they fought ahead they built
[12:14] their prison deep and they built it on a
[12:16] moon called Aberdeen and this is where I
[12:19] need to pause and give you a little
[12:20] background on some tech that we're
[12:22] making you may have seen it and the
[12:25] weather demos and everything but soon
[12:27] we'll be adding things such as
[12:28] temperature humidity and wind speed
[12:30] planets and these will have realistic
[12:33] effects on the player some planets will
[12:35] be dangerously hot cold and require
[12:37] specialized suits to remain outside
[12:39] feasibly some planets may even be too
[12:42] hot or cold during periods of a day no
[12:44] matter the suit worn Aberdeen will have
[12:47] a similar atmosphere to Venus a runaway
[12:50] greenhouse effect with temperatures of
[12:52] around 400 degrees C so you can imagine
[12:54] that pleasure feels fairly confident the
[12:57] unit even if an inmate was to make it to
[12:59] the surface they may not make it much
[13:01] further so what kind of gameplay can you
[13:07] expect in the final version of Prisons
[13:09] and again I stress final version because
[13:13] why I'm about to cover is ambitious and
[13:15] not something we can deliver in a single
[13:17] release so before you can be sent to
[13:20] prison you obviously have to be arrested
[13:22] this occurs when a player da is killed
[13:24] or dies in proximity of a bounty hunter
[13:27] or law enforcement and that their body
[13:29] could conceivably be recovered or when
[13:32] the player surrenders themselves or
[13:34] their ships to one of those factions
[13:37] after a rest the play will wake upon a
[13:39] transport ship having just landed in the
[13:41] prison on board will be others but
[13:43] arrested
[13:44] around the same time and those players
[13:46] will be taken to the cell block there
[13:48] they will have been issued a cell of her
[13:50] own in which they will be able to
[13:52] persistently store items collected
[13:54] within the prison and this is where
[13:57] they'll respond should they be
[13:58] incapacitated right I hope you guys are
[14:04] still with me because here's where it
[14:05] gets a bit complicated prisons right
[14:09] sorry the prison of a player's prison
[14:12] sentence it's not measured in time but
[14:14] in a prison prison specific currency
[14:16] called merits from the moment the player
[14:19] enters the prison and for as long as
[14:21] they remain well behaved they will
[14:23] accrue merits at a slow rate the vas a
[14:26] cursive lit simplicity and I'm gonna
[14:28] massively over over simplify this let's
[14:31] say that they earn one merit for every
[14:33] minute of good behavior so if in this
[14:35] example a player has a forty merit
[14:38] sentence they would be in jail for forty
[14:40] minutes where they to simply wait it out
[14:42] but pleasure want to encourage very
[14:44] mates to generate the money so will you
[14:47] to pick up your prison issued multi-tool
[14:49] and go mining resources for them they
[14:52] would allow you to work off your
[14:53] sentence at a much faster rate
[14:55] you could easily half your sentence or
[14:57] even more by mining resources or doing
[15:00] other odd odd jobs for the prison
[15:05] however merits aren't just used to buy
[15:08] freedom nothing for it comes free in a
[15:10] closure prison present air prep players
[15:13] with hefty sentences will want to spend
[15:15] merits to make merit by investing merits
[15:18] and commodities and upgrades to their
[15:20] equipment this is done at the commissary
[15:22] a glorified vending machine which
[15:25] carries everything inmates need to
[15:26] remain productive all a surprise these
[15:30] upgrades will allow players to take more
[15:32] damage carry more resources or mine
[15:35] faster or longer and because tools the
[15:38] tools the prison supplies for free will
[15:40] be basic and their suits will come with
[15:42] limited oxygen storage and storage
[15:44] capacity this is because the prison uses
[15:48] oxygen as a means of control new inmates
[15:51] are not trusted with the larger oxygen
[15:53] tanks which would make s key escape
[15:55] easier
[15:56] they must burn
[15:58] if they must first earn trust for
[16:00] earning merits only the main cellblock
[16:03] has a constant supply of breathable air
[16:05] away from the cell block players will
[16:08] have to rely on oxygen refill stations
[16:10] but deep the deeper these are in the
[16:12] mind the longer these will take to
[16:14] replenish their supplies so players may
[16:17] find there's competition for access to
[16:19] possibly life-saving refills going back
[16:23] to merits for a moment to create a
[16:26] prison economy it's important that plays
[16:28] be able to transfer merits this opens up
[16:30] many athlean avenues of gameplay beyond
[16:33] simply mining your way to freedom I'll
[16:36] give you a few examples so save me a nap
[16:39] at my partner-in-crime were arrested at
[16:41] the same time but their sentence is
[16:43] double mine I could choose to donate my
[16:46] merits to them as I earned them until we
[16:49] both have a similar release time or a
[16:52] group of inmates could pool their
[16:54] resources and create a constant
[16:56] production line with one player fully
[16:58] upgraded and mining deep in the most
[17:01] profitable profitable parts of a mine
[17:03] kept in constant oxy pen supply by
[17:06] runners who then deposit the mines at
[17:09] the mind materials in the hoppers back
[17:11] at their entrance to the mine and then
[17:14] there's gambling with our new melee
[17:16] combat system boxing bouts could be
[17:18] arranged with players able to bet merits
[17:21] on the outcome
[17:28] yeah I mean you guys will have to do
[17:32] about yourself until we get a few NPC's
[17:33] in there but I'm sure your manager and
[17:38] merits will be in for things other than
[17:40] mining legal or otherwise for example
[17:43] pleasure mate might decide to make a
[17:45] saving on food bills and pay merits to
[17:47] inmates who collect them cave fungus or
[17:51] maybe a other player or NPC needs muscle
[17:54] to protect one them while they mine or
[17:57] perhaps an npc wants another inmate
[17:58] knocked out and tossed into the mines
[18:00] deepest darkest hole where they won't be
[18:02] found found speaking of which death in
[18:09] prison if a player is in compasseth
[18:11] incapacitated they'll wake up in their
[18:14] cell they'll have to pick up a new
[18:16] mining tool but basic one will be
[18:18] provided for free from the commissary if
[18:22] an inmate contravenes a miner prison
[18:24] rule they were receiving increate
[18:25] increase to their sentence in line with
[18:28] that infraction but inmates caught
[18:30] murdering of us would be flagged as
[18:32] violent inmates and receive much heavier
[18:34] penalties not only this Bay will be
[18:37] marked forever remains to avoid or even
[18:39] hunt as the prison will put bounty on
[18:42] the head for other inmates to claim once
[18:48] the player has earned enough merits to
[18:50] fulfill their sentence they will be told
[18:52] to report for processing for release to
[18:55] protein processing for release after
[18:58] which they will wake in their last spawn
[18:59] location with their previous loadout
[19:01] restored escape prisons will have escape
[19:07] routes players must discover v's
[19:09] themselves and learn to navigate them
[19:11] these routes will be dangerous and
[19:14] labyrinthine their purpose is to use up
[19:16] and escapees oxygen players intent on
[19:19] escape will have to memorize the route
[19:21] if they want to make it to the surface
[19:22] without suffocating even then it would
[19:25] be wise to have friends waiting in a
[19:27] ship but if not they may find means to
[19:29] escape by stealing one of the prison's
[19:31] ground vehicles just an out on
[19:34] communication within the prison and
[19:36] players will find that they are unable
[19:38] to communicate with the outside world
[19:39] by a chat or MOBA class though they may
[19:42] find a way to communicate outside deep
[19:46] in the mind where the prison's kind of
[19:49] dampening fields or whatever if they
[19:52] generate and don't work reach down there
[19:54] but even then we understand that we
[19:59] aren't able to start players using an
[20:01] external communication software so this
[20:04] is really just for players who want to
[20:06] roleplay and it's a way that if we had a
[20:08] choice we'd like it to be played should
[20:14] the player escape the prison the
[20:15] tracking chip they are implanted with
[20:17] upon arrest will activate and a bounty
[20:19] will be placed upon them due to this
[20:21] chip there will be no way for a no way
[20:23] for the player to hide so this may be
[20:25] you know they may be people bounty
[20:29] hunters out there who make it their sole
[20:30] Korea to chase down escapees rather than
[20:33] you know doing the the level 5 wanted
[20:36] kind of bounty job and should the player
[20:40] die and conceivably be located by law
[20:42] enforcement they will be returned to
[20:44] prison with a hefty escape infraction
[20:46] added to their existing sentence players
[20:49] are able to delete their prison record
[20:51] by hacking the criminal database this
[20:53] removes any record of her incarceration
[20:55] but it may take some time so I'm gonna
[21:00] open it up to questions at this moment
[21:03] well in a moment but first I'd like to
[21:06] answer a question that I've been asked a
[21:07] few times and that's why now and why are
[21:10] we implementing prisons of this point in
[21:12] development I've obviously have given
[21:15] some reasons in this presentation but I
[21:17] wanted to answer from a more logistical
[21:19] point of view so the mission team has
[21:23] two coders and those guys as well as a
[21:25] lot of our designers have been focused
[21:27] on the conversions at conversion of
[21:28] missions to work with server-side object
[21:31] container streaming so prisons offered
[21:33] the chance for artists and designers to
[21:35] work without need of code support during
[21:37] this time so that's that that is the
[21:39] main reason so I'll open it out to
[21:43] questions and my runner is going to pick
[21:47] pick someone
[21:52] [Applause]
[21:58] thank you so you've mentioned that
[22:02] there's an arrest mechanic where you an
[22:04] arrest flag gets turned on which is
[22:05] great right now that this triggers a
[22:07] bunch of guards turn around and shooting
[22:09] you to little bits and you die so now
[22:12] that this gameplay is going to be
[22:13] implemented inside of the game what's
[22:16] going to happen when that arrest flag is
[22:17] turned on are you gonna have a bunch of
[22:19] NPCs you know shooting your position
[22:22] what happens if you get found in space
[22:24] how does they how's it going to work so
[22:26] um the the same way that it works now
[22:31] like they turn up when you're spotted so
[22:34] you'll be spotted by like say you're a
[22:37] wanted level 5 the Navy's after you
[22:39] right but if you get spotted by any kind
[22:43] of security that they call for backup
[22:45] and they arrive and what what will
[22:48] change now is that you will have the
[22:51] option to surrender surrendering will be
[22:53] to power down your ship like turn your
[22:56] shields off and wait they will stop
[22:58] shooting at you and they will approach
[23:00] and they will be constantly offering you
[23:03] the chance to surrender as well like you
[23:05] know Bella win it at you but when you
[23:08] were when you're arrested now you'll
[23:11] obviously fade down everyone on your
[23:14] ship will like your ship will be taken
[23:16] everyone on your ship will be whether
[23:19] they're criminals if they're not
[23:21] criminals but they'll spawn at their
[23:22] last place or maybe it when we have like
[23:24] police stations as it were
[23:26] they'll spawning the lobby of that and
[23:28] have to arrange you know their way back
[23:30] and but anyone who's found that has you
[23:34] know a warrant out on them those guys
[23:36] will be taken to prison and and yeah I
[23:39] have to work off their sentence so to
[23:48] build on his question about what happens
[23:51] right yeah right now NPCs and Marvel
[23:57] shoot you to death yes so I'm assuming
[24:01] that they too will fall under the saloon
[24:05] surrender dynamic or if they do kill you
[24:08] instead of clearing the crimes that you
[24:10] automatically respawn into the prison
[24:13] yeah well so if you if you have yeah
[24:17] obviously if if you have a crime that
[24:19] you will go to prison if they were to
[24:21] shoot you or and we will be giving
[24:23] giving them this right the option to
[24:26] surrender
[24:27] whether that be done with a like you
[24:29] know via moat I think we already have
[24:30] their hands up emote and or whether it
[24:34] be you know down on your belly go prone
[24:37] for now but we'll give you the option
[24:40] yes higher just a quick question is I
[24:49] like the system of issuing merits and
[24:51] the merit is equal to a certain amount
[24:53] of time but it's that time in game time
[24:56] or real time could say a criminals who
[24:58] gets issued 40 minutes of jail time just
[25:01] log off for 40 minutes and then when he
[25:03] logs back on he's released and out can
[25:05] go for release or is that just purely
[25:07] in-game time you need to be spending in
[25:09] prison and we're thinking right now that
[25:12] it's going to be an in-game time that
[25:14] you have to generate this good behavior
[25:16] like and we we looked into like real
[25:18] prisons and you know you actually kind
[25:21] of go in with your good behavior already
[25:26] almost taken off it's only when you can
[25:27] do bad behavior but they take that away
[25:31] and it's the same case here you will
[25:33] generate good behavior merits like in a
[25:37] trickle kind of thing as you're in there
[25:38] those you'll be able to go and spend on
[25:40] just food or you know or just let accrue
[25:43] until the point a year free and
[25:46] obviously it would be way better to go
[25:49] spend maybe upgrade your multi-tool or
[25:51] grade your suit backpack anything and go
[25:54] and mine and and you'll be out of there
[25:55] so much faster and but yeah the idea
[25:58] that you could you know get away with it
[26:02] basically by logging off is is not
[26:05] something we want to allow that actually
[26:08] allows us to keep those those like
[26:13] sentence is much shorter as well yeah
[26:16] anyway
[26:18] hi
[26:20] so NPCs can arrest you but what about
[26:25] players so if if I have a bounty so I'm
[26:27] wanted level 5 can a player accept that
[26:30] bounty kill me or can I surrender to a
[26:33] player how does that work
[26:35] yes yep you can surrender and you can
[26:37] then killing you will send them to jail
[26:40] it's not just bounty hunters as well we
[26:43] are implementing a new mission in 3:8
[26:45] where that allows you well one of the
[26:48] things we want to do is allow you to get
[26:53] perks from orgs there'll be an or called
[26:56] the citizen Defense Force thank you and
[27:02] they they they work for the advocacy or
[27:05] a part of the advocacy and they allow
[27:06] you to basically be deputized so you're
[27:12] not a bounty hunter necessarily you're
[27:14] not chasing individuals but if you scan
[27:17] a ship and you find that it's got a play
[27:19] with the crimes down there you can like
[27:21] lawfully ask them to surrender and take
[27:23] them down and those guys will go to
[27:25] prison
[27:28] hey I'm on the left of you yeah thank
[27:32] you so the question I was gonna have is
[27:35] once people figure out how to escape
[27:37] what kind of dynamic elements are you
[27:39] thinking about putting in to make an
[27:41] escape a thing of skill rather than
[27:43] memorization so right so if you go
[27:51] straight into jail you'll have terrible
[27:53] kits like you'll have terrible equipment
[27:55] you you probably won't be able to make
[27:56] it out of that prison with just the suit
[28:01] you have on there so that means you
[28:03] either have to first work a little bit
[28:05] or you have to however you want to get
[28:08] merits out of other players you know
[28:10] maybe you find ways maybe you've got
[28:12] friends already in there you know maybe
[28:13] you've got like NPC's in there like that
[28:17] you've built a reputation with and they
[28:19] can donate you some to get you the
[28:22] oxygen but you know you need to get out
[28:24] of there
[28:26] dynamic things we've we've not really
[28:29] looked at anything like that for now it
[28:31] is
[28:31] really just a case of we chew up your
[28:35] oxygen you you memorize this and then
[28:37] you get out with enough because
[28:39] obviously just get into the planet's
[28:40] surface is only the first step and what
[28:43] I should have said in that video is but
[28:45] there were no turrets firing as they
[28:48] approached the prison and they just
[28:50] didn't work that day and so like those
[28:55] players will be shot at they will have
[28:58] like blisters parked outside firing
[29:01] missiles there'll be there'll be
[29:04] security ships dispatched so what we
[29:08] want to be able to create is is you know
[29:10] every every trope you've seen like in
[29:13] prison films right so I arranged an
[29:16] escape and I arranged it for this time
[29:18] like I'm down in the mines and I
[29:19] actually call out I'm not using this
[29:23] cord so like I say in 15 minutes I'm
[29:26] gonna meet you out on the outside and I
[29:29] break the whole way out you know barely
[29:31] escaping with the oxygen you know I need
[29:33] to get out only to find like a smoking
[29:36] wreck of that ship and all I can do is
[29:40] like like and suffocate and then wake up
[29:43] back in prison yeah so there's killing
[29:46] challenge every time yeah that's pretty
[29:48] cool alright yeah we've tried to work in
[29:50] a few little bits of gameplay like for
[29:52] instance them mining your way out like
[29:55] so you know these rocks in the way and
[29:57] stuff so like you know you can actually
[29:59] end up blowing yourself up if you're not
[30:01] careful or you know sometimes mostly
[30:04] when you mind you want to take a lot of
[30:05] time and and get it right whereas you
[30:09] want to get out quick so you run up you
[30:10] put as much energy into it as possible
[30:12] then you run away let it explode and
[30:15] kind of get out that way so we've been
[30:17] trying to use all the little pieces of
[30:20] gameplay that we have currently to make
[30:22] some interest in routes thank you for an
[30:24] answer
[30:27] hello I was thinking about if you have a
[30:31] prison system there surely has to be a
[30:34] working lost system with every aspect of
[30:36] a working loss system so will there be
[30:38] an PC lawyers which have quality levels
[30:42] maybe and you have a lot of money and
[30:44] they
[30:45] punch you out or lower your sentence in
[30:47] the beginning you can defend yourself
[30:48] against the charges maybe some of them
[30:51] are faulty or a bit high will there be
[30:53] something like that not yet designed I
[30:58] mean designing how a court would work
[31:03] and a jury in a judge lay is is we
[31:08] haven't got there yet I don't know if we
[31:10] will get there there are a few little
[31:13] fun things you'll find in 3/8 where when
[31:15] you do go into the criminal database and
[31:18] hack your hack record you have now
[31:19] hacked them individually and when you're
[31:23] hacking them you so you are you only
[31:25] hack your way into the system like
[31:27] you're then logged on as a user and so
[31:31] you you just use it like they would and
[31:33] and they get rid of your crimes by like
[31:36] picking a reason so one of the reasons
[31:39] is diplomatic immunity you know you know
[31:42] there's a bunch of like fun reasons on
[31:44] there that you can select as to why and
[31:46] these things will stay on your criminal
[31:48] record as well so you could like the
[31:51] fact that you were pardoned for you know
[31:54] diplomatic immunity or what a papal
[31:56] infallibility I don't know else or is
[31:58] but but you know you can imagine that
[32:02] yeah there's a possibility there that
[32:05] you could get some time knocked off with
[32:07] something like that it's a it's a good
[32:09] idea it's not something we've
[32:10] investigated yeah so good context maybe
[32:12] help you yeah a good context and maybe
[32:17] you know a diplomat yeah maybe maybe so
[32:19] like I say is the idea that there are
[32:22] that you could have made friends with
[32:23] gangs on the inside that then can help
[32:26] you out so you can get out of prison
[32:28] faster by like though there will be
[32:30] progression in jail light as well it's
[32:33] not just like we take you out of the
[32:35] game you can also make progression in
[32:38] jail make friends and so that the next
[32:41] time you get in you don't have to start
[32:43] from scratch oh sorry that's all
[32:54] thank you

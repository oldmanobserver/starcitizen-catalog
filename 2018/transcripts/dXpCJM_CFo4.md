# Star Citizen: Reverse the Verse LIVE - Shop Item Kiosks

**Video:** https://www.youtube.com/watch?v=dXpCJM_CFo4
**Date:** 2018-05-19
**Duration:** 52:30

## Transcript

[00:10] greetings citizens and welcome to
[00:13] another all-new edition of reverse
[00:14] diverse life the only star citizen
[00:16] broadcasts on the internet that knows
[00:18] when to hold them knows when to fold
[00:20] them knows when to walk away I was
[00:23] torturing JJ earlier
[00:24] I'm your host Content Manager Jared
[00:26] Huckaby on the show this week we've got
[00:28] senior UI programmer hugo silva on the
[00:31] show to follow up on yesterday's atv
[00:33] featuring the continuing development of
[00:35] our shop item kiosks a new feature that
[00:37] will add increasing depth to weapons
[00:39] components and make even more things
[00:42] available in the stars to the citizen
[00:43] universe than ever before but before we
[00:45] get to that let's do the Week in Review
[00:47] now last week we had designer Rob Reiner
[00:49] ger and engineers Chad McKinney and
[00:51] Michael Dillon on to discuss the current
[00:53] status in future design of our service
[00:55] beacon system now it would be impossible
[00:57] for me to overstate how crucial this
[01:00] system will become in bringing players
[01:02] together within the star citizen
[01:03] universe if you haven't checked it out
[01:05] yet
[01:05] if the replay is available now up on
[01:08] YouTube now Monday Monday brought with
[01:10] it the release of another all new
[01:11] episode of our weekly Q&A series calling
[01:14] all Depp's this time featuring such
[01:15] backers submitted backer voted on
[01:17] subjects as the difference between
[01:19] passive and active scanning ranges
[01:21] overloading your ships with cargo the
[01:24] future of the party or group system and
[01:26] more now as usual calling all devs is
[01:29] your chance to submit questions and vote
[01:31] on which ones you want to see address
[01:32] most each and every week you can
[01:35] participate right now in the thread up
[01:36] on spectrum it's in that general section
[01:39] now this last week also saw a number of
[01:42] star citizen community contests with
[01:44] three different screen shot contests
[01:46] coming to a close in in fiction laura
[01:48] contest for the recently revealed
[01:50] hercules star lifter from crusader
[01:51] industries and most recently a backer
[01:53] submitted video tutorial contest the
[01:57] community team here is working hard to
[01:58] give you guys as many ways to interact
[02:00] with each other as possible
[02:01] that's a showcase everything the star
[02:03] citizen community has to offer and
[02:05] perhaps even even be rewarded for your
[02:07] efforts now if you have any questions
[02:09] about which one of these contests might
[02:10] be the right one
[02:11] for you you can find details about each
[02:13] and every one of them upon spectrum it's
[02:15] where everything is also available this
[02:18] week our citizencon tickets now held in
[02:20] Austin Texas this year it promises to be
[02:22] the largest gathering of star citizens
[02:24] of all time with a variety of type of
[02:26] activities that can only be experienced
[02:28] there in person now the chance to meet
[02:30] our developers the chance for our
[02:32] developers to meet and greet as many of
[02:33] you as possible is always the highlight
[02:36] of our year and with no Gamescom event
[02:38] this year for 2018 don't miss what might
[02:41] be your only chance to meet Chris Aaron
[02:43] and an entire host of star citizen
[02:45] developers in person and tell them how
[02:47] much you love the carrick now I joke
[02:51] here but I've personally borne witness
[02:53] to the effect meeting our backers in
[02:55] person has had on developers both in
[02:57] recharging their batteries and in
[02:59] focusing their efforts now you can pick
[03:01] up your citizen gun 29:48 tickets now on
[03:03] the robert space industries comm website
[03:06] while they're still available and then
[03:08] finally yesterday saw the release of the
[03:10] latest episode of around the verse with
[03:12] some stellar reviews of the planet
[03:13] Herson so cool a look at the current
[03:16] state of the Vandal blade and work being
[03:18] done on our shop item kiosks and when we
[03:21] return we'll be sitting down with hugo
[03:22] silva from foundry 42 UK to talk more
[03:25] about this important feature so stay
[03:27] tuned we'll be right back
[03:38] [Music]
[03:50] [Music]
[03:59] [Music]
[04:05] [Music]
[04:24] hey welcome back so we are sitting down
[04:27] with senior UI programmer hugo silva
[04:30] Hugo how you doing man
[04:32] hi Jay hi guys don't get that right
[04:35] senior uy programmer yeah that's it it's
[04:38] all it's always a 50/50 proposition with
[04:40] me dude it's its titles man it's I'm
[04:43] that guy and that guy Thanksgiving
[04:44] dinner you know sitting down with a
[04:46] bunch of brothers I'm like we passed the
[04:48] salt air Jeff Clark it's amazing I get
[04:52] anything right so welcome to I welcome
[04:53] your first time here on reverse the
[04:55] purse oh thank you very much thank I'm
[04:57] glad to be here I will see we'll see by
[05:00] the same way by the end of the show now
[05:02] until now now because every show is
[05:06] somebody's first show and even if it
[05:08] wasn't this is still your first time on
[05:10] our TV why don't we take a few moments
[05:12] tell everybody who you are and what you
[05:15] do for star citizen so hi my name is
[05:18] Hugo
[05:19] I'm a senior uy developer here at
[05:22] foundry 42 in the UK
[05:25] I am from Portugal I moved to the UK a
[05:29] couple of years ago I've been always
[05:31] interested in videogames and of course
[05:34] sci-fi is one of my favorites I've been
[05:38] interested in the star citizen project
[05:40] for some time now and I decide to apply
[05:44] try to help the team try to make even
[05:48] better UI and UX components so I decide
[05:52] to apply I got here and I'm absolutely
[05:56] loving it now I remember when you
[05:58] started yeah you were actually here very
[06:01] early early honor those we've met we've
[06:03] been in person here at this yeah how
[06:05] long have you been with the company now
[06:07] so it's actually been nine months no I
[06:11] believe I was actually an LA before the
[06:16] release of 3.0 and working on some well
[06:22] I can say now we're
[06:23] some character customizer stuff and
[06:26] creating well basically the UI
[06:30] components for that so that was cool
[06:32] right now Hugo of course works in our UI
[06:36] department and this is a game that has
[06:39] an unbelievable amount of UI elements
[06:42] because you know a lot of games the only
[06:44] UI necessary is okay here's the stuff
[06:47] that's that sits over your your POV of
[06:49] your character kind of thing or here
[06:51] some inventory and menus but we've got
[06:53] it we've got it
[06:54] we're building a diegetic universe you
[06:57] know full of different customized UI you
[07:00] know for different casaba versus you
[07:02] know versus a you know versus what's
[07:06] what's the but what's the ship
[07:07] manufacturer called why am i blinking
[07:08] right now
[07:10] what's way just know that the the
[07:13] dumpers depot and stuff like that you
[07:14] know all these different like this how
[07:18] did you get into UI like you decide you
[07:20] wanted to work into video games how did
[07:22] how did you figure out you I like you I
[07:24] is the thing I wanted to do so I guess I
[07:28] figured this out some time ago I was
[07:30] always interested in like how we
[07:32] actually get to interface with let's say
[07:35] applications with gangs sometimes we
[07:39] play a game that looks really nice but
[07:42] doesn't quite give you all of the hints
[07:45] that you need to play the game properly
[07:46] and I got really frustrated at some
[07:50] games that didn't have for example a
[07:53] nice UI that would actually lead the way
[07:56] and actually make you play the game
[07:57] easier so during my career I actually
[08:02] worked a lot in business basically
[08:05] making business applications easier for
[08:08] customers to interact with reach
[08:11] objectives faster basically analyzing
[08:14] the behavior of the customers to try and
[08:17] make shortcuts so that applications
[08:19] would actually be more efficient and of
[08:22] course all of this also translates into
[08:25] games how do we make UI more interactive
[08:29] more appealing so to speak how do we
[08:32] actually make it part of the world not
[08:34] just something that you well you see on
[08:37] scream that you have on a ship now how
[08:40] do we actually like make it exist in the
[08:43] world like can we have holographic
[08:45] volumes that you can interact with that
[08:49] you can look at from multiple
[08:50] perspectives
[08:52] just basically mating stuff look cooler
[08:55] basically well it's an incredibly
[08:59] important part and I said I worked I
[09:00] worked with Zane for a number of years
[09:02] you know back when he was here in the LA
[09:04] office before he relocated out to
[09:05] Manchester the there's a lot of work to
[09:09] be done on started but but just just the
[09:11] new UI stuff just what you guys what you
[09:14] guys the tasks that you guys have ahead
[09:16] of you and the work that you're doing to
[09:18] to surmount that task you know each and
[09:20] every week is one of the more impressive
[09:22] aspects of that of the development I can
[09:25] see so I'm excited to have young now for
[09:28] our viewers watching wherever you are we
[09:31] are taking questions live during the
[09:33] show you can submit your questions in
[09:34] one of two places you can either submit
[09:36] your questions in the twitch chat where
[09:38] you can preface your question with the
[09:39] word question in capital letters
[09:41] surrounded by brackets it's going to
[09:42] help our community team you know pull
[09:44] the questions out from the rest of the
[09:45] chat you can also do so on spectrum in
[09:47] our general chat there same rules
[09:49] question previs what the word question
[09:51] in capital letters from Hebei brackets
[09:53] just helps our guys pull them out from
[09:55] the conversation now I do want to say we
[09:57] did collect some questions ahead of time
[09:59] in another in a different spectrum
[10:00] thread or people got to vote part of the
[10:03] reason we're talking about you know
[10:04] we're talking with Hugo today and about
[10:06] the kind of work he does is because Hugo
[10:08] is here he's a UI programmer so the kind
[10:11] of questions that the helo can feel tend
[10:13] to do with the UI and the creation of
[10:15] the of the the creation of the shop item
[10:17] kiosk the technology involves like that
[10:20] there's a distinction between those and
[10:22] design questions I you know design
[10:26] questions will we be able to ever do
[10:28] this will we be able to ever do that
[10:29] that's actually not a field that Hugo's
[10:32] gonna be involved in so much so if you I
[10:34] know everybody loves those design
[10:36] questions I've been doing this for three
[10:37] years but in those four three years
[10:39] everybody loves the design questions
[10:41] everybody wants to know when this is
[10:42] gonna happen when that's gonna happen
[10:43] how is this gonna work you know down the
[10:45] line what not we don't always have those
[10:48] guests every year not the Hugo is not
[10:50] wonderful I left
[10:51] you go I'm so happy you're here let me
[10:53] check I just realized I could do this
[10:56] but uh but uh this is this this one
[10:59] isn't a design show it's like this shows
[11:00] where we have artists on so from the
[11:02] thread a number of questions came in
[11:05] talking about you know buying ships in
[11:08] game I'm gonna tell you Hugo's not the
[11:10] guy to talk to about that so we're not
[11:11] going to be able to cover any of that
[11:13] trust me it's still a topic close close
[11:16] to our heart you've seen todd papy talk
[11:18] about it on calling all devs we will
[11:20] have more information about the the
[11:22] buying or selling or whatever of ships
[11:24] in the game without Buse we'll have that
[11:26] information at a later time this just
[11:28] isn't the show and I can cut out like
[11:30] half of these questions by just covering
[11:33] that so Hugo right off the bat so with
[11:37] the questions that you know might be in
[11:39] your will ask you know as far as
[11:40] programming and design and stuff will we
[11:43] be able to buy multiple items at once so
[11:47] I thought when we're going through can
[11:49] we pick like we add to a shopping cart
[11:50] and then checkout or so currently the
[11:54] actually the process of the item kiosk
[11:57] is a very focused on per item selection
[12:01] so let's say you would pick some let's
[12:06] say 50 caliber MMO for your gun you
[12:11] would be able to actually pick the
[12:14] quantity of ammo that you want to buy
[12:16] but we don't kind of have the experience
[12:20] of a shopping cart we are not expecting
[12:23] expecting you to buy some ammo and then
[12:27] go to another section and then buy other
[12:30] stuff and then only do the purchase at
[12:33] the end no you would probably pick the
[12:36] ammo equip it or send it to global
[12:39] inventory and then actually move forward
[12:43] I'm not sure how this in the future is
[12:46] actually going to be but for now this is
[12:49] the application that we we have for the
[12:52] item kiosk project so this week's a to
[12:55] be mentioned they brought us the first
[12:59] mention of global inventory of this
[13:02] global inventory now we
[13:04] what can you tell us about this this
[13:07] first implementation of global inventory
[13:08] and how it's supposed to work with the
[13:10] shop item kiosks so this came out as a
[13:16] safe place that we can actually put all
[13:19] of the items that the the player has you
[13:23] always have the option of buying an item
[13:25] and equipping that item to let's say a
[13:28] ship or let's say a slot on your
[13:32] character um but we also may have
[13:35] duplicates we may have large quantities
[13:37] of items and we use this global
[13:40] inventory to actually just have a safe
[13:43] place that we know belongs to player
[13:46] number X and every time that he wants to
[13:50] browse his wares
[13:52] we just redirect him to the global
[13:54] inventory and we know everything that he
[13:56] owns matter now the next question for
[14:01] the thread there says do you foresee a
[14:02] future where NPC interaction can perform
[14:06] any of these same functions as the kiosk
[14:08] like like is there been a to talk about
[14:12] about going to an NPC and having much of
[14:15] the same functionality that you would
[14:17] get from a key from a kiosk actually
[14:21] this question is very interesting we
[14:24] didn't talk about it but we can see as
[14:27] at least in my opinion like a really
[14:30] nice opportunity for roleplay as we
[14:33] currently have with the shops where
[14:35] players can physically go to the items
[14:38] look at the items inspect the items it
[14:41] would also be very nice to go to let's
[14:44] say an NPC on that store and actually do
[14:47] a traditional buy currently there's
[14:51] actually no plans but it is a something
[14:55] that we would consider maybe in the
[14:58] future now right now in the game we have
[15:01] we have we have storefronts where you go
[15:05] and you cassava where you can go in and
[15:08] you can see all the physical items and
[15:11] what not a big part a big part of the
[15:14] reason for the creation of a shop item
[15:16] chaos
[15:17] because we want to introduce more items
[15:20] to the game than we can currently
[15:22] display in in these shops it's it's
[15:25] always this it's always this not
[15:27] necessarily a chicken the egg but it's
[15:29] always a question of prerequisites it's
[15:33] we've got content teams that are you
[15:36] know designing you know like for
[15:37] instance let's just use clothing as an
[15:39] example you've got the character art
[15:40] team who can you know they may be
[15:42] cranking out 50 different shirts you
[15:44] know 50 different pants 50 different
[15:46] jackets you know every every X number of
[15:48] months but we don't necessarily have the
[15:50] physical environments in which to
[15:53] display 50 new shirts and 50 different
[15:56] pants and I am just pulling numbers out
[15:58] of the thin air guys I did just for this
[16:00] a so the shop item kiosks allow for us
[16:03] to implement these items without having
[16:08] the bottleneck of waiting for you know
[16:10] new environments to be added new
[16:13] physical shops and stuff and am i right
[16:17] now that it's I'm pretty sure I'm
[16:18] writing that I'm just looking for
[16:19] company yeah so one of the actual the
[16:23] things that actually came to make the
[16:26] item kiosks very important as exactly as
[16:29] you say
[16:29] the limit to the limit physical space
[16:32] that stores have let's just imagine that
[16:35] a store could have the thruster of a
[16:38] reclaimer that's like half the store
[16:40] right there it's not gonna walk in and
[16:42] go like oh I really like that frustr
[16:44] yeah it's don't worry it's right there
[16:46] you can't miss it
[16:48] so it got to a point that we want to
[16:52] have a way where we can present all of
[16:56] the items that we want to sell to the
[16:58] player and a in normal way instead of
[17:03] like having a pile of just like coolers
[17:05] on the store that would just not work is
[17:09] if you want the cooler on the top well
[17:11] you need to platform there that is just
[17:14] not usable at all so this is going to
[17:18] enable us like in reality stores that
[17:22] have this place sure they show some
[17:24] items they show clothes but they also
[17:27] have a storage facility in the back
[17:30] and we can store those items there like
[17:34] people do in reality of course yeah a
[17:36] couple of the questions that we've seen
[17:38] come in not just this morning but on the
[17:40] thread yesterday had to do with a little
[17:42] bit of concern that shop at MPs were
[17:45] going to replace the the diegetic you
[17:48] know emerge immersive universe of star
[17:51] citizen and I think if anybody that's
[17:54] been following the project to you know
[17:55] since the beginning we can probably a
[17:57] touch to this we're so we're so
[18:01] committed to the to keeping as many
[18:03] things diegetic and as many things you
[18:05] know in there in lieu in the world from
[18:08] from transferring cargo to to having
[18:11] storefronts that I don't think there's
[18:13] any I don't think anybody needs to worry
[18:14] that the kiosks will replace the the
[18:17] tactile sensation of walking into into
[18:20] cassava and seeing you know all the
[18:22] clothes it's just meant it's meant to
[18:24] augment and to address certain
[18:26] bottlenecks yeah the the item kiosk is
[18:31] going to serve kind of like a parallel
[18:33] option that players have to bind stuff
[18:37] basically you can still go up to the
[18:39] item that you want and you can still buy
[18:41] it as well right now so the the item
[18:46] kiosk is just a feature that we have
[18:50] that will enable you if you really want
[18:53] to let's say you're in a hurry you you
[18:56] don't or for instance you don't like to
[18:59] roleplay
[19:00] you don't like to go into the item you
[19:03] can go to the item kiosk and buy the
[19:05] item that you want the other hand if you
[19:08] still want to you feel the experience of
[19:10] going into a shop looking how cool my
[19:13] new quantum drive is going to look
[19:16] before I put it in the ship and then see
[19:18] it again so there's always that option
[19:21] so we're not taking it away from the
[19:24] player the player has the choice and of
[19:27] course you know that there's an
[19:29] immersive aspect even to the shop item
[19:31] kiosk one of the things we noticed in
[19:33] the in the reveal yesterday was the
[19:35] themed different interfaces between
[19:37] cassava and and dumpers depots like that
[19:40] what are the questions
[19:42] how do you go about making the kiosks
[19:45] still be an immersive experience so we
[19:50] tried to keep it as realistic as
[19:54] possible not even nowadays we have
[19:56] places that have kiosks on the shop and
[20:00] people can go in probably interact with
[20:04] a tablet or a kiosk and make the
[20:07] purchase and then pick it up from the
[20:08] counter we try to make it as
[20:12] customizable as possible you would get a
[20:15] feeling when you enter a casaba that you
[20:18] would see the theme in the item kiosk
[20:22] everything would look kind of familiar
[20:26] it doesn't need to be exactly a
[20:29] copy-paste of everything on the shop but
[20:32] you would immediately go like mmm I know
[20:35] this this is part of cassava okay
[20:38] I know I know this is going to give me
[20:40] cool clothes again this is what in
[20:44] reality stores do as well they keep
[20:47] branding and fee me to keep everyone
[20:50] kind of like okay I went to this shop
[20:53] but I know the shops name follow-up
[20:56] question from the live chat there do all
[20:58] the different kiosks function the same
[21:02] if I learn how to do a casaba one am I
[21:06] gonna am I gonna is the dumpers team I'm
[21:08] gonna work the same or do they have a
[21:10] different menu hierarchy how different
[21:13] or similar are these different kiosks so
[21:17] in terms of item kiosks separation that
[21:22] we have we currently have separations
[21:24] between vehicles and characters so
[21:28] imagine you go to a casaba you would
[21:30] expect to find a character item kiosk so
[21:34] it's only going to deal with character
[21:38] items let's say you want a pair of new
[21:41] pants yeah you want a new helmet okay
[21:44] you can find it and then if you go to
[21:46] let's say a store the first Depot where
[21:50] it's traditionally vehicles okay you
[21:53] could find okay I need to buy
[21:55] new quantum drive okay you're gonna find
[21:58] it there and you're gonna find it
[22:01] because you can pre-select
[22:04] at least in the case of the the vehicles
[22:07] can pre-select the the vehicle so I need
[22:11] a new quantum drive for my Gladius okay
[22:13] no worries just go in select the Gladius
[22:16] browse the quantum drives they have
[22:18] available for you buy it as simple as
[22:21] that now the you mentioned by a quantum
[22:25] drive for your Gladius when you buy a
[22:27] quantum drive your Gladius where does
[22:30] that item go
[22:32] okay so currently we have two options it
[22:37] can go either to the global inventory
[22:40] which we talked about it's kind of like
[22:43] the safe space where we keep all of the
[22:46] items for the player or we can directly
[22:48] equip that item in a valid ship so let's
[22:53] say you were browsing information about
[22:55] the Gladius you see a cool quantum drive
[22:59] you want to equip it immediately you
[23:02] would do that selection
[23:04] and and of course that is the current
[23:09] initial implementation of that like any
[23:13] star citizen game system the first
[23:16] implementation will continue to iterate
[23:17] will continue to evolve I I imagined
[23:21] there were a couple questions about
[23:22] whether we could have things delivered
[23:23] to our hangars you know instead of a
[23:27] global I'm drinking me how can we have
[23:28] an item delivered you know to our
[23:29] personal hangars and it sits there
[23:31] physically or can we have it delivered
[23:34] to our ship hold for instance you know
[23:36] maybe we don't want to equip it right
[23:37] now but we can deliver it to to the ship
[23:39] hold has I know that's not the first
[23:41] implementation but has there been any
[23:43] discussion about that
[23:46] honestly I can't talk I really don't
[23:49] know in my opinion it would be really
[23:52] cool to have that and maybe it's
[23:54] something that we could move towards but
[23:57] it depends on the feedback that we get
[23:59] from the players and the sense of
[24:02] direction that we really want to move
[24:05] forward you know and I mean
[24:09] technologically we have the option now
[24:13] it will depend does it make sense does
[24:16] it not make sense will it bring benefit
[24:18] to someone yeah Preben probably yes
[24:20] probably now let's see I'm you did so
[24:24] well there he I said you I was hoping
[24:26] you were gonna give that exact answer
[24:28] guys that's how these systems always
[24:31] work there will be that first in there
[24:32] will be that first implementation that
[24:34] is the advantage of running a live
[24:36] environment in the middle of our game
[24:38] development is that is that you know you
[24:40] don't have to go 50 steps down in a plan
[24:44] you can have ideas you can have Faso
[24:45] like we maybe we can do this maybe we
[24:46] can do this but because we have the live
[24:48] environment you know in the middle of
[24:50] our game Devon we get to push that first
[24:52] implementation out that tier 0 version
[24:54] of it see how you guys respond see what
[24:56] you guys like about it see what you guys
[24:58] don't and then make plans based on that
[25:00] so it's basically I was a design
[25:02] question but I was I was hoping Hugo
[25:04] would would feed me exactly what I need
[25:06] to need it so thank you so much here
[25:08] from the live chat will kiosks have a
[25:11] search input or do I have to scroll
[25:13] through every item in casaba before I
[25:16] find that red jacket I'm looking for so
[25:20] currently in the design we do not have a
[25:23] search option but again like your while
[25:27] we were talking about this is the first
[25:29] implementation we are going to gather
[25:31] feedback according to the feedback that
[25:34] we get of course changes Maya might be
[25:38] made we may move towards that it just
[25:42] depends depends on basically what the
[25:45] players tell us of course if they're
[25:48] gonna say like oh I really hated going
[25:50] to this store the store has like 5,000
[25:53] items and it's horrible ok that's a
[25:57] pretty good motive yes
[26:00] you know it's definitely I said without
[26:03] city it that's also design question as
[26:05] opposed to an implementation question
[26:07] Hugo's is our is our programmer who
[26:09] implements these things but I think it's
[26:11] a pretty safe bet that as the game
[26:13] continues to expand and as we add more
[26:15] shirts and more pants and more weapons
[26:18] and more ships that yes there will be
[26:20] filters in
[26:21] and I've in that sense will there be a
[26:25] direct comparison option but basically
[26:28] they're asking is there been any talk of
[26:29] you show me the the Rattler mish missile
[26:33] versus the Talon missile and have them
[26:35] both up on the screen with comparative
[26:36] stats kind of stuff yes so for the item
[26:42] kiosk we all have comparisons currently
[26:45] for tier zero this is going to be a
[26:47] simplified comparison again this is an
[26:52] evolving system this is the first
[26:54] implementation that we're going to do it
[26:57] is possibly going to get much better in
[27:00] the future
[27:01] but until then we'll have comparison but
[27:05] simplified version a lot like we have
[27:08] currently where players actually browse
[27:11] through the items and need to pay
[27:13] attention to its description to actually
[27:15] get the values they want but in the
[27:20] future we're moving towards having a
[27:23] more how should I say visually appealing
[27:26] way of actually comparing stats yes
[27:30] these a lot of these designs you know
[27:33] they start with the designer doing a
[27:35] crude doing a very crude kind of kind of
[27:37] Visio type thing and you guys come in
[27:40] and you you at you guys make it you know
[27:42] look as amazing as you do but even that
[27:44] is sent again it's still tier zero it's
[27:45] still it's it's we are constantly
[27:48] because we have this advantage we have
[27:51] this amazing advantage that no other
[27:52] game does where we have the live
[27:54] environment a little of our univille
[27:55] it's it's it's we push out these in
[27:58] iterative interim versions of things so
[28:01] that you can get your feedback all
[28:02] throughout the development process and
[28:04] you see that we see that in a ship you
[28:06] eyes you know how much the ship you eyes
[28:08] have changed over the years we see that
[28:10] in just the the the vehicle plane are
[28:13] the they insurance the insurance stuff
[28:17] and in the in this vehicle selection
[28:19] stuff and how much that's improved over
[28:21] here so it's it's it's if you ever think
[28:23] yeah I suppose what I'm about to say now
[28:25] it just goes out to the streamers but
[28:27] the streamers the youtubers whatever if
[28:29] you don't if you don't if you think
[28:31] nobody's watching your stuff if you
[28:33] think that our developers
[28:34] aren't aren't sitting in there with you
[28:36] know with with with with a streamer with
[28:39] mitachi or something up on the side
[28:41] monitor you know watching watching not
[28:43] only how he's interacting with things
[28:45] but how the chat you know is reacting to
[28:48] his interaction things and getting our
[28:49] we take feedback from every Avenue it's
[28:52] not just spectrum it's not just reddit
[28:54] we want we watch your streams we watch
[28:56] your videos it's like that so it's this
[28:58] advantage that we have of getting to
[29:00] watch you guys use these iterative
[29:04] versions of the system to help us and
[29:06] guide to the next version cannot be
[29:09] overstated oh yeah that is very true and
[29:12] actually in terms of like euy well you
[29:15] why everyone has their personal opinion
[29:17] some people like it one way other people
[29:20] like other way and we actually do like
[29:22] to receive good and bad feedback about
[29:27] the UI and we do take that into
[29:29] consideration so don't think just
[29:32] because you posted that no one actually
[29:34] saw it yeah we we do see it a lot
[29:38] absolutely and part of the part of the
[29:41] great work that our community team does
[29:42] and I guess that because I'm not on the
[29:44] community anymore is correlating about
[29:47] that stuff and sending clips to people
[29:49] say look how this person is using this
[29:50] and look how this person is using this
[29:51] and stuff like that so so it's a keep up
[29:54] the good work guys
[29:55] let's see will every company like
[29:59] Douglas Depot casaba have individually
[30:01] designed kiosks we have a lot of
[30:03] companies in this game a lot of
[30:05] corporations I don't know if every
[30:07] company will have one but what companies
[30:10] to be worked on so far let's do that so
[30:14] the test setting is actually based on
[30:17] casaba mmm
[30:19] it's a motive our motive is Abba
[30:23] actually as you might understand we have
[30:27] test scenarios test levels and we just
[30:32] put a casaba with all available clothes
[30:35] and all available vehicle parts and it's
[30:38] a massive store and it basically allows
[30:42] us to test those the player items and
[30:45] the vehicle items and the same
[30:47] well which in terms of development is
[30:50] just amazing
[30:52] of course parallel developments are
[30:54] being done for the other brandings as
[30:56] well of course but our main focus well
[31:00] at least my development main focus was
[31:03] on cassava as you can imagine we also
[31:06] have artists who are creating the themes
[31:09] for the UI assets and those guys are of
[31:14] course always working on you templates
[31:17] new branding schemes and those guys are
[31:20] the guys who actually know all about
[31:22] this here's an interesting question from
[31:26] the live chat has there been a
[31:27] discussion about a history like see the
[31:32] things that you bought previously one of
[31:35] the one of the reasons this seems
[31:36] interesting to me is if you find like
[31:39] four people who are having to replenish
[31:41] physical ammo yeah you know ballistic
[31:45] weapons so that you you find like like
[31:48] you know I have my Hornet and I have my
[31:51] Hornet configured the way that I like it
[31:53] I mean it's all ballistic weapons it's
[31:55] all bliss weapons and there's a bunch of
[31:56] different ammo types of a bunch of
[31:57] different missile types and I like the
[31:59] missiles and the ammo you know and the
[32:01] ballistic like ammo that's but I find
[32:04] that I like is there a way to just like
[32:07] find favorites in seven like so I always
[32:09] just go and find directly to do the
[32:12] things I want you know we live in a
[32:14] min/max society so I think this question
[32:16] strikes me as a min/max kind of thing
[32:18] well currently we don't have any plans
[32:22] for some kind of like buying history it
[32:26] does seem like it a really interesting
[32:27] idea the maybe that's something that we
[32:32] can consider in the future currently we
[32:35] focused more on just making it available
[32:38] for players to go into the store and buy
[32:41] the item we we didn't consider the
[32:44] trends the records being kept through
[32:48] all of the transactions that went along
[32:50] but again it is a nice idea it's
[32:54] something that we can discuss and thank
[32:57] you for the feedback
[33:00] inventory counts the question just came
[33:02] in about immigrants now I would imagine
[33:04] at this early stage the shops don't have
[33:07] like a limited number like you going to
[33:10] go stop it right now they don't run out
[33:11] of the red jacket
[33:12] you know if 50 people come in and they
[33:15] all buy the red jacket
[33:16] I don't do they run out of the red
[33:17] jacket I don't think they do do they
[33:20] anyway probably not
[33:23] yes has there been any talk about about
[33:25] for the through this back room about
[33:27] adding an inventory count to the things
[33:29] that are on the kiosks so I do know that
[33:31] systems is working on this there's
[33:34] actually a balancing of quantities going
[33:38] on I do not have enough information to
[33:40] talk about it but there was a
[33:42] conversation and yeah it seems to be
[33:46] working on of course now with the item
[33:49] kiosk we just make it available for
[33:51] people to you buy high quantities of
[33:54] items unlike on the go so of course
[33:58] something is being done to well correct
[34:02] this kind of behavior unfortunately I
[34:06] don't have enough information to
[34:07] actually say yes or no yeah and and just
[34:10] to clarify where I was going that of
[34:11] course there will be inventory counts
[34:13] you know in in the full complete you
[34:16] know operating universally inventory
[34:18] counts are one of the ways game design
[34:21] encourages players to travel and to
[34:25] explore the galaxy you don't want every
[34:27] single truck stop every single space
[34:29] station every single planet to have an
[34:32] unlimited supply of everything that they
[34:33] have we want that to be part of the
[34:37] gameplay where you and your your
[34:39] organized and they have to have to you
[34:41] know track the the the quantities and
[34:45] the availabilities of certain items you
[34:46] know maybe not necessarily a red jacket
[34:49] but you know hyper dry or hyperdrives
[34:52] quantum drives quantum drives and stuff
[34:54] like that so I was speaking primarily of
[34:56] this first iteration about whether there
[34:58] were there were inventory counts in this
[35:00] in this 2-0 and implementation I don't
[35:02] think there are not zero we'll see yeah
[35:07] but this is exactly like we're adding
[35:10] this system exactly to
[35:12] wreak chaos we're gonna bring chaos to
[35:15] the system and let's see let's see the
[35:19] changes that this is going to bring in
[35:21] the future this is actually fantastic to
[35:25] mess economy up which will then fix
[35:29] exactly balance it out I don't remember
[35:34] if we talked about this at the end of
[35:35] show but it just came in on a live chat
[35:37] can we buy amounts of something like can
[35:40] we sit there and it's like I want to buy
[35:42] five u55 magazines directed by one
[35:45] magazine for just one night it does have
[35:49] quantities yes here's a pretty general
[35:54] question can you briefly explain the
[35:56] process of creating a new kiosk okay so
[36:01] in terms of technology what I can tell
[36:04] you guys is that we have a concept of a
[36:06] store let's say that this store has a
[36:09] radius of about 200 yards we created an
[36:14] object that we defined as an item kiosk
[36:17] if we drag that object within the radius
[36:20] of the store it will immediately pick up
[36:23] all the inventory that that store has we
[36:27] created the system to be the easiest way
[36:31] to allow designers to create new item
[36:35] kiosks to have a concept of store to
[36:38] have actually an easy way to manipulate
[36:42] all the information related to that
[36:44] store this is going to be in the future
[36:48] when designers want to actually put the
[36:50] item kiosks inside of multiple stores
[36:52] may that be the ones that we have
[36:55] available now may that be the ones that
[36:57] we're going to put in the future as
[36:58] simple as dragging and dropping that
[37:01] object into that store and everything
[37:04] should work of course there might be
[37:08] issues but I'm expecting those they
[37:12] don't happen yeah I you said something
[37:15] 200 yards what's what's what's the
[37:17] what's the radius for so basically we're
[37:21] defining kind of a trigger that says
[37:24] everything that is inside of these
[37:26] 200 yards is still inside of a shop so
[37:30] every let's say item kiosk item that we
[37:34] put in side of the map if it's inside of
[37:37] those 200 yards it will detect okay I
[37:40] belong to this shop
[37:41] so the the 200 yards isn't like set in
[37:46] stone it can be determined by the
[37:48] designer he can specify okay how big how
[37:52] small he wants the store to be so that
[37:55] everything that is inside of that store
[37:57] well it counts as inventory basically
[38:00] okay on a smaller space station if
[38:03] there's a kiosk that's within the range
[38:07] of multiple stores like I could like if
[38:09] there's a if there's a kiosk that's
[38:11] within the 200 ranges of conscientious
[38:14] objection that casaba could a single
[38:17] kiosk operate for both stores it is
[38:22] possible although it should not be
[38:25] configured that way let's say that we
[38:27] had to cassava stores next to each other
[38:30] on the middle exactly in the middle they
[38:33] had an item kiosk and both stores have a
[38:37] radius that expands and covers that item
[38:40] kiosk that item kiosk would then show
[38:43] items for both stores of course the
[38:46] configurations done by the designers
[38:48] would probably never allow that to
[38:51] happen all right let's see the other
[38:55] thing that I thought of when you
[38:57] mentioned the 200-yard radius and I
[38:59] thought of this because it has actually
[39:00] come up in both yesterday's question
[39:02] thread and the live chat people are
[39:05] curious if they'll be able to key into
[39:07] the kiosk with their mobile ass I think
[39:10] from reading the comments here I think
[39:12] some of the concern is that you know
[39:14] trying to have 50 people all bunched up
[39:17] at the same kiosk you like like you
[39:19] often see and many mmo's could weaken
[39:22] could something like if you get within
[39:25] that 200 yard range you know I can just
[39:27] bring up the kiosk on my mobi glass so
[39:29] we all don't have to stand around in a
[39:31] you know a huddle like that is anything
[39:33] like that been discussed actually I
[39:35] believe I did see that uh that uh
[39:38] questioning spectrum was it I believe so
[39:41] that is a super question currently we
[39:46] don't we perceive the idea of using the
[39:51] item kiosk as actually going to the
[39:53] physical object it would be in my
[39:56] opinion super interesting to actually
[39:58] have some kind of way to switch it up
[40:02] instead of going actually to the item
[40:04] kiosk like having the concept of a
[40:07] digital app that would be at least to me
[40:12] it seems like super cool but currently
[40:14] we have the idea of going to the item
[40:17] kiosk and doing all of the purchases
[40:19] there like you would do in real life
[40:21] right and some places even have like
[40:23] four or five tablets that people go to
[40:27] the tablet sometimes they need to queue
[40:29] to use the tablets that's just reality
[40:32] as we see it now of course the the idea
[40:36] that actually that person put out is
[40:39] actually very good yeah well my reality
[40:41] is that by everything off of Amazon I
[40:43] don't I don't go in I don't go I don't
[40:45] walked into a store and I'm locked into
[40:47] a physical brick-and-mortar store in
[40:48] awhile so it's actually funny because I
[40:50] actually prefer to go in store actually
[40:53] a lot of people do and I could see that
[40:57] like if you were buying a TV or
[40:58] something you want to see the picture
[41:00] you want you want you want you want you
[41:02] know there's information that you can
[41:03] get in a Brooklyn or that you can't get
[41:05] online but for the most part you know
[41:07] for my day-to-day stuff you know I buy
[41:09] everything on Amazon so it's ultimately
[41:12] to follow up on that question it's
[41:14] mostly a that's actually a design
[41:16] question I was asking here to see if he
[41:19] was aware of any conversations I don't
[41:21] want to sit there and and and rule
[41:23] anything out guys I I don't want to
[41:26] commit to it that yes you'll be able to
[41:27] do it no you won't be able to do it I
[41:29] can tell you just from three years of
[41:32] talking with game designers almost four
[41:34] years of talking with game designers
[41:35] here
[41:36] these systems the kiosks the physical
[41:39] locations unlike the real world where
[41:43] you know it's it's perfectly normal you
[41:46] know to just sit at home and order
[41:47] everything get my groceries on Amazon
[41:49] get my toiletries on Amazon
[41:51] everything that I do in a videogame you
[41:54] you you want as many things to drive
[41:56] people to different locations as
[41:58] possible so so you know even though
[42:01] because there's gonna be people I can
[42:02] already see it in the chat people that
[42:03] you can do that today why wouldn't you
[42:05] be able to do it 930 years in the future
[42:08] and goes and that's one of those things
[42:09] where you take it to the point of
[42:11] realism then you have to bring it back
[42:12] to the point of video game and making a
[42:14] video game work like that
[42:15] so I'm we're not gonna say you can do it
[42:17] I'm not gonna say you can't do it's a
[42:19] design question neither one of us are
[42:21] designers at the moment but it's
[42:24] definitely a conversation I think it's
[42:26] worth having so I expect there to be a
[42:28] thread either on spectrum or on reddit
[42:31] or both and where you guys have that
[42:33] conversation and remember that will be
[42:35] will be watching so another question
[42:39] from the live chat says are there plans
[42:41] for item kiosks for rec rentals now
[42:45] that's interesting and I'm gonna go
[42:47] ahead and I'm gonna jump in here wreck
[42:49] is it rec is a currency for the the
[42:54] electronic access games it's for its for
[42:57] the game within a game for arena
[42:59] commander and starring rec was never
[43:02] intended to function in the persistent
[43:05] universe it has in many ways over the
[43:08] years just because of limitations of our
[43:10] platform system you know they'd have to
[43:13] have the rented ships and whatnot that
[43:14] we didn't have a way to differentiate
[43:17] that on the platform side and that's why
[43:19] some of those rented items functioned in
[43:20] the persistent universe but the rec
[43:24] specifically is was always intended to
[43:27] be a thing that used inside or any
[43:29] commander and star memory so probably
[43:33] not going to see persistent universe
[43:36] kiosks that allow you to get things
[43:38] through rec I will say that doesn't
[43:42] preclude the ability to rent things in
[43:43] the purses in universe you know I can
[43:46] rent things in real life I would imagine
[43:47] there's absolutely going to be some way
[43:49] shape or form to rent things in the
[43:51] persistent universe and maybe that's
[43:52] what rec will evolve into I don't know
[43:55] we're not there yet but I just I just
[43:57] we've seen that question come up a
[43:59] couple times I see questions about
[44:00] record the precision universe come up a
[44:01] couple of times so that's why I wanted
[44:02] to
[44:03] to address it right there and you have
[44:05] anything to add to that Hugo currently I
[44:09] don't have information about that that's
[44:12] basically the best I can say it's right
[44:14] we wrapped up we're all we're almost
[44:16] done remember guys that you can submit
[44:17] your questions live in either twitch
[44:19] chat where you can preface your question
[44:20] with the word question it's around by
[44:22] brackets or in the spectra chat if
[44:24] you're submitting questions you're
[44:25] wondering hey why aren't they asked
[44:26] answering my question that's because
[44:28] we're sitting here with hugo silva who
[44:30] is a UI programmer so we're taking
[44:32] questions that relate to the programming
[44:34] of our UI elements I should also mention
[44:38] that on next week's calling all Deb's we
[44:41] have a couple UI based questions coming
[44:44] up on there whether I'm todd papy so so
[44:46] it'll be even more UI information on
[44:50] next week's show let's see what else do
[44:53] we have here that might be in your realm
[44:55] we got questions about weather kiosks
[44:57] whether there will be black market
[44:59] kiosks added to pirate hubs I'm gonna
[45:01] tell you raft about where we're a couple
[45:03] carts before the horse on that one I
[45:05] don't there's no but I mean in theory
[45:08] craft and there's nothing that would
[45:10] prevent pirates from having their own
[45:11] you know shop faces and having their own
[45:14] technologies and stuff so in terms of
[45:18] technology the technology exists it
[45:22] would be a configuration that we would
[45:24] need to do for that case but this
[45:26] involves a lot more planning than just
[45:29] putting them in this would probably
[45:33] change balance in terms of economy how
[45:37] would that play out so in terms of like
[45:40] technology in the future they might
[45:43] shoulda might show up Mike
[45:46] but for now ya know III I can tell you
[45:50] Chris has every intention of making a
[45:52] very robust you know game plays making
[45:55] very robust gameplay systems for the for
[45:58] the less legal side of a place like that
[46:01] it's just as in in the in the timeline
[46:04] of development you have to build all the
[46:06] systems for how the things are supposed
[46:08] to work before you build the systems for
[46:10] how the things are supposed to skirt
[46:12] them you know it doesn't make any sense
[46:13] to build you
[46:16] well this is how you get around the
[46:18] rules until you've got all the rules in
[46:20] place so so that that's where we're
[46:22] gonna but I know a lot of people are
[46:24] very excited to play outlaw game play
[46:26] our own standing gardener included you
[46:29] know I mean I don't know I'm a
[46:33] goody-two-shoes in video games most
[46:34] times but all right well actually you
[46:37] know what that's about all we got time
[46:40] for today Hugo you made it look
[46:42] congratulations well thank you very much
[46:45] now guys we're going to take a short
[46:47] break we're gonna play another video
[46:49] from the community and when we return
[46:50] we'll have the wrap-up so stay tuned
[46:52] we'll be right back
[47:34] [Music]
[47:42] [Music]
[48:03] [Music]
[48:19] [Music]
[48:34] [Music]
[48:43] [Music]
[49:01] [Music]
[49:10] [Music]
[49:20] [Music]
[50:38] [Music]
[50:53] [Music]
[51:02] well none of our wraps up this week's
[51:04] show a special thanks to Hugh a silver
[51:06] for coming on the show today and taking
[51:08] your questions some housekeeping before
[51:10] I let you go
[51:11] the Hercule start with your promotion is
[51:12] still ongoing now your chance to pick up
[51:15] one of the latest operations from
[51:16] Crusader industries ends on June 14th so
[51:18] there's still some time we've also got a
[51:20] community source tutorial video contest
[51:22] going on in spectrum you can find all
[51:24] the details there in the general chat
[51:25] Monday is another all-new episode of
[51:28] calling all Deb's this time with
[51:29] questions about animations beat changes
[51:31] to VTOL linking multiple quantum jumps
[51:34] as way points death of a spaceman and
[51:36] the future as in the future of a
[51:39] potential career as a capital ship
[51:40] navigator you're not going to want to
[51:42] miss that one the thing I said about the
[51:45] UI stuff that's actually the week after
[51:46] so a lot of I got a lot of shows people
[51:49] so if we reverse the verse live I'm
[51:52] content manager for global video
[51:53] production Jared Huckaby we'll see you
[51:55] next week everybody
[52:10] thanks for watching for the latest and
[52:12] greatest in star citizen squadron 42 you
[52:14] can subscribe to our Channel
[52:15] or you can check out some of the other
[52:17] shows and you can also head to our
[52:18] website at

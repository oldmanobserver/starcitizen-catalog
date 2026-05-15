# Star Citizen Live: Q&A - Earning in the 'verse

**Video:** https://www.youtube.com/watch?v=tJmpdPnu1Ss
**Date:** 2025-07-03
**Duration:** 1:03:08

## Transcript

[00:05] Hi everybody. Welcome. I'm Who am I? I'm
[00:09] Jared and I'm the host of Star Citizen
[00:11] Live. Uh a show that we used to do every
[00:14] week and have only done like four times
[00:16] this year because uh a bunch of the
[00:19] people who I work with uh changed the
[00:21] very nature of our project
[00:24] for the better. It's been a good year.
[00:26] Uh if you've never seen Star Citizen
[00:28] Live before and and and
[00:31] so lucky if you haven't, um it's where
[00:33] we take about an hour out of the end of
[00:34] our week and I invite CI developers onto
[00:37] the show and we talk about various work
[00:39] things. Um usually, uh they come back,
[00:43] sometimes they don't. Sometimes it's
[00:45] like, Jared, what the heck did you get
[00:46] me into? And I'm like, well, you know,
[00:49] it's not easy. But uh on today's show,
[00:51] it's going to be one of those it's going
[00:53] to be one of those shows where we get
[00:54] some we get we get deep and uh nope,
[00:58] that's not where I wanted to go with
[00:59] that. We're g we're gonna we're going to
[01:00] go we're going to go heavy into one of
[01:03] the most uh uh attractive and and
[01:06] exciting topics of all. Uh economy,
[01:10] loot, mission rewards, inventory
[01:13] systems.
[01:15] No, it's going to be a good one. So
[01:17] joining us on the show this week, we
[01:18] have members from several different CI
[01:20] teams uh who all come together to work
[01:22] on these various uh uh systems. So we'll
[01:25] go around and introduce them. This is
[01:26] one of those Zoom calls. So everybody's
[01:28] at their desk and because we didn't have
[01:29] enough chairs. So we're going to start
[01:31] with who? Let's go to Zoom and see who's
[01:33] on the screen. Who we start with? Jacob.
[01:36] Congratulations. You won Zoom lottery.
[01:38] Who are you and what do you do? Uh yeah.
[01:41] Hi. Uh I'm Jacob. I'm a senior gameplay
[01:44] programmer and I'm here uh this time
[01:47] because I have been programming a lot of
[01:49] these stuff for loot and harvestables uh
[01:52] which is what all of these wonderful
[01:54] designers uh will be talking about um
[01:57] for the rest of the show. Yeah. Um
[02:00] randomize here. Uh Declan, who are you
[02:03] and what do you do for Star Citizen?
[02:05] Hello. Hello. Uh yeah, my name is Deck,
[02:07] system designer. uh work on crafting,
[02:10] which we'll talk a little bit about, and
[02:12] uh inventory reworks, which very
[02:14] exciting. Uh immediately next to you,
[02:17] Luke. Who are you and what do you do?
[02:21] Hi, I'm Luke and I am here to talk to
[02:23] you about loot. Loot, the musical
[02:26] instrument, you mean? Yeah, I'm going to
[02:28] play the loot. Okay. Wouldn't it be the
[02:31] weirdest thing we've ever done on SEO?
[02:33] Uh Andre, who are you and what do you do
[02:36] for Star Citizen? Hi. Hi, I'm Andre. and
[02:38] the economy designer. And what does an
[02:40] economy designer do? We take care of
[02:43] almost everything uh that has to do with
[02:45] the shops, value of items, rewards. Um
[02:49] yeah, so almost everything. And you're
[02:51] the reason everybody's unhappy.
[02:54] Yes.
[02:57] And across from you, Nick. Who are you
[03:00] and what do you do?
[03:02] I am Nick. I'm also an economy designer
[03:05] and also involved in everything but not
[03:08] the reason that any of you are unhappy.
[03:10] Okay. So, if we have Andre, why do we
[03:12] need you?
[03:13] We have four economy people. We have
[03:16] three economy designers and uh an
[03:18] incredible technical um person who I'm
[03:21] not even sure what his job title is
[03:23] because he knows so much stuff. So,
[03:25] Andre is a lead and uh oversees uh
[03:30] everything. I mostly focus on missions
[03:33] and rewards and item prices and uh
[03:36] events and working with the mission team
[03:39] and the world famous Elliot Mby. And
[03:42] Connor is um commodities and trade
[03:45] routes and new systems and all the free
[03:48] trading and the and all that kind of
[03:49] stuff. He's the pretty face of economy.
[03:53] Connor is. Yeah, Connor is. No, you come
[03:56] on. Come on. Um and you mentioned Elliot
[03:58] Maltby. It's a shame that he couldn't be
[03:59] here on the show with us this week.
[04:01] Yeah, it is. It's a real shame. But the
[04:02] terrible accident meant that uh
[04:05] complet accident completely his own
[04:07] fault and brought upon himself.
[04:10] Too right. Let me sleep. No, I've got
[04:14] people messing with my desk and I'm
[04:16] anal.
[04:17] Hi. Should I introduce myself?
[04:22] Um I'm Elliot Malti, uh the lead mission
[04:25] designer. Um, and I spend all my time on
[04:28] Twitch chat. Yeah, spend all my time on
[04:31] Twitch chat or making you all shoot each
[04:34] other. According to Reddit, I saw I saw
[04:37] a post that said you were one of the
[04:39] masterminds of the entire Persistent
[04:41] Universe the other day because you
[04:42] because you listen to Imagine Dragons.
[04:44] Yeah, like I was just playing schedule
[04:47] one chilling.
[04:50] All right, so on today's show, we're
[04:53] going to go through a couple different
[04:54] topics. This is going to be a bit of a
[04:56] different show than normal. Uh we are
[04:57] going to have a section at the end for
[04:59] uh for questions from our community. But
[05:01] today I want to go through basically the
[05:04] four key pillars of how items and stuff
[05:09] are acquired in the verse. Uh and uh to
[05:12] start we're going to start with uh
[05:14] economy or money things you can buy with
[05:16] money. So Andre and Nick obviously as
[05:20] the economy designers we're going to
[05:22] start with you here. How do you decide
[05:25] what goes into a shop and where?
[05:30] Well, as I mentioned, shops are part of
[05:33] uh our uh our job. Uh so, first of all,
[05:36] we want to make sure that everything in
[05:38] the uh every uh game loop, every career
[05:40] in the game is accessible. So, uh every
[05:44] activity I want it to be accessible. So,
[05:47] if you want to trade, for example,
[05:48] you're always going to find uh FPS
[05:52] trading tool or you're going to find uh
[05:54] uh sorry, I'm a bit nervous, obviously.
[05:58] Um you're always going to find um if you
[06:01] want to trade, you're always going to
[06:03] find a uh a tractor beam. You're going
[06:05] to find a a ship that has a cargo grid.
[06:08] If you want to mine, you're going to
[06:09] find an attachment for that uh multi
[06:12] tool. You're going to find a a
[06:14] prospector. Uh more than that uh we try
[06:18] to keep everything tied to narrative. So
[06:21] you're going to find burritos in Stanton
[06:23] and you're going to find uh parat on a
[06:26] stick in Pyro. And sometimes we just
[06:29] have fun with it. For example, Connor
[06:33] suggested that every farm in Pyro should
[06:35] have shotguns. He's from Texas, by the
[06:37] way.
[06:39] Okay. And I think I I think I sent a a
[06:41] thread to um uh Nick the other day about
[06:44] how um because Hursten was was was so
[06:47] salvage focused and everything, maybe
[06:49] Hurston should have salvage items in
[06:51] their stores and whatnot. It's there's a
[06:53] lot of thought that goes into
[06:55] positioning what where something goes,
[06:57] not just how much it it costs. Yeah,
[07:00] exactly. Yeah. And I mean that's
[07:02] actually the kind of thing that their
[07:04] narrative team they could have they
[07:06] could they would have a lot to talk
[07:07] about in this one in this uh as well.
[07:10] The narrative team has all of the
[07:12] history of of the of of the verse to
[07:15] date and also all the stuff coming. And
[07:17] so they have a pretty good idea of um
[07:21] the context of each location. So, uh,
[07:24] when it comes to what goes in what shops
[07:26] where, it's about bringing life to, um,
[07:29] the stories that we already have by
[07:32] letting players, like Andre said, access
[07:34] to the game loops that are appropriate
[07:36] in each of those contexts, but without
[07:39] stopping people from playing things. So,
[07:41] enabling game loops that fit the
[07:44] narrative. And you uh Andre, you said
[07:47] making things accessible from the start,
[07:49] but at some point
[07:52] you go beyond the start. You're you're
[07:54] you're in Midgame, you get to end game
[07:55] stuff. Is everything supposed to be
[07:57] available in the store? What where where
[08:00] do you draw the line for that's not
[08:02] something that should be available in
[08:03] the store? That's something that that
[08:04] should go to one of the other ways that
[08:06] you attain things. It's very hard to say
[08:09] that there's a a clear line. This is
[08:12] where a bit of the art comes in. And uh
[08:14] at some point you say, "Okay, this is an
[08:16] exclusive item or this is something that
[08:19] you should only get into the end game or
[08:21] maybe uh a lot of things, not not even a
[08:24] maybe that's going to be a certainty. A
[08:26] lot of things you're not going to be
[08:27] able to just buy from from a shop
[08:30] because I don't want to make you see the
[08:32] end all of the of the game. uh you see
[08:35] something that happens to you, helps
[08:36] helps you play the game, helps you fuel
[08:38] your ship or uh repair your ship, but
[08:41] should not be the way that you get the
[08:43] most important important items in the
[08:45] game. And it makes sense from a from a
[08:48] immersion standpoint that you wouldn't
[08:50] be able to go to a Herz rena car and
[08:52] pick up a Polaris or or an Idris. You
[08:56] know, you can't you can't you can't go
[08:57] to a rental shop and buy a battleship
[08:59] today. Now, again, there are always
[09:02] exceptions and stuff like that. is going
[09:03] to say the 890 jumps available here and
[09:05] whatnot. But it's obviously with the
[09:08] game with the game system, you try you
[09:09] make exceptions here and there in order
[09:11] to make things available to players at
[09:12] certain parts of your you know uh
[09:14] development. But on the whole it's we
[09:17] don't want to put everything in one
[09:19] place because we want we have to
[09:21] encourage players in traditional game
[09:22] design to go throughout the universe and
[09:24] and try different things in order to to
[09:26] attain their stuff. Um how do you price
[09:29] things? Is there is there some kind of
[09:31] matrix or are you just also using art?
[09:35] Uh we are always using art but there's a
[09:37] bit of technique that we apply of this
[09:40] but actually many many techniques. Of
[09:42] course we first use an algorithmical
[09:44] approach otherwise would be impossible
[09:47] to put a a price or a value on all the
[09:50] thousands and thousands of items we have
[09:51] in the game. And again those items in
[09:54] different shops at different uh uh price
[09:57] points. Once we have that uh uh value
[10:00] from from the algorithm then we start to
[10:02] uh uh apply uh our own intuition. We
[10:06] apply uh our expertise. We apply the the
[10:10] experience we have by playing the game
[10:12] and we do let's call it a sanity check
[10:15] uh if uh if we think that the algorithm
[10:18] is is giving us the right value or not
[10:21] and then we adjust the price or we
[10:22] adjust the algorithm depending on the on
[10:25] on the situation. Nick use a lot of this
[10:28] algorithm actually more than than myself
[10:30] because with FPS you have a lot of
[10:33] different uh items you have guns and you
[10:35] have armors and maybe he can tell us a
[10:36] bit about how he used the algorithm and
[10:40] so it's like is it's like you say the
[10:42] the number of items and the number of
[10:44] shops and the number of locations and
[10:46] then just even thinking about the future
[10:48] of the game when that's obviously going
[10:49] to be even broader. You can't price
[10:52] everything individually and it wouldn't
[10:53] be sensible to price everything
[10:54] individually and in fact everything is
[10:56] connected. All the prices of everything
[10:58] are connected. I don't think that's
[10:59] going to come to a as a surprise to
[11:01] anyone. But I mean if you think of
[11:02] something like ammo for example, you
[11:04] take assault rifle ammo. Well, that's
[11:06] going to be priced relative to the
[11:08] stopping power or possibly the the
[11:10] desiraability of the assault rifle
[11:12] itself which has its own price. And then
[11:14] that's related to say the price of
[11:15] pistols or the price of rail guns. The
[11:18] price of rail guns is an interesting
[11:19] one. uh the decision to make rail guns
[11:22] that you so you and and missile
[11:23] launchers so you can't buy them in shops
[11:25] is a deliberate um decision to encourage
[11:29] not just NPC shop uh trading but it's
[11:33] really really important to us to have a
[11:35] vibrant player trading and we don't
[11:37] currently have the full systems to
[11:38] support that but you guys are really
[11:41] resourceful and you're going to make it
[11:42] happen and we want to encourage that. So
[11:45] yeah, rail guns are not available in
[11:46] shops, but they're absolutely available
[11:48] around the verse and they have a value
[11:49] and everyone knows that value. Then you
[11:51] got me and Nickel talk about we'll look
[11:54] at the black market. Um I the the org
[11:58] that I'm in um we do gun running and we
[12:01] sell um and uh not that I've infiltrated
[12:04] but I we use those those data points
[12:06] that like we do in our or and how we do
[12:09] gun running to also influence because
[12:11] obviously we put our worth on it based
[12:13] on the effort that we put up front for
[12:15] you to get it but then you put your own
[12:16] worth on it for you guys to get profit
[12:18] and we take that sort of stuff into
[12:20] account as well. It's super important. I
[12:22] mean, if you take something like the
[12:23] anti-Amama set for example, like that
[12:24] has a value. It fits in with the
[12:26] algorithm. It makes sense. But the
[12:28] anti-mama set has a completely separate
[12:30] value to the people in the game because
[12:31] of its rarity, because of its
[12:33] availability in content, and and that's
[12:36] why it's all related to it. So certain
[12:38] certain items are only available through
[12:39] content. Certain items are only
[12:41] available um there's there's a whole
[12:43] content waterfall of items coming from
[12:46] the the dollar store all the way through
[12:48] into the game. and there's an
[12:49] appropriate level of when those things
[12:51] are introduced to various parts of the
[12:53] content in the game and etc etc um and
[12:56] it's all related and then on the other
[12:58] side of that is mission rewards and
[13:00] sandbox gameplay and this is where EVR
[13:02] comes in so that we can balance the risk
[13:03] and the reward of those kinds of things
[13:05] and essentially both of those come
[13:06] together in the middle and like I say in
[13:09] the future we want you to have um a
[13:12] better view into how all of these things
[13:15] are related to each other that's future
[13:16] work with UI and backend data
[13:18] So you can make meaningful choices about
[13:20] how you want to spend your money on the
[13:22] particular resources or crafting or
[13:23] whatever it is in the future. Even
[13:25] though it's quite simplistic right now,
[13:26] that's not where we want it to end.
[13:28] Okay. And we need the player economy.
[13:30] Um, do you ever intentionally price
[13:32] something high or or weird to to make it
[13:36] rare in the verse? Yeah, we did the uh
[13:39] xenofret helmet, the uh commander
[13:42] xenofret helmet. But we we rocketed that
[13:44] up and I'm pretty sure I'm sure we put
[13:46] like 69420 in it as well because we
[13:48] thought it'd be funny. Absolutely. Yeah,
[13:50] sure. There are perks of working at C.
[13:53] If you come to me and tell me I want
[13:55] that to go be go a bit up or down, you
[13:58] know what? I'm going to be your friend.
[14:01] Um, folks paying attention right now
[14:03] know that there's a there there's a
[14:05] there's an exploit. I think I think it's
[14:08] let you to duplicate things like
[14:09] Janelite and sell and sell it for a
[14:10] whole bunch of stuff. Folks are working
[14:11] on that. We're not going to talk about
[14:13] the the fix for that and the and the
[14:15] adjustments for that right now. That's
[14:17] not not being done by any of us. But I
[14:19] did want to ask I mean the timing on
[14:21] this. We've got the we've had the show
[14:23] scheduled for about a month and a half
[14:24] and then this happens.
[14:26] How frustrating how frustrating is it to
[14:29] you personally to when things like this
[14:32] happen? Well, you can only imagine how
[14:34] frustrated it is to have your work
[14:36] affected by a bug that nobody could
[14:39] foresee. Uh and uh you're right, we are
[14:42] very grateful to our many colleagues
[14:44] that are working uh to fix those uh
[14:46] those bugs. Okay. Uh and last question
[14:49] before we move into uh loot and stuff.
[14:52] Um
[14:54] sorry I took this one from from Reddit
[14:56] here. Does Star Citizen even have an
[14:58] economy?
[15:01] Wow, that's that's a multi-layered
[15:05] uh question. It's such a short and
[15:07] simple question but yeah there are many
[15:10] many there's not the comprehensive
[15:12] economy you would like to uh have in the
[15:15] in the future but uh I think we are step
[15:17] by step getting there um I I can give
[15:20] you the big picture how we laid the
[15:22] foundation for so for example we started
[15:24] in uh 2024 by by doing a full balance of
[15:28] as many uh systems and items as uh uh as
[15:32] you could so probably you saw a
[15:34] different prices for ships for FPS
[15:36] items, for armors, for components, for
[15:39] fuel, for the rewards for the missions
[15:42] change commodities, trade routes and
[15:44] many many more that I cannot even uh
[15:47] remember from the top of my head. Uh
[15:49] this year we are focusing on big data,
[15:51] we are focusing on uh uh tools, we are
[15:54] focusing on the backend work that needs
[15:57] to be done and those things that needs
[15:59] to be built uh before we get to that.
[16:02] And now here insert your adjective uh uh
[16:05] dynamic, live, responsive, all those
[16:08] things uh that we want to put into the
[16:09] economy, the economy that we all dream
[16:11] to have and the economy that I joined
[16:13] the the company to to build. uh but we
[16:16] need to do that background work first
[16:19] and you're not going to see the those
[16:20] results in the game for uh for some time
[16:23] only after that we can focus on UI and
[16:27] system that are going to system that is
[16:30] going to expose all that work to to the
[16:32] player. So until then we are we are
[16:35] doing stuff like uh you you could see
[16:38] still this year but uh uh uh trade
[16:42] routes being adjusted. Uh you're going
[16:44] to see commodities changing price
[16:46] according to narrative and according to
[16:48] the events that uh we put in the game.
[16:51] Um we're going to offer more ways for
[16:53] you to extract value from all the
[16:56] content that we introduce to the game.
[16:57] So yes, you're going to always see
[16:59] changes. we have an economy but step by
[17:02] step we are going to go to that economy
[17:04] that we all dream to have in the future.
[17:06] I hope that answers the question. Yeah.
[17:08] No, I I I I I appreciate not just that
[17:10] you answer the question, but that you
[17:12] allowed me to ask such a pointed
[17:13] question at um and yes, I think you
[17:16] agreed to yourself very well. Thank you
[17:17] so much for your answer. Um let's move
[17:20] into things you find out in the
[17:23] universe. Luke, um talking loot here,
[17:27] what are the rules? How do we decide
[17:29] what goes into loot and where?
[17:33] Okay. Um well, I think anyone anyone who
[17:36] plays games enough kind of knows what to
[17:38] expect from loot and we're not going to
[17:41] um reinvent the wheel there. Uh but for
[17:44] a long time, Loot was it was owned by
[17:47] individual content designers. Um so it
[17:50] got a little bit inconsistent.
[17:53] Um, and in an initiative at the start of
[17:55] this year, um, I've taken it over as a
[17:58] systems designer to try and get things
[18:00] back to consistent again. Um, and
[18:02] hopefully you'll notice that in, um, it
[18:06] was a line. Was it mine to align and and
[18:08] the most recent Stormbreaker location
[18:10] line to mine? How could you forget?
[18:13] Well, we called it Orbeageddon, right?
[18:16] Like internal name. You're not supposed
[18:18] to share internal names for this stuff.
[18:20] We have some really terrible internal
[18:22] names for things. Yep. Hex penetrator
[18:27] like less said about that for the
[18:29] better. Um okay. So um basically we just
[18:33] uh take a few things like into account
[18:36] um category of the item uh rarity and
[18:38] size um because they all have to fit in
[18:41] a box. Um so we have four main
[18:43] categories which are weapons and ammo,
[18:45] armor, medical and then miscellaneous.
[18:48] and that those ones are um distinguished
[18:52] visually by different boxes. Um
[18:55] miscellaneous can then be broken down
[18:57] into more specifics like food um mining
[19:02] repair um so that if the level designers
[19:06] have like a cafeteria or a garage, they
[19:09] can place things that make more sense in
[19:12] there. Um and then we have five
[19:14] rarities. um common, uncommon,
[19:17] uh rare, epic, and legendary. Um you'll
[19:21] find the first four of those in loot
[19:24] boxes. Uh we have three different
[19:26] rarities of loot boxes. Common,
[19:28] uncommon, rare. Um epic, we don't have a
[19:32] box for that, but it it appears in all
[19:34] those boxes in a very small amount. Um
[19:37] with you, you know, more likelihood of
[19:39] getting EP um rare if you are looking at
[19:43] a rare box. We don't have those
[19:44] distinguished visually yet, but that is
[19:47] the plan. We will be getting new models
[19:48] for those. So, you'll be able to just
[19:50] glance at a box and see that, oh, that's
[19:52] a rare box. It'll be a lot shinier than
[19:55] the common one, I assume. Um, and
[20:00] then we also have um size size of the
[20:04] item. Uh we have three different sizes
[20:05] of boxes and it obviously it makes sense
[20:08] that you can't find a rail gun in a
[20:11] small weapons box. Um, and it tends to
[20:14] be that as things get more powerful,
[20:16] they get larger. Um, so, you know, you
[20:19] won't get um you'll only get the full
[20:22] suit armors inside um the large largest
[20:26] armor box. So, it's kind of turned out
[20:29] that as far as gameplay goes, a large,
[20:32] you know, a large box, the size of a box
[20:34] is actually, I think, more important
[20:36] than the rarity of a box because
[20:40] what what is rare? like it's kind of
[20:42] like a tint on an item or something like
[20:45] that. Um, and then we have like
[20:47] legendary items and those don't appear
[20:49] in loot boxes. Those are saved for the
[20:52] um location. So in all in a line to mine
[20:58] or whatever it's called, um we had the
[21:01] uh camo rifle uh vault rifle. Don't
[21:06] shake your head. Um, and we had the camo
[21:09] uh hunter outfit, hunter armor. And then
[21:13] in Sageddon, we had um Stormbreaker.
[21:18] We had the um bright yellow radiation
[21:21] suits. And uh like those will never be
[21:26] found anywhere else. They'll be found in
[21:28] those locations. Whereas all the other
[21:29] stuff that's kind of like it's kind of
[21:32] unique to those locations, it's only
[21:34] unique right now. As as they get older,
[21:37] they'll kind of spill out into other
[21:39] locations as well.
[21:41] Um, and how we decide where they go. Um,
[21:44] so those individual boxes or the loot,
[21:47] um, we draw a map of the location and
[21:50] then we, um, decide how difficult it is
[21:53] to get into all those rooms and then
[21:55] assign them a loot value and that
[21:57] determines whether they can have like
[21:59] uncommon or common, um, loot inside
[22:02] them. Um, and then maybe good to
[22:06] mention, we are also making like an
[22:07] active effort to go back through some of
[22:09] our old locations and and update them
[22:11] sort of to to snuff. Obviously there's
[22:13] there's no date on when that is or when
[22:15] that's going to finish, but it's
[22:16] something we are trying to do to make
[22:18] sure we we we be consistent. Yeah. Yeah.
[22:22] Um like and that will be done using um
[22:26] the new kind of extension to the system
[22:28] that Jacob's currently working on, which
[22:30] makes it easier for us just generally um
[22:34] to set up loot, to place loot, but um
[22:37] also to define locations. So you'll
[22:41] start seeing um like differences between
[22:44] Stanton and Pyro through loot.
[22:47] Yeah. So um a lot of what Luke has said
[22:51] is uh things that we're already doing.
[22:54] We're trying to make each location have
[22:56] its own themed loot in some way. But it
[22:59] currently takes quite a lot of manual
[23:01] intervention to make that happen. Uh a
[23:04] lot of you know inefficiencies in the
[23:06] workflow. Uh so I've been working on
[23:08] some uh extensions to the system to
[23:11] improve our tools around that and make
[23:13] it easier for designers to set up things
[23:16] in such a way that it can scale to, you
[23:18] know, all of our different locations,
[23:20] all our different systems and grow for
[23:23] the future as well. Yeah. When I first
[23:25] started on this, I remember you saying
[23:27] this system was made to place rocks and
[23:29] trees.
[23:32] Yeah. One one system was made to place
[23:36] place rocks and trees. Yeah. And now
[23:38] it's it's grown and it's even placing
[23:40] Atlas geo suits, I think, in Didn't say
[23:42] I couldn't, Jacob. If you don't tell me
[23:44] I can't do something, I'm going to do
[23:46] it. All right. Yeah. Yeah. God, that
[23:48] that might be the truest words ever
[23:50] spoken in.
[23:52] I'm a designer. My my my my goal is to
[23:56] get stuff done by any means necessarily.
[23:58] And if it means I'm using something
[24:00] called a harvestable to place down an
[24:01] atlas, I'm going to godamn do it. Yeah.
[24:03] Yeah. No, I understand that. I respect
[24:06] that. But then uh I still Yeah. Do
[24:13] so.
[24:14] I I got what I do is uh I will try to
[24:19] adapt to the to the changing needs uh
[24:21] that the designers have as we're making
[24:24] new content. uh and you know what might
[24:26] not have been supported at one
[24:28] particular time uh will be supported
[24:30] later. So uh yeah we we keep growing our
[24:33] technology as the needs of our content
[24:35] and gameplay grow as well. Yeah, that's
[24:37] actually where I want to take this. I
[24:38] want to ask you now. So obviously we
[24:40] we're now using the we we now taken the
[24:43] harvestable system and adapted it to
[24:45] better place loot and stuff. Um
[24:50] there's there are technical limitations
[24:52] that we just got done talking about.
[24:54] Luke, at the beginning of this, you
[24:55] mentioned that there was an
[24:56] organizational limitation before this
[24:59] year where all the individual content
[25:00] designers were responsible for doing
[25:02] this and there wasn't any kind of global
[25:05] overarching theme or process to this
[25:09] with the growing technical aspects of
[25:12] the harvestable system or whatever.
[25:14] we're going to end up renaming it now
[25:15] that we when we start using it for other
[25:16] things and with this new organizational
[25:19] change Luke for you know trying to build
[25:22] a a new kind of philosophy over
[25:25] everything u with the efforts Elliot
[25:28] made I mentioned to go back and revisit
[25:31] old places folks in chat are mentioning
[25:33] certain pyro locations that were built
[25:35] with the old mentality and stuff and
[25:36] going back and revisiting those like
[25:38] this what is the what is the future of
[25:41] this look like we're not giving any
[25:43] dates or anything? Where do we go from
[25:45] here? Does it just keep doing what we're
[25:46] doing or are there more things we want
[25:48] to push for? Uh, I can say some very far
[25:51] future stuff, but uh, you know, we we
[25:54] hope to have um consistently themed loot
[25:59] throughout the whole location. And that
[26:02] would encompass the stuff that the
[26:04] people you find there are wearing, uh
[26:06] what they'll be having in their
[26:07] backpacks or or any other clothing items
[26:10] they have, the stuff that you'll find
[26:12] around the location. Uh and uh it'll end
[26:16] up being themed towards what that
[26:17] location is is for or related to. So if
[26:20] you find a mining outpost, there'll be
[26:22] more mining related stuff. It's it's all
[26:24] about just being able to fine-tune the
[26:28] experience to be what you would expect
[26:31] to find there in the verse. Um, and we
[26:34] have various initiatives on the go that
[26:36] are building us piece by piece towards
[26:38] that. And because everybody gets a a
[26:42] question that I'm going to that it's
[26:43] going to be a little harder to answer.
[26:45] You know, Andre, still sorry for the
[26:46] economy one. I'm not really. You did
[26:48] great. Um, it's all right. One of the
[26:50] things that separates us from other MMOs
[26:54] is that one of one of the many things
[26:56] anyway is we physicalize everything. All
[27:00] of this loot has to be physicalized. You
[27:02] can't just we don't have a system where
[27:04] you you can just throw something into
[27:06] somebody's bag and it's there and they
[27:08] wear it and it's there. It's all got to
[27:09] take up space. It's all got to it's all
[27:11] got to be hand uh you know physically
[27:13] manipulatable and stuff. Does this I'm
[27:16] pretty sure I know the answer but I'm
[27:17] going to ask. Does this make your job
[27:18] easier or harder? [ __ ] ton.
[27:23] Very nice. That's your second bomb. This
[27:26] uh you know this cool. You got to be
[27:28] careful there. I'm so
[27:32] h but yes it makes it a lot harder for
[27:35] sure. Um you know in there's like
[27:38] different layers to the physicalization
[27:40] as well. So you just saying it takes up
[27:42] space. That means even within an
[27:44] inventory, we are measuring the the
[27:47] dimensions of the item and uh the volume
[27:50] that it will take up. Uh so that you
[27:52] can't fit a super long thing in a really
[27:55] small box even if its volume would
[27:58] technically fit. Um so that that gives
[28:01] uh you know more work for me to do in
[28:03] terms of the maths um you know
[28:06] internally. But then there's more uh
[28:09] level design and you know system design
[28:12] kind of perspectives on this as well. Um
[28:14] which uh Luke might be able to say more
[28:16] about of how we choose between when
[28:19] we're going to present the item to you
[28:20] physically in the world or when we're
[28:23] going to present you with a loot box
[28:24] that you have to look inside.
[28:26] Yeah, you asked does it make it harder?
[28:28] Um I think it makes it harder for
[28:30] everyone, even the players. Um but
[28:32] especially the devs um because we have
[28:35] been physicalizing um certain items.
[28:39] It's always the items that are
[28:41] particularly rare or useful like if we
[28:44] want to draw your attention to this um
[28:46] we'll put it in the world. Uh we do that
[28:49] in like an eye-catching way within the
[28:50] level. So um a line of mind we place for
[28:53] vault weapons and gun racks. Recently
[28:56] those got lit um consistently to really
[28:58] show off what's inside there. Um, and
[29:02] there was the again the the radiation
[29:05] suit is now available on a mannequin.
[29:08] Um, and we'll be using that quite often
[29:10] I think from now on and going back
[29:12] through and and placing it. Um, but the
[29:16] reasons the other reasons other than
[29:18] technical reasons we don't um want
[29:20] physicalized loot everywhere is because
[29:23] loot boxes solve all the downsides of
[29:26] that. Um, so you can group items
[29:29] together and e they're in an easily
[29:32] recognizable package, you know, whereas
[29:35] um, you know, a big red box, whatever, a
[29:38] physicalized items, you can easily
[29:40] mistake those for static props on tables
[29:43] and and maybe miss them. Um, it
[29:46] massively speeds up the jobs of level
[29:48] designers and artists to kind of place
[29:51] these things around. You imagine placing
[29:53] individual pieces all over tables,
[29:55] making sure you got room for them. Um,
[29:58] and then it makes my job easier because
[30:00] if anything changes in loot, we don't
[30:03] have to go back through every level and
[30:04] delete individual bits and pieces. I
[30:07] just change what's going to spawn in the
[30:09] box that's there. Um, and then finally,
[30:12] like it just hides respawning, you know,
[30:15] the respawning of bits and pieces.
[30:17] Nothing pops in on tables. It just we
[30:20] refresh inside the box. It's a difficult
[30:23] thing to balance because you're going to
[30:24] have like as as Luke says, it does make
[30:26] our life harder and it can make
[30:28] sometimes as Luke said the players life
[30:30] harder, but it can also make the
[30:31] experience better. Like when we're
[30:32] designing things like Stormbreaker and a
[30:34] line of mine, you know, you think back
[30:36] to playing games when when I was a kid,
[30:39] a loot room should feel like a loot
[30:41] room, right? Instead of me just seeing a
[30:42] bunch of red boxes and knowing it's a
[30:45] chance of rare loot, I want to see like
[30:48] the gold stacked up on a table. I want
[30:50] to walk in and I want to see a vault
[30:51] shotgun or a vault sniper rifle in in a
[30:53] case in front of me because it gives two
[30:55] things. It gives affordance to players
[30:57] cuz when they look through the window,
[30:59] they see the reward that they want and
[31:01] they know the doors locked and aside
[31:03] from you all clipping through
[31:04] environments. The normal flow would be
[31:06] then you have to go and figure out how
[31:08] to get through that door without
[31:10] breaking physics usually. Um so is it's
[31:13] kind of a sort of a tossup between the
[31:15] two. So what we try to do is we try to
[31:18] choose what we think could be something
[31:21] that we'd want the player to latch on to
[31:23] visually and think I want to achieve
[31:24] that. I want to get that. And that's
[31:25] why, you know, in some places we have
[31:28] the vault weaponry visible so people can
[31:30] sort of see it and get into it. And we
[31:32] have a few armor mannequins that are the
[31:33] same. I I can see it. I want it. How do
[31:35] I get to it? And physicalizing
[31:38] physicalizing affords us the opportunity
[31:40] to make a more immersive universe. It's
[31:42] going to going to become a big part of
[31:44] when uh player housing and stuff comes
[31:47] online and being able to decorate your
[31:49] homes and your habs and your hangers and
[31:50] stuff with the with the things that
[31:52] you've collected and stuff like this.
[31:54] It's it's it is it makes the job harder,
[31:58] but the rewards down the line are still
[32:01] everything that we're shooting for and
[32:03] stuff. So, it's like anything else. Like
[32:05] a lot of things else with Star Citizen.
[32:07] We don't we didn't take the easy path.
[32:08] We take the harder path. But when it
[32:10] works and we and when we can do it
[32:12] right, it is much more rewarding. Um
[32:17] let's move to rewards for specific
[32:18] efforts. Uh uh and basically mission
[32:21] rewards and stuff. Uh Elliot, uh the
[32:23] first question actually comes from
[32:25] somebody who just got banned in chat. Uh
[32:28] Mulix the real asked, Elliot seems
[32:31] incredibly immature. Is he right to be a
[32:34] lead designer for important missions? He
[32:36] doesn't even have situational awareness
[32:38] right now. So, I guess that wasn't a
[32:40] question. No, I but I can answer it
[32:43] anyway. Are we sure that was from chat,
[32:44] not just from you? Genuinely, it could
[32:46] have been from anyone in this office.
[32:48] Um, my my my personal philosophy is
[32:51] games are meant to be fun. You got to
[32:53] have fun to make fun. So, I might seem a
[32:55] little childish, but that's because I'm
[32:56] having fun at what I do, and it just
[32:58] enables me to do a better job.
[33:01] God help us if making video games for
[33:04] people's enjoyment should not also be
[33:06] enjoyable to do. God help us. Um to the
[33:10] real questions here. This year has seen
[33:13] a major explosion in mission rewards.
[33:16] Was this a technical limitation that we
[33:18] overcame, a philosophy change in
[33:20] development, or was something else at
[33:21] play?
[33:24] Um
[33:25] there was a few things that kind of came
[33:27] into this. Um
[33:29] we we firstly we needed freight
[33:31] elevators. That was the big thing cuz
[33:32] it's either we do a bunch of temporary
[33:34] throwaway work to get your rewards or we
[33:36] wait and we do it properly the first
[33:37] time. And the big thing for this was we
[33:39] needed the freight elevator system. And
[33:40] then we got the freight elevator system.
[33:42] And the next big thing was server
[33:44] meshing. Uh so it was all about the
[33:46] mission refactor. Um but once we got the
[33:48] mission refactor done, it finally
[33:49] enabled us to take the time to actually
[33:51] make these mission rewards. So it was
[33:53] kind of it was kind of like a it was a
[33:56] technical limitation. we was waiting. We
[33:58] always wanted to do mission rewards. You
[33:59] know, way back when uh the mission
[34:02] feature team was still around, it was
[34:03] always something we talked about is we
[34:05] want to try to get away from just giving
[34:06] people UEC because UEC can just help you
[34:09] buy things, but you know, you you want
[34:11] to kind of see some other stuff. You
[34:13] want to you want to have a gun. So, it
[34:15] was sort of like a pushing forward and
[34:17] an initiative to get that. but also
[34:19] because we knew we was going to do a
[34:21] year of content. What we wanted to try
[34:23] and do as well was have a way of uh
[34:26] incentivizing that content, not just in
[34:28] the aspect of, hey, it's cool, I want to
[34:30] play it, but hey, it's cool and while
[34:32] I'm playing it, I can gather things for
[34:34] Wiccolo that later benefit me or I'm
[34:37] doing it, I found it, I've picked it up,
[34:40] and then later on I found that Wiccolo
[34:42] wants it. Um, so that that's where
[34:45] mission rewards come from. It's not
[34:46] going to stay with just Wiko. We're
[34:47] going to keep pushing it out. we already
[34:48] have with both Foxwell and
[34:52] Head Hunters. Uh sorry, there's a lot of
[34:54] missions. Uh they give out script
[34:56] obviously and they give it directly to
[34:57] your uh home location. You know, that's
[34:59] something we'll see for other missions
[35:01] uh going forward.
[35:03] Um are there ever any considerations for
[35:06] how weighty or meaningful the reward
[35:08] should be? Like should a mission reward
[35:11] inherently have more value than
[35:13] something you find in a box or buy in a
[35:15] store?
[35:17] Uh yeah, we we it's it's a balancing
[35:20] act, right? Um like most things, we we
[35:23] always want to strive for a mix of
[35:26] here's a mission thing. It's really cool
[35:28] and you can only get it via missions
[35:29] because obviously then it incentivizes
[35:31] the mission and then we'll have some
[35:32] items that you can get via a mission or
[35:33] you could find as as potentially a rare
[35:35] drop inside of loot boxes. Um or it's
[35:38] something that you can't get via
[35:39] mission, you can only get via loot. Uh
[35:41] we we try to achieve a nice mix of it of
[35:43] it all, but we always want to make sure
[35:45] that some items are visually distinct
[35:47] via the methods of getting them. Uh this
[35:49] is so say I'm walking around in my uh
[35:52] Stormbreaker uniform that I've got from
[35:54] Wicolo, right? And um Nick um Wardle,
[35:58] who obviously doesn't read very well and
[36:00] hasn't read the contract, comes up to me
[36:01] and goes, "Hey, I you know, I've put my
[36:03] glasses on and I really like the uh the
[36:05] armor that you're wearing. Where do I
[36:07] get that from?" Um, and then I can
[36:09] slowly, you know, walk walk walk Nick
[36:11] through and be like, "Hey, you need to
[36:12] go do the Stormbreaker event. I know
[36:14] your reactions have degraded and have
[36:16] slowed down, but I'll come and help you
[36:17] a bit and we'll go through it together
[36:18] and I'll help you get the items you
[36:20] need." Honestly, and it's something to
[36:23] do with experience and, you know, the
[36:25] wisdom of years as opposed to youth and
[36:27] impetuousness. Got a [ __ ] few years
[36:29] there, aren't you, mate? That's your
[36:31] third one. So
[36:34] Elliot is absolutely right and I think
[36:35] it's important to
[36:37] discuss what we mean by value because
[36:40] something can have value to someone and
[36:41] it's nothing to do with UEC. So the
[36:44] mission rewards have value to people not
[36:46] because they're worth UEC.
[36:50] Sorry, I was just I was just thinking
[36:51] about how much better looking you are
[36:53] than Elliot. So I listen I know it.
[36:55] That's the main reason I'm salty. The
[36:58] other thing which is crazy is like I'm
[37:00] like 6'2 which means I'm like three foot
[37:03] taller than Elliot which is crazy. Go
[37:05] ahead. [ __ ] off. Go over there and stand
[37:07] next to him right now. Nick, go stand
[37:09] next to him right now. I swear to God
[37:11] I'll break your knee.
[37:13] See it.
[37:18] I'm kneeling. I was kneeling. I was a
[37:20] joke. You weren't kneeling that much.
[37:25] Goblin confirmed live. Let's Let's go.
[37:28] Listen, Goblin Gathering isn't named
[37:29] after me.
[37:32] I thought it was named after the Magic
[37:34] the Gathering card, but I didn't find
[37:35] out what it wasn't named after, and it's
[37:36] a good story. Um, Wiccolo has been a
[37:39] major new avenue for mission and event
[37:41] rewards this year. Where'd that come
[37:43] from, and how'd that come about?
[37:45] Um, so, uh, previously as I mentioned,
[37:48] you know, we we knew we wanted to do a
[37:49] content year and we wanted to make some
[37:51] really cool things for players, but we
[37:52] also wanted to make sure that we gave
[37:54] them more more reasons than this is just
[37:56] new content to go and engage with it.
[37:58] Um, we wanted to give specific rewards
[38:01] that are tied to content um, or tied to
[38:04] multiple pieces of content. Um, that
[38:07] means that players if they want these
[38:08] rewards, they kind of have to engage
[38:10] with a bunch of different different ways
[38:12] of gameplay. It's also nice because it
[38:13] might show players into gameplay that
[38:15] they're not really
[38:18] you used to playing. You know, I watched
[38:19] a really cool podcast with uh people
[38:21] when we first released Siege of Boris
[38:23] and they were saying how they was only
[38:24] ever um ship combat flyers. They'd never
[38:28] done FPS in in Star Citizen. And then
[38:30] when um when when we did Siege of
[38:32] Orison, they was like, "Well, let's
[38:33] check it out." and now they do a mix
[38:35] because they they had engaged with
[38:37] content for a purpose that was different
[38:40] to just I this is what I normally enjoy.
[38:42] Uh and it encouraged them to to check
[38:45] content out and play it more and more.
[38:47] So, we kind of use it like that because
[38:49] obviously not everyone's going to want
[38:50] to play the goblin gathering, you know,
[38:52] hauling missions because they're not
[38:53] really interested in hauling, but they
[38:54] might have a reward that they want to
[38:56] achieve. And by that, they might go,
[38:57] "Ah, I might try this out because I
[38:59] could just do thousands of these to hit
[39:01] this, but this one is more dangerous, so
[39:03] it's going to give me more points
[39:04] towards my overall goal. So, I'm going
[39:06] to sort of engage with it like that."
[39:08] Uh, as for where came from, uh, we're a
[39:12] space game. we should have aliens and
[39:13] ones that actually are sentient and talk
[39:15] to you even if it is broken English. Um,
[39:18] so, you know, when we was thinking about
[39:20] it, we, you know, we was like, we want
[39:21] some sort of like figure that's
[39:24] collecting oddities and is very
[39:26] mysterious and the original plan was
[39:28] that you wasn't going to find out that
[39:29] it was a Banu. We was going to have a
[39:31] broken sort of camera and it was going
[39:32] to take you time until you discovered
[39:34] who they was. But then we was like,
[39:36] we're hiding one of the coolest things.
[39:38] So, we was like, let's get him in there.
[39:39] Let's let's let's put some comms in
[39:41] there eventually and have him speaking
[39:43] to you and maybe even talking pure in
[39:45] Banu. Um so the people who understand
[39:48] Banu can understand it and the people
[39:49] who don't don't have some subtitles to
[39:51] read because yeah, it's another
[39:53] language. I don't understand it. I
[39:55] barely understand my language. I'm going
[39:57] to have a migraine by the end of this
[40:00] with everybody using the internal names
[40:02] for things.
[40:03] Wait, what did I say? You said goblin
[40:06] gathering like four times. Oh, right.
[40:08] Well, that's because It's all right. No,
[40:10] no, no. In my new role, I'm
[40:13] I don't really care. Let's just be real.
[40:15] Um, should we should we give the
[40:17] Stormbreaker name? We've already We've
[40:19] already done it. We've given like the
[40:21] last four names. You just haven't been
[40:23] paying attention. I don't think I said
[40:24] Apex again. No, no, that's somebody
[40:26] else. Somebody else said Ormageddon.
[40:28] Whatever. It's just you
[40:31] What I was going to ask? I thought what
[40:33] I thought you weren't going to do
[40:34] another live one Jared with Elliot cuz
[40:36] of all the I I thought we No, that was
[40:38] Le that was that was Laith just just
[40:44] never mind. Love you La but never again.
[40:49] Okay. Um so what are the limitations of
[40:51] this system? So, we know it's not
[40:53] precisely how we'd wanted it and there
[40:55] are some peculiarities with elevators
[40:57] and and uh uh uh the Wiklo favors and
[41:00] the RNG which is getting addressed in uh
[41:02] 421. Uh walk me through what's happening
[41:04] now and uh how we're making Wiccolo
[41:07] better in the future.
[41:09] Uh I'll break that down into three
[41:11] little bits because you mentioned a
[41:13] bunch. Uh freight elevators obviously
[41:16] have their issues. You know, we're not
[41:17] blind to it. We know about it. It is an
[41:19] incredibly complex system um because it
[41:21] touches so much kinds of things is you
[41:23] know it's got the whole thing that Jacob
[41:25] was on about before with the volumes and
[41:27] the fitting. You know you can have so
[41:28] much stuff on that and they're all
[41:30] different dimensions like it's a lot of
[41:32] stuff to figure out. So they they're
[41:33] actively working on it every single
[41:34] patch to try and make it as as good of
[41:36] an experience as can be. Um but we're
[41:39] working on stuff as well for uh the Wiko
[41:41] experience uh to make it better. So, one
[41:43] of the big things that I know is going
[41:44] to help a hell of a lot is um what we
[41:48] call like nested item turnins. So,
[41:50] essentially if you had a 1SU box and you
[41:53] put everything in that one SCU box. So,
[41:56] like I put in my 50 50 favors and I put
[41:58] in like 20 uh medals and I put on 10
[42:01] copion tooth and three pearls. I should
[42:04] then just be able to put that box on the
[42:06] freight elevator and send it down and it
[42:07] accepts it and it kind of completes it
[42:10] uh like that. Now, we don't currently
[42:12] have that. there's a bug like it should
[42:14] work but there's a bug that's stopping
[42:15] it from being worked and it's something
[42:16] we're actively looking to fix and
[42:19] that'll that'll improve the experience
[42:20] because instead of like like I say we're
[42:23] not blind to it. I I have to stand on
[42:25] that freight elevator as well and
[42:26] manually drop each item for a stack of
[42:29] 50. The problem is that we want to fix
[42:31] the bug and we don't just want to make
[42:33] the recipes easier to account for that
[42:35] problem because then it it completely
[42:36] devalues the reward at the end. Um, so
[42:40] working on that part of the experience.
[42:41] And another thing is what we call uh
[42:44] multilocation drop off. Um, this is
[42:47] essentially instead of having to go to a
[42:50] certain Wiccolo Emporium to do the
[42:52] mission when it's generated, we're going
[42:53] to be having it so that you can accept
[42:55] it and turn it in at any Wikileo
[42:57] location. So, say I need to get like 10
[43:00] pearls, 10 10 uh irradiated apex pearls,
[43:04] and I need to get, you know, four quasi
[43:07] grazer eggs, and I need to turn them in.
[43:09] And, you know, station thing is closer
[43:12] to the pyro jump point. So, I want to
[43:14] turn the pearls in there. And then the
[43:15] quasi spawn over here, and that's close
[43:17] to this station, so I want to turn it
[43:18] there. We're going to enable it
[43:20] eventually. So, you can do that. And
[43:22] what will happen is if you've deposited
[43:23] the pearls here and then you finish the
[43:25] eggs off in this other location, it
[43:27] doesn't matter where you put it,
[43:28] wherever you complete the recipe is
[43:30] where you'll be given the award, but you
[43:32] can drop them off at any location. This
[43:34] way you can choose exactly where you
[43:35] want to go and and finish the mission.
[43:38] Um, and when we get that tech, it won't
[43:40] just obviously come to to Wick. we will
[43:42] come to a bunch of our missions where we
[43:43] notice this is kind of like a uh a pain
[43:46] point of of right well I have to go all
[43:48] the way over here now and I don't want
[43:50] to um but that that should help that'll
[43:53] be the freight stuff favors uh favors
[43:56] are something we want to keep because
[43:58] they're um in law they're a
[44:00] representation of the Banu
[44:03] because they don't have they don't write
[44:04] stuff down they don't really have that
[44:06] history thing if you do work for me as
[44:09] and I'm a Banu I've got I won't remember
[44:11] that. So a favor is like a token that
[44:14] says, "Yeah, if I give you this, it
[44:16] means that I've done substantial amount
[44:18] of work for you." And then me as a banu,
[44:21] I'll go, "Okay, right. Well, I can't
[44:22] remember it, but because you have my
[44:24] favor cube, I will honor the deal, honor
[44:27] the agreement." Um, but favors also act
[44:30] as a purpose, which is uh stopping your
[44:32] items being deleted. Um, we have uh some
[44:36] technical limitations obviously in the
[44:38] game where certain amount of items in
[44:40] one zone uh can cause
[44:44] lag, frame drop, uh physics to freak
[44:47] out, all of these kinds of things. Um,
[44:50] and what we have is this density cleanup
[44:52] system that eventually when it violates
[44:54] a rule set, it starts starts cleaning
[44:57] them up. Um but because obviously we
[44:59] need the worth of the items but we have
[45:01] the limitation of too many items in one
[45:02] space causes problems. Uh favors are
[45:05] also used as a conversion method. So
[45:07] when we ask for you to trade in 50 karat
[45:10] for one favor it like I say it's a
[45:12] conversion instead of asking you to put
[45:14] 500 car down and 450 of them be deleted
[45:19] and you're like all my hard work no uh
[45:22] if you don't get a crash or whatever
[45:24] else. That's that's why the favors exist
[45:26] and they're going to continue existing
[45:27] because they're a really interesting
[45:28] piece of the law. Uh but the idea is
[45:31] that we'd be able to have
[45:33] more items in bulk when we can do that
[45:36] sort of box thing. So favors will stay
[45:37] but they'll kind of morph a little bit
[45:38] for how we use them. And then RNG
[45:44] RNG
[45:45] uh this is something obviously we've
[45:47] we've we've looked at for 4.2.1 and
[45:50] we've put in some fixes that play people
[45:51] have been playing. Um,
[45:54] we, you know, RNG in grinding is very
[45:57] typical for MMO. Um, and it's something
[45:59] obviously we want as well. You know, we
[46:01] want you to put effort because effort
[46:02] means the valuation of the things you
[46:04] get as a reward goes up. Uh, you've put
[46:07] your time into it.
[46:09] But the the point where um we've changed
[46:12] it was that the RNG was done a lot more
[46:15] on the reward side. So instead of going,
[46:18] I want this item and this is all the
[46:21] stuff I need to get for it, we would go,
[46:24] here's a list of a bunch of items you
[46:25] could possibly get if you give this
[46:27] stuff, which you know, randomizing the
[46:31] reward isn't as fun because then you've
[46:33] got all this work done. You go for the
[46:35] excitement of getting the reward and
[46:36] then it's like, hey, you got this and
[46:38] you're like, yeah, it's not what I
[46:39] wanted. Um, so we we've we've we've kind
[46:42] of changed where that where that is. Um,
[46:45] so what we want to do is is have you
[46:46] choose the rewards you want. Um, and
[46:50] then on the getting of the items is
[46:53] where we have the the the RNG. And it's
[46:56] something that uh me uh to Leman on
[46:59] systems design and the economy team uh
[47:00] Andre and Nick have been working on
[47:02] which is defining what that is. And
[47:04] we've we've basically split it into like
[47:06] three distinct categories. You have your
[47:08] core content items. These are items that
[47:10] you are guaranteed to kind of get while
[47:13] playing a um a piece of content. So an
[47:16] example of core content items would be
[47:18] karanite, right? You get karanite from
[47:21] doing the align and mine flow code name
[47:23] obagedon. Um then you have your content
[47:26] items. These are items that you that are
[47:29] not core to the experience but you will
[47:31] like you can find you can get. So an
[47:33] example of these would be the Ace
[47:35] Interceptor helmets and then the ones
[47:37] that help us with the the sort of the
[47:39] the RNG uh in a big way are the rare
[47:42] content items. These are things that you
[47:44] will find
[47:46] less are less likely to find. They still
[47:49] they still can be there but they they
[47:51] increase the time and help to add that
[47:53] sort of grind aspect to an MMO. So these
[47:56] are new these are some new things or
[47:58] things that already exist that we're
[47:59] kind of like injecting. So, for example,
[48:02] in 4.2.1 when you play and you do um I
[48:07] was going to say all a line of mine, uh
[48:09] you will find pure caronite now in the
[48:12] uh cave. It's a new new type of
[48:14] resource. Um but you're going to find a
[48:16] hell of a lot less of them and you're
[48:18] going to notice that some of the recipes
[48:19] now require that. You know, if you're
[48:21] doing the uh Stormbreaker, there's the
[48:23] uh grade AAA uh Radiate Pearl. That's
[48:27] going to be a rare content item. We've
[48:29] got a bunch of war badges uh for ship
[48:32] battles that you can find on the Ace
[48:35] pilots, but they have a chance to spawn.
[48:37] You can find them in Luke's Luke's loot
[48:40] boxes. Uh but they have a rare chance to
[48:42] spawn. Uh and this is kind of like how
[48:44] we're looking to to keep a little bit of
[48:47] the RNG and keep a little bit of the
[48:48] grind, but you decide up front what is
[48:52] your reward you want. Um, so you don't
[48:54] have to end up with like 50 like
[48:57] terrapins from Wiccolo all just because
[49:00] you wanted a completely different ship.
[49:03] Uh, yeah.
[49:08] Listen, it was a long question. What do
[49:10] you want me to do?
[49:13] No, no, it was great. Great answer,
[49:14] Elliot. Uh, you're playing with dolls.
[49:16] What are you doing? I want to read two
[49:18] comments from the chat. Uh, uh, first
[49:21] was from St. Deacon. Uh, this was this
[49:24] was caught by the automod, so I want to
[49:25] make sure this gets out there. Uh, nine
[49:28] unicorn horns, my virginity, my eldest
[49:31] child, and 900 air 900 hairs from a
[49:34] tick's butt.
[49:36] What do you think, Nick? I'm I'm good
[49:37] with that. You want to put that as a
[49:38] recipe? How does he have his virginity?
[49:40] I think that's reasonable. I'm not sure
[49:41] which one of those is I'm not sure which
[49:43] one is the rare content on that one. Is
[49:44] it the Is it the the the butt ticks? I
[49:47] can't I'm not sure. Definitely not the
[49:48] virginity for sure. No, he's definitely
[49:49] still got that one. But
[49:53] uh and then another comment from
[49:55] Bluesmx. I love Elliot Malpi. I could
[49:58] listen to him for hours. Please continue
[50:01] talking about what you're talking about,
[50:02] Alec Malpi, and don't change the topic
[50:04] at all. He's being very uh gracious and
[50:08] uh good in the chat. Um all right, so
[50:12] our last pillar here, uh Declan, you've
[50:15] been waiting patiently and hanging out.
[50:17] Uh it's your time, baby. It's your time
[50:19] uh stuff you make and storing it. Now,
[50:21] obviously, we're not going to go too far
[50:23] into crafting as we get closer to the
[50:25] actual imp implementation of crafting
[50:27] the PU. There'll be there'll be ISC's
[50:29] and there'll be and and stuff like that.
[50:31] Um but because it is yet another way
[50:33] that people know we're going to get some
[50:35] stuff. I do want to touch on it here. Um
[50:38] how does all these other avenues of item
[50:43] acquisition affect what you're doing on
[50:45] crafting?
[50:47] Uh it's big with crafting. God knows how
[50:51] many things we're going to uh inject as
[50:52] rewards. There's thousands of
[50:54] blueprints, hundreds of materials. So we
[50:57] really need all of this available to us
[50:59] so we can kind of dish it out into
[51:01] various parts of the game. Some places
[51:02] where it's more difficult, some places
[51:04] where it's easier, unique resources,
[51:06] different systems. So uh it's big
[51:08] because the whole gathering aspect of
[51:11] crafting is the the foundation layer. So
[51:14] it's kind of like the biggest and then
[51:15] the pyramid refining and then crafting
[51:17] at the very top. So it's big big.
[51:24] Yeah. So, all of the all of the pieces
[51:26] that we've talked about so far, uh all
[51:29] of the work that uh Luke, Nick, Andre,
[51:32] Elliot is is doing, all of that content
[51:35] is things that we'll be able to add
[51:38] blueprints to, add crafting materials
[51:40] to, and in uh loot boxes, potentially
[51:44] even you might find some pre-crafted
[51:46] loot, but we'll we'll see about that. I
[51:50] know there's some conversation about
[51:51] separating uh gear and cosmetics deck.
[51:55] What what can you tell us? Uh yes. So I
[51:59] suppose most people know right now the
[52:01] way we have to do cosmetics and gear at
[52:03] the moment like your armors and your
[52:04] guns is a bit annoying because it's like
[52:07] bound to the item rather than being like
[52:09] a ship paint where you can swap it
[52:10] around. So, we are working to separate
[52:13] out the cosmetics from the gear. You
[52:15] take it to a crafting terminal and be
[52:17] like, I want my gun to be whatever skin
[52:19] I have available for it. And it won't be
[52:21] a physicalized item either. The paint
[52:23] won't be physicalized. Ships eventually
[52:25] transitioning to not be physicalized
[52:27] either. The paint aspect of them. Uh
[52:30] yeah, that'll be an item. Yeah. And
[52:32] something we'll hear more about
[52:33] obviously when we get closer to the
[52:36] stuff. Um
[52:38] because crafting is, you know, still a
[52:40] ways in the future and whatnot. Um all
[52:42] of this stuff, and this is really the
[52:45] reason I've I've invited you here in
[52:46] case I don't know if you were know this
[52:48] or not. All this stuff, all this way of
[52:50] getting stuff, all this way of acquiring
[52:52] stuff. Um
[52:55] I got to ask you about the inventory
[52:56] system.
[52:58] Yeah. Help,
[53:00] help, help, Declan, help. There is a
[53:04] stuff done in stack right stuff. It's I
[53:07] gota just just help what can you what
[53:10] can you what can you what can you tell
[53:10] us? We we fix it. Well, I'm personally
[53:14] not fixing it. However, the talented
[53:16] folks in Montreal are working on a
[53:18] rework at the moment. So, I will share
[53:21] some concept UI of what being worked on
[53:23] and we can talk through it. Hang on. I
[53:27] don't need to zoom much. So, here we go.
[53:29] So, we're looking at some uh concept UI
[53:32] here. Uh, obviously you can see there's
[53:33] a visual facelift, but um, kind of the
[53:36] most interesting aspect to me isn't
[53:38] super obvious straight away, and that is
[53:40] that you will be able to access um,
[53:42] other inventories that are nearby to you
[53:44] within proximity. So, if we start
[53:47] drawing, we imagine we've got our
[53:49] storage box over here. And then we kill
[53:54] the guy. Yeah, thank you. We we kill the
[53:56] guy. Here he is. He's on the floor. So
[54:00] he would be accessible as one of the
[54:02] tabs up here. And then the inventory box
[54:06] would be over here. Same on the other
[54:08] side. And so when you press I to access
[54:11] the inventory, you can then access the
[54:13] dead body's inventory, access your
[54:15] storage box. You can start moving stuff
[54:16] around without having to directly go up
[54:18] to the body, go to the box, press F. So
[54:20] it's much much quicker to kind of get in
[54:23] there and start looting.
[54:26] Uh we'll just get rid of all this.
[54:29] If we focus in on one of the panels,
[54:33] you can see it's called personal all.
[54:35] That's just kind of the the default
[54:37] personal would be on the left and it's
[54:39] all because it's showing everything that
[54:40] is stored on your person at that moment.
[54:43] If you wanted to see what is in your
[54:44] backpack in particular, you have the
[54:46] side tabs and then we have a search
[54:50] function which has been added in. If you
[54:52] were to click this, a search box would
[54:53] come out over here and you can search
[54:55] the item that you want. You have your
[54:58] select all, your capacity, you have your
[55:00] filters. Uh these filters kind of
[55:01] similar to freight elevator where you
[55:03] have the drop-own box with the
[55:05] subcategories here. And we're working on
[55:07] these filters being multi-purpose. What
[55:09] I mean by that is at the moment filters,
[55:12] you click them once and it means I want
[55:13] to see these items. If you were to click
[55:15] them twice, it would hide that category
[55:17] of item. There's a lot of people with
[55:20] freight elevators full of decorations
[55:21] they don't really care about at the
[55:23] time. So they can just hide all the
[55:24] decorations if they want to. uh clear
[55:27] filters, sorting options when crafting
[55:29] comes in. This will be big because you
[55:30] want to sort by um quality items here,
[55:34] that kind of stuff. And then tucked away
[55:36] in the corner is stack all. So that's a
[55:38] nice quality of life addition as well.
[55:44] Just just a nice little addition. Just a
[55:46] nice little addition. Uh there he is. Uh
[55:48] anything about anything about maybe
[55:50] getting to name our boxes, label our
[55:53] boxes? Yes. So this is your commodity
[55:56] box and then this would be like a
[55:58] backpack and one of the options will be
[56:00] to right click and just rename them. So
[56:02] you could say like oh this is my box
[56:05] with high quality channel lighting
[56:07] whatever as you you've given boring
[56:09] gamer salty Mike and space tomato so
[56:13] much content for the next week. Bro,
[56:15] we're not done. We've got tool tips and
[56:17] everything. Oh my god. Here he goes. So,
[56:19] as you can see, looking at the
[56:22] inventory, everything's a square now.
[56:23] Instead of it being a mix of squares and
[56:25] long rectangles, that'll also be applied
[56:27] to the freight elevator. So, the ship
[56:28] guns won't take up half the screen. You
[56:30] get a lot more information uh available
[56:33] to you. We have the equipment panel
[56:35] where I know I just said they weren't
[56:37] rex angles. These ones are, but regular
[56:39] weapons aren't. So, I'm technically
[56:42] true, but also li. Uh you can equip your
[56:46] attachments super easy here. Uh the one,
[56:48] two, three is basically like the slot
[56:50] they're in. And then again, if you were
[56:52] to look at your ammunition, you can see
[56:53] which weapon it's viable with. If we go
[56:56] over to the character, uh we have all
[56:59] the slots. The slots would be shown by
[57:00] default here, and they're contextual.
[57:02] So, if you want to quickly see all the
[57:04] backpacks you have available to you if
[57:06] you were to click the backpack slots,
[57:08] then the various inventory would filter
[57:09] to only show the backpacks.
[57:12] Um,
[57:14] yep. We have the new tool tips, which
[57:18] very nice. Rather than being text, we
[57:19] have bars. Um, you've got a bit of info
[57:22] here. When we have crafting, then the
[57:23] crafting the the person who made it
[57:25] would replace the manufacturer. So, it's
[57:27] crafted by whoever it was crafted by.
[57:30] Uh, we have taken into consideration
[57:32] wear and tear with integrity and
[57:33] durability. And I suppose you know
[57:36] there's more than three stats on a
[57:38] weapon. So, if you to right click and
[57:39] details, you get the full view, the
[57:41] scroll bar, the attachments,
[57:43] description, which can be expanded. And
[57:45] then if you
[57:47] [Music]
[57:48] if you hover onto a item of the same
[57:50] type, you'll see the comparison stats as
[57:52] well.
[57:54] Um, you can make the icons bigger or
[57:58] smaller. If you are uh if you got bad
[58:00] eyes, you can make them a bit bigger. Uh
[58:02] Elliot, don't make a joke about Nick.
[58:06] Um the thumbnails as well, obviously
[58:09] there's a problem where sometimes they
[58:10] don't load or sometimes they appear as
[58:12] far that's been worked on as well. We'll
[58:14] get that fixed.
[58:17] I think that's it. It's probably not
[58:18] everything. Um there's a lot of stuff
[58:21] that's going on. Yeah, it's not
[58:23] everything. We haven't tal we haven't
[58:24] talked about the the imprinting and the
[58:26] and the and the stuff with item recovery
[58:28] v2 and stuff like that. Uh but again, we
[58:32] just wanted to share uh a bit about the
[58:35] at least the concept for the upcoming
[58:36] inventory uh revamp. Uh for folks in the
[58:39] chats that are saying 2026, 2027, um
[58:43] possibly I'm not going to not going to
[58:44] BS you here. It's not it's not in active
[58:46] development right now. It's just like
[58:48] it's in the concept phase and being
[58:49] specked out and and the work is being uh
[58:52] figured out and then it will be
[58:53] scheduled and stuff like this. So I
[58:54] can't speak none of us can speak about
[58:55] when it will be developed or been be
[58:57] delivered rather but that is the
[58:59] direction uh we want to go in this
[59:01] moment and I thought it was super cool
[59:03] and I thought it was super exciting and
[59:04] at the end of a conversation about all
[59:07] the things you can get in the verse and
[59:09] how you get them it just made sense to
[59:10] me to to cap it off with a look at at
[59:13] least how the future of managing that
[59:15] stuff uh will potentially look. Um so
[59:18] yeah with that folks we made it. We're
[59:20] at the end. Uh, Andre, Nick, uh, Declan,
[59:25] uh, Elliot, uh, Luke, um, and, um, um,
[59:29] Jacob. Thank you, everybody.
[59:32] Thank you, Jud. Thank you. Thank you for
[59:34] Thank you for hanging out. And, and
[59:36] shout out to Connor who wanted to be
[59:38] here, but because we changed the date on
[59:40] him, he couldn't be here. Uh, he wanted
[59:42] to be here, but he's there. Um, uh,
[59:45] thank you so much. Uh, also, I got a I
[59:47] got a shout out. So, there's a thing
[59:48] before I let uh the viewers go. I got to
[59:50] bring it up here because I didn't look
[59:51] at it ahead of time. There is a
[59:55] Oh, what chat was it in?
[59:58] Is it in your chat or my chat? There's a
[59:59] thing called Quantum Vegas. Uh it's
[1:00:02] happening on on Saturday, July 12th. Uh
[1:00:04] it's a big community organized Star
[1:00:06] Citizen event like other ones like BCON
[1:00:09] in Belgium or Con42 in in Germany. Um,
[1:00:12] uh, it's, uh, we're in attendance on
[1:00:15] July 12th is Sean Tracy, uh, Sandy
[1:00:18] Roberts, uh, Tyler Wicken, uh, Galaska,
[1:00:21] our social media person. Um, there's
[1:00:22] going to be panels and contests and a
[1:00:24] bunch of giveaways and a bunch of stuff
[1:00:26] that you can get. So, if you're if
[1:00:27] you're in the Vegas area or at least the
[1:00:30] Pacific Southwest, and you can attend.
[1:00:32] That's on July 2nd, and you can check
[1:00:34] that out. Uh, just search for quantum
[1:00:36] vegas.space.
[1:00:39] They had a space thing. um and for
[1:00:41] details on that and that's uh July 12th.
[1:00:43] Um as for me, uh that's it for this
[1:00:46] week's show. Uh come back next Thursday.
[1:00:49] Uh it's a it's a behind the ships uh
[1:00:51] episode dedicated to um
[1:01:00] something I've been waiting for for a
[1:01:01] long time. No, it's not the jalapy. Uh
[1:01:04] it's it's it's something it's something
[1:01:05] else. uh just because I know people are
[1:01:07] gonna think that's but but I it's it's
[1:01:09] it's been a ship that's near and dear to
[1:01:11] my heart and and it's coming to the
[1:01:13] verse uh uh real soon. So check that out
[1:01:15] next week and then of course we'll be
[1:01:17] back. A lot of folks had questions about
[1:01:19] uh the the new event that's currently
[1:01:20] testing on PTU. We have an ISC dedicated
[1:01:23] entirely to that and how the rewards
[1:01:25] work and how you can get all that stuff.
[1:01:26] That's coming uh in two weeks after
[1:01:27] that. So So go play it. Put some bugs in
[1:01:30] for me, please. Oh yeah, I need them.
[1:01:32] Yes, but if you're on PG now, play it.
[1:01:34] Uh Elliot's work is terrible and he
[1:01:36] needs as much knocking on the pipes as
[1:01:39] possible to to all these other people by
[1:01:43] model. So if it's terrible, it's not me.
[1:01:46] It's it's it's it needs it needs some
[1:01:48] play testing. Go to the PTU. Exactly. He
[1:01:50] didn't have his glasses on when he was
[1:01:51] doing the
[1:01:53] I had it I had the screen really big.
[1:01:56] Somebody somebody in the chat said, "Do
[1:01:57] you remember when used to be
[1:01:59] professional?" And I'm like, "No,
[1:02:02] I've for every single remember the
[1:02:04] summer show. Was it the summer show or
[1:02:05] the Christmas one? Which one was it,
[1:02:06] Jared?
[1:02:08] I don't know what you're talking about."
[1:02:12] We don't talk about the anniversary
[1:02:15] show.
[1:02:19] I hope you're playing Hello Darkness, my
[1:02:20] old friend, right there. Do we not have
[1:02:22] that queued up? No. All right, so that's
[1:02:24] it, everybody. Uh, thanks for watching.
[1:02:26] Thanks for hanging out. Uh, jump on to
[1:02:28] Pichu and test if you can. Uh it helps
[1:02:30] us uh release these things every single
[1:02:31] month. And uh come back for uh BTS next
[1:02:34] Thursday uh for a pretty pretty pretty
[1:02:37] pretty pretty pretty pretty pretty
[1:02:37] pretty pretty spaceship. All right. Uh
[1:02:40] thanks. Bye.

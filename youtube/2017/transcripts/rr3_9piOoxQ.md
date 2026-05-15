# Star Citizen: Around the Verse - Legacy Armor Update (Part 2)

**Video:** https://www.youtube.com/watch?v=rr3_9piOoxQ
**Date:** 2017-10-27
**Duration:** 40:27

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:21] citizen's ongoing development I'm sandy
[00:23] Gardner and I'm for Stefan
[00:25] tomorrow is citizencon 2947 our annual
[00:29] celebration of all things star citizen
[00:31] where we shine the spotlight on a lot of
[00:33] interesting content but we've also got
[00:35] plenty of eye candy to show you today
[00:37] this episode features part 2 of our look
[00:40] at the changes and improvements coming
[00:42] to the games
[00:42] legacy armor but before that let's take
[00:45] a look at what bugs and blockers the
[00:47] development team conquered this week in
[00:49] bring down welcome back to burn down our
[00:53] weekly show dedicated to reviewing
[00:55] progress on the release of star citizen
[00:57] alpha 3.0 last week we are at 20
[01:00] remaining must fix issues to close down
[01:02] our next game loop of shopping cargo and
[01:04] commodity trading let's jump right in
[01:07] and see how the team is progressing
[01:10] well the absolute priority for this week
[01:12] is usually as keep the build stable be
[01:16] able to add more feature work to it we
[01:20] still have like a bunch of features you
[01:21] want to closing out but the priority is
[01:24] obviously get the shopping loop nice and
[01:27] still keep things which is which which
[01:29] are running well at the moment like
[01:31] keeps optimization to keep the
[01:32] performance good keep the stability and
[01:37] half the things you already have in like
[01:39] maze main mainly the quantum travel and
[01:42] the traversal between the planets and
[01:43] everything still work in a functional
[01:45] state
[01:47] bad news for this morning was that um QA
[01:50] are flagged 100% server crash which
[01:52] George is actually looking into so he's
[01:54] doing that for the next hour in a bit
[01:55] but hopefully looks to get a fix within
[01:58] the next hour or so anyway George is
[02:00] currently working on an optimization in
[02:02] the network code a lot of this has
[02:04] already gone in but had to be split up
[02:06] because it's such a big change into a
[02:08] lot of different change lists many of
[02:12] these have gone in and have settled and
[02:13] been fine but now that we get into the
[02:16] later ones some of them causing some
[02:18] issues so if one goes in and causes some
[02:20] issues in a build it just means we yank
[02:22] it back out fix it chuck it back in see
[02:25] if that works
[02:27] this is something that we've got to do
[02:28] with network changes because they're
[02:31] quite big changes to happen and it's all
[02:36] happening in the background as well so
[02:37] it's not something that's easily visual
[02:39] to testers but what we'll do is keep
[02:44] doing that until stuff settles and and
[02:46] fits properly and then we can get the
[02:48] rest of it in and once all of those
[02:49] parts are in then we'll start seeing the
[02:51] difference from an optimization point of
[02:53] view there's also the other is being
[03:19] that like very hard to reproduce
[03:23] it's like random and people debate
[03:26] basically how people work on it is right
[03:28] now they look at the logic of the code
[03:31] and they try to guess what's happening
[03:34] and then they do fix all that then and
[03:36] obviously it doesn't work and it's just
[03:39] about reproduce so we might need QA to
[03:43] help them somehow like connect to the
[03:45] local service or whatever yeah it's just
[03:47] it's just a hard hard issue to fix that
[03:50] was the disk error disconnect 3007 so
[03:55] that's the one of the more common ones
[03:57] it was Chad
[03:58] they put
[03:59] final fixin but it was due to the
[04:01] information that Clive's team was able
[04:02] to get for him so right now I'm looking
[04:05] at a disconnect that happens for clients
[04:08] when joining a server and it's a
[04:11] disconnect that happens because the zone
[04:13] host for a spawning entity cannot be
[04:16] found on the client the root of the
[04:19] issue is because of something called the
[04:22] ownership hierarchy for this entity
[04:24] ownership is a way that we can establish
[04:27] some parent and child relationship that
[04:29] requires both the entities in question
[04:32] to be present so the change that I put
[04:34] in was to enforce on item port attaching
[04:37] and detaching that the zone host was
[04:41] always correctly established for the
[04:43] entities in question unfortunately it
[04:45] didn't quite fix the problem and so
[04:47] right now I'm trying to figure out what
[04:49] the situation is where this still is not
[04:51] enough however I think we're close to
[04:54] solving this for Advocaat II and I look
[04:59] forward to killing this bug off because
[05:00] it's being lying around on several
[05:02] engineers for like three weeks now along
[05:06] with the fixes network has been doing
[05:08] we've had the code team over in Germany
[05:11] have been and debugging a lot of the
[05:14] court there that's been coming back with
[05:16] me of K and Christopher Baltar's
[05:18] actually got a list of all the worst
[05:20] offenders put together now and they have
[05:23] put them all into our booking system and
[05:25] they're working through getting all
[05:27] solid as well so the culling build
[05:29] should have improved performance because
[05:31] the feet that the information they got
[05:33] back was really good for them they were
[05:35] able to get a lot of a lot of useful
[05:37] information there and then one major
[05:39] focus was network networking sweat which
[05:44] we were bound network across was part
[05:46] multi sweaters part optimized really
[05:49] soon and other large optimizations going
[05:51] on to paralyze even more of the networks
[05:53] but to possess performance that we
[05:55] should we no longer network bound and 24
[05:58] player plus situation which leaves us to
[06:02] two other things where we which badly
[06:04] bound our performance as most of the
[06:06] riccati have seen we have our many
[06:09] characters on the space stations we have
[06:11] a cost to update
[06:13] and the best given of the focus is to
[06:16] optimize update for characters one thing
[06:19] I will do this one of the components
[06:21] which is related to or 3 optimizes one
[06:23] other one was paralyzed besides us we
[06:28] did some low-level optimizations to the
[06:30] area systems because everything is per
[06:33] se I caught but everything more general
[06:35] system and before we kept an update to
[06:38] do culling against the areas for each of
[06:41] these areas which wasn't really
[06:44] necessary because we don't use many of
[06:46] these areas for actually Spade searches
[06:49] this is no fixed will only keep this
[06:51] actually updated for area 3 actually
[06:55] going to search against on the really
[06:57] full server I think the values for weeks
[07:01] ago the worst server captures I could
[07:03] see where one two hundred millisecond
[07:04] frames and more which roughly is five of
[07:06] peers now we are around 80 to 90
[07:09] milliseconds which is 12 to 15 it's a
[07:13] lot to poof another one side on the
[07:14] other side it's not 30
[07:17] so we are going to continue look into
[07:20] this for the antibody we need to kind of
[07:26] define which kind of fixes we we would
[07:30] need to only test and of okati so off
[07:33] the top of my head we have performance
[07:35] improvements and then we have server
[07:37] crash fixes I agree with Justin's point
[07:40] that you know the whole purpose of their
[07:41] counties to test performance and server
[07:43] crash or performance issues and
[07:44] stability right so do we feel like these
[07:48] two server crashes are worth a bit well
[07:51] it's also to test feedback as well and I
[07:53] do want to just verify that point but
[07:56] primarily I would say that the server
[07:58] crashes of network and stability is the
[08:00] key focus but it is to also get that
[08:03] kind of feedback on the features yeah
[08:05] but obviously if you don't have new
[08:07] features yes no totally but I think at
[08:10] the moment beyond someone
[08:11] kind of push for the waffles right so
[08:14] that needs to be tested as well I guess
[08:16] when we looked at it with Paul and and
[08:19] Todd them the guys today what we feel
[08:22] like we need to do is actually just have
[08:24] these major three categories and that is
[08:27] the cargo system as a whole
[08:29] commodity commodities and the shopping
[08:32] actual of those commodities and
[08:34] purchasing of those and then the
[08:36] shopping of concentrating on physical
[08:39] items and the actual shop polish if you
[08:41] split them into those categories then at
[08:43] least we've got the team is focused on
[08:45] those specific Sprint's the idea though
[08:47] is also with the gameplay review that we
[08:50] have and this little stand-ups that
[08:52] we're going to do 10 to 15 minutes per
[08:54] day they talk about all three of those
[08:57] Sprint's the ones that I've just pasted
[08:58] in the chat and then on top of it what
[09:00] we have is those Sprint's still being
[09:02] active by the relevant members and
[09:04] owners of that so what it will be is
[09:06] we'll have those three sprints in this
[09:09] schedule and it means that we have to
[09:11] very quickly today retrofit the existing
[09:15] ones that may not be appropriate to what
[09:17] we've got currently and then get the
[09:19] dates adjusted the wagon stick around
[09:21] tonight Todd Paul to be able to have
[09:24] that conversation with Jake straightaway
[09:25] and then with Mark White and then we get
[09:28] that adjusted and then I think that
[09:29] that's the way that you know exactly
[09:31] what you want for that cargo commodity
[09:34] shopping for physical shops loop all the
[09:37] way around
[09:39] the next is a so this is an issue last
[10:24] time so today we saw once again that
[10:29] there are no items in the shops or in
[10:32] the kiosks in our sipping build but this
[10:36] is not it is a new bug but its same
[10:39] symptoms you see this popping up a lot
[10:41] and it's a different reason every time
[10:43] or it's just oh no today in our shops
[10:47] and it's a good example of how a change
[10:51] it's totally unrelated to shops could
[10:53] cause this issue so what happened was
[10:57] there was an edit to our JSON parser in
[11:00] diffusion which would change the
[11:04] serialization from regular
[11:05] floating-point numbers to double's
[11:07] increase in the precision of our our
[11:10] fractional numbers and what this did was
[11:14] the message that we got from the
[11:15] shopping service for all the inventory
[11:17] for all the shops instead of sending us
[11:20] integers that was expected it started
[11:23] sending us doubles or floating-point
[11:25] numbers and so those numbers were not
[11:28] integers so the shop didn't know what to
[11:30] do with them so said oh every item just
[11:33] has a stock and a price and a buying
[11:35] price of zero and if there's zero stock
[11:38] the shop doesn't spawn any of these
[11:40] items on the racks so even though every
[11:43] shop knew about the correct inventory
[11:45] none of them got spawned so totally
[11:48] unrelated change in the JSON parser just
[11:50] broke all shops one of the bugs I worked
[11:52] on today
[11:53] had to do with the image being oversized
[11:55] in the list so as you can see as you
[12:00] scroll down the list the image will
[12:03] become oversized as new items come into
[12:07] view and the issue was is that because
[12:11] our list is pooled meaning that as you
[12:14] scroll down the same number of items on
[12:17] screen remains the same it doesn't
[12:19] overflow so what it basically reuses the
[12:24] display object from the top and shifts
[12:28] that down to the bottom as you scroll so
[12:30] what we needed to do was to just
[12:33] basically reset the dimensions of the
[12:34] image each time new data has been
[12:37] injected to that display object and so
[12:41] yeah and we fixed that it was pretty
[12:44] easy pretty straightforward
[12:46] yesterday I submitted the first part of
[12:51] the commodity kiosk chip status that
[12:58] field so that they could in the UI track
[13:01] it to search destroyed or at the same
[13:02] location or if it's compact if it
[13:05] doesn't hold cargo at all oh if
[13:10] insurance is currently being trained on
[13:11] it such that it couldn't be used so sign
[13:14] will take these and use them so they
[13:16] could gray out things in the demonic ets
[13:19] like ships that you can select at that
[13:20] time the buck we're talking about is
[13:22] that airlock suddenly didn't work
[13:23] anymore
[13:24] reason for that was so you could still
[13:28] approach airlock go to the panel and see
[13:30] in a direction the thing was the
[13:32] localization string for that airlock was
[13:34] missing because in the initial setup we
[13:36] used an interaction string from squadron
[13:38] 42 but that gets not put into shipping
[13:41] bills which means it works fine an
[13:44] editor it works final internal testing
[13:46] but once it gets to shipping bills for
[13:48] three or two advocaat e it doesn't work
[13:50] anymore
[13:50] took us a moment to track that down but
[13:53] it was basically an easy fix just adding
[13:54] a new localization string but yeah and
[13:57] the first moment everyone panicked about
[13:59] likewise isn't working it should but
[14:01] yeah in a thought essentially ignores
[14:03] interactions which have no localization
[14:05] string attached to them so we've been
[14:08] focusing on closing out cargo
[14:11] commodities in physical shopping last
[14:14] night we did a review of the physical
[14:16] shopping called out some new issues that
[14:18] will need to get fixed then from there
[14:21] we've we had done previous reviews of
[14:23] cargo as well as the commodities the
[14:27] guys have been working through that and
[14:29] say it's almost ready for a director
[14:31] review so I will be reviewing that
[14:33] ideally either tomorrow or on Monday and
[14:36] then those things should be good to go
[14:37] obviously I'd try to play the game every
[14:39] single day we're constantly looking at
[14:42] the game loops so for us it's flying
[14:44] doing missions going spending that money
[14:47] that you've you've just hardly you've
[14:49] just earned and then upgrading your ship
[14:51] upgrading you're your own personal armor
[14:54] weapons so and so forth so that's that's
[14:57] really what we've been focusing on
[14:59] the mission so you I think are in a very
[15:01] good spot and then now it's getting
[15:05] shopping and getting not to feel rights
[15:06] and with missions we'll go through and
[15:09] we'll do some final tweaks but the UI is
[15:11] there and then it's making sure that
[15:13] item 2.0 and the ships and the way that
[15:15] those things feel is is right so
[15:19] everything's starting to close down and
[15:21] we're getting to a point where we are
[15:24] seeing the light at than the tunnel
[15:26] we've made solid forward momentum on
[15:28] many areas this week including improved
[15:30] load times and performance we fix
[15:32] numerous disconnection issues and
[15:34] completed several items for purchasing
[15:36] and utilizing inventory at the time of
[15:39] filming this we're at 16 issues which
[15:41] has been identified as three blockers
[15:43] seven criticals three highs and three
[15:45] moderates now next week we'll have a
[15:47] revised production report that
[15:49] highlights the remaining features that
[15:51] need completing before we push to a
[15:52] wider PTU and then full live release so
[15:56] come back and check that out here on
[15:57] burn down our production schedule report
[16:00] is updated every single week so head to
[16:02] our website for a more detailed look at
[16:05] all of our ongoing work and last week in
[16:09] part one of our feature we shot off some
[16:11] of the changes coming to the legacy
[16:12] outlaw armor in part two we explore the
[16:16] improvements to the marine armor set
[16:18] this redesign was essential to make the
[16:20] marine armor more modular and work with
[16:23] the updated male based body these
[16:25] changes also allowed the character team
[16:27] to bring the marine armor in line with
[16:29] our current standards let's take a look
[16:32] at the second part of our feature on
[16:34] legacy armor
[16:44] hi my name is Jeremiah a senior concept
[16:47] artists here of cloud Imperium games of
[16:49] the Los Angeles studio last week we
[16:51] briefly talked about the light medium
[16:53] and heavy outlaw legacy armors we also
[16:56] talked about designing around the
[16:57] different zones of the character the
[16:59] character pipeline and also the
[17:01] different usage of materials this week
[17:03] we put the spotlight on the light medium
[17:05] and heavy marine legacy armors and much
[17:08] much more so let's take a look so the
[17:11] Marines are a kind of a different
[17:12] challenge for us the outlaws are easy to
[17:15] redesign because we're just basically
[17:16] replacing them with something new
[17:18] whereas the Marines are a different
[17:20] challenge because we already have
[17:22] Marines now currently you can play with
[17:24] light medium and heavy c.d.s Marines and
[17:26] that they look great and they're super
[17:28] fun but now we have these old Marines
[17:32] that we need to put into the game and
[17:34] that's just kind of awkward so why we
[17:36] why would we even do them at that point
[17:37] if we've kind of already redone them it
[17:40] would be a question that you might ask
[17:41] with the old armor a lot of the legacy
[17:44] assets are not made to be modular to be
[17:47] able to fit to our new updated male base
[17:50] body so with new legacy medium marine
[17:54] you can now wear it
[17:55] among other armor sets so the chest
[17:58] piece will be able to fit with other leg
[18:00] armor pieces the gauntlets and the
[18:02] Greaves will be able to fit onto the new
[18:03] male body and be able to also be modular
[18:07] with other pieces from different armor
[18:09] sets and the reason is we want to
[18:12] redesign them for the things that's the
[18:13] number one reason we want to do it but
[18:15] also we found some fun lure reasons to
[18:18] to redesign them and so I think one of
[18:20] the my favorite things about redoing
[18:21] them is that essentially we're using the
[18:23] term legacy or history as being
[18:25] historical so the light medium and heavy
[18:30] legacy Marines are actually older models
[18:33] of the current marine armor that you're
[18:35] playing with now and I think that's a
[18:37] fun way to build this into the lore for
[18:39] the players as well it adds a lot of fun
[18:41] elements for gameplay as well so maybe
[18:43] they could be cheaper maybe they could
[18:45] be to have different types of stats you
[18:48] know it also lets us play with different
[18:49] shape languages the new Marines are
[18:51] super slick and they
[18:52] ones are a bit more chunky a bit more
[18:54] different and they start playing with
[18:56] different types of materials so they're
[18:58] playing you know the new Marines are a
[18:59] lot about lots of metal lots of coverage
[19:01] and that kind of stuff really high-tech
[19:03] and the older Marines have lots of
[19:05] different types of fabrics in them so
[19:08] maybe there's more leathers or things
[19:09] that it looked like padded leathers more
[19:11] synthetics and fabrics and just as
[19:13] they've advanced their technology
[19:15] they've also enhanced their look one of
[19:18] the big differences of working on the
[19:21] Outlawz versus the marine stuff is that
[19:23] the marine stuff is really all from one
[19:24] group right there the Marines one of the
[19:27] things that we've done differently with
[19:28] the Marines as well is we haven't
[19:30] necessarily started from a concept
[19:32] painting a lot of the time concept art
[19:34] you starts from a 2d painting or even a
[19:36] 3d sculpt a concept sculpt you might
[19:38] call it and you kind of go from there
[19:41] with the legacy Marines we already have
[19:45] a look for the future and we already had
[19:47] a look for what they looked like
[19:48] the only guideline I had was something
[19:49] that already existed that we couldn't
[19:51] just reuse because they had to be
[19:52] changed so the challenge with that was
[19:54] kind of becoming a concept artist on the
[19:58] fly as I was creating the assets so
[20:00] working with Jeremiah a lot back and
[20:02] forth we kind of slowly built up the
[20:05] style of what the new legacy media
[20:07] marine armor would be from what we had
[20:10] to look at which was the in-game model
[20:12] of the medium marine asset we had to
[20:16] just concept it in 3d as we're building
[20:19] the asset so that can take a lot more
[20:21] time because when you're going off a
[20:23] concept you have a one-to-one a
[20:26] reference of what you need to build but
[20:28] with having an old piece of art you have
[20:33] to kind of reimagine what that piece is
[20:36] gonna look like so the process was for
[20:38] me is to first pull in what assets we
[20:41] have for the old medium legacy armor
[20:45] kind of referencing where they were
[20:46] trying to go with it what I can kind of
[20:48] retain in the new design and then from
[20:52] taking that design I just kind of throw
[20:55] in the new male base and start kind of
[20:59] like shifting things around making sure
[21:01] the shape language kind of reads from
[21:03] head to toe with the new arm
[21:06] the new legacy media marine armor we
[21:08] kind of designed it so that the piece
[21:11] kind of reads with your eye looking at
[21:13] the top of the character and reading all
[21:14] the way down a lot of designs with the
[21:16] older medium marine hello horizontal and
[21:21] vertical lines going through which kind
[21:23] of dictates your eye if it's going down
[21:25] vertically but once you hit a horizontal
[21:28] design that kind of kind of stops the
[21:30] flow of the design of the armor so with
[21:33] a new asset it kind of reads better with
[21:36] a whole flow the armor and the design
[21:38] going through the whole body so the
[21:40] designs more of a one look through a
[21:43] rather van kind of looking different
[21:44] areas so with modularity you have to
[21:47] think about the zones and where armor
[21:50] starts and where it begins there are
[21:52] certain regions of the shoulder that
[21:54] come up that we can't have the armor
[21:56] come up too much because we get
[21:57] penetration between assets like armor
[22:01] plates around the bicep the gauntlets
[22:04] around the arms coming up and especially
[22:07] with modularity you have to keep your
[22:09] armor sets in two different zones to
[22:11] kind of be able to mix and match
[22:13] different sets without having to worry
[22:15] too much about spacing so as long as you
[22:17] stick with these zones of the armor you
[22:19] don't really have to worry about too
[22:21] much about clipping and then other arm
[22:23] sets being non modular with other pieces
[22:26] well you can't get too carried away with
[22:28] your designs when modularity comes into
[22:30] play
[22:32] it definitely restricts you to certain
[22:34] design choices especially when all of
[22:37] our own resets fit a suit of armor we
[22:40] have to be able to mix and match any
[22:41] piece of armor on to one male body so
[22:44] our under suit is relatively tight
[22:46] because that's to fit the form of the
[22:48] male body and then all the armor on top
[22:50] of that it has to also feel flush and
[22:54] sequenced with what you're wearing
[22:55] underneath which is the body suits a lot
[22:57] of our armor is fairly form-fitting so
[23:01] our jumpsuits kind of fit tightly so
[23:02] that armor can go on top of it but with
[23:05] our cooling system any major pieces of
[23:07] armor that's for the chest will call out
[23:09] objects underneath it so if it may
[23:12] penetrate our system we'll call out that
[23:15] piece of John underneath so that you
[23:17] won't see it if it is clipping so it
[23:19] takes away a lot of the
[23:20] the work that has to go into maybe
[23:22] adjusting volumes or positions of gear
[23:25] so that they don't clip through and
[23:27] penetrate so you see that in game so
[23:29] again we didn't do any concept paintings
[23:31] for this so I don't have anything of
[23:32] that to show you but we're fortunate
[23:35] enough now that this is already in game
[23:36] we've shown you this in some sneak peeks
[23:38] and I think some studio updates but this
[23:41] is actually currently being rigged so
[23:44] super excited to show you a basically in
[23:46] game and almost ready to to get to you
[23:48] guys as soon as possible
[23:50] version of this one of the things that
[23:52] we really liked about doing these just
[23:54] in 3d and kind of experimenting with
[23:56] those shapes as as they're in production
[23:58] is that you know we were able to pull
[24:00] open the old models and really reference
[24:02] them a lot to say you know we want to
[24:03] focus on some of the same design lines
[24:06] or elements or shapes while also being
[24:08] able to say what were the weaker points
[24:11] what were the not as strong points in
[24:12] this design and kind of try to up those
[24:14] as much as possible
[24:15] it does extend the production time for
[24:18] high poly because you are exploring
[24:20] shapes are not necessarily shooting for
[24:22] a specific target but in the end you can
[24:25] also find some stuff that's more fun
[24:26] because you're able to see what works
[24:28] and see what doesn't works and kind of
[24:30] edit on the fly that way once we
[24:33] finished high poly we moved into the
[24:34] game asset phase as we've been doing
[24:36] more armors and we're really
[24:38] understanding really being able to
[24:40] refine our rigging phases we've learned
[24:44] that some of the armor needs additional
[24:46] cuts to make it look good when it
[24:48] animates something that we've started to
[24:51] do on some of our recent armors like
[24:53] some of the heavy slaver armors or the
[24:56] heavy marine armors where we actually
[24:58] separate out individual panels on the
[25:01] armor itself typically what you would
[25:03] see in a game mesh is something that
[25:05] would be like one solid mesh and issue
[25:08] is when that starts moving around and
[25:09] these is animated it looks like it's
[25:11] rubbery or it looks like it's stretching
[25:13] and that's like a real quick call-out to
[25:16] say like this is a game asset it doesn't
[25:19] look super highly refined it's not very
[25:21] filmic and so something that the rigging
[25:24] team was able to help us out with was
[25:25] saying if you guys cut you know if you
[25:27] have a design and it's got a chest piece
[25:30] and maybe shoulder pieces and but the
[25:32] chest piece looks like it could break
[25:33] apart from movement break those pieces
[25:36] apart and then when they're reading it
[25:38] they're actually able to move those
[25:41] pieces independently than it is the
[25:43] central piece and that makes it look
[25:45] just like a knight's armor you know
[25:47] other high-tech armor that those pieces
[25:49] are actually moving and skinned and
[25:51] weighted independently and that makes it
[25:53] look more high-quality than it would if
[25:55] it was a single contiguous mesh we've
[25:58] seen a lot of improvements in our
[26:00] techniques using the layer blend the
[26:02] layer blend is a is a shader that allows
[26:04] us to combine all of our draw calls on a
[26:06] single material down to one drakul there
[26:09] are times that it does go higher if
[26:11] you're adding glows or different special
[26:13] effects to that but the the impressive
[26:15] part about using the layer blend is you
[26:17] can try to get as much variation you
[26:19] want in the asset itself and really the
[26:22] savings are always going to be the same
[26:24] for a very simple asset to a very very
[26:26] complicated asset as long as it has one
[26:28] layer blend material applied to it it's
[26:31] very very cost effective because the
[26:33] shader is so cost effective we found
[26:35] that we can create a lot of different
[26:36] sub materials and put a lot of different
[26:38] sub materials on a single material and
[26:40] what we're doing now we've shown this in
[26:43] previous shader discussions one that we
[26:45] enforce had but were you were able to
[26:47] zoom in to like almost a micro level and
[26:49] see the fabric or see the different that
[26:51] you can really zoom in and get a full
[26:53] read on the material at any any distance
[26:56] one of the things that we're able to do
[26:58] now with that is but by layering up sub
[27:01] materials and actually putting on
[27:03] several different layers of a single
[27:06] sub-material in one area we're able to
[27:07] get variation that sounds a little
[27:09] complicated but basically what it means
[27:11] is if you look at a picture you know any
[27:14] Google Google any picture any JPEG
[27:16] picture and zoom into it it gets really
[27:18] pixelated that's a traditional diffuse
[27:20] map if you zoom into a diffuse map it
[27:22] just gets pixelated right with ours
[27:24] we're using small diffuse maps the tile
[27:27] across the whole a whole mesh and what
[27:29] that does is it makes it really easy so
[27:31] that when you zoom in there's no break
[27:33] up in the material and it's it holds up
[27:35] at a micro level the problem with that
[27:37] is that you're only using a single
[27:41] material with no color variation now
[27:43] something if you look at anything that
[27:45] you know if you look at your jeans right
[27:47] now
[27:47] people are probably wearing blue jeans
[27:48] I'm wearing jeans there's a lot of
[27:51] different colors in your jeans a lot of
[27:53] different colors and your shirts there's
[27:55] a lot of different colors and everything
[27:56] and people don't really notice that so
[27:58] when you're you know if I'm looking at
[28:00] my jeans right now I have like a dark
[28:01] blue there's even little elements of
[28:03] yellows and greens and whites in that
[28:05] and you know the way that we found for
[28:08] the layer blend material to get that
[28:10] variation is actually by layering the
[28:12] same material on it with a slight break
[28:15] up in the blend map which separates the
[28:17] type of maps the type of materials that
[28:20] we're using with a slightly different
[28:22] color and so we're able to essentially
[28:25] generate a new diffuse map it's not
[28:28] really a diffuse map but we're getting
[28:29] the variation that of the abuse map
[28:31] would have just by layering lots of
[28:34] different materials in the same color on
[28:35] them and so right now the medium marine
[28:38] is in rigging typically a mesh will go
[28:41] to rigging and then you know they'll
[28:43] spend some time skinning it up and then
[28:45] we'll get feedback so one of the things
[28:47] that we're working on now is actually
[28:48] cutting up some of the plates that I
[28:50] talked about to figure out where we
[28:52] really want to get more of that motion
[28:55] in the character typical problem areas
[28:57] for us are in the shoulders there are a
[28:59] lot of movement in the shoulders
[29:01] especially for our game anytime when the
[29:03] shoulders go all the way down all the
[29:05] way up you have a lot of movement
[29:07] they're both forward and back so
[29:09] definitely in the shoulders is one area
[29:11] the other area is always going to be the
[29:12] hips the hips and waist so there's a lot
[29:15] of torsion and rotation in the waist and
[29:19] that's one area where you can typically
[29:21] see a lot of stretching in a character
[29:23] which is something that we try to avoid
[29:25] so we're gonna try to do some changes
[29:27] actually to what you're gonna see now to
[29:29] make sure that some of these plates here
[29:31] feel a little bit more layered on top to
[29:34] vicho on top of each other a little more
[29:36] stacked and just a little more mobile
[29:38] the light green is also in high
[29:39] polyphase right now we're focusing on
[29:42] kind of updating the shapes as we go
[29:44] through production just while working on
[29:46] high poly we're not doing a concept
[29:47] painting for this either the fun thing
[29:49] about is we get to explore what kind of
[29:50] works and just kind of play around with
[29:52] it and just kind of really get to
[29:53] experiment with it but I think it's
[29:55] starting to come along pretty well it
[29:57] has some pretty iconic elements that one
[29:59] of my favorite thing about
[30:00] the light marine is how asymmetrical it
[30:03] is so you know a lot of our standard
[30:05] suits are kind of split down the middle
[30:07] right side looks like the left side
[30:08] whereas the light had a lot of kind of
[30:11] tubes and things coming across body
[30:13] which is a fun element to to be able to
[30:15] play in with so super excited to see how
[30:18] this one goes for the rest of production
[30:19] in in concept in costumes we would add
[30:23] cloth and material different kinds of
[30:25] materials together to make things look
[30:27] more real in real life you don't see
[30:29] well if you look at current armor today
[30:33] you don't see someone wearing just metal
[30:35] plates all over their body there's a
[30:37] Kevlar there's also some sorts of metal
[30:40] plastics sometimes leather cloth a bunch
[30:43] of materials are put together so having
[30:46] multiple materials in a balanced way in
[30:48] a very and also placed strategically
[30:51] will make the asset or make the outlook
[30:53] make the costume look more realistic
[30:55] that has kind of become the trend of
[30:57] concept and also design in fashion and
[31:00] also just armor in general and so a lot
[31:03] of our previous assets didn't have a lot
[31:07] of those material variants a lot of them
[31:09] were just color variants so we might
[31:11] have a stripe instead of an actual
[31:13] material variants so what we've been
[31:15] doing recently was introduced a lots of
[31:18] different kinds of materials lots of
[31:20] different shapes and fabric happen to be
[31:22] one of them a great example is the sand
[31:24] nomads when we introduced though the
[31:27] wave ink it really gave a different type
[31:31] of look and feel and more realistic
[31:34] compared to the older characters we had
[31:37] so we wanted to give the legacy armors
[31:38] that treatment as well and not stick out
[31:41] like a sore thumb
[31:42] compared to our newer character assets
[31:46] the heavy marine is also in high poly
[31:48] but we actually did do a concept
[31:50] painting for this one the heavy bringing
[31:52] I think is probably one of my favorite
[31:55] armors of the old one because it has
[31:56] some really distinct shapes part of the
[31:58] reason we wanted to do a painting on
[31:59] this one is because the heavy armor is
[32:01] just by being what they are heavy I mean
[32:03] they have more stuff on them so to kind
[32:06] of wing those on the fly is not as easy
[32:09] as it is to do a light or a medium where
[32:10] there's less actual elements on the
[32:12] character
[32:13] so when you get to something that's
[32:15] really complicated and has a lot of
[32:16] pieces on it having a painting to kind
[32:19] of at least sort out some of those
[32:20] simple lines for you is really easy to
[32:24] follow I took a look at the the previous
[32:27] asset that we've had and also the
[32:29] current marine that we have and there
[32:32] was a drastic difference in shapes also
[32:37] the size and also our old legacy armor
[32:42] looked really low-tech compared to our
[32:45] current one and so we wanted to show
[32:46] like oh there is growth and in time but
[32:49] it almost felt too far away in time it
[32:55] almost looked like something that would
[32:56] have been created actually in the star
[32:58] citizen or maybe 600 years ago possibly
[33:00] so we wanted to kind of cut that down
[33:02] also and introduce the multiple
[33:04] materials that I spoke earlier about on
[33:07] the heavy marine so I maintained the
[33:09] original silhouette actually and the
[33:11] shape of the original heavy marine so I
[33:14] would keep the big shoulder pads and
[33:16] also the big chest plate that that the
[33:19] heavy marine had I just added a lot more
[33:21] layering on top of the armor to make it
[33:24] look more integrated with each other
[33:26] then rather just blocks and so but the
[33:28] overall shapes of the heavy marine the
[33:31] previous heavy marine are actually very
[33:33] similar to the the new one that we're
[33:35] making also the helmet as well I didn't
[33:38] change the helmet as much I tried to
[33:41] keep a lot of the shapes but then some
[33:44] of the shapes on the helmet were a
[33:45] little too too simple it was literally
[33:47] just I think just the plain here and a
[33:51] plain in the back and I wanted to make a
[33:52] little bit more interesting more
[33:53] integrated with each other I think that
[33:55] was I think that was the key word
[33:57] actually when I was designing the heavy
[33:59] marine integration so a lot of the
[34:01] shapes go into each other and come out
[34:03] and layer on top and there so there is
[34:04] this flow to this design where the I can
[34:07] go down and you see things kind of
[34:09] interlocking with each other rather than
[34:11] just box bugs and bigger bucks and a box
[34:16] so I actually introduced a lot more
[34:18] fabrics a lot more rubber along with the
[34:23] hard pieces as well but I didn't take
[34:25] into consideration of the original
[34:27] aesthetic of the
[34:27] from marine I added more lines that
[34:30] would make it more streamlined rather
[34:32] than those big squares that you have on
[34:35] the shoulders and I think I had like
[34:38] belts all around so I I took a lot of
[34:42] the shapes from the heavy marine because
[34:44] I didn't want to completely change the
[34:47] design I want to update it bring up to
[34:50] this the same standard and also the
[34:52] biggest thing of today zones it didn't
[34:55] respect any of the zones and so we had
[34:56] to tweak it anyway so we're like why
[34:59] don't we just upgrade the asset when
[35:02] approaching the different sizes for our
[35:05] characters especially from a light to a
[35:07] heavy the silhouette is a big thing and
[35:11] I have to be in a certain mindset to
[35:14] design a certain size something that's
[35:17] more on the light side we'll try to keep
[35:19] it skin tight and so I would have to
[35:21] play along out of that I would have to
[35:23] play inside the pretty much the the base
[35:26] male to a certain extent and maybe some
[35:29] slight like a vest or maybe a torso and
[35:32] some light pieces but when it comes to
[35:34] the heavy I'll admit it compared to a
[35:37] lot of games are heavy are heavy they're
[35:40] huge and so I remember originally back
[35:44] back in the day when we did the heavy
[35:46] marine we couldn't find the right size
[35:49] for the heavy marine and then we it went
[35:52] through multiple iterations and we found
[35:54] the size that we all liked and happen to
[35:57] be this gargantuan thing and so we can't
[36:00] just put random stuff on the heavy and
[36:05] just call it a day we have to make sure
[36:08] that it makes sense or aesthetically
[36:10] look like it'll make sense so it's
[36:13] there's a different mind so that I have
[36:14] to go through the light honestly it's
[36:16] easier for me because it's just
[36:18] literally just paint on top of the base
[36:19] male or an under suit and just add some
[36:22] small bits here and there makes the line
[36:23] the lines on the character follow and
[36:26] flow but the heavy marine or the heavy
[36:29] assets I'll take a little bit of time
[36:32] because also we don't want the heavy
[36:35] armors to look exactly the same to each
[36:37] other and so a good example would be
[36:41] the thus labor Armour the slaver heavy
[36:44] armor very similar to the CBS armor
[36:48] button yet they're different and so of
[36:51] trying to find a trying to find an
[36:54] aesthetic that differentiates different
[36:56] manufacturers but maintain the same size
[36:58] is a little rough so it takes some time
[37:01] and thought to get to actually execute
[37:04] because of modularity I know there will
[37:08] be a player that will put on a heavy
[37:12] marine chest a light outlaw arms and
[37:16] maybe some Shubin boots and an RSI
[37:22] helmet and it will look absolutely
[37:23] ridiculous right and so I can if I stick
[37:27] to if I try to cater towards that
[37:30] direction I feel like all our designs
[37:32] will look stale because I would have to
[37:34] use the same lines for every single
[37:37] asset and so there is a certain
[37:39] limitation on the creativity side if I
[37:43] were to just stick with that in mind so
[37:45] there are times when I'm like you know
[37:47] what we really want to get this asset in
[37:49] and that asset will always look best
[37:52] with a certain certain group and class
[37:56] of that specific model and the other
[37:59] parts that go with it so I I would
[38:03] prioritize towards that set first and if
[38:06] it looks good on that asset
[38:08] I might rethink it a little bit for the
[38:10] other assets but I don't let modularity
[38:14] stop me actually think so as you can see
[38:18] we're making really good progress on all
[38:19] the lights the armors they aren't
[38:21] planned 43.0 we are shooting for a
[38:23] release soon after that we're hoping to
[38:25] get them to as soon as possible all of
[38:29] these upgrades to the outlaw and marine
[38:31] armor mean that you'll soon be able to
[38:33] mix and match modular pieces to create a
[38:36] suit of armor that not only looks good
[38:38] but matches your play style very cool
[38:41] and that's all for today's show thanks
[38:44] to our subscribers for helping us
[38:45] produce all the video content that keeps
[38:47] the community up to date on star citizen
[38:49] and of course thanks to all of our
[38:51] backers for your incredible support over
[38:54] the years
[38:55] the
[38:55] scheme is only possible because of you
[38:58] that is true finally remember to tune
[39:00] into the star citizen twitch channel
[39:02] tomorrow starting at 12:30 UTC to catch
[39:05] everything happening at citizencon and
[39:07] be sure to check out the event schedule
[39:09] on the website so whether you'll be
[39:11] joining us in Frankfort or streaming it
[39:14] online you could plan your day
[39:15] accordingly lots to do and until next
[39:17] week we will see you around averse thank
[40:05] you for watching so if you want to keep
[40:07] up with the latest and greatest in the
[40:08] star citizen the squadron 42 development
[40:10] please follow us on our social media
[40:12] channels see you soon
[40:18] you
[40:20] [Music]

# Star Citizen Live Gamedev: Mission Maker, Part II

**Video:** https://www.youtube.com/watch?v=ONO1LDhp3ZY
**Date:** 2023-08-18
**Duration:** 1:08:45

## Transcript

[00:04] go live
[00:12] bringing up like privileged internal
[00:14] teams chats like oh I gotta show you
[00:16] something when we're like nine seconds
[00:17] away from going live hi everybody
[00:20] welcome to
[00:22] Star Citizen live uh Mission maker part
[00:26] two uh I'm your host well not really not
[00:30] this week this is your host hi I'm
[00:33] Elliott mobile
[00:34] what do you do Elliot Moby uh I'm a lead
[00:37] designer who makes missions
[00:42] and uh
[00:44] this is part two we've never done a part
[00:46] two SEO uh last last week we did one of
[00:51] our Game Dev episodes where we sit with
[00:53] a developer and we watched them work uh
[00:56] for an hour and normally uh people just
[00:59] you know you know like they do what they
[01:01] can within the course of an hour and
[01:03] then you know we get to the end of the
[01:05] hour it's like okay that's it
[01:07] um you know this is this is what you can
[01:08] make in an hour you know you know and
[01:10] it's it's it's good to Showcase a
[01:12] process but it's not like a good result
[01:15] usually because again it's only an hour
[01:18] um Elliott fell way behind uh uh our our
[01:21] estimations and what every other
[01:24] developer that's ever done this and
[01:25] barely got halfway through
[01:28] um the first half of his work
[01:31] um because he took over the show hosting
[01:33] uh which was fine because I didn't want
[01:37] to do it that week and I'm not
[01:39] complaining
[01:42] wow how are we doing Dave
[01:45] pretty good so good really good so this
[01:48] week uh we're going to continue we're
[01:50] gonna we're gonna we're gonna pick up
[01:52] where we left off uh I wanna stress that
[01:55] Elliot has done no work on this between
[01:58] this Friday and last Friday he's done no
[02:00] work at all in the last week really uh
[02:03] we're gonna talk about that in a
[02:05] different meeting but he's definitely
[02:06] not touched any aspect of this since
[02:09] yesterday everything is exactly where we
[02:11] left off so if the Mission Works uh he
[02:13] was doing a good job last week and the
[02:15] mission doesn't work
[02:18] there won't be a part three I promise
[02:20] because I'm going to Gamescom next week
[02:21] so Elliot
[02:25] say yes hello yes uh
[02:31] we got music underneath to drown out the
[02:33] pregnant pauses right
[02:37] that's Pete yeah
[02:39] uh we're gonna turn it over to Elliot
[02:41] and uh he's gonna pick up where we left
[02:43] off Elliot
[02:44] hello where we live off so uh the last
[02:47] thing we did we're on the wrong camera
[02:49] on the wrong camera David thank you
[02:52] hello uh so
[02:56] uh last week
[02:59] um
[03:00] we finished off uh we made the module
[03:03] that tells the ship to spawn and
[03:05] populates it full of people and then
[03:06] he's making him actual main module where
[03:08] you are going to be sent to get void
[03:10] dude knock them out and then deliver
[03:12] them
[03:13] um we set up a bunch of them at that
[03:15] main logic but just hadn't finished it
[03:17] in time uh so we're gonna continue on
[03:20] from there
[03:21] um
[03:22] and then hopefully we'll be able to get
[03:24] this done make the mission record which
[03:27] is one of the next steps which is how
[03:28] you guys would see the mission and then
[03:30] from there I would
[03:33] um
[03:34] play the game test it make sure it works
[03:36] uh iterate and so on and so forth so
[03:39] I'll jump into my logic all right
[03:42] cool so this was the very last thing I
[03:44] did which was the on object entered
[03:47] which if anyone remembers this is where
[03:49] when the player has scanned and found
[03:52] the ship they have now entered the ship
[03:54] so then what I put on their hood is like
[03:57] locate and subdue void dude and then we
[04:01] make sure that they can see that
[04:03] objective and then
[04:05] um see that sort of Hud and then we
[04:07] start proximity tracker the proximity
[04:09] tracker was the imperfect solution where
[04:11] I we we don't have FPS scanning in the
[04:14] Pu so
[04:16] and I don't want to just mark them
[04:18] straight away so what I'm going to do is
[04:19] I'm going to wait until you're about 10
[04:21] meters from them to then Mark them and
[04:23] we might do something in the future
[04:24] where we we um
[04:26] you know I have a detection where if
[04:28] they've see see if they see you if void
[04:31] dude sees you then it also adds the
[04:32] marker just to kind of help that along
[04:34] so you don't accidentally shoot the
[04:35] person you meant to subdue
[04:38] um cool
[04:39] so one thing next I needed to do was
[04:44] um
[04:46] and the other one I think I send some
[04:52] modular AI spawn or cool cool just
[04:55] checking everything remembering who I am
[04:57] I haven't touched this in like a week so
[04:59] I'm
[04:59] I'm also trying to remember where I was
[05:03] oh hold on go back to go back to bank uh
[05:06] we apparently didn't record the intro
[05:08] for the YouTube version so uh hi I'm me
[05:13] that's him and we started in the middle
[05:17] of the thing
[05:19] continue
[05:21] okay cool
[05:23] so we have the object entered uh now I
[05:27] just need to set up the stuff
[05:30] for the air the proximity tracker so
[05:34] when the proximity tracker tells me that
[05:36] it's done
[05:41] which is on entered range so when the
[05:45] proxy the proximity tracker is tag is
[05:49] triggered I'm gonna check to see if the
[05:51] person who triggered it is a mission
[05:52] player is a mission player
[05:57] voila and I want to check that the
[06:00] tracked object which is how I put the
[06:03] variables in on object entered the
[06:05] tracked object is the players and the
[06:07] reference is the target can you zoom in
[06:10] on that at all no like what's basketball
[06:12] doing the center screen does it zoom in
[06:14] doesn't zoom in nope no this is it can
[06:16] zoom out is that better
[06:18] can everyone read that
[06:20] no that's as far and as we consume this
[06:23] tool was built before we had 4K monitors
[06:25] therefore it doesn't support 4K so you
[06:28] either have to get really close to the
[06:30] screen or have just really good eyes one
[06:32] of the two
[06:34] um we'll put that on the feature request
[06:35] list it's already on there
[06:40] um
[06:41] the objective market so next up I can
[06:44] see the rare thread Serge you didn't
[06:46] have 4K monitors till when
[06:49] Mission people who work in text didn't
[06:51] have 4K money yeah we don't need 4K mods
[06:55] this this is not beautiful you don't get
[06:57] to see this grid this is what I have to
[06:59] look at it doesn't have to be beautiful
[07:00] all photographs are beautiful true well
[07:03] that's not true actually I've seen some
[07:04] really nasty flow graphs you want to see
[07:06] uh because uh because I'm pretty sure
[07:09] we'll close look at look at this look at
[07:10] this
[07:12] so
[07:14] that all of these
[07:16] here this is all of Siege Verizon and if
[07:20] I was to open this up
[07:22] you see how I can't click this because
[07:23] it's loading it there's so much stuff in
[07:26] here it has all of these functions
[07:28] everything and this this is only a spit
[07:31] that handles a small part of it and
[07:33] inside of them all of the graphs are
[07:36] absolutely absolutely huge I've got a
[07:39] which is my horrible one
[07:41] so so this we're building this obviously
[07:44] we're only a couple minutes into this
[07:45] week's show but if you watched last
[07:46] week's show it's
[07:48] this is one Siege of War this is one
[07:50] aspect of Siege of Wars up here on the
[07:52] left so so this this is this is one
[07:54] module this is all the information that
[07:56] I listen to on Siege Verizon and the all
[07:59] these modules have about the same amount
[08:01] of information in them just so I can
[08:04] ensure that like every aspect covered
[08:08] that every single thing in Siege of
[08:09] right so so when everyone plays Siege
[08:11] Verizon oh yeah you know it's it's
[08:12] somewhat pretty simple you've got no the
[08:15] thing took me seven months
[08:17] not simple
[08:20] um I've even there's even a graph that
[08:21] just like when you're on it it lags when
[08:23] you move around because of the amount of
[08:25] nodes that are on it
[08:26] um
[08:27] and it's mainly because we've never had
[08:29] anything with that amount of nodes
[08:30] before so it it exposed performance
[08:33] issue in the tour anyway away from Siege
[08:37] away from my lifelong work to a much
[08:40] simpler mission that we're building
[08:41] today yeah exactly an easy one uh so the
[08:45] players entered the range of void so now
[08:47] I need to Mark void do to be killed so
[08:51] um
[08:51] I am going to put in the string which is
[08:55] subdue and deliver
[08:59] sub thing too and then uh targets cool
[09:03] and then I'm gonna align that to the
[09:06] this thing here which is the objective
[09:08] and I'm going to set true so basically
[09:10] what this is happening when the player
[09:11] gets close enough to void I'm going to
[09:14] Mark void
[09:16] uh there was one thing I noticed when I
[09:18] was clicking about in my functions which
[09:20] was
[09:22] this uh nope this
[09:25] um
[09:26] so where I set something up just to let
[09:28] you know how how we think I set this up
[09:30] last episode Target tag provided this is
[09:33] if so this is where we start thinking
[09:34] about how the designers work so if the
[09:36] designer has given me a Target
[09:39] uh I need to always take that however if
[09:42] they've not given me a Target I'd pick
[09:43] randomly so for example what I do in the
[09:46] pre-init so this is before it has all
[09:48] started I'm gonna drop down a global
[09:50] function
[09:51] that already exists that we built a
[09:53] while back which is spawn description
[09:55] has identified tags
[10:00] um I'm going to set it to be any
[10:04] Gabriel wolf says is there a Grappler
[10:06] how many times you've complained about
[10:07] the graph editor it's just a circle
[10:11] it's just a never-ending work on Mission
[10:13] complain about Mission release Mission
[10:15] design Mission work on Mission so far
[10:19] that's everything
[10:23] cool right so set Boolean so what I'm
[10:26] gonna do is I am going to check if the
[10:30] NPC NPCs populate which is the record
[10:34] that the design is going to provide me
[10:35] that contains the NPCs has an identifier
[10:38] tag
[10:40] targets
[10:42] Target there you go
[10:44] and I'm gonna go through
[10:47] I think it was funny sleeping tight
[10:49] perfect so then if it does if if the
[10:52] target tag has been provided to me by
[10:53] the designer who used this because it
[10:55] isn't just going to be me who uses this
[10:56] stuff because it's all modular
[10:59] um if they provided me this then I can
[11:01] filter my logic differently so now for
[11:02] example I'm not going to do it here but
[11:04] like if I when I'm building this stuff
[11:06] for wider use by other people what I
[11:09] then do is I'd then go and build a
[11:11] random system that will randomly pick
[11:13] out a Target because if they've not
[11:15] specified it to me then they'll want me
[11:17] to just choose random because they don't
[11:19] care like these are sort of like the
[11:20] cases where you'll have in the future
[11:22] where we want to build a bespoke boss
[11:24] encounter so like where we spawn Mendo
[11:26] or Remy and Siege they'd be bespoke so
[11:29] that's where we'd want to care about
[11:31] where they are
[11:33] um or who they are or what their entity
[11:35] is and that's what this this sort of
[11:37] stuff was for
[11:38] kill
[11:41] um next stop
[11:43] so we've got uh so next up what I do is
[11:46] as assess because again what I have to
[11:48] do is I build this and then I've got to
[11:49] test it so I'm going to make sure that I
[11:51] think everything's here that we do so
[11:52] I'll I'll run through and I'll assess
[11:54] everything I've done so I set the the
[11:56] module location so it only streams in
[11:58] when stuff I care about exists I start
[12:01] the occupied ship spawner I get the
[12:03] location object container I create my
[12:05] objectives I Mark the location I create
[12:08] my hood
[12:09] I fill it for that when the location is
[12:11] loaded in I fill up my action area so I
[12:13] don't get crushed by a mint leaf
[12:15] sailor zero zero says hi question why do
[12:19] we need to know all this thank you uh
[12:20] you don't watching the show is optional
[12:25] continue
[12:27] um
[12:28] so I've registered my action area when
[12:30] the player enters my action area
[12:33] I check if my empty track is empty
[12:37] I make sure and if so because if the tag
[12:41] is not provided then I don't I don't
[12:43] need to if the tag is provided the Mark
[12:45] is already on the Target so I won't have
[12:47] taken the mark away if the target isn't
[12:48] there I will check to see if it's a
[12:50] mission player remove remove the marker
[12:54] that's telling them to go to the
[12:55] location and make sure that the correct
[12:57] text is on the screen perfect however
[13:00] going through this it looks like either
[13:02] I didn't make it or it didn't save the
[13:05] on exit callback at the location action
[13:07] area so that would be a quick one to
[13:08] make
[13:10] I was gonna say I thought you missed it
[13:12] earlier but
[13:15] I was taking a nap during the show
[13:17] yes
[13:19] I wish I could have done that as well
[13:23] cool uh is entity tracker empty so I'm
[13:26] going to check the same thing so I'm
[13:27] going to check to see if the if the um
[13:31] Target is empty if it is then I'm going
[13:34] to check if it's a mission player
[13:36] and then if it is a mission player uh
[13:38] which is the incidentity
[13:41] perfect I'm then going to check and then
[13:43] I'm going to add the player to an
[13:46] objective marker
[13:52] um you think it probably wasn't made in
[13:54] 4k because most programmers have
[13:56] terrible eyesight I'm staring at it it's
[13:59] not quite possible
[14:01] I'm gonna ask
[14:02] I'm sorry
[14:05] um so then I'm gonna mark them perfect
[14:07] easy uh so now they're marked if they so
[14:10] when they leave the area if they haven't
[14:12] found the target I'll mark a ship so
[14:14] they're nowhere to go
[14:15] uh this event is sent by the occupied
[14:17] ships spawner when any AI has been
[14:19] spawned so I check is it a ship if it is
[14:21] the ship I am going to
[14:24] um
[14:25] cast it to a ship variable set an a null
[14:29] objective markup exist will handle the
[14:30] marker and then I pass it in as a find
[14:33] object by radar which is another module
[14:35] module that's just going to handle
[14:36] marking it for me when it's been scanned
[14:39] by any of our scanning routes and then
[14:41] I'll show the objective if it isn't a
[14:43] ship it's a NPC I will add it to the all
[14:46] occupiers in case I need it however if
[14:48] the target tag
[14:50] is provided so the design is giving me
[14:53] it I then will check to see if the AI
[14:55] That's calling back to me has that tag
[14:56] if it does I'll add it and make it the
[14:58] target which is perfect
[15:02] cool uh
[15:04] module complete that is kicked off
[15:06] probably after you've knocked them out
[15:08] uh when this is the one I've just gone
[15:09] over so that's when you enter we start
[15:11] approximately tracker when you knock out
[15:13] void
[15:15] um we remove the target objective marker
[15:17] we add the target as it's beyond by a
[15:19] mission so that we so the corpse doesn't
[15:21] get cleaned up
[15:23] um because it would if if NC spawning
[15:25] was about
[15:28] um we have a lot of stuff in the game
[15:30] that like for example these these
[15:31] corpses if we have loads of them in area
[15:33] that chug your frame rate even more uh
[15:35] so we have to make sure that we clear up
[15:37] things that you
[15:39] you know that we don't that we we don't
[15:40] need so by saying this doesn't belong to
[15:42] a mission if the entity density manager
[15:46] system detects there are too many in a
[15:48] cluster it will just start cleaning them
[15:50] up to save your performance
[15:53] um
[15:54] yeah
[15:59] it's hard ain't it yeah I'm thirsty
[16:03] um and then so if you have not voided
[16:04] out I'm going to start the delivery
[16:06] module which is a part of the modular
[16:07] delivery system and then I stop the
[16:09] proximity tracker because you've knocked
[16:10] them out you found them we don't we
[16:12] don't care that you're there and to be
[16:14] fair this proximity tracking node and
[16:16] it's a good thing about reading about
[16:17] your work
[16:18] this can probably be put here because
[16:20] when you've found them and I've marked
[16:22] them I don't care about how close you
[16:24] are to them because they have a marker
[16:25] which is sorry just close through all of
[16:28] these errors nice right there's more
[16:30] have you done yep perfect
[16:34] um cool
[16:36] so
[16:37] that's you've knocked them out this will
[16:40] call back to me when that delivery
[16:41] module is finished and that'll tell me
[16:43] that the mission's over because you've
[16:44] delivered the guy uh voidy so cool easy
[16:48] peasy right now the next step The Next
[16:51] Step takes us over to a new tool
[16:54] the next tool is data fudge
[16:57] date Forge is where we build our mission
[17:00] records and fill out a lot of
[17:01] information there
[17:05] um
[17:05] so I will add a record
[17:09] and it's going to be a mission broker
[17:13] entry and I'm just going to call it sub
[17:15] to you subdue
[17:17] and deliver
[17:20] their liver yeah you know what that's
[17:22] fine
[17:25] cool
[17:26] um so this is where uh this is where a
[17:30] lot of the missions are built this is a
[17:32] huge data graph that um
[17:35] takes in a lot of inputs and changes how
[17:37] the mission plays there's a lot of power
[17:38] up here for example I have the power to
[17:40] take a mission that is only allowed for
[17:43] one person and only one of them is
[17:45] allowed to be around at once and without
[17:47] changing the logic I can make it so that
[17:49] everybody in the server gets offered it
[17:51] and pulled into the same logic and
[17:53] that's what we do for things like the in
[17:54] the wake of This Disaster the logic is
[17:57] built just to care if the ships have
[17:58] been scrapped and that's it but with the
[18:01] data forward settings we're able to make
[18:02] it kind of an open mission that kind of
[18:05] can encourage PVP and other things
[18:07] Keel so
[18:09] I'm gonna
[18:11] a uh owner so the owner would be me we
[18:14] have these owner things just so because
[18:15] we have a lot of missions we have a lot
[18:17] of teams now that also help build
[18:18] missions
[18:20] um so we have to make sure that when uh
[18:22] amazing QA Department put bugs in for
[18:25] them for them they see like just the
[18:29] narrative name so it will say like in
[18:32] the way to disaster is an easy one but
[18:33] we have bouncy ones that have like seven
[18:35] different names uh why are you laughing
[18:37] I don't get it because the way you
[18:41] phrase it it sounds like the QA people
[18:43] were the ones who created the bugs they
[18:44] did create the books they give me the
[18:46] books which I'm happy about I need books
[18:47] they're saying there are no bugs bugs
[18:49] don't exist until QA creates well no I
[18:52] don't book my stuff I just it's like
[18:54] Schrodinger's yeah exactly yes it's
[18:56] neither buggy nor works until QA opens
[18:59] the Box exactly exactly
[19:02] um so they'll point in a bug and it will
[19:04] be about like this bouncy Mission but
[19:05] the bouncy Mission has a random name
[19:07] random name generator type thing so the
[19:10] name of the bounty Mission could be
[19:11] called anything and it's difficult for
[19:14] us to understand which record it alludes
[19:15] to on our end so uh we have this
[19:18] ownership thing where they can open up
[19:19] the Bounty thing and go oh the mission
[19:21] and go oh this one's for um someone in
[19:24] Montreal and then we can assign it to
[19:26] them quicker and which means the bug
[19:27] gets resolved quicker as if they signed
[19:29] it to us that's going to be like a
[19:30] 24-hour period until Montreal come
[19:33] online not 24 hours but you know like
[19:34] eight hours until they come online can
[19:36] hit it anyway moving on
[19:39] um next stop select file this is
[19:42] referencing the mission module
[19:44] um
[19:46] so I'm gonna do I'm gonna place this one
[19:49] in
[19:52] um
[19:52] yep so this is this is referencing the
[19:55] logic that we have just created and what
[19:58] I'm going to do is I'm going to be
[19:59] cheeky because I've made a mistake
[20:02] because I've got where I called this
[20:03] Mission I'm going to right click and I'm
[20:04] going to rename
[20:06] this to actually be scheduled recover
[20:07] and so it's aligned cool so this is all
[20:10] called the logic this means when this
[20:11] record starts it starts this module and
[20:14] the module starts processing next up I'm
[20:17] going to take the title of the mission
[20:19] I'm going to drop that I'd drop that in
[20:21] there
[20:22] um I'll probably need to export in a
[20:23] minute
[20:25] um in here is where I drop the
[20:27] description
[20:28] um and then I drop the from line the
[20:31] type these are all the mission types we
[20:32] currently have this is what you see in
[20:33] your Mobi glasses to where the mission
[20:35] sort of exists I'm going to set this on
[20:37] mercenary
[20:39] so it's like typo or bug the same thing
[20:43] I have a note on that which I'll speak
[20:45] to you all about when I'm playing the
[20:47] game
[20:51] um okay right uh I won't I don't I can
[20:54] go through all these settings but
[20:55] there's tons of them and I just tell you
[20:57] all to read my documentation but you can
[20:59] so I'm gonna avoid it's explaining every
[21:01] single one of them and you guys can all
[21:03] just come up with your own idea of what
[21:04] they do oh why start now I know right we
[21:07] do want to get in and see how the
[21:09] mission actually work exactly and if I
[21:10] explain through every single one of
[21:12] these there's a hell of a lot of a lot
[21:14] of settings but I'll try high level them
[21:17] reward this is where we give you a raw
[21:19] reward that doesn't matter what value we
[21:21] put in because you're all not happy with
[21:22] it no matter what it is uh the location
[21:24] mission available is where the where the
[21:27] mission are generating
[21:30] okay
[21:35] the location mission available is where
[21:37] the location would generate so this is
[21:39] where we can say this Mission only stays
[21:42] around uh Stanton too
[21:45] um available date schedule this is for
[21:46] stuff like when we do the like uh
[21:49] Christmas missions Halloween missions
[21:50] whatever like seasonal of things we do
[21:52] we can also set it up here we have
[21:54] reputation rewards journal entries
[21:56] notifies when it pops up on your screen
[21:58] there's the buy-in which is obviously
[22:00] you buying in these ones are the most
[22:02] powerful the max instances max players
[22:04] per instance and Max instance per play
[22:06] this is where we can play around with
[22:07] how many of the missions can be active
[22:09] at once how many you can accept and how
[22:11] many one person can join into
[22:14] can be shared uh which is obviously so
[22:16] you can share with your friends once
[22:18] only which is the mission can only be
[22:20] done one we do these for a lot of story
[22:21] missions so the Arlington gang missions
[22:24] uh some of these are wants only is
[22:26] because it doesn't make sense for you to
[22:27] play them over and over again
[22:29] um there's a bunch of fail-based ones so
[22:31] if you send to prison if you become a
[22:33] criminal or if you leave prison we can
[22:34] fail missions
[22:36] um these are again just more settings
[22:38] that we can play with so we have respawn
[22:40] time uh so that's how long the mission
[22:42] takes to come back we have lifetime
[22:44] that's how long it's up for without
[22:46] being accepted abandoned cooldown so if
[22:49] you abandon it how long so you can get
[22:50] it back uh personal cooldown that's if
[22:52] you complete it how long until we want
[22:53] to give you another one and that's just
[22:56] to make it so other people can play the
[22:57] content as well
[22:59] and uh don't care about any of this
[23:02] stuff well you I won't tell you anything
[23:04] about it law for Mission this is if the
[23:06] mission is lawful or unlawful Mission
[23:07] give a record this is how we link it to
[23:09] say Ruto Pacheco
[23:12] um Clovis all of them invitation Mission
[23:15] uh This Is How We Do appointment
[23:19] missions so we put an appointment in
[23:21] here so we'd say this is Ruto and we
[23:23] give an appointment Mission now the
[23:24] appointment is if we want the player to
[23:26] physically fly and go say hi to Ruto and
[23:28] talk to them or talk to Miles or
[23:30] whatever it's it's kind of like a
[23:33] lead-in mission so you have to have a
[23:35] mission available to you for you to play
[23:37] before you get the invitation to go see
[23:39] them we don't just do an invitation and
[23:41] then there's no missions for you to play
[23:42] it's generated based on what missions
[23:44] you're eligible for beforehand
[23:47] uh reputation prerequisites which uh
[23:50] needs renaming at some point this is
[23:52] just what wanted level you are
[23:54] um and then a jurisdictional override
[23:56] for example like Grim hex they have a
[23:59] little bit of a little bit of a
[24:00] difference
[24:01] um in how they do law
[24:04] uh reputation requirements this is how
[24:06] how much reputation
[24:09] um how much oh my God no it's not how
[24:12] much for everything he's putting me off
[24:13] it
[24:15] it is the reputation required to get
[24:20] this contract because this entry is
[24:22] essentially a contract it's how much
[24:24] reputation you need to get or what you
[24:26] need to be equal to so we might have
[24:29] fireable we might have
[24:31] um
[24:32] I'm going I've got oh my God it's half
[24:33] past
[24:35] um
[24:35] required yeah all right I'm just going
[24:37] to move on the rest of the settings can
[24:39] wait but I can explain them on Spectrum
[24:41] already if anyone actually cares
[24:44] um so here comes here comes some of the
[24:47] magic so this is where I'm gonna find
[24:48] the location
[24:50] so I'm gonna put this this word in here
[24:53] mission location let's go BP which links
[24:55] to this uh where is Amish and location
[24:59] BP there you go that links to this and
[25:01] basically it lets me Set uh information
[25:04] from this side into the mission so I can
[25:07] control uh things like what the location
[25:09] does up here
[25:12] um so for example what I'm gonna do is
[25:14] I'm gonna set in here
[25:17] um I'm also going to need to type in
[25:18] location here extended text token this
[25:20] is how we dynamically populate those
[25:22] Star Wars things that I was typing in
[25:23] and talking about their tokens in here
[25:25] I'm going to do a tag search for a
[25:27] location now we can pick locations
[25:28] specifically but to allow for some cases
[25:31] of Randomness we might not want to
[25:33] um so what I'm going to do in here is
[25:37] is to get a mercenary mission location
[25:40] I'm gonna restrict it
[25:44] to Stanton
[25:47] turn Stanton one missions locations
[25:50] systems done and what so I'm going to
[25:53] restrict his standard one so this is
[25:54] where you'll see it and also because
[25:56] mercenary Mission locations are applied
[25:58] to both ground-based locations it's how
[26:00] you have in atmosphere bounces
[26:03] um I'm also going to make sure that you
[26:05] can only do it in space
[26:07] I'm then going to set up a resource tag
[26:09] so a resource tag this allows us to say
[26:11] how many missions are allowed at a
[26:13] location at once because we don't want
[26:14] more than one person doing a killer
[26:16] Mission uh you know where you gotta kill
[26:18] 10 AI a singular location because if I
[26:21] turn up and I've got 10 AI to kill and
[26:23] you've got 10 AI to kill I'm either
[26:24] going to just wipe out your 20 or I'm
[26:26] going to kill 10 and then leave 10 and
[26:28] that just is weird
[26:30] um
[26:31] so yeah that's that next up we need to
[26:35] set up boy voidy's name
[26:39] so in here this is where I would add the
[26:42] target name token which is what uh we
[26:44] have I'm going to set it to mail
[26:46] and then I would for example I'd put in
[26:50] voidy's name here and then that I'd bind
[26:53] to avoid his name and then you can see
[26:55] in game it'd show their name now this
[26:57] normally we'd leave random so it has
[26:59] that element randomless Randomness but
[27:02] for Missions like the Arlington mission
[27:03] that is where we wouldn't uh leave that
[27:07] next up we have the occupied ships BP so
[27:11] this is the um
[27:13] Gonna Fill in this so this is gonna be
[27:16] the ship that we want to spawn
[27:19] again I'm going to do a tag search
[27:23] tags
[27:25] nope ship spawn description that's what
[27:27] I want so this is a special spawn
[27:29] description thing that will allow us to
[27:31] see
[27:32] um
[27:33] uh like it will allow us to see sort of
[27:36] um
[27:37] the ship and build this like cookbook
[27:39] recipe I know I've talked about the
[27:40] cookbook recipe oven thing
[27:43] um
[27:44] so this is how we're going to find the
[27:46] ship so the ship that we want is a uh
[27:50] reclaimer
[27:52] because that's a new fun with and we're
[27:54] going to look for the mission overlay
[27:57] setup reclaimer
[28:00] and I'm also going to make sure just for
[28:02] safety that I'm looking for the ship tag
[28:05] as well uh just to make sure that
[28:08] I don't find anything else for me
[28:09] because there's a lot of tags on a lot
[28:11] of things
[28:12] and I have to make sure that I
[28:13] definitely know which one I'm getting
[28:16] uh cool so this will essentially find
[28:19] that ship that's tagged up as reclaimer
[28:21] so in here all the way up in our ship
[28:24] thing we have a ship entity record it'll
[28:27] live in wherever the entity folder is
[28:29] which is all the way up here so in here
[28:31] we'll have a record that represents the
[28:33] reclaimer with a bunch of like level
[28:36] design markup and it'll have tags on it
[28:38] so essentially we can find that via tags
[28:41] and reference it in our mission
[28:44] um it's just a very quick way of finding
[28:45] stuff now this property the next one
[28:49] this is the only one that I've pre-built
[28:52] um because we so we have these sort of
[28:55] NPCs that we would we want to spawn on
[28:57] these occupied ships and we've built it
[28:59] to a certain level
[29:02] um where we know like oh we want 10 here
[29:04] we want five here we want three here and
[29:05] that's like a pre a predetermined amount
[29:07] because we've played it and we've gone
[29:09] okay this is this little bit of the
[29:10] reclaimer the cockpace form of two
[29:12] people and in this cargo area the
[29:13] reclaimer is fun with like five people
[29:15] in so we've pre we've pre-built this and
[29:18] it's a lot of setup to do and I have I'm
[29:21] at half pasta
[29:23] you're watching the single most accurate
[29:27] cig presentation ever
[29:29] before we started Elliott told me this
[29:31] last part would only take 10 minutes
[29:34] only at twitch.tv Star Citizen
[29:37] estimations are difficult
[29:40] I'm gonna get for me
[29:45] okay so uh this is so I've just pasted a
[29:48] load of information in here as you can
[29:50] see they're all down here but
[29:51] essentially what this is this is the NPC
[29:53] spawn description this contains a lot of
[29:55] the information for how we find NPCs
[29:58] and spawn them because again an NPC is
[30:00] an actual record so it it's all the way
[30:02] up there with its Loadout its AI
[30:04] activity uh it's it's uh armor it wears
[30:07] and all of this fun stuff that we have
[30:09] on it so the best way for me to find it
[30:11] is not to specify it manually it's use a
[30:13] generic tag search because I can use a
[30:15] generic tag search to go generically or
[30:17] I can put all the tags that that one
[30:20] entity would have on it to find the
[30:21] specific that I want but because I want
[30:23] to try to keep it random I'll just use
[30:25] some generic text so the generic Tags
[30:27] I'm using right now are nine tails and
[30:29] armed um so that's just going to find me
[30:31] a nine sales person that's armed and I
[30:33] don't want a boss because you can't take
[30:34] them down and I definitely don't want
[30:36] the career boss
[30:38] um I've excluded ship crew because they
[30:40] don't have the right activities and also
[30:41] they don't have pretty good armor
[30:43] uh we have the Min and Max group size
[30:48] um so this is uh what size of a batch
[30:51] they can spawn in we have the concurrent
[30:54] spawns and the max bonds so the
[30:56] difference between these is I could put
[30:57] Max bonds to -1 and I could say
[30:59] concurrent spawns of 10 and that had
[31:01] infinitely spawn NPCs for me as long as
[31:05] it didn't violate the current spawns of
[31:06] 10 and that's sort of like how we do in
[31:09] Siege uh constant AI coming out is that
[31:12] I say this area should always support 10
[31:14] people but I want unlimited so when
[31:17] there's nine people it'll queue up an
[31:18] extra spawn of one uh and so on and so
[31:20] forth
[31:22] there's a bunch of extra settings on
[31:24] here like we can add stuff to the
[31:25] inventory we can choose a specific
[31:26] closet or Room Mission Allied Market
[31:28] means that they'll get a friendly marker
[31:30] over their head identify a tag so this
[31:32] is where the user would come in here and
[31:34] then add the tag of Target that I look
[31:36] for in logic and then this allows them
[31:38] to make a very specific person
[31:42] and say this is where I want them to
[31:44] spawn which I have one down here
[31:46] uh I've spelled Target wrong but this
[31:49] here is an example of where I have void
[31:52] dude Target yeah I have void dude and
[31:57] I've specified them as a Target and I've
[31:59] put them only to one because they should
[32:01] spawn they'll spawn with other people
[32:03] but in that thing it's saying I this is
[32:06] the one tag you had if I had more than
[32:07] one person in there all five of them
[32:09] would be targets and we don't want that
[32:11] kill so that is the NPC NPC ships to
[32:15] populate next stop we have the um
[32:20] Mission item so this is uh until we get
[32:24] a proper coded system for the uh for the
[32:26] delivery thing it's all handled by Logic
[32:28] we want to eventually have a properly
[32:31] built thing around here I can say
[32:33] delivery and it has a predefined sort of
[32:36] setup and structure to it so there's
[32:39] sort of like some hacky things I have to
[32:41] do to get around it for example how I
[32:44] Define what type of drop-off I want and
[32:47] when I say type I mean
[32:49] um
[32:50] like you can drop off to a shelf
[32:53] um you can drop off to a locker you can
[32:55] put it in an action area or you can
[32:59] and drop off to a satellite with Maxi's
[33:01] new missions in the prison where you put
[33:04] a satellite chip in
[33:05] um so how we specify that is I have to
[33:07] specify a item
[33:10] which is kind of like a fake item
[33:12] which will beat of type delivery action
[33:15] area which basically when this feeds in
[33:16] it just tells my system
[33:18] to care uh care and do the one that is
[33:22] the action area drop off at the end of
[33:24] the whole Loop
[33:26] uh next up is the destination
[33:29] so this is where the ending point of
[33:31] where I want you to go uh to drop the
[33:34] Target off
[33:36] so next I'm gonna find that that
[33:39] location
[33:40] um so
[33:43] sometimes it should be location nice and
[33:47] I'm gonna do a match condition
[33:49] and then I'm going to do a tag search
[33:51] so in here I am going to specify that I
[33:54] want you to take it to an outpost and
[33:57] stand on one uh derelict Outpost
[33:59] probably because it doesn't make sense
[34:00] to take a void dude's lifeless not
[34:03] lifeless unconscious corpse
[34:05] uh to a
[34:08] what do you call it uh and like an
[34:11] active Outpost because I'm pretty sure
[34:12] they admin guide be like oh what are you
[34:15] doing
[34:18] cool and I'm also going to make sure
[34:19] that it only happens in Stanton one
[34:22] nice
[34:24] and then the last last thing that I need
[34:27] to add to this record
[34:30] is the objective setup so this is just
[34:32] so uh the delivery system knows what the
[34:36] item's called so we can put a marker on
[34:37] it if you was to drop it and this will
[34:40] just be of type string hash and then in
[34:43] here for example what I do is I'm going
[34:45] to drop the literally just the token
[34:47] that is going to pull void's name
[34:50] from these things so this would be
[34:52] void's name uh which is Mission Target
[34:54] name so that's going to dynamically pull
[34:56] void's name from this whole thing uh so
[34:59] then if you drop him he has a name the
[35:01] other things that like I have power to
[35:03] do for example on this record here I can
[35:05] embed a ship name
[35:07] on the ship so for example here I could
[35:11] put on the
[35:12] name of void ship on if I wanted so I
[35:15] could just like I don't know I'd name it
[35:17] something like
[35:19] all good ships because that's his
[35:21] catchphrase if you've heard it I can't
[35:23] do South African accent but he goes put
[35:25] all good ships have a name
[35:28] that went terrible sorry void
[35:31] um
[35:31] me a camera one
[35:34] not only are you okay not me
[35:38] I deeply apologize for Elliot Malby and
[35:41] the views and opinions of his do not
[35:43] represent those of cloud Imperium games
[35:45] Robert Space Industries turbulent uh
[35:49] this basement that we're in uh Pete our
[35:54] audio guy anybody
[35:58] sorry
[36:04] carrying on
[36:07] um when I scroll down on this so next up
[36:09] is the very last thing which is he
[36:12] Jesus Christ I know I know I keep saying
[36:14] very lastly this is the actual very last
[36:16] thing for me I promise you
[36:19] um I just need to add the mission to the
[36:24] I'm pretty sure it's the last thing
[36:26] um but here's the thing you keep working
[36:29] you keep working
[36:31] this seems like it's taking a long time
[36:34] but the reality is that we are crafting
[36:37] a mission from scratch using the amazing
[36:41] tools that our subsumption team and our
[36:43] data forward team and our robo-hessie
[36:45] team really have created and the fact
[36:47] that we we're going to get it and dear
[36:50] Lord I hope it runs you need to keep
[36:52] working no I'm I'm ready to move on to
[36:55] the next part if it works this is
[36:59] incredibly fast
[37:01] it's
[37:03] actually very fast an hour and 40
[37:05] minutes to make a mission is in insane
[37:08] if it works if it works if it doesn't
[37:10] work
[37:13] I'm going to Germany not coming back all
[37:16] right cool okay so
[37:19] last but not least so I I've added this
[37:21] is the Pu missions this contains every
[37:23] single Mission
[37:25] um and I've dropped in a subdue and
[37:27] recover so the next thing is I would
[37:29] boot my server
[37:38] cool we'll tell you when you go back to
[37:40] the screenshot
[37:46] so we're going to boot our server now in
[37:49] this instance uh booting an internal
[37:51] server takes a while we talked a little
[37:52] bit about that uh last week
[37:55] we have had a server running in the
[37:58] background during this and we're just
[38:01] going to send this information over and
[38:02] hope uh it stays up and running you
[38:05] ready yep okay so that one needs to go
[38:07] away
[38:08] sure yes and this one yep no no no
[38:12] that's the game that's what we want to
[38:14] say that screen needs to go away I need
[38:16] to add the C bus
[38:18] and pull that one off
[38:20] you want me to move this ever away as
[38:22] well cool yes
[38:25] uh what is that box right there that is
[38:28] a beautiful picture of Conor Allenby
[38:30] okay and now you got to make this bigger
[38:33] oh okay I normally play in Windows and
[38:35] the reason I'm playing Windows is
[38:36] playing window just make the window
[38:38] bigger yeah yeah yeah it's just when I'm
[38:40] building I have to I actively change
[38:42] things as I'm building so it's quick for
[38:43] me to Tab out and then yeah uh where is
[38:46] it as well
[38:48] that one
[38:50] okay is that big enough do you want a
[38:52] bigger sure sure
[38:55] can't go anywhere hey
[38:57] go to the last one
[38:59] okay you still go over there it's still
[39:02] windowed true true
[39:04] all right you switch back now
[39:07] hello
[39:08] okay so I'm in game
[39:10] [Music]
[39:12] um so
[39:14] full transparency I have put uh god mode
[39:17] and bottomless mags on and the reason
[39:19] I've done that is because when we're
[39:21] doing this we're like in the Prototype
[39:24] phase so me playing it naturally isn't
[39:26] important it's making sure that it works
[39:28] making sure everything spawns and then
[39:30] if it does I then go back and go right
[39:32] okay I'm gonna start like doing it
[39:35] properly to see the experience we're
[39:37] also not going to have any sound on this
[39:39] because I didn't think about it until
[39:41] just this very moment
[39:45] there we go
[39:47] um so next thing I'm doing is I am
[39:49] forcing myself a Loadout uh so I've got
[39:52] guns because I don't want to spend my
[39:54] time going to the shop so we have the
[39:55] mft loadout that I've crafted so I'll
[39:58] apply that it will give me in a second
[40:00] I'll get a body uh you know I'm just
[40:02] gonna have to full screen this
[40:06] which is quite risky because that could
[40:08] have crashed
[40:09] cool uh so now I have a body
[40:15] I have a buddy uh so I have my inventory
[40:19] um
[40:19] I have all of my stuff that I might need
[40:21] so I've got tractor beams this is like a
[40:23] very big testing like Loadout it has a
[40:25] lot of stuff that I might need and next
[40:27] up I'm gonna Force the mission
[40:29] which is to do SUB Doom recover so this
[40:31] allows me to force Mission because
[40:33] even though you guys have to wait
[40:34] naturally because it's a generator for
[40:36] you to unlockify reputation I just need
[40:37] to test it so I'm going to force it so I
[40:39] didn't done that and now we have to wait
[40:41] for it to
[40:43] spawn loud uh missions are actually
[40:45] entities so they have to spawn like
[40:48] everything else in our game
[40:50] um so they'll be in a spawn queue why is
[40:52] that
[40:54] um
[40:56] you're asking the wrong person I I don't
[40:58] know it's my decoder who's a hell of a
[41:01] lot smarter than me goes these need to
[41:03] be
[41:03] um you have to narrow that down yeah
[41:05] that's a lot of people
[41:07] David my David
[41:10] um
[41:12] it has it'll probably have a reason I
[41:15] just don't know it but it's not anything
[41:16] that I can really just like argue with
[41:18] because
[41:19] what do I know why'd you make missions
[41:21] and half of them don't even work uh
[41:24] right I need to check there's not an
[41:25] asset
[41:26] hello
[41:29] cool no assets we're all clear
[41:32] so an asset is something that pops up in
[41:35] when you're testing
[41:37] um to say that something has gone wrong
[41:39] but it can recover from it so it doesn't
[41:41] crash
[41:42] um
[41:45] you can't leave it you can't do a full
[41:46] screen you have to leave a window yeah
[41:48] okay you said there's even a big window
[41:51] well that's fine because the Game just
[41:53] crashed on me
[41:54] that's what it went yeah
[41:56] you can pick a full screen leave it as a
[41:59] very big window
[42:00] so yes uh if you're wondering why we
[42:03] haven't shown the screen for a while it
[42:04] crash
[42:08] cool
[42:09] um this is this is where I wanna
[42:13] let's let's let's have let's have a
[42:15] conversation about this while while we
[42:17] boot up here no you still do your thing
[42:19] you know you have to look like you're
[42:20] working though
[42:22] um
[42:24] there is there is the live game
[42:27] environment and everybody knows you know
[42:30] you know how that is and what that is we
[42:32] don't need to go into that here then
[42:33] before that there's PTU Wave 2 before
[42:37] that you know it's a bit more unstable
[42:39] and then before that there's PTU wave
[42:41] one then before that there's Eva cotty
[42:45] you know where where it's generally uh
[42:48] so bad and and and unstable than
[42:51] anything we you know we we we we try to
[42:53] you know it try to keep it out of the
[42:55] ice as much as possible then before that
[42:57] is where will Dave and Alex from the ISC
[43:00] gameplay capture team that's where they
[43:02] have to do all their work
[43:04] so you know you know pour a drink out
[43:06] for the for the for the for the people
[43:08] who make the b-roll in ISC uh each and
[43:10] every week because they are working on
[43:12] pre-vacotti builds in whoo but before
[43:16] that
[43:17] or where developers work
[43:19] where the developers and the QA work uh
[43:22] so yeah so a crash is not an uncommon is
[43:25] not a surprising thing to happen
[43:28] especially you know it just yeah you
[43:30] boot it up and it's like yep it is you
[43:33] know most of the time it isn't anything
[43:34] issues because we're constantly an
[43:35] active development so there's just all
[43:37] this stuff coming in and sometimes
[43:39] you'll hit some think that someone else
[43:41] didn't hit like a sprig of mint and it
[43:44] she'll sit down here now the server
[43:46] stayed up it was just the client that
[43:48] crashed
[43:49] oh no it was the server that went down
[43:51] yes he's currently booting yeah I know
[43:56] foreign
[44:09] a here because the server booty takes a
[44:12] little while over some of the questions
[44:13] we collected some of the questions we
[44:14] brought from last week so uh a few
[44:17] people were calling me out on spelling
[44:18] uh yeah I can't spell really can't
[44:21] um it's not a prerequisite no but the
[44:23] the good thing is that um their coders
[44:26] make it safe so we don't have to spell
[44:29] um so whenever I'm doing variables and
[44:31] subsumption the the name of it is purely
[44:33] front facing so I understand what
[44:35] information I've injected into that
[44:36] variable but behind the variable it has
[44:39] a unique uh guide uh guid to which the
[44:44] code uses so it doesn't use my spelling
[44:46] so if I spell it delivery here and
[44:49] delivery there it doesn't matter because
[44:51] it the number of the variable is what
[44:53] links it
[44:55] um so my spelling errors usually don't
[44:57] really matter it obviously matters when
[45:00] it's a code of doing it because they're
[45:01] unprotected but they protect people like
[45:03] me because I can't spell
[45:06] um
[45:07] cool
[45:09] um
[45:09] someone asked if if we have fail safes
[45:12] in place uh for when objects don't get
[45:13] streamed in uh as the mission might
[45:16] break uh in some areas we do in some
[45:19] areas we might withdraw the mission if
[45:20] ever you see a withdraw it's because
[45:22] Something's Happened in the back end
[45:24] that we've detected that we know we
[45:26] can't handle so we just have to take it
[45:28] away from you and then we would see that
[45:30] withdrawal on the mission on our
[45:32] analytics page and we'd be able to go in
[45:33] and sort of investigate as to why that
[45:35] happened so we do have some things in
[45:38] place there are other things you might
[45:39] have noticed where you're doing a
[45:40] delivery Mission and the marker is on
[45:42] the ground underneath that's basically
[45:46] that marker is on the OC route of the
[45:49] entire location while we're waiting for
[45:50] the location to stream in and everything
[45:52] that I need to be loaded for it to then
[45:54] assign you your delivery pot
[45:57] uh someone else asked are these the
[46:00] tools that I use to build PvP missions
[46:02] yes it's all one tool Suite so any
[46:03] Mission logic is built in subsumption
[46:06] just when you make a PVP Mission you
[46:08] have more Hate in Your Heart yeah yeah
[46:10] it's more about like how am I going to
[46:11] pick players against players and that's
[46:13] the fun bit
[46:15] um
[46:15] someone asked me if
[46:19] when a mission chain breaks so an NPC
[46:22] doesn't spawn for example is that
[46:24] typically due to a link in this chain
[46:26] being broken so the chain that was on
[46:27] about is me connecting my nodes together
[46:29] and the answer is uh no usually that
[46:32] could be to do anything everything has
[46:34] to go for a spawn queue and sometimes
[46:36] that spunk you can get very backed up
[46:37] because we have a lot of stuff in our
[46:38] game so you could be at your location
[46:41] waiting and someone's just gone to micro
[46:43] Tech and that planet kind of needs to be
[46:45] there first because that's an entire
[46:47] planet you're gonna either go into it
[46:49] and it's gonna spawn around you and
[46:50] you'll die or whatever so there are
[46:51] things that are priorities and cues and
[46:54] the queue system can be huge but we're
[46:56] constantly working on it to try and make
[46:57] it more efficient and make it so that
[47:00] less requests are handled and things
[47:01] like server meshing should help because
[47:02] the spawn queue would be dedicated to
[47:06] each like thing that runs that area
[47:09] um
[47:10] was last one is there any programmers on
[47:13] the mft similar to how VFX have
[47:15] programmers yes we have David polan we
[47:18] have Mark prades Calder I'm sorry I'm
[47:21] going to destroy some of these people's
[47:22] names uh we have Mark Mansell Mikhail
[47:25] geek
[47:27] sorry Mikhail
[47:31] love that guy and Josh kitchen they're
[47:33] all about they're all our programmers on
[47:37] our team
[47:38] um
[47:38] right we can go back to my screen I just
[47:40] need to make it bigger the missions on
[47:42] I've loaded in game I can't speak I
[47:45] barely speaking no I'm just gonna I'm
[47:47] just gonna end like at least six
[47:49] sentences the next week with it and Josh
[47:50] kitchen and Josh kitchen yeah Josh
[47:52] kitchen he's one of our newest
[47:54] programmers he's doing great you keep it
[47:56] fine just leave it like that just live
[47:58] like that Josh kitchen stop stop playing
[48:00] with it oh okay that's fine okay then
[48:02] cool
[48:03] see everything
[48:04] you what
[48:11] that was for making a full screen before
[48:13] all right uh hold on move
[48:19] see I don't just break missions this is
[48:21] going really well
[48:25] 10 minutes for me to show you the
[48:26] mission
[48:29] if you try to turn it off yeah we're
[48:30] gonna do that we're gonna do this thing
[48:31] here
[48:33] and oh
[48:36] oh that's even worse
[48:39] oh that's even worse
[48:42] is it lost the
[48:45] yeah
[48:49] Jared has to go behind the desk hold on
[48:53] talk to the people Elliot read some
[48:56] questions read some questions go and
[48:57] then everyone ask me questions I'm here
[48:59] now
[49:01] did he delete the game by mistake no
[49:06] glad this show isn't live otherwise this
[49:09] part of br oh yeah there's no chance
[49:11] this show is live at all who's your
[49:13] daddy and what does he do what's your
[49:15] daddy not answering what does he do
[49:18] what's for lunch it's 5 p.m I'm gonna
[49:20] have tea
[49:21] why are you the worst Devon Sig
[49:25] I have no clue but thank you who's that
[49:27] Luke uh you know what yeah it could be
[49:31] why are you two time on the two-time for
[49:34] a reason do you play 40K I do yes you
[49:36] back David yes
[49:38] okay
[49:39] do the thing how much do you bench
[49:44] nobody asked that you added legit
[49:47] someone put it in here someone asked to
[49:48] how much I bench Okay so
[49:52] uh I've accepted the mission
[49:55] which is here
[49:58] um but it looks like some of the strings
[49:59] have broken so we won't see some of the
[50:01] strings uh usually this is because uh
[50:04] when you when you're making strings live
[50:05] you have to make sure you export them to
[50:07] the game if you don't export them to the
[50:09] game
[50:10] um it uses the pack file strings and
[50:13] it's something you have to remember
[50:14] every time you shut down the client and
[50:16] reopen it you have to constantly export
[50:18] to the game so we're gonna have no
[50:19] strings but that's fine
[50:21] um because I can tell you what it oh
[50:22] what is on the screen so what I've just
[50:25] done is I've gone into F3 mode which is
[50:27] no clip
[50:28] um because again the important part of
[50:30] my flow is being at the mission and
[50:32] playing the mission so flying there
[50:33] isn't a part of it not until I need to
[50:35] start testing naturally but again I'm
[50:37] just testing to see if it works so I'm
[50:40] going to F3 I've been a third person
[50:44] yep
[50:46] this is
[50:48] I don't have Eva it doesn't take you
[50:50] into EBA it's literally just like you're
[50:52] flying As You Are
[50:53] cool so I'm going to get a bit closer
[50:56] faster than any ship
[50:58] can do it
[51:01] here's the planet
[51:02] loading in
[51:04] a bit closer to the mission location
[51:10] cool which is here nice I'm gonna get
[51:13] get around about here so I've entered
[51:15] the area
[51:16] um so it knows where I am and oh I need
[51:19] to so he knows where I am so at this
[51:21] point this is where it's like locate uh
[51:23] the sparkle uh so I have to locate the
[51:26] ship via scanning now again because I
[51:28] skipped the whole Aesop stuff uh I'm
[51:30] just gonna v-spawn the Cutlass
[51:34] um which is a quick way of being able to
[51:36] just just spawn a ship again quick
[51:39] testing it's about like getting in
[51:42] getting in and texting you can't test
[51:44] any content I'm gonna make sure that God
[51:46] Mode's on so I don't die and we have to
[51:48] restart this whole process
[51:50] god mode there you go and bottomless
[51:52] mags cool and basically then all I do is
[51:56] at this point the player would be going
[51:58] around and looking for the ship
[52:02] um and scanning a but right now this
[52:04] light is blinding me and I can't really
[52:06] see much on my screen so in this case
[52:09] what I might do is I might turn on unlip
[52:11] mode for myself and I can see stuff
[52:13] makes it look horrible yes but again I'm
[52:16] here to test stuff works
[52:20] so I'm going to look around and try find
[52:22] the ship
[52:24] we can't do full screen Zoro it's what
[52:26] caused the problem before
[52:35] oh there we go
[52:36] so there's the ship and there's the
[52:38] macron my God it's working chairs
[52:42] touch wood
[52:43] uh so there's the ship
[52:45] so next up I would infiltrate the ship
[52:48] um but again I
[52:51] I'm playing purely for functionality to
[52:53] make sure it works so I'm gonna I'm
[52:54] Gonna Fly there
[52:56] there we go
[52:59] so here's the reclaimer
[53:01] the all good ships reclaimer void is
[53:03] reclaimer
[53:05] um and next thought what I'm going to do
[53:07] is I'm going to come in the air lock
[53:09] so at this point because I've as a
[53:12] developer at this point because I've
[53:14] cheated a lot of the way here I need to
[53:16] uh chill for a bit and went out why I
[53:21] say chill and what I mean by chill is
[53:23] um
[53:24] I've beaten streaming on a lot of cases
[53:27] uh so I have to make sure that the spawn
[53:29] cue slowly works it weighs down at all
[53:31] of my stuff spawns so I what I do
[53:33] usually is I'd sit here for a hot minute
[53:35] uh just while I wait for everything to
[53:37] spawn
[53:38] um turn the light back to normal oh yeah
[53:40] I'll turn the lighting back now Ian
[53:42] doesn't come after me
[53:44] so here we go atmospheric torch on uh so
[53:48] now what my plan would be is that um I
[53:52] made the mission so you have to find uh
[53:54] boy voidy so at this point I would be
[53:57] searching searching around to see if I
[54:00] can spot voidy
[54:04] there you go occupied ships and now
[54:05] there's AI on it and we've put markups
[54:07] this is stuff Nick echo's been working
[54:09] on uh put mark up oh we have an asset
[54:12] this is the thing I was on about this is
[54:13] something is broken
[54:15] um but it's one it's telling me that it
[54:17] can continue without it crashing so what
[54:20] our QA would do is they would
[54:24] they would ensure that they bug all of
[54:27] like they'd report all these assets and
[54:29] then each team will get these assets oh
[54:31] clicked out
[54:33] um
[54:36] to make sure
[54:39] there we go there's another one
[54:40] the right receiver has to turn these off
[54:42] but we usually leave them on so we can
[54:44] see stuff like for example there might
[54:46] be an asset that I've caused I keep
[54:48] clicking off them on the screen yep
[54:50] there might be an asset that I've caused
[54:51] and this is my only way to figure it out
[54:57] I I forget uh cool so yeah at this point
[55:02] I'm looking around trying to find voidy
[55:05] Where You Are
[55:08] sneaking around
[55:10] so I'm going to call the elevator and
[55:11] I'm going to head down into some of the
[55:13] other areas so what do we got
[55:16] processing hold I'll go to the cargo
[55:18] hold maybe voidy sneaking around there
[55:21] counting his mouth you don't actually
[55:22] know where he's at no I've got no clue
[55:24] there's a randomizer element that we put
[55:25] in there yeah yeah pretty much you can
[55:27] have a specify where they are you can
[55:28] randomize it um I can't remember where I
[55:30] put voidy but cargo hold you know we
[55:32] might be in here holding his maze
[55:35] smelling it having a nice time with it
[55:38] avoidy
[55:41] are you here ah hello
[55:47] how did you survive that oh they've
[55:49] dropped their weapons so
[55:51] um
[55:53] so these things are where we'd find
[55:54] issues like this and we'd report and
[55:56] like get these fixed up before
[55:58] um he's holding before we put it out
[56:02] um I'm just gonna murder hobo everybody
[56:07] uh yep nice right now you need to go
[56:10] back out voidy isn't in here
[56:15] and this is places where we'd find like
[56:18] server performance uh like and we'd look
[56:21] at that and how it affects the mission
[56:22] because there might be like we have the
[56:24] proximity tracker in but there could be
[56:26] the server currently I'm running it
[56:28] locally so it's kind of like not going
[56:30] to be accurate but the server forms
[56:31] could be pretty low to the point where
[56:33] the proximity tracker can't update quick
[56:36] enough
[56:37] um
[56:38] so I can actually see it oh it's this
[56:39] way uh so I'm in another area
[56:45] oh waiting for me
[56:49] that knocking people up
[56:52] you wanna there you go again I've got
[56:54] good old mode on so I don't really need
[56:56] to care about the damage but please
[56:57] would get out of here
[57:01] you as well
[57:03] anyone else
[57:06] oh oh there you go there's the marker
[57:08] I've come close enough to void dude that
[57:09] I know where he is and I would be able
[57:11] to go up this little bit here but that
[57:13] because that's the the bit that leads up
[57:15] but uh I can't climb up there so I'm
[57:17] gonna
[57:18] go all the way back and try and knock
[57:20] voidy out
[57:22] I'm coming
[57:25] uh is that the next floor
[57:31] world's slowest elevator come on
[57:37] all these friends have come out to play
[57:51] no scope
[57:56] [Music]
[58:01] cool here we go voidy me and you
[58:06] 've gone so next up uh as you can see I
[58:10] now have a drop-off marker I have
[58:13] um voided they should say void dude he's
[58:16] not in his normal armor oh hello
[58:21] of course so in the next stop I grab
[58:24] void and then I
[58:28] what happened to your infinite mags uh I
[58:31] keep thinking I've got the um oh my God
[58:35] no one saw that no worries no worries
[58:39] uh I it thinks I've got a different gun
[58:41] in my hand that's why there you go
[58:44] and then I'm missing all my shots die
[58:47] where are you where have you gone
[58:51] saw it right now back to my multi-tool
[58:57] cool and now we
[59:00] there you go we grab void
[59:07] wait dude
[59:12] cool uh I think
[59:16] I think there's a bug in where if
[59:18] they're unconscious you can't track to
[59:19] be in them yeah there you go okay so the
[59:22] mission would obviously fail if you
[59:23] murdered boy dude because you are here
[59:25] to subdue and deliver but due to that
[59:27] bug and the fact that I haven't built
[59:29] the hole if you kill them the mission
[59:30] fails because again just testing for the
[59:32] feeling I've left him killable so now
[59:34] avoid uh
[59:36] well you can actually move with me right
[59:39] next up
[59:41] um so this is the quick keyword blame a
[59:44] bug and it was clearly a skill issue
[59:49] yeah that's what we did that's all we do
[59:52] all that you jump straight to oh it's a
[59:54] buck
[59:55] Not For a Moment considering that you
[59:57] were just bad I moved him twice and he
[1:00:00] shot back to his original location
[1:00:01] because you were bumping him into stuff
[1:00:03] bumping him into stuff he was rebounding
[1:00:05] clearly it's void's issue it's your
[1:00:07] issue voidy
[1:00:08] cool uh next up I'm out the ship and I
[1:00:11] need to get a ship to then take me back
[1:00:15] and I can't bother to go get my other
[1:00:16] ship so I'll spawn a fresh one
[1:00:23] and then I'm going oh my God third per
[1:00:25] thank you how close am I yeah it's all
[1:00:28] right so next up I need to put voidy in
[1:00:32] the ship
[1:00:35] yep
[1:00:38] so I'm going to open up the back
[1:00:45] uh there he is
[1:00:48] boy dude
[1:00:49] come on
[1:01:00] I'm trying to be careful because if I go
[1:01:01] too fast he'll detach from my tractor
[1:01:03] beam
[1:01:04] and I'm using no clip mode so it's a bit
[1:01:06] quicker
[1:01:10] so this is what bounty hunting B2 looks
[1:01:12] like absolutely not voodoo
[1:01:15] no definitely not
[1:01:18] shot him through the door open it's
[1:01:20] pretty good
[1:01:21] there you go right
[1:01:23] avoid yellow
[1:01:26] why are you still carrying him around uh
[1:01:28] what void yeah
[1:01:30] he's in the ship already you need to
[1:01:32] make sure he's comfortable in yeah
[1:01:39] I might have killed him I'm not rude
[1:01:42] now if it lets me into the seat there
[1:01:44] you go
[1:01:48] um now
[1:01:50] called the star map and set a
[1:01:53] destination
[1:01:55] I appreciate the way you've ordered that
[1:01:57] I have to tackle the star map
[1:02:02] I this is where I want to remind
[1:02:03] everybody
[1:02:06] I've said it before I'll say it again
[1:02:08] I'm saying it now
[1:02:10] every single thought you've ever had
[1:02:13] about Star Citizen every single comment
[1:02:16] you've ever made in twitch or YouTube or
[1:02:18] just in the privacy of your own home
[1:02:21] we've had them all we've said them all
[1:02:24] and we were doing it long before it's
[1:02:29] you're we're just like you and you're
[1:02:31] just like us
[1:02:33] good ways and not
[1:02:37] yeah like Elliot's skill issue and
[1:02:39] blaming bugs for skill issues listen it
[1:02:42] was clearly a book
[1:02:46] okay right now I just need my QT to
[1:02:49] happen
[1:02:50] there we go and now I just need to try
[1:02:52] to drop them off
[1:02:54] um
[1:02:56] we can we can assume that you know we're
[1:02:58] already in time we don't need to keep
[1:02:59] yeah I mean the delivery module is
[1:03:01] something that has been working
[1:03:03] for quite some time so uh This Bar would
[1:03:06] be pretty explanatory you take voidy you
[1:03:08] drop him off in a location uh Bob's your
[1:03:11] uncle
[1:03:12] actually Carl was my uncle oh sorry
[1:03:15] sorry Carl
[1:03:16] but there you go Mission worked first
[1:03:18] time
[1:03:20] yeah now who can't make missions
[1:03:23] he's not getting the crash
[1:03:26] um
[1:03:27] so yeah so thanks that's it uh we're
[1:03:31] gonna assume he goes back to stand in
[1:03:33] one Stanton one is what we call
[1:03:34] internally which one is that oh
[1:03:36] assistant sorry Kristen Kristen yeah we
[1:03:38] use Stanton one two three and four but
[1:03:40] they obviously you know as Michael Tech
[1:03:42] Crusader blah blah
[1:03:44] um
[1:03:46] that's it how you feel Elliot yeah good
[1:03:49] uh it took a bit longer but
[1:03:52] we got it working it's it's like it's
[1:03:54] not it's not a simple process to make
[1:03:57] missions it takes a while and then like
[1:03:59] for example I'm not even halfway
[1:04:00] finished because after this I'd go back
[1:04:02] and we'd we'd look at it as a team we'd
[1:04:04] iterate we'd improve we'd have a look at
[1:04:07] how we could make it better like what
[1:04:09] happens if you have to manage void is
[1:04:10] like food and water like you have to
[1:04:12] feed him would that make it more of an
[1:04:14] interesting gameplay Loop then because
[1:04:15] right now what I did with voidy he is
[1:04:18] essentially a box in a different form
[1:04:22] um so having that extra gameplay of
[1:04:23] feeding him making sure he stays uh
[1:04:26] healed up and things like that and that
[1:04:28] you don't die you know we could have
[1:04:29] reinforcements come after to try and
[1:04:30] reclaim him and you have to protect him
[1:04:32] and all that sort of stuff makes more
[1:04:33] interesting gameplay but considering
[1:04:35] that in less than two hours we did a
[1:04:38] first pass V1 of a mission and you know
[1:04:42] asserts aside and I think it functioned
[1:04:44] yes it functioned everything that we
[1:04:46] needed it to do did it for the first
[1:04:48] version yeah so like I said now we were
[1:04:49] iterating anything so yeah that is a uh
[1:04:53] uh it's still a very brief and extended
[1:04:56] but but still a very brief look at the
[1:04:58] mission creation process
[1:05:01] um I want to thank
[1:05:02] um I'm sorry what was your name again
[1:05:04] Elliot Elliott uh and all the members of
[1:05:06] the mission feature team for their
[1:05:08] fantastic work as well as the you know
[1:05:10] the folks behind subsumption the folks
[1:05:12] behind data Force folks behind Robo
[1:05:14] Hesse I feel like we have to shout hessy
[1:05:17] out of you know you know Andrew Hesse
[1:05:20] um uh poor went out for Jake muley and
[1:05:23] Ben Dorsey
[1:05:24] um
[1:05:25] that's it for this week's show uh we got
[1:05:27] a couple housekeeping uh things and then
[1:05:29] we're gonna we're gonna throw the raid
[1:05:30] over to uh one of our star Citizens
[1:05:32] We're playing
[1:05:33] um next week is Gamescom Gamescom is the
[1:05:38] yearly convention out in Cologne Germany
[1:05:40] it is one of if not at this point with
[1:05:43] EA kind of retired it might be the
[1:05:45] biggest video game convention in the
[1:05:46] world right now that that's happening
[1:05:48] next week there are three
[1:05:51] three consecutive bar citizens going on
[1:05:54] next week in Cologne they're on Thursday
[1:05:57] night Friday night and Saturday night
[1:05:58] you can check out the
[1:05:59] robertsbaseindustries.com website for
[1:06:02] details
[1:06:03] um
[1:06:04] also citizen con citizencon is just
[1:06:07] about nine weeks away uh that's the now
[1:06:10] two day event uh that's going on October
[1:06:13] 20th and 21st uh is there the 21st or
[1:06:15] 22nd 20th what somewhere around there uh
[1:06:19] that's in Los Angeles California at the
[1:06:20] Los Angeles Convention Center uh by far
[1:06:23] the biggest citizen con we've ever
[1:06:25] attempted uh tickets for that are still
[1:06:27] available also on the robertsbase
[1:06:29] industries.com website and because of
[1:06:32] Gamescom
[1:06:33] uh being next week and then we're having
[1:06:36] a summit in the Frankfurt office
[1:06:37] afterwards and because of citizencon
[1:06:40] moving off of its traditional 1010 day
[1:06:43] and being a little a little later in the
[1:06:44] month in October we are shifting the
[1:06:48] weekly video Cadence uh for the next
[1:06:50] week for the next two months really uh
[1:06:52] every quarter
[1:06:54] make sure everybody's paying attention
[1:06:56] every quarter we produce approximately
[1:06:58] 10 episodes of uh inside Star Citizen we
[1:07:00] are still going to produce 10 episodes
[1:07:01] of inside Star Citizen but we are going
[1:07:03] to introduce a one-week Hiatus uh next
[1:07:06] week uh that's going to that's going to
[1:07:08] allow us to push our content even closer
[1:07:10] to Citizen con without having a big
[1:07:12] month-long gap between our last episode
[1:07:14] of ISE and the beginning of season gone
[1:07:17] so still all the same episodes still all
[1:07:19] the same stories uh basically we're
[1:07:22] going to take a break next week come
[1:07:24] back the week after with the last six
[1:07:26] episodes of the quarter all is
[1:07:29] originally intended and then there will
[1:07:31] be no uh star system live next week
[1:07:33] because I'll be in uh cologne uh hanging
[1:07:36] out with people at the bar citizen so uh
[1:07:39] you needed to ask that question a long
[1:07:42] time ago
[1:07:43] never mind
[1:07:47] that was your one you almost made it to
[1:07:48] the end without it so yeah uh for Elliot
[1:07:51] for me thanks for watching uh we're
[1:07:53] gonna throw the raid to quanzi it's a
[1:07:56] crunchy is that you say it I've never
[1:07:57] actually heard him say his name outside
[1:07:58] uh krancy uh he is a terrific Star
[1:08:01] Citizen a streamer uh we're we're big
[1:08:04] fans um Elliot's a bigger fan than I am
[1:08:06] I think he's all right uh but we're
[1:08:07] gonna throw the raid over to him I just
[1:08:09] can't
[1:08:12] jerk sometimes thanks for watching
[1:08:14] Everybody Take Care uh see you in two
[1:08:16] weeks

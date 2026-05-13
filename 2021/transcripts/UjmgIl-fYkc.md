# Star Citizen Live: US PU Feature Team

**Video:** https://www.youtube.com/watch?v=UjmgIl-fYkc
**Date:** 2021-08-06
**Duration:** 1:01:41

## Transcript

[00:03] hello everybody
[00:04] welcome to another edition of star
[00:06] citizen live uh the uspu feature team
[00:09] i'm your host jared huckabee
[00:10] and joining us on the show this week are
[00:12] three members of our steam uspu
[00:14] feature team uh we've got a lot to talk
[00:17] about today so we're going to jump right
[00:18] into it some quick introductions because
[00:20] everybody's
[00:21] every show is somebody's first show
[00:22] we're going to start immediately to my
[00:24] right here
[00:25] chad who are you what do you do for star
[00:28] citizen
[00:30] yeah hi my name is chad mckinney and i'm
[00:33] a lead gameplay engineer
[00:34] on the uspu gameplay team and what's a
[00:38] what's an engineer do yeah program
[00:41] we make the features in the engine that
[00:44] you know in coordination with design so
[00:47] we actually
[00:48] you know make make the fun stuff is the
[00:50] way i like to play it
[00:52] okay ben no stranger to inside star
[00:55] citizen but
[00:56] who are you for star citizen live hi
[00:59] i'm ben dorsey i am a senior systems
[01:01] designer on uspu
[01:03] um which means that i do a lot of the
[01:07] planning and coordination and then some
[01:08] of the implementation
[01:10] for a few various things in this case uh
[01:14] features like reputation and then uh
[01:16] content like
[01:17] uh nine tails or jump down too
[01:22] and classic calling all debs rock star
[01:25] rob reiniger who are you and what do you
[01:27] do for star citizen
[01:28] uh hi my name is rob reininger i have
[01:31] actually recently been promoted to the
[01:33] assistant director of the
[01:35] systemic and play services pillar so
[01:38] it's uh
[01:39] classically working with the uspu team
[01:41] here as product owner of several of the
[01:43] the features that we've done uh getting
[01:46] to work more with our
[01:47] sst team and the mft team here in the
[01:50] future
[01:51] uh so be getting getting quite involved
[01:53] with the simulation here moving forward
[01:56] and uh once again congratulations on
[01:58] your sharks themed office
[02:00] paint job it's it was nice i saw it
[02:03] the other day it was cool still there
[02:06] yeah
[02:06] it's waiting for you when you return to
[02:08] office all right
[02:09] so uh on today's show we are talking uh
[02:13] us features so what does that mean every
[02:16] team in star citizen works on a finite
[02:18] number of features
[02:19] not every team works on every feature in
[02:21] the game
[02:22] we also are on the road to digital
[02:24] citizencon
[02:25] so there are lots of topics and subjects
[02:29] being held close to our chest right now
[02:31] in preparation for
[02:32] the various panels and presentations
[02:34] that are coming on october 9th
[02:36] so we do have a a a a focus of of stuff
[02:39] that this team is working on that
[02:41] we're approved to talk about today and
[02:43] you know saving other stuff
[02:44] for cis and gone uh we put up a thread
[02:47] up in spectrum where we collected
[02:48] questions
[02:49] throughout the week and let people vote
[02:50] up on the ones they wanted to see
[02:51] answered most
[02:52] uh and one of the biggest topics that
[02:55] was voted up was
[02:56] cargo refactor so we're gonna start
[02:58] we're gonna start with some questions on
[02:59] the cargo refactor first
[03:01] um right off the bat why don't we just
[03:04] set the stage here
[03:06] what is the cargo refactor and what
[03:08] isn't the cargo effect
[03:10] what are we actually trying to do here
[03:11] what are we talking about when we say
[03:12] cargo
[03:14] cargo can be refactored in many ways to
[03:17] help make the game
[03:18] play better we've obviously got the
[03:19] cargo profession that we're working
[03:21] towards
[03:21] but specifically the way cargo worked so
[03:24] in the past here
[03:25] uh until we finished this
[03:28] when you bought something from a shop it
[03:30] got statically placed into your ship's
[03:33] cargo hold and you could not interact
[03:35] with it when the ship exploded we kind
[03:37] of
[03:37] jettisoned out you know smaller versions
[03:39] of the boxes that you could actually
[03:40] grab and
[03:41] take back to your ship which could then
[03:43] be sold at a shop somewhere but this
[03:46] refactor is going to give us a kind of a
[03:49] clean slate as far as how we define
[03:52] what our commodities are there was some
[03:54] some stuff that was just legacy that
[03:55] caused problems that we wanted to fix
[03:58] but the big thing for the players is
[03:59] that it's going to be physicalizing the
[04:01] cargo within the cargo grid
[04:02] uh it also sets us up for some other
[04:04] stuff that we're going to talk about in
[04:05] a bit you know persistent hangers and
[04:07] just
[04:08] the the cargo gameplay as a whole but
[04:10] from the player's perspective it's
[04:12] it's the physicalization the cargo you
[04:13] not tractor beam stuff off the grid
[04:15] uh you can also track your beam stuff
[04:17] onto the grid you're also going to be
[04:19] able to jettison
[04:20] larger size boxes right so it's not just
[04:22] going to be the small ones anymore we
[04:23] can
[04:24] we can start doing the bigger ones so as
[04:25] far as what i would expect to see
[04:28] in the first iteration of it would be
[04:30] generally that
[04:32] yeah if i could just add to that one
[04:33] thing that i would say is i think
[04:35] everybody's
[04:36] or hopefully everyone's noticing that
[04:38] there's all this effort now with loot
[04:40] and inventory that's been coming out
[04:42] cargo is being uh refactored you know
[04:45] just kind of reimagined
[04:46] in this new world where we have
[04:48] localized inventory
[04:50] what that means is that there are going
[04:51] to be commodities
[04:53] uh in certain kinds of containers that
[04:56] have various
[04:57] compositional contents for the various
[04:59] commodities that you'll want to trade
[05:00] but they'll also be things that are
[05:02] inventory containers as well that can
[05:04] contain actual items and they can nest
[05:06] so
[05:07] inventories containers themselves or
[05:09] entities so this can mean that you can
[05:11] be
[05:12] uh potentially trading and shipping in
[05:15] your cargo grid
[05:16] inventory as well as commodities which
[05:18] means that looting is going to be
[05:20] available for the continents inside of
[05:22] the cargo grids as well
[05:24] and the contents as you move them around
[05:26] that
[05:27] the localization of them is going to
[05:29] become much more important to the future
[05:31] right now all right so as far as the
[05:35] diving into some of the questions that
[05:36] we're seeing from both the live chat and
[05:38] the spectrum thread here
[05:40] uh right off the bat uh will we be able
[05:43] to take other people's cargos or other
[05:46] people's cargo
[05:47] uh both forcibly and or with permission
[05:50] i'm glad they
[05:51] allowed for both options as well as the
[05:53] saddle bags on the prospector or the
[05:55] mall so there's a couple questions in
[05:56] there so let's do the first one
[05:57] uh will we will we be able to take cargo
[05:59] from other people uh
[06:01] forcibly or with permission that as long
[06:04] as you can access it
[06:05] whether it be through you know their
[06:07] cargo grid getting into their ship
[06:09] somehow if you can disable the ship
[06:10] without
[06:11] blowing it up right and can get in sneak
[06:13] onto their ship you can
[06:14] maybe get off with some valuable
[06:16] packages um so yeah and and
[06:18] i guess one of the things that we kind
[06:19] of missed talking about the the refactor
[06:21] here is that
[06:22] this the the way that the prospector
[06:24] bags for instance
[06:25] were were set up uh was that they were
[06:27] all kind of part of the ship
[06:28] right it was just an animated pod but
[06:30] this will set us up to allow us to
[06:32] detach those
[06:33] uh for other people to come and pick
[06:34] them up taking them to refineries so
[06:36] that the mining ship can keep going so
[06:39] it is kind of like a all-inclusive you
[06:42] know
[06:42] uh it's just an item like any other item
[06:45] at this point
[06:46] right and whether it's attached to the
[06:48] outside of a ship or
[06:49] placed inside of a ship it's it's it's
[06:52] kind of all that
[06:54] he's kind of cool and so for clarity
[06:57] when that first started even getting
[06:58] discussed within the team
[06:59] within the first five seconds people
[07:01] were talking about like how cool would
[07:02] be to run a heist and break into
[07:04] someone's ship and take their stuff or
[07:06] force them to give you stuff because
[07:07] they
[07:09] you've you've threatened to blow them up
[07:10] if they don't like that is 100
[07:13] yeah on the technical side if i could
[07:15] just like kind of
[07:16] clarify a little bit previously cargo
[07:18] instead of cargo grids
[07:20] were really just some data and
[07:23] some persistent representation and we're
[07:26] changing
[07:27] it to be represented as entities
[07:30] and for anyone that's not familiar with
[07:31] like you know game dev terminology and
[07:34] entity is this really generic term for
[07:36] just
[07:36] something that like a player might see
[07:38] in the game so what that means is that
[07:40] um
[07:40] the cargo boxes the um you know those
[07:44] those prospector whatever bag things uh
[07:47] these things are going to be things that
[07:49] we have a lot more
[07:51] ability to allow to stimulate
[07:52] independently so that they can attach
[07:54] detach you can interact with them
[07:56] individually
[07:58] uh so that gives us a lot of leeway to
[08:00] open up new game play opportunities like
[08:03] actually stealing the sacks and then
[08:04] putting them onto your ship and putting
[08:06] them inside
[08:06] another ship and just getting creative
[08:08] and other players do very interesting
[08:10] things uh but yes
[08:12] just largely a big part of this is just
[08:15] making them actually interactable
[08:16] objects in the world
[08:18] individually as opposed to these like
[08:19] static fixed things
[08:22] yeah 100 definitely seems like uh it's
[08:26] ripe for
[08:27] uh future progress on things like piracy
[08:30] and stuff like that because now
[08:31] these things will be because they're
[08:32] physicalized in the world now now they
[08:34] can survive explosions
[08:36] and stuff like that absolutely yeah and
[08:38] could be damaged right
[08:40] so we want to be able to damage a
[08:41] container that might devalue what's in
[08:43] it or
[08:43] you know it opens the door for a lot of
[08:46] the things that we've said we've wanted
[08:48] to do with cargo over the last
[08:49] couple years and then sets us up for you
[08:52] know being able to put a volatility
[08:54] system on it or you know it's like yeah
[08:56] cool it reacts to this other thing just
[08:57] because it's near it right like
[08:59] because it's physically yeah degradation
[09:02] uh but because it's physically an item
[09:04] we can start to calculate those things
[09:06] independently of each other
[09:08] which is really nice and for the folks
[09:10] in the chat they're asking about when
[09:12] keep an eye on the public roadmap all
[09:15] when questions are answered by the
[09:16] public
[09:18] as best as we're able to anyway uh let's
[09:21] see what else do we got in the cargo
[09:22] factory in regard to the cargo refactor
[09:24] will there be any lego style or snap to
[09:27] option
[09:27] uh or snap two option to get boxes
[09:30] stacked nice and tidy when manually
[09:31] placed by hand or a tractor beam or
[09:33] anything else so that that was one of
[09:36] the things when we were starting to
[09:37] to talk about what this refactor means
[09:39] um
[09:41] this is a bigger feature that spans more
[09:43] than just the usp team and then much
[09:45] like we're working with the actor
[09:46] feature team on the the personal
[09:48] inventory and the asset manager
[09:50] to kind of help go with that um this
[09:53] is something that we're going to need to
[09:54] work with them on because that's a
[09:55] personal player experience
[09:57] uh thing that you know it's the mining
[10:00] tool or the tractor beam or the the
[10:02] paw tool right so um we will provide the
[10:05] hooks
[10:06] in order for them to to be able to do
[10:08] that we said snapping is almost a
[10:11] mandatory thing that we need right uh so
[10:14] when they're ready it should should have
[10:16] all the hooks they need to kind of just
[10:18] snap it in and uh i think i think the
[10:21] the first thing i would expect to see
[10:22] would probably be tractor beam
[10:24] interaction
[10:24] on that level and then the the physical
[10:26] placement um
[10:28] probably need a little extra work just
[10:29] from the after movement and
[10:32] you know animation side of things but
[10:34] certainly would be able to use the same
[10:36] data
[10:37] to do snapping yeah technically we're
[10:40] implementing it expecting that coming
[10:42] and it's a planned part the first
[10:44] release of cargo may not include derived
[10:47] interaction and
[10:48] lego style snapping but um the
[10:51] functionality
[10:52] under the hood from the cargo system
[10:54] won't support it
[10:55] okay uh now folks who have been uh who
[10:59] who've been paying attention to
[11:01] social media today have noticed that the
[11:02] star citizen account announced that 314
[11:05] is expected to go live later today uh
[11:09] talking about 314 one of the one of the
[11:11] new uh um
[11:12] highlight features of that is our nine
[11:14] tails lockdown uh dynamic event that
[11:15] we've talked to in the past uh
[11:17] ben uh we have a couple questions about
[11:18] ninetales lockdown
[11:20] does this event trigger from in-game
[11:23] actions
[11:24] or is it like xenothreat where it's
[11:26] scheduled and
[11:27] started by the developers uh it is it is
[11:30] started by developers it's not even
[11:32] automatically scheduled that's actually
[11:33] another step that we want to take is
[11:35] allowing it to be put on basically like
[11:37] a calendar and put like a date and time
[11:39] on it
[11:40] um that was supposed to be the next step
[11:42] but uh
[11:43] frankly all that tony has been able to
[11:46] talk about for a past few weeks is
[11:47] actually wanting to make it so it's
[11:49] triggered by things in game potentially
[11:50] so
[11:51] that schedule might get a little bit
[11:52] flipped up um
[11:54] but it is definitely intended that
[11:56] eventually some form of in-game
[11:59] actions will cause these to happen be
[12:01] that increasing the piracy level in an
[12:03] area to the point where
[12:04] ninetales thinks that they have a shot
[12:06] or even just doing missions for them to
[12:08] the point where they get enough
[12:09] resources
[12:10] as an organization to kind of um
[12:13] build up the fleet they need to do these
[12:15] kinds of things and and that's for
[12:16] all world events in the future that is
[12:19] the plan that eventually these are all
[12:20] kind of driven by that
[12:22] simulation of what's going on and player
[12:24] actions
[12:25] yeah and if you want to know even more
[12:27] about nine tails lockdown check out the
[12:29] segment we did on inside star citizen uh
[12:31] towards the end of last quarter
[12:32] it's available on youtube now one more
[12:34] nine tails question before we move on
[12:36] though uh
[12:37] when ninetales locks down a station or a
[12:40] landing zone
[12:41] will players still passively spawn there
[12:43] uh when joining the pu
[12:45] or does that affect your login locations
[12:48] if it is where you were set then you you
[12:50] stay there yes i do not do anything to
[12:52] affect you there whatsoever
[12:54] um that's not to say that we never will
[12:56] uh particularly if
[12:57] in some distant future there's a time
[13:00] when they actually take over that
[13:01] station that might have some
[13:02] ramifications
[13:03] to people there that aren't friendly
[13:05] with nine tails
[13:06] but um for now no you will log back in
[13:09] right on that station so there's an
[13:11] opportunity for some uh
[13:13] juicy game starts just log in casually
[13:16] you know have a fun persistent universe
[13:18] experience and you're in the middle of a
[13:19] giant
[13:20] pvp event has some knock-on fun
[13:23] potential gameplay of like i need to
[13:25] hire someone to come in with some big
[13:26] guns and rescue me and that
[13:28] sounds awesome in some ways or
[13:30] terrifying so you know
[13:32] next week's ise actually is all about
[13:34] that merging of
[13:36] pve and pvp uh that we that we shoot for
[13:38] in the precision universe so check that
[13:40] out
[13:40] uh next week okay um chad
[13:44] one of the subjects that we posted about
[13:47] on spectrum that's
[13:48] like garnered a lot of like perk deers
[13:50] like what what is this
[13:52] procedural character generation
[13:55] so let's start with the basics what is
[13:57] it and what
[13:58] isn't it yeah what is going on here um
[14:02] so this is part of uh i would say a much
[14:05] larger
[14:06] larger initiative of tony's so if
[14:09] you've been paying attention you'll see
[14:11] all these big ideas being thrown about
[14:14] about like dynamic populations
[14:17] virtual ai missions all this stuff
[14:20] and at a certain point uh you have to
[14:22] ask the question of
[14:24] how are these things being populated
[14:26] where does the content come from
[14:28] and then whenever you start thinking
[14:30] about that you also start to wonder
[14:32] about
[14:33] okay well what about the locations in
[14:35] the game what about just
[14:36] the universe that we're trying to build
[14:38] the number of solar systems we're you
[14:39] know intending to make
[14:41] and quickly we run up on a problem which
[14:43] is that we
[14:44] really just cannot reasonably hand
[14:46] author
[14:47] all of the characters in the game to get
[14:49] the scale that we're looking for and get
[14:51] the dynamism that we're looking for
[14:53] to get the kind of uh i would say kind
[14:55] of persistence that we're looking for
[14:57] and the reaction to the character
[14:59] the players in the game so procedural
[15:02] character generation
[15:03] is uh you know one tool to address this
[15:07] problem and the idea is essentially that
[15:09] instead of hand authoring you know
[15:11] the vast majority of the characters of
[15:12] the game uh
[15:14] take which takes a lot of time right
[15:16] there's a lot of very manual
[15:18] markup that's very bespoke um you know
[15:21] for example
[15:22] you know maybe people may not be aware
[15:24] but like if you just take like a random
[15:26] engineer in the game right um there
[15:29] would be like a hundred variants of this
[15:31] that
[15:32] hand authored loadouts have been created
[15:33] for them in order to
[15:35] add the kind of variety in the game that
[15:37] you
[15:38] hope to see uh and even still right
[15:41] people
[15:41] notice the repetition right you'll
[15:43] you'll see the same characters
[15:45] and the thing is you you want a certain
[15:47] amount of that you want a certain amount
[15:49] of seeing the same characters
[15:50] in similar scenarios um but at a certain
[15:54] point there's a kind of
[15:55] uncanny valley where it's like okay that
[15:57] person was just walking over there and i
[15:58] always see them over here right
[16:00] so the idea is that by using a process
[16:03] that's a kind of seated randomness
[16:06] that is designer guided with us with
[16:08] that's rules driven
[16:10] we can kind of work from
[16:14] how do i describe it i would say you can
[16:16] kind of work from
[16:17] like what the world that we want to
[16:19] build is
[16:20] backwards to a set of rules that allow
[16:23] us to generate
[16:23] characters to fill out that world in a
[16:25] way that is
[16:27] a combination of varied and makes sense
[16:30] so this is the tricky bit
[16:31] um for any kind of procedural system
[16:33] you're going to have challenges where
[16:36] if you don't have enough kind of
[16:37] semantics built into the system
[16:39] you're going to have just incredibly
[16:41] varied results they're going to be quite
[16:43] heterogeneous and what it's going to
[16:44] mean is that it's just going to seem
[16:46] like
[16:46] random it's going to seem like there's
[16:48] no sense to it you get variety but it
[16:50] doesn't seem like there's
[16:51] any sensibility that ties it together
[16:53] once you start constraining that with
[16:55] any set of rules
[16:56] then what you end up as a problem is the
[16:59] opposite you end up with something
[17:00] quite homogenous you know you go look at
[17:03] for example um
[17:04] no man's sky and all the planets where
[17:06] they're using a procedural
[17:08] system to generate you know their 18
[17:10] quintillion planets or something which
[17:11] is very cool
[17:12] um but at that certain point you see
[17:14] enough planets there's a saminess
[17:16] to it and that's that's going to be true
[17:17] of any procedural system
[17:19] so the trick is how do you how do you
[17:22] balance it to get the
[17:23] variety that you want but still sculpt
[17:26] it to have the kind of
[17:27] um this the kind of
[17:30] threads that are that are taken through
[17:32] the characters
[17:33] and and so what my work is is to build a
[17:36] system
[17:37] in collaboration with design and
[17:39] collaboration with uh
[17:41] character art narrative all of that to
[17:43] figure out the world that we're trying
[17:44] to build and see how we can encode that
[17:47] into the data
[17:48] for game play and and environmental
[17:51] reasons
[17:52] and then draw upon that in order to
[17:54] generate characters at runtime
[17:56] that makes sense in situations and then
[17:58] the cool part is that these are going to
[18:00] be persistent characters
[18:01] so you'll be able to see them again
[18:03] potentially on the situation
[18:05] or on the locations so you know
[18:08] everything from shopkeepers to
[18:10] security engineers will go through this
[18:12] process and it's kind of just a
[18:14] high level ramble all right so that
[18:17] sounds like what
[18:18] one two sprints worth of work yeah uh
[18:21] we're
[18:21] thinking about that
[18:24] it's totally not going to be that button
[18:26] yeah this
[18:28] this is huge right and and the cool
[18:30] thing about this though is that it
[18:32] really
[18:33] has kind of caused us to all come
[18:36] together as the different groups within
[18:38] the company to
[18:39] to agree and and
[18:42] you know formulate a a cohesive vision
[18:46] for exactly how all of these things tied
[18:47] together because a lot of times what
[18:49] happens is we go
[18:50] and we build our thing and and works
[18:52] really well and looks really good
[18:53] and sometimes doesn't tie here but this
[18:55] this is going to be
[18:57] you know tied to objective values of the
[19:00] items or
[19:01] how did how does a military guy know
[19:03] what he wants to use well he uses
[19:05] you know things that shoot faster high
[19:06] magazine capacities and we can start to
[19:08] build out a list of stuff that makes
[19:11] sense for those characters
[19:12] and then diversify them based on you
[19:15] know how much they care about those
[19:17] things
[19:17] um and it's from a character perspective
[19:21] it's really cool because we were we were
[19:22] going yeah we want engineers we want
[19:24] you know tourists and and whatever but
[19:26] now we can actually start thinking about
[19:27] like
[19:28] where did they come from they actually
[19:30] had a home planet and that home planet
[19:32] well their their dna
[19:33] is is mixed generally in these ways so
[19:35] now you can get people that look
[19:38] like culturally like they came from some
[19:39] place um
[19:41] wearing clothes and styles from those
[19:43] locations and
[19:45] they could even behave you know prefer
[19:47] items of
[19:48] you know whatever type but that's that's
[19:49] the the type of thing that we're going
[19:51] to be able to build as a result of this
[19:53] and
[19:54] you know i i don't know how much the the
[19:55] public knows about how many
[19:57] character entities we have in the game
[19:59] but we've literally got like
[20:00] every 18 civilian one through 187 ben
[20:03] shaking his head because he knows
[20:04] like it is it is ridiculous and this
[20:07] will allow us to go we have
[20:08] a civilian and the location that he gets
[20:12] spawned
[20:12] drives some of these choices the the
[20:15] core archetype
[20:16] distinction that some designer set is
[20:19] the you know another bulk of those
[20:20] choices
[20:21] uh what organization may be another
[20:23] layer of choices right so but it's it's
[20:25] a
[20:26] logical you know building up of this
[20:28] character
[20:29] that we no longer have to really like
[20:31] stay on top of so much that
[20:34] oh why is this guy here somebody just
[20:35] copy and pasted him like no no this the
[20:37] the system knows where he needs to go
[20:40] they know it's cold on the planet so
[20:42] he's gonna be wearing something that's
[20:43] warm
[20:44] right we can start to to build all of
[20:46] this stuff together as a single
[20:48] single experience which is why i kind of
[20:50] threw my hands up in the beginning i was
[20:51] like yes this is this
[20:52] is this is the dynamic game and the
[20:55] beginning of the dynamism that we have
[20:57] talked about for a very long time
[21:00] so it's it's super exciting well for
[21:03] those playing
[21:03] a star citizen drinking game at home
[21:05] that was one bespoke
[21:07] one systemic and uh two dynamics
[21:10] so uh four shots everybody
[21:13] all right uh persistent hangers
[21:18] persistent hangers uh we hear this term
[21:20] and of course the
[21:21] the very first module that was ever
[21:23] released in star citizen's development
[21:25] was
[21:25] our personal hanger system so uh there's
[21:28] a lot of when they when we hear the term
[21:30] precision hangers
[21:31] there's a lot of misconceptions that
[21:34] immediately arise uh going back linking
[21:36] one to the other so
[21:38] right off the bat our first question is
[21:40] what is the difference between
[21:42] persistent hangers and the personal
[21:44] hangers
[21:45] that citizens are familiar with
[21:48] the idea was at least to my knowledge
[21:51] was that
[21:52] these personal hangers were actually
[21:54] meant to be some place that was in the
[21:56] game
[21:57] you know asteroid hangers were supposed
[21:58] to be on
[22:00] some place like grimhex or wherever um
[22:03] the the rebel in york was supposed to be
[22:06] a microtech hangar right so it's
[22:08] i i would not necessarily look at them
[22:11] as different places
[22:12] but what we're going to provide is is a
[22:14] place that you can customize you can
[22:16] leave stuff
[22:17] and on the floor and when you come back
[22:19] it'll be there
[22:20] it is your place kind of like the halves
[22:22] where you can kind of go and dump stuff
[22:23] in your hats but
[22:25] but on a much larger scale these these
[22:28] will be things that you can buy
[22:29] they'll be yours you can rent them maybe
[22:32] things of that nature
[22:33] right uh it'll allow players to manage
[22:35] larger scales of cargo
[22:37] things like that you know storage like
[22:39] hangers are pretty big right so you can
[22:40] line some cargo up down one side and
[22:42] then
[22:43] spawn a different ship and then put it
[22:45] on that one
[22:46] um so it's in a nutshell it's it's
[22:49] it's taking that personal hanger and
[22:51] really just kind of transplanting that
[22:52] into the game and allowing
[22:54] the game to persist it uh in whatever
[22:57] state you leave it
[22:58] yeah i mean if i could just add i would
[23:00] say that persistent hangers are
[23:02] kind of a super set of hangers where
[23:05] they include the personal hangers which
[23:07] are now persistent
[23:09] but also we'll include other hangars
[23:11] that you could potentially interact with
[23:13] for for other reasons
[23:14] because we're now going to make them
[23:16] something that you own that means that
[23:17] there's going to be some locality type
[23:19] to them
[23:19] and they're going to be situations in
[23:21] the game where you may not have access
[23:22] to
[23:23] a hangar that you actually own at a
[23:25] given location
[23:26] and they're going to be a set of
[23:27] processes in place that still allow you
[23:29] to facilitate certain gameplay loops
[23:31] um so that might mean maybe renting a
[23:33] hangar or having a temporary hangar for
[23:34] a certain transaction
[23:36] um and it even opens the door you know
[23:39] potentially for things like
[23:40] uh hangers associated with characters or
[23:42] missions and things like that
[23:44] um so but yeah rob you know exactly
[23:47] right
[23:48] effectively what we're doing is you know
[23:49] i mentioned before that cargo was being
[23:51] turned into
[23:52] entities and then that allows us to have
[23:54] a certain amount of
[23:55] persistent gameplay associated with them
[23:57] something's true with the hangers
[23:59] we're gonna now have the ability to
[24:01] simulate them as as entities
[24:03] very similar to ships actually so you
[24:05] know right now in the game you can
[24:07] already like drop things in your ship
[24:08] put ships inside of ships and store and
[24:10] restore them
[24:11] et cetera et cetera hangers are going to
[24:13] start acting a lot more
[24:14] like that and players are going to
[24:16] hopefully you know start thinking of
[24:17] them as something that's like
[24:19] an important part of their their kind of
[24:21] fleet their their
[24:22] their gameplay set right so the the the
[24:25] player hangers that people are familiar
[24:26] with the rebel in york and the
[24:28] and stuff like that uh those are under
[24:30] the um the greater umbrella of prison
[24:32] hangers
[24:33] but when they see the first version of
[24:35] precision hangers show up on the road
[24:36] map
[24:37] and you know eventually make its way
[24:39] into the game uh it is not
[24:41] that right away it is working with the
[24:43] hangars that
[24:44] are there in game today you know the
[24:47] area 18 ones and the lowerville ones and
[24:49] and creating persistent storage yeah so
[24:53] i imagine uh you're going to choose your
[24:56] starting location very 18 and then the
[24:58] ships that you have at area 18
[25:00] you'll have a hangar there that comes
[25:02] with your starting
[25:03] you know location selection right and
[25:05] that's that's now your hangar
[25:07] instead of hangar 27 it's you know rob's
[25:09] hanger
[25:10] uh rob's medium hanger whatever um and
[25:14] just like any other have or persistent
[25:16] location you can go there now the the
[25:18] only thing that
[25:19] uh like we're not gonna build like one
[25:21] hanger entrance for every single player
[25:23] that's actually on the server right or
[25:24] or in the game as a whole it's
[25:26] going to be controlled through atc so
[25:29] you're going to contact apc say hey i'm
[25:30] ready to go
[25:31] and and chad can talk maybe about more
[25:34] of the the technical
[25:36] side of this of how we're going to be
[25:37] bouncing you know players around but
[25:39] basically we're going to take you we're
[25:40] going to move you
[25:41] while you're doing your stuff inside
[25:43] your hanger and then hey i'm ready to go
[25:45] atc gives you clearance that opens up a
[25:47] door
[25:48] doors open you fly out directly into the
[25:50] city and
[25:52] it's all from your persistent hanger
[25:54] space
[25:55] yeah so i'll just go a little bit into
[25:56] detail on that so
[25:58] the idea is that no matter what for now
[26:00] we're going to have the locations that
[26:02] don't have the number of hangers
[26:04] to support even the current player limit
[26:07] let alone
[26:08] whenever we increase that too with
[26:09] server meshing right so
[26:11] for that reason we're always going to
[26:13] have this problem of
[26:15] too many players mapped to too few
[26:17] hangers
[26:18] however we do want to maintain the
[26:21] kind of player experience of feeling
[26:24] like you do
[26:25] own a hanger at a certain location for
[26:27] even these ones where they're too few
[26:29] and so for that reason we're actually
[26:31] going to pin the players to particular
[26:33] hanger entrances
[26:34] so that in your experience as a player
[26:36] you'll go land somewhere you'll you'll
[26:38] fly away from somewhere it's always from
[26:40] the same
[26:41] hangar at that location physically now
[26:44] there is you know the players may notice
[26:47] that there's going to be a kind of
[26:48] you know magical sensibility to it which
[26:50] because
[26:51] if we have 100 players in the server or
[26:53] whatever or even the current 50
[26:55] then you know the same players will be
[26:58] using the same hanger entrance and exits
[27:00] you know how's that possible and the
[27:01] reason is
[27:01] because there's magic happening behind
[27:03] the hood where
[27:04] we're magically moving these things
[27:06] around and we're using zones to isolate
[27:08] them from each other
[27:10] um so that you don't see the fact that
[27:12] they're
[27:13] you know all getting kind of intermixed
[27:14] but the experience for the players is
[27:16] that
[27:16] it's one continuous experience in and
[27:19] out now
[27:20] that's for these locations again that
[27:22] have a more limited
[27:24] set we absolutely with the system can
[27:27] expand it to have locations with
[27:29] larger amounts of hangers which would
[27:31] then allow us to do things like
[27:33] individually put down um persistent
[27:36] hangers for players and
[27:37] you know that would probably have to
[27:38] work in accordance with some kind of
[27:40] procedural system for for placing out
[27:42] very large numbers of them and we do you
[27:45] know
[27:45] you know i know this comes up a lot of
[27:47] players very aware that we have we have
[27:48] the real estate right we have
[27:50] these huge planets like what are we
[27:51] doing with all this space
[27:53] certainly that's an opportunity but for
[27:55] the for the first
[27:56] out um we're not going to have that you
[27:58] know unique
[27:59] one-to-one hanger experience for each
[28:01] location instead it's
[28:03] going to be working with the locations
[28:04] that we have now but the system
[28:06] will support um as we make it will
[28:09] support
[28:09] it in the future if we can work in
[28:12] accordance with the environment and
[28:13] level design teams
[28:14] and planet teams to facilitate the other
[28:17] part that would be required to have that
[28:18] kind of experience
[28:19] it's like with anything else in star
[28:21] citizen you bring it to the point of
[28:22] realism then you bring it back to the
[28:24] point of fun
[28:25] and it and it's people who if you
[28:27] physicalized every single hanger for
[28:29] every single player on the thing
[28:31] somebody would have to park you know 13
[28:34] kilometers out from area 18
[28:36] and have a 15 minute shuttle ride on the
[28:38] way in just to
[28:40] sell off their stuff and stuff like that
[28:41] so we have to find try to find that
[28:44] mix and match but of course as the game
[28:46] progresses and expands and stuff like
[28:47] that
[28:48] we certainly do have the real estate too
[28:50] to push
[28:51] farther and farther towards that realism
[28:53] so uh like with anything
[28:56] it'll continue to change and evolve uh
[28:59] one of the one more question about
[29:00] precision hangers before we move on to
[29:02] shopping trading and selling and stuff
[29:04] uh will we be able to give
[29:06] player other players access to drop
[29:09] cargo off in our hangars
[29:11] i yeah so what we want to build is this
[29:14] concept of a freight elevator
[29:16] that is tied to whoever's using it so
[29:20] when you use it you see your
[29:22] local inventory stored at area 18 when i
[29:25] use it i see mine so
[29:27] now what you get is the ability for you
[29:29] to bring your cargo out into my hangar
[29:32] loaded on my ship we can collectively
[29:34] work together as a group
[29:35] to then load the ship up with a series
[29:37] of goods take it to another location and
[29:39] then
[29:40] go go and sell it so we thought that was
[29:43] a really important factor to hit
[29:46] um you know players want to play as a
[29:47] group and and
[29:49] putting the bill for you know 18 million
[29:51] uec of goods on a ship is
[29:55] pretty daunting right so it i think it's
[29:58] a it's a huge
[29:58] it's a huge win for players just uh not
[30:01] just for
[30:02] for working together as a multi-cruise
[30:04] ship but also contributing together
[30:06] from a financial point of view of
[30:08] sharing the cost for
[30:09] for trading so i think that's a big one
[30:12] yeah and i think rob's bearing the lead
[30:14] care a little bit um
[30:16] if you're if you're paying really close
[30:18] attention you will have noticed that
[30:20] there was
[30:20] quite a dramatic change to the way that
[30:22] cargo works implied in that ends yes
[30:25] which is that we're not going to be
[30:27] magically spawning the cargo into your
[30:30] ship whenever you
[30:31] purchase cargo instead it's going to be
[30:34] purchased into the hangar
[30:35] and you you'll be calling it from the
[30:37] spread elevator and then manually moving
[30:39] it in and out of the
[30:40] the kind of staging space into the ship
[30:43] right so this is part of you
[30:45] i mentioned before that we're trying to
[30:46] localize the car a little more this is
[30:48] part of that you know we're getting rid
[30:49] of the magic no more
[30:50] no more popping in and out of existence
[30:53] and said they're physical things
[30:55] they have to be moved of course you know
[30:57] in the future this is going to set us up
[30:58] for systems
[30:59] such as maybe drones or npcs that would
[31:02] you
[31:03] hire to help you move these things um
[31:05] but for now the idea is that you can
[31:07] move them yourself using the multi-tool
[31:08] or you can bring in your friends
[31:10] and so you know this is one way in which
[31:13] people that are playing together will
[31:14] have an advantage over players that are
[31:16] just playing by themselves because
[31:18] there's a certain amount of throughput
[31:19] that you'll be able to achieve with a
[31:21] larger
[31:21] crew which will increase your um
[31:23] financials
[31:25] as opposed to as a single player so it's
[31:27] it's kind of bringing that you know
[31:29] multiplayer interactive diegetic
[31:31] physical gameplay into the cargo system
[31:34] you all laughed at the trolleys you said
[31:37] the trolleys were silly
[31:39] no i'm just
[31:42] chad is already talking about an lti
[31:44] forklift i'll pass it on folks but
[31:47] who knows it's a big deal though and and
[31:50] uh actually yeah we'll talk about it
[31:52] with selling here so
[31:53] all right so um
[31:57] we know that there's a there there's a
[31:58] there's a big refactor to or a big
[32:00] expansion rather probably more accurate
[32:02] to personal inventory and stuff coming
[32:05] and along with that loot generation and
[32:08] along with that
[32:10] an increased need to be able to sell and
[32:13] trade things off
[32:14] absolutely so um talk to us about what
[32:17] our
[32:18] what what our scope of that is i know
[32:19] it's you know we're not like with most
[32:21] things we ne
[32:21] we don't get to do everything we want to
[32:23] in the first drop
[32:25] so why don't we just start there what is
[32:27] next for
[32:29] selling trading shopping
[32:32] asset managering yeah so that's the big
[32:35] one is
[32:36] uh we're trying to close off some of
[32:37] these game loops right
[32:39] we can go out we can buy stuff we can
[32:41] already sell commodities so that the
[32:43] next logical step was to be able to sell
[32:45] personal items or ship items back to
[32:47] shops
[32:48] uh just offloading uh you know you
[32:50] bought 57 different ships but you're
[32:52] just like you know i just want to
[32:53] manage you know a smaller set of power
[32:55] plants or whatever that's that's a
[32:57] doable thing now
[32:58] um the the goal is to
[33:01] start with those item types um generally
[33:04] kind of limit them to
[33:06] the types of items that the store will
[33:09] have for sale right and then
[33:12] you know go from there the selling ships
[33:14] back to you know a dealer
[33:16] uh is going to be a future tier right
[33:20] but the the important part is you know
[33:22] when we start going to loot generation
[33:24] you're going to be able to collect a lot
[33:26] more stuff
[33:27] may or may not be valuable but it's it's
[33:29] another form of
[33:30] being able to be rewarded within the
[33:32] game to be able to go and sell it
[33:33] somewhere so that's a
[33:35] it closes several you know gameplay
[33:38] loops that
[33:38] are either coming online very soon or
[33:41] you know have been there
[33:42] for more than a bit and it also gives us
[33:44] an opportunity to actually uh
[33:46] change our shopping flow in in the kiosk
[33:48] it's going to be in the kiosk i should
[33:50] say
[33:50] uh we're not going to do it at the
[33:52] physical item level
[33:54] uh the the mobi glass level we're going
[33:56] to try and phase out that mobi glass
[33:58] uh ui at some point
[34:02] but the that
[34:06] in in converting it to building blocks
[34:08] we can kind of re-envision that flow a
[34:10] little bit and try and make it a little
[34:11] more user-friendly
[34:12] um selling things in stacks buying
[34:14] things you know in larger volumes
[34:17] um and these these things will all be uh
[34:20] if you buy things they're going to get
[34:21] you know sent to your local inventory if
[34:23] you sell things you can only sell things
[34:25] from your
[34:26] person from your ships that are in that
[34:27] location from your local storage that's
[34:30] in that location so
[34:32] again kind of leaning into that you know
[34:34] items are localized within the world
[34:36] concept it's going to fall in line with
[34:38] all that
[34:41] um some questions that we got from the
[34:44] chat and thread here uh want to trade
[34:47] want to sell want to buy or some of the
[34:49] more common mechanics in other mmos
[34:51] uh related to all this are are we going
[34:54] to allow players to trade between
[34:56] themselves
[34:57] like with an old style mmo with or
[34:59] without
[35:00] what is the app the mode trader app is
[35:02] what's called mo trader
[35:04] yeah uh short answer yes
[35:07] uh absolutely long answer um
[35:11] there's a series of confluence pages
[35:14] with
[35:14] to be clear the the current mo trader
[35:16] app is not even tier one it's tier
[35:18] zero of what we want to implement for
[35:20] that
[35:21] um with just plan after plan for how to
[35:24] expand upon that in in gradated bits
[35:27] um to include player trading there's
[35:29] talk even of having it be that there
[35:30] might be like shipping times on that
[35:32] that you might
[35:33] hire a shipping company then players
[35:34] could be that shipping company
[35:36] so yes absolutely player trading of
[35:38] items between each other is
[35:40] is planned to be supported uh what exact
[35:42] form that ends up taking
[35:44] will be determined when we you know
[35:46] actually start to
[35:47] pedal to the metal on that that next
[35:49] step
[35:50] right as we often stay here even with
[35:54] a wonderfully talented 700 person team
[35:57] around the world we can only work on so
[35:58] many things at any one time and
[36:00] not everything is in active development
[36:02] so you can't there are no
[36:03] updates to give uh and i'm talking to
[36:06] you bannon merchantman crowd
[36:08] when it's in development we'll tell you
[36:12] okay okay
[36:17] okay
[36:22] with addition to being able to sell loot
[36:24] are there plans to be able
[36:26] to resell a ship purchase with auec
[36:29] uh it would be nice to be able to get
[36:30] rid of entries on aesop
[36:32] for ships that maybe i don't care for
[36:34] after i have purchased them
[36:36] sure i i mean that's the plan right is
[36:38] we want you to be able to sell your
[36:40] ships
[36:40] back if you don't basically anything in
[36:42] the game if you don't want it anymore we
[36:44] want to give the players a way to
[36:46] manage their inventory and cull it down
[36:48] to the things that they care about
[36:50] um i could even see you know as we we
[36:53] re-envisioned they stop because the
[36:54] aesop's gonna need to change a little
[36:56] bit when we
[36:56] do some persistent hanger work um i
[36:59] could see
[37:00] maybe even just like hey hide this and
[37:01] you know show you know give your
[37:04] the ability to hide certain entries but
[37:06] they're still there right uh
[37:08] all the way to selling them to to do
[37:10] another stuff so it's
[37:12] um you know we want to eventually be
[37:14] able to take ships to junk sites and you
[37:15] know scrap them and
[37:17] you know if you're a pirate right that's
[37:18] a big question in the games like how do
[37:20] i steal something sell this big ship
[37:22] well that's
[37:23] that's pretty uh it's got to be a pretty
[37:25] complicated and
[37:27] you know dangerous thing but that's you
[37:29] know stuff the cr's talked about in the
[37:31] past right so it's
[37:32] uh it's all in an effort to build up
[37:34] towards you know that level of
[37:36] ability to buy sell you know legal goods
[37:40] stolen goods stolen ships
[37:42] legal ships right it's yeah but
[37:45] yeah what i'll say is that um rob
[37:48] mentioned before that it's
[37:49] it's later it's not going to be the
[37:50] first iteration of selling and that's
[37:52] because
[37:53] ships in the game are much more
[37:55] important
[37:56] and for that reason on the back end in
[37:58] the persistent layer we're doing
[37:59] a lot more tracking we use a lot more
[38:01] safety mechanisms regarding ships
[38:04] if you you know because of a bug or
[38:06] whatever
[38:07] lose a weapon or an item or something
[38:10] like that it's not that big of a deal
[38:12] but losing a ship is you know the amount
[38:14] of money that's going into these the
[38:16] amount of time
[38:17] that's going into them is dramatic so
[38:19] for that reason
[38:21] uh we would have to account for that for
[38:23] example in ltp
[38:25] uh and today we don't remove things from
[38:27] ltp
[38:29] so that's a that's you know as soon as
[38:31] you you do something like that you open
[38:33] yourself up to
[38:34] a set of you know bugs that you have to
[38:37] be
[38:37] very cautious about on the technical
[38:38] side that you're very confident
[38:40] when you go out and you're not going to
[38:42] start just
[38:43] blasting people's like very persistent
[38:45] data that they've worked hours and hours
[38:47] on so
[38:48] we're being cautious on that part uh and
[38:51] it's it's not that we don't
[38:52] you know know how to do it or um you
[38:54] know don't want to do it
[38:56] it's more that we want to be careful on
[38:58] that one
[38:59] for sure
[39:02] uh let's see let's move into some more
[39:04] general term things for the team here
[39:07] uh will there be more reputation stuff
[39:10] for people on the wrong side of the law
[39:14] uh absolutely uh definitely and and
[39:17] that's not even i'm not even saying that
[39:18] is like a a
[39:19] far off super distant thing um i
[39:22] literally spent yesterday setting up
[39:24] some data for it
[39:24] uh when it comes out will be a question
[39:27] mark
[39:28] keep your eye on the roadmap as jared is
[39:29] so fond of saying um
[39:31] but the there there is
[39:35] planned support for pretty much any kind
[39:37] of game play
[39:38] in the game with reputation the idea is
[39:40] that what you guys enjoy doing we want
[39:42] to kind of support with that reward
[39:44] system
[39:44] um if that means uh hauling cargo from
[39:47] place to place there will be reputation
[39:49] for it if that means
[39:50] uh shooting people along a trade route
[39:53] as a pirate there will be reputation for
[39:54] that both good and bad if that means
[39:56] stealing big benny's machines and going
[39:58] and building weird neolithic monuments
[40:00] on a moon
[40:01] um for some reason i'm sure narrative
[40:05] would have a problem with it but
[40:06] there might be a reputation for that
[40:08] with some weird organization
[40:10] so yes uh there will be reputation for
[40:13] illegal things for non-violent things
[40:15] for all kinds of things
[40:17] yeah and uh you know we've talked about
[40:21] pyro
[40:22] quite a bit you know this it's a big
[40:24] thing right then that's more of an
[40:25] outlaw
[40:26] system that's going to be you know uh
[40:28] coming online so it's
[40:30] definitely going to be more relevant as
[40:32] we get into that um
[40:34] but uh yeah as for now we're we're
[40:36] focused on uh
[40:37] you know design wise we're building out
[40:40] the structure behind the scenes
[40:41] of how this is going to work in the game
[40:43] and that's actually something we're
[40:44] going to talk about
[40:45] uh in a bit more detail with citizencon
[40:48] yeah
[40:48] so we're excited to show you some plans
[40:50] for that uh
[40:53] adjacent to the cargo refactor we'll get
[40:55] back to that in a minute
[40:56] will the cargo refactor include a
[40:59] meaningful
[41:00] overhaul of the economy itself
[41:03] for updated profit and investment ratios
[41:06] i think it has to
[41:07] um you know one of the things that we
[41:08] want to do is sell things kind of by the
[41:11] box not like this
[41:12] per unit because it does a lot of
[41:13] different things when we start to go
[41:15] down that road where
[41:18] it takes a certain amount of money to
[41:19] get into a box a super valuable box
[41:22] that's this big um whereas you know i
[41:24] can get into like
[41:25] the really cheap stuff in larger volumes
[41:28] maybe they're really expensive stuff i
[41:29] can only buy in in smaller quantities
[41:31] but i've got to get
[41:32] a certain amount of it in order to it's
[41:34] like buying a lot size on the on the
[41:35] stock market right you got to buy it in
[41:37] 100 unit lots
[41:38] uh similar principle uh with what we
[41:41] want to do for the cargo it
[41:43] and it kind of ties to you know the
[41:45] whole sea in these large containers that
[41:47] that we need to
[41:48] have to facilitate those um but
[41:51] it's abs i i don't see how we can't
[41:54] you know do that like it's it's
[41:57] mandatory 100
[41:59] okay uh let's move back to the cargo
[42:01] refactor a bit
[42:02] when it comes to loading and unloading
[42:04] of cargo in space
[42:06] docking arms for ships and hangars how
[42:08] do you plan to protect
[42:10] the players ship from beco from someone
[42:12] coming on board
[42:13] during a manual loading process and
[42:16] flying away
[42:17] or storing stowing on board stowing away
[42:19] on board
[42:20] uh basically how can players protect
[42:22] themselves
[42:23] during this vulnerable time i think the
[42:26] bigger question is how are you going to
[42:28] protect
[42:29] your ship and your cargo that's being
[42:31] loaded and unloaded on your ship
[42:34] uh who are you going to work with to
[42:35] make that that a safe thing
[42:38] to me that's that's where multiplayer
[42:43] you gamepl you want to hire some friends
[42:45] eventually we want to have npcs that you
[42:46] can hire
[42:47] uh maybe your reputation's high enough
[42:49] where turrets at the station will
[42:51] actually help protect you right
[42:53] um so you know we you're gonna see
[42:55] reputation being tied into a lot more
[42:57] things as we move forward
[42:58] um and certainly you know we've talked
[43:01] about hiring npcs and
[43:03] working with other players forever right
[43:05] so this to me is
[43:06] is right for that opportunity yeah and
[43:09] if i could add like i think a lot of
[43:11] people might hear that answer and feel
[43:13] maybe a little bit upset um keep in mind
[43:16] that you're not moving the cargo in and
[43:20] out on the landing pad
[43:21] right we're changing it to be in the
[43:23] hangar right to get into somebody else's
[43:26] hangar is going to be much more
[43:27] difficult atc is going to be monitoring
[43:30] right that are going in and out like you
[43:32] just end up in somebody else's hangar
[43:34] bad things could happen uh if you want
[43:36] to physically walk in there you're going
[43:37] to have to
[43:38] sneak in along with them you can't just
[43:41] decide
[43:41] via some hanger elevator that you want
[43:43] to go to somebody else's
[43:45] you would have to get into the physical
[43:47] hanger with
[43:48] them and then get all the way into their
[43:51] hanger
[43:51] right so there's just a lot less likely
[43:54] that this is going to happen
[43:55] and so for the first outing yeah it's
[43:57] probably going to be a little bit more
[43:58] manual process
[43:59] in collaboration with hec and my guess
[44:03] is that when we go live
[44:04] there is going to be a certain amount of
[44:06] it but it's not going to be like this
[44:07] rampant
[44:08] problem and then um even if it does end
[44:11] up being like that we can always do
[44:13] things like introduce maybe like a
[44:14] secret security system and maybe that's
[44:16] something you have to opt into you know
[44:18] i don't know see how it goes we'll see
[44:20] how the gameplay turns out let's see
[44:21] what the feedback is
[44:22] um but yeah so it's it's a little bit
[44:25] safer than i think maybe probably
[44:27] i mean and and i i i think one thing
[44:30] that we've kind of
[44:32] blurred the line between a little bit
[44:33] here is that you know the the cargo
[44:35] refactor
[44:36] is physicalizing cargo it's not going to
[44:38] change your shopping flow
[44:39] for that particular feature persistent
[44:41] hangers
[44:42] is where cargo gameplay flow is going to
[44:45] be the
[44:46] the big thing that changes that so when
[44:49] it comes to
[44:50] shops shop still still populated you
[44:52] know while your ships despawned
[44:54] uh you know behind the scenes there it
[44:56] just means that as
[44:57] a player once it gets spawned on the
[44:59] landing pad you can walk into the ship
[45:01] and take it out if you can get in there
[45:03] it's it's physicalized at that point so
[45:06] uh the persistent hanger work is what's
[45:07] really going to drive this entire
[45:10] gameplay flow of of the the manual
[45:12] loading and
[45:13] working with friends and collaborating
[45:14] on that level and then you will be much
[45:16] safer behind the
[45:18] doors of your uh of your hangers so
[45:20] making things
[45:21] harder to do is is i kind of mentioned
[45:23] like stealing ships like that should be
[45:25] really hard like
[45:25] it should be really hard to get into
[45:27] somebody's hangar like maybe you gotta
[45:28] kind of sneak on their ship and then you
[45:30] know be a stowaway
[45:32] all the way back to get inside their
[45:34] hangar and now
[45:35] now you you can wreak havoc but it's it
[45:38] takes an effort
[45:38] and it's a you know i'm sure players are
[45:41] going to do it i guarantee it
[45:43] they're going to find a way but i think
[45:45] just the physicalization of cargo is
[45:47] going to be a huge step
[45:50] we've talked a lot today about the cargo
[45:52] refactor and how it links up with
[45:54] the persistent hangers and stuff like
[45:56] this where do
[45:57] cargo decks come into this equation you
[46:00] know we released them
[46:02] a couple patches ago they famously
[46:05] looked great but were less filling
[46:06] as far as the gameplay content uh how do
[46:09] those work into the
[46:10] new picture so the there are hangers at
[46:15] those stations
[46:15] right cargo decks uh are places where
[46:18] you make your purchases
[46:19] uh we we originally um
[46:22] intended that to be where you can kind
[46:24] of drive renting space we've actually
[46:26] since
[46:27] talked about some additional
[46:28] possibilities of how we're going to
[46:29] manage
[46:31] your overage and and is that a is it
[46:34] capped
[46:34] is it just per unit like you pay for the
[46:37] storage that you
[46:37] you request for maybe that gets way more
[46:40] expensive
[46:41] the more you get closer to certain you
[46:43] know uh
[46:44] levels um that you know small stations
[46:47] may not have a lot of space and
[46:48] once you get up to like thousand scu
[46:50] like man that gets really expensive and
[46:52] it's just not worth it to store that
[46:53] much stuff there
[46:54] so um it's i'd see
[46:58] it maybe morphs a little bit over time
[47:00] here just as far as the
[47:02] the original intent um obviously i i
[47:05] think one of
[47:05] the big points was that you know they're
[47:07] not really connected to the outside so
[47:09] people can't really fly their ships in
[47:10] and
[47:11] load it up and go out but that's that's
[47:13] where
[47:14] persistent hangers you know even if you
[47:16] don't own one there you can request a
[47:18] land one
[47:19] uh pay for it you know like 500 uec to
[47:21] go land and then
[47:23] you go in do your shopping load it on
[47:25] your ship and then go and then that
[47:26] hanger
[47:27] disappears from your your persistence
[47:29] right so
[47:30] again it's it's it's realizing that the
[47:33] gameplay over time
[47:35] uh that that's this is a huge feature um
[47:38] we've built so much in the game already
[47:40] and and we've got to go
[47:42] go back and make sure that what we're
[47:43] building still works within the context
[47:45] of everything that we've got
[47:47] uh inside i'd expect you know there'd be
[47:49] things kind of like that that may need
[47:50] to get tweaked a little bit uh we may be
[47:52] able to use it right out the gate
[47:55] um and then uh does this cargo refactor
[48:00] uh does it include things like the
[48:03] storal boxes for the
[48:04] aurora and the mustang at all um
[48:08] are you talking about the boxes on the
[48:09] outside yeah yes so the the
[48:12] because they're items it's like a weapon
[48:14] is just attaching to the outside of the
[48:16] ship so
[48:17] it will absolutely facilitate that
[48:20] 10 000 aurora owners just
[48:23] cheered in unison now loading that's
[48:26] going to be interesting
[48:27] right so you're going to get your track
[48:28] to be me you know so
[48:31] that's a different problem but uh
[48:34] uh let's see how much time we got all
[48:35] right with persistent hangers
[48:37] uh will the need to equip ships only
[48:39] with the inventory you have in the
[48:41] hangar or at your current location
[48:43] be implemented at the same time that's
[48:46] actually going to be coming out with
[48:48] these this new inventory uh change that
[48:51] we're doing so
[48:51] when the asset manager drops the
[48:53] personal inventory
[48:55] system is changing right the the pma
[48:58] will be removed
[48:59] in lieu of the new personal inner
[49:01] thought inventory that you probably see
[49:03] in rich tire and company talk about
[49:05] quite a bit
[49:06] uh the vma will also fall in line with
[49:09] that so the vma will still exist but
[49:11] it'll be altered to only show
[49:13] the things that you have at that
[49:14] location or purchased at that location
[49:17] so you'll see the equipment from all of
[49:19] your other ships that you know
[49:20] obviously everything's like item port
[49:22] size restricted and stuff like that but
[49:25] yeah so it'll be localized there
[49:30] with things like persistent hangers uh
[49:34] the physicalized inventory asset manager
[49:36] all this stuff that we're talking about
[49:36] this coming
[49:38] how does prison factor into that
[49:41] and being an escapee because because
[49:45] that's the question that's it's how does
[49:47] that factor in it's i guess
[49:49] in what way like getting back to your
[49:51] yeah at what point do you get
[49:53] all of your stuff back because you know
[49:54] when you when you show up in prison
[49:56] everything famously disappears sure well
[49:58] it
[49:59] i think it i think it works even better
[50:01] because we've had to actually hack the
[50:02] the inventory to work around that fact
[50:05] to hide all of these other things that
[50:07] was previously in a global inventory
[50:10] so you just won't have it right like
[50:13] your stuff
[50:14] will just not be at that location so of
[50:16] course you can't access it so when you
[50:17] get back to
[50:18] places where you can it'll be there yeah
[50:21] and i think you know
[50:22] there's still some fine details to work
[50:24] exactly on but probably
[50:26] you know one way that it could work is
[50:28] uh if you were at a location where you
[50:30] got captured
[50:31] um we just store it there if you're
[50:33] somewhere where there's not really
[50:34] reasonably anything close that you could
[50:36] identify as
[50:37] the location where your stuff is we'd
[50:38] probably just stuff it in your home
[50:40] location
[50:41] um but as i said there's some fine
[50:43] details exactly
[50:44] um to sort and then you know the
[50:46] immediate next question i'm sure that a
[50:47] lot of people are thinking about like
[50:48] how do i know where it ended up
[50:50] right and the answer to that is well
[50:52] that's why we have the asset manager
[50:54] app which is to help you understand
[50:55] where your things are in the world
[50:58] so yeah the uh we haven't really talked
[50:59] about we will talk about this in more
[51:01] detail citizencon but
[51:03] think of asset manager as the global
[51:04] view and your
[51:06] your personal inventory and uh
[51:10] persistent hangars your ships like these
[51:12] are all your local
[51:13] local places so when you want to know
[51:15] what's on the other side of the system
[51:16] that'll be
[51:17] the asset manager or knickknacks uh
[51:19] who's the actual name of it
[51:21] again i know we're talking about the
[51:22] asset manager at susan gunn so we don't
[51:24] want to go too far into it but
[51:26] uh will it allow for like text-based
[51:30] global search of inventories it's
[51:34] chat yeah so
[51:37] what it will allow is text-based
[51:39] filtering of local results
[51:40] uh at first but not global tax search
[51:44] and the reason for this is because um
[51:47] it's actually
[51:48] much more difficult to implement than
[51:50] you might just naively think
[51:53] you have to consider how you're
[51:56] extracting that data out of the back-end
[51:58] the way that we're implementing the new
[52:00] entity graph
[52:02] system is to optimize it for the kinds
[52:04] of queries that gameplay does most often
[52:07] and that usually means hierarchical
[52:09] queries
[52:10] and for this reason the way that the
[52:12] data is laid out in the database is not
[52:15] conducive to text-based search instead
[52:18] we would have to have a different
[52:19] kind of caching layer in order to
[52:21] facilitate this
[52:23] which is doable it's it's not that it's
[52:25] not possible it's just that that's not
[52:26] the work that's currently being done
[52:28] we're very focused on server meshing
[52:30] into the graph persistence streaming all
[52:33] that stuff
[52:34] um so the people that we would need to
[52:36] work with in order to support that are
[52:38] tied up with some very important things
[52:40] right now and
[52:42] uh it won't be in like the global search
[52:45] won't be out in the first
[52:46] uh outing but it is something that we've
[52:48] definitely talked about and
[52:49] we have some ideas now how to and
[52:52] on that note um we actually found that
[52:55] the
[52:56] we put in an item type subtype so that
[52:58] the categories and then subcategories
[53:00] that you would see like in the shop kia
[53:01] so you got your categories across top
[53:03] like oh
[53:03] clothing and then pantries whatever
[53:06] we're giving that level of filtering
[53:08] where you can
[53:09] set up your criteria say yeah filter and
[53:12] then only the stuff in that location
[53:14] that matches that that criteria will
[53:16] show up so it's it's a little more
[53:18] efficient way to go
[53:19] where's my guns where's my clothes
[53:21] where's my uh whatever
[53:23] um but the the text search because
[53:26] we're also limited on how many things we
[53:28] can put or
[53:30] bring into the query uh results each
[53:32] time
[53:33] just because it it'll just take longer
[53:35] and longer for things to load
[53:37] so we felt it was better to give you
[53:39] faster results than to
[53:41] create this huge list wait for it to
[53:42] load you know for 15 minutes right and
[53:44] then
[53:45] allow you to interact with it um so
[53:48] we've actually i think we've actually
[53:49] turned the the text-based filtering off
[53:51] right now because the the
[53:53] type subtype or the category stuff was
[53:55] so much more efficient we're like
[53:57] let's just let's mix that and give them
[53:59] a little more space to to show items
[54:01] so it's not a question it's just not no
[54:03] no it it was one of the first things i
[54:05] wanted i'm like i want to i want to type
[54:07] you know much like we have in the
[54:08] defense list in the front end
[54:10] right where you can start typing
[54:11] somebody's name and and see them
[54:13] you know pop up in the list like that's
[54:14] exactly what i want as a player and i
[54:16] want to i want to be able to type
[54:17] keywords i want to be able to type
[54:19] you know like sniper or you know bullet
[54:22] or
[54:22] whatever that that's is a game that
[54:26] manages
[54:27] so much stuff we have to have those
[54:29] quick and easy ways to
[54:30] not just figure out where what it is but
[54:33] where it is and
[54:34] what i need to do to go and get how much
[54:36] of it i got right what quality what
[54:38] shape is it in you know
[54:40] there's a there's a bunch of stuff that
[54:41] will be coming into play much more as we
[54:43] move forward
[54:44] you can send your hate mail to me i had
[54:46] to i had to break the bad news
[54:48] throughout the years
[54:49] it chanted he wasn't calling you naive
[54:53] he was just calling director gunner it
[54:54] was that was directed specifically to
[54:56] director
[54:56] yeah everybody else is fine he just
[54:58] meant director gunner
[55:00] um i don't know why i'm picking on
[55:03] director gunner
[55:05] will reputation affect selling price or
[55:08] taxes on trading or selling loot at some
[55:11] point in the future
[55:12] absolutely uh absolutely absolutely
[55:16] uh that is one of the core so there's a
[55:18] there's a portion of reputation
[55:20] uh that is like one of our very public
[55:22] very core plans of it is perks
[55:24] um you've got a very small amount of
[55:26] that that you saw with the bounty hunter
[55:28] reputations where
[55:30] you get a little bit more mission
[55:31] rewards as you rank up with a certain
[55:33] organizations
[55:35] this would fold under the the expansion
[55:37] of that into
[55:38] much more varieties and much more
[55:40] interesting perks
[55:42] that's actually one of the simpler ones
[55:44] frankly uh
[55:46] the it might be a specific shop if it's
[55:49] like a little mom and pop store that
[55:50] you've got a really good reputation with
[55:51] that specific person or it might be
[55:53] company-wide if there's like
[55:54] uh garrity defense then you can you know
[55:56] get all of those various stores
[55:58] um but yes absolutely when you're
[56:00] selling uh
[56:02] and and taxes and all of that could be
[56:04] affected by reputation
[56:06] um in certain areas yeah buying and
[56:08] selling we talked about
[56:10] hiding things behind reputation you know
[56:12] so you got to be
[56:13] x reputation you got to be a private
[56:15] with us in order to
[56:16] to buy our weapons um we also wanted to
[56:20] you know it ties into subscriber flare
[56:21] as well
[56:22] right like we've always talked about
[56:23] wanting to put a subscriber shop in
[56:24] there so guess what
[56:26] subscribers just a reputation that is a
[56:29] bullying on or off you know
[56:31] um and that is kind of like one of the
[56:34] core
[56:35] when when we say like oh this thing will
[56:36] give you x item it generally will more
[56:38] give you access to x items
[56:40] and that's why when you fall below that
[56:43] rank we aren't going to take that out of
[56:44] your inventory because that's just
[56:46] rude frankly um it's that that item
[56:49] might decay to a point where
[56:51] uh it is broken or needs to be repaired
[56:53] or something you won't be able to get
[56:54] back until you're
[56:55] back in working order until you are
[56:57] above certain reputations or get a
[56:58] replacement until you're above that
[57:00] yeah so and as we move forward uh with
[57:03] the game obviously wear and tear is
[57:05] going to become
[57:05] much much bigger of an influence over
[57:08] over your gameplay like right now we do
[57:10] a lot of things with ships where
[57:11] we basically just give you all brand new
[57:13] you know stuff when you
[57:14] claim insurance but eventually the
[57:17] intent is that
[57:18] like your parts are wearing out so if
[57:20] you lose your rep to be able to buy
[57:22] you know have access to it you may not
[57:24] have to
[57:26] you may not be able to get it repaired
[57:27] by them or
[57:29] uh you may not be able to get another
[57:30] one so it's yeah it's it's
[57:33] i i can't express how fundamental
[57:36] reputation is to our progression system
[57:39] uh enough
[57:40] it is it is huge and it's going to be
[57:42] tied into
[57:44] as many things that make sense but it's
[57:46] going to be in most of the stuff that we
[57:48] work on
[57:48] it's going to be a factor and as a
[57:51] follow-up to that subscriber for your
[57:53] thing uh we're talking about
[57:55] many subscriber players get lost
[57:57] throughout the course of
[57:59] you know adventuring in the prison
[58:00] universe we're talking about an easy
[58:01] place for people to go back
[58:03] and reclaim the things that they have
[58:05] already yeah i mean that's
[58:07] that's an interesting you know point you
[58:09] know they
[58:11] typically you know with the the players
[58:13] are just doing like character resets and
[58:14] then getting their stuff back right
[58:16] um reclaiming it like we have talked
[58:18] about you know
[58:19] if you lost it maybe at some point
[58:22] somebody could find it
[58:23] right and then it gets returned to your
[58:25] home location where you can go and pick
[58:26] it up
[58:27] there is talks about how we can do that
[58:30] for some of those key items like the
[58:31] subscriber things or like the the things
[58:33] that you you know paid real money for or
[58:36] um the the special stuff right you know
[58:39] that
[58:39] your your special mount or et cetera
[58:42] uh so to speak but yeah that's that's a
[58:45] it's it's it's in the plan i i don't
[58:48] know when that's
[58:49] scheduled or it's an evolution of the
[58:52] shopkins
[58:52] shopping experience for sure and i know
[58:55] next year is going to be much more
[58:57] economy focused as we kind of get the
[58:59] quantum
[59:00] tooling integrated into the game more
[59:02] and more so
[59:03] that's that's what i would like to see
[59:05] that happen but
[59:06] it's all gonna come down to priorities
[59:09] yeah
[59:10] i also should clarify for zen a threat
[59:12] we are going to
[59:13] directly reward you some stuff at
[59:15] certain reputations after the event is
[59:17] done
[59:18] um but that is something that we do not
[59:20] plan to do long term
[59:21] that's a yeah so that's that's a good
[59:24] point like
[59:24] right now we're kind of doing it in a in
[59:27] a undesirable way where we're
[59:29] going through the the analytics data and
[59:32] going uh who's actually completed this
[59:33] and then and then
[59:34] attributing those things to the accounts
[59:36] these are things that we want people to
[59:38] uh be able to one acknowledge go yep
[59:41] cool
[59:41] i'm going to this place and i get it and
[59:43] i did it and i know that i did it
[59:45] whereas right now the back end just goes
[59:46] yep you got it and
[59:49] there's not a whole lot of messaging you
[59:50] don't really you know um
[59:53] once the inventory is localized your
[59:54] quarter i go get it we've got plans for
[59:56] that
[59:57] as well but um yeah so hopefully it'll
[1:00:00] it'll become more fluid and more
[1:00:02] more tangible in-game experiences with
[1:00:04] with the reward
[1:00:05] stuff that they're doing now cool well
[1:00:08] gentlemen that's it it's the end of our
[1:00:10] show congratulations you made it to the
[1:00:12] end
[1:00:13] uh all that's left is for uh chad to
[1:00:16] show us what that thing in the
[1:00:17] background is and how it works
[1:00:19] it's a power key just for weightlifting
[1:00:24] you're gonna show us sir he doesn't know
[1:00:26] how it works
[1:00:28] [Laughter]
[1:00:36] thanks for spending your time at the end
[1:00:37] of our week here on star citizen live
[1:00:39] uh that was that was chad that was rob
[1:00:42] that was that was that can i point in
[1:00:44] the corner there you go that was that
[1:00:45] was ben
[1:00:46] uh we are gonna we're gonna throw a raid
[1:00:48] i think we're gonna throw a raid uh to
[1:00:49] somebody here
[1:00:50] uh so uh there is a streamer going now
[1:00:53] his name
[1:00:53] uh their name is nyashi uh nayashi
[1:00:57] uh i don't know anything about this
[1:00:58] person uh
[1:01:00] we're literally just picking a person
[1:01:01] and we're gonna surprise him
[1:01:03] so uh so um when you when you head over
[1:01:07] there
[1:01:07] tell them chad doesn't really work out
[1:01:11] and uh we'll uh we'll see you next week
[1:01:13] everybody not saying he doesn't i'm just
[1:01:15] saying
[1:01:15] i've never seen him use it that's
[1:01:17] awesome i've never seen him use it i've
[1:01:19] not
[1:01:19] it just sits back there it's like he's
[1:01:21] swole dude they
[1:01:22] checked them like before the camera like
[1:01:25] he's like oh
[1:01:26] yeah dude those legs are like power
[1:01:28] lifter legs man he's got like
[1:01:30] robot we are off the air right
[1:01:35] uh yeah sure

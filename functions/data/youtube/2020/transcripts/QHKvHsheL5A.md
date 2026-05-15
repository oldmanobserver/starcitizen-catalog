# Star Citizen Live: Weapons Grade

**Video:** https://www.youtube.com/watch?v=QHKvHsheL5A
**Date:** 2020-08-07
**Duration:** 1:00:50

## Transcript

[00:03] hi everybody
[00:04] welcome to another episode of star
[00:06] citizen live game dev
[00:08] weapons grade i'm your host uh jared
[00:10] huckabee
[00:11] uh if you've never seen star citizen
[00:12] live before uh it's where we take about
[00:14] an hour out of our day at the end of a
[00:16] week
[00:16] and we either answer some questions
[00:18] about the development of the game
[00:20] or we speak with artists designers
[00:23] conceptors programmers sometimes
[00:26] one time we did a show on schedules with
[00:28] producers we just explore their process
[00:30] how they go about their work how they
[00:32] make the things uh that they make
[00:34] for star citizen and that's what we're
[00:36] doing here today so let's
[00:37] it's it's a let's introduce our panel of
[00:40] esteemed guests
[00:42] some of them you may have seen before
[00:43] some of them this may be your first time
[00:44] so we'll go we'll go around the room
[00:46] and we'll meet who's talking uh jake
[00:49] since you're in the
[00:50] corner there let's just start with you
[00:51] who are you and what do you do for star
[00:53] citizen
[00:54] hello uh i'm jake taylor and i'm a prop
[00:57] and 3d weapons artist
[01:00] and so you make props and 3d weapons
[01:02] indeed
[01:03] don't no no don't need to explain that
[01:05] all right all right
[01:06] okay uh moving along clockwise corey
[01:10] you've been on the show you're you're an
[01:11] sel veteran but it's somebody's first
[01:14] show who are you
[01:16] cory banford lead proper ice so i
[01:19] mostly chase these lot around now
[01:23] now that that's at least new the last
[01:24] time we had you on the show you weren't
[01:25] a lead so congratulations yeah oh check
[01:28] congratulations
[01:28] it's good it's good fun i enjoy it
[01:30] congratulations
[01:35] it is so soft i i i'm not chilling this
[01:38] is this is mine this is just this is
[01:39] beyond personal time here
[01:40] it's very soft um yeah and then uh uh
[01:44] that was my going around the room i
[01:45] realized i had to be up next so that's
[01:46] pico
[01:47] he's a penguin that's his introduction
[01:48] and last but certainly not least david
[01:51] who are you what do you do for star
[01:52] citizen yeah my name is david zipper
[01:55] and i'm a senior weapon artist on star
[01:58] citizen
[01:58] so i do a lot of fps weapons
[02:03] sometimes ship weapons but i'm mostly on
[02:06] on fps weapons
[02:10] you helped us out with our visual guide
[02:12] fps weapons
[02:13] that we did in jump point a couple
[02:14] months ago i really appreciate that by
[02:16] the way i don't
[02:16] i don't think i ever said thank you by
[02:18] the way thank you
[02:21] all right so let's turn let's that's
[02:23] enough for enough for the introductions
[02:25] let's get into the show
[02:26] actually i understand that we have a lot
[02:27] to talk about so i'm going to turn it
[02:28] over to you guys
[02:29] what are we doing today
[02:33] going jake no jake jake's
[02:38] okay uh yeah so we'll be able to show
[02:41] off the block out of the new gemini
[02:43] sniper rifle
[02:44] and we could also show off the shotgun
[02:47] which is a bit more head
[02:48] a bit more ahead and we can also look at
[02:51] uh the where
[02:52] the pipeline that we do and just answer
[02:54] any questions talk about that kind of
[02:56] stuff
[02:57] all right all right well you've got a
[02:58] lot so we'll keep you on the clock then
[03:00] you want to start the screen share and
[03:03] take us away cool
[03:07] so corey david do you want me to just
[03:10] like start talking and you're like
[03:12] interrupt me as you wish i mean i'm
[03:14] keeping on a chat so if people have
[03:16] questions about what
[03:17] jake's doing um david and i'm sure we
[03:19] can field them and just generally
[03:21] discuss yeah i'll go i'll go ahead and
[03:23] take care of the questions sure yeah no
[03:25] worries
[03:26] i'm not gonna answer like when is x
[03:28] coming out or anything like that don't
[03:30] worry
[03:31] please don't ask us that we don't know
[03:33] and uh for folks who
[03:34] want to submit questions during the
[03:35] course of the show uh remember you can
[03:37] submit your questions in the chat with
[03:39] the word question
[03:40] uh any capital letter surrounded by
[03:41] brackets that's going to help our
[03:42] community management team
[03:44] pull out which questions are appropriate
[03:46] for our group here
[03:47] and then they'll pass them to me and
[03:48] then i'll pass them to the team uh
[03:49] remember that these are
[03:51] three artists so if your questions are
[03:53] about how this works
[03:54] or how that works or will we get this or
[03:57] whatever
[03:58] uh this is not the show for those kind
[04:00] of questions everybody
[04:01] art based questions for art based people
[04:05] for simple people yep uh cool
[04:09] so on the screen you can see the concept
[04:11] for the sniper rifle so this is the
[04:13] first thing that
[04:14] as an artist will see and
[04:17] this is based off a model as well so we
[04:19] have the lucky opportunity that our
[04:21] concept artists are also modellers
[04:23] so we get to take this in and
[04:25] essentially
[04:27] already work off a really good base so
[04:29] if i bring in the concept now because
[04:31] right now you're looking at the block
[04:32] out
[04:34] show selection this is
[04:38] that model for the render that you see
[04:40] here and
[04:41] if i show off all the geometry you can
[04:43] see that it when making
[04:45] no uh mind was put into making this
[04:48] cheap
[04:48] or or cleaning i'm already seeing
[04:51] 1.3 million polygons
[04:54] yeah that's a that's a good point you
[04:56] raised i want to make sure that that
[04:58] gets
[04:58] across there concept models even even
[05:01] when done in 3d
[05:02] are because they're explorations because
[05:04] they're working fast because they're
[05:05] iterating
[05:06] super quickly uh there is no uh
[05:09] conservation of of of of information or
[05:12] polygons being done
[05:14] there's no efficiency being done so that
[05:16] is people often ask why don't you just
[05:18] put the concept model
[05:20] in the game uh it's because if folks
[05:22] remember
[05:23] uh longtime folks might remember the uh
[05:25] uh freelancer when the freelancer was
[05:27] remade the first time
[05:28] uh way back around 2014-ish uh
[05:32] it had rivets in them it had rivets in
[05:34] them that were
[05:35] there were something like uh like like a
[05:38] hundred
[05:38] try a hundred thousand tries so just the
[05:41] rivets alone were just ridiculous and
[05:42] somebody copy pasted the rivets
[05:44] and into the actual game freelancer
[05:47] model and it made things very bad for a
[05:48] while
[05:49] so you don't use concept models in the
[05:51] game yeah it's
[05:52] it's when concept artists do use 3d
[05:55] uh packages they'll tend to use
[05:59] usually quite different actual um
[06:01] software as well so they'd be
[06:03] i know that a fair few concept types to
[06:05] do it for you we'll be using certain
[06:06] fusion 360 which is more
[06:08] for um basically like cad and stuff it's
[06:12] not
[06:12] really even the software itself isn't
[06:14] really designed to create
[06:15] the same sort of geometry as you know
[06:18] game ready stuff
[06:20] so especially with our workflow where we
[06:23] um you know in a lot of video games what
[06:25] you'll do is you'll create like a high
[06:26] poly model
[06:27] and then you'll sort of transform that
[06:29] and you'll like bake that information
[06:30] down onto
[06:31] a simpler piece of geometry um
[06:35] in in our workflows you can see what
[06:37] jake's doing here is actually modeling
[06:38] in like a lot of the chamfers
[06:40] um so every everywhere there's like a
[06:41] rounded edge that actually gets modeled
[06:43] in
[06:45] so yeah you can't really transfer the
[06:48] information directly it's more of
[06:50] a process of like reconstructing the
[06:52] shapes
[06:53] um to be optimal optimized for like a
[06:55] you know
[06:56] game-ready scenario
[07:00] so you're you're you're in the process
[07:01] of this is literally like
[07:03] uh you're you're you're about as far
[07:06] along in the process as you are
[07:08] you know building this out and
[07:09] converting it from the concept uh one of
[07:11] the questions from the chat
[07:12] is uh what do you anticipate the dif the
[07:16] greatest difficulty
[07:17] for this weapon to be at this point i
[07:19] know you're you're still in early days
[07:20] here
[07:21] um i know that already because i've had
[07:24] to tackle it a bit
[07:25] and it's it's this area around here like
[07:28] all this kind of gubbins because
[07:31] if i focus on the concept a sec um
[07:34] not only have you got kind of like these
[07:36] really difficult organic
[07:38] shapes in a hard surface asset they're
[07:41] all very slightly kind of turning in
[07:44] and oh wow that's yeah that's one of the
[07:47] biggest um
[07:50] problems we need to tackle while doing
[07:51] it is that that everything needs to be
[07:53] animated it needs to work the magazine
[07:55] needs to rotate out
[07:56] it has a mechanism and and all that
[07:59] needs to work
[08:00] and the parts shouldn't intersect you
[08:03] know shouldn't move
[08:04] into each other and and you know having
[08:07] that ugly intersection that
[08:09] that's something we need to prevent
[08:11] while while doing it
[08:13] and and of course you know that's
[08:14] something that concept artists know to
[08:16] look out for
[08:17] uh you know through metrics and stuff
[08:19] like that but you don't always
[08:21] discover every single uh uh
[08:24] edge case and uh issue during the
[08:26] concept process
[08:29] yeah that's how that's fine
[08:32] um that that's why we're doing a
[08:34] blockout so we're doing this blockout in
[08:36] this state
[08:37] and already do a rig a rig is basically
[08:41] a skeleton that an animator can use
[08:44] and the animator then tests it in engine
[08:47] and we can we while doing it we already
[08:51] usually run into issues and and see um
[08:54] how this this works out and then uh here
[08:57] we can see that the mechanism pretty
[08:59] pretty nice um we can test all that in
[09:02] engine
[09:03] and reiterate on it because uh in this
[09:06] state it's really easy to rebuild
[09:07] rebuild
[09:08] something or change something but if
[09:10] it's final
[09:11] and we have already made textures and so
[09:13] on so the more we've
[09:15] done on it the harder it gets to um to
[09:18] change
[09:18] you know so in this state it's it's
[09:21] still
[09:22] pretty easy to uh change around shapes
[09:24] and and rebuild it
[09:26] yeah and for those asking uh he's
[09:28] working in maya right now
[09:30] yeah it's quite um it's quite
[09:32] interesting because a lot of
[09:34] um a lot of the assets in star citizen
[09:36] for instance
[09:37] ships um props and environment they're
[09:40] typically made in 3ds max but um
[09:43] character animations and
[09:45] charac you know and that's all done on
[09:47] in maya so
[09:48] you know for fps weapons it makes a lot
[09:50] more sense to be using maya
[09:52] um you know you could you could
[09:55] technically make it all in max but
[09:57] it's mostly just the animators and the
[09:59] rigs will need to be admired anyway so
[10:01] if you can do the art in maya as well it
[10:02] just kind of streamlines it you're not
[10:03] supporting
[10:04] two different source files it just makes
[10:07] things a lot neater
[10:08] um and yeah the workflow has kind of
[10:10] been adapted to that
[10:12] uh in chat they have a question uh
[10:15] couldn't there be a tool of some kind
[10:18] that just takes the concept model and
[10:19] then just
[10:20] breaks it down from there that would
[10:22] that would be the yeah
[10:25] that would make our jobs obsolete
[10:28] yeah i think like that's what we there's
[10:31] a lot of automation
[10:32] that can be done um for 3d modelling but
[10:36] um i think it's just due to the fact
[10:38] that we've got such a a specific
[10:39] workflow i think it would
[10:41] be very difficult to get a computer you
[10:44] know a computer program or an algorithm
[10:45] or something to actually reproduce those
[10:47] results perfectly
[10:48] we we do use um for things like lods
[10:52] in in some other workflows we have um
[10:54] systems that
[10:55] generate our lots for us or you know we
[10:59] have a lot of scripts to automate parts
[11:01] of the process but as a whole because we
[11:02] have this focus on optimization
[11:04] and we have a lot of different
[11:05] requirements that really
[11:07] for a human once you know the rule set
[11:10] is quite simple but
[11:11] for i think getting like i don't know
[11:12] like ai or some sort of
[11:14] program to do man i think maybe in 10
[11:17] years maybe in 20 years or something we
[11:19] might have
[11:19] you know we might be closer to that but
[11:21] it would also require a longer concept
[11:23] period because all of those
[11:25] absolute things the the functionality
[11:27] would have to be completely totally and
[11:29] utterly worked out in the concept phase
[11:31] and while we certainly target that and
[11:33] we certainly take those things in mind
[11:35] during the concept phase
[11:36] uh anybody that's followed uh the
[11:38] development over time knows that
[11:40] that sometimes things just have to
[11:41] change from concept because metrics
[11:44] change the the the scale and scope of
[11:46] development changes
[11:47] uh the lessons we learn along the way as
[11:50] we make each one of these
[11:51] uh improves uh it's just it's a lot
[11:53] easier for a human to adapt
[11:55] than it is for some automated tool
[11:59] yeah i think like if you look if you
[12:01] look back at
[12:02] um a lot of the workflows that we had
[12:04] you know even even
[12:05] 10 years ago for video games it has
[12:09] you know we have seen a lot of changes
[12:10] in that there are a lot of workflows
[12:11] that do rely more on um like procedural
[12:13] generation
[12:14] or you know computer assisted kind of
[12:17] stuff
[12:18] um but yeah i think you know there's
[12:21] it's it's it's a conversation obviously
[12:22] as artists we have a lot is
[12:24] you know how long is it until our jobs
[12:26] are going to radically change because
[12:27] you know
[12:28] things like um deep learning well you
[12:30] know like deep learning algorithms and
[12:31] stuff are basically going to be like
[12:33] you know make this like i think nvidia
[12:35] have done some interesting stuff like
[12:37] landscape generators and things right
[12:39] you know when they're gonna when are
[12:40] they gonna make a landscape generator
[12:42] for
[12:42] 3d art it's i think with hard surface
[12:46] assets it's
[12:47] because they're so sort of organized in
[12:50] their structure
[12:50] it's really hard to get a computer to
[12:52] make them if that makes sense
[12:54] because i know it sounds kind of
[12:55] counter-intuitive but when you have an
[12:56] organic asset
[12:58] it doesn't really matter if the topology
[12:59] isn't perfect right you can just kind of
[13:02] munch it so yeah i think
[13:06] you know things like photogrammetry and
[13:07] stuff generally work better on like
[13:09] rocks
[13:10] yeah well and one of one of the core
[13:12] tenets of star citizen is that
[13:14] you know we use automation and tools and
[13:16] everything to
[13:17] help our workflow and to assist artists
[13:20] anything but not to take over the work
[13:21] from them
[13:22] there's it's you know some games would
[13:24] use procedural generation
[13:26] and spit out the finished product we use
[13:28] procedural generation in like our
[13:29] planets and stuff
[13:30] to provide a base from which artists
[13:33] then go
[13:34] and do their work after the fact so it's
[13:37] we we use scripts and that kind of stuff
[13:38] to help us along the way but not to do
[13:40] the work for us
[13:44] at least today there's no substitute for
[13:45] that human touch
[13:47] um one of the questions one of the
[13:49] questions from the chat
[13:50] is uh how long uh how long a process
[13:54] would this normally take i know
[13:55] there's there's almost no normal in game
[13:57] development but
[13:58] looking at this well when you got this
[14:00] model what was your estimate on how long
[14:02] it would take
[14:03] to make this game ready from the
[14:05] timeline i would say
[14:07] it's it's um it depends on how many
[14:10] problems come up
[14:11] while doing it like in the optimal case
[14:13] you can do it in about two weeks i would
[14:15] say
[14:17] in a non-optimal case where we need to
[14:19] change a lot where problems come up
[14:21] and we realize them pretty late in the
[14:23] process that that
[14:24] sometimes happens sadly um it can
[14:27] take up to a month or so that sometimes
[14:31] when when problems come up super late in
[14:34] the process that
[14:35] eats up a lot of time but usually we we
[14:37] try to plan it
[14:39] pretty good and get it done as fast as
[14:41] possible
[14:43] and yeah and that's right sorry not good
[14:46] no good good i guess that's the main
[14:47] reason for like the
[14:48] the sort of blockout phase like what we
[14:50] would normally do is we get the concept
[14:52] mesh
[14:52] run it through some optimization
[14:54] processes and get that in game
[14:56] and then you know you can see the
[14:57] character holding it we can say does
[14:59] this work on the mail rig does it work
[15:00] on the female rig does it tick all the
[15:02] boxes for the hand grips and stuff
[15:04] you know uh jake will probably show you
[15:06] um another weapon later where we had to
[15:07] make some
[15:08] adjustments to the weapon from the
[15:11] concept because
[15:12] the the grip wasn't quite working um
[15:15] just through like
[15:16] you know while the concept artists are
[15:19] very aware of the sort of
[15:20] you know the application of a weapon
[15:22] unlucky humans holding it they
[15:24] they don't necessarily test all the you
[15:26] know they can't necessarily test all the
[15:27] use cases
[15:28] so sometimes we do come back and we you
[15:30] know we get it in and we're like okay
[15:31] this isn't working
[15:32] tweet the proportions here maybe you
[15:34] know make make some changes
[15:36] you know just just just purely because
[15:38] it needs to be used by a character
[15:40] and i'll show that now sure as well one
[15:43] of the the problems
[15:44] that came up for example with the
[15:45] shotgun here is that the
[15:47] the magazine actually sticked a little
[15:49] bit too much into the armor of the
[15:51] character and we we had to address that
[15:53] and and
[15:54] that's something while doing the weapon
[15:56] itself um
[15:58] sometimes you can't even think about the
[16:00] possibility that the magazine
[16:01] because of the shape it has it it kind
[16:03] of like clips too much into the the body
[16:05] of the character
[16:06] and and therefore we had to like change
[16:09] the orientation of it that the flat side
[16:11] is on the body and not the round side
[16:13] that you can see here
[16:15] if that makes sense so some of those
[16:18] changes that
[16:19] you guys are mentioning and if i change
[16:22] over to the
[16:22] shotgun concept and this was a concept
[16:25] that we were given
[16:26] and i can't really show them side by
[16:30] side so i'm just going to quickly flash
[16:31] between the two of them
[16:33] but if i point it out in the concept
[16:36] here
[16:36] we've got kind of got like this trigger
[16:38] and then this nice angle here that leads
[16:40] into
[16:41] the magazine and then it kind of leads
[16:43] out into this really nice long barrel
[16:45] and this area is where most of the
[16:47] change happened
[16:48] we were having issues with what you said
[16:50] david like uh
[16:51] the character's arm and clipping with
[16:54] this barrel
[16:55] and we're limited right by how big this
[16:58] barrel needs to be because
[16:59] we want it to specifically contain i
[17:02] think it was like 12 shotgun shells
[17:04] so i had to make this thicker this has
[17:07] to be sitting
[17:08] right up against the trigger now um and
[17:11] this whole nose area had to be brought
[17:13] in way back
[17:14] and um because there's a pump action as
[17:17] well if you look here like the handle's
[17:19] quite
[17:19] slim and if you were to grab that and
[17:22] drag that back and forth you probably
[17:24] break your fingers on this or something
[17:27] there also wasn't any like buffer was
[17:28] there
[17:29] on it wasn't like on a rail whereas what
[17:30] you've got now is you've got the the
[17:32] sort of foregrip
[17:33] sound forwards quite a lot and it'll
[17:35] articulate backwards because this
[17:37] correct me if i'm wrong but this this
[17:38] has got like a pump action on a fully
[17:40] automatic mode right
[17:42] um i don't want to semi-automatic sorry
[17:46] you don't think you're right i don't
[17:48] think you're right
[17:50] so it's got a drone mag and it's it's
[17:51] just a pump action uh they're a surprise
[17:53] i i i i can say that there was some
[17:55] healthy discussion about that topic
[17:57] uh between richard tyron and cr the
[18:00] other day it's still under review i
[18:01] think
[18:02] okay yeah i know that was initially
[18:06] this sort of brief but yeah maybe let's
[18:07] change now cool
[18:09] yeah and as you can see um like we we
[18:12] model it pretty
[18:13] detailed so that you can look inside and
[18:15] you even see the shotgun shell inside on
[18:17] the magazine
[18:18] um yeah you can even zoom in see the
[18:21] shotgun shell
[18:22] and what the animator does it he takes
[18:24] the top
[18:25] shell and actually animates it into the
[18:27] chamber
[18:28] if you like having a slow motion in
[18:30] engine like by
[18:31] 10 speed you can see the shell moving in
[18:34] there while the
[18:35] bolt is moving back yeah actually like
[18:38] this basically
[18:40] and that is a really nice touch and most
[18:42] people won't even notice but
[18:43] but it's it's really cool that we have
[18:45] it in engine i think
[18:47] i should be able to exactly so you
[18:49] you're switching around here so you're
[18:51] now in
[18:51] inside the lumberyard oh we lost the oh
[18:54] there we go so this is now inside
[18:56] lumberyard
[18:58] yeah so you can show off that shotgun
[19:01] uh i just let them drop to the floor and
[19:03] then pick them up from the ground
[19:04] because
[19:05] you're a savage i'm a professional get a
[19:07] table jake the table's right over there
[19:11] yeah uh but yeah we should
[19:14] fire a shot you can very very quickly
[19:18] see that come out see a dude's torso
[19:20] through the other
[19:22] side
[19:24] a little fun
[19:28] perfect dummies so i can really see how
[19:30] this gun feels
[19:36] it's looking cool yeah
[19:40] uh those guys just showed up for some
[19:43] bikini calendar shoot
[19:45] yeah uh you got a a question from the
[19:49] community here um for artists
[19:52] uh what are your limitations poly uh
[19:55] polygon count wise
[19:56] uh this first was this person saw the
[19:58] barrels flash hider
[20:00] uh looked like it had a ton of polygons
[20:02] in it uh
[20:03] and and then is gaming really moving
[20:05] away from polygon restrictions
[20:07] um yeah i think i can say something
[20:09] about that so you can see on this one
[20:12] together with the magazine is around 52
[20:14] 000 polygons which sounds quite a bit
[20:16] but
[20:17] you need to consider we have a different
[20:19] workflow than
[20:20] uh most other studios have so our
[20:23] workflow is custom normals
[20:24] so all these like at the front or jake
[20:28] is showing it with the cube here
[20:29] um so yeah this has 12
[20:32] triangles and if you bevel it it already
[20:34] has 44
[20:36] but um if you select the vertices now on
[20:38] it
[20:39] um like if you can select all of them
[20:42] you will see that that it's 24
[20:45] and because of the hard edges here like
[20:47] the hard edges basically
[20:49] split the the object into multiple faces
[20:52] on the left cube so right
[20:56] exactly exactly and and the vertex count
[20:59] is actually
[21:00] the same for them or nearly the same so
[21:03] that's actually what matters in the end
[21:04] is the vertex count and
[21:07] um another reason another thing that
[21:09] matters is small polygons
[21:11] but we are using level of details of the
[21:14] weapon
[21:14] so like after about like one meter or
[21:16] one meter um 50 it already has um
[21:20] it's getting rid of the small little uh
[21:22] bevels here at the side
[21:23] so you basically after 1 meter 50 you
[21:25] see the
[21:27] the left cube instead of the the right
[21:28] cube right so our weapons use the same
[21:32] leds that ships do so so so that way we
[21:35] when we look up close at it we can see
[21:37] all the full
[21:38] crazy detail and then everybody else
[21:40] who's running around in game they're
[21:42] seeing a lower lod version
[21:43] until they get until they get really up
[21:45] close it's also worth mentioning and i'm
[21:48] not
[21:48] an engineer or a graphics programmer so
[21:50] i might you know this is going to be a
[21:51] layman's explanation but
[21:53] um the advantage of this workflow
[21:56] where you're putting a lot of detail in
[21:58] the geometry of course it will increase
[21:59] your your triangle count your vertex
[22:01] count
[22:01] however in a lot of games like i said
[22:03] earlier they they actually bake
[22:05] um they actually bake the high poly
[22:07] information into
[22:09] a lower poly version and they create a
[22:11] texture for that called a normal map
[22:13] which essentially per pixel will give
[22:16] you like
[22:17] the angle essentially
[22:21] say you have 200 props or weapons in a
[22:24] scene
[22:25] and you're loading in 200 of those
[22:27] unique
[22:28] textures it's quite a lot of texture
[22:30] memory
[22:31] whereas with our workflow we do use
[22:33] textures for some things like palm
[22:35] the materials themselves and so on but
[22:37] we don't have like a lot of unique
[22:39] texture memory
[22:40] taken up per asset so you're actually
[22:42] kind of
[22:44] you know we're basically taking up
[22:47] more overhead in terms of poly count but
[22:49] we're also reducing the amount of
[22:50] texture overhead
[22:52] in a way so it's kind of swings around
[22:54] about
[22:55] um i think hardware is a huge part of
[22:57] that and that's not really a topic i'm
[22:59] you know hugely educated on like to you
[23:02] know
[23:02] actually you know what modern specs are
[23:05] for graphics cards and you know it's a
[23:08] difficult one to really explain it's
[23:09] nice but
[23:10] essentially like you know we're kind of
[23:12] prioritizing
[23:14] reducing texture and memory versus you
[23:16] know the amount of triangles we have
[23:18] yeah uh in a question that
[23:21] asks to look behind the curtain and see
[23:23] if oz is really there
[23:24] uh for the magazines do the weapon
[23:26] magazines actually have individually
[23:28] modeled
[23:29] rounds inside them um
[23:32] and do you move out of the magazines we
[23:34] need to trick it a little bit to
[23:36] for like not having too many polygons so
[23:38] the top
[23:40] round is usually modeled completely and
[23:42] the one under it has
[23:43] a little bit less details than the top
[23:45] one and
[23:47] if you go even deeper into the magazine
[23:49] you maybe even have a cylinder with the
[23:50] red stripes
[23:51] so you if you have like a glimpse from
[23:53] the side you can still
[23:55] yeah and in this case you can still see
[23:57] it pretty good but on some magazines
[23:59] it's it's
[24:00] um the shadow is actually taking away
[24:02] the detail anyway so you can
[24:04] can um use more uh less
[24:07] less details the deeper you go in yeah
[24:11] things like um grenade launchers and
[24:13] such where
[24:14] all the um well you know not bullets but
[24:17] rounds are visible
[24:18] they'd have to be modeled in yeah yeah
[24:21] but in terms of the capacity and stuff
[24:23] is you know stored as a value somewhere
[24:25] so
[24:26] they're kind of there but sometimes
[24:27] they're not drawn sorry go on jared
[24:29] no no that's it you
[24:33] you do it you do what you got to do to
[24:34] squeeze every answer performance where
[24:36] you can
[24:39] that's true for most video games i think
[24:41] or at least we should be
[24:42] yeah we even even though we use more
[24:44] polygons and the workflow we do is is
[24:47] still optimized quite a bit so um
[24:51] we're not using a heavy load of textures
[24:54] like corey said before
[24:55] which can in some cases if you use a
[24:58] 2000 by two thousand resolution
[25:00] or four thousand by four thousand you
[25:01] can easily get to um
[25:03] like a hundred megabyte per weapon and
[25:06] um if we have like
[25:07] a hundred weapons in game it it gets too
[25:10] heavy and we had to like
[25:12] think about ways of reducing it so
[25:15] and our workflow with the custom normals
[25:17] is really scalable
[25:18] um you can use it on weapons you can use
[25:21] it on buildings
[25:22] and and on it doesn't matter really what
[25:25] you do with it
[25:25] it all works yeah and that's why it's so
[25:28] strong in my opinion
[25:30] yeah it's um it's quite uh
[25:33] yeah the scalability is really important
[25:35] especially for
[25:36] um say props for instance where you have
[25:39] like
[25:39] i don't know an absolutely obscene
[25:41] amount of them like
[25:42] you know you need them to be we wanted
[25:45] to look good we wanted to have a lot of
[25:46] detail
[25:47] but we also want them to be fairly
[25:50] cheap uh folks are still talking about
[25:53] whether the shotgun was
[25:55] and semi-auto there are so no no there
[25:58] are accommodation
[25:59] uh pump semi-auto uh shotguns in the
[26:01] world i think the the tech 12
[26:03] and there's one from uh the european
[26:07] union his name i i can't remember right
[26:09] now
[26:09] they're rare but but they exist uh as
[26:12] far as that one goes
[26:13] uh i know it's still under discussion
[26:15] about whether it's going to be both or
[26:16] whether it's going to the spas thank you
[26:17] see
[26:18] there's the chat is that's what i was
[26:19] trying to remember the spas
[26:21] so see you always count on chat
[26:24] uh so yeah so they are out there so i
[26:27] don't i don't
[26:27] i know that that's currently under
[26:28] discussion about whether where that's
[26:30] going to land whether it's still going
[26:31] to be a hybrid or whether it's going to
[26:32] be one to the other
[26:33] all right or just our only pump it's
[26:35] definitely going to have pump let's put
[26:36] it that way
[26:37] there is a pump on it yeah exactly there
[26:38] is a pump on it it will definitely have
[26:40] pumped i think the question is just
[26:41] whether it's
[26:42] yeah uh semi automatic as well or not so
[26:46] so check back later folks
[26:49] one thing i wanted to say as well uh
[26:52] those who are
[26:53] uh paying real close attention you
[26:55] probably saw that i did some work and
[26:57] they pretty much
[26:58] went back on it all and that's just
[27:01] gonna happen sometimes a lot of time
[27:03] you'll try and tackle a situation
[27:05] realize that it won't quite work and
[27:07] then you'll just tackle it in a
[27:08] different way
[27:10] so i try to get rid of the negative
[27:12] space on this
[27:14] on this shape here first and then with
[27:16] this shape here and try to combine them
[27:18] and realize
[27:18] oh that's not going to work i'm going to
[27:20] do it this way instead and
[27:22] now i can get rid of that negative space
[27:24] once these two pieces are combined and
[27:26] little things like that yeah and you
[27:29] always need to consider we're working
[27:30] like in in sub-millimeter
[27:33] sizes here sometimes so like the edges
[27:36] are like
[27:36] 0.7 millimeter or something it's like we
[27:39] need to do it a little bit
[27:40] bigger than it would be in the real
[27:42] world because
[27:43] if you do it in a game engine um really
[27:46] hard edges are
[27:48] like pixelated a lot and and you're
[27:51] reaching a point where
[27:52] it looks better where when you do it a
[27:54] little bit bigger even though it's
[27:56] unrealistic
[27:57] yeah so we have like a like the minimum
[28:00] value of
[28:00] i would say like point seven millimeter
[28:03] and usually i go for one millimeter for
[28:05] edges
[28:06] yeah on on it's probably way more
[28:09] because the objects are bigger right
[28:11] yeah usually uh our safe minimum is like
[28:15] for say like something that's like a
[28:17] meter square a meter cube would be like
[28:19] half a centimeter we'd say the chamfers
[28:21] it's it's kind of down to the use case
[28:24] like if we have a prop that you pick up
[28:26] and inspect
[28:27] you know similar to a weapon you'd
[28:29] probably want those chamfers to be
[28:31] sort of tuned to where they are in
[28:34] screen space if that makes sense
[28:36] like how big they are relative to the
[28:38] size of the the
[28:40] you know where they are in the world but
[28:43] yeah
[28:44] now i think the nice thing about
[28:45] modeling this kind of stuff is it is
[28:46] definitely like an iterative process
[28:49] you know you're kind of you're problem
[28:50] solving as you go you're sometimes
[28:52] tapping shapes you've never
[28:54] kind of worked with before or you know
[28:56] employing a ton of different modeling
[28:57] techniques
[28:59] you said editor is that iterative for
[29:00] playing the star citizen drinking game
[29:02] you have to drink
[29:07] what's your best modeling advice for an
[29:09] amateur cg artist
[29:11] uh this person specifically uses moto
[29:13] and zbrush at the moment
[29:16] yeah for starters it's it's
[29:19] um the software it really doesn't matter
[29:21] that much i would say like you can use
[29:23] blender it's free
[29:25] or you just try to get a um a version
[29:29] from from your uni or so if you're using
[29:31] my or max it's also good it's
[29:33] most the people in the industry use maya
[29:35] or max
[29:36] so that's always a safe bet i would say
[29:38] but
[29:39] it's most important is that you keep
[29:41] doing work you know even if it's not
[29:42] good in the beginning
[29:43] just continue don't stop doing your work
[29:46] try to improve
[29:47] try to get into into fields that that
[29:49] you know
[29:50] you're interested in if you like
[29:52] characters go into characters and
[29:54] if you go for like more like weapons um
[29:57] then then try to do a lot of weapons
[29:59] right try to learn more about weapons
[30:01] how they work
[30:02] because for example on weapons you know
[30:05] you you need to
[30:06] kind of understand the mechanics behind
[30:08] it a little bit at least
[30:10] so yeah it's always helpful to have your
[30:14] a proper mindset for what you're doing
[30:16] you know that that's really important
[30:19] yeah i think using reference is a
[30:23] a very important thing when you're
[30:24] starting out as well like
[30:26] um also you know there's tons of
[30:29] communities out there for
[30:31] um getting feedback and stuff like you
[30:34] know you'll find that there's a lot of
[30:35] communities where you'd have industry
[30:37] veterans you know in like discords and
[30:39] stuff
[30:40] you can get feedback from them they can
[30:42] tell you sort of where
[30:44] you're making mistakes with your
[30:45] modeling um like
[30:47] i think reproducing a shape is quite
[30:49] easy
[30:50] reproducing a shape elegantly is where
[30:53] the sort of challenge in
[30:54] you know what i would call like
[30:55] production are you know we're not
[30:57] necessarily
[30:58] concept artists we're not sort of
[30:59] designing these forms ourselves
[31:01] but we're reproducing them with a set
[31:03] kind of criteria
[31:04] right you know if you think about it
[31:05] like pixel art if you're a pixel artist
[31:08] you're you're employing a bunch of
[31:09] techniques to you know
[31:11] reproduce something in that sort of
[31:13] style this is this is sort of similar
[31:15] if you're if you're interested in in
[31:17] video games specifically getting into
[31:18] being a
[31:19] 3d artist for video games definitely
[31:21] learning about the techniques
[31:23] that we employ is you know gonna
[31:26] get you a long way um or if you're
[31:29] interested in like you know
[31:30] cgi like film and stuff you know they
[31:33] use a whole
[31:34] another bag of tricks and you can kind
[31:37] of yeah
[31:38] yeah probably modeling for them looks
[31:39] like the concept you did before
[31:41] so for film it it like of course they
[31:44] need to kind of
[31:45] look that they don't use five million
[31:48] polygons for screw
[31:49] but uh they they they kind of like don't
[31:53] care too much for
[31:54] for like the um like the i would say the
[31:57] polygon quality
[31:58] you would say like like that's more for
[32:00] game art that we like
[32:02] you know have to look a lot how
[32:03] optimized it is and that you for example
[32:06] for this piece we have like 200 polygons
[32:08] and for films you could use i don't know
[32:10] a couple of thousand for for this piece
[32:12] alone here yeah
[32:14] real-time rendering means you know we're
[32:15] rendering the asset
[32:17] you know 60 120 you know
[32:20] however many frames per second so
[32:24] it's very specialist hardware doing a
[32:25] very sort of specialist task um
[32:28] for films it's like they chuck it on an
[32:30] offline render it just choke yeah i'd
[32:32] like to serve the farm
[32:33] it'll just be absolutely chugging away
[32:35] you know so they can
[32:36] they can render like you know an hour of
[32:39] footage over
[32:40] you know 20 computer weeks or whatever
[32:43] i'm not sure what the ratios are i'm not
[32:45] too up to date on the film industry
[32:47] specs but
[32:48] you know for games it's it's got to run
[32:51] you know it's got a run
[32:52] uh a frame rate that you know is
[32:54] sufficient for people to actually
[32:55] interact with it
[32:57] and and that's why when you're working
[32:59] on games you're you're really a
[33:01] technical modeler
[33:02] so a big part of our work is is not i
[33:05] would say art in the traditional sense
[33:07] of just
[33:08] doing nice things it's it's also a lot
[33:11] of work that
[33:12] that goes into learning the techniques
[33:15] and um yeah that's
[33:18] in for games especially you need to know
[33:22] how to do your stuff and then with the
[33:24] knowledge you have
[33:25] you can do art but go coming to a point
[33:28] where
[33:29] you you're so good that it's you you
[33:31] basically know it in and out and just
[33:33] can do content over and over um that's
[33:36] that's a hard way definitely
[33:39] yeah you've also got to consider the
[33:40] fact that the hard surface modeling like
[33:42] what we're doing here we're creating
[33:44] you know machined industrial things
[33:47] that's only a single facet of what
[33:49] you know it can mean to be a game artist
[33:51] you could be a an environment
[33:53] artist in which case you're making
[33:54] terrain you're making rocks you're
[33:56] making that kind of stuff and we do a
[33:57] bit of that on the props team
[33:58] um or you know you could be a character
[34:01] art you know studying anatomy learning
[34:03] about
[34:03] you know how muscles and faces and stuff
[34:06] work
[34:06] like character artists aren't real
[34:08] artists
[34:13] character concept artists aren't real
[34:15] artists
[34:16] we'll make a very specific character
[34:17] character concept artists in l.a
[34:20] aren't real artists we'll just i'm not i
[34:21] don't want to start with those guys
[34:23] just narrow it down right there we're
[34:25] good
[34:27] you're trying to drive a wedge between
[34:28] us jared and i'm not gonna let it happen
[34:31] between you i'm the one that's going to
[34:34] hear about it
[34:35] yeah um do you guys
[34:38] typically do high poly to low poly bakes
[34:42] even on unique assets like weapons props
[34:45] stuff like that or do you ever use like
[34:46] a mid poly no bake workflow
[34:48] yes that's all our work is so what
[34:50] jake's doing now is he's making like
[34:52] basically we use this thing called
[34:53] custom normals or weighted normals
[34:55] where essentially your big flat faces
[34:58] you point the normals
[34:59] straight and then you'll have like a
[35:01] single sort of 45 degree angle edge
[35:03] and then the normals will be kind of
[35:04] facing um you know towards the the
[35:07] larger surfaces and it'll
[35:09] fake a curve essentially so we don't
[35:11] bake any of our assets because
[35:13] you know i've got i don't know a
[35:16] thousand props and if each one had its
[35:17] own texture and you were like okay load
[35:19] all the props into this level it would
[35:20] just go
[35:22] and then it would die so yeah we we tend
[35:25] to just
[35:26] we only really bake unique assets when
[35:28] it's
[35:29] either something really special for
[35:30] squadron or
[35:32] um it's an organic asset that
[35:35] you wouldn't be able to throw enough
[35:36] triangles out to do it justice any
[35:38] anyway and it would end up cheaper just
[35:39] streaming in a texture um we didn't
[35:42] quite talk about uh
[35:44] palms uh before it's like the way we do
[35:46] details
[35:47] so um so poms is is a short
[35:50] form of parallax occlusion mapping and
[35:53] we use it for stuff like
[35:54] especially that goes in you can see this
[35:56] indents here and
[35:58] what we do is like we we kind of model a
[36:01] high poly
[36:01] that's the only case where we use it
[36:03] that's why i'm
[36:04] yeah i can do it now and um so you can
[36:08] see that they have like
[36:10] that that it really has perspective it
[36:12] really goes in and that is because it
[36:13] has a height map basically everything
[36:15] that's low is is black and everything
[36:17] that's
[36:17] high is is uh white so um
[36:21] yeah you can can even if you zoom in it
[36:23] still looks super cool
[36:25] because it's it's really giving
[36:29] yeah it's it's really giving the the
[36:31] certain perspective we need for screws
[36:33] and so on
[36:34] yeah palms are amazing when we started
[36:37] using those
[36:38] we started using those that that changed
[36:40] things overnight
[36:41] so it's basically putting a sticker on
[36:43] it with the detail and you can use the
[36:45] stickers as
[36:46] much as you want basically and it's it's
[36:48] kind of
[36:49] like baking a map but just for the
[36:52] little part where you want the detail to
[36:54] be right
[36:55] for like like screws and indents it's
[36:57] it's not worth to model them
[36:59] it's it's really easy for us to just oh
[37:02] yeah jake
[37:03] yeah there you go so yeah so so just to
[37:06] make sure folks
[37:07] are getting this here the screws and
[37:08] everything a lot of those intents
[37:09] they're not
[37:10] actually like modeled it's a sticker
[37:12] that goes on and then
[37:14] yeah it's looking good yeah and the
[37:17] beautiful thing about
[37:18] having it as a sticker is it's not sort
[37:20] of it's not
[37:21] um unique to that single you know set of
[37:24] pixels
[37:25] you can place it wherever you want on
[37:26] the weapon so you can have a bolt
[37:28] that is i don't know 64 by 64 pixels
[37:31] of texture memory and you slap it on
[37:33] like 90 your asset on like a thousand
[37:36] props
[37:37] you know you're streaming in that one
[37:38] set of um you know displacement maps
[37:41] slapping it on like you know hundreds of
[37:43] props
[37:44] and you you're just streaming that in
[37:46] you know what the second you stream one
[37:47] property and it'll stream in that
[37:48] texture
[37:49] and then you bring the rest in it's like
[37:50] eh you know that's fine we've already
[37:52] got that texture
[37:53] so performance wise it's it's real nice
[37:56] yeah and it can in in some cases it can
[37:59] be like
[38:00] uh i don't know like 200 kilobyte or
[38:02] something because it's a really small
[38:03] texture that you're using over and over
[38:05] again
[38:06] it's it just needs to be really these
[38:08] small pieces and
[38:09] like the traditional way of doing it in
[38:12] in a lot of
[38:13] games that are still done and have been
[38:15] done before
[38:16] is is doing basically this technique but
[38:18] for the whole weapon even
[38:19] in places where it technically doesn't
[38:21] make much sense to have it
[38:22] because on on a flat surface we just
[38:25] don't need it right
[38:26] we don't need to to tell the engine that
[38:29] a flat surface is flat because it's
[38:30] already flat
[38:32] yeah if that makes sense
[38:35] yeah i saw one person asking the chat
[38:37] how many lots to use
[38:39] on an asset um the answer is generally
[38:43] up to five um usually what we do the way
[38:46] our loads are calculated so for anyone
[38:48] doesn't know
[38:48] lod stands for level of detail it's
[38:50] essentially another version of the
[38:52] the match the the geometry that is
[38:56] cheaper you know has fewer vertices or
[38:58] fewer triangles
[39:01] we basically we take the the average
[39:04] size of the small triangles
[39:05] and we say when that is a certain amount
[39:07] of pixels on screen switch to the next
[39:09] one
[39:10] so it doesn't matter if your asset is
[39:11] the size of a space station
[39:13] or the size of a coffee cup once those
[39:16] small triangles are
[39:17] you know on in on the screen a certain
[39:19] amount of pixels it'll say okay use the
[39:21] next slot
[39:21] so it's a really lovely scalable system
[39:24] in a lot of game engines what you'll
[39:25] have is
[39:26] you'll dictate the distance that you
[39:29] transition
[39:29] transition to a lot like manually which
[39:32] obviously when you've got many many
[39:33] assets is a bit of a pain and it's just
[39:34] like a really elegant system
[39:38] here um usually what what i tend to do
[39:41] is
[39:42] um you've seen it before that that
[39:44] basically you have the
[39:45] the um parts of the weapon with the hard
[39:47] edges
[39:48] and and usually i leave that that parts
[39:51] with hard edges
[39:53] yeah that's it's a really low polygon
[39:55] area
[39:56] and and if you go to like a distance of
[39:59] like 20 meter you can't tell the the
[40:01] difference between
[40:02] between it so if you're zooming out
[40:06] the one without a lot is disappearing on
[40:08] the right but
[40:09] but with the lots you can't see a
[40:11] difference
[40:12] yeah um it's also worth noting that um
[40:16] someone asked we do we do our laws
[40:18] manually or do you do them
[40:19] computer generated it's kind of it
[40:22] depends on what the asset is uh
[40:24] more organic assets you can get with
[40:25] automation on weapons because they're so
[40:27] dense we tend to
[40:29] you know doing them by hand is quite
[40:30] challenging so we tend to do i think
[40:32] the first slot automatically and after
[40:34] that we do it manually is that right
[40:36] yeah that's that's how i tend to do it
[40:37] because um
[40:39] like it still has enough detail to
[40:42] to usually look really similar to the
[40:45] first one
[40:46] if you do it automatically but after
[40:47] that it the automatic the software
[40:50] kind of doesn't know anymore uh how to
[40:52] do it and this is like the lowest
[40:54] version
[40:54] where where it's just the basic shapes
[40:57] and
[40:58] it maybe doesn't look too good for you
[41:00] now but
[41:01] on a distance of like on it on a
[41:04] distance of like
[41:04] let's say 25 meter or like 50 meter you
[41:07] can't tell the difference
[41:09] with that lot it reminds me of halo on
[41:12] the original xbox
[41:15] yeah but but you need to realize we
[41:17] don't have like unique textures so we
[41:19] can't
[41:19] still make it have the texture on it and
[41:21] we all need to do everything with
[41:23] polygons
[41:24] and that looks like super like nintendo
[41:27] 64
[41:28] style oh even the characters have lots i
[41:32] haven't seen those
[41:35] yeah i know we are exploring um we are
[41:37] exploring more automated workflows for
[41:39] um for lots using like houdini um
[41:43] that's quite exciting it's i'm a bit of
[41:46] a
[41:47] i'm a bit of an automated skeptic
[41:49] personally i think that human beings
[41:51] for i i think for the foreseeable future
[41:53] will be better at it than computers
[41:56] obviously it's not it takes a long time
[41:59] and it can be
[42:01] it can be automated but the results
[42:03] often are not as good
[42:05] so you'll have more no like in in some
[42:06] games you know you have more
[42:08] more obvious popping you know when
[42:10] you're moving away from an asset you
[42:12] might see it like
[42:12] deform wildly we try our best to make
[42:16] our odds
[42:17] unnoticeable and you know there there's
[42:20] a lot to keep track of
[42:23] yeah nice one did you steal that joke
[42:27] from the chat
[42:27] yes i stole it from don steeler i always
[42:29] steal my money you're not getting away
[42:31] from me man no
[42:32] no no no i call i've called it out
[42:33] before dawn steelers in chat every
[42:35] every friday just to provide me with the
[42:37] worst puns possible and i steal them
[42:39] freely nice
[42:43] good good steeler jared i think
[42:47] can show off the uh wear and dirt as
[42:49] well now because we've done quite a lot
[42:50] of modeling
[42:52] so we can show off yeah yeah we've got
[42:54] like 15 minutes left jake
[42:56] so um i thought we were gonna make a
[42:58] weapon skin as well but that's gonna
[43:00] have to wait for another one isn't it
[43:02] all right oh yeah if time runs out we
[43:04] can do it again of course
[43:06] yeah weapon skin i really wanted jake to
[43:08] make like a leopard print
[43:10] weapon skin or something yeah i i once i
[43:13] made one
[43:14] that had like this leopard skin style
[43:17] in pink and white and it still didn't
[43:20] make the way into its game
[43:21] i'm really disappointed i need to talk
[43:24] to
[43:25] i don't know producers why why this
[43:28] didn't happen yet
[43:30] yeah just uh just sneak it in one day
[43:35] yeah so dynamic won't that's what jake's
[43:37] kind of showing off now that's a big
[43:38] part of our sort of
[43:39] workflow this is one of the times we do
[43:42] use
[43:42] a unique texture per asset on weapons we
[43:45] use unique
[43:45] for a unique texture to generate this um
[43:49] wear and dirt
[43:49] essentially so the plan is in the future
[43:52] for this to um be a consequence of
[43:55] you know your i can't say when obviously
[43:59] but
[43:59] um you know your handling of the weapon
[44:01] will affect its wear value essentially
[44:03] um so to what degree i don't know i'd
[44:06] you know but for now it's
[44:07] something that we have a slider that we
[44:09] can you know scale um
[44:11] essentially we have a
[44:14] texture for that where we have it's
[44:16] split into the three channels of course
[44:17] red green and blue that's how
[44:18] um computers read textures um how they
[44:22] display photos and stuff they have those
[44:23] channels
[44:24] um we used a red channel for wear the
[44:26] green channel for dirt and the blue
[44:28] channels for something called ambient
[44:29] seclusion
[44:30] which um you can kind of summarize as
[44:33] when two things are close together they
[44:35] tend to block out the light
[44:36] you know so it's essentially just a way
[44:39] of very cheaply kind of faking that
[44:40] effect
[44:41] um to kind of darken your cavities and
[44:44] stuff so jake's been working on some
[44:46] tools to kind of
[44:47] help automate the process of generating
[44:50] um these wear and dirt masks
[44:54] yeah so um
[44:57] using a blend map that corey was just
[44:59] explaining at first
[45:00] i try to make it within substance
[45:02] designer and then i've got like an auto
[45:04] generated one here and then i was
[45:06] thinking like we could bring it into
[45:08] substance painter have very specific
[45:11] parameters that we could play around
[45:12] with
[45:13] but as i was like throwing on different
[45:15] weapons
[45:16] i found that if i just make it in
[45:19] painter and then just bring them into
[45:20] designer to export
[45:22] it's a lot a lot simpler and often the
[45:24] simpler
[45:25] um answer is the best one and this way
[45:28] it gives us a lot more
[45:29] creative freedom so with these channels
[45:32] here
[45:33] i've tried to separate them out into red
[45:35] green and blue but
[45:37] with the red channel that's gonna be the
[45:39] edgeware
[45:40] so if i look at the weapon here
[45:44] see that's like just the edges coming in
[45:47] there that kind of silver
[45:49] and then with the blue channel i've
[45:51] tried to get this kind of peeling
[45:54] uh metal effect so when you peel it off
[45:57] you kind of get this different material
[45:59] that comes in around it
[46:00] just makes it feel a bit more grounded
[46:02] as if the material is peeling off before
[46:04] it gets to the layer underneath and then
[46:08] with the green channel i've got
[46:09] kind of a dirt generation
[46:13] which works pretty well for just
[46:14] creating kind of generic um
[46:17] grime and dirt but a big question about
[46:19] getting this to look good was like
[46:21] how do we want our weapons to wear like
[46:24] do we want to add rust
[46:26] not really because let's say you've left
[46:29] a weapon out in
[46:30] like a planet that's like a desert
[46:33] or something and you find it after like
[46:36] um
[46:37] months of playing and
[46:40] it's completely rusty on a planet that
[46:42] has no rain
[46:43] it doesn't quite make any sense so we've
[46:45] got to try and get it to look
[46:47] generally grimy and beaten up like it's
[46:50] had a hard life but it's not necessarily
[46:52] like going to be seized up it's just
[46:53] kind of
[46:54] a bit be in you know over lubricated
[46:57] kind of you know nasty but not you know
[47:01] you know that's also something we talked
[47:03] about that
[47:04] we maybe in the future can like
[47:07] depending on the planet you're on you
[47:08] have different kinds of wear
[47:10] and dirt and um that it's like if if
[47:13] it's like a
[47:13] planet where you have a lot of rain then
[47:16] the wear
[47:16] when it's now kind of a metal or
[47:18] compound that you have under it
[47:20] it can maybe change to a more rusty
[47:22] version of it
[47:23] so it kind of depends for now
[47:27] this needs to be like usable
[47:30] on basically every planet we have but in
[47:33] the future the system
[47:34] might change to to more complicated
[47:37] system
[47:38] we'll see we'll see we'll see about it
[47:42] so i want this is one of those times
[47:44] where i need to jump in there and be
[47:45] like you know
[47:46] you guys are you guys are working on the
[47:48] art assets uh
[47:49] to support the future development of a
[47:51] system that will be created by engineers
[47:53] and programmers
[47:54] and systems designers so what can and
[47:57] cannot be done and what will and won't
[47:59] be done will be the preview of other
[48:01] folks
[48:02] but you are here building making sure
[48:03] that all of your stuff is ready
[48:05] and willing and able for when that time
[48:08] comes
[48:10] which is which is wonderful yeah
[48:15] i saw someone ask about whether the
[48:18] concepts artists are more responsible
[48:19] for the
[48:20] functionality of a weapon or whether
[48:22] it's the developers or skies
[48:24] um generally the the concept artists
[48:27] will you know have a
[48:29] pretty decent understanding of how the
[48:31] weapon operates they will be
[48:32] coordinating with
[48:34] um you know designers and stuff for the
[48:36] pre-production process
[48:37] like how do we want this weapon to
[48:39] behave what kind of features does it
[48:40] have
[48:41] all of that stuff kind of gets kept in
[48:42] mind when a weapon's being you know
[48:44] in the pre-production stage so when we
[48:47] receive an asset
[48:48] the challenges we face largely are okay
[48:51] we have this
[48:51] idea for a weapon it does x y and z it
[48:54] has these functions
[48:55] how do we make that work with dm game
[48:56] systems you know how does it work with
[48:58] the character rig
[49:00] um how does it look scale and proportion
[49:02] wise and so on you know we kind of
[49:04] a lot of the legwork is done not
[49:06] necessarily by the concept artists
[49:07] themselves but in the pre-production
[49:08] stage
[49:09] there's a lot of discussion about the
[49:11] functionality of a weapon
[49:12] yeah and then we're kind of like okay
[49:15] how do we how do we
[49:16] realize the dream you know this stream
[49:18] like of the concept artist
[49:20] and you know design and and so on
[49:24] obviously we're just one small facet of
[49:26] the weapons pipeline
[49:27] um you know weapons you know you have
[49:30] audio vfx
[49:31] animations um you know
[49:35] the actual gameplay systems um
[49:38] you know in terms of weapon damage and
[49:40] balance and stuff we just made the thing
[49:42] itself
[49:42] you know what you know we don't
[49:43] necessarily we have a lot of
[49:45] you know talented and you know people
[49:49] with
[49:49] many many different skill sets kind of
[49:51] who also contributes like
[49:53] weapons as a feature we're kind of more
[49:56] we're a part of weapons content but
[49:57] weapons feature contains a lot more
[49:59] um developers so we're kind of you know
[50:03] we're kind of what's
[50:04] we're downstream so to speak of some
[50:06] departments
[50:07] you know but we're also there's also
[50:09] people who depend on our work
[50:10] like animators um you know
[50:13] audio and vfx they kind of need to see
[50:16] the asset in game first
[50:18] right you know so it's it's it's like a
[50:20] multi-disc
[50:21] multi-disciplinary you know sort of
[50:24] thing
[50:25] a there's a pipeline to it like just
[50:27] about anything else
[50:28] yeah is that another one for the star
[50:30] citizen drinking game
[50:33] nah i don't think no maybe not that one
[50:36] i would say
[50:37] what is it it's fidelity it's immersion
[50:40] it's iterative uh scalable
[50:44] that's that's getting there i don't
[50:45] think that's there yeah maybe not
[50:48] all right let's make that word bespoke
[50:52] bespoke isn't the uh sony chats like
[50:54] bespoke bespoke's not the uh star
[50:55] citizen that's that's the that's the
[50:57] jared drinking game i'm the one that
[51:00] abuses that word
[51:02] um uh what it's one of the chats we're
[51:06] wrapping up here uh
[51:07] are there any easter eggs on the weapons
[51:09] you guys have made that you'd like to
[51:11] to share
[51:16] i've put my um sort of
[51:19] name my abbreviated name in a few serial
[51:21] numbers but that's pretty much the
[51:23] most fun i've had i'm very pedestrian
[51:25] when it comes to
[51:26] um some people have snuck in uh
[51:30] slightly more memes and uh things onto
[51:32] decals and stuff
[51:34] we try and um we don't want people to
[51:37] see something that takes them out of the
[51:39] game
[51:39] because you know if you if you see a
[51:41] decal that's got you know
[51:43] some meme in it it's not you know you
[51:45] know someone you know a developer has
[51:46] put that in right
[51:47] so it's kind of like you've got to be
[51:50] careful about your easter eggs that are
[51:51] not too immersion breaking i think yes
[51:53] and also you know if someone sees them
[51:54] and it's
[51:55] you know a naughty easter egg you might
[51:57] get in trouble so
[51:59] yeah you also have to be aware not to
[52:00] send folks on
[52:02] uh uh random goose chases and stuff
[52:05] because they think it's a
[52:06] clue or something and some arg game and
[52:09] it's actually just
[52:10] the locker combination to your day that
[52:13] you had in high school or something
[52:14] yeah yeah it doesn't mean anything
[52:17] sometimes serial numbers are
[52:18] are just really really serial numbers
[52:21] and don't have a meeting
[52:22] meaning or something it's it's usually
[52:24] they don't have a meeting
[52:25] sometimes it's my my bank account number
[52:30] corey i would think anybody else was
[52:31] joking but with you i'm not entirely
[52:33] certain
[52:34] yeah if you know yeah you can clean that
[52:37] one out if you find it
[52:39] that's a joke 12 euros can be yours
[52:44] yeah you could have one whole money
[52:48] uh for modular weapon parts like uh
[52:52] scopes and suppressors and stuff uh is
[52:54] there a version
[52:55] for for each uh is there a version of
[52:58] each weapon for every configuration of
[52:59] modules or are the models
[53:01] in game uh actually modular wow
[53:04] this this question goes around circles
[53:07] yeah
[53:08] yeah it's um so we have a a kind of an
[53:11] item port system
[53:12] so um we we place uh
[53:15] helpers on on the weapons so um
[53:20] you can yeah in this case you can
[53:21] customize it and
[53:23] um you have the points there the
[53:25] attachment points where you can actually
[53:27] put a different model so you can put a
[53:30] laser pointer on it
[53:31] uh and or like a flashlight
[53:34] and uh yeah at the front and
[53:38] not every weapon supports suppressors or
[53:41] muscle breaks but in this case it works
[53:44] because it's a ballistic
[53:45] weapon but some weapons just are not
[53:48] really
[53:49] just too big or are not the kind of
[53:51] weapons where you put
[53:52] where you would put a silencer on so
[53:56] uh algante uh yes you did see what you
[53:59] see and you'll learn more about it
[54:00] later in isc this quarter
[54:04] someone asks what is your favorite hard
[54:05] surface modelling technique and why is
[54:07] it booleans
[54:08] i think mine's actually splines i'm
[54:11] known for my splines so everyone
[54:12] everyone loves splines
[54:14] and there's definitely blue booleans
[54:18] brilliance i just like seeing it
[54:22] great uh recently
[54:25] uh we saw the inclusion of the lightning
[54:27] bolt company uh with their sniper rifles
[54:29] and pistols
[54:30] uh what were the different challenges
[54:32] that you faced when making those
[54:34] you're very lucky because you have the
[54:35] two guys who made the pistol sniper
[54:38] rifle right here
[54:39] oh yeah um oh yeah
[54:42] [Music]
[54:43] yeah it was
[54:46] one of the more complicated weapons
[54:48] because it's um
[54:50] so for us if it's a static weapon we
[54:52] just need to model it
[54:54] it's it's always you know
[54:56] straightforward we we know what we're
[54:58] doing
[54:58] just get the weapon
[55:01] and uh and do it right but in this case
[55:04] a lot of stuff is moving around it's
[55:06] unfolding
[55:07] you have like moving stuff rotating
[55:09] stuff
[55:11] all the little parts at the front the
[55:14] round stuff is actually moving
[55:17] and or is rotating out so
[55:22] so yeah i would say that the more um
[55:26] animates about a weapon the harder it is
[55:28] for us to do
[55:30] and the more we need to consider uh
[55:33] actually
[55:33] like how stuff behaves and and if it
[55:35] like intersects like i said earlier
[55:38] and yeah do you guys have a favorite
[55:41] weapon that you've worked on
[55:45] i've only made one so a couple of
[55:48] squadron stuff
[55:49] i don't know if i can talk about that
[55:50] [Laughter]
[55:54] mine is actually the shotgun um fairly
[55:56] new to the weapon pipeline
[55:57] and i've made that pistol and that smg
[56:00] but the shotgun's the third one i've
[56:02] made
[56:02] and the fourth being this sniper rifle
[56:05] but
[56:06] this one was the most fun because i
[56:07] think i
[56:09] had a bit more control over it because
[56:11] there were a lot of things that did have
[56:12] to change
[56:13] thanks to things clipping with the
[56:16] animation
[56:16] so for me that's why it was more fun
[56:20] that's a great looking shotgun it did
[56:24] i'm trying to think of what it reminds
[56:25] me of but it it
[56:27] it's definitely sparking a familiarity
[56:29] with me that makes me
[56:31] appreciate it a little bit more oh yeah
[56:34] man thank you
[56:36] i just can't right yeah i just the
[56:37] entire show i've been trying to figure
[56:38] out what it reminds me of that that
[56:40] makes me like it so much
[56:41] and i can't think of it
[56:45] maybe it is a tommy gun maybe maybe it's
[56:47] a 30th century version of atomic
[56:48] although that would be a machine gun
[56:50] not a shotgun but i don't i don't think
[56:52] it's a tommy gun from the chat
[56:54] uh let's see let's see if we have any
[56:56] more questions before we let you go for
[56:57] today
[56:58] um let's see what else do we got here
[57:03] someone said aa-12 which is another drum
[57:05] fed
[57:06] shotgun
[57:10] lots of questions of course for the show
[57:12] but uh folks remember
[57:14] these are artists so if you're asking
[57:16] about
[57:17] uh bugs or or connection issues or some
[57:20] these would not be the people who could
[57:21] speak to that
[57:24] um do you do you ever soften uh soften
[57:26] or harden the normals of the geometry on
[57:28] a on a per need basis or
[57:30] or do you have like a set of guidelines
[57:33] for
[57:33] for the normals on the vertices um so
[57:36] usually
[57:37] what i tend to do is i try to have
[57:40] everything soft and
[57:41] um have like on all hard edges i have
[57:44] the
[57:45] um a chamfer or a bevel
[57:49] so um yeah that's how i usually work
[57:52] that that i don't leave a lot of hard
[57:53] edges but of course sometimes you need
[57:55] to do it for
[57:56] certain reasons and then you can just um
[57:59] select all the edges
[58:00] harden them and and just leave them in
[58:03] the state
[58:04] yeah yeah in edge case for having
[58:08] um a hard edge amongst custom normals is
[58:10] when you've got like a super third and
[58:12] face
[58:13] or actually i can actually show with a
[58:14] shotgun um
[58:16] within here because this is super thin i
[58:19] haven't actually beveled the edge
[58:20] on the inside because it doesn't need to
[58:22] be it's just a bit of spit like
[58:25] where we can save some memory nice jared
[58:29] yeah so uh we're we're about at the end
[58:32] so
[58:32] why don't you go ahead and stop the
[58:33] screen share
[58:36] and we'll uh wrap things up there i
[58:38] think we're on the ranks yep
[58:40] i'm on the wrong screen now i don't know
[58:41] we're right so
[58:43] uh yeah i was just i was showing you
[58:45] this this is my weapon
[58:48] i'm not uh toast doesn't let me fire it
[58:51] in the house though so i can't show it
[58:52] to you
[58:52] i can't i can't show it uh not after the
[58:55] eye incident
[58:56] sounds very expensive trip to the
[58:58] doctors hey
[59:00] eyebrows grow back yeah the eye the eye
[59:02] patch eyebrows grow back
[59:04] so guys thank you so much for taking
[59:07] time out of the end of your week to to
[59:08] hang out with us
[59:10] and uh you know show a bit of your
[59:11] process um
[59:13] we will we will absolutely bring you
[59:15] back at some point to do the weapon skin
[59:17] thing uh
[59:18] there's always there's always oh that's
[59:20] right toast is in the chat he's like i'm
[59:21] not in the house
[59:22] go ahead um so as we are want to do
[59:26] uh we are not we are going to throw the
[59:28] raid over to a star citizen streamer
[59:30] who is broadcasting right now uh the
[59:32] streamer today
[59:34] uh is an oldie but a goodie it is dj
[59:36] knight
[59:37] uh dj knight who uh once once once took
[59:40] me to a
[59:41] an all-american pizza place in cologne
[59:44] germany
[59:45] uh that was just dominoes
[59:48] it was just dominoes and we got all
[59:50] excited we were like wow all american
[59:52] new york pizza place in the middle of
[59:53] germany yeah let's check it out
[59:55] and i was it was just dominoes can you
[59:57] say domino's first david
[59:59] yeah so so guys we're starting up the
[1:00:01] raid so you can opt in right now
[1:00:03] uh when you're when you're uh when you
[1:00:05] get there
[1:00:06] tell them uh jared says what's up with
[1:00:09] german dominoes dude
[1:00:11] uh for star citizen live i'm jared i'm
[1:00:14] jared that's jake
[1:00:15] that's david that's corey and we'll see
[1:00:18] you next week everybody take care
[1:00:20] love you bye
[1:00:49] you

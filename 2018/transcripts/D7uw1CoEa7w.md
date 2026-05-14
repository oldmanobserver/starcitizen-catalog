# Star Citizen: Reverse the Verse LIVE - Prototyping Gameplay

**Video:** https://www.youtube.com/watch?v=D7uw1CoEa7w
**Date:** 2018-09-14
**Duration:** 51:31

## Transcript

[00:05] [Music]
[00:10] hi everybody welcome to reverse the
[00:13] verse live game dev edition we're back
[00:15] in LA
[00:16] I'm your host Content Manager for global
[00:19] video production Jared Huckaby and we're
[00:21] doing something we haven't done in a
[00:22] while how long has it been since you've
[00:24] been here on our teammates has it been
[00:27] like maybe three or four months since
[00:30] we've done it since we've had you here
[00:32] we've prototyped gameplay that was I
[00:35] think that was that was over a year ago
[00:36] I was when the show was a happy hour
[00:38] happy argument we have kx4 no systems
[00:42] designer here in our Los Angeles studio
[00:43] and every once in a while when he can
[00:46] spare a little bit of time from from his
[00:50] busy schedule we like to come in here
[00:52] and do a different type of art TV where
[00:55] we kind of explore the process of game
[00:57] development now the star citizen as a
[01:00] whole
[01:01] is probably your single best resource
[01:04] for behind the scenes of how game
[01:05] development works between a TV and
[01:08] calling all Deb's and RTB and happy hour
[01:11] and 10 for the chairman and bug smashers
[01:13] and lawmakers like that we like to joke
[01:16] that by the time all is said and done if
[01:18] you've been watching all the star
[01:19] citizen's content from beginning to end
[01:22] you'll have a 300 level class degree you
[01:25] know in game development this is one of
[01:28] those types of shows where we are going
[01:29] to well why don't you tell us what we're
[01:31] gonna do today kids well I'm going to be
[01:34] prototyping out some gameplay I'll be
[01:37] doing some stuff that isn't really set
[01:41] down in terms of what what we're looking
[01:43] for so we have this notion of research
[01:48] in the game and there are some designs
[01:51] for how that would work and today I'm
[01:55] going to explore in prototype form one
[01:59] of one of my designs for it
[02:01] this is all very tentative of course and
[02:04] not indicative of what we're gonna have
[02:07] but it's more the fact that like I've
[02:10] been thinking about what the the
[02:12] gameplay for that could be and wanted to
[02:16] play with it wanted to try it and so why
[02:19] not prototype it the easiest way to know
[02:21] now the backers who follow the project
[02:23] are familiar with concept art for ships
[02:26] and you know you come up with a concept
[02:28] and then when it comes time to actually
[02:29] build it out sometimes the ship can
[02:31] change pretty drastically between
[02:32] concept and reality even in subscribers
[02:36] who have access to subscriber vault can
[02:38] even see different concepts for the same
[02:41] ship drastically different concepts in
[02:44] much the same way designers concept
[02:48] different game systems that you know
[02:50] maybe maybe research will work this way
[02:53] and then maybe it maybe a difference is
[02:54] I know maybe research will work this way
[02:56] yeah so for the ship design a lot of the
[02:59] concept level design happens in white
[03:01] box and well let's put it into engine
[03:04] and actually walk around the place to
[03:05] see what it feels like this actually is
[03:08] probably better described as design
[03:11] concept because even though I'm making a
[03:15] prototype but it's I don't have a fixed
[03:18] design that I'm working from what kind
[03:19] of making it up as I go and so we're
[03:23] gonna see what we end up with and
[03:25] perhaps your most famous version of this
[03:27] was a grabby hands yeah back when yeah
[03:31] that led to that was the beginnings of
[03:34] what would become eventually the
[03:35] interactive system which looks nothing
[03:37] like the thing that was exactly
[03:38] originally but gave us a place to try
[03:43] out a bunch of ideas see the things that
[03:45] we wanted to achieve see the ways that
[03:47] those things conflict with each other
[03:48] given like actual use cases and start to
[03:53] have a better understanding when we go
[03:54] to actually make the full finalized
[03:56] design of what is the problem we're
[03:58] solving mention so while the DNA of
[04:01] grabbing hands can be seen in today's
[04:03] interaction system the one one look of
[04:07] it is obviously very different what
[04:08] we're going to be doing today is is a
[04:10] similar prototyping of a potential
[04:12] research gameplay it's it's not to say
[04:14] that this
[04:15] is what it will be when it makes in the
[04:16] game but who knows that some aspect of
[04:18] this may in may influence may it may
[04:21] impact whatever the eventual design is
[04:23] it may at the very least serve as
[04:25] inspiration for things we do or don't
[04:27] want to see this the types of
[04:30] interactions that we want to see the
[04:32] player doing or not doing and it's also
[04:35] actually kind of a testbed for some new
[04:38] of the new UI attack that we had that
[04:41] lets me make screens and alter those
[04:44] much much faster than before
[04:46] so we'll do that before we get started
[04:49] any updates on javelin basketball was
[04:53] that the last one we had you on yeah
[04:54] that's been asked the community we've
[04:57] had caters on for a couple of these was
[04:58] javelin basketball the last one some one
[05:01] of you guys can I'm sure that YouTube I
[05:03] looked into into doing the the air
[05:05] hockey one was right I couldn't spare
[05:07] enough I know we did try it we did try
[05:09] to do one of these four air hockey for a
[05:10] while then we forgot about that sometime
[05:14] to come back to yeah it's amazing for
[05:16] all of these that we do for every you
[05:19] know every week is an RIT v52a years
[05:21] several 50 about there are for all 50
[05:25] that you we actually do there are
[05:26] probably another 50 that we attempt to
[05:28] do that we attempt to prototype that we
[05:30] tend to get approve that we attempt to
[05:31] see if we can make work and efforts to
[05:33] the light of day that air hockey was one
[05:35] of them all right so let's go to the
[05:37] lumberyard and we can see our lumber and
[05:40] we're here in our in our format made
[05:42] famous by bug smashers yeah hi Mark
[05:44] hanging out in there
[05:46] we are the bug smashers today so you're
[05:48] in the Arab League hangar lots of
[05:50] reflections Angelo is that the the glass
[05:52] sheet are going crazy yeah I this is
[05:55] this is just a big computer so I'm not a
[05:58] hundred percent sure the state of this
[05:59] yeah well look at this wall this wall is
[06:02] nice okay so I have started this a
[06:04] little bit because there's a lot to do
[06:08] for this idea just as a as a basic
[06:11] overview of what I'm going to approach
[06:14] for this is the idea is that you'll have
[06:18] some artifact or sample or thing that
[06:22] you bring over to your research station
[06:24] and you'll put it in the box and from
[06:27] there you will begin the process of
[06:29] probing and performing tests on it
[06:32] attempting to find out the its secrets
[06:35] so to sort of in as those secrets is
[06:40] basically a form of like mastermind
[06:43] as near the classic game of like well
[06:45] I'm going to try working rings yeah and
[06:48] and find out how close I am and sort of
[06:52] try to iterate my way towards a solution
[06:54] I have referred guess who that that's
[06:57] right in school I don't actually know
[06:58] that one I'll try out general guess who
[07:00] it do you have red hair
[07:03] no and you put down everybody that does
[07:05] the heads right oh it's a person wearing
[07:08] glasses question yes if I get but do I
[07:10] have that wrong was the name of the game
[07:12] not guess who I don't remember all right
[07:15] so to assist in this I wanted to also
[07:20] like that's not the it's not the end of
[07:22] the design I wanted to have it so that
[07:24] we made it it's done here yeah once you
[07:27] once you've determined what the secret
[07:30] code is that you then need to figure out
[07:33] how to achieve it I like puzzles that
[07:38] have multiple tiers to the interaction
[07:40] so this is an example of one of these so
[07:49] we have four inputs here that get
[07:52] shuffled as indicated by the lines and
[07:55] one of them gets overwritten by
[07:58] in this the color white and I'm gonna
[08:02] represent the different values of the
[08:05] sequence with various colors ultimately
[08:07] we would also use various shapes colors
[08:11] are easiest to iterate through because I
[08:14] don't need to actually make the shapes
[08:15] so I'll use that for now did you make
[08:19] that circle and square I did it's very
[08:21] impressive I know thank you I've got any
[08:25] formal 3d art training actually a little
[08:28] bit actually if you do have that
[08:30] sculpting the sculpting clay and stuff
[08:32] on your best I see you poppin so what
[08:35] I'm gonna be making right now will take
[08:38] you'll select sequence of four and they
[08:43] will alter the previous state and and
[08:46] iterate forwards so it looks like this
[08:51] one ends up with white white always
[08:57] actually so that this is a this will end
[09:00] up with yeah all weights so I'll have to
[09:03] create a results screen and a control
[09:07] screen in order to alter the state of
[09:09] these I don't have the other the other
[09:17] test types currently so I I can take
[09:22] input as to what that should be
[09:26] so for the results screen so this is
[09:33] data for here this is data Forge and
[09:35] talked a lot about data for drove the
[09:36] year um actually I let me bring in the
[09:40] the control screen which I have started
[09:45] this a maybe was asking why did you
[09:47] start ahead of Titans because we only
[09:48] have an hour yeah this is very few game
[09:50] systems can be done also the tools that
[09:52] I'm using are new and so they're not as
[09:56] fast as they could be and so there's a
[09:59] lot of just busy working in terms of the
[10:02] way that I need to solve it it's all the
[10:04] problem now that's right you're actually
[10:06] talking right before we started the show
[10:07] that one of the tools that you need it
[10:09] was in the absolute latest build
[10:12] and this build is from yesterday so it
[10:14] doesn't have yeah the thing that you're
[10:16] looking for it so I've made a thing
[10:17] where you can select which one it is and
[10:21] you'll see very quickly why I started
[10:23] this ahead of time because I've only
[10:25] done the selectable colors for this and
[10:28] I forgot the Browns we'll have to add
[10:29] that and I'll show you what that process
[10:34] looks like let me see one of the nice
[10:39] things that we have I think we mentioned
[10:41] it recently was the a live update
[10:48] feature which I will go ahead and cover
[10:53] the screen with so hold on you make a
[10:56] change in data Forge and it's updated
[10:58] live inside the client yeah so I need to
[11:04] get the canvas entities put down in UI
[11:13] building blocks I've made the research
[11:17] control screen so this is that thing and
[11:25] [Music]
[11:29] this is each of those and I have a
[11:32] hundred different things happening on it
[11:36] like yeah so you may order these before
[11:39] we started the show yeah there is just a
[11:42] certain amount of wrote input required I
[11:46] didn't want to spend the whole time say
[11:48] you're just doing data entry and this is
[11:51] the data entry stream yeah so as an
[11:55] example I would and we don't have the
[12:02] ability to copy and paste in bulk right
[12:05] now
[12:06] so this is what that data entry looks
[12:11] like so it's gonna be as exciting as
[12:15] this although I mean frankly that would
[12:19] have taken a lot longer it's a
[12:22] I had to go through flash to achieve
[12:25] even as long as this will take this is
[12:29] drastically improved to how it's been
[12:36] and then I'll just do that real quick I
[12:41] said quick but that was a lie it's gonna
[12:44] take a second so part of the idea with
[12:52] doing it this way is that I want to be
[12:54] able to I want to be able to tie
[12:59] research in with the game at large if
[13:04] that makes sense like this shouldn't be
[13:06] its own corner of everything should tie
[13:10] into the actual state of the universe
[13:12] and so the idea for that is as mentioned
[13:19] like you start off with samples that you
[13:22] might get from planetside or derelicts
[13:25] or things like that and that's let's ask
[13:30] chat what what what's sample what are we
[13:33] what are we going to be researching
[13:35] today what did we find on an alien
[13:37] planet today we don't have votes set up
[13:40] like we like we have in the past I just
[13:41] want to see some so you see some options
[13:43] in twitch chat and I will pick out
[13:46] whichever one tickles my fancy as it
[13:48] were what are we what did we find on an
[13:50] alien planet
[13:56] what
[14:01] so that's the the what they're saying
[14:13] well it's not number one it might be
[14:17] number two just put it that way
[14:21] so yeah guy yeah we're examining some
[14:25] some some alien alien alien poop hmm
[14:28] thank you twitch chat perfect you came
[14:31] through and just as we knew you would
[14:33] before I go on with that before I fill
[14:37] out those two it's not super useful
[14:39] until I can actually change them all the
[14:43] brown yeah so the way that I will do
[14:47] that will be to use the interaction
[14:53] state machine so love the interaction
[14:56] state machine in this is the Select
[15:04] screen that's correct in here we've got
[15:08] the okay no this is wrong yeah control
[15:18] screen why does why did I name it select
[15:20] screen if that's not what that does oh I
[15:23] know what that is
[15:24] what are those days yeah so in addition
[15:29] to the idea of picking out like like
[15:39] doing the puzzle I really like what was
[15:44] done with mining and I like the whole
[15:47] aspect of like searching for the the
[15:51] valuable bit of the things and so one of
[15:57] the one idea that I'll prototype if we
[16:00] have time is to start off with an array
[16:03] of maybe 10 15 cells which could be
[16:10] damaged and unaccessible
[16:12] if the if the sample is compromised and
[16:16] those would be the thing that you're
[16:18] studying so you select one of those and
[16:21] that will create the puzzle that you can
[16:23] then solve to get the payout and to have
[16:28] a sort of sliding scale of the value of
[16:31] it so there will be physicians of high
[16:36] value in it and if you find a high value
[16:39] one you can you'll know that one of the
[16:41] the nearby cells are likely of high
[16:43] value it will interpolate between them
[16:47] high value booth yeah well high value
[16:49] information about this book oh yeah
[16:51] you'll everything about you know where
[16:53] they've been this is a creature that
[16:54] eats everything it's just nothing so it
[16:58] could be all kinds of interesting things
[16:59] inside inside this poop and to my
[17:06] superiors who I sold the concept of the
[17:09] show to and said yeah yeah I mean yes we
[17:12] are doing a show about alien Puna yeah
[17:14] that's just how forward to your meeting
[17:18] this happened notice okay so we are
[17:21] about a third of the way through the
[17:22] show by the way you sure that's why I
[17:26] was so worried about this um so for
[17:29] example we'll need to do check one read
[17:35] this will be able I don't yeah we're not
[17:41] gonna make it all the way through but
[17:44] okay one of the reasons I like to do you
[17:46] keep working with dr. Singh one of the
[17:48] reasons I like doing shows like this is
[17:49] because this is the kind of thing that
[17:52] and this isn't a throw shade it if ei or
[17:55] Activision or anybody else does this
[17:56] show that no other game developer would
[17:59] ever do they did it's like I said when
[18:01] we make the joke about all of our
[18:03] programming you know if you watch
[18:05] everything from start to finish you know
[18:06] you have a low-level degree in game
[18:08] development it's I'm only saying that
[18:09] partially and jest one of my jobs here
[18:13] is to expose every aspect of game
[18:15] development and designers are one of the
[18:19] it's I think everybody wants to be a
[18:21] game designer everybody what says I want
[18:23] I want to make
[18:23] I want to design games but very few
[18:26] people have any idea what's actually
[18:27] involved in that so when we get a chance
[18:29] to do a show like this even though some
[18:31] aspects of it are perhaps a little more
[18:34] tedious than others with the data entry
[18:36] and stuff it's a those are one of the
[18:37] things I wanted to want to expose I
[18:39] enjoy exposing so what I'm doing now
[18:43] the way that the interaction state
[18:45] machine works is when you perform an
[18:49] interaction you will enter the new state
[18:51] which will determine which interactions
[18:53] you can actually trigger did that twice
[18:59] and
[19:07] so I'm setting up these interactions as
[19:10] being valid when we're in test track one
[19:17] I think I need to do one for each
[19:24] actually because that will still trigger
[19:28] the same in the other ones we'll just
[19:34] treat this as easy as this and maybe
[19:36] show us one
[19:37] yeah we'll all have to do that so to
[19:42] start with both of these have
[19:44] interaction links which exists here
[19:49] interaction links and I'm gonna select
[19:52] that and on trigger red I need to give
[19:59] it an interaction to set red so that is
[20:06] this and here we have the default state
[20:15] currently is white I need to create red
[20:19] I don't actually have that so that
[20:23] exists in the control screen result
[20:30] screen and touch me
[20:31] let's go find the test screen in the
[20:33] navigator and I'm gonna use inheritance
[20:37] this is the only way that this is even
[20:39] vaguely possible to make just
[20:44] essentially a duplicate of this and I'll
[20:50] make some small changes to it so I'm
[20:54] gonna switch
[20:56] I should trigger red and then in here
[21:15] oops in white I'll add an interaction
[21:25] but I haven't added yet because it's
[21:29] hard to talk well I don't normally talk
[21:30] while I do this no it's a it's one of
[21:34] the things that are most impressive
[21:35] about game streamers you know people who
[21:37] do stream on Twitch professionally and
[21:41] as you know it's the ability to talk and
[21:44] do something at the same time as
[21:48] undervalued
[21:49] in so many ways it's it's the toughest
[21:53] are TVs for me to do are the ones where
[21:54] we have to play the game and talk that's
[21:56] why I always bring in like a little ice
[21:57] bomb or somebody else to play the game
[21:59] because I actually can't play and talk
[22:01] at the same time well I'm sitting here
[22:05] quietly trying not to distract you
[22:08] [Music]
[22:11] obviously okay obviously so I just I was
[22:17] trying to figure out what state to go to
[22:18] and I said it six times trigger read so
[22:23] that'll bring us into this state at
[22:26] which point we want to be able to go
[22:32] back
[22:34] trigger white which I haven't had it yet
[22:36] either riveting I'm sure
[22:55] one of the the things about working with
[22:58] in development tech is like I don't have
[23:02] this name yet and I'll get it when it
[23:04] reloads but so you have to do a little
[23:07] bit of working in the dark sometimes
[23:09] okay so this should now be able to
[23:15] trigger red and we'll see should I think
[23:18] I need to reload that I'll do by
[23:22] deleting it and bringing it back into
[23:23] the game let's see the state machine so
[23:30] currently it's in white it's still in
[23:35] life so that didn't work let's
[23:38] [Music]
[23:42] I forget what it is
[23:58] okay so to figure that out I'm going to
[24:02] go to a test screen red which now it
[24:09] should be in control screen and on my
[24:16] button for a red getting trigger red I
[24:25] know I didn't do meet you I just don't
[24:29] want to spoil it I never changed this
[24:31] target input - why does it only have
[24:37] trigger white
[24:48] in the current state that we're in so
[24:51] they mean confirm which one that was
[24:54] currently in current state white
[25:05] trigger read should be an option
[25:17] oh that's why I didn't make it so that
[25:22] it was actually capable of doing the
[25:23] thing I was asking you to do that sounds
[25:27] like how the other day it worked for
[25:29] having said that I didn't actually set
[25:30] it up to do the thing okay
[25:34] inching inching closer okay I'm gonna
[25:49] make a light actually use lights a lot
[25:53] to really they're easier to get to here
[26:01] I use lights a lot to just trigger
[26:04] interaction States because they're very
[26:08] easy to see
[26:15] bring it up
[26:18] okay well when in doubt do it in flow
[26:21] graph I'll create a new flow graph and
[26:25] I'll bring it over cuz we also have
[26:29] interaction that's the wrong one that's
[26:34] the one to activate it
[26:41] is interaction activated
[26:47] [Music]
[26:53] and if so we'll switch will toggle the
[27:04] light on and off
[27:12] let's see what that does
[27:19] not triggering so let's see and oh I'm
[27:24] not dragging anything around
[27:37] it does not receiving that interaction
[27:43] this is going as well as you know now
[27:47] it's it's don't feel bad at all about
[27:49] this this is this is exactly what I
[27:52] wanted to showcase anyway this is this
[27:54] is game 2 felony people often wonder why
[27:56] developing games takes as long as it
[27:59] does why it needs you know 50 60 70 100
[28:03] 200 300 people why we make something and
[28:08] think it works and put it out into
[28:11] testing and then find out it doesn't
[28:12] work and we realist rating plenty yeah
[28:18] must be fun we've had plenty of very
[28:24] entertaining our TVs in the past this is
[28:26] this one's more informational it's okay
[28:29] you're doing great if I knew any way to
[28:33] help you I would but I don't
[28:36] okay so still doesn't have the
[28:39] interaction listed just weird
[28:49] Thanks
[28:54] see I didn't think that I would run into
[28:56] problems this early do we get I expected
[29:00] there to be problems but expected
[29:02] actually have things happened first
[29:06] so this is this is boring let's not do
[29:09] this okay I'm going to trigger that on I
[29:15] made it I can make a little test debug
[29:18] button on here that will have it change
[29:20] its state and then we could at least
[29:27] play out what should happen and so even
[29:31] if we can't actually run the system yet
[29:33] so to do that in Maine I have read and I
[29:44] need to alter the UI graph so there's
[29:49] like a connecting piece that
[29:59] actually associates the
[30:03] [Music]
[30:07] component building block and this is
[30:13] just green red and when we're in the red
[30:18] state you want to use that and then I
[30:27] want to actually do the thing I just
[30:29] said and make it so that you can ever
[30:34] actually reach that point in the world
[30:38] so I made this run test button which is
[30:42] apparently very premature because we're
[30:44] not gonna make it to that and instead of
[30:46] doing sets state to test status run test
[30:50] I'm gonna do Maine red
[30:57] [Music]
[31:02] good news it didn't work one of the
[31:06] questions of the chat says how much
[31:07] freedom is KX have in doing things like
[31:09] this is there normally a design brief
[31:10] meeting this is for somebody who
[31:12] probably wasn't here at the beginning
[31:14] nope this is this is calyx running rogue
[31:17] this this is him exploring how he thinks
[31:20] say potential system should work like as
[31:24] a concept somebody how we do different
[31:26] concepts for different space ships and
[31:27] this is also like something that I'm
[31:29] doing for our TV Norma I would normally
[31:34] have something a bit fuller before you
[31:36] showing yes showing it off so I think I
[31:40] need to restart this okay
[31:44] do you regret ever doing me a favor now
[31:47] I regret many many things do you have
[31:56] regrets generally
[31:59] this is that nice so what are we doing
[32:04] right now we're exporting the binary
[32:07] which should make the new graph change
[32:10] that I made actually happen and running
[32:16] the game again it decided that it wanted
[32:19] to put the loading stuff on the other
[32:21] screen so I'm gonna might move things
[32:25] around be entertaining
[32:28] are there any any questions that we can
[32:31] we can actually talk about while I'm
[32:34] flailing you do live fine man
[32:41] questions
[32:42] cold is finally gone yes I have a I have
[32:45] a slight persistent cough cough but the
[32:50] the problem with calling all dev is that
[32:52] it's actually shot several days before
[32:55] and whatnot so people you know I was
[32:56] I've been fine for since last week it's
[32:59] just you just saw a call there calling
[33:01] all the devs that was shot when I was
[33:02] sick so nice nothing although I think
[33:13] about it that might not be wrong because
[33:16] I made the new red but I didn't actually
[33:22] change anything about it so before I had
[33:26] asked what we should change about it
[33:28] obviously the first thing to do is
[33:33] instead of setting white red
[33:41] Hey look it's right now
[33:45] and the shuffle should probably be
[33:48] different and which maybe we'll do it
[33:54] out for track three out and then
[34:09] honey any info anything no boy that
[34:13] they're asking questions that are
[34:14] outside your purview okay I'm gonna make
[34:17] I make line to connect to this so
[34:23] that'll be 250 that I conveniently
[34:30] picked multiples of 250 line for 500
[34:41] line 3 is fine
[34:43] let's change line 1 750 so there now we
[34:49] have a new thing right and to switch
[34:56] between the two
[34:57] I'll make a new button to test that out
[35:08] folks in chat asked do you come up with
[35:10] systems like this often all the time and
[35:14] it takes a great deal of personal effort
[35:16] not to make them constantly fortunately
[35:20] they're time-consuming in my time is not
[35:22] usually free so I end up just working on
[35:27] what I'm supposed to but yeah I actually
[35:31] really love doing this it's just a lot
[35:33] harder to do in front of everybody
[35:35] well it's only yeah it's only about 11
[35:39] people yeah that's it right now it'll be
[35:45] like twenty or thirty thousand on
[35:46] YouTube though okay so now you can
[35:50] switch between the two and if I got the
[35:52] interaction state machine a bit working
[35:54] you'd be able to do that from here so
[35:57] that's something to look forward to
[36:00] also I forgot that these are separate
[36:03] screens which is why the red has that
[36:10] anyway and so now the can be a little
[36:19] bit clearer that the idea is that
[36:27] like in this case you end up with just
[36:29] white again whereas here you end up with
[36:36] black black red white and so that is
[36:42] just is sort of an example of how like
[36:44] the making the order of operations
[36:46] matter I think it could be an
[36:48] interesting way of expanding on the
[36:52] puzzle
[36:52] basically because also one of the nice
[36:56] things about that is that if we ended up
[36:58] doing things like making the data that
[37:03] comes out of this like of a certain tier
[37:07] like like I don't know maybe you can
[37:10] sell this data to science vendors and
[37:12] that research data will move you towards
[37:15] some like global goal right that'll
[37:18] create some event to trigger and that
[37:23] can in turn result in more of these
[37:27] science module test processes to be
[37:32] created at which point new puzzles can
[37:35] be solved so there could be some that
[37:36] you would only be able to solve up to
[37:38] 80% and you just have to accept that
[37:40] you're incapable of solving this puzzle
[37:42] and take a lower buyout or whatever as a
[37:47] way to like scale things over time for
[37:51] the given players experience I would
[37:54] also want to set it up so that the
[37:55] colors would correlate to like real
[37:59] properties of the thing so like electric
[38:04] objects or objects that are conducted
[38:07] for electricity things that you see
[38:09] glowing I don't know what would
[38:12] frequently be blue green or white
[38:13] included in their sequence so you'd have
[38:16] an idea of where to start with that for
[38:20] the people who have just joined this we
[38:25] explained we were trying to do at the
[38:26] beginning you want to give us a
[38:28] dime-store recap on well I'm currently
[38:34] just surprised that it didn't not work
[38:37] it just works differently than I thought
[38:38] so hey you like just turned off didn't
[38:41] it yeah so I set up something different
[38:45] than I thought I do but it's not broken
[38:50] oh that's fine oh no questions which ad
[38:54] is do you usually just jump into the
[38:56] engine and start bumping around or do
[38:59] you actually write the stuff out first
[39:00] before I'll write stuff out I have I
[39:04] have the notebook that this came out of
[39:08] which it's just a bunch of like random
[39:15] sketching of like the the idea that's
[39:18] illegible completely incomprehensible
[39:22] but I try I basically tried it out a
[39:25] couple of times and like one of the
[39:31] outcomes Jesus camera J so he can see it
[39:34] oh you just switched where'd you go so
[39:39] what one of the ideas was to have on top
[39:43] of being able to do this system of
[39:46] select for sequence types to figure out
[39:51] what the outcome is that an additional
[39:54] level of complexity for higher tier
[39:58] puzzles would be that your four actually
[40:02] duplicate so it's running a sequence of
[40:05] those four and then running the first
[40:07] two of the sequence the last two the
[40:09] sequence and then all those four and I
[40:11] end up with eight numbers so that's all
[40:15] very confusing until you start actually
[40:16] playing with it and it makes it
[40:18] basically now you're playing three games
[40:20] of Master Mind
[40:23] so if this ever ended up being too easy
[40:26] fear not it can get way crazier why
[40:32] great who saves I saw the light on for a
[40:35] while I'm gonna set up the does I only
[40:40] said that that interaction one
[40:41] directional and in fact probably doing
[40:45] it in the state machine is my mistake
[40:48] because the state machine is not aware
[40:52] of what is happening outside of itself I
[40:56] get that a lot
[40:59] yeah well that's that's correct actually
[41:06] it's the control screen one that needs
[41:11] to have the state machine lose its
[41:17] interactions
[41:26] did you enjoy working in video games
[41:28] before today I loved working on video
[41:32] games
[41:46] right on
[41:51] there's something added here
[41:55] it just
[41:57] it triggered that time but I don't know
[42:02] why
[42:05] magic QA yeah exactly
[42:11] hydrogen light off understand this thing
[42:16] ran and I don't know why it failed to
[42:19] run earlier so I think I'm going to
[42:25] disable all of these and then there
[42:31] should be no requirements for which it
[42:35] is
[42:45] this one also doesn't need any
[42:47] interactions
[42:55] although only to restart it
[43:05] to me though being able to do things
[43:07] like this is important to be able to now
[43:15] it works
[43:22] I lost my train of thought by being
[43:26] surprised that my thing worked yeah
[43:32] [Music]
[43:46] I've completely lost my train of thought
[43:49] what am i doing
[43:50] what's a talk to us about the gameplay
[43:53] situation where this specific mechanic
[43:56] could work I know we talked we touched a
[43:57] little bit on before so the idea is
[44:06] generally that I I don't like when niche
[44:12] gameplay is is constrained to being
[44:18] niche game play if that makes any sense
[44:19] I don't like it when the thing that
[44:23] you're doing has no consequence outside
[44:25] of the thing that you're doing so trade
[44:28] and mining is really great because it
[44:30] alters the economy it alters where value
[44:33] is for pirates and people who are
[44:35] protecting things and protecting you
[44:38] from pirates and and also for the price
[44:42] of things in various areas that X the
[44:48] way that those things build on each
[44:49] other makes it compelling to me so
[44:54] having this able to link into having
[44:56] artifacts that could be or samples like
[44:59] that could exist in distant regions of
[45:03] space that leads to exploration gameplay
[45:06] the fact that those things can could
[45:09] decay based on if they take damage or
[45:11] maybe they are on a time limit maybe
[45:13] they they need to be cold or something
[45:16] and and they just decay naturally
[45:21] j-jane spread and switch back to the
[45:23] main camera so we're actually we're
[45:27] actually out of time yeah this point JJ
[45:31] so that's how hard it is to just make
[45:33] stuff randomly you see JJ's not there
[45:36] let this be a lesson to you ah well JJ
[45:46] all right well we are after this is that
[45:50] every once in a while you get one of
[45:52] these that's okay though you you did you
[45:54] succeeded in showing I'm not necessarily
[45:58] what I wanted to show but kind of the
[46:01] secondary objective which is that making
[46:03] games is not easy well it also
[46:06] demonstrates like our new tech a lot of
[46:08] the things that we're beginning to use
[46:09] like contrasting how long every step of
[46:16] this took and how how easily it broke
[46:20] this is a massive improvement and you
[46:25] can kind of tell that from for instance
[46:26] making the the white module versus the
[46:30] red module like that was added
[46:32] relatively painlessly I think and so
[46:36] taking advantage of our inheritance of
[46:40] data Forge taking advantage of the live
[46:42] edit of our UI tools that taking
[46:47] advantage of the interaction state in
[46:49] order to actually trigger data flow and
[46:53] and game flow between random objects
[46:56] that I just tossed into the scene and
[46:57] made earlier today those are all of the
[47:02] most important foundational aspects of
[47:05] making star citizen be able to exist in
[47:09] the way that we wanted to so you know we
[47:15] are wrapped up for today we do have a
[47:17] couple housekeeping things that I'm
[47:20] being told to share with you what not we
[47:22] have another calling all devs that comes
[47:24] this Monday just like it does every
[47:26] other Monday a citizen non tickets are
[47:28] of course still on sale and last week we
[47:32] have a follow-up to last week's OCS
[47:34] themed reverse the verse I'm being told
[47:37] that I can tell you that our intention
[47:41] is to go to evocati in the evocati is
[47:44] the first wave PTU early next week of
[47:48] course it's going to be it's going to be
[47:49] depending on when the build is ready and
[47:51] whatnot but
[47:52] you're actively aiming towards early
[47:53] next week to be to get the first builds
[47:56] of three point three point three into
[47:58] the hands of our evocati test flight
[48:00] something a little different that we're
[48:03] doing this time because three point
[48:05] three is potentially our biggest patch
[48:08] yet if you watch the OCS a strain last
[48:11] week you heard about how OCS is touching
[48:15] every single aspect of star citizen like
[48:18] things that have been in and untouched
[48:20] since 2.0 had to be revamped for the new
[48:23] object container streaming it's like
[48:24] that so everything gets touched because
[48:26] of this for the first time in our
[48:28] development we are going out with two
[48:30] parallel PTU builds there will be a
[48:35] three point three that has OCS and a
[48:38] three point three that does not have OCS
[48:41] so when you hear about that next week
[48:43] when when that happens you know what
[48:45] that that's coming that's an effort for
[48:48] us to basically basically cover all our
[48:51] bases and figuring out where bugs exist
[48:53] in one and where bugs don't exist with
[48:55] other it servers request by our
[48:57] development team and we think especially
[48:59] if you watched last week's RTB the
[49:01] reasons for that are very very apparent
[49:03] so expect that hopefully early next week
[49:07] to parallel 3.3 builds coming to ebay
[49:11] cable Connie next week and then of
[49:12] course to PTU and then of course towards
[49:15] our targeted release with excess essence
[49:18] and God so yeah so that process is
[49:22] starting real soon
[49:23] I've KX I think I figured it out yeah so
[49:31] I do need to have like for instance
[49:35] trigger to read and that needs to be in
[49:39] double and linkable and trick to white
[49:45] Thunderball in like a moment and then I
[49:49] need to trigger oh wait no that's not
[49:57] gonna work either
[49:58] I mean I got I got the white one working
[50:02] I'm Charlie Brown in here Lucy with a
[50:05] football you know that because I have
[50:08] you can go back and forth oh there you
[50:10] go
[50:10] I still have the light hooked up so
[50:12] that's pretty so actually everything but
[50:15] you got around it trying to do is
[50:17] actually working at this point yes and
[50:19] then I wasn't he done I would need to do
[50:20] that to all of them now so games take
[50:25] time game take time we are that that's
[50:30] we're renaming that episode so I kind of
[50:35] finally come back next week you got
[50:38] questions about the Hammerhead we got
[50:40] answers next week on our TV we'll have
[50:42] the team working on the hammerhead here
[50:44] to answer your questions live so for
[50:47] reverse diverse life that's a systems
[50:49] designer calyx Renault I'm Content
[50:52] Manager for global video production
[50:54] Jared Huckaby and we'll see you next
[50:55] week everybody
[51:00] you
[51:11] thanks for watching for the latest and
[51:13] greatest in star citizen squadron 42 you
[51:15] can subscribe to our Channel or you can
[51:17] check out some of the other shows and
[51:18] you can also head to our website at
[51:23] www.uvu.edu/library

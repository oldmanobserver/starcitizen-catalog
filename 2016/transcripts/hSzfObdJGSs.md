# Star Citizen: January Subscriber's Town Hall feat. Sean Tracy

**Video:** https://www.youtube.com/watch?v=hSzfObdJGSs
**Date:** 2016-01-27
**Duration:** 1:01:01

## Transcript

[00:00] all right hey everybody can you hear us
[00:02] let us know let us know if you can hear
[00:09] us take it from the top yeah we'll take
[00:12] it from the top if we can thing we do
[00:13] six times a week soon as we know that
[00:14] people can hear us yeah there's yay okay
[00:16] so now that you can hear us guys welcome
[00:19] to reverse the verse our special January
[00:21] subscriber Edition uh as a perk to
[00:24] subscribers we do one of these every
[00:26] month where we bring in our an esteemed
[00:28] guest and take questions specific
[00:29] speically from subscriber chat today's
[00:32] special guest is technical director of
[00:35] content y Mr Sean Tracy and I knew that
[00:38] before I didn't just ask him uh we're
[00:41] going to take questions from con from
[00:43] our subscriber chat only and from a
[00:45] thread that exist in subscribers Den uh
[00:48] while we're collecting questions why
[00:49] don't you tell people what you do sure
[00:51] and how you do it so they can form their
[00:53] questions around relevant topics sounds
[00:55] good he does it very
[00:56] well so uh te technical director um
[01:00] specifically of content um so everybody
[01:03] knows we have uh upwards of four
[01:05] technical directors across the company
[01:07] uh we have uh two in Frankfurt one in
[01:09] the UK and then one here um so I'm the
[01:12] representative here um and again if uh
[01:15] nobody's really aware of what a
[01:16] technical director rule sort of does um
[01:19] you basically hit the uh the amount of
[01:21] expertise uh that you retain for
[01:24] whatever whatever your role is as is at
[01:26] the highest level that you can basically
[01:28] get it to um typically a technical
[01:30] director will be an expert programmer uh
[01:33] by by some description so uh carsten
[01:36] wiel and Marco corbetta are technical
[01:38] directors in Frankfurt so they're the
[01:40] engine technical directors uh
[01:42] essentially how they're they're
[01:43] organizing how the engine is being
[01:45] created what we're going to do with the
[01:47] engine how we change it um and really
[01:49] really major uh architectural
[01:51] modifications things like this uh then
[01:53] we have derck senior and uh he's the
[01:55] programming director within the UK but
[01:57] typically your programming director is
[01:59] actually your technical director um so
[02:02] since we have so many different
[02:03] engineers in the UK working on gameplay
[02:05] systems um all the uh you know the mini
[02:08] puu features uh he is the tech director
[02:11] out there and then it's myself over here
[02:13] in this time zone now what I'm more
[02:16] responsible for uh in the in the last
[02:18] little while anyways is all the data
[02:20] that's going into the game we basically
[02:22] have two very important directories
[02:24] within our build and one is code and the
[02:27] second is data so every single asset you
[02:30] see within the game whether it's a
[02:31] character ship particle effect sounds
[02:34] things like that I'm responsible for
[02:35] that and really it's um basically
[02:38] anything that comes out of some sort of
[02:40] DCC tool and goes into the engine or
[02:42] goes into the game that's up to me so we
[02:45] keep calling them pipelines and things
[02:47] like this so I've got to manage all the
[02:48] pipelines and I'm trying to deprecate
[02:50] the word Pipeline and just call them
[02:51] checklists because it's so much easier
[02:52] for people to understand like pipeline
[02:54] is such this nebulous sort of like oh I
[02:56] work on the pipeline but now really you
[02:58] work on a set of checklist list items
[03:00] that is like goes here goes here goes
[03:02] here finish that and all those
[03:04] interdependencies so um yeah I'm making
[03:06] sure that we're using the engine the
[03:08] best we can uh making the content the
[03:10] fastest way we can I mean yeah I don't
[03:12] know it's not a job interview so I guess
[03:14] I'll just stop there what's a DCC tool
[03:17] oh I'm sorry it's a digital content
[03:18] creation so it's like 3ds Max Maya um XS
[03:22] well I don't even know if that exist
[03:24] anymore um uh uh zbrush is yeah you DCC
[03:30] Photoshop I mean I knew I was just
[03:32] asking for sure you did all right our
[03:35] first question uh comes from our
[03:38] subscriber thread since there aren't any
[03:39] questions in subscriber chat just yet uh
[03:42] This Thread says the procedural Planet
[03:44] Tech demo looked great what are some of
[03:46] the challenges in getting us to the
[03:48] point where players can actually land
[03:50] anywhere on Crusader there are so many
[03:53] challenges I I wow I mean that that's a
[03:57] pretty broad question um so I guess I'll
[03:59] pick a couple uh points that we're
[04:02] dealing with right now um one of the
[04:05] hardest things to deal with obviously is
[04:07] the physics of this so not not so much
[04:10] in terms of the scale um but you can't
[04:14] okay so the way physics really works
[04:16] within the game you've got a bunch of
[04:17] render mesh and then you've got a
[04:19] physical proxy which is a way way lower
[04:21] res representation of whatever you want
[04:23] to collide with um the reason it's got
[04:25] to be so much lower res is that you are
[04:27] doing so many more calculations on that
[04:30] uh than you are on on a render measure
[04:32] or something like this because
[04:33] eventually you'll just render it but in
[04:35] physics we're interacting with it we're
[04:36] shooting things at it we're crashing
[04:38] into it we're doing all kinds of
[04:39] different things so the problem is with
[04:41] with a with a planet of you know 10,000
[04:45] kilometers or something like that you
[04:47] cannot possibly load that entire physics
[04:50] mesh all the time and even worse even if
[04:53] you tried to do that the the sheer count
[04:56] of that even if it was lower res would
[04:58] be so high um so what we have to do is
[05:01] dynamically load this physics um and
[05:03] we've got to load it on a sort of a per
[05:05] client basis because you typically on a
[05:08] server you'll actually load all your
[05:10] physics data all at once you'll have it
[05:12] all just sitting there you won't stream
[05:13] the physics in or out um it'll just be
[05:15] sitting there and obviously we can't do
[05:17] this on a on a 10,000 kilometer planet
[05:19] that has uh mountains and hills and all
[05:21] sorts of uh all sorts of different
[05:23] things so that's one of the biggest
[05:25] challenges that we have um but we've
[05:27] already got it work in which is pretty
[05:29] pretty neat to know um I don't know when
[05:33] we'll we we show that but yeah we've got
[05:35] we've got something quite nice working
[05:36] for that so we'll calculate on a per
[05:39] client basis um so that was one of the
[05:41] biggest hurdles to actually making this
[05:44] uh playable uh uh for the players
[05:46] because obviously if you don't have
[05:47] physics on a Terrain you fly right
[05:49] through it and it'll kind of ruin the
[05:50] whole experience um so yeah that was one
[05:53] of the bigger ones um on top of that of
[05:56] course is just the visuals of of the
[05:57] planet itself uh I mean how does that
[05:59] look look um how does it look and again
[06:02] the scale is just insane uh how does it
[06:05] look when you're you know 300 km 300,000
[06:08] km out from that planet you've got to go
[06:10] from you know this planet just
[06:12] inheriting one pixel on the screen to it
[06:15] taking up the entire screen to it being
[06:17] like you are inside of of a level you
[06:20] know um so being able to transition
[06:22] through the atmosphere making that look
[06:24] hyper real was really really challenging
[06:27] um how many LEDs are involved in that
[06:30] it's actually way more complicated than
[06:31] that and I wish I could say there was
[06:33] like six lods or something like this no
[06:35] there was so many different levels of um
[06:38] processing that happens on the way in so
[06:40] sure there's a bunch of lods as you're
[06:42] approaching but once you get in there it
[06:44] is it is it's a dynamically tesselated
[06:47] objects so essentially what you're doing
[06:49] is you're only going to tessellate the
[06:50] objects that are really close to you or
[06:51] the or the sectors even that are really
[06:53] close to and most game engines have a
[06:55] Terrain system that works this way uh
[06:57] unreal has a cry engine has a base uh
[06:59] sort of terrain system that works on
[07:02] this uh uh this Dynamic amount of
[07:04] tessellation the trick is to get that to
[07:06] convolve around a sphere first of all
[07:08] and then second of all is to be able to
[07:10] synchronize this all over the network
[07:12] right so and again that that's got to
[07:14] lend itself to physics that's got to go
[07:16] across different clients uh yeah there's
[07:18] a lot of challenges when it comes to
[07:20] this and then maybe the last one that
[07:22] I'll talk about is um the actual objects
[07:26] on the surface itself now I'm not
[07:27] talking about like procedural objects or
[07:29] like trees and rocks and things like
[07:31] this I mean Landing
[07:33] zones if you have an IDE like to give
[07:35] you an idea Area 18 um that that level
[07:38] right now we're talking you know four to
[07:40] six gigs of data uh within that level so
[07:44] imagine flying up to one of these
[07:45] planets which is pretty heavy by itself
[07:48] uh and then also having to load that
[07:50] Landing Zone on the way in um to be able
[07:53] to stream that amount of data you can
[07:54] absolutely do this but can you do it
[07:56] seamless can you make it look like it's
[07:58] not just pop po po pop bunch of objects
[08:01] sort of streaming in um that's a huge
[08:04] challenge so that's something that we're
[08:05] working on on in the engineering front
[08:06] with these things um that Chris talks
[08:08] about on occasion called object
[08:09] containers and uh these sort of things
[08:12] so um we've got a very unique game where
[08:14] we basically have to be able to stream
[08:17] everything out and everything in at at
[08:19] runtime um so it's a very very
[08:21] challenging thing to do there is very
[08:24] few level loads so you can't just sit
[08:27] there and load everything behind the
[08:28] scenes so challenge but we have our we
[08:31] have our plan in place yes absolutely
[08:33] and it's starting to work yeah right
[08:36] yeah Carl Jones are our CEO uh here at
[08:39] cig we had a a saying when we both used
[08:41] to work for krych and that was difficult
[08:42] takes a day and impossible takes a week
[08:45] so this one is is is on the level of
[08:48] impossible right but but we're
[08:50] absolutely going to achieve it right
[08:52] sadly that's going to be the headline
[08:53] right right they will yeah I say today
[08:57] will be confirmed planets are done a
[08:59] week no that's not true the impossible
[09:02] impossible uh what can you tell us about
[09:05] physicalized Eva I know uh there were
[09:07] some expectations that it might be in
[09:09] 2.1 originally uh because you came on
[09:12] the show and said it might be in 2.1 no
[09:14] and it was and we pulled it out actually
[09:16] P out y we pulled it out on purpose
[09:17] where we at with that now uh it looks
[09:19] like it's definitely going into well I
[09:22] say definitely wow I am so going to not
[09:25] say definitely um it's in our Branch for
[09:28] 2.2 right now now so uh it's basically
[09:31] the same that we we were at with 2.1
[09:33] however there's been a ton more work
[09:34] that's been done on it one of the
[09:35] biggest problems um was it has nothing
[09:38] to do with crashes has nothing to do
[09:40] with performance has everything to do
[09:41] with the way it feels like like the
[09:43] control of it um because fundamentally
[09:45] we changed the way um that the that the
[09:49] character is getting locomoted around uh
[09:51] when you're in the Eva you are now we
[09:54] call it a driven ragd doll um it's a
[09:56] it's a similar system to if anybody's
[09:58] seen these animations system called
[09:59] morphine or uh in FIFA actually is a
[10:02] really good example they use a very
[10:04] similar system uh where there's a
[10:06] there's a there's a level of driven ragd
[10:08] doll so you are we call it an
[10:10] articulated entity um so basically
[10:12] you're a set of rigid bones right that
[10:14] is getting driven around but you've got
[10:15] to blend animation on top of just
[10:19] physical impulses that is moving it
[10:20] around whereas the older Eva and what
[10:23] everybody's using right now is an
[10:24] animation driven um Eva so we say entity
[10:27] move here entity move here entity move
[10:30] here but the animation just plays based
[10:33] on how you're moving it's very very it's
[10:35] actually pretty simple it's just you're
[10:36] moving forward well animate like this
[10:38] you're moving backwards well animate
[10:39] like this um so with driven ragd doll
[10:41] it's a lot more tricky because of all
[10:44] the physics that gets involved with it
[10:46] so the reason we want to do driven ragd
[10:48] doll um is we want the body to react to
[10:51] things in zerog as as you would expect
[10:54] them to react now I think a lot of
[10:56] people saw some some of the fun videos
[10:58] that came out of uh the initial
[11:00] implementation of it right uh where we
[11:02] hadn't tightened up a whole lot of the
[11:04] limits so like somebody could go near a
[11:06] ship and if it hit their head their head
[11:08] would bend almost you know all the way
[11:10] backwards and things like this um so
[11:13] again right it was all about scaling
[11:15] those uh those physics impulses and
[11:16] those sort of things but really getting
[11:18] the control better um because our frame
[11:20] of reference changed so drastically
[11:22] between the old Eva and the new Eva and
[11:24] what I mean when I speak of frame of
[11:26] reference is and it's something I talked
[11:28] about before where where we would use
[11:30] the origin of the character or is you
[11:33] know like write down this is a character
[11:36] and this is the feet of the character
[11:38] and in the middle of the feed is the
[11:39] origin right we've just got z0 and
[11:41] that's where our origin is but when
[11:42] you're in Eva actually your origin
[11:44] changes your center of mass becomes
[11:46] Dynamic which is quite cool um usually
[11:48] it's around the hips but because it
[11:50] moves around a little bit um that makes
[11:52] controlling it really tricky because
[11:54] you've got to have something that is
[11:55] saying okay this is my forward Direction
[11:58] which way is forward which way's up
[11:59] which way's down these sort of things um
[12:02] so yeah um there's been a lot of great
[12:03] check-ins on it and it
[12:06] feels so many levels better um than than
[12:09] it initially felt so where there'll be
[12:11] bugs probably but we'll have to we'll
[12:14] have to cross those bridge when we get
[12:15] there why don't we just fake it why
[12:18] don't we just fake well that's what we
[12:19] had before right was fake evva and you
[12:21] know everybody was happy with that I'm
[12:22] not saying that it was awful um but
[12:27] visually okay visually I thought it was
[12:29] awful because here's my problem is when
[12:31] you pitch or or you you sort of rotate
[12:35] you were rotating around the feet and
[12:37] again you know we only had some limited
[12:39] free flight and even in the mini PTU are
[12:43] you really sitting there staring at a
[12:44] guy doing a lot of Eva not so much but
[12:47] let's say you're in a gunfight with a
[12:48] guy and all of a sudden he presses e and
[12:50] he starts rotating around like this it
[12:52] just looks stupid it it it looks fake
[12:55] and that that's not what we want and
[12:57] most people would say okay how about you
[12:58] just offset that that that origin to the
[13:01] hips and then just rotate around that
[13:03] well that's a little bit tricky because
[13:04] actually the animation system is
[13:06] assuming that origin is between the feet
[13:08] so it's better to go change it to an
[13:11] articulated en get all these bonuses of
[13:13] actually being a driven ragd doll um um
[13:16] so like you know flying into stuff and
[13:17] your arms reacting your head reacting
[13:19] and mostly your legs reacting um than it
[13:22] was just to continue to fake it if that
[13:24] makes any sense um the other big win
[13:27] that we get out of this is another
[13:28] system that we worked on sort of in
[13:30] concert with the physical Eva and it's
[13:32] we call it we called it fall and play
[13:34] back in the the crisis days uh but for
[13:37] us it's more like fall and play and fall
[13:39] um so what it means is and uh the
[13:42] implementation is going to get a little
[13:44] bit bigger um as you transition in and
[13:47] out of gravity is kind of our big thing
[13:49] um right now how it works is as soon as
[13:52] your pivot comes within some sort of
[13:54] gravity volume boom we just drop you
[13:55] down and you land on your feet whether
[13:57] or not you were coming in head first
[13:59] whether or not you were coming back
[14:00] first or anything like this so what what
[14:03] I wanted to do with it was basically
[14:05] give you um uh a range that that you
[14:08] would be able to land on your feet
[14:10] essentially so you know right now I
[14:11] think we've set it to 20 or 30° um and
[14:14] it's it's like a little cone uh so again
[14:16] if you consider the the the pivot of the
[14:18] character you can be rotated you yeah I
[14:21] think it's 30° um you can be rotated
[14:24] sort of 30° uh forwards backwards
[14:27] sideways you're basically within this
[14:29] tone of of I can land on my feet um so
[14:32] when that happens you transition into
[14:34] zerog G boom you know you're able to
[14:35] actually land but if you come in head
[14:37] first what do we do right now we could
[14:39] try to animate you know a bunch of
[14:41] different directions um but this gets
[14:43] really heavy to maintain and also it
[14:45] doesn't really look right so instead
[14:47] what we do is when you transition into
[14:49] into gravity we set you to ragd doll
[14:51] driven ragd doll um and well you
[14:54] technically already are if you're in
[14:55] zerog G but uh we kind of take the
[14:58] control away we put we put uh you
[15:00] already have mass so we put gravity to
[15:02] you so what will happen is you kind of
[15:04] you lose control a little bit um but if
[15:06] you came in head first you actually ragd
[15:09] doll you're under Gravity affection and
[15:11] you will fall blam and and and and and
[15:14] oh don't hit the table cuz the
[15:16] microphone will BL um um you land on the
[15:19] you land on the ground whatever in ragd
[15:21] doll and you know your arms will go all
[15:23] over the place or whatever um and then
[15:25] what the Fallen play portion of this is
[15:27] we will blend whatever you've landed in
[15:30] into a get up animation so we have eight
[15:32] different Get Up animations and they're
[15:34] just sort of different ways that the
[15:36] body could land so it's on the on the
[15:37] belly on the back on the side um um sort
[15:41] of Crouch down um and then we will blend
[15:43] into a get up animation and you will
[15:45] just get up from your fall so there's a
[15:47] lot of gameplay that can come out of
[15:48] this and I know this sounds like
[15:50] very um you wouldn't see the direct
[15:53] impact of some gameplay with this but if
[15:55] you consider things like an FPS level or
[15:58] uh even within a station that has
[16:00] gravity generators so let's consider
[16:02] you've got two different teams and you
[16:04] are fighting in this sort of area now if
[16:06] you are in communication with your team
[16:08] and you control some sort of gravity
[16:10] generator or something like this you can
[16:12] use this very much to your advantage if
[16:14] they're in you know let's say we have a
[16:16] hanger and a gravity generator you've
[16:17] got the other team in the hanger and
[16:19] they're flying around all over the place
[16:20] they're you know they're going to town
[16:22] on your guys because they've got zero
[16:23] gravity they can go upside down and all
[16:25] these sort of things you get that other
[16:26] team way up in the air and you tell your
[16:28] other guy throw on gravity gets who's
[16:30] all falling down and they have to get up
[16:32] and you've basically got about five six
[16:34] seconds of of of just picking them off
[16:37] right as they're getting up off the
[16:38] ground um and then additionally right
[16:40] there there's other things that we could
[16:42] build on uh I'm not sure if the
[16:43] designers have have really uh fleshed
[16:46] this out yet but how much better are you
[16:49] at at U transitioning from zero gravity
[16:52] to gravity is that 30° actually for you
[16:54] more like 40° is this you know a
[16:56] character progression thing is this
[16:58] something that you can have an item for
[17:00] um do you have do you have thrusters on
[17:03] your suit that can help you with this
[17:04] you know are you are you like a cat can
[17:06] you always Lin on your feet you know
[17:08] there's all sorts of little bits of uh
[17:10] gameplay that can go into this so that
[17:12] was a really long-winded answer for kind
[17:15] of what's going on with with physical
[17:17] Eva but uh again it's a real exciting
[17:19] thing because I don't think it's been
[17:20] done before not not like this anyway
[17:22] eight different Get Up animations uh
[17:24] eight eight different directions yeah I
[17:26] only have one get up animation it
[17:27] involves grunting grunting and their
[17:29] sounds yeah I know that's my sit down to
[17:32] all right uh this leads us into the next
[17:34] question sure uh how are FP FPS
[17:37] animations coming specifically with the
[17:39] unification between first and third uh
[17:42] really well uh oh there was a there was
[17:44] a great thing that happened about two
[17:46] months ago um our animation director
[17:49] Steven bner had gone out to Frankfurt
[17:51] and did a lot of direct work with our
[17:53] animation R&D programmer so and just so
[17:55] you guys know a little bit of history on
[17:57] this too um we all we did work together
[17:59] at krych the uh R&D animation direct um
[18:02] the R&D animation engineer uh Steven
[18:04] bner myself and uh there was a lot of
[18:07] guys within crch and we had tried to
[18:08] unify this uh for crisis 2 and even for
[18:11] Crisis 3 um and we were all pretty much
[18:14] set in the way that you can't you just
[18:16] can't there is no way to do it you're
[18:18] always going to be chasing your tail um
[18:20] what looks good in first person doesn't
[18:21] look good in third person vice versa um
[18:24] but we made a change and I mean I I got
[18:27] to leave a little bit of magic um so I'm
[18:29] not going to say exactly what it was uh
[18:32] but I mean we solved the problem um and
[18:34] by Wii it was really you know evil Herz
[18:36] egg was uh Frankford engineer that
[18:38] really kind of on line of code solved it
[18:41] um and it was interesting like I made a
[18:43] little meme for him like it was like oh
[18:44] a th000 man hours I do in one line or
[18:47] something like that um but yeah we
[18:49] solved this and
[18:51] uh the nice thing about it is it feels
[18:54] like an FPS again um is the thing it
[18:56] feels like it the weap is in the right
[18:59] place it's not bouncing around um you'll
[19:01] probably see and even if you go look at
[19:03] the older videos of of the FPS before
[19:06] any of this implementation kind of went
[19:07] in the weapons bouncing around
[19:09] everywhere it doesn't really look like
[19:11] the solidified firstperson shooter at
[19:14] the same time we didn't want to have um
[19:17] static weapon you know we just don't
[19:19] want to have floaty weapon Chris talks
[19:20] about it all the time he just doesn't
[19:21] want a weapon sitting there floating in
[19:23] your view right he wants it to feel like
[19:25] you are holding it but at the same time
[19:26] it's got to feel super responsive and
[19:28] and the real problem with it is that in
[19:31] a first-person shooter the weapon is the
[19:33] only thing that communicates your
[19:35] movement to you so if you're turning for
[19:38] example right that that weapon needs to
[19:40] can and things like this uh um uh good
[19:44] one is cover so when you go into cover
[19:47] you can't tell if you're sort of poking
[19:49] your head out or if you've just moved
[19:51] the weapon you know so it's the only
[19:53] thing that really informs your movement
[19:55] um in first person so if you're juking
[19:57] if you're doing things like this the
[19:58] weapon needs to move and that needs to
[20:00] translate to Oh okay that's how my
[20:02] character is moving uh a third person
[20:03] game doesn't have this problem cuz
[20:05] you're staring at the character you know
[20:06] exactly what he's doing but a first
[20:08] person game it definitely does because
[20:09] you don't know necessarily what your
[20:11] feet are doing what your whole body is
[20:12] doing so it gets tricky and cover but um
[20:15] I would say that it's going really well
[20:17] um probably better than it ever has been
[20:20] uh especially since that change because
[20:21] we've made a bunch of adjustments based
[20:23] on that that will make developing stuff
[20:26] even easier a good example of this is uh
[20:28] We've added an extra layer of Animation
[20:30] there's actually like four or five
[20:31] different layers that are happening when
[20:32] we're in first person uh but one of the
[20:34] big ones is this uh weapon hands overlay
[20:36] it's a it's a it's a clip that we can
[20:38] put on so essentially what it does is we
[20:40] have very similar animations for like
[20:42] rifles but we might have different sizes
[20:44] of rifle so we might have a sniper rifle
[20:46] which actually I can't hold back here
[20:48] I'm actually going to have to hold over
[20:49] here now my hands poses my hand poses
[20:52] haven't changed dramatically but they've
[20:54] changed enough that actually we have to
[20:56] do something so what you you'll see is
[20:59] um we've got this extra layer of
[21:01] Animation that actually all we do is we
[21:03] just put one animation to move that hand
[21:04] to that location we link everything up
[21:06] with ik and we're good to go um so what
[21:09] this all means is that we can make more
[21:11] weapons faster without having to
[21:13] uniquely animate every single one of
[21:15] them um that's a big big big win so so
[21:19] yeah a lot of this stuff then um and
[21:22] sorry I know I just keep talking on and
[21:24] on um the the um this is oure the start
[21:28] stops
[21:29] the start stops have have made super
[21:31] good progress so this was some
[21:33] interesting stuff that Stephen bner
[21:34] actually came up with some really good
[21:35] ideas on um and then the Jukes
[21:38] themselves are still a bit of a
[21:39] challenge um we're we've got them and
[21:42] they're responsive now um and so
[21:45] everybody knows like the the original
[21:46] implementation of the Jukes felt super
[21:48] unresponsive that was our really biggest
[21:50] problem with it um and you know just
[21:52] being totally open about it you were you
[21:54] would play on Mouse and uh you would I'm
[21:56] a mouse and keyboard guy so you'd be
[21:58] playing on Mouse and keyboard and you
[21:59] would be strafing right and then all of
[22:01] a sudden you would press left and
[22:02] something would happen and then
[22:03] eventually you would end up going left
[22:05] and even having you know six frames of
[22:07] delay or seven frames of delay was
[22:09] enough that it felt super sluggish was
[22:11] the problem and that was one of our
[22:12] concerns uh in releasing it
[22:14] because if you didn't see what was
[22:17] happening in third person if it was
[22:19] awesome in third person if we were
[22:20] making a third person game we would have
[22:22] been done like that was easy but in
[22:25] first person that communication done
[22:27] with the animations side get to get me
[22:30] in trouble yeah no kidding um in first
[22:33] person it's so much harder to
[22:34] communicate that movement and and most
[22:36] people are so used to Call of Duty or
[22:38] Battlefield or something like this that
[22:39] is this instant response and we have to
[22:41] keep that instant response because
[22:43] otherwise it's not that fun um you feel
[22:45] like your character is controlling you
[22:46] rather than you controlling your
[22:48] character um so yeah there's been some
[22:50] great stuff on the start stops uh then
[22:52] Additionally you probably saw that
[22:54] there's new Locomotion sets within the
[22:55] mini puu so those are doing really uh
[22:58] they working really well um the other
[23:00] thing that's kind of exciting about them
[23:01] and I mean it depends who you are to see
[23:03] how exciting this is but uh there's
[23:05] three Cycles within them so these are
[23:07] three cycle runs three cycle walks I
[23:09] know that sounds like oh yeah yeah you
[23:11] know and what I mean three Cycles is you
[23:13] know left right left right left right so
[23:17] wait
[23:18] correct so you go left right left right
[23:21] left right um reason that's good is that
[23:22] we can actually make it um not
[23:25] completely symmetrical so basically the
[23:27] second step on that is just there's a
[23:29] tiny bit of a shoulder dip in it or
[23:30] something like this they T they tend to
[23:32] look a lot more realistic than just a
[23:34] single cycle run because a single cycle
[23:35] run is like perfect all the time you
[23:37] never ever see anything different but um
[23:40] you know if you go into the game right
[23:41] now you'll see the one that's that's the
[23:43] most obvious is is the backup and it's
[23:45] probably a little too obvious and we'll
[23:46] probably chill it out but when you're uh
[23:48] when you're um running backwards you'll
[23:50] notice that the shoulders kind of dip
[23:52] down into it um it and it's only on one
[23:55] of the one of the Cycles but it looks
[23:57] really good uh I think it looks a lot
[23:58] more real is is the
[24:01] point uh I'm getting a special
[24:03] telepathic message from Hennessy please
[24:05] stop hitting the table please stop
[24:06] hitting the table oh is that me I'm
[24:09] sorry I get
[24:11] excited next question is about turrets
[24:14] on our on our multi- grw ships um right
[24:17] now they're not the most responsive
[24:18] they're they're not the the funnest the
[24:20] most fun gameplay experience at the
[24:22] moment what are we doing to improve
[24:24] turret performance uh a lot of testing
[24:26] really so we're trying a lot of
[24:28] different different um ideas um Chris
[24:31] has a really
[24:33] good direction on this where what we
[24:36] want to try um and this is this is
[24:39] something that we're just doing
[24:40] internally right now um the turrets as
[24:42] they work right now you sit in it you've
[24:45] got a Crosshair and you are moving
[24:46] Crosshair and that's that's how it's
[24:48] moving with you now the problem with
[24:51] this is that it's actually not like
[24:52] anything else in your ship like if
[24:54] you're sitting in the pilot seat right
[24:55] you've got a nice floating reticule
[24:57] everything sort of follows up behind
[24:59] that um what we want to do is Implement
[25:02] that have it sort of like a floating
[25:04] type reticule that that the turret will
[25:06] sort of catch up to problem with that is
[25:08] the responsiveness right you've got to
[25:11] make sure that that moves fast enough um
[25:13] and if it doesn't Mo If It Moves too
[25:15] fast it feels super fakey If It Moves
[25:17] not fast enough it doesn't feel
[25:18] responsive enough and I'm not you know
[25:21] there's no promise that we're going to
[25:22] do this uh we're going to try it
[25:24] internally and we're going to see if
[25:25] that feels any better is the thing um
[25:28] the other thing that I think will help a
[25:30] lot is just a little bit of feedback on
[25:32] where your ship is facing um and this
[25:34] has to everything to do with UI uh which
[25:36] way your ship is facing which way your
[25:38] turret is facing uh yeah I I mean that's
[25:42] that's pretty much all I know right now
[25:44] on the on the multi crew turrets but I
[25:45] know there's guys in the UK really
[25:47] looking at this pretty hard right now
[25:49] I'm just not super involved in it that's
[25:51] all
[25:53] okay hair character hair mhm uh what are
[25:57] the possibilities of stresses and using
[25:59] something like tress effect or the new
[26:01] AMD technology Pure Hair what's her plan
[26:04] for hair so I don't know too much about
[26:06] Pure Hair um I know that they've
[26:09] released an update to trust effects and
[26:12] we evaluated trust effects and here's
[26:14] something here's a little bit of History
[26:15] again on uh when Tres effects 1.0 rolled
[26:18] out um I was part of the krych team that
[26:20] did the implementation originally for
[26:22] Tress effects into the cry engine so
[26:24] basically AMD had come over with all
[26:26] their work on Tomb Raider um and we had
[26:28] done uh a tech demo called the Ruby Tech
[26:30] demo and you can take a look uh you can
[26:33] look it up this is something I worked on
[26:34] with phonic actually um now you know not
[26:37] to at all speak bad about the tech is
[26:39] very very cool stuff however we've got
[26:42] so many characters on screen and for us
[26:45] to go with just one character having
[26:50] ridiculously you know granular simulated
[26:53] hair um and then everybody else in the
[26:55] scene kind of having you know crappy
[26:57] poly soup kind of hair um doesn't really
[26:59] make a ton of sense to us um the other
[27:02] thing that that is a worry of course is
[27:04] just the performance implications so in
[27:06] all the games that have used dress FX um
[27:09] and again I'm not saying it's like a bad
[27:11] performing system but it is not a system
[27:13] for 40 characters on screen it's not a
[27:16] system for 60 characters on screen it's
[27:18] really a system for fur of a hero
[27:21] character it's really a system for hair
[27:22] of a hero character and again in
[27:24] something like Tomb
[27:26] Raider pretty much one character own
[27:28] screen right um and you may have enemies
[27:30] and stuff like this but generally you
[27:32] are only looking at one person um do we
[27:35] need Super advanced level hair
[27:39] simulation I would argue probably not
[27:42] even right I would say that there's
[27:44] there's things that we can do now with
[27:46] the item ports and these we call them
[27:48] skeleton extensions with pretty Advanced
[27:51] rigging um that will make it a lot
[27:54] easier for us to do a lot of hairstyles
[27:57] um without having to sort of resort to a
[27:59] to a GPU hair um or or or Tres effect or
[28:03] um I think advidia Hair Works or stuff
[28:06] like this um so I can't say no for sure
[28:11] but we have evaluated what was there and
[28:13] it definitely it just wasn't suitable
[28:15] for what we wanted and the real trick
[28:17] with those um Hair Systems and it's just
[28:20] from past projects having worked with
[28:22] them is getting the hairstyle you really
[28:25] want Works real good for you know long
[28:28] flowy hair that's real straight uh or
[28:30] even like a a ponytail or something tied
[28:33] back but as soon as you want some sort
[28:36] of real retro cut or or something that
[28:38] looks very
[28:40] unique it gets tricky it really does um
[28:43] and the other thing that we have to
[28:44] consider is the zero gravity of of all
[28:46] of this um so trust effect effect deals
[28:49] with
[28:49] that but it looks a little weird I mean
[28:52] if I'm totally honest right how it ends
[28:54] up simulating is not what you would
[28:56] really expect um so so that really
[28:58] matters to us with all that said we are
[29:01] going to have hair um we do have hair on
[29:03] the characters right now confirmed
[29:06] um the other and there's one little
[29:09] other limitation in this and that's the
[29:11] character customization so because we
[29:14] want to have characters customized not
[29:15] only their hair color maybe the style uh
[29:18] maybe the length you know there's a
[29:20] there's a really great Korean MMO out
[29:22] right now um they just released their
[29:24] character creator which is one of the
[29:25] best out there and and not to plug them
[29:27] or anything like that I hav zero
[29:29] involvement in it whatsoever I'm just
[29:31] I'm very impressed with the the level of
[29:33] customization that they brought it to um
[29:35] is called uh Black Desert I was going to
[29:37] say don't talking about Black Desert why
[29:39] not we play I played with that that for
[29:42] like 15 minutes so they just released
[29:43] the character and had this weird like
[29:46] distorted Eric stolon mask thing yeah
[29:50] and then you w into game with it it's
[29:51] like but in terms of hair customization
[29:54] I've never seen a better system never
[29:56] seen a better system um could do that
[29:58] with effect sure it's it's shiny hair
[30:00] but look at all the stuff you can do to
[30:02] it right you've got control points you
[30:04] can pull out the hair you can make it
[30:05] longer shorter you can crimp it you can
[30:07] do all these things with it and it's
[30:09] hilarious me talking about hair because
[30:11] I've got very little of it and you know
[30:13] like i' my my expertise in hair is
[30:16] pretty limited um but yeah we want the
[30:19] characters to be able to customize it
[30:20] and and again there's so many settings
[30:21] on the trust effects hair that we would
[30:23] have to then um persist and serialize
[30:25] it's probably just too much got
[30:28] important because all these systems
[30:29] don't exist don't won't exist in a
[30:32] vacuum as to be how they will imp will
[30:34] integrate with everything else that
[30:36] we're doing yeah and that is that is you
[30:38] know the the classic Tech director role
[30:41] is that we've got to make sure it works
[30:43] with kind of everything um and you can
[30:45] be the buzz kill unfortunately you're a
[30:47] bit of a kill Joy sometimes uh where
[30:49] it's like ah this would be an amazing
[30:50] feature in this one little situation but
[30:53] yeah okay but what's it do here what's
[30:56] it do here what's it do here so I'm just
[30:58] bummed it sounds like there's not going
[30:59] to be a Tomb Raider where she goes to
[31:00] space yeah right right and you I'm sure
[31:04] it can be supported it's not you know
[31:06] it's just is it worth implementing and
[31:08] then changing yourself I'm just happy
[31:09] you you finally confirmed that we will
[31:11] have hair in the game
[31:13] yes uh cuz we can write the lore that
[31:15] everyone in the future is the same bald
[31:17] man exactly same face same bald man same
[31:20] eyes some disease that eradicated the
[31:22] hair it turns out that's the perfect
[31:25] evolution of man is a bald guy we're all
[31:28] powder remember powder that was a bad
[31:31] movie all right matchmaking do you have
[31:34] anything to do with matchmaking or our
[31:35] lobby system not really think so I mean
[31:38] well a little bits and pieces like I
[31:40] work with Jason Neely on some of the
[31:41] game side stuff but uh I mean there
[31:44] hasn't been uh too much going like
[31:45] what's the what's the question about it
[31:47] like where's match about what what the
[31:49] future of matchmaking will be and stuff
[31:51] I didn't think right and that's actually
[31:53] it's it's not a it's not a bad question
[31:55] um really what we've uh and I'm not even
[31:58] sure if it's in yet uh is the ELO rating
[32:01] um so once the ELO rating is online um
[32:04] and you know it's funny because a lot of
[32:06] people think that just a little bit of
[32:08] trivia for you um uh the the ELO rating
[32:12] is actually a guy's last name it it's
[32:14] not an acronym it's not EO it's just
[32:16] it's the guy's last name that came up
[32:17] with it so just so you guys know but uh
[32:20] ELO rating is pretty important so that
[32:21] we can actually matchmake between um
[32:25] similarly skilled players cuz that's
[32:26] kind of the biggest concern right is so
[32:28] that you don't end up with a bunch of
[32:30] beginners in with the super expert guys
[32:32] right so I mean I expect that to come
[32:34] online but that will you'll likely see
[32:37] that come online as Arena commander
[32:39] makes uh further progress um but again
[32:42] the real focus is this is the mini puu
[32:45] really right now and once we've got you
[32:46] know Sim pods within the mini puu then I
[32:49] think you'll see a lot more work and and
[32:51] a lot more game types in Arena Commander
[32:54] will bullets from FPS guns be affected
[32:56] by artificial gravity
[32:58] or the lack thereof uh right now they're
[33:00] not they could be uh I mean that's a
[33:01] system that's already in the cry engine
[33:03] this the this this bullet drop uh is is
[33:06] basically the uh the term um and it
[33:08] whether it's artificial gravity or real
[33:10] gravity I think it's all technically
[33:12] artificial gravity because I mean it is
[33:14] a video game so it's all artificial um
[33:18] but we could um they're just right now
[33:20] we haven't been uh working ever at
[33:22] ranges that it would make sense right um
[33:26] yeah I'm not even going to try to spit
[33:27] on numbers but you know most of our
[33:29] firstperson combat scenarios don't
[33:32] really extend past 200 yards or 300
[33:35] yards right now um not not to say that
[33:38] they won't ever um because things like
[33:40] Planet Side and stuff like that will
[33:42] will will change that drastically uh but
[33:45] currently there just hasn't been really
[33:46] a reason for
[33:47] it gotta they're they're they're
[33:50] freaking out about the ELO rating right
[33:52] now oh what that did everybody know that
[33:55] and I just like dropped the trivia and
[33:56] I'm like oh I'm so smart because I know
[33:58] this yeah W you tell us what ELO rating
[34:02] is you said it was named after a guy but
[34:03] what is the ELO rating uh it's a way to
[34:06] actually well it's a way to give a
[34:07] single number uh to your to your skill
[34:10] set and this is based on kills deaths uh
[34:14] uh the time played I there's a formula
[34:17] actually it's it's just a like if you
[34:19] check the Wikipedia I think it's just a
[34:21] formula so but again I'm not really that
[34:24] involved in that side of it but I looked
[34:26] it up because I asked everybody one time
[34:27] I'm like what does ELO stand for I
[34:29] thought it was an acronym and nobody had
[34:32] the answer but Google did Goa uh okay
[34:36] how do you plan or do
[34:39] you sorry how do you plan to do if it's
[34:42] possible to do with the cry engine for
[34:45] transferring the mass inertia of a ship
[34:47] to its
[34:48] passengers uh I think A variation of
[34:50] this question I've seen before is Pilots
[34:53] will red out and black out M will those
[34:56] effects trans transfer to the people who
[34:59] are riding passengers in the ships it
[35:01] totally could um and that's a that's a
[35:03] really good question and we've talked
[35:05] about this a lot um a good and let me
[35:08] sort of take you and again I always turn
[35:10] these into a story or like a history um
[35:12] okay so we're two3 of the way through
[35:14] the so so the best the best way I can I
[35:16] can explain it was that uh with zero
[35:19] grav sorry with with the g-forces we uh
[35:22] there was an initial implementation on
[35:24] how the pilot reacted to g-forces and it
[35:26] was pretty crappy if I'm honest um the
[35:28] next thing that we did was reimplement
[35:30] or refactor it basically so that it uses
[35:31] a blend space and what what a blend
[35:33] space means is that this uh these
[35:35] GeForce reactions are now parametrically
[35:37] driven which is super cool because you
[35:39] can you can pass the GeForce data you
[35:42] know whatever the value is um uh you can
[35:45] pass that to a single animation set and
[35:47] it's just going to blend based on
[35:49] whatever that that might be the question
[35:51] that came up and this is now a little
[35:53] bit more to to the actual uh the topic
[35:56] um the question that came up during that
[35:57] is what happens in a local physics G
[36:00] ship like a constellation uh does the
[36:02] pilot sit there reacting to the g-forces
[36:06] whilst he's got co-pilots standing
[36:08] literally right next to him not doing
[36:10] anything um and and what we ended up
[36:13] coming up with was actually within the
[36:15] local physics to ship no you you would
[36:18] not actually feel any of this gravity
[36:20] change if it was artificial gravity this
[36:23] what do I know I'm not a physicist by
[36:24] any stretch of the imagination when
[36:26] you're in a ship that has artificial Gra
[36:27] gravity uh it's going to compensate for
[36:30] this effect start Tre called them
[36:31] inertial dampers inertial dampers right
[36:34] now uh where we do want some sort of
[36:36] reaction um and I mean does this make
[36:41] because there is a kind of a a problem
[36:43] with the design here um when you're a
[36:45] constellation pilot you still red out
[36:46] and black out but yet you're not doing
[36:49] any real GeForce reactions so does that
[36:51] really make a lot of sense not really
[36:52] but it's balanced is is kind of the
[36:54] thing um what we do want though is De
[36:57] reactions so Star Trek you know shaking
[37:01] in the seat whatever um but then we want
[37:03] people that are standing there to have
[37:05] some level of reaction we can't take
[37:06] control away from the player but have
[37:08] some level of character reaction uh to
[37:10] the damages and the things that are
[37:11] going on within the ship um do we have
[37:14] inertial dampers or anything like that
[37:16] not really not right now um and how it
[37:19] all works is just if you're within that
[37:20] physics grid you basically don't react
[37:23] uh uh to those things would that extend
[37:25] to items that are in the ship as well
[37:26] like cargo or MH like that so cuz I mean
[37:29] if you think about it yeah if we start
[37:31] doing that with the player we'd have to
[37:32] start doing that with the whole cargo
[37:34] and if your cargo's not strapped down or
[37:35] whatever and we don't want to have to
[37:37] force the character or the players to go
[37:39] to the back of the ship and get a tie
[37:42] down out and you know strap it down that
[37:44] would be super silly it's one of those
[37:45] things where we take it to the edge of
[37:47] realism and then we have to bring it
[37:50] back to someplace where it's totally I
[37:51] say this one thing all the time if you
[37:53] want realism go sit on the bus bench and
[37:55] tell me how fun that was you know I mean
[37:58] it's you know it's games after all we're
[38:00] take close to realism as we can and then
[38:03] bring it back to the point where it
[38:05] becomes fun yeah definitely remember win
[38:07] Commander had the same exact issue way
[38:09] back then you ship had in the fiction
[38:12] acceleration absorbers and in the first
[38:14] builds if your acceleration absorbers
[38:16] got destroyed and you tried to
[38:17] accelerate your guy just died just died
[38:19] and it was
[38:21] really it's not that much fun yeah it's
[38:24] not very fun at all right right now on
[38:26] crusader
[38:28] uh players that are inside the local
[38:29] physics grids can't be
[38:32] killed I think it was a bug fixed people
[38:34] Pilots were getting shot through so they
[38:37] that's right so they made anybody inside
[38:39] their invol right right now when
[38:40] somebody jumps on a ship you can't shoot
[38:42] them you can't do anything you can't
[38:44] fight people on uh Korea will run into a
[38:47] ship as a sort of a safeone as yeah it's
[38:49] like I'm safe I'm safe now that's funny
[38:52] are we going to fix that what's the plan
[38:54] definely well yeah absolutely we're
[38:56] going to fix that cuz of course of
[38:57] course we want Combat on the ships and
[38:59] I'm more thinking uh uh larger ships
[39:02] rather than you know consolation and
[39:03] Retaliator sort of thing uh but yeah we
[39:05] want combat to be able to go on on the
[39:07] ships if somebody's trying to board your
[39:08] ship you want to be able to defend it uh
[39:10] if there's people on your ship hanging
[39:11] out in a seat that you want to get rid
[39:13] of then you get rid of them um here's
[39:16] the trick is that H and it's interesting
[39:20] we just had a meeting about this this
[39:21] morning uh what we have to implement is
[39:24] a pierce ability system for our item
[39:25] components so this is something that I'm
[39:27] sure you know Chris will talk about or
[39:29] something like this uh where we have uh
[39:31] where we have Shield Hull and then the
[39:34] component within there and we need some
[39:36] level of Pierce ability for the
[39:37] projectiles however uh the way the
[39:39] Pierce ability system works in the
[39:40] engine right now is basically is can I
[39:42] go through it or can I not right so if I
[39:44] say yep you can go through the armor
[39:46] well I all of a sudden start getting
[39:48] lasers in the cockpit I got the pilots
[39:51] getting shot out every two seconds so
[39:54] basically we had to reel that back um
[39:56] and we've got to put sort of a deeper
[39:58] system in place with the Pierce ability
[40:00] not just a not just a logic check where
[40:02] it's you know can I go through it or can
[40:03] I not uh where there's actually a
[40:05] thickness to it um there's going to be
[40:08] certain areas in the ship that we just
[40:09] won't do that with um a good one will
[40:11] likely be the cockpit I can't confirm
[40:13] that for sure I'm not a designer by any
[40:15] stretch of the imagination we've
[40:16] actually literally the end of that
[40:18] meeting was okay design go off and you
[40:20] figure out exactly how you want that to
[40:22] work and you come back and let us know
[40:23] and then we will put it in as such um so
[40:27] yeah that was kind of a quick fix to
[40:28] make it so that yeah you weren't just
[40:30] getting shot out of your seat um the the
[40:32] the real Annoying one to me was when you
[40:33] were sitting in a turret and like
[40:35] somebody was shooting at you with a
[40:36] pistol or something like that and then
[40:37] that would shoot you out and I mean
[40:39] that's really cool in Battlefield if
[40:40] you've got like an M50 you know 50 cal
[40:43] sniper rifle and you shoot through some
[40:44] glass or something but I mean I would
[40:47] think that space glass is pretty strong
[40:49] um you know if you're going to have it
[40:51] as something to this you heard it here
[40:52] first space glass is strong pretty
[40:54] strong pretty strong transparent
[40:55] aluminum right
[40:58] so um yeah I mean the the long term to
[41:01] that is absolutely you will have combat
[41:02] within the ship but we don't want you to
[41:04] get shot with a laser from outside um
[41:07] into the ship just randomly okay uh the
[41:10] transparent aluminum com comment takes
[41:12] us to our next question Cool almost as
[41:15] if we planned it uh hello Sean hello
[41:18] hello hi hi that was it who was it as
[41:21] far as I understood the cry engine does
[41:24] not natively support rendering the world
[41:26] into subr
[41:27] for example as far as this person knows
[41:30] the C was intended to have a
[41:31] non-transparent cockpit with just a
[41:34] drawing of the outside world in a
[41:35] holographic manner right um is that
[41:38] still something possible it would be a
[41:40] great way to enhance immersion MH uh no
[41:43] and that's a it's a great question a
[41:44] great uh comment that that he and he's
[41:47] right um we didn't have the idea there
[41:50] was just never a need for it um of of
[41:52] subframes or basically like a picture in
[41:54] picture um is kind of what he means um
[41:58] we want it absolutely and there
[42:00] is inherently in the engine there is
[42:03] stuff that's doing something very
[42:04] similar um and the reason I say
[42:06] something that's doing it very similar
[42:08] is Stereo does something very similar um
[42:11] a stereoscopic rendering um or more
[42:14] specifically the post stereo technique
[42:15] not the Dual rendering but post stereo
[42:17] technique um um will render the scene
[42:19] twice but sorry it doesn't render the
[42:21] scene twice it renders the scene once
[42:23] and then actually uh um uh uh generates
[42:27] that second image based on all the stuff
[42:29] in that first frame so we could do
[42:31] something to this effect where we're
[42:33] taking that stereo render um whatever
[42:36] the second image would be created and
[42:37] actually map that down to a poly um the
[42:40] the trick is is that there's so many um
[42:44] screen based and now that we're camera
[42:47] relative rendering there's so many
[42:48] camera based and Screen based effects
[42:50] that we do I'm hitting the table again
[42:53] uh uh post effects um on the screen that
[42:56] that won't work very well um if you're
[42:58] trying to do a picture and picture sort
[42:59] of thing um so you can't do uh uh these
[43:02] full screen post effects on this tiny
[43:03] little thing but that's good because um
[43:06] uh there's other games that get arounded
[43:07] by not having any color on that not
[43:10] having any normal mapping on that um you
[43:12] can make another image uh with less
[43:15] render passes uh pretty quickly and
[43:18] we've just we really need an
[43:20] implementation case that makes a lot of
[43:21] sense to do that with one of the biggest
[43:23] things I want to do this with and this
[43:25] hasn't come from any designer but but
[43:27] I've talked about it a million times is
[43:29] that I hate the fact that as a pilot I
[43:31] don't know where my Gunners are looking
[43:33] I have zero idea and if I had a tiny
[43:36] little picture and picture of both
[43:37] turrets or even one that I could select
[43:40] where the guy was looking and I got some
[43:42] sort of remote view that would be
[43:43] amazing um so I I we're going to move
[43:47] that direction so that there is this
[43:49] sense of it's really to to to to get
[43:52] better teamwork going together uh in the
[43:54] ship so that you know one that you have
[43:56] a gunner two where he's looking so you
[43:58] can actually pile it in a way that
[44:00] actually that makes sense and three we
[44:02] need things like security cameras and
[44:04] things like that so you know it'd be
[44:06] really cool to have um if you're on a
[44:08] transport ship or or something like this
[44:10] to have a to have another security
[44:11] camera in the back so you can actually
[44:12] monitor your ship uh Capital ships are
[44:15] absolutely going to need this um so that
[44:17] you can actually check different areas
[44:18] of the ship for borders and stuff like
[44:20] that exactly without actually changing
[44:21] the full screen render um and then and
[44:24] then further examples of that is maybe a
[44:26] cockpit that's completely closed um you
[44:28] know how does that work um so there is
[44:31] ways to do it it it is absolutely not
[44:34] inherently um uh uh supported in the cry
[44:37] engine it's not something that it had
[44:38] ever had the idea of doing uh but there
[44:40] has been other lenses um not just cig
[44:43] that had interest in that and have done
[44:45] it um a good example um of a liccy that
[44:48] did it was a big red button when they
[44:50] did Sonic Boom um they actually made
[44:52] split screen rendering so that that is
[44:55] the exact same concept as as having
[44:57] little picture in picture so um it's all
[44:59] about using all that data that you get
[45:01] from one frame and and compositing an
[45:04] image based on some of the information
[45:06] that you can reproject onto that new one
[45:08] and in any game they usually a frame
[45:11] delayed there's usually one frame behind
[45:13] so whether or not people notice that's a
[45:15] different story so I hope that answers
[45:17] that it's you know kind of a
[45:20] roundabout you only go roundabouts okay
[45:22] that's true that's true here here's a
[45:25] here's a pretty simple direct question
[45:27] we'll see see how how concise an answer
[45:29] you can give to this one it's be a
[45:31] personal Sean Tracy challenge all right
[45:32] let's do it with the release of the
[45:34] Oculus Rift in the HTC Vive this year
[45:36] we're wondering if Squadron 42 episode 1
[45:39] is planned to have official VR support
[45:41] upon release yeah I can't answer that um
[45:44] I can't uh cuz actually I don't know um
[45:48] do we have VR support sure um is it an
[45:51] expected thing to support for squadron
[45:53] 42 release I expect so but it's really
[45:57] more of a question for Chris I can't um
[45:59] this is less of a technical question uh
[46:01] because absolutely could but then again
[46:03] everything's possible just a matter of
[46:05] time and money but yeah so can't really
[46:08] answer that and that's about as concise
[46:10] as it gets let's get that one in a TI
[46:12] for the Sherman all right
[46:19] um going through questions
[46:23] but folks like Sean wouldn't have
[46:25] anything to do with the scitec
[46:26] pre-orders stuff like that so no looking
[46:28] for questions that are actually relevant
[46:30] to Mr Tracy although I can comment on
[46:32] the scitech pre-or it's going to be a
[46:34] little bit longer we were planning to do
[46:36] it uh end of January um we've decided
[46:41] instead to do a little bit closer to
[46:43] when the actual items will be shipping
[46:44] they're they're firming up their uh
[46:46] production schedule now so uh it's not
[46:49] going to be in the not going to be
[46:50] immediately but it's still coming so is
[46:52] the design final can I ask can I ask a
[46:55] question um what I think it's pretty
[46:58] finalized okay like the really big one
[47:00] right like the the screen one and
[47:02] everything in fact isn't there people
[47:03] from side here who s I'm not sure
[47:05] they're FKS from here today actually oh
[47:07] is that the guys that were okay so got
[47:10] some guys walking around I had no idea
[47:11] who they were they seemed important yes
[47:14] they seemed very important I we don't
[47:15] know who they are yeah whatever all
[47:18] right uh integrated voice chat have
[47:21] there been any thoughts about that I
[47:22] know a lot of people have seen this uh
[47:25] there's a tech demo where there's
[47:26] positional audio where you hear people
[47:28] farther away when they get when they get
[47:30] farther away oh sure I mean that's not
[47:34] um and I I totally write that off like
[47:36] it's a easy thing um there a lot of the
[47:38] voice chat stuff does that already so
[47:41] team speak is it's a great example
[47:43] actually uh TeamSpeak you can set any of
[47:45] the users to be in a different 3D sort
[47:48] of area so you know I'm playing with you
[47:51] i' have you behind or over the right
[47:53] hand or wherever um for us to know where
[47:57] the other players are that are speaking
[47:59] is super easy I mean we we know that
[48:01] pretty much all the time um and within
[48:03] your vicinity we know it even more
[48:06] accurately uh so absolutely we can do
[48:08] this um The Cry engine already has a
[48:10] voice over IP system within it um it the
[48:14] quality is not really where anybody's
[48:16] happy with it right now um and actually
[48:18] the bandwidth is pretty high so we had
[48:20] talked to a couple vendors um that have
[48:22] different you know tech for this kind of
[48:24] stuff and really in the end we've just
[48:26] kind of decided that we'll just do our
[48:27] own um it it makes a lot of sense to
[48:29] just do our own now will it support the
[48:31] 3D position audio that's going to be a
[48:34] that's going to be a must um so it's
[48:36] definitely going to have to if you're
[48:38] piling a ship and you know again Connie
[48:40] is a good example you got two co-pilots
[48:42] right and this guy says something I yes
[48:45] definitely it has to come out of the
[48:46] right ear I mean it's going to sound
[48:48] absolutely ridiculous it's just a
[48:49] disembodied sort of voice um where
[48:52] things get even crazier is is some of
[48:54] the ideas uh that have been floting
[48:56] around about runtime facial stuff
[48:59] whereas you know the guy is talking and
[49:02] you look over and his guy's Flappy lips
[49:04] sort of thing yeah your webcam is
[49:06] recording your face and as you move your
[49:07] exactly so that's there's there's little
[49:10] bits and pieces of R&D on this like and
[49:12] it might it might surprise you to know
[49:14] that a lot of our facial animators will
[49:16] just capture their own faces a lot of
[49:17] the times when they're testing stuff
[49:19] they're just with their webcams sure I
[49:20] mean um and uh actually in one of the in
[49:23] the bishop Tech demo uh there's a big
[49:25] range of motion that he does that was
[49:27] all captured from the facial animator
[49:29] from his webcam so I mean all this all
[49:31] that Tech exists is just what's the
[49:33] priority of it not that high right now
[49:36] um we know we can do it uh it's going to
[49:40] benefit the players better when there's
[49:42] a better party system when that's a
[49:44] little more clear um yeah I I mean I I
[49:47] just it's a bit cart before the horse
[49:49] right now so do we know how we'll do it
[49:53] yeah we have a pretty good idea so a
[49:55] better party system is there a better
[49:57] party system coming to Star citiz there
[50:00] will be eventually absolutely but here's
[50:02] the thing the the party system still
[50:03] doesn't work as it's designed right um
[50:06] the contact system is not perfect by any
[50:08] stretch of the imagination this is one
[50:10] of my biggest frustrations with the game
[50:11] right now because I mean it doesn't we
[50:14] don't have to reinvent the wheel on this
[50:16] is my opinion is you know there's a
[50:18] bunch there MSN doesn't exist anymore
[50:20] but uh Skype uh Yahoo messenger I mean a
[50:24] billion different communication um um
[50:28] messaging systems that have been created
[50:30] before and there's no reason for us to
[50:31] reinvent the wheel so we should just be
[50:33] kind of doing what works um so for me
[50:36] that that's a big frustration but that's
[50:37] got to come online before you even worry
[50:39] about some of that Vib stuff um so
[50:44] yeah all right got time for a couple
[50:49] more
[50:55] questions what what important Tech are
[50:57] you not sure about what important Tech
[51:01] are you not yet sure about will
[51:05] work that's a great question CU it's
[51:08] it's kind of our job to to know how each
[51:13] and Let Jesus got on the roof elephants
[51:17] on the roof sorry I know we shouldn't
[51:19] even people to stop us from answering
[51:21] this
[51:21] question uh
[51:25] yeah yeah I it that's that's a tough one
[51:27] I'm going to have to think a couple
[51:28] minutes about that and in doing that
[51:30] I'll just I'll just fill the air with
[51:32] with words um normally our job is to
[51:36] know how we're going to attack something
[51:38] and I mean really very seldom do we just
[51:40] jump into something and have zero idea
[51:42] with a naive level of sort of
[51:44] development the stuff that scares me the
[51:46] most is the stuff that we don't know
[51:48] that we don't know and I know that
[51:50] sounds kind of you know nebulous but
[51:53] that's the stuff that bites us um is
[51:56] when you're not not sure there's going
[51:57] to when you don't know about a problem
[51:58] that's going to be coming because if you
[52:00] already know that this problem's going
[52:01] to come you have some sort of solution
[52:02] that we can come up with and we've done
[52:04] that in almost every case that's
[52:06] Universal to all game development
[52:08] absolutely human thought really sure
[52:11] sure and and those are the things that
[52:12] scare me the most so if if I was to
[52:14] answer the question I would say the
[52:16] stuff that we have not yet seen that it
[52:19] is going to be a problem that's the
[52:21] stuff that I'm I'm the most worried
[52:23] about and that I don't know how to solve
[52:25] because I don't know the problem that's
[52:27] why they call it one of the reasons why
[52:28] they call it game development not game
[52:30] building we're not we're not there's no
[52:32] blueprint at the very beginning we're
[52:33] just building what somebody else has
[52:34] already figured out you know just a to B
[52:37] to C to D we are discovering and
[52:39] exploring the the solutions and the
[52:42] options that we have towards making the
[52:43] game throughout the entire process and
[52:45] we will be right up to the point where
[52:47] we we release the game and even after
[52:49] that absolutely um yeah I mean most of
[52:52] us want to just keep building up on
[52:54] stuff and you know if if any one of the
[52:57] these developers got 6 months to work on
[52:59] one thing they would come up with so
[53:00] much new so many different things um and
[53:04] again it's just really about triaging
[53:06] how much time you you you can allow them
[53:08] to spend on certain certain pieces of
[53:10] attack okay will local gravity in a
[53:14] system ever affect the the performance
[53:17] of a ship like when a ship gets closer
[53:19] to a planetary body a star a planet or
[53:22] something maybe just a really big
[53:24] asteroid we all want this yeah uh we do
[53:28] um what it will be is can't believe I'm
[53:31] calling this a smaller scale will be on
[53:33] a planetary scale uh originally so as
[53:36] you approach a planet that's when it's
[53:38] going to do something um the ranges I
[53:41] couldn't even begin to tell you about
[53:43] likely what you'll see is that when you
[53:45] start doing the atmosphere entries
[53:47] that's when you'll be affected by that
[53:49] planet's gravity now are you going to be
[53:51] affected as you just approach it is
[53:53] there going to be a station
[53:54] orbiting not out of the gate G um
[53:57] there's a lot of problems to solve in
[53:58] there and one of the biggest ones is
[53:59] just relative velocities um because if
[54:02] you've got a space station you know
[54:04] orbiting a planet that's the Space
[54:06] Station's moving at you know whatever
[54:09] 13,000 miles an hour um and your ship
[54:12] only really moves at 300 how do you ever
[54:14] get to the station right it will always
[54:16] outrun you or you know things like this
[54:19] um unless you then have yeah right some
[54:22] level of gravity that will give you a
[54:23] gravity assist give you the velocity to
[54:25] actually catch up to that and be in that
[54:27] same frame of reference but that yeah I
[54:29] mean it opens up so many so many
[54:32] problems um so originally originally um
[54:36] out of the gate uh you can look forward
[54:38] to the planets yes having some gravity
[54:40] uh that will affect you as you as you
[54:41] get close and and I'm talking pretty
[54:43] close um but not when you're super far
[54:45] away or anything like that now having
[54:47] said that we've got all sorts of tech
[54:49] online for Gravity Wells gravity streams
[54:53] um so whether there's like a nebula that
[54:55] has weird gravity with in it whether
[54:57] there's a black hole that sucks you in I
[55:00] mean there's all sorts of different
[55:01] things that we can do with gravity right
[55:02] now um we just don't have the designs
[55:05] really solidified for for what they all
[55:07] need to do um is the thing but we've got
[55:09] all the tech online to do that stuff
[55:11] with and it could absolutely um be done
[55:14] would there ever be a a ship that could
[55:16] affect another Ship by proximity as it
[55:20] not like just in terms of it mass or
[55:22] it's like a weapon or something like
[55:24] like like the Vandal King ship or
[55:25] something like that was that Ian I'm not
[55:27] a physics person I'm I'm I'm a little
[55:30] bit and I'm not sure that it would even
[55:33] have mass enough to do that I mean what
[55:35] do I know though how much does a
[55:36] kingship weigh 50 lbs at least Lots over
[55:40] 9,000 easy um so yeah no that's a that's
[55:44] a good question I I doubt that you'll
[55:46] see it on the ships though um it just
[55:47] doesn't really make a lot of sense
[55:49] unless that ship is just gigantic I
[55:51] would think though if there's a weapon
[55:53] of some sort like a gravity generat like
[55:55] gravity well gener yeah that' be super
[55:57] cool sort of what an interdictor is
[55:59] though isn't it uh ships interdiction
[56:02] ships create artificial gravity WS to
[56:04] pull things out of I don't know anything
[56:06] about interdiction ships yet Jared I'm
[56:09] just talking about in sci-fi in general
[56:10] SciFi not specifically to start um yeah
[56:13] I think that'd be cool I think it'd be
[56:15] cool to have weapons that actually
[56:16] modify the gravity in certain areas
[56:18] that'd be cool uh somebody was asking
[56:20] how we test multigroup functionality if
[56:23] the lobby system sucks so much uh it's
[56:25] cuz we don't test on live servers we
[56:27] test on internal builds with internal
[56:28] servers where we don't have to fight
[56:30] with anybody to get in uh yeah that and
[56:32] that's kind of the win there and also we
[56:34] can increase the player count as we need
[56:36] to internally um it's really it's a
[56:39] pretty quick sear for us um to to change
[56:42] that um all right let's look for our
[56:45] last question cuz we are pretty much out
[56:46] of time already oh that was fast y
[56:49] That's why we like these ones that's why
[56:50] we invited you it's like we bring you in
[56:52] it's a day off for us it's a day off for
[56:54] us great uh da da are you imp here we go
[56:59] are you impressed with how far star
[57:00] citizens has pushed cry engine did you
[57:03] think it would ever be used in this
[57:04] context
[57:06] um in in this context I.E like solar
[57:10] system scaled nah uh no like I mean even
[57:13] even at the original onset when I was
[57:15] when I was demoing the engine for Chris
[57:17] uh you know years ago uh the the scale
[57:20] of the game was smaller right um we
[57:22] never expected to do a solar system
[57:24] scale or anything to this sort of effect
[57:26] um I'm super impressed with where the
[57:29] engine has gone with this and in fact
[57:31] you know it very little there's still
[57:33] cry engine in there but I mean there's
[57:35] so many improvements across the board um
[57:38] that I'm
[57:39] super re I say super a lot um I'm really
[57:43] impressed with anyways uh one of the
[57:45] biggest ones is the local physics grid
[57:47] stuff uh it's a unique sort of selling
[57:49] point within Star Citizen it's a it's a
[57:51] unique feature that I've not seen in any
[57:53] other game uh and that that by itself um
[57:57] just experiencing that was really really
[58:00] really cool to see um additionally I
[58:02] mean there's so many changes around
[58:04] there um the 32-bit uh uh inverse depth
[58:07] buffer stuff so that we can actually
[58:08] render out to that that sort of distance
[58:10] and then when I first did when I first
[58:13] loaded the procedural Planet when it had
[58:15] terrain streaming working all properly
[58:18] the scale I've I I've gotten so used to
[58:21] working on you know really
[58:24] really they're small now you know an 8
[58:26] kmet level to me was massive right
[58:29] because if you're talking terrain and
[58:30] just running around as a guy that's a
[58:33] that's a lot of terrain uh to work with
[58:35] so the scale just boggled and it's not
[58:38] even mindboggling it really screwed up
[58:40] my sense of perception even in the
[58:42] editor cuz I might be working around and
[58:44] I've got this planet there you know it
[58:46] just looks like a little sphere or
[58:47] whatever and I start zooming in start
[58:49] zooming it I'm zooming it I've got to
[58:51] turn up my camera to a th000 MERS a
[58:53] second um and just to give you an idea
[58:55] of like the the the the amount of change
[58:57] that goes on in the engine we have these
[58:59] little buttons for camera speed and we
[59:01] had
[59:02] 0.1.1 and 10 or a one and 10 so we've
[59:06] had to now add 100 a th000 and we even
[59:10] have a 10,000 one but there's no real
[59:12] yeah no reason for that yet um it's just
[59:15] crazy the the the scale differences to
[59:17] sort of wrap your heads around so yeah
[59:19] I'm super impressed with the with the
[59:20] stuff that's been done to the engine and
[59:22] no I never expected I never expected to
[59:25] see it to this scale I guess is uh is is
[59:28] the the
[59:30] answer well cool that wraps up uh the
[59:33] January special subscriber edition of
[59:36] RTV awesome uh thank you so much Sean
[59:38] Tracy for coming on and uh taking over
[59:41] and letting us sit here and pick your
[59:42] brain it's exciting stuff I love this
[59:45] stuff U around the verse is tomorrow uh
[59:48] uh regular RTV will return on Friday uh
[59:52] we'll see if we can't get some some of
[59:54] our special visitors to pop in maybe and
[59:57] uh anything else you want to add before
[59:58] we sign off you got a little bit of
[59:59] housekeeping too sure um let's see folks
[1:00:02] have been asking about the uh the
[1:00:04] package split between Star CI Squad 42
[1:00:07] it is not happening January but we do
[1:00:09] have a date now which will be February
[1:00:11] 14th um we'll reiterate all of these on
[1:00:14] uh around the verse and uh that other
[1:00:17] show we to reverse the later in the week
[1:00:19] but give people heads up as best we can
[1:00:21] um the one-time used melt tokens for the
[1:00:26] uh buyback store the buyback store are
[1:00:30] going to be distributed on Friday that's
[1:00:31] going to let you bring back one one ship
[1:00:35] package whatever with uh store credit um
[1:00:38] it's one time use only so be careful
[1:00:40] what you de decide um what else I feel
[1:00:44] like there was a third
[1:00:46] thing I don't know what it is though
[1:00:49] maybe there's not a third thing all
[1:00:51] right we will uh we'll see you guys very
[1:00:54] soon all right guys take okay thank you

# 10 for the Developers: Episode 11

**Video:** https://www.youtube.com/watch?v=Qhx_0AIniws
**Date:** 2016-05-23
**Duration:** 40:01

## Transcript

[00:00] [Music]
[00:14] [Music]
[00:25] [Music]
[00:28] oh hello hello how are you how you doing
[00:30] I'm bad not bad not bad good who are you
[00:32] so I'm Randy Vasquez I'm associate
[00:35] producer here at cig who are you
[00:37] producer I'm a producer you know who I
[00:38] am I don't know who you are I'm the Bug
[00:40] Smasher no one watches that
[00:45] show I'm the Bug Smasher Mark aent
[00:48] gameplay programmer and everyone watches
[00:50] me it's true not even creepy a little
[00:55] bit creepy Well we'd like we're here to
[00:57] answer some questions first we'd like to
[00:59] thank the subscri
[01:00] for everything they've done to make this
[01:02] possible for us to have you know this
[01:04] show for 10 developers and I guess that
[01:06] one show you just mentioned what was it
[01:07] again I forgot already I don't remember
[01:09] I don't have coffee anymore something
[01:11] about smashing bugs Bug Smasher I think
[01:14] sounds right
[01:16] yeah so let's get started all right
[01:19] let's start off with our first very own
[01:21] question from bacon of War I do like
[01:24] bacon bacon
[01:30] all right bacon says have you ever had a
[01:33] bug that fixing it turn cynical IE you
[01:36] fixed a bug in the piece of code but
[01:38] that caused this piece of code not to
[01:40] work so you fix that bit of code only to
[01:43] find that it broke the original piece of
[01:45] code again so bugs turn cynical or C
[01:49] cyclical
[01:51] cylindrical okay with that yeah yes oh
[01:54] yes bugs have turned cinical and
[01:58] cynical this happened recently um for
[02:02] 2.4 we're having this uh persistence uh
[02:06] Shenanigans where you can you know walk
[02:08] up to your ship and you know if I have a
[02:10] cup on the ship or a weapon I could
[02:12] select it and remove it and add maybe a
[02:15] pencil a gun or something and in order
[02:18] to see that interaction we had to use
[02:21] our interaction system which was all
[02:23] developed for item system 2.0 not for
[02:26] the original item system so we had to
[02:29] basically start making the original item
[02:32] system work um with this interaction
[02:34] system which meant we had to install a
[02:36] new network um component a new physics
[02:39] component and finally the interaction
[02:42] component and the interaction component
[02:44] and network component were like all
[02:45] right I'll work I got this cool physics
[02:48] component was like nah nah nah I got
[02:50] bugs for you so we when I finally got it
[02:54] installed got it in QA started finding
[02:56] some bugs we had a flood of bugs coming
[02:58] cuz like all QA was like I mean like all
[03:00] the stuff is now we you're falling
[03:02] through things like the turrets were not
[03:04] working you could put a poster on the
[03:06] wall walk up to it slap it and it' fall
[03:09] down to the ground you could there's
[03:11] like a weapon um thing to restock ammo
[03:14] and you could push it into the wall and
[03:16] I was like oh no what did I
[03:20] do so yes you you fix one and then a
[03:24] bunch more come up cuz QA especially
[03:26] Andrew he'll call you up have this
[03:28] cynical laugh and go
[03:30] I found something you're like oh God
[03:32] it's even worse when he reopens it and
[03:33] then like just lets you know he's like
[03:35] by the way re not only does when he
[03:37] opens it he Skypes you directly and to
[03:41] give you that laugh it's
[03:44] great so yeah fix them break them
[03:48] happens all the time and then you just
[03:49] go back and fix it luckily that's why we
[03:51] have QA QA is awesome yes oh my God so
[03:55] the next one is actually um it's
[03:57] actually before my time but p one one
[04:00] one one one did I miss a one I think
[04:04] there's four more ones four more
[04:06] ones um so he says I heard a neat story
[04:09] that when the first physics stuff was
[04:11] being built for Star citizens the
[04:12] spaceship movement was bugged and the
[04:14] guy in charge of this was trying to
[04:15] figure out what the heck was going on
[04:17] double cheing triple checking everything
[04:18] to find out what was going on he talked
[04:20] with Chris Roberts at some point and he
[04:22] said oh yeah cry engine simulates
[04:25] everything as if it's underwater now if
[04:27] I probably got something wrong in the
[04:28] story above but but I want to know if
[04:30] there's any similar stories to share
[04:32] about someone losing lots of sleep
[04:33] trying to figure out a problem that
[04:35] turned out to be incredibly easy to fix
[04:36] if you just knew that particular audity
[04:38] of the engine so I don't I didn't even
[04:40] know about this story what is what is
[04:42] this oh this is a great story so this
[04:44] happened roughly two years ago before we
[04:47] even launched uh Arena commander and we
[04:51] had our physics programmer John pitet he
[04:53] flew out from Kansas and we were working
[04:55] with him trying to get you know R
[04:56] Commander one out and everything was
[04:59] going sort of working well and then all
[05:01] of a sudden our ships just started
[05:03] acting weird you you'd fly but it would
[05:06] go the wrong way and then you would just
[05:08] stop so like our missiles sometimes
[05:11] worse actually our missiles were
[05:12] underwater but that's another story um
[05:15] but yeah uh and we're trying to figure
[05:18] out what's going on and John pritchet
[05:21] he's debugging debugging this I think he
[05:22] spent like two or three days cuz we're
[05:25] all still new at the engine especially
[05:27] him trying to figure out what's going on
[05:28] with physics the game code is the
[05:30] thrusters it's whole big system yeah and
[05:35] he finally figures it out he walks up to
[05:37] us and he goes I still remember his face
[05:40] our ships are
[05:42] underwater everyone around just looks
[05:44] and goes can you repeat
[05:47] that our ships are
[05:50] underwater and what happened is um cry
[05:54] engine by default like if has water
[05:56] under everything under every single
[05:57] level in cry engine has water if you
[05:59] think of an um like XYZ plane you have X
[06:03] and then maybe Y and then Z up and down
[06:05] so if this table was the XY and then Z
[06:08] up and down anything below zero would be
[06:11] considered water so any entity that went
[06:15] past 0000 instantly got the water flag
[06:19] so if you were flying up in here you'd
[06:22] be fine soon as you go down here you're
[06:23] in water even though the plane is
[06:26] invisible cuz like you can't really even
[06:27] though we got rid of terrain and got rid
[06:29] of water for space you were still going
[06:31] underwater nice and it was like a simple
[06:34] fix it was just like really oh my
[06:38] gosh and there's been many bugs like
[06:41] that but H that's kind of awesome I can
[06:44] see I can just see John's face to is
[06:46] like by the way by the way this thing
[06:49] water yes everything's in it yes cool I
[06:53] I don't even know how you knew that but
[06:55] that was a good that was a good
[06:58] story all all right let's go on to our
[07:01] next question yep so Mr mortise rigger
[07:06] oh that's good we have I have to say
[07:08] before I go on to this question we have
[07:10] I'm gonna get we have a guy named John
[07:13] and his last name is rigs so we call him
[07:17] rigs the rigger yeah he doesn't like it
[07:20] hopefully he doesn't see this but rigs
[07:22] the
[07:22] rigger so Mr mortise rigger um bug
[07:26] smashing open development versus closed
[07:28] development pros and cons go favorite
[07:31] proon most hated con go so we actually
[07:34] talked about this for a little bit in
[07:37] that there's a big difference in the
[07:39] team setup when you're live and
[07:42] basically open development compared to
[07:44] when you know you're behind closed doors
[07:46] and the players don't get a chance to
[07:48] see what you're actually working on cuz
[07:49] like I remember when I was a designer
[07:51] working for other Studios and when we
[07:54] before we released any betas or Alphas
[07:56] or anything like that like we were able
[07:58] to just work on a feature and really
[07:59] nail that feature down and we also had
[08:01] like you know QA didn't really bug it up
[08:03] because they knew it was being worked on
[08:05] where now in like open development we're
[08:07] always live and people get to see
[08:09] everything we do every single push and
[08:11] the features we push forward like QA is
[08:14] again QA is awesome because they're like
[08:16] they're basically our lastline defense
[08:18] as well as they're on all the bugs on
[08:20] live they're on the bugs on the features
[08:22] so they're bugging everything and they
[08:25] even talk with the community to find
[08:27] what they have and going back and forth
[08:29] all the information then drop it on our
[08:31] desk going okay yeah so it's like it's
[08:35] it's I think like open development to me
[08:36] takes a little bit longer I think that's
[08:38] the con but again we get really valuable
[08:41] feedback really early on I know um what
[08:44] port modification and the 2.4 stuff
[08:45] we've been working with like the private
[08:47] group we've been getting a lot of
[08:48] feedback on some of the features that
[08:49] we're trying to push out and stuff we
[08:51] didn't even think about like oh yeah
[08:53] yeah okay cool we didn't catch that cuz
[08:55] I mean QA I think we have like maybe 30
[08:57] people if that I don't even know the
[08:59] actual number I think there's more cuz
[09:01] UK and Austin have a lot yeah but it's
[09:03] like I don't know like I think it might
[09:04] be about like 30 something people and
[09:06] that's not enough people like all the
[09:08] stuff we need from there is like we need
[09:10] more we need more people to test big so
[09:12] that's good that's the definitely good
[09:14] Pro for having open development and
[09:16] everything like that where closed
[09:17] development we don't have those same
[09:18] numbers of people being able to jump in
[09:20] and stuff like that and getting play
[09:21] test sometimes getting everyone involved
[09:23] is kind of crazy especially like trying
[09:25] to get devs to like take time out of the
[09:26] day to to play tests which we do do
[09:30] from well that's why you go around going
[09:32] ready to play test ready to play test
[09:33] ready to play test you're like bit five
[09:35] minutes five
[09:36] minutes so yeah that's kind of the pro
[09:38] and con I have for um open development
[09:41] versus closed development I don't have a
[09:44] preference sometimes I have a pre like
[09:45] if I'm working on a feature I have a
[09:46] preference you know but if I'm not
[09:48] working on a feature and I'm like just
[09:50] helping support stuff then I definitely
[09:52] prefer one the other so
[09:54] yeah anything on you good all right
[09:57] let's go to the next one um next
[09:59] question
[10:00] from am I don't know how to say that
[10:05] am hi Mark and Randy
[10:09] hi I understand that Mark is both a
[10:11] feature program and a Bug Smasher at cig
[10:13] do you typically get signed to squash
[10:14] your own bugs also bug smashing seems to
[10:17] be largely entirely directed at coding
[10:18] errors does cig have a similar system in
[10:21] place to smash design bugs and then how
[10:24] do you smash how do you smashing bug
[10:26] code bugs and fix and design errors
[10:28] compare so so this all kind of lumps
[10:31] into big one thing like I know I'm
[10:33] always talking with the engineers I'm
[10:34] always talking with the designers and
[10:35] stuff and design is kind of a weird
[10:38] thing in that designers are kind of the
[10:40] glue for a lot of different departments
[10:42] and all the Departments here at cig like
[10:44] they work closely like hand in hand like
[10:46] how many times do you work with
[10:47] designers at least like every day and
[10:49] then also how many times do you work
[10:50] with artists so every single department
[10:53] is kind of use the word cyclical like
[10:55] they all work together they're always
[10:57] because you and Mark McCall are always
[10:58] working on stuff together so the tech
[10:59] content team the tech artist the regular
[11:01] artists when they're making geometry if
[11:03] the geometry is not working right with
[11:04] the tech then you have to go back and
[11:06] forth I know Ariel is working on the
[11:07] port editor stuff yeah so like he's been
[11:09] working with the artist big time over
[11:10] the past like two three months he's been
[11:13] working and then also working with the
[11:14] designers as well because make sure when
[11:16] they use the tools they can kind of go
[11:18] from there so yeah it's
[11:20] like I don't really think that it is a
[11:24] specific system to like the whole entire
[11:27] company but like every department has
[11:28] their own processes in which they handle
[11:30] the bug like um some of the stuff with
[11:32] the ships I know you and Kirk talk a
[11:35] bunch because Kirk's like hey what's
[11:37] going on with this what's going on this
[11:38] and like you and Sh were talking about I
[11:39] think um some of the weapon stuff like
[11:41] what last week or was the week before I
[11:44] don't know remember well it's like um
[11:46] with the new item 2.0 stuff like since
[11:48] we're changing a lot of the systems I'll
[11:51] go to design go hey this is how I'm
[11:54] thinking of implementing it cuz they're
[11:55] the guys that are actually going to do
[11:57] the Brute Force work of here's the XML
[11:59] here's the records stick it all together
[12:02] I go here's the flow I'm thinking what
[12:03] do you have an opinion on what do you
[12:05] think and they'll give me a feedback and
[12:07] then I'll go to Evil Mark or Mark mall
[12:11] and all other marks are
[12:13] evil even this one even this
[12:16] one but I'll go also to evil mark
[12:18] because he'll do the like um asset and
[12:22] animations and Link those together with
[12:25] the items so design has specific Area
[12:28] Tech design has a specific area so I'll
[12:30] go to each one to make sure that when
[12:32] I'm making this new stuff that they both
[12:34] work together yeah so yeah it's a big
[12:37] mix like there's like I said like
[12:40] everybody everybody has their own
[12:41] process and what they need it really
[12:42] depends on what the bug is and what they
[12:44] need for it and who to talk to so cool
[12:47] let's go to the next one all right
[12:48] sounds good Mr Steve
[12:51] Hunter hey guys thanks for all the hard
[12:54] work you're
[12:55] welcome we do hard work I thought we do
[12:58] fun work I hav fun I think it's fun
[13:00] sometimes all the time most of the time
[13:02] uh when fixing bugs have you ever had an
[13:05] occasion where it was fixed in one place
[13:07] only discover later that the actual
[13:08] cause was in some other place so you had
[13:11] to do the proper fix and undo the
[13:13] original fix yes
[13:16] yes um I actually did a Bug Smasher
[13:19] video yeah you know that
[13:22] show never seen it I have to edicate you
[13:25] after this actually I think I'm on one
[13:27] or two of
[13:28] them no that's t or something may I
[13:31] don't
[13:34] so um yes all the times so I guess the
[13:38] example would be going back um with the
[13:41] new item system um we have these
[13:45] entities uh or items and they have I
[13:49] love having this stuff maybe it has this
[13:52] cup as what it looks like and it's
[13:55] physics so if I hit the cup it you know
[13:57] reacts and and it um is just one thing
[14:02] that we have we designate a slot where
[14:04] this geometry and physics go and we
[14:06] could have a number of slots but for
[14:08] most part uh we have one slot and our
[14:10] old items had one slot but to get this
[14:13] interaction system up and running we
[14:14] need to have um physics in different
[14:18] locations in you know maybe this one
[14:19] opens a door this one turns on power so
[14:22] we had to have another physics thing so
[14:25] now we have two slots in this entity and
[14:28] we had to physical
[14:29] both and it should have been as simple
[14:32] as
[14:34] saying1 and what that would do is go if
[14:37] it's negative 1 it'll go through each
[14:38] slot and physicalize it that was
[14:40] something we've did about two years ago
[14:43] for the vehicle system however um it was
[14:46] working when we attached this these
[14:48] items to ships but then as soon as you
[14:51] detached it and put it onto the ground
[14:53] it had no physics and it was because of
[14:55] that change and I were like what's going
[14:58] on this used to work this worked two
[15:00] years ago it's always kind of funny when
[15:02] like bugs like that pop up because then
[15:04] you guys are fighting old code and they
[15:05] mean like whoa whoa whoa so we did we
[15:07] want we want this to happen why is this
[15:09] happening then like kind of dig it in
[15:10] like sometimes I know you guys are like
[15:12] one time I think you came came over
[15:13] Destin was like you had like 12
[15:15] different files open you're just like I
[15:18] don't know where it is I'm just tracing
[15:21] back the history but ultimately I did
[15:24] find what was causing that and it was
[15:27] when it hit when it was negative one
[15:29] just early aborted while the code that
[15:30] we had back then was just missing and I
[15:33] literally was tracing back to history to
[15:35] find what happened cuz I'm like this
[15:37] code was there and I find it way back I
[15:40] think it was a year ago there was an
[15:42] integration from like a newer engine
[15:44] engine version to some new tech for like
[15:46] 64-bit and during that it removed some
[15:49] code and we just never noticed this
[15:51] because we never had to do this type of
[15:54] thing yeah um the vehicles ended up
[15:56] getting a completely different code so
[15:59] we never noticed it until we put this
[16:01] item in and then so yeah I was like all
[16:03] right here's the old code that used to
[16:04] work and then now when we plop this
[16:07] thing down the ground it has physics
[16:08] it's just like the history is haunting
[16:10] me it's like I fixed this ago don't envy
[16:14] that at
[16:15] all but luckily oh I love per force you
[16:18] could just scroll through the history
[16:20] and like where'd it go where it go there
[16:22] it
[16:23] is it's called the blame history yeah so
[16:27] the next one actually for me
[16:29] is um from Sloan Warrior when an
[16:31] impending release rears its head roughly
[16:34] how much of the company would you say is
[16:35] devoted to getting the release out bug
[16:37] Smash and testing and so on conversely
[16:39] how much of the company isn't impacted
[16:40] by the release cycle and simply
[16:42] continues to make content this one right
[16:44] here is kind of a mixed bag and can't
[16:46] really answer it because this is a case
[16:48] by case for instance this release um
[16:51] we're working on you know persistence
[16:53] we're working on shopping working on
[16:55] item 2.0 here specifically and then
[16:58] we're working on refact in little things
[17:00] here and there and then the art time art
[17:02] ah the art side they're actually working
[17:03] on like the caterpillar and then like
[17:05] you know Jeremiah and om they're all
[17:07] working on like more character stuff
[17:09] Shane was working on like a cool um
[17:12] jetpack that's supposed to be going in
[17:13] this release too so every single
[17:16] person's working on tons of different
[17:17] things ton of different aspects and
[17:19] they're not necessarily all working on
[17:21] the same thing but they're all working
[17:23] towards the goal of the release and
[17:25] every single release we have a goal we
[17:27] like all right these are the main points
[17:29] we want to put into this release and
[17:31] then we kind of go from there and it
[17:32] goes back to even the bug fixing it's
[17:33] the same thing with task with task
[17:35] fixing and task like you know management
[17:37] of going through and making sure like
[17:40] all right what support does this task
[17:42] need and then kind of going from there
[17:44] so I know you've actually been pulled
[17:46] off sometimes from doing the feature
[17:48] stuff cuz I know you're working on you
[17:50] was working on seats controller manager
[17:52] with some of our new Engineers we're
[17:53] working on Signal links and stuff and
[17:55] piping and making sure all that stuff
[17:57] situated but then aent here gets like
[17:59] pulled off and like oh okay well two4
[18:02] needs help with this so I'm going to go
[18:03] help out that so he will take a day or
[18:05] so here and there and like Paul has been
[18:07] a mad man like he's crazy out those yeah
[18:10] dude he's been really helping out the
[18:12] 2.4 stuff and he's been focused on that
[18:14] so that way like his team can continue
[18:17] just focusing on the feature and but
[18:20] he's a beast anyways like I mean he the
[18:22] amount of stuff he knows about the
[18:23] engine and amount of stuff that he just
[18:25] knows globally is just insane like my
[18:28] brain only fit so much you can talk to
[18:30] him and say something he'll like give a
[18:32] second the brain starts ticking and then
[18:35] then he spits the answer on you're like
[18:36] okay yeah so no it's basically
[18:40] everything and that's every release it's
[18:41] completely different so the stuff we
[18:43] have planned for 25 and going forward
[18:45] it's going to need different resources
[18:46] so and this is going to be spread across
[18:48] like you know all the different Studios
[18:49] that we're working with whether it's
[18:51] like you know Frankfurt UK Austin here
[18:53] in La even the guys at turbulent stuff
[18:56] like we're all just working on different
[18:58] aspects of it and need different things
[19:00] just from each release so every single
[19:02] release has its own little snowlake and
[19:05] to add on to that it's like I could be
[19:06] working on you know the subset of stuff
[19:08] for the new items things and then I
[19:11] can't work on the next thing because I'm
[19:12] waiting something from Patrick or even
[19:14] Chad so I take my code and I put up for
[19:17] a review and I go wait meantime I go bug
[19:19] Paul saying hey I'm blocked by this is
[19:21] there anything I can help with yeah and
[19:22] then I'll just help with some two4 stuff
[19:24] or some other things and then once I get
[19:26] unblocked I'll swap back yeah and right
[19:29] now I think like um actually
[19:32] between you between Paul you and Chad Z
[19:35] now like you guys are the old people
[19:36] here for
[19:37] engineers like you guys are V to the old
[19:40] crew and like now we have a few we have
[19:41] a few new engineers and stuff coming and
[19:43] then hopefully when we get humph he'll
[19:45] be actually kind of an old head too CU
[19:47] he knows the engine really well he'll be
[19:48] another senior here he's another Paul
[19:50] yeah I know it's going to be crazy
[19:51] having you three
[19:53] together all right so hope we answered
[19:55] your question um let's go on to the next
[19:58] like rambling got to give the details
[20:03] man uh did you say the question last
[20:06] time I did okay you can say it no I got
[20:10] this uh this one's by
[20:14] overturn hi hi hi can you tell us more
[20:17] about the tools you have developed
[20:18] internally and are in use uh for
[20:21] instance a tool to balance ship and
[20:22] weapons if it doesn't exist yet are you
[20:24] planning to do it and with what
[20:26] approach oh so actually this is a good
[20:29] one like we talked about John P before
[20:31] with the the cool story and John's
[20:34] actually been working on something
[20:35] that's um like goal based tuning so that
[20:37] way it helps the designers kind of input
[20:40] information into like a database right
[20:42] like a spreadsheet or something like all
[20:43] right this is what we want the ship to
[20:45] do and then the system will extrapolate
[20:47] everything all the information and then
[20:48] kind of make it work with ifcs and
[20:50] everything like that and also kind of
[20:51] help like the big ships the like the
[20:53] Idris the javelin all those also kind of
[20:56] work into it so like huge because um his
[20:59] system is physically based so you need
[21:01] to have actual proper physics um bunch
[21:05] of prams and designer they're like what
[21:08] does this one do basically and it's like
[21:11] John has it all in his head I know it's
[21:12] scary and he has all these valuables
[21:14] that he knows of and it's just like I
[21:17] just wanted to do this thing so he's
[21:19] he's making a nice in-game tool to say
[21:21] give me what you want output those
[21:23] values I remember sitting I remember
[21:24] sitting down with John and I was like
[21:26] John explained this to me he was like
[21:28] okay so he explained it to me and I'm
[21:30] just
[21:31] like jaw dropped eyes glassed over and
[21:35] then he was like too much
[21:39] mhm um no he's I love talking to him
[21:42] he's funny I'm like oh my God all this
[21:44] stuff that you're putting into this is
[21:46] crazy so um he's actually been he's been
[21:49] in UK for the past week or two actually
[21:50] this is the second week he's been in the
[21:51] UK and he's been working on the gold
[21:53] based gold based tuning system before
[21:55] that to before he goes out there to
[21:57] train like Andrew Nicholson on how to
[21:59] basically tune it for balancing and
[22:01] everything like that so it's it's been
[22:02] good for him to have to be out there
[22:04] just so he can sit down with the guys
[22:05] and be like all right this CU tuning a
[22:07] ship used to take a week or two
[22:09] sometimes like depending on how
[22:11] complicated things were and how
[22:12] thrusters were working now they have it
[22:14] down to a few hours so like it's a
[22:16] really big noticeable difference of
[22:18] balancing the ships now well that too
[22:20] and it's like um it would hit different
[22:22] problems and because we've done it so
[22:24] many times John knows what problems
[22:26] there gon to be so he's able to make
[22:28] these tools to help designers fix it and
[22:32] do it quickly so he's got down to a
[22:34] science and yeah I know he's pretty good
[22:35] about just sitting up the designers too
[22:37] and like figuring out exactly what they
[22:38] need I remember um on my the first ship
[22:41] I was starting to work on and he was
[22:43] like okay let's get this thing let's get
[22:45] this thing fly ready I'm like okay and
[22:47] he was talking about like all the math
[22:48] and algorithms and trying to get the
[22:49] thrusters set up and I was trying to do
[22:50] the balance on the thrusters and I was
[22:51] like oh my God so much stuff he has a
[22:55] lot of helpful things that just show the
[22:57] visual things yeah sometimes you just
[22:59] want to take a straw and like like suck
[23:01] the knowledge out and his stuff is more
[23:05] I guess in engine debug screen stuff
[23:08] that outputs things but we do have other
[23:10] tools like um data Forge or even the
[23:13] thing like aiel is working on data Forge
[23:15] is a big help actually cuz it's going to
[23:17] start really cleaning up from doing like
[23:19] hand XML stuff and anyone does like hand
[23:21] scripting and stuff like that it's like
[23:23] H if you have a tool it makes it so much
[23:25] easier to read and cleaner so that way
[23:27] you can see where the issues are no more
[23:29] editing Raw xmls it's so awesome when
[23:31] that's get done yeah and we also have um
[23:34] Aerials to the item Port editor yep
[23:37] which helps tremendously because you
[23:38] could see on the screen in game your
[23:41] character and the ships and you can move
[23:43] remove stuff and you could see it right
[23:45] then and there and any errors like hey
[23:47] this can't fit there because the size is
[23:48] wrong well he just recently got the
[23:50] preview stuff set up too this past week
[23:52] or so so it's like really good like I
[23:53] know Sean Tracy and like Mark McCall and
[23:56] um the new guy link he's actually going
[23:58] to be working on with that tool and
[24:00] stuff so they've been giving a lot of
[24:01] feedback and he's been working side by
[24:02] side with them and all the tools are
[24:04] just like I said like tools are awesome
[24:06] yes people that can generate tools to be
[24:08] useful and stuff will just save time so
[24:09] we can develop more faster better mo
[24:12] better and if we don't have tools you
[24:14] could always just be KX and just write
[24:16] your own python goey system to do heat
[24:19] balance and yes he did do that he did he
[24:21] did he he was like Hey look I'm
[24:23] prototyping
[24:25] this okay okay at least he's not flow
[24:27] graphing it
[24:29] he did I know but it was like flowra he
[24:32] flow graphed the entire system and then
[24:35] once he figured out how he wanted it
[24:37] then he made the gooey so he could
[24:39] explain it to better to other people
[24:41] yeah cuz like the flow graph looked like
[24:42] spaghetti half the time yeah I don't I
[24:45] remember actually I remember one time
[24:47] when he had first done like the little
[24:48] thing um for the when you're inside the
[24:51] cockpit and you get to interact with
[24:52] things and then he like he showed you
[24:53] guys the flow graph and you and Paul
[24:55] were like how does that work and he's
[24:56] like I don't know just works he gets
[25:00] prototypes working
[25:02] great but they're
[25:04] prototypes remember I tried getting his
[25:06] grabby hand stuff working in one of my
[25:07] levels when I was trying to mess with
[25:08] like some of the cargo and some of the
[25:10] Salvage and yeah no I was like kex I
[25:13] don't understand this it's like yeah
[25:15] that ain't going to work it's prototype
[25:19] mhm all right so next question is by
[25:22] Rufus Ultra hey Randy
[25:25] hello how was your transmission from
[25:28] from Dev to producer do you like your
[25:30] new job do you miss tinkering with the
[25:32] caterpillar or do you enjoy running
[25:33] around with a stick and Pock Mark and
[25:35] other devs while demanding progress ooh
[25:39] so my transitions my transmission's fine
[25:41] did you get your have you gotten your
[25:42] checked out
[25:43] lately what I power walk I power walk
[25:47] every day 30 miles 30 miles yeah that's
[25:49] why you have like 30 30 miles down I do
[25:51] you think I'm still up nice now the
[25:53] transition between Dev to producer has
[25:55] it's still ongoing I think I've been a
[25:57] producer now for 3 months maybe actually
[26:00] no four months feels like forever feel
[26:02] like
[26:03] years thanks have that dread when you
[26:06] walk over that's right like get to work
[26:08] I'm like no no keep oh no there a and
[26:12] then you'll be like what there is a jira
[26:16] sir yeah
[26:19] jira you had to do that didn't you he
[26:21] does this all the time he'll be like hey
[26:24] there's this bug ask you do I'm like
[26:26] there's no J I can't do it and he'll be
[26:27] like
[26:29] Jara I'll be like you fine and no no
[26:33] then I'll try to get out of and go does
[26:35] my lead know and you'll be like Paul and
[26:37] then Paul's like I'm like fine I'll do
[26:42] it yeah I know cuz like um there's
[26:45] always a problem in development right
[26:46] where like people will since I come from
[26:50] a Dev background and I'm transitioning
[26:52] over to to production it's kind of like
[26:54] that whole thing of like devs will be
[26:56] like I'm not doing anything to producers
[26:58] says unless they have a jira I'm like
[27:00] okay fine it's document and I'm like
[27:01] yeah I know these tricks I've done them
[27:03] myself it's like kind of like um against
[27:06] us you're a
[27:08] spy pretty open spy then your tactics of
[27:12] spying needs a little
[27:16] work so yeah no it's like the transition
[27:19] is still going um I really do enjoy it I
[27:21] mean of course there's some things like
[27:22] I hate scheduling oh my God I hate
[27:24] scheduling so much cuz it's such in this
[27:27] type of like to schedule for it's it's
[27:29] an asynchronous schedule because you
[27:31] guys are working on something completely
[27:33] different the designers are working on
[27:34] something completely different all the
[27:35] games that I've worked on before have
[27:37] all been regular MMOs or more standard
[27:39] MMOs to where you know you have a Zone
[27:42] and then you have all the quest that
[27:44] you're planning you have everything else
[27:46] you have that progression and you we
[27:47] knew exactly what that progression was
[27:49] from Level zero all the way to whatever
[27:51] level cap was so it was easier for us to
[27:53] look at it and I've always kind of done
[27:55] production work in my other roles too
[27:57] cuz I've always always been like a
[27:59] designer SL producer on some things I've
[28:01] always made my own Jas and stuff I
[28:02] always had my own features that I was in
[28:04] charge of so I've always run that and
[28:07] when I was like when I was at 38 I think
[28:09] I had a team of nine people and I was
[28:11] the scrum Master for the team and I was
[28:13] running the features I had I was in
[28:15] charge of the quest tool which anybody
[28:17] that knows about anything tools like the
[28:18] quest tool itself like touches
[28:20] everything in the entire game because
[28:21] everything is based on that then I had
[28:23] like localization stuff I had some
[28:24] dialogue stuff so yeah I've always kind
[28:26] of done production stuff I've just never
[28:28] never actually made it really official
[28:30] yeah so it's kind of it's different a
[28:32] different mentality I'm still trying to
[28:34] like I still have that inner battle
[28:35] right now of like Dev versus producer
[28:38] but it's also cool because I can go into
[28:39] meetings with you guys and like one of
[28:42] The Producers when we were talking about
[28:43] the door the doors meeting right we're
[28:46] talking all through the logic and
[28:46] everything like that and I'm like I
[28:48] understand it because I've done this
[28:49] before and I've been a Dev for a while
[28:51] but the other producer he's like I I'm
[28:53] lost and we're like we're just talking
[28:54] about doors he's like oh I think Sean
[28:57] walks up and he like just made a door
[29:00] yeah I know right but even still like I
[29:02] was able to talk logic and I'm able to
[29:04] like give input and stuff and help
[29:06] facilitate that so I kind of have an
[29:08] idea of kind of what the developing team
[29:10] needs Grant out of still working on that
[29:12] too CU they're always hitting me up hey
[29:13] I want to do this I want to do this okay
[29:15] like the other day you I saw you like
[29:17] I'm on a meeting and I see like aent
[29:18] just like pulling a um a whiteboard I'm
[29:22] like I'm like hold on what what are you
[29:25] doing I needed to schedule things
[29:29] so then we started working on that
[29:30] together and kind of like putting the
[29:31] task up there and then making sure that
[29:34] at least the people he needs to work
[29:35] with which right now you're working with
[29:36] Patrick a lot so make sure that they're
[29:38] always in sync and they have what
[29:39] information who's doing what task since
[29:42] they don't necessarily have the same Vis
[29:45] um like visibility that I do well we'll
[29:47] have like the highend Jas that you'll
[29:50] sign us like hey make the seat but there
[29:53] may be a bunch of things under that
[29:54] where I'll have to work with Patrick and
[29:56] go all right we have to plan this out of
[29:58] how we're going to do this do we need
[30:00] any resources like Kirk I needed some
[30:03] stuff him to do so we get the new item
[30:05] stuff working it's like all right that's
[30:07] another task that's the task that's the
[30:08] task it's just like actually to be clear
[30:11] so a producer is never development boss
[30:14] like their job is to facilitate and get
[30:16] like to help them out to make sure that
[30:18] they are not blocked so they can do
[30:20] their job cuz like um some people they
[30:22] have the that they're outside the game
[30:24] industry they have the notion of like oh
[30:25] well producers the boss I'm like no
[30:27] producers never the boss like every time
[30:28] I make task it's based on discussions
[30:31] with like Paul and you and the rest of
[30:33] the team and being like okay I'll set up
[30:36] the meeting and I'll be like all right
[30:37] guys this is the goal that we want to do
[30:41] what are the task what do we need to do
[30:42] and then you Paul are almost like okay
[30:45] well to do that we need this we need
[30:47] this we need this and then I start
[30:48] taking the notes and I start jotting
[30:50] down all that stuff and then I turn
[30:52] those notes into actionable items so
[30:55] that way you guys can you know do the
[30:57] work but you guys already have a better
[30:59] idea of exactly what it takes to do that
[31:00] work I just trying to make sure that
[31:03] that work is visible to now a larger
[31:05] audience so that way people can
[31:06] understand what you guys are actually
[31:07] working on and doing and to track it
[31:10] what are they doing mostly communication
[31:11] tracking I have no
[31:13] idea stuff we're doing stuff and things
[31:16] MH we're making stuff work with more
[31:20] stuff you keep breaking
[31:21] stuff you have to break it to make it
[31:24] nice nice
[31:28] I see The disapproving Look by Hennessy
[31:29] over there you saw that he was like ah
[31:31] me and QA are buddy
[31:34] buddy speed dial pretty much dial with
[31:37] them
[31:39] now all right next question all right
[31:42] from Mr far Seeker why not near Seeker
[31:45] why you got be far it's so far so
[31:49] far question for Randy oh I'm gonna read
[31:51] your question hello I'm
[31:54] delegating big
[31:56] turn for patches with the type type yes
[31:59] there's two types I have to say the type
[32:02] for patches with the type of fundamental
[32:03] change is expected in two4 does the live
[32:07] team do anything special in preparation
[32:09] or is it hand off from PTU and QA
[32:11] basically the same so this right here
[32:15] like as mentioned before every
[32:20] single every single release I know right
[32:22] we don't know we're being held by
[32:23] gunpoint what a Nerf really are those
[32:25] things those things shoot fast to they
[32:27] do all right I'm getting put off on a
[32:30] tangent you're like that's our stay on
[32:33] tangent
[32:34] machine so every single release um
[32:38] there's really no live team there's
[32:41] basically everyone and then what is
[32:43] based on the lot the release they kind
[32:45] of pull from resources and like like I
[32:47] said before like art design engineering
[32:50] everything they're kind of like all
[32:51] right well this is what we want to do
[32:53] this is the goal for this release and
[32:55] then we pull the people that are in
[32:57] charge of those features is in charge of
[32:58] that release so then they'll kind of do
[33:00] most of the work for each individual
[33:02] release and when we do handoffs we do a
[33:05] handoff every day mhm and the handoff
[33:08] happens between the UK and here in the
[33:11] US and UK takes care of the stuff in
[33:13] Frankfurt as well so they'll have all
[33:15] those mix of bugs and then Alex Marshal
[33:17] and all of them over there they'll go
[33:18] ahead and kind of communicate with all
[33:21] the producers over there so that way
[33:22] like there's main points of contact for
[33:24] each individual studio and then we'll
[33:27] have meetings every day and now if we're
[33:29] pushing out to live or if we're pushing
[33:31] out to the PTU and stuff then we'll even
[33:33] have more meetings because we'll have
[33:35] our no go or like go no-o meetings and
[33:37] we'll be like we'll talk with QA we'll
[33:39] talk with the main leads and being like
[33:40] all right is this good enough to go to
[33:42] PTU now sometimes it was been completely
[33:45] like crap but we needed to test some
[33:47] stuff we're like hey we just put this
[33:48] fix in or we just put some debugging in
[33:51] and then we're like but we need to push
[33:52] this to PTU now so then like you know
[33:54] we'll ask for a build QA will do like a
[33:56] dirty test of that build and then we'll
[33:58] push it out to PTU anyways just so the
[34:00] people that are on PTU they help us out
[34:02] and they go through and get everything
[34:04] situated so we can keep testing it's
[34:05] like I know this is going to break this
[34:08] but we really need to test that yep yep
[34:10] so sometimes we've even like disabled
[34:12] Arena commanders like for two4 stuff
[34:14] we're testing on like the PTU right now
[34:17] um we we don't have Arena Commander
[34:19] working because Crusader at the it's
[34:21] only Crusader because we want to really
[34:22] test the shopping we want to test that
[34:23] stuff and there's enough crashes and
[34:25] breaks without introducing more things
[34:27] in there
[34:28] so yeah no we definitely do a handoff
[34:30] and it's every day and it's the
[34:33] communication between the different
[34:34] departments and QA and QA is really lead
[34:36] in charge of like telling us what's
[34:37] broken and what's not so I'm going to
[34:39] get shot I'm done I'm waiting I'm just
[34:41] waiting he's waiting for us to get
[34:43] comfortable and then he'll shoot one
[34:44] we'll be like what I'm do my
[34:49] girly oh that's not cool pluck uh oh
[34:55] jeez where did he get you at
[34:58] I don't want to
[35:00] say right in my
[35:03] soul oh no all right next
[35:12] question in my squiggly
[35:15] spooch it got me right where it hurts oh
[35:18] now you want us St continue
[35:21] yes all righty so the next question um
[35:25] is byon Jimmy beard
[35:28] oh oh bage 44 my page isn't the same
[35:32] thing he has bej BJ bej bj44 Jimmy beard
[35:37] so after each patch launched to the PTU
[35:40] do our bug reports make a difference yes
[35:43] I report bugs but have never received
[35:45] message or email stating it was resolved
[35:46] or fixed does this happen thanks so much
[35:48] for all your hard work jimy beard out so
[35:52] again yes every time you guys put in bug
[35:54] reports or using the council anything
[35:57] anything you guys do using the forums
[35:59] Community is always going through that
[36:01] QA is always pouring through that
[36:02] Design's pouring through that a bunch of
[36:03] people are always pouring through all
[36:05] the community stuff on the forums
[36:08] Council like bug reports everything all
[36:10] the crash reports I know once the
[36:12] crashes get to a certain point then all
[36:14] those crash reports are sent out to the
[36:16] producers then we send them out to our
[36:17] Engineers so that way they can kind of
[36:19] look at the crashes get everything
[36:20] situated so yes everything you guys do
[36:24] seriously thank you yes because without
[36:27] you guys testing and helping us actually
[36:29] find this stuff we could not do our job
[36:31] and fix what is needed I there could be
[36:33] bugs sometimes but we just can't even
[36:34] replicate it we need more information
[36:36] and when it goes out it's like maybe a
[36:38] ton of you guys get it and you pour all
[36:40] the information of how you're getting
[36:41] this thing and then all the information
[36:43] gets compiled up sent into a gigantic
[36:46] jira and that says this guy and it will
[36:48] link to what you guys have said and it's
[36:51] just like a big document of like
[36:54] everything so we could try to scramble
[36:56] through what is actually happening what
[36:58] is what people might think was happening
[37:00] yep and we've found and tracked down
[37:02] lots of bugs and QA QA is the one that
[37:05] gets those reports and then once QA gets
[37:07] those reports then they go ahead and
[37:09] verify it they fill out the information
[37:11] for like extra steps alternate ways to
[37:14] get things alternate ways because um
[37:17] like one of the ones actually recently
[37:18] remember the spawning the spawning issue
[37:20] we had where like 50 something Pirates
[37:21] were just spawning and we could not
[37:23] Repro that at all but then people on PTU
[37:25] they're like hey this is happening so it
[37:27] took us like about good 3 to 5 days to
[37:30] finally like narrow that down and that's
[37:32] between design and
[37:34] Engineering um there in QA like those
[37:37] guys were really just hammering these
[37:38] different aspects so yes seriously thank
[37:40] you again for all you guys hard work
[37:43] helping us make like Star Citizen better
[37:45] by testing jumping in the PTU jumping on
[37:48] live using the report system using the
[37:50] forums reaching out to us it is really
[37:53] really appreciated on everything that
[37:54] you guys do with this community and even
[37:57] if you don't get a reply we're still
[37:59] more than likely using your information
[38:00] it's just our QA team is so small and
[38:04] they're stretched so wide they they
[38:06] don't have really enough time to you
[38:07] know reply to everyone so they'll just
[38:10] gather the information that they can get
[38:12] the report done so the developer could
[38:15] get it and then if they have time then
[38:16] they'll reply if they have I yeah I
[38:18] don't know it's it's really hard for
[38:20] them but we do use a lot of information
[38:23] on I've seen information from Reddit
[38:25] from the forms anywhere I've even seen
[38:27] post on Facebook actually YouTube is
[38:29] actually really funny too cuz like we
[38:31] saw so many good things on YouTube but
[38:33] again um so so for you guys thank you
[38:37] for letting for allowing us to do this
[38:39] this is subcribers yes awesome
[38:41] subscribers are awesome we don't normal
[38:43] Studios don't get a chance to do this
[38:45] and this is actually really awesome we
[38:46] get to be very open with you guys answer
[38:48] questions you know and take the time out
[38:49] of our day to kind of again thank you
[38:51] guys cuz this is pretty awesome that we
[38:53] get a chance to do this not you guys we
[38:54] wouldn't have bug Smashers or whatever
[38:56] this show is things something 10 for the
[38:59] Randy that's right 10 for
[39:00] [Laughter]
[39:03] Randy So yeah thank you guys and if
[39:05] anything see in the verse the
[39:10] [Music]
[39:18] what hey guys thanks for watching um
[39:21] temp for the chairman uh if you guys
[39:22] would like to uh see more episodes go
[39:25] here if you guys would like to subscribe
[39:27] to our YouTube channel and always keep
[39:29] up to date with all our video content go
[39:30] here and uh if you guys would like to
[39:32] watch episodes of around the verse go
[39:34] here please and I will see you in the
[39:37] verse
[39:39] [Applause]

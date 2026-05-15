# Star Citizen Live: Outer Space Interface

**Video:** https://www.youtube.com/watch?v=HeLSsgHSTy4
**Date:** 2021-11-05
**Duration:** 1:01:28

## Transcript

[00:02] hello everybody welcome to another
[00:04] episode of star citizen live outer space
[00:08] interface
[00:09] because i'm a sucker for the rhyming
[00:11] titles i'm your host jared huckabee and
[00:13] if you've never seen star citizen live
[00:15] before well it's a about it's where we
[00:18] take about an hour out of the end of our
[00:20] week and we chat with some of our many
[00:22] developers we discuss their work uh
[00:25] their efforts on the project uh
[00:27] sometimes we take questions from you the
[00:30] star citizen community other times we
[00:32] watch them work as they develop
[00:34] something live in front of everybody
[00:37] on this week's show we have two members
[00:39] of our steamed ui team let's meet them
[00:42] now let's see which button is that there
[00:43] there we go
[00:44] uh we have got ui director mr simon
[00:47] burzy
[00:48] hello nice to meet you jared
[00:51] and we've and and we've got a principal
[00:53] ui
[00:54] a programmer mr david bonegill
[00:58] hello jared how you doing i'm doing well
[01:01] now we say you've heard me say bone
[01:03] several times because throughout the
[01:04] conference throughout the hour we're
[01:06] probably we're gonna end up slipping and
[01:07] referring to david as bone because
[01:09] that's his nickname and every time we
[01:10] have david on the sh on a show which is
[01:12] not often but every time we have them
[01:14] it's always it lends to some confusion
[01:17] so for all those people who
[01:19] aren't here at the beginning like
[01:21] they're going to jump in in five minutes
[01:22] 10 minutes or the people who jump in 30
[01:24] minutes into the show it's like what's
[01:27] bone what are they talking about you all
[01:29] in chat you all help us out you'll help
[01:31] us out here and tell people who the heck
[01:33] we're talking about here so they don't
[01:34] think there's just this third person
[01:36] missing on the camera
[01:38] now
[01:39] before we get started on this week's
[01:40] show uh as we want to do let's let's
[01:43] take a few minutes and uh find out who
[01:45] you are and what you do because uh the
[01:48] way ui works and it's developed in this
[01:51] project is perhaps maybe a little bit
[01:53] different that comes from our uh
[01:55] building blocks thing it democratizes
[01:57] the process and we'll get into that uh
[01:59] but just so folks understand the kind of
[02:01] scope of work and stuff sign actually
[02:03] david why don't we start with you uh
[02:06] what is your role in star citizen and
[02:08] its ui development
[02:11] oh okay well i
[02:13] my role is
[02:15] i'm primarily a programmer
[02:18] but i'm like a
[02:19] i think people call it systems architect
[02:21] which is like a fancy name for
[02:24] uh developing systems and i've been
[02:27] developing the system
[02:29] for the ui for for our game um we had
[02:34] like the system that in place but it
[02:37] wasn't really very um star citizeny um
[02:40] it didn't really meet chris's standards
[02:43] or it didn't meet a lot of the goals
[02:45] that we're trying to do
[02:46] um for this um
[02:48] big project so about
[02:52] three years ago chris was like right can
[02:54] you make us something
[02:56] that will get us to this position where
[02:58] we can make ui for
[03:00] all these different you um
[03:03] all these different systems in the game
[03:05] and
[03:06] make it easier for
[03:08] the designers to make ui make it easier
[03:11] for the programmers like the gameplay
[03:13] programmers to present their stuff so we
[03:15] can make uis for them
[03:17] things like that
[03:18] and also bring in all these different
[03:21] like new rendering techniques as well
[03:22] because what we had before was kind of a
[03:24] very
[03:25] what people would call a traditional ui
[03:27] like hey here's the game we just render
[03:30] something over the top you know is a
[03:32] number of lives or something in how many
[03:34] bullets you've got but our game's quite
[03:37] a lot different from that and obviously
[03:39] it's
[03:40] uh online a lot of the ui is in the
[03:42] world so we're all looking at
[03:45] the same screens in the world and stuff
[03:47] like that so my job was to develop
[03:49] technology that would help help us solve
[03:52] a lot of those
[03:53] problems along the way um a lot of new
[03:55] problems that you don't really see in a
[03:57] lot of games and some of them are just
[03:59] like
[04:00] big performance problems are big
[04:03] um
[04:04] there's just a lot of stuff in our game
[04:06] so like trying to make it so good tools
[04:08] so we can make things as quickly as
[04:10] possible
[04:11] um well it's right as quickly as
[04:13] possible i think so
[04:15] right yeah
[04:16] you said i i made this you used the past
[04:18] tense a few times but yeah this is these
[04:21] are still tasks that are ongoing i mean
[04:23] oh absolutely yes
[04:25] it's it's i i i think it'll that this
[04:28] will come up as a common thread
[04:29] throughout the show and it's always
[04:31] important to remember that
[04:33] star citizen is still in alpha uh it it
[04:36] it it
[04:37] the ui the user interface all the
[04:40] aspects of this are still in development
[04:42] and you know
[04:43] and still a work in progress so so
[04:46] always keep that in your mind as we
[04:47] discuss these things
[04:49] simon you are the ui director
[04:52] what is the ui director what what's your
[04:54] day-to-day like
[04:56] uh well i kind of wear many hats which i
[04:58] guess is a phrase in here sometimes um i
[05:01] suppose the actual
[05:02] bit that ties the most to the title is
[05:04] is my job to make sure that the
[05:07] the ui in star citizen it's all kind of
[05:09] pulling in the same direction so
[05:11] we kind of have
[05:13] consistency between the different areas
[05:14] because it's a really big game we've got
[05:16] lots of different teams working on ui or
[05:17] bits of the ui so we we have to make
[05:19] sure that it
[05:20] feels like the same game essentially so
[05:23] there's a certain amount of
[05:25] rules for how stuff should work
[05:26] associated with that and also there's
[05:28] the visual side of things so um got to
[05:31] make sure that i know say what the
[05:33] active feature team is working on is
[05:35] similar to what ui feature team is
[05:36] working on so on across the company so
[05:39] there's a there's a quite a lot of that
[05:41] that's that's the main part of the job
[05:42] um i also help to run the ui feature
[05:45] team so i do a little bit of team lead
[05:47] stuff there just kind of doing the
[05:49] day-to-day making sure people are happy
[05:50] and everything's planned out that kind
[05:52] of thing
[05:53] and
[05:54] very rarely one thing i like to do is do
[05:56] a bit of hands-on so i like to get in
[05:58] there and do a bit of kind of technical
[05:59] stuff build some ui
[06:01] make it work
[06:02] but a lot of the time it's it's talking
[06:04] to other people and organizing things
[06:06] and giving people feedback
[06:09] now you said something interesting we're
[06:10] going to jump into that with our next
[06:12] question here uh working with other
[06:14] teams like the actor feature team to
[06:16] make sure
[06:17] their uh the things that they've created
[06:19] are in line with other things um unlike
[06:22] uh i'm not gonna speak for every single
[06:24] game and development but unlike many
[06:26] other games out there uh
[06:28] the ui team
[06:30] does not build all of the ui in star
[06:34] citizen uh we have created a system that
[06:37] democratizes that process and puts the
[06:40] power in the hands of system designers
[06:42] on the actor feature team system
[06:44] designers on the eupu feature team you
[06:46] know yes systems designers on the
[06:49] systemic services team uh stuff like
[06:51] that we've put the power into the hands
[06:54] of designers and all these other teams
[06:55] to create
[06:58] much or
[06:59] most of their ui and then the ui team
[07:02] kind of comes in and and you know shapes
[07:05] adjusts you know conforms it to the to
[07:07] fit the uh
[07:09] the greater star citizen experience
[07:11] and that's all through building blocks
[07:13] uh how has the building blocks
[07:15] technology developed in the last year i
[07:17] mean we haven't really
[07:20] dove deep into it since we had zayn on i
[07:23] think that i think it was still atv
[07:25] back then uh you know talking about so
[07:27] how has it developed in the last year
[07:29] and where would you like to see it go in
[07:31] the future
[07:33] so
[07:34] i'll start there's plenty of things that
[07:36] bone could say on this um but i think
[07:37] the important thing for my side is that
[07:39] we've
[07:40] we've kind of we've rolled it out from
[07:42] something that the ui you that this kind
[07:44] of the core ui team used to use and and
[07:47] we were kind of working out how to use
[07:48] it as well it's got to a point now where
[07:50] it's good enough for the rest of the
[07:51] team to use so we kind of rolled it out
[07:52] to
[07:53] game designers across the company some
[07:55] of the artists that kind of thing
[07:57] um so
[07:58] it kind of makes our jobs easier i
[08:00] suppose because there's you know it's
[08:02] not just
[08:02] six people trying to get the ui done for
[08:04] the whole company now
[08:06] those particular teams can take control
[08:08] and they can make their own kind of
[08:10] demos and functional versions of stuff
[08:12] so that's
[08:14] that's a really big thing that it's
[08:16] brought to us um
[08:18] bones i'm sure bro could go a lot a lot
[08:20] into the technical
[08:22] things that have changed over the past
[08:23] year as
[08:25] over well
[08:25] past year um
[08:27] i think the thing well the thing the
[08:28] major thing that we've been working on
[08:31] like at the core tech level um would be
[08:34] adding 3d
[08:36] which
[08:39] it's a big feature and it's
[08:42] as soon as you jump from you know
[08:44] drawing some texts and some images to
[08:46] hey i want to be able to draw models i
[08:48] want to be able to draw
[08:50] characters vehicles and all these kind
[08:53] of things as part of the ui scene
[08:57] that's that things get pretty
[08:58] complicated about so
[09:01] we've been working on that um
[09:03] that's part of the year um
[09:06] so
[09:07] that involves um
[09:10] lighting for those models how the
[09:12] materials look do you do holograms
[09:15] um how do they appear in the ui do they
[09:18] appear in a screen do they appear over a
[09:20] screen do they appear without a screen
[09:22] just sort of like you know if you can
[09:23] have
[09:24] hologram uis of floating letters and
[09:26] ships and stuff like that so there's all
[09:28] kinds of like
[09:30] exciting rendering tech that we've been
[09:32] involved in with that um
[09:38] uh we've seen
[09:40] that develop the i think the first thing
[09:42] we've seen it in is the inventory which
[09:46] we should be seeing
[09:47] um and that was really really quite
[09:50] complicated we have we show like 50
[09:52] models at a time and each of those
[09:53] individual models
[09:55] has
[09:56] its own scene its own camera it has
[09:58] three lights um so there's just
[10:01] thousands and thousands of little
[10:02] objects we have to um manage all the
[10:04] time so that's
[10:06] that's what we've been doing
[10:08] over the past year so as a core
[10:10] technology group we develop that stuff
[10:13] ready for the gameplay teams to use so
[10:14] maybe
[10:16] i'm hoping that we're in a space that
[10:18] they start using it and then they
[10:20] they'll develop their uis and hopefully
[10:23] the players will get to see that in a
[10:26] couple of releases time after that
[10:28] because we're like right at the start of
[10:29] that change so now is into a state that
[10:32] the gameplay teams start to use it and
[10:34] then they come back to me and say hey
[10:36] it's not quite working correctly yet
[10:38] and then i fix a few things and then
[10:40] then they can start developing their
[10:42] features with those kind of things
[10:43] yeah as well as the 3d actually there's
[10:46] put a lot more time into some reusable
[10:49] pieces as well so when
[10:51] maybe when bone did his talk before i
[10:53] know zayn showed some restylable stuff
[10:55] which is really cool but the actual
[10:56] process to to do that was was pretty
[10:58] complicated so if you wanted a button he
[11:00] had to make it from a like a square
[11:02] object and put some text on and all that
[11:04] kind of thing and we've we've got a
[11:05] system now which which means we can sort
[11:07] of package those things up so if
[11:09] somebody wants a button instead of
[11:10] having to build it from all the pieces
[11:11] they can just drag a button into their
[11:13] scene and change the name on it
[11:15] so we've added quite a few bits like
[11:16] that so
[11:18] it doesn't make a massive difference to
[11:19] what people see at the end of the
[11:20] process but for
[11:22] like
[11:23] less technical people game designers and
[11:25] artists it's a lot easier for them to
[11:27] just kind of build a screen out of
[11:28] pieces
[11:30] and also all those pieces are restylable
[11:32] as well so
[11:33] for example at the moment we've
[11:35] we've just added a crusader style to the
[11:37] game so if someone's already set up a
[11:39] screen we can just turn it to crusader
[11:41] and it will change colors and some of
[11:43] the graphics will change and so on which
[11:44] is it's kind of cool
[11:47] you use the phrase less technical i it's
[11:49] it it always amuses me because i think
[11:51] there's a
[11:53] perception
[11:54] out there that exists you know in the
[11:56] world of game developers that that all
[11:58] game developers are also
[12:00] master technicians yeah you know they've
[12:03] all got degrees in computer science or
[12:05] they all underst you know they all
[12:06] understand the inner workings of of of
[12:09] everything and the reality is that many
[12:11] of these you know people you know
[12:13] artists or whatever they come from very
[12:14] specialized fields and so you know
[12:17] building a tool set that
[12:19] uh is user friendly for them is is is
[12:23] essential in this um that takes me to my
[12:26] next question you mentioned that
[12:28] building blocks has made it
[12:30] easier for you because because many of
[12:32] the
[12:33] uh basic fundamental ui elements are
[12:36] actually created by our
[12:38] system designers on these other teams
[12:40] and not the ui team
[12:42] and then you and then you mentioned
[12:43] having to support
[12:45] them like when they say oh this isn't
[12:46] working or or this feature isn't working
[12:49] quite doing what i wanted to do
[12:51] whereas it makes it easier
[12:53] for the creation has that
[12:56] has that workload switched to support
[12:58] are you now just as busy supporting
[13:00] everybody how how often do you have to
[13:02] clean up after the mess of
[13:04] of uh of other teams
[13:06] you know creating ui that just doesn't
[13:08] work
[13:11] well
[13:13] go on then bone
[13:14] well i i think clean cleanup um is
[13:17] probably a
[13:19] bit overdoing it but uh we definitely i
[13:22] definitely get a lot of um
[13:24] calls during like the release phase of
[13:26] saying hey
[13:27] i've made all this and it's not working
[13:30] quite how i expect it to now
[13:32] is that because
[13:34] they've
[13:35] implemented it wrong or is it because
[13:37] maybe my stuff's wrong or our you know
[13:39] the core tech
[13:40] is wrong
[13:41] um
[13:43] so
[13:45] trying to help them debug what what
[13:48] what's going on and find out what the
[13:50] problem
[13:51] is i think that that's grown um but
[13:55] that's a really good thing i can only
[13:56] see that as like a
[13:58] really positive step because we get
[14:01] lots and lots of people contributing now
[14:04] and being a support role is
[14:06] um
[14:07] a lot easier than what we used to do
[14:09] which was having a really compressed
[14:10] role at the end of the
[14:12] release cycle which is all the gameplay
[14:15] teams have finished their feature and
[14:16] just go it just needs ui now can you
[14:18] just make the ui for it and it just
[14:20] needs ui now
[14:22] uh yeah that
[14:23] um
[14:25] yeah that was really tricky because you
[14:26] had to really get get involved in lots
[14:28] of other people's work and understand
[14:30] what they want then design it and write
[14:32] the tech and the ui for it and and these
[14:36] will all be completely individual
[14:38] systems you'll be working on vehicles
[14:39] one week and then you'll be working on
[14:40] the mobi glass next week and they'll be
[14:42] working on the front end and that was
[14:44] really difficult
[14:45] you'd get these
[14:47] jack of all trades master of none
[14:48] because who like diving in and out but
[14:51] they were all equally very important at
[14:52] the same time
[14:54] but now that that's spread out and
[14:56] offering support is a lot easier because
[14:58] i'm supporting them in a role
[15:01] where
[15:02] i know the tech and i can
[15:04] i can give advice about the stuff that's
[15:06] going on
[15:08] and also
[15:09] can hopefully write tools to help them
[15:11] debug their own stuff as well
[15:13] yeah well one thing that's interesting
[15:14] is it like
[15:15] with ui and games
[15:17] with ai on games you get this thing
[15:18] called emergent behavior where the game
[15:20] starts doing stuff that you didn't
[15:21] expect
[15:22] we almost have a similar thing with the
[15:24] the ui tool where it's not it's not ai
[15:27] that's doing it but we'll we'll make it
[15:29] decided to do a particular thing then we
[15:30] hand it over to people to actually use
[15:32] and they come up with all these crazy
[15:34] ways of using it that we never expected
[15:36] so
[15:36] they usually doing really cool stuff but
[15:39] sometimes i suppose there's two sides to
[15:41] it sometimes
[15:42] we'll get something that works really
[15:43] well and then we'll look at the the file
[15:46] that's been made to construct it and
[15:47] it's like spaghetti there's just
[15:48] connections everywhere
[15:50] um
[15:51] so we sometimes go in and kind of tidy
[15:52] that up a bit and
[15:54] let them know here's another way you
[15:55] could do it that's going to be a bit
[15:56] more efficient that kind of thing and
[15:58] other times it's like there is no better
[16:00] way to do this so bone for example might
[16:02] go away and write a new a new system
[16:04] that
[16:05] does that thing that they want to do or
[16:07] do it in a better way so there's
[16:08] that's that's where a lot of the support
[16:10] lies as well
[16:12] emergent designers
[16:14] yeah no we won't name any names here but
[16:16] uh
[16:17] i think another thing that we can
[16:19] demystify is the idea that emergent
[16:20] behavior only comes from our players
[16:23] uh it's very it's i'm often
[16:27] i often say that uh development is not
[16:30] construction
[16:31] it is exploration it it it is a search
[16:34] for ideas and a search for solutions and
[16:38] often times in game development
[16:40] through the course of trying to create
[16:42] one thing you inadvertently create
[16:43] another thing and go oh that's
[16:45] interesting
[16:46] maybe we should do that on purpose and
[16:48] that often that happens quite a lot in
[16:50] game development we won't tell you which
[16:52] ones are which uh well we don't keep a
[16:54] list uh
[16:56] now we're going to get into our uh the
[16:58] question and answer period from the from
[17:00] the backers here in a minute uh for
[17:01] those of you who are wondering why we
[17:03] spent this time you know talking about
[17:04] building blocks and and and bringing
[17:07] everybody up to speed here uh it's
[17:09] because i want to preface this before we
[17:11] get into some of these answers the
[17:14] ui folks the ui team at star citizen
[17:17] because we have this building blocks
[17:18] because we've democratized the process
[17:20] and and and allowed the system designers
[17:23] for all these various teams to create
[17:25] their core functionalities a lot of the
[17:27] questions about core functionality
[17:30] don't actually apply to the ui team
[17:32] whereas that you otherwise might think
[17:34] they do like you can't can this button
[17:36] control all this stuff and stuff that's
[17:38] actually something for the system
[17:39] designers and those individual teams
[17:41] that you're asking so uh we did
[17:43] put the call out and
[17:45] and grab some answers from some of the
[17:47] other teams so we're not going to ignore
[17:49] all the all the very specific drill down
[17:51] questions but i just want you to keep in
[17:53] mind that when we talk about some of
[17:54] these
[17:55] more granular details these are actually
[17:58] the work of the eup feature team or the
[18:01] vehicle feature team and stuff like that
[18:03] and and the ui team sits above them
[18:06] helping and assisting and you know
[18:08] conforming and all that stuff like this
[18:10] uh
[18:11] starting with the the number one
[18:13] question
[18:14] like we we knew it this the second i
[18:16] said hey you want to be on the show and
[18:17] he said yeah and i said i'll tell you
[18:18] what the number one question is going to
[18:19] be and we were right uh any updates
[18:23] whatsoever that you can give us on the
[18:26] updated in-game star map
[18:28] okay so
[18:30] it's progressing um it's
[18:33] it's really big system so
[18:36] what we want to do with it and what
[18:38] we've designed in the background which
[18:39] we're not showing anybody yet
[18:41] is
[18:42] this really big system that kind of
[18:44] combines
[18:45] the radar the star map um potentially
[18:48] some other ar markers and also the
[18:50] interior map we think really that should
[18:51] be one thing essentially so
[18:54] like chris roberts has always had this
[18:55] idea that he wants to be able to
[18:57] start from the radar and zoom out from
[18:59] that and you can see the star map and
[19:00] you can zoom out and see the i know the
[19:02] galactic view essentially so we've we've
[19:04] been
[19:05] writing around that idea um
[19:08] so we've got this really massive design
[19:09] that ties all those all those systems
[19:11] together um which is pretty cool
[19:13] um
[19:15] we started writing code systems to
[19:17] support that so we've we've got
[19:20] i mean one thing that's tricky with it
[19:21] there's all this data from all over the
[19:22] game so we've got we've got all the
[19:23] planets and stuff we've got the radar
[19:25] data we've got even things like missiles
[19:27] we've got to somehow tie that together
[19:28] in a way that we can put into one place
[19:31] so we spent quite a lot of time working
[19:32] on the the tracking system for all that
[19:35] stuff so that's all
[19:37] it's all good now and and we're kind of
[19:39] at the stage where we we want to start
[19:41] building the building the real thing
[19:44] so uh i mean the challenge is
[19:47] spending the time to fit all that stuff
[19:49] together so that's that's something that
[19:51] we we've been kind of ticking along in
[19:53] the background but we're going to start
[19:54] ramping up on that very soon i think
[19:56] couldn't give you a release date but uh
[19:59] we don't we're really keen to get it
[20:00] going and uh it's it's moving
[20:03] um well we are working i i literally was
[20:06] working on it this morning so you really
[20:08] called me up jared but
[20:11] yeah there's three things you did this
[20:12] morning
[20:15] i'm just i'm just messing with you
[20:18] uh so the the the star map
[20:21] we run into this with many features uh
[20:23] they're they're they're inheritors of of
[20:27] things from other systems the
[20:29] the star map is not something we can
[20:31] build in isolation all by itself and
[20:33] then put out there and be like this is
[20:35] your star map that's not the thing we
[20:37] want to make the thing that the thing
[20:39] that we're envisioning the thing that
[20:40] you just described is this thing that
[20:42] can inherit all kinds of data from radar
[20:45] from scanning from
[20:47] from from you know personal markers like
[20:50] like the service beacons and stuff like
[20:51] that it's got to inherit all be able to
[20:53] inherit all this data from those other
[20:55] systems and while those other systems
[20:58] are still being worked on are still
[21:00] being developed folks who watch our
[21:03] public roadmap uh notice a change to the
[21:06] uh fps uh scanning and radar uh intended
[21:09] to come online in 316.
[21:12] while those things are still changing
[21:13] it's hard to build this thing that's
[21:15] going to inherit all these things and
[21:17] they're like oh we changed how it works
[21:19] i'm like but i just hooked into it i
[21:20] just looked into how it used to be and
[21:22] you went and changed it so it's it's
[21:25] definitely this obviously work that can
[21:27] still be done you're doing it right now
[21:29] but as far as uh
[21:31] expectations of when and stuff like this
[21:33] it is it is directly dependent not just
[21:35] on your own workload but on the
[21:37] continued progress of all these other
[21:39] systems that it has to inherit
[21:41] information from
[21:43] um
[21:45] another follow-up question to the star
[21:46] map from the chat uh
[21:48] will the design of this new star map be
[21:50] similar to the arc star map that folks
[21:53] have on the website right now uh scl q
[21:56] and a's we don't aren't usually the
[21:58] visual shows we don't usually have
[21:59] things to show so uh
[22:02] i guess describe
[22:04] what should we be expecting paint us a
[22:05] picture in our heads i guess
[22:07] okay so i think anyone who's seen the
[22:09] arc star map will have
[22:11] a good idea of i suppose the general
[22:13] idea of where we want to take it because
[22:14] we we do all like that it's uh
[22:17] i don't know it's easy to interact with
[22:19] it's quite clear you can you know you
[22:21] can navigate between different pieces of
[22:23] it easily a lot more easily than what's
[22:24] in game at the moment so that's
[22:26] definitely an inspiration for us um so
[22:29] visually you'll be i definitely wanted
[22:32] to try want to try and push it a bit
[22:33] further than that so try and get a bit
[22:35] more a bit more of that sci-fi movie
[22:37] feel to it
[22:38] um and
[22:40] in terms of functionality uh
[22:43] because
[22:44] it's kind of your window on the world i
[22:46] think what we need to do as well is have
[22:48] a bit more of a sort of google maps
[22:50] apple map style navigation thing going
[22:52] on so for example if you want to find a
[22:56] planet on the other side of the solar
[22:57] system being able to search for it
[22:59] maybe just uh quite easily navigate to
[23:01] it from this central interface i think
[23:03] all that sort of stuff is going to make
[23:04] it feel nice and so we're looking to
[23:07] take inspiration from the best maps out
[23:10] there overall
[23:12] i hear
[23:13] uh to answer uh a snakehawks question
[23:17] how about not implementing the 100th
[23:19] update on mining uh because these are ui
[23:22] guys they're not building the mining the
[23:24] the team who is doing the mining can
[23:25] continue to work on mining while these
[23:27] guys
[23:28] work on their other stuff it's not a
[23:30] either or a proposition that all the
[23:32] teams don't just work on all the
[23:33] features
[23:35] yeah that's true i mean the main the
[23:37] main way that we support other teams at
[23:38] the moment we're kind of just the start
[23:41] and the end of the process so
[23:43] like bones team makes the initial bits
[23:45] for people to make their
[23:47] feature from i guess and then
[23:50] ui team will sometimes
[23:52] lend support on the visual side as well
[23:54] so like at the moment we're working on
[23:56] some uh refueling stuff so you are euphu
[24:00] been working on that and
[24:02] they've made this system that works
[24:04] really well they've done ui that is okay
[24:06] it doesn't look great um but they
[24:09] they're not a team full of like ui
[24:10] designers and artists so what we'll do
[24:12] is pass some of the stuff over to our
[24:14] our visual guys to kind of upgrade it
[24:17] and make it look cool and star citizen
[24:19] and then
[24:21] the end product is really good but uh
[24:23] yeah in general it's the code side that
[24:26] that's involved with things like the mo
[24:28] the the star map so it's yeah
[24:31] and and i i will say it it's it's
[24:33] working
[24:35] those who have been following the
[24:36] project for a while that uh you know uh
[24:39] going back to
[24:40] 2014 2015 2016 days might remember a
[24:44] familiar refrain which i'm sure i hope
[24:47] it doesn't give you ptsd but you know
[24:49] we're waiting it's like this feature is
[24:50] waiting on ui this feature is waiting on
[24:53] ui this feature is waiting on ui that
[24:55] was such a
[24:58] common refrain back in those days
[25:00] because of what david just said uh
[25:02] earlier about how it's like you get to
[25:05] the end of the feature then it's like
[25:06] okay slap a ui on it it's like it was
[25:08] very clear that ui being downstream of
[25:11] everything was not the solution for a
[25:12] project as broad as star citizen so uh
[25:16] uh not to keep harping on the success of
[25:19] building blocks but you know building
[25:20] blocks is having these these new you
[25:22] know refinements to process that you
[25:24] guys have made and the new tools that
[25:25] you've provided have definitely sped up
[25:28] uh the process
[25:29] that said
[25:30] like any team on star citizen any team
[25:33] working on any feature there are only so
[25:35] many things we can work on at any given
[25:37] time you have to prioritize
[25:39] and stuff like that so not everything
[25:41] can be worked on all at once
[25:43] so next question
[25:44] sorry i just just to uh
[25:47] um
[25:49] i was at the sort of um
[25:54] point of that uh
[25:56] when when everyone was waiting for ui
[25:58] and this is why chris
[25:59] uh
[26:00] correctly so sort of pivoted at the team
[26:02] at that point so it's like this this
[26:04] this isn't going to work we can't
[26:06] develop
[26:07] because we want to grow how many
[26:08] features we're going to develop and
[26:10] that's just unless we just
[26:12] magic out of thin air another 20 ui guys
[26:15] it's just not going to grow it just
[26:16] turns into this great big bottleneck so
[26:18] that is why around
[26:21] 2017 i think it was we did change the
[26:23] mechanism that we wanted
[26:25] to develop the ui and go wide and like
[26:28] spread it across a lot of these teams so
[26:31] we can
[26:32] um
[26:33] i want to say put the owners back on
[26:35] them because because it's also like when
[26:37] all when all any trouble comes in it's
[26:40] not just developing it it's like at
[26:41] release time
[26:42] um
[26:43] inevitably there's a you know there's a
[26:45] few problems with any given feature but
[26:47] if you
[26:48] if
[26:49] if you have 10 features and each of them
[26:52] have a few ui bugs in then and they all
[26:55] have to be done by one ui team becomes a
[26:57] real bottleneck so it's really good to
[26:59] go go wide across the company and each
[27:01] of
[27:02] each of those guys then get the
[27:04] ownership of their particular feature
[27:06] from start to finish and not just go
[27:08] it's done just need to uh we're just
[27:09] waiting on the ui guys it's like you are
[27:11] the ui guys now right right
[27:14] you know
[27:15] some um
[27:17] we did nice fancy graphics and
[27:19] animations from the uh the
[27:22] art design departments we deputized a
[27:25] bunch of people on a bunch of different
[27:26] teams throughout the company
[27:27] congratulations
[27:30] from the live chat here
[27:32] moving on to another topic that's close
[27:34] to a lot of people's uh performance
[27:36] heart uh where was it mock driver 22
[27:39] says how far are we from declaring star
[27:41] citizen completely flash free
[27:46] seven
[27:48] we have seven to go are we seven along
[27:50] how does that work what scale are you
[27:52] using bone
[27:54] oh i'm not giving you the scale i'm just
[27:56] giving you a number
[27:57] um
[28:01] quite far i'd say i um i don't want to i
[28:04] can't give her like a an
[28:06] accurate number we're definitely past
[28:08] halfway
[28:09] um
[28:10] we've got that we definitely got the
[28:11] process down like we know exactly how
[28:13] we're going to do it and we've got
[28:15] designs for a lot of the things we want
[28:16] to change over but a lot of it is
[28:20] balancing new features i suppose with
[28:22] going back to the old stuff and kind of
[28:24] porting it over because we
[28:27] one thing that we like to do i think
[28:28] chris roberts likes to do this as well
[28:30] is when we touch an old feature we don't
[28:31] want to just take what was there and
[28:34] just
[28:34] put it in exactly the same we will tend
[28:37] to work out what the problems were
[28:39] redesign little bits maybe make it
[28:41] visually better as well so it's quite a
[28:43] quite an involved process to comfort
[28:45] convert things over overall i think i
[28:47] think it's a really good opportunity to
[28:50] revisit because these are inevitably
[28:52] some of the older features across the
[28:54] game so it gives you an opportunity to
[28:56] revisit them and say um
[28:59] what's not great about these things what
[29:01] would improve it you know would it
[29:03] would it
[29:04] look miles better with some
[29:06] 3d models and stuff or you know
[29:09] better animations or i mean things like
[29:12] the
[29:13] inventory on the moby glass was just
[29:15] completely redesigned because um
[29:18] it wasn't a favorite feature of ours at
[29:20] the time so like we looked at it and
[29:21] went right actually if we're going to
[29:23] redo this let's let's rethink it
[29:26] in in a in a more
[29:28] appropriate way but certain other things
[29:30] are
[29:31] if it ain't broke you know let's just
[29:34] make a neater version of this that we
[29:36] can
[29:36] manage and
[29:39] um
[29:41] maintain a lot easier um maintaining the
[29:43] old stuff has become quite difficult now
[29:46] um like the knowledge base is
[29:48] reducing of people that want to work on
[29:50] this stuff
[29:52] yeah and also also flash isn't really
[29:54] supported anymore by adobe so
[29:57] the the longer we go from
[30:00] i know the further we get through time
[30:01] the harder it is to to fix the flash
[30:03] stuff so so we definitely want to
[30:06] get that ported over and we can do i
[30:08] think the major the major features that
[30:09] we want to do is um there's a star map
[30:12] which we're working on obviously bobo
[30:14] gas is a big thing um the mfd is on
[30:17] ships
[30:18] and also the the visor so the the lens
[30:21] advisor that the player looks through
[30:23] um we want to update that and
[30:25] bring that
[30:26] into the modern day i guess
[30:29] we said moby glass
[30:31] i said mobile glass uh our
[30:33] our biggest our biggest flash el wapo
[30:37] uh for those who have seen three amigos
[30:40] uh
[30:40] what what progress can you give us on
[30:42] the mobi glass rework
[30:45] so
[30:46] um at the moment i mean we've been
[30:48] focusing mainly on other things so star
[30:51] map or the design and so on and the the
[30:54] back end of the star map has been taking
[30:56] a lot of the focus aside from just
[30:57] little bits and pieces pieces of
[30:59] features here and there
[31:00] um we're starting to
[31:03] ramp up a little bit on the mobi glass
[31:04] now so we're looking into some visual
[31:06] prototyping work
[31:07] um
[31:08] what chris roberts wants to see he wants
[31:10] to know
[31:11] taking the new tech that we've got all
[31:12] this 3d stuff and so on what can we do
[31:14] to
[31:16] make this make the mobi glass feel cool
[31:18] but still be usable so
[31:21] the first stage of that is we're going
[31:22] to do some in-game prototyping and work
[31:24] out i don't know what could what can we
[31:26] do there how how cool can we make it
[31:28] look yet to still be usable so there's a
[31:30] bit of investigation to do there
[31:33] and that's
[31:35] it's going to take some iteration
[31:36] between ourselves and also chris roberts
[31:38] the game directors and so on until
[31:39] they're happy with i know this is what
[31:41] we want the moby bust to be
[31:43] and then when that's signed off then
[31:44] it's then we can actually start to to
[31:46] make the thing
[31:47] so
[31:48] i think
[31:49] i don't know how difficult it's going to
[31:50] be to be honest because essentially
[31:52] we're like it's like we're making a new
[31:54] operating system almost we once we've
[31:56] got that that core in place we know how
[31:58] it looks how it works in 3d and so on
[32:01] then in theory it's just the case
[32:02] supporting all the old apps across so
[32:05] like take the mission manager and update
[32:07] it update that visually and so on so
[32:09] i think it's one of those things that
[32:11] once we've got over the initial hurdles
[32:12] it'll start to speed up but i'm not
[32:14] giving you any dates
[32:16] no we don't we don't do dates here uh
[32:19] this is a good time to reiterate
[32:20] something you you you dropped kind of
[32:22] casually early on we don't just want to
[32:24] do
[32:25] conversions of these things from flash
[32:28] to you know building blocks and what
[32:30] it's not just just make the same thing
[32:32] like if you're gonna spend if you're
[32:33] gonna spend
[32:34] seven weeks i'm just pulling numbers out
[32:36] of the air guys if i you're gonna spend
[32:38] seven weeks converting this thing from
[32:41] flash to building blocks and it's the
[32:43] exact same thing why not take nine weeks
[32:45] and actually redesign it you know make
[32:48] it better improve upon it you know look
[32:50] at some of these features that backers
[32:51] have been asking for for so long some of
[32:53] these features that we've been asking
[32:55] for for so long uh and and take that
[32:58] effort to redo it and make it better the
[33:00] time so it does mean it takes a little
[33:02] bit longer than just converting it over
[33:04] but uh
[33:05] you know ultimately it's worth it in the
[33:07] end or we hope it will be
[33:09] yeah what we're aiming for is like
[33:11] this is the version of the moment that's
[33:13] the final version of the moby glass so
[33:15] once it's done then i know maybe we'll
[33:16] polish it a little bit in future but
[33:18] essentially it's good
[33:21] uh will you consider adding a version of
[33:24] snake
[33:25] to play on the moby glass
[33:27] that's a good question i think the chat
[33:29] a few people have uh mentioned having
[33:31] games on there so
[33:33] we don't have it in the plans at the
[33:35] moment but it would be a cool idea i'm
[33:36] not i'm not against doing that one day
[33:40] there are plenty of other things to do
[33:41] in the game i would say like plenty of
[33:43] other parts of game to get right before
[33:45] we consider
[33:46] mini games
[33:48] legal's actually in the other room toast
[33:52] does somebody own snake
[33:56] he's not responding
[33:58] um we'll
[34:00] i'll check in with i'll check with him
[34:02] and see what we can
[34:03] see if it's even legally uh allowed um
[34:07] let's move on to some other features one
[34:09] of the most uh requested things it's
[34:11] been popping up in chat a couple
[34:13] questions
[34:15] did you hear him he just said it's a
[34:17] complicated question
[34:18] he just yelled
[34:21] she thought it was a gag he was really
[34:23] there
[34:24] i thought
[34:26] yeah
[34:28] that's usually my answer to any question
[34:30] that simon gives me it's like can we do
[34:32] this and i just go it's complicated
[34:36] we'll just call it caterpillar
[34:38] we'll be all right um all right so um
[34:41] night vision nope cat alert
[34:45] hold on
[34:46] hi sorry hi cat
[34:52] okay
[34:53] we took our cat moment uh night vision a
[34:55] night vision is a is is a big one
[34:57] obviously in space it's
[35:00] always some version of that i suppose
[35:02] but you know as planets become a bigger
[35:04] uh feature of star citizens more
[35:06] gameplay moves down to them uh the
[35:08] ability to see where you're going and
[35:10] not crash into a mountain becomes super
[35:12] important we recently uh
[35:15] revamped ping
[35:16] and gave it this brand new shader that
[35:19] this is really cool
[35:20] and kind of draws everything this um
[35:23] have there been any discussions uh in in
[35:26] any in any thoughts about implementing
[35:29] some version of night vision beyond just
[35:31] forcing people to put the ping on auto
[35:33] fire
[35:34] and just
[35:37] constantly i don't know to be honest i
[35:38] need to see where they're going
[35:39] it's definitely that we need to
[35:42] improve in some way but uh there's not
[35:45] been already been any discussions on the
[35:46] ui side for what we can change there i
[35:48] think it's probably
[35:50] it's probably more the kind of thing
[35:51] that the vehicle team and the axe
[35:52] feature team would look into to be
[35:54] honest because they
[35:56] once you can let people see in the dark
[35:57] it's obviously got a load of gameplay
[35:59] implications like you know people can
[36:01] not hide anymore or
[36:03] maybe we need to put ranges on things
[36:04] and that kind of thing so there's loads
[36:06] of gameplay implications to figure out
[36:07] but um
[36:09] yeah so i don't know where that is up to
[36:10] i wouldn't be surprised if there's if
[36:12] somebody's thinking about it right now
[36:14] but uh it's not really a ui team thing
[36:16] just now
[36:17] fair enough
[36:18] uh let's see
[36:20] um you guys couldn't see it but the cat
[36:22] was absolutely assaulting david during
[36:24] uh simon's answer there
[36:26] uh
[36:29] what one of the one of the one of the it
[36:30] was actually a halloween last year when
[36:32] we first showed off uh the aegis uh
[36:36] manufacturer specific you know style
[36:38] guide uh for the ship huds
[36:40] and since then we haven't seen a lot of
[36:44] forward-facing information about it what
[36:46] can you tell us about
[36:48] maybe not just the aegis one but any
[36:51] manufacturer based
[36:52] ship heads how's that going
[36:55] so um we've kind of
[36:57] one thing we decided to do was do a
[36:59] little bit of a halfway house because
[37:01] initially we had this
[37:03] we got this cool thing with that we've
[37:04] been building
[37:06] i mean we've been trying to get it
[37:07] really good for squadron 42 so that was
[37:08] the initial focus for the aegis hud and
[37:11] we felt that
[37:12] the amount of improvements that were
[37:14] going on there the pu was missing out so
[37:16] we've done this kind of intermediate
[37:18] version at the moment which is what you
[37:19] can see i think that's since the
[37:20] previous release um it doesn't look it
[37:24] doesn't look final it's not intended to
[37:25] look final it looks kind of cool but
[37:27] it's not not where we want to end up um
[37:30] so
[37:30] we've got that version that has all the
[37:32] features in it we can do simple things
[37:34] like change the colors and fonts if you
[37:35] want to
[37:37] um
[37:38] but in terms of rolling out the the
[37:40] proper final huds um the way we want to
[37:43] do it is essentially get that initial
[37:45] gladius hood internally get that
[37:48] 100 how we want it so all the features
[37:51] on there so we have missile mode how we
[37:53] want it bombs how we want it all the
[37:55] different lock-ons and that kind of
[37:56] thing and we're getting pretty close now
[37:57] i think
[37:58] um but chris roberts basically wants to
[38:00] wait till wait till that's just right
[38:02] and then we're going to decide how we're
[38:04] going to roll that out to the rest of
[38:05] the game
[38:06] um
[38:07] while we've been developing that it's
[38:09] it's not so difficult for us to do
[38:11] artwork as well so we've we've started
[38:13] visual development on the drake hud as
[38:16] well as rsi so those are ticking along
[38:18] in the background
[38:20] um but when they'll get rolled out to
[38:21] everybody i'm not totally sure yet
[38:24] okay yeah we we we've shown folks some
[38:26] of the uh early concepts for the drake
[38:29] hud we haven't shown anything for the
[38:30] rsi hud just yet but yeah one thing that
[38:33] way every week
[38:35] it'll come
[38:36] yep one thing we we started to do is
[38:40] it's not the ship huds um but we started
[38:42] to roll out some manufacturer styles for
[38:44] the other screens in the ships so um for
[38:48] crusader ships for example i think in
[38:51] 315 you'll you'll see on some of those
[38:53] we've got some new door panels and we've
[38:55] got a star that we can apply to the
[38:57] elevators and so on so
[38:59] um that work is starting to creep in
[39:00] there even if it's not in the huds that
[39:02] you see right now he even showed up on
[39:04] some ships that weren't crusader in the
[39:06] ptu
[39:07] it's work in progress
[39:09] um always fun
[39:11] are there any plans to bring back custom
[39:13] qt waypoints
[39:17] oh that is a good question we had to ask
[39:19] the uh
[39:20] question really
[39:22] what did they say
[39:24] hang on
[39:26] where is that
[39:29] david what's the cat's name
[39:31] that one's called ronnie that's one that
[39:33] um has been confused by the uh
[39:36] chain of the clock
[39:38] the time changes and she thinks it's
[39:41] an hour later than it is so it's
[39:43] definitely tea time now according to her
[39:46] all right i found the cutie waypoint
[39:47] stuff so
[39:48] i spoke to uh
[39:50] john crew
[39:51] and he said that vt
[39:53] they do have plans for quantum in future
[39:55] that it might not involve custom qt
[39:58] waypoints but it should give the same
[40:00] end result
[40:01] so they're
[40:02] the prototyping some ideas at the moment
[40:04] but uh there's not a lot more they can
[40:07] tell right now
[40:08] okay
[40:09] uh will the targeting ui get smarter
[40:13] than just red and white targets such as
[40:16] color codes for team members org members
[40:18] faction members uh etc uh this would
[40:21] really help during something like nine
[40:22] tails yeah that's that's uh that's
[40:26] something that we're looking into right
[40:27] now we've we've we have had feedback
[40:29] of expanding that system because
[40:31] obviously just having i know good bad
[40:33] and in between is quite you know
[40:36] simplistic so um we've been looking at
[40:39] some ex
[40:40] potentially adding some extra colors in
[40:41] there some extra icons and so on so you
[40:43] can you know split out a lot more
[40:44] information from that so it's we've been
[40:47] having those conversations this week
[40:48] actually so
[40:51] the system will come online at some
[40:53] point and we have got plans for it
[40:55] um it's kind of that phase now where we
[40:58] as a designer designers we kind of know
[41:00] what we want to do with it we need to
[41:01] get final sign-off from all the like
[41:03] directors and so on and then
[41:04] fairly soon that should start to make
[41:06] its way into the game i think
[41:09] um
[41:11] mfds uh what technology blockers are
[41:13] preventing my ship from saving mfd
[41:16] status such as which screens i choose to
[41:18] place on each mfd per ship
[41:20] i'm going to guess that's probably just
[41:22] waiting for the new mfd system to be
[41:24] finished right
[41:25] yeah uh
[41:26] this is this is more amount of priority
[41:28] so there's no
[41:30] technical blockers it's it
[41:33] once it's possible right now it's just
[41:35] not
[41:37] um
[41:38] you wouldn't write it with the current
[41:39] system because we would want to it would
[41:41] just be like wasted work um so
[41:45] we're in the process of upgrading the
[41:49] way that the ui works on mfds and part
[41:52] of that upgrade will include
[41:55] much better customization and the much
[41:58] better customization will inevitably
[42:00] lead to
[42:01] wanting to be able to persist that
[42:02] customization from session session or
[42:05] um
[42:07] in different vehicles and stuff so um
[42:09] yeah that's part of
[42:10] that block of work that they're doing
[42:12] you know
[42:13] pretty much yeah is inbuilt into that
[42:16] task so technically no blocker but the
[42:19] blocker is a priority issue or more than
[42:21] anything else
[42:24] um
[42:27] the chat here um
[42:29] can we please have the old landing hood
[42:31] back
[42:34] yes um yes at some point
[42:38] yeah so um we we have got plans to bring
[42:40] this back at some point yeah um it ties
[42:43] in a little bit with what we want to do
[42:44] the radar because um
[42:46] you know you've got that spherical radar
[42:47] thing at the bottom so it
[42:49] some of the functionality relates
[42:51] relates to that so it's part of that
[42:52] design to a degree and we yeah
[42:54] it's definitely planned
[42:56] okay um
[42:59] this is a big one for a lot obviously
[43:01] star citizens are maybe not the normal
[43:04] uh a batch they're not all running
[43:06] 16 by nine
[43:08] you know 1920 by 1080 screens
[43:10] by any means
[43:12] are there any plans to improve the ui so
[43:16] it better fits non-standard aspect
[43:18] ratios like ultra ultra ultra wide
[43:22] screens yeah i can see bone hey how you
[43:24] doing
[43:26] what do you think about this bone
[43:29] um
[43:30] yes
[43:33] so there's a one word answer to this
[43:35] which is yes and then
[43:37] i could go all night about
[43:39] what we're doing to improve this
[43:41] um
[43:42] give it give us the 10 cent version
[43:44] right so aspect ratios are
[43:48] the thing that gives most ui designers
[43:50] ui engineers like the absolute
[43:52] fear um
[43:55] it's just bane of our lives um
[43:58] but i totally appreciate that especially
[44:01] on pc games as well that my people have
[44:04] some cool setups of
[44:07] 30 to like
[44:07] nine and 48 by nine but also some
[44:10] strange people have four by three aspect
[44:12] ratio screens and things like this
[44:14] so
[44:16] or at least you can run it in a window
[44:17] that is four three and all these kind of
[44:19] things so yes we have to build in a lot
[44:22] of tech to deal with this um
[44:24] so we have
[44:26] stuff
[44:27] that's kind of like when you resize your
[44:29] window on a
[44:30] web browser or something and you see you
[44:32] know the text jiggles around and it
[44:34] aligns itself properly or being well if
[44:36] it's designed correctly so it's all
[44:38] flexible like that so the system is
[44:40] designed to be flexible
[44:42] the coordinate system can change for the
[44:44] aspect ratio so
[44:47] you know you don't see stretch things
[44:49] and things like that
[44:51] so that like a core level yes it's
[44:53] inbuilt
[44:54] but then
[44:56] um there's a design level that all the
[44:59] assets have to be designed in a way that
[45:01] can be flexible
[45:03] um
[45:04] so
[45:05] that's pretty tricky because you have to
[45:06] make lots of choices about you know well
[45:08] if it gets all squished up do all these
[45:10] things go along the bottom or or do they
[45:13] get clipped off at the end or do they
[45:14] shrink down and all these kind of
[45:16] decisions that have to be made by each
[45:18] for each individual design
[45:20] and then we've got individual
[45:22] like responses for things so
[45:24] things like the front end we've just
[45:26] pretty much gone with a 16 by nine
[45:28] aspect ratio and we just
[45:30] black bar the
[45:32] wider screens and
[45:34] uh or black bar the top and bottom if
[45:36] you're on a on a square screen
[45:39] um and that that's it's a bit of a cop
[45:42] out for that screen but it's nice
[45:43] because you you just
[45:45] you can design a nice looking 16x9
[45:48] layout for the whole front end where it
[45:51] gets a bit more tricky is things like
[45:53] the lens and visor
[45:55] because that's
[45:56] that's obviously a lot more
[45:58] emergent and then we still have to make
[46:01] a lot of decisions about this where
[46:04] um
[46:05] i mean the tech supports this but it's
[46:07] just about making design decisions let's
[46:09] say you've got like um different icons
[46:11] in the top left and top right hand
[46:13] corner if you have three monitors do you
[46:15] want those into the top left and right
[46:18] corners of those three monitors because
[46:21] that's not really in your eye line
[46:22] you're going oh how where's my map or
[46:24] how many bullets do i have or whatever
[46:26] it is and you sort of
[46:28] it's
[46:29] having three monitors is a bit more
[46:31] about having a lot of peripheral vision
[46:33] it's not about like moving all the way
[46:35] up or the ui the way up all the way out
[46:38] um so there's a lot of design decisions
[46:40] that go along the lines of that so yes
[46:42] we're working on that also
[46:44] and finally um one of the bigger
[46:46] problems of
[46:48] one of the bigger challenges sorry of a
[46:50] star citizen
[46:52] is it's diegetic so
[46:55] uh that means like all this ui is
[46:57] actually in world on physical objects so
[47:00] we've got um
[47:01] maybe a 16 point benign panel or even
[47:04] the mobi glass is actually a 16 minute
[47:05] panel that you're holding in front of
[47:07] you like this so that comes with
[47:09] challenges of saying well if i've got a
[47:11] very square monitor and i'm trying to
[47:13] look at this wider aspect ratio
[47:16] screen where'd you position your camera
[47:18] i mean because only so far you can move
[47:20] your arm back and head back to try and
[47:23] see see this
[47:25] uh oblong thing in a square square hole
[47:29] um same goes for using the kiosks um do
[47:32] you just get a lot more peripheral
[47:33] vision do you have to move the camera
[47:35] back does the guy have to stand further
[47:37] away we're having to make decisions to
[47:39] make it
[47:41] be logically correct and fit in to the
[47:44] universe properly not like just
[47:46] um we don't we don't cheat in any point
[47:48] for these things but it becomes really
[47:50] tricky um we are really designing the
[47:54] visor too because currently the visor is
[47:56] it's actually physically a physical
[47:58] piece of geometry a piece of glass with
[48:00] ui on it and it sort of
[48:03] sits in front of the camera like this as
[48:05] you move the camera around it goes with
[48:07] the camera
[48:08] but that inherently has problems of well
[48:11] it's it's
[48:13] it's a piece of glass at 69 aspect ratio
[48:15] so what what you want to do if you want
[48:17] to draw things outside of that piece of
[48:20] glass it was sort of restricted
[48:22] so we're redesigning that and coming up
[48:24] with different solutions to that to make
[48:25] that work properly but
[48:27] on the whole yes we're working on it but
[48:30] it makes me cry on quite a regular
[48:32] basis the desire for a diegetic world
[48:36] in a
[48:37] reality of
[48:39] differing aspect ratios i mean i mean i
[48:42] i i when i move the game over to my
[48:45] vertical monitor on the right here i
[48:47] mean it's just garbage
[48:50] there's no support for my vertical
[48:52] alignment at all
[48:53] just put that out there just
[48:56] um
[48:58] raises a ticket with that
[49:00] yeah we'll put it on the backlog
[49:03] oh will we at some point be able to
[49:05] change the color
[49:07] of our huds a light blue hud over a
[49:09] snowy white planet and moon can be kind
[49:12] of hard to make
[49:14] out this is it's kind of two bits to
[49:17] this i suppose there's the
[49:19] there's a legibility thing like how easy
[49:21] is it how easy is it to read and then
[49:23] there's the customization thing so
[49:25] um
[49:27] in terms of legibility we're we're
[49:29] always looking into better ways to do
[49:31] that so we have a thing at the moment
[49:32] where it
[49:33] it automatically makes the screen a bit
[49:35] brighter and and increases the drop
[49:37] shadow on bright backgrounds so that's
[49:40] that's a little step in the right
[49:41] direction but we're always looking to
[49:42] waste we can improve that so
[49:45] ideally we want to get to a point where
[49:47] players wouldn't need to change the
[49:48] colors to be able to see the stuff
[49:50] i think
[49:51] we're getting there
[49:53] and then in terms of customization
[49:55] the direction at the moment is we want
[49:57] to we want to kind of make each
[49:58] manufacturer feel unique so especially
[50:01] starting with the ships we want
[50:03] people to be able to say okay my drake
[50:05] ship looks like this with these
[50:07] particular colors and my rsi ship looks
[50:09] this way
[50:10] so we're definitely heading more towards
[50:12] that direction at the moment
[50:14] um technology wise
[50:17] it is it would be possible for us to
[50:19] allow things to be customized but
[50:21] i think that's something we'd look at
[50:22] look at after we've got the i know the
[50:24] vision the ideal vision in place first
[50:31] go ahead
[50:32] no just to reiterate what simon's saying
[50:35] ideally we wouldn't
[50:37] it wouldn't be an issue that you'd want
[50:39] to change the colors if if the
[50:41] legibility was
[50:43] you know
[50:44] uh perfect across all these different
[50:46] environments again it's the same
[50:48] uh story with uh it being diegetic that
[50:51] uh
[50:52] the visor and the lens and the her head
[50:56] up displays are actually in world so the
[50:59] um
[51:00] the same effects are applied to them
[51:03] that uh applied to real pieces of glass
[51:06] in world so you know the exposure is
[51:08] different and
[51:10] what's behind them we can't really
[51:11] control we can't control if they're
[51:12] looking at the sun or the blackness of
[51:14] space so
[51:16] there's automatic exposure control to
[51:19] change a bit like you get on a on a
[51:22] smartphone it brightens up in
[51:24] in bright environment darkens down it's
[51:27] obviously more complex because it's
[51:28] translucent
[51:30] um
[51:31] so in an ideal world we would fix all
[51:34] the problems so people wouldn't have to
[51:36] or feel like it was a like a requirement
[51:38] and
[51:39] that would i don't think it would work
[51:41] long term anyway because
[51:43] like you're you're flying on somewhere
[51:44] that's
[51:46] snowy for instance and you decide to
[51:48] pick colors that would look good against
[51:50] the snow and then you suddenly fly into
[51:52] space and then it doesn't look good it's
[51:54] it's not really a solution you have to
[51:56] keep
[51:57] configuring your colors
[51:59] to to be able to read the ui really the
[52:01] ui should be adapting to the environment
[52:03] properly and hopefully we'll solve that
[52:05] or at least get it dialed in a lot
[52:07] better
[52:08] i i wonder
[52:10] i wonder if if if if maybe
[52:13] it's
[52:14] i mean
[52:15] you can look uh
[52:16] which i think had a says i wonder if
[52:19] maybe even just a
[52:21] single button
[52:23] light dark mode toggle
[52:25] might just help folks you know you know
[52:28] if it's just you know put it in their
[52:29] control like you know it's light mode
[52:31] when they're flying everywhere else and
[52:32] then when they happen to be facing the
[52:34] sun or they happen or they go down to
[52:37] the surface of microtech they can hit
[52:38] one button and just switch it to to a
[52:40] nightmare which is which is a darker you
[52:42] know themes i wonder if something like
[52:44] that might just
[52:45] resolve a lot of these issues in the
[52:46] meantime but
[52:48] yeah
[52:50] well we've definitely talked about it
[52:51] for
[52:52] visually impaired people as well anyway
[52:54] um to because certain uh colors are not
[52:58] as easy to um
[53:00] uh decipher so
[53:03] the will we have talked quite a lot
[53:05] about how we can customize this and make
[53:07] it a lot more
[53:08] approachable for different different
[53:10] people to use
[53:13] um
[53:18] let's see we've only got we've only got
[53:19] a couple minutes left um
[53:22] let's see
[53:23] uh
[53:24] one of the big features coming along in
[53:26] alpha 316 is refueling uh we're going to
[53:29] talk about refueling on isc in a couple
[53:31] weeks but uh
[53:34] as far as the ui the interface and stuff
[53:36] like that uh
[53:38] what what's your guys involvement been
[53:40] in refueling up to this point
[53:43] okay well refueling is a good one
[53:44] actually it's going really well so um
[53:47] when we started out there was we began
[53:50] with the game there was a game design
[53:51] dock that uh euphu made which was pretty
[53:54] cool and then initially we had some i
[53:56] had some conversations with those guys
[53:58] we just roughed out some really basic
[53:59] ideas for the ui so like i would just
[54:02] draw some boxes and put text on so they
[54:04] they had an idea of
[54:06] a very vague direction where i would
[54:08] take it and then you kind of left it
[54:09] with them for a bit
[54:11] and they've been implementing the actual
[54:12] system then
[54:14] using the building block stuff they put
[54:16] in this kind of placeholder ui so
[54:18] it's all working and it's good it just
[54:20] looks a bit rough around the edges
[54:22] and then i think i mentioned it before
[54:24] we've now kind of
[54:26] we haven't taken it off them we're
[54:28] working really closely with them to kind
[54:29] of take that and make it good so
[54:31] processors we've got uh one of the guy
[54:34] one of the guys is
[54:35] it's kind of a mixture between a graphic
[54:36] designer and a ui designer so he's
[54:38] basically
[54:39] he's taking those initial screens and
[54:41] rejigged the layout a little bit and
[54:42] resize things and also applied this nice
[54:45] color scheme and little graphical
[54:47] elements on there so he's going to make
[54:49] these
[54:50] visual versions that are 2d they're just
[54:52] kind of
[54:53] in photoshop or whatever and then on the
[54:56] other hand we've got one of our
[54:57] technical ui designers who's taking
[54:59] those concepts and kind of marrying them
[55:01] up with
[55:02] the stuff that you
[55:03] put created so kind of actually
[55:06] implementing it in building blocks so
[55:09] that's kind of that's the ideal process
[55:11] and it seems to be working really well
[55:12] just now so i'm pretty happy with that
[55:15] and i guess everyone will get to see it
[55:16] quite soon yeah folks will get their
[55:18] first look at refueling in a couple
[55:20] weeks sometime after iae
[55:23] uh and when we do show it remember like
[55:25] all things it'll be still be work in
[55:27] progress when you see it uh
[55:30] just important to remember that
[55:31] everything you see on isc is work in
[55:34] progress we put it down in the corner
[55:35] but sometimes folks still like what does
[55:38] it look like
[55:39] it's working progress just look at the
[55:40] bombs remember how the bombs looked in
[55:42] in in isc and like oh the bombs are a
[55:44] little overwhelming and then you get
[55:46] into pt and it's like oh wow you're like
[55:47] you can see them from miles away it's
[55:48] like
[55:50] work in progress we waited to the last
[55:51] show of the season we waited as long as
[55:53] we could to get those great bomb visuals
[55:55] in and sometimes you just it's just not
[55:57] ready in time so it's work in progress
[55:58] remember it's always working progress
[56:02] i would tattoo that somewhere if i could
[56:04] um
[56:07] chat here's another big one will in-game
[56:10] chat uh
[56:11] get a overhaul for display that will
[56:13] allow us to display multiple chat tabs
[56:16] with different colors maybe all in the
[56:18] same feed
[56:20] chat customization
[56:22] yeah it's a good question is chat is one
[56:24] of those things that we need to port
[56:25] over at some point soon um we've not
[56:28] really looked into what we want to
[56:31] change design-wise i'm sure there'll be
[56:33] things like that that we want to sort of
[56:34] polish up
[56:36] um but uh yeah it's all right it's an
[56:38] hour to do this basically
[56:40] so when we when we get to it we'll
[56:42] check out what's there we'll see what
[56:44] the competition is doing like there's a
[56:45] lot of other games out there that do a
[56:46] good job of chat and we'll work out you
[56:48] know what actually we want to put into
[56:50] it and then
[56:51] hopefully what you get out of the other
[56:53] end is is great
[56:55] but uh we haven't quite got to the point
[56:56] where we're working on that yet
[56:59] and maybe for some of us the option to
[57:02] just defaulted to turned off
[57:08] another big uh another big question that
[57:10] comes up quite often
[57:12] this is probably something along with
[57:13] like the star map work um
[57:16] overall what's involved in the creation
[57:19] of a coordinate system
[57:20] uh obviously we have service beacons and
[57:23] stuff now but it can be very difficult
[57:25] to determine where you are on a planet
[57:28] or in space and easily tell other people
[57:30] where you are it's like this um
[57:34] what what what what what's involved in
[57:35] that kind of work is this something that
[57:37] we're ever going to have is something
[57:38] that we can't have is something that's
[57:40] in progress what can you tell us
[57:43] so well um
[57:45] i guess the way that games are made in
[57:47] 3d graphics as well you generally have
[57:48] this like xyz coordinate system which
[57:51] is fine like if you want to see where
[57:53] this pen is in my room i can say it's
[57:55] like three
[57:56] i know three across and two up whatever
[57:58] which is fine but then
[58:00] when you're in space oh actually imagine
[58:02] you're on a moon that's hot it's
[58:04] rotating that's orbiting around a planet
[58:06] which is orbiting around the sun so
[58:08] those
[58:09] xyz coordinates aren't going to work so
[58:12] what we think we need to do is have like
[58:14] a system that relates to what you are on
[58:16] so
[58:17] if i'm on that moon i want to know i
[58:19] know what's my angle relative to the
[58:21] center of the moon and how far out am i
[58:23] from that so we probably go with
[58:24] something along those lines
[58:27] in terms of putting into the game it's
[58:29] going to tie in quite closely with the
[58:31] new star map radar
[58:32] so we definitely do want to have that in
[58:34] there when we release a new version of
[58:36] those so
[58:38] minimum will display where you are so
[58:40] people can say oh but this is this
[58:42] relative to stanton system for example
[58:45] um what we would like to do ideally is
[58:47] have some way of sharing those
[58:48] those details so maybe you can right
[58:50] click and send
[58:51] the location to one of your friends all
[58:53] that kind of thing
[58:54] we still need to work out the details on
[58:56] that but
[58:57] we definitely want to improve that
[58:59] that whole area overall
[59:04] uh
[59:05] folks you've done it
[59:07] your hour is done
[59:09] did it go by faster than i said like i
[59:11] said it would
[59:12] it was pretty quick yeah yeah
[59:15] there's always like oh can i fill up a
[59:17] whole hour then at the end they're like
[59:18] i went by really fast uh thank you guys
[59:20] for taking the time to
[59:22] show up on the show
[59:24] this week we don't get to have you on
[59:26] very often
[59:28] simply because
[59:29] the ui team is probably the one team in
[59:31] the entire company that touches every
[59:33] single aspect of star citizen's
[59:35] development there is no aspect of star
[59:37] citizen that doesn't involve ui in one
[59:39] way shape or form so
[59:41] these folks usually have their hands
[59:43] pretty full so thank you for taking the
[59:45] time to join us here at the end of this
[59:47] week uh that's it for star citizen live
[59:50] outer space interface uh
[59:53] come back next week next week on isc we
[59:56] have a show entirely dedicated to the
[1:00:00] future of space combat
[1:00:02] with the vehicle experience team uh they
[1:00:04] got a whole nice little presentation
[1:00:06] about uh
[1:00:07] the current work they're the work of
[1:00:09] their immediate future and then some
[1:00:10] look at some long-term stuff
[1:00:13] it's a great lead in before ie starts
[1:00:15] the next week before and then uh next
[1:00:17] friday when we come back here uh we're
[1:00:20] going to have a a super a rare guest
[1:00:26] let me have to tune in and find out it's
[1:00:28] somebody who's made a lot of spaceships
[1:00:29] for us and somebody who's made more
[1:00:31] spaceships than anybody in the history
[1:00:33] of our game it's mr gavin rothery uh
[1:00:36] concept artist extraordinaire and film
[1:00:39] director and all kinds of stuff so we're
[1:00:41] gonna have him on the show and talk a
[1:00:42] bit about his uh career and
[1:00:45] and and life and work on star citizen so
[1:00:47] check that out next week uh four star
[1:00:49] citizen live
[1:00:51] i'm jared
[1:00:52] that was simon
[1:00:54] that was david bonegill i think we made
[1:00:56] it through without calling you bone a
[1:00:57] bunch of times uh take care everybody
[1:01:00] we'll see you next week cheers bye
[1:01:04] see i told you that'd be easy
[1:01:08] it's easy when you know what you're
[1:01:09] talking about
[1:01:10] [Laughter]
[1:01:27] you

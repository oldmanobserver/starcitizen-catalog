# Star Citizen Live: Points of Interest

**Video:** https://www.youtube.com/watch?v=LsmrWivDvek
**Date:** 2020-01-24
**Duration:** 1:01:36

## Transcript

[00:01] hi everybody welcome to another episode
[00:04] of Star says and live game dev
[00:07] points-of-interest
[00:08] 2020 the beginning the sequel the
[00:14] quickening oh my gosh remember
[00:16] Highlander - the quickening dears yeah
[00:18] no no I mean it so Highlander - oh yes
[00:22] your Highlander - if you're seen
[00:23] Highlander because you want to be a
[00:26] insane crazy a sequel that completely
[00:28] just tosses the first move oh that's
[00:30] straight - oh yes oh no no it was
[00:31] theatrical okay let's just say they
[00:33] brought Sean Connery back and you know
[00:35] like how it's like exactly all right off
[00:39] to a good start
[00:39] hi I'm your host Jerry how could be
[00:41] joining us on the show today is
[00:43] environmental artist luan better idea on
[00:45] how you doing hello huh yeah pretty good
[00:48] one of those a Fridays you know get to
[00:51] the end of the day yeah you're tired I'm
[00:54] always jealous about you guys you're at
[00:55] the end of the day when you do these I'm
[00:56] at the beginning that's like how I
[00:58] looked over here to pretend like I could
[01:00] see you because then you're not like on
[01:01] the other half of the opposite like look
[01:02] over to your right there okay we did it
[01:06] again you thought your left right so now
[01:07] it looks like we're looking at left yes
[01:09] I know you have to look over to the
[01:10] right so it looks like we're talking to
[01:11] each other oh the one is an
[01:13] environmental artist for clarium games
[01:15] in our UK studio and on this today's
[01:17] episode of star citizen live game dev we
[01:20] are foregoing the traditional QA format
[01:23] of art of our normal series to showcase
[01:26] a bit of the work that goes on within
[01:27] our studios and the one being an
[01:30] environmental artist he's gonna take us
[01:31] on a sort of a tour of the type of work
[01:35] that he does so well the one tell us
[01:37] what we're gonna be doing today so uh
[01:40] today I think it would be quite cool to
[01:42] focus a little bit on points of
[01:44] interests and points of interests are
[01:47] kind of anything from a small I don't
[01:50] know like a small derelict to a huge
[01:54] Space Station crashed on the on the
[01:56] planet - which is awesome really liked
[01:58] which is also derelict
[02:01] so a turtle in the bucket in the middle
[02:03] of Hurston like anything like that's a
[02:04] point of interest and it's it's kind of
[02:06] to bring the player something to go and
[02:10] explore as well as we can tie those
[02:11] things into like different mission
[02:13] parameters and create
[02:14] like all kinds of things such as like
[02:17] small communities that you might run
[02:18] into in the future but the focus really
[02:20] is to kind of show off these new sort of
[02:23] pio i ground locations that we're
[02:25] working on is there a turtle in a bucket
[02:28] in the middle of person somewhere I'm
[02:29] just gonna stare the camera and smile
[02:31] just out of the middle of nowhere just a
[02:33] bucket with a journal it might be you
[02:36] know sometimes we just find things in
[02:37] the the layer files and alright I'm
[02:41] welcome from here tonight okay the ones
[02:45] camera shaking because he's touching the
[02:46] desk and it's moving is what I mentioned
[02:48] as well there's other people ah well
[02:51] it's alright we're gonna hide the
[02:53] cameras in a minute anyway and get to
[02:54] things so let's go ahead and get started
[02:55] to jump in we've only got an hour we've
[02:57] got a lot to try to build so if you want
[02:59] to start your screen share then we'll
[03:00] just jump into it let's go so I thought
[03:05] it'll be interesting to start with just
[03:07] sort of how we set up the derelicts and
[03:10] then jump into something a little bit
[03:11] more live so for the derelict some go on
[03:15] the Star Ferry level here and it's you
[03:19] kind of have to build up the assets
[03:21] based on and of course the ship that you
[03:23] put down right so you can see there's a
[03:25] lot of things here there's a lot of
[03:28] design markup there's a lot of art
[03:30] dressing but we've sort of focused on
[03:33] putting the bulk of the ship down and
[03:35] then sort of embedding it in with a
[03:37] bunch of assets like these and then you
[03:39] have things like decals which is this
[03:40] little area over here you can see this
[03:41] spill some extra assets that we might
[03:45] add in stuff like this
[03:47] there's the effects being added in here
[03:49] like this particle effect here there's a
[03:52] lighting will come in and maybe do some
[03:54] sort of pass on the interior I think
[03:55] it's pretty dreary in here as it should
[03:57] be um yeah it's sort of all about kind
[04:01] of creating this area these little areas
[04:04] that have been long forgotten and
[04:07] dressing with a little bit of
[04:08] storytelling and then what happens we
[04:11] have these boxes here which kinda are
[04:14] the design markup for where it sits on
[04:16] the planet because we need these boxes
[04:19] to remove any rock or tree that in might
[04:22] collide with when we place it down
[04:24] there's a lot of audio markup which you
[04:26] can see here audio will come in and do a
[04:28] awesome some nice atmospheric scary
[04:32] audio for when Inga's dere looks cuz I
[04:33] don't know about you guys but I find it
[04:34] very scary when you're in there it's a
[04:37] little lonesome and then there's also
[04:40] some of these assets kind of just have
[04:42] this thing called aniline tag and what
[04:45] the align tag does is when we used when
[04:49] we use the polite placement tool which
[04:51] is what we used to put these assets down
[04:53] to the planet these aligned tags kind of
[04:56] help the certain assets aligned to the
[04:58] terrain because obviously if we just
[04:59] bring this in flat it would likely just
[05:01] float on the areas of the terrain so
[05:04] this placement tool something that we're
[05:06] heavily developing we're now heavily
[05:08] improving I'm not gonna show it for you
[05:10] guys today but I just kind of want to
[05:11] give you a sort of overview of how we
[05:14] actually go on about making these and
[05:16] how we make any of these ground
[05:18] locations in the future so you can
[05:19] imagine these might be even like a large
[05:23] outpost I'll post a place in the same
[05:25] way actually yeah so I want to make sure
[05:27] we don't we don't lose that point even
[05:30] though the placement tool which is a
[05:31] tool that will help to what we're going
[05:34] to see today the placement will help
[05:35] this along and be much more efficient we
[05:39] are still marking up our POS and our
[05:41] derelicts now for the upcoming tool that
[05:44] will come later so it's one of the ways
[05:45] that we work today towards technology
[05:47] that's coming in the future it's for us
[05:50] right for folks who are submitting
[05:52] questions well it's not a traditional
[05:53] Q&A I will be taking questions from the
[05:56] from the chat to give to the one as I
[05:59] see them as appropriate just remember
[06:01] that the one is an artist he is not a
[06:04] gameplay designer so folks asking will
[06:06] we be able to salvage this or stuff like
[06:08] that this is not the person who could
[06:11] answer those questions he's an artist so
[06:12] you should try to keep your your
[06:14] questions to art or art technology as
[06:18] opposed to any gameplay implications and
[06:20] I'm also an environment artist which
[06:22] means I can answer questions about the
[06:23] art on ships either yes exactly it's
[06:26] also an environment art so while we're
[06:27] sitting here looking at a spaceship the
[06:29] only question the only spatial related
[06:31] question we can ask him is why does he
[06:32] hate the star fare so much that he's
[06:34] just I don't hate it look how many of
[06:36] them you've destroyed already this was a
[06:38] bit of a rampage come on this was a
[06:40] rampage
[06:42] and the Friday right um so I think it
[06:46] was kind of cool to sort of show how we
[06:48] might actually build a different kind of
[06:51] location voi so if I just drag this guy
[06:54] to the right we have good old Hurston
[06:57] here I think is a really good place to
[06:59] have these kinds of more sort of small
[07:01] towns and communities that might build
[07:03] along the ridges of the mountains and
[07:06] things like that so I have pre picked
[07:09] the location if we fly over here over
[07:11] this Ridge I've got a couple of things
[07:13] here though help and I thought it'd be
[07:17] kind of cool to maybe make a abandoned
[07:20] I'm not even abandoned but like a mining
[07:22] town style kind of thing okay you can
[07:25] see a pic dislocation because when the
[07:27] Sun hits that building over there you
[07:28] just have that white sheen of the gold
[07:31] and it's just really epic looking at it
[07:33] right
[07:34] so I found this kind of a little bit of
[07:37] greenery and some junk piles over here
[07:39] and I thought this might be a nice flat
[07:41] location to start building some things
[07:43] there will be some weird alight Minh
[07:46] alignment issues as I start to put these
[07:48] down which is the kind of thing that the
[07:49] placement tool would help with right so
[07:52] let's start grabbing things and flicking
[07:55] through them I put some assets down the
[07:56] ready to start what we have right so if
[08:03] we actually go down to the person level
[08:05] because one of the issues that we have
[08:07] when we're working on these kinds of
[08:08] things is that we'll like fly around
[08:10] here and then we'll start reading the
[08:12] scale and everything feels really small
[08:13] and then when you actually get down to a
[08:15] person level everything just made it
[08:17] feel so much bigger and when you're
[08:19] building something like spaceships and
[08:20] space stations and enormous structures
[08:24] like the Hurston building over there it
[08:26] is so difficult to understand the yeah
[08:31] the person scale because everything in
[08:33] this game is so huge right but yeah so
[08:36] we have a little pot here to the to the
[08:41] person in chat who asked every every
[08:43] derelict they see or is either a star
[08:45] fair or a caterpillar or a constellation
[08:48] it's part of what we just showed it
[08:50] takes a while to mark up and create
[08:52] those derelict since just a
[08:54] matter of priorities things that that
[08:57] the time and the resources to go through
[08:59] and make additional derelicts and of
[09:01] course the ship team of course has to
[09:03] make more destroyed versions of whatever
[09:06] ships they have and give us those assets
[09:09] so we can actually work with as well
[09:11] like most things in game development it
[09:13] all just comes down to a priority an
[09:15] artist can be working on the additional
[09:18] derelicts or they can be working on
[09:19] something for a new location it's like
[09:22] that it's just the it's one of those
[09:24] things that come in the towards the end
[09:26] of Sprint's like when when somebody
[09:28] finishes a sprint early it's rare but it
[09:30] happens we finish the Sprinter early
[09:33] it's like okay let's go let's go and do
[09:34] another dare elector let's go and do
[09:35] another turtle in a bucket and I'm I'm
[09:41] not gonna talk about that turtle in the
[09:42] bucket do they I'm already renamed in
[09:45] the show and this is on YouTube it's
[09:46] gonna be called turtle in a bucket but
[09:47] on the bucket and I throw it in the
[09:49] bucket an hour with Luanne yeah right if
[09:52] anybody finds the turtle in a bucket and
[09:55] they take a screenshot and post it to me
[09:57] on Twitter I'll give you I'll give you a
[09:59] prize because I want to see it I don't
[10:00] know where it is if one exists know
[10:04] about any turtles and bucket let me tell
[10:06] you but it's a it's always quite nice we
[10:09] think of these little Easter eggs that
[10:11] we can put in the game and where we can
[10:13] put them and we just go over to say the
[10:16] art director or the lead and we're just
[10:18] like can we put something like this in
[10:20] sometimes I guess approved sometimes a
[10:22] little bit too crazy to get approved but
[10:24] you know what is the giant red box that
[10:28] we see appearing in the background that
[10:30] guy so when I toggle on the helpers here
[10:33] which is what helps me a moment
[10:38] yeah it's what helps me see these things
[10:41] here to pick things you can see some
[10:43] boxes and some wireframes and if I go
[10:47] you can see that it's kind of markup for
[10:49] certain areas and certain different
[10:51] things for this one I'm not too sure
[10:53] exactly what it is but I can imagine
[10:55] it's probably like a design markup for a
[10:58] restricted area or like something that
[11:02] might help the player go down to the ER
[11:04] so it's all kinds of different design
[11:06] markups
[11:09] I'll ask a designer cuz I'm curious my
[11:12] father we I find all kinds of different
[11:16] boxes that I'm like what is that for
[11:19] right so let's find another housing
[11:23] building structure to put down these
[11:25] ones interesting one lives in a cargo
[11:29] container
[11:30] I like that doesn't even have a back
[11:33] fantastic maybe so one thing I can do
[11:41] obviously like I said before we build
[11:43] these in a separate level and then it
[11:45] all gets aligned to the terrain but one
[11:47] thing I can do whilst I'm building this
[11:48] is if I just click it on the terrain
[11:50] like this it gets a lined in and
[11:52] sometimes not perfectly sometimes
[11:54] they'll come in a little bit like say
[11:56] this but it helps a little bit if we're
[11:59] just pre-visualize in something and
[12:01] trying to understand what we're building
[12:03] we've we've make statements to this
[12:06] effect before you know procedural
[12:08] generation and these automated tools are
[12:11] just that they're tools they're not an
[12:12] ends there are an end goal they're there
[12:15] they're there the thing that helped us
[12:17] along we will always prefer that
[12:20] artistic touch to come in after after
[12:23] things have been generated after things
[12:24] have been aligned it's still important
[12:26] to have an artist come in with their own
[12:29] talent their own eye their own
[12:31] idiosyncrasies and validate and then
[12:35] tweak and stuff like that happens a lot
[12:38] of the times when we're building a
[12:40] procedural location we obviously build a
[12:43] very bare-bones version with just some
[12:45] some moles and stuff like that and we
[12:47] cut it up to be the procedural chunks
[12:49] and then it takes you know take some
[12:51] time to validate everything that happens
[12:53] and add a little bit of flavor a little
[12:55] bit of touch that you know keep the
[12:57] human touch as I like to call it that
[12:59] you just don't quite see if something
[13:00] was a sterile sterile area as a just
[13:03] basic procedural generation just a happy
[13:07] little trash pile no trash pops already
[13:10] getting big as you can see already got a
[13:12] big structure over there
[13:15] gingy wants to know how many different
[13:17] types of rocks are in the verse I'm
[13:19] gonna say more than three or at least
[13:22] more than three or a planet theme just
[13:25] smashes them out they're very very good
[13:28] at that kind of stuff the organics that
[13:30] you know anything organic can be from
[13:33] this plant over here to the texture that
[13:36] goes on the terrain to the grass to the
[13:38] rock we might make these assets and they
[13:41] might help place it down those rocks
[13:44] over there those trees so that's kind of
[13:47] the organics and plant a team
[13:49] jurisdiction so just reminder that we
[13:53] are seeing we are talking with the one
[13:55] better Eddie he's an environmental
[13:57] artist from our environment art team in
[13:59] our UK studio are free to ask questions
[14:01] in the chat just remember that they
[14:02] should be aren't related if they are a
[14:04] gameplay related can we do this or will
[14:06] this happen in the future that's not
[14:08] something that the one works on so we're
[14:11] not going to be able to answer or
[14:12] address those so here's a good example
[14:14] of what I was talking about with those
[14:16] boxes that you saw around a derelict
[14:18] right now by just placing this prefab
[14:21] down you can see I have some of the
[14:23] plants and grass coming in through the
[14:25] through the building I can easily fix
[14:27] this but you obviously just bringing
[14:29] this up until it's not there however are
[14:31] a placement tool markup that we saw
[14:34] before allows it to call out any kind of
[14:36] acid that might be coming from the
[14:38] terrain so that you don't get these
[14:39] kinds of situations sometimes it's very
[14:44] useful sometimes you end up taking out a
[14:45] chunk of the terrain that you didn't
[14:46] think you take it out so there's a
[14:48] little a little bit of a adjustments you
[14:50] got to make
[15:00] what's this I'll take this platform
[15:07] I'm starting out small but I'm wondering
[15:10] if I can make it huge see what's we have
[15:13] to make this enormous one of the
[15:18] questions in chat is how do you
[15:20] differentiate between what's created by
[15:23] the environment team was created by the
[15:24] props team it's a very popular question
[15:29] one that me and Cory Benford if you guys
[15:32] know I often discuss so he likes to say
[15:35] that uh anything that's not bolted down
[15:37] is a problem and I like to retort with
[15:40] so is a space station a problem because
[15:43] it is not bolted down I guess
[15:44] parts of the space station are so when
[15:48] we're making a location we'll make a
[15:50] save this is in the white box stage and
[15:53] we've just placed down some of the basic
[15:56] geometry that might make out these areas
[15:59] over here these pods will come in and
[16:02] we'll do something that's called a
[16:03] proper quest passed and what that is is
[16:06] we have we'll look at the concept art
[16:09] and we'll look at what kind of small
[16:11] items might be in the concept art that
[16:13] we'll need that we and I don't naturally
[16:17] make its environment artists and we'll
[16:18] put put a request list through to props
[16:20] so in this case would be something like
[16:22] say this this box over here or this uh
[16:26] this table over here the lamp the some
[16:31] of these magazines the cup so it kind of
[16:36] there is a slight blurred line but it's
[16:38] mostly the sort of items that are
[16:40] dressing rather than large structural or
[16:46] yeah I guess structural is the best way
[16:49] to describe it yeah
[16:50] oh and in this case something like rocks
[16:53] and these these parts here these these
[16:57] kinds of beams and structures here are
[16:59] all part of say an environment art kids
[17:02] will just bash together a mapper to
[17:05] answer your question his question was
[17:06] working lamp and an abandoned place who
[17:08] said this was abandoned and not dying
[17:11] yeah I did say it could be abandoned god
[17:14] knows what else we don't know the story
[17:18] of this place yet
[17:20] sir God the classic windmill but in the
[17:25] subject of not knowing the story the
[17:27] place you know that's something we
[17:28] always think about when we're building
[17:30] these spaces is like we think of the
[17:31] story of who was here who was doing what
[17:35] why is this here did they build it here
[17:36] because they needed a little verandah
[17:38] area to just sit down and have a chat
[17:41] with their neighbors I mean move this
[17:43] thing out um as a matter of fact you
[17:45] know just thinking about that right now
[17:47] makes me want to put a table down so if
[17:50] I just I think you put one down yeah I
[17:55] think I put a table where do I put the
[17:56] table right then I put the table and
[17:58] it's time it's not a phrase you get to
[18:00] say very often in real life I think I
[18:02] put a table over here I think I don't
[18:04] know where did I put it where did I put
[18:05] a table and that is why I'm an
[18:07] environment artist I like to ask those
[18:09] questions where is the table what else
[18:17] have we got it is over and there's a
[18:24] question from I can't remember where was
[18:27] those miners are you as an environment
[18:30] artist involved in the white box process
[18:32] or is that primarily the game designers
[18:34] a it's a combination of both really um
[18:37] we have something that's called a design
[18:39] white box pass in which an artist and a
[18:42] designer will come in and sort of lay
[18:45] out what the space is usually this is
[18:46] after the concept arts done as well so
[18:49] we have the mood of the space and we
[18:50] have an idea of what we want to do with
[18:52] the space so you had the designers and
[18:56] the artists will come in and do this
[18:58] pass which is a very basic pass done
[19:00] with in engine solids as they're called
[19:05] which is kind of these very primitive
[19:08] boxes with grids on them to just mark
[19:11] out the metrics of the space and it's a
[19:17] longish process it's we do it in
[19:19] pre-production and we kind of just
[19:20] figure out the things that we want to do
[19:22] with the space where we want to you know
[19:25] foot travel time where some shops might
[19:28] be and then after that it's mostly the
[19:32] job of the environment
[19:33] to come in and figure out the actual
[19:37] building kits that we're gonna use for
[19:39] this in this case we'll make basic white
[19:41] boxes for these kids unless we have
[19:44] something that is already appropriate
[19:46] mm-hmm
[19:47] what did I put down tiny little thing so
[19:50] off screen I'm just cycling through a
[19:52] bunch of prefab items that I have I know
[19:57] we've talked about prefabs before but
[19:59] you know let's assume that every show is
[20:01] somebody's first show what's a prefab
[20:02] mm-hmm so a prefab is a collection of
[20:05] pre-defined items and entities so this
[20:09] might be this prefab here will be built
[20:12] out of some junk piles some assets here
[20:15] like this these kind of structural ribs
[20:20] these floor pieces and that's sort of
[20:22] like more of the environment part of
[20:24] things but we might add in here for
[20:26] example this prefab has a table and it
[20:30] has the the props and things like that
[20:34] but we also have markup for sound for
[20:39] design say if it's a you might have a
[20:42] cup they can pick up there and it's just
[20:44] a predefined collection of those items
[20:46] it's brief a bit short for prefabricated
[20:49] yeah and though and those prefabs can
[20:51] include just about anything they can
[20:53] include interactable items moveable
[20:56] items blanking aware where I was going
[21:02] with that but it's literally all kinds
[21:05] of stuff and it differs from an object
[21:07] container in that the option container
[21:10] is sort of the final I guess resting
[21:14] place of all of these items put together
[21:16] so we can string them in and out of the
[21:18] universe essentially yeah prefabs are
[21:21] for or for you know building the
[21:24] universe so you don't have to sit there
[21:25] in place every silly little thing so
[21:28] that so the procedural generation tools
[21:29] don't have to go place every silly
[21:31] little thing and the object containers
[21:33] are more about performance and streaming
[21:35] things in and out of memory and stuff
[21:37] like that chances are some things we can
[21:39] do with object containers that we can't
[21:41] with brief apps like we can say we make
[21:44] a set of architectural pieces
[21:47] we can't in different colors we can put
[21:49] that as a modifier on bulbs or
[21:50] maintainer so we can make all kinds of
[21:53] different like similar but different
[21:56] colored areas and all those kinds of
[21:59] little things like that
[22:01] grids and spectrum masks do you test a
[22:04] finished location to make sure a player
[22:05] can't get stuck in a hole we certainly
[22:07] try yeah very much being stuck in a hole
[22:12] is with is one of like the QA 10
[22:16] commandments you know who can't play or
[22:18] get stuck it's one of the primary things
[22:20] they will always test for first yeah the
[22:23] reality of the situation is that there's
[22:25] a whole lot more of you than there are
[22:27] of us and you guys tend to be a bit more
[22:30] tenacious with where you try to get to
[22:34] then we can we can sometimes be so while
[22:38] we certainly and this is true of any of
[22:40] you again I'm not speaking just if cloud
[22:42] of priam games well QA the world over
[22:44] does their best to make sure there are
[22:46] no places where players can get stuck
[22:48] that is and awards the scale of the game
[22:53] we're making means that it's a much much
[22:56] more difficult to test for every single
[22:58] little area that might be in the in the
[23:01] game yeah I mean it just reminds me it
[23:03] reminds me of depending on how long
[23:06] you've been following the project in
[23:08] late 2015 we went live with a 2.0 which
[23:14] was the first version of Stan's system
[23:16] yeah and there was one item that wasn't
[23:21] bolted down his aware it was a big
[23:23] Benny's vending machine there was one
[23:25] single big menus a vending machine that
[23:26] could be I was physicalized and could be
[23:28] moved and I think yes for months for Mom
[23:32] maybe almost a year through all
[23:34] throughout 2016 we saw we saw players
[23:37] just seeing where they could move that
[23:39] box yeah seeing where they they can get
[23:42] them out of the spacestation get them
[23:43] onto their ships take them to other
[23:44] space stations even there was even a
[23:47] thing involved it's called the Big Ben
[23:49] ease challenge where the you had to get
[23:52] the box and get it back into the hab in
[23:54] which you spawned and the hab that you
[23:57] spawned was up a flight of stairs
[24:00] so they had to without being able to
[24:02] pick this box up they had to lift the
[24:04] bottle that dead to roll just
[24:06] continuously go prone and roll and try
[24:09] to get the the box to shift slowly up
[24:12] the stairs and I saw people doing this
[24:14] for hours just for thing I know layers
[24:20] will do anything they can to put
[24:22] something where they shouldn't yes yeah
[24:24] so that that's that that's always my
[24:26] example of why do when people say why
[24:28] doesn't QA test for this or - so we test
[24:30] for Plenty but there's no way to a cop
[24:34] to account for everything that a player
[24:36] will do and because things that you just
[24:40] never thought possible yep
[24:42] well like what you just said right with
[24:44] the rolling well that's one it's one of
[24:46] the key aspects of building a sandbox
[24:49] game is it's about building a world or
[24:52] in our case a universe of possibilities
[24:54] so we're we are continuously surprised
[24:57] and amazed by what our community can do
[25:00] with the tools that we've provided them
[25:04] and it's always interesting as well to
[25:07] imagine as we develop these tools and we
[25:11] make locations more versatile and you
[25:13] know we give players more control of
[25:15] things that they can do what insane
[25:17] things are gonna happen like years down
[25:20] the line when you know it's crazy
[25:22] Adolphus Adolphus in the chat as a
[25:26] certainly watched this program and many
[25:30] times and no I would not say that and I
[25:32] think you know I wouldn't let just leave
[25:34] it at that but I appreciated the joke I
[25:38] get a little a seating area over here
[25:40] maybe it's a place where all the
[25:42] neighbors congregate - Ashraf engine is
[25:46] we just want to interact with our
[25:47] environment as much as possible we know
[25:50] we we do know we we want to as well as a
[25:53] player of the game a player of the game
[25:56] and a backer there's a lot that I would
[26:00] love to see anything yes that is me play
[26:03] the game there's a lot that you know as
[26:07] players we want to do as well and we
[26:09] keep in mind when we're designing the
[26:10] environments is something we might put
[26:12] something down that one coming
[26:14] effects until years down the line like
[26:17] for example in Hurston you can go to the
[26:20] front facade of Maria pure of heart
[26:22] hospital right and we got the medical
[26:24] beds just coming in now
[26:26] so it's you know it's been there for a
[26:29] long time but yeah we obviously can't
[26:31] fully flush it out somebody had a
[26:34] question earlier I missed the name this
[26:36] chat was going by too fast so I
[26:37] apologize for not being able to call
[26:38] this personnel but they asked about the
[26:40] hello DS and the planets and whether
[26:42] they're set whether they're being tuned
[26:45] and I was actually talking to somebody
[26:47] about this earlier the things like the
[26:49] LEDs for the for the planets are no
[26:54] let's just put it this way nothing is
[26:56] set at this point we're still now for
[26:57] the purpose of being alpha is that
[26:58] nothing is said or final words we're
[27:01] here experimenting letting you play
[27:03] watching you play and then making
[27:05] adjustments as we deem them necessary
[27:06] one of the more difficult aspects of the
[27:09] of setting LEDs is the changing speed of
[27:12] ships because L the the speed at which
[27:15] LEDs adjust is is relative to the speed
[27:21] at which you can apply or approach a
[27:22] planet so as the speeds of ships are
[27:26] being tuned you know that you talked the
[27:27] other week about how the you know
[27:28] combats being retune it's always under
[27:30] tuning again we're an alpha so will this
[27:35] speed of LEDs and stuff so it's it's one
[27:38] of the reasons why when we jump into the
[27:40] editor like this we can zoom out from a
[27:42] planet and zoom in from a planet far
[27:43] faster than a than a player can't so L
[27:47] would so we tend to get more popping
[27:48] when we look at it in an editor like
[27:50] this because we are moving much faster
[27:52] than anybody could in the game so the
[27:55] LEDs can't keep up so it's a constant
[27:57] question of balance and adjustment and
[27:59] it's something that we do ourselves when
[28:01] we're you know making lots and making
[28:03] all these performance passes we'll start
[28:06] moving around really fast and you know
[28:09] start seeing things pop too quick things
[28:11] like oh I think we need to adjust these
[28:12] loads to be to pop more slowly but then
[28:16] in reality it's because we're going too
[28:17] fast
[28:18] exactly it's a new player you can travel
[28:20] as fast as we can so it's like you don't
[28:22] balance for the speed at which we can
[28:23] move you balance for the speed at which
[28:25] players can move
[28:26] and while that's influx so will the LEDs
[28:28] so will be the LEDs I put some lights
[28:32] known
[28:33] somebody has to we can have a van down
[28:35] by the river so the first as soon as we
[28:38] get a van in the game I think the
[28:40] closest river that I have I think
[28:42] there's a there's an ocean over here
[28:46] you're gonna lose your spot oh no it's
[28:48] okay I don't know sorry there I've got a
[28:50] little pivot alright yeah I've got I've
[28:52] gone ocean all the way down there put a
[28:54] dare like the Ursa make that our van and
[29:00] we're back in there little look at the
[29:02] size of that right and look at it all
[29:04] pop out it's so small
[29:07] it's so small it's so easy to lose that
[29:08] scale and go but back down to sort of
[29:14] human scale say I've just woken up and
[29:17] I've come out of my house
[29:18] starting to get a little community
[29:19] together how quaint for Jimmy no rest
[29:27] early Reno I can't see that and I think
[29:30] I've murdered that name but you know
[29:32] what I'm talking about do props snap to
[29:34] the surface or is it so much eyeballing
[29:36] with his e axis every time how we talked
[29:37] about that a little bit at the early at
[29:38] the beginning of the show Jim we're
[29:41] developing what's called the placement
[29:42] tool it's active it's an active
[29:44] development right now that will help
[29:46] with the Z placement aligning the items
[29:49] like these to the surface it's just
[29:50] we're not using it today because it's
[29:52] still being worked on yes so one of the
[29:58] things we do early on when we're setting
[30:01] up the to further answer that question
[30:03] to further one of the things we do when
[30:10] we're setting up these locations we set
[30:12] up these aligned tags which the
[30:14] placement tool helps just align to the
[30:15] surface but I really kind of just wanna
[30:17] show you guys the sort of process of
[30:19] just what we go through thinking about
[30:22] these spaces so right now I'm just
[30:24] aligning them all manually because I
[30:25] think it's just sort of it's easier for
[30:27] the sake of the show yeah another jump
[30:31] I'll stay happy that a chunk of pile
[30:38] so a bid asks what a little settlement
[30:41] like this ever be procedurally generated
[30:44] absolutely we really want to push the
[30:48] procedural generation with our ground
[30:49] locations so that hello so that we can
[30:52] make a lot of progress with having much
[30:56] more interesting like areas of the
[30:58] planet to go to and visit so definitely
[31:00] it's something we were looking into and
[31:03] of course as we spoke about earlier
[31:06] using procedural generation as a tool in
[31:08] our own ends so even even as they
[31:10] generate it still requires an artist to
[31:13] go and validate everything because it's
[31:15] this is a even through all the tools
[31:18] that we build if we still want this to
[31:20] be a handcrafted experience and we're
[31:22] not talking about other games we're full
[31:25] levels full planets full star systems
[31:27] are procedurally generated we don't know
[31:29] if we don't don't ever want to take it
[31:30] to that extreme we want to use
[31:32] procedural generation as a tool to help
[31:33] our artists not do the work for them
[31:36] yeah that's right look at all these are
[31:38] Wars though
[31:40] ok so sure what we're trying to say here
[31:42] well this just became this just became a
[31:45] test a former test outpost really
[31:52] sometimes you find these things that
[31:54] other artists might have done and you
[31:56] just that is the Ohio liverworts it's a
[31:59] pot literal pile
[32:15] get a couple more floodlights so you can
[32:18] see this from space miners back with
[32:21] another good question some of the
[32:22] prefabs have lights and other baked like
[32:24] maps how does that how do you rebake
[32:29] them to get the lighting on other
[32:30] objects that are so close to them so our
[32:33] cube map system on the planet is sort of
[32:38] automatically updates every like certain
[32:41] amount of time when you're flying
[32:42] through which is how we get the daytime
[32:45] and nighttime to work well together so
[32:46] these lights will come in but the cube
[32:50] map that's being used is the one on the
[32:51] planet so it will take on this
[32:53] information into account because you're
[32:55] on the planet I missed sure that's going
[33:02] too fast I don't have my use that my
[33:05] touchscreen thing so I can just scroll
[33:06] with my finger but I can't do it here
[33:08] somebody somebody no remember who was
[33:10] claimed that a mass grave yard of
[33:13] Aurora's is called the coffin of
[33:14] graveyard a coffin of Aurora's
[33:17] it's like a murder of crows and a coffin
[33:19] of Aurora's what makes it a coffin of
[33:22] ours though that's that's what I want to
[33:27] know maybe there's a yeah that's like
[33:31] bunker very distance we're really
[33:37] breaking the magic there it's look
[33:39] there's a bunker underground no it's
[33:40] just that oh just a little sighs hey
[33:42] maybe one day you'll be an out actual
[33:44] underground bunker I love the idea of
[33:46] underground parking so you might just
[33:47] find
[33:57] it's got a couple of things
[34:03] I might get a derelict and put it here
[34:08] say you need to check off sterile like
[34:10] the beginning of this show if we don't
[34:11] actually put a derelict in there that's
[34:14] true let's let's find an object
[34:16] container for this illumine says this
[34:20] word chef disco lives no chef disco
[34:25] lives in the hearts and minds of
[34:26] children everywhere but he will never be
[34:28] in the game you can see there's enough
[34:33] of me outside of the game like I am this
[34:36] I'm up you already have to go through me
[34:39] to see much you don't need me in the
[34:41] game let they let the game be the one
[34:42] aspect of star citizen where you don't
[34:44] have to see my face there we go so we
[34:49] have a this left side of a star fair
[34:52] that maybe just the left side left side
[34:55] we can that put other parts down but
[34:57] maybe this time ferret was flying over
[34:59] yeah what I really like about this I
[35:02] think if you get the Sun I'm gonna put
[35:03] it up here just to show what I'm wanna
[35:07] what I mean if you get the Sun just
[35:09] right you get that glint off the ship
[35:13] then you go inside where's the I think I
[35:17] want this window facing ya go inside I
[35:22] mean move it around again you just get a
[35:27] little bit of these you know spot god
[35:31] rays coming in from the Sun and it's
[35:33] just such a I think is such a like a
[35:35] nice atmosphere for these interiors of
[35:37] these broken ships and we aren't we're
[35:39] big fans of the godrays yeah put you
[35:44] down here
[35:51] I might make this into a bar or
[35:55] something one frow asks how would a
[35:57] location like this be populated by NPCs
[35:58] by the AI team not by the environment or
[36:01] team that's right so I just wanted
[36:05] didn't mean to call you out one row but
[36:07] I used your question is another example
[36:09] of the types of stuff we can actually
[36:10] talk about on this show of your time a
[36:12] gameplay staffer or basically anything
[36:15] hinting at the future that's not what
[36:17] this shows about it's not what we want
[36:19] is here to be able to talk about but if
[36:22] anyone has any questions about like the
[36:24] things that we think about when we're
[36:26] building the stories of these
[36:27] environments that's more in line do you
[36:30] ever think about me when you're building
[36:31] an environment have a picture of you and
[36:33] my does did you know that it keeps me uh
[36:39] it keeps me sane the problem is I can't
[36:43] actually be certain that you're joking
[36:45] because I have had too many times where
[36:48] people like oh look and they're like
[36:49] move something there's a terrible
[36:50] picture of me or a meme of me on their
[36:52] desktop I do have a picture of my lead
[36:56] on my desk though and it's just this
[36:57] cutout of his head daddy Edea and we
[37:01] used it as a
[37:04] Christmas mask for the Christmas quiz
[37:07] once we all put them on it was pretty
[37:09] great I mean put a different structure
[37:13] here yeah that the community thinks they
[37:17] troll me quite a bit you haven't seen
[37:19] what the devs you oh yes they've
[37:24] actually got just a lot of stuff that
[37:27] can never see the light of day let's
[37:29] just leave it at that I have seen things
[37:32] you people wouldn't believe now that
[37:41] looks very active compared to most
[37:43] people we've been placing yeah I kind of
[37:45] want to make this sort of upper part
[37:46] look more active
[37:47] so these prefabs is they're the ones
[37:50] that we use at the underground
[37:52] facilities so obviously they're a lot
[37:53] more active but I kind of wanted that to
[37:55] be sort of a if there's such thing as a
[37:57] poor area of the of a junkyard but maybe
[38:02] that's what
[38:04] mapper s a name appropriate question how
[38:07] are the assets coordinated how are the
[38:10] asset coordinates handled are they
[38:12] related to the planet or to the center
[38:15] of the stand system in gonna try to
[38:21] decipher exactly what they mean they're
[38:23] like what he's basically saying he's
[38:27] basically saying like if you had a
[38:29] coordinates is if we were able to expose
[38:31] a coordinate system for like where this
[38:32] is you know 10 10 10 40 80 20 by you
[38:39] know 64 94 8460 are those points
[38:43] relative to the center of the planet or
[38:45] they relative to the center of the
[38:46] stanton system so they would be relative
[38:49] to the planet itself and I believe I
[38:51] could be very wrong here but I believe
[38:53] it basically the coordinates for
[38:56] everything on the planet are then sort
[38:58] of translated further if you're in a
[39:02] sentence system like further out in
[39:04] other systems or whatever you'll go
[39:06] through your map and you just see the I
[39:10] guess you just see the coordinates the
[39:12] on map really it's hard to say I'm Larry
[39:15] I've had this conversation I've had this
[39:17] conversation with a couple people in the
[39:19] past I'm pretty certain I understand the
[39:21] answer but it's been so long that I'm
[39:23] not as confident as I should be someone
[39:25] want to keep it to myself and then we'll
[39:26] see if we can follow up on it but yes
[39:29] there are you know when we when we use
[39:31] go-to commands which is something that
[39:33] QA or designers walk to you so they can
[39:35] just get to the point they need to work
[39:37] on the go-to commands generally start
[39:40] with planet first and then yeah we're an
[39:43] insect when I when I need to go
[39:45] somewhere and I went to running the
[39:47] client to try and fix a bug or something
[39:50] I usually go planet based rather than
[39:53] anything else but as far as coordinates
[39:56] like like like specific longitude and
[39:58] latitude that that's not really used
[40:00] it's usually there are there are way
[40:02] points assigned to these different POS
[40:03] and we just go to those waypoints which
[40:06] is one of the reasons why you know when
[40:08] good questions cause like a key we have
[40:10] a coordinate system and stuff like that
[40:11] it's like we don't actually use a
[40:13] courtesans not just that one doesn't
[40:14] exist and one that can't exist we've
[40:16] discussed that before
[40:17] and we as we've stated before publicly
[40:20] it's something you know we want to
[40:22] investigate in work it's just it's
[40:24] finding a way to make that manageable
[40:29] because any other game has coordinates
[40:31] generally for one level one planet or
[40:35] one star system whatever and we do not
[40:38] we have to be something that scales with
[40:40] the game so it's it's very large game
[40:49] I'm not gonna put more bunkers down
[40:52] that's a going to be bunker heavy look
[40:56] another eye phosphorus is can you stop
[41:01] grass from clipping through objects
[41:03] right so that goes back to what we
[41:05] discussed earlier which is when we're
[41:08] marking these up for the actual
[41:10] placement tool which is something I
[41:14] would have done but it would have been
[41:15] just a bit tedious for you guys to see
[41:17] we put these huge boxes down which I can
[41:20] actually show why don't you go back to
[41:22] that again so these huge boxes come into
[41:28] the safety Derek's in this in this
[41:30] instance and they clip out anything
[41:32] that's spawned by the terrain this could
[41:34] be rocks trees or grass and we can
[41:37] actually define some of those parameters
[41:39] ourselves and that's sort of how we get
[41:42] that to not clip through however because
[41:45] I'm kind of just placing this stuff down
[41:46] without any of these boxes you're gonna
[41:48] start seeing how I use that example used
[41:50] earlier you're gonna start seeing some
[41:53] some of these pups or some of these
[41:55] plants like that alright um but yeah
[41:59] those area boxes are part of the a part
[42:04] of our markup we do placement - where
[42:08] are you come out here yeah we've
[42:17] discussed the chats talking about
[42:19] racetracks we've discussed racetracks
[42:20] before I think actually I think the
[42:21] first time we discussed a racetrack was
[42:23] with Luke Presley back in 2017 I
[42:25] remember correctly so it's been
[42:27] something on there on our minds for a
[42:29] while
[42:30] we actually showed it an old shoulder
[42:32] showed an early mock-up once on a TV way
[42:35] back when the issue is the planets are
[42:38] still changing we try and we try not to
[42:41] do work that we know has to be redone
[42:43] later that's one of the ways you work
[42:46] smarter and not harder
[42:47] in game development so it's you know we
[42:51] just as we showed a citizen gun as
[42:52] you're seeing now you know we just
[42:53] revamped the planets what planet before
[42:55] necessitated a recreation of all the
[42:57] planets so which would have been redoing
[43:00] all those racetracks anything as well so
[43:02] it's it's when the planets and the
[43:04] planet tech getting they come along to a
[43:07] point where we feel relatively
[43:08] comfortable like yeah that this is what
[43:10] Hurston is this is what's selling is
[43:12] this is what damar is you know when we
[43:14] fill it they're locked down to a point
[43:16] where they're not there the changes are
[43:18] going to be minimal then we can look at
[43:20] doing things like racetracks and stuff
[43:22] because the team is very keen and not
[43:23] only doing things like racetracks but
[43:25] providing players the abilities to
[43:27] create racetracks of your own like
[43:29] through markers and beacons and stuff
[43:31] like that yeah
[43:33] it's about providing all these tools
[43:35] that we we need to sort of easily make
[43:38] the game and not do everything by hand
[43:40] like I'm doing now this is sort of an
[43:42] example of you know racetracks and this
[43:45] is sort of an example of things that we
[43:46] really need tools and a more sort of
[43:49] solid idea of what we're doing before we
[43:52] actually start implementing those in
[44:09] get over these oars now so what we're
[44:15] doing today is we're building for
[44:16] anybody who's joining this we've only
[44:18] got about 15 minutes left in the show
[44:19] going by the way oh boy time is funny we
[44:22] are building a Pio eye using existing
[44:25] assets and without designer input so you
[44:28] know it's it's it's more an exploration
[44:30] in the process that kind of things we
[44:31] can do look at the kind of assets we
[44:34] have access to talking with luan about
[44:37] process and stuff like that whether this
[44:40] particular P Alliance there's some
[44:42] question of the chat will go into the
[44:44] game like anything that we create in the
[44:47] show it goes to the director for
[44:49] validation and forth if they like it
[44:51] then yes and if that needs work then it
[44:53] goes into a box until it can be worked
[44:55] on further and if they don't like it and
[44:57] say no why did you let Jarrod do this I
[45:01] just get an email which you will ignore
[45:06] no truth is I just read it and over and
[45:10] over and over again until the sadness
[45:13] stops you're watching the darkest
[45:22] episode of Star says and live game dev
[45:24] the pre-show was pretty dark and
[45:26] pre-show was pretty dark those watching
[45:29] this on YouTube won't have any idea what
[45:31] we're talking about the pre-show guys
[45:33] show up on Twitch moderators if we can
[45:43] ban bacon of war for talking about the
[45:45] space well that'd be cool
[45:46] there are any moderators in the chat
[45:49] just just ban him from the channel
[45:51] that's cool
[45:59] I like this little tunnel oh it's a
[46:02] little alcove seating areas they're
[46:11] actually the email I expect to get is
[46:13] probably from a level designer who's
[46:15] gonna like who's gonna see the show and
[46:16] they're gonna like what were you guys
[46:18] doing it doesn't make any sense why did
[46:23] you put that here it makes more sense
[46:24] over there
[46:27] of all times is something that we're
[46:29] constantly thinking about when to answer
[46:33] a little bit more of the question
[46:34] earlier um when we're initially why
[46:37] boxing a space with design we really got
[46:41] to consider how long it takes to say
[46:42] cross a bridge from here to there or
[46:44] travel all the way from here to all the
[46:46] way down there as a matter of fact if
[46:47] you look at this place now I didn't
[46:49] really think too much of a route be up
[46:51] you probably have to go all the way
[46:53] around around like this and that's a
[46:55] long travel time so those the kind of
[46:57] things that where we iterate through in
[46:58] the white box process yes maybe I'll
[47:02] move some Aurora's out now I like him
[47:13] yeah I just got my first message from a
[47:15] level designer I won't call you out but
[47:19] thanks for watching I'm sure I'll get a
[47:23] message another windmill so you can see
[47:35] that these spaces can get quite
[47:37] expensive quite quickly so we got a got
[47:40] a narrow down the focus of what we want
[47:44] to make as we're putting spaces together
[47:47] all right designers the windmills have
[47:52] to be facing the same direction no they
[47:55] don't because I place them this way all
[47:59] right I'll do it for that well we have
[48:02] we're going that way are we I'm trying
[48:03] to do just the one doesn't take
[48:05] construction well no I do just here
[48:08] there we are
[48:10] but that's not as aesthetically pleasing
[48:11] now is it no the directions of the way
[48:14] no I must say the wind direction changes
[48:16] you want to be able to generate power no
[48:18] matter the direction the wind changes so
[48:20] put them in a different direction but
[48:22] how other broken huh
[48:25] actually I do think these rotate when
[48:28] you actually go into the client I think
[48:29] they do yeah just for point both
[48:34] windmills towards each other win the
[48:36] fight I will know except there you go
[48:48] yeah don't make him happy that's like
[48:57] tune with oh we need that rock from
[49:00] where is it it's in California right
[49:02] Vasquez rocks yeah yeah you know it's
[49:05] terrible but Vasquez rocks I live 20
[49:08] minutes away
[49:09] I have lived 20 minutes away from
[49:11] Vasquez rocks for the last five years I
[49:14] have never I've not gone walk there why
[49:19] that's 20 minutes at a drive right on
[49:22] the freeways it's America you guys drive
[49:24] over here yeah now in traffic it's like
[49:27] an hour and a half because that's what
[49:29] traffic does here but if I were to I go
[49:31] at like two o'clock in the morning with
[49:33] no traffic it would take me 20 minutes
[49:34] to get there
[49:35] my words whatever moved to America I'd
[49:37] having to drive everywhere it's just not
[49:39] my kind of thing drive around oh yeah
[49:43] it's Jared Kirk or the Gorn well Union
[49:47] in my mind I'm Kirk but in the mirror
[49:50] ongoing Adam Gorn
[50:02] like nice and snug in there
[50:15] so I'm using this predefined library of
[50:18] things right but if I had more time with
[50:22] this I go into our asset library and I'd
[50:26] really try to find the best assets for
[50:29] this kind of situation these are pretty
[50:31] good because they kind of kind of
[50:33] thematically sort of talk to each other
[50:37] but you know I'm sure we have the far
[50:39] more in our library that we can use as
[50:41] well you're a bit wonky aren't you
[50:44] that's all right
[50:48] now there's a debate and chat about
[50:51] whether the music I was doing was the
[50:53] fight between Kirk and Gorn and a fight
[50:54] between Kirk and Spock and I think it's
[50:57] actually the fight between Kirk and
[50:58] Spock not the fight between
[51:03] maybe the father was scorned my maybe
[51:06] they've used it I don't know that I've
[51:08] ever watched both episodes back-to-back
[51:10] but there's something to do on the
[51:12] weekend yeah I'm pretty sure it pretty
[51:15] sure it's a mock time though I'm pretty
[51:16] sure it's the it's the fight with the
[51:17] Spock and you're the one who said it was
[51:20] the Gorn so if we're wrong it's actually
[51:22] on you not me all right I'm very used to
[51:28] being wrong this way for somebody goes
[51:34] waiting for somebody Jacko
[51:35] isn't that the music from the Cable Guy
[51:37] just so I can die a little bit inside
[51:47] there it is
[51:50] Cable Guy government I mean you asked
[51:54] for it yeah but with the delay between
[51:58] live and broadcast it could have
[52:00] happened organically that's large nice
[52:08] Jason asks is it common practice to
[52:10] place buildings with no relative level
[52:12] foundation to other buildings I know
[52:14] Jason thanks for joining the show as
[52:16] we've discussed a couple times over the
[52:18] course of the hour usually this process
[52:20] is done in conjunction with not only a
[52:23] level designer but use of a tool that
[52:26] we're developing called the placement
[52:27] tool that will help relative
[52:29] levels in Steph aligned to the surface
[52:31] of the trains like that we are doing
[52:34] this without either of them just to
[52:37] showcase a little bit of the process not
[52:40] not quite exact but what we can do on a
[52:45] Friday afternoon with one person Friday
[52:47] night no it's not it's not not evening
[52:52] into that's after 6:00 if it's between
[52:54] have not looked outside yet okay you
[52:56] have a clock though if it's if it's if
[53:00] it's between 6:00 a.m. and 12:00 p.m.
[53:02] that's morning it was during 12:00 p.m.
[53:05] and 6:00 p.m. that's afternoon if it's
[53:07] between 6:00 p.m. and 12:00 a.m. that's
[53:09] evening it was between 12:00 a.m. and
[53:11] 6:00 a.m.
[53:12] that's Twilight that's why light I like
[53:16] about one that's how it works you are
[53:18] technically in the afternoon I am
[53:19] technically evening what the what the
[53:22] Sun is doing is no bearing on it
[53:24] how are you technically need new you're
[53:27] in the evening I'm in the morning but
[53:29] you said you I know I said you you're in
[53:31] the evening I'm in the morning this has
[53:34] been time zones with Jared only one
[53:36] thanks for watching so be our new
[53:39] podcast we'll be here every week talking
[53:42] about time zones I saw a good serial
[53:46] podcast and I don't think cereal isn't
[53:48] like the word serialized I mean cereal
[53:51] is in the item that you eat I'll make a
[54:02] podcast about everything these tables
[54:05] make no sense but you know what I like
[54:07] well we're 54 minutes and they show no
[54:11] reason to start making sense now that's
[54:13] true how about we try to look at this
[54:15] get some shots yeah I lowered a few of
[54:17] you look at what we've built from we
[54:24] started like you know you made sense
[54:25] when we started a little had a little
[54:28] road a little this area to sit this is
[54:31] the back alley a very 18 all over again
[54:33] right exactly until we started to adding
[54:36] in turtles and lasers we had that nice
[54:38] view over there we've completely
[54:40] disregarded yeah this is why you can't
[54:42] let artists just
[54:44] last for this here's this months ago and
[54:48] said do you want to do this yes I'm sure
[54:50] no that's great I love it I just don't
[54:56] want to sell the I don't want to
[54:57] understand the usefulness of level dance
[54:59] forego we did this it that's a big no
[55:03] give me give me that picture because we
[55:04] knew that I mean that for the YouTube
[55:06] thumbnail so so you give me a good
[55:08] picture with the fighting windmills
[55:09] that'll be that'll be the YouTube
[55:11] thumbnail how about that yeah you you
[55:15] shoot me on a will get it JDate you can
[55:18] capture that for jewel all right okay I
[55:20] took a print screen okay good
[55:21] you said it's and that to me teams when
[55:23] we're done Paul helped you allowed he
[55:25] always likes it when they give him
[55:26] screenshots so you don't have to imagine
[55:29] if we expended this all the way up there
[55:31] if you look over here if it's a somewhat
[55:34] it makes some sense you know you have a
[55:36] little area over here in a little area
[55:37] over here just how you connected that's
[55:40] why we have designers people question
[55:45] please add a giant hot dog I can do you
[55:49] one better
[55:50] well maybe not one better can do you
[55:52] want worse it's four minutes left in the
[55:55] show let's go jump off the rails let's
[55:57] go if I grab this guy I know that in
[56:01] this prefab library let me find it sure
[56:06] keeping busy
[56:11] this the one yes we have a hotdog kiosk
[56:15] it's not quite the same but I think a
[56:18] little satisfy your needs we can put a
[56:23] bunch of kiosks here maybe they just
[56:25] sell scale 3000 like so I'm sure I'll
[56:32] crash the editor by scaling this but
[56:34] let's go
[56:39] enormous almond props is gonna be
[56:41] screaming at me for skating drums there
[56:45] you go enormous hotdog kiosk I'm not
[56:48] gonna get make it any bigger than this
[56:49] I'm afraid so
[56:51] what is this a hot duck yes present
[56:53] rowdy mm-hmm
[56:56] let's put another kiosk here there's a
[56:58] deep cut for whoever gets it there's a
[57:03] noodle kiosk daddy area 18 once but you
[57:08] know what let's put him in larva why not
[57:10] a crate little food court and actually
[57:23] on an actual good a good bit of
[57:27] information these prefab kiosks are set
[57:29] up in a way that AI can use them so
[57:31] should we have AI in the level they'll
[57:34] come in here and populate this little
[57:35] area I can tell you're loving this Jared
[57:43] okay
[57:44] no I'm thoroughly enjoying this a little
[57:48] food court better than any food court
[57:54] I've been to I'll make sure Eddy here is
[57:59] that odd you add the space station food
[58:04] courts not they're awesome actually I
[58:05] really like them now you said this was
[58:07] bear and I don't think I said you have
[58:10] no record of that no food court area get
[58:17] some little plants and a foreground like
[58:18] this enormous bulbous plant yeah that's
[58:25] kind of the process oh I think I'm going
[58:28] inside the building yeah very
[58:31] enlightening isn't it and let's do a
[58:32] scale chocolate that's start zooming up
[58:35] pull up from a loop right let's do the
[58:37] classic from the bolt
[58:47] I'm sure objects will start disappearing
[58:49] as the lots tucking in but I think yes
[58:51] all right
[59:05] and off we go by me to the moon let me
[59:13] play I started that in the wrong key and
[59:21] we're past larval and then using about
[59:28] far enough and reveals that we're inside
[59:30] a snow globe that small child is playing
[59:33] with and there we go goodbye Carsten I
[59:38] hope you enjoyed this look into my mind
[59:43] [Laughter]
[59:51] like I said Jared you ask for this
[59:55] asteroid months ago
[59:57] that's how long these things take to
[59:59] come up sometimes alright let's uh
[1:00:01] that's it let's go back to cameras Oh
[1:00:04] their goodbyes goodbye
[1:00:08] well everybody thank you for joining us
[1:00:11] for this last hour of points of interest
[1:00:14] we laughed we cried we apparently
[1:00:18] insulted several level designers we sang
[1:00:21] a Star Trek song which don't know what
[1:00:23] to which one
[1:00:23] no we we I know you don't know it was a
[1:00:27] month time that's all right
[1:00:28] but no I mean you brought up the Gorn
[1:00:30] thing I'm never gonna punish anybody for
[1:00:32] bringing up arena I mean it's never
[1:00:35] gonna punish anybody for that that's it
[1:00:38] thank you for watching we'll be back
[1:00:39] next week with another episode who's
[1:00:42] gonna be on it what's it going to be I
[1:00:43] don't know yet we're gonna find out
[1:00:46] stay tuned take care thank you the one
[1:00:49] for taking time out of your Friday I
[1:00:51] release you friends you can go I'm gonna
[1:00:53] go really key links oh we're from just
[1:00:56] the pub down this yeah sorry not great
[1:01:01] is it so I could come and get any I'm in
[1:01:03] the Wilmslow okay alright take care
[1:01:07] everybody we'll see next week every
[1:01:16] you

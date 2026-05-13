# Star Citizen Live Gamedev: Making FOB

**Video:** https://www.youtube.com/watch?v=KvgbNwmuP10
**Date:** 2024-07-26
**Duration:** 1:11:46

## Transcript

[00:06] hi everybody Welcome to cig reacts I'm
[00:09] your host Jared Huckabee uh on today's
[00:12] program we're just going to sit and
[00:13] watch a bunch of videos made by you and
[00:17] tell you what we didn't
[00:22] like would be a pretty good episode you
[00:26] should have cr in here reacting just go
[00:28] to camera to I'm lying uh welcome to
[00:32] Star Citizen live everybody uh I'm Jared
[00:34] this is John uh this uh welcome to the
[00:38] show uh I see a lot of firsttime
[00:39] Chatters in the uh in the in the twitch
[00:41] stream uh so you know people always say
[00:44] why do you do the same intro every
[00:45] single time and I'm like have you saw
[00:46] the number of First Time chatter boxes
[00:48] and the thing so we're going to do it uh
[00:49] if you've never seen an episode of Star
[00:51] Citizen live before it's where I come
[00:53] really close to getting fired each and
[00:55] every
[00:57] week hi um no it's where about an hour
[01:00] out of the end of our week sometimes
[01:02] longer sometimes shorter and uh
[01:05] we talk to you we we sometimes we answer
[01:08] questions uh that come from the
[01:10] community sometimes we answer questions
[01:11] that come from me sometimes we we just
[01:14] get to know people and sometimes which
[01:16] is what we do on today's show which is a
[01:17] Game Dev show uh we sit and watch
[01:20] process we get to watch uh how the
[01:22] developers actually build uh the items
[01:25] and the places and the things of the
[01:26] star say and universe joining us on
[01:29] today's game Dev show uh is uh is is a
[01:32] good a good good friend of mine who is
[01:34] one of those one of those people I just
[01:36] it's one of my gossip buddies just I I
[01:38] come to his desk I'm like oh my gosh did
[01:39] you hear about that oh yeah that's all
[01:41] really all we talk about uh it is what
[01:44] is your what's your title now I'm still
[01:46] lead lead environment artist lead
[01:49] environment office office lead
[01:51] environment artist um first name John
[01:55] John almost forgot then my own name John
[01:59] Griffith John how you doing man yeah I'm
[02:01] good thank you this not a great intro to
[02:03] the show is it oh I think it's good it's
[02:05] uh you know it's keeping it Loose it's
[02:07] hard when when we take a week off like
[02:10] it's just really hard to to get back
[02:11] going uh so yeah so what are we doing
[02:14] today John so we are going to create a
[02:18] new variation of something that already
[02:20] exists in the game but giving it a
[02:22] different kind of lick of paint almost
[02:25] and kind of reusing it and putting it
[02:28] down as an independent thing but it's
[02:31] not just a face lift something uh so
[02:34] we'll go I'll go into a little more
[02:35] detail here uh you and if you're playing
[02:37] Alpha 323 now you might know you might
[02:40] uh have found the new distribution
[02:42] centers uh these big giant hulking
[02:45] heaping uh areas of gameplay scattered
[02:47] throughout the planets and just the
[02:49] planets there's not any on any moon is
[02:50] there just planets just the planets of
[02:52] the Stanton system uh for the upcoming
[02:54] pyro system uh considering that pyro is
[02:57] far more
[03:00] sometimes it's it certain aspects of it
[03:01] I want not all of it but certain aspects
[03:03] of it are more combat oriented combat
[03:05] focused and uh we are evolving the
[03:08] distribution centers in certain ways to
[03:09] include more uh opportunities for better
[03:13] combat uh the level design team working
[03:15] with the level design team uh uh
[03:17] implementing things like greater
[03:19] elevation and and and just more complex
[03:22] areas that that can are really conducive
[03:24] to firefights and that's what we're
[03:26] doing uh today um yeah right so we're
[03:30] doing the art side of it yeah we're
[03:31] doing the more so uh but I will be able
[03:33] to show you you know what the art
[03:37] impacts um because just by you know
[03:40] moving a box from the left to the right
[03:42] the you know the ledge grab stuff has to
[03:45] go with that so we're just going to kind
[03:46] of blanket ignore that for today and
[03:49] just look at the picture and these are
[03:50] the these are the little ancillary areas
[03:53] that are kind of off to the side of
[03:54] these of these distributions not a big
[03:56] keeping building yeah so we've got the
[04:00] um compounds or fobs as people call them
[04:03] and we're just focusing on that and
[04:06] we're created a new kind of location
[04:09] archetype with these separate to the DCS
[04:13] but we're using the content that we made
[04:15] from the DCS okay to an extent uh it's
[04:17] one of those things where you we build
[04:19] modularly so that we can reuse these
[04:21] things in multiple different
[04:22] configurations and that's exactly what
[04:23] what we'll be doing today so without
[04:25] further Ado uh cuz there's way too much
[04:28] ad do as it is uh let's let's switch
[04:30] over to the to the screen share and I'm
[04:33] going to turn it over to master
[04:35] ceremonies John Griffith's what are we
[04:37] looking at so this is for people who
[04:39] play the distribution centers this sits
[04:42] outside of them on the peripheral um as
[04:46] kind of like after you've got through
[04:47] the security defenses you'll probably
[04:48] have to go here for the first part of
[04:50] the mission before going into the
[04:52] Distribution Center themselves so this
[04:54] thing you've already seen and we're
[04:55] going to take this as our base um but
[04:59] yeah this is basically how we set them
[05:01] up in levels so we
[05:03] have the actual base unit ignore
[05:06] whatever that is um and then we have
[05:09] these overlays that sit on top so it
[05:10] means that we keep the same base but the
[05:12] overlay switches um so it's kind of yes
[05:15] you can be modular in your kits but you
[05:18] can also be modular on the next level up
[05:21] which is quite nice so I've already done
[05:23] a bit of setup and we're going to go
[05:24] over here to number two so one of these
[05:27] already exists and we're just going to
[05:29] do another variant of them
[05:32] so to answer the question in chat what
[05:34] does FOB stand for in our term we use
[05:37] forward operating base so th those who
[05:39] were guessing forward operating base in
[05:41] chat correct uh I saw another pretty
[05:44] good field operation base absolutely
[05:46] applicable name uh but yeah forward
[05:49] operating base is what we refer to them
[05:50] as so in this version the I've already
[05:54] done we needed to make it look more
[05:56] abandoned and before I was talking
[05:59] talking about how things we change then
[06:02] have an impact on other disciplines like
[06:05] uh design like lighting sound that kind
[06:09] of thing so for this version we were try
[06:13] not to change too much um because time
[06:18] time pressures and such and resource um
[06:21] but in this case you know what we can
[06:23] get away with doing is just changing the
[06:26] tint you know so these were yellow they
[06:29] were this color in the original and we
[06:30] can increase the wear and the dirt so we
[06:33] get kind of a different look straight
[06:35] away without really doing a lot which is
[06:38] really handy for us um I'll just go back
[06:41] over to the one that we're going to be
[06:43] working on just so I can demonstrate
[06:45] that but if we grab this building here
[06:50] let's just turn these helpers off so you
[06:52] can actually see
[06:56] Dink and then in here
[07:00] where are you where so if we bring this
[07:04] down and back up so you know you can see
[07:07] quite easily how we can make things feel
[07:10] or look different just by moving a
[07:12] slider which is really handy for us um
[07:16] obviously there's lots of other things
[07:17] and I won't be able to get into
[07:19] absolutely everything today but things
[07:22] like you could if I turn the layers on
[07:25] that would help things like we could
[07:27] change what number it is so maybe this
[07:30] is
[07:31] number eight and there you go it's
[07:34] changed to a number eight so things like
[07:38] decals on the ground we could move these
[07:40] around we have dirt in different places
[07:42] than we have before um but you know what
[07:45] we really want to do today is change
[07:47] this substantially so I'm not going to
[07:49] really be thinking about how level
[07:52] design and where all the markup needs to
[07:54] go um but let's just do something that's
[07:57] a bit different using parts that we
[07:58] already have that you've probably seen
[08:00] before and then we can get it down on to
[08:02] Planet you can see that process or at
[08:05] least how we used to do it and um you
[08:08] know how we go from A to B as it were
[08:11] this is where uh I issue the same
[08:13] disclaimer we issue every single time
[08:15] because again every show is su's for
[08:17] show uh nothing absolutely nothing in
[08:20] game development is made in less than an
[08:23] hour not well or good or enjoyable or
[08:27] shippable anyway um so we're are sh
[08:29] we're going to show a very abbreviated a
[08:31] very condensed version uh that doesn't
[08:34] have any of the peer review that doesn't
[08:35] have any of the you know calling con and
[08:38] uh Antoine from Level design team is
[08:40] this right like they're just like no no
[08:42] it's not uh so as you we can see now we
[08:46] you already you pulled out the first
[08:47] thing you started with is you pulled out
[08:48] those big tanks yeah so I think for me
[08:51] um so things to kind of keep in mind are
[08:54] the building we want to keep and the
[08:56] walkways around it because this is where
[08:58] we have you know spawn closets so this
[09:01] is where the AI would pop out of and it
[09:03] makes sense that out of everything
[09:05] that's on this platform that the um you
[09:08] know the building stays you know that's
[09:11] the purpose that's the reason why we're
[09:12] going there now this doesn't have an
[09:14] interior at the moment so we won't be
[09:16] changing anything inside but that would
[09:17] also be something that you could change
[09:19] quite easily put in a new interior to
[09:21] that is essentially a very big spawn
[09:23] closet right there yes yeah and again it
[09:26] it's always difficult to know you know
[09:27] somebody somebody has watched everything
[09:28] we've made for the last 11 years and so
[09:32] they can audit a you know a 2-year
[09:34] degree in game design and somebody has
[09:37] just you know this is their first or
[09:38] second show or whatever they've never
[09:39] heard what a spawn closet is so a spawn
[09:41] closet is basically a place to generate
[09:44] AI from uh so you don't have to have uh
[09:46] recurring bad guys just pop out of the
[09:49] middle of nowhere which breaks immersion
[09:51] so whenever you're building uh any FPS
[09:53] level uh or even even a spaceship level
[09:56] in certain certain uh situations you
[09:59] build spawn closets and places for the
[10:01] ships or people to come from that are
[10:03] believable they're conceivable and you
[10:06] know you don't question it yeah other
[10:08] than saying wow a bunch of guys were on
[10:10] lunch break inside that that room
[10:11] weren't they yeah y yep yep yep um so
[10:15] you might be saying well why John are
[10:17] you not deleting everything um because
[10:20] you might need it there yeah exactly I'm
[10:21] just deleting it because this is how I
[10:24] work you know and everyone works
[10:25] differently I quite like having stuff to
[10:27] one size that we could probably just
[10:29] drag back on later if need be um or we
[10:32] could group it and use it somewhere else
[10:35] um right now I'm trying to just clear
[10:37] out this area so that so in the other
[10:40] ones we have some buildup but what else
[10:42] could we put here that would kind of
[10:44] change the silouette of the overlay it
[10:47] itself zorp says I was born in a spawn
[10:51] closet that's awkward first first time
[10:54] chatter first time chatter that's the
[10:55] first thing zor's ever offered to the
[10:56] show wow good job zorp it's early up
[10:59] from here isn't it hard to go much lower
[11:03] uh trevoc says infinite spawn closets
[11:05] break immersion that they do trevoc uh
[11:08] and and our spawn closets don't spawn
[11:10] iminent there there there are timers
[11:12] that break that kind of thing up and
[11:13] stuff and then per permission there's a
[11:16] certain number of resources so that you
[11:17] know you can effectively clear it and
[11:20] stuff okay so we're getting somewhere
[11:23] with this so we have things on as you've
[11:26] noticed I've got the layer outliner open
[11:28] so we have things on different layers
[11:30] and that just means that multiple people
[11:32] can work on the same you know
[11:35] location um at one time which is really
[11:38] handy so you're not overwriting each
[11:39] other's work um and yes that does happen
[11:43] from time to time and there's not a lot
[11:45] we can do about it apart from telling
[11:47] people to make sure that they get latest
[11:49] layers and if they're not sure please
[11:53] ask uh Crown 8 says this is Jared's
[11:57] birds and the bees talk oh no you have
[11:59] haven't heard my bird and the bees talk
[12:01] it's it's pretty
[12:03] serious game play and this is the other
[12:07] fun thing we've got to do I'm find out
[12:09] where these things live and the best
[12:11] thing to do is just ah there you go turn
[12:14] things off and on until you find
[12:18] them let's just remove all this for the
[12:21] moment
[12:23] cool so now we have a huge gaping hole
[12:26] and oh don't forget the lights so all
[12:29] the lights are still there so we just
[12:31] need to get rid of
[12:35] them and I think I'm just going to blow
[12:38] these away because we only have an hour
[12:41] so she has got done saying he you don't
[12:43] like to delete anything I know I know
[12:46] but in this case lighting would have to
[12:48] come back in and change it to or adapt
[12:52] what they had to what we have or what we
[12:54] are going to put in here so it's a bit
[12:56] of column A a bit of column B at the end
[12:59] of this we should just send the
[13:00] monstrosity to Chris Campbell and be
[13:02] like can you light this please yeah
[13:04] waste an hour of his
[13:07] life maybe a bit longer than an hour um
[13:11] Okay so we've made well until he figured
[13:12] out that this wasn't yeah yeah so we'
[13:15] made a hole and that's great uh let's
[13:18] turn some layers off so we
[13:21] don't change them going forwards give
[13:25] that a save it's only Carl asks does the
[13:29] editor allow multi- select merging so
[13:32] you can at least temporarily merge the
[13:34] building and walkways into a single
[13:36] entity for the purpose of movement
[13:37] copying and placement yes it does yes it
[13:39] does so what we can do is we can grab
[13:43] this and save this thing and then we can
[13:46] put them into a group call it whatever
[13:50] and then we have this and you can move
[13:53] the whole thing around uh so yeah we
[13:55] will group things a lot yeah which is
[13:58] very very handy I I would be surprised
[14:01] and and I'm going to say this and
[14:03] somebody's going to point out a software
[14:04] that doesn't do it but I would be
[14:05] surprised in any layer based software
[14:08] that doesn't allow the ability to group
[14:10] because these collection these any
[14:14] subsequent work of significant depth and
[14:17] time is going to get really crazy with
[14:19] the layers and you've got to be able to
[14:21] group layers yes yep yep yep I
[14:26] surely that's just standard yeah
[14:28] although again there's going to be some
[14:30] software out there that doesn't and and
[14:32] somebody's going to point it out in chat
[14:33] in a few
[14:36] minutes cool so you could go for
[14:38] something like that that's changing it
[14:40] quite significantly we now have you know
[14:42] a point of interest on the horizon as
[14:44] you comeing in you know it's quite tall
[14:47] at the moment it's
[14:48] yellow um so so something like that
[14:51] could work and you know in terms of the
[14:54] actual layout of the space sort of fits
[14:57] we still have this sunken area maybe we
[14:59] could tart it up a little
[15:01] bit she just leaving lights floating
[15:03] everywhere man yeah we'll deal with that
[15:06] in a moment uh but I'm just reusing
[15:08] parts that you know if we look over
[15:11] here uh these are from the DCS um and so
[15:15] it's kind of like well what what can I
[15:17] reuse from other places I've also got
[15:21] where is it uh so mapper asks does your
[15:24] job also imply 3D modeling or is it only
[15:26] using assets made by other teams or
[15:29] build levels
[15:30] uh interestingly this is not John's job
[15:34] John's job is the 3D modeling is the 3D
[15:37] modeling and the overseeing of the teams
[15:39] who make the 3D modeling uh the
[15:42] arrangement of these things is usually
[15:43] done by a level designer um I wanted a
[15:47] level designer and they weren't
[15:49] interested so I had to sell for
[15:50] John so I would say yes and no to to
[15:55] that I would say oh did that oh
[15:59] it
[16:01] no um I would say the yes level design
[16:06] they do the white box and then we follow
[16:08] that as best we can obviously some
[16:12] assets are bigger or smaller than you
[16:14] originally think they're going to be and
[16:17] so what can we do to massage them into
[16:21] place um there we go I think that the
[16:25] misnomer is
[16:27] that it's you only do this or they only
[16:30] do that in in in we make hybrid gameplay
[16:34] teams where it's people of multiple
[16:36] disciplines and the more each person
[16:39] understands of the other disciplines
[16:40] even if it's not technically your job
[16:43] the more you understand of their
[16:44] discipline the the the the easier the
[16:46] Shand becomes the easier it is to
[16:48] communicate the easier they can say oh
[16:50] like that thing at there and goes yes I
[16:52] I I understood why you did that so I can
[16:54] replicate that here and stuff like this
[16:56] so which is why John can do uh a show
[16:59] like this for us uh when yes in all
[17:03] likelihood it would be probably be more
[17:04] appropriate for a level designer to be
[17:06] here but I I I hadn't done a show with
[17:08] John in a while forget the the joke I
[17:11] had before the truth is I haven't done a
[17:12] show with John in a while and I missed
[17:14] him and I've been asking him to do this
[17:16] for about six weeks yeah so the I don't
[17:22] do uh 3D
[17:25] modeling really as part of my day job
[17:29] yeah I'm that's leave that to the
[17:32] professionals um which you used to be
[17:34] which I used to be became a lead yeah
[17:36] and now
[17:39] I I do the jobs that no one wants to
[17:42] do no I I enjoy enjoy doing that work
[17:47] no we we're joking about it here but
[17:49] there is a very real thing in game
[17:53] development it's not just game
[17:54] development it's in any corporate
[17:56] environment where you know as you're
[17:58] working your way up eventually there's a
[18:00] point where you become leadership you
[18:02] become management and you get to do less
[18:04] and less of the day-to-day stuff that
[18:08] got you into the business got you into
[18:09] the industry and it's always a it's
[18:12] always a struggle we've had several
[18:16] we've had several people who have been
[18:18] promoted to lead and then they have to
[18:20] do responsibility they have to do uh you
[18:22] know HR stuff and reviews and management
[18:25] and stuff and they're like well I was a
[18:27] very good artist or I was a very good
[18:29] programmer I was a very good but I'm not
[18:31] a very good
[18:34] supervisor and so they usually then move
[18:37] out of the lead into a position that we
[18:38] refer to a lot of times as principal uh
[18:41] principal is is that's somebody that's
[18:43] kind of at the at the height of the of
[18:45] of the of the Workhorse uh field and
[18:48] they they they get to work kind of on
[18:50] their own a lot of times in silos
[18:52] building stuff uh a great example of a
[18:55] principal that you might be familiar
[18:56] with is zann uh from the UI team uh he's
[18:59] got so much experience and so much
[19:01] talent and skill that you know he can
[19:03] kind of he we can set him off on a thing
[19:05] and he can he can build something like
[19:06] building blocks for us while other Le
[19:09] while other leads you know lead the team
[19:11] and stuff like this um I'm probably
[19:14] a I'm probably a an an exception to that
[19:20] I I I try to delegate stuff I I I've
[19:23] done much better the last year and a
[19:24] half delegating stuff to to David say hi
[19:27] David
[19:29] I don't know if you could hear that I've
[19:30] done much better uh uh in the last 18
[19:34] months delegating stuff to David and the
[19:37] result has
[19:39] been isc's gotten a whole lot
[19:42] better um uh you know I pulled myself
[19:46] out of a lot a lot of those
[19:47] responsibilities um so like that but
[19:50] it's not an easy thing for for a lot of
[19:52] for for a lot of people I'm just talking
[19:54] this isn't a game to have convers this
[19:55] is any management conversation some some
[19:58] people are good leads and some people
[20:00] are meant to be principles when they
[20:02] reach the their certain level I'm
[20:04] probably closer to a principal to be
[20:06] honest cuz I like doing the work but I
[20:09] am where I am CU it's where I need to be
[20:12] you're generally a pretty good
[20:16] lead oh that's so kind when I when I
[20:19] talk when I talk to your guys and I talk
[20:20] to I talk to Ian and stuff you're you're
[20:23] you're a pretty good lead I not not the
[20:25] best I try to do good good by the people
[20:29] I work
[20:31] with um do you miss getting to spend a
[20:36] lot of time model cuz really uh not I
[20:39] mean I
[20:43] think uh not really I think I am quite
[20:48] happy to let people you know I quite
[20:52] like the high level the how do things
[20:55] come together to become this Loc the
[20:59] decision making the where's this going
[21:01] to go how many do we want who's involved
[21:05] what kind of resource do we have how are
[21:07] we splitting up the work um I really
[21:10] enjoy that aspect of it and you don't
[21:13] really get to do that when you're a
[21:17] midlevel doing the modeling so in a way
[21:20] I kind of had to work up that and then
[21:24] come here I've I've been the lead in
[21:26] other places but here I feel like
[21:30] I'm near the top of my game in being the
[21:35] best you know lead I can be for the
[21:37] people that I'm working with I was just
[21:39] start the best being the best and just
[21:41] St diplomatic you called yourself the
[21:45] best very diplomatic the best I can be
[21:48] diplomatically I'm the best um so this
[21:52] is this is kind of annoying cuz it's
[21:54] like this mesh here has got these um
[21:56] what you call it like holders on it so
[22:00] ideally we'd want something to go
[22:02] between them but I don't really have a
[22:04] thing um but I'm just going to I'm just
[22:07] going to free wheel I'm just going to
[22:08] leave it there might be something we
[22:10] could use there might be something we
[22:12] could
[22:13] use if we go down here where's that
[22:17] pipe is it in this layer yes it
[22:22] is um but I mean having said that I do
[22:26] get my hands dirty I don't do 3D
[22:28] modeling in so much anymore but I do do
[22:31] um this kind of stuff where we're
[22:33] creating something new from something
[22:35] what something that we already have
[22:39] um uh we we got a message from Callum
[22:42] dainty oh yeah he said he says tell JN
[22:45] to turn the number to a three the number
[22:47] to no
[22:50] we've
[22:51] I no uh
[22:55] I so when we were working on the DCS
[22:58] there is story behind this Concepts and
[23:01] originally it started in concept art
[23:03] they kept putting z3s on everything you
[23:06] know bit of scale a bit of a number
[23:08] somewhere um you know that's great I
[23:11] think it gives a bit more kind of
[23:13] reality to things um but the problem you
[23:17] then encounter when you're actually in
[23:19] development is that every artist then
[23:21] puts a 03 on what they're doing so you
[23:24] go to a place and all you can bloom and
[23:27] see is z
[23:28] F name is and everyone everyone thinks
[23:30] they're being
[23:32] original they're
[23:34] not so yes so that's why I opted for
[23:39] well in my first one 04 that's actually
[23:41] my favorite number not zero four four um
[23:45] why is four years I think it's just a
[23:48] nice
[23:50] even I don't know one
[23:53] cable something about it it's like that
[23:57] oh
[23:58] love
[24:00] it what are we doing again uh you're
[24:04] watching our favorite numbers only on
[24:06] twitch.tv/ starcitizen my favorite
[24:09] number is 86 is what sorry 86
[24:13] 86 and why is that uh because I I grew
[24:17] up loving a uh an old show on television
[24:20] called get smart and it had it was a it
[24:23] was a secret agent comedy show and
[24:25] Maxwell Smart was agent
[24:26] 86 and he was about as competent as I
[24:31] felt I was okay F which is not very much
[24:33] growing up so I really
[24:36] related seeing if there's anything else
[24:39] we can just pinch fuzzy Eagle first time
[24:42] chatter says what causes the invisible
[24:45] walls that you can't shoot through in
[24:48] assets oh so that would be some sort of
[24:53] uh it could be down to a material or it
[24:56] could be the it's a mesh that's set to
[25:00] transparent and then therefore you can't
[25:02] shoot through it we try not to use
[25:05] invisible collision and it will I think
[25:10] on some you know GR in it's kind of
[25:14] like
[25:16] you I think it's we try so on this for
[25:19] example if the AI is below you they
[25:22] can't shoot you and you can't shoot it
[25:25] them because the holes are too small but
[25:27] in say a chain link fence that's when
[25:30] you might be able to have things pass
[25:32] through because that's more likely to
[25:34] have bullets you know passing through it
[25:37] so
[25:39] it's it's kind of finding the line
[25:43] of do we want the people to fight each
[25:47] other through this or is it just too
[25:50] much of a bad gameplay experience so
[25:52] therefore we make it so that you cannot
[25:56] okay uh I don't know if you'll ask
[25:59] answer this uh but do we have a status
[26:02] on the arastra uh the status of every
[26:05] ship is the always the same check the
[26:07] public road map public road map is where
[26:09] you're going to learn uh the of the
[26:11] eminent uh release of any ships or
[26:14] vehicles I believe in just this week's
[26:17] road map update that the Zeus uh two of
[26:20] the Zeus's were added to the road map
[26:22] for Alpha 4.0 uh beyond that there won't
[26:25] be any updates
[26:34] okay so we could build something out
[26:36] this as
[26:40] well what time we uh Morgan Maleficent
[26:43] says that is actually a Skyfire the
[26:45] Transformers version of The Valkyrie
[26:46] toys so we have star screen now yeah
[26:48] this is this is
[26:51] okay you're talking about this guy let's
[26:54] go go to my
[26:56] camera so this uh uh this was the best
[26:59] Transformer ever uh it was it was stolen
[27:02] from the from the macros line uh and
[27:04] then there was a lot of whatevers and
[27:06] they couldn't do it anymore this is this
[27:08] is the original Skyfire Jetfire um now
[27:10] this you can't make they can't really
[27:12] make toys of it anymore this is actually
[27:14] a Macross veritech that is painted in
[27:17] the Skyfire Jetfire colors uh cuz
[27:20] they're like we won't let you make it
[27:22] anymore but we can make it which is why
[27:25] you see the the Macross logo at the
[27:27] bottom so when I saw saw Macross
[27:29] veritech in the colors of my favorite
[27:31] Jetfire I had to get it so that's what
[27:33] that
[27:42] is okay so
[27:46] [Music]
[27:50] let's now I want sideways operating
[27:54] bases
[27:56] so LOL
[27:58] [Laughter]
[28:07] okay you know this is for for a Fat's
[28:11] job this is uh not too bad you know take
[28:14] got time we got some silhouette breakup
[28:18] from a distance which is
[28:22] nice and then when you get into
[28:24] it this is not my finest work but you
[28:27] know you you've still got this
[28:29] downstairs area um you could potentially
[28:33] you know ledge glb over that and up
[28:36] there this is a bit of a death trap
[28:39] though so maybe I bring the stairs back
[28:41] in and have them there which are
[28:47] here uh now we just need to find the
[28:50] layer which is this
[28:55] one yes as others have pointed out uh if
[28:58] you do have a question uh for uh John
[29:01] and myself uh preface your question with
[29:02] the word question in capital letters uh
[29:05] it helps me pull it out from the rest of
[29:06] the
[29:08] chat I I will remind folks that John is
[29:11] an artist and I'm uh dummy who makes
[29:15] videos
[29:18] so keep your questions appropriate I
[29:22] guess for
[29:24] our uh work experiences yes yeah
[29:29] so that's a bit better now I think KH
[29:31] would even though he probably hate this
[29:34] design he would at least be like there's
[29:35] a way out cuz that's what we don't want
[29:38] to do as well you know we don't want to
[29:40] send people to dead ends essentially
[29:43] because then that's no fun for for the
[29:46] people
[29:48] playing uh so let's get a longer let's
[29:51] call and see
[29:54] if down here what we do it for me
[30:00] is just call
[30:03] Con does he even pick up I don't know
[30:06] we're going to find
[30:07] out I'd be I mean it is Friday at 5:30
[30:11] there
[30:14] [Music]
[30:15] so and usually when a cig developer gets
[30:19] a call from me it's they think they
[30:22] think it's like the Grim Reaper like
[30:23] he's asking be in a video he's asking me
[30:25] to be in a video and like that so I
[30:27] could see why he would not want to
[30:28] answer all right so Khan's not going to
[30:31] answer okay I'm going to that's
[30:33] obviously not aligned I'm just going to
[30:35] ignore that we don't need to worry about
[30:37] that right now uh these pipes are wait
[30:42] till QA J is it up yeah yeah uh
[30:47] pipes
[30:49] pipes yeah just a whole bunch of people
[30:52] who suffer through teams just got
[30:54] triggered
[30:55] apologies uh for you folks who have
[30:58] teams at work um are how are you dealing
[31:00] with the new custom emojis did your work
[31:03] enable them are you being absolutely
[31:06] tormented by uh your QA with a bevy of
[31:10] custom
[31:16] [Music]
[31:21] emojis
[31:22] okay so
[31:25] one of my pet hates
[31:29] and I'm probably going to do do my own
[31:32] pet hate now and not fix it correctly
[31:34] but I don't like it when things don't
[31:38] terminate correctly mhm so pipes and
[31:42] they just kind of go to nothing and you
[31:44] know when they just go into the wall and
[31:45] you're like just cover it up surely just
[31:49] takes 3 seconds uh here here here's a
[31:52] question when are we going to see more
[31:54] roads linking bases and garages and
[31:57] stuff wellow more roads like like the my
[32:00] favorite thing about the distribution
[32:02] centers was was the very first any kind
[32:04] of implementation of roads I mean yeah
[32:06] it was within them and stuff like this
[32:08] but it was just
[32:10] like so that was interesting doing that
[32:14] siton uh so not only did we make the you
[32:18] know biggest sandbox locations got in
[32:20] the game you know no cares about that
[32:23] the roads thing roads
[32:28] um yeah don't know I'm going to say it
[32:32] to that one cuz I I actually don't know
[32:36] um it wasn't a question for John he yeah
[32:39] I set him
[32:41] up roads people love
[32:44] roads and in some locations we do have
[32:47] roads yeah but you can't use
[32:50] them they haven't been released
[32:53] yet what are you talking about things on
[32:56] fire the what things on fire
[32:58] things on pyro what things like
[33:01] locations on pyro have roads like what
[33:04] location like the training post uh yeah
[33:07] the outposts yeah some the train post
[33:09] have roads some of them have roads going
[33:11] through them oh oh that's right those
[33:15] are like tracks they're dirt roads but
[33:19] they're very clearly roads thorough
[33:22] fares roads I get what you're saying
[33:24] they're not exactly like gravel no no
[33:26] they're all t oh yeah yeah you know no I
[33:29] get I get what you're saying they're not
[33:31] these yeah they're thorough faires
[33:34] they're areas that are specifically it's
[33:36] very you can you can tell immediately
[33:38] the intention is to drive a vehicle
[33:40] through
[33:41] there
[33:44] yeah but but the broader Roads Lincoln
[33:53] places hard maybe we would love we would
[33:56] love to but more concerns Yeah question
[33:59] I I don't I don't know if if pyro is the
[34:01] right uh the right system for a series
[34:04] of complex interconnected highways and
[34:06] stuff that's not really the vibe of of
[34:08] of of of
[34:10] pyro
[34:13] but Jared did you watch the atmo graycat
[34:16] social race that took place in the dist
[34:18] uh not all of it I I caught I uh I was I
[34:21] was I was tripping through twitch the
[34:23] other day and I caught about 15 minutes
[34:26] of it uh you know I follow ATM so
[34:28] whenever uh whenever they pop whenever I
[34:30] open Twitch I see them on my fellow
[34:31] channels and whatever I always I always
[34:33] check them out because um what they do
[34:35] is always what they do without any kind
[34:39] of internal tools and and and stuff is
[34:42] is incredibly impressive it is it is the
[34:44] work of incredibly dedicated incredibly
[34:48] dedicated and uh uh uh uh trying there's
[34:52] what's a word that means full of a lot
[34:54] of
[34:55] effort what's what's that word Ju Just
[34:57] just people who who who don't get scared
[35:00] by the amount of work that's involved uh
[35:03] they have that in Spades whatever that
[35:04] word is that I can't think
[35:06] of no I don't Brave is is is is
[35:09] overcoming fear and stuff like that it's
[35:11] not that's but no yes I did get to watch
[35:14] a little bit not as much as I ever like
[35:16] to uh as always it was very cool and but
[35:19] yeah they um you know after we did that
[35:22] whole you know you're you're not going
[35:23] to be able to get vehicles inside the
[35:24] distribution centers yeah they were like
[35:26] what up was basically a setup wasn't
[35:32] it I I only ask the question when a
[35:36] developer says the answer like that's
[35:39] like you want to go on record I said is
[35:41] you want to go on record saying you
[35:43] can't get vehicles in there and they're
[35:45] like yeah
[35:51] Sam okay so fortitude's a good word
[35:54] fortitude is a good word that was
[35:55] probably the word I was looking for
[35:59] uh Health CES health healthy CES like
[36:03] her Hercules but with health I don't
[36:04] know says when creating levels how does
[36:09] how much does the narrative play into
[36:10] the design of the
[36:12] level I think it depends on the
[36:14] location um I
[36:17] think
[36:21] we we think about who's going to occupy
[36:25] the space and then how is it going to be
[36:27] branded because of who's going to be
[36:29] occupying it um I think in sikon there
[36:34] was Adam did a presentation on Rough and
[36:37] Ready we taken over the Pyro space
[36:39] stations so in a way all The Branding
[36:42] was done to represent you know Ruff and
[36:45] Ready's their look so there's definitely
[36:48] a which gang will be in here or who will
[36:51] be in here and then the you know the
[36:54] Brandon to reflect that Bey beyond
[36:56] beyond just The Branding and stuff The
[36:58] Narrative stuff um in
[37:00] about three weeks uh no yeah in about
[37:04] three weeks on ISC um you'll see uh
[37:08] we're going to introduce you to a whole
[37:09] bunch of the uh uh of the Planet Side
[37:12] locations that you're going to uh
[37:14] encounter in the Pyro system and uh
[37:17] you'll see immediately that the uh that
[37:20] the the Farms the scrapyards the the the
[37:23] the training posts that are operated by
[37:26] uh the citizens of prosperity
[37:28] uh are pretty differently dressed than
[37:31] the same same type of locations that are
[37:34] owned by the head hunters gang for
[37:35] instance uh one clearly uh is more
[37:39] interested in putting forward a a good
[37:42] first impression to people or the best
[37:43] first impression that a harsh place like
[37:45] pyro will allow them and the others are
[37:48] just like nah nah we're not interested
[37:50] at all and then uh and then two weeks
[37:53] after that for five weeks after that
[37:55] when we get to you see you start seeing
[37:57] uh uh the Xeno threat locations the
[37:59] places where they live uh and stuff um
[38:02] they're just like like they're
[38:04] definitely built to be a little more
[38:05] intimidating I feel like that it it's
[38:07] like they want just the sight of their
[38:09] place to
[38:11] be fearful it's like that so so yeah so
[38:14] uh the answer uh to that question is yes
[38:17] uh certain narrative elements do come
[38:19] into play again it take it depends on it
[38:22] depends on what's available there's not
[38:24] always a narrative element available but
[38:26] when it is available yeah
[38:31] how long did he say to that ISC
[38:35] uh it was it was it's it's it's three
[38:37] weeks until
[38:39] until the surf the first surface side
[38:42] episode and then it's five weeks until
[38:44] the second uh surface side epis soe
[38:46] we're trying to you know space them out
[38:47] but we're in our we're in our Alpha 4.0
[38:50] phase last yesterday's show on uh 324
[38:54] was the last our last show on 324 uh for
[38:56] whenever it goes out uh there was there
[38:59] were a lot of questions uh we saw a lot
[39:01] of concerns and stuff about about the
[39:04] hangers and the and the inventory system
[39:06] and the Freight System we want we wanted
[39:07] to revisit that topic one more time uh I
[39:10] know I saw I
[39:12] saw I saw more than one uh react uh was
[39:18] just like oh my God talking about cargo
[39:20] again and I'm like it got it got
[39:23] 14,000 hours of watch time in less than
[39:26] the first 24 hours CU we it only hit 24
[39:28] hour when we started the show so it had
[39:29] 14,000 hours of watch time before so so
[39:32] yeah so I mean obviously some people had
[39:34] questions and wanted to know about it so
[39:36] but yeah things like the the search
[39:38] system and the and the removal of the
[39:39] Armistice zones for the hangers and
[39:41] stuff like that so some important
[39:44] information to get out there
[39:47] so
[39:49] so okay how about Apollo's question
[39:52] suggestion I didn't see Apollo's
[39:54] question suggestion sorry it must have
[39:56] scrolled up
[39:58] while I was talking about other stuff
[40:00] question is ISC now fully dedicated 4.0
[40:02] ISC is never fully dedicated to anything
[40:05] uh we're going to take a break uh uh
[40:08] there's there's an episode around this
[40:11] the the top 16 or the top eight of ship
[40:14] Showdown uh where where we we take a
[40:16] week and we're gonna uh we're going to
[40:18] talk to gav rothery uh concept artist
[40:21] extraordinaire who's made who's designed
[40:23] more uh who's visually designed more
[40:25] vehicles for Star Citizen than any
[40:26] others we're we're going to take a
[40:27] little break that week and and and and
[40:29] talk to him uh but yeah for the most
[40:32] part for the most part yeah the the next
[40:35] 1 2 3 four 5 six seven episodes Eight
[40:38] Episodes are all dedicated to 4.0
[40:41] content so with that one little break in
[40:43] between to support the ship
[40:47] Showdown okay hopefully this doesn't
[40:50] crash there we go so I looked I looked
[40:54] away I looked back and there was a donut
[40:56] so hopefully K would be proud of this
[41:00] but now let's think about this as a
[41:01] gameplay space so we've got the you know
[41:04] what I'm coming in I'm seeing from a
[41:06] distance um but how is it going to play
[41:08] so we've already got the stairs in so
[41:09] that's good it's more of a through route
[41:11] through here but also we thought about
[41:14] if you could clamber up and out here so
[41:17] there's of three points of Entry but
[41:19] then also it's the well still quite an
[41:22] open space and actually they would
[41:24] probably say you need something in the
[41:25] middle level design but at least now if
[41:28] you're coming into it you can duck down
[41:30] behind cover you can still shoot out you
[41:33] know you're not really protected from
[41:35] there I guess but then you could run
[41:36] over
[41:37] here um likewise I mean if you're coming
[41:40] in from here you're basically screwed
[41:43] but we could put something like um a
[41:46] fence panel here so that you could at
[41:47] least duck out from it which might help
[41:51] um you could also what does this look
[41:55] like um well this is is currently empty
[41:58] so I should probably delete these bits
[41:59] but if you were say jump the railing
[42:01] here run run run down and then get down
[42:05] here you're you've just still got some
[42:08] protection from over here and then
[42:11] likewise I mean you're basically screwed
[42:13] I thought I mean they probably wouldn't
[42:16] allow this gap which is fair
[42:19] because
[42:21] ideally the AI would use the same cover
[42:23] that you use and they would probably get
[42:26] stuck there so we'd probably move that
[42:29] um but interesting consideration I'm
[42:31] glad we're talking about it it's like
[42:33] not everything can go everywhere yeah
[42:35] sometimes you know certain mechanics
[42:37] both gameplay and technological require
[42:40] the placement of certain things in
[42:42] certain places definitely and I think as
[42:44] well it's kind of what we were saying
[42:45] before is that we all have our roles but
[42:48] we have to be aware of other people's
[42:50] roles as well and so there is a case of
[42:54] you know that looks like a problem area
[42:57] so instead of waiting for somebody to
[42:58] call that out why don't I just make some
[43:01] changes now and then take it from there
[43:05] um oh paollo has reposted this question
[43:08] uh would you ever consider releasing
[43:09] tools to allow players to design a
[43:11] location like an outpost space bace or
[43:13] other locations to be submitted to the
[43:15] team that could possibly be used in the
[43:16] verse if it were good enough um I'm
[43:19] going to do you one better Apollo meet
[43:22] me at camera
[43:25] one uh you should check out the uh one
[43:27] of the last presentations at last year
[43:29] citizen con where uh we we introduced
[43:33] the upcoming player Base building uh
[43:36] stuff there's a whole there's a whole
[43:38] not the whole presentation there's a big
[43:39] chunk of that presentation dedicated to
[43:42] uh the start of letting players add
[43:44] permanent locations to the verse uh so I
[43:47] don't think we would do it in a thing
[43:49] where we would create a thing and let
[43:51] you submit to us and we would put it in
[43:53] uh we're just going to give you the
[43:55] tools to start building places of your
[43:58] own and you should check out last year
[44:00] citizen G I'm not telling you anything
[44:01] new no no nobody's there's no leak or
[44:04] information here I'm telling you
[44:05] something that came out in October last
[44:06] year check it out that's how we do it
[44:08] that's how we're going to do
[44:18] it we just do this so what I'm doing now
[44:23] no doesn't want to do it fine be like
[44:26] that
[44:27] go this
[44:28] way they're asking one questions like
[44:31] like like like I'd answer a one question
[44:34] I answer one question then Chris Roberts
[44:35] would come busting through like the
[44:37] Kool-Aid
[44:38] Man actually that's not true Chris
[44:40] Roberts would probably tell you
[44:44] when there we go but no when it's ready
[44:46] the answer to all when questions are
[44:49] when it's ready anything else
[44:52] is
[44:54] unfair it's like it's like it's
[44:59] like it's like last week last week we
[45:02] had the 500th episode of
[45:04] ISC and I said in the outro hosting that
[45:08] we were targeting 4.0 for something
[45:11] earlier than the end of the year we are
[45:14] we want we are all working towards a
[45:18] release that
[45:19] is that is sooner than the last week of
[45:23] December which is which is I think what
[45:24] a lot of people are saying now is that
[45:26] the same as me saying it's going to be
[45:29] no it's not I don't know when it's going
[45:31] to be the answer to when it's going to
[45:33] come out is always the same when we
[45:35] think it's ready but it's there's this
[45:38] thing that happens
[45:41] where people ask us people ask us when
[45:43] people ask us when and then we we share
[45:45] we're we're we're targeting we're
[45:47] attempting we're we're all working
[45:49] towards getting it out at this time and
[45:51] then it doesn't happen at that time and
[45:54] there are invariably somebody that's
[45:56] like oh oh cig promised I'm like that's
[45:59] that's not the definition of a promise
[46:02] we told you what we were trying to do
[46:03] and that's us being honest and that's
[46:05] that's what we're honestly trying to do
[46:08] uh sometimes we I mean we just don't
[46:11] make it because that's how game
[46:12] development is but it's so we do try to
[46:15] be responsible with how many times and
[46:17] how many places we share that
[46:18] information because if you just keep
[46:20] saying this we're trying for this this
[46:21] we're trying for this we're this we're
[46:22] trying for this this and then they don't
[46:24] happen they keep happening and stuff
[46:25] like this it's like
[46:28] there's plenty of people there are
[46:29] plenty of people who preferred that I
[46:31] didn't say anything at all yeah and
[46:34] because they they they get their hopes
[46:36] up and then it doesn't make it so it's a
[46:37] catch 22 it's if we never say what we're
[46:40] trying to do then people say you're not
[46:42] sharing anything you're not you're not
[46:44] telling us what you're trying to do
[46:46] you're not telling us what's going on
[46:47] and then if I tell you what we're trying
[46:49] to do and then we don't make it then
[46:51] people go I wish he hadn't told us and
[46:53] it's
[46:55] like I'm on I'm on this I'm not I'm on
[46:59] year 10 of this so I'm not super phased
[47:01] by it anymore but it's I I I will I mean
[47:05] I'm pretty responsible with it at the
[47:07] end of last year I said you know I gave
[47:09] a list of things we were targeting for
[47:10] the first six months and those things
[47:13] all came out in the first six months and
[47:14] when I came back the first show of this
[47:16] year I said the first six months of the
[47:18] year again and there were those things
[47:20] were out in the first six months so I I
[47:22] am I try to be pretty responsible with
[47:24] my estimates uh
[47:27] but yeah it's we are targeting we are
[47:30] trying everybody everybody everybody
[47:32] here is working very hard to get 4.0 out
[47:35] sooner rather than later uh the the work
[47:38] for 324 does not block the work for 4.0
[47:42] they're in different streams and whatnot
[47:44] so we're trying real hard to get it out
[47:47] we want it out I
[47:50] mean just going to be real how badly do
[47:53] you want 4.0 out oh really yeah I can't
[47:56] wait it's going to be great it's like
[47:58] it's like I I I I I comment I comment on
[48:01] the show a lot that we have all the same
[48:03] conversations the backers do we have all
[48:05] the same feelings the backers do we just
[48:07] have them 12 weeks earlier yeah uh we
[48:09] all Des we we all want this stuff out
[48:12] because we want to move to the next
[48:13] thing and the next thing and the next
[48:14] thing and the next thing so yeah what I
[48:17] said last week still holds true we are
[48:20] targeting a release earlier than the end
[48:22] of this year and we're all working very
[48:23] hard to make that
[48:25] happen so
[48:29] okay so in that interlude I did another
[48:33] thing that we can do as well which is
[48:35] use the tint system um so this means
[48:38] that we keep all the same geometry and
[48:40] stuff uh but we have loads of primary
[48:45] secondary tertiary colors in in this
[48:49] format and you change the colors to
[48:51] whatever you want and then you apply
[48:53] them but if you're not happy with that
[48:55] kind of color Arrangement you can then
[48:57] say I want to Swizzle it so then I'm
[49:00] going to go Swizzle is that techn so
[49:02] secondary secondary primary or you could
[49:04] have you know whichever combination of
[49:06] these three numbers you Swizzle it and
[49:09] you apply it and it changes it so again
[49:11] that's a really quick way of saying okay
[49:13] this one's um Head Hunters this one's uh
[49:17] Rough and Ready this one is micro this
[49:20] one is um hen Dynamics um so I've
[49:24] changed it to I wanted an orange if I'm
[49:27] being perfectly honest cuz I think it
[49:29] would look cool and it work quite well
[49:31] with the yellow and the gray that we
[49:32] already have but I couldn't find one um
[49:35] so I've gone with the covalx red cuz I I
[49:39] knew where that was and also it means
[49:41] that you know again we're looking for a
[49:43] red object on the horizon something that
[49:45] stands out um isn't that great so now
[49:49] we're just going to tidy things up a bit
[49:51] cuz I made a bit of a mess um and then
[49:53] we're going to get this exported and
[49:56] send over to
[49:59] Planet if I can remember what the
[50:01] controls are uh so now we're deleting
[50:04] everything that I didn't need because I
[50:06] didn't need it or if I had more time
[50:10] potentially I would do a slightly better
[50:13] job uh Hassam Maus has a good question
[50:16] how come cig don't take a little time to
[50:19] update the design documents and let us
[50:21] know if anything is conceptually changed
[50:23] um well that's what we did last week
[50:26] with intro to jump points we we
[50:28] literally just went over the entire
[50:30] design from start to finish of the
[50:31] current design after years of saying it
[50:34] might be this or it might be this and
[50:35] stuff like this uh why we why we're not
[50:38] constantly going back and updating the
[50:40] old stuff we work on the
[50:43] stuff
[50:45] that goes out soon we work we work on
[50:50] the stuff that's right in front of us
[50:51] it's it's in order to get 324 out in
[50:54] order to get 4.0 out in order to get 4.1
[50:56] one after that and what those those are
[50:58] where our focuses are those are where
[51:00] our focuses are because they have to be
[51:01] that those those are our immediate tasks
[51:03] they take up all the brain space they
[51:04] take up all the effort we work on that
[51:06] stuff too much think if you remember the
[51:09] folks who the folks who were here
[51:11] watching uh the old days of wingman's
[51:14] hanger and Stu like that you know
[51:15] wingman's hanger was a great show but if
[51:18] we're being completely honest a lot of
[51:20] things were said in that show that don't
[51:21] apply to Star Citizen today the problem
[51:25] with projecting out to far is that
[51:28] people change ideas change technology
[51:31] changes you discover you can do
[51:33] something new that you couldn't do when
[51:36] you had that original design and so then
[51:38] your design changes you discover that
[51:40] you can't do something that you
[51:42] originally wanted to do and so your
[51:44] design changes uh new people come in
[51:47] with brand new ideas you know no nobody
[51:49] wants to H when you hire into a game
[51:51] Studio or any game Studio rather uh and
[51:55] you you're full of ideas you're full of
[51:56] experiences you're full of knowledge and
[51:59] you don't want to come into this
[52:00] environment like oh well every decision
[52:01] has been made every decision was made in
[52:03] 2013 and there's nothing for you to
[52:05] contribute there's nothing for you to
[52:07] add to the project you're like oh well
[52:08] why am I going to be here I'm just going
[52:10] to go somewhere else so every new person
[52:12] who joins the project has not every new
[52:15] people a lot of new people who join the
[52:17] project have new ideas uh new thoughts
[52:19] and stuff like this so we like to
[52:21] synthesize all that information and use
[52:24] it uh one of my favorite things about
[52:26] about CAG and I've said this before is
[52:28] that we're never afraid of the better
[52:30] idea it's it's when the better idea
[52:32] comes along it's the only thing that
[52:35] matters is is it do we believe it to be
[52:37] a better idea if we believe it to be a
[52:40] better idea we go with that sometimes
[52:41] it's not sometimes we try a thing and
[52:44] it's not the better idea it's like we
[52:45] all thought it was the better idea yeah
[52:46] now we know it's not let's look for
[52:48] another better idea uh you know that's
[52:50] game development not game construction
[52:52] but that's the reason why not there's
[52:55] not a whole lot of time and you'll find
[52:57] this at I I don't want to speak for
[52:59] every single game studio in the world
[53:01] but you'll find this at quite a lot um I
[53:03] mean I've been in this industry since we
[53:05] launched World of Warcraft at blizzard
[53:07] back in 2004 uh you'll find this in a
[53:09] lot of places that you tend to spend
[53:12] your energy on the things that are right
[53:14] in front of you this release next
[53:16] release and the release after that
[53:18] because there's too much that can change
[53:21] in my world in your world and our world
[53:24] in the techn technological world uh that
[53:27] means that whatever plan you make for 3
[53:29] years from now is likely not going to be
[53:31] in place 3 years from now uh because
[53:33] there's just too many other variables
[53:35] that change it so it's that's the that's
[53:37] the I was going to say short answer it's
[53:39] short for me I'm not I'm I'm not a very
[53:42] tur
[53:43] person I tend to talk but that's the
[53:47] that that's the Jared answer for why
[53:49] there's not a lot of time spent
[53:51] constantly updating old design docks of
[53:54] stuff that we don't we're not going to
[53:55] be working on in the next 3 to 6 to 9
[53:58] months so that's when it comes time to
[54:00] work on those things then we revisit the
[54:03] design docs and we make the decisions
[54:04] and the updates with the people that we
[54:06] have with the technology that we have
[54:08] with the process that we have and we
[54:10] find that that's a much more effective
[54:12] Manner and it reduces a whole lot of
[54:14] wasted time and it reduces a whole lot
[54:17] of wasted um and unfortunate
[54:21] heartbreak uh because we haven't filled
[54:23] your heads with a bunch of stuff that
[54:26] we're not certain we can do which is
[54:28] what we used to do way back in the day
[54:31] uh we're just more responsible with it
[54:33] now is the short
[54:37] answer what are you doing now so what
[54:39] we're doing now is we're just creating a
[54:41] quick
[54:43] layout of our new with our new uh
[54:47] overlay so it's one thing having the
[54:49] overlay you know we've changed the
[54:51] silhouette of the place we've got some
[54:52] new gameplay uh area in there but what
[54:55] else can we do to kind of make this more
[54:57] of an established place so you'll see
[54:59] that we've already got a couple of these
[55:02] already um those were the Trade
[55:04] Federation ships from Attack of the
[55:06] Clones left there you go no no they're
[55:09] not okay never
[55:11] mind um yeah so again so on the
[55:14] landscape you're coming in on your ship
[55:16] you've got to read on the location and
[55:18] then as you get closer you're like yes I
[55:19] remember this one it's the one with the
[55:21] two red columns um that's great so what
[55:25] we're doing now is is we're just using
[55:27] again assets that we already have so
[55:29] these derel um kind of
[55:31] containers and we've got these Ingress
[55:34] points um around the um the
[55:38] location but if you just go on head on
[55:42] um with no cover at all you're just
[55:45] going to get murdered so it's kind of
[55:47] like what can we give the player to give
[55:49] them an advantage over the you know the
[55:52] occupant of this space um so these
[55:56] things will be you know act as cover but
[55:58] also you can get on top of them so you
[55:59] can get have more of a kind of like a
[56:01] higher look over the um the location and
[56:05] then we also place them in areas of
[56:08] natural uh elevation as well so that you
[56:11] can be on a hill looking in going okay
[56:14] well I need I know I need to go here
[56:16] maybe I can get in through here work
[56:18] around and go through there so okay so
[56:20] now I'm going to trundle down okay how's
[56:22] it looking now um can I see any guard
[56:25] pass or this fence is blocking the way
[56:27] so maybe I can go over here I can climb
[56:30] up onto these
[56:31] boxes okay the guards are not there okay
[56:34] now I'm going to go in and then you're
[56:36] in you're in in it but you're you know
[56:39] what you're getting into as opposed to
[56:41] I'm just going to land and see how it
[56:43] turns out so just a little bit of
[56:45] population um so let's just grab all
[56:48] this this is the this is the nickel
[56:52] version of of of level design uh any any
[56:56] accomplished uh long-term FPS player we
[57:00] we'll tell you how important FPS design
[57:02] is it's the the the length of a corridor
[57:05] the amount of turns the the the the
[57:07] number of dead ends and the number of
[57:10] kill boxes and stuff that there's a
[57:13] reason why you know the newest versions
[57:16] of popular games like Halo and Call of
[57:18] Duty and stuff are are still revisiting
[57:20] maps from 2002 from 2004 and stuff
[57:24] because when you get a good map when you
[57:25] you get that map uh my favorite was
[57:28] always uh Wake Island in uh in uh battle
[57:31] the original Battlefield 1942 I love
[57:33] whenever Wake Island came up I was just
[57:35] like that's the one that was made for me
[57:38] usually because I just put a satchel
[57:39] charge on the bottom of the the zero and
[57:42] just hid in the bush and waited for
[57:43] somebody like oh the plane's there and
[57:44] they got in they're like I'm so happy I
[57:46] got to get get a plane get a plane and
[57:47] then I'd let them start taking off i'
[57:49] let they're going let them taxy and
[57:50] right as they get like a foot off the
[57:52] ground I'd blow up the Satchel charge
[57:53] and take it away from them oh hello
[57:56] export failed I wonder why that is um oh
[58:01] really didn't want this to happen but
[58:02] you're going to actually watch me try
[58:04] and solve an error um if I can get the
[58:08] window open oh no
[58:11] um well that about desert for this
[58:14] week's yeah yeah yeah last
[58:17] hurdle um oh elamine was so good oh wait
[58:20] it's down
[58:22] here there it is oh it it popped up pop
[58:25] screen so needs to have a pivot that
[58:30] would help maybe it doesn't have no that
[58:32] doesn't make sense though cuz it would
[58:35] already have one surely it doesn't it's
[58:38] oh all right it does I know I know the
[58:42] error and we are just going to fix that
[58:45] by moving this to the
[58:50] route oh come on
[58:52] eyes save export
[58:57] it's not not my first rad yet no it's
[59:00] not it's not it's
[59:01] not that's why he gets paid the big buck
[59:05] says zeer talk zeer zeer so what is the
[59:10] Pivot Point um it's essentially so we
[59:15] export things with called inside of
[59:17] object containers which is essentially a
[59:19] a group um that other things can then
[59:23] interpret um so essentially the point is
[59:27] where so you have a pivot on a mesh it's
[59:30] the same principle so it's where you're
[59:32] going to rotate on well transform from
[59:35] jator says JN doesn't care for Jared's
[59:37] stories and he's just British
[59:40] I I mean if you I can't even remember
[59:43] what you're talking about now actually
[59:45] yes I will tonight 5 hours from now but
[59:49] um it's more
[59:51] I the the in in a polite way no no no
[59:56] you know Z doing my work no there's
[59:58] there there's a very real thing uh
[1:00:00] streamers professional streamers who can
[1:00:02] play the game and talk and be personable
[1:00:05] at the same time that is an incredible
[1:00:08] skill that is an incredible skill that
[1:00:10] is usually built over lots of times lot
[1:00:12] people watch streamers they think it's
[1:00:14] this easy thing it is not it's it's not
[1:00:17] actually a skill I particularly have
[1:00:18] when I the few times I stream if I'm
[1:00:20] when I talk I'm crap at the game and
[1:00:22] when I'm good at the game I'm not saying
[1:00:24] any word like I can't do both whatever
[1:00:26] most people are not professional
[1:00:28] streamers so what happens a lot of times
[1:00:30] when we do these shows oh switch to the
[1:00:31] cool a lot of times when we have these
[1:00:33] shows we usually have me and somebody
[1:00:35] else here because it lets the person
[1:00:38] who's at the machine focus on their work
[1:00:40] and doing their work and then we provide
[1:00:42] the peanut gallery commentary uh we
[1:00:44] didn't uh we didn't want to take another
[1:00:45] person away from their work today so
[1:00:47] it's just John and I so that left more
[1:00:48] of the peanut gallery stuff on me so I I
[1:00:52] I I would venture to say and John you're
[1:00:53] welcome to tell me if you're wrong that
[1:00:55] you were grateful for my stories because
[1:00:56] they gave you a chance to focus on your
[1:00:58] work yes I am yeah okay you can tell me
[1:01:00] if it's not you can tell me you stories
[1:01:02] I I know I mean I'm I'm look look at the
[1:01:04] camera and tell jator he's wrong what
[1:01:07] look at the camera and tell jator he's
[1:01:08] wrong jinat you're wrong there you
[1:01:12] go didn't want to screw your name up
[1:01:15] live that's why it took so long for me
[1:01:17] to say uh okay so let's do some location
[1:01:21] scouting uh so this is dayar um sou this
[1:01:25] is nice because it gives us natural
[1:01:27] elevation it's just we can't put it on a
[1:01:31] you know a cliff side um so that's where
[1:01:35] one exists already so we don't want to
[1:01:36] be too close to
[1:01:39] that bit flat bit
[1:01:43] flat uh you know what you know when you
[1:01:45] think I'll put it here and you're like
[1:01:48] no I can't put it in the first place I I
[1:01:50] find and then here we are just going
[1:01:54] over the same terrain going
[1:01:56] I really wish I'd stuck to that first
[1:01:59] one it's almost like I wish you could
[1:02:01] put like little Flags down I'm I'm going
[1:02:03] to keep looking but I want to put a flag
[1:02:05] here
[1:02:08] okay maybe it's all right in the middle
[1:02:11] got nice half a valley going
[1:02:15] here this doesn't look great though with
[1:02:17] all these things in but I don't think
[1:02:20] being very hard I am I am and I don't
[1:02:22] think I can do anything about put the
[1:02:24] damn sor let's just let's just do that
[1:02:27] let's get this thing done um this is why
[1:02:30] nothing comes out on
[1:02:31] time you're the problem it's me you're
[1:02:34] the
[1:02:35] problem uh
[1:02:37] cool oh God now I'm in my own head and
[1:02:39] I'm like oh what about this place what
[1:02:41] about this
[1:02:42] place because it's also the footprint as
[1:02:46] well what the goddamn be John okay we
[1:02:50] we'll do it here we'll do it 2 minutes
[1:02:52] past time yes you're right right so we
[1:02:54] need a new l
[1:02:56] and it's called new layer and we should
[1:02:58] put it in the right place but we're not
[1:02:59] going to and then we're going to use our
[1:03:00] old tool because we've got another one
[1:03:02] in development and we're going to
[1:03:05] quickly hopefully it doesn't
[1:03:09] crash hello okay it was doing it right
[1:03:13] so let's just go beep it doesn't make
[1:03:16] that noise that's just me doing it on
[1:03:18] top when you've done this a thousand
[1:03:20] times you got to keep it
[1:03:22] interesting uh right here we go I never
[1:03:26] make my own mouth noises for videos oh
[1:03:29] oh and then we
[1:03:31] click and hey
[1:03:36] Presto and that's the rasar system
[1:03:39] that's how we do it so I did put some
[1:03:40] terrain modifiers in um and you can tell
[1:03:44] that they're having little to no effect
[1:03:47] but um I mean it doesn't look too bad if
[1:03:49] it's meant to be abandoned
[1:03:52] because that's uh that's like that
[1:03:56] that's a thing and likewise on the other
[1:03:58] side go back you show people what you
[1:04:02] did but we can still adjust it
[1:04:06] by wa where's where's the transform so
[1:04:10] we do it like this and we just bump this
[1:04:12] up a little
[1:04:16] bit maybe me move it over here a little
[1:04:23] bit yeah this was such a bad place to
[1:04:26] put it right so let's go the other
[1:04:30] side no other game studio in the world
[1:04:32] would show you this part of the and go
[1:04:36] down and you know this is a rush job on
[1:04:39] my part so we're going to have some
[1:04:42] issues for
[1:04:43] sure but
[1:04:47] actually this is looking a bit better so
[1:04:50] all right so yes this could be a bit
[1:04:53] tier but that's fine and this could be a
[1:04:56] slightly tier but that's fine it could
[1:04:59] be that we just need to move it up by a
[1:05:02] meter um
[1:05:04] but you know not too bad we extended the
[1:05:08] bases already so that's fine and we have
[1:05:10] some of that abandoned look and we have
[1:05:13] the natural elevation I was talking
[1:05:15] about so hello happy accident um no no
[1:05:19] no you did that absolutely intentionally
[1:05:21] and then you that was those those uh
[1:05:24] parameters you put in in a way you can
[1:05:27] can we force those probably not um we
[1:05:31] still see the the towers from a distance
[1:05:33] the color of
[1:05:35] them you know there's plenty of yeah you
[1:05:37] could put your ship down actually you
[1:05:40] know bit bumpy but out here safe
[1:05:44] protected make your way in and then
[1:05:47] you've
[1:05:48] got you know the containers still you
[1:05:51] can make your
[1:05:53] approach yes it's going to be harder
[1:05:55] from this side but you would just surely
[1:05:58] you would just go well it's a bit Barren
[1:06:00] over here so I'll go around and then
[1:06:03] it's kind of like well does it still
[1:06:04] look good when it's you know the sun's
[1:06:08] back here oh look at that let's turn the
[1:06:11] uh the old pth helper off we're seeing
[1:06:15] the L things right yes yeah we turn the
[1:06:18] L stuff on uh I tried
[1:06:20] it I might be able to do it in conso
[1:06:24] console
[1:06:26] where were you let's do this off camera
[1:06:30] because I don't know it completely off
[1:06:33] by this one it's it's l called debug I
[1:06:37] think yeah yeah yeah see
[1:06:41] deug there we go there you
[1:06:44] go yeah hold on was good got to be
[1:06:49] careful not to safely reveal I know how
[1:06:51] this all this works that looks great
[1:06:54] cool
[1:06:55] and if if the sun's on the other
[1:07:00] side maybe go back a
[1:07:06] step yeah that that that will look good
[1:07:09] for about an hour's work it's it's good
[1:07:13] enough
[1:07:14] foral where nothing good ever happens
[1:07:17] never nothing good is ever created
[1:07:19] that's not true that's uh we have
[1:07:22] moments all right that's it we got to
[1:07:24] wrap up lovely yeah wrap a screenshot
[1:07:28] all
[1:07:31] right do you want me to wrap this up
[1:07:34] please uh thank you for watching see you
[1:07:37] next time no too fast it's the Panic
[1:07:41] being on the
[1:07:43] spot don't you just love doing these
[1:07:45] with me I do actually why why I fought
[1:07:48] for this for for so long thank you for
[1:07:50] watching everybody this has been stari
[1:07:51] LIVE Game Dev making fobs I was Jared
[1:07:54] Huckaby that John Griffith's uh this is
[1:07:57] a production of cig Cloud prium games um
[1:08:01] no uh uh no reasonable information was
[1:08:04] discerned at any time uh be sure to tip
[1:08:07] your waitress tell jator he's wrong
[1:08:09] every time you can uh be sure you tune
[1:08:12] in uh if you haven't check out this
[1:08:14] week's episode on hangers and Freight in
[1:08:15] Alpha 324 answers a bunch of questions
[1:08:17] about the uh uh the new personal prision
[1:08:20] hangers and stuff that are coming along
[1:08:22] side also how loading manual loading and
[1:08:24] automatic loading works the function uh
[1:08:26] coming to all the kiosks and stuff like
[1:08:28] that and the removal of armistice zones
[1:08:30] well I guess you don't have to watch it
[1:08:31] cuz I just told you
[1:08:35] everything tune in next week uh tune in
[1:08:38] next week where uh we're back to our
[1:08:40] Alpha 4.0 stories with a look at pyro uh
[1:08:43] uh uh space based activities uh uh once
[1:08:46] you go through the jump Point uh some of
[1:08:47] the cool things uh you get to do when
[1:08:49] you're in space uh including uh remember
[1:08:52] uh if you watch the the the the the
[1:08:54] public road map uh this week we revealed
[1:08:56] asteroid bases and contested zones
[1:08:58] you're going to learn all about them uh
[1:09:00] next week's show so be be sure to check
[1:09:02] that out uh contested zones uh um I'm
[1:09:05] not usually the hype guy but contested
[1:09:07] zones for my money are probably the most
[1:09:09] exciting aspect of 4.0 uh for me it's a
[1:09:12] whole new kind of gameplay experience so
[1:09:14] so be sure to check that out uh then the
[1:09:16] next week after that is is fire uh we
[1:09:19] haven't talked about fire for a while
[1:09:20] we're going to we're going to go back
[1:09:21] and talk about fire which is also coming
[1:09:23] it's finally making its way to the
[1:09:24] persist Universe in 4.0 uh I don't know
[1:09:27] if that's on the public road map or not
[1:09:29] but we're talking about that uh and then
[1:09:31] we go and we go back to pyro down
[1:09:32] service side uh with an episode entirely
[1:09:34] dedicated to the social experience uh
[1:09:36] you might say social experience in pyro
[1:09:38] I'm like yes there are things to do in
[1:09:40] pyro besides fight uh yes it's I know a
[1:09:43] lot of people are thinking it's just
[1:09:44] going to be this giant meat grinder of
[1:09:46] stuff but there's actually a whole lot
[1:09:47] of content being built uh for the not
[1:09:51] Fighter for the lovers like John
[1:09:53] Griffith's uh and then uh after that we
[1:09:56] take our break for ship Showdown with
[1:09:58] with with our Gavin Ro special and then
[1:10:00] we're back uh back to pyro with an
[1:10:03] episode entirely dedicated to fighting
[1:10:05] because I mean there's a lot of fighting
[1:10:07] and a lot of cool new uh uh stuff to to
[1:10:10] fight with in that episode so so check
[1:10:12] that out and then after that we're just
[1:10:14] it's it's it's it's engineering and life
[1:10:16] support and and and another Creature
[1:10:18] Feature and stuff and it's just lots of
[1:10:20] cool stuff the zoos and mfds we got a
[1:10:22] lot of episodes as we uh between now and
[1:10:24] citizen gone so uh uh I don't know why I
[1:10:27] felt the need to tell you all that stuff
[1:10:29] just now but I
[1:10:31] did hope you're watching it
[1:10:36] down I really do keep most of the stuff
[1:10:39] in my head um thanks for watching uh uh
[1:10:42] uh take care uh if if if if if I made a
[1:10:45] joke and poor taste don't take it too
[1:10:47] seriously we we like to have fun here
[1:10:49] and remember remember that video games
[1:10:51] are fun and making video games are fun
[1:10:55] and this whole process is supposed to be
[1:10:57] fun so if you find yourself skewering to
[1:11:01] the side of angst and distress and stuff
[1:11:07] like this it's okay to take a break it's
[1:11:11] okay to take a break and find the fun
[1:11:13] again uh this is important to remember
[1:11:15] it's always supposed to be fun so thanks
[1:11:17] for watching see you next week everybody
[1:11:24] bye e

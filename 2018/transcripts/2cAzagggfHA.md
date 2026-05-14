# Star Citizen: Calling All Devs - Everything Flight Control and More

**Video:** https://www.youtube.com/watch?v=2cAzagggfHA
**Date:** 2018-05-07
**Duration:** 32:35

## Transcript

[00:10] hey everybody welcome to another edition
[00:13] of calling all Deb's our weekly Q&A
[00:15] series where I take questions from you
[00:17] the star citizen backer and posed them
[00:19] directly to our star system developers
[00:21] usually over Skype
[00:23] it's your a chance to submit your
[00:24] questions and have them answered
[00:25] immediately and directly by the folks
[00:27] who are actually working on our game for
[00:31] our first call today on this week's show
[00:34] we are going back to Manchester UK and
[00:37] our own Johnny just Sirius tech designer
[00:40] weapons designer looking I don't do
[00:43] titles Johnny how you doing man I'm
[00:46] great job thank you how are you I'm
[00:48] doing well there's a reason the title is
[00:50] like right below Johnny's window right
[00:51] this yeah
[00:54] Johnny I got a question for you now
[00:57] we're gonna break with tradition just a
[00:59] little bit this question isn't actually
[01:01] from from the front of spectrum that I
[01:05] know I just got done doing that big
[01:06] whole spiel that's what the show
[01:07] normally is but but but today I want to
[01:10] talk about this week I want to talk
[01:11] about some topics that I think will be
[01:13] interesting to people that questions
[01:16] that have come from other places in
[01:18] spectrum that aren't necessarily in this
[01:21] thread for you your question this week
[01:24] we've heard a lot about you know item
[01:26] poor items system 2.0 we've heard about
[01:28] ships 2.0 with the new pipeline that
[01:31] would we feature every week or every
[01:32] other week in shipshape
[01:34] what is weapons 2.0 god I'm hearing that
[01:38] I'm starting to see I'm sorry missing
[01:39] emails talking about weapons 2.0 what
[01:42] are we talking about here
[01:43] yes so it's it's it's actually very
[01:46] similar to what we've been doing with
[01:47] the items and ships 2.0 and it's
[01:50] essentially making things easier for us
[01:52] going forward making everything a lot
[01:54] more efficient especially code side as
[01:56] well and in the case of weapons making
[02:00] like kind of bespoke so much more of
[02:02] like a thing of the past
[02:03] so kind of previously using our like old
[02:07] xml's we're now moving over today to
[02:09] forge our I'll give a little shout-out
[02:12] to tossed in
[02:13] Frankfurt who's been working very hard
[02:15] on this for months he's the coder who's
[02:16] been working on the system with me a lot
[02:20] yeah basically so we're avoiding bespoke
[02:24] setup on weapons now because there were
[02:26] cases where we wanted to make some
[02:28] really really cool weapons for you guys
[02:29] but we were really hampered by what we
[02:32] could do with our existing system so we
[02:34] were very limited to like just is it
[02:36] rapid-fire as a burst fire as a single
[02:37] shot and if we want us to do something
[02:38] special we would have to get a coder
[02:40] involved and jump in and kind of do a
[02:42] bunch of work for us whereas now as we
[02:46] kind of go further down the line and we
[02:48] might start investigating some damage
[02:49] types and things that start to get a
[02:51] little bit more weird we might want to
[02:52] have a lot more interesting behaviors on
[02:55] like the new set of it it it just it's
[02:59] difficult for me to kind of formulate
[03:00] how much it absolutely does it in two
[03:02] words but it's now we can combine
[03:05] different fire modes in different ways
[03:07] so the custodian as an example as a
[03:09] weapon we've got live at the moment and
[03:11] I think a lot of people know that in 3.1
[03:15] a second fire mode might have slipped in
[03:17] and that was because we were testing
[03:19] ready for weapon 2.0 which is it always
[03:24] was planned to have a charged burst on
[03:27] the weapon so that was something we
[03:29] could never do previously but now we can
[03:31] use a charged fire mode with a burst in
[03:33] cider and we can do what we need to with
[03:35] the charge to make the burst better so
[03:38] that's just an example of kind of how
[03:41] robust the system is in that we can and
[03:43] do all of these strain things with the
[03:45] strange things without needing code
[03:47] support any more specifically on FPS
[03:52] weapons we're also looking at recoil so
[03:55] we just been kind of like using a simple
[03:59] reasonably simple recoil system that
[04:01] we've got in our mannequin editor at the
[04:03] moment and that's all being moved to
[04:05] dataforge as well so it's a lot easier
[04:06] for people like me to use and edit live
[04:09] while I'm actually playing the game so I
[04:10] can do a lot more fine-tuning on there
[04:14] and we're getting a lot more kind of
[04:16] like camera movement involved in
[04:17] everything to make the weapons feel a
[04:18] lot more punchy because we've been been
[04:20] listening to you guys and a lot of
[04:22] people think that we're not going we're
[04:24] not rough enough with the weapons
[04:25] they're not they don't feel punchy
[04:28] enough so that was one of the things we
[04:30] took on board were when we were
[04:31] redeveloping this stuff and one of the
[04:34] very big things for FPS is the
[04:37] attachment system we we really want to
[04:40] start pushing on that and I'm not saying
[04:42] it's gonna be coming anytime soon but
[04:44] we've allowed for all of the stats on
[04:46] the weapons to be modifiable so we can
[04:49] start to think about adding things like
[04:51] silences compensators different scopes
[04:54] and all this kind of thing that you can
[04:56] kind of change in and out and you PMA
[04:57] and you'll be able to see your weapon
[04:58] stats change and feel an affect on the
[05:01] weapon overall so yeah we're we're
[05:03] really leaving it open on the FPS side
[05:06] basically for all of our systems going
[05:08] forward so we've really kind of
[05:10] future-proofed our system here ship
[05:13] weapons specifically as well we can we
[05:15] can do some new interesting things on
[05:16] there now that we've got ship an item
[05:18] 2.0 or it's kind of a currently in
[05:20] process like you say we can now tie
[05:24] weapon behaviors a lot more into the
[05:27] heat and power system and they never
[05:28] been before like previously we pretty
[05:30] much only really had is the weapon on or
[05:31] off or is it overheated we can now kind
[05:34] of take a look at like how much power is
[05:36] it receiving and then like kind of curve
[05:38] the stats a certain amount like oh if
[05:40] it's only receiving half power then it's
[05:41] fires half of half as fast it's only
[05:44] half as damaging and stuff like that so
[05:47] we can even start investigating
[05:48] something like the hotter the weapons
[05:50] running the more like damage it does all
[05:52] the faster it fires so you kind of
[05:54] skirting that line between overheating
[05:55] and kind of reaching your max firepower
[05:57] so yeah like there's a kind of like the
[06:01] main points that I really wanted to
[06:03] cover so I'm pretty excited about this
[06:07] going forwards and actually getting it
[06:08] into game but I'm not sure I can't say
[06:11] when it's actually coming at well
[06:13] luckily for our backers we have a lovely
[06:15] RSI public roadmap where so when you
[06:19] have an idea like I said not said a
[06:22] number of times not everything is on the
[06:24] roadmap
[06:25] things you know that will come out after
[06:27] quarter 1 2019 certainly aren't down
[06:29] there but some things that we're working
[06:30] on now and that might even come up this
[06:32] year are not on the roadmap they're not
[06:34] in Rohit because we haven't developed it
[06:37] farther enough for us to have a really
[06:38] solid idea of when it might be
[06:40] implemented cancer or its waiting on
[06:42] other but let's throw a dependency it's
[06:47] waiting on other dependencies and step
[06:49] like that but uh this is another great
[06:51] example of game development versus game
[06:54] construction you know you started with a
[06:57] weapon system based on XML like so many
[06:59] of our systems did that was a CryEngine
[07:01] staple back in the day yep now as we've
[07:03] progressed through the lumberyard and
[07:04] through our own star engine improvements
[07:06] and Karstens work with with a data
[07:10] foregin stuff we can now iterate and
[07:11] make a system that that really suits our
[07:14] needs so that that's what that's what
[07:16] you're seeing here and you'll and
[07:17] hopefully you'll see the you'll reap the
[07:20] rewards of this new system in the coming
[07:22] months yeah yeah all right man thank you
[07:28] so much Johnny io I wanted to want to
[07:30] pitch you a weapon well I've got a
[07:31] weapon guy you're seeing how about you
[07:33] ever seen Howard the Duck remember that
[07:35] the neutron disintegrator well half the
[07:38] I've seen how the duck I'm not familiar
[07:40] with that gun it's it's the gut it's the
[07:42] gun they they use at the end to kill the
[07:44] dark overlord of the universe sort of
[07:45] try to kill the dark over there it
[07:46] wasn't very effective
[07:47] actually it was it no never mind don't
[07:49] do it thank you very much see ya alright
[07:58] thank you so much Johnny for our next
[08:00] call we're going right back here to the
[08:02] Los Angeles studio and our own cherie
[08:04] heiberg archivist extraordinaire on the
[08:06] lore team here sherry hey dude
[08:10] oh hey Jen welcome to calling all this
[08:14] mmm golf glad to be here
[08:20] I'd say it's better than the response I
[08:22] get most times um I've got a question
[08:24] for you this is a question from the
[08:26] backers submitted by the backers voted
[08:28] on by the backers okay it says will
[08:30] there be an in-game way to to research
[08:34] the lore and history of the star Sasan
[08:36] universe something diegetic like a
[08:38] museum on various planets or what well
[08:42] um that's an interesting question I
[08:44] would very much like I'm just gonna put
[08:47] this others like an idea that I've been
[08:49] batting around and something that I'd
[08:50] really like to come to fruition one day
[08:52] you know we have the Ark in game I would
[08:55] very much like that to be a destination
[08:57] where players can go not only to explore
[09:00] a really cool museum like space but to
[09:02] actually access the collective PDA
[09:03] through it there are other ways to that
[09:08] I would like players to be able to
[09:10] access the collective PDA like through
[09:12] your mobi glass that's one of the
[09:13] biggest goals that I really really want
[09:15] to see realized so that players can
[09:17] access galactic pedia both through their
[09:19] browser actually like some some kind of
[09:21] app we have on the website or through
[09:23] your mobile glass in game and what is
[09:26] the Galactic pedia itself or anybody
[09:28] that might not know well the Galactic
[09:31] pedia is the in progress in-game
[09:32] encyclopedia documenting the history and
[09:35] lore of the star citizen universe oh I
[09:38] have imagine that probably takes up a
[09:39] fair amount of time it does but we're
[09:44] doing active work on it right now we had
[09:46] we've had a couple of meetings with
[09:48] turbulent to talk about it so it's in
[09:50] the work on the tech side and on the
[09:52] lower side it's been in the works for
[09:54] quite some time now it's cool well thank
[09:56] you very much I'll let you get back to
[09:57] work okay thanks all right thank you so
[10:01] much Sheri
[10:02] up next we've got our own Chad McKinney
[10:05] a gameplay programmer with a question
[10:07] about quantum travel I think he's
[10:09] perfect for Chad how you doing man hey
[10:13] man how's it going I'm going well for me
[10:15] I got a question it's kind of curious
[10:18] seems like an obvious thing but you know
[10:20] who knows this question says will
[10:23] quantum travel be blocked inside
[10:25] asteroid fields it seems silly to
[10:28] quantum direct quantum travel directly
[10:30] to and from grim max yeah it does and
[10:34] the reason why it's like this is because
[10:36] of a combination actually have some
[10:38] optimizations in code so one of them has
[10:41] to do with the fact that we don't want
[10:42] to do long raycast which is how we kind
[10:45] of figure out something is within a
[10:47] certain distance of something else in
[10:49] physics doing that over cosmic scales
[10:52] can other leak rush your computer so we
[10:56] do some smart optimizations to only do
[10:58] intersection testing against celestial
[10:59] bodies for quantum travel so this skips
[11:02] kind of smaller things out scale we do a
[11:06] near field raycast check against
[11:09] something that you're directly in front
[11:10] of or close enough to be in front of the
[11:13] other there's actually another
[11:14] optimization actually prevents this from
[11:15] working which is the asteroids
[11:17] themselves are physicalized at a
[11:18] distance anyways it's even if they were
[11:20] wouldn't work long story short the game
[11:24] is more efficient because of some
[11:26] optimizations we put in however this is
[11:29] not an unsolvable problem we just
[11:30] haven't spent the time yet to come up
[11:32] with a good methodology to include the
[11:34] intersection testing for the asteroids
[11:35] in the case of quantum trouble that is a
[11:38] solvable problem and it's something that
[11:39] we do want to do and the relative
[11:41] near-term it's not on the schedule that
[11:43] I have seen for this particular release
[11:46] but we know about the problem and we
[11:48] know that we want to fix it so it's it's
[11:51] it will happen that I have absolutely no
[11:54] doubt all right channel let's get back
[11:56] to work man thanks so much cool no
[11:57] problem
[11:59] all right and finally but you might
[12:02] notice I'm not in the office right now
[12:04] our last question of the show is to good
[12:08] friend john pritchett who works out of
[12:11] his home office so I figured if he if I
[12:12] got a call the guy at home I'm gonna
[12:14] take the call at home
[12:16] why not it also doesn't help that it's
[12:17] like 10:30 at night here and that's just
[12:20] I'm not gonna be in the office at night
[12:22] so we are calling like I said john
[12:24] pritchett a physics guru extraordinaire
[12:28] John how you doing man doing good thanks
[12:31] for working me into your schedule I know
[12:32] it's late thank you for taking it for
[12:34] working me into your schedule you're not
[12:36] the easiest person to get a hold of I
[12:38] know you're very busy you got your
[12:40] fingers on a whole lotta aspects of star
[12:42] citizen so thank you so much what is
[12:45] your title I'm terrible with titles do
[12:48] you know you know what your title is
[12:49] yeah it's just physics programmers is it
[12:51] for you I don't know what my title is
[12:52] half the time a community veteran
[12:54] community it's all over the place I got
[12:57] a question for you
[12:58] it's from the backers it's voted on by
[13:00] the backers the question has to do with
[13:03] grab Lev basically this person wants to
[13:06] know what the deal is with hoverbikes in
[13:08] their current implementation is this how
[13:10] they're supposed to be is there more
[13:12] work to be done
[13:13] now I knows a bit of a loaded question
[13:16] because you've recently made some
[13:17] posting on spectrum so that's I think
[13:19] the timing of this is perfect why don't
[13:20] you want to start us off well what's
[13:22] going on with grab live well I mean
[13:25] first of all when when it came out in
[13:26] 3.0 obviously it was completely broken I
[13:29] haven't really seen much evidence from
[13:32] from the live version that it's it's
[13:34] doing anything that I wanted it to do so
[13:36] you know we did our best
[13:38] crunched all the way down to the end but
[13:40] I think we had it working pretty well up
[13:41] to about a day before release but still
[13:44] didn't make it out there in good
[13:45] conditions so now you're talking about
[13:47] one of those things where you've got the
[13:49] individual system working and then when
[13:51] you start pulling all these other
[13:52] systems together and a big patch yeah
[13:54] but when you say you had it working the
[13:56] day before start putting all the pieces
[13:58] together that's where come from right
[14:02] right so yeah and really a lot of people
[14:07] if you played the game you know I have
[14:08] CS itself has been in pretty bad shape
[14:10] since 3.0 came out there were just so
[14:12] many changes to the
[14:13] engine and there wasn't time to really
[14:16] do a proper fix so that a lot of those
[14:19] things affect grab live as well as
[14:21] general ifcs
[14:22] there were some some greater issues
[14:24] really with grab left so yeah I mean if
[14:26] you can get it to hover at all
[14:28] you're lucky right now but the changes
[14:32] that I've made that work I've been doing
[14:33] on it since the start of the year it's
[14:35] really coming along and we've got it up
[14:37] for testing on PTU and I'm getting you
[14:39] know good results good testing good
[14:41] feedback with that and you know we're
[14:44] hoping to I don't know if it's gonna be
[14:46] something we can get into a 3-1 patch
[14:48] you may be gettin too late for that
[14:49] but certainly 3.2 is definitely what
[14:52] we're aiming for yeah I know I know you
[14:53] were just we were talking before we were
[14:55] setting up the call that you said you
[14:56] were working on getting at getting a
[14:58] patch out to p2 you to test some of
[15:00] these fixes everything so so yeah it's
[15:02] it's still too early to know whether
[15:03] we're gonna have a big improvement in
[15:06] the 3-1 branch or whether it's going to
[15:08] have to roll into the 3-2 and of course
[15:11] let's be completely honest with folks
[15:13] it's possible that what happened with
[15:15] 300 might happen with 3-2 as we start
[15:17] combining things together but we're not
[15:19] going to give up it's not a sign of
[15:20] course throw our hands up and be like oh
[15:22] well it's just fine the way it is yeah
[15:24] we got you and and and other programmers
[15:27] and engineers you know all working to
[15:29] make this a enjoyable experience right I
[15:33] think it's safe to say the when we first
[15:35] introduced the very first space bike the
[15:37] dragonfly you know however long ago now
[15:40] that really captured a lot of you know
[15:43] of backers imaginations and it's
[15:45] definitely an experience that that we
[15:46] want we want to be as enjoyable and
[15:48] awesome as possible sure what can tell
[15:50] us about what you want to achieve with
[15:52] grad level like describe to me as best
[15:54] you can obviously we're on a Skype calls
[15:56] late at night but describe to me how you
[15:58] want this what's the goal here okay well
[16:02] one of the real challenges you know for
[16:04] a system like this is I don't want to
[16:06] implement something that's a very
[16:08] specific hover behavior I want it to be
[16:10] a very generalized system and then turn
[16:12] that over to the designers and give them
[16:14] a lot of flexibility for them to decide
[16:16] you know this is a bike or this is a
[16:17] tank or whatever and get a lot of
[16:19] variation out of that you know so there
[16:22] there's some you know specific
[16:24] approaches that I've taken
[16:26] or for how you can you know implement or
[16:31] tune hover for for all these different
[16:33] vehicles so for the the dragonfly and
[16:37] the NOx really not a lot of variation
[16:39] there I kind of see the dragonfly as
[16:41] being more of an off-roader and the NOx
[16:43] being more like a road bike you know a
[16:45] street bike so you tend to want the NOx
[16:46] to hover fairly low and require fairly
[16:49] you know flat terrain not a lot of
[16:52] variation without it I'm starting to
[16:54] bottom out and things like that
[16:55] unfortunately right now the NOx for
[16:59] there are a few issues with it it's not
[17:01] even behaving as well as I would expect
[17:02] it to even on a straight flat ground
[17:05] it's dragging so but you know the
[17:07] dragonfly you want that you know be able
[17:11] to get out on a little bit more rough
[17:12] terrain and kind of feel the bumps and
[17:14] and you know have a little bit more
[17:17] control over over you know rough terrain
[17:20] and so really to achieve that III have a
[17:25] system where the hover by control hover
[17:31] vehicle control system basically is
[17:32] determining based on the terrain that
[17:35] you're over and also the terrain that it
[17:36] sees coming what it wants its elevation
[17:39] to be and so it's it's constantly saying
[17:41] okay well I need to be you know you know
[17:43] 10 meters off the ground right now or
[17:45] five meters off the ground or whatever
[17:47] if you're if you're on nice flat cruise
[17:48] then it can be right down there you know
[17:50] have a meter off the ground right so it
[17:53] sets a goal elevation and then the the
[17:55] physics of the system is a you know
[17:58] basically essentially a spring
[18:00] simulation is going to then determine
[18:03] the the the rise and fall well not
[18:06] actually the fall the Falls is generally
[18:09] going to come from gravity but but
[18:10] pushing it up you know to achieve
[18:13] whatever elevation the the control
[18:15] system is looking for so I think that's
[18:17] that's basically what we're seeing as
[18:19] the main issue is that control system
[18:22] isn't getting enough data really to be
[18:23] able to make good decisions about its
[18:24] elevation and and as opposed to the
[18:28] system not being able to achieve the
[18:29] elevation well you know that it's
[18:32] desired right so anyway getting back to
[18:36] your question you're asking Wow
[18:40] go man go yeah so how have I implemented
[18:45] it in order to achieve you know the
[18:48] vision that we had for right for for
[18:50] heavy vehicles correct so what your
[18:53] vision was yeah well that's basically it
[18:56] I mean I I just wanted to essentially be
[19:02] as close to physically realistic you
[19:07] know acceleration driven hover being
[19:11] very very careful not not to you know
[19:14] that the the gravel of itself is only
[19:17] ever really pushing you up right so then
[19:20] like if you go up then the gravity's
[19:23] going to pull you back down so you feel
[19:26] like you're kind of you know catching
[19:27] air if it feels like you're jumping as
[19:29] opposed to a system that's like managing
[19:31] your full elevation up and down and then
[19:33] of course grab grab Lev is really
[19:35] frictionless when it comes to lateral
[19:37] you know so when you're turning and
[19:39] things that's when thrusters from the
[19:41] vehicle are going to come into play and
[19:42] and that that's I think something
[19:43] different that we do then you see with a
[19:45] lot of hover bikes and games is the fact
[19:47] that it's a hybrid you know atmosphere /
[19:51] space vehicle so it has full thruster
[19:53] control when it needs it we go into
[19:56] hover mode really I think more as a
[19:57] matter of efficiency because you know
[20:00] then you're not having to burn thrusters
[20:01] to stay aloft and and and you can say it
[20:04] save on fuel and all that you're still
[20:06] using those thrusters for a lot of
[20:07] maneuvering how much does the overall
[20:11] atmospheric flight model plane to this I
[20:13] mean it the the atmospheric flight model
[20:15] then you know we want we want ships to
[20:17] we want all ships to function
[20:20] differently a Jungian a mo than they do
[20:22] you know in outer space that's not a
[20:25] hundred percent you know either at this
[20:27] time how much of how much of this work
[20:30] is is just grab live and how much is it
[20:33] you know work on the atmospheric flight
[20:34] model yeah well I mean the thing is
[20:37] really holding it up is I'm fixing a lot
[20:40] of things I have CS itself the
[20:42] atmospheric flight model grab live I
[20:44] have to have all that done before any of
[20:46] it can be checked in so I actually have
[20:48] made significant progress on the
[20:50] atmospheric model I talked in
[20:53] a recent atv about you know where I
[20:56] wanted to go with that and the main
[20:58] thing was I wanted the the control
[21:00] system to actually utilize drag and
[21:04] gravity as part of its control as
[21:08] opposed to the initial implementation
[21:09] which was just that it would compensate
[21:11] for those things and then its control
[21:13] system was essentially the same as it is
[21:14] in space
[21:15] you know the compensation gets you to
[21:17] the point where it's basically zero drag
[21:19] and zero gravity and then the control
[21:21] system it's similar to space except then
[21:23] you have less thrust available because
[21:26] those things are being used for
[21:27] compensation so at this point you have
[21:30] that right so like if you're pushing
[21:31] into drag of course you have less thrust
[21:33] available for accelerating forward
[21:36] because you're expending a lot of that
[21:37] thrust just to overcome drag but the
[21:41] part that was missing was then when you
[21:42] start to slow down it's actually using
[21:45] drag that's pushing against the vehicle
[21:47] as part of you're slowing down force as
[21:50] opposed to nullifying that out and then
[21:52] using thrusters to slow you down so now
[21:54] when you when you turn and you Bank into
[21:56] a turn you'll feel a much stronger
[21:59] stopping motion you know on that slide
[22:02] than if you were just doing a straight
[22:03] wrong turn and not bringing as much of
[22:06] the surface area of your ship into the
[22:08] drag right so of course when you're
[22:10] you're you're falling you're going down
[22:13] you're gonna have a lot more
[22:15] acceleration to to drop down because
[22:17] gravity's helping you but as you're
[22:18] going back up it's gonna work against
[22:20] you and so you know all that variability
[22:22] that you expect for atmospheres it's
[22:24] gonna come into play and it's that's all
[22:26] in there now and seems to be working
[22:27] very well actually any how does that a
[22:30] how does that affect the maneuvering
[22:32] thrusters versus you know beat all like
[22:33] we have we have ships like the reclaimer
[22:35] the Terrapin have specific VTOL
[22:37] thrusters sure right now ships are using
[22:40] their maneuver through nuvaring
[22:42] thrusters to basically you know hover
[22:44] around in atmosphere what our future
[22:47] plans yeah that well it's still evolving
[22:50] right now what i plan to check in for
[22:53] this version is that for vehicles that
[22:55] have VTOL those those thrusters will be
[23:00] utilized strictly for countering gravity
[23:03] that that's their primary role and so
[23:06] that leaves your maneuvering thrusters
[23:09] free to give you as much acceleration as
[23:11] you would normally have you know because
[23:13] essentially the beatles have nullified
[23:15] the gravity as opposed to you know if
[23:19] you don't have the tall's then you're
[23:21] taking at least one g out of depending
[23:24] on the planet out of your your your
[23:26] upward thrust and then whatever's left
[23:28] you can have for maneuverability so with
[23:32] with a vehicle that has beat all's you
[23:33] would expect that it's plus zyy
[23:37] maneuverability would be close to what
[23:39] you you have in space but without beat
[23:42] all's it because significantly less
[23:43] gotcha and I know other developers have
[23:46] spoken that if you're flying in a ship
[23:48] that doesn't have be tall and you're
[23:49] using your maneuvering thrusters to
[23:51] hover and wanna that when the wear and
[23:53] tear comes in four components that
[23:56] that's going to wear a lot more on
[23:58] maneuvering thrusters trying to hold
[24:00] your ship in place and rights and heat
[24:02] that will hopefully be a factor as well
[24:03] yeah yeah so while you may be able to
[24:05] float like a butterfly in a hornet or
[24:09] whatnot in atmosphere you're gonna burn
[24:10] those thrusters out a lot quicker than
[24:12] if you have a dedicated ship with meat
[24:13] all right like a Terrapin er yeah well
[24:16] the plan we've talked about and I
[24:17] haven't had a chance to really bring
[24:19] that in yet is that your thrusters are
[24:21] going to really have two modes one's
[24:24] gonna be like how do you generate
[24:26] sustained thrust like you would need for
[24:28] gravity you know for a long period of
[24:31] time versus what thrust can you generate
[24:34] and like a quick hit like a quick Delta
[24:36] V you know to get from zero to max SCM
[24:38] velocity or whatever those are going to
[24:40] be two different acceleration levels
[24:41] basically call a sustained thrust versus
[24:43] impulse thrust so the threats that you
[24:46] have available for you know combat
[24:48] maneuvers which are like quick impulses
[24:50] to change velocities right those are not
[24:52] going to be the same accelerations that
[24:53] are available for oh okay I'm staying up
[24:55] in acceleration I mean staying up in
[24:57] gravity so yeah that'll make a big
[25:00] difference
[25:00] even without V tall's because you know a
[25:02] lot of our fighters aren't necessary
[25:04] going to have devoted feet all's yeah
[25:06] alright one last question you know where
[25:09] I'm gonna use you while I got you here
[25:11] man
[25:12] you're wrapping up the show here okay
[25:15] let's talk about ifcs it the latter the
[25:19] last of the things that you're working
[25:20] on we touched about the atmosphere of
[25:22] flight model we protect about the grav
[25:23] lab ifcs
[25:25] where is it right now and where do you
[25:27] want it to go okay well you know if
[25:30] you've played ifcs and played the you
[25:33] know there's the game with you know
[25:34] flown the ships in 3.0 you know that
[25:36] ifcs basically has been drunk for a
[25:38] while
[25:39] it's really about it was me some people
[25:43] can't tell but yeah you know just a lot
[25:46] of the changes in the engine
[25:48] optimizations and things hit it pretty
[25:49] hard and it just wasn't something we
[25:52] could just do a quick fix on so you know
[25:54] it wasn't until after 3.0 that I could
[25:55] really take the time and dig in and and
[25:57] fix these things right so you know the
[26:00] main thing I had to do was one of the
[26:03] optimizations we did was moving a lot of
[26:06] things off the main thread or in my case
[26:08] the physics threads a big blocker on the
[26:11] physics thread to do all the processing
[26:13] for ifcs
[26:13] so we moved basically the entire off
[26:15] ifcs off the physics thread into a lazy
[26:18] batch update which depending on load
[26:21] will get called you know more or less
[26:23] frequently and unfortunately that puts I
[26:27] have CS out of sync with the physics
[26:28] simulation the physics tick could run
[26:31] you know through two or three times
[26:32] before ifcs gets an update and and you
[26:34] just can't have stable simulation that
[26:36] way that was my question
[26:37] all right right so basically my solution
[26:42] to that is I had to go in and and
[26:44] separate ifcs into two parts one is the
[26:48] control system logic which is really
[26:49] where all the load is and the other is
[26:51] strictly the physics simulation part
[26:54] where the the control logic says this is
[26:57] what I want the ship to do based on you
[26:59] know player input and all these things
[27:01] and and you can update that state as
[27:03] quickly as we can get it but then the
[27:06] actual physics processing you know
[27:08] generating the the accelerations and
[27:09] everything that's working every physics
[27:12] step in order to achieve whatever the
[27:15] requested goal is from ifcs and so that
[27:19] can remain you know as smooth and stable
[27:20] as possible and so yeah I've done that
[27:23] at this point
[27:25] and that's working very well I'm still
[27:29] working on trying to get ESP to work
[27:31] properly with the new system that's why
[27:33] in the PTU right now
[27:34] combat is terrible so hopefully i'll get
[27:38] that cleaned up here pretty quickly
[27:40] using opinions if john pressure do not
[27:42] represent those of platinum paring games
[27:43] robert space industries or its
[27:44] subsidiaries that's the feedback yeah
[27:49] that's actually that's actually last
[27:52] question i you're one of the you're one
[27:54] of my favorite devs to be complete
[27:56] candid because you spend you spend a
[27:58] fair amount of time in spectrum you know
[28:00] in the ask a dev threads you know
[28:01] engaging with our backers getting their
[28:03] feedback it's one of the reasons i
[28:05] wanted to do this you know this when
[28:07] this thrust when this question came up
[28:09] you've been pretty active in in spectrum
[28:12] talking about gravel if talking about
[28:14] ifcs is that it for we give that a lot
[28:17] of lip service but is that information
[28:18] actually helpful is it helpful when
[28:20] backers go to the spectrum and actually
[28:22] post their experiences and post their
[28:23] feedback well it definitely is for me
[28:26] you know there's only so much I can do
[28:28] because I'm very specifically involved
[28:31] in simulation you know and how we
[28:34] achieve the design goals and not so much
[28:36] in what the design goals are of course I
[28:39] pass everything I hear on to to other
[28:41] devs
[28:42] you know as well but yeah as does
[28:45] everybody on the community 200 now I
[28:57] wish I could be on I haven't been on
[29:00] spectrum very much I spent a lot of time
[29:02] on discord with you know the the epic
[29:04] aadhi people or how do you say it right
[29:06] but yeah I got to get got to get out on
[29:10] spectrum more well John thank you so
[29:13] much you made you made an epic wrap-up
[29:16] to this week's show so I appreciate you
[29:18] taking the time I know I know it's late
[29:21] there it's like here so thank you for
[29:23] fitting me in and when I have something
[29:26] else for you I'll give you a Holly great
[29:29] well thanks for including me all right
[29:30] thank you sir
[29:31] thank you bye all right well thank you
[29:34] so much to john pritchett and that wraps
[29:36] up another
[29:37] pisode of falling all dibs hey hey Jared
[29:40] yeah John you still there yeah you know
[29:43] what I just realized there's something I
[29:46] wanted to get into with with gravel EV
[29:47] and I totally spaced it off well you
[29:50] know I wanted to talk about basically
[29:52] the the main thing that's left to do on
[29:53] that so I really have the system
[29:55] functioning pretty close to the way I
[29:57] wanted to function when it's running you
[29:58] know on a single-player game or a load
[30:00] load multiplayer game but you know
[30:04] unfortunately right now whenever there's
[30:06] a heavy load on the server you know
[30:07] gravel it just isn't getting enough data
[30:10] about the the terrain to really be able
[30:12] to make good decisions about you know
[30:14] its elevation or whatever and and I
[30:17] think that's that's why the performance
[30:19] just really significantly drops off
[30:21] based on server load and so that's
[30:23] really the last thing that that I need
[30:25] to get cleaned up I think before it's
[30:27] going to actually be out in live and and
[30:29] and performing in a way that that you
[30:32] know hopefully players will be happy
[30:33] with optimization basically yeah
[30:36] definitely that's a good chance to
[30:38] remind folks that you know it's it works
[30:40] one way on your computer when you're
[30:42] doing it then we go to evocati and
[30:44] they've got this many people and it
[30:45] starts very different ways then we go to
[30:47] wider PTU and we've got even more people
[30:49] and it starts to work
[30:50] you know like yes and then when we go to
[30:52] our live alpha environment then starts
[30:55] to you know to kind of go sideways and
[30:57] that is the process that we're in that's
[30:59] it's important to remember that every
[31:01] star citizen environment is a testing
[31:04] environment so even the live alpha
[31:06] environment so you guys helped you guys
[31:09] helped us tremendously get in there to
[31:11] hammer this thing because that's where
[31:12] we see the real data there's virtue and
[31:14] what we get from evocati there's virtue
[31:16] and what we get from p2u but the best
[31:17] data we get is live so play the game
[31:20] file your issue council reports go to
[31:23] spectrum and tell john pritchett you
[31:25] know what's up you know it's it's that
[31:28] that's the best thing you can do to help
[31:29] us make this the the quote-unquote best
[31:31] damn space
[31:32] ever yeah I can finish it by closing
[31:35] John yeah sorry I mean interrupt all
[31:38] right so that's it for calling all
[31:39] deaths a remember you can submit your
[31:41] questions for consideration each and
[31:43] every week up on the thread up on
[31:45] spectrum and don't forget to vote that's
[31:46] the two-part process you got submit your
[31:48] questions and you got a vote your
[31:49] questions I say it every single week
[31:51] even though I'm at home I'm in my
[31:52] pajamas I'm still gonna say it
[31:54] so for calling all deaths I'm Content
[31:57] Manager Jared I can be that was john
[31:58] pritchett we'll see you next week
[31:59] everybody or at least I will
[32:15] thanks for watching for the latest and
[32:17] greatest in star citizen squadron 42 you
[32:19] can subscribe to our Channel or you can
[32:21] check out some of the other shows and
[32:22] you can also head to our website at

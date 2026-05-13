# Star Citizen Live: All About Alpha 3.9

**Video:** https://www.youtube.com/watch?v=o9W_bW9n--8
**Date:** 2020-03-06
**Duration:** 50:28

## Transcript

[00:03] hi everybody welcome to another edition
[00:05] of star citizen live all about alpha 3.9
[00:09] I'm your host jared huckaby and joining
[00:11] us on the show this week is star citizen
[00:12] live game director mr. todd papy Todd
[00:15] how you doing on hello good to see you
[00:17] we had some unintentional red versus
[00:20] blue thing going here this is actually
[00:22] orange so no okay well all right we're
[00:27] gonna have to check the color on our
[00:28] monitor here all right only I look at it
[00:30] okay if you've never seen Star says in
[00:32] live it's where we take questions from
[00:33] you the star system backer impose them
[00:35] directly to our developers you submit
[00:37] your questions in one of two ways we are
[00:39] running fast cuz we're a little bit
[00:40] behind here you can submit your
[00:41] questions live in the twitch chat by
[00:42] preface in your question with the word
[00:43] question in capital letters surrounded
[00:45] by brackets you can also do the same on
[00:47] spectrum which is our communication
[00:49] platform available on Roberts space
[00:50] industries comm if you're watching this
[00:52] later on YouTube hello you can't
[00:56] participate but you can watch alright so
[00:58] as usual we put up a threat earlier in
[01:00] the week we started collecting questions
[01:02] for those who maybe couldn't be here and
[01:03] a lot of the ones to be voted up by the
[01:05] community through the through the course
[01:07] of the year and right off the bat let's
[01:10] start with their other questions come in
[01:11] live since the introduction of
[01:13] server-side object container streaming
[01:15] desync has dramatically increased what
[01:18] is causing this desync and what is the
[01:20] fix so it wasn't it wasn't socks that
[01:25] caused it there was a physics issue and
[01:28] in fact I had there was a physics proxy
[01:31] refactor that was done and we had that
[01:36] fix ready for like three eight two
[01:38] however the code base between three
[01:40] eight and three nine had changed so much
[01:42] so we deemed it too risky to actually
[01:44] check it in so we checked it in two
[01:45] three nine it's in three nine ideally we
[01:50] think that fixed the root of the problem
[01:52] and then if we run into any kind of edge
[01:55] based issues we'll go in and fix those
[01:59] case-by-case but ideally most of that
[02:02] has been you know resolved for that now
[02:05] obviously there's other factors that
[02:07] play into that whether that be servers
[02:10] flag or or even we kind of have some
[02:13] internal lag built in
[02:15] so and we're trying to work those issues
[02:18] out right now to reduce as much latency
[02:21] as possible we know that it's there it
[02:24] is a focus of ours because it is a huge
[02:28] quality of life issue that needs to be
[02:30] resolved we've talked about the physics
[02:33] we factor a couple times on this show
[02:35] actually throughout the last quarter
[02:36] it's important to remember remember that
[02:39] well object suicide object in your
[02:41] streaming was a big tent pole feature of
[02:44] 3.8 it was not the only feature that
[02:46] went in so it can often when you see
[02:49] issues like that it's often easy to go
[02:50] oh that was the biggest one that must be
[02:51] it but in this case it was the physics
[02:54] per factor okay the number two question
[02:58] is is the ship-to-ship spawning making
[03:02] it into three point nine first answer no
[03:05] so basically it's it's on our radar and
[03:10] if I remember correctly I believe we are
[03:14] working on it in some factor but it's
[03:17] not going to make it into three nine
[03:19] yeah and for anyone that maybe doesn't
[03:22] know what that is it's the ability to
[03:24] just spawn your ship with its parasite
[03:26] craft within it if it's the carrick it's
[03:28] the Pisces and the earth stuff like that
[03:30] we we want it as much as you guys do I
[03:34] can promise you that I've heard Chris
[03:36] bring it up a number of times in the
[03:37] various review meetings stuff like that
[03:38] it's just as with all things priorities
[03:42] are you aware of the ship duplication
[03:45] but from the live chat yeah we've I mean
[03:50] we've had a couple of factors that we've
[03:56] been dealing with
[03:57] obviously we're we really saw it on
[04:00] three I think three eight one is kind of
[04:03] working we're reared its ugly head and
[04:05] then from there we tried to do some hot
[04:08] fixes for it so if it's raring it's ugly
[04:10] head again then then send those send
[04:15] those things in and and we'll we'll get
[04:19] it fixed I mean because the it should be
[04:21] a it should just be a hot fix versus
[04:23] having to roll out a whole new patch and
[04:26] of course when he says send it in we're
[04:28] referring to
[04:28] issue council which is just saying on
[04:30] Roberts page calm where you can submit
[04:32] your own buck reports in much the same
[04:34] way our QA team does and then you can
[04:36] verify the bug reports that have been
[04:38] submitted by other backers and help us
[04:39] find these things and track these things
[04:41] down even faster because again as we've
[04:43] discussed several times the same
[04:46] resultant bug can be caused by a
[04:50] multitude of underlying features so just
[04:53] because you see you see it submitted
[04:55] already doesn't necessarily mean you
[04:57] shouldn't submit yours because your it
[04:59] may be happening for you for one reason
[05:00] and it happened for that person for
[05:02] another reason and the more reports we
[05:04] get in the more you can verify them the
[05:05] more it allows us to track down the
[05:07] multiple underlying causes of these
[05:09] things though or gives us another repro
[05:13] case yes actually
[05:14] get to it I was trying to think of the
[05:17] Starship Troopers thing I'm doing my
[05:18] part yeah that's what allows you
[05:21] congratulations
[05:22] hey hey it's always a good thing when
[05:24] you think of Starship Troopers like it's
[05:25] never a bad time I think of Starship
[05:27] Troopers true true okay next question
[05:30] have there been any major improvements
[05:32] to server-side OCS I so fully understand
[05:39] you're not a programmer an engine no no
[05:41] and in fact I talked to Rob Johnson our
[05:45] lead programmer in UK about this and not
[05:47] player facing now there's been a lot of
[05:50] work done that's it's on basically how
[05:53] we edit into how we work on things think
[05:57] of it as you work on a file you export
[06:01] it and then now you have no see now a
[06:04] lot of times let's say a space station
[06:07] is made up of multiple low C's you know
[06:09] planets made up of multiple OCS now what
[06:12] we've been doing is trying to allow the
[06:15] designers and the artists to go in to
[06:18] high-level OSI crack it open and then be
[06:21] able to edit and adjust things and so it
[06:24] increases the workflow versus having to
[06:27] okay I have my big OC that has
[06:29] everything and then I go to one of those
[06:31] smaller OCS and open up a different
[06:33] editor window and then basically just
[06:36] keep on stacking editor windows open
[06:38] until I find the one that I want so this
[06:41] is a way for us to kind of
[06:42] crack things open and almost like
[06:45] Russian doll it down to what we need to
[06:47] do to fix it and then so we're working
[06:51] on things that's increase our workflow
[06:54] and increase our iteration time yeah
[06:59] definitely one of the it's is see this
[07:02] week we showcase the the the particle
[07:05] layer separation tool that was made for
[07:07] VFX it's it's oftentimes it's just as
[07:11] important to be developing internal
[07:13] facing tools and and and and tools
[07:16] basically I was looking for in other
[07:17] words it meant tools to help us track
[07:20] these things down and and isolate where
[07:22] the issues are like with the Russian
[07:23] nesting doll thing you were talking
[07:24] about yeah I mean the equivalents like
[07:28] if if something takes you know 20 30
[07:31] minutes to to check on and see if you
[07:33] got it right and like you can only do
[07:36] that so many times in today but
[07:37] obviously if we can get that down to a
[07:39] minute to check on it then you're gonna
[07:41] be able to get more iterations on it
[07:43] make sure it's right and then you know
[07:45] basically move on to the next task
[07:48] so we we want to tighten that loop as
[07:50] much as possible okay the next couple
[07:53] questions are all will this be in three
[07:55] point nine hey it's all about alpha
[07:57] three point nine will player 2 player
[08:00] direct cash transfers being three point
[08:02] nine this is a major pain point for any
[08:04] group play at the moment it is no it's
[08:08] not sorry it is it is a pain point we
[08:12] know that it's it's not going to be in
[08:15] three nine basically we know that we
[08:18] need to refactor the moby glass and
[08:21] actually get it into building blocks and
[08:23] then that allows us to scale so from my
[08:28] standpoint that is one of my highest
[08:30] priorities and I can kind of lay you out
[08:33] the the highest priorities from a UI
[08:35] standpoint so we on our EU vehicle
[08:39] future team we actually have people that
[08:41] are working on the ship HUD and
[08:44] basically moving towards you know what
[08:46] we need to do and and you start seeing
[08:48] elements of it being moved out or being
[08:52] not moved out but being you know pushed
[08:54] out with each release so
[08:56] basically the the the center part of the
[08:59] screen versus you know the upper corner
[09:01] or the MF T's you know like we kind of
[09:05] just work through each section and it's
[09:08] the same thing with the player visor so
[09:11] basically right now we have the bottom
[09:13] left hand corner which is the actor
[09:14] status and then from there we'll be
[09:16] doing the mini-map and we'll be doing
[09:18] the weapons section and we'll be doing
[09:20] you know mission notifications and
[09:22] training and tutorials so so basically
[09:24] we've got the EU vehicle feature team
[09:26] part of that team working on the ships
[09:28] and then we've got part of the actor
[09:31] feature team working on the visor as
[09:35] well as some of the UI feature team to
[09:37] kind of balance between the visor if
[09:40] they need help on those and then the
[09:44] next thing would be the the mobi glass
[09:47] and we've touched on this before it's
[09:50] you don't want to you try to we try to
[09:53] minimize temporary work as much as
[09:54] possible the mobi glass right now is
[09:56] made entirely out of flash and we want
[10:00] to convert it to there are new building
[10:01] blocks tech which we first discussed on
[10:03] how I see a couple quarters ago if we
[10:07] built the technology into it now if we
[10:10] if we did the transfers now we'd have to
[10:11] redo it later because we'd be drilling
[10:14] in for flash we have to redo it for
[10:15] building blocks so it's one of those
[10:17] it's rather than spend our time doing
[10:19] work that we know a lot to throw away in
[10:21] the near-term future where it just has
[10:24] to wait and submit again it's a matter
[10:26] of priorities but we're exactly very
[10:29] aware we're very we actually were
[10:30] actually doing an internal play test
[10:33] here with just with the video team last
[10:35] week and and one of us had a lot of
[10:37] money and the other none of us know the
[10:39] other ones did and it was very very good
[10:44] so the big thing from us I think with
[10:49] the mobi glasses is basically getting
[10:50] that home screen done right and then
[10:52] from the home screen then it will become
[10:54] basically which prioritize apps now s42
[10:58] is some some apps that they need and
[11:01] then obviously PU has the existing ones
[11:05] that we have as well as you know other
[11:06] ones that we've thought about you know
[11:08] the transfer
[11:11] even how are we gonna clean up you know
[11:13] the journals and the logs and you know
[11:15] so that it's easier to use and track and
[11:19] obviously the contract manager really
[11:23] needs to be cleaned up as well so like
[11:25] there's there's other thing there's
[11:28] other apps but as soon as we get the the
[11:32] home screen then we'll be building in
[11:34] templates to actually get the other
[11:36] stuff as well there's a question from
[11:39] the live chat about once mobile glass is
[11:41] rebuilt in building blocks can we have
[11:43] an app to remote remote start our ships
[11:45] people want to be able to just turn on
[11:47] the lights and unlocked it I I mean I I
[11:50] would prefer that just be on the player
[11:52] it's almost like you know cars nowadays
[11:53] if you if you have a you know just a
[11:57] remote starter like I would rather you
[12:01] know we do it that way where you set up
[12:03] something on your ship you know and as a
[12:05] remote start and then it just gets you
[12:06] get close and it unfolds opens up and I
[12:10] get aggregated I can already like just
[12:13] like a proximity is like a proximity
[12:15] alert yeah I would prefer it to be that
[12:17] way so okay so I don't think it needs to
[12:21] necessarily be mobi glass with
[12:25] physicalized
[12:26] inventory make it into 3.9 no that's
[12:30] waiting for eye Kosh basically we have
[12:33] the what we call internally the piss pit
[12:37] system it's a wonderful name I know it's
[12:46] the personal inner thought aspect and
[12:48] being able to you know pull things off
[12:50] and and adjust the the way your hotkeys
[12:53] are working and and you know kind of
[12:56] what inventory you have on your person
[12:58] that at that time so but as far as
[13:01] physical inventory and ends because
[13:04] right now everything's global uh
[13:07] switching over to physical inventory we
[13:09] need to wait for I cache to come in
[13:11] first and if you're more conversation
[13:15] about what I cache is and how it works
[13:16] we talked about it a bit at citizencon
[13:17] and then again in either the one of the
[13:20] last two pillar talks they start to the
[13:22] blurred
[13:23] together but um lots of stuff to know
[13:26] about I cache there I think I think that
[13:29] was in the first pillar Tomica well your
[13:32] first peg which would have been the
[13:33] third pillar talk episode yeah yep
[13:36] there's we make a lot of videos well
[13:42] pirates be able to sell cargo from
[13:43] stolen ships in three-point-nine yes
[13:47] well actually from stolen ships or
[13:50] blown-up ships from blown-up ships yes
[13:53] from stolen ships would have to check in
[13:56] on that I don't my gut feeling is no
[13:59] right now it's not working basically if
[14:06] somebody's taking notes then send me a
[14:09] note to check up on that okay a unified
[14:15] friends list is coming we saw our first
[14:18] look at that and I see earlier this
[14:19] quarter is there more grouping and
[14:22] Friends work is there more
[14:25] yeah planned yeah the wording was a
[14:28] little weird there yeah I mean this will
[14:30] be our first iteration on it and then
[14:32] from there I I definitely think that
[14:35] there's there'll be more things planned
[14:37] you know it's um I mean right now I
[14:42] think this is a pretty good what we
[14:44] would consider tier 0 you know a a
[14:47] minimal Viable Product for for it the
[14:50] one going in not the one that we have
[14:52] right now so you know from there I'm
[14:57] sure there will be some some UI issues
[14:59] or maybe some back-end services or you
[15:02] know some stuff on spectrum that we'll
[15:03] need to clean up but I think this one's
[15:05] been thought about you know from a
[15:08] player standpoint this is moving forward
[15:11] well it is cool in the in the test I
[15:14] mean it's a simple thing but in the test
[15:16] we can bring spectrum up on one screen
[15:18] the game client up on the screen you can
[15:19] add a friend and it immediately pops up
[15:21] on one and do the same in the vice versa
[15:23] and stuff like that so yeah so it's a
[15:24] it's an important first step it's clean
[15:27] yeah it's cleaning up a lot of the
[15:29] issues that we had I mean the the friend
[15:31] stuff before wasn't very intuitive and
[15:33] then even on the back end there was
[15:35] almost like four different lists you
[15:36] know
[15:36] that had to keep track of now it's one
[15:38] unified list and so there's been a lot
[15:41] of work you know from a technology
[15:42] standpoint to to go in and make this
[15:45] work again working on a the website as
[15:49] well as working on the clients so it's I
[15:53] think it's a big improvement yeah it's
[15:57] not the it's not a flashy feature like
[16:00] like like a new planet or a new but it's
[16:01] so important to a online game multiple
[16:05] online multiplayer game to have to make
[16:07] the process of finding friends and
[16:09] playing with your friends is easy and
[16:11] efficient as possible will we see an
[16:15] increase in player server capacity 43.9
[16:18] yeah right now like I think we talked
[16:24] about it last time like the server frame
[16:26] rate is still isn't running the way that
[16:27] we want it to run we have some some code
[16:31] fixes in there the it's it's not a death
[16:34] by a thousand cuts but it's basically
[16:36] there are there's no silver bullet you
[16:40] know for it right now so we're going
[16:42] through and and this is another thing
[16:46] that was talking to rob about is
[16:47] basically kind of what the plans are to
[16:49] hit this hard and we have some code
[16:53] that's coming in that we feel will allow
[16:56] us to evaluate those things better and
[16:58] basically kind of see see the outlier
[17:01] and see you you know if we're getting
[17:03] installed on any thread and then figure
[17:07] out how we can work that out and reduce
[17:09] that stall
[17:10] so obviously that will have impact on
[17:13] the server and then you know ideally get
[17:16] the server frame rate up first before we
[17:18] start adding new new people in we run
[17:23] into a gamut of food related questions
[17:24] next we will be able to buy food at the
[17:28] various food courts and many landing
[17:30] zones in the game and drink at the bar
[17:31] in three-point-nine yes so I mean the
[17:36] bartender this stuff is going in right
[17:39] now so but yes so you'll be able to to
[17:48] buy it from vending machines
[17:50] as well as I think there's the pizza
[17:54] brokers and stuff like that so I'm sorry
[17:59] yeah so basically right now the the bar
[18:02] like we're we're just making sure
[18:05] everything is is copacetic and it works
[18:08] on the like the the feature work has
[18:11] been done now there there were some
[18:14] issues that we just wanted to see and
[18:16] kind of make sure everything's good and
[18:19] you know running in situation as well as
[18:21] running it with internally what we call
[18:24] services which is basically mimicking
[18:26] you know the online state and sometimes
[18:30] there's been disparity between what you
[18:33] see in kind of like an editor versus on
[18:36] the server so it's just making sure that
[18:38] there's no disparity and everything's
[18:41] good and then it should just go in you
[18:44] mentioned very machines the next
[18:46] question is actually yeah and actually I
[18:49] think that I miss voted myself so I'm
[18:53] not misquote it I've said something
[18:56] wrong vending machines will not work
[18:58] been eating so it's something that we're
[19:01] working on and basically just didn't
[19:04] make it so there's there's us thinking
[19:09] about you know obviously the big Benny
[19:10] version but it's there's a holistic
[19:13] approach that we want to we want to make
[19:15] sure that it works and basically acts
[19:20] like a vending machine and we didn't get
[19:23] that working for three nine so at the
[19:26] food courts and at the bar yes you can
[19:28] get food and drink and then but not at
[19:31] vending machines okay you know as
[19:34] hopefully it's the last food-related
[19:36] question are we going to be able to
[19:37] store food in the ship's kitchen area
[19:40] not for three nine however you can store
[19:45] packaged foods on your person same with
[19:48] drinks and then you can use it that way
[19:50] but you can't do it for I guess
[19:53] theoretically you could buy a bunch of
[19:55] stuff and just kind of place it in there
[19:57] but it's not like some of these filling
[20:01] the fridge for you kind of thing
[20:03] hundreds of people voted that question
[20:05] the people really want their
[20:08] kitchenettes we've we've talked for a
[20:13] while about the the the HUD rework you
[20:15] mentioned it a little bit earlier in the
[20:18] different pieces how much of the head
[20:20] rework will we see in three-point-nine I
[20:23] you'll see the visor obviously the
[20:26] center of the screen in on the ships
[20:28] that's been reworked and is with
[20:33] building blocks now and then there's
[20:36] other hot elements like you know certain
[20:39] kiosks and other things have been moved
[20:42] over from flash to building blocks the
[20:45] group system you know so so there's
[20:48] there's elements like on the FPS visors
[20:53] so if you kind of break it down into
[20:55] different screens so I'm gonna look at
[20:57] the monitor real quick basically you've
[20:59] got your your bottom left-hand side
[21:01] that's building blocks everything else
[21:03] right now is flash and then we're kind
[21:06] of working our way through the quadrants
[21:08] you know to switch everything over and
[21:10] it's the same same thing that we're
[21:12] doing with ships yeah so it's not going
[21:14] to be a it's not gonna be like a rip the
[21:15] band-aid off and one day you come and
[21:17] there's a brand new top-to-bottom fully
[21:20] different yeah yeah we're doing in
[21:25] patches so and we're doing in pieces so
[21:27] you know if if we could get all four
[21:30] done you know in that time fantastic but
[21:32] right now we've got the bottom left hand
[21:35] side screen and then obviously the
[21:37] center for the ships and and from there
[21:40] it's just it's it's just a process of
[21:42] just switching everything over I thought
[21:45] we were done with food but if you buy a
[21:46] granola bar and it's wrapped does your
[21:49] character eat the wrapper or unwrap it
[21:51] it actually unwraps as a chris roberts
[21:54] game there's no way let us just eat the
[21:56] wrapper correct no and we say we saw it
[22:02] three days ago i saw somebody
[22:05] unwrap it and then basically take three
[22:08] bites and then and then and chris got
[22:12] very excited about
[22:15] that was on Tuesday I remember yeah no
[22:18] so Tuesday I won't say the next part um
[22:22] is there still a small team working on
[22:25] quality of life bug fixes the game keeps
[22:27] getting new stuff but there are still
[22:29] loads of persistent bugs that make
[22:31] playing what we have frustrating I it's
[22:34] actually company-wide so it's not one
[22:39] small team it's company-wide that that
[22:42] we we work towards the you know fixing
[22:45] this stuff so internally we have issues
[22:49] that's let's say QA bring up or issue
[22:53] council or other you know factors you
[22:58] know somebody playing the game just
[22:59] doesn't like it we have in JIRA we have
[23:03] a label called QA GP review which
[23:06] basically just means QA gameplay review
[23:09] which then comes directly to me I triage
[23:12] its and then I add what we would
[23:16] consider a gameplay experience label on
[23:19] it and so out of you know our our bucket
[23:22] list of or out of our bucket of bugs we
[23:25] have what we consider gameplay
[23:26] experience bugs and any of those
[23:27] gameplay experience bugs have directly
[23:29] to do with quality of life so when we're
[23:33] actually doing bug fixing and release
[23:35] supports you know throughout the second
[23:37] half of the quarter those quality of
[23:40] life or basically the gameplay
[23:42] experience bugs get risen up to the top
[23:44] and get resolved now because in the past
[23:47] what was happening was we were actually
[23:49] building up a lot of bugs meaning we
[23:52] would get and we have bugs broken down
[23:55] into five different categories critical
[23:57] basically blockers criticals highs
[23:59] moderates and trivial now a lot of the
[24:02] polish stuff and a lot of things that
[24:04] you know kind of just are affect the
[24:08] quality of life you know are really
[24:10] highs moderates and trivial so any of
[24:13] the blockers or criticals basically got
[24:15] resolved but then that left a lot of
[24:17] high moderates and trivial x' so this is
[24:19] our way of saying no I view this is very
[24:24] important and so team you need to work
[24:26] on this and it's something that's
[24:28] throughout the
[24:29] quarter I'm always chasing down trying
[24:32] to make sure that the feature teams as
[24:35] well as the constant teams you know have
[24:36] very clear focuses on all rights you
[24:40] know for the ships like I want to make
[24:41] sure that we're going through and we're
[24:43] hitting a manufacturer really hard and
[24:45] it's going through and squashing as many
[24:48] bucks as we possibly can for that four
[24:51] locations then it'll be location by
[24:52] location obviously for feature teams on
[24:55] it I just want to make sure that they're
[24:56] going through all of their features and
[24:58] making sure that we have a small amounts
[25:03] of issues on them so then you know
[25:06] because we are a live product and we
[25:08] need to have it running not only for the
[25:10] PU but also for s42
[25:13] these quality of life issues also
[25:15] affects you know us when we're
[25:17] developing the game as well that's gonna
[25:22] had something but no you got it when you
[25:25] go to eat or drink now he's feeding me
[25:28] only food-related questions when you go
[25:30] to eat or drink do you have to take your
[25:32] helmet off first I remember this I think
[25:43] right now no I think so but it might be
[25:50] that yes you do because we have the
[25:52] ability to block the players from from
[25:54] doing certain actions I'm trying to
[25:57] remember I can't remember the next
[26:02] question is actually related to it it
[26:04] says will we be getting a remove helmet
[26:05] button with three nine no not for three
[26:08] nine basically we have the ability to do
[26:12] it and something that we were working on
[26:15] we have it working with a few helmets
[26:19] but obviously we have a dearth of
[26:21] helmets in the in the game that we need
[26:23] to go through and do and the the
[26:27] constant team just haven't enough time
[26:29] to do a pass on it so why would why
[26:34] would it not affect what Mike would one
[26:37] why would we why would a remove helmet
[26:40] not just work for every helmet across
[26:42] the board is it because
[26:43] the animations because different sizes
[26:47] of the helmets and basically and you
[26:49] know when we actually take the helmet
[26:50] off we're I think we're moving it to the
[26:52] hip
[26:53] you know and carrying it around so
[26:54] there's there's a lot of there were some
[26:58] just some things that we needed to
[27:00] resolve and make sure that's you know
[27:02] the bubble for the helmet and everything
[27:03] like that worked it's something that
[27:06] they're actively working on right now it
[27:08] just won't be there for 3:9 because we
[27:11] don't want it to just hit a button in
[27:12] the helmet just disappears
[27:15] correct okay we've heard very briefly
[27:20] about volatile or perishable cargo it
[27:24] was mentioned in the rodent roundup
[27:25] we've mentioned it on SEO a couple times
[27:27] what is it so what we have working right
[27:34] now for vaults of cargo is based off of
[27:38] the prospector and the mole is so when
[27:44] you're when you're mining and then let's
[27:47] say your ship gets JA sold or or based
[27:52] off of the what you mind you know
[27:55] there's a time associated with it it
[27:59] will basically become volatile and so it
[28:02] can destroy your ship or for you to have
[28:05] to jettison it so we have it working for
[28:08] the prospector in the mall because the
[28:13] way that the prospector mole is kind of
[28:15] they have their own internal cargo grids
[28:17] so I don't want people thinking that's
[28:19] it will work with the cargo that you
[28:22] carry around by hand right now so that's
[28:26] kind of the next step that we want to do
[28:28] but and we need I cash first before we
[28:32] do that then we can do it before the
[28:34] hands and and you know for the other
[28:36] cargo boxes but for 3:9 when you're
[28:41] mining it's you'll we've added a button
[28:44] on the dashboard so basically when
[28:48] you're flying around it will start
[28:51] blinking you know and then when it
[28:54] becomes too hot you know or or basically
[28:56] two jaw
[28:57] then it will it'll blow up and so you
[29:01] need to jettison it before before it
[29:04] does it try anything of why do you want
[29:13] cargo to explode my ship to blow up well
[29:18] it's it's what we want to be able to do
[29:21] is is have different things different
[29:24] types of cargo so you know for example
[29:28] maybe you've got a do data or you know
[29:32] and and with the data it's encrypted
[29:34] somehow or maybe it will you know almost
[29:38] like Mission Impossible itself and start
[29:40] smoking or in the case that we have
[29:44] quantanium you know that's supposed to
[29:47] be a volatile fuel but again it's risk
[29:51] reward I mean that's really what it
[29:53] comes down to is we want to if we just
[29:56] want the player to have that those kind
[30:00] of you know if you want to go for this
[30:03] then it's it's high money but it's gonna
[30:07] be high risk as well quantanium it's
[30:11] quite a dilemma
[30:15] from the live chat lots of tests were
[30:18] run last night after the idris battle
[30:20] was shown in ISE utilizing an EMP is
[30:23] currently balanced will likely make the
[30:26] idris an easy dinner does the design
[30:28] team know this we want to challenge i
[30:32] design team does notice basically we're
[30:35] still we're still going through and ends
[30:39] trying to play it right now right now we
[30:42] have a crash where the QA department
[30:46] will be able to get up to the idris
[30:48] mission or the idris aspect and then
[30:50] that crashes the game so we haven't been
[30:53] able to do a lot of internal cycles on
[30:55] it yet simple but i can guarantee you
[30:58] that those those balance issues are
[31:00] going to come up internally and then
[31:02] obviously once we release it out to you
[31:05] you then it will it will definitely come
[31:08] up that way
[31:10] yeah I'm aware I'm aware of the ages but
[31:12] we almost had a we almost had this Simon
[31:14] go out yesterday with no footage
[31:15] whatsoever
[31:16] because we we kept crashing every time
[31:18] so happens there's work and they don't
[31:20] work and they work again and we were on
[31:23] we were on that down slope like up until
[31:26] late Wednesday so yeah yeah we're still
[31:32] having issues with it and the meeting
[31:34] and I got out of just right right before
[31:35] this and we're stopping issues with it
[31:38] so let's see how is PvP bounty hunting
[31:42] going to be different in 3.9 I don't
[31:49] think it is and I think they're
[31:52] referring to there's there's a card on
[31:53] the public road map about about a PvP
[31:56] bounty and improvements I yeah I think
[31:58] it refers to the the st. like the synced
[32:00] assassination missions it's like that
[32:03] there's new there's new well those are
[32:06] PvE though I don't know what it means
[32:08] for PvP I mean I mean the improvements
[32:13] are it's not a big sweeping change like
[32:17] we'd bow knee the way that we want it to
[32:19] go like there's an there's a fair amount
[32:21] of work there you know to because right
[32:25] now you don't hunt you know there's
[32:28] there's you just show up to a place and
[32:31] it's like okay they're there they are
[32:32] like there's no hunting like I'm I want
[32:36] to I want to feel like you know the
[32:39] Mandalorian or Bubba felt like I want to
[32:41] go hunting you know he said affecting my
[32:45] presence if I the card I think says its
[32:51] it's like the allows players to to hunt
[32:55] other players with bounties on their
[32:56] heads like so it's like you can still
[32:58] hunt when you have a bounty on their
[33:00] right I'm not sure we don't look at I
[33:01] made a note here I'm going to follow up
[33:03] afterwards and we'll see if we can't get
[33:05] some information on that will the
[33:09] temperature be different on day or night
[33:11] side of the moons and planets and how
[33:13] will temperature change when spaceship
[33:15] doors are open if the environmental and
[33:17] spaceships temperatures are very
[33:18] different okay so first things first
[33:23] right now it will not be different
[33:25] that's something that we're working on
[33:27] regarding the time of day change the
[33:30] other aspects will be based off the room
[33:32] system so when the spaceship it opens
[33:36] assuming there's not a bulkhead or
[33:38] airlock associated with it then it will
[33:42] be vented and it will take on the larger
[33:44] you know the larger room which is
[33:47] basically the planet and so therefore
[33:50] your temperature will drop instantly but
[33:54] those are being worked on now so they're
[33:57] not in three nine just as a file because
[34:02] we've got a message somebody's looking
[34:04] up the PvP stuff just remember that
[34:06] there's a lot of people that work on the
[34:08] public road map everybody not just Todd
[34:10] something that so - not everybody can
[34:15] know everything about every idea know it
[34:18] again we've got three major pillar
[34:23] directors you know or I don't want sig
[34:27] major we have three pillar directors to
[34:29] have multiple teams underneath them Tony
[34:31] Shan myself you know and then from there
[34:34] there's you know Ian Scott's you know
[34:36] locations nick has us 42 like there's so
[34:41] much going on in this game that Hardin
[34:43] sometimes it's it's hard to keep
[34:44] everything you know sorry in in the head
[34:49] we got people on Himmel so we'll see
[34:50] what it is will it be possible to repair
[34:54] refuel or restock ships that are
[34:56] currently stored the pad based system
[34:59] has been fairly unreliable as far back
[35:01] as 3.0 it'll still be pad based for
[35:05] right now like eventually that's the
[35:07] goal the goal is you know for you to
[35:10] land and there to be a technician there
[35:12] and then you say okay I want these
[35:14] things done and then you go and do
[35:16] whatever you need to do and and that's
[35:18] that gets fixed in the backgrounds right
[35:21] now we know the issues that are
[35:24] happening you know obviously with
[35:26] al-azhar and even with some of our other
[35:28] locations regarding landing so these it
[35:32] won't be store yet but it will
[35:35] it won't work yet
[35:37] I mean that's that's what it comes down
[35:39] to a new Babbage clothing looked great
[35:43] but it feels like new baby ins would be
[35:45] wearing Hawaiian shirts too starkly
[35:47] contrasts the weather outside they saw
[35:49] Wally's bar yesterday I see not a
[35:52] question just food for thought well
[35:54] you're gonna see more of new Babich next
[35:57] week on ISC
[35:58] Wally's Bar is just one particularly
[36:01] themed area don't
[36:03] it's amazing don't get me wrong but it
[36:06] is not what all of new Babich looks like
[36:09] looks like yeah but uh imagining this
[36:13] probably came from tyler witkin since it
[36:15] was a Hawaiian shirt thing I just
[36:16] assumed everyone in shirt related thing
[36:19] comes from since they continuously come
[36:22] are the player interaction system
[36:24] improvements on the roadmap significant
[36:26] or just minor updates and we're gonna
[36:29] when we're putting where we've got a
[36:31] segment in development privacy they're
[36:33] gonna see that we're gonna find out a
[36:35] lot more about what the I won't say what
[36:39] piss pit yeah I just said I wouldn't say
[36:43] that night said it sorry I blinked out
[36:46] for a second um how significant would
[36:49] you say the player interaction system
[36:51] improvements are significant I mean
[36:54] we're changing so it it really is just
[36:58] the managing of stuff and ends the the
[37:01] goal is to basically get rid of the P
[37:04] the PMA you know so the ideas the player
[37:08] can go in select the weapons select kind
[37:12] of hotkeys associated with those weapons
[37:13] and do all of that in the player
[37:15] interaction system and go through and
[37:20] and you know I feel it's it's a game
[37:24] changer
[37:25] just because of because the the time
[37:29] that you spend going back and forth
[37:30] between the VMA and ourside the PMA and
[37:33] ends before like I think this is a good
[37:38] very very good change and we've got
[37:41] three more episodes of I see this
[37:43] quarter it's not it's not the next
[37:46] episode but it's one of the two after
[37:48] that well you'll get to see how about
[37:50] the player interactions
[37:51] and the it's like that you know it let
[37:53] me I just it's really cool-looking it's
[37:56] really impressive if I if I'm allowed to
[37:58] have an opinion and I thought oh yeah
[38:03] it's a I'm I'm I've been very happy with
[38:05] it and I think the team has done a great
[38:07] job will consuming food or water take
[38:11] time or will it be an instant action
[38:13] like using a med pin it's okay so
[38:21] consuming takes as long as the animation
[38:23] does now what we've talked about in the
[38:26] past right now a burger would be eaten
[38:29] in one bite
[38:30] obviously we know that's not the case in
[38:32] the future the idea would be that you
[38:34] take three or four bites out of it and
[38:36] then it's consumed now the one of the
[38:40] things that we do have is it depends on
[38:44] the size of the burger so one of the
[38:48] things that we do have right now is the
[38:51] food I basically has kind of a
[38:54] consumption over time
[38:57] sorry absorption over time it's the same
[39:01] thing with all go with drinks so
[39:04] basically there's a certain time that it
[39:08] takes to break down and and kind of move
[39:10] through your your system now the what
[39:13] you'll see is is basically you've been
[39:15] sustained and it takes you up to that
[39:18] level and kind of resets the clock and
[39:20] then you know as it's as it's being
[39:23] absorbed you know that that bar is still
[39:26] it hasn't been reset and started
[39:29] counting down it just stays there until
[39:31] the absorption has stopped then the bar
[39:34] starts counting down if I remember
[39:36] correctly it's hard we Chris has been
[39:41] known to say for a while you take things
[39:43] to the point of realism then you bring
[39:44] them back to the point of fun it's it's
[39:48] the conversation is now is about how off
[39:51] how long it should take to eat a burger
[39:52] and it's like you know we can go for
[39:54] that fidelity where you're forced to
[39:56] stop gameplay for a good five minutes
[39:58] while you eat a burger but that might
[40:00] not be the most fun experience so Curtis
[40:03] thank you take it to the point of
[40:04] realism
[40:05] you bring it back you're going to fun
[40:07] let's see can you tell us more about the
[40:10] surrender mechanic that was mentioned in
[40:13] an IC segment earlier the ability to
[40:17] there was the the prison system instead
[40:19] of instead of being forced to be killed
[40:21] you can now surrender actually I don't
[40:27] have very many eyes on this one so my my
[40:32] gut feeling is right now I think it's I
[40:35] almost think it's out right now until we
[40:38] do a little bit more improvement on the
[40:40] prison system because I think I think
[40:42] you just do get shot and you will get
[40:45] you know you'll only go to prison as
[40:47] long as it's basically a security force
[40:50] that's that's killing you so and then
[40:53] once that security forces killed you
[40:55] then you know and then you're stuck in
[40:57] prison for X amount of time buts the
[41:01] surrender mechanic as far as I know I
[41:04] don't remember seeing it working with
[41:07] the prison system just you know but I
[41:09] could be wrong on that one since it's
[41:12] not under my pillar let's see we've got
[41:17] well radiation hazards be a part of the
[41:20] upcoming actor status system it will be
[41:24] it but not four three nine for the for
[41:29] the radiation there's I think that's
[41:32] part of like version one or version to
[41:34] what we consider actor status but it's
[41:38] basically we just need a little bit more
[41:40] time on that one and we're building it
[41:42] or we're building it up and making sure
[41:45] that's it's not only radiation but it's
[41:47] other you know hazards hazards that's
[41:51] will affect you whether that be fire or
[41:54] you know smoke or anything else that
[41:57] could happen you know either on your
[42:00] ship or you know strange planet weapon
[42:05] attachment you eyes aren't some it's I
[42:07] don't think they're currently on the
[42:09] roadmap but they are coming in three
[42:11] point nine we're gonna see it on ISC
[42:14] soon with the interaction system and
[42:16] then that same segment
[42:18] but do you want to give folks an early
[42:20] description of what players can expect
[42:22] for the weapon attachment UI yeah I mean
[42:25] basically we've got just certain
[42:28] attachments that you can add and it'll
[42:30] just bring up the weapon in front of
[42:31] your face and then at that point in time
[42:33] you can choose alright do I change outs
[42:35] you know the sights or do I add
[42:37] something on the barrel or or under
[42:39] barrel or you know so it really is just
[42:42] kind of we want to make sure that we're
[42:46] showing off the weapon
[42:47] as well as you know the player gets that
[42:49] tactile experience of switching out yeah
[42:52] it's when I was talking about when it
[42:55] looked whoo I realized that I was
[42:57] actually talking about the weapon
[42:58] attachment you I think not tha this that
[42:59] doesn't look cool with the radio and
[43:01] stuff like that but pulling up the
[43:03] weapon and then watching where the
[43:05] attachments would go and in swapping out
[43:07] is really cool it's I don't know it's
[43:11] just I sometimes I get to be a fan and I
[43:14] think this is cool there's a reason for
[43:17] the end of that is receiving money the
[43:19] end of the quarter because I think it's
[43:20] really cool yeah well in I think the
[43:24] weapon team has done a fantastic job
[43:26] over the years building in a lot of
[43:28] detail and a lot of things that you know
[43:35] the player a lot of times just won't
[43:36] experience when when it's only on you
[43:38] know kind of this side of the screen but
[43:40] obviously now you can actually look at
[43:42] it and you can really inspect it and I
[43:44] mean you can inspect it in stores before
[43:46] but now you can actually show it off or
[43:48] you know do it outside of stores what
[43:55] about showers and toilets at some point
[43:58] the digested food has to come out again
[44:01] it did bent did bender s this one I
[44:03] don't know but it got over a hundred
[44:04] votes so it made it made the thread you
[44:08] might you might have voted on that one
[44:10] this I it's not for thirty-nine we know
[44:14] that we know we have to do it it's
[44:16] something that we've talked about with
[44:18] the actor status and it's built into the
[44:19] actor status I'll still push for like
[44:23] red outs you know if you're too
[44:25] constipated or something like that then
[44:28] you know or blackouts if you're if you
[44:30] smell bad from not taking a shower cause
[44:32] I think so
[44:33] or other players blackout kind of thing
[44:36] so poor hygiene becomes chemical
[44:39] weaponry yeah basically send your
[44:43] letters to todd papy care Frankfurt
[44:49] let's see trading in three eight two is
[44:54] difficult because stations don't offer
[44:56] enough for character caterpillar players
[44:59] we miss we miss big high-risk trading
[45:02] routes since the few patches
[45:04] please give trading a little love that's
[45:06] not a question oh just requested I guess
[45:09] yeah I mean we can go in and evaluate it
[45:12] all again whoever sticky notes for this
[45:15] meeting then I'll speak to its data guys
[45:18] and in in austen about it okay
[45:23] let's see why was prison gameplay
[45:28] prioritized over other missing game
[45:30] mechanics I basically to actually make
[45:36] piracy more legit
[45:39] you know because right now if you if you
[45:42] look at piracy mission rewards versus
[45:47] kind of good behavior mission rewards
[45:50] like in there was no no disincentive to
[45:55] you know to not do you know not be a
[45:59] good boy or a good girl kind of thing so
[46:02] this is a way for us to to really kind
[46:06] of focus on that and really show that
[46:08] there is a separation between right and
[46:10] wrong and then obviously this feeds into
[46:13] other careers you know like bounty
[46:15] hunting
[46:15] piracy saboteur smuggling and so and so
[46:19] forth so like this is a way for us to to
[46:23] kind of really start enforcing right and
[46:27] wrong in in the system yeah we talked to
[46:31] we talked a bit with the press in the
[46:33] team when we did the segment earlier
[46:34] this this quarter and it's it's also
[46:37] prisons seems like
[46:40] it's a punishment seems like it's a bad
[46:42] thing for for the the bat the bad
[46:45] players but what it is is it's it's
[46:47] actually you have to have the risk
[46:49] before we can provide greater rewards
[46:51] it's I mean there's a way to look at
[46:54] prisons where we at we when we once we
[46:58] add the risk we have to have the risk of
[47:00] that week we can then create greater
[47:01] rewards for the court for that lifestyle
[47:04] so it's it's actually one of those net
[47:06] positive things for the people that want
[47:08] to play on the well and I guess the if
[47:14] if you look at it like this does help
[47:17] like I said anything that really had
[47:19] kind of is on two sides of law whether
[47:22] that be a law enforcement law
[47:24] enforcement bounty hunting assassination
[47:26] you know piracy like it it helps those
[47:32] career paths so now you know the end
[47:36] there's gameplay associated with it
[47:38] there so it's not just you know like
[47:40] other games okay you go to jail you pay
[47:42] the fine and instantly respond and and
[47:45] now you don't have you know anybody
[47:47] looking after you like there's there's
[47:50] time associated with that and then from
[47:52] there that creates new unique gameplay
[47:54] of you know do I want to try to do I
[47:57] want to try to break out of jail and do
[47:59] I want to or do I want to serve my time
[48:01] so that's kind of the way that we're
[48:04] we're thinking about it and that we've
[48:07] we view this as a foundational elements
[48:09] in order to actually build upon you know
[48:13] build those careers upon and I think
[48:16] there's also a big a big drive for for
[48:21] something like a jump town 2.0 I like I
[48:23] can another big high-risk high-reward
[48:25] PvP area like that well that's actually
[48:31] it I got a we I have to let you go
[48:33] you've got another meeting that you've
[48:34] got that I got to be able to get you to
[48:36] the last question we have is will there
[48:39] be any mining missions as soon as I said
[48:42] like collect five tons of copper so like
[48:45] that about missions specifically for
[48:47] mining as as the prospector is out and
[48:50] the ball is out and more personal mind
[48:52] tools are out yeah
[48:54] no I mean the the thing is that's with
[48:57] the money missions obviously we've got
[48:59] particularly that we need to you know
[49:02] build missions for but right now I think
[49:07] the way that Tony and CRC mining is
[49:11] career you know in missions is a little
[49:14] bit different than what I see mining
[49:16] missions and so like we need to get on
[49:19] the same page first before we actually
[49:21] implement it and so I want to be able to
[49:24] sit there and talk about it with them
[49:26] and and explore the pros and cons of
[49:28] each and then we go from there all right
[49:31] that's it I know you gotta get to kick
[49:33] off me
[49:33] so Todd thank you so much for taking the
[49:36] time to be here with this closure on
[49:38] Friday
[49:40] folks if you haven't check out
[49:41] yesterday's inside star citizen lots of
[49:44] good stuff about the cooperative play
[49:46] and multiplayer missions coming online
[49:47] at three point eight including our look
[49:49] at the first NPC controlled idris that's
[49:52] looking to make make life and the
[49:55] persistent universe just a little bit
[49:56] tougher todd papy
[49:59] i'm jared huckaby we'll see you next
[50:00] week everybody take care
[50:08] you

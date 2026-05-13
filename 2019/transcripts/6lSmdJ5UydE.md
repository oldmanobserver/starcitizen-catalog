# Star Citizen Live: All Things UI

**Video:** https://www.youtube.com/watch?v=6lSmdJ5UydE
**Date:** 2019-07-19
**Duration:** 1:05:06

## Transcript

[00:08] [Music]
[00:10] hi everybody welcome to star citizen
[00:14] live all about the UI I'm your host
[00:17] Jared Huckaby and joining us on the show
[00:19] this week UI people people from UI UI
[00:26] kinda had a joke about UI and I just
[00:28] lost it bad start bad start
[00:31] Simon Zane welcome to the show hey
[00:35] Jarrod are you good and now we haven't
[00:38] had we haven't had a a UI feature on for
[00:40] some time so let's take a let's take a
[00:42] few moments at the beginning the show
[00:43] introduce ourselves
[00:45] tell us who you are and what you do for
[00:46] star citizen will start with Zane Zane
[00:48] who are you and what do you do for star
[00:50] citizen so I'm the principal UI core
[00:54] tech developer here
[00:56] CAG what I work on is the core tech for
[01:01] a UI so the kind of the fundamental
[01:04] system that drives the display of user
[01:06] interfaces in the game previously I was
[01:10] the UI director so I wanted to kind of
[01:15] get more neck deep into the code and the
[01:16] engineering and and to advance the tech
[01:20] much faster to kind of drive our
[01:23] development so that's been working out
[01:26] really good Simon here is is you can
[01:30] well you can introduce yourself yeah so
[01:32] so I I'm the UI director now
[01:36] but that means mostly I spend my time
[01:38] organizing things generally making sure
[01:41] the UI on our various teams is kind of
[01:43] heading the same direction and making
[01:46] sure it's done on time that sort of
[01:47] stuff when I get time which is not a lot
[01:49] I do a bit of UI design so I've been
[01:51] been looking into the the FPS hood the
[01:55] visor can talk about later so it's kind
[01:57] of fun yeah it's it's hard when you when
[01:59] you get when you reach a directors level
[02:02] it's a lot of times it's more big
[02:04] picture stuff more oversight stuff I was
[02:07] like I was actually excited when I heard
[02:09] saying that you were jumping back into
[02:11] the fray and really get
[02:12] your your hands dirty with the UI stuff
[02:14] again UI is a I'm often quoted as saying
[02:18] UI is a department that affects every
[02:20] single aspect of star citizen like I
[02:23] don't think there's an aspect of start
[02:24] something that doesn't require some
[02:26] assistance or implementation from UI so
[02:30] it's a it's a super important department
[02:32] soon super important discipline for game
[02:35] design and I'm really excited that
[02:37] you're here and that you're both here
[02:39] and we can answer some questions we can
[02:40] talk about this so thank you for taking
[02:42] the time out of your week now this is a
[02:44] Friday at the end of your week so thank
[02:46] you for being here and let's just get
[02:48] right into the questions here we take
[02:51] questions from a number of sources on
[02:53] star citizen life in case this is your
[02:54] first show you can submit your questions
[02:57] in either the twitch chat or in spectrum
[02:59] chat by posting your question with the
[03:01] word question in capital letters
[03:02] surrounded by brackets that'll help our
[03:04] team you'll pull it out from the rest of
[03:06] the conversation we also put up a thread
[03:08] earlier this week and started collecting
[03:10] questions throughout the week for folks
[03:11] who maybe couldn't be here with us live
[03:13] or folks we just wanted to vote up which
[03:15] questions they wanted to see answered
[03:17] most so we ran so as always we're going
[03:19] to start with the what we call the
[03:21] pregame questions ones that came in
[03:23] throughout the week on spectrum that
[03:24] were voted up we're out the bat what can
[03:28] you tell us about plans to let users
[03:30] customize their various HUD elements we
[03:32] have been hearing this for a long time
[03:34] here things like prioritizing features
[03:37] and a resizing elements or changing the
[03:39] color stuff like that where our thoughts
[03:42] on this so I guess so
[03:46] I can start this one over in the deep
[03:47] end right off the bat so it's an
[03:49] interesting question really I suppose
[03:52] the thing that we would ask first is why
[03:55] do people want to customize things I get
[03:59] the impression in some cases just
[04:00] because the current UI is which needs a
[04:03] little bit of updating is not quite
[04:04] working for people so I think the first
[04:07] step for us would be to find out those
[04:09] issues people don't want well the way
[04:13] it's set up that people don't like at
[04:14] the moment and that's the first thing
[04:15] for us to address so relating to that
[04:20] we're doing a lot of rework on the the
[04:22] hood and the MFDs and the FPS visor
[04:26] moment so a lot of those kind of
[04:28] questions it's great to it's great to
[04:30] bring up the reasoning now and then we
[04:32] can start to incorporate that into into
[04:34] these things as we move forward yeah I
[04:36] know a lot of the lot of discussion
[04:38] about this for a while has been either
[04:41] addressing issues like the glare though
[04:43] they want to change the color or
[04:44] something because whatever they're
[04:46] flying against matches the color and
[04:48] it's gonna be difficult to read
[04:49] sometimes people just like different
[04:52] colors like you know people just prefer
[04:54] it a different a different orientation
[04:56] or sometimes it's an actual visual
[04:59] acuity thing like some people just have
[05:01] difficulty seeing you know certain
[05:03] colors on the spectrum and if you're if
[05:05] you happen to be you know we're if you
[05:07] have to have that weakness right there
[05:08] where the UI is I can be difficult to
[05:10] read so I know folks have been asking
[05:12] for the ability to adjust certain
[05:15] elements that UI for some time so yeah
[05:17] sure but I know that's something we're
[05:19] definitely considering something we
[05:20] we've talked about for a while and but
[05:23] like you said it's really important to
[05:24] get the building blocks and to make it
[05:26] as functional as possible before we
[05:28] start introducing customizable elements
[05:30] if we ever do well I mean the thing with
[05:32] building blocks and whoa Billy basically
[05:35] building boxes what it's like our
[05:38] internal term for the UI tech so the
[05:40] tool that we use to develop you is a new
[05:44] the new one not the old one so like a
[05:48] lot of it is allowing for like flexible
[05:52] layouts or being able to easily reflow
[05:56] elements so they can rearrange
[05:58] themselves very easily relative to each
[06:00] other and it opens up so much more
[06:03] because we can make the UI so much more
[06:05] dynamic and responsive and flexible
[06:08] whereas before it's just kind of you
[06:10] know if we were to think about like
[06:12] maybe layout customization or you know
[06:14] if we had like a grid system something
[06:17] he can kind of plug into and rearrange
[06:19] on then it makes it so much easier than
[06:22] before because everything before was
[06:24] just hardwired it was very static in
[06:26] nature but you know if we have a fully
[06:29] data-driven and flexible system you know
[06:32] it kind of opens that up now that we can
[06:33] we can start asking like what makes
[06:36] sense for customization like previously
[06:39] is just like
[06:39] yeah we could we could do colors but
[06:41] like it'd be very complicated to do you
[06:43] know like resizing and things like that
[06:46] when you have static a lot you know very
[06:48] very statically authored UI so
[06:53] implementation wise it's it's like much
[06:56] easier now so it's just basically like
[06:59] what are the kind of fundamental issues
[07:01] like you know we mentioned things about
[07:04] like you know the bright like you know
[07:08] how readable things are against you know
[07:10] bright backgrounds and you know you want
[07:12] to change colors but you know well kind
[07:14] of a lute to this later on I think but
[07:16] you know there might be a better
[07:18] solution for that that's that's you know
[07:20] not goes beyond you I yeah yeah you hit
[07:24] on a point that Simon made that I think
[07:25] is worth reiterating right now it's
[07:27] while we're in development you know as
[07:30] we are we want to focus our work on
[07:32] making the best default standard UI
[07:35] possible and that can only be done if
[07:38] everybody's using the same thing so that
[07:39] we can see all the feedback so that we
[07:41] see all the you know how it's working if
[07:44] you were to introduce customization to
[07:46] early in the process then it skewers the
[07:49] feedback because we don't know what this
[07:51] person is using versus what this person
[07:52] is using versus what this person is
[07:54] using so it's while you're developing
[07:55] it's really important everybody has the
[07:57] same thing so that we can get proper
[08:00] feedback and we can iterate the way that
[08:02] you need to to make the best default
[08:04] standard UI we can yep that's that's
[08:07] very well put and definitely yeah wait
[08:11] so but if anyone does have suggestions
[08:14] like we really need to have this thing
[08:16] color changeable because of whatever
[08:18] reasons then do that as knowing we will
[08:20] will read the comments and we'll take
[08:22] that into account when we get to it I
[08:23] mean I assume we'll have like easily
[08:27] selectable colorblind options as well
[08:29] well yeah you know just change the color
[08:32] yeah things like we can't do all the
[08:35] things all I wanted son fortunately
[08:37] that's true
[08:37] all right so next question says
[08:40] currently UI elements like icons of
[08:42] station turrets or mission points can be
[08:44] very invasive
[08:45] sometimes filling the screen I've seen
[08:46] this I've come out of quantum jump and
[08:48] just my entire screen is littered with
[08:50] every single turn
[08:51] and everything that's around what can be
[08:53] done to make this more user friendly or
[08:56] diegetic so do I take this one or shall
[09:00] I
[09:02] so this is one thing that I'm really
[09:05] interested in is looking at I'm not sure
[09:06] how soon we're going to get to it but
[09:08] what we would like to have is some kind
[09:10] of intelligent system so there's
[09:13] obviously loads of stuff that we could
[09:15] show all over the screen potentially so
[09:17] points of interest mission objective
[09:19] markers chips and so on what we need to
[09:22] have is a kind of an intelligent system
[09:23] that works on how far away things are
[09:26] and also a priority and of a priority
[09:29] that the design is set and then somehow
[09:30] works out which of those things to show
[09:32] and how many of them to show so it kind
[09:35] of picks and chooses from this massive
[09:36] selection and shows you the most
[09:38] important things from those so that's
[09:40] that would be the starting point to
[09:42] addressing this I think ok next question
[09:45] this is kind of a big picture one here
[09:47] as the universe becomes more complex
[09:50] more in different kinds of entities are
[09:52] vying for space on the HUD notifications
[09:55] Pio eyes
[09:56] QT destinations ship's mission markers
[09:59] how do you manage all this visual
[10:01] information and can anything be done to
[10:03] give playtoy well the second part is can
[10:05] we give players the ability to customize
[10:06] so so what can be done to manage all
[10:08] this information there the answered the
[10:10] last board yeah so going off of kind of
[10:15] riffing off the stuff that I talked
[10:16] about the UI tag before when we have
[10:19] easily flexible layouts and things like
[10:22] that we can start thinking about making
[10:23] things much more I'm smart about when
[10:25] they display and contextual about when
[10:27] they display so for instance you know
[10:30] you have this big no target you know
[10:32] this is the example that I think Chris
[10:34] gave previously but you had like there's
[10:36] no target big box that's on the screen
[10:39] all the time but you know if you don't
[10:41] have target know why not just you know
[10:44] not have that and when we when we apply
[10:48] that to you know maybe like the other
[10:49] feeds or you know the HUD it's like
[10:52] things can that you don't need can you
[10:55] know disappear out of view and reappear
[10:57] when they're needed so things can be
[10:59] much smarter about when they appear
[11:01] things can be a lot more contextual
[11:04] rather than just always being there all
[11:06] the time so I think one thing relating
[11:10] to this is I think as the games been
[11:12] built up over the years there's been a
[11:14] lot of things kind of added on top kind
[11:17] of little features out of here and there
[11:18] so now you want to take this step back
[11:20] and look at all the other stuff that we
[11:22] want to show and we're going to try and
[11:23] look at the best ways to arrange those
[11:24] on the screen as well so maybe we for
[11:26] example keep the chat in the bottom left
[11:28] have the objectives in the top right
[11:31] that kind of thing so so try and work
[11:33] out a layout for the screen that works
[11:36] and where things don't overlap and don't
[11:38] clutter each other so that's that's
[11:39] definitely something we're looking into
[11:40] here the chat is like the most obvious
[11:42] example because you have this constant
[11:45] overlap with the ship FFT and that's
[11:47] actually because it's on two different
[11:48] contexts and they don't know about each
[11:50] other's sizes so it's you know if when
[11:54] we actually revamp the whole thing we
[11:56] rethink like we're creating like we're
[11:59] looking at the MFDs right now and we're
[12:01] creating like this whole new system
[12:03] that's this is just like much more
[12:05] systemic and you know there's a grid
[12:06] system that where everything kind of
[12:08] fits in to each other and you know you
[12:09] can create different sizes of widgets so
[12:14] like the chat should you know you know
[12:16] you can have that like reflow with
[12:18] something depending on maybe how much
[12:19] you've customized your visor rather than
[12:22] just being statically placed all the
[12:23] time so it ties all of this ties into
[12:27] the functionality and the capability you
[12:30] would have in the new system yes and
[12:33] something we we're definitely aware of
[12:34] the the overlaps no like kind of thing
[12:36] and we definitely want to fix it yeah
[12:37] yeah it's a heck of a challenge and
[12:39] we'll get into it later a bit but having
[12:41] the the diegetic displays on the MFDs
[12:45] and then having the helmet displace you
[12:48] know you get into a ship you have it
[12:49] having both and building a system that
[12:51] can switch things out and realize okay
[12:53] when you've got this on the end if you
[12:55] don't need it on them on the helmet and
[12:57] vice versa and stuff yeah it's an
[13:00] interesting challenge ahead of you guys
[13:03] yeah I mean there's lips we're lucky you
[13:07] have the you know you have the helmet
[13:09] you I present even though you've got
[13:11] like a you know a sea of screens so once
[13:15] we can make that you know enable the
[13:18] ability
[13:18] functionality to actually cast things
[13:21] your visor than you know the things that
[13:24] even you know automatically just become
[13:25] much cleaner
[13:26] we want that age what we want to do that
[13:30] to pull you know to take things and
[13:32] terror specific parts of the UI out and
[13:35] put it on your visor because they be
[13:37] it's more useful and you want that more
[13:38] kind of immediately in your view but
[13:42] it's building up that function I was
[13:43] getting kind of the systemic stuff and
[13:45] kind of a foundation define first for
[13:48] the MFDs how things display when should
[13:51] they display you know what goes where
[13:53] and and then building that into the
[13:58] overall design so that's something like
[14:00] we're spending a lot of time now working
[14:02] on as the tech is being developed
[14:05] alongside that in parallel yeah one of
[14:08] the things we're doing because I guess
[14:10] the people at home don't really see it
[14:11] very much but we're kind of building the
[14:12] tools to help us as developers make
[14:15] really good UI and then once that's done
[14:17] then we start putting the good UI in the
[14:19] game so everyone else can see it and use
[14:20] it and give us feedback in that kind of
[14:22] thing well we're gonna work on the
[14:24] people at home seeing that stuff that's
[14:25] next quarter of ISC we're gonna get
[14:28] we're in exam on maybe something else
[14:30] and get a couple more UI segments in
[14:32] there so people can better see and
[14:34] understand the work that your team has
[14:35] been doing from the live chat got a
[14:38] question for you
[14:39] message spam that we're receiving the
[14:42] message spam that keeps popping up on
[14:44] the UI is that a bug or a design feature
[14:48] well I think it's it's kind of a legacy
[14:54] thing from having so many features being
[14:55] out to the game and they're all kind of
[14:57] competing for attention and the way the
[15:00] current UI is it's not really well have
[15:03] its scale so this is one of the things
[15:06] we're we're planning on investigating
[15:09] the the visor to display generally and
[15:11] part of that investigation will be what
[15:13] do we do to this messaging messaging
[15:14] system to make it work for people so we
[15:17] can do things like for example we can
[15:20] give the messages priority so if
[15:22] something really important comes up that
[15:23] kind of overrides the other stuff that's
[15:25] there we could give things timers so
[15:27] they stay on for a set time and
[15:29] potentially just not show more than a
[15:32] sir
[15:32] number of messages in the same amount of
[15:34] time so there's plenty of little tools
[15:35] we can we can apply to that to make it
[15:37] work better yeah I think I think it's
[15:39] mainly just that we had that
[15:41] notification which in the center there
[15:44] and as more features got added on over
[15:46] time especially the mission stuff the
[15:48] new all the new mission stuff that kind
[15:49] of came in I kind of latched on to that
[15:51] and you know now it's spamming like 100
[15:53] missions so I mean before is just yeah
[15:57] it had a few notifications but we need
[16:01] to kind of take that in account and have
[16:04] a system that's much smarter about what
[16:06] notifications should display there
[16:08] versus you know maybe the missions
[16:10] probably would be better served by you
[16:12] know just like a pulsing icon with a
[16:14] number on it
[16:14] you know indicating the number of new
[16:17] missions that you haven't read yet yep
[16:19] you know things like you you know when
[16:22] you get a like a new email and your
[16:23] inbox says like one or this tears three
[16:26] black impulse on each new mission that
[16:28] comes in rather than just like boom all
[16:31] you know this this new mission is now
[16:33] available it's like taking up and
[16:34] present your screen ya know something
[16:37] that's much smarter more elegant yeah
[16:39] another thing we're considering is kind
[16:41] of splitting it out a little bit so
[16:43] you've got your you kind of messages in
[16:45] one place and then we're probably quite
[16:47] it's quite like we'd have a sort of
[16:48] mission objective area that shows you
[16:50] your current mission related stuff and
[16:52] we might as well have it have a separate
[16:55] thing for the kind of keyboard keyboard
[16:57] shortcuts and that sort of thing you
[16:58] know there's little hints that pop up so
[16:59] kind of move those things to different
[17:00] parts of the screen so they're not kind
[17:02] of always competing for the same space
[17:05] speaking of competing for the same space
[17:07] we have a question from the live chat
[17:08] here that speaks to those of us who have
[17:10] non-standard resolution monitors what
[17:15] are we doing to support non 1080p
[17:17] resolutions star citizens many star
[17:20] systems are tend to be on the cutting
[17:22] edge of technology and have these 16 the
[17:26] 21 by 9 monitors or 32 by 9 monitors if
[17:30] you're my dad what are we doing to to
[17:33] help the UI play better on that you know
[17:36] every time I patch comes out sometimes
[17:38] the star map or the ship ID doesn't
[17:40] exactly work real well with the wider
[17:42] your screen resolutions
[17:45] that's a good one fishing oh yeah it's
[17:49] one thing is because again as I
[17:51] mentioned before is like all of our UI
[17:53] is authored in a very static manner so
[17:56] we you know we would be able to in our
[17:59] stuff that we have our flexible way out
[18:02] you know we're developing because we
[18:03] have flexible layouts those can you know
[18:06] we can have that resize potentially
[18:07] depending on your your your aspect ratio
[18:10] it monitor so you know everything
[18:14] remains visible on screen but the
[18:18] challenge also is that things are in in
[18:20] world as well so you know wall may be
[18:22] the mobi glass might be in world we
[18:24] could also you know take what is your
[18:26] current screen resolution and be able to
[18:29] scale that UI even though it is diegetic
[18:31] and it is in the world
[18:34] also maybe block a combination of that
[18:35] and feel the view changes although
[18:39] that's something we're still kind of
[18:41] looking into in terms of getting that
[18:44] all to work yeah it's hard when you put
[18:46] if prioritization is I mean cannot be it
[18:50] cannot be understated how important it
[18:52] is to prioritize the things that we work
[18:53] on does like we said before you can't
[18:55] work on all the things all at once
[18:57] and those widescreen monitors while
[18:59] there's certainly cool so like that they
[19:01] are generally edge cases in the overall
[19:03] population of star citizen so oftentimes
[19:06] we have to prioritize the things that
[19:07] affect the most number of users first
[19:09] before we start going to the the edge
[19:11] cases but it I was gonna say that's
[19:14] something that effects that the dev
[19:16] teams here as well because everybody's
[19:18] working on these cool new features so
[19:19] every every quarter or every few weeks
[19:21] even we get people saying oh we've got
[19:23] this cool thing can you do the UI for it
[19:24] and we have to we have such a big list
[19:26] to choose from we have to pick and
[19:27] choose the the most important ones are
[19:29] them kind of leave the rest a little bit
[19:31] later yeah I swear half of the game
[19:33] development is just prioritization it's
[19:36] probably a saying somewhere that they
[19:38] don't know about all right what's going
[19:40] on let's see are there any plans to add
[19:42] keyboard integration in and navigating
[19:44] the various interfaces we encounter in
[19:46] addition to just the mouse like even
[19:48] just you know hitting the arrow keys on
[19:50] the keyboard to go up and down in a UI
[19:52] thing something like that yeah so we
[19:56] want to be old we want to design
[19:59] our UI to be like it's it's much more
[20:02] keyboard friendly so you know right now
[20:05] you can only use the mouse and let's
[20:07] just kind of rubbish I think because
[20:09] having that keyboard access like whether
[20:12] it's an MSD or even even when you're
[20:14] you're like in a shopping console having
[20:17] the keyboard you know able to navigate
[20:19] with that makes things a lot easier
[20:22] because you know even even if you have a
[20:24] mouse and you're and you know you're
[20:26] interacting with it you have kind of
[20:28] those two controls at the same time and
[20:30] it's it's it can be much faster to go
[20:33] through different menus with the
[20:34] keyboard navigation but it also you know
[20:39] it allows us to kind of simplify a lot
[20:43] of stuff as well
[20:46] yeah I think we'd really like to be able
[20:49] to have any well people should be able
[20:52] to play the game with a variety of
[20:53] controllers so they can use the keyboard
[20:54] and mouse just the keyboard or joystick
[20:56] joystick or gamepad as well so I think
[20:59] of you in a way like Damon saying if
[21:01] your design for the most difficult thing
[21:03] which is potentially the gamepad if you
[21:05] make a UI design that works for that
[21:06] you're generally doing a kind of simple
[21:08] and elegant design anyway so it's quite
[21:10] often a good way to approach things
[21:11] generally and as we go through and
[21:15] redesign these various bits of the
[21:16] screens so for example we're doing the
[21:18] we're starting to look at the MFDs at
[21:20] the moment we've got this sort of
[21:21] high-level design at the moment and as
[21:23] those start to get implemented that's
[21:24] probably one of the first areas where we
[21:26] start to have this more kind of uniform
[21:28] control method that caters for everybody
[21:31] most people yeah like like for example
[21:34] with here you know you're you're you're
[21:36] managing you know the individual items
[21:38] and an MSD but like there can be maybe
[21:41] three or four different actions that are
[21:43] you know that you can or take upon that
[21:45] when you're when you're when you have it
[21:47] selected you can be much quicker about
[21:49] doing that with with like shortcuts
[21:52] rather than kind of hunting for the
[21:54] button with your mouse
[21:55] but of course anytime you're dealing
[21:57] with keyboard shortcuts you're you're
[21:59] fighting for real estate at that point
[22:01] with other features everybody's ever
[22:03] looked at I haven't been a sexual about
[22:05] what keys are available in what modes so
[22:07] if you're interacting with on FB you
[22:10] know potentially you might not need some
[22:12] stuff
[22:13] that's normally otherwise so I in a
[22:19] previous show this was a while ago
[22:22] we mentioned that we're moving away from
[22:23] the flash and Scaleform stuff for
[22:26] forehead UI in favor of a homegrown
[22:28] solution what can you tell us about that
[22:31] what progress have we made where we at
[22:33] so kind of already touched on a little
[22:36] bit on the previous questions but yeah
[22:38] we used flash and we're still using it
[22:43] now but we're trying to get away from it
[22:46] so we're kind of in this phase where
[22:48] we're transitioning away from using
[22:51] flash this kind of things this program
[22:55] where we're baking our assets and into a
[22:58] much more or fully data-driven system so
[23:01] and previously in flash
[23:04] you kind of set things up it's very
[23:06] static you don't see what it looks like
[23:09] in game until you actually export it and
[23:11] reload the editor so also the actual
[23:18] interface with the game code is much
[23:21] more simplified so before we actually
[23:23] had to write classes for each individual
[23:26] feel that you wanted to modify and you
[23:29] had to then create a class to manage
[23:33] that field from on the flash side so you
[23:36] kind of in a lot of cases we got had
[23:37] like artists filling with code which is
[23:40] just not ideal it's just rubbish so in
[23:44] our new system we have like the standard
[23:46] API where any game program in any team
[23:50] could actually expose some variables
[23:52] what we call bindings variables so the
[23:55] example is like an ammo counter on a
[23:58] weapon you know game program just kind
[24:01] of register a variable ammo count and
[24:04] then in our UI tech we can actually
[24:08] create a node and then specify the name
[24:12] of that variable or select from it from
[24:14] the list of available variables and then
[24:17] just plug it straight into a text field
[24:19] it's that easy and we see it why we
[24:21] update we updated live in the game in
[24:24] fact we can actually be another editor
[24:26] and you know be in-game you could be
[24:30] like a character and have health and
[24:32] everything and work on a UI so it's
[24:36] quite cool it's it's it's too much
[24:38] it's it's taking so it's it's still
[24:45] using scale form as a renderer so we
[24:51] boil we we kind of cut out the the
[24:54] process of actually authoring the UI in
[24:57] flash and the socks are our own tools
[24:59] and our own data-driven system but we
[25:02] still were still using scale form to to
[25:05] draw the B vectors so it's we boil it
[25:08] down to just the renderer so you know
[25:11] things like when we're when we're
[25:12] drawing borders we're drawing
[25:13] backgrounds we're drawing like curved
[25:15] corners and things like that and we're
[25:16] rendering text that's all this really
[25:19] does and everything else on top of that
[25:21] is our own code and our own system so at
[25:24] some point we will take that render and
[25:28] we will build our own so it's almost
[25:30] like an abstraction layer between our
[25:33] own tools and our own development and
[25:35] the renderer and then at some point we
[25:38] switch that out for just be completely
[25:40] rid of it since I started the company
[25:52] one thing that's really we're finding as
[25:55] well is because we kind of owned this
[25:57] tech and we've got a team working on it
[25:59] we can say I suppose just going back to
[26:02] flash flash was originally designed as
[26:04] an animation system for web stuff so if
[26:07] you wanted to make a make a bar on that
[26:09] you can do it it takes a little time but
[26:11] if someone goes yeah don't like that
[26:12] kind of bar key turn it into a dial
[26:14] that's gonna take loads of extra work
[26:16] whereas with the building block stuff we
[26:18] can just swap those over and also if so
[26:20] for example if the dial thing didn't
[26:22] exist yet we can just go to the programs
[26:23] and say we could really do with the dial
[26:25] widget
[26:25] once that's made then we can reuse that
[26:27] wherever we want to within the rest of
[26:29] the UI so because there's a lot of
[26:30] control this developers yeah and also
[26:32] because it's fully data-driven
[26:34] everything in the UI is programmatically
[26:36] drawn and driven from data
[26:40] so you know we don't we don't have to
[26:43] really worry as much about other artists
[26:46] stomping over each other's work because
[26:48] you can merge it in right right that's
[26:50] one change can be merged another change
[26:52] without having to fiddle with two in
[26:54] resolve conflicts over two binary files
[26:57] that's change and hunting for okay
[26:59] whatcha library symbol was change and
[27:01] it's just it's so much much much easier
[27:03] and so many different ways that maybe
[27:07] you know I can't list all of them right
[27:11] now all right let's uh let's get into
[27:14] some of the more in-game stuff the the
[27:18] experience that people are having with
[27:19] with the UI got a section here for
[27:21] personal UI and helmet stuff what are
[27:25] your thoughts on being able to nope
[27:30] where'd he did that one we covered that
[27:32] one already has there been any
[27:33] discussion about adding a compass ribbon
[27:36] giving us cardinal directions on planets
[27:38] or moons so well I suppose that's
[27:43] another of those is what's the reason
[27:45] for wanting it so it's yes but there are
[27:53] other ways to solve that potentially so
[27:54] it doesn't necessarily have to be a
[27:56] compass widget one thing we're looking
[27:58] into you probably saw it on one of the
[28:00] earlier videos you know and we showed
[28:02] the area maps this interior map I think
[28:05] we had it on there we had a little
[28:06] mock-up of a personal radar that kind of
[28:09] shows you like a mini map by essentially
[28:12] something like that could show you you
[28:14] direction for example so having a little
[28:18] compass is not necessarily the only
[28:19] solution but if when as we revise the
[28:22] head the visor stuff which were we're
[28:24] starting at the moment then if it seems
[28:26] like that's a compass for example is
[28:28] really necessary then we'd certainly
[28:29] consider that an investigator yeah it's
[28:32] probably not out of the questions just
[28:33] you know you also have to take into
[28:35] account that oops planets are
[28:37] procedurally generated and you kind of
[28:39] have to have a way to define what's
[28:41] north west east south exactly how to
[28:44] create polls so we have to create polls
[28:45] for the planet you know simulate
[28:47] magnetic poles is a word and then you
[28:49] know be able to position you yeah and
[28:52] you can solve some of the navigate
[28:54] and problems with things like if we have
[28:56] some kind of sat-nav like system in
[28:57] there which I know there were some
[28:59] questions about in the in the chat
[29:00] something like that could also solve the
[29:03] problem in a different way
[29:04] so this yeah it the Cummins ribbon is
[29:07] more than just a UI question because
[29:08] again you can't just programming you I
[29:10] think and have a work that there's
[29:12] there's system design that has to go
[29:13] into it in order to build a build a
[29:16] relationship on that planet that lets
[29:18] you lock to it and then of course they'd
[29:20] have to be different ones for every
[29:21] single planet moon and it would have to
[29:23] know when you're transferring from one
[29:24] to another so you don't want to be on
[29:27] yellow and have it be pointing you
[29:28] towards north fun Hurston yeah that's a
[29:32] lot of these educators make UI
[29:34] complicated sometimes we think we've got
[29:36] something really easy to do and then you
[29:38] know there's these five things that we
[29:39] hadn't thought about there are a lot of
[29:42] things that sometimes seem like they're
[29:43] a UI issue and it's not it can be it can
[29:45] be a system design issue then it's its
[29:48] UI in its basic in the most basic sense
[29:52] exposes information that's that's built
[29:55] by other system designers and game
[29:57] designers and stuff so if that system
[29:58] hasn't been developed there's no way for
[30:00] the UI team to expose it yeah
[30:04] is it possible to have a button to hide
[30:07] the HUD or a button to reactivate it
[30:10] when needed these are probably from
[30:12] screenshot folks who just want to you
[30:14] know clear everything from the screen
[30:15] and get this clean image they can we get
[30:18] a lot of developers asking us that how
[30:21] do you hide the HUD
[30:22] what's ivar do I need to invoke to hide
[30:25] it right so especially for you know the
[30:30] directors cam and and being able to
[30:33] record stuff that's yes we'll definitely
[30:35] be improving that system as we you know
[30:40] overhaul our UI so we'll take that and
[30:43] count the same thing that we do there
[30:46] will also help us developers also you
[30:50] know hide HUD for screenshots we take
[30:52] internally so like we can specify
[30:55] certain sections of the UI like whether
[30:59] that's the just the ship HUD but maybe
[31:01] not the visor right or I want to hide
[31:04] all UI but I don't want to hide the UI
[31:06] what that's just in
[31:07] environment that helps kind of bring it
[31:09] to life like background fluff screens so
[31:12] things like that we need to have like
[31:14] differentiated C VARs so we can kind of
[31:17] leverage that when we're building the
[31:20] system to maybe expose something to the
[31:24] players as well to kind of hide the UI
[31:26] like when you're trying to record court
[31:29] stuff and you don't want all these
[31:30] markers on your screen that's just that
[31:32] this is drawing the scene yeah there's
[31:34] one thing that relates today this which
[31:36] is for the general UI especially for the
[31:38] visor for the FPS so if we want to have
[31:40] a system where it only shows you the UI
[31:43] that's relevant at the time so for
[31:45] example if you put your weapon away you
[31:46] don't really need to see the weapon
[31:48] display on the corner of the screen or
[31:50] potentially you wouldn't show the health
[31:52] until you actually get injured that kind
[31:54] of thing so it that should as well help
[31:55] with this kind of perception of so
[31:58] cluttered screen there cluttered screen
[32:00] in a way so if we only show things when
[32:01] they're really needed then that's gonna
[32:02] also feel a bit nicer just for the
[32:04] day-to-day players as well yeah that
[32:06] ties into that kind of contextual could
[32:09] actually driven stuff that was talked
[32:11] about before is there any are there
[32:14] plans to allow a chat UI to be viewed
[32:18] when we're not wearing a helmet
[32:20] I think we've mentioned the possibility
[32:22] of a special like contact lens or
[32:24] something I just see it to see our chat
[32:28] when we're when we're in you know player
[32:30] clothes down on area 18 or something yes
[32:34] is the answer so yeah it's a it's a
[32:36] multiplayer game so you need to be able
[32:38] to see what your teammates are doing and
[32:40] talking to you about and so on so we
[32:42] definitely do have plans to have that
[32:43] visible pretty much all the time so if
[32:45] you if you got a helmet you just got
[32:47] your lens which is the state without the
[32:48] helmet in the ship third-person view as
[32:51] well potentially so yes we would like to
[32:55] have that in sometime soon actually
[32:59] actually actually touched on this a
[33:00] while back the next question is about
[33:02] that interior map that we showed a while
[33:05] back and you know the little like the
[33:08] mini map or the 3d map have we happened
[33:10] what progress have we made was that at
[33:12] this question is asking you really want
[33:15] it please it literally says I don't have
[33:16] a question I'm gonna read actually a
[33:18] couple years ago we were shown interior
[33:19] maps in the player heads years
[33:21] I don't think was ears but I don't have
[33:22] a question I really just want it please
[33:25] it's what the question says I think
[33:26] that's one you can answer yeah yeah I
[33:28] know I really want it to I mean I was
[33:31] one of the first things that we we
[33:32] started working on when I when I started
[33:33] started here and it's going to be a
[33:35] really cool addition so we kind of got a
[33:37] development version that's halfway there
[33:39] I suppose at the moment but we made a
[33:42] decision fairly recently that what we
[33:45] were going to do is focus on getting the
[33:46] shepherds and the the player the FPS
[33:49] hood sorted out first so as they're kind
[33:52] of more integral to the overall gameplay
[33:54] you want to get them right get them
[33:56] playing well and then we're going to go
[33:57] back to the area map stuff later on
[34:00] hopefully really soon it depends a bit
[34:02] on what else comes up but yeah we'd love
[34:05] to get that up and running and also
[34:07] that's going to tie into this well
[34:08] you'll have the full screen version
[34:10] where you can look around the whole area
[34:12] and also this little mini map that you
[34:14] get on your visor as well so it's going
[34:15] to be useful to players especially as
[34:18] they're exploring interiors you said
[34:21] ship head let's move into the ship had
[34:23] questions hi ship hug right off the bat
[34:29] why does quantum calibration mode
[34:31] scanning mode mining mode in any other
[34:33] sub UI mode take away or hide crucial
[34:36] flight information such as speed
[34:37] altitude attitude and any other useful
[34:40] information needed for basic flight so
[34:43] they're basically developed in like in
[34:47] under the hood as different contexts the
[34:50] in our overhaul of the design we're
[34:53] factoring that all that flight
[34:55] information so it's it's all available
[34:57] to you regardless of whether you're kind
[35:00] of in scanning or in mining mode or
[35:02] whatever it is because it is still
[35:04] relevant you can still fly so therefore
[35:06] you should still retain all your flight
[35:08] information that you need
[35:09] so in those modes we're looking at
[35:13] potentially contextually changing out
[35:16] the screens of cells so rather than just
[35:18] having the HUD change for these
[35:21] different modes we can leverage the
[35:22] screens in some capacity you know
[35:27] potentially changing some of the
[35:29] elements shifting elements around so
[35:30] that certain information that's relevant
[35:33] to that mode
[35:34] displayed rather than just kind of
[35:36] taking up your entire Hut as well so
[35:40] something that has happened over the
[35:43] course of development but not in an
[35:45] intention to take away crucial flight
[35:47] information when you're trying to spool
[35:49] up your quand right yes that's right I
[35:52] mean sometimes with these things you
[35:54] don't realize that it's going to cause
[35:56] issues until you try it and that's just
[35:58] one of those cases integrations are a
[36:02] family most bugs come from you
[36:06] know everything works fine in your own
[36:07] little you know you know your branch and
[36:09] then it's integrating it in with
[36:11] everything else we're we're bugs and all
[36:13] the users come into play yeah all the
[36:15] outside factors they didn't quite think
[36:17] of start to you uh yeah yeah there's a
[36:19] thing your team is working on here and
[36:21] then there's a thing somebody else is
[36:22] working on here and in their own little
[36:24] universes they work great and then it's
[36:26] when you integrate them into into game
[36:28] dev and you know that's where all the
[36:30] collisions and and stuff happens so yeah
[36:34] that's how bugs are made that's the
[36:37] story of the birds and the bugs they
[36:40] remind kind of off today it's weird all
[36:43] right can you update us on plans for the
[36:47] landing UI improvements needed for the
[36:49] implementation of hover mode people it's
[36:53] hard to land and hover mode basically
[36:54] what they're saying so when we we
[36:58] actually a while back we changed the the
[37:03] method that we actually use to render
[37:05] the UI from what was called 3d I to
[37:08] render to texture so it's actually
[37:10] rendered as part of the screens and it
[37:13] actually takes you know all the kind of
[37:15] post effects and everything so the
[37:18] original landing UI that had that
[37:19] replaced the radar what it built on was
[37:22] was the 3d eye tech and that didn't what
[37:25] just wasn't compatible with the render
[37:27] texture so this is kind of how we lost
[37:32] is so we're looking at bringing that
[37:34] back in some capacity but maybe with
[37:37] just as a better design we were just
[37:41] focusing mainly on the structure and the
[37:43] layout of the MFDs right now kind of
[37:48] defining as I said like you know what
[37:50] contexts are available what things
[37:53] should be displayed where when how but
[37:57] yeah there's definitely something that
[37:58] we need and as part of that also
[38:01] potentially having some kind of like
[38:02] guide system as well so in having some
[38:07] AR element that is displayed in
[38:11] conjunction with that widget we touched
[38:15] on this a little bit before when we
[38:16] talked about the customization thing and
[38:18] how we want to you know build our own
[38:21] default stuff so first so one of the big
[38:24] problems here let's get into it when you
[38:26] how do we intend to improve the
[38:28] legibility of UI elements that tend to
[38:31] sit over the environment an environment
[38:33] that can sometimes be very glaring I
[38:35] mean everybody's played star citizen has
[38:37] experienced this you if you point your
[38:39] ship anywhere remotely near the star at
[38:42] the center of the Crusader system all of
[38:44] your UI elements washed out what are we
[38:47] intending to do about that so there's
[38:50] there's a few kind of more in world
[38:51] solutions that we're looking at I mean
[38:54] the obviously obvious thing you can do
[38:56] is you know potentially add a drop
[38:58] shadow of the UI or just make it black
[39:00] or something but that just kind of
[39:01] destroys the aesthetic of it of what
[39:03] we're trying to go for so one thing that
[39:06] we're looking at is and we started this
[39:09] a bit with the Claudio side although
[39:10] it's not completely there yet is having
[39:14] some system where it's contextually most
[39:17] dynamically taking the brightness in the
[39:19] environment and adjusting the brightness
[39:21] of the UI in response to that in
[39:24] addition you know to make things look
[39:28] and feel much more in world we want to
[39:29] kind of have the huts displayed on
[39:33] actual geometry that you can that you
[39:36] can see so it kind of grounds it in the
[39:38] world much better but it's part of that
[39:41] we can kind of leverage that to may be
[39:43] dynamically tint that in addition to
[39:45] brightening the the UI based upon
[39:48] environmental conditions so it's a much
[39:51] more or thinking that has like a much
[39:53] more like in world and it uses the you
[39:58] it leverages the in-game Ella
[40:01] it's in a way that's kind of it's it's
[40:05] more convincing than just kind of making
[40:07] it like black or something is there is
[40:11] there something we can do beyond just
[40:13] frightening well so I can come like like
[40:17] just taking the HUD for instance it's
[40:18] like a combination of tinting that that
[40:21] physical glass plane a little bit but
[40:23] also brightening the UI that's honest so
[40:25] it's almost like you know when you have
[40:27] your phone on automatic brightness you
[40:29] go out in the sunlight right you know it
[40:32] can automatically adjust to to you know
[40:35] make it more readable because right now
[40:36] if you notice it's actually an issue
[40:38] with the eye adaptation where if you go
[40:40] down onto the planet the UI even on
[40:43] yours you see it on your screens as well
[40:44] it's actually compared to when you're in
[40:46] space it's very dim in in the in in
[40:50] sunlight so it's about kind of taking
[40:54] those environmental conditions and then
[40:55] using that to potentially brighten write
[40:58] stuff up but it's something that we're
[41:00] looking into and and and kind of you
[41:04] know we talked a little bit about with
[41:05] our graphics team so that as well as
[41:10] also potentially having some kind of
[41:13] effect in the in the UI tech in the UI
[41:17] rendering tech to like like things like
[41:20] like the health widget for instance like
[41:22] maybe maybe maybe it's not just the
[41:25] stuff in your visor having like a
[41:26] backdrop that's that's not just a black
[41:29] square but it's it's a little more
[41:31] elegant it's like you know a like a
[41:33] blurred frosted glass effect that helps
[41:37] with readability but and also not just
[41:39] against bright backgrounds but also you
[41:42] know busy backgrounds you just have a
[41:43] lot of you know dark it's like a fence
[41:49] or something you know you kind of get
[41:51] that it gets lost
[41:52] yeah kind of a camouflage effect yeah
[41:54] visual noise kind of disguises the UI on
[41:56] top they are being out speed out what
[41:58] would should it should help with them a
[42:00] lot of the suggestions you know the
[42:02] community offers no shortage of
[42:04] suggestions a lot of suggestions that
[42:06] come from the community often focused
[42:08] around adding a small black stroke
[42:11] around letters or putting a drop shadow
[42:13] behind text or stuff
[42:15] that stuff and not something we can
[42:17] consider or definitely some I mean we
[42:21] can definitely consider things along
[42:22] those lines
[42:23] it depends how subtle you are about is
[42:26] well if you have a really obvious doubt
[42:28] line a blur or drop shadow like like
[42:29] Zane said that's not necessarily going
[42:31] to fit with this of sci-fi look that
[42:34] we're going for there may be ways to to
[42:35] do something very subtly so it's for you
[42:37] I wouldn't say it's like a question or
[42:41] anything but like you know it's not not
[42:43] just overbearing too strong that it just
[42:45] looks you know cartoony yeah sure yeah
[42:48] right you don't want it to look like a
[42:49] cartoon yeah so we want to just explore
[42:53] the ideas that I've described before and
[42:57] then we'll just see where we're at with
[42:59] that yeah but ultimately we want to we
[43:02] want the UI to be readable yeah how's
[43:05] this as much as people want the who I
[43:06] didn't readable so yeah one of those
[43:09] things like like a lot of the UI where
[43:11] we basically want to try it try out a
[43:14] few different options so we concept
[43:15] different ideas like we could do this
[43:16] way or this way and then and step back
[43:18] and look and decide which is going to
[43:19] solve it the best way and then then pick
[43:22] pick that and go and put it in
[43:24] currently the MFDs on ships have a
[43:26] default configuration that must be
[43:28] changed each time the pilot gets back
[43:30] into the pilot's seat I know are their
[43:33] intentions to add the ability to save
[43:35] custom MFD configuration presets for
[43:37] individual players preferences oh yeah I
[43:42] mean that's gotta persist at some point
[43:45] it's just it the other issue is now is
[43:47] just it doesn't persist right so the in
[43:52] our while stay in our new UI tech the UI
[43:56] will be with what we call stainless so
[44:01] it won't store anything it won't store
[44:03] any state about itself it takes
[44:05] everything from like an entity or what's
[44:10] on on the server so basically when we go
[44:14] to develop our the the MSD or
[44:16] implemented the new design that we're
[44:17] working on
[44:19] by that point hopefully we'll we'll be
[44:21] able to persist like you know as you you
[44:24] know enter and exit the sea you'll see
[44:27] the same screens that you were on before
[44:29] even if you've tabbed over you shifted
[44:31] things around so it's you know it's
[44:33] definitely something we wanna yeah
[44:36] another thing relate to that we want to
[44:39] when we do this pass on the MFDs we want
[44:41] to make sure that the we're showing the
[44:43] most important important information by
[44:45] default as well so I'm sure people will
[44:47] be able to change things and so on but
[44:48] it would mean that there be less need
[44:50] for the the kind of the first time
[44:52] player for example to swap things around
[44:54] hopefully it'll be set up in a way this
[44:56] that's good for the general players
[44:58] potentially presets as well that you can
[45:01] they can quickly activate you know you
[45:04] may you may want something that's a
[45:06] configuration a screen configuration you
[45:09] know when we go to kind of enable the
[45:12] devisor configuration as well having
[45:16] preset presets associated with those
[45:18] that you can quickly access is something
[45:21] we can look at as well yeah plenty of
[45:23] things to consider yeah yeah the the the
[45:26] ship the ship MFDs put it diplomatically
[45:30] can be a bit cumbersome having to drill
[45:34] down from one menu to the next menu to
[45:35] the next many of the next one or to
[45:37] finally get to the thing that you're
[45:38] you're looking for and in a combat
[45:40] situation that that those seconds that
[45:43] can be deadly I know we're in the
[45:46] process of working out and a complete
[45:48] refactor of the ship FF DS right that is
[45:52] correct about that so how do we stop
[45:59] yeah where do we start I mean already
[46:01] already kind of touched on a little bit
[46:02] a little bit but I mean yeah so I mean
[46:08] right now and I guess the most obvious
[46:09] thing is that like they're they're just
[46:11] small and they're scale down there now
[46:12] readable and I mean we used to have
[46:16] what's called what we call these support
[46:18] screens where we kind of have the this
[46:21] screen that had minimal information on
[46:23] it but its font size was made in a way
[46:26] that was legible so we're kind of
[46:28] looking at this system we're in by
[46:31] default you have a kind of a potentially
[46:33] a different set up on your screens a set
[46:36] up I mean a more minimized display so
[46:40] it's it's like showing you
[46:43] really only what you need to know but in
[46:46] a I know where all the font sizes are
[46:48] very legible so we take it's really just
[46:51] about how much pixels the screen is
[46:55] taken up on your screen on your monitor
[46:57] when you're kind of in the default view
[47:00] but when you're focusing on a screen
[47:02] what I can do is it can contextually
[47:04] change to something that's more in depth
[47:07] that we want on the end of these so
[47:10] whether you're going you're focusing in
[47:13] on MFD or you're in flight mode that
[47:16] will contextually change to present you
[47:19] with always readable information yeah so
[47:23] so when you back when you're sitting
[47:28] back in your in your seat the way that
[47:31] these will change and it'll be only the
[47:34] most necessary information big legible
[47:37] and then when you zoom in and look into
[47:39] it it'll sense that and it'll change and
[47:41] reformulate and show you more
[47:43] information
[47:43] yeah actually the cool thing about the
[47:46] UI tech helping develop is that we're
[47:52] kind of taking keys from the area of
[47:55] like web development because you know
[47:57] that's my background too so I know a lot
[47:58] about of it but you know you have this
[48:01] thing called responsive design so you
[48:04] can have rule set up where beyond a
[48:08] certain point like if there's a box in
[48:12] our UI that goes beyond a certain point
[48:14] then you know you shrinks down beyond a
[48:15] certain point that you can actually have
[48:19] different styles or visual descriptions
[48:23] applied to that and conditionally
[48:26] depending on maybe how how much it's
[48:27] sized so we're kind of leveraging that
[48:30] to help with the reformulation of the UI
[48:36] on screens as well as you know when we
[48:40] were laying things out and when we
[48:42] potentially opened up customization that
[48:44] can be really helpful as like a tool to
[48:47] help us manage and maintain the UI
[48:51] because we even on like different sized
[48:54] screens in the game you
[48:56] 69 you have four threes you have one
[48:57] ones currently we have to maintain three
[49:00] different binary files for those and if
[49:03] you want to make a change in one well
[49:04] you have to go into each binary file and
[49:06] make that same change but if we can just
[49:10] maintain one UI and then just have these
[49:13] different style rules applied to it then
[49:17] it makes it much easier to maintain so
[49:19] you just change one thing and a change
[49:21] changes for every different manufacturer
[49:24] every different kind of configuration
[49:26] and it all works so yeah it's a bit of a
[49:31] tangent might be interesting is the
[49:36] actual process that we're going through
[49:37] with those we've got mark colorin who's
[49:40] he's quite famous for UI phones out
[49:42] there he's looking through the he's
[49:45] looking through the designs we've
[49:46] already got like what's in the game now
[49:47] and also working very closely with the
[49:49] vehicles team talking to them what do
[49:50] you want to show on these screens and
[49:52] kind of trying to find out generally
[49:54] what's in all the MFDs and then going
[49:57] and redesign each screen to kind of get
[49:59] the best out of it so we're at that
[50:01] stage now and then when as Zane's team
[50:03] progresses the UI tech eventually will
[50:06] get to a point where that the screens
[50:07] are redesigned the techs ready and then
[50:09] we'll start to put those in the game I
[50:11] was just googling my car around now
[50:17] cargo UI just I'm a car UI right now
[50:21] players have to go back to chaos just to
[50:24] see the inventory of what they're
[50:26] carrying on their ships do we have any
[50:29] plans for implementing some kind of
[50:31] shipboard cargo UI so that we can see
[50:34] what we're carrying without having to
[50:35] get to a destination first
[50:37] yeah they definitely should yep this is
[50:40] something something that we will look at
[50:42] yes so we know that's needed in yeah
[50:45] where it comes taking the timeline I'm
[50:47] not sure but at some point yeah that
[50:50] wasn't on the list that was just when I
[50:51] put in there myself are there any plans
[50:59] to allow us to prioritize the use of
[51:02] missiles or torpedoes through MFDs
[51:06] nothing that's another
[51:08] another thing that we're we're going to
[51:10] look at as well so I believe we have
[51:15] that previously I think it broke yeah I
[51:18] think John John crew coming here this
[51:20] one I think the way the way is in the
[51:22] moment the UI actually supports that but
[51:24] there's a bit of refactoring these doing
[51:26] in the background to get the the weapons
[51:29] set up to match up so yeah there's
[51:31] something we do want to do and it will
[51:32] be there in the future at some point
[51:33] yeah and and a better design for it
[51:36] rather than just clicking up yeah are
[51:41] there any plans to allow us to see
[51:43] points of interest in other UI modes
[51:45] right now we only see them in I think
[51:48] the quantum drive mode yeah so I think
[51:51] this is definitely something I'd be
[51:53] interested in it's one of those things
[51:54] it kind of relates back to that thing
[51:55] we're talking about before with managing
[51:58] how much information you show so if we
[52:00] get it to a point where we can I suppose
[52:02] cut down the amount of icons and things
[52:05] to a sensible level then we can consider
[52:06] whether it's worth putting those in
[52:08] other views as well so it's definitely
[52:11] something that we should look at whether
[52:13] which views it goes into and how much
[52:15] and if it even goes into certain ones I
[52:17] don't know at this stage but that's one
[52:18] of those things where you have to get a
[52:20] system in try it and then then decide
[52:22] where is the best places to it's very
[52:23] much iterative yeah
[52:26] what about an EPA marker you know when
[52:30] we go to quantum travel we see the
[52:33] distance ticking down but based on the
[52:35] capabilities of our ship and the type of
[52:38] quantum drive we have something that
[52:40] tells us how long it's going to take so
[52:42] I know if I can get up and go to the
[52:43] bathroom or not yep I think that's a
[52:46] good idea I think we were looking at
[52:49] that question earlier in saying hey what
[52:51] do you think about this and then
[52:52] generally friends like yeah we should do
[52:54] that
[52:54] so yeah that's definitely something we
[52:55] look to you to adding at at some point
[52:58] yeah yeah we have an ETA for when your
[53:00] oxygen runs out so I don't see a reason
[53:02] why we would have fought in the in the
[53:10] current file system they're floating
[53:12] menus is that closer is that what are
[53:16] our thoughts on the intern thought that
[53:17] look what I'm trying to reword the
[53:18] question of it it get kind of
[53:20] but this person is asking about if inner
[53:22] thought if we're happy with where inner
[53:24] thought is right now or if we're if
[53:26] we've got plans to continue to iterate
[53:28] on it well I know there's a lot of cases
[53:32] where era thought kind of appears where
[53:35] ideally it shouldn't so like things over
[53:37] screens like when you're I guess the
[53:40] obvious example is when you're in an
[53:42] airlock you'll get a you get an inner
[53:44] thought saying press the screen whereas
[53:47] why not just just you know we should
[53:49] just have the press to screen and that's
[53:53] something our UI tech allows for now so
[53:55] we can actually have like buttons in the
[53:57] UI so when you're specifying maybe like
[54:01] what floor you want to go up to like an
[54:02] an elevator or something that can be
[54:04] buttons that you click on in actual UI
[54:07] rather than you know having this inner
[54:10] thought option that's kind of doesn't
[54:12] really make sense in the world so before
[54:16] we look at the visuals a bit as well yes
[54:18] it's okay it's usable and so on but I'm
[54:20] sure we can make it look a bit prettier
[54:22] we do have some other interaction stuff
[54:24] going on at the moment that we're we're
[54:26] kind of figuring out which could be
[54:27] quite cool that relates to that but
[54:29] that's probably something you want to we
[54:30] want to save to a little bit later till
[54:32] there's more to show thank you
[54:39] a long time ago or the live chat here we
[54:41] talked about the potential of
[54:44] manufacturer-specific
[54:46] you eyes like you get into an anvil in
[54:49] the UI is anvil you get into an Aegis
[54:51] and ship in the UI is a just are we
[54:53] still is that still on the planets I
[54:55] still am about that don't look
[54:57] yes and it's much more possible now with
[54:59] the UI tech because we have the style
[55:01] sheet system so you know as I was just
[55:05] kind of describing before everything had
[55:06] to be baked into binary assets so if we
[55:09] wanted to have different manufacturers
[55:10] styles this would require one file form
[55:15] envel one file for RSI one file origin
[55:17] oh we want to change you know this thing
[55:20] and that thing and you know what you
[55:23] know let's add this feature in and we
[55:25] got to display it so you know that's
[55:27] that's going into all these different
[55:29] binary files adding that UI adding the
[55:33] code
[55:35] but with salaries we just have one kind
[55:37] of white box you line and we just the
[55:40] visual description is defined and
[55:42] applies to that so you know we actually
[55:45] have this example now and our kind of
[55:48] rough initial implementation in the UI
[55:50] tech where we actually select from a
[55:53] drop-down first have like RSI and that
[55:56] that applies a set of rules like oh well
[55:58] you know the the corners are maybe ten
[56:00] pixel chamfer and the font color is this
[56:02] and so forth and so on but then we
[56:05] switch to origin and then and
[56:07] everything's kind of a more elegant you
[56:10] know it's it's all the style has changed
[56:12] just on just your drop-down because it's
[56:15] not it's data-driven so it's not like
[56:17] it's baked in as well is it once the
[56:24] system is in place it gives us more
[56:25] opportunity to hand it over to the
[56:26] graphic designers so you've got a guy
[56:29] who comes with a really cool retro
[56:30] design for one of the ships for example
[56:32] it's a lot easier for us to kind of drop
[56:33] that into the game and have it working
[56:34] out so it's less dependence on someone
[56:37] going into flash and knowing how to code
[56:38] in flash and then use it's kind of
[56:41] slightly outdated interface so it should
[56:43] really help when we get to get to that
[56:44] stage yeah there's a lot of properties
[56:47] now that you can that you can modify
[56:49] with these style rules so a lot of
[56:51] possibilities and a lot of ways to
[56:53] differentiate between manufacturers but
[56:56] also it's not just just styling as well
[56:58] it's also you know when we get to it
[57:01] it's also kind of the way you lay things
[57:03] out as well so things like ships like
[57:08] origin mask will you know have more
[57:10] holographic UI and in our it's part of
[57:15] our tech and actually we're starting to
[57:16] I think we're investigating the initial
[57:21] engineering requirement for this but
[57:23] making it so you can have 3d UI as well
[57:26] so being able to in the tech and the
[57:28] tools to for a developer to build a UI
[57:32] or they can manipulate different planes
[57:35] and z-axis so make a 3d UI and have it
[57:39] be and it looked really holographic so
[57:41] having that kind of style for the more
[57:44] kind of what you say technically
[57:46] advanced ships versus more
[57:47] once I think we have just the retro one
[57:49] just fitted in every every ship right
[57:52] now that'll eventually be something we
[57:55] definitely want we want to differentiate
[57:58] quite significantly between like the
[58:00] different tech levels of the ships I
[58:04] guess you'd call it
[58:05] you just gave every VR enthusiasts heart
[58:08] palpitation saying we're almost out of
[58:12] time let's talk about Moby glass we
[58:14] haven't really touched about Moby glass
[58:16] two questions really one the
[58:18] responsiveness of Moby glass can
[58:20] sometimes be a little slow
[58:22] is that a engineering thing is that a UI
[58:25] thing you do we have any thoughts about
[58:27] that you might not be the people to ask
[58:29] I don't know no I mean I think the
[58:31] usability of that I mean the the time it
[58:34] takes to get out you know the animation
[58:38] and the whole boot up sequence can be
[58:40] vastly reduced it's just were you know
[58:44] we're not focused on mobile glass at the
[58:46] moment
[58:47] actually the whole UI we're looking to
[58:49] overhaul on that as well but I mean it's
[58:53] really just got to set a target time
[58:55] like 0.6 seconds or something like that
[58:58] yeah and they'll have as long as we have
[59:01] that then you know we can fit the
[59:04] animation around that whatever it needs
[59:06] to happen
[59:06] yeah one thing with it I guess it's the
[59:09] mobile glass is this holographic
[59:10] holographic display that projects out of
[59:12] the device itself so there's no reason
[59:15] why we couldn't have that start to
[59:16] appear as the arm comes up for example
[59:17] right I'm waiting 15 right now it's
[59:19] right now it's very sequential yeah
[59:21] there's no reason you know especially
[59:23] with the new Tech's we can we can
[59:25] actually start start it up now without
[59:27] you know without having the wait for the
[59:29] animation to complete okay you know you
[59:32] just said that mobile glasses and a
[59:33] focus right now and that's what my
[59:35] second question was is there anything
[59:36] you can tell us about the future of
[59:39] more.we glass eye after so having said
[59:41] that it's not the focus right now I
[59:43] suppose is this is similar kind of thing
[59:45] to the I suppose what we're doing with
[59:47] the ship MFDs will once we got those the
[59:51] ship stuff and the visor stuff sorted
[59:54] out then we probably start to look at
[59:56] that so we will and I will look at
[59:58] everything that's that's in there now
[59:59] and also talk to the game designers
[1:00:01] find out what's the what's their overall
[1:00:03] overall intention for the game design as
[1:00:05] well and try and kind of rework it to
[1:00:07] match those and also incorporating the
[1:00:09] new tech so it's definitely do an
[1:00:11] overhaul I think and we can make it a
[1:00:12] lot better so quite looking forward to
[1:00:14] that yes because because it's also like
[1:00:15] holographic in nature it sort of depends
[1:00:17] on the UI tech being able to do 3d as
[1:00:21] well so before we even implement that we
[1:00:23] need to have the foundational tech to
[1:00:26] you actually do the 3d effects that we
[1:00:28] want in the mobile glass to be there so
[1:00:31] I mean the 2d all the 2d stuff that that
[1:00:34] goes on like a flat plane it's that's
[1:00:36] all quite far along there's still some
[1:00:40] work some engineering work to make it
[1:00:42] sleek and kind of slice things up and
[1:00:44] make even world panels out of that and
[1:00:48] be able to position that anywhere in the
[1:00:49] world I have last question gentleman
[1:00:53] over let you go this came in from the
[1:00:55] live chat it's legitimate I didn't ask
[1:00:56] is the UI team hiring and what skills
[1:01:00] are needed most well yes I think at the
[1:01:10] moment probably the the job specs are
[1:01:12] slightly out of date on the website
[1:01:13] which will update soon we're definitely
[1:01:15] looking for at least a programmer on the
[1:01:18] UI team at the moment we've got so much
[1:01:20] stuff that people want to put in this
[1:01:22] it's kind of sad when you have to say no
[1:01:24] to everything so who getting someone
[1:01:26] else on board to help help help do that
[1:01:28] is good at the moment we're not really
[1:01:31] looking for artists and graphic
[1:01:33] designers although that may change in
[1:01:36] future and I guess if people are
[1:01:39] interested in applying
[1:01:40] what's the essential things we're
[1:01:43] looking for I suppose for programmers
[1:01:46] it's the case of being able to show your
[1:01:49] experience and also having a knowledge
[1:01:50] of what makes good you I really like was
[1:01:53] why why do things work that you see in
[1:01:56] other games all that kind of thing for
[1:02:00] artists we tend to look at
[1:02:02] I suppose quite a lot of graphic design
[1:02:04] stuff because a lot of our job involves
[1:02:06] come up with cool logos and buttons and
[1:02:07] that kind of thing so if you go sends
[1:02:09] for art that really helps but also this
[1:02:11] kind of it's quite hard to teach you but
[1:02:14] this understanding
[1:02:15] I know if you take a particular screen
[1:02:17] why is this screen good on this
[1:02:18] particular app or what could I do to
[1:02:21] improve it sort of thinking about that
[1:02:22] kind of thing is it's a really helpful
[1:02:24] skill one thing is part of the also the
[1:02:27] UI tech team that we have it'd be
[1:02:30] helpful to have should have a tools
[1:02:32] programmer as well so right now what
[1:02:35] we're working on is kind of a low-level
[1:02:36] stuff where I've mentioned a lot of
[1:02:41] times in this that everything is now
[1:02:43] data driven but that's actually raw data
[1:02:46] so when we're actually implementing this
[1:02:49] stuff were kind of poking into raw data
[1:02:51] so one thing that we want to do that I
[1:02:56] kind of tempted to make a head start on
[1:02:59] this quarter but is is is the editor for
[1:03:03] it's kind of the we there's a low-level
[1:03:06] stuff and then there's the layer that
[1:03:09] the designers and artists will winter
[1:03:11] facelift so creating in a UI editor
[1:03:15] that's intuitive and is easy to use is
[1:03:21] something that you know we're hiring for
[1:03:23] as well so like a tools programmer that
[1:03:25] could help build an editor would be very
[1:03:30] handy yeah you make a good point we
[1:03:32] don't just develop things for for our
[1:03:35] backers we actually there are several
[1:03:37] members throughout the company whose
[1:03:39] purpose is to develop tools for us to
[1:03:41] use to develop stuff for the backers
[1:03:44] like that so so yeah any any developing
[1:03:47] those tools is an essential part of any
[1:03:49] game design and but I don't think we
[1:03:51] cover it nearly enough on SC on ISC or
[1:03:54] anything like that so you just gave me
[1:03:55] an idea for another segment so thank you
[1:03:57] saying awesome all right that's it
[1:03:59] that's all we've got time for this week
[1:04:01] saying Simon thank you so much for
[1:04:04] taking the time to be here thank you I
[1:04:05] think you know we've obviously had Zane
[1:04:08] on a TV acceptable but I think this is
[1:04:09] both of your first live Friday show how
[1:04:13] was it this for me yeah I've done this
[1:04:15] before have you done the Friday show you
[1:04:17] okay yeah it was surprisingly easy yeah
[1:04:20] so yeah good job all right thank you
[1:04:22] you're not gonna write a letter to Chris
[1:04:24] and like I hated this
[1:04:26] not today alright thanks guys that's it
[1:04:29] for the show we'll see you next week
[1:04:30] take care wait
[1:04:46] thanks for watching for the latest and
[1:04:48] greatest in star citizen squadron 42 you
[1:04:50] can subscribe to our Channel or you can
[1:04:52] check out some of the other shows and
[1:04:53] you can also head to our website at

# BUGSMASHERS! Episode 09

**Video:** https://www.youtube.com/watch?v=_bcb_cU-MEY
**Date:** 2015-08-26
**Duration:** 12:53

## Transcript

[00:00] hey everyone welcome back hope you guys
[00:02] enjoyed Gamescom it was quite an
[00:05] adventure uh things are finally settling
[00:07] down we can get back to those normal
[00:09] bugs so let's
[00:14] go bug
[00:16] [Music]
[00:19] species hey everyone welcome to the test
[00:24] level of
[00:26] Doom so here we have our fun little
[00:29] Gladius
[00:30] and as you expect when I come up to them
[00:32] and hit F I should enter oh no nothing's
[00:37] happening
[00:39] ah this is the joys of fun integration
[00:43] W so when we were doing gamescon we
[00:46] decided to integrate some um Advanced
[00:49] features into the branch and then even
[00:51] the latest version of cry engine and
[00:54] that broke all sorts of things so this
[00:57] is one of the things that broke it's
[01:00] animations on ships oddly enough uh
[01:03] players have animations so if we do M
[01:06] and
[01:07] debug our ship uh you can
[01:11] see um on the left side there's canopy
[01:15] and left ladder and it's trying to play
[01:18] canopy open and can and Ladder deploy
[01:21] however it's never
[01:23] actually doing anything so it's like hey
[01:26] I started it but I'm not updating
[01:30] so if I hit
[01:32] Escape go back into the game you'll
[01:35] notice that there's no
[01:37] fragments uh hit play and it's trying to
[01:40] play a fragment and nothing's happening
[01:43] and our fragment in this case is an
[01:45] animation and a sound so if we hop right
[01:49] into the code this took quite a bit of
[01:52] time to narrow it down um this section
[01:56] of the code is our update so on our
[02:00] mannequin we have a whole update Loop
[02:02] and this is this section of the of the
[02:05] code and it's this block right here is
[02:08] supposed to go through all the active um
[02:11] Scopes you can think of Scopes as layers
[02:15] in like um Photoshop um so you see a
[02:18] seat driver seat driver ik landing gear
[02:20] front all the way down um each one of
[02:23] those is a scope and on the canopy and
[02:26] left ladder scope each of those are
[02:28] trying to play an animation in sound and
[02:31] on the far right you'll see a TR which
[02:34] is basically time remaining and uh
[02:36] canopy has six seconds left letter has
[02:39] five and if you notice they're just
[02:40] never updating so if we go into the fun
[02:44] little update Loop we have here uh
[02:46] you'll notice it's going through all of
[02:49] our active um Scopes and it's trying to
[02:51] update them and unfortunately let's see
[02:55] if you see it I'll give you a hint it's
[02:58] right there right there ah do you see it
[03:00] no all right I'll give you a
[03:05] hint this is
[03:09] what bit 64 is set
[03:13] to ah do you see it
[03:16] no all right give you a hint so we have
[03:20] um an index and I should say our active
[03:22] Scopes is since we have we could have up
[03:25] to 64 so we have a 64-bit integer so
[03:28] each bit indicates zero or one whether
[03:32] or not the scope is active so if we go
[03:36] through 32 or 64 Scopes um we're going
[03:39] to go one bit another bit another bit
[03:42] another bit another bit another bit and
[03:45] this bit of magic right here is supposed
[03:47] to take in the bit index convert it to
[03:51] the bit value and then it does a and
[03:54] operation to check to see if it's
[03:56] actually should update because there's
[03:59] something on this scope and as you can
[04:01] see here give you a hint this is what
[04:04] the correct code should be I take my bit
[04:07] index and I shift it over to the correct
[04:10] bit and then I mask it however this is
[04:14] sending in um a shift of a shift so if I
[04:19] H if I put a one in here I should get
[04:23] one or two to the^ one which is
[04:26] two if I put a two in here I should get
[04:30] 2 to ^ two which is
[04:32] four but if I put a
[04:35] one one or 2 to the^ of two so if I make
[04:40] if I is
[04:42] two this bit becomes
[04:44] four now this four becomes 2 to the 4
[04:48] and as you can see we're not on the
[04:51] actual bit value that we want so we'll
[04:55] change this back to
[04:57] I cuz that's what we want to
[05:00] do and we will compile
[05:09] mate wait for
[05:11] recode gu's a little
[05:13] ducking there it goes animation plays
[05:17] off so let's try that one more
[05:22] time and there goes the animation
[05:26] ha so what's happening is
[05:30] our canopy
[05:32] is one two three four five six seven bit
[05:37] seven so I should say scope
[05:41] seven so if we
[05:44] do um since it's seven minus one because
[05:48] we start at zero index it's actually 2
[05:50] to the six so if we do
[05:53] two let's do
[05:56] this
[05:58] scientific two to the
[06:02] six we should be at 64 however this
[06:06] naughty
[06:09] code was doing that first here and then
[06:13] passing in now 64 to here so now we're
[06:17] doing two to the
[06:21] 64 which is actually you can see is not
[06:24] the value we
[06:26] want so the Quick Fix was to just get
[06:29] rid of this part make sure that it's
[06:32] actually doing the correct shift so that
[06:34] we're on the correct um bit number
[06:38] and as you saw we were able to open and
[06:42] close open up our little U ladder
[06:46] animation woo oh the joys of
[06:51] integration hope you guys enjoyed
[06:53] it so as you guys saw we had some little
[06:57] integration bug um we have a couple of
[07:00] those that we have to fix it happens we
[07:02] just have to go around and fix it uh the
[07:04] unfortunate thing is they take a little
[07:06] time to find those little you know it
[07:08] looked like a little easy piece of code
[07:10] but finding that one thing that broke
[07:12] this hit whole big slew of mannequin
[07:15] States took quite a bit of time but we
[07:18] got it so cool uh so it's been a while
[07:22] but I have two questions here that I
[07:24] want to go through real quickly because
[07:26] I love you guys all right so we have oh
[07:29] I'm not going to pronounce this right
[07:33] mno one MGO one yeah that's what we're
[07:36] going with how do you avoid writing
[07:39] spaghetti code which I find in
[07:40] particular hard if you under some time
[07:44] constraint is there a code review how do
[07:46] you guys tackle performance
[07:48] problems so to answer your first
[07:50] question spaghetti code is a tricky
[07:53] thing to solve especially under crunch
[07:57] um I would recommend uh at least what we
[07:59] do here is if you're going to have to
[08:01] write a bunch of IFL statements you're
[08:03] basically writing a state machine um
[08:06] look up State machine but those are the
[08:08] best thing ever because you could be in
[08:11] you know you don't have to write this
[08:12] big block of spaghetti if else if if if
[08:15] this this this this and what happens if
[08:17] you miss a statement oh no now that
[08:19] everything's broken uh write a state
[08:21] machine because you could have a enter
[08:23] exit and active and then you just keep
[08:26] looping and then when you transfer from
[08:28] one to another you could
[08:29] ensure that you know your variables your
[08:32] state your logic flows so look up State
[08:36] uh State machines those are the best
[08:37] things ever um let's see oh yeah code
[08:42] review code reviews will help um but if
[08:48] you're under Crunch and everyone starts
[08:49] throwing in code reviews sometimes bugs
[08:52] slip in uh they do help um narrow down
[08:55] some bugs uh they also prevent bad
[08:58] things from happening or if people touch
[09:00] things they're not supposed to touch but
[09:03] don't use code reviews as the ultimatum
[09:06] this will solve everything it's just
[09:08] another tool that has its pros and its
[09:11] cons um how do you guys tackle
[09:13] performance problems profiling profiling
[09:16] profiling those are the biggest things
[09:20] you could or say the biggest thing you
[09:21] can do uh if your game's running slow
[09:24] why you know throw in some profiles see
[09:28] where things are slowing down use some
[09:30] Performance Tools try to narrow down the
[09:33] sections of code that are causing you
[09:34] the troubles because those are the areas
[09:37] that you want to optimize and you know
[09:39] get better oh you're loading in a bunch
[09:42] of geometry because and that's causing
[09:44] your game to slow down maybe look into
[09:46] streaming load all the low res stuff
[09:49] first before you you know get the high
[09:50] res stuff stuff like
[09:52] that uh next
[09:54] question oh jeez why can't anyone ever
[09:57] pick any easy names from trug 42 he says
[10:02] Mark great video as always thanks for
[10:04] taking the time to record these for us
[10:06] anytime uh I do have a question is
[10:10] coding something you would advise going
[10:11] through a four-year CS program to pick
[10:13] up or is it something you can learn on
[10:15] your own and still be successful with
[10:17] speaking of someone in their mid-30s who
[10:19] has already has a few degrees but not a
[10:21] CEST degree I'm hoping the ladder is
[10:23] possible so that is kind of a tricky
[10:28] thing because
[10:30] um I do know people who have gone
[10:32] through the four-year program and they
[10:33] have wonderful jobs in the programming
[10:36] field and I know people who have done CS
[10:39] degrees who do not have um engineering
[10:41] degrees or engineering um jobs and I
[10:45] know people that never gone to school
[10:47] for it who are in the field and vice
[10:50] versa um from what I've
[10:53] seen uh if you know how to program well
[10:56] and you have you know you've done
[10:59] personal side projects with crazy amount
[11:02] of um interesting features so if I'm
[11:06] going to go for a game job I've have you
[11:09] know you have backgrounds of you know
[11:11] maybe you've made a bunch of games and
[11:13] you worked with a few other people to
[11:15] make some indie
[11:16] projects um just getting a degree won't
[11:20] help and not having a degree may or may
[11:23] not help um it's kind of a tossup you
[11:28] know if you're going to go for a AAA
[11:30] studio and you have no background or
[11:35] nothing to show then they're going to
[11:37] want to see a degree just to make sure
[11:39] that you know what you know so I would
[11:42] say a degree will help but what will
[11:44] help you more is getting a lot of
[11:47] personal projects up and running join an
[11:49] indie group join make things on the side
[11:52] and build stuff in your spare time cuz a
[11:56] lot of companies especially this one
[11:57] love to see personal projects because if
[12:00] you just do things from one job to the
[12:02] next it's hard to say what you what
[12:04] skills you have and if you could see a
[12:07] lot of possible um things that you've
[12:09] done in the past that's a big big big
[12:13] thing
[12:15] so uh I would suggest you know try doing
[12:19] stuff on the side see how it goes and if
[12:21] you think you need a little bit more go
[12:24] for the fouryear do what you think will
[12:26] help you to become the best damn
[12:28] programmer there is well hope you guys
[12:31] enjoyed this week's bug Smashers until
[12:34] next time week month year two weeks
[12:51] time

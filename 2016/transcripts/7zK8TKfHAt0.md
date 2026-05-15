# 10 for the Developers: Episode 05

**Video:** https://www.youtube.com/watch?v=7zK8TKfHAt0
**Date:** 2016-02-15
**Duration:** 25:41

## Transcript

[00:02] Closed Captioning provided by the Imperial
News Network.
[00:16] Randy Vasquez (RV): Hey guys, my names Randy
Vasquez, Associate Producer for Cloud Imperium
[00:23] Games.
[00:24] We’re here for 10 for the Developers and
for the first time we have...
[00:27] Vincent Sinatra (VS): Vincent Sinatra, QA
Lead.
[00:29] RV: Nice.
[00:30] So we have questions, but we also want to
thank subscribers for making this possible.
[00:33] It’s really awesome that we get to kind
of directly interact with you guys as well
[00:37] as take questions and then kind of give you
our opinions or suggestions or kind of our
[00:42] ideas and thoughts on what you guys are asking
so, ready to get started?
[00:46] VS: Oh yeah, let's do it.
[00:48] RV: Sweet
[00:49] [0:51] Solitude asks: For both - What aspects
of the gamer process (by which I mean setting
[00:54] resolution, visual quality, audio levels,
control schema, etc) do you find frustrating
[00:58] // would you change given scope and resource
to do so?
[01:01] VS: For me that answer’s easy it’s the
holo table
[01:04] RV: What?
[01:05] Everybody loves the holotable
[01:06] VS: Really?
[01:07] Who are these people?
[01:08] VS: I don’t know
[01:10] VS: I personally don’t really like the way
it’s functioning currently.
[01:12] I don’t like to look at it, don’t like
to test it.
[01:14] In fact I got some new testers now we’re
training up and i’m making them test it
[01:18] because they’re the nuggets and that’s
their job.
[01:20] RV: I guess personally the party system right
now.
[01:23] The party system bothers me but at the same
time is I know that these are being worked
[01:29] on and a lot of the feedback from the fans.
[01:33] We’ve taken tonnes of feedback on things
and, so we’re definitely working on it.
[01:35] So we’re pushing that soon.
[01:37] I cannot say when so do not ask when but if
you’re even thinking about asking don’t
[01:40] even do it!
[01:42] VS: Yeah pretty much!
[01:45] [1:46] Amontillado asks: What sort of techniques
or procedures do you recommend for those of
[01:55] us that want to hunt and report bugs to CIG?
[01:58] How can we most efficiently go about collecting
the information that you need?
[02:01] RV: So this is kind of a question for you
…
[02:03] VS: Yeah, I believe this is probably a QA
question and Issue Council type question.
[02:07] So basically what we primarily want is people
to be concise, clear, clear steps running
[02:13] through things you started doing but also
include … sometimes you’re only reporting
[02:18] the thing that you saw and what you were doing
when you saw it, but sometimes what you were
[02:21] doing before that impact things.
[02:23] Like we had certain situations where people
were getting disconnected while joining Crusader
[02:26] they would just tell us “Hey, I got disconnected
when joining Crusader”.
[02:29] But, you know what, it was because they were
joining Arena Commander before they transitioned
[02:34] to Crusader and their tokens weren’t getting
cleared and that was the issue.
[02:37] So as much information as possible they can
provide is usually the best for us because
[02:42] then we can pick through all that information
and get really good steps for the developer
[02:47] so they can actually get a fix in.
[02:49] RV: So I know with like release notes and
stuff we have ... do you guys set the release
[02:52] notes?
[02:53] VS: Yeah.
[02:54] RV: So maybe in there we can be like “Hey
guys, can you focus on this?”.
[02:57] Do we do that right now?
[02:58] VS: We don’t do that right now.
[02:59] That’s not actually a bad idea.
[03:00] You know if somebody was a Producer …
[03:02] RV: What?
[03:03] VS: … they might be able to push something
like that forward!
[03:07] That might be a good idea going forward.
[03:09] RV: Man, see this is what happens when I open
my mouth!
[03:13] VS: Yeah.
[03:15] Exactly!
[03:16] [3:17] Neuroquila asks: Since, thanks to the
Issue council, players are somewhat involved
[03:20] in the QA process, do you search the council
frequently in search of hints to better explain
[03:24] what went wrong for a particular problem or
do you just wait for issues to receive the
[03:28] appropriate number of votes and then react?
[03:31] VS: Well, me personally I’m in LA and we’ve
got a really small team, mostly we’re embedded
[03:36] testers, we do a lot helping the developers
and stuff like that, I know our Austin and
[03:40] UK we’ve got great QA teams out there who
are always in the Issue Council making sure
[03:44] they're checking issues.
[03:45] Now a lot of those issues are already written
up in our database cause we ran into them
[03:48] during our normal sanity checks and smoke
tests and sweeps and stuff like that, but
[03:52] the ones that do get rise to the top, those
are the ones we investigate, we make sure
[03:56] we get in the database, we make sure we get
fixes out there because we know the backers
[03:59] want that stuff fixed as soon as possible.
[04:01] RV: So some people might not even know what
the Issue Council is.
[04:03] What, like…
[04:04] VS: Issue Council is where the backers and
all our Subscribers should be going to report
[04:07] any sort of issues, and then if you run into
it you vote it up and the higher it goes in
[04:11] the chain the sooner we take a look at it
and get it taken care of.
[04:14] RV: Nice.
[04:15] That’s kind of cool.
[04:16] I’ve never used it since I just kind of
go over to your desk and I’m like …
[04:19] VS: Yeah, you say is this happening and then
you hit me and yeah, that’s exactly what
[04:21] happens pretty much for everybody
[04:26] RV: Basically.
[04:27] Poor guy has to put up with this.
[04:33] [4:29] Drugh asks: How can we support testing
better.
[04:38] Should we just try more crazy stuff, actually
intentionally cause havoc to break things?
[04:43] Does the wealth of PTU data provide any new
insight into the process?
[04:47] How does one prepare to QA the sheer number
of future features while simultaneously changing
[04:52] the engine, adding new part, increasing the
complexity.
[04:55] I feel this must be a moving target for QA
in an unstable environment?
[04:59] RV: Yes.
[05:00] VS: Yes.
[05:01] RV: Yes.
[05:02] RV: Yes.
[05:03] It is definitely an unstable environment.
[05:04] In fact more days than not it is quite unstable.
[05:06] There’s going to be certain areas in the
code you can’t even look at.
[05:09] There’s new iterations coming down.
[05:12] As far as causing havoc, well when you’re
out there in the PTU I think we want more
[05:16] controlled havoc…
[05:17] RV: Actually yeah.
[05:18] We would say controlled havoc or kind of like
planned chaos
[05:21] VS: Planned chaos
[05:22] RV: That was the one we were kind of like..
[05:23] VS: Planned chaos that’s what we want.
[05:25] Because doing strange and weird things is
always great.
[05:29] Sometimes you find the best bugs by doing
something that the average user would never
[05:32] even conceive of.
[05:33] Like what happens if I land this ship of this
ship on top of another ship and you end up
[05:38] with some sort of shipception or something
like that.
[05:42] Sometimes you can do that sort of wacky stuff
and you could find some really good issues.
[05:45] But you don’t want to do that to people
who don’t know what you’re up to.
[05:49] Then it’s just griefing.
[05:50] RV: Basically the point; don’t be a griefer
don’t be dicks.
[05:53] Just be nice to people and if you want to
test something crazy seriously just…
[05:56] We were talking about this, just be like...
[05:57] VS: Just ask people
[05:58] RV: Be like “Hey guys I want to do something
crazy.
[06:01] Is anyone down for crazy?”.
[06:02] VS: Yeah!
[06:03] RV: Usually people will be like “Oh crazy?
[06:05] We’re in, we’re doing this!”
[06:06] VS: Yeah.
[06:07] We got a pretty good crazy base going on!
[06:09] People are just like to say “Hey I want
to try something wacky today does anybody
[06:12] else want to come here and help me out with
this?”
[06:14] And usually we get one or two people to jump
in.
[06:17] I know i’ve done it a live server a couple
of times.
[06:20] So that’s one of those things that you can
do as far as havoc.
[06:23] As far as the PTU and how it helps us with
the process.
[06:25] It really helps when it comes to performance,
stability.
[06:28] We get those metrics from hundreds, thousands
of users and obviously that’s something
[06:33] we can’t do internally because our Test
Teams are only so big
[06:36] RV: And also on that.
[06:38] People need to just log in and just be there.
[06:40] Cause even just logging in for a little bit
here and there so that we can put the servers
[06:44] through their paces, the Engineers are getting
really good information.
[06:46] The Designers are getting good information
because the Designer can design something
[06:49] and then all of a sudden it works when you
have one or two people there and you see this
[06:53] all the time probably.
[06:55] Five people there, but as soon as you hit
the ninth or the tenth person everything just
[06:59] breaks down like crazy
[07:01] VS: Whereever you can get those numbers it
really helps.
[07:04] Because again the QA Teams are kept small
and focused so we can you know ‘laser fine
[07:09] accuracy’ on what we need to be checking
but you know…
[07:11] RV: SO point take away is: If you want to
do some crazy stuff seriously just put it
[07:17] in chat and be like “Hey you guys i’m
trying this out does anyone want to join me?”
[07:20] VS: Ask permission before you start using
the Glaive to lift up other ships and stuff
[07:25] like that
[07:26] RV: Just don’t kill someone cause we’ve
seen things on Youtube where people are just
[07:28] going crazy and just ramming another ship
and the person’s not even taken off.
[07:32] And i’m like “Come on people.
[07:34] You know that’s griefing”.
[07:35] VS: Because you don’t know how long that
person has to play.
[07:39] You may be in there for a four house session
trying to hit up as much stuff as you possibly
[07:44] can.
[07:45] They’re only there for fifteen minutes.
[07:46] They got kids, they’ve got to change diapers,
they got to get the food ready, they got a
[07:49] bunch of other stuff.
[07:51] They just want to jump in and see what we
have on the next PTU patch and they don’t
[07:55] necessarily want to help you do crazy stuff.
[07:58] So just clear it ahead of time if you’re
going to involve other people in your wacky
[08:02] havoc causing tests.
[08:03] RV: The other thing is.
[08:04] We have such a strong community we don’t
need stuff like that it would just bring it
[08:08] down.
[08:11] Just help each other out.
[08:12] Controlled and planned chaos is where it’s
at.
[08:15] [8:17] Logical Chimp asks: When looking at
the QA team work load, roughly what is the
[08:20] split in testing between: Running through
pre-defined scripts/regression testing.
[08:25] Adhoc/experimental testing.
[08:27] Targeted/specific feature testing (I.E gathering
stats on ship performance).
[08:31] As a follow-on, what determines/changes this
allocation (I.E what determines if you need
[08:37] to increase time on regression or spend more
time on ad-hoc testing, etc)?
[08:40] VS: Well, as we’ve mentioned, it's largely
a moving target.
[08:43] You know, usually we have our set predetermined
tests that we’re going to do on every single
[08:48] build be it a smoke or a sandy check or something
like that, and whenever a new feature is developed
[08:53] of course we’re going to go through a gambit
of tests that are designed around that feature,
[08:57] but we’re also going to ad-hoc areas around
that feature, you know as it comes out.
[09:01] I would say it’s probably about 40% regression,
40% targetted, 30% ad-hoc, because you know
[09:10] QA, we give 110% every time.
[09:12] RV: 110%
[09:13] VS: Yes, that’s right.
[09:14] RV: So actually we were talking about this
earlier, cause like whenever bugs come in
[09:19] and, so we have a little thread in production
that’s like hey these are being flared out,
[09:23] and it’s mostly just production and QA that
are on these threads, and it’s like hey,
[09:26] this is the latest blocker, this is the latest
thing, whether it’s found through the community
[09:30] or whether it’s found just through us internally
testing and all that stuff, these are getting
[09:35] major priority, so as soon as these are sent
out the developers get it, and once the developers
[09:40] fix it, a producer’s basically hitting up
one of the leads like you saying hey, we just
[09:45] fixed this, here’s the change list…
[09:47] VS: Lets get some eyes on it, let's get some
bodies on it…
[09:49] RV: Exactly, and then people will just change
focus like that and just be like alright,
[09:52] we need this, we need this now, we need this
now, so yeah, it's like building in quicksand…
[09:56] VS: Pretty much, the situation is always fluid,
from one day to the next, from one hour to
[10:02] the next, cause all of a sudden someone will
come along with something new, and that all
[10:06] of a sudden takes priority and everything
else that you had gets shifted down a rung
[10:09] on the ladder and you have to get to it later.
[10:11] RV: Yeah, it’s always a lot of fun.
[10:12] VS: Fun is not quite the…
[10:16] no actually it is fun.
[10:18] RV: It’s a lot of fun.
[10:19] VS: It’s a lot of fun.
[10:21] RV: Alright, so next question is from Steve
Hunter...
[10:23] [10:24] Steve Hunter asks: When doing QA testing,
past resolved bugs are often retested to make
[10:27] sure that new fixes don’t cause them to
reoccur.
[10:30] As this would make the test list grow uncontrollably
large quickly, how do you decide when to no
[10:35] longer retest an old bug?
[10:37] And thanks for all the good work.
[10:39] RV: Thanks Steve!
[10:40] VS: This is actually a really good question.
[10:42] So when it comes to that, usually we focus
on areas that have been affected by recent
[10:45] code changes, like recently Mark McCall came
to me said hey, we’ve done a bunch of changes
[10:51] to landing gear, so that immediately tasks
us out to start focusing, checking all those
[10:56] old landing gear issues to make sure that
those don’t recur, because you know of the
[11:01] changes that he just implemented, to make
sure that previous fixes didn’t get stomped
[11:05] on by new changelists and so on.
[11:08] So i mean, that’s pretty much, we try to
stay focused on the things that’re in motion
[11:11] and are still changing, and then if something
hasn’t changed build after build after build,
[11:16] we’re not necessarily going to be looking
at all those old issues again.
[11:20] If they do return we’ll reopen them, but
we don’t necessarily focus on them.
[11:25] RV: Yeah and that’s the thing, it’s like
I know, once the bugs have been through their
[11:28] paces, they’ve been resolved and fixed,
once it hits a new area if we see it again
[11:32] we’ll check the database and be like, okay,
this is back, and in all honesty there’ve
[11:37] been some bugs, especially with landing gear
in particular that the landing gear comes
[11:40] back so many times
[11:42] VS: That’s why I brought it up, cause poor
Mark has been banging his head against the
[11:46] wall, I swear to god some of these bugs spend
time in the Lazarus Pit and rise up stronger
[11:52] than they were before, it’s just unbelievable
with some of them.
[11:55] RV: It is pretty crazy.
[11:56] [11:58] Far-Seeker asks: I know you have posted
some about this in your feedback threads already,
[12:01] but could you give us an overview of this
activity, especially anything that submitters
[12:04] can do to make the feedback more useful, as
well as more details on how this feedback
[12:08] will be communicated to and used by the rest
of the QA and the ship designers?
[12:12] VS: Yeah, so basically what I’m trying to
do is, because it seems like we are getting
[12:17] so much feedback, I mean I had pages and pages
and pages of feedback ...
[12:21] RV: Which sounds pretty awesome by the way.
[12:22] VS: It was very awesome.
[12:23] I mean the community is very passionate and
they gave us just tonnes of information but
[12:28] some of it was information overload for developers
and designers who are already working hard
[12:32] on new things.
[12:33] And they’re like “When am I going to get
time to parse through all this data?”
[12:36] So moving forward we’re going to try to
slow down the rate of those so that we give
[12:41] them more time with each ship for the most
part.
[12:43] RV: It’s still in the works like when we’re
actually going to be doing these I think,
[12:46] right?
[12:47] We still need numbers …
[12:48] VS: Yeah, we’re still breaking it down.
[12:49] Like I said, I was rapid fire, machinegun
style getting that stuff out.
[12:52] And now obviously that was a little too much,
so we’re going to try and slow it down a
[12:57] little bit.
[12:58] RV: Ambitions, rambunctious I might add.
[12:59] VS: Yes, yes.
[13:00] A little bit.
[13:01] A little bit overeager.
[13:02] I’m kind of new here, trying to make my
mark and I’ve got to impress guys like Randy
[13:05] every other day.
[13:06] RV: It’s true.
[13:07] It’s true.
[13:08] VS: I was trying to work on that.
[13:09] But as far as what details, just keep things
concise; keep things clear.
[13:18] Try to keep things within scope: we’re not
always looking for “Hey, please buff my
[13:22] favourite ship” type of stuff.
[13:24] You want to make sure you know exactly the
type of thing we’re looking for.
[13:27] Perhaps on my part I need to be a little more
clear as to what we’re asking for.
[13:31] Now we’ve even had some growing pains through
some of the threads wit that …
[13:33] RV: Yeah.
[13:34] That’s the thing with some of the other
stuff we were talking about earlier is I would
[13:38] love for people to break down the feedback
from different sections.
[13:40] VS: Definitely.
[13:41] RV: So even multiple post so that way like
“Hey, this is the arts posts on this”.
[13:44] So that way you give everything for art, break
it down to design, mechanics ...
[13:48] VS: Exactly.
[13:49] Mechanics, balance …
[13:50] RV: … to break it down as much as possible.
[13:51] Yeah, balance-wise like “Alright so I’m
flying a 300, I’m flying a 315, they’re
[13:56] almost the same ship but not really”.
[13:57] But then just breaking it down that thing
like as much as … don’t be as verbose.
[14:03] Clear, concise: definitely.
[14:06] But don’t be afraid to give more examples
or give, at least … because the examples
[14:12] you guys give, as well as just the detail
you guys can give us, anything is useful.
[14:17] VS: Yeah and I was pretty much amazed at the
detail because we had graphics …
[14:24] RV: Yeah!
[14:25] VS: Particularly for the 300, people were
like “Hey this is how the redesign could
[14:28] totally work” and I’m like “Is this
a resume?
[14:31] Is this a job application?
[14:32] Or is this just normal feedback?”.
[14:35] So the detail was crazy good in some regards
and then in others people are all like “Hey,
[14:41] give me a buff”.
[14:43] For the most part.
[14:44] I want, I want ...
[14:45] RV: Make this ship the most powerful.
[14:46] VS: … I want five gimbals on my ship!
[14:47] Or something like that.
[14:48] Those we don’t ...
[14:49] RV: I love those gimbals.
[14:50] VS: Hey who doesn’t?
[14:51] But for the most part as long as it is clear,
as long as it is concise.
[14:57] Keep things polite in the threads.
[14:58] If somebody says something you don’t agree
with, hey we’re all trying to make the best
[15:02] game together.
[15:03] That’s the great thing about our community
is we’re working together.
[15:05] RV: And honestly, the pointing out that thing,
if you guys have things different, varying
[15:09] opinions that is perfectly fine.
[15:11] We actually welcome that because then we see
different perspectives on how people are looking
[15:15] at the designs, how people are looking at
the ships, the role of the ship, everything.
[15:19] Any feedback is good feedback.
[15:20] VS: Yeah.
[15:21] RV: We can’t always act on everything and
we’re not going to be acting on it instantly
[15:24] so give us time because we’re still working
on things.
[15:26] We only have so many people to actually do
everything.
[15:29] VS: Yeah.
[15:30] And I’m going to try and make it easier
for the devs and designers to digest when
[15:34] it does come in.
[15:35] Try to get a top 5 bullet points and “Here’s
the rest of the report when you guy get around
[15:40] to it but these are major things that are
either really bothering the community or they’re
[15:45] really excited about getting implemented for
their particular favourite ships”.
[15:48] RV: It would be super useful.
[15:49] VS: Yeah.
[15:50] Very useful.
[15:51] All of it.
[15:52] [15:53] AragornBH asks: Since you have played
many hours of Star Citizen and know the games
[16:00] mechanics so well, what plans do you have
for yourself in the PU as a gamer?
[16:06] RV: So this is kind of a loaded question and
the reason why it’s loaded is because I
[16:10] really want to have kind of two personas when
I go out there.
[16:14] I want to do one where I’m a mercenary/pirate
and stuff like that and seriously just get
[16:18] in that whole clandestine thing and like be
on that black market.
[16:22] I think that would be hilariously fun cause
I never play that kind of character.
[16:25] Usually when I play an online game I’m either
support or a healer.
[16:29] Of course the other one I would play would
be a miner.
[16:32] Like when I played Eve, I was all about being
a miner and a trader.
[16:36] So I think that would be really cool.
[16:38] Just doing some mining, doing some cargo stuff,
that’s why I like when I was given the ship
[16:43] the Caterpillar...
[16:44] I was like all about it cause it had that
different mix of things that I was like, “I
[16:48] can do this”...
[16:49] VS: There you go.
[16:50] RV: I can do this.
[16:52] I’m actually looking really forward to just..
[16:53] VS: That sounds pretty good.
[16:54] RV: It’s going to change.
[16:56] VS: Like you said everything is like a moving
target but yeah that’s pretty good.
[17:00] I know once the game is out and I have one
mission in mind and that is to find Randy
[17:06] Vasquez and kill him.
[17:09] Pretty much.
[17:10] I mean, I like cutting you guys down, that’s
the most fun of the day…
[17:14] RV: I hate you in play test.
[17:16] VS: Completely destroying you guys in play
test is so much fun.
[17:19] RV: I can’t stand you so much in play test.
[17:20] VS: So once we’re actually out there I figure
I could be some sort of CIG bounty hunter
[17:24] and I’m just going around letting other
people know where CIG people are hanging out…
[17:28] RV: Hunting CIG people.
[17:29] VS: Maybe I can do some screen hacking.
[17:30] Then you know, “Hey guys, they’re over
here” and we swoop in and destroy you all.
[17:35] RV: I think we did a play test what is it,
a month or two ago, and basically I think
[17:39] it was McCall or might have been you I think
was like, “By the way guys, Vasquez is at
[17:45] Port Kariya’.
[17:46] VS: Oh yeah.
[17:47] RV: Next thing I know I had like four or five
ships coming in and I was like, “Oh God”
[17:51] and then I’m trying to hide from everybody.
[17:52] I shot at a few people but I think I shot
Jeremiah.
[17:55] VS: That’s what I’ll be, I’ll be an
information broker who then leaks out where
[18:00] CIG’s people are and then people can go
hunt them and have fun doing that.
[18:06] RV: Nice, nice.
[18:08] VS: Make a little you know…
[18:09] RV/VS: Money on the side.
[18:10] VS: A little bit.
[18:11] A QA salary isn’t exactly that great.
[18:12] [18:14] Space Is Nice asks: What is the priority
of developing things?
[18:18] Is it ships -> places -> economy.
[18:20] What takes priority over other things, like
shipping over ship buying or more to do in
[18:25] one place over more places to go?
[18:27] Thanks!
[18:28] RV: Alright so.
[18:31] As we’ve stated a few times, development
is always a moving target and priorities shift
[18:38] daily, if not sometimes hourly based on what’s
broken or what the fire is and stuff because
[18:44] we want to give you guys a stable game
[18:45] VS: Yeah
[18:46] RV: We need to give you guys, also QA a stable
game because...
[18:49] VS: Stable builds.
[18:50] RV: You guys can’t test if it’s not stable
[18:52] VS: Exactly
[18:53] RV: You guys testing in unstable environments
doesn’t help us because we don’t know
[18:55] if the bugs you’re giving us are actually
there.
[18:58] VS: And we can’t help you because someone
will be like “Hey will you check this, ” And
[19:01] it’s like “ Well we can’t check it because…”
[19:03] RV: So kind of to go off the questions like.
[19:06] Versus ships, versus levels, versus economy,
PU, mechanics, systems; we have so many people
[19:12] around the globe working on this game.
[19:15] Everyone has their own focus, everyone has
their own priorities.
[19:20] So we have an overall global organization
and then we have within that organization
[19:27] we have the different studios and then within
that we have the each individual teams were
[19:31] on something where they’re Designers, they’re
Artists, QA, Production, Engineers, Audio,
[19:38] Narrative.
[19:39] We have so many different aspects of this
that everyone is just all over the place all
[19:44] the time.
[19:45] There’s no ever a priority one thing over
another.
[19:48] Like for instance if Crusader is broken, then
that’s kind of a level design but also design,
[19:55] but it’s engineering, not so much Art so
that then becomes a focus for the select people.
[20:00] VS: Where as the Artists will still be working
on the stuff that they’re already working
[20:04] on.
[20:05] RV: Yeah, yup so they don’t change focus.
[20:06] Now if a ship is completely broken and a ship
needs to be redone due to this area, whether
[20:12] they need to be redone for LOD’s ship setup
issues.
[20:14] VS: Or a ship setup issue, LOD’s.
[20:16] RV: Then it’s like the tech designers or
artist, they’re shifting over to help with
[20:20] this and sometimes they need engineer support.
[20:23] It is a case by case basis on really what
the priority is and that is actually coming
[20:28] down from the community because every time
the community, like they’re yelling for
[20:33] something, they need something, they want
something, we’re taking that into account.
[20:37] Also the leadership team of CIG is also like
“Hey, so.”
[20:40] They’re kind of always playing the balance
game of, “Alright this is what the community
[20:44] wants and this is what they need, this is
the leadership team wants and needs,” and
[20:48] kind of just doing that balance game of, “This
is our priority for right now,” and it’s
[20:53] our priority until something else changes
and we still have like schedules that we’re
[20:57] working on, but then
[20:58] VS: We still have planned feature rollouts
and stuff like that as well
[21:00] RV: Yeah basically.
[21:01] VS: It’s just like you said things kind
of change up midstream every now and then.
[21:05] RV: Yup, it is what it is.
[21:09] [21:09] Daz asks: Hi Randy, can you share
some of both your own goals and the company
[21:15] goals in production this year.
[21:16] Is there a particular area you love working
on and are keen on improving?
[21:19] And what games features are we likely to see
in the short, medium term this year?
[21:25] RV: So this one for me myself I just want
to survive as a Producer.
[21:34] It is so different from a Designer.
[21:36] I’m enjoying it, it’s completely different.
[21:39] I’m really loving, I like the communication
aspect of it.
[21:42] VS: Yeah.
[21:43] Yeah you’re really good at communicating.
[21:44] Really good at communicating.
[21:45] I got an inbox full of your communication.
[21:49] RV: So I love that and I love facilitation.
[21:52] So basically making sure the team is taken
care of.
[21:55] going to everybody making sure they got everything
they need “Hey what’s up what do you guys
[21:59] need?”
[22:00] VS: Backrubs.
[22:01] Regular backrubs, come to Randy
[22:02] RV: Nice to know my numbers you may have saw
on the bathroom wall thanks
[22:05] VS: That could be a good and a bad thing
[22:09] RV: So i’m really enjoying that but what
I want to improve on though.
[22:14] I really want to get the ships pushed out.
[22:17] In a better timetable, I know we’re, we
push ships out and we’re letting you guys
[22:23] know when ships are hitting.
[22:25] And each ship is its own little special snowflake.
[22:28] So it’s been hard to nail that down because
each ship has its own mechanics, each ship
[22:32] has its own features
[22:33] VS: Then there’s those features that’s
tied to each of the ships.
[22:36] That need to be pushed out stuff like that.
[22:38] Like you said the shields and armour balance
that Callix and everybody has been working
[22:43] really hard on
[22:44] RV: Callix just finished that audit for the
shields
[22:45] VS: Just finished that whole audit for the
shields
[22:47] RV: And you had to do all the testing too
[22:48] VS: Yea I had to all the tests.
[22:52] Trying to get all those out would be really
good and help give us more a final picture
[22:56] of what the game’s going to be like, eventually.
[22:59] With each ship that comes down it’s alright
but that’s just a small piece of the greater
[23:04] puzzle
[23:05] RV: And that’s the thing.
[23:06] The audit you just worked on is part of something
bigger too because we’re doing, we’re
[23:09] redoing doing some of the shields and how
they work.
[23:11] Just cause it’s going to help optimise the
game overall.
[23:13] VS: And how lasers affect the shields, how
ballistics affect the shields
[23:16] RV: All that stuff is just being taken into
consideration.
[23:19] So the design’s changing a little bit.
[23:21] And it’s changing for the better and it’s
changing to make sure that players are given
[23:25] the proper feedback they need.
[23:27] As well as it has all the functionality necessary
things it has to have.
[23:33] Shields are just crazy integral to the whole
thing I think as a game.
[23:38] Especially for dog fighting.
[23:39] VS: Especially for dog fighting.
[23:40] Well I mean it’s hard to balance the ships
against each other when that system isn’t
[23:45] fully fleshed out just yet.
[23:46] RV: Where you around still when they had the
Constellation and the Hornet bug?
[23:50] VS: Yeah, yeah, yeah.
[23:51] I was one of the ones, the Hornet and the
Constellation were using the exact same shields.
[23:54] RV: That was crazy
[23:55] VS: That was a fun one
[23:57] RV: There’s so many things with shields.
[23:58] So yeah that’s a good example of something
we’re working on that’s going to be coming
[24:04] soon
[24:05] VS: Yep
[24:06] Outro:
[24:07] VS: I think that was all 10, wasn’t it?
[24:08] RV: Yeah, that’s 10 for us.
[24:09] VS: So that’s 10 for the Developers for
us today.
[24:11] Once again want to thank all the subscribers
and all the backers, everybody who makes this
[24:15] possible for us to do this.
[24:16] RV: Thank you so much.
[24:17] VS: I know maybe we weren’t quite as entertaining
as Tracy and Bender.
[24:21] RV: We cannot follow…
[24:22] VS: We were trying and would like to come
back and if you guys are into it.
[24:26] RV: If they’re into it.
[24:28] VS: If they’re into it, of course, everything
has to be consensual but you know… if we
[24:33] could come back it might be nice.
[24:37] RV: Yeah, it would be awesome.
[24:46] I always love talking to 
the community.
[24:57] VS: I always like this opportunity, this is
definitely something new for me and I’m
[25:07] enjoying it and you know, hitting the ground
running and hoping.
[25:11] RV: We’ll communicate later.
[25:15] VS: We’ll communicate later, yeah great.
[25:21] Thank you, more communication.

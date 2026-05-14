# Star Citizen: Calling All Devs - Persistence, Snub Craft and Landing Systems

**Video:** https://www.youtube.com/watch?v=j5D4newL3xM
**Date:** 2018-04-16
**Duration:** 13:04

## Transcript

[00:10] hey everybody and welcome to another
[00:13] edition of calling all Deb's our weekly
[00:14] Q&A series where I take questions from
[00:16] you the star citizen backer and posed
[00:18] them directly to our star citizen
[00:19] developers usually over Skype and
[00:21] usually with full motion video not last
[00:25] week's kabuki foo Mehdi featured
[00:27] notwithstanding joining us on the show
[00:30] this week our first question comes out
[00:32] of Manchester United Kingdom and we are
[00:35] calling John Crewe a lead technical
[00:38] designer out of that studio let's see if
[00:39] he picks up hello hello welcome back
[00:44] once again once again once again calling
[00:47] all devs
[00:48] you were lucky last last week your
[00:51] segment worked we had two questions were
[00:52] the video corrupted during the recording
[00:55] process and we had to do a slide show
[00:57] from Eddie comic for the thing it's
[00:59] anyway I thought it was kind of fun but
[01:02] ultimately it's a video so we're gonna
[01:04] do video so hopefully this video works
[01:05] alright John I've got two questions for
[01:07] you from the community topics I a topics
[01:11] that haven't had a lot of conversation
[01:13] about it which is nice you know you
[01:14] always get that mix of things that
[01:16] people have been asking for months and
[01:17] months and months and months and then
[01:18] sometimes you get stuff loaded up it's
[01:19] like that's an interesting one I don't
[01:20] think we've ever talked about that your
[01:23] first question is one of those questions
[01:25] that don't think we've talked about it
[01:26] says can ships docked inside a capital
[01:30] ship perform their function without
[01:32] taking off the examples they give our
[01:35] drone control scanning shooting it
[01:37] enemies to the open landing bay door etc
[01:39] etc etc so yes depending on what exactly
[01:45] it does I'm not going to say yes to
[01:48] everything but for the examples they're
[01:51] controlling drones there's nothing
[01:53] that's gonna stop you there shooting out
[01:55] the door nothing to stop you there in
[01:57] the instance of say a scanning ship that
[02:00] is docked inside capital ship that's
[02:03] probably not going to work as well as it
[02:06] would if it is out in open space because
[02:08] naturally it's inside a great big
[02:11] hulking lump of metal
[02:13] say yes within reason all right I mean I
[02:17] imagine even if even if it does work
[02:19] during the first implementation the
[02:22] early implementation that that does seem
[02:24] like something in a in a Dietetic
[02:27] universe you'd want to you'd want to air
[02:29] somehow yeah you don't want to have say
[02:33] 50 Terrapins inside a bengal Hoek being
[02:37] pushed around is this some sort of super
[02:39] scanning station what you don't want I'm
[02:42] sure somebody a share wants but that's
[02:44] the people on the receiving end we don't
[02:46] want that all right that's the terrible
[02:53] terrible arrest Russian nesting doll of
[02:54] scanners all right your next question it
[02:57] says ten questions yet - no - questions
[03:00] my friend when we get you we get you I'm
[03:04] an ass are there plans for landing aid
[03:08] systems examples like radio altimeter to
[03:11] display a real distance from my ship in
[03:12] the surface that I that people want to
[03:14] land on or even external cameras on the
[03:17] MFDs so for the the people that remember
[03:21] pre 3.0 we we actually had on the 3d
[03:27] radar when you went into landing mode
[03:29] you had sort of an assisted landing
[03:32] that's something we're going to be
[03:34] looking to bring back it was simply when
[03:35] the conversion to item 2.0 happened and
[03:37] all the cockpits got changed from their
[03:40] old UI system to register texture that
[03:43] was just something that just didn't fit
[03:44] on the schedule at the time so that's
[03:47] hopefully going to come back external
[03:49] cameras interesting the graphics guys
[03:54] sort of always pointing a gun to our
[03:56] head over render to texture on screens
[04:00] saying please don't do stuff like this
[04:03] so I don't want to do anything down that
[04:08] that lines it is a often talked about
[04:12] point when you say please don't do
[04:14] something you mean like unnecessarily or
[04:16] frivolously yes don't have 16 cameras
[04:19] yeah doing render to texture and a
[04:21] cockpit all points in different ways yes
[04:23] obviously everything has a performance
[04:25] cost and it's a choice and the choice
[04:27] is one more camera or getting another
[04:28] player in your in your your-your-your
[04:31] close field it's we're always gonna
[04:33] choose to have another player of course
[04:34] yeah all right man
[04:36] I think that's it you did good two
[04:39] questions about it being better boom
[04:40] I'll let you get back to work man all
[04:42] right then
[04:42] see ya later man all right thank you so
[04:45] much to John crew up next we're coming
[04:48] back here to a fraught with city we live
[04:52] in Los Angeles and our own mark abent
[04:54] senior gameplay super dude mark hey
[04:58] how's it going Jarrod good I thank you
[05:01] for taking the time to be on the show
[05:02] here sure um I got a question for you
[05:05] about it I think this person might be
[05:09] trying to sitcom us the location markers
[05:12] on planets do not display in a different
[05:14] color orange when they are on the other
[05:17] side of the planet what are the
[05:18] technical challenges preventing this are
[05:21] they supposed to appear in orange is
[05:23] this person just that's my knowledge
[05:25] you're not supposed to be changing a
[05:27] different color but we do have a fun
[05:29] issue where when you get into the planet
[05:31] we tend to show everything uh-huh and
[05:33] that's just an unfortunate side-effect
[05:36] we do have some plans to alleviate that
[05:38] with some sort of hierarchy of what
[05:43] should be shown when and where can't get
[05:47] too much into detail on that because the
[05:49] design is still getting flushed out on
[05:50] that but I know I saw on I think we're
[05:53] gonna read it they're talking about some
[05:55] kind of planetary grid to show different
[05:57] points and it's kind of a similar thing
[05:59] but as we get closer we'll show you more
[06:02] of what that is as for what the color is
[06:04] yeah I think the community is trying to
[06:07] add a little I guess did you call it
[06:09] sitcom us but that's your suggestion
[06:12] back doors yeah it's I think it's very
[06:16] safe to say we're a world where we're
[06:18] aware that when you approach a planet or
[06:20] where you're when you're in the vicinity
[06:21] of a planet that all the points are
[06:22] showing up and it's very difficult to
[06:24] tell which ones are actually on the side
[06:26] that you're facing which ones are on the
[06:27] other side we're aware of that I've
[06:29] talked to a couple people not just you
[06:31] we do have a couple ideas that were that
[06:34] we're pursuing basically it's like it's
[06:36] like an American glad
[06:37] we throw a couple ideas into the pot and
[06:39] they all fight each other and the one
[06:40] that we think will work best as the
[06:41] women we pursue you will hear more about
[06:44] this almost certainly in an a TV segment
[06:47] either in a project update or a studio
[06:50] update segment on HTV when we have more
[06:52] but we are aware of it we have plans to
[06:55] work on it we are pursuing a solution
[06:57] just not specifically turning them
[07:01] orange it's yes I can to address the
[07:04] idea that we show too much although
[07:07] although we say this now and six months
[07:09] from now they're going to end up being
[07:10] turned orange or gonna be like an orange
[07:14] we could be like hey that was a good
[07:16] idea good job person's job person I
[07:19] think thank you so much Marc I'll let
[07:21] you get back to work sir thank you
[07:22] take care all right Thank You Marc now
[07:25] we are going on the opposite side of
[07:27] Mike's test basically if you if your
[07:29] stand out marks desk and you looked over
[07:30] their side you'd see Chad McKinney lead
[07:33] gameplay engineer here in our Los
[07:35] Angeles studio
[07:36] Chad how you doing man hey jae-joon well
[07:39] I I know thank you for being on the show
[07:42] I know you've got it you got some some
[07:43] Scratchy going on a little bit of a cold
[07:46] it's not too bad then yeah all right
[07:47] so your question popular one this is the
[07:50] most voted on question for all of a
[07:53] prolonged up really fast well over 300
[07:58] votes what's happening with persistence
[08:01] ships and cargo are lost upon crashes
[08:04] and disconnections weren't ships
[08:05] supposed to persist since 3.0 is the
[08:08] absence of persistence considered a bug
[08:10] or is persistence an upcoming feature so
[08:15] there's a couple things there
[08:17] persistence is a really broad thing and
[08:20] so persistence has been in the game for
[08:22] some time and with reprint oh and three
[08:24] point one we've greatly increased the
[08:26] amount of features that are persistent
[08:28] ship persistence is something that is
[08:31] also greatly increasing its persistence
[08:33] but I think here this question is really
[08:35] getting at persistence kind of
[08:38] mid-flight and so what we've been
[08:40] working on is something called a client
[08:42] crash recovery system to try to address
[08:45] the problems that happen when you've
[08:48] crashed or suddenly disconnected
[08:51] mid travel so usually we have some kind
[08:54] of persistent saving that happens at key
[08:56] points turn game plays so that'll be for
[08:59] instance whenever you land somewhere or
[09:00] sell cargo or claim insurance things
[09:04] like that but if you're just flying
[09:06] previously when we weren't really
[09:08] tracking the ship accurately but with
[09:10] this new system we're gonna be doing
[09:12] that better at the moment the latest
[09:15] changes to that are in PTU testing right
[09:17] now and should be out in the three point
[09:19] one point two patch and so hopefully
[09:21] that should help address a lot of these
[09:23] concerns right now this was we've spoken
[09:27] a little bit of this this this also
[09:28] relates to the insurance expedition
[09:32] expedition fee explanation expediting
[09:34] fee experience expertise fee these these
[09:36] two things one on one we're supposed or
[09:38] supposed to work together and and it got
[09:40] pushed from the 3.0 3.1 billed and
[09:44] fortunately didn't make the cut in time
[09:45] but and that caused a number of issues
[09:47] as I don't think I would have to tell
[09:49] the community but but it is in three one
[09:52] two it is in testing right now on the
[09:54] PTU so hopefully that will be out into
[09:56] everybody's hands maybe even by the time
[09:59] you see this episode sure so I mean and
[10:02] and again with everything this is a hard
[10:04] problem so I maybe it doesn't work a
[10:07] hundred percent on this time or not but
[10:10] it does the changes that we've made most
[10:12] recently to try to address this issue
[10:13] will be going in so cool and as I said
[10:17] if it doesn't if it's not 100% with
[10:19] everyone - we'll continue to iterate
[10:21] I'll continue to work on it after that
[10:22] exactly all right man that's it I'll let
[10:25] you get back to work thank you so much
[10:26] bye - all right for our last question of
[10:30] the show this is one actually for me
[10:32] being the the ship guy here in the
[10:34] office at the moment the 600 I and the
[10:37] Phoenix are on the roadmap for this year
[10:39] but we have not heard of the Rovers that
[10:41] are supposed to come with these ships
[10:42] are these Rovers developed at the same
[10:44] time the ships are or are they
[10:45] completely separate pipeline well
[10:47] they're not a separate pipeline all
[10:49] ships and vehicles go through the same
[10:51] pipeline but they are indeed separate
[10:53] vehicles when we provide you when we
[10:56] provide opportunities to pledge these
[10:57] ships through a promotion program you
[10:59] can you can pledge for the Phoenix and
[11:01] the Lynx you can pledge for the carrick
[11:04] and the
[11:04] you can pledge for the Andromeda and the
[11:06] Merlin but but as far as our development
[11:09] they are separate ships just like when
[11:11] you go to the ESOP terminal you can
[11:13] spawn them as separate items so they are
[11:15] developed separately they are not
[11:17] developed one in the same you'll know
[11:19] that the the Merlin was developed
[11:21] separately from the Andromeda is your
[11:24] best example if you've been following
[11:25] the project for a while so when the time
[11:28] comes the the rover will be developed to
[11:30] the origin Rover the the what was the
[11:32] other one they have a niche I think they
[11:33] mentioned the links are over instead
[11:34] they are developed separately so they
[11:37] are not currently on the on the on the
[11:39] roadmap right now because they are not
[11:40] currently slated to be developed within
[11:43] 2018 but rest assured
[11:45] just like the Merlin before it and just
[11:48] like the Archimedes and the Pisces and
[11:50] the links and everything else to go
[11:51] after they will be developed just the
[11:54] same as any other ship it's just a
[11:56] matter of resources and schedules and
[11:58] priorities and all that jazz so that's
[12:02] it and with that we wrap up this week's
[12:04] calling all Deb's I hope you enjoyed it
[12:07] remember that you can submit your
[12:08] questions for consideration each and
[12:10] every week up on the thread up on
[12:11] spectrum and don't forget to vote
[12:14] that's the two-prong thing you got to
[12:15] submit your questions and you got a vote
[12:16] for the questions that way we know which
[12:18] ones you want to see answered most each
[12:20] and every week so for calling all Deb's
[12:22] on Content Manager for global video
[12:24] production Jared Huckaby I apologize for
[12:26] hitting the table and bouncing the
[12:27] camera just now I'll see you next week
[12:29] everybody
[12:44] thanks for watching for the latest and
[12:46] greatest in star citizen squadron 42 you
[12:48] can subscribe to our Channel or you can
[12:50] check out some of the other shows and
[12:51] you can also head to our website at

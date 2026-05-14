# Star Citizen: Calling All Devs - Persistence and Scanning

**Video:** https://www.youtube.com/watch?v=BIJtzjUsf08
**Date:** 2018-02-19
**Duration:** 20:00

## Transcript

[00:10] welcome everybody to another edition of
[00:13] calling all depths are relatively new
[00:15] now weekly Q&A program where we take
[00:17] questions submitted by you the star
[00:18] system backer voted on by you the star
[00:21] system backer asked by me the star
[00:23] citizen content manager imposed to our
[00:25] developers the star citizen developers
[00:27] yes it's a joke I'm never gonna get
[00:29] tired of let's just jump right into
[00:31] things shall we so for our first
[00:33] question the first question voted on and
[00:35] submitted by backers we are calling
[00:37] who's one of the rebels become a a
[00:39] calling all devs all-star mr. Chad
[00:42] McKinney here in Los Angeles - yeah Chad
[00:45] how you doing man mm doing well welcome
[00:48] back good to be back alright cuz we are
[00:50] starting off with you we've got a
[00:52] question here one of the most voted on
[00:55] questions in the in our February thread
[00:57] we put up a new thread every single
[00:58] month this rose to the top very quickly
[01:01] when will persistence log in but alright
[01:06] no okay when will persistence log us
[01:08] into the same location where we logged
[01:10] out like ships outpost stations etc yeah
[01:14] okay so this is a bug that actually we
[01:17] knew about before even going to evocati
[01:19] this actually did work at one point by
[01:22] there were some changes there's actually
[01:25] quite a few changes that I happened to
[01:27] persistence and the way that we handle
[01:29] persistent data throughout 3.0 release
[01:31] and it was just one of those bugs that
[01:35] we knew about clearly identified hadn't
[01:37] repros and everything for it we just
[01:39] didn't have the time to dedicate to fix
[01:42] it was one of those things that we
[01:43] decided that it was okay to let slip for
[01:45] this particular release and we are
[01:47] absolutely going to fix it for 3.1 we
[01:51] did release a follow-up patch in through
[01:54] point 0.1 that solved it in part there
[01:57] was actually a large amount of
[01:58] persistent data regarding the player
[02:00] that wasn't getting sent to the game
[02:02] server whenever a player would log in
[02:04] and it would make it to where there's
[02:05] certain persistent behaviors that
[02:07] wouldn't track across servers that has
[02:10] been fixed but it doesn't completely fix
[02:11] this particular issue
[02:13] so we just need to actually dedicate the
[02:16] time to it to actually investigate it
[02:18] and and fully kill it off but yeah this
[02:21] is is something we've known about and
[02:23] we're absolutely gonna fix it for the
[02:25] next release all right so just just to
[02:27] clarify it's actually not a feature
[02:29] we're waiting to implement it's
[02:30] something that's supposed to be in now
[02:31] it's it's a bug that this doesn't happen
[02:33] both just like um like say you whatever
[02:39] signed out Levski you would expect you
[02:42] respawn and I love ski but also the the
[02:44] ship's spawning feature our logging off
[02:48] feature that we added in that and
[02:49] certain ships you can you can log off
[02:51] and the middle of space and then
[02:54] actually we log in and be back where you
[02:56] were in the middle of space and so that
[02:58] is something that we worked on and was
[03:00] actually working it was actually kind of
[03:02] a Rube Goldberg machine of persistent
[03:06] data I'd like to get this thing to come
[03:07] together and we actually had it working
[03:09] but then it broke unfortunately but yeah
[03:12] we'll get it working again one of the
[03:14] perils of running a live game
[03:15] environment in the middle of game
[03:17] development I do want to I do want to
[03:19] add one more thing just just to cover
[03:20] your butt a little bit you said it'll
[03:21] definitely be in for 3.1 I want to say
[03:24] that is our intention to have it in it
[03:26] is definitely our intention to have it
[03:28] in for 3-4 but just like we didn't let
[03:30] us stop yeah we're going out we're not
[03:32] gonna let it stop that's right
[03:34] we'll always identify what really has to
[03:38] be in the Minimum Viable Product for the
[03:39] release if this ends up being cut again
[03:42] it's not because we didn't know about it
[03:44] or slipped through the cracks is because
[03:45] we felt like there was some other more
[03:47] critical features that we needed to give
[03:49] attention to always with the priorities
[03:51] all right Chad thank you so much for
[03:53] your time I'll let you get back to work
[03:54] Thanks all right thank you so much for
[03:57] that so for our next call well I'm not
[04:01] gonna call anybody for this one I the
[04:03] next question that has been submitted by
[04:04] you guys the backers and voted on by you
[04:06] is actually how are the mechanics for
[04:09] multiple character slots gonna work and
[04:11] I'm actually gonna fill that one myself
[04:12] for in for a couple reasons one we run
[04:15] these things we make these shows calling
[04:17] all devs reverse the verse around the
[04:19] verse we are doing this in the middle of
[04:20] active game development one of the
[04:23] challenges of that is
[04:24] in the middle of active game development
[04:26] you are still developing things and one
[04:29] of the things you're developing are the
[04:30] answers to these questions now you'll
[04:32] see a lot of comments from chris Roberts
[04:33] over the years on either 10 for the
[04:35] chairman or women saying or 80b
[04:36] where he'll share ideas of how he wants
[04:40] that system to work we've mentioned the
[04:42] past that's a good use for multiple game
[04:45] packages basically you know every game
[04:47] package you have equates to a character
[04:49] slide and of course then the possibility
[04:51] of selling additional character slots
[04:52] these are still things that we are open
[04:55] to exploring but right now there are no
[04:58] plans to implement a multiple character
[05:00] slot system in 2018 that's something
[05:03] that's a little further out on the
[05:04] schedule so because it's a little
[05:06] further out in the schedule we don't
[05:08] have the locked-down
[05:09] answers for that system no it's simply a
[05:12] matter of priorities so yeah so there's
[05:15] basically nobody for me to call on that
[05:17] one I didn't want to ignore I didn't
[05:18] want to just skip over it's a good
[05:19] question it comes up quite often you
[05:21] guys submitted it and you voted it up so
[05:24] I wanted to address it this is just
[05:26] unfortunately the only answer that's
[05:28] available for this so for our next call
[05:30] we are going back to the UK for a
[05:32] question about scheming and my favorite
[05:35] x-wing and Patriot mr. will will how you
[05:39] doing man hey Jared I was a guy that's
[05:42] doing well I'm much better than my
[05:44] getting over pneumonia
[05:46] turns out oh it was my son oh I went to
[05:49] the I went to the doctor and it's like
[05:50] hey you know I'm not getting over this
[05:52] you know Zoli got bunch of fluid in your
[05:53] lungs but you're pretty much over it
[05:56] over the money I had pneumonia how much
[06:00] fluid in my lungs excuse me did that I
[06:03] didn't ask that I didn't think to ask
[06:04] that okay so you're a question from the
[06:07] backers this week go
[06:09] scanning mechanics are scanning
[06:12] mechanics beyond Salvage in the work so
[06:14] he doesn't want to know about scanning
[06:15] mechanics with salvage it's like they
[06:19] want snow beyond Salvage our scanning
[06:21] mechanics in the work and if so what
[06:24] patch are they planned for a one
[06:27] question they when questions to the left
[06:30] please yeah okay yeah
[06:33] beyond Salvage absolutely scanning is
[06:36] it's in the process at the moment we're
[06:38] getting the baseline of what scanning is
[06:40] Kirk's team in LA are doing great work
[06:42] and just kind of getting that delivered
[06:44] but if you don't want to know about how
[06:47] we scan other ships just in general it's
[06:49] good throw it in there he says he
[06:51] doesn't want to know but I want to well
[06:52] no I mean we've got Salvage but that's
[06:54] different to just normal scanning anyway
[06:56] so we've got your normal scanning which
[06:58] is seer ship I don't know who that is
[07:00] I'm gonna see what's inside Kai thing
[07:03] which pirates will be using and which
[07:05] everyone be using so which is and we've
[07:08] got to kind of all scanning is made up
[07:10] of two parts
[07:11] we've got location and then we've got
[07:13] analysis so you'll ping and you'll
[07:17] identify with the radars or something's
[07:19] over there and that's worth my interest
[07:21] and so I'm going to go over there and
[07:22] then when you get the thing that you
[07:24] wanted to know about you'll scan it and
[07:27] you'll analyze it and you'll get a
[07:29] readout of what's inside and so that's
[07:30] kind of the fundamental of how all
[07:33] scanning is going to be you locate and
[07:35] you analyze so for salvage even though
[07:38] you wouldn't want to know about it for
[07:39] salvage you will locate their links and
[07:41] you will scan it and you'll find out
[07:43] what metals it's made up of and how I
[07:45] can use this to strip it for parts and
[07:48] then when you're and so other things
[07:51] we're looking at in the near future will
[07:53] be mining and that's coming through and
[07:55] so for mining we will be locating
[07:57] deposits of resources I want to go over
[08:00] there too to break up these duh stories
[08:03] or that field or whatever and then when
[08:06] you get there you can analyze these
[08:08] rocks analyze the ground analyze the
[08:09] asteroids and see okay this has got crud
[08:13] that I don't need there's too much waste
[08:15] in here this is a thick vein of gold or
[08:18] something so yeah we'll again taking the
[08:22] same phrase to the location and analysis
[08:24] and that's yeah that's what we're
[08:26] looking at but I can't really say when
[08:27] that's coming through but that's where
[08:28] our heads are at the moment with we've
[08:30] both salvaged and mining yeah and just
[08:32] to just to tack on to the one question I
[08:34] know where we're having a little fun
[08:35] here it's because the people who are
[08:37] developing these features and when I
[08:38] they're not production aren't
[08:40] responsible for the scheduling stuff
[08:41] they they do they're they do their work
[08:43] and so I so it's it's one of those
[08:45] reasons when we have the thing that
[08:46] submit your questions it says don't
[08:47] specify for different people preferred
[08:49] tumors only ask one question per thing
[08:51] it's the
[08:51] people that can tell us about a thing
[08:53] are usually not the people that can tell
[08:54] us the win of a thing that's different
[08:55] departments oh yeah so I figured the
[08:59] thing that you want to know more about
[08:59] is how it's gonna work anyway because
[09:01] the answer to almost every one question
[09:03] is when it's ready yeah but yeah that's
[09:06] where these will be the first
[09:08] implementations of the system so yes all
[09:11] right so thanks well I'll let you get
[09:13] back to work
[09:13] nice um take it easy man like alright
[09:16] thank you so much we'll maiden for our
[09:19] next question you know we've got our
[09:21] shipshape show and we do ship
[09:23] information there but people keep
[09:24] submitting questions for calling all
[09:26] devs and you guys keep voting it so
[09:28] we're cat working that we're gonna we're
[09:29] gonna take a question for this and for
[09:31] this one I am calling a good friend Kirk
[09:33] to me here in our Los Angeles New York
[09:35] arc how you doing my friend
[09:37] oh hey jerk how's it going good good
[09:40] good I thank you for taking the time to
[09:42] be on the show again
[09:42] sure no problem I've got a question for
[09:45] you I'm pretty sure I already know the
[09:46] answer but they voted it I'm posing it
[09:48] to you the question is simply any news
[09:51] at all about the band new merchantman
[09:54] the merchantman um so a little bit of
[09:58] bad news
[09:59] and that it's effective fortunately not
[10:02] on the active ship development scheduled
[10:04] for 2018 last year we did commissioned
[10:08] an external artist to do some concept
[10:10] art for us which was delivered and we
[10:12] approved and we're just under resourced
[10:17] at the moment to be able to move it into
[10:19] the 2018 schedule so as soon as we get
[10:22] those resources freed up bomb will begin
[10:26] to schedule working on it and get it
[10:29] released to the community as soon as we
[10:31] can
[10:32] and I'm sure that when we do get those
[10:37] resources and freed up and start working
[10:40] on it that he'll definitely a fun
[10:41] community yes good be sure the very
[10:45] first shipshape when this happens will
[10:48] be me running from the camera so I
[10:51] obviously we're working on as many ships
[10:53] as we can at the moment there and we're
[10:55] just booked up in the since so many
[10:58] resources are required to get ships in
[11:01] the game
[11:02] is that everyone working at one percent
[11:05] I wonder you want to follow up on that
[11:07] you mentioned that we that we did
[11:09] through some outsource constant work
[11:11] last year we've actually shown that
[11:13] those images that you saw those images
[11:14] on around the first last year when we
[11:16] did features on the band knew in the
[11:17] band knew a defender we wanted to flush
[11:20] out more of the the band new style guide
[11:21] and when developed in the bedroom so the
[11:23] defender so yeah you guys have seen
[11:25] everything that exists for the banding
[11:27] merchantman at this time so like like
[11:31] Erick said when when it's time on the
[11:32] development wheel comes up you can be
[11:34] darn certain that I'll be right there on
[11:37] on a on a shipshape Dylan you guys so
[11:39] thank you so much Kirk thank you for
[11:40] your time sir no problem all right okay
[11:44] and so for our last question of the show
[11:47] this week we have a question here that's
[11:49] perfect for one of our community
[11:51] managers actually so I'm going to call
[11:53] lead community manager out of our Austin
[11:54] Texas studio mr. tyler witkin
[11:58] [Music]
[11:59] reclaimer sorry hi hey Jared good to see
[12:03] you I'm sorry I know it's cooler than
[12:08] anything I have in the entire fan game I
[12:10] mean I'm not purposely putting it in the
[12:12] frame to show that off to you or
[12:13] anything and of course the reclaimer
[12:17] coming in 3.1 so where's the plug nice
[12:21] plug that's what I do I'm a shill on
[12:23] Michelle all right so I have a question
[12:25] for you from the from the backers voted
[12:28] up on spectrum your question for this
[12:30] week is why why why why do I have to go
[12:34] to Reddit to Twitter to Facebook to find
[12:36] official information that should have
[12:38] been posted on spectrum okay that's a
[12:41] good question I'm surprised it wasn't
[12:43] about the Carrick in one way or another
[12:44] but let's also tell me about the carrots
[12:47] yeah I was waiting for that bit okay so
[12:51] that's a really good question so one of
[12:53] the things we like to do with our
[12:54] communication style is to be adaptive to
[12:57] some degree so what that means is while
[13:00] spectrum has a lot of good information
[13:02] announcements ask a dev or even
[13:04] frequently developers hanging out in the
[13:05] live chats you know discussing mechanics
[13:07] or accepting the latest feedback we also
[13:10] work to provide information on a variety
[13:12] of other platforms that our community
[13:15] uses as
[13:16] now the reason we do this is because
[13:18] everybody absorbs information in
[13:19] different ways while one person may
[13:22] prefer a text posts another prefers a
[13:23] video and another may prefer something
[13:25] more interactive like a live stream so
[13:29] what we try to do is utilize all the
[13:31] tools that we have in our belt to be as
[13:34] accommodating as possible for everyone
[13:37] in our community and so what this allows
[13:39] is actually some really cool things like
[13:41] getting to send developers to community
[13:43] ran events like British and con bars
[13:46] citizens getting to do a cool article in
[13:49] a magazine just to really you know reach
[13:51] everyone in our community in a variety
[13:53] just drop to the buccaneer off the
[13:54] reclaimer hughes middle of salvaging it
[13:56] here hold that anyways anyways so we
[14:01] have we do a lot of cool things like for
[14:03] example a lot of our developers will
[14:04] take the time to actually go on our
[14:06] community's podcasts and videos and so
[14:09] yeah I mean that's really what it comes
[14:10] down to is it's not that we don't use
[14:13] spectrum it's not that we don't use
[14:14] Facebook or Twitter it's that we try to
[14:17] use a variety of ways to communicate for
[14:19] example a number of shows like this one
[14:22] so information is everywhere and we try
[14:26] to be accommodating yeah and a lot of
[14:29] the information that you see on Twitter
[14:31] or Facebook or is a repurposed
[14:34] information that is thought that was
[14:35] presented elsewhere either in one of our
[14:36] videos or on a spectrum post and yeah so
[14:39] it's it's it's it's reaching out to as
[14:41] many people in as many different
[14:42] platforms as we can and I think it's
[14:44] served us very well over the last couple
[14:45] years so yeah and of course there anyway
[14:49] it's like you don't spend time on
[14:50] spectrum you talked to Matt Sherman
[14:52] phantom of spectrum I was going to say I
[14:54] mean that sue comes to mind with as you
[14:56] think about spectrum chat they line up
[14:58] in the rafters of spectrum wait waiting
[15:00] for somebody to say something and
[15:02] rappelling down and saying ah here's the
[15:04] information and it's funny you mentioned
[15:06] information coming from reddit well
[15:08] we're not actively posting information
[15:10] on write and a lot of the information
[15:12] that you may see on reddit comes from
[15:14] places like our videos our streams Matt
[15:17] Sherman our you know on spectrum so yeah
[15:19] talk to talk to will maiden about yeah I
[15:22] posted on spectra but the blow-up before
[15:24] it happened on reddit so our community
[15:26] is such an important part of
[15:28] disseminating our message
[15:29] you know and and and a lot of the stuff
[15:31] gets repurposed to all those things so
[15:33] we use everything we use everything in
[15:35] every way in every shape that we can and
[15:37] then I think we'll continue to do that
[15:39] in the future because it served us so
[15:40] long now you said something about people
[15:42] showing up on on podcast I understand
[15:45] that you're working on something to tell
[15:46] facilitate that oh yeah yeah sure yeah
[15:53] that's a good idea I think now's a good
[15:54] time
[15:55] so in the past we've had opportunities
[15:57] given to our developers and to CAG staff
[16:01] to appear on various YouTube videos or
[16:03] live streams for members of our
[16:05] community now as our community continues
[16:09] to grow so does the need for us to
[16:10] streamline this process and so this is
[16:13] actually really exciting so in the past
[16:15] the way it's worked is people from our
[16:17] community would you know tweet at us or
[16:19] send in a support ticket or try
[16:20] whichever Avenue they could possibly get
[16:22] through to see if they could get
[16:24] somebody from CAG to appear on their
[16:26] show and what we've realized is that we
[16:28] we love that we're getting invited to do
[16:31] these things we want to do them more so
[16:33] we're gonna help facilitate an organized
[16:35] process to do just that so coming soon
[16:38] TM to the website is something we've
[16:41] been working on which is an invite a
[16:42] Developer Forum and what this basically
[16:44] is this is an opportunity for you to
[16:46] fill out a form that says you know hey
[16:47] what's the name your show what do you
[16:49] guys all about what's your scheduling
[16:50] like because obviously scheduling is
[16:52] super important our goal is for this
[16:54] process to not impact the games
[16:55] development in any way so much so that a
[16:58] lot of our developers are going to be
[17:00] doing this in their free time after
[17:02] hours just because they want to which is
[17:05] really cool but in this form you'll also
[17:07] be able to request things like let's say
[17:09] that your live stream is going to be all
[17:11] about environment art or procedural
[17:13] planet technology well you can actually
[17:15] put in the type of discipline that
[17:17] you're hoping to get from CI G to appear
[17:20] in your show and we'll take them into
[17:22] consideration now of course as a
[17:23] disclaimer I have to say there's no
[17:25] guarantee that we're going to be able to
[17:26] accommodate every single request that
[17:28] comes in but I will say that our goal is
[17:30] to be more accommodating than we were
[17:32] before this is going to help us by
[17:34] taking all the information all the
[17:36] invitations all the requests being able
[17:38] to put it in one place for us to really
[17:39] evaluate how much can we do how
[17:41] frequently can we do it and for us
[17:43] to make this process better so that we
[17:45] can get more involved and be more
[17:47] engaged with all of you yes thank you
[17:50] for putting that disclaimer in there of
[17:51] course it's always there that the
[17:53] highest priority has to be their work on
[17:55] the game
[17:56] absolutely that but uh but no I think I
[17:58] think it'll be I think it'll be a good
[17:59] step towards uh towards reaching even
[18:02] more communication platforms
[18:04] than we currently do now so yeah all
[18:07] right man thank you push the reclaimer
[18:09] back away from the edge of the desk I've
[18:10] watched you almost hit it like four
[18:12] times in the middle of this conversation
[18:15] it's or you could just send it to me
[18:22] Jared I'm sorry I can't hear you over
[18:24] the sound of my reclaimer thanks for
[18:28] having me Jared all right and with that
[18:32] that wraps up another episode of calling
[18:34] all deaths I hope you enjoyed it
[18:35] remember that you can submit your
[18:37] questions for consideration each and
[18:39] every week in the thread up on spectrum
[18:42] and don't forget to vote that is the two
[18:44] pronged process I say this every week
[18:46] you got to submit the questions and you
[18:48] got a vote on the questions and then and
[18:50] then I'll find the developers that are
[18:52] available to answer you know that which
[18:54] let's meet let me add that there if
[18:56] people like hey you skipped that
[18:57] question you know it's all the way up at
[18:58] the top there's not always a developer
[19:01] that's available to answer the question
[19:03] it's it's a it's a it's a mix of things
[19:04] I do my best obviously just like with
[19:07] today's show with the question about the
[19:09] the the character slots there wasn't a
[19:12] developer for that right now because
[19:14] it's not in active development so do my
[19:16] best not to not to avoid it to give you
[19:17] the information that's available but
[19:19] sometimes when I know there's a
[19:20] development I've developed it's perfect
[19:22] for it but they're not available this
[19:23] week we'll put it off for another week
[19:25] but rest assured we will get to that
[19:27] question it's always a always a shell
[19:30] game of priority so for calling all
[19:32] Deb's I'm content manager for global
[19:34] video production Jared Huckaby and we'll
[19:36] see you next week everybody
[19:37] thank you for watching so if you want to
[19:39] keep it with the latest and greatest in
[19:40] the star citizen of squadron 42
[19:42] development please follow us on our
[19:43] social media channels see you soon
[19:46] you

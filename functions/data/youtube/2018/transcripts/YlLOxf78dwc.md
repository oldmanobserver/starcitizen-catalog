# Star Citizen: Reverse the Verse LIVE - Scanning and YOU

**Video:** https://www.youtube.com/watch?v=YlLOxf78dwc
**Date:** 2018-06-01
**Duration:** 1:03:43

## Transcript

[00:11] greetings citizens and welcome to
[00:13] another all-new edition of reverse the
[00:15] verse live the only show whose season
[00:17] taco meat filling tastes exactly better
[00:20] than the real thing
[00:21] I'm your host Content Manager Jared
[00:24] Huckaby
[00:24] on the show this week we've got Kirk til
[00:26] May and Mark Aben on the show to discuss
[00:29] all things scanning and radar with
[00:31] regards to squadron 42 and the
[00:33] persistent universe in this special
[00:35] subscribers edition show now for those
[00:38] of you who don't know what a subscribers
[00:39] edition RTV is that's one of 12 shows a
[00:42] year where we open the forums to
[00:44] questions exclusively from our
[00:46] development subscribers now to find out
[00:48] more about becoming a subscriber you can
[00:50] do so at robert's space industries comm
[00:52] slash pledge slash subscriptions but
[00:55] before we get to that let's go ahead and
[00:56] check out our Week in Review
[00:58] now last week we had Jeremiah league
[01:00] Corey Johnson engage Holman from the
[01:02] character art team here to discuss their
[01:05] work updating our legacy armors and how
[01:07] they go about clothing and designing the
[01:09] characters of the star citizen universe
[01:11] now as always it was a delight to have
[01:13] Corey engage on the show and they're
[01:16] welcome back any time they want to
[01:17] return over the weekend we had a special
[01:21] misc razor promotion with the e^x and LX
[01:24] black and white variants now it's a
[01:26] good-looking ship from our UK sheep ship
[01:28] team and stylish additions to star
[01:29] citizens ever-expanding lineup of
[01:31] spacecraft now I think there are small
[01:33] handful of variants with exclusive
[01:35] serial numbers still available but it's
[01:37] also possible they've disappeared in the
[01:39] time that I've been doing this so check
[01:41] the website now to find out more Monday
[01:43] salt with it the release of another
[01:45] episode of our weekly question and
[01:46] answer series show calling all deaths
[01:48] focused on player facing ship modularity
[01:51] user interface updates why ships come
[01:54] dirty and if we're going to be stuck in
[01:56] our seats during quantum travel for the
[01:58] rest of our lives
[01:59] calling all devs is your chance to
[02:01] submit questions and vote on which ones
[02:03] you want to anse want to see answered
[02:04] each and every week so you know check
[02:06] that out Tuesday was Laura day in the
[02:09] star citizen universe and this week's
[02:10] post featured a new edition
[02:12] the plain truth series of articles
[02:14] called the fair chance fail where hosts
[02:16] Park Otero visited an old scandal to
[02:18] expose the ue e ue government and its
[02:21] failure to protect oh so - oh so - which
[02:24] was also which was recently featured on
[02:25] an episode of Laura makers guide to the
[02:27] galaxy it's writers man they love making
[02:30] crap up Wednesday was the last day to
[02:32] submit entries to our arena commander
[02:34] and star marine tutorial contest which
[02:36] saw lots of great submissions as well as
[02:39] some we're just gonna call them
[02:41] additional submissions it was a fun
[02:43] chance to earn yourself some free ships
[02:44] and help the continuing development of
[02:46] star citizen in the process I keep an
[02:48] eye on spectrum for the announcement of
[02:49] who won once voting has concluded
[02:52] finally Thursday was the latest episode
[02:55] of around the verse featuring not only a
[02:57] squadron 42 project update a ship shape
[02:59] detailing the current work on the Aegis
[03:01] Eclipse but also a feature pulling the
[03:03] curtain back on mother but on the
[03:05] development of our scanning systems and
[03:07] when we return from our break we'll be
[03:09] sitting down with Kirk and mark to
[03:11] answer your follow-up questions about
[03:13] scanning live so stay tuned we'll be
[03:16] right back
[03:26] [Music]
[03:47] [Music]
[04:40] and we're back joining us on the show
[04:43] today lead gameplay programmer yes oh my
[04:47] gosh lead systems designer correct Oh
[04:51] mark Abed Kirk tell me hey guys do it
[04:53] man
[04:54] good yeah oh this is your first time on
[04:56] the new art TV this year I believe this
[04:59] is the first time um for me being on TV
[05:02] ever really not that I can call happy
[05:07] yes I think so what's now of course if
[05:18] it is your first time for viewing our TV
[05:21] reverse the verse this is our live
[05:22] question ancestors where we got two of
[05:24] our designer and an engineer on the show
[05:27] to talk to talk about various gameplay
[05:29] aspects that starts this and today's
[05:30] focus is the recently revealed scanning
[05:34] feature which we debuted on around the
[05:36] first yesterday we will be taking
[05:38] questions for this special subscribers
[05:41] edition our TV exclusively from our
[05:43] subscriber chat up on spectrum so if
[05:46] you're watching live on Twitch log into
[05:49] spectrum if you're if you're watching
[05:51] not live on YouTube afterwards
[05:54] congratulations on having better things
[05:56] to do but if you are inspection check go
[05:58] to the subscriber chat and you can
[05:59] submit your questions there you can
[06:01] preface your questions with the word
[06:02] question in capital letters surrounded
[06:04] by bracket that's brackets that's going
[06:06] to help our our good friend Tyler wick
[06:07] and pull them out from the conversation
[06:08] now before we get started because every
[06:11] show is somebody's first show why don't
[06:13] we take a few minutes and tell everybody
[06:15] who you are and what you actually do for
[06:17] star citizen we'll go ahead and start
[06:18] with mark the first
[06:25] what is it you actually do I'm one of
[06:28] two lead engine gameplay engineers here
[06:30] at the LA studio and my responsibilities
[06:33] are mostly ship related so ship systems
[06:35] getting them functional making them work
[06:38] talking to other developers when they're
[06:40] working on anything relates to the ships
[06:42] something's happening to the ships on
[06:44] the code side text set up anyway I need
[06:47] to know about it or I have some hand in
[06:48] it or anything like that okay and how
[06:52] about you so lead systems design well
[06:55] until recently I was in the same boat as
[06:59] Marc but regarding design so we were
[07:03] designing and implementing ships and
[07:05] ship features now I'm in charge of three
[07:10] of our scrum teams one of them is
[07:14] specific to vehicle features so in that
[07:17] regard we're still designing any type of
[07:20] gameplay features or methods of
[07:24] implementation for ships and there's
[07:27] also a gameplay features team that I'm
[07:29] the product owner of that is more system
[07:32] like game systemic features that
[07:35] particular team right now is working on
[07:37] our group system and how it's going to
[07:39] be integrated with Mobe glass chat and
[07:43] being able to just better work with
[07:45] other players and so you can group up in
[07:48] and do things together and then the ship
[07:52] implementation team which is responsible
[07:55] for actually getting the ships in the
[07:56] game know so you actually get your hands
[07:59] on quite a few pots as it were
[08:01] yeah I'm not the office a lot less than
[08:08] this guy all the time I know it's when I
[08:11] first started here when I first started
[08:13] here and I was still living an hour and
[08:15] a half away I just have to leave very
[08:16] very early in order to get through
[08:18] traffic because that hour half was a
[08:20] normal Drive and then with traffic would
[08:22] be three so I used to I used to get in
[08:23] here like 6 o'clock in the morning and I
[08:25] used to come in it would just be mark
[08:27] you yeah mark market anyway in the
[08:29] morning yes you can't get here I'm like
[08:31] do you also live 90 minutes like no no
[08:35] you just hear this
[08:37] only two hours away and it's not that
[08:41] far which is sad LA traffic yeah
[08:44] well also it also helps not to get kid
[08:46] too far at the point but because we're
[08:48] got this distributed worldwide
[08:49] development the earlier you're here the
[08:51] easier it is to sync up with us check
[08:53] your opinion in quarantine definitely
[08:55] yeah it takes care of like this stuff
[08:57] because we're doing some things across
[08:58] studios with this mining scanning so
[09:00] it's always good to come in early and go
[09:01] hey we have this problem how do we sort
[09:05] this out five minutes Skype call takes
[09:07] care of some that a email takes two days
[09:09] to cover yes yes that's true and also
[09:11] like like you just pointed out because
[09:13] the the pinging and scanning system are
[09:16] tightly woven into well we the de team
[09:19] is going to be showcasing with their
[09:21] mining gameplay it does help to be able
[09:24] to talk to that miss machine because
[09:26] they're two hours ahead the UK studio
[09:30] which is already are they you know it's
[09:34] only one hour it was two hours when they
[09:37] both did daylight savings time
[09:38] differently but nicely packed okay great
[09:41] like 5:30 it's like 2:30 over there
[09:45] welcome to discussion of time zones time
[09:49] zone manager jared huckaby all right now
[09:52] both of you mentioned scanning and
[09:54] mining in the same breath now I do I do
[09:57] want to emphasize that they are
[10:00] different feature the scanning feature
[10:01] is much bigger than just mining it's the
[10:05] scanning feature is besides being an
[10:07] integral feature to squadron 42 scanning
[10:10] feature is just as important to the
[10:12] persistent universe you're not just
[10:14] using it with mining you'll use it for
[10:16] Explorer and you'll use it for for you
[10:18] know discovering you know uncharted you
[10:21] know you know areas of space and you'll
[10:24] use it in missions all kinds of scanning
[10:27] is will be an incredibly factor outside
[10:29] of just - right for the purposes of this
[10:32] conversation we have two of the
[10:33] gentlemen who worked on the scanning
[10:35] portion list as you just said the de
[10:37] team is focused on the mining portion so
[10:39] while a little bit of mining discussion
[10:41] might sleep slip in here and there I do
[10:44] want to emphasize that this is a
[10:46] discussion about scanning we are will do
[10:48] our best to have a
[10:49] you're on mining you know on its own
[10:51] because it's a feature that deserves its
[10:53] own focus absolutely in the future I
[10:55] think one way to kind of talk about this
[10:57] in light of the work we're doing is
[11:00] we're really working on the the pinging
[11:03] and scanning features as the the latest
[11:07] additions to 3-2 so in a nutshell I know
[11:13] we just did a whole segment on it but
[11:14] for because it just came out yesterday
[11:16] and not everybody has been around maybe
[11:18] not everybody seen a TV yet give me the
[11:20] the dime-store
[11:22] version of being scanning sure so like
[11:25] in the game especially the PU and what
[11:28] we'll be implementing into it's quite a
[11:30] 42 you only have information about about
[11:35] entities that are just a run ship in
[11:37] your passive radar the exception being
[11:40] the you know quantum travel points
[11:42] because they're so far away so it's
[11:44] oftentimes rather difficult to know
[11:47] about things that are outside of that
[11:48] that made our distance so what we wanted
[11:51] to do was give you some idea of you know
[11:55] hey is there are there objects around me
[11:57] that might be interesting to me in this
[12:00] first tier of our pinging and scanning
[12:03] feature implementation we give you the
[12:07] ability to do a pinged so you have a a
[12:10] ping item on your ships now and when you
[12:12] do do a ping it it basically sends out a
[12:17] 360-degree ping that gives you some
[12:21] general information about objects that
[12:23] are outside of your passive radar radius
[12:27] but within this new larger ping distance
[12:31] so when you do ping out basically what
[12:34] you're doing is you're searching for
[12:35] signals EMI are and we just don't meted
[12:39] something called our RF which is the
[12:42] resource signature so when you're able
[12:45] to detect those signatures that are
[12:47] outside of the radar distance but within
[12:49] the ping distance you get back some
[12:51] basic info about these entities and we
[12:55] represent them as blogs so the entities
[13:00] that you detect will be
[13:01] put together if they're close enough to
[13:03] each other as this blob entity that
[13:06] gives you a general idea of like where
[13:09] like in what direction these things are
[13:10] but not exactly all the information that
[13:12] you need to know specifically about it
[13:14] so they're kind of breadcrumbs and then
[13:16] when you get these bits of these blob
[13:20] identifying markers you can then make a
[13:22] decision to go you know what I want to
[13:24] check that out so you can fly toward it
[13:26] and it will resolve when it gets it
[13:29] within your you know radar distance
[13:31] right now we're implementing a feature
[13:34] in which you can actually do a more
[13:37] focused ping
[13:39] so what that'll do is it'll give you a
[13:41] better resolution on that particular
[13:43] item if it's if you focus enough and
[13:46] it's within your within this larger
[13:51] range of ping and the signal strong
[13:53] enough then you'll actually get the same
[13:56] information as if it was in your radar
[13:59] so it could be really far away but yeah
[14:01] you do a general ping you kind of know
[14:03] where it is you start focusing your ping
[14:05] on it and if it's if it's within a
[14:08] certain distance and a signal strong
[14:10] enough you'll get for that ping duration
[14:14] some an actual like position and some
[14:18] some data about that object so you'll
[14:20] know if the ship you'll know it's a
[14:22] multiple walk and those are two things
[14:24] that we have implemented so far in our
[14:27] initial tier zero right limitation right
[14:30] now we've actually got a treat here I
[14:33] don't I honestly can't remember if I
[14:34] told you or not but we do have a clip of
[14:36] kind of an entire the entire flow of
[14:39] scanning as it applies to mining in this
[14:42] case so I'd like to go ahead and play
[14:45] that Tyler and if you can see it on the
[14:47] screen right here and why don't you tell
[14:49] us what we're looking at here so
[14:50] obviously we are flying in a this looks
[14:53] like a prospector but based on that
[14:55] that's correct
[14:55] yep you're playing a prospector Tyler I
[14:58] want you're gonna move the control over
[14:59] to the over the chat so we can actually
[15:01] see the video okay thank you
[15:04] area all right so we're flying along the
[15:06] surface it's just like selling to me
[15:08] mm-hmm
[15:08] you got your standard a prospector hide
[15:11] up above is there anything specific that
[15:13] we're looking at right now is
[15:15] I don't believe so I think we're right
[15:19] now looking for targets and how are you
[15:25] how would you identify a target here
[15:27] like so far ok we're getting some of the
[15:30] AR markers I so go ahead and pause right
[15:32] here Tyler now I see this rock is
[15:35] discolored or it looks it looks colored
[15:39] slightly differently I don't think that
[15:41] is the the particular feature we're
[15:44] looking for yak I think because I
[15:47] haven't seen it in yet
[15:48] I don't really should have played this
[15:50] for you that's fine well probably get to
[15:51] a section in which we go to the V
[15:54] scanning or the mining UI okay I think
[15:57] that's where we'll see the highlight for
[15:59] them for the we go I suppose here so we
[16:04] just switch to the scanning UI here
[16:06] correct this is actually the as I stated
[16:10] before we integrated scanning into the
[16:13] mining UI and so the this is the mining
[16:19] interface and it's it utilizes what
[16:23] we've implemented as far as County is
[16:24] concerned to give you the composition of
[16:26] that particular Rock okay and some of
[16:28] the information that we're seeing here
[16:30] we're seeing the power transfer graph
[16:32] again this gets a little too bit too
[16:34] into the mining stuff it was a away from
[16:36] them I so like what we have implemented
[16:38] is the info on the top right it gives
[16:41] you the the percentages of composition
[16:44] for that particular Rock so that you can
[16:46] determine whether it's worth mining in
[16:48] this case schedule you're talking about
[16:49] the mass field there where shows
[16:51] titanium right quartz the other portions
[16:55] you could think of as the scanning is
[16:57] the whole infrastructure is you have
[16:59] some object it could be the ship right
[17:01] here it has four layers of surface
[17:03] information depending upon what the
[17:06] thing is it's very detailed to that
[17:08] particular thing for the mine double
[17:10] Rock I think it was the mass and then
[17:13] some properties about what determines
[17:14] the gameplay aspects of when it will
[17:16] break and stuff like that then you have
[17:18] the extended information which is your
[17:20] detailed information which is for ships
[17:22] it will be your crew your weapons your
[17:24] cargo before the rock it will be the
[17:26] actual content
[17:27] so what's inside and that's the stuff
[17:29] that you see on the top right it how
[17:31] much Gold's in there how much just dust
[17:33] or whatever the core insides of it are
[17:36] so that's what we're seeing on this part
[17:39] yeah so we have two levels of scanning
[17:40] they happen in in cereal but the initial
[17:45] information is is rather easy to get and
[17:49] then you'll go into a section in which
[17:52] after after time elapses and you've the
[17:55] appropriate over the target you want to
[17:57] scan you'll get that real simple surface
[18:01] surface detail and then I'm sorry the
[18:04] surface info and then you go to the
[18:06] detailed info dump that you get from
[18:10] basically like focusing in on that
[18:14] target we can clear the clip now Kyla
[18:16] thank you and one thing to note too with
[18:18] like the mining UI we know what the very
[18:20] specific information that we're gonna
[18:21] pull so we organized it specifically to
[18:25] the mining infrastructure to basically
[18:27] give you information they'll help you
[18:29] break the rock and cover information
[18:31] there is another UI that's getting
[18:34] worked on which is the peer scanning
[18:35] where if you technically scan anything
[18:37] it shows the information more
[18:39] generically versed surface vers detailed
[18:41] so when you unlock stuff you get
[18:43] whatever that thing is here's some
[18:46] information for you while the mining is
[18:48] more specific to what the the gameplay
[18:51] around my right and we're implementing
[18:53] the the bits of information you get for
[18:57] each entity type per entity type and so
[18:59] we do need to take some time to
[19:01] determine exactly what info you get from
[19:04] say a shift versus a rock okay so and
[19:08] that's one of those things that will
[19:09] obviously iterate over time right you
[19:12] regardless regardless of however the
[19:14] this very first tier 0 implementation
[19:16] you know goes out to you guys it will be
[19:19] like any other aspect you will put out
[19:21] tier 0 will see their feedback you know
[19:23] we want this information on the ship
[19:25] want this and then we have to debate
[19:26] that internally do we want to give that
[19:28] information like you know it's you know
[19:30] what do we want them to have what do we
[19:31] not want than that what maybe what maybe
[19:33] do we save for upgrades stuff like that
[19:35] it's a it's a but it's one of the best
[19:37] things about having a live environment
[19:40] our game developers we can start with
[19:41] these tier 0 implementations and really
[19:44] continue our development based strongly
[19:46] on on what they're seeing right hey
[19:49] Tyler our monitor is about to turn off
[19:52] in 20 seconds you just push the button
[19:58] alright so we do have some questions
[20:00] coming in front from that from the chat
[20:02] here the very first one from the live
[20:04] chat says you literally do have to push
[20:06] any button on the back it's on the back
[20:07] on the right and I should go away thank
[20:11] you
[20:12] if we didn't say before Tyler Nolan is
[20:15] heroically filling in for our broadcast
[20:17] crew today our normal JJ's out on
[20:21] vacation
[20:22] can we see a lot of the scanning we saw
[20:24] in a TV we only had the clip of the
[20:26] mining but we saw some great visuals of
[20:29] just scanning space you know and the
[20:31] differ and the different blurbs that
[20:33] come it was all 3-dimensional the very
[20:36] first question of the chat says are
[20:37] there any 2d options for scanning um not
[20:42] at this time I think I'm not really sure
[20:44] how we we'd want to like I'm not sure if
[20:48] it's really great to like limit it to 2d
[20:50] one aspect we can talk about is what we
[20:54] want to be able to represent these blobs
[20:58] and these bits of info on your radar we
[21:02] haven't gotten to that particular stage
[21:04] in scanning or pinging yet so that's
[21:07] something that we want to actually you
[21:09] know we do show you where they are in
[21:11] space but transferring that to to the
[21:15] radar because we need to work with the
[21:18] UI team in order for that to happen we
[21:21] haven't gone to that stage in so I think
[21:23] that's one place where we can represent
[21:25] it in 2d right now in addition to taking
[21:28] questions live from the chat we also put
[21:29] up a thread in spectrum like we normally
[21:30] do the folks who can't be here watching
[21:32] us live people were able to submit their
[21:34] questions over the last 24 hours and
[21:36] vote on which ones they wanted to see
[21:38] answered most the number one question
[21:41] from that thread said will we be able to
[21:43] jam scanners on other ships in order to
[21:46] mask items of interest from others for
[21:49] mining or detection I would love to do
[21:51] that
[21:52] we haven't gotten to that stage yet but
[21:55] yeah I think it'd be super cool if you
[21:59] know we had that kind of you know that
[22:00] that Rochambeau gameplay where you
[22:04] wanted you want to do you know like what
[22:06] what makes this good and then like
[22:09] what's a way to counterbalance that so
[22:10] you can maybe defend against scanning
[22:12] because sure you know it's it's it's
[22:15] interesting to find out info about a
[22:17] ship maybe you don't want that info to
[22:20] you know be discovered so implementing
[22:22] things like you know stealth gameplay
[22:25] something which would be interesting
[22:27] would be if you had a ship that was
[22:30] really good at being a pirate ship and
[22:31] you wanted to smuggle cargo we could
[22:34] make you know sections of that ship
[22:36] which they're completely cloaked from
[22:39] that that or you know they can they can
[22:41] put out you know false signatures if you
[22:44] wanted to say you know just use caramel
[22:47] slag for instance yeah Chris has talked
[22:49] about that gamesmanship for for a long
[22:51] time yeah yeah it's it's it's it's it's
[22:54] it seems kind of obvious but it does it
[22:56] does bear mentioning sometimes that you
[22:59] have to design all the ways in which
[23:01] something is supposed to work before you
[23:03] design all the ways in which you're
[23:05] supposed to counteract those if
[23:07] something working first yeah it's it's
[23:09] it's it's it seems kind of obvious but
[23:11] it's it's in you know we all we all get
[23:13] excited we're all excited for things
[23:15] like pirate gameplay or or just straight
[23:19] out you know villainous gameplay it's
[23:20] like that and a lot of quote we deal
[23:23] with there's a lot of time where folks
[23:23] like you know tell us more about pirate
[23:25] gameplay and tell us more about about I
[23:26] just want to be I just want to be a
[23:28] giant ass that's fine thank you in the
[23:31] universe something and it's it's always
[23:32] it's always helpful to remind folks that
[23:34] we have to build all the ways in which
[23:36] lawful legal correct behavior are
[23:39] supposed to function and then we'll go
[23:42] to figuring out all the ways that you
[23:44] can circumvent it you can avoid it stuff
[23:46] like and one of those ways where
[23:47] prototyping is the idea we have the four
[23:51] layers of surface information what if
[23:53] you could disprove it so then we have
[23:56] ship
[23:57] when it appears on your radar it
[23:58] automatically just gives you the floor
[24:00] information friendly foe action such
[24:03] what if we had a way to provide players
[24:06] a way to tweak those settings so when it
[24:08] automatically comes up that pirate ship
[24:11] is actually claiming he's a UEC friendly
[24:14] police ship and then you look at me
[24:16] you're like wait a minute
[24:18] so you start scanning it's like oh no
[24:19] he's he's an he's gonna kill me
[24:21] he's a pirate I'm gonna go run away so
[24:24] there's some things that we're playing
[24:26] with to get that level of gameplay and
[24:28] one of those was the transponder so
[24:30] hoping to flush that out in the in the
[24:32] future but the scanning stuff is gonna
[24:35] bring some fun stuff right and then like
[24:37] one way we can we can pretty easily do
[24:40] some of this jamming gameplay in is
[24:43] because the pinging system is complete
[24:45] it's wholly dependent on signal if we we
[24:48] can either return back you know lower
[24:52] signals or just give you the ability to
[24:54] be more stealthy and because your
[24:57] signals will drop to the point where
[24:58] they're not detectable even by the ping
[24:59] you just won't show up as a as part of a
[25:03] blob when you do do the ping out yeah
[25:06] start a little bit about that that
[25:08] calculus the the the ping goes out and
[25:12] obvious I don't know how much of this
[25:13] will be in the tier zero limitation
[25:15] let's just let's just talk
[25:16] experimentally here the ping goes out
[25:19] and you're in space you send a ping out
[25:22] and the ping hits mark ship now I
[25:25] imagine there has to be some kind of
[25:26] calculus involved what what is his trans
[25:28] whatever his am transmissions like you
[25:30] know determine whether he's going to
[25:32] show up how strong how much information
[25:34] is going to show up you know what
[25:35] whether he's going to show up at all
[25:36] guys like that look what we can we talk
[25:39] about like that is that's on this being
[25:41] thought of yeah so we get it really
[25:43] simply arterial right well I think this
[25:46] is just the the best way to to kind of
[25:48] understand how our signals that like the
[25:53] signal strengths and distances work I
[25:54] think in the past maybe there's a little
[25:57] bit obscured and it's kind of hard to
[25:58] figure out you know if I have a thousand
[26:00] DM what is that really mean so what we
[26:03] did was we just have a fall-off of e
[26:07] signal unit over over a meter so if you
[26:13] are emanating a thousand e/m it drops
[26:16] down to zero at a thousand meters out so
[26:20] you have this radius of signal that is
[26:21] constantly falling from your position
[26:24] the the there's your passive radar range
[26:30] and if if this is you and this is like
[26:35] saying you can look out ten thousand
[26:37] meters if there's a ship that whose
[26:41] signal fall-off is within your passive
[26:44] radar range it shows up on your radar so
[26:47] if that's say if that ship was emitting
[26:50] a thousand AM and your your radar radius
[26:55] was ten thousand then at just under 11
[26:58] thousand you should be able to see
[27:00] meters away you should be able to see
[27:02] that ship because the signal from the
[27:06] e/m will drop down to one but will be
[27:10] within your passive radar well we did
[27:12] for the ping was there's a secondary
[27:13] radius that when you do the ping you can
[27:18] now detect signals that are at one or
[27:23] higher but within this larger radius so
[27:26] it's really just a simple calculation of
[27:29] what is your detectable range and what
[27:32] is the levels of signal strength that
[27:36] are without it and just adding those two
[27:39] values up means where they're going to
[27:40] be visible or not actually so and
[27:42] obviously you're detectable range will
[27:45] be determined by the sum total of your
[27:47] components and how you're running them
[27:48] how you got them tuned correctly like
[27:51] that yep and then the total of how far
[27:54] you've been paying or how effective will
[27:55] again your sensor package and whether
[27:58] you've got an upgraded something like
[27:59] from a Terrapin or whether you've got a
[28:02] less-than-stellar one and something
[28:04] right I don't want to yeah I don't know
[28:06] what ship has terrible scanning I don't
[28:08] know I said by a given name will have a
[28:10] read it right right and so like
[28:12] I think I think one one issue that we
[28:15] need to solve is that we're not great at
[28:17] messaging out all this data to the
[28:19] player and so we need to once we
[28:22] implement the system we need to work on
[28:24] the UI so that you can tell whether
[28:27] you're going to be detectable to the
[28:29] player or to you know other ships
[28:31] whether that's on the on your HUD or
[28:33] it's in your your signal MFD and we can
[28:38] give you like some simple maybe some
[28:42] kind of bar with what you need to be
[28:44] under so they are undetectable by ships
[28:47] with this value you know technically how
[28:50] far out someone would be able to see you
[28:52] right and if we have that ambient
[28:54] signature you know like this is talking
[28:57] about with no ambient signature so if
[28:58] it's a thousand eeehm i could see that
[29:01] person a thousand yeah but if you know
[29:03] the ambient signature is 500 you know
[29:05] you could be it basically cuts your
[29:09] signature down to 500 cuz it's
[29:10] subtraction so now you get that kind of
[29:12] stealth gameplay where if you know if
[29:14] you lower your signature just about
[29:16] right and you know what the ambient is
[29:18] you know how far out someone could
[29:19] theoretically see you engine and I do
[29:21] want to reemphasize that we're using
[29:23] numbers like five hundred and a thousand
[29:25] is just they're arbitrary examples guys
[29:28] before before somebody goes in there in
[29:30] theory crafts how terrible the game will
[29:32] be with only a thousand meters and stuff
[29:34] like this
[29:34] oh we're using round numbers too we
[29:36] shoot out these numbers just to play
[29:38] around with ideas in our head and since
[29:40] it gives us ideas of okay a thousand
[29:43] where's a thousand a thousand meters a
[29:44] thousand the M it just helps us as a
[29:47] human to figure out what's going on in
[29:50] our heads first what's going in the game
[29:52] right so returning back from the live
[29:54] chat there's a question how Queen DeFede
[29:56] active scanning is there an e war
[29:58] mechanic coming obviously like we just
[30:00] said you want to build the system first
[30:02] before we you figure out all the
[30:04] different ways to defeat it but III one
[30:07] might imagine that that scanner suite
[30:10] would be susceptible to a an EMP
[30:12] anything else yeah you can cut the power
[30:15] to the ship it cut the power to the
[30:16] scanners sure you should be able to shut
[30:17] it off you know there are other subtle
[30:19] ways we can do that when in which
[30:20] because again this is just simple math
[30:22] as far as
[30:23] you're detectability if we have a way
[30:25] just to reduce your signals or at least
[30:27] reduce your detectable signals and have
[30:30] a reduction in what you're you know what
[30:33] your ship is emitting that could be one
[30:35] real easy way to give you that kind of a
[30:37] way to counter counteract that being
[30:40] able to be pinged the sex question you
[30:43] already mentioned this well are we going
[30:44] to have the option of a shallow but
[30:46] widening opening versus a narrow but
[30:48] deeper pain that's exactly what we're
[30:50] pulling right now can we talk about how
[30:53] many different versions are in our tier
[30:55] 0 which I'll talk about one wide one
[30:56] narrow kind of thing know what I think
[30:58] it's like it goes up to 128 times which
[31:02] is just a and I think it goes up by a
[31:04] factor of 2 so 1 2 4 so it's like a
[31:07] slider you'll be able to write you'll be
[31:10] able to adjust so that it starts at 360
[31:12] you know 180 I think it's yeah I think
[31:16] it's 180 and then it it starts going
[31:18] down to smaller increments I think might
[31:23] be the next one not I'm not exactly sure
[31:26] what our increments are but we'll have
[31:28] more than big yeah I think eight levels
[31:31] of scanning in which the the angle of
[31:34] your of your detect ability of the
[31:37] things that you're detecting becomes
[31:38] more narrow but the reward is that
[31:40] you're able to get results back from
[31:42] further away okay now when you narrow
[31:45] that that that angle can you've been
[31:48] also angle that around the ship good it
[31:50] doesn't always reduce to the front you
[31:52] have to turn your ship you can but yes
[31:54] you turn the ship but to do that I think
[31:58] what we'll be able to do is for ships
[32:00] that have the ability to have a scanner
[32:03] that's on a gimbal like sure or the
[32:07] ocula is another one that you'll be able
[32:11] to do these these pings and scans
[32:14] directionally without having to turn the
[32:16] entire ship that's the whole point of
[32:17] that from all through my chat will all
[32:22] ship to be able to scan that's a
[32:26] decision you ever made yet but any ship
[32:29] that has a ping or a scanner item on it
[32:34] should be able to sorry Argo pilots the
[32:40] are the entire Argo owners club go make
[32:44] a friend now I'm just pulled our go out
[32:46] of my but people just what will make
[32:50] from from back from the thread where the
[32:52] people voted on questions what will make
[32:53] the scanning skill based that you can
[32:56] improve yourself in that's good question
[32:58] I think there is an inherent skill in
[33:01] that because you do have the ability to
[33:06] do narrower scans and obviously reduces
[33:09] the angle which you can detect things so
[33:11] right right so you can want one feature
[33:15] we're having is that you do the general
[33:17] ping you kind of find at the blob info
[33:19] and then you can focus on those blobs do
[33:23] narrow scans and get more info back and
[33:26] that is one feature that we're
[33:27] implementing at the moment and one thing
[33:29] to note with the blobs is when you do a
[33:31] 360 your resolution isn't that good so
[33:34] if there's a bunch of objects here the
[33:36] blob might be just just gigantic thing
[33:39] you have no idea what's inside it we saw
[33:40] the images with all the different yeah
[33:42] you can see some big ones and them
[33:44] distance you don't know if there's one
[33:46] object and a dozen objects so it's like
[33:48] you do that high low resolution you see
[33:50] a bunch of things you have no idea
[33:52] what's in it yeah we're still balancing
[33:54] this but the general idea is the lesser
[33:57] signal you're getting the larger the
[33:58] blob image because it's you're getting
[34:00] less deterministic info about exactly
[34:03] where that the enemy might be and that's
[34:06] where changing your focus angle to focus
[34:08] in comes in because if you if all these
[34:11] things are on the table and it's just a
[34:12] gigantic blob and then I do a focus
[34:14] angle they'll cut through and maybe I'll
[34:17] have three blobs now of one for that one
[34:19] for this and then one for is drink so
[34:22] the more you focus in the more odds that
[34:24] you're going to resolve what it might be
[34:26] and shrink down the blobs as far as the
[34:33] different components will skin from
[34:35] live-chat says well scanning capability
[34:37] be based on his scanner type size like
[34:39] some of the other components like other
[34:41] component system we have we have size we
[34:43] have class and we have grade will there
[34:45] be size class and grades of scanners
[34:47] not for the first year but that is
[34:50] something that we'd want to do for the
[34:52] future the simple things like you know
[34:55] the the how powerful the scan is how how
[34:58] great the resolution is how much power
[35:00] they use when we eventually get to be
[35:04] able to damage internal items you know
[35:07] how much how many hit points it has what
[35:10] their wear is gonna be these are these
[35:12] are all things that we'd like to do like
[35:14] an industrial class scanners we can do
[35:17] more more charges per you know per hour
[35:20] without wearing down but I'm
[35:21] theorycrafting you could even have
[35:23] something where if you have a less
[35:25] powerful scanner maybe you can't pierce
[35:26] through a capital ship maybe you can't
[35:28] pierce through the shields I mean
[35:30] there's stuff
[35:31] there's also it's a fun stuff we could
[35:33] try out can you scan people that is part
[35:41] of the plan for the future we do want to
[35:44] be able to use the ping so that you can
[35:47] you can detect life forms as well but
[35:50] sure like you know I want to know what's
[35:53] in your pocket okay I could just see I
[35:57] could just see spending half my time
[35:59] doing internal scans to see if
[36:01] somebody's on my ship well somebody
[36:02] jumped onto my ship okay good like every
[36:05] five minutes
[36:05] somebody jumped onto my ship the fun
[36:07] part about this whole scanning system is
[36:10] the way that it was designed at least on
[36:12] the engineering side we could
[36:14] technically implement this thing two
[36:16] scans anything at least when we were
[36:19] testing it out this won't be in three
[36:21] two but we were using actors and items
[36:23] and vehicles and random stuff to scan
[36:25] see what we could do and in my testing I
[36:28] had an actor on the ground or player and
[36:30] I scanned him and I was getting all of
[36:32] his items and then I put him in a ship I
[36:35] scan the ship and I was getting the
[36:37] player and if in my further testings I
[36:39] even made it so I could scan further on
[36:41] that actor and get his items so the
[36:44] system allows us to be flexible and what
[36:47] we want to provide the players and we've
[36:50] been doing a lot of testing to see what
[36:51] we want to give and whatnot but at least
[36:54] four three two we we're not going to go
[36:56] that far but the system will allow it
[36:58] depend upon how far we want
[37:00] it's kind of a pre-emptive move the when
[37:04] we when this was first product that the
[37:06] the UI for the pinging scanning was on
[37:09] the the ship HUD and we moved it now to
[37:13] the player visor so that we see arete
[37:16] eclis could just put on the player and
[37:18] then have a very similar type of game
[37:22] plane which you scan yeah sure but your
[37:26] scan the targets are standing our people
[37:28] instead of instead of like others spaced
[37:30] entities continue on that to is like
[37:33] it's the interesting thing where we're
[37:34] trying to protect on a cover is like we
[37:37] have this thing called a data bank and
[37:40] that's the thing that holds all our
[37:42] information of what's active what you
[37:43] scan and stuff like that the player has
[37:46] one and the ship has one so when you sit
[37:48] down in the ship all the information
[37:50] goes to the ship and that relays it down
[37:52] to all the appropriate people the cool
[37:55] thing is we're still in the prototyping
[37:58] stage is but if you sit down on the ship
[38:00] and you start scanning something and it
[38:02] stores the information when you leave we
[38:04] have the ability to grab that
[38:05] information now store it into the player
[38:07] so there's some interesting things we
[38:09] could do where you go sit in the ship
[38:12] you uncover some information now it's in
[38:13] the data bank what if we could take this
[38:16] information put it on an item and then
[38:19] you can then give it to someone else who
[38:21] can then use that information and even
[38:23] like before that one thing we can do is
[38:26] you should be able to share that that
[38:28] same info off to other you know members
[38:31] your party or other crew members and so
[38:34] if I do find a target that I want to
[38:36] attack there should there should be no
[38:38] reason why I can't like everyone that's
[38:40] like in a church or is controlling some
[38:44] other weapon can't be given that same
[38:46] info and then it should show up on the
[38:48] radar and then we we need to work on the
[38:51] hood so that you should be able to
[38:53] message hey everyone attack this guy
[38:55] yeah there's this there's absolutely no
[38:57] shortage of work for our UI team yeah
[38:59] it's there are many teams who work
[39:02] tireless in star citizen's development
[39:05] in the the UI team I don't know if they
[39:07] worked the hardest but they're
[39:08] definitely they're definitely up there
[39:10] as far as busy oh yeah I mean every
[39:12] aspect of the game
[39:13] by some UI elements so they they touch
[39:16] every single aspect yeah you actually
[39:18] touched on the follow-up question I was
[39:19] going to have when you said you said you
[39:21] feed the information of the ship and the
[39:23] ship can feed it down to the crew
[39:24] members right which was which was a neat
[39:27] idea which was a which sparked the
[39:29] question about how yeah I think you just
[39:31] answer it where you do the scan and
[39:33] everybody in the turrets and he
[39:34] automatically gets the information sure
[39:36] it sucks instance appearing on their
[39:37] helmet visor the the next question from
[39:39] that from the chat the live chat says
[39:41] will we be able to share that
[39:44] information out with other ships you
[39:46] know in our group like we're flying a
[39:49] posse sure you know it we really like it
[39:51] and one of them is a Terrapin likely a
[39:53] Terrapin you're responsible for the
[39:55] scanning so the Hornet and the Sabre the
[39:58] freelancer they don't have to worry
[39:59] about scanning the Terrapin is doing on
[40:00] the scanning can you feed that
[40:02] information to the other there's no
[40:03] reason why we can't
[40:05] so the luck I mentioned the other team
[40:08] the gameplay feature team is working on
[40:12] the group system so there is no reason
[40:15] why once you populate your object data
[40:19] bank with some info that you can't share
[40:22] it to other members including other
[40:25] members that aren't in the same ship
[40:27] that are part of the same party that's
[40:30] that's cool it's I know it seems like
[40:32] such a skin you say it's can you does it
[40:36] doesn't seem like a real sexy feature
[40:38] but what it can provide play I know it
[40:42] just can be like huge I know it's it's
[40:46] I'm sorry I don't often kind of fan out
[40:48] but but seeing these these baseline
[40:52] features that just open up so many
[40:53] avenues of gameplay gets me that it's
[40:56] like right now 4 3 2 were just getting
[40:58] like the base core stuff in but we're
[41:01] designing it with all these indicted
[41:03] these in mind that we could try out this
[41:05] stuff that's like alright the
[41:07] information that we're storing all the
[41:08] scan data is so lightweight and tiny
[41:10] that we could transfer it to other
[41:12] players then the question becomes how do
[41:14] we do that and that's when we can start
[41:15] playing with it oh we have this fleet
[41:17] system now let's start using that to
[41:19] send information it opens up yeah I
[41:21] can't wait that's like getting this
[41:23] information encapsulating it into like
[41:25] this
[41:26] this item that's in you know object a
[41:27] the bank allows us to do gameplay like
[41:29] you know what does what this selling of
[41:33] information mean what is data actually I
[41:36] mean as far as a commodity and so we can
[41:40] you know a mission could be go find out
[41:43] precisely what what the coordinates of
[41:46] this target are and then you know come
[41:49] back to me with that info and I'll give
[41:51] you some UVC for it
[41:53] then once we have it working we find out
[41:56] how we break it Danny
[41:57] how could someone is allow you have two
[41:59] packets how could someone change the day
[42:01] have half the questions that are coming
[42:03] in are people wanting to know how to
[42:05] break it can we send out ich euch a king
[42:07] a natural rate rich and your environment
[42:09] why not the way that the data it we
[42:12] called encoding once the data is encoded
[42:15] we don't have any information of what
[42:17] that target is anymore because we're
[42:18] supposed to be able to have this
[42:19] information offline so if you have a way
[42:22] of just disrupting the data or
[42:24] falsifying the data there's no way that
[42:26] other player would know so it opens up
[42:27] that interesting gameplay if we could
[42:29] unlock that something else unless they
[42:31] somehow had a better scanner suite than
[42:34] your decoy scan so yeah it's always a
[42:37] game of cat-and-mouse games and shift
[42:40] its you know like you said with a decoy
[42:42] you know I get a grade C asteroid decoy
[42:47] thing that I put out there and it
[42:48] transmits like it's an asteroid and
[42:50] design it and it'll fool off all sensors
[42:54] grade seer below you know that it thinks
[42:56] an asteroid but if I come in with this
[42:58] with a you know I up to my power plant
[43:01] so I can afford a sensor great be you
[43:04] know I'm gonna see that asteroid but
[43:05] it's gonna be a little fuzzy it's gonna
[43:07] be a little like the studio doesn't
[43:08] quite look right if I have an a it just
[43:10] tells me that's a decoy you dumbass
[43:12] again I'm theorycrafting here but that's
[43:15] the kind of that's the kind of a
[43:16] gamesmanship that we've been talking
[43:18] about yeah that seems super mean but but
[43:21] it's just data so yeah there's no reason
[43:24] why we can't give you the ability to
[43:26] manipulate that so you know we could do
[43:29] things with hacking you know you you
[43:30] can't spoof that data by hacking it or
[43:32] you can maybe even hack
[43:34] actual the data you get back from your
[43:37] own your own scan and so you're spoofing
[43:41] it on an item level or even more three
[43:44] others if you scan something you're not
[43:46] supposed to you have the information and
[43:48] then someone comes onto your ship
[43:50] corrupts all the data because you
[43:52] shouldn't have that information then
[43:53] leads off into the night it opens up
[43:56] some fun possibilities actually you know
[43:58] what you're out of a point too so one
[44:00] one aspect of scanning that we we have
[44:04] scheduled in the future is you know I
[44:07] don't but I don't often times want to be
[44:09] scanned and so we need to inform the
[44:13] anybody that's in a ship that's being
[44:14] scanned hey you know someone's scanning
[44:17] you right now the ability of scan is
[44:19] automatic but you know alarm bells
[44:22] should go ringing as soon as you're
[44:25] being scanned because it's usually kind
[44:27] of a threatening gesture so if you have
[44:29] you know huge a huge pirate ship that's
[44:32] that's scanning the contents of your
[44:35] cargo bay I kind of want to know that
[44:36] information what about the difference a
[44:39] big sci-fi trope the difference between
[44:42] passive scans and active scans you know
[44:45] a passive scan that might not let the
[44:48] the the recipient of your skin know that
[44:51] they're being scanned versus and it
[44:53] returns a little bit of data it sure
[44:55] says a active scan which will return a
[44:57] lot more data but inform the person that
[44:59] goes with the idea of the the
[45:01] transponder that we're toying with where
[45:04] it provides the information but if you
[45:06] turn it off you have to actually scan it
[45:08] to uncover it mm-hmm
[45:10] and that also goes into the gameplay of
[45:11] you falsify it that's how someone could
[45:14] go oh he's it's not a UEC pirate he's
[45:17] not UEC he's a pirate and we can like
[45:19] also allow you to either but marking
[45:25] these items or the categories of items
[45:27] as active scannable
[45:29] or passive scannable or and then even
[45:32] allow gameplay in which you can actually
[45:34] change the status of of that type on
[45:38] your ship by doing things like you know
[45:41] getting getting a better jammer or
[45:43] having a ship that inherently has more
[45:46] stealth capability
[45:48] in that regard right now I'm just
[45:50] thinking about flying around the
[45:51] universe with a fake transporter that's
[45:52] a transplant of this isn't tyler witkin
[45:54] i don't know why he doesn't want to be
[45:59] tyler witkin Tyler Nolan has some bonds
[46:05] about that all right what else we got we
[46:08] are we are fast approaching the end of
[46:10] the show guys let's see you're doing
[46:13] great you're actually covering quite a
[46:14] few of these questions ahead of time
[46:15] well scanning be attached to the ship
[46:17] Hut or the helmet head we already
[46:18] covered that it's the helmet HUD we
[46:21] assume you can ping and scan objects on
[46:24] planetary services but can you ping and
[46:25] scan below the surface or inside
[46:27] buildings I'm assuming if we're talking
[46:29] about being able to scan inside ships at
[46:31] some point being able to scan inside
[46:33] buildings want to be too far sure right
[46:35] I think that's something that we would
[46:38] want to implement and you know I think
[46:42] we'd want to do other interesting bits
[46:44] of that along with that feature like you
[46:47] know maybe it is harder to to penetrate
[46:51] buildings that are of like stronger
[46:53] material and give you some kind of some
[46:56] gameplay that isn't just you know a is a
[47:00] scandal or not here's an interesting
[47:02] question watch at will there be a delay
[47:04] between pings so that you can't just
[47:07] spam yes it's it's part of the ping item
[47:11] itself at the moment we haven't quite
[47:13] gone to balancing that yet obviously
[47:16] when we're developing it we want to be
[47:18] able to ping as quick as possible to see
[47:19] the results yes but yeah that that is a
[47:21] feature in which they'll be a cool-down
[47:23] time so that you don't you can't go
[47:26] crazy with the pings at the same time I
[47:28] mean we're talking about the idea of
[47:30] paying maybe you spiked up our little
[47:32] one so if you continue to do it maybe
[47:35] you're gonna drain your power and then
[47:36] someone's gonna go hey there's someone
[47:37] pinging over there comes up to you but
[47:39] you're not prepared because maybe your
[47:42] overall am emissions go up with each
[47:44] paint
[47:45] ideally you wanna weigh their EMS go
[47:48] down a bit before you ping otherwise
[47:50] you're just you're just broadcasting
[47:51] your own location right here I am like
[47:53] but that you know that that's the whole
[47:55] push-pull gameplan panic of yes you're
[47:57] getting information back about the
[47:59] things you want to find but you're also
[48:01] making there
[48:02] cellphone Apple target by announcing to
[48:05] everyone that you're there
[48:06] so to piggyback on the the notion again
[48:10] this was this is an interior of being
[48:12] able to skit to share your scan
[48:13] information with other ships assuming we
[48:16] get to that point you know we've talked
[48:18] about how that's our and our intention
[48:20] or a desire
[48:21] what about what do we think about the
[48:23] possibility of combining the information
[48:26] like like you're you're like here's the
[48:28] standard system you know Terrapin one is
[48:31] in this quarter quadrant Terrapin twos
[48:33] in that quadrant well you know all
[48:34] scanning and then sending our data so
[48:36] they all show up in some kind of
[48:38] collective an extent that so I've at
[48:42] least in these scanning encoding section
[48:44] I've already been anticipating liking
[48:46] merging stuff together so when you would
[48:49] basically encode the information of
[48:51] something that you have in locked we
[48:52] timestamp it with the server time and so
[48:57] when we merge stuff together we try to
[48:58] make sure we get the latest information
[49:00] so if someone scans Stanton two days ago
[49:02] where someone's scanned it an hour ago
[49:05] when you merge the information we're
[49:06] going to have the latest so combining
[49:09] stuff is definitely part of the
[49:11] infrastructure but how we go about doing
[49:13] that from a gameplay standpoint well
[49:16] when we get there we have to scratch our
[49:18] heads today we can merge it this way
[49:21] sure but like have it having like a
[49:23] database that represents you know the
[49:25] sum total of all the info you want is I
[49:29] think totally desirable and it does have
[49:31] to happen at least for the player and
[49:33] the vehicle because they said they have
[49:35] two data banks if we have two sets of
[49:37] scan information we have to merge them
[49:39] somehow that makes sense to the player
[49:41] sorry you started laughing because I was
[49:44] laughing I wasn't having that you're Sam
[49:46] laughing because at the sheer number of
[49:47] questions of people they just want to
[49:49] want to know how to defeat scanning it's
[49:51] it's like it's like these people are
[49:53] excited about the scanning system and
[49:56] they should be but there's so many
[49:58] people are like yes but how do I beat it
[50:00] this person wants to know about you know
[50:02] Aurora cargo boxes that can skim that
[50:04] could shield from scans this person
[50:06] wants to know about the effectiveness of
[50:08] things like the eclipse or the horn or
[50:10] the the Hornet ghost in being
[50:13] able to avoid scans and stuff like that
[50:15] it's it's it's it's exciting I mean it's
[50:17] just remember Alan yeah I mean yeah if
[50:19] you have a ship that's supposed to
[50:21] smuggle stuff you want to be able to
[50:23] hide it so when someone scans it they're
[50:25] not going to see it but at the same time
[50:26] if you're in a section where you have a
[50:28] very high-powered scanner you should be
[50:31] able to detect it if the appropriate
[50:33] gameplay settings oblige because that's
[50:36] the idea of balance push you have your
[50:39] way of hiding but someone has a higher
[50:40] way of detecting it's going back and
[50:43] forward I'm sure there's going to be a
[50:45] lot of iteration on it to get that feel
[50:48] and fund out of it but it's yeah I think
[50:53] I can see that our first goal after
[50:59] getting this basic scanning and pinging
[51:01] in the end 3 2 is find a way to tie to
[51:05] missions so you know you want to be able
[51:07] to use your ping to generally find out
[51:11] where a target might be
[51:13] and then as you as you start doing more
[51:16] focused pings and then eventually scan
[51:18] it that that will be the the mission
[51:21] completion because yeah you got basic
[51:24] info of where things are and then now
[51:26] you're trying to find out which thing
[51:28] that you found is the correct target and
[51:32] that's scanning to complete a mission
[51:33] you know I was I was actually talking to
[51:36] oh I'm so bad with names Oh Luke I look
[51:41] Pressley mhm yeah about the possibility
[51:44] and nothing committed but the
[51:46] possibility of using scanning to find
[51:48] mister missions like Mike messages in a
[51:50] bottle kinda the old ICC missions were
[51:52] where you went you went into the
[51:54] building you found something that
[51:55] triggered a trigger to make sure but
[51:56] instead of it being in the same location
[51:59] every time it's you know it's an item
[52:01] out that spawns randomly throughout
[52:03] space and you know missions that can
[52:05] only be fine found and begun through
[52:08] exploration and through scanning a
[52:09] simple way you could do that is if you
[52:11] know hey we make an emergency
[52:13] transponder right so like yeah it's it's
[52:15] somewhere in space near near stem and so
[52:19] yeah go fly around it
[52:21] I want Stan do your pings yeah you'll
[52:23] find some some
[52:24] maybe in worthwhile candidates for the
[52:27] targets eventually you resolve one that
[52:30] you scan in is is that are you looking
[52:32] for and that spawns the mission for you
[52:38] will scanners use a utility hard point
[52:42] or they I guess they're a physical item
[52:44] on the exterior the ship currently their
[52:47] internal items just like power plants
[52:49] and shield generators ships like the
[52:52] Aquila have a giant scanner suite that
[52:55] comes up out of the top correct
[52:57] it's that's not fully implemented in
[52:59] fact the imitation we have I know people
[53:02] know it's just a turret without came
[53:03] here that's her without any weapons on
[53:06] it but I think we want to implement it
[53:10] by putting it on the actual turret
[53:13] yeah the tier zeros get it flush what is
[53:16] yeah location there's a little Hollywood
[53:18] fakery yeah to get it to get the system
[53:21] going I mean that's what we've done with
[53:22] systems in the past so we're actually
[53:24] able to get their actual physical
[53:25] location so further out yes you're gonna
[53:28] have locations on them especially when
[53:32] you just say thank you it you don't want
[53:34] to try saying I well I was Acula or
[53:39] Aquila I guess oculus something directly
[53:41] but yeah I would say my rule of thumb if
[53:45] it sounds like tequila but yet regarding
[53:51] regarding you know externalizing these
[53:53] items I think that my personal thing is
[53:56] until we get the ability to to damage
[54:01] internal items it's it's we need to get
[54:05] to that step first because you know I
[54:07] want to be able to knock out people's
[54:09] power plants and the shield generators
[54:10] from outside the ship and I think when
[54:13] we get that to that point then whether
[54:16] the the scan item is defeatable by you
[54:21] know shooting the the scan item that's
[54:24] internal on the ship or by destroying
[54:26] the the church itself on the ocular the
[54:29] Aquila will be a thing I think it goes
[54:33] back to get it working and then worked
[54:35] towards how we can break it and move it
[54:38] around a bit and after that yeah one of
[54:41] the one more questions only have time
[54:43] for two more try sweet in here what
[54:46] about the we've talked about being able
[54:48] to flip to to to alter the range you
[54:51] know either from 360 down in there you
[54:53] know 316 kind of a short range to you
[54:57] know 45 degrees and a farther range kind
[54:59] of thing
[55:00] what about altering the type of skin
[55:03] like versa for skinny for heat versus IR
[55:06] versus e/m versus stuff like that yeah
[55:09] so something we have teared up in a
[55:12] future a future tear is the you do want
[55:15] to be able to filter out the results and
[55:17] so yeah if I'm only looking for a
[55:19] resource signature give me the ability
[55:21] to you know go on my radar and go you
[55:24] know the thing is only is only for
[55:26] resource please that is something that
[55:29] we have planned and we love to implement
[55:31] just not for zero and I would imagine if
[55:34] you're gonna filter yeah you get like
[55:37] maybe a better resolution result for
[55:38] that thing why else would you would you
[55:44] filter something down you you know if
[55:46] it's all the same results without
[55:48] between filtering not feel sure as well
[55:50] scan for everything right case you know
[55:52] so you know I think the filtering will
[55:54] probably be on the not what you actually
[55:57] get as far as the results of the ping
[55:59] but more the info that you see so I want
[56:04] to filter out the everything but the
[56:06] resource signatures and so you kind of
[56:08] get rid of that the other noise that you
[56:10] may not be looking for and last question
[56:14] it's a bit ahead so you know I don't
[56:18] expect to have an answer here but what
[56:20] about what do we think about different
[56:23] atmospheric or spatial effects that will
[56:27] affect scan like like the old Star Trek
[56:30] to I'm in a nebula those sensors don't
[56:33] work or this person's I'm you know I'm
[56:34] down on one down on de Mar and there's a
[56:37] sandstorm coming what would I think I'm
[56:39] yes yeah that ties up with the ambient
[56:42] we have a immune system that's not quite
[56:46] into the game yet but future it's like
[56:49] on the planet
[56:50] would have different levels of different
[56:52] campaigns infrared e/m that's basically
[56:56] all over in pockets and there was the
[56:58] idea of having the echo systems have
[57:00] different levels so that when you're on
[57:02] the planet and you're going over and
[57:04] scanning stuff maybe different things
[57:06] appear because you're gonna swamp
[57:07] there's heating pits or something that
[57:10] and increase the ambient temperature
[57:12] versus if you're in the top atmosphere
[57:14] there's more stuff than if you're below
[57:16] but if you're below maybe the
[57:18] cross-section increases because that's
[57:20] how you hiding the planet but yes there
[57:23] are things we're toying with with the
[57:24] ambient system I think maybe one simple
[57:27] way to look at it is the immune system
[57:28] but would almost be like a reverse
[57:32] effect of what you might how the math
[57:35] works and so say something some point is
[57:39] emitting like a thousand DM it what that
[57:42] may actually mean is that it reduces the
[57:45] e/m detection by by that amount for
[57:49] things that are just around it so they
[57:51] they act as a mask exactly so if going
[57:55] with that if you had a pocket of likes
[57:57] and maybe it creases a cross-section and
[57:59] away it's a bunch so if you're inside of
[58:01] that no one can really find you yeah and
[58:03] you know that that's ultimately the game
[58:04] played wanted we want to accomplish like
[58:06] you know I want to be able to hide
[58:08] behind an asteroid or you know I want to
[58:10] I want to fly near near a star and that
[58:13] makes me less detectable or II or EMRI
[58:16] are but I'll melt but hey you want to do
[58:19] the Kid Icarus thing go for it yeah
[58:21] right now all I want to do is is the
[58:27] interest versus interest in a nebula you
[58:29] know and you know after years of getting
[58:32] used to scanning every after everybody's
[58:35] like living and dying by their scans you
[58:37] know then these situations that blow the
[58:40] results out of water like yet so what's
[58:42] water and being forced to you know get
[58:44] everybody used to this and make it a
[58:46] normal everyday part of their life you
[58:48] know scanning is integral to everything
[58:50] then you find ways to take it away and
[58:52] obscurity and make interesting gameplay
[58:54] alright well that about does it guys
[58:57] we're gonna play a short video and when
[59:00] we get back we'll do the wrap-up so stay
[59:01] tuned I'm excited as the thing
[59:04] wanted to do for so long so haven't we
[59:05] get to end our 2017 with this we are
[59:09] going to pick here between us and with
[59:13] you guys watching at home the next
[59:15] straight shift-enter the kick that the
[59:17] ship pipeline you are going to have your
[59:18] chance to vote on three options to be
[59:21] Drake's next shift in the drop pipeline
[59:23] a one-man Salvage starter ship no drone
[59:26] drones but plenty of on-board storage to
[59:29] help with PVA salvage operations but
[59:31] when you don't have to care about
[59:33] operator safety you can explore so many
[59:36] more options also it fits in perfectly
[59:38] with the Drake family you just you just
[59:41] need one of these guys in there for the
[59:43] small fights to just you know when and
[59:45] cut out what's important it just makes
[59:47] perfect sense
[59:47] Drake competitor to the constellation
[59:49] the rough-and-ready multi crew Explorer
[59:52] it differs from the 600 I by its crude
[59:55] basic construction and from the
[59:57] constellation by its lower missile count
[1:00:00] I feel we don't really have with any of
[1:00:02] our ships but would totally fit Drake
[1:00:04] would be survey a broadside er like what
[1:00:07] I was thinking about was exactly what
[1:00:09] you said having everything on one side
[1:00:11] all the firepower on one side it just
[1:00:15] creates this high-risk high-reward
[1:00:17] gameplay right finally viewers choice
[1:00:20] three more choices that you will vote on
[1:00:22] today right now in the show to be the
[1:00:26] third option that we then send to the
[1:00:28] entire community for the next week so
[1:00:29] scout carrier right off the bat Drake's
[1:00:32] capital ship entry space to park and
[1:00:35] store a few mediums medium or large
[1:00:38] ships like maybe it up to a freelancer
[1:00:40] max and transport them around the verse
[1:00:43] and a star lifter capable of
[1:00:46] transporting ground vehicles from space
[1:00:48] to ground and back but not much else
[1:00:50] unable to fully land with the underslung
[1:00:52] vehicles think a Russian you know
[1:00:54] transport helicopter that would I pick
[1:00:56] up tanks and the third option a medium
[1:00:59] storage runner the herald of cargo
[1:01:01] running big engines for fast
[1:01:03] point-to-point travel with a moderate
[1:01:05] amount of storage to offset the speed
[1:01:07] somewhere between an Avenger and a
[1:01:09] cutlass and SVU capacity great for
[1:01:12] getting goods from A to B fast where
[1:01:13] those of you wondering when you can vote
[1:01:15] on these three ships
[1:01:16] the salvage ship the the the multi-crew
[1:01:19] Corsair or the Scout carrier Kraken that
[1:01:22] boat will go up later today that that
[1:01:24] I'll go up as a comlink on the RSI
[1:01:26] website and that will be open and
[1:01:28] available to everybody from later today
[1:01:30] to December 11th so will be collecting
[1:01:32] your votes there yeah so with that thank
[1:01:36] you so much Ellen thank you so much Matt
[1:01:38] Sherman thank you so much Matt bitchery
[1:01:39] I hope you guys enjoyed it I do
[1:01:41] fun and thank you for joining guys well
[1:01:44] we'll see you next time thank you for
[1:01:46] supporting absolutely that beard will
[1:01:55] never come back ever ever ever oh I miss
[1:02:01] it well that about wraps up this week's
[1:02:03] show especially thanks to mark and Kirk
[1:02:06] for taking their time out of their busy
[1:02:07] schedules to be here with us in the show
[1:02:09] this week some quick housekeeping before
[1:02:11] I let you go though the Hercules star
[1:02:13] lifter promotion is still going if you
[1:02:16] somehow miss the either the shipshape
[1:02:17] segment the full RTV dedicated to it or
[1:02:20] the QA posts you can learn all about it
[1:02:23] now on the Roberts paste editors comm
[1:02:24] website and then on Monday you can come
[1:02:26] right back here for another all new
[1:02:28] episode of our weekly question and
[1:02:29] answer series calling all Deb's this
[1:02:31] time featuring responses to your backer
[1:02:34] submitted back or voted on questions
[1:02:36] about life support on spaceships how to
[1:02:38] tell people apart without nametags
[1:02:40] potential changes to the freelancer
[1:02:43] updates to the stats of the
[1:02:44] constellation Phoenix and a chat with
[1:02:47] Clive Johnson about the continuing work
[1:02:49] on network buying calling man only in
[1:02:53] star citizen would have chat on network
[1:02:54] buying calling be considered exciting
[1:02:56] content I love you guys it's you're the
[1:02:59] reason I do all this most of you anyway
[1:03:03] for calling all Deb's I'm content
[1:03:05] manager for global video production
[1:03:06] Jared Huckaby we'll see you next week
[1:03:08] everybody
[1:03:11] you
[1:03:22] thanks for watching for the latest and
[1:03:24] greatest in star citizen squadron 42 you
[1:03:26] can subscribe to our Channel or you can
[1:03:28] check out some of the other shows and
[1:03:30] you can also head to our website at

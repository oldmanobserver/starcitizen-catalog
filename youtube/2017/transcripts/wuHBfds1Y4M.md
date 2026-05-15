# Star Citizen: Citizens of the Stars - Sean Tracy and GrayHeadedGamer

**Video:** https://www.youtube.com/watch?v=wuHBfds1Y4M
**Date:** 2017-09-18
**Duration:** 10:39

## Transcript

[00:15] [Music]
[00:23] [Music]
[00:25] I'm back hey everybody its Ben Lesnick
[00:29] and I'm here to welcome you to this
[00:31] episode of scissors of the stars the
[00:33] only star citizen show for the citizens
[00:35] of the stars by this is the Stars about
[00:37] the scissors of the stars we say
[00:39] citizens the stars a whole lot here and
[00:41] we're very excited about it and with
[00:46] that let's go over to Jared who's
[00:47] talking to US citizen in sizzle
[00:49] spotlight
[00:55] welcome everybody to citizen spotlight
[00:57] our weekly look at the amazing content
[00:59] creations made by you the star citizen
[01:02] community and joining us on the show
[01:03] this week is star citizen twitch
[01:05] streamer and youtuber gray-headed gamer
[01:08] gray how you doing man doing great Jared
[01:11] thanks for having me so as I said you're
[01:12] not just a star system twitch streamer
[01:14] you're also a maker of many youtube
[01:16] videos over the course over the last you
[01:18] know however many years now once you
[01:20] tell us about all that you do for the
[01:21] star citizen community well it did all
[01:24] start on youtube I did a little research
[01:27] entry-level level design for CryEngine I
[01:30] really wanted to get an idea of the
[01:32] cargo capacity of my freelancer so I
[01:35] pulled some art assets out of star
[01:37] citizen game files but a freelancer on
[01:39] an island found a crate build the back
[01:41] of the freelancer with the crates and
[01:42] with a little math could find out the
[01:45] standard cargo unit capacity of each
[01:47] crate and then I pulled those out put
[01:49] them aside the ship and I made a youtube
[01:51] video showing the the stack of cargo
[01:53] that a freelancer would hold really it
[01:56] was it was really just a personal
[01:57] project I did for myself because I'm
[01:59] really into cargo hauling ever since
[02:00] 1993 back in the privateer days you know
[02:03] that's all I did was cargo hauling
[02:04] you're also the host of not so sober
[02:06] Saturdays where you have a number of
[02:08] stars such as and luminaries on each and
[02:10] every week tell us about that it's a
[02:13] oriented one-on-one interview show we do
[02:15] we have a couple drinks I have a
[02:17] community content creator on and I let
[02:20] them get their ideas out there we get a
[02:22] behind the scenes look one of our recent
[02:24] guest John rain created the the set for
[02:28] Gamescom the desks the beautiful desks
[02:30] we had him on at one time and many many
[02:34] other community members and it's just a
[02:36] really good informative show to help get
[02:39] our community creations out there to the
[02:42] community and then we have about an hour
[02:43] of a question and answer session at the
[02:46] end we do giveaways I mean it's just
[02:49] really a good time talking star citizen
[02:51] and sci-fi in general so you know if
[02:53] that's something that interests you
[02:55] every other Saturday midnight Eastern
[02:57] Time
[02:58] not so summer Saturday it's just a good
[02:59] time well that wraps us up for this week
[03:02] think grave for being on the show with
[03:04] that let's find out what's going on this
[03:06] week in star citizen
[03:25] hey everyone and welcome to another
[03:28] round of quantum questions we get to put
[03:30] a CID developer in the hot seat and make
[03:32] them answer as many questions and just
[03:34] under two minutes joining us this week
[03:36] is Sean Tracy Sean how's it going it's
[03:39] going well I just don't even know where
[03:41] to look sometimes I just a little the
[03:43] camera that's you got it
[03:44] very good how many quite well things how
[03:46] many questions you think you're gonna
[03:47] answer I don't know I don't know you
[03:51] know sometimes I'm really proposed and I
[03:53] kind of go on and on about answering
[03:55] questions so I'll probably I think I'll
[03:57] get through probably 20 or 30 all right
[03:59] well let's put two minutes on the clock
[04:00] and go
[04:03] what is your name and what do you do my
[04:05] name is Sean Tracy I'm the technical
[04:07] director of quartet here at cloud
[04:08] pyramid games how large is your team
[04:10] it's 24 if I include the producers so
[04:13] we've got three producers worldwide for
[04:15] the team so 21 plus 21 what do you do on
[04:20] your normal day aa normal day you know I
[04:23] Drive in I unlock the door I come in I
[04:27] sit down I grab a coffee I open up
[04:29] Outlook sometimes I you know check
[04:31] Facebook for a couple minutes maybe do a
[04:33] bit of shopping on eBay just and
[04:37] generally looking over different content
[04:38] pipelines a lot of people would call my
[04:41] my role of pipeline technical director
[04:43] so basically just going over all the
[04:46] different pipelines that we have all the
[04:47] different assets that we're producing
[04:48] and reviewing and informing changes to
[04:51] those pipelines what progress has been
[04:53] made on face over IP since we last saw
[04:55] at Gamescom oh it's a good question is
[04:58] so there's a lot of bugs that we've
[04:59] found and and through the involvement
[05:01] there basically through to go doing
[05:03] games come and having to get this tech
[05:06] into a usable state really kind of early
[05:09] before we were going to release this
[05:10] thing was a good way to actually see a
[05:12] lot of the bugs we've got a lot of
[05:13] different QA people using the
[05:15] ton of feedback on it so some of the big
[05:17] things we put a lot of design in place
[05:18] for some player facing type UI and
[05:21] features and things like this but the
[05:23] biggest thing that we found was some of
[05:24] our mappings were going wrong depending
[05:26] on the depending on the implementation
[05:30] so we had a Lua implementation for some
[05:31] of the mappings and then we found out
[05:33] that our sequel plus implementation a
[05:34] little bit different so basically we are
[05:37] reworking the mapping so that it's just
[05:39] little more accurate a little more
[05:40] one-to-one to what we have with the rigs
[05:42] so there's a lot of work going into it
[05:43] though how much optimization is the team
[05:45] working on right now Oh ton of
[05:47] optimization there's so many different
[05:49] pieces of optimization as well and
[05:51] basically you're gonna really break it
[05:53] down to a CPU GPU thing as well as you
[05:55] know profiling the server's versus the
[05:57] profiling client says as most of us know
[05:58] we've got our clients running at a
[06:00] decent framerate but as soon as you get
[06:02] a bunch of people on the server that's
[06:03] when it starts coming down a little bit
[06:05] so really a lot of the profiling is
[06:07] going on on the CPU on the server side
[06:09] and that's being headed up by Carson
[06:11] Wentz so down in Frankfort and we've
[06:13] made massive progress and then even on
[06:15] the GPU and asset side we've also made
[06:17] some pretty massive progress there well
[06:19] that's all the time we had well I said
[06:24] 20 or 30 that was like that was like 20
[06:26] words Shawn thank you so much for taking
[06:29] the time to join us today whatever it
[06:31] didn't take much time Shawn goes on the
[06:34] board with five questions answered
[06:35] correctly not the 20 or 30 that he was
[06:37] expecting but I think he had about 20 or
[06:39] 30 in spirit let's hop on over to Alexis
[06:42] to see what's going on this week and
[06:44] subconscious
[06:50] hello subscribers I'm Alexis and it's
[06:53] time for another exciting episode of
[06:54] subconscious the tiny show that tells
[06:56] you what you need to know this week our
[06:59] subscribers are on point
[07:00] jump point that is David Lane even
[07:03] published the latest edition of our
[07:04] monthly subscriber only magazine on
[07:06] Friday with a special look at the ships
[07:08] going into alpha 3.0 plus the usual
[07:10] assortment of new lore behind the scenes
[07:12] tales and the next episode of as star
[07:14] citizen serial we've got another
[07:16] subscriber town hall coming up and we're
[07:18] almost ready to announce the panel keep
[07:21] an eye on the den this week where we'll
[07:22] start collecting questions as soon as we
[07:23] have everyone scheduled there's still
[07:26] two weeks left to fly your ship over the
[07:28] month the Drake Herald if you haven't
[07:30] checked out the screenshots and videos
[07:31] that subscribers have been posting in
[07:33] the den what are you waiting for
[07:35] I'd ask for more submissions but I
[07:36] really don't think anyone can possibly
[07:38] top this incredible cinematic video that
[07:40] fresh master posted here's a look and be
[07:43] sure to check out the full video which
[07:44] is posted in the subscribers den and the
[07:46] community hub that's all for this week
[07:48] this is Alexis signing off keep your
[07:51] Herald's running and your jump points
[07:52] charted and I'll see you all in the den
[07:55] [Music]
[07:59] hey everyone tyler witkin lead community
[08:02] manager in the austin texas studio here
[08:04] to bring you this week's top 5 and MVP
[08:07] number 5
[08:09] Olaf Yeager for his efforts in creating
[08:10] a detailed poster of the origin 600 I
[08:14] number 4 has kaha for his in-game star
[08:18] marine screenshot no matter how many
[08:20] times we highlight husky he continues to
[08:22] raise the bar
[08:23] number three space Ted for his creative
[08:26] video star citizen infinite sunset in
[08:29] this video space Ted demonstrates his
[08:31] creative idea of chasing the sunset to
[08:33] enjoy it time and time again
[08:35] number two blade of a cure for his lure
[08:39] reading video whisper in the dark for
[08:41] any of you out there who love star
[08:43] citizen lore and audiobooks well this is
[08:45] definitely for you number one and this
[08:48] week's MVP goes to frost master for
[08:50] creating an incredible Drake Herald
[08:52] cinematic now this thing ended up being
[08:54] passed all around our studios so well
[08:56] done frost master and congratulations
[08:58] here this week's MVP
[09:00] [Music]
[09:22] since is the star citizens are citizens
[09:25] of the Stars which is to say that's it
[09:28] for citizens of Stars for this week
[09:29] I'm Matt Lesnick I'd like to thank Sean
[09:31] Tracy and grey-headed gamer for
[09:33] appearing on our program we really
[09:35] appreciate you coming and helping to
[09:36] entertain all the citizens of the Stars
[09:38] and with that we will see you next time
[09:42] in this this is the Stars citizens the
[09:47] Stars I've said the phrase so many times
[09:48] it's lost all meaning this is the Stars
[09:52] thank you for watching so if you want to
[09:54] keep it with the latest and greatest in
[09:56] the star citizen of squadron 42
[09:57] development please follow us on our
[09:59] social media channels see you soon
[10:11] Dana really consists of coming in
[10:13] closing the door sit down turning on the
[10:17] PC opening Outlook downloading a copy
[10:22] build taking a look at outlook going out
[10:26] for a smoke okay let's go drinking a
[10:28] coffee John Gidding
[10:36] wah-wah

# Star Citizen: Around the Verse - CitizenCon 2947 Retrospective

**Video:** https://www.youtube.com/watch?v=5tRStz404qY
**Date:** 2017-11-03
**Duration:** 37:46

## Transcript

[00:15] hello and welcome to another episode of
[00:17] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm sandy
[00:22] Gardner and I'm Sean Tracy today's
[00:25] feature will take you behind the scenes
[00:26] of citizencon 2947 to reveal all the
[00:30] work that went into making the show but
[00:33] first on today's burned-down not only
[00:35] will we be looking at the issues the
[00:37] team has been tackling this week but
[00:38] we'll be sharing our alpha 3.0 closeout
[00:41] schedule let's go to Eric for all the
[00:43] details yeah yeah welcome back to burn
[00:48] down our weekly show dedicated to
[00:50] reviewing progress on the release of
[00:51] star citizen alpha 3.0 last week we were
[00:55] at 17 remaining must fix issues to close
[00:57] down our next game loop of shopping
[00:59] cargo and commodity trading because
[01:01] we've been making solid progress on that
[01:03] game loop we now want to share the other
[01:05] aspects we're focusing on for PTU they
[01:07] are missions ships and vehicles
[01:09] traversal moby glass and performance and
[01:12] stability well we've been closing down
[01:14] shopping a number of remaining issues
[01:16] have been going down on these categories
[01:17] as well so let's jump over to the team
[01:20] around the globe to see how we're
[01:21] progressing
[01:25] so this week we focused on shopping as
[01:28] well as other bugs that we had we've
[01:30] worked on commodities and basically the
[01:33] kiosks associated with that the cargo
[01:35] and also the physical shops we had quite
[01:39] a few fixes in commodities for example
[01:42] you're able to now buy stuff from the
[01:45] from the shops and able to equip your
[01:48] items for your personal manager we also
[01:51] had all of George's Network updates and
[01:55] changes went in as well in terms of the
[01:58] evocati shopping push there's only a
[02:01] handful of issues by the looks of things
[02:02] right now before we can call that
[02:04] feature sort of Eva Carson I think as it
[02:07] were we're having shopping syncs daily
[02:09] on this with the team at about 4 o'clock
[02:11] which involves Todd as well to go over
[02:14] any issues that they come up with and
[02:17] any any problems they just need to talk
[02:19] through which seems to be pushing things
[02:21] along quite nicely so today I'm working
[02:23] on a try on bug where when you try on
[02:26] clothes like t-shirts and shoes and
[02:28] stuff like that if you're wearing your
[02:30] flight suit you do try on the clothing
[02:33] but they're being hidden by your flight
[02:34] suit so it's not really useful at all
[02:37] you've caught me at a pretty good time
[02:40] where I've got this unintentional side
[02:44] effect when I try things on my character
[02:48] is naked except with our helmet um and
[02:52] that's because I'm trying to hide the
[02:54] flight suit so that you could see the
[02:56] clothes you're trying on underneath I
[02:57] realize now that rather than just making
[03:00] the flight suit invisible we're going to
[03:02] need to detach it and then make it
[03:04] invisible that way the clothing
[03:05] underneath does not get occluded by it
[03:07] so the problem you're seeing here is the
[03:09] flight suit is invisible but the code is
[03:11] saying well it's still there so it's
[03:12] still covering up the other clothing so
[03:14] it's invisible the other clothing is
[03:16] covered up but it really just makes it
[03:18] look like you're naked I've also been
[03:20] chasing down a lot of bugs with missing
[03:22] assets for the icons and images used in
[03:25] the shopping kiosk things like the icons
[03:29] that represent each item in the store
[03:33] some of them were missing so I've had to
[03:35] go go and hunt those
[03:36] and hooked them up and some of the other
[03:38] things were that we're missing were a
[03:40] few of the images of the cargo boxes
[03:44] that were used so I've had to basically
[03:47] track those down and just make sure that
[03:49] everything's using the right asset kaga
[03:51] is in a really good state at the moment
[03:52] at the start of the week the LA guys who
[03:55] are working on the cargo system and
[03:57] they've they'd reached a point where
[03:59] they couldn't go any further
[04:00] and now the directors are back from
[04:02] citizencon they've been able to give
[04:04] them a heading to take philosophy tasks
[04:06] so yeah it's it's looking really good
[04:10] now there's just a few last problems
[04:13] we've been having with how much cargo to
[04:15] put on the cargo grid in the back of the
[04:16] ship and things like that now we're all
[04:18] pointing in the same direction that
[04:20] shouldn't take too long to get fixed up
[04:21] this week this kind of been a little bit
[04:23] of hang-up with they have these counters
[04:25] here that have items in them that you
[04:27] can purchase like ammo and grenades and
[04:29] things like that and the way the
[04:32] shopping system works is that a raised
[04:33] cast from the player camera to the item
[04:36] and that's what makes it high light
[04:37] that's what gives you the shopping a our
[04:40] display and well they're behind glass
[04:44] and right now the glass collides with
[04:47] the Ray that shoots out and so you can't
[04:49] actually interact with anything behind
[04:50] it but if we take out that glass
[04:53] collision then you could just walk right
[04:55] into the glass part of the counter and
[04:57] people could stand in it and that just
[04:58] be obnoxious so we've had to kind of
[05:01] last minute come up with that we've got
[05:04] art and engineers all kind of like
[05:06] scrambling to to make sure that we have
[05:09] a separate colliding surface for glass
[05:12] that will properly Brock block players
[05:14] from walking into it but will allow ray
[05:16] cast to come through so we can still see
[05:18] things purchase things and do that whole
[05:20] spiel now I'm dropping in the finalized
[05:23] shopkeepers and their loadouts making
[05:26] sure they're all working as they
[05:27] expected to and getting everything
[05:29] exported for what should be the last
[05:31] time for three oh we want to make sure
[05:33] that when we say to the evocati group ok
[05:38] shopping is now ready for you guys to
[05:39] you know run with it we don't want to
[05:43] have the instability that we've got at
[05:44] the moment so people are only getting
[05:46] sort of like 15 20 minutes worth of game
[05:48] time we want to see that come up
[05:52] we've done this week has included
[05:55] getting about 59 of our 60-ish missions
[06:01] actually playable we let's say content
[06:05] complete if not polished although we
[06:10] have now got dialogue into at least one
[06:14] of them and we have an it little issue
[06:17] that currently that only works in
[06:20] single-player so that's that's one thing
[06:22] we're gonna have to fix but it's all
[06:26] there and once for code is fixed it's
[06:28] ready to go and another massive thing
[06:32] we've done this week is get all of our
[06:35] missions that are given by mission
[06:37] givers we've got those all behind a gate
[06:42] as it were
[06:45] so after we designed the MFDs to work in
[06:49] the ship so that you can have control
[06:51] over the various items and the ship's
[06:53] including all the power laiden items the
[06:55] shield related items the heat and the
[06:58] Webber related items that went to the UI
[07:00] team which now includes calyx and he's
[07:03] implementing those screens to be useful
[07:06] as far as putting them on MFDs and the
[07:08] ships the bug that I'm working on right
[07:10] now is for the heat screen and it
[07:12] basically is that the buttons that we
[07:15] have on the heat screen which are to
[07:18] suppress your IR which does so at the
[07:23] cost of actually increasing your item
[07:25] heat per system as well as a button to
[07:29] allow you to do that globally that is
[07:33] well for one it's not telling you what
[07:36] it's doing which is problematic and for
[07:38] another problem is that when it does
[07:44] activate there's actually a delay before
[07:49] you're allowed to interact with it again
[07:51] to toggle it on and off and this
[07:53] prevents edge case behaviors from
[07:56] cropping up of what happens when you
[08:01] flip between a suppressed IR State and
[08:05] not too quickly so we just don't allow
[08:08] you to do that however at the moment
[08:10] there's nothing letting you know that
[08:11] you can't do that so one of the things
[08:17] that I am doing is making it so that
[08:20] when you select it it'll turn on and let
[08:23] you know that these are the ones that
[08:25] are being altered and why they can't
[08:31] turn on or off and then making it so
[08:34] that when you turn it off it tells you
[08:35] that to super simple
[08:39] those the question Chris is what what we
[08:41] want to tackle for 300 with the
[08:43] afterburner now what are the specific
[08:45] tests that we want to I do like the
[08:47] suggestion of the thrust management that
[08:49] I guess you are putting out that we sail
[08:52] it basically where you can go and choose
[08:54] your thrusters so you could like you
[08:56] know have more finer control yeah and
[08:59] you could maybe even have a pre preset
[09:00] on your first stuff we knew we had the
[09:02] issue with the Contin trouble
[09:03] overshooting you from your location from
[09:06] your intended destination that seems to
[09:10] be something that Mike Dillon needs to
[09:11] take a look at over the next day or so
[09:13] we had an issue come up with quantum
[09:17] Drive where it was dropping us out
[09:18] effectively seven and a half million
[09:20] kilometers before Hurston prior to that
[09:24] we hadn't really had a jump that many
[09:25] millions of a kilometers to worry about
[09:29] it's usually just jumping from moon to
[09:30] moon that's all that we're really
[09:32] worried about so the math issue wasn't a
[09:34] huge deal but once we got larger jumper
[09:36] coming much further out and the last
[09:38] frame of quantum puts you where you
[09:40] should be so you had this jump from
[09:42] nothing to Hurston right there solution
[09:46] can be we were simply doing our math off
[09:47] the wrong acceleration values so we have
[09:50] an initial acceleration of some slow
[09:52] speed by accelerating your car up to
[09:54] better refer to it going to 88 miles per
[09:56] hour in the DeLorean at which point you
[09:58] hit the max speed or your max
[09:59] acceleration as we accelerate up we were
[10:03] using the wrong value there so when we
[10:05] were calculating how far you should be
[10:06] going it was much shorter than you
[10:07] actually would go which put us in the
[10:10] wrong spot once we slowed the the ship
[10:12] down to that final point swap those
[10:14] values around and we finally would start
[10:15] showing up as we saw in a Germany
[10:18] citizencon
[10:19] the ship coming right up to the planet
[10:21] like it should
[10:23] [Music]
[10:25] issue on auras opening this movie glass
[10:30] in the ship's bed will cause the UI to
[10:32] look through this
[10:34] you okay to clip through the ceiling
[10:37] becoming unusable entrap the player and
[10:46] then the next one is the movie classic
[10:50] anime is missing all assets and
[10:51] functionality future santa cards yeah
[10:57] as for the qtr we had yesterday when I
[11:01] was sick while the day dynamic Knapp
[11:03] point system caused no issues related to
[11:08] your code so if you're happy with what
[11:09] was done there I can
[11:16] over the last view evocati bills we've
[11:18] been paying attention to the feedback
[11:20] from the guys in the evocati we've also
[11:23] had people in Austin and over here as
[11:25] well monitored the server performance
[11:27] and trying get as much information as we
[11:29] can client-side as well from what people
[11:31] tell us we have noticed that performance
[11:34] as we've introduced new features as I've
[11:37] said previously you introduce features
[11:39] but you also then potentially start to
[11:40] see some instability come in and that's
[11:42] exactly what we've been seeing over the
[11:44] last few evocati pushes that the the
[11:47] performance is not up to what it was
[11:51] when we first pushed evocati through you
[11:54] know some various crashes that have
[11:56] crept in and there's been some server
[12:00] instability as well some server crashes
[12:03] so what we've done is we're prioritizing
[12:05] those up a little bit higher up the list
[12:08] so we need to get back with Austin and
[12:10] say look I understand that's a weekend a
[12:12] surfer would be a massive someone gone
[12:13] in over the weekend so when we clean the
[12:14] first for the Monday that basically we
[12:16] could have that we could have had that
[12:18] information so we can then be passing
[12:19] out to people people looking back if you
[12:20] need to know on the server side why the
[12:22] performance is going up or down if we
[12:23] now have to wait for a key way to do it
[12:24] this time zone and we're not going to
[12:26] look at the stuff of the lights today
[12:27] well we need to at least get if Clive
[12:30] George whoever did get access to that
[12:32] information if at least doing that it's
[12:33] a bit of a problem with what they need
[12:35] that needs to be the number one thing on
[12:36] the for that team it was basically going
[12:38] and breaking down and just work out this
[12:41] issue John case we're now getting down
[12:44] to fewer features stuff which is
[12:48] typically what breaks the build we need
[12:51] to get the need to get the performance
[12:53] so we need to get the stability back so
[12:56] we have that and then that means that we
[12:58] can just keep on working towards it from
[12:59] you know making choices willing to live
[13:00] and so forth it's great that you're
[13:02] doing the dailies Todd something that
[13:04] really helps forget the feature stuff
[13:06] done but we just need to get this build
[13:07] working so it's fast and so for things
[13:09] like that just number one on
[13:11] for me on that side at the time of
[13:13] filming this we're at 15 issues and
[13:15] we've checked in over 529 updates on to
[13:19] our 3.0 branch across the categories of
[13:21] shopping ships and vehicles traversal
[13:23] Moby glass and performance and stability
[13:25] tomorrow on our production schedule will
[13:27] be showing the remaining issues needed
[13:29] to finish to release to Pt you don't
[13:31] miss that update and come back next week
[13:33] to see the progress we're making here on
[13:35] burn down
[13:37] you'll be able to check out the
[13:39] production schedule report tomorrow on
[13:41] our website now let's head back to
[13:43] Frankfort last week the star citizen
[13:45] team took to the stage at the Capitol
[13:47] Theatre for a full day of panels a
[13:49] keynote address from chris Roberts
[13:51] featuring our procedural city tech from
[13:53] Sean and much more pulling all these
[13:56] pieces together whilst also working on
[13:58] Alpha 3.0 and squadron 42 took a lot of
[14:01] planning and coordination let's see how
[14:03] it all came together in this exclusive
[14:05] behind the scenes look at citizencon 29
[14:07] 47
[14:28] [Music]
[14:36] [Music]
[14:54] [Music]
[15:04] wouldn't talk Allah
[15:06] welcome to citizen pond 29:47 in
[15:10] Frankfurt Germany so without further ado
[15:17] we hope you enjoy the show
[15:20] [Applause]
[15:33] [Music]
[16:04] [Music]
[16:49] ladies and gentlemen Chris Roberts
[16:53] [Music]
[16:59] right hello Frankfurt so we're really
[17:06] excited to have you all here in
[17:08] Frankfurt Germany at citizencon 2947 so
[17:15] let's see what the box delivered so here
[17:19] we are
[17:19] so the octane 900p which is the fastest
[17:23] SSD on the planet and we've actually
[17:25] been working with Intel for quite a bit
[17:27] of time on this one and it's some really
[17:30] really cool tech and yeah I'm gonna
[17:34] throw one to the audience here who's
[17:36] gonna catch all right here we go yeah so
[17:41] it's a little wet for the dry ice
[17:44] david blundell from Intel come out so
[17:48] David it's good to talk a little bit
[17:49] about the obtain and before we kick off
[17:53] everything today yes thank you thank you
[17:56] very much for having us here today we
[17:57] really appreciate this opportunity and
[17:59] today at citizencon we're actually
[18:01] launching the product that Chris just
[18:03] tossed out into the yes so that's a big
[18:05] deal of stuff is into the fact that
[18:06] we're actually part of a launch of a
[18:09] major piece of hardware that's very very
[18:10] cool it's a major launch for Intel of
[18:12] the Intel octane 900p SSD and really
[18:16] it's the first SSD for desktop and
[18:19] workstation users that uses Intel obtain
[18:22] technology we got together over a couple
[18:25] years ago we started talking about the
[18:26] attributes of this technology and we
[18:28] thought this was a perfect connection so
[18:30] what do you I think you can get out of
[18:31] this in the upcoming release you know
[18:33] it's the first generation of the
[18:35] technology and it's gonna improve and
[18:37] you know the operating system is going
[18:38] to sort of embrace it better and
[18:40] there'll be it'll be pretty cool but
[18:41] it's definitely helping our development
[18:42] now and I think it will be good for
[18:45] anyone playing stuff with them - yeah we
[18:47] definitely look look forward to working
[18:48] with you on the future and then as part
[18:50] of this collaboration some of you may
[18:52] have noticed something new out in the
[18:53] atrium did anybody see anything new a
[18:55] little small thing no seriously what we
[18:57] thought is hey you know there's a
[18:59] technical collaboration we'll make the
[19:00] gameplay better make you guys have more
[19:02] fun with this thing try new experiences
[19:04] but also we thought we
[19:05] I translate that into a ship hi
[19:07] everybody welcome to citizencon 2947
[19:12] exploring new worlds we do have the big
[19:15] savor every model right here it was done
[19:18] by jr. fabrication it's not a life-sized
[19:21] one as I told you before but it looks
[19:23] super amazing and it packs a punch let
[19:26] me tell you that my name is Jason Cole
[19:27] I'm the lead cinematic animator for
[19:30] squadron 42 and today I'm gonna talk to
[19:31] you guys about look I care or pcap look
[19:34] transformation alright so the left is
[19:37] look like a the original system always
[19:39] on and then the right is look like a
[19:42] with a little bit of polish and the
[19:44] animation tool kit or the look like a
[19:45] tool kit and I'll let this run a few
[19:49] times but you can really see the
[19:50] differences pulling through now see see
[19:53] he's looking right and left and he's
[19:54] constantly looking back towards Seto and
[19:57] we're getting a lot of smaller things in
[19:59] here like head nods and little head
[20:00] turns so this video was showing only a
[20:04] few issues we have with stairs and
[20:08] random obstacles but this list can
[20:10] really endless
[20:11] one way to solve this is to tell tell
[20:14] animators to make more animation assets
[20:17] but I think that won't
[20:18] because this is one of those problems
[20:20] you can see
[20:21] with animation they have alone there way
[20:24] too many unpredictable situations that
[20:26] we just can't consider all of them the
[20:28] only thing we can do is try to find
[20:31] procedural tools but in star citizen
[20:35] it's it's really not that simple as evil
[20:38] is showing here I've never seen this
[20:41] planet before and
[20:45] you have situations where it's possible
[20:48] what you'll see throughout the day today
[20:52] where you could be on a mountain on a
[20:56] planet that potentially nobody else has
[21:00] been on the floor or I've never been to
[21:04] no queue a guy has seen it up in some
[21:06] corner of this world and you get into a
[21:11] gun fight for your life and in those
[21:14] situations the animation system needs to
[21:18] hold up that panel you know when we put
[21:22] up the summaries like animate you lose
[21:24] the discovery enhancing mocap data with
[21:27] procedural information
[21:28] not exactly the sexiest default ILC but
[21:32] I I think I think it was a misnomer you
[21:34] had slid it under the radar that was an
[21:35] amazing presentation this is your
[21:37] citizencon is it yeah it is
[21:40] Austin Los Angeles Manchester Los
[21:43] Angeles and now Frankfurt is temple
[21:45] techniques basically work by looking at
[21:47] the previous several frames of motion in
[21:49] our case we look at four frames fire and
[21:52] we work out from than previous four
[21:53] frames what the results should have been
[21:55] there so we type of we wobble the image
[21:58] ever so slightly which is impossible to
[22:00] you and then over the four frames we
[22:02] type of work out what the details should
[22:04] have been but in that one pixel and we
[22:06] can recover that and get a nice soft
[22:07] result but the problem of using the
[22:10] previous four frames well there's all
[22:12] sorts of problems to be honest it's
[22:13] caused us a lot of headaches so we have
[22:15] we also have we have a lot of moving
[22:17] objects awfully we've got you know
[22:19] spaceships that move we've got planets
[22:20] that are moving we've got all sorts of
[22:22] things going on that we might not have
[22:23] an in normal game and we also have a UI
[22:26] transparent UI a transparent glass
[22:28] screen a transparent visor all of these
[22:30] things make it quite difficult to
[22:32] account for the previous four frames
[22:33] motion because your visor might be
[22:35] spinning this way the cockpit might be
[22:37] going that way you know there's all
[22:38] sorts going on so we've recently done a
[22:40] change that hopefully will work around
[22:42] them but yeah you'll be able to see this
[22:44] in fleet ones here once again
[22:45] okay so that's our final frame looking
[22:49] nice I think you'll agree how many
[22:51] members are in your team so we have me
[22:53] and five others in the UK and then we
[22:56] work really closely with a Frankfort
[22:57] team so there's two or three guys there
[22:58] that do a lot of graphics but it's very
[23:01] tightly coupled like the CPU
[23:02] optimization and the planetary work why
[23:05] don't you tell me about your experience
[23:06] at citizencon what do you think of it so
[23:09] far this is a really great event I have
[23:11] seen many people I have seen many new
[23:14] technologies coming and many new
[23:17] technologies integrated in the project
[23:19] it's really appreciated all the old
[23:21] community I think it's all appreciated
[23:23] by all people who came tonight
[23:24] basically the first moment of being
[23:26] tasked with creating a civilization
[23:28] there was one question that sort of
[23:30] popped into my head immediately which
[23:33] was that and abject fear and terror but
[23:37] once it ended basically it was a very
[23:39] simple question of who are they I mean
[23:42] it's that sort of thing seems like a
[23:43] very obvious and an silly approach but
[23:46] it actually can give you a lot of good
[23:48] answers this is our lineup of our big
[23:51] four plus one and so we have this is
[23:55] kind of the current of where everybody
[23:57] is so we have our Vandal warrior we have
[23:59] our Ronin and the Tabar and we have our
[24:02] traders in the band we have our humans
[24:04] there and then we have our Jean
[24:07] today it's important as we progress that
[24:10] we don't necessarily make like a drastic
[24:12] change right we want to keep true
[24:14] without what everything's going if we
[24:16] need a retcon something we can do that
[24:17] but it's not something we want to do it
[24:19] every opportunity we want to keep it
[24:21] consistent and I think that's you know
[24:24] going back to the Marvel way that you
[24:26] were talking about how you work in a bra
[24:29] you work in the broad shape first and
[24:31] then you go into the details and that's
[24:33] something you do for a whole race as
[24:36] well you know we're not gonna try to
[24:38] nail it on the first shot we're not
[24:40] gonna go and maybe try to make the
[24:42] perfect image the first time we're gonna
[24:44] do a lot of images and see what sticks
[24:46] and we're gonna go back to those see
[24:48] what we're successful you know with was
[24:57] SONET layer or twiddling yeah yeah Tipu
[25:03] yo yo we to war what's your way with
[25:07] what possesses somebody to go into that
[25:10] kind of field to sit there and say I
[25:11] want to create a language that's that's
[25:13] my contribution it's an amazing
[25:14] contribution don't mere on its I just I
[25:17] have no relation I can't relate well
[25:19] it's not really a field yeah I would say
[25:22] you know there are a handful of people
[25:24] getting to be two handfuls of people
[25:26] who've done professional language
[25:27] creation for entertainment franchises we
[25:31] set up 24 gaming pcs and people can
[25:34] enjoy the planetary play go on demo
[25:36] planetary play go and demo you might
[25:38] have heard about that we already had it
[25:41] at Gamescom but it's a new one we got
[25:43] rid of some box and we put him new stuff
[25:46] one of those actually the cyber Raven so
[25:49] people hear the citizencon can already
[25:51] enjoy the sabre Raven fly it around so
[25:53] you might have heard about this before
[25:55] but hopefully there be some new stuff in
[25:57] there so we always talk a lot so
[26:00] what this means is it's always like the
[26:02] best on in point for visual design in
[26:05] the Shores that our ideas sit within
[26:08] like a system tapestry kind of what we
[26:10] said before because if we're working in
[26:12] the corner like yeah we're gonna have
[26:14] some blues and reds and whatever then
[26:16] we'll get to like the rest of the system
[26:19] and we'll just have like skittles
[26:21] you know taste the rainbow so sure about
[26:26] the fact that we were able to make
[26:28] terrain it's a sphere spherical and just
[26:32] holds up and work that's that's been a
[26:34] challenge in itself so even when we got
[26:36] to that previous slide where I was like
[26:38] this is terrain and it's like on a
[26:39] sphere and it's it's it's connected and
[26:42] that was something new completely
[26:44] brought it brought its own set of
[26:46] challenges obviously just the idea that
[26:48] you can walk on forever and you end up
[26:50] at the same place at some point couple
[26:52] days is a very long walk I never tried
[26:55] and then there's a bit of improvement
[26:58] some more detail we have to add another
[27:00] layer of detail on top and yeah this is
[27:05] what you should see here then in the
[27:07] front you still see it's a little bit of
[27:08] blurriness like how the textures go into
[27:11] each other you have like snow going soft
[27:13] into a rock that was the next thing that
[27:15] we had to work on so you see some early
[27:17] shots of how the terrain was blending so
[27:21] you see this gallery map the splat map
[27:24] doing its work saying here's here we
[27:27] have some soil rocks now whatever and
[27:29] then we just iterated on how we blend
[27:32] the textures together to get more
[27:33] variety and more variety until you have
[27:36] something something more nice-looking
[27:38] and in the end you end up with something
[27:42] like this and you can have some two
[27:44] completely different ecosystems right
[27:46] next to each other what if I offered you
[27:50] the ability to build your own settlement
[27:53] to bring civilization to the most
[27:56] untamed frontiers a colony ship in the
[27:59] truest sense of the word
[28:02] and I'm not talking about just
[28:04] transporting people no I'm talking about
[28:07] an all-in-one solution designed to build
[28:09] modular structures based on your needs
[28:13] capable of building a farm or a habitat
[28:16] a trading post or a mining operation I
[28:19] mean not to be crazy right allow me to
[28:24] introduce
[28:26] pioneer
[28:36] [Applause]
[28:48] [Applause]
[28:56] so uh we're here to talk about the
[28:59] Pioneer and other things that are
[29:02] associated with it so right off the bat
[29:06] you know that you're dealing with
[29:07] function over for it's it's not gonna be
[29:10] like super sexy it's not gonna be pretty
[29:12] but it's still gonna have a really good
[29:15] sort of well-thought-out industrial
[29:17] design feel to it so you know even even
[29:21] as you're walking through this thing
[29:23] you're still gonna appreciate it and you
[29:26] you know you've got your we're
[29:27] essentially flying factory knowledge
[29:31] information within star citizen is very
[29:35] often on an analogue concept you don't
[29:38] necessarily know something or not know
[29:40] something but rather you know things to
[29:44] to varying degrees and the easiest way
[29:46] that I could you know give for an
[29:48] example would be to consider a car that
[29:50] you're thinking about purchasing if you
[29:52] if you're being asked to purchase a car
[29:55] and you haven't actually seen it you're
[29:57] gonna be very conservative in terms of
[29:59] your estimate of what it might be worth
[30:00] if you're able to see it even from the
[30:03] exterior and verify there's tread on the
[30:05] wheels the paint job looks okay except
[30:08] then that's going to increase your
[30:10] perception of its value if you're able
[30:13] to actually turn the car on make sure
[30:14] it's running or better yet have a
[30:17] mechanic you know take a peek under the
[30:19] hood then that's gonna basically bring
[30:21] it you know even farther up the scale
[30:23] and so a lot of what we're doing you
[30:26] know with the value of land which ties
[30:27] over in the pioneer because you're going
[30:29] to be setting up these outposts ideally
[30:31] in optimal locations to exploit a lot of
[30:33] this value that's sitting on the surface
[30:35] of these planets talks about knowledge
[30:38] what it all means but to get that
[30:41] knowledge you've got to go and find that
[30:43] area to to figure out what's there is is
[30:47] it right for you and that's where all
[30:49] the exploration ships coming in you you
[30:52] could take your Pioneer and do all this
[30:53] with your Pioneer but it's probably not
[30:56] gonna be the best ship for scouting
[30:58] locations we've got a whole wealth of
[31:02] exploration ships the design for finding
[31:05] that information out know what you're
[31:07] building so that you don't do five trips
[31:11] to horn Bock to build something so if
[31:16] you know what you're building and then
[31:18] you know the resources that you you're
[31:20] going to need for that you'll you'll
[31:21] save yourself multiple trips or it will
[31:25] be one of those things where you will
[31:27] need to have these resources brought to
[31:28] you with the great speed comes great
[31:31] risk and you've only got half the
[31:32] weapons so if you messed that up you're
[31:35] in trouble we see your mouth moving way
[31:37] your way answering my question though
[31:39] that that's really amazing itself and I
[31:42] really like this that you can unlock
[31:44] your face and
[31:47] [Applause]
[31:50] on Halen minor Basava costa chris
[31:55] Roberts
[31:57] [Applause]
[32:04] [Music]
[32:16] [Applause]
[32:18] [Music]
[32:28] all right so it's a pretty loud music
[32:32] there so thank you very much for nice
[32:35] entrance we are now going to give you a
[32:37] bit of a preview of what we've been
[32:39] working on beyond 3:04 star citizen so
[32:44] this is the fun bit
[33:36] [Music]
[34:00] [Music]
[34:24] [Music]
[34:32] [Music]
[35:02] [Music]
[35:12] [Music]
[35:30] [Music]
[35:40] [Music]
[35:49] [Music]
[35:58] [Music]
[36:13] as you saw it took an incredible amount
[36:17] of effort to bring it together and we'd
[36:19] like to thank everybody who volunteered
[36:21] or worked at the event that's all for
[36:26] today's episode and a big thanks to all
[36:27] our subscribers for your support on our
[36:29] shows November subscriber ships on the
[36:32] month are the misc Star fair and origin
[36:34] m50 log into the game to test fly them
[36:37] today and thanks to all of our backers
[36:39] as well because your dedication to star
[36:41] citizen is what allows us to make a game
[36:43] that pushes boundaries we could not do
[36:45] this without you and until next week
[37:00] [Music]
[37:23] thank you for watching so if you want to
[37:25] keep up with the latest and greatest in
[37:26] star citizen a squadron 42 development
[37:28] please follow us on our social media
[37:30] channels
[37:35] you
[37:39] [Music]

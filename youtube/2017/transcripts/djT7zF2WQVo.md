# Star Citizen: Around the Verse - Making mobiGlas Matter

**Video:** https://www.youtube.com/watch?v=djT7zF2WQVo
**Date:** 2017-08-11
**Duration:** 32:24

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm sandy
[00:23] Gardner and I'm controller on today's
[00:25] episode we dive into the moby glass and
[00:28] show off the numerous features and
[00:30] functions you will be using in game yeah
[00:33] we're excited to show you the awesome
[00:34] work the UI team has done but before
[00:36] that it's time for a new segment called
[00:38] burn down in the run-up to 3-0 we're
[00:40] going to provide you at the behind the
[00:41] scenes access to the developers as they
[00:43] battle various bugs and blockers
[00:45] currently affecting the release of 3.0
[00:48] now let's see what issues made this
[00:50] week's burn down
[00:52] welcome to burn down our new weekly show
[00:55] dedicated to reviewing progress on
[00:57] issues blocking a release of star
[00:58] citizen alpha 3.0 if you saw our update
[01:01] to the public release schedule last
[01:03] Friday you should notice that we started
[01:05] this week at ninety must fix issues that
[01:07] we need to complete before we're ready
[01:09] to release to our first round of non CI
[01:11] G testers these 90 issues are our
[01:14] detailed lists with set priorities
[01:16] guiding the close down phase of this
[01:18] release the reason we need priorities is
[01:20] to help us understand which are crucial
[01:22] to be completed first we currently use
[01:24] terms and definitions such as blocker
[01:26] critical high moderate and trivial and
[01:29] identifying these issues I'll start with
[01:31] QA
[01:31] so in QA whenever a new feature comes
[01:34] online testers always look at their
[01:35] shops because these are really gonna be
[01:36] able to do a lot of work we're going to
[01:38] be able to take someone's special baby
[01:39] that they've been working on as a new
[01:41] feature for weeks and weeks and weeks
[01:42] and we basically tell them their baby is
[01:44] ugly when you collect developer tears as
[01:46] we like to call it because we're able to
[01:48] fill the database with new jiriz which
[01:50] we may have noticed in the last couple
[01:52] of weeks when we took early looks at it
[01:53] and now the gloves are off and we're
[01:55] finally able to bug up everything done
[01:57] from QA on 3.0 build which has tried to
[02:00] was attempted to be done on friday and
[02:03] also saturday but it seems as a crush on
[02:05] boot on the 3.0
[02:07] that issue is sat with Gordon at the
[02:11] moment so once I get out of here I'll
[02:14] follow up see how that's going and we
[02:17] didn't from the cover even from the
[02:18] comment on the bug it didn't seem like a
[02:19] very particularly difficult one to fix
[02:22] up so just want to find out where we're
[02:26] up to on that and getting new 2.0 bills
[02:28] kicked off sort of queue I can do a
[02:30] sanity check on it that'll be mostly
[02:32] checking to make sure that all the areas
[02:33] of the games load the business single
[02:36] obvious missing like most the entirety
[02:39] of the Stanton map for example or Paula
[02:41] saw some time so we implemented rotating
[02:45] planets it really changed everything
[02:47] that was going on the world
[02:48] the helpers got turned around so what
[02:50] happened was as you would spawn and all
[02:51] this are and you end up going through
[02:54] the geometry of all the star itself
[02:56] because you were waking up backwards
[02:57] instead of coming out of the bed you
[02:59] were going into the bed
[03:00] I fear the more serious open issue right
[03:02] now or memory related issues various
[03:04] client crashes spawning multiple ships
[03:06] simultaneously from the ship spawn
[03:08] terminal causes an undefined error
[03:09] insurance and repair will deduct
[03:11] currency but not actually repair that
[03:13] seems bad we've got so many checklists
[03:16] for the 3.0 release like we've got I
[03:19] mean I've got probably like 10 pages of
[03:21] checklist they're very specific and it's
[03:23] just a case of all the red on pick boxes
[03:27] we just want to get them all green
[03:28] primarily we have we have several
[03:30] reviews through the week because
[03:31] obviously we work in several time zones
[03:33] and several studios so they need to be a
[03:35] high level of transparency with what
[03:38] with what every departments doing we're
[03:40] lucky enough to have tech design in the
[03:42] UK with John crew and his team so we
[03:45] pretty much kind of speaking to each
[03:47] other on an hourly basis my guys what's
[03:49] going on there we're testing the dentate
[03:51] designers as a group and even though the
[03:53] building had had absolutely no UI you we
[03:55] still had an amazing time as a group
[03:57] navigating our way around while the
[03:59] asteroid fields trying to find a landing
[04:01] spot on yellow and with no UI you had to
[04:04] do it by communication and just signal
[04:07] so firing flares off firing weapons and
[04:09] listening for where everyone was and
[04:11] that was quite an amazing experience you
[04:14] know we're just sort of neck deep in
[04:16] future development right now so you know
[04:19] we've got a lot of stuff
[04:20] but it's it's still kind of rough around
[04:23] the edges
[04:24] today we're working on the rover trying
[04:26] to make sure it's got all the features
[04:27] that it needs to and make sure it's
[04:28] behaving the way it's supposed to like
[04:30] currently we got some areas with the
[04:31] wheels not quite working right we don't
[04:33] have the LEDs hooked up for the tires so
[04:35] it looks like it's driving around on
[04:37] these big boxy wheels I was just like
[04:40] hey I got my rover and I jumped in it
[04:44] started riding around near lefty and I
[04:48] hit a bump and then my hubcaps fell off
[04:51] it just hit so I just hit some collision
[04:55] looks like it oh they're already
[04:57] detaching yeah they're already attaching
[04:59] it it's not very visible this was not as
[05:03] visible as it'll but yeah you can see
[05:05] that they're not I see they're not
[05:06] aligned blend anymore yeah so right here
[05:09] and right here they're not aligned
[05:12] anymore but these are still fine and as
[05:15] you can see so it's fun bug like maybe
[05:19] maybe I didn't buy this Rover and a they
[05:24] didn't buy it new lot it's not it's an
[05:29] email to directors saying a person
[05:33] whereas the rover including satellites
[05:36] response it making clear that we do this
[05:39] I didn't to put it there maybe when we
[05:42] do ship test them mm-hmm the way that
[05:44] it's done normally nowadays is a test on
[05:46] one chip to try it with the different
[05:47] manufacturers give gain wide issue or
[05:50] it's just something to do with the
[05:51] manufacturer or very ship specific
[05:53] because we've got 50 ships in the game
[05:55] at the moment doing every single ship
[05:57] that just come through a 2.0 conversion
[05:59] is excessive at best so I think all you
[06:02] can kind of hope for the moment
[06:03] basically issues in one by one we hope
[06:06] that they're caught up which is what
[06:07] I've just call that neither support a
[06:08] note that is not recasting comparable to
[06:10] the ships so people find it in another
[06:12] ship you can find that issue and rather
[06:14] than trying to do it over and over and
[06:16] over again later on in the week what
[06:18] we're probably going to be switching up
[06:19] the text animations such as the
[06:21] following animation which have gotten a
[06:23] lot of attention lately has sort of
[06:24] comedic effect where you'd be stuck in a
[06:26] following animation when you're just
[06:27] jumping up you'd immediately go into a
[06:29] following animation when you create a
[06:30] number of different issues
[06:32] depending upon where you were whether if
[06:33] you're in it within a ships physics grid
[06:35] where you were on the station or you
[06:37] want to plan it sometimes you could get
[06:38] stuck in a following animation sometimes
[06:40] all the AI would be stuck in a falling
[06:42] animation you'll go through this process
[06:43] of things being kind of broken for an
[06:46] awful long time you kind of work with
[06:47] that it's like the old saying goes if
[06:50] you want to make an omelet you go you've
[06:51] got to scramble some eggs right now
[06:53] we're making solid progress on issues as
[06:54] they clap up but there's still more work
[06:56] to be done we've currently knocked out
[06:58] 32 issues and added 20 leaving 78
[07:01] remaining as vincent explained you don't
[07:03] always know what's going to happen when
[07:04] you bring features together but as we're
[07:06] completing and polishing features those
[07:08] numbers will change dramatically
[07:10] sometimes higher sometimes lower beyond
[07:14] our JIRA task and our bug count another
[07:16] interesting metric we try to keep a
[07:18] close eye on is our check-ins or change
[07:21] lift into perforce these represent the
[07:23] work our developers are doing and
[07:25] checking into our revision control
[07:26] system now in one week we've checked in
[07:30] 1892 times across the entire company now
[07:33] the reason that number is so high is
[07:34] because we're all still working in our
[07:36] game dev branch now this branch has
[07:38] everything across both squadron 42 and
[07:40] star citizen now we've already generated
[07:42] our 3.0 branch which has currently 3676
[07:45] open items which includes the 78 months
[07:48] ticked issues and we will begin shifting
[07:49] our developers over in the very near
[07:51] future then we'll lock the branch down
[07:53] and keep a close eye on what needs to be
[07:55] fixed to make a stable release to burn
[07:57] down now once we've done that you'll see
[07:59] this number dwindle week by week until
[08:01] we're ready to release and with quality
[08:03] as our top priority we're going to keep
[08:04] pushing hard to get this release out as
[08:07] quickly as possible so come back next
[08:09] week to keep up to date on the burn down
[08:12] so I hope you enjoyed that look at some
[08:14] of the issues we're currently facing in
[08:16] 3.0 check back next week see the
[08:18] progress we've made what we've managed
[08:21] to burn down and if any new bugs over
[08:23] their head which probably will have done
[08:26] now it's time to lift our arm and open
[08:29] our mull be glass this important device
[08:31] will be your primary access point to
[08:34] many of the game's features including
[08:36] the star map inventory list contract
[08:38] manager and so much more that's right
[08:40] the mobi glass was intended to fill
[08:42] their almost people's smartphones occupy
[08:44] today
[08:45] that came unique set of challenges and a
[08:47] lot of hard work but as you'll see the
[08:48] payoff will be more realistic and
[08:50] immersive game for further details let's
[08:52] check in with UI creative director Shane
[08:55] yen and team
[09:06] so as always there's a plethora of
[09:08] features that Bui team has been working
[09:10] on one of those features has been the
[09:13] multi glass and we've been kind of
[09:15] overhauling that over the course of the
[09:17] past few months we had done some
[09:18] preliminary concept work last year
[09:20] working closely with our systems design
[09:22] team to design something that would
[09:24] assume something more can do what you
[09:26] would find in a typical desktop OS
[09:28] however what we really needed was a few
[09:30] key pieces of tech that would really
[09:31] make it worthwhile without us having to
[09:33] write a ton of bespoke
[09:34] code and functionality one of those was
[09:36] what we call the render to texture tech
[09:38] and that's something that the graphics
[09:39] team has been working on and providing
[09:41] us so we are essentially now integrating
[09:43] this tech with all of our UI across the
[09:45] board including the mobile glass so
[09:47] you'll find this eventually in ship
[09:49] displays shopping terminals kiosk and so
[09:53] forth so the key effect that this
[09:54] provides us is that it enables us to
[09:56] render a 3d scene whether it's a video
[09:59] comm call feed or an image
[10:01] representation of a item in game but
[10:04] we're able to render that on a either a
[10:07] 2d screen or actually within a 3d hollow
[10:10] volume so in both cases it's actually
[10:13] the same exact display tech being used
[10:15] we don't have to write bespoke code to
[10:18] display a UI or a 3d representation in a
[10:21] 3d volume versus a 2d one so this allows
[10:24] us to have things like 3d holograms of
[10:28] ships and sort of mini maps and the star
[10:31] map and so forth rendered on two screens
[10:35] in game and it looks much more proper
[10:37] than other than it would otherwise you
[10:39] know in our game we have a lot of
[10:41] different environmental archetypes that
[10:43] we need to account for when you're
[10:45] traveling across the universe you will
[10:46] come across environments that are more
[10:49] technologically dated and ones that are
[10:51] more technologically progressed so this
[10:54] extends to a lot of different things
[10:56] including you know their style of
[10:58] architecture their style of clothing the
[11:01] devices that they use the goods and so
[11:03] forth and for the UI in particular this
[11:06] affects us and that we need to design
[11:08] our UI based on that archetypes
[11:11] in a more lower tech environment we can
[11:14] just display the UI on flat 2d panel
[11:17] displays so for a more technologically
[11:19] advanced setting that's where we sort of
[11:22] bring in our 3d holographic style of UI
[11:25] and so the mobile glass in particular is
[11:28] manufactured by this corporation called
[11:30] micro Tech and they actually manufacture
[11:32] all of the handheld devices in the
[11:34] universe so naturally they're very
[11:36] high-tech so you would find in the mobi
[11:38] glass that is a holographic projection
[11:41] so the mobi glass assumes a very crucial
[11:43] role on the universe and that it serves
[11:46] as the primary access point to all the
[11:48] different game mechanics and
[11:49] transactions player communication and so
[11:52] forth so sort of akin to what we have in
[11:55] smartphones in today's world that's
[11:57] basically what mobile glasses and star
[11:59] citizen that's kind of how we designed
[12:01] it to be on the universe you know you
[12:03] have a home screen which has various
[12:06] widgets which provide you sort of added
[12:08] Gallants information but we have all
[12:09] these dedicated apps which there's very
[12:11] specific purposes in the game world
[12:13] things like managing mission contracts
[12:15] customizing your loadouts
[12:17] viewing maps and so forth and so on it's
[12:19] designed to be this sort of very direct
[12:22] link to your player character as well as
[12:25] the surrounding environment so if you
[12:27] wanted to know more information about
[12:28] yourself or the kind of outside
[12:32] environment that's what you infer from
[12:34] the home screen widgets so if you wanted
[12:37] to check what is my current oxygen level
[12:40] or what's the current atmosphere
[12:41] composition outside or the atmospheric
[12:43] pressure is it safe to take off my
[12:45] helmet is it safe to walk around outside
[12:47] without a suit and if not do I have
[12:50] enough oxygen to make it to the next
[12:52] destination or where I'm trying to get
[12:54] to like what is the state of the health
[12:55] of my character am I hurt in any way or
[12:59] what is the state of my mission
[13:02] objectives that I currently have tracked
[13:04] how much money do I have and all of
[13:06] these questions can be answered through
[13:08] the use of the mobile glass because
[13:10] we're doing all this new work on the
[13:11] mobi glass and the screens and stuff we
[13:13] really wanted to also upgrade the model
[13:15] of it the mobi glass is essentially a
[13:17] watch and it's a completely different
[13:19] element than any of the screens or any
[13:22] of the buttons that you actually push on
[13:23] it so and
[13:24] we had a little bit of free rein but we
[13:26] also want to make it we knew that we
[13:27] wanted to make it smaller and more dream
[13:29] lines so that it could fit with
[13:31] everything and we didn't have to adjust
[13:32] to many of our other assets but we also
[13:34] didn't want to rein in and constrict
[13:37] ourselves for later too so that's why
[13:39] I've got much smaller the mobis last
[13:40] model you've seen for a long time is
[13:42] getting a little old and we want to
[13:44] update it with not one version but
[13:45] actually two versions because as you've
[13:47] seen in some of the previous character
[13:49] videos before we've been updating our
[13:51] modular system for all our clothes and
[13:53] our armor this meant that the mobi glass
[13:56] is going to have to change as well
[13:57] because you have all these different
[13:58] versions of jackets in shirts and things
[14:01] that are going to be able to take on and
[14:03] off and show the undershirt or maybe the
[14:05] over shirt or a jacket or a suit they
[14:07] really need to fit and be kind of an
[14:08] all-in-one solution what we would date
[14:10] is we made the new movie class much
[14:12] thinner and much smaller to accommodate
[14:14] that we didn't want to go through
[14:16] running through any of these weird tech
[14:18] restrictions where maybe you have a
[14:20] jacket that covers the mobi glass and to
[14:21] see that you'd have to pull the sleeve
[14:24] back and that gets just gets really
[14:26] complicated so we want to make sure that
[14:27] the players can see the mobi glass at
[14:29] any time it wasn't that complicated to
[14:31] do it was mostly a little bit of a
[14:33] redesign Jeremiah Lee one of our concept
[14:35] artists here did a 3d concept so we
[14:37] could really easily and quickly see it a
[14:39] civilian mobi glass is the one that
[14:42] you'll be wearing in clothes and then
[14:43] the military version is going to be the
[14:44] one that you wear in your under suits
[14:46] and your armor something that's a little
[14:47] bit more rugged and it's going to be for
[14:49] combat use so one of the biggest
[14:51] challenges I'm doing the new movie class
[14:52] was the modular system for clothing in
[14:55] the armor so because the modular system
[14:57] is the main reason that we had to redo
[14:58] the mobi plans we had to go through all
[15:00] the different options of the different
[15:02] types of clothes you're going to be
[15:03] wearing long sleeves and jackets and
[15:04] under suits and that was where we really
[15:07] figured out that's something that was
[15:08] thinner was going to be better than
[15:09] something that was thick and bulky but
[15:11] also where we realized that some of our
[15:14] current assets might have to be just it
[15:16] if we made it really thin and it fit
[15:19] with some assets that was great but
[15:20] other ones might have to be pulled back
[15:22] so you could see it all the time we
[15:24] really want to make sure that's
[15:25] available for access because it's cool
[15:28] to see but also it adds a little bit of
[15:30] level of detail where everybody's
[15:32] wearing one and everybody has them often
[15:34] everybody is eventually gonna build a
[15:36] customized to show how much you've spent
[15:38] on your mobile glass or how expensive it
[15:39] is or what brands you got we want to
[15:41] make each application very robust for
[15:43] the specific functionality that it's
[15:45] meant to serve in game but on top of
[15:47] that we want to introduce the ability
[15:50] for players to personalize his or her
[15:52] mobile glass such that it's more
[15:53] contextually relevant to his or her
[15:56] common tasks that another player might
[15:58] not actually care so much about so for
[16:00] instance on the home screen you have all
[16:02] these different widgets that you
[16:05] eventually be able to customize as we
[16:07] start adding more and more functionality
[16:09] in game then we would kind of fit be
[16:12] able to fit on the on the home screen so
[16:14] that's that I kind of idea behind that
[16:17] so fundamentally the mobile glass is a
[16:19] diegetic we projected UI and what this
[16:21] means is that the UI is meant to be seen
[16:24] by not just you as the player but also
[16:25] is meant to be visible by your in-game
[16:28] character as well so basically your
[16:30] player character is aware of the UI just
[16:32] as you as a player are aware of it
[16:34] through through your screen and we do
[16:36] this for a couple of reasons one is
[16:37] because the fact that we retain the
[16:39] visual connection between your player
[16:41] character and the UI makes it much more
[16:43] immersive to use because we will be a we
[16:46] are capable game we're kind of forced to
[16:48] project the UI in 3d space because
[16:51] otherwise it just wouldn't work you know
[16:53] in a traditional flat 2d menu you know
[16:57] you just you just want to be able to
[16:58] read it so you need to project it at
[16:59] some sort of distance away for exact
[17:01] should be usable so we sort of do that
[17:04] from the get-go and that's sort of
[17:05] always been our driving paradigm in UI
[17:08] design in general for all the advantages
[17:10] that a diegetic we projected UI has we
[17:14] as UI designers sort of lose a bit of
[17:16] control and flexibility in terms of you
[17:18] know being able to adjust the UI you
[17:20] know the UI in general so at the mercy
[17:23] of the display geometries and animations
[17:25] and so forth so if we need to change
[17:27] something it's not necessarily the UV is
[17:30] just adjusting something on our end and
[17:32] calling it resolved we actually need to
[17:34] work really closely with the other
[17:35] departments to ensure that the UI is
[17:38] usable so working with animation working
[17:40] with the art teams working with gameplay
[17:42] engineers to make sure that the user
[17:45] experience isn't hamper
[17:46] negatively so in UI design you can only
[17:49] subvert player expectations so much
[17:51] before they find your UI clunky
[17:53] frustrating or unusable something we
[17:55] absolutely don't want in our game a good
[17:57] rule of thumb we'll use is that you
[17:59] should only be focusing on and changing
[18:01] one unique angle of your UI to ensure
[18:03] that the core components of the of the
[18:05] rest of the system remain understandable
[18:07] and within the expectations of the
[18:09] player so what I mean is that the main
[18:10] thing you'll see with the mobi glass
[18:12] that differs from traditional UI systems
[18:13] is that we made it as Dai jeddak as
[18:15] possible making sure it was immersive
[18:17] and stayed grounded in the game world so
[18:19] things like attaching it to your wrist
[18:21] movement tilting it back a little bit
[18:22] and adding visual effects to make it
[18:25] look like a real object in the world and
[18:26] not just something sitting on top of the
[18:28] game world the visual design style and
[18:30] user experience of the interface itself
[18:32] while interesting is fairly
[18:33] straightforward simple line art and
[18:35] shape language basic color schemes and
[18:37] compact information light layouts again
[18:40] this is because we felt we if we created
[18:42] an overly unique visual style coupled
[18:44] with the digestive Miss already it would
[18:46] be kind of like sensory overload and
[18:48] would actually inhibit usage and
[18:50] usability and as with all UI especially
[18:53] in gaming that's the goal we're always
[18:54] trying to strive for how can I make
[18:56] something visually interesting and
[18:57] unique fun to use but also make it
[18:59] immediately understandable to a new user
[19:01] putting the UI in the game world comes
[19:03] with a unique set of challenges it's not
[19:05] just the UI sitting in a silo and it's
[19:08] on top of the game and it's an
[19:09] afterthought it's something that needs
[19:11] to be integrated with animation with
[19:13] audio with the VFX team so it's super
[19:17] rewarding to work with all those
[19:18] different teams and be able to build a
[19:20] system together instead of just working
[19:22] with the UI team alone what we do in
[19:25] terms of audio is obviously not trying
[19:27] to break the immersion that deep
[19:28] different artists that put in the work
[19:31] but instead we try to and that's that
[19:34] play experience by addressing them
[19:36] sonically so one of the first things we
[19:38] did was basically sitting down with Zane
[19:41] and we went through different concepts
[19:43] that were done for the MOBA class as
[19:46] well as is listening to different
[19:48] references as well as music as we wanted
[19:52] to create a soundscape whenever bring
[19:54] the mobis us up so that we could emerge
[19:57] to play in a more soothing stage what
[19:59] came out of them
[20:00] that we wanted to keep the player not
[20:02] just the feeling of using sci-fi to like
[20:06] suffer a sci-fi futuristic tool but we
[20:09] also want to give the player the feeling
[20:10] of using an actual electronic device so
[20:13] you know visually we would have the
[20:16] screen flickering or different images
[20:18] distorting as well every now and then so
[20:20] in order to address that we use coil
[20:23] pickup microphone and what's really
[20:25] particular about this microphones is
[20:26] that they do not reduce sun waves into
[20:30] its own electric signals but instead
[20:32] we're able to capture those
[20:34] electromagnetic fields created by
[20:36] electric devices so you can actually
[20:38] hear our disk of our computer working or
[20:40] you killed
[20:42] you can basically hear like your mobile
[20:44] phone working under the hood and things
[20:46] of that and that really helped us to
[20:48] bring that extra layers of reality when
[20:51] adding them to more cynthy tones one of
[20:54] those challenges basically trying to
[20:56] emerge the player into a different state
[20:58] so usually you know like usually when
[21:01] you are in a specific area you will have
[21:02] you would hear ambience it would hear
[21:05] like whole different things happening
[21:06] around you but again we also wait to
[21:08] create something like another state like
[21:10] on a soothing moment whenever using the
[21:13] mobile glass so creating a soundscape
[21:14] like another role ambiences for that it
[21:17] was something that I've been trying to
[21:20] do and read or reduce you more and more
[21:23] times just to basically trying to make
[21:25] it more interesting and and relaxing
[22:01] [Music]
[22:18] [Music]
[22:25] [Music]
[22:36] [Music]
[22:39] so another challenge is that because we
[22:42] are a first-person game we don't
[22:43] necessarily see much of a character and
[22:45] frame except if you're for instance to
[22:48] look down at your feet I mean at the
[22:49] same time we need to be able to make it
[22:51] apparent that your character is aware of
[22:53] the UI so how do we do that and that's
[22:55] one of the reasons why we've always
[22:57] opted to have the arm visible on screen
[23:00] is because that's the visual connection
[23:02] between the UI and the character so the
[23:05] interesting thing about the starmap and
[23:06] where we want to take in the future is
[23:08] that the star map will actually be the
[23:10] same display text being used for the
[23:12] radar and you can sort of think the star
[23:14] map as sort of like a google maps of the
[23:17] star citizen universe
[23:18] it's basically we eventually want to
[23:20] make it whereby you can zoom in far
[23:22] enough and it basically turns into a
[23:25] radar in a ship or your surroundings
[23:27] like who's who's around me if I'm when
[23:29] first-person we've initially showed us
[23:31] the star map at Gamescom last year which
[23:33] is was basically to be able to quantum
[23:35] travel to a location but since then
[23:37] we've actually iterated on it heavily
[23:39] we've done a sprint for the star map
[23:41] which involved VFX gameplay engineering
[23:44] audio and so forth to really drive this
[23:47] UI to the next level so we have all
[23:50] kinds of new effects in the star map
[23:52] we've iterated on the user experience of
[23:55] the star map and just made it much more
[23:57] visually impressive than it was you know
[23:59] even just a few weeks prior the star map
[24:01] is the first implementation of the world
[24:05] display system the world display system
[24:07] basically allows us to preview different
[24:11] kinds of data from different kind of
[24:14] sources so these different kind of
[24:16] sources could be radar navigational day
[24:19] data could be ships people on your radar
[24:23] could be celestial objects could be all
[24:25] kinds of data and the thing about the
[24:28] world display system is that we can
[24:30] preview it and zoom zoom in on it as a
[24:33] matter of it rotate around it so
[24:36] displayed so that we have like a whole
[24:38] view of whatever we want to show this
[24:40] dar map is a very good implementation of
[24:43] that because it shows planets stars
[24:47] system galaxies you can zoom into
[24:51] stations stuff like that later on we'll
[24:54] be able to show area information
[24:57] minimaps maybe even implement the radar
[25:00] into the same star map so if you zoom in
[25:02] you'll see radar data like blips of
[25:04] different vehicles different ships on
[25:07] your radar and if you zoom out you'll be
[25:11] able to see the navigational data of
[25:12] celestial objects of for example a star
[25:16] your planets moons and that's but like
[25:19] that's the basic of the world display
[25:22] system for the star map have been mainly
[25:25] involved in working on the Polish of the
[25:28] star map that involves getting some good
[25:31] navigation inside your star map so if
[25:33] you zoom in zoom out if you rotate
[25:35] yourself use right mouse input feels
[25:39] very smooth and feels like the user
[25:43] experience is right for your star map
[25:45] I've also been working on the animations
[25:48] like little animations when you when the
[25:52] star map pops and like this everything
[25:54] zooms in it feels kind of animated it
[25:58] gives a little bit of an extra edge on
[26:01] the star map and the visuals so the
[26:04] visuals i've been working on as well as
[26:06] like adding some kind of backdrop lines
[26:09] and different kind of stuff to make the
[26:11] star Mike look better the biggest code
[26:14] challenge for getting star map to work
[26:16] is kind of translating the positional
[26:19] data of the world so your planets are
[26:23] somewhere in this large universe and
[26:27] these have to be kind of translated into
[26:30] this very small screen it's a very basic
[26:33] game kind of problem but it's kind of
[26:36] hard to get it right I guess because you
[26:39] have to work with transforms and the
[26:41] rotation the translation and the scaling
[26:44] of your objects you have to
[26:46] make these big objects and kind of
[26:48] compress them into this small screen you
[26:51] have to structure your code very well
[26:53] in order to get like the results you
[26:56] want that like these big objects are
[26:58] these small things on your display so
[27:01] we've also done a revamp of the emission
[27:03] manager app which we've actually now
[27:05] named the contracts manager and the
[27:07] contracts manager is the mobi glass app
[27:09] which manages all missions between
[27:11] mission givers in the PU as well as
[27:13] eventually player-created missions the
[27:15] app is now split amongst a number of
[27:17] different screen flows the first one
[27:19] being the available contract screen
[27:20] which is where you'll be able to view
[27:22] all available contract opportunities
[27:24] within your particular area view the
[27:26] details of each contract such as the
[27:28] reward and who it was posted by as well
[27:30] as explicitly accept those contracts as
[27:32] well we have a pending screen also which
[27:34] displays the particular contracts which
[27:37] have been sent to you directly via the
[27:38] game or in conversation say for instance
[27:42] when you're in a meeting with a mission
[27:44] giver like Mars Eckhart players can then
[27:46] accept or reject these contracts you
[27:49] then also have a particular screen which
[27:50] displays the contracts which you've
[27:52] accepted and from here you'll be able to
[27:54] view all the dynamically generated list
[27:57] of objectives for each particular
[27:58] contract as well as track or abandon
[28:01] those contracts a contract history
[28:03] screen will allow players also to review
[28:05] the ones which you've previously
[28:08] completed or failed later down the line
[28:10] we want to introduce another screen in
[28:11] the app which will allow players the
[28:13] ability to actually create their own
[28:15] contracts and post it on the available
[28:17] contracts board another application
[28:19] which will be we will be introducing is
[28:21] the inventory manager which will allow
[28:23] players the ability to view all items
[28:25] that their character has in possession
[28:27] across the stars in universe you know
[28:30] from small antique coins all the way up
[28:32] to something more significant like say a
[28:34] capital a large capital ship so you make
[28:36] it easier to navigate amongst
[28:37] potentially thousands of items players
[28:39] can specify a filter and also items can
[28:41] be sorted and searched amongst another
[28:43] purpose of this app will be to allow the
[28:45] ability for players to transfer items
[28:47] from one cargo box to another or from
[28:49] ship to ship as long as both the origin
[28:52] and destination are in the same relative
[28:54] location this F along with many others
[28:56] like the contracts manager in the star
[28:58] map will play crucial role
[28:59] in aiding the various professions like
[29:02] mining trading transport and so forth so
[29:05] as you can see we have a lot in
[29:06] development for the upcoming release a
[29:08] lot of a new apps that we're doing on
[29:09] top of the general overhaul in the
[29:12] mobile glass so what you'll see you is
[29:13] basically a very initial feature set in
[29:16] all of these different apps and we'll be
[29:19] continuing to expand on this going
[29:21] forward you know introducing more robust
[29:23] features and more robust functionality
[29:24] for additional gameplay mechanics that
[29:27] will eventually be introduced I'm kind
[29:29] of excited to get this into the players
[29:31] hands and and seeing what they think of
[29:33] it so in last week's feature we
[29:36] highlighted how we're using the render
[29:38] to texture tech to create holograms and
[29:40] calm calls in real time now you got to
[29:43] see it in use with the mobi glass it
[29:45] just goes to show how all our new
[29:46] features are really coming together ya
[29:49] know they definitely are and one thing
[29:50] I'd like to mention is I saw a few
[29:52] what's so special you can rated the
[29:54] texture and lots of engines or even
[29:55] DirectX after we showed the show last
[29:57] week and my answer is yes that is
[29:59] correct if that was all we were doing
[30:00] but the key thing is our ability to open
[30:02] up an arbitrary number of secondary
[30:04] views on to the world and render them to
[30:05] a 2d texture or more importantly
[30:07] holographically into a 3d volume inside
[30:10] the main rendering pipeline and I don't
[30:12] know of any engine that currently
[30:13] supports the second part of what RTT
[30:15] does so lots of people cheat with tricks
[30:17] like placing a character model with a
[30:19] special shader directly into the scene
[30:20] to make it look like a hologram and
[30:21] that's how our movie would achieve the
[30:24] sort of hologram effect we seen
[30:25] something like Star Wars
[30:26] we actually broadcast in 3d to of
[30:29] volumes somewhere in the game and that's
[30:31] super cool so there you go I did graph
[30:34] being able to digest we render the
[30:36] mobile be glass interface inside the
[30:38] world including holographic versions of
[30:40] your character ship or items that have
[30:42] simply sending you to a menu screen was
[30:44] a goal of ours from the beginning and
[30:45] I'm really happy that we're getting
[30:48] there is fantastic now say that all
[30:50] backwards super fast that's all for
[30:52] today's episode a big thanks to all of
[30:54] our subscribers your support is what
[30:56] makes shows like a TV bug smashers
[30:57] lawmakers and citizen of the star as
[31:00] possible there's also a new happy hour
[31:02] game dev tomorrow at 12 p.m. Pacific
[31:04] this time members of the lore team
[31:06] joined the show to discuss their process
[31:08] and ask you for help in crafting lore
[31:10] that could appear in a future post
[31:13] cool finally thanks to all our backers
[31:16] making this game has been an incredible
[31:17] journey and still ongoing and one that's
[31:20] only been made possible by your
[31:21] continued feedback and support so thank
[31:23] you very much thank you very much and
[31:25] until next week we will see you around
[31:35] [Music]
[31:58] thank you for watching so if you want to
[32:00] keep it with the latest and greatest in
[32:02] the star citizen squadron 42 development
[32:04] please follow us on our social media
[32:05] channels see you soon
[32:14] [Music]

# Star Citizen: Around the Verse - Exploring Gravlev Technology

**Video:** https://www.youtube.com/watch?v=-jK4KjD_96Q
**Date:** 2017-12-07
**Duration:** 47:06

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look behind
[00:20] the scenes of star citizen's ongoing
[00:22] development I'm Sandi Gardner and I'm
[00:24] for Stefan today's show explores the
[00:27] technology design to keep your dragon
[00:28] fly or NOx cruising above the ground but
[00:31] first the development team has been
[00:33] getting a lot of feedback about alpha
[00:36] 3.0 from our expanded group of PTU
[00:39] testers yes they have thank you testers
[00:41] let's check in with the team to see what
[00:43] issues were addressed and which ones are
[00:45] blockers in this week's burn down
[00:48] welcome back to burn down our weekly
[00:51] show dedicated to reviewing progress on
[00:53] the release of star citizen alpha 3.0
[00:55] we're mp2 you right now so big thank you
[00:58] to everyone who's testing it's really
[01:00] helping us out with our main goal of
[01:02] concurrency and stability testing on a
[01:04] large scale we wouldn't have seen this
[01:06] many new issues without your help so
[01:08] let's check out how things are going
[01:10] this week we were really focusing on
[01:13] trying to close out as many features as
[01:15] we possibly can by the end of this week
[01:18] I think besides maybe one or two
[01:22] those are might slip into next week but
[01:25] for the most part we're really aiming to
[01:27] be feature complete with all the tiers
[01:30] zeroes ads on Friday
[01:38] in cargo we've had some very interesting
[01:40] bugs where the system that allows us the
[01:43] players to interact with the various
[01:45] object crates kind of got a little
[01:48] strange in particular we had one bug
[01:50] where we couldn't really get rid of the
[01:53] cargo crates once they were attached to
[01:55] the users hands they were stuck there so
[01:57] recently I fixed a bug where when you
[02:00] would pick up a piece of cargo off the
[02:03] ground
[02:03] and then die while holding it you would
[02:05] respawn and the crate would be attached
[02:09] to your hand and not only would it be
[02:11] attached to your hand it would be
[02:12] permanently attached to your hand so if
[02:14] you died subsequently we'd still be on
[02:17] your hand and if you logged out of the
[02:18] game log back in later it would still be
[02:21] there in fact the only way to get rid of
[02:23] the of the crate was to wipe the account
[02:26] and reload it so there's a pretty
[02:27] serious bug because that's also really
[02:29] funny
[02:30] we called it box hand but the fix was
[02:34] whenever you would pick it and then die
[02:37] we would make sure to detach the crate
[02:39] from the hand and make sure that that
[02:41] detachment was persistent
[02:43] so that fixed the bug however is
[02:45] surfaced again later and it looked like
[02:48] the problem was is that if you crashed
[02:50] while holding the crate you would still
[02:53] have the issue because the original
[02:55] attachment was still persistent so it
[02:57] fixed it a second time where the holding
[03:01] aining cargo at all is not a persistent
[03:03] attachment and instead if you died or
[03:06] crash or anything while holding a piece
[03:08] of cargo in your hand it won't persist
[03:10] and so unfortunately you won't have a
[03:12] piece of cargo attached to your hand or
[03:14] fortunately depending on how funny you
[03:16] think it is for shopping for example
[03:18] we're in bug fixing in Polish mode or
[03:21] feature complete ready to release but we
[03:23] just want to get it at that final step
[03:25] ready ready for you guys so working
[03:28] through some bugs for example some of
[03:30] the shopkeepers facial animations aren't
[03:32] playing only in grim hex we couldn't
[03:35] figure out what was going on finally
[03:36] identified the cause and now we're
[03:38] getting that fixed up we're also playing
[03:40] around with it with getting the ship
[03:41] weapons and the shops trying to mess
[03:44] with the layouts a little bit to see if
[03:46] we can get those situated in the shops
[03:47] along with the ship items it's going to
[03:49] be a tight squeeze but we'll see if we
[03:51] can we can get
[03:51] that in there we're also working on
[03:54] inventory issues some of the shops are
[03:57] selling things that maybe they shouldn't
[03:59] we want to kind of spread it out a
[04:00] little bit so it encourages you guys to
[04:02] visit all the different shops get all
[04:03] the different inventories but other than
[04:06] that shopkeepers are looking pretty good
[04:08] too we're having a final review this
[04:10] week and we should sign those guys off
[04:12] you're pretty soon as well the
[04:13] commodities kiosk is pretty much closed
[04:15] out now we've just got a final few very
[04:17] minor bugs that were just ironing out so
[04:20] that that feature is pretty much
[04:21] complete
[04:25] so with mission givers we've put it into
[04:28] a QA TR which is basically our way of
[04:31] saying that test is is able to basically
[04:36] go full-bore on those and make sure that
[04:38] it's hitting the quality level that we
[04:40] need so all the behaviors are complete
[04:43] and we're looking at more missing some
[04:46] minor transition animations but we
[04:48] should get those in very quickly I will
[04:50] do a review of that either today or
[04:52] tomorrow and then it should be good to
[04:54] go
[04:55] lately I was mostly working with bugs
[04:57] related to the mission givers that
[04:59] includes the setup that includes the
[05:01] bugs behaviors all that stuff
[05:05] we had lots and lots of small issues
[05:08] because we had a lot of untested
[05:09] technology we had a lot of assets that
[05:11] were never been in the game before and
[05:13] we had behaviors that were only made for
[05:15] demos most of our bugs related to the
[05:17] edge cases where for example player
[05:19] decides to stand from the chair and
[05:21] leave in the middle of the conversation
[05:23] or leaves the room or just stand still
[05:27] and stares you for like 20 minutes what
[05:30] happens then it's all about catching
[05:33] those small things that players would
[05:35] think about doing the things that you
[05:37] would never do in the actual demo
[05:43] this past weekend we had a review of all
[05:45] of our ships we went in and the lead
[05:47] tech designers Kirk Tomei and and John
[05:49] crew went through all the different
[05:51] ships and and just kind of ran them
[05:53] through their paces made sure all the
[05:55] different checks off the check boxes
[05:57] were or present mainly just with ship
[06:01] setup so we we have a big list of issues
[06:03] we got a big list should say smaller
[06:05] list now of issues that we need to work
[06:08] out and get fixed up before we finally
[06:10] release but we can see the light at the
[06:11] end of the tunnel the functionality is
[06:13] is pretty much there we just got to work
[06:15] out the final kinks on turrets one of
[06:18] the more interesting things that has
[06:19] happened is a result of the code that we
[06:22] put in place to allow planets to rotate
[06:24] now this means that we are rotating a
[06:27] zone of space inside another zone space
[06:29] and this has had some interesting
[06:31] effects on how projectiles trajectories
[06:33] are calculated and how our unmanned and
[06:35] ma'ams turrets operate those projectile
[06:38] trajectories for the last week I've been
[06:39] working on the targeting system with the
[06:43] put behind weapons including your pistol
[06:46] your vehicle weapons on ships and
[06:49] turrets the problem was that the entire
[06:52] engine was built on this aim controller
[06:54] providing a world space position and so
[06:57] what we had to deal was that whatever an
[06:59] input that we took in had to be
[07:01] converted into zone space saved in zone
[07:03] space and then converted back out this
[07:06] would also have to happen between remote
[07:10] clients so that you would aim where you
[07:12] intended and whoever was on the other
[07:15] side would also would be aiming at the
[07:16] same would see you aiming at that same
[07:18] position so you had to make sure that
[07:21] the number that you converted to in zone
[07:23] space would would be spread amongst the
[07:27] other clients and then convert it back
[07:28] into a world space position in the last
[07:30] weeks turrets I've received a lot of
[07:32] tension from from me from the AI
[07:35] standpoint of course it was not
[07:38] completely about bags or fix or fixes
[07:42] but rather
[07:43] there were features that were much
[07:46] needed so there are mainly two features
[07:49] that we introduced that one is the line
[07:52] of fire checks and the other one is the
[07:54] accuracy control the line of fire checks
[07:58] would have to ensure that weapons are
[08:02] not firing nothing else but what is the
[08:07] intended target so for example weapons
[08:10] should not fire across surfaces of
[08:12] buildings the accuracy control is there
[08:16] to define an assign skill for for NPCs
[08:22] so unless the accuracy for example is is
[08:26] there - it's basically means how good is
[08:31] an in PC to shoot when shooting toward a
[08:35] target
[08:39] with ifcs and a second stage afterburner
[08:42] I feel that we're in very good states
[08:45] with those we will do minor minor
[08:50] polishing minor bugs but for the most
[08:53] part those are where we feel like it
[08:57] will go out with Rio - any any kind of
[09:02] major complaints from PTU or anything
[09:04] like that then we'll we'll investigate
[09:06] those and see if the they're valid with
[09:09] chris's vision and then push forward so
[09:11] we found these bug recently well it was
[09:15] not a bug but kind of a bad situation in
[09:18] the game
[09:19] where you could actually go to a landing
[09:22] area and try to land but you didn't know
[09:24] where to go because everything was like
[09:27] everything was with a similar color you
[09:31] couldn't see clearly which land in Paris
[09:33] yours and with these new rules we have
[09:36] now if you try to live in a place where
[09:38] you shouldn't then you get like a
[09:41] criminality rating and so on so it's not
[09:43] ideal so we had to do some changes to
[09:46] make this actually proper properly shown
[09:51] to the players so the player can
[09:52] actually know what's going on so in this
[09:57] case the first thing we did was just
[09:59] changing the landing pads because before
[10:02] you didn't have any assign landing pad
[10:05] you could land anywhere you wanted and
[10:06] now since you have to request once you
[10:10] get one Juanita assigned to you that's
[10:12] the only one with the UI showing you
[10:14] that's the highlighted area that's the
[10:16] place you should go we have also like
[10:18] increased the size of the UI make it
[10:21] more visible more visible from a greater
[10:24] distance so in general just easier to
[10:27] see easier to identify hopefully it will
[10:30] cause less problems for players
[10:37] so with starmap we feel from moby glass
[10:40] perspective that's done and it's
[10:42] finished we've been implementing it into
[10:45] the ship radar so when you're actually
[10:48] in the cockpit and you can switch
[10:50] between your radar and star map at the
[10:52] same time we're in progress of working
[10:55] not out the first rollout will probably
[10:58] be to any ships that have 3d radars and
[11:01] then from there a later release we will
[11:04] be working towards ships that have to
[11:07] dear aid ours and also 2d to 3d radar
[11:10] conversions so that's that will come in
[11:14] future releases but at least in the
[11:16] short term for three oh we will be
[11:19] looking at releasing that one of the
[11:22] systems have been working on for 3-0 is
[11:24] the new int system that we have in game
[11:27] where the hint system works is we've
[11:31] created a bunch of hints event macros
[11:35] that we've been scattering around the
[11:37] game code and so we can fire events from
[11:41] various actions that take place within
[11:44] the game things such as for example
[11:48] we'll have an event that fires when you
[11:50] get bad in the PU when you use your
[11:53] mobile glass when you're low on oxygen
[11:55] when you're low on ammo all those kind
[11:58] of things and the way these events then
[12:01] work is we have we have an array of int
[12:07] triggers within the hint system they're
[12:09] listening out for certain events
[12:11] depending on our design I've wanted to
[12:14] actually show the hints to the players
[12:17] in game and so for example might have a
[12:20] in trigger and it's waiting for the
[12:23] event that's that's fired when you using
[12:26] mo be glass that hint trigger can then
[12:29] say okay show me this in UI string at
[12:34] the bottom of the screen to explain how
[12:35] to use more the mobi glass functionality
[12:38] at that point we also have triggers that
[12:44] work with suppression events so that for
[12:47] example if you're actually doing
[12:50] so an advancing game for hints might
[12:53] have triggered about and we can stop
[12:55] those hints from showing so that we
[12:56] don't end up telling you over and over
[12:59] again how to do things that you've
[13:01] already figured out how to do so we try
[13:03] to make it a nice dynamic hint system
[13:08] that's better guide you through some of
[13:11] the new features and functionalities in
[13:13] 3-0 and pretty pleased with how this is
[13:16] gone because it's been one of the more
[13:18] straightforward systems to get into game
[13:20] and so for free zero we're reaching
[13:23] feature complete status for what we want
[13:27] to do for this patch we're there in the
[13:29] future we'll probably less um extra
[13:32] functionalities and polish putting some
[13:35] new in Savannah as well as we expand the
[13:37] feature set but and for free 0 we're
[13:40] pretty happy with what we've got with
[13:42] the personal inner thought we are
[13:43] working on the finalized menu for that
[13:46] so when you look down or interact with
[13:49] this then it will link to different
[13:53] inner thoughts as far as either opening
[13:55] something interacting with your weapons
[13:57] in Modine so on and so forth and then
[13:59] we're just finishing off the menu on
[14:01] that and then that should be golden UI
[14:04] team has been working on the holo visor
[14:08] and basically just heads-up display on
[14:10] the ships we've gotten the the Holograms
[14:14] working again based off of the new item
[14:17] 2.0 we will be putting them into the
[14:21] proper places and everything like that
[14:23] but as and we're also switching
[14:26] everything over from 2d markers to 3d
[14:29] markers so that's in star map as well as
[14:32] in the AR version of the game everything
[14:34] that you see is a 3d marker and then
[14:37] making sure that that works with combat
[14:40] and and even just looking at a ship
[14:42] targeting the ship and animations
[14:44] associated with that so those have all
[14:47] been worked on and a fair amount of that
[14:49] has been checked in but we're still
[14:51] finding we're still in the final
[14:53] polishes of the actual heads-up display
[14:55] and the feedback for your ship as well
[14:59] as the targeted ship
[15:04] teams made some really really good
[15:06] progress over the last week for 3.0
[15:08] which resulted in us being able to go to
[15:11] PT you on Wednesday last week I made
[15:13] some subsequent pushes to interview
[15:14] since then the last of those being on on
[15:17] Saturday we had QA come in and we
[15:20] managed to actually start through the
[15:22] checklist we pushed up to either car PT
[15:27] you on Saturday at about 6 o'clock
[15:30] something like that which have fixes in
[15:34] for the disconnection problems that we
[15:36] were having from since Wednesday which
[15:38] has like 15,000 and 6 disconnect error
[15:41] which seems to have been caused by a
[15:43] problem in the persistence cache which
[15:45] energy civilian Tom Sawyer took a look
[15:47] at and got fixed up and also had the
[15:49] network latency issues that we were
[15:51] seeing fixed it was well like life in
[15:52] George because of the United States
[15:56] Thanksgiving holidays it was entirely
[15:59] driven in the UK which was the first
[16:00] time I've ever done that and the UK QA
[16:03] over here led by some child were able to
[16:06] do the checklists for the first time and
[16:08] actually we successfully pushed the
[16:10] build out so it was really good
[16:12] following on from that actually going to
[16:15] the larger PTU audience it highlighted
[16:17] quite a few issues that we hadn't seen
[16:20] with the the limited numbers on evocati
[16:22] and one of the big issues was a latency
[16:26] issue that presented itself as first
[16:29] hours rubber banding and like strong lag
[16:33] and we actually had quite a few people
[16:35] investigating that from an Caston indian
[16:38] Clive here and it was quite difficult
[16:40] one to nail down because we had limited
[16:42] resources with Thanksgiving and but
[16:45] thankfully armored over in the US he was
[16:48] also present didn't helped out quite a
[16:50] bit and we were eventually mangoes by
[16:53] Thursday we were able to tie that one
[16:55] down and get that one closed out thanks
[16:57] to go into the larger audience in the
[16:58] PTO and on Friday we came across some
[17:03] nasty crashes that actually stopped us
[17:05] from pushing the they were to do with
[17:09] and the audio of Gatling guns and what
[17:13] was causing the build to brick so we had
[17:15] the audio team here and Rob Johnson and
[17:17] they took around on Friday evening we
[17:20] were able to get a fix in which meant on
[17:22] Saturday we were able to push again
[17:24] because we had enough resources in the
[17:26] UK to push another build over the
[17:28] weekend for evocati and the book I'm
[17:30] going to talk about is a little pesky
[17:32] bug that plagued us for about eight
[17:34] months now and which happens only on
[17:37] release bills so what happens is when
[17:40] you when you walk through a level like a
[17:44] cue 11 and you fire your gun sometimes
[17:47] the reverb comes out completely and we
[17:51] don't know why because it doesn't make
[17:52] sense it doesn't happen on development
[17:54] bills only on shipping bills so we had
[17:57] to spend some time to get down to the
[17:59] coop bit of the problem and it was quite
[18:02] interesting what we found out
[18:03] so when the reverb system is initialized
[18:06] with everything it reads data from XML
[18:09] so for development builds this XML data
[18:13] is human-like readable by a human
[18:16] however for shipping bills it's it's
[18:19] binary so it uses a different XML reader
[18:22] inside the engine to figure out what
[18:24] kind of data it should set up and so on
[18:27] and between those between the binary XML
[18:31] reader and the normal XML Rita there's a
[18:33] mismatch though they yield different
[18:35] outcomes for different for the same data
[18:38] so in our case it was that our XML
[18:43] contained a billion attribute with a
[18:46] human written string true as opposed to
[18:50] false OTR Yui and what the shipping
[18:53] version of the binary XML reader reads
[18:55] expects is actually a 1 or a 0 so it
[19:00] always failed in shipping builds and we
[19:02] didn't notice for a long time it's out
[19:03] there in the PTU in the wild so we
[19:05] needed to fix it as soon as possible so
[19:07] the fix is not gonna it's not gonna be
[19:09] that so the fix is nothing that I will
[19:13] do the engine team will do this probably
[19:15] today but it's a really fun case of
[19:19] audio making the problem really really
[19:22] apparent but
[19:23] nothing to do with audio itself so
[19:25] generally as we push to the PTU and we
[19:27] go through our clothes our clothes test
[19:29] groups we'll see more and more
[19:30] convoluted bugs and harder to reproduce
[19:32] bugs and these are generally the really
[19:34] really nasty issues that we've got to
[19:36] perfect and get rid of before we go to
[19:39] the widest community which is our live
[19:40] release getting thousands of people
[19:42] playing concurrently stresses the game
[19:44] servers and services like shopping and
[19:46] quantum travel in a way that's
[19:48] impossible to do in earlier stages of
[19:50] testing this has allowed us to get an
[19:52] overall view of stability and server
[19:55] performance while in PTU we can look
[19:57] daily at what the team has accomplished
[19:59] release updates using our Delta patcher
[20:02] and get quick turnaround on issues
[20:04] preventing a live release or making
[20:07] steady progress and at the time of
[20:08] filming this we're at 240 must fix
[20:11] issues for our live release candidate of
[20:13] star citizen alpha 3.0 the team has
[20:16] checked in over 491 updates to the
[20:18] branch and while we're closing dozens of
[20:21] issues every day leadership evaluates
[20:23] what's absolutely necessary to address
[20:25] to go live as quickly as possible see
[20:28] you next week here on burndown remember
[20:31] you can always dig into more development
[20:33] details by checking out our weekly
[20:35] production schedule report on the
[20:37] website yes you can an alpha 3.0
[20:40] introduces a variety of new features and
[20:42] locations some of the biggest are
[20:44] Crusaders three moons to help players
[20:46] explore these vast and varied landscapes
[20:48] we introduced the dragonfly and the NOx
[20:51] these open canopy vehicles created a
[20:53] special challenge to design and
[20:55] implement as they're technically not
[20:57] ground vehicles or ships but are instead
[21:00] a hybrid of the two that's right these
[21:02] vehicles required special grav Lev tech
[21:05] to hover and fly just above the ground
[21:07] now let's see what the development team
[21:09] had to do to get this unique flight
[21:11] model working
[21:19] hi I'm Matt Lightfoot one of the
[21:21] associate producers at here at foundry
[21:23] 42 in the UK I'm David Carlson I'm a
[21:25] junior game 3 programmer at CAG Andrew
[21:28] Nicholson tech designer at foundry 42
[21:30] all right my name is john pritchett I'm
[21:32] a senior physics programmer here at CI G
[21:34] I'm a flight model specialist I work
[21:37] mostly with spaceships and really any
[21:41] control systems for different types of
[21:43] vehicle zva missiles that sort of thing
[21:45] so gravel EV is a system that forms part
[21:48] of our flight mechanics it specifically
[21:50] affects most of our bikes on the planet
[21:52] so this is the system that makes them
[21:54] levitate off the ground what we wanted
[21:56] to do is recreate you know the iconic
[21:59] hover bike like you see in Star Wars or
[22:02] the you know hover vehicles also from
[22:04] Star Wars but of course we wanted to
[22:06] create this you know as realistically as
[22:10] we can so the concept of gravel F for us
[22:14] is this idea that's it's kind of like
[22:15] maglev you know you have this upward
[22:17] force that depends on the distance
[22:21] between you know the elevation of the
[22:23] bike or the vehicle to the ground so the
[22:25] lower you get the more upward forces
[22:27] available for that you get away you know
[22:30] the last force that it can create it's
[22:32] it's a it's an extra feature on top of
[22:34] the existing flat system so bikes are
[22:36] pretty much considered chips in in the
[22:38] flight control system and we have this
[22:40] extra added layer on them that basically
[22:43] queries the environment around them and
[22:46] tries to orient the bikes vertically
[22:49] first of all we just say okay we would
[22:52] like you to be hovering this high and
[22:54] then using the motion control algorithms
[22:57] that I said before we can specify a
[22:58] positional goal and we'll say hey we
[23:00] want the back to be at this position so
[23:02] what we do is instead of saying a
[23:04] position we say we want the back to be
[23:06] at this height and then we can let the
[23:08] motion control algorithms work ash how
[23:10] much force you need to hold the bike at
[23:13] this hash and so once you're at that
[23:14] point where okay and then we have we
[23:16] have some extra layers on top of that so
[23:18] we have like if you're moving really
[23:20] fast we increase the elevation because
[23:23] you know you're inclined to hit
[23:24] something if you're traveling fast if
[23:25] you're turning we work out how much
[23:28] force is being used to turn the ship and
[23:30] we we roll it based on that so
[23:33] you know you can sort of lean into turns
[23:34] like you're on a bike and then of course
[23:36] we have the collision avoidance which
[23:37] will query if they're you're about to
[23:40] hit something and then try and elevate
[23:41] the bike over it there's some limits to
[23:43] that we we also had the discussion
[23:46] recently of do we want to at some point
[23:49] say hey you you intentionally just drove
[23:53] into a wall we're not going to try and
[23:55] stop you because otherwise you'll get
[23:58] you know flung so high into the area
[24:01] that it may take a couple of minutes to
[24:02] get down to the ground again so at some
[24:05] point the collision avoidance system
[24:07] will say hmm this object is too much for
[24:09] us to bother we'll just let you crash
[24:11] into it and I think that's a reasonable
[24:14] compromise it's really hard to decide at
[24:18] what point do we let the bike crash
[24:20] because generally you don't want it to
[24:22] crash at all it's irritating for the
[24:23] player if you're constantly crashing but
[24:25] there's a point where you've just drove
[24:28] into a wall it's your fault and so we
[24:30] now allow that previously we didn't
[24:31] which I think caused some of the issues
[24:33] of the bikes getting flung into the air
[24:35] a lot of games when they do grab live or
[24:38] hover bike type systems they they tend
[24:40] to use sort of a faked
[24:42] you know collision or it sounds like a
[24:44] hidden wheel or some kind of a surface
[24:46] that's that's riding on the ground but
[24:48] you don't see it and so it very very
[24:51] closely follows the the terrain but I've
[24:54] modeled this you know to to actually
[24:58] work from it you know an upward
[24:59] acceleration so the closer you get the
[25:03] more it can push up so it's more of a
[25:06] bounce and and you never like you know
[25:09] just following the terrain perfectly
[25:11] you're always just kind of skimming over
[25:13] it
[25:14] and so like if the ground comes up too
[25:16] quickly you're gonna skid off it a
[25:18] little bit you know it's it's not
[25:20] perfect I always actually try to design
[25:23] the control systems for for our vehicles
[25:27] as realistically as possible so that you
[25:30] know I have imperfect information and so
[25:33] I'm not cheating so in the case of a
[25:35] gravel EV vehicle now you have sensors
[25:37] that are able to detect your proximity
[25:39] to the ground below you and then also
[25:41] looking out ahead to kind of get a sense
[25:44] for what's coming
[25:45] but it's not perfect so there might be
[25:46] like a rock you know that the sensors
[25:49] don't quite pick up on so if you're not
[25:51] careful you're going to slam into that
[25:52] so the player has the ability to kind of
[25:54] adjust your elevation a little bit to
[25:56] work along with with the control system
[25:58] so if you think you're gonna collide
[26:01] with a rock you can kind of go up a
[26:02] little bit and you know or if maybe
[26:04] you're gonna bump your head on now
[26:05] outcropping or something push down a
[26:07] little bit under it you may have noticed
[26:08] at the citizencon stream when Glenn was
[26:12] flying the knocks around he was being
[26:14] really really careful because at the
[26:17] time the gravel of bikes were quite
[26:19] unstable and if you clipped a rock or
[26:22] you clipped some bit of geometry it
[26:23] would suddenly flip into the air and
[26:25] spin and lose control with the sort of
[26:28] vague goal of they don't feel really
[26:30] good and they lose control I was tasked
[26:32] with figuring out why and trying to
[26:34] address some of those issues and so we
[26:36] immediately like John helping out we
[26:39] went in and tried to take a an overview
[26:43] of the whole system and figure out you
[26:44] know what could be the problem and we
[26:46] have things like hey if the thrusters
[26:49] are being damaged and they can't provide
[26:51] enough thrust to either correct a loss
[26:54] of control or they just can't provide
[26:56] enough thrust to even function
[26:57] you're gonna lose control or maybe you
[27:00] know you're running out of fuel and the
[27:01] thrusters don't have enough fuel to
[27:02] counteract the spin but then we have
[27:04] other issues like the gravel F system
[27:06] for example basically fires these rays
[27:09] out in front of you while you're moving
[27:11] to detect if there's any objects in the
[27:14] way and if there are it will force you
[27:17] off a little bit to try and get you over
[27:19] those obstacles but the problem is it
[27:21] doesn't really have any limit to that so
[27:22] if you for example run up to a wall
[27:24] it'll just fling you right off the Neil
[27:27] fly into the air which is you know it's
[27:30] sort of what you want but there's limits
[27:32] to it right so we went and had a look at
[27:36] those things and decided okay the damage
[27:41] and the fuel actually didn't appear to
[27:43] be as much of an issue as it was and we
[27:47] took a close look at the forces that the
[27:49] gravel of system generates as you're you
[27:51] know moving around and figured out that
[27:53] there was actually some like bugs you
[27:55] know the system is so complicated not
[27:58] complicate
[27:59] it's like I guess highly-strung that
[28:03] very small bugs can have very subtle
[28:07] effects that you that you know there's
[28:10] something wrong but you don't know why
[28:11] and so one of the issues we found was
[28:13] the Ray casting system which is the
[28:16] system that fires Ray's at and you know
[28:18] the whole game uses it for all sorts of
[28:20] things and we also use it for firing
[28:22] Ray's down at three points on from the
[28:25] gravel of bikes to figure out where the
[28:27] ground is and occasionally those Ray's
[28:31] hit the ground and go hey we hit the
[28:33] ground and they come back and tell you
[28:35] that the ground is twelve thousand
[28:37] kilometers away and you're like that's
[28:39] wrong
[28:39] and obviously then you know screws with
[28:41] all the other mats and everything goes
[28:43] awry and you lose control so we found a
[28:46] few issues like that
[28:48] and then one of the big things for us
[28:50] was the the defense system all ships in
[28:53] the game have this defense system where
[28:54] if you get knocked by a missile or
[28:56] something or you know clip a wing on
[28:58] something and your ship begins to spin
[29:00] it will immediately stop all other
[29:02] control and focus on using all thruster
[29:05] force to try and slow down the spin and
[29:06] keep you from losing control and so we
[29:08] brought that system over to gravel EV it
[29:11] was there before but it wasn't really
[29:13] well tested and suited to gravan of so
[29:15] we sort of mixed it in with the gravel
[29:17] EV and we say for example hey if you're
[29:22] spinning stop trying to elevate yourself
[29:24] because you know what happens is you'll
[29:27] start spinning and maybe the front of
[29:28] your bike will be pointing toward the
[29:30] ground and it'll say hey there's an
[29:32] obstacle in front of you it'll try and
[29:33] kick you up in the air while you're
[29:35] still spinning so now we say you know
[29:38] hey you're spinning just stop everything
[29:41] else you're doing stop running the
[29:42] gravel of stimulation and just try and
[29:44] slow yourself down and then we dedicate
[29:47] all power and force to being able to do
[29:50] that and once you've stopped spinning we
[29:53] then try and align you upwards so we'll
[29:56] figure out what your orientation is and
[29:58] set your goal to vertical and we try and
[30:01] get you you know
[30:02] oriented vertically and we also had some
[30:04] issues like we had loads reports that
[30:06] the gravel of bikes get stuck upside
[30:09] down and they can't get out because they
[30:12] can't reorient themselves because like
[30:14] you know the driver's head or something
[30:15] is tipping into the ground we added this
[30:17] new system to basically say hey are you
[30:19] clipping the ground we can ask the
[30:20] physics system if you're touching
[30:21] anything right now and if you are push
[30:24] you up and then try and reorient the
[30:26] ship again and the result is that
[30:28] nobody's reported that they are getting
[30:30] stuck upside down anymore which is
[30:32] really good and this is you know this is
[30:33] a few examples of like a huge number of
[30:36] changes across the board that have just
[30:38] tried to push this more and more stable
[30:40] we fixed a few more issues with the
[30:43] balance system that tries to keep the
[30:46] bike steady so this has say you know
[30:50] you've done your three raycast and
[30:51] assuming one of the Ray casts doesn't
[30:54] give you twelve thousand kilometers as
[30:55] the result it will say okay we now have
[30:57] enough information to create this plane
[30:59] and using that we can orient the ship to
[31:02] I say keep saying ship I mean gravel a
[31:05] bike but we have enough information to
[31:08] oriented vertically and we also don't
[31:11] want to for example if you're moving
[31:14] over some really rough terrain and
[31:16] there's like a hole on one side of the
[31:18] the bike we don't want the whole thing
[31:20] to suddenly lurch over and and and move
[31:23] we'd like you to have a little bit of
[31:25] air of hey the other two points are not
[31:28] haven't encountered some issue and you
[31:30] haven't you know you haven't gone over a
[31:32] pothole so just don't you know shift the
[31:37] bike over and stuff and it's worked
[31:38] really well there was some designers the
[31:41] other day that we're trying to find
[31:42] issues for when you damage the thruster
[31:46] the the gravel of thrusters underneath
[31:48] the bikes
[31:49] and they kept complaining they couldn't
[31:51] crash it which is you know fantastic
[31:54] news a few a few weeks ago we had
[31:56] complaints that crashing the bikes were
[31:58] too easy and now we have complaints that
[32:00] they can't crash the bikes which is good
[32:02] Dave's made some really really good
[32:03] progress as we've reported in our burn
[32:05] down reports and he's making it feel far
[32:09] far smoother and also adding in some
[32:11] mechanics where you transition from
[32:12] Harvey mode up to the atmospheric flight
[32:15] because obviously these bikes I'm just
[32:17] gonna hover along the planet you'll also
[32:18] going to want to be able to kind of fly
[32:20] them think Blade Runner style so he's
[32:24] doing a lot of work there and all
[32:26] so tightening them up so that Andy can
[32:27] do a full balance pass on it as well and
[32:29] that they also work with our atmospheric
[32:31] flight systems like turbulence and drag
[32:35] so that these bikes still controllable
[32:37] and kind of you know obviously fun for
[32:39] you guys to use I've been working to get
[32:41] the performance of the bikes the way we
[32:43] want them so much like any other ship
[32:46] balance stuff when it comes to
[32:47] performance it's the same kind of thing
[32:50] where I'd basically run the numbers to
[32:53] see how much acceleration how much
[32:55] maximum g-force that should allow what's
[32:58] the average acceleration what's the
[32:59] maximum acceleration and then work out
[33:02] using our third order motion what the
[33:04] jerk value should be for each axis of
[33:06] the of the of the bike it's it's much
[33:09] different because we're kind of allowing
[33:11] a lot higher acceleration on these bikes
[33:13] maybe then you might get because the
[33:16] velocity is so low I think that the
[33:18] reasoning behind it so velocities low
[33:21] you can have a bit more acceleration
[33:23] that's the way I see it is sort of like
[33:26] where as you're not going as fast and
[33:27] that's using the afterburner it means
[33:29] you can be a little bit snappy on the
[33:31] turning it's the longest time we've had
[33:33] bikes in and they perform badly whereas
[33:38] people are constantly complaining about
[33:40] the slide eNOS because it's when you
[33:41] when you turn on a bike and you look the
[33:43] direction you want to go and you feel
[33:45] like you're drifting out it really
[33:46] doesn't feel right it's the ship's kind
[33:48] of all like that when you've got the
[33:50] safeties off and that's like that's the
[33:54] that's the way we want it you want to be
[33:55] fighting the slide using boost and
[33:57] afterburner it needs to be a hard
[33:59] challenge we want to have that skill
[34:01] level I think the bikes it's a little
[34:04] less a little less okay to do that I
[34:07] think you need to be a little bit
[34:08] tighter have better performance from the
[34:10] off so that people feel in control
[34:12] mainly because of the hazards that are
[34:15] out there a lot of these planets are so
[34:17] rocky the terrain so undulates all over
[34:20] the place so the gravel apps have the
[34:21] challenge of staying above these rocks
[34:23] and if your performance is poor and
[34:25] you're sliding out it makes it so much
[34:28] worse the USN depending rocks and
[34:30] exploding so I need to make sure that
[34:32] that these bikes are controllable enough
[34:36] that you get in them after waiting so
[34:38] long to try them that you don't just fly
[34:40] into a rocket explode and that's really
[34:42] the the X acceleration on the x axis the
[34:48] making sure that's high enough that they
[34:50] can turn well but it is just making sure
[34:55] I've raised the numbers enough to get
[34:56] the ship flying like tight to the ground
[34:59] and take turns but still making it so
[35:02] that if you use boosts together
[35:04] basically chuck more fuel into the
[35:05] engines and overdrive them you still get
[35:09] that feeling that you're getting more
[35:10] sharper turns when you use it the grav
[35:13] level automatically calculates what it
[35:16] needs to do when it comes to rocking
[35:17] raises you up lowers you down
[35:19] accordingly we do also have something
[35:22] that David's worked on is the you can
[35:24] now strafe up and down we really wanted
[35:27] that I mean with it it's not only the
[35:30] way that you transition between ground
[35:32] hover mode and spaceflight or in
[35:35] atmospheric flight and the bikes if
[35:37] there is a large rock coming up we don't
[35:39] want to make it so it automatically
[35:41] lifts you for everything I mean there is
[35:42] a bit of give-and-take
[35:44] small rocks yes we wanted to bounce over
[35:47] them without you having any input if
[35:49] you're coming towards a large rock you
[35:51] do have the ability to strafe up to get
[35:53] higher and dodge that it's really
[35:55] important that we had some player input
[35:57] to control this stuff so it isn't just
[35:59] purely whilst yes automation is good
[36:03] with some of the stuff you you haven't
[36:04] player input matter if the gravel layer
[36:08] was important to gravel a vehicle tends
[36:10] tall so far has always been also a
[36:13] normal flight vehicle so it has
[36:15] thrusters that can control it on all six
[36:19] degrees of freedom just like any vehicle
[36:21] but when you go into gravel EV mode it's
[36:23] basically removing the upward thrust and
[36:26] downward thrust and because this is a
[36:28] more efficient way to travel across land
[36:32] so all the upward force will be
[36:35] generated by the gravel ev's and all the
[36:37] downward force will come from gravity so
[36:40] if you're cruising along and you hit you
[36:43] know like a rim of a canyon you're just
[36:45] gonna fly off and the only thing that's
[36:47] gonna bring you down is gravity
[36:49] and then as you approach the ground the
[36:51] graph lives get close enough they kick
[36:52] in and it'll cushion you in and you'll
[36:53] just continue on from there so the
[36:56] question of your ability to transition
[36:58] in and out of normal flight gravel EV
[37:00] mode is really separate from that I
[37:03] mentioned before that you have the
[37:04] ability to kind of raise and lower your
[37:06] your goal elevation which is normally
[37:09] automatically controlled by the gravel
[37:11] of system based on the terrain that
[37:13] you're going over but you can right
[37:15] right rise up to a certain level and if
[37:19] you hold it you know I think strafe up
[37:21] is the control the reason to that if you
[37:23] hold that at that peak level for just a
[37:25] moment you'll break out of that and
[37:27] continue flying on so that that's how
[37:30] you would get out into normal flight
[37:31] mode and then once you fly back down
[37:34] within range of the ground and it's safe
[37:38] for it to drop back into gravel eV and
[37:40] it will continue on into gravel mode
[37:42] automatically we pretty much have the
[37:44] ability to control your elevation in
[37:48] gravel if so previously you know we say
[37:50] hey this is a safe height to be you know
[37:53] skimming along the ground but we now
[37:55] actually give you a little bit more
[37:56] control so if you try and strafe up and
[37:58] down and grab level you can move the
[38:00] target height that you're hovering Ash
[38:02] and there is sort of like this this
[38:06] invisible plane that is the limit of
[38:08] gravel EV so you will hold space and
[38:11] you'll strafe up until you get at this
[38:14] point and you'll feel the bike sort of
[38:15] being stuck there for a second
[38:17] keep holding space the bike will like
[38:19] pop ash and you'll see on the UI that
[38:22] it's changed into SCM mode and at this
[38:24] point you're flying so you can lift up
[38:26] and you can fly around you can go to
[38:28] much higher speeds because you're
[38:29] effectively a plane at this point you
[38:31] can fly around you can go wherever you
[38:33] want and past that point if you want to
[38:35] return you need to go below this
[38:38] artificial plane that you popped out of
[38:41] and the system automatically pops you
[38:43] back in and you can't for example
[38:46] accidentally pop out of that system by
[38:48] you know if you like went off the edge
[38:50] of a cliff
[38:51] we won't kick you out of gravel F even
[38:52] though you're I know 20 meters in the
[38:54] air so you'll fall back again and this
[38:57] was sort of a decision to not confuse
[39:00] players that they're constantly
[39:02] changing the handling like if you pop
[39:04] the player out of Gravlin mode their top
[39:06] speed suddenly increases because they're
[39:08] a plane and it could be quite confusing
[39:10] if this happens without the players
[39:11] intention so we ask you to explicitly
[39:15] say hey I want to actually fly right now
[39:18] and at that point you'll pop out and
[39:19] you'll fly away and this is you know
[39:23] from the atmospheric flight point of
[39:24] view this is out of the new challenges
[39:26] of having the bikes control reasonably
[39:29] well in atmospheric flash they're really
[39:31] small and they're they're easy to push
[39:33] off course and so there's not really a
[39:36] lot of there's not really not a huge
[39:39] amount of force that's required to make
[39:42] them lose control or spin in atmosphere
[39:44] and so we have to sort of more carefully
[39:47] decide how to apply the atmospheric
[39:51] forces when you're flying like that and
[39:53] it also means we can do other things
[39:55] with the gravel of bikes where we can
[39:59] first of all you can well you're sitting
[40:02] on the back of the bike race so if you
[40:03] try currently if you try and go into
[40:06] space on a gravel a bike you can but
[40:09] it's not the intended design what we
[40:11] actually want is for you to for you to
[40:14] burn up and you know be killed by the
[40:16] move to space so what we would want you
[40:20] to do then and this is what the intended
[40:22] design is is for you to say come in with
[40:24] your Cutlass or your your constellation
[40:26] ursa thing and you're in flying up high
[40:30] and the bike like comes ash of the back
[40:32] of your Cutlass and you could fly it and
[40:34] have full control all the way down to
[40:36] the surface and then as you rejoin the
[40:38] surface it'll pop into harbour mode and
[40:39] you can skate a lot and like you're on a
[40:41] bike it's quite interesting what happens
[40:43] on the reverse when you're going like a
[40:44] really high cruise afterburner speeds
[40:46] and you come into these zones where you
[40:48] want to switch to hover and how the ship
[40:50] deals with the deceleration which is
[40:53] basically using its own hover mode
[40:55] deceleration rather than its flight mode
[40:56] deceleration so there will be these
[40:58] periods when you come in to land cross
[41:00] the threshold change the hover mode and
[41:02] you're going to have to take
[41:03] while to slow down so you have to really
[41:04] judge how much space you have when you
[41:06] make that transition atmospheric drag
[41:08] and and these things actually come into
[41:10] play with with gravel of vehicles as
[41:12] well it's not just base ships so the
[41:14] higher up you go you know the more drag
[41:18] comes into play so the idea is that when
[41:21] you're in a gravel of mode and you
[41:23] really hugged up tight to the ground and
[41:25] your grav levels are working is sort of
[41:26] in a I call it Terra planing but it's
[41:29] like a drafting mode almost it's like
[41:31] deep decreased drag so you can slide
[41:35] very very very easily when you're close
[41:38] to the ground and so like you're
[41:41] especially when you start looking at
[41:42] afterburner speeds you're not gonna be
[41:44] able to reach those speeds when you're
[41:46] at higher elevations because the drag is
[41:48] keeping you back holding you back and
[41:50] you're reaching terminal velocity so you
[41:52] really only reach those speeds when
[41:54] you're on a nice flat you know and and
[41:56] you're not bouncing up into the air
[41:58] definitely benefits you to read the
[42:00] terrain and stay down and avoid jumps
[42:03] you know and try to stay tight to the
[42:05] ground for long stretches and that's
[42:07] where you really get flat out cruising
[42:09] you know it's gonna be very important in
[42:10] racing you know because the difference
[42:12] between you know going over a jump and
[42:14] and you know the drag pushing against
[42:17] she's gonna slow you down versus
[42:18] somebody who maybe takes a different
[42:19] course than you know they'll they'll get
[42:22] an advantage at that in that moment so I
[42:24] think that'll result in a lot of sort of
[42:26] you know give-and-take in these races so
[42:29] the bikes are a better option when you
[42:30] need to get somewhere quickly and you
[42:31] are not bothered about risk and people
[42:33] engaging you obviously they're quicker
[42:35] than Rovers but Rovers have turret on
[42:38] top for defense and they also have total
[42:41] cover around around the pilot and the
[42:43] copilot or driver and co-driver as the
[42:46] case is so it's just to get somewhere
[42:49] quickly without without much armor
[42:51] really gravel abs are really really
[42:53] important to us because with 300
[42:55] obviously we're implementing the
[42:56] procedural planets and you guys need a
[42:59] way to be able to travel around these
[43:00] planets quickly that isn't just your
[43:02] ships you know we've got the Rovers
[43:03] which are fairly slow but you know
[43:05] well-protected and gives you plenty of
[43:07] tactical options but then we've also got
[43:09] the bikes that are lighter armored
[43:11] you're more easy you know you're easier
[43:12] to be killed and the gravel of is kind
[43:15] of a system that sits with those bikes
[43:16] mainly
[43:17] because we've got the planets those
[43:18] bikes need gravel a burner system to
[43:20] keep them hovering without being flung
[43:22] off into the atmosphere in Logie
[43:24] environments what I love about you know
[43:26] terra planning is that you know every
[43:28] now and then you're cruising along and
[43:30] you reach a flat and and you know the
[43:32] bike will just settle down really low
[43:33] and you know when you recognize that you
[43:35] punch the afterburners and you just
[43:37] start cruising at a speed that you can't
[43:39] reach any other way you know and then
[43:40] once you're you're going at that high
[43:42] speed you're you know right
[43:43] white-knuckling it you really kind of
[43:44] read in there train coming up because
[43:46] any little bumps gonna send you up into
[43:47] the air and it's gonna you know the drag
[43:49] is gonna slow you back down
[43:50] currently the gravel f system is is
[43:53] feature complete any extra work is
[43:55] pretty much polish we have some like for
[43:58] example it can be quite difficult when
[43:59] you're traveling at high speed and a
[44:01] gravel a bike to shoot people because
[44:04] they have guns on the front and so we
[44:07] had this idea that we would allow you to
[44:09] have a bit of pitch control so you can
[44:10] move the ship like this and you can't
[44:12] you can't do at the moment but it would
[44:14] mean that you have a little bit more
[44:16] range to shoot your gun so we're gonna
[44:18] do that but past that point its feature
[44:22] complete and we're quite happy with it
[44:24] extra work is just making it feel really
[44:26] good and making it you're ready for
[44:29] prime time and and polished enough that
[44:31] everyone can use it quite easily but
[44:33] aside from that the system is we're
[44:35] really happy with where it's at and
[44:36] we're satisfied that it's finished he's
[44:38] a lot of fun yeah it's like every Star
[44:41] Wars fans dream isn't it to get on a
[44:43] speeder bike fly across the planet
[44:46] the phrase terror planing it really
[44:48] seems to capture the feeling of what
[44:50] it's like to fly these vehicles yeah as
[44:52] you heard there's no invisible wheel at
[44:54] work the graph left tech is actually
[44:57] calculating the upward force the bike
[44:59] needs to keep from hitting the ground
[45:01] that really makes it a unique flight
[45:03] experience in the game it sure does and
[45:06] that's all for today's show but before
[45:08] we go a big congratulations to the
[45:10] observer test winners out of thousands
[45:12] of entries seven randomly chosen winners
[45:14] now have an anvil Hawk added to their
[45:17] fleet you also have until December 11th
[45:19] to help pick the next drake ship head to
[45:22] our website and cast your vote and while
[45:25] you're there check out the Q&A s on the
[45:27] hawk and the Hammerhead which are still
[45:29] on sell until December
[45:31] there will also be a QA focused on land
[45:34] claim licenses which will be published
[45:35] before the end of the sale
[45:37] and finally our holiday live stream is
[45:39] Thursday December 21st which focuses on
[45:42] squadron 42 you stay tuned next week for
[45:45] some details about the show a big thanks
[45:47] to all of our subscribers your support
[45:49] allows us to make even more content for
[45:51] community engagement and December ship
[45:54] of the month is the Drake Buccaneer so
[45:56] be sure to take it out for a test flight
[45:58] and thanks to all of our backers we
[46:00] couldn't make such an ambitious game
[46:01] with such wide-ranging ships like the
[46:05] Dragonfly and NOx without your support
[46:07] so thank you very much yes thank you
[46:09] very much and until next week we will
[46:11] see you around the verse
[46:15] [Music]
[46:43] thank you for watching so if you want to
[46:46] keep up with the latest and greatest in
[46:47] the star cities in the squadron 42
[46:48] development please follow us on our
[46:50] social media channels see you soon
[46:59] [Music]

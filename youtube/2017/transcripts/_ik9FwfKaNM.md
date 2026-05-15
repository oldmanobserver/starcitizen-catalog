# Star Citizen: Around the Verse - Burndown Episode III

**Video:** https://www.youtube.com/watch?v=_ik9FwfKaNM
**Date:** 2017-08-25
**Duration:** 14:22

## Transcript

[00:14] hey everyone if they are Karen Davis
[00:17] Gamescom started this week in Cologne
[00:19] Germany and we're very excited by all
[00:21] the feedback coming in from the
[00:22] attendees as we're showcasing some of
[00:24] the planetary experiences you'll be
[00:26] playing in the 3.0 release now as we
[00:29] promised last week instead of a full
[00:31] round the verse we're doing a standalone
[00:33] episode of burn down our weekly show
[00:36] dedicated to reviewing progress on
[00:37] issues blocking the release of star
[00:39] citizen alpha 3.0 now last week we ended
[00:42] at seventy-seven total must fix issues
[00:45] broken down by 12 blockers 37 criticals
[00:47] 23 hives 5 moderates and zero trivial x'
[00:50] so let's check in with the team on how
[00:52] it's going and outpost for interview so
[01:02] here is the garage area I did for
[01:05] matsing laps key exterior so major
[01:08] challenge I got is like this is a
[01:10] massive landing zone so we really have
[01:13] to take care to design the lighting very
[01:16] carefully to make sure we get the player
[01:18] to the right place and take this large
[01:21] gorgeous example and I live scene system
[01:26] it's a very simple room but we also have
[01:28] to consider like once how the lighting
[01:31] another life once the huge cow should
[01:33] see this will forget dropping so here we
[01:36] have to look after both the illuminance
[01:39] in this is carefully so as a character
[01:42] so I do have some other examples a ski
[01:48] area working on the lighting I use the
[01:54] amico samples quite finely spaced and we
[01:58] have to make sure the lighting works
[02:00] well on the environment and inheritance
[02:03] so normally when working on because
[02:06] actually we have lots of problems about
[02:08] darken areas like was a character move
[02:11] to the corners we can have a problem so
[02:14] that's why we introduce those character
[02:16] and make sure the Mikey Works post on
[02:19] environment and character discs so right
[02:24] now we're working on state machines or
[02:26] animation flow graphs that allow us to
[02:29] be able to break down the performance
[02:32] capture that was shot and be able to
[02:35] focus on which idols the actors
[02:40] naturally moved into and be able to
[02:42] select those and be able to quickly then
[02:46] put those idols onto the performances
[02:50] edit them together and also how those
[02:52] different performances connect what sort
[02:55] of low micro transitions and things like
[02:57] that that they need and this is an
[02:59] example of one of those animation flow
[03:01] graphs which shows how the character
[03:03] gets from stand idle into the different
[03:06] things that he does these are our
[03:09] hawkers people selling things at a stall
[03:13] that that you'll see so actions like
[03:16] calling over greeting when you're
[03:19] looking at something when you're
[03:20] browsing something and things like that
[03:22] that we're getting we're doing this so
[03:25] that we can get as much of that actors
[03:27] performance into those characters once
[03:30] we we have this this is separate than a
[03:33] behavioral state machine so a behavioral
[03:36] state machine will say when you come in
[03:40] to his range he's going to beckon you
[03:44] over when you're up at his counter he's
[03:47] going to greet you but he's not going to
[03:51] say goodbye to you until he's greeted
[03:53] you so the behavioral state machine is
[03:56] this governing logic that controls what
[04:00] the the Hawker does and the animation
[04:04] flow graph tells the animators how best
[04:07] to go about creating edits for in
[04:10] creating new assets for it so that we
[04:13] can we can get those performances in the
[04:15] game
[04:16] I wonder if it's a issue we're on the
[04:48] ship side of things we're implementing
[04:50] all the iya mobile glasses inside the
[04:52] cockpits which require unique bogie
[04:55] glass animations to be framed properly
[04:58] so you can use it in all the cool
[05:00] features that are involved with that so
[05:03] there's there over there's the movi
[05:05] guidance of course there's an error but
[05:09] yeah framing that so you can press all
[05:11] these buttons have to be provided
[05:13] doesn't the interiors broken so when I
[05:15] load it in everything falls to the
[05:17] bottom well as the ship's falling the
[05:20] landing gear is still like steady like
[05:23] out and it's fine and it's just
[05:25] following the biggest issues I've been
[05:26] hitting for the landing gear and the
[05:29] damage are well the landing gear want to
[05:33] retract over the land and deploy it in
[05:37] space which is the opposite behavior
[05:38] makes it really hard to test this new
[05:41] springy landing gear compression that
[05:42] we're doing so here's here's what I'm
[05:44] seeing right now so it'll retract and
[05:50] [Music]
[05:53] but actually that one worked
[05:55] what the hell that one worked but I
[06:00] [Music]
[06:03] there we go that's my bug oh and they
[06:07] broke off so that's not good I think it
[06:10] was happening is like we changed a lot
[06:13] about it persistently removes it all but
[06:16] on creating a load out from the path
[06:19] that it's using before the debug 10 it's
[06:22] not correctly threading through the
[06:23] persistence flag to actually enable
[06:25] adding the new items so you spawn you
[06:27] have nothing including your heading so I
[06:30] think that if I change that it should
[06:33] persist correct like the spot you have
[06:35] to begin
[06:36] absalom so one thing that we just
[06:39] knocked off our plates is we've been
[06:40] working with the design team on
[06:43] randomized NPC names so that when you
[06:46] have a mission rather than being called
[06:48] NPC one or security guard or something
[06:50] generic like that we're creating a
[06:52] system in which to create character
[06:54] names and assign amount so we just
[06:56] uploaded our first batch for testing in
[06:59] the next mission sprint and I think
[07:00] currently there's some seven million two
[07:03] hundred thousand current combinations of
[07:06] names available and that was only about
[07:07] half our list so we shouldn't be able to
[07:09] have a robust community of NPC names
[07:11] which is needed when you have solar
[07:14] systems after solar system that need
[07:17] NPCs walking around so that was pretty
[07:19] exciting so we're trying to figure out
[07:21] the odds of getting any one person's
[07:23] name we've been hiding like dev first
[07:25] and last names in there so hopefully
[07:28] you'll be able to see some of the
[07:29] designers walking around the biggest
[07:31] challenge we're having right now 43.0 is
[07:33] we're wanting to put lights and all the
[07:34] helmets and so we are struggling to get
[07:37] engine earrings time to fix some bugs
[07:40] that are going on with the the lights
[07:42] being all the put in the helmet because
[07:43] it's a it's not as simple as you think
[07:47] of just dragging and dropping a light in
[07:48] it's complicated because it goes into a
[07:51] different entry than it would and just
[07:52] like a normal asset like it's not just
[07:55] an art asset because it's also pulling
[07:58] in something pulling in a light asset
[08:01] from dataforge which is a separate
[08:04] thing entirely so it's not like just
[08:06] putting a light in the level it's having
[08:09] to pull it from somewhere else
[08:10] and it right now the lights are not a
[08:12] lot aligning to the correct place so
[08:15] even if we put the light in and where we
[08:17] want it to be and tell it where it's
[08:21] supposed to go it's not attaching to the
[08:23] helper so that's a big problem for us
[08:25] right now the other big focus for the
[08:26] character team right now is just
[08:27] polishing up all the assets so we're
[08:30] polishing up pretty much anything that's
[08:32] going into the game now just kind of
[08:33] giving it a good second look to make
[08:35] sure that it looks like it's good to go
[08:37] I'm making sure there's no bugs with it
[08:39] making sure all the textures are coming
[08:41] make Owen King making sure everything's
[08:43] included which is an inclusion exclusion
[08:46] process which is basically making sure
[08:49] that we're wanting all the files to go
[08:50] into the build that we want to go into
[08:53] the build so if you forget one something
[08:55] we'll just not show up bro show up with
[08:57] a replacement texture or you know that
[08:59] happens occasionally especially when
[09:01] we're making all these color variants
[09:03] for all these different assets if we
[09:05] forget to include one of the materials
[09:06] ulsan it just disappears so it's just a
[09:09] little bit of extra work there oh yeah
[09:11] currently for three oh we got we
[09:15] actually of a lot of item text that we
[09:18] have to do basically needs to be sort of
[09:19] localized and connected and stuff like
[09:21] that because we have all the stores are
[09:24] coming online in the shopping and stuff
[09:25] like that
[09:26] and so basically we have a lot of ship
[09:31] components clothes armor weapons
[09:34] you know weapon magazines all that stuff
[09:37] and all that needs not only just a name
[09:42] description but we've actually started
[09:44] to handle the hook up with data Forge
[09:47] ourselves so we're actually connecting
[09:49] it in the engine and stuff like that so
[09:51] we're sort of doing checks to make sure
[09:53] that the stuff is coming through and if
[09:54] strings are broken and stuff like that
[09:56] so that's taking a lot of time and also
[10:00] with the emissions coming online we have
[10:02] a lot of procedural mission texts that
[10:04] we need to do and so we'll had worked up
[10:07] a spreadsheet formula that allows us to
[10:09] basically randomize within the
[10:13] spreadsheet so we can kind of test out
[10:14] but basically need so it's basically a
[10:16] bad libs thing
[10:17] we write a sentence with like you know
[10:20] you're being hired to pick up blank
[10:24] which could be a box a crate or whatever
[10:28] and take it to destination and center
[10:33] and so basically we not only write the
[10:35] mad lives but we have to write the
[10:36] variations and so the spreadsheet that
[10:38] he made will basically Auto randomize it
[10:40] so we can we can kind of spot check
[10:43] everything to make sure it's it's
[10:44] plugging in all right what I'm working
[10:46] right now on for the 3-0 release is this
[10:48] new feature that we call illudium gain
[10:51] for momentum behavior so this is a
[10:53] simple test map that I use for my
[10:56] development of the led update for a
[10:58] moment and behavior what I'm going to
[11:01] show you right now is first like the how
[11:03] the behavior will change when you are
[11:05] close and when you are far so in this
[11:07] case if I jump in game this behavior
[11:10] will test the communication of some
[11:12] specific facial and outer lines in this
[11:15] case the audio is one loud out of line
[11:19] that we would use in a shopkeeper
[11:21] behavior and the behavior just went five
[11:24] seconds and then triggers the line if I
[11:26] go far we will see that the first of all
[11:31] the character were Tebow's because all
[11:33] his animation will be posed and its
[11:35] movement will be poses physics a
[11:37] signature will be most and in the
[11:38] behavior the video will update its
[11:40] on-screen the weight will update and the
[11:43] communication will immediately succeed
[11:45] because it's not really important if
[11:47] there be a is not close what I want to
[11:50] show you is basically this force update
[11:51] is dependent on the action areas that
[11:54] are this green area around the character
[11:56] so when a character is inside an area
[11:58] that is visible for the player then it
[12:01] will anyway at least simulate aligned
[12:03] with this behavior
[12:06] if the Aria is also can basically not
[12:10] visible right now we use a 100 pixel on
[12:13] screen size to decide if something is
[12:17] arranged or not for the blade so you see
[12:19] I'm going very far they are a still
[12:21] green and eventually it will turn red
[12:24] and the back draw information on screen
[12:27] without some date for its behavior of
[12:30] the are in and the other issue is when
[12:33] we blow up the big ships the debris is
[12:36] not rotating so it looks like LEGO
[12:40] pieces kind of just moving earth like
[12:42] this so where we've got fixes in the
[12:45] works and I should be getting new code
[12:48] very shortly and we will be fixing this
[12:52] stuff up you know it's gonna be a late
[12:54] night now as you can see things change
[12:57] almost every other minute since we're
[12:58] never not working or testing star
[13:00] citizen right now we've resolved 22 and
[13:03] only added 3 to our must fix list this
[13:06] means we're at 68 issues left we've
[13:09] checked in over two thousand four new
[13:10] changes and the remaining overall bug
[13:12] and task count for 3.0 is 3519 it's been
[13:17] quite the week across the entire company
[13:18] and as we resolve more issues we get
[13:21] increasingly energized coming down the
[13:22] homestretch to the first release two non
[13:24] CI G testers so check back next week
[13:27] here on burned down
[13:36] [Music]
[13:59] thank you for watching so if you want to
[14:01] keep it with the latest and greatest in
[14:02] the star citizen the squadron 42
[14:04] development please follow us on our
[14:05] social media channels see you soon
[14:15] [Music]

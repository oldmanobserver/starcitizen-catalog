# Star Citizen Live Gamedev: AI Sprint Report

**Video:** https://www.youtube.com/watch?v=glWrbONBMwc
**Date:** 2023-03-31
**Duration:** 1:04:28

## Transcript

[00:04] hi everybody Welcome to Star Citizen
[00:08] live uh the AI spring report I'm your
[00:10] host Jared Huckabee and if you've never
[00:11] seen Star Citizen live before it's where
[00:13] we take about an hour at the end of our
[00:15] week hang out with some developers and
[00:18] talk about this project that we're all
[00:20] uh working on on this week's show
[00:25] I'm doing something a little different
[00:26] we're bringing back a an older format
[00:29] that we haven't we haven't visited in a
[00:31] while called The Game Dev format that's
[00:34] where we're actually going to hang out
[00:36] with the developer and see a little bit
[00:39] of their actual work so whereas most of
[00:41] sarson lives are generally talk and
[00:43] discussion this will be a much more
[00:45] visual Star Citizen live than normal uh
[00:48] and it this one specifically is a
[00:50] follow-up to yesterday's inside Star
[00:52] Citizen now if you haven't seen
[00:54] yesterday's inside Star Citizen you
[00:56] should absolutely go and check that out
[00:57] uh that's what we do where we did what
[01:00] we call a Sprint report which was
[01:01] another format that we hadn't brought
[01:02] back in a while a Sprint is using when
[01:07] we use Agile development for game
[01:08] development Sprint is where developers
[01:10] go off they work for about two weeks in
[01:12] our case it's two weeks but the length
[01:14] of a sprit can change depending on the
[01:15] project they go off on their own for two
[01:17] weeks they come back present some work
[01:20] to everybody people give notes people
[01:22] take notes and some sometimes they go
[01:26] okay that's done I'm going to move on to
[01:27] another thing or they say okay I'm going
[01:29] to go back and continue on this for
[01:30] another two two weeks and come back
[01:32] later uh Insight star says yesterday is
[01:35] where you saw the Sprint work of a bunch
[01:36] of teams the interactables team the
[01:39] environment team
[01:41] um the ships the ships team stuff like
[01:43] this what we did not include yesterday
[01:45] was a bunch of stuff from the AI team
[01:47] because the AI team has had uh quite a
[01:50] few productive Sprints over the last
[01:52] quarter so what we decided to do is
[01:54] instead invite AI director Francesco
[01:57] raguchi to the show Fran how you doing
[02:00] hi guys you doing all good I have a
[02:02] friend in our Frankfurt studio uh and
[02:04] basically we get we're going to give him
[02:06] control of a computer and let him play
[02:09] some internal developer reviews uh
[02:12] videos and basically give us uh sort of
[02:15] director's commentary uh not sort of
[02:17] directors commentary he is a director
[02:18] that's absolutely director's commentary
[02:20] now this is to mimic the type of review
[02:23] that we actually do internally so on
[02:25] this week's show you are going to see a
[02:28] literal example of the exact same kind
[02:30] of reviews that we do internally every
[02:33] single week but instead of presenting to
[02:35] the various directors of the Precision
[02:37] Universe he is going to present to you
[02:40] the Star Citizen Community so uh with
[02:43] that uh Fran let's see if your see if
[02:45] the computer is working is the computer
[02:46] working
[02:48] do we got that
[02:49] trying to move my mouse all right
[02:52] so I think I just like a small uh
[02:55] additional information from my side
[02:57] right a lot of those as you said a lot
[02:59] of those videos are internal uh videos
[03:02] recorded directly by the different
[03:04] developers that worked on these features
[03:05] right so some of these builds and you
[03:08] know local builds with files that might
[03:10] not be perfect so you would see some
[03:12] glitch some glitch I know backs that
[03:14] might we might have already fixed
[03:15] feature you know and follow-up builds
[03:19] yeah so of course like keep in mind that
[03:21] one and I think it's it's it's cool
[03:23] because you guys can see how we work on
[03:25] stuff how we review the things and then
[03:28] of course you will see some of the bags
[03:30] that we also usually have while we work
[03:32] on yeah still it stilettum O2 says oh my
[03:36] God this isn't live because video is
[03:38] recorded being shown but shown live
[03:39] exactly
[03:41] exactly so uh where do we start today
[03:44] friend what are you going to show us uh
[03:46] I would start with the perception of
[03:48] vehicles so let's just move it this one
[03:51] so you can see here still click right in
[03:53] the middle there you go so basically
[03:54] first of all again this is our uh like a
[03:57] test map that we would build
[03:59] what we had until now was a there was a
[04:03] different perception not a different
[04:04] perception but usually beagles could
[04:06] perceive beagles and NPCs could perceive
[04:08] NPCs then of course our perception
[04:10] system is based on census so they could
[04:14] add and use different senses for example
[04:16] characters have a radar they could
[04:18] receive radar
[04:20] um information I would just lower a
[04:22] little bit the volume because like it's
[04:24] it's just my headsets otherwise and what
[04:28] we tried to combine here was the
[04:30] basically the work related to perceive
[04:32] from audio stimuli related to vehicles
[04:35] but also visual stimulus stimuli so what
[04:38] happens here is like of course we have a
[04:40] definition on for example of our
[04:42] character can see for other NPCs when we
[04:46] are talking about Vehicles the
[04:48] information is slightly different right
[04:50] so a large vehicle can be seen from
[04:53] further away uh being put away and you
[04:55] know ground beagles maybe a smaller they
[04:58] can be seen at the middle distance so
[05:00] while we expand it here
[05:02] there's a lot of work that Andrea has
[05:04] been doing uh so basically there is a
[05:07] lot of information about the vehicle
[05:08] propagating his presence to possible
[05:11] observers uh based on the the size of
[05:14] the vehicle but also what you see here
[05:16] is these little spheres that are around
[05:19] the vehicle our audio stimuli that gets
[05:21] generated and those are dependent on for
[05:24] example the strength of the Thruster so
[05:26] you know the strong is the energy that
[05:29] is put into the movement the Far Far
[05:31] Away uh some of this information is
[05:34] perceived of course these are being an
[05:36] internal video what you need to imagine
[05:38] is that also the de facto is made in a
[05:41] way for us to test things so you see
[05:43] this fear that you might think say oh
[05:45] maybe it's just too small or it's too
[05:47] big but this is just purely for testing
[05:49] the system and some of the lines you see
[05:51] here for example is uh visual uh
[05:54] perception so you see that they perceive
[05:57] right now the the being as well but it's
[06:00] uh
[06:02] abstracted
[06:04] and they try to attack the target they
[06:06] say now they can NPCs can actually query
[06:09] uh also Vehicles as targets they can
[06:12] select it through our selection system
[06:14] of targets and attack it and also of
[06:17] course based on their web and they will
[06:18] be more or less effective in these Keys
[06:20] uh you know it's more like a cinematic
[06:22] moment when you try to attack it with a
[06:24] rifle it's not that they can really
[06:25] damage the the vehicle but they do react
[06:28] and they try to you know perform their
[06:31] best actions so so the the red lines are
[06:34] they know it's there but they can't see
[06:36] it the green lines are they know it's
[06:38] there and they can see it what are the
[06:39] blue lines yeah so there are different
[06:42] ones like for also like there's some
[06:43] information related for example if
[06:45] they're friendly uh if they're not you
[06:47] know of the enemies that different type
[06:49] of information like the last position
[06:53] um some comes basically some colors
[06:55] comes if the last position comes from
[06:57] visual information or you know from
[07:01] audio information reader and stuff like
[07:04] this but like the other thing that you
[07:05] see here is that there is this uh this
[07:07] information at the center it also tells
[07:10] you when was the last update from vision
[07:12] for example for division uh because we
[07:15] try to be distributed uh to not in this
[07:18] case there are four guys so it's not a
[07:19] big deal but like when we have 2000
[07:21] characters in pu we also try to
[07:23] distribute a bit better uh the updates
[07:26] but also still getting it because for
[07:28] example with the one thing we changed
[07:30] some time ago was about
[07:32] when we would get perception update
[07:34] based on the frame rate of the server
[07:37] this one now is more with entity system
[07:40] component we could expose how many kind
[07:43] of ticks update we could get between the
[07:45] different updates but now with this uh
[07:48] what we call the high scheduler where
[07:49] now we can specify better what is the
[07:52] time framing which we try to get this
[07:54] update and we still try to distributes
[07:56] of course the frame rate is too late you
[07:58] know it was small still takes a little
[08:00] bit of time for them to get all updated
[08:02] but not as much as it was before
[08:06] priority based on you know the guys that
[08:09] are close to you and the one that are in
[08:11] a fight and something like this so so
[08:12] obviously there's four guys here and you
[08:15] know as soon as the vehicle comes by and
[08:17] generates enough sound that's the big
[08:18] bubble that you're seeing they're like
[08:20] okay we're aware of the ship the ship
[08:22] flies around and then they get visual on
[08:24] it and they see it the ship comes back
[08:25] around they lose visual three of the
[08:28] guys or three of the people go and start
[08:32] moving around the building to find it
[08:34] but one of them doesn't what's the
[08:36] difference in Behavior there is there's
[08:38] some randomized element of this is there
[08:40] um yes so there is there I see three are
[08:43] going different one different things why
[08:46] is that one first
[08:48] that one specifically I can't tell you
[08:51] right now but I suspect that this is
[08:54] about the timing that we use for the TPS
[08:56] queries so what is a TPS query TPS
[08:58] queries are query in the environment
[09:01] because I don't remember just to use
[09:03] some concept I remember if in this video
[09:05] they were running the exact combat
[09:07] Behavior or if they were just running a
[09:09] test behavior that Andrea has made for
[09:11] this specific video that I can't
[09:12] remember in the detail I also don't
[09:14] remember when it is exactly this video
[09:16] from because this is this is quite a an
[09:19] old one let's say compared to the thing
[09:20] so uh I just think that guy's done could
[09:23] that be it could have been a suggested
[09:25] back there for that guy but basically in
[09:28] theory is like what we do is that we
[09:29] distribute the query request for what
[09:31] they should do and also not everybody
[09:33] can actually try to move based on
[09:35] different trades one thing that you see
[09:37] here is like first of all the one that
[09:38] you were describing when they perceive
[09:40] it they have a bar on top right so the
[09:43] perception of style still goes through
[09:45] the new changes we're doing for squadron
[09:47] where
[09:48] based on the intensity of this stimulus
[09:50] basically you know the bar goes up and
[09:53] they only recognize the target when the
[09:55] bar is fully you know into the different
[09:58] states so they have different reactions
[09:59] right you can have like what was that or
[10:02] it's like oh let me go investigate or
[10:03] let's go phone in combat when it's ready
[10:05] to go full in combat right and then of
[10:07] course it scales down but it's less
[10:08] important once they're already in combat
[10:10] the back throw so that guy at the end
[10:12] you just decided that guy Isis I suspect
[10:15] yeah I suspect that there was some
[10:18] failure in his behavior it is my
[10:19] suspicious and then he ends up going
[10:21] into the tactics that is actually trying
[10:23] to move and position himself in a way
[10:26] where you can see it this is why it's
[10:28] probably not moving but what's next it's
[10:31] just by suspicious so what's next
[10:34] let's go to weekend show
[10:37] a bit of the trolley and elevator works
[10:39] so these are another things that Daniel
[10:41] has been working on on the tech side
[10:44] um what we want is to allow the MPC to
[10:47] basically navigate through the
[10:48] environment exactly as a player would do
[10:50] right so if
[10:52] we have eliminators that connect
[10:53] multiple floors and the MPC wants to go
[10:57] from one floor to another now they
[10:59] understand this connection so what we
[11:01] use as a Transit manager that is boat
[11:04] elevators or actual Transit you know the
[11:06] the transit carriages
[11:09] basically create a potential link that
[11:13] means that even if there is no no match
[11:15] connection the NPC knows that they can
[11:17] they can basically move from one floor
[11:19] to another how to navigate to that floor
[11:21] comes from the movement plan
[11:23] and in this case you see the difference
[11:26] he understands there is a connection it
[11:28] goes to close to the elevator it leaves
[11:31] the trolley in this case you press the
[11:33] button once you press the button the
[11:35] elevator comes you understand the
[11:37] delivery is coming because then there is
[11:38] new navigation links that it will pop as
[11:40] you see here because in here it leaves
[11:43] the trolling
[11:44] uh it goes to the console on the side of
[11:47] the elevator that has like a little
[11:49] button it's not super visible here but
[11:51] recycle little console there then these
[11:54] new links the green ones are basically
[11:56] connected to different zones the
[11:58] elevator to the external Zone then you
[12:00] can find a path here understands that
[12:02] needs to wait and press the new uh
[12:04] button to go to the floor that it wants
[12:07] and then basically the elevator tells us
[12:09] when we reach the right floor because
[12:11] multiple people could be there also the
[12:12] player could be there and pressing some
[12:14] other buttons so the elevators could
[12:15] stop it from one mesh to the other the
[12:18] mesh to that and then they move to their
[12:19] next uh mesh yes so you see here there
[12:22] are two things interesting here is the
[12:23] usage of the trolley let's buy this
[12:25] little uh jiggling that you see that you
[12:27] know this is one of the back that we're
[12:28] working on
[12:30] um but NPC now can actually use the
[12:32] trolley as the player would they are
[12:34] really connect to that they really use
[12:36] the state machine uh you know correctly
[12:38] to to push it around and then they can
[12:42] also inject
[12:43] these are these are big change that
[12:45] we've done in the in the past year so
[12:47] basically any Dynamic path
[12:49] can get additional information from the
[12:51] environment when we pass through
[12:53] environment we can actually understand
[12:54] is that oh is the door closed should the
[12:56] door be pushed to you know a button to
[12:58] should be pushed for you know being open
[13:01] is the door itself having this panel or
[13:04] is the panel somewhere else
[13:06] because we also have other situation for
[13:08] example where you know you might turn
[13:10] off the light and the NPC understands
[13:12] that right then it needs to investigate
[13:14] it's what we call uh you know the
[13:16] destruction and and and
[13:19] for the NPCs so they can resolve that so
[13:22] they can understand that the light
[13:24] they've seen going off can be turned on
[13:26] from you know a consult somewhere in the
[13:29] level so it is all like a systemic
[13:31] basically so we have to we do have to
[13:33] move on we're a quarter of the way
[13:34] through the show already we're only on
[13:36] our second video uh I do have to ask you
[13:38] I do have to ask before we move on
[13:39] though how do we know how afraid this AI
[13:42] is before getting on the elevator
[13:45] the elevator killing him
[13:48] uh well it's uh it's not that afraid
[13:51] this one now it's a very strong sword
[13:53] not impressive it could be off right you
[13:56] know he could have a trade that is a bit
[13:57] more cowardly and then just want to say
[14:00] something the air should hesitate just a
[14:03] little bit before they started on board
[14:04] they're funny parties we could actually
[14:07] do it because with trades and those
[14:09] navigation links have actually
[14:10] information about which stabilizations
[14:12] they are we can add even different costs
[14:14] so maybe if somebody is afraid to visit
[14:16] elevator and there is a stair or a ramp
[14:18] in my prefer the ramp you know I'm not
[14:20] using the elevator so we can actually
[14:22] set up those things so what's next oh
[14:25] next I would go to these other
[14:27] improvements that Mars has been working
[14:29] on that is the extension on the
[14:31] navigation code to allow overrides so we
[14:36] have two use case for this one one is
[14:38] actual environment where a different
[14:40] type of engine size can navigate but
[14:43] with a specific stance in this case this
[14:45] with Crouch stance so you are in some
[14:48] events so normal player understands that
[14:52] you can navigate through right but the
[14:53] regular navigation mesh will not
[14:54] generate
[14:56] so what we have here is we can create
[14:58] overrides for different agent types and
[15:00] see what are the new sizes that should
[15:03] be used for the vocalization and the
[15:04] generation process then we have specific
[15:07] navigation links as you see here both
[15:09] the the ladder but also this Crouch to
[15:12] stand at the end of the the vents that
[15:15] allow the MPC to understand that they
[15:16] need to transition from one state to
[15:18] another and then enter into these
[15:20] different environments another use case
[15:22] that we have is there are some
[15:25] situations especially for some of the
[15:26] older Legacy ships right or Legacy
[15:28] environment that is not perfectly on
[15:30] metrics and now I can create some more
[15:32] adult definition for this environment
[15:35] and still allow the MPC basically to
[15:38] correctly function without having to you
[15:40] know
[15:41] modify basically the the requirements
[15:44] for all the environment but we can make
[15:46] you know a dock for different
[15:48] environment as you see here inside there
[15:49] is a perfect transition you know he
[15:51] understands that there is a transition
[15:53] between standing and crouching you know
[15:55] and crouching and standing back and also
[15:58] as you see here there is also the
[15:59] extension and variations for the ladders
[16:01] as well so IPC can now use ladders as a
[16:03] player does and you know again
[16:07] for the folks who are watching on the
[16:09] live stream right now the videos are all
[16:11] pre-recorded because we would lose half
[16:13] the show loading and unloading levels
[16:15] yeah if we didn't pre-record the video
[16:17] so it's
[16:18] the show is live we're live you can see
[16:20] my you can see me right now hi I'm Mike
[16:22] well we can do it next time is we can
[16:24] pick one of those options and shade live
[16:27] as well
[16:28] because this is cool like you can also
[16:30] like select the character in the middle
[16:31] click in the level and they can just
[16:33] move around I mean you see here this is
[16:35] the this is our our editor as well you
[16:37] know it's just a bit cropped but yeah
[16:39] yeah we opted we often do in these
[16:40] internal reviews we often do the
[16:42] pre-recorded videos because again you
[16:44] would just keep every every director in
[16:46] the company everybody is waiting while
[16:48] you're loading up one level and
[16:49] unloading another level and switching
[16:51] between builds and stuff and it's just a
[16:53] much more efficient use of time
[16:55] I mean we need to respect uh you know a
[16:57] time frame even in the internal project
[17:00] update right otherwise it won't take too
[17:02] long
[17:02] these are a couple of improvements for
[17:06] Locomotion as well that we did in the
[17:07] past months so this is one thing that we
[17:10] had uh before so we use Orca as
[17:13] collision avoidance and the problem is
[17:15] that we're seeing
[17:17] was that we were adding a bit too many
[17:19] constraint that would result basically
[17:22] into a modification of the speed in
[17:24] which a character should should move to
[17:26] for The Locomotion to handle it in a bit
[17:29] strange way right so in this case he was
[17:31] trying to say like ah if that hit the
[17:32] wall but I studied the character but
[17:34] there's not enough space let's go super
[17:35] slow eventually I will pass through and
[17:38] it was not really looking good so we
[17:40] decided to relax a little bit some of
[17:42] those constraints and you know it looks
[17:44] good it looks much better it looks much
[17:46] smoother it was still avoid each other
[17:48] we also have some additional work here
[17:50] that we've done sometime in the past
[17:52] where the capsule that defines the
[17:55] characters especially if they get stuck
[17:57] for different reasons because maybe also
[17:58] players will will stand still there they
[18:01] can shrink and enlarge based on you know
[18:04] when we when we find uh this weird
[18:06] situation you know we try to make it
[18:09] look better as best as we can
[18:12] and then these another things that we
[18:14] had in the pasta where we had a lot of
[18:15] our stops uh into Idol so the characters
[18:18] would just immediately stop and then
[18:20] play the idol that looks not the natural
[18:22] so we work a lot on adding sharp turns
[18:25] starting stops especially for characters
[18:27] so I see as I looks much more natural I
[18:30] didn't have like a proper sharp turn uh
[18:33] video to show this time but they're
[18:35] really similar so we can basically
[18:37] process the path decide where some of
[18:40] those animation can play at best and
[18:42] then you know relax a little bit the
[18:44] constraint of stopping exactly in the
[18:45] spot especially when just they just need
[18:47] to stop basically right for no
[18:50] specific reason it's one of those things
[18:52] that I don't think is always completely
[18:54] understood how important animation is to
[18:57] AI
[19:00] it's the majority of the the eye part
[19:04] because it just sells what the character
[19:06] is doing right and I think as we see
[19:08] right now as well it's like a lot of the
[19:10] issues that we have right in Pew and we
[19:12] are working on for square and it's
[19:14] really to make sure that this situation
[19:16] don't happen because
[19:17] if you don't see anything obviously
[19:19] wrong
[19:20] then it's like you don't really know why
[19:22] I took that path or not it might
[19:24] actually absolutely make sense from a
[19:25] human perspective but if it stops like
[19:28] that it really doesn't doesn't make
[19:30] sense
[19:32] and you know this this will make it
[19:34] really look good but also just the sharp
[19:36] turns for example that we are we are
[19:38] working on right now yeah we have it uh
[19:40] working for lots of the stuff it does
[19:41] mix
[19:42] the flow is so much more natural for the
[19:45] moment
[19:47] I have this other one so it's really
[19:48] cool that's what the Andrea has been
[19:50] working on uh so we started with the
[19:52] idea how we wanted to have uh hazards
[19:55] for AI and then I you know being aware
[19:57] of that but the way we implement it in
[19:59] in these videos most of the time is
[20:01] called navigation cost volumes in
[20:03] reality those are
[20:05] um something we want to rename a little
[20:07] bit it's probably going to be a layout
[20:08] modifier or topology modifier
[20:11] and then they also have additional
[20:14] functionality towards influence the path
[20:16] so as you see here it's like completely
[20:18] empty in a mesh across the environment
[20:20] and once you you basically you can
[20:23] Define some areas the basically enforce
[20:27] a specific topology with specific
[20:29] triangulation so this allows you to
[20:31] modify and enforce specific triangles in
[20:34] specific locations
[20:36] on top of those triangles you can Define
[20:38] what is the meaning of this area for
[20:40] example it could be a danger it could be
[20:42] something they would prefer to be in uh
[20:45] it's something that they might just
[20:46] avoid because I don't know based on the
[20:49] behavior for example an area is less
[20:51] likely to be traversed and I'm just
[20:54] thinking if I'm uh I don't know if I'm
[20:57] in a uh there is an area where people
[21:01] are doing specific operation and when
[21:03] they are doing it maybe it's very noisy
[21:05] you know and then people will try to
[21:06] avoid it in in that situation so those
[21:08] areas can be either statically placed or
[21:10] dynamically created and we will show
[21:12] about today
[21:14] so as you see here there is a
[21:16] configuration that you can select and
[21:19] basically the color that you see here it
[21:21] just shows the different basically each
[21:22] color as a different configuration it's
[21:24] a center different configuration
[21:25] dynamically you see the ID 0 is the
[21:28] regular cost and id2 is more costly so
[21:31] then we have some the back throw that
[21:32] can show uh the path that gets generated
[21:35] and as you see whenever we are trying to
[21:37] go from one side to another it usually
[21:39] based on the length of the pad it tries
[21:42] to avoid it and when you cannot divide
[21:44] because it's still cheaper from the
[21:46] algorithm to pass through it tries to
[21:47] cut it as straight as it can basically
[21:49] try to minimize uh the timing which he
[21:51] is in the more costly area the time it
[21:54] would take the damage they would take
[21:56] absolutely yes or for example one thing
[21:59] that with with the damage
[22:01] we are basically gonna and we are
[22:03] working on right now this like that they
[22:05] are
[22:06] additional things into consideration for
[22:08] example it's not just that that one is a
[22:10] fire hazard but we also we consider this
[22:12] like what are my properties I might be a
[22:15] character that there's a special suit
[22:16] right that doesn't get damaged with that
[22:18] it's I don't know chemical in the area
[22:20] normal people not go there but they have
[22:22] a chemical you know uh Hazard suit and
[22:24] then I can go through basically so
[22:26] basically so we can yeah basically what
[22:28] you're doing is you know it's after the
[22:30] when the level has been designed by a
[22:32] little designer you can go through and
[22:33] you'll mark up the nav mesh and be like
[22:35] and the cost is is like a risk
[22:37] assessment it's it's a it's if I go
[22:39] through here it's gonna cost me in Life
[22:42] or in time or in discomfort or in
[22:45] resource or oxygen or you know whatever
[22:47] whatever the whatever the thing is it's
[22:49] all it's all a matter of of when you say
[22:51] cost it's the cost to that AI in yeah
[22:55] not achieving their goals
[22:57] exactly exactly the cost that is usually
[23:00] with about finder that is a combination
[23:01] of the actual distance they need to pass
[23:04] through but then the distance gets you
[23:06] know weighted also based on additional
[23:08] value and this one but it's like for
[23:11] example so in this case you can see some
[23:12] more
[23:13] um
[23:14] you know the backdraw examples where you
[23:17] know the eye really can pass through
[23:18] Corridor Suite or where you know
[23:20] simulating at the time to be another but
[23:23] we have use cases for this one for
[23:26] multiple things one can be for example
[23:28] image you want to have
[23:30] um pedestrian that goes on the sidewalk
[23:32] and you know uh they don't they try to
[23:36] not be on the road unless they really
[23:37] have to and they might cross only the
[23:40] crossroads so you can actually mark up
[23:42] this environment we we also want to get
[23:44] it you know completely
[23:46] automatic you know so that they can
[23:48] really uh try to do that
[23:51] um extraction of features information
[23:54] the environment you know in automatic
[23:56] way
[23:56] this is with the static one this always
[23:59] allows designers to manually place this
[24:01] information and Mark it up for example
[24:03] there is a bonfire and you know on pu
[24:05] whatever and that would never turn off
[24:08] right it's always there we can just mark
[24:09] it up and say this is a bit more costly
[24:11] for example
[24:12] but the interesting part is the second
[24:15] part that this is really like from this
[24:16] print is super new uh we actually didn't
[24:19] even show it yet the new update so this
[24:21] is like you know uh people will see it
[24:23] even another directors
[24:26] um but basically what it is here is like
[24:28] this is the combination of dynamic
[24:30] generation of uh cost modifiers you know
[24:34] or topology modifiers plus the
[24:37] additional cost coming
[24:38] from the game code you know that is
[24:40] associated with specific danger so in
[24:42] this case the fire so through the UI
[24:44] interface you can see that we can
[24:46] simulate you know uh basically turning
[24:48] on fire on things that can ignite
[24:51] and as soon as something ignites
[24:53] basically the system notifies us of the
[24:56] area in which the fires affect
[24:59] we can dynamically generate these cost
[25:01] modifiers
[25:03] regenerate in a mesh and then
[25:06] the cost gets propagated basically so
[25:09] you see when the fire turns off the the
[25:11] RS basically disappears these are the
[25:14] shapes of the fires that we get notified
[25:16] of that we use for our calculation and
[25:20] then at the end we will show how the
[25:22] characters can I get through the
[25:24] environment you know with fire with
[25:26] Dynamic Fire and this like design space
[25:28] you don't have to set up anything
[25:29] because players can turn you know fire
[25:32] everywhere or you know NPCs could do it
[25:35] as well something can go wrong right and
[25:38] explore them right and it could be more
[25:40] fire so the idea here is that with the
[25:43] different archetypes for the AI you can
[25:46] have an arc AI That's incredibly
[25:48] cautious and they would carefully avoid
[25:51] all the different hazards you know you
[25:53] keep a low cost uh existence and then
[25:57] for the people the AI that were a little
[25:58] more Cavalier a little more you know I
[26:02] don't have anything to worry about they
[26:04] might
[26:04] even choose to go through uh some of the
[26:07] fire because or or if they're very being
[26:09] very urgent if they're emergency
[26:11] responders they might choose to cut
[26:13] through the fire to get to where they're
[26:14] going as soon as possible exactly so
[26:16] these are an example right if for
[26:18] example you you tell the eye to actually
[26:20] go inside the environment that is
[26:21] dangerous they can still go you know in
[26:24] this uh you can see it here like he's
[26:26] still entering the environment because
[26:29] that's its goal but he will try to avoid
[26:32] it until he can basically and then it
[26:35] then it goes in
[26:36] um visit what we want to add as well
[26:39] here now at the next the next Sprint is
[26:43] um this kind of the same the same tags
[26:45] cost modifiers that we use for
[26:46] navigation links so we can tag them this
[26:48] intention that you are describing but
[26:50] also say that it's not just the cost
[26:52] against him influenced but also some
[26:54] costs are so high that basically costs
[26:57] the blockage so that we because the
[26:59] Broadway to making the cost too high so
[27:02] that we saturate the cost eventually
[27:04] right so then it has less impact so for
[27:06] some situation it's like I'm really I
[27:08] don't want to go through at all like I'm
[27:10] a civilian I don't have you know I don't
[27:12] know anything that can protect me I
[27:14] really should never go inside the fire
[27:17] and then we can also make that happening
[27:19] right so that the part finally
[27:20] understands that that is really a no-go
[27:22] and he needs to find another path if he
[27:24] can and then oh it completely fails and
[27:25] because the behavior can handle it
[27:27] because it's Dynamic if the player the
[27:30] player sets fires or creates new areas
[27:33] that cost more than the AI will avoid
[27:35] and that the player puts extinguishes
[27:37] the fire puts the fire out those the
[27:39] costumes really goes back down for
[27:41] example imagine like a mission where you
[27:43] need to save somebody right from a fire
[27:45] building on fire
[27:46] and that you have the guy that tries to
[27:48] pass through but the Pathfinder says
[27:49] that you can't so he will always know
[27:51] that he's trying to escape or follow you
[27:53] right but he can't then we we can react
[27:56] say like hey you need to save me you
[27:58] need to you know put off the fire before
[27:59] I can come with you and then you know
[28:01] you can turn it off and then you will
[28:03] dynamically find the pattern and and
[28:04] follow you basically uh this is all
[28:07] stuff that we'll be able to do with this
[28:08] tank and and to be completely clear you
[28:11] said you hadn't shown that to Chris yet
[28:13] uh Chris have seen the previous one but
[28:16] I don't think that they didn't see this
[28:17] one yet well we publish it for Crystal
[28:19] probably he saw it yesterday night but
[28:21] not officially with my presentation so
[28:22] it's all just uh you might have seen the
[28:25] video
[28:26] uh it doesn't happen occasionally
[28:29] there's a moment where Chris sees
[28:31] something on ISC or scl for the first
[28:33] time before you see it internally I get
[28:35] an email this is very this is going on
[28:37] vacation next week Chris
[28:40] I think this is this is basically a
[28:42] really really interesting things one
[28:44] thing that we were at Andre's experiment
[28:46] we for example is also to say what if uh
[28:50] you know our trolleys left around the
[28:52] environment right you don't really want
[28:54] to go so close to trolleys we can use it
[28:56] with spaceships so that people you know
[28:58] try to avoid we could use these things
[28:59] for
[29:01] um for example to increase the cost of
[29:03] landing area when something is
[29:05] approaching right right so the NPC
[29:07] understands that oh now something is
[29:08] approaching I can't navigate this area
[29:09] but not that close to The Landing Zone
[29:11] you know the landing Zone has a
[29:13] legendary course but then when somebody
[29:15] is landing is even higher for example
[29:18] they do a lot of interesting mechanics
[29:21] with this
[29:22] cool also it's good because you can
[29:25] allow us to modify the the topology and
[29:28] I'm actually allows us to link making
[29:30] navigation links there and forcing that
[29:32] you know the exist and and just because
[29:34] I can hear uh Max note in in my ear
[29:38] metaphorically anyway the fire that you
[29:40] were seeing in there is you know work in
[29:42] progress stuff for the AI team it's not
[29:44] the final and finished effective
[29:47] I would think I wouldn't need to say
[29:48] that but I'm sure there's going to be
[29:50] something better it's better yeah I mean
[29:52] these are all internal things right so
[29:54] and how much time do we have still we
[29:58] got we still got 30 minutes
[30:01] so let's go on the official team right
[30:04] so I split right now into two groups one
[30:07] is Tech where we usually work and again
[30:10] there's much more than you know these
[30:12] are some of the things that we selected
[30:14] um and then there's the featured team
[30:16] that is more focused on some of the you
[30:19] know behaviors and efficient that
[30:21] directly impacting you know combat or
[30:24] um different features
[30:27] and that's how it accuracy right
[30:30] um
[30:31] one thing is like this what we call
[30:32] emergency time so there is um designers
[30:35] can basically control
[30:37] how much the the eye basically is
[30:40] forgiving for the player doing something
[30:42] not correct so in this case for example
[30:45] the play is really standing still in
[30:47] open environment right and the eyes is
[30:49] shooting at him
[30:51] but just to avoid that he he kills him
[30:53] and he doesn't have a chance like you
[30:54] know his life is going down and his
[30:57] health is going down and now next shot
[31:00] is probably gonna kill him so when you
[31:01] see that this blue the the back throw
[31:03] the black in the is it there is a heat
[31:06] chance value so right now for example
[31:08] it's at 28 first of all our eight chance
[31:11] now the new changes that are not yet in
[31:13] po basically it builds up right so when
[31:16] I see a character I'm initially not very
[31:18] accurate and then I end up being with
[31:21] the crazy designer set
[31:23] and then I'm damaging you your health
[31:26] goes down until a certain moment where I
[31:28] give you a chance still to react and do
[31:30] something and this is the mercy that I'm
[31:32] basically yes you see it says Mercy dime
[31:33] it chances zero so the you know the eye
[31:36] becomes inaccurate in that moment
[31:40] and then you have a chance to react if
[31:42] you don't you'll still die
[31:45] um
[31:46] and this is one thing and then we also
[31:48] added basically a better prediction uh
[31:51] what we have right now is because we are
[31:53] more accurately using aiming to actually
[31:56] shoot at the character you know and then
[31:58] use
[31:59] um just the missing from the accuracy
[32:02] now we can basically more correctly
[32:04] estimate where the play is gonna be in
[32:07] the future so that we can try to hit him
[32:09] while he runs
[32:10] oh and then the same accuracy yeah gets
[32:13] applied basically from the regular
[32:15] calculation that we have say for example
[32:17] this distance you know impacting you or
[32:20] the time that they're seeing the
[32:21] character you know the last time in
[32:23] which you know has been hiding uh and
[32:25] all the stuff that we basically repeat
[32:27] they they all contribute to calculate
[32:29] the final accuracy that the character
[32:31] should have for example yeah this
[32:33] distance is much less accurate than when
[32:34] it goes close
[32:37] um and then you see when he's hitting
[32:38] basically and damaging who recorded this
[32:41] video
[32:42] I'm Alex Alex just sending Alex a
[32:45] message that says Serpentine
[32:47] yeah yeah yeah oh yeah
[32:49] you know improve your tactics Alex
[32:52] yeah this is like you know these are
[32:54] very these are an example where for
[32:56] example you can immediately see like
[32:57] these are really things that we do to
[33:00] test it right so like in this case like
[33:02] let's move let's stop right let's see if
[33:05] the accuracy is the same I get damaged
[33:07] the same amount you know then I can move
[33:09] again in that direction but it's not
[33:11] really trying to play you know it's
[33:14] purely like trying to stress out the
[33:16] system and see how it goes
[33:19] uh let me show you like some work that
[33:22] wild has done as well that is enabling
[33:24] uh the usage of turret like mounted guns
[33:26] let's go through it the video but it's
[33:28] actually mounted guns
[33:30] um so as you see the character can go in
[33:32] a mounted guns right now so NPC can
[33:34] actually use it as the player uh they
[33:36] will always try to aim at you everything
[33:39] uses the same accuracy that we you know
[33:42] uh exposed we just spoke about you know
[33:45] there is uh prediction on those weapons
[33:47] you know and uh accuracy effect based on
[33:50] you know the same values that designers
[33:53] have so they can control the accuracy
[33:55] for the specific web and how it you know
[33:57] influences uh the the NPCs the again the
[34:01] speed at which I think one thing that we
[34:03] probably will you know we will
[34:04] experiment with this also the speed at
[34:05] which the character moves not too much
[34:08] for FPS I think you know usually
[34:09] characters move at this lower rate
[34:12] anyway but like when we aim at the
[34:15] spaceship right that could have more
[34:16] impact and will give you more chance to
[34:19] survive right
[34:22] um reaction to grenade is a very again
[34:25] another internal test where we can show
[34:28] you know NPCs uh actually now perceiving
[34:31] uh grenades correctly try to run away
[34:34] from it based on you know where they
[34:36] land so they will react to it and they
[34:39] have a chance of running away or not
[34:42] might still die out of it of course a
[34:45] chance that's still no chance still it's
[34:47] still yeah I mean we can control it you
[34:49] know we can control our quick dish you
[34:51] know they run how fast they react you
[34:54] know again we can control some of these
[34:55] things and designers will have to tweak
[34:58] it so that it's not frustrating for the
[35:00] player if they have a nice shot like in
[35:02] this case right you want to have you
[35:05] know kind of the power on the game
[35:07] otherwise it's not that fun but some you
[35:09] know there is also like a nice thing
[35:11] that is like the NPC
[35:12] pretty much not you know some might turn
[35:16] a different direction so they might not
[35:17] see the grenade so some will see the
[35:19] grenade it will shout it will inform the
[35:21] other ones and the other ones will react
[35:22] because you know one person saw the
[35:24] grenade
[35:26] and of course someone does just to be
[35:28] clear attached behaviors as well used
[35:30] for you know uh evaluating it's not
[35:33] their actual combat sometimes or like
[35:35] they go back to a test behavior for
[35:37] example just to uh be able to try it
[35:39] again even when once they are in combat
[35:42] and some of those videos when you see
[35:44] that they are not reacting always to the
[35:46] place also because we use a lot of C
[35:49] bars that are internal controls that
[35:51] they are meant to also you know not
[35:54] react to the player for example right
[35:55] they react only to the grenade but not
[35:57] to your vision and stuff like this so we
[35:59] can test it a bit better
[36:02] answer a question in chat right now uh
[36:05] from uh uh uh Creeks uh what is that 17
[36:09] says why have they pinned the server
[36:11] status page when it had no updates
[36:12] because that's where the updates would
[36:14] be and will be when there are updates
[36:17] uh where is it
[36:21] oh it's time for you friend I'm talking
[36:22] to the chat okay okay that's fair enough
[36:26] I thought it was aggressive for me
[36:30] cool another thing that we are doing
[36:31] this is a lot for uh you know characters
[36:35] that they will eventually be also useful
[36:37] to hire right uh so these are NPCs that
[36:40] can actually systemically take boxes
[36:43] crates and load them into your ship not
[36:47] into you know trolley and then use the
[36:49] trolley to to move it so as you see here
[36:52] this really like some cool features we
[36:54] worked on first all those things are
[36:56] usables they actually pick up the boxes
[36:59] they understand how to pick it up they
[37:01] is loaded into the trolley so they
[37:03] understand that now there are different
[37:05] actions that they can do just because
[37:06] the the crate is attached so there are
[37:09] different metrics that we calculate for
[37:10] where you can put the Box on sorry now
[37:14] for example the RPC understands that you
[37:15] need to put it on top of another box
[37:18] that is put on the trolley
[37:20] this is all our slotting functionality
[37:22] basically it's like a usable is attached
[37:25] under usable and gets slotted into that
[37:27] base our based on our description and
[37:29] then they can basically use that as you
[37:32] see there is still the back that I just
[37:33] recently fixed so you'll not see it
[37:35] anymore uh eventually at least the time
[37:37] they work on the spot but like the
[37:40] character now understands that the
[37:41] trolley is full and now it can unload
[37:44] the trolley and place it into some
[37:46] specific locations you know so these
[37:49] eventually would be really useful for
[37:51] you know allowing an NPC to load and a
[37:53] lot your ship oh yeah cargo elevators
[37:55] big time what's the what are the green
[37:58] uh cylinders around the trolley so there
[38:01] are uh two things they'll hide the the
[38:04] the
[38:05] um like the taller one that one is what
[38:08] we call alignment slots so it's where
[38:10] the NPC needs to be to perform a
[38:12] specific operation on the object that is
[38:14] on that location and the small one are
[38:16] enter position so that is where the
[38:18] actual animations start to arrive to the
[38:21] location of the diamond slot
[38:23] and when it becomes Red is because it's
[38:24] reserved and it's in usage in that
[38:26] moment basically
[38:28] I feel like that's too tall to stack
[38:30] those boxes
[38:32] yeah you can do three uh you can stack
[38:34] three boxes one on top of the other
[38:36] basically right now with animations that
[38:38] we also have that they you know look
[38:41] very
[38:42] very nice right you already see that you
[38:44] know the weight of the box and how they
[38:45] do it they also you know they're very
[38:47] careful with their back try to stack it
[38:49] in the proper ways to get hurt you can
[38:52] say are we sure that form is proper
[38:54] success yes it's it's training safety
[38:57] training as well my lower back just
[38:59] watching this
[39:01] but it's uh yeah I think there is a lot
[39:03] of tech in this one also enabling
[39:05] disabling for example uh automatically
[39:08] use slots that are allowed to be done
[39:10] for example in this case when is pushing
[39:12] the trolley you automatically disable
[39:14] the ability of somebody else to go and
[39:16] pick up the box for example right uh you
[39:19] know one that somebody takes the box
[39:20] from the trolley that you're just moving
[39:22] around
[39:23] um and then you know you're gonna have
[39:25] some multiple people loading at the same
[39:26] time another one you know pushing the
[39:28] trolley so it's uh I see pushing to try
[39:30] to disabled stability to take load boxes
[39:32] into there and these are really some one
[39:35] it is why they're gray for example these
[39:37] are great because they are disabled in
[39:39] that moment and in this case is taking
[39:41] it right so he will disable while he's
[39:44] taking it they push so somebody cannot
[39:47] remove the trolley while you are taking
[39:48] it already right I find myself thinking
[39:51] about how this works with or will work
[39:54] with volatile cargo like when they be
[39:57] very gingerly moving you know doing at
[39:59] half speed
[40:01] I think that would be also be the
[40:03] support that we need to do for you know
[40:05] the tractor beam eventually there
[40:08] all right because I think there will be
[40:09] a lot of bigger crates that they will
[40:12] not be really able to you know to grab
[40:15] anything like that at least
[40:17] yeah yeah exactly but these are very
[40:20] physical interaction with the world you
[40:21] know that you know our system allow and
[40:24] it's it's really interesting from my
[40:27] perspective yeah
[40:29] so this is like good uh good job of
[40:31] crease
[40:32] and then we have let's go through yeah
[40:36] some attack and defend area these are
[40:38] other things that we call
[40:40] um assignments
[40:42] I think I explained in the past
[40:44] sometimes but for people are not
[40:46] familiar with it it's assignments are
[40:49] busy I sort of commands that we can uh
[40:52] give to NPCs right so we're gonna ask
[40:54] them to defend an area attacking area
[40:57] attack a Target defend myself move to
[41:00] allegation you know loads a box into
[41:03] somewhere else or you know clean up an
[41:06] area of something that they need to
[41:08] clean
[41:09] what is good is these commands can
[41:12] either be exposed to
[41:14] um
[41:15] for example designers in the mission but
[41:19] they can also
[41:20] used for example from wingman comments
[41:24] right you can hire somebody and then
[41:27] from the UI you can call the exact same
[41:30] logic that the designer would ask the
[41:32] eye for specific operations right
[41:35] um
[41:36] so it's purely like it's all systemic
[41:38] it's just like our description how the
[41:41] NPCs can perform specific operation
[41:44] in this case for example there are just
[41:45] a couple of example of attack and defend
[41:47] areas so this is an attack area so what
[41:49] it does he can move into an area that is
[41:52] supposed to attack and then it will go
[41:54] around and search for these areas for
[41:56] example
[41:58] the designer can specify the speed so
[42:00] the urgency that the NPC needs to use to
[42:03] move into the attack area
[42:05] you know it can be far and rushing into
[42:08] what they can say work slow eventually
[42:11] we can also expose like a different
[42:13] range
[42:14] that can be used for different distances
[42:16] but you know you see like in this case
[42:18] it's like kind of it gives you know
[42:20] sells the intention of you need to rush
[42:23] into this area and attack
[42:26] or defend you know for you know what it
[42:29] means and the attack area basically also
[42:32] means that the from the this is all
[42:35] embedded into a peaceful section of the
[42:38] behavior and a combat section right so
[42:40] some of these comments can have a
[42:42] version that happens when no target or
[42:46] no enemy is present and in this case is
[42:48] okay if I need to attack an area and I
[42:50] don't see any enemy what do I need to do
[42:51] first of all I need to try to arrive
[42:53] into that area I need to defend it I
[42:55] should just defend it stay there in a
[42:57] defensive position
[43:01] but then there is also the fact that you
[43:04] can transition into combat somebody's
[43:06] assignment can have their own version of
[43:08] the combat but they can also just
[43:09] influence the regular combat behavior in
[43:11] this case an attack area what it does
[43:13] especially is influencing the target
[43:16] selection so he will always try to
[43:18] prioritize the targets that are in that
[43:19] area to perform that operation and
[43:22] Designs can also switch
[43:24] dynamically which area is going to be
[43:27] used so that the target will change you
[43:29] know and the NPC can actually uh select
[43:33] the new the new targets and then once
[43:35] there are no Targets in the area of
[43:36] course other targets can also be
[43:39] selected on outside the area as well
[43:42] because it's still you know they still
[43:44] make a threat
[43:46] and The Defender as well for example
[43:48] this is a bit of the transition I was
[43:49] telling you like characters can be told
[43:52] to move you know to a different area but
[43:55] also it might already be in combat so
[43:57] one story combat can be told oh you
[44:00] should go into Defender area so what it
[44:02] will do is that it will basically
[44:03] modulate this combat Behavior so that he
[44:05] can move into a nice location to defend
[44:08] that area but without forgetting what he
[44:10] was doing before right in this case was
[44:13] I'm still attacking that enemy and I
[44:15] should still remember that unless a new
[44:17] enemy that is more important comes up
[44:20] right but then you can switch it and
[44:22] then for example this these areas a bit
[44:24] uh overlapping right so he will try and
[44:27] then after to find some nicer cover into
[44:29] that area if the overlapped he could
[44:31] also stay in the same cover and so on
[44:34] and so on right so it's like you know
[44:37] this I hate this person and I'm being
[44:40] told they have to go to fitness area but
[44:41] I must see if I can do both I'm still
[44:43] I'm still trying to do both exactly
[44:45] until I now
[44:47] absolutely you know because again in
[44:49] this case of course in this test case as
[44:51] you see like this is always something uh
[44:53] you know a nice a nice feature that
[44:54] Chris has been working on and why we
[44:57] test you know we also don't want to risk
[44:59] that he dies so we have this guy even
[45:01] like you know he's a civilian completely
[45:03] you know he cannot react I think it
[45:05] possibly was even outside the mesh you
[45:07] know Saturdays but it might just be like
[45:09] a dummy player what we call this
[45:12] assimilation of a player that doesn't
[45:13] really it's not another NPC it simulates
[45:16] a uh you know a player that stands there
[45:18] and then you know these are enemies uh
[45:21] from the faction perspective so they
[45:23] really considered
[45:24] is it a lot that because you can also
[45:27] you know take it and move it and see if
[45:29] he reacts correctly
[45:31] uh what did we show the healer is the
[45:34] last one something that Jake has been
[45:35] working on again this one uh is also an
[45:38] internal things and missions are
[45:40] definitely not final these are majority
[45:42] of those animations are you know uh just
[45:44] blockouts that we use to verify the flow
[45:46] so you know just be aware of that uh
[45:50] there is some net pen usage like so that
[45:52] NPCs can actually react one thing that
[45:54] you see is like you don't expect a guy
[45:57] to go around this guy but these are test
[45:58] behaviors so they don't respect any
[46:01] distance right they are really meant for
[46:03] us to make sure that we can test the
[46:07] flow so the character busy is Reviving
[46:09] him and then he goes back into gun but
[46:11] obviously I would never expect an NPC to
[46:14] go close to a Target like that to revive
[46:15] his friend that just died right because
[46:18] it will die nearly after uh my child
[46:21] does you know might even be you know
[46:22] like the player right now is in god mode
[46:24] as well so he will not die himself
[46:27] um this is another case where if you
[46:29] don't have the trade that you don't have
[46:30] you cannot revive him you can also send
[46:32] a request for a medic and then the medic
[46:36] again this case is coming really close
[46:38] because we are testing it but in general
[46:40] as the medic might try to revive people
[46:43] that they require you know in the right
[46:45] moment if there are respecting the the
[46:48] rules like being far from the target for
[46:50] example being you know a bit more hidden
[46:52] positions but as you see here for test
[46:54] purpose the guy comes in he has a mad
[46:58] pen he goes because he he can revive the
[47:00] other guy cannot so he comes in
[47:04] I mean obviously we try to shoot me in
[47:06] because it's forced as you see here we
[47:09] are just forcing a little bit in this
[47:10] situation the way it just blockouts
[47:12] animation for that the characters
[47:13] doesn't have a gun so you might find the
[47:15] gun back he takes it and then it will
[47:18] fight with uh with the new weapons that
[47:21] he found so what happens in the Healer
[47:24] flow is the
[47:26] was revived you know or you know based
[47:29] in being downstate you know you could he
[47:31] could also be that he is just you know
[47:32] not properly damaged but it's just you
[47:35] know uh being put into an inconscious
[47:39] state but you know when you when you go
[47:41] down you lose your weapon so the first
[47:43] thing you do is try to get back into a
[47:45] state where
[47:46] um you can you know get back another
[47:49] weapon and this is another reason why
[47:51] you don't expect this to happen very
[47:52] close to Target because otherwise you
[47:54] revive somebody comes back in it's next
[47:56] to the Target they will die again it
[47:58] doesn't even have a weapon right so this
[48:00] will happen you know you might see it
[48:02] happening on the background or a bit far
[48:04] away
[48:05] um you know and you have to make sure
[48:07] that you know you you put pressure on
[48:08] the eye so that they don't revive each
[48:10] other as well
[48:11] so we've only got a few minutes uh left
[48:14] before we let you go Fran uh we'll go
[48:17] ahead and open up open it up to some
[48:19] questions from Chad if you have a
[48:20] question uh that's AI related for our AI
[48:23] director you can go ahead and put it in
[48:25] the twitch chat uh preface it with the
[48:26] word question uh it helps me make it out
[48:28] from the other thing and again AI
[48:30] related and I understand that many folks
[48:32] are struggling to get in they're
[48:34] struggling with the 40 or 14 error
[48:36] whichever number it is unfortunately
[48:38] that's not an AI related
[48:42] it's like nor is it a video error so
[48:44] unfort so you have the two of us uh this
[48:47] week on the show we're not the ones who
[48:48] can tell you about that which is why we
[48:50] all are always linking people to the
[48:53] status.robertspaceindustries.com website
[48:54] that's where you're going to find those
[48:56] sorts of informations and stuff
[48:58] um the biggest question before I even
[49:00] have to look at the the thing friend is
[49:03] you've shown us a lot of examples of AI
[49:05] behaviors
[49:07] um that are that are growing that are
[49:09] becoming more complex uh so some some
[49:11] some Advanced tactics and stuff but we
[49:14] don't often see those behaviors in the
[49:17] live game
[49:19] um is that uh I want you to talk about
[49:22] well why why that is that's just
[49:24] strictly bugs or is that uh server
[49:27] performance stuff
[49:31] we have a lot of streams right now right
[49:34] I don't know a lot but we have few
[49:35] streams and whenever we stabilize
[49:37] something right not all the new changes
[49:39] go in immediately into that stream so
[49:41] for example in 318 you have some of this
[49:44] stuff and this is where for example
[49:45] people see a very uh high accuracy
[49:48] because not all the accuracy work is yet
[49:50] in there for example we don't have the
[49:53] mercy time we don't have yet in trading
[49:55] the build up of accuracy over time
[49:58] um some of the balancing you know needs
[50:00] to one thing I'm always saying is that
[50:01] it's very hard to balance the eye for
[50:03] the server that goes at 30 frames per
[50:05] second or a really low frame rate so
[50:07] sometimes some of those values are
[50:10] trying to compensate for some of the low
[50:12] frame rate but then you don't work very
[50:14] well for 30 frames per second or 25 per
[50:16] second that is where people see that
[50:18] Chris is also very high there
[50:21] to you know try to help in some
[50:23] situations but of course the long run
[50:25] that's not what we want
[50:28] um some of these behaviors as well we
[50:29] come with Integrations because we have
[50:31] that many integration from you know the
[50:32] streams we work on into what we call
[50:35] came Dev and then from Game Dev goes
[50:36] into the live stream
[50:38] um whenever we can we try of course
[50:41] integrate as quickly as possible but
[50:43] some of those behaviors might have
[50:44] dependency on other departments work as
[50:46] well for example I don't know changes on
[50:49] the accessing machine or I would you
[50:51] know the specific State works or on
[50:54] animations that are yet as you as I've
[50:57] shown you there might be white box right
[50:59] and those are not read ready to be on
[51:01] the live uh release so we cannot enable
[51:04] all those behaviors I think it has been
[51:06] uh some videos that are seen from PO for
[51:09] example of the reacting to that bodies
[51:12] that were using mpu some of the white
[51:13] box animation they were not playing
[51:15] correctly it is one case where we
[51:17] usually disable these behaviors and you
[51:19] know if they're if they especially if
[51:20] that wrongly enabled from our inclusion
[51:23] and so on and so on but the idea is that
[51:25] you know we want to enable them only
[51:27] once
[51:28] all the directors involved in the future
[51:30] are happy with right because we don't
[51:32] want to you know show necessarily this
[51:35] is also a nice preview but you know
[51:37] everybody involved into this one wants
[51:40] to have
[51:41] his work shown as best as possible and
[51:44] then of course there are also sometimes
[51:46] bugs that we need to fix
[51:48] um some of the things I want to see is a
[51:50] bit of the reaction how we can speed up
[51:51] a bit of the reaction time what's on low
[51:53] frame rate servers so that we can get a
[51:55] bit better experience from you know our
[51:57] players
[51:59] because you know we see like this large
[52:01] difference in experience from yeah
[52:04] frame rate you see a dramatic you see a
[52:08] dramatic difference in the capabilities
[52:09] of the AI uh especially like during
[52:11] Siege of wars and when you jump into a
[52:13] fresh server you jump into a fresh
[52:15] server and CJ Boris and is devastating
[52:18] and then you're not getting winning yeah
[52:21] we really want to have like a more
[52:22] balanced experience right it's not that
[52:24] we don't want but it's a you know it's a
[52:27] little bit about priority Sometimes some
[52:28] of the species needs to happen first in
[52:30] regular development because you unblock
[52:32] other people to
[52:33] basically rather type their missions
[52:36] productive levels right and it's not
[52:38] that the other part is not important to
[52:40] make sure that you know also the live
[52:42] experience is important but you
[52:45] sometimes you need to have a harsh
[52:46] decision you say what you do you want to
[52:47] unblock those guys do you want to block
[52:49] set guys and you need to take some with
[52:51] the resources you have you need to
[52:52] decide how to allocate those resources
[52:54] right for the greater good
[52:56] but
[52:57] we are working hard to make it sure that
[52:59] everybody can experience those behaviors
[53:01] because this is what you know we want
[53:02] you guys to to play with and give us
[53:04] feedback above from Amadeus in the chat
[53:07] how do you assure that AI will not break
[53:09] when their routine or behavior is
[53:11] interrupted by the players players would
[53:13] never mess with AI they would have never
[53:16] kidnap Mission givers they would never
[53:19] love them on the ship and take them to
[53:20] the other side of the star system that
[53:22] doesn't so we have different ways of
[53:24] doing that of course so let's say you
[53:26] have a routine behavior of uh you know a
[53:28] janitor so a lot of our behaviors of
[53:31] course make sure that you know you need
[53:34] to have specific things to perform the
[53:37] operation so you can check what you have
[53:39] let's say
[53:40] Combat 5 starts right and then the
[53:43] general loses you know needs to react so
[53:45] it drops out this this mob is broomstick
[53:48] you know or you know it's bucket
[53:50] whatever
[53:51] then we always need to make sure that
[53:54] the same way as if the gender starts
[53:55] from scratch you pick up you know it
[53:57] needs to be able to pick up those things
[53:59] or it kind of perform specific operation
[54:01] right so of course if the player steals
[54:04] all the broomsticks from the environment
[54:05] well yeah it won't be able to to get
[54:08] that but we can always also allow some
[54:10] specific
[54:11] um other AI coming from Spawn closet and
[54:15] bringing back those things or you know
[54:17] having specific usable that can still
[54:19] provide the NPCs with the required
[54:22] objects
[54:24] that they need to have or to perform
[54:26] specific behaviors that they can restock
[54:28] you know specific objects that they
[54:31] require before they can do the other
[54:32] behaviors and then the other part is of
[54:35] course being assured they their state
[54:36] for us there are different parts it's
[54:38] not just the player influencing the
[54:40] behavior but eventually it could be for
[54:42] example an NPC transitioning from one
[54:45] server to another because maybe it's
[54:47] it's not necessarily enough but maybe
[54:49] it's just performing his duty on your
[54:50] ship
[54:51] and in the case your ship can change in
[54:54] our server and you know we also need to
[54:56] make sure that that one that consistency
[54:58] you know it's propagated for for Its
[55:00] Behavior so a lot of these buildings
[55:02] behavior in the right way
[55:04] and allowing the transition between the
[55:07] different states you know from what you
[55:09] need
[55:10] what you can perform basically
[55:12] from fish 19 uh they ask could AI commit
[55:17] crimes and get a crime stat
[55:20] they could and they could also give
[55:22] crime stats this is one thing that we
[55:25] want to do as well right so if you
[55:26] bother you know too much you know
[55:29] civilians then they could call the
[55:30] police and that one might trigger uh you
[55:33] know a crime sets for you or you know so
[55:36] maybe the guards or policemen can
[55:38] actually you know have specific uh we
[55:41] have that one already with uh with
[55:42] spaceships control like I think we have
[55:44] the the checks that sometimes some
[55:48] spaceship can do on the cargo that you
[55:51] carry around and they can give you cram
[55:53] starts but then you can have we have for
[55:55] example in um you know in the plan to
[55:57] have the thief uh Behavior so maybe you
[56:00] know you can actually make sure that it
[56:02] gets triggered you know it's their crime
[56:04] and then police reacts to them
[56:06] performing the crime uh there's a couple
[56:09] different versions of this question that
[56:10] came in I'll read the one from K on by
[56:12] the way uh that's her name uh what does
[56:15] an AI do if it runs out of ammunition
[56:18] so we have different things
[56:20] when you run out of ammunition you first
[56:23] try to switch to your sidearm right
[56:24] because you might have a sidearm or
[56:26] secondary arm weapon that you can use
[56:28] and then
[56:30] if you can't do anything basically they
[56:32] try to survive right so they can try to
[56:34] run stay in cover and continuously try
[56:37] to search if they find a location where
[56:39] they can loot ammos so this is always
[56:42] going through the the slotting
[56:45] information and slotting functionality
[56:46] that we have so weapons can be found on
[56:48] the ground and you can pick them up so
[56:50] now we have this functionality where you
[56:52] can pick up objects that are on the
[56:54] ground as you've seen in the Healer the
[56:57] animation was blocked out of course so
[56:58] it's not like you know correctly
[57:00] positioned but basically they can go
[57:02] next are usable and pick up something
[57:03] that is not perfectly aligned
[57:06] they can take it from different location
[57:08] means it is a weapon rack they can go to
[57:10] the weapon rack and grab a weapon and
[57:12] then they can loot bodies so they can
[57:14] grab weapons or ammos from bodies or
[57:17] from you know magazines that might be
[57:20] contained into a crate or on the ground
[57:22] so basically they have like a flow where
[57:26] they find the search for something that
[57:29] is you know in a good position it's not
[57:31] too close to Target stuff like this and
[57:32] then again grab it and use it and reload
[57:34] and and you know use the new web on
[57:37] basically and switch to the new weapon
[57:39] oh that answers the question yeah
[57:42] um in the folks who have been reading
[57:45] the monthly report I lost you said this
[57:46] I'm sorry uh folks have been reading the
[57:48] monthly report have seen mention of
[57:50] Apollo uh as a as a new uh term that's
[57:54] got that you know they're used to
[57:55] hearing about subsumption but now
[57:56] they're hearing about Apollo can you
[57:58] tell us real quick what Apollo is Yeah
[57:59] so basically we have two it's always
[58:02] subsumption but basically we have two
[58:04] different tools one that is internal
[58:05] Tool uh basically exactly embedded maybe
[58:08] we can show it in one in one session but
[58:10] this is the internal Tool uh in our
[58:13] editor so what it means is
[58:15] we want to be able to reference things
[58:17] directly in the levels and with the
[58:19] external tool we couldn't do it so we
[58:20] always had like a bit of additional
[58:22] information that where the platforms
[58:24] that were supposed to expose information
[58:26] the external tool
[58:28] this one is basically meant to
[58:29] streamline a little bit the the usage of
[58:33] subsumption uh equation data basically
[58:35] so you can create activities and
[58:37] missions in the internal tool you can
[58:39] create platforms and the idea is that
[58:41] all the internal data gets automatically
[58:44] propagated to the tool without us having
[58:47] to necessarily expose it to the external
[58:49] tool and then you know use an external
[58:51] tool to do these operations Apollo also
[58:54] include some more
[58:55] [Music]
[58:56] some other features that the example
[58:58] didn't have for example the editing of
[59:01] the master graph that Fadi has been
[59:03] working on Michael saw Michael and
[59:04] father our uh you know programmers that
[59:07] are focused on a lot on tools and some
[59:09] systems
[59:10] and uh you will also have like for
[59:13] example we have a different view for
[59:14] Missions
[59:15] where an external tool you have one
[59:18] graph for each logic and now we have
[59:21] kind of a large graph for the missions
[59:23] where you can see the different blocks
[59:24] you can collapse them you know and then
[59:26] automatically understands what you're
[59:28] linking to so you can still create
[59:29] different files that people work on at
[59:31] the same time but also it's a little bit
[59:33] more streamlined here the full picture
[59:35] of your mission in there
[59:37] but basically yeah it's our internal
[59:40] subsumption tool is what basically is
[59:42] meant to grow into you know giving us
[59:45] more power for editing missions for
[59:49] example like one thing that we want to
[59:50] do in the future is like uh or see that
[59:54] can include automatically emissions so
[59:56] we can actually reference data directly
[59:58] from the level
[1:00:00] so we'll do two quick uh two questions
[1:00:02] and we'll let you go from sharks bite
[1:00:05] says will an NPC ever be able to take my
[1:00:08] Med gun off me and revive me so yes
[1:00:12] so if you have friends and PC that are
[1:00:16] meant to support you like what we call
[1:00:17] Body eyes that's one of the things we're
[1:00:19] working on and it's exactly the fact
[1:00:21] that if he knows that you are his friend
[1:00:23] and you are dead then you might either
[1:00:25] use ismat pen or I might find I might
[1:00:29] painting environment that might actually
[1:00:30] be attached to you so it will loot you
[1:00:32] take your med pen and then uh you know
[1:00:35] use it on you to revive you
[1:00:39] technically it just it's the Behavior
[1:00:41] now that we want to work on and last
[1:00:44] anything new you can tell us about
[1:00:45] bartender
[1:00:47] yes bartender no no I can speak for no
[1:00:52] hours no
[1:00:57] that's it thank you for taking the time
[1:01:00] to be here with us this week friend
[1:01:03] that's always a pleasure so it's nice
[1:01:04] like we didn't get to chat a whole lot
[1:01:05] when I was over in Frankfurt so I've
[1:01:07] been looking we've been looking we've
[1:01:08] been trying to find a time where we can
[1:01:09] get together and do this I think we
[1:01:10] originally planned this episode out like
[1:01:12] eight or nine weeks ago and we finally
[1:01:14] you know made calendars and everything
[1:01:17] work
[1:01:18] um
[1:01:19] uh that's it for this week's episode of
[1:01:21] Star season live
[1:01:23] um if you haven't already be sure you
[1:01:24] check out inside Star Citizen yesterday
[1:01:26] uh that's our end of the quarter Sprint
[1:01:28] report for q1 2023 inside Star Citizen
[1:01:31] is going on its regularly scheduled
[1:01:33] Hiatus that'll be offline for about the
[1:01:35] next four weeks uh this show is going is
[1:01:38] taking a week off uh next Friday is a
[1:01:41] holiday I think it's Good Friday
[1:01:43] yeah some that everybody's shaking their
[1:01:46] head I have no idea is is it Fran is
[1:01:47] that what it is it's good Friday okay so
[1:01:49] next week is a holiday so I don't know
[1:01:51] they told me I had a day off so I'm
[1:01:53] going on vacation I'm I'm going to take
[1:01:55] off and I'm gonna I'm gonna take some
[1:01:57] time off uh if you're in Paris uh
[1:02:00] Tomorrow there's a bar citizen in Paris
[1:02:02] tomorrow uh you can join uh Mark Gibson
[1:02:05] and Christian Schmidt and uh uh uh some
[1:02:09] uh some other folks whose names are
[1:02:11] escaping me right now and myself at the
[1:02:14] bar citizen in Paris uh the details are
[1:02:16] on the website I don't know it's in my
[1:02:18] email I'm just going to go where they
[1:02:19] tell me uh and then there's another bar
[1:02:21] citizen next week in Manchester I think
[1:02:25] there's one in Phoenix going on this
[1:02:27] weekend that Tyler uh that the Xylo uh
[1:02:29] Tyler Wicken director of community is at
[1:02:31] so you check that out if you haven't
[1:02:32] already uh yeah and then we'll be back
[1:02:34] here in two weeks with another star says
[1:02:37] life and then we'll be back with more
[1:02:38] inside Star Citizen uh in a month be
[1:02:41] sure you check out uh you keep an eye on
[1:02:43] the the Star Citizen socials and the
[1:02:46] robertspace industries.com website for
[1:02:48] details on 318-1 319 potentially going
[1:02:51] to PTU sometime you know all the bug
[1:02:55] fixes uh
[1:02:57] I don't know what else to say uh about
[1:02:59] you know the
[1:03:01] 40 oh 14 and stuff like this it's it's
[1:03:07] the right people are on the right job I
[1:03:09] am not the right people so I you know
[1:03:12] those folks are working on that stuff
[1:03:14] they will give you the updates when they
[1:03:15] have them uh they're always they're I'm
[1:03:17] in this little chat right here look I'll
[1:03:19] show you the chat
[1:03:22] a chart there where they're constantly
[1:03:23] like we've got this and then the
[1:03:25] diffusion writer is doing that and then
[1:03:26] the cash clearing is doing that and they
[1:03:28] are tracking these things down and
[1:03:30] getting them fixed one by one by one
[1:03:33] until they get to the point where things
[1:03:34] will hopefully return to where we all
[1:03:36] want them to be
[1:03:38] so for Star Citizen life I'm Jared that
[1:03:41] was Fran
[1:03:42] um I'm going on vacation can I see this
[1:03:45] fits well listen take my glasses off
[1:03:47] hold on I'm out of here
[1:03:50] enjoy your time
[1:03:52] be safe
[1:03:54] be kind to one another
[1:03:55] and uh I'll see you again in two weeks
[1:03:57] everybody take care
[1:03:59] hi everybody

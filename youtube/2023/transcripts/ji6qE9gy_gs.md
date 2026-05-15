# Inside Star Citizen: Arena Reborn, Part One

**Video:** https://www.youtube.com/watch?v=ji6qE9gy_gs
**Date:** 2023-06-01
**Duration:** 16:30

## Transcript

[00:00] foreign
[00:00] [Music]
[00:04] earlier this year we introduced you to
[00:06] the arena Commander feature team newly
[00:08] created with some familiar and friendly
[00:10] faces to take the long ignored dogfight
[00:13] module and bring it up to date with
[00:15] today's advances in the persistent
[00:16] universe as well as see if we can't
[00:18] restore some of that feature and
[00:20] Technology test that intention from its
[00:22] earliest incarnations and the very first
[00:25] parts of those labors are currently
[00:27] scheduled to arrive in the upcoming
[00:28] Alpha 320 in the biggest update Arena
[00:31] Commander has seen since it was first
[00:33] introduced so let's throw it now to
[00:35] Duncan and Sam as they represent some of
[00:37] the work their team's been up to in the
[00:39] first of two back-to-back episodes we're
[00:41] calling Arena Commander air space and
[00:44] racing followed by foot Tonk contesting
[00:47] part one the first half
[00:51] if that's not all there on the thumbnail
[00:54] I got overruled
[00:57] earning Commander with a game within a
[00:59] game which lets us take these super fun
[01:01] awesome moments that we've all
[01:02] experienced in the Pu and get them down
[01:05] into this short fun snippet of 10-15
[01:08] minutes a whole pen hop out
[01:10] I think the the most fun about our
[01:12] encounter is that you get to just jump
[01:14] in and play the game that you want to
[01:15] play you don't have to spend time
[01:18] collecting all the stuff that you need
[01:19] to go out you just pick a thing and you
[01:21] start playing it it lets people uh get
[01:24] there and dirty without the
[01:25] repercussions that you experience in the
[01:27] Pu is it possible for Aruna Commander to
[01:30] help the development of Star Citizen yes
[01:32] it can be used for testing things that
[01:33] aren't quite in the Pu yet but will be
[01:35] soon and it can be used for testing
[01:37] things that are already in the Pu as we
[01:39] get closer and closer to death of a
[01:41] Spaceman it becomes a vital part of
[01:45] everyone's time and Star Citizen be it
[01:49] you just want to practice your flight
[01:51] controls you want to practice racing you
[01:52] want to get better at dog fighting or
[01:55] FPS combat you should be looking at
[01:58] Arena Commander to practice these things
[01:59] so that you don't lose everything when
[02:01] you do it in the Pu
[02:06] last time on ISC we talked about all the
[02:09] things that we wanted to do and we were
[02:12] currently working on the whole Lane the
[02:15] foundation's idea that we just needed to
[02:17] hunker down and get get these refactors
[02:19] done so that we can start working on
[02:21] some amazing content which we have lined
[02:23] up now I'm glad to be an ISE again to
[02:27] talk about that content which we have
[02:29] been working on since before we get
[02:31] started I want to share with the team
[02:32] I've got a list here so I don't forget
[02:34] anyone we've got Adam Adrian Bren Corwin
[02:37] Kirk Mark Ricky Samuel Sean hi Sean and
[02:40] Simon all working extremely hard and
[02:42] everyone else and all the other teams
[02:44] that have been extremely helpful in
[02:45] helping us get to where we are today so
[02:47] let's take you through the flow from the
[02:49] beginning to the end
[02:51] thank you
[02:53] it's for the front end which I'm sure
[02:55] you're all familiar with multiple
[02:57] screens and absolute pain to get through
[02:59] we want to clean up that experience get
[03:02] rid of all this Flash clunkiness and
[03:05] unnecessary wait times between screens
[03:07] with the new front end we've
[03:08] Consolidated to everything essentially
[03:10] into one place for everything that you
[03:13] want to do the first thing you'll see is
[03:15] star marine and are in a commander have
[03:17] merged together in a single nice clean
[03:18] interface you can play any FPS game mode
[03:21] any dog fighting game mode whatever you
[03:23] want essentially it's all in that one
[03:25] place so we've taken a more diegetic
[03:27] approach we've got a better 3D
[03:28] representation of pretty much everything
[03:30] we've got a 3D representation of the
[03:32] ship or Loadout that you've got selected
[03:33] and more layers upon this what was
[03:37] originally a 2d UI very flat we want to
[03:40] bring it in line with the diegetic
[03:43] approach that we have across all of Star
[03:44] Citizen and unify it so passions are
[03:47] never included in the game so you have
[03:48] quick and easy access to see everything
[03:49] that's changed about Arena commander in
[03:51] detail since the last patch we're also
[03:53] excited to see that we're working on
[03:55] widescreen support it's still a work in
[03:57] progress and we're hoping to get it in
[03:58] for this release but I wanted to let
[04:00] everyone know that we're working on that
[04:01] to the right is social menus friends
[04:03] less notifications and party and that
[04:05] takes us into the the new Lobby system
[04:06] which we've completely refactored this
[04:08] new Lobby system utilizes the friends
[04:10] and party system which you'll know from
[04:12] Star Citizen in the Pu and works in
[04:14] tandem with it rather than separately
[04:16] you'll be able to invite people straight
[04:18] from your friends list or your party
[04:19] into your Arena Commander Lobby or Squad
[04:22] this new Lobby system is faster more
[04:24] reliable and hopefully be a much better
[04:26] experience than what you're used to and
[04:29] it lets you play with the people you
[04:30] want to play with get into groups faster
[04:32] and easier than ever before so once you
[04:34] click launch you'll go straight into the
[04:36] game and the first thing you're going to
[04:37] notice is the new spawn screen which is
[04:39] on almost every month the new spool
[04:40] screens are our way of essentially
[04:42] making sure that once you're in game you
[04:44] can do things that you couldn't do
[04:45] before in the arena Commander you'll be
[04:48] able to change your ship you'll be able
[04:49] to change your Lowdown in game all of
[04:52] these things are going to be things that
[04:53] you can do with the new spawn screen
[04:54] it's the way that you can see the
[04:56] battlefield from above without having to
[04:59] actually get into the game it's
[05:01] essentially our way of making sure the
[05:02] player knows everything they need to
[05:04] know before they start shooting so
[05:06] what's great about this new spawn screen
[05:07] among many things it finally lets us
[05:09] bring multi-crew to Arena Commander
[05:11] you'll be able to party up with friends
[05:13] and join their ships in Free Flight buff
[05:15] swarm modes and Squadron battles you can
[05:18] just click on their ship and just jump
[05:20] straight into it no longer do you have
[05:22] to awkwardly park next to each other and
[05:24] then get into the other players ship you
[05:26] can just spawn directly into the turret
[05:29] of that person's vehicle so for now for
[05:32] these combat modes you'll be locked into
[05:33] your seat but I'm personally super
[05:35] excited for eventually have an
[05:37] engineering gameplay also in the arena
[05:38] commander and lay in the foundations
[05:40] with the spawn screen it leads into that
[05:43] and this is just the first step we're
[05:44] excited to eventually work on
[05:46] engineering and combine arms gameplay
[05:48] for these mods as well
[05:50] [Music]
[05:53] start looking at Maps new and old
[05:55] starting with the new New Horizon
[05:57] Speedway so the whole New Horizon
[05:59] Speedway has been moved to Green the
[06:01] fourth planet of the airless system for
[06:03] New Horizon Speedway we now have our own
[06:05] entire planet just for arena Commander
[06:08] it has its own atmospherics it's a fully
[06:11] fledged Planet essentially which we've
[06:12] worked as a planet team on we have our
[06:14] own biomes even as beaches although you
[06:17] may not win the race if you do try and
[06:19] see them and this represents the first
[06:20] time that we have real atmospheric
[06:22] racing in Arena Commander but be careful
[06:24] we're still experimenting with wind and
[06:26] weather but it's too early to see
[06:28] exactly where it's going to land
[06:29] so the New Horizon Speedway now has four
[06:32] tracks starting with record Memorial
[06:34] Raceway it's the least unchanged of the
[06:36] bunch it played pretty well we thought
[06:38] we added more checkpoints and that's
[06:40] just about it for a record moving on to
[06:42] Old Van Der Waal it's the easiest
[06:43] shortest of all the tracks we've cleaned
[06:46] up some of the cheeky little shortcuts
[06:47] that you guys found and that big dive in
[06:50] the middle of the map where you go right
[06:52] down in between all these buildings
[06:53] we've expanded that across and you now
[06:55] curve all the way around a giant pillar
[06:58] in this large curved dive now which we
[07:01] feel is a really good place for the for
[07:03] that map it's still the shortest of all
[07:05] the tracks but it will seem longer due
[07:06] to atmospheric flight next is deferred
[07:08] link it's the longest and hardest of all
[07:10] the tracks and it's a complete rework
[07:12] from the ground up it's kind of designed
[07:13] as a sort of endurance test where you
[07:17] are flying between obviously all of the
[07:19] buildings in New Horizon Speedway but
[07:21] it's not really about those tight
[07:22] corners or uh heavy sharp turns it's
[07:26] about making sure that you don't crash
[07:28] it's about making sure that you can keep
[07:29] that good race line through the entire
[07:31] map essentially effort is our most
[07:33] difficult map and has been from the
[07:35] beginning and still is now it's really a
[07:38] dance with atmosphere with this map you
[07:41] are going around zigzagging around
[07:43] buildings down the corkscrewing around
[07:45] Barrel flipping Barrel flipping that are
[07:48] rolling my favorite part is the the
[07:50] vertical Corkscrew and the dive down
[07:52] right at the end before that home
[07:54] stretch back to the finish line so
[07:56] Halloran circuit is the fourth edition
[07:58] to the New Horizon Speedway collection
[08:00] it's primarily inspired by snowboarding
[08:02] so you're gonna see a giant half pipe
[08:05] that expands the entire level where
[08:07] you're going to have to really test your
[08:08] limits test your drift and get those
[08:10] rear engines at the back so you can go
[08:11] down this pipe at the best speeds
[08:13] possible when I last played it it kind
[08:15] of reminded me of Bob's Lane where you
[08:18] basically are riding on each Bank using
[08:20] the atmospherics as the plane to
[08:22] basically
[08:23] heavily go between each of the very
[08:24] different buildings and hard turns that
[08:26] are inside of the the map and we all
[08:29] just think it's really fun alongside
[08:31] this we also have a few PE racing Maps
[08:33] though also coming into Arena Commander
[08:35] we've got the snake pet
[08:37] miners Lament
[08:39] the other Valley
[08:41] and Icebreaker
[08:42] and this is your chance to go in and
[08:44] practice those races referee
[08:50] in addition to the race Maps we also
[08:53] have several dog fighting Maps coming to
[08:55] Arena Commander starting with Jericho
[08:56] station and security post career Jericho
[08:59] station is the most lightweight of all
[09:01] of these it's the first PE location that
[09:04] we actually took into Arena commander
[09:05] and that is because it is lightweight
[09:06] there's no planetary bodies around so it
[09:09] was the easiest for us to get started
[09:10] with
[09:12] just a beautiful location and you see
[09:14] some nebulas off in the background and I
[09:17] don't know about you but I've been there
[09:18] a lot with you know for it so it's a
[09:20] familiar Battleground for me
[09:23] [Music]
[09:26] it was due to play tests fighting other
[09:28] people and AI around that station in
[09:31] Arena Commander like you were just in
[09:32] the Pu doing it but it's once again
[09:34] another way of having that risk-free
[09:35] practice as well as providing the
[09:37] players finally a much more open and
[09:40] less cluttered dog fighting map in Irene
[09:42] Commander it also let us address some of
[09:44] the feedbacks that we got from the
[09:45] community and developers alike that we
[09:48] needed an arena which was clear of
[09:50] debris and just very lightweight high
[09:52] performance for people to dogfight and
[09:54] up
[09:55] with the inclusion of security post
[09:57] career
[09:58] it means we also have a map now which
[10:00] has turrets we can essentially use those
[10:02] turrets to add more to the gameplay
[10:03] whilst you're fighting amongst
[10:05] yourselves and against other AI it gives
[10:07] us the ability to add new modes which
[10:09] use those turrets more effectively so
[10:11] you're not just fighting against players
[10:12] you're fighting against the map itself
[10:15] so you're probably asking yourself why
[10:17] these two locations out of everything in
[10:19] the verse it's because we have to start
[10:21] somewhere and Jericho station it's the
[10:23] simplest of all the locations in the Pu
[10:25] there's no planetary bodies it had
[10:27] enable us that we had to bring in but
[10:28] otherwise pretty simple with everything
[10:30] that we take from the Pu it's to address
[10:32] these challenges we want to overcome
[10:34] these so it right now it's not a simple
[10:36] copy paste job but hopefully in the
[10:37] future this this pipeline that we've
[10:40] made is a lot faster and we can get a
[10:43] lot more maps from the pun this is just
[10:46] a start
[10:49] and the last dog fighting map which I'm
[10:51] super excited to talk about is we
[10:53] finally have a dogfighting map in
[10:55] atmosphere
[10:57] New Horizon arena is based on the very
[11:00] map that we've put all of those racehips
[11:02] into but instead of just speeding around
[11:04] it trying to get the best time instead
[11:06] you're going to be fighting amongst
[11:08] yourselves in the atmosphere finally I
[11:10] know you've been asking for this for so
[11:12] long training atmosphere as you know
[11:14] brings unique challenges it's a lot
[11:16] higher skill ceiling and it's where most
[11:17] of the fights happen in the Pu so bring
[11:19] an atmospheric dogfighting into Arena
[11:21] Commander was an important step for us
[11:23] as far as game modes that can be played
[11:24] here it's all of them and we're excited
[11:27] to see how players handle it you'll be
[11:28] able to do every single dogfighting mode
[11:30] available you can play pirate swarm
[11:32] Vandal swarm Squadron battle duel and
[11:34] Battle Royale
[11:39] so talking about piratesworm we've also
[11:41] an update coming for that this update
[11:43] includes a new Final Boss Wave you're
[11:45] now going to be experiencing a capital
[11:46] battle between Pirates and UE and you're
[11:49] stuck in the middle so as you get to
[11:51] that 10th wave the pirate Fleet work in
[11:53] it consists of two hammer heads four
[11:56] Cutlass blacks sex gladiuses and a
[12:00] pirate address and your objective here
[12:02] is to simply survive so as those pirates
[12:05] come in the uee also send in two f8
[12:08] Lightnings to come and help you those
[12:10] f8s inform you that a UE Fleet is on
[12:12] their way to help you but you have to
[12:13] survive those two minutes for them to
[12:15] reach you in time once the timer ends a
[12:18] uefleet consists in of eight additional
[12:20] f8 Lightnings six goddesses and two
[12:23] javelins come out of warp and start
[12:25] pummeling in to that pirate Fleet and
[12:28] helping you towards Victory this update
[12:30] comes with a new Spectrum batch so
[12:31] you've got a couple more weeks to get
[12:32] the old one before that gets switched
[12:34] out those rewards are only obtainable in
[12:36] multiplayer so make sure you hop into
[12:37] multiplayer before the updates so you
[12:39] can get that pirate aggressor badge with
[12:41] the new version we're introducing a new
[12:43] barish that you'll be able to get
[12:44] starting from the release so there's
[12:46] also dual mode it's a 1v1 dog fighting
[12:48] mod previously would kill your enemy and
[12:51] just continue on now we've added rounds
[12:54] so after you get that kill you're gonna
[12:56] respawn fully equipped re-armed ready
[12:58] for the next fight and don't worry I've
[13:00] got you we're working on leaderboards
[13:02] it'll take a little bit extra time but
[13:03] we'll get there and the last of our mode
[13:05] updates is something called experiment
[13:07] Awards but we're going to touch on that
[13:08] a bit more next week
[13:13] so there's a few more editions coming
[13:15] terrain Commander including the def cam
[13:17] and deaf recap you'll be able to view
[13:19] the action after you die rather than
[13:21] point to the ground this new def camera
[13:23] will point out your opponent rather than
[13:24] being a static camera that just zooms
[13:26] off into the abyss it Recaps everything
[13:28] that you did in that life so damage your
[13:30] dealt to enemies damage you received and
[13:32] how you died we're also iterating on the
[13:34] scoreboard so we're adding right click
[13:35] options so you can mute uh add friends
[13:38] add Squad up together using the new
[13:41] Lobby system we also fixed that really
[13:43] annoying issue where you know your
[13:44] teammates appear in the other team in
[13:46] the scoreboard even though they're not
[13:47] in the actual game as well as you know
[13:49] all the other things that came along
[13:50] with you know the round system and stuff
[13:52] that wasn't really cooperating with it
[13:54] so those are all fixed up now thankfully
[13:55] we've also updated scoring so now the
[13:58] score will change based on the rating of
[13:59] your opponent so you get more reward if
[14:01] you're killing you know the rank one
[14:02] player versus someone that's brand new
[14:04] to Arena karander repeatedly killing the
[14:06] same player is going to give you less
[14:08] score to you know stop that cheating
[14:10] going on and if you try to leave a game
[14:11] early it's going to give you an early
[14:13] leave or punishment
[14:18] so that's just some of the goodies we've
[14:20] got coming with 320 and dog fighting and
[14:22] racing I'm excited to be returning next
[14:24] week to talk to you about FPS combat and
[14:27] some of the additions we're adding to
[14:29] those modes as well as experimental mods
[14:32] hi
[14:37] [Laughter]
[14:41] see you next week
[14:45] so what do we learn this week well we
[14:47] learned that true atmospheric flight is
[14:49] coming to Arena Commander for both
[14:51] racing and fighting modes that locations
[14:53] from the persistent Universe are being
[14:55] brought into the simulation to let you
[14:57] test your metal easier than ever before
[14:59] that this becomes more and more
[15:01] important and valuable as the Pu
[15:03] continues to move closer to the death of
[15:05] a Spaceman in the future and that all of
[15:07] this would already be the biggest update
[15:09] Arena Commander has ever seen but
[15:10] there's even more stuff coming next week
[15:12] as we look at star Marine editions
[15:14] including Tonk Royale and the
[15:16] implementation of experimental modes
[15:18] that aim to return Arena Commander to
[15:21] the feature and Technology test bed it
[15:22] was once intended to be and then back in
[15:25] the Pu I hear there's a jump town going
[15:27] on at the moment I sure hope it's safe
[15:29] for inside Star Citizen I'm Jared
[15:32] Huckabee thanks for exploring the
[15:34] process of game development with us and
[15:35] we'll see you all here next week
[15:37] [Music]
[15:50] should we have moved the plan that's
[15:52] done it's time to put on some Noobs
[15:57] [Music]
[15:58] foreign

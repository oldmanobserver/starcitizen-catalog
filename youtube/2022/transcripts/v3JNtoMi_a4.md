# Star Citizen Live: Master Modes

**Video:** https://www.youtube.com/watch?v=v3JNtoMi_a4
**Date:** 2022-12-09
**Duration:** 59:06

## Transcript

[00:05] Hello everybody welcome to another
[00:07] episode of Star Citizen live I'm your
[00:08] host Jared Huckabee and Star Citizen
[00:11] live is where we take an hour out of the
[00:12] end of our week and we chat with our cig
[00:14] developers and staff uh talking about
[00:16] the folks and the way that we make our
[00:18] video games each and every week on
[00:20] today's show we have members from the
[00:21] vehicle feature team Richard Tyler and
[00:23] Yogi kladon to discuss a follow-up to
[00:26] their recent citizencon presentation so
[00:28] without further Ado we're just going to
[00:29] jump right into it this week Rich how
[00:31] you doing man yeah I'm Graphics it's
[00:33] great to be here it's Chris that's my
[00:35] first time on here so it's your first
[00:36] time with the new talk show setup right
[00:37] great yeah it's cool amazing Yogi you're
[00:41] joining us from Frankfurt say hi uh well
[00:44] from my work office yes uh practically
[00:46] from Frankfurt not quite Frankfurt but
[00:48] yes hi is it as cool as my spaceship uh
[00:52] no I don't think so all I have is like
[00:54] this little picture here behind me um
[00:55] other than there's nothing Spacey here
[00:57] but you do have you do have the the Pico
[00:58] Yoda show me the Pico Yoda real quick oh
[01:00] well I've got well I've got to be
[01:02] showing this so so there's there's Pico
[01:04] right there's Yoda and they're good
[01:06] friends and they're swapping like
[01:07] clothes and all that so
[01:09] yeah
[01:10] all right so Yogi was showing that up
[01:12] before we started the show
[01:14] um so let's jump into it we are at
[01:16] citizen con this year uh we did we did a
[01:19] our kind of our typical vehicle feature
[01:21] experience uh uh segment where we talk
[01:23] about you know the the evolution the
[01:25] continuing evolution of our flight
[01:27] combat uh and this year we announced
[01:30] Master modes which was a pretty dramatic
[01:32] change to the way that our uh our our
[01:35] single our Single Seed ships our dog
[01:37] fighters whatnot are going to handle in
[01:39] the verse that's currently in testing
[01:41] right now under the Squadron 42 Branch
[01:43] uh without rehashing the entire
[01:45] presentation uh for folks who may maybe
[01:48] haven't seen it uh what is Master modes
[01:51] who wants to take it
[01:52] I'll take it okay so um Master mods is
[01:56] basically our way of
[01:59] fixing the combat in the game but also
[02:03] allowing the ship experience and the
[02:06] ship roles to kind of fulfill themselves
[02:09] um so early on in the combat we tried
[02:12] several things we've seen the community
[02:13] knows about you know we tried to patch
[02:15] on things to help combat to help fix it
[02:17] and nothing really works so we looked at
[02:19] what's the fundamental problem with the
[02:22] kind of combat and the ship geometry
[02:24] that we have in the game right now and
[02:26] the common denominator with speed
[02:28] um but we didn't want to come up with a
[02:29] way which was right let's just blanket
[02:31] cap the speed because if you go too fast
[02:34] it breaks the game
[02:36] um
[02:37] we just didn't want to do like an
[02:38] overall action kind of cap you know
[02:40] because there's still so many things
[02:42] you're doing Star Citizen Beyond combat
[02:44] you know you've spent a lot of time
[02:45] traveling from A to B
[02:47] um and you know the distances we have in
[02:49] the game are crazy you know we travel
[02:51] millions of kilometers all the time in
[02:52] the game I do want to clarify when you
[02:54] say speed you're saying high speed yes
[02:57] high speed too much speed yes because I
[02:59] think from uh from a Layman's
[03:01] perspective from an outsider's
[03:02] perspective you know for those of us who
[03:04] watch racing and watch you know you know
[03:06] combat movies like Top Gun and anything
[03:08] speed is more speed seems to be a good
[03:10] thing it seems to be the thing that
[03:12] makes stuff exciting makes stuff
[03:14] visceral everybody likes you know
[03:15] bobbing weaving through Canyons as fast
[03:17] as possible but you're saying too much
[03:19] speed actually hurts the combat
[03:21] experience yes yeah so if you're
[03:22] traveling very quickly the distances you
[03:25] cover in that amount of time become
[03:28] really large so if you're having a dog
[03:30] fight with someone and you're flying at
[03:33] a thousand meters per second within a
[03:35] very short amount of time you could be
[03:36] three or four kilometers away from your
[03:38] target if you've turned around and then
[03:39] you're flying back towards each other
[03:41] and then you basically repeat the action
[03:43] and you start firing at nose of your
[03:45] opponent and that's not really fun
[03:47] because you don't get you know it makes
[03:49] it really hard to balance it makes it
[03:51] really hard for the weapons to make a
[03:52] difference the different types of
[03:54] weapons we have in the game
[03:55] so the goal for this was to bring the
[03:58] combat closer and to make it much more
[04:01] about kind of outmaneuvering your
[04:03] opponent so if you can get the edge on
[04:05] your opponent and you're trying to do
[04:07] this and that will run each other
[04:08] there's going to be key moments in this
[04:10] where you get an advantage and you can
[04:13] use the distinct weapons you've chosen
[04:15] um you know your special Loadout you've
[04:16] chosen and those things will be an
[04:18] advantage but also be the disadvantages
[04:19] too but
[04:20] we want it to be about those moments
[04:22] where you where you really engage in
[04:24] combat and it becomes about maneuvering
[04:26] your opponent rather than this kind of
[04:28] slingshot kind of nurse on Nurse combat
[04:30] we've kind of been used to and so we're
[04:32] doing this by introducing
[04:34] what Master modes are basically two
[04:36] different operational States for the for
[04:38] the vehicle uh Yogi why don't you tell
[04:40] us what the two operational states are
[04:42] what are the two Master modes so the one
[04:44] state is um basically your your combat
[04:47] mode
[04:48] um we're still like uh talking about
[04:50] whether it's should be like standard
[04:53] control mode or actual just combat mode
[04:54] and this is the mode which you do the
[04:56] majority of your gameplay and like you
[04:58] you're gonna do um yeah all the combat
[05:01] stuff you're gonna you're probably gonna
[05:02] do mining in that as well
[05:04] um and the other mode uh which you swap
[05:06] your ship into is it was called qcm in
[05:09] our in our presentation uh recently we
[05:11] just we're gonna just gonna call it nav
[05:12] mode because it's more it's it's more
[05:14] descriptive
[05:15] um
[05:17] name for it
[05:19] um and this one allows you to use your
[05:21] Quantum mode and it allows you to unlock
[05:22] the high velocities but it makes such a
[05:24] very very vulnerable in terms of like
[05:26] there won't be Shields or weapons
[05:28] working during that time and basically
[05:31] that is the idea to watch which just
[05:32] eluded like we're swapping what we're
[05:34] separating these two gameplay systems
[05:36] apart from each other so you can either
[05:38] choose to be like high performant and
[05:40] dangerous or you can be fast right and
[05:42] uh travel and navigate around the verse
[05:45] but you can't do it both at the same
[05:46] time
[05:47] so that's where that's where we are
[05:50] currently right now in the Squadron 42
[05:52] Branch but
[05:54] like you mentioned before that we've
[05:55] known about this issue for a while we
[05:58] identified this issue you know a while
[06:00] back folks who have been watching our
[06:01] broadcast and seeing you on your shows
[06:04] over the years are very familiar with
[06:06] hearing this refrain that we got to fix
[06:07] speed
[06:08] um what are some of the things that we
[06:10] tried before this that didn't work like
[06:12] like take me on a journey what were the
[06:16] other things we tried to fix before we
[06:17] got to master modes
[06:19] um so we tried like nothing Things based
[06:21] upon the speed of the ship so we tried
[06:23] some super Shields I think at the time
[06:25] um
[06:26] and just trying to make the tuning work
[06:28] as well it's like you know we looked at
[06:30] what we needed to get from the ships as
[06:31] well and we just couldn't nothing really
[06:35] felt great in what we were trying to do
[06:36] it just felt like we were solving one
[06:38] problem over here but it was creating
[06:40] another problem over here and and that's
[06:43] and that's the real difficulty with this
[06:44] problem was
[06:46] we had to come up with something what
[06:49] I'm gonna say I solved everything but it
[06:51] solved a majority issues without really
[06:52] causing another problem which was the
[06:55] the kind of loop we got into before
[06:56] we're changing the way the shields work
[06:58] and the weapon and stuff we just you
[07:01] know we were always creating another
[07:02] problem with what we were trying to
[07:03] solve and that's something we really you
[07:05] know we you know we definitely think
[07:07] we've avoided with
[07:09] um you know the master mode I saw
[07:11] somebody I saw a comment on Reddit uh
[07:14] just a day or two ago about somebody was
[07:16] saying that Master modes aren't even in
[07:17] Squadron 42 yeah they're not actively in
[07:19] testing they are in Squad driver too
[07:21] they are actively in testing they are
[07:23] working now yes yes and we'll be testing
[07:25] this for months now
[07:26] um so it's been actively in the game and
[07:28] we've been play testing ourselves on our
[07:29] own team but we've also been testing
[07:31] whether with
[07:32] um you know we've you know we've also
[07:35] been pronounced it you know to the
[07:36] general Studio as well
[07:38] um so we've definitely been in a really
[07:40] good feedback loop and
[07:42] um we're kind of really excited about
[07:43] that because the internal results for us
[07:45] have been really good and really
[07:46] positive just so folks can get a
[07:48] timeline in their heads you know for
[07:50] other folks who who make their streams
[07:52] and their videos anything about how long
[07:53] ago did Master modes how long ago did
[07:55] the idea for master modes happen
[07:58] I think we're talking a good year and a
[08:01] half ago
[08:02] um I think it was
[08:04] we started to really kind of realize
[08:06] we're in that kind of loop of problems
[08:08] and we need a way out of that problem
[08:10] so then we started discussing what can
[08:12] we do
[08:14] um you know the the basic other ideas
[08:17] were like well let's just let's just not
[08:18] go very quick but then it's like well we
[08:21] stop the ATP travel being fun and the
[08:23] speed being fun because the speed is fun
[08:25] it's really important for the general
[08:26] game it's really important for racing as
[08:28] well that ships can go quickly because
[08:29] racing needs to feel like a challenge
[08:32] um so we started kind of just sitting
[08:34] down and going right you know how you
[08:36] know how we're going to make this work
[08:37] because we've got this problem
[08:38] if we limit speeds we've got this
[08:40] problem what's the overarching solution
[08:42] to this
[08:43] um so you said a year year and a half
[08:45] ago was this a eureka-like moment is
[08:49] this one of those things where somebody
[08:50] was just in a meeting and they're like
[08:52] holy crap I got it or was this a a
[08:55] contested issue it was was everybody on
[08:58] board at first or how did this come
[09:00] about walk me through the history of
[09:01] this what was this like when this was
[09:03] coming up
[09:04] um
[09:05] it was interesting because we were never
[09:08] going to be able to stop the speed the
[09:10] high speeds in the game so we knew we
[09:13] had that problem and I would say it was
[09:15] a sort of Eureka moment
[09:17] but also
[09:18] we faced some challenges trying to get
[09:20] this through as well so it's kind of
[09:22] like yes it's a really cool idea oh but
[09:24] you know we've got these problems to
[09:26] solve
[09:27] so
[09:28] what was the problem I mean well you had
[09:32] a problem getting Master modes into the
[09:34] game approved is that what you're saying
[09:35] here yeah it was more like just because
[09:37] it's such a major change to the game we
[09:39] had to convince people it wasn't gonna
[09:41] break racing it wasn't going to break
[09:43] man it was going to break all the other
[09:44] systems we had from the game because
[09:46] it's so fundamental to the way ships
[09:47] work because it you know because you
[09:49] were because we literally saying we've
[09:51] got a combat mode where these systems
[09:53] work you know we've got navigation mode
[09:55] where these systems work and it's such a
[09:57] fundamental change to the game it had to
[09:59] be approved by so many people
[10:01] um you know which is never easy you know
[10:03] because everyone is trying to look after
[10:05] their features which is the right thing
[10:06] to do so we you know it was definitely a
[10:09] challenge trying to convince other teams
[10:11] as well that
[10:12] this is going to be the best solution
[10:13] for everyone for the game they have to
[10:15] imagine a part of the reason why it's
[10:17] not immediately into the persistent
[10:19] Universe because it has to go through
[10:21] all this testing with all these other
[10:22] gameplay features you're talking about
[10:24] yeah so is it so it's so it's quite a
[10:26] challenging for you to develop because
[10:28] one is going to Squadron first so it's a
[10:30] single player Focus first and um in
[10:32] terms of getting this through but we've
[10:33] also had to help but also to move to the
[10:35] Pu it needs to be fully to develop for
[10:38] the multiplayer and also due to the
[10:41] um you know and also due to the
[10:42] resources we have to
[10:44] in there we are depending on the dam
[10:46] streams as well
[10:47] um and because of the Squadron Focus
[10:50] the damage teams have been prioritized
[10:51] and it's where this fits within that as
[10:53] well
[10:54] uh what's the testing been like Yogi
[10:57] testing well
[10:59] so
[11:00] um as Richard said there was like no no
[11:02] Eureka moment right like usually when we
[11:05] develop like stuff like that we're going
[11:07] step by step in our intuitive processes
[11:10] um it was easy to identify uh that slow
[11:14] speed combat works a lot better
[11:16] um simply by limiting the velocities
[11:18] ourselves right like suddenly like the
[11:20] geometry and so on looked a lot better
[11:23] um so so when you say testing it
[11:25] actually covers quite a lot of time from
[11:27] or from like like checking what do we do
[11:29] with the with the velocities but how do
[11:32] we how do we actually limit the
[11:33] velocities when when you when you go um
[11:36] above boost and so on right because what
[11:38] never felt good was for example just
[11:39] boosting to your maximum uh sem velocity
[11:42] and then being stuck there being stuck
[11:44] in that in that maximum velocity in all
[11:47] directions was one of the problems why
[11:49] combat felt stale right because you
[11:51] couldn't just uh
[11:53] um like like it doesn't allow you any
[11:54] more interesting any interesting tactics
[11:56] so um and so we slowly went and like
[12:00] adding stuff like the uh like the post
[12:02] boost
[12:03] um or the above sem boost boundaries and
[12:06] all that making sure that the Boost is
[12:08] applied in a non-spheric way but uh it's
[12:11] more actually more x-shaped so you you
[12:13] basically when you go when you boost
[12:15] backwards you burn a lot more energy
[12:16] than then you go forward which just uh
[12:20] well which just forces you to you know
[12:21] go to your Target and turn around and
[12:24] and all these things like like we just
[12:27] went through step by step I mean we it's
[12:29] not like we're like uh living under
[12:32] rocker so like we read and and watch
[12:34] YouTube videos of like so many backers
[12:37] uh or players I should say
[12:39] um and and there's like hours and hours
[12:41] of like a dog fighting analysis and like
[12:43] we look for it all and like a lot of
[12:45] these points were actually true so
[12:48] um so we kind of like built our
[12:49] requirement list out of that and then we
[12:51] just try to go there step by step and um
[12:54] testing is basically we have
[12:56] um
[12:56] we have testing slots every week
[12:59] um sometimes like last two weeks were
[13:00] horrible in this regard because the
[13:02] bills were just like crashing on some
[13:03] other on some other parts
[13:05] um but I mean this this happens but we
[13:07] just test the game every week with uh
[13:09] with our pet friends so that's like
[13:11] Bayer's team
[13:13] um and then we just went to went to
[13:16] there and we knew we were on the right
[13:17] track when um at some point we were like
[13:20] it was like a couple of months ago we
[13:22] were like just just fighting with Master
[13:24] mods around and um uh one one of the PT
[13:28] guys was critical about one one specific
[13:30] aspect wasn't really important right and
[13:32] then I was a little bit insecure just
[13:33] asked yeah but but do you like the
[13:35] master mode system in general they were
[13:36] oh yes yes of course we like it yeah
[13:38] yeah right so this gives us like enough
[13:40] confidence to know that we're on the
[13:41] right track and like the process itself
[13:43] with the testing works right we just
[13:44] like slowly slowly go step by step to
[13:47] the to the solution that we would like
[13:48] to see
[13:49] so
[13:51] that that's some background that that's
[13:53] somehow we got here let's just dive into
[13:56] some of the specifics about stuff
[13:58] um since the presentation folks have had
[14:00] a lot of questions we've seen tons of
[14:02] questions in Spectrum uh and those
[14:04] YouTube videos and the twitch streams
[14:05] that Yogi was just talking about we've
[14:06] seen this come up in conversations and
[14:08] stuff
[14:09] um so one of the big ones that I've seen
[14:11] is the switch between the modes
[14:13] themselves
[14:14] um because it can't be too easy if you
[14:17] switch back and forth on a dime there's
[14:20] no reason to have the two the part of
[14:22] what makes the two Dynamic is this
[14:25] transition between them so let's talk
[14:28] about that transition how long are we
[14:30] talking is the length of time dependent
[14:34] on different ships or different ship
[14:36] types and is the length of time
[14:37] something that can be one day adjusted
[14:40] through the use of components and tuning
[14:43] and stuff what what are we thinking here
[14:44] yeah so yeah so um there is a time
[14:47] difference
[14:48] um it is based but it can also be
[14:50] component based as well because you've
[14:51] got the shields going up and down
[14:54] um because we didn't want
[14:56] you just press a button Doom gun and
[14:58] you're just in different modes because
[15:00] we want the player to make that key
[15:02] Choice when they're in
[15:04] the
[15:06] well you know when you're in the master
[15:07] mode for combat for example we want them
[15:08] to be in that camera because they want
[15:10] to do that thing that they've chosen to
[15:12] do but there's consequences to that and
[15:14] it's the same belief in our flight
[15:16] navigation mode without the shield
[15:17] there's a choice for that that you can
[15:19] go fast and you're just doing your A2B
[15:21] stuff assassins you don't want to get
[15:23] involved in combat so there is that
[15:26] consequence of we can't just press a
[15:27] button in its instant
[15:29] um so you know so if you go from combat
[15:31] mode for example navigation mode your
[15:33] Shields will have to go down and then to
[15:34] go back you Shields will have to go back
[15:36] up but it's not an instant thing and it
[15:38] will vary depending on the uh and and um
[15:41] you know it will variably depend on the
[15:43] components as well
[15:45] um but they had so much tactical choice
[15:47] though it's it's now now during fights
[15:50] uh or during attacks you're being raided
[15:52] by a pirate or whatever you it's not
[15:54] just oh flip a motor and get out you
[15:55] have to just you have to you have to
[15:57] determine when the best time is going to
[15:59] be you have to know your ship and
[16:01] precisely how long it's going to take
[16:03] your ship versus their ship to to make
[16:05] these switches uh and then it opens up
[16:08] the door for tons of customization with
[16:10] the ships between the different
[16:12] components and the tunings and such so
[16:14] that you know we like the you know there
[16:16] are many like it but this one is mine
[16:17] it's going to allow people to to
[16:19] fine-tune their ships and have a reason
[16:22] to do so yes yeah I mean you know and
[16:26] you know and that's the great thing
[16:27] about this is it it gives the play
[16:29] Choice that's you know something we're
[16:31] really Keen for is is like we you know
[16:33] as we prefer the underlying system
[16:35] but we provide the choices within that
[16:37] as well and that's really key for us you
[16:39] know as a gameplay team is players have
[16:41] those choices you know because people
[16:43] play the game for all kinds of different
[16:44] reasons there's some people like to go
[16:46] out there but all you know you know with
[16:48] you know you know
[16:51] um Egon displays for example
[16:53] and they can do that but if they do that
[16:56] the other players are going to know that
[16:58] they're in that mode and they're all
[16:59] guns blazing so it's a disadvantage to
[17:01] that because they're gonna be more aware
[17:03] that that person's in that mode
[17:05] um do we do we know what happens if you
[17:07] switch modes at super high speeds like
[17:09] if you're if you're if you're in nav
[17:11] mode and you're you're traveling at the
[17:13] fastest speed possible and then you
[17:14] suddenly switch over so you slow down
[17:17] very aggressively in your face almost
[17:18] comes off
[17:20] promise expand Style
[17:24] yeah but you know it can be a very
[17:26] aggressive deal and the um well it can
[17:28] be very aggressive slow down from that M
[17:30] Speed you know and that's another thing
[17:32] you know that's going to be a critical
[17:33] choice if you have to do that high speed
[17:34] there's gonna be a reason that you've
[17:35] done that
[17:37] um but there's gonna be a consequence to
[17:38] it I think uh it's actually quite quite
[17:41] interesting because like when we when we
[17:43] tested that first
[17:44] um the decelerations we got were like up
[17:46] to like
[17:47] 50 60 G something like that right so
[17:50] that's obviously nothing that you can
[17:52] survive easily right
[17:54] um but we didn't see this effect because
[17:55] our GeForce tuning doesn't react to like
[17:58] uh decelerations that are taking that
[18:01] short amount of time so basically
[18:02] nothing happened but what we actually
[18:03] want to achieve is like when you do an
[18:04] an unhealthy like if you if you flip the
[18:08] switch too fast and uh maybe even like
[18:10] uh take into account that you might have
[18:12] like ice algae's right then this this is
[18:15] supposed to like knock you out right
[18:17] um but that specific part is not is not
[18:20] in but it is planned so that you need to
[18:21] prepare when you actually want to slow
[18:22] down so you kind of just like single
[18:25] like click a flip and then flop back to
[18:26] sem or so it there will be there will be
[18:29] a consequences for that well again
[18:30] that's part of the reason for the you
[18:32] know switch to Dev focus on Squadron 42
[18:34] the idea is you can Hammer these things
[18:36] out and you can develop these further
[18:37] there and then when they make their way
[18:39] to the Pu whenever that is you know
[18:41] they'll hopefully they'll have things
[18:43] like what you were just talking about
[18:45] um
[18:46] I want to ask about racing because
[18:49] there's been a there's been a rather
[18:51] renewed focus on racing you know we had
[18:53] we added the snake pit in the last patch
[18:55] in 318 we've got six brand new community
[18:58] uh race tracks that are being added
[19:00] we've got the new timers in the in the
[19:03] in the UI and the gateways
[19:06] um folks who uh who follow the public
[19:08] roadmap shout out to Jake uh know that
[19:11] there are changes and improvements to
[19:13] Arena Commander especially the racing
[19:15] coming there so there's there's a lot of
[19:17] new racing stuff coming in in uh Star
[19:20] Citizen
[19:22] nav mode like let's ask a question
[19:26] would are we considering or would we
[19:28] consider a third Master mode
[19:30] specifically for racing something that
[19:32] would get us the speed and the
[19:34] maneuverability without any of the
[19:36] weapons the shields stuff like that
[19:37] because it doesn't seem like I don't
[19:40] know if either one of these ones that
[19:41] we're talking about seemed totally ideal
[19:43] for racing but maybe that's just me I
[19:45] don't know
[19:46] um
[19:47] that's a good point so it actually came
[19:49] up in um so
[19:51] um so um you know um you actually
[19:52] commitment about
[19:54] um basically from one of our play tests
[19:55] you know is what you know what happens
[19:57] to racing because
[19:59] the speeds that we were hitting for well
[20:02] the well um the actual space of combat
[20:05] were probably just not enough to make
[20:06] racing feel exciting so and then it's
[20:09] actually had like a fundamental impact
[20:11] on the choices we've made with the
[20:12] design for master modes is to make sure
[20:14] that racing works so we've got
[20:17] boost now which works outside of the
[20:19] actual combat mode um it might work a
[20:21] little bit differently but we're going
[20:23] to have Boost outside of the combat mode
[20:24] now and that's and that's come
[20:26] specifically from racing and the needs
[20:28] of racing you know because I say you
[20:30] know we're building lots of different
[20:31] you know Wells now where you know race
[20:34] as possible are actually doing you know
[20:36] a lot more support for it and now to
[20:37] build it you know officially within the
[20:39] game because it's come from the
[20:40] community you know they're the ones
[20:42] making all these interesting levels out
[20:44] the wells that we build you know and now
[20:46] we're going right we're going to start
[20:47] making this you know as part of the
[20:48] actual game you know so we have to
[20:50] support this and one you know um part of
[20:53] this
[20:54] big process of Master merge was the
[20:56] rules and we want the racing ships to be
[20:59] well relationships you know
[21:01] you know so they're going to be very you
[21:03] know they're going to go very quickly
[21:04] still it's going to be light it's going
[21:07] to be agile
[21:08] but you're not really going to want to
[21:10] do a combat you need a couple more
[21:11] weapons you're probably not going to
[21:13] really want to take them in combat but
[21:14] they're gonna make me but to balance for
[21:16] it is making sure the quick enough to
[21:17] escape but there's still at risks there
[21:19] in combat right so we might get some of
[21:21] what I'm talking about through
[21:22] components and tunings for racing
[21:25] specific ships yeah so right and then
[21:27] the Boost changes yes okay there's a bit
[21:30] more to it though right um because like
[21:32] one of the things
[21:33] um so the the sem mode is supposed was
[21:36] supposed or is supposed to be the high
[21:38] uh the high performance mode that we're
[21:40] in that you're in but like racing
[21:43] doesn't doesn't work well when the when
[21:45] the velocities are too too too low
[21:48] um and they're actually like uh some
[21:50] sequences uh from from from the
[21:52] squadron's team as well and where they
[21:53] want like racing like like structures
[21:56] right so so we are looking at this very
[21:58] deeply
[21:59] um the thing that might probably change
[22:01] or what we're currently testing if there
[22:03] is whether or not the capacitor systems
[22:05] have a little bit of a different Power
[22:06] output so where you can for example
[22:08] regenerate at your Boost pool in sem
[22:10] within you know maybe 10 seconds or
[22:13] whatever right it will take considerably
[22:15] longer when you are in uh in in the nav
[22:17] mode
[22:18] um but it just like freeze really like a
[22:20] lot of more potential to do fast racing
[22:22] so you basically you you select you want
[22:24] to go fast and have like you know uh
[22:27] take care of your Boost pool or do you
[22:29] want to like Risk going into into this
[22:31] lower speed but then get rewarded with a
[22:32] higher boost uh boost regeneration it
[22:34] will be along these lines this is
[22:36] currently in testing this is actually
[22:37] the thing we wanted to check last week
[22:38] which uh where the bills were busted so
[22:41] uh well like no definitive answer how
[22:43] that will look but we'll figure it out
[22:45] it will just be part of the normal like
[22:46] testing iteration yeah I imagine that
[22:48] the challenge is still going to be the
[22:50] same though that you know the more speed
[22:51] tools you put in the sem for racing
[22:54] people are going to attempt to use them
[22:56] during dog fighting and stuff so it's
[22:59] that's why that's why I guess in my
[23:01] brain it just it seems like oh there's
[23:04] really a third Master mode for racing
[23:06] and stuff like that but yeah I trust you
[23:08] guys are the engineers and the designers
[23:10] it's like that so so far so far we don't
[23:12] don't see that this is necessary what
[23:14] we're lucky we'll do is just like make
[23:15] race a little bit more flaky compared to
[23:17] like comparable bug Fighters because
[23:18] right now for example the M50 and the Pu
[23:21] is a really really good dockfighter this
[23:23] is not intended right
[23:24] um so there has there has to be some
[23:26] downsides to that you cannot be like you
[23:28] know we always have to balance like the
[23:30] defense of offensive and Agility
[23:31] requirements of every ship and you can't
[23:33] have a ship which is good at everything
[23:34] so um and then we'll we'll see how that
[23:37] goes but I would expect that that like
[23:39] the combat effectiveness of racers in
[23:41] the future will will decrease not saying
[23:44] they're useless but they will I mean
[23:46] these are racist these are not like not
[23:48] Brawlers right like okay
[23:51] um so uh since we revealed Master modes
[23:54] and citizen Khan you mentioned you're
[23:55] watching the YouTube watching the the
[23:57] Spectrum and stuff like that what kind
[23:58] of feedback have you seen so far
[24:02] um we did a lot both good
[24:04] um but also there's like there's a lot
[24:07] of questions you know and I think that's
[24:09] the main thing is there's been a lot of
[24:11] questions about how you know how does it
[24:13] affect this how does it affect this you
[24:15] know and what you're doing to
[24:16] you know combat this problem which you
[24:19] know the community you think is going to
[24:20] happen because of combat modes
[24:22] um
[24:23] but we've been doing a lot of testing to
[24:24] make sure that
[24:26] we're not just fulfilled you know we
[24:28] don't just fulfill our own prophecy of
[24:29] going right we'll fix this
[24:31] you know so the testing has also been
[24:33] you know kind of outside of our little
[24:35] rebate a little bit which is we don't
[24:37] just want to reinforce our own ideas
[24:39] we've you know we've played tested this
[24:41] on the basis that what a place feeling
[24:45] um you know when they actually you know
[24:47] player Master modes
[24:49] um so that's been a big focus of ours
[24:51] um and I think it's gonna be difficult
[24:53] to answer a lot of the questions
[24:56] um until we start showing it working and
[24:58] we actually show the results because
[25:00] that's what we're really excited about
[25:01] is we're excited about the results from
[25:02] this and what we've seen internally has
[25:05] been really positive
[25:07] um you know things are much closer
[25:09] and the difference which we want in the
[25:10] systems both in terms of components and
[25:12] the weapons on the ship and the style of
[25:15] ship you have and making much more of a
[25:16] difference in those Mo in like in those
[25:18] key moments
[25:20] um but that's just something that we're
[25:22] just gonna have to prove out
[25:25] um now again I can already see the the
[25:27] response to what you just said is well
[25:29] then put it into the Pu and let us see
[25:31] it and let us you know experiment it's
[25:34] going to stay in Squadron 42 for a while
[25:37] um uh just you know so can you do all
[25:39] the internal testing so that it can be
[25:40] very focused we talked about it in the
[25:42] DCC thing so you can you focus on these
[25:45] specific ships and get these done before
[25:47] you have to expand it to all of the
[25:49] ships of the of the Pu yeah and that's
[25:51] the big thing for us is this is a lot of
[25:53] work
[25:54] um so it's like releasing the to
[25:57] releasing the Pu it's a massive feature
[26:00] for us because it changes almost every
[26:01] single component in the game it changes
[26:04] every single ship in the game as well
[26:06] from both
[26:08] a ship performance perspective so to
[26:11] make sure that ship is within its
[26:12] performance window
[26:14] um
[26:15] but also it's Health as well
[26:17] um and just how it behaves in the game
[26:19] it does you know we've got
[26:21] we have 100 ships now you can fly in the
[26:23] game and that takes a lot of testing and
[26:25] a lot of tuning to do so you know and
[26:27] also we've got a lot of what the player
[26:29] testing to do you know we've you know
[26:31] we've got to make sure it looks correct
[26:32] so the players understand the master
[26:34] modes on the UI
[26:36] um so there's a lot of work to bring
[26:37] this feature together but you know we've
[26:39] got the fundamental feature together
[26:41] um in terms of you know s42 now it's in
[26:43] there you can change all the speeds
[26:46] um but that's not a very limited amount
[26:48] of ships and on a very limited amount of
[26:49] components right now so to get the Pu is
[26:52] a lot more work because we don't just
[26:54] want to release this
[26:56] like work in progress and say right this
[26:58] is on like five ships right now you know
[27:00] go try it it's just not something we can
[27:02] do because it's so fundamental to the
[27:04] entire component structure we have in
[27:06] the game and you just confirm that there
[27:07] are only five ships in Squadron 42 no oh
[27:10] come on no no no uh just to just to add
[27:13] to this point right
[27:14] um there are also heavy Downstream
[27:16] dependencies because right now most of
[27:17] the master mode UI for example is
[27:19] beautiful Coda art and uh if you ever
[27:22] so-called so-called saw Code art it's
[27:24] not well it's very simplistic right and
[27:28] it doesn't it's wonderful Yogi it
[27:29] doesn't really that works amazing
[27:32] it does respect the Aesthetics that uh
[27:34] certain other people in the company
[27:35] would like to see
[27:36] um so we if we could like it's
[27:38] functionally working right it's um but
[27:40] it's it's it wouldn't be fun at the
[27:42] moment in the Pu because a we only have
[27:44] tuned a couple of ships for it and B
[27:46] like most of the UI or of the of the
[27:50] nice UI is missing so
[27:52] um and there's a couple of other things
[27:53] in the Pu as well which don't add up yet
[27:55] well because for example um travel
[27:57] distances we likely would need to travel
[27:59] um or tune them slightly different for
[28:01] squadrons versus rpu
[28:03] um because on the Pu you're gonna visit
[28:05] like you're gonna freely jump from
[28:06] planets to planets that's not strictly
[28:08] always given in the uh in the um in the
[28:10] frame that Squadron skips you right
[28:13] um so it will be a while until players
[28:15] can can see it but when we're ready
[28:17] we're not like uh like throwing it
[28:20] probably right in we will try to test uh
[28:22] in like within the evocati groups and so
[28:23] on to um get feedback whether or not
[28:25] it's work on the Pu and then do
[28:27] adjustments before we before we release
[28:29] it to the wider public right so it'll be
[28:31] a while before it comes to the Pu we're
[28:34] just about out of time we're going to
[28:35] let you go and and move on to the next
[28:37] half of the show but before we do any
[28:40] last things you want to leave the Star
[28:42] Citizen Community with any last words
[28:43] you want to say
[28:45] last niblets they can hang on to while
[28:49] they wait
[28:51] um we're really excited for this place
[28:52] to get out you know I do a set of
[28:54] frustration here and that's not going to
[28:55] be immediately you know one of the next
[28:57] releases but
[28:58] it'll be worth it
[29:01] um and I hope we can kind of you know
[29:03] keep you know kind of really more ensure
[29:05] more of the actual real world results of
[29:06] this in the game for us because that's
[29:08] you know because we're really excited
[29:09] about it
[29:11] it's just a fundamental amount of work
[29:12] it's going to be is a lot
[29:14] um but yeah you know and it yeah you
[29:17] know yeah you know and also thanks for
[29:19] support you know we do read
[29:21] a lot of the feedback and we do watch a
[29:24] lot of the videos and you know not just
[29:26] the streamers but we watch a lot of
[29:27] videos that people just share in the
[29:29] game as well you know in a pleasure
[29:31] having a great time you know so yeah we
[29:34] do spend a lot of time watching that
[29:35] stuff
[29:36] uh oh I'm sorry one last question I
[29:38] asked you this during the filming we've
[29:40] been several months on I asked you the
[29:43] simplest question like do we finally
[29:45] have it do we really have it is this
[29:46] really it I'm gonna ask you again as
[29:48] your answer changed is this is this it
[29:50] this is everything
[29:52] all right all right so rich Yogi thank
[29:56] you so much for taking your time to be
[29:57] here on Star Citizen live uh we're gonna
[29:59] take a short break and when we get back
[30:01] uh somebody we haven't seen in a while
[30:03] stay tuned
[30:10] [Music]
[30:32] [Music]
[30:38] [Music]
[30:41] death Construction
[30:48] [Music]
[30:49] [Applause]
[30:53] [Music]
[31:02] [Applause]
[31:07] [Music]
[31:17] three two one
[31:22] [Applause]
[31:28] [Music]
[31:34] [Music]
[31:34] [Applause]
[31:41] [Music]
[31:41] [Applause]
[31:47] [Music]
[31:55] all right
[31:58] [Music]
[32:01] [Applause]
[32:05] [Music]
[32:08] [Applause]
[32:10] comes
[32:11] [Music]
[32:26] world stops
[32:30] foreign
[32:44] [Music]
[32:50] [Music]
[33:15] [Music]
[33:18] one
[33:19] shot right now
[33:27] [Music]
[33:34] [Applause]
[33:39] [Music]
[33:45] [Music]
[33:58] foreign
[33:59] [Music]
[34:07] I just heard a piece of information
[34:09] during the break that I wasn't prepared
[34:11] for ah joining us on the show right now
[34:14] uh is someone who perhaps needs no
[34:16] introduction but we're going to do it
[34:17] anyway one of the original founders of
[34:21] cloud Imperium games uh way back when uh
[34:25] Sandy Roberts Sandy how you doing
[34:27] welcome thank you it's been so long I'll
[34:30] give you an e-hug
[34:31] welcome back to the spaceship yes thank
[34:34] you very much I'm happy that I can
[34:36] actually be on it this time last time
[34:38] you were shoeing me off saying go hey no
[34:40] spoilers so okay so the last time she
[34:43] shows up last time she shows up but we
[34:45] were still under construction listen and
[34:46] and if you if you follow Sandy on on
[34:49] Twitter or social or other social medias
[34:50] she's got a rather prolific uh uh uh
[34:53] presence there and she starts taking
[34:55] pictures and I'm just like I'm just like
[34:56] I know please please no picture not
[34:59] before citizens
[35:01] she was like fine but I have to come
[35:03] back yes so now I'm back you invited me
[35:06] back thank you very much fun so what are
[35:09] you doing here you I mean normally
[35:11] you're based out of the LA Studio that's
[35:13] where we work together for for so many
[35:15] years
[35:16] um uh but you're known to travel a lot
[35:19] in your position I am I travel a lot
[35:22] Chris is here all the time so therefore
[35:24] so what brings you here now what brings
[35:26] me here now well what day is it today
[35:29] it's uh whatever day it is yes uh the
[35:32] other day we were we were at the
[35:35] Frankfurt Christmas party okay and I got
[35:38] to see the new offices which are really
[35:40] nice really nice they did a really good
[35:42] job
[35:44] um I don't know a lot of people
[35:46] so there are all there are a lot of news
[35:49] there are a lot of new faces you know we
[35:51] we talk about this how the company has
[35:53] grown to like 800 plus folks and it's
[35:56] impossible to keep up with all of the
[35:58] new faces I I come in and I'm just like
[36:01] yeah I I did not know yeah of course
[36:04] Inez Brian Chambers uh hanas
[36:08] um who else was there oh Todd moved here
[36:10] but but a few faces uh said hello but
[36:14] wonderful offices Christmas party was
[36:16] great and then we went to a bar citizen
[36:25] yeah my brain is yes we flew to Berlin
[36:28] which was fantastic I I think you sent
[36:31] you think you loaded Tom up with a
[36:32] picture before do we have a picture of
[36:33] the bar citizen in Berlin
[36:36] oh wow that's a big one
[36:38] it was it was a big one we had
[36:40] um we capped it just over a hundred
[36:42] people so that we were able to talk to
[36:46] everybody okay right we took everybody's
[36:49] hand I waved but he shook everyone's
[36:52] hand and then we sat at each table we
[36:54] did a q a
[36:56] um we signed lots of stuff took lots of
[36:58] pictures that's really good fun for
[37:00] those who may not be familiar with bar
[37:03] citizens are a wonderful initiative
[37:04] started by our own Community uh to
[37:07] basically gather and break bread and
[37:10] tell tales with uh with other star
[37:12] citizens and then because we'd like hey
[37:14] that's pretty cool you know we if
[37:17] they're local to an office we would
[37:18] crash over the years uh recently this
[37:21] year we started the bar citizen World
[37:23] Tour where we would send cig staff and
[37:26] developers to all manner of places uh
[37:29] you know cities states provinces
[37:32] different countries around the world on
[37:33] different continents uh you've been to
[37:35] you've been to a few of those how's that
[37:37] been the bar citizens World Tour I have
[37:39] well this was actually the first one
[37:40] I've been to in a while okay the
[37:43] original one I don't know if you went to
[37:45] the original one but it was created by
[37:47] myself and Alexis and Ben
[37:50] and that was in 2013 I believe in Santa
[37:53] Monica
[37:54] and uh that was good fun and that took
[37:57] off we did food citizen you came to that
[38:00] one
[38:01] that was a that was a a failure
[38:03] sometimes we try things yeah sometimes
[38:05] we try and they don't work and
[38:07] um but I haven't been to a bar City well
[38:10] actually I went to the one in Los
[38:11] Angeles it was sort of in the summer in
[38:14] the South as I say I knew you this
[38:16] hadn't been the first thing I've ever
[38:17] had in the first one also yes so that
[38:19] was the first one I'd been since the
[38:21] pandemic and I saw a lot of La folks I
[38:25] didn't recognize too but a lot I did
[38:28] recognize that's what happens when the
[38:29] project grows I know I know I know it's
[38:32] not it's not just me and Ben and Chris
[38:36] and haddock and yeah yeah I want to go
[38:39] back to the to the to the to the
[38:40] Christmas to the holiday party a little
[38:42] bit you said you were there with with
[38:43] Brian Chambers
[38:46] I heard that there's there's a photo of
[38:48] Brian actually smiling yeah I didn't
[38:52] know that was a thing but but we were
[38:54] posing and I guess uh well posing for
[38:56] the camera and I guess Brian wasn't
[38:58] smiling
[39:00] smile smile smile so and and you sent
[39:05] that to Tom too Tom do we have that I
[39:06] haven't seen this yet
[39:08] a smiling Brian Chambers wow yes well
[39:12] Aaron was smiling because it was snowing
[39:14] they brought the snow for us and uh
[39:18] Aaron had been outside drinking the glue
[39:20] Vine so he was quite happily smiling but
[39:24] um and then somebody told me that the
[39:27] secret to drinking gluvine is to eat the
[39:31] almonds
[39:32] then you don't get some like a furry
[39:34] throat
[39:36] so
[39:38] I don't know that was a pro tip it may
[39:40] or may not work I didn't try it but uh
[39:43] uh anybody who chooses to take that
[39:45] advice and uh whether it works or not uh
[39:50] we endemnify cloud and pyramid games
[39:51] rubber Space Industries exactly we take
[39:53] no responses
[39:55] they can attempt such a thing but maybe
[39:57] it works yeah all right so so on your
[40:01] way here you pass through Frankfurt you
[40:03] pass through Berlin yes now you're here
[40:05] though now I am here so what brings you
[40:08] here what brings me here again is the
[40:10] new offices and also a board meeting I'm
[40:13] on the board
[40:15] um so that's that big quarterly
[40:17] Gathering where I see all the important
[40:18] people come by and they're just like you
[40:20] can't stay in the other room and I'm
[40:21] like okay I'll stay away don't scare the
[40:23] board members yeah of course my
[40:24] daughters joke that it's called bored
[40:26] for a reason but
[40:29] um so if that's why I'm here so that's
[40:31] the big quarterly thing that happens and
[40:32] it's it's here in the Manchester office
[40:34] it's here yeah
[40:36] um now we haven't you talked about the
[40:38] Frankfurt office The Venture service we
[40:40] haven't really shown any of this uh of
[40:43] this yet because you know we want to
[40:45] wait till it's totally dialed in and
[40:47] everything and all the amazing wall art
[40:49] is up and everything but uh because
[40:51] because you've been and I haven't give
[40:53] me your impression of the Frankfurt
[40:54] office what what is it real is it really
[40:57] I've seen photos of these weird pod
[40:59] things that you can sit in they look
[41:02] weird but they're not weird I I sat in
[41:05] one and they're they're like sound
[41:07] proofed little very comfortable meeting
[41:11] rooms
[41:12] and you you sit you can sit with
[41:14] somebody and take a meeting I went into
[41:15] the meditation room
[41:18] uh and took a nap
[41:22] they have these sort of banana boat uh
[41:25] cushions but you can also do other you
[41:28] know it's relaxation room play music do
[41:31] all kinds of things and I saw on uh you
[41:34] again we're in reference for Twitter I
[41:36] saw on your Twitter yesterday uh you
[41:38] took a picture of Benoit in the the new
[41:40] sim pod uh Sim rig that we had that we
[41:43] built here in Manchester that's really
[41:45] impressive that you built it well no
[41:48] Benoit no we uh I stood around and made
[41:50] snide comments while he built it but oh
[41:53] but that was impressive because I feel
[41:55] like I just saw him in Frankfurt yeah he
[41:58] did it in a day he did it in a day yeah
[42:00] oh wow it's Benoit yeah of course of
[42:04] course I saw that I saw the guys having
[42:06] a having a try I wasn't I wasn't too
[42:09] game to have a try there's so much going
[42:11] on
[42:12] I was just always afraid I was going to
[42:13] kick the pieces and lose them so
[42:17] we have you here I know we've been you
[42:20] know catching up and stuff like this but
[42:21] it is our 10th anniversary this year
[42:25] um
[42:26] I'm a sucker for the history and stuff
[42:29] when when folks have a question here
[42:31] about something from yay old days they
[42:33] usually come to me and ask because I've
[42:35] been here for as long as I have now
[42:36] you're one of the few people that have
[42:39] more tribal knowledge than I do you know
[42:41] we're back I want to ask you about that
[42:43] first day because this is a conversation
[42:45] we've never had the first the first day
[42:47] the first day you know October 10th 2012
[42:50] you're at GDC in Texas I don't as in
[42:54] Austin
[42:56] what was that day like because because
[42:59] you know you and Chris and ortwin and
[43:02] and like I said a small handful you know
[43:03] haddock and stuff have been working
[43:05] internally it's all been a secret at
[43:07] this point uh you had the contest thing
[43:09] over but it's all been a secret and this
[43:11] is the day you're finally gonna unveil
[43:13] this to the world what was that like
[43:17] tell me a story yeah I mean you know I
[43:20] was talking to John Erskine in Frankfurt
[43:23] at the Frankfurt Christmas party and and
[43:24] we were saying when you're really doing
[43:26] it when you're really in it
[43:28] it's just so
[43:31] there's you're just on on high alert
[43:34] it's it's like the lead up to the
[43:37] October 10th there was so many
[43:41] balls to catch and plates and spinning
[43:44] in the air
[43:46] um
[43:47] that I mean we just didn't know we
[43:50] thought it was going to go well but we
[43:54] weren't sure
[43:56] um I think did I tell you Chris was
[43:58] singing like Chris is not a great singer
[44:00] but he called me from Germany spoiler
[44:03] alert
[44:04] um he called me from Germany and you
[44:07] know that song Big in Japan that he was
[44:10] singing big in Germany badly because all
[44:13] the journalists had brought old Wing
[44:16] Commander boxes and they were raving
[44:18] about the Prototype and he thought well
[44:20] maybe we have something maybe it's going
[44:23] to be good right because Sean Tracy
[44:27] Hannah's they all thought it was good
[44:28] and I'd seen the Prototype I thought
[44:30] this this is something but you never
[44:32] know
[44:33] and uh we set up the website and I was
[44:37] doing everything at the time I mean
[44:39] everything
[44:41] um that was his personal assistant a
[44:42] meeting organizer dealing with publicity
[44:45] the marketing department yeah everything
[44:47] I booked Chris into a broom closet in
[44:50] London we're on a budget
[44:52] um and of course when he got up to give
[44:55] the the speech at GDC in the
[44:57] presentation and then we launched the
[45:00] site it crashes
[45:02] well and in what would become the
[45:05] Hallmark of Star Citizen for a few years
[45:06] yeah I just was like oh my gosh
[45:10] it was
[45:11] in that moment I thought oh my gosh it's
[45:13] over it's so done
[45:16] um you can laugh out laugh at it now but
[45:18] I I imagine in it on day one it was hot
[45:22] it was horrifying it was all that work
[45:23] and then you're thinking oh my gosh and
[45:26] you're thinking people are going to go
[45:27] away and not come back because the
[45:28] world's so fast and fickle
[45:32] um
[45:32] but yeah the first one and then it just
[45:35] sort of snowballed from there
[45:37] it kept going
[45:39] so we we have a you say snowballed from
[45:42] there uh I've got a couple I've got a
[45:44] couple of stats here I want to see if I
[45:46] can if I can pull this out from the chat
[45:48] so I mean we we now of course we've
[45:51] talked about how the company we were
[45:52] mentioned the company has blown up to
[45:54] five studios around the world 800 you
[45:57] know employ 800 plus employees uh I know
[46:01] there's I think I had a number here
[46:03] about how many uh star citizens we have
[46:04] but there was over 36 million hours
[46:09] played in 2022 alone not not over our
[46:12] life from 36 million hours played in
[46:15] just this calendar year the one that
[46:16] we're still not done with and it
[46:17] averages to something like between the
[46:19] players and the things that's an average
[46:21] of three hours of play time
[46:25] is it a day
[46:29] we're at 44 million oh okay come on
[46:32] there's there's literally I was reading
[46:34] the old message and they're like no it's
[46:36] changed uh so so three hours a day uh uh
[46:40] at 44 million hours played this year so
[46:42] far so yeah it's it's you know not bad
[46:45] for a game that this vaporware
[46:48] I know I know I've played it with the
[46:50] girls
[46:52] are we not supposed to say that you're
[46:54] trolling yourself yeah yeah
[46:57] but I was telling one specific person on
[46:59] Reddit uh I see I say
[47:01] um yeah I play with the girls I I'm I'm
[47:03] not that great they always they're so
[47:05] good I'm terrible I I yeah I do all the
[47:08] dumb things and they then Mom you don't
[47:11] do that you got to take your helmet off
[47:12] before you eat a hot dog
[47:14] I mean they're just you know of course
[47:17] one of the one of the dirty secrets we
[47:19] don't talk about is that very rarely are
[47:22] the people who make a game really really
[47:25] good at the game that they make I think
[47:27] there's this weird expectation that if
[47:29] you that if you're involved in the
[47:30] creation of a game that you must be this
[47:32] excellent player at it but I've seen
[47:35] more people you know not just I'm not
[47:37] talking about Star City specifically I'm
[47:38] talking about any of the places I work
[47:39] blizzard whatever it's it's you spend
[47:42] all this time making it and then you
[47:43] actually sit down and try to play it and
[47:45] it's like they're different aptitudes
[47:46] they're dramatically different aptitudes
[47:49] so yeah I I was I was hopeful I I when I
[47:53] got into uh that Sim rig that Benoit uh
[47:55] built I I completed my first race at New
[47:59] Horizon Speedway ever
[48:02] look at you not really impressive oh I
[48:06] guess it depends how how you did it too
[48:08] ah so yeah so so so so so so we were we
[48:13] were also so what would you I think
[48:15] you'd be referred to you as what would
[48:17] you call yourself you were you're there
[48:19] you're part of the the OG group uh we
[48:21] were having this conversation is this
[48:23] Original Gangster oh gee what did you
[48:25] call that the Old Guard the Old Guard
[48:27] yeah the original guard yeah
[48:31] I don't know but but yeah those those
[48:34] early days of of setting this place up
[48:37] uh I mean world record you know right
[48:40] off the bat not too shabby not too
[48:43] shabby for a you know for a team of only
[48:45] a handful of people back then
[48:47] yes
[48:48] I mean
[48:51] so busy I used to answer customer
[48:52] service tickets too I remember yeah I
[48:55] was I was talking to Tyler about that in
[48:57] the live stream I gave people my
[48:59] personal email on facts on Thanksgiving
[49:02] and got two and a half thousand tickets
[49:05] definitely the worst leak any of us here
[49:09] in this building have ever been a part
[49:10] of yeah
[49:13] so uh we you know organized the citizen
[49:16] cons the first one we didn't even have
[49:18] our own let's talk about the first
[49:20] season the very first season on 2013
[49:22] that was in Austin that was in Austin at
[49:24] the Alamo and then the after party again
[49:27] I was on a budget because we really
[49:29] didn't spend marketing
[49:32] it was a lot of community and a lot of
[49:36] just putting it together
[49:40] yeah so there was nobody there like we
[49:44] didn't have our own venue we were
[49:45] sharing it with some Finance guys who
[49:47] were like well what Star Citizen and of
[49:50] course we had some some backers there
[49:52] and so the person is half video game
[49:55] players and yeah half accountants yeah
[49:58] it was a interesting party
[50:02] so yeah the first one and then we had a
[50:03] couple in um
[50:05] why do we have the other ones oh the
[50:06] Manchester one with the Concorde plan
[50:08] yeah yeah the Concord plane that oh my
[50:11] gosh so so that was my that was not my
[50:14] first one but you know first one in when
[50:16] I was inside and I'm I'm there I'm
[50:18] monitoring a chat remember chat roll who
[50:20] remember anybody yeah I remember Cheryl
[50:23] and watching watching people go crazy
[50:25] they built an enormous spaceship
[50:29] Court
[50:30] but it was already there yeah but yeah
[50:33] no it's this isn't going to start as
[50:34] obviously started very small you know it
[50:37] has grown uh commiserate with the
[50:40] project uh all the way till 2019 which
[50:43] was our our biggest one yet here in here
[50:46] in Manchester look at this the um
[50:50] I'm just gonna do I'm just going to do
[50:51] it so that was our last one that we've
[50:54] done live that was 2019. uh obviously we
[50:58] didn't have one in 2020 it was the
[51:00] pandemic we had originally had one
[51:02] scheduled that year for Los Angeles uh
[51:04] that you know but the city shut down uh
[51:07] in 2021 and 2022 we had virtual events
[51:10] uh internally we call it digital system
[51:13] which is why I said DCC twice in the
[51:15] thing in case people were like what is
[51:16] he's talking about DC it was an internal
[51:18] sorry it's an acronym it's not one that
[51:19] you're meant to hear but I said it twice
[51:21] and I figured I'll explain it
[51:23] um
[51:24] it's been four years
[51:27] you know since well well it will be next
[51:30] year next year it will have been four
[51:32] years since we had a live event is there
[51:35] anything you can tell us any Sunshine
[51:37] any hope any yeah but you're like
[51:40] setting me up well I figured I figure
[51:43] that they can't get mad at me if you say
[51:46] if I say something you say something if
[51:48] I say something well there is something
[51:51] happening in my hometown not Hometown I
[51:53] mean where do I live really but
[51:56] Los Angeles Los Angeles yes we are going
[51:59] to go back into a physical citizen con
[52:03] yes
[52:04] you know next year next year 2023 yes
[52:09] uh anything like a date any day eight
[52:13] dates oh you see I'm not Chris but soon
[52:16] TM no
[52:17] um in October
[52:19] but I don't know when in October but we
[52:22] will do a physical citizen Con in Los
[52:25] Angeles in 2023 in October
[52:29] yes all willing and the world doesn't
[52:32] explode or Los Angeles decides to do
[52:35] something really weird yeah no I'm gonna
[52:37] I'm gonna do some space dead here for
[52:39] this just okay so hi everybody uh you
[52:42] just heard that citizen con 2023 has
[52:44] been confirmed for Los Angeles in
[52:46] October of 2023.
[52:48] there are probably going to be some of
[52:50] you who want to rush out and buy plane
[52:51] tickets and book hotels and such like
[52:54] this I'm going to ask that you hold on
[52:56] that you that that you remain calm and
[52:58] stuff like this we don't know if this is
[53:00] going to be the beginning of October the
[53:02] end of October remember the last
[53:04] physical citizen we had was in November
[53:07] these things are not entirely within our
[53:09] control there's the venue and when what
[53:11] what venues are available and when they
[53:13] have schedules and then you know all the
[53:15] different third party vendors that we
[53:17] have to hire in order to put on a big
[53:19] thing so without
[53:22] knowing that we are shooting for October
[53:24] but if it ends up being November 3rd or
[53:26] it ends up being September 30th or
[53:28] something I would just encourage you to
[53:30] please
[53:31] hang tight don't book any plaintiffs
[53:33] unless you want to spend a month and a
[53:34] half in La which I can recommend you go
[53:37] to Disney World you've got a lot you
[53:38] know Universal there's lots of things to
[53:40] do but
[53:40] hang tight this is this is more than I
[53:43] expected to get uh today so so uh so
[53:46] yeah that's that's exciting though I'm
[53:48] yeah what we are doing bar citizens
[53:49] again I'm pretty sure I'm pretty sure
[53:51] that the world tour is kicking off again
[53:53] in January that too is that a spoiler
[53:55] alert
[53:57] am I just
[54:00] okay so so the bar citizen World Tour
[54:02] 2022 as we've been calling it yeah is
[54:05] going to continue next year I think so I
[54:07] I heard a rumor that uh the one that
[54:09] Chris and I went to was the last one for
[54:11] 2022 but we're kicking off in January
[54:14] the 2023 tour
[54:17] all right so we're kicking off our
[54:18] citizen World Tour 2023 yes
[54:21] um and then Chris and I we're you know
[54:23] we'll try to make it to a couple here
[54:25] and there I'm not sure which ones but
[54:27] all right all right I'm I'm a space dad
[54:30] again uh uh okay yeah don't go booking
[54:32] every single exactly so uh The Wave Bar
[54:36] citizen world tour works uh you guys
[54:38] decide uh where to have them you can go
[54:41] to barcitizen.sc uh you can announce
[54:44] your bar citizen uh you you can
[54:46] coordinate your own and be sure you let
[54:48] us know uh tag us on social media submit
[54:51] uh tickets whatever your communication
[54:53] method of choices uh but remember that
[54:56] while we would love to attend each and
[54:59] everyone that simply is not a logistical
[55:01] a possibility so uh so let us know try
[55:05] to give us as much time and notice as
[55:08] possible uh don't be like hey I'm doing
[55:10] a bar citizen next Thursday and you know
[55:12] in Spain can you make it try to give us
[55:15] as much time as possible and remember to
[55:16] work with your event with your venues
[55:18] remember to let the venues know uh when
[55:21] you're playing them and everything so
[55:22] that everything is nice and copacetic
[55:24] and everything so that when we fly
[55:25] people over everything works and
[55:27] everything is awesome uh but yeah bar
[55:29] citizen World Tour 2023 I hope can I get
[55:31] can I go to well I only went to like one
[55:34] this year can I can I go to more I can
[55:36] go to one oh Jared you're gonna be at
[55:38] some of our citizens be careful what you
[55:40] ask for I want to go to I want to go to
[55:43] oh wait yeah are you really wanting to
[55:46] say this on camera um I've never been to
[55:48] Italy oh okay I'm I'm Italian somewhere
[55:51] my grandmother was a time I've just
[55:52] never been
[55:53] so
[55:55] just if anybody's out there doing that
[55:57] go ahead Italian Community
[55:59] uh yeah so that's pretty much all the
[56:02] time we got is there I mean yeah I'm
[56:05] gonna I'm gonna I'm gonna I'm gonna do
[56:06] I'm gonna do a close here but I feel
[56:08] like the last word should come from you
[56:09] so I'm gonna so prep you you think about
[56:11] what you want to say to the community
[56:13] here in a minute uh for folks watching
[56:16] home uh thank you for joining us on this
[56:18] week's uh Star Citizen live uh it was
[56:21] great to have uh uh rich and Yogi on be
[56:24] able to reschedule uh their re their
[56:27] previously canceled show uh because I
[56:29] got
[56:30] plague and when I thought it was great
[56:32] to have them back and then of course
[56:33] Sandy here uh beginning to share
[56:36] memories from from day one of Star
[56:38] Citizen back in 2020 12. uh remember if
[56:42] you haven't check out yesterday's inside
[56:44] Star Citizen it was a continuation of
[56:47] the journey to 4.0 initiative that we
[56:49] began at this year's citizencon these
[56:51] these presentations will continue
[56:53] throughout the next year as the journey
[56:55] to 4.0 is one that's that's uh long and
[56:58] fruitful and is bound to be filled with
[57:00] twist and turns so we'll continue to
[57:02] have presentations and uh showcase uh
[57:05] future developments for the four point x
[57:06] Branch throughout next year in place of
[57:09] some ISE episodes and then uh come on
[57:11] back here and then come on back next
[57:13] week for our
[57:15] annual inside Star Citizen year in
[57:18] review 2022 where we look back at
[57:20] everything that not everything but most
[57:22] of the the big highlights of the star
[57:24] citizens year and a look at what's
[57:25] coming in the upcoming 318. so for Rich
[57:29] and Yogi I'm Jared and I'm gonna I feel
[57:33] we got you here old school
[57:38] Sandy yes take us home uh this year I'm
[57:40] right here right here I do want to thank
[57:43] the community for their support over the
[57:45] past decade it has been awesome and it's
[57:49] been an incredible journey
[57:51] and it still is an incredible journey
[57:53] and the staff every I mean a lot of the
[57:56] our fans are also have become staff like
[57:59] Jared
[58:00] um and going to the bar citizen the the
[58:04] passion and seeing Chris speak to
[58:08] everybody and and I'm I'm terrible I'm
[58:11] going to start crying again it's the
[58:12] worst I'm the worst
[58:14] um
[58:14] it's it's I mean it's incredible I I am
[58:17] so proud
[58:21] [Laughter]
[58:27] so thank you so much for the support and
[58:30] we will see you around the verse
[58:33] didn't even have to practice that that
[58:35] was so good
[58:38] that was terrible

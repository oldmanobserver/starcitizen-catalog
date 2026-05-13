# Inside Star Citizen:  Dev Diary - Server Meshing

**Video:** https://www.youtube.com/watch?v=pCPaSkcK3mM
**Date:** 2024-07-04
**Duration:** 23:11

## Transcript

[00:02] the core Technology Group bunch of big
[00:05] brains found in all five of our Studios
[00:08] these are the folks that have been
[00:09] working to expand Star Citizen beyond
[00:12] the limitations of the traditional
[00:14] client server model to distribute what
[00:17] would have been the work of a single
[00:19] server across many this work has many
[00:23] parts but the collective name for all
[00:25] the technologies that allow this to
[00:27] happen we call Simply server
[00:31] meshing beginning late last year the
[00:34] newly created Tech preview channel was
[00:36] used for a series of
[00:38] tests and while the work of server
[00:40] meshing is that of our entire
[00:42] development staff toiling in concert
[00:45] with the core Technology Group we asked
[00:48] members of the small but dedicated UK
[00:50] networking team to speak on their behalf
[00:54] this is Dev diary server meshing
[01:00] [Music]
[01:07] [Music]
[01:13] yeah there was a nerve-wracking one for
[01:14] us because it was the first time you
[01:15] know going out public with such a big
[01:17] fundamental change for How We Run the
[01:20] game replication layer Network code
[01:22] split out from the dedicated game server
[01:24] running in its own uh service we call
[01:27] the hybrid service so these tests are
[01:29] not just for uh for us in CCH these are
[01:31] also for the game side as well so they
[01:33] can actually see their systems
[01:35] functioning along with serve meshing uh
[01:37] it's kind of one cohesive hole so that
[01:39] was the first time trying to deploy that
[01:41] kind of environment which is radically
[01:43] different from what we've had to do
[01:45] before one of the major purposes of tech
[01:47] preview uh is to expose the game to a
[01:50] much wider audience so that the rest of
[01:52] the development team can see more of
[01:56] their work exposed really help us pick
[01:58] up on all the little corner and educ pie
[02:00] that we don't necessarily spot if we
[02:02] only have a handful of people testing so
[02:04] it's really good to you know have other
[02:05] development teams look at the tech from
[02:08] you know a development perspective and
[02:09] on a live environment as well in Alpha
[02:13] 318 we introduced the replication layer
[02:16] our first major Milestone towards server
[02:19] meshing it offloaded the entire state of
[02:22] the universe things like characters
[02:24] ships weapons and more away from the
[02:26] game server which we call the dgs
[02:30] it wasn't the smoothest process but the
[02:33] work of splitting the replication layer
[02:35] to be shared between the client and EGS
[02:37] into a new hybrid service still needed
[02:40] to be done as was testing of a brand new
[02:43] server crash recovery system that was
[02:45] long
[02:47] overdue these would be the focus of our
[02:49] first two Tech preview tests and
[02:52] everyone was excited to learn everything
[02:54] we could with help from the community
[02:57] basically we learned that it worked went
[02:59] Sur surprisingly well for us yeah it was
[03:01] great fun yeah good job it works we
[03:04] learned that um yeah the technology was
[03:06] working kind of as we expected it was
[03:09] like surprising how well it actually
[03:11] worked for the backers the major change
[03:13] that they would have observed through
[03:14] these tests was the Improvement for
[03:17] server crash recovery so the first
[03:18] outing with server crash recovery we
[03:20] were talking 25 30 minute recovery times
[03:24] uh frequent crashes all over the place
[03:26] it's almost like we're pulling the
[03:28] tablecloth out from underneath everybody
[03:30] at once so it requires people to make
[03:33] some interesting considerations and kind
[03:35] of chimmy that tablecloth back
[03:38] underneath with the with the new server
[03:40] so if the server crashes the game State
[03:42] still survives we can spin up another
[03:45] server and when it connects again the
[03:47] new server connects again it can get all
[03:48] the game State back and clients can
[03:50] continue on their merry way basically
[03:52] server meshing for game codes all at
[03:54] once in like one big giant transition
[03:57] but I think by the time we were getting
[03:58] to this yeah second and third test
[04:00] we're starting to see things
[04:02] dramatically quicker uh and dramatically
[04:04] more reliable yeah I think I was
[04:06] probably expecting it to
[04:09] explode yeah pretty hard we were
[04:12] surprised that the game code worked as
[04:14] well as it did without needing changes
[04:16] backers have a way of finding and
[04:19] breaking uh breaking things so yeah
[04:22] having a good few hours testing uh in
[04:25] back of hands in a more or less real
[04:26] world environment was incredibly
[04:28] valuable of course this is still game
[04:31] development and these were tests not
[04:34] just for the core Technology Group but
[04:37] for every other Dev team to see just how
[04:40] much work they still had ahead of them
[04:42] work that continues today adapting all
[04:45] of Star citizens various game systems to
[04:47] the realities of server meshing we found
[04:50] that there were some gameplay systems uh
[04:53] that weren't quite ready for server
[04:54] crash recovery that cause some issues
[04:56] when server crashes and a one takes its
[04:59] place that kind of allowed us to kind of
[05:01] create a bunch of bugs and send them out
[05:03] to various gameplay teams what's
[05:05] cyclical crashing basically when the St
[05:07] then tries to recover start back up it
[05:09] would then deserialize the state that we
[05:12] had sted previously and the state itself
[05:15] was corrupt so it would just crash and
[05:17] it would just keep keep trying pretty
[05:19] annoying um a lot of people were like ah
[05:21] this you know let's turn off server
[05:23] crash recovery that's the problem when
[05:25] actually no it it wasn't the problem uh
[05:27] it was just the state it was in um when
[05:30] it is working it it works very well Star
[05:33] Citizen is a large complex game every
[05:35] little bit of it uh across ctech and the
[05:37] actual game system has to function
[05:39] perfectly for server meshing to work the
[05:41] test allowed us to point to parts of the
[05:43] code where things didn't function so we
[05:45] could go back to the game teams and say
[05:46] you need to go back and you need to
[05:48] rework this particular system being able
[05:50] to allow the replication layer to kind
[05:52] of soak is kind of why how we were able
[05:55] to get it from from basically having
[05:57] things work for the first time to a
[06:01] production ready product making sure
[06:02] that we were in a good state so that we
[06:04] could progress with the next set of uh
[06:06] Tech preview test it had work twice now
[06:08] yes yeah the the the the overconfidence
[06:11] was starting to grow
[06:14] yes with two successful trials in the
[06:17] can the team broke for the holidays
[06:19] returning in January with more tests
[06:22] more fixes more bugs to discover and
[06:26] even improvements to the very manner in
[06:28] which we collected and analyzed data
[06:32] itself at this point now it's not only
[06:37] about just getting server crash recovery
[06:38] working but we're really starting to see
[06:40] changes come in from the game teams uh
[06:42] for the various systems that interact
[06:44] with it so from those early tests people
[06:47] would have seen uh you know a loss of
[06:50] State for certain systems or things that
[06:51] just didn't recover well uh if you ended
[06:54] up in you know a weird condition where
[06:56] let's just say you're in the middle of
[06:58] respawning during a server but this has
[07:00] been we were noticing you know a lot of
[07:01] you know major spikes and you know a
[07:03] player tries to interact with a door or
[07:05] a ship or tries to pick up something and
[07:07] you know they could be waiting several
[07:08] minutes for something to actually happen
[07:11] but then it was also other game code as
[07:12] well other teams you know send in sort
[07:14] of like serialized variables and
[07:15] messages across the network and some of
[07:17] them were like being sent twice which
[07:19] obviously it's not ideal because if
[07:20] we're sending messages twice we we only
[07:21] need to send it once then we've got two
[07:24] messages being sent which is you know
[07:26] the backlog or the queue is just going
[07:27] to get busier a lot quicker so so
[07:29] between now and then you know data
[07:31] analytics metrics making sure that the
[07:34] development team had the information
[07:35] that they need when they request it as
[07:37] well and having our backend dashboard
[07:39] set up so information is correct and not
[07:41] incorrect because we don't want to
[07:43] provide incorrect results we're starting
[07:44] to see fixes for those kind of strange
[07:46] cases start to come in so the overall
[07:48] experience at this point now would have
[07:49] been much more
[07:52] solid at this point after a series of
[07:56] necessary wins and a reconfiguration of
[07:58] our Analytics dashboard with clients and
[08:01] servers now both connecting to the
[08:03] hybrid service ready to put an end to
[08:06] the dgs crashes causing players to get
[08:09] disconnected it was time to move to the
[08:12] next major
[08:13] Milestone testing configurations of
[08:16] multiple dgss connected to the same
[08:19] hybrid service or put simply our first
[08:23] true server mesh the next uh milestone
[08:27] in our our Tech preview tesed was F 29th
[08:30] which was the first time that we um
[08:33] attempted uh to have two solar systems
[08:36] running on two djss connected to the
[08:39] same hybrid service and clients
[08:42] basically able to connect through them
[08:43] choose which solar system they wanted to
[08:45] play in and go and play so this one was
[08:48] the big surprise uh so we were really
[08:50] excited to finally get multiple dgss and
[08:53] multiple solar systems out there into
[08:55] the hands of the backers for testing and
[08:56] also this was a a huge milestone for for
[08:59] the platform teams is it's their first
[09:01] time having to deploy a full-on server
[09:04] mesh with multiple dgss uh out to our
[09:07] life environment that was a super
[09:08] exciting test we were still had the
[09:11] single hybrid which for us having a
[09:13] single hybrid manage the state of
[09:15] multiple servers was a huge huge
[09:18] milestone um and with those there may
[09:21] have been some bugs some in some
[09:23] interestingness um being able to see
[09:25] crash recovery actually occur and then
[09:28] succeed on the pyro server um really
[09:31] proved to us that we were that we're
[09:33] kind of getting to that kind of
[09:34] Milestone point we had tried it
[09:36] internally first but yeah with the tech
[09:38] previews it tends to be pretty hot what
[09:40] you see is the build that we've um
[09:43] created the day before it's kind of a
[09:45] bit of a wing in a prior to to hope that
[09:46] it is actually going to work we got a
[09:48] lot of data about our performance and it
[09:50] all seems to be holding up pretty well
[09:52] you keep saying surprisingly well were
[09:54] you expecting this to just fall in its
[09:56] face yes I've I've been working games a
[09:59] long time and it yeah for things to work
[10:02] first time is very unusual so yeah I was
[10:05] I was fully expecting something to
[10:07] explode and for us to have to to yeah
[10:10] patch something up a little bit of
[10:12] anxiety I feel uh with the teams that U
[10:15] this could we never tried anything quite
[10:17] like this before on the tech might not
[10:19] actually cope with it and then we might
[10:20] have to cancel the test things
[10:22] thankfully went really really really
[10:24] well generally speaking when we test the
[10:25] serve matching stuff out it's tender to
[10:27] behave better than people expected the
[10:29] time so yeah we've kind of gotten lucky
[10:31] with some of this stuff however as
[10:34] awesome as it was to finally see two
[10:36] star systems running on the same
[10:39] dgs there was still one last minute
[10:42] disappointment for every member of the
[10:44] team unfortunately we had a last minute
[10:47] issue with the jump points that meant
[10:50] they weren't quite going to make it for
[10:51] that test originally we were trying to
[10:53] make it so that the jump Gates were
[10:55] functional uh and you could have done
[10:57] solar system transitions via the jump
[10:59] Gates we didn't manage to make that in
[11:02] time I remember being very upset that
[11:03] jump points decided not to work at the
[11:05] last minute but there was an issue with
[11:07] the jump points where if someone used it
[11:09] the radius to pull in people from the
[11:13] server to go to pyro was essentially the
[11:15] size of the universe so if you if you
[11:18] use the jump Point everyone in Stanton
[11:21] was going to pyro whether they wanted to
[11:23] or
[11:25] not and so you had so so how did you
[11:27] enforce people not using it I don't
[11:30] actually remember I think it was just
[11:31] said no don't and the people
[11:34] behaved uh if I remember only one person
[11:38] tried it and it broke so it didn't
[11:40] nothing happened which very
[11:43] lucky and then only a week later on
[11:46] March 7th the first successful test of a
[11:50] jump Point assisted server transition
[11:52] occurred for us in the UK the tech
[11:55] preview releases tend to go out like 11:
[11:58] midnight kind of of time um and I I
[12:01] stayed up and hopped on to kind of give
[12:03] it a a look and the excitement that we
[12:07] that we had from being able to like
[12:09] actually see us like thousands of
[12:12] players in a que um jump through the
[12:14] jump points and for things to work with
[12:16] minimal issues is a very exciting time
[12:19] for us Sat by the Pyro jump gate uh
[12:22] watching the first backers come through
[12:24] from Stenton um myself a whole bunch of
[12:26] the team were online watching that
[12:28] happen
[12:30] um amazing to see it kind of culmination
[12:32] of you know years of work by dozens of
[12:35] teams and hundreds of people I remember
[12:37] being really happy because everyone was
[12:39] thrilled all the backers were really
[12:42] thrilled that they actually saw it
[12:44] themselves I remember um the players
[12:47] going through the gate and smashing into
[12:51] each other on the other
[12:53] side they would just come out of the the
[12:55] gate and somebody would be parked there
[12:57] from from having just come through they
[12:59] would crash into each other they would
[13:01] spin out it it was really funny yeah
[13:04] it's pretty it was pretty great having
[13:06] people be actually be able to do it
[13:08] something they had been waiting for for
[13:10] God knows how long seen people actually
[13:13] use the jump gates for the first time
[13:14] that was like really exciting that that
[13:16] I think brought home to the community at
[13:18] large that this was actually server
[13:20] mching that we're actually doing the
[13:22] real Tech here and it actually works and
[13:24] yeah we knew it all along but yeah it it
[13:28] told everybody else that yeah we we're
[13:31] doing the real deal here yeah I knew it
[13:33] would oh you knew it would
[13:35] work in that runup we tested nothing but
[13:39] the jump Gates cuz that that was our
[13:41] Focus so UA is so cynical that if they
[13:44] say it works it's going to work it's
[13:46] going to work that
[13:48] works and with these first successful
[13:51] tests now having proven out the
[13:53] Project's ability to simultaneously
[13:55] operate two star systems across two dgss
[13:58] on a A Single Shard the time was fast
[14:01] approaching to test the other core
[14:03] functionality of server meshing
[14:06] technology the subdivision of an entire
[14:09] star system across multiple servers
[14:12] we've done the jump gate so we we
[14:14] focused on just having the sunon system
[14:16] again but this time we split the sunon
[14:18] system between multiple djss super
[14:21] exciting now to finally deliver on what
[14:24] I think a lot of people's ver vision of
[14:25] server meshing is which is a single
[14:28] solar system being divided uh into you
[14:31] know multiple areas that are all being
[14:33] managed by multiple dgss we we once
[14:37] again really really nervous about how
[14:39] this is going to work the subdivision of
[14:42] uh of Stanton up into multiple Services
[14:45] is technically risky thing to do so the
[14:47] way that we did that is we kind of
[14:48] carved up the Stans and solar system
[14:51] into what we call territories and we'd
[14:53] assign those territories to different
[14:55] numbers of djss and while we were doing
[14:57] that we also tried increasing the player
[15:00] cap we tried two djss 200 players three
[15:04] djss 400 players four DJs 400 players
[15:08] and then we just decided to go a bit
[15:10] nuts and we tried six djss and 800
[15:14] players and that was really to um stress
[15:17] the system test uh server crash recovery
[15:22] uh and kind of yeah get all the
[15:24] performance information about how the
[15:26] hybrid service is able to handle these
[15:28] higher numbers of ps's and higher
[15:29] numbers of um of players and seeing 800
[15:33] players in A Shard and seeing the
[15:35] screenshots on Reddit very very exciting
[15:37] to see that what we had made was capable
[15:40] of that though there's certainly
[15:41] improvements to be made we actually
[15:43] exposed a bug during that one where uh
[15:45] you would drop out of quantum travel
[15:47] right at the transition point when
[15:49] someone would transition across that
[15:50] border they would just vanish so yeah it
[15:52] made it very obvious where the borders
[15:54] are all the backers were like oh we know
[15:56] where the server boundaries are that was
[15:58] actually Dental but it provided us a
[16:00] fantastic testing opportunity cuz people
[16:03] could really Hammer uh all sorts of
[16:05] crazy conditions at the boundary to see
[16:08] you know shooting other ships across the
[16:10] boundary and all throwing cargo boxes
[16:13] across and watching it all largely work
[16:16] shooting across it Eva in across it lots
[16:19] of testing that we weren't really
[16:21] expecting to get out of that actually
[16:23] happened and for the most part it it
[16:25] held up really
[16:27] well this could configuration of star
[16:30] systems broken up into multiple
[16:32] territories each containing one or more
[16:35] parts of the playable space like a
[16:37] planet or Moon distributed between
[16:39] whichever number of dgss are available
[16:42] and spreading the simulation workload
[16:44] across all the dgss in the mesh is what
[16:47] will one day allow us to seamlessly move
[16:50] or transition players throughout the
[16:52] Galaxy without immersion braking loading
[16:54] screens but with this first series of
[16:57] tests now completed it would time to
[16:59] step back and ready the replication
[17:01] layer split and server crash recovery
[17:04] for Alpha
[17:05] 323 you know I watch a lot of streamers
[17:08] and videos and everyone was really
[17:11] really happy and that makes me happy
[17:13] that that makes me motivated to do my
[17:14] job when the RL split went out in 323 we
[17:17] didn't see too many too many problems um
[17:19] and things seem to be working very very
[17:21] well and I believe that's largely can be
[17:23] attributed to the to the amount of
[17:25] testing that we've done kind of leading
[17:26] up with the with the backers and with
[17:28] the public when General QA was testing
[17:30] it when they first got their eyes in it
[17:33] they basically you could hear pin drop
[17:34] when they were testing it it was so
[17:36] quiet people were so worried about and
[17:38] then when the test was over they were
[17:39] just they were flawed essentially they
[17:42] didn't realize that that Tech had
[17:44] already been put into the game and it
[17:46] was actually pretty incredible that
[17:47] worked so well the Ser recovery stuff
[17:50] was always something we have to get into
[17:53] star system to make the whole thing work
[17:55] the crash recovery stuff required a lot
[17:57] of work on the game team side of things
[17:58] just to make sure that their systems is
[18:00] compatible so that when we do have the
[18:02] crash recovery their systems will
[18:03] recover along with the actual server
[18:05] it's a testament to our approach to all
[18:08] of this with tech preview with getting
[18:10] all of this out into the hands of the
[18:12] backers super early it's given us an
[18:14] environment and the place to mature this
[18:17] Tech so at the time that we came around
[18:19] to delivering it for real in the live
[18:21] release with 323 we had really good
[18:23] confidence that it was going to work
[18:26] that it was going to be a good
[18:27] experience and I think uh
[18:29] for the large part that's been true with
[18:32] Alpha 323 now out there's still work to
[18:35] be done and a new series of Trials have
[18:37] already begun by the time this episode
[18:39] airs between now and 4.0 we've got a lot
[18:42] of work to do both on the tech side of
[18:44] things within c tech group with the
[18:46] teams who actually working on server
[18:47] Ming there's a lot of work to do uh on
[18:49] the game side of things we've got to
[18:51] work with the game teams very very
[18:52] closely pretty much every system in the
[18:54] whole game is affected by surf machion
[18:56] to some extent more Tech previews and
[18:57] the lead up to 4.0 that should help us
[19:00] Harden like some subdivision multi
[19:03] multi- system split and kind of see
[19:06] where we can kind of push things every
[19:08] time they bump up the test like more and
[19:10] more people I'm just like ah oh now
[19:12] we're going to find more stuff that we
[19:13] don't know about oh no there's more work
[19:15] coming my team's also improving uh
[19:17] tooling as well making sure the health
[19:19] of the content is uh and the the world
[19:22] we're building is the best it can
[19:24] be ultimately these steps between now
[19:28] and Alpha 4.0 and the continuing work
[19:30] Beyond are only made possible by the
[19:33] support of fellow developer and Tech
[19:35] preview tester alike and it's these
[19:37] efforts that keep the teams moving
[19:39] forward towards these difficult but
[19:41] attainable Milestones has there ever
[19:44] been a point in The Last 5 Years where
[19:46] You' lost faith
[19:49] no really no yeah no no I mean there
[19:52] there have been
[19:54] some uh it's it's been a bit Rocky at
[19:57] times but I never lost faith cuz I
[20:00] believe in the tech I don't think we
[20:01] could have done this anywhere else no
[20:02] nowhere else would have the patience to
[20:04] really develop this kind of tech on the
[20:06] promise of something that might happen I
[20:09] don't think there is another game
[20:10] company on the planet that can do what
[20:14] we're doing uh we can take risk to
[20:16] produce amazing technologies that other
[20:18] game companies simply can't take I'm
[20:20] pretty convinced that uh this couldn't
[20:22] be doing anywhere else might sound like
[20:24] we're really confident with how well
[20:25] Tech preview has been going because we
[20:27] are but we're honestly amazed
[20:29] um how smoothly a lot of this has gone
[20:32] always room for improvement of course
[20:33] and there's always things that we wish
[20:34] had gone better but bu and large uh
[20:37] we're really impressed with the maturity
[20:40] of the tech so early on uh how well it
[20:42] performed under really heavy load in a
[20:45] real environment this is an an
[20:47] incredibly exciting time for me I I
[20:49] personally been working on this for
[20:51] almost 10 years all the little bits and
[20:53] pieces that we've been doing have all
[20:55] been leading up to this this year has
[20:57] been fantastic and actually seeing a lot
[20:59] of it all come together and you know the
[21:01] jigsa puzzle virtually complete now
[21:03] there's just the last few pieces to put
[21:04] in it's just been amazing to actually
[21:06] see all this all this work all this
[21:09] effort that we've put in actually
[21:10] actually come together and to be able to
[21:13] put it in the hands of our backers and
[21:15] you know get their feedback and you know
[21:17] have them experience what this could
[21:19] mean for the game it's amazing Star
[21:22] Citizen Alpha 4.0 will be the first time
[21:25] a server mesh consisting of multiple
[21:27] dgss with many territories and even
[21:30] multiple star systems makes its way to
[21:32] the live game environment this
[21:34] represents an enormous step forward
[21:36] towards our goal of making Star Citizen
[21:39] into a massive seamless persistent
[21:42] Universe after 4.0 we'll continue to
[21:45] push this first version of server
[21:46] meshing gradually increasing the number
[21:48] of dgss within the mesh and the number
[21:51] of players this technology can
[21:52] immediately support but to fully unlock
[21:55] the potential of the work being done
[21:57] beyond that will pursue Dynamic server
[22:00] meshing where the distribution of
[22:02] players and entities that get streamed
[22:03] in on the dgss are managed according to
[22:06] server
[22:08] load all in all the journey to server
[22:11] meshing started nearly 10 years ago and
[22:13] will continue to evolve Beyond its debut
[22:15] in this year's Alpha 4.0 and we invite
[22:18] you to continue following along with
[22:19] this progress in the tech preview
[22:21] Channel where you can help to ensure the
[22:23] best possible future for its development
[22:25] as well as keep folks like the UK
[22:27] Network team just one of the many groups
[22:30] dedicated to bringing this technology to
[22:32] life energized and empowered to make
[22:34] this dream a reality for inside Star
[22:37] Citizen I'm Jared hucke thanks for
[22:39] letting us share the people and process
[22:41] of game development with you and we'll
[22:42] see you all here next
[22:50] [Music]
[22:57] week for

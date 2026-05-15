# Star Citizen: Around the Verse - Party Like It's 2948

**Video:** https://www.youtube.com/watch?v=V1mLGSWbbxs
**Date:** 2018-06-21
**Duration:** 23:00

## Transcript

[00:14] hello and welcome to another episode of
[00:17] around the verse
[00:18] I'm sandy Gardner and I'm Chris Robbins
[00:20] this week we get up close and personal
[00:22] with a new and improved pu group system
[00:25] and laura makers guide to the galaxy
[00:27] takes us to Caliban yes but first let's
[00:30] check in with Ricky gently for a star
[00:31] citizen project update hi everyone
[00:34] who's ready for another persistent
[00:36] universe project update let's get
[00:38] started we start in the world of
[00:40] characters a ton of progress has been
[00:43] made with the facial rig tool you can
[00:45] see it being used here on an
[00:47] angry-looking band or
[00:56] mining is one of the biggest focuses of
[00:59] alpha-3 to check out where we are out
[01:01] with it everyone's been working really
[01:04] hard to make mining fun and involving
[01:06] mechanic we think you're really going to
[01:09] love getting to grips with it when it
[01:10] reaches the PU
[01:28] [Music]
[01:43] [Music]
[01:52] we've also been working on the kiosk
[01:54] that your visit to sell and refine your
[01:57] extracted minerals it's an exciting
[01:59] feature to add as it marks another small
[02:02] step towards building the in-game
[02:04] economy the audio team have been doing
[02:06] their part to enhance future PE missions
[02:09] check out how this early track enhances
[02:12] the beauty and calm of a few derelict
[02:14] areas around the verse the idea is to
[02:31] set a mysterious and somber mood while
[02:33] encouraging the player to keep exploring
[02:53] don't worry we've not forgotten about
[02:56] blowing stuff up the audio team are busy
[02:58] wood sound effects too like this probe
[03:01] explosion the new party system is being
[03:07] tested and tweaked although full
[03:09] spectrum and chat integration isn't
[03:11] ready just yet
[03:12] as you can see power allocation has been
[03:16] added to ships how you assign power
[03:19] makes a big difference to the
[03:20] performance of your ship systems and
[03:22] components developments to kortek allow
[03:26] us to implement changing weather on the
[03:28] planets you'll be visiting soon in the
[03:31] pu this is the current state of the wind
[03:34] on Hurston which plays an important part
[03:36] to the feel of the planet as a whole
[03:38] and finally the new guns that we've
[03:41] highlighted over the last few weeks here
[03:43] on ATV are ready to go check out the
[03:46] final audio effects for the Gemini f55
[03:56] and the cossack armed scalpel sniper
[04:00] rifle
[04:11] that's all for this week gang until next
[04:14] time back to you in the studio thanks
[04:17] Ricky
[04:18] yeah without 43.2 you live in the PTU
[04:20] the first wave test group subscribers
[04:22] and concierge have been working out any
[04:24] leftover bugs for the many improvements
[04:26] in new mechanics seen in our weekly
[04:27] updates one feature that's getting a lot
[04:30] of attention is the group system
[04:31] community feedback and the results of
[04:33] the poll we launched after the release
[04:34] of three point one made it clear that
[04:36] easier access to playing with friends is
[04:39] a top priority for players yeah so let's
[04:41] take a look at the new system and hear
[04:43] all about it from the guys that worked
[04:44] on it in this week's feature the group
[04:54] system is the system behind the scenes
[04:56] that manages all the requests for
[04:57] creation of groups invitations and
[05:00] disbands and so that system is basically
[05:02] the only system responsible for
[05:04] persisting these groups across reboots
[05:06] restarts so it's a resilient system that
[05:09] can live for a long period of time and
[05:12] manage a high number of groups so we're
[05:14] gonna be taking a look at the new group
[05:16] system it's pretty exciting what this is
[05:17] going to be doing in the future but for
[05:19] now there's only a certain few features
[05:21] that are gonna be in the game for the
[05:22] end user number one what we have is we
[05:24] now have a contacts menu that lets
[05:26] people either add players to their
[05:27] contacts or invite them to party just by
[05:29] F clicking on their face it's able to
[05:33] add somebody to a party that way you're
[05:36] also able to add them to your contact
[05:37] list so they'll appear there now you'll
[05:40] see now as soon as I added that person
[05:42] to my party
[05:42] I now have an AR marker here which is
[05:44] going to show them on the map where they
[05:45] are so I can help find them if we get
[05:47] separated while we're off on a different
[05:48] planet so the group systems is two
[05:52] things it's a replacement for our
[05:54] current party system to play with your
[05:56] friends and long-term it's a more
[05:58] generic solution for any ways that
[06:00] players will be grouping up together on
[06:03] the development side we are we want to
[06:07] reduce the latency and lay and the
[06:10] chorong as much as we can so that when
[06:13] the players interact with something and
[06:16] when make date when they make actions on
[06:18] it
[06:19] we don't want to always query for like
[06:21] across the server services and then get
[06:23] the result that this will have the
[06:25] latency to reduce it much as possible
[06:27] your caching the information of the
[06:30] party effectively proactively when
[06:35] before you even you want to have the
[06:38] information so it's sort of a tool that
[06:42] other programmers will get to use other
[06:44] programmers and designers to facilitate
[06:47] their features so the prime example
[06:49] right now that players will see in three
[06:51] two is quantum linking quantum linking
[06:53] needs the group system or the player
[06:56] parties to know who is playing together
[06:58] like oh you me and Joe are going to
[07:00] quantum jump so the programmer is
[07:03] working on the quantum linking need to
[07:05] ask our code ok who's actually together
[07:08] right now and like what are their
[07:10] properties of this group this is the
[07:12] part of the system where we enforce
[07:14] party rules which means you can only be
[07:17] in one party forcing that every group
[07:19] has a leader that if the leader leaves
[07:21] the group leadership is transferred a
[07:23] group can change at any time so maybe
[07:26] the quantum linking is just about to get
[07:28] started and then your buddy finally
[07:30] accepts the invite you sent them five
[07:31] minutes ago and now the groups have
[07:33] changed the the people in the group has
[07:35] changed so we need to have these systems
[07:37] listening for events the group system
[07:39] really sits in the middle of all these
[07:40] other services by bringing all these
[07:43] capabilities to other systems in the
[07:46] game back in what's more exciting is
[07:48] we're building this like foundation for
[07:51] more complicated features in the future
[07:52] the first one being the lobby service
[07:55] which will replace the current chap
[07:57] implementation currently the game only
[07:59] has a server chat which is per instance
[08:02] and so this lobby service which is
[08:04] attached to group system will be able to
[08:07] provide chat in different settings so if
[08:09] I invite some good friend of mine into a
[08:11] party right now like we're playing
[08:13] together we're chatting up a store and
[08:15] we have a great conversation there's
[08:16] good jokes in there and we want to
[08:18] remember this later this will be saved
[08:20] on the website because they're actually
[08:21] directly integrated and this is
[08:23] something that we're making new UI to
[08:25] facilitate - as well so instead of just
[08:28] having the visor chat over on the side
[08:29] of the screen we'll just like a little
[08:31] bit of real estate and you type in
[08:32] we're putting chat into Moby glass as
[08:34] well so you could manage different tabs
[08:36] and have like a larger conversation
[08:38] history there that's visible and with
[08:40] different friends and contacts is if we
[08:43] bring up our Moby glass app we can go
[08:45] into the comlink we have the same
[08:47] options here you can kick from party
[08:49] leave party remove from contacts but
[08:51] what if this also has is the now the
[08:52] chat function chat function here and as
[08:56] you'll see it shows up the same as it
[08:58] would in your visor so you can
[09:00] coordinate with your fellow party
[09:03] members wherever you are within the star
[09:06] citizen universe and regardless of if
[09:08] there happened to be looking at their
[09:09] mobile glass at the time or they're in
[09:11] the you know just running around first
[09:12] person they'll still be able to see the
[09:14] same chat messages and the future goal
[09:16] is all this is going to be directly
[09:17] integrated with spectrum so you could
[09:18] type on your client log off and get on
[09:21] your computer later and talk to those
[09:22] same friends in the same conversation
[09:24] thread this will be really interesting
[09:26] so the players outside of game and who
[09:30] is currently playing the game they'll
[09:32] have it access to the same chat system
[09:35] and make conversation and invite them
[09:38] into the game it's really giving more
[09:40] tools to empower community playing with
[09:43] friends you know better ways to play
[09:45] together better ways to get involved and
[09:47] engaged
[09:49] thanks guys we've got a lot to look
[09:51] forward to in terms of playing with
[09:53] friends in three-point-two yes
[09:56] definitely so it's going to be very cool
[09:58] to see our players use and react to the
[09:59] new system and also the implications
[10:02] relating to other aspects of gameplay
[10:03] are very exciting so looking forward to
[10:05] seeing what you guys do for entry point
[10:06] - yes and you can tune in to reverse the
[10:09] verse live on Twitch tomorrow at noon
[10:11] PDT for even more insight into the group
[10:13] system yeah so now let's go to Adam
[10:16] Weiser
[10:17] for a brief history of the Caliban
[10:19] system in a new installment of lawmakers
[10:21] guide to the galaxy hi welcome to
[10:24] another episode of lawmakers guide at
[10:26] the galaxy I'm Adam Weiser writer here
[10:28] at the Los Angeles studio and if you've
[10:31] never watched the show before it's a
[10:32] chance to remember the war team to sit
[10:34] down and give you a tour or one of the
[10:36] many systems you'll be seen in the star
[10:38] citizen universe today I'll be taking
[10:40] you to system that you probably
[10:43] shouldn't visit in a game it's it's a
[10:44] vanduul
[10:46] it's called Caliban and it's a location
[10:48] where the vanduul basically obliterated
[10:51] 500 years of human history over the
[10:54] course of just two days so yeah if
[10:57] you're gonna be heading there in the
[10:58] game there's a little doubt that these
[11:00] are gonna be looking for trouble so
[11:02] let's head off now and learn a little
[11:05] bit about Caliban now
[11:07] Caliban was first discovered in 23:41 by
[11:12] Ashley gone
[11:13] she was a hauler that was working the
[11:16] Knicks that was working in the null
[11:18] system at the time when a group of
[11:21] pirates swarmed her now she quickly qtd
[11:25] to a different location to get away from
[11:28] them she started a series of scans to
[11:31] ensure she wasn't being tracked and when
[11:34] she did that she discovered this strange
[11:35] space anomaly which ended up being a
[11:37] jump point connecting the null system to
[11:41] Caliban now after discovering this she
[11:43] immediately went to the UPA u ne and
[11:47] turned in the the data on where the the
[11:50] jump point was she named the system
[11:52] after her father and then disappeared
[11:54] from from from the public eye even
[11:57] though she would go on to become quite
[11:58] famous for making this discovery now
[12:01] when military pathfinders eventually
[12:03] went into the Caliban system they found
[12:06] something that they found that was quite
[12:08] shocking actually they discovered out
[12:11] here on Caliban 4f which is a moon of a
[12:15] gas giant out here they discovered a
[12:18] human shack that had been there for a
[12:20] while and there there were crates avoir
[12:22] of different valuable materials that
[12:24] were in the shack at the time now this
[12:26] through Ashley Gon's discovery story in
[12:29] into disarray people were questioning
[12:30] whether she was maybe a former smuggler
[12:34] or pirate who had turned on her crew and
[12:36] given up this information to the une as
[12:38] a way to basically get out there were
[12:40] many others that actually came forward
[12:42] and claimed that they were the ones who
[12:43] actually discovered the system that this
[12:45] was their Shack and they deserved all
[12:47] the credit and praise to be heaped upon
[12:49] them for first discovering the system of
[12:51] course those people couldn't quite
[12:53] supply the jumpdrive data to prove that
[12:57] they were the ones to first discover the
[12:59] Caliban system so even to this day the
[13:01] mystery of who really discovered Caliban
[13:04] is still up in the air and you EE
[13:05] documentation credits the discovery to
[13:08] both Ashley gone and no now there were
[13:12] plenty of reasons why the you why
[13:15] humanity really like the Caliban system
[13:17] and the first begins with the star at
[13:20] its center the the star at the heart of
[13:22] Caliban is a type G main sequence star
[13:26] which is very similar it's in the same
[13:28] kind of spectral class as the star at
[13:30] the center of the Sol system so it's
[13:32] like our Sun we were very familiar that
[13:34] we knew we knew what to expect from it
[13:37] and as you can see here as we we back
[13:39] out there are even two planets in the
[13:43] system's green band which was another
[13:45] reason why we were very interested in
[13:47] the system the third the system was just
[13:51] chocked full of resources starting right
[13:53] here with Caliban one now this was a
[13:56] rocky planet that we basically ripped
[13:59] all the resources from in an effort to
[14:02] build up Caliban - which is which is
[14:06] known better as Kryon now a Kryon has
[14:10] the capital of borio which today is is
[14:15] basically slowly being devoured by giant
[14:18] vanduul harvesters that are ripping up
[14:21] whatever is left in the dirt in the ash
[14:23] of of this destroyed city but at the
[14:26] time of human occupation bora-bora was
[14:29] kind of the cosmopolitan heart of what
[14:32] was essentially this frontier planet in
[14:35] this entire frontier system the very
[14:36] edge of human expansion at that time now
[14:40] it was that dichotomy of mixing both the
[14:42] culture and the frontier style that I
[14:44] thought really that I think really
[14:46] attracted people to the Caliban system
[14:48] and brought him out there in droves it
[14:50] wasn't long after its founding that that
[14:53] Caliban and borio you know had
[14:55] populations well in the millions and
[14:56] just that just kept expanding now this
[14:58] popularity also made it a prime target
[15:01] during the two foreign wars particularly
[15:03] the second of our own war where we're
[15:06] crying on here there were actual land
[15:07] battles between tavar enforces
[15:09] and human forces on cry on the the most
[15:12] famous being the Battle of corn pass in
[15:15] 2605 this was an event where basically
[15:18] three Nova tanks held off an entire two
[15:21] varn strike team for close to 16 hours
[15:23] until reinforcements could arrive and
[15:26] help help them win the battle now
[15:29] following this the second devoured war
[15:31] the the planet was in disrepair and kind
[15:34] of looking to put itself back together
[15:36] when another tragic event happened this
[15:39] one on February 18th
[15:41] 26:17 and as we back out here I'll show
[15:44] you exactly what it was and on that date
[15:46] in 26 17 the jump point that Ashley
[15:52] Gahan had discovered - between the null
[15:53] system and Caliban collapsed it just
[15:56] disappeared now this freaked people out
[15:59] but luckily there were plenty of other
[16:02] jump points this this jump point here to
[16:05] Oberon was still was in existence so
[16:08] humanity was able to get people and
[16:10] resources out of the system it wasn't
[16:12] completely closed off from the from the
[16:14] rest of humanity but the fact that
[16:18] Caliban did have unstable jump point
[16:20] connections freaked people out many
[16:23] people left the system some who had
[16:25] probably left the system during the
[16:27] second Department of foreign war just
[16:29] never came back after that time which to
[16:32] be quite honest was probably for the
[16:34] better because only decades later
[16:37] starting in 2681 vanduul raiding parties
[16:41] started to hit the system now this was
[16:44] something that it was it was an
[16:46] infrequent occurrence but it was still
[16:48] very devastating very shocking an
[16:52] occurrence that unfortunately became a
[16:53] way of life for the people of Caliban
[16:55] and over the course of two centuries the
[16:58] vanduul basically softened up
[17:01] the the Caliban system or the the human
[17:05] occupation there they explored all the
[17:07] different reaches of the system until
[17:08] finally in 2884 they were able to get a
[17:12] clan big enough together to come in and
[17:14] take the system for their own this of
[17:17] course is now known in the in the
[17:19] history books as the fall of Caliban and
[17:22] there were at the time while humans were
[17:25] still here there were early warning
[17:26] centers set up in the system to detect
[17:29] when vandals were entering were entering
[17:32] the system unfortunately those early
[17:34] warning sensors were either in disrepair
[17:36] or had been disabled by certain people
[17:39] who maybe wanted to mask the AE
[17:41] activities that they were doing in the
[17:43] system so by the time the squadron in
[17:46] charged with keeping Caliban safe
[17:47] realized that a massive vanduul clan was
[17:50] enroute it was already way too late the
[17:54] squad leader commander Randall basically
[17:57] told her squadron that their success
[17:58] will not be judged on how many confirmed
[18:01] kills they rack up but on how many human
[18:03] lives they saved and that's exactly what
[18:05] they did for for over two days until the
[18:08] UE Navy was able to get resources into
[18:10] the system this lone squadron basically
[18:13] stood up against a massive overwhelming
[18:15] van duel fleet and did their damnedest
[18:17] to basically get human humanity out of
[18:20] the system and to the safety of other
[18:22] systems
[18:23] now the losses the losses have never
[18:25] been officially reported by the Navy but
[18:28] they were obviously devastating so much
[18:30] so that the Navy retired the squadron
[18:33] immediately after the battle in honor of
[18:35] the heroic sacrifice that they gave for
[18:38] for Humanity in the system and to this
[18:41] day that that squadron is known in the
[18:43] annals of military history as the loss
[18:46] squad now again when the fall you know
[18:49] Caliban occurred in 2884 it was
[18:52] basically the end of human history in in
[18:55] this system it's it's been under vanduul
[18:57] control ever since then but there's
[19:00] still a few other things in the system
[19:01] that are that are worth checking out and
[19:03] telling you guys about past a Caliban -
[19:08] we have Caliban 3 which is right out
[19:10] here now this is a desert planet that we
[19:14] were actually in the process of
[19:15] terraforming to make him inhabitable
[19:17] when the vanduul attack happened the
[19:20] terraforming machines that were there
[19:22] kind of helping change the atmosphere
[19:24] fell into disrepair and came crashing
[19:27] back down into the planet so it reverted
[19:29] back to its natural state where it
[19:32] currently remains if we back out a
[19:34] little bit you will see a little step
[19:37] too far but just past Caliban 3 you will
[19:41] see a Caliban belt alpha this asteroid
[19:45] belt is just jam-packed full of
[19:47] resources that that we spent plenty of
[19:51] time over the 500 years pulling out
[19:52] they're still a lot there and we're
[19:55] pretty certain that the vanduul are
[19:56] pulling out their fair share of
[19:58] resources from this asteroid belt right
[20:00] now just past that we have Caliban 4
[20:03] which is a gas giant that is you see
[20:07] it's kind of the greenish gray in color
[20:08] right here this has silicates and iron
[20:11] in the atmosphere would you give it that
[20:12] color again you see the moon surrounding
[20:14] it
[20:15] Caliban 4f being the moon up here that
[20:21] the human structure was found down when
[20:24] pathfinders first came into the system
[20:25] and then if we back out even further we
[20:28] will find the last planet in the system
[20:29] Caliban 5 which is a proto planet that
[20:33] we didn't pay too much attention to when
[20:34] we were in control the system for those
[20:36] 500 years but recent military scans seem
[20:40] to suggest that the vanduul are strip
[20:43] mining this planet
[20:44] no one knows quite why but there's
[20:46] obviously something there a value or
[20:48] importance that the vanduul are trying
[20:51] to go after at the moment so that's your
[20:53] very quick history of the Caliban system
[20:56] a system that you could say is maybe a
[21:00] little bit cursed with all the bad
[21:01] things that have happened there but yeah
[21:04] hope you enjoyed hope you got to learn a
[21:05] little bit of Caliban and we'll see it
[21:07] next time on lore makers Guide to the
[21:09] galaxy thanks for watching
[21:10] good stuff Adam it's always sad when a
[21:13] system Falls to the Van Daan it
[21:15] certainly is now if you haven't already
[21:17] checked out Drake into planetaries
[21:19] newest ship the vulture take a look at
[21:20] what this light salvage vessel can do
[21:22] and don't forget to get your questions
[21:24] in for the up and coming Q&A with the
[21:26] ship's designers and don't forget new
[21:28] episodes of calling all devs err every
[21:30] Monday where you can submit and vote on
[21:32] which questions are answered on the show
[21:34] it's your chance to ask our developers
[21:37] all your most burning questions like
[21:40] when is the carat coming out when is it
[21:42] coming out don't let Jarrod hear you ask
[21:43] that ok I won't so anyway thanks to our
[21:47] subscribers for sponsoring all of our
[21:49] shows and of course to our backers for
[21:51] supporting the development of both star
[21:52] citizen and squadron 42 and that's it
[21:55] for us this week until next time we will
[21:57] see you around
[22:00] [Music]
[22:39] thanks for watching for the latest and
[22:41] greatest in star citizen squadron 42 you
[22:43] can subscribe to our Channel or you can
[22:45] check out some of the other shows and
[22:46] you can also head to our website at

# Star Citizen: Around the Verse - The Sound of Fury | 3.4 Ep. 5

**Video:** https://www.youtube.com/watch?v=76fpL2RQDmI
**Date:** 2019-02-07
**Duration:** 16:24

## Transcript

[00:02] [Music]
[00:13] [Music]
[00:24] hello and welcome to another episode of
[00:26] around the verse I'm eric kieron davis
[00:28] and i'm shawn tracy today we'll get
[00:30] updates on character animations and
[00:32] continue our exploration of the
[00:34] developing flight model with looks at
[00:36] improvements to ship AI and audio but
[00:39] first let's check out a recent ship
[00:41] centric community skirmish our community
[00:44] continually pushes the envelope on
[00:46] showing star citizens potential and
[00:48] wrecks Zillah recently put together one
[00:50] such example with this 42 person Gladius
[00:54] battle it's really cool stuff I don't
[00:56] know about you but I'm I really get
[00:58] inspired whenever I see those videos
[00:59] right like same here absolutely I even I
[01:01] think I even made a response to Chris I
[01:03] guess we can all just pack up and go
[01:04] home now yeah because they you know
[01:06] they're gonna they're gonna put together
[01:07] these really exciting things and coming
[01:09] from a modding background myself I
[01:10] really love the fact that the community
[01:12] kind of sets up some really exciting
[01:15] events for themselves and it gives us
[01:17] tons of ideas yeah is that inviting us
[01:19] yeah Chris is that is that is that so is
[01:22] that what we saw there something that
[01:23] only you could do in 3 4 3 or is it's
[01:26] like you know like when did was that
[01:28] yeah we could probably have put that
[01:30] many ships together I think in earlier
[01:32] releases but whether or not that would
[01:33] have been still really playable or
[01:35] whether you would have had rubber
[01:36] banding things going on just having that
[01:38] many entities right in vicinity of each
[01:41] other and doing you know the formation
[01:42] flying around the different hills and
[01:44] things like that that would have been a
[01:45] lot harder to do in early releases but
[01:48] now that we've been able to kind of
[01:50] knock down some of these performance
[01:52] hurdles I think we've been able to
[01:53] really give them the ability to do this
[01:55] totally that's super cool over the past
[01:58] few weeks a TV has been looking at
[01:59] different aspects of the new flight
[02:01] model in development that's right and
[02:02] soon players will get to begin their
[02:04] training in this improved flight
[02:05] experience but did you know our AI
[02:08] pilots have to be retrained to its
[02:10] specifications as well here's Andre
[02:12] Becker with more over the last few
[02:14] months the ship AI departments has
[02:17] focused on two primary topics the first
[02:20] one was porting all the existing
[02:22] behaviors for ships into ifcs 2.0 when
[02:27] the I FCS system switched from 1.0 to
[02:30] 2.0
[02:31] change how you request certain movements
[02:34] from the shifts it doesn't matter if
[02:36] that's a player or that's the AI but for
[02:38] the player that's mostly on the teams
[02:41] that do the controls but for the AI it
[02:44] is on us so when they ship in I ship
[02:47] decides to fly from A to B it requests
[02:50] different kinds of things from the I FCS
[02:53] so we had to change the way it phrases
[02:56] those requests in order to get to the
[02:58] point he wants to go to there were two
[03:02] aspects to this the first one was the
[03:04] code side so things like fly to a
[03:07] position or takeoff or defend an area
[03:10] needed to be converted under the hood to
[03:13] use new type of interface that ifcs 2.0
[03:17] provides the other part was on the
[03:19] balancing side since the combat is now a
[03:22] lot more momentum driven the parameters
[03:25] had to be tweaked so the ships behaved
[03:27] properly the other big topic was
[03:30] gunships since we were touching the
[03:33] gunship behavior anyway we decided to
[03:35] give this a makeover for 3/5 so gunships
[03:38] for us are ships that are heavier than
[03:40] the average fighter and the pretty major
[03:43] part of the damage is coming from
[03:46] turrets so there were several goals for
[03:50] us the first one was we want them to
[03:52] behave in a pretty realistic manner and
[03:55] we also want them to play quite
[03:59] differently from fires and it was also
[04:02] important to us that they play to their
[04:03] strengths so new behaviors that they are
[04:06] going to circle the targets
[04:09] roughly 400 meters that's enough to see
[04:12] them clearly and it's close enough for
[04:14] them to hit reliably but it's still far
[04:17] enough that you can't easily get on
[04:18] their tails and then they will try to
[04:21] bring the maximum number of turrets to
[04:23] bear on their target and some of the
[04:25] time for variety sake they also do a
[04:28] frontal assault run and they will use
[04:30] their front-facing weapons and also
[04:32] missiles when the player is fighting
[04:34] gunship the critical importance is that
[04:37] he gets into the gunship the blind spot
[04:39] to make sure it's outside of all the
[04:41] firing arts where as chief is fighting
[04:44] against fighter it's more important to
[04:47] stay on the fighters tail because
[04:49] fighters weapons are usually all facing
[04:51] forwards so yes this thing on the tail
[04:53] which is quite difficult since fighters
[04:55] are very agile but for the gunship the
[04:57] tail could very well be a very dangerous
[05:00] spot to be and if it has rare
[05:02] turns on the fighter side we want to
[05:07] focus on two main things the very first
[05:09] task will do for this is to make them
[05:11] more fun to shoot at after an attack
[05:13] round so once they're done attacking you
[05:15] and they are breaking away we want to
[05:18] give the player more opportunity to get
[05:19] onto the tail chase them and chasing
[05:23] them will become progressively harder
[05:24] the longer they are on the tail and if
[05:27] you decide to shoot them and you
[05:29] actually managed to get some hits then
[05:30] they will try to become more and more
[05:32] aggressive with their efforts to shake
[05:34] you off so they will present themselves
[05:37] to some degree for you to get its in but
[05:39] you will have to work for it so to sum
[05:42] it all up gunships are a lot more
[05:44] dangerous than before and they take a
[05:47] lot more brains to beat fighters are
[05:50] gonna be a lot more agile and
[05:53] certain under I've cs2 photo and will
[05:56] enable your players to get into their
[05:58] tail and get Hollywood star movements
[06:00] out of it and we can't wait for the
[06:02] backers to get their hands on it along
[06:04] with controls and systems the entire
[06:06] ship audio experience is being
[06:07] overhauled as part of the new flight
[06:09] model let's go to the audio team for
[06:11] more we've been looking to rework the
[06:13] ship audio engine for quite a while now
[06:15] as the system that we had while it was
[06:17] great at the time hasn't really scaled
[06:19] with the game and it doesn't take
[06:20] advantage of some of our features such
[06:22] as automatic inheritance inside
[06:23] dataforge
[06:24] it's quite restrictive as a sound
[06:27] designer as well because we could only
[06:28] play sounds on the thrusters and not
[06:30] anywhere we wanted to on the ship so
[06:31] with this new system the players will
[06:33] see much more positional detail and
[06:36] accuracy and where the sounds are on the
[06:37] ship as well as allowing us to bring in
[06:40] the audio vibration component and the
[06:42] environment feedback component to give
[06:44] the players even more feedback on what
[06:46] their ships doing in the state it's in
[06:48] so this is the Gladius after being set
[06:50] up with the new audio systems in the new
[06:53] system we can place emitters that
[06:54] represent the movement of the ship
[06:55] anywhere on the ship itself rather than
[06:58] being restricted to the thrusters
[06:59] themselves as in the old system this is
[07:01] useful for properly placing the sounds
[07:03] of additional systems that were produced
[07:05] sound when the ship is moving all these
[07:07] sounds are modulated by different
[07:08] parameters coming from the ifcs so
[07:10] spreading the emitters throughout the
[07:12] ship in a low friendly way like this
[07:13] results in a much more dynamic and
[07:15] believable ship soundscape while this
[07:18] has benefits for stereo speaker users
[07:20] people play them of headphones or
[07:21] surround sound systems should hear
[07:23] massive increases in positional
[07:24] believability and detail because of the
[07:27] more advanced audio features in the new
[07:29] ship audio system we can also modulate
[07:30] the sounds of ships over long journeys
[07:32] to represent the sound of the ship
[07:34] settling into a certain cruise speed
[07:38] so because of the improvements to the
[07:41] thruster audio system we now actually
[07:43] have sounds on the maneuvering thrusters
[07:45] and the retro thrusters on most ships
[07:47] which we used to have August we didn't
[07:49] have the audio features to properly work
[07:50] with the ifcs thrust output which tended
[07:53] to be quite spiky which is offering you
[07:55] SFIL for audio so now if we line the
[07:57] ship up with damar we can hear these
[07:58] working
[08:11] we've also added thrust and afterburner
[08:15] one shot sounds to the thrusters rather
[08:17] than just using loops this really helps
[08:19] to sell the power and the weight of the
[08:21] ship during large accelerations
[08:31] [Music]
[08:44] now if we enter the atmosphere of damar
[08:46] we'll be able to hear the vibration
[08:47] audio and environment feedback audio
[08:50] components working the vibration all
[08:53] your component works by calculating the
[08:55] physical force acting on the ship at the
[08:57] vibration points that we place these
[08:59] will be after weapons fire impact
[09:01] collisions thruster force explosions and
[09:03] so on but one of the main causes of
[09:05] strain on the ship is atmospheric entry
[09:07] and atmospheric flight so as the drag
[09:10] acting on the ship increases so too does
[09:12] the physical force at these points so
[09:14] they trigger vibration sounds these will
[09:16] be more intense as the atmosphere is
[09:18] slowing us down and we'll settle down as
[09:20] we reach a suitable speed for the
[09:21] atmospheric density
[10:16] so first developers the new systems
[10:19] offer a lot of advantages and it's
[10:22] mainly down to iteration time so it now
[10:25] takes about roughly a minute for the
[10:27] initial audio setup of a new ship which
[10:29] is extremely fast and all the time that
[10:32] we save by that we can just put in two
[10:35] well details right into detail work and
[10:37] focus on the really nice cool things in
[10:39] the game now let's shift gears and check
[10:43] in with a Steve bender for some
[10:46] animation updates
[10:47] take it away bender for animation 2019
[10:52] is not just about putting in new
[10:55] features right 20:19 is a focus on
[10:59] taking the features that we have in game
[11:02] right now polishing them up and making
[11:04] them triple a quality shippable things
[11:07] that are competitive against any other
[11:10] game on the market when we're dealing
[11:12] with future development we often get to
[11:14] a point on on some of these things where
[11:16] it works but it's not it's not really
[11:22] shippable it's something that while you
[11:25] may be able to say pick up a box there's
[11:27] all sorts of bugs with it right glitches
[11:29] things popping moving around and stuff
[11:31] like that and to that extent we have a
[11:35] couple guys who are focusing on closing
[11:37] down those sorts of pickups picking up
[11:39] the boxes how all of the pops and the
[11:43] things that happen right now when you
[11:45] try and do that we're getting rid of all
[11:48] those glitches so that the team can then
[11:50] lock that down and move on to whatever
[11:54] the next important feature is
[11:59] in vaulting and mantling so we want to
[12:02] make sure that the player is able to
[12:04] freely move throughout the level he's
[12:07] able to run you know walk run jump vault
[12:11] over objects jump over evolved objects
[12:14] climb up on them and things like that
[12:16] now with how vaulting has worked before
[12:20] in the game
[12:22] when the character would come towards an
[12:25] object and he would execute a vault if
[12:27] he was too close
[12:28] it would it would kind of work them
[12:30] backwards and then have them go like
[12:31] this where as near vaulting allows us to
[12:35] actually have assets which are related
[12:38] to when he's close enough right so he's
[12:42] not running necessarily towards it but
[12:44] he's close enough and he's going over
[12:46] and the style of those animations is
[12:49] different than this sort of like a
[12:51] sliding style over or something like
[12:54] that ship sequencing is extremely
[12:57] important from both an animation
[13:00] standpoint and an efficiency standpoint
[13:02] so the ship sequencing idea allows us to
[13:06] now create enters exits and the control
[13:10] situations and frees up art to be able
[13:13] to mix and match those so the animation
[13:16] team is working closely with tech art to
[13:19] be able to set these things up to be
[13:21] able to get the enter working smoothly
[13:24] with now he gets into the seat and then
[13:27] from there he chooses which control
[13:29] system he goes to and same thing in the
[13:32] exit as I was playing the game last year
[13:34] and I was talking with a lot of
[13:36] community members we have a lot of
[13:38] community members that are hard of
[13:41] hearing or maybe deaf and they don't
[13:44] interact with with the game in the same
[13:47] way that someone who hears hears voice
[13:49] would do so so we engaged one of our
[13:53] community members to work with us on
[13:56] coming up with a series of emotes for
[14:00] American Sign Language so that our
[14:03] community members who are
[14:06] hearing-impaired can actually interact
[14:09] and roleplay in the world
[14:13] like how they would want to be doing so
[14:14] one of the really neat things that
[14:17] happened this morning is Brian Brewer
[14:18] our animation lead in Austin called me
[14:21] up and said hey you want to see
[14:22] something really cool and I was like all
[14:24] right when he got and he showed me the
[14:27] characters actually playing the American
[14:29] sign language videos and I said you
[14:32] really want to see someone smile you
[14:34] need to send it to one of our developers
[14:37] who's hearing impaired and just you know
[14:40] show him this because we've talked about
[14:42] it I've talked to him about it and he
[14:43] was like super excited about this about
[14:47] this being in the game
[14:48] and sure enough Brian called him and
[14:51] they looked at the video together and he
[14:54] was like I know exactly what this guy is
[14:56] saying so that was I think that was
[14:59] really exciting I'm really happy for the
[15:01] the community to have this opportunity
[15:04] to be able to role play and to express
[15:08] themselves in in the way that they see
[15:12] fit and that perhaps more is is related
[15:17] to them adding the American sign
[15:19] language is pretty awesome and the team
[15:21] wants to add facial animations for emote
[15:23] so those will be really cool when
[15:24] they're complete and that does it for us
[15:26] this week so remember tomorrow's the
[15:27] last day to enter the tumbrill cyclone
[15:29] commercial contest so get your
[15:31] submissions in thanks to our subscribers
[15:33] for sponsoring all our shows and thanks
[15:36] to all of our backers for supporting
[15:37] star citizen's development so until next
[15:40] time we'll see you around the verse
[15:44] [Music]
[15:56] it's like thanks for watching for the
[16:05] latest and greatest in star citizen
[16:06] squadron 42 you can subscribe to our
[16:08] Channel or you can check out some of the
[16:10] other shows and you can also head to our
[16:12] website at www.uvu.edu/library

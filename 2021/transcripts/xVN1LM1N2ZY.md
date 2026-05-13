# Inside Star Citizen: Making Your Reputation | Winter 2021

**Video:** https://www.youtube.com/watch?v=xVN1LM1N2ZY
**Date:** 2021-03-25
**Duration:** 12:30

## Transcript

[00:03] this is without a doubt my favorite
[00:05] system that i've worked on
[00:07] at cig i am so excited to see it getting
[00:10] into the hands of players and
[00:11] into the hands of other developers we
[00:14] felt that
[00:15] because this is such a crucial part of
[00:17] our game that our reputation system had
[00:19] to be much more evolved
[00:21] than that of a traditional mmo i
[00:24] love working on these systems that allow
[00:27] other systems to even happen this is
[00:30] where i feel like
[00:32] the the game that we've been talking
[00:33] about from a reputation
[00:35] and from an immersiveness level can
[00:38] start to happen
[00:39] [Music]
[00:43] the reputation system that will
[00:45] essentially allow us to track
[00:46] values for a player's reputation with
[00:50] an entity and when i say entity that
[00:52] could be an npc
[00:53] an organization heck it could be a table
[00:55] if you want so long as it has a
[00:57] persistent id with it we can track a
[00:59] value against it still alive
[01:01] i think not only can we track a value we
[01:03] can track several values
[01:04] those values are in something that we
[01:05] call a scope when we say
[01:07] scope we're talking about two different
[01:09] things there's affinity which is this
[01:11] kind of
[01:12] measure of how much a entity likes you
[01:14] and that's common across
[01:16] all these entities npcs organizations
[01:18] etc
[01:19] hello a few different things affect
[01:21] affinity it's going to be
[01:23] mostly your mission performance and more
[01:25] specifically actually
[01:26] what you do during that mission that's
[01:28] when affinity will really get big boosts
[01:31] it is also worth noting that we can
[01:32] affect affinity through just your
[01:34] everyday action
[01:36] for organizations affinity is a little
[01:39] bit different
[01:39] in that it kind of represents the
[01:41] amalgamated opinion of that organization
[01:43] and its members towards you
[01:45] it's going to control a lot of things
[01:47] like whether or not they want to attack
[01:48] you or help you
[01:49] for instance and then there's confidence
[01:52] career
[01:53] confidence is exclusive to mission
[01:54] givers and it kind of says how good they
[01:56] think you are at your job
[01:58] career is how an organization might be
[02:01] tracking that same value how good you
[02:03] are at your job the difference with an
[02:04] organization is that they can have
[02:06] several career scopes so a security
[02:09] company like crusader security might
[02:11] have a bounty scope but they also might
[02:12] have a defense scope
[02:14] or a jailer scope or any number of these
[02:16] career scopes
[02:18] that we want to track your different
[02:19] levels of career proficiency with
[02:21] different kinds of game play
[02:24] within scopes we have this concept of
[02:26] standings these are the ranks that you
[02:27] move through from
[02:28] negative whatever to positive whatever
[02:30] and we can tell when we
[02:31] assess you either through the missions
[02:33] or the mission givers or npcs or however
[02:35] they are looking at you
[02:36] what standing you are at one of the
[02:39] things that we
[02:40] are very excited to have is these
[02:42] reputations giving you things when you
[02:44] get to those higher standings
[02:46] the idea is that this is giving you a
[02:49] benefits and rewards
[02:51] for for progressing through the game
[02:52] it's a progression system at its heart
[02:55] the other thing that i'm really excited
[02:57] about with this coming out
[02:59] is the concept of allowing for group
[03:01] building and community building with
[03:03] this by allowing
[03:04] you to bring something unique to your
[03:06] group of friends table
[03:07] you might have a reputation with a
[03:09] certain organization at a high level
[03:11] that your other friends don't and you've
[03:13] maybe done a little bit of extra work to
[03:14] maintain that get that up there
[03:16] etc and as a result you're able to bring
[03:18] in something cool like a mission that
[03:20] normally they wouldn't be able to do
[03:22] plus everybody likes bragging rights we
[03:24] all know that you're going to be putting
[03:25] up
[03:25] screenshots on the subreddit or whatever
[03:28] saying
[03:29] look at all these reputations i have at
[03:30] max look at what i'm able to maintain
[03:32] all that we're darn excited about how
[03:34] that's going to play out potentially
[03:36] [Music]
[03:44] so for this release a lot of our focus
[03:46] is around missions and how that's going
[03:48] to be affecting things like your
[03:49] affinity and confidence but going
[03:51] forward
[03:52] you'll be having actions that affect
[03:53] your reputation of other kinds
[03:56] that's going to be things like a mission
[03:58] giver where you might push them but it
[03:59] also could be like if you shoot at them
[04:01] or if you
[04:02] shove one of their friends or if you
[04:04] talk to them in the wrong way if you
[04:05] choose a
[04:06] bad choice in a conversation tree it
[04:08] could be any number of things
[04:10] um we even have so talked about some fun
[04:12] stuff where like constantine hurston for
[04:14] instance is a bit of a snob you walk in
[04:16] wearing a bad
[04:17] coat or like some weird clothes he might
[04:19] think less of you
[04:20] you can also key it off of things like
[04:22] when you happen to raid
[04:24] a ship that is controlled by maybe
[04:26] crusader security
[04:27] we could key it off of something like
[04:28] you go into the wrong area i mean you
[04:30] just
[04:31] walk into a club where the bouncer
[04:32] doesn't want you to be there
[04:34] we could key it off of you having the
[04:36] wrong decal on your ship
[04:38] or flying in a way that a person doesn't
[04:40] really think that you're flying in a
[04:42] cool way essentially
[04:43] it's very open-ended
[04:46] one of the things that we're really
[04:47] looking forward to is giving flavor to
[04:50] organizations by
[04:51] essentially playing with what they like
[04:53] and don't like so there might be an
[04:55] organization that really likes it when
[04:56] you go around pvp
[04:57] and killing other players there might be
[04:59] organizations that frown on that a
[05:01] little bit
[05:02] there might be organizations that really
[05:04] really like it when you do
[05:05] piracy or smuggling or illegal acts and
[05:08] there might also be some that aren't so
[05:10] okay with that
[05:11] and that feel is going to allow us to
[05:13] bring a lot of the
[05:15] lore that up until now has existed on a
[05:17] website
[05:18] into the game so you guys can actually
[05:20] experience it and get to know these
[05:22] people
[05:23] in the universe and all that brings me
[05:26] to the topic of drift
[05:28] drift is the concept that over time your
[05:30] reputation might move
[05:32] up or down uh based on the mission giver
[05:36] organization essentially
[05:38] moving towards neutral with you now
[05:40] before you all get your
[05:41] torches and pitchforks out the concept
[05:43] here isn't to enforce
[05:44] a horrifying grind or anything like that
[05:46] we do want to reward you for
[05:48] gameplay that you already want to do on
[05:50] your own
[05:51] but we do want to make sure also that
[05:54] these very high
[05:55] ends of reputation are things that take
[05:57] effort to get to and maintain
[06:00] and by doing that we let people sort of
[06:03] be unique and interesting
[06:04] by saying i want to make sure that i
[06:06] keep that one and that one
[06:08] at max and put in that effort and keep
[06:11] people interested in the game in a
[06:13] long-term sense giving them goals that
[06:15] they can keep on setting out
[06:19] so when it comes to you know how big of
[06:22] a
[06:22] change fundamentally is this that this
[06:25] is a massive change for
[06:26] for not just what it means for the game
[06:30] now
[06:30] but where the game is going like all
[06:32] things we'll be putting it out we'll be
[06:34] watching the feedback we'll be seeing
[06:36] what the numbers say we've got analytics
[06:38] all over the place watching what you
[06:40] guys are doing to
[06:41] see if we need to tweak in two numbers
[06:43] it's going to be an ongoing effort
[06:45] uh especially when we get to the concept
[06:48] of going from
[06:49] alpha to out of alpha those numbers are
[06:51] going to continue to shift
[06:53] with that in mind the ability for
[06:55] players to bring something unique to
[06:56] their groups
[06:57] that excites me a lot i love in mmos
[07:01] the the systems that make players want
[07:03] to play with each other that's what
[07:04] makes
[07:04] them better than other games is is that
[07:07] community and
[07:08] bringing that to star citizen to me is
[07:10] one of the most important things that we
[07:11] could do
[07:12] making sure that it builds a strong
[07:14] community that's what's going to bring
[07:16] people back to star citizen over and
[07:17] over and over
[07:19] the reputation system is a turning point
[07:22] moment in the continuing development of
[07:23] the star citizen experience
[07:25] adding consequences and rewards to
[07:28] almost any action or decision you make
[07:31] and allowing for developers to build a
[07:33] sense of true progression
[07:35] as more and more systems plug into it
[07:37] across subsequent releases
[07:39] and speaking of releases alpha 313 is
[07:42] right around the corner
[07:43] so let's take a look at some of the new
[07:44] additions coming to the persistent
[07:46] universe when it arrives
[07:47] in the patch report first up
[07:51] we gotta start with the reputation
[07:53] system we just explored which looks to
[07:55] enhance
[07:55] every feature before it by adding
[07:57] progression and rewards
[07:59] while serving as the ground floor for
[08:00] nearly every feature to come
[08:02] ready to plug in and add advancement in
[08:04] goodies galore
[08:06] to each new aspect as they come online
[08:09] in addition to the reputation system
[08:11] alpha 313 brings with it
[08:13] several expansions and revisions to
[08:15] existing assets and locations
[08:17] beginning with our new drive-in and
[08:19] sinkhole entrances for cave systems
[08:21] providing new opportunities to explore
[08:23] with ground vehicles
[08:24] and spacecraft alike new asteroids
[08:27] created with our refined process for
[08:29] more variety and less potatoey
[08:31] and the same great danger of crashing
[08:33] into
[08:35] [Music]
[08:38] non-commercial overlays for existing
[08:40] refineries designed to bring a more
[08:42] industrialized look
[08:44] while minimizing some of the excessive
[08:45] branding elements currently found on
[08:47] some stations
[08:48] [Music]
[08:50] as well as a wrap up to the polished
[08:51] revisions of every planet and moon in
[08:53] the stanton system
[08:55] work that began several quarters ago
[08:57] improving the overall
[08:58] look and feel of everything from
[09:00] aberdeen to yila
[09:03] there's also new mission types scattered
[09:05] throughout stanton
[09:06] including quantum sensitive and timed
[09:08] multi-drop deliveries
[09:10] similar to those first introduced during
[09:12] our xenothread event
[09:16] multiple additions from the actor
[09:17] feature team like the new stagger force
[09:19] reactions
[09:20] the object push pull trolleys scattered
[09:22] throughout the system
[09:24] and mounted guns they still tell me we
[09:26] can't put on trolleys
[09:28] can't or won't richard tyre there are
[09:31] several new vehicle features coming your
[09:33] way in alpha 313
[09:34] beginning with the long-awaited arrival
[09:36] of docking between the merlin
[09:38] and constellation yes no longer will
[09:41] that ship in the back
[09:42] just be permanently attached to your
[09:43] butt
[09:45] we've all been there right afterwards
[09:47] ship the station docking will roll out
[09:49] in a subsequent 313x patch later this
[09:52] quarter
[09:52] to allow for some additional testing and
[09:54] polish we're trying to avoid scratching
[09:57] the paint on our 890s
[09:59] as much as you are speaking of which the
[10:01] first
[10:02] version of wear and dirt is coming with
[10:04] the new vehicle visual degradation
[10:06] system
[10:07] not only adding our first systemic use
[10:09] of the system but allowing players to
[10:11] finally
[10:11] wash some of their spaceships when they
[10:13] go for repairs
[10:14] [Music]
[10:15] mining ships are getting another layer
[10:17] of customizability with the addition of
[10:19] mining laser sub components
[10:21] allowing players to customize their
[10:22] laser experience to a greater degree
[10:24] than with consumables alone owners of
[10:27] the 600i
[10:28] 890 jump hammerhead reclaimer mercury
[10:32] star runner and anvil carrick will now
[10:34] be able to display their unique ship
[10:36] names for all to see in alpha 313
[10:38] while the feature is expected to roll
[10:40] out to additional ships in subsequent
[10:42] patches
[10:43] the long-awaited sdf shields first
[10:46] introduced with the npc
[10:47] idris and javelin earlier this quarter
[10:49] now expand to all ships in the star
[10:52] citizen universe
[10:53] plugging up shield holes and providing
[10:55] new visual experiences that not only
[10:57] look better
[10:57] but can help with gauging your attack
[10:59] effectiveness as well
[11:01] and finally in vehicle content we've got
[11:03] the new cyclone mt variant scheduled to
[11:06] arrive with alpha 313
[11:08] as well as fan favorites the tumbril
[11:10] nova and hercules starlifter
[11:12] in subsequent 313x patches later this
[11:15] quarter
[11:16] so what did we learn this week well we
[11:18] learned that the reputation system is
[11:20] the next major new addition to the star
[11:22] citizen experience
[11:23] that it aims to add a real sense of
[11:26] progression
[11:27] and genuine impact for your efforts in
[11:29] the persistent universe
[11:31] and that every move you make every bond
[11:34] you break
[11:34] every step you take it'll be watching
[11:37] you
[11:39] the lawyer said i couldn't sing it keep
[11:41] an eye out for alpha 313
[11:43] progress to find out when it moves from
[11:45] ptu to the live environment
[11:47] as well as a new merchandise promotion
[11:49] that's starting soon so save up for that
[11:51] it includes a brand new star citizen
[11:53] shirt that's 100
[11:54] pre-shrunk cotton and as a person whose
[11:57] wardrobe is almost exclusively star
[11:59] citizen shirts at this point
[12:01] this is easily the most comfortable one
[12:03] we've made yet
[12:04] for inside star citizen i'm jared
[12:07] huckabee we'll see you all next week
[12:22] [Music]
[12:29] you

# Star Citizen: Bugsmashers! - Fuel Pipe Dream

**Video:** https://www.youtube.com/watch?v=zF0IrJnR2_0
**Date:** 2018-02-28
**Duration:** 7:01

## Transcript

[00:06] [Music]
[00:16] hi my name is Max hung marked out today
[00:19] so I'm taking over bug Smashers let's
[00:22] get
[00:25] started bug smashes so today we get a
[00:30] fun little bug that lets you generate
[00:32] fuel from your heat exhaust and your
[00:35] power
[00:36] consumption which means we have finally
[00:39] overcome
[00:40] entropy but they don't want it so we got
[00:42] to get rid of it the way the engine uh
[00:46] the way the designers to found out about
[00:49] this that while they were balancing uh
[00:53] uh fuel while they were balancing pipes
[00:57] uh they were balancing the fuel
[00:59] consumption for both all for all the
[01:01] fuel intakes the fuel tanks and the uh
[01:05] the flight controller and they noticed
[01:07] that if they turned everything off and
[01:10] they just idled a ship and just floated
[01:13] there they would be generating
[01:15] fuel so it took a while to dig around
[01:19] here's what we Ed to
[01:21] control uh our pipes system so we have
[01:25] our pipe system that controls how heat
[01:29] is passed around the ship how power is
[01:31] passed around the
[01:32] ship and it turns out that there's this
[01:36] fun little part where you can decide on
[01:41] when a pipe comes online and offline and
[01:43] decide on
[01:45] where they
[01:48] would get
[01:51] connected so the the way that originally
[01:54] was was that it would just connect to
[01:56] every kind of every kind of pipes
[01:59] whatever came online it would
[02:01] immediately connect to and then you
[02:04] would be able to see something like
[02:08] this let me
[02:10] make yeah all right so here we are in
[02:12] the code or in the game I made a special
[02:16] Gladius or I repurposed the old Gladius
[02:20] to show this off so we
[02:25] have C bars I can spell
[02:33] if we burn a little bit of fuel and then
[02:36] we come to an
[02:37] idle you
[02:39] notice come to an idle you notice in the
[02:42] top right we see that numbers are slowly
[02:45] climbing up one unit every couple
[02:48] seconds every other
[02:50] second this is a special Gladius that
[02:53] doesn't have any fuel intake so it
[02:54] shouldn't be generating any fuel at all
[02:56] but here we see it's coming back up slow
[02:59] slowly and slowly and
[03:03] slowly so uh you can see it around this
[03:07] top right
[03:09] Cal
[03:10] so it took a little bit of digging
[03:12] around and we found out that because the
[03:16] way pipes work something was pushing
[03:18] stuff into the fuel pipes and then the
[03:21] fuel these fuel tanks were taking were
[03:24] pulling in that that amount of that
[03:28] amount this this isn't like science
[03:30] class where you have where units are
[03:32] important it's just a number goes in
[03:33] number comes out apparently it's going
[03:35] into the fuel tanks and we du around and
[03:38] found that in both the power and the
[03:41] heat
[03:43] connection power and heat we were
[03:46] connecting to any kind of pipes because
[03:49] there's no specific part where it says
[03:51] oh this is a heat pipe or a fuel pipe or
[03:54] whatever and so all we had to do was put
[03:58] in these checks to make sure that we're
[04:01] connecting to a power pipe
[04:04] and if we combine
[04:07] that we stop the game combine that we do
[04:12] it over here as well uh what is this
[04:15] power uh entity
[04:23] component we do it here as
[04:26] well on pipe connect
[04:30] we do
[04:32] if and I already
[04:35] forgot hpe
[04:44] class if we do
[04:47] that compile the
[04:49] code this will make sure that our heat
[04:52] connection will only connect to the heat
[04:55] pipes and our power connection only
[04:59] connect to the power pipes so now it
[05:01] won't be Rand so now these connections
[05:04] won't be randomly pushing in values
[05:07] everywhere and breaking the laws of
[05:10] physics now that it's done compiling we
[05:13] bring up our same level with the same
[05:19] Gladius now remember that this is the
[05:22] special Gladius that doesn't have any
[05:23] fuel
[05:24] intakes so we just pipes turn on pipes
[05:31] turn on the
[05:33] name sh and notice that if we fly around
[05:37] you can even
[05:39] tell right now that you can see the
[05:42] number is steadily going down I only
[05:45] took out the fuel intakes but while the
[05:48] plane is in Flight it'll idle putting it
[05:52] in idle will keep it burning fuel
[05:55] so now that we're in Idol and just
[05:57] floating here it's burning fuel like
[05:59] it's supposed to to and now the Heat and
[06:02] the power are no longer contributing to
[06:04] your fuel intakes and so we have our
[06:07] disappointing conclusion where we where
[06:09] we have to follow the laws of physics we
[06:11] can't just generate fuel from Heats and
[06:14] pipe we we have to have them contribute
[06:19] uh we have to have them push their
[06:20] resources to their proper pipes and not
[06:22] just to all them which and prevent you
[06:25] from getting free fuel just by flying
[06:27] your ship so next time Mark may or may
[06:30] not be back we'll see what happens next
[06:33] time this is Max hung thanks for joining
[06:36] me for bug Smashers thank you for
[06:38] watching so if you want to keep it with
[06:40] the latest and greatest in Star Citizen
[06:41] of Squadron 42's development please
[06:43] follow us on our social media channels
[06:45] see you soon

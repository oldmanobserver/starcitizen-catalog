# Inside Star Citizen: Dock of the Bay | Winter 2021

**Video:** https://www.youtube.com/watch?v=8nyYrwMK0M8
**Date:** 2021-02-11
**Duration:** 12:51

## Transcript

[00:04] [Music]
[00:07] we took a lot of inspiration from
[00:09] sort of real life docking uis and
[00:11] procedures
[00:12] and we distilled it down into what was
[00:14] really important
[00:18] the process as a whole feels very
[00:20] satisfying to go through
[00:23] [Music]
[00:26] docking is actually an easier experience
[00:28] than we thought it would be because of
[00:30] how useful the ui is in explaining what
[00:32] you need to do
[00:33] [Music]
[00:36] without implementation as we have it
[00:38] right now you would target like
[00:40] what you're wanting to dock with so with
[00:42] this case of a ship to ship it's you're
[00:44] targeting
[00:44] the constellation making the merlin
[00:46] attached to the connie has been
[00:48] an interesting challenge of tech that
[00:51] we've put in
[00:52] we've kind of pushed forward the physics
[00:54] grid tech we're one of the first
[00:56] features
[00:57] to use the new ability for us to connect
[00:59] two physics grids together
[01:01] which is a feature that had been in
[01:03] development in sort of
[01:04] lower level engine tech for quite some
[01:05] time but we're testing that on a real
[01:08] gameplay feature
[01:09] we've made a new air lock that lets you
[01:11] properly air lock
[01:12] at the back of the constellation when
[01:14] you're going through and opening the
[01:16] little
[01:16] doors underneath the constellation
[01:21] we've also worked a lot on the sort of
[01:23] transition
[01:24] between the two ships of getting out of
[01:26] the merlin getting back in making that
[01:28] experience really smooth
[01:30] let's say we're starting from you've
[01:32] gone out down to a planet on your merlin
[01:35] and you've decided that you're gonna
[01:37] come back up and start docking again
[01:38] you will target as if you were targeting
[01:41] until fire on your ship
[01:42] but instead of attacking it you press
[01:45] for now we have it set to a key
[01:46] which currently is the same as the
[01:48] landing key that
[01:50] will essentially send a request to your
[01:52] ship at which point your docking doors
[01:54] will start opening and you'll get some
[01:56] fancy little hud coming up of your
[01:59] docking alignment
[02:02] you have two options um you have an
[02:04] automatic mode and a manual mode
[02:06] the landing button is what you would use
[02:07] to dock but if you hold it down similar
[02:09] to auto landing you can get an auto dock
[02:11] feature
[02:12] which will fly your ship up and then
[02:14] connect it for you
[02:16] it's much quicker and i guess more
[02:17] satisfying to use the manual docking
[02:20] which you'll have to align all the
[02:21] values yourself and so we've made this
[02:23] thing where there's like a ring
[02:25] that shows you how aligned you are so it
[02:28] has these three little dots one around
[02:30] the outside of the ring and then
[02:32] two in the middle and then as you like
[02:33] align your merlin with the back of the
[02:35] constellation
[02:36] these dots will line up in the center
[02:38] and then you know that you've then
[02:39] aligned your ship
[02:40] and then there's a little box that you
[02:42] as you move your merlin around relative
[02:44] to the constellation this little box
[02:45] moves around and the goal is to get the
[02:47] box
[02:47] in the center and that's when you know
[02:49] that you are like pretty much matched up
[02:51] exactly in the right place
[02:52] you'll be able to get out and be
[02:54] straight into your constellation
[02:56] if you don't own the constellation it's
[02:58] a little bit different if you're trying
[02:59] to dock with a constellation that's not
[03:01] yours
[03:02] then the owner of the constellation will
[03:03] get a message saying
[03:05] hey dave's trying to dock with your
[03:08] constellation are you okay with that
[03:09] if you press no then they'll get turned
[03:11] away if you press yes then
[03:14] the docking or doors on the
[03:15] constellation will open and then you're
[03:17] free to to go and dock
[03:22] an exciting part of this uh is that this
[03:24] will be the first version of ship in
[03:26] ship spawning that we release
[03:28] so when you go to your asap menu in the
[03:31] station spawn a constellation
[03:33] and you have set that on the docking
[03:35] port
[03:36] you have a merlin there you can set that
[03:37] in your vma on your in your moby glass
[03:40] and if that is set then when you spawn
[03:42] the constellation
[03:43] there will be a berlin there and equally
[03:44] if you unattach
[03:47] or remove it from the docking port in
[03:50] your vma
[03:51] and then despawn your constellation and
[03:52] spawn back again it won't be there
[03:54] we don't quite know when we will expand
[03:56] this to
[03:57] other ship and ship spawning situations
[04:00] but
[04:01] i'm pretty confident that this is a good
[04:03] first step in this direction
[04:05] and certainly going forward it's going
[04:06] to be easier and easier for us to do
[04:08] this kind of thing
[04:11] ship to station knocking is quite a
[04:14] different
[04:14] process to consolation of merlin docking
[04:16] but we've tried to keep it as similar
[04:18] and consistent as possible
[04:19] the first two ships that have ship
[04:22] station docking will be the hammer head
[04:24] and the 890 with the case of ship to
[04:27] station
[04:28] you're targeting the entire station as a
[04:30] whole if
[04:31] you have the right docking ports and you
[04:34] have permission to dock then
[04:35] it'll kind of search for the docking
[04:37] ports that it has
[04:38] and if it has docking ports free of like
[04:40] the right size it'll begin the docking
[04:42] process
[04:43] and very similar to ship to ship docking
[04:46] it'll be a nice little head showing up
[04:51] once you are accepted docking permission
[04:54] you'll see this arm animating out
[04:56] to reach some point and you will be
[04:58] guided to the point where the arm will
[05:00] be when it's finished its animation
[05:02] so if you manage to maneuver in place
[05:04] before the arm finishes this animation
[05:06] then it will just animate and connect
[05:07] otherwise um it'll be there and then you
[05:10] can you can fly up and connect to it
[05:12] and once that's happened you're pretty
[05:13] much then joined with the
[05:15] station and you can walk out of your
[05:16] ship open your doors
[05:18] walk through the docking arm into the
[05:20] little lobby area that we built
[05:25] [Music]
[05:29] we've got a docking port relative mode
[05:32] that will basically let you kind of
[05:34] change view
[05:36] so that you're like looking as if you
[05:37] were looking out through the docking
[05:38] port
[05:39] um and we'll also change the control
[05:42] scheme as well
[05:43] so that if you're trying to align and
[05:45] you find it difficult to do it by
[05:46] looking through the cockpit
[05:48] you can do it by looking through the
[05:50] docking port
[05:51] we've been really trying to make the
[05:53] experience pleasant for the players
[05:55] i think long term we would really like
[05:57] it if there's some kind of like docking
[05:59] management mfd screen
[06:01] in your ship so you know if you're in
[06:03] the hammerhead there's like a little
[06:05] terminal where you can
[06:06] pick the docking port that you want to
[06:08] attach to on your ship
[06:10] and similarly you'll make requests to
[06:12] the air traffic control to
[06:13] dock on on the station i'm just pleased
[06:16] with
[06:17] how smooth it can feel analogy i'd use i
[06:20] guess would be like
[06:21] doing a really good parking job this
[06:23] feels really similar in that moment when
[06:24] you kind of align
[06:25] perfectly and the square goes green and
[06:28] all of the little
[06:29] indicators are telling you that you've
[06:30] done a good job it's just really
[06:32] satisfying
[06:35] when the first version of docking comes
[06:37] online in the upcoming alpha 313
[06:39] it'll be an exciting next step in
[06:41] realizing the full potential of some of
[06:43] star citizen's largest
[06:44] and smallest spacecraft alike but up
[06:47] next
[06:48] what do space plants explosives tapioca
[06:51] dumplings and government finds all have
[06:53] in common
[06:54] well would you believe they're all a
[06:55] part of this week's sprint report they
[06:57] are
[06:57] let's get to it to start things off this
[07:00] week
[07:01] let's jump into the terrestrial depths
[07:03] of caves
[07:04] as members of the planet content team
[07:06] continue to explore
[07:08] new and varied caverns and entrances
[07:10] suited to ground vehicles
[07:12] and spacecraft alike what you're seeing
[07:15] here
[07:15] are early designer experimentations used
[07:18] like concepts are for anything else
[07:20] now these traversable concepts are made
[07:22] using incredibly rough
[07:24] debug art and are presented to directors
[07:26] in this rough
[07:27] early state so that everyone involved
[07:30] can determine
[07:31] which direction is best to take further
[07:33] visual development in
[07:35] the focus of this sprint was to explore
[07:37] new traversal options for ground
[07:39] vehicles like the grey cat rock
[07:41] now these new options are necessary
[07:43] because designers want to add a variety
[07:45] of new mission and mining opportunities
[07:47] for players exclusively with dedicated
[07:49] craft
[07:50] way down in the subterranean depths of
[07:53] stanton's planets and moons
[07:55] they're also exploring creative
[07:56] traversal options for spacecraft
[07:58] where skilled pilots will need to
[08:00] navigate their ships carefully
[08:02] through the claustrophobic terrain to
[08:03] deliver themselves
[08:05] to some of star citizen's most difficult
[08:07] to reach prizes
[08:09] now as you might imagine it's really
[08:10] important to explore these extreme ideas
[08:13] and determine which ones are suitable to
[08:15] take forward through development
[08:16] in this early debug state seen here this
[08:19] is so that artists
[08:20] don't end up wasting their time bringing
[08:22] something to a final look
[08:24] that ends up being impossible for
[08:26] players to actually discover
[08:28] and we'll check in again on these
[08:29] exciting upcoming additions to caves in
[08:32] the coming weeks
[08:34] now while those folks are working on
[08:36] caves other members of the planet
[08:38] content team recently completed a sprint
[08:41] developing some of the new harvestables
[08:43] to be found in the upcoming pyro system
[08:46] like this
[08:47] fotea scrub a plant that actually relies
[08:50] on solar flares that would otherwise
[08:52] char the planet's surface for its
[08:54] reproduction
[08:56] and the pangala a unique plant of its
[08:58] own where nearly every aspect of it
[09:00] follows the golden ratio as it grows
[09:03] which ends up making it highly sought
[09:05] after by plant collectors wanting to
[09:07] cultivate them
[09:09] and with the final concepts approved the
[09:11] next step is to move into production
[09:13] so that one day these two will find
[09:15] themselves dotting the landscapes of
[09:17] pyro's planets and moons
[09:20] for those who remember calyx's look at
[09:22] the interaction zoo last year
[09:23] the weapons content team just completed
[09:26] an art pass
[09:27] on bringing the shaped charge device
[09:29] from bearing to life
[09:30] a tool to be used for the breaching of
[09:32] locked doors
[09:33] in both the persistent universe and
[09:35] squadron 42
[09:39] returning to the world of logos several
[09:42] new brands were recently introduced for
[09:44] review by directors
[09:45] including tip top the bite-sized tapioca
[09:48] wrapped dumplings from tara mills
[09:51] fish ringers the deep fried fish
[09:54] ring that started life as a popular
[09:56] beach snack in a converted donut shop on
[09:59] the planet cassell
[10:00] and pyrotechnic amalgamated the now
[10:03] defunct mining company responsible for
[10:05] the original discovery of the pyro
[10:07] system
[10:08] and the abandonment of ruin station as
[10:11] for which ones will make their way into
[10:12] the persistent universe
[10:13] well we'll all just have to wait and see
[10:17] as work on the colonialism style
[10:19] homesteads continues
[10:21] the props team hungry to join the fight
[10:24] has jumped in with a variety of
[10:25] food-related items
[10:27] designed to populate one of the
[10:28] principal social areas found within
[10:31] now social areas like this will be
[10:33] essential to making the npc settlements
[10:35] found throughout the persistent universe
[10:37] feel simultaneously alive and lived in
[10:40] while also serving as potential mission
[10:42] hubs drop-off points
[10:44] and general meeting areas for players
[10:47] and lest you think
[10:48] food is the only thing on the props
[10:49] teams minds they also broke out into the
[10:52] world of chairs
[10:56] tables
[10:59] lights
[11:04] control panels
[11:08] plants
[11:12] shelves
[11:16] and more
[11:22] but outside of homesteads the props team
[11:24] took an early sprint looking at ways to
[11:26] revamp some of the kiosks
[11:28] found throughout the stanton system with
[11:30] a specific look at these official
[11:32] fine kiosks from the office of imperial
[11:35] justice
[11:36] sure paying your due to the man isn't
[11:38] the most fun thing in the world
[11:40] but it doesn't mean you can't look
[11:41] better while you do it
[11:43] [Music]
[11:45] and finally we have a very quick look at
[11:47] one potential layout for the currently
[11:49] unnamed reputation manager app
[11:51] for moby glass with the first iteration
[11:54] of reputation going out recently in 312
[11:56] this early exploration is an exciting
[11:59] next step in the development of this
[12:00] long-awaited feature
[12:02] from the uspu gameplay feature team
[12:05] so what did we learn this week well we
[12:07] learned that in the upcoming alpha 313
[12:09] one of star citizen's oldest dreams will
[12:11] become a reality with the addition of
[12:13] docking to the persistent universe
[12:15] that coming up there's going to be new
[12:17] ways to explore even newer caves beneath
[12:19] stanton's surfaces
[12:22] and that fish rings are a thing i'm
[12:24] gonna go ahead and blame will weisbaum
[12:26] for that
[12:27] for inside star citizen i'm jared
[12:29] huckabee we'll see you next week
[12:43] [Music]
[12:50] you

# Inside Star Citizen: AI On the Move | Winter 2022

**Video:** https://www.youtube.com/watch?v=P3sXyeuScN8
**Date:** 2022-02-17
**Duration:** 8:08

## Transcript

[00:05] the dna system is already pretty
[00:06] sophisticated
[00:08] it allows us to edit our characters
[00:11] heads in a very smart way
[00:14] but the quality of the asset is not a
[00:15] standard
[00:17] we are improving editability so that we
[00:19] are more free to extend our range of
[00:22] character heads
[00:28] what we try to do because we can't
[00:29] currently scan in more people and we did
[00:32] want to raise the amount of variation in
[00:34] the texture pool
[00:36] is we tried to combine different
[00:38] textures together we would take the
[00:40] forehead wrinkles of one person and
[00:43] combine that with the mouth of another
[00:45] person to sort of create a more unique
[00:48] result in the end
[00:52] right now the good thing about about
[00:54] this this new implementation is that we
[00:57] have a wider range of heads and a wider
[00:59] range of ethnicities that we can select
[01:03] [Music]
[01:05] we also adjusted the previous texture
[01:08] set and the shading of the previously
[01:10] created heads they are much more
[01:11] believable they are also sharper in
[01:13] details
[01:19] the eye textures they were quite bright
[01:21] beforehand
[01:22] you could really see like the striations
[01:24] in the irises
[01:26] we kind of wanted to get a base
[01:29] set of textures that looked a bit more
[01:31] realistic
[01:35] the new eye it is
[01:36] including a new eye wetness that is
[01:39] gonna create a better blending between
[01:42] the eyeball and the head and the eyelids
[01:44] nearby it giving the highlight a more
[01:47] realistic reflection
[01:52] the way that it reacts to light it
[01:54] creates a way of transitioning of the
[01:56] light over the eyeball that is more
[01:58] believable
[02:01] also we have been working on a first
[02:03] layer of variety for the eyebrows the
[02:06] eyebrows they are gonna be together with
[02:08] the eyelashes a new layer of
[02:10] characterization for our heads
[02:16] all together it is a significant
[02:17] improvement and it all goes in a pool
[02:20] where every feature is actually
[02:22] swappable one from another giving you
[02:24] the possibility to characterize your
[02:25] character even more in depth
[02:26] [Music]
[02:30] looking at the future there's plenty of
[02:32] features that we will want to improve
[02:33] even more and some even replace from
[02:35] what they are right now so after 3 17 we
[02:38] will commit to inflate the amount of
[02:41] hairstyle that we have right now and so
[02:44] many other details like freckles molds
[02:47] scars and even the makeup may be
[02:49] something that we will want to
[02:51] adapt as a separate layer of complexity
[02:53] so that you may reach out an even more
[02:56] complex level of characterization for
[02:59] your own avatar
[03:00] the star citizen character creator is at
[03:03] the center of your ability to express
[03:05] yourself in the persistent universe and
[03:07] these updates that are coming in alpha
[03:09] 317 are just the next step in allowing
[03:12] everyone to one day create an avatar
[03:15] that is truly representative of the
[03:16] player underneath and up next we move
[03:19] from the human controlled to the ai
[03:22] operated with an update on planetary
[03:24] navmesh the technology that looks to
[03:27] unlock npcs from their static locations
[03:30] and allow them to travel service side in
[03:32] much the same way you do
[03:36] what we currently have easter season is
[03:39] a lot of really cool environment but
[03:41] pretty much no ai
[03:45] we want to make the world alive and
[03:47] reactive to the player
[03:51] what we are building right now is the
[03:52] planetary navigation tech that is an
[03:54] extension of our current system to be
[03:56] able to have ai finally on the planets
[04:01] we planted the navigation mesh at this
[04:03] stage we are
[04:05] at what we call phase zero the
[04:08] engineering phase
[04:10] we are moving from a flat structure on
[04:12] the navigation mesh where we assume that
[04:14] the environment is flat
[04:16] and now we are converting the
[04:18] information that we have about our
[04:19] navigation mesh style into a curved
[04:21] environment
[04:23] we have this
[04:25] generation process of the tile we have
[04:27] the
[04:29] the connection of the pile generated
[04:31] connecting it with the other tiles
[04:33] existing in a planetary navigation mesh
[04:36] and also improvements on the pathfinder
[04:38] to be able to use all those tiles
[04:42] so what the i-system does is it gets
[04:44] this information from physics so it gets
[04:47] told when specific patch are built and
[04:49] created and then we use this information
[04:52] from physics to actually generate a very
[04:54] detailed mesh on the planet
[04:58] and we try to generate it around the
[05:00] action that happens so if the player
[05:02] lands in a location and ai are around
[05:05] then of course we try to prioritize that
[05:07] part to give us the information that we
[05:10] require to actually make the gameplay
[05:12] happening
[05:16] we are doing this dynamically because
[05:19] our planets are too big and
[05:22] at this moment we there is no power and
[05:24] even memory enough to do this statically
[05:28] at the export time and to have all this
[05:30] information to read and to use it
[05:37] the result is basically that
[05:39] you are going to see npcs walking on the
[05:42] train surface being able to follow you
[05:45] because you hired them or because you
[05:48] some of them entered in combat with you
[05:53] in the future of star citizen
[05:55] what people will experience is an alive
[05:57] world where npcs can actually roam
[06:00] across a planet more freely between
[06:03] structures and very natural environment
[06:07] where the environment is filled with
[06:08] fauna and animals that can actually move
[06:11] and you know use information of the
[06:13] environment like feed out of the
[06:15] environment or you know drink water from
[06:18] a river and this will really be a game
[06:21] changer because it will really make
[06:23] players experience that upward that is
[06:24] alive and not just an environment that
[06:27] they need to explore
[06:29] so for when it's coming this is still in
[06:31] discussion but the door right now is
[06:33] open for
[06:35] possibly 318 319 release of the first
[06:38] missions that might use this technology
[06:41] and you know i'm really looking forward
[06:42] for people to play
[06:46] so what we learned this week well we
[06:47] learned that new textures eyebrows and
[06:50] eye tech are coming to the character
[06:51] creator in alpha 317
[06:54] that beyond this is a continuing effort
[06:56] to improve multicultural representation
[06:59] across subsequent patches
[07:01] and that the work to enable npcs that
[07:04] can give chase across the 360 degree
[07:07] surface of any planet or moon is well
[07:09] underway now don't forget there's a new
[07:12] free fly event starting today
[07:15] jump jumptown and ninetales dynamic
[07:16] events will begin again at any moment
[07:19] and the referral program has a new
[07:21] lodestone variant of the popular artemix
[07:23] armor that awards to both the referrer
[07:26] and referee
[07:29] referee
[07:31] referee
[07:34] i'm really good at shilling things
[07:37] now the armor is a limited time addition
[07:39] to the referral program so check out the
[07:41] robertsspaceindustries.com website to
[07:43] learn more for inside star citizen i'm
[07:45] jared huckaby we'll see you all next
[07:47] week
[08:08] you

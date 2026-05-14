# CitizenCon 2948 - Panel: The Art of Digital Illusion

**Video:** https://www.youtube.com/watch?v=9-u2-xdq6eo
**Date:** 2018-11-01
**Duration:** 17:32

## Transcript

[00:02] okay thank you all for coming thank you
[00:05] all for watching today and in the future
[00:07] online apparently my talk is called the
[00:11] art of digital illusion although all
[00:14] that means is about VFX so to begin my
[00:18] story we have to go back in time to
[00:20] March of 2017
[00:22] or the first version of our brand new
[00:25] GPU particle system was submitted and
[00:28] you might be wondering what's so
[00:29] important about GP particle system
[00:31] well key difference here is a speed the
[00:35] past we only have CPU port system and it
[00:38] was kind of fine we still reuse it but
[00:40] to understand why it's so important to
[00:47] have a GPU port system we have to look
[00:49] at costs involved in any Oracle system
[00:53] out there so there are two types of
[00:59] costs rendering costs an update cost and
[01:04] rendering cost is basically what you pay
[01:06] for displaying particles on your screen
[01:09] so the more particles you have the
[01:11] higher the cost is the more complex
[01:13] lighting calculation is the higher the
[01:15] cost is but truth being told it doesn't
[01:18] really matter if your particle system is
[01:19] running on their CPU or GPU the cost
[01:22] here is roughly the same then we have
[01:25] another cost which is more important the
[01:27] abra cost and here you paying for
[01:29] figuring out where particles should go
[01:32] like how do they move when did they move
[01:34] even if you're paying for figuring out
[01:36] that particle does not move and the
[01:39] point here is that CP is really good at
[01:41] doing like gameplay code so every single
[01:43] frame kind of can do different section
[01:46] of the code that's why we do gameplay on
[01:48] it then we we have GPU which is your
[01:50] graphics card and that's really good at
[01:52] doing the same code over and over again
[01:54] and the particle system itself is like a
[01:56] one huge block of code so basically what
[02:00] you need to understand it's so much
[02:01] faster and here we can take a look at
[02:06] some numbers I've taken from old
[02:08] CPU particle system effects
[02:11] and your typical spark effect had
[02:13] anything like 15 30 particles that find
[02:17] but not too many then your typical
[02:20] spaceship explosion had like 20 50
[02:24] debris pieces that's well Wow then you
[02:27] got smoke trails for free maybe one an
[02:31] each small trail has you know particles
[02:34] along so it's roughly about 30 parts per
[02:37] smoke trail and if we take a look at the
[02:40] numbers on the GPU particle system the
[02:42] new one it's actually much higher like
[02:45] these numbers actually taken from actual
[02:48] effects in game so spark effect is now
[02:51] anything between 100 to 300 your
[02:54] spaceship explosion can have like 2000
[02:56] degree pieces you can have like 40 smoke
[02:59] trails and what's funny about these
[03:02] numbers is that we can go higher on some
[03:04] of the effects but it too much we don't
[03:06] want to do it on the CP we just couldn't
[03:08] get high enough you know so it's kind of
[03:10] like the opposite we had too many and to
[03:15] put sorry that's a different slide yes
[03:20] so be the first effect that we ever made
[03:23] with the new particle system was kind of
[03:26] an exciting basically engine trails but
[03:31] these are the most complex colorful
[03:32] lines I ever worked on we had to try few
[03:37] different actual you know tech
[03:40] implementations to do just v's but it
[03:43] wasn't quite fast enough like after a
[03:46] few months of work we made this new
[03:49] particle system and only then we do
[03:53] engine trails though that's why it took
[03:55] so long like we had them I think like
[03:57] 2012 when we had like one vehicle on
[03:59] screen then we have to take them out it
[04:02] was just too slow so a single trail can
[04:08] have like 2,000 particles and the true
[04:10] being told it cannot optimize anything
[04:13] here if you go too low on the particle
[04:16] count kind of looks like that that's
[04:20] probably not what you want and we tried
[04:23] doing so
[04:24] on the CPU particle system the old one
[04:27] and we killed the game with just two
[04:31] engine trails on screen and probably I
[04:34] don't have to remind you that this game
[04:35] has more than one vehicle on screen so
[04:38] that wasn't really a good option so
[04:44] another type of effect that greatly
[04:47] benefits from this new particle system
[04:50] is your explosion and the thing about
[04:53] explosions is that has so many elements
[04:55] like you know fire debris Sparks and so
[04:58] on and if you go to Long Count it just
[05:01] doesn't feel right it's not chaotic
[05:02] enough you need that kind of you know
[05:04] additional stuff on screen yeah and you
[05:13] may think that I'm just talking about
[05:15] like quantity all the time
[05:17] but in world of VFX quantity is a form
[05:22] of quality so let's take a look at
[05:27] reclaimers explosion first it's gonna be
[05:30] an explosion without all the GPU power
[05:32] system elements it's probably fine but
[05:35] once we turn them on you'll see how more
[05:40] elements you have on screen like it
[05:42] suddenly feels more defined that feels
[05:45] more complete and we compare both at the
[05:49] same time you'll notice that for me just
[05:56] looks better hopefully it looks better
[05:58] for you too and the thing about GPU
[06:03] particle system is that it's not only
[06:05] about amount it's also about cool motion
[06:10] so we implemented so-called Carroll
[06:15] noise and in computer graphics noises
[06:19] are types of algorithms that are
[06:22] producing either images or data and
[06:25] Carroll noise is a type of noise can you
[06:29] hear me cool awesome so yeah I heard
[06:32] some noises I'm talking about noise
[06:35] heard noise
[06:37] yeah and curlies is actually producing
[06:40] data that we can apply to particles on
[06:43] the GPU and push them along and it looks
[06:46] like that
[06:47] that's Carlos applied to particles I
[06:49] also applied some color to make it more
[06:52] you know readable and the Croy's is a
[06:55] free denoise basically 40 but 40 means
[06:58] is free d but it's changing over time
[07:01] that's why we can have these worlds
[07:03] because the noise is changing it's
[07:05] adjustable so it gives us a lot of
[07:07] flexibility to work on and it's just
[07:10] cool so with one effect that would be
[07:13] impossible to make without the kernel
[07:15] noise SJ chantek quantum drive fact if
[07:19] we take a look at that it's without all
[07:21] the GPU elements it's fine lines and
[07:24] such these kind of tentacles they are
[07:27] entirely made on the GPU particle system
[07:29] it's about like 30000 particles it's
[07:32] just absurd the number just silly and
[07:34] then we have krill noise on top and it's
[07:36] giving that wavy motion which is pretty
[07:38] cool I think so again without anything
[07:41] with Carrell noise and GPU particles 16
[07:44] secondary element of this effect but
[07:46] doesn't feel right without it sink
[07:49] complete so another element another
[07:53] feature that we have our forces and
[07:56] basically we have two types of forces
[07:58] vector fields and signed distance fields
[08:00] and vector field is kind of like
[08:04] snapshot of wind you can bake it in your
[08:08] fede up bring back to the engine and
[08:10] that's head of pushing particles around
[08:13] but there is another one signed distance
[08:15] field it's kind of complex but the point
[08:18] is with signed distance fields you can
[08:21] produce artificial gravity so you can
[08:23] kind of pull and repel particles that's
[08:28] how texture or vector view looks like
[08:30] and that's signed distance field it's
[08:35] too long to explain today but it looks
[08:39] different all you need to know today
[08:42] so the actual effect that's using signed
[08:46] distance field is reclaimers gravity
[08:48] sphere here you can see all these sparks
[08:51] they are actually attracted by gravity
[08:53] that we have in this area so they kind
[08:57] of are coming to the surface you know
[08:59] it's selling that impression of gravity
[09:00] without signed distance field it would
[09:02] be so complicated to do it I don't even
[09:04] know if it would be possible and then
[09:07] because we can animate the whole thing
[09:08] in time we can do like gravity repelling
[09:11] so it's kind of bringing the sensation
[09:13] of instability and it's actually good
[09:15] because that comes from the emergency
[09:17] State and I hope you notice because that
[09:19] there has some fire okay so now comes
[09:24] the second part of this talk which is me
[09:27] layering up hammerheads cargo room and
[09:30] there's also emergency stay the effects
[09:34] so at the beginning we're gonna take a
[09:36] look at the room itself it already has
[09:38] some volumetric fog applied and some
[09:40] animated lights
[09:41] so for VFX artists it's kind of giving
[09:44] the impression of like what we should do
[09:46] next what we should do about this room
[09:49] but there's not much happening here we
[09:51] have these generators over there with
[09:53] flashing lights so we probably want to
[09:55] do something about it
[09:56] some machinery here and there so there
[09:58] is plenty of elements that we can play
[10:00] around with so the first thing usually
[10:04] we are adding obvious stuff so we're
[10:07] gonna do some smoke and steam here you
[10:09] can see all the steam added and it's
[10:11] actually using the CPU particle system
[10:13] it's not too bad still and it's it has
[10:16] better lighting calculations than the
[10:19] GPU one it's just because we didn't
[10:21] implement it yet on the GPU so we
[10:23] probably want to switch all the effects
[10:25] to the GPU because so much faster and
[10:28] yeah we can use the volumetric fog to
[10:32] define word all the steam should go to
[10:35] kind of you know and reach the overall
[10:38] feeling of the room next step probably
[10:41] want to add some fire
[10:43] guess what why not and because we have
[10:45] all the imaginary intact we can just
[10:48] destroy it by adding that and to me it
[10:51] just you know suddenly feel like there's
[10:54] probably some oil inside or
[10:56] the only thing that that's flammable
[10:57] there is some steam coming out of it
[10:59] there is some fire
[11:00] so some we can kind of feel that it's an
[11:03] actual piece that's doing something and
[11:05] we are not putting fire everywhere this
[11:06] doesn't make any sense can only putting
[11:08] that on top of machinery that could
[11:10] actually emit fire because something's
[11:12] burning next step sparks because all the
[11:16] effects do need sparks and that's
[11:18] something I mentioned before we can do
[11:20] like a hundred or 300 particles in your
[11:23] spark effect we are actually doing so in
[11:25] the past we had like I had no 10 look
[11:28] fine but not not too awesome really so
[11:32] that's actually better like with the GPU
[11:33] we can really unpop the count and that
[11:36] the fact of sparks falling down the
[11:37] ceiling try that on CPU here is before
[11:40] didn't work like kill the game entirely
[11:42] but fine but you know you don't want to
[11:45] play with 2 frames per second because I
[11:46] wanted to do some sparks in the game but
[11:51] we also have like tiny features that
[11:53] actually I like it like collisions on
[11:56] the CPU we can do collisions with the
[11:58] environment but it's so expensive we are
[12:00] literally turning it down so you can
[12:02] have like 5 particles colliding with
[12:04] anything on the GPU it's so cool that
[12:06] you can sample the death buffer or the
[12:08] game you have it already and it's super
[12:10] cheap to do collisions like that without
[12:12] collisions and that's without collisions
[12:14] on so you can see that bouncing off the
[12:16] surface and it comes literally for free
[12:18] the drawback is it's only colliding with
[12:20] stuff that is on screen but then again
[12:24] if it's not on screen then you don't see
[12:25] it so we don't have to collide so it's
[12:27] not really a big deal so let's take a
[12:31] look at what we have so far that was the
[12:33] empty room we had when we added some
[12:35] steam we added some fire
[12:36] we added some sparks suddenly kind of
[12:38] feels better but we want more that
[12:40] that's not enough so these turbines they
[12:45] definitely do need something and I've
[12:47] seen a movie in 1999 I think and had
[12:50] some like a space pod facing I think
[12:53] they were kind of Turing to turn them on
[12:55] and off that kind of resembles me of
[12:58] that so definitely should use some kind
[13:01] of spark coming out of these kind of
[13:03] fans it looks better and then again is
[13:06] bringing that fiction of machinery like
[13:08] these turbines I want to
[13:09] you imagine how it would look like how
[13:12] does this machine work how it would look
[13:14] like when it's destroyed that's kind of
[13:16] bringing that sensation I think and next
[13:19] thing vector fields I mentioned them
[13:21] haven't shown them really it's a
[13:23] snapshot of wind so that's without it
[13:25] and that's with vector fields on so the
[13:28] idea is that these energy cores are
[13:30] generating heat because they were
[13:31] damaged and if there's heat the air
[13:34] moves around and if it moves around
[13:36] probably should push all these parks all
[13:38] this stuff around so what we can do is
[13:41] that we can take the whole scenery back
[13:43] to the PDF do like a fluid simulation
[13:47] save all the movement into a texture
[13:50] bring it back to the engine and it's
[13:52] kind of pushing them it's like an
[13:55] artificial artificial Windham next step
[14:01] is drinking water and adding some energy
[14:04] on top so once we have all the wind it's
[14:08] kind of silly not to use it so to sell
[14:11] the sensation of wind moving around we
[14:14] should just add more particles and then
[14:16] get all the swirls and what I mentioned
[14:19] is that we are taking the whole scenery
[14:21] back to the 3d app and we're kind of
[14:23] simulating air movement around all the
[14:25] objects so all that motion it's it's
[14:29] actually these particles are avoiding
[14:31] all the obstacles if there is like a
[14:32] like a pillar over here the air would
[14:35] wrap around and we actually simulate
[14:37] that and free the app takes forever but
[14:39] in the engine once we save it takes no
[14:42] time to actually you know do that type
[14:44] of stuff the thing it brings that
[14:46] natural sense of motion and such a thing
[14:49] is making more real and I think that's
[14:53] that's all about it like this game
[14:55] should be a little bit more real than
[14:57] then without all the particles so
[15:00] another thing I mentioned that these
[15:02] generators they should be producing heat
[15:05] but they don't look like they are so
[15:08] we're gonna add some VFX on top and
[15:10] suddenly kind of feels more connected so
[15:12] you got these generators they do have
[15:15] some VFX inside so it's kind of selling
[15:18] this impression that there's heaters
[15:19] kind of moving around like without this
[15:22] effect
[15:23] you would get particles a meeting from
[15:24] nowhere that's not another step of of
[15:27] kind of bringing fiction of of machinery
[15:31] to life and the last step is quite new
[15:37] actually lightning
[15:39] so with GPU particles we can actually do
[15:43] more we yeah in the past we had
[15:50] lightning system but the problem is it
[15:53] wasn't it wasn't like scaling we
[15:55] couldn't do small lightning yeah now we
[15:59] can write like you can see one thing to
[16:02] mention
[16:03] unfortunately lightning won't be in
[16:05] hammerhead soon it's gonna be like
[16:07] probably three point four just because I
[16:09] we finished that system recently it's
[16:13] ready to use but not gonna learn in the
[16:15] game like put in I know
[16:17] possibly two months or so but it is
[16:19] there it's gonna be there so expect that
[16:21] to happen soon okay so finally whole
[16:26] scenery with some music on top yay
[16:42] [Music]
[17:16] [Music]
[17:21] yep some all the destruction coming to
[17:24] your hammerhead soon thank you
[17:27] [Applause]

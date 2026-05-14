# Star Citizen: The Power of Intel® Optane™

**Video:** https://www.youtube.com/watch?v=yk2nuJjmLyE
**Date:** 2018-05-24
**Duration:** 28:50

## Transcript

[00:07] good afternoon everybody my name is
[00:10] Alejandro Jose I'm a Solutions Architect
[00:12] for Intel Corporation I'll be one of
[00:15] your presenters today and I want to
[00:16] thank you for coming here the other two
[00:18] presenters will be here today with us is
[00:20] gonna be Sean Tracy from con pyram
[00:23] here's a technical director also from
[00:25] until we have Nathan predict he's a
[00:27] technical marketing engineer and well
[00:29] three of us will be your presenters and
[00:31] we're gonna be going over how by using
[00:33] interrupting technology cloud Imperium
[00:35] games was able to accelerate the game
[00:37] development and also kind of enhance the
[00:39] game experience so with that said let's
[00:43] get started on today's agenda so first
[00:46] of all we want to give you kind of a
[00:48] quick background on an overview of the
[00:50] findings from accounting periods also
[00:53] we're going to also give you a quick
[00:55] introduction to what Intel optic
[00:56] technology is so you have a better idea
[00:59] after that the second point we're going
[01:01] to talk about is interrupted technology
[01:03] talking about the benefits what actually
[01:05] is and how has it helped other companies
[01:08] after that will go into the into the
[01:10] meat of the of the presentation of today
[01:12] which is actually going over how this
[01:15] technology helped improve all the
[01:17] different developments from for gaming
[01:19] and lastly we'll have it open for
[01:21] questions and answers so that's how
[01:23] Genda looks in here today so for now I'm
[01:26] gonna pass it over to Shannon 8 to give
[01:29] you the quick overview for the upcoming
[01:31] presentation so I'll kind of go through
[01:34] this a little quicker than I might
[01:35] otherwise so octane
[01:38] just a kind of level set everybody here
[01:39] obtained is basically Intel's
[01:41] implementation of new media new media
[01:43] technology called 3d crosspoint the 3d
[01:46] crosspoint media makes up the foundation
[01:49] of the card then with an Intel
[01:50] controller and for more on top of that
[01:51] and then obtain is actually represents
[01:55] multiple products right so we're going
[01:56] to be talking mostly about the obtain
[01:58] SSD here the 900p there's also obtained
[02:01] memory there's some very strong
[02:03] similarities between the different
[02:05] products but they are intended for
[02:06] different usages this is mostly around
[02:08] the the 900p so you know what is 3d
[02:12] crosspoint what is obtained
[02:14] it's basically a new media technology a
[02:16] new a new way of storing data it doesn't
[02:19] work like NAND technologies work today
[02:20] it works in a different way and that
[02:23] brings some unique properties some
[02:24] unique advantages to it that you
[02:26] wouldn't get with the NAND device life
[02:28] or one thing from a programmers
[02:30] perspective it's a bit addressable now
[02:31] this one actually works the 900p works a
[02:34] lot like a normal SSD you read and write
[02:35] to LBAs like you would with a normal is
[02:37] d but under the hood the controller is
[02:40] capable of actually addressing very
[02:41] small chunks of data relative to an end
[02:43] device which talks more in terms of
[02:44] pages we also have what you know one of
[02:48] the main properties here that will
[02:50] benefit we think game developers in the
[02:51] future the latency the access time to
[02:54] get to the data is somewhere in south of
[02:56] 10 to 10 micro second so it's about an
[02:58] order of magnitude below an end device
[03:00] so I think you see as we move forward
[03:02] with you know with the customized
[03:04] software that kind of really takes
[03:05] advantage that you'll see some real
[03:07] strong benefits that take advantage of
[03:09] that we'll see a little bit more on
[03:12] these last two bullets here we've got
[03:13] slides on performance consistency and
[03:15] the endurance those are both very
[03:16] different than NAND devices and we'll go
[03:18] into that in more detail later I'm going
[03:22] to turn this over here now to Shawn he's
[03:23] going to talk about the the cloud
[03:25] imperium bit yeah so I'll just speak
[03:28] from here it will go into it a little
[03:29] bit more and just tell you what I'm
[03:30] gonna talk about anyways once we get to
[03:33] our section here and it's some of the
[03:35] things that we did to use
[03:36] multi-threading to improve some of the
[03:38] performance internal to the game engine
[03:40] itself and how we could do that to
[03:42] leveraging on NAND technology from Intel
[03:45] obtain things like multiple concurrent
[03:48] file reads at runtime
[03:50] improved loading times and ultimately
[03:53] just getting a smoother experience using
[03:55] the Intel obtained technology and then
[03:57] finally we'll go into how it's actually
[03:59] improved our build process as well as
[04:01] we're building you know up to 1.3
[04:03] terabytes of source data at one time it
[04:06] was real important that we had a real
[04:07] powerful storage device to be able to
[04:10] use it Thank You Sean so with that said
[04:14] we'll go over I'll go over quickly to
[04:16] more details on the in topic technology
[04:19] so as Nathan have said there are
[04:22] different types of products out there
[04:23] for different type of usages so the
[04:25] first one that
[04:26] have heard before the first ones come
[04:28] out with the Intel obtain memory which
[04:30] is pretty much an accelerating device so
[04:32] what it does accelerates your system
[04:33] once you pair it with a hard drive so
[04:36] you parrot that memory module with the
[04:38] hard drive to get like an SSD
[04:39] performance so that's kind of it does
[04:42] the usage for the Intel obtain memory
[04:44] the other two are storage devices so
[04:46] like a regular SSD or or hard drive well
[04:48] not like a regular because these guys
[04:50] are a lot faster more and more durable
[04:53] and lower latency the one the ones that
[04:56] we have there is the 800 P which is more
[04:59] like up for like a day to day getting
[05:01] closer to the performance side and the
[05:04] one that will actually talk today and
[05:05] the one that cloud imperium to use is
[05:06] the 900 p which is designed for
[05:08] performance or endurance so that said
[05:13] why performance of endurance
[05:15] I think performance or endurance will
[05:17] benefit most of the most of these groups
[05:19] actually we're nerfing most of you guys
[05:21] who have heavy workloads so I'm talking
[05:23] to about the gaming developers media
[05:26] creation engineering workloads
[05:28] scientifical and medical research which
[05:30] are very heavy workloads that once you
[05:33] load them up on your system you run out
[05:35] of RAM and then you start doing what is
[05:37] called paging you start staring
[05:38] accessing the drive the storage many
[05:41] many times to get all that extra data so
[05:44] with the lower latency and how fast it
[05:46] is you're able to do this with all this
[05:48] workflow so those are kind of the work
[05:49] those that we're looking for and we
[05:51] think that this drive is a really good
[05:53] test solution once you're working with
[05:57] demanding with them ending work looks
[05:59] for example I've talked to someone
[06:02] earlier today that they have this huge
[06:04] picture of I think was 16 K and high PPI
[06:07] so high a per pixel pixel per inches and
[06:11] they had to actually chop that picture
[06:12] in several stages in order to be able to
[06:14] process it so the idea is by using this
[06:17] drive you nationally have to do that you
[06:19] can actually load that whole picture and
[06:21] actually be able to work with it so
[06:24] those are kind of the usages that we see
[06:26] and also new possibilities why new
[06:28] possibilities because this is a brand
[06:30] new technology so there's so many things
[06:32] that US and Intel can think but if we
[06:34] actually you guys help us to develop new
[06:36] technology see new possibilities we
[06:39] don't know what's out there
[06:40] so that's one of the reasons we actually
[06:42] are working with a client peering games
[06:43] because they have the know-how on the
[06:45] game development and we have the
[06:46] know-how in the hardware so they can
[06:48] actually come up with with a better
[06:49] ideas or more ideas or newer ideas that
[06:52] we haven't thought about so that's where
[06:54] we also look into new possibilities and
[06:56] with that I will pass it over to my
[06:58] friend Nate's there we'll talk you a
[06:59] little bit more of the benefits and why
[07:01] this also it's a good solution for you
[07:03] guys okay so you know at the end of the
[07:08] day I think you know what this is gonna
[07:10] come down to is you know why should I
[07:11] care right why do you guys care about
[07:13] this this is all you know hardware and I
[07:16] assume a lot of you guys are software
[07:17] developers here right so in order to
[07:19] explain why I think you should care I
[07:21] have to kind of go into this concept of
[07:23] what's called queue depth right and I
[07:25] don't know how much this will be
[07:27] familiar to you so apologize if this is
[07:29] repeating something you already know but
[07:30] all the i/os that go through a system go
[07:32] through a storage queue and in the case
[07:35] of SATA you've got a single queue and
[07:36] that's generally not that big of a deal
[07:38] because it drives relatively slow but
[07:40] when you move into an nvme or PCIe
[07:42] device with nvme now you've got a you've
[07:45] got a queue for each one of the cores in
[07:46] your system right so if you've got an
[07:48] eight-core system you've now got eight
[07:49] queues and if you think about that the
[07:51] number of i/os that are in the system
[07:53] are actually fixed right and so now
[07:55] instead of putting all eight of those or
[07:57] all you know all let's say 20 of those
[07:59] IOT's into a single queue now you're
[08:01] spreading those out over eight queues
[08:02] and what happens is that lowers the
[08:04] depth of the queue right the queue now
[08:05] has only a couple entries each and it
[08:07] each queue has a couple entries each
[08:09] rather than one deeper queue and you
[08:12] know why is that important if you
[08:14] actually look at a datasheet for an SSD
[08:16] those data sheets are gonna are gonna
[08:18] list performance data right they're
[08:19] gonna list sequential data and they're
[08:21] gonna list random data the random bid is
[08:23] very important because most of the
[08:25] workstation workloads are actually
[08:27] highly random and we'll see more about
[08:28] that in just a minute but the other
[08:31] important thing here is that the numbers
[08:33] that they'll quote are usually in a ops
[08:34] you know you might see a number like
[08:36] 300,000 I ops 400,000 I ops those
[08:38] numbers are almost always quoted at
[08:40] queued up 32 or above so if you actually
[08:43] look at this profile that we've taken
[08:44] with a number of common applications
[08:46] right these are applications that you
[08:47] you know you probably use before visual
[08:49] studio maybe side effects for rendering
[08:51] if you look at a profile in a
[08:53] workstation
[08:54] environment those key adepts actually
[08:56] stay below 5 80% of the time more than
[08:59] 80% of the time right so these high
[09:01] 300,000 IAP numbers that you keep seeing
[09:04] quoted on these data sheets you'll never
[09:06] see that on a workstation you might see
[09:07] it on a server where the Dacula are able
[09:09] to get a little bit deeper but
[09:10] workstations operate at very low cute
[09:13] ups so one of the things that that makes
[09:15] octane unique you know and we'll see
[09:17] some more specific data in a few minutes
[09:19] is the queue depth the load queued up
[09:21] performance is actually you know very
[09:23] close to a high queued up performance in
[09:25] other words you'll get to the high
[09:26] performance aspect of the drive quickly
[09:28] and you'll stay there across the entire
[09:30] range right and what that will translate
[09:32] into for a user is it's usually going to
[09:34] be something like responsiveness right
[09:36] that millisecond delay that you get when
[09:38] you're trying to open something it goes
[09:40] away and you get used to that I mean
[09:41] I've been using one of these drives
[09:42] myself for quite a while and you get
[09:44] used to it when you go back to another
[09:45] device it actually it's hard to go back
[09:48] so let me yeah let me show you a little
[09:50] bit in terms of actual performance and
[09:52] metrics at these key depths right we see
[09:55] here the random read and random write
[09:57] these are you know again in a
[09:59] workstation environment most things are
[10:01] random and you'll see if you look at the
[10:03] actual random read which again most
[10:05] workstation environments are mostly read
[10:07] you'll see up to a 6x performance
[10:09] differential right and that's over a
[10:11] very high performance nvme NAND device
[10:13] so a huge difference in terms of usable
[10:17] performance right not high-end you know
[10:18] it's it's not like you got a sports car
[10:20] and you're driving around in a school
[10:22] zone all day right
[10:23] it's something that you can actually see
[10:25] and feel and in your day to day
[10:27] operation this because of the way rights
[10:29] work you'll see the numbers not quite as
[10:31] high of a differential they're at the
[10:33] low key depth but you can see as you get
[10:35] up to the higher key depths there it
[10:36] starts to taper off so even when you do
[10:38] start writing a lot the drive continues
[10:41] to accelerate where an and device may
[10:42] just taper off and stop okay so putting
[10:48] it all together most people aren't just
[10:50] reading or just writing all of the time
[10:52] they're usually doing a combination
[10:53] though too so what this graph represents
[10:55] here is we've taken a queue depth of
[10:57] four which is I think you know a
[10:59] relatively decent number and we've held
[11:02] that steady as we as we varied the read
[11:04] from 100% to 0% right and if you look at
[11:07] an end of
[11:08] that number that that actual throughput
[11:11] of data there even though you might see
[11:12] these numbers like three thousand
[11:14] megabytes a second you can see the
[11:15] actual usable speed here is closer to
[11:17] two hundred megabytes a second and it
[11:19] stays relatively in that range until you
[11:21] get very close to the full write
[11:23] performance then it starts to ramp up
[11:25] sharply again if you look at what obtain
[11:27] can do here it starts out at a high
[11:29] level and it just kind of stays there
[11:31] right so it doesn't really matter you
[11:32] can read you can write you can
[11:33] interleave the tude
[11:35] the performance will stay generally the
[11:36] same and then the last bit I'm going to
[11:39] talk about here too is endurance so when
[11:41] again when you start talking about SSDs
[11:42] you have to worry about right wearing
[11:45] the cells out right you don't have that
[11:47] problem with hard drives for the most
[11:48] part but on an SSD the cells will
[11:50] eventually go bad and a lot of drives
[11:52] will have spare and like but if you look
[11:55] at the actual data here this is this is
[11:57] warranted performance right so these
[11:59] SATA SSDs here nvme SSDs on the right
[12:02] hand side this is what the vendor will
[12:03] actually warranty the drive to allow you
[12:06] to write to them before they're out of
[12:07] warranty essentially right that number
[12:10] of varies anywhere from 150 terabytes up
[12:13] to about 400 terabytes
[12:14] whereas the obtains you know again
[12:17] orders of magnitude higher than that so
[12:19] practically speaking you can write one
[12:21] of these op tain drives up to 22 times
[12:23] alright sorry you can write one of these
[12:25] nvme or ananda devices up to 22 times
[12:28] and replace them 22 times before you've
[12:31] worn out a single one of these obtained
[12:32] drives so you don't have to worry about
[12:34] the drive disappearing you don't have to
[12:35] worry about the cells going bad the
[12:37] drive is is guaranteed to work out to
[12:39] this up to this terabyte written data
[12:42] that you see here okay
[12:45] so in terms of what that means for
[12:47] actual applications alejandra we'll talk
[12:50] more about that now appreciate it so
[12:53] staying in the on the theme of how did
[12:57] these translate to you who have he who
[13:00] here have spent a lot of time where you
[13:02] kick off a render or a simulation
[13:03] compilation and you just okay I just
[13:05] kicked this off and I'm gonna go now and
[13:07] you know spend go get some food good
[13:09] coffee go play around no sore fight and
[13:13] then your supervisor to ask you like
[13:15] what are you doing why you're not
[13:15] working or like well I'm just waiting
[13:17] for compile so I'm sorry to tell you
[13:21] that
[13:21] with this obtained drive this sort plate
[13:23] fight time haze we're gonna actually
[13:25] reduce it and at the end of the day that
[13:27] actually makes your life easier because
[13:28] when you will go ahead and kick off the
[13:31] compiled in a Friday you're worrying
[13:33] throughout the whole weekend it did to
[13:34] compile their work that it crash and you
[13:36] have to wait for such a for such a long
[13:39] time a period to see if it happens but
[13:40] now with the with this type of storage
[13:42] with this technology Intel obtained
[13:44] technology you actually can do that a
[13:45] lot quicker and we have seen that
[13:47] through rendering through a loading
[13:49] tumbler projects also now the ability to
[13:52] to run a larger workloads and so that
[13:56] actually helps you to get all these done
[13:57] faster so how does it translate to you
[14:00] you get things done faster you get more
[14:01] time for you or more time for each
[14:03] iterate on any changes that you have to
[14:05] do to your project to show a couple
[14:07] examples of that quickly is we have also
[14:11] worked out with company called digital
[14:12] dimensions which they implement in the
[14:14] technology and they sell for the one
[14:16] percent faster rendering time also by
[14:19] using these drives they also incremented
[14:21] the processor usage by seventeen percent
[14:23] which means that you just spend this
[14:25] this amount of money to buy a processor
[14:27] there's actually sitting idle waiting
[14:29] for more information just because the
[14:31] current storage is not fast enough
[14:33] defeated but now that we have the Intel
[14:35] technology that is able to feed it
[14:36] faster that you have improved the its
[14:39] utilization by more because now he can
[14:41] get more information and he can get
[14:43] going and do the work faster also we
[14:45] work with side effects and they have
[14:47] seen by the scene under rendering
[14:50] they've seen an improvement of the 2.7 X
[14:52] so that has also helped them a lot when
[14:55] it comes to particle rendering which is
[14:57] the when you're doing all these
[14:58] calculations over you doing for example
[15:00] a maelstrom of water and try to see how
[15:02] the physics and the interaction
[15:04] whichever particle goes goes with it so
[15:06] it went from actually 17 hours the seven
[15:09] second clip of a maelstrom from 17 hours
[15:12] to taking to render to actually 6.3
[15:14] hours so that's a big improvement from
[15:15] them so if you want to make any changes
[15:17] you don't have to wait I guess two days
[15:19] you can you just do it and you guys
[15:20] should do to two rounds of that
[15:22] rendering in one day and do any changes
[15:23] they need to do but those are just some
[15:26] examples that we have with the real
[15:27] example that we want to share with you
[15:29] guys in the important one and why we're
[15:31] here is how has clone Imperium
[15:34] seen any advances or on there
[15:37] gaming development by using this
[15:38] technology and for that I'll hand it up
[15:41] with you Sean thanks a lot guys so us at
[15:49] cloud Imperium games making star citizen
[15:51] as well as squadron 42 it was really
[15:54] nice to be early adopter it's partnered
[15:56] up with Intel because we really got a
[15:58] chance to be first boots on the ground
[16:00] in terms of trying out some different
[16:02] things seeing what we could actually do
[16:04] to leverage the technology so the first
[16:07] thing I want to talk about is kind of
[16:08] the end user optimization what the
[16:10] players are actually seeing for us and
[16:12] and we found out very very quickly that
[16:14] performance is the key to a good player
[16:15] experience and to get that performance
[16:18] we have to do some things internal the
[16:20] game engine and one of the big ones of
[16:21] course is multi-threading now this isn't
[16:23] a multi-threading talk nor is that
[16:25] really about CPUs but I do want to
[16:27] explain some of the really core concepts
[16:28] of it and really multi-threading is a
[16:31] concept that we always have more than
[16:32] one object to call you've got more than
[16:35] one object to code more than one
[16:36] particle emitter be updated you've got
[16:38] multiple files streaming in at once
[16:40] you've got multiple pieces of game code
[16:41] going on at one time you've got entities
[16:43] with different components on them that
[16:44] you need to update per frame some that
[16:46] you don't need to update to render an
[16:48] actual frame so these concepts actually
[16:50] resulted in two really key systems that
[16:52] are internal to our engine one of them
[16:54] is the batch updater and the second one
[16:56] is the background workers so batch
[17:01] updater what's a batch updater so a
[17:03] batch updater is something that we have
[17:05] actually put together and it's a system
[17:07] composed of batch workers and this is
[17:09] probably not a unique concept to b2b to
[17:13] hear about really and batch workers we
[17:15] found out a little bit like rabbits
[17:17] especially for the game coders you get a
[17:19] couple of these you learn how to use
[17:20] them and all of a sudden you've got
[17:21] dozens of them and you've got to try to
[17:24] be wrangling them all across the all
[17:26] across the code so these are used to
[17:29] update batches of the same object that's
[17:30] distributed over multiple CPU cores
[17:33] what's really important to us being a PC
[17:35] game is that we're developing for a
[17:37] bunch of different platforms and
[17:38] depending on the users they might have a
[17:41] better CPU they might have a couple more
[17:42] cores they might have a couple more
[17:43] threads that they can actually throw at
[17:45] the game engine versus another user so
[17:47] we wanted to be
[17:48] able to be as scalable as absolutely
[17:49] possible so it's really it's really
[17:52] useful in combination with an entity
[17:54] component system and a lot of engines
[17:56] have already moved this way and a good
[17:58] example is unity has always kind of been
[18:00] the set up in this kind of method on
[18:02] Rails going that way as well as
[18:03] lumberyard and really what it does it
[18:05] allows you to relatively easily parallel
[18:10] eyes of your game code without your game
[18:13] coders necessarily understanding the the
[18:15] underlying process that's going on there
[18:17] so in terms of the batch updater we use
[18:20] this for frame dependent work so
[18:22] anything that we need computation to
[18:23] show a frame in in in in that method now
[18:27] on the other side of it we have our
[18:29] background worker system so the system
[18:32] this one is designed around single job
[18:34] job objects and the idea is to run the
[18:37] background worker systems whenever the
[18:38] batch workers run out of work so when
[18:40] you're going yo buddy and get back to
[18:41] work we can actually do these batch
[18:43] background workers so this is where we
[18:47] actually begin to be able to leverage
[18:48] the technology of NAND SSD or Intel
[18:50] octane technology so these background
[18:52] workers are really tightly coupled with
[18:54] our low-level i/o system and it
[18:56] specifically gives us some pretty big
[18:58] benefits that are not only user facing
[19:01] but also facing for the game developers
[19:04] so how does that work we couple these
[19:07] background workers to the i/o system for
[19:09] Intel 3d NAND SSD and Intel obtain SSD
[19:12] tech so we can read multiple files in
[19:14] parallel brock's using asynchronous i/o
[19:17] versus a more serial access pattern that
[19:19] you would get in a platter drive sort of
[19:21] this file by file by file and to give
[19:23] you an example some of our we've got
[19:25] spaceships in the game these are you
[19:26] know it's 300 megabyte asset that's just
[19:29] made up of a bunch of different files at
[19:30] one time so anytime that we have a
[19:32] player come into a system we've got to
[19:34] load all these ships anytime we have a
[19:35] player come close to the planet we've
[19:36] got to load all the outposts on the
[19:37] planet giving them a sort of stutter
[19:40] free experience is a pretty important
[19:41] thing for us
[19:42] so basically when a file block finishes
[19:44] a free background worker wakes up it
[19:47] decrypts and decompresses said block
[19:48] even if it's not fully in memory yet so
[19:51] this is usually where you know the
[19:52] theory of game load times being improved
[19:55] by obtain SSE if you don't do something
[19:58] like this you're actually still going to
[19:59] run into a bottleneck so do the number
[20:02] of parallel files we can work on
[20:03] multiple file blocks in parallel it
[20:06] gives us up to for 16 kill the bug bite
[20:09] block blocks in flight at one time so in
[20:14] the end we get four blocks in flight
[20:15] across n number of cores a number of
[20:18] processes in parallel so again that's a
[20:23] lot of just you know quick explanation
[20:24] of how we're using this but what does
[20:26] that actually do for the gamer and
[20:27] that's what this is more about well what
[20:30] it does is it improves game loading
[20:32] times now in star citizen we actually
[20:33] only have one load you load the universe
[20:35] and the universe is a pretty big place
[20:36] there's a lot of stuff to load within
[20:37] there so one of the examples that I've
[20:41] got up here we had a 7200 rpm platter
[20:43] drive and we loaded the universe on it
[20:46] and then we tried the exact same thing
[20:48] on an Intel obtain 900 P and the load
[20:50] time was actually 130 seconds faster
[20:52] which is significant improvement in that
[20:55] one load and now against an SSD SATA the
[20:58] improvement was a little smaller but
[21:00] absolutely still there so four and a
[21:01] half second improvement to load time so
[21:04] again having the multiple concurrent
[21:05] file reads during streaming or loading
[21:07] made this a lot faster so moving on from
[21:15] this just showing an example of that
[21:17] actually happening now the two on the
[21:19] left-hand side of this video are the
[21:21] Intel obtain 900 piece so that's look
[21:24] this is actually our load screen it's
[21:25] not the most exciting of videos I
[21:27] understand seeing a load screen and
[21:28] you'll see this little pink placeholder
[21:30] sort of load time graph that we had and
[21:32] this is the SATA SSD on the top right
[21:36] and the 7200 rpm platter drive on the
[21:39] bottom right so after about thirty
[21:45] some-odd seconds we get our nice load so
[21:48] the Intel obtain 900 feet that's our one
[21:50] load so that's how our players are
[21:52] experiencing that immediately shortly
[21:54] thereafter we've got the SSD inside a
[21:56] configuration that's gotten loaded up
[21:59] now and we're still waiting for the
[22:03] platter drive now I'm not going to make
[22:08] this whole video run I wonder how I can
[22:09] speed this up here
[22:17] it's right there I'm not gonna insult
[22:24] everybody
[22:24] telogen so take three minutes to load
[22:26] but after about three minutes you see
[22:28] the 7200 RPM come behind there's no
[22:30] plate play blast I didn't want to have
[22:32] you guys sit through the whole thing
[22:34] point being is that you've got it in
[22:36] about 180 seconds faster which is a huge
[22:38] deal for the players especially so now
[22:41] how did actually benefit game
[22:43] development and actually working day to
[22:44] day there was already some pretty big
[22:46] improvements right out of the box so one
[22:48] of the big ones was real word that Oh
[22:50] copies are faster than ever
[22:51] a lot of the version control systems now
[22:53] like it or even perforce have these
[22:56] parallel sync options and you can really
[22:58] abuse those with this kind of technology
[23:00] you can also use this with internal
[23:02] tools so we have an internal tool that
[23:04] we called copy build and it's basically
[23:05] how the artists how the program was how
[23:07] everybody pulls down 65 gigabytes of
[23:09] packaged data after a build process has
[23:12] run so one of the sort of graphs up here
[23:15] is how much faster was that build copy
[23:18] so again this is about sixty five
[23:19] gigabytes being copied down onto a
[23:20] developer's PC on a 7200 platter drive
[23:23] mechanical drive rather it's faster by
[23:26] 288 seconds considering you do this four
[23:29] five six times a day really depending on
[23:31] the day that's a huge improvement and
[23:33] again any downtime just reduces that
[23:36] amount of swordplay like Alex was
[23:38] talking about on and in on an SSD and in
[23:41] SATA configuration it's a faster by
[23:43] about 76 seconds this is again still a
[23:46] big improvement that you're pulling down
[23:48] these builds multiple times throughout
[23:49] the course of the day so again there's a
[23:51] very very real-world example the other
[23:54] one and this wasn't something that it
[23:55] was necessarily expecting but ended up
[23:57] benefiting our artists especially the
[23:59] facial animators quite a lot large
[24:02] source file export was massively sped up
[24:04] so one of the things that we do we have
[24:06] some Triple A actors within our games so
[24:08] the data that we use to represent these
[24:10] guys within Maya is pretty massive we've
[24:13] got really really high density meshes
[24:15] and some super super high density
[24:17] animations so one of these exports can
[24:20] be up to seven gigabytes of uncompressed
[24:22] Calado
[24:22] data this is all being written to drive
[24:25] sometimes it's going to take about four
[24:26] and
[24:27] minutes to export so we got that four
[24:28] and a half minutes just using an Intel
[24:30] 900p down to just a couple seconds so
[24:32] for artists to be able to iterate on
[24:34] this kind of stuff it was it was
[24:36] incredibly important to them and again
[24:38] going from you know the the minutes down
[24:40] to seconds for their sort of iteration
[24:43] loop was super beneficial and one other
[24:46] one that I wasn't necessarily expecting
[24:47] was our frame by frame captures this is
[24:49] something we do sometimes when we want
[24:51] to really really consistent 60 frames a
[24:52] second we're outputting per frame a JPEG
[24:55] or a PNG onto disk and usually the
[24:57] bottleneck when you're doing that as
[24:58] you're playing the game is actually
[25:00] writing to disk and we we slow down the
[25:02] game to a state that it can actually
[25:03] keep up so when we did this usually when
[25:07] we play it on you know like a 7200 rpm
[25:10] kind of drive you're playing it in slow
[25:12] motion it's like 510 frames a second and
[25:14] you're very slowly capturing this and
[25:16] most of us have put these kind of things
[25:18] together for demos or for marketing
[25:20] content or something now being able to
[25:21] do it on an Intel 900p this was almost
[25:24] playing at real time so it was much more
[25:26] 24 30 frames a second so I could play
[25:28] the game quite normally and still have a
[25:30] lossless capture done written straight
[25:32] to disk so this was a really nice thing
[25:34] too lastly we benefited pretty massively
[25:41] from changing our build configuration on
[25:43] our build machines to use the Intel 900p
[25:46] so one of the things that we have to do
[25:48] just before we build all of our assets
[25:50] is we actually have to synchronize all
[25:51] those assets and I talked a little bit
[25:53] about this earlier but the actual data
[25:55] that the build process has to do is much
[25:58] much more than an artist will have to
[25:59] take a look at so right now in star
[26:00] citizen we have 1.3 terabytes of data to
[26:04] sync per branch this is crazy this is a
[26:06] lot of data this has done multiple times
[26:09] depending on content needs so sometimes
[26:11] I'll change a preset in our resource
[26:13] compiler and it requires of rebuild all
[26:15] of our source assets so they'll have to
[26:17] pull that down onto the build machine
[26:19] and then all those assets will need to
[26:20] get compiled we do this for every major
[26:23] release and considering we've release
[26:25] every three months that's kind of a big
[26:27] deal and anytime we change data formats
[26:29] so we got a speed improvement pretty
[26:32] pretty dramatic actually and just before
[26:35] I go into the speed our current
[26:37] configuration was 24 SSDs in
[26:40] out of raid six on on a super box that
[26:43] we have in Austin and Nate had come out
[26:46] worked with our build guys a little bit
[26:48] and we got our data sank down quite a
[26:51] lot more so right now in the current
[26:53] configuration it was taking about six
[26:55] hours and 13 minutes to bring down 1.3
[26:58] terabytes of data once we change it out
[27:00] to our opt-in configuration which
[27:02] instead of 24 SSDs we actually hooked up
[27:06] just for Intel obtain SSDs and vrock
[27:08] raid configuration so for Data Sync this
[27:11] only took three hours in 30 minutes so
[27:13] we basically went twice as fast this
[27:16] again is a huge deal because when the
[27:18] build guys are coming in and they have
[27:19] to do a full data sync of this they're
[27:21] either going to have to do it on the
[27:22] weekends they're gonna have to do it
[27:24] late at night sometime when it's
[27:26] actually not going to block development
[27:27] or it's not going to block our fast code
[27:28] builds from coming up so they get a lot
[27:31] more sleep and we're able to actually
[27:33] use a lot a lot less drive space in our
[27:36] in our servers so so really to kind of
[27:40] summarize everything we saw some
[27:42] end-user optimizations faster load times
[27:44] more smooth streaming during gameplay we
[27:47] have some optimizations directly for
[27:49] game development that's file sinks
[27:51] source file exports as well as capturing
[27:54] and then we were able to accelerate the
[27:56] data build process and all of this we
[27:58] pretty much did out-of-the-box there was
[27:59] very very little special setups that we
[28:03] needed to do to get this benefit right
[28:05] away so really it opened new doors for
[28:07] us for creating these novel experiences
[28:09] for our players we can load bigger data
[28:10] sets and we can load them faster and
[28:13] smoother than we can on different drive
[28:16] configurations so really allows us to
[28:18] improve long-standing systems and tools
[28:20] to take full advantage of the Intel
[28:23] obtained technology
[28:29] thanks for watching for the latest and
[28:31] greatest in star citizen squadron 42 you
[28:33] can subscribe to our Channel or you can
[28:35] check out some of the other shows and
[28:36] you can also head to our website at
[28:41] www.uvu.edu/library

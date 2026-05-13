# Star Citizen Live Gamedev: Mission Maker

**Video:** https://www.youtube.com/watch?v=xQ8u4oikDfw
**Date:** 2023-08-11
**Duration:** 1:04:13

## Transcript

[00:05] hi everybody welcome to another episode
[00:07] of Star Citizen live
[00:09] game death
[00:11] Mission maker
[00:13] I don't know what was wrong with the
[00:14] Cadence there I just
[00:17] how you doing I'm good I'm good uh
[00:20] uh I'm Jared I'm your humble uh sidekick
[00:24] this week uh with the in-depth shows we
[00:26] usually kind of turn over the driving
[00:28] force to one of our developers who takes
[00:30] you through a bit of their process over
[00:32] the next hour uh this week we have
[00:36] um
[00:39] and what do you do I make missions well
[00:42] I'm a lead there's a lead designer now
[00:44] so not as much missions anymore but I
[00:46] still make missions
[00:49] what he said uh we are going to attempt
[00:51] something that
[00:54] every single person told me was probably
[00:56] a bad idea including me we are going to
[00:59] attempt
[01:00] to make a mission
[01:02] from scratch
[01:04] using the mission verb star words data
[01:07] Forge Robo Hesse all the cool tools that
[01:10] are used and see if we can't make a
[01:12] mission and even get inside and play it
[01:15] for a little bit within the span of an
[01:17] hour
[01:19] can it be done
[01:22] I think so
[01:24] finally I'll be able to prove the
[01:25] community wrong because everyone says I
[01:27] can't make missions
[01:29] we'll find out
[01:30] right so at this point in the show I'm
[01:33] going to turn it over to who are you
[01:35] again oh my God Elliott Mobile Elliott
[01:37] Malby and uh he's going to take you
[01:40] through a little bit of the the rough
[01:41] flow uh introduce you to the idea of it
[01:44] so Elliot that's your camera right there
[01:45] let's go to that camera
[01:47] so sit back a little bit frame there you
[01:50] go there you go good framing so tell
[01:52] them what we're doing today so uh today
[01:55] we're going to be going through uh a
[01:58] mission so we we have a sort of a rough
[02:01] rough pitch outline for it so I am going
[02:04] to be making a prototype uh experience
[02:06] of the mission where we can play it see
[02:08] how it feels see how it plays and then
[02:10] iterate on it improve it and then decide
[02:12] if we if we want to like
[02:15] wait for more things to come in to make
[02:17] it even better or if we think it's a
[02:19] good enough experience to put it out and
[02:20] then improve on it as time passes by so
[02:23] that's pretty much it so walk us through
[02:25] what's the rough flow what are we aiming
[02:27] to do okay right so the roof flow is
[02:30] we're doing a subdue and Recovery
[02:32] Mission which is uh I go to a location I
[02:35] uh knock the AI out and then I have to
[02:38] go and deliver them that is the very
[02:41] roughest flow of it Bob's your uncle
[02:43] simple right
[02:44] no okay
[02:47] um so is there any more to explain
[02:50] before we start let me jump into the
[02:51] process
[02:52] um
[02:53] yeah so there's a couple of things that
[02:55] I'm going to try to do
[02:57] um so as people might know I don't like
[03:00] hand-holding
[03:02] um so for there's certain things we do
[03:04] currently in status and for example when
[03:06] you get to the Loki
[03:08] when you get to the location we uh
[03:12] we would Mark the ship and then when the
[03:14] AI spawns we then Mark the AI for you to
[03:17] get listen right it's warm I've got like
[03:20] a 20 pound like staring at me
[03:23] so we we then Mark the AI for you to
[03:25] take out now I'm going to try and remove
[03:26] those aspects so I want to leverage the
[03:28] scanning gameplay so you actually have
[03:30] to ping scan whatever to find the
[03:32] shipping once it has been detected by
[03:34] your ship I'll mark it then and then
[03:37] when you get into the ship I won't Mark
[03:39] the AI directly I will wait until either
[03:42] they see you or you are within a certain
[03:45] range of them um this is kind of like an
[03:47] imperfect solution because it's either I
[03:49] mark them so you always know where they
[03:51] are and you B-Line straight to their
[03:52] location I do this
[03:55] but the perfect solution would be say
[03:57] FPS scanning
[03:59] um but we don't have that yet so it's
[04:01] kind of like playing with the mission
[04:02] and it's trying to understand what the
[04:07] end goal of the mission is going to be
[04:08] like
[04:09] um while we finished it all right so
[04:12] let's start so let's start the screen
[04:14] share uh every good Mission starts with
[04:17] uh helpful encouragement from Luke
[04:20] Presley yes we have Luke so we're
[04:22] already ahead uh introduce us to our
[04:24] tools what are we using to call okay so
[04:27] what the main and biggest tool that a
[04:30] designer uses is Robo Hesse this is a
[04:36] tool that takes all of our perforce
[04:38] streams and loads like loads them all
[04:40] here so it's very quick for us to click
[04:42] and go through them so if I was to click
[04:44] this it shows other perforce streams and
[04:46] I can just jump between them and I can
[04:48] click open my tool here open my tool
[04:51] here open my tool there I can do things
[04:52] like I can get a new build I can have
[04:54] certain change certain files I care
[04:57] about for sync so for example like
[04:59] latest subsumption will just pull my
[05:02] subsumption files ocean levels will just
[05:04] pull the latest object containers and
[05:06] levels which obviously helps to speed up
[05:08] testing and gameplay and then there's
[05:11] the things here to boot the game and
[05:13] things like that this tool was made by
[05:15] amazing Jake mule well not ours anymore
[05:19] and uh me me Ben Dorsey and Andrew Hesse
[05:23] helped to design it and it has saved so
[05:25] many hours not just on mft's side it is
[05:28] a lot of the people in the company use
[05:30] it so
[05:31] so I'd use this to boot on my tools and
[05:34] the tools I need are things like
[05:35] subsumption which is our logic based
[05:39] editor which I'll full screen in a
[05:41] minute uh star words this thing which is
[05:44] how we build strings for the game and
[05:46] last but not least
[05:48] data Forge and this is how we build
[05:51] oh my God like everything in the game
[05:53] this is where you build entities it's
[05:54] where you build missions it's where you
[05:56] build everything pretty much everything
[05:58] that's not a mission now uh you skipped
[06:00] over the Star Wars it's been a long time
[06:02] since we've talked about Star Wars you
[06:03] say strings this is text strings lock ID
[06:06] is the code so it's uh it's text that we
[06:09] put in and we sort of we put in the game
[06:12] but it's it's in this sort of tool here
[06:14] so people can localize it for other
[06:15] languages
[06:17] um but it's always like linked to one
[06:19] one place it's quite common in in the
[06:21] games industry to have this sort of
[06:23] stuff but this is a really cool
[06:24] interface they've built for us to use it
[06:25] now cool all right so first things first
[06:30] um so I've talked about the rough flow
[06:33] um so I need to think of a story now I
[06:36] have been mulling over a story for a
[06:38] while so what I'm going to do is I'm
[06:40] going to create a folder for my story to
[06:42] go into
[06:44] um and this is going to be called sub
[06:46] deal sub deal I can't spell by the way
[06:49] and recover
[06:53] boom
[06:55] and then when it responds already there
[06:59] we go beautiful hey
[07:02] my PC is not a good PC okay
[07:05] um so I've opened up the folder for
[07:07] subdue and recover and then here I'm
[07:08] going to make a bunch of strings so
[07:10] I need to make a story
[07:13] so
[07:14] uh the story usually consists of
[07:18] um
[07:19] three three initial strings which would
[07:21] be the title the description and then
[07:23] the from string I don't need to use the
[07:25] from string because I'm going to use a
[07:28] mission Giver that already exists I'm
[07:30] going to use Ruto I'm sure many of you
[07:32] know router
[07:33] and so what I'm going to do is I'm going
[07:36] to make so the lock ID is how we link it
[07:39] so the English text is the text and the
[07:40] lock ID is how we sort of link it uh to
[07:43] this so I'm going to do subdu SUB oh my
[07:46] God subdue and recover
[07:50] underscore title and what I'm going to
[07:52] do to save myself time is I'm going to
[07:54] copy that so I don't have to retype it
[07:56] new description
[07:57] so uh the title is going to be which
[08:01] I've again I've already thought of the
[08:03] story this was this was I planned the
[08:05] story ready for this because I thought
[08:07] it was good the title is going to be
[08:08] called a personal request
[08:11] and the description which I'll open into
[08:14] a big window so everyone can see it
[08:16] is this ruto's asking for help his jump
[08:19] town operation has recently come under
[08:21] attack and we've been struggling to get
[08:23] the maze to where he needs it to be a
[08:25] certain pirate arguably the worst has
[08:28] been causing havoc and stopping his
[08:29] operatives from extracting it for that
[08:31] for Ruto
[08:32] he wants you to hunt and bring them down
[08:35] bring them back to him alive he wants to
[08:37] punish them and recoup his losses
[08:39] emotionally and let's see if they can
[08:41] still say all good ships have a name
[08:44] after he's finished with them so you're
[08:47] going to go to the location you're going
[08:48] to bring back void dude and bring him
[08:50] back alive and if you complete this root
[08:52] oil exposes other hit list for you to
[08:55] bring in people like detox old man Jody
[08:57] Morgan Blasphemous and Xperia so they're
[09:00] all going to be haunted next up
[09:02] so
[09:04] this is the starry string sorry I'm
[09:07] laughing my own jokes
[09:09] always
[09:10] there's my story string now after this I
[09:13] have to create a bunch of other strings
[09:15] to do with the actual Mission so this is
[09:17] going to be a bit of typing uh or yeah
[09:19] actually I can take it from my document
[09:22] where I plan some of this
[09:24] so
[09:26] so we've got the title we've got the
[09:27] description so we're going to go through
[09:29] little bits of it so
[09:31] I'm gonna go just kind of go through
[09:34] so we have in in missions you have like
[09:38] a long objective a short objective you
[09:40] have a hood and you have a marker
[09:44] um they
[09:45] all have separate strings because we
[09:47] might want to adapt them in different
[09:48] ways to display different things for the
[09:50] player so what I've done here is I've
[09:51] put um
[09:53] so I've done the subdue and delivered
[09:54] I'm doing the locate part of it so this
[09:56] is before you've you've found them this
[09:57] is finding them this is the HUD section
[10:00] now so what this is is on the top of
[10:02] play screen it will say locate
[10:04] and right now on the screen you'll see a
[10:06] weekly line and it says Mission and
[10:08] brackets Target name it looks very weird
[10:10] but what this is is that is a token and
[10:13] what a token is is that allows us to
[10:14] dynamically pull in data from the live
[10:17] game so this is how we're able to do
[10:19] things like
[10:20] um
[10:22] generate a name randomly as we go along
[10:25] and have it fill in so this would read
[10:26] locate void dude or it could say locate
[10:29] books or it could say locate gabs it
[10:32] could it could say locate Jared like
[10:34] it could pull whatever from our random
[10:36] system
[10:38] um so I'm filling these out these are
[10:40] the long and shorts so the long is the
[10:42] long is what you see in your Moby glass
[10:45] when you pull up your arm the short is
[10:47] what appears when we flash those
[10:48] notifications up to you
[10:51] um cool
[10:52] this one
[10:54] that I'm doing here is an objective
[10:56] setup now this one is specifically for
[10:58] How I build the mission because if I'm
[11:01] thinking about the mission in a theory
[11:03] kind of way and this is how when we
[11:05] build missions we think like this for
[11:06] other designers sakes so I go okay well
[11:09] the missions are subdue and deliver so
[11:11] what is it I've got to go there we've
[11:12] got to enter the location the AI is
[11:14] going to be spawned once I've knocked
[11:16] them out I take them to a location oh
[11:17] that's a delivery module that's the
[11:19] delivery modular system
[11:21] uh so this is a part of the delivery
[11:25] modular system that allows me to take
[11:27] the target's name inject it onto the
[11:28] target so this will basically say when
[11:31] you've knocked void dude out it will say
[11:34] deliver void due to wherever
[11:37] cool
[11:38] um next up we have the uh oh so uh the
[11:43] way that I'm thinking about this is I
[11:44] want to show something cool and new that
[11:46] you guys might not have seen there is a
[11:48] designer on our team called Nick erko
[11:51] who has been working on uh [ __ ] having
[11:54] ships like the 890 jump but all have ai
[11:57] on so we could do things missions of the
[11:59] future where you just have to go and
[12:01] eliminate a certain person on a ship or
[12:04] you've got to go into the ship for some
[12:05] reason we want combat in there so I'm
[12:07] going to be using that so I want to name
[12:10] the ship
[12:11] uh so I'm gonna name the ship all good
[12:13] ships which is just because that's what
[12:15] void dude says
[12:18] next up I need to make a few mushrooms
[12:20] so I'm just going to spam that bun a
[12:21] little bit
[12:23] uh locating subdue right so then these
[12:26] are the next parts so this is the the
[12:27] subdue part of the mission so this is
[12:29] the player has to
[12:31] um
[12:32] this is the general part of the mission
[12:34] sorry this is like the header objective
[12:36] that's going to be go there and take
[12:37] them out
[12:39] again it uses the tokens
[12:42] I'm gonna just drag and drop some of the
[12:44] other ones in there
[12:48] some of this I probably won't be I feel
[12:51] like I should never had dead Ed but some
[12:53] of it's going to be because I'm
[12:54] literally when I'm building this I'm
[12:56] just starting my desk with my headphones
[12:57] on quietly
[12:59] very quietly
[13:03] cool
[13:04] I've already got the time nice so uh I
[13:06] think that might be all the strings I
[13:08] was requiring so I'm going to carry on
[13:11] filling these out
[13:13] so this is again just expanding the
[13:15] story this is locate uh and the and
[13:18] subdue come on Elliot that's meant to be
[13:21] locate and subdue I can't spell uh all
[13:24] right English the target name and
[13:26] deliver their body to the mission
[13:28] destination that's going to dynamically
[13:29] pull in where we send the player
[13:32] and we've got the marker
[13:37] so that is again that's the marker that
[13:40] will be
[13:41] on I don't know wherever I choose to use
[13:44] it it could be on the ship it could be
[13:47] on the AI once you've found it yeah
[13:52] and then
[13:55] so that's the moment okay the target
[13:56] marker so this one is definitely going
[13:58] to be on the air because I've got a
[13:59] Target marker and then Target ship last
[14:02] of all uh that is the
[14:05] marker I believe on the ship that I need
[14:08] yeah I don't want that empty string Okay
[14:10] cool so that's pretty much all the
[14:12] strings so the last thing I need to do
[14:14] is make sure that I can see the strings
[14:16] we have these labels to where we can
[14:20] stay where you can see them
[14:22] um
[14:23] so I'm going to set them to PU
[14:25] and I'd save that and that is my that's
[14:27] my strings done and ready to go so I'm
[14:30] gonna I'm gonna get rid of that now and
[14:31] what does the string get you
[14:33] uh it gets us when we're building the
[14:36] mission it allows it to see a flow of
[14:38] objectives and see if we're giving
[14:39] enough information if we're not giving
[14:40] enough information uh it lets us check
[14:43] that the the sort of the dynamic
[14:45] information that we pass into these
[14:47] strings actually works
[14:49] do things like that yeah basically all
[14:51] the text that's going to show up on
[14:53] screen for people whether it's a Moby
[14:54] glass or their advisor yeah okay
[14:59] just hydrating one second okay
[15:02] next up I am gonna build the missions uh
[15:06] well not the missions the modules so
[15:07] these are pieces of logic uh that will
[15:11] tie together to make the mission now
[15:13] because we try to think modularly I have
[15:17] to think about how I'm gonna do this so
[15:18] because I want to show you the ship
[15:20] thing
[15:21] um an occupied ship we don't have
[15:23] anything to spawn them yet so I'm gonna
[15:25] build one so I'm gonna build it but it's
[15:27] going to be a module and put it in the
[15:28] module folder and that's because it has
[15:30] other use outside of the mission it's
[15:33] it's it isn't a mission on its own it is
[15:35] purely a piece of logic that fulfills a
[15:37] function for us so I'm going to call it
[15:39] Arc you pied ship
[15:42] spawner
[15:44] so then what happens here is I can go
[15:46] from my pony call and says can Jared
[15:49] look any more unprofessional
[15:51] is that a challenge
[15:54] I can try
[15:55] keep going
[15:59] um
[16:00] right free in it okay okay so when
[16:03] you've made a mission you are given in
[16:05] it and in it is
[16:07] um the initialization of the module and
[16:10] the unana is the uninitialization of the
[16:12] module that's basically I've started
[16:14] I've
[16:15] shut down yes
[16:17] but we need to inject one more onto here
[16:20] so I'm going to make a
[16:22] Tree in it
[16:25] a pre in it is the pre-initialization
[16:27] stage this
[16:29] um this is where for example
[16:32] I would uh so when socks came in uh
[16:36] Surfside object container streaming it
[16:38] meant that nothing in the world existed
[16:40] which changed how we built logic because
[16:42] previously everything was streamed in uh
[16:44] so we used to know where everything was
[16:45] you could build the complete opposite
[16:47] end of the thing to a pencil and I knew
[16:49] the pencil was there now I don't know
[16:50] anything exists so I have to tell you to
[16:52] go there so I know it exists
[16:55] um but that means I have to tell my
[16:57] module not to just start up because
[16:59] without pre in it it'll just boot up as
[17:00] soon as you accept it and I don't want
[17:02] that I want it to boot up when certain
[17:04] conditions are fulfilled
[17:07] um
[17:07] so what I'm gonna do is I'm gonna make a
[17:10] input variable so this is going to be
[17:13] passed into the module by myself or a
[17:15] designer and the input is going to be of
[17:17] type Mission data Century this is this
[17:19] replicant replicant this represents our
[17:26] sorry I'm thinking Mom type in there we
[17:28] go this represents like our locations in
[17:30] the world that's the sort of data form
[17:31] we have so I'm gonna throw on a set
[17:34] Module location
[17:36] so this note allows us to tell the pre
[17:40] in it not to fire
[17:42] until the mission location that I pass
[17:45] in has told it each loaded so the
[17:48] mission location has a
[17:49] an like it's assigned to an object
[17:52] container so when that object container
[17:54] is going to have loaded
[17:55] this will then go hey it's all ready for
[17:57] you and I can move forward with it
[18:00] um I'm not going to say to go someplace
[18:01] it doesn't exist yet exactly
[18:04] so what I'm next going to do is I'm
[18:07] going to get that Mission locations
[18:08] object container
[18:10] and I'm going to make a so the
[18:11] difference between these two panels This
[18:13] is
[18:14] um I use the word Global but it's it's
[18:16] it the they like restrict the scope in
[18:18] which you can see variables so this one
[18:20] is the global so the all these variables
[18:22] here for the everything in this column
[18:24] this these variables can be accessed by
[18:27] any of these like Scopes here whereas
[18:30] this is restricted only to the pre in it
[18:32] these are my local variables
[18:34] um so I use these because
[18:37] I will clog up my Global variables if I
[18:39] didn't I don't want them there it's more
[18:41] efficient for me to make these ones that
[18:43] kind of just get like yeated once the
[18:45] whole thing's turned off or has stopped
[18:47] running in this case so I'm going to
[18:49] make a local reference to the location
[18:51] object container
[18:52] and then I'm gonna and then I'm gonna
[18:56] get the object's position
[19:00] um because
[19:02] what what uh what I'm gonna have the
[19:04] designer do is I'm gonna have the
[19:05] designer pass me in the ship that they
[19:08] want to spawn occupied
[19:10] oh pardon me and then I'm gonna spawn
[19:12] spawn it so I need to know the position
[19:16] so I can sort of anchor that as the
[19:18] route of where I'm gonna spawn the AI in
[19:21] these sort of area
[19:22] so I need to find a local positions it's
[19:25] gonna be location pause
[19:27] pause what's called l
[19:30] cool uh underscore L is only so like if
[19:33] I'm if you're not looking here I can
[19:34] tell where the variable scope is set so
[19:36] I can like quickly know if it's used
[19:39] outside of here or not
[19:41] uh request
[19:44] response around position
[19:47] um so this so when I open this this is
[19:49] our quick task selector we also have
[19:53] all of this you can go through and
[19:54] select but I just happen to know the
[19:56] names of the nodes because I use them on
[19:57] a daily basis
[19:59] uh right okay so next up I need to make
[20:03] the data
[20:05] that the designer is going to pass to me
[20:08] or I'm gonna pass to me futureelli is
[20:10] going to pass but also designers when
[20:12] they use this
[20:13] of type spawn description a spawn
[20:15] description is um
[20:17] imagine it like a recipe book it's a
[20:19] recipe book before you bake the cake and
[20:22] put it in the oven it's like all the
[20:24] information that it's going to use to
[20:26] build the cake
[20:28] that's terrible I'm sorry
[20:31] uh you're doing so good I know I listen
[20:35] um you know what it's weird as well
[20:37] because I'm a lead so I have to train
[20:38] people you guys this is what my team get
[20:41] enough to build missions with so
[20:45] cool so occupied ships to spawn so this
[20:49] is gonna be that cookbook I've given
[20:53] um I'm gonna keep saying it you can all
[20:54] deal with it um and I'm gonna then then
[20:57] we have the sort of next thing sorry the
[20:59] the next inputs are the position so
[21:01] that's going to be the root point of
[21:03] where we spawn and then I have a range
[21:04] and a spread range is it takes the point
[21:07] and then it sort of smooth like makes a
[21:10] circle at a certain range that's safe
[21:12] and then spawns it so mid is like
[21:15] 5K and I think point is like directly on
[21:18] it and what it does is it starts at that
[21:20] range so if I specify mid it will start
[21:22] from 5K out of that Circle and start
[21:24] searching for a safe location so it
[21:26] doesn't spawn into collisions and
[21:27] players can't get it and bloody blah
[21:29] blah I'm going to set it to close so
[21:31] it's uh and this way it doesn't always
[21:33] spawn in the exact same spot every
[21:35] single time because that would be
[21:36] incredibly repetitive yes it allows us
[21:38] to definitely
[21:40] get that sort of element of it feeling
[21:42] somewhat fresh every time you go there
[21:44] because if you know where everything is
[21:45] the mission becomes easy
[21:47] next up I need to make a spawn request
[21:51] variable so I'm going to call this
[21:53] occupied ship underscore Sr so a spawn
[21:58] request or this so the the blue the blue
[22:01] input these blue things are inputs and
[22:03] the gray thing is an output so this is
[22:05] going to take this data in and then it's
[22:07] kind of giving me a receipt and it's
[22:09] going
[22:10] um will
[22:11] contact you about your receipt whenever
[22:13] we've done whatever you've asked us to
[22:15] my sorry that's terrible that's even
[22:17] worse
[22:19] um but basically allows us to get these
[22:22] this information back
[22:25] here so I can I can tell sort of if
[22:27] certain things have been fulfilled so
[22:29] for example I'm going to make a on chips
[22:31] Bond and I'm gonna also tidy this up
[22:33] because we don't build stuff like that
[22:36] because it looks horrible uh callbacks
[22:39] gonna put it in this folder thank you
[22:43] cool and then next up I'm gonna build
[22:46] the um so now the ship spawned so I'm
[22:48] like okay cool the ship has spawned uh
[22:50] that's great now I need to actually
[22:52] spawn the air spill on the AI on it so
[22:54] what I'm gonna do is I want to check to
[22:56] see if this is the initial spawn of the
[22:59] ship which is this thing
[23:01] um
[23:02] and then if it is the initial spawn of
[23:05] the ship I want to do a lot of sell but
[23:06] I don't want to do it every time because
[23:08] we get this call back whenever the ships
[23:10] are streamed back in so if you go away
[23:12] from it the stream ship streams out uh
[23:15] when you come back we need to retell the
[23:17] like
[23:18] say say it's like a bounty so you've got
[23:20] your target Ai and he's got a bunch of
[23:21] mates we have to retell his mates to
[23:23] defend their mate or else they forget
[23:27] um so that's what we have this callback
[23:29] for it's very useful for that sort of
[23:30] stuff next up I'm going to send an event
[23:33] to a mission instance and the mission
[23:36] instance is going to be the parents
[23:41] I find it the parents Mission this is
[23:44] basically because I know this module is
[23:45] going to be called by another module it
[23:48] means that I need to communicate back to
[23:50] that module to tell it when I've done
[23:52] things
[23:53] um so for example I'm gonna jump and get
[23:56] this modular event so we build a bunch
[23:59] of events that um if we if we identify
[24:02] that we're sending
[24:03] um a lot of events and they're always in
[24:06] the same sort of format we'll just use a
[24:07] modular event it's the same as modular
[24:09] Mission it's just for a modular event
[24:12] um and I'm gonna pass in the spawn ship
[24:15] so the spawn ship these are things
[24:16] returned to me so when that callback is
[24:18] fired so hey the ship spawned it will
[24:20] return to me these uh variables filled
[24:24] in so it will give me identifier tags
[24:25] these are tags are placed on the uh the
[24:27] ship so I can identify what is the
[24:29] industrial spawn bowling discussed that
[24:31] the pilot of this ship and the ship
[24:33] itself that has been spawned so next I'm
[24:36] gonna make sure that I send back
[24:38] that information because future Elliot
[24:41] might need it and also the design might
[24:43] need it
[24:44] cool next up I need to find objects in
[24:47] the ship so the ship spawned and now I
[24:49] need to spawn AI on the ship so that
[24:53] means that I need to search the ship for
[24:55] a spawn closet manager this is uh the so
[24:59] we do a lot of searching via tags
[25:00] because it's very efficient and it's not
[25:03] expensive to search
[25:04] uh so I'm going to make a tag search
[25:07] here for the spawn closet
[25:10] spot come on spawn classes of course
[25:12] being where NPC ships or Fighters or
[25:16] whatnot pop into the universe behind a
[25:19] curtain where they can't be seen usually
[25:21] yeah and this one this one specifically
[25:24] is for uh so the ship is gonna have ai
[25:27] on it so this one's gonna grab the ones
[25:29] that are on the ship directly and then
[25:32] tell them to spawn
[25:34] um so the spawn closet system even
[25:36] though it's called spawn closet we don't
[25:38] have to use it like a closet with a door
[25:39] we can also use it for what we call
[25:41] Initial spawns which is when the
[25:43] location is first loaded in and the
[25:45] player isn't there we can populate the
[25:46] mountain about because
[25:48] like if you get to a location and you
[25:51] was to beat the streaming and you just
[25:52] see them all walking out of doors you're
[25:55] gonna be like well hold on so you've
[25:57] just come out because I'm here so it
[25:58] makes me feel more alive if we can have
[26:00] them already out and trying to find
[26:01] their usables and sometimes the curtain
[26:03] is just getting them there before the
[26:05] player yeah exactly
[26:07] next up I'm gonna
[26:09] return the found objects which is going
[26:11] to be the um
[26:13] uh ships
[26:15] manages
[26:17] [Applause]
[26:20] oh my God how much time do I have left I
[26:24] have my um
[26:26] you're doing good sweetie I mean
[26:29] are you a winning son no I'm like barely
[26:31] through the first half you're gonna have
[26:33] to make this a two-part
[26:36] cool uh I'm trying to be fast now uh
[26:40] next up is the loop until this is
[26:42] basically because there's going to be
[26:44] more than one spawn Closet in here
[26:47] um I need to go through each of the
[26:50] spawn closet managers and make sure that
[26:52] I um
[26:54] I I send the request to them so another
[26:56] variable that I need to create for our
[26:58] designers is an input variable again of
[27:01] type spawn descriptions
[27:04] called NPC uh
[27:07] NPCs
[27:09] to
[27:10] populate ships
[27:14] I sometimes you just call it what it is
[27:16] you know there's this too in in when I
[27:20] was when I was in school they taught me
[27:21] two of the hardest things in computer
[27:22] science was cash invalidation and naming
[27:27] conventions
[27:28] and naming conventions is the number one
[27:30] yeah it's the number one
[27:32] um current score yeah we'll do we'll do
[27:35] part two next week
[27:36] I haven't asked Elliot but I'll
[27:37] volunteering for it there we go don't
[27:39] worry about it we'll do it thanks we'll
[27:40] finish up next week we've never done a
[27:42] two-part NCL it's a good one uh
[27:46] any sponsorship yeah so so then I'm
[27:48] going to take the current spawn
[27:49] description that I've popped so popping
[27:50] is like a Pez dispenser I've pulled it
[27:52] out of the Pez machine and I'm gonna use
[27:54] it I'm gonna eat it now
[27:56] so what popping's like yeah
[27:58] just like a peasant yeah Japan spent
[27:59] that's how I describe it
[28:01] have a lot of popping Pez dispensers
[28:03] when you were a kid yeah did you not
[28:05] popping
[28:07] yeah because you pull the thing down it
[28:08] pops out they did not pop up no was it
[28:10] not much oh it's so precious out you
[28:12] have like some automatic fire Pez
[28:14] dispensers well what do they say tomato
[28:16] tomato
[28:18] I don't know what you guys called it I'm
[28:20] English I'm British right so it's
[28:22] tomato
[28:24] yeah
[28:28] anyway
[28:29] um so I'm gonna take the
[28:32] uh the ship spawn closet manager that uh
[28:34] we have here
[28:36] and I am going to then take the
[28:39] current spawn description that I've
[28:41] taken out and then I'm going to make a
[28:43] another look variable because I'm going
[28:45] to make multiple spawn requests here
[28:50] request
[28:52] it's called l
[28:53] [Music]
[28:54] uh so I'm gonna make multiple spawn
[28:57] requests so what I need to do is uh
[28:59] merge them all into one because they can
[29:01] only the information can
[29:03] like this node will over overwrite every
[29:05] time that input so I have to make it
[29:07] local so then I can make the more call
[29:09] back on one so I don't have to make like
[29:11] a thousand callbacks
[29:12] [Music]
[29:13] foreign
[29:15] request
[29:18] this one is going to be called something
[29:20] like NPCs
[29:22] um
[29:23] keep buying
[29:26] ships guys
[29:30] yeah cool so that's the sport that's the
[29:33] spawn request for the NPCs
[29:36] let me check all this is right so I pop
[29:38] them yep I then take the managers
[29:41] and then I pass it in cool right nice
[29:45] nice
[29:46] so this this will spawn it so next up I
[29:49] need to make sure that I know when the
[29:50] NPCs are here so I'm going to right
[29:52] click and get another call back and it's
[29:54] going to be on the spawn closet spawn
[30:00] which is this
[30:01] and essentially all this one's gonna do
[30:03] is send event to Mission instance
[30:08] like that
[30:11] and it's going to send the modular
[30:13] request again of AI spawned because this
[30:15] time it's spawning a
[30:17] [Music]
[30:18] an actual NPC like uh yeah so I'm going
[30:21] to send that straight back to the um the
[30:23] thing then from there that is that's the
[30:26] ship the occupied ship spawner I believe
[30:28] done so that should spawn ship and spawn
[30:31] all the AI on it for me so the next
[30:33] thing I need to do is now actually build
[30:34] the mission I've not been building the
[30:36] mission for the past 30 minutes
[30:39] foreign
[30:43] no no it's it's
[30:46] there's a there's a thing people often
[30:49] wonder you continue to wear all that
[30:50] there's a thing people often wonder why
[30:53] we do a show on this or do a show on
[30:56] that and the number one criteria that I
[30:59] have personally being in year nine as I
[31:03] am here is I ask myself would anyone
[31:07] else do this would BioWare do this as a
[31:10] piece of promotional material would
[31:12] would Activision or or anyone else and
[31:15] if the answer is no I'm instantly
[31:17] intrigued by it which is one of the
[31:20] things I love about one of the many
[31:22] things I love about star citizens I
[31:23] think one of the like the when I see
[31:25] them ever make one they have a highly
[31:27] polished like GUI for their tools and
[31:31] you know they all work flawlessly and
[31:33] it's like we build our tools for what we
[31:35] need now they don't have to look pretty
[31:37] they just have to kind of they don't
[31:38] actually look like the thing that
[31:39] they're showing either it's always been
[31:41] a it's always a manufacturer thing what
[31:42] I liked about what I liked about this
[31:44] this idea of of having you do this is to
[31:47] show we you know we did that we've been
[31:49] talking about the the mission manager
[31:51] and the verbs and all this stuff for
[31:53] years now and I wanted to show that you
[31:56] haven't done any you're not programming
[31:58] here the the this the the the work to
[32:03] this point
[32:04] has been about building a CIS building a
[32:06] modular system that runs through flow
[32:08] graph that runs through all these you
[32:10] know neat tools like Robo Hasty and
[32:12] anything to automate a lot of the
[32:14] programming work so that then we can
[32:15] democratize the process of mission
[32:17] creation to dozens and dozens of other
[32:21] developers so designers who are
[32:23] typically not programmers nope can come
[32:26] in and just focus on being creative once
[32:29] they once they get the the handle the
[32:32] understanding of of a select few verbs
[32:35] they understand the syntax necessary
[32:37] this goes into this this goes into this
[32:39] you know there's a learning curve I'm
[32:40] not going to sit here and say it's not a
[32:41] learning curve we're demonstrating the
[32:43] learning curve here but this is how we
[32:47] scale yeah this is how we go from well
[32:49] you know if it only took if it took you
[32:52] four years to make X number of missions
[32:53] how are you going to make how are you
[32:55] going to populate you know another star
[32:57] system with all these missions now
[32:58] you're going to populate you know 10
[32:59] star systems while he's missing this is
[33:01] how we do it the the the game
[33:03] development is exponent Central it's a
[33:05] lot of the early years are is is in you
[33:08] know building this framework this this
[33:09] groundwork this Foundation any more
[33:12] synonyms I can think of uh this thing
[33:14] under the thing
[33:15] where it allows you to then iterate
[33:19] faster and more efficiently as you go
[33:20] forward and that's one of the reasons
[33:22] we've been telling the story of the
[33:23] mission manager anything over in this
[33:25] assumption over the this last year
[33:28] because it having been here for as long
[33:31] as I have it's exciting I'm starting to
[33:33] feel like we're there I'm starting to
[33:35] feel like we're at that point now where
[33:37] where development can begin to scale up
[33:39] and we can start making things faster
[33:41] than you know we have at any period in
[33:43] the past
[33:44] you know barring things like
[33:48] you know uh long-term persistence I
[33:51] think you know pulling that Foundation
[33:52] out from under us and having to start
[33:53] over but
[33:55] so I've been talking through this we
[33:57] haven't explained this whole part what
[33:58] are we looking at right here uh it
[34:00] doesn't matter it doesn't concern them
[34:01] it doesn't concern them
[34:03] no I am not talking about spaceships
[34:06] Kenny what's a spaceship I don't know
[34:09] never heard of it uh we I've currently
[34:12] survived I've gone in I've started
[34:13] building this you didn't actually drink
[34:14] out of your water oh just open the lid
[34:16] this is my life uh yeah so I've I've
[34:20] started building the main mission so
[34:22] what I've done here is once again I've
[34:23] created a pre in it because the pre in
[34:25] it will stop this from properly like
[34:28] running until the player gets to the
[34:29] location because there's certain things
[34:30] that I need to find when you get there
[34:32] uh so making sure that
[34:36] making sure that you don't
[34:38] that normally loads is pretty vital to
[34:41] the mission actually working uh what I'm
[34:43] doing here is again that's just set that
[34:45] up this is the module I just made this
[34:47] is the occupied ship spawner
[34:49] um and I'm passing in the location it
[34:51] needs to care about the ships I want it
[34:52] to spawn and the NPCs to populate and
[34:55] now I'm so everything you spent the
[34:57] first 20 minutes doing yeah is in that
[34:59] box right there is now in that box and
[35:01] this is how other designers build
[35:02] modular missions is I build a lot of
[35:04] these and then they just do that and
[35:07] plug plug everything in and then my
[35:09] stuff just
[35:10] kind of just does a lot of heavy lifting
[35:12] for them so they don't have to worry
[35:14] uh I'll worry about it so so do you I
[35:18] can't spell subdue so you know I know
[35:20] you're the one who tries to college
[35:22] today yeah I know but it's like you say
[35:25] it makes sense to be called that it
[35:26] doesn't mean I can spell it
[35:28] subdue tag it okay cool so this is going
[35:31] to create an objective that the player
[35:33] can see
[35:34] then I'm gonna actually Mark some things
[35:37] to the play knows where to go
[35:41] and I'm going to use the location
[35:43] obviously I put here so it's actually
[35:44] just on the location so what I'm doing
[35:47] is I'm going on to my Star Wars tool and
[35:50] I'm grabbing the strings that we that we
[35:53] that way you didn't do any of this is me
[35:55] that I've made uh
[36:00] that I've made here there we go and I'm
[36:03] putting in so I'm gonna I'm gonna so
[36:05] then we have some sort of extra options
[36:06] on some of these like nodes so I'm gonna
[36:08] display the distance here to make sure
[36:11] you know just how far you're going and
[36:13] it's not just a marker though in space
[36:17] um
[36:17] yep so I'm gonna do that and then I'm
[36:19] gonna do a set subjective this oh my God
[36:22] type display disk
[36:25] I can't spell what do you mean Jared has
[36:28] been coding this whole time I'm checking
[36:29] his work
[36:31] it's called the buddy system
[36:34] all the rubber duck there's this thing
[36:36] in programming where
[36:37] um if you can't figure your logic out
[36:39] you talk to a rubber dusk duck on your
[36:41] desk and vocalizing out loud it'll help
[36:43] you solve your problem
[36:44] so you remember rubber duck I call that
[36:46] David
[36:48] you know what mine's called David as
[36:50] well
[36:55] you've made me let me try to follow
[36:56] David
[36:59] uh objectively okay so next up to the
[37:02] objective display is a fancy word for
[37:04] saying hood uh so this is what's going
[37:06] to display on your hood there you go and
[37:09] I am going to also make it managed per
[37:14] player so I don't always want to show
[37:15] the hood I might want to control it next
[37:19] up I'm going to create a oh my God a
[37:22] sub-objective
[37:24] so a sub-objective is going to parent to
[37:27] the objective I've just made boom
[37:30] and this one's going to be
[37:31] called locate probably objective
[37:36] or Target ship location it's got OB
[37:40] J cool
[37:44] this one is going to be hidden from you
[37:46] because I don't want you to see it until
[37:47] you get to the location
[37:49] and I'm going to take the long string
[37:52] that we built that we built stop they
[37:54] didn't do anything earlier I did
[37:56] short
[37:57] so locate shot among and then I need to
[38:01] make another mission objective display
[38:02] but I'm lazy so I'm not going to retake
[38:04] the node and I'm just going to take this
[38:05] one from above
[38:06] and I'm going to get the hood for locate
[38:11] and do that with it however this one I
[38:15] need to not respect its inherited
[38:17] visibility what that means is that
[38:18] because this is parented to this and
[38:20] this is uh
[38:23] this is not hidden but this one is this
[38:26] display would likely not show unless
[38:30] both of these were visible so I'm going
[38:31] to tell it not to respect its parents
[38:34] and just go off the rails and do what I
[38:35] tell it to
[38:38] uh cool
[38:40] uh next stop
[38:42] just play four players cool and next up
[38:44] I'm going to show are the objective
[38:46] display for one of these for the players
[38:47] because I want them to see this one
[38:50] so this is going to be the target ship
[38:52] location because again I'm managing it
[38:53] per player but I'm also telling it not
[38:55] to respect by default it's going to be
[38:57] off so I need to tell it to be on for
[39:00] All Mission players and we have things
[39:02] called Magic variables uh and that just
[39:05] means that I type them in and as long as
[39:07] I spell it right uh code links it up
[39:10] which I spelled it wrong instantly it's
[39:11] Mission players
[39:13] how many how many bugs do you think are
[39:15] attributed just to typos
[39:18] when it's me quite a review
[39:21] I do it all the time I'm really bad at
[39:23] it
[39:24] but we tried it we try to when we
[39:26] identify this somewhere that you can
[39:27] type stuff in we try to fix it because
[39:29] we know it's not a good way of of like
[39:31] handling this sort of stuff
[39:37] uh cool right
[39:41] nice so that is
[39:44] that's that's the um
[39:47] that's that's the first part sorry
[39:49] that's the first part
[39:51] that's the second first part that's the
[39:53] second first part next up I need to get
[39:55] a reference to the action area where I'm
[39:56] going to spawn them so I'm gonna do a uh
[39:59] well first I need to filter the action
[40:01] area
[40:01] uh set
[40:03] come on let's set action area filter
[40:05] pull pull
[40:07] this uh this node so action area filter
[40:10] exists for a reason
[40:12] and it's because an action area is a
[40:15] volume in anywhere that will detect when
[40:17] things have overlapped with it um
[40:22] and the issue that we used to have and
[40:24] again this is it was like hey there's a
[40:25] problem here and then sort of fixing it
[40:27] the issue we used to have is that um we
[40:30] could detect everything when I was
[40:31] building Siege of horizon I used to
[40:33] crash because my action area detected a
[40:35] sprig of mint that was on the
[40:36] bartender's drink and to my action area
[40:39] um so this filter thing I've requested
[40:42] quite heavily and we got it so that I
[40:44] can make sure that mint doesn't enter my
[40:46] action area and break my game
[40:49] um
[40:49] so I'm gonna filter for anything that's
[40:52] human controlled which means that I
[40:54] control it you control it if you who is
[40:57] watching is a human
[40:59] get some Epson chat for sprig of mint
[41:05] um Mission area so now I need to get the
[41:08] mission location action area so I
[41:09] filtered it so I have to filter it
[41:10] before I get it or else the filter
[41:12] doesn't apply so I've filtered it and
[41:15] now I've got got it so it's gonna
[41:18] um get it we've now got all the [ __ ]
[41:19] arrows
[41:21] no
[41:22] um
[41:23] yeah so that will now filter down my
[41:26] action area which now means I get to
[41:28] make how much force you might have got
[41:29] 20 minutes left my god
[41:31] um all right we'll come back next week
[41:33] good afternoon yeah
[41:35] um so now I need to
[41:38] wonderful thing about scl
[41:40] said it never ends there's always
[41:43] another Friday
[41:45] it's always another Friday I have to
[41:46] fill Elliot
[41:49] I have to make missions which one of us
[41:51] in the worst boat
[41:53] yours your videos work they go out
[41:57] South burn those are rare
[41:59] I
[42:01] want to say something so badly
[42:05] okay uh
[42:07] uh right so I'm making the action area
[42:09] call back for on entered and iron exit
[42:12] for again human controlled things which
[42:14] is good but I still need to do a form of
[42:16] filtering so
[42:17] um
[42:19] on exit I'm going to tell the player to
[42:23] come back to the area however I'm going
[42:26] to I don't want to tell them to come
[42:28] back if the target's already been found
[42:29] because if the target's found they might
[42:30] as well just always have that marker
[42:32] because they're always going to know
[42:33] that information
[42:35] um so I need to make a entity tracker
[42:39] which where I will use a valid callback
[42:42] to know if the target's in here so this
[42:43] is going to be called
[42:45] um
[42:45] Target
[42:47] cup
[42:50] isn't tracker empty so this is me
[42:52] checking to see if the target has been
[42:55] put in this variable
[42:56] and then I'm going to check to see if
[42:58] the person who's come in here is a
[43:00] mission player so um
[43:02] if it is empty and the entered exited
[43:06] person the person who's left
[43:07] then I'm gonna add them back to an
[43:11] objective marker so I'm going to add
[43:13] them back the extra density to the
[43:17] subdue Target marker so that will be the
[43:19] marker that's like in the search area
[43:23] who then when they come back in the area
[43:26] actually so I don't have to retype I'm
[43:28] just going to copy these two notes
[43:31] so when they come back in the area I'm
[43:33] going to make sure that the the target
[43:36] once again is valid and then I'm gonna
[43:38] do a bunch cleanup so remove
[43:42] objective marker
[43:45] move object where's my node remove I bet
[43:48] it's remove player from yeah it is cool
[43:52] uh so this is gonna remove because
[43:54] because they might have I mean even if
[43:56] they've exited to come back I always
[43:57] need to make sure that this doesn't
[43:59] exist on them this marker so I'm going
[44:01] to remove it I'm also then going to show
[44:04] objective display for players
[44:08] this is going to turn HUD on so I'm
[44:10] going to put the subdue one on for the
[44:13] entered entity so the person no I'm
[44:15] going to turn this one off because this
[44:16] is the one that's already on their
[44:18] screen yes yes yes yes
[44:20] uh G Kenny says Jared can you do a nice
[44:23] ASC about uh issue Council uh we did
[44:28] it was super popular
[44:30] everybody was really happy with it
[44:34] and and and the comments were really
[44:37] positive
[44:44] foreign
[44:52] objective
[44:56] um the one that's the locate because
[44:57] you're in the area now so you need to
[45:00] find them again this is only if the
[45:02] target hasn't already been found unless
[45:03] you want that attack track so I am going
[45:06] to check the Target location and do that
[45:09] for the incident to see true true if
[45:10] you're there by far and that's all cool
[45:12] so this is gonna play against it the
[45:14] market to go there goes away the hood
[45:16] that was there goes away and it comes up
[45:18] with locate and then it will
[45:21] show the objective in the mobile glass
[45:23] as well so you'll see a locate locate
[45:26] void dude and then kill him
[45:28] next up is an event so this event is one
[45:31] that's going to be that I've sent so if
[45:33] you remember I talked about those
[45:34] modular events in my other module that's
[45:36] I'm gonna register here and listen for
[45:38] it because you have to listen to them or
[45:40] else they can just get sent into the
[45:42] void and you never hear them
[45:43] uh oh my whatever I put the modular
[45:47] they're all over modular events Marshall
[45:51] events where's Mission modules Mission
[45:53] modules module emissions my God my
[45:55] naming thing is horrible modular events
[45:58] uh AI spawn aiming conventions
[46:02] they have undone so many aspects of many
[46:06] many games over the years
[46:10] I like I would I would wager that
[46:13] most
[46:16] many I don't know the most but a not
[46:19] insignificant number of AAA games have
[46:21] had naming convention revamps during the
[46:24] course of their during the course of
[46:26] their development just this okay we got
[46:27] it we got to fix this like we were
[46:29] naming it it worked when the game was
[46:31] this big and now the game's this big and
[46:33] we've gotta we've got a we've got to
[46:34] completely redo the the structure and
[46:36] then some technical director leaves and
[46:39] somebody else comes in and goes oh this
[46:40] naming convention is garbage and they
[46:42] have to go through and they redo it
[46:43] again
[46:44] naming conventions are
[46:47] I have many traumas in my life yeah
[46:49] naming conventions are one of them you
[46:51] want to know the what I mean apart from
[46:53] naming professional worst thing I've
[46:54] done is not linked a node like that and
[46:57] then booted the game and then like
[46:59] waited for its boot got in and then been
[47:02] like I didn't link my nodes yes that's
[47:05] even worse now I wanna I wanna stress
[47:08] that the reason that is so bad like oh
[47:10] well that doesn't seem so bad it's
[47:12] because in its raw state in the Raw
[47:15] state where you know you're not on the
[47:17] you know the big servers anything it
[47:19] takes about 20 to 30 minutes to boot a
[47:22] local version of the server and client
[47:24] so when you have done this part and then
[47:28] you go to boot your local to see to see
[47:30] if it's working to the point and you
[47:32] realize you've wasted that 20 to 30
[47:34] minutes you were waiting
[47:36] because of a single line missing
[47:39] that's why that's so tragic yeah and the
[47:41] worst part is if you pull like your lead
[47:42] coder over because it isn't working
[47:44] you've not noticed that line maybe
[47:46] because you like zoomed all the way out
[47:47] and the lines are like tiny and you're
[47:48] showing it over a bit logic he's like
[47:50] well you didn't you didn't we'll start
[47:51] over then you screw Zoom all the way in
[47:53] and he's like ah and you're like ah
[47:55] thanks Dave one little tiny line one
[47:58] little control One Mono quarter inch
[48:02] audio cable
[48:06] um so next up
[48:08] I am going to set up
[48:12] um the object the objective marker
[48:14] that's on the ship however because of
[48:16] the whole thing where I want it to be
[48:18] scanned for I'm gonna make this
[48:20] objective Market exist but don't know
[48:22] but like not truly exist because I give
[48:23] it a null item it means that you won't
[48:26] see it in game
[48:29] um until I tell it to show and I'm going
[48:31] to tell it to show
[48:33] after uh after you found it so this is
[48:36] again going back to the modules we build
[48:38] I'm going to place another one down here
[48:40] uh that is called find object battery
[48:43] radar another one we've built which
[48:45] basically you pass in the ship that you
[48:47] care about so the AI spawned you pass in
[48:49] the objective that has the marker on it
[48:51] because it will turn it on for you and I
[48:53] just leave this to true so what this
[48:54] will do is it will detect every way you
[48:56] can find a ship via Radar Now everywhere
[48:58] you can find a ship via a radar is
[49:00] passive scan which is it just pops up on
[49:02] your little radar on your ship there's
[49:05] something called blob and then there's
[49:07] actual actual scanning
[49:09] um cool
[49:10] so uh
[49:18] [Music]
[49:23] show objective
[49:26] so then okay cool right nice so next
[49:29] thing I I'm doing here is I am just
[49:31] making sure that the objective is is
[49:35] definitely existing for the mission
[49:36] place
[49:39] um in case there's been any way you can
[49:41] sort of get around it which is that so
[49:43] uh what what you saw missed here was I
[49:45] am checking the AI spond and I'm
[49:47] checking to see if it has a tag of ship
[49:49] because then I know that the thing has
[49:51] spawned is a ship because if you
[49:52] remember when I built the module I used
[49:54] the modular AI spawn for both the ship
[49:56] and the NPCs so um
[50:01] so that's why I've done that so I can
[50:03] filter it because then I know if it's
[50:05] not a ship and the only other thing it
[50:06] could be is the is an actual like NPC AI
[50:10] That's on board it
[50:12] so I'm going to build another separate
[50:14] entity tracker here which is going to do
[50:16] a um
[50:18] like a global sort of collect so this is
[50:21] going to be um
[50:23] all occupiers
[50:26] so this is going to track all of them
[50:28] and then I'm going to do something
[50:30] called compare
[50:32] um
[50:33] a compared bullion and I'm going to
[50:35] check for a bullying that I'm going to
[50:37] make which is kind of going into that
[50:39] like how do all the designers use this
[50:41] how are they going to pass all this
[50:42] information I've got 10 minutes left
[50:45] um how are they going to track all this
[50:47] information oh
[50:48] thank you don't worry about the 10
[50:50] minutes
[50:51] um yeah how are they going to track all
[50:53] this information like how are they going
[50:54] to pass it in how they're going to tell
[50:55] me what they want
[50:57] um
[50:59] and this is this is sort of pre-prepping
[51:01] for what I know in my mind I'm going to
[51:03] give them to wise so I'm going to do a
[51:05] thing where I detect if they've given me
[51:06] a Target tag which means they've they've
[51:08] said this specific AI I want to be the
[51:10] target
[51:12] um compared to say grab random
[51:15] um
[51:18] it's different when you have to talk
[51:19] through the entire thing isn't it yeah
[51:21] yeah it's a lot quicker when I don't
[51:22] have to tell anyone what I'm doing
[51:24] um
[51:25] but this is fun right we're all having
[51:28] fun no I'm I'm very happy I'm very happy
[51:31] this is exactly what I had hoped that
[51:33] stream would be that you're doing a good
[51:34] job hey
[51:36] uh so the next thing I'm doing is I'm
[51:39] checking that thing that I give the
[51:40] designers power to so I checked to see
[51:42] if an identifier tag which is what a
[51:44] designer can set has the tag of targets
[51:46] then I know that they've specifically
[51:48] given me a Target which is this stuff so
[51:50] what's going to happen is every AI that
[51:52] spawns is going to pass through here and
[51:53] it's going to constantly go through and
[51:54] if this has been set to true it's gonna
[51:57] check every single one of them is this
[51:59] got the identifier tag of Target and
[52:01] then if it has
[52:05] and then if it has that's where I can
[52:09] sorry one second that's where I can go
[52:12] through and make sure that I pass the
[52:14] correct
[52:16] AI into the mission
[52:18] so uh Adams is to not proximity tracker
[52:22] it's gone I've lost my node
[52:24] you know what I haven't lost this right
[52:25] there
[52:27] friendship is still the best ship in
[52:29] Star Citizen
[52:32] hear that John crew
[52:39] it's friendship you know I got murdered
[52:41] by dark law on live he just murdered me
[52:43] and I checked his stream and he was just
[52:44] sat there like this
[52:46] like it was the easiest thing ever and
[52:48] he killed an entire Sig Dev team and
[52:51] just like then what like walked away
[52:53] third floor is pretty good though
[52:55] player or morally no what player okay
[52:59] not morally because then we popped in
[53:02] his channels like you know you just
[53:03] killed me and I'm I'm not gonna try a
[53:04] Scottish accent or whatever but he was
[53:06] like I didn't know
[53:10] dark law you're a jerk
[53:13] and you can clip that and use it on your
[53:15] stream
[53:17] cool
[53:19] right uh so I'm going to set an object
[53:20] so I've I've added the target which the
[53:23] air spawn to the Target list and now I'm
[53:25] going to make a variable uh to also
[53:27] store the target as an object and Target
[53:29] oh
[53:31] voila
[53:33] and then I am likely going to also
[53:36] convert I think the target to
[53:41] no yeah I'll do that yeah
[53:44] yeah yeah cool yeah yeah sorry I'm
[53:48] trying to think through what I'm doing
[53:49] so
[53:51] next up knocked out so
[53:54] if and because it's subdue it means that
[53:57] I need to track if they've been it's not
[53:59] without some dude
[54:01] uh I'm gonna make a call back on the
[54:04] entity tracker and that's because right
[54:06] now the only way to subdue somebody is
[54:07] to knock them out we don't have that
[54:09] exactly the additional Bounty Hunter
[54:10] stuff put them in stasis or put
[54:12] handcuffs on them stuff like that yeah
[54:14] so one of the challenges of making
[54:16] missions for a game that's still in
[54:18] active development is you know you make
[54:20] them for the tools and features that are
[54:22] available now
[54:24] yes we will yeah
[54:26] it's uh sometimes it's like you're
[54:28] shoehorning things in and sometimes you
[54:31] most of the time it's you're always just
[54:32] trying to get that feeling for what it's
[54:34] going to end up like because you want it
[54:36] to you want it to play as close as it
[54:38] can
[54:39] and then fix up when it comes to later
[54:42] um so
[54:45] uh so admission so what I'm doing here
[54:47] is that you've knocked the target out so
[54:49] void dude had a tag it on him to tell
[54:50] you to go knock him out uh so now I need
[54:52] to remove that marker because the
[54:54] delivery marker is going to take over
[54:55] and um
[54:57] tell you to go deliver the guy right you
[54:59] don't want to still have a fine boy do
[55:01] Marker exactly and they're knocked out
[55:03] in your ship uh and then what I'm doing
[55:05] here is I'm adding the mission as the
[55:07] owner of void dude because uh we have we
[55:10] have a lot of cleanup things in our game
[55:11] so obviously
[55:12] clean [ __ ] out the world that doesn't
[55:14] need to exist
[55:15] um and when you kill an AI it does that
[55:18] and if you was to leave the area the AI
[55:20] should be cleaned up
[55:22] um but because this is a mission
[55:23] critical item we don't want void to be
[55:25] cleaned up we want him to stay
[55:27] uh so next up again another module the
[55:30] this is one of the delivery modules that
[55:32] I think was about
[55:33] 20 minutes into that run I did on the
[55:36] ISC about 20 minutes into the version
[55:38] they saw true and the version I had to
[55:40] sit through was like 45.
[55:42] what can I say I like what I do
[55:46] you know it's it's
[55:49] despite what's his name whoever was I
[55:51] don't remember now you know uh
[55:56] these shows the the reason I can sit
[55:58] back the reason I can I can literally
[56:01] kick back and put my feet up
[56:03] my VHS shoes and why not is because
[56:07] Elliot is one of those people
[56:09] that I trust implicitly he's proven
[56:13] himself
[56:14] time and time again he knows his stuff
[56:17] uh not not spelling but this isn't this
[56:20] isn't a spelling bee here
[56:22] um and I don't have to hold his hand I
[56:24] don't have to guide him through the
[56:26] conversation through anything else I can
[56:28] just sit here and I can let him steer
[56:30] the ship which is nice every once in a
[56:31] while hey y'all
[56:37] I just say nice things about people it
[56:40] happens
[56:42] I could feel the heat radiating from
[56:44] over there just saying nice things Jared
[56:47] said didn't say nice things
[56:50] so uh what I've done here I've just
[56:52] filled in some of the nodes that I need
[56:53] to fill in on the delivery uh module
[56:55] that I'm going to call and I'm doing a
[56:57] thing called stop proximity tracker
[56:58] because I want when you go to the ship
[57:01] the issue is well the issue that I see
[57:04] which is that whole imperfect situation
[57:06] that exists is you'll know where they
[57:10] are roughly so you can kind of guess
[57:11] what floor to go to and that makes for a
[57:14] makes for the experience that I don't
[57:16] want you to have I don't want you to
[57:17] know and go straight to them because
[57:19] that's boring I want it to be somewhat
[57:20] of a challenge for you because you've
[57:22] got brains right you can think for
[57:23] yourself so find them use your eyes
[57:27] wait the views and opinions of La Maltby
[57:29] do not represent those of cloud Imperium
[57:31] games or what what
[57:33] uh
[57:36] I'm just a designer a games designer I
[57:39] clicked controllers uh Jared just said
[57:42] all the other developers are incompetent
[57:43] no
[57:44] I said being able to
[57:48] communicate effectively on a live TV
[57:51] show without your head exploding from
[57:53] anxiety and brain detritus it's not a
[57:57] skill that every human being in the
[57:58] world has
[57:59] I barely have it
[58:01] there was such and go there for a little
[58:03] while
[58:04] towards the beginning like there's
[58:06] there's a moment about like seven
[58:07] minutes in we're at Eva it happens is
[58:11] that why you held my heart yes so now
[58:13] you know how nervous because you felt
[58:14] the sweat I felt it I felt this way
[58:18] [Applause]
[58:19] so uh what I've just done quickly here
[58:21] is I've made a modular so that we have
[58:24] this event called the modular Mission
[58:26] objective event and this is basically
[58:28] have has this module I've built
[58:30] completed its core objective so in this
[58:33] case this is going to be the delivery
[58:34] objective calling back telling me it's
[58:37] done so I'm gonna check just to make
[58:38] sure the players completed it and then
[58:40] after that I'm going to complete the
[58:41] mission because you've done your work
[58:42] there that's it right
[58:44] uh
[58:45] [Music]
[58:47] uh complete nice good easy real easy one
[58:50] next up uh we have the ship so uh the
[58:54] ship spawned we have a ship I've
[58:55] converted it to a ship reference purely
[58:56] so I can get this call back which is on
[58:59] object centered this allows me to know
[59:02] when you the player has entered uh the
[59:05] ship and then from here I can do that do
[59:10] the thing where I take all your markers
[59:11] away
[59:13] and um
[59:15] like let you use your eyes to go and
[59:18] hunt for them however I'll give you that
[59:19] hand of the proximity tracker
[59:22] um
[59:23] to sort of guide you through
[59:27] it's a place to remove
[59:29] entered person nice and I'm going to
[59:32] remove you from the target ship location
[59:33] set mission
[59:37] objective display so now I'm gonna put
[59:40] on an objective display which is telling
[59:42] you to
[59:43] subdue uh void dude uh yep so I need to
[59:48] find my string for it give me two
[59:50] seconds which is this boom so this is
[59:53] going to say like locate and subdue
[59:56] um Target name which would then
[59:57] dynamically resolve to avoid dude
[1:00:00] take my Scented Markers away
[1:00:03] when I was in grade school we had a we
[1:00:05] had a
[1:00:06] we had a pencil machine you put a
[1:00:08] quarter in you turn it and give you two
[1:00:10] pencils and the pencil smelled and they
[1:00:12] smelled like different things like fruit
[1:00:14] smells you had to pay for pencils
[1:00:18] it's a different time it's capitalism I
[1:00:21] was just when pencils was just invented
[1:00:23] chalkboards before right
[1:00:27] I'm a bit old but not that old you won't
[1:00:31] be seeing me on the next SEO no
[1:00:34] yeah come back and finish this you come
[1:00:37] back finish this then we gotta play it
[1:00:38] and see how well you did oh God
[1:00:41] somebody remembers the smelly pencils
[1:00:43] right it's not just me
[1:00:47] uh let's see
[1:00:50] all right well actually
[1:00:53] we're at about five o'clock so where's a
[1:00:56] good place to wrap this up I literally
[1:00:57] after I finish this now done all right
[1:00:59] so what did we just do where are we at
[1:01:00] now so I've you're on so when you get to
[1:01:03] the ship now I am going to take away the
[1:01:06] markers I'm gonna put a hood display
[1:01:08] that says uh please find
[1:01:11] um
[1:01:12] to subdue him and then I'm going to
[1:01:14] start a proximity tracker the proximity
[1:01:16] tracker is just how close am I to them
[1:01:18] so when you within 10 meters I'll mark
[1:01:21] them
[1:01:22] um and this can be played with so like
[1:01:23] if 10 minutes isn't right I'll open to
[1:01:25] 15 so on and so forth
[1:01:27] um and then there's a bunch of next
[1:01:29] steps after this but we're nearly there
[1:01:31] yeah so what so what we'll do what are
[1:01:33] you doing next Friday
[1:01:37] Akin uh hopefully hopefully from
[1:01:39] Manchester I'm off home for uh for a few
[1:01:41] days but we'll have to work that out all
[1:01:43] right so let's we'll see if we do next
[1:01:45] Friday whatever bring it back and then
[1:01:46] play the mission because I really like
[1:01:48] to get in there and and see this work
[1:01:50] yep yeah yeah same all right meet you
[1:01:53] over that camera
[1:01:54] hi everybody so that's been Star Citizen
[1:01:58] LIVE Game Dev Mission maker uh I'm not
[1:02:01] the mission maker he's the mission maker
[1:02:02] that was Elliot a good job man it's
[1:02:04] we've been doing Game Dev shows for six
[1:02:07] years or so now we've never actually you
[1:02:11] know it's impossible to make anything
[1:02:12] for Star Citizen in an hour yeah uh but
[1:02:15] I think it's always important to
[1:02:17] demonstrate process to show uh
[1:02:19] especially this the big victory of of
[1:02:22] this system is that it has opened the
[1:02:25] process of making missions to people
[1:02:27] other than programmers you know there's
[1:02:29] this there's this perception there's
[1:02:31] this mentality that you have to be a
[1:02:32] programmer in order to make games yeah
[1:02:34] you don't no certain aspects of it sure
[1:02:36] yes but you know part of the game
[1:02:38] development is making these tools making
[1:02:39] making subsumption making Robo Hesse
[1:02:43] making you know making Star Wars so that
[1:02:45] uh just you know other people who can
[1:02:48] unders who can follow instructions and
[1:02:49] can and can learn syntax yeah uh
[1:02:52] understand you know it can build these
[1:02:54] things and that's how we scale up to the
[1:02:57] uh to the big immersive Precision
[1:02:59] Universe yeah yeah uh
[1:03:02] before we go
[1:03:04] we're gonna raid somebody uh we haven't
[1:03:08] rated anybody in a while uh CLX which is
[1:03:10] a maker of custom PCS are actually
[1:03:14] um in the process if I'm not mistaken
[1:03:15] they should be live now are are
[1:03:18] currently building a PC for atmo Esports
[1:03:21] which is you know one of the Esports
[1:03:23] organizations in the in the Star Citizen
[1:03:25] Universe uh they're going to be on with
[1:03:27] our own uh Jake uh let me check the name
[1:03:31] Jake Bradley who is apparently somebody
[1:03:34] who works here he is on that stream
[1:03:38] um say hi say hi to Jake
[1:03:41] um hi Jake and uh yeah take care
[1:03:44] everybody we'll see you here next week
[1:03:45] bye

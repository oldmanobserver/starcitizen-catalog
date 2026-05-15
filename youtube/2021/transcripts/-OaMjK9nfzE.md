# Star Citizen Live Gamedev: Building NPC Behaviors

**Video:** https://www.youtube.com/watch?v=-OaMjK9nfzE
**Date:** 2021-05-28
**Duration:** 1:09:45

## Transcript

[00:03] hi
[00:03] everybody welcome to another edition of
[00:06] star citizen live
[00:07] game dev building npc behaviors i'm your
[00:11] host jared huckabee
[00:12] and if you've never seen star citizen
[00:14] live before it's where we take about an
[00:15] hour out of the end of our week
[00:16] uh hang out with some of our esteemed
[00:20] cloud imperium games developers uh
[00:22] either answer some questions do a little
[00:24] back and forth sometimes we
[00:26] take a look at what they're working on
[00:27] today we are doing something that we've
[00:30] never done in the seven years i've been
[00:33] doing this
[00:34] for for cig we are going to look at the
[00:37] actual process
[00:38] of creating npc behaviors and to do that
[00:42] we are going to first uh introduce
[00:44] ourselves to some of our
[00:45] ai team folks uh fran uh because you've
[00:49] been on the show before we'll start with
[00:50] you
[00:51] uh who are you and what do you do for
[00:53] star citizen
[00:54] sounds good so uh hi everybody my name
[00:56] is francesco cucci
[00:58] and i'm the eye director in cali
[01:00] imperium games so
[01:01] yeah well i try to supervise all the eye
[01:04] development
[01:05] and you know help everybody with the
[01:07] with the proper planning
[01:09] you know the proper development of
[01:11] architecture
[01:12] and yeah support everybody in the
[01:14] behavior you know creation as well
[01:16] let me see that shirt you're wearing
[01:19] what's art let me see that shirt you're
[01:20] wearing
[01:22] so this is a very nice version of the
[01:25] spacing better game
[01:27] see with vincent so this is a tart how
[01:30] do you pronounce it jared
[01:32] targ in english target
[01:35] tar tardigrade tardigrade exactly i can
[01:38] never pronounce it correctly
[01:40] in english italia would be though
[01:43] all right uh we'll go we'll go clockwise
[01:46] around uh dan who are you
[01:47] and what do you do for star citizen hey
[01:49] i'm dan baker i've
[01:51] been working at cig for about four years
[01:53] now i'm one of the game designers here
[01:55] uh currently working on the npc
[01:58] behaviors as
[01:59] you know this this uh this whole stream
[02:02] is about
[02:02] and working on usables and i spent most
[02:04] of my time writing design documents
[02:06] and playing her out with data
[02:09] exciting uh jacob
[02:13] the man with the blurred background what
[02:14] are you trying to hide
[02:16] oh you don't want to know you know i
[02:18] don't know who are you what are you
[02:19] doing
[02:20] i'm jacob i'm a junior ai programmer and
[02:23] i joined here about
[02:24] three months ago uh so it's my first uh
[02:26] like full-time job
[02:28] it's my first job in the games
[02:29] development sort of sector
[02:31] and i basically i work on behavior as
[02:33] well like ai behavior but also like
[02:35] sort of the you know the backbone of it
[02:37] like the implementation and the code and
[02:39] stuff like that so i'm excited to be
[02:40] here what we
[02:42] what you right now seeing already live
[02:44] with the with the
[02:45] pilot security behavior is what jacob
[02:47] has worked on already
[02:48] yeah exactly so if you have any
[02:50] complaints you know
[02:54] no finger pointing and last last but
[02:57] certainly not least hayden who are you
[02:58] and what do you do for star citizen
[03:00] hello i'm hayden mcelroy i'm a junior
[03:03] technical designer
[03:04] and i basically do what dan does just
[03:06] with a little less documentation
[03:10] just a little bit the higher up you go
[03:12] the more documentation you have to do
[03:15] and uh let's go ahead and mention uh
[03:17] idris cedrice was going to join us today
[03:19] but he's having some trouble joining on
[03:20] zoom uh so address you're with us in
[03:23] spirit
[03:25] uh all right so fran this is
[03:28] uh this is your program uh we're all
[03:31] here to peanut gallery and just tell you
[03:33] where you're messing up
[03:34] and what you're doing wrong while you
[03:36] work no pressure i'm fresh
[03:39] once you start us off what is an npc
[03:41] behavior and what are we so
[03:44] sure uh basically i think like all of us
[03:46] here uh work
[03:47] both on you know uh some of us again as
[03:50] programmers work on some of the systems
[03:52] uh we we we define we design and we
[03:54] build implement
[03:56] some others you know as the designers
[03:57] are mostly working with these systems we
[03:59] build
[04:00] and they you know help us building so
[04:02] the behaviors are mostly
[04:04] it's mostly the brain of the npcs right
[04:07] so the way we split the things
[04:09] is we try to build first of all as much
[04:11] as possible it needs to be data-driven
[04:13] to scale up right in this game
[04:14] it's so huge we need to just you know
[04:16] allow the designers and content creators
[04:19] to create content
[04:20] that we use automatically right to patch
[04:22] the game and expand the game
[04:24] and one of the things we want to show
[04:25] today something that me and dan have
[04:27] been working on
[04:28] uh you know since a while and i think we
[04:29] also show some sneak peek during the
[04:32] um mostly during the monthly reports but
[04:35] is the
[04:36] is the engineer behavior as an example
[04:37] of how we build the behavior from
[04:39] basically scratch right so how we define
[04:42] mostly
[04:43] what we want an activity to do because
[04:46] we talk about behaviors in terms of
[04:48] activities
[04:48] usually an activity is kind of a generic
[04:52] kind of representation of a job right it
[04:54] could be the engineering job it could
[04:56] be the pilot security that jacob has
[04:57] worked on or the tourists that aiden has
[04:59] been working on
[05:01] uh something that the npc can do and
[05:03] that you know eventually
[05:05] i'm sure like a lot of people that are
[05:07] watching here they saw the tony's uh
[05:09] tony's video i know that was out this
[05:11] week and you know all these things with
[05:12] the
[05:13] population manager oh address join us um
[05:16] but they say all this uh really cool
[05:19] population manager you know and the
[05:21] visual npc and something else we can
[05:23] basically spawn them
[05:24] in the right context and their context
[05:25] is the activity of what they are they're
[05:27] trying to do
[05:28] and the environment which they are in so
[05:31] yeah basically that is what an uh
[05:33] behavior is and to achieve that you know
[05:35] let's say an engineer
[05:36] you have a lot of pieces that you know
[05:38] we have to take care of that is like
[05:40] building the environment or making sure
[05:42] that the npcs
[05:43] understand the environment as well and
[05:46] you know and then
[05:47] there is the actual decision logic
[05:49] decision flow
[05:51] and what that means is that we try to
[05:53] abstract
[05:54] our like thought process flow it's like
[05:57] oh i want to find something that is
[05:58] broken i want to repair something is
[06:00] broken
[06:00] and then how that basically construct
[06:03] the actual action
[06:05] that they need to perform it tries to be
[06:07] as generic as possible as modular as
[06:08] possible and this is what we
[06:10] see today all right well it sounds like
[06:12] something relatively easy
[06:14] straightforward and should have no
[06:16] trouble doing it within an
[06:17] hour yeah so i'll try i try my best to
[06:21] be fast and not
[06:22] you know because i'm i'm i as
[06:25] a lot of people know i talk a lot so you
[06:28] guys need to try to interrupt me
[06:29] sometimes
[06:30] i just speak too much
[06:33] like months and months worth of work
[06:35] into an hour so
[06:36] yes so we are trying to focus on
[06:38] specific stuff we'll see how much time
[06:40] we have of course we can go more indeed
[06:42] maybe jared you know you can book us for
[06:44] another session after this you know we
[06:46] can go more in detail later hey i got to
[06:47] do this every friday so
[06:50] all right so we've got your screen share
[06:52] up on the uh
[06:53] up on the stream now what what where do
[06:56] we start
[06:57] so we start with this is our engine
[06:59] right so this is i think you know
[07:01] you know been seen in the past but
[07:02] basically this is an empty level just
[07:04] like completely empty this is what we
[07:06] use for testing for development and for
[07:08] actually trying
[07:09] and testing the proper environment so
[07:11] what we do today of course is building a
[07:13] test environment
[07:14] first of all we need a platform where to
[07:16] be because right now if we jump in game
[07:18] we're just floating in space and there
[07:20] is just pretty much nothing
[07:21] uh you know we we can do so we will use
[07:24] what we call designers tool that is like
[07:26] a
[07:27] kind of solid creation tool we can
[07:28] create like a platform
[07:30] uh and the way you know we move around
[07:32] we can build like a
[07:33] different type of uh surfaces now we
[07:36] have an environment where we can place
[07:38] npc now we are still in zerg so if i
[07:40] still jumping game i would still float
[07:42] around
[07:42] so first thing i want to do is add some
[07:44] gravity
[07:45] i will go in the entity panel i will
[07:48] search for
[07:49] what we call the gravity box
[07:52] we drag it in as you see here there are
[07:54] like this little
[07:55] you know this little square is where now
[07:57] gravity is so if i
[07:59] go next to here you know and i will jump
[08:02] in the game i'm here cool so i'm
[08:05] perfectly in the level i can walk around
[08:08] let's take an npc
[08:10] as the company you know is is very
[08:13] complex in the process that we have to
[08:15] create from the character
[08:16] to the behavior so let's say usually
[08:18] what we start is i say we want to then
[08:20] engineer
[08:20] in the in the parallel process we have
[08:23] the character team that creates
[08:25] you know the character like as a the
[08:27] human body and then all the loadouts
[08:28] that the engineer comes
[08:30] uh comes with so in this case we can
[08:32] just grab like one of the
[08:34] engineering uh in uh new babbage i don't
[08:37] know or something like this
[08:38] there are female and male of course uh
[08:41] we can start with
[08:42] you know taking a female but i think i
[08:43] will show you basically the we are in
[08:45] the process of testing
[08:47] uh always like basically we start with
[08:49] some animation this male or female and
[08:50] then we
[08:51] transport that animations to the other
[08:53] type of skeleton rig
[08:54] so some might be you know uh depending
[08:57] on the on the timing which we
[08:59] we're working on that might be more or
[09:01] less polished because of course we want
[09:02] to polish one first and then
[09:04] uh do the retarget we're targeting
[09:07] so first of all now we have this this
[09:09] character and that's what i wanted to
[09:11] show you is basically in each
[09:13] character or each entity in general it
[09:15] depends on the entity type
[09:16] we can configure some instance
[09:18] properties and some are
[09:20] are behavior related right so the
[09:23] one that we can show you here is that
[09:25] this is like is now a sign
[09:26] up here that is called pu engineer or
[09:29] better an activity that is called pure
[09:30] engineering
[09:31] this is the old activity that we have
[09:33] sometimes in po where you see
[09:35] that you're going around you know and
[09:36] use like some work zone
[09:38] and you know weld stuff and and
[09:40] something like this but now we're
[09:41] working on a more complex one
[09:42] and we will definitely start with um
[09:45] with
[09:45] none with a new one we would just create
[09:47] one from scratch so to create one from
[09:49] scratch
[09:50] we will go into a subsumption this is
[09:53] our
[09:54] tool for creating behavior missions uh
[09:58] you know populate environment what we
[10:00] call the object containers where we can
[10:01] create platforms
[10:03] we can define which type of actions the
[10:06] designers have
[10:07] exposed from the coders which type of
[10:09] variable they can use and so on and so
[10:10] on but let's start with one
[10:12] i take my my folder i show i make a new
[10:15] behavior we call it engineer
[10:19] i show this is gonna be the name that we
[10:22] can reference
[10:24] to the inside the engine and we can
[10:26] assign it to here
[10:28] and in general like everything we do
[10:30] here gets live uh
[10:32] hot reloaded so if right now for example
[10:34] we take a sub activity
[10:36] we go we create a generic one that is
[10:38] like
[10:39] if nothing happens if he has nothing to
[10:41] do it just goes into idle
[10:43] we put priorities this is like the
[10:45] number uh
[10:46] in which we evaluate those the sub
[10:48] activities so what are some activities
[10:50] of course
[10:51] some activities as a sort of the way we
[10:54] split the activity into the different
[10:56] things they can do
[10:57] so let's say we have an engineer maybe
[10:59] you have like again an idle sub activity
[11:01] that represents
[11:02] your fallbacks like okay there's nothing
[11:04] to do you're just gonna be there
[11:05] this pretty much should never happen so
[11:07] we'll put it like in a very high
[11:09] or very low uh priority that is a very
[11:12] high number
[11:13] and what we usually tend to do as a
[11:15] first step we just put like
[11:17] these are all the notes all the things
[11:19] that we can put in the logic
[11:21] let's we call one that is called halt
[11:23] halt is pretty much doing nothing it
[11:25] just stays there
[11:26] the behavior runs and it's gonna be
[11:28] there forever so what we're
[11:30] gonna test if this is already working we
[11:33] jump in the game we have this character
[11:35] here
[11:36] if we jump in the game what we can do we
[11:38] can look at the character because it's
[11:40] gonna be a very
[11:41] easy thing to debug and we press on our
[11:43] keyboards we have like the slash on the
[11:45] numpad
[11:46] and basically what we can see is like
[11:48] they will be on screen some information
[11:50] about the behavior
[11:51] here you can see of course that is the
[11:53] the the log but on top you can see the
[11:55] name of the activity this engineering
[11:57] action the one that we just created
[11:59] and the primary subactivity name that is
[12:01] uh staying in idle
[12:02] there is no special variable there is
[12:04] something on the bottom they can see
[12:05] there are continues to run that is like
[12:07] how many seconds the subactivities run
[12:09] or the subactivity
[12:11] start so now we have a really basic
[12:14] things
[12:14] that kind of works of course doesn't do
[12:16] anything um
[12:18] so what we want to do is right now we
[12:20] want to verify if this character can
[12:22] move
[12:22] around because if you come off it's
[12:24] definitely not going to be able to
[12:26] interact with anything
[12:27] what we usually do is that we have this
[12:28] i physics button that allows us to move
[12:30] in the environment but also to interact
[12:33] with the object so right now the
[12:35] behavior is running
[12:36] and we have like a middle click button
[12:38] but if we press around
[12:39] the character should move but we see
[12:40] he's saying it's not really moving
[12:42] so what's going on we didn't put
[12:44] navigation mesh
[12:46] so what's the navigation mesh is the
[12:48] representation of the environment
[12:50] to for the ibc to be able to move around
[12:54] how we do that is we we create a volume
[12:57] pretty much around the environment we
[12:59] can decide if you want to snap
[13:00] to the ground to a grid just right now
[13:03] just put it that
[13:04] we want to keep it on the solid and we
[13:07] just create like
[13:08] uh a square around the character
[13:11] we can move it a bit down we can sync it
[13:13] a little bit more we save
[13:14] so it's good practice save all the time
[13:17] because you know never know if
[13:18] crashes eventually and we get the back
[13:20] like draw like this one
[13:22] as you can see there's this blue like uh
[13:25] square and we can see how it's always
[13:28] implemented a bit more
[13:29] uh sorry here's like a bit
[13:33] out of my screen so if we see this is
[13:35] our
[13:36] console we can see like c bars uh
[13:40] that are like a way for us to control
[13:42] the environment
[13:43] um the backdrop we can put like
[13:46] tree it's usually showing us what how
[13:49] this is represented internally that is
[13:51] like
[13:52] tiles and triangles so the eye usually
[13:55] when it moves around
[13:56] to the environment it creates like a
[13:58] path that is just
[13:59] transitioning through those triangles or
[14:01] through those styles
[14:02] if we middle click now if we run with
[14:05] shift middle click we can make the
[14:07] walk movement and we can test how the
[14:08] locomotion works and with alt
[14:10] we can just make it sprinting and we can
[14:13] just like very easily test you know if
[14:15] the movement is
[14:16] is working as we expect cool so we have
[14:19] like just the basics
[14:21] what do you think jared are clear so far
[14:25] i think we're halfway to our star
[14:27] citizen rts
[14:30] exactly exactly it's recording for new
[14:31] starters we could like
[14:34] it's actually i was thinking to say when
[14:35] i was preparing it
[14:38] oh you have no idea one of the how many
[14:40] how often i get messaged
[14:42] from new employees who are just starting
[14:45] and like
[14:45] hey jared i just want to say hi i'm like
[14:47] i learned about the project from
[14:49] watching your videos and i
[14:50] like i decided you were the place i
[14:52] wanted to work at because of the videos
[14:53] so yeah
[14:54] it is it is helpful to show these tools
[14:57] right because i think sometimes we also
[14:59] like so much deep into development that
[15:01] you know we should just sometimes spend
[15:03] a little bit more time to record those
[15:05] things even internally that that would
[15:06] help a lot
[15:07] uh but it's good to use these things at
[15:09] least it gets you know a bit more
[15:11] broader view and it's always good so now
[15:14] we want to have
[15:15] something to do for this engineer and a
[15:18] way to have something to do is of course
[15:19] defining
[15:20] you know what they should do that is the
[15:22] designer in charge and maybe you can
[15:24] tell us something about what you would
[15:25] like
[15:26] him to do or what usually an engineer
[15:29] does for us
[15:30] uh usually would i guess he would go to
[15:34] something and
[15:35] fix it yes exactly
[15:38] so it is exactly what you know what we
[15:40] what we do that then basically design it
[15:42] in a way which basically the engineer is
[15:43] supposed to
[15:45] of course in our game to get tasks to do
[15:48] and it's usually repair stuff right this
[15:50] is what we want them to do
[15:51] so one thing that yeah sorry i was just
[15:54] going to say like that the key corners
[15:55] we tend to try and find like a key
[15:57] cornerstone of every single behavior
[15:59] like what what is the purpose for having
[16:01] this behavior because otherwise you know
[16:04] there's there's nothing really unique
[16:05] about them and they could just still be
[16:06] running the same behaviors so
[16:08] so with the engineer it's more about
[16:09] well they they can do
[16:11] everything like everybody else like
[16:13] they're you know getting changed
[16:15] into whatever the relevant clothes are
[16:17] or you know finding someone to sit if
[16:18] they need to rest or things like that
[16:20] but
[16:20] but for the engineer it's all about
[16:22] maintaining things
[16:23] you know they their their job is
[16:25] literally to
[16:27] um inspect things to see if they're
[16:29] broken
[16:30] repair things if it's it's an archetype
[16:33] yeah is that the word yeah we basically
[16:37] used like
[16:38] yeah like um we call it activities but
[16:42] yes it is it is a sort of an archetype
[16:44] of you know a job to do
[16:46] and in essence i think what is good is
[16:48] that they actually i think compared to
[16:49] lots of games where
[16:51] i think with like yeah i usually tend to
[16:53] do stuff but it's not really
[16:55] having an impact on anything right what
[16:57] we are trying to be at is something that
[16:58] you know whatever action they do
[17:00] actually has an impact on the game so
[17:02] what we want to show today is i
[17:03] you know imagine we have a wall panel
[17:05] that is split between two different sub
[17:08] elements that we call relay and this
[17:10] relay can have sub components inside
[17:12] that are probably like in our test our
[17:14] fuses
[17:14] these fuses can actually have gameplay
[17:16] impact right and they can break for
[17:18] different reasons
[17:19] then you as a player can go there and
[17:21] replace it
[17:23] if the eye does it has the same exact
[17:25] effect as you know what the player would
[17:26] do
[17:27] so for example if you hire this guy and
[17:29] you want him to be your engineer you're
[17:31] on board of your ship you can then give
[17:33] in command and say like you know what
[17:35] maintain all the wall panels in my ship
[17:38] or you know what i see in my you know
[17:40] map
[17:41] that this wall panel is broken can you
[17:43] repair exactly this one
[17:45] and this is how we are building these
[17:46] behaviors that they are sort of api of
[17:48] interface where you can
[17:50] control them in essence is like designer
[17:53] writing and mission
[17:54] are kind of doing the same as a player
[17:55] would do when they you know give
[17:57] commands to an
[17:58] npc so right now what i prepared just to
[18:01] speed up a little bit
[18:02] uh of course everywhere else on
[18:04] pre-configure in case we don't have some
[18:05] time
[18:06] but the idea is like i have some default
[18:08] object let's say you know art
[18:10] creates for us some objects that we can
[18:12] use as a reference in our case we have
[18:14] three objects that is the wall panel
[18:16] the um actual sub component like that it
[18:19] will be diffuse
[18:20] and the relay so i will show you all of
[18:23] those right now
[18:24] um you know so just just um for anybody
[18:26] else that's watching that relay could be
[18:28] any kind of ship component it could be a
[18:30] quantum drive
[18:31] it could be a shield generator the idea
[18:34] is that you know this
[18:35] the wall panel is supposed to house any
[18:36] of those type of components and it could
[18:38] be in any environment
[18:39] the engineer is is more of a
[18:41] infrastructure
[18:42] um maintenance person versus exact
[18:45] mechanic that is more like you know
[18:48] small ship
[18:49] maintenance so this one basically yeah
[18:52] yeah absolutely and this is like you
[18:53] know one of the examples we used today
[18:55] and
[18:56] you know the the relay for example right
[18:58] now is gonna be done
[18:59] something like this uh sorry
[19:02] entities
[19:06] just prefer something which shows at
[19:08] least i can find them very quickly
[19:10] you know we have something like this and
[19:12] as you see it's like it's a little box
[19:13] you know
[19:14] where with some uh movable parts and
[19:17] inside
[19:18] you can find some three component
[19:21] attached how we do this one probably art
[19:23] already
[19:24] can deliver us like something without
[19:25] the followed outs where
[19:27] you know we can in our for example in
[19:29] this case this is the word panel we
[19:30] attach
[19:31] we have to let me put the word panel as
[19:33] well these people can have like a visual
[19:35] reference to that
[19:36] um
[19:40] basically uh the wall panel template
[19:44] you see you have like two relays
[19:46] attached to a panel
[19:48] and then inside each relay you have
[19:50] three uh sub components and what we want
[19:52] of course is i
[19:53] we don't want to hard code any
[19:55] information like about repairing a
[19:57] specific word panel type was
[19:59] three you know two relay and then three
[20:02] specific um fuses we want this to come
[20:05] from
[20:06] the setup of the object and this is what
[20:08] we will build today so what we'll create
[20:09] right now is those are not usable yet
[20:11] those are just pieces of art
[20:15] we want to make sure these objects
[20:17] become
[20:18] usable spacing so the first thing we
[20:21] will
[20:21] start with is i would say
[20:24] we start with diffuse because it's a bit
[20:27] the simplest one
[20:28] so as you can see we can select things
[20:32] delete and now we will go in data forge
[20:36] and we will open the the fuse we will
[20:39] create a variant
[20:41] that we will configure we call it
[20:43] template show usable
[20:45] we'll make a new version we add
[20:48] right now the usable component what's
[20:50] the usable component i think we speak
[20:52] about this
[20:53] a lot of the times you know about what
[20:55] the usables are in essence a usable
[20:58] is the knowledge that the is
[21:02] about how to interact with that object
[21:05] right so in our case right now
[21:08] we have a fuse and we want to
[21:12] this is an object you can carry so the
[21:14] way right now simply in a simplified way
[21:18] we want to just generalize this as an
[21:20] archetype is that it's a carriable
[21:21] object right
[21:22] so we can take this one we can just
[21:24] select this is a carriable object
[21:27] then what we do is we want to create
[21:30] what we call alignment slot the
[21:32] alignment slot is the position
[21:34] in which you need to be to interact with
[21:36] that object now
[21:38] right now we are not going to care about
[21:40] interacting with this object
[21:42] by itself we will interact with this
[21:44] object through other objects that is the
[21:46] wall panel so
[21:47] in this case we would just create like a
[21:50] generic
[21:50] uh alignments that we call main and we
[21:53] will
[21:54] reference this one as the root
[21:58] the root is really the entity position
[22:00] basically and if we go in here
[22:02] and we track this new object that we
[22:04] just created
[22:09] show usable
[22:14] and now for example with the backdrop
[22:16] usable
[22:17] dot petrol
[22:20] of course nothing goes there because we
[22:22] need to also enable the debug draw for
[22:25] carryable object because otherwise
[22:26] there's just a lot of information here
[22:29] and now
[22:29] you will see there is no lms slot
[22:31] because the image slot alone
[22:33] doesn't doesn't it doesn't do basically
[22:36] any information it's not you can if
[22:37] there is nothing to interact with then
[22:39] there is no point of even showing
[22:40] information
[22:41] so what we'll do right now is also
[22:43] adding what we call u-slot
[22:45] the u-slot to represent sort of a
[22:48] virtual position in space
[22:50] or you know again if it's virtuous
[22:52] visual but it could be a physical
[22:53] position
[22:54] where the interaction actually works in
[22:56] our case it's basically the center of
[22:58] the object so you can
[22:59] interact from a position in that object
[23:01] but no more other like no other people
[23:03] can interact with that at the same time
[23:05] so there is no way to have two people
[23:07] positioning at the same time around this
[23:09] object to interact so you don't have
[23:11] multiple npcs all right trying to fight
[23:13] for everything same time
[23:15] that as well exactly right so we will
[23:17] make like a useless command and we will
[23:20] instantiate which type of use channel we
[23:23] can use on those objects and right now
[23:25] what the
[23:25] the things that we care i think we won't
[23:28] even have time to show them both but
[23:29] let's say we can take this object and
[23:31] repair this object right
[23:33] so if we search here for take we see
[23:35] that we have different type of
[23:36] archetypes of the usable
[23:38] and different action what we want to use
[23:40] is the carryable take
[23:42] in this case and we assign the diamond
[23:45] slot from which
[23:46] you can take it and there we make
[23:49] another one
[23:52] now we basically do repair
[23:56] and then we make this one
[24:00] save go back to the to the level
[24:03] delete we just put it back and now you
[24:05] see you have the bike throw
[24:07] happening right now one thing that we
[24:09] want to extend of course that we don't
[24:10] have it yet is that these type of
[24:12] objects that
[24:13] they are carryable they should have
[24:15] their alignment slot depending on the
[24:17] position of the object
[24:18] but not on the orientation right because
[24:20] the orientation is irrelevant if these
[24:21] things fall
[24:22] you might still need to pick it up from
[24:23] whatever position and this is what we
[24:25] will extend in the next
[24:26] uh quarters but right now let's say we
[24:29] are not planning to interact directly so
[24:31] it's a bit irrelevant cool let's go now
[24:34] to the relay
[24:35] right so we take the relay
[24:38] and we do a similar things create a new
[24:41] variant
[24:43] show usable
[24:47] we make a usable component we assign it
[24:51] so this is for was not super familiar
[24:54] you know with components
[24:55] mostly there is this dichotomy in
[24:57] programming that is about
[24:59] you know inheritance and and and
[25:02] composition approach
[25:03] right so usually most of the things you
[25:06] know are inheriting
[25:07] as a functionality from something else
[25:09] like you might have like a vehicle
[25:10] and then from if you go inherit and you
[25:12] create a car or you know
[25:14] but then what happens is that the things
[25:16] are in a way simpler
[25:17] but a bit more monolithic what we try to
[25:20] do here is that we try to get this
[25:21] responsibility on the component so you
[25:23] can
[25:23] build it out of the composition of this
[25:25] extra functionality together
[25:27] so in this case the relay this could be
[25:30] multiple things as archetypes the way we
[25:32] tend to do is
[25:33] we try to use what we have if we do have
[25:35] something that kind of fits
[25:37] and then if things change we might need
[25:39] to create a new
[25:40] archetypes in this case very much like
[25:43] we we can imagine that we can still
[25:45] carry this relay it's going to be heavy
[25:47] but you know some people might be able
[25:48] to carry maybe with like you know
[25:49] armor suit or whatever then attach it to
[25:51] multiple you know things so it can still
[25:53] be a carryable it might still just be
[25:56] uh i don't know a container type but you
[25:58] know right now we use a carryable
[26:01] just for simplicity and we do something
[26:03] similar uh
[26:04] in this case we make the carryable we
[26:07] create the alignment slot
[26:09] since we are not planning right now to
[26:10] interact with this
[26:12] immediately it is a little bit
[26:14] irrelevant about this one it's mostly
[26:16] this information is required by the
[26:18] system to be able to understand how
[26:20] those things are attached
[26:21] and how they flow into one one another
[26:24] so this is why it's it's important and
[26:28] uh yeah we will make the use slots as
[26:30] well in this case
[26:31] uh we will call it tank sorry this would
[26:34] be still a main
[26:35] u-slot and then we'll have
[26:39] i think from the carryable we'll assign
[26:43] it to the right
[26:44] alignment slot these hierarchies are
[26:49] i mean you can't understate how
[26:51] important they are to
[26:52] making all of this actually function you
[26:55] know
[26:56] how often is a hierarchy you know broken
[26:59] because
[27:00] you you have to create 20 different
[27:02] links in order to make these things and
[27:05] one of the 20 links is broken and the
[27:07] whole thing doesn't work
[27:09] yes and the problem is often i'm sure
[27:11] like you know dan
[27:12] or hayden uh at risk and can say more
[27:15] it's like it's so easy to even like get
[27:17] lost sometimes and why
[27:18] things don't work and i think we are
[27:19] basically constantly trying to say like
[27:21] okay okay this is like this is the
[27:22] problem so let's try to add some extra
[27:24] the back throw to try to track it easier
[27:26] next time
[27:27] you know and we try to do that or like
[27:29] oh this is like that the message is not
[27:30] really clear right then it's like
[27:32] we have the most simple thing ever it
[27:35] could just be you're missing a left tug
[27:37] you're missing a right tug and then
[27:39] you'd spend half a day debugging it and
[27:41] you're like
[27:41] oh it was just that and you missed this
[27:43] one little field
[27:44] oh yeah there's a lot of information
[27:46] going into these usables
[27:48] so you can spend quite a bit of time
[27:51] just breaking
[27:52] a single entity down to its core parts
[27:54] just saying okay well this is okay
[27:56] so you take that out and then you put a
[27:57] different thing in and it's a bit like
[27:59] if you build in a pc and you just swap
[28:00] out different components
[28:02] just to see which one's the broken bit
[28:05] yes absolutely that is usually a very
[28:07] good um
[28:09] like you know easy way uh for debugging
[28:13] stuff like you start to remove and
[28:14] say is this one that broke it you know
[28:16] all right like just do a little step at
[28:18] the time
[28:19] this is what i try to add here is like
[28:20] these eye parts the bike drawer just to
[28:22] show you guys like that we have
[28:24] like these objects are attached to some
[28:26] item parts
[28:27] right the way we we define those are
[28:31] uh for example if we go in here
[28:34] we do have this item part container for
[28:36] the relay and we can see that we have
[28:38] three
[28:39] slots that we call slots of item ones
[28:42] lobsa by the tool stops have a tree we
[28:44] can attach
[28:44] stuff in now we just need to explain to
[28:47] the usable
[28:48] code basically how this information
[28:52] is is available to it you have this
[28:54] usable item part so we can create like
[28:56] one data here that says on the slot sub
[28:59] item one
[29:01] we basically can place specific
[29:04] animation
[29:04] when we interact with that right so what
[29:06] we want to have is like eventually as a
[29:08] final result is that the
[29:10] engineer can go to the wall panel
[29:12] understand this is interacting
[29:14] with the fuse that is on the top or the
[29:16] bottom
[29:18] and then based on where that object is
[29:20] it needs to play the right animation
[29:22] to take the left the center or the right
[29:26] so maybe we should just explain a little
[29:28] bit more
[29:29] what how we play these animations right
[29:31] it's uh it's it goes like it's like a
[29:34] russian doll thing like you start to
[29:36] overwhelm you say oh but there is still
[29:37] another piece that we need to explain
[29:39] and he is like mannequin so
[29:42] uh i think you could quite easily spend
[29:45] half a day talking about mannequin
[29:48] absolutely absolutely it's a minefield
[29:50] it's it's it's crazy like i think
[29:52] there's a lot of stuff but basically in
[29:54] short what it is is a lot of
[29:56] game engine have what's called an
[29:58] animation graph
[29:59] right the animation graph would
[30:01] basically explain how animation
[30:03] state transition from one to another and
[30:05] which type of animation to play and then
[30:06] maybe usually in this animation state
[30:08] you can
[30:09] maybe say like you know with specific
[30:11] conditions which animation it gets
[30:13] played or
[30:14] how you can randomize through animation
[30:16] something like this money in is a kind
[30:18] of a piece of the puzzle so it's a sort
[30:20] of database where you can
[30:22] use what we call fragment id and
[30:25] fragment tags
[30:26] to immediately search for a specific
[30:28] animation that match specific condition
[30:30] the tags are sort of conditioned so you
[30:32] can say like
[30:32] are you an ai or a player or which type
[30:35] of action are you trying to do and in
[30:37] our case
[30:38] let's say let's go straight like in
[30:40] certain examples so it's like we have
[30:41] like what we call fragment id that could
[30:43] be usable usable action
[30:45] usable phases but either the usable
[30:47] action is the
[30:48] action you can perform when you're in a
[30:50] usable so we call it usable action it's
[30:52] just very easy to search
[30:53] and then for example you have all those
[30:56] folders those folders are in essence the
[30:58] fragment tags so the start when you're
[31:00] going on a database and you search for
[31:02] some keys this is what what you get
[31:04] and this is the animation results in our
[31:06] case
[31:07] we want to understand which animation we
[31:09] need
[31:10] to pick up specific object in our cases
[31:12] the wall panel
[31:14] or the relay has three item ports so how
[31:16] can we identify that
[31:18] did the animator and tech animation team
[31:20] give us already something that we can
[31:22] use
[31:22] so if we go here if we say oh this is
[31:24] the action we want to do that is the
[31:26] take so inside tech we have some version
[31:28] for the word panel
[31:29] oh yeah we do and then we have two
[31:31] versions like high and low
[31:33] and then we can create like we can we
[31:34] can take a look at those and we have
[31:36] like oh we have a version for center
[31:38] part
[31:38] left part and right part and it's the
[31:40] same for the bottom right
[31:42] so this is what it means is one once we
[31:45] want to search for an action that is the
[31:47] action
[31:47] take for a wall panel on the high relay
[31:51] for the fuse that is in the center part
[31:53] zero one
[31:54] this is the animation we will play right
[31:56] and then in the animation
[31:58] we can also specify a specific procedure
[32:00] clip layer there is a sort of you know
[32:02] premiere layers but just like that some
[32:04] play
[32:05] some animation and some play some code
[32:07] and here it says when you hit this key
[32:10] then that item attaches it from
[32:13] the the relay now it passes in your hand
[32:15] and it detaches from the other one
[32:17] and as you see we have different
[32:19] animations for you know the
[32:21] the left you know and animators can make
[32:25] multiple variation multiple type of you
[32:27] know
[32:28] urgency on doing actions as well so we
[32:31] can basically pass this information from
[32:32] the behavior and the be
[32:34] it and then manage it takes care for us
[32:36] to select the right animation
[32:37] so those are the three that we want to
[32:39] do it's like center part
[32:41] uh center underscore portal scores you
[32:43] want left and score port and score z1
[32:45] right on the score port underscore zero
[32:48] one so now we're going here
[32:50] so just just in a nutshell just so that
[32:51] it's super clear as well what's
[32:53] happening
[32:54] essentially what we're doing is we're
[32:55] just putting these different a bunch of
[32:57] different tags onto the the character
[32:59] and then they just play whatever
[33:00] animation is associated with all of
[33:02] those tags so they say okay i've got all
[33:04] these different things that's
[33:06] to this animation so i'm going to play
[33:07] that and then in that animation we can
[33:09] also add like little scripts to say well
[33:11] at this point of animation you want to
[33:13] trigger this interaction so and then
[33:14] that could be like oh i'm going to open
[33:16] the door at this point
[33:17] you know so just trying to simplify it a
[33:18] bit more yep
[33:20] and there's more here but we will not
[33:23] see it today but it's basically a way
[33:24] also to say
[33:26] from the behavior here it would be like
[33:28] oh if i have something attached to this
[33:30] item part this is the money intact i get
[33:32] but we can also use this data to say do
[33:35] you have something attached
[33:37] that respects specific tags and then
[33:39] basically we can sort it out let's say
[33:40] we say i want to repair these specific
[33:43] fuse then we can say like okay where is
[33:45] that attached and which animation i need
[33:46] to play
[33:47] but we could also say a usable do you
[33:50] have something that is damaged
[33:52] and is a sub component attached to you
[33:54] and then it would be like yeah i have
[33:55] three right and
[33:56] say just get this one and this one is
[33:58] the one attached to the
[34:00] item part one and to use this one you
[34:02] need to take the left parts your one
[34:04] mannequin
[34:05] attack this propagates automatically
[34:07] into the behavior later
[34:08] we'll see so you're giving it a
[34:10] collection of choices not every single
[34:12] choice that's available for every single
[34:14] npc because that would be
[34:16] horribly unperformative but you're
[34:19] basically giving it uh
[34:20] its own little buffet of actions and
[34:22] it's based on the situation that it
[34:25] uh determines uh based on all the tags
[34:27] and what's happening whether something's
[34:28] damaged whether something's not and
[34:30] whatnot
[34:30] it actually goes oh this thing is
[34:32] damaged oh it's in the left port so i'm
[34:35] going to use
[34:36] left dead animation exactly and
[34:38] basically the good thing is
[34:40] that this comes automatically from what
[34:41] you already have calculated from the eye
[34:43] so you don't really have like you can
[34:45] retrieve this data
[34:46] but this data can be cached very easily
[34:48] from our code because once you attach
[34:50] that object there
[34:51] then you can immediately say like oh
[34:52] it's a touch okay cool is there some
[34:54] data related to this item power attached
[34:57] that one is like okay the moment you
[34:58] attach it is when you calculate it
[35:00] that means that you know attachment
[35:02] don't happen so often
[35:03] while you know search happens a lot if
[35:05] you do it every time you search then it
[35:07] can be very expensive but if you do it
[35:08] when you know you do the
[35:10] bare minimum operation this is where it
[35:11] can be much more optimal
[35:13] cool so we have this one right now seems
[35:17] kind of good and we can now make the
[35:19] wall panel
[35:20] version i'll make a variant here
[35:24] i will make the usable version
[35:29] and uh we'll basically start to look at
[35:32] the geometry first here because this is
[35:34] the one
[35:35] that we are actually interacting with so
[35:38] it's it's definitely gonna be very
[35:39] important to understand
[35:41] if art and animation have defined
[35:45] specific location for us to interact
[35:47] with
[35:48] right because in here we have this
[35:49] center point that is also sometimes not
[35:51] even reachable here but we don't really
[35:53] care because what we care
[35:54] is the description of the actions
[35:57] with the wall panel we'll just
[36:01] open the character tool
[36:07] we just open it's his character but he
[36:10] actually opens
[36:10] pretty much anything and if we open like
[36:16] this object we see that we can debug
[36:19] throw for example the joints and the
[36:21] joint name
[36:22] and the front part of the wall panel is
[36:26] something that we call anchor wall panel
[36:28] and this is the
[36:29] position in which we expect the mpc to
[36:32] align
[36:33] and this is the same position that we
[36:34] provided to the animation team
[36:36] to make sure that when they make the
[36:37] animation these are perfectly aligned
[36:39] you know and they can perfectly align
[36:41] their hands
[36:42] to the right uh object use the right
[36:44] grip you know when we play the
[36:46] procedural adjustment and so on and so
[36:47] on
[36:48] so what we need to do in this case
[36:50] compared to the other ones is like first
[36:51] of all
[36:52] we will add the usable component of
[36:55] course
[36:57] second this object is not really a
[36:59] carriable i'd already expect people to
[37:01] just you know
[37:02] take away like a wall panel from the
[37:05] ship but we actually have a wall panel
[37:08] set up
[37:08] like um like archetypes and then we
[37:12] basically say
[37:13] as we've seen in manikin there is a
[37:14] fragment tag for the word panel is
[37:16] called wall panel so we can say
[37:19] anytime we interact with this object we
[37:21] carry
[37:22] the wall panel fragment tag with us and
[37:24] we propagate it through
[37:25] the chain now we do the alignment slot
[37:29] time slot in this case would still be
[37:31] called like a main
[37:32] element slot but the helper name would
[37:35] be the one
[37:36] that we have seen here that is anchor or
[37:39] panel
[37:42] just copy it
[37:45] just don't want to misspell anything and
[37:48] then
[37:48] we do the use lots so use lots
[37:53] in this case we need two versions right
[37:55] i mean we could use also only one
[37:57] but i think you know this is mostly for
[37:59] readability purpose
[38:01] there's not in like if you have to use
[38:02] lots doesn't necessarily mean
[38:04] that two people can use it at the same
[38:06] time because when people can use it at
[38:08] the same time when there is a
[38:09] combination of stuff that is
[38:10] the image.you are in is free they use
[38:13] lot that you are associated with
[38:14] is free and they use channel you you
[38:16] know you want to use it's free in our
[38:18] case we will have to use lots that the
[38:19] reference to the same diamond slot so
[38:22] you can't basically occupy the same slot
[38:24] by two people and then it will not work
[38:27] so in this case you have like a top one
[38:29] that represents the top
[38:31] relay and then a bottom one to represent
[38:33] the bottom one
[38:37] so the fragment tag for the top one
[38:41] it's gonna be called high as we've seen
[38:44] in mannequin
[38:45] before now what we do is that we add the
[38:48] use channel instances so what can we do
[38:51] on the wall panel top we can
[38:55] look at here if we search for wall panel
[38:58] we can see we have a lot of actions
[39:00] well we care today we will try to limit
[39:02] to the things that we really care right
[39:03] now
[39:04] we can image that is open uh because we
[39:07] want to open it that panels if it's
[39:09] closed we
[39:10] should not be able to take something and
[39:12] what we will do it here
[39:14] is we will put it to the right alignment
[39:16] slot
[39:19] and then we will add
[39:23] something that is called tags to add on
[39:26] enter
[39:26] and text remove and exit what does this
[39:28] mean is that when
[39:30] i'm trying to use some object that is
[39:33] high or low i want the player to know
[39:35] that it's
[39:36] interacting with the top or the bottom
[39:38] one to branch in the logic
[39:40] so what we'll do here we will add
[39:43] a tag to the character automatically
[39:45] when he uses the top one
[39:47] it's worth mentioning these are gaming
[39:48] tags as well not to be considered
[39:52] that's a classic yes things that it's
[39:54] really hard to follow sometimes
[39:56] because we call it all tags but yeah
[39:58] these are game tags maybe
[39:59] then can give like a little bit while
[40:01] i'm typing okay just kidding
[40:03] so so game tags are generally used i
[40:05] mean that they're used in
[40:06] every game engine possible um they
[40:09] they're a good way of just keeping track
[40:11] of
[40:11] of literally anything that you want in
[40:14] any
[40:14] um game element to uh to do something
[40:17] essentially so if it's a chair you might
[40:19] give it a tag for a chair
[40:20] and then you could search for that chair
[40:22] through that game tag
[40:24] for example um there's there's no end of
[40:26] ways you can use game tags whereas a
[40:28] mannequin tag
[40:29] is very specific to mannequin and the
[40:31] animations that are being played
[40:33] so a character you know that doesn't
[40:35] have any mannequin tags on them will do
[40:37] literally nothing they'll just stand
[40:38] there
[40:39] um but then as you start adding those
[40:41] mannequin tags to the character
[40:42] then they'll start collecting all of
[40:44] those and go oh well that means i must
[40:46] have to do this animation
[40:48] and in here right now when we're adding
[40:50] these fragment tags we're saying that if
[40:52] you're in for example this alignment
[40:54] slot in front of the wall panel
[40:55] you're probably going to get a wall
[40:57] panel fragment tag
[40:59] say and then that will just be one of
[41:00] those
[41:02] many tags that are required to get the
[41:05] wool panel specific animations um
[41:08] whereas
[41:09] a wall panel game tag would be used
[41:12] elsewhere like like i say in npc
[41:15] behavior you would
[41:16] search for a wall panel tag to find that
[41:19] entity you wouldn't
[41:20] search for a wall panel mannequin tag
[41:23] does that make sense yeah yeah it is
[41:26] and also yeah we can do another thing
[41:28] that is called
[41:30] option game tag so what it means is for
[41:33] this top used lot
[41:36] we basically know that that one is
[41:39] tagged with a specific game tag so we
[41:41] say that every used channel for example
[41:43] that we interact with in here
[41:45] are related to the top you know
[41:49] interaction basically state or block and
[41:52] to achieve that
[41:53] we go to
[41:57] call it um
[42:14] then we do the same with the bottom so
[42:16] this is gonna be
[42:18] a bit of repetitive work so you know you
[42:21] guys can talk while i just really don't
[42:23] repeat a bit of this uh
[42:25] yeah so see what my friend's doing right
[42:26] now adding all of these game tags
[42:28] is so that he's able to reference those
[42:31] in the subsumption logic
[42:32] because you wouldn't reference like say
[42:34] mannequin tags in the subsumption logic
[42:37] so you can say if this um if even the
[42:40] character has
[42:41] a game tag of um top on it
[42:45] then make sure that you only play logic
[42:47] that is relevant to the top part of the
[42:49] wall panel if he has a bottom game tag
[42:51] then
[42:52] you could do logic that's specific to
[42:54] the bottom half of the gate the wool
[42:55] panel instead
[42:58] so basically the text always we kind of
[43:00] use the game text to sort of
[43:01] be able to differentiate in the behavior
[43:03] inside subsumption so
[43:05] basically what daniel said like um when
[43:07] you look at these these graphs from
[43:08] subsumption it's it's
[43:10] literally just to like um be able to
[43:12] like take like either
[43:13] one path or another path based on the
[43:15] the game tags on the uh the entity
[43:18] we use a lot of um logic gates in
[43:21] the subsumption logic with tags they're
[43:23] so
[43:24] fundamental in every game i don't think
[43:27] you'll ever have played a game you know
[43:29] at least
[43:30] not mud game that doesn't use tags in
[43:32] some way
[43:34] yeah and tanks are also like very
[43:36] important for us because they also
[43:37] represent traits
[43:39] skill and traits maybe we can explain a
[43:41] little bit more of that
[43:42] yeah absolutely like for example when
[43:44] you look at like a a spaceship we use
[43:47] the tech to be able to like
[43:48] differentiate
[43:49] is this like a like a combat ship or is
[43:51] it like a security ship or
[43:53] like is it a pirate ship or whatever
[43:55] like so we also kind of use
[43:56] text to be able to just to make like see
[43:59] the difference in
[44:00] like what type of you know enemy or what
[44:02] type of ship whatever that
[44:04] we're like using yeah or even with these
[44:08] fuses as well we we have uh game tags
[44:10] for
[44:11] is this damaged even you know so that
[44:13] would be the
[44:14] the thing that the npc checks when they
[44:16] inspect it they go
[44:18] they they from a visual perspective it
[44:20] just goes oh i'm looking at this fuse
[44:22] but on in the logic what we're doing was
[44:24] saying does this thing have the damaged
[44:26] tag on it
[44:27] because if it does then we want to make
[44:28] sure we repair it or replace it
[44:30] if it doesn't then it's it's okay and we
[44:32] can just put it straight back in the
[44:33] wall panel
[44:34] exactly super broad the whole gamestack
[44:36] system
[44:37] one thing we will also do here right now
[44:39] is like this is like you know based on
[44:40] my
[44:41] basic template so as you see in the
[44:43] default loadout still loads
[44:45] the relay that is not the usable we just
[44:48] built so we basically just go through
[44:50] those objects and we also replace the
[44:53] entity our class name with the one that
[44:55] we want to really play so it's like
[44:57] in the template show usable we put the
[44:59] relay template show usable
[45:01] the relay template show usable we
[45:03] basically go in the
[45:05] default loadout and we now add
[45:09] the sub component this similar
[45:12] name so as you see it's like if you have
[45:14] one type you just need you just need to
[45:16] populate then it just propagates
[45:18] you mentioned so
[45:22] obviously hierarchy is crucial
[45:25] it's all all of this is this is the
[45:28] russian nesting doll you mentioned
[45:30] it's uh do tags have a priority are
[45:34] are some tags more important than other
[45:36] tags
[45:37] like if an npc recognizes a tag or like
[45:40] a conflicting tag
[45:42] or something does it does it prioritize
[45:44] one or the other or does it just
[45:46] jump up on the chair and not know what
[45:48] to do i think that depends on the logic
[45:50] more than anything i mean all tags are
[45:52] created equal it's just how you use them
[45:55] um whereas mannequin tags they do have a
[45:57] priority so they will see
[45:58] um something like um uh
[46:02] say uh it was something
[46:05] more important like um how to deal with
[46:07] a file like i'm being shot that's
[46:09] probably gonna be higher priority
[46:10] animation tag than
[46:12] you know just like a standard idol for
[46:13] example
[46:15] or do you also have hierarchy in in text
[46:18] as far as i know like for instance for
[46:19] instance you can have an entity with
[46:20] like an outfit tag
[46:22] you can have an entity with like a
[46:23] specific like very specific sort of
[46:26] outfit
[46:26] as well so so you can sort of work with
[46:28] the hierarchy of text as well
[46:31] and i regard if you want to sort of make
[46:32] anything like specific behavior based on
[46:34] the the hierarchical
[46:36] you know structure of the text
[46:41] yeah it's just really it's so
[46:44] fundamental you can use them in pretty
[46:45] much any way you like
[46:46] that's that's one of the the best things
[46:49] about them
[46:51] so here what we are finishing to set up
[46:52] is mostly the same things we did like
[46:54] the item parts to understand when things
[46:57] are attached to what
[46:59] and then i think i jumped i just skipped
[47:02] this part to explain but basically we
[47:04] have also
[47:05] what we call the slotting setup right
[47:08] but we can show it a little bit you know
[47:11] in a little bit
[47:12] so what we will do right now is we want
[47:14] to make sure that the
[47:16] you know that the engineer can actually
[47:18] find something broken
[47:19] right so we go back one second to the
[47:21] behavior and we say like okay we usually
[47:23] i don't but we want sometimes to search
[47:26] let's say right now in our test
[47:28] map that sometimes we want to search for
[47:30] something else better to do right
[47:32] so instead of halting we just say that
[47:34] you know we will
[47:35] just not do anything or idle for
[47:38] something like between every
[47:40] two and three like in five seconds right
[47:42] so you can see like you know it starts
[47:43] two days the basic duration then we can
[47:45] arrive up to five
[47:47] so and every two three two five seconds
[47:51] we want to try to evaluate something
[47:52] else
[47:53] unless you know it immediately finds it
[47:55] let's say we want to handle
[47:58] broken like sub component
[48:04] so what we want to do is i want to say
[48:05] this subactivity first of all is i
[48:07] priority compared to the idle so it
[48:09] should always
[48:10] be tried you know if possible and if
[48:13] possible means it needs to find some
[48:15] object that actually um
[48:19] is broken basically so we might want to
[48:21] call it a
[48:23] broken uh sub component
[48:27] so it means that we need to search for
[48:29] any object in the word this or
[48:31] not necessarily in the word but like
[48:32] around us right now that is damaged
[48:38] it would be like this global condition
[48:39] damaged
[48:41] this is an item so these are the game
[48:44] tags
[48:44] those are all the game tags yeah
[48:48] and that is a sub component
[48:54] see the trick with the tank database is
[48:57] trying to find a tank
[48:58] that already exists and trying to not
[49:02] create a new tag
[49:03] if everyone does already exist
[49:06] let's try to make it like that right now
[49:08] if this gets selected what we try to do
[49:11] is we basically say something since we
[49:14] don't have a line right now we
[49:16] just create what we call bubbles that
[49:17] are like kind of a cartoon
[49:19] message on top of them and we say like i
[49:22] have found
[49:23] a broken sub component
[49:28] two seconds and now we stay here now we
[49:31] hold
[49:31] for now
[49:36] save you know we go back in game close
[49:39] this
[49:40] now what we will do is first we remove
[49:43] the
[49:44] carrier ball the bike draw on this we
[49:47] got a bit less the backdrop
[49:48] and then we reload just this one
[49:55] usable we put the wall panel
[49:59] we rotate that just to make it a bit
[50:01] simpler for the character to go
[50:04] then we try to see if right now he finds
[50:06] something and he doesn't find anything
[50:08] why because it's not improving pretty
[50:10] much
[50:10] so how do we simulate that we could
[50:12] create like a little mission
[50:14] that just randomly you know puts the the
[50:16] sub components to
[50:18] to be broken sure it's gonna take a
[50:20] little bit more time we don't have so
[50:21] much time so what we will do
[50:23] we'll mostly just go in our version of
[50:25] the object and we just say that those
[50:26] are all broken we just you know
[50:28] basically assigned
[50:29] holly brown exactly right
[50:33] so it's just the same thing
[50:37] we just like actually this one but
[50:40] it is this one so we save it now so
[50:43] those objects are there
[50:44] usually just delete we put it back
[50:48] now we should be able to in theory find
[50:51] this one but there is no bubble on top
[50:53] this is because usually we use this as a
[50:55] debug draw
[50:56] so we need to enable this what we call
[50:59] the prototype dialog
[51:01] bubbles put it there we're going here oh
[51:04] i found
[51:04] the broken sub component but
[51:06] unfortunately it doesn't do anything
[51:08] with that so it's like okay what do we
[51:09] want to do
[51:10] so now we can ask the mpc to go there
[51:13] and take it
[51:14] right let's let's try to take it so how
[51:16] do we do that so it's like okay
[51:18] and so and by the way where are those
[51:20] objects right now right so okay we found
[51:22] them but
[51:23] how do we know which one we found the
[51:25] system automatically
[51:27] reports these objects into this this
[51:29] magic variable that got created when you
[51:30] create a new sub activity that is called
[51:32] required object search results
[51:34] the only thing is we don't really know
[51:37] and we
[51:37] how or when we're going to use it right
[51:39] let's say you find 10 objects and there
[51:41] are 10 engineers then
[51:42] i go to one you go to another one then i
[51:45] still think that this broken because
[51:46] somebody reported to me in the past so
[51:48] we still need to try to validate if the
[51:49] steel program right now for
[51:51] simplification we don't do that
[51:52] uh let's just see how we just first of
[51:55] all use that
[51:56] so let's say we want to use a carryable
[51:58] so we say like you know what i know
[52:00] those objects are carriable for now i
[52:02] you know i trust
[52:03] and i just call it sub component so we
[52:06] can
[52:07] cast similar to how we do we code uh and
[52:10] eventually i
[52:11] really hope to get this away you know me
[52:14] and tony have lots of good plans to make
[52:15] sure that this can automatically
[52:17] inherit and be transformed but for now
[52:20] we basically say
[52:21] we have a lot of objects that we want to
[52:23] cast into usable
[52:24] the problem is you know this is a lot of
[52:27] options i want to have a bit more
[52:28] control
[52:29] so what i will do is i will probably
[52:31] just try to make a loop
[52:35] and i will say i want to loop until
[52:39] i feel what i'm doing next and what i'm
[52:42] doing next
[52:42] is mostly popping an object
[52:48] so don't want to destroy this variable
[52:50] basically without being very careful
[52:53] so i want to remove from the variable
[52:54] one object at the top at the time
[52:56] and make sure that we know what we are
[52:58] doing basically sub component
[53:00] object so we say like we take an object
[53:03] out of that
[53:04] and we put it into this other variable
[53:06] now
[53:07] if this fails it means there is no more
[53:09] object to do so we can just
[53:11] you know do something else in our case
[53:14] here it's like
[53:15] we could cast it to a usable
[53:19] this could also fail but this part you
[53:21] know in a way we don't really care right
[53:22] now so
[53:23] let's say we are okay
[53:26] handling this error with just
[53:28] suppressing the failure and say like you
[53:30] know what
[53:31] this is fine for now and if we need to
[53:34] do some logic because basically what is
[53:36] important to think is in the behavior
[53:37] flow logic is
[53:39] you want to handle the failure at the
[53:41] point in which you still have the
[53:42] context because the failure means
[53:44] something at that point
[53:46] so in this case failing means that i
[53:47] don't have any more object but in this
[53:49] case it means this object is not the
[53:50] type that i
[53:51] was expecting so i could in theory
[53:54] and also something here that is um
[53:58] it's in a car i think that we call
[54:01] bubble error that a sort of
[54:03] this bubble that we use for prototype
[54:05] but those are important narrow similar
[54:06] to how we do code when we do a cert
[54:08] and it's like you know what this logic
[54:09] is wrong i think you wrote something
[54:11] previously
[54:12] that is wrong is reporting you some
[54:14] object that is not correct
[54:15] of course it could be data error this is
[54:17] why we don't crash that can assert
[54:19] my doing code but you know we still
[54:20] report it a bit harsh and there is a
[54:22] pop-up that comes out and says hey
[54:24] you know are you sure you you know you
[54:25] need to review your logic here
[54:27] i need release of course this doesn't
[54:29] doesn't do anything
[54:31] but anyway we can remove this one now we
[54:33] have an object that now we can do an
[54:34] action that is we want to use
[54:36] this object that is a usable and what we
[54:39] can do here is we can take it
[54:42] we walk to there you know and
[54:45] we just use whatever we can like if
[54:48] there are multiple use lot or whatever
[54:49] but
[54:50] right now this is not really important
[54:53] so let's see if this now works because
[54:56] there will be stuff that is missing and
[54:57] you see this is this is failing right
[54:59] now so why because right now this object
[55:02] is not
[55:03] just in the world is attached to other
[55:06] objects and this is where
[55:07] we need to explain the system how the
[55:09] routing works
[55:10] and routing means how a
[55:14] function call gets transported into the
[55:17] larger objects for example so it's like
[55:20] well i know you want to use the fuse but
[55:23] use the fuse you need to interact with
[55:24] the relay you say
[55:25] i know you want to interact with the
[55:26] relay but to interact with the relay you
[55:28] actually need to use the wall panel
[55:30] right
[55:31] so what we'll do now is we will set up
[55:35] this information on the
[55:38] object here so you guys can while i yeah
[55:42] you're going into a little bit of
[55:43] overtime here just yes i
[55:45] i've we finished this one and then i
[55:47] just show you the logic and i think
[55:48] you know we need to shorten a little bit
[55:50] what i expected or we can just drag
[55:52] you know if it doesn't work we can just
[55:53] drag like the one that everywhere and i
[55:55] can show you
[55:56] we haven't even started on the engineer
[55:57] behavior yet i know right
[55:59] very difficult to cover such a big
[56:02] behavior in such a short amount of time
[56:05] and it's one of the more complicated
[56:07] complicated behaviors that we've worked
[56:09] on so
[56:10] as you know done this one and the
[56:13] bartender are the really complicated one
[56:15] oh we know how complicated bartender is
[56:18] some of us did eight different segments
[56:20] on the bartender before it was done
[56:22] yeah and we're gonna call this part one
[56:24] then part one of many
[56:26] yeah we'll we'll do a part two engineer
[56:28] in a few weeks
[56:32] so basically what we are seeing here is
[56:34] that to interact with the slabs
[56:36] slots of item two we need to pass
[56:38] through
[56:39] the used lot main and then we already
[56:43] i was already setting up before just to
[56:45] speed up but i think it didn't
[56:46] finish it so it's like there is team
[56:51] in the wall panel instead as you can see
[56:53] it's like we have satisfied stuff that
[56:54] says
[56:54] oh to interact from the top you can you
[56:56] need to pass through
[56:58] the top high or top
[57:01] or bottom low uh you slot so we can now
[57:04] see
[57:05] delete this just for safety
[57:10] see the guy now moves there he knows how
[57:12] to interact with that
[57:13] it's actually i i use the wrong
[57:15] alignment slot here
[57:17] seems like uh and this is why it's not
[57:19] uh set up correctly let me try to look
[57:21] at which one i i wrote
[57:23] probably i copied the wrong one
[57:26] oh friend while friends it's fine my
[57:29] friend is working i'll post i'll pose a
[57:31] question to everybody else
[57:34] why do nbc's love standing on chairs so
[57:36] much
[57:38] i think franz answered that a few times
[57:40] already haven't you it's it's one of
[57:41] those things i mean i've
[57:43] been i've answered it when i've been
[57:44] doing star citizen streams as well it's
[57:46] it's one of those those kind of bugs
[57:48] that has the exact same visual output
[57:51] but it has lots of things that can cause
[57:54] yeah exactly so you fix it one way and
[57:56] then
[57:57] the next week you've you've got the
[57:58] exact same visual output but it's a
[58:00] completely different bug
[58:01] it's it's just one of those
[58:05] there's so many things going into like
[58:06] the usable code that uh
[58:08] you know it's it's really a jungle
[58:09] sometimes too to sort of figure out what
[58:11] exactly is causing this bug so
[58:14] yeah definitely it could be like uh a
[58:17] missing animation it could be the
[58:18] animation names changed it could be
[58:20] the setups change slightly by accident
[58:23] in the parent above the
[58:24] variant so could be absolutely anything
[58:27] i remember one reason
[58:29] it was caused by um people leaving the
[58:33] area
[58:33] then the npcs that were still sitting in
[58:35] the seats um
[58:37] they basically got you know turned off
[58:39] and then when a player came back they
[58:41] were turned back on but the game didn't
[58:43] um put them sitting correctly in the
[58:45] seat anymore so we're just standing on
[58:47] it instead
[58:48] there are like tons of problems
[58:49] basically that are causing that and
[58:51] they're
[58:51] mostly coming from the streaming right
[58:54] now
[58:54] this is why like you know i i'm the
[58:57] first one that hates that [ __ ] you know
[58:59] it's just that i think
[59:01] it's always like the problem is that the
[59:03] eye is at the end of the chain so every
[59:04] time something gets improved right and
[59:07] you know we get this like this side
[59:08] effect that they all look like the same
[59:10] bag this is the wrong
[59:11] one most likely or not so we had like
[59:14] this
[59:15] as you see right now it just took all
[59:16] the objects and he just dropped them all
[59:18] of course like you know but it's
[59:20] it's kind of cool it just went with old
[59:21] animations and he played
[59:23] all all those objects um i never had
[59:26] that one friend
[59:27] so you've done something new there no
[59:29] because i'm just looking i'm just
[59:30] looking through the take only like
[59:32] right so it's like take one then it
[59:33] takes the next one it takes the next
[59:34] genetics 10x and
[59:35] that's the only thing it does right now
[59:36] but it's uh yeah for the standing on the
[59:38] chair basically this is what we are
[59:39] trying
[59:40] right now i would want to basically
[59:42] dedicate some time
[59:43] what did he get sometimes to make a
[59:44] proper plan you know i i'm scheduling
[59:46] sometimes because i'm
[59:48] i'm a bit tired of seeing it of course
[59:50] like
[59:51] eventually what my i really want to have
[59:53] like a proper animation of a guy
[59:54] standing on the chair for
[59:56] like just on purpose you know and it
[59:58] would be like gotcha
[1:00:00] you know like a one and one thousand
[1:00:01] pieces
[1:00:03] you know it will happen and you know
[1:00:04] dude it doesn't [ __ ] spring fun
[1:00:07] yes we need to do it uh but yeah it's
[1:00:10] basically a lot
[1:00:10] due to sometimes for example we don't
[1:00:12] know when something streams
[1:00:14] out that it will eventually come back
[1:00:18] that we can't right now guaranteed
[1:00:20] because we don't have yet
[1:00:22] the proper persistence you know of that
[1:00:24] stuff so it's like we
[1:00:26] we either reserve that object for
[1:00:27] somebody that might never come back
[1:00:30] or it might come back with a different
[1:00:32] idea right now and sometimes
[1:00:33] sometimes and it's like this was yours
[1:00:36] but now you can't use it because you
[1:00:38] reserved for somebody then it's never
[1:00:39] going to come back so we are not doing
[1:00:40] it and then of course sometimes what
[1:00:42] happens is
[1:00:43] you know another pc actually sits there
[1:00:44] before and this one you see
[1:00:46] sometimes two mpc one next to each other
[1:00:48] the streaming takes too long you know
[1:00:50] and then the guy's already there but
[1:00:52] they're also in place already lots of
[1:00:54] uh fallbacks and whenever we find them
[1:00:57] we basically had them and then we tried
[1:00:58] to recover from some of the situations
[1:01:00] right now
[1:01:01] as well uh so there is a lot of little
[1:01:04] pieces because with the population
[1:01:05] manager of course this is meant to
[1:01:07] be different right when when npcs goes
[1:01:10] away
[1:01:10] you know those will be repopulated by
[1:01:13] the population manager so this is why
[1:01:15] like in a way
[1:01:17] this is not real a problem that will
[1:01:19] exist in the future
[1:01:21] all right you know because it's
[1:01:22] basically with our plan that is already
[1:01:25] a known problem in a way of the fact
[1:01:26] that the guys just come back
[1:01:28] for just because the stream is the
[1:01:30] streaming kicks in right
[1:01:31] but then there is like of course the
[1:01:33] stuff that there might be some bugs
[1:01:34] sometimes with the
[1:01:35] with the lod update we try to be
[1:01:37] efficient in updating stuff that's not
[1:01:38] visible and maybe that one fails to
[1:01:40] attach you know and
[1:01:41] we are we are searching for some of this
[1:01:43] stuff so there is like
[1:01:45] yeah as dan said same visual problem
[1:01:47] with
[1:01:48] with several bugs that we are you know
[1:01:49] constantly fixing and some new
[1:01:51] optimization
[1:01:52] things might still get back
[1:01:56] anyway i think we are pretty much like
[1:01:58] at the end but the only thing i wanted
[1:01:59] to show you is basically these things
[1:02:01] how
[1:02:01] the actual logic works uh you know it's
[1:02:03] going to be like just the last two
[1:02:04] minutes
[1:02:05] if we go on the wall panel when we do
[1:02:06] take what we do
[1:02:08] we basically still say like oh i want to
[1:02:10] open the panel no matter what i want to
[1:02:12] try to open it and then in the open
[1:02:14] this is where all the game tags we have
[1:02:16] set up uh
[1:02:17] come into play because basically we what
[1:02:20] we try to do is for example we try to
[1:02:22] say
[1:02:23] are we on the top are you tracking the
[1:02:24] top or are we interacting the bottom i
[1:02:26] mean this is really for safety because
[1:02:27] in theory if you're not trying to top
[1:02:28] you should be interacting but
[1:02:30] but then we say like how is the object
[1:02:32] actually having some tags like
[1:02:34] easy open if it's not open right
[1:02:37] then we want to open it but if it's open
[1:02:39] that's fine so it's a sort of like
[1:02:41] building on top of the logic we already
[1:02:43] have without having to duplicate too
[1:02:45] much logic right because at the end they
[1:02:46] use channels
[1:02:48] for our you know internal logic are just
[1:02:50] functions we can just call function and
[1:02:52] then just let them
[1:02:53] execute if necessary right and of course
[1:02:56] like
[1:02:56] whenever we see like is this real a
[1:02:58] problem or performance something then we
[1:03:00] can have some rd out or other double
[1:03:02] checks and we can optimize this
[1:03:04] but this gives us like a very scalable
[1:03:06] solution first of all for
[1:03:07] the logic you know and and then the text
[1:03:10] is like okay after open now i'm in a
[1:03:12] state in which i know that it's been
[1:03:13] open
[1:03:14] the player could have opened before
[1:03:15] right even if the eye is really precise
[1:03:18] we'll always close all the
[1:03:19] all the doors we can never guarantee
[1:03:21] that you know because prayer could troll
[1:03:22] around
[1:03:23] or actually may have forgotten because
[1:03:25] maybe i don't know the eye as well my
[1:03:27] combat started while they were repairing
[1:03:29] something right and now they are back up
[1:03:31] it also means
[1:03:32] yeah it also means that we're able to
[1:03:33] have mpc behavior that just goes around
[1:03:35] closing all the wall panels
[1:03:37] absolutely open that actually could even
[1:03:40] feel wrong like you know there could be
[1:03:42] guys in a state in which they say
[1:03:45] i expect everything to be closed if
[1:03:46] something is open
[1:03:48] maybe there's somebody here not
[1:03:49] expecting right and this we could also
[1:03:52] build on top of that it's going to be
[1:03:53] and that's going to be like javelin just
[1:03:55] walking around closing all the doors
[1:03:57] it's like excess hot man this is
[1:03:59] somebody always opening these wall
[1:04:00] panels
[1:04:02] and then we're just so cool here oh
[1:04:03] sorry yeah that's why it's so cool
[1:04:06] i was just saying it like substantially
[1:04:07] it's like super generic like in
[1:04:09] like how we sort of materialize it and
[1:04:11] split up everything into tasks
[1:04:12] and that's what makes it so cool because
[1:04:14] we can sort of do whatever we basically
[1:04:16] want you know we can we can
[1:04:18] change the tasks in every way we want
[1:04:20] and we can sort of
[1:04:21] make like um like so many different
[1:04:23] behaviors
[1:04:24] like because of this modularity yeah and
[1:04:26] this is the other magic
[1:04:28] uh magic task that is taking all the
[1:04:30] data we put it there
[1:04:31] and says which object which manikin tags
[1:04:34] i need to use
[1:04:35] to interact with that object and then we
[1:04:37] get that one from the item part and then
[1:04:39] we merge it
[1:04:40] from you know it's like there is like
[1:04:41] some variable here that get populated by
[1:04:43] the code
[1:04:44] that says that oh you are reading a take
[1:04:46] that means that you really need to use
[1:04:47] take for your action
[1:04:48] you're ready to use wall panel because
[1:04:50] we propagate there and then we also can
[1:04:52] guarantee that for example we can
[1:04:54] say like you know what you're trying to
[1:04:55] take the wall panel you just can't do it
[1:04:58] but if you're thinking something inside
[1:05:00] we can always
[1:05:01] we have two variables that basically
[1:05:02] tells us which usable we are in
[1:05:04] in this case for example the usable
[1:05:06] variable contains the wall panel
[1:05:08] and it's like we want to open the wall
[1:05:10] panel we don't want to take the wall
[1:05:11] panel
[1:05:12] but then we want to interact with a way
[1:05:16] with the item to take you know that is
[1:05:18] actually coming as well
[1:05:20] from the routing you know and it's the
[1:05:22] initial routing usable that is like i
[1:05:24] started from
[1:05:25] the fuse and i arrived to the wall panel
[1:05:27] so we have all these little pieces
[1:05:29] uh that has been you know implemented in
[1:05:31] all those years basically you know and
[1:05:32] especially with the
[1:05:34] the bartender helped us a lot and the
[1:05:36] engineer is helping us a lot uh you know
[1:05:38] then basically started to do this
[1:05:40] use channel inception you know and there
[1:05:42] was and i'd be able to say oh
[1:05:44] oh my god yeah this is scary and i was
[1:05:48] saying
[1:05:48] actually it's really cool you know we
[1:05:50] can make it working very well
[1:05:52] it's literally the only thing that you
[1:05:53] know only a designer could think about
[1:05:55] yeah yeah i don't know i was like and i
[1:05:57] usually notice that if it's possible in
[1:05:59] the tool
[1:06:00] you guys will do it like
[1:06:03] i i i i joked about how many segments
[1:06:06] how many times we covered the bartender
[1:06:08] but
[1:06:08] really the value of all that work it
[1:06:11] wasn't just the bartender it was
[1:06:13] it was it was creating this
[1:06:15] infrastructure that you've been showing
[1:06:16] us for this last
[1:06:17] hour uh that we can now apply to
[1:06:19] everything from engineers to pilots to
[1:06:23] to you name it i think we could probably
[1:06:25] do um
[1:06:26] a better job of simplifying this because
[1:06:31] what we're going through right now is is
[1:06:33] years worth of
[1:06:34] you know research and tech development
[1:06:36] and it's kind of coming out as probably
[1:06:38] a bit of verbal diarrhea but it's
[1:06:40] it's um we need to we need to make it
[1:06:43] faster for the science this is our next
[1:06:46] goal is of course like for example we
[1:06:47] have a tool we are working on that is
[1:06:48] the usable builder right i think some of
[1:06:50] those features are not yet supported in
[1:06:52] there this one
[1:06:53] i didn't show you today but the goal is
[1:06:55] to have these tools where
[1:06:56] you know you have a bit a bit easier
[1:06:58] like click approach
[1:07:00] compared to like the data for structure
[1:07:02] is mostly
[1:07:04] you know it's this data content but you
[1:07:06] know you don't necessarily have to
[1:07:07] interact with that right
[1:07:08] like you might have a tool that is much
[1:07:10] more visual that allows you to know to
[1:07:12] click here say oh i click on this
[1:07:14] item part cool i want to add this data
[1:07:16] directly and then it automatically
[1:07:17] propagates right this is our goal right
[1:07:20] you build the system and then you build
[1:07:21] the tools to make the system absolutely
[1:07:23] usable yeah sometimes we do it in
[1:07:26] parallel but you know that means also
[1:07:27] you're a bit slower and developing the
[1:07:29] system and it depends but on the
[1:07:30] priority of the company as well what you
[1:07:32] want to deliver
[1:07:33] i mean it was only a couple years ago
[1:07:34] that the concept of news channels didn't
[1:07:36] even exist
[1:07:38] and yet we still had usables in the game
[1:07:41] well we've got
[1:07:43] a little over 1200 people watching live
[1:07:45] who all are ready to create
[1:07:46] npcs now thank you guys for
[1:07:49] you know all the attention it is i hope
[1:07:52] like again
[1:07:53] it for me it feels always like that is
[1:07:55] not enough what i'm showing right but i
[1:07:57] think it could be nice to also get the
[1:07:58] feedback from people like whatever they
[1:08:00] want to see
[1:08:00] we can show it next time you know uh
[1:08:04] hayden before i let you go i have to
[1:08:06] mention your your rgb
[1:08:08] chair
[1:08:13] it's the 100 million pewdiepie limited
[1:08:16] edition chair
[1:08:18] i have to represent oh no
[1:08:21] no i'm one of them i'm sorry discreet
[1:08:24] correct
[1:08:25] went straight down the toilet after you
[1:08:27] won come on
[1:08:30] all right well that's where that's where
[1:08:32] we'll end the show
[1:08:33] uh thanks fran dan jacob
[1:08:37] adrice and hayden uh thank you for
[1:08:39] taking the time out of the end of your
[1:08:41] week
[1:08:42] uh to be here on the show uh
[1:08:45] i understand you're the only studio that
[1:08:47] doesn't have monday off right
[1:08:49] no but but the third
[1:08:53] is off in germany so yeah yeah
[1:08:56] yeah yeah you guys have plenty of bank
[1:08:57] holidays but you you enjoy the
[1:08:59] the one day you guys have to work and
[1:09:01] we'll all be honest on monday so right
[1:09:06] uh thank you everybody uh guys this has
[1:09:08] been star citizen live game dev
[1:09:10] building npc behaviors i'm was your i
[1:09:13] was your host uh jared huckabee
[1:09:15] uh we'll see you next week everybody
[1:09:17] take care bye
[1:09:18] bye guys what's a pleasure see ya
[1:09:23] pewdiepie chair really
[1:09:45] you

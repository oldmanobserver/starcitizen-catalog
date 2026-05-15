# Star Citizen Live Gamedev: Star Kart Racing

**Video:** https://www.youtube.com/watch?v=K4OGFEQ9HKI
**Date:** 2022-08-12
**Duration:** 1:04:46

## Transcript

[00:02] hello everybody
[00:04] welcome to another episode of star
[00:06] citizen live game dev star cart racing
[00:09] uh i'm the person who lost his regular
[00:11] prescription sunglasses and
[00:13] this is all i've got right now so i can
[00:16] see the screen i'm jared huckabee hi
[00:19] have you seen my glasses
[00:22] i haven't
[00:23] joining us on the show this week is
[00:25] a a mr martin uh from the from the from
[00:29] which which environment team are you on
[00:30] you're on eu sandbox
[00:33] i don't know what team are you on hi
[00:35] um i'm on the sandbox 2 team you're on
[00:38] eu sandbox too
[00:40] yeah that that i mean really i mean
[00:42] we're not going to try to throw eu
[00:43] sandbox 1 under the bus but
[00:45] sandbox 2 is better right
[00:47] ah yeah totally
[00:50] so uh uh uh martin
[00:52] what is your title i forgot to ask
[00:53] before the show i was too busy looking
[00:55] for my glasses
[00:56] hey i am an environment artist um
[00:59] two
[01:01] environment artists
[01:03] and what does an environment auto artist
[01:05] two do
[01:07] um yeah like the title says i'm doing
[01:10] environments like i'm modeling assets
[01:13] i'm
[01:14] texturing it i'm putting them into the
[01:17] level and then i'm dressing levels with
[01:20] the assets i and other artists created
[01:23] and as folks may have seen on inside
[01:26] star citizen last week uh when martin
[01:29] had a little bit of time between tasks
[01:32] uh he uh he
[01:35] how did this happen would did you take
[01:36] it upon yourself were you did nick come
[01:38] over and be like hey you know i need you
[01:40] to do this like how did the how did the
[01:42] idea for this startup
[01:44] um yeah basically nick came to me and he
[01:48] asked me if i wanted to do to work on a
[01:51] little side project um the expectations
[01:55] were not really high because it was like
[01:56] really not that much time for um
[02:00] for the whole thing um and it was just
[02:02] like hey maybe you have some time maybe
[02:04] you want to try to build something in
[02:07] this hall and i was like yeah sounds fun
[02:10] so um we were just brainstorming a bit
[02:13] um
[02:14] and uh we came up with the goku track
[02:17] because it's
[02:18] um
[02:19] yeah you can actually fit all the space
[02:23] in this hall quite good
[02:25] with not too many assets
[02:28] so
[02:29] that's how it happened
[02:31] and these kind of things
[02:33] happen quite often in game development
[02:36] we saw i want to address some of the
[02:37] comments we saw on the youtube and
[02:39] spectrum and stuff afterwards um
[02:42] game dev if you haven't if you've
[02:44] watched everything that we've published
[02:45] uh
[02:46] at least in the eight years i've been
[02:48] here i think
[02:49] when we last counted it's something like
[02:51] 2300 videos
[02:53] uh that that that i've made for star
[02:56] citizen uh i hope you'll get a sense
[02:58] that nothing is ever just the work of
[03:00] one team it everything in star citizen
[03:03] everything game development requires the
[03:05] the work of this team working with this
[03:07] team and this team and and has
[03:08] prerequisites of of this team's work and
[03:11] stuff like this and while there are
[03:12] certain teams that are obviously the
[03:14] lead in charge of this this is a this is
[03:16] a project by you sandbox team uh what
[03:18] happens often in gamedev is that some
[03:21] things go faster than others uh it's
[03:24] game development not game construction
[03:25] as you're figuring things out as you're
[03:27] fighting the bugs as you're fighting the
[03:29] bugs to get your stuff made
[03:31] sometimes you're left with you know
[03:33] extra time here while you can't progress
[03:35] to your next thing while somebody else
[03:36] is working on them uh so
[03:39] lots of different companies work with
[03:40] that kind that phenomenon in different
[03:42] ways uh one of the things that i think
[03:45] is really awesome about here is we have
[03:47] our kind of backlog our wish list of
[03:49] tiny things like if we find the time if
[03:51] we if we find the resources we
[03:54] definitely want to throw this stuff in
[03:55] and that's how things like
[03:58] like the snake pit racetrack uh uh uh
[04:01] from nemanja panic got in and how things
[04:03] like uh our
[04:05] buggy track racing uh from from martin
[04:08] here does so what we're what are we
[04:10] doing today
[04:12] um so today we're building another race
[04:15] track a smaller one
[04:17] but uh with the same assets and um yeah
[04:21] let's see how far we can get all right
[04:23] so i'm going to start up the screen
[04:24] share here there you go
[04:26] so
[04:27] yeah so
[04:28] before we get started i do want to
[04:30] remind folks that absolutely nothing in
[04:32] star citizen can be made in an hour
[04:35] uh
[04:35] it's like i said not only does it take
[04:37] the work of all these teams but it boy
[04:40] we you know just
[04:41] what you're going to see is going to be
[04:43] a small demonstration of process uh kind
[04:45] of an accelerated in certain places so
[04:47] keep that in mind uh and with that
[04:49] martin i'm gonna turn it over to you
[04:51] it's your show
[04:53] all right um so
[04:55] what i did is i took another room from
[04:58] the convention hall a smaller one so
[05:02] hopefully we can make a
[05:04] whole racetrack in um built in here
[05:07] and um
[05:08] i prepared it a little bit cleaned it up
[05:11] put some branding on it so it looks nice
[05:14] and
[05:15] also i have all my modular assets
[05:19] um on the side here i put them already
[05:21] so so it's just quicker for me to just
[05:23] grab them from here and place them in
[05:26] the level
[05:27] um i first what we're gonna do is we're
[05:30] gonna place our roads um we try to make
[05:33] it fun and kind of unique in a way
[05:37] then we're going to put in some lights
[05:39] um for example um
[05:42] those railings have lights i already
[05:44] placed them
[05:45] so we will just put
[05:47] once we have finished uh happy with the
[05:49] road uh the track we just place all
[05:53] those railings in then we're gonna get
[05:55] some lights then we're gonna play some
[05:57] of those um
[05:59] checkpoint gates and spotlights i also
[06:03] have a bigger spotlight if we need more
[06:04] lights we can place them
[06:07] everywhere
[06:09] if it looks good then we can
[06:11] um go into more details like placing
[06:15] those uh
[06:16] smaller props like those tires and and
[06:19] this cone
[06:21] which are also physical objects so when
[06:23] we drive over it they will
[06:25] fly away um
[06:28] and also then we can um put in some more
[06:31] dressing like those uh ground decals
[06:35] this um
[06:37] uh oil spots and stuff like that just to
[06:40] spice it up a bit
[06:42] um
[06:43] yeah
[06:44] so i think i will just start putting my
[06:48] um track pieces which we're going to use
[06:50] the most
[06:51] inside my haul and then we can start
[06:54] with it
[06:55] yeah man have at it
[06:58] i don't know if you know this but uh uh
[07:02] uh one of the things i did to audition
[07:04] for you know working here
[07:06] was i took the original hanger module
[07:09] you know back before arena commander was
[07:11] out and then it was just a single player
[07:13] hanger module and i actually uh built a
[07:16] racetrack inside the the hanger module i
[07:19] went in i got the cryengine sdk and i
[07:21] pulled it apart and i made i connected
[07:23] all four
[07:24] hangers and and built a race track
[07:26] within the the
[07:28] hangers nice and i was doing youtube
[07:31] videos the uh racing around the track
[07:34] and they weren't getting many views
[07:35] because
[07:37] i just wasn't i wasn't i wasn't very
[07:39] good at the youtube stuff
[07:41] but uh uh but uh
[07:43] uh event but i'm like i know how to get
[07:45] it gonna get views i'll i'll i'll make
[07:47] this i'll make this multiplayer so then
[07:49] i went and got a a crisis two and and uh
[07:54] the
[07:55] and basically reverse engineered all of
[07:57] the multi-player functionality out of
[08:00] crisis 2 and put it into the hangar
[08:02] module
[08:03] and had the very first star citizen
[08:05] multiplayer match of all time which was
[08:07] me and a guy from australia who loaded
[08:10] into my hangar and we raced around on
[08:12] buggies
[08:13] and that was literally my audition for
[08:15] for cig i'm like i'm like look it's i
[08:17] don't just talk and make videos i can
[08:19] actually do this stuff and understand
[08:20] what the stuff what these people are
[08:22] doing you should hire me
[08:26] that's cool
[08:27] so
[08:28] this this is a bit somebody reminded me
[08:29] of it on twitter the other day like this
[08:31] is where you got your start i'm like oh
[08:32] yeah that's why i like picked up so much
[08:35] awesome
[08:37] um so
[08:39] just to explain a little bit what i'm
[08:41] doing i'm just connecting those pieces
[08:43] as you can see
[08:45] they um snap nicely together
[08:48] most of the time
[08:50] it can happen
[08:51] that stuff like this is happening but
[08:55] that's not a big issue um actually this
[08:57] one is quite easy to fix
[08:59] just had to change my
[09:01] coordinate system
[09:04] from white to white
[09:07] from
[09:08] worlds to local um so it follows this
[09:11] direction you know the the 45 degree
[09:14] direction
[09:15] um
[09:17] and um
[09:18] what i
[09:20] would like to do is to focus on this
[09:24] inner area here you know so it's
[09:26] surrounded by this um
[09:28] orange carpet so
[09:30] i don't have to cover that much
[09:33] that much space sorry
[09:35] and
[09:37] also
[09:39] um
[09:41] yeah
[09:42] how can we make it fun
[09:45] i
[09:46] think we should
[09:48] already place some jumps in here
[09:51] right
[09:52] also if
[09:54] the hall is too dark for you just um let
[09:56] me know so i can um
[09:58] yeah make it a little bit more brighter
[10:01] so far so good uh of all the feedback
[10:05] that we saw about the the isc segment
[10:08] and we didn't we didn't show everything
[10:10] in the racetrack we didn't show how you
[10:12] started and load it in and and stuff
[10:14] like that you know i have to leave some
[10:15] things for for players to discover you
[10:18] know once it hits ptu and stuff
[10:20] but uh i think one of the biggest
[10:22] surprises besides just how awesome it
[10:26] was
[10:26] uh
[10:27] it was the verticality i think a lot of
[10:30] people
[10:31] uh when they first saw the the ads in uh
[10:34] orizon uh kind of expected something
[10:37] that was just flat
[10:39] and
[10:39] you know you know
[10:41] like an old slot car you know race track
[10:44] kind of thing but i think the the
[10:45] verticality with the jumps and the dips
[10:47] and stuff was
[10:49] was really impressive to a lot of folks
[10:52] yeah
[10:53] we should also include it
[10:55] in here that that was my way of subtly
[10:58] trying to encourage you to include yeah
[11:00] um
[11:04] maybe we can
[11:06] not just drive to a higher platform
[11:08] where we can we can jump up onto it
[11:11] i don't know if it works hey hey we're
[11:14] good we're just trying to let's try
[11:15] trying things do it
[11:17] so
[11:19] i mean how many times is the very first
[11:21] version of a racetrack ever ever work
[11:25] yeah
[11:28] yeah i did so many racetracks just
[11:30] figuring stuff out um also back then
[11:33] when i did the racetrack i um
[11:37] modeled those um track pieces parallel
[11:39] to it because i didn't know how white
[11:42] the track should be
[11:44] um how tight the corner should be and
[11:46] stuff like that because you know it's
[11:48] just something
[11:50] you never had grey cat racing in the
[11:52] game so um
[11:55] um yeah i just had to try it out and
[11:59] it i had a lot of iterations and yeah
[12:02] until it felt good it took a while
[12:05] i i think there's
[12:07] i think there's probably a
[12:10] misperception a misconception if you
[12:12] will
[12:12] that
[12:13] level design always and many times this
[12:16] does but always starts out with like
[12:19] drawing it out on paper and you know
[12:21] laying it out and stuff like this i get
[12:22] the sense uh from the limited time that
[12:25] i've talked to you you didn't exactly
[12:28] write all this out of paper before you
[12:30] started messing with it am i right
[12:33] nah especially for for the racetrack
[12:36] it's like it's one thing to draw it on
[12:37] paper actually i did it
[12:39] but
[12:41] you never know if it really is fun when
[12:43] you play it
[12:44] that's a whole nother thing
[12:46] um
[12:47] it
[12:48] looks like i cannot jump high enough
[12:52] but
[12:54] you know what let me try to extend
[12:58] the ramp a little bit
[13:03] [Music]
[13:04] so since
[13:07] this is um
[13:09] yeah uh
[13:12] not a unique part it um
[13:16] might look a little bit um
[13:19] you know not perfect
[13:22] but i hope the jump will work
[13:28] and i like this
[13:30] sometimes you have to be creative and
[13:32] just try things kit bash some stuff
[13:36] until it works
[13:37] and then you can go polish it
[13:43] ignore these
[13:50] all right
[13:53] and that's what i actually did i i
[13:56] placed some things then i tested it
[13:59] noticed oh it's not working tested
[14:01] it again
[14:02] did some new stuff
[14:04] wow okay this is cool
[14:07] works
[14:11] i think once you drop that you should
[14:12] you should stay at that little elevation
[14:14] though
[14:19] like build your way up and then like a
[14:21] roller coaster like as you're looping
[14:23] around like like spiral up and then
[14:26] spiral down
[14:29] yep inside of it
[14:31] sounds good
[14:33] is this a low gravity hanger i don't
[14:35] know
[14:36] no it's not
[14:42] see
[14:43] okay
[14:45] now we have our elevated
[14:48] track
[14:50] um okay in general how should this track
[14:53] look maybe like
[14:55] something like an eight so we have this
[14:58] overpass
[14:59] we were driving on it right
[15:02] could be cool and also we should add
[15:04] more turns i think this
[15:06] is kind of boring right now
[15:09] yeah
[15:14] so
[15:22] no
[15:28] do do do
[15:49] uh euro trucker 24 says can a ground
[15:52] vehicle make the best in show that's
[15:54] entirely up to you
[15:58] i mean i don't know the rules
[16:00] but
[16:02] i mean
[16:04] it's people power
[16:16] um
[16:20] that's fine
[16:22] all right
[16:32] your trigger always says i always
[16:33] thought it was i mean
[16:35] if you can find somewhere where it says
[16:36] that i mean i don't know you're a
[16:37] trucker that's the problem i'm saying i
[16:39] don't know unless you can find somewhere
[16:41] where it's expressly says that i don't
[16:43] know why anybody would think that
[16:46] but again i don't know maybe it is maybe
[16:48] it is only flyable ships only but i'm
[16:51] saying look at the website read the text
[16:53] see if that's what it says you don't
[16:55] have to wonder
[16:56] the information is out there
[17:04] all right
[17:05] um
[17:06] i
[17:08] added a few turns um
[17:11] again test it see if it's fun
[17:14] yeah jumping game zerg master says i
[17:17] mean it's called ship showdown yeah but
[17:18] that's because we like alliteration
[17:20] it's it's i mean vehicle showdown
[17:22] doesn't doesn't quite roll off the
[17:23] tongue the same way you know what i'm
[17:25] saying
[17:29] it's like they may all be members of the
[17:30] ship team but they also work on ground
[17:33] vehicles too so
[17:39] nice oh love the bank there
[17:43] all right
[17:44] love the bank coming out of the oh
[17:47] yeah that's fine i it just jumped off
[17:50] and whip showdown
[17:52] that's totally fine that was intended
[17:55] um
[17:57] all right so far i think it's it's okay
[18:01] um
[18:05] maybe this piece is a bit too long um
[18:10] let's shorten it a bit and add a few
[18:12] more turns
[18:15] on the upper area
[18:26] actually what we also could do at some
[18:28] point um once we have the track
[18:31] add some obstacles on the track
[18:34] um that could be also fun for example
[18:37] the tires so you have to dodge them
[18:40] maybe
[18:42] just remind me later when when i forget
[18:44] it again
[18:47] yep euro trucker went and read and said
[18:48] ship showdown is a month-long
[18:50] multi-phase aerospace smackdown where
[18:51] you decide the best ship slash vehicle
[18:53] in the verse yeah see
[18:56] the power of reading
[19:11] i was just reading an article
[19:13] about how
[19:14] jen's ears
[19:16] like use tik tok and
[19:18] like 40 percent of all gen zeros use
[19:20] tick tock and uh instagram for search
[19:22] like information search
[19:25] because they'd rather see small videos
[19:27] with the information than have to read
[19:29] i was just like
[19:30] i i think i'm technically a
[19:33] elder millennial i think that's that's
[19:35] the new classification for me and i'm
[19:37] like i would i would much
[19:39] i'm the guy who makes all the videos but
[19:40] i would much rather read stuff
[19:42] personally
[19:44] it's one of the great contradictions of
[19:46] my life
[19:52] i see a lot of people talking about
[19:53] voting for the ptv i mean you can you
[19:55] can do that don't get me wrong
[19:57] but
[19:58] i mean
[20:00] there are a lot of
[20:01] there are a lot of great ships out there
[20:03] that you know personally if i were
[20:05] allowed to vote
[20:06] that you know like i i'd i'd rather see
[20:08] new options for
[20:10] for
[20:11] a couple like like my daily drivers like
[20:13] like the hammerhead like for me
[20:15] personally i adore the hammerhead i i i
[20:18] have a hard time not voting for the
[20:19] hammerhead every single year and just
[20:21] getting as many many paints
[20:23] uh for the hammerhead as possible that's
[20:25] me
[20:26] personally
[20:27] like if the genesis starliner were out
[20:30] there'd be no force on earth that could
[20:32] make me vote for something other than
[20:33] the genesis starliner
[20:36] i mean i i i get the meme boats i get i
[20:38] get the the ptv meme vote and the the
[20:41] the i think there's there's a mule
[20:44] a faction for meme vote out there but
[20:47] i don't know
[20:50] mean things fun every once in a while
[20:52] but
[20:55] i think you only get the opportunity
[20:57] once a year
[21:02] me personally i'd get pains for the
[21:05] the stuff i'm actually out there using
[21:07] every day
[21:08] but that's me
[21:09] i also like to read so i'm weird
[21:14] no reading is fine
[21:16] i like where this is going i like where
[21:18] this is going mine
[21:21] right
[21:22] all right now we have to connect it
[21:23] somehow yeah the 45 after the jump is a
[21:26] really nice touch
[21:32] yeah
[21:34] actually let's just
[21:37] go down again
[21:39] um
[21:41] hmm
[21:42] all right
[21:46] uh jared aren't you generation x yes but
[21:48] you know every time they they do these
[21:50] things they they come into like sub
[21:52] divisions and whatever i uh in the
[21:54] larger divisions i'm generation x but
[21:56] then they came up with this subdivision
[21:59] that's like
[22:00] a four year period where it's just
[22:02] coming out of generation x and uh
[22:04] whatever the heck was after that they
[22:05] called it
[22:07] uh uh
[22:09] what i call elder millennials it's
[22:11] basically people who were born when star
[22:12] wars was coming out
[22:14] like if you were born when star wars was
[22:15] coming out it like fundamentally changed
[22:17] your dna and you're not quite you're not
[22:19] quite gen x anymore and you're
[22:21] definitely not a millennial it's it's
[22:23] this it's the star wars generation and
[22:25] that they call it elder millennial now
[22:27] or xenial xenon was another thing senile
[22:30] sounds like
[22:32] i don't know xenial sounds like
[22:33] something that they they got from a
[22:34] final fantasy video game or something
[22:40] i'm not a sociologist i don't make the
[22:41] rules
[22:45] meh almost fits
[22:48] um
[22:52] no problem
[22:53] uh senesei 416 says is this star citizen
[22:56] or a racing game
[22:58] why can't it be both
[23:04] who wants to put star citizen in a box
[23:08] not me but that's the cool thing about
[23:10] star citizen right that you cannot do
[23:12] all this crazy
[23:15] it's a sandbox
[23:18] that looks perfect martin good job
[23:22] thank you ship it
[23:25] come on
[23:28] you don't notice it hey hey hey
[23:30] hey you only got an hour i understand
[23:32] man you gotta do what you gotta do yeah
[23:38] you know what that's that's for cleaning
[23:40] up later on
[23:42] see there's some of my gen xers
[23:44] understanding a dirty dancing reference
[23:47] good job nighthawk
[24:04] we need an in real life version of this
[24:05] race track in the manchester studio
[24:09] new manchester studio is pretty big but
[24:11] we're already pushing some space limits
[24:13] i'm not sure we got room for a
[24:16] for uh
[24:18] our track just yet
[24:20] we need to we we need another floor you
[24:22] got to talk somebody into getting
[24:23] another floor of the building
[24:24] another floor
[24:26] well if we're going to fit it if we're
[24:27] going to fit a
[24:29] a a a go-kart track in the in the office
[24:32] yeah sure why not let's go for it maybe
[24:35] you can also have one in the frankfurt
[24:36] studio right
[24:43] all right now i have the whole track
[24:46] let's see if
[24:47] if it's fun if it works
[24:50] that's not the whole track we're only
[24:51] halfway through
[24:54] yeah we're gonna go you you raise this
[24:56] then we're gonna we're gonna we're gonna
[24:57] get crazy we gotta go we gotta go up
[24:59] another level
[25:01] yeah sure we can go crazy
[25:07] just love the 45 coming out of the jump
[25:10] big fan of that
[25:27] all right all right so as your art
[25:30] director for this hour i went
[25:32] i'm going to tell you where we break
[25:33] watch keep racing
[25:35] oh sorry i already pressed it all right
[25:38] let me jump back into the game
[25:41] no problem
[25:43] this is too nice and professional we're
[25:45] gonna we're gonna make this really dumb
[25:47] here
[25:48] i gotta i got a reputation to keep
[25:50] martin
[25:51] all right
[25:54] i'll go around here it's all good
[25:59] all right so we're going to jump up here
[26:04] make this turn
[26:06] come around hard turn
[26:09] hard turn
[26:11] and then right here stop
[26:14] come on now now come on back back up
[26:20] all right so you see where it
[26:22] it it curves down here
[26:24] we're going to go we're going to go up
[26:26] here
[26:27] up again we're going to go up again for
[26:29] a third
[26:30] level for a third level all right crazy
[26:32] yeah sure
[26:42] did they mention where it's going to be
[26:43] yet uh the the
[26:46] the racetrack that you saw in isc last
[26:48] week uh ruby that's an origin that's in
[26:50] the origin convention center this is
[26:52] just us
[26:53] uh messing around in a side room
[26:57] they've let me put many things in the
[26:59] game i don't think this will be one of
[27:00] them
[27:04] like i've named six spaceships
[27:07] and
[27:08] a whole bunch of the subscriber stuff
[27:10] for like two years is you know started
[27:12] from my ideas and stuff like that but i
[27:14] don't i think asking for
[27:16] the the the
[27:18] monster a racetrack we're about to make
[27:21] right now it's probably a bit too much
[27:26] uh can we get enough speed for a loop uh
[27:28] that was we discussed that on isc uh
[27:30] last week that the gray cat as it's
[27:31] currently tuned uh isn't quite fast
[27:34] enough
[27:34] for uh
[27:37] all right
[27:39] so yeah so so stay at this so stay at
[27:41] this elevation and come and come around
[27:46] we're not we're not going down yet no no
[27:48] down yet
[27:49] no down no no down yet man
[27:53] all right martin did not what do you
[27:54] want me to do martin did not know what
[27:55] he was getting into so so erase that so
[27:58] so so
[28:00] so go straight forward and then come
[28:02] make your next turn like go all the way
[28:04] to the end like you're doing just just
[28:05] straight forward for a bit
[28:06] uh do do do do a curve
[28:08] uh do you have curves on both sides like
[28:10] like a straight like a straight away
[28:11] with a curve
[28:12] with a bend
[28:13] you know it curves up like the 45s you
[28:16] have a straightaway with a 45
[28:18] uh i don't know what you mean uh okay
[28:21] you know how the the side of the track
[28:23] can bend up to a 45 degree angle i think
[28:25] it's maybe it's actually 30 degree
[28:27] those ones like that yeah do you have a
[28:28] straightaway with one of those
[28:30] um yeah
[28:33] actually it's
[28:35] um where have it
[28:37] where are they
[28:39] like those guys
[28:41] and then i just place two of them next
[28:43] to each other
[28:44] and that that'll create a straight away
[28:46] yep
[28:51] page
[28:52] you can get rid of those
[28:54] the pieces that are there you can just
[28:55] delete them we're not gonna use
[28:56] those yeah get rid of that guy
[29:00] get rid of that guy i push them to the
[29:02] side for now maybe maybe i'm gonna use
[29:05] the tire all right so put that in there
[29:07] and then
[29:10] yep and now zig zag back the other way
[29:12] no no instead of making the turn we're
[29:14] just gonna zigzag a little bit so that
[29:15] one just curved to the left now curve
[29:17] back to the right
[29:18] all right we're getting janky here
[29:33] doesn't fit that good but
[29:36] okay that's fine for now i can fix it
[29:38] later
[29:39] right and back again all right now you
[29:41] got you got an extra piece in there
[29:43] don't come back one piece
[29:45] come back one p oh no no just selection
[29:48] come back a piece
[29:49] come back a piece
[29:51] come back a piece
[29:52] what what yeah come back
[29:54] retrace your steps
[29:56] right back one more
[29:59] that one get rid of that one
[30:03] wait this one yeah get rid of that one
[30:05] yeah okay okay
[30:08] okay there i think two pieces on top of
[30:12] each other sorry
[30:14] um yep okay just clean it up
[30:20] okay now that piece that's right there
[30:21] get rid of it
[30:25] all right no that's good i'm sorry yeah
[30:27] now now you alright undo that
[30:30] this is why i'm not an art director
[30:33] undo bring it back
[30:38] yep
[30:40] and now
[30:41] keep that curve
[30:43] i can keep that curving to the right and
[30:44] continue the curve
[30:48] it was more it was a more pronounced
[30:49] curve than i was expecting
[31:00] and then add one more
[31:02] the same direction
[31:08] yep
[31:09] and now
[31:10] add
[31:12] and now start bending back the other
[31:14] direction
[31:16] oh god yep this is this is a dead man's
[31:19] curve this is a dead man's curse
[31:21] three levels up this is dead man's curve
[31:26] we're gonna see some people falling off
[31:27] there you go
[31:29] do you want me to do
[31:31] yep
[31:32] and then come back and continue until
[31:34] we're back on the straightaway
[31:39] you got it you got it you get you're
[31:41] getting my crazy you're getting my crazy
[31:43] okay and now and now a straight piece
[31:46] little straight piece
[31:59] yep you know what comes next martin
[32:01] uh no i don't we go up again
[32:04] give me a jump you know that at some
[32:06] point we we have to get down again right
[32:09] i know
[32:10] we're only halfway through
[32:11] so give me another jump up give me
[32:13] another jump up
[32:14] a jump up all right let's just copy this
[32:17] one
[32:19] man this is martin's first crazy
[32:35] um
[32:38] you know what
[32:43] like this
[32:46] um
[32:54] okay at some point we have a roof right
[32:58] yeah this is as high as we're going this
[32:59] is the size we're going okay
[33:02] so let's build a spill say we need a
[33:04] landing someplace for it to land
[33:08] um
[33:15] we gonna need a ramp like this
[33:21] just for referencing the height how high
[33:23] i can get go
[33:26] um
[33:29] yo
[33:31] my snapping was off that's bad
[33:33] all right
[33:36] and i guess you want a straight piece
[33:40] do we have to slope down
[33:42] right there oh yeah did just give me
[33:45] another flat piece just like just land
[33:46] on the flat piece
[33:49] we can go with this one
[33:52] and then
[33:53] give me another flat piece
[33:56] i'm about to turn it over to you because
[33:58] your challenge will be to figure out how
[33:59] to get back down after we do this yeah
[34:03] so i'm about to hand it back over to you
[34:06] thank you
[34:07] um
[34:08] now we're gonna okay this is not a
[34:10] challenge but
[34:11] um
[34:12] you know what actually i should test it
[34:14] first before i let's test it and see if
[34:16] we can get up there and at this point
[34:18] now you have to figure out how to get it
[34:20] back down
[34:21] that'll be your challenge
[34:23] nice awesome thank you very much jared
[34:25] more pickier than cr heck no
[34:42] yeah this sounds dismissive thank you
[34:46] [Music]
[34:53] [Music]
[34:55] i don't know what the great cat sounds
[34:56] like anymore it's been too long dead
[34:58] man's curve don't fall don't fall don't
[35:00] fall it's not that hard to be honest
[35:05] okay
[35:06] now we are top yeah so yeah so now now
[35:08] it's all you
[35:10] now it's all you now you got to figure
[35:11] out how to get back down
[35:13] and connect it all
[35:15] awesome okay yeah 25 minutes yeah 25
[35:18] minutes this is your challenge that's
[35:19] fine you can't change anything else
[35:23] like you have to keep what's there
[35:24] and now you have to connect to it
[35:26] all right
[35:30] to be honest
[35:32] that shouldn't be too hard i think i
[35:34] would just make a turn here maybe add
[35:36] some more curves to it and then go down
[35:39] here at the side
[35:41] and then connect it here
[35:43] so that's the idea let's see how it
[35:45] works
[35:47] now the exciting thing would be to go
[35:49] down in the middle of the track
[35:55] oh man
[35:56] don't make me do this
[35:58] i'm just saying that would be the baller
[36:00] the baller thing would be good to go
[36:02] down through the middle
[36:06] yeah i'm excited
[36:10] martin's never going to come back on scl
[36:12] ever again
[36:18] oh that's a big curve
[36:20] i like it i like it
[36:29] maybe there shouldn't be any railings on
[36:31] top just
[36:33] so
[36:34] you really get punished when you fall
[36:36] down
[36:36] [Music]
[36:38] right that's what you like
[36:42] the this is rainbow road baby
[36:53] is starting to look like a mighty mouse
[36:54] roller coaster
[36:56] yeah it is i cannot deny that kid
[36:58] hercules
[37:00] cannot deny it
[37:03] nor would i want to
[37:08] all right now we have to get down like
[37:12] um a lot
[37:13] yeah
[37:15] um
[37:17] i placed this one piece yet this side no
[37:20] i need this one i think
[37:38] it's basically playing lego kind of yeah
[37:46] well i didn't i i actually just recently
[37:48] discovered the joy of lego i had never
[37:51] had lego as a kid
[37:53] uh until until we did this uh cherry
[37:56] live stream
[37:57] event
[37:58] last month uh when i had what i had with
[38:00] were these uh
[38:02] fisher-price
[38:04] building
[38:05] thing called construx that came in a big
[38:08] bright orange uh briefcase
[38:11] and uh i actually had it i actually had
[38:13] a set of constructs with me during the
[38:15] charity livestream and one of the
[38:17] builders challenges was uh
[38:20] jared's pain
[38:21] and if they had drawn one i was going to
[38:23] get up from the desk and bring them my
[38:25] personal collection of constructs and
[38:26] force them to stop using lego and start
[38:29] building with constructs but nobody
[38:31] nobody drew it
[38:32] yeah that's that's wrong lego is just
[38:34] the best
[38:36] i think it's pretty good
[38:38] but now i want to take the uh i want to
[38:40] take the uh orange construction case for
[38:42] my construct so i'm going to get like a
[38:44] foam insert and turn into a laptop case
[38:49] all right i don't know if
[38:51] this will work so um
[38:54] oh that's great i
[38:55] think that would just fall off the
[38:57] stairs
[39:02] let's jump in and try
[39:07] we are going to need to figure out where
[39:08] the starting point is
[39:12] yeah
[39:13] it would make sense to have it like
[39:16] let me drive there like here
[39:19] somewhere you know um i have to starting
[39:21] position block maybe we can integrate it
[39:23] somehow yeah um
[39:26] but yeah let's um finish the racetrack
[39:29] first
[39:31] okay new
[39:34] that's a cool jump still
[39:43] i mean usually i would
[39:45] um try to make it kinda realistic you
[39:47] know i'm having supports um supporting
[39:50] the
[39:51] uh
[39:52] racetrack the upper
[39:54] floor um racetrack
[39:56] but right now i don't even know how to
[40:00] add supports in here because it's just
[40:02] crazy
[40:03] let's grab left racetrack
[40:05] all right remember we got grab left
[40:09] whoop technology
[40:10] okay i don't know that was kind of
[40:13] meh
[40:14] all right
[40:21] hey you just need some zigzaggy
[40:24] to get to get you connected
[40:27] yeah but but i'm not happy with this
[40:29] part it feels kind of you don't have
[40:32] control at all over your car right so
[40:34] maybe i should one drop and then a
[40:37] straight and then a turn and then
[40:38] another drop and you know
[40:40] yeah
[40:42] so man you could do this could since
[40:44] it's a you know inside a convention
[40:46] center these could be uh hanging
[40:48] supports
[40:50] the track could be suspended from the
[40:51] ceiling ooh yeah right
[40:54] i like that idea
[40:56] sounds good good job don't please
[40:59] good idea
[41:04] but i don't have the assets for it so no
[41:06] no sorry not going to happen today
[41:08] we'll use grav love today
[41:12] and then
[41:13] like
[41:15] the the health and safety department
[41:17] will make us
[41:19] ceiling supports later
[41:29] alright
[41:33] uh can you take a dragonfly on the track
[41:35] uh
[41:36] the tracks are really scaled and built
[41:39] for
[41:39] the gray cat and stuff like this it's
[41:42] it's
[41:43] remember this this is this is btr buggy
[41:45] track racing it's not really
[41:48] built for the other vehicles
[41:51] there would be all kinds of other
[41:52] additional
[41:54] considerations that would need to be
[41:55] taken in
[42:01] it's not to say there won't be some kind
[42:03] of you know dragonfly racing in the
[42:05] future it's just
[42:06] that not all things can be all things
[42:09] and this is this is this is for grey cat
[42:11] ptvs
[42:15] oh it looks crazy but i like it yes it's
[42:18] cool something
[42:20] different all right so so you wanted to
[42:22] integrate your starting
[42:24] yeah let's take it
[42:27] um
[42:33] yeah
[42:34] might not look perfect because
[42:37] um
[42:39] it's not connecting
[42:41] that well
[42:43] but who cares
[42:51] no
[42:54] maybe i should know what what if you
[42:55] should play that piece
[42:58] replace that straight piece with the
[43:01] launch there
[43:04] yeah that guy yeah that guy right there
[43:06] if you replace that piece right there
[43:08] yeah no because you have those bumps
[43:10] here
[43:13] um
[43:16] [Music]
[43:19] you know what
[43:20] i will just place it
[43:22] here for now
[43:23] i had to turn to it
[43:35] like this
[43:41] and then add another straight piece to
[43:43] connect it
[43:46] you're still gonna have to bump um
[43:50] because you know i need a we
[43:54] need another piece something like
[43:57] this one but
[43:58] i have
[44:00] um yeah here this
[44:02] ramp so um because for the other
[44:05] racetrack i needed it
[44:07] so it's a kind of unique piece
[44:10] maybe i shouldn't have done that no yeah
[44:12] you use that replace the straightaway
[44:14] with that guy and then elevate the
[44:17] the the gray cat the the the launch pad
[44:19] yeah
[44:20] yeah it could also work
[44:23] we're not up we're already using grab
[44:25] live
[44:27] yeah just yeah there you go
[44:34] um
[44:38] can't you hear the grav left
[44:40] [Music]
[44:42] yeah i can hear it
[44:45] all right yeah awesome
[44:48] now let's put our grey cat
[44:53] to the starting position
[44:58] and this is why race tracks take longer
[45:01] than one hour
[45:09] wait okay so we don't have that much
[45:11] time anymore to to
[45:13] build in
[45:14] all the cool
[45:17] railings and and gates and stuff
[45:20] but that's fine still got 15 minutes
[45:23] yeah
[45:24] no worries i can do everything
[45:33] all right let's see
[45:38] [Music]
[45:54] i wonder if zoom would share the sound
[45:58] i have to turn off in the engine anyway
[46:01] because at some points it was just
[46:04] you know i couldn't hear it again
[46:13] [Music]
[46:22] cool
[46:32] you know
[46:34] all right all right
[46:35] that's uh
[46:37] still a bad
[46:40] thing a different ground vehicle and try
[46:43] it with a different ground vehicle let's
[46:44] demonstrate what we were just talking
[46:45] about about how these tracks are really
[46:47] built for a grey cat
[46:49] let's see what happens if we
[46:54] martin it's just like none of the
[46:57] they keep changing the deal
[46:59] they've altered the deal
[47:02] which one uh let's try the meal
[47:08] which one is it uh dragon
[47:11] this one is this one let me try
[47:14] oh my
[47:17] gosh i say save your work
[47:19] yeah um maybe i should say
[47:22] this is not a bad thing to do
[47:26] all right
[47:30] well
[47:33] now it can't be a hover guys it's
[47:36] fundamental differences in
[47:39] wheeled vehicles versus it's in the
[47:40] front
[47:49] cycling is definitely too wide
[47:53] cyclone's huge compared
[47:56] yeah
[48:02] wow it's got some zip to it look at it
[48:10] this thing is fast yeah
[48:12] and
[48:16] the turn radius is like really high
[48:24] what now it's dead
[48:29] no no no no
[48:40] yeah
[48:42] yeah see it changes the whole philosophy
[48:45] that's that's what we're talking about
[48:46] it's like you design a race track for a
[48:48] very specific vehicle
[48:50] yeah you start you start allowing other
[48:52] vehicles on this and all the tuning
[48:54] goes out the window
[48:57] come on i'm fine
[48:58] you do you're doing much better than i
[49:00] thought that you
[49:02] thought you would i thought i was gonna
[49:04] have to apologize after the show no
[49:06] you're doing all right
[49:08] yeah it's
[49:10] it's doable kinda but you know
[49:13] i cannot go full speed
[49:15] because it would just fly off every
[49:17] curve but but but but you know what
[49:20] you know what's awesome about the mule
[49:22] speed though
[49:24] remember tell me remember that loop that
[49:25] you made
[49:27] oh
[49:28] yes she got distracted by that i started
[49:31] thinking about the loop it sounds like
[49:33] [Laughter]
[49:34] let's go see if the mule can do the loop
[49:39] i think it can
[49:41] it was
[49:42] yeah that's um
[49:46] let's see where can i
[49:48] put it in
[49:52] oh
[49:55] you're gonna have to get like a running
[49:56] start
[49:59] maybe somewhere here
[50:01] no
[50:08] okay now i will break the the the track
[50:10] a bit but
[50:12] i think it's worth it
[50:14] remember the loop was built for the grey
[50:16] cat it was built to try to accommodate
[50:18] the gray cat and whatnot so this is
[50:21] this this is not
[50:23] as intended
[50:29] martin is a professional and i am a
[50:31] clown and i am a clown
[50:34] and i i'm forcing martin to be a clown
[50:41] yeah it's fun to be a clown it's awesome
[50:43] all right
[50:55] that is a steep
[50:59] oh because you're meant to go out one
[51:00] all right so i'm looking at the outway
[51:01] here that's that's where you come out of
[51:03] it there you go all right
[51:05] just
[51:06] just so we can try
[51:10] this is kind of sad
[51:37] all right
[51:40] okay i
[51:42] let me go back again
[51:45] i'll see you driving a third person
[51:47] oh
[51:50] wasn't that bad
[51:51] try it in first person where you have
[51:53] like more control better better control
[51:56] all right
[51:57] um but first let me go back again
[52:08] first person universe
[52:12] okay
[52:14] kinda like this right
[52:18] i don't see anything
[52:22] i mean
[52:24] excellent
[52:27] but it
[52:28] has enough enough speed so so i can make
[52:31] it work i just need more time for for
[52:33] the
[52:34] uh loop yeah
[52:36] and have to adjust it a bit
[52:39] uh well maybe maybe
[52:41] ma maybe uh
[52:43] maybe area 18 needs some uh uh meal
[52:47] track racing
[52:49] yeah i'm a big fan of it
[52:51] all right no
[52:54] try again
[52:59] yeah
[53:00] almost almost
[53:06] it was worth it perfect try so let's put
[53:09] it back
[53:14] we did science
[53:16] we did science yeah
[53:19] all right awesome cool now
[53:22] i think i want to add some lights sure
[53:25] just to
[53:26] make it look a bit better
[53:38] fantastic already
[53:40] right so okay that's it with lights
[53:43] that's it
[53:45] um yeah
[53:46] can i add a few more of those guys yeah
[53:49] i i think if i'm allowed to speak for
[53:51] the community here i think the lighting
[53:53] was one of the most impressive aspects
[53:55] of the
[53:56] of the track that you made for the next
[53:59] patch it's
[54:01] the
[54:03] you know
[54:04] contrasting by the way if you're
[54:06] watching this right now and you haven't
[54:07] watched the isc segment with the actual
[54:10] track an actual demonstration of what
[54:12] martin's talent and skill can do please
[54:15] go and watch that because this is this
[54:17] is me making him a clown but go see the
[54:19] stuff that he actually made
[54:22] with with the different sections
[54:24] and the colored lights for all the
[54:26] different sections it is
[54:28] a work of art like like it is you just
[54:31] you just watch it you just like look at
[54:33] it and it is it is a beautiful track
[54:37] yeah for the lights i get to say i did
[54:40] the first lighting pass on it like a
[54:43] really rough lighting pass and then um
[54:46] the lighting team took over and made it
[54:48] look really good because i'm no lighting
[54:51] artists and i'm kind of bad with lights
[54:54] as you can see you know this is like
[54:56] look at this i did light um
[54:59] so um yeah usually
[55:02] more professional people are doing this
[55:05] yeah
[55:06] shout out to chris campbell and his team
[55:10] yep
[55:16] yeah it's kind of hard to light the
[55:17] upper area because you know all my
[55:19] lights
[55:22] on the floor need a floor
[55:25] um
[55:37] but actually
[55:42] where is
[55:49] isn't that working
[55:54] oops so
[55:56] this is how the railing looks with the
[55:57] light
[55:58] i think it's pretty cool when you drive
[56:00] see you you get more sense of speed oh
[56:02] yeah those lights
[56:05] really does it i forget what i said
[56:06] about no railing that is that is very
[56:09] cool
[56:10] yeah it looks really cool um
[56:12] but you know setting up light is
[56:15] it takes a lot of time actually because
[56:18] also i have now my lights bleeding
[56:20] through the
[56:20] road
[56:21] which can be also fixed but it takes
[56:24] time like i said so so i won't do that
[56:27] um
[56:28] but yeah i will just add a few more of
[56:30] them of them because it looks nice
[56:33] why not
[57:40] awesome lighting is done
[57:44] not quite
[57:51] cool
[57:53] all right
[57:54] look at that
[57:57] not bad for an hour
[58:00] well actually it was more like 45
[58:02] minutes because
[58:03] i derailed you
[58:05] but yeah it's pretty good nice okay
[58:09] can we drive it the last time yeah drive
[58:12] it in first person we haven't seen it in
[58:13] first person yet
[58:18] i cannot go up there
[58:29] i'm a really bad driver in first person
[58:30] so
[58:31] don't expect me to make oh that's like
[58:33] yourself short you're a bad driver
[58:34] period
[58:44] [Music]
[59:13] those railings do so much
[59:15] yeah right
[59:17] good call on the railings oh my god no
[59:20] no no no no no no no
[59:24] aren't you ruined
[59:26] fire fire
[59:28] somebody's on fire
[59:30] okay and thus ended the story of martin
[59:34] mills
[59:36] uh no that's that's good um before we go
[59:39] you uh you wanna sit on the racetrack uh
[59:41] one of the racetracks i made like
[59:44] almost a decade ago
[59:45] star citizen yeah hold on
[59:47] let me uh let me do this
[59:49] i've never i should maybe i've figured
[59:51] out how to do this before all right so
[59:52] i'm gonna switch back to yes
[59:54] and i'm gonna do this over here
[59:57] and then i'm gonna screen share with you
[1:00:00] let's see if this works
[1:00:04] i'll optimize for video clip so that you
[1:00:06] can see it
[1:00:07] uh do you see my screen share now
[1:00:10] i do all right hold on
[1:00:12] and then if i do this
[1:00:16] hold on this play
[1:00:26] this is really old
[1:00:28] it's said that the test of a man's
[1:00:30] courage is how he performs in the face
[1:00:32] of danger to meet these challenges see i
[1:00:35] made like a hologram racetrack
[1:00:37] oh nicer
[1:00:48] please don't judge these please don't
[1:00:50] judge the voiceover if that includes
[1:00:52] yourself
[1:00:54] well robot industries is proud to bring
[1:00:56] to you the grey cat 6000 su-x
[1:01:01] covered from head to toe with a bunch of
[1:01:02] crap you could find anywhere else but
[1:01:04] won't the great cat6000su x is a
[1:01:07] modern-day testament to the virtues of
[1:01:09] excess first and foremost every 6 000 su
[1:01:13] x comes with an automated drive all
[1:01:14] right we're not going to watch the whole
[1:01:15] thing but
[1:01:17] yeah but that that but it's amazing yeah
[1:01:19] very very vertical uh very vertical and
[1:01:22] stuff like that yeah that's
[1:01:23] that was that was one of the things i
[1:01:24] did way back when
[1:01:26] uh that's what you wanted me to do right
[1:01:28] to recreate your don't just
[1:01:30] i just wanted a little bit
[1:01:32] a little bit of that class a little bit
[1:01:34] of the classic disc like i said it is
[1:01:36] literally where i got my start with star
[1:01:38] citizen
[1:01:39] so all right
[1:01:41] martin your first seo how you feel man
[1:01:44] i'm good i'm good that was fun you feel
[1:01:46] like you want to come back at some point
[1:01:48] yeah sure
[1:01:50] if i get another invitation oh yeah yeah
[1:01:52] yeah yeah
[1:01:53] yeah you were you you were willing to
[1:01:54] put up with my crazy dumb some crap that
[1:01:57] that that that that'll always get you
[1:01:58] that'll always get you invited back
[1:02:01] um all right everybody that's it for uh
[1:02:03] this week's uh star citizen live uh game
[1:02:06] dev star cart racing uh that is martin
[1:02:09] mills uh environment artist two from the
[1:02:11] eu sandbox two team lots of twos in his
[1:02:14] in his his portfolio there um be sure
[1:02:17] you check out uh uh inside star citizen
[1:02:20] from last week uh with the actual uh
[1:02:24] buggy track race uh race track that's
[1:02:26] going into the uh uh to the quarter
[1:02:28] three patch this year um and then uh
[1:02:31] be sure to check out yesterday's isc uh
[1:02:34] with with our our showdowns our sprint
[1:02:37] showdown uh lots of updates uh stuff
[1:02:40] ahead of uh ship showdown don't forget
[1:02:41] ship showdown 29 52 starts this monday
[1:02:45] it's your chance to vote
[1:02:47] and determine the best of the best of
[1:02:49] all ships and vehicles currently flyable
[1:02:51] or drivable and star citizen
[1:02:53] for a chance to to award them some fancy
[1:02:56] new paints and those paints get cooler
[1:02:59] and more interesting every single year
[1:03:01] so so think hard before you want to
[1:03:03] throw something like that away on a meme
[1:03:05] thing that's just your uncle disco
[1:03:07] you're telling you maybe
[1:03:09] maybe you want to really vote for the
[1:03:10] ones you really want this year uh and
[1:03:12] then come on back
[1:03:14] to inside star citizen uh next week
[1:03:16] where we're talking um uh new stuff for
[1:03:18] the from the mission feature team that
[1:03:20] come in in the next patch uh changes to
[1:03:22] prisons and and and changes to correa
[1:03:26] oh correa one of the oldest locations in
[1:03:28] the persistent universe is getting some
[1:03:30] some uh
[1:03:31] fancy new stuff so check that out it's
[1:03:33] an all mission feature team special next
[1:03:35] week and then i can't remember what star
[1:03:38] citizen is uh or in star citizen live is
[1:03:40] next week so just check the uh twisk uh
[1:03:44] on monday and uh if you like dungeons
[1:03:46] and dragons uh in about like three hours
[1:03:48] i'm playing dungeons and dragons with
[1:03:49] star citizen streamers uh dj knight and
[1:03:52] bad news baron and smashley uh check
[1:03:55] that out i i don't know what channel
[1:03:57] it's on but uh check twitter check i
[1:03:59] think it's on my twitter uh if you if
[1:04:01] you want to watch me hang out hopefully
[1:04:03] i'll
[1:04:04] i won't have to wear sunglasses by then
[1:04:05] i'm going to try to run back to the
[1:04:06] office and see if i can find my glasses
[1:04:08] before that uh but yeah that's it that's
[1:04:10] all the stuff i have
[1:04:12] um
[1:04:16] yeah that's all the stuff i have see you
[1:04:17] later everybody take care bye
[1:04:19] right
[1:04:21] oh that's the wrong thing i should
[1:04:22] really like write down the stuff that i
[1:04:24] need to say at the end of the show so i
[1:04:25] don't have to like remember it that'd be
[1:04:27] like a professional thing to do
[1:04:29] but again i am not a professional i am a
[1:04:32] clown
[1:04:33] yeah it was professional enough
[1:04:35] i kissed
[1:04:36] so how was it was it okay you were great
[1:04:39] man yes the mic is still alive they can
[1:04:41] still hear us

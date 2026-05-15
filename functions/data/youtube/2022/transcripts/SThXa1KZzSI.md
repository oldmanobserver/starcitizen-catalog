# Star Citizen Live: EU PU Gameplay Feature Team

**Video:** https://www.youtube.com/watch?v=SThXa1KZzSI
**Date:** 2022-03-25
**Duration:** 59:37

## Transcript

[00:03] hello everybody welcome to another
[00:05] episode of star citizen live the eu pu
[00:08] game play feature team i'm your host
[00:10] jared huckabee and if you've never seen
[00:12] a star citizen live before it's where we
[00:14] take about an hour out of the end of our
[00:15] week and we hang out with our developers
[00:19] we sometimes we
[00:20] follow their process see how they work
[00:22] sometimes we
[00:23] throw them to the wolves and answer your
[00:25] questions live
[00:27] on the show this week we have members
[00:29] from our eu pu gameplay feature team hi
[00:32] everybody
[00:35] [Music]
[00:36] uh we've got uh uh we we we've got eric
[00:39] this way
[00:41] uh jacob and torsten um
[00:45] torsten and jacob you've been on the
[00:46] show uh before but every show is
[00:48] somebody's first show so let's take a
[00:50] few minutes and introduce yourselves and
[00:51] and and tell everybody who you are and
[00:53] what you do for star citizen uh we'll
[00:55] start with you thorson
[00:58] i'm thorsten and i am the senior systems
[01:01] designer for the eupu feature team
[01:05] and what does the senior systems
[01:06] designer do
[01:08] it's
[01:09] the the every system that runs through
[01:12] us like uh
[01:14] mining
[01:15] and
[01:16] now salvage life support engineering
[01:19] everything that needs to have a proper
[01:21] paper design and
[01:23] some proper functionality associated
[01:25] with it and basically my job is
[01:27] to create or envision those
[01:30] functionalities with
[01:32] still fitting into the vision from from
[01:34] the entire game
[01:36] and when does the venue mergement come
[01:38] out
[01:39] that is not a question that i can answer
[01:43] all right um jacob uh who are you and
[01:46] what do you do for star citizen
[01:48] hey i'm jacob i'm a gameplay programmer
[01:51] and so
[01:53] i mainly am responsible for the
[01:56] programming of the loot generation
[01:58] system uh and i also maintain the room
[02:01] system as well
[02:03] and how many planets or moons will the
[02:04] next system have
[02:07] that's not a question for me
[02:09] i i'm okay i'm sorry i didn't realize i
[02:11] woke up and i'm gonna i'm gonna
[02:13] i'm i chose violence today uh joining us
[02:16] to the show the first time this his
[02:17] first show and he must think this is
[02:19] crazy and like what did i get myself
[02:20] into uh yarrick who are you and uh what
[02:23] what do you do for star citizen
[02:26] uh hello i'm jarek i'm a game programmer
[02:29] like jacob so also programming
[02:33] i do well now i'm doing live support
[02:35] before i've done some that the laser
[02:37] treatment for example and some of the
[02:39] mining gadget work
[02:41] and yeah that's it basically
[02:44] and west hem united in last one the
[02:46] english football cup in what year
[02:50] um
[02:51] i don't know let's say 2003
[02:55] no yeah i i honestly have no idea i
[02:58] don't even know if that's a real
[02:58] football team or not i just
[03:00] it's something i've heard
[03:02] so uh
[03:05] on the show this week we are talking
[03:06] about eupu gameplay features um
[03:09] these are things like uh refueling
[03:12] loot uh mining uh life support uh uh
[03:16] power management stuff like this um
[03:19] there are there are multiple gameplay
[03:21] feature teams in the company um there
[03:23] there's
[03:24] there's this team there's one in the us
[03:26] there's a couple working with for
[03:27] squadron 42 stuff
[03:30] this is all my way of saying that there
[03:31] will be topics that this team can
[03:34] discuss and and and and answer questions
[03:37] on and then there will be topics that
[03:39] seem like it's theirs but it's actually
[03:42] another team with a very similar title
[03:44] in another country or whatever so uh
[03:46] just keep that in mind uh as we answer
[03:48] questions you may get you we made it get
[03:50] a couple that's not my area or something
[03:52] like that um it's part and parcel of the
[03:54] game so we still got a lot to talk about
[03:56] this uh uh this week uh this show was
[03:58] originally scheduled to air exactly a
[04:00] month ago on february 25th uh we delayed
[04:04] it because of the world situation at the
[04:06] time but we are back to that end we are
[04:08] still using the questions from a month
[04:10] ago so if any of these questions that we
[04:12] come up with have been answered
[04:13] subsequently uh we'll buy todd pappy on
[04:17] last week's show or something we'll
[04:18] mention that um additionally the time
[04:20] has actually given us the the chance to
[04:22] get some answers to questions we didn't
[04:23] have answers to before so uh we'll see
[04:26] we'll see how this one goes let's start
[04:29] uh
[04:30] let's start with refueling now a lot of
[04:32] the questions that came in from the chat
[04:35] all dealt with uh uh uh refueling in one
[04:38] way or another probably our our biggest
[04:40] uh source of questions
[04:42] because it's been
[04:45] two or three months now since we
[04:46] discussed refueling on isc
[04:49] let's go ahead and start with a a a
[04:51] primer and talk again about how what
[04:54] refueling
[04:55] looks like in 317 how it works uh we
[04:58] don't need every detail just just just
[05:00] remind us of the flow here a little bit
[05:04] so first off you need a staff error to
[05:06] review and uh because this is right now
[05:08] our only refueling ship we have
[05:11] we at least have two variances we have
[05:13] the normal starfarer and the starfire
[05:15] gemini
[05:16] and what you do there is
[05:19] you start spawning your ship at any
[05:23] harbor that you are at
[05:24] then you need to open the vehicle
[05:26] maintenance services that you already
[05:28] know how to refuel
[05:30] but now it looks a bit different so we
[05:33] improved that
[05:34] a bit to tailor to the demands of the
[05:37] refueling mechanic and the staff era
[05:39] so now you have two buttons which one is
[05:42] the auto button and the other one is the
[05:44] manual button and the auto button just
[05:46] refills your internal fuel tanks while
[05:48] if you click on the manual button it
[05:50] will open a list of all the available
[05:52] fuel tanks and fuel pots so fuel pods
[05:55] are the ones at the outside of the staff
[05:57] era there were the fuel
[05:59] tanks basically you use for for the
[06:01] refueling
[06:02] so you fill them dedicated with whatever
[06:05] you want to pick so you can fill all six
[06:08] of them with hydrogen fuel if you like
[06:10] but you can also fill
[06:12] three with hydrogen fuel and three with
[06:14] quantum fuel
[06:15] and the next step that you need to do is
[06:18] lift off and then basically you are up
[06:21] for the market and
[06:23] there sadly we don't have the beacon
[06:25] system yet so you are reliant on chat
[06:28] communication or
[06:30] if you are in an organization you either
[06:33] have discord or teamspeak to talk to
[06:34] them to ask for for refueling
[06:37] or offer their refu or for your
[06:39] refueling services
[06:41] and once you've found someone that is in
[06:43] need
[06:44] you basically extend your boom arm then
[06:46] a docking procedure takes place uh you
[06:49] need to set a price for the fuel you can
[06:51] even give it out for free if you
[06:54] if you feel like it
[06:56] and uh then the dock chip
[06:58] goes through the very same process
[07:01] like you did on the station so the ship
[07:05] in need opens again
[07:07] the mobi glass goes into the vehicle
[07:09] maintenance service purchases the amount
[07:11] of fuel that the player needs and you as
[07:14] the staff era owner then get the
[07:17] request
[07:18] and what you do next is open the
[07:20] corresponding fuel tank to allow the
[07:22] flow for let's say hydrogen to go
[07:25] through the nozzle
[07:26] and then you open the nozzle and you
[07:31] can control the flow speed there so you
[07:34] have an impact on the time it takes to
[07:36] fill the other ship
[07:38] and once the other ship is filled you
[07:40] are done and both can park their way
[07:44] how do you do euro and jacob did he get
[07:46] it all
[07:48] i saw you guys just like nodding as he
[07:50] was going
[07:51] like checking his work did you did you
[07:53] do all that from from memory or do you
[07:54] have cheat sheet on your on your uh
[07:57] on your monitor
[07:58] i i did it for memory i i played it a
[08:01] lot and
[08:02] so so yeah yahoo and jacob did also play
[08:05] it a lot yeah we played played like the
[08:07] recent internal play test sessions
[08:10] all the time uh how has it how has it
[08:13] changed in over over this quarter i mean
[08:16] it was like i said we we showed it very
[08:18] early we showed it in january uh which
[08:20] is earlier than we usually have any of
[08:22] this stuff because you know it was
[08:23] originally targeting for 316 so so we
[08:26] had a little bit earlier but uh
[08:28] so with this extra time how how is
[08:30] refueling
[08:31] uh changed or evolved over this quarter
[08:36] from the system itself not too much
[08:39] so we did only some minor tricks so we
[08:41] uh have now a variable flow speed and
[08:44] that we didn't have back then so now
[08:46] it's a bit you really have to pay
[08:48] attention to the flow speed to not
[08:50] damage your nozzle because there is
[08:53] this mechanic of the safe flow speed to
[08:55] the nozzle where if you are above it you
[08:58] will start damaging it and we wanted to
[09:01] emphasize this so we added a mechanic
[09:03] that
[09:04] basically the more pots you have open
[09:07] the more fluctuation you have in your
[09:09] system and that can
[09:11] cause the flow speed to rise so that you
[09:13] damage the ship
[09:14] but the main difference is for
[09:17] definitely the ui so we got a lot of ui
[09:20] work done in the last couple of
[09:22] months
[09:24] and and it shows i'm really satisfied
[09:27] with that and something that we did get
[09:30] which we wouldn't have gotten if we
[09:32] would have aimed for the earlier release
[09:34] is the
[09:35] direct interaction in the backside of
[09:37] the of the staff era so right now you
[09:39] have the
[09:40] direct control screens directly at the
[09:42] pots
[09:43] and
[09:44] yeah i'm really happy that we got that
[09:46] so now
[09:47] yeah
[09:49] it opens possibilities let's phrase it
[09:50] that way
[09:52] possibilities for
[09:54] like if someone accidentally jumps on
[09:57] your catwalk and then closes the
[10:00] the field steps
[10:04] uh no i'm glad you mentioned the the the
[10:06] ui uh um
[10:10] in some respects i'm a corporate shill
[10:11] so i don't know if i get to have
[10:13] personal opinions about things but the
[10:15] ui for refueling and the and the ui for
[10:19] the new selling mechanic you know both
[10:21] coming on 317 are some of the better uh
[10:24] more informative and intuitive uis that
[10:27] i think we've put out in time i don't
[10:28] think it's any secret that
[10:31] i mean ui is one of the toughest parts
[10:33] of any game and and star citizen because
[10:35] we're running a live environment in the
[10:37] middle of our development with gameplay
[10:39] systems that are not finished or
[10:40] complete and
[10:42] ui has always been a struggle and it
[10:43] will continue to be a struggle while
[10:45] we're still in development stuff like
[10:46] this but uh the uis for
[10:48] refueling and and selling both coming in
[10:51] 317 are two of my favorites that we've
[10:52] put out there so
[10:55] if i get to have an opinion i don't know
[10:57] uh let's look for some more refueling
[10:59] questions here how long
[11:01] uh how long will it take in your mind
[11:03] the fi or how long
[11:06] how long will in your mind the final
[11:08] refueling process take of course it
[11:10] depends on the size of the tanks but are
[11:12] we talking about minutes or hours
[11:17] it's depending on the tank size so
[11:19] for example we balanced it that
[11:22] the gladius right now is with the
[11:25] standard nozzle and the standard fuel
[11:27] plots roughly 40 seconds so
[11:31] that is
[11:32] like
[11:33] the the ship that we expect to use this
[11:37] mechanic the most
[11:39] and uh
[11:40] yeah well if you want to refuel an 890
[11:43] jump
[11:44] it will take its time because it has
[11:46] giant tanks and it
[11:49] yeah it's it's not such something that
[11:52] that we can magically increase the
[11:53] number because we
[11:55] we want to stick to like
[11:58] a certain reality there in the sense of
[12:01] a pipe has a certain diameter and it can
[12:04] only withstand a certain pressure and
[12:06] therefore we have this this
[12:08] flow rate there as a mechanic and yeah
[12:13] bigger ships will take longer to refuel
[12:16] okay
[12:18] um
[12:19] still very much uh in the minutes not
[12:22] hours
[12:24] if everything works the way it's
[12:25] supposed to lens
[12:27] yeah
[12:28] um
[12:30] will uh uh
[12:31] so jacob you've been working on uh
[12:33] refueling uh
[12:35] will the ship hanger or the sub attached
[12:37] uh be able to refuel from their parent
[12:39] vehicle i think it's probably like the
[12:41] the merlin or the archimedes
[12:44] uh when attached to the constellation
[12:45] will it be able to refuel in that
[12:47] situation
[12:48] so to be clear i have not personally
[12:50] been working on refueling but uh i
[12:53] wouldn't answer this question before
[12:55] passing it on anyway not good just just
[12:57] not uh i tried yeah um i forgot yeah so
[13:01] uh
[13:02] not right now
[13:04] uh and yeah may
[13:07] probably something that we'll be aiming
[13:08] for in future toast and you can
[13:10] elaborate on that
[13:13] that is correct
[13:17] when i did when i did the promo for the
[13:18] show this morning i i said it was an
[13:20] hour earlier than it actually was i
[13:21] clearly am having some like brain flow
[13:24] problems today
[13:26] um
[13:27] all right
[13:29] when a ship such as the starfarer is
[13:32] full of fuel
[13:33] and attacked and destroyed how will the
[13:35] fuel be dropped will it be in little
[13:38] tiny boxes or will it just vanish
[13:43] so because the fuel is part of the fuel
[13:45] pots
[13:46] it right now will
[13:48] in the current state it will explode
[13:50] with the staff error and
[13:53] if you
[13:55] so we
[13:56] i already mentioned the screen on the
[13:58] back side of the of the staff era where
[14:00] you control the
[14:02] fuel pots and there's a little button
[14:04] that says detach and the detach means
[14:07] that you can drop those fuel pots
[14:09] and this already gives you a hint of
[14:12] what what our aim here is so if they
[14:15] somehow survive the explosion
[14:17] that means that
[14:20] other ships are able to pick them up
[14:22] again so if
[14:25] you own a starfarer and you just
[14:26] destroyed another sapphire and you wear
[14:28] out of fuel pots that are filled you
[14:32] might be lucky and can pick them up and
[14:34] attach them to your stuff here but this
[14:36] is
[14:36] not for now this is for the future
[14:39] now imagining starfire gemini is hunting
[14:41] regular starfarers
[14:45] um
[14:46] let's move in uh let's look at some
[14:48] mining questions here
[14:50] uh
[14:52] big rocks
[14:53] or big clusters of rocks in our big are
[14:56] big rocks or big clusters of rocks
[14:58] incoming anytime soon for mining in a
[15:00] group or are there any plans to force
[15:02] multi-crew organized runs in the same
[15:04] spot with multiple travels to clean the
[15:07] location of valuable
[15:10] minerals yeah so
[15:12] about the bigger rocks so that could be
[15:15] a short-term solution to the momentarily
[15:18] like very
[15:20] or
[15:20] more or less
[15:22] unattractive multi-crew mining
[15:25] but we have bigger plans for that so we
[15:27] have some ideas of how we can improve uh
[15:30] multi-crew mining in the future
[15:33] so some of the visions that we have is
[15:36] that
[15:37] we have some weak points that need to be
[15:39] hit at the same time and even players
[15:42] need to make them
[15:44] explode at the same time so imagine a
[15:46] situation where you are with your with
[15:48] several prospectors targeting the same
[15:50] storm everyone hits the same weak point
[15:53] of the stone and then
[15:56] yeah you have to time it so that you
[15:59] don't damage other pieces of the rock
[16:01] and then the the rock
[16:03] splits and then you can proceed your
[16:05] mining
[16:07] same goes for for the argo mall then so
[16:10] yeah it's it's also and what we also
[16:12] envision there is that we even expand on
[16:15] the functionality of the the mining
[16:17] gadget so for example if you have a rock
[16:20] where where the the weak points are
[16:22] opposite you could use the mining gadget
[16:24] to actually move the weak spot so that
[16:26] you are able to use the argo mode but
[16:29] this is
[16:31] very
[16:32] far off in the future right
[16:35] right because uh
[16:37] yeah we talked about it a little bit
[16:39] with todd
[16:40] last week because the the team's focus
[16:42] is going to be mostly on resource
[16:44] management and live support and stuff
[16:46] for a little bit before you can circle
[16:47] back
[16:48] to some of these other
[16:50] right now our focus is getting all the
[16:52] features done once so you can we can
[16:54] start iterating over them
[16:58] um
[17:01] when new menu gadgets come in like this
[17:03] will be in the farther away in the
[17:04] future i guess how do you expect the
[17:06] community to use them if we can't scan
[17:08] the majority of rocks now and i know
[17:10] some of those
[17:11] after some of the anastasia scanning is
[17:13] being it was bug fixes that
[17:15] utah talked about being fixed last week
[17:17] yeah i think todd mentioned that already
[17:19] last week when when he
[17:21] we had some fixes in so there are some
[17:24] fixes that that are
[17:27] targeted for 317
[17:30] and we hope that it fixed the majority
[17:32] of the problems uh but it's it's a very
[17:35] complicated manner so
[17:37] we we hope that it fixed it but we have
[17:40] to see and yeah
[17:42] okay
[17:44] um
[17:45] this one may or may not be outside your
[17:47] wheelhouse if i feel like it's probably
[17:48] not but how do you intend to make and
[17:51] balance mining to be a lucrative
[17:53] profession that drives economy is that
[17:55] an euphu gameplay feature team desktop
[17:57] look this person is
[17:58] between ships escorts modules
[18:00] consumables timers etc that seems to be
[18:02] an expensive and dangerous endeavor at
[18:04] the moment
[18:06] yeah that's definitely not on us to
[18:07] decide it's it's on the economy side but
[18:11] yeah i i fully agree so i i'm not a fan
[18:15] huge fan of of quantanium being the only
[18:18] profitable resource uh i have the
[18:21] feeling that it it is something that
[18:23] will change once we have crafting there
[18:26] and player demands and maybe even ai
[18:29] demands there so that that the the
[18:31] values of each item shift
[18:34] but yeah this is not enough to decide
[18:37] yeah i saw you nodding there in
[18:39] agreement you got something i'm thinking
[18:41] like in general with those systemic
[18:43] things it's just kind of it's
[18:45] automatically almost gonna grow with
[18:47] time and i feel like those vibes yeah
[18:48] will change naturally over the
[18:51] development you know
[18:52] so uh yeah i can see it only yeah
[18:55] getting better basically
[18:57] but yeah again not up to us
[19:00] i think the
[19:01] the takeaway is that from a from a
[19:03] design perspective uh correct me if i'm
[19:05] wrong on this tourism we
[19:08] we don't want there to be just the one
[19:11] uh thing that's valuable to mine we want
[19:13] it to be valuable for you
[19:15] to mine different things at different
[19:17] times in different places based on
[19:19] market conditions nearby shops
[19:22] etc and rarity so if a material is more
[19:27] rare than another it should also be
[19:29] worth more
[19:32] uh i i think i think
[19:35] viewers will find if they watch enough
[19:36] of these
[19:37] shows that uh
[19:39] game designers often share many of the
[19:41] same feelings and frustrations as the
[19:43] players of of of the game when something
[19:46] is limited or something is not as
[19:47] fleshed out as as you may wish
[19:50] it is not because people here didn't
[19:52] think to do it it's just time management
[19:55] and resource management and and like i
[19:57] thought like like thorson said right now
[19:59] the idea is to hit everything once and
[20:02] kind of go around the wheel and and make
[20:03] sure there's that there's there's an
[20:05] introductory version of all these
[20:07] features and then
[20:08] go back and and fill these in so it's uh
[20:12] uh i think todd actually said it
[20:14] yesterday uh last week too
[20:16] patience is one of the hard part for the
[20:18] developers because we just want to
[20:21] put it all out right now and do it all
[20:24] out but we can't
[20:25] we just can't work on everything at once
[20:27] um
[20:29] let's do one more mining question before
[20:31] we move on
[20:32] the this this one's a bit farther out uh
[20:34] torsten uh in regards to mining is the
[20:37] plan still to eventually have subsurface
[20:40] deposits and veins that we can tap into
[20:43] with our miners as stated in both the
[20:45] prospector and land claim q a's
[20:50] yes this is still the plan so once we
[20:53] have the the land claims
[20:55] yes you as the landowner should have
[20:57] possibilities to
[21:00] dig a hole and mine stuff or
[21:03] and that opens the possibility for for
[21:06] other
[21:07] cases there as well
[21:10] let's jump into life support uh we
[21:13] haven't we haven't really talked about
[21:14] life support since
[21:18] i don't know when though i think it was
[21:19] our our our la our last count disco
[21:22] episode maybe in 2021
[21:24] or 2020 i can't remember time is an
[21:27] illusion um
[21:29] start off simply how is life support a
[21:32] few years ago it was mentioned that the
[21:33] room system is finished and it could be
[21:35] easily implemented what's the hold up at
[21:37] the moment
[21:39] how is that support yeah i think it's
[21:42] it's good it's progressing definitely
[21:44] i'm enjoying working on it
[21:46] uh but yeah i feel like
[21:48] the easily part is probably a bit
[21:50] misleading it's it's more than just like
[21:52] room system there needs to be you know
[21:54] graphic user interface for all the
[21:56] panels there needs to be controls for
[21:58] the rooms there needs to be integration
[22:00] to research systems so there's like a
[22:02] lot of additional work that we're doing
[22:04] right now
[22:06] and then then also we have the setup for
[22:08] the ships and yeah that's
[22:10] but it is definitely progressing and i'm
[22:12] happy with that
[22:14] with it so far
[22:17] um we do have uh a lot of ships to uh
[22:21] yeah process to to get that
[22:24] in a releasable state so
[22:26] that definitely is a contributing factor
[22:29] uh and
[22:30] the
[22:31] the question saying the room system is
[22:33] finished
[22:34] is not quite accurate either it's
[22:36] constantly
[22:37] um you know it in in development being
[22:41] upgraded um
[22:43] to support more new features and things
[22:45] like that
[22:48] uh
[22:50] yeah
[22:51] it
[22:52] it's try to think of something i could
[22:54] add to that but no that's pretty much it
[22:56] it's it's a big feature
[23:00] and every time we every time we add more
[23:02] ships it just makes your work just a
[23:04] little bit
[23:04] like like like like like one part the
[23:07] project keeps moving the goal post out
[23:09] for you like it's only there's many
[23:10] ships then we keep adding more ships
[23:14] um
[23:15] but yeah i i i i think it's a it's a
[23:18] major component uh not just to uh
[23:21] not just for the present day gameplay
[23:24] but it's obviously an essential
[23:25] component
[23:26] to real like multi-crew um you know one
[23:29] of the things
[23:30] i mean there's not a whole lot of
[23:32] multi-crew in star citizen right now
[23:33] there's basically you're a pilot and
[23:35] you're a tur you're a turd you're a
[23:36] turret gunner it's like that but uh
[23:38] things like power man resource
[23:40] management and life support and it's
[23:42] like those those are all how we be how
[23:44] we build out uh the idea of true
[23:47] multi-crew here and for me that was
[23:49] always my draw to the to the game like
[23:52] that's what the classic engineer role
[23:54] yeah
[23:57] would be a lot to make that
[23:59] exciting uh in the not too distant
[24:01] future when we have
[24:03] life support i'm also thinking about the
[24:06] fire system uh
[24:08] in development that gives you another
[24:10] thing for other people on on the ship to
[24:13] do other than the pilots is oh we've got
[24:14] a fire on deck three send someone to go
[24:17] deal with that right that interacts with
[24:19] life support uh
[24:21] resource management all of that
[24:24] yeah
[24:25] so all comes together
[24:27] the ship yeah
[24:28] and and each time one of these systems
[24:30] comes online that's another place to
[24:32] send damage so you know
[24:34] when ships are being attacked we can
[24:35] send damage to life support and send
[24:36] damage to power resource managements
[24:38] like that so so the the time to live on
[24:40] these ships will you know last longer
[24:42] and stuff and it just it's
[24:44] it's exciting it's one of those
[24:47] the stuff the star citizen multi-crew
[24:49] game play of today will not be what the
[24:50] game plays of tomorrow and it's it's i'm
[24:53] excited to see some
[24:56] true progress towards that
[24:59] um
[25:00] is life support still planned to be
[25:02] limited to people to prove is life
[25:05] support still planned to be limited to
[25:07] prevent people using ships as a clown
[25:10] car
[25:12] uh yeah yeah of course because like the
[25:14] way the way it's supposed to work you
[25:17] like like on iss you have the scrubber
[25:19] it removes the co2 and it has only a
[25:21] certain rate that it can process yeah so
[25:23] if you suddenly
[25:25] get like 20 people inside of a small
[25:27] small ship that's designed for like two
[25:29] people then your life support is gonna
[25:31] start not managing it and you know that
[25:33] the rate of flow of the air for the
[25:35] system will be too slow the co2 will
[25:37] build up and you'll probably die
[25:39] but obviously it's all gonna yeah it
[25:42] needs to be balanced well for the bigger
[25:44] shapes and then
[25:45] the different rooms in the shapes so
[25:47] there's yeah
[25:49] we don't want to put a hard limit on it
[25:51] that is something so we want to have it
[25:53] systemic driven so that means that
[25:56] so if you have an aurora and you want to
[25:58] claim it with five people
[26:00] then sure it will
[26:03] work but what you have to do as the
[26:06] person running the aurora you have to
[26:07] replace the skimmer constantly because
[26:10] the skimmer just depletes very very fast
[26:13] because the the because of the co2
[26:15] production in the room
[26:17] and then
[26:18] yeah sure if you want to decide to yeah
[26:21] every 10 minutes i have to replace the
[26:23] skimmer yeah
[26:24] sure yeah and also
[26:26] also like you have you know life support
[26:28] it's not only doing the co2 it's also
[26:30] like temperature and the pressure and
[26:32] those things will be also
[26:34] hit by too many people breeding in the
[26:36] room because then it's you know the less
[26:39] time for hitting or cooling the room
[26:41] so
[26:42] it's gonna be interesting gameplay there
[26:44] to balance what you want
[26:46] in your rooms to the atmosphere to be
[26:48] like
[26:49] several people in the chat are listening
[26:52] to your answers and all saying how does
[26:54] any of that work with something like the
[26:56] valkyrie
[26:57] where you're supposed to having a big
[26:59] open
[27:00] side doors and and so how did it how
[27:02] does that work with with some of these
[27:04] drop ships that are designed to have big
[27:06] open spaces to the
[27:09] so one of the things
[27:12] that will have to come along with life
[27:14] support
[27:16] is
[27:17] dynamic atmosphere propagations
[27:21] uh fancy name for just
[27:23] air actually moving between things so if
[27:26] you have the doors open you're gonna be
[27:28] getting
[27:29] whatever atmosphere is on the other side
[27:31] of those doors
[27:33] if you open the doors in space you're
[27:34] gonna have a bad time for the
[27:36] anyone on there who wants to breathe but
[27:39] yeah you'll be able to fly around and
[27:42] in in a way catch some atmosphere from
[27:45] from the planet that you're in
[27:47] and uh yeah
[27:50] i think that'll have some interesting
[27:52] implications
[27:54] uh in in future for planets with
[27:58] not human breathable atmospheres it'll
[28:02] make your life support system have to
[28:04] work a bit harder once you close those
[28:07] doors to try and clean that up for you
[28:11] and we've seen some ships like
[28:14] the idris or the javelin they have like
[28:16] the the star wars or star trek you know
[28:19] um
[28:20] force field
[28:21] walls and doors that helps keep
[28:23] atmosphere and not so it remains to be
[28:25] seen you know what ships will have you
[28:27] know stuff like that and what what may
[28:29] not uh b quartermast says is this live
[28:32] no
[28:34] now last week we did all the thing where
[28:35] i put it on the screen and said it
[28:36] wasn't live but this week
[28:39] i just i thought i'd let people wonder
[28:43] uh
[28:45] do we have any more life support
[28:46] questions let's see
[28:48] what do you guys have against clown cars
[28:49] um will t0 of life support allow
[28:52] atmosphere management on a per room
[28:54] basis or will it be one atmosphere
[28:57] setting throughout the entire ship
[29:01] uh it's going to be peru we want to go
[29:05] like as recently
[29:07] granularis
[29:08] yeah it makes sense for this year
[29:10] obviously
[29:11] so yeah you'll be able to set like the
[29:13] pressure in the rooms you'll be able to
[29:15] set the temperature in the rooms it can
[29:16] be different insurance and like
[29:18] also like that the rate for the scrub
[29:21] being so like it's gonna be like a
[29:23] balance for each room what what do you
[29:25] want this room to behave like and
[29:27] yeah there's gonna be
[29:29] a decent amount of
[29:31] uh like a choice there for a player to
[29:34] do
[29:43] one of our big considerations for this
[29:45] is that
[29:47] while you are going to be able to do
[29:49] everything on a program basis we're
[29:50] going to be making sure to have a good
[29:53] focus on usability uh and again
[29:56] the quality of ui will will help with
[29:58] that so that it doesn't feel
[30:01] tedious yeah yeah that's a good point
[30:04] that like
[30:05] there's gonna be like obviously process
[30:07] for like oh just maintain this room in
[30:09] like a normal state for life let's say
[30:12] but then maybe
[30:14] you want it to be like warmer than ever
[30:16] so you're gonna focus the life support
[30:18] on the temperature to keep the
[30:19] temperature higher and like maybe that
[30:21] you don't care about the co2 levels in
[30:23] this room so it's
[30:25] like i think the idea is for the
[30:27] baseline to be very simple you don't
[30:29] really need to do much but if you want
[30:30] to go into these details for some
[30:32] specific
[30:33] purpose you can that's yeah
[30:37] uh
[30:38] zulu foxtrack
[30:40] foxtrot keeps trying to uh backwards
[30:42] engineer questions about night vision by
[30:45] attaching it to questions about stuff
[30:46] that you guys actually work on uh zulu
[30:48] night uh uh was a zulu uh uh foxtrot uh
[30:52] night vision is actually a graphics
[30:54] engineering thing we discussed it uh
[30:56] most recently with uh director of
[30:57] graphics engineering ali brown so i
[30:59] encourage you to check that out uh
[31:01] there's no easy answer but the truthful
[31:03] answer is in that show so check that out
[31:07] it's like i have watched enough 80s
[31:09] sitcoms to know when you're trying to
[31:11] backdoor
[31:13] a different topic into some which we're
[31:15] actually supposed to be talking about
[31:17] i wasn't born yesterday i was born a
[31:19] long long time ago
[31:21] a long time ago well life support
[31:23] systems require consumables that must be
[31:26] restocked
[31:30] i think we already mentioned that so
[31:31] yeah obviously you have the filters for
[31:34] the
[31:34] air
[31:35] so
[31:36] for the scrubbing of the
[31:38] from the co2 so you need a special
[31:41] material for that that will take care of
[31:43] it
[31:44] and
[31:45] so that that's one we'll also have some
[31:47] for like heating up the rooms we also
[31:50] yeah
[31:51] yeah probably a bunch it's gonna be
[31:54] it's gonna be like a a real system
[31:56] inside of the ship that you can you know
[31:58] put things in and yeah make it work
[32:02] there's a follow-up from chat that says
[32:04] will depressure scrolling by will
[32:07] depressurizing uh rooms during combat
[32:10] provide any advantages
[32:13] to stuff can you
[32:14] drawing the air out of a room with if
[32:17] you're if your attackers aren't helmeted
[32:20] i mean possibly you'd get more power
[32:22] life support obviously uses power so i
[32:24] guess if you kind of turn it off
[32:26] completely then you'd get more power
[32:28] uh
[32:29] i'm yeah
[32:31] i like the engineering gameplay of
[32:34] cut power to life support all power to
[32:36] engines yeah exactly if you've got a
[32:38] really huge ship where the life supports
[32:40] taking up a lot of power then that that
[32:42] could be a thing
[32:45] but i think that question was more aimed
[32:47] on
[32:48] offensive uses of life support and yeah
[32:51] you'll definitely be able to turn off
[32:53] the air if you've got borders
[32:56] yeah
[32:57] of course of course you can like heat it
[32:59] up cool it down but
[33:01] we'll be right limited on how much the
[33:03] life support system can actually
[33:06] suck out of that room in a given time
[33:08] well i mean yeah obviously rate limited
[33:11] and also
[33:12] well once you suck out the atmosphere
[33:14] and you don't put it in the tanks it's
[33:16] gonna be gone you you can bend it
[33:17] outside yeah and then it's lost so you
[33:19] can also have to think about that
[33:21] so that's you know if you have a room in
[33:23] your tanks then it's fine but
[33:25] what about replacing
[33:27] the oxygen with something toxic
[33:30] uh so in tzia we won't have support for
[33:33] like composition of the atmosphere
[33:36] that's not
[33:37] yet a thing but you're open to it later
[33:40] on
[33:41] um
[33:45] yeah
[33:46] so
[33:47] something similar with fire i guess that
[33:50] fire creating excess carbon dioxide and
[33:53] carbon monoxide
[33:55] does make the room it's intoxic but you
[33:58] won't be able to do that on demand in
[34:00] into zero
[34:04] that seems to be a good bridge into uh a
[34:07] resource management i i don't think you
[34:09] can talk i mean any discussion of life
[34:10] support has to go right into resource
[34:13] management they're they're they're
[34:14] inextricably tied um
[34:17] we haven't we haven't talked about uh
[34:19] resource management since we had that
[34:21] wonderful uh demo with uh dan truffin uh
[34:24] way back when um
[34:26] what can you give us about it before we
[34:28] get into the specific questions here
[34:29] what can you give us a a as a general
[34:32] kind of update where how is it going is
[34:34] it going is it moved since we've we
[34:37] showed it so long ago um
[34:41] yeah there are improvements i mean some
[34:43] things are necessary for life supports
[34:45] to use it yeah
[34:46] so
[34:47] that that's what i'm working on actually
[34:50] so we have like
[34:53] i guess support for it to interact with
[34:56] the room system you have to exchange the
[34:58] gases from the tank with the with the
[35:00] rooms yeah and that's that's all coming
[35:02] together
[35:05] you got anything to add torsion
[35:07] and in addition to the work that the
[35:09] arrow does for the live support we also
[35:12] started working on the proper
[35:14] engineering screens because they they
[35:16] are the same so basically
[35:18] the the live supports ui interface will
[35:21] be just an
[35:23] overlay or
[35:25] a layer inside the engineering screen so
[35:27] every engineering screen is also
[35:29] directly a live support
[35:31] user interface right
[35:34] okay
[35:35] just because uh it was that halloween
[35:38] episode way back when nobody's seen or
[35:40] heard from count discus sense
[35:43] uh we've gained a lot of star citizen
[35:44] backers since then can you just uh can
[35:46] you give us a kind of a general overview
[35:49] i'm obviously don't i'm not gonna ask
[35:51] you you can clearly do it as we
[35:52] demonstrated with the refueling so
[35:54] not the entire loop but uh
[35:56] what what are our goals what are the
[35:58] goals what are the what's the intention
[36:00] that's just the top level of resource
[36:02] management power management however you
[36:04] want to refer to it what are we trying
[36:05] to do here
[36:09] so our goal there is to give the end
[36:13] the all resources distribution of any
[36:17] ship in player samps so
[36:21] we have fuel we have
[36:24] fuel that is consumed by
[36:26] the power plant and by the engines
[36:30] and you are in control of how much fuel
[36:32] those engines and the power plant gets
[36:34] and depending on how much fuel the power
[36:36] plant gets
[36:38] it will create energy and you can
[36:40] distribute that energy so for example
[36:43] you could even say okay i don't need any
[36:45] light in my ship so
[36:47] none of the energy energy goes to the
[36:50] the light
[36:51] or the doors so all the doors stay open
[36:53] for the for the full time but all the
[36:55] energy goes to the weapons for example
[36:58] or the shears
[36:59] so this is something that that you will
[37:02] be able to to manage on the fly
[37:05] so
[37:06] dynamically any time any day
[37:09] on any ship
[37:10] you will be able to
[37:12] to have full control over the
[37:14] resource distribution of your ship
[37:18] yeah and this follow-up question is
[37:20] probably very similar to the life
[37:21] support one uh regarding resource
[37:23] management will content teams need to
[37:25] rework existing ships before this can be
[37:27] implemented in the pu
[37:29] yes
[37:31] quite significantly actually yes
[37:34] because we have some legacy systems that
[37:38] work
[37:39] but are not the ideal way that we
[37:42] intended to have it work
[37:44] so there are some optimizations that we
[37:46] have to do so that it runs performant
[37:49] and that we don't put too much stress on
[37:52] on everything which is already
[37:55] quite stressed so
[37:58] yeah there's a lot to do for on our side
[38:01] so every ship needs to be touched and
[38:04] every item that is existing also needs
[38:06] to be touched the good thing is that
[38:08] it's kind of going to be a bit combined
[38:10] i think with the live support so they're
[38:12] because they both use obviously resource
[38:14] system so
[38:15] just like
[38:16] at least it won't have to be done twice
[38:18] hopefully maybe that's that's the big
[38:21] benefit of this system so
[38:23] because we now have the opportunity to
[38:26] start or to to work on life support in
[38:28] parallel with the engineering they all
[38:30] tie together and
[38:32] our aim is also to have them release at
[38:35] the the same time
[38:36] because it's sharing the same ui it's
[38:39] sharing the same systems so it is the
[38:42] same system it just yeah but there's a
[38:44] bit more complicated stuff with with
[38:46] connecting it to the room systems and
[38:49] and so forth
[38:50] so yeah
[38:52] and it's not just uh
[38:54] your team it's it's the ui team it's the
[38:56] vfx team it's the sound effects team
[38:59] it's it's it's it's it's this is a this
[39:02] is a major major component of of
[39:05] fulfilling that vision of ship life in
[39:08] the star citizen universe and so uh so
[39:11] yeah you guys are here at the vanguard
[39:14] but eventually you know it's going to
[39:15] open up and it'll be an all hands on
[39:18] deck kind of thing
[39:19] it's every team is involved there every
[39:21] team has to do some
[39:23] update stuff on on their systems to
[39:27] utilize the new resource networks
[39:29] so it's
[39:31] yeah like you said every team
[39:33] has to be involved here
[39:35] uh we haven't talked to looting let's
[39:38] let's switch to some looting stuff
[39:40] we know that there are changes to a lewd
[39:43] generation coming in 317.
[39:48] it would be extremely useful if portable
[39:50] loot boxes would snap to the cargo grid
[39:53] of a ship or onto each other is yeah
[39:56] yeah it would is this planned for the
[39:58] future
[40:00] so
[40:01] short answer is yes but
[40:04] slightly longer answer is that the
[40:07] portable loot boxes in general are under
[40:10] a bit of a review
[40:11] um
[40:12] there's um
[40:13] there's there's a variety of
[40:15] implications of them from both the
[40:17] balance and the performance perspective
[40:19] so
[40:21] they are they are under review but we do
[40:23] hope that in in the future you will be
[40:27] able to stack them on your cargo grid
[40:30] and do anything else you want with them
[40:32] um that is obviously also
[40:36] awaiting the cargo refactor
[40:40] uh why is there still no scu cargo to
[40:43] loot around derelicts what is needed to
[40:45] put them in
[40:48] so
[40:49] the why they're not there uh is a
[40:52] question for the level designers um but
[40:55] as to what's needed to put them in
[40:58] we
[40:58] i'm fairly confident that we have uh
[41:01] everything needed for that on the tech
[41:03] side so
[41:04] yeah
[41:05] it's it's down to level design
[41:08] uh to
[41:09] put them there if they want them decide
[41:12] you know what goes where
[41:14] i'll add a little context to that just
[41:15] so
[41:16] jacob doesn't have a sniper dot from the
[41:18] level design team on his uh on his chest
[41:22] uh tomorrow afternoon uh that is part of
[41:24] the the work that uh montreal is doing
[41:26] with their new with the new you know
[41:28] complete revamp of derelicts from the
[41:30] ground up uh part of what you saw in isc
[41:33] yesterday and stuff is them building out
[41:35] the interiors and all that stuff and and
[41:37] as part of that there will be loot
[41:38] generation spots and stuff like that so
[41:40] that's all part of the new uh the new
[41:42] derelict 2.0 if you will uh for lack of
[41:44] a better term
[41:45] yes i i should add that we have been in
[41:49] constant contact uh with with the level
[41:51] designers including the montreal team uh
[41:54] so yes they they are aware that
[41:57] this is a thing uh that we could do they
[42:00] they are
[42:01] considering it
[42:02] etc we're all working together on this
[42:05] yeah
[42:06] uh
[42:08] will there ever be
[42:09] uh
[42:10] items or weapons found exclusively
[42:13] through looting i.e you can't buy them
[42:15] in stores
[42:18] so that is uh absolutely a yes um i
[42:22] think it was on uh one of the recent uh
[42:24] iscs with samuel molina um who mentioned
[42:28] that yes for 317 we're
[42:31] introducing for the first time different
[42:34] rarity levels
[42:35] of
[42:37] items and
[42:38] loot boxes so yes
[42:42] some of those rare items will not be
[42:44] found in stores
[42:46] and they will be
[42:48] uh
[42:49] yeah hard to get proportional to their
[42:52] value
[42:55] and
[42:57] i don't wanna this is where i'm gonna go
[42:59] ahead and say that there are nine of
[43:01] those pico balls that spawn in the
[43:04] persistent universe and only nine that
[43:06] spawn on each server as they start and
[43:08] i'm i've been hounding ben dorsey to
[43:10] make them the most valuable item
[43:13] in the p we'll see if we'll we'll see if
[43:15] my peer pressure uh uh wins that or not
[43:18] i actually i don't know if it will
[43:20] probably not
[43:21] people usually just shine me on
[43:24] anybody's ever met me anyway um will
[43:27] hydrogen fuel ever be a lootable item
[43:30] that you can then go back to your ship
[43:31] and use it to refuel yourself
[43:35] that's a bit of a hybrid question
[43:37] between revealing and uh and can you use
[43:40] night vision when you do it
[43:42] come on
[43:43] [Laughter]
[43:48] i'm not answering that um
[43:50] but uh as for
[43:52] the the the loot side of it
[43:54] we've
[43:56] we've been considering um all sorts of
[43:59] features and how they can tie into loot
[44:01] generation
[44:02] um upcoming features existing features
[44:05] we're
[44:06] thinking about
[44:07] what
[44:08] related to this feature could you find
[44:10] in a loot box and where would it make
[44:12] sense to find it and stuff so it's not
[44:14] out of the question that fuel could be
[44:17] one of those things
[44:18] but it does also depend on
[44:21] how refueling continues to develop um
[44:24] particularly with in hangar refueling
[44:27] refueling of ground vehicles
[44:29] those are things that are not fully
[44:31] fleshed out
[44:33] yet so
[44:34] there are not plans right now to have
[44:37] lootable fuel but we are considering
[44:40] lootable
[44:41] anything
[44:44] uh
[44:46] let's jump just some general stuff here
[44:48] um historically decompression was a
[44:51] thing with character force reactions and
[44:54] life support atmospheric room containers
[44:56] what's stopping the delivery of
[44:58] decompression and people getting sucked
[45:00] out of airlock mechanics
[45:03] we actually we actually showed an early
[45:06] prototype of that back in
[45:08] 2015 at gamescom yeah
[45:11] yeah um
[45:12] right so we've definitely
[45:15] been uh thinking about that but it's
[45:18] mainly a prioritization and an order of
[45:22] order of business thing um that the
[45:25] people that would be implementing that
[45:27] um
[45:28] mainly myself and yarrow are currently
[45:30] doing
[45:31] live support and
[45:33] yeah other other things so
[45:36] that's definitely on the cards but later
[45:38] down the line um reliant on
[45:41] life support being finished before we
[45:44] start doing that
[45:46] yeah
[45:47] thank you
[45:48] um and
[45:50] yeah again definitely um
[45:53] uh
[45:54] the the what stopping part
[45:57] there's
[45:58] still a lot of um other
[46:01] teams uh downstream requirements as well
[46:03] but to get
[46:05] that sort of explosive oh yeah the
[46:06] effects the sounds that everything of
[46:09] course
[46:10] yeah that's again it seems like such a
[46:12] simple thing but then you kind of have
[46:13] to add everything there and you can
[46:15] so yeah
[46:18] i think it's it's
[46:19] yeah
[46:22] back on the
[46:23] the discussion of loot and rarity from
[46:25] the live chat here um do you
[46:30] try anything how to reword this how do
[46:33] many games have like predefined levels
[46:35] of rarity there's like common uncommon
[46:38] rare epic legendary to use the wow model
[46:42] do we have those levels set are are you
[46:45] are you at a place where you can share
[46:46] with us what are the rarity levels
[46:48] referred to as
[46:50] and do they have colors
[46:53] they definitely don't have colors we're
[46:55] we're we're not we're not doing that
[46:58] it would not fit with the
[47:00] sort of level of realism that we're
[47:02] going for
[47:04] um
[47:05] we do have
[47:07] some fixed rarity tears of loot boxes um
[47:11] and
[47:12] at the moment uh off the top of my head
[47:14] i think we've got common uncommon rare
[47:17] but
[47:18] um
[47:20] what that means
[47:22] is
[47:23] not a a global setting uh so
[47:26] what uh how how likely you are to find a
[47:30] rare loot box is not going to be the
[47:32] same in every location and its contents
[47:35] are not going to be the same in every
[47:36] location um
[47:39] it's
[47:40] something that the designers are
[47:41] thinking a lot about of how to balance
[47:45] uh what crates and what contents you get
[47:48] where
[47:50] yeah and it's also something that we are
[47:52] having ongoing discussions with the
[47:54] economy team about
[47:56] how we balance the amount of value you
[47:58] can get out of containers
[48:01] also rare for stanton doesn't mean that
[48:03] it's rare in pyro for example so items
[48:06] that you are
[48:08] more likely to find in stanton are
[48:09] probably less likely to find in pyro
[48:12] gadgets yeah that's a very good point
[48:15] so when we talk about rarity
[48:17] we are not talking about stats we are
[48:20] not talking about uh uh
[48:22] this thing is
[48:24] not using it in the traditional wow the
[48:26] model where you know every time you
[48:27] fight this thing it drops a a an epic
[48:30] thing it's we are talking about
[48:32] rarity in the truest sense of its word
[48:34] and how difficult it is to find how
[48:36] difficult it is to acquire and what
[48:38] you're saying is that
[48:40] items will be rare in pyro but not
[48:42] necessarily rare in stanton and then
[48:45] vice versa yeah you know it's it's we're
[48:48] taking it from a holistic
[48:50] uh story-based kind of you know what
[48:52] would likely be found in these areas
[48:54] what would less likely be found in these
[48:56] areas for a
[48:58] quite literal interpretation of the word
[49:00] rarity
[49:01] yes we have
[49:03] uh
[49:04] different
[49:05] sort of levels of of system working
[49:08] together for that when a designer sets
[49:10] up a location
[49:11] they decide specifically to that
[49:13] location
[49:14] how likely different containers should
[49:16] be
[49:17] and they can decide how likely
[49:21] certain types of loot should be
[49:23] but then we do have a broad
[49:26] sort of grouping of which items on the
[49:29] whole are more
[49:31] valuable uncommon rare whatever
[49:34] or more
[49:35] so
[49:36] it helps the designers to
[49:39] approach things bit by bit they can do
[49:42] broad strokes and they can get
[49:44] right down to specifics for individual
[49:46] locations
[49:47] yeah so i i just i i want to shout this
[49:50] i want to make sure that this gets
[49:51] really clear out there because i'm
[49:52] looking at what's happening in chat
[49:54] right now
[49:55] it is not a
[49:57] rarity is not a
[49:59] measure of of the quality of the item
[50:02] and it's like that it is not gear score
[50:04] it is not it is not a purple item it's
[50:07] better than a blue item kind of thing it
[50:09] is
[50:10] on microtech you're more likely to find
[50:12] a pico
[50:13] on
[50:15] on crusader you're more likely to find
[50:17] in finley
[50:18] on hurston you're less likely to find
[50:20] either one of them because hurston hates
[50:22] those guys you know stuff like that
[50:24] not using that specific example but as a
[50:26] as as literally just an analogy it is
[50:29] about just trying to make loot seem
[50:32] diegetic and
[50:34] real and
[50:36] for lack of a better term just makes
[50:37] sense what would you expect to find in
[50:39] this kind of thing not to say that there
[50:41] can't be surprises that's what the
[50:42] rarity is now that there can't be
[50:44] surprises there will always be surprises
[50:45] in the world everybody loves a surprise
[50:47] but
[50:49] it's about
[50:50] storytelling as most things are at the
[50:52] heart
[50:53] of star citizen
[50:55] uh
[50:55] [Music]
[51:00] is engineering a profession
[51:03] like mining and refueling
[51:07] uh yes but also no
[51:09] so yes on the side
[51:12] yeah
[51:12] the the main difference here is that um
[51:15] for for mining and for refueling you
[51:17] have a resource or you gather a resource
[51:19] and then you sell it either to a player
[51:21] or you sell it to a trader for
[51:24] engineering it's yeah you you
[51:26] stand around in a ship and you press
[51:27] buttons
[51:28] right so it's it's it's a profession in
[51:31] the in the sense of yeah someone better
[51:34] pay you to do your job else you will
[51:36] mess up their ship and
[51:38] it might
[51:40] not work
[51:41] but uh
[51:42] that's that's it so it is a profession
[51:46] yes yes but there is
[51:48] there's nothing to trade with
[51:50] yeah it it it's another distinction from
[51:53] like the typical classes in an mmo
[51:57] it's it's it's your character can act
[52:00] like a rogue can act like a fighter can
[52:02] act like a cleric can act like a
[52:04] palanova there is no
[52:06] hey suddenly i've chosen a thing i have
[52:08] a label i am this
[52:10] kind of stuff like that so i i think i
[52:12] think that's probably the better way to
[52:13] look at
[52:14] uh professions as a human being who had
[52:16] 36
[52:18] jobs before i came here um
[52:21] you know it's tr and it's had six titles
[52:23] here even though my job hasn't changed
[52:25] uh trying to trying to label what you
[52:28] are and how you do in life is not always
[52:30] the easiest thing and i think we
[52:32] we take that same approach in star
[52:34] citizen we give you the tools to
[52:36] be a minor on tuesday and be a salvager
[52:39] on wednesday and be a refueler on
[52:41] thursday and stuff like this and it's
[52:43] not one of those is meant to like define
[52:45] you
[52:46] top to bottom kind of thing is that this
[52:48] is my profession
[52:50] it is they're all opportunities for you
[52:51] to live your life in the verse and for
[52:54] you to
[52:55] swim through as
[52:57] you see fit
[53:00] hmm that's some jean-paul sartier
[53:03] answers today does that he say his name
[53:06] i don't know i shouldn't have even tried
[53:07] to pronounce it i'm not the pronouncer
[53:08] person that's right
[53:10] did i do it
[53:15] well if i did it was it was on accident
[53:18] um
[53:19] let's touch some refueling ones before
[53:21] we got to go again uh since it's one of
[53:23] the big ticket items for 317. um
[53:26] will every ship in 317 have a physical
[53:29] fuel port on the top and how will it and
[53:32] how will the second fuel part port be
[53:34] used
[53:37] so no not all ships will have the
[53:40] physical port
[53:41] to the top so that is part of the gold
[53:43] standard so
[53:45] some ships
[53:46] or ships that are coming
[53:50] are supposed to have it already
[53:52] so it should be already planned for them
[53:55] but the older ships they they need to
[53:57] some of them needed to be added so right
[53:59] now the gladius already has it
[54:02] and on the second part of the question
[54:04] yeah the second port is mainly there for
[54:06] hangar refueling so the top one is just
[54:09] there for for in-flight
[54:11] refueling with the with the staff error
[54:13] and the the bottom one is yeah if you're
[54:15] stationary someone with a hose comes in
[54:17] and
[54:18] refuels your ship this way
[54:21] okay
[54:22] uh how will the development of
[54:24] ship-to-ship refueling change the
[54:25] station and pad refueling we've had
[54:28] going until now
[54:30] well we did
[54:31] not change the refueling
[54:34] itself but we at least updated the ui
[54:37] that you are
[54:38] which i already mentioned
[54:40] so that is the only impact we have there
[54:44] um will there be an easy way to share
[54:46] your location for for refueling
[54:50] yes
[54:50] once we get the beacon system sorted
[54:52] then yes yes there will be
[54:55] but that's not 317
[54:58] certainly not certainly not
[55:00] okay
[55:02] um
[55:03] and uh
[55:05] well i think we just added an answer to
[55:07] this one already where does refueling go
[55:08] after 317 service beacons but also
[55:12] server speakers
[55:13] there are some gameplays that didn't
[55:15] make it that we envisioned for the
[55:17] reviewing so
[55:19] one thing
[55:21] so
[55:22] i think most of you are aware that there
[55:25] is this mechanic of this hidden stash
[55:28] fuel if you are stranded in
[55:30] in space
[55:32] and you completely ran out of fuel so
[55:33] you cannot
[55:35] theoretically dock to the boom arm
[55:37] anymore so you have this reserve fuel
[55:39] that allows you to use this dedicated
[55:41] only with docking to be able to talk to
[55:44] the staff here again this is just in
[55:48] something
[55:49] there because we didn't
[55:51] get the the
[55:52] um
[55:53] tractor beam right so there there's
[55:55] supposed to be a tractor beam
[55:57] functionality that can pull you in as
[55:59] well as we envisioned a more direct
[56:02] nozzle control because right now the
[56:04] nozzle is very static so it's a stiff
[56:06] nozzle but we we also wanted to have
[56:09] some direct control over that
[56:11] and tying to that we also wanted to make
[56:14] it more interesting in flight for the
[56:16] player attached to the staff era so that
[56:20] there's a tension gameplay so if the
[56:23] forces to one side or the other are too
[56:25] high you as the attached have to
[56:28] maneuver against them so
[56:31] this is something that we we also wanted
[56:33] to have there but it didn't make it 400.
[56:38] um
[56:40] all right and last question
[56:43] did you enjoy putting together your lego
[56:46] discovery and uh can you implement night
[56:50] vision in order to make it easier
[56:53] uh
[56:55] i don't get how night mission would make
[56:58] it easier but it's it's it's a fun lego
[57:00] piece it's a fun little piece
[57:04] it's just what it said
[57:06] all right uh that's it everybody uh
[57:08] thank you for uh being here uh for for
[57:11] for coming back uh after we had to
[57:13] reschedule your show last time um
[57:16] that's been star citizen live the eu pu
[57:18] game play feature team um
[57:21] keep an eye out on the
[57:22] robertsspaceindustries.com
[57:24] uh website uh for information on when
[57:27] 317 uh is heading your way i know it's
[57:30] in uh evocati right now um my
[57:33] understanding at least
[57:34] at this time this is just me being here
[57:36] for as long as i have is that uh wave
[57:38] one ptu is kind of a day by day kind of
[57:40] thing um we absolutely want to get it
[57:42] out in your hands anything but again it
[57:44] has to reach certain thresholds it has
[57:45] to be worth it has to be useful uh to
[57:48] get it out into those tests and stuff so
[57:49] if it's if it's already
[57:51] at a certain point where we don't need
[57:53] people to tell us it's broken because we
[57:54] already know it's broken there's no
[57:55] reason to push it out so
[57:57] check check back on that for updates on
[58:00] when that happens um
[58:02] uh next week is our uh
[58:05] last episode of isc for the quarter
[58:07] before we go on our hiatus
[58:10] we'll be doing our patch report we'll go
[58:12] through all the stuff that's coming in
[58:13] alpha 317 and uh something that i just
[58:16] realized that i actually can't tell you
[58:18] about because it's a surprise so you'll
[58:19] have to tune in on thursday
[58:21] to find out what that is
[58:23] and then friday
[58:25] back here
[58:26] uh april 1st
[58:29] it's jeremiah and i
[58:32] it's gonna be dumb
[58:35] you know it's gonna be dumb i don't know
[58:37] what it is yet but jeremiah and i on
[58:39] april 1st it's going to be dumb and uh
[58:41] it may or may not be the last show we do
[58:43] here uh in la depending on uh visa
[58:46] processing time so who knows um we might
[58:49] be here for a couple more weeks that
[58:51] might be the last one i don't know we're
[58:53] all just kind of waiting
[58:55] so four uh jacob um and and uh eric and
[59:01] uh torsten uh i'm jared thank you for
[59:04] uh being here with us this week and uh
[59:07] we'll see you soon bye
[59:09] bye
[59:10] thanks
[59:16] i honestly have no idea what we're doing
[59:18] on april 1st i just realized it was
[59:19] april 1st when i said that
[59:21] it was just going to be us goofing
[59:22] around but now i got to come up with
[59:23] something don't i
[59:26] yes i know you can still hear me we do
[59:27] this every week people like we can still
[59:29] hear you i know
[59:30] i do this on purpose
[59:32] because i like chaos

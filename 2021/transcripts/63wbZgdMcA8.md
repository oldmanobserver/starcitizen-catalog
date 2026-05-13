# Star Citizen: Calling All Devs - Refuel and Repair

**Video:** https://www.youtube.com/watch?v=63wbZgdMcA8
**Date:** 2021-04-02
**Duration:** 22:30

## Transcript

[00:08] hello everybody welcome to another
[00:10] episode of calling all devs our q a
[00:12] series where we take questions from you
[00:13] the star citizen background put them
[00:15] directly to our developers usually over
[00:17] teleconferencing
[00:18] we were doing it long before the world
[00:19] was you know way to catch up
[00:21] world joining us on the show this week
[00:23] we are talk we are talking to dan
[00:25] treffin
[00:25] and johnny josephius about refuel
[00:28] and repair so to get us started we're
[00:31] going to go ahead and put a call in to
[00:32] dan truffin from our frankfurt studio
[00:35] dan
[00:36] how you doing man hey jared all good
[00:38] here how are you
[00:40] uh yeah getting by getting by um
[00:43] we are talking refuel and repair uh this
[00:46] episode
[00:47] uh so my understanding is that you are
[00:49] you and your team
[00:51] are in the early days in the early
[00:53] trenches of
[00:54] actually finalizing the design for for
[00:56] refueling that we'll be
[00:58] pursuing for the persistent universe so
[01:00] wanted to
[01:01] see if we can pick your brain see where
[01:03] we're at see what the current
[01:05] implementation is because we've heard a
[01:06] lot of things over the years um
[01:09] what do you got for us so yeah
[01:13] you're right we're in the early early
[01:15] stages of this
[01:16] um we have a general high level idea
[01:19] and at this point one of our senior
[01:21] designers is
[01:22] heavy at work on pretty much ironing out
[01:25] every little detail that's gonna come
[01:28] come into play for uh for refueling from
[01:31] how does the ui look how does the flow
[01:32] of the ui
[01:33] how where is the ui positioned in the
[01:35] ship where how exactly does the
[01:36] starfarer
[01:38] boom arm function for refueling stop is
[01:41] so i'll i'll try to take you through a
[01:43] bit how this works
[01:45] um players will be able to go
[01:48] to a station and using the refuel rearm
[01:50] stock
[01:51] ui that will need to get redone for this
[01:54] because
[01:54] it was very simplistic as they only
[01:56] doing little things
[01:58] they'll be able to fill up their
[01:59] starfarer with uh
[02:01] either hydrogen fuel or quantum fuel
[02:03] they'll be able to
[02:05] also equip their starfarer with various
[02:07] uh tanks
[02:08] that are made purpose they're purposely
[02:11] made for quantum fuel or
[02:13] hydrogen uh fuel and then they'll have a
[02:16] ui to select how much they want in tank
[02:19] five how much they want in tank three
[02:20] which type of fuel stuff like this
[02:22] uh once that part gets done they uh
[02:25] they'll pretty much have to fly and uh
[02:27] find find a guy in need find a guy that
[02:30] has run out of fuel didn't check his
[02:31] fuel meter and
[02:33] made the made a bit of a mistake um
[02:36] we're foreseeing this would be much more
[02:38] of a problem once pyro kicks in
[02:40] because refueling opportunities there at
[02:43] the station are
[02:44] really minimal so this will come into
[02:46] play a lot more
[02:47] so for tier zero we're kind of looking
[02:50] right now at the players using chat
[02:52] google chat and going like dude i run
[02:54] out of fuel is anyone with a starfarer
[02:56] here that can help me or
[02:57] hey i have a lot of fuel anyone needs it
[03:00] and you guys meet the
[03:02] former group he means that that the
[03:04] old-fashioned way
[03:05] in the future we're thinking of uh using
[03:08] the beacon system to actually create the
[03:10] beacon hey guys i mean fuel
[03:12] uh we could do this at the beginning but
[03:15] it will just take us longer to release
[03:16] and it could be a separate
[03:18] part that comes in later so we thought
[03:19] we'd rather get fuel out to the
[03:21] to the players refueling out to the
[03:23] players as far as fast as possible
[03:25] and then we're we're gonna do the part
[03:28] where you actually have a
[03:29] have a way to contract fuel being
[03:31] brought to you or
[03:32] i'm selling i need buyers basically
[03:36] so once you reach that person we're
[03:38] gonna leverage the
[03:39] the existing docking stuff that's coming
[03:41] online now
[03:42] uh to uh you'll be using the same ui
[03:45] to dock basically your starfarers boom
[03:48] fuel arm with the the ship that's out of
[03:52] fuel
[03:52] the ship that's out of fuel obviously
[03:54] has a fuel intake port
[03:56] that you'll have to pretty much it's a
[03:59] spinning the
[04:00] the tail on the donkey type of thing
[04:02] it's a very precise maneuvering thing if
[04:04] you mess it up you either break your
[04:05] boom arm
[04:06] or you break the guy's ship so there'll
[04:08] be a lot of challenge in doing that
[04:09] docking
[04:10] basically you're flying tons and tons of
[04:13] metal and fuel
[04:14] into trying to very precisely
[04:18] uh insert that nozzle in there uh once
[04:21] you manage to do this and if the ships
[04:23] are pretty much connected similar to how
[04:25] the docking operation works
[04:27] you will have a fuel transfer ui where
[04:29] you'll be able to
[04:31] uh set a price which type of fuel which
[04:33] type of tank do you want to transfer
[04:35] uh from the the uh the receiving guy
[04:37] will be able to say well i only want
[04:39] half a tank because i'm long cash or
[04:40] something like this there's a pretty
[04:42] much a trade interface where you have a
[04:44] bit of management of
[04:46] what you want how much do you want and
[04:48] from the starfarer side
[04:50] where do you want to deliver from
[04:51] because you might have a tank that's
[04:52] completely full
[04:53] time that's completely empty we're
[04:55] looking into
[04:56] gameplay here of how the pressure in
[04:59] those tanks
[05:00] actually speeds up the the delivery of
[05:03] fuel so there will be
[05:05] we want to insert a bit of gameplay here
[05:06] where you can
[05:08] if you know what you're doing you're
[05:09] going to be doing this fast and you
[05:10] might be in a few seconds like a like a
[05:12] pit stop formula one thing
[05:14] and if you're just an average player who
[05:16] first has a starfarer and doesn't want
[05:18] to be bothered you will still do it in
[05:19] about 30 seconds or one minute depending
[05:21] what you're refueling might be a few
[05:22] minutes if you're refueling
[05:24] i don't know nitrous uh that might take
[05:26] a few starfares but you'll still be able
[05:28] to do it but you'll just do it slower
[05:30] at this point both of you guys are
[05:32] sitting in space so if someone finds you
[05:35] you're you're in a lot of trouble uh if
[05:37] they're a pirate
[05:39] so there's uh there's a we always want
[05:42] to do the swiss reward thing in our
[05:44] gameplay we just don't want to
[05:46] get you guys to go there you push a
[05:47] button and then you wait for everything
[05:49] to refuel
[05:50] that being said refueling will take time
[05:52] refueling at the station is going to
[05:53] take a lot longer than it does right now
[05:55] refueling between two ships it's going
[05:56] to take time it's not just going to be
[05:58] you push the button and you fly up
[05:59] no it just takes time so
[06:02] only an operator that's the the big
[06:04] picture of how how this works and
[06:06] uh hopefully we'll get to release it
[06:10] soon
[06:10] tm uh let's see it's still early it's
[06:14] still early but
[06:14] we're we're getting but it is still now
[06:18] i want to clear that that statement up
[06:19] it is still early
[06:20] we have been talking about refuel and
[06:23] repair and many of these systems
[06:24] throughout star citizen development
[06:26] for several years now uh when we say
[06:29] it's early days in spain that means
[06:31] active development on this feature is
[06:34] now begun
[06:35] the schedule the scheduling is done for
[06:38] it we
[06:38] we are just ironing out the details in
[06:41] the design we already talked with
[06:43] a lot of the dependency teams all the
[06:44] guys that need to provide the art
[06:46] the change the boom arm for refueling
[06:49] uh how would we do the fuel ports
[06:51] there's already people there's
[06:53] there's gears are emotions motion for
[06:55] this this pretty much needs to
[06:56] come with pyro because if it doesn't
[06:58] then a lot of people are gonna get
[07:00] stranded in viral and there's gonna be
[07:01] no solution for them
[07:03] so uh yeah it needs to get there well
[07:06] that answers my one question
[07:07] that without me having to ask it so
[07:10] thank you
[07:10] um all right and i get i gotta imagine
[07:14] uh you and your team have done so much
[07:16] work on
[07:17] mining at this point i have to imagine
[07:20] there have been some lessons
[07:22] learned working on mining that you're
[07:23] going that you're applying to refueling
[07:25] can you can you can you speak to any of
[07:28] that right now
[07:30] um i think the it's
[07:33] maybe not the lessons but there's also
[07:35] lessons uh but
[07:36] mainly uh i kind of like it how the team
[07:39] started doing a lot more than just uh
[07:43] uh programming or designing that we
[07:45] started to having our guys know how to
[07:47] build uis from scratch and uh that helps
[07:50] us for example now with the refueling ui
[07:53] we just can build our own uh ui art is
[07:55] just gonna come at the end and make it
[07:56] pretty but we can build it completely
[07:58] functional
[07:58] get all the gameplay done without having
[08:01] to depend on external teams and kind of
[08:03] waiting for them to finish
[08:05] all of these external teams have like a
[08:06] backlog of tasks till
[08:08] the next year at least and if you have
[08:10] to wait for them to slow so
[08:12] we kind of streamlined and we learned a
[08:14] few tricks that we didn't know before so
[08:16] now we are we're a lot faster in
[08:17] iterating we did the mining ui we did
[08:19] the refining ui
[08:21] uh so now we're we're pretty much where
[08:23] uh we can just get the ball rolling as
[08:25] soon as we
[08:26] we have anything with ui that needs to
[08:28] get done
[08:29] other than that um staff from mining
[08:33] that
[08:33] will apply here lessons we've learned um
[08:37] we'll have to see how we deal with
[08:38] economy mining has had a lot of ups and
[08:41] downs with economy and
[08:42] we'll have to see how we do this without
[08:46] getting the players in a status where
[08:47] basically refueling this patch
[08:49] is is profitable next patch is not so
[08:52] profitable
[08:53] and they get they stop playing the
[08:55] refueling type gameplay just because
[08:57] it's not a profit
[08:58] thing so this is something that's
[08:59] probably going to be a bigger bigger
[09:02] thing that we have to do throughout the
[09:04] game that economy needs to go every
[09:06] quarter we release and it needs to be
[09:08] good for all of the
[09:10] all the types of gameplay not just the
[09:13] new one we released
[09:14] but yeah it's a work in progress we're
[09:16] still learning here
[09:18] all right uh last question again about
[09:21] the relationship between mining and this
[09:23] mining famously can be done
[09:26] poorly uh to catastrophic
[09:29] results humorous but catastrophic
[09:32] results
[09:33] uh are we thinking anything along those
[09:35] lines for refueling is there
[09:36] is there going to be a way to mess up
[09:38] refueling so bad
[09:40] there's two ways you can mess up
[09:41] refueling first of all if your pilot
[09:43] is crap he will collide with the ship
[09:47] he's trying to refueling he will
[09:48] hit it with the up the the arm he
[09:51] there's so many things that can go here
[09:52] he'll either damage the arm or damage
[09:54] the ship or damage the starfarer
[09:56] um the other part where you can go wrong
[09:59] if you're trying to do it faster
[10:01] as they speed up the process of once the
[10:03] ships are connected
[10:05] and you don't know what you're doing you
[10:07] either that that nozzle can
[10:09] either burst it can eject fuel into
[10:11] space it can ignite it can cause a lot
[10:13] of problems
[10:14] we're also looking now as a higher tier
[10:16] of
[10:18] how to store more fuel
[10:21] so you might actually want to
[10:24] um you might not want to fill up your
[10:27] tanks all the way to the max
[10:28] and high pressure especially if you're
[10:30] going into hot areas
[10:32] unless you have a tank that is made for
[10:34] those high temperatures so there will be
[10:36] certain conditions in which
[10:38] if you have a highly pressurized tank
[10:40] yeah you will refuel faster but
[10:42] if you enter a hot zone that fuel is
[10:44] going to
[10:45] start to it's if the pressure starts
[10:48] increase increasing that fuel becomes
[10:50] unstable you might
[10:51] you might blow your ship up so we're
[10:53] looking in in this direction too but
[10:55] probably not for the first release first
[10:57] we want to do the basic stuff and then
[10:59] same as with mining we keep building and
[11:00] building them so that being said
[11:02] with mining mining and refueling while
[11:05] not
[11:06] directly connecting connected the idea
[11:08] was always that you mine
[11:10] you refine and then you can use whatever
[11:12] you find to refuel
[11:13] so that is kind of the entire chain but
[11:15] that will be coming also
[11:16] a bit later so so so custom tanks
[11:19] multiple fuel types uh uh variable
[11:23] pressure
[11:23] uh so that so there's an actual uh game
[11:26] plan skill element to it
[11:28] and i'm gonna guess
[11:31] knowing mike snowden that have fully
[11:34] fueled up
[11:35] uh starfarer uh will make a big big boom
[11:38] oh yeah oh yeah i'm looking forward to
[11:41] the video
[11:42] it'll be the fuller it is the big the
[11:43] bigger the bang and it's also the fuller
[11:45] it is the harder to be to do anything
[11:47] with it uh
[11:48] uh chris was very adamant on this thing
[11:51] where like if you fill your ship up with
[11:53] a lot of fuel
[11:53] it will move like a slow boat and you
[11:56] know
[11:57] in mud basically so there will be
[12:00] choices to be made there do i fill it up
[12:02] all the way or do i just feel one tank
[12:03] for each tank here ten percent
[12:06] or something like this very cool all
[12:08] right dan i think we got it
[12:10] thank you so much we're going to throw
[12:11] it over to johnny jesebious now and and
[12:13] see where we're at with repair so i can
[12:15] let you go take care
[12:17] bye bye all right thank you so much dan
[12:21] uh moving on to the second half of our
[12:22] show we are calling lead
[12:24] fps systems designer mr johnny josephius
[12:27] man with the coolest name in all of cig
[12:30] johnny how you doing man
[12:32] hey i'm not bad how are you i'm all
[12:34] right uh
[12:35] i couldn't get my hair to match because
[12:36] i recorded the first half one day and i
[12:38] recorded the second half another day so
[12:39] i'm just wearing a hat so
[12:42] people nobody will notice nobody will
[12:43] notice nobody will notice
[12:45] that these aren't all recorded on the
[12:46] exact same day at the exact same time
[12:48] all right johnny we are talking about
[12:51] repair we
[12:52] just got done talking to dan uh dan and
[12:54] his team
[12:55] uh they've they finished the majority of
[12:57] their technical design
[12:58] they've they've got sign off from cr and
[13:00] they're beginning their work in earnest
[13:03] to get repair refueling going uh in line
[13:06] with the release of pyro hopefully
[13:07] fingers crossed no promises that's just
[13:09] our target
[13:11] you and your team are working on repair
[13:15] as a counterpoint to salvage it's not
[13:17] quite where dan's
[13:19] team is it's a little early earlier in
[13:21] the process so want to talk uh why don't
[13:23] you
[13:23] go ahead and tell us where it is where
[13:25] we're going what considerations you guys
[13:28] are currently investigating
[13:29] uh right now and just uh just give us
[13:31] what you got about repair
[13:33] nothing so yeah like you say we're in
[13:35] earlier stages at the moment we're
[13:37] still firming up on the design so you
[13:39] know everything i say here
[13:40] might not make it to you know when it
[13:42] actually arrives in the pu
[13:44] um but yeah essentially salvage and
[13:46] repair
[13:47] it's the kind of like the first version
[13:49] of salvage that we're actually doing so
[13:50] what we're calling it internally is it's
[13:51] more like
[13:52] hole stripping so you're actually going
[13:54] up to ship some vehicles and you're
[13:56] either stripping away parts of the hole
[13:58] which lowers its health it's like its
[14:00] integrity essentially uh
[14:02] visually as well because it uses the v2
[14:04] damage map or that's what we're
[14:05] intending to do
[14:06] um basically burns it away takes that
[14:08] material away and
[14:09] stores it in the canister even if that's
[14:12] on the you know the multi-tool has a
[14:13] material canister and the
[14:15] larger salvage dedicated salvage tool
[14:17] that we're going to be doing
[14:18] has an even bigger one so you can store
[14:20] even more of that stuff
[14:21] and basically yeah you can either strip
[14:23] away from the hull or you can use that
[14:25] material or you can buy full canisters
[14:27] of material to come
[14:28] and use that as a repair resource as
[14:30] well so if your ship takes a few hits in
[14:32] combat
[14:33] you'll be able to pop out cockpit eva
[14:35] over to it get your
[14:36] repair tool out and kind of fill it in
[14:39] if you come across the idea is at least
[14:41] if you come across something like a
[14:42] derelict and your ship's damaged and you
[14:44] don't have any repair resource you could
[14:45] strip away some of that ship
[14:47] and spray it onto yours um so it's not
[14:50] going to be
[14:50] 100 like oh i've just you know
[14:54] sprayed this magical you know metal
[14:56] substance into the ship again and it
[14:57] looks like it's brand new
[14:59] it's going to look a little bit more
[15:00] battle scarred and the idea is we want
[15:02] to use a different material on that to
[15:03] show
[15:04] like look you've patched this up
[15:05] yourself it doesn't look
[15:07] like a pristine ship anymore if you want
[15:09] it to get back to its pristine state and
[15:11] you know 100 health again
[15:13] then you can have to take it back to a
[15:14] shop to get someone to properly repair
[15:16] it for you
[15:17] interesting so a little bit to unpack
[15:20] there
[15:20] so repair is intrinsically tied with
[15:24] salvage
[15:24] it is basically salvages one mode and
[15:26] then you flip the
[15:28] darn thing into reverse and you're in
[15:30] repair in the other mode
[15:32] but you said something interesting that
[15:34] when you when you
[15:35] repair your ship when you run your your
[15:37] salvage beam either from the multi-tool
[15:39] or from the dedicated tool
[15:41] and we showed some of the dedicated
[15:42] tools recently on isc you were there
[15:44] um when you run it when you run it past
[15:47] it doesn't restore
[15:49] your your paint job and everything it's
[15:51] going to be some
[15:52] like third transient state because we
[15:54] got our pristine ship
[15:56] with its paint and tack and then we've
[15:58] got the damaged ship
[15:59] you know you know as it degrades wears
[16:02] and tears whatever whatever happens to
[16:03] the ship it takes it
[16:05] to the stress point up to when it's
[16:07] about to explode
[16:08] but then salvage can bring it back or
[16:11] not salvage repair can bring it back
[16:13] not just to where it was originally but
[16:15] to some
[16:16] other third state where it's kind of
[16:18] like unpainted metal or so
[16:20] that's part of what we're exploring
[16:22] right now yeah yeah so there's a lot of
[16:24] technical
[16:25] considerations that i don't want to
[16:27] write checks for at the moment because
[16:28] we have to do some we have to talk with
[16:29] the graphics team we have to start with
[16:30] a bunch of different people to make sure
[16:32] that that system will work but that is
[16:34] what we want to do from design side if
[16:35] we can
[16:36] because it does give you that nice
[16:38] visual feedback of like you know i've
[16:39] been through a few battles i've had a
[16:41] few scrapes and i've patched up myself
[16:43] because i want to keep going while i'm
[16:44] out i don't want to go back to a landing
[16:45] zone or anything to get fixed up
[16:47] so um yeah it does give you those like
[16:50] it
[16:50] feels cool right like you've been flying
[16:52] around for a while like i've taken a few
[16:53] hits but i've scraped through and i'm
[16:55] patching up myself
[16:56] it looks uh i think it'll make a few
[16:58] ships look you know battle scarred and
[17:00] awesome and it also kind of ties into
[17:01] the fact that
[17:02] you might not necessarily be able to
[17:03] restore that part back to its full
[17:05] health again unless you go and either
[17:06] get a replacement for it or you go and
[17:08] get the proper repairs for it as well so
[17:10] it gives you visual feedback on both
[17:11] sides like i've been out and about and
[17:13] had some scrapes and also this is a
[17:14] little bit weaker than it was to start
[17:16] with
[17:17] so what makes now the time
[17:20] to to get into this because because
[17:23] we've talked about
[17:24] repair i mean since the beginning of the
[17:27] of the project
[17:28] um and and we we carry a lot of ideas
[17:31] forth with us throughout the years
[17:33] you can go back through wingmen's
[17:34] hangars and old atvs and see
[17:36] many of chris's comments on it
[17:38] throughout the years but what makes now
[17:40] the time to actually buckle down
[17:42] and start you know you know putting
[17:45] things on paper
[17:46] and start actually pushing the process
[17:48] forward
[17:49] well to be honest it's been a long time
[17:51] coming and it's a system that's
[17:52] basically
[17:53] been needed and the more persistence
[17:54] that we get inside the pu and the more
[17:56] we want you to be kind of
[17:58] well we've got the health system coming
[17:59] in for starters soon which obviously
[18:01] makes you care about everything you've
[18:02] got and taking care of all of your items
[18:04] you know a lot more important uh because
[18:05] it's all persistent so
[18:07] um if you do get into a few scrapes in
[18:09] the p you're not gonna just wanna
[18:11] you know abandon your ship and you know
[18:13] die on a planet somewhere
[18:14] you're going to want to have an option
[18:15] to be able to repair it and you know fly
[18:17] out of there
[18:18] so um i think it all just ties into all
[18:20] the other systems that come into the
[18:21] game at the moment and the fact that
[18:23] it's a system that's been looming for a
[18:24] long time and this is the starting point
[18:26] for it obviously
[18:27] it expands out when we start looking at
[18:29] ship salvage there'll be similar systems
[18:31] there where you might be able to use you
[18:32] know whole scraping lasers to take that
[18:34] stuff off but then there's things like
[18:35] the reclaimer with the claw
[18:36] and you just kind of progress from what
[18:38] we're doing down here all the way up to
[18:39] that
[18:40] so yeah this is a really good starting
[18:42] point you know for us to start
[18:44] you know noodling around with playing
[18:46] with seeing what works what doesn't
[18:48] and then you know go from there
[18:49] basically i have to imagine you're also
[18:51] in a similar situation to
[18:53] refueling in that the pyro system is
[18:55] coming and there are
[18:56] fewer rest stops fewer repair stations
[18:59] along the way
[19:00] and uh you need you're gonna need more
[19:02] options to to
[19:04] uh maintain your own ship because you're
[19:06] not gonna have an
[19:08] easy stop-off point to to instigate
[19:10] repairs like like you like it like you
[19:12] have in the uh
[19:13] the stand system yeah absolutely it's a
[19:15] lot more remote and barren isn't it and
[19:17] you know you're gonna want to be able to
[19:19] be a bit more self-sufficient
[19:20] than you can be at the moment so uh yeah
[19:24] and i think it even ties into a few
[19:25] things that we want to do down the line
[19:26] too so we've not even mentioned where we
[19:28] want to take this beyond the whole
[19:29] stripping is that eventually we want to
[19:30] be able to when we get the physicalized
[19:32] ship
[19:33] items inside the ships too we want this
[19:35] to be able to time with that as well so
[19:36] if someone does target your power plant
[19:38] or whatever and take it out and you end
[19:40] up just about managing to land your ship
[19:41] somewhere
[19:42] you want to be able to repair that power
[19:43] plant back up rather than you know being
[19:45] completely stranded because you've got
[19:46] no power plant left so
[19:48] eventually that's to come later that's
[19:50] probably not going to be an artesia
[19:51] release but
[19:52] later down the line that's certainly
[19:53] something we want to do too and it does
[19:54] tie into that whole
[19:56] self-sufficiency thing so so where so
[19:59] where so where do you go from here uh
[20:02] it's i obviously don't give us like
[20:04] don't put like a date yeah we're gonna
[20:05] have repair on
[20:06] december whatever but but but what's the
[20:08] what's the process like from here
[20:10] uh from here forward so where we're in
[20:13] terms of
[20:13] uh from a design point of view yeah like
[20:16] like in the overall pipeline and
[20:18] if you imagine the overall getting
[20:20] repair into the game pipeline where are
[20:22] we at in this pipeline
[20:23] what's what's still left to do um so
[20:25] we're still early we've got the design
[20:26] stubbed out on paper which we've been
[20:28] going through with um
[20:29] game directors like rich rich tyra um so
[20:32] we've been working on that with him uh
[20:33] we've been trying to come up with a
[20:35] what we call a functional design as well
[20:37] which is essentially a fancy name for
[20:39] basically working out the numbers in
[20:41] excel for a first you know bounce pass
[20:43] on
[20:43] you know the you know the stripping
[20:44] rates and stuff and how it degrades the
[20:46] health on chips and everything so we're
[20:48] just working all the details out at the
[20:49] moment
[20:50] and there are other teams that we're
[20:52] obviously very dependent on to get this
[20:53] working so we've been talking to the
[20:54] graphics team
[20:55] network teams obviously if i've like
[20:58] drilled a hole in my ship with my
[21:00] salvage tool
[21:01] we want that shown over the network and
[21:02] that comes with its own problems
[21:04] uh so there are a lot of things to
[21:06] factor in and then it also comes down to
[21:08] things like the
[21:09] we've been in contact with the vfx team
[21:11] uh at some point we're gonna need to see
[21:13] what the salvage beam actually looks
[21:14] like
[21:15] in situ with what it looks like when
[21:17] we're burning away the ev2's on the ship
[21:19] too
[21:19] so it is very early stages
[21:22] investigation like tech investigation
[21:24] being done by several teams that link
[21:26] into this and then also
[21:28] very similarly to what we do with a lot
[21:29] of our design workers we're in
[21:32] kind of working with the teams that you
[21:33] know work on the concept of the visuals
[21:35] to see what this looks like whether it
[21:37] be ui
[21:37] or vfx or anything like that so
[21:41] well i imagine we'll be following along
[21:43] with it as it develops just as we will
[21:45] with refuel and just as we
[21:46] have are currently with like the
[21:48] colonialism outposts and everything
[21:50] uh be sure to stay tuned to inside star
[21:52] citizen to see this feature as it
[21:54] progresses
[21:54] throughout the remainder of this year
[21:56] johnny that's it
[21:58] thank you so much i can let you go no
[22:01] it's been fun
[22:01] all right take care bye that's it
[22:05] paid the bills i'm jared huckabee we'll
[22:08] see you all next time everybody take
[22:10] care
[22:29] you

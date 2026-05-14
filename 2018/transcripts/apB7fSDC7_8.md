# Star Citizen: Calling All Devs - Dude, Where's My Spaceship?

**Video:** https://www.youtube.com/watch?v=apB7fSDC7_8
**Date:** 2018-10-01
**Duration:** 18:25

## Transcript

[00:10] hey everybody welcome to another edition
[00:13] of culling of all devs our weekly Q&A
[00:14] series rhetoricians from you the star
[00:16] system backer impose them directly to
[00:18] our developers we're jumping right into
[00:20] it today because I've been dealing with
[00:22] technical issues all out of the fund me
[00:25] happy stuff first call this week is to
[00:27] look Pressley bigwig out of foundry 42
[00:30] UK look how you doing hi Chad oh yeah
[00:34] alright thank you for being patient
[00:37] we've tried this call like four times we
[00:39] finally got it we're gonna try to get
[00:41] this done before we got a question for
[00:42] you this is a question that comes up
[00:44] quite frequently in my circles at least
[00:47] you know spending on as much time on
[00:48] spectrum as I do the question simply
[00:50] states coordinates systems when uh what
[00:55] do we think the chances are what our
[00:57] intentions what are our future
[01:00] prognostications if you will about
[01:01] adding a 3d positioning system so that
[01:04] we can better tell our friends where we
[01:06] are in space and our friends can
[01:08] subsequently find us okay well we
[01:14] definitely need one and as with my
[01:17] mission hat on I can't wait to get one
[01:20] can imagine the kind of puzzle side
[01:23] things we there will be able to do with
[01:25] that um okay I mean I need to go away
[01:32] talk to the system designers and stuff
[01:34] but I'll hypothesize because I can I can
[01:36] see exactly how we do it you know quite
[01:38] straight forward at once you've agreed
[01:41] on the basics right so if you imagine
[01:46] the coordinates ran from what's the
[01:50] origin right is it Earth is it the Sun
[01:54] you know it would be something like that
[01:56] because we're humans and we put
[01:57] everything you know where the center of
[01:59] the universe and develop a diverse
[02:03] coordinates just run and run because
[02:04] you'd end up with huge numbers obviously
[02:06] or do they may be reset kind of like you
[02:10] say okay Stanton you're in Stanton so
[02:12] you like preface it with Stanton and
[02:14] then say 0 0 the origin is for Sun Sun
[02:19] riser and just to start again like
[02:22] otherwise these numbers are just going
[02:23] to become absolutely unwieldly and
[02:25] impossible to use and so you know I
[02:29] think once we figure that out
[02:31] I agree on that then it should be fairly
[02:35] straightforward because we we have like
[02:39] the root you know we have you zones
[02:43] right the game has sounds like air so
[02:46] there's a route which is just space and
[02:49] then there's like you get to a planet
[02:51] even inside a as a zone right and
[02:53] every time you step into that you go to
[02:56] actually let your local coordinates are
[02:59] in relationship to it so if you were
[03:02] looking at your your coordinates
[03:04] stepping inside a ship from space will
[03:06] change them like it'd be a huge number
[03:09] when you're in space dam tightening them
[03:11] because you're only meters away from the
[03:13] origin of your ship so I mean what like
[03:18] you can easily get around that can you
[03:20] assume you can just use for world corner
[03:22] that's full stop you will always be
[03:24] inside like a spade a solar system you
[03:28] know and when you use a wormhole or a
[03:31] jump point kinda thing you'll come out
[03:33] in another solar system we just reset
[03:35] the coordinates to that so either way we
[03:39] do it if we decide we do it like with
[03:41] earth being zero zero you basically just
[03:44] take how far is earth away on the star
[03:47] map kinda thing and then add on whatever
[03:49] real world coordinates you getting at
[03:51] the time on to that and bingo you've got
[03:56] you've got corners again to unwieldly to
[03:59] really be telling your friends so we bet
[04:02] that's the thing we have to figure out
[04:04] and because like at one point I really
[04:07] wanted like like sectors on planets so
[04:10] you can be like oh and and somewhere in
[04:12] here cuz again with a mission hat like
[04:15] bets oh great we can say it crashed
[04:17] somewhere in Sector blah blah blah and
[04:19] get you searching for it get you scan in
[04:21] or
[04:22] and we can still do that even we even
[04:24] with like coordinates like we've saved a
[04:27] lot last known you know these things are
[04:29] basically we're not broadcasting
[04:30] constantly so they broadcast their
[04:33] position every minute or something and
[04:36] when this thing has crashed you know you
[04:38] only get the last-known coordinates so
[04:40] you go there and scan yeah so basically
[04:44] I mean the answer is as soon as we
[04:47] figure out how to how to be able to
[04:50] present it in a way that isn't a million
[04:54] you know I'm at zero for two now in
[04:57] export like you know forever you know
[04:59] and and and where do we show it as well
[05:02] there's another question where do we
[05:03] show this and because I can't think off
[05:07] the top of my head a great position for
[05:08] it like you know bring up my mobiie
[05:10] glass or you know something like that or
[05:13] is it always on the screen somewhere and
[05:15] that's probably not the best way to do
[05:18] it so the new I guys would need some
[05:20] buy-in on this as well well yeah it
[05:24] sounds like it sounds like a question of
[05:26] skill you have to say how how granular
[05:28] you you you want to drill down and do it
[05:31] you know is the universal coordinates
[05:34] and then there's system coordinates and
[05:36] then within the system or there are
[05:38] there sector coordinates as you said and
[05:40] then on each each planetary body does
[05:43] each planetary body then have its own
[05:45] set of coordinates and then do you have
[05:47] sectors on the planetary body so so yeah
[05:49] it's a it's a yep you want to you want
[05:51] to devise a system that is granular
[05:55] enough to tell to tell to let people
[05:57] effectively describe where they are if
[05:59] they pinpoint position book in a
[06:01] manageable right so you actually work
[06:06] cut out for him in this is something you
[06:08] can just hand off to somebody else or do
[06:10] you have to do it oh well yeah sounds
[06:15] like a job for that person alright look
[06:18] I'll let you get back to work hey all
[06:20] right take him in alright thank you so
[06:22] much Luke now moving just one row of
[06:23] seats over to this friend vehicle
[06:26] pipeline
[06:26] director John crew we've got two
[06:28] questions for you about ships and ship
[06:31] mechanics John ain't on it good things
[06:33] ready to answer some more questions
[06:36] someday I'm gonna go that somebody
[06:38] should count with somebody in the studio
[06:40] audience go through and count all the
[06:43] questions and see if John is the person
[06:44] who's done more than anybody else sighs
[06:46] I think it's a pretty good bet but I
[06:48] know Luke Presley is there yeah
[06:51] shot as well she had Rob Ryan Ruger
[06:53] makes a help but makes a healthy showing
[06:55] I'd be curious to know who doesn't need
[06:56] to scho bold media score would somebody
[06:58] make me a call held EPSCoR word all
[07:00] right John I know you got a meeting to
[07:01] get to so we'll rush through this here
[07:02] two questions for you right off the bat
[07:04] if I salvaged a fuel tank off another
[07:08] ship can I use any of the fuel inside to
[07:12] get me home
[07:14] so I don't want to rule things out
[07:17] permanently forever because sort of
[07:20] salvage is gonna be not strictly vehicle
[07:22] pipeline but tr0
[07:26] no you're just sounding the the item and
[07:28] everything inside it is just contained
[07:31] items that goes into it if you're gonna
[07:33] put it in a big grinder it's obviously
[07:36] not going to survive the other end maybe
[07:39] if you have special equipment like you
[07:41] have the Vulcans drones you would
[07:44] salvage the fuel separately first I
[07:48] configure the drones say yeah I'm going
[07:50] out there and you're looking
[07:51] specifically for fuel because those
[07:52] drones can do refill the agree arming
[07:54] repairing you could use the Vulcan to
[07:58] know the reverse of refueling that ship
[08:01] first and then salvage all the parts
[08:05] manually it's like your scope of cargo
[08:07] maybe you go out there and cut those
[08:09] bits but no to start with it's just
[08:12] you're gonna grab that item it has its
[08:16] contents and you sell or convert it as
[08:19] needed and reviewers of calling up as I
[08:22] encourage you to check out Gant repens
[08:24] answer it was there last week or the
[08:25] week before very recently where he talks
[08:27] about how his team is scheduled to move
[08:30] on to salvaging as soon as the
[08:31] completion of asteroid mining coming
[08:33] soon and now
[08:34] we is all wrapped up with a nice bow
[08:37] alright next question for you how about
[08:41] that bamboo merchant business I know you
[08:45] had a 50-50 shot whether it was gonna be
[08:47] the character the man who originally
[08:48] yeah you could've asked me about the car
[08:49] we're gonna go with much money I will
[08:51] never ask you about the carrot come the
[08:54] show okay
[08:55] I'm not even talking to you I'm talking
[08:56] to the Packers this question says what
[09:01] are the current high-level design goals
[09:03] for the bad new merchantman has it
[09:05] changed at all from its original intent
[09:08] don't think it's really changed from its
[09:10] original intent OC it's between it the
[09:14] Carrack and a couple of other ships it's
[09:16] the the most anticipated or waited ships
[09:21] its broad high-level goals it's still a
[09:24] trading ship it still gots shops or
[09:27] stores inside it where you can sell your
[09:31] goods trade your goods still a great
[09:34] little little big ship for being like in
[09:40] all headquarters so it's got the
[09:43] accommodation capacity to keep a bunch
[09:45] of people on board the writers are said
[09:49] like by new trade negotiations take a
[09:52] long time so we've built in so I've made
[09:55] short term it accommodation for guests
[09:58] it still got those huge honking great
[10:01] guns to defend itself the one thing that
[10:06] sort of maybe it's changed maybe it's
[10:10] not changed but the topic of speed of
[10:14] the ship a lot of things have been said
[10:17] about the ship officially and
[10:19] unofficially and they sort of get warped
[10:21] over time it is a big ship big ships on
[10:24] our game are not fast ships so there's a
[10:29] lot of expectation of this the ship it's
[10:32] just going to be zipping around all over
[10:33] the place that's that's not it's big
[10:36] it's
[10:36] ft it's armored and it's got the
[10:38] firepower to offset that you have some
[10:41] of those bad new defenders flying around
[10:43] there yeah that's that's the reason they
[10:45] are there and there is some interplay
[10:48] between the two that we've built in but
[10:50] not talked about so there are reasons
[10:54] and
[10:56] expect that question to be added to the
[10:59] October questions threatened to get
[11:00] voters very quickly so you got you got
[11:03] about a you got about a month to figure
[11:05] out your answer that one Josh you're
[11:06] coming for it for people I got my answer
[11:08] I'm just gonna save it for the ship
[11:10] shape but I'll only do it yeah that's
[11:11] pretty and as for the carrot box people
[11:14] who take my joking a little too
[11:17] seriously I am joking about the
[11:20] character what as soon as the carrot
[11:21] goes into work I've said this before I
[11:23] said it on shipshape when the carrot
[11:25] actually jumps into the production
[11:26] pipeline when it's actually active and
[11:28] ready to go you will see a big
[11:30] announcement from me on ship shape with
[11:32] colored streamers and yeah that day just
[11:37] has not come yeah so yeah when that
[11:40] happens we'll start to have new
[11:42] information for you but until then all
[11:45] right John that's it I'll let you know
[11:47] workman sounds meetings next week
[11:50] probably oh my son I gotta get to the
[11:52] top of the lead boat I hear I and
[11:56] finally last but certainly not least
[11:58] Austin Texas which is where we find the
[12:01] designer Rob Reiner another comedy hall
[12:04] devs all-star Rob how you doing it good
[12:06] all right how you doing Jerry I'm doing
[12:08] okay I've got a question for you now I'm
[12:10] gonna let's do a little behind the
[12:11] scenes here normally normally panicked
[12:14] impaired our designers look I sent out
[12:16] an email we do a conversation before
[12:18] hand we workshop the answer that's why
[12:20] we make sure they don't say anything
[12:21] with the not supposed to get anybody in
[12:23] trouble you know we don't want
[12:25] calling all devs canceled because
[12:26] somebody says something then I suppose
[12:27] to you and whatnot you know sometimes
[12:29] that still doesn't work see whatever the
[12:31] 600 I think was from couple months ago I
[12:34] can't remember
[12:35] but we don't yet know not you know it's
[12:38] usually the ship ones that get us in
[12:39] trouble but Rob I've got a question for
[12:41] you I have not prepped you on it you
[12:43] don't know it's coming because this is a
[12:46] skirt this is a true this is a trolli
[12:48] question this comes up every once in a
[12:50] while but for some reason this month it
[12:51] got voted up so your question is when
[12:56] when will we finally be able to trade
[13:00] subdued npcs and other players i can't
[13:07] say that's currently on the roadmap
[13:11] human trafficking trafficking yeah know
[13:15] what I mean there's been comments about
[13:17] it you know throughout the development
[13:19] of the game where it's just like yeah
[13:20] you know because like the slavers you
[13:22] know are like part of the lore and and
[13:25] everything right so it's it's come up
[13:28] but bounty hunting you know yeah that's
[13:31] another example of it right a lot of
[13:32] people are looking forward to bounty
[13:33] hunting we've got the we've got the
[13:34] anvil Hawk currently in development you
[13:36] know that the currently building being
[13:38] built out here by the LA 15 that's a
[13:40] bounty hunting ship lot of lots of talk
[13:43] over the years about about being able to
[13:47] capture NPCs and capture players and
[13:50] whether when you capture a player it
[13:52] gives you an NPC copy of that player
[13:55] maybe I could say so that the player
[13:57] itself can be free to you continue
[13:59] playing it stuff like that but yeah has
[14:03] anything been is anything been fully
[14:05] hammered out fleshed out decided no I
[14:08] mean we talked about the bounty hunting
[14:11] aspect of it you know quite a bit
[14:13] because we're trying to flesh out like
[14:14] the roadmap for the next you know few
[14:18] years but and bounty hunting is a part
[14:21] of that right but how how detailed
[14:24] that's going to be for for the tier 0
[14:26] implementation or for that you know
[14:27] Minimum Viable Product is still up for
[14:30] discussion so it's as a tradable
[14:34] commodity like being able to actually
[14:35] sell them to another person very far
[14:39] there is no yeah that's that's like a
[14:40] whole new level of
[14:42] kind of craziness there so I I'd say you
[14:47] know the safe answers probably will have
[14:50] something available with bounty-hunting
[14:52] you know being able to trade slaves
[14:55] probably not going to be anywhere in the
[14:58] near future
[15:00] but you never know where star citizen's
[15:02] gonna go and I can guess on this one our
[15:05] director of public relations who watches
[15:07] the show just breathe a sigh of relief
[15:09] for you you haven't happened there's not
[15:10] saying yeah I can tell you at this point
[15:12] hi hi hi you just breathe a sigh like
[15:14] you said okay training players probably
[15:17] not on the road we're rocking we're not
[15:19] gonna add human trafficking to the
[15:20] roadmap Nick anytime soon talk I'm not
[15:24] even talking to the back of her I'm
[15:25] talking to our drew PR go
[15:28] hopefully honest I wonder if there might
[15:30] be some I don't know that's so he'd have
[15:35] to investigate that let's let's get
[15:38] bounty hunting going let's get back down
[15:40] to your zero stuff and let's let's put a
[15:42] pin for now let's put a pin in the idea
[15:46] of trading other rock layers as a
[15:49] commodity baby we don't ever want to say
[15:53] never I'm following all that yeah it's
[15:57] yeah so that's that's one where we would
[16:00] might come close to saying but but who
[16:05] knows you know bounty hunting is
[16:07] definitely important to us so you
[16:08] definitely want that you know going and
[16:10] capturing people and feeling that but
[16:13] not disturbing the gameplay of other
[16:16] people like to drastically you know so
[16:18] that's that's what we're really trying
[16:20] to work out right now selling people to
[16:23] other people not probably not in the
[16:27] cards man right now I will start out in
[16:29] the cards I know and I know who asked it
[16:32] it's the same person's been asking that
[16:33] question for a better part of a year and
[16:36] I'm not gonna name any names but that
[16:37] person knows who they are
[16:38] yeah you know did I get it so that's it
[16:43] and is it safe to say that just because
[16:46] you got this question about it out
[16:47] doesn't mean that you can see throughout
[16:50] more outrageous stuff and expect it to
[16:52] be at the top of it I don't mind I don't
[16:54] mind the array of stuff it's up to the
[16:55] community whether they whether they want
[16:57] to blow up calling all the Deb's
[16:58] question on voting it up or not yeah
[17:00] apparently up to the community give so
[17:02] many questions we put that power in
[17:04] there I robbed anyway that's a good old
[17:09] man that's so that's the first time I've
[17:10] ever been asked that question so that's
[17:12] I got anyone yeah okay thank you sir I
[17:15] don't you go all right cheers man later
[17:17] bye
[17:17] yeah well that about does it for this
[17:19] week's show especially the things to
[17:21] Luke Presley and John crew and Rob
[17:23] Reiner for taking John fruit would run
[17:25] from taking their time to answer taking
[17:28] their times remember you can submit your
[17:31] questions for consideration each and
[17:33] every week up on the thread up on
[17:35] spectrum and don't forget to vote that's
[17:38] the two prong plan you got to submit
[17:39] your questions you got to butter your
[17:40] questions the September threat is up now
[17:42] the October threat goes up next week so
[17:45] for calling all this I'm Content Manager
[17:47] for global video production Jared
[17:49] Huckaby we'll see you next week
[17:50] everybody
[17:51] [Music]
[17:55] you
[18:04] thanks for watching for the latest and
[18:06] greatest in star citizen squadron 42 you
[18:08] can subscribe to our Channel or you can
[18:10] check out some of the other shows and
[18:11] you can also head to our website at
[18:16] www.uvu.edu/library

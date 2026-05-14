# Star Citizen: June Subscriber's Town Hall feat. Engineering Team

**Video:** https://www.youtube.com/watch?v=efUx-ksBcQ4
**Date:** 2016-06-29
**Duration:** 53:15

## Transcript

[00:00] e
[00:54] welcome everybody welcome to another
[00:57] special subscriber edition of reverse
[00:59] the ver
[01:00] reverse the verse reverse the verse I'm
[01:02] your community manager Jared hucke just
[01:04] back from vacation welcome everybody oh
[01:07] I'm going outside my box
[01:09] here hold on what is that all right uh
[01:12] with us today are members of the Austin
[01:14] engineering team uh we've got with us Mr
[01:17] Ahmed Ahmed say hello to the to the nice
[01:20] fans hi everybody ahed uh we have Mr
[01:23] Jason say hi Jason hey and Mr Tom hello
[01:29] Mr Tom I'm still saying Mr first names
[01:31] because I'm terrible with last names but
[01:33] is it it's it's it's Tom Sawyer it's
[01:35] Jason Eli and El see that's why mad with
[01:39] things and Ahmed why don't you just say
[01:41] your last name it's Sher Sher yes Shaker
[01:45] there y see that's why I don't even
[01:47] bother trying I don't even know why I
[01:48] tried anymore so uh if you if You' never
[01:51] watched one of our special subscriber D
[01:53] Shar TVs uh once a month we do a special
[01:55] broadcast anybody can watch but we take
[01:57] questions exclusively from our
[01:59] subscribers
[02:00] the subscribers are the subset of our
[02:02] backers who subsidize all of our
[02:04] broadcasts like around the verse reverse
[02:06] the verse uh Buck Smashers the monthly
[02:08] jump machine itself I'm sorry oh we we
[02:12] are having an issue hearing we can't
[02:14] hear you you can't hear me at
[02:18] all all
[02:20] right yeah go ahead and cut it um sorry
[02:23] Tom was asking about the air conditioner
[02:25] uh basically they they the subscribers
[02:27] uh subsidize all of the output that we
[02:30] put out to the community um and this is
[02:33] one of those things so if you're
[02:35] interested in asking questions to the
[02:36] engineering team we are taking questions
[02:38] exclusively from our subscriber chat you
[02:40] can go to robertsspaceindustries.com
[02:43] community/ chat and open up the
[02:46] subscriber tab uh of course you have to
[02:48] be a subscriber to have access to the
[02:49] subscriber tab uh for any reason you're
[02:51] not a subscriber and you'd like to
[02:53] become one you can check the uh the main
[02:55] menu at the top of the website for
[02:57] information about how to become a
[02:58] subscriber so why don't we start uh why
[03:01] don't we start talking a little bit
[03:02] about who we are and what you guys do so
[03:04] folks can uh can uh tailor their
[03:07] questions specifically to you guys
[03:08] because there's there's a lot of
[03:09] misconceptions about what an engineering
[03:11] team does uh a lot of folks were were
[03:14] calling you the devops team earlier you
[03:16] know in the week and stuff like that so
[03:18] let's let's start the broadcast by
[03:19] clearing up a lot of misconceptions uh
[03:21] before we get started so Ahmed why don't
[03:23] you start us off and tell us a little
[03:24] bit about what it is that you actually
[03:26] do for cloud Imperium games so yeah um
[03:29] principal Dev Ops engineer mainly I take
[03:32] care of day day-to-day operation of all
[03:34] game Cloud infrastructure and uh I take
[03:38] care of the automation configuration
[03:40] with a large team uh we have I I think
[03:43] most of the subscribers know a bunch of
[03:44] the names we have on a team we have
[03:46] miles Kagan Andy Nate Jey P Gerard
[03:50] that's the def Ops Team I'm here to
[03:51] presen my team not just myself and yeah
[03:54] we we are the people that run all the
[03:55] cloud infrastructure and take care of
[03:57] the builds that you guys get to see and
[03:59] play all
[04:00] okay and where did you come to where did
[04:03] you come to us from you where were you I
[04:05] came from the web industry this is my
[04:07] first gaming job I I had gaming CL like
[04:10] game Studio clients before but they were
[04:11] mainly doing like web uh games uh I came
[04:15] from operation and a startup uh in Egypt
[04:18] called spir systems we were mainly uh
[04:20] supporting uh startups struggling
[04:24] underload our our big biggest bigger
[04:27] segment or like the biggest segment we
[04:28] had of clients were mainly people who
[04:30] have very high traffic in a very short
[04:33] period of times you know how to manage
[04:34] their scaling they want to move from
[04:36] being in bare metal to virtualization to
[04:39] Cloud move between Cloud providers so
[04:41] yeah my background was mainly in in the
[04:43] cloud and the scaling area automation
[04:44] all of that and when I Saw the J
[04:47] posting a very high fidelity MMO that
[04:50] needs to run in the cloud that was very
[04:51] interesting the statefulness in the game
[04:54] all of that is completely different from
[04:55] anything in the web so um I I thought
[04:58] and I was correct that it will bring of
[04:59] like some crazy challenges that I've
[05:01] never seen before and here I am have
[05:04] been here for uh a year and 3 months
[05:07] almost gotcha we'll come back to that
[05:09] how uh M an MMO that runs in the cloud
[05:12] is is is different and an interesting
[05:13] challenge want to get to the other
[05:15] introductions here Jason uh tell us what
[05:17] you do for for cloud Imperium games um
[05:19] well I'm in charge of the architecture
[05:21] of the backend Services um pretty much
[05:24] on a day-to- day um you know we identify
[05:27] what the you know what game features
[05:29] need as far as back and services and um
[05:32] you know help design the proper services
[05:34] and interaction between those in the
[05:35] game um you know pretty much just make
[05:39] the world work on the in the back end
[05:41] right the things that people don't see
[05:43] we're kind of underappreciated in that
[05:44] sense but when something happens we're
[05:46] the first ones to fair enough uh can you
[05:49] give us an example of what a backend
[05:51] service is uh yes like a friend service
[05:54] um we have the we just you know we have
[05:55] persistence now which basically is in
[05:57] charge of of uh bringing uh items from
[06:00] the game servers into the database and
[06:02] um you know that sort of thing uh we
[06:04] also have uh the general instance
[06:06] manager which is um essentially in
[06:08] charge of spooling up and shutting down
[06:10] game instances and managing game
[06:12] sessions okay and that's different from
[06:14] net code yeah uh Network code is more
[06:18] between the clients and the actual game
[06:20] server the game server would be you know
[06:22] like you're Arena commander game
[06:23] sessions or when you're actually flying
[06:24] around in Crusader um that's the more
[06:27] real time um you know twitch type of
[06:30] play um the backend Services is more um
[06:33] you know it's it's um the stuff between
[06:36] the servers as opposed to yeah command
[06:38] and control yeah command and control
[06:39] gotcha all right and uh Tom what do you
[06:41] do for cloud and premium games uh yeah I
[06:44] work with uh you know Jason here I'm a
[06:45] senior server programmer um as well and
[06:49] uh yeah you know just uh working on the
[06:51] back end as well just uh with all the
[06:53] services that we have in the back end
[06:55] dealing with a lot of the command and
[06:57] control tools that you know we give the
[06:58] QA guys and live Ops Team you know so
[07:00] that we have you know some idea of
[07:03] what's going on in real time both in the
[07:05] public test realm and the live and
[07:06] things like that and of course anytime
[07:08] there's an issue uh you know I log in
[07:11] and uh you know I'm you know doing heart
[07:13] surgery on live servers uh you know in
[07:15] production and stuff uh behind the
[07:17] scenes you know uh sometimes you know
[07:20] there are issues uh when we do a fresh
[07:22] deployment something that's been you
[07:24] know built up uh between like a 24 and a
[07:26] 241 and things like that just uh making
[07:29] sure everything works so yeah got yeah
[07:31] the three of us here are pretty much the
[07:33] primary fire fighters we're the first
[07:34] line of defense in most cases yes
[07:37] something goes wrong it is very common
[07:38] in the uh 24 to 48 hours after a new
[07:41] patch goes out to to see you guys in
[07:43] Skype at all hours of the
[07:46] night yeah yeah so do doing some uh very
[07:49] risky stuff but you know the The Show
[07:51] Must Go On you we must uh keep these
[07:53] servers up and running the best we can
[07:55] so absolutely and Jason where where were
[07:57] you before Cloud Imperium games um a
[07:59] number of places let's see I started in
[08:01] the game industry at um origin working
[08:03] on Ultima and
[08:04] Crusaders um and then I actually have my
[08:07] started my own company Asylum software I
[08:08] started making my own little MMOs uh
[08:11] Elder lands and lothar online and these
[08:12] little they small boutique uh type of
[08:15] games retro style things so nothing on
[08:16] the scale of this um and that's where I
[08:19] got into actually you know building you
[08:22] know massive online worlds and such so
[08:24] this is really attractive coming over
[08:26] here to this it's on such a grand scale
[08:28] um I also worked at Qualcomm as a a
[08:30] server engineer over there um building
[08:33] um you know high performance Network
[08:35] applications all right and how about you
[08:37] Tom where were you before this um I was
[08:40] I was with the Sony PlayStation for
[08:42] almost a decade in uh San Diego um I was
[08:45] with the online Technology Group and uh
[08:47] we built up uh you know network library
[08:50] libraries and server architecture for
[08:52] first party and second party Studios and
[08:54] you know by the time I left uh you we
[08:56] shipped about 160 uh Playstation titles
[08:59] using the framework um I mean I have to
[09:01] admit you know I'm more of an FPS guy
[09:03] before I came to you know Cloud Imperium
[09:05] games you know you kind of do things a
[09:07] little bit differently and now that you
[09:09] know uh we're in MMO there's a whole
[09:12] different set of uh problems to solve
[09:15] and uh that's where Jason is you know
[09:17] really really helpful you know just
[09:19] having his MMO experience and uh
[09:21] persistence you know itemization
[09:23] itemization is you know in my mind the
[09:27] most technical complex part an MMO just
[09:30] you know managing just all these items
[09:33] that can be traded with other players
[09:35] you can purchase them on a website and
[09:37] it syns up and um you know trade yeah
[09:41] tradeable in mailboxes and shops and
[09:44] stuff so and this is a completely
[09:45] different Beast as far as itemization in
[09:47] an MMO I mean we're on like orders of
[09:49] magnitude more yeah than other MMOs so
[09:51] you know this uh this uh you know 24
[09:54] release is huge uh there's a huge
[09:56] investment uh to get ionization done
[09:59] right with persistence and then of
[10:01] course you know when we're talking about
[10:02] persistence we're talking about account
[10:03] based persistence you know your player
[10:05] your your stuff your ships and things
[10:08] like that but we're going to be growing
[10:09] over time as soon as we have like uh you
[10:12] know instance persistence and you know
[10:14] more of a worldwide persist yeah
[10:16] there'll be there's so much more
[10:18] persistent data coming but the most
[10:19] important right now is to get an
[10:20] itemization for players so when they
[10:23] they're in the game and they acquire
[10:24] items when they change the load out on
[10:25] their ship if that stuff persists
[10:27] between sessions between um build now
[10:31] persistence is something that it's
[10:33] fundamental for every MMO we we talk
[10:36] about it a lot like it's like it's a
[10:37] major thing for us and and and it is but
[10:40] I it is a it's like tires on a car you
[10:43] can't have an MMO without resistance so
[10:46] one of the reasons it's such a big deal
[10:48] for us that we talk about as much is
[10:51] because no other MMO is out at this
[10:54] point in development no other MMO is is
[10:57] publishing you know an alpha
[10:59] prior to the creation of their
[11:02] persistent you know database and and the
[11:04] cash and all these backend systems and
[11:05] what so I mean we hear we hear a lot of
[11:08] chat from the community about you know
[11:10] why is persistence such a big deal and
[11:12] why not it's it's it's a big deal
[11:14] because it is a it is a huge milestone
[11:17] in our development it's something we
[11:18] always knew had to come it's it's
[11:20] something that's been on the road map
[11:21] since the beginning but because we're
[11:24] building this game out in front of
[11:26] people we're building we're allowing
[11:28] them to play it as we build it and
[11:30] whatnot they're experiencing this
[11:32] Milestone that every MMO goes through at
[11:34] some point but they're experiencing it
[11:36] as it happens instead of months and and
[11:39] in most cases years after this Milestone
[11:42] happens in development uh what can you
[11:43] tell us about building persistence while
[11:46] everybody is sitting there
[11:49] watching um well I guess I'll say that
[11:52] it's
[11:54] um it's something that's definitely
[11:56] needed people don't don't realize you
[11:58] know the importance of it it's it's not
[12:00] a sexy feature to promote you know for
[12:03] pr- wise because it's an expected
[12:05] feature it's not like hey we got this
[12:06] great new feature over here it's got a
[12:07] lot of blinging you all are going to
[12:08] love it it's it's more of an expected
[12:10] thing but it takes a huge amount of work
[12:12] and um you know um we had to be very
[12:15] careful on how we brought it into the
[12:17] universe we had to bring it in at the
[12:18] right time we had to make sure a lot of
[12:20] the uh game design was you know the
[12:22] itemization and such was was kind of
[12:23] hammered out and you know it's never
[12:25] 100% you know like we still have a lot
[12:27] of data that's yet to be designed before
[12:30] we can persist it but we had to get the
[12:32] players inventory their ships or
[12:33] entitlements uh you know their pledges
[12:35] and such we had to make sure that
[12:36] there's a lot of things locked down with
[12:38] that before we could even begin a
[12:39] strategy on how how to persist it
[12:42] because there's a lot more that goes on
[12:44] behind the scenes especially with this
[12:46] game considering that we have you know
[12:47] your average players going to have
[12:48] thousands upon thousands of items rather
[12:50] than hundreds has NE MMOs um we had to
[12:53] take uh very specific approaches and
[12:55] tailor the data in such a way to where
[12:58] we can't we don't get into situations
[13:00] where we're bogged down we have
[13:02] throughput issues and such like that so
[13:04] it's a it's definitely an all Hands-On
[13:06] de feature because uh you know not only
[13:08] do the server programmers have the
[13:10] backend uh to to manage all this data um
[13:14] you know for you know potentially 50 to
[13:16] 250 you know thousand current players
[13:19] and just managing all this data and
[13:20] stuff and with our caching
[13:22] Services um but you know you got the
[13:25] gameplay guys you got the UI team you
[13:27] know that have to you know have visual
[13:28] display plays inside the game so that
[13:30] you can manipulate uh the different
[13:32] items and move them around and stuff and
[13:35] uh get those uh you know changes you
[13:36] know taking place pushing back up to the
[13:38] persistent cach service and then we got
[13:40] these old Delta timers actually right to
[13:42] the database you know we've got uh you
[13:45] know these these middle tiers business
[13:47] tiers you know to to manage you know the
[13:49] items uh so that we have complete
[13:51] control of when rides to the database if
[13:54] we didn't have those middle tiers and
[13:55] you know oh my God we would we would
[13:57] blow the database driver out water with
[13:59] all these you know transactions coming
[14:01] through right we have to have you know
[14:02] these different tiers because um one
[14:05] particular game server with may have
[14:07] like 30 people or 20 people on it
[14:09] whatever and a lot of items are changing
[14:10] and being sent to the caching layer um
[14:13] which holds the data for certain amount
[14:15] of time and then we'll write to the
[14:16] database in a controlled in a controlled
[14:18] manner but when we have a 100 game
[14:20] servers you know that that becomes more
[14:22] problem so we have to have multiple
[14:23] layers of throttling and caching in
[14:26] order to um um have complete control
[14:29] over the rate at which data comes into
[14:31] the system and into the backend system
[14:33] and and into the database in a way to
[14:35] where we don't kill the database and
[14:38] plus the auditing uh tools you know so
[14:40] that customer uh support and uh you know
[14:42] QA and all that stuff you know for every
[14:44] item in the game you know we can get a
[14:46] history of where it was at any given
[14:48] time when it got traded when it got sold
[14:50] to a vendor when it was purchased or you
[14:52] know deleted from the website and got
[14:53] resync you know with the universe you
[14:55] know cluster things like that so there's
[14:57] a lot of command and control Tools in
[14:58] place is to you know manage items so now
[15:02] Ahmed you talked a bit about uh building
[15:04] MMO in the cloud and how that's
[15:07] different than uh talk talk to us about
[15:10] what what makes Star Citizen in the
[15:12] cloud such a unique thing
[15:15] so not not to get too much back when
[15:19] when when the cloud movement started
[15:21] people said it's not for everyone you
[15:23] cannot just take your app and put in the
[15:25] cloud in a VM because it doesn't matter
[15:27] whether you have it in a very have it in
[15:29] a VM in a small kind of hosal Provider
[15:32] to be in one of the big public clouds
[15:35] you have to use the other abstraction
[15:37] layers that the cloud provides to you
[15:39] the cloud provides to you object storage
[15:41] block storage that can move between VMS
[15:43] VMS can be migrated different concepts
[15:46] of firewall different concept of vbn and
[15:48] everything is offered to you as a
[15:49] service that's a lot of good work
[15:51] happening for you saving you and your
[15:53] team from doing all this tedious work
[15:56] that's technically inventing the wheel
[15:58] however
[15:59] you are relying
[16:01] on uh resources shared among other
[16:05] people so every single public CL
[16:07] provider tells you you got to design for
[16:09] failure expect me to go down at any
[16:11] moment expect this to happen expect this
[16:14] to change and the statelessness so in
[16:18] web websites most of the time people
[16:20] will try to obtain what we call like
[16:21] there's no State get within the firal
[16:26] resource that might diet any moment and
[16:28] I have the state saved outside in
[16:30] redundant form and can be accessed in
[16:32] different ways which is the the basic
[16:35] concept of distribute systems having
[16:38] this in the web is like being a first
[16:41] class citizen in a country that talks
[16:43] your language everyone does this and you
[16:45] look at everyone other Playbook and
[16:47] steal a game from him and just do it and
[16:50] people go thre him towards that games
[16:52] are the complete opposite they are very
[16:55] very stateful an MMO is extremely
[16:57] stateful it's not even match based it's
[16:59] not session based so you expect that you
[17:02] leave your machine running for 24 hours
[17:03] if you can hold standing out for 24
[17:06] hours playing and you want this to
[17:07] happen and also you're not going to
[17:09] tolerate having a 404 or 5002 that you
[17:12] see in the website in the middle of that
[17:13] huge epic game where you get like your
[17:15] amazing Lo whatever you are looking for
[17:18] so given this sort of a stability in the
[17:20] cloud is not really easy and dealing
[17:23] with the cloud quirks because yeah the
[17:25] cloud does a lot of good work for me but
[17:26] also takes a lot of control out of my
[17:28] hand I could oh I could have made this
[17:30] thing worked that thing in this way and
[17:32] stopped the password here and only
[17:34] replicated this half and I can't I'm
[17:36] using whatever the struction layer the
[17:38] club provider provided me and the tools
[17:40] I'm using just like anyone else so the
[17:42] challenge is MMO games are an alien in
[17:46] the cloud while all the web technology
[17:50] are the first class citizen so be being
[17:53] this kind of alien that no one else is
[17:55] doing what we so we have been watching a
[17:57] lot of companies when Z go and talk with
[18:00] with other tools other conferences
[18:02] talking about their Cloud adaptation not
[18:04] a lot of people really manage to have
[18:06] the simulator which is the dedicated
[18:08] game server in the cloud efficiently
[18:10] having everything working fine and
[18:12] that's the challenge there are people
[18:15] that did what I mentioned in the
[18:16] beginning they took their original data
[18:18] center bare metal infrastructure and
[18:21] carried it and put it in the cloud on
[18:23] DMS and it's the same exact way that's
[18:25] not what we're trying to do and it's a
[18:27] challenge because as I mentioned and uh
[18:29] to get a tiny bit technical if if you
[18:31] want to use a new tool too late too
[18:34] late if you want to use a new tool in
[18:36] the cloud or a new service in the cloud
[18:38] and you you C in a modern language and
[18:41] your use case is just create like a CR
[18:44] something that you create to remove
[18:45] records and all of that you would find
[18:47] an example within five minutes and
[18:48] you'll look at it and you just saved
[18:50] your yourself a lot of time and then
[18:52] move from there using a C++ using a game
[18:55] that's a
[18:56] different like thing to deal way now
[19:00] you're talking about challenges uh we
[19:03] have some plans in place to address
[19:04] these challenges uh some some of them
[19:07] we're we're not quite ready to talk
[19:09] about yet um certain reveals of certain
[19:12] things we like to leave to Chris and
[19:14] what to to talk about when when the time
[19:15] comes but uh in the in the broadest
[19:18] sense in the stuff that's not going to
[19:20] get us in trouble tonight uh what can
[19:22] you what can you tell us about uh how
[19:24] we're facing those challenges yes so the
[19:28] way we look at it we want to implement
[19:30] what's currently being known as the
[19:33] event driven data center how to have so
[19:36] the more I provide what we call
[19:39] sometimes fluid resources the games that
[19:42] they can move I deployment time like
[19:46] they call these Main buzzwords in our
[19:48] business devops the time to Market how
[19:50] fast would it be for me to scale a game
[19:52] server for you how how easy would me to
[19:55] retain resources I not need how can I
[19:57] repurpose resource es uh because the
[20:00] cloud is mostly a utility computing you
[20:03] pay for what you use M uh and that's a
[20:05] completely different approach then you
[20:06] own your data center and built it and
[20:08] now these stuff are yours and then he
[20:10] use it you not use it that's different
[20:11] story so we back to my original idea I
[20:15] was talking about we we want to
[20:17] implement the event driven data center
[20:19] that every piece of of of software that
[20:22] goes through a major event that the
[20:24] infrastructure should know about would
[20:26] find an event through a a a wide channel
[20:29] of info buses that have reactors
[20:31] reacting to it and acting upon it that's
[20:33] that's the big picture so and we can
[20:36] orchestrate this the way we want because
[20:38] orchestration is is the is the word here
[20:40] that's that's what you need to know you
[20:41] need to make all the all the logic that
[20:44] all that Jason and Tom and the gameplay
[20:47] guys are writing react or like report
[20:51] what it needs and my infrastructure
[20:53] reacts to it whether by expanding by
[20:55] replacing by oh that's that's that's a
[20:58] bad
[20:59] uh member of our cluster we should take
[21:02] should take that oh no this is not going
[21:04] to get Auto healed or self healed we got
[21:06] to walk Amad up THS up that's the plan
[21:10] uh move to that
[21:12] and uh the way we usually do it in div
[21:16] Ops and even in backend Services shops
[21:18] you cannot really sit in a room and get
[21:20] this amazing big white paper and draw
[21:23] everything it's impossible you will
[21:25] definitely have bad designs so we go
[21:27] through the MVB like the minimum value
[21:29] product okay this this will deliver my
[21:31] idea I'm going to scale right now or I'm
[21:33] going to make the players get in the
[21:35] game and watch because maybe there might
[21:37] be a new feature I'm not really putting
[21:38] in my mind or maybe it's it's the same
[21:41] concept that all the successful startups
[21:42] followed like how Facebook believe that
[21:44] you should move fast and break things
[21:46] however you until you go out the market
[21:48] the market correct you that's also goes
[21:50] really correct your point in the
[21:52] beginning about persistence if we laid
[21:54] out persistence before seeing the game
[21:56] itself and came the game with a get
[21:58] going we'll be just going breaking walls
[22:01] and moving around them while right now
[22:02] we are more mature we can start from a
[22:04] point where we understand this this is
[22:06] what the game looks like the game
[22:08] designers had their time this discussed
[22:10] some ideas bounce it back and forth it
[22:12] the implementation is going to be a lot
[22:14] easier when you have something to test
[22:16] way at one point we didn't even have any
[22:18] of the game data design we nobody knew
[22:21] what we had to persist for example so we
[22:23] had actually go through several meetings
[22:25] and to figure out what are we going to
[22:27] persist and how are we going to do it y
[22:29] i i remember those meetings sitting
[22:30] there like no he go the players have
[22:32] this and the players have this and and
[22:34] this needs to sit up with turbulent and
[22:35] this needs this this needs to be P
[22:37] pulled down and and live in the universe
[22:39] so oh yeah and there's a lot of
[22:40] transitioning on ownership and
[22:42] communication of all that data yeah I
[22:45] mean that's still evolving today
[22:46] absolutely I mean there's still game
[22:48] systems Yet to Come online that will
[22:49] have to be integrated into persistence
[22:51] as it goes um we're going to get to the
[22:53] we're GNA get to your subscriber
[22:54] questions in just a minute I want to ask
[22:56] uh Jason and Tom one more question uh
[22:58] follow up on you were talking about the
[23:00] scale of the game and how the scale of
[23:03] Star Citizen dwarfs things that you'd
[23:05] worked on before uh talk to us a little
[23:07] bit about the scale of Star Citizen we
[23:10] can start with
[23:12] itemization um like a game like World of
[23:14] Warcraft for example you can have on the
[23:17] you can have hundreds of items on the
[23:19] character and that seems like a lot yeah
[23:21] a lot of items to keep track of and so
[23:23] on and store in your inventory or in
[23:24] your bank and so on where in Star
[23:26] Citizen just with your ships you know
[23:29] the things that you buy on the website
[23:30] right now you are already in the
[23:32] thousands and you can easily have
[23:34] players with uh you know we're going to
[23:36] have north of 50,000 items and
[23:38] associated with one player um that's a
[23:41] scale that I've never had to deal with
[23:43] before but it's um you know it's
[23:45] something that we're you know we've been
[23:47] able to put a lot of thought into and
[23:49] figure out the best way to deal with it
[23:50] and you know and it's still going to
[23:51] evolve because you know at some point if
[23:53] we you know have a million online at one
[23:55] time that's a 50,000 per player that's a
[23:57] lot of data to move around
[23:59] so so you know before persistence you
[24:02] know our our architecture was very
[24:04] firstperson shooter like um you know
[24:06] coming from Sony uh the initial server
[24:09] cluster kind of looked like you know uh
[24:11] some of the models that we had over at
[24:13] Sony um you know where we had 250,000
[24:16] concurrent uh with the simulators um you
[24:19] know with that type of framework uh we
[24:21] know where to scale horizontal if we
[24:23] break from 250 to a million uh we know
[24:26] what we need to Federate next so um
[24:29] taking those principles uh for from
[24:31] selling and applying to cig um you know
[24:34] we can we can most likely hit those same
[24:36] numbers but once you add persistence
[24:39] then we have to you know go back to the
[24:40] drawing board and you know figure figure
[24:42] out where the bottlenecks are going to
[24:43] be what services are need to get
[24:45] Federated you know horizontally and
[24:47] things like that so yeah yeah like we've
[24:49] uh we we're writing all of our um
[24:51] services and C+ plus just for the
[24:53] performance and um we can you know any
[24:57] any given service can handle
[24:59] a large number of players and a large
[25:01] amount of data passing through it um so
[25:04] one of the ways we're going to scale
[25:05] like Thomas saying horizontally is we
[25:06] have to there's two things to consider
[25:08] there's you know we have to uh load
[25:10] balancing and then um availability so we
[25:13] have to make sure that if any service
[25:15] goes down that you know there's
[25:17] something else there another one there
[25:18] to pick it up or whatever that there
[25:20] that the service that that that this the
[25:22] service is always available no matter no
[25:25] matter what so we'll have multiple
[25:26] instances of a particular service up at
[25:28] any given time and if one goes down
[25:30] there's another one available and so on
[25:32] the load balancing aspect would be um
[25:34] just to distribute
[25:37] Pro nope across multiple instances of a
[25:40] particular service definitely want to
[25:42] apply the uh the the mega server um you
[25:45] know methodologies you know where you
[25:47] have a single login and just like a
[25:49] single universe that you um are in where
[25:52] you can play with anybody around the
[25:54] world rather than fragmenting up uh you
[25:56] know the player base on a ser server
[25:58] basis that once you lock into a server
[26:00] that's it you know you can only interact
[26:02] with those people so we're trying to you
[26:04] know design that upfront um so with the
[26:06] mega server uh architecture in mind for
[26:09] both uh you know persistence and you
[26:11] know the regular matchmaking and uh
[26:13] persistent Universe uh Concepts yeah and
[26:16] the the services themselves right now
[26:18] like players and objects have a location
[26:21] so we already view them as a location in
[26:23] one universe and there's you know other
[26:25] technical issues that have to be
[26:26] addressed with the game servers and and
[26:28] interaction in the instances and stuff
[26:30] like that to um to really make the
[26:32] players feel like they are in that one
[26:33] large universe but we've already been
[26:35] we've already been fighting that battle
[26:36] on on on the back end and uh you used a
[26:40] buzz word just a few minutes ago and I
[26:41] can already tell the questions are
[26:42] coming in what's a mega
[26:44] server um one giant world it's
[26:47] essentially a collection of servers of
[26:49] services working together to give the
[26:50] perception of one world one server right
[26:54] rather than like World of Warcraft you
[26:56] know we got a list of like 250 servers
[26:58] that you know once you join you know
[27:00] you're locked into that yeah and this is
[27:02] pretty interesting it's an interesting
[27:03] challenge because we have to not only
[27:04] deal with us players we have to uh you
[27:07] know consider people in Europe and in
[27:08] Asia and South America and so on so we
[27:11] Australia don't leave Australia out I'll
[27:13] I said don't leave Australia out I'll
[27:14] get post oh Australia
[27:18] yeah it's it's a global Mega server so
[27:21] we have to make sure that the players
[27:23] feel that you know they are there and
[27:26] that they that they can play with their
[27:27] us friends they can play with their
[27:28] European friends whomever you know then
[27:30] it feels like your next door you know
[27:33] you're not transitioning into another
[27:34] realm type of thing gotta all right guys
[27:38] so we'll start taking questions from our
[27:40] subscribers uh again subscribers uh if
[27:42] you wish to ask a question of uh Ahmed
[27:44] Tom or Jason you can type your question
[27:47] into the subscriber chat on the RSI
[27:50] website uh please preface your question
[27:52] with the word question surrounded by
[27:53] brackets uh it'll help me pick it out
[27:55] through the uh through the chat we are
[27:57] not taking question from either twitch
[27:59] chat or the regular General chat on our
[28:01] website strictly through the subscriber
[28:03] chat uh first question up is from China
[28:06] shop Rodeo he wants to know have you
[28:08] ever had a typo break everything uh
[28:12] similar to inst instances where DNS
[28:14] configurations have brought down the
[28:15] cloud uh to Chrome pointing entire
[28:18] workflow workflows to some other
[28:21] website I did have one of these none of
[28:24] us never had one of these yeah one time
[28:26] so the the way we deploy our environment
[28:29] is very well known in the cloud and the
[28:31] devops industry by the word green blue
[28:34] deployments that we would have a full
[28:36] environment running whether it's BTU or
[28:38] Live players can see it and then we St
[28:40] we stage a shadow environment complete
[28:42] full and then at the moment we just
[28:44] switched the little balance from the BL
[28:45] it moved so um I can't remember was it
[28:48] 22 I can't remember it was and I had to
[28:51] edit very very large file with a lot of
[28:53] different I mean we are an alpha project
[28:56] so sometimes we broke our own rules and
[28:59] you would I'm gonna test it right before
[29:01] I do it yeah yeah we have no time um the
[29:04] thing that we have in they Ops and I
[29:06] think we have an Austin we deliver
[29:08] whatever the company needs to be
[29:09] delivered as quick as possible and when
[29:12] never it needed to be delivered so yeah
[29:14] it was one of these things where you
[29:15] hack something really quick and I have
[29:17] an extra space in a URL that goes for a
[29:21] platform Avis uh in a very gigantic
[29:24] dictionary that will generate a lot of
[29:26] configuration that will go to the
[29:28] services and this space led to issue
[29:31] with authentication so QA was testing
[29:33] trying to get in and nothing is working
[29:35] and it it took a while that the edor
[29:37] message wasn't very very clear so yeah
[29:39] the these things always happen but the
[29:41] good thing is we did not do it in
[29:43] production production we had it in the
[29:45] staging one so we get to fix it and see
[29:47] it and I'm sure like every person
[29:49] running a live production servers all
[29:52] the time get to see some of these human
[29:54] errors
[29:55] yeah all right uh jiru has a question he
[29:58] wants to know if you use common
[30:00] framework like Springs or struts on the
[30:02] back
[30:04] end uh if I remember right spring and
[30:08] struts uh you know was a you know Java
[30:10] jav J2 framework uh our our universe
[30:14] cluster is primarily C++ uh with some
[30:17] thirdparty libraries uh that we
[30:19] customize but uh the web platform on the
[30:21] otherand do use a lot of web- based you
[30:24] know Technologies and stuff so okay uh
[30:28] catastrophe
[30:29] disastrophe a combination of disaster
[30:31] and catastrophe
[30:33] disastrophe good name uh what
[30:35] configuration management tools does the
[30:37] team use to administer configure servers
[30:39] in the cloud also what kind of log
[30:41] analysis management tools are used yeah
[30:44] um I'm not a huge fan of of of focusing
[30:47] on the brands but like yeah we uh we
[30:49] currently use chef and we use bunch of
[30:53] our uh home rou scripts that mainly does
[30:56] the provisioning so I'm gonna try to
[30:58] talk like in
[30:59] a we can bring up we can bring up a
[31:02] graph that would explain a lot of my
[31:04] work and a lot of what we do what you
[31:06] mean you had a graph ready SC and I
[31:09] picked this question just for this what
[31:12] we didn't rehearse this and pull up this
[31:16] all right yeah
[31:19] that's so if we start all the way in the
[31:22] right you guys can see Aus that's where
[31:26] everything is being built current build
[31:28] system is based on a build system called
[31:32] buildbot uh it's highly modified uh and
[31:35] customized to our own needs the way it
[31:37] schedules uh and and manage the Fanning
[31:40] in fanning out all dependency everything
[31:42] in the in the build system is is custom
[31:44] made for us so the outcome from the
[31:46] build system will be a build which is
[31:49] all the binaries needed to run the
[31:50] client to run the server under the back
[31:52] end services and a bunch of other files
[31:54] they get uploaded to object storage in
[31:56] the cloud as you can see still on eyy
[31:59] and from there now we have the build we
[32:01] want to deliver it as fast as possible
[32:03] our current cloud provider gives us
[32:07] uh a good Advantage here that we can
[32:10] create an AAL box at this moment and we
[32:14] pull the bill down and we do whatever we
[32:17] want to do in the O at this moment like
[32:20] install packages make sure that we
[32:21] change your limits make make sure that
[32:23] everything is optimized the way you want
[32:25] it and then we create snapshots from
[32:26] both the this prodct takes a few minutes
[32:30] usually 20 minutes 25 minutes it high
[32:32] depends on the when link content I mean
[32:35] how who's fighting with me over
[32:37] uploading something it could be me too
[32:38] uploading somewhere else so yeah this is
[32:40] mainly like internet speed kind of limit
[32:43] and
[32:44] then we get the snapshot the snapshot
[32:46] can create desks and these desks can be
[32:48] shared across the whole cluster so if we
[32:50] scroll back up again now you understand
[32:52] that the build existed in the snapshot
[32:54] you as a player sitting here that's your
[32:56] game client you start your launcher
[32:59] Batcher and your launcher Bacher would
[33:00] go grab the build for you from the CDN
[33:03] the CDN or the contact delivery network
[33:06] is bunch of uh endpoints uh globally
[33:10] distributed trying to deliver you as
[33:12] fast as possible the files that you need
[33:15] and you pull them down in your game
[33:16] client now you have the Bild the Bild
[33:17] needs to connect so you you would have
[33:20] some connection between you and the Hub
[33:23] low balancer that takes you to the hub
[33:25] servers all of them these so you have
[33:28] bunch of different Hub servers that
[33:29] handle your connection you go there over
[33:31] TCP The Hub servers go to the platform
[33:33] make sure that you are the guy who you
[33:36] claim you are and you have a connection
[33:38] with the platform from here the Hub
[33:40] service will take your traffic to most
[33:42] of the services that Tom and Jason did
[33:46] here in the core server they live in a
[33:49] single box and and we can say why they
[33:50] live in a single box for now and one of
[33:53] them is the persistence Services we have
[33:55] two main Services persistence cach and
[33:57] persistance service itself as they
[33:59] connect to our mySQL database clusters
[34:03] that has Masters and slaves and back
[34:05] having all these schol stuff and here
[34:07] you set all you dedicated Game servers
[34:09] and different game servers all these
[34:12] boxes I
[34:13] drawn uh represent an environment any
[34:16] Cloud environment right now in Cloud
[34:18] andum games has to be three different
[34:21] VMS with three different types of rules
[34:23] one of them for the Hub one of them for
[34:25] all the core services and one of them
[34:27] for the game game server this is not any
[34:30] way near final that's what we need now
[34:32] to get everything running and see how we
[34:34] want to scale and change of stuff uh the
[34:38] difference between environment between
[34:39] QA BTU on live QA is one one one BTU is
[34:44] multiple of these one of these multiple
[34:46] of these live is much
[34:48] larger uh the question that he asked
[34:51] also relates to these bunch of servers
[34:53] we have our infrastructure servers we
[34:55] have log aggregation systems we have
[34:56] monitoring systems tools for diff
[34:58] support and tools for analytics uh we
[35:01] use Chef here we use bunch of home RO
[35:04] scripts here and over here we have a
[35:07] Splunk we have uh a graphite graph
[35:12] statsd uh we have a stack driver uh we
[35:16] have bunch of uh uh core dump like
[35:19] analysis to look like we have bunch of
[35:21] servers have GDB server for developers
[35:23] to look at we have some stuff related to
[35:25] Google break I I I want not like I know
[35:28] that we have a lot of backers who came
[35:30] from technical background and as H posts
[35:32] so I'm trying to keep imbalance where
[35:34] like I use a lot of technical jar and
[35:35] then I go back to something high level
[35:37] so yeah this is not any weird final
[35:40] actually right now if I mentioned that
[35:42] we are working on a new deployment by
[35:43] line that would be the way that been
[35:46] driven the center I was talking about or
[35:47] the scaling in and out or like out yeah
[35:50] in and out would would be like easy and
[35:53] and usable under heavy load all right
[35:56] turn this off very cool let's get you
[35:59] back on
[36:03] screen wrong
[36:05] buttons all right so thank you for
[36:08] having that graph all all set up
[36:11] on uh our next question is a is a very
[36:15] uh popular question about patch
[36:18] reduction sizes uh what can uh Ean
[36:20] Dragon wants to know if you can Pro uh
[36:22] what Insight you can provide as to the
[36:24] progress of uh patch reduction the the
[36:28] uh the system that checks and and sends
[36:30] you only the files that you need instead
[36:32] of everything else I want what can you
[36:34] tell us about that system yeah that this
[36:36] project is running lots of caffeine lots
[36:39] of people across the world this is one
[36:41] of the biggest projects that we have and
[36:43] it involves people from so many
[36:45] different uh departments we have people
[36:47] from Devas we have people from it people
[36:49] from engine programmers people in the
[36:51] platform everyone is working together to
[36:54] have our own Bacher and I also like the
[36:57] launcher system or the new Bach delivery
[36:59] system is not going to only affect the
[37:01] players it's going to affect even our
[37:03] internal developers the way that they
[37:05] deliver receive their own builds
[37:07] actually our internal developer has kind
[37:11] of an educ case the real to the player
[37:13] outside in the world because you pull a
[37:14] lot of builds all the time so yeah work
[37:18] work work is running I see I see all
[37:20] that the that change list coming in and
[37:22] out I see all the commits happening we
[37:24] get to have meetings every now and then
[37:26] to make sure that we are all still have
[37:27] the same features that we require from
[37:29] from the from the whole system it it's
[37:32] going to be awesome I mean our
[37:34] our so we feel really bad that when we
[37:37] deliver three builds for you guys in one
[37:39] single day you can only play the last
[37:41] one because you by the time you finish
[37:43] the first one and we want to give you
[37:45] this seamless kind like I'm a devops guy
[37:47] and I live for the world that that has
[37:49] my TSA on all what I care about is
[37:51] giving you the content that ready for
[37:53] you as fast as possible so having a
[37:55] smaller batch is a key for all of us MH
[37:58] yeah it's been working yeah it's one of
[37:59] those challenges again because we're
[38:01] operating a live environment at such an
[38:03] early point in our development you know
[38:05] any other game would have you know
[38:07] persistence would be in the the this
[38:09] this low-level patching system would be
[38:11] in all this stuff would be in before
[38:12] they even started their first Alpha so
[38:15] um and and uh it's it's Mike is it Mike
[38:18] picket who's working on that you yes
[38:20] Mike picket Mike picket was one of the
[38:22] very first people that was talking about
[38:24] this issue having his own design on it
[38:27] at I like it extends it extends to a lot
[38:29] of people because that that the way we
[38:31] are looking at it to do everything right
[38:34] you have to have this system native and
[38:37] all the end points that need to use it
[38:39] so every part should be aware of it to
[38:41] deliver this kind of experience we like
[38:43] I'm downloading now the game is playable
[38:45] then it can be a complete all these fun
[38:49] amazing good stuff need to be done and
[38:51] the scale always the scale is the key
[38:54] that you need to do this right you need
[38:56] to do this that
[38:58] that's not an NG game I mean we we are
[39:00] yeah it's a startup but we understand
[39:02] how big our community is so when we
[39:04] build a foundation technology like this
[39:07] we need to look at all edge cases make
[39:09] sure everything will work even if we
[39:10] have 1 million people downloading right
[39:12] now because we don't not really want to
[39:14] be the ones that have our own success
[39:16] our our game is very successful by it is
[39:18] right now and we are here just to serve
[39:20] the
[39:21] success gotta yeah it's it's I wanted to
[39:24] show throw a shout out to Mike you know
[39:26] we have a very large team uh with our
[39:28] video content Community only in one
[39:30] place and so now in two places now we
[39:32] have Austin uh we only get to Showcase a
[39:34] select few number of faces you know week
[39:36] in week out but we have we have a a huge
[39:38] team of people working on just about
[39:40] every aspect of this game so we like to
[39:43] like to give shout outs wherever
[39:44] possible so Mike good work I've never
[39:47] met you I've never even talked to you
[39:48] but I know your name and I know your
[39:50] work I know your working your butt off y
[39:53] so uh so thanks Mike all right what else
[39:56] do we got here um we have a we put up a
[39:59] thread over the weekend to collect some
[40:01] questions early um there was one that we
[40:05] have to ask where was
[40:08] it uh something about Ahmed being
[40:12] awesome I can't find it yeah there it
[40:15] goes C droma asked this question
[40:16] specifically for Amed why are you so
[40:19] amazing um it's the glasses I don't know
[40:24] uh Laura turnis asks what color network
[40:26] cable is is your Nemesis he says his his
[40:30] he hates the light purple ones he hates
[40:31] the light purple Network caes he brings
[40:34] up good memories like dealing with with
[40:36] stuff that I can touch with my hands
[40:38] like stopped a while ago like a few
[40:40] years ago when we had the to wire cables
[40:42] and remember which wiring and what
[40:43] colors we hit yeah that that's how we
[40:46] start nowadays we forget about all these
[40:48] stuff and that's the beauty of the cloud
[40:50] we tell us stuff to happen and they
[40:53] happen you don't all always happen the
[40:55] right way and that's our job to make
[40:56] sure always come out the right way uh
[40:59] but yeah I don't know I can't remember I
[41:02] didn't I didn't wire a network cable for
[41:04] a while I didn't touch an
[41:06] rg55 this for a yes no I I I I ran my
[41:09] own IT company for a number of years and
[41:11] and absolutely whenever possible I got I
[41:14] got some intern or somebody to wire my
[41:16] cables cuz I I just getting down into
[41:19] the nitty-gritty and then remember try
[41:20] to try you you do a on one end and then
[41:23] B on the other one you're like what the
[41:24] heck was you know you start questioning
[41:26] you start thinking
[41:27] moment happened after 20 actually this
[41:30] this bringed up that that talk about the
[41:32] cable a few years ago none of us would
[41:34] have imagined that was one single person
[41:37] that you'll be running 1500 cores that's
[41:39] the beauty of the cloud because we're
[41:40] talking about the cloud a lot when two
[41:42] went up I'm not going to talk about
[41:43] concurrency but there was a lot of cours
[41:46] running under Star Citizen name at our
[41:48] club provider and having this over seen
[41:51] by one or two people is is how cool it
[41:54] is that we don't really need to worry
[41:55] about the cables the TRS all these stuff
[41:59] at this
[42:00] phase uh Daz asks a question that we're
[42:04] not going to answer but I want to ask it
[42:06] uh to to explain why we're not going to
[42:07] answer it because this type of question
[42:09] comes up quite often Dez asks hey guys
[42:11] in some M MMOs bought armies that set
[42:13] out to grind currency become an issue
[42:15] what is being done to prevent exploits
[42:17] farming from being an issue um whe we
[42:21] get asked a lot what we're going to do
[42:22] to prevent cheating and stuff like that
[42:24] uh we don't answer those questions
[42:26] because we don't want the bad guys to
[42:28] know what we're doing so I it's I I I
[42:32] understand why the good guys would want
[42:33] to know uh what what the things that
[42:35] we're doing the details and how we're
[42:37] going to go about it it's just one of
[42:38] those uh catch 22s where when we the
[42:41] more info on those things that we put
[42:43] out the more info the bad guys have to
[42:46] circumvent so just know that Jason's got
[42:49] a lot of tricks up his seve if you know
[42:51] based on his experience and so the best
[42:53] thing to do you don't answer the
[42:54] question but you make them you know you
[42:56] make sure that they know we're watching
[42:57] we know what they're going to do and
[42:59] make them paranoid so we will catch them
[43:02] yep we know who you are Robert oh yeah
[43:05] command and control command and
[43:07] control
[43:10] um uh we hear a lot about uh client
[43:14] frame rate and server frame rate yeah is
[43:17] that something you can speak about what
[43:19] what what dictates a server frame rate
[43:20] and how that can affect I can so there
[43:24] there's not a clear luck point I mean
[43:26] that that's that's not my area of
[43:28] ownership of work that's the area I'm
[43:30] like very first close neighbor to I do
[43:34] believe that we have a very very
[43:36] specific lock step but this is what
[43:38] locks the client right right like the
[43:41] client frame rate is usually the rate at
[43:42] which you're refreshing your your your
[43:45] the graphics and so on so um on the
[43:47] server side on the dgs we call it the
[43:49] dgs um that's the simulation rate and
[43:52] they're they're not locked together so
[43:55] okay all we can yeah absolutely and I
[43:57] know a lot of players are concerned with
[43:59] the FPS and uh I I was planning I first
[44:03] of all I want to ask every single person
[44:05] who plays BTU and all the amazing people
[44:07] who play avocati and the great people
[44:10] that I woke up during the night is like
[44:11] hey I have a new combination I wanted to
[44:13] stay and people calling each other and
[44:15] coming online this is amazing I haven't
[44:17] seen anything I can imagine this even
[44:19] possible in my interview a year and a
[44:21] few months ago I was asking ah two you
[44:23] guys teaching me about games how do you
[44:24] guys just test it's like us people it's
[44:26] like what do you mean it's like our our
[44:28] Gamers our players are awesome I can't
[44:31] believe that we'll be able like I have a
[44:33] new case I want to test it so like you
[44:35] will see it will happen in a few minutes
[44:36] you just say you want to test that
[44:37] you'll find people coming from nowhere
[44:39] so uh uh all what you guys we try to do
[44:42] at BTU is defining pain points that
[44:46] should be addressed uh optimization is
[44:49] is a deep rabbit hole that you need
[44:51] always to be worried about reatur
[44:53] optimization so but also we have a
[44:56] product out in the market that you guys
[44:57] are playing want to make it blable and
[44:58] fun so all what I'm trying to Aid myself
[45:03] and my team with the guys working in
[45:05] Frankfurt and guys work in the UK and
[45:06] over here in LA to try to point them as
[45:09] much as we can to that main pinpoint
[45:11] like oh if you spend sometime in this we
[45:13] might get some Advantage yeah but what
[45:16] we have right now is nowhere near to
[45:17] what we would deliver we have so many
[45:19] checks in our bags that we know it's not
[45:22] the right time for us to like battle
[45:24] test them but we really need to care
[45:26] about like yeah you guys were suffering
[45:28] that much and we enhanced it 10% 5% 7%
[45:31] yeah it's still livable and we still
[45:33] having an eye on what's going on and
[45:35] also sometimes we are not willing to
[45:37] enhance anything right now but we want
[45:38] to see did did did our new cuder logic
[45:42] or or complexity taxed us a lot did it
[45:44] became very expensive or not so thank
[45:47] you so much guys for all the amazing
[45:48] work you do testing BTU yeah there's a
[45:51] rad Telemetry profiles being generated
[45:53] all the time and that gets uh you know
[45:56] disseminated too you the teams
[45:57] appropriately and stuff so people will
[45:59] have on their radar what is most
[46:01] expensive on on the game servers as well
[46:03] as the client stuff and you know just
[46:06] you know tackle it at the right time but
[46:08] there's just so many features going into
[46:09] the game it's you know like I say pre
[46:11] premature optimization and stuff once
[46:13] you start doing uh optimizing code you
[46:16] know it looks a little different than
[46:17] normal and you don't want to come over
[46:19] and say hi right and there's a wide
[46:21] range of things that we can optimize I
[46:23] mean uh from the client side you're
[46:25] going to have you know things from
[46:26] render ing uh you're going to have a
[46:28] client side simulation and also you're
[46:30] going to have Network latency then on
[46:31] the back end there's you know there's
[46:33] all the physics and all the other things
[46:35] that happen there uh then there's also
[46:37] things that um where the game servers
[46:38] May rely on responses from the the the
[46:41] the services and so there's a a wide
[46:43] number so we don't want to pre- optimize
[46:45] now but when we start you know and we do
[46:47] and we we optimize certain things over
[46:49] time the low hanging fruit and such like
[46:50] that but um you know there's so many
[46:52] different departments that are going to
[46:55] you know focus on their little areas but
[46:56] we have to focus on them at the right
[46:58] time like you know we pre-optimized now
[46:59] we could end up paying ourselves in the
[47:01] corner later exactly there's probably I
[47:03] mean there's probably nothing more
[47:04] important in game development than
[47:06] prioritization I mean we talk about the
[47:08] size of our team and our team is massive
[47:10] but it's still finite there's only so
[47:13] many things they can work on at any
[47:14] given time and and when you know when
[47:16] when you know something is temporary
[47:19] when you know something is is is meant
[47:21] to hold us over to get us to the new
[47:23] system that's coming down you know in a
[47:25] later patch one you don't want to spend
[47:26] spend you know too much time optimizing
[47:29] or or working on the system that you
[47:31] know is temporary and you're going to
[47:32] replace so it's a constant Balancing Act
[47:35] between all the I I it's always that the
[47:37] picture we the thing we always use was
[47:39] the guy that was spinning plates you
[47:40] know all different poles when's spinning
[47:42] a bunch of plates on top of top of the
[47:44] 10 different poles so when whenever we
[47:46] were spinning up servers we used to call
[47:49] them spinning spinning up plates SP disc
[47:52] and stuff like that uh let's see um the
[47:55] jabber walk has a question he says says
[47:57] will the website be hosted served from
[47:59] the same servers as the game or will
[48:00] they just access the same back-end
[48:03] database um the back the website and the
[48:06] backend services are about to have a
[48:07] very close relationshipi prior to this
[48:09] um it's pretty much a they it's always
[48:12] been us you know the the services and
[48:15] platform um but we're now coming
[48:17] together so um we can we would the
[48:19] services will look at them as another
[48:21] service and they look at us as part of
[48:23] their own system so we're kind of we're
[48:24] getting married
[48:27] we're using a rful apis right now which
[48:29] works on the internet but we're
[48:31] co-located now so we're going to have
[48:32] dedicated channel so we get B
[48:34] directional communication yeah we'll
[48:35] have a set of services that have uh you
[48:37] know stateful high-speed communication
[48:39] mechanisms to the platform and um you
[48:43] know we've been working with them on on
[48:44] how to architect both sides to uh um
[48:47] make that as streamless as possible yeah
[48:48] make the data the the response and the
[48:50] data and so because and I'll use an
[48:52] example right now when you buy an
[48:54] entitlement or you you you purchase a
[48:56] ship on on on the website um it there's
[49:00] no way for platform to tell us that you
[49:02] purchase the ship so when you log in we
[49:04] grab your package which contains all the
[49:06] items that you all the ships that you
[49:08] purchase and so on and then we know
[49:09] about it and then we can you know create
[49:10] the actual and gain items and persist
[49:12] them um but with the highp speed the the
[49:15] new this new highspeed Communication
[49:18] System um the moment you buy a ship they
[49:20] will notify us we can expand the ship
[49:22] immediately and have it ready for you by
[49:24] the time you log in the game and when it
[49:25] comes to Community Based Fe features you
[49:27] know like statistics and achievements
[49:29] and and things like that a lot of those
[49:31] a lot of those uh features really are
[49:33] best imple implemented with like a web-
[49:35] based technology um and then just if we
[49:38] have a a direct line communication we
[49:40] can just you know trigger those things
[49:41] immediately so and we'll be able to call
[49:43] functions from them directly as of you
[49:45] know like as a service and so on and
[49:46] there's an API we provided for them as
[49:49] well so they can uh request any data
[49:51] from us and generate events we can
[49:53] generate events back and forth to each
[49:54] other it's one of that that's what's one
[49:57] of the things that's so awesome about
[49:58] working with a partner like turbulent so
[50:01] are they're awesome yeah it's the first
[50:04] time I uh you know got on a project
[50:05] where the website was done before the
[50:08] game yes and then so much we all think
[50:12] about we all think about solving the
[50:13] problems in the same way so it's it's a
[50:15] very good match and so much of the
[50:16] functionality like ship ownership and
[50:18] and all the stuff it all exists on the
[50:20] website and now we're pulling that down
[50:21] into the game yeah know it's uh it it's
[50:24] great to have that kind of Buy in from a
[50:25] partner because you know when ever
[50:26] you're working with a third party vendor
[50:28] you never quite know exactly what the
[50:30] level of buying is you know this is on
[50:32] any project not just video games and
[50:33] whatever so we're we're continuously
[50:36] very lucky to have Partners like
[50:37] turbulent with the with the level of
[50:39] buying they have so uh Beno I love
[50:42] you I love you all right
[50:45] so uh Captain Steve we we're we're
[50:48] wrapping up here fast run out of time he
[50:50] wants to know what hypervisor do you use
[50:52] in the cloud and also what core
[50:54] operating system do you use to run the
[50:56] game yeah currently we are in GCE Google
[50:59] Cloud engine the hypervisor used over
[51:00] there is their own custom
[51:02] KVM uh I don't believe that the
[51:05] hypervisor that we would use would be I
[51:07] mean yeah there are different way of
[51:09] elation how we abstract the CBU
[51:10] instructions from from the bare mle to
[51:12] the VMS but I don't think we would be
[51:15] having an issue whether we running on
[51:17] Zen and on KV
[51:22] [Music]
[51:26] welcome back twitch uh if you're not a
[51:30] streamer you're probably watching a an
[51:32] ad right now uh basically we had a
[51:34] computer crash here we're at the end of
[51:36] our broadcast anyway so we just came
[51:38] back to say thanks for everybody to for
[51:41] watching and for supporting us and for
[51:43] submitting questions um Ahmed Jason Tom
[51:47] anything you want to say before we let
[51:48] you
[51:49] go we are very thankful for ear your
[51:52] time guys in BTU we're going to have a
[51:54] stress test at 300 p.m. a little bit
[51:57] that would be great to have you guys
[51:58] testing G Cod making sure it looks solid
[52:01] and nice H yeah we are really grateful
[52:04] for you guys helping us with all this
[52:06] staying oldest work that's my end Y and
[52:09] we're happy to be here you know putting
[52:11] together something and you know amazing
[52:13] and giving you all a great gaming
[52:16] experience got nothing Tom uh I'm just
[52:20] hoping the PTU goes well so I can fall
[52:22] asleep tonight so fair enough fair
[52:25] enough stress test is started starting
[52:26] in three minutes you can get with Will
[52:28] and Discord y so so if you're in the PTU
[52:31] and you have access to Discord jump in
[52:33] there now we'll be doing our big stress
[52:34] test for 241 in just a few minutes uh
[52:37] Ahmed uh Jason Tom thanks so much for
[52:40] taking the time I know we tried to get
[52:41] you in last uh last month and you know
[52:44] work work you know prevailed but uh than
[52:47] thanks for taking an hour out of your
[52:48] time to to sit with us and chat with us
[52:50] and and talk about a little bit about
[52:52] your work and take some questions from
[52:53] the fans so guys uh thanks a lot uh
[52:55] regular RTV is back on Friday uh be sure
[52:58] to check out uh around the verse episode
[53:01] 100 tomorrow uh it's part one of our of
[53:04] our multi-part episode 100 uh
[53:06] celebration so check that out and uh
[53:09] I'll see you again on Friday so thanks
[53:11] guys thank you all right have a good

# Star Citizen Live: Builds, Platforms and Publishes

**Video:** https://www.youtube.com/watch?v=BVY3opzB1oc
**Date:** 2020-09-18
**Duration:** 55:20

## Transcript

[00:02] hi everybody
[00:03] uh welcome to another episode of star
[00:04] citizen live
[00:06] builds publishes and platforms or what's
[00:08] it platforms and publishers who knows
[00:10] i'm your host jared huckabee and joining
[00:12] us on the show this week
[00:13] are a round table of incredibly
[00:16] technical director type folks who are
[00:19] involved in
[00:20] making bringing all the aspects of star
[00:23] citizen that all of our wonderful
[00:24] developers
[00:25] create over the course of the days and
[00:27] the months and weeks and
[00:28] bring them together into builds and
[00:30] publishes and and make them accessible
[00:31] to you the players so
[00:33] we are stepping back behind the scenes
[00:35] here and we are joined by well a couple
[00:37] people let's just go around the room
[00:39] and uh see who we're talking to miles
[00:42] i think it's been the you've been the
[00:44] longest since you've been on one of our
[00:45] shows we're going to start with you
[00:46] first
[00:47] uh who are you what do you do for star
[00:49] citizen
[00:50] i'm the director of build operations i
[00:53] manage the team
[00:54] which uh deals with the version control
[00:56] mostly
[00:57] and build system creating the builds
[01:00] that we deliver out to the players
[01:02] okay uh ahmed we'll go to you next who
[01:05] are you and what do you do for star
[01:07] citizen
[01:10] uh am ahmad checker i've been with cig
[01:13] for five years and a half
[01:14] my team and i were publishing technology
[01:17] we received the build once it comes out
[01:18] from the build system and we try to
[01:20] deliver it to every single player
[01:21] whether internally externally
[01:23] leveraging a lot of cloud technologies
[01:25] automation and
[01:27] some good old-school also system
[01:28] management and system engineering about
[01:30] how to keep
[01:31] all these moving parts together to
[01:33] deliver like a good player experience
[01:35] at the same time to harvest as much
[01:37] debug information and
[01:39] because we're in active development so
[01:40] it's kind of very unique
[01:42] kind of role we're not just serving a
[01:44] live product we're also
[01:45] yeah yeah all right uh and then there's
[01:49] benoit
[01:50] so on the show today benoit
[01:54] who are you what do you do uh you need
[01:56] to say my last name first
[01:59] [Laughter]
[02:03] bo ah so good actually
[02:06] you
[02:12] i know you did cool um uh i'm ben
[02:16] i'm the cto at turbulent uh so i manage
[02:19] and oversee all of the teams that make
[02:21] platform services and so that includes
[02:23] website
[02:24] launcher and a couple of in-game
[02:27] services as well
[02:29] so so yeah so that means taking miles is
[02:32] built that goes through ahmed systems
[02:34] and uh getting that into your heads
[02:38] not just so i imagine the three of you
[02:40] uh work pretty closely throughout
[02:43] throughout the the month week day i
[02:46] don't know
[02:48] well yeah how many bills a day
[02:51] i'm at sometimes a lot a lot
[02:55] i mean that's that's the good thing we
[02:56] we we deploy a lot of builds behind the
[02:58] scenes that we get to decide what they
[03:00] can make here or not
[03:01] so not all the builds that we deploy you
[03:03] will get to see right
[03:05] sometimes there's so many yeah yeah not
[03:07] every build even makes it to the point
[03:08] where it can deploy
[03:09] so yeah some of the some of the builds
[03:10] are uh
[03:12] yeah so let's talk about that before we
[03:14] get into the question and answer period
[03:16] uh which is you know what most of the
[03:18] show is this is a bit of a
[03:20] uh esoteric show it's different than we
[03:23] normally do
[03:24] um most most of the time uh when people
[03:27] look at the stuff that
[03:28] you know other games put out you know
[03:30] they're buying this and stuff we're
[03:31] never talking about
[03:32] build systems and publishing and
[03:34] platform stuff so
[03:36] so we're in an area that that a lot of
[03:37] folks may not be familiar with so let's
[03:39] talk about
[03:40] uh how a how a build becomes a law
[03:44] that was school ass rock nevermind uh
[03:48] let's begin by to do an overview how
[03:50] does the the build and publish process
[03:52] work
[03:54] so i mean it obviously starts with the
[03:56] developer committing a change
[03:58] once that goes through that process we
[04:00] get uh we have tools which allow the
[04:03] developers to kick builds
[04:05] from our release streams uh
[04:08] once the build is finished we go through
[04:11] a manifest process
[04:12] and we create what we call the build
[04:14] manifest and basically it's just the
[04:16] list of files that
[04:18] dictates what the launcher should patch
[04:20] down and
[04:21] we upload that and kind of hand off the
[04:23] comment from there
[04:24] yeah that's that's where the custody
[04:26] kind of switches from a team to another
[04:28] but also we do not really really have
[04:30] silos like all these teams
[04:32] actually work together for so many years
[04:34] so it can be that we can
[04:36] actually be following up on the building
[04:37] and build system and trying to inspire
[04:38] what could be wrong and you could be
[04:39] also looking at deployment and see what
[04:41] could have gone wrong
[04:42] so from from that moment that we have a
[04:44] build we have a manifest it depends on
[04:46] the size of the deployment
[04:47] every deployment is going to go to in a
[04:49] single region a small number of audience
[04:51] a key or a staging deployment this is
[04:52] fully automated you go through a web
[04:54] interface you click deploy everything
[04:57] gets created from scratch
[04:58] share nothing like vms get created
[05:01] a kubernetes deployment for a new
[05:03] generation of services name space gets
[05:05] created a helm deployment chart gets
[05:08] initiated that that chart as a global
[05:10] chart has other charts underneath it
[05:12] a lot of movement pieces so many
[05:13] movements gets deployed so you can have
[05:15] that fleet of services
[05:17] and the simulators that indicate the
[05:19] game server is deployed in the cloud
[05:20] accessible whether
[05:22] it's an internal group of people or xml
[05:23] if it's external we
[05:25] so far due to how rapid things are
[05:27] changing we'll have to have a captain to
[05:29] have someone who's really running the
[05:30] deployment
[05:31] so every deployment in that case is a
[05:33] get branch
[05:35] you go take our automation repo and
[05:37] nikki a branch and that branch would
[05:39] have some of the facts
[05:40] that are specific to this deployment
[05:42] these facts are always changing we're
[05:44] allowing very last-minute change because
[05:46] we are a development company we are
[05:47] really developing
[05:48] as we go so now we're trying to take
[05:50] away any
[05:51] any ability to to to change things very
[05:54] fast
[05:55] so that deployment gets created it's a
[05:56] blue green deployment and
[05:59] all the resources get allocated around
[06:00] the world and it's hidden
[06:02] at this time our internal qa start
[06:04] hitting it
[06:05] and depending depending every deployment
[06:07] has a goal too like every deployment has
[06:09] a very specific goal whether we're
[06:10] delivering a feature we're testing a
[06:12] feature we're collecting feedback
[06:14] and kiwi hits that has that part hard
[06:16] and there is a
[06:17] another checklist with other departments
[06:19] everyone has to know this is a new gamer
[06:21] experience where we are exporting or
[06:22] publishing a full gamer experience it's
[06:24] not a bunch of
[06:25] virtual machines just being able in the
[06:27] cloud and everyone has to get an
[06:28] agreement and
[06:29] all the work gets done and then the
[06:30] players see the light comes on on the
[06:32] launcher
[06:33] and i think that's that's where you get
[06:34] to see more i mean platform is involved
[06:36] in all of that
[06:37] like all these systems are super super
[06:39] involved that platform you get to see
[06:40] more like okay we're ready to publish
[06:42] right now and i think benoit can explain
[06:44] that better than me
[06:45] yeah so that's where uh usually my team
[06:48] comes in where uh we've built tools to
[06:50] allow the
[06:50] uh the deployment to go out so that
[06:54] includes securing the build
[06:55] uh from you know uh who needs to be to
[06:58] have access to it
[06:59] as ahmed was pointing out there's a lot
[07:02] of builds that
[07:02] players don't see that are used for
[07:04] internal testing
[07:06] that are used for you know queueing a
[07:08] specific feature
[07:09] or doing ad hoc testing on on a specific
[07:12] refactor or something like that so
[07:14] that is internal but the moment it needs
[07:16] to go external so either it goes on ptu
[07:18] or on production uh that's where the
[07:20] launcher release tools come in
[07:22] and so this allows us to take the build
[07:25] manifest that miles was speaking about
[07:27] and basically make it available to
[07:29] players to patch
[07:30] and so that's where the delta patching
[07:34] technology comes in that's able to do
[07:37] rapidly look at the build that you have
[07:39] and the build that's now available and
[07:41] make compute the difference and then
[07:42] just give you the objects that you need
[07:44] to run the latest version of the game
[07:46] obviously for that there's a lot of user
[07:48] facing services
[07:49] and every time there's a user facing
[07:51] service that means a lot of
[07:52] responsibility related to
[07:54] security scalability etc etc so that's
[07:57] mostly the platform teams that take care
[07:59] of
[07:59] of the maintenance of those systems but
[08:01] the operation of it is fully in the
[08:04] teams and so that's the great part so
[08:06] that's it's pretty much the build
[08:07] process in a nutshell
[08:08] i think in a nutshell that's the
[08:12] that's the the the nickel version the
[08:14] knuckle version of the process at the
[08:16] very least
[08:16] uh you know we only got an hour long
[08:18] show here sure
[08:19] so we do so uh as usual uh
[08:23] we're taking questions live from the
[08:24] chat if you have a question that's
[08:26] related to the
[08:27] build publish or platform process you
[08:29] can submit it in the chat
[08:32] these are all things that exist external
[08:34] of the game
[08:35] so as a general rule of thumb if your
[08:38] question has anything to do with
[08:40] what's inside the game this is not the
[08:41] show for that
[08:43] so those questions won't be asked
[08:44] additionally we also collected questions
[08:47] throughout the week as we usually do
[08:48] from spectrum we pulled out the ones
[08:50] that were
[08:51] appropriate to our guests here so let's
[08:53] start in with those while some of the
[08:54] live ones come in
[08:55] uh miles how does the process of
[08:58] creating and maintaining a build
[09:00] from a dev branch work uh for example
[09:03] how is specific functionality selected
[09:05] from the dev branch
[09:06] put into a build such as 310 while
[09:08] others are
[09:09] left behind in like game dev and then
[09:12] once it's created
[09:13] how are these changes maintained between
[09:15] each build
[09:17] sure so we actually maintain
[09:20] dozens of dev streams where individual
[09:22] features live
[09:23] and are housed and as those features get
[09:26] completed
[09:27] they're they're merged up into the more
[09:29] collective streams that get tested by qa
[09:32] as well so we can kind of see how they
[09:34] play together before creating the
[09:36] release branch
[09:37] eventually um usually once everything's
[09:40] ready for like a 310 or 311 we'll
[09:43] branch that out and start cutting builds
[09:45] from there
[09:46] we have a pretty robust inclusions
[09:49] process that allows us to
[09:51] strip it down and make sure things
[09:52] aren't going out that shouldn't be yet
[09:55] and then as far as
[09:59] i think i already touched on that we
[10:00] kind of have a nice user interface that
[10:02] developers anybody production can go and
[10:05] request a build so
[10:06] production a lot of times is the ones
[10:08] responsible for kicking the release
[10:09] builds and
[10:10] maintaining that pipeline of who does
[10:13] what when the builds where
[10:15] um as far as um how to get
[10:19] selected things so obviously bug fixes
[10:21] go in our release streams we have a
[10:22] bunch of internal automated tools
[10:24] um that as soon as changes are submitted
[10:27] to those streams we
[10:28] start bringing those changes back down
[10:29] to the lower level developers and
[10:31] distributing them out so that everybody
[10:33] has access to those changes as quick as
[10:35] possible
[10:36] um yeah i think it's i think it's one of
[10:38] those things that
[10:39] maybe isn't always apparent that you
[10:42] know everybody's working in these
[10:43] individual feature streams
[10:45] you know so that everybody so that the
[10:47] active feature team can work in their
[10:48] stream and the ship team
[10:50] can work in their stream the ship art
[10:51] team can work in there you know the
[10:52] featured team is this one
[10:54] our team is this one and they're all
[10:55] working in these different streams so
[10:56] they don't step on each other's
[10:57] you know toes and overwrite each other's
[10:59] work while they're working and then
[11:01] that process of integration is where
[11:04] where bugs are born
[11:08] it's huge um we actually manage quite a
[11:11] few micro services that kind of back the
[11:12] whole build process and
[11:14] uh that's probably the most heavily used
[11:16] microservices that integration process
[11:18] at the moment
[11:19] it it's thousands a day
[11:22] easily yeah that's uh the the
[11:25] the number you know you know every every
[11:27] check-in generates a number when the
[11:29] and the builds that go live the people
[11:31] often see like we call it patch 311
[11:33] but then there's that you know secondary
[11:35] number the the change log number
[11:37] you know that is how many different uh
[11:40] check-ins
[11:41] there have been each one and then when
[11:43] people people who follow evocati or
[11:45] follow pt or whatever when they see
[11:48] that number rise like that is how many
[11:50] check-ins
[11:51] have made that particular bill not
[11:52] enough check-ins are done just the ones
[11:54] that actually were included in that
[11:56] particular build
[11:57] and put in it's a it's a staggering
[11:58] number
[12:00] right it does do a couple traffic jams
[12:03] on those integration days for sure
[12:05] yes absolutely um
[12:09] then what what database technology are
[12:12] we using
[12:13] and why uh are we using like what sql
[12:16] nosql what are we using
[12:20] well so the the the answer is
[12:22] complicated but we do use a
[12:24] plethora of databases uh so
[12:27] uh platform systems tend to rely on on
[12:30] structured data and so they're gonna
[12:33] mostly
[12:34] leverage technologies like mysql or
[12:37] mariadb which is the same kind of engine
[12:41] but we since a lot of the game systems
[12:44] are also
[12:45] uh made by micro services then they can
[12:48] each service can actually use its own
[12:50] data store and so we have the ability
[12:52] to use the right data store for the
[12:53] right use so we don't have it's not like
[12:56] nosql for everything or sql for
[12:58] everything right it's more like
[13:00] this use case needs a structured data
[13:02] set and so we're going to use this
[13:03] engine right so
[13:04] in general uh the technologies that are
[13:07] in use in the game today and in platform
[13:09] both
[13:09] both of them share a lot of these
[13:11] technologies but uh
[13:12] mysql is is used to persist a lot of the
[13:15] data on both ends
[13:17] there's a mongodb is also a big player
[13:20] in a lot of the
[13:21] dynamic variable systems that power the
[13:23] game and
[13:24] redis is a as a real workhole workhorse
[13:27] for a lot of the
[13:28] really real-time stuff like you know
[13:30] spectrum red counts or
[13:33] distributed logs we're going to use
[13:34] redis for a lot of this which is
[13:36] it's really our our swiss army knife of
[13:38] databases there
[13:40] so the right database for the right job
[13:43] correct correct anything using like
[13:45] filemaker pro no
[13:48] no uh no though though some people want
[13:50] those features
[13:54] i was just about to say we advocated
[13:56] this a week ago we had it but we had to
[13:57] duplicate it yeah
[14:00] um ahmed uh what type of
[14:03] aws servers uh do the platform and pu
[14:06] currently run on
[14:07] okay yeah what can you tell us yeah yeah
[14:10] i mean we
[14:11] we can tell everything because it's
[14:13] public offering everyone knows about it
[14:16] we use a large large large variety of vm
[14:19] sizes and families but the major
[14:22] common factor between all of them is the
[14:24] aws nitro which is a kvm lightweight
[14:28] technology that aws introduced with the
[14:30] next generation of new generation
[14:32] and when it comes to the game servers
[14:34] the game servers run in c5
[14:36] if we have some backers watching the
[14:37] live stream from the days before 3.0
[14:40] we were doing some comparisons between
[14:42] the c4 and the c5 these were changes in
[14:44] the hypervisor changes in the
[14:46] in the cpu powering the vm underneath
[14:49] when it comes to the cloud you're
[14:51] usually trying to
[14:52] to hit a very specific
[14:55] sensitive part of your workload so for
[14:58] the game servers we have to meet in two
[14:59] main areas we need to maintain a decent
[15:01] ratio between the memory and the compute
[15:03] and
[15:03] we need to make sure that we have very
[15:04] fast compute so c5s fit that very well
[15:07] we have other services that are single
[15:09] threaded that we need a very very fast
[15:11] single core
[15:12] clock speed so you would run on z1d also
[15:15] another nitro
[15:16] instance we have other services that
[15:18] require moderate cpu
[15:20] clock speed but they have larger memory
[15:22] usage you'll be running an r5
[15:24] so it it's it's all in our availability
[15:27] actually uh
[15:29] a lot of our workload we try not to be
[15:30] stuck to one single size
[15:32] because we need to make sure if there is
[15:34] any issues and we cannot allocate vms
[15:36] from the size we always have a backup
[15:38] size we have
[15:39] backup regions behind our regions but
[15:40] sometimes you have to choose your battle
[15:42] whether you're willing to go to a second
[15:44] region to allocate resources
[15:45] or you're willing to go for the second
[15:46] most optimal machine size i
[15:48] hope this is not so boring but we use a
[15:51] lot of them and we try to use the new
[15:52] ones i think that's interesting
[15:54] the thing that's interesting about that
[15:56] is that you realize that sometimes you
[15:58] try to get a vm from the cloud and you
[16:00] can't because they're out of vms and so
[16:03] yeah
[16:04] and you end up playing the world's most
[16:05] advanced game of whack-a-mole
[16:08] i mean it's what keeps the job like
[16:10] interesting and entertaining
[16:14] it's it just it just got the image what
[16:16] is it there that the
[16:17] the ahmed was there was spinning plates
[16:20] yeah
[16:22] um a follow-up here uh
[16:26] are our game servers dynamically
[16:27] deployed depending on users the user
[16:29] requesting to play
[16:31] and can game servers dynamically scale
[16:33] by load
[16:35] yes we are very proud of our road
[16:37] scaling system we have a buffer based
[16:39] dodge scaling system game servers are a
[16:41] slot based
[16:42] so if the game instance will take
[16:44] specific number of slots you cannot
[16:45] overload that
[16:46] so when you auto scale a system like
[16:48] that you are bound to use what we call a
[16:50] buffer system where you always have a
[16:51] step ahead of you
[16:52] of vms or instances both in the logical
[16:56] and the like in the physical
[16:57] the already server players and that
[16:59] buffer that buffer size how much you
[17:00] maintain ahead of you has to do with how
[17:02] fast it takes an
[17:04] innocence from scratch to load the map
[17:06] and be ready for players
[17:07] so these are adjusted this is what
[17:09] scaling system works on the regional
[17:10] level so the guys
[17:11] in sydney could be it could be a rush
[17:14] hour for them so we start spawning vms
[17:16] over there
[17:16] the us and the you are not affected and
[17:19] yeah it's it's
[17:19] uh it's a very essential system for us
[17:22] because game game and behavior like
[17:25] gamers behavior is always up and down
[17:27] and we cannot have resources either
[17:28] around and these these are quite large
[17:31] vm so we cannot just have them hanging
[17:32] out for no use
[17:36] not with that attitude
[17:40] all right let's see what we got from the
[17:43] chat here uh
[17:44] miles what's changed hardware wise
[17:47] uh since the last time uh we we talked
[17:50] about this uh
[17:51] uh and what effect has it had on
[17:54] build times and publishes sure uh
[17:57] well i think it's been about four years
[17:59] since we last talked about this topic so
[18:01] um we've pretty much upgraded across the
[18:03] board be that storage
[18:05] ramps adding more cpus um
[18:09] we've also spent a lot of time utilizing
[18:11] all the hardware a lot better with
[18:14] better build distribution across the
[18:15] machines
[18:17] and a lot of that has
[18:20] helped greatly over the last four years
[18:23] so we used to
[18:24] at least six hours per build back then
[18:27] we could only have
[18:28] about two running at any given time um
[18:31] nowadays we're sitting at about three to
[18:33] four we can have up to four builds
[18:35] running simultaneous
[18:36] simultaneous simultaneously
[18:39] and um we probably put out 12 to 15
[18:43] builds a day now
[18:44] um it's pretty regularly especially with
[18:46] all the feature stream support that
[18:48] we've added over the last year or two
[18:49] um the builds are getting kicked very
[18:52] regularly
[18:52] and it's almost a constant queue and
[18:54] stream of builds coming through
[18:57] where's that phrase come from kicking
[18:59] builds like what what
[19:01] when did builds become a thing that were
[19:02] kicked well i mean it's like kicking a
[19:04] can down the road right you just keep
[19:06] it going until it gets through the trash
[19:08] that's a very appropriate analogy
[19:10] [Laughter]
[19:12] that's probably it exactly miles um
[19:16] is merging feature branches difficult
[19:21] um it can be
[19:24] um fortunately for me the developers
[19:26] typically own a lot of the processes
[19:27] because nobody can
[19:29] solve their resolution conflicts better
[19:30] than they can um
[19:32] there is a somewhat heavy build process
[19:36] to that
[19:36] where um we always try to test the
[19:39] changes upon
[19:40] merging and make sure that they're not
[19:42] going to break anything in the stream
[19:44] that they're going to
[19:46] so that that is time consuming i'd say
[19:48] it was a better
[19:50] better answer yeah you you mentioned
[19:52] earlier that that developers have the
[19:54] ability to kick off a build
[19:56] is is is that a is that a good thing
[20:01] i go back and forth on that every day i
[20:04] think typically it's a good thing the
[20:05] less barriers
[20:06] that we can put in front of developers
[20:08] and allow them to
[20:09] iterate more quickly without need from
[20:12] intervention from us
[20:13] is it helps both them and us because it
[20:15] frees us up to continue to work on more
[20:17] tools that
[20:18] make their workflow more efficient and
[20:20] and allows them to not be stuck waiting
[20:22] on us for things
[20:24] um how do we test and benchmark our
[20:28] systems for stability
[20:32] that's interesting so the there's been a
[20:34] lot of work
[20:35] there for in the past um to try to get
[20:38] the
[20:38] uh get that up to speed um nowadays
[20:42] uh there are multiple ways where
[20:44] stability is being tested so
[20:46] uh on the platform side for example we
[20:48] have a
[20:49] a set of tools built on locust which is
[20:52] a
[20:53] load testing framework written in python
[20:55] which is super nice
[20:56] uh and it allows us to basically
[20:58] simulate you know thousands and
[21:00] thousands of users uh so we can write
[21:02] scenarios about what they do for example
[21:04] you know uh melt the ship like what if
[21:07] you know x amount of players melt the
[21:08] ship right what how does the system
[21:10] react so we can
[21:11] we can test that and we've used the same
[21:13] principle in the same framework to build
[21:15] a
[21:17] game uh game facing locust
[21:20] system that we call pestilence which is
[21:22] basically
[21:23] yes i know the naming is nice but
[21:26] basically what pestilence is able to do
[21:28] is mimic
[21:30] what you guys do in game so he's able to
[21:32] log into the game
[21:33] connect to the servers and then do
[21:35] specific actions that we want to test so
[21:37] if let's say
[21:38] you know we have a service that has an
[21:39] issue and we're trying to see what's
[21:41] causing issues and we can
[21:43] actually write a scenario that does that
[21:44] and then we can spawn thousands and
[21:46] thousands of locusts doing that
[21:48] in game to simulate what happens when we
[21:52] actually launch a build because
[21:53] you know that's usually what happens is
[21:55] like there's a big storm of people doing
[21:56] the same action and so
[21:58] uh so we can test the ability this way
[22:00] now it's getting more and more
[22:01] integrated into the process where we
[22:03] write scenarios for different services
[22:05] as we go
[22:06] recently we've added the ability to even
[22:08] you know
[22:09] provision account data from it and so
[22:11] we're able to
[22:12] you know pre-warm some of the databases
[22:15] uh to
[22:16] prevent some services from getting hit
[22:18] too hard when the patch is launched
[22:20] things like that so that's one thing
[22:21] that that's the major thing that we do
[22:23] for
[22:23] service and platform specifically for
[22:25] load testing
[22:27] on the game side i'll go forward more so
[22:29] these are headless clients obviously
[22:31] exactly those are even more than
[22:33] headless clients they're not even
[22:35] running the game itself they're
[22:37] literally just
[22:38] you know running the cloud side of the
[22:40] game if you want okay
[22:41] okay but we do have endless clients as
[22:43] well that's where i was going
[22:44] right where there are automated systems
[22:47] that can do
[22:48] which is called a cloud test launcher we
[22:50] can which can actually do that running
[22:51] the game client as well
[22:53] but the testing there is more focused
[22:54] around testing the game server
[22:56] performance than you know the cloud the
[23:00] the mmo side of the game basically yeah
[23:02] that's martin senior and his team
[23:04] working on that cloud test launcher
[23:05] we'll actually be talking to
[23:06] uh his team about it in isc next quarter
[23:09] hopefully
[23:10] cool awesome in case people wonder how
[23:12] often how far ahead we playing these
[23:14] things
[23:15] um let's see
[23:18] ahmed is there hardware parity between
[23:21] all the different regions
[23:23] uh it often seems like well let's just
[23:26] let's just go there let's just it's just
[23:27] let's just get that one
[23:30] yeah yeah 100 we do not discriminate
[23:32] they all they all have the same spec
[23:34] uh what really happens is player
[23:36] behavior affects a lot what's happening
[23:39] in the game server
[23:40] and also your latency like the the game
[23:42] server the dedicated game server is a
[23:43] very very sensitive workload it's very
[23:45] sensitive to any kind of overheads
[23:47] instead of any kind of latency issues
[23:49] so no everything is apparently we do not
[23:51] discriminate
[23:52] actually the only workload that we have
[23:55] the always running the same exact
[23:57] platform no change
[23:58] no matter what the environment is is a
[24:00] dedicated game server there are other
[24:02] services that we can give them less
[24:03] resources in smaller environments
[24:04] because we know they're not going to get
[24:06] hard when it comes to that monologue
[24:07] simulator cool dedicated game server we
[24:09] always make sure that it has the same
[24:10] exact spec after where it goes
[24:12] okay i i know the the second half of
[24:15] that question was
[24:16] uh what was this person
[24:19] was from the australian i'm guessing
[24:21] this person's from the australian region
[24:23] and they've never seen that it seems a
[24:24] little more sluggish but as far as the
[24:26] actual hardware behind
[24:27] the servers they are at parrot it is the
[24:30] same yeah and we actually care a lot for
[24:32] our
[24:33] our customers in sydney like one time we
[24:35] had issues in the sydney
[24:36] abc and we had to locate some uh some
[24:39] vans in mumbai like in india which is
[24:41] it's the far but still it was the
[24:42] closest area in dws and we got really
[24:44] upset we're like
[24:45] super fast we're gonna make decision go
[24:46] back to sydney so if they're having any
[24:48] issues like i
[24:49] i guarantee them it's not related to the
[24:51] hardware
[24:53] uh how how much storage space is needed
[24:57] for one game instance
[25:00] it's the same way that like when it
[25:03] comes to how much
[25:04] so that the windows built into linux
[25:06] build a difference in size
[25:07] right but the different size is very
[25:09] like not that big of a deal
[25:10] that the data file the the the b4k file
[25:13] that everyone has
[25:14] i have to have it on my servers too so
[25:16] we can stream all these all these static
[25:17] files in and out
[25:18] and make the game server run so it's
[25:20] very close to how much you download to
[25:23] run your client
[25:24] okay um you you
[25:28] you said you said linux build and i know
[25:31] there are people
[25:31] i've already seen it show up uh you want
[25:34] to go into
[25:35] detail server builds linux server build
[25:37] yes
[25:37] [Laughter]
[25:39] i don't talk politics i like technology
[25:42] just wanna just wanna clear that up
[25:44] there so that people don't take that
[25:46] uh where should it be let's see what
[25:48] else we got from the chat here
[25:50] uh when a new build is required for the
[25:53] ptu
[25:54] how long does it take to compile on
[25:56] average
[25:58] three to four hours roughly
[26:02] is there is there something in
[26:03] particular that could spike that one way
[26:06] or the other
[26:08] um well there's always a lot of load on
[26:11] the system so that could always
[26:13] cause times to fluctuate quite a bit um
[26:16] there's a lot of uploading that takes
[26:18] place during that so
[26:20] sometimes the network can be bogged down
[26:26] it's not just compilation time there's a
[26:28] lot of fan out and fan and there's a lot
[26:29] of steps down
[26:30] we go do a lot of things in battle and
[26:32] then we can look them back and and these
[26:34] are systems
[26:34] sometimes sometimes they are under
[26:36] development themselves sometimes we make
[26:37] changes that make things take longer or
[26:39] take shorter
[26:40] but yeah if we were talking in general
[26:41] like might definitely said between three
[26:43] to four hours i would average
[26:45] and you're right i'm in that when a
[26:47] build is finished
[26:48] cooking it's not ready to be distributed
[26:52] and it gets low on it for a while now
[26:53] it's too hot exactly you know
[26:56] let it let it sit a bit right but no
[26:59] it's because it needs to be uploaded
[27:00] right so that it can be distributed and
[27:02] that step is fairly long as well
[27:04] that's why the total time is true for us
[27:09] the client compiles themselves or
[27:11] relatively quick as
[27:13] the the data is typically what takes the
[27:15] longest and that
[27:16] can go for an hour or two for sure a big
[27:19] game it is a big game
[27:22] and only getting bigger uh what methods
[27:25] practices do you utilize to organize
[27:27] branch management between teams
[27:32] um that's base that's our um
[27:36] kind of our internal feature stream
[27:38] setup where
[27:39] we have um teams as they are
[27:42] getting ready to start work on new
[27:43] features they will come to us and
[27:44] request
[27:45] a feature branch and devops will go
[27:48] create that feature branch set up their
[27:50] integration flows
[27:51] using the automated tools that we
[27:53] mentioned earlier and
[27:56] they'll move into that and and once it's
[27:58] feature complete
[27:59] we help them where needed to get back
[28:01] into our dev branches and
[28:04] kind of repeat the process with teams as
[28:06] we go
[28:08] is it annoying trying to find a file
[28:10] that was supposed to integrate and
[28:12] didn't
[28:14] occasionally um
[28:19] hey benoit let's talk issue council
[28:21] here's a good one
[28:22] uh are systems like the issue council
[28:24] directly linked uh
[28:26] to the internal jiras or whatever
[28:29] internal jarrahs and stuff
[28:31] yeah yeah that's that's been the idea
[28:33] since the beginning right is that the
[28:34] uh report that's filed and confirmed on
[28:36] the issue council gets uh
[28:38] if you see the cigi on it then it's been
[28:41] imported
[28:41] to jira basically and so at that point
[28:44] it can be tracked internally it can be
[28:45] assigned to because you know product
[28:47] you know developers need a jira ticket
[28:51] to work or check in
[28:52] right and so that's the way we
[28:54] legitimize the changes that they have to
[28:55] do and so
[28:56] yeah issue consoles connect the the same
[28:58] same way to feed the status
[29:00] status back from issue cancel um you
[29:03] know
[29:03] there are there's we're aiming to do
[29:05] improvements to that flow to give more
[29:06] visibility but
[29:07] you know we still have a long ways to go
[29:08] before we can hit that the roadmap is
[29:10] the same thing the current roadmap so
[29:12] the cars that you see on the roadmap
[29:13] also comes from jira so the
[29:15] the this is a live representation of the
[29:17] production as
[29:18] as it stands the moment it gets it gets
[29:20] put up there
[29:21] uh so yeah it is connected and that's
[29:24] the key it's the data source
[29:26] and the data destination
[29:29] uh what level of automation
[29:33] do we have when in our build and
[29:34] deployment process is it highly manual
[29:37] is it highly automated
[29:39] how would you characterize it ahmed
[29:42] i'll talk about the flaming slides so
[29:44] when it comes to deployment depending on
[29:46] that i kind of touched on that earlier
[29:47] under the
[29:48] deployment size if it's a smaller
[29:50] deployment that
[29:51] locates like reasonable amount of cloud
[29:53] resources this is fully automated anyone
[29:55] can go through a go
[29:56] interface and click and these
[29:58] deployments you are not allowed to
[30:00] change so much of them you can only
[30:01] change a few specific facts
[30:03] and it's based based on a system that
[30:05] runs off get off of like a source
[30:07] version control system
[30:08] and uh and against the automatically
[30:10] everything gets built and everything can
[30:12] get destroyed also by by goi
[30:14] or by a user interface when it comes to
[30:17] any large public facing
[30:19] environment these we're talking about a
[30:20] lot of resources so in the current phase
[30:22] of the project because
[30:23] we also still have systems or areas in
[30:25] automation that imperative
[30:27] where we tell it how to do things not
[30:29] what we want that's that's a very
[30:31] important topic a lot of people i see
[30:32] and the questions are from the devops
[30:34] community that's a big thing we're
[30:36] trying to shift a lot of our stuff from
[30:37] telling the automation how to get there
[30:39] to what we want
[30:40] and let the automation business system
[30:42] like frameworks obtain
[30:44] that state but to go back to the point
[30:47] if you have a larger
[30:48] environment at the initial part of it
[30:50] you have to have a human decision you
[30:52] have to have a review another human
[30:53] decision making sure that these are the
[30:54] correct values
[30:55] and then it goes from there and it
[30:56] becomes automated the node scaling kicks
[30:58] in and manages the environment from here
[31:01] yeah i think it's uh it's comparable to
[31:03] a lot to the way that we use
[31:05] like procedural generation in our our
[31:07] planets and stuff you can use these
[31:08] automation tools to help you and to
[31:10] assist
[31:11] and to you know get you started or maybe
[31:14] even finish a job but that's there's
[31:15] always got to be these
[31:17] check posts where humans are involved to
[31:19] validate the decisions to
[31:21] to determine what's going on it's just
[31:23] you you'll never
[31:25] there's there's no replacement for the
[31:27] human element
[31:29] and just add something really quick as
[31:31] the project matures as parts of the
[31:33] project material as we know we're not
[31:34] going to be moving a lot of knobs here
[31:36] we can offset these parts and make it
[31:37] like
[31:38] super self maintained self healing is a
[31:40] big topic in our industry and
[31:42] we want to talk about it if a reactive
[31:45] at the active environment or the
[31:46] environment that reacts to itself and we
[31:48] might i get to talk about
[31:49] a little bit about how we're trying to
[31:50] enhance uh the metrics
[31:53] or the traces or the logs or the
[31:55] insights inside our services
[31:57] so we can let our infrastructure make
[31:59] decisions based on decent sites
[32:01] yeah yeah i mean one one key part that's
[32:03] still a human intervention i think
[32:05] both on platform and game is the the
[32:08] flip
[32:09] of the environments right so the the
[32:10] game as ahmed was mentioning is
[32:12] is deployed using a green blue
[32:14] deployment that means that you
[32:15] while you guys are playing a game online
[32:17] on prod for example
[32:19] and we're preparing a new build there's
[32:21] the you know that's the blue one
[32:22] and then the green one's being built or
[32:24] vice versa right and so at some point
[32:26] when
[32:27] the bill's validated there's the the
[32:29] flip happens
[32:30] and a human says okay we're flipping and
[32:32] that's where
[32:33] the the bill goes live it gets available
[32:35] and launcher servers are flipping over
[32:37] and rotating and so that's that's still
[32:39] a human doing that and it actually
[32:41] requires a couple people saying
[32:43] yes yes yes before it actually happens
[32:45] oh oh no i i remember
[32:46] i learned that specifically with the uh
[32:49] the launch of 3.0
[32:50] when we're sitting we're sitting i'm
[32:52] sitting in a bathroom with a razor
[32:54] ready to destroy that giant
[32:57] gremlin that was on my face and there's
[32:59] and everybody's going through the go
[33:00] no-go checks and everybody's like oh
[33:01] yeah
[33:02] everybody's right everybody and then it
[33:03] comes down to it it's got to be chris or
[33:04] aaron to give the final go before
[33:06] they actually flip the environment over
[33:08] and and uh and
[33:10] and chris goes it's just everybody's
[33:12] quiet
[33:13] goes well maybe we should do a couple
[33:14] more checks i'm sure jared doesn't want
[33:15] to get rid of the beard just yet
[33:17] and boy did i i got i'm i'm in that call
[33:21] i'm supposed to keep it muted i'm not
[33:22] supposed to contribute i'm just there
[33:23] monitoring but you can bet i unmuted my
[33:25] mic
[33:26] and i'll let some people have some
[33:28] colorful words
[33:34] and no one will forget this 2.0 it's
[33:37] very similar to the build system as well
[33:39] which is
[33:39] highly automated but somebody always has
[33:41] to make the decision to request a build
[33:43] even if that's a release bill
[33:44] right from the live chat
[33:48] is there a secret dev build
[33:53] a secret dev build secret dev there's
[33:55] always a secret to building
[33:58] secret they've all got
[34:00] [Laughter]
[34:03] uh ahmed what uh what deployment
[34:05] strategy are we using are we doing
[34:07] uh rolling canary what are we using
[34:11] so we do them all like we discussed in
[34:13] the beginning about how we do blue green
[34:15] blue green is usually when we are
[34:17] delivering uh
[34:18] a lot of breaking changes a lot of
[34:20] things are like okay
[34:22] we cannot have half and half these
[34:24] things are not going to play nice
[34:25] together
[34:25] and this is an in development like a
[34:28] product currently in development so we
[34:30] need to get you guys in the new stuff so
[34:31] we can see what's going on
[34:32] from the moment that we publish a big
[34:35] build to a large environment like live
[34:37] we can do well we call them hot fixes we
[34:39] can do between five and twenty half eggs
[34:41] and these are either canary released or
[34:45] rolled
[34:46] like in three 310 we carried
[34:50] six hot fixes for the hub server and we
[34:52] rolled the last one
[34:54] uh there and that happens in every
[34:56] single aspect there are
[34:58] areas of the game that can allow for
[35:00] some toggling where we can toggle
[35:02] features on and off
[35:03] or hot loading or hot changing data and
[35:06] there are other areas that
[35:07] because the challenge in running a game
[35:10] in the cloud is the statefulness the
[35:12] experience between
[35:13] a very immersive game like ours a game
[35:16] client like ours
[35:17] and the game server is super stateful
[35:19] this is a very fragile experience if you
[35:21] did anything here
[35:22] you lose that that connection and and we
[35:25] we are actually always discussing how we
[35:27] can make it make that less fragile so
[35:29] people like us
[35:30] are not do not have so many precious
[35:31] parts of our environments that we cannot
[35:33] touch
[35:33] the players are off but we do both we do
[35:36] canary we do ruling and we also
[35:38] initially do a blue green
[35:39] hopefully in the future as the project
[35:41] matures we start dealing with the
[35:43] concept of a deployment
[35:44] it's an environment that's always going
[35:46] and there's always pieces moving
[35:48] all the way around that we we still have
[35:51] have to do a lot more things before we
[35:52] get there
[35:53] it's fair uh miles what's the uh
[35:59] what's the average duration of a full
[36:01] production rebuild
[36:03] on the main star citizen branch
[36:06] thankfully thanks to our caching we
[36:08] haven't had to do one of these in a
[36:09] very i don't think we've had to do one
[36:10] of those in a while um i think
[36:12] the last time that we did do one it ran
[36:15] for about 24 hours
[36:18] thankfully that almost never happens
[36:20] nowadays
[36:22] remember i'm sorry just i'm
[36:27] i'm trying to remember which chris
[36:29] roberts game it was
[36:31] where somebody basically deleted the
[36:33] entire
[36:35] uh it basically deleted all of game dev
[36:38] and they basically savage salvaged the
[36:40] game by having
[36:41] somebody had taken a copy home to the
[36:43] ball game to work at home and they had
[36:44] to like
[36:45] they had to like carry this person's
[36:47] computer from
[36:48] from home into the office with you know
[36:50] uh until this i try to remember which
[36:52] game that was i think it was strike
[36:53] commander
[36:54] ben would ben would know ben would know
[36:58] i think it was strike commander um how
[37:01] many
[37:02] uh oh we touched on this a little bit
[37:05] but
[37:06] we'll do it again how many human or
[37:08] manual interactions are there between
[37:10] commit and deploy
[37:12] to get a build there's only two it'd be
[37:15] the
[37:16] developer making the commit and then the
[37:18] developer kicking the build
[37:20] depending on what environment you're
[37:22] wanting to deploy to
[37:24] it could be potentially one more human
[37:26] interaction which
[37:27] uses the same interface we kick our
[37:28] builds through to deploy to our internal
[37:30] staging environments
[37:31] i think ahmed could address outside of
[37:34] that for me
[37:36] yeah yeah if it's a larger environment
[37:38] it goes through like
[37:40] people talking it goes through people
[37:42] deciding that this is the ability
[37:44] we want to go with and then from then
[37:46] the humans just just do the decisions
[37:47] we were talking about earlier everything
[37:49] is driven by version control everything
[37:50] is driven by get
[37:51] but there's a human saying yes and we
[37:54] did not abstract that into a goo
[37:55] yet we don't we didn't see the need for
[37:57] that this is this is
[37:58] um we call ourselves devops i know this
[38:01] is some kind of haiti topic for a lot of
[38:02] people devops is a philosophy not a
[38:04] title but that's what the market goes
[38:06] for
[38:06] but we try to to really hold the values
[38:08] of devops close to us
[38:10] we share the ownership of that product
[38:12] this gaming experience is ours
[38:14] i can spend more than 50 of my time
[38:16] investigating an issue about how a
[38:18] player isn't able to connect something
[38:20] because i i have the access to all these
[38:22] tools and i can try to go and
[38:23] investigate it so to go back when it
[38:25] comes to deployment to a larger
[38:27] environment that's usually where
[38:29] human decisions are being implemented
[38:31] but all all the actual work of
[38:33] provisioning
[38:33] configuring securing is dominated but it
[38:36] would take days
[38:37] it would take weeks to deploy the whole
[38:39] environment manually like with how it
[38:41] spreads around the world
[38:44] uh i was trying to remember what was
[38:46] trying to
[38:47] remember what the devops uh what that
[38:50] devops chart was
[38:51] the the figure
[38:55] what what what are the points on that
[38:57] one
[38:59] trying to remember what they are it's
[39:01] it's a lot
[39:03] but see that's the thing these these
[39:06] terms are coined
[39:07] and and they create some some issues
[39:10] sometimes
[39:11] um my take on this not to i can
[39:15] take the whole house out there be close
[39:18] to your problems
[39:19] know what kind of problems you're trying
[39:21] to solve and we are in an amazing time
[39:24] where there are a lot of open source
[39:25] projects that you can go
[39:27] and and see what everyone else is doing
[39:28] and get it done
[39:30] every every organization taking every
[39:32] project they can devops is kind of
[39:34] unique
[39:34] and we we are one of the very unique
[39:37] ones
[39:39] that's a safe bet uh in the last year
[39:43] what this says in the last year but if
[39:46] you want to go beyond the last year you
[39:47] go beyond last year
[39:48] uh what patch was the most challenging
[39:50] for you on the back end
[39:53] if you think of a nightmare patch for
[39:54] you guys
[39:57] what what what what's what's the one
[39:58] that you don't like to think about
[40:02] you want to go last almond i'm i'm
[40:05] thinking
[40:05] i think 3.0 for me because uh
[40:09] because the the patch before that was so
[40:11] far right
[40:12] and and to you know to echo what uh
[40:16] almond was talking about in terms of
[40:17] devops philosophy
[40:20] if you don't deploy for a long time then
[40:22] you forget how to deploy
[40:24] right and so 3.0 was the the longest
[40:28] running in development patch of star
[40:30] citizen i think that we've had
[40:32] right and and uh launching that touch on
[40:35] everything
[40:36] everything was new there was like it was
[40:38] the first first for everything so it's
[40:40] like a brand new game
[40:41] and so for me that was by far the the
[40:43] most difficult to get
[40:44] across the finish line uh and that's
[40:47] when
[40:48] you know then going to quarterly made it
[40:50] a whole lot better
[40:51] like as now we can deploy you know more
[40:53] often which is
[40:54] which is how you get this rhythm going
[40:56] right and keeping keeping it going it
[40:58] also means
[40:58] you know to be fair the more you deploy
[41:01] the more you break stuff as well
[41:02] right so there there is a risk there
[41:06] yeah don't touch it right exactly don't
[41:08] touch it it's good
[41:09] but uh yeah for 3.0 for me by far
[41:13] i don't know for you guys how about you
[41:14] miles
[41:16] uh my my problems are very different
[41:20] usually
[41:21] uh i'm i'm more heavily involved at the
[41:24] beginning of the
[41:25] cycle less than the end so um
[41:29] 3.9 was actually pretty challenging to
[41:31] transition to
[41:32] as far as getting the new stream set up
[41:34] and making sure all the changes were
[41:36] integrated to where they needed to be
[41:38] we definitely had a good time with that
[41:39] one there's a lot of workflow changes at
[41:42] 3.9 for sure
[41:43] yeah yeah for me it's a difficult take
[41:47] between 3.0 and 3.9
[41:50] uh 3.0 definitely 3.0 we rolled out a
[41:53] new hypervisor a new generation of
[41:55] virtual machines and
[41:57] a lot of new things and it was in a very
[41:59] critical time
[42:00] i think we have an episode of one of our
[42:02] shows that i'm not very good at keeping
[42:03] up with
[42:04] where we talk about what happened with
[42:05] 3.0 3.0 there there was
[42:07] there was chats between cr and tony and
[42:10] uh still very like
[42:12] i i still remember very very very dear
[42:14] message to me when tony
[42:16] said i gotta go put some some gifts
[42:17] under the tree and come back real quick
[42:19] that that was 3.0 and it was a lot of
[42:21] fun it was a lot of
[42:22] fun uh 3-9 was a lot of fun too with
[42:25] like fleet week wow
[42:26] we we we are spoiled by our player base
[42:31] our blair berries are actually
[42:33] developing this game with us
[42:35] and i'm i'm not saying that because like
[42:36] it's if you really see that
[42:38] and 3.9 was a lot of people doing a lot
[42:41] of
[42:42] we were learning a lot we cannot stop
[42:44] learning from
[42:45] what happened during three nights and
[42:47] flee week
[42:48] and uh one of the major also ideas in
[42:51] devops is measure everything
[42:52] and uh has been when i was talking
[42:54] earlier testing a game and attributing
[42:56] this to a game is challenging
[42:58] it's it's it's relatively doable to test
[43:00] rbcs or api calls but the immersion
[43:02] like how the game runs and everything
[43:04] that is difficult and three nine we we
[43:06] had that
[43:07] we had we had that okay everyone is
[43:09] testing everything
[43:10] everywhere they're doing everything and
[43:12] we were receiving all this data
[43:14] and uh digesting a react into it i i do
[43:16] not have an accurate number but the
[43:18] number of half fixes that went in three
[43:19] and a half day week was really really
[43:21] high
[43:23] yeah i was i was wondering if one of you
[43:25] guys were going to
[43:27] mention the conversion to the delta
[43:29] patcher
[43:30] if not the that conversion but actually
[43:34] this actually went
[43:35] pretty well that was 3-0 yeah it was
[43:38] three i wasn't
[43:42] [Music]
[43:49] on ptu for like a month and a half
[43:52] i just remember my biggest memory about
[43:55] launching the delta
[43:56] patch system was the the moment we had
[43:59] the ability to push a build a day to
[44:02] players
[44:02] we did that for 48 days straight it was
[44:05] like
[44:06] all right i i do have very vivid
[44:09] memories of converting the build system
[44:10] to support that
[44:11] that was yeah that was definitely a
[44:13] challenging time as well
[44:15] yeah i i have a sad memory from 2015 by
[44:18] coming
[44:19] to the office at 1am so we can prepare
[44:21] the old school bed so we released
[44:23] at 6am and that was voluntarily like
[44:25] like we would go and work on it because
[44:27] it used to take hours to prepare these
[44:29] facts and make sure you have all the
[44:30] diffs between all the old versions
[44:32] yeah you actually bring good memories
[44:34] about the delta vector
[44:35] and right now sometimes we see we look
[44:37] at the cdn graph
[44:38] absent we see these beta bytes coming
[44:40] out like can you imagine if the delta
[44:42] bachelor was not here how much data
[44:43] you're pushing
[44:44] it's yeah it's one of these things that
[44:46] we take for granted now but it was an
[44:48] amazing big exchange for us critical
[44:50] technology for sure
[44:53] it's a seemingly simple thing but it's
[44:55] like absolutely critical to
[44:57] the ongoing life of any mmo
[45:02] uh let's see what else we got um
[45:05] will i cash and global persistence
[45:08] change how
[45:09] long term persistence is handled
[45:12] oh well that's interesting so um
[45:15] not really in fact the the long-term
[45:18] persistence was engineered to basically
[45:21] uh persist your data that you earn in
[45:24] game between patches right so
[45:26] it saves your money and the history of
[45:28] all of the uec money that you've got so
[45:30] every transaction up and down
[45:31] current values of all the your ledgers
[45:34] um the inventory systems
[45:35] that's part of ltp is also there to
[45:37] store hey you own a hornet right
[45:40] or a you own a constellation right um
[45:43] the state of these objects so you know
[45:46] oh this hornet's missing is like
[45:47] left wing was or was abandoned at grim
[45:50] hex or
[45:51] so that's stored in this in the
[45:52] persistent system so icash will
[45:54] basically bring more state tracking more
[45:58] state persistence
[45:59] but we're still going to persist the
[46:01] same amount or the same kind of records
[46:03] between patches to be able to
[46:05] rebuild the state when we do a
[46:08] data wipe on the icash site so the the
[46:10] reason and the reason why that's
[46:12] still an issue is because the schemas of
[46:14] those objects is still moving right and
[46:16] so we
[46:17] we still need to do that but um the only
[46:19] change that will come from it is that
[46:21] um there are some parts of the icash api
[46:24] that allow better handling of stacking
[46:26] objects so let's say you buy 50
[46:29] magazines right
[46:30] the way that's handled in the akash is
[46:32] is much better and so
[46:33] the ltp systems will track that better
[46:36] and so
[46:37] that's not the only change but the
[46:39] functionality for players should
[46:40] function the same way
[46:42] and for anybody that hasn't checked it
[46:44] out uh check out the last the previous
[46:46] episode of calling all debs where we
[46:48] talked with chad mckinney about
[46:49] uh icash and its effect and lead into
[46:52] global persistence
[46:54] uh let's see we got 10 minutes left
[46:56] we're almost done
[46:59] are there any improvements to publishing
[47:01] technology you're excited about in the
[47:03] near future
[47:05] yes so as we take some of our legacy
[47:09] systems
[47:10] through imperative uh described
[47:12] deployment where we're describing to
[47:13] automation system how to do things to
[47:15] into more declarative systems
[47:17] we don't want to throw in a lot of
[47:18] jargons but people who work in devos
[47:19] technology most probably know what we're
[47:21] talking about here that is very exciting
[47:23] for us we're also
[47:25] looking at how we can leverage some of
[47:27] the bare metal
[47:28] resources that allowed a lot of cloud
[47:30] providers now we've always been trying
[47:32] to squeeze as much power as we can get
[47:34] and we want to see what
[47:35] will happen when we are going to have
[47:37] the hypervisor anymore maybe maybe we'll
[47:39] get some some more
[47:40] power out of it uh again we we are not
[47:43] until we measure till we measure things
[47:46] and we say benchmarks but yeah i'm
[47:47] excited for
[47:48] these two things one of the most
[47:49] important things i'm excited for we have
[47:50] two new engineers that will join the
[47:52] team on monday
[47:53] so that is that is a big thing hopefully
[47:55] more hands on the keyboard more minds
[47:57] more more people designing all these
[47:59] challenging solutions with us
[48:01] so yeah a lot of a lot of good stuff
[48:02] happening this has definitely been a uh
[48:05] uh a year of growth actually last year
[48:08] was here
[48:09] we've been growing for a while so i'm
[48:11] thinking about it
[48:12] uh over 600 and somewhat people knew
[48:16] yeah let's see all right
[48:20] we've been throwing yeah we've been
[48:21] throwing these softballs let me look for
[48:22] some hard balls here
[48:25] when a server crashes here we go when a
[48:28] server crashes
[48:32] why
[48:39] when a server crashes uh how long is it
[48:41] until that server is ready to go again
[48:43] and is this process automated yes so
[48:47] the server doesn't have to come again if
[48:49] if we are actually in a timer we're
[48:50] shrinking down we are actually have a
[48:52] lot
[48:52] the servers can go away and never get
[48:54] used again there's another pool of
[48:55] servers
[48:56] if we are in a time actually we need
[48:57] resources the server will crash and it
[48:58] will come back in a different new
[48:59] incarnation
[49:00] we'll have new logical name to it have
[49:02] new id to it and i'll become part of the
[49:04] pools
[49:05] of innocences that can host games but
[49:07] yeah
[49:08] nothing nothing has like a long-lasting
[49:11] name or a long-lost
[49:12] existence everything is that the common
[49:14] word that we use in our field is a
[49:15] thermal
[49:16] so these instances are just instances
[49:18] they come and go all the time
[49:20] no one touches them they decide to
[49:22] question their own they get sad
[49:25] ants not cattle cattle not pets right
[49:28] yeah yeah absolutely absolutely
[49:30] ephemeral good word use ahmed
[49:35] [Laughter]
[49:36] uh what benchmarks do you use to
[49:38] determine how a particular build
[49:40] progresses
[49:41] from evocati to ptu to live now before
[49:44] you answer that though
[49:45] i want to clarify that it's nobody in
[49:48] this call that determines whether
[49:50] something goes from one stage
[49:52] to another stage those are those those
[49:53] are calls made by
[49:55] uh you know you know the the directors
[49:57] and above and stuff like that but as far
[49:58] as the benchmarks just speaking to the
[50:00] type of information
[50:01] that we use to make those calls
[50:06] it's a very collective democratic call
[50:09] the way it works
[50:10] whenever we are in the mode of releasing
[50:12] we have the live sync meeting that
[50:14] like one of my favorite meetings we get
[50:17] to have it early in our day
[50:19] kind of like towards the end of the day
[50:20] in europe and we bring up a lot of data
[50:23] whenever we go to btu there are several
[50:25] types of reports
[50:26] one of them is the stability report the
[50:28] stability report tries to model
[50:30] that how much disruption we are causing
[50:33] to the player experience
[50:34] and then we have a player feedback
[50:36] report that comes from the player
[50:37] experience team and it takes an account
[50:39] all the
[50:39] issue council issues the feel of the
[50:42] game if there are
[50:43] specific features in the gameplay qa
[50:46] also goes and takes that
[50:47] that report and goes through and try to
[50:49] reproduce
[50:51] by the morning by the next morning all
[50:53] these like
[50:55] data got collected we have performance
[50:56] data and then then
[50:58] everyone has a case right and it's it's
[51:00] a lot of
[51:01] conflicting factors together that decide
[51:03] sometimes
[51:04] we want to progress faster between waves
[51:07] because we need the
[51:08] concurrency we need more players to see
[51:10] things how how things are going
[51:12] and you get to decide what the messaging
[51:14] is going to be like what's the trade-off
[51:16] okay it's going to be amazing in all
[51:18] these areas and this feature is going to
[51:19] be really bad i think our players our
[51:21] backers will understand that we can just
[51:23] explain
[51:23] avoid this area it will be all right and
[51:26] yeah it's a lot of moving factors when
[51:27] it comes to benchmark it's
[51:30] it's a quantified collected crash
[51:34] information stability information
[51:35] performance
[51:36] information resource usage information
[51:38] all collected together we'll abstract
[51:39] the number in a model
[51:41] we call the stability score and the same
[51:43] side also we have
[51:44] we have hardware working teams that try
[51:46] to collect and summarize the game
[51:47] experience
[51:48] and both of them get together and then
[51:50] we have different goals and different
[51:51] groups
[51:52] and a very democratic way of deciding
[51:54] how things would go and yeah
[51:56] hopefully we make the good decisions
[51:58] every time that's a
[52:00] that's a that's a great answer there's
[52:02] there's there's a ton of hard data but
[52:04] then there's also
[52:05] that um that experiential
[52:09] stuff that we get from from our qa and
[52:11] stuff from the
[52:12] from the rep we use we go to the player
[52:15] experience
[52:16] you know teams you know and get their
[52:17] feedback from the players just like that
[52:19] and all of that gets put into a
[52:21] a gumbo of sorts where we it looks and
[52:24] it creates a picture that's unique for
[52:26] every single
[52:27] uh release candidate and it's it's like
[52:30] you know
[52:30] from this candidate to this candidate to
[52:32] this candidate uh
[52:34] the the exact criteria that determines
[52:36] whether
[52:37] this moves forward and the next step may
[52:39] be different for each one
[52:40] uh so it's a there's no easy a rubber
[52:44] stamp answer for it but uh we use
[52:46] as many tools and uh equipment and
[52:49] people as possible to make the best
[52:51] possibilities
[52:51] even even development teams like some of
[52:54] the game service guys are going to be
[52:55] watching
[52:56] live ptu builds when they're you know to
[52:59] see
[53:00] performance metrics and get a sense of
[53:02] it right and so that's also in the mix
[53:04] you're right it is a hodgepodge of
[53:06] different you're full of [ __ ]
[53:07] you're always there just like kick it
[53:10] just kick it out
[53:11] just push it go go
[53:15] when was in these things he's like i'm
[53:16] on the east coast it's already late just
[53:18] push it
[53:21] time bills uh that's it guys
[53:25] you've done it congratulations uh thank
[53:28] you
[53:28] for taking the time out of your busy
[53:30] days at the end of your week
[53:31] uh to be here on the show with us um
[53:36] it's it's a i i it's not it's not always
[53:39] the uh
[53:39] it's a relatively dry subject uh for for
[53:43] folks and people often ask me why
[53:45] uh why are you doing this i'm like
[53:46] because this shit's important
[53:49] and that's twice i've sworn the last
[53:50] five minutes that's right
[53:52] i'm gonna get an email i'm gonna get an
[53:53] email sorry guys uh we are going to uh
[53:56] we are going to do a raid who are we
[53:58] raiding today uh we are rating a similia
[54:01] uh similia is a streamer in sweden if i
[54:04] remember correctly
[54:06] uh so so check them out um
[54:09] and uh if you if you jump into the raid
[54:11] uh there that when it kicks off here
[54:13] uh tell samilia uh
[54:16] to push it live benoit said push it live
[54:20] ship it push it benoit said
[54:25] what did i say sweden i think i meant
[54:26] switzerland switzerland switzerland
[54:29] so check that tell me where's america
[54:32] it's cool called the outer world
[54:36] i'm just joking i'm just joking uh
[54:39] please send all letters to here
[54:42] uh james austin texas
[54:47] for ahmed for miles for benoit i'm jared
[54:50] take care everybody and we'll see you
[54:52] next week
[55:20] you

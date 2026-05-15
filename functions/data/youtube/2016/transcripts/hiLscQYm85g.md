# Star Citizen: Reverse the Verse 2.9 - UK

**Video:** https://www.youtube.com/watch?v=hiLscQYm85g
**Date:** 2016-09-30
**Duration:** 48:10

## Transcript

[00:36] [Music]
[00:54] hey everybody uh welcome to reverse the
[00:57] verse it is Friday September 30th 20 16
[01:00] I'm your host Community manager Jared
[01:02] hucke uh if you've never seen reverse
[01:04] the verse before reverse the verse is
[01:06] clad Imperium games Community teams
[01:07] weekly informal live stream with the
[01:09] fans uh basically we're going to follow
[01:11] up on a lot of the cool stuff that you
[01:12] saw on around the burst which is our
[01:15] Flagship broadcast every Thursday and uh
[01:18] we're going to follow that up by talking
[01:20] to some of the developers that you saw
[01:21] on the show yesterday uh in this case
[01:24] what the big big uh uh feature on last
[01:27] week's on last week's show on
[01:28] yesterday's show was was the flight
[01:31] balance the flight model changes so we
[01:33] have two guests from Foundry 42 UK to
[01:35] talk about those changes with us uh Mr
[01:37] Johnny javious uh tech technical
[01:40] designer and Mr Andrew Nicholson how you
[01:42] guys doing good thanks jar how you doing
[01:44] you good see so you guys are are
[01:46] technical designers um why don't you
[01:48] tell us a little bit about what that
[01:50] entails what you guys do for star seison
[01:52] and then what you're working on now you
[01:54] know before we start taking questions
[01:55] from do you want to start or should I I
[01:57] think you should Johnny you're the more
[01:59] experienced Technic designer okay you've
[02:01] been around a more traditional Tech
[02:03] designer okay so we a lot of what we do
[02:06] is pretty much everything centered
[02:07] around ships so we'll be involved from
[02:10] even the concept stage uh where we get a
[02:13] ship idea and we kind of work with the
[02:15] concept artists and people like BN and
[02:18] the writers and everyone to make sure
[02:19] we're all getting what we want um and we
[02:23] can kind of spot any technical issues we
[02:24] can see early down the line if things
[02:26] aren't going to fit like the notom
[02:27] metric or something like that um then
[02:30] once we actually start getting the art
[02:31] in that's when we start actually piecing
[02:33] it together and uh making things work
[02:36] putting engines on the ships making sure
[02:38] the flight is bounced
[02:40] properly uh putting all the weapons on
[02:43] making all the seats work anything that
[02:45] you can see that moves or shoots or you
[02:48] know fires any VFX that's going to
[02:50] involve some setup from us so that's
[02:53] kind of the main stay of what tech
[02:55] designers do here um yeah since I think
[02:58] Johnny is more tradition Tech designer
[03:00] who's more about the setup and stuff so
[03:03] where I come in is uh someone who isn't
[03:05] traditional but is totally involved in
[03:07] the process
[03:10] because is the um like like Johnny says
[03:12] that the tuning of the flight and those
[03:15] those weapons that go on the ships
[03:17] making sure that they are not totally
[03:20] skewed or op or whatever that's where I
[03:22] come in got so all those weeks when we
[03:24] have artists on the show and people are
[03:26] like why does this ship do this why does
[03:28] this ship do that and like those aren't
[03:29] the people to ask we now have the people
[03:30] to
[03:33] ask so what have you guys been Johnny's
[03:35] the one to ask Johnny is the one to ask
[03:36] I'm the M be so what what have you been
[03:39] working on for Star Citizen
[03:41] recently um recently um I've kind of
[03:45] been dipping a little bit into not so
[03:48] much system design but kind of partially
[03:49] system design so kind of looking at our
[03:52] missile and weapon systems
[03:54] and um refactoring them in a way not in
[03:57] a major way but just in a way that kind
[04:00] makes things a little bit more
[04:01] especially in the missiles case more
[04:03] modifi modifiable on the ships uh and in
[04:06] the case of weapons we'll we'll probably
[04:08] get into that in a bit but it's kind of
[04:10] tweaks to the weapons to make them feel
[04:12] a bit more
[04:13] unique okay okay and what have you been
[04:15] working on Andrew yeah so when as Johnny
[04:18] says tweaks to the weapons we've been
[04:20] working kind of in tandem on the weapons
[04:23] in the last week or so where firstly
[04:27] been just defining the roles of these
[04:29] weapons s and then you know working out
[04:32] the ranges of all these different
[04:34] factors speed uh lifetime the projectile
[04:37] damage and then once we've got like the
[04:40] ranges then you start putting them in
[04:41] game and starting to see where it
[04:42] doesn't fit where it's totally out um so
[04:46] so I've been back and forth yeah back
[04:48] and forth Excel sheets um getting into
[04:51] game firing the shots going GH no that
[04:53] doesn't look right oh yeah that feels
[04:54] really good yeah there's a lot of
[04:57] numbers changes a bit back and forth
[04:58] between us both and a lot ofest thing as
[05:00] well gotcha okay now we we talk about
[05:02] when we talk about refactoring we talk
[05:04] about you know remodels and stuff like
[05:05] that this is a normal everyday process
[05:08] for game development that's why what's
[05:10] one of the reasons it's development not
[05:11] construction it's you try things you see
[05:14] how it works you know you make changes
[05:15] you try another thing you see how it
[05:16] works you make changes you know this
[05:18] isn't this is this is normal this isn't
[05:19] some some major oh we going to pull our
[05:22] hair out kind of thing uh people see it
[05:24] because that's one of the things that
[05:25] separates Star Citizen from just about
[05:27] every other video game project in the
[05:28] world is that we're running a live
[05:29] environment while we're in game
[05:31] development so folks get to see this
[05:34] process that that that happens in all
[05:35] game development and it's it's exciting
[05:38] but it can be you know confusing
[05:40] sometimes for people you know why is
[05:41] this changing why do why do things keep
[05:42] changing and that's at the core of all
[05:45] video game development so with that in
[05:47] mind uh flight model balance flight
[05:50] model change um let's explain that to
[05:54] people let's explain what that is
[05:56] exactly because it's when it's hard for
[05:58] it's hard to always wrap your head
[06:00] around what a flight model is so why
[06:02] don't you why don't you tell us what a
[06:03] flight model is and and what ex what
[06:05] we're actually doing right now okay well
[06:08] I think this is one of the things we
[06:10] didn't clarify enough around the ver
[06:12] segment this these aren't changes per se
[06:15] to what what our flight model is which
[06:17] is you know we we've got a very um
[06:19] physics based which is real realistic as
[06:23] much as it can be um we've not made any
[06:25] changes to that really it's it's about
[06:29] um
[06:30] opening up some of the flight model to
[06:32] designers to then change parameters of
[06:35] the ship or ships uh so we can have or
[06:39] easily modify the speeds of the ships
[06:42] easily the stop times and rotations you
[06:45] know it it's really taken what's there
[06:48] already yeah with the model I mean to
[06:50] explain the model it's yeah the the
[06:53] model is the is the is the is the
[06:55] algorithm it's it's the it's the program
[06:57] it's the thing that takes all of the
[07:00] numbers and crunches them and outputs
[07:03] something the model itself is the same
[07:05] we are changing the attributes that the
[07:08] model you know uh uh interacts with
[07:11] right we're just lowly designers when it
[07:13] comes to that I mean we've got the the
[07:15] physics engineer who is the the
[07:18] professor who made that we're just it
[07:21] making the the ships fow different ways
[07:23] to see what is better what's identify
[07:27] you know as you say would doing this all
[07:30] live and people can see it so it's a
[07:32] it's kind of a unique process um but
[07:35] it's it's it's a fun one I think yeah I
[07:37] mean feedback we try and get a lot of
[07:38] the testing out of the way here so we're
[07:40] not pushing and pulling people like too
[07:43] much like it's a bit confusing when
[07:45] you're playing a game and everything
[07:46] completely changes then it'll change
[07:47] back again then it'll change again and
[07:48] obviously that's part of the fun but I
[07:50] think after a while people have start to
[07:51] get sick of it especially the amount we
[07:53] change in studio here so it's always
[07:55] good to go through that refinement
[07:57] process before we get all of the new
[07:58] numbers out to backers got you yeah so
[08:01] the so the model is the same that that's
[08:03] that that was the biggest confusion from
[08:05] ATB we haven't changed the flight model
[08:07] we're not changing the flight model the
[08:08] work that John pritet and his team did
[08:10] you know that's solid we're really happy
[08:12] with that we're changing the attributes
[08:13] the speed the the the the um
[08:16] maneuverability the you know the damage
[08:18] all that stuff you know what missiles do
[08:20] what weapons do uh and stuff like that
[08:22] so but the model itself the thing that
[08:24] computes all of that and makes it into a
[08:26] playable game that's that's the same so
[08:28] untouched John you know that's
[08:31] that's get every day gotta so we we'll
[08:35] start in with some questions from the
[08:36] fan fans right off the bat uh will the
[08:38] new flight model again will the new
[08:40] flight it's the same flight model be
[08:42] different in Arena Commander than in the
[08:44] Pu so will ships have handle differently
[08:46] in Arena Commander than they will in the
[08:47] Pu no that that wasn't the intention
[08:50] everything will be this the same across
[08:52] all modes yes um we want to I think
[08:55] something we didn't have previously is
[08:57] the is the cruise speeds in Arena
[08:58] Commander
[09:00] um so with the changes making things
[09:03] slower um and if we make the arena
[09:05] command areas bigger eventually we want
[09:07] to we want to get Cru in there and and
[09:09] have that as part of that game play uh
[09:11] spawn points will obviously be really
[09:12] important then M to see how it's going
[09:14] to balance but yeah we'll have it the
[09:16] same across yeah obviously while they're
[09:18] kind of separate modules we don't want
[09:20] to have too much of a disconnect between
[09:22] the two otherwise it be super jarring
[09:24] you know going from one flying sh and in
[09:26] in one and then going to the other and
[09:27] then thinking why can't I fly this same
[09:29] way we considered the burner as well
[09:33] Arena command as the arcade mode if if
[09:35] we're going
[09:36] to make make
[09:38] fuel very consumable then why not
[09:41] consider some kind of pickups or
[09:44] something like that it it was talked
[09:45] about we'll see if that comes in but
[09:48] yeah it'll be mostly the same but
[09:49] gamified yeah I mean ultimately what
[09:51] arena Commander is supposed to be is it
[09:53] is you know the instant test bed for
[09:55] flight mechanics and stuff so it doesn't
[09:57] it doesn't serve its purpose if it
[09:59] Strays too far from what you do in the
[10:01] Pu so all right another question from
[10:04] the fans uh were different controller
[10:06] setups taken into consideration with the
[10:09] rebalance so when you guys are are
[10:11] testing this stuff are you're not just
[10:12] all you know uh hotas you're not just
[10:14] all mouse and keyboard different folks
[10:16] work with different controller schemes
[10:18] abely yeah
[10:20] um something from being in QA myself
[10:23] it's like you need to make sure every
[10:26] single device is is is tested when this
[10:28] happens um my desk is covered in all
[10:31] kinds of peripherals I don't know if you
[10:32] saw them around the verse I had the
[10:33] steering wheel yeah remember when I was
[10:35] there in the office like I came right to
[10:37] you and asked you about the the farming
[10:39] the Farming Simulator tool yeah it's all
[10:42] balanced around the steering wheel
[10:44] sorry uh but yeah like we pretty much
[10:46] everyone in even in the tech design
[10:48] Department favors their own control
[10:50] method we've got someone who pretty much
[10:51] exclusively likes to play with a
[10:53] controller we've got people who like
[10:54] hotas and we've got people who love
[10:55] mouse and keyboard so we get feedback
[10:57] from everyone as we're these changes
[10:59] anyway cuz they see them every day yeah
[11:03] uh now one of the things we' talked
[11:04] about is that the the flight speeds are
[11:06] slowing down across the board you know
[11:08] that's that's to make uh Chris talked
[11:10] about it a bit in this hosting segment
[11:12] uh it's to make you know combat more you
[11:13] know immersive less jousting pass you
[11:16] know let you you know follow your
[11:18] targets and stuff um will missiles also
[11:21] be slowed down question from one of our
[11:24] fans yeah I think well because you still
[11:28] you still have access to the the burner
[11:29] speeds and really what we've done is is
[11:31] have the sem speed so when you get into
[11:34] situation you are moving slower we still
[11:38] have uh the ships can still reach the
[11:41] the other speeds you can still after bur
[11:43] you can still cruise to get there um
[11:46] it's something I'm going to have to play
[11:48] test and get people to try because I
[11:49] don't want it to be you escape from
[11:52] these missiles too easy and we've had
[11:53] that before where they don't have any
[11:55] impact because you just all right I'm in
[11:56] Cru and I'm gone now and we still don't
[11:58] have the penalties for spooling up on
[12:00] cruise uh on that side so um I think uh
[12:04] they'll probably come down a bit because
[12:06] we don't want people in sem to just be
[12:08] bombarded by missiles the time but we'll
[12:11] have to see on that all right uh another
[12:14] question from the fans it seems like
[12:16] there's barely 10 seconds of boost fuel
[12:17] in some ships will boost or After Burner
[12:20] be updated with these changes now this
[12:22] was actually mentioned in ATB yesterday
[12:24] uh we are making some changes to how
[12:26] boost and After Burner work what can you
[12:27] what can you say about that
[12:29] okay um so yeah firstly we we definitely
[12:32] want to give more fuel so that you've
[12:35] got a prolonged use of the afterburn
[12:37] because you want After Burner to be more
[12:38] prominent and more important in a in a
[12:40] combat situation if you have it if you
[12:42] have the fuel um so we'll probably give
[12:46] it more less of a less of a draw rate
[12:49] and then a slow climb back up
[12:55] um sorry what was the what was the other
[12:57] part on changes to boost and After
[13:00] Burner will will we we be adjusting
[13:01] their their fuel balance the answer was
[13:03] yes yes yes sorry I thought second after
[13:07] After Burner is kind has kind of Fallen
[13:09] to the side you know in in in recent
[13:11] months and what not so so a lot of these
[13:13] changes will are to make After Burner a
[13:15] more attractive option another option
[13:17] that you you should use in dog fighting
[13:20] so yeah the answer is yes we'll be
[13:22] giving more fuel for not or more fuel or
[13:25] tweaking the amount of fuel After Burner
[13:27] actually Burns you know yeah so we won't
[13:30] as fast yeah okay um another question
[13:33] with fans have these changes trickled
[13:35] down or impacted uh any larger ships
[13:38] like Capital like like uh the Edris or
[13:41] the javelin um people are excited about
[13:43] you know Capital ships eventually coming
[13:45] online uh do do do these changes affect
[13:49] those at
[13:50] all um not so much because of the the
[13:54] sheer mass of the ships when we've when
[13:57] we've had these ships flying
[14:00] it's always been let's push it to the
[14:01] Very extreme of how long the longest
[14:05] acceleration the slowest rotation uh
[14:08] speeds so so not much really has changed
[14:11] there you'll still it's still a case of
[14:13] it's moving a big Juggernaut through
[14:15] space and it feels like a like like that
[14:17] should so it hasn't really affected them
[14:19] too much okay uh do these new speeds
[14:23] affect blackout or red out
[14:26] thresholds no um
[14:30] they'll still be kind of where they were
[14:32] I mean after burner covers that top area
[14:35] so if you're after burning a lot you
[14:37] still have the same risk of blacking out
[14:39] if you're pushing it to its limits got
[14:41] so that won have come in we have
[14:44] um talked about that a bit I mean just
[14:47] bringing the speeds down makes it less
[14:48] likely you're going to hit those
[14:49] thresholds MH some people were expecting
[14:53] us to bring the the thresholds down as
[14:55] well that really was getting away from
[14:58] us trying to make it um less of a chall
[15:03] less of a challenge I'd say m like some
[15:06] people had a great with me saying it was
[15:08] simplifying the the flying model as well
[15:10] but really it's not it's kind
[15:12] of it's making it more playable really
[15:16] yeah yeah it felt like the obvious
[15:19] problems with what we had um so we're
[15:22] tried to combat that yeah and again that
[15:24] is this is a normal part of game
[15:26] development we we're trying a thing
[15:28] we'll get that get those changes out to
[15:30] evocati and then we'll get those changes
[15:31] out to The Wider PTU and then we'll get
[15:33] those changes out to our live
[15:34] environment which is absolutely still a
[15:36] test environment All Star C environments
[15:38] our test environments we will get
[15:40] feedback from the smaller group then the
[15:41] larger group and then the largest group
[15:43] possible and you know if changes are
[15:46] necessary after that we'll make those
[15:48] changes too I mean these changes are
[15:49] made because of feedback from the fans
[15:52] so you know that's that's the process so
[15:54] nothing nothing is final nothing is is
[15:56] set in stone this is the next thing that
[15:59] we experimenting with that we're trying
[16:00] with so we're excited to get it into
[16:02] folks hands so one more question then we
[16:05] we get we have uh we have our next guest
[16:06] here let's see what do we got here
[16:09] um uh okay so not just missiles how will
[16:12] weapons ranges be adjusted on the new
[16:14] flight
[16:15] model so uh weapon ranges in general are
[16:20] going to change on a per weapon basis so
[16:23] uh we've kind of split weapons into
[16:25] bands a bit more now cuz we found that
[16:26] the weapons we had all had a very
[16:28] similar r R they had very similar fire
[16:30] rates even between cannons and
[16:32] repeaters um with the exception probably
[16:34] being gatlings cuz they fire quite a bit
[16:36] faster but yeah uh range wise we're kind
[16:39] of going with the approach that cannons
[16:41] will be your long-range engagement
[16:43] option so they will be increased from
[16:46] kind of what the normal is repeaters
[16:48] will probably meet somewhere in the
[16:49] middle gatlings will probably be down at
[16:51] the lower end so we've kind of split
[16:53] those on a per weapon basis but you
[16:55] could probably talk a bit more as to
[16:57] kind of what the actual ranges are but
[16:58] that again that's something that we're
[17:00] kind of going back and forth on a lot at
[17:01] the moment yeah like we're putting them
[17:03] in game at the moment that's that's
[17:06] totally what we're doing like today was
[17:07] like putting these values in giving them
[17:09] a test seeing if it's too far um Rangers
[17:14] were coming down in in my mind I wanted
[17:17] it to be like if the combat's slowing
[17:21] bring the ranges in and see how that see
[17:25] if that's beneficial to what we're
[17:26] trying to get and that's what would
[17:28] that's like that's what we're testing
[17:30] right now um like Johnny says the
[17:32] Cannon's still
[17:34] around I don't know 45,000 range
[17:38] possibly maybe closer and obviously
[17:40] they'll get bigger as the gun gets
[17:42] bigger as well CU especially when you
[17:44] get start getting to bigger ships you'll
[17:45] probably wanting to engage from further
[17:46] distances yeah that that's me talking
[17:48] like size five cannons mhm maybe their
[17:52] maximums
[17:55] um okay I don't know all right so so
[17:59] we'll let you guys go uh everybody we're
[18:00] going to play a short video and then
[18:01] we're going to come back with uh lead
[18:03] technical designer John crew master of
[18:05] spaceships and uh will Maiden who who uh
[18:08] working on the new UI systems so we'll
[18:10] be back in just a minute wait for the
[18:13] people
[18:44] [Music]
[19:03] and we're back uh W to part two of
[19:06] reverse the verse uh with us now are is
[19:08] lead technical designer Mr John crew and
[19:11] uh technical designer uh Mr will Maiden
[19:13] how you guys doing really well thank you
[19:16] good so uh John uh we've had we've had
[19:19] you on RTV before uh we had you on an
[19:22] ATV segment a long time ago we did when
[19:23] we did the very first starf tour if I
[19:25] remember correctly yes that was like
[19:27] record a huge amount
[19:30] thank you for coming back uh well
[19:33] um my first time yeah hey it's good good
[19:36] to be finally on where the popular kids
[19:39] are apparently yeah yeah I've done a
[19:42] couple of ATVs but this is my first time
[19:44] doing this this is good fun well thanks
[19:46] for coming on all right so uh we uh
[19:49] Johnny and uh Andrew already took us
[19:51] through you know what what tech
[19:52] designers do and stuff like this uh will
[19:54] why don't you why don't you start by
[19:55] telling us why you're trying to change
[19:57] the game Into Golf citizen
[19:59] well like it felt like there could be
[20:02] more Fairways so more relaxing uh at the
[20:07] club with a mix master no why don't you
[20:10] start by telling us uh what what what uh
[20:12] what are you working on for Star say and
[20:14] uh what your scope of work right now uh
[20:17] right now um I did a I've just been
[20:20] looking at cargo the last couple of
[20:21] weeks um and radar and scanning most
[20:24] recently I talked about it yesterday on
[20:26] around the verse um just before that I
[20:30] was designing the Taren um so I was
[20:33] doing the Q&A for that when it uh when
[20:35] it went on sale um but keeping an eye on
[20:37] that Bea of a ship but that's all kind
[20:40] of because it's an exploration ship and
[20:42] my work on radar and scanning it's all
[20:43] kind of come together now um so
[20:46] hopefully I'll be looking at exploration
[20:47] and um that kind of data Gathering all
[20:50] right and John what are you working
[20:53] on I don't know everything changes so
[20:56] quickly uh so at the moment we're
[20:59] obviously doing cicon stuff we got quite
[21:00] a few interesting stuff things to show
[21:02] there uh we're looking to do star Marine
[21:05] stuff 2 six balance changes it's just
[21:08] sort of leading the team that we have
[21:10] here which is quite large now so it's
[21:12] it's gone from just being me to eight of
[21:15] us in the last two years or so so lots
[21:19] of stuff to keep track of lots of stuff
[21:20] to do all right so we will jump right
[21:23] into the fan questions uh so right off
[21:26] the bat and as anticipated the very
[21:28] first question
[21:29] at at the is is uh it seems a lot of
[21:32] people don't agree with the golf swing
[21:34] style of scanning can you go into detail
[21:36] on the thought process that went into
[21:38] this
[21:39] decision okay so just to clear the a
[21:42] really the the golfs the golf swing um
[21:47] is totally a first pass implementation
[21:50] um the thinking here is that we want a
[21:52] way of exposing hidden ships you've got
[21:55] a ship that's say it's a saber and it's
[21:57] running quiet and it's out there and you
[22:00] want to find it you'll charge a pulse
[22:02] and you'll release it and all of a
[22:04] sudden that pulse will agitate the
[22:06] signatur is being given off by that ship
[22:08] and all of a sudden aha I found you for
[22:10] like five six seconds or something and
[22:12] then it fades away so we need some
[22:14] gameplay there
[22:16] where uh the hunting ship can expose The
[22:20] Hiding ship so this this this the system
[22:24] that you've seen yesterday is totally a
[22:26] first pass um
[22:28] what we're looking at having is a system
[22:30] that essentially is going to build the
[22:32] energy that you're putting into a uh
[22:35] into the radar and over time that's
[22:37] going to build and build and build and
[22:38] build and build and the longer you hold
[22:40] it the more power it's going to generate
[22:43] the more it's going to expose The Wider
[22:44] it's going to fetch uh information
[22:47] from but with that comes a risk of I'm
[22:50] going to push my luck too long and it's
[22:52] going to blow up in my face so we want a
[22:55] system that you can fail something that
[22:57] you can really screw up and all of a
[22:59] sudden you're not you thought you were
[23:01] the hunter but now you've just blown
[23:03] your radar out you can't see for the
[23:04] next two minutes while you're trying to
[23:06] cool it down oh my God this power going
[23:09] to the wrong places everything's on fire
[23:11] um it gives that time that ship time to
[23:14] escape aha so we wanted we wanted a we
[23:17] want a system where it's not it's not a
[23:20] done deal you don't just press ping and
[23:22] everyone becomes available yeah it's
[23:24] something that you've got to really try
[23:25] to to get right and now this you said
[23:28] this is the first implementation now
[23:30] that's one of the things that separates
[23:32] star system from other projects is that
[23:33] we are showing the first implementations
[23:35] of systems that will iterate and
[23:37] continue to change uh this is also uh
[23:39] the first implementation of a of a
[23:42] non-combat system on a combat ship this
[23:46] is this is how scanning this is the
[23:48] first impation implementation of how
[23:49] scanning will work on a combat ship you
[23:53] know on a dog fighter but that's not
[23:55] necessarily you know how scanning will
[23:57] work you know when you're on a Cru
[23:58] station on a constellation or how
[23:59] scanning will work when you're in a
[24:00] cruise station on an nid why don't you
[24:02] talk to to us about about that that's
[24:05] absolutely right so when you're in a
[24:07] single CER you control everything um you
[24:11] control the scanning the radar as well
[24:13] as the guns and and everything else so
[24:15] there's a lot to do so we simplify what
[24:17] you've got to do or we we don't give you
[24:19] everything that say if you were the man
[24:21] at a or a woman at a station on a cap
[24:25] ship and your job is to find the sneaky
[24:27] ships that are out there find the life
[24:30] support of some guy who's ejected and
[24:32] you really need to find them before they
[24:33] die you know if that's your job um we're
[24:37] going to give you so much more tools for
[24:39] that um we've seen it with the terapin
[24:41] there's a utility mountain and a
[24:43] separate scanning station their job will
[24:45] be uh to use the tools but but for
[24:49] combat ships you don't need that um and
[24:52] the stuff we shown we just have a lot of
[24:54] combat ships right now so that's where
[24:56] our Focus has been it's like what's a
[24:57] very simple approachable system that
[25:00] combat Pilots can use and then that we
[25:02] can build on that for the exploration
[25:05] and the bounty hunting uh in the future
[25:07] exactly a lot of people are worried that
[25:10] that's it just going be sat at the
[25:12] station on the addess yeah pressing the
[25:16] button that is literally the very first
[25:20] yeah and we're looking at things like
[25:21] I've seen some some really cool
[25:23] suggestions on the forums um uh and
[25:26] internally as well people have have
[25:28] suggested justed cool things about being
[25:30] able to scan Way Beyond you know it's
[25:32] like looking with a radio telescope at
[25:34] far beyond Stars this idea of of using
[25:37] long range sensors to to see beyond your
[25:39] limits the radar is just what's around
[25:42] you um we've got much more exciting
[25:45] plans for for long range centers and uh
[25:48] sensors uh that are going to gather this
[25:51] data that regular equipment just can't
[25:53] pick up awesome awesome so we've we've
[25:56] basically shown just the earliest
[25:59] Glimpse small you know implementation of
[26:03] a much larger system and that's
[26:04] something that's only really been
[26:05] possible lately because we've got item
[26:07] 2.0 coming through so we can finally
[26:09] start to have uh systemically generated
[26:12] uh signatures from ships when you put
[26:14] something in that runs hotter it's going
[26:16] to generate more infrared if you put
[26:18] something in that's drawing more power
[26:19] it's going to generate more um
[26:20] electromagnetic fields so before we just
[26:23] had a a Boolean system of you can either
[26:25] detect them or you can't and now we're
[26:27] getting into these shades of gray where
[26:28] maybe you can detect them maybe if I put
[26:31] a bit more of a pulse out maybe I can
[26:33] find you so it's only in the last couple
[26:35] of weeks really that we've started to to
[26:37] see this stuff come online and then
[26:39] we've been able to put this first pass
[26:40] in to say how does this play and then
[26:42] internally and getting some feedback and
[26:45] so it's a it's a gradual process but
[26:46] it's only really started in Earnest
[26:47] lately yeah so it sounds like you know
[26:49] when when this is fully implemented
[26:51] it'll take a measure of finesse you know
[26:53] to actually get the best results because
[26:55] you're not just going to want to send
[26:56] out the biggest baddest pul every time
[26:58] because you know it's like active sonar
[27:01] you're going to let them know where
[27:02] you're at yeah exactly and it's a
[27:03] two-sided thing where the guy being
[27:05] hunted may maybe doesn't know where the
[27:08] guy hunting him is and like submarine
[27:10] warfare has been a big a big influence
[27:12] in how this kind of stuff works out and
[27:13] so if you ping you give yourself away um
[27:17] but if you do it right then the guy's
[27:19] exposed and but if you do it wrong it
[27:22] it's going to backfire on you so and
[27:24] yeah things like when you charge this
[27:27] pulse it's going to leave you exposed
[27:29] your radar is going to disappear because
[27:30] all your power is going to charging the
[27:31] pulse so all of a sudden you're blind
[27:34] and so and that's that's that's
[27:35] terrifying if if you're relying on that
[27:37] to find this guy that's out there and
[27:39] you're charging all of a sudden your
[27:40] your sent it goes black because all the
[27:43] power is going into to building and
[27:44] building and building and building and
[27:46] then when you release it and if you
[27:47] release it wrong you not only you're
[27:48] blind but you've sent out a big flare
[27:50] saying I'm here and now I've screwed up
[27:52] royally now I am very exposed and very
[27:55] weak gotta and item 2.0 going back to
[27:58] that really helps with getting lots of
[28:01] seats talking to lots of items all
[28:04] together we can do it at the moment but
[28:06] anyone that's played a lot of multi crew
[28:08] stuff you sort of Hit the limitations
[28:10] very quickly where this person is trying
[28:12] to do this they can't really influence
[28:14] what this other person's in charge of
[28:15] but the item two set up in all the ships
[28:18] really allows one person to talk to two
[28:21] items that another person in another
[28:22] seat is has control over it properly
[28:24] prioritizes it so a lot of systemic
[28:27] gameplay will come out of that very
[28:29] easily which we've been struggling with
[28:32] a long time and it's finally going to
[28:33] get there it's the whole why can't I
[28:35] slave my turret to the pilot seat that's
[28:38] exactly the sort of stuff that will come
[28:40] straight out of this it's almost
[28:43] here all right another question from the
[28:45] fans uh we sort of touched on this how
[28:48] will stealth ECM and anti-an devices
[28:50] work with scanning are we ready to talk
[28:52] about that a little bit so to start with
[28:56] stealth um obviously uh we we covered
[28:59] this a bit on the ATV but if you didn't
[29:01] see we're looking at in space at least
[29:04] um infrared electromagnetic and
[29:06] cross-section as these are the
[29:08] signatures that are going to make you
[29:09] visible to other people so how
[29:13] physically large your ship is is going
[29:14] to be a factor in that now maybe we've
[29:16] got some um some hole plating or maybe
[29:19] sorry maybe you've got some whole
[29:20] plating which will even though you're a
[29:23] big ship it's it's not quite visible or
[29:26] it it disguises against the background
[29:28] so you can't pick it up um same with uh
[29:31] heat masking uh your your equipment so
[29:34] it doesn't produce as much heat same
[29:36] with power drawer obviously buying um
[29:39] the specific items that we will make
[29:41] that were are tailored for stealth so
[29:43] they run deliberately quiet um in one
[29:46] way or another but maybe they don't you
[29:49] know pack the biggest punch so you could
[29:51] have some stealth uh power plants that
[29:54] have a really low em feel because
[29:56] they're hardened but they don't put out
[29:58] as much power as you'd like so you can't
[29:59] run everything at full whack um so when
[30:02] you come to kitting out your ship you'll
[30:04] be looking at at signatures will be a
[30:05] very big part of okay this does a lot of
[30:08] good stuff but it's also very loud so
[30:10] what's the tradeoff there what do I want
[30:11] to buy that's going to help me complete
[30:14] my mission do I want to be detected or
[30:15] do I want to really suck it to them um
[30:18] so stealth is going to be is is going to
[30:21] be all kind of driven by the the items
[30:23] um well driven by some of the items um
[30:25] and then for what was the ew war did you
[30:28] say or ECM anti- scan stuff like that is
[30:32] oh anti- scan yes so when you actually
[30:35] get a contact uh and there there's a
[30:36] separation before we had the ra the
[30:39] scanner was kind of this one big it's
[30:41] everything it's radar and scanning and
[30:43] we've separated them lately so that the
[30:45] radar detects contacts um and the
[30:47] scanner allows you to get information
[30:49] from it so as long as you can see that
[30:51] contact you can draw information out
[30:54] which is why St saying quiet is so
[30:55] important um but once I've got you and I
[30:59] can start scanning and there's a I think
[31:01] you saw kind of briefly a little
[31:03] progress bar that's going to start
[31:04] bringing information through um we're
[31:06] going to allow you to place item sub
[31:09] items on those items that'll be
[31:11] hardening so it takes it takes longer to
[31:13] scan that individual item so if you
[31:15] really don't want them to know about
[31:16] your cargo container or the abilities of
[31:19] your guns you can stick additional
[31:21] upgrades onto those that will that will
[31:23] harden them um whole plating will stop
[31:27] will slow slow down the penetration of
[31:29] scans shielding will um if you don't
[31:32] want to be scanned you can hide behind
[31:33] asteroids and things they'll break line
[31:35] of sight and make it harder to scan um
[31:37] so situational positional um things you
[31:41] can do with just getting out of there um
[31:44] also you need a Target you need to be
[31:45] actually aiming at the guy so fly very
[31:48] far away you're you're you're answering
[31:52] a bunch of these questions that we have
[31:54] hued up so there's like I don't need to
[31:56] ask these ones cuz you're already
[31:57] covering
[31:58] um but we do have one question a very
[32:00] serious question it appears if I am
[32:02] scanned while on foot well running away
[32:05] in a zigzag Serpentine pattern help me
[32:08] uh well it depends who's scanning you if
[32:10] there's a ship hovering above maybe not
[32:14] um the the way scanning is going to work
[32:17] is that if if I've got eyes on
[32:19] you and you're dead centering my retical
[32:22] I'm probably going to have a really easy
[32:23] time scanning you if you if I don't move
[32:26] and you run away that's going to take
[32:27] long because you're further away from my
[32:30] kind of line of the center M if I turn
[32:33] to keep keep my track on you then you
[32:34] can run all day and you just be scammed
[32:36] tired but then yeah totally hide behind
[32:39] things get things in the way um it's the
[32:42] the trick there is to be not be
[32:45] uh well not be predictable but not be
[32:47] seen in the first place um and then it's
[32:50] then it's all about well hardening the
[32:51] gear that you have to make it harder to
[32:53] see what you've got because they might
[32:54] scan you and they say hey you're Jeff
[32:56] and you're over there but you've got a
[32:59] gun but my sensors can't actually tell
[33:01] what your gun is right away um and I
[33:03] can't actually tell if you've got a
[33:04] criminal record because I I don't have a
[33:07] chip on my computer that speaks to the
[33:09] police database or something so there
[33:12] are ways you can get around being scan
[33:14] but a zigzag maneuver is probably you
[33:17] you're probably better off just
[33:18] attacking the guy that's scanning you I
[33:21] however there's there's a possibility
[33:23] sorry to jump in no go ahead of of not
[33:25] being able to know you're being scanned
[33:28] in the first place so if I've got a
[33:30] really good
[33:32] scanner um and I'm scanning you I could
[33:34] be scanning you all day and you don't
[33:35] even know that I've I can see you over
[33:37] there um but likewise if you're really
[33:40] paranoid about being scanned maybe
[33:41] you've got some gear on your comp on on
[33:43] your on your ship that's incredibly
[33:46] sensitive so it's the second it detects
[33:49] you're being scammed you're being
[33:50] scammed to bought Oh I thought I was
[33:52] alone out here so you know if you if
[33:55] you're smuggling let's say and you've
[33:57] got a cargo full of illegal spice and
[33:59] you're running to the border and all of
[34:01] a sudden you're being scanned like eject
[34:03] get rid of that stuff but uh and so you
[34:07] may be less worried about them seeing it
[34:09] and more worried about being able to
[34:10] detect if you're being scanned in the
[34:11] first place because with one of the one
[34:14] of the goals of ships like the terapin
[34:18] this uh this scout these these ships
[34:20] that can surveil other ships is that
[34:23] they might jump in stay super far back
[34:25] and just observe the whole Fleet and
[34:28] scan everyone without them even knowing
[34:30] they've been scanned in the first place
[34:31] and then leave and sell all that good
[34:33] good information so if you've got some
[34:35] Secrets maybe you've got some scan
[34:38] detection on board as well not to self
[34:42] don't ask Will joke questions he'll take
[34:44] them
[34:47] seriously everything's serious no it's
[34:50] good thank you the answer the answer was
[34:53] better um another question for the fans
[34:55] can you fake a larger em or
[34:58] cross-section could a a small ship
[35:00] pretend to be a larger ship you know to
[35:04] to to to throw people off just maybe to
[35:06] scare people cross-sections probably a
[35:09] lot harder to do um because it is
[35:12] physical size you could do it with a bit
[35:14] of chaff might help there em is
[35:17] definitely possible there's um a lot of
[35:19] the items have pools that they fill up
[35:22] that it's like their little mini backup
[35:23] MH um and the EM signature is quite
[35:28] often just a multiplier of how much
[35:29] energy is in those pools so if you empty
[35:31] them and then quickly refill them and
[35:33] keep doing that you're going to have
[35:34] this pulsing Big Em signature that's
[35:38] going to lure people in um same with i
[35:41] al though that's more of a component of
[35:43] heat so it's going to take longer for
[35:45] the coolers to get rid of it than it is
[35:47] for a power plant to if you turn your
[35:49] shields on and off they're the Shields
[35:51] and your power plant are the two biggest
[35:52] em contributors so if you're sitting
[35:55] there toggling them like crazy you're
[35:57] going to be lit up like a Christmas tree
[35:58] for whatever reason you want to do that
[36:00] for it' be interesting to see how
[36:02] players manipulate that system to asz
[36:05] you know if you're a cross-section you
[36:06] know maybe they've got stealth plating
[36:08] or something so if you're seeing a
[36:09] larger em you're seeing a larger you
[36:11] know IR SE signature but a smaller
[36:14] cross-section it's like well maybe you
[36:15] know they they've got stealth plating
[36:17] you know it could still be a larger
[36:19] ship another thing about cross-section
[36:21] is it is actually three-dimensional the
[36:23] signature that we have in game so if
[36:25] you're looking at a saber on got it
[36:28] looks tiny but if it just rolls it's
[36:32] suddenly a much larger signature well
[36:34] relatively larger sa small anyway but it
[36:38] is worked out in real time based on the
[36:40] angle you're at actually now now I'm
[36:43] imagining Idris Pilots because Idris is
[36:45] so wide you know but not necessarily so
[36:47] tall you know flying flying
[36:50] perpendicular so then you've got to
[36:52] consider if you're if you see a ship and
[36:54] that's got you you don't want to just
[36:56] turn and BK
[36:58] dis you want to slowly rotate and keep
[37:01] the thinnest side possible so especially
[37:03] if it's got lots of thrusters on the top
[37:04] and bottom because as soon as you do
[37:05] that massive cross-section Thruster
[37:07] you've got all your IR emissions coming
[37:09] out from the maneuvering thrusters you
[37:11] Noy
[37:13] mistake uh how does scanning work with
[37:15] other objects uh besides ships like
[37:18] asteroids and and and stuff well
[37:21] obviously asteroids have got a huge
[37:23] cross-section so they've kind of got
[37:25] built-in size um already uh stars and
[37:30] things will have heat uh so you'll
[37:33] already be able to detect them and then
[37:34] it's just a case
[37:36] of getting them lined up and scanning
[37:38] and see what's on board and so you'll
[37:39] you'll find information um the same way
[37:42] that if you scan a ship and you find out
[37:43] its load out of of guns and who's on
[37:45] board and cargo what have you you'll
[37:48] look at a you look at an asteroid and
[37:50] you'll scan it and if you know if you've
[37:52] not got anything if you're at a fighter
[37:54] and you've just got your standard
[37:56] scanner you'll see
[37:58] it's a rocky
[37:59] asteroid but if you install yourself a
[38:03] mining scanning upgrade if you install
[38:06] yourself an expiration scanning upgrade
[38:09] all of a sudden it's like oh I'm getting
[38:10] all these signals and I know what they
[38:11] are because this is a mineral and this
[38:13] is some gas gotcha so you'll be able to
[38:17] for a little extra like you'll
[38:19] specialize in your ship I want it to be
[38:21] I'm going to set this up ship up to
[38:22] be uh scanning asteroids so you bring
[38:28] your mining gear you've got a mining
[38:29] laser let's say you let's say you're in
[38:31] the prospector and you're just scanning
[38:33] Asteroids for
[38:35] days and then it just starts to tell you
[38:37] instead of what guns and cargo it's got
[38:39] on board it's got
[38:41] 110,000 units of Steel oh you can't mind
[38:45] steel coal or whatever or diamonds gold
[38:50] um or there's some gas giants and here's
[38:52] some pockets of hydrogen that you can
[38:55] start to extract you have like three
[38:58] ships at the same asteroid you could
[38:59] have a freelancer a Carrick and a
[39:01] prospector all there side by side
[39:04] looking at this rock and the freelancer
[39:06] it's a rock it's this big it weighs this
[39:08] much the Carrick knows a bit more it's
[39:10] got the extra scanners it knows what to
[39:12] do it's like oh this composition of
[39:14] stuff the prospector's got that and then
[39:16] it goes this is where the good stuff is
[39:19] here I'm going to go over here
[39:21] and those specialized ships com with
[39:24] those things by default but you can
[39:26] always take you could take your Aurora
[39:28] and you could put the mining scanner in
[39:29] it and whilst it might not do you a
[39:32] great deal of good because you won't be
[39:33] able to put like mining lasers on it to
[39:36] get everything out you'll be able to go
[39:38] I went here I found this mining laser
[39:40] I'm going to go back there in my
[39:41] prospector or tell my buddy with the
[39:43] prospector exactly this is where this is
[39:46] that's a good point to make and and it
[39:47] even goes back to the previous uh
[39:49] conversation about the the the the
[39:51] flight balance changes you know these
[39:53] these are all the default loadouts of
[39:55] these ships you will be able to swap out
[39:58] components left and right from you know
[40:00] engines to power plants to that will
[40:04] allow you to change the flight the
[40:06] flight charact not just the flight
[40:08] characteristics but the you know the
[40:10] things like the scanning characteristics
[40:12] um so I mean what people have now are
[40:15] all default loadouts you know when the
[40:17] component system is fully online in in
[40:19] all of its scope and Glory you know
[40:21] people are going to be able it's it's an
[40:23] aurora that will is flying may handle
[40:27] very differently from an aurora that
[40:28] that that John kits out you know that's
[40:31] an exciting aspect of Star Citizen um
[40:34] when you talk about the different
[40:35] scanners the different types of scanners
[40:37] um are there also different res will
[40:39] there is there any talk about different
[40:41] resolutions like are there some scanners
[40:44] that if you had three ships in close
[40:45] proximity they would look like one
[40:47] because it's a low res and if you got a
[40:49] better quality scanner that you would
[40:50] actually be able to tell their three
[40:51] separate
[40:54] ships so we've got um
[40:57] we've got the ability where if you're
[41:00] near something that is also very hot if
[41:03] you're hiding by a sun I wouldn't
[41:05] recommend you do that but if you are
[41:07] hiding by the sun it's um IR generation
[41:13] is going to absolutely obscure this
[41:15] little ships um so that's a place you
[41:19] could hide but yeah if you've got a if
[41:21] you've got a military grade top of the
[41:23] line can see the heat signature of an
[41:27] wasp on the back of your hand kind of
[41:29] thing um from a million miles away then
[41:33] it's absolutely possible that um when we
[41:36] when we when you're looking at that
[41:37] thing it can say no no no that's two
[41:38] separate things and let me tell you why
[41:41] um because yeah you could have a huge
[41:43] ball of heat and then a little ship
[41:45] that's hiding next to it that's actually
[41:47] a lot cooler so maybe it shows up as
[41:49] something separate it's not something
[41:50] we've got in the immediate future to be
[41:53] implemented but it's something that we
[41:54] definitely need to look at like why
[41:56] would I buy this scan when I could buy
[41:57] that scan it's like okay well maybe you
[41:59] can Spot the Difference and you know
[42:01] find two needles in a Hy stack and see
[42:03] that they're two separate things awesome
[42:05] uh this might have been covered by the
[42:07] uh item 2.0 stuff you were talking about
[42:08] earlier John uh how is scanning going to
[42:11] work within a party well like like on
[42:13] the capital ship you know with the more
[42:15] robust scanning system will the scanner
[42:17] be able to share his or their results
[42:19] with other players on the ship or even
[42:21] other players in other
[42:23] ships definitely within their ship and I
[42:26] quite easily imagine it would be if you
[42:28] say you're in the same party mhm for
[42:30] sure um I don't think we've fully locked
[42:33] down how we this be a good question for
[42:36] what people working on the herald for
[42:38] data sharing which might uh you might be
[42:41] able to talk yeah we've been we've been
[42:42] talking to uh Matt Sherman because he's
[42:45] looking at the moment actually in fact I
[42:46] spoke to him yesterday about it um this
[42:49] idea of transmitting information between
[42:51] ships um and obviously he can go into it
[42:53] a lot more detail than I can um but
[42:55] players want to be able to and we want
[42:57] to be able to enable players to share
[42:59] information transmit that um immediately
[43:03] I would like to be able to um if I'm in
[43:06] a party with John and I'm over here and
[43:08] my radar is covering this area and he's
[43:09] over there and he's covering that area I
[43:11] want to be able to see what he picks up
[43:13] and he sees what I pick up now maybe
[43:14] there's a delay on that um so there's a
[43:17] guy with a Herald who's listening in and
[43:19] he's like oh that's interesting um
[43:21] because that information that's being
[43:23] transmitted I'm getting all your
[43:25] scandate I'm getting all your scandate
[43:26] sitting in my computer now and I can
[43:28] sell that before you manage to complete
[43:30] your SC like you're going asteroid to
[43:31] asteroid looking for gold you find gold
[43:33] he's like we found gold you're like bye
[43:36] goes off and sells it before you've
[43:37] managed to stake a claim so we want to
[43:40] be able to share because that also opens
[43:42] up all these opportunities to steal that
[43:43] information um so that's so systemically
[43:46] you could have lots of fun with that not
[43:48] yourself don't group with will or me or
[43:51] just someone there's a Herald nearby
[43:53] that's not me you won't find anything
[43:55] useful for me it I would just be
[43:56] shooting everything all right
[43:57] unbelievable we're we're just about time
[43:59] here let me see if I can find one more
[44:01] before we let you go here
[44:05] um uh all right this I we I think we
[44:08] already covered this but will scanners
[44:10] have the same tier system as Weapons
[44:12] coolers Etc whether there it be tier one
[44:15] two three four
[44:17] scanners yeah yeah yeah um I don't know
[44:20] if we've talked a lot about this but we
[44:22] have different
[44:23] grades call it a grade to dgr and we
[44:26] also have different categories so we
[44:28] have military stealth uh industrial
[44:32] civilian and competition and they they
[44:36] each Excel in different areas so taking
[44:39] shields for example um stealth obviously
[44:43] they have less emissions but a lower
[44:46] overall Shield health military is pretty
[44:49] good but they have a high cost and they
[44:51] have a lot of consumption to use
[44:53] industrial have a high output but lots
[44:55] of emissions civilians middle of the
[44:58] range you have obviously you've got
[45:00] multiple civilian manufacturers
[45:01] different gr so you've got a huge
[45:02] variance in there uh competitions what
[45:05] we sort of lump racing well they're the
[45:08] best of what they do yeah they're the
[45:10] best of what they do so it's it's hard
[45:11] to Define per item um so like
[45:15] competition thrusters are great for
[45:18] racing competition well depends what you
[45:21] want to do with racing but yeah but it's
[45:23] it's always it's always the best but
[45:25] price or out be down yeah and that's
[45:28] absolutely we want to use the same
[45:29] system the same Universal system for
[45:31] understanding how the scanning system is
[45:33] going to work awesome uh well guys thank
[45:36] you so much for taking the time today to
[45:38] show up on RTV answer some questions um
[45:41] I uh remember uh the stuff that you're
[45:44] seeing on ATV each and every week you
[45:46] know whether it's the scanning or
[45:47] whether it's anything are the earliest
[45:49] implementations of stuff we we are
[45:50] taking stuff right off the presses now
[45:53] and showing it to you you know in in
[45:55] their earliest iterations because one of
[45:57] the things we can do here at Star
[45:58] Citizen with our with our open
[46:00] development and crowdfunding and stuff
[46:01] like that but they are by no means the
[46:03] final implementations that we take the
[46:06] opportunity to try things and we're
[46:08] excited to try you know these new things
[46:10] not the flight model the flight balance
[46:12] changes the model is still the same
[46:14] thank you John pritchet you know the
[46:16] flight balance changes uh you know the
[46:18] first implementation of of scanning in a
[46:21] in a single dog fighter combat ship as
[46:24] opposed to Capital ships so like that so
[46:27] uh you know hit the forums hit the chat
[46:29] hit the Reddit you know give us your
[46:30] feedback when these systems come online
[46:33] let us know what you think uh we'll
[46:34] continue to iterate um uh this weekend
[46:37] is twitchcon uh folks here at the
[46:39] community team Tyler Ben and I were
[46:40] heading down to San Diego uh shortly
[46:42] after the finish of this broadcast so
[46:44] we'll see you guys at at some of the
[46:46] Gatherings there um and then next week
[46:49] citizen con next week cing on guys um
[46:52] there won't there won't there won't be
[46:53] an ATV next week uh as usual the week of
[46:56] a big event we're all all hands on deck
[46:58] for the for the big reveal but tune back
[47:00] in to Twitch on Friday and Saturday
[47:02] we'll have some of our community
[47:03] streamers uh WTF asaurus Captain Flint
[47:07] uh Sergeant Gamble and Sophie girl will
[47:08] be uh broadcasting on Friday and
[47:10] Saturday from 12:00 to 6:00 Pacific uh
[47:12] entertaining you with uh everything the
[47:14] star s has to offer um I think my dad is
[47:17] going to stop by he said it might happen
[47:20] so watch for that if that happens hi Dad
[47:23] hi Dad and then of course Sunday
[47:25] Sunday's the big tamale citizen con
[47:27] itself broadcast starts at 300 p.m.
[47:30] there might be a pre-show before that
[47:32] we're talk we got some ideas for
[47:34] pre-show so maybe you want to tune in at
[47:35] like 2:30 Pacific if that's if that's
[47:38] your cup of tea but yeah so lots of
[47:40] stuff coming on next week so we're
[47:41] excited for everybody to see it um John
[47:44] and uh and uh and um will and from
[47:47] before Andrew and Johnny thanks again
[47:49] guys uh thank you bye everybody I'm
[47:52] going to
[47:55] hit for

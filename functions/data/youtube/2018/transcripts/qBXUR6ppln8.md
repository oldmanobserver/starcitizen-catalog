# Star Citizen: Calling All Devs - Aspects of Flight and Landing

**Video:** https://www.youtube.com/watch?v=qBXUR6ppln8
**Date:** 2018-08-06
**Duration:** 19:14

## Transcript

[00:10] hey everybody welcome to another edition
[00:13] of calling all Deb's the weekly Q&A
[00:15] series where I take questions from you
[00:17] the star citizen backer and posed them
[00:19] directly to our developers usually over
[00:21] Skype we are getting things started this
[00:23] week by going to our Manchester United
[00:25] Kingdom office and foundry 42 s own a
[00:28] Ross Hopwood there's a system designer
[00:31] working on well we're gonna find out in
[00:33] a second Ross how you doing man hello
[00:35] I'm good thank you
[00:36] I'm doing well now Ross is your first
[00:39] time I'm calling all Depp's well
[00:40] congratulations
[00:42] it is your first time right we've done
[00:44] that yetis some aanapisis yeah for those
[00:47] who may not have the man who you're who
[00:50] are you and what do you do for star
[00:51] citizen yes so I'm rough chop wood I'm
[00:55] assistant designer yeah the UK did UK
[00:58] office okay now we have a lot of systems
[01:00] designers what sort of things do you
[01:01] work on Oh
[01:02] a lot of the active feature team work so
[01:06] anything any play movement or that kind
[01:08] of thing okay well then I definitely
[01:10] have the right person then we've got a
[01:12] question from the backers this was
[01:14] submitted by the backers was voted on by
[01:15] the backers it says with it being so
[01:18] difficult to find a perfectly flat area
[01:21] to land will we eventually be able to
[01:24] grab and pull ourselves up to a landing
[01:27] ramp or elevator pad that may not fully
[01:29] reach the ground on uneven terrain okay
[01:33] yeah so not currently with because this
[01:36] would basically be monthly we have
[01:39] involved in a monthly assistance so
[01:41] being able to jump open over things or
[01:43] jump up onto things but currently
[01:45] everything is manually setup so we got a
[01:49] lot of manual Michael something that we
[01:51] do want to look into is procedural mark
[01:53] of all in language so the scenario that
[01:55] you've just described
[01:58] basically if the requirement the height
[02:01] requirement see you know the surface see
[02:03] what everyone sees of the lift is high
[02:05] enough to justify having two month or
[02:09] month then you know in the scenario
[02:12] where we have the procedural Michaels
[02:13] then you'd be able to do things so if
[02:15] it's low enough obviously you just jump
[02:17] onto it right yeah that's something that
[02:20] would hopefully be covered you know but
[02:21] this procedural method
[02:22] gotcha yeah this is used does this play
[02:26] into the motion walking thing I know we
[02:28] just highlighted that on a TV recently
[02:29] yeah yeah so then the last ATV we
[02:33] covered we basically used our current
[02:35] fault in a month Lynne system to
[02:38] prototype motion weapons so what that is
[02:39] is it's extended animations for periods
[02:43] of time so that you can have them you
[02:44] know you can extend whatever animation
[02:46] that it is that you want this can only
[02:48] work for animation driven motion by the
[02:52] way so it's anything that wants the
[02:54] animations plane it's going to move the
[02:55] player somewhere whilst the animations
[02:57] play so what we did was because all of
[03:01] our animations for vault in a mandolin
[03:02] were kind of specific to specific
[03:04] metrics yes to be able to jump over a
[03:06] specific wall specific that kind of
[03:08] thing now what we can do is have one
[03:11] animation that has every part of that
[03:13] soda part we climb the wall you know the
[03:16] going across the top of it and then the
[03:18] exit and then what we can do is mark
[03:21] this up now to extend it so we can say
[03:23] this wall is two times the length of
[03:25] what the animation would have been but
[03:27] the animation that section of the
[03:28] animation where you're climbing over the
[03:29] top can kind of be extended for this new
[03:32] depth so that's what motion Morpheus
[03:33] basically
[03:34] and we use that for fall in a month yeah
[03:38] that's cool it's a lot smoother like
[03:42] because previously the UH the segments
[03:44] of the animation but so now we're able
[03:46] to stitch them all together and it's
[03:47] like a very nice smooth transition
[03:49] between from one for the next course
[03:52] awesome and yeah and if you haven't seen
[03:54] it check out a TV I believe by the time
[03:56] this airs it will be the episode that
[03:58] just aired you'll see some some visuals
[04:01] since this is the show where we have
[04:03] visuals you'll see the visuals here all
[04:05] right Ross I'll let you get back to work
[04:06] man thank you so much okay just take all
[04:10] right thanks so much Ross now moving I
[04:13] just another floor I don't know if use a
[04:15] floor up or a floor down well we're
[04:18] going to David Koch names we're gonna
[04:21] David Colson a gameplay program but Dave
[04:23] how you doing man
[04:24] pretty good playing scary really glad
[04:26] you heard we messed up your name there
[04:28] okay I'm not great at names but when you
[04:32] mess up something like David you know
[04:35] you're especially special seems more
[04:37] acceptable to to mess up something
[04:39] almost nice to be here
[04:44] I know you're a gameplay programmer I
[04:46] think this is the first this is the
[04:47] first time we've had John clonal devs I
[04:48] don't think we've ever had you on a
[04:49] reverse the first either nope I don't
[04:52] believe so we're gonna fix that we're
[04:54] gonna fix that before the years that
[04:55] just just heads up well we just
[04:58] introduced Ross hopwood to the community
[05:00] let's take a second here I tell
[05:01] everybody who you are and what you do
[05:02] for star citizen so I'm David Coulson
[05:05] I'm a gameplay programmer that works on
[05:09] ifcs and flight physics and sometimes
[05:13] vehicles
[05:13] I hope out the you vehicle team as well
[05:15] well then I definitely have the right
[05:17] person we got a question that's a been
[05:19] submitted by backers has been voted up
[05:21] by backers
[05:22] I think it's probably a pretty quick
[05:23] answer but let's see if we can squeeze
[05:24] any more information out of you here the
[05:26] question is simply why can't we decouple
[05:29] at cruise mode anymore without losing
[05:32] speed so that's a bug plain and simple
[05:35] it's not the intention in fact the whole
[05:39] kicking you out of cruise is really not
[05:42] ideal and we're going to move toward a
[05:44] variation of cruise we that's not the
[05:46] case so I know there's situations
[05:48] not only where you get kicked out of
[05:49] crews because you're in decoupled but
[05:52] you get kicked out of crews because
[05:53] you're say using a dual stick setup and
[05:56] you slightly move your left stick or
[05:58] whatever and then you get kicked out
[05:59] which is really frustrating so end goal
[06:02] is that you actually don't get kicked
[06:03] out at all and you can cruise and move
[06:05] around slowly because you know you're
[06:07] going really fast but that was the
[06:10] intention and right now you know
[06:12] decoupled kicking you out of cruise is
[06:14] absolutely a bug that's definitely not
[06:15] what we want so yeah we'll just try and
[06:19] fix it and hopefully you can you will
[06:23] hopefully able to do that and in the
[06:24] future you will not get kicked out of
[06:25] cruise at all which I think will feel a
[06:27] lot nicer oh I do we have that on our
[06:30] roadmap yet I haven't tried these I
[06:33] don't actually know bugs I don't think
[06:37] small bugs like that would be on the
[06:38] roadmap right right right right right
[06:40] but it's on our to-do list anyways yeah
[06:43] my to-do list okay
[06:45] well I'm sure I'm sure we'll have we'll
[06:48] have an update late as as we get closer
[06:49] to whenever it whenever that comes on
[06:52] because I know that I know they kick in
[06:54] when you said they'd do a stick thing
[06:55] that was like yes I've heard that for
[06:59] that experience is frustrating at the
[07:01] moment because I think the way that
[07:03] cruise was designed as it is now is that
[07:06] you need to be traveling forward to get
[07:08] into cruise speeds but that means if
[07:11] you're using a dual stick setup and you
[07:12] slightly move your stick to the left
[07:13] you're not strictly traveling forward so
[07:15] it kicks you out it's just annoying so
[07:18] we'll get that fixed
[07:20] I like dual stick setup but most the
[07:23] time when I when I play and I don't get
[07:24] to play a whole lot I'm confined to
[07:25] mouse and keyboard cuz I'm at a
[07:27] workstation it's covered with a bunch of
[07:28] stuff I don't have a room for a purse up
[07:30] but the few times I do get to play with
[07:32] it with a with a little stick so much
[07:34] fun yeah yeah it's I mean not get so
[07:37] toss people you know is throttles
[07:39] classical selected I just I just like
[07:41] the dualistic side all right man I'll
[07:43] let you get back to work thank you so
[07:45] much dude and bro keep an eye out keep
[07:47] an eye out for that our TV and right
[07:49] it's coming
[07:49] Nakamatsu very much alright thanks so
[07:55] much David
[07:56] moving to yet another floor in our
[07:58] Manchester UK office any Nicolson
[08:01] systems designer at a foundry 42 UK Andy
[08:05] hey doing it
[08:06] hey Jared I'm good thanks it's systems
[08:09] designer right it is now yeah just this
[08:12] week it is systems change alright so I
[08:20] have a question from you this is from
[08:22] the backers voted on by the backers with
[08:26] Hurston being planned for release in the
[08:28] near future currently scheduled for
[08:30] alpha 3.3 we are are we going to see a
[08:34] big change in atmospheric flight now
[08:38] this comes up this comes up quite a bit
[08:40] you know I think I can remember from the
[08:42] beginning of the the project here you
[08:45] know the big debate about you know how
[08:47] ships will handle in space versus how
[08:49] they will handle in the atmosphere of
[08:52] planets that of course have atmosphere
[08:54] not every planet has atmosphere those
[08:57] changes haven't well I'll let you talk
[09:00] I'll let you talk about you know are
[09:02] there differences between atmospheric
[09:03] flight and and outer space flight now
[09:07] are we happy with them and what can we
[09:09] say about the future yeah okay I mean
[09:12] they are they are very different states
[09:15] for the ships to be in and I think
[09:19] there's a lot more to do and I know
[09:23] we're kind of not happy with where
[09:26] things are at the moment I know people
[09:28] like community backers unhappy with the
[09:30] differences between the two states
[09:32] between space flight and atmospheric
[09:34] flight a lot of that comes down to
[09:37] [Music]
[09:38] a tuning of the ship's we've we've got
[09:43] like two very different systems in place
[09:46] so they are ha like the tuning of the
[09:50] ship is very different it's just that
[09:52] it's not different enough
[09:54] we've got like we have drag for instance
[09:58] is the obvious one that is affecting
[10:00] ships and it wasn't so noticeable
[10:03] noticeable before I think three two with
[10:08] the last big batch of ifcs improvements
[10:10] that John made really made it a lot more
[10:13] noticeable it's really just as I say it
[10:15] comes down to the performance of the
[10:17] ships and allowing the atmospheric
[10:20] differences to to affect the ship's more
[10:24] and that's all working towards the 3/3
[10:28] so it's looking unlikely little beat
[10:30] that much difference but we are working
[10:32] towards updates and improvements to it
[10:36] now when you say it's not likely to be
[10:39] that much updates that's because the
[10:41] Herson that we intend to roll out with
[10:43] three three is what we commonly referred
[10:45] to as a tier zero implementation it's
[10:48] it's it's you know 33 is more about
[10:50] getting the planet itself in and the
[10:53] object container streaming and all the
[10:54] assets and stuff like that
[10:56] moons current moons we have like ela and
[10:59] selling and and whatnot don't have a
[11:01] whole lot of atmosphere at the moment so
[11:04] so the big atmospheric changes haven't
[11:06] been absolutely necessary at up into
[11:09] this point while Hurston we do intend
[11:12] her said to have a breathable atmosphere
[11:15] you know I was asking around in this so
[11:17] forgive me for jumping on with this but
[11:20] you know our first 3/3 implementation
[11:22] won't have the full atmospheric flight
[11:26] changes that we're intending but we are
[11:31] intending them I think that's the more
[11:33] that's the more valuable part of that
[11:35] any was ifcs isn't done by any means I'm
[11:39] still working on it we still gonna talk
[11:42] about how it should work and what going
[11:44] to do next
[11:45] atmospheric flight we need to come back
[11:47] to it we need to especially from the
[11:50] design point of view just making sure
[11:52] those ships are different enough and as
[11:55] you say the density of the atmosphere is
[11:56] going to be much higher on Hurston them
[11:59] in the movies we have already so we need
[12:01] to really notice there needs to be
[12:05] considerable consideration of pilots so
[12:09] so not something that folks should
[12:12] expect four three three oh you know
[12:14] maybe we'll be surprised but I wouldn't
[12:15] I wouldn't expect it forth for the four
[12:17] three three and the rollout but it is
[12:19] something that that we want to work on
[12:21] it is something that that I know I've
[12:23] heard Chris talk about in the past he
[12:25] wants that tangible different that sense
[12:27] of difference between flight and
[12:30] atmosphere as for what that will entail
[12:32] and for what the deets what details and
[12:35] how that will present itself I'm gonna
[12:37] say stay tuned we've got some stuff in
[12:40] the works for you as far as far as far
[12:43] as getting that information to you so
[12:44] I'm not gonna go too far I do it right
[12:46] here but just stay tuned alright Andy
[12:50] I'll let you get back to work man I know
[12:52] this is your the absolute highlight of
[12:55] your day when you get asked to do this
[12:56] stuff so I appreciate you taking a few
[12:58] moments to do this with the pace it's
[13:00] sadly true I'll see you there alright
[13:07] thank you so much Andy Nicholson now
[13:09] finally done with Manchester United him
[13:11] coming back to our own Los Angeles and
[13:13] Kirk dome a system designer here at if I
[13:17] was gonna say foundry for a to LA but
[13:18] nope never my Kirk how you doing man
[13:20] very good every subject I'm alright
[13:23] anything other than names man alright so
[13:26] Kirk I got a question for you it's from
[13:28] the backers I know even the company name
[13:30] I just I was messing up the company from
[13:32] the backers wrote on the backers this
[13:34] one comes up quite a bit this is an
[13:36] oldie but a goodie but goody here will
[13:38] there be a way to pursue and evade
[13:41] people traveling through quantum
[13:44] oh so he haven't actually gotten to
[13:49] designing or everything that feature yet
[13:52] but I know that that we we want to do is
[13:54] we ought to be able to have a system
[13:57] which you can scan or to somehow detect
[13:59] the the con travel trails that people
[14:04] leave so they just you should be able to
[14:06] see that a ship has taken that that
[14:09] particular QT course and you now that we
[14:13] have curved QT trails like that has you
[14:18] should be able to like determine where
[14:20] that courses I had led them to and I
[14:23] think we got to do things like be able
[14:26] to detect like you know maybe ship type
[14:28] other things like depending on what we
[14:31] do for like an invasion or stealth
[14:36] skills might be able to detect it is
[14:38] like the owner of the ship of the pilot
[14:40] the faction of the ship maybe were it's
[14:43] like last-known destination was and when
[14:48] it traveled to that time so it it you
[14:52] know like generally the snapshot in time
[14:55] of when that ship had actually traveled
[14:58] that course and whether it's worth
[15:00] pursuing them I think once we get that
[15:02] system and then the legitimate way undo
[15:04] for evasion so you know waste in which
[15:07] you can mask that data or mass the trail
[15:09] itself maybe have it tied into movie the
[15:14] quantum drive itself or some kind of
[15:17] technique which you actually do the
[15:22] kornev travel the calibration for it
[15:26] could be tied to it but we haven't quite
[15:28] to that point and then of course we've
[15:31] talked about in the past just the the
[15:33] scale and grade of the items themselves
[15:36] like like maybe and just pulling letters
[15:39] and numbers out of my out of the air
[15:41] here like a like a great see scanner can
[15:43] detect quantum travels travel trails
[15:46] from a quantum drive of great C or lower
[15:49] but if you've got a quantum drive of B
[15:51] maybe it's the
[15:52] Asians are less than you can't do you
[15:53] know a mix of think components used to
[15:57] find things and components used to do
[16:01] things
[16:02] yeah it's after the great of them and
[16:04] like the you know quality can determine
[16:07] maybe signal strength level that's the
[16:11] ice cream minimum minimum level value so
[16:14] that we can detect these things I think
[16:17] something be interesting with being if
[16:19] there are really common like routes that
[16:22] people take for trading and you see it
[16:25] you know you see a whole bunch of very
[16:27] very close together quantum travel
[16:31] trails I might be a good place to put
[16:33] some kind of a quantum introduction it
[16:36] might feel like actually next next guy
[16:39] that's during some some cargo transport
[16:43] and you know catching under spider the
[16:45] spider web very cool
[16:47] yeah virtues of of commonly traveled
[16:52] lanes versus the the virtues of not you
[16:55] know because you might even be able to
[16:57] if it's a commonly travel lane that
[16:58] might even be a way for you to mask
[17:00] yourself in okay yeah yeah yeah it's
[17:04] it's in some cases it would be dangerous
[17:06] because yeah that's where people would
[17:07] put you know in traditionals but in
[17:09] other cases if you're trying to hide in
[17:11] plain sight you might choose to do
[17:13] something illicit in a in a commonly
[17:16] traveled thing so that your trail masts
[17:19] in with all the others right we were
[17:20] talking about some ways in which we
[17:22] could have smugglers like bins inside
[17:27] not deters are some of the ships so you
[17:29] can put cargo in there that you don't
[17:31] want to be Detective either by scan or
[17:33] and I suppose by by this column travel
[17:38] trail detection so even if you do get in
[17:41] addicted get boarded and scanned you
[17:45] know you don't it'll find your
[17:47] you're salacious cargo that I'm good
[17:49] yeah we there might even be something
[17:53] coming up in the near future that might
[17:56] take some advantage of some of that and
[17:59] that's all I'm going to say at this
[18:01] point just not knowingly all right all
[18:04] right Kirk thanks so much I'll let you
[18:05] get back to work man
[18:07] well that's it for this week's show
[18:09] special thanks to Ross and David and
[18:12] Kirk and Andrew I did it for names for
[18:16] taking their time to be on the show with
[18:17] us this week remember you can submit
[18:18] your questions for consideration each
[18:20] and every week up in the thread up on
[18:22] spectrum and don't forget to vote
[18:24] that's the two-prong plan you guys
[18:26] submit your questions you got a bunch of
[18:27] questions there's a brand new August
[18:28] thread up now so I never had a better
[18:31] chance then right towards the beginning
[18:32] of the month to get your questions seen
[18:34] and voted on so for calling all devs on
[18:36] Content Manager for global video
[18:38] production Jared Huckaby
[18:39] we'll see you next week everybody
[18:47] [Music]
[18:54] thanks for watching for the latest and
[18:56] greatest in star citizen squadron 42 you
[18:58] can subscribe to our Channel
[18:59] or you can check out some of the other
[19:01] shows and you can also head to our
[19:02] website at www.uvu.edu/library

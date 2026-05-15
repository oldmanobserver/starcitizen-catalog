# Star Citizen: Calling All Devs - Core Gameplay Update

**Video:** https://www.youtube.com/watch?v=enePky-iO0c
**Date:** 2021-07-02
**Duration:** 27:54

## Transcript

[00:08] hey everybody welcome to another episode
[00:10] of calling all devs our
[00:11] our series where we take questions from
[00:13] you the star citizen backer and pose
[00:14] them directly to our developers
[00:16] on this week's show we are talking all
[00:18] things gameplay pillar
[00:20] with our gameplay pillar director mr
[00:23] richard tyra richard
[00:24] how you doing man hello i'm doing very
[00:26] well
[00:27] we got a lot of things to cover today so
[00:30] the gameplay we don't need to go into
[00:32] what the gameplay pillar is and
[00:34] everything
[00:34] but suffice to say that a lot of the
[00:36] core elements that make up squadron 42
[00:39] and
[00:40] star citizen come from the gameplay
[00:42] pillar the the kind of day-to-day
[00:44] uh player essentially
[00:47] the core gameplay pillar is anything
[00:50] that's character related or actor
[00:51] related
[00:52] um and covers a lot of mixed features
[00:55] such as like
[00:56] fire or physical damage um
[00:59] and radar and scanning for both ships
[01:01] and um on fps so
[01:03] if you look at like the two main feature
[01:06] pillars you have obviously the vehicle
[01:07] pillar
[01:08] and then there's a core gameplay pillar
[01:09] and we kind of coordinate to create
[01:11] you know if we're not doing it they're
[01:13] doing it and if they're not doing it
[01:14] we're doing it kind of thing
[01:15] that's the best way to describe it much
[01:18] better than my way anyway
[01:19] uh so today we're talking about uh some
[01:21] of the features that you're that that
[01:23] that are in development under your
[01:25] pillar right now some are coming
[01:27] uh in the upcoming alpha 315 some will
[01:30] be coming a little bit later
[01:32] you know as they're ready uh let's start
[01:35] off with the ones that
[01:36] people are perhaps most familiar with
[01:38] and are asking about let's start off
[01:40] with player healing uh what can you tell
[01:42] us about
[01:43] where we're at how we're doing uh and
[01:46] what we can expect
[01:47] in the upcoming alpha 315 so player
[01:50] healing is kind of the next iteration of
[01:52] what we classified as actor status
[01:55] so actor status t0 when we released um
[01:58] around citizencon probably about a year
[02:01] ago now i think it was like three nine
[02:03] around about that uh but that that kind
[02:05] of covered
[02:06] uh the first iterations of the statuses
[02:08] that the player
[02:10] covers such as like eating drinking
[02:12] hypothermia
[02:13] you know all of those kinds so this is
[02:15] the next iteration of that
[02:16] which covers essentially injuries
[02:20] so we already have in the game right now
[02:22] uh the player has global health
[02:23] so when you look on your heart you have
[02:25] the little first aid symbol and it says
[02:27] you know it's your global health from
[02:28] zero to 100.
[02:30] um probably what people uh some old
[02:33] backers probably will remember is that
[02:35] we also have the little man
[02:36] and the little man comprises up of the
[02:39] uh different
[02:40] uh body parts on you on you so you've
[02:43] got your arms you've got your legs
[02:44] you've got your core your head and they
[02:45] are actually
[02:46] individual um pools of health
[02:49] but they used to be that and that's why
[02:51] i say about some of the old backers is
[02:52] that used to be the only thing that you
[02:54] you could see you didn't have the global
[02:56] health we introduced the global health
[02:57] widget
[02:57] when we released that say to see zero
[02:59] but the way it works under the hood
[03:01] is that your limbs take damage and to
[03:04] say i get shot in the arm and let's say
[03:06] i
[03:06] i lose five health points in the arm
[03:08] what happens under the hood is it goes
[03:09] okay let's move five health points from
[03:11] the arm
[03:12] and then it removes five health points
[03:13] from the global health and it was always
[03:14] doing this you just never saw it
[03:16] so you only would ever die when your
[03:18] global health got to zero
[03:20] it didn't matter that your limbs could
[03:21] get to zero
[03:23] but it was it was waiting for your
[03:25] global health so if i just kept shooting
[03:26] you in the arm
[03:27] even though your arm might only have 20
[03:29] health points
[03:30] your global health might be 100 health
[03:31] points so i keep shooting you and your
[03:33] arm is now ruined
[03:34] essentially and then i could keep
[03:37] shooting you and eventually you'd die
[03:38] so there was always the intention that
[03:41] your limbs would basically have these
[03:43] statuses
[03:44] based on their own individual health and
[03:46] then that would tie into this kind of
[03:48] the greater gameplay or the greater
[03:50] healing
[03:59] severe gameplay in your limbs so you can
[04:01] have a traumatic head injury you can
[04:03] have a traumatic
[04:04] body injury you can have let you know
[04:06] leg injuries and arm injuries
[04:08] and the way it kind of works is that
[04:09] we're still using the health system
[04:11] but we're kind of tracking this this
[04:13] invisible number behind the number
[04:16] in the back end which is kind of kind of
[04:17] like body limb wear
[04:19] so essentially imagine if i keep
[04:21] shooting in the arm because we're
[04:22] talking about the arm
[04:23] and you might lose all your health and
[04:25] that's fine if you then med pen
[04:27] up and and heal your arm back up as we
[04:29] do now
[04:30] if you if you haven't given them a lot
[04:31] of time so you're not taking care of
[04:33] yourself you keep getting shot on the
[04:34] arm and you keep getting from the arm
[04:36] basically that wear is going to keep
[04:37] building and building and building it
[04:39] until you get
[04:40] essentially a broken arm and which and
[04:42] we have three uh
[04:44] tears or severities of injury uh tier
[04:47] one or severity one is the highest
[04:48] that's the worst
[04:49] then we've got tier two and then tier
[04:51] three so essentially when you get a
[04:53] tier three injury it's basically going
[04:55] hey you know
[04:56] now you're gonna start suffering
[04:58] consequences of that injury
[05:00] and you can't just get a med pen and go
[05:02] cool i'm just gonna use my med pen
[05:04] your med pen will will heal your limb
[05:06] health back up to full health
[05:08] but the injuries on your arm will give
[05:10] you different effects
[05:11] at different statuses and that's why i'm
[05:13] saying it's the next iteration of active
[05:15] status as you start to
[05:16] suffer from dehydration as you start to
[05:19] suffer from
[05:20] hunger or you know just of hyperthermia
[05:22] or hypothermia
[05:24] you start to undergo these different say
[05:26] so you know your stamina you can't run
[05:28] as far you know you can't sprint as
[05:30] long you know uh we have lowered max
[05:33] health and we have you know all the
[05:35] different eyeball effects that start to
[05:36] come on whether there's the blood vision
[05:38] or whether it's
[05:39] you know the double vision and things
[05:40] like that so or whether you when you're
[05:42] cold you know you start to shiver or if
[05:44] you you know you
[05:44] you're under a severe pressure so what
[05:47] we have is we have all these different
[05:48] statuses that trigger these
[05:50] internal uh body reactions to you
[05:53] suffering these injuries
[05:55] so with this with the upcoming healing
[05:56] status what we're doing is that you can
[05:58] then suffer this injury
[06:00] now so let's say you've suffered an
[06:01] injury and let's say it's a severity
[06:03] three or tier three so that's the the um
[06:06] the lowest uh severe injury so let's say
[06:09] if your broken arm it's like a fracture
[06:12] so make sure you've got a hairline
[06:13] fracture in your arm so you can still
[06:14] use your
[06:15] arm you can still do it but maybe now
[06:17] you can't hold your gun
[06:18] as firm so you've got a bit more weapon
[06:20] sway uh
[06:21] and so on and so forth so you start to
[06:24] notice me thinking okay i've got this
[06:25] injury
[06:26] now my little man is showing my arm is
[06:28] is red and i'm like and it's showing
[06:30] i've got a tier three
[06:32] it's like okay i need to go back to a
[06:35] medical facility
[06:36] to remove this injury there's no way for
[06:39] you to remove the injuries
[06:40] out on the field you you have that
[06:42] injury you have to then go and get it
[06:44] sorted
[06:45] so you can then go back to a medical
[06:47] facility and
[06:48] your medical facility there are
[06:49] different classifications of the medical
[06:51] facilities
[06:52] we have tier one two and three so a
[06:54] hospital or a physical location
[06:56] is going to be what classified as a tier
[06:58] one facility that's the best facilities
[07:01] you can get
[07:02] so they will always be able to hear
[07:03] everything out and you can see where i'm
[07:04] going here
[07:05] tier two it's the second and third is
[07:07] the worst and the way that we're tearing
[07:09] it up is that
[07:10] tier three can heal anything that is any
[07:13] injuries that are tier three
[07:14] tier two can heal any tier twos and tier
[07:16] one can heal tier
[07:18] tier one and below by the way i always
[07:20] wanted it the other way around but we'd
[07:22] already committed to the
[07:23] tearing so i was like okay fine that's
[07:25] fine
[07:26] i could do a whole segment someday on
[07:28] the way that we tear things in all
[07:30] aspects of our day exactly
[07:31] so essentially what we have is we have
[07:34] this injury so you've got this injury
[07:36] and it's affecting how your character
[07:38] plays the game it's affecting the
[07:39] effectiveness of your character whether
[07:41] that's in combat whether that's
[07:42] well in combat or whether that's in
[07:44] mining or you know how much you can
[07:46] carry or how much you can sprint
[07:47] all the different you know whether you
[07:48] can see how well you can see all of
[07:50] these different things
[07:51] so if you've got a traumatic head injury
[07:52] for example you know you might start to
[07:54] suffer double vision
[07:55] you know your stun resistance won't be
[07:58] as high so if you get hit from force
[07:59] reaction she'll fall over easier
[08:01] things like that so what we're
[08:04] introducing is we have these this
[08:06] severity and then when you get to the
[08:07] tier one severities
[08:09] that's where you've taken significant
[08:10] amounts of damage you've been you've
[08:12] gone down you've been revived all
[08:14] that kind of thing and you're in a
[08:15] situation where like tier one you might
[08:17] have like a
[08:17] multiple fraction where you can't use
[08:19] your arms anymore
[08:21] you might be able to use your arms for
[08:22] like that one moment like if it's your
[08:24] life or death depend on like look
[08:25] i need to get over that wall and i'm
[08:27] just gonna do it
[08:28] great but you're not gonna be able to
[08:30] like climb a 20 meter ladder
[08:32] so if your ship's got a ladder then
[08:34] you're in big problems
[08:36] so this is where we started to introduce
[08:39] the healing and medical
[08:40] gameplay so what we're doing from the
[08:41] healing medical grade play is that we
[08:42] have the multi-tool attachment for
[08:44] the multi-tool it's the healing
[08:46] attachment or so the multiple healing
[08:47] attachment for the mods tool
[08:48] and then we have the dedicated healing
[08:50] gun so the multi-tool itself
[08:53] um will be an improved version of the
[08:55] met of the medipen
[08:56] so the medipen essentially what you'll
[08:58] be able to do with the media pen is
[08:59] you'll be able to use it to heal up your
[09:00] health
[09:00] it won't heal injuries um and you'll be
[09:03] able to use it on other people as well
[09:04] so you'll be able to go
[09:05] and and jab it into other people and
[09:07] help heal up some of their injuries
[09:09] um the multi-tool the what the
[09:11] multi-tool does is it allows you to
[09:13] heal up injury and not injuries it
[09:15] allows you to heal up the health so you
[09:16] can heal up the limb health and your
[09:17] global health
[09:19] and it also allows you to scan that
[09:21] person and
[09:22] understand what is wrong with them
[09:24] because the other thing that we're
[09:25] introducing as part of this
[09:27] pass of the healing act status t1 is the
[09:30] downed state
[09:32] so any time where you would have
[09:34] probably died
[09:35] in star citizen or should i say 99 of
[09:37] times because there is going to be a one
[09:39] percent and i'll explain that in a
[09:40] minute
[09:40] most of the times where you would have
[09:41] died now you would go into the down
[09:43] state
[09:44] and the down state is where you are
[09:45] unconscious you are not dead
[09:48] you are just unconscious but you are
[09:50] slowly dying
[09:51] and that slowly dying might take two
[09:54] hours
[09:55] now at any point when you go down you
[09:57] can choose to release
[09:59] and respawn but when we later down the
[10:02] line we introduce death of a space man
[10:04] and we want people
[10:05] you know and dying is like a real
[10:07] problem you can
[10:09] wait for somebody to come and rescue you
[10:11] so you might have a buddy
[10:12] let's say we're playing together i fall
[10:14] down a cliff or i get shot i go down
[10:16] you can then come and revive me either
[10:18] using a medical pen
[10:20] or using the multi-tool healing
[10:22] attachment
[10:23] so i then i'm i'm you know i'm now no
[10:25] longer below zero health
[10:26] i'm i'm healthy i can now stand up i
[10:29] might have injuries i might not
[10:31] depending on what's taking me down but
[10:33] i'm back in the game
[10:34] so death now has a way for you to be
[10:37] brought back
[10:39] if you receive and this is the one
[10:40] percent if you receive more damage
[10:42] than your entire health bar again so
[10:45] let's say you go from 100 to -100
[10:48] aka you get shot with an idris rail gun
[10:50] and you're in the eva
[10:52] you will you will go straight to death
[10:55] that's like you know go to jail
[10:57] don't collect 200 that's it so
[11:00] essentially i should not say go to jail
[11:03] because i think you have to go to jail
[11:04] so and that was a monopoly reference
[11:06] for the purposes of very clear it means
[11:08] that you just die and respawn in a
[11:10] hospital
[11:11] or in a location so if we go back
[11:14] down that road so we have this downstate
[11:16] so now people can revive you but let's
[11:18] say i revive you
[11:19] and you're back but now you've got the
[11:21] worst case uh
[11:23] severity you've got a tier one injury in
[11:24] your legs so you can't even stand up
[11:27] you're in prone you're locked in prone
[11:30] because your legs are shattered so
[11:33] how do you how do you go around and i
[11:34] say shattered as in
[11:36] they're really bad okay so we don't want
[11:38] to get into the details of the medical
[11:40] issues of what you're actually
[11:41] undergoing but let's say they're the
[11:42] worst severity injuries and it prevents
[11:44] you from standing right
[11:46] this is not getting into the details
[11:48] yeah exactly this is the high level yeah
[11:50] but i do want to
[11:50] i do want to remind people that we're
[11:52] going to have a segment on isc about all
[11:54] of this in like august or september
[11:56] so so anyway so
[11:59] so what happens is obviously if you then
[12:01] go into a tier three what we're
[12:02] introducing was introducing these
[12:03] different levels of drugs and this is
[12:05] where you have we'll have
[12:07] medical like pen versions that you can
[12:09] stab into them so if you've just got the
[12:10] multi-tool
[12:11] and you've down somebody it might say oh
[12:14] this person can't stand his legs anymore
[12:15] because the pain is just
[12:16] too great it's crippling him okay i'm
[12:19] gonna
[12:20] i'm gonna i'm gonna stab him with my um
[12:23] anaesthetic pen will have specific law
[12:26] names for them
[12:27] or i can use the dedicated healing gun
[12:29] and the dedicated healing gun is i can
[12:31] scan them
[12:32] and i'll be able to choose which drugs i
[12:34] can then administer
[12:35] to the person who's injured to get them
[12:37] back on their feet
[12:38] now it doesn't heal their injuries it
[12:40] just removes the symptoms
[12:43] and it removes the symptoms so that that
[12:44] person can then get back to a location
[12:47] and medical facility so if you've got a
[12:49] tier three that would be like maybe the
[12:51] cutlass red would be t3
[12:52] you know the 890 jump or the carrick
[12:54] medical facilities that might be like a
[12:55] tier two facility
[12:57] and then the tier one facilities are
[12:58] like the dedicated hospitals the
[12:59] physical locations
[13:01] so you can get back to a medical
[13:03] facility and then
[13:04] go to a medical bed and then heal
[13:06] yourself from these injuries and then
[13:08] you can continue
[13:10] so essentially you know these things
[13:12] aren't going to jump up on you they're
[13:13] going to be things that happen over time
[13:14] like i said it's like a wear in the
[13:15] background that's it's almost like your
[13:17] vehicle's wearing and then what we also
[13:19] have is we have this thing called the
[13:21] blood drug level and that's what is
[13:22] monitored
[13:23] um on your hud as part of all of your
[13:25] active status widgets
[13:27] so this is your suit monitoring
[13:31] the amount of uh basically external uh
[13:34] drugs inside your system and that could
[13:37] be alcohol
[13:38] it could be med pens it could be all
[13:39] these other drugs that we're adding i
[13:41] think we're adding four
[13:42] uh i know that we're adding four bespoke
[13:44] drugs to the system
[13:46] and then you you'll have to balance how
[13:48] much you can apply to them with the
[13:50] dosage because you don't want to
[13:51] overdose them because if you overdose
[13:53] them they'll pass out
[13:54] and then you'll have to decide um you
[13:57] know which ones you want to use and that
[13:59] will give you a timer so you'll be able
[14:00] to understand like okay this is going to
[14:01] give them an hour here and out here
[14:03] that's enough for us to get back to the
[14:04] ship
[14:05] and get back to a hospital location or a
[14:07] medical facility if you have a ship with
[14:09] medical facilities
[14:10] so essentially what we're introducing is
[14:12] the healing profession
[14:14] this is you you're the first responder
[14:16] you this could be without your friend
[14:18] so they've died or whatever or later
[14:20] down the line
[14:21] the whole profession around where death
[14:22] is is going to be really important and
[14:24] obviously with this death comes
[14:25] inventory so you'll lose your
[14:26] your items on death if you if you choose
[14:29] to respawn
[14:30] so this is people will be able to bring
[14:32] you back give you
[14:34] drugs to alleviate the symptoms um
[14:37] that are specific for your injuries so
[14:39] that you can function
[14:41] to get back to a location and if you
[14:43] don't have those drugs you'll then be
[14:44] able to body drag somebody back to
[14:46] your um back to your ship and then
[14:49] you'll be able to take them to a
[14:50] location that has medical facilities and
[14:52] actually drop them off at an emergency
[14:53] elevator
[14:54] and you'll have a synchronized animation
[14:56] of putting them into the medical bed
[14:58] and then basically send them directly to
[14:59] hospital or heal them in a ship if
[15:01] you're putting them in there so
[15:02] that covers kind of like it's the
[15:04] healing game play the healing
[15:06] profession that revolves around
[15:10] you know healing your limbs what the
[15:11] status is you're going to receiving
[15:13] the different um hospital tierings and
[15:15] medical facilities
[15:17] and then on top of that the one thing
[15:18] that we're adding is is the respawn
[15:20] which is where you're going to be
[15:21] respond so now when you die
[15:24] you won't just respawn in a hab uh
[15:26] you're respawning in a hospital facility
[15:29] uh if you've respawned in that hospital
[15:31] facility
[15:33] um you'll be in a medical gown and then
[15:35] you'll be able to access your
[15:36] own inventory obviously if you've died
[15:39] somewhere outside of a landing zone your
[15:41] gear will be left with your body
[15:43] if you've died in a landing zone for
[15:45] whatever reason
[15:46] um what we're saying is that the
[15:48] security have come and collected you and
[15:49] they've taken you to hospital
[15:51] and they provide you so your gear will
[15:52] be in the room um
[15:54] so you'll be able to then take it with
[15:55] you and you'll also be able to choose
[15:58] which hospital you want to respawn at so
[16:00] if you want to go and choose
[16:02] um you know i want to always respond at
[16:04] microtech
[16:05] you can go and choose and say this is my
[16:08] respawn point where i want to respawn
[16:10] tier 2 and above facilities or ships
[16:13] will only have the ability to respawn so
[16:15] that means tier 3
[16:16] medical beds won't allow you to respawn
[16:19] and tier 3 medical beds
[16:20] are what's in the cutless red right now
[16:22] so that's going to be a loss of
[16:23] functionality which is what it has
[16:24] currently has
[16:25] but this was always the intention that
[16:26] was always a placeholder solution when
[16:28] we when we added it to the
[16:29] to the pu i think like the start of 2020
[16:32] if i remark from my remembering
[16:34] correctly so
[16:36] that kind of covers the reason and
[16:37] clearly we want to be able to have major
[16:39] hospital facilities at all of the major
[16:41] landing zones
[16:42] we want to have clinics at truck stops
[16:44] and things like that so
[16:46] essentially you're going around and
[16:48] choosing where you want to
[16:49] to respawn and then obviously that ties
[16:52] in
[16:53] later down the road in terms of like
[16:54] death of spaceman dna integrity which
[16:56] we've
[16:57] we've talked about previously but i
[16:58] won't go into too much detail on that
[17:00] but that that covers
[17:01] the detail that i've talked about here
[17:03] is what's coming
[17:04] uh in the first iteration of healing and
[17:08] the healing gameplayer healing uh
[17:18] we've got other feet we got other
[17:19] features that that are under your
[17:20] gameplay pillar right now
[17:22] uh we've got fps radar we've got hacking
[17:25] we've got
[17:25] a personal inventory where do we go next
[17:29] what can you tell us cool so obviously i
[17:31] think healing was a complex feature so
[17:33] there's lots of things that are going on
[17:34] i know that the community is
[17:36] interested to hear where we're at with
[17:37] that so i think it's good to get that
[17:39] out out there so people can
[17:41] have the say i think in terms of
[17:42] inventory obviously we've talked about
[17:43] inventory
[17:44] already a lot um what we're trying to
[17:46] aim for to go alongside healing is that
[17:48] you know
[17:49] you leave your stuff behind and
[17:51] essentially we won't be having this
[17:52] infinite bag of holding that you do
[17:54] right now with the pma we want to remove
[17:55] the pma so that you're using the inner
[17:57] thought
[17:58] system that we're implementing that
[17:59] you've already probably seen using if
[18:01] you've used the grin rock and going
[18:02] and bringing up your interface uh so
[18:05] essentially the
[18:06] headline situation with healing is that
[18:08] we're going to local inventory
[18:10] so you'll only have access to the things
[18:11] that you've put into the inventory
[18:13] at a landing zone uh if you go into a
[18:16] ship you'll only have access to the
[18:17] things that are inside that ship
[18:18] based off the inventory it's still
[18:20] accessed by location so you have to be
[18:23] in that location then you can access
[18:24] that inventory
[18:25] but the fundamental headline is if
[18:27] you're outside on a planet
[18:29] you only have access to the things that
[18:31] you're carrying that are things that are
[18:33] in your pockets
[18:34] or that are things that you're in your
[18:35] backpack and that's it so
[18:37] and when you die or go to the new downed
[18:40] state
[18:42] you will obviously leave your items
[18:43] there if you go and respawn back at a
[18:46] hospital
[18:46] so that that's really the crux of
[18:49] healing obviously that people are
[18:50] already familiar with the um
[18:52] the system itself and the biggest thing
[18:53] is obviously the removal the pma you'll
[18:55] be able to move your items directly on
[18:57] to your character it would with the
[18:59] inner thought um
[19:01] system and also will be as part of that
[19:03] release will be coming with the asset
[19:04] manager so you'll have a
[19:06] mobileglass app to be able to show you
[19:07] all of where your stuff is
[19:09] to be like okay where did i leave the
[19:11] gladius or my gladiator so where was
[19:12] that armor or
[19:13] this gun and you'd be able to go and
[19:15] find them and go okay that was an area
[19:16] 18.
[19:17] okay that's a portal or whatever so
[19:19] that's kind of
[19:20] healing in a nutshell we've talked a lot
[19:22] about the intricacies of healing before
[19:24] but that kind of covers the small slice
[19:27] of it
[19:28] the other two in terms of fps radio and
[19:31] scanning
[19:32] and hacking so i'll cover fps redone
[19:34] scanning first so
[19:36] fps radio scanning um we
[19:39] we are exactly the same as the ship
[19:41] scanning now so or the ship
[19:43] radar and scanning so we we worked with
[19:45] vtt
[19:46] and you know myself and my team we
[19:48] designed the radar and scanning system
[19:50] for both ships and um
[19:53] for fbs we wanted to make sure that it
[19:55] was you know it's using the same systems
[19:57] it has the same promises and same
[19:59] premise so that you know if you have a
[20:00] really large signature it's dampening
[20:02] all the other signatures so i always
[20:04] give the example which is like you know
[20:06] i'm in the shower and my wife's shouting
[20:07] to me
[20:07] i'm like i can't hear you because all i
[20:09] can hear is the shower but she can hear
[20:11] me
[20:12] right she can clearly hear me responding
[20:13] back and she's responding i'm like but i
[20:15] can't hear you
[20:16] so that's what we've implemented as part
[20:17] of it so we have this um
[20:19] gameplay where you can at the cause and
[20:21] effect on the fbs side you'll be able to
[20:22] go in and
[20:23] turn on a generator and maybe hide with
[20:26] that noise
[20:27] um you know maybe you can't hear
[20:28] yourself your emission is low but maybe
[20:30] they can still
[20:30] find you or whatever so there's
[20:32] definitely um some signature
[20:47] people will be gamepl that they have
[20:48] been pinged and you
[20:50] flare up all your signatures so you know
[20:53] when you do a ping what you're actually
[20:54] saying is
[20:56] i'm shouting into the dark but i'm
[20:58] giving away my own location
[21:00] so there's a bit of cat and mouse there
[21:01] where it's like okay i'm gonna
[21:03] i'm going i'm here by my myself do i
[21:06] want to give away my location
[21:08] or do i want to go no actually i'm in a
[21:11] position here where i can flee
[21:12] i'm going to see if there's anybody in
[21:14] there first and i'll ping out
[21:16] those five guys or whoever i'm getting
[21:19] out of dodge
[21:20] whereas sometimes you might do it you're
[21:21] like i haven't seen anybody because
[21:22] somebody's maybe hiding maybe they've
[21:24] turned off all their
[21:25] um you know turn off a flashlight
[21:26] they're not using their guns the one
[21:28] thing to note about the differences
[21:30] between
[21:30] fps and ships which i highlight is that
[21:33] ships passively detect all signatures so
[21:35] the
[21:35] em electromagnetic ir infrared and cs
[21:38] which is cross section
[21:39] those are the three that it passively
[21:40] detects cross sections like visual cross
[21:43] on the fps side of things it only
[21:45] passively detects sound
[21:46] so sound replaces cross-section and then
[21:49] emr is
[21:50] the same and you can only ping for emir
[21:53] and db
[21:54] so your radar when you're just passively
[21:56] walking around only looks for sound so
[21:58] if somebody's
[21:59] you know fired off you know through a
[22:00] grenade use their weapon
[22:02] is running you know it might pick it up
[22:04] and you'd be like oh there's somebody in
[22:06] there that direction
[22:07] but when you're pinged you're looking
[22:09] for all of the signatures
[22:10] and that's when you're giving yourself
[22:12] away and that side of things
[22:14] and then the scanning side of things is
[22:15] pretty much identical to the ship side
[22:17] of things you
[22:17] bring up a scan mode you can scan that
[22:20] person find out all the different
[22:21] information about
[22:22] them what they're carrying what's their
[22:23] active status what's their org
[22:25] you know do they have a criminal record
[22:27] because you can run their name and
[22:28] and so forth so we have that kind of
[22:31] game play
[22:32] alongside so you can you know correctly
[22:34] id someone if you're bounty hunting or
[22:36] so so forth and then with hacking
[22:39] hacking is um almost as a standalone
[22:42] encapsulated feature
[22:44] so what we have is we'll be basically
[22:47] repurposing the hacking chips that we
[22:48] have right now
[22:49] uh so the hacking chips will will still
[22:51] be around you'll have a hacking chip
[22:53] you'll you'll need to use that and and
[22:54] the way we've we're working with the
[22:56] environment team right now to go through
[22:57] all the locations is
[22:59] where you can hack something in it's
[23:00] essentially you're going and using the
[23:02] maintenance access
[23:03] so let's say you come to a pc or a ship
[23:06] or whatever
[23:07] you're you're plugging into the
[23:08] maintenance assets where somebody would
[23:09] come in and go okay i'm an
[23:11] i.t administrator i need to get into the
[23:12] system so they have
[23:14] you know a skeleton key should say
[23:16] they're putting it in
[23:17] and they're helping fix the problems
[23:19] you've obviously got an illegal skeleton
[23:21] key
[23:21] essentially you're then plugging it in
[23:23] and then that brings the hacking
[23:25] mini game up on your visor where you
[23:28] essentially have to
[23:29] manipulate the 3d board
[23:32] to avoid the ai and collect
[23:36] basically fragments of these of the
[23:38] passcode that you're trying to find
[23:39] and then when you find these passcodes
[23:41] you can then put them in
[23:42] and then that gives you access to
[23:44] whatever that is whether that's opening
[23:45] a door
[23:46] terminal you know terminal access power
[23:49] access
[23:50] elevators whatever you know the content
[23:52] guys decide they want to do
[23:54] and but essentially that's the premise
[23:56] behind it and we have much we have a
[23:57] scaling difficulty across hacking so
[23:59] we have versions without ai where it's
[24:02] just simple and you can just do it
[24:03] yourself
[24:04] then we have versions that are time
[24:05] limited with multiple ai of the board's
[24:06] much more complex
[24:08] and the premise is is that a
[24:10] manufacturer in the world
[24:12] has created this 3d program to help
[24:14] people hack without actually having to
[24:16] script or program so um
[24:19] that's kind of where we're at with
[24:21] hacking and that's obviously we'll slot
[24:22] in to some of the fps features to create
[24:24] some of the more
[24:25] interesting fps missions that were that
[24:28] you know that the guys are working on in
[24:29] the background
[24:30] gotcha uh so that's a lot of stuff
[24:32] coming from the gameplay pillar right
[24:34] now
[24:34] and of course i do want to read it
[24:36] reiterate that uh
[24:39] player healing and personal inventory on
[24:42] our way for alpha 315
[24:44] will be covering those more in-depth on
[24:46] isc next quarter
[24:47] uh hacking will also cover uh as it gets
[24:50] closer to
[24:52] its implementation uh it could be 315 it
[24:54] could be
[24:55] whatever it's when things are ready uh
[24:57] and then uh
[24:58] fps uh radar the same boat when it's
[25:01] when it's ready when all the resources
[25:03] are
[25:04] ticked and it's good to go same deal
[25:06] there um
[25:07] it definitely sounds like a lot of what
[25:09] you said today it sounds like uh it's
[25:10] dangerous to go along
[25:12] or it's dangerous to go alone bring
[25:14] friends uh
[25:15] absolutely i mean to be honest that that
[25:18] is that
[25:19] we're pushing the game towards what
[25:22] chris has always had in his head you
[25:23] know that vision of that game
[25:25] you know anything that we add is is in
[25:26] line with what chris wants to add to the
[25:28] game i mean all of these features
[25:30] uh have been prioritized by chris to add
[25:32] to the game
[25:33] and you know space's space is
[25:36] scary it's dangerous you know you're
[25:38] exploring these
[25:40] these unknown planets or known planets
[25:43] but you know
[25:44] if if you just went to africa or you
[25:46] went to
[25:47] you know an arctic expedition or you
[25:50] were going to
[25:51] you know go on the amazon or anywhere
[25:53] that is
[25:54] that is not just your familiar
[25:56] surroundings you're going to have to
[25:57] prepare for those
[25:58] those environments so you know if is it
[26:00] going to be hot is it going to be arid
[26:02] you know is there going to be bugs i'm
[26:03] going to have to take tablets or you
[26:05] know do i need
[26:06] certain clothing to help me and just as
[26:08] you're going on an expedition on just
[26:10] earth you know we're talking about you
[26:12] know going to all these different
[26:13] planets these different moons and all
[26:15] these different you know cave ex
[26:16] expeditions and you need to you know
[26:19] as part of that gameplay loop you need
[26:21] to understand like you know you're only
[26:23] going to have the things that you take
[26:24] with you
[26:25] and so it's up to you and also you know
[26:27] when you store stuff in your ship if
[26:28] your ship get blows up
[26:30] those are the things that you're gonna
[26:32] you can potentially lose on that ship
[26:34] so you know you're gonna have to have
[26:35] meaningful um decisions and then those
[26:38] those decisions will have consequences
[26:40] and that will
[26:41] create a feeling that you are you know
[26:43] more immersive
[26:44] exploring this universe rather than just
[26:47] like
[26:47] oh i'm in the bottom of the cave i'll
[26:49] just bring up my pma
[26:51] and i have access to whatever i bought
[26:54] you know
[26:54] thousands of it which is not you know it
[26:57] like playing a game with cheats on
[26:59] it it diminishes what you're trying to
[27:01] achieve and the fun that you're trying
[27:02] to have because the challenge is there
[27:04] for you to overcome so
[27:06] yeah it's good to it's good to start
[27:08] getting some of those gameplay loops in
[27:09] there
[27:10] all right so yeah so that's a lot of
[27:11] things to look forward to we of course
[27:13] are still pushing hard on alpha 314
[27:16] uh keep your eyes and ears open to the
[27:18] robertsspaceindustries.com website while
[27:19] isc is on hiatus
[27:21] for updates about that rich thank you
[27:23] for taking the time to be here on the
[27:24] show
[27:25] uh no worries we'll see it we'll see you
[27:28] next quarter for the
[27:29] for the isc segments on all these so
[27:30] take care man
[27:32] absolutely have a good one bye
[27:54] you

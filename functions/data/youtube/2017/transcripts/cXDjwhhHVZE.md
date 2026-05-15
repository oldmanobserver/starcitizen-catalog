# Star Citizen: Bugsmashers - Shopping Interaction System

**Video:** https://www.youtube.com/watch?v=cXDjwhhHVZE
**Date:** 2017-10-11
**Duration:** 11:31

## Transcript

[00:06] [Music]
[00:15] hello and welcome to this week's episode
[00:17] of bug slashers whoa
[00:19] slashers yeah slashers when I run the
[00:23] show its bug slasher smart
[00:34] I don't think so
[00:40] [Music]
[00:42] welcome to bug smashers Spence what kind
[00:46] of bug did you fix for me today so today
[00:48] we're gonna be looking at a shopping bug
[00:50] part of what I've been working on in the
[00:52] last month is adding the new interaction
[00:54] system to our shopping experience so you
[00:56] can look at the shopping racks and buy
[00:58] your clothing buy your ship items and
[01:00] get the new highlighting and
[01:01] interactions
[01:02] however intentionally not all of these
[01:05] interactions work to begin with ship
[01:07] items worked but clothing and armor are
[01:09] entirely different beast and so today we
[01:12] talked about the physics of why that
[01:14] isn't working
[01:15] sounds like a fun little thing let's
[01:17] take a look hello people of the internet
[01:19] we've got a shopping bug today that I'd
[01:21] like to walk you through so let me start
[01:24] by showing it off if you've been
[01:27] watching any of our recent ATVs and you
[01:29] see me on here talking about shopping
[01:30] we've gotten a new shopping interaction
[01:33] system here so same old interaction
[01:35] system we've had for some of the things
[01:37] we've been introducing like carry ball
[01:39] crates and stuff we are now putting in
[01:40] shops so you can walk up to these
[01:43] weapons on this play rack and you can
[01:45] inspect them and you can buy them so
[01:48] bring up over glass and i5u HD it sounds
[01:51] like a realistic price for this gun
[01:53] definitely not a test number or anything
[01:55] cool so you could buy these feature I've
[01:58] been working on recently but there has
[02:00] been a bug that we have just washed
[02:02] recently and I'd like to show you it so
[02:04] if we leave this shop and we're gonna go
[02:07] head over to casaba don't mind the guy
[02:10] in the floor there he's doing just fine
[02:15] okay so we're here in cassava and it
[02:20] should be immediately obvious that we're
[02:21] not getting the interaction highlighting
[02:23] in items we can't even bring up the
[02:25] different by or in Tryon prompts so this
[02:30] may be one of the rare or depending on
[02:31] who you ask not so rare occasions of an
[02:34] intentional bug and I checked this code
[02:36] in knowing that the shirts and any of
[02:39] these clothing items were not going to
[02:41] work with the interactions to begin with
[02:43] there's a series of complicated reasons
[02:45] why that is the case and I'd like to
[02:48] start to break those down so I'm just
[02:52] gonna hop over into our test map real
[02:54] quickly so here we are in the code this
[02:58] little bit here is entity component shop
[03:00] so this is all of the stuff that exists
[03:03] on our actual shopping entity in the
[03:05] level and that's one function we're
[03:07] looking here spawn item on first
[03:10] available rack is where our issues begin
[03:13] so there are two reasons why we're
[03:16] having this no interaction bug here the
[03:20] the first and broader reason is all of
[03:23] the items on our racks all of the guns
[03:25] all of the shirts and shoes anything you
[03:28] go into a physical store and you see on
[03:29] the rack is the actual item there so the
[03:33] gun that you see on the wall you could
[03:35] theoretically actually pick up and take
[03:37] up off the wall and start shooting it
[03:39] and this is very intentional because in
[03:41] the future if we ever want to add like
[03:43] stealing weapons off shop shelves and
[03:45] stuff like that it's really cool to have
[03:48] the actual weapon there whereas maybe in
[03:50] a different game you might see that
[03:52] there dummy items on the rack they're
[03:53] not really you know the actual item they
[03:55] just look like it that would simplify
[03:57] some things but all our designers have
[03:59] to go in and make dummy items for all
[04:01] the things you actually want to sell so
[04:02] we've chosen the route of using the
[04:04] actual items there on the shelves cool
[04:06] right so problem number two these items
[04:10] were not built by the designers intended
[04:12] to be used as we're using them now on
[04:14] the shop shelves so they did not have
[04:17] not all of them's had a physics setup
[04:18] and not all of them had interaction
[04:20] points setup now the reason the weapons
[04:23] already worked with little to no effort
[04:25] is they hand both of those already
[04:27] but these shirts do not sow in our code
[04:31] here you see this one little bit here
[04:34] we're checking to see if this has an
[04:37] interaction component if it doesn't the
[04:40] item we're about to spawn we add an
[04:43] interaction component so what we
[04:44] actually need to do is do the same thing
[04:47] for the physics controller so I've
[04:51] already got a little bit of code here
[04:52] that I'm just gonna paste in I'm gonna
[04:55] uncomment this right so this is doing
[05:00] the same thing as this but we're
[05:02] checking to see if there's an
[05:03] initializer for the physics controller
[05:06] now there's a set of complicated reasons
[05:09] why we need to do it this way but it's
[05:12] important that we set the parameters to
[05:15] have a physics controller initializer
[05:17] before we even spawn the object which is
[05:19] why we need to do it here right okay so
[05:23] this is the first bit here we've got
[05:25] physics great no problem right well now
[05:28] we run into another issue which you see
[05:29] in game development a lot because we're
[05:33] adding the physics before the object is
[05:35] actually spawned and we're doing it
[05:37] through code we run into a problem
[05:39] normally when the designer sets up
[05:41] physics and data Forge there is this
[05:45] physics component here and we choose
[05:47] what kind of physics that would have so
[05:49] rigid dummy static rigid to be like a
[05:53] soccer ball static could be like a shelf
[05:55] something that doesn't move we select
[05:57] this as a way of sort of gating what
[06:00] kind of interactions you could have with
[06:02] this thing we want you to push it around
[06:03] it needs to be rigid if we don't it
[06:05] needs to be static the problem is this
[06:08] is sort of locked in data Forge these
[06:10] specific parameters for rigidness or
[06:13] static Ness is something we don't
[06:15] directly have access to in the code so
[06:18] we have a problem if we look in our
[06:19] entity physics controller there is
[06:21] something important going on here every
[06:25] physics controller has a physical Iser
[06:29] the the physics system is a very
[06:31] complicated system built on many
[06:33] different layers and several different
[06:35] moving parts working at the same time
[06:37] but a physical Iser is just a small key
[06:42] part of this and basically what it does
[06:44] is you have a physics controller on the
[06:48] game code side of things and it uses a
[06:50] physical Iser
[06:51] to set up the physical entity in the
[06:54] physics side of the game code so we
[06:57] don't need to go into the details of why
[06:59] this happens like this but the short of
[07:01] it is until now we've always needed a
[07:05] physical Iser on objects and so you'll
[07:07] see bits of the code where if we don't
[07:09] have a physical Iser here if it's a null
[07:12] then we're just gonna fatal error just
[07:14] stop the game like we could never have
[07:16] gotten here and funnily enough mark
[07:18] abent happens to be the one who wrote
[07:20] this code so it's funny that I'm doing
[07:22] the bug smashers for it but we've
[07:23] decided that we're going to get rid of
[07:26] this we're still using the physical
[07:27] answer but we're going to get rid of the
[07:29] requirement that it is not null because
[07:32] in actuality there's only one really
[07:34] specific point where it definitely needs
[07:36] to not be null and in the case here of
[07:39] the shop items we can ignore that so
[07:42] there's a couple lines of code that
[07:43] we're going to change here scroll up
[07:48] here
[07:50] okay so in the beginning in the
[07:55] initialization of our physics controller
[07:58] we check to see if we've got this
[08:00] physical either we know here that we
[08:03] don't have it so we would hit this code
[08:05] path where we fatal error we don't want
[08:07] that we're going to turn that off and
[08:10] one other small change that we're going
[08:12] to do in the event that we did have no
[08:18] physical Iser
[08:22] we are just going to set our physical
[08:24] ization mode to none just to be sure
[08:27] because as I said the code can cope with
[08:29] not having the physical Iser in most
[08:31] cases so long as it knows your physical
[08:32] ization modes not and then we're just
[08:36] gonna hop over to one other file here so
[08:38] now let's build these changes we made
[08:41] and while we're waiting for the build to
[08:43] happen when you just put this on screen
[08:46] this is printing out status of our build
[08:49] and while we're waiting for that to
[08:51] happen let me recap what we've just done
[08:53] I know I thrown a lot of at you of
[08:55] physical eyes ears and physical ization
[08:57] modes and it's all really nonsense here
[08:59] but remember the reason we're doing this
[09:02] is because these shop items that don't
[09:05] have interactions and the reason they
[09:07] don't have interactions because they
[09:08] don't have physics you need physics for
[09:10] the player to interact with things so
[09:12] what we did was we ensured that if these
[09:16] shop items got spawned without these
[09:19] physics parameters that from dataforge
[09:21] because remember their spawn through
[09:22] code now if their responder code they
[09:26] don't have these physics data for its
[09:28] parameters that's okay they won't have a
[09:30] physical Iser we'll just ignore that and
[09:32] keep right on truckin and now we should
[09:34] be able to get interactions on these
[09:36] topics you know while we're waiting for
[09:38] this build I think I'm gonna help myself
[09:39] to some delicious snacks here don't
[09:42] don't mind me
[09:47] you deserve this mark abandoning bug
[09:50] smashers mmm delicious
[09:58] all right so we just got back on our
[10:00] test map here and let's go see if the
[10:03] changes we made are gonna work maybe you
[10:05] try and buy some pants and hey all right
[10:09] we got some highlighting there we can
[10:10] buy we could try on whole nine yards and
[10:13] it's gonna work for clothing too so
[10:16] goodbye you can try on for our shirts
[10:18] over here
[10:20] anything anything except armor mm-hmm
[10:26] now there's a whole different reason why
[10:27] armor actually isn't working right now
[10:29] but that's a bug for a separate day you
[10:32] know what maybe I should go talk to mark
[10:34] about this one so today we saw how the
[10:40] physical eyes were can give the objects
[10:42] in star citizen physics and further how
[10:44] the shop needs to override this so the
[10:46] shop items don't have a physical eyes
[10:48] err that way you can properly interact
[10:49] with them that was the way I slashed
[10:51] this book anyways hope you guys enjoyed
[10:55] this week's bug smashers until next time
[10:57] thank you for watching I'm out I'm gonna
[11:00] get some lunch
[11:01] it took forever Oh kind of filled up on
[11:04] snacks earlier but thank you for
[11:08] watching so if you want to keep up with
[11:10] the latest and greatest in star citizen
[11:11] and squadron 42 development please
[11:13] follow us on our social media channels
[11:15] see you soon
[11:19] you
[11:23] [Music]

# Star Citizen: Bugsmashers! - Insurance Inferance

**Video:** https://www.youtube.com/watch?v=6vUjq2Hab1U
**Date:** 2018-04-11
**Duration:** 15:47

## Transcript

[00:06] [Music]
[00:16] everyone welcome to the show I'm mark -
[00:19] he had to bring in it are setting up to
[00:20] the bug smashers nope this one's a
[00:24] splashers episode you know what kind of
[00:26] time for this I'm going to my trailer
[00:29] Wow
[00:30] well since mark gaben so rudely didn't
[00:33] ask this episode is about another
[00:34] exciting insurance bug
[00:36] let's get slashing alright so as I
[00:44] probably said in the intro we've got
[00:47] another insurance bug today this one
[00:49] involving ships inside ships so as you
[00:52] can see I've got my cyclone here very
[00:56] tightly parked in the back of my Cutlass
[00:58] this would happen with any ships but
[01:00] this is specifically the Reaper case I
[01:03] need to test so what happens if we make
[01:07] a claim on this Cutlass when we have a
[01:10] cyclone or an ox or any other thing
[01:12] stored in the back we make a claim on
[01:15] the cut list the ship inside or the
[01:18] vehicle inside just gone forever
[01:20] so to show you in the current state how
[01:24] it looks when it's busted we fly over
[01:26] here to this ESOP terminal and you'll
[01:30] see I've got two cyclones
[01:31] one of them is out on the pan the other
[01:33] one is stored so there's two in there
[01:37] we've got this parked out here now what
[01:39] I need to do is go to Alice R and now
[01:44] we're gonna make a claim on that Cutlass
[01:51] and I'm just flying in here to save time
[01:54] make it real quick
[02:00] there we go one on Shubin make a claim
[02:05] filed claim alright cool so that has
[02:10] been filed we're gonna go back to ship
[02:13] it and we're not gonna quantum travel
[02:17] because we don't want this video to be
[02:19] 30 minutes
[02:26] and voila there is only one cyclone here
[02:30] so the one inside is gone forever now
[02:34] really unfortunate so how about I break
[02:37] down why this is happening
[02:39] so you guys won't have to worry about
[02:40] losing your ships so we're gonna hop
[02:44] into the code here this is in the
[02:47] insurance system and in fact this is so
[02:52] four scroll up the function is process
[02:54] claim to next step and we're
[02:57] particularly concerned with this
[02:59] callback that we have in here called our
[03:01] entitlement exchange callback so there's
[03:05] actually a different bug in the past
[03:07] where ships that let me see if I could
[03:12] recall this correctly basically ships
[03:14] that you bought or added to your account
[03:15] after a database have been set up
[03:18] we're not insurable ships just so to fix
[03:21] this problem we needed to have this
[03:23] entitlement exchange where basically
[03:25] we're like alright this old ship is now
[03:26] the new one and switch all the web
[03:28] information so everything is properly
[03:30] routed so this is the final step of
[03:33] insurance once we made this exchange and
[03:34] to make sure that everything has
[03:36] happened properly we will we now are
[03:40] tracking two ships we have your old ship
[03:43] the one that got destroyed or abandoned
[03:45] or whatever and the new ship that
[03:47] insurance is just given you so the old
[03:49] ship we need to take this and say
[03:51] legally no longer belongs to you when
[03:53] you clean it up get rid of it because
[03:54] you've got your new ship from insurance
[03:55] so what we do is we do a change legal
[03:58] owner for entity right here and we're
[04:01] doing that on the old entity we're gonna
[04:03] remove it from your legal ownership and
[04:06] then for a good measure
[04:08] if the ship isn't spawn this old one
[04:11] we're gonna remove it right away from
[04:14] persistance this is what we were
[04:17] currently doing and this is why the bug
[04:19] is happening is what we need to fix so
[04:24] the crux of the issue here is if we
[04:26] inspect a change legal owner for entity
[04:29] we've got in our persistent data manager
[04:32] we've got a couple things going on here
[04:33] but basically if we change the legal
[04:36] ownership of the ship we're also
[04:38] changing the legal ownership of
[04:39] everything
[04:40] so all of the doors on the ship all of
[04:44] the windows turrets everything that is a
[04:47] child of the ship the legal ownership of
[04:50] those things need to change as well so
[04:51] like I legally own the ship which means
[04:53] I also legally own all the stuff inside
[04:55] so this is where the problem comes in
[04:57] because the old ship still has your
[05:00] cyclone in it we have now changed the
[05:03] legal ownership of that cyclone to be
[05:05] the universe it's not owned by you
[05:06] anymore which is why it will not show up
[05:09] in your ESOP terminals now technically
[05:11] in the persistent database it is still
[05:13] there but it is actually not not legally
[05:19] owned by you there's several types of
[05:21] ownership but that is the one of the
[05:24] ESOP ternal cares about so we need to
[05:26] fix this so if we hop back here we are
[05:29] going to delete these two lines of code
[05:32] here and there is one fun tonight
[05:35] I have not filled out yet but what we're
[05:37] going to fill out in this video so we're
[05:40] gonna call this function called
[05:41] clean up old ensured entity and we're
[05:45] going to do that with the old entity ID
[05:47] and we're going to do that with
[05:50] contained oh I think I called it yes
[05:57] okay
[05:59] all right so if we inspect this function
[06:03] here it should be totally empty because
[06:05] we're going to implement it here on
[06:07] camera
[06:16] all right there we go so what we need to
[06:19] do in this new function is similar to
[06:22] before we need to change the legal
[06:23] ownership of the old ship the one that
[06:27] we're getting rid of that I no longer
[06:28] own however what we need to do within
[06:31] afterwards for every ship inside this
[06:33] vehicle we need to loop or if every
[06:36] vehicle inside the ship we're claiming
[06:38] on we need to look at each of those and
[06:40] then change its legal ownership back to
[06:42] being the player because remember
[06:44] because everything is like a tree
[06:46] structure vehicles inside the other one
[06:48] would get legally changed too so we're
[06:49] gonna let them get changed and then
[06:51] we're just gonna change them back to
[06:54] beat the player that made the claim so
[06:56] if I just bring up my reference code
[06:59] over here the first thing we need to do
[07:02] is grab a reference to our persistent
[07:05] data manager
[07:28] all right now once we have that there's
[07:30] gonna be a couple things that we need to
[07:31] do the first thing is we need to
[07:36] determine if our ship has been spawned
[07:37] yet
[07:39] the reason this is important is because
[07:41] there's actually two cases we need to do
[07:44] different things for based on if the
[07:46] ship is still around when we claim
[07:47] insurance or if it's been despondent if
[07:58] it's still sticking around in our entity
[08:00] system
[08:15] all righty
[08:18] now the next step something that we were
[08:20] already doing before and I'm just going
[08:23] to copy and paste this for the sake of
[08:24] time is we need to change the legal
[08:26] ownership of the route of the old ship
[08:29] we're already doing this before so it
[08:32] still needs to be our first step here
[08:33] but now that we've changed the ownership
[08:35] we need to go back and change the legal
[08:37] ownership for the ships that were inside
[08:39] it so they still show up in our Aesop
[08:41] terminal way we do that is we need to
[08:43] loop over every ship that we have stored
[08:46] by the way I didn't mention this earlier
[08:48] but this this list here it's a vector of
[08:52] contained vehicles this is actually Cota
[08:55] added just before we started this video
[08:56] but basically when we do a query earlier
[08:59] up in the call stack we needed to grab
[09:01] the vehicle anyway from persistence so
[09:04] we just slightly changed that argument
[09:06] so not only grab the vehicle but it
[09:08] would grab all the items inside it that
[09:10] are also of a vehicle type small change
[09:13] I made before this just not showing it
[09:15] in the video right now okay so what we
[09:18] need to do is we need to iterate over
[09:19] all these contained vehicles so we'll do
[09:23] that here for the programmers in the
[09:26] audience this will look a little weird
[09:28] to you because I am setting this I to
[09:31] start at one and the reason we're doing
[09:34] that is because in this list of vehicles
[09:36] the first one is the vehicle itself the
[09:39] Cutlass so we want to ignore that the
[09:42] Cutlass is not inside itself we've
[09:44] already changed this legal ownership so
[09:46] don't worry about that so we're gonna
[09:48] start at one or start at I
[10:12] and so what we're doing here is we're
[10:15] changing its legal ownership of all of
[10:17] the contained ships to be what their
[10:20] previous owner was this will look a
[10:23] little funny because it looks like we're
[10:24] setting it's legal owner to what its
[10:26] legal owner is that it's just because
[10:28] this data is cached from before we did
[10:30] this change up here so setting it back
[10:33] to what it was before that's the
[10:34] important thing
[10:35] all right so this is really just the
[10:37] core of what we needed to fix this bug
[10:40] is just this little for loop here
[10:42] however there is one other thing that we
[10:45] need to do while we're in here in this
[10:48] for loop we want to check if the ship is
[10:51] D spawned and I'm going to copy and
[10:52] paste this code just for sake of time so
[10:57] we have one check if our ship is D
[11:00] spawned now I mentioned before we have
[11:02] different types of ownership in the game
[11:04] legal ownership and physical ownership
[11:07] for a variety of reasons we also want to
[11:10] change the items physical ownership if
[11:13] it's not spawned this is so what you'll
[11:17] see in a moment so we're moving
[11:18] persistent items parent we're gonna
[11:21] change that and the reason for that is
[11:24] after the for loop you'll remember the
[11:26] code that we deleted you had before we
[11:29] need to remove the old chip from
[11:32] persistence only if it's D spawned so we
[11:35] just tack that on the end here and what
[11:37] this will do is it will not remove the
[11:42] ship's inside the ships from persistence
[11:45] it's let's see if I've worded that
[11:47] properly your cyclone or your NOx or
[11:50] whatever is in your Cutlass we've
[11:51] changed the legal ownership however if
[11:53] the ship was despond we were also gonna
[11:55] remove it anyway with this code we had
[11:57] this code before so we need to prevent
[11:59] that too so there's really two things we
[12:01] need to prevent here legal ownership and
[12:03] physical ownership just happens to be
[12:05] physical ownership in this case only
[12:07] matters if the ship is not spawned
[12:09] great okay so this is all of the code
[12:14] we're actually gonna need to make this
[12:15] work we just filled up this clean up old
[12:17] ensured entity function and remember we
[12:20] called that from the broader entitlement
[12:22] exchange function back here so this is
[12:24] really
[12:24] last step of getting you a brand new
[12:26] ship when you claim insurance so we're
[12:28] gonna do now is we're gonna build what
[12:30] should take about five years and I'll
[12:32] get back to you then and we'll show you
[12:34] this bug hopefully should be gone okay
[12:38] so we're back in game now we've got the
[12:40] cyclone in our Cutlass I'm gonna go
[12:42] through the same repro steps that I did
[12:44] in the beginning and we're gonna see if
[12:45] hopefully we don't lose this forever all
[12:48] right so we're just gonna fly over here
[12:50] back to the terminal just so we could
[12:52] show that we've got a yep we've got two
[12:56] Cyclones there ones on the pad cool all
[13:00] right
[13:00] so we're gonna go to all sorry let's
[13:02] make a claim
[13:23] I'm stuck oh okay we're unstuck we're on
[13:29] stuck damn hang on
[13:31] keep this in keep this in all right
[13:41] Justin oh god they say I pushed me
[13:43] around okay
[13:44] all right all right now we're doing it
[13:48] um so here's our Cutlass right where we
[13:52] left it let's make a claim all right now
[14:01] now we now we see Shubin yeah Shubin
[14:08] okay
[14:17] all right and there's both of our
[14:19] cyclones we didn't lose it forever so to
[14:22] recap we needed to after changing the
[14:25] legal ownership of our Cutlass we needed
[14:27] to go in and look at all the vehicles
[14:29] inside our Cutlass and change the legal
[14:31] ownership of those back to our player
[14:33] who owns the who owned the Cutlass that
[14:37] way they're not lost forever our
[14:38] insurance terminal and that about wraps
[14:41] it up time to check back in with mark so
[14:43] as you guys saw we had a fun little
[14:45] insurance claim bug we're to ship in a
[14:47] ship but unlike dealing with those pesky
[14:49] insurance companies we just said hey
[14:51] developer let's go fix it what aren't
[14:53] you bad right yeah insurance no problem
[14:55] 1/6 the US economy solved the Atlantic a
[14:59] few lines of code easy fix
[15:01] done and done well hope you guys enjoyed
[15:04] until next time
[15:05] bug Smasher bug flashers Smasher Smasher
[15:11] go to my trailer
[15:15] you
[15:27] thanks for watching for the latest and
[15:29] greatest in star citizen squadron 42 you
[15:31] can subscribe to our Channel
[15:32] or you can check out some of the other
[15:34] shows and you can also head to our
[15:35] website at www.uvu.edu/library

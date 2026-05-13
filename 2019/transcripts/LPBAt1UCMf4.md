# Star Citizen: Around the Verse - Hovers Are For Lovers | 3.4 Ep. 2

**Video:** https://www.youtube.com/watch?v=LPBAt1UCMf4
**Date:** 2019-01-17
**Duration:** 10:15

## Transcript

[00:00] I
[00:01] [Music]
[00:18] [Music]
[00:29] [Music]
[00:45] [Music]
[00:53] hello and welcome to another episode of
[00:55] around the verse I'm Eric Kon Davis and
[00:57] I'm Josh Herman in today's update we'll
[00:59] take a look at how graev works in the
[01:01] new flight model and see recent work on
[01:03] playable female characters but first
[01:06] let's take a look at some recent
[01:07] Community Shenanigans our ever awesome
[01:10] Spanish Community got together for their
[01:11] recurring event series loen
[01:14] Quinta this time around they engaged in
[01:16] an epic vehicular battle in a huge
[01:18] crater on dayon yeah those events are
[01:20] always awesome yes they are
[01:25] [Music]
[01:43] the Los 50 crew losenta quentas thank
[01:46] you always brings it so moving on to
[01:49] development when creating an entirely
[01:50] new flight model as we are currently
[01:52] working on we cannot forget about gra
[01:54] Lev no we can't let's take a look at how
[01:56] gra Lev Vehicles will work when that new
[01:58] flight model goes live here's David
[02:00] Coulson and Andrew Nicholson with some
[02:02] insights into the wild world of hover
[02:04] bikes the old gra Lev system was heavily
[02:06] dependent on the old flight model and
[02:08] because the new flight model is a a lot
[02:11] of work in the difference of
[02:12] implementation um the old grav have
[02:15] stopped working when we move toward the
[02:17] new flat model the kind of fundamental
[02:19] difference between a a gravl Thruster
[02:21] and a regular Thruster is that it needs
[02:23] a surface to work with so you need to be
[02:26] close to the ground to get the traction
[02:28] and the speed you need and so a onside
[02:31] modifying and refactoring the
[02:32] implementation of gravl we thought that
[02:34] we would reconsider how we want it to
[02:36] feel and how we wanted to actually you
[02:38] know play and so that prompted um a
[02:42] different implementation that we think
[02:44] better achieves the design goals that
[02:46] have been set out for this we wanted to
[02:47] make it feel like you had uh risk again
[02:52] previously you were getting too um
[02:54] disconnected from the from the terrain
[02:56] make the player have to make choices
[02:57] based on the terrain that's up and
[02:59] coming if the if it looks Rocky and
[03:01] rough you want to avoid that and you can
[03:03] sort of build tracks around that sort of
[03:05] thing previously the bikes I think were
[03:07] a little bit too easy they used to hover
[03:09] over obstacles which we no longer do in
[03:11] the new gravli model it's a little bit
[03:13] more challenging um but there's also a
[03:15] little bit more depth for you to learn
[03:16] how to drive nicely and properly this is
[03:18] just how we're how we're modeling this
[03:20] to sort of make it feel a little bit
[03:22] more interesting and a little bit more
[03:25] uh fun to control with with a few a bit
[03:27] more depth and so as you're hovering
[03:29] this is ion model will inform the gra
[03:31] plates how much thrust they need to
[03:33] provide to hold the bike at its at its
[03:35] certain height that it needs to be and
[03:37] we have a lot more control over this now
[03:38] we can sort of modify the height as
[03:40] you're going so if you want to like fly
[03:43] over rocks and stuff you can hold space
[03:44] and it will like go over the tops of
[03:46] rocks and things like that and then the
[03:48] the jet ski model is
[03:51] essentially simulated as though you were
[03:54] semi submerged in water we have this
[03:56] like fictitious water around the bike
[03:58] and then as you're going through the
[04:01] water um we'll model the amount of
[04:03] friction that the the water is putting
[04:05] on the side of the bike and then that
[04:06] will inform the thrusters on the side of
[04:08] the bike what thrust they need to be
[04:09] giving at any point in time um so we
[04:12] still have the thrusters effectively
[04:13] driving the bike and the grab plates but
[04:16] the way they're deciding how to thrust
[04:18] is a lot different to how it used to be
[04:20] um it's a little bit more complicated I
[04:22] guess but it feels a lot nicer to drive
[04:24] the bikes so I think it's absolutely
[04:26] worth it I think overall the changes
[04:28] we're making with the grav l system are
[04:30] going to make for a enjoyable experience
[04:32] the players going to feel more connected
[04:34] to the bikes they're going to feel more
[04:35] like um bikes overall anyway rather than
[04:38] just floaty spacecrafts across the the
[04:41] planet they want they're going to be
[04:42] connected to the ground um and all the
[04:45] potential terrain issues we can
[04:46] introduce can result in some quite
[04:49] exciting new race tracks going forward
[04:51] in the future that looks really cool it
[04:53] does it looks awesome you cannot wait
[04:54] for the new flight model all right
[04:55] moving on devs have been adjusting
[04:57] animations for playable female
[04:59] characters in order to differentiate
[05:01] some movements from their counterparts
[05:02] let's go to Brian Brewer for more info
[05:04] about the process of retargeting
[05:06] animations right now we are undergoing
[05:08] the arduous task of retargeting all of
[05:10] our male animations to our female
[05:12] character typically in games males and
[05:14] females share the same skeleton uh but
[05:17] that has a few drawbacks like the
[05:18] females tend to be masculine in our game
[05:21] we decided we wanted to have a unique
[05:24] skeleton for our female so that she is
[05:25] unique and different from our male
[05:27] character but this does however come
[05:29] with a few um challenges that we have to
[05:31] overcome for example her arms and her
[05:34] legs have different proportions than her
[05:36] male we have two ways of retargeting our
[05:39] animations we have an automated approach
[05:42] and we have a manual approach each has
[05:44] its own advantages and disadvantages the
[05:46] automated way is headed up by Rob Howen
[05:48] our content tech department with
[05:51] thousands of animations it's purely imp
[05:53] practical to be able to do everything by
[05:56] hand our manual method is reserved for
[05:58] retargets where we we want a higher
[06:00] Fidelity it's usually done by the
[06:02] animator who did the mail animation
[06:04] after it's been approved it's usually
[06:06] for when we want to have in interaction
[06:08] with an object like a spaceship uh and
[06:11] it opens up a set of controls for us so
[06:13] that we can better have contact points
[06:16] uh and interactions with that object
[06:18] after an animation is finished and
[06:20] approved by our animation director we
[06:21] import the female character into our
[06:23] scene with the click of a button she is
[06:25] being driven by the male character we
[06:27] then take a little bit of time to turn
[06:29] on on and off certain pull and reach
[06:31] effectors over the course of the
[06:32] animation we also keep in mind technical
[06:35] requirements such as headcam for the
[06:38] player View and the origin node which we
[06:40] call the locator Locomotion when we are
[06:42] happy with the result we bake down the
[06:44] live retarget and Export to game for
[06:46] testing the advantages of first
[06:49] retargeting all the male animations to
[06:51] the female uh is that we're able to get
[06:54] everything in game and hand it off to
[06:56] design right away they're no longer
[06:58] having to wait for animation to supply
[07:00] them with
[07:01] content uh one of the disadvantages
[07:03] though is that the female will still be
[07:05] very masculine in some cases it doesn't
[07:07] matter you'll never notice in other
[07:10] cases we definitely need to replace
[07:11] those animations with properly shot
[07:13] female motion capture once we've
[07:15] successfully replaced all the retargeted
[07:17] animation with properly shot female
[07:20] motion uh it will make our game feel
[07:22] more alive uh it'll give um variety to
[07:25] our universe and uh hopefully make
[07:27] everything feel more immersive
[07:30] so playable female characters MH what
[07:32] are you the most excited about getting
[07:34] that new playable character into the
[07:36] game I think I'm just excited about
[07:38] bringing the additional choice to the
[07:40] players uh just kind of getting an extra
[07:43] another gender into the into the verse
[07:45] is going to be an exciting thing we've
[07:46] been talking about it for a really long
[07:48] time yeah I think it's just exciting to
[07:50] finally be able to provide that to the
[07:51] players so we won't be able to talk
[07:53] about this much after it gets out but
[07:55] what have been the challenges to get
[07:57] this new height rig into the game and
[07:59] everything that the world currently sure
[08:01] Brian was kind of mentioning it shortly
[08:03] but you know getting all of the the
[08:05] skelet an entirely different skeleton of
[08:08] the game is really complex and it
[08:09] doesn't seem like it at first but it's a
[08:11] completely different proportion so all
[08:13] the weapons they're going to use all the
[08:15] ships they're going to use all the
[08:16] usables they're going to use everything
[08:17] needs to be tweaked because it's a
[08:19] different skeleton um so it's a lot of
[08:21] work from a lot of people and it's it's
[08:23] an exciting moment for us to finally be
[08:25] able to deliver that yeah so we I mean
[08:27] you know again we've talked about this
[08:28] before we have female
[08:30] NPCs why is it so hard now to do
[08:32] playable and again you probably answer
[08:34] this question many times the last many
[08:35] years but what why you know we got
[08:36] female NPCs what's the difference uh the
[08:39] difference is that when you look at
[08:40] something like a shopkeeper or a mission
[08:42] Giver or something like that uh they
[08:44] have a defined set of of animations a
[08:46] Define set of data right whereas a
[08:48] player has has a ton of stuff that you
[08:50] can do you can shoot you can fly you can
[08:52] you shop you can do all these different
[08:53] things uh so it's really just the the
[08:56] amount that is being processed is just
[08:58] considerably more
[09:00] exciting times exciting time to be alive
[09:02] finally environment art continues to
[09:04] work on Walla and Lia the two moons of
[09:06] art
[09:07] [Music]
[09:14] Corp and That Just About Does it for
[09:16] this week's update if any of you are in
[09:18] the San Antonio area this weekend please
[09:20] make sure to stop by the annual PA South
[09:23] bar citizen event members of the cig
[09:26] team are planning on stopping by so make
[09:27] sure you say hello you can help head
[09:29] over to bar citizen. for more
[09:31] information and thanks to the
[09:32] subscribers of course for sponsoring our
[09:34] shows and thank you to all the backers
[09:36] for all that you do until next time
[09:39] we'll see you around the
[09:42] [Music]
[09:54] verse thanks for watching for the latest
[09:57] and greatest in Star Citizen of Squadron
[09:58] 42 you can subscribe to our Channel or
[10:00] you can check out some of the other
[10:02] shows and you can also head to our
[10:03] website at www.
[10:05] robertsspaceindustries.com
[10:07] thank you very much for watching

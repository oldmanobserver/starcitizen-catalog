# Star Citizen: Bugsmashers - Flight Controller Failure

**Video:** https://www.youtube.com/watch?v=DWqoZIMLCbg
**Date:** 2017-08-16
**Duration:** 7:22

## Transcript

[00:06] [Music]
[00:15] [Music]
[00:19] yeah everyone we are here in my fancy
[00:32] dance test level and we have a
[00:34] compilation that can't fly and
[00:37] unfortunately this is a bug that I
[00:40] introduced well how this happened and
[00:43] why what do you got now I know I have a
[00:47] feature a little bit ago that allows you
[00:49] to get out of the seat and the engines
[00:51] will remain on your thrusters will still
[00:54] be there so if you set the cruise mode
[00:56] you could get out of your ship walk
[00:57] around your ship will still be flying
[00:59] forward before in the past we couldn't
[01:02] do that because the way that the legacy
[01:04] items worked the on and the use were
[01:09] connected so you the players set down a
[01:12] seat you used it
[01:13] therefore it was on that was key linked
[01:16] connection on item 2.0 we have separated
[01:19] this soyuz and turning on and off
[01:21] completely different and i'm going to do
[01:24] is introduce this to the thrusters
[01:26] change a little bit code in the vehicle
[01:28] code and now when you turn on the
[01:30] engines they'll stay on so if you get
[01:32] out of my ship will make some coffee
[01:34] my ship will keep going straight but
[01:38] unfortunately this broke the cut a lot
[01:43] pretty much 90% of the ships you know
[01:46] it's one of those things where i tested
[01:48] three shifts and of those three shifts
[01:51] only they work everything else was
[01:53] broken I test the m50 tested the the
[01:56] Gladius and a testing the Cutlass and
[01:58] they were so the code went in and then
[02:01] oh my god everything blocker everything
[02:04] on fire because ships couldn't fly why
[02:06] did that happen
[02:07] I'll show you
[02:09] so here we have this thing called a
[02:11] flight controller in our fun little
[02:14] hierarchy you have the ship which has
[02:16] this control manager it has a bunch of
[02:18] controllers that dictate control over
[02:20] items and when you take control of this
[02:22] specific controller which flight
[02:24] controller you have control of the
[02:25] thrust we have control of the engines
[02:28] you could fly the ship and I had to
[02:30] change a bit of code in here to allow
[02:32] you to to flying and get auto ship but
[02:36] unfortunately I forgot one bit of code
[02:39] when you sit down you get this call for
[02:42] start use and then when you leave you
[02:44] get this call to get removed and what I
[02:49] forgot to do was when the player sits
[02:51] down the fee interface we here's our
[02:56] player where we have these two things
[03:00] called enable/disable action handlers so
[03:05] I'm all suppose to re add this code to
[03:08] enable action handler flight controller
[03:13] action Handler and what is this this is
[03:16] the thing that turns on specific actions
[03:19] so if I hit buttons the spaceship can
[03:22] hear and listen to since I didn't turn
[03:24] it on you never got the controls to well
[03:27] move the ship and if I scroll back to
[03:31] where I was I should rien a ballista
[03:38] of course recode never likes my name
[03:44] there we go I got enabled hash to do and
[03:51] then when we're done we've got to make
[03:53] sure we disable the control shouldn't be
[03:57] able to have the spaceship listening to
[03:59] your fun little controls when you're
[04:00] walking around so we'll get Rico give it
[04:03] a try and see what happens
[04:16] all right recode is finished now we have
[04:19] to get out of the ship and back into the
[04:23] ship and crush everything we crashed
[04:27] because this is the beauty like this is
[04:31] actually a logical crash what happened
[04:34] was I added to come on gotta wait for
[04:38] visual studio to figure itself out all
[04:41] right so I added this bit of code here
[04:43] to disable the action handler but it
[04:45] wasn't enabled in the beginning because
[04:47] I added the code and recompile the game
[04:50] and because I disabled it the game
[04:52] crashed because it was like wait a
[04:54] minute you're trying to turn this off
[04:56] but I was never on to begin with oh and
[04:59] it dies so we're going to recut or coded
[05:03] again go back in the game and see what
[05:05] accident I think the thing that best
[05:10] summarizes this is this awesome picture
[05:13] found on the internet when one thing
[05:17] breaks everything breaks wall from us
[05:31] all right we're back in the game
[05:47] okay back in the game we're going to now
[05:50] ah Cutlass make sure we're able to fly
[05:57] around yeah it fly there's good and will
[06:02] spawn ourselves consolation and haha
[06:12] we're flying there we go
[06:18] everything's good everything sound we're
[06:21] able to fly again and we could get on
[06:23] the seat and let the ship continue to
[06:25] fly as it pleases hope you guys enjoyed
[06:30] so like time should I am oh the fun
[06:34] times when you add a new feature you're
[06:37] like oh I want to be able to get out of
[06:38] the ship and the thrusters are so long
[06:40] so you check it in because you tried it
[06:42] on the three ships then all what happens
[06:44] it breaks because you didn't check every
[06:47] other ship and it was just one of those
[06:49] silly things where I forgot to add one
[06:50] line and then everything works ah one of
[06:55] those days hope you guys enjoyed until
[06:57] next time thank you for watching so if
[07:00] you want to keep up with the latest and
[07:01] greatest in star citizen and squadron 42
[07:03] development please follow us on our
[07:05] social media channels see you soon
[07:09] you

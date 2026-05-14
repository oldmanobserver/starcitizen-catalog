# Star Citizen: Bugsmashers! - Don't Turn Off My UI, Bro

**Video:** https://www.youtube.com/watch?v=Ru3zwjVMP3A
**Date:** 2017-12-13
**Duration:** 9:00

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:17] I'm your host Mark eben I'm here to show
[00:20] you some fun bug everyone we're here in
[00:28] my fun little multiplayer test map and
[00:31] my favorite ship Cutlass yeah and I have
[00:35] a buddy who is also myself because why
[00:39] not play on the same server as me
[00:43] awesome so I'm I'm flying up there and I
[00:47] muscle behind here because let's make
[00:48] things confusing and as you can see his
[00:51] UI is on whoa
[00:53] I love random asset bugs so his you eyes
[00:56] on everything's cool
[00:58] I'm now gonna go run over get in the
[01:01] side of the turret remember when you'd
[01:07] sit coffee pinky up and you gotta make
[01:12] sure you spill it all right so this
[01:15] guy's in the turret he's going pew pew
[01:16] pew having his time of his life his you
[01:19] eyes on everything's dandy
[01:21] and he decides to exit when the eggs
[01:25] that happens his UI goes off and
[01:27] unfortunately it turns off the pilots UI
[01:30] ooh crap so not fun especially since
[01:36] people are gonna get in and out of seats
[01:38] and a multi cruise ship and we don't
[01:40] want random screens turning off because
[01:42] the guy in the back got out of his
[01:43] turret what's happening well a long time
[01:47] ago we made a decision when we
[01:49] writing the SD item framework we forgot
[01:52] to take into account a few things
[01:54] oops basically we have these controllers
[01:59] and we have items and we have the good
[02:02] old players players take control of
[02:03] controllers which then take subsequent
[02:06] control items so the player will take
[02:08] control of the weapon controller which
[02:11] will then take control of some weapons
[02:13] well in the case of the UI screens the
[02:16] player is taking control of his
[02:17] dashboard and the dashboard will observe
[02:20] other things so that could promptly
[02:22] display them on the UI unfortunately
[02:24] when you have two
[02:26] dashboards they kind of interfere with
[02:29] each other because the UI for turning on
[02:33] and off stuff is actually handled by the
[02:35] controller's themselves so say we have
[02:38] an energy controller which controls
[02:39] power we have two dashboards and they
[02:41] both want to watch it
[02:44] fortunately the dashboard will let's see
[02:48] let's go to drew rein online and let's
[02:55] go to that magical function any time the
[03:01] screen decides well the dashboard to say
[03:03] I need to turn off something or anything
[03:04] like that it will actually go to the
[03:06] controller and tell it to turn on or off
[03:09] so what that means if this guy the
[03:11] dashboard has a power loss or the user
[03:13] turns off all the screens it will go to
[03:16] the energy controller and turn that off
[03:18] which turns off this guy's UI because
[03:20] the controller itself has DUI what we
[03:24] need to do instead is make the
[03:25] dashboards control that aspect because
[03:28] all they want to know is the information
[03:29] on the energy controller they don't care
[03:32] if it's if that thing has controlled the
[03:36] UI on or off so we need to separate a
[03:39] bunch of fun code
[03:42] so here is the awesome controllers
[03:44] energy weapon you name it it's basically
[03:47] this is the base class and any time here
[03:53] it is we have it's this UI state that
[03:56] gets toggled whenever it gets turned on
[03:59] or
[04:00] it gets attached this updates all the UI
[04:02] states now we don't actually want this
[04:05] to do any of that so we're gonna use the
[04:08] good old magic delete key delete
[04:11] everything there we go
[04:14] deleted magic functions so we'll delete
[04:18] this guy because we don't want tend to
[04:21] control any more magical UI he has no
[04:26] control of UI but now we need to make
[04:30] the dashboard taking sole priority of
[04:33] all these things so we got asically
[04:36] gotta find all that area that we ripped
[04:38] out so the first part is here we don't
[04:43] need the controller's to turn everything
[04:45] on we need to do it ourselves so what
[04:48] we're gonna do I have this handy-dandy
[04:51] code right here already pre-made because
[04:55] I am lazy what this does is it will get
[05:00] all the active screens that are on the
[05:01] dashboard which is currently showing up
[05:04] and it will toggle the power state based
[05:07] on what the dashboard says it should be
[05:09] so the UI is now controlled by the
[05:11] dashboard so if this guy turns it off we
[05:14] need to make sure only his stuff turns
[05:15] off and that's what this beautiful thing
[05:17] does right here and let's see what else
[05:20] we have to change should be ha more
[05:23] errors so since we're getting rid of
[05:27] this part this is where we create our
[05:29] screens and we already know for online
[05:31] so we might as well pass this on to the
[05:35] screen so when we're creating the
[05:37] screens if dashboards already online we
[05:38] need to make sure those screens are also
[05:40] online so we need to make all of these
[05:44] lovely things have that same information
[05:50] let's go to that lovely
[05:55] function there it is
[05:57] ah so we are online passed through our
[06:02] awesome C++ lambda and then pass it
[06:05] where we do our register view shows I am
[06:09] all right what else calls great view
[06:12] this guy we need to see if we are also
[06:16] online I think that's all I was copied
[06:21] this guy do where did I put you there we
[06:27] go sit there so now let's make sure we
[06:32] have all the compile ah we don't need
[06:35] this anymore
[06:37] alright let's compile so what we have
[06:42] done is the dashboard has its own online
[06:44] power state we only need it to control
[06:49] the UI screens themselves and not the
[06:51] controllers so that way they could be I
[06:54] mean it's it's like I have my desktop
[06:57] right here I have three monitors and if
[06:59] I turn them on and off I expect only
[07:01] mine turn off and not Hosmer's back
[07:03] there so compile all the things there we
[07:10] are back after compiling and I got my
[07:13] pilot in the seat and my co-pilot in the
[07:16] back let's see his magical lo UI is
[07:20] still on and now enter the turret the
[07:25] dududududu coffee
[07:33] as I am I'm gonna you know I'm gonna
[07:37] turn off the power then I'm gonna eggs
[07:40] it because why not go back to the other
[07:43] guy and check it out
[07:44] the UI's still on magic this guy slowly
[07:50] gets out of the seat we and check it out
[07:57] his UI still on everything is awesome
[08:01] there you go
[08:03] hope you guys enjoyed so we had a little
[08:05] fun multiplayer bug there we're kind of
[08:07] like when you old used to play an n64
[08:09] and you were playing on that big old
[08:11] television screen multiplayer
[08:13] split-screen you turn off the screen
[08:15] everyone's screen turns off not good
[08:17] especially since what you see shouldn't
[08:20] be what the other guy sees so fixed up
[08:22] the code soothes the dashboard on this
[08:24] side and the dashboard on this side are
[08:25] independent of each other so whatever
[08:27] you turn on on here won't affect this
[08:28] guy over here
[08:29] and that will make sure that the pilot
[08:31] can fly and the guy and the turret could
[08:32] get in and out without causing havoc
[08:34] across the ship hope you guys enjoyed
[08:36] until next time thank you for watching
[08:37] so if you want to keep up with the
[08:39] latest and greatest in the star citizen
[08:40] the squadron 42 development please
[08:42] follow us on our social media channels
[08:44] see you soon

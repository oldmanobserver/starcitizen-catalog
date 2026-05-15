# Star Citizen: Bugsmashers! - Hostility Bites

**Video:** https://www.youtube.com/watch?v=_Jbf_rPsAjc
**Date:** 2018-01-31
**Duration:** 6:41

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:18] I'm your host mark abent and I'm here to
[00:20] show you some bugs all right so guys I'm
[00:28] right here in my cartoon land test level
[00:30] it's one of the beautiful things about
[00:32] game development is some days the builds
[00:35] are great some build are just amazing in
[00:38] today's builds of my amazing because I'm
[00:40] in cartoon land so in cartoon land I
[00:43] don't well I got tired of it so I want
[00:45] to fly up into my Cutlass but first I
[00:50] got to go drive all the way over there
[00:53] doo doo doo doo doo but um I can get up
[00:59] there you can ram into this thing a few
[01:02] times
[01:03] ah oh no as you can see on the top left
[01:07] as I was ramming into the ship that I
[01:10] owned I increased my wanted level all
[01:13] because the trains a little off from the
[01:16] bridge on the bottoms down so when I'm
[01:18] going back and forward in my Rover it
[01:20] collides with the ship a little bit and
[01:22] that increases my wanted level not good
[01:26] considering I own the ship now the
[01:29] business mechanic was mostly so that if
[01:31] you've ran into another player and being
[01:33] aggressive it counts toward your wanted
[01:35] level because well you're being rude but
[01:39] this shouldn't happen in the case that
[01:40] it's your own vehicles otherwise how are
[01:43] you gonna get your rover into the
[01:44] consolation when you have
[01:45] to move it around to get it in so here
[01:50] we are in this fun little excuse me
[01:54] thing called the player hostility
[01:56] mashing in it player hostility manager
[01:58] this guy is responsible for listening
[02:00] things all around the game you know like
[02:03] hey this guy shot that guy this guy
[02:04] cluttered that guy some guy stole a
[02:06] crate you name it it comes into here and
[02:09] it figures out what the wants and levels
[02:11] should increase decrease in all that
[02:13] shenanigans well in this particular case
[02:15] it listens for when the vehicle I'm in
[02:18] hits another vehicle so when I hit
[02:21] another vehicle it checks to see the
[02:23] speed if I'm actually hostile toward
[02:26] that other guy and then jacks up the
[02:30] wanted level if it needs to be so if I
[02:33] ram into an enemy that's pretty fun so
[02:35] it's technically fine but if I ram into
[02:38] a friendly it increases your hostility
[02:41] however I am technically friends with
[02:43] myself so that will increase hostility
[02:45] not good so what we want to do is check
[02:49] if the vehicle that we rent and rent
[02:51] ramming into is basically owned by me so
[02:57] if I own this vehicle I don't want to do
[02:58] any damage and we do that by using this
[03:01] food weight gain component which is
[03:06] gonna go away into a completely this is
[03:09] an old component we still use and it's
[03:12] just that it holds some information
[03:14] that's important to us called the
[03:16] persistent information and the game
[03:20] objects key vehicle OOP a is our vehicle
[03:24] we need the vehicle that we're hitting
[03:25] we want to get the entity entity worried
[03:32] for the component
[03:39] now this guy will have this thing called
[03:44] a get owner original get on our GUI d GE
[03:50] ID and this is basically if this entity
[03:52] ID matches me I own it so if he matches
[03:56] me we're gonna we're gonna do nothing
[04:03] because I own this vehicle and I love
[04:08] myself too much to Chris though wanted
[04:13] level TM so we're gonna return out of
[04:18] here so when the game runs through this
[04:20] if I hit a hostile guy I'm not gonna
[04:22] jack up my wants level or if I hit my
[04:24] own vehicle I am NOT going to bump up my
[04:29] wants of levels so let's hit the magical
[04:31] recode button and see what magic it does
[04:35] all right so a recode is done I still
[04:39] have a wanted level so I'm going to
[04:41] reset that on the server Shazam I have
[04:45] no more want to level back up and put
[04:49] some brick points on to make sure that
[04:50] the codes doing the right thing we're
[04:53] gonna move up bit ramp am so we hit my
[04:57] own vehicle we're gonna see up moment
[05:01] truth oh I own this we're not gonna jack
[05:04] up the wanted level and now if I
[05:06] continue the game gets out and doesn't
[05:08] increase so now I could go back forward
[05:13] up down left right trying to get into
[05:15] position and I won't increase my wanted
[05:19] level because well I own this ship and
[05:21] the cool thing and now that we have this
[05:23] awesome framework when we have more of a
[05:26] system for like knowing who your friends
[05:29] are we can easily add some code going if
[05:31] you know the vehicle we just hit is our
[05:35] friend
[05:36] don't inject the wants of you level so
[05:40] if we have a party or something we won't
[05:42] increase the water level because you
[05:43] want to get in your friends consolation
[05:45] so lots of fun things later on but this
[05:49] today we least prevent you from getting
[05:51] a want to level when you wrap your own
[05:53] ship hope you guys enjoyed so as you
[05:56] guys saw we had a fun little bug where
[05:57] if I smack right into my ship I increase
[05:59] my wanted level which makes no sense
[06:01] because it's my ship I mean if I want to
[06:04] tear down my own tree house in the
[06:05] middle of a forest why should I get a
[06:08] want to level makes no sense so do a
[06:10] little fix no I can destroy all my ships
[06:13] all they want and they won't get a
[06:15] criminal rating hope you guys enjoyed
[06:16] until next time thank you for watching
[06:18] so if you want to keep up with the
[06:20] latest and greatest in the star citizen
[06:21] the squadron 42 development please
[06:23] follow us on our social media channels
[06:25] see you soon
[06:33] [Music]

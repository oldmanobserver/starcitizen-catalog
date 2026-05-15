# Inside Star Citizen: Tools Time | Spring 2022

**Video:** https://www.youtube.com/watch?v=yjJcv-9krUQ
**Date:** 2022-05-05
**Duration:** 9:21

## Transcript

[00:00] [Music]
[00:07] oh hello
[00:08] we talk a lot in the isc about what
[00:10] developers are making for you the star
[00:12] citizen community but what you may not
[00:14] know is that any large games development
[00:16] there's usually a small team dedicated
[00:18] to making things strictly for the
[00:20] developers themselves tools development
[00:23] is at the very heart of what makes game
[00:25] development possible and why each year
[00:27] is often more productive than the last
[00:30] when building the never before built
[00:32] it's often impossible to know exactly
[00:34] what you're going to need when you start
[00:36] but as time goes on developers begin to
[00:39] discover all the bottlenecks the process
[00:41] is that while necessary can often
[00:44] devastatingly impede their momentum and
[00:47] perhaps most commonly processes that
[00:49] work fine for a small game but don't
[00:52] always scale with a project as massive
[00:54] as star citizen so we thought we'd take
[00:56] this week's show and dedicate it to some
[00:58] of the true heroes gamers never see
[01:00] behind the curtain and enter the world
[01:03] of tools programmers
[01:05] up first let's go to montreal and meet
[01:07] some of the team there and learn a
[01:09] little about their most recent effort
[01:11] the mighty mighty bridge
[01:15] depend who you ask for
[01:17] the the toolkit might be the most
[01:20] important team of a prediction in our
[01:23] team
[01:24] the focus is to develop tools for
[01:26] artists designers and technical artists
[01:28] the scale in star season is insane so we
[01:31] can't ask for
[01:33] artists and designers to make all the
[01:36] game fully by hand
[01:38] technically we're on the pre-surgical
[01:39] side but our tools team is also geared
[01:41] for our like our on montreal office the
[01:43] main idea is uh if there is a need if
[01:47] there is a problem or if there's
[01:49] anything that could be made any faster
[01:51] or more simpler for a user then a tools
[01:53] programmer can go in and
[01:55] make their life easier
[01:57] i am the most important part of the most
[01:59] important team you know
[02:08] as star citizen is evolving we add more
[02:10] and more features over time so that
[02:11] means that we need to be able to set up
[02:13] and place new type of data and
[02:16] and so you need new tools for that we
[02:18] need to
[02:19] automatize a big part of the job to
[02:24] move further and faster
[02:27] obviously there is a lot to do because
[02:29] the world we try to create is huge
[02:32] and
[02:32] what we tend to do as technical artists
[02:35] is trying to make the link between the
[02:37] developers and the artists themselves
[02:39] because the artists are the ones or the
[02:42] level designers are the ones that tend
[02:44] to use the tools while the programmers
[02:46] tend to answer their needs one recent
[02:49] example of a tool we developed is the
[02:51] multibridge
[02:53] mighty bridge is a plugin for the game
[02:55] editor that link the game editor to any
[02:59] other software
[03:01] right now the main usage is to be able
[03:03] to
[03:04] work in houdini and have some effects
[03:06] directly in editor with the mighty
[03:08] bridge the communication is done in
[03:10] two-way direction it can send
[03:12] information and ask stuff to houdini for
[03:15] example and houdini while doing the
[03:17] computation is able to say okay you want
[03:18] to place a cave here give me all the
[03:21] objects in this 50 meters radius so that
[03:23] i can add up the recipe and then send
[03:24] back the result and with other
[03:26] technologies you don't have that two-way
[03:28] communication so it's also helped us
[03:31] doing more complex recipes and adapt the
[03:33] content to the game level
[03:37] the reason why the mighty bridge is
[03:38] important is
[03:40] there is a lot of
[03:41] technical resources and knowledge in all
[03:44] kinds of
[03:45] amazing tools like as i mentioned before
[03:47] houdini and by providing a way that
[03:50] artists can interact with the editor
[03:52] from the tools that they know and love
[03:54] and have learned to use over many many
[03:56] years they can make more easily the
[03:58] stuff that they want
[04:01] there's no time in between of like
[04:02] thinking about the logistics of
[04:04] everything it just like does it for you
[04:06] we made the mit bridge thinking about
[04:07] the future so that if we want to use
[04:09] other technology we can plug them into
[04:11] the editor using it and for example if
[04:14] we want to use blender or vsmax or maya
[04:17] or substance designer for example that
[04:19] we are using but if we want to plug them
[04:20] into the editor we could use my keyboard
[04:22] to do that
[04:27] tools programming is a core to however
[04:30] whoever
[04:31] interacts with anything to make content
[04:34] i've been working in the industry for
[04:36] 15
[04:37] 15 years i never found
[04:40] a project that has such ambitions and i
[04:43] feel like this game tends to always
[04:46] say there is
[04:48] a goal
[04:49] and we will do whatever it takes to to
[04:51] reach that goal
[04:53] mighty bridge is just one of the ways
[04:55] tools programmers work to improve the
[04:57] workflow of all developers allowing for
[05:00] an unprecedented two-way communication
[05:02] between independently developed
[05:04] softwares that were never intended to
[05:06] speak to one another shaving the
[05:08] downtime and removing the need for
[05:10] important exports all over the place but
[05:13] that's not where this week's tools time
[05:15] story ends for we're about to go big
[05:17] with a tool that we've been dreaming
[05:19] about internally since 2019
[05:21] a way to test our game and
[05:23] infrastructure at the scales we need
[05:25] while leaving developers free to
[05:27] continue
[05:28] developing
[05:29] let's meet the cloud test launcher
[05:34] i remember there were tests in the
[05:36] company where people asked can we get as
[05:38] many developers to join to see if
[05:41] servers work
[05:42] well we can do this this way but we have
[05:45] limited number of developers even if
[05:47] there is quite large number of them
[05:51] if you take into consideration how many
[05:53] players there will be in star citizen
[05:55] you will quickly find out that
[05:58] we need to have some way to emulate
[06:01] those users
[06:06] [Music]
[06:09] the idea was
[06:11] created like four years ago the first
[06:14] iteration was
[06:15] that you can go to the
[06:17] developer machines install the software
[06:20] and
[06:21] one person could simulate that traffic
[06:23] using those machines then
[06:26] came the next iteration of this idea
[06:29] where we wanted to move that to the cla
[06:32] actual cloud right now club test
[06:35] launcher allows us to create machines on
[06:38] the fly when we need them
[06:40] launch multiple clients on those
[06:42] machines and
[06:44] simulate actual traffic
[06:48] it actually
[06:49] launches a star citizen client connects
[06:52] to the servers and
[06:54] creates a very realistic testing
[06:57] scenario because you can say that there
[07:00] is network traffic you can say that
[07:02] those players even if they are emulated
[07:05] they are actually doing something in
[07:08] star citizen just like a normal
[07:11] connected client would
[07:13] so this is quite a big deal
[07:16] [Music]
[07:19] as you know we are going to introduce
[07:21] server meshing and to be able to do that
[07:24] we need to have reliable testing methods
[07:28] and cloud s launcher is one of those
[07:31] methods for example
[07:33] say that a client should go into a ship
[07:36] and fly somewhere maybe through a jump
[07:38] point
[07:39] which will it would involve switching
[07:42] servers and so on for us in near future
[07:45] that will be a very valuable tool to
[07:49] perform testing
[07:51] [Music]
[07:52] of course cloud test launcher is not a
[07:55] single person project many people helped
[07:58] in development
[07:59] i would like to shout out to martin
[08:02] senior which is my team lead who
[08:04] developed early versions of the cloud
[08:06] test launcher also
[08:08] to java who helps us
[08:11] in testing phase also ahmed and scott
[08:15] who helped us with the network part and
[08:19] cloud
[08:20] part of the development of the cloud
[08:21] slanter without them this would not be
[08:24] possible
[08:26] so what did we learn this week well we
[08:28] learned that mighty bridge allows our
[08:29] developers to use the right tool for the
[08:31] job wherever that tool may come from and
[08:34] to do so without having to leave the
[08:36] game editor that cloud test launcher
[08:39] will free up our developers in qa from
[08:42] tedious load bearings testing and allow
[08:44] them time to focus on new features and
[08:47] fixes respectively and that at isc we're
[08:50] going to continue exploring every aspect
[08:53] of game development before our time here
[08:55] is done
[08:56] for inside star citizen i'm jared
[08:58] huckaby we'll see you all next week
[09:01] [Music]
[09:20] you

# Inside Star Citizen: Throwing Shade | Spring 2020

**Video:** https://www.youtube.com/watch?v=KnYNh_WbmlM
**Date:** 2020-05-14
**Duration:** 9:09

## Transcript

[00:03] what is a shader oh that's uh that's a
[00:07] tough question
[00:08] Oh have another graphics code hey there
[00:10] is a little a shader well I I don't know
[00:19] exactly what it does make things look
[00:23] cool I'm sure Ellie gave you a good
[00:26] answer as well god I hope I'm right a
[00:28] shader is the tiny program a very small
[00:32] program just usually just a few hundred
[00:33] lines of code that converts the geometry
[00:36] into pixels on the screen so it will
[00:39] decide the colors combine them in
[00:42] whichever way we think is relevant for
[00:43] that particular object and then yeah
[00:45] figure out what color it wants for that
[00:47] pixel on-screen one of the things that
[00:52] we're really proud of is the way the
[00:55] vehicles look in stars and just to
[00:57] having untextured or flat shaded models
[00:59] that you can have the best model in the
[01:01] world it's not going to look great where
[01:03] it comes to life is the materials and
[01:05] since the star the project we've just
[01:07] been adding to our base shade up she
[01:10] called the alum shader but we didn't
[01:12] build it from the ground up so it was
[01:15] type of the decisions that were made and
[01:16] building that we couldn't really change
[01:18] without breaking existing assets we
[01:20] decided to build a suite of new shaders
[01:21] and more specific purposes and that
[01:24] shader is called the hard surface shader
[01:26] any new features we decided to add we
[01:28] just add to our new shares now we don't
[01:29] find bolt-on onto the old shaders that
[01:31] already had quite a lot of features
[01:32] things like clear coat
[01:40] well inter we know you guys like your
[01:42] ships theme but we also wanted to feel
[01:44] like a more realistic and sitting
[01:46] environment better and they'd wear
[01:48] overtime
[01:51] iridescent sand paint so we can get
[01:53] collar ship depending on the angle
[01:55] you're looking at it there's obviously a
[01:59] lot of ships in the game and converting
[02:01] them over to a new shader is not a
[02:04] trivial task but it is something that we
[02:06] are doing patch by patch every patch
[02:09] there will be some more ships that will
[02:11] be using the hard surface shader the
[02:12] biggest feature for hard surface was the
[02:14] intuition layer library which this type
[02:16] of a more hierarchical way of building
[02:19] up materials rather than ever attempt to
[02:20] start from scratch every time they make
[02:22] a spaceship or whatever it might be they
[02:24] can type of bill libraries and pull from
[02:26] libraries of existing type of things
[02:28] that other artists have built and
[02:29] combine them in a more intelligent way
[02:31] so that layer life was a crucial part of
[02:33] workflow to speeding up our workflow in
[02:35] the engine and standardizing it as well
[02:37] and the big thing from being converted
[02:39] to that hard surface shader is it allows
[02:41] us to do tint variants very easily for
[02:44] each one what we wanted to give
[02:46] controllers is to be able to tend to
[02:49] them layers and control them layers so
[02:51] we can then present more options to the
[02:53] design team and the end user each layer
[02:55] we use on our hard surface shader can't
[02:57] be tinted one of three different colors
[03:00] and then three colors are defined and
[03:01] what we call a tint palette if you look
[03:03] any of our ships in-game you can
[03:04] probably see this already so they will
[03:06] have for technical IDs for example it
[03:07] has mostly green there's a dark gray
[03:10] section and there's like a gold accent
[03:12] so there's your primary secondary
[03:13] tertiary well the thin system will allow
[03:15] the designs to do is once they work out
[03:18] usually with love what the colors are
[03:20] for safe action like even Microtech
[03:23] crusader are ninetails then you can set
[03:26] those colors up and then save that as a
[03:28] tint and then that can get by to
[03:30] initiate them by easily can just quickly
[03:33] make ship and then apply the tint and
[03:35] then you've got these different factions
[03:37] or paint schemes so the hard surface
[03:39] shader has been coming for a long time
[03:41] it looks a huge amount of potential for
[03:43] the vehicle team we're really excited to
[03:45] see what we can do with it what can push
[03:48] but what does that mean for you as
[03:49] players especially in regards to
[03:51] customizing your vehicle we're going to
[03:53] have a nice post on the website in the
[03:55] next few days probably next week it's
[03:58] going to detail what you can and what
[04:00] you cannot do both in the shorter near
[04:02] term so I highly recommend that people
[04:04] check that out one of our 43.9 s biggest
[04:08] new features was the introduction of
[04:09] prisons the first step in building a
[04:12] risk versus reward system for those who
[04:14] will choose to pursue a lifestyle
[04:16] outside the law now this week we took
[04:19] the opportunity to chat with Luke
[04:21] Presley about that first drop and talk
[04:23] about the next iterative patch the next
[04:25] quarterly patch and maybe just a little
[04:28] bit beyond that for me like you know
[04:31] space is like the Wild West and I think
[04:33] for most people it is like this kind of
[04:35] lawless like idea so it makes sense that
[04:40] prisons are awful like even worse than
[04:43] now or even more capable of being brutal
[04:48] and keeping you in I think everyone just
[04:50] wanted to explore that straight away
[04:57] obviously it's in its infancy and
[04:59] there's a lot more to come we know
[05:02] experiences vary with some persistent
[05:04] issues with mining and infinite
[05:06] transition screens but on the whole
[05:08] feedback has been quite positive even
[05:11] people who are criminals have been
[05:14] saying this has changed the way they
[05:17] play the game and improved it for the
[05:19] better like strangely now there's an
[05:23] actual I don't know meaning I guess
[05:26] everyone who works on it is extremely
[05:28] proud of it like oli especially who made
[05:30] for escape route
[05:33] is loving it and I think people can see
[05:36] how we are going to improve it in future
[05:38] and how that will make it a lot more
[05:40] interesting to be down there like when
[05:43] we had mission givers and things like
[05:44] that you'll actually maybe want to go
[05:46] there so 391 our main focuses but fixing
[05:52] obviously there's been speedruns but
[05:54] I've got out in three minutes which was
[05:57] late the way they did that was quite
[06:00] embarrassing
[06:01] for us like we left in a Ledge but
[06:03] definitely shouldn't have been there it
[06:05] was there to kind of break people's fall
[06:07] and actually slow them down the main
[06:09] fall you you drop into his lake is
[06:11] quicker if you don't hit anything on the
[06:13] way down in the next patch I just
[06:16] blocked up to like I think quite
[06:18] ingeniously like blocked up the two main
[06:22] paths that we didn't want them to take
[06:23] I'm sure they'll find some more and I'm
[06:26] really looking forward to it but it's
[06:28] something I'm not gonna spend the rest
[06:29] of my life kind of passion home we are
[06:44] looking at the things for get you into
[06:47] prison that shouldn't there's a few
[06:50] things like misdemeanors given you like
[06:53] crime stats and that obviously isn't the
[06:55] way it should work
[06:57] so you'll no longer gets crime stat for
[07:00] running glowing by the police and not
[07:02] stop in so for free 10 our focus is on
[07:05] finding new ways to earn merits and new
[07:08] things to spend them on in 3 9 you'll
[07:12] notice there's a commentary machine and
[07:14] that gives things out for free but our
[07:17] focus is on kind of turning that into
[07:18] our prototype a real vending machine
[07:20] that you pick and choose and pay for the
[07:24] items the way we are trying to like
[07:27] introduce content that gives merits is
[07:29] through like the prison itself giving
[07:32] out jobs so every now and again you'll
[07:34] find for one of the oxygen dispensers
[07:37] deep in the caves breaks down we put a
[07:40] marker on it and then like the first
[07:41] player to get there and fix it gets a
[07:43] load of merits so beyond 310 will be
[07:47] looking into more missions for get
[07:50] players into the prison like make them
[07:52] want to go there and that can include
[07:54] lawful players you can imagine in
[07:55] undercover role and we'll be expanding
[07:59] the prisons over there's new areas that
[08:02] you haven't seen before the kind of
[08:03] behind the scenes and that'll be an
[08:05] extra step on to escape in and then
[08:08] they'll just be more ways to earn merits
[08:10] once you're in there
[08:11] like more jobs more illegal and legal
[08:15] jobs when you're in there so what we
[08:17] learn this week well we learned that no
[08:19] matter how well we think ships look now
[08:21] there are still going to be ways to
[08:23] improve that going forward that the hard
[08:26] surface shader won't just make it easier
[08:28] for our designers to create color
[08:30] schemes and more vibrant paint jobs it's
[08:32] also the next step in that dynamic wear
[08:35] and tear we've all been looking forward
[08:37] to and that the future of Prisons may
[08:40] not be restricted only to those with
[08:42] criminal intent for inside star citizen
[08:45] and I'm Jared Huckaby we'll see you
[08:47] there
[09:01] you

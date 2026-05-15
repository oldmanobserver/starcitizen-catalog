# Inside Star Citizen: Cutlet Warning | Fall 2019

**Video:** https://www.youtube.com/watch?v=Gn_jMmneDV8
**Date:** 2019-12-12
**Duration:** 11:57

## Transcript

[00:05] planetary effects. Whether that's
[00:07] drifting sand and dust in the deserts,
[00:10] uh blizzards in the frozen tundra, or
[00:12] rainfall in the wetlands, using the
[00:14] various surface types covering Star
[00:16] Citizens, planets, and moons to [music]
[00:17] create particle effects that can enhance
[00:20] the look and feel of a location has been
[00:22] a goal of the project for some [music]
[00:23] time. That's why in this week's show, we
[00:25] met with members of the VFX team to
[00:27] discuss this important milestone on the
[00:29] journey towards dynamic planetwide
[00:32] weather and what [music] backers can
[00:33] expect to experience to some degree on
[00:35] all planets and moons in the upcoming
[00:37] alpha 3.8.
[00:43] These planet effects is something I'm
[00:44] really passionate about. Not least
[00:46] because even though it's like a big
[00:48] effort for the VFX team and and it kind
[00:50] of brings us all together and we have to
[00:51] coordinate really [music] well, it also
[00:53] brings us together with the other teams
[00:54] as well. So obviously without the
[00:56] environment art team, we wouldn't be
[00:58] able to generate [music] ground effects.
[01:00] So we have to work really closely with
[01:01] with those teams. audio as well. Like
[01:04] you can't really have have like intense
[01:06] weather effects or storm effects without
[01:08] the good audio that kind of bring, you
[01:10] know, really makes it feel like you're
[01:12] in a storm.
[01:15] That's always been the appealing thing
[01:16] of working in games anyway. It's it's
[01:18] working with multiple teams and all
[01:19] [music] kind of coming together and just
[01:21] being able to release this product that
[01:22] is really kind of incredible.
[01:24] So we were programmers, artists, QA all
[01:28] in the same team. So we have a lot of
[01:30] back and forth especially with these
[01:33] things. It's a process to get to these
[01:35] results.
[01:36] The important thing to [music] bear in
[01:38] mind is that a lot of people see this as
[01:39] weather but whilst weather is a big part
[01:42] of that the actual work [music] that we
[01:43] were doing was planet effects. So one of
[01:46] the drivers of the effects when we talk
[01:48] about rule sets one of the main things
[01:49] that we did there was wind. The surface
[01:52] type kind of designates [music] what is
[01:53] that effect going to be. So is it sand?
[01:55] Is it snow? And then it's the wind
[01:56] that's actually going to push those
[01:57] things [music] around. So when you've
[01:59] got the combination of wind and surface
[02:01] types together, that gives us the the
[02:03] [music] ground storms and the things
[02:04] that really kind of make it look very
[02:05] dynamic and spectacular.
[02:07] Surface type we use to uh mark up uh our
[02:11] planet terrain. Basically, we have a
[02:13] list of surface types [music] that the
[02:15] planet can be, whether that's snow,
[02:16] sand, soil, uh, rock, metal, and then
[02:21] that effectively takes up the top of our
[02:24] hierarchy of the planet effects where we
[02:26] can tie a whole library of effects to
[02:29] one surface type. And then with
[02:30] programming wizardry, we can basically
[02:32] say, okay, well, this whole area here is
[02:34] made of snow. Let's try and spawn all
[02:37] these snow effects in the library.
[02:39] One of the most important things that we
[02:41] had to do for this was some system for
[02:43] level of detail. When you're up in
[02:45] space, it's going to look different to
[02:46] when you're inside it. Plus, we don't
[02:48] want to be spawning the same effects
[02:49] because it's going to be expensive and
[02:50] we don't want to melt people's graphics
[02:52] cards. So, from far away, we can define
[02:55] a different effect that's maybe a bit
[02:57] cheaper, uh, looks a bit different and
[03:00] behaves differently. So, we can have up
[03:02] to eight levels of detail, and the
[03:03] closer you get, it'll switch out which
[03:05] level of detail is currently being
[03:06] spawned. So until you get all the way in
[03:09] and then that's where a special LOD,
[03:10] which the fog ling,
[03:13] which is the one that's immediately
[03:14] around you. But we can uh fill it up
[03:17] with the fog LOD, which is volutric fog
[03:20] that we can change the color of noise,
[03:22] density, whatever else. And it gives it
[03:24] a bit more of a full feeling to it where
[03:26] you had loads of big blowing snow
[03:30] particles going past the camera. So, we
[03:33] already had a a whole suit of particle
[03:36] effects uh visible on a planet surface,
[03:38] but on its own, it doesn't really sell
[03:41] the idea that you are inside of that
[03:43] storm or inside of that raincloud.
[03:46] That's why it was very crucial to add
[03:49] another layer of that uh realism where
[03:52] when you are flying through a snowstorm,
[03:54] you would see actual tiny molten pieces
[03:58] of snow on on the visor or if you are
[04:01] outside of your vehicle would be your
[04:03] your uh sorry, it would be canopy on a
[04:05] spaceship but the visor on your helmet
[04:07] if you are outside. And that actually
[04:10] binds these two elements together where
[04:13] you see all these storm effects outside
[04:16] and then you actually see that affecting
[04:18] you as a player because it sits
[04:20] literally on your visor. It affects your
[04:23] vision essentially which is nondirectly
[04:26] affecting the gameplay as well cuz it's
[04:29] not a statistic where the visibility is
[04:31] reduced. It's actually you having
[04:33] problems seeing objects. So, I think
[04:36] that's that's a really nice way of uh
[04:38] using visuals to drive the gameplay, but
[04:40] also making you feel as if the
[04:43] temperature was lowered. It was actually
[04:45] you've uh in the winter.
[04:48] So, what's the difference between uh
[04:50] planetary effects and weather? Well,
[04:52] really there is no difference in terms
[04:53] of the effects themselves. It's
[04:55] basically building a system for
[04:57] planetary effects that will feed into
[04:59] weather when we do get dynamic weather
[05:01] further down the line. The V4 tech
[05:02] really enabled us to do a lot of that
[05:04] stuff that we couldn't previously do
[05:05] with the with Planet Tech V3. Um the
[05:08] actual the things that drive the effects
[05:10] are really the important part of this
[05:12] process. And one of those drivers will
[05:13] be weather. So what we've actually got
[05:15] in 3.8 is we have surface types and we
[05:18] have the wind.
[05:19] So we have this uh global wind map. Um
[05:22] this is right now the the the best way
[05:25] for us to control where there will be
[05:27] wind and where there won't be wind and
[05:29] to change wind dynamically. This is a a
[05:32] texture wrapped around the the planet
[05:34] and it defines the wind direction and
[05:36] the wind speed. With this wind map, it's
[05:40] quite easy to change um for artists to
[05:43] say like we want to have like strong
[05:44] winds in a certain position. But we can
[05:47] also rotate this wind map and that's
[05:49] what we used in uh Citizen to make the
[05:52] storm uh appear for 3A. We will also
[05:55] have these rotating wind maps to create
[05:57] some kind of dynamic weather uh on most
[05:59] of the planets.
[06:01] Even with all the kind of planning in
[06:02] the world, there's always going to be
[06:04] things that you realize as you're making
[06:05] things. So, to be honest, as a process,
[06:08] it's been really interesting. There's
[06:09] been lots of new ideas that we've had as
[06:11] we've been uh implementing existing
[06:13] ideas. It might have been there's
[06:15] several examples where we kind of
[06:16] thought of better ways to do it. [music]
[06:18] There was new optimizations that came in
[06:19] that we hadn't really thought about
[06:20] previously, but became very obvious as
[06:22] we started to see the effects covering
[06:23] planets and from from out in space and
[06:26] things like that.
[06:29] when using particle system to spawn this
[06:32] high number of of particles. In order to
[06:34] do that, we need to implement a number
[06:37] of optimization techniques. One thing we
[06:40] had to do was implement a technique
[06:42] called half rest. And the way it works
[06:44] is you only render to a fraction of full
[06:47] resolution. Obviously reduces the
[06:50] quality. And in order to combat that, we
[06:53] have uh implemented some uh custom
[06:55] filters that we apply when we scale up.
[06:59] And this results [music] in hardly any
[07:01] visual difference, but uh consider it
[07:05] boost in performance.
[07:07] So pre-age particles is a new feature
[07:09] that we're uh we're implementing right
[07:12] now. It's going to go in the immediate
[07:13] future. Right now, when we move a
[07:16] certain distance away from where where
[07:18] we were 10 seconds ago, those particles
[07:22] could still exist, which is expensive.
[07:24] So, instead, what we're going to do is
[07:25] you move away, those particles get
[07:27] deleted cuz you don't see them anymore.
[07:30] And now we're going to spawn particles
[07:32] that have already aged a bit and give
[07:33] the impression that they already existed
[07:35] um rather [music] than them being born
[07:38] and aging from scratch, which should
[07:40] give the impression that the the planet
[07:41] is constantly spawning these effects and
[07:44] they existed even though [music] they
[07:46] weren't in your render distance.
[07:50] So the work that we've done on on uh
[07:52] planetary effects through the year
[07:54] really even from the very start of the
[07:55] year, it's been a really long road.
[07:57] We've put everything into it really as a
[07:59] team. We've been really focused. We had
[08:01] the kind of high level goals right from
[08:02] the start and [music] we've stuck to
[08:03] them. We've been really true to what we
[08:04] wanted to achieve. Um, it's been a it's
[08:07] been a kind of long journey, I guess,
[08:08] but we're really excited to see the
[08:10] results in [music] 3.8.
[08:13] Spaceships. For all the various aspects
[08:15] [music] that make up the Star Citizen
[08:17] universe, things always seem to come
[08:20] back to your spaceship. For some, a ship
[08:22] can serve as a home away from home. For
[08:24] others, simply a means to an end. Rather
[08:27] still, maybe just a way to show off to
[08:29] your friends and enemies. Of Star
[08:32] Citizen's 160 plus spaceships and
[08:34] vehicles, it's pretty easy to find a
[08:36] ship and reason that's right for you.
[08:39] And the folks at Crusader Industries
[08:40] have a new offering that they think
[08:42] you're going to be interested in. That's
[08:44] why we sat down with John Crew and Paul
[08:46] Jones to find out more about the
[08:48] recently announced Aries Starf Fighter.
[08:52] So the Aries star fighter is another
[08:55] heavy fighter that fits in our universe
[08:57] um to complement the Vanguard and the
[08:59] F8.
[09:00] So this was meant to be relatively small
[09:03] craft but with a massive punch and that
[09:07] in a nutshell was what is what we were
[09:10] given.
[09:11] The Aries with its uh size seven gun is
[09:13] great for tackling large and capital
[09:15] ships and heavily armored ground
[09:17] targets. It's the Star Citizen
[09:19] equivalent of the A-10 Warthog. It also
[09:22] has a big complement of size two through
[09:24] missiles held in both external missile
[09:27] pods or missile racks uh that can be
[09:30] customized and then it also has some
[09:32] internal bespoke racks uh that keep it
[09:35] all internally inside the body and just
[09:36] feeds them out in a big magazine style
[09:38] launcher.
[09:40] We did quite a lot of variations with
[09:42] guns in different places in the center
[09:44] on the side. We even looked at going to
[09:47] an S6, which is only one a drop of one
[09:51] number, but in terms of meters, it's
[09:53] quite big. [music] And then when you
[09:55] went to an S6, the ship then it looked
[09:58] more like a ship with a gun attached
[10:01] rather than a gun with a ship attached.
[10:05] So we have two variants for the star
[10:07] fighter. Uh one more energy focused, one
[10:09] ballistic focused that they are full
[10:12] hull variants. They're not uh just sort
[10:14] of named variants. The the energy one,
[10:17] the ion has an energy cannon by default,
[10:20] but it also has an additional power
[10:22] plant, shield, and cooler to power that
[10:24] because it is essentially a capitaliz
[10:26] weapon on a medium ship. So, it's well
[10:29] outside the normal parameters for a
[10:30] ship. So that is quite a difference to
[10:33] the inferno ballistic version which has
[10:35] a ballistic repeater sort of gatling gun
[10:38] on it that doesn't need the extra power
[10:40] plant and cooler to to function. So it
[10:43] trades that out for extra ammo capacity.
[10:46] It has much heavier armor which the ION
[10:48] doesn't have um because it it needs
[10:51] those extra components to function. So
[10:52] it can't deal with the extra weight of
[10:54] armor on top. So you have one ship with
[10:57] two different play styles within [music]
[10:59] the the single gun ship range.
[11:03] So what did we learn this week? We
[11:05] learned that the biggest and baddest of
[11:06] features can often take the collective
[11:08] efforts of teams and disciplines across
[11:10] the world. That planetary effects are
[11:12] the first major milestone on the road to
[11:14] full scale dynamic global weather making
[11:16] its way to Star Citizen. And that
[11:18] crusader spaceships aren't just intended
[11:20] to excel in their given task. They
[11:22] clearly want you to look cool as all
[11:24] heck doing it. For Inside Star Citizen,
[11:26] I'm Jared Huckabe. We'll see you next
[11:28] week.
[11:37] Thanks for watching. For the latest and
[11:39] greatest in Star Citizen Squadron 42,
[11:41] you can subscribe to our channel or you
[11:42] can check out some of the other shows.
[11:44] And you can also head to our website at
[11:46] www.robertspaceindustries.com.
[11:50] Thank you very much for watching.

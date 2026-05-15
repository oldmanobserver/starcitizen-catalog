# Star Citizen: Bugsmashers - Episode 36

**Video:** https://www.youtube.com/watch?v=5o3jxWVNhT0
**Date:** 2016-11-09
**Duration:** 8:09

## Transcript

[00:16] Hey everyone, welcome to Bug Smashers.
[00:18] I'm your host, Mark Abent. If you guys
[00:20] have never seen this before, it's pretty
[00:21] cool. I take you behind the scenes of
[00:24] both Star Citizen and Squadron 42 on how
[00:27] we develop and basically destroy these
[00:30] bugs. Uh you know, when we're developing
[00:32] things, things go haywire all the time,
[00:35] and I'm here to show you some bugs I get
[00:36] smashed. Yeah, let's smash some bugs.
[00:43] Bug Smashers!
[00:47] Hey everyone, we are here in my fancy
[00:49] dance test level.
[00:51] Um if you haven't seen this before,
[00:53] I like to play around and have a bunch
[00:55] of things in my level so I can test all
[00:58] sorts of things. And in this particular
[01:00] particular case,
[01:01] I broke grenades in multiplayer. So,
[01:05] hop on top of the ship, and if I try to
[01:08] throw a grenade,
[01:09] it kind of just falls down, and then it
[01:12] does an explosion. Oh god, I'm going to
[01:13] die.
[01:15] Woo, I got away.
[01:17] So,
[01:18] the grenade should, when you throw them,
[01:20] you know, travel a some distance, not a
[01:22] football length, but you know, some
[01:24] distance. Oh, I fell.
[01:26] Unfortunately, when you throw a grenade,
[01:28] they just plop to the ground, and they
[01:30] just stay there, and then you they
[01:32] explode, and everyone around dies. So,
[01:34] what's happening? Well, an unfortunate
[01:36] case of serialization.
[01:39] So,
[01:40] um we've been moving a lot of stuff to
[01:43] these component device things where um
[01:46] instead of jamming all this logic into
[01:48] one block, we separate all this logic
[01:51] into different blocks, and then we could
[01:52] take some of this logic this logic,
[01:54] stick it onto this item, stick it onto
[01:56] this item, and the designers could go
[01:58] crazy building these building blocks. Uh
[02:01] designers get these Lego sets. It's
[02:02] pretty cool. And one of these Lego sets
[02:05] is this thing called a physics
[02:07] controller. Uh the idea of this is it
[02:10] handles all the properties uh that a
[02:12] designer would need to do uh to set
[02:14] physics on an object. And these grenades
[02:17] are a type of physical thing called a
[02:19] rigid body.
[02:21] And how, when you throw this grenade,
[02:23] it's supposed to basically serialize all
[02:26] the information, the position, velocity,
[02:27] and all that fun over to all the other
[02:30] clients.
[02:31] So, the server will see it far away, and
[02:33] the client will get the network packet,
[02:35] and he will also see it far going far,
[02:37] far away.
[02:38] But unfortunately, that broke. Um what
[02:42] happened was
[02:43] um earlier, we were getting some
[02:46] disconnects on
[02:48] Woo, this guy.
[02:49] The ship. Um whenever the ship got
[02:51] destroyed, it exploded and disconnected
[02:55] everybody.
[02:56] So, what I
[02:58] ended up doing was Woo, where did it go?
[03:01] Ah, there you are.
[03:02] Um we have this thing called a game
[03:04] object where it's like kind of the root
[03:07] legacy component system before we
[03:09] started doing our stuff. We're trying to
[03:11] get rid of it, but we're still stuck
[03:12] with it.
[03:13] And anytime physics or anything that uh
[03:16] syncs, it goes through basically this
[03:18] block.
[03:20] Um so, I added this little bit of code
[03:22] right here that tries to serialize
[03:25] um the state of the physics and handle
[03:28] it for items, vehicles, and all these
[03:30] things that use this physics controller.
[03:33] Because prior to this, they were all
[03:34] doing it individually. It was a whole
[03:36] nightmare mess. So, I put it in one spot
[03:39] so that all of them
[03:40] could share the same bit of logic. But
[03:43] unfortunately, it never actually got in
[03:45] here for items because, due to legacy
[03:49] reasons,
[03:50] items have this thing called a capture
[03:52] profile manager.
[03:53] And in here, we have a profile manager,
[03:57] it doesn't run.
[03:58] Uh this profile manager, ideally, is if
[04:02] we change physics, we could change what
[04:04] stuff we serialize.
[04:06] Uh so, if we have a rigid body, we could
[04:07] serialize position, velocity, all that
[04:10] jazz. If we have something that's
[04:11] static, we just need a position.
[04:14] But the network needs a constant flow of
[04:16] information. So, if we're a rigid body,
[04:18] we have to always serialize that
[04:20] position and velocity. If we miss
[04:21] velocity, we'll get disconnected. If
[04:24] we're static, we always have to do
[04:25] veloc- uh position. If we do any more or
[04:27] any less, we get disconnected. Um so,
[04:30] the profiles is kind of a way to say,
[04:32] "Hey, now we're in this state, and now
[04:33] we're in this state." So, we could
[04:34] serialize the right information.
[04:37] And the server was setting up the rigid
[04:38] body,
[04:40] uh so, it's sending position and
[04:41] velocity, but the client wasn't
[04:43] expecting anything.
[04:45] So, when the client got the packet, it
[04:47] was like, "What the heck? I don't know
[04:48] what to do. You get disconnected."
[04:51] So, with that fun jazz,
[04:53] I was hoping to solve it with this.
[04:56] However, I didn't take into account this
[04:58] silly profile manager.
[05:00] So, the fun fix is to actually strip out
[05:05] that fun block and put it
[05:09] before
[05:10] um because we don't want this code to
[05:12] run anyway if we have a physics
[05:14] controller, whether or not we have that
[05:15] profile manager. We always want to
[05:17] serialize it
[05:18] into here.
[05:20] Because this old way would disconnect
[05:21] you if you weren't the right type, while
[05:23] this guy will serialize it
[05:26] if you're in the incorrect type or not.
[05:29] So, if we do send the rigid body, but
[05:31] we're still stuck in um some other type
[05:34] of physics, it will actually
[05:35] uh handle the information by doing this
[05:39] thing called a garbage snapshot where it
[05:41] even though we're in this state and we
[05:42] expect just position, it will also just
[05:45] read in that velocity or position just
[05:47] to say, "All right, we're not in sync
[05:48] yet, but we will be soon."
[05:50] And so, this guy handles all that.
[05:53] So, we make sure the game rules or I'm
[05:55] sorry, the game object goes through this
[05:57] path, so everything will be fine and
[05:59] dandy.
[06:00] Uh the next thing we have to do is get
[06:02] rid of this capture profile manager on
[06:04] the item itself and the vehicle, and I
[06:07] already did that for you.
[06:08] And move it into uh the physics
[06:11] controller, so he takes care of all of
[06:14] the profiles.
[06:16] All right. So, unfortunately, we have to
[06:18] restart the whole game. All right. So,
[06:20] the magic of recoding and editing has
[06:22] finished. Uh we're now in back into my
[06:24] test level, and we're going to go kill
[06:26] Bob here with my grenade.
[06:28] So, I'm going to stand back here,
[06:30] throw my grenade at him.
[06:32] Oh, there he go. Oh, I missed him.
[06:34] Let's try again.
[06:36] No! I hit my hand. I'm going to die.
[06:39] Ah.
[06:41] Uh things never work out as you want
[06:43] them in game development, but as you can
[06:45] see, when I throw grenades, they
[06:46] actually move now, even if they hit my
[06:48] hand. Uh
[06:50] good times.
[06:51] All right. Hope you guys like that bug.
[06:53] Uh the wonders of game design. You know,
[06:55] I try to fix one thing where if you're
[06:57] in a ship and you get disconnected, I'm
[06:59] like, "Ah, here's a good solution." And
[07:01] then I get an email saying I broke
[07:02] grenades. Uh good times. You know, we're
[07:05] still dealing with these legacy systems
[07:07] as we bring on our new systems, and it's
[07:10] just a constant battle to make the two
[07:12] in balance until we're finally able to
[07:13] say, "Hey, old system, go away. New
[07:15] system, take over control." Uh so, fun
[07:19] little thing with the net serialize, uh
[07:21] everything got sorted. Our vehicles now
[07:23] serialize correctly, our grenades now
[07:25] serialize correctly. No one gets
[07:26] disconnected, and I can throw grenades
[07:29] at Bob, and he explodes in the
[07:31] glory.
[07:33] Uh good times. Well, hope you guys
[07:35] enjoyed. Uh this was Bug Smashers. I'm
[07:38] Mark Abent at
[07:39] gameplay programmer here at Cloud
[07:41] Imperium Games in good old Los Angeles.
[07:44] Hope you guys enjoyed. Until next time.
[07:46] Thank you for watching. So, if you want
[07:48] to keep up with the latest and greatest
[07:49] in the Star Citizen and Squadron 42
[07:51] development, please follow us on our
[07:52] social media channels.
[07:54] See you soon.

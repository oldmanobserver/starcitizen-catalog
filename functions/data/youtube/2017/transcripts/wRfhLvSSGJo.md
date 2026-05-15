# Star Citizen: Bugsmashers! - Server Bugs

**Video:** https://www.youtube.com/watch?v=wRfhLvSSGJo
**Date:** 2017-03-15
**Duration:** 13:00

## Transcript

[00:06] [Music]
[00:16] Hey everyone, welcome to Bug Smashers.
[00:18] I'm your host, Mark Ament. I'm a senior
[00:20] gameplay programmer here at Ciga and I'm
[00:22] here to take you behind the scenes on
[00:24] today's hottest bugs.
[00:30] Bashes.
[00:33] Hey everyone, we are here in Crusader
[00:36] and I have two clients. Uh, client three
[00:40] or he's number two and then client one.
[00:43] The reason why it says two, three is
[00:44] because the dedicated server is one then
[00:46] two and three. So, I have my two clients
[00:49] and I'm going to have the third guy
[00:54] spawn a debug ship. Normally, I would
[00:56] run up to a terminal and spawn a ship,
[00:58] but because I am lazy and I don't feel
[01:00] like running, I am going to spawn a uh
[01:04] let's spawn a gladius.
[01:08] Woo. So, I spawned a Gladius, and he'll
[01:11] automatically get teleported into there.
[01:12] Oh, love debug commands. And I have the
[01:17] other client. Uh, let's see. We got to
[01:20] go find where that ship is. Let's go to
[01:22] light speed. There he is.
[01:25] So,
[01:27] so we have
[01:29] the guy in the seat. Pretty pretty
[01:31] standard stuff. And what we're now going
[01:34] to do is go back over to the guy in the
[01:37] seat.
[01:38] Guy's running around. Run. And we are
[01:41] going to disconnect.
[01:45] Goodbye.
[01:47] Let me remove this break point.
[01:50] All right, let's disconnect.
[01:54] And of course I will trigger break
[01:56] points everywhere else because of other
[01:58] debugging. But um so as this guy
[02:02] processes its exit, let me explain uh
[02:04] the bug and why we're here. Um there the
[02:08] bug is basically um when you hit two
[02:10] people or any number and one guy is in a
[02:13] ship and he leaves when he comes back on
[02:18] his machine.
[02:19] getting up out of the bed, spawning into
[02:21] the normal crusader area. But on
[02:23] everyone else's machine, including um um
[02:27] some guy watching it, like this guy
[02:29] right here, he will spawn back into the
[02:31] ship. And unfortunately,
[02:34] everyone
[02:35] um thinks he's in the ship except for
[02:38] the server and that local player. Um
[02:41] according to both of them, he's running
[02:43] somewhere else around um Crusader doing
[02:45] whatever he wanted to do. And now we
[02:48] have a desync between all what the
[02:50] remote players to see and what those two
[02:53] the server and the local client sees.
[02:57] And what that also means is you get some
[03:00] weird oddities that allow you to kill
[03:02] the player um in the ship when he's not
[03:05] even there. He could be running around
[03:07] and then he dies all a sudden because
[03:09] well it's reporting the wrong spot.
[03:13] So
[03:14] once this guy has fully disconnected,
[03:17] we'll see exactly what's going on.
[03:20] Actually, it takes a little bit to
[03:22] disconnect. So what we could look at is
[03:26] in here in the player code, um, when he
[03:29] gets deleted or destroyed, before that
[03:31] happens, we have to do a bunch of
[03:33] cleanup. And this particular section of
[03:35] the code is when the player cleans up.
[03:38] And as you can see here, when we clean
[03:40] up, we're telling um uh the vehicle,
[03:44] this is we call it the seat host because
[03:47] shenanigans. Uh we basically tell the
[03:49] vehicles uh we get all of his seats and
[03:52] basically say, hey, evict everybody and
[03:55] particularly evict this guy cuz he's
[03:57] getting deleted. And the server is
[03:59] supposed to tell everyone else, hey,
[04:01] this guy's getting removed.
[04:04] Um so it comes into this bit of code. on
[04:07] on the server and it will run exit. But
[04:11] if you notice, it's running this thing
[04:12] called exit init. And exit initial
[04:16] uh implementation to remove him from the
[04:18] seat. This will play an animation or
[04:20] teleport him to an exit position,
[04:22] whatever it needs to do. It's the
[04:24] implementation um that all clients will
[04:26] run. However, it's not the code path
[04:29] that set makes the server sell everyone
[04:32] to run it. It's like, hey, this is the
[04:33] stuff that they would be running. So
[04:36] it's responsible for running the exit
[04:38] code the actual implementation but not
[04:40] actually dispatching it to letting
[04:41] everybody know that hey I should exit
[04:44] instead of running exit int our
[04:47] implementation we should be running
[04:50] nope exit.
[04:53] Ah come on see exit
[04:59] there if I could spell. There we go. We
[05:04] should be running exit. Uh exit will run
[05:08] the implementation.
[05:10] Um it execute exit will do an animation
[05:14] then eventually do execute exit but it
[05:17] will also send the state to all the
[05:18] remote machines. And since the server is
[05:20] not going through this particular path,
[05:22] it's just skipping it and just directly
[05:24] removing him. All the remote machines
[05:26] aren't knowing that this guy shouldn't
[05:28] be in the seat anymore.
[05:30] Uh so he's still processing his exit. Um
[05:36] and
[05:40] we shall go to reset. So ideally what
[05:44] we'd want to do in here instead is
[05:47] change this to exit so that it runs the
[05:50] same sequence of events except it makes
[05:52] sure it dispatch it to all the remote
[05:54] clients.
[05:56] All right. So now this guy's back.
[05:59] So, this guy is still looking at the
[06:01] ship with nobody in it. And we're going
[06:04] to reconnect this guy in to see the bug.
[06:10] And as we see the bug, um, what we want
[06:13] to do to fix it,
[06:16] let's check if we're the server.
[06:22] Make sure we exit. And we want to skip
[06:26] transitions because we don't want to
[06:27] play an exit animation.
[06:30] And we want to force it.
[06:44] Now the other thing we could have done
[06:46] is instead of in here where we uh
[06:49] dispatch the uh the event uh we have all
[06:54] the clients do it. So that way they
[06:57] could also exit instead of having the
[06:59] server tell them which is true except we
[07:02] also want to make sure that the server
[07:04] is authorative over everything
[07:05] especially because of persistence and I
[07:08] mean when we have the same entity IDs we
[07:10] need to make sure that everyone's up to
[07:12] date and not just because some guy
[07:15] thinks a certain state should be in. So
[07:18] having the server dictate these things
[07:19] is always a a bonus. Now, there is code
[07:23] elsewhere that handles
[07:26] um removing the player properly when
[07:27] he's in the seat, but it won't correctly
[07:31] reset his um entity ID. And that's why
[07:33] we need the server to tell everyone that
[07:36] this is the case,
[07:40] especially since um before we delete the
[07:43] entities, it's up to the server to say
[07:46] which stuff was deleted. So, if the
[07:48] server says, "Hey, remove this guy from
[07:50] the seat." followed by delete him. Then
[07:53] we ensure um all the clients have the
[07:56] same uh logic.
[08:00] Let's load the level.
[08:05] All right. So, this guy spawned in. He
[08:08] thinks he's in the bed. Server thinks
[08:10] he's in the bed. However, that other
[08:13] client thinks he's attached.
[08:17] And he even has broken animations. So
[08:20] from the perspective of um the the
[08:24] remote clients, this would be everyone
[08:26] and this guy, they're out of sync.
[08:30] So let's give it a try with our fix and
[08:34] see what happens.
[08:39] Compile. Compile. Compile.
[08:42] See, this is the part they don't show
[08:43] you all the time. Yeah, we might fix a
[08:45] bug, but it takes a few bit of time to
[08:49] compile everything, restart all the
[08:51] servers, verify the fix, then give it to
[08:54] QA, make sure they verified it, and then
[08:57] hopefully a day or two later it gets in
[09:00] or a new bug arises because we just
[09:02] uncovered another thing that this thing
[09:04] was hiding.
[09:06] Ah, game design, art development.
[09:13] All right, we are back in business. So,
[09:17] let's
[09:19] fast forward. Spawn the gladius
[09:23] all over. And the other guy
[09:27] use magical cheats
[09:29] to fast forward. Let's see. Where did he
[09:32] spawn? There he is.
[09:35] [Music]
[09:37] All right. So, there he is. Now we're
[09:41] going to exit.
[09:45] Bam. Sorry, I walked out.
[09:52] Now we are processing the exit. So the
[09:54] server will tell all the remote clients,
[09:56] hey, this guy has left.
[09:59] As you can see, he left.
[10:02] And
[10:10] The other guy is slowly leaving. And I
[10:12] just realized
[10:14] um
[10:15] that true actually enables uh
[10:19] transitions where we don't want
[10:20] transitions on. All right. And just to
[10:23] be extra safe um before committing to be
[10:26] available, we will remove that. And what
[10:30] this will do is
[10:32] um allow the local client to perform
[10:35] this as well. However, the server will
[10:38] still dictate the exit so that um the
[10:42] local client will make sure he's in that
[10:44] state and just to reinforce it, the
[10:46] server will say, "Hey, flush it." And
[10:49] with those two things, the bug will be
[10:51] good to go. And
[10:54] once this guy
[10:58] Oh, no. client two
[11:01] um disconnects. We'll reconnect them and
[11:03] we'll see that he's no longer in the
[11:05] seat when he reconnects and he's in fact
[11:08] in his little cubby hole on all
[11:10] machines.
[11:17] All right, as you guys see, he connected
[11:19] fully and he's no longer in the ship.
[11:22] So, bugs fixed, problem solved. Hope you
[11:25] guys enjoyed. until next time's exploit.
[11:30] So, as you guys saw, we had a little uh
[11:32] bit of a bug on this the server where
[11:35] when a guy was leaving a server and he
[11:37] is inside of a seat, uh the server would
[11:40] remove him from the seat and wouldn't
[11:42] tell anyone else about it. Um we have
[11:44] everything being server authorative. So
[11:45] if server doesn't tell the clients or
[11:47] remote clients that something happened,
[11:49] uh things get a little bit wonky. And
[11:51] because that server didn't tell everyone
[11:53] else that this guy left the seat, um
[11:55] everyone else thought he was still
[11:57] there. And once he rejoined, since we
[12:00] have persistent um numbers for what our
[12:02] players are, our entity IDs, um everyone
[12:05] else thought he was still in the seat
[12:07] when he reconnected. So all the other
[12:09] remote machines thought he was still in
[12:11] those um uh previous seat. And even
[12:15] though he was like maybe miles away from
[12:17] re when he rejoined and from a
[12:20] perspective he's still in the vehicle
[12:22] but he's not now the server correctly
[12:24] informs everyone that he has left and
[12:26] now everyone sees that he has
[12:28] successfully left the seat. So when he
[12:30] reconnects he won't be in there and then
[12:32] that can't be used as an exploit. Well,
[12:34] hope you guys enjoyed. Until next time.
[12:37] Thank you for watching. So, if you want
[12:39] to keep up with the latest and greatest
[12:40] in Star Citizen and Squadron 42's
[12:42] development, please follow us on our
[12:44] social media channels. See you soon.
[12:52] [Music]

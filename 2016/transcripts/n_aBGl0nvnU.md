# BUGSMASHERS! Episode 21

**Video:** https://www.youtube.com/watch?v=n_aBGl0nvnU
**Date:** 2016-03-16
**Duration:** 9:39

## Transcript

[00:07] Closed Captioning provided by the Imperial
News Network.
[00:08] Mark Abent (MA:)
[00:09] Hey everyone welcome back to BugSmashers.
[00:11] As you can see I got myself a nice little
haircut and you know why.
[00:15] I’m preparing myself for the new movie barbershop
three, that fancy cut.
[00:21] I know it’s nice cut, but I like fancy better.
[00:30] Hey everyone, we’re here in my fancy dancy
Freelancer.
[00:35] I can put some posters up here sometime, it’s
a little bit bare, but regardless of that.
[00:40] We’re checking out a little bug here that
you guys may have saw during the PTU where
[00:45] when you leave your space and go out into
the world, you’re leaving our little zone
[00:52] and entering the world zone and during that
transition the player velocity tends to go
[00:57] insane.
[00:58] Sometimes it will push you down and you would
instantly die or you’d fly all the way across
[01:04] the map or the best case scenario which you’ll
probably see here is you’ll stop dead on.
[01:10] So I’m going to hold down the W key and
as I exit, I immediately stopped.
[01:16] I can keep flying now, but when I transition
out I stop and then my velocity gets wonky
[01:23] and as you can see I’m going in a completely
different direction.
[01:28] If I fly back in, weee…
[01:32] The same thing will occur.
[01:34] I should stop, yup I stopped, things get wonky
and now I’m back in the right spot.
[01:43] So transitioning from our interior grid to
our world grid, there’s some wonkiness going
[01:49] on and we’re going to take a look at some
of the fixes.
[01:53] There were quite a few that went into 2.2.
[01:58] Let me move my fancy dancy game over on the
side and we have here the command buffer.
[02:07] This is basically the area where all the joints
get updated and the skeleton or the player
[02:14] skeleton of the bones, they get animated,
they move around and we also have this thing
[02:19] called the physics location which is the point
where basically the skeleton is.
[02:24] So the skeleton is here and all the bones
move around.
[02:28] This little bad boy here updates the physics
position so if I move my bone or if I move
[02:35] it away, it has to update that and unfortunately
this physics position could be in zone space
[02:42] or world space because you were transitioning
to and from and it doesn’t handle that very
[02:48] well.
[02:49] So Ivo in the Frankfurt office...
[02:53] let me put back his code, did this little
trick to make sure that the physics position
[03:00] in this part of the code is always in the
world space.
[03:04] Basically if we have an owning entity which
will be usually the entity that the skeleton
[03:12] owns like me the player, we check to see what
zone it’s in and this bad boy right here...
[03:21] since players are always in the zone, he’s
either in the world zone or the zone of the
[03:25] ship, it will get the transformation and then
it’ll get the world space transformation
[03:32] so if our physics position is in the zone
or if it’s in the world space, we have to
[03:37] make sure we transform that to world space.
[03:41] So this bad boy will be like, “Alright if
you’re in the zone and doesn’t matter
[03:45] where you are, we’re going to transform
you into world space”.
[03:48] So now these physics locations are always
in world space and mostly because this code
[03:58] relied on everything being in world space
and it’s a lot easier to just let it do
[04:02] it’s world space calculations.
[04:05] Then when it’s time to talk to physics which
is this fun bad boy here, we’re gonna make
[04:12] sure that, let's see…
[04:14] In this part of the code, it gets the character
physics and it reassigns the grid, but there
[04:23] could be an instance where the physics is
behind and the entities and new grid and just
[04:29] haven’t synced yet, so if we’re going
to transform those positions into our physics
[04:37] now, there world space currently, but we have
to convert them to the zone that the physics
[04:42] is in.
[04:43] So the first thing we want to do is make sure
that our physics is going to be in the proper
[04:47] zone that our entity is in.
[04:49] So I’m doing this bit of code.
[04:52] What this does is we added a…
[04:56] I should say Ivo added current grid to this
function and what this does is when this function
[05:05] gets called we actually get the entity grid
of the player so that we immediately know
[05:11] the correct grid we should be in and so now
our physics goes in the correct grid and we
[05:18] add this little flag here saying, “Hey we’ve
done a grid change, check to make sure the
[05:24] physics should update my position or velocity
values based off that grid”.
[05:31] So before they were over here in world space
and now they’re in this Freelancer, they’ll
[05:38] move all of our position information to be
relative to that grid.
[05:43] Finally, this is where we used those physics
positions from the command buffer as you guys
[05:50] saw here.
[05:52] Since now they’re guaranteed to be in world
space these are going to be world space coordinates
[05:58] however it might be in the grid of some other
thing like the Freelancer.
[06:04] So now we’re feeding in world space coordinates
to a completely different zone, that’s not
[06:08] going to work.
[06:10] So, I’m doing some more fun code, there
we go.
[06:16] We have this queue transition which is basically
what we’ve done back here but we do it in
[06:25] reverse.
[06:26] So we get whatever zone we’re in, we get
the inverted ness transformation so now we
[06:32] transform our world space difference into
zone space and then we divide it by time.
[06:42] Basically, getting our differences in our
physics coordinates and applying that as velocity
[06:47] but since the world space, we transform it
using this inverted matrix to zone space and
[06:55] then divide it by our time and that gets us
our velocity.
[07:00] Now our positions are guaranteed to be world
space so it can do its calculations so when
[07:05] we send it back to physics we make sure we’re
in the correct zone, the entity is in and
[07:13] then we take those world space coordinates
and convert them to the proper zone space
[07:17] so we can apply our push velocity on the skeleton
physics.
[07:23] So recode just finished now, we’re going
to pop back into the game if I fly out, woo
[07:30] look at that, I keep flying out.
[07:32] So, I maintain my momentum instead of just
stopping and when I come back in, weee, he
[07:44] maintains his velocity except when he hits
the bottom he gets friction as he kind of
[07:48] slows down but jumping out I maintain my velocity,
woohoo.
[07:57] Zones… and as you can see there’s kind
of a camera glitchiness, there’s still some
[08:03] other parts we have to fix up too but we’re
slowly making it there and I hope you guys
[08:08] enjoyed.
[08:09] So, as you guys saw here we’re having some
fun issues with our world space to inner ship…
[08:17] going to and from making sure we keep our
velocities, our positions, our angle rotations
[08:22] and everything perfect so when you go from
one to the other you don’t notice it.
[08:27] There is still some issues and we’re working
them, it’s a difficult problem especially
[08:32] when you have a zone, within a zone, within
a zone and you want to make sure you go through
[08:36] them.
[08:37] Like you’re in a Hornet and you get out
of and then you’re in a big ship, in a big
[08:42] ship, in a big ship, you have to make sure
those transformations all look and feel correct
[08:46] and it’s a big challenge especially syncing
up our physics from our game codes since they’re,
[08:54] you know, in two different threads running
at different times, keeping those in sync
[08:58] at different points is very, very hard but
we have people in Frankfurt, the UK and even
[09:04] here working on it to make sure your experience
is better.
[09:06] Thanks to you guys for posting those bugs
especially when we had the PTU, they helped
[09:11] out quite tremendously, hope you guys enjoyed
and I’ll see you guys next time.

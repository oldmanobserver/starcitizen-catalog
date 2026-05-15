# 10 for the Chairman: Episode 77

**Video:** https://www.youtube.com/watch?v=DFkTG9YungQ
**Date:** 2016-02-29
**Duration:** 33:07

## Transcript

[00:07] Closed Captioning provided by the Imperial
News Network.
[00:14] Chris Roberts (CR): Hello everyone, welcome
to another episode of 10 for the Chairman.
[00:23] For those of you who have not seen 10 for
the Chairman, this is where I take 10 questions
[00:27] from subscribers.
[00:29] Subscribers are the subset of our community
that contribute money every month to allow
[00:33] us to do all this additional community content.
[00:36] Things like the Jump Point magazine that we
do every month which is somewhere between
[00:40] 40 and 70 pages and has behind the scenes
like articles on how we built ships or designs
[00:47] that we’re doing or lore in the universe;
as well as some fiction and course things
[00:52] like Around the ‘Verse, Bug Smashers, other
things like Ship Shape and all the various
[00:58] video stuff and of course this program so
thank you very much to the subscribers to
[01:03] allowing us to do all the community content
which I think really makes a big difference
[01:06] in Star Citizen because we get to update you
guys all the time and so therefore I kind
[01:12] of have fun and an opportunity to answer questions
from you guys in general.
[01:17] So brief update from me, I’ve just came
back to LA from being over in the UK and I
[01:24] think you guys had seen me and there was a
BBC, “Click” show that had come and visited
[01:31] us in LA and also in the UK and when I was
over in the UK that was where they were interviewing
[01:35] me.
[01:36] Now I’m back in sort of very sunny LA which
is quite nice, but only here for two weeks
[01:41] and then I’m going to go back and that’s
pretty much my schedule this year as were
[01:45] cranking out both Squadron 42 and Star Citizen
itself.
[01:50] It’s being in all the studios so I spend
two weeks in the US, two weeks in the UK,
[01:55] and a week in germany and it’s actually
quite, it’s a lot of fun sitting around
[01:59] and working with the various times, driving
through everything which we’re trying to
[02:03] get done.
[02:04] So the only thing I have to do so forgive
me if I look slightly tired cause right now
[02:08] is the witching hour for jet lag for me and
of course we’re recording this before the
[02:12] Monday when you’ll see this, so I’m still
on the backend of the jet lag, but there you
[02:17] go, but I’m quite happy to be back in nice
sunny LA before I go back to rainy Manchester.
[02:23] Anyway, alright let's get started.
[02:25] The first question is from SP3CTREnyc.
[02:31] I think it’s kind of meant to be Spectrenyc
with a backwards E ...
[02:36] [2:28] SP3CTREnyc asks: What type of work
is being done to increase the server population
[02:40] capacity?
[02:41] Should we expect to see 24 or 32 player instances
in the near future?
[02:44] CR: The answer to that is absolutely and I
think if you’ve been watching some of the
[02:48] chatter on the recent PTU and releases and
what’s going to be in 2.2 it is going to
[02:56] be 24 players.
[02:57] So we’ve been working hard on optimising
the areas so we can scale I think I mentioned
[03:03] before, the biggest issue we have is just
the overhead that the ships have because they’re
[03:10] very complicated they have multiple items
that have all this functionality, they need
[03:15] to talk to each other over the network, they’re
attached to ships.
[03:17] So a ship isn’t just one entity, in the
case of a Hornet it can be fifty or sixty
[03:21] in the case of a bigger ship it’s a lot
more than fifty or sixty.
[03:25] So they’re very heavy processing wise in
the server in terms of just simulation and
[03:31] network traffic.
[03:33] So in general that’s more of the limiting
factor which we’ve been working on.
[03:39] So we’re refactoring a lot of things to
make it much more smart about when it has
[03:45] to update, and all the other things.
[03:47] And that ties into the work we’ve done in
the past on this other system.
[03:50] We’ve been doing a whatever you want to
call it; a network LOD and an update LOD that
[03:56] scopes depending on whether you can see things,
how far away they are, whether they’re acting,
[04:00] whether it’s another player, whether it’s
relevant to you.
[04:03] So hopefully all that stuff, helps increase
the load that we can do and we’re doing
[04:07] things, we’re pushing more and more into
multiple cores and multi-threading to be able
[04:13] to do more physics processing at the same
time as we’re doing more entity updates
[04:19] in the simulation.
[04:21] Part of the result of that is moving to more
players in Crusader and we’ll continue and
[04:27] we’re expecting to continue to push that
over time to get more and more.
[04:32] We’re actually working on some backend server
mesh tech that will allow us to mesh a lot
[04:40] more players, in essentially what would be
kind of sort of the same instance.
[04:44] But that’s a little further along but I
think it’s exciting so I think we’ll be
[04:51] able to deliver probably more players than
we were originally thinking in concurrent
[04:56] areas.
[04:58] I think actually there’s a question later
about that.
[05:00] We’ll talk about it then!
[05:01] [5:06] Sage_Ailig asks: I am curious as to
how tri-monitor support will be handled.
[05:10] Most games don’t support the full resolution
of all three monitors.
[05:15] The picture is just stretched to the sides
on the outer monitors.
[05:17] I would like to know if Star Citizen will
render the picture for all three monitors
[05:20] without stretching to the sides, or will the
game just stretch out like many others do?
[05:24] No, I think right now you can set, say if
you have three monitor set up, three 1080p
[05:31] screens, you can get 5760 across by 1080p
across the three screens and you are essentially
[05:38] just going to have a greater field of view.
[05:43] We haven’t focused on that stretched screen
stuff for support so we’ve got some things
[05:48] that we need to work out.
[05:49] For instance, when you are wearing a helmet,
how much of that is getting occluded by a
[05:53] helmet versus not being occluded by a helmet
because one of the things I wanted to do on
[05:58] the design side was to give you a sense of
wearing heavy armour or a helmet: you get
[06:05] extra protection, you move slower, drains
your stamina more but also you don’t necessarily
[06:11] get as much visibility.
[06:12] I want a situation as you are playing the
game that you will wear outfits appropriately
[06:19] for the situation like you do in the real
world.
[06:21] For instance if you didn’t have the restriction
of visibility and bulkiness of an EVA suit
[06:29] when you are flying around, say in your Constellation,
why wouldn’t you always be in the EVA suit?
[06:33] In a game?
[06:34] Because then “Well what happens if we get
attacked and there is depressurisation?
[06:38] Well then I’ll live!”
[06:40] But what we want you to do is say you go out
and EVA and come back to your ship then you
[06:44] take your EVA suit and put it in the locker
and take the helmet off because now you get
[06:48] a much wider field of view and you’re not
wearing a bulky EVA suit so can sit down in
[06:52] the pilot’s seat and control things and
do stuff like that.
[06:55] We’re very much thinking about that tactile
experience to create your behaviour that’s
[07:04] appropriate.
[07:05] Then of course if you are getting attacked
and there’s a hull breach then you better
[07:08] rush and get your EVA suit on quickly before
there’s full decompression because if you’re
[07:13] not wearing a suit and it decompresses then
obviously that’s not good for you.
[07:17] So in regards to that, on the multi-monitor
setup, in terms or having the helmets we’re
[07:22] just trying to think how much would it encroach.
[07:24] But actually again that would be a good illustration
of why you would encourage people to maybe
[07:28] take their helmet off.
[07:29] Because if you took the helmet off you would
get that full three monitor surround and you
[07:32] get it, obviously, in the chase view and all
that and in the chase views but if you had
[07:37] a heavy helmet on maybe part of those monitors
are obscured by that.
[07:43] Maybe not as much as they are now but that
would be idea.
[07:47] So that is the goal.
[07:48] We may so some additional support in the multi-monitor
view for you to have specific fields of view
[07:53] set up for that.
[07:54] I don’t know if any of you remember the
AMD demo we did, quite a few years ago, when
[07:59] they were announcing the last round of new
chip technology, that was when we were first
[08:04] signing our partnership with them, and we
actually showed the game in 5760 by 1080 and
[08:10] we changed around the view ratio in such a
way to actually handle that format properly
[08:16] and not have it have that ‘fisheye’ stretched
effect.
[08:19] And it was quite cool and we may do a bit
more of that but that’s a little further
[08:25] down on in terms of our priority list because
there’s a lot of other things that we’re
[08:29] doing graphically and tweaking for before
then.
[08:31] [8:34] HyperToxic asks: Are there any short
term plans on integrating our hangar and planet
[08:38] side module with the mini-PU (Universe/Crusader)
module?
[08:41] Absolutely so that is the goal!
[08:44] So the goal is really that Crusader which
we’re call the mini PU and that really is
[08:49] the little baby PU and it’s going to be
growing up in front of your very eyes and
[08:53] we’ll be adding to it.
[08:55] So we’re just going to be folding in everything
to that.
[08:57] Which will be the hangar, which will be the
landing areas.
[09:00] So as soon as we have the planetary transition;
the procedural planet stuff that we’ve shown,
[09:07] in a state that we’re sharing with everyone
out there, which isn’t going to be that
[09:12] far away, it’ll be sooner than you guys
think then you won’t have any of this loading
[09:16] in separately to ArcCorp.
[09:18] So you’ll just go to the planet, and then
you’ll fly down, and get landing permission,
[09:24] and land in the landing area, get out and
move around, interact with people, buy things,
[09:31] and get missions, and get back in your ship
and fly back.
[09:33] So that is the goal and that is what we’re
trying to do.
[09:36] So the process is like you’ve already seen,
well you haven’t necessarily but in the
[09:41] PTU people have seen that we’ve rescaled
Crusader and this is true on 2.2 but essentially
[09:47] that’s going to start changing and that
will be Stanton system over the next few releases
[09:54] that we’re doing.
[09:55] So we’ll build out ot be Stanton and then
we’ll be going between the different areas
[09:58] and planets on Stanton, the space stations,
and then ultimately when all that’s working
[10:03] and we’ve got various missions and a lot
of the echo system working and we open up
[10:08] and have jump points and then we’ll move
into some other systems.
[10:12] So that’s the process, you’re going to
see the Star Citizen Persistent Universe grow
[10:16] in front of your eyes and I think the actual
level of fidelity and detail which you can
[10:21] see as you move around even in a very compressed
area like Crusader without that many things
[10:25] to do.
[10:26] So just means even though we don’t have
hundreds or billions of star systems there’s
[10:33] still lots to do and lots of detail and lots
of texture and that’s kind of our focus
[10:36] is to make this feel like an incredibly, cool
and alive and emergent world, that you can
[10:43] play a trader in some ways people can make
a whole living, a whole life staying inside
[10:48] one star system.
[10:49] So there you are, that’s the plans on that.
[10:54] [10:55] Shaidon Daimos asks: About the 12
month subscriber perk - “Your name in the
[10:59] game!”
[11:00] Will we be able to submit our real life name
if we want to?
[11:02] Or are you just going to take our Star Citizen
names?
[11:05] No, you can submit whatever name you want.
[11:07] The only reason why a lot of the times we
have a handle is because it’s ok to do a
[11:14] handle because you guys have basically said,
yup that’s your game name.
[11:17] So, that’s fine and some people like their
privacy but it’s up to you so if you want
[11:20] your real name we’ll put your real name
in, if you want your handle we put your handle
[11:24] in.
[11:25] [11:26] Wolf_Frakken asks: Will flight decks
and Wing Commander style carriers be the only
[11:31] form of carriers we’ll see in Star Citizen?
[11:33] Or will we see the drop bay approach you used
in Starlancer?
[11:36] Or another idea?
[11:37] CR: Well I think in general, I mean obviously
Wing Commander style is sort of influenced
[11:42] by the classic WWII and modern day style and
the Bengal, obviously saw back in the 2012
[11:52] video we did and will be in Squadron 42 is
very much along those lines and in some ways
[11:57] the Idris is like a small, I know we call
it a frigate, but really it’s kind of a
[12:01] small escort carrier or something like that,
or a scout carrier.
[12:06] It has a very similar flight deck where it’s
sort of encased, but can open up and you can
[12:10] fly in and out of it.
[12:12] We will have some other ships that will be
more like sort of helipad style.
[12:16] So if you think about say some modern day
ships, they have a helipad or a hangar for
[12:25] a helicopter and stuff like that.
[12:27] There’ll definitely be some sort of drop
down where bays open up and you drop down
[12:30] on some ships and ships can land and be inside
it and of course you have some sort of parasite
[12:36] style ships which the Constellation is a good
example, where there’s a Merlin that’s
[12:39] docked in the back that you can get in and
fly around.
[12:43] So we’ll have various different styles,
I think for instance the Vanduul carrier has
[12:52] a different sort of launching and sort of
loading mechanism for the ships it’s not
[12:57] quite the same for the human ones which makes
sense because they’re alien.
[13:01] So there’ll be variety and we’ll increase
that as time goes on, so there you go!
[13:08] Alright next question comes from ...
[13:09] [13:09] Coryphaeus asks: Howdy, got a question
about the procedural tech; how far is it going
[13:17] to go with the planets?
[13:18] We know about rocks and grass, but what about
life forms and plant life?
[13:22] Basically I’m asking about the blending
of artist created content and procedural content,
[13:26] what’s the mix like?
[13:28] Our plan is to have all levels of planet from
sort of the basic sort of rocky, barren planet
[13:35] which we sort of showed a little bit of when
we showed the tech at the end of last year,
[13:41] and by the way that’s moved on pretty significantly
from where it was when we showed you last
[13:45] year, so that’s looking a lot, lot better.
[13:47] But, ultimately, to take it to the level where
you get a Crysis level, which includes things
[13:51] like obviously the grass, which you mention
the rocks, the vegetation, trees, plants,
[13:57] water, oceans, streams, wildlife, alien wildlife,
birds in the sky, all that sort of stuff.
[14:06] Ultimately, our goal will be to create ecosystems
and some certain level of weather and stuff
[14:12] like that on these planets.
[14:14] So that’s sort of our roadmap and what our
goal is to use the procedural tools to sort
[14:19] of generate massive play areas cause an artist
can’t do that by hand, but it’s very much
[14:26] sort of Artist overseen and Designer overseen.
[14:33] So we don’t just have a formula and it just
creates stuff and that’s all it is.
[14:36] It’s using those tools to create these areas,
and then the Designers and Artists are influencing
[14:40] it by looking at areas and tweaking it, essentially
doing a little guide, hints to the procedural
[14:48] system of what they want to see in this area.
[14:50] They want this to be sort of a plain, or is
this mountainous, or is this going to be a
[14:56] desert, or all these kinds of things.
[14:58] We’ll also try to have some ecosystems with
some of the wildlife, and allow us to place
[15:04] down a lot of emergent gameplay that isn’t
necessarily around like landing areas, cause
[15:11] landing areas are very cool, and we build
those and we’ll build a lot of those out
[15:15] of pre-fab sets so we can build some fairly
quickly, and some of it will be pretty bespoke
[15:20] because yeah, Earth is going to be Earth,
and Terra is going to be Terra.
[15:24] But it’s a big universe and we’ve got
a lot of stuff to populate.
[15:26] So, we also need areas where you can land,
and for instance maybe you are going around
[15:31] as a miner looking for minerals, or all these
sort of things that once we have a procedural
[15:35] world, we can open up where you go down and
look for natural resources.
[15:39] Those can be generated procedurally, and then
players can go down and mine.
[15:43] We can also create all sorts of missions down
on planets, like for instance a supply mission;
[15:47] there’s like scientific outposts that we
just sort of have this couple different sort
[15:52] of temporary science outposts or installations
and the mission is to take supplies to them,
[15:59] but you can’t land your ship nearby where
the outpost is, so you have to land it at
[16:03] the closest available area and then load up
the supplies into your buggy or whatever vehicle
[16:10] you have, and drive it up to them and deliver
it to get payment.
[16:14] Maybe there’s a downed ship that you have
to rescue off a planet, and we can have farmers
[16:22] or settlers.
[16:23] So there’s a lot of kind of fun sort of
almost mission based immersion stuff that
[16:28] we can have so it’s not just about spawning
stuff out in space, there could be stuff that
[16:32] spawns down on planet’s surfaces that cause
destinations for you to do stuff.
[16:37] So that’s very much like what Tony, and
I, and Todd Pappy have been talking about
[16:41] in terms of like the mission, sort of the
bigger mission immersion setup that we’re
[16:46] going to do in the procedural universe.
[16:48] It will be very cool and it will be done to
the fidelity that we sort of achieve to, and
[16:53] you’ll see, which is very tactile, very
there, seeing it actually happen.
[16:57] I think that’s the strength of Star Citizen
is that instead of it being very big picture,
[17:03] very pulled back, it’s there looking at
you.
[17:06] Like you’re in your ship and you can see
the seat and the controls, and you get up,
[17:10] and you can go get in a bed or get in a shower,
or go to the toilet, or sit down at the dining
[17:16] table, and everything’s there.
[17:17] You can touch and use it so it feels real.
[17:20] We want that level of interaction with fidelity
throughout the whole game.
[17:24] So we won’t be able to do four hundred billion
star systems like that, but we’ll certainly
[17:27] be able to do quite a few using procedural
tools.
[17:29] I think it will feel really rich, and really
dense, and really cool.
[17:33] You have the tools in such a way that the
players actions are generating interest and
[17:39] action for other players or other NPCs.
[17:41] I think it will be a really, really, pretty
cool experience.
[17:44] So yeah, I’m very excited.
[17:46] I just wish these things were happening quicker!
[17:49] [17:50] Killarious Maximillion asks: You stated
that all parts of the universe will be instanced
[17:57] with max amount of players being inside of
an instance and many instances of that same
[18:01] space can be generated at the same time.
[18:04] How will that work so people and their friends
always get into the same instance to work
[18:07] as a team?
[18:08] Right so I touched a little bit of the top
of this Ten for the Chairman talking about
[18:15] the fact we are working on getting more and
more people into an individual instance or
[18:21] really what it’s more about is getting more
people into an individual game server.
[18:27] So right now if you play in Crusader on 2.2
they’ll be twenty four players that could
[18:35] be in that now that’s one game server instance.
[18:37] We actually have that, there’s eight of
those I believe, yep, the thirty two core
[18:43] server we’re running on and we have eight
game server instances on that one thirty core
[18:47] server each using four cores.
[18:49] Now the real goal would be not to have eight
on that, it would be rather to have one game
[18:55] server on that one thirty two core machine.
[18:59] So then if we have eight people now and you
add eight times twenty four, you’re getting
[19:05] a much larger number of people around me almost
at two hundred people at that point and that
[19:11] would be on one server.
[19:12] That’s without us doing more and more optimisations,
so that’s what we’re moving towards.
[19:19] Then on the client side, even though the server
could maybe deal with more entities because
[19:26] it doesn’t have to render, it doesn’t
have to move all the memory around from it.
[19:31] It just has deal with the background simulation
and updating stuff.
[19:35] The clients may not be able to but then the
clients would make sure what’s around you,
[19:39] what you can see is what it’s drawing and
updating and being told from by the server.
[19:46] Then on top of that we’re planning to have
seamless server transitions and basically
[19:53] mesh the servers together.
[19:54] So instead of ‘I’m in Stanton System and
I’m on one server or i’m on a second server
[20:00] or a third server in Stanton System’.
[20:01] That’s not the way Stanton’s going to
work.
[20:02] It’s going to be very dynamic and we’ll
actually have, say you start with one server
[20:08] and people fly around it can be anywhere in
Stanton just like what you can do right now
[20:11] in Crusader, but then as you go beyond the
cap say, just for simplicity’s sake, say
[20:19] we can run fifty people on a server right?
[20:22] So thirty people, forty people they’re all
running around Stanton doing their stuff no
[20:27] problem, AI’s are doing their stuff.
[20:28] But now a whole new bunch of people come in
and we move from thirty people to sixty people.
[20:34] Well ok that’s more than we can fit on one
server so at that point we will always have
[20:39] one probably server ticking over ready and
you keep one as a buffer.
[20:43] So we’ll say “Ok we’ve got more than
we can fit on one server”.
[20:45] So we migrate players to whichever server
is appropriate and we just arbitrarily go
[20:53] “Ok well there’s a clump of players over
here so this server will take care of them.
[20:58] There’s a clump over here and this server
will take care of them”.
[21:01] Both these servers have full global view of
the whole star system, these servers also
[21:06] talk to each other as well as the clients.
[21:08] The server essentially responsible for say
simulating the entities that its authoritative
[21:14] of.
[21:15] But it will also tell the other server if
the other server needs to know what the entity
[21:20] that this server did with.
[21:23] So basically that’s what edge case is.
[21:25] So it’s like ‘ok i’m updating these
people but there’s one guy over here that’s
[21:29] coming towards you and you’ve got a guy
over here’.
[21:31] So this server’s saying “Oh this is where
this guy is”.
[21:33] So this server knows and has a copy of him
in his memory space and vice versa so you
[21:39] can just basically resolve overlaps between
server control areas.
[21:44] So that’s kind of the aim.
[21:45] The idea is as more and more people come in
you spin up more and more servers and they
[21:49] all mesh together so you can ultimately have
hundreds if not thousands of people essentially
[21:54] all in the same instance.
[21:58] Then your real limitation is more about the
client and what the client can render and
[22:02] see on its side.
[22:04] That’s kind of the plan which is a more
dynamic and actually a more advanced than
[22:13] I think ultimately better solution than what
we talked before which was much more instance
[22:18] on top of each other and you can only ever
see thirty other people or fifty other people
[22:24] or whatever it would be.
[22:26] I think that it’s going to be good, so that’s
what we’re working towards.
[22:29] There will probably be some cases where there
will just be too many people.
[22:33] I can see in a landing area where there’s
maybe a thousand people hanging around the
[22:37] landing area.
[22:38] We just won’t be able to have a thousand
people.
[22:40] A hundred people will get together or five
hundred say “Let’s go to the courtyard”.
[22:44] Well on a client you just can’t render five
hundred people.
[22:47] It just won’t happen.
[22:48] So what we’ll probably do besides having
aggressive LOD’s at some point, you just
[22:53] cull out people beyond a certain area.
[22:55] But they’ll all be tagged and known there
as you move around as client people will come
[23:00] in and out of your visibility basically.
[23:03] Your sphere of visibility.
[23:05] I think it will seem pretty seamless.
[23:07] On top of that getting down to your friends
which is one of the key parts of this question.
[23:13] We will know who are your acquaintances, who
you’ve tagged as your person of interest,
[23:18] who you play, who is on your friends list,
stuff like that.
[23:20] So if you’re making decisions of who you
can see, at some point if there’s too many
[23:25] people in the client will think “I just
can’t render this many people I have to
[23:28] choose some entities or people to not see”.
[23:33] It would not be the people you as a player
have tagged as your friends or that you’re
[23:39] interested in.
[23:40] So they would get preference in terms of the
algorithm that determines who you see or who
[23:45] is culled out and who isn’t culled out.
[23:48] I think it’s going to be pretty cool.
[23:49] So you should be able to hang out and work
with your friends.
[23:52] I think the only issues we’re going to get,
which will happen ‘cause we have some pretty
[23:56] massive organisation, there is no way we can
possibly have one of those massive thousand
[24:03] people in a space battle setups.
[24:04] But I do think we will probably able to get
like quite a few hundred people doing that
[24:09] which will be pretty cool.
[24:10] But i’m sure you guys will figure out ways
to break it but you know that’s what it
[24:15] is.
[24:16] I think it will be a pretty cool experience.
[24:17] I am actually pretty excited by the tech that
we’re working for this, it’s not going
[24:23] to happen overnight, it’s going to take
a lot of time because we’re building something
[24:26] that’s really, we’re right on the cutting
edge of this kind of stuff, there’s a few
[24:30] other projects that are doing similar stuff,
using the cloud architecture to dynamically
[24:35] scale and process much more on bigger denser
worlds that you could do on a single server
[24:41] or single client which is what we’re doing,
but I think it’s the future and I think
[24:46] it’s going to be pretty cool.
[24:47] [24:49] KuruptU4Fun 1 asks: In the new Jump
Point there is mention of an update that will
[24:55] bring the ability to lower your wanted level
by hacking a console.
[24:58] There will also be a need to defend it while
that hack completes.
[25:03] What portions of FPS will need to be finalized
and implemented for that update?
[25:07] Well nothing really: that’s all in 2.2.
[25:10] So what we’re doing, I think I’ve mentioned
this quite a few times, is on the FPS side
[25:14] we have a whole bunch of features and weapons
that we’re just methodically going through
[25:21] and enabling.
[25:22] A lot of it is content related: so getting
the animations polished before we feel like
[25:26] they are ready for everyone to see or use,
and the same on the assets.
[25:31] And some of it is making some of the mechanics
work or move a little better.
[25:37] So we’ve got things vaulting, like going
vaulting over obstacles and stuff, that isn’t
[25:44] going to be in 2.2 but it will be in 2.3 for
instance.
[25:48] And so what we’ve been doing is knocking
off the cover mechanic; things like prone
[25:54] or crouching; and various things in 2.2.
[25:58] We have physicalised EVA which is actually
really cool, you get a real sense of inertia,
[26:02] you have to be a bit more wary in tight areas
because we’re actually properly simulating
[26:08] so it is like flying around a spaceship in
a tight area, you don’t really want to bang
[26:12] up against things because it will give you
a bit of an impulse.
[26:16] But when you get it down I think it cooler
and more exhilarating and we’ll be adding
[26:21] more and more things that will make that cooler.
[26:25] So that’s just our plan: we’re continually
adding more and more functionality to FPS.
[26:30] Our goal is the FPS is going to be very comparative
to to other FPS’s out there that have a
[26:38] whole bunch of cool detail and accuracy.
[26:41] So we’re not really aiming to be a simplified
‘run and gun’ shooter we’re actually
[26:45] aiming to be much more tactical and considered,
and have that reflect in a lot of the FPS
[26:51] mechanics.
[26:52] So there will be a lot of options and things
you can do, and stances, and actions, and
[26:58] ultimately it will have the ability to do
parkour with sliding and vaulting over stuff
[27:03] and ledge grabbing and all of the rest of
the stuff.
[27:06] So that’s all on the roadmap.
[27:07] We’ve captured animations for all of it.
[27:10] We’re slowly churning through the thousands
of animations and hooking it up and making
[27:14] sure the animation blending works and all
the various things you have to worry about
[27:20] to make it work well.
[27:22] But I’m pretty confident that when it’s
all said and done it will be actually pretty
[27:26] damn cool.
[27:29] [27:29] NARCoMAN asks: Since Corvettes fill
a role between capital and sub-capital ships,
[27:35] should we expect the upcoming ship or other
Corvettes to be more versatile or more economical?
[27:40] So, you definitely should expect it to be
more economical.
[27:43] I don’t know if it’s more versatile cause
to be honest with you the Idris, for the money
[27:51] it packs a punch.
[27:54] It’s a mini carrier plus it can go toe to
toe with other capital ships, like has massive
[28:00] living quarters and everything like that.
[28:02] We’re sorta planning that the proper corvette
we do will be about 100 meters or so and it’ll
[28:10] be more focused on… let’s put it this
way, it’s not going to be a massive carrier.
[28:18] Obviously you’ll be able to dock a ship
and do all the rest of the stuff and certainly
[28:22] can hold it’s own fighting some fighters
and bigger ships and quite a few of them would
[28:29] cause of problem for a bigger ship like a
frigate or a destroyer and all that stuff.
[28:37] It should also be easier to control and command
cause the Idris is just huge, I mean I think
[28:41] you’ve seen some of the stuff we’ve shown
for it and it’s just massive.
[28:45] It’s probably not going to be a viable ship
for one person to or even one person and a
[28:50] few of his friends to sort of command.
[28:52] The Idris is going to require quite a few
players to man it in unison, which I think
[28:56] will be really satisfying once all that happens
and definitely some NPCs helping you out.
[29:02] So, the corvette I think will be just more
manageable.
[29:05] [29:07] Syntax asks: What is the end vision
for planetary ship entry?
[29:09] I would love to see a requirement for a crew
to analyze various aspects such as atmospheric
[29:14] pressure, composition, etc, that facilitates
an active participation from the crew to determine
[29:19] the best mode of entry.
[29:20] Well, we haven’t actually fleshed this out.
[29:23] We do have plans for sort of atmospheric entry
and atmospheric flight, we all kind of want
[29:30] to do... if you seen Prometheus, the sort
of Prometheus entry down onto the planet or
[29:35] if you go back to Aliens they had a very cool…
[29:39] well, the effects aren’t as nice as in Prometheus
but going through the storm and you know the
[29:47] clouds and the turbulence.
[29:48] So, we definitely want that depending on the
kind of planet, potentially a planet you could
[29:53] go down and find minerals and strip and gather
resources that you could sell for a lot of
[29:59] money.
[30:00] It should perhaps be quite dangerous to get
down there and maybe you have to figure out
[30:03] how to get down there without getting caught
up in huge storms or the rest of the stuff.
[30:09] So, we want to make that part of the future,
we’ve been discussing it and obviously John
[30:14] Pritchett, our flight guru, so we’ve already
been going back and forth on some of that.
[30:18] Of course, we have quite a few other things
to do but we are planning sort of clouds on
[30:22] planets and weather systems and all the rest
of the stuff so we’ll definitely ultimately
[30:27] have that and I think it will be a pretty
cool experience.
[30:30] It won’t be any time in the near future
but it’s definitely something we are planning
[30:37] and I don’t know if you necessarily go to
a full length scientific analysis but there
[30:42] will be certain kinds of planets that will
be more dangerous to enter and will require
[30:46] some skill to enter but I think there will
be rewards if you get down there.
[30:50] Maybe some of you won’t be able to scan
from a distance without getting through the
[30:54] cloud layer or something like that.
[30:55] So, there you go.
[30:57] Outro
[30:58] All right, so that’s the end of this 10
for the Chairman, thank you for sitting here
[31:02] and listening to me.
[31:04] Thank you everybody out there that has backed
Star Citizen, I’m constantly amazed that
[31:09] we’ve got this amazing community and this
year is going to be great.
[31:13] Really quite excited because we finally got
the team in sort of at a critical mass point
[31:21] where we have enough people where we can be
fully cranking on all the aspects at the same
[31:27] time and really delivering a lot of content
which is quite different than last year where
[31:31] we sort of weren’t able to consistently
deliver content.
[31:34] So, this year we’re going to be making really
consistent updates and progress on the big
[31:42] Persistent Universe and obviously we’re
doing the same on Squadron 42.
[31:45] It’s all because of you guys, you guys are
supporting us and enabling us to build a game
[31:49] no publisher would ever build in their right
mind and I think we’re building a game that
[31:54] the PC crowd around the world and space sim
fans around the world can look at and go,
[32:00] ‘wow, this is incredible’.
[32:01] We’re super proud so thank you and thank
you to subscribers for kicking in the extra
[32:05] money to sort of fund our ability to do this
additional content for everyone to keep people
[32:12] informed and I will talk to
[32:24] you next week, thanks.
[32:44] Bye.

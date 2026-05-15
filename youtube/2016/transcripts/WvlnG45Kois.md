# 10 for the Developers: Episode 04

**Video:** https://www.youtube.com/watch?v=WvlnG45Kois
**Date:** 2016-02-08
**Duration:** 48:27

## Transcript

[00:04] Closed Captioning provided by the Imperial
News Network.
[00:11] Steve Bender (SB): Hi, I’m Steve Bender,
Animation Director at Cloud Imperium
[00:13] Sean Tracy (ST): **** [laughs]
[00:20] SB: And this is my partner, the everlasting
midget.
[00:26] ST: Okay, alright … Sean Tracy, I’m the
Technical Director, not of chairs of content
[00:35] for Star Citizen, that was ridiculous.
[00:37] SB: We would like to say thank you to the
subscribers for giving us the opportunity
[00:42] to hang out with you guys and hopefully not
screw up too much.
[00:46] ST: No I don’t think we’ll screw up too
much.
[00:48] Yeah it’s really nice that the subscribers
let us make these videos, really can support
[00:52] us and these are pretty fun to do actually.
[00:56] Yeah we interact on the live streams and things
like this, this is kind of direct interaction
[01:00] which is pretty fun, just question and answer
type stuff.
[01:04] Thanks a lot to the backers as well as the
subscribers for feeding our families while
[01:13] we work.
[01:14] SB: Fair enough, first question was for you.
[01:17] [1:17] Timothy Muster asks: Could alien armor
be refitted for human use, like Vanduul chest
[01:25] piece retro fitted to pilot gear?
[01:28] ST: Right.
[01:29] So I mean that’s one of those things that
sounds really cool.
[01:32] Like I’m going to take some alien armour
and i’m going to retrofit that to me, but
[01:36] imagine going up to Shaquille o'neal and saying
“Can I put your shoe on?”.
[01:42] It would be ridiculously oversized it wouldn’t
work, so really we don’t expect for this
[01:48] to happen.
[01:49] You’re not going to be killing a Vanduul
and ripping off pieces of armour and just
[01:53] taping it on me ala Transformers “Take my
parts”.
[01:56] Type thing.
[01:57] It’s not going to happen like that.
[01:59] Now will there be armour pieces that are inspired
by alien materials and things like that for
[02:05] the humans?
[02:06] Absolutely, I don’t know exactly which ones
those are going to be or what they’ll be
[02:10] made of.The Vanduul as they are, are at least
eight feet tall.
[02:16] So again imagine putting on Shaq’s shoes
or shirt or something like that, it would
[02:21] be like a dress on you.
[02:22] So no you will definitely have to have some
level of human armour that’s created by
[02:28] these alien materials but you won’t be actually
taking a piece of Vanduul armour and wearing
[02:32] it yourself.
[02:33] I don’t think that makes a lot of sense.
[02:34] SB: That’s a shame.
[02:35] I really wanted to get that feeling of Shaquille
o'neal sitting in that thing you know, walking
[02:39] around
[02:40] ST: Yeah right you just walk around with this
large torso piece.
[02:45] SB: Yeah it’s got to be like a dress.
[02:47] ST: Boots!
[02:48] ST: PUtting on his, putting on his jersey
is got to be like a dress or something
[02:51] Thomas Hennessy: Good job!
[02:52] I’m like seven feet tall
[02:54] ST: But you’re not becuase we actually are
very specifically one hundred and eighty three
[02:59] centimetres tall.
[03:00] SB: Really?
[03:01] ST: I think that’s right.
[03:02] Is that how tall I am or is that how tall
the character is?
[03:06] SB: You are definitely not a hundred and eighty
three centimetres
[03:09] ST: What are you talking about?!
[03:10] I’m at least a hundred and eighty from the
ground
[03:11] SB: I’m surprised you can see over your
desk half the time!
[03:13] ST: So what you guys don’t know is that
Steve and I share an office.
[03:16] Sort of.
[03:17] We have a little glass door between us because
we both get a little bit excitable on Skype.
[03:21] So Steve might be talking.
[03:23] Actually the other day you were [Bleep] about
something you were whining a little bit
[03:27] SB: I never [Bleep]!
[03:28] ST: About previewing animations and “Oh
Tracy why can’t I preview this animation”.
[03:31] And he hadn’t turned around so it was actually
pretty cool.
[03:38] It worked out pretty nice.
[03:41] [3:40] GODWIN asks: We've been told that having
variable character heights won't be a feature
[03:46] of Star Citizen.
[03:51] :( What about character width?
[03:52] Are there other ways that CIG plans on allowing
us to enhance/diminish the sense of physical
[03:59] presence for our characters?
[04:00] ST: Yeah, this is a really good question,
and on the character height we’re looking
[04:04] at different things, whether you’re wearing
high-heels or boots or something like this,
[04:08] of course we want the height to change a little
bit, but again it’s, it’s a bit of a tricky
[04:12] thing without changing the skeleton itself.
[04:14] Now, on character width, and having some targets
for you know a fatter guy or a thin guy, the
[04:21] CryEngine used to have, and blame Crytek for
this one, used to have the ability to have
[04:27] thin / fat variations, this was something
way back in Crysis 1.
[04:30] SB: vert colours
[04:31] ST: Exactly.
[04:32] So, there used to be a, I think it was eight
different channels of Vert colors, and in
[04:36] our character editor we could actually select
each one of those channels, and for example,
[04:42] the upper arm would be the blue channel, the
lower arm would be the green channel, the
[04:46] midriff would be the red channel, so you would
just select that particular channel, and you
[04:51] had two variants, so you had a really fat
mesh, a normal guy, and then a really thin
[04:56] mesh, and you could just have a slider that
actually deformed between them, that would
[05:00] adjust, but, again, and blame character artists
at Crytek, more specifically
[05:06] SB: Definitely blame those character artists,
those [BEEP] [BEEP]
[05:09] ST: Basically [BEEP] [BEEP] what happened
was that the way we controlled that was through
[05:13] vertex colours, the problem for the character
artists was they want to use the vertex colours
[05:18] for vertex colours.
[05:20] They want to actually be able to do the art
with the vertex colours rather than using
[05:25] them just as a mask, so that sort of functionality
was removed from the engine a little while
[05:29] ago.
[05:30] Now.
[05:31] What’re we working on to actually do that?
[05:32] With our character customizer that we’re
working on right now, what I want is the ability
[05:36] to have little control points basically that
you will control whether it’s symmetrical
[05:41] or not, different areas of the mesh, so the
midriff, the chest, the shoulders, the arms,
[05:47] the triceps, all these sorts of areas and
we’re trying a whole bunch of different
[05:50] control points around the character to see
how much we want to expose, and how much we
[05:55] don’t want to.
[05:56] So we could go to town on this, we could have
100’s of different control points, but I
[05:59] mean at what point is it too much right?
[06:02] So you will have the ability to adjust your
character, adjust your character's body, to
[06:08] what degree, I can’t really say yet, because
well, we’re trying a whole bunch of it,
[06:12] and sooner rather than later you guys will
see it.
[06:15] SB: Yeah, we’re also working on animations
for these sorts of things, so the animations
[06:22] that you see right now for your characters
in say the persistent universe are the base
[06:30] locomotion set, and what we’re planning
on doing, and we’re actively working on
[06:35] this right now, is creating variants based
off of that, so we’ll have, depending upon
[06:41] what your character is like, maybe he’s
a little bit more macho, or something like
[06:45] that, you’ll be able to customize that portion
of your character too, as certain variations
[06:51] in animation sort of give you that, what,
that kind of personalized feeling for who
[07:01] your guy is.
[07:02] ST: Right, right, cause you might want to
have a different attitude, you might stand
[07:03] different....
[07:04] SB: Yeah, exactly.
[07:05] I always stand like this.
[07:06] *leans seductively*
[07:07] ST: I just stand like this *manly pose* but
I’m not flexing, I’m not flexing...
[07:11] SB: Oh, damn.
[07:13] You’ve been working out.
[07:14] ST: mmMMmm. Little bit.
[07:15] SB: Alright.
[07:16] So.
[07:17] ST: Not really, actually, I haven’t been
working out at all.
[07:19] I don’t think I’ve worked out in *BEEP*
three years.
[07:23] Oh, whoa, PG.
[07:25] beep beep.
[07:26] SB: Beep beep, beep beep.
[07:28] I walk 3.2 miles every day to work.
[07:30] And then 3.2 miles back.
[07:31] ST: Are you serious?
[07:32] SB: Yeah.
[07:33] And then 3.2 miles back.
[07:34] ST: I must walk at least 500 yards.
[07:37] 200 to my car, then 200 from the parking lot
into the office.
[07:41] [7:43] JAXX FORD asks: At what point does
an animation added for immersion (deck crew
[07:48] assisting a ship landing, crewman eating noodles
or cleaning their weapon) become an emote?
[07:55] Is it simply a matter of adding a slash keyword
or is it more involved than that?
[07:59] Will we be able to use hand signals to guide
ships to the nozzle on the StarFarer?
[08:04] Tactical hand signal?
[08:05] (stop, take cover, etc)
[08:07] SB: This is a good question it’s also related
to ... there was another question by … somebody
[08:14] else is on there is it … Amontillado “Hi
guys we’re aware that the characters will
[08:22] be able to pull others out of the line of
fire during combat but will our characters
[08:26] be able to interact with each other in other
circumstances such as pushing, pulling, restraining
[08:31] and hugging?”
[08:32] So these two things are basically … the
answer to these is kind of similar.
[08:39] So in Star Citizen and in the Persistent Universe
you’re going to start seeing detailed animations
[08:47] for aircraft carrier launches and things like
that.
[08:50] And in theory making those animations emotes
isn’t really too difficult of a thing.
[08:59] We have a lot of eating, we have a lot of
drinking.
[09:02] You’re going to be able to go a lot of places
like nightclubs, and there’ll be waitresses
[09:09] there and bartenders and bouncers.
[09:13] We shot motion capture for people selling
spaceships and stuff like that, like at a
[09:20] car dealership or things like that.
[09:23] The challenging thing is the design side of
this: getting this to play well together and
[09:34] having a connection between the animation.
[09:36] So for the AI we can control the things that
we want them to do, when we want them to do
[09:42] it, and how we want them to do it.
[09:44] But for Players it’s really kind of restricting.
[09:48] So anything that we create as emotes however
you could essentially use as jobs so we have
[09:58] an aircraft marshall ... guy that sort of
goes like this [hand gestures] … kind of
[10:11] like, almost like a work out right?
[10:12] ST: Yeah it’s almost like a work out!
[10:13] SB: But if we create them as emotes you could
actually turn yourself into an aircraft marshall
[10:17] without it being an official job.
[10:18] You can just go out on the tarmac and start
start directing traffic.
[10:22] And stuff like that.
[10:23] ST: I think guys do that already.
[10:25] Totally!
[10:26] SB: The other problem though with some of
these actions, like the bartending and things
[10:31] like that are things … it’s about interacting
with other players.
[10:38] The tricky thing here is even though you can
do something it’s about the acceptance of
[10:46] the other player.
[10:47] So if I want to make out with Sean Tracy [Sean
is shaking his head] he has to accept that
[10:52] offer otherwise I’m going to end up back
in the HR office again.
[10:56] So the same thing is true ...
[10:57] ST: It’s only because you’re using tongue.
[10:58] It’s okay if it’s not with tongue.
[11:00] SB: [laughs] Well you heard it hear folks!
[11:03] ST: No, it’s not okay even without tongue.
[11:06] SB: So … yeah … I think that’s ...
[11:08] ST: It’s awful.
[11:10] TH: [off camera] It’s not making out if
there’s no tongue.
[11:17] ST: Okay, fair enough!
[11:20] TLDR
Q: At what point does an animation added for
[11:26] an NPC become an emote?
[11:30] A: Turning animations into emotes isn’t
too difficult.
[11:36] The challenging part is the interaction: getting
this to play well together and having a connection
[11:44] between the animations.
[11:45] Even though you can do something another player
has to accept it.
[11:47] [11:47] Socrates asks: Will ladder climbing
ever be given manual control as in most games?
[11:52] Currently we have to wait for a climbing animation
to play out regardless of whether we want
[11:55] to change directions, stop, slow down, speed
up or jump off.
[11:59] Is this being thought about, or is the current
system more or less final?
[12:03] SB: What’s he talking about?
[12:09] The ladders?
[12:10] In the FPS, you’re able to get on the ladder,
you’re able to climb, you’re able to go
[12:14] down.
[12:15] ST: So I think the problem is that they haven’t
seen a lot of the FPS yet and a lot of the
[12:21] FPS levels have a lot more ladders within
them.
[12:23] So I think he’s actually talking mostly
about the ship ladders and different implementation
[12:28] of course than the environment ladders are.
[12:30] There’s a whole reason for this, mostly
because they have to be items within the ship,
[12:35] there’s interactive animation components
to it, but essentially those ones have an
[12:40] exit/enter animation whereas the environment
ladders actually have the exact functionality
[12:46] he’s talking about which is climbing up,
climbing down, jumping down.
[12:49] SB: It’s really irritating, since you’re
getting into the ship because it’s like
[12:52] (does an example of climbing really slowly).
[12:55] ST: Because you’re kind of stuck in this
whole thing.
[12:59] SB: (Still acting in slow motion) Maybe I’ll
go out and get a doughnut, somebody bring
[13:00] the coffee.
[13:01] ST: And you might be under fire.
[13:02] SB: Exactly, so I think that the short answer
is because it’s an enter animation and it
[13:12] functions as an enter animation that likely
you won’t be able to go up/down, up/down,
[13:16] up/down, off of it.
[13:19] However the lethargy within a lot of those
enter animations drives me crazy.
[13:28] ST: That is a really good word.
[13:31] SB: Thank you, I had that in my back pocket
the whole day.
[13:35] ST: Really?
[13:36] You were just waiting to use it, you saw it
online one night.
[13:40] SB: We actually are working on creating three
different speeds, so we have the relaxed walk
[13:47] speed which is currently what you see in the
game for most of the characters.
[13:51] If you want to hit the Caps-Lock button, and
he saunters off to grab himself a cappuccino
[14:02] or something, but the default one will be
much faster so we’re starting to put those
[14:08] in.
[14:09] Then we also have emergency ones, so we had
one where the guy runs, and jumps, and clears
[14:19] like three-quarters of the ladder, grabs onto
it, jumps in.
[14:22] When we captured this the actor coming out
he actually, because we built the Avenger
[14:32] on set like full sized height sort of thing
on set obviously we don’t need the armor
[14:38] or anything like that, but he was jumping
out of it from that height and landing and
[14:46] rolling and everything was cool, and then
he missed the landing and he jacked up his
[14:56] ankle and was out for a couple weeks and I
felt absolutely terrible.
[15:00] ST: Do you think motion capture actors get,
like, workers comp?
[15:05] “I was jumping out of a pretend spaceship
and then…”
[15:08] SB: Uh, yes through the union I think they
might get something but…
[15:11] ST: I just wonder what those reports would
look like.
[15:14] “I was jumping out a spaceship, and I twisted
my ankle…”
[15:20] SB: But I felt like absolute [BLEEP] because
he had a great gig coming up, like a couple
[15:27] days later, and he ended up having to call
the director and tell him that he couldn’t
[15:31] make it because he couldn’t, you know, walk.
[15:33] But it was two weeks later he was up on his
feet and stuff like that, awesome guy, but
[15:42] yeah they really put their heart and soul
into some of these things and their ankles.
[15:49] So we’re going to speed those things up.
[15:54] ST: And that’s the ship enter stuff and
the ladders, again, in the environment act
[16:00] exactly like you’ve suggested which is pretty
standard to most games, you always want that
[16:07] kind of control because you can’t be halfway
up the ladder and decided to jump off and
[16:11] you have to climb all the way back down.
[16:12] SB: Yeah that would really suck.
[16:13] ST: Yes, that would be super annoying.
[16:16] SB: Cool!
[16:18] [16:18] Socrates asks: On a scale of: Crash
Bandicoot 2 to Uncharted 3, how smooth and
[16:26] realistic should the finalized 3rd person
animations look when juking and turning your
[16:31] character?
[16:32] It seems that with more smoothness and realistic
3rd person animations comes a more uncomfortable
[16:38] 1st person view.
[16:40] What balance do you intend to strike?
[16:42] SB: I liked Crash Bandicoot 2.
[16:44] ST: I kind of did too.
[16:45] SB: Didn’t you like Crash Bandicoot 2.
[16:46] ST: But when you’re talking about.
[16:47] SB: That was fun!
[16:48] ST: Yeah, but when you're talking about the
animations and animation director, I mean
[16:52] you would probably have a much better eye
on that than I would, but a bit chunky animations,
[16:59] lots of lethargy.
[17:00] SB: You know those guys down the street and
they’re going to come over here and start
[17:03] beating you up.
[17:04] ST: No I actually know those guys.
[17:05] SB: So the answer is that yes, you’re correct.
[17:14] It’s certainly is a problem when you’re
trying to get what is really realistic 3rd
[17:19] person animations.
[17:20] When you’re talking about something like
Uncharted 3 where they’re able to spend
[17:29] time really getting those transitions and
making them feel good from how your character
[17:35] looks and then you put that in first person
and what ends up happening is because you
[17:41] can’t see your body, you’re getting these
weird sort of pauses in how your character
[17:52] is moving and it feels wrong, especially with
a weapon in your hand it feels lethargic.
[18:01] ST: Lethargy.
[18:03] SB: And it just feels uncontrollable.
[18:10] There is a balance that we have to get there
so that we start with capture in third person
[18:18] and look to see what that looks like and then
we start to break down what are the important
[18:23] parts of this animation so as the guys coming
in, his squash that comes down like this,
[18:30] the overlap of this part of his body and we
have to basically start dialing the time it
[18:38] takes those animations down.
[18:41] It’s really just the balancing act.
[18:44] Ultimately when we’re talking about the
FPS combat, it’s the combat that’s going
[18:52] to win.
[18:53] ST: Right.
[18:54] SB: Right.
[18:55] In the Persistent Universe when you’re walking
around, we have a little bit more freedom
[19:01] in being able to sort of marry those two,
the first person and the 3rd person concepts
[19:09] together a little bit more and we're able
to get away with a little bit more lag if
[19:14] you will when in first person and stuff like
that, but in combat it really is … We’ve
[19:21] been working on it for a couple months now
so we’ve been going back and forth, lets
[19:27] pull it out, okay well that has to get faster,
but it can’t get faster the way it looks,
[19:33] so we’ll cut the time down here, but we’ll
squash the character bit more so that as we
[19:40] do that blending in and out of that we’re
still getting the squash in the character.
[19:47] ST: I can tell it’s taking every ounce of
effort not to stand up and start doing your
[19:53] examples, this is a very classic Steve Bender
thing and I’m not sure you should be bound
[19:58] to the chair.
[19:59] I think you should unbind yourself and be
free.
[20:00] ST: Be free!
[20:01] No not that kind of free!
[20:02] [20:13] From…
[20:03] [ACES] Sao Saoldian Asks: Will our character's
animation change when injuries are incurred?
[20:04] For example, if our right arm is shot, will
it go limp and therefore cause us to switch
[20:05] the weapon to the left handed, or will he/she
limp or move slower, if there's a leg injury?
[20:06] ST: Sao…
[20:07] Saol…
[20:08] Mr…
[20:09] Saoldian.
[20:10] Yeah, I think that’s good.
[20:12] Sao.
[20:13] Saoldian.
[20:14] Sao Saoldian.
[20:15] Saoldian.
[20:16] Sao Saoldian.
[20:17] Yeah I know, it’s just the question starts
with his name.
[20:20] Saoldian.
[20:21] Sao Saoldian.
[20:23] Sao Saoldian, no idea how to say this.
[20:29] Sao Saoldian asks: Will our character’s
animation change when injuries are incurred?
[20:36] Occurred?
[20:37] I don’t know if it’s my grammar or their
grammar, but something’s wrong there.
[20:42] SB: No, it’s definitely your grammar
[20:43] ST: When injuries are incurred…
[20:44] Hennessey: You incur the injury.
[20:45] Their grammar is correct in this instance.
[20:49] SB: For example, if our right arm is shot,
will it go limp and therefore cause us to
[20:55] switch the weapon to the left hand...ed…
see?
[20:57] no, that’s his bad.
[20:59] ST: Left hand, comma, or will he/she limp
or
[21:01] SB: No, see, it says will it go limp and therefore
cause us to switch the weapon to the left
[21:07] handed.
[21:08] ST: Oh.
[21:09] Nope.
[21:10] SB: Nope.
[21:11] Or will he or she limp or move slower if there’s
a leg injury?
[21:15] ST: Question mark.
[21:17] I don’t know why I put the question mark
there…
[21:21] SB: That’s a good question.
[21:22] ST: It is a good question.
[21:23] SB: So, ahh, yes.
[21:24] You’ll be having characters, will begin
to change the way that they move and interact
[21:27] with injuries.
[21:28] So if i get shot in the leg, I’m going to
start to limp.
[21:32] If i get shot in the arm, that arm will no
longer be useable.
[21:35] Now, there’s a certain amount of shot in
the arm, like the likely one shot will not
[21:41] put your arm completely out of commission,
but, there’s a couple challenges that we
[21:46] have in this though.
[21:48] In that, it’s about balancing this.
[21:51] So, when I get shot in the leg, and I’m
moving, how fast am I moving?
[21:57] Because you know, we shot this stuff on set,
we actually shot actors in the leg.
[22:05] not with real bullets but you know, we threw
things at them.
[22:08] You know.
[22:09] Just sort of …
[22:10] ST: Yeah, just give them a beating.
[22:13] SB: And stuff like that right?
[22:14] Give them a good charlie horse.
[22:16] And then they tried to move, and it actually,
whereas it looks good on camera, it’s one
[22:25] of those things in first person / third person
where it just felt really slow.
[22:32] So, within the design we have injuries.
[22:37] So when you get shot in the leg, you’re
going to be limping forward, when you get
[22:40] shot in the arm, likely we won’t be holding
our arm down, if I get shot in the left arm
[22:45] I’m going to want to keep it up here because
I want to make sure that, you know, I keep
[22:50] my arm above my heart level so I don’t bleed
out, and you know, that gives us opportunities
[22:57] to do things with the weapon.
[22:59] So, for instance, if I get shot in the arm,
perhaps I have to go to pistol, so I drop
[23:07] my rifle, I’m going to draw out my pistol,
but I can’t go to two hand, so I have to
[23:14] go one hand right?
[23:15] And how does that change your accuracy with
the weapon when you move with the weapon and
[23:21] things like this.
[23:22] Yeah.
[23:23] If you get shot in the right hand, you’re
holding the weapon in the right hand what
[23:26] the hell happens?
[23:27] ST:L What about things like reload and things
like that too?
[23:30] So I guess you’d have to have some level
of one-hand reloads, you’d have to have
[23:34] all these kinds of things right?
[23:35] SB: Yeah, we had one of our mocap actors is
a special operator, a British special operator,
[23:44] and he did this really badass one-handed reload.
[23:46] ST: Is Chris a special operator?
[23:47] SB: I don’t know… is he?
[23:48] ST: I think so.
[23:49] I think all the British..
[23:50] SB: Really?
[23:51] You think it’s like that secret…
[23:52] like the Kingsmen right?
[23:54] ST: Oh it’s totally like that where the
all go in and they have
[24:01] SB: Right?
[24:02] Exactly
[24:03] ST: Chris has a Cappuccino.
[24:05] SB: *fist explodes desk* That’s got to be
it!
[24:08] Watch out with that.
[24:09] So, so what were we talking about?
[24:12] ST: Special operators.
[24:14] SB: Right.
[24:16] So, we had a Glock, and he was doing this
thing with this Glock where he just… he
[24:22] had ammo kind of like this, and he would eject
and this would go in and then he would like
[24:31] grab it in this funky grip and go
[24:34] ST: Holy shit
[24:35] SB: And go scrunch it together like this,
the slide would go back, and then it would
[24:40] pop up, the whole gun would pop up, and he’d
catch it in his hand and he’d be able to
[24:46] fire.
[24:47] It’s [BEEP] [BEEP] I was sitting there and
he was just sort of waiting for the next take
[24:52] and I saw him doing this I was like.. what
the f… is that?
[24:54] Do it again!
[24:55] ST: Do it again!
[24:56] Turn on the cameras!
[24:57] SB: Get the cameras on this.
[24:59] So, yeah.
[25:00] Absolutely we’re going to have a lot of
that stuff in the game.
[25:03] ST: So yeah, I think the summary is yes.
[25:06] You will have animations change when injuries
are incurred.
[25:10] Awesome.
[25:11] Cool.
[25:12] SB: And, good grammar.
[25:15] Don’t let him tell you otherwise.
[25:18] So… next one is for you mister Tracy!
[25:21] ST: I’m excited!
[25:22] SB: It’s not for me and you, it’s just
for you.
[25:25] ST: It’s just me.
[25:26] SB: And it’s you CIG, and this is from Alien
Eagle.
[25:30] ST: Good one, Alien Eagle.
[25:31] [25:22] ALIEN EAGLE asks: In regards to collisions:
I really love how every object has collisions
[25:36] right now.
[25:37] However, it seems there are a lot of times
we fall through hard objects, including our
[25:42] own ships (my 325a after every EVA).
[25:50] What are future plans to create more reliable
collisions?
[25:53] ST: Yeah so this is actually a really good
point and to talk a little bit about this
[25:58] and why it happens.
[25:59] So you guys are aware most of the ships now
have the local physics grid within them which
[26:05] is a sparse grid that has just local physics
world informations so it’s a little island,
[26:13] sitting inside a bigger island, sitting inside
a bigger island of physics.
[26:15] SB: Islands in the stream that is what we
are.
[26:18] ST: Well said!
[26:21] So basically what’s happening when this
happens.
[26:24] So it’s only going to happen when you do
a pass between the local physics grid and
[26:31] the world grid and going back and forth between
them is basically a really tricky for us to
[26:36] deal with.
[26:37] Because it’s not only dealing with the play
that’s going back and forth in-between sending
[26:41] forces in-between.
[26:44] Even trickier is that the bounds for that
local physics grid actually exists on the
[26:49] asset.
[26:50] So on the ship itself we built it into the
weapon - actually ship script so what’s
[26:57] usually happening here and is usually one
of two things.
[27:00] It’s either the code has been a little bit
messed up in terms of when you are passing
[27:05] between these things, dealing with transferring
all the character attachments and everything
[27:10] and if all of that isn’t transferred over
you’re going to fall through.
[27:13] The other times this happens is when the asset
itself has gotten broken in some sort of way
[27:18] or even worse that one piece of that asset
hasn’t streamed in yet.
[27:23] So that’s a big, big problem.
[27:26] Sometimes we will get the mesh in and the
local physics grid information does come in.
[27:30] Usually that’s what you’re seeing in a
lot of the PU releases, a lot of the PTU releases
[27:37] we ended up in this situation with a couple
of ships.
[27:40] So the way you can kind of tell what’s going
on is, if happens with every single ships
[27:44] that’s probably the code.
[27:45] But if it happens with just one ship well
it’s probably just the asset itself.
[27:48] These are just normal teething pains when
you are trying to work on a physics system
[27:52] like this.
[27:53] Just because there’s so many interdependencies
and complexity to passing all that data in
[27:59] and out, in and out, in and out.
[28:01] It gets really crazy when there’s three
levels of nesting of something like that.
[28:04] You’ve got an Idris, which has a Connie,
which has a Merlin.
[28:07] It can get pretty crazy!
[28:10] So just dealing with every single situation
with that, it’s pretty normal teething pains.
[28:14] So I would say the future plans to make it
a little more reliable is just to fix the
[28:17] bugs with it really.
[28:19] As we run into them absolutely we fix them
[28:21] SB: Fixing bugs is what we like to do!
[28:23] ST: Fixing bugs!
[28:24] SB: Squish them!
[28:25] ST: Squish them!
[28:26] SB: Going on a bug hunt!
[28:28] [28:31] Daz asks: I would like to know how
FPS combat will feel when done.
[28:32] Can you explain how the character is going
to move around, take cover and which FPS's
[28:36] do you think are the closest analogue to what
you are creating?
[28:40] SB: So, how the character is going to move
around and take cover.
[28:45] So, in Star Citizen our character does take
cover, he does have actually cover animations
[28:54] set.
[28:56] So we have him come up to the cover object
and when he gets there, he’s using his idle
[29:03] animations, the weapon ends up raising, now
it’s not technically correct.
[29:09] ST: Why is it not technically correct?
[29:12] SB: Because you raise your weapon up towards
your head, so you can blow your brains out
[29:16] or something like this.
[29:19] For us to be able to allow the players to
read what is happening it’s important for
[29:24] design to be able to see that weapon, so we’re
bringing it up here and we’re trying to
[29:30] be nice and safe.
[29:32] Then you can move back and forth across that
cover object and around it and everything
[29:37] like this as well.
[29:38] Now when you hit an edge what happens is your
character is going to then go from whatever
[29:44] that position is, to another, the weapon is
going to move to another location.
[29:50] So say I’m going to my left hand side, to
let me know that I’m at the corner of that
[29:56] cover object, and then I can peek out or if
I go to aim I will then step out and come
[30:05] around the next corner and try to fire.
[30:10] What is the closest analog to what we’re
creating..?
[30:13] ST: That’s tough huh?
[30:14] SB: Yeah it is.
[30:15] ST: None of the shooters, really that are
out anyway, are third and first.
[30:21] SB: Yes.
[30:22] ST: With the expectation that you can really
play in both.
[30:27] There’s some that you can bounce out of,
third, and see yourself.
[30:30] SB: There’s a distinct connection within
Star Citizen that doesn’t exist in majority
[30:37] of first person shooters, where the third
person and the first person assets are the
[30:44] same assets.
[30:45] That took a lot of, sort of, engineering figuring
this out.
[30:52] ST: I like how you called engineering art
‘chasing the tail’.
[30:56] SB: It actually came down to just a day in
the Frankfurt.
[31:02] ST: I explained it on my sort of intro to
you but I actually had a little explanation
[31:06] to the subscribers about Evo’s one line
change and then the little meme I did right
[31:14] after the fact, “1000 man hours?
[31:16] I do in one line.”
[31:19] But it was pretty cool, like it is interesting
to talk about the first person/third person
[31:24] thing, and it does go totally in line with
this only because we had tried for years back
[31:30] at CryTek to kind and get this right.
[31:34] This kind of started in Crysis 2, and like
you know him far better than I do because
[31:40] you worked with Evo and other people at CryTek.
[31:43] It started in Crysis 2, you gave it a try.
[31:45] SB: Yeah we tried.
[31:46] ST: “No this is not going to work.”
[31:48] SB: Because the problem really was an engineering
issue and a time issue, during Crysis 2 were
[31:54] making a lot of major changes to a lot of
different systems.
[32:02] It just, there were certain promising things
about it, but there were going to be issues
[32:09] with it, we could see those issues and we
certainly found that we couldn’t solve those
[32:13] issues within the time we had to ship the
particular product.
[32:19] But changes that happened between Crysis 2
and Crysis 3, in the way that the third person
[32:26] character and the AI aimed, actually sort
of set the ground-work for what we’re doing
[32:34] here, because, you know, later last year we
were looking at some of these issues, and
[32:42] connection issues, and we were trying to figure
out why this wasn’t working; why this other
[32:47] thing wasn’t working.
[32:48] We saw the, we were like, the custom aim joint
isn’t being used properly.
[32:56] So once we got that working, and we were able
to get the aim system working properly, it
[33:03] was a simple matter of tying back to the camera
setup, now we had control of being able to
[33:15] make adjustments within first person, that
made the same actual adjustments in third-person.
[33:21] So where you are pointing the gun in first
person is exactly where he’s pointing it
[33:25] in third person.
[33:26] Zero difference.
[33:27] ST: And there’s just a huge disconnect with
that right?
[33:29] SB: It was such a simple, it was one of those
sort of answers where you just look at it
[33:35] and you’re like, I remember standing there
in the room and going, well can’t just bla
[33:40] bla bla?
[33:41] And tie this to this?
[33:42] And it was like…
[33:43] ST: But you’ve been in game development
enough years to know that, as soon as someone
[33:47] says “Can’t we just”.
[33:49] Usually.. not, can’t we just.
[33:52] So.
[33:53] In this case,
[33:54] SB: In this case, it was!
[33:55] In this case it was just like, huh.
[33:58] And Evo went back, he made the test, and totally
fucking worked.
[34:04] ST: Yeah, which is super awesome, and I remember
that we’re the initial naive sort of implementation,
[34:09] literally take a camera, strap it onto a joint,
and see what it looks like, and like it looked
[34:14] cool but you realised, I’m kinda getting
sick, this doesn’t really make sense, and
[34:20] then yeah.
[34:21] SB: So, what is the FPS combat going to feel
like?
[34:25] So…
[34:26] Start Citizen, from a feeling standpoint,
is going to be a little bit different than
[34:32] a lot of the games that you’ve typically
played.
[34:35] It’s not really a Call of Duty, but then
again it’s not a Battlefield 4, but then
[34:44] it’s not an ARMA 3, but then it’s not
a Crysis 3
[34:47] ST: Yeah, right.
[34:48] SB: We’re taking sort of pieces of each
of those, building something something new,
[34:57] and utilize what I like to call competitive
analysis.
[35:01] So what I'll do is, we’re playing something
so, for instance we’re working on the cover,
[35:07] and something is not feeling right, or it’s
not playing right, and I’m trying to explain
[35:15] what it is that I’m looking for, or what
is wrong here.
[35:20] So what I’ll do is I’ll go get video from
competing products out there, and I’ll take
[35:28] those videos and I’ll also take examples
of videos of myself doing something, or animations
[35:36] that we’ve done, and really break ‘em
down and go, you see what they do here?
[35:42] You see what we’re doing here?
[35:43] This thing isn’t working here, right?
[35:45] And this is how we can fix that.
[35:48] I like what they’re doing over here.
[35:51] So, it’s kind of hard to sort of…
[35:56] ST: It’s a nebulous question.
[35:59] How does it feel, how do you explain that.
[36:02] Now…
[36:03] SB: And that’s going to change over time.
[36:04] ST: And maybe I’ll give it a stab, because
it’s… it’s somewhere, it’s not a twitch
[36:09] shooter, it’s not a Quake, it’s not a
Doom, it’s not a fast shooter by any stretch
[36:14] of the imagination.
[36:15] Can you look around fast?
[36:16] Yeah, definitely you can look around fast.
[36:18] But it, things are not moving at that rate.
[36:21] It’s just not that quick.
[36:22] SB: No, we want to promote ADS
[36:24] ST: Exactly, Aiming down the sights.
[36:27] We want to promote some tactical movement,
you want to promote teamplay, so, it’s,
[36:32] it’s definitely definitely somewhere between
the Battlefields and ARMA.
[36:36] Where it’s not full simulation but it’s
also not so simulation heavy that it becomes
[36:43] tiresome or frustrating.
[36:46] SB: There’s some things you’ll see you
may go “Oh hey I know that from say Crysis
[36:54] 3”.
[36:55] And things that we do with the character in
the game because it is an engine game.
[37:02] It’s a similar engine so even though we
have heavily modified it
[37:07] ST: Even this bit of it, which is the most
fundamental sort of part of the CryEngine
[37:13] is the first person aspect of it or the first
person character aspect of it.
[37:18] We’ve kind of re-did that, which probably
doesn’t make sense to a lot of people.
[37:22] The easiest thing to do would have been to
say “Alright just copy paste Crysis 3 and
[37:27] go to town”.
[37:28] Again with this game we wanted to be something
new something unique and we’re not afraid
[37:35] to give that a try right?
[37:38] I think that’s an important point anyway.
[37:43] Maybe and to extend the question a tiny bit.
[37:45] I did one like, one of the examples, just
to bring up one of the examples we were looking
[37:50] at.
[37:51] Between Battlefield and our turning in place.
[37:53] So and still we’re actually in a very real,
realy shape that we have to fix our turn in
[37:59] place which is not as good as it could be
in both our opinions I think.
[38:03] Or just our general turning.
[38:07] Battlefield has a really interesting system
of you’ll be standing there and your character
[38:12] is allowed to rotate almost 180 degrees before
his feet do anything right?
[38:16] You recall this we were taking a look over
a multiplayer server?
[38:19] SB: I remember you shooting me constantly
as we were testing
[38:22] ST: Yeah and then I was prone and you shot
me in the face and you teabagged me sometimes
[38:27] it was…
[38:28] I remember this too!
[38:31] So we were taking a look at it what happens
is with our game right now in Star Citizen
[38:36] in what like 30 degrees or something like
this?
[38:39] I can’t remember what the foot turn start
is.
[38:42] We’ve got different animations for 0-45,
45-90 and then 90 plus I think or I might
[38:49] have gotten that wrong, 30, 45 whatever.
[38:53] Basically as soon as you’re outside of that
rotation we start adjusting your feet so that
[38:57] you can align to that new position now.
[38:59] I kind of like the way that Battlefield does
it because you don’t get a lot of this foot
[39:02] shuffling which a lot of people are not liking
with our game right now cause one there’s
[39:06] a bug where you can get stuck shuffling.
[39:09] But mostly because and again this came from
other bugs with the camera, you could see
[39:14] yourself shuffling and you don’t really
see that anymore with the fixes that have
[39:18] gone in.
[39:19] It does almost make a lot more sense when
you’re holding a weapon you wouldn’t just
[39:22] rotate 30 degrees and then start doing that
you would probably go just about as far as
[39:29] you can go and then you would make that rotation
so it’s things like that just to wrap an
[39:33] example into that.
[39:34] SB: Yeah we’re taking to that exact like
originally it was 30 degrees off center.
[39:41] Now we’re going okay well … For instance
when we’re in relaxed and we’re looking,
[39:46] I can go like this, I can go like this, I
can go like this and now this is … I can
[39:53] go all the way over here, but naturally if
I’m you’re here from me, I’m just going
[40:01] to, at this point I’m going to start to
rotate.
[40:04] So it’s a balancing act between the no weapon.
[40:11] So when you’re relaxed, that behavior is
a little bit different and the having the
[40:15] weapon so we want to remove a lot of that
ticky ticky ticky ticky ticky coming across,
[40:21] but we also want to make sure that when I
am aiming and I’m gonna go aim this way
[40:29] that I as I come this direction, right about
here … So it’s maybe 60 degrees or so,
[40:38] I’m going to attempt to re-orientate.
[40:40] ST: Right
[40:41] SB: That way we’re still keeping the feeling
of realism in the characters poses when he’s
[40:47] firing and stuff like that, but we’re not
getting that ticky ticky ticky.
[40:53] ST: Right, right right, perfect.
[40:56] So hopefully, Daz that was enough info there
to give an idea of what we think it’s gonna
[41:05] feel like.
[41:07] Of course we have the way that Chris wants
it to feel, the way that we want it to feel
[41:14] which are all pretty much in line so I think
we’ll get there soon.
[41:18] SB: So let’s go to BigDave.
[41:22] ST: I like that BigDave question.
[41:25] SB: Yeah.
[41:26] [41:22] BigDave asks: In regards to melee
combat: If there is a blocking/parrying system
[41:33] in place for melee combat, what games/movies/etc
will you guys be looking at in order to get
[41:40] a basis of how those animations look?
[41:43] For instance, Chivalry has a somewhat rigid
but free feel to the parrying animations,
[41:48] while other games such as Total War have very
detailed combat maneuvers, but they are fully
[41:52] scripted (when zoomed in on soldiers).
[41:56] TL:DR - Will we have highly scripted melee
combat motions, or less detailed ones that
[42:01] allow for more player movement?
[42:03] SB: I think overall the concept behind Star
Citizen as a first person combat game is to
[42:12] give you freedom.
[42:13] So we don’t want to go for with these …
[42:15] ST: Quick time events?
[42:16] SB: Yeah, quick time events.
[42:18] ST: I hate to say that because of all the
tomfoolery with Ryse.
[42:22] SB: And things like that.
[42:25] But we are looking at … we’re talking
about the design for these sorts of things.
[42:32] So in regards to what we are looking for reference
we’re looking at things like Eskrima and
[42:43] Kali and various different military trainings
and things like that.
[42:47] We’ve been talking about jabs and swipes
and parries and all of these things like that.
[42:56] But we do want it to be a much more fluid
sort of thing.
[43:01] The same sort of thing would end up happening
if say you got into a fight at a bar in the
[43:07] Persistent Universe, right, you know, you
don’t want to pull out and a knife and be
[43:12] stabbing somebody but you certainly can take
a …
[43:16] ST: It just depends who you are ...
[43:17] SB: I’m guessing …
[43:18] ST: Well, no, I’d just curl up in a bawl
and cry a little bit in each one of my bar
[43:19] fights.
[43:20] SB: Perfect we’ll … let me write that
down [writes it down] …
[43:21] ST: Curl into ball ...
[43:22] SB: Curl up in ball ...
[43:23] ST: And cry.
[43:24] SB: In ball behaviour.
[43:27] Curl up in ball behaviour.
[43:28] ST: And cry.
[43:30] SB: And cry.
[43:31] ST: Perfect.
[43:32] SB: And cry.
[43:33] And we will that ‘The Sean’.
[43:34] ST: ‘The Sean’? [laughs] Okay.
[43:36] SB: So yeah.
[43:38] ST: That’s a good answer.
[43:41] [43:46] Ethnine asks: When all of this is
over and 'done', and we're all in Star Citizen
[43:46] playing together, what do you see yourself
doing in the completed game?
[43:50] Will you be a pirate?
[43:51] Will you run security for some major organization?
[43:53] Or will you be a lone bounty hunter looking
for his next big score?
[43:58] What roles do you see yourself fulfilling
once you're let loose in this amazing title
[44:02] that you helped create?
[44:03] SB: Well for me my handle in Star Citizen
is Ghost Monkey Five and I will be running
[44:12] a militant group called the Ghost Monkey Extraction
Unit.
[44:16] We specialise in the extraction of personnel
and information from highly sensitive locations.
[44:22] If you have found us and have need of our
services leave us a message at Bones’ Bar
[44:27] on Terra.
[44:29] ST: Wow!
[44:33] SB: Grando Omnum Spiritum Simea.
[44:37] Long live the Simian Order!
[44:38] ST: Wow!
[44:40] I can’t top that answer!
[44:44] SB: I’m going totally role player on you.
[44:47] Totally role player
[44:48] ST: No!
[44:49] That was amazing.
[44:50] I want to be part of the Simian Order!
[44:51] How does one become part of the Simian order?
[44:55] I had an answer to this question and it’s
completely changed now.
[44:59] I’d like to be part of the Simian Order,
could I be Ghost Monkey Eins?
[45:03] SB: No, Ghost Monkey Eins is actually the
entity which brought life to the void.
[45:20] You can actually learn more about this by
searching for the Simian Order on the forums.
[45:30] Actually for the organisations.
[45:31] ST: Awesome!
[45:33] So when all of this is over and done I will
be searching out the Simian, The Great Simian,
[45:38] The Grand Simian and becoming part of the
Order of…
[45:44] What was it again?
[45:46] SB: The Simian Order
[45:48] ST: The Simian Order, that’s correct!
[45:49] Yeah that’s what I will be.
[45:50] That’s what I will be.
[45:52] SB: I hear The Grand Simian has an Aurora.
[45:56] ST: He does?
[45:57] SB: And that he travels the galaxy spreading
the word of the light.
[46:03] ST: Is there a…
[46:05] Never mind I guess we’ll go too deep into
that.
[46:10] Let’s just leave that one alone!
[46:11] Outro
[46:12] ST: This is the first we’ve given that a
go.
[46:13] I think it was mildly successful we didn’t
get too hijacked, too out of control so that’s
[46:17] really good!
[46:18] SB: We’ve only been here for four hours
Sean
[46:19] ST: Yeah, really they haven’t seen that
we’ve been here for four hours.
[46:21] Maybe they can read my watch so that might
be a problem.
[46:22] SB: They might be like “Hey what are they
talking about?
[46:23] They’ve only been talking ten minutes”.
[46:24] ST: See this is what’s happening..
[46:26] So guys thank you so much for subscribing
to this, thank you so much for allowing us
[46:29] to do this.
[46:30] If you guys liked Steve and I answering your
questions trying to get through the questions
[46:36] without …
[46:37] SB: Send a cheque to Steve Bender at Cloud
Imperium Games dot com.
[46:45] Write it on the side of a Porsche 911.
[46:48] ST: That’s kind of it.
[46:52] Really guys thanks a lot for doing the subscriptions
for this stuff it’s really to be able to
[46:56] do these things.
[46:57] We had a lot of fun with it today and keep
throwing in the questions and thanks a lot
[47:02] for helping us develop Star Citizen.
[47:04] I think that’s pretty much it I think we
can send them off and we can get back to work
[47:08] SB: Yeah?
[47:10] ST: Ish
[47:11] SB: Sounds good to me
[47:19] ST: Great
[47:27] SB: I need a beer
[47:46] ST: I need a beer!

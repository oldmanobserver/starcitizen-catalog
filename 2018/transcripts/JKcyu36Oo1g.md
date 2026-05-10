# Star Citizen: Bugsmashers! - Temperamental Turret

**Video:** https://www.youtube.com/watch?v=JKcyu36Oo1g
**Date:** 2018-04-25
**Duration:** 8:46

## Transcript

[Music]
everyone welcome to bug smashers
I'm your host mark a bit let's get
smashing everyone we are here in my one
little test mark level and we are
looking at the hurricane today and we
have a little bug that we got from tech
design where as they're trying to set up
this backend turret it's still a little
bit incomplete but while working on
setting this up they have a little I can
get my zero-g hard to enter and turn
that turret oh there goes as we enter
this turret does some animation States
as you can see it's still
work-in-progress however we get to a
point where the animation stops and I am
fully well broken not a good fun thing
what's happening here is we're trying to
split up the states of the animation so
that we could recycle a bunch of them
throughout all other ships currently or
legacy long long time ago reasons we
have a interstate idle state exits take
the interstate would basically be the
Turk coming down you get in it it goes
up and then your idle we since broke it
down - now there's a deploy state from
sorry retract state where the turret
comes down then there's an interstate
where you go in and then there's a
retract where you goes up then you kind
of select it in your idle handy-dandy
and in this phase we successfully did
the retract the enter the deploy
actually we didn't even get to deploy as
you can see we're stuck in the retract
state it's infinitely just never
finishing so we're never even getting to
the Select phase we're just going up and
stuck and what's happening here is in
the actual code so we'll swap over to
the Amaze
code it kind of takes the player takes
the seat and kind of enslaves them
together so that they sync up their
animations and in this particular area
of the code it's waiting for the player
to finish his animations before
continuing on to the next state however
the player continuously animate because
he's looping so the codes not
considering that he can loop forever
it's like oh the seats done let's just
wait for the player oh wait the players
never gonna finish because he's in this
looping animation in fact when you're in
this retract the players kind of like in
this little I'm waiting for the seek to
go up but he's continuously doing that
and well he never breaks out so we need
to break him out of there so in this fun
little update section we are going to
check to see if we're in a looping
animation if we are we need to basically
go oh once the seats done we're done so
we only care about this indeed let's
copy this guy
I can't copy there we go give up to
deploy and in the retracts tape so
anytime insert as with deploying or
retracting we need to see if the
animation is in a loop state on the
actor so we have this bit of information
in the seat stored in this thing called
a scope slot there's bunch of scope
slots there's the actor dashboard a
vehicle and then there's two different
ones for the actor cuz there's two
different implementation but basically
we just want to know about the synced
actor so if we're in a synced actor and
basically there is an animation for him
let's see scope slot do we have an
animation do we have an animation now
we're going to check to see if that
animation sub animation I should say
this slave action is more than an
animation it's it could be animation
what
and movement and it's a bunch of things
on the one we consider an animation
because most likely it is animation but
it can be more things however from this
action we need to actually get the
animation if that's not confusing enough
so we're gonna be like hey scope action
tell me what your animation is so mister
action let's get our scope due to to
scope context so the scope context is
kind of like and I guess how you'd say
in Photoshop I have layers the root
scope is the root layer the top-level
layer that's playing so we want to get
the top animation from that do get spa
animation we're gonna get the top
animation and we are technically looping
if this double pointers never fun let's
point to a pointer so we're just need
one pointer we have an animation and
this animation is loops then basically
we need to set this boolean the true so
now if we're deploying or retracting and
the players in a looped animation we are
going to basically run down here and go
our current state is not finished we're
still running code however we have
finished and we're a looping animation
so basically in this case it will be
like yeah we're done it will traverse to
the next state because actually this one
so this first one will only run if the
all the sub actions are done and we're
not looping but if we are looping and
we're finished then we continue on to
the next layer so many ifs
statement in the world so let's pick
recode all right Rico's finished let's
hop back in game and as you can see it
finished he did the Select animation now
he's an idol so if I leave he's playing
all the animations let's do this in slow
motion we'll scale everything half the
speed enter magical turrets there we go
magical turret is entering so we're
gonna scale everything down dude linked
we are in the retract state select state
idle state and we're good to go now
obviously this just sets up the states
so that they Traverse correctly there's
still a bit of work to get all the AI K
and animation set up right for like the
entering and all that but you get to see
a good old work-in-progress and I hope
you guys enjoyed so as you guys saw we
had a fun little issue with the split-up
animations where because the player was
looping he was getting stuck in the
retract states they just had to make up
some code to basically say hey if the
seat is finished the all the animations
are there and the players in this
looping animation during the retract and
deploy state we consider it good to go
and we could go to the next state so
then the guys like I can grab onto my
joystick and go and as you saw we still
have this a little bit roughed out
because it's a work in progress to get
the hurricane there however now I could
take what I have and pass it up to the
designers and they can continue it on
and hope you guys enjoy until next time
you
thanks for watching for the latest and
greatest in star citizen squadron 42 you
can subscribe to our Channel or you can
check out some of the other shows and
you can also head to our website at

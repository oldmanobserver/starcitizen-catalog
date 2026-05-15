# CitizenCon 2948 - Panel: The Principles of Flight

**Video:** https://www.youtube.com/watch?v=V056GFJrnKo
**Date:** 2018-10-17
**Duration:** 45:15

## Transcript

[00:04] hello
[00:06] so I heard you all care about flight so
[00:11] we'll sort of get started this is me
[00:12] David Coulson I'm a gameplay programmer
[00:14] I've been working on this flight model
[00:16] for quite a while and this is John Crewe
[00:19] the vehicle pipeline director you sort
[00:21] of you're in charge of vehicles because
[00:24] the vehicle pipeline is obviously a huge
[00:26] thing so I'm sat there trying to get all
[00:29] the ships from concept to release and
[00:31] all the post release support and all
[00:32] those systems that work with vehicles
[00:34] yep so I think we'll just dive straight
[00:37] into it this is what matters to everyone
[00:40] is you know what's next for flight and
[00:42] star citizen and I think since say 2.6
[00:46] we haven't really had what we wanted out
[00:49] of this we could do a lot better and we
[00:51] sort of have this this vision for how we
[00:54] want it and so we've sort of gone back
[00:56] to 2.6 and we've looked at what you know
[00:58] we had in in 3.0 and we're like
[01:01] reevaluating everything and and thinking
[01:03] about what is the best way to bring the
[01:05] experience that is the most interesting
[01:06] for everyone and so if we look at what
[01:08] that kind of means we want you to really
[01:11] feel the ship you know currently flying
[01:16] around that sort of the ships kind of
[01:17] feel quite similar between a lot of them
[01:19] and they have so much acceleration that
[01:21] it's you can't really feel all the
[01:23] workings of your ship and that's that's
[01:25] really not what we want and to go into
[01:27] that we really want we want this system
[01:30] to be kind of reactive to what's going
[01:31] on inside your ship so it's not so not
[01:34] as simple as just you know flying and
[01:37] then you feel your foot your ships
[01:39] handling and then you do your combat and
[01:41] whatever we wait we want you to feel
[01:43] what's happening inside the ship systems
[01:44] like the fuel and the power and
[01:46] everything and that should really feed
[01:47] into what's happening in the flight
[01:49] model and currently we just don't really
[01:51] have anything like that and hopefully
[01:53] this will get us this more more deep
[01:56] interesting experience that changes
[01:58] between different ships so you know we
[02:02] want it so that that you fly this one
[02:03] ship and you have to fly in a certain
[02:05] way and that's the way to win in that
[02:06] ship and then going to a different ship
[02:08] you might have to change your approach
[02:10] and so hopefully what we got is going to
[02:14] sort of get us toward that we want to
[02:16] kind of make is going back to the
[02:18] reactive thing I think that's really
[02:19] important because we really want we want
[02:21] the thrusters to to have like a thrust
[02:25] strength and then that if we can change
[02:27] that we can kind of work toward changing
[02:30] the handling of the ship while you're
[02:31] flying which is something that we've
[02:32] never really had before so what we're
[02:36] about to show you not final so you all
[02:39] know I'm sure you probably do already
[02:40] you can play this flight model in the
[02:42] the Drake virtual training facility
[02:44] downstairs in the AT&T room and we want
[02:48] your feedback and we want to sort of get
[02:51] to the to the correct flight model that
[02:54] is you know best for everyone so this is
[02:56] not final and I hope you I hope you
[02:58] enjoy it anyways but you know we'll work
[03:01] with us and we'll we'll get it to what
[03:02] we want it to be
[03:05] [Music]
[03:05] [Applause]
[03:07] [Music]
[03:33] [Music]
[03:49] yeah so video is obviously very hard to
[03:52] get across that the feeling of flight so
[03:54] we're gonna talk in depth about a lot of
[03:56] stuff here so let's start at the bottom
[03:59] and work our way up yeah we'll start
[04:01] with controls I think right at the
[04:02] bottom of the flight system one you want
[04:05] to talk about the throttle you may have
[04:06] noticed on those videos there we've
[04:08] changed the way the throttle works you
[04:11] have direct control over your ship now
[04:12] and that works at a much wider range of
[04:15] speeds it's is sort of the feedback
[04:18] we've had from people today like they've
[04:19] noticed that change so let's have a look
[04:21] at it in action so if you look on the
[04:25] left side of the screen there is now our
[04:28] left side of the HUD you now have a
[04:29] speed bar and you're moving your speed
[04:31] up and down with by pressing W and si
[04:33] for a mouse and keyboard I will get to
[04:35] HOTAS in a second promise me
[04:37] but yeah so as you can see like if you
[04:39] press W and then you immediately let go
[04:41] the ship stops accelerating that's
[04:44] unlike what we had previously where you
[04:45] had this kind of defined speed range and
[04:48] you you press W and s to move the target
[04:50] speed up and down that range but we
[04:52] don't have that range anymore right so
[04:54] the speed just moves up and down
[04:56] depending on whether you're accelerating
[04:57] your trusters or not and it seems kind
[04:59] of subtle but but I promise you this is
[05:01] a really significant change and it
[05:03] changes how you're going to have to fly
[05:05] but there's another important part to
[05:07] this which I haven't quite got to the
[05:09] dot on the speed bar there is the target
[05:12] velocity that the coupled mode flight is
[05:14] trying to get you to ward right so if
[05:17] you turn your speed is gonna change you
[05:20] know your forward speed is going to
[05:21] change from that dot and what that dot
[05:24] is supposed to be and coupled mode
[05:26] essentially amounts to moving your speed
[05:29] toward that dog it wants your ford
[05:31] velocity to be
[05:33] held at that dot so you turn in coupled
[05:36] mode and you'll see that ifcs will
[05:39] automatically bring your speed up to
[05:40] that that dot this doesn't happen
[05:42] decoupled mode and that's one of you
[05:44] know the big differences between the two
[05:45] modes is you get this like I guess more
[05:48] newtonian pushing like asteroids kind of
[05:52] fly it out of decoupled which is not
[05:54] coupled so look at the other side this
[06:03] allows you to finally control your
[06:05] thrust power unless you manage your
[06:07] accelerations so this sets how strong
[06:10] your thrust is in all axes when high FSS
[06:14] is trying to move your ship and it gives
[06:15] you that that fine control see if you
[06:17] don't want to go a full tilt you can
[06:20] just bring it down and then you're gonna
[06:22] move at much much slower rates you want
[06:24] to get it faster just scroll it back up
[06:25] again so let's have a go yes
[06:30] yeah so the way this works in HOTAS is
[06:33] you're if you're using a not
[06:35] bi-directional throttle which you can do
[06:38] thrusting forward will increase the
[06:40] amount of acceleration that your
[06:42] thrusters are giving so you can hear
[06:44] that as you push your thrust forward
[06:46] you're gonna get more acceleration of
[06:47] your ship and that speed is moving
[06:49] further up the bar right and then if you
[06:52] want a retro thrust you have the retro
[06:54] thrust on a button and this kind of acts
[06:56] a bit like space brake so you would
[06:58] press this button and you're gonna have
[07:00] your retro thrusters fire and pull that
[07:02] speed back again here's another shot of
[07:05] this you can hear the the thrusters
[07:08] increasing in strength as you move that
[07:09] that HOTAS up the other option here is
[07:12] to have a bi-directional thrust so you
[07:15] can actually have zero thrust
[07:17] effectively be the center setting on a
[07:19] throttle if you have a throttle that has
[07:20] like a an indent in the middle and then
[07:23] you can pull back to go backwards or
[07:25] fire retro thrust and you know push
[07:27] forward to fire forward thrust this is
[07:30] kind of significant because you know
[07:32] previously if you were if you pulled
[07:34] back on your your your throttle I would
[07:36] move that target speed down which would
[07:39] make you slow down but that's actually
[07:40] not what's happening now if you pull
[07:42] back on your on your Hotez you're
[07:43] effectively killing thrust on the main
[07:46] thrusters and you'll carry
[07:47] traveling at that speed but you're not
[07:49] gonna slow down unless you press that
[07:50] retro button so I think let's talk let's
[07:54] talk about after my go on specifically a
[07:57] B to the this that second stage of
[08:00] afterburner so why are we done with it
[08:03] well it's gone it's gone
[08:06] so though I make a few people happy no
[08:14] longer do you just hold shift to get up
[08:17] to cruise speeds there's that weird bit
[08:20] in the middle way like is it going is it
[08:22] not going old now it's going or I don't
[08:24] want to go there yeah so no more scaling
[08:27] your accelerations back no more kicking
[08:29] you out when you move
[08:30] that's afterburner what about boost well
[08:33] boost is now correctly called
[08:35] afterburner
[08:39] so yeah now you're press shift and you
[08:43] will essentially you're firing boost
[08:45] right so you're gonna get more
[08:46] acceleration out of the ship and this is
[08:48] not related to going to cruise speeds
[08:51] this is literally the same as boost was
[08:53] right you're going to do this and you're
[08:55] gonna you're going to feel a more
[08:57] acceleration out of your ship now there
[08:59] has been a previous issue with boost
[09:00] where it's overused shall we say with
[09:05] some people taping it down I've heard
[09:06] this we know how guys taping boost down
[09:08] just for ya so we want we wanted a
[09:11] consequence to using boost so we're
[09:14] actually gonna get back to that know
[09:15] that because we need to go over
[09:16] something else first
[09:17] so go on so how do we cruise now now we
[09:21] got rid of a b2 well you'd be literally
[09:24] just freely accelerate up to cruise
[09:25] speeds in any direction coupled or
[09:27] decoupled
[09:29] so let's have a look at it in action so
[09:35] here in the Aurora I'm just holding W at
[09:38] this point accelerating Paz you see I'm
[09:40] gonna go past the the SCM speed and the
[09:43] ship just keeps accelerating now
[09:44] obviously in coupled this is happening
[09:47] with just you know accelerating forward
[09:49] but you can actually do this with any of
[09:50] the strafe axes as well and you could do
[09:52] this in decoupled you literally just
[09:53] accelerate for as long as you need and
[09:55] you go up to the top the top speed of
[09:58] the ship which is pretty much the same
[09:59] as the crew speeds we had previously
[10:02] though there is another change that's
[10:05] kind of important here when you go past
[10:07] the safe maneuvering speed of the ship
[10:10] couple will start limiting your angular
[10:12] velocity and this is kind of something
[10:14] we had a while ago in cruise and this is
[10:18] kind of a feature of couple because
[10:20] being you know if you're above those
[10:23] speeds and your thrusters are just not
[10:25] quite strong enough to move you around
[10:26] you're just gonna drift for miles and
[10:28] miles and miles so this is kind of like
[10:30] you could think of it as a safety
[10:31] feature of couple that's saying hey you
[10:33] know you're not really gonna be able to
[10:35] practically turn at these speeds because
[10:36] you're gonna drift so much so I'm gonna
[10:38] limit your turn speed to try and keep
[10:40] you from drifting now if you turn on
[10:42] decoupled this is not actually the case
[10:46] decoupled you can just accelerate nearly
[10:48] as much as you want in any direction if
[10:51] you're in coupled and you swap two
[10:52] decoupled mid-flight then you get to
[10:55] freely rotate around so we're going is
[10:57] sort of you can see the target velocity
[10:58] dot there I'm in two coupled I'm going
[11:02] all over the place if you were to go
[11:04] back into coupled at this point you're
[11:06] gonna have a huge amount of slide
[11:07] obviously you're got that huge velocity
[11:10] going there but yeah they're two
[11:13] different flight modes they behave very
[11:15] differently you don't have to use both
[11:17] you can use one of the other I think
[11:19] it's really cool as well that you know
[11:20] previously getting into cruise speeds in
[11:22] in decoupled was kind of a pain because
[11:25] you'd have to be going in a perfectly
[11:26] straight line but because we've removed
[11:28] that restriction this is just no longer
[11:30] problem decouple to work so much better
[11:32] like this so you might wander if you're
[11:36] just flying around what if you don't
[11:38] want to go up to these feats what if you
[11:40] you don't want to you don't want to be
[11:42] at the
[11:43] feeds where you're having your your
[11:44] angular velocity-- limited and it's kind
[11:46] of a pain to manage that especially if
[11:48] you're a more inexperienced pilot so
[11:50] what we have is a speed limiter and this
[11:52] is a toggle right so you can press this
[11:54] button and it will hold your ship into a
[11:57] maneuvering speed that is going to keep
[12:00] you from sliding too much and you can
[12:03] think of this call most almost like a
[12:04] safety we call it SCM safety so we'll
[12:07] just have a look at how that works so
[12:08] you're traveling at a cruise speed and
[12:10] you press the SCM safety button and that
[12:13] will bring up these two triangles on
[12:14] your speed bar and this is going to hold
[12:16] you inside a certain speed range where
[12:19] we can pretty much make sure that you're
[12:22] not going to drift too much and we'll
[12:23] reevaluate those speeds for all the
[12:25] ships to kind of keep keep you from
[12:28] sliding too much and keep you from
[12:30] getting into territory where the ships
[12:33] just very difficult to control and so
[12:36] this is on by default you can obviously
[12:38] change that in the settings and we
[12:39] expect that the more experienced pilots
[12:41] will be able to fly with this off and
[12:43] they can soar the edge up to the higher
[12:45] speeds and not lose control too much yes
[12:47] it's not like hard cat-like it's a range
[12:52] of velocity and speed
[12:55] you're still gonna slide yeah in those
[12:58] ranges yeah you just slide less when
[13:00] you're going slower so so we talked to
[13:04] us at the start a few goals you want to
[13:06] do so a big one of this is how do we
[13:07] make this system reactive and systemic
[13:10] what does that mean so we fully
[13:13] integrated FCS and thrusters into all
[13:15] the other ship systems they have items
[13:18] here Oh like all the rest
[13:19] that means they now behave with power
[13:22] fuel heat they will interconnect with
[13:25] all the other items in the ship
[13:26] previously there were sort of two
[13:27] separate systems in the ship and never
[13:29] the two would meet that's not the case
[13:32] now so another thing we want to talk
[13:35] about is having a grounding for how
[13:37] these thrusters work in reality which we
[13:40] can go over yeah so what we wanted to do
[13:44] with thrusters is base them on some
[13:46] real-life fiction that we can sort of
[13:48] take forward into the future and that
[13:49] was these things called Vasa mere
[13:51] engines which I can barely remember what
[13:53] they stand for I think it's variable
[13:55] specific impulse magneto plasma Rakesh
[13:57] that's what it is so this is a real life
[14:00] rocket technology that is sort of going
[14:03] through a lot of testing as a potential
[14:04] future interstellar or intercept so the
[14:10] idea basically is that you're gonna
[14:12] ionize a fuel like some gas like argon
[14:15] arseling so you're gonna use lots of
[14:17] power to create this ionized plasma and
[14:20] this is going to generate loads and
[14:22] loads of loads of heat and then you will
[14:23] accelerate the plasma with really strong
[14:26] magnets to generate thrust and so this
[14:28] kind of gives us a really good basis to
[14:31] make all the thrusters work off of this
[14:33] so if we have a sort of defined thrust
[14:38] capacity for thrusters and this is their
[14:41] performance effectively right this is
[14:42] the amount of Newton's they can give out
[14:43] and then we draw power and generate heat
[14:47] and generate thrust based on this
[14:49] fiction we can kind of make this a
[14:51] really systemic believable system that
[14:54] sort of works under some future version
[14:57] of a real thrust system so we'll take a
[15:01] look at this so we're gonna look at this
[15:05] in action we do a lot of this by looking
[15:06] at the MFDs just cuz it's a really clear
[15:09] way of showing it in a presentation
[15:11] format so as you can see now every
[15:13] thruster has a little item on the power
[15:16] UI and they draw power dynamically as
[15:19] the thrust is given to them to move the
[15:21] ship fuel is the same as this to just
[15:25] imagine the power but replace fuel it's
[15:26] the same and as you're flowing around
[15:29] here you can see your main thrusters
[15:31] going up using more power
[15:34] the heat goes up as well with them now
[15:37] I'm stopping so the retros went up there
[15:40] [Music]
[15:41] let's let's have a look what happens
[15:43] like some of the other systems we have
[15:45] in the game you can move the power
[15:47] around so let's have a look at that so
[15:51] you can manually under power or over
[15:55] power each cluster and your ships gonna
[15:57] behave accordingly so here I've reduced
[16:01] the power dynasty on the rear thrusters
[16:05] and this also affects heat as well so if
[16:08] you're under powering thrusters they're
[16:10] going to generate less heat afterburner
[16:12] is actually just a facet of this system
[16:14] it's just a shortcut straight into over
[16:16] power mode and overclocking is then
[16:19] another level on top of this where you
[16:22] get that extra performance you get more
[16:24] heat more where and it's all systemic
[16:28] they they all just work together and a
[16:31] pair of thrusters burn less fuel every
[16:33] powered ones generate more heat if
[16:36] you're running low on fuel you can
[16:37] throttle all yeah your thrusters down to
[16:39] just eke out that wor that more
[16:41] performance and this is this is all
[16:44] power system to give us consequences to
[16:46] your actions at the moment in game you
[16:49] can just fly around to your heart's
[16:50] content
[16:51] oh I've run out of fuel I'll just go to
[16:53] Chrysler and get a bit more fuel you
[16:56] know most my ships hot don't care it's
[16:59] not really as interesting as it could be
[17:00] a thing yeah so this gives us those
[17:02] consequences so let's have a look so
[17:06] this is what I was saying earlier with
[17:08] the consequence to taping down boosts so
[17:12] if you do that what will happen is your
[17:14] thrusters will start overheating and the
[17:16] more and more you do that the thrusters
[17:18] are going to wear out and they're going
[17:19] to get damaged so immediately if you
[17:23] start overheating we're not going to cut
[17:24] out your thrust or anything I think
[17:25] that's a bit mean but we will
[17:27] immediately have the thrusters start
[17:29] struggling to give the thrust that it
[17:31] can and you'll feel those this is this
[17:33] is simulated dynamically on all the
[17:34] thrusters right so if you for example
[17:36] are overheating specifically your front
[17:39] left maneuver thruster you're actually
[17:41] going to feel the ship is becoming
[17:43] imbalanced and you're going to have
[17:45] if you have a penchant for like strafing
[17:47] left everywhere in the game yeah that
[17:49] site is gonna suffer so you will
[17:51] actually feel that the ship is not
[17:53] thrusting to the left as strong as it is
[17:55] to the right because you've been
[17:56] overheating the the thrusters and right
[17:58] too much so we'll take a look at this so
[18:04] right now you're flying around perfectly
[18:06] normally and then you press shift to
[18:09] afterburn and you'll see you getting
[18:11] overpowered here now for the sake of
[18:12] showing this we've massively increased
[18:15] the wear number so the wear number is
[18:16] that middle number that's number 15 in
[18:18] the middle of the thrusters so you
[18:20] overheat your thrusters too much that
[18:22] number is going to start going up again
[18:23] Dori it's it's faster here than it will
[18:26] be in the game and you can see that
[18:28] thrusters are starting to not use as
[18:30] much power as they were I think that the
[18:32] ideal behavior here is that they
[18:33] actually draw as much power as they
[18:35] would have but you're just not getting
[18:36] the same amount of thrust out of the
[18:38] thruster so you continue after burning
[18:41] like this your thrusters get weaker and
[18:43] weaker and weaker and you'll immediately
[18:44] start feeling the ship get more and more
[18:46] sluggish because you're just you know
[18:48] you're you're damaging the thrusters by
[18:51] doing this
[19:01] yeah
[19:02] if you keep doing this bad things are
[19:04] gonna happen the the main visual cue of
[19:09] this is thruster misfires now misfires
[19:12] are going to be things that happen on
[19:13] all items when they're getting worn and
[19:15] overheated and four thrusters
[19:18] specifically they they're gonna
[19:20] accidentally fire that backfire like a
[19:22] car sometimes they're not going to
[19:23] respond when you want them to respond
[19:25] generally gonna make flight pretty
[19:27] unstable we talked about changing
[19:31] thrusters out different thruster sets
[19:34] will have different grades so if you if
[19:36] you want to invest the time to to get
[19:38] some resources to get better thrusters
[19:40] they they've got a higher capacity for
[19:42] heat and a slower wear rate they're
[19:44] gonna have less misfires if you cheap
[19:47] out and go for the bottom shelf items
[19:50] then you're gonna hit this more you're
[19:53] gonna experience this in game your ships
[19:55] gonna be shaking around feeling
[19:56] unresponsive but generally this is not
[20:00] something you want to happen second a
[20:02] second this is you've worn your
[20:03] thrusters out you've done lots of stuff
[20:05] for a long time you know playing not
[20:07] very well yep and this is the
[20:10] consequence to that yep absolutely
[20:13] so we've got all these bad things it'd
[20:16] be a bit unfair if we didn't give you a
[20:17] way to sort of manage this so how do you
[20:21] control your thruster back so you don't
[20:23] get them overheated and to warn the
[20:26] acceleration troll that we talked about
[20:28] afterburner in the strength thrust
[20:30] strength system are your friend in these
[20:32] scenarios so going back to this if you
[20:36] look at the right side of the hood
[20:39] we're after burning here lots and lots
[20:42] of heat is being generated here so to
[20:45] manage that I just bring the thrust
[20:46] capacity down really low generates a lot
[20:50] less heat as I bring it up so the power
[20:52] and heat go up in turn again afterburner
[20:56] is just a shortcut to overpowering and
[21:00] this is where you're gonna be managing
[21:04] stuff and the great thing about this
[21:06] you've got your you've got your throttle
[21:07] you've got your after burn you know you
[21:08] throw all your thrust capacity you don't
[21:11] need to go in your f DS like flying
[21:13] around doing this trying to work out
[21:15] what's going on you've got those two big
[21:17] items sent if you heard after a while
[21:20] you're not even gonna need to look at
[21:22] them you're gonna worked out where to
[21:24] where to move them it's just a shortcut
[21:26] to spending your life looking at little
[21:29] screens yeah absolutely even more we can
[21:32] do here straightforward enough since we
[21:38] simulate this we can actually do we can
[21:40] just push this to limit we can say hey
[21:42] if someone shoots your thruster we can
[21:44] start reducing its power output and its
[21:47] strength and this is kind of this level
[21:50] of dynamic flight behavior we just never
[21:53] had before so we take a look at this
[21:56] inside the freelancer you're flying
[21:59] around your thrusters are in perfect
[22:00] health you got no problem and so here
[22:03] Gladius is gonna shoot some thrust race
[22:06] it's already shot the one on the right
[22:07] there the more and more you do this you
[22:09] can see the thruster is starting to get
[22:10] damaged and you will immediately feel
[22:14] this in the handling of the ship so the
[22:17] idea here so you can see these two
[22:19] thrusters have been damaged if you try
[22:20] and move you're just not going to get
[22:22] the strength out of them that you need
[22:24] and the expectation here is that we want
[22:26] more interesting combat so that you know
[22:29] I think currently people just go
[22:31] straight for the cockpit if they know
[22:34] what they're doing but actually it could
[22:37] actually be another strategy to go for
[22:40] the main thrusters of a ship or even if
[22:41] you can if you're good enough to hit the
[22:43] manoeuvre thrusters you can a
[22:44] ship so it can't even roll yes yes at
[22:47] the moment it's very time to kill we've
[22:49] always talked about time to disable you
[22:50] want to be able to board ships that you
[22:53] take it out at the moment you can't
[22:55] really do that but this is a system that
[22:56] allows you to that ship you've
[22:58] got distortion weapons to do that you
[23:00] could physically damage them so it's all
[23:02] building up to that grabbing hold of
[23:05] other ships you know because the
[23:07] thrusters are drawing parasaur
[23:08] dynamically as well if you for example
[23:10] take out the power plant of a ship
[23:12] they're not going to be able to power
[23:13] any of their thrusters the ship's going
[23:14] to be completely incapacitated you just
[23:16] won't be able to move which is pretty
[23:18] cool so there's a bit more I think this
[23:22] is a really important thing that we've
[23:25] done is we've gone over every single
[23:27] ship in the game and rebalance them and
[23:29] retuned how the ships fly this kind of
[23:33] feel like this is kind of a subtle thing
[23:34] for a lot of people but I think for the
[23:36] people who really know the details of
[23:39] flying this is a huge huge deal so what
[23:42] the goals here were to try and get some
[23:44] more variety between the ships and try
[23:47] and feel more momentum in the ships and
[23:48] feel more character between them so
[23:51] we're going to go through and we're
[23:52] going to create like a systemic system
[23:56] for deciding what thrusters and what
[23:59] size of thrusters are going to get
[24:01] certain thrust capacities and so they
[24:04] cross all of the ships we sort of have
[24:05] this this unified balance of how how how
[24:11] ships feel and how they they get thrust
[24:14] assigned to each direction the momentum
[24:16] part is key here like at the moment in
[24:18] the game maneuvering thrusters have like
[24:21] absurd amounts of power to them yep and
[24:24] this changes that yeah in in three three
[24:28] there are actually ships that have like
[24:30] these tiny little maneuver thrusters and
[24:32] these giant main thrusters and the
[24:33] maneuver thruster has more thrust
[24:35] than the mains so no more of that we're
[24:38] gonna make this a lot better so we look
[24:46] at the Gladius the Gladius has these two
[24:48] really big thrusters straightaway if I
[24:50] make a left here and you can see how
[24:51] much more drift there is than there used
[24:53] to be you really want to feel the
[24:54] momentum when you're moving a ship
[24:56] around so I think the the Gladius has
[25:07] quite a few thrusters that can point
[25:08] downward so you will actually feel
[25:11] differences in trying to strafe in
[25:14] certain directions and of course the
[25:15] angular acceleration is also super
[25:18] important here the layout of the the
[25:20] gladiators' thrusters actually gives it
[25:22] more pitch authorities than than y'all
[25:25] and so in this ship that's going to be
[25:27] the dominant way you're going to want to
[25:28] try and use your role and pitch to get
[25:31] on target and hold the target in front
[25:32] of you and that may not be what we have
[25:35] with other ships right variety and
[25:38] character yeah this variety is super
[25:39] super important to us so you can see in
[25:42] the outside view here as you move around
[25:45] it really I I can't stress how cool it
[25:48] feels to have this momentum it really
[25:51] makes flying it makes it arguably more
[25:53] difficult but I think it's more
[25:57] rewarding when you fly really well and
[25:58] that's that's really cool so I think we
[26:02] will we will move on a different ship
[26:04] yeah
[26:05] we'll move on to the Hornish Jeff Hornet
[26:08] in comparison to the guys much beefier
[26:10] much heavier and has weaker directions
[26:14] in all other axes except for going
[26:16] forward so it has that huge main engines
[26:18] so far more acceleration going forwards
[26:22] and it's shorter than the Gladius so it
[26:26] actually has weaker pitch Authority but
[26:31] it's your is much stronger so if you
[26:33] only have those two ships you're going
[26:34] to be flying them two completely
[26:36] different ways to have it you can fly
[26:37] them the same way one's gonna be worse
[26:39] what you're doing than the other so you
[26:40] need to learn and feel how those two
[26:42] ships behave we'll fly them accordingly
[26:44] again very hard to see in a video
[26:48] recommend you go play this and see how
[26:50] it feels I just want to do a tiny bit of
[26:53] audience participation participation at
[26:55] this point how many of you have a
[26:56] Gladius mister kantor it's not that many
[27:00] not that many how many of you have a
[27:01] Hornet it's a lot more then let's look
[27:06] at another ship how many people have an
[27:07] Aurora that's a lot more yeah Aurora
[27:12] we'll take a look at the Aurora so I
[27:14] think we've been kind of guilty of
[27:16] punishing the Aurora a bit too much
[27:18] making it pretty much useless in combat
[27:21] and you know it's still a starter ship
[27:23] so it's still not going to be anywhere
[27:24] near as good as the Gladius and the
[27:25] Hornet but using this new system of
[27:28] assigning thruster strengths we can
[27:31] actually have it give some strengths
[27:33] like one of the big strengths of the
[27:35] ship is that it's really really light
[27:36] it's much lighter than the the hornish
[27:38] and so even though it has weaker
[27:40] thrusters overall it actually has almost
[27:44] I think it actually has slightly more
[27:45] acceleration in some strafe directions
[27:48] than the hornish but it obviously
[27:50] sacrifices not even close to as powerful
[27:54] main thruster and so you know in the
[27:57] Hornet if you're going to be getting
[27:58] you're getting your back out and using
[27:59] the main thruster you you can't really
[28:01] do that as much in the Aurora
[28:02] it's just not quite gonna be as useful
[28:04] we can also use the previous ship item
[28:08] to zero systems to make the Aurora not
[28:12] as useful say as a Hornet because you
[28:14] know maybe you could just cat dish to be
[28:16] thrust well enough or you just don't
[28:18] have the items to match the Gladius this
[28:23] is the most popular ship in the game yes
[28:25] absolutely we definitely didn't
[28:28] appreciate it enough in all the previous
[28:29] tuning zone yeah we don't want to nerf
[28:31] the ship for sure it should still be
[28:34] useful even though it's not not as good
[28:36] as the better ships so I think that is
[28:41] that we also to do all of this we wanted
[28:45] to make a ship design tool right so
[28:47] we're gonna actually try something
[28:48] slightly risky here and do a live demo
[28:50] first said there may be some crashes
[28:52] here so there probably won't be some
[28:54] crashes but we made the ship design tool
[28:56] and what we wanted here was super fast
[28:59] iteration you know previously when
[29:01] designing ship handling we had to hand
[29:04] edit XML files and run console commands
[29:07] and it was just kind of a pain it took
[29:09] it took hours wait way back years ago we
[29:11] as designers to tune the ship you had to
[29:14] go in each individual thruster XML and
[29:16] go put its force output in Newtons yep
[29:20] to do all those then you had to reload
[29:22] the game then you had to test it with no
[29:25] feedback on that the times and the
[29:28] accelerations rango yeah uh feels okay
[29:31] all that feel terrible you know gimble
[29:34] thrusters because we have gimbal
[29:36] thrusters thrust controls can give
[29:38] strength in lots of different directions
[29:40] but not at the same time right and it
[29:42] makes it basically impossible for a
[29:44] designer to predict what the
[29:46] acceleration of a ship is going to be in
[29:47] each direction based on just setting the
[29:49] thrust capacity so what we have now we
[29:52] run back to the editor so here's the
[29:54] editor so we have this new tool here
[29:56] which is the ifcs editor tool and this
[29:59] is going to allow us to do live editing
[30:02] so we run in the game I'm gonna spawn a
[30:06] Gladius here it's interesting
[30:10] every studio has their own favorite ship
[30:12] so yeah the u.s. Studios love to test
[30:14] everything on the horn
[30:15] the UK loves doing the Gladius okay so
[30:19] we have these dev tools now if you've
[30:21] never had before so as I move around we
[30:23] can see the thrust output and the gimbal
[30:26] direction and all of the thrusters while
[30:27] you fly around and this level of
[30:29] information we've just never really had
[30:31] before now these big red and blue cross
[30:34] in the middle of the screen here this is
[30:35] the thrust strength for a linear thrust
[30:37] for their ship so you can see you got
[30:39] sixty five point eight meters a second
[30:41] Ford minus twenty seven to the left and
[30:44] twenty seven to the right as well so we
[30:46] have all the thrusters in a list here
[30:47] right so these are these are the
[30:49] thrusters we can click on them and
[30:50] they'll highlight we're on the ship that
[30:52] is and then we can actually hand edit
[30:54] the thrust capacities so these are the
[30:56] main thrusters if I make these ten you
[31:00] can immediately see that the ships
[31:01] handling where the ships Ford
[31:03] acceleration has changed if I try and
[31:05] accelerate forward it's gonna be a lot
[31:07] slower and there's no reloading of the
[31:09] editor and this is immediate you
[31:10] immediately feel the difference we have
[31:12] a lot of ships in the game so if you
[31:14] have to reload the editor every time I
[31:16] do it it adds minutes times hundreds of
[31:18] ships it gets very long so to go the
[31:21] opposite why don't we take some of these
[31:24] thrust areas of the front here and we're
[31:26] just gonna make them really strong we're
[31:27] gonna get like a great career in that'll
[31:31] do so we now have fifty five hundred
[31:34] thirty two thousand meters a second Ford
[31:36] so it's you can feel the difference in
[31:40] the role is just immediate difference we
[31:44] get up to speed really fast so we have
[31:45] this live editing now obviously we
[31:46] mentioned earlier that hand editing
[31:48] thrust capacities is just kind of a
[31:50] no-no I mean you could do it but it's
[31:52] basically impossible to guess what these
[31:54] thrusts what these accelerations are
[31:56] going to be so to solve that we have
[31:58] this calculator here we can enter the
[32:01] ship's desired handling so our actually
[32:04] to put these back to a sensible number
[32:05] for a second it's alright there we go so
[32:09] if I say we got 15 meters a second in
[32:12] the Ford y direction of the ship if we
[32:15] just change this to a hundred this is
[32:18] different from where we are at the
[32:19] moment where it's all based off goal
[32:20] times yes is a different way of doing
[32:23] this so you enter in the desired
[32:25] acceleration and you click tune ship and
[32:27] it'll automatically
[32:29] the thrust capacities of all the
[32:30] thrusters and it will obviously now you
[32:33] can see that the forward acceleration is
[32:35] now 100 meters a second this obviously
[32:38] not like you can sit and calculate that
[32:40] number on paper but I'd you just be
[32:43] insane to do that I don't know why you'd
[32:44] want to do that so we have this now and
[32:47] again you can see how live this is it's
[32:49] really taken me like seconds to change
[32:51] the handling of the ship we also have
[32:53] all of this extra information here so we
[32:55] can fly around the ship and monitor what
[32:57] it's doing and this level of sort of
[32:59] interactive ship design is something we
[33:01] just we just never had before so this is
[33:04] really cool we're gonna jump back to our
[33:06] presentation here we go we'll skip past
[33:10] our back up video we're gonna take a
[33:20] look at atmospheric flight yeah
[33:21] fly down to the planet pay close
[33:23] attention to the audio here the audio is
[33:26] fantastic here
[33:59] so there we go
[34:00] atmospheric flesh anybody notice
[34:03] anything different about what was shown
[34:05] there well so no God left so in the
[34:14] current version of the game we do
[34:15] simulate drag but we never got around to
[34:17] implementing lifts so now we have lift
[34:20] and drag and that is a huge it's hard to
[34:23] massive state how much of an improvement
[34:25] that is and a big change it's it's what
[34:28] makes atmospheric flight different to
[34:31] spaceflight rather than just being a
[34:33] diluted version of spaceflight so the
[34:37] atmospheric flight system as a whole is
[34:38] that a huge amount of work done to it
[34:41] lift drag turbulence they've all had
[34:43] some changes so let's have a look sit in
[34:45] the Gladius yeah so we fly around in the
[34:49] Gladius and we try and you're
[34:51] immediately you're gonna feel torque on
[34:54] the ship trying to keep it into the wind
[34:55] right obviously if you hard you're in a
[34:58] plane and in real life it's just not
[35:00] going to work right and then as you see
[35:01] if we roll in pitch you can actually
[35:04] turn so much faster in fact you can
[35:06] actually almost completely arrest the
[35:08] the dirt the drift that you would get in
[35:10] space so you see how hard we can turn we
[35:13] actually start to black out that's not
[35:15] black out from the thrusters that is
[35:17] black up from the aerodynamic forces on
[35:18] the ship which is not something you get
[35:20] in space
[35:24] I think this is a this is this change
[35:26] this has to fly it you can see this is
[35:28] someone like well it's me me trying to
[35:31] y'all really hard and you see how the
[35:33] ship like torques back into the wind if
[35:37] you for example try and hover your ship
[35:39] and then accelerate to cruise speeds
[35:42] sideways the ship will experience all
[35:45] these aerodynamic forces that it'll
[35:46] actually pivot the ship back into the
[35:48] wind just to sort of get this this
[35:53] difference right the ships are obviously
[35:54] like planes in real life don't fly
[35:56] sideways so the Gladius is probably one
[35:59] of the closest ships we have yeah to a
[36:01] modern-day plane so it has that huge
[36:03] lift area so let's let's compare this to
[36:06] another ship which is not not nearly so
[36:08] aerodynamic everyone's favorite the
[36:11] Aurora so the Aurora Flying Brick really
[36:16] isn't it's not really got much of a lift
[36:17] surface so it is a lot it flies a lot
[36:21] slower because it it struggles to cut
[36:22] through the air it's got a lot more
[36:24] instability as you can see there it's
[36:26] true we're trying to you're here but it
[36:29] just just not do it it's just not doing
[36:30] it because it's hitting that wings and
[36:32] kicking back another downside to this
[36:35] beyond that the thrusters have to do a
[36:38] heck of a lot more work just to do this
[36:40] so they're they're running hotter
[36:41] they're consuming more fuel doesn't mean
[36:44] they like this all the time you can get
[36:46] around this to extent again bring the
[36:48] thrust capacity down you're gonna be
[36:50] flying slower I should add that you know
[36:53] your thrusters are doing all this work
[36:54] when you have a super not aerodynamic
[36:56] ship like in the Gladius you can
[36:58] actually fly along stable and turn your
[37:01] thrusters off and the ship will glide
[37:02] which obviously you can't do in the
[37:04] aurora you're gonna have to have the
[37:05] thrusters working an awful lot more yeah
[37:08] if you're gonna go down pretty quickly
[37:10] with this exactly exactly so let's have
[37:12] a look at what's going on and yeah so
[37:15] this is a little bit of debug stuff you
[37:17] can see what's going on so the red line
[37:18] is the drag and it's obviously moving
[37:20] around because of some of the turbulence
[37:21] in the air and you roll and pitch and
[37:23] you get this sudden force of lift
[37:25] pulling the ship up and this I just I
[37:29] hope unfortunately we couldn't have
[37:31] aerodynamic flight at the at the Drake
[37:34] virtual training facility today but this
[37:37] difference is massive right you if you
[37:39] try and strafe around and like circle
[37:41] straight people in space and you try and
[37:43] do that and atmosphere it's going to go
[37:44] quite badly wrong for you you need to
[37:48] really adjust your flight your flight
[37:50] strategies in atmosphere and the hope is
[37:52] that you're gonna go into atmosphere an
[37:54] atmospheric flight is gonna be a bit
[37:55] more like planes and that difference is
[37:58] going to be really really drastic and
[38:00] having that difference in game players
[38:02] is really really exciting yeah
[38:03] so we're also going to take a quick look
[38:05] at ship management yep so again how do
[38:10] you manage all this stuff in atmosphere
[38:12] you've got to keep your thrusters cool
[38:14] use the correct amount of power it's
[38:16] different to spaceflight again so the
[38:19] the thrusters now this goes back to
[38:21] massively impaired thrusters and current
[38:23] game they now either have to fight the
[38:24] atmosphere or if you've got a less or
[38:27] more aerodynamic ship they'll fight it
[38:29] yeah so let's have a look at how we
[38:31] manage that in game freelancer not a
[38:34] particularly aerodynamic ship it's in
[38:37] atmosphere here going forwards
[38:40] look at MFDs bits a second to to see
[38:44] just how hot you look at the target
[38:47] velocity as well you can see that the
[38:48] ship is not actually able to reach the
[38:50] target velocity and that's because the
[38:51] drag so if you pump more power into your
[38:54] thrusters you actually can increase your
[38:56] top speed in the atmosphere because your
[38:58] terminal velocity lotsa gonna be a bit
[38:59] higher so what we've done here is we've
[39:01] reduced thrust capacity down you see the
[39:04] heat sort of reached an equilibrium down
[39:05] those two mains there so 350 I've gone
[39:09] to overclock them now and now we can't
[39:12] hit that speed you probably could
[39:14] yep keep ticking it up but you paying
[39:17] the price of more heat so now the
[39:20] thrusters are over heatsink so how do I
[39:22] stop that turnoff
[39:27] we eats going away now it's probably
[39:29] best to turn off overclock as well
[39:30] otherwise when you turn them back on
[39:32] they're just gonna go back into that
[39:33] cycle put it back in again
[39:35] you know you've rented yourself
[39:38] overeating
[39:40] so yeah that's basically magic I think
[39:42] we're a bit tight on time today we are
[39:45] we don't have enough time to go over
[39:47] they unfortunately but there has been so
[39:49] many other changes to the flight system
[39:51] in the past year and hopefully like we
[39:54] obviously can't have a three-hour slot
[39:55] to keep talking about them but we're
[39:56] gonna go over a few of the other things
[39:58] briefly I don't know if you've heard we
[40:01] have completely new ship audio every
[40:03] single ship in every single thruster
[40:05] everything is completely new
[40:06] you heard also the the atmospheric sound
[40:09] is completely new and we're really
[40:11] excited about this is actually like a
[40:12] such a huge difference it sounds so much
[40:14] better than it used to
[40:15] yeah decouples had a lot of changes
[40:18] those of you fly decoupled obviously
[40:21] have much fun with all those bugs
[40:23] swapping between the two modes stuff not
[40:26] remembering itself we've worked on all
[40:28] of those yep
[40:30] going with that dual-stick flight I
[40:32] think is something that hasn't really
[40:33] had the attention that it needs so you
[40:36] put a lot of effort into that to make
[40:38] that experience better obviously the
[40:40] control changes we talked about earlier
[40:42] are hopefully trying to address some of
[40:44] those issues and make couple of jewel
[40:46] sticks in there yeah you can trap some
[40:47] you'll stick flying in the in the land
[40:49] area and aí flight now uses exactly the
[40:54] same system so we get lots of cool
[40:56] little little stuff wingmen can
[41:00] especially for squadron I've got all the
[41:02] wingman followers on it wing will just
[41:06] be slightly offset and they move with
[41:08] you a lot of the core AI flat systems
[41:11] have been heavily updated and this is
[41:13] going to slowly trickle down into the AI
[41:14] of flight behaviors to make you know
[41:16] significantly improved AI flight we've
[41:20] also worked a lot on the core like
[41:22] performance of the system so hopefully
[41:25] having like 80 ships in a level is going
[41:27] to not completely tank your frame rate
[41:29] so we'll get some more frames per second
[41:32] out of that and the whole system is a
[41:33] little bit lighter on the CPU which is a
[41:35] huge improvement as well mo ship design
[41:38] tall so at the moment the the sort of
[41:40] knowledge for tweaking and tuning ships
[41:42] is very centralized something goes wrong
[41:45] there's only a few people that can deal
[41:46] with it you've got all these tools now
[41:48] that enable anyone to go in there and
[41:50] help out
[41:52] you get that instant feedback like we
[41:53] saw in the editor you know what you're
[41:55] doing you don't have to sort of go into
[41:57] five million spreadsheets and look at
[41:59] some numbers and graphs to try and work
[42:00] out yeah it's all live edit updates in
[42:04] real time it's great so another thing
[42:06] that we can do now is swapping out your
[42:08] thrusters this is a super exciting thing
[42:10] it goes back to what we were talking
[42:12] about earlier in how the thrusters all
[42:15] have their own individual thrust
[42:16] capacity which dynamically changes the
[42:18] ships handling so you can for example
[42:20] either swap out a whole set of thrusters
[42:22] or you can swap out specific thrusters
[42:24] and the handling of the ship will
[42:25] real-time change based on that yeah and
[42:31] some more UI updates as well we
[42:32] obviously we saw a new central hub there
[42:34] that has those features on stuff we
[42:36] didn't talk about in there there's a
[42:37] little g-force meter shows you g-force
[42:40] that's back lots more planned so this
[42:44] will be coming out in 3.4 we weren't
[42:47] ready for 3.3 unfortunately but there is
[42:49] still a few months before this happens
[42:51] and we actually have some more things
[42:52] that we want to do so harbor bikes huge
[42:55] deal I think right now they just don't
[42:58] really feel great and so we want to go
[43:02] over the handling of hover bikes and
[43:03] really tune that experience and make
[43:05] that a lot more interesting so it's you
[43:06] know more like you're you're you're
[43:09] close to the ground type control however
[43:11] like betta failed everyone
[43:13] yeah always once networking so I've seen
[43:17] the network team have been super busy
[43:18] with OCS buying curling Sierra's
[43:21] variables everything we need to get
[43:23] their support to finish off a few more
[43:26] things on the on the ICS side obviously
[43:28] it's all based around the current system
[43:30] that will be out there in 33 there needs
[43:33] to be a lot of tweaks for 34 to get it
[43:34] all working nicely but it does work and
[43:37] if you go play it you'll see that you're
[43:40] all in a server there six on six
[43:42] so really the thing that you all want us
[43:44] to work on right is ESP we have already
[43:49] done a lot of work on ESP but there's a
[43:52] lot more time and the hope is that over
[43:54] the next few months now that you're all
[43:56] sort of got to play this we're going to
[43:58] spend a lot more time on ESP and we're
[43:59] going to dial that experience in for
[44:01] three point four hopefully with your
[44:03] feedback as well I think it's a it's a
[44:05] feature that
[44:06] is very reliant on what the actual
[44:08] experience of a wide variety of players
[44:11] are so we're gonna spend a lot more time
[44:12] on that UI improvements obviously it's
[44:16] not a great deal of goods if you can't
[44:18] see or understand what's being presented
[44:20] to you so we've got a lot of plans that
[44:22] we want to do there to make that much
[44:23] clearer yep on top of that the landing
[44:27] and docking systems are also scheduled
[44:29] to get a lot more work we want to make
[44:30] landing is not really great and we want
[44:33] to make that a lot better and the
[44:35] systems to help us through like Auto
[44:37] land and stuff are also going to work a
[44:38] lot with the docking system so you can
[44:41] actually dock ships together and stuff
[44:42] and that's going to work an awful lot a
[44:44] lot better we need that for bigger ships
[44:46] like the whole sea who need to dock to
[44:48] stations to be spawned and load
[44:50] everything because obviously if they're
[44:52] full of cargo they can't and you can't
[44:55] lounge pants a cargo so yep it all ties
[44:57] together so I think we're actually
[44:59] running over time we're probably gonna
[45:01] be asked to leave the stage at some
[45:02] point so I think that about wraps it up
[45:04] for us
[45:07] [Applause]

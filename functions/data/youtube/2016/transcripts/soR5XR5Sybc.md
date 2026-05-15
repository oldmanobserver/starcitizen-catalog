# Star Citizen: Around The Verse 3.7 – Austin

**Video:** https://www.youtube.com/watch?v=soR5XR5Sybc
**Date:** 2016-09-15
**Duration:** 32:43

## Transcript

[00:10] Closed Captioning provided by the Imperial
News Network.
[00:14] Chris Roberts (CR): Hello.
[00:16] Welcome to episode seven of Around the ‘Verse,
our weekly update behind the scenes of Star
[00:20] Citizen.
[00:21] I’m Chris Roberts
[00:22] Sandi Gardiner (SG): And I’m Sandi Gardiner.
[00:23] We are another week closer to CitizenCon.
[00:25] CR: Yes, yes we are.
[00:27] Pressures on.
[00:28] SG: Pressures on.
[00:29] CR: So on today’s episode, we’ve got the
Austin office for an update on Star Citizen’s
[00:33] first data runner
[00:34] SG: We’ll also check in with the U.K.
[00:36] Audio Team to showcase the Music Logic System
we’re building.
[00:38] CR: Yup, pretty excited by that one, but first
we're going to go out to John Erskine to explain
[00:42] what else they’ve been working on in Austin.
[00:44] Studio Report
[00:45] John Erskine (JE): We have our Senior Audio
Designer Jason Cobb - he’s going to show
[00:50] detailed look at some of the sounds that he’s
been crafting that were actually requested
[00:56] by many of our players.
[00:57] Jason Cobb (JC): So I’ve been working on
the sound of debris that you fly through if
[01:03] you are behind a ship that explodes in the
game.
[01:07] During dogfighting we’ve had a lot of really
great explosions - visually and sonically
[01:12] - but we’re lacking any sort of feedback
for flying through the debris cloud that remains
[01:18] and so I’ve been working on sounds for that
aspect and to do that it’s really not feasible
[01:25] to have a physical particle for every bit
of debris that is generated.
[01:30] So what I do is I take all of the output I
generate one-by-one and drop them into a digital
[01:36] audio workstation where I can set up an effects
chain of a reverb for the front and a reverb
[01:42] for the back - I’m using Altiverb in this
case.
[01:47] Model of a Sikorsky.
[01:49] So when we play the output of all these generated
files.. [plays sound] …they are very dry
[01:57] but then when I enable the… [effect plays]
…effects, they start to take on some character
[02:03] of impacting of a hull and if I can adjust
some of the equalities of that, we’ve got
[02:11] the front and the back here.
[02:14] You can sort of start to place these impacts
into more of a space and so I would take all
[02:24] of this output and render it through an effect
and that can be one ship and then maybe we
[02:30] need a slightly larger sounding ship well,
we’ll have to render it through another
[02:34] effect.
[02:35] There’s a chance we might be able to do
the effects part in real time but for right
[02:38] now in the prototyping we’re just hard baking
the assets with reverb in them.
[02:43] And so now, into gameplay - let’s check
this out.
[02:46] I’m going to solo just the explosion and
the debris cloud so that we don’t have to
[02:51] listen against the other- the ship noise mainly.
[02:54] Just to isolate for this test.
[02:57] [runs test]
[03:01] It seems like maybe the debris cloud’s lasting
a little bit longer than it should but it’s
[03:08] hard to tell.
[03:11] You want to hear something as you get around
it but you don’t want it to last too long,
[03:24] although that’s not so a big a deal.
[03:34] So you can see that the random position of
the particles and the random mist of the prebaked
[03:38] sounds kind of works usually - there’s a
few times where you’ll see a large chunk
[03:44] go past your screen and you’ll hear a sound
and you you’re like “oh my god, that was
[03:49] perfect!”
[03:50] But there's other times when you’ll go by
and not hear a sound and be like “well,
[03:55] OK” - maybe it didn’t hit me.
[03:59] So now I’m basically sitting still, this
really doesn’t happen in gameplay much so
[04:06] it’s not really a valid test - I suppose
it’s possible you could be still next to
[04:13] an explosion just by happenstance so we need
it to work in all cases.
[04:24] Now you can also tell that the debris clouds
are maybe a little bit loud compared to the
[04:29] explosion so the mixing and the fine tuning
is stuff that we’ll definitely do and I
[04:35] can do a demonstration of that right now.
[04:40] [runs demonstration]
[04:41] I think that when you are in the explosion
and then fly away, it lasts a little bit long,
[04:49] but sort of like this.
[04:58] This is a level of decoration, of polish that
it really adds to immersion in that prior
[05:06] we had these great explosions and you see
it happen and if you fly through it, you’re
[05:11] really not hearing much, you’re just sort
of like “there was the explosion but where
[05:15] is the rest of it - I see all of this noise,
this scattered noise, but I’m not really
[05:20] hearing it, I don’t really feel it’s affecting
the ship it all.”
[05:23] So this is just one of those tiny little details
that a surprising amount of work goes into
[05:30] it but it just adds one other little complete
fleshing out of the experience of dogfighting
[05:38] so that you a lot more visceral reaction to
the “yes, there used to be a ship there
[05:44] but now it’s a bunch of tiny bits and I
just ran through them all” - it’s something
[05:48] that we didn’t have before and when we put
it in hopefully it’ll help people have a
[05:53] little more joy out of the kill they just
did.
[05:57] JE: Thanks Jason, that’s really great - it’s
amazing the level of detail that goes into
[06:01] making these sounds - things people might
not normally think about, that’s the things
[06:06] that really make Star Citizen great, is that
level of detail and attention to detail that
[06:11] really sets it apart.
[06:13] Next up, we have a report from the DevOps
team.
[06:17] We’re going to talk about the various things
we’re working on and show a little bit about
[06:20] what happens behind the scenes to make Star
Citizen run.
[06:23] Mike Jones (MJ): Well the DevOps team is made
up of three main functions here as we’re
[06:31] configured in Austin.
[06:32] We have a Build Ops section of our team; LiveOps
and Publishing - and all of this makes what
[06:41] we call DevOps.
[06:42] They are small groups and we bundle it all
into the same overall term of DevOps.
[06:48] So, the Build Ops team is basically managing
and configuring the systems that we use to
[06:57] put all the builds together that are used
in the company and those are the builds that
[07:01] once they’ve passed QA will also make it
out to the PTU and also make it to a live
[07:07] service.
[07:08] So that’s a little bit of an overview of
the Build Ops.
[07:12] The Live Ops team does a lot of tools and
automation systems that we use in our Live
[07:20] Publishing operations.
[07:22] These are things that would automate the build
out of the services that we use on the PTU
[07:28] or the Live.
[07:29] They are also building the tools that we use
for internal development, this could be how
[07:35] we interact with our source code.
[07:38] This could be how we deliver builds internally
throughout the company to the QA testers and
[07:43] the engineers - pretty much everyone, and
then we also have the Publishing Team which
[07:48] does the actual publishing of the game.
[07:52] This is the fun part where we take what’s
been approved by QA and our leads throughout
[07:58] the company and we can- this team will publish
that throughout the process through PTU and
[08:06] eventually to the live service.
[08:08] This includes everything from taking the build
in it’s raw state, bundling it up, sending
[08:14] it out to the servers and then managing the
whole patch production process.
[08:18] Logan Nelson (LN): So I feel like DevOps is
kind of like Scotty, to make a Star Trek reference,
[08:24] you’ve got all these different crew on the
ship that all have their own different jobs
[08:28] and things like that - you obviously need
a medic to make sure that the crew members
[08:32] are healthy; you need the captain to drive
the ship - Chris Roberts is kind of the captain
[08:36] - you’ve got all these different roles but
if the ship doesn’t run, if it doesn’t
[08:40] move and the warp core is broken then it doesn’t
go anywhere and so I view us as the guys that
[08:48] are banging in the engine room hoping to make
sure the ship still runs.
[08:52] It’s a very critical part of the mission.
[08:55] MJ: So what’s happening in the current patching
system is the data that goes in that’s changed
[09:03] is compressed into these large PAK files that
are then bundled up and put into the patch.
[09:10] Well the problem with that is even if there
is only three files that changed in a 2 gig
[09:16] file size once they are recompressed, the
patcher sees this as one giant two gig file
[09:22] and you make these changes across a large
number of files, you wind up with a 20 gig
[09:27] patch.
[09:28] So what we’re doing is we’re breaking
all this apart so that now we can- at the
[09:34] patcher can actually look at only files that
have changed, not the big bundles of change.
[09:40] This way we’re hoping that we can deliver-
we’re really hoping for 10% of overall payload
[09:48] that we’re delivering now, so that would
be a 90% reduction in patch size.
[09:52] I think a lot of people are going to be happy
about this.
[09:55] I think it’s going to get a lot more people
into the PTU because they can get in faster,
[10:00] it’s going to help a lot of people out on
the edges in the extreme areas that have maybe
[10:05] low bandwidth or a data cap.
[10:08] It’s something that’s really difficult
for us because this actually goes down the
[10:14] core of how the game engine actually loads
files off the disk - so we’re making changes
[10:22] to the engine itself with the help of our
team in Germany because who of course, that’s
[10:27] what they do.
[10:29] This will allow us to be able to make use
of this new patching process and I’m expecting
[10:34] this- this is going to be a big deal for the
game, for all the players and it’s really
[10:39] going to help us on delivery times with all
these publishes.
[10:42] Andy Anderson (AA): All the tools we would
use to deploy things, manage configuration
[10:48] for them - they are interesting at the time,
there has been a whole lot of work, a whole
[10:55] lot of development.
[10:56] But the new tools that we’re rolling out
really make it easy for us to change things
[10:59] very quickly - and when I say quickly, I mean,
sometimes it’ll be waiting on these tools
[11:07] for even minutes just to change a line in
some server somewhere - now it really feels
[11:14] like we can just issue commands, the whole
deployment and they all obey - it’s really
[11:19] great.
[11:20] MJ: I think that a lot of what we do, it’s
so behind the scenes, most people never get
[11:27] a chance to see all the little nuts and bolts
of how all this works - what does it take
[11:31] to set up a server, what does it take to run
50, 100, 150 servers and keep them all running
[11:38] and keep them all talking and keep the network
security up - these are the type of things
[11:42] that we do and it’s really fulfilling work
because without this backend infrastructure
[11:49] that we’re building and the automation to
keep it going fast - I don’t think we would
[11:54] be able to move as fast as Chris wants us
to move and as fast as the game development
[11:59] is moving - and that’s a rewarding experience.
[12:02] JE: Thanks guys, that was great.
[12:05] This patch size reduction is really going
to make a big difference for all of our players
[12:09] and especially all of our developers who actually
have to patch the game multiple times a day
[12:14] - it’s going to make a big difference.
[12:15] Now, it’s back to you, Chris and Sandi.
[12:18] Back In The Studio
[12:19] CR: Thanks John.
[12:20] DevOps and LiveOps are definitely some of
the unsung heroes that make Star Citizen go
[12:25] - so thank you guys for your hard work.
[12:27] So when we last saw the Drake Herald on Ship
Shape back in May, it was entering the modelling
[12:31] phase - it’s come a long way since then,
it’s heading into it’s final art pass.
[12:35] We’ve actually been doing a lot of Drake
ships recently for some reason - I’m not
[12:38] sure why.
[12:39] SG: Yeah, and the Herald has been an interesting
one to watch - it has definitely has been
[12:41] one of our more divisive ships.
[12:43] CR: Yeah, maybe.
[12:45] We sat down with Josh and the rest of the
team to see what makes this courier run.
[12:50] Ship Shape: Herald
[12:52] Matthew Sherman (MS): With 2.6 we’re excited
to release the Drake Herald and it’s our
[12:58] first “info runner” ship.
[13:00] What that really is going to mean is you’re
going to have these big data banks on the
[13:04] outside of the ship.
[13:05] They’re going to have a lot of volume to
store intel assets.
[13:09] This’ll be stuff … locations of where
research data might be found, mining sites,
[13:16] salvage locations, a ship black box.
[13:20] Any of the intangible you can think of is
what we’re looking at with intel and what
[13:27] an info runner is going to be carrying around.
[13:28] Josh Coons (JC): So one thing when flying
around in the Herald that players are going
[13:33] to notice is that the ship is really, really
fast.
[13:36] It has, I think, the biggest engines per mass
on a ship so far.
[13:42] So if anybody knows what a “funny car”
is or a dragster, it’s very dragster.
[13:48] I would assume you’re going to see a lot
these in races.
[13:52] Like I said they’re hard to catch.
[13:57] Super fast.
[13:58] We’ve got it loaded as well.
[14:01] The players can expect lots and lots of counter
measures.
[14:07] So with all the ships - pretty much any asset
- this ship - when I read the specs, the design,
[14:14] the intent of the ship I usually break out
a few keywords and those will be my motif
[14:22] for the ship.
[14:23] For this ship I used “speed”, “science”,
“tech”, “evasion”.
[14:30] Also the motif of Drake had to be integrated
in when designing the ship.
[14:35] Which is bare bones, it’s wires exposed,
it’s trellis work, it’s … It’s not
[14:47] as fancy as some of your other branded ships.
[14:50] MS: Some of the redesign was in part to make
sure that we could get everything built to
[14:56] the metric standards that we need for how
big guns are, how big components are, how
[15:02] much space a player actually needs to walk
in and through the ship.
[15:08] One thing that always looks great in a lot
of sci-fi movies are these nice creepy, cramped
[15:15] corridors but unfortunately with a lot of
game logic it’s like “Well now we’ve
[15:20] got to make a little bit more space so your
average standing guy can get through and move
[15:26] around stuff.”
[15:27] So you can definitely see that with the interior
of the Herald where just the comm station
[15:33] in the back: the seat for that is going to
slide you in and out as you’re using the
[15:38] station to optimise the space as much as possible.
[15:41] But then also some of that back wall area
was restructured a bit to open up enough room
[15:47] to make sure that even if that seat’s extended
and someone is getting out of it another player
[15:53] or an NPC can walk behind that seat cleanly
without having to clip into the walls or bounce
[15:59] all over the place.
[16:00] Patrick Salerno (PS): When we start the design
process for the Vehicle Destruction System.
[16:05] We come in and I will talk with Art and Design.
[16:09] And we will work out in 2D and 3D how to tear
apart the ship.
[16:14] So to start that I would say, for example,
I would look under the model.
[16:18] Now damage comes in in layers, right?
[16:22] There’s a bunch of different features that
work together.
[16:26] There is the exterior hull of the ship.
[16:28] Underneath the exterior hull of the ship there
is an underlying damage skin and “gubbins”.
[16:35] Now the reason we have this is because now
we’ve added a damage shader that you’ve
[16:39] probably seen that creates a sort of warping
metal effect and you can punch through and
[16:43] you can see through the ship.
[16:45] That consists of the outer shell, the underlying
gubbins, and the actual geometry.
[16:49] Now all of these have to blend together at
the end of the day so part of my process is
[16:54] to check for all the different parts of geometry.
[16:57] I want to check for what are called “UVs”.
[16:59] UVs are what the texture’s placed on that
creates the actual visual of the asset.
[17:04] And then we also have another layer called
“UV2s” and these are what the damage shader
[17:08] actually works on.
[17:09] We can see that in the Editor here in the
top left corner.
[17:12] These would be the UV2s.
[17:14] This is what the Damage Map shader is actually
applied to.
[17:17] So when I shoot the ship there will be ripples
and distortions and metal bending.
[17:22] In conjunction with that I also have to create
little explosive charges around the ship.
[17:27] Now most of my work is preliminary.
[17:29] Basically I take the model and I set it up
for destruction.
[17:31] I’ll break off the pieces, I’ll make sure
all the checks and balances are there, and
[17:35] I will prep the work for other people.
[17:37] So for example the particle guys: I would
come up with them next and I would set up
[17:41] these things called “helpers”.
[17:42] And helpers are little green cubes.
[17:44] They have a direction - they point x, y and
z - and they are basically an explosive charge.
[17:48] Now what I did here is I set up a little group
of them and this group of them is just a bunch
[17:53] of different effects that generalised and
used on different ships.
[17:57] Explosions, sparks, fire, etc., etc.
[18:00] So when a piece takes 100% damage, it pops
off, the explosion activates and creates more
[18:06] shader damage.
[18:07] So its layers.
[18:08] You’re peppering the ship with your own
guns.
[18:11] You’re coming in.
[18:12] Parts are exploding off.
[18:13] It’s all melting and at the end of the day
you should have a pretty broken looking ship.
[18:18] So we’ll come in, I’ll start hiding pieces.
[18:20] So I’ll come over here …
[18:22] We’ve gone into Max and done initial ship
set up.
[18:25] We’ve checked that the mesh has UV2s.
[18:27] We’ve checked that the mesh has underlying
geometry for the shader to show underneath
[18:33] when bullet holes are taken into effect.
[18:36] The shader’s pretty cool with the damage
system in that the shader actually lets you
[18:39] poke holes in the meshes with what are called
“vertex colours”.
[18:43] So when I go into Max I go onto the mesh and
I start setting areas where there’s translucency,
[18:48] transparency, etc., etc. for damage to shoot
through.
[18:52] Not every area does need to be shot through
though.
[18:55] You need to make sure that you’re not wasting
extra geometry, costing performance, adding
[19:00] internal structure to places that don't’
need it.
[19:03] But you also want to make sure that every
piece blows off, has a neat effect, looks
[19:06] pretty cool when it’s flying off.
[19:08] So on, so forth.
[19:09] Now as you see some pieces are floating away,
some pieces are just sitting around.
[19:13] Those are called “vectors” and those are
little force pushes that are set in the XML.
[19:18] That tells the piece how hard it should fly
off the ship and in what direction.
[19:21] As I come in, I just keep going around the
ship looking for areas that are not working
[19:25] correctly.
[19:27] So this area, for example, is working correctly.
[19:29] We see we are getting bullet holes.
[19:31] The procedural system is working.
[19:32] UV2s are working.
[19:33] So on and so forth.
[19:35] But an area I know it doesn't really work
is up here.
[19:38] If we take a look we see we’re kind of getting
a bullet hole but nothing really going on
[19:41] there.
[19:42] Well that means I have to go back into Max
and figure out why.
[19:45] Maybe reproject the UV2s.
[19:47] So on and so forth.
[19:48] Like I was saying testing different weapon
types.
[19:52] Seeing how they affect the damage system.
[19:53] Testing different lighting conditions.
[19:54] Making sure all the pieces blow off.
[19:56] All that fun stuff.
[19:57] But pretty much, in closing that’s how we
put together some of the damage.
[20:02] It’s a mix between 3D Studio Max, XML and
the CryEngine.
[20:06] It’s a very iterative process: going back
and forth until it’s refined and then you
[20:10] hand it over to the professionals at the end
and they tweak the graphic … the VFXs, they
[20:17] tweak the explosions, health, damage and lighting.
[20:20] So that’s it, hope you enjoyed it.
[20:21] Back In The Studio
[20:22] CR: There you go.
[20:24] I’m pretty excited about the potential of
more non-combat focused speciality ships in
[20:29] Star Citizen.
[20:30] Especially as we move towards 3.0 and the
full persistent universe.
[20:32] SG: And it’s faster than an M50 in a straight
line.
[20:34] CR: That’s what I hear …
[20:35] SG: That’s what I’m happy about!
[20:36] CR: … that’s what I heard.
[20:37] In cruise mode!
[20:38] SG: While it’s been another week of development
it’s been another week of amazing fan content.
[20:44] CR: Yep.
[20:45] So let’s go to Tyler Witkin to present this
week’s Community Update.
[20:48] Community Update w/ Tyler Witkin
[20:57] Tyler Witkin (TW): Hey everyone, Tyler Witkin,
Community Manager in the Austin, Texas studio
[20:59] here to bring you this week’s Community
Update.
[21:02] Last week the origin M50 won the title of
Galactic Tourist Fan Favourite Flyer, landing
[21:07] in a spot in our pledge store for one week.
[21:09] Just a reminder that there’s only 24 hours
left on that sale.
[21:13] The battle continues this week this time between
the Super Hornet and the Vanguard Warden,
[21:17] look out for those results on the website
tomorrow.
[21:19] Tomorrow also brings a whole new issue of
Jump Point for subscribers, this time taking
[21:23] a look at the Anvil Terrapin, definitely worth
checking out.
[21:27] Also last Saturday we had a blast at the Austin
Bar Citizen and just as a reminder there’s
[21:32] another Bar Citizen this Saturday, this time
in Orlando, Florida.
[21:36] Find all the details at Tinyurl.com/floridabarcitizen
[21:40] This week’s RSI newsletter coming out tomorrow
features an extra special sneak peek from
[21:45] Evo Hertzig in our Frankfurt studio showcasing
some of the work done behind head stabilisation
[21:50] and FPS which you can watch in 60 frames per
second, so make sure to catch that in the
[21:54] newsletter tomorrow.
[21:56] Lastly it’s time for this week’s MVP award.
[21:59] A huge congratulations goes to J. Coren for
his detailed efforts in creating a travel
[22:03] guide for CitizenCon.
[22:05] This was actually brought to our attention
from our events manager and I can see why.
[22:09] So I highly encourage anybody who’s traveling
to CitizenCon this year, check out the guide.
[22:14] Congratulations again J. Coren, you’re this
week’s MVP.
[22:17] Thanks again everyone for all your support
and we’ll see you in the ‘Verse.
[22:19] Back to Studio
[22:20] SG: A few week’s ago we profiled some of
the dynamic sound effects as we walked through
[22:25] our crashed ship demo.
[22:26] CR: Yup so now we’re going to shift our
focus to music.
[22:30] Ross Treganza, Senior Sound Designer at Wilmslow
is going to give us an inside look at the
[22:35] new Music Logic System which I’m pretty
excited by.
[22:39] Behind the Scenes: Music Logic
[22:46] Ross Treganza(RT): Hey, I’m Ross.
[22:47] Sam Hall(SH): Hello there, I’m Sam.
[22:48] I’m going to describe how the interactive
music system works in Star Citizen.
[22:54] So from a code side, we’ve got a system
that will basically driven off music events.
[23:00] The way it works is, Ross can decide what
happens when the music events occur.
[23:04] So, if he wants the event when your ship gets
hit by a bullet, if he wants that to be really
[23:09] significant then he can decide how that happens
by using the data driven tools we have provided
[23:15] for him.
[23:16] RT: Whatever you’re doing we’re making
sure that the music system knows what you’re
[23:19] doing and is responding in a way that is appropriate
and cool and cinematic.
[23:23] So, I’ll show you some examples.
[23:26] *3 Ambient States*
[23:28] So, a really nice example we’re working
on right now is the ambient music.
[23:34] This is when there is not really any, you
know, combat or anything going on, we’re
[23:38] just exploring spaces and stuff.
[23:40] At the moment, we’re hearing some FPS music
so this is just… the engine knows we’re
[23:45] on foot, it’s playing sort of a slightly
synthy, slightly tense underscore that’s
[23:50] very ambient and as you move into the ship…
it will slowly transition to a more grand
[23:58] kind of exploration kind of feel to the music.
[24:01] And that’s based on the conditions we know,
we know you’re in the ship now and we know
[24:04] the engines are starting.
[24:06] We get out of the ship, if we’re in space
now, we wanted to EVA directly into space,
[24:12] it would work there as well.
[24:13] We’re going to take a cool little jump off
the platform here just cause it’s a great
[24:17] example.
[24:18] As you head towards the edge of the platform
and for a big leap out into space, you’ll
[24:23] hear the music transition.
[24:25] There we go, now we got this really cool ethereal
almost craft workesque ambient music, all
[24:38] of this by Pedro.
[24:41] See all this is based on conditions, Sam Hall
and I have been working on.
[24:48] We know we’re floating, we know we’re
not in any immediate danger so we got this
[24:52] beautiful exploratory quite sort of sense
of wonder music playing.
[24:58] As we come back down, we’ll land back on
the platform, we know again, no danger at
[25:02] the moment, just FPS, no threats we go to
FPS ambient music.
[25:08] *Flight Combat Music*
[25:09] So you can hear this system the most when
you’re dogfighting.
[25:14] Here we have a few pirates coming in, immediately
we’ll be getting some tension music, that’s
[25:21] based on the fact we have some unknown guys
approaching.
[25:24] So the system’s told us two guys have just
arrived, they seem to be a threat so that’s
[25:31] pushed up that tension parameter, now I’m
starting to fire on them and they’re returning
[25:36] fire.
[25:37] We’ll start to really see the system ramp
up now, the intensity number which is the
[25:42] real backbone of this system is going to start
to go crazy as your shield is getting hit,
[25:46] you’re hitting the guys, these numbers are
constantly being fed in.
[25:54] As that number rises, we move through way
out of the ambient area into the lower action,
[25:59] medium action and eventually high action which
is really crazy.
[26:03] You see if you eventually manage to take out
of these guys, you get a boost to the mood
[26:11] parameter which is coming from the Y axis,
here we go.
[26:13] We also get a little sting there that plays
whenever you kill one of the bad guys cause
[26:19] the engine has a chance to play a little victory
sting, ta da.
[26:22] Here we’ve had a boost that’s pushed us
into the hero state now so the music come
[26:28] and gone all heroic, we got big brass sections
and that will swell back down again.
[26:33] All these parameters seem to decay back down
to like a stasis.
[26:37] There we go, another guy taken out.
[26:41] *Flight Combat with our debug system*
[26:45] The code that Sam Hall… what he’s provided
me with which is incredibly valuable is all
[26:51] this debug information.
[26:53] This tells me everything that is going on
from… we have all the stings, that are momentary
[26:58] events that could happen this is things like
ships passing by, as you might have heard
[27:03] you sometimes get a little trumpety sting
that when a ship passes by to successfully
[27:10] hitting bad guys, your ship getting blown
up, all manner of parameters, those are all
[27:15] momentaries.
[27:16] Then we have the long term information, we
have the ship’s intensity that’s the big
[27:20] number that’s our backbone.
[27:21] The mood, all manner of other parameters we
use to feed into the system in any combination
[27:31] of ways.
[27:32] You can see we’re getting information in
about events here so we have… we’ve hit
[27:34] the shields of the ship, so that’s good,
that feeds into it.
[27:37] Yup, the player’s ship’s been hit in turn,
this constant feeding of information that’s
[27:43] what I can rely on to work to tweak the numbers
in the music logic system to make sure, you
[27:51] know, the system doesn’t go too crazy.
[27:52] Go up in high action too fast, things like
that.
[27:56] Never saw that ship destroyed, that gives
a cool momentary sting.
[28:02] All of this although we’re seeing this in
the flight mode at the moment, we’re working
[28:09] on it for 2.6 to make sure that these numbers
translate into the FPS game mode and eventually
[28:15] also just in EVA combat as well.
[28:18] So no matter what you’re doing this stuff
is always appropriate and the music will shift
[28:23] to suit the EVA or the FPS environment.
[28:27] We have a theoretical example just to show
you using some console commands here.
[28:32] We can simulate what it would be like when
we have EVA combat working in conjunction
[28:38] with the music logic.
[28:39] So, I’ll throw in some numbers here and
just like when we saw with the pirates attacking
[28:50] the ship when the music logic was going nuts,
I’ll be simulating the player getting attacked
[28:56] or attacking the enemy and we’ll see that
the EVA music, that gentle kind of craft workesque
[29:03] music, so that’s ramping up in this cool
kind of coral way.
[29:07] All of this again, this is all Pedro’s beautiful
music.
[29:19] Just like with the flight combat music, we
have heroic EVA music, we have grim EVA music,
[29:25] exactly the same set up but just with a whole
different mood of music and a different set
[29:30] of music loops.
[29:33] The same thing here with FPS, this is something
we’ll be seeing very soon, same system again
[29:38] but this time we’re getting hit by… it
could be pirates attacking us and we’re
[29:42] on foot so the music is a bit more kind of
personal, a bit more synthy and dark.
[29:48] You get that kind of grand space music for
the space flight, we wanted to go a little
[29:51] more intense and synthetic feel for the FPS.
[29:56] So again you hear that music swelling and
falling, this will be a constant background
[30:04] between all these systems and as you move
through different parts of the galaxy the
[30:10] whole overall suite of music will move from
one set to another but there will an understandable
[30:14] language across all of it you’ll get used
to.
[30:20] This will be on it’s feet and working forever,
it’s a system that is self managing and
[30:25] autonomous really and will just work which
is awesome.
[30:28] So, that’s music logic.
[30:30] It’s what Sam Hall and I have been building
in DataForge, we’re really, really proud
[30:35] of how far it’s come.
[30:37] It’s going to be available in 2.6 and that’ll
be just the beginning, it’s just going to
[30:41] get bigger and bigger and grander and grander.
[30:44] Hope you enjoyed it.
[30:46] Outro
[30:47] SG: Thanks very much Ross.
[30:48] That is super cool and is going to be an exciting
addition to the game and I'm really looking
[30:52] forward to that.
[30:53] CR: Yup.
[30:54] So that Music Logic System’s actually an
evolution of the dynamic music system that
[30:57] I first created for Wing Commander called
Origin FX.
[31:00] Obviously it’s a lot more powerful and robust,
but very cool.
[31:04] SG: It definitely gives a player a more personalised
experience and everybody's going to feel like
[31:08] they’re in their own movie or something,
very cool.
[31:10] CR: Which is the point of it.
[31:11] SG: There you go.
[31:12] Well that's it for todays show, check out
Reverse the ‘Verse tomorrow for your chance
[31:15] to ask the Austin team questions about today's
features as well as some exclusive videos.
[31:19] ALso Ben Lesnick will be hosting a live playthrough
of Wing Commander 2 to celebrate its 25th
[31:24] anniversary of release.
[31:25] CR: Wow.
[31:26] SG: That’ll be on Saturday the 17th so tune
in if you can.
[31:29] CR: As always, a big thank you to our subscribers
whose monthly contributions help us produce
[31:34] videos like this.
[31:35] SG: And thank you as always to all of our
backers for the opportunity to be here in
[31:39] the first place.
[31:40] CR: Yeah, thank you guys.
[31:41] SG: Next week we’ll head out to our Frankfurt
office and make sure to tune in for that one.
[31:45] CR: Yes so that’s the show for this week.
[31:48] Thank you all for watching and we’ll see
you.
[31:50] Both: Around
[32:29] the ‘Verse.

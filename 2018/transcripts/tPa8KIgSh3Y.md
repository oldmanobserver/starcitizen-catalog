# Squadron 42: Around the Verse - Scanners Aglow, Torpedoes in Tow

**Video:** https://www.youtube.com/watch?v=tPa8KIgSh3Y
**Date:** 2018-05-31
**Duration:** 26:57

## Transcript

[00:13] hello and welcome to another episode of
[00:15] around the verse I'm eric kieron davis
[00:17] and I'm Dave haddock this week we're
[00:19] going to take a look at the design and
[00:21] implementation of ship scanning and
[00:23] radar systems and go to jerod for some
[00:26] details on the Aegis Eclipse that's
[00:28] right
[00:28] but first let's check in with Phil
[00:29] Miller for our monthly squadron 42
[00:30] project update thanks guys hello and
[00:34] welcome to another squadron 42 update
[00:36] the weapon system is be receiving an
[00:38] overhaul and right now a lot of
[00:40] attention is being put on recoil weapon
[00:42] field is of course incredibly important
[00:44] in any FPS experience and squadron 42
[00:46] features a lot of unforeseen sequences
[00:48] where this new recoil will be seen a lot
[00:50] so a ton of work goes into a seemingly
[00:53] small part of the overall package a lot
[00:55] of everyday players may even take for
[00:56] granted this started out as an animation
[00:59] in Maher focusing on the bearing p8
[01:01] assault rifle as a starting point for
[01:03] the visual golfer animation the
[01:05] variations of random surrounded to each
[01:07] shot the amount the weapon kicks back
[01:09] the horizontal and vertical movements of
[01:11] the weapon this new system allows us to
[01:13] define a base recoil for each weapon but
[01:16] the player effects it depending on their
[01:17] position their state under the stats as
[01:20] you can see a lot more customization
[01:21] goes into this than you might think
[01:24] ship AI continues to come along with
[01:26] recent focus being put on smoothing out
[01:28] takeoffs and landings on the interest
[01:29] drink some can flight formations to make
[01:31] designers lives a little bit easier a
[01:33] lot of progress has been made in this
[01:35] last area as we termined just how AI
[01:37] prioritizes targets based on threat
[01:39] level chance and personal character bias
[01:42] the ship AI teams also continue to
[01:44] iterate on fighter and gunship behavior
[01:46] with constant feedback from QA along
[01:49] with a lot of back-end improvements
[01:51] helping to steadily improve combat
[01:52] in general also in the works is Odin
[01:55] systems space scaping part of our recent
[01:57] focus and s42 development has been
[01:59] working on our space scene overworld
[02:01] or as we call it within the project our
[02:04] space scape through development on the
[02:07] coil the engineers have been busy
[02:08] building the amazing gas cloud tech but
[02:11] it isn't just confined to the mysterious
[02:12] coil it's also being used
[02:14] throughout the campaign to create nebula
[02:15] another pockets of interest in space you
[02:18] can use this as a tool to drive the
[02:19] narrative forward in particular areas
[02:21] build areas in space much like a
[02:23] conventional interior level controlling
[02:26] color density and the style of
[02:28] simulation could add a huge amount of
[02:29] potential variety to the space cape from
[02:32] angry aggressive simulations let the
[02:34] coil to softer more serene bodies of gas
[02:37] just floating in space this gives both
[02:39] art and design a great math scope to
[02:40] make our space scenes look amazing and
[02:42] convey a message or mood to the player
[02:45] from a design standpoint we enter strike
[02:48] advance between plausibility reality and
[02:50] cool looking visuals this tech once
[02:53] perfected here in squadron 42 will also
[02:55] be applied to various systems in star
[02:56] citizen's PU the proper team continues
[02:59] to turn our control room sets for chem
[03:01] line with even more computers screens
[03:03] and other monitoring gauges of filling
[03:04] other pieces to really sell the abandon
[03:07] vibe we have done a damage pass screen
[03:08] damaged variants of each asset adding
[03:11] flexibility and reused to the same
[03:13] worker started on scrap house for an
[03:15] upcoming location we can't go into too
[03:17] many details but we are in early days on
[03:19] building out the texture set and
[03:21] geometry visual targets are now being
[03:23] built up on chem line along with several
[03:24] of the s 42 locations the full concept
[03:28] our support to provide direction for the
[03:29] art and design team ship emergency and
[03:32] distress states are being iterated on
[03:33] and polished with critically damaged
[03:35] ships still in space environments now
[03:37] looking suitably being up this is
[03:40] separate to the fully destroyed versions
[03:41] that have previously been seen crashed
[03:43] on planet
[03:55] work continues on the bengal carry as
[03:57] well the new locations being built out
[03:59] in their final states these include a
[04:01] brick that although visually different
[04:03] as you would expect from a different
[04:04] manufacturer still echoes the
[04:06] functionality of the idris because at
[04:09] the end of the day a brick is a break
[04:10] the animation team have been working
[04:12] towards getting variations into the NPC
[04:14] combat says alongside the train nursery
[04:18] sets we have been developing out the
[04:19] visual language for the untrained NPCs
[04:21] the trained combatants will be confident
[04:23] in their actions
[04:24] decisive and a much more difficult
[04:26] archetype to kill the untrained sets
[04:29] will be more skittish and wild
[04:30] interactions with this in mind we've
[04:33] been paying particular focus to how the
[04:34] different groups interact with the cover
[04:36] objects as an example of this the Train
[04:38] military sets will switch hands when
[04:40] entering the left side of cover
[04:41] whereas untrained NPCs will remain
[04:43] right-handed this allows the train set
[04:46] to be more concealed when stepping down
[04:48] firing versus the more wild and
[04:49] disciplined and train set there are also
[04:52] stark differences in the fare extensor
[04:53] said the train military will take versus
[04:55] their civilian counterparts details like
[04:58] these what we aim to deliver to give a
[04:59] fully fleshed out variety and
[05:01] believability to both friendly and enemy
[05:03] assets for squadron 42 and star citizen
[05:05] we're currently still in an
[05:07] implementation stages we continue to
[05:09] expand the AI combat behaviour as we
[05:11] lock down all the technical details more
[05:13] will take another animation pass to
[05:15] really tighten up the visuals on all the
[05:16] combat assets the character art team
[05:18] occurring additional hero costumes for
[05:20] our major characters such as graves
[05:21] played by John rhys-davies a lot of
[05:23] effort goes into the styling the best 42
[05:25] scary to infer their personality and
[05:27] history graves Jackie's from his old
[05:30] days when he was parked hundred eighteen
[05:31] squadron button-up shirt work pants and
[05:33] heavy boots paying the picture of a
[05:35] professional manager a security who
[05:37] works on a rugged mining base under us
[05:40] have even added an extra little weight
[05:41] to this once trimmed Navy pilot I know
[05:43] that feeling to emphasize his advancing
[05:46] years so that's it for this month we'll
[05:48] see you in June for another s42 update
[05:50] now back to you in the studio thanks
[05:53] Phil an advantage of developing squadron
[05:55] 42 alongside star citizen is that many
[05:58] features and mechanic
[06:00] can be shared which we saw with a few of
[06:02] the items covered in this update that's
[06:04] right and one of the features that we'll
[06:06] be factoring into both games very soon
[06:07] are the shipboard scanning and radar
[06:09] systems yes a lot of the early focus for
[06:12] these mechanics relates to the misc
[06:13] prospector and mining with that feature
[06:15] right around the corner in the PU but
[06:17] eventually all ships will have scanning
[06:19] functionality including those
[06:21] highlighted in squadron 42 let's learn
[06:24] more from the designers themselves in
[06:25] this week's feature
[06:31] today we're going to be talking about
[06:32] some improvements we've made to the
[06:34] radar system regarding two adjoining
[06:37] systems specifically our ping system and
[06:41] our scanning system right now in the
[06:43] game you can see active targets that are
[06:46] within what we're calling our passive
[06:49] radar range so that's your normal radar
[06:51] what we wanted to do though is because
[06:54] the distances are so vast I want to give
[06:57] you a way to get some info about things
[07:00] that weren't within your passive radar
[07:02] range
[07:02] one way we incorporated that is by
[07:05] introducing a ping mechanic so when you
[07:08] do a ping it sends out a wave that is
[07:12] larger than your your passive radar
[07:15] radius and it returns to you the signal
[07:19] values of items that are outside of that
[07:23] range and within this larger ping range
[07:26] and these are you'll I'm sure discovered
[07:29] that whether they're friendly or not by
[07:31] whether they come they turn and fire on
[07:33] you or whether it's a stationary or
[07:35] whether you're able to interact with
[07:36] them and then as you flap to them
[07:38] holding your cursor over them will
[07:41] eventually give you some information
[07:43] that's relevant that's important about
[07:45] that ship so things like a ship owner
[07:48] faction what ship type it is then we're
[07:50] going to be expanding that gameplay
[07:52] after this this first year of of
[07:55] implication so we can do things like HBO
[07:59] scan like the crew manifests how many
[08:01] how many crew members are on board
[08:02] what cargo do they have are they worth
[08:04] commandeering yeah John take them out
[08:06] take their cargo are they some kind of
[08:10] are the affection based you know do I
[08:13] really want to attack them and upset a
[08:15] particular faction so we can make
[08:17] decisions about that the cool thing is
[08:19] the way that we design this whole
[08:21] infrastructure is if we have a vehicle
[08:23] we could provide four bits of surface
[08:26] information on that it's name its health
[08:29] its status and it's faction and then as
[08:33] you scan further into the detailed scan
[08:36] you can uncover the crew
[08:37] there's our health you can uncover sub
[08:40] items you can uncover car
[08:42] go and you can build it in this big
[08:45] manifest and then with this manifest you
[08:49] could store it for later and maybe in
[08:51] the future who knows maybe for
[08:52] information running you could package
[08:55] this information up and then sell it if
[08:57] you'd like and the that idea is that you
[09:00] could send out a big wave of history
[09:04] energy game game logic it sends out a
[09:07] big pulse and you light it you light up
[09:09] like a Christmas ball so it's kind of a
[09:11] dangerous thing to do it's not doing
[09:14] she's radar but it's dangerous to use
[09:15] the ping because you've now shown the
[09:17] world where you are it's also good for
[09:20] stealth gameplay since everything is
[09:23] based on how much power you're using and
[09:26] how much Energy's getting turned to your
[09:29] we call heat or infrared if you throttle
[09:34] your settings down so they're not
[09:36] consuming its much power and they're not
[09:38] generating as much heat your radar
[09:40] signature goes down because it goes down
[09:43] people aren't able to detect you at
[09:47] greater distances so if you turn it all
[09:51] the way down you could go under the
[09:53] cover of people's radar but you're
[09:55] limiting yourself you know you're
[09:57] throttling all your power down your
[09:58] shields might be down your weapons might
[10:00] not be a powerful so if someone sends
[10:02] out that ping pulse wave and detects you
[10:04] they could go immediately fly over there
[10:07] and start dropping all sorts of lasers
[10:10] on you before you have a chance however
[10:12] since he lit up like light bulb you know
[10:14] hey there's someone out there I don't
[10:17] know if he found me but he's searching
[10:20] so it gives that interesting gameplay
[10:23] where the predator is searching for the
[10:27] prey and the prey doesn't know if he
[10:28] should run or fight type of deal
[10:30] scanning may not be the friendliest
[10:32] section in the world and so as you do go
[10:35] up to a ship and then you scan them you
[10:37] know the entire crew should be alerted
[10:38] hey you're being actively scanned so
[10:41] what you do from that point can be up to
[10:43] you is this an aggressive aggressive
[10:45] action are they friendly you know why
[10:48] the heck are they scanning me all right
[10:49] if they're looking over my cargo then we
[10:52] can incorporate gameplay where you get
[10:54] informed of that and then
[10:56] you can you can take evasive action you
[10:59] can counter-attack them in the PU radar
[11:02] and scanning and also use remaining
[11:04] right now radar finds only minor bull
[11:09] rocks we added we artificially added
[11:12] some non my noble rocks in the mix just
[11:15] to create a bit of element of do I find
[11:19] it do I not find it but this is only for
[11:21] longer distance as you get closer the
[11:24] radar will be able to better understand
[11:26] if it's a minor ball or not my noble and
[11:28] to eliminate the ones that are not
[11:29] mindful you don't have to scan it until
[11:32] you get close so you already know you
[11:34] have a minor bull rock when you're
[11:36] pretty much in visual range and at that
[11:40] point is just about finding out how good
[11:42] over my nipple rock is is is there
[11:44] something super valuable in there or is
[11:46] it just something that you work for one
[11:47] hour and get just pennies for it radar
[11:49] was mainly used to find in order to find
[11:53] objects in the universe whether they're
[11:56] hidden thing that players have to find
[11:58] or ship or a wreck or something like
[12:00] this and scanning is the finding of a
[12:03] finding of details of what that object
[12:05] is made of what's what the components
[12:08] are so you'd be a ping find out where
[12:10] general generally where things are if I
[12:12] have to them as you get close enough to
[12:13] them so that they're in your passive
[12:15] radar range and so they're now active
[12:18] entities if you fly up to them close
[12:19] enough in this case we have the
[12:21] prospector working this way you can go
[12:23] up to it you'll switch to your your
[12:25] mining UI and then as you hover your
[12:28] cursor your flight cursor over the the
[12:33] this mining resource target over time
[12:35] there'll be a little indicator that
[12:37] shows you what percentage of the that
[12:40] scanning abilities at and as you
[12:44] progress through the scanning indicator
[12:45] you know you eventually give you exactly
[12:48] what the resources available in that
[12:51] mining entity are so that'll give you an
[12:54] idea of hey this is worth mining or you
[12:56] know what this isn't exactly what I was
[12:58] looking for let's go find other targets
[12:59] when you get to that point do another
[13:02] ping get some more general information
[13:03] about where things around you and then
[13:05] start heading off toward those targets I
[13:07] know the mission guys are really excited
[13:10] they want to start using this post 3 2
[13:12] because 3 2 is mostly gonna is all gonna
[13:15] focus on the mining aspect but after
[13:19] that we want to start opening it up to
[13:20] all the ships other than the prospector
[13:22] to use it than the general scanning so
[13:25] you can start scanning whatever you want
[13:27] really cool stuff guys as you can see
[13:30] the functionality currently being
[13:32] fine-tuned for mining will have various
[13:34] uses when it's applied to different
[13:35] ships and situations yeah and in
[13:38] squadron 42 radar is factoring into
[13:40] missions and situations in fun ways
[13:42] adding realism and elements of flight
[13:44] simulation to the proceeding yeah and
[13:45] while we're on the subject of radar a
[13:47] certain ship plan for alpha 3.2 release
[13:50] is particularly adept at flying under it
[13:53] that's right let's go to Jared right now
[13:55] for a new installment of shipshape
[13:57] exploring these stealthy Aegis eclipses
[14:02] greetings citizens and welcome to
[14:05] another edition of shipshape we take a
[14:07] look at what's on the ship pipeline
[14:08] who's working on what provide interviews
[14:11] with developers and continue with our
[14:13] brand-new bi-weekly cadence that means
[14:15] smaller but more frequent updates
[14:18] I'm your host Content Manager Jared
[14:20] Huckaby now on the show this week we'll
[14:22] be sitting down with some of the team
[14:24] members working to bring the stealthy
[14:26] Aegis Eclipse to life in the upcoming
[14:28] star citizen alpha 3.2 let's check in on
[14:31] the progress of this torpedo delivering
[14:33] Dynamo now
[14:36] the inspiration for the Eclipse has been
[14:39] primarily things like the b-2 stealth
[14:41] bomber it's you know a flying wing it's
[14:46] designed to be this like stealthy
[14:48] secretive capital ship killer its role
[14:51] is to kind of fly into the battle fire
[14:55] some giant torpedoes hopefully try and
[14:57] take down the other capital ships and
[14:58] then fly away intact it's based on age
[15:01] there's a lot more angles not more you
[15:04] know Phillips and soft curbs look at
[15:07] things like the saber Raven and tried to
[15:09] kind of compliment things like the holes
[15:11] in the wings so you can see the same
[15:13] signal designs implemented within the
[15:15] Eclipse there's just a single-seat
[15:18] spaceship it's just a cockpit and
[15:21] exterior and a lot of torpedo Bay the
[15:25] interior the cockpits very utilitarian
[15:27] it's has a lot of quite heavy technical
[15:34] cladding almost when you get inside this
[15:37] thing you feel like you're kind of a
[15:40] small part of this like you know really
[15:43] complicated bomber really climbing is
[15:48] these things just almost a bit of a
[15:50] challenge in itself I think when you
[15:54] actually get inside the the cockpit for
[15:55] the Eclipse you feel very encompassed by
[15:59] it when the canopy closes around you and
[16:01] the computers come towards you you feel
[16:03] like you're sat in a bomber the Eclipse
[16:05] has three different modes essentially
[16:07] it's going to have a that there's not
[16:09] code support for it yes but the
[16:10] intention will be there it has obviously
[16:12] an atmospheric mode where all the wings
[16:14] fold back and the fins fold up and it
[16:16] kind of transforms and this like really
[16:17] quite agile shape and the the space mode
[16:22] this is the kind of the typical
[16:24] triangular shape of the b2 that you'd
[16:26] normally see but also has quite
[16:28] interesting landing mode as well when
[16:30] the Eclipse comes into land all the
[16:32] wings fold upwards and when the canopy
[16:36] opens it kind of forms a shape which is
[16:38] quite almost beat like if you look at
[16:40] the shape of the b2 airplane it's kind
[16:43] of based around like birds of prey it's
[16:46] based upon a Falcon and
[16:48] you know if you look at the side profile
[16:50] has quite an avian feel to it so we kind
[16:53] of try to kind of replicate that on the
[16:55] Eclipse to a degree you know it's why
[16:57] there's two to three Gladius is it's
[16:58] it's a wide ship I think as why this is
[17:01] this long if not wider so yeah I think
[17:05] if it's flying up heads and you've got a
[17:07] keen eye you'll definitely see it but I
[17:09] think but by the by the time that you've
[17:11] seen it it'll be too late I already like
[17:13] to go
[17:13] I think primarily when I was building
[17:15] Eclipse I wanted to try and focus upon
[17:17] that animations I wanted all of the
[17:20] shifters feel very technically intricate
[17:23] so from the way that the cockpit opens
[17:26] and a lot of folds out to the way the
[17:29] torpedo Bay so that is payload if you
[17:32] look at the way the top it laid like it
[17:34] delivers missiles and has this kind of
[17:36] almost cylindrical a delivery system
[17:39] inside it which is quite quite
[17:42] complicated so little torpedoes
[17:44] themselves I get lowered just below the
[17:46] ship by this quite complicated
[17:48] mechanical arm and once I blow the ship
[17:52] dead and they have like a forward firing
[17:54] motion so I know this is still probably
[17:58] the biggest issues that we have with
[17:59] with the Eclipse at the moment is that
[18:01] this is a new kind of torpedo launcher
[18:04] like in terms of animation on how it
[18:08] works and this is something that wasn't
[18:10] exactly how it was in the game before I
[18:12] cross a generator it's basically one
[18:16] torpedo on each gun sure it's like
[18:18] several torpedoes like this whereas for
[18:21] this one it's a torpedo launcher and
[18:24] basically it can choose the torpedo so
[18:25] on but it's in the middle hopefully in
[18:28] the future you should be able to equip
[18:30] different uh feeders and choose the
[18:33] order where you're firing the torpedo
[18:35] like you could get regular torpedo in
[18:37] the middle like a different uh video on
[18:39] the left on a different of it on the
[18:41] right and say after us firing this Opie
[18:44] do you want where the left also right
[18:47] whereas usually it would be choppy do
[18:51] one torpedo two torpedoes way so but
[18:53] maybe you could say oh yeah I want top
[18:55] either one first and then torpedoes
[18:57] sweet but not torpedo too soon so even
[19:00] if it seems like a relatively simple
[19:01] ship
[19:02] as a torpedo launcher is a bit more
[19:05] complicated and other systems before
[19:07] landing gear is quite intricate too so
[19:09] when this thing moves and transforms it
[19:10] feels just just very technical compared
[19:13] some of the other ships but if you think
[19:14] if you look at it when it's transforming
[19:16] the entire thing just feels alive
[19:18] so it's got this cool bells and whistles
[19:20] and that the fans will see this and
[19:22] think I know too cool piece of kit like
[19:23] how long moves like it's you know it's
[19:25] gonna feel about us
[19:26] that's very minimal armaments in terms
[19:29] of the baikonur it uses the entire
[19:32] ship's basically just three giant
[19:33] torpedoes I think it uses size nine
[19:36] torpedoes so it's quite big missiles the
[19:38] same the same size is what's the use on
[19:41] the retaliate err so if you just look at
[19:43] the size of the torpedoes compares the
[19:45] ship itself they're almost as long as
[19:47] the spaceship is and it's got three of
[19:49] these so it's going to be and quite a
[19:51] force to be reckoned with the whole
[19:53] point in this thing is that it's
[19:54] probably part of a convoy so when you're
[19:57] flying along you'll have your escort
[19:58] with you you know and the fighters
[19:59] around to protect you and you have one
[20:01] sole mission which is to you know fly to
[20:03] your destination and just deliver the
[20:07] sidelines torpedos to just wreak maximum
[20:09] havoc you need your friends around you
[20:11] Raley's giving you this kind of the
[20:12] ample protection to make sure that for
[20:15] the fighters trying trying to destroy
[20:17] your ship that you have peoples in fendi
[20:19] so I kind of almost welcomes a team
[20:23] plate element to it because you need
[20:25] this protection to be able to deliver
[20:27] the missiles I think if you just flew
[20:28] this the ship to a capital ship on your
[20:31] own and had you know say this cap say
[20:32] the address house fighters around it and
[20:35] they see you you wouldn't send the
[20:36] chance if you look at the exterior of
[20:38] the ship it's quite dark it's all very
[20:40] kind of you know matte paints this very
[20:43] kind of dark color schemes but he wants
[20:46] to kind of contrast this with having the
[20:48] interior of the ship having this quite
[20:51] bright white paint anywhere the ship
[20:53] opens up really is why since I'd
[20:55] obviously scoot in the cockpit because
[20:57] if you're flying through space the giant
[21:00] bright white cockpit then people are
[21:01] going to see you coming a couple of
[21:03] ballistic weapons it has a couple of
[21:05] smaller
[21:05] I think size 2 or size 3 guns but
[21:09] primarily the big focus of the ship is
[21:11] just the torpedoes the fact that it has
[21:14] three size 9 torpedo
[21:16] kind of speaks for itself so you you
[21:18] when you buy this and you know what
[21:20] you're getting into
[21:21] there's there's no you know
[21:23] misconceptions of what this thing is
[21:24] it's a bummer straight and simple it's
[21:27] going to wreak havoc destroy everything
[21:28] we made sure that as he eclipse could
[21:31] fit in an iOS as well so this is this is
[21:35] an important one so this is something if
[21:37] you have the wings deployed you won't be
[21:40] able to go in a nice way so you need to
[21:42] get into the learning mode which
[21:44] basically will collapse society as a
[21:47] wing tips we will be like this learning
[21:51] gear cause there and basically you can
[21:53] still fly on land in your night eyes so
[21:56] this is important as well obviously
[21:57] because if you get an address you can
[22:01] use it as a mobile where the base go
[22:03] somewhere then deploy some eclipse do
[22:07] some reconnaissance work out do some
[22:08] attacks obviously use you see it wise to
[22:11] keep keeping me at bay
[22:14] I think the flying wing design is pretty
[22:17] interesting as well in terms of shape on
[22:19] in terms of maneuverability it should be
[22:22] a bit different since it's wholly flat
[22:24] as a design in the atmosphere I won't
[22:28] behave like so Savior for example
[22:29] awesome some ships that are relatively
[22:31] is the same size
[22:32] I guess Eclipse is a stealth bomber that
[22:35] will be really useful for cope software
[22:38] I think especially because it can act
[22:40] both as a reconnaissance ship because
[22:43] it's Elsie it's relatively fast as well
[22:47] for a bomba on if needed can't destroy
[22:49] something but it's can also be used as a
[22:53] support hole like if you have some
[22:55] fighters that are already there like
[22:57] trying to harass or destroy a big ship
[22:59] like your stuffer or a claim where you
[23:01] don't come in for your torpedoes do
[23:04] massive damage and come back if you Liam
[23:07] then do the same again having these
[23:11] least niche roles really adds to the
[23:13] gameplay I think if you had you know
[23:15] heavy ship could do every type of you
[23:17] know combat and can mine and
[23:20] you know who could do everything build
[23:21] bases then suddenly end up with a lot of
[23:24] ships which basically just exactly the
[23:25] same with with no head of defining
[23:27] characteristics so I think it's
[23:29] important to have a range of vehicles
[23:33] which deliver different types of user
[23:35] experiences and also things that kind of
[23:37] encourage teamwork and collaboration you
[23:41] know it's kind of going pollen mission
[23:42] with your friends you know when
[23:43] someone's in trouble or you you've seen
[23:45] that there's some kind of capital ship
[23:46] in the system that you need to take care
[23:48] of be nothing to get your friends
[23:49] together and say look guys we need to
[23:51] try to take this down it's it's just a
[23:53] fun thing to do
[23:59] once upon a time I was falling in love
[24:02] now I'm only getting torpedos shut it my
[24:05] javelin there's nothing I can do it's a
[24:08] total eclipse of my ship no worry about
[24:13] YouTube Content ID mention that one huh
[24:15] the aegis eclipse is making its way
[24:17] towards release into the upcoming star
[24:19] citizen alpha 3.2 as for other ships in
[24:22] the pipeline we can see that the anvil
[24:24] hurricane the vanduul blade and the
[24:26] aegis avenger variants are all in the
[24:28] flight prep phase getting ready to join
[24:30] the Eclipse while the origin 600 eye is
[24:33] currently in final art review but don't
[24:35] worry I hear they're our designers and
[24:37] engineers already getting ahead on their
[24:39] flight prep work to make it scheduled
[24:40] 3.2 release with these five different
[24:43] ships coming online at the end of June
[24:45] they're pretty much the focus of most of
[24:47] the ship art and tech teams at the
[24:48] moment but once they make it into your
[24:50] hands a brand new wave of ships will
[24:52] begin making their way towards release
[24:54] in subsequent patches we'll have more
[24:56] about those ships in the coming months
[24:59] for shipshape I'm content manager Jared
[25:01] Huckaby we'll see in about two weeks
[25:03] everybody thanks Jared that ship will
[25:06] make a deadly addition to many fleets
[25:08] out there once 3.2 hits the PU and for
[25:11] those of you who would prefer an
[25:12] in-your-face dogfighting to sneaky
[25:14] surprises we still have a contest for
[25:16] arena commander and star marine
[25:17] aficionado z' you can make your own
[25:19] tutorial video for either of those modes
[25:21] and compete to win prizes and have your
[25:23] work up on the official star citizen
[25:24] website yes and then tune in to reverse
[25:26] the verse live on Twitch tomorrow at
[25:28] noon for our monthly subscriber townhall
[25:31] episode Jared will be back with Kirk
[25:33] Tomei and mark abent answering
[25:35] subscriber questions following up on
[25:37] today's scanning features so make sure
[25:38] you get your questions in yes and make
[25:39] sure you check out this week's calling
[25:41] all devs if you missed it on Monday for
[25:43] answers to questions about dirty ships
[25:45] UI updates and more thanks of course to
[25:48] all our subscribers for sponsoring the
[25:50] shows and thank you to all of our
[25:52] backers for making the development of
[25:54] squadron 42 and star citizen a reality
[25:56] until next time we'll see you around the
[25:59] verse
[26:01] [Music]
[26:36] thanks for watching for the latest and
[26:38] greatest in star citizen squadron 42 you
[26:40] can subscribe to our Channel or you can
[26:42] check out some of the other shows and
[26:44] you can also head to our website at
[26:48] www.uvu.edu/library

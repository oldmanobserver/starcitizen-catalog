# Star Citizen: Around the Verse 3.9 - UK

**Video:** https://www.youtube.com/watch?v=50Jk-mQ9_pw
**Date:** 2016-09-29
**Duration:** 29:44

## Transcript

[00:10] Closed Captioning provided by the Imperial
News Network.
[00:16] Chris Roberts (CR): Hello, thanks for joining
us here at CIG for another Around the ‘Verse,
[00:19] the weekly look behind the scenes at everything
Star Citizen.
[00:21] I’m Chris Roberts.
[00:23] Sandi Gardiner (SG): And I’m Sandi Gardiner.
[00:24] For those of you keeping track, we’re just
a little over a week away from this years
[00:27] CitizenCon.
[00:28] CR: Yes we are.
[00:29] So as we continue working towards the big
event, team members from every studio will
[00:33] be arriving here in L.A. next week.
[00:34] It’s going to be a really full house, hard
to believe how much we’ve grown since last
[00:39] CitizenCon here in L.A.
[00:40] SG: Yeah it is, and to find out all the latest
details for the event make sure you check
[00:44] out the RSI site.
[00:45] We have a post that outlines everything from
where to watch the livestream online to trophies,
[00:49] to what backers attending in person can expect.
[00:52] CR: Yup, absolutely so check that out.
[00:54] Every department and team have been working
really hard to make sure this year's CitizenCon
[00:58] is a memorable one.
[00:59] SG: Very cool and of course you’ll have
to wait till the livestream next week to see,
[01:03] but don’t worry, with a whole universe being
created there’s still plenty left to share.
[01:08] CR: There is always lots to share.
[01:10] So right now let's go visit the U.K. to get
an update on some of the latest efforts underway
[01:15] at Foundry 42.
[01:16] Studio Update
[01:17] Mici Oliver (MO): Hi everyone and welcome
back to the UK.
[01:19] I’m Mici Oliver, QA Tester to give you this
week’s studio update.
[01:24] After a successful show at Gamescom, the team
have been working really hard on the 2.6 content
[01:29] and also some exciting new things to show
you at Citizencon.
[01:33] First up, we’ve got David and Will to talk
about the improvements to the scanners and
[01:37] the radar systems - let’s take a look.
[01:39] Will Maiden (WM): So radar scanning is a very
fundamental mechanic - so many of the careers
[01:44] are going to be based off it.
[01:47] Not just combat but policing and smuggling,
mining, exploration - they are all going to
[01:54] be using radar and scanning in some way or
another so making sure that this system works
[01:59] for all of them can and compliments them and
feels natural has been an interesting challenge
[02:06] to overcome not just in space but on foot
as well.
[02:09] So whether you are in Star Marine or you are
just exploring a planet for the first time,
[02:16] the system needs to work in every case.
[02:19] So, having an eye on working for the future
but what do we have right now and making sure
[02:25] we don’t ruin an already good experience
has been an interesting challenge to overcome
[02:30] and something we have I think at some point
five or six different disciplines are all
[02:36] contributing to making sure that we’re not
overlooking one area to make one other area
[02:42] better.
[02:43] So it’s a continued system that’s been
in development and something that I think
[02:49] we are going to need the community’s feedback
on.
[02:51] David Pollard (DP): We’ve been breaking
it down into different tiers so the cross
[02:55] section you take the 3D shape that you are
detecting and it works out the dimensions
[03:01] that you can actually see and it gives you
a result from that.
[03:07] So if you’re looking at a ship from top
down it’ll have a bigger cross section and
[03:15] side-on it’ll be a smaller signal that gets
to you.
[03:18] As well as cross sections we got infrared
and electromagnetic which are systematically
[03:26] worked out from the items on the object that
you are picking up on the radar and so the
[03:35] different items draw different amounts of
power and give out different amounts of heat
[03:39] and that’s all added together and then radar
looks at that signal and works out how much
[03:48] of it it can see to determine whether it is
detected or not.
[03:56] For the FPS we’re thinking of adding- we’re
working on adding a decibel signal as well
[04:06] for sound so if there are guys walking around
a corridor or firing weapons they’ll be
[04:14] making sound - that will feed into the radar
signal system which means we can use the same
[04:21] radar on a player as on a ship and it basically
uses the same code under the hood.
[04:29] Fundamentally the ships and player radars
are the same, because it is all systematic
[04:41] and players- player characters, NPCs all have
items on them in the same way that ships do,
[04:49] they also emit infrared and EM in the same
way based on the power draw of their life
[04:58] support systems and helmets and weapons.
[05:01] So we’ve- in the past we’ve had just passive
radar on ships and with Will’s design we’ve
[05:10] been adding new features as well which the
active ping - which allows you to send out
[05:17] a pulse which amplifies the signals that your
passive radar might not be able to pick up
[05:25] and so I’ve implemented it.
[05:29] It’s done on a golf-swing type mechanic
where you hold down the button, wait for it
[05:36] to charge up and if you get it right, let
go, then it sends out a ping that is much
[05:41] more powerful than the passive radar and that-
with the active ping the last quarter of the
[05:49] power up power is the sweet spot you gotta
get.
[05:53] If you don’t quite get there then- by letting
go too early or if you don’t let go in time
[05:59] then that’s when it sends out a really loud
signal which other people could detect and
[06:07] the guys in LA are going to be taking over
this scanning and radar stuff and running
[06:12] with it - it’ll be good to see what they
do.
[06:15] WM: Up until now we’ve had a system in-place
that works great for combat, you can- a ship
[06:20] will come into range and you can pick it up
and then it tells you everything you need
[06:24] to know about it - who it works for and the
name of the ship and you can fight it straight
[06:30] away.
[06:31] But moving forward we’re going to need to
know specific information that you can gather
[06:34] from a scan - what it’s cargo is, and things
like that and you took the system out and
[06:40] we started to implement some of those new
features and we keep them all robust and future-proof
[06:44] so when we start working on it for the future
careers that stuff is already solid groundwork.
[06:52] We’re going to be seeing a lot more scanning
and radar focused ships- more utility ships
[06:59] I guess, say, where the focus isn’t on combat
but gathering of information - we’ve seen
[07:05] it recently with the Terrapin, we’ve also
got the Freelancer DUR and the Constellation
[07:10] Aquila - ships that are designed for exploration
or data gathering - that are going to have
[07:18] additional utility mounts used specifically
for scanning or increasing radar range - that
[07:24] allows them to capture information but also
bounty hunters can scan a ship - look who
[07:30] is onboard, find out their criminal status
- but also on the other side, smugglers need
[07:36] to be aware of the system so they know how
to trick it, how to stay hidden - spies need
[07:40] to know how to keep themselves quiet and disappear
off radar so it’s a two system of “I improve
[07:45] my systems one way” and then this guy is
trying to quiet himself down.
[07:49] One of the things we are looking at is the
ability to scout ahead so a ship might jump
[07:54] ahead, recon an area, gather information about
what forces have been gathered and then bring
[08:01] that back to the rest of the fleet where they
can make a valid judgement of “OK, they
[08:06] are exposed on this side” or “actually,
no, they are too strong, let’s leave it”
[08:11] but it means that you can start to plan out
larger attacks and have multiple stages of
[08:17] “oh, I’ve bought a Herald to gather information
quickly and run but maybe not fight” and
[08:23] now there’s a value in having those recon
ships as part of your fleet, as part of your
[08:29] group’s collection.
[08:32] And also if you don’t want to fight it yourself,
you can sell that information to the police
[08:36] or to other gangs who may want to act on that
information.
[08:40] MO: Next up we’ve got Vehicle Artist, Paul,
to show you some cool alterations we’ve
[08:45] made to the Vanguard to make a dropship called
the Hoplite.
[08:48] Paul Dalessi (PD): I was given the task of
creating a new dropship for Squadron 42 - the
[08:55] Vanguard was chosen to be a source material
for that - the Vanguard originally has a pod
[09:02] in the middle that can eject and be given
different functionalities for different variants
[09:06] - that plan wouldn’t work for a dropship
variant, you have to strip out all the walls
[09:12] to make space for the seats to make sure people
can walk inside the interior space easily.
[09:17] We’ve put in the bigger ramp so people can
get in and out easier, bring in some cargo
[09:24] - a lot more space - the original Vanguard
had a bit of a tapered ramp, you can only
[09:30] get in one person at a time - new bigger one
you can just walk in with four people at the
[09:36] same time no problem - it’ll be a much easier
fit.
[09:39] It’s not displacing any work, it’s not
going to delay anything, it’s just going
[09:43] to help Squadron 42 come out faster.
[09:46] The Vanguard Warden’s black - default Aegis
black - the Hoplite is green, it’s a UEE
[09:53] ship - it’s a UEE dropship so it comes in
the UEE livery of green similar to the Gladius.
[09:58] The Warden variant had middle pod which was
an escape pod, it had beds in it, the dropship
[10:04] does not have that, it is it’s own unique
variant, it doesn’t have swappable pod in
[10:10] the middle, it’s got essentially the same
weapons capabilities, the same turret on top,
[10:18] it’s just that the internals have changed
and it’s got a bigger loading ramp.
[10:23] MO: A lot for you guys to discuss.
[10:25] That’s everything for this week, so thank
you for watching - I hope you enjoyed our
[10:30] updates and we’ll see you in the ‘Verse.
[10:31] Back to the Studio
[10:32] CR: Thanks for the update Mici, and to the
team for taking their time to show their work
[10:35] cause they’ve been working very hard on
Citizencon work right now.
[10:38] SG: Yep, it was really great to see the Vanguard
transform actually and it sounds like the
[10:42] radar and scanning update is going to unlock
some pretty cool and big gameplay.
[10:47] CR: Yes - definitely and so it’s one of
the things I’m really excited by because
[10:53] it’s going to add a whole extra dimension
to the Squadron 42 gameplay that I didn’t
[10:56] have in Wing Commanders and then if you take
it to the Star Citizen side of the Persistent
[11:00] Universe, it’s opening up a whole host of
options in exploration, in piracy, in policing,
[11:05] enforcement so it’s going to be really cool.
[11:08] SG: Very cool and definitely I’m going to
need someone to do the scan operator on my
[11:13] Connie.
[11:14] CR: Yes, I’ve got a feeling skilled scanner
operators are going to be in high demand.
[11:18] I’ll will perhaps train to be your Scanner
Operator, we’ll see.
[11:21] SG: Wow.
[11:22] Now we’ve gotten a glimpse of what our devs
have been up to - let’s take a look at the
[11:25] hard work you guys have been doing - here’s
this week’s Community Update with Tyler
[11:29] in Austin.
[11:32] Community Update w/Tyler Witkin
[11:37] Tyler Witkin (TW): Hey everyone.
[11:38] Tyler Witkin, Community Manager in the Austin,
Texas studio, here to bring you this week's
[11:41] Community Update.
[11:42] Last week the Aegis Retaliator won the title
of Galactic Tour's Bomber of the Year, landing
[11:47] it a spot on our pledge store for one week,
and that sale ends tomorrow.
[11:51] Fast forward to this week and now we have
the Sabre verse the Delta competing for the
[11:54] title of Galactic Tour's Dogfighter of the
Year.
[11:57] We're going to post the results of that poll
on our website tomorrow.
[12:00] Now I know we've been talking a lot about
Bar Citizens lately.
[12:03] Just last Saturday there was an event in Denver,
Colorado; Vienna, Austria and Rennes, France
[12:08] that all look to be an incredible time.
[12:10] And thanks to the efforts of a citizen named
Ricko, you can now go to BARCITIZEN.SC to
[12:15] find all the news and updates about Bar Citizens
around the globe.
[12:18] The site is jam-packed with information and
even an interactive map to help you find events
[12:22] in your area.
[12:24] Speaking of Bar Citizens we're going to be
hosting two official events the weekend of
[12:28] CitizenCon, Friday and Saturday night.
[12:30] You can find out all the details about those
events on the CitizenCon information page,
[12:34] which is on our website now.
[12:37] Now it's time for this week's MVP award.
[12:38] A huge congratulations to Leadhead for his
extraordinary efforts in creating a 300i sand
[12:43] sculpture.
[12:44] This was a week long endeavor, and they even
had to battle it out with some rain, but it
[12:48] turned out fantastic.
[12:49] So congratulations again Leadhead, you're
this week's MVP.
[12:53] Lastly the week would not be complete without
Reverse the Verse so make sure to tune in
[12:56] live tomorrow at 8:00 AM Pacific Daylight
Time at Twitch.TV/CIGCommunity where we're
[13:01] going to talk about everything that you saw
on today's episode.
[13:05] Thanks again everyone for your support.
[13:07] We'll see you in the 'Verse.
[13:08] Back to Studio
[13:09] SG: Wow, that sand sculpture was awesome.
[13:11] Between 3V, 3D printing, oil paintings, Legos,
wood carvings and now sand I'm excited to
[13:16] see what the community will create next.
[13:18] CR: Yes, well maybe they'll have a Close Encounters
tribute next.
[13:21] You never know.
[13:22] SG: Never know.
[13:23] Now I'm trying to figure out which ship would
look good shaped out of mashed potatoes.
[13:26] CR: Yes, made by Richard Dreyfuss.
[13:28] So speaking of shaping ships, let's catch
up with Andrew Nicholson and Jonny Jacevicius
[13:33] in the U.K. to hear all about the new improvements
they've been making on the flight model.
[13:39] Ship Shape: Flight Model Balance
[13:42] Andy Nicholson (AN): For the upcoming 2.6
patch we want to start digging into balance
[13:50] on a larger scale than we have done before.
[13:52] Go back to the drawing board a little bit
- not too far obviously - so that meant finding
[13:59] out where do we start?
[14:00] What’s the first thing we do?
[14:01] There’s always dependencies with everything,
so try and find the fundamental thing that
[14:07] we might end up changing that’s going to
affect a lot of other things.
[14:11] The flight model was that thing.
[14:13] And what we decided, and what we started to
do to test it, was to pick one ship - we picked
[14:20] the Gladius - we lowered the SCM speed to
try and make combat, not really slower, but
[14:26] a little easier to control so you’re not
flying backwards and forth at really high
[14:31] speeds.
[14:32] I mean the Newtonian physics that we use,
the IFCS flight model is complicated - it’s
[14:38] complex - it allows for a lot of depth to
the combat, but it’s also kind of intimidating.
[14:44] Especially when you’ve got an SCM speed
of 350.
[14:50] You’ve got ships going really fast and a
lot of throttle management to do to get decent
[14:59] in combat.
[15:00] So we took the Gladius, we lowered the speeds
down to, I think, about 140 - it’s like
[15:06] a rough halving of the speeds to see how it
would affect gameplay.
[15:10] And then rebalanced a few ships around that.
[15:13] Okay make everything slower how does that
feel in a dogfight situation?
[15:19] And also, not just speeds wise, but we sped
up the accelerations so the stop times were
[15:25] lower.
[15:26] Which meant there was less slide when it comes
to ship maneuverability.
[15:30] It can take a little bit of time to get to
top acceleration when you are turning so that
[15:34] even … that staggers the speeds as well.
[15:38] It makes everything feel heavier.
[15:40] Gives the ships more character.
[15:41] But to fill that gap where we’ve cut into
the SCM speeds we’ve made some changes to
[15:48] the afterburner.
[15:49] We’ll be making further changes to the afterburner,
but we wanted to tweak the fuel limit on that
[15:57] so people used it more.
[15:58] The idea that in a combat situation if you’re
not moving fast enough or you need to escape
[16:02] faster afterburner’s what you’d use now
because ... it should be like a … something
[16:08] you don’t use all the time, something you
use every now and that then, that just gets
[16:12] you out of a combat situation if you need
to.
[16:14] Afterburner didn’t really have that much
of a purpose before: now it does.
[16:18] We set up some tests where all the Designers
were invited to playtest and see what their
[16:24] opinions of it were.
[16:25] And it was mostly positive, you know, say
overwhelmingly positive, which has meant we’ve
[16:31] put together a patch, based on the 2.5 build,
so it’s like an interim patch that includes
[16:37] fixes, well rebalancing of, the ships’ speed.
[16:41] But we’ll go out to the Evocati for them
to playtest and give us feedback on that.
[16:45] And eventually more players will get to try
it too if it’s favourable.
[16:50] Or, you know, if it’s not we’ll still
try and make changes based on that too.
[16:56] Ship flight, ship handling, is the main fundamental.
[17:00] What we build upon from there is … in ship
balancing will be ship shields, ship health,
[17:10] missiles and weapons.
[17:11] Right now I’m starting to look at weapons
but we’ve already done a pass which should
[17:15] be in the Evocati build as well on shields.
[17:18] And what we did was … we’ve got some preplanned
numbers - future numbers - where we wanted
[17:25] to take the shields later when they’ve been
redeveloped and refactored and we ported them
[17:31] into the old system we have with the shields,
which should mean we get a little taster of
[17:36] how those shield classes might perform.
[17:40] I expect there’ll be a lot of feedback on
that and there’ll be a lot to change but
[17:46] that’s why we did it.
[17:47] It’s a good chance for Evocati to get there
hands on it and go “er, that’s not quite
[17:50] right” and we’ll react to that when we
can.
[17:52] But yeah the missile changes I think Jonny
will be talking a bit more about that.
[17:58] Jonny Jacevicius (JJ): So the problem we have
with our current missile rack system is a
[18:03] lot of the missile racks are bespoke to ships
and that they’re tied onto them, you can’t
[18:06] swap them out for any others.
[18:07] You can swap the missiles in and out but we’d
rather you had the choice to be able to swap
[18:12] it out for a different rack of a different
size so you can put different size missiles
[18:16] on there if you prefer more smaller ones or
a less amount of larger missiles.
[18:20] Another problem is a lot of the size allocations
we had on the missile racks that we’ve got
[18:28] at the moment is that some would be size three
that could hold, for example, two size three
[18:32] missiles, and some would be size two that
could hold two size three missiles.
[18:37] So we really just wanted to bring all that
in line, fix the problems with that, and then
[18:40] obviously build a system that’s flexible
enough to allow you to swap in and out these
[18:46] missile racks.
[18:47] Say for example if you don’t have a ship
that has a bespoke missile rack on there,
[18:52] like the Starfarer Gemini the rack on the
front or the Constellation wings, you’ll
[18:57] be able to use one of these new missile racks.
[18:59] The Frankfurt lads have been working very
hard on actually making all of the missiles
[19:04] the correct size.
[19:05] So all size one missiles, instead of being
huge … having huge variances in sizes, they’ll
[19:10] all now be the same size but we’ll still
have the opportunity to make them look unique.
[19:14] And this just means that instead of having
these different sized missiles floating away
[19:18] from missile racks they’ll actually be connected
to the missile racks properly, will disconnect
[19:22] properly, and it will look good.
[19:24] If you play something like an FPS you’ll
have your sniper rifle as something that is
[19:29] the long ranged, powerful shot weapons.
[19:32] You’ll have your SMG that is your burst
like … kind of like high rate of fire, lower
[19:37] damage, high spread weapon.
[19:38] You’ll have a shotgun that’s high spread,
very high damage.
[19:41] So we wanted to reflect that in our ship weapons
so that if someone is using a cannon you immediately
[19:46] know that they’ll be trying to engage you
with it from long range.
[19:49] A repeater: you’ll have an idea of what
the fire rate will be, how much damage it
[19:54] will cause and things like that.
[19:55] So that’s not to say that all cannons will
be the same and all repeaters will be the
[19:59] same.
[20:00] All of the … there are many different things
that can have varying effects on the ship
[20:04] weapon statistics.
[20:05] So if it’s, for example, an energy weapon
over a ballistic weapons it might fire faster,
[20:11] it might consume more power.
[20:13] And if it’s … say if it’s … if you’ve
got additional things under energy, say additional
[20:18] damage types under energy - so if it’s a
laser weapon, if it’s a plasma weapon - there’ll
[20:21] be different attributes to the projectile
it fires but also to possibly the gun’s
[20:26] rate of fire, it’s power consumption, it’s
accuracy and all of these things.
[20:30] We want to get these changes in on our current
set of weapons just to make sure that we can
[20:36] get those locked down first and make sure
we get them feeling good with the new flight
[20:39] model.
[20:40] And then, in the near future, we’ll hopefully
start getting some of these … getting some
[20:44] more variation in there, getting some of these
additional damage types in, and making these
[20:48] weapons feeling more and more unique.
[20:50] Back in the Studio
[20:51] SG: Yeah I can’t wait for the players to
test all the tweaks first hand when we implement
[20:55] this into the Alpha.
[20:56] Do you think people are going to have to adjust
their flying styles as these adjustments come
[21:00] in?
[21:01] CR: Yeah, no absolutely.
[21:02] Actually I think it’s going to give a much
more fun, close feel … up close feel to
[21:07] the dogfighting.
[21:10] Which is what we’ve been looking for: that
visceral Wing Commander feel.
[21:13] And of course we’ve got these beautiful
ships that Nate and his whole ship team build
[21:17] and we want to show that off and …
[21:19] It’s actually kind of ironic because it’s
exactly the process I ended up going through
[21:25] 24 years ago when we were doing Strike Commander.
[21:27] So Strike Commander wasn’t based in space,
it was modern jet fighters in this futuristic
[21:32] vision of the Earth where mercenary squadrons
were working for the highest bidder or the
[21:39] corporation.
[21:40] And we’d based it all on … we’d done
accurate flight modelling and all the speeds
[21:47] and everything were based on what an F16 would
be, or a MIG 25 or the various craft that
[21:53] you would be … fighter planes you would
be fighting with.
[21:55] But we found when we were flying around and
dogfighting that we really weren’t getting
[21:59] this up close dogfighting feel that we wanted
and Wing Commander had from what was done
[22:07] previously.
[22:08] And, yeah, it wasn’t helped by the fact
that resolution was really low - 320 by 200
[22:12] - and 256 colours.
[22:14] So we were trying … we were wracking our
heads to see how we could do that better and
[22:17] we basically said “let’s try halving the
speed of … basically the distance and speed
[22:21] of everything”.
[22:22] And when we did that it felt right.
[22:24] So even though it wasn’t fully, actually
accurate and right it was … it felt good
[22:30] as a dogfighter up close, firing guns.
[22:33] And that’s kind of the same process we went
through here on the flight model changes we’ve
[22:38] done.
[22:39] So we’ve … the speed’s crept up over
time and everyone gets further and further
[22:42] apart.
[22:43] And now we’re bringing them back together
for a more up close, Wing Commander style
[22:46] dog fighting but with a much more sophisticated
physics model and all the rest of stuff.
[22:50] And so hopefully people are going to like
it but that’s up to the Community - it’s
[22:53] the process we do.
[22:55] So the first up will be the Evocati and see
what they like, and then after that a larger
[23:00] group of the Community.
[23:01] But we’re pretty excited by it.
[23:02] SG: Wow, that sounds like I am going to need
to up my Arena Commander game.
[23:07] Which fortunately is a little easier thanks
to Zane and Trevor and speaking of those guys
[23:11] we now go to a first look at the work they’ve
been doing on our brand new lobby interface.
[23:16] UI Update: Lobby and Mobiglas
[23:20] Treavour Wernisch (TW): The initial user experience
and the onboarding experience in Star Citizen
[23:26] kind of needed a fresh look, actually an entire
overhaul.
[23:30] So, we’re sort of burning the old system
to the ground and rebuilding it all from scratch
[23:35] visually and from a code base.
[23:38] So, user experience is a lot cleaner and should
be more fun to use.
[23:41] So, the initial pass will be launching in
2.6, internal feedback has been great so far.
[23:47] We anticipate the user base will be just as
excited, you should be able to match up with
[23:52] your friends quicker, jump into the lobby
much quicker, you’ll be able to customize
[23:56] your marine in Star Marine now.
[23:58] It’ll have unique loadouts for the different
factions.
[24:01] A big focus of the revision is having big
hero pieces.
[24:05] We have really unique and detailed planetary
system Star Marine models and Arena Commander
[24:11] ships.
[24:12] So, kind of to bring out those hyper details
we want to spin around models, zoom in on
[24:17] that or just kind of a get a feel for how
amazingly they’re built.
[24:23] We want to do some really interesting fullscreen
ship customization here, the system’s still
[24:29] pretty heavy under development but gives you
an idea of, you know, we’ll be able to spin
[24:34] around ships, focus in on parts and switch
out items.
[24:37] You’ll be able to drill down individual
items and gets those item stats when you’re
[24:43] swapping them in and out of your ship.
[24:46] So with the visual redesign we’re actually
going to bring the leader boards from the
[24:49] web into the game so players have less reason
to jump in and out when they’re tracking
[24:53] their score on the leader board.
[24:56] With bringing the leader boards in game, we’re
going to actually try to expand out the system
[25:00] and build a bigger feature set for users to
track.
[25:05] We’re going to have official ranking systems
and matchmaking, will be a lot more improved.
[25:09] A few months ago our Lead Designer, Zane already
showed concept… visual concepts on where
[25:14] we want to take Mobiglas so we’ve taken
those concepts and started to flesh them out
[25:18] ingame.
[25:19] We have a working prototype in game and we’re
kind of building different applications now.
[25:25] The mission management system and inventory
systems to kind of build a baseline style
[25:29] guide, make sure everything is readable and
legible in all kinds of different types of
[25:34] environments.
[25:35] Just a really fun unique system to use.
[25:36] Zane Bien(ZB): Reason why we kind of wanted
to do this overhaul was to make the Mobiglas
[25:42] feel a bit more inworld.
[25:44] That includes utilizing more of the arm to
communicate that this UI is associated with
[25:51] your arm and the projector.
[25:52] TW: One of the great features from Mobiglas
we’re trying to build out now is while everybody
[25:57] has come to know the blue LED visual style
that we have, we’re looking to implement
[26:03] a feature that will let a feature kind of
customize the colour to their liking so if
[26:09] there is any issues with the blue they can
make it their pink or purple that they want.
[26:13] ZB: We also have this idea of adding more
customization into the home screen so what
[26:21] you’ll be able to is much like a support
screen in the ship is customize what different
[26:28] blocks displace.
[26:30] So we have just these kind of placeholder
live elements here, so anything can then go
[26:37] in each of these little blocks here and you’ll
be able to customize what displays where.
[26:43] So, eventually we’ll have… you’ll be
able to kind of drag one of these apps here
[26:51] whether it’s like your UEC, bank account
or cargo manager, your StarMap and you drag
[26:58] it into one of these blocks and what that’ll
do is turn it into a real… overall status
[27:07] display for that application.
[27:09] As you can see this is our initial implementation,
you can see it’s very much a work in progress
[27:16] then after 2.6 I’m excited to get this out
to you guys so you guys can play around with
[27:23] it and test it.
[27:25] We’re expecting it to come in roughly around
3.0, so it’ll be exciting.
[27:30] Outro
[27:31] CR: Really cool work on the lobby and also
the mobi customization, a great way to end
[27:35] the show.
[27:36] SG: Yup and as always we’d like to thank
our subscribers whose monthly contributions
[27:40] allow us to make extra community content like
this.
[27:43] CR: Like this show, so thank you.
[27:44] So not only Around the Verse, Reverse the
Verse, the Town Halls, Bugsmashers, Loremakers,
[27:50] Jump Point magazine, 10 for the Chairman,
the Vault, hangar flair and so much more so
[27:56] thank you guys for allowing us to be able
to do this.
[27:58] SG: yes, thank you very much and a huge thanks
to everyone who's supported development of
[28:02] Star Citizen, we could not do this without
you.
[28:04] CR: Yes, we definitely couldn’t so thank
you guys.
[28:07] So be sure to join us for Reverse the Verse
tomorrow at 8am Pacific, aka 4pm GMT, aka
[28:13] 5pm Frankfurt time where Johnny and Andrew
will be providing further detail on the flight
[28:18] model changes.
[28:19] Make sure to have your questions ready.
[28:20] SG: Yup have them ready and while there will
be a brand new Loremakers next week, ATV and
[28:25] RTV will be on Hiatus so we can focus on preparations
for CitizenCon.
[28:28] CR: Yes, there’s lots of preparations in
process.
[28:32] So make sure to tune into our livestreams
next Friday and Saturday and of course the
[28:36] big event on Sunday.
[28:37] I’m excited to share with you everything
that we’ve been working on, it’s pretty
[28:41] awesome.
[28:42] SG: And again head to the RSI website for
all the details on how to watch and more.
[28:47] CR: So until then, we’ll see you…
[28:51] Both: Around
[29:29] the Verse

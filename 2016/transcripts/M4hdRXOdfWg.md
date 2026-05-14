# Star Citizen: Around The Verse 3.4 - DE

**Video:** https://www.youtube.com/watch?v=M4hdRXOdfWg
**Date:** 2016-08-25
**Duration:** 21:59

## Transcript

[00:13] Closed Captioning provided by the Imperial
News Network.
[00:15] Brian Chambers (BC): Welcome to Around the
‘Verse season three, episode four.
[00:19] I am Brian Chambers, Development Director
of Foundry 42 Frankfurt.
[00:23] Dan Trufin (DT): And I’m Dan Trufin.
[00:25] I’m the Lead System Designer of the Frankfurt
office.
[00:28] BC: As many of you know last week was Gamescom.
[00:32] It was a very, very, very busy week.
[00:34] It’s always one of our biggest events of
the year.
[00:37] DT: Outside of Citizen con of course.
[00:39] BC: Yes that is also very busy.
[00:42] Members of the dev team from all around the
world worked tirelessly to pull together to
[00:47] give you the sneak peek of what we showed
on the show floor and also at the event.
[00:52] DT: We got to meet a lot of the old guys,
the old backers and also a lot of new guys
[00:58] that we’ve never seen before, it’s always
nice to meet these guys.
[01:01] BC: There was a lot of new people on the show
floor.
[01:03] DT: Yeah and a lot of them were like full
cosplay with all the gear, all the weapons,
[01:08] and not the actual weapons because the security
would take them away, but all the protection,
[01:14] all the helmets, all the gear, amazing, amazing
stuff.
[01:17] BC: Yeah I agree.
[01:18] I met a lot of new people for the first time,
ran into some old fans, old backers, it was
[01:25] really, really cool.
[01:26] Highlight of the week had to be the live event
at the Gloria Theatre.
[01:30] That’s where Chris Roberts was able to show
off SC Alpha 2.5 and 2.6.
[01:35] It’s going to include the release of Star
Marine which I know is anticipated.
[01:41] Biggest of all was the gameplay we showed
for 3.0.
[01:45] If you didn’t get a chance to see it, we’ve
cut together bits so take a look.
[02:38] Awesome, as you can see one of the newest
elements that was introduced in the demo was
[03:06] seeing a quest giver for the very first time.
[03:08] DT: Yeah definitely.
[03:10] While we've been working on integrating NPCs
in the baby PU, a mission giver is a completely
[03:17] different level of complexity in this game.
[03:20] Let's have a look at how that came along.
[03:22] Behind the Scenes: Quest Giver
[03:25] Hannes Appell (HA): So with Star Citizen we
wanted to create a living and breathing universe.
[03:29] And a big part, maybe even the biggest part,
is to populate our universe with compelling
[03:33] characters who feel real.
[03:35] And you saw your first glimpse of that with
Miles Eckhart, the shady, ambiguous, backroom
[03:39] dealer guy that we showed in the Levski demo
for GameCom.
[03:42] And we want to show you a little bit of how
he came to be: from casting, and then actually
[03:48] shooting on the Imaginarium stage.
[03:51] And then going into the technical side with
Mike Nagasaka and Jason Cole showing you how
[03:55] he actually came to be as an AI in the demo.
[03:57] Have fun!
[03:58] [Motion Capture]
[04:00] Miles Eckhart (ME): Hey how are ya?
[04:03] Miles Eckhart.
[04:05] Friend over Crusader said you been building
quite a rep.
[04:07] Jason Cole (JC): Chris runs through everything
and edits all the scenes how he wants them
[04:12] to look or how the acting to work.
[04:13] Once that’s done that could come from three
or four different takes, but with an editor
[04:19] he’ll use the editor’s time code basically
to make … create that scene what he wants.
[04:24] Then from there that data, that quadcam data,
and that timecode gets sent out and then gets
[04:30] solved.
[04:31] ME: I’m always on the lookout for capable
people who don’t rattle.
[04:34] If you’re interested in picking up some
extra work, we should talk.
[04:38] I’ll send my details ...
[04:39] JC: And then once that data’s solved it
comes back to us but it comes back in pieces,
[04:43] per take.
[04:44] So what we do is we take that data and merge
it together to make that once scene work together.
[04:50] Michael Nagasaka (MN): While that’s getting
processed I pre-visualise the sequence by
[04:54] using preexisting animation editor to get
the overall feel.
[04:59] And once I get the motion capture data back,
the facial and body, I put everything together
[05:05] and see how everything looks.
[05:06] [Initial Implementation]
[05:07] ME: Hey how are ya?
[05:08] Miles Eckhart.
[05:09] Friend over Crusader said you been building
quite a rep.
[05:10] I run a modest security outfit, and I’m
always on the lookout for capable people who
[05:19] don’t rattle.
[05:20] MN: So the first initial implementation is
probably the most important part because this
[05:24] is the first time everything becomes together,
and we can assess any kind of issues that
[05:29] happens, and resolve any kind of motion capture
or facial data, environmental or basically
[05:34] anything that needs to be adjusted.
[05:36] So after everything’s then polished, I do
a lighting pass.
[05:41] Fortunately we have a good lighters ... environment
lighter so I didn’t have to do too much
[05:46] lighting.
[05:47] But I still added some few lights from the
mobiGlas as well as a little bit of shadow
[05:53] fill light on the side to give more of a moody
feeling to Eckhart.
[05:58] So after that’s been rendered and edited,
export the animation into the editor which
[06:05] I handed over to the level designer or the
UI artist to get it triggered at the right
[06:11] place at the right time.
[06:13] [Final Result]
[06:15] ME: Hey how are ya?
[06:22] Miles Eckhart.
[06:25] Friend over Crusader said you been building
quite a rep.
[06:40] I run a modest security outfit, and I’m
always on the lookout for capable people who
[06:47] don’t rattle.
[06:48] If you’re interested in picking up some
extra work, we should talk.
[06:49] I’ll send my details ...
[06:50] HA: So in the GamesCom demo both Miles Eckhart
and they guy that gives you landing permission
[06:51] on Levski, they were both pre-rendered as
Flash videos and then those were triggered
[06:54] inside the engine.
[06:55] That’s a process that “works” but it’s
kind of old school and we want to actually
[06:59] change that in the future to a process where
we actually render picture-in-picture live
[07:03] in the engine.
[07:04] That’s scaling way better with an online
universe that has hundreds of these characters.
[07:08] Behind the Scenes: Navigation Mesh
[07:11] Alexander Marschal (AM): During the Gamescom
live demo, Chris Roberts mentioned the engineering
[07:15] difficulties like bringing a ship from space
to hangar, transitioning from zone to zone
[07:20] or having NPCs navigating environments that
can move relative to each other.
[07:24] Regarding the last point - we want to show
you how we improve the existing multi-layer
[07:28] navigation mesh system to match our requirements
for bringing the Star Citizen universe alive.
[07:33] Francesco Roccucci (FR): In Gamescom we can
see several examples of the navigation mesh
[07:37] - so this is an example of an actual set-up
where we can see there are two main areas
[07:45] - like a landing pad with some navigation
area and a Constellation.
[07:50] So what we actually created was just a set-up
in which this character is just moving across
[07:55] three spots on the area and there is another
character inside here that will do something
[08:01] very similar - he will move inside three different
block points or locations in this area.
[08:07] One here, one this room at the computer, one
here and we will play some animations.
[08:12] So now we will jump in-game - so this simple
set-up I created before with the help of some
[08:17] of the designers and we which a spaceship,
in our case the Constellation, was set-up
[08:21] before is spinning on top of a landing pad.
[08:25] Now we are inside we can see a NPC moving
across the two different locations - so this
[08:30] is the first one, he plays just an animation
as he arrives at the spot, he plays an animation
[08:33] and he goes to the computer board and start
to just interact with it.
[08:38] We can look around and what we can see is
the landing pad just in front of us and we
[08:46] can see another character that actually move
across three different locations and is trying
[08:49] to look at us later on and we will wave - what
you can see is that I can enable the navigation
[08:56] mesh in the backdrop and there is two different
local grids and two different zone - one is
[09:02] our spaceship in which during the loading
time the object container will inform the
[09:08] AI to which local navigation mesh we are in,
which local grid we need to connect to and
[09:15] which zone we need to connect so.
[09:17] So we can basically allow - here you can see
the navigation system is idle - that means
[09:22] nothing is actually moving for the AI so this
is very optimized because we can know in advance
[09:27] based on the physics environment in which
we are in that nothing is actually moving
[09:33] because the zone system takes care of that
and the AI can just perform their own action
[09:39] that is butt-funny and move the characters.
[09:43] As you can see, I can exit the game and I
can show you a bit of the set-up is.
[09:48] So if I go around now the navigation mesh
will try to re-check the consistency of the
[09:54] different environments to verify that nothing
has happened - nothing has changed and here
[09:59] is our Constellation and on the bottom we
have the landing pad with it’s own navigation
[10:04] mesh.
[10:05] And if we just look at the backdrop we can
see here volume - this is the volume set up
[10:09] in this specific map but we cannot see any
volume on the Constellation because this belongs
[10:13] to it’s own object container and cannot
be edited by any level designer than just
[10:17] used the spaceship but to add that on you’d
need to modify the template of the spaceship.
[10:24] So each navigation mesh, more or less, highlights
a specific environment in which the characters
[10:30] can move.
[10:31] Back to the Studio
[10:32] BC: Thanks guys.
[10:33] Thanks to Intel we also had a booth in Hall
9 on the showfloor where people had the opportunity
[10:38] to come up and play the game for the first,
second, third, fourth time.
[10:43] DT: Yeah, we’re also joined by the Star
Citizen twitch community who were livestreamed
[10:49] a sneak peek of the upcoming 2.5 release.
[10:51] Let’s have a quick look of how that went
on the showfloor.
[10:54] Behind the Scenes: Gamescom
[10:55] BC: So the experience hanging out on the showfloor
was awesome.
[10:59] The amount of backers that I met for the first
time and that I’ve talked to socially, the
[11:05] amount of new people that came into play - people
were excited, at one point I think a queue
[11:11] was up to a three hour wait.
[11:13] Cameron Wilkie (CW): Our queue was going outside
our booth around the corner and starting to
[11:17] block access to our neighbours so a wonderful
challenge to have because it just shows the
[11:24] interest in the game.
[11:25] BC: The energy was there, people were digging
it, we were having fun.
[11:29] DT: I was part of the floor crew - we manned
the booth and made sure everyone has everything
[11:37] they need to enjoy the game.
[11:39] They wanted to have the developers, so yeah,
me and Todd Papy were all there on site to
[11:44] answer any questions that we- that the backers
had for us.
[11:49] Todd Papy (TP): This was my first time at
Gamescom and just the sheer amount of people
[11:53] that are there compared to E3 is astounding
and-
[11:57] CW: We were handing out merchandise left,
right and centre - explaining our game to
[12:03] every passer-by and backers and the community
that would come by - not even wanting to play
[12:10] the game, just wanting to see our presence
and feel part of what was going on.
[12:15] BC: Good to show people the work we’ve been
pulling off.
[12:17] CW: All throughout this we’ve got Disco
Lando with Captain Richard, DeeJay Knight,
[12:23] Twerk17, Bad News Baron all streaming live
and having fun on the set - it meant that
[12:30] the whole atmosphere was live and festive
and a lot of people having fun and enjoying
[12:35] themselves.
[12:36] Captain Richard (CpnR): A lot of people haven’t
seen Star Citizen yet here at Gamescom or
[12:41] even live so yeah, we’ve been trying to
showcase what Star Citizen has to offer.
[12:45] Deejay Knight (DK): Amazing to see the amount
of backers, the amount of new people seeing
[12:49] Star Citizen as there have been - just to
see the amount of supporters that are already
[12:55] here.
[12:56] That are anxious to see us, just feels awesome.
[12:57] It’s a fantastic community and I’m glad
to be a part of it.
[12:59] Twerk17 (T17): I’ve been a backer since
April 2013 and I’ve been streaming for a
[13:06] little over two years.
[13:07] So I’ve met so many people that I’ve been
talking with for years now so it’s been
[13:11] really cool.
[13:12] CpnR: A lot of people come out and say “Hey,
I wanted to stop by the Star Citizen booth
[13:16] and say hello, I’m a big fan of your stream”.
[13:17] Bad News Baron (BNB): The people that work
at CIG have been the most passionate people
[13:22] I’ve ever come across - they really believe
in what they are doing and that is the most
[13:25] inspiring thing for me as a backer.
[13:27] TP: All of the volunteers that worked at the
booth - all of those guys were backers.
[13:33] To work those long hours and how much time
and effort they spent actually supporting
[13:39] the team as well as the game as fantastic.
[13:44] CW: Great guys, always fully ready to talk
about the game - great team and we couldn’t
[13:49] have done it without them.
[13:50] BC: They are the ones that are truly allowing
us to create this game, this world, this universe.
[13:56] During the floor I was more watching their
reactions - if something was shown that was
[14:00] kind of blowing them away I’d look over
and they were looking at me and kind of nodding
[14:05] their head and giving me a thumbs up, y’know
- it was kind of giving a direct recognition,
[14:10] of one-on-one of “what we saw was pretty
cool”.
[14:13] Back to the Studio
[14:15] BC: Fans weren’t the only ones that got
in the action in the show.
[14:18] We also had a press booth where we invited
the press to get a sneak peek at some of the
[14:23] stuff we’ve been working on - here’s an
inside look at behind the scenes of our behind
[14:28] the scenes press booth.
[14:29] Behind the Scenes: Press
[14:30] David Swofford (DS): We come to Gamescom because
it’s the largest game conference in the
[14:33] whole world so that’s probably number one.
[14:35] And number two, we have a lot of fans here
who can attend the conference, and number
[14:40] three - we get to talk directly to the press.
[14:41] Chris Roberts (CR): Hi!
[14:42] Good to see you.
[14:43] DS: This is Mike Stubbsy from Red Bull.
[14:45] Miscellaneous Press Guy #1 (MPG1): Hey!
[14:46] DS: We spent a lot of time with them - usually
whenever we are going to show to our backers
[14:50] we also show to the press behind closed doors.
[14:53] The way that works and what that is for is
to give the press that up-close personal one-on-one
[15:01] attention with Chris Roberts and so Chris
sits down and we set up appointments and we
[15:05] go through the demo - the press gets a chance
to ask some questions, whatever they want.
[15:09] Miscellaneous Press Guy #2 (MPG2): Can you
how your procedural planet tech works and
[15:12] what it is?
[15:13] DS: They like it when they can get that face-to-face
contact, especially with someone like Chris.
[15:16] CR: We’re going to show a preview of what
we’re going to show at our event - which
[15:21] is the first integration of the big procedural
planets that we’re putting in Star Citizen.
[15:28] DS: That procedural planet technology is one
of the main things - one of the main messages
[15:32] that we’re trying to get out.
[15:33] But also trying to show them “the slice”
- being able to do all the different things
[15:37] - getting out of your ship, running around
a planet, space station, getting back in,
[15:41] flying off to another planet nearby.
[15:43] CR: Quantum drive, so we can get to our location.
[15:49] Now you’ve got the EVA stuff - you can go
around.
[15:51] And you’ve also got stuff you can do down
on the ground - the FPS stuff.
[15:54] You can go between all of them seamlessly
- it’s like a first person universe you
[16:00] can go and do what you want versus being stuck
to one thing.
[16:02] DS: Just being able to do all that in real
time is going to be a real special moment
[16:09] for everyone to see.
[16:10] CR: So Levski is this, I guess, free township
on this moon that was a deserted mining area
[16:19] and so a whole bunch of people from the UEE-
wanted to get away from the boot of the UEE
[16:24] set up there so it’s ”free from the UEE
impression” so there’s outlaws, scum,
[16:32] villainy and other people that want to be
around there and we’re going to go see it.
[16:35] So this is Port Olisar which is the place
where you start on in the current live Star
[16:41] Citizen - which is one of the space stations.
[16:43] But in 3.0 you’ll be able to spawn at the
multiple starting locations in the star system.
[16:48] DS: What we’re showing in the P2P room - in
the press room is what will be shown to the
[16:55] backers tonight and so they are seeing the
same thing.
[16:59] We have good relationships with the press
- we trust them, they trust us and we all
[17:03] try to hold hands and all go in it together.
[17:07] So it usually works out just fine.
[17:09] Back to the Studio
[17:11] DT: There’s been a number of articles being
published in the last few days about the event
[17:15] and reaction of the press has been really
great.
[17:19] BC: It really honestly has.
[17:20] We’ve put together some links in the description
below so go check them out for yourself.
[17:25] DT: And the AtV would not be complete without
hearing from the Community Manager, Tyler
[17:29] Witkin, with this week’s Community Update
and MVP.
[17:34] Community Update w/ Tyler Witkin
[17:40] Tyler Witkin (TW): Hey everyone.
[17:41] Tyler Witkin, Community Manager in the Austin,Texas
studio here to bring you this week’s community
[17:43] update.
[17:44] The Anvil Terrapin sale continues which includes
another ship brochure that is definitely worth
[17:48] checking out.
[17:49] Alongside the sale is the usual Q&A sessions.
[17:52] You saw part one on our website released yesterday
and part two will be posted tomorrow.
[17:56] There’s a lot of good information in these
about the Terrapin.
[18:00] This month's Jump Point is now available to
our subscribers.
[18:03] This time we take a look at the making of
Grim Hex station and the ongoing head character
[18:07] development.
[18:08] Subscribers also received two vault updates
this week that showcased a selection of procedurally
[18:12] generated planet shots and an early look at
the Anvil Terrapin.
[18:17] Gamescom is now behind us.
[18:19] We had an absolute blast.
[18:21] We encourage you to share the Gamescom demo
with your friends and family and let them
[18:24] see just how cool Star Citizen really is.
[18:26] Remember, word of mouth from you, our amazing
backers is what makes this project possible.
[18:31] We want to thank Twerk 17, Deejay Knight,
BadNewsBaron and Captain_Richard for entertaining
[18:36] us all live from the show floor booth at Gamescom.
[18:39] In addition, thank you to all of the volunteers
who helped us run this event and make sure
[18:44] that things went as smooth as possible, we
could not have done it without you.
[18:48] Lastly it’s time for our MVP award.
[18:50] A huge congratulations to Algared, BrettW,
and GentleJes for holding this year's CruxCup.
[18:57] For those of you who are not familiar, this
is an annual ingame racing tournament organized
[19:01] and hosted by the community.
[19:03] Loaded with epic prizes.
[19:05] So congratulations again, you all are this
week’s MVPs.
[19:09] Back to you guys.
[19:16] Outro
[19:22] DT: Thanks Tyler.
[19:39] Maybe next time you and I can join the race,
what do you think?
[19:42] BC: You’ll have to step up your game.
[19:44] DT: I’ll see what I can do.
[19:45] BC: Anyways that’s it for this week.
[19:48] Now that Gamescom’s ended, the team is back
in the trenches to get SC Alpha 2.5 out the
[19:55] door.
[19:56] Also working towards 3.0, also working on
Squadron 42.
[20:00] We’d like to thank all of our subscribers
that all us to bring this extra content to
[20:06] you on a regular basis.
[20:09] Please go to robertsspaceindustries.com.
[20:11] You can get info on future news, future events
that we have.
[20:14] You can also purchase merchandise there.
[20:16] I’ve heard, I don’t know exactly when
yet, but I’ve heard soon we’ll have the
[20:21] Squadron 42 hoodies up there and those are
pretty cool.
[20:24] DT: We’d also like to give a shoutout to
our Star Citizen community who will be attending
[20:29] Insomnia at the NEC at Burlington this Saturday.
[20:33] Some of our team from the UK office will be
meeting BoredGamer at 4pm in the bar.
[20:39] The first 58 attendees will also get a special
surprise.
[20:44] BC: I wonder what it is.
[20:45] DT: Well it’s a surprise, that’s what
surprises are for.
[20:48] BC: Yeah, exactly.
[20:50] Please feel free to join us this Friday at
4pm local German time for Reverse the ‘Verse
[20:57] where we will be taking questions live, myself
and a few others based off of this week’s
[21:03] episode.
[21:04] As always we will see you next time...
[21:06] Both: Around the Verse

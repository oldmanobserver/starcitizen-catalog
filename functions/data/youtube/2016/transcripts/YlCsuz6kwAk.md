# Star Citizen: Around the Verse 3.1 – LA

**Video:** https://www.youtube.com/watch?v=YlCsuz6kwAk
**Date:** 2016-07-28
**Duration:** 19:52

## Transcript

[00:13] Closed Captioning provided by the Imperial
News Network.
[00:45] Sandi Gardiner (SG): Hey everybody.
[00:58] Welcome to season three, episode one of Around
the ‘Verse, I’m Sandi Gardiner, VP of
[01:03] Marketing
[01:04] Chris Roberts (CR): Hi and I’m Chris Roberts,
CEO and Project Director of Star Citizen and
[01:06] Squadron 42, and I guess Co-host today.
[01:10] With season three we decided to change up
Around the ‘Verse’s format to show you
[01:13] more development in progress, directly from
the screens and mouths of the devs themselves.
[01:18] So each week is going to have a weekly Studio
Report that will rotate between each of our
[01:21] four studios.
[01:22] A rotating segment that will focus either
on ships, environments, characters, visual
[01:26] effects, or props, and finally each episode
will have a deep dive on a feature that is
[01:30] up and coming on Star Citizen and Squadron
42.
[01:32] Anyway it’s taken some effort to organise,
but I’m pretty excited about this new format
[01:36] as it’s going to allow you all of you to
see a lot more of what I see on a daily basis
[01:39] which is pretty cool.
[01:40] SG: Cool.
[01:41] So speaking of that, what is going on in Star
Citizen this week.
[01:44] CR: Okay well lots of things have been going
on.
[01:47] Last week we just wrapped the last of the
P-Cap pickups for Squadron 42 at Ealing studios
[01:51] in London.
[01:52] We’ve got some great stuff and it’s kind
of funny but David Haddock tells me between
[01:55] all the additional mission dialogue and NPC
wild lines, we are now at 1,255 pages of script
[02:03] which is about three times as much as we Wing
Commander 4.
[02:05] We also managed to get some additional capture
for the Persistent Universe while we were
[02:09] shooting.
[02:10] It’ll help flesh out the NPC’s and life
in the various locations you can visit in
[02:13] the near future.
[02:14] So on a closer to home basis, the SC live
Alpha release, it looks like we may have just
[02:19] solved one of the more difficult to crack
bugs that have been holding up sharing the
[02:22] current 2.5 build with the Evocati.
[02:25] So if that goes well, we should go to a wider
PTU sometime next week and full live release
[02:31] shortly after that.
[02:32] We’ve also been hard at work on a lot of
other stuff.
[02:35] Several which we’re pretty excited to show
with all you guys at Gamescom.
[02:40] So hold tight for that, but right now we should
go to Eric Kieron Davis who’s going to give
[02:46] you the LA Studio Update.
[02:47] Studio Report
[02:48] Eric Kieron Davis (EKD): Hey everybody and
welcome back to Los Angeles.
[02:52] I am, Senior Producer, Eric Kieron Davis here
with your weekly update.
[02:56] We’ve got quite a busy week across the entire
studio and all the disciplines so let’s
[03:00] just dive in.
[03:01] Our Design and Engineering teams have been
really busy with multiple items and one of
[03:05] them is atmospheric flight.
[03:07] The implications of this feature are really
exciting the whole team and here’s, Lead
[03:11] Tech Designer, Kirk Tome and, Senior Physics
Engineer, John Pritchett to walk you through
[03:15] it.
[03:16] Kirk Tome (KT): We’ve begun implementation
of the first stage of our atmospheric flight
[03:18] model.
[03:19] Ships that look like they can take advantage
of atmosphere flight handle better than those
[03:23] that don’t.
[03:24] This means that more aerodynamic ships maneuver
better because of how they utilise drag, and
[03:29] they can roll and pitch better in atmosphere
than they can in space.
[03:33] Less aerodynamic ships work harder against
drag and suffer decreased acceleration and
[03:37] maneuverability.
[03:39] John will allow Design to tune the characteristics
on a per ship basis.
[03:43] So ships that look like the Gladius will handle
vastly different from those that look like
[03:49] the Starfarer.
[03:50] Atmospheric density increases the closer you
get to planetary surfaces and will include
[03:53] pockets of varying densities, so it’ll have
fluctuations such as wind and turbulence.
[03:58] Your ship’s “max safe speed” decreases
as atmospheric density increases.
[04:03] So you want to pay close attention to the
velocity and altitude of your ship otherwise
[04:07] you risk damaging the ship while in flight.
[04:08] John Pritchett (JP): So I’ve been working
on the atmospheric flight model for ships
[04:12] and the main thing is our goal with that system
is not to create ships that fly by aerodynamics,
[04:20] not like an aircraft.
[04:22] But it’s really more for our spaceships,
when they enter atmosphere, we want the flight
[04:27] model to take into account drag, and at some
point possibly lift.
[04:34] Kind of change the way the ships feel in atmosphere.
[04:37] And so the first step for that was a way to
calculate the cross-sectional area for the
[04:42] spaceship on all three of its main axes.
[04:44] You got the front, side and top.
[04:46] And that’s largely what determines the amount
of drag for a ship.
[04:50] That’s going to be dynamically calculated
so if a ship blows a wing off or something
[04:53] that’s going to change.
[04:54] And not only the amount of surface area but
also where the drag force is being applied
[04:58] relative to the center of mass.
[05:00] Which will create really interesting flight
conditions.
[05:03] But every ship, based on its structure, its
… some ships are going to be more aerodynamic,
[05:08] something like the Gladius, they’re designed
more like an aircraft.
[05:12] Some ships are going to fly more like a bus
and you’re really going to feel that.
[05:17] And that all comes out of the cross-sectional
area for the ship.
[05:19] There’s some things we can tune into that
like different types of materials might have
[05:24] a different drag coefficient.
[05:25] So we can modify ships, tweak their performance
a little bit but mostly I think it’s going
[05:31] to be defined on the actual structure of the
ships.
[05:35] EKD: All of those things we’ll be able to
do with our fully fleshed out atmospheric
[05:38] flight in place.
[05:39] It’s really going to bring the Star Citizen
universe together.
[05:43] Next up is our Animation Director, Steve Bender,
with updates not only on the ship’s animations
[05:49] but also on the Persistent Universe.
[05:50] Steve Bender (SB): Last week what you saw
was ... you saw some animations that we showed
[05:55] for the enter and the exit of the ships.
[05:58] For the upcoming milestones what we’re working
on is … we’re working on taking all of
[06:02] that motion capture, that we shot about a
month ago and we told you about previously,
[06:07] and we’re getting that into each of those
ships.
[06:10] And the first ships that you’re going to
start seeing that on are the Hornet and the
[06:14] Super Hornet, and the Freelancer.
[06:16] So for the Persistent Universe we’re also
working on “life animations”.
[06:20] Things such as behind the bar, at a booth,
sitting in chairs, leaning against walls.
[06:28] Various things within the Persistent Universe
that are going to give the whole thing life
[06:32] … just in … on the planets in general
and things like that.
[06:36] EKD: The faster speed of our “enters”
and the new life they are breathing in the
[06:39] Persistent Universe it’s really going to
bring everything to … well, alive!
[06:44] Our final update for the Los Angeles studio
is the update to the male base model.
[06:49] So here’s our Character Art Director, Josh
Herman to walk you through some really exciting
[06:53] updates.
[06:54] Josh Herman (JS): So after finishing up the
female sculpt we really wanted to give the
[06:58] male the same level of quality.
[07:00] So James Ku, who also did the female, did
another pass on the male.
[07:04] He did a new high poly sculpt, new low poly,
new texturing (which he’s in the middle
[07:08] of right now using MARI).
[07:10] It’s looking really, really good.
[07:12] We just wanted to give the male the same quality
that the female did.
[07:17] So all the new … this new male as you’ll
see we’ve really focused on the hands because
[07:22] being in first person we really want to make
sure that all that looks really good.
[07:26] So when you’re using … doing any animations
it looks super solid.
[07:30] He’s a little bit more fit.
[07:33] A lot of our characters are going to be in
the military so he should look like he hit
[07:38] the gym.
[07:39] He should be a fit guy.
[07:40] I think this new sculpt really does hit that
bar and I think it looks a lot better.
[07:45] And I’m really excited for it and I think
we’ll have it for you guys soon.
[07:52] EKD: The base characters are looking really
terrific.
[07:55] And with the implementation next on the agenda
well it’s only a matter of time.
[07:59] Well that does it for Los Angeles for this
week.
[08:02] Thanks for stopping by and I’ll see you
all next time.
[08:03] Back In The Studio
[08:04] SG: It’s a cool update.
[08:05] So in other news the Free Fly just finished
up.
[08:09] Also BritizenCon happened this weekend just
gone in Manchester and check out these photos.
[08:15] And on top of that we had a PC Games magazine
cover that came out in Germany.
[08:19] CR: We did.
[08:20] SG: Yeah that Chris was there for so check
out the cover.
[08:21] Unfortunately it is in German so if you speak
German, great!
[08:24] If not there are some great translations out
there so check that out.
[08:27] CR: There are I think all our fans have already
translated it a dozen times in various places
[08:31] on forums, on reddit, wherever else.
[08:33] SG: There you go, and Austin Bar Citizen happened
and Tyler tells me that it was a very successful
[08:38] and a lot of fun so check out the pictures
on that.
[08:41] Gamescom party details, they just went out
to Concierge and subscribers.
[08:46] Tickets are going on sale in three batches:
Friday, Saturday, and Sunday.
[08:49] Sunday is the ticket batch for everybody so
hopefully everybody gets a shot at getting
[08:53] a ticket.
[08:54] We really look forward to seeing you there.
[08:55] We will have our Chris hosting the show.
[08:59] CR: As always
[09:01] SG: And also the Big Benny’s, we had quite
a bit of a reaction from the subscribers about
[09:06] the Big Benny’s t-shirts and the patches,
and a request to have more in some of the
[09:11] smaller sizes.
[09:12] So check out those, Alexis has organized that
for tomorrow at noon PST.
[09:16] CR: Who would have known noodles would be
so big.
[09:19] SG: I know, well actually it’s pretty cool.
[09:21] There’s a little clip on our youtube channel,
our Star CItizen youtube channel.
[09:25] Speaking of our Star Citizen youtube channel,
Wednesday we had the Subscriber Town Hall
[09:30] which was with our LA Character Art team.
[09:34] So that is available on our Star CItizen youtube
channel, and finally lets check it over to
[09:40] ship shape.
[09:41] Ship Shape: Reliant
[09:45] Randy Vazquez (RV): 2.5 is right around the
corner.
[09:51] One of the exciting things is going to be
the Reliant being flight ready.
[09:54] Now, Dave Hobbins actually hooked us up with
some really awesome concept art, and then
[09:58] the team around the world has been making
this ship come to life.
[10:01] Now the interesting thing about this ship
is its Xi'An technology influence, right?
[10:05] And we've only seen one other ship before
that's Xi'An and everyone knows it's the Scout.
[10:10] So, you know, these ships are multi-state;
they're transforming; they're unique; they're
[10:16] different; they fly different.
[10:17] Elwin Bachiller: So the Reliant is a ship
that I was really excited to get my hands
[10:20] on, because I think Hobbins did a great job
with the design.
[10:23] And I think the flight mode was pretty interesting
as well.
[10:26] So my team here in L.A., we did a lot of the
heavy lifting on the modeling and a lot of
[10:30] the preliminary animations, and of course
we had teams all around the world touching
[10:34] it and Austin doing animations and in the
U.K. doing textures for the materials.
[10:37] So we brought it all together here.
[10:41] One really cool detail about the Reliant,
which some people might not notice is, I mean
[10:45] obviously it has a vertical flight mode, but
because of the vertical flight mode the engines
[10:50] have reverse thrusts on the front side of
them that act as retro-thrust to slow the
[10:55] ship down.
[10:56] When it's in horizontal mode the front of
those engines are covered up.
[11:00] So in order to achieve retro-thrust we have
a shunting system that takes the thrust and
[11:05] redirects it to the front of the wings where
we open up flaps that function as retro-thrusts
[11:10] as well.
[11:11] So look out for those, those pretty cool.
[11:12] John Pritchett: You know leading up to this
point I've been working on are-factor for,
[11:16] for tuning for all of the ships, and so I
was able to work in the ability to support
[11:22] multiple flight states for our ships and we've
used that for the Reliant.
[11:25] And now that we have that we should . . that'll
open us up to do a lot of other ships with
[11:30] multiple flight states as well.
[11:31] Matt Sherman: When you're coming in for a
landing doing really close precision flight,
[11:35] you'll be flying in the horizontal mode of
the ship.
[11:38] And then when you've taken off cleanly from
a landing pad then you'll ... hey you're landing
[11:43] toggled, going to the vertical mode and have
the full performance of the ship available
[11:47] to you.
[11:48] So what this actually is going to mean is
we have our precision, our SCM and our cruise
[11:53] modes.
[11:54] So when you're in the horizontal mode you're
locked into precision.
[11:57] You don't get to go the top speed of the ship,
and it's very constrained in what you're going
[12:02] to be able to do movement wise, and we've
also made sure that you aren't going to accidentally
[12:07] pitch forward too quick and flip onto the
roof of your ship and blow up, because that's
[12:11] just not fun.
[12:13] So you'll, you'll take off and then you'll
hit N which is our new default key for toggling
[12:18] the landing mode, and then from there you'll
go into your full flight mode where you'll
[12:22] have the full performance of the ship and
your full SCM cruise speed, be able to go
[12:27] into quantum travel.
[12:29] Now there is one thing we did have to restrict
a little bit while you are in the flight mode
[12:33] and that's actually getting in or out of the
pilot or copilot seats.
[12:38] So just because of the space of the Reliant
cockpit, it's really tight in there when it's
[12:44] transformed, and so you will have to go into
your landing mode before either the pilot
[12:49] or the copilot can get out the seats.
[12:52] It may be something that we expand on in the
future, but for right now it's just how we
[12:57] were able to get the ship flying while also
having these transformational elements.
[13:02] Also into the future we're definitely hoping
to get it set up where horizontal mode can
[13:07] be a full speed capable mode of travel, but
we wanted to make sure we were at least delivering,
[13:14] hey, you've got this toggling transition state
for the flight ready even if one of the modes
[13:21] you don't get to have that full speed potential.
[13:24] So really looking forward to you guys getting
your hands on this ship in the upcoming patch.
[13:27] (RV): We're really proud of the Reliant and
the hard work that everybody at CIG has put
[13:31] into it.
[13:32] We cannot wait to see what you guys think
of it as well as we can't wait to see you
[13:37] guys out there flying it around.
[13:38] So hope you guys like it as much as we've
loved making it.
[13:42] MVP w/Tyler Witkin
[13:48] Tyler Witkin (TW): Hey there, Tyler Witkin,
Community Manager in the Austin, Texas studio
[13:50] here to bring you this week’s MVP.
[13:52] A huge congratulations to Glantor Enzo for
creating some awesome reference cards to assist
[13:57] in learning the updated ingame control scheme.
[14:00] These things are very useful.
[14:01] I went ahead and printed them out myself and
have them hanging right next to my desk.
[14:05] So congratulations again, you’re this week’s
MVP.
[14:08] Back to you guys.
[14:10] Behind the Scenes: GrimHex Clothing
[14:14] Josh Herman (JH): So, with 2.5 we have GrimHex
which is a new location for us, it’s totally
[14:21] different than everything else.
[14:22] It’s grungier, it’s dirtier, it’s counter-culture,
it’s unique to Star Citizen right now, we
[14:28] don’t have anything else like it.
[14:29] So, because of that we want to have unique
clothing and it should reflect the environment,
[14:35] it should be grungier, it should be dirtier.
[14:37] So, Jeremiah did a bunch of concepts for us
and we picked a couple and we’re going to
[14:41] use those as our starting point for GrimHex
and it’s only going to go from there.
[14:45] Jeremiah Lee (JL): The thought process for
the GrimHex clothing was to be something different,
[14:52] to show our fan base something different compared
to the one you see in Casaba or Port Olisar
[14:57] and we wanted you to see something you could
express yourself a lot differently through
[15:01] your clothing.
[15:02] Cheyne Hessler (CH): So I get the clothing
from Jeremiah, the concepts, taking his ideas
[15:07] and illustrations and bring them into the
game asset geometry.
[15:12] Using his designs I can create logos, illustrations
to make variations of our PU clothing the
[15:18] community can buy and wear and apply to their
characters.
[15:21] I can add in game wear and dirt to the clothing
to kind of give a variation as players need
[15:27] to wear it.
[15:28] JL: So, we looked at a lot of references like
Blade Runner, we also looked at a lot of street
[15:32] wear and also we’re introducing a little
bit more to the lore which is we introduced
[15:39] some band t-shirts so you guys seen already
from our sneak peaks.
[15:43] We have the Leetos And we also have the Gutter
Wash, so we designed some band t-shirts, some
[15:50] of them are a little more explicit than others
as you can see but just to spice things up
[15:56] a bit and having just the same design language
and forms and shapes tend to make things a
[16:02] little boring.
[16:03] So, we did the opposite then what’s in Casaba,
so we did a lot grunge, a lot of angular shapes
[16:12] and a lot of like, ‘I don’t care’ that
type of expression.
[16:18] We wanted to show that through our clothing.
[16:20] CH: Because the clothing is the GrimHex kind
of outlaw community, I choose varying dark
[16:28] saturated colours to kind of emphasize what
the logos are and kind of how the clothing
[16:34] appeals to that certain category of our universe.
[16:38] So, based on Jeremiah’s signs and GrimHex
clothing, a lot of t-shirts relate to certain
[16:47] bands that are in our universe like Gutter
Wash and the Leetos.
[16:52] So, if you ever wore a band t-shirt, they’re
going to be darker colours…
[16:57] reds, greens and have a lot of skulls on them.
[17:01] JH: So, we have a lot of cool new stuff, we
have some new combat stuff, some cyber punk
[17:07] stuff and we’re just going to kind of keep
building on that library but it’s not cool
[17:11] just because of GrimHex, this is the starting
point for everything.
[17:15] This is the starting point for all our future
locations, so every location you go to in
[17:20] the future is going to have it’s own unique
clothing.
[17:22] So, you can go anywhere in the universe and
you’ll have unique clothing and people will
[17:26] know where you got that from.
[17:28] Outro
[17:29] SG: Be sure to tune into Reverse the ‘Verse
tomorrow morning at 11am Pacific on Twitch.tv.
[17:34] We have a new and improved format where we’re
going to have Eric Kieron Davis as the host
[17:38] and two special dev guests who were featured
on today's show.
[17:42] So come check that out, and ask your questions,
it will be like a Q&A format and a bit of
[17:47] a community update at the end.
[17:49] So do that and as a little side note, we would
like to wish Ben Lesnick a very, very speedy
[17:53] recovery and we want you back in the office
as soon as you can, but looking after your
[18:00] health first.
[18:01] CR: Health first, but it would be good to
have you back Ben.
[18:03] So we’re glad you’re doing better and
best wishes from everyone here, and I’m
[18:08] sure the community too.
[18:10] With that, that’s the end of the show.
[18:12] As always we need to thank subscribers for
making this show possible in the first place.
[18:15] I would also like to thank backers out there
for enabling us to be building the game of
[18:21] all our dreams.
[18:22] All the devs that are making it, all you guys
out there, we’re building something incredible
[18:25] and special that no publisher would ever allow
you to be able to build, and that wouldn’t
[18:29] be possible without everyone that has backed
the game so far.
[18:31] So hopefully you like the new format and we’ll
be doing a lot more of this.
[18:36] I’m pretty excited by it, it’s really
great to show everyone what we’re working
[18:39] on and we’ll see you next week.
[19:09] Bye.

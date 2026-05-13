# Star Citizen Live Gamedev: Outlaw Lifestyle

**Video:** https://www.youtube.com/watch?v=yLnJKIuc8e8
**Date:** 2021-10-29
**Duration:** 58:35

## Transcript

[00:02] [Music]
[00:03] [Laughter]
[00:06] [Music]
[00:11] italian
[00:13] spiderman
[00:14] wow
[00:21] [Music]
[00:37] [Music]
[00:39] spiders
[00:41] [Music]
[00:45] [Applause]
[00:48] [Music]
[00:49] hey everybody welcome to star citizen
[00:51] live
[00:53] spider-man
[00:56] i'm italian spider-man i'm your host
[00:57] jared huckaby uh it's halloween weekend
[01:01] and i
[01:02] i didn't feel like doing count disco
[01:04] this year so so
[01:06] this is this is what you end up with
[01:09] sorry everybody
[01:10] uh welcome to star citizen live game dev
[01:13] outlaw lifestyle uh if you've never seen
[01:16] star citizen live before it's where we
[01:17] take about an hour out of the end of our
[01:19] week hang out with our developers and
[01:22] either discuss a little bit of our
[01:23] development or showcase a little bit of
[01:25] our development
[01:26] this week's episode is a little
[01:28] different uh
[01:29] if you remember from citizencon uh that
[01:32] just like two weeks ago i think uh we
[01:35] had a whole bunch of different showcases
[01:36] going on one of those was a lovely uh
[01:40] uh josh van zulen uh showing his process
[01:44] of creating the
[01:46] interiors of the outlaw space stations
[01:49] now josh because he came prepared and is
[01:53] wonderful at his job created an entire
[01:56] hour-long presentation for us and then
[01:58] when we fit it in with the rest of the
[02:00] day we're like you got five minutes you
[02:02] got five minutes so we uh we slaughtered
[02:05] the heck out of that set out of that
[02:07] that segment for for sizzicon but he's
[02:09] back he's back today uh where's where's
[02:12] my screen saying josh how you doing man
[02:15] doing all right how are you doing man
[02:18] i i i'm
[02:20] bring me
[02:24] i considered doing the voice the entire
[02:25] time and i'm like no that's that's
[02:28] i was about to say like i was kind of
[02:29] expecting it but no no no no no
[02:33] all right so so josh uh outlaw space
[02:36] stations are
[02:38] a big uh feature of the upcoming pyro
[02:40] system um
[02:42] they are they are uh
[02:44] some of the they're few and far between
[02:46] in the system but
[02:48] so that means that when you encounter
[02:50] them they're incredibly important they
[02:51] are they are life throughout the verse
[02:54] so uh at this point because
[02:57] this is your show here uh i'm gonna turn
[03:00] it over to you let's just jump right
[03:02] into it uh what are we doing today
[03:05] sure absolutely so um for those of you
[03:08] who who didn't tune in to sitcon um i'm
[03:11] josh vanzalin principal environment
[03:13] artist here at cloud imperium games and
[03:17] basically what we're gonna do is we're
[03:19] going to expand on
[03:22] that talk that we did at sitcon a little
[03:24] bit so it was only like a tiny snippet
[03:27] of what we really had there so we're
[03:28] gonna tread like some of the same ground
[03:31] but it's going to make a lot more sense
[03:33] in the broad scheme of things
[03:35] and uh we're going to go into a lot more
[03:37] depth in regards to the actual
[03:39] development process
[03:40] uh figuring out how we actually start
[03:42] these locations and build them out
[03:45] and
[03:46] figure out kind of
[03:47] these really key aspects along the way
[03:49] so like certain things like
[03:52] uh figuring out
[03:54] uh
[03:55] what the art direction is for a starting
[03:57] point right so we have key bits of art
[03:59] that we're trying to actually establish
[04:01] and uh then reapply that into the actual
[04:04] game setting
[04:05] and then finding out where there are
[04:07] holes within the art style itself so
[04:10] maybe the concept team or the art
[04:12] director hadn't necessarily thought
[04:14] about how
[04:15] the art style would work in this one
[04:16] particular instance or how it would
[04:19] particularly combine with the game
[04:21] design that we're actually needing to
[04:23] put in there because we are making a
[04:24] game
[04:25] and then also figuring out not only the
[04:29] um
[04:30] only the just the general workflow for
[04:32] the location but what the limitations
[04:34] are in terms of what tech we have
[04:36] available to us
[04:38] how much physical stuff we can put in
[04:40] the location and uh then just like
[04:43] figuring out those real
[04:45] problem areas where we're going to run
[04:46] into issues and then address those and
[04:49] then react to those and then try and
[04:50] find you know creative solutions to to
[04:53] problems so this is the the earliest
[04:56] part of the development process
[04:59] just after concept art so this is
[05:01] pre-production on the actual location
[05:03] and um
[05:05] basically everything you'll see here is
[05:08] not
[05:09] basic it's not exactly what you'll see
[05:11] in the final product but it is a very
[05:14] solid foundation for figuring out what
[05:16] we actually will need to do
[05:18] and some of this stuff will actually
[05:19] survive well and truly into into the
[05:22] final
[05:23] product for sure
[05:24] um
[05:25] this is my first time seeing this for a
[05:27] while so it's it's a little bit of a
[05:29] nostalgia trip because uh uh it's moved
[05:32] on quite a bit from that from this point
[05:34] but um it's there's still a lot of
[05:36] elements that are fairly similar right
[05:38] so it's not a wasted opportunity or time
[05:40] within development's actually incredibly
[05:42] critical for figuring out how we can
[05:45] build these things in a time efficient
[05:47] manner
[05:48] as efficiently as possible
[05:51] and whatnot so
[05:52] without further ado let's just dig in
[05:54] right
[05:55] so
[05:56] what you can see here on on my screen
[05:58] right now is something we're all fairly
[06:00] familiar with this is the stanton
[06:02] systems
[06:03] rest stops so one of the food courts
[06:05] here what we're going to do is we're
[06:06] actually going to use this as a base
[06:09] the the idea here being that we can take
[06:11] um well the pirate system which is and
[06:14] has a lot older space stations here
[06:16] maybe they were developed by the same
[06:18] corporation and whatnot and they're not
[06:20] you know every corporation tries to save
[06:21] money here or there um
[06:23] and
[06:24] they've used the exact same module in
[06:26] the sensor system or in pirate or vice
[06:28] versa whichever came first
[06:30] uh the pyro systems ones being not as
[06:32] well maintained of course but
[06:35] this is going to be our base so we're
[06:37] going to see how we can start to get
[06:39] some easy wins without having to
[06:41] completely redesign uh all of the
[06:43] modules that work already with our
[06:46] procedural system right so what we're
[06:48] going to do
[06:49] um and fingers crossed this doesn't
[06:51] crash is i'm going to turn off this
[06:53] version
[06:54] and um just quickly
[06:57] i'm going to delete it
[07:04] and then
[07:05] get rid of alright as well by alright
[07:10] and then turn on our one so
[07:14] this is kind of what we opened on at
[07:16] sitcom so this is
[07:18] basically the exact same thing but what
[07:21] we've done is we've grabbed every single
[07:23] brush or mesh within the scene and
[07:25] dragged up the wear to the maximum level
[07:27] on it right so the idea here being that
[07:30] we needed to really see
[07:32] whether or not we needed to go in and
[07:34] make a brand new material set for all of
[07:36] these panels on the sides here or
[07:38] whether or not we can get away with just
[07:40] using the existing texture sets right
[07:42] it's it's the question of do we actually
[07:45] have to invest
[07:47] time and resources into developing
[07:49] something that could potentially take
[07:50] months of work for an artist or can we
[07:53] just use what we already have
[07:55] and fortunately so far uh the answer is
[07:58] we can pretty much use exactly what
[08:00] we've got here so far right there's a
[08:02] few little additions here or there which
[08:04] we'll get into a little bit later on
[08:05] where you can see that we've uh had to
[08:08] go in and make a few more materials but
[08:10] it's substantially less than what we
[08:11] would have had to if we were making a
[08:13] brand new material set right so
[08:16] cool so that's basically where we are
[08:17] here what we've done is we've gone
[08:19] through and we've just stripped out all
[08:20] of this essential or all of the prop
[08:22] work that was done in here originally
[08:23] and we're just trying to keep it uh down
[08:26] to its original shell as much as
[08:27] possible
[08:29] another thing on top of this is what
[08:30] we've done is that we identified pretty
[08:32] early on that uh the the optimization in
[08:35] this area could have been a lot better
[08:37] and so we've gone in and we've actually
[08:39] uh tightened up a lot of the things
[08:41] especially around this center area here
[08:43] so we've we've added a lot of things
[08:45] like we've added these areas basically
[08:47] and these areas is is how we kind of
[08:49] control occlusion volumes within our
[08:50] game you'll see a lot more of that
[08:52] further as we go on as well but this was
[08:54] one of the things we super early found
[08:56] out about
[08:58] and just addressed here so
[08:59] these will um
[09:01] at this level run a lot nicer than the
[09:04] old ones but uh we're putting a lot more
[09:06] into these so ultimately it's a
[09:08] balancing act right
[09:10] cool so
[09:12] from this point uh we're going to start
[09:14] to try and establish some of the the key
[09:17] concept art that we had so
[09:19] what
[09:20] what we were identified really quickly
[09:21] with this stuff is that
[09:23] it's really important to start from
[09:25] a base of just like
[09:27] complete darkness when you're when
[09:28] you're building these things so right
[09:29] now i've got it's got working lights on
[09:31] and i'll show you exactly why right so
[09:34] um
[09:35] up here we have all of this roof
[09:37] that is
[09:38] quite easily visible with the working
[09:40] lights on but ultimately when we're
[09:42] actually
[09:44] in the game with the correct lighting so
[09:45] if i turn on the lighting
[09:48] and turn off our working lights
[09:54] you can see that we can't see the roof
[09:55] at all
[09:56] so
[09:58] this is super important because that
[09:59] means that we don't need to spend you
[10:02] know days and days modeling all of this
[10:05] intricate kind of pipe work and
[10:06] machinery that we can go and put up in
[10:08] the roof right we can just let it fall
[10:10] into darkness
[10:12] and and it's pretty good right
[10:14] worst case scenario if we did find that
[10:16] we needed to like do some dressing work
[10:18] there we can do some minimal work but
[10:20] it's mostly in darkness so we we get
[10:23] away from it right it's about spending
[10:24] the time where you need to spend the
[10:25] time
[10:27] so
[10:28] we're getting a lot of mood that's
[10:30] coming through right here right now and
[10:31] this is very close to what we had in in
[10:34] one of the concepts that we were looking
[10:36] at
[10:37] what we've got is a big key light big
[10:39] area key light coming up from the top
[10:41] left here that's just shooting through
[10:42] everything we've got some particles
[10:44] happening some rain
[10:46] and we've got a little bit of fire over
[10:48] the side here which is just floating out
[10:49] in space
[10:51] so
[10:52] this is already starting to look nice
[10:54] we've got another light over here the
[10:55] idea here was that
[10:57] we didn't want the light to touch the
[10:59] second level we wanted to keep it in
[11:00] this level so
[11:02] as these two levels start to meld
[11:04] together in terms of lighting because
[11:05] we're actually going to have a market
[11:06] down here
[11:07] you're going to get a whole bunch of
[11:08] like warmth and different colors down
[11:10] the bottom and then you're going to get
[11:11] this stark cold difference uh with the
[11:14] area above because these space stations
[11:16] are
[11:18] they're pretty much not working right
[11:20] the life support isn't there there's
[11:22] absolutely no utilities and there's
[11:23] pretty much no lighting right and the
[11:25] lighting that is there is like only
[11:28] being held together with duct tape
[11:30] pretty much
[11:31] so
[11:33] in general everything's really cold
[11:35] apart from where people are trying to
[11:37] live and those places are premium real
[11:39] estate right
[11:41] so
[11:42] um
[11:44] moving on from that
[11:46] we're going to go in and we're just
[11:47] going to add in a little bit of dressing
[11:48] with some cables here so
[11:50] this is just adding in a little bit more
[11:52] of that you know reinforcing the fact
[11:54] that they've had to go in and
[11:55] jerry-rigged this thing to make it you
[11:56] know remotely habitable right by snaking
[11:59] through all of these cables throughout
[12:01] the entire space station to you know
[12:03] maybe power heaters
[12:05] powered portable life support systems or
[12:07] or anything of the sort right maybe it's
[12:10] just an open like one of the automatic
[12:12] doors that needs to have
[12:15] power powered to it right so they're
[12:16] sneaking all these things from temporary
[12:18] generators all the way through the
[12:19] location right
[12:22] so that's what we're thinking about here
[12:24] um and then another thing and this is
[12:26] what i mentioned before is that um
[12:28] this
[12:29] right now this picture here apart from
[12:31] the glows that we're getting from the
[12:32] marketplace is pretty much straight on
[12:34] point with with the concept art that we
[12:35] were given for the location but one
[12:37] thing that was not accounted for in the
[12:39] concept art is that
[12:41] this area as a marketplace
[12:44] is going to have this dynamic between
[12:46] the normal people downstairs at the
[12:48] market who are buying and selling stuff
[12:50] and then the gang who is actually
[12:52] controlling
[12:54] these locations right so we wanted to
[12:56] create this structure where
[12:58] the people down the bottom are not
[12:59] oppressed but like there's this ever
[13:01] looming gang presence
[13:03] that they're there right so the gangs
[13:05] are all up in this top area
[13:07] and uh have kind of made it like their
[13:09] main hideout
[13:11] so
[13:12] yes i'm sorry before you go do you want
[13:14] to explain the rain
[13:16] at this point
[13:17] okay yeah i can explain the rain
[13:20] this will become a little bit more
[13:22] apparent as as we start like turning
[13:24] things on later on but the rain is uh
[13:28] this as a disclaimer it's way too
[13:30] intense right now right
[13:31] and um
[13:33] the idea is that this is um there's such
[13:36] a stark kind of heat difference or
[13:39] temperature difference in this space
[13:41] when we have the market downstairs and
[13:43] uh this huge volume basically we have
[13:46] all of the steam from the markets people
[13:48] cooking things and whatnot all rising up
[13:51] to the roof and then condensing on uh
[13:54] the roof itself bits of machinery lots
[13:56] of the go to work or or cables and
[13:58] whatnot and uh then just slowly dripping
[14:01] down and
[14:03] ultimately potentially being collected
[14:05] by by the people living in the station
[14:07] right because water is a valuable
[14:08] resource
[14:10] and
[14:12] basically
[14:13] it needs to well obviously it wouldn't
[14:15] be as intense as it is right now but
[14:17] also we want to introduce a little bit
[14:19] of frost into it as well because some of
[14:20] it would technically freeze as it comes
[14:22] down because it's cold enough
[14:24] um so this is basic the reason why we've
[14:27] got this here is that we can just
[14:29] explore that idea and see how it would
[14:31] feel within a space like this and it's a
[14:33] mental note as well to the the vfx team
[14:36] that when they come in and do their pass
[14:38] because vfx haven't touched this this is
[14:40] just me finding particle systems
[14:42] randomly throughout our library
[14:44] the vfx guys can go in and go oh they
[14:47] want rain here okay i'll hit up the the
[14:49] artist why they did that and then we can
[14:51] figure out the logic behind it and then
[14:54] they can do a feasible
[14:56] particle effect for it right right it's
[14:58] basically a marker for some for another
[15:00] team down the line to be like hey you
[15:02] need to fix this
[15:03] yeah absolutely and to just validate it
[15:05] with with art direction and and cr right
[15:07] because ultimately if if you show this
[15:10] to
[15:11] the to the directors and they go what
[15:13] what the hell why is there rain that's
[15:15] so stupid
[15:17] then i want to know about it as early as
[15:18] possible right because this dictates a
[15:21] lot of the the work that goes into the
[15:23] environment narratively and artistically
[15:25] so
[15:26] sorry for derailing you can go it's all
[15:28] right
[15:30] um
[15:31] but yeah so
[15:32] in terms of the gang upstairs
[15:35] one of the things we need to do is we
[15:36] need to just create a gated experience
[15:39] for those guys where
[15:41] if you are not of a certain reputation
[15:43] with the gang you don't have access to
[15:46] those spaces right so
[15:48] one of those things is adding in a
[15:52] checkpoint over here so if you're in
[15:54] favor with the gang you'll be able to go
[15:55] through this checkpoint if you're not in
[15:57] favor then you won't
[15:58] um you'll probably get attacked you
[16:01] probably shouldn't be on the station to
[16:02] begin with if you're not in favor um if
[16:05] you're neutral then
[16:07] you won't get in but they won't kill you
[16:09] right
[16:10] so anyways it's kind of just a strong
[16:12] point for them to defend their main hub
[16:15] which is going to be behind them here so
[16:17] what i've gone in and done is just take
[16:18] one of our existing catwalk sets so i'm
[16:20] going to turn on our working light so we
[16:21] can see it a little bit better
[16:24] uh so this is an existing catwalk set
[16:26] that we've already had with within the
[16:28] game at the moment and the reason we're
[16:30] using this because it's a little bit too
[16:31] chunky at the moment it's just to feel
[16:33] out whether or not this is something
[16:35] that we can you know viably use
[16:37] uh in in this space right now or if we
[16:40] have to actually make a brand new
[16:41] catwalk set right
[16:42] and
[16:43] what we've discovered is that this is
[16:44] actually a little bit too chunky to like
[16:46] a little bit too substantial for the
[16:48] gang to actually use within this
[16:50] location
[16:51] and uh so
[16:52] we've actually taken measures now in
[16:54] development where we're having artists
[16:56] go in and make alterations to the set so
[16:59] that we can make it look a little bit
[17:01] more
[17:02] haphazardly put together
[17:04] right without a professional installer
[17:06] coming in and doing this for them right
[17:09] so this was a very important thing to
[17:11] kind of establish and figure out
[17:13] is this something we can get away with
[17:14] the answer is not really so we're we're
[17:17] going in and making it adjustments to
[17:19] that right
[17:20] so
[17:21] past this we're going to go in and add a
[17:23] little bit more dressing work here so
[17:26] one of the one of the artistic intents
[17:28] that we established really early on in
[17:31] production is that um
[17:33] ian the art director really didn't want
[17:35] to see the walls as much as possible so
[17:38] um you'll see a little bit more of this
[17:40] as i go in but we're starting to cover
[17:42] it up with a lot more of these soft
[17:44] surface elements right which is also
[17:46] relating a lot more to
[17:47] the culture that we have on the the
[17:49] planets themselves like you would have
[17:51] seen like there's a lot quite a lot of
[17:52] soft surface elements inside the outputs
[17:54] that we have on those planets
[17:56] as well
[17:58] so it's kind of like creating a
[17:59] relationship here as well but it also
[18:01] helps us cover up a lot of the original
[18:03] walls within the space station itself
[18:04] right so we're adding in a lot more of
[18:06] that what we've gone in and done as well
[18:08] is adding in like these like kind of
[18:10] barriers that kind of keep like kind of
[18:12] a bunker vibe from inside so you get
[18:15] like a little slot here which you can
[18:17] shoot through and a few cover points
[18:19] here
[18:20] where they could potentially take
[18:22] someone out who was charging in if a
[18:24] gang takeover decided to take place
[18:26] right
[18:27] so we got a few of those things
[18:29] um i'm going to turn off our lights
[18:31] get that mood back in
[18:33] and then so
[18:34] now generally during this process i'd be
[18:36] doing a lighting pass but for the sake
[18:38] of simplicity here i'm just going to
[18:39] turn it on
[18:40] so this is the lighting that we've gone
[18:43] for the in for this place in particular
[18:46] one of the things that
[18:48] we wanted to get across here is that
[18:50] it's
[18:51] not a comfortable place to really be
[18:53] standing um as is as is evident by my
[18:57] little um
[18:59] scene here with the scale refs
[19:02] so one of the ways that we've done that
[19:03] is by introducing these red lights
[19:05] around the place and um these are
[19:07] actually serve double duty these are
[19:09] also portable heaters so they're keeping
[19:10] people warm within the cold environment
[19:12] but they also give us that little bit of
[19:14] red light which is a little bit menacing
[19:16] right
[19:17] on top of that we've got floodlights
[19:20] that are just like blinding people as
[19:22] they come around and there's a lot of
[19:23] forward-facing lights on the actual
[19:26] uh checkpoint itself right
[19:28] so we're kind of creating this really
[19:30] cool mood
[19:31] and uh ultimately
[19:33] trying not to impact the original
[19:36] keyframe with our concept art too much
[19:38] which is it's being fairly successful
[19:40] here we're getting a little bit of a
[19:41] call out with the light but it's
[19:42] actually not too bad so we're actually
[19:45] being fairly successful in this regard
[19:48] cool
[19:49] so
[19:50] on top of that
[19:52] there's there's still a few things
[19:54] missing
[19:54] from this image in particular so i
[19:56] mentioned that we wanted to not see the
[19:58] walls as much right
[19:59] and one of the ways that we're doing
[20:01] that on on power stations is through the
[20:03] use of like uh graffiti right and we've
[20:06] used graffiti a little bit in the game
[20:08] so far but we've not used graffiti to
[20:10] the same degree that we're going to be
[20:11] using graffiti here so
[20:13] we wanted to
[20:14] um
[20:17] basically
[20:18] cover everything in graffiti the
[20:21] graffiti you're gonna see right here
[20:22] take it with a pinch of salt it's not
[20:24] like the actual
[20:26] final art stuff this is just stuff that
[20:27] we've thrown in just to see if what
[20:31] the way we envisioned it would work
[20:32] would work so
[20:34] don't don't take it too seriously so
[20:38] you can see the rest and relax logo up
[20:39] here on the wall if i turn on our
[20:41] graffiti layer here you can start to see
[20:43] it starting to get a little bit occluded
[20:45] by a lot of this graffiti right we've
[20:47] also got this wall down here which is
[20:49] completely disappear so if i toggle on
[20:50] and off
[20:52] you can see it's like very much like
[20:54] almost camouflaged in if i turn around
[20:56] as well we've got this wall back here
[20:59] you can see the difference that that
[21:00] makes and it kind of disguises the the
[21:03] actual building set that we're using not
[21:05] that we necessarily want to hide it but
[21:07] it creates a variance within the
[21:09] environment enough that
[21:10] again it means that we don't have to
[21:12] create completely brand new assets and
[21:15] it gives us this unique art style that
[21:17] is different to any other location right
[21:20] it's also gone in and added just like a
[21:22] few bits of variants along the floors
[21:24] and we've got some emissive
[21:27] logos that the gangs
[21:29] they like to use emissive paints for all
[21:32] of their um graffiti and whatnot so
[21:34] we're going to get a lot more of that
[21:35] stuff in as well
[21:36] here it's pretty early so i won't show
[21:38] too much of that but
[21:40] so yeah if
[21:41] basically
[21:43] if graffiti was our bread then um
[21:47] this next thing is going to be our
[21:48] butter and that is
[21:50] rubbish so
[21:52] rubbish is super integral on the stage
[21:54] space stations like i said before like
[21:56] these they're not well kept at all no
[21:59] one there's no real administration apart
[22:01] from i guess you could say the gang the
[22:03] gang doesn't care they just as long as
[22:05] like stuff works and they get their
[22:06] money at the end of the day that's
[22:07] pretty much it so things just get kicked
[22:09] to the side
[22:10] and um just slowly built up over time
[22:13] right so we're going to get big pout uh
[22:15] big piles of of rubbish that happen
[22:17] there's going to be bottles and broken
[22:18] things everywhere not the most sanitary
[22:21] place to be in the first row
[22:24] the thing with with um
[22:27] with the rubbish and and you'll start
[22:28] seeing this more as we keep going is
[22:30] that it's actually quite a difficult
[22:32] thing to get the balance right so
[22:35] we actually have to create it's
[22:37] i say sculpted it sounds arty fatty but
[22:39] it's it's pretty much for sculpting the
[22:40] way that we're putting these
[22:42] uh
[22:43] rubbish clusters around so we have to
[22:46] figure out
[22:47] how it would logically gather up within
[22:49] the environment and be pushed to the
[22:52] side or people be
[22:55] you know easily be able to put it
[22:57] somewhere so they just put it there
[22:58] versus here or whatnot right so we're
[23:01] thinking about that and you can kind of
[23:02] start to see that here where the pathway
[23:04] is straight through the middle of this
[23:05] barrier here it's mostly clear and then
[23:07] we've got this build up on the side
[23:09] right same thing here as well it's built
[23:11] up here and then the main pathway is is
[23:14] kept relatively clean
[23:17] so
[23:17] that's pretty much rubbish now the
[23:19] rubbish thing
[23:21] is
[23:22] a very um
[23:25] well it raised a lot of alarm bells as
[23:27] we were doing this right and the reason
[23:29] being is that
[23:31] uh it's an insane amount of objects to
[23:33] start plastering around everywhere right
[23:36] and um
[23:37] our entity counts in the game at the
[23:39] moment are already so high that where
[23:41] we've we can't add anything more into
[23:43] the game without taking stuff out right
[23:45] so we want to avoid that as much as
[23:47] possible and also it just means that in
[23:50] general the game runs faster if you're
[23:51] not if you're loading in less objects uh
[23:54] as a general rule of thumb right these
[23:56] are these are what are called draw calls
[23:57] technically uh
[23:59] normally and um
[24:01] we want to address them as much as
[24:02] possible right so one of the examples of
[24:05] like these uh rubbish piles just really
[24:07] not doing us any favors is back here so
[24:10] i'll turn on my working list so we can
[24:11] see this again
[24:13] so we've got a huge pile of rubbish here
[24:15] right
[24:16] and
[24:19] can i interact with you yeah so you can
[24:21] see that we have like a huge amount of
[24:23] objects all contributing to this one
[24:25] pile of trash over here in the corner
[24:28] and
[24:28] it really just it doesn't need to be
[24:30] like this we could do this with just one
[24:33] object if we wanted to and we could
[24:35] combine a whole bunch of textures
[24:36] together and really reduce down that the
[24:39] cost of the individual asset
[24:40] individually this doesn't cost anything
[24:42] like say whatever but you start
[24:44] multiplying it across an entire space
[24:46] station you know hundreds of thousands
[24:47] of these assets
[24:50] you're not going to have a fun time
[24:51] right so this is
[24:53] this is us identifying a problem and
[24:55] then
[24:56] as we go into production uh the props
[24:59] team is actually going to go in and and
[25:00] create a kit for us where all of these
[25:02] are one object and it will be
[25:04] nice
[25:08] point here a little bit
[25:09] when he says you can't add things
[25:12] without taking things away it means that
[25:14] we've created these
[25:16] these these levels that have tens of
[25:18] thousands of objects and stuff like this
[25:19] and we figured out that's where the
[25:21] performance is now we have to get
[25:22] smarter and find new ways of doing it
[25:25] which is what he's discussing so you
[25:26] can't just add objects to a game
[25:29] infinitely any game in existence that
[25:32] all has a performance cost so we have to
[25:35] invent new processes and new procedures
[25:38] to make that efficiently so it's
[25:41] don't take one little sound bite out of
[25:43] context and take the whole thing
[25:46] so continue yeah
[25:48] absolutely i mean it's it's a thing that
[25:50] games have done forever right like you
[25:51] have like multiple objects baked down
[25:53] into one all the time
[25:55] so it's nothing out of the ordinary but
[25:58] uh yeah in our instance here we've not
[26:00] done
[26:01] such a substantial amount of rubbish
[26:04] as we are now so it's something that
[26:06] we've had to identify right
[26:08] so cool
[26:11] right now uh so let's go and explore the
[26:14] marketplace then
[26:16] so we'll go downstairs
[26:21] so
[26:22] the eagle-eyed among you probably would
[26:25] have spotted elroy's
[26:27] elroys has uh seen better days
[26:31] so
[26:32] one of the things when we're looking at
[26:34] these locations is we're asking
[26:36] ourselves okay how can we sell the
[26:38] narrative story within within them right
[26:40] and uh funnily enough
[26:43] elros was here
[26:44] and uh i needed more space to put the
[26:47] market in and um
[26:49] i can't remember it was me or someone
[26:51] else in a meeting uh just just joked and
[26:53] said why don't we just drive a forklift
[26:54] through it and so that's literally what
[26:56] i did
[26:57] i literally just drove a forklift
[26:59] straight through elroy's and that's
[27:00] given me so much more room to play stuff
[27:02] and it's narrative storytelling right
[27:04] it's like oh someone wanted more room
[27:06] which is the truth and just drove a
[27:09] forklift straight through it
[27:11] so this is like an easy win it's a bit
[27:14] of fun as an artist to do
[27:16] uh just to try to sell these things and
[27:18] it also serves the purpose of giving us
[27:20] more space within the environment as
[27:22] well we've also completely gutted our
[27:24] roys so we've got no furniture in there
[27:26] anymore
[27:27] and you'll see what we put in there in a
[27:28] sec
[27:30] so um from this point we've got a really
[27:33] open environment and um
[27:35] as in the same vein as what we were
[27:37] talking about with with the rubbish we
[27:38] need to consider
[27:40] our view lines and how many objects
[27:42] we're drawing onto the screen at any
[27:44] given point
[27:45] so what we're going to do is we're
[27:47] actually going to go and kind of
[27:48] subdivide this space up a little bit
[27:49] we're going to add in a few walls here
[27:51] and there blocking volumes
[27:53] and uh and whatnot and that will enable
[27:55] us to effectively cull large portions of
[27:58] the environment uh so that we can keep
[28:00] the frames up as much as possible right
[28:02] so this is a very critical thing to
[28:04] establish early on in the process
[28:07] so
[28:08] as you can see a few walls have appeared
[28:10] and a few blocking elements have
[28:11] appeared we've got a big wall back here
[28:13] which is funneling us into a certain
[28:15] point so you can see that we can you
[28:17] know basically not draw
[28:19] entire portions of of the marketplace
[28:22] here just with these walls same with
[28:24] this one back here so as we're
[28:26] approaching if this was to be an
[28:27] entrance into the marketplace we're
[28:29] doing the exact same thing we do have a
[28:32] big
[28:33] sign of that
[28:34] line of sight straight through the
[28:35] middle here
[28:37] so that would be you know maybe a thing
[28:39] that we'd bring out and say okay that's
[28:41] a concerning thing maybe we need to
[28:43] create another blocking volume or maybe
[28:44] offset these two volumes from
[28:46] uh one or these two barriers from one
[28:48] another right to to solve that these are
[28:50] the sort of things we're looking at and
[28:52] then alright itself has gone through a
[28:54] pretty major change and this is probably
[28:55] the most developed
[28:57] of all of them so we've actually gone in
[28:59] we've really subdivided el rose up heaps
[29:02] so this is actually going to become more
[29:03] of a slum so
[29:05] the mannequins are kind of giving it
[29:06] away a little bit in here
[29:08] but
[29:09] where we've got a room here and then
[29:11] we've got this alleyway that's running
[29:13] through here and then back here we've
[29:14] also got another room as well
[29:17] so and if i turn on our visory debug
[29:20] right let's talk about this a bit before
[29:22] you can see that we're starting to break
[29:24] up these into different different zones
[29:26] uh in in the production version of this
[29:28] environment we actually have this split
[29:30] up now uh but when we were doing this
[29:32] for sitcon it hadn't gotten to that
[29:35] point yet but all of these areas have
[29:37] their own colors associated with them
[29:39] which means that they're all in their
[29:40] own visit areas which means they can all
[29:42] be culled independently from one another
[29:44] uh which will just make the game run a
[29:46] lot faster
[29:48] in the at the end of the day
[29:50] cool
[29:51] so we've gone and done a little bit of
[29:53] that now we need to start getting in the
[29:54] actual marker vibe itself so a lot of
[29:56] stuff is going to happen right now
[29:58] and uh
[30:00] basically as i turn on the stalls here
[30:02] so
[30:02] the stalls are
[30:05] basically the whole reason you come to
[30:07] these markets right is that they sell
[30:09] every single type of little knick-knack
[30:10] whether it's good or bad quality the the
[30:13] food is suitably street food quality
[30:16] and um
[30:18] it's just you know it's like the most
[30:20] lively place
[30:21] within pyro itself right
[30:24] so
[30:25] we've gone in and we've really like
[30:27] tried to get in that crab street market
[30:30] vibe as much as possible
[30:32] one of the the things that we really
[30:34] needed to be careful about with these
[30:36] things is that uh while it's
[30:39] cramped and not a lot of room to go
[30:42] around and do stuff that there was still
[30:44] room to go around and do stuff right so
[30:47] one of the things that was
[30:49] raised as a concern immediately was that
[30:52] um the ai needed to be able to navigate
[30:54] this space right so we have a minimum
[30:56] space that which uh the ai can like pass
[30:59] through areas
[31:01] and we had to make sure that we were
[31:02] keeping that in mind when developing
[31:04] these spaces right so one of those was
[31:06] like this area here
[31:09] making sure that that is large enough
[31:11] that two ai minimum can pass one another
[31:15] and thankfully this this is after a
[31:17] little bit of adjustment right
[31:19] but also
[31:20] discovering uh that the the ai can't
[31:23] move under
[31:24] or if if the height if there's a height
[31:26] restriction as well right it's just
[31:29] something we didn't think about when we
[31:31] were making this is that the ai has a
[31:33] minimum height it makes sense when you
[31:34] think about it right they're not going
[31:35] to pathfind under somebody's bed you'd
[31:38] hope not at least
[31:40] so
[31:41] what we actually discovered is that
[31:42] these stalls themselves
[31:44] the roofs were so low that they were
[31:46] occluding the uh the navigation mesh
[31:49] here so
[31:51] that meant if we had two stalls facing
[31:52] each other literally ai couldn't walk
[31:54] down even though it met the minimum
[31:57] width
[31:58] uh requirements it didn't meet the
[32:00] height requirements so they literally
[32:01] couldn't walk past
[32:03] so
[32:04] we actually had to go in and address
[32:05] these legacy assets which well i say
[32:07] legacy they're not really but like
[32:08] they're from art corps so
[32:10] um they're a bit older
[32:12] we had to go in and readdress those to
[32:14] fix the navigation issues with them and
[32:16] uh
[32:17] yeah so that we could use them in this
[32:19] environment as well if we wanted to but
[32:21] it also means that as environment
[32:22] artists we can go in and go okay i need
[32:24] to make sure that my my roofs are
[32:27] at a
[32:28] reasonable height
[32:30] or any other
[32:31] kind of thing hanging around the place
[32:33] because we've got quite a lot of stuff
[32:34] hanging off the roof speaking of roofs
[32:37] so because we've got all of this rain
[32:39] happening within the environment
[32:41] or just water drops or whatever you want
[32:43] to call it
[32:44] they've gone in and actually started
[32:45] constructing a temporary roof as well
[32:47] this will aid in them being able to not
[32:50] only keep dry but
[32:51] collect the water that comes back down
[32:54] so
[32:55] what we what we'll do is we'll go in and
[32:57] we'll start putting little collection
[32:58] like buckets or or tubs or whatever
[33:01] around the place as well and where vfx
[33:03] come in they'll be able to do a whole
[33:04] bunch of really cool water effects
[33:06] around the place as well
[33:08] so that's really cool but one of the
[33:09] things that the main reasons other than
[33:12] that that we've done this roof stuff is
[33:14] that we really want to get a sense of
[33:15] parallax with with the actual cavity
[33:17] itself so
[33:18] as we look up through the space you can
[33:21] see that we're getting like a lot of
[33:22] different levels of depth within it
[33:24] right if i turn off my working lights
[33:26] you can start to see that a little bit
[33:27] better
[33:28] as well
[33:29] so you can see all of those different
[33:31] layers that we're getting within the
[33:32] environment
[33:35] that's ultimately what we're after we
[33:36] want to make you feel cramped but also
[33:38] understand that you're in quite a large
[33:41] cavernous space as well
[33:44] so that's why we
[33:45] we've gone in and done the roofs
[33:48] and um
[33:50] again that suffers from the same issue
[33:52] with with the rubbish like there's way
[33:53] too many objects that are making up the
[33:54] roof at the moment so we're going to
[33:56] have to go in and just create like
[33:58] merged versions of those where
[34:01] five entities go down to just one
[34:03] basically
[34:04] so it's a common theme of that
[34:07] throughout the entire environment
[34:09] so from here i'm just going to go in and
[34:11] uh just add a few props so just like
[34:14] some tables and chairs
[34:15] we've got a a planter fire happening in
[34:18] the background
[34:19] because um
[34:20] there wasn't any dumpsters i couldn't
[34:22] find any dumpsters on the original
[34:24] station dressing so that's a planter
[34:27] um
[34:29] and uh yeah so from this point we're
[34:32] we're missing a little bit of um
[34:35] lighting within the scene right so at
[34:37] the moment it's just being entirely lit
[34:39] by the stalls
[34:40] uh the stalls have actually progressed a
[34:42] lot further on from where they were
[34:45] um
[34:46] a while back so we actually have a
[34:47] lighting pass already done on them so
[34:50] they're they already have lights built
[34:51] in into them but um
[34:54] we're still not getting the exact vibe
[34:56] that we want we don't have any fog we've
[34:58] got areas like this which is going to
[35:00] complete darkness which is fine but not
[35:03] in the middle of a market right if
[35:05] people are walking around here and this
[35:06] is a high traffic area you'd expect it
[35:08] to kind of be lit up
[35:10] so
[35:11] like i mentioned before what we did
[35:12] upstairs we'd be doing this pass as we
[35:14] were you know figuring everything out
[35:16] anyways uh but again for the simplicity
[35:19] i'll just turn it on
[35:21] so
[35:22] as i mentioned in in the sitcom talk
[35:25] we're now getting the thickness that we
[35:27] need from the lighting and the
[35:28] atmosphere within within the environment
[35:31] the fog really helps bring in that like
[35:33] there's a lot of stuff happening here
[35:35] people are cooking food there's smoke
[35:36] from machines going from the fires even
[35:40] as well
[35:41] and whatnot it just helps us get a lot
[35:43] more of the vibe we're after within this
[35:46] within this environment as well and
[35:48] you'll also notice that this area here
[35:50] isn't falling into as much darkness as
[35:53] before now right
[35:55] cool all right
[35:57] and if i travel down here so you can see
[35:59] our alleyway that we were looking at
[36:00] before in elroy's is starting to feel a
[36:02] little bit more
[36:04] kind of i don't know dark and
[36:07] moody and a little bit scary i guess in
[36:09] a way
[36:10] so we're starting to get a lot more of
[36:11] that in now as well
[36:14] so another thing that was super
[36:15] important and a principle that we had
[36:17] within the within the environment um
[36:19] that we wanted to get in was this
[36:22] uh idea that
[36:24] this the station's got no power so power
[36:27] needs to be generated from somewhere
[36:29] and we we tried to combine this with the
[36:32] idea that the gang is asking for
[36:35] protection money so
[36:38] it's like you would pay your protection
[36:39] money which would give you power that
[36:41] sort of vibe if you know what i mean
[36:43] so
[36:45] what we have back here is a a generator
[36:48] room right so this room back here is
[36:50] going to be filled with a whole bunch of
[36:52] generators and we've got a little
[36:53] engineer area here as well uh which is
[36:57] cool potential for a gameplay if if we
[36:59] get that in
[37:00] and um it's just selling that narrative
[37:02] vibe right
[37:03] so
[37:04] with with that whole idea of us having a
[37:08] generator room uh we need to and and
[37:11] that is associated with the the stalls
[37:13] and people having to pay protection
[37:14] money we need a way of clearly
[37:16] uh
[37:17] displaying that throughout the entire
[37:19] environment right
[37:20] so what we've gone in and done
[37:23] is add in
[37:25] some cables to connect everything
[37:28] this is a lot
[37:30] of cables
[37:32] a lot
[37:33] a lot
[37:35] a lot of cables
[37:37] so
[37:38] the cables themselves was a a very
[37:41] interesting
[37:42] uh thing to kind of figure out within
[37:44] the environment because
[37:48] cables are inherently kind of hard to do
[37:51] when uh you have to place
[37:54] thousands of them
[37:55] because there's thousands of them
[37:57] and uh this space back here in the
[37:59] actual generator room itself
[38:01] this alone just to figure out i try a
[38:04] few designs different layouts see what
[38:06] worked this alone took me like an entire
[38:08] day of work just to do in editor just
[38:11] placing around cables figuring out what
[38:13] looks good and whatnot right trying it
[38:15] through a few different designs
[38:17] and
[38:18] ultimately
[38:19] it's it's just a lot of busy work that's
[38:21] hard to do um not it's not necessarily
[38:24] hard to do it's just it's not good on
[38:26] the system and by that i mean it's not
[38:29] good on the artist when they have to do
[38:30] a million clicks all the time placing a
[38:32] million cables
[38:34] it um we don't want everyone to get uh
[38:37] an injury right at work from doing that
[38:39] so
[38:40] we needed to come up for a solution for
[38:41] that and also to get the time down
[38:44] so
[38:44] we've we've done a number of things
[38:46] right
[38:47] uh
[38:48] which i'll get into in a sec now
[38:52] in in
[38:54] when looking at all of these cables
[38:55] right you can go okay yeah let's
[38:58] let's place a whole bunch of cables
[38:59] throughout the entire environment now
[39:01] there's a number of challenges that come
[39:02] with that
[39:03] one is that uh it's
[39:06] generally
[39:07] you don't want to be placing one cable
[39:09] at a time
[39:10] right because that's this is not going
[39:11] to happen so what we've gone in and done
[39:13] is we've actually clustered all these
[39:14] things together
[39:15] that means less clicks for the artist to
[39:17] actually go in and place these things
[39:19] and uh it also means
[39:21] less less draw calls so again keeping in
[39:24] mind the efficiency
[39:26] and uh
[39:28] it just makes it a lot easier to place
[39:30] now in terms of placing um
[39:33] in in game development generally
[39:35] cables and stuff have been done through
[39:38] a spline system right
[39:40] now unfortunately we don't actually have
[39:42] one uh in in the engine at the moment uh
[39:45] so we requested one we we asked like
[39:48] what's the potential of us actually
[39:49] being able to get one for these stations
[39:51] and um unfortunately tech came back and
[39:54] said we're actually prioritizing on
[39:56] these other things for that release so
[39:58] we can't get them in for that one so
[40:01] based on that right it's sad but uh it
[40:04] means that we also have to come up with
[40:06] creative solutions around those issues
[40:08] in development right
[40:09] so
[40:10] one of the ways that we've done that is
[40:12] by basically just creating the cable kit
[40:14] some of these cables are already
[40:15] actually used within the game itself so
[40:17] we didn't actually have to create too
[40:18] many more assets but it's just a kit of
[40:21] assets where instead of placing um a big
[40:24] spline throughout the entire environment
[40:27] we would actually be creating a modular
[40:29] kit so these cables would connect from
[40:31] uh point to point to one another just
[40:34] like you would like your your standard
[40:36] wall kit that we we might be using along
[40:38] the walls here or the floors or whatnot
[40:41] it's just with cables so like this
[40:42] section running down here is like made
[40:44] up of of two two segments of modular
[40:47] cable kit right the challenge comes
[40:50] when uh you try and make it not look
[40:52] like a modular kit
[40:54] right and that's what we really need to
[40:57] work out and and and figure out within
[40:59] the environment right
[41:00] and there's a number of ways we can do
[41:02] that right and this next thing uh we'll
[41:04] we'll
[41:05] contribute significantly to that
[41:08] now
[41:09] on the subject of also just adding in
[41:11] like
[41:13] heaps and heaps of cables we needed to
[41:15] find a way of
[41:16] reducing the amount of clicks reducing
[41:18] the amount of assets we're going and
[41:19] doing that and and adding those clusters
[41:21] of of cables definitely helps but we
[41:24] still weren't getting the level of
[41:26] density that we were ultimately after
[41:28] with the cables
[41:30] so what we actually did is we we went in
[41:33] and we took
[41:34] the
[41:35] uh
[41:37] the cables that we had made or this
[41:39] cable trim texture that we had made for
[41:42] the outposts on pyro and um
[41:45] created a 3d version of it and then
[41:48] transfer that 3d version to a flat
[41:50] texture right
[41:52] and what we're doing then is that flat
[41:55] texture of those 3d pipes we're then
[41:57] just creating like a shell
[41:59] around the actual 3d pipes within the
[42:02] environment
[42:03] to give us give us that extra layer of
[42:05] thickness so if i zoom in on this you'll
[42:07] start to see it just completely breaks
[42:08] down
[42:09] as as the parallax occlusion mapping
[42:11] just dies on on these cables here and
[42:14] this is how we're doing it right we're
[42:15] adding a significant amount of density
[42:17] and thickness by just having 2d cables
[42:21] throughout the entire uh length of
[42:24] of cable here right so that means that
[42:26] not each individual one of these isn't a
[42:30] is an actual cable that we have to place
[42:33] it's just one big mesh that just
[42:34] encapsulates the entire uh
[42:37] like i guess bunch of physical 3d cables
[42:40] and this really helps not only with like
[42:42] just reducing poly count within the
[42:44] scene
[42:45] draw calls but also stops artists from
[42:48] going insane which is ultimately a very
[42:51] important thing as well
[42:53] so these things are snaking all the way
[42:55] through the environment they're coming
[42:57] through here you can see we're mixing
[42:58] the 2d ones with 3d cables as well this
[43:01] is that like kind of slum area that
[43:02] we're talking about before
[43:04] and ultimately they will go through the
[43:06] entire environment as well
[43:08] so this was
[43:11] this area in particular was another
[43:12] example of like
[43:14] figuring out the minimum height for ai
[43:16] right this is the minimum height that we
[43:18] can have for a space and have ai
[43:20] navigator around it and uh as you can
[43:23] see we actually got two levels
[43:25] so we get a level on on below and above
[43:27] this creates a really nice dynamic
[43:28] within the scene
[43:31] so yeah
[43:32] that's cables and a little bit more of
[43:35] ai so
[43:36] from here what we're just going to be
[43:38] doing is is basically adding a little
[43:39] bit more
[43:41] of the moving elements within the scene
[43:44] so we're going to go in and add a little
[43:45] bit of vfx so this is adding in just
[43:48] like some heat haze a little bit of
[43:50] steam and whatnot these effects right
[43:52] now are just like the placeholder
[43:54] effects like we were talking about
[43:55] before with the rain
[43:56] uh they're just to sell the intent to
[43:59] the the vfx team and at least have
[44:01] something in there to show the directors
[44:03] in reviews
[44:04] and uh then ultimately when this gets
[44:07] pushed into production
[44:08] and the vfx guys come in they'll make
[44:10] you know actually good looking particle
[44:12] effects or use existing ones they may
[44:14] already have that i don't know about
[44:16] and um make it look spicy so
[44:20] we've got that in here we've got more
[44:22] fire happening i think in some places we
[44:24] have the occasional spark i think down
[44:27] here yep so we've got some of these
[44:28] cables shorting out or whatnot it's
[44:31] it's not very well made that's the idea
[44:33] right is that these things are so
[44:37] you look at it you just like i ain't
[44:38] touching that
[44:39] that's the vibe we're after
[44:41] so
[44:43] we've gone in and we've done a few a
[44:44] whole bunch of that now the other thing
[44:46] that we need to look at is um and this
[44:48] is a concept that we we really
[44:50] introduced and double downed on uh for
[44:52] orizon and that is uh the the moving and
[44:54] dynamic objects uh within the
[44:56] environment right so
[44:58] um in
[44:59] on arizon uh i i personally worked on
[45:02] the industrial platform providence
[45:03] platform and on that one we played
[45:05] around with two animations so we have
[45:08] the the crane animation which moves
[45:09] cargo around the platform and we also
[45:11] have the uh the engine display where it
[45:14] explodes out and tells you about the
[45:15] engine and stuff like that right that
[45:17] sort of stuff is super important to sell
[45:19] the life of an environment
[45:21] um
[45:23] and uh we we learn a lot doing those on
[45:25] orizon unfortunately for pyro it doesn't
[45:28] really make a lot of sense to have you
[45:30] know an engine display exploding or a
[45:33] crane moving around cargo at least in
[45:35] this specific setting
[45:37] so the route that we've actually gone
[45:38] down uh with introducing a lot more
[45:40] movement within our seams in that regard
[45:42] is through uh the the physics within the
[45:45] scene right so
[45:46] on ours and we played a lot around with
[45:48] cloth cloth that was like the first time
[45:50] that we really got
[45:51] proper amounts of physicalized cloth
[45:53] within the game itself and here we're
[45:56] pretty much achieving we're trying to
[45:58] achieve the next level of that right
[46:00] it's just not just the occasional flag
[46:02] everywhere it's
[46:04] like how many
[46:05] how many of these surfaces can we
[46:07] physicalize in an environment at the
[46:09] same time right the answer is not all of
[46:11] them
[46:13] as you probably would suspect but um
[46:15] we're trying to figure out how much we
[46:17] can
[46:18] um
[46:19] get away with within the space itself
[46:21] and on top of that we also have cables
[46:24] so we're bringing in this is the first
[46:25] time that we're bringing in physicalized
[46:27] cables so you'll be able to walk in
[46:29] um
[46:30] watch them move around as they get blown
[46:32] around in the wind and interact with
[46:33] them as a player as well
[46:36] now i've not turned it on because
[46:38] i don't want it to crash while i was
[46:39] explaining it so i'm going to turn it on
[46:41] now fingers crossed it doesn't crash
[46:44] so there we go
[46:45] so
[46:47] one of the reasons that we're going in
[46:48] and doing all of this stuff
[46:50] in pre-production right
[46:52] is that we want to figure out
[46:54] where the limits lie before we start
[46:57] making guarantees and cash and checks
[46:58] with directors and stuff like that right
[47:00] so
[47:02] when we're looking at like specifically
[47:03] the physics stuff part of that is the
[47:05] expense of it how much can we get away
[47:07] with within the environment itself and
[47:10] uh also just the general stability of it
[47:12] within the environment right so
[47:14] as you can see
[47:16] in the in this center top screen the
[47:19] the cable here is is not behaving itself
[47:21] very well
[47:23] so this is like an issue that we need to
[47:25] identify right is is that an issue with
[47:27] the physics system with the rope itself
[47:29] is there some sort of instability on the
[47:31] back end that we need to address
[47:33] is it something that i've done
[47:34] wrong right in this instance i'm almost
[47:37] certain it's something i've done wrong
[47:38] so
[47:39] um that's actually a good thing that's
[47:41] an easy fix i believe it's just clipping
[47:42] into another object so i just need to
[47:44] move it
[47:45] but as soon as i turned on the physics
[47:47] you may have also noticed
[47:53] oh it's not done at this time so this is
[47:55] a thing right one of the cables actually
[47:58] disconnected and fell through the entire
[47:59] level
[48:01] so that that's a bug that we need to
[48:03] actually address it's like doesn't like
[48:05] connecting to a certain surface we can't
[48:07] have physicalized items falling through
[48:09] the entire world that's just not um
[48:13] a good thing to have happen right we
[48:14] want these things to be stable and
[48:15] reliable
[48:16] and on top of that as this person comes
[48:18] through uh
[48:20] this area here you can see that we have
[48:23] the cloth interacting correctly with
[48:24] dynamic objects like characters right so
[48:26] making sure that that stuff works the
[48:29] settings we're using on the cloth
[48:30] entities themselves
[48:31] and the way that the physics calculation
[48:34] is handled on the back end is able to
[48:37] cope with that within the environment
[48:39] itself
[48:41] so this is kind of a larger topic uh
[48:43] especially when when in regards to to
[48:46] physicalized items right we want to have
[48:48] as much as this stuff physical as
[48:50] possible because it brings life to the
[48:52] environment and it's
[48:54] generally just kind of fun to mess
[48:56] around with in games i don't know about
[48:58] you guys but i'm always messing around
[48:59] with
[49:00] any physical item that i find in a game
[49:03] like i will kick it push it shoot it
[49:06] so which you can all do with this stuff
[49:08] right
[49:10] which is cool so yeah that's um adding
[49:13] in like a lot more physical elements
[49:14] within the scene if i go up here as well
[49:17] we've got another example
[49:20] of just some more hanging cables so
[49:23] a fairly static scene
[49:25] that just
[49:26] it just
[49:27] helps
[49:28] significantly like even though it's such
[49:29] a small part of the environment just
[49:31] adding in that little bit of movement
[49:33] is really good we also have another bit
[49:35] of a cloth barrier back here that if
[49:38] if these guys weren't sitting down here
[49:40] being lazy might give us a demo but
[49:42] they're not in this instance
[49:44] so
[49:46] yeah adding in a lot more of that
[49:48] dynamic movement it also helps us kind
[49:50] of sell
[49:51] specifically in regards to the cloth um
[49:53] helps us sell a little bit of the
[49:54] narrative vibe which is that they want
[49:56] to keep heat in areas right so they're
[49:59] not just putting this up just so that
[50:00] people can walk through
[50:02] like them and just oh yeah that was fun
[50:04] it's actually serving a narrative
[50:05] purpose of like keeping heat in this
[50:07] area and not in that area right it's the
[50:09] same thing with like you go to a shop
[50:11] and they'll have like these sorts of
[50:12] things
[50:13] like either they'll be to keep our flies
[50:16] or they'll be to keep heat in or out
[50:19] either or right
[50:21] so
[50:22] that's basically what we've got going
[50:24] here as well
[50:25] so yeah
[50:26] um
[50:28] so in general like we finished this
[50:30] pre-production step within our pipeline
[50:32] now and um we've learned quite a fair
[50:36] bit in regards to like how we need to
[50:38] construct these stations so like the
[50:40] biggest
[50:41] learning point was basically that we
[50:44] need to have a very very substantial
[50:48] uh building set for stuff like rubbish
[50:51] right and then also for stuff like
[50:53] cables so actually figuring out how we
[50:56] can create the density that we need
[50:58] throughout the entire environment
[50:59] because even this frame right here even
[51:01] though there's like a lot of rubbish and
[51:02] a lot of cables this is nowhere near the
[51:04] density that we need to actually achieve
[51:07] what we want so we want to
[51:10] find all that stuff as early as possible
[51:12] and we have and right now as we've moved
[51:14] quite further on beyond this point right
[51:16] now
[51:17] we're already starting to implement a
[51:19] lot of those solutions to the problems
[51:21] and and already seeing dividends right
[51:25] so
[51:26] that's basically the process that we're
[51:28] going through we've gone in we've we've
[51:30] figured out where we need to we've found
[51:32] our performance deficits we've found
[51:34] creative solutions around them we've
[51:36] gone in we've actually
[51:38] relatively well achieved the artistic
[51:40] vision for the vibe that we want for
[51:42] these things
[51:43] as well as
[51:46] maintaining the
[51:47] [Music]
[51:49] game level requirements as well right
[51:51] like the the gang outposts and um the
[51:55] ability to go in and have shops where
[51:57] they're interactable as well as
[51:59] um
[52:00] [Music]
[52:01] just dressing as well
[52:03] so
[52:04] that's pretty much where we're at with
[52:06] with well at least the vt stuff for the
[52:08] power space stations uh this is like the
[52:11] most critical step in the process for
[52:13] figuring out how how to build these
[52:15] things
[52:16] and um
[52:17] this one was i'm so glad we we really
[52:20] gave this one the time of day because
[52:22] wow was there a lot of things that we
[52:23] caught on this one that we really would
[52:25] have shot us in the foot if we didn't
[52:26] explore them all properly so
[52:29] yeah i think i think there's a couple of
[52:31] things we want to reiterate uh things
[52:33] that folks who uh maybe
[52:35] uh weren't here at the beginning uh
[52:37] might have missed hi
[52:39] i'm
[52:40] italian spider-man
[52:42] especially because if anybody wasn't
[52:43] here at the beginning he's just like
[52:45] what the heck's going on um
[52:48] this is a pre-production thing that we
[52:50] that we were showing uh this is not
[52:52] building the asset that you're going to
[52:54] see in
[52:56] the game that this is imagine this as
[52:58] like a giant 3d concept of these things
[53:01] it's seeing what we can do it's
[53:03] exploring what the technical limitations
[53:05] are it's identifying the
[53:08] problems that building this will
[53:10] eventually have so that we can find
[53:12] solutions ahead of time and stuff like
[53:14] this that's where we talk about the
[53:16] trash and the entity count and all that
[53:18] stuff it's to help us discover
[53:20] the
[53:22] new tools and processes that we have to
[53:24] develop in order to make this thing a
[53:27] reality uh then for uh for the folks in
[53:31] the chat who who uh
[53:34] were perhaps talking about oh this is
[53:35] too much trash and outlaws aren't like
[53:38] this and they're not messy like this
[53:39] something uh remember that we are
[53:41] building an entire galaxy
[53:43] and this is literally
[53:45] one location
[53:46] in one station in one star system and
[53:50] what not uh these outlaws
[53:52] are
[53:54] is the simplest answer to that i'm i'm
[53:57] sure as the game continues to expand and
[53:59] evolve you'll see
[54:01] nice clean tidy outlaws you'll see ocd
[54:04] outlaws you'll see all manner of things
[54:06] there's no limit on this kind of stuff
[54:08] so so for those of you who were in the
[54:11] chat uh
[54:13] going a little crazy about all the trash
[54:14] and stuff like that it's this is just
[54:16] one
[54:17] location guys it's it's it's okay maybe
[54:20] this one isn't for you
[54:21] but it will be for other people yeah
[54:24] it's an interesting point to bring up
[54:25] though like um we've we've also had that
[54:28] internal debate right where like how
[54:30] much rubbish is is is correct right and
[54:33] and generally we also agree that like
[54:36] the areas that are being controlled by
[54:38] the gang or like normal people they
[54:40] shouldn't have as much rubbish but then
[54:42] areas outside of the market itself like
[54:45] maybe that's just where people within
[54:46] the market are just throwing their stuff
[54:48] the gang doesn't care about that so
[54:50] you'll see more of an increase there
[54:51] versus in the actual area itself
[54:54] but um
[54:56] it's funny you mentioned that like maybe
[54:57] there's a tidy gang because uh one of
[54:59] the things that we we wanted to explore
[55:01] with with the games themselves is that
[55:03] they do have different personalities
[55:05] right and uh we'll go into that more
[55:08] like probably down the line but um we
[55:11] definitely do want to do something like
[55:12] that where we can display different
[55:14] gang's personalities in in new and
[55:16] interesting ways for sure yeah
[55:19] uh we've had scl's with the narrative
[55:20] team were uh specifically dedicated to
[55:22] the gangs of pyro and uh even though
[55:25] they haven't shared all the gangs
[55:26] they've shared several different gangs
[55:28] all with different uh ethoses and stuff
[55:31] so that this is literally just one that
[55:35] you're seeing so
[55:36] um all right man um
[55:39] thank you so much josh i i i i will say
[55:42] i thought we were dressing up
[55:44] um i thought we had agreed
[55:47] to i didn't want to make a point of it
[55:48] at the beginning
[55:50] but i mean i i i sat here i can't i came
[55:53] as italian spider-man
[55:55] and you came
[55:57] as
[55:58] a regular old mummy
[56:00] yeah disarmament that's disappointing
[56:04] i'm only the only per i'm also the only
[56:06] person that showed up to the leads
[56:07] meeting
[56:10] dressed
[56:12] so i was i was clearly
[56:14] misinformed i appreciate the commitment
[56:18] all right so yeah folks that was uh
[56:20] outlaw lifestyles that was uh uh the
[56:22] expanded uh uh uh artists edition
[56:26] version of the presentation that we gave
[56:29] at citizencon
[56:30] um i owed it to josh it was a it was a
[56:32] heartbreaking decision to have to cut it
[56:35] down for uh for for citizencon but when
[56:37] i did it i promised i'd give him an
[56:39] opportunity to do the whole thing and i
[56:40] i think it was well worth seeing because
[56:43] these things are
[56:44] amazing uh i i'll love them
[56:47] so yeah um
[56:49] that's it for our show isc uh returns uh
[56:53] next week uh i think it's what november
[56:56] 4th uh
[56:57] it's we're coming back with a feature on
[56:59] mining gadgets the latest update to the
[57:02] mining gameplay and of course
[57:04] everybody's favorite of sprint report
[57:06] uh so yeah so that is and then we'll be
[57:08] right back here next week on scl uh i
[57:12] think we're currently scheduled for the
[57:13] ui team uh we'll see if that happens
[57:16] things always jumble around so that is
[57:19] josh
[57:20] right there uh i am uh italian spiderman
[57:24] and uh uh we'll go ahead and do let's do
[57:26] the opening video again one more time
[57:27] let's see before we leave it take care
[57:29] everybody
[57:32] [Applause]
[57:33] [Music]
[57:34] [Laughter]
[57:37] [Music]
[57:42] italian spiderman
[57:45] wow
[57:52] [Music]
[58:06] suspensor
[58:08] spider spiders spiders spiders
[58:16] [Applause]
[58:19] [Music]
[58:34] you

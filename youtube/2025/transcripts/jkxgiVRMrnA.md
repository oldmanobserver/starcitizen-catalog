# Inside Star Citizen | Alpha 4.3 Patch Report

**Video:** https://www.youtube.com/watch?v=jkxgiVRMrnA
**Date:** 2025-08-14
**Duration:** 14:12

## Transcript

[00:00] You're here. I'm here. We got one take.
[00:04] Let's talk about the elevator in the
[00:05] room. Now, up until this point, freight
[00:08] elevators were mostly used in
[00:10] singleplayer short-term environments
[00:12] like personal hangers. There would
[00:14] usually only be one user, and on the
[00:16] back end, it would be stowed when you
[00:18] left and a fresh new freight elevator
[00:20] presented every single time you went
[00:22] back in. Now, while certainly not
[00:25] perfect, these tended to operate better
[00:27] than the ones out in the wilderness at
[00:29] say outposts, which like many other
[00:32] things in the verse, tended to compound
[00:34] their issues over time the longer they
[00:36] were left to run. Now, of all the known
[00:39] issues with all the freight elevators in
[00:41] the game, most tend to revolve around
[00:43] simple things like it just doesn't work
[00:46] and bigger problems like all my items
[00:48] have vanished and they're now lost
[00:50] forever, which itself can often tie into
[00:53] other issues with things like long-term
[00:55] persistence, which we're going to have
[00:57] an SCCL on with Benois soon to discuss
[01:00] some new developments there. So, if it's
[01:02] okay with you, we're going to stick to
[01:04] freight elevators for the time being.
[01:06] Now, at this point, I'm not really
[01:09] telling you anything that most active
[01:11] players don't already know, but it's
[01:13] important to note that these issues have
[01:15] been egregious enough that we'd already
[01:17] started a directed repair initiative
[01:20] months ago. It's just
[01:23] not completed yet. Obviously,
[01:27] maybe super obviously.
[01:29] As with transit, when working these
[01:32] issues, we try really hard to avoid what
[01:34] are known as pack fixes and focus
[01:36] instead on trying to uncover what is
[01:39] ultimately the root cause that will
[01:41] create all this instability underneath.
[01:43] And that process can often seem like
[01:46] absolutely nothing is happening for days
[01:49] or even weeks at a time. So last month,
[01:53] what happened with Race for Stanton?
[01:55] Well, sometimes changing how we use old
[01:58] features can be just as painful as
[02:00] adding a bunch of new ones. With a
[02:02] higher concurrency in daily active users
[02:04] than any patch this year, large numbers
[02:07] of players were driven from their
[02:09] private freight elevators in their
[02:11] personal hangers to the more troublesome
[02:13] ones out in the PU. Uh, statistically
[02:16] rare states became common and less
[02:19] common issues became fertilized and grew
[02:22] into bigger unavoidable ones. Although
[02:25] in many cases, this still took hundreds
[02:27] or even thousands of players using each
[02:30] freight elevator to manifest a single
[02:32] issue. Now, like with transit before it
[02:35] or the infamous 30k issues of old, who
[02:38] remembers those? The issues you
[02:40] encounter in the PU are not always due
[02:42] to one or two bugs, but often dozens and
[02:45] dozens of underlying conditions beneath
[02:48] and around it, which throwing thousands
[02:50] and thousands of players at have helped
[02:52] us address more successfully than ever
[02:55] before. And since the release of Alpha
[02:57] 421 and up until the recording of this
[03:00] video, we've identified the root causes
[03:02] of 44 individual freight elevator issues
[03:06] with 20 of them being classified as
[03:08] blockers or critical and almost all of
[03:10] them with causes only revealed by
[03:13] running thousands of people into them
[03:15] over and over and over again throughout
[03:18] this event. Now, in a phrase that should
[03:21] be very familiar to our software
[03:23] engineer enthusiasts out there, as we
[03:25] worked to fix each issue we encountered,
[03:27] the resolution would often reveal
[03:29] another lying in weight underneath. But
[03:32] this is a good thing. Yeah, we did all
[03:35] this intentionally to force progress so
[03:37] we can finally fix freight elevators
[03:39] like we did 30k and are still doing with
[03:41] transit.
[03:44] No. Now, while the project will
[03:47] definitely benefit from what happened
[03:48] long term with all the fixes and
[03:50] hardening that's been going in and that
[03:52] will continue to go in throughout alpha
[03:54] 4.3 and beyond, the answer to what
[03:57] really happened isn't particularly
[04:00] exciting or salacious or any different
[04:03] than what I imagine most of you already
[04:05] suspected. We knew there'd be issues
[04:07] like there have been, but we
[04:09] underestimated how they'd compound on
[04:11] top of one another at higher stresses.
[04:15] It's been a sometimes frustrating
[04:17] process for everyone on both sides of
[04:19] the project, but at the same time, we're
[04:22] super proud of the content and cadence
[04:24] we've achieved this year and of the
[04:26] strides all of our teams are making to
[04:28] make this the most compelling year of
[04:30] Star Citizen gameplay yet. For every
[04:33] single step backwards, I truly believe
[04:36] we're taking multiple strides forward.
[04:38] And the overall improvements to the
[04:40] experience along the way are what keep
[04:42] many of us motivated to continue going
[04:45] month after month. And with this uh new
[04:49] Onyx facilities content drop being
[04:51] spread out over multiple releases, we're
[04:54] going to continue taking the time to
[04:56] improve existing experiences along the
[04:58] way. And to that end, as some of you
[05:02] probably have already heard, it was in
[05:03] the loading screen and whatnot, we're
[05:06] also going to go ahead and extend the
[05:08] Race for Stanton missions while we
[05:10] continue to work on freight elevators
[05:12] throughout Alpha 4.3. It'll mean another
[05:15] month for folks to try to dethrone
[05:17] Hursten from the lead they hit so very
[05:19] early. For you to earn any of the
[05:22] individual rewards that are still
[05:24] outstanding, and for us to continue
[05:27] beating on freight elevators about the
[05:29] head and neck with the proverbial pipe
[05:31] along the way, and all while you
[05:33] continue your exploration of ASD's
[05:36] latest malpractices.
[05:39] Speaking of which, we've also made the
[05:41] decision to keep relatively quiet on
[05:44] Onyx facilities and ISC and beyond. We
[05:47] do this to better let you investigate
[05:49] and discover things for yourself. But
[05:52] that doesn't mean there isn't more that
[05:53] August has to offer. So, let's go ahead
[05:56] and use our remaining time this week to
[05:58] explore the other aspects of this new
[06:00] release in Patch Report Alpha 4.3.
[06:04] [Music]
[06:19] For several years now, we've had these
[06:22] ground storms with rain and snow and
[06:24] whatnot, and those are sticking around
[06:26] for a while yet. But in alpha 4.2, we
[06:29] continued to get our feet wet with the
[06:31] first iteration of dynamic rain. And now
[06:34] two months later in this release, we're
[06:36] continuing our climate campaign with the
[06:38] nayent version of dynamic snow, which
[06:41] leverages the same system to sleep the
[06:43] skies wherever the surrounding situation
[06:45] is sound.
[06:47] Sorry. It's a small thing to let us
[06:50] avoid rain falling on snowy areas, but
[06:52] these incipient iterations will continue
[06:54] to develop both in gameplay and in its
[06:57] sights and sounds over subsequent
[06:59] releases.
[07:01] And meanwhile, in Things You Can Wear
[07:02] and Hold, almost every patch this year
[07:05] has had a new armor and weapon to
[07:06] discover. And in August, you'll find the
[07:09] new specialist light stealth armor.
[07:11] There are a few different variations
[07:13] floating around, including a neat ASD
[07:15] one and this one from Wiccolo. It's an
[07:18] interesting visor, but it does beg the
[07:21] question, with a blast shield down, how
[07:23] can I even see? How am I supposed to
[07:25] fight? to which the answer is I probably
[07:29] shouldn't quote Star Wars because Disney
[07:32] has lawyers.
[07:34] We've also got a new vault weapon this
[07:36] month called the Zenith sniper rifle
[07:38] that and let me read this text I have on
[07:40] the screen here from Zach combines the
[07:43] raw punch of a charged sniper shot with
[07:46] a rapid fire precision of a marksman
[07:48] rifle which which doesn't sound OP as
[07:51] heck at all. Zach. Now, there are some
[07:54] notes here about how loud it'll be and
[07:56] how important managing heat is because
[07:58] if you don't, it becomes essentially
[07:59] inoperable like me. And it's the latest
[08:03] in this year's line of vault weapons.
[08:04] And like all the others before it, you
[08:06] can be the judge if its advantages are
[08:08] worth the trade-offs.
[08:11] Also, hanger respawning returns. Now,
[08:14] it's a small thing, but the ability to
[08:16] spawn directly into your personal hanger
[08:18] and get back into the fray should be a
[08:20] welcome one for anyone that's played the
[08:21] game for a while. Personal hangers are
[08:24] slowly becoming our first true homes in
[08:26] the verse. And this is yet another step
[08:28] in the right direction.
[08:30] Also, another step in the right
[08:32] direction, spawning ground vehicles from
[08:34] the freight elevators, which is not
[08:37] coming in alpha 4.3, but I've got a
[08:40] platform and I'm gonna use it to say
[08:42] everybody wants it. Benois and we're
[08:44] going to find time to prioritize it for
[08:46] the schedule after more fixes in the
[08:49] next couple months. First,
[08:51] let's move on to virtual currencies.
[08:53] Now, this year, we introduced Wiccolo,
[08:55] the collector, and his emporium of
[08:57] esoteric effects, not the actual name.
[09:00] And over the last couple months, we've
[09:02] seen vehicles new and old get added to
[09:04] his inventory as variants with unique
[09:06] paints and components. And that's great.
[09:08] Or at least it was once we killed the
[09:11] RNG thing. Yay.
[09:14] What about the various ship shops in the
[09:16] verse? Where's My Golem, the Fortune,
[09:19] the Guardians? Well, in alpha 4.3,
[09:22] inventories are getting updated with
[09:24] many of the most recent ships that have
[09:26] been released. What this means is while
[09:28] you can still pledge for ships to
[09:30] support the continuing development of
[09:31] Star Citizen and you can still work for
[09:34] those fancy component variants of many
[09:36] with Wiccolo, you should also be able to
[09:39] pursue the base versions of newer
[09:40] vehicles for AUC and in a more
[09:44] reasonable timetable from now on. It's
[09:46] our way of saying, "Yeah, we'll be
[09:49] better at this going forward." It was
[09:51] Tyler Wickens's fault.
[09:56] And while we're talking about
[09:57] spaceships, starting back in May and
[09:59] continuing with each monthly patch after
[10:01] that, the vehicle experience team began
[10:03] the next wave of flight tuning
[10:05] adjustments for every ship in the verse,
[10:07] hitting most of the heavy and medium
[10:09] fighters and interceptor subasses
[10:11] within. Now with Alpha 4.3, it's time
[10:14] for some light fighters to get their
[10:16] pass. This includes adjusting SCM and
[10:19] nav speeds to increase variation within
[10:21] the class, altering the linear and
[10:24] angular accelerations, adjusting health
[10:26] pools, and even swapping out some flight
[10:29] controller components. Now, there's a
[10:31] whole list with details in the patch
[10:33] notes, but if you haven't flown your
[10:34] light fighter in a while, maybe give it
[10:36] a go this patch.
[10:39] And while we're talking about light
[10:41] fighters, what would a patch in 2025 be
[10:43] without brand new vehicles? And for
[10:46] August, we've got the long- awaited
[10:48] debut of the L21 Wolf. It's sleek. It's
[10:51] slick. It's kind of like a cool
[10:53] spaceship roar shack test. See, some
[10:56] people see a fancy hot rod. Some people
[10:58] see a Supermarine Spitfire. And some
[11:01] people like me see a Naboo Star fighter.
[11:04] But it's not.
[11:06] It's not Disney. It's the newest light
[11:10] fighter from Krueger Intergalactic, a
[11:12] brand previously known for the Merlin
[11:13] and Archimedes, two ships who share the
[11:16] same names as characters in an old
[11:18] animated film about King Arthur from
[11:21] [Music]
[11:23] now. You can learn more about it in our
[11:25] dedicated behind the ships episode, also
[11:27] available on YouTube. And the L21 Wolf
[11:30] will be flyable as soon as Alpha 4.3
[11:32] releases.
[11:34] And lastly, let's go ahead and touch on
[11:36] this month's big content drop, the new
[11:39] Onyx facilities. Now, this is a big
[11:41] swing from our environment, level
[11:43] design, mission, sound, and every other
[11:45] team that's worked on them. And that's
[11:47] why I'm not going to say a whole lot.
[11:49] Everyone here really wants you to just
[11:51] get in there and experience them for
[11:53] yourselves. And don't forget, this is
[11:55] our first multi-part release of the
[11:57] year. So, we'll open up that third and
[11:59] final wing eventually, and you'll find
[12:01] out what Dr. your NSD has really been up
[12:04] to. It's more than just worm torture. I
[12:07] can promise you that.
[12:10] Ultimately, this month like this year,
[12:13] we'll continue to see Star Citizen
[12:14] pushing its development into lots of new
[12:16] directions. And quite frankly, some are
[12:19] going to work better than others. Some
[12:21] are going to take us a bit to figure
[12:22] out, and some are going to be some of
[12:24] the best and most interesting content
[12:26] we've ever released. Align mine,
[12:28] Stormbreaker, Onyx facilities. I just
[12:31] want to shout out all the work everyone
[12:32] on dev is doing to keep this year
[12:34] interesting and to continue improving
[12:36] the existing gameplay systems along the
[12:38] way. And then of course the continued
[12:40] engagement with the project from you who
[12:42] are coming back month after month in
[12:45] record numbers to see where we're going
[12:47] next.
[12:48] And uh finally, if you are wondering why
[12:51] I'm at my desk, where I spend most of my
[12:53] day doing my other job behind the scenes
[12:56] that has little to do with ISC or SCCL,
[12:58] there's this little thing called Citizen
[13:00] Con Direct coming up on October 11th.
[13:02] And the spaceship is currently locked
[13:04] down for the next 8 weeks filming for
[13:06] that. So, be sure you check out the
[13:08] latest post on the Bar Citizen global
[13:10] watch parties to find out where you can
[13:12] join our staff to watch it as it
[13:14] unfolds. For Inside Star Citizen, I'm
[13:17] Jared Huckabe. Thanks for listening to
[13:19] me yak about freight elevators for five
[13:21] minutes. And I was going to do a joke
[13:23] here at the end where I pretend to push
[13:25] a button and the elevator takes me down
[13:27] beneath my desk. But considering the
[13:30] work that we still have ahead of us in
[13:32] fixing them proper, it would probably go
[13:34] a little something like this.
[13:38] I'll just say we know what's left to do
[13:40] and we're on it. Thanks for watching.
[13:43] We'll see you next time.

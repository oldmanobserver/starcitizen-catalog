# Star Citizen: Around the Verse - The Banu Defender

**Video:** https://www.youtube.com/watch?v=4RLYch3lxVk
**Date:** 2017-04-21
**Duration:** 35:10

## Transcript

[00:14] [Music]
[00:16] hello and welcome to around the verse
[00:18] our weekly look at the development of
[00:20] Star Citizen I'm Sandy Gardner and I'm
[00:23] Chris Roberts uh we have an all Banu
[00:25] show today uh a look at their law and
[00:26] the newest Banu ship and later we'll
[00:29] share how you can earn a trip to
[00:31] Gamescom plus some fun star Kitten
[00:34] rewards I wonder what star Kitten is uh
[00:37] but first uh let's go to our Los Angeles
[00:39] Studio update they've got some pretty
[00:40] cool stuff to show
[00:41] you hi everyone welcome back to Los
[00:44] Angeles I'm senior producer Eric Kyon
[00:46] Davis here with your monthly Studio
[00:47] update we've grown to 74 total employees
[00:50] across several disciplines with one
[00:52] thing in common making Star Citizen and
[00:54] Squadron 42 the best games possible now
[00:57] some of those new hires include talented
[01:00] Engineers which bring our engineering
[01:01] team to about 12 all their vast and
[01:04] varying experience is quickly helping to
[01:06] bring more features to life across both
[01:08] games soon all of our new ships will
[01:11] have a heat and power component now that
[01:14] the team has finished designing pipes
[01:16] and begun implementing their basic
[01:18] structure this will manage the flow of
[01:21] respective elements to allow individual
[01:23] component contribution to ship Behavior
[01:25] so for example coolers now contribute to
[01:28] how much heat this system can handle
[01:31] rather than being statically defined by
[01:33] the heat sink anyway we're currently
[01:35] replacing the old system in the new
[01:37] ships with this new management system
[01:40] after this is done the team must
[01:42] implement the minute details of each
[01:45] component influencing one another for
[01:47] example coolers not only affect the
[01:50] overheat temperature limit they also
[01:52] offer IR signature masking heat sinks
[01:55] will no longer simply Define the
[01:57] temperature at which components overheat
[01:59] and shut down
[02:00] the heat will ramp up to its desired
[02:02] temperature rather than being generated
[02:05] instantaneously now we've talked about
[02:07] shops in our last update and now the
[02:09] purchase transaction system has been
[02:11] reimplemented with our new replicated
[02:14] function system called remote methods
[02:17] this system will decrease the amount of
[02:19] calls to the server which in turn should
[02:21] make purchasing things a bit more
[02:24] responsive next we'll be working on
[02:26] improving the Tryon mode and the client
[02:29] side update to your persistent data
[02:31] after purchases since the previous
[02:33] update about the ultimate light switch
[02:35] the Light Group entity also has several
[02:38] new features its light State can also be
[02:40] changed by track view which is very
[02:42] useful for cinematics it allows for
[02:44] individual directional lights to now
[02:46] rotate with a simple property the
[02:48] process was you know previously required
[02:50] flow graph the light groups can now
[02:52] replace the Antiquated prefabs that
[02:54] vehicle external lights have been using
[02:56] and now next the team aims to get the
[02:58] light groups on a vehicle to rely on the
[03:00] vehicle's power in order to control all
[03:02] lights as well as interior devices such
[03:05] as doors and lastly on the engineering
[03:07] team we've been hard at work on what we
[03:09] call the control manager this system
[03:11] will automatically give authority over
[03:13] items across the game and will allow
[03:15] players to dictate the control of an
[03:17] item and its sub items now in the past
[03:19] we've had a system prototype for
[03:21] vehicles that was hardcoded which meant
[03:23] that item connections would have to be
[03:25] manually defined by the designer for
[03:27] instance a particular seat always
[03:30] controlled a specific set of items but
[03:32] now the control manager will be able to
[03:34] connect to any entity for example a
[03:36] designer would add a control manager to
[03:38] a turret and then weapons are added the
[03:40] turret that can then be controlled by
[03:42] either an AI module or by an operator
[03:44] seat the player this can also be added
[03:47] to the vehicle with either an AI module
[03:49] or again the operator seat the framework
[03:51] we've set up is universal so it can be
[03:53] used anywhere on anything and this isn't
[03:56] restricted to weapon systems if a player
[03:57] wants to control doors on a space
[03:59] station
[04:00] and terminals with an operator seat it
[04:02] will link you and you can operate
[04:04] whatever it controls now the the really
[04:06] exciting thing about the control manager
[04:09] is it will allow for multi grroup play
[04:11] depending on which seat you're sitting
[04:12] in on our test ship the person in the
[04:15] operator seat controls the weapons but
[04:16] can switch them to the AI Control and
[04:18] then reclaim control again we've been
[04:21] we've now completed adding this to data
[04:22] Forge so designers no longer have to
[04:24] manually State what each controller does
[04:27] the system now knows what each control
[04:29] operates so with a set priority it would
[04:31] manage itself however if the designer
[04:33] still wants to get that extra level of
[04:35] control or just let the system function
[04:37] as it wants to they can do so now over
[04:39] on our ship team here in Los Angeles
[04:41] they've completed the white box phase of
[04:43] the Anvil tein and moved into the gray
[04:45] box phase which includes the final Geo
[04:47] on the pilot seat the cockpit the main
[04:49] engines landing gear and housing
[04:52] meanwhile the white boxes already up and
[04:54] flying for our initial tests we've also
[04:56] done some basic Rigs and animation on
[04:58] the landing gear and on the landing gear
[05:00] housing the team is making steady
[05:02] progress on the RSI Aurora as well we're
[05:05] working on cockpit controls um MFD
[05:08] screens and the sleeping quarters
[05:10] they've also been through General polish
[05:11] such as Palms decals and lods it's
[05:13] starting to look like much more than the
[05:16] modern-day descendant of the X7
[05:18] spacecraft and is heading to The Landing
[05:20] Pad at maximum thrust now our QA team
[05:23] has been quite busy they've been testing
[05:25] our new ships in the pipeline and
[05:27] started working on our new animation
[05:28] pipeline also so one of the biggest
[05:31] projects they're work undertaking is
[05:32] testing the new planetary Tech on moon
[05:34] such as dayar the team has had so much
[05:36] fun testing this new tech that they
[05:38] really don't want to go home we're
[05:40] really looking forward to getting this
[05:41] for to you as soon as we can in the
[05:43] upcoming 3.0
[05:58] release
[06:26] our Tech content team has been uh very
[06:29] busy supporting building improving and
[06:31] assessing all of our processes and
[06:33] pipelines to increase performance reduce
[06:36] Dev time and help deliver every aspect
[06:38] of Star Citizen and Squadron 42 for
[06:41] instance with multiple asset pipelines
[06:43] one of our biggest challenges is
[06:45] maintaining consistency across every
[06:47] asset this means that the tech art team
[06:49] is constantly evaluating and auditing
[06:51] our materials to achieve the best and
[06:53] most efficient result to ensure such
[06:56] consistency all the asset Dev teams
[06:58] really need to create and maintain a
[06:59] shared use of a single unified Library
[07:03] maintaining such a library for a
[07:05] universe full of assets requires
[07:07] vigilance and maintenance our most
[07:09] recently completed audit included sound
[07:12] tutorials and clear documentation for
[07:14] all of our best practices also uh
[07:16] animation is a lot like any other asset
[07:19] it has a certain memory footprint that
[07:21] needs to be streamed in and out of the
[07:23] game think of an animation database like
[07:25] an object container but for animations
[07:28] the DBA or database of of animations is
[07:30] an optimized animation container
[07:32] comprised of hundreds of animations
[07:34] compressed down to a fraction of their
[07:36] typical size on the disc splitting them
[07:40] up logically is important because the
[07:43] speed of streaming will be affected
[07:45] depending on the size of said DBA for
[07:47] example a um Locomotion set can be
[07:50] fairly heavy as it's comprised of
[07:52] hundreds of animations from walking
[07:54] running turning idling everything in
[07:56] between causing streaming of a large
[07:58] file to take a few frames perhaps you've
[08:01] noticed your character sliding prior to
[08:02] the animation beginning which is a
[08:04] product of a DBA that's just too large
[08:07] so Tech animation developed a tool to
[08:09] create manage and sort these animations
[08:11] within that DBA our goal is to ensure
[08:13] that while you're streaming seamlessly
[08:15] through the star syndicon Universe your
[08:17] animations will be streaming right along
[08:19] with you another Boon on performance are
[08:22] asset errors these can be quite
[08:24] difficult to identify when the only way
[08:27] to find them is parsing through a 200
[08:29] megabyte text log line by line so this
[08:32] month engineering Tech art and devops
[08:34] teamed up to automatically output and
[08:36] track errors and warnings associated
[08:38] with certain assets for easy assignment
[08:40] better visibility and quicker turnaround
[08:42] in everything from needed fixes to
[08:44] undefined behaviors that could
[08:46] negatively impact the overall gameplay
[08:49] experience with the implementation of
[08:52] item 2.0 Characters within Star Citizen
[08:55] will become fundamentally different than
[08:57] the characters in our base engine so to
[09:00] manage them we needed to create a
[09:01] specific Loadout editor tool and now
[09:04] that that editor tool has been used in
[09:05] production we've made some major
[09:07] improvements that allow for more
[09:09] developers to get up to speed quickly on
[09:11] the usage of this tool with new icons
[09:13] documentation and general workflow
[09:15] improvements we are now expect the
[09:17] loadouts to be easier and faster to
[09:20] create now our new skinning tool also
[09:23] handles more complex rig setups and lods
[09:27] it takes our CGA format which is a
[09:29] hierarchy of animated meshes collisions
[09:31] and constrained Pistons to become a
[09:33] unified set of skins with lods that are
[09:35] bound to an animated skeleton with
[09:37] physics this tool also red reduces our
[09:40] turnaround for skinning complex setups
[09:42] and improves the overall
[09:44] process now a critical feature required
[09:47] for our characters is that the weapons
[09:49] move to their designated positions
[09:52] accurately when players switch armor uh
[09:55] Tech art worked within the confines of
[09:57] the skeleton extension system to develop
[10:00] an override technique to utilize the
[10:02] correct helper position based on each
[10:04] asset this means attachments will now
[10:07] inherent positions in real time as you
[10:09] attach and detach armor pieces you don't
[10:11] want your gun hanging off the wrong part
[10:13] of your armor Not only would it look
[10:14] silly but it can slow you down when
[10:16] switching weapons after you run out of
[10:18] ammo on your trusty
[10:20] sidearm and also in terms of attachments
[10:23] the most complex character we've set up
[10:25] to date is the heavy Marine a fully
[10:28] equipped heavy Marine has the most
[10:31] physical attachments or weapons than any
[10:33] of our other characters this presented
[10:36] you know some pretty unique challenges
[10:38] trying to fit four grenades eight
[10:40] magazines two Med pens two gadgets one
[10:43] sidearm and two weapons onto a single
[10:45] character makes for quite the game of
[10:46] Tetris the heavy Marine has now been
[10:49] completed and is ready to hit the
[10:51] battlefield fully equipped now the
[10:53] character team is making solid progress
[10:56] across handfuls of different outfits
[10:58] uniforms and Aliens opposite of the
[11:01] heavy Marine is our heavy Outlaw which
[11:03] has completed its in-game mesh and will
[11:04] move right on into texturing rigging and
[11:07] implementation so it's not going to be
[11:08] too long before the heavy Marine will
[11:10] have its potential match out there in
[11:12] the verse now in Squadron 42 we're
[11:15] cranking through various characters from
[11:18] major and from the minor background
[11:20] roles and this one has now passed to the
[11:22] high poly stage and move right on into
[11:24] in-game modeling and texturing the OMC
[11:27] unders suit has completed its high pass
[11:30] making it ready for in-game mesh and for
[11:32] texturing the Marine BDU has move moved
[11:35] through texturing and on to its final
[11:37] stages we have a Medical Rep who has
[11:39] finished up her high polyphase and soon
[11:41] will be in-game modeling last but not
[11:43] least concepts for the Shan and Banu are
[11:45] wrapping up and our newest Quest givers
[11:47] rudo and miles ehart are getting ready
[11:49] to meet you in the verse in the very
[11:51] near future well that's it for us here
[11:53] in Los Angeles thank you as always for
[11:55] your support and we'll see you again
[11:57] soon thanks guys watching the QA guys
[12:00] Tesla Canyon runs looks like a lot of
[12:02] fun and as Star Citizen grows the
[12:04] persistent universe will expand to more
[12:07] than just the Crusader moons yes and
[12:09] definitely so not only will there be
[12:10] more environments to explore but another
[12:12] important aspect is other alien species
[12:15] that you'll be able to interact with and
[12:17] one of those alien species is the Banu
[12:19] which is the first alien civilization
[12:22] that Humanity discovered they might be
[12:24] known as Traders and Merchants but
[12:25] there's so much more to their culture
[12:27] than that take a look
[12:31] [Music]
[12:36] so we're here to talk Banu yeah you were
[12:39] here when the Banu were first thought of
[12:41] like from conception right uh yeah they
[12:43] were the part of the original Time
[12:44] Capsule they were Humanity's first
[12:46] contacts from like a meta perspective
[12:48] was it just you were just trying to
[12:50] think of who Humanity would encounter or
[12:52] was there a need particularly for like a
[12:54] trading group or early on there was sort
[12:56] of in the very rough conversations with
[13:00] with Chris it was I think it was just
[13:02] trying to figure out like what are the
[13:03] sort of Paragons of kind of creatures
[13:07] and civilizations were we going to deal
[13:09] with and there was always this sort of
[13:11] image I remember from early
[13:12] conversations about that sort of Morocco
[13:15] in the 1940s like very vibrant colorful
[13:18] Lush you know but with that sort of
[13:20] intrigue and danger and mystery and the
[13:22] back alley type thing and going off of
[13:24] the the allegory of the uh you know
[13:27] decline of the Roman Empire if the Shian
[13:29] were sort of the influence of China and
[13:31] the vandals were the vizos and the tavar
[13:35] were sort of feudal Japan then the Banu
[13:38] would be sort of the Persian Empire that
[13:41] was sort of their initial initial role
[13:43] so when it comes to the look of them the
[13:45] older designs that we had had lots of
[13:47] ridges on the face and they kind of a
[13:48] little scarier so what I've wanted to do
[13:50] with them is kind of try to bring some
[13:52] color into them uh I really think that
[13:55] it's a place that we can explore some
[13:57] color in the Star Citizen Universe
[13:58] especially with our aliens uh so right
[14:01] now we're kind of getting into exploring
[14:03] skin tones exploring uh you know why
[14:06] they would have different skin tones why
[14:07] those things would exist but then also
[14:09] some of the things that I liked about
[14:10] the old design was all the lines on the
[14:12] face I think that's an interesting uh
[14:14] design language so I've tried to pick
[14:15] that up again and run with it a little
[14:17] bit more Humanity's first encounter with
[14:18] the bander was sort of a mixed bag there
[14:20] was a it was our first Contact ever they
[14:25] we discovered jump points we were able
[14:27] to terraform
[14:29] uh but we hadn't run into any aliens yet
[14:32] and so jump points at the time obviously
[14:34] still are sort of that big you know uh
[14:37] Holy Grail of for exploration so people
[14:40] are very protective of areas that
[14:41] they're scanning and the story was that
[14:44] there was this guy Vernon tar who was
[14:45] out scanning this patch of space uh
[14:48] looking for jump points and he saw
[14:50] another ship show up on his radar and
[14:51] was like convinced that someone was
[14:52] trying to Horn in on his territory and
[14:55] uh so he he took a shot at it and then
[14:57] realized far too late that it was a
[14:59] alien spacecraft and uh freaked out and
[15:04] called the cops basically and yeah and
[15:06] that was it and they ended up forming
[15:09] the first Intergalactic treaty basically
[15:10] but we found out later that the reason
[15:11] why he was so happy to be found by us is
[15:13] that he yeah that Banner was a fugitive
[15:15] from the law it was on the run so our
[15:17] first Banner that we encountered was a
[15:20] criminal he had upset one of the guilds
[15:21] and they were chasing him down so this
[15:23] Banu who was on the run from the law
[15:24] basically became I weirdly enough
[15:27] probably kind of a hero of his age
[15:29] something that I've been wanting to get
[15:31] across is features that the players can
[15:33] connect with that we can associate with
[15:35] so there is a little bit of a human
[15:36] element to the to this design uh you
[15:39] know some a lot in the eyes a lot in
[15:40] some of the general structure of the
[15:43] face um but I do want to get across some
[15:45] of the more creepy elements so their
[15:47] skin is a little shiny and it's a little
[15:50] almost Fisher eel like um you know
[15:53] there's all the they're breathing the
[15:55] way that it looks like they could
[15:56] breathe is maybe in lots of different
[15:57] places uh some crests on their head like
[16:00] things that are just not really natural
[16:01] things that aren't you know but also
[16:03] balancing the human parts to that uh you
[16:05] know in the clothing that they're
[16:07] wearing it's going to be very uh
[16:08] decadent right it's going to have lots
[16:10] of different types of patterns in it
[16:11] it's going to have lots of different um
[16:14] colors in it and that's to show all
[16:16] these different places that they've been
[16:18] that they're not just pulling from one
[16:20] influence from one location uh you it
[16:22] should show a little bit of their
[16:25] history just when you look at them you
[16:26] should be able to see where they've been
[16:28] or or who they are and where they come
[16:30] from we've been really getting invested
[16:32] in who the Banu are as a species and
[16:34] something I find that's really
[16:35] interesting with the Banu is that
[16:36] they're very specialized so you know if
[16:39] they're a soldier they've been trained
[16:40] to be a soldier if they're a merchant
[16:41] they've been trained their whole lives
[16:43] to be a merchant if you know whatever
[16:44] they are they they have specialized in
[16:46] that and they're very specialized that's
[16:48] not very typical in a lot of cultures
[16:50] you know for for interest sake and for
[16:52] having it be more fun we try to set up
[16:54] all the cultures kind of opposed to each
[16:57] other and the farther away they can get
[16:58] the more interesting it is so when we
[17:00] were
[17:01] looking at this Trading Group we started
[17:03] asking like all right what what makes
[17:06] them really interesting as Traders and
[17:09] then part of this use of like um
[17:12] Reliance on a barter system and and that
[17:14] having be the main value of the wealth
[17:17] and and what do the do with etic rule of
[17:20] wealth and kind of that's where it
[17:22] started developing the idea that that
[17:26] was the important aspect of their
[17:28] society of the very real and physical
[17:31] you can see what I'm worth because it's
[17:33] right here with me now Look Around
[17:36] that's how important I am yeah because
[17:38] material things are very important to a
[17:40] Bandu to signify their position and
[17:42] station and life like their ships tend
[17:44] to reflect this kind of artisanal
[17:47] quality to it of of having really nice
[17:50] nicely etched flooring stuff like that
[17:52] because it's more impressive and you
[17:53] know their ship that they're most known
[17:55] for currently is the the merchantmen
[17:57] which is a massive
[17:59] massive reiterate that uh yeah cuz
[18:02] that's not really like just a ship to
[18:04] them used for transport that's that's
[18:07] their home and that's why it's on such a
[18:08] big scale that has all their belongings
[18:10] aboard that they travel around with and
[18:12] that kind of idea of that traveling
[18:14] bizarre that they would come visiting
[18:16] with people is you know kind of taking
[18:18] some inspiration from early like BWI
[18:21] nomadic traders that they're moving with
[18:22] everything they own and it's important
[18:24] to them in that way the background of
[18:26] the band new is very tricky because we
[18:29] we circled in on this idea that uh they
[18:31] have no real sense of History like that
[18:34] that's never really held a lot of
[18:35] importance to them so you know they
[18:38] don't you know they don't care who
[18:41] invented the merchantman they just care
[18:43] that the merchantman is a ship that
[18:45] works and is effective at what it does
[18:47] and they'll retain the sort of
[18:49] instructional Manual of how to design
[18:52] and build one but they could care less
[18:55] that so and so built it in whatever year
[18:58] on this place because of this reason
[18:59] they have holds no interest to them the
[19:02] what is important is this is a ship that
[19:04] is built that's that's built for
[19:06] transport and cargo and is and is
[19:09] effective and so that's that becomes the
[19:11] uh the primary thing for them yeah like
[19:13] if they were viewing like American
[19:14] history they the walkway for them would
[19:16] be America as a country they wouldn't
[19:18] care that it used to be part of Britain
[19:20] because that doesn't matter anymore it's
[19:21] not part of Britain anymore and they
[19:22] wouldn't care that this was the
[19:23] Independence year because it's
[19:25] independent what difference does it make
[19:26] when it happened so so long ago boiling
[19:29] it down to the important facts that they
[19:30] pass on so you know their history is
[19:33] more like a series of manuals than it is
[19:37] kind of like a timeline recording and
[19:39] and because of that it's been very
[19:40] difficult for humans to have pieced
[19:42] together the Bandu history before they
[19:45] met them the big aspect of you know
[19:47] thing is about ACR stuff so ACR stuff
[19:51] means you've lived a full life you've
[19:52] been a lot of places you've met a lot of
[19:54] people you've done a lot of things and
[19:57] that's it so people it's it's very much
[19:59] about living in the present so because
[20:00] the Banu are so heavily in trade uh one
[20:03] thing that's also interesting about them
[20:04] is that they don't necessarily look
[20:06] friendly right they could be a little
[20:08] aggressive they could be a little
[20:10] awkward um so what they try to do and
[20:12] this is part of why they put all their
[20:14] stuff out on display is to show you that
[20:18] they're friendly right because in the
[20:20] ships they're going to have rooms you
[20:21] know their greeting room and when you
[20:23] come into the Greening room this is all
[20:24] their stuff that you you can see and
[20:26] maybe Behind These closed doors it looks
[20:27] totally different but put everything out
[20:29] in display for you their costuming and
[20:31] their clothes should also be impacted in
[20:34] the same way so maybe they're carrying
[20:36] lots of little trinkets or maybe uh the
[20:39] types of clothes they have are from all
[20:40] different places in the universe where
[20:42] you know it's going to show that they
[20:44] pin to all these kinds of places or
[20:46] something that's very rare and very
[20:47] valuable from somewhere far far away
[20:50] they're trying very hard to come off as
[20:52] appealing even though they naturally
[20:54] aren't you know they should be a little
[20:55] creepy they should be a little awkward
[20:57] they should be it's kind of the judging
[20:59] a book by its cover thing where they you
[21:01] they probably wouldn't be the person
[21:02] you're going to come up to and say like
[21:03] this guy's going to be super friendly I
[21:05] really want to trade with this guy but
[21:06] as soon as you get to know them you can
[21:08] see that they're you know very friendly
[21:10] and that they're willing to to do
[21:11] business with you and that they want to
[21:12] make you as pleasant and as comfortable
[21:14] in their in their space and around them
[21:18] uh and I think that's really interesting
[21:19] so it is a difficult balance to say I
[21:22] want to you know when we're designing
[21:23] this race that they need to both come
[21:27] off as a little awkward a
[21:30] little creepy a little uncomfortable um
[21:34] but also friendly also appealing um and
[21:39] that's I think the balance that we're
[21:40] trying to capture right now with these
[21:44] guys developing the Banu culture is
[21:46] important because it also helps us
[21:47] create other aspects of their
[21:48] civilization like their ships language
[21:51] design choices and many other things and
[21:54] since the Bano are known for borrowing
[21:56] technology from other species that idea
[21:58] was actually used in their ship design
[22:01] yes so up next we'll share a look at our
[22:03] newest spacecraft the Banu
[22:10] [Music]
[22:11] Defender so the ship is called the
[22:13] defender uh and it literally is that you
[22:16] know it's not it's it's not an
[22:17] aggressive ship I mean it's a very
[22:19] unique looking ship we needed to link up
[22:21] with the writing team in La so David and
[22:24] will to find out what the banner about
[22:26] if there are any specific things that we
[22:29] needed to take in mind when we made the
[22:30] ship we knew from the beginning that if
[22:32] they had like a fighting ship it would
[22:35] probably be an escort ship primarily cuz
[22:37] what would they want to do with it they
[22:38] would want to protect their valuable
[22:40] trading ship what we generally do there
[22:42] is we take the requirements for Ben and
[22:45] Chris and we look at ships similar to
[22:47] that role to see kind of where it fits
[22:48] in in the universe and I think initially
[22:51] there was about 18 initial initial ideas
[22:54] of just different configurations often
[22:56] with like the two you know the two pods
[22:59] that's been a major feature uh and also
[23:01] taking into account you know um you know
[23:04] on the merchantman we've got the you
[23:06] know there ramps feature heavily um and
[23:09] trying to sort of just tie that in as
[23:11] well so on this one I think Chris picked
[23:14] three that he liked and then we kind of
[23:16] just rifted on those um little more in
[23:19] 2D little more in 3D just super blocky
[23:22] it's almost what looks good first and
[23:25] then we can sort of come back from that
[23:27] and go okay well how do we actually make
[23:28] this work as we've learned more about
[23:31] not only our game systems but as the the
[23:33] race itself that's also been slowly
[23:36] being brought up to date and adjusting
[23:38] yeah and we just had a conversation with
[23:40] the UK guys about like room assignment
[23:43] what room does what and stuff like that
[23:45] and and it's really opening up some
[23:48] really interesting like some really
[23:49] fascinating unique things about how how
[23:52] a band new crew works and then compared
[23:55] and contrasted with with a human crew
[23:57] it's very very different and very weird
[23:58] the Banu quite interestingly have a uh
[24:02] kind of like a social system where very
[24:04] specifically trained in a field unlike
[24:08] the uee ships where it's just one man in
[24:10] a fighter they have possibly a fighter
[24:14] and a Gunner and instead of the Gunner
[24:17] being in a turret they're actually
[24:18] Manning the main ship weapons alongside
[24:20] the pilot so they're trained to work in
[24:23] tandem rather than like a generalist
[24:26] role which is why there's a dual cockpit
[24:30] system going on with it right off the
[24:32] bat we did like a typical sort of human
[24:35] configuration uh you know things in
[24:37] racks and it was it was instantly
[24:40] obvious that that wasn't going to work
[24:42] uh it was out of place the whole
[24:45] rigidity and the structure was um
[24:48] complete opposite to what we're sort of
[24:49] trying to get for the interior and so
[24:52] that there was a lot of there was a lot
[24:53] of drawing a lot of line work just to
[24:55] sort of again it was all about flow FL
[24:58] lines you know curving from the roof
[25:01] down to the floor so after a little more
[25:04] chat with Nate and uh Jay Brushwood like
[25:08] we decided to really go for like a sort
[25:11] of uh almost it's like a vertical
[25:13] horizontal shutter system basically so
[25:16] this whole thing will just like open up
[25:18] and just go and just reveal all the
[25:21] components and they'll be they will be
[25:24] in a sort of structure but um the facade
[25:27] is still very sort of our no Novo
[25:30] sweeping organic um and it it'll make
[25:33] quite a nice experience I think should
[25:35] be there you'll push the button you'll
[25:36] have this
[25:37] reveal um and you know then you can
[25:40] change out your components or you know
[25:43] change your fuses or whatever it is that
[25:44] you want to do so The Defender as an
[25:46] example has a bigger Shield than most of
[25:50] the fighters we've got in the game uh
[25:52] especially of the same size however as a
[25:54] counter point it's got a very weak hole
[25:56] so the second you get through that
[25:57] Shield
[25:59] you're in trouble you know the the
[26:00] defender has a Shon engine on it and at
[26:04] a certain point they were like oh this
[26:06] engine's much better suited for this
[26:08] ship than the previous engine that we
[26:09] had on there so they got the engine
[26:11] design they retro engineered it they
[26:13] figured it out theyve started
[26:14] manufacturing it and now it's a Shon
[26:16] engine incorporated into their Tech it
[26:18] kind of comes in two configurations as
[26:20] like a flight configuration and a landed
[26:23] configuration um you know I really like
[26:26] the landed configuration it just creates
[26:27] a really nice silhouette and you and you
[26:30] know you'll know straight away that's
[26:32] the defender when you see it on a
[26:34] landing pad there's just no way you'll
[26:35] mistake it one of the things that we've
[26:37] been talking about internally was the
[26:39] idea that they as a culture they don't
[26:41] have art Fine Art but the idea being
[26:44] that that that kind of Creative Energy
[26:45] goes into the manufacturing of the thing
[26:48] so that's why they like all their stuff
[26:50] has really beautiful kind of quality to
[26:52] it and also the way they build their
[26:54] ships you can see the pride in how it
[26:56] represents their own personal worth in
[26:59] the art Artistry behind it the in
[27:02] intricacy like it's just beautiful to
[27:04] look at and that's because of how much
[27:06] it represents who they are both me and
[27:08] Nate and design have been uh heavily
[27:11] involved working with a concept artist
[27:14] for a pallet that sort of invokes a
[27:16] richness basically so muted Golds uh you
[27:20] know pale Golds there's you know there's
[27:22] hints to sort of gemstones integrated in
[27:24] a very functional way so they're sort of
[27:26] used as light accents while flying is
[27:28] quite involved so is the shooting
[27:30] especially when you've got the gimbaled
[27:31] weapons on the front you're not waiting
[27:32] for the pilot to line up a shot directly
[27:35] you'll be able to have a little bit of
[27:36] movement there yourself so while the
[27:38] Pilot's trying to track the target the
[27:39] Gunner will be able to shoot within a
[27:42] nice range of that the Dual seats kind
[27:44] of came about because we also wanted the
[27:46] seats to eject and we really didn't want
[27:49] to force the pilot to eject the Gunner
[27:51] as well but you also not restricted to
[27:55] this pilot Gunner thing either because
[27:57] this ship is a Bano ship produced for
[28:00] humans you will be able to get in there
[28:02] flight on your own be the pilot and the
[28:04] Gunner but if you want a friend to pop
[28:05] in there with you they can do some
[28:07] engineering work they can jump on the
[28:09] weapons if they want to so you're a bit
[28:10] more free and this is uh this has been
[28:12] quite exciting I think the whole team is
[28:14] pretty is pretty sort of uh pretty
[28:17] excited to work on it it sounds a bit of
[28:19] a crazy mix um but when you know when
[28:23] when people see the images you know it
[28:24] all it all comes together and it's very
[28:27] obviously not human and hopefully
[28:31] obviously Banu but I think yeah it's
[28:33] going to be it's going to be good I'm
[28:35] I'm looking forward to seeing it sort of
[28:37] uh come through the production process
[28:39] and and then turn up on people's
[28:43] screens the Banu Defender makes a great
[28:45] companion piece to the merchantman by
[28:47] protecting valuable cargo that many Banu
[28:49] Merchants depend on or cargo that you
[28:51] have you depend on too yes and starting
[28:54] tomorrow you can get your very own Bano
[28:56] Defender this sale ends May 1st so don't
[28:58] miss your chance to add this special
[29:00] ship to your hanger yeah we've also put
[29:02] together a helpful guide to interacting
[29:03] with the Banu on our website complete
[29:05] with travel tips for anyone planning a
[29:07] Voyage to the protectorate it's really
[29:09] cool and I definitely recommend checking
[29:10] out up next we have a special
[29:13] announcement regarding our Star Citizen
[29:15] referral program and referral
[29:17] contest yeah not only have we added new
[29:20] reward levels to the program you can
[29:22] also now earn a special trip to this
[29:24] year's gamescon take a
[29:27] look
[29:28] hello citizens I'm Sandy Gardner welcome
[29:31] to the million mile high club I'm here
[29:33] with Tyler Nolan to discuss our new 2017
[29:36] RSI referral contest and updated
[29:38] referral program if you aren't familiar
[29:40] with Star Citizen referral program it's
[29:42] a way to earn in-game rewards by
[29:44] recruiting friends to Star Citizen we're
[29:46] now adding new levels to referral ladder
[29:48] which you can see on the referral
[29:49] program page and now on to the really
[29:52] fun part the new referral contest any
[29:55] new citizens you recruit from the start
[29:56] of the contest until August 8th will get
[29:59] you additional in-game rewards it only
[30:02] takes one new referral point to get an
[30:03] in-game star Kitten t-shirt that your
[30:05] character can wear in the verse and you
[30:07] can also get a star Kitten pink
[30:09] dragonfly by gaining 10 new referral
[30:11] points before the contest ends but
[30:13] remember to receive these fun star
[30:15] Kitten prizes you have to get these
[30:17] referral points during the contest you
[30:20] might be asking yourself what's star
[30:22] Kitten star Kitten is our new in-lore
[30:24] product line Sally is the first member
[30:26] of the star Kitten family you can learn
[30:29] more about her on the referral program
[30:31] page so it doesn't matter whether you
[30:33] have no referrals so far or 1,000 once
[30:36] the contest starts your next referral
[30:37] gets you star Kitten it's the perfect
[30:40] shirt to wear in the verse that's not
[30:42] all the referral contest gets even
[30:44] better the first person who has a
[30:46] lifetime total of 2942 referral points
[30:49] by August 8th will receive a free trip
[30:51] to games come plus whichever other
[30:53] backer has the highest lifetime total of
[30:55] referral points at the end of the
[30:57] contest will receive an Idis M the
[30:59] Gamescom trip will include an event
[31:01] ticket airfare hotel stay for one and a
[31:03] chance to meet with Chris Roberts and
[31:05] other members of the cig development
[31:07] team while the interest M will include a
[31:10] chance to blow a lot of stuff up woohoo
[31:12] again to earn a free trip to Gamescom
[31:14] the magic total to reach is 2942 points
[31:17] using Star Citizen referral codes we
[31:20] already have some great contenders vying
[31:21] for the Gamescom package let's take a
[31:23] look uh man I heard about the game you
[31:26] know really when it first started up
[31:27] when the crowd funding pretty early on
[31:28] and for me it was about finding
[31:30] something that wasn't out there I think
[31:32] the thing that I'm looking forward to
[31:33] most is just supporting organizational
[31:35] operations you know so if we're doing
[31:36] mining or if we're doing transport or
[31:38] anything along those lines um not only
[31:40] just acting in a defensive manner in my
[31:42] combat ship but also coordinate the
[31:44] coordinating the other ships on our
[31:45] Fleet I think that's something that's
[31:47] going to be really exciting for me
[31:48] there's so many other things that I
[31:50] wanted to get involved in you know data
[31:52] running escorting
[31:53] VIPs um going to on attack runs to the
[31:57] vendal home worlds um really trading and
[32:01] exploring and Mining those type of
[32:03] things um there's so many different
[32:05] professions and Star Citizen that I'm
[32:07] interested in and I hope to have the
[32:09] opportunity to really delve into the
[32:11] mechanics the game Mechanics for those
[32:13] particular professions to help one of
[32:15] these top contenders or your friends get
[32:17] to Gamescom just use their referral code
[32:21] simply click on the link in the
[32:22] description below for more details on
[32:24] the
[32:25] contest and if you want to follow the
[32:28] contest leader board you can find it on
[32:30] the Spectrum announcement page thanks
[32:32] for watching and we'll see you in the
[32:37] verse the new referral contest starts
[32:40] today learn how you can earn this trip
[32:42] to Gamescom by clicking on the link in
[32:44] the description for more details yeah
[32:46] speaking of gamescon subscribers and
[32:49] concierge members can purchase Early
[32:51] Access tickets this Saturday and on
[32:53] Sunday tickets will be available for
[32:54] everyone to purchase check the RSI
[32:57] website for details yes they go quickly
[32:59] like last year we'll have an interactive
[33:01] Booth live show and opportunities to
[33:04] meet the cig team so we hope to see you
[33:06] in Cologne Germany yep it'll be great to
[33:08] see you as always in uh Germany uh
[33:10] that's all for this week's episode of
[33:11] ATV please join us tomorrow uh at noon
[33:14] for happy hour Game Dev where Jared
[33:15] huckerby Eric karon Davis and Sean Tracy
[33:18] will create a production schedule live
[33:20] very exciting and answer your questions
[33:22] about the recent 30 production schedule
[33:24] report released last Friday also just as
[33:26] a reminder next week is the last week to
[33:28] purchase store merchandise with shipping
[33:30] included in the total after that
[33:32] shipping will be added at checkout right
[33:35] now everything in store is being sold at
[33:36] a discount so make sure to get your
[33:38] dragonfly poster set your Connie model
[33:40] or a deck of playing cards while there's
[33:42] still time I a new deck of playing cards
[33:44] I think I'm missing a few in the one I
[33:46] was trying to play poker with the other
[33:47] night uh anyway as always I'd like to
[33:49] thank our backers for your continued
[33:51] support you make stares impossible every
[33:53] day yes you do and we're also very
[33:56] grateful to all of our subscrib
[33:58] tomorrow subscribers will receive the
[33:59] next issue of jump Point yeah and the
[34:02] Gladius Valiant free flight is still
[34:03] available to subscribers through the end
[34:05] of the month so don't miss your chance
[34:06] to test fly this great
[34:08] spacecraft and if you're interested in
[34:11] learning more about our subscriber
[34:13] program check out the link in the
[34:15] description so thanks for watching and
[34:18] we'll see you around around the
[34:26] verse
[34:28] [Music]
[34:48] thank you for watching so if you want to
[34:49] keep up with the latest and greatest and
[34:51] Star Citizen and Squadron 42's
[34:52] development please follow us on our
[34:54] social media channels see you soon
[35:03] [Music]
[35:08] for

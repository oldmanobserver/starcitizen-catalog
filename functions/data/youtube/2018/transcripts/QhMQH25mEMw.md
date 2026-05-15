# Star Citizen: Around the Verse - Frankfurt Studio Update

**Video:** https://www.youtube.com/watch?v=QhMQH25mEMw
**Date:** 2018-02-01
**Duration:** 41:37

## Transcript

[00:15] hello and welcome to another episode of
[00:17] around the verse i'm sandi gardiner
[00:19] and i'm chris roberts this week we have
[00:22] an in-depth studio update from foundry
[00:24] 42 in frankfurt germany yes they'll be
[00:27] giving a closer look at some of the work
[00:29] they did on the squadron 42 vertical
[00:30] slice and we'll see some of the new
[00:32] optimizations of backend tech they've
[00:34] been working on for both squadron and
[00:36] star citizen let's check in with Brian
[00:38] chambers now and see what the Frankfurt
[00:40] team has been up to
[00:48] hello everyone my name is brian chambers
[00:51] development director of foundry 42
[00:53] frankfurt office since our last studio
[00:56] update teams grown by a few people
[00:59] played eNOS currently adds 79 people
[01:01] strong the end of last year was a big
[01:04] coordinated global effort to get 300 out
[01:06] to everyone as well as wrapping up bits
[01:09] for the end of the year squadron 42
[01:11] vertical slice playthrough
[01:13] the team then took a couple weeks off
[01:16] for the holidays and everyone came back
[01:18] recharged and ready to focus on their
[01:20] next tasks once back the first of the
[01:24] year involved a large amount of
[01:25] scheduling and planning across most all
[01:28] disciplines laying out the plans to
[01:30] distribute work amongst the various
[01:32] offices and the most efficient way
[01:34] possible since January was a lighter
[01:37] than usual month in regards to work time
[01:39] due to the holidays this update will
[01:42] include some items from the previous
[01:43] update but with a bit more detail and
[01:46] visuals to accompany him so let's first
[01:49] check in with the VFX team the most
[01:52] recent work for the de VFX team was
[01:55] focused on s42 vertical slice they
[01:59] contributed to the coil volumetric cloud
[02:01] and an exterior effects to the slaver
[02:04] based on Gainey and specific bespoke
[02:07] effects for the cinematic sequences the
[02:10] slaver bases exterior was dressed in
[02:12] suitable effects for the dusty planet
[02:14] service and low technological style and
[02:17] the cinematic effects were as bespoke
[02:19] for the various cutaways in the vertical
[02:21] slice the work on the coil gas cloud
[02:24] tech went through a good amount of R&D
[02:26] with the team they were focused on
[02:29] developing new methods to create an
[02:31] interior volume well keep it in line
[02:34] with the defined and approved concepts
[02:37] and art direction the process they used
[02:40] for the coil involves software called
[02:42] Houdini which is not natively supported
[02:44] in lumberyard so a portion of their time
[02:47] was spent on developing optimizing and
[02:49] integrating that to the new pipeline the
[02:53] entire process went through numerous
[02:54] iterations and for the final look they
[02:58] paid really close attention on how the
[03:00] interior
[03:01] interesting compositions and vigils for
[03:04] the players well flying the past couple
[03:06] of months have been very productive for
[03:09] the AIT
[03:10] with a split focus on both squadron 42
[03:13] and the star citizen PU during the
[03:17] squadron 42 holiday livestream we were
[03:19] able to show a first version of the
[03:22] human combat on foot to prep for this
[03:25] the team spent some time refactoring all
[03:27] the cover movement transitions inside
[03:30] the movement system the system now
[03:32] includes an improved path analysis by
[03:35] the AI so that NPCs will know more in
[03:38] advance which type of animation should
[03:40] be played enabling us to better smooth
[03:43] the transitions from locomotion to
[03:45] special transition animations if and
[03:47] when needed
[03:48] ship AI was also given some attention
[03:51] during the past month during the s 42
[03:54] reveal we were able to show our first
[03:56] version of the updated spaceship
[03:58] behaviors currently our movement system
[04:01] is now in control for both on foot and
[04:03] flying movement requests and submissive
[04:06] controlling the pilots and seat operator
[04:09] behaviors the AI ships are now actually
[04:13] fully controlled by the NPC's sitting in
[04:16] the operator seats and each operator has
[04:19] specific behaviors to use the items they
[04:21] have control of regarding subsumption
[04:24] they introduced several new
[04:26] functionalities the new sub sumption
[04:28] event dispatcher the master graph the
[04:31] dynamic track view implementation the
[04:34] substantive vent dispatcher is a way to
[04:36] fully support the subsea vents without
[04:39] relying on any other external systems
[04:42] it's composed by a central system that
[04:46] allows user code to create and send an
[04:48] event the events are created in a pool
[04:50] to allow the AI system to efficiently
[04:53] handle and reuse the allocated memory
[04:55] and each signal lifetime is
[04:57] automatically managed by specific
[04:59] structures called handlers that also
[05:01] allow fast access to the signal itself
[05:04] user code can specify a direct event to
[05:08] an entity or send an event to all the
[05:10] entities in a range from a specific
[05:11] location sending events and arranges now
[05:15] as
[05:15] zone safe and all the code efficiently
[05:17] uses zone system for special queries and
[05:20] entity filtering the master graph is a
[05:24] way for building a relationship between
[05:26] multiple subsumption activities we want
[05:29] to have a general way for handling
[05:31] specific assignments requested by
[05:33] designers as well as combat and regular
[05:35] activities the master graph allows to
[05:38] specify transitions between our
[05:40] scheduled activities and other logic
[05:42] that should be executed when specific
[05:44] events are received they also provided
[05:48] support for dynamic track view scenes a
[05:50] dynamic track view scene is a cinematic
[05:52] scene where the participants can be
[05:54] replaced at runtime with actual AI NPC's
[05:58] this allows us cinematic designers to
[06:01] work on their scenes in a controlled
[06:03] environment but also allow level
[06:05] designers to populate their levels with
[06:07] NPCs that might have or need different
[06:09] activities such as specific clothing or
[06:12] other customizations all the changes in
[06:15] the character might influence the NPC
[06:17] characters and become part of the
[06:19] cinematic scenes also dynamic track view
[06:22] scenes can be potentially interrupted so
[06:25] the AI system needs to know how to take
[06:27] over if and when that happens closing
[06:30] out 2017 the lighting team was focused
[06:33] entirely on the squadron 42 vertical
[06:36] slice for the holiday livestream with
[06:38] lighting generally coming in at the end
[06:40] of an art pipeline a lot of effort needs
[06:42] to be placed on showcasing key moments
[06:45] from specific areas establishing shots
[06:48] framing points of interests and
[06:50] improving readability for gameplay with
[06:53] some things being worked on right up to
[06:55] the deadline this is no easy task but
[06:57] the experience was extremely useful and
[06:59] provided the team with ideas for better
[07:01] tools and workflows going forward to
[07:04] ultimately improve the player experience
[07:06] enter in 2018 while continuing to
[07:10] support ongoing work for squadron 42
[07:12] they begin training a new lighting team
[07:14] member of the team who will help
[07:16] finalize our legacy lighting conversion
[07:19] process to the new volumetric fog
[07:21] technology and also polish and build on
[07:24] new content in the pu initially this
[07:27] will involve building
[07:29] lighting language for the upcoming
[07:30] modular trucks top features since these
[07:34] truck stops won't always be hand-built
[07:36] we need to build processes to
[07:38] automatically place lighting an
[07:40] environment that feels believable is
[07:43] light on performance and obviously
[07:45] bug-free last month the FPS weapons art
[07:49] team continued to work on the gemini f55
[07:52] LMG and the tour all aggregated kay
[07:55] hicks missile launcher both of which are
[07:58] now finished with their first art pass
[08:00] similarly the ship weapons our team
[08:03] completed their first art pass for the
[08:05] ANR laser cannon size 1 through 6 and
[08:08] the Gallants and tactical ballistic
[08:10] Gatlin's size 1 through 3
[08:13] they started blocking out the laser beam
[08:15] weapon size 4 through 6 for the Trident
[08:18] attack systems and the distortion
[08:20] repeater size 1 through 3 for the
[08:23] Associated science and development
[08:24] manufacturer teams also been working on
[08:28] scripts and tools to help further speed
[08:30] up their art pipeline one such script is
[08:33] a ship weapon tool which was made to
[08:36] assist in the creation of modular
[08:37] weapons this new tool lets us create a
[08:40] larger number of weapons in a smaller
[08:42] amount of time by allowing artists to
[08:45] preview different component setups in
[08:47] real time and to automate the export
[08:49] process directly to the game engine all
[08:52] animation exports and engine related
[08:54] meta files are handled by the script
[08:57] leaving the artist to mainly focus on
[08:59] making the actual art itself for the
[09:01] cinematics team based here in Frankfurt
[09:03] it's rare that I can actually go into
[09:06] detail in their progress since we're
[09:08] doing our best to keep the full squadron
[09:10] 42 story surprise since we recently
[09:13] showed portions of squadron 42 in our
[09:16] holiday livestream I thought we would
[09:19] take the opportunity to go into some
[09:20] detail on what was done with the
[09:22] cinematics that were shown
[09:24] so here's Hanazawa our cinematic
[09:27] structure to give you an update with
[09:30] squadron 42 being such a narrative and
[09:33] cinematic heavy game the cinematic team
[09:35] was responsible for quite a bit of the
[09:37] content in the December review as well
[09:39] as pushing tech to make it all happen
[09:40] for the livestream
[09:42] today we will go into more detail about
[09:44] what it takes to create some of these
[09:45] scenes before players get to walk to the
[09:48] ship and launch we are witness to the
[09:49] arrival of the OMC prisoners onboard the
[09:52] UAE s standing for that we actually
[09:55] scaled one of our characters wet tag
[09:58] akka who's played by Craig Fabrice the
[10:01] bronze to Karen's brains so to speak up
[10:03] to be more in line with his actual
[10:05] real-life intimidating self that meant
[10:09] careful adjustments to the performance
[10:11] capture solve so it all lines up with
[10:13] the environment and other scene members
[10:15] I'm Owen Robertson among the senior
[10:18] cinematic animators here at foundry 42
[10:19] frankfurt i was responsible for working
[10:22] on a couple of the scenes from the demo
[10:24] that we showed in december always talked
[10:28] about one of the the issues that we had
[10:30] with scaling one of the prisoner
[10:31] characters one of the issues is that
[10:33] it's not just the characters model it
[10:36] gets scaled but also the skeleton as
[10:38] well and therefore the animation gets
[10:40] scaled that means when a character moves
[10:43] on set and that animation gets scaled
[10:45] they're no longer in their correct
[10:47] position which means that they might not
[10:50] interact with the character properly or
[10:51] they don't they can't interact with the
[10:53] environment properly so we need to
[10:55] adjust for that in the animation so the
[10:58] way we resolved this issue was to first
[11:00] scale up the character and then apply
[11:03] the inverse of that scale to anything
[11:06] that effect their translation or
[11:09] movement through the scene and have an
[11:11] example I had to show you okay so here I
[11:14] have a portion of the scene I was
[11:17] working on with tag occur and the two
[11:21] other prisoners and Tokiko walks up and
[11:24] stands directly between the two other
[11:27] prisoners
[11:32] and this is before he's been scaled so I
[11:35] can see that his height is the same as
[11:37] the other characters and he doesn't look
[11:39] quite as imposing as we would like him
[11:41] to so the first step was to scale up the
[11:46] character so we decided we wanted scale
[11:50] by 10% when I do that
[11:56] he's now larger but also his position
[11:59] has shifted and he's not where he should
[12:02] be on set so the way we resolve this
[12:05] issue is we apply the inverse of that
[12:09] scale to anything that affects his
[12:11] translation through the scene so in this
[12:14] case we'd select his route controller
[12:18] his pelvis and both feet in the curve
[12:21] editor we need to select the translation
[12:23] tracks in the X and z plane I'm not
[12:28] worried about the Y plane I can adjust
[12:29] that later
[12:32] for all those controllers and now the
[12:37] question is how much scaled we need to
[12:39] apply to bring that back to the original
[12:40] performance so the amount of scale we
[12:43] need to apply is the reciprocal of the
[12:46] original scale factor of 1.1 and we can
[12:49] work that out quite easily by doing 1
[12:52] divided by original scale 1.1 that gives
[12:56] the value of not point 9 0 recurring so
[13:02] I'm going to copy that select my
[13:05] animation curves and apply a value scale
[13:12] of that amount and when we scale those
[13:16] keys
[13:21] Terri's now back in the correct position
[13:24] but he's also at the correct scale that
[13:27] we wanted and everything looks much
[13:28] better and then that's that's Israeli at
[13:30] that point did he like final polish pass
[13:32] and then hand it off to the cinematic
[13:35] designers it also meant a couple of
[13:37] measure justments on the Argo pot door
[13:39] and landing gear which the ship team did
[13:41] so the performance capture would then
[13:43] work to get the most out of this
[13:45] foreboding scene we also wanted a darker
[13:47] based lighting for the aft section of
[13:49] the idris hangar we sunt with the ship
[13:51] art director and introduced a lower
[13:52] light state for that section of the ship
[13:54] that is a lot moodier than the default
[13:56] based lighting once this light state was
[13:59] done we took that as our starting point
[14:01] and set up additive cinematic lighting
[14:03] to finalize the scene
[14:12] [Music]
[14:27] all right let's get them out of there
[14:29] Eddie up Naga get the door
[14:38] [Music]
[14:50] now I've never been on one of these it's
[14:53] nice not as nice as a Bengal but nice
[14:57] movie I'll come on clearer what no
[15:03] please
[15:05] MCS gonna have to teach you screw-top
[15:07] some manners are you looking to start
[15:10] trouble always is the trying to get a
[15:14] rise up did I'll get a rise out of your
[15:18] elbow that's enough let's go over there
[15:21] the big ones coming out no she saw the
[15:29] moose
[15:31] relax son
[15:33] I'm sorry yes ain't like we're gonna be
[15:37] here long
[15:37] they'll are there gonna be a long Eva
[15:40] what the hell you were going on about
[15:42] it's very simple where I don't say
[15:48] and our MC belongs to circle the sokar
[15:52] doesn't like
[15:53] Missy movies things coming
[15:57] saticon say your boss we're supposed to
[16:01] be scared of him or something yeah Noel
[16:05] run up to the holding cells make sure
[16:08] everything's ready for us I don't to
[16:11] move them through the ship until we have
[16:12] to aye sir
[16:13] thanks doctor processing aye aye sir
[16:18] one single muscle
[16:21] I'm gonna give super bloggers
[16:22] information to make you regret it
[16:28] pleasure
[16:42] the launch sequence of the Gladius
[16:44] fighters was a big set piece that
[16:45] required a lot of new tech and code
[16:47] improvements to make it all happen we
[16:50] aimed for elements like a real AI old
[16:52] man inside his real AI ship the deck
[16:54] crew as AI the signaling from the player
[16:57] the air traffic control officer to be
[16:58] done in a proper way that would push
[17:00] feature development on the game further
[17:02] along for that we work together with AI
[17:04] engineering and our cinematic tools
[17:06] engineers as the launch sequence also
[17:08] meant more work for our Trek Funes
[17:10] spline that spline actually allows us to
[17:13] puppeteer AI ships precisely and we had
[17:15] to make it work going from the interior
[17:16] zone of the hangar to the outside Shubin
[17:19] space seamlessly we also work together
[17:21] with engineering on several features
[17:23] that help enrich our game cinematically
[17:25] we prototyped and then enabled and
[17:27] always on out of focus f-stop based
[17:29] depth of field
[17:30] mostly for non-combat situations that
[17:32] adds a lot of filmic realism to walking
[17:34] around and exploring interiors like the
[17:36] stand in a dress corridors we are
[17:38] currently in the process of dialing in a
[17:40] rule set for this and how strong the
[17:42] depth of field will kick in under
[17:43] certain circumstances another bit of
[17:46] tech that came online late last year was
[17:48] the ability to use light groups as
[17:49] cinematic light layers for our scenes
[17:51] any scene can be tagged up and a
[17:53] corresponding light layer can be
[17:54] triggered to be faded in aid of a
[17:56] default or custom individual timing per
[17:59] light coming online this can be a light
[18:01] rig for scene but it can also be per
[18:03] location both are viable we called it
[18:05] our Cinna lighting rig and it helps to
[18:07] push hero scenes further than what the
[18:09] environmental based lighting would give
[18:11] us for big scenes like the briefing with
[18:13] captain wide or trails rescue on Gainey
[18:15] base we are doing what we are calling
[18:16] gold standard sequences this is a linear
[18:19] cinematic master take on the sequence
[18:21] with the most likely dialogue it's pre
[18:24] chosen and linked together to show all
[18:26] departments working on that part we want
[18:28] to achieve with the actual in-game
[18:29] version of that scene running with all
[18:31] the AI characters online and all bells
[18:33] and whistles active it helps animation
[18:35] tiling in all the transitional Clips the
[18:37] facial post matches it is integral for
[18:39] lighting and visual effects for the
[18:41] scene and it shows how everything should
[18:42] behave when it all comes together it
[18:45] also informs level-design about
[18:46] potential needs for environment
[18:47] funneling or staging of
[18:49] player once the gold standard is done we
[18:51] shift the scene over to systemic I our
[18:53] conversation system or subsumption
[18:55] behaviors and compare that to the linear
[18:57] gold standard to see if we're happy with
[19:00] the end results scenes like the briefing
[19:02] with captain wide were also used to
[19:03] prototype and develop our workflow to go
[19:05] from and back to subsumption II I
[19:07] control and to and from track view I
[19:10] sincerely appreciate the offer captain
[19:12] but you've done enough already
[19:13] humans more than capable of handling the
[19:16] situation we're already dispatched as
[19:17] security forces and I'm sure they'll
[19:19] find the star fair and you miss uncle
[19:21] Anthony mr. Wexler I wasn't seeking your
[19:24] approval on the matter I was merely
[19:26] informing you of my intent out of
[19:28] courtesy while your involvement is
[19:30] welcomed and strongly encouraged it is
[19:32] entirely optional our involvement
[19:35] whoever is not Lee's onc attacked a Navy
[19:38] ship and ueb space until the threat is
[19:40] neutralized the Stanton will be
[19:42] remaining at Shubin and we will be
[19:45] assisting in rescue operations you're
[19:47] not listening captain human Andrew
[19:51] sellers are very important company in
[19:52] the UAE this is coming with many many
[19:54] connections I'm sure that High Command
[19:56] is gonna be very disappointed to hear
[20:00] this overprotective thuggery well I look
[20:02] forward to hearing from them thank you
[20:06] for your time mr. Wexler
[20:11] well you were right Colton that man is a
[20:16] complete ass white protest so art
[20:20] against our help
[20:21] oh you'd be surprised a lot of these
[20:24] distance station see paying protection
[20:26] of various gangs as a standard cost of
[20:28] business excellor knows that with us
[20:31] here we'll be forcing a fight that means
[20:34] unknown risks which brings us back to
[20:36] the mission at hand
[20:38] take a seat lieutenant the Stanton will
[20:49] be staying in this current position to
[20:51] offer protection to the civilian support
[20:52] Shubin station while you do a full
[20:54] offensive sweep of the surrounding area
[20:56] to clear out any remaining O&C
[20:58] capture if possible treat them as an
[21:01] extremely hostile threat and the missing
[21:04] star fair that will be your secondary
[21:07] objective we've arranged your patrol in
[21:10] a search pattern Brown the wreck site as
[21:12] soon as you clear the coil I want you to
[21:14] contact agent rail hopefully we can find
[21:17] whether star Farah could have headed
[21:19] after the attack Webb what's the word in
[21:21] scanner Raptor aides just finishing sir
[21:23] we should be better able to handle the
[21:25] interference from the coil now well done
[21:27] weapon hopefully that'll help you find
[21:30] the star fare and any outlaw still
[21:32] lurking out there as soon as you're
[21:34] ready I want you to launch and begin
[21:36] your sweep once the prisoners arrived
[21:39] aboard we'll see if we can get any
[21:41] useful information out of them and keep
[21:42] you updated good luck and dismissed
[21:46] I better get down to the hangar then
[21:48] adjust my loadout see down there kid
[21:57] [Music]
[22:00] lieutenant I know you're about to head
[22:03] out but I've been meaning to ask are you
[22:06] finding the Staunton so far fine it's
[22:09] been good sir let her hear it
[22:13] Stanton's a good place to start a career
[22:17] she was my first posting too she's a
[22:21] hell of a ship this one Kelly said you
[22:25] performed well on your last mission
[22:27] that's quite an auspicious start tell me
[22:31] about yourself do you have family idea
[22:34] yes sir I do
[22:36] that's good having responsibilities
[22:40] outside the Navy Hobbs ground you're
[22:42] thinking inside of it but be careful
[22:46] time is one of those funny things the
[22:50] early again the faster it seems to go
[22:54] last time I saw my son he was getting
[22:57] his equivalency next week was graduating
[23:01] college I couldn't tell you where that
[23:04] time went for days I know that you're
[23:10] trying to make a career for yourself
[23:14] but don't let it get in the way of the
[23:16] rest of your life that's good advice
[23:18] thank you sir I'll remember that you
[23:20] should do the same thing sir have you
[23:22] thought about seeing him that would be
[23:24] complicated
[23:30] I've kept it too long you're dismissed
[23:33] lieutenant
[23:41] [Music]
[23:48] further work for the livestream included
[23:50] cutaways that will feature during
[23:52] mission gameplay some of them will be
[23:54] optional in the final game this included
[23:56] for example the intro sequence showing
[23:57] the scale of the standing which is being
[23:59] dwarfed by the even more gigantic Chubin
[24:01] Arkin station looming in the background
[24:03] it included the reclaimer cutaway that
[24:06] actually features an AI character Donna
[24:08] ATAR and when she's talking to the
[24:11] player in the cinematic cutaway and the
[24:13] subsequent comms call on the cockpit
[24:15] display she's actually sitting in her
[24:17] seat in her ship as an AI this is made
[24:19] possible because of our render to
[24:21] texture feature for comms calls
[24:23] additional cutaways were the Gainey
[24:25] based exterior the turrets firing
[24:27] interior based powerup cutaways slaver
[24:29] scenes and of course agent Reyes rescue
[24:32] early on during development during
[24:34] previous for the first performance
[24:36] capture shoot we had discussions about
[24:38] when and where to cut the third-person
[24:39] and when to stay in first-person during
[24:41] our narrative of course this is the
[24:43] endless story of the cinematic guys like
[24:45] me trying to convince everybody else
[24:47] that filmic and close-up on the
[24:49] characters is the way to go to have your
[24:50] scenes have impact so that characters
[24:53] transport as much of the intimacy and
[24:54] urgency of the drama as possible and on
[24:58] the other end of the spectrum you have
[24:59] game designers that hold player agency
[25:01] and immersion up as the holy grail and
[25:03] pretty much hate taking away control
[25:05] from the player at any point in time so
[25:08] during development of squadron it became
[25:10] clear to us that our story and the game
[25:12] experience we are aiming for is not
[25:14] served well by going into either extreme
[25:16] as most of our cinematics especially the
[25:18] ones where the players present a
[25:20] real-time we are going for an approach
[25:22] that will trigger cinematic cutaways
[25:24] with filmic cameras for important scenes
[25:26] but the player will be able to wiggle
[25:28] him or herself free of them to regain
[25:31] control and watch the cinematic from a
[25:33] more detached player perspective so we
[25:35] will try to have our cake and eat it too
[25:37] and so if both sides were possible our
[25:41] conversation system already allows for
[25:42] players to roam and circle strafe around
[25:44] characters they are engaged with and
[25:46] keeps them in a sticky filter with
[25:47] special conversational field-of-view
[25:49] depth of field walking speed adjusted
[25:51] and other effects on this together
[25:54] the ability to wriggle free out of a car
[25:56] away are our tools to solving the
[25:58] conundrum of cinematic impact was a
[26:00] player agency last but not least in
[26:03] addition to the work for the stream we
[26:05] also worked on a scene where our player
[26:07] is introduced to the character of old
[26:08] man played by Mark Hamill during an
[26:10] earlier chapter before the to go out
[26:12] flying the first patrol together and
[26:14] this was used for an IGN trailer a scene
[26:17] like this means a lot of planning before
[26:19] anything is shot as it involves a lot of
[26:21] staging who is placed where and when
[26:23] what would this mean for the camera axes
[26:25] and how do we achieve that on set the
[26:27] idea was to have old men start on the
[26:29] wing then do a dramatic pause in
[26:31] dialogue delivery while he shows
[26:32] mechanic Yuri who's boss by nonchalantly
[26:35] sliding down the maintenance ladder
[26:37] leaning on the Gladius wing and then
[26:39] being right in Yuri's face for the final
[26:41] bit this was pitched to Chris by me we
[26:44] are a previous animation done in the
[26:46] engine once the staging was signed off
[26:48] we started building the maintenance
[26:50] leather props we would have finalized
[26:51] metrics for it on set we carefully
[26:54] measured the wing the thruster housing
[26:56] hate differences the outer wing cannon
[26:58] and went to planning the actual shoot of
[27:00] the scene with the onset supervisor a
[27:03] stunt like this is pretty much a no-go
[27:05] for any actor to do him or herself but
[27:07] at the same time we wanted the whole
[27:08] scene as one fluid take so we cheated
[27:11] the build-up of the Gladius wing
[27:13] including everyone's eye lines and had
[27:15] Marc pretend to slow it down and end up
[27:17] in his final position next to yuri our
[27:19] lead cinematic animator jason then took
[27:22] the scene and gave old man a hand
[27:23] keyframes slide down and tweak
[27:25] positioning and eyelines to have the
[27:27] final result so even relatively small
[27:30] scenes like this sometimes mean a lot of
[27:32] logistical planning to meet the
[27:34] real-world requirements of a real set i
[27:36] hope you enjoyed this closer look into
[27:38] what the cinematic team is up to thank
[27:40] you all for watching thanks honest I'm
[27:43] glad we're actually at a point where we
[27:45] can start showing off some of your
[27:46] team's work it's really cool to see the
[27:48] progress the de tech our team has been
[27:51] evenly splitting their time between work
[27:54] on both the PU and as 42 they're
[27:57] currently extending and the FPS weapons
[28:00] pipeline with a new tool this tool will
[28:03] enable weapons artists to transfer skin
[28:05] weights to different meshes from one
[28:07] source
[28:08] and object they started work on
[28:10] real-time cloth and flesh sim Rd and
[28:14] started development of a live link
[28:16] between Maya and the game engine so that
[28:19] animators can tweak animations in
[28:22] particular facial animations while
[28:24] enjoying the advanced shading quality of
[28:26] the in-game real-time renders versus
[28:29] Maya's own lower quality viewport this
[28:32] tech will be particularly useful for
[28:34] integrating and tweaking the pcap facial
[28:37] animations in s42 cinematic cutscenes
[28:41] due to the huge impact artistically
[28:44] controlled lighting has on the look and
[28:47] feel of an animation performance
[28:48] iterating real-time and in-game will
[28:51] make things much more efficient for the
[28:53] team with more finite control and the
[28:56] overall aesthetic the de Engine team
[28:59] spent a large majority of the past month
[29:02] focused on improving performance and
[29:04] addressing issues for the current live
[29:05] release in the process they end up
[29:08] working with most all disciplines to
[29:11] help profile items and make
[29:13] recommendations and or fix issues when
[29:15] needed some cases are straightforward
[29:18] and dressed immediately well in some
[29:20] cases they might actually define the fix
[29:22] but find it too risky to address
[29:24] immediately they made improvements to a
[29:28] new memory tracking tool used for both
[29:30] server and clients and implemented a
[29:33] script to automatically analyze gathered
[29:36] statistics to quickly find leaks and
[29:38] dubious allocations our existing memory
[29:41] tracking tools became too heavy for
[29:43] recording and processing extended
[29:46] sessions of both the server and client
[29:48] so they started working on a new more
[29:50] lightweight memory tracking system that
[29:53] could support the most important
[29:54] features in order to track memory leaks
[29:56] and invalid allocations without
[29:59] generating gigabytes of logs to analyze
[30:01] the new system has already been used to
[30:04] optimize memory usage on the server for
[30:07] 3.0 and attract leaks they implemented
[30:11] Python scripts to analyze the resulting
[30:13] log files as well as allowing to compute
[30:17] difference for two of them to see how
[30:19] memory allocation behavior changes over
[30:21] time
[30:22] in various parts of the code base which
[30:24] allows us to find leaks as well as trim
[30:26] excessive memory usage the team also fix
[30:30] several issues related to how data is
[30:32] collected in our crash data pay century
[30:35] so we can see again how many different
[30:37] clients are affected by a certain crash
[30:40] they also fixed an issue that caused
[30:42] bugs to be categorized as GPU crashes
[30:45] incorrectly due to stell files being
[30:47] left on the client when previously
[30:49] submitting a real GPU crash one of our
[30:53] newest engineers Nico started working on
[30:56] an ambient occlusion solution which is
[30:58] closer to ground truth meaning it's more
[31:01] accurate its horizon based SSD o
[31:04] previously the shader only sampled the
[31:07] end of occlusion test rays across the
[31:09] surface hemisphere with the rework it
[31:12] now also takes samples along each ray in
[31:14] order to better detect occlusion in
[31:16] between to prevent under sampling we're
[31:20] in the final process of optimizing the
[31:22] shader as the first pass is fairly
[31:25] expensive do the number of samples
[31:27] required they also reworked our cloth
[31:29] shader to use a more physically base
[31:32] shading model it provides more
[31:34] consistency with the rest of our shading
[31:36] throughout the entire game in December
[31:39] the system design team was busy
[31:41] finalizing work on both 3.0 and squadron
[31:44] 42 vertical slice a lot of the work is
[31:48] gone in the first major system mission
[31:50] givers eckhart and ruto and making sure
[31:53] there are no edge cases where either of
[31:55] them gets stock curve players could
[31:57] abuse them each of those two presented
[32:00] different challenges as each has their
[32:02] own conversation flow their own way of
[32:05] being found as well as being triggered
[32:07] similar to the mission givers they
[32:10] completed the first implementation of
[32:12] the admin officer for all of our major
[32:15] locations those also had a lot of edge
[32:18] cases that had to be considered and a
[32:20] lot of work went into making sure that
[32:22] players can't mess with them by blocking
[32:24] them for too long or gave him items that
[32:27] he actually doesn't know how to properly
[32:28] handle some smaller issue still exists
[32:32] but they have some solutions in mind
[32:34] which should sorted out
[32:35] fairly easy a big focus was also put
[32:38] into our FPS combat AI and the current
[32:42] pass is starting to show a lot of
[32:43] promise they are beginning to act in
[32:47] more believable manner in combat
[32:49] behaviors will continue to be added and
[32:51] the timing of the combat will be
[32:53] adjusted all in an effort to get AI
[32:56] fights to fill both challenging and fun
[32:59] to play they also completed a few other
[33:02] things such as doors now having override
[33:05] pump upgrades hatches received credible
[33:08] locks idris beds got upgraded with
[33:11] shutters and more and more complex
[33:13] usable Zoar getting added which should
[33:15] make the game feel much more alive the
[33:19] build engineers recently worked with our
[33:22] austin studio during low traffic times
[33:24] to prepare and run tests on our
[33:27] virtualized try build cluster a non
[33:30] virtualized Hardware try build test
[33:33] cluster was set up to identify common
[33:35] issues and differences in behavior
[33:37] between the two groups of virtualized
[33:39] and real Hardware focus was then shifted
[33:43] to the virtualized cluster to run
[33:45] standardized tests to eliminate any
[33:47] variables introducing issues that would
[33:50] result in loss of truly incremental
[33:52] builds and identify areas that could be
[33:55] optimized to increase the flow of code
[33:57] related changes being validated through
[34:00] try build back into the star citizen
[34:02] codebase after a series of layers of
[34:05] variables had been reduced through this
[34:07] testing they work closely with Mike
[34:09] Pickett on solutions to eradicate any
[34:12] steps in the code validation process
[34:14] that are destructive to the incremental
[34:17] building process such as files being
[34:19] touched in any reversal process that
[34:22] would then require recompilation in the
[34:24] next code validation unrelated to the
[34:27] change being tested or not this past
[34:31] month they also added a QA test request
[34:33] option within try build which has
[34:36] already proven beneficial for the team
[34:38] they then developed a feature to offload
[34:41] that test request try build two
[34:43] dedicated agents in an effort to reduce
[34:46] compile times with this new feature in
[34:49] years now have the possibility to have
[34:51] their changeless compiled against
[34:53] another specified change list within the
[34:56] Tri build UI the user can select an
[34:58] archive option and will receive a notice
[35:01] with a link to a zip archive containing
[35:03] their binaries at this point a
[35:06] programmer can send a request to QA
[35:08] asking to thoroughly test their binaries
[35:11] making sure that their fix and/or new
[35:13] feature works as expected before
[35:16] checking in their work
[35:17] this puts yet an extra layer in place
[35:20] for bug checks primarily to be used with
[35:23] code changes that are deemed riskier
[35:25] than others
[35:26] mission testing for the QA team is
[35:29] primarily done over a UK office but the
[35:32] de team recently had their first real
[35:34] taste of mission testing with both
[35:37] Eckhart and Rudo issues were entered for
[35:40] anything that was not working as
[35:41] intended as well as for any issues that
[35:44] would hinder accessibility to these two
[35:47] mission givers the system designers
[35:49] worked with QA to quickly shelf changes
[35:51] for these NPCs so the QA could pull the
[35:54] shelf changes down from perforce and
[35:57] test to see how things were working
[35:59] before the changes were checked in to a
[36:01] build any issues encountered were
[36:03] brought up identified and addressed and
[36:06] the process would repeat until Rudo and
[36:09] eckhart were at their intended level of
[36:11] quality for 3.0 additional multiplayer
[36:14] ad hoc testing was also completed and QA
[36:18] would provide feedback on how these two
[36:21] mission givers would function when more
[36:23] than one player was involved the QA team
[36:26] also focused on testing and regression
[36:28] for the most recent 3.0 build continuing
[36:31] to provide support for Frankford
[36:33] development team as needed this
[36:36] absorption editor continues to be part
[36:39] of their everyday testing as well as the
[36:40] lumberyard editor and anything related
[36:43] to procedural planet tech John Lang is
[36:46] our resident s42 QA tester in Frankfort
[36:49] being the main point of contact for
[36:51] anything s42 related out of the DE
[36:54] office close to the end of the last year
[36:57] the rest of the de QA team was brought
[37:00] into the s42 testing loop to attend
[37:02] regular
[37:03] review meetings discussing the progress
[37:05] of s42 this ensured that a tester was
[37:08] available to provide support for the dev
[37:10] team working on any specific feature at
[37:13] any time which made the turnaround time
[37:15] for catching issues relevant to the
[37:17] features much quicker the structured
[37:20] enabled QA to quickly test changes the
[37:22] moment they were in a build write-up
[37:24] JIRA reports for issues if needed and
[37:27] send them the appropriate devs to be
[37:29] fixed the whole process is a rinse and
[37:32] repeat until we eventually come to a
[37:34] build that is in the best possible
[37:36] playable and visual state last month the
[37:41] de environment art team spent a majority
[37:44] of their time prepping for work needed
[37:46] for 2018 it's always good to have a look
[37:49] back at the progress made during the
[37:51] year and realign the goals for the new
[37:53] year if necessary a lot of preparation
[37:56] and R&D effort has gone into updating
[37:59] our planet tech and tools as we move
[38:03] from moons to full planets with more
[38:05] visual diverse ecosystems it became
[38:08] clear we wanted to have more control and
[38:10] diversity of colors and materials so
[38:13] work is being done and updating the
[38:15] planet tech as well as the shaders we
[38:17] use on the scattered assets not only
[38:19] will this allow us to have the visual
[38:21] palette we want in the upcoming
[38:23] locations it'll also give us a nice
[38:26] visual update and boost in quality for
[38:29] existing moons we also started work on
[38:32] lore Ville the flagship landing zone on
[38:35] Hurston the team has been focused on
[38:37] taking the level from a level design
[38:39] block out to a first pass in terms of
[38:42] artwork and visuals preliminary work on
[38:45] the design of the transit system for
[38:47] Laura Ville has also been started just
[38:50] as Leske in area 18 Laura Ville is going
[38:53] to be another big hub area where players
[38:55] can expect new quest givers shops
[38:57] trading and the opportunity to visit and
[39:00] buy ship weapons directly from the
[39:02] Hurston Dynamics flagship store located
[39:05] in the massive Hearst and Dynamics
[39:07] building over shouting the city of
[39:10] Louisville that's the update from
[39:13] frankfurt i appreciate everybody
[39:15] watching the
[39:16] entire team appreciates the support we
[39:18] received to make things like this
[39:19] possible we'll see you in the verse
[39:22] alright so that was pretty cool it was
[39:25] actually really interesting to sort of
[39:26] see a lot of the little details that we
[39:28] worked on to deliver the fluid cinematic
[39:31] first-person experience we're going for
[39:33] four squadron and obviously in future
[39:36] squadron specific ATVs we'll be giving
[39:38] you more behind-the-scenes updates on
[39:41] what we're working on so check out those
[39:43] in the future mm-hmm and for a heads up
[39:46] on those monthly updates on squadron 42
[39:48] s development from Frankfurt and all of
[39:50] our studios head to the game's web page
[39:52] and enlist for the newsletter yes and we
[39:56] just relaunched the RSI website last
[39:57] week it's being redesigned and has some
[39:59] new features so make sure to check it
[40:01] out if you haven't already that's all
[40:04] for this week reverse the verse live
[40:06] airs tomorrow at a special year friendly
[40:09] time of 8 a.m. PST with guests brian
[40:11] chambers and todd papy yes and you can
[40:14] watch episodes of calling l devs every
[40:16] Monday where your questions could be
[40:18] answered by a member of the team and
[40:19] they may get the answer right and they
[40:21] may not cause a forum storm or they may
[40:24] who knows
[40:25] thanks of course to our subscribers for
[40:27] sponsoring all of our shows yes and the
[40:30] first stage of 2018 subscriber perks
[40:32] just rolled out including first wave PT
[40:34] you access and some cool in-game item
[40:36] perks so check those out and thank you
[40:39] to our backers your dedication is what
[40:40] makes all of this possible yes thank you
[40:42] very much everybody
[40:43] and until next week we'll see you around
[40:46] the verse
[40:48] [Music]
[41:14] thank you for watching so if you want to
[41:16] keep it with the latest and greatest in
[41:17] the star citizen the squadron 42
[41:18] development please follow us on our
[41:20] social media channels see you soon
[41:29] [Music]

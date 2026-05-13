# Inside Star Citizen: Finding the North Star | Fall 2022

**Video:** https://www.youtube.com/watch?v=n1Fjctpk2qU
**Date:** 2022-12-01
**Duration:** 12:28

## Transcript

[00:00] [Music]
[00:03] well builds can break for a ton of
[00:05] reasons it's not a point of Pride that
[00:08] you know I start to Rattle off a whole
[00:09] bunch of different things that break
[00:10] bills because my whole vocation is to
[00:14] create tools to create pipelines and
[00:16] create processes that don't break builds
[00:18] that are very very dependent but in a
[00:21] perfect world that might be the case but
[00:23] in the reality of things it can be so
[00:25] many things there can be a per force
[00:26] commit that completely destroys it
[00:28] there's so many different types of
[00:29] errors that can be a compilation error
[00:31] that fails the build there can be build
[00:33] errors that have nothing to do with the
[00:36] actual game data itself we're trying to
[00:38] move away from these kind of things but
[00:40] having assets single points of failures
[00:42] on certain assets so a good example is
[00:44] like in our facial data we use a thing
[00:46] called a DNA wrap deformer and it
[00:48] literally just came up this last week
[00:49] that there was a raptor former
[00:51] attachment checked in that didn't have
[00:54] an LOD any face that was attaching this
[00:56] would fatal the entire game as soon as
[00:58] QA got into it every two seconds they
[01:01] were having a a fatal air which means
[01:02] the entire build sort of shut down on
[01:04] them and they couldn't proceed with
[01:05] their testing so this is one of the
[01:07] reasons that we put those asset
[01:08] validations and those things in place
[01:10] there is a lot of reason that builds
[01:12] fail
[01:13] um and you know part of the Tool's job
[01:14] is making sure that those don't happen
[01:20] so what is a build the easiest way to
[01:22] understand a build is everybody's heard
[01:24] of code compiling before and that is
[01:26] there's there's raw code that is written
[01:28] and then it gets run through a compiler
[01:30] and then out comes a binary or an
[01:32] executable as people would understand it
[01:34] um the same actually happens with our
[01:36] assets so sometimes our assets come
[01:38] through and they'll be in an
[01:39] intermediate type format and then those
[01:41] will get sent over to the build system
[01:43] to be compressed in such a way that is
[01:45] actually a lot easier for us to deliver
[01:47] the build to uh users and for the bill
[01:49] to actually be able to run a lot quicker
[01:51] in order to distribute a version of the
[01:53] game to all the developers so we can
[01:54] continue producing the game we create
[01:58] what we call a build every well many
[02:00] times a day as work is completed it gets
[02:02] submitted to our source control system
[02:04] per force which is basically a way of
[02:07] just holding all of the assets all of
[02:09] the code everything that goes into
[02:11] producing the game this obviously is
[02:12] being done by hundreds of developers or
[02:14] in different Studios across the world so
[02:16] when a developer comes in in the morning
[02:18] they need to be able to depend on the
[02:19] build for the day and the first build of
[02:22] the day they're going to expect that all
[02:23] the stuff that they checked in the night
[02:25] before is actually present in that build
[02:26] so that they can continue to iterate on
[02:29] what they've been working on so a build
[02:30] failing is a big deal it actually brings
[02:32] down the entirety of the company on that
[02:34] particular change list so there's a
[02:36] whole bunch of ways that we actually
[02:37] protect the build uh against failures
[02:40] like this we run the assets through
[02:41] something called asset validation and
[02:43] what this is is a pre-commit check you
[02:46] can also call it health checks for uh
[02:48] for the asset so we run these through
[02:50] what is this validation it checks for
[02:52] all the common errors that we would uh
[02:54] possibly make to the data and it's very
[02:56] important because uh when you're
[02:58] developing in the editor it can check
[03:00] what you're doing within that one level
[03:02] but it can't look at a holistic approach
[03:04] so the editor itself will produce
[03:05] various checks uh to make sure that
[03:07] what's exported uh is in good shape but
[03:11] the asset validator is very much a
[03:12] complement to that checking things that
[03:14] they cannot check at that time and then
[03:16] if there's no errors it allows them to
[03:18] commit it if there is errors it tells
[03:20] him exactly what to do about it they go
[03:22] and fix it and then are able to commit
[03:24] again and we should be safe on the build
[03:26] so we had a tool in place uh since since
[03:28] I got here uh to cig actually and it
[03:31] started as a very very small little
[03:32] python script and over time as as with
[03:35] any tool it it got a little more robust
[03:37] but as it got robust it also got very
[03:39] confusing to continue to build out it's
[03:42] showing its age
[03:44] um there's been a lack of
[03:45] structure to it and it's been very
[03:47] difficult to maintain and to keep up to
[03:49] date so what we wanted to do was make
[03:51] sure that Not only was it just the tools
[03:53] team able to write asset validation but
[03:55] also the rest of the teams and what that
[03:57] required was a more robust framework is
[04:00] sort of a plug-in kind of approach
[04:02] um so we moved it from python over to
[04:04] c-sharp and now we have much much
[04:06] broader
[04:08] um adoption for all the teams so that
[04:10] they can write their own levels of asset
[04:12] validation within the tool as well so of
[04:13] course a big win for the tools team here
[04:15] is that we don't need to create all
[04:16] these tests we can allow the experts in
[04:19] the other teams to do it for us other
[04:21] teams among the company as we've scaled
[04:23] up quite a bit comparatively to the
[04:24] older tools can actually write asset
[04:26] validation inside of this framework so
[04:28] this was a really important part of the
[04:30] new tool now it does everything that the
[04:32] old one already did but now our
[04:34] scalability is so much broader so as we
[04:36] continue to develop Star Citizen we're
[04:38] gonna have a more complicated systems
[04:39] and therefore have a more complicated
[04:41] assets and in particular dependencies
[04:42] between them get ever more convoluted so
[04:45] it's it's very important that we can
[04:47] have a scalable system that allows
[04:49] contribution from everybody to help
[04:51] address the potential issues that this
[04:53] could incur so the exact same way as a
[04:56] player might be excited for a feature
[04:57] coming from a feature team within cig we
[05:00] have developers excited for a tool that
[05:02] may be coming from the tools developer
[05:03] within cig it's very much the same
[05:05] Paradigm so when we bring up new asset
[05:08] validation they appreciate having this
[05:10] because they need to know about those
[05:11] errors up front they don't want to wait
[05:13] for the build to fail for some producer
[05:15] to come to their desk and go why has
[05:17] this failed why has your asset not
[05:19] worked out for players especially this
[05:21] is going to matter for you because as
[05:22] you've been waiting for a PTU build or
[05:24] an eptu build these failed builds slow
[05:27] these things down and if we can't review
[05:29] them we can't QA internally that means a
[05:31] release doesn't go out so we're trying
[05:33] to NAB it right at the very beginning so
[05:36] that developer knowing that there is a
[05:37] problem before it hits the build before
[05:38] it fails to the build and before it
[05:40] delays a release for you guys so the
[05:42] tools team is incredibly important as
[05:44] far as the develop helpers players and
[05:47] builds go and hopefully this means more
[05:49] builds will make it to players hands I
[05:51] hope you've enjoyed this brief look into
[05:53] the tools team and one of our products
[05:55] and hope you see you're getting the
[05:56] verse
[05:57] while much of star citizens continuing
[06:00] development is dedicated to creating
[06:02] gameplay systems like cargo and Salvage
[06:05] new locations like Rivers sand caves and
[06:08] crash sites missions like the new prison
[06:11] escape the auras and platform stuff the
[06:14] time trial races and everything else
[06:16] that's heading our way in the upcoming
[06:17] Alpha 318 the folks that are focused on
[06:20] the making and iteration of tools to
[06:23] help the very process of game creation
[06:25] itself are an essential element of the
[06:28] of the Game Dev gumbo that we make here
[06:30] and we're always thrilled when we can
[06:32] give them a few minutes to shine but up
[06:34] next the long-awaited often rumored
[06:37] Polaris concept model internal layout
[06:40] rework now it's not a series of New
[06:42] Concept images like those that were
[06:44] created for the 600i we showcased a few
[06:46] weeks ago but this is a down in the
[06:48] rough 3D Max model look at the reworked
[06:51] concept mesh to explore the new internal
[06:54] layout so potential Pirates can begin
[06:57] plotting out out there boarding actions
[06:59] enjoy
[07:01] the Polaris is obviously a really really
[07:03] old concept it's been around for a very
[07:06] very long time it's one of the my early
[07:08] ships that we did the exterior concept
[07:10] out for the Polaris came out in I think
[07:14] 2017. uh lots of features have been
[07:16] added to the game since then that we're
[07:18] not known about at that time or couldn't
[07:20] be planned for if they weren't known
[07:21] about like a lot of the older ships
[07:24] the interior just didn't fit it we
[07:28] couldn't get the size the scale or the
[07:30] metrics for how we would want it to
[07:32] appear to actually fit inside the frame
[07:34] that we had we've really now locked in
[07:37] how we want the interior layout what the
[07:40] impact of the exterior means and but
[07:42] it's still the same Polaris that
[07:44] everyone originally saw and and fell in
[07:47] love with it just means that now it's
[07:49] kind of fit for purpose whereas with the
[07:50] initial Concept in phase and an initial
[07:53] layout it wasn't quite where we needed
[07:54] it to be
[07:58] the exterior remains pretty much the
[08:01] same Beyond it has got larger to
[08:03] accommodate some of the Interior changes
[08:05] the role is the same the key visuals are
[08:08] the same you may notice again some like
[08:10] panel line changes or turret updates but
[08:13] fundamentally you look at the the
[08:15] Polaris Now versus then it's almost
[08:18] indistinguishable aside from that scale
[08:21] change and the role remains identical to
[08:23] what it was before moving on the inside
[08:25] however we have a completely different
[08:27] story although there wasn't much seen
[08:30] for what the inside was going to look
[08:31] like we had to remove a lot of that and
[08:34] just start again we've fit the entirety
[08:37] of the Interior inside of it while
[08:38] taking into account the change in
[08:40] component sizes where I went from size
[08:43] zero all the way up to size 10
[08:45] um whereas now we've got much more kind
[08:46] of uh distinct categorization of our
[08:49] components we've now got a capital
[08:51] Shield generator Capital power plant
[08:53] Capital support the actual size of the
[08:56] ship and the scale of it especially For
[08:57] What It's rule is within the actual
[08:59] universe
[09:01] so talking layout we don't have concept
[09:03] images for every single room within the
[09:05] ship but I can give you an estimation of
[09:07] what you can expect from it so you start
[09:10] from the bridge which has been opened up
[09:12] a bit to give you a bit more space and
[09:13] visibility behind that we then have the
[09:16] Escape pod section where there's Escape
[09:18] pods for the crew to be able to quickly
[09:19] Evacuate the ship moving behind that we
[09:22] then have the Captain's Quarters and
[09:23] office as well as the seals office
[09:26] behind that again we then have the
[09:29] armory
[09:30] moving further back we have the crew
[09:33] bunk room and baths and showers
[09:37] across from that we then have the wreck
[09:40] area so it's where the food is it's
[09:42] where the relaxation is for the actual
[09:44] crew of the ship
[09:46] moving back further we then come towards
[09:48] the center of the ship where the actual
[09:50] hanger of the Polaris is and that's had
[09:53] a bit of a size increase so it's very
[09:55] comfortable to fit things like a shaver
[09:56] in it now
[09:58] on the left and right hand side on one
[10:00] side you have the medical facilities
[10:04] on the other you have the Holden cells
[10:06] for any prisoners or wrong doers that
[10:08] you might get hold of
[10:10] and then moving back you then have the
[10:12] entrance of where engineering is which
[10:13] spans about two decks
[10:16] a small section of it is at the rear
[10:17] which houses some of the more standard
[10:19] components then the lower deck of
[10:21] engineering holds the large capsicle
[10:22] components for the Polaris
[10:25] moving back forward to then from the
[10:26] rear we then have the cargo halt
[10:30] moving forward from the cargo area we
[10:31] then have the Torpedo Room which has all
[10:34] of the Torpedoes stored and an operation
[10:36] station if anyone needs to maintain any
[10:38] work down there
[10:41] so the viruses concept completes we're
[10:43] pretty happy with the updates to it
[10:45] internally and hope you are as well and
[10:48] now we are just at the point of
[10:49] scheduling when we can jump it into
[10:52] production it's naturally a large ship
[10:54] slightly larger than it was uh so it's
[10:57] not going to be a quick Endeavor but we
[10:59] think it's going to be a pretty fruitful
[11:01] one by the end of it the lessons that
[11:04] we've learned over the years from the
[11:06] evolution of making ships and their
[11:08] Interiors have all come into play when
[11:09] we've done the Polaris
[11:11] and I can't wait for people to be able
[11:13] to see it
[11:16] so what did we learn this week well we
[11:18] learned a bit about the build system how
[11:21] it can break how it affects development
[11:23] and how the new asset validation tool
[11:25] and the work of the tools teams
[11:27] themselves aim to combat that day in and
[11:30] day out that the Polaris concept model
[11:33] internal layout rework
[11:35] is the last necessary step before that
[11:38] much beloved vehicle can move into
[11:40] production proper sometime in the future
[11:42] and that if you want more information
[11:44] about the process of ship creation and
[11:46] everything that's involved including a
[11:48] detailed breakdown of the newly revamped
[11:51] vehicle Pipeline and a Canada discussion
[11:53] of the where when and why of all things
[11:56] making spaceships be sure you check out
[11:58] this year's iae special edition Star
[12:01] Citizen live up on YouTube for inside
[12:03] Star Citizen I'm Jared Huckabee we'll
[12:06] see you all here next week

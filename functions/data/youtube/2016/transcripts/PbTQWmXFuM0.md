# 10 for the Developers: Episode 10

**Video:** https://www.youtube.com/watch?v=PbTQWmXFuM0
**Date:** 2016-05-16
**Duration:** 23:33

## Transcript

[00:00] [Music]
[00:14] [Music]
[00:26] hey everybody and welcome back to a 10
[00:28] for the developers I am Eric kyen Davis
[00:30] Senior producer and I'm with Gage hman
[00:33] associate rigger and character artist
[00:36] wow you do it all substitute character
[00:37] arst there you go uh before we get
[00:39] started we always want to thank the
[00:41] subscribers without you without yall we
[00:43] couldn't do any of this really excellent
[00:45] content we're really happy to be here
[00:46] and uh we really appreciate everything
[00:48] you give us to allow us to to share the
[00:51] whole process of Star Citizen and
[00:52] Squadron 42 and everything we're doing
[00:54] so with that being said shall we get
[00:56] started let's do it okay question number
[00:59] one
[01:00] comes from bacon of War love that name
[01:02] simple question few words will cig
[01:06] release the style guides um I like this
[01:08] question and uh I I really think it's an
[01:10] interesting one because here at cig we
[01:13] like to share everything all the time
[01:15] which is like why we're doing here
[01:17] answering questions um St style guides I
[01:20] I can't speak specifically to yes we
[01:22] will definitely release those I couldn't
[01:24] see why we wouldn't in the future um I
[01:26] think it's it's pretty evident what
[01:28] we're making and what's kind of um
[01:30] inspiring us and inspiring Chris and
[01:32] inspiring our art team to make so you
[01:34] could probably figure out what our style
[01:36] guides are if you kind of dug in um but
[01:38] I I can't see why we would in the future
[01:39] I mean we've got a ton at this point
[01:41] with all of our manufacturers and our
[01:43] clothing manufacturers and things coming
[01:44] online you know we need we need Sal guys
[01:47] more and more so that's a great question
[01:48] and I I think it's something we should
[01:50] definitely look into if we aren't going
[01:51] to do it already yeah of course cool all
[01:53] right question two question number two
[01:55] from o burst ages ago there was talk
[01:58] about cooperation with world hor Studios
[02:01] where they'd let Star Citizen use their
[02:02] clothes layering system how did that
[02:04] develop so that's a pretty complex
[02:06] question but it's very related to all
[02:09] the things that we are implementing in
[02:11] 2.4 right now I made a little handy list
[02:13] for myself um so it starts with removing
[02:16] cdfs from the way we do our character
[02:19] loadouts and moving to a persistent
[02:21] system we're going to do that by
[02:24] basically converting everything we have
[02:26] in cdfs to a Loadout item which has been
[02:29] developed
[02:30] by teams all over the US that we have
[02:33] with code um here in Austin Texas and I
[02:37] believe some people in the UK too have
[02:38] all been put in the system together
[02:40] transitioning into persistence which has
[02:43] been a big feature for 2.4 we are moving
[02:46] away from cdfs and into an item based
[02:49] Loadout system that has involved our
[02:51] code teams throughout all of our Studios
[02:55] um people like Rober ringer Sean Tracy
[02:57] of course Paul ryelle they've all put
[02:59] this together and it's been working
[03:01] really well lately and for the past I
[03:03] think month or two we've been working
[03:05] around the clock to get this thing
[03:06] working smoothly to get this working and
[03:10] back on to the subject of warhorse that
[03:12] was before I was here but I took a look
[03:15] at it after reading this question and we
[03:17] are doing something actually very
[03:18] similar um over the past two months I've
[03:21] been working on a system to have all the
[03:25] clothes functionally layer over each
[03:27] other without any clipping or any
[03:29] problems and that's been quite a task
[03:30] because you always have issues when a
[03:33] shirt as it is normally if you keep that
[03:35] static it cannot have a jacket over it
[03:37] in 3D space because things will
[03:39] naturally clip like folds and you need
[03:40] to have the compression so we've been
[03:42] working to get different types of
[03:44] clothing like skin tight loose all
[03:46] working
[03:47] together um with a series of defining
[03:50] volumes and that has been like the
[03:53] main I think problem to overcome but
[03:56] it's been going pretty pretty smoothly
[03:57] so far and we're working out the rest of
[03:59] the Kinks right no yeah that's it's
[04:01] interesting the challenges that that
[04:02] raises right you don't I mean you don't
[04:05] think about it if you're not a rigger
[04:06] but you also don't think about it until
[04:08] you get to see it in game and you get to
[04:09] play with it in the engine yeah when
[04:10] it's in practice is when it finally like
[04:12] really shows to held breaks down yeah
[04:14] exactly and you're like oh wow it's
[04:16] almost like you have to experience that
[04:18] to then fix it right because you can
[04:20] assume and you can always be like this
[04:21] is
[04:22] perfect that's right and I think it's
[04:24] really interesting just it's really
[04:25] about game development in general that
[04:26] you have that you don't know until you
[04:28] know and then when you know you can fix
[04:29] it it's a l of back and forth yeah
[04:30] totally awesome okay cool question
[04:33] number three in order uh hi Eric hi Daz
[04:38] this is from Daz um Daz uh writes the
[04:41] cig careers page has positions for
[04:44] approximately 60 people can you explain
[04:46] what are the most important
[04:47] characteristics you are looking for in a
[04:49] future cig 542 applicants how do you go
[04:52] about attracting the type of people that
[04:53] would work on this project and retain
[04:55] them wow I I was really excited about
[04:58] this question because hiring and
[05:00] recruiting is is it's it's crucial to
[05:03] creative project I mean it's crucial in
[05:04] any company where you need to work with
[05:06] other people right but within a creative
[05:09] project um working under the tutelage of
[05:10] Chris Roberts we're really looking for
[05:12] what strengths we need at that time as
[05:15] well as the future so a lot of this
[05:17] comes down to where where do we
[05:19] currently sit with our talent like what
[05:22] what do we have across the entire Studio
[05:25] not just here in LA but what do we have
[05:26] across the entire Globe um and we
[05:28] evaluate the staff and we evaluate the
[05:29] our talents and we see okay this is what
[05:31] we need to do accomplish these goals and
[05:33] this is kind of what we think we need
[05:34] for the next six months year two years
[05:36] Infinity as we're working on playing
[05:38] this game and having fun as it comes out
[05:40] um so it's a it's a really great
[05:41] question because we're looking for all
[05:43] kinds of things one of them is a culture
[05:45] fit you want somebody that kind of fits
[05:46] into the environment that we're trying
[05:47] to create um you don't always
[05:49] necessarily just need to find somebody
[05:51] with the skills skills you can teach but
[05:53] personalities you can't culture you
[05:55] can't teach so it's a lot of times it's
[05:56] about finding someone that fits into
[05:58] what we're trying to make and we do have
[05:59] a great team we do LA's got a great team
[06:01] all the teams are starting to come
[06:02] together really really well as we start
[06:03] solidifying the the future plans and
[06:06] it's a it's a I like this one a lot
[06:07] because I spend a lot of time with the
[06:08] leads and with the directors looking at
[06:11] you know how can we make the experience
[06:14] not just great for our current staff but
[06:15] for future staff and for future
[06:17] employees and family members I mean
[06:18] these people we're going to spend a lot
[06:20] of our waking hours with yeah we've
[06:21] developed a lot of close bonds here
[06:23] totally so there's a lot of things that
[06:25] go into it I mean if we're looking for a
[06:26] specific thing so like if we talk for
[06:29] instance about the associate Tech
[06:30] animator role we just opened up that
[06:32] role which we just closed we just found
[06:34] a candidate we're excited about that um
[06:36] we were looking for somebody that could
[06:37] Implement mannequin right that
[06:39] specifically work and mannequin work
[06:40] with the animation team for our
[06:42] persistent Universe it was a very
[06:43] specific thing we needed but there were
[06:45] obviously a ton of other things on top
[06:47] of that that we were looking for so
[06:48] applicants we were looking for if they
[06:50] had that experience that'd be great uh
[06:52] if they could work within this
[06:53] environment um the the tech content team
[06:56] that Sean leads that that um Gage is a
[06:59] part of it it's kind of an amorphous
[07:01] type of team so it's you know can you
[07:03] kind of roll with the punches can you
[07:04] flow with things as they come in it's a
[07:06] it's a it's a unique kind of team so
[07:07] we're looking for culture we're looking
[07:09] for experience we're looking for talent
[07:11] and then we want to get you in here so
[07:12] we can meet you and talk to you and and
[07:13] see if you're the right fit so there's a
[07:15] lot of things that go into it and then
[07:16] how do we Attract it uh we keep making
[07:18] cool stuff we keep making as cool stuff
[07:21] as we possibly can and trying to make an
[07:23] impact like we're trying to do and try
[07:24] to get out there and you know go to
[07:26] hiring events as needed whenever we need
[07:28] candidates um and retaining them I don't
[07:32] know I mean we've done a pretty good job
[07:34] so far I think yeah I think we try to
[07:35] house an environment that's fun to work
[07:37] in that somebody wants to stay and
[07:39] invest their life in invest their time
[07:41] in yeah you know we may spend a lot of
[07:43] hours here working on this game and
[07:44] these games and all the things we want
[07:46] to come out with especially with this
[07:47] new studio it's been a lot better yeah
[07:49] totally and it's weird how just those
[07:51] little environment tweaks can make all
[07:52] the difference that Mak some want to
[07:53] stay forever or you know for a while at
[07:55] least so it's um it's a it's a tough
[07:58] question it's it's an goinging question
[08:00] for every studio and every company out
[08:01] there but for us we want you to be
[08:03] passionate about what we're doing about
[08:05] the scale and the scope of what we're
[08:06] trying to create working alongside Chris
[08:08] and the Fantastic Team that we've all
[08:10] built here um and then ultimately make
[08:12] an impact with us we want somebody
[08:13] that's going to bring in their talents
[08:14] and their unique strengths it's not it's
[08:17] it's not beneficial to have the same
[08:19] type of person across the entire Studio
[08:21] or Globe right we want diversity we want
[08:24] um different types of personalities we
[08:26] want you know a quiet shy person with a
[08:28] loud and gregarious person like want
[08:29] those those types of personalities
[08:31] because they will create a better
[08:32] environment a more uh a more Dynamic
[08:35] environment where we can challenge each
[08:36] other to be better if we're all the same
[08:38] we won't necessarily do that per se
[08:40] we'll just stick with what we're good at
[08:41] and that's it so and it's games so we'll
[08:43] track Gamers and people that like making
[08:45] games and you know so we kind of get
[08:47] some things naturally just by being a
[08:48] game company so all right so question
[08:51] number four from Leonard sapala
[08:53] regarding male and female clothing and
[08:55] body shapes how would you describe C's
[08:57] stance on realism and ially correct or
[09:00] more of a classic video game look have
[09:03] have you been given any specific
[09:04] guidance on how to strike that balance
[09:05] and if so what is it so I can't speak
[09:09] directly on how the characters are made
[09:11] and like what the influence will be
[09:12] because that's not what I do but I can
[09:15] tell you that they are basically 3D
[09:17] scans of real people that's about as
[09:19] real I think as we can get in the
[09:21] current day and age Y and then um our
[09:23] great artists like Omar and then our
[09:25] Tech artist Mark McCall and Sean Tracy
[09:27] and Forest all go over constantly to try
[09:29] and improve those 3D scans and make them
[09:31] match the real people as much as we can
[09:33] and they
[09:35] spend an insane amount of time
[09:37] perfecting that look yeah so yeah and
[09:39] and I think the universe is going to be
[09:41] um not this just High Fantastical
[09:42] Universe it's going to be somewhat of a
[09:43] realistic if I was in space and flying a
[09:46] spaceship you know you're going to
[09:47] probably look like us maybe not aliens
[09:49] but you know 900 years from now little
[09:51] Vel yeah yeah little vuel or little Vel
[09:53] human babies that's going to be
[09:55] different one uh but yeah I think the I
[09:57] think the scanning kind of dictated it
[09:58] right once we decided we want to use
[10:00] real humans that kind of pushes us down
[10:01] that path we I think we've taken
[10:03] creative Liberties where it makes sense
[10:04] right it's necessary but I think the
[10:06] base is definitely the and then with the
[10:08] outfits and the environments we put them
[10:10] in that'll add the extra character and
[10:11] the sort of sci-fi look so for sure
[10:14] awesome all right question number five
[10:17] from Delta
[10:19] Ohio oh uh Ohio I almost said Ohio again
[10:22] as a developer making a high stakes game
[10:25] how is your work life Balan when you
[10:27] know there is so much writing on
[10:29] everything you do that is a uh that is a
[10:32] very intense question um and I may be
[10:35] the wrong person to answer this question
[10:37] uh striking a work life balance when
[10:39] you're working on something you're
[10:40] passionate about is incredibly difficult
[10:43] prioritizing life is very difficult to
[10:45] do um we are all very passionate about
[10:49] what we're working on here we're working
[10:50] for someone that's also very passionate
[10:52] about what he's creating oh yeah and I
[10:54] think it it rubs off on all of us we all
[10:56] want to be here until we know it
[10:58] necessarily needs to be done um there's
[11:00] so much to do and so much we want to do
[11:02] it's it's I rarely go home and feel like
[11:04] I accomplished everything I plann for
[11:06] for that day but I do feel like I made a
[11:08] chunk I've gotten chunk done to get
[11:10] ready for that's the best feeling like
[11:11] you made a difference that day move on
[11:12] to the next one that's right so
[11:14] sometimes you just got to put your
[11:15] pencil down and go home because you're
[11:17] you've been here so long uh sometimes
[11:19] you have to plan life take make sure you
[11:21] take a vacation make sure you use some
[11:22] of that PTO time that we've got those
[11:24] wonderful benefits and sometimes hey you
[11:26] got to put in all the hours and do what
[11:28] you got to do so it's really tough it's
[11:31] it's I don't know I don't know I can't
[11:33] it's hard to explain when you when
[11:34] you're working on something you love
[11:35] it's when do you want to stop right I
[11:38] think the goal is you want to do
[11:39] something you love so much that you
[11:40] never want to stop doing it so we have
[11:42] to force ourselves even more to to to
[11:44] take a break step away from it go have
[11:46] fun go do a team event have a little
[11:48] holiday party whatever the case may be
[11:50] just you know go out see a movie and and
[11:52] have that little bit of break when you
[11:53] can and I think you've been a big part
[11:54] of that too like since you came on board
[11:56] the environment has definitely improved
[11:57] cool thank you um and then on another
[11:59] note I think to speak to this this
[12:01] question um the management team the
[12:04] executive team they're incredibly
[12:06] supportive on just life happening right
[12:09] if if something occurs or something goes
[12:11] on you have you know they've got your
[12:13] back and you can take the time you need
[12:15] to to make sure life's sorted out and it
[12:18] it just seems like you know and I and I
[12:19] know this from the leadership side we we
[12:21] are always proactively trying to look at
[12:24] are people burning out are they working
[12:26] too hard is what they're working on what
[12:27] they should be working on and how can we
[12:29] simplify that to make their lives better
[12:31] um when do we just tell them to go home
[12:33] be away take time off uh because those
[12:35] are all things we're always trying to
[12:36] look out for and that does happen I
[12:38] remember uh earlier this week when
[12:39] trying to work on 2.4 Force n Sean kept
[12:41] telling me like go home you got to go
[12:42] home but that's right yeah that's right
[12:45] back for sport so we do it I try to do
[12:47] it to ourselves but then we also for
[12:48] those that we're responsible for we try
[12:50] to take care of them because I I the
[12:51] ultimate goal is to not Crunch and if
[12:53] we're doing our job and we have a good
[12:55] understanding of the schedule which I
[12:56] say it but it's very hard to do uh it is
[12:59] try to get reduce any kind of crazy
[13:01] overtime needed be able to do your job
[13:03] within the hours allotted to you that's
[13:05] fair and equal to your employment laws
[13:06] around your wherever you live but also
[13:08] just for our mental state the reason
[13:10] those exist is because we just you know
[13:12] there gets to a point where diminishing
[13:14] returns got to be healthy yeah you got
[13:15] to be healthy and if something happens
[13:17] cig totally supports it and I've seen
[13:19] that happen time and time again even
[13:20] since I've been here when I hurt myself
[13:23] you know I had the support of Chris and
[13:24] those to just help heal get back to
[13:26] where you need to be and then come back
[13:28] to work and keep doing it so from
[13:30] subscriber tranon question number six
[13:32] since working on the start citizen
[13:33] project what would you say has been your
[13:35] most Innovative contribution that has
[13:37] impacted the game so far thank you
[13:39] Tron um good question very polite Tron
[13:42] is very polite I like Tron a lot
[13:44] yeah um I've worked on quite a few
[13:46] things since I've been here and jumped
[13:47] around a lot but um I think since
[13:49] becoming an associate rigger and working
[13:51] with John Rigs and the tech content team
[13:53] that is when I've really made the
[13:55] biggest contribution I feel because I've
[13:57] been given a lot more responsibility
[13:59] to start taking my own Direction I think
[14:03] and trying to improve things that don't
[14:04] actually exist yet so within the past
[14:07] month I've been working on the clothing
[14:09] system in 2.4 while all the code guys
[14:11] handle the implementation I've been
[14:13] working on the 3D aspect and making sure
[14:14] the art fits together and works well
[14:16] within the game and I've been working
[14:18] really hard on that and taking it over
[14:19] from the outsourcers and I feel like
[14:22] that has been probably the most
[14:24] rewarding and beneficial experience so
[14:27] far totally and I think people are going
[14:28] are enjoying it cuz I think it's got a
[14:30] really cool that specific impact is
[14:32] going to it's such a cool feature for
[14:34] the persistent Universe it's like one of
[14:36] the large pillars of persistent
[14:37] universes not all of them but shopping
[14:40] and and the clothing aspect of
[14:41] persistent universe is such a big deal
[14:42] so it's kind of cool to be the ground
[14:44] floor the first person set the
[14:46] Milestones that's good yeah so anything
[14:48] that happens from here out would be like
[14:49] that was what Gage worked on there you
[14:52] go we built the foundation awesome cool
[14:54] all right from vacation that's very
[14:57] applicable to the topics we've had isn't
[14:58] it ation says I was wondering about the
[15:01] character from the pupil to Planet video
[15:03] I thought he looked fantastic I was
[15:05] wondering if that character is from
[15:06] Squadron 42 or an example of what we
[15:08] could expect to be able to make from the
[15:10] Character Creator this is a good
[15:12] question um we're starting to get a lot
[15:14] of questions about character creator I
[15:15] can't imagine why people want
[15:16] customization for their characters it's
[15:18] a big one I know they're actively
[15:20] working on the design Dock and and just
[15:21] the overall implementation um but that
[15:24] character was one of our head scans as
[15:27] uh Gage mentioned earlier on one of the
[15:28] questions about what our characters look
[15:29] like that was an actor that we scanned
[15:31] in and it's one of the first
[15:33] implementations of that character in the
[15:35] game that we're we're excited CU at some
[15:37] point um all these characters we'd like
[15:39] them to be in some form or fashion right
[15:41] um depending on if they fit or not into
[15:43] the lore or to the universe we can use
[15:45] these for both Squad 42 and for pers the
[15:46] persistent universe so so yeah that was
[15:48] one of the ones that uh we wanted to use
[15:50] for that video and it's the one that's
[15:52] kind of starting to come online and
[15:53] we're all pretty excited about it so and
[15:55] we basically um have a whole lineup
[15:58] ready we're just sort of perfecting one
[16:00] and then we're going to apply down the
[16:01] pipeline to the rest yeah it's going to
[16:02] be it should hopefully simplify it's
[16:04] like if you work on any kind of creative
[16:06] content the the beginning 80% the
[16:09] beginning is just like the most intense
[16:11] and you trying to figure out the most
[16:13] because then after that it should it
[16:15] should just fly right you're making
[16:16] small tweaks along the way as you learn
[16:18] new tech and new things come online but
[16:19] you should be able to you know like a
[16:21] template Mass Supply got them all going
[16:23] and then you can start simplifying and
[16:24] then you can start seeing things quicker
[16:25] come out quicker play with them quicker
[16:27] have fun with them quicker right it's
[16:28] like when you any game you make you
[16:30] start and you make a bunch of tools and
[16:31] those tools help you make everything
[16:33] else faster all about that pipeline
[16:34] that's there you go set that pipeline up
[16:35] right the first time or the second or
[16:37] third time and then that thing should St
[16:39] right yeah yeah but thank you we I agree
[16:42] I think that character look great oh
[16:43] yeah all right question eight number
[16:46] eight from the deadly Kenny does Star
[16:48] Citizen plan to have loose clothing
[16:50] physics as in if you had a trench coat
[16:52] or a cape you moved would the clothing
[16:54] flutter or flap in both atmospheric
[16:56] environments and in space I like that
[16:58] those trench coat
[16:59] and cap or Cape I I want a character
[17:02] with a cape on it we don't have capes
[17:03] yet but we could get there we need to
[17:05] work on capes um okay so for this
[17:07] question it's not set in stone yet we
[17:10] will definitely be getting simulated
[17:11] clothing eventually but um it's very
[17:14] experimental right now as people know
[17:16] like we finally got physics grids in and
[17:17] all that all the physics are sort of
[17:18] falling into place um and then
[17:20] simulations within those will fall into
[17:23] place afterward so we've been doing
[17:24] experiments with the characters um so
[17:26] far but nothing solid yet nothing in the
[17:30] pipeline like the actual active pipeline
[17:32] but yeah I've seen a lot of the R&D Mark
[17:34] Mcall and a coule blowing through it all
[17:36] blowing through it looks really really
[17:37] cool I think it'll be a really it's
[17:39] obviously a nice feature right the the
[17:40] immersion is in the detail sometimes
[17:42] especially in space I want to see that
[17:43] happen oh yes I know everyone does and
[17:45] we we'll get there floating um also
[17:47] although on the topic of that I was
[17:49] mentioned earlier the cdfs so the cdfs
[17:51] were basically the way we implemented
[17:53] all the simulations they were all input
[17:55] as data in the CDF but that's not
[17:57] persistent so we we first got the
[18:00] clothing into the persistent item
[18:01] loadouts that we're going to be giving
[18:02] players in 2.4 and then we had um arel
[18:07] you start implementing the simulation
[18:09] data from the cdfs into the item
[18:10] loadouts as well so coming later we can
[18:13] simulate within the persistent close but
[18:15] it'll come it's coming it's coming it's
[18:17] it's looking really cool too all right
[18:19] next question number nine number nine
[18:22] right n okay kiwi Pete says how has the
[18:25] development of Star Citizen and Squadron
[18:28] 42 of course evolved in terms of art
[18:30] style and gameplay as cig has developed
[18:32] or deployed Leading Edge Technologies
[18:34] can you give some examples of before and
[18:36] after examples thanks yes uh how is it
[18:41] involved so I guess the answer to the
[18:43] question is yes it has I guess that's
[18:45] not the answer to the question but part
[18:46] of the question is it has evolved it
[18:48] will continue to evolve and any kind of
[18:50] living Pro uh um project or organism
[18:53] especially the pr Universe type of thing
[18:54] it will we will try to continue to push
[18:56] the boundaries until we've breaken all
[18:57] boundaries and then those boundaries
[18:59] better and keep making them better um so
[19:01] how has it so I think you know since
[19:03] even since I've been here I just had my
[19:05] anniversary last a couple weeks ago
[19:07] right after we've been here for a year
[19:08] already um one of the iterations that
[19:10] I've been here for that I was really
[19:12] excited and I worked alongside those
[19:13] guys on yourself partially as well was
[19:16] the constellation so we're on the next
[19:18] Mark of the constellation that's true um
[19:21] Chris Smith and uh Josh Coons and
[19:24] everybody kind of really took that thing
[19:25] by the horns to get that ready for multi
[19:27] crew and um the new version of that ship
[19:29] looks amazing that was phenomenal yeah
[19:31] and and what they did was they got all
[19:33] the things that had led up to the
[19:34] pipeline when they started that ship and
[19:36] even during they tweaked it but that was
[19:38] a new iteration of the pipeline it was a
[19:40] new iteration of art style it was a new
[19:41] iteration of how can we make this look
[19:43] even better with this poly count within
[19:44] this engine as the engine gets optimized
[19:46] you can do more with art so it's kind of
[19:48] a it's this back and forth that we'll
[19:50] always do and that's the one I think of
[19:52] the most I don't know if you have
[19:53] another example perfect example um I
[19:55] think that was for the LA Studio that
[19:57] was sort of like our first well la and
[19:59] all the US teams the first major
[20:01] pipeline movement for the ships and then
[20:03] on top of that um Len's team they've
[20:05] been able to just fly forward yeah based
[20:07] on all these optimizations we have now
[20:09] it's great to watch too and you know
[20:10] speaking of Ln you know even the ships
[20:12] are working on now it's cool that you
[20:13] know he's like putting a lot up front
[20:15] but the plan is to you know help move
[20:17] through the PIP quier it does pay off
[20:19] and it and it sometimes it's a lot of
[20:20] hard again upfront work but it should
[20:22] pay off if you're doing it right it
[20:23] should pay off got to go fast to Coast
[20:25] so yeah it'll continue to evolve and you
[20:27] know the more and more we do this one we
[20:28] come out with I think the goal is to
[20:30] keep making it look as cool as we can
[20:31] with with the tech right y yeah all
[20:34] right so question number 10 Perry hope
[20:36] what is your favorite CL you say hey
[20:38] there Gage he's talking to you or this
[20:40] person is talking to you okay okay okay
[20:43] going do some third person role playing
[20:46] all right so question number 10 from
[20:47] Perry hope hey there Gage hello what is
[20:50] your favorite cloth that you have made
[20:52] and can you show it to us cheers so my
[20:55] favorite so far has been the big Benny
[20:57] outfit and and that actually has an
[20:59] interesting story behind it because it
[21:01] was originally unintended it was like as
[21:03] it came out as an April fools joke all
[21:05] the April fools content was originally
[21:07] things that the teams did on their own
[21:09] as like their own little goofy side
[21:11] projects and then we brought together
[21:12] thanks to Jared and the way the outfit
[21:14] came together was it was a personal test
[21:16] for myself to learn the pipeline so that
[21:18] I can start integrating what I do with
[21:20] the character
[21:22] team um so yeah it was just it's really
[21:25] it was a really fun one that kind of
[21:27] came online and I think you'll you know
[21:29] cuz there's a lot of things we need to
[21:30] test internally that aren't necessarily
[21:31] meant for public consumption oh yeah the
[21:33] kind of perk here is that we get to
[21:35] share that stuff right when we make it
[21:36] but I I've been a part of things like
[21:38] that in the past where it's just fun you
[21:39] you kind of get a chuckle internally but
[21:40] it's always fun when we be like look at
[21:42] this how funny is this and you know then
[21:43] it of course inspires oh well can I get
[21:45] that outfit what do I need to do for
[21:47] that outfit right so that's always a
[21:48] question that we get and you never know
[21:50] you never know what sneaks in there
[21:51] right never know and we're glad the fans
[21:52] love it so who knows what we might do
[21:53] with it that's right we see you never
[21:55] know you never know what we'll sneak in
[21:56] that's right all right I think that
[21:58] that's all of our questions do you have
[22:00] any secret questions anywhere you wanted
[22:01] to answer um question number 11 no no
[22:04] question okay I think that's it awesome
[22:06] there's our 10 questions for 10 for the
[22:08] developers thank you guys so much for uh
[22:10] taking the time to chat with us and
[22:12] again thank you subscribers for making
[22:13] this possible we couldn't talk to you
[22:15] about these 10 great questions without
[22:17] you uh helping us out and and paying for
[22:19] all this content and being a part of
[22:20] this journey and then also of course
[22:23] thank to the all the backers for making
[22:25] all this possible of course we we
[22:26] couldn't be living the dream and working
[22:28] our our tales off to try to make
[22:29] something cool and they make it worth it
[22:30] too I love talking to backers and all
[22:32] the subscribers great feedback it it
[22:33] adds to the creation that much more yeah
[22:36] yeah we love it all right we're signing
[22:38] off thank you so much again that's 10
[22:40] for the developers talk to you
[22:43] [Music]
[22:49] soon hey guys thanks for watching um
[22:52] temp for the chairman if you guys would
[22:54] like to uh see more episodes go here if
[22:57] you guys would like to subscribe subribe
[22:58] to our YouTube channel and always keep
[23:00] up to date with all our video content go
[23:02] here and uh if you guys would like to
[23:04] watch episodes of R the verse go here
[23:06] please and I will see you in the verse
[23:11] [Applause]

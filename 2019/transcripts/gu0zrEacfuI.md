# Star Citizen Live Gamedev: Modular Space Stations

**Video:** https://www.youtube.com/watch?v=gu0zrEacfuI
**Date:** 2019-08-30
**Duration:** 1:13:10

## Transcript

[00:07] [Music]
[00:10] hi everybody welcome to star citizen
[00:13] live game dev modular space stations I'm
[00:17] your host Jerry uh could be a non Today
[00:18] Show we're gonna be doing a bit of the
[00:20] exploration of process related to the
[00:22] creation of our modular space station
[00:25] interiors if you're a player of star
[00:27] citizen in recent patch we we created
[00:30] our we added a bunch of modular space
[00:32] station exteriors and so with the
[00:34] continuing form of development now we've
[00:36] moved on to the interiors and joining us
[00:38] on the show this week is senior
[00:40] environment artists from boundary if I'm
[00:42] old name habits cloud Imperium games in
[00:45] the UK Joel as a party Joel how you
[00:48] doing man hey how are you I'm doing well
[00:50] thank you for playing for joining us on
[00:53] the show we were talking about this
[00:53] before we haven't had you on very out
[00:55] death and we had John for like an art
[00:57] Corp retrospective kind of thing last
[01:00] year I think that was it yeah well
[01:03] welcome aboard so you're a senior
[01:05] environment artist let's take a few
[01:07] moments and just talk a little bit about
[01:08] what you do for star citizen sure so as
[01:15] an environment artist I'm responsible
[01:17] for creating and maintaining levels
[01:21] within the universe that could be like
[01:25] from a small section to like a larger
[01:27] section like out core as well as
[01:31] authoring smaller assets like walls
[01:35] flows and tanks and things like that so
[01:41] that's that's what I do as an
[01:44] environmentalist would you say yes would
[01:46] you say your focus is more towards
[01:48] man-made objects so I know that artists
[01:52] all have different kind of specialties
[01:53] and fields some work almost entirely on
[01:55] organic stuff some work entirely on
[01:58] structures and technology where would
[02:01] you say your focus is definitely on on
[02:03] hard surface man-made stuff hard
[02:06] surfaces is the term I'm typically going
[02:09] for for things that are sci-fi or
[02:14] mechanical as opposed to like you
[02:18] wouldn't describe like a Tudor style
[02:20] medieval building is hard surface even
[02:23] though the practices
[02:25] and the approach to developing that
[02:27] content is the same so I actually didn't
[02:30] know that's that's specificity to
[02:33] hard-surface I like I would have called
[02:35] it like a medieval castle if you were
[02:36] modeling at hard service modeling yeah
[02:39] just technology and sci-fi stuff is
[02:41] that's something just internally here at
[02:42] CID or is that something you found
[02:43] that's kind of throughout the industry
[02:45] well throughout the industry you like
[02:47] I'm sure there's people out there who
[02:49] sitting there saying I'm wrong you know
[02:54] you could be wrong about anything but at
[02:57] least that's what I've come to know like
[02:59] growing up and and learning in in this
[03:02] industry that you know hard surfaces
[03:04] when someone says hard surface they're
[03:07] talking about like either subdivision
[03:09] modeling or sci-fi just thinking we
[03:12] could use that as a tagline for starts
[03:14] is in life you can be wrong about
[03:16] anything so stars in life is our live
[03:20] broadcast where we we demonstrate a bit
[03:23] of process a bit of the what goes into
[03:26] the nitty gritty the behind the scenes
[03:28] of a particular feature or aspect of
[03:30] game development in a more long form
[03:32] approach on today's show we're going to
[03:34] be exploring the process of using our
[03:37] our procedural generation tools are
[03:40] tagging system all that stuff to create
[03:42] modular space station interiors right
[03:45] yep
[03:47] before we get started I saw a question
[03:49] and guys you can submit your questions I
[03:51] threw out to a twitch chat while we're
[03:53] live here apologies if you're watching
[03:55] this later on YouTube you missed it you
[03:57] missed the opportunity but you submit
[03:58] your questions by preface in your
[04:00] question with the word question in
[04:01] capital letters surrounded by brackets
[04:03] we'll do our best to pull a couple of
[04:05] those from the show throughout the show
[04:07] when we do these process things it's
[04:09] more like a more like a presentations
[04:11] more like a through-line for for Jewel's
[04:13] process so we're not going to get as
[04:14] many questions in this week as we would
[04:16] in other weeks but we'll do our best to
[04:18] kind of pepper them in where we can
[04:21] before we get started one of the
[04:23] questions that just came through was
[04:24] though what what are your influences my
[04:29] influences or Stahl's
[04:30] obviously I think you've gotta go past
[04:33] our walls if you're pure sci-fi artist
[04:37] and Ralph McQuarrie's an excellent
[04:39] concept artist by drama is it and is
[04:42] another great one
[04:46] lots of old even though it's it's not
[04:49] quite relevant to sci-fi like Jim Henson
[04:53] movies like the Dark Crystal
[04:54] right um anything there's like strong
[04:57] world building is definitely an
[04:59] influence of mind not just art you know
[05:03] that's you know why I was drawn to
[05:05] stassi's and in general was because it's
[05:07] a persistent universe it's it's a living
[05:10] breathing world and to me it captures
[05:13] you know the stuff that Jim Henson was
[05:15] doing you know with the Dark Crystal and
[05:18] you know even the labyrinth movies and
[05:21] stuff hello when the yeah they guessed
[05:23] you that promo worked for me and I don't
[05:25] know now I was trying to think of what
[05:27] we should do it we should do a show
[05:28] where we try to find the one person it's
[05:30] the idea that's not inspired by Star
[05:31] Wars and then push them out the door I
[05:33] know alright so let's get started here I
[05:36] understand you've got it you've got a
[05:38] scene set up in the editor for us yep
[05:40] it's just so that no anything so I so
[05:48] what are we looking at here so we're
[05:50] looking at a room within what are the
[05:55] space station interiors just a small
[05:57] portion of a one room of many many rooms
[06:01] and many different types of rooms bare
[06:04] bones which is nothing really going on
[06:07] except for some some intermediate
[06:09] structural assets going on and right
[06:14] basically what we're going to do today
[06:15] is I'm going to walk you through the
[06:18] process and we're going to do a bit of
[06:20] practical work and you know a little bit
[06:22] of theory work on how we can go from
[06:24] this and we can quickly generate
[06:29] something like this or if we don't like
[06:33] this layout we can click a preview
[06:35] button and let it load for a second and
[06:38] we're going to see a completely
[06:41] different set of props different layout
[06:44] different lighting and we can keep doing
[06:47] this until we're quite happy we
[06:49] is with how things are kind of laid out
[06:53] and this is just like a validation tool
[06:56] for us so we just went previewing it at
[06:58] the moment like the real thing happens
[07:00] when we generate the entire station
[07:03] interior and then these rooms come in
[07:05] randomly and then some objects of that
[07:08] that room come in randomly and the
[07:10] lighting changes randomly yeah I don't
[07:14] want I don't want to bury the lede here
[07:16] you didn't just switch between two
[07:17] different layers and a map you click the
[07:20] button and procedural generation system
[07:22] then went through read all the tags that
[07:25] work that are assigned to the different
[07:26] areas of this level and then pulled a
[07:29] randomized set of options that match
[07:32] those tags yeah correct so it's created
[07:35] a layer for me here so that might might
[07:37] be throwing you off but we can go ahead
[07:39] and just delete that if no one believes
[07:42] us so we'll click it again and of course
[07:46] procedurally generating in it a space
[07:48] station is not a super quick that's why
[07:52] so we'll just sit here then and it's not
[07:55] just the asset so it looks like it's
[07:56] bringing in lighting and environment
[08:00] effects yep that's the whole point of it
[08:07] so where did they replace me spheres
[08:09] come in so I the easiest way to troll
[08:19] any environment artist is to say is that
[08:21] a replacement you just watch them sweat
[08:23] yeah okay you're driving I'm from the
[08:28] passenger let's go so I'll break down
[08:33] what exactly is going on on here what
[08:36] are the different components that are
[08:38] making this this whole thing work so we
[08:41] start off with like a room type so if
[08:45] you look on on the right here we're
[08:47] working with says uni large these are
[08:50] universal large rooms
[08:52] and the kind of very generic large
[08:57] travursel rooms if you if you will you
[09:01] can say over over here on the
[09:03] as well we've got different like purpose
[09:06] rooms so we've got stairs we've got side
[09:08] rooms we've got a shafts lockers etc but
[09:10] we're going to be focusing on they're on
[09:12] the Uni large rooms for now and so we
[09:18] start off with a pretty bare-bones
[09:20] I'm turning on this overlay so we can
[09:23] see through this moody lighting there
[09:26] it's kind of like a husk of a room
[09:29] there's a lot of there's a lot of holes
[09:30] you know there's not much dressing going
[09:33] on and that's perfect for the base room
[09:36] because what we do is we we also what's
[09:41] called an overlay which comes in and
[09:44] it's got some lighting in it it's got
[09:46] some structural changes that fill those
[09:48] holes in and we do this we don't
[09:51] completely do the entire room
[09:53] procedurally because we like to have
[09:57] like a finite amount of control over
[09:59] what we're going to get so if we just
[10:02] take away specific chunks and then we we
[10:06] make sure that the things that can fill
[10:08] that in are validated and and kind of
[10:11] handled by an artist where you're gonna
[10:13] see like the best results instead of
[10:16] just like leaving it all to chance ya
[10:18] wanna throw in the chat right now is
[10:20] asking how much control do you have over
[10:22] procedural generation and we were
[10:23] talking a little bit about this before
[10:25] we went live just in our little pre chat
[10:27] about how we use procedural generation
[10:30] as a tool to support our artists you
[10:32] know the procedure generation is not the
[10:34] end goal of building these things it's
[10:36] it's really about assisting folks like
[10:39] you in creating the sheer number of
[10:42] space stations and environments that
[10:43] we're going to need for a game of this
[10:44] scale yeah that's that's exactly right
[10:49] as all saying we if we give it if we
[10:52] allow it all to chance then chances are
[10:55] we'll be sitting there regenerating
[10:57] these rooms like four hours until we've
[11:00] come across something that's not broken
[11:01] mm-hmm and works and then there's a
[11:04] chance that it's like ninety percent
[11:06] perfect and we're like right we still
[11:09] have to throw it away because we need to
[11:10] procedurally generate that last 10
[11:12] percent this kind of allows us to handle
[11:16] a lot of the work but also offload a lot
[11:20] of the more granular work that would
[11:23] usually do to the procedural system and
[11:28] and fill in the gaps that way so we've
[11:31] got two overlays for this room we've got
[11:34] a third one this is one will will will
[11:36] make later on you can see the main kind
[11:41] of structure of this room remains the
[11:43] same but we've got these big elements
[11:45] within the room that can change
[11:47] procedurally and within these overlays
[11:53] for go back to this one is a bit more
[11:55] well lit we have these orange boxes
[11:58] dotted around periodically and these are
[12:02] what we call secondary elements so these
[12:05] are the the props that come in it's not
[12:09] it's not constraint to just spawning in
[12:11] props it can spawn in advertisement it
[12:15] can spawn in anything really because
[12:17] it's tied to a prefab system and the
[12:20] prefab is just a collection of objects
[12:24] that get stored to an XML file so that
[12:27] way we can keep track of it and on load
[12:30] time it reads from that prefab library
[12:32] so if we need to make changes to a
[12:35] prefab or we make new ones each time the
[12:40] the client or the editor loads we get
[12:42] the latest version of that whereas
[12:44] before if something statically placed in
[12:46] the level and we we update it we don't
[12:51] really have kind of find out control of
[12:53] how that's affecting the world around it
[12:56] but with a prefab we've got a lot more
[12:58] control and flexibility so if I'm
[13:02] understanding right it's not just it's
[13:05] not just this is a sign and every time
[13:07] that you hit generate it just gives you
[13:10] a different sign you can actually the
[13:11] same location can be filled with the
[13:13] different types of props yeah so we
[13:17] could we could be as tight with our
[13:20] specification of what we want to spawn
[13:22] here or we could go very wide so you'll
[13:27] see on these on these orange volumes
[13:30] secondary element we can see a category
[13:33] filter so we're looking for floral and
[13:35] maintenance props with a maximum
[13:39] dimension of 4 on x 1.5 on y and 3 in
[13:45] the z axis and again with the minimum
[13:48] minimum dimensions so that's saying that
[13:51] any any prop that we find that fits
[13:54] these tags these floral and and
[13:55] maintenance and then can also fit within
[13:58] these bounds go ahead and bring it in
[14:00] and there could be four five six
[14:02] different versions of flora line
[14:05] maintenance that fit within that spot we
[14:10] can we can preview what what one's going
[14:14] to give us so we can use the same same
[14:16] button to preview specific elements and
[14:18] then we can use the same tool to preview
[14:22] like the entire room so we're just going
[14:25] to run through and try generate a few
[14:29] props on this spot so you see we've got
[14:32] like a bucket a generator and a dolly
[14:35] let's see if there's if there's more
[14:37] items in this library and we got the
[14:42] same one and leaving it to chance that
[14:44] means that we might see the same one
[14:46] I'll pop a few times so we got a
[14:48] different one spawning in now it's
[14:52] really a collection of libraries that
[14:54] there's the overall asset library and
[14:56] then the library breaks down different
[14:58] themes and then after themes it breaks
[15:00] down into different you know subsections
[15:03] of types and you can just add to these
[15:06] later down the line without having to go
[15:08] through and rebuild every space station
[15:10] you can just add more industrial floor
[15:15] props here and it just it just continues
[15:18] to build to the library yeah that's
[15:21] right so the more we work on it like the
[15:25] more we're going to see like cascading
[15:26] changes throughout the entire game it as
[15:30] opposed to like making a static location
[15:33] we build at once we put it in the wild
[15:34] and you know it's what you see what you
[15:37] get like we can we can start changing
[15:41] like the very small and there
[15:43] you know it's a very small get
[15:45] propagated and then we can start
[15:46] changing the very big and we're just
[15:48] gonna say a whole lot of changes but
[15:50] you're right in like this is just a
[15:54] small element and you might you might
[15:57] not see a whole lot of change like it is
[15:59] still going to look for maintenance my
[16:02] type prop so you might see like the same
[16:04] prop aligned differently and you might
[16:08] be thinking well you know that's not
[16:10] super unique but it's just a different
[16:13] arrangement but it's kind of a cascading
[16:16] effect so on the top level we have we
[16:18] can generate the entire station interior
[16:21] which procedurally picks what kind of
[16:24] rooms at once it's going to throw in a
[16:27] couple unis large rooms some of our our
[16:30] bespoke rooms I've you know belong to
[16:32] the rest or relax brand and stairs
[16:37] inside rooms etc within within those
[16:41] rooms themselves because we've got we
[16:44] can see here on the right we've got five
[16:45] different you know uni large rooms so
[16:48] we're going to have up to like five
[16:50] different variations of a uni large room
[16:54] so when when the system goes I want to
[16:56] uni large room it's got five to pick
[16:57] from and then just yeah within those
[17:01] five it's got two overlays minimum like
[17:04] well we could do one overlay in some
[17:06] cases but as it stands we got two per
[17:09] per you need large room and then each
[17:11] one of those has the ability to pull in
[17:13] either or a and B at the moment it could
[17:16] be more and then within those overlays
[17:19] we have the ability or these props to
[17:22] spawn in procedurally and if we're not
[17:25] as particular about what spawns here we
[17:27] can we can kind of expand the volume and
[17:29] we could say either do maintenance or
[17:31] maybe storage or seats or planters etc
[17:35] and like within this you will start
[17:39] seeing different items pop up and each
[17:42] time you come into a station you know
[17:47] you're you're in and out are gonna be
[17:49] completely different you might come in
[17:50] from from this area or you might come in
[17:53] from this area
[17:54] or this area depending on what station
[17:56] you kind of spawn out
[17:57] so you're seeing the room from a
[17:59] different angle but as well as that
[18:01] you're seeing different rooms on the
[18:03] other side of that so with a different
[18:07] layer on different props so you're gonna
[18:11] like we're trying to reduce like the
[18:13] visual fatigue of seeing the same static
[18:16] room over and over and over again with
[18:18] the same chair and the table with open
[18:21] noodle box on the side now you're
[18:24] obviously a environment artist so many
[18:28] of the questions that are coming in as
[18:30] they always do tend to tend towards
[18:33] gameplay and yeah obviously an artist is
[18:36] not here to speak about game plays
[18:37] that's not their area but there was a
[18:40] question I thought it was close enough
[18:41] that I think you maybe you'd have some
[18:42] insight it said when generating rooms
[18:45] how do you ensure that there are no
[18:47] holes between the prefab collisions
[18:49] where players could squeeze into and
[18:51] fall or get the places that they
[18:52] shouldn't yeah so that's that's kind of
[18:55] another reason why we do half you know
[18:58] handle third half procedural so if there
[19:02] is an instance like that and QA come to
[19:04] us and say hey we've got players getting
[19:06] stuck in an area that they aren't meant
[19:09] to for this area for instance say your
[19:13] props were able to spawn and we're able
[19:15] to get up on those props and then jump
[19:17] over the railing and get stock obviously
[19:21] you know when where death has
[19:23] consequences we're going to see a lot
[19:25] less of that but you know it people like
[19:28] to explore in this repercussion free
[19:32] state of the game so they're going to
[19:34] they're going to do that so that means
[19:35] that because half of its hand authored
[19:39] and we have control like all right we
[19:41] can't guarantee that we're not going to
[19:43] get a prop so they can get up on it and
[19:45] jump over the railings which means that
[19:47] we might relook at this area here and
[19:50] maybe put some safety nets in so players
[19:55] can't fall down there and get stock so
[19:59] that's that's how we would kind of it's
[20:01] going to happen and that's why we kind
[20:04] of do half hand or third half procedures
[20:07] so we have finite control over fixing
[20:10] that stuff
[20:11] obviously we get finite control over how
[20:14] it looks as well but that's how we're
[20:17] going to ensure that we can reliably fix
[20:21] those issues when they pop up okay now
[20:24] we are 20 minutes to the show so sure I
[20:27] mean there's no rush I just want to let
[20:29] you know we're what we're we're so cool
[20:32] we could jump into some of the meat and
[20:34] bones of it and what we're gonna do is
[20:36] we're gonna make a third overlay for
[20:39] this uni large room we're not going to
[20:42] do a whole lot because that could take a
[20:44] little bit so what I've done is I've
[20:46] duplicated a and I've made a new overlay
[20:49] see and I reckon we can maybe do
[20:53] something different in this in this area
[20:55] here so let's see what we're working
[20:59] with by turning off to the main room so
[21:02] these are all the assets that come in
[21:04] with an overlay so it looks like we got
[21:07] a decent chunk to work with so let's
[21:10] turn back the room and we want to leave
[21:15] that the base room unscathed otherwise
[21:18] it's going to start affecting different
[21:20] elements so I can see right now that I
[21:24] think in fact that this wall module is a
[21:26] prop itself which is like another bonus
[21:29] like we don't always have to use these
[21:31] procedurally like if they look good and
[21:34] we want to ensure that that's always
[21:35] there we can use that as as just a stock
[21:40] stand a prefab and that means we get
[21:42] something as complex as this or little
[21:46] to no work well someone has to do it
[21:47] once obviously but if other people like
[21:51] that and it works for the environment
[21:53] they're working on you know it's a time
[21:55] saver as well so I'm just gonna go ahead
[21:59] and open this brief up because I want it
[22:05] I want what's in it we saw a little bit
[22:09] of this when we were doing our decorate
[22:13] in the back alley of our court bit with
[22:14] yeah blue on actually guess it was 2 or
[22:17] 3 months ago now
[22:20] and the prefer but I can grab these and
[22:25] I think maybe what might be cool is if
[22:27] we have some big pipes coming and and
[22:30] intersecting into here so I'm just going
[22:33] to duplicate this pipe will see with if
[22:36] we have any bigger ones there we go
[22:39] there's a nice big one and we can do we
[22:47] can do small changes like this so we
[22:49] could do large changes in a room like we
[22:51] could pretty much do the same overlay
[22:53] with one area quiet quite different and
[22:59] it all Cascades like that's another
[23:02] variation in the works that we can pull
[23:05] from and that's another situation where
[23:09] you're gonna you're going to be seeing a
[23:12] completely brand-new room with a click
[23:15] above with a click of a button pretty
[23:17] much so let's see if there's a corner
[23:19] brush for this pipe and this size
[23:26] corners and what's a corner brush it's
[23:32] just the pipe set pops up you know
[23:37] they're broken down names of working
[23:39] down so that quite human readable so a
[23:42] pipe straight would be a straight piece
[23:44] of pipe of popcorn or etc so that way we
[23:50] can kind of know what we're looking for
[23:51] different puzzle pieces like the flat
[23:54] edge puzzle pieces and the corner puzzle
[23:56] piece isn't correct or you can say this
[24:03] this prefab is getting in that way so
[24:06] what we could do see whereas we can put
[24:08] him I think up here we've already got
[24:12] one there
[24:15] think of all our bases of covered pretty
[24:19] much might be able to throw it in now
[24:22] this is literally what you're doing in
[24:24] your day to day we're in the process of
[24:26] building out all of these different
[24:28] interior modules and prefabs that will
[24:31] populate the modular space station
[24:34] Cera's when it comes online when they
[24:35] come online so it was asking how do
[24:40] these procedural layouts compare to the
[24:42] shape of the exteriors do you do you
[24:45] just you just do you build the interiors
[24:48] and then look for exterior that match do
[24:50] you start with an exterior
[24:52] how do those match up between interior
[24:55] and exterior yeah so that's a good
[24:57] question what we do is we kind of have
[25:00] an approximate collision volume that
[25:04] represents the exterior of is of a
[25:08] station so we kind of you know we want
[25:12] to make sure that where there's an
[25:15] interior there's it's connected to a
[25:17] nice view room outside so there's
[25:19] there's a kind of a point on the
[25:23] exterior that we know that the stations
[25:26] going to be stemming from almost because
[25:29] we know that we want the interiors to
[25:31] have a view room to the outside station
[25:33] so there's points all along exterior
[25:37] that we can we can kind of guarantee
[25:39] where it's going to start from and then
[25:41] we build a collision volume around these
[25:44] different elements so with the ring
[25:46] we've got a ring collision element or if
[25:50] it if we want station interior in like
[25:54] one of the lateral sections of the
[25:57] station we've got a collision volume
[25:59] over that and what that means is that
[26:03] the interior procedural system will just
[26:07] keep going and it will try it why it's
[26:11] it's going to guarantee that it won't
[26:12] clip through those collision volumes so
[26:15] within within those bounds would say
[26:17] that the station rings are those big new
[26:20] rings it's going to just fill in inside
[26:25] of that physical ring so we don't really
[26:29] have to do much much work to make the
[26:32] two fit together
[26:33] because we just have we know what the
[26:36] station looks like we know what the
[26:37] components are so we can kind of do a
[26:40] collision model of that and just say use
[26:44] the interior space
[26:46] and that's a big advantage of the
[26:48] tagging system when everything is tagged
[26:50] appropriately the system just knows
[26:52] which ones to match up to what yeah and
[26:56] the station next series were developed
[26:58] with this the same techniques or you
[27:02] know how we're starting to see a lot of
[27:03] variation between station exteriors it's
[27:08] the same process as as well all we're
[27:10] using at the moment as well so there's a
[27:18] question like a mini Cheerios will this
[27:19] tech allow you to do more locations more
[27:22] quickly in the future
[27:23] yes um yeah that's that's the idea like
[27:28] we're not with these uni uni rooms
[27:32] they're not just for station interiors
[27:37] it's for anything where it's appropriate
[27:39] to use a room like this the same same
[27:42] style same kind of feel that we're going
[27:45] for with interiors we can use these and
[27:48] especially the prop the prop volumes
[27:51] here that this is our like
[27:54] bread-and-butter even though it's the
[27:55] smallest element in it this is the
[27:57] library we're gonna keep expanding and
[27:59] expanding every time we get something
[28:01] new we're gonna put it in the prop
[28:02] library and even even you know the the
[28:07] landing zone people can use these these
[28:10] elements because it doesn't need to be
[28:12] procedurally brought in it is a prefab
[28:15] at the end of the day so we're we're
[28:17] working on like how we can speed up and
[28:21] quickly iterate and build out these
[28:23] locations with little to no human input
[28:27] obviously we want to make sure that
[28:29] design have gone through and there's a
[28:31] logical logical location to exist and we
[28:36] want to make sure that it it meets you
[28:39] know our goals artistically yeah it's
[28:41] one of the most one of the most common
[28:43] questions we get is a variation of that
[28:45] one about you know if this is taking
[28:47] this long how do you expect to be able
[28:49] to do X in the future and it's because
[28:52] all this development is designed to be
[28:53] exponential it's the hardest part is
[28:55] building all the tools is building all
[28:58] the
[28:58] teachers building all the the tile sets
[29:01] and once that steps done once you know
[29:03] every every planet makes the next planet
[29:06] faster every moon makes the next moon
[29:08] faster every Space Station makes the
[29:09] next Space Station and you're just that
[29:11] much faster and it's it again sometimes
[29:15] be kind of hard to see especially if
[29:17] you've been following the project as
[29:19] closely as a many of us have just you
[29:22] know did it's it's like when you put a
[29:24] lobster in water and you're slowly
[29:26] turning the temperature up the lobster
[29:28] doesn't notice you know that the
[29:30] temperature is getting is getting hotter
[29:31] we turn the speed and frequency up and
[29:35] we get better and more efficient at
[29:36] making these with each asset yeah so
[29:41] yeah that's right it's making recyclable
[29:46] content as well having that theory in
[29:49] the back of our mind they're like you
[29:50] know we're building a room it's got a
[29:53] it's got to have longevity in it it's
[29:55] got to be reusable so that's that's why
[29:58] we build these rooms in a certain way as
[30:00] well because there's no point making it
[30:03] all bespoke in the colonial exists in
[30:05] one location because that's that's no
[30:08] good for reusability yes Chet I just
[30:10] called you all lobsters and I said that
[30:12] you were all being boiled alive Thank
[30:17] You Chet that danger analogies with
[30:21] Jared Huckaby this I mean this could be
[30:25] better it could be integrated a bit more
[30:27] about you know I wasn't expecting you
[30:29] know take to go so like it's a complex
[30:34] base the procedural system
[30:36] maybe I'll just I'll cap this off so you
[30:41] know to hide any kind of oakley's that
[30:43] are going back on their back there and
[30:45] then I'm gonna export this overlay that
[30:50] we've done to the prefab library let's
[30:57] make sure lines up
[31:00] yeah obviously one of the challenges
[31:02] whenever we do these game to have
[31:03] segments is that people's work don't
[31:06] often fit into a nice 1 hour block
[31:10] yeah if everything could be done in one
[31:12] hour blocks a game developer would be a
[31:14] whole lot easier than it actually is
[31:16] so we're doing a shortened abbreviated
[31:19] not quite as precise version of this
[31:22] whenever we do these shows so you you've
[31:24] made a collection of items here and
[31:26] you're now going to export it over to
[31:29] the prefab yeah I've just I've just
[31:31] changed up this one little section so
[31:33] we're not going to see any grand kind of
[31:36] changes in the arc in the architecture
[31:38] you'll just see something slightly
[31:40] different over here obviously you know
[31:44] in full capacity would go a bit beyond
[31:46] just doing by placing a couple of pipes
[31:50] and some grates
[31:53] just because you know you want to do
[31:55] enough that it warrants another overlay
[31:57] you can't just change like you know a
[32:01] floor around because there's much better
[32:03] and efficient methods for doing that ok
[32:06] like the problems if you just want to
[32:08] change one element turn it into a
[32:10] procedural prop and then it can be as
[32:13] random as at once so we're going to jump
[32:17] into these handy tools here which Y has
[32:22] been hard at work on and this is like
[32:25] the the main go-to tools that were using
[32:28] to help us along the way and what we're
[32:34] going to do is we're just going to
[32:36] export this out to a prefab library and
[32:39] I'll show you library after after we do
[32:41] it so I'm just going to say I want uni
[32:46] large or five overlay C and I want to
[32:49] put it in the room share to overlay I'm
[32:52] gonna sign it and that's all hunky-dory
[32:55] that's fine so we can turn that off we
[32:59] can turn these overlays off and I'll
[33:01] show you
[33:06] the prefab library if this window wants
[33:10] to jump over come on
[33:13] there yeah so in this room shared
[33:17] overlay I've got unis room large I might
[33:22] have to refresh this actually and then
[33:26] we've got overlay see which is the
[33:28] overlay we just made and we can just
[33:31] drag this in as a normal prefab and see
[33:35] obviously might not line up because I'm
[33:38] just dragging it into an arbitrary
[33:40] location but you can see there's our
[33:42] pipes that we changed just gonna delete
[33:46] that back into that bare-bones level
[33:52] that we started with and then we're just
[33:56] gonna click this preview button a few
[33:58] times we might not see ll1 straight away
[34:01] because it is procedural right we are
[34:03] one in three chance of seeing it but
[34:08] let's hope let's see if we can get up
[34:09] first Gary so the people the people in
[34:17] chapter like just make this show longer
[34:21] work yeah it's back to work after this
[34:26] it's so we didn't see how change yeah so
[34:30] we'll go again and like this might be a
[34:32] good showcase of just all the different
[34:35] variations we come across along the way
[34:38] out of there we go there's the room we
[34:43] made together the one that there's the
[34:45] there's the new layout with the asset
[34:48] you just created yep so you know
[34:51] something like this that changes the
[34:52] silhouette of that area like they're
[34:54] they're very strong changes they're the
[34:57] ones that you kind of noticed because as
[34:59] you're running through these stations
[35:00] like a lot of this is going to be a blur
[35:03] so strong silhouette changes are always
[35:07] good because you just say I'll hold up I
[35:09] don't you know my orientations off
[35:12] because I'm used to being able to see
[35:14] like this corner coming up
[35:17] so yeah that that works so I thought how
[35:23] much time we yeah we got a plenty of
[35:24] time so I thought would go over and we
[35:27] would make a prop volume as well and
[35:30] then we would throw it into the mix and
[35:33] see if we can get one of these overlays
[35:34] that this born in a new prop and we can
[35:38] highlight that end of the process as
[35:40] well it's really quite similar because
[35:42] at the crux of it it revolves around a
[35:46] prefab system
[35:49] so actually why don't we go here let's
[35:52] let's find let's turn on this early
[35:57] what were we working with yeah
[36:02] volumes turned off somebody Chad's
[36:05] asking do you ever think about just
[36:07] making a really clean space station
[36:10] sometimes a really clean location that
[36:12] isn't dirty and messy and disorganized
[36:16] yeah I mean if the style calls for we
[36:20] will but the style for the station's at
[36:24] least these ones in the stanton system
[36:26] it's utilitarian these aren't new that
[36:29] they've been here for a very long time
[36:32] and it is a large location to keep track
[36:36] of so you're gonna see a bit of things
[36:39] run wild within it it's not going to be
[36:42] kept updated updated and it depends as
[36:49] well like within these utilitarian
[36:52] station interiors as well we do have
[36:53] kind of like higher focused areas where
[36:56] it's more of a communal space where they
[37:01] would focus their attention on so that
[37:05] might be a bit more cleaner and high-end
[37:07] and less maintenance props around like
[37:09] you wouldn't expect to see these
[37:10] maintenance props in every single room
[37:13] this is more of you know that back
[37:15] traversal alley that that none of this
[37:18] the people who live here care too much
[37:21] about enough to to do something about it
[37:25] also a real easy way just to make
[37:26] something feel lived-in yeah
[37:30] but definitely why we're still working
[37:33] on utilitarian stations they can look
[37:37] they're gonna be a bit lived in and a
[37:40] bit beaten up but that doesn't mean that
[37:42] you know we don't entertain the ideas of
[37:45] what a high-tech station might look like
[37:46] or a station by a different manufacturer
[37:51] these are resting relaxed earned
[37:54] stations so they're gonna kind of feel
[37:58] like a public rest stop back on you know
[38:03] route 65 or something like that just
[38:05] don't go into the toilets captain
[38:10] coasters lived in doesn't have to mean
[38:11] dirty no it doesn't but it sure does
[38:13] help yeah besides I think without giving
[38:19] too much away as we work towards a
[38:21] location like micro tech you'll probably
[38:23] see me seeing a more cleaner aesthetic
[38:25] the two the two planets we've we've got
[38:28] so far Hurston and our corporal are very
[38:30] industrialized or very mechanically
[38:34] inclined stuff like that as we as we
[38:35] move towards other locations like micro
[38:37] tech and an Crusader I think you'll
[38:40] you'll see more of probably what what
[38:42] you're asking about yeah you can just
[38:44] say you know better population on those
[38:50] planets as well little tolerance for
[38:53] wrongdoings and one also the people who
[38:56] live there are gonna be a bit more
[38:58] sophisticated and someone I would say
[39:00] more maybe perhaps more organized but
[39:02] they don't say yeah they're not they're
[39:03] not better because they make their bed
[39:05] you tell my mom that for years all right
[39:08] so we saw that while using a storage tag
[39:14] in the other room so we're gonna go and
[39:17] we'll make a shelf I don't know why a
[39:19] shelf what's born here but for the sake
[39:23] we can for we're gonna do it I'll show
[39:26] you how we can kind of within the same
[39:29] kind of system storage storage come in
[39:33] boxes that can mean shelves any kind of
[39:37] container really we can still get kind
[39:40] of guarantee
[39:43] that we're not going to sport a shelf in
[39:44] there by setting things up smarter so
[39:51] they did we explain what this level is
[39:54] that we're looking at right now that
[39:54] this is our library yeah this is a level
[39:59] that where you've just got everything
[40:01] that you can pull from kind of splayed
[40:03] out with some yeah with with some debug
[40:05] text helping you identify which each one
[40:07] is so this just helps us so we're not
[40:11] you know someone's not making vending
[40:12] machines over here on someone else is
[40:14] making vending machines over here if we
[40:17] want to go in and debug vending machines
[40:19] or make new ones we know where to come
[40:20] to so we got you know a wide range of
[40:27] things and and this this library is
[40:29] always going to be expanding as well so
[40:31] might look a bit bare-bones before like
[40:34] a really huge station interior but it's
[40:37] something that we're gonna work on all
[40:39] the time on every location we're gonna
[40:42] be populating this with new things that
[40:44] you know someone someone might set dress
[40:47] apart manually I mean like oh great I
[40:50] actually want to be able to reuse that
[40:52] procedurally we're just you ain't get
[40:54] put it in this prop library and then
[40:57] everyone benefits from it across the PU
[41:00] anyone who's making a location from the
[41:02] PU will benefit from this library Zirin
[41:06] has are the modules system related as in
[41:09] star citizen related can we expect
[41:10] different themes and different star
[41:12] systems I would say absolutely yeah
[41:16] yeah I think you know it's it's it's
[41:19] easy to forget that we're still building
[41:20] the stanton system and even though the
[41:21] Stan system has our corporate Hurston
[41:23] and micro tech it is still you know one
[41:26] region of space so there's going to be a
[41:28] lot of similarities a lot of shared
[41:30] shared aspects between them all correct
[41:36] so I'm gonna jump the gun a little bit
[41:40] and we're going to take this procedural
[41:43] layout info box and this is the box that
[41:46] tells those orange box am i compatible
[41:50] so this has a dimensions three by two by
[41:52] one and it has some tags on that storage
[41:54] Lorelei
[41:56] so when those are in the box our look
[41:58] looking for those tags and those
[42:00] dimensions it's going to use this and
[42:02] the dimensions come from the bounds
[42:05] itself so it's not as much of an
[42:08] estimation so what we're looking for is
[42:13] Floor Store comm which means it's floor
[42:17] aligned it's a storage and it's a common
[42:20] element so it's common is it pretty much
[42:23] more sophisticated word for generic so
[42:27] we want to make a new one a new layer
[42:30] actually we're gonna leave the layer
[42:31] because I don't know how big this this
[42:34] shelf is going to be and we like to
[42:36] organize layers by the dimensions so
[42:41] we're just gonna go to town first and
[42:45] worry about the layer later and we can
[42:51] turn off volumes so this blue box isn't
[42:54] in our way so we're gonna look for some
[42:59] shelves this containers maybe none of
[43:04] those
[43:10] let's just search for shelf
[43:26] scroll Paran that's good now we could go
[43:34] in as well and we could populate the
[43:37] contents of this shelf with additional
[43:41] secondary elements like we could go as
[43:43] deep as we want obviously there's a
[43:45] point where we're saying that that's
[43:47] that's deep enough because we we want to
[43:51] keep track of like any issues that arise
[43:53] and and if we're seeing an issue on this
[43:56] shelf and then we're going to look at
[43:58] the shelf and it turns out it's
[43:59] something on the Shelf that's causing
[44:00] the issue well I'll go into that then
[44:03] and that's something within that thing
[44:05] that's on the shelf that's causing the
[44:06] issue and we have to go in there again
[44:08] we're gonna get lost pretty easily so
[44:11] Russian nesting dolls yeah we can we can
[44:14] definitely do it like I'll show you
[44:16] let's turn volumes back on and see if we
[44:19] can spot something with here we go so
[44:23] this seat here
[44:24] so this seat is it's got a secondary
[44:30] element in it
[44:31] so we're saying what's it looking for
[44:34] it's just looking for any floral and
[44:36] element that fits these dimensions so
[44:38] whenever this seat comes in we have the
[44:40] ability to spawn in something completely
[44:42] random with it as well so for example it
[44:46] could come in with come in with a trash
[44:53] can any one of these trash cans etc
[44:56] anything that really fits in that and
[44:58] then in the future because it hasn't
[45:00] very it hasn't been kind of spelled out
[45:03] to to spawn in a specific thing it's
[45:07] just saying anything that goes on the
[45:08] floor spawn me in as we make new things
[45:11] we make new new props if it fits those
[45:15] dimensions we're gonna start seeing that
[45:16] seat come in with that new thing that we
[45:19] made with no effort from us at all which
[45:23] is just more added variation I don't
[45:27] think we will add those secondary
[45:30] elements in here and like because then I
[45:33] have to create another prop volume too
[45:38] populate these shelves so we will just
[45:40] do it manually but in the future I think
[45:43] I think a shelf is one of those those
[45:47] structures that you can justify having
[45:50] another secondary element in here so
[45:54] because what good's a shop with nothing
[45:56] on it yeah so what can we put on here we
[46:04] can put up books I can try looking for
[46:08] some some books these cardboard in the
[46:12] future still cardboard or is it
[46:15] starboard synthetic tree material maybe
[46:21] just an idea for the riders outlet that
[46:25] was from mr. square peg don't blame me
[46:27] well I'm the one who read it I guess you
[46:30] blame me a little bit what else we got
[46:35] any larger books I don't know there's
[46:41] something compelling about a giant
[46:42] bookshelf with only one book on it makes
[46:45] it seem like that one book is super
[46:46] important what is that one book with
[46:49] super important the Bureau of shipyard
[46:52] development nobody's interested in ship
[46:55] your development something we need to go
[46:59] off grid for these final movements we
[47:03] don't have too much time so it might end
[47:05] up being quite a bad burn shelf unless I
[47:08] can find some bigger props than just a
[47:11] itty bitty book to fill this with would
[47:14] be enough to demonstrate alright there's
[47:16] multiple books at my help look older I
[47:25] could be some like hidden relics
[47:32] we're filling in a bit more space now
[47:34] which is good and as we going on you
[47:43] could probably see how you know if we
[47:46] were working with a prop library and
[47:50] we'll just kind of like doing this one
[47:51] off on on a location like you know I've
[47:56] got a room I might want a bookshelf
[47:58] there and I start populating it with
[48:00] books and then that's it that's it
[48:04] exists there and there only and then
[48:06] someone else comes along and in their
[48:08] area they they're like oh um I want a
[48:10] bookshelf and then they're doing the
[48:12] same thing there's there's a lot of like
[48:16] work that it's been done and you can't
[48:18] really reuse it that's why we're
[48:20] populating this library as well because
[48:23] now I really only have to build this
[48:26] bookshelf once and anyone can use it so
[48:33] if you if you're in the location you
[48:34] like you know I think my room could use
[48:37] a bookshelf you come in here and you get
[48:39] one pre dressed and you know even if you
[48:42] don't want as it is you want to go in
[48:44] and you want to change change it up so
[48:46] it's it's unique it's your own spin you
[48:49] can do that you can extract the items
[48:51] from the prefab the important thing is
[48:53] that you're getting like half the way
[48:55] there yeah although I'm gonna say
[48:58] there's a public service announcement to
[49:00] anybody if you walk into any space
[49:03] station and you see a bookshelf with
[49:05] nine copies of the same fish tank book
[49:07] run somebody's trying to kill you idea
[49:11] there's a killer on the loose it's too
[49:14] many copies of fish tank books
[49:16] something's not right here
[49:17] I think the author's trying to you know
[49:23] give out free copies so yeah I mean this
[49:28] this works for for you know the demo
[49:31] purposes we're not trying to show you
[49:34] like flash flash er and it's showing
[49:37] that like the process so now what we
[49:39] want to do is we we want to match this
[49:42] volume as close as we can
[49:44] so if we click on this we can kind of
[49:46] get some dimensions out of it I know
[49:48] it's a 2.7 meters tall and 2 meters
[49:54] across and 7.75 so I've forgotten all
[50:01] those numbers already so we go on X 2.75
[50:07] and how tall was it again
[50:12] 275 it doesn't have to be the most
[50:18] accurate but because in the other level
[50:20] all you're seeing is those empty volumes
[50:23] it's best to have something that closely
[50:27] approximates the volume that way you can
[50:30] you can kind of guarantee that if
[50:32] something spawns in there it's not going
[50:35] to clip through this stuff near it and
[50:37] the walls and stuff like that because
[50:39] you can see that that volume that it's
[50:41] coming in as looks like I'm off a bit I
[50:49] mean it is just that just an estimate at
[50:53] this point so who cares or something
[50:56] like this so that we know that you know
[51:02] this anything if you've got stuff
[51:03] clipping into these these bounds on the
[51:06] other end you know that the geometry is
[51:08] going to come in clipping and because I
[51:11] copied this info box from over here I
[51:14] don't have to set up the tags but I'll
[51:16] go into that briefly just to show you
[51:19] it's not like voodoo or anything
[51:22] we've just got on this info box a code
[51:26] that comes is generated from picking
[51:30] some tags so we go low-tech utilitarian
[51:34] it's floral and and it's storage we
[51:37] could take more or less tags as we need
[51:39] and we can make new tags as well so if
[51:43] we get to a point where storage isn't
[51:44] descriptive enough and we're getting you
[51:47] know the storage volume has expanded
[51:50] considerably and we're starting to see
[51:52] less than desirable results spawn in
[51:55] then we can start thinking about having
[51:56] a new tag
[51:58] kind of subdivide storage into different
[52:00] storage if somebody's asking in chat if
[52:02] if should we choose to could we go even
[52:05] further down this rabbit hole and start
[52:08] procedurally generating the array of
[52:10] books like if we tagged every single
[52:12] book in yeah you could
[52:18] there would be an extent of how deep you
[52:20] want to do that every single book
[52:22] prestige all might be a bit overkill but
[52:25] definitely like you know each one of
[52:27] these brushes that are placed could
[52:29] definitely be a volume that way so I
[52:32] don't have to manually kind of randomize
[52:35] it like I'm never gonna be able to
[52:37] randomize something as good as a
[52:38] computer can do so if I want to random
[52:43] like no I didn't I didn't kind of when
[52:47] you're getting in the mindset of of
[52:48] setting these props down and stuff like
[52:51] that I'm not placing these books the
[52:52] people who believed here are placing
[52:54] these books kind of thing so you kind of
[52:56] want to detach yourself from you know
[52:59] it's me I'm I'm some omnipotent being
[53:02] placing books in star citizen kind of
[53:05] thing so I think yeah getting these
[53:08] randomized would would definitely be
[53:10] great and there's something I'll
[53:12] probably do off-camera when I get back
[53:14] to work new brush and confirmed I'm
[53:17] nipping and being placing books sign me
[53:21] up
[53:22] so we got all the tags we need what
[53:25] we're missing is a lair now because
[53:28] we're we're still hijacking Floor Store
[53:30] comm 3x2 and it's not those dimensions
[53:34] at all so what we can do is create a new
[53:38] layer we know it's a floral and store
[53:44] calm and it is to buy zero seven five
[53:54] and then this will be a new kind of
[53:58] parent layer for all the different types
[54:03] common storage modules that are 2 7 2 by
[54:08] 0 75 so you can see within these and
[54:12] might be yeah there's two
[54:14] two different elements that fit those
[54:16] metrics as well at the moment we're just
[54:20] gonna have this one that fits this
[54:21] metric but we still need the layer for
[54:24] it so we're going to copy this name and
[54:33] create a new layer or one need to track
[54:41] that in and what we're gonna do is grab
[54:44] everything here and throw it in that
[54:49] layer we just made it should be good and
[54:53] then we're gonna get the trusty
[54:55] procedural element tool out and we want
[54:59] to create an element prefab from this
[55:02] let me just select an existing layer sir
[55:12] okay well I'll have to do it manually so
[55:14] I wanna honor that's right chat is
[55:18] debating why books even exist in hundred
[55:20] and forty years in the future that
[55:22] that's a that's a question for
[55:24] philosophers and Dave haddock
[55:26] well people still collect vinyls to
[55:28] these days who knows what people are
[55:30] still keeping around it might be a full
[55:35] circle and finals might become the new
[55:38] thing like blu-ray to DVD so we're going
[55:43] to assign this this layer to the prefab
[55:47] library with a click of a button
[55:50] great we can just double check this for
[55:55] our sanity that it in fact came in to
[56:00] come to a prop library floor aligned
[56:04] storage common I need to refresh the
[56:08] library demo or aligned storage come in
[56:11] I don't think it came in
[56:24] it might not like that zero in there so
[56:29] we're just gonna round it up to two one
[56:46] yep and what we're missing is probably
[56:52] why I didn't save it is we're missing a
[56:55] prefab pivot I was just going to say
[56:58] that and we will not align it to this
[57:05] input box 2x1 everyone what's the
[57:11] correct layer prefab pivot is so that
[57:15] when it gets brought in one of the one
[57:18] of the variables is the pivot angle that
[57:22] can be out so that not everything is at
[57:23] a straight 90-degree angle every time
[57:26] right yep correct
[57:29] you thought I was joking what I was
[57:32] being serious
[57:32] I don't think I got these on the right
[57:36] layer either 2x1 store coming still
[57:42] coming in that's right
[57:52] I'm just selecting a different layer
[57:54] that's already exported to the prop
[57:56] library so I can get this ball path
[57:59] automatically instead of manually
[58:01] looking for it yep no red text they were
[58:06] good
[58:07] let's check the database one more time
[58:14] Chiqui refresh 2x1 great so if I drag
[58:24] this in great we've got a procedural
[58:26] element now so that should be all we
[58:29] need from this level so we can jump back
[58:32] over to here let's go on our overlay
[58:36] because we want to change this up a bit
[58:42] and what I'm gonna do is I'm gonna bring
[58:44] in that element that prop just side by
[58:48] side for now so I can make sure that the
[58:50] size and the tags are correct when I
[58:53] when I modify this one bring this over
[58:58] so you can see I'm just doing that the
[59:02] same thing just but in this editor
[59:04] instead storage common to buy alarm so
[59:09] bring it in here and like this is a good
[59:12] kind of validation way as well so we can
[59:15] chuck it up here we can rewrite I mean I
[59:19] would say though that this doesn't fit
[59:22] but for the sake of the demo it could be
[59:24] like yeah yeah that works there so
[59:27] that's great so we're gonna put these
[59:31] side-by-side because I can see these I
[59:33] can see the tags and the dimensions it's
[59:35] looking for and we're gonna get it to
[59:38] spawn in here I mean it's always gonna
[59:41] spawn this one in because we've only got
[59:42] one on that but we could do something
[59:44] else that's not as cool but we can lower
[59:48] this born chance of this coming in to
[59:51] quite low all we can see actually can we
[59:56] get this to spawn in over here that's
[1:00:00] the minimum dimensions okay we're gonna
[1:00:04] lower the minimum dimensions here and
[1:00:05] add storage if I do this not quite sure
[1:00:12] what will spawn in but let's try it
[1:00:14] anyway so - I suppose we've had a lot of
[1:00:20] luck with on this show going back to
[1:00:23] reverse the version happier not sure
[1:00:24] quite sure what this is going to do and
[1:00:26] then we get a giant spider and that
[1:00:29] dude's genitalia that happened it
[1:00:35] happens I'm not proud of it but it
[1:00:37] happened so we're pretty much telling
[1:00:41] this volume that you can spawn anything
[1:00:43] between these I sure didn't need to
[1:00:48] change the minimum did I no lower is
[1:00:51] better so if it can fit within this
[1:00:57] volume and it's bigger than this
[1:00:59] internal volume it will spawn it in but
[1:01:02] we can see is that the right tank
[1:01:05] storage floor align oh cool
[1:01:08] so I didn't need to add any more tags
[1:01:09] but what I can do is I can add a
[1:01:12] different like sub set of tags which
[1:01:14] would be kind of like an end or
[1:01:17] statement so either look for storage of
[1:01:19] lower lined or maybe look for bending
[1:01:24] floor lines so we can kind of do an
[1:01:27] either/or like either spawn in storage
[1:01:29] or a vending machine I don't care this
[1:01:31] this point and it kind of you can kind
[1:01:35] of narrow it down so it's less arbitrary
[1:01:37] than just floor lined
[1:01:38] I just want anything to spawn here but
[1:01:40] you know you kind of know that you know
[1:01:43] this is a communal space so maybe don't
[1:01:46] do storage bar I don't mind if it's a
[1:01:47] vending or a seat because they're the
[1:01:49] kind of elements you'd see in a more
[1:01:51] commercial space somebody see it
[1:01:53] somewhere for people to drink as well so
[1:01:58] we've got that control over that as well
[1:02:00] so we don't need that that guy anymore
[1:02:02] what we can do is just cycle through
[1:02:04] this
[1:02:05] test what's coming in my database didn't
[1:02:09] spawning the way this might take a few
[1:02:12] spins usually a random system so truly
[1:02:17] random but as long as we made there's
[1:02:20] the you know the tags lined up and their
[1:02:24] sizes lineup as well just clicking it
[1:02:31] this is literally the last thing we'll
[1:02:33] be doing on the show so as we've already
[1:02:36] hit time so sure maybe it'll be
[1:02:39] appropriately funny if just want to make
[1:02:42] sure we'll just keep those tags say on
[1:02:53] star citizen live game dev we show you
[1:02:56] the behind the scenes look at the true
[1:02:59] real to life process of the game
[1:03:01] developer and Wow sometimes it's it's
[1:03:05] something you know flashy like creating
[1:03:08] a new character concept other times it's
[1:03:10] just as important stuff like creating
[1:03:13] this procedural systems that will be the
[1:03:15] foundation for the future of space
[1:03:18] stations throughout the game and so
[1:03:22] don't you push a button and you push a
[1:03:24] button and you push a button it still
[1:03:27] doesn't do what you want it to do
[1:03:30] so I'm just going to get a couple of
[1:03:33] these randomly generating at once so we
[1:03:35] can start seeing a couple get through
[1:03:39] the you know the random seeds a lot
[1:03:42] quicker I'll see if I can get my shelf
[1:03:46] to spawn in
[1:03:55] so now now I'm thinking I should have
[1:03:57] probably spawned in by now so and
[1:03:59] possibly an error I'm doing on my end
[1:04:02] it's alright Emily let me just remove
[1:04:06] the preview
[1:04:15] at the very least if this doesn't work
[1:04:17] let's go back to the original layer and
[1:04:19] just show the folks that have joined
[1:04:20] since the beginning the show how the
[1:04:23] entire layer can spawn in one way we can
[1:04:28] debug with a lot this is spawning
[1:04:30] incorrectly is we sit up the sizes to a
[1:04:36] tee so we we go where's this two by
[1:04:41] seven five to seven five three point
[1:04:52] seven five to five and we said that the
[1:05:00] mental that this as well so now we're
[1:05:03] only gonna get something that fits
[1:05:07] within this so we're going to start
[1:05:10] seeing a lot less of it other props so
[1:05:12] floor align storage its utilitarian just
[1:05:19] check my default tags yep and now I can
[1:05:27] spawn this and I can kind of see the the
[1:05:29] console will spit out at me okay so it's
[1:05:35] boarding now so we just have to be a bit
[1:05:38] more specific with the size I guess so
[1:05:43] we're just for simplicity because I know
[1:05:45] we're gonna wrap up I'll just drop that
[1:05:46] random chance
[1:05:47] I talked about - lets go point seven so
[1:05:53] don't want to sit here forever trying to
[1:05:55] get it to spoil a lot to not spawn and
[1:05:58] are we on yep so we're on overlay C and
[1:06:05] I just need to quickly explore this back
[1:06:07] out into the prefab library so that so
[1:06:11] the library is updated and I can turn
[1:06:14] off see actually I kind of
[1:06:18] underestimated how quickly I could
[1:06:21] probably preview this because now I've
[1:06:23] got a one in three chance of spawning in
[1:06:25] the overlay that I put the Shelf in and
[1:06:27] then appoint a chance of actually seeing
[1:06:29] the shelf but you know all your dances
[1:06:33] sometimes you just gotta believe that
[1:06:39] you have joined us since the beginning
[1:06:42] of the show this is a one-click
[1:06:44] procedural generation button for all the
[1:06:46] elements that are in this space station
[1:06:48] room and you got it on the first track
[1:06:50] all that first first try I see people in
[1:06:53] the chat must have been believing so we
[1:06:55] did it let's do a couple more
[1:06:58] generations before we will have people
[1:07:00] go just because we showed this stuff at
[1:07:03] the beginning and there folks who may
[1:07:04] not have been here at the beginning see
[1:07:06] it so we click a procedural generation
[1:07:09] button reads all the tags that are laid
[1:07:12] they're laid out throughout the this
[1:07:16] particular room and does a whole nother
[1:07:19] there's a whole nother layout with
[1:07:21] different lighting with different
[1:07:23] environment problems oh we didn't show
[1:07:24] there the the the dynamic environment
[1:07:28] probes
[1:07:29] ok katachi look briefly replicas they do
[1:07:33] have to let you go yeah we're we're on
[1:07:34] our camera yeah I'll talk over that
[1:07:37] while I chart different uni room because
[1:07:39] we've seen over five a lot and I don't
[1:07:41] want to get people to let people down
[1:07:44] and to think we're just kind of changing
[1:07:46] one room up a tiny little bit we're
[1:07:48] actually working on you know we have the
[1:07:52] chance of spawning in five different uni
[1:07:55] rooms instead of one so we can just do
[1:07:59] the same thing on a completely different
[1:08:00] room so yeah you know real time probes
[1:08:06] is something that kind of makes this
[1:08:10] possible because previously we we baked
[1:08:15] our probes and they'll static food they
[1:08:17] would belong to a certain lighting setup
[1:08:20] so if we if we brought in red lights on
[1:08:23] a probe that was baked for green lights
[1:08:25] we would see red lights but kind of
[1:08:28] green reflections right
[1:08:30] that would really make much sense but
[1:08:33] [Music]
[1:08:35] because of real-time probes now means we
[1:08:38] can change up the lighting so whatever
[1:08:41] we want really got some stuff spawning
[1:08:48] in odd spots yeah you know I got too
[1:08:53] many previews and then you know the
[1:08:57] lighting changes dynamically so now we
[1:08:59] can we can do a lot wider changes in
[1:09:04] terms of lighting and stuff like that as
[1:09:06] well for the environment probes are
[1:09:13] basically the image in the easy kind of
[1:09:16] a layman's sense you can have you can
[1:09:18] have red lights you have blue eyes you
[1:09:19] have green lights and whatnot but the
[1:09:20] environment probes are how are determine
[1:09:23] how those lights react with the
[1:09:25] environment for lack of a better term
[1:09:27] and they could they it's all the
[1:09:28] environmental factors that are there
[1:09:29] that can affect it make it look but make
[1:09:32] it look more greenish like you was
[1:09:33] talking about it's a big part of why
[1:09:35] sometimes your your spaceship looks a
[1:09:38] completely different color in one
[1:09:39] location versus another location just
[1:09:41] like it doesn't realize and before they
[1:09:46] had to bake those in that they had to
[1:09:47] like create in each and each environment
[1:09:49] probe individually for each location but
[1:09:52] now they're dynamic that's so much more
[1:09:55] freeing
[1:10:01] I'm just trying a different is it
[1:10:03] Universal room
[1:10:19] but something came in oh very might be
[1:10:24] dying
[1:10:27] yeah for some reason I was dying but
[1:10:32] yeah this we can run it a few times on
[1:10:34] on this level as well see what we get
[1:10:39] [Music]
[1:10:43] totally different changes and it's not
[1:10:50] just the props that are changing the
[1:10:51] entire atmosphere yeah we can specify on
[1:10:58] volumes as well you know whether or not
[1:11:01] they met you know warmish lights or cool
[1:11:03] lights so we can we have that finite
[1:11:05] control over like the mood in a room as
[1:11:09] well so we're not seeing kind of like in
[1:11:12] color theory you can have two calls that
[1:11:14] don't go together and you know that's
[1:11:16] another kind of control we have on it so
[1:11:18] we're not putting you know blue and red
[1:11:21] lights right next to each other and
[1:11:23] creating like like jarring visuals you
[1:11:26] know we can put lights that work well
[1:11:28] together with other lots that work well
[1:11:30] together right well I don't want to keep
[1:11:32] you trapped here like these three dudes
[1:11:33] are here so you go ahead and switch back
[1:11:36] to your camera here we'll wrap things up
[1:11:40] Joel thank you so much for taking the
[1:11:43] time out of at the end of your week it's
[1:11:45] always you know these are always at the
[1:11:47] end of everybody's week they're always
[1:11:48] at the end of Fridays especially when
[1:11:50] they're into it from the UK me here I'm
[1:11:52] just starting my Friday I still got a
[1:11:53] whole day of work left to do but you you
[1:11:55] get to finish up and go home so thank
[1:11:57] you for staying late thank you for
[1:11:58] taking the time to show us your process
[1:12:00] to explore just a little of what goes
[1:12:03] into these modular space station
[1:12:04] interiors of course these are currently
[1:12:06] in development as part of our ongoing
[1:12:09] work to build out not just to spent the
[1:12:12] stanton system but star citizen in
[1:12:14] general so Joel thank you so much i'ma
[1:12:16] let you go guys remember there's an
[1:12:18] episode of pillow talk coming out later
[1:12:20] today I don't entirely know when because
[1:12:22] I've been in here doing this for last
[1:12:23] hour so that's going straight to YouTube
[1:12:25] keep an eye out for that as well as
[1:12:27] updates to the public roadmap and we'll
[1:12:29] be back here next week with
[1:12:31] with another episode of star citizen
[1:12:33] line so thanks that's watching Tigger
[1:12:49] thanks for watching for the latest and
[1:12:51] greatest in star citizen a squadron 42
[1:12:53] you can subscribe to our channel or you
[1:12:55] can check out some of the other shows
[1:12:56] and you can also head to our website at
[1:13:01] www.uvu.edu/library

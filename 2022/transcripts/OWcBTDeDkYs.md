# Star Citizen Live Gamedev: Practical Interactable

**Video:** https://www.youtube.com/watch?v=OWcBTDeDkYs
**Date:** 2022-07-08
**Duration:** 1:03:52

## Transcript

[00:00] stars in live game dev practical
[00:02] interactable
[00:04] which is the closest word i could find
[00:06] to rhyme with interactable
[00:10] starring jared lewis hi everybody
[00:12] uh welcome to star citizen live it is
[00:14] friday uh july 8th
[00:18] 2022
[00:19] uh
[00:20] we are hanging out as we are want to do
[00:23] uh this week is one of our game dev
[00:26] shows where instead of the normal hustle
[00:28] and bustle q a and stuff like that uh we
[00:31] are going to hang out with our
[00:33] dev du jour uh the wonderful lewis right
[00:37] here say hi lewis
[00:38] hello everyone
[00:40] and louis uh
[00:42] formerly of the props team
[00:44] is now on the newly formed and minted
[00:48] interactables team
[00:50] so louis why don't why don't we start
[00:52] with that this is a brand new team that
[00:55] uh didn't exist before this week
[00:57] apart you remember the only constant in
[00:59] game development is change
[01:02] so uh
[01:03] what is uh what is the interactives
[01:06] interactables team interactables team
[01:09] that's a very good question and uh i
[01:10] think it's saying that's going to be
[01:12] hashed out over the coming months a bit
[01:15] more um but at the moment as it stands
[01:18] it's basically um a props team 2.0 um
[01:22] but the goal of this team is to kind of
[01:24] push the props a little bit further so
[01:26] whereas we've just kind of done the art
[01:28] before
[01:29] um the interactive team is about
[01:31] interactable so
[01:32] obviously more complex props with more
[01:34] functionality um being able to take on a
[01:37] bit more of the technical setup and
[01:38] stuff like that um
[01:40] and kind of be our own entity really so
[01:42] usually we're kind of just supporting
[01:44] you know environment team ai team
[01:46] mission feature team you know diff
[01:49] different teams we provide support um
[01:51] but this is going to be more of a kind
[01:53] of um a team where we can kind of start
[01:56] shaping our own like game features and
[01:58] stuff ourselves which is uh really
[02:00] really exciting so
[02:01] yeah it's like a props team but a
[02:04] more in-depth technical version yeah and
[02:07] and and and prop starters and stuff
[02:08] still exist there they're they've been
[02:10] embedded in other teams and stuff like
[02:12] that so and profs are an absolutely
[02:14] essential part of
[02:16] making a space seem lived in and and and
[02:19] and and a diegetic uh it's one of the
[02:22] reasons i i've taken as many times as i
[02:25] have to uh emphasize and highlight the
[02:27] props team because i'm a big fan of of
[02:29] their contribution the inter the
[02:31] interactive team as you just said is
[02:32] this new kind of thing about
[02:34] finding a way to build props and stuff
[02:36] that we can put into players hands and
[02:39] survey function and not just decorate a
[02:42] scene and to that end
[02:44] uh one of uh what are we doing today
[02:48] louis
[02:49] i mean
[02:52] yeah so um
[02:54] basically um
[02:57] going in so our team's brand new um and
[02:59] we're kind of just starting to to find
[03:01] our feet and get the ball rolling on on
[03:03] the stuff we have to work on um but
[03:05] previous to this before we got started
[03:07] as we were kind of ramping down our work
[03:09] with um
[03:10] the previous props team
[03:12] um we took a bit of time to start
[03:15] you know looking at what kind of cool
[03:17] new features we could develop what we're
[03:18] able to do with the skills we currently
[03:20] have and then maybe what we're able to
[03:22] progress into later on so to that end we
[03:25] kind of sat down and thought okay what
[03:27] can we do with with props
[03:30] so um
[03:31] we we thought it'd be awesome to create
[03:33] like a cool
[03:34] um
[03:35] set of props um that players would be
[03:38] able to you know maybe pick up take with
[03:40] them to places
[03:41] um and place wherever they'd like
[03:44] um within reason
[03:46] so um we we sat around and we thought oh
[03:49] well you won't be really cool maybe
[03:51] making some form of like you know
[03:53] camping set um something like that where
[03:55] players can like load up their ship with
[03:58] some equipment take them to anywhere in
[04:00] the verse land uh and and place them and
[04:04] have little camps and stuff
[04:05] you know maybe we kind of make little
[04:07] tableaus make little campsites of their
[04:09] own and stuff
[04:11] yeah we went we went wild with the
[04:12] thought process we were just like you
[04:14] imagine you know when when all the the
[04:16] tech comes online and we have like lots
[04:18] of players on the server they'll
[04:20] come and set up like
[04:22] tents and stuff we can have our own like
[04:23] version of glastonbury
[04:25] star citizen
[04:26] and it's not it's not the only
[04:28] initiative that the the the new
[04:30] interactive team is tackling this is
[04:31] just the one that we've chosen to
[04:33] highlight and explore today uh uh not
[04:36] everything that we make in star citizen
[04:38] at live game dev you know goes into the
[04:40] game but whenever possible
[04:43] we do try to
[04:44] piggyback on work that you're already
[04:46] doing so that we can see the process of
[04:48] making stuff that will has a better
[04:50] chance of someday making it into the
[04:52] game and since
[04:53] the team is already scoping out camping
[04:55] gear we thought let's make some camping
[04:57] gear today so with that i am going to
[04:59] turn it over to you and push this button
[05:02] here
[05:03] um
[05:04] so we're on the screen share now and
[05:05] what i see immediately looks like a
[05:08] metric for a chair oh yes am i right
[05:11] yeah these are glorious chair metrics so
[05:14] um
[05:15] as always we kind of have a starting
[05:17] point where we've got you know this is
[05:19] this is how a chair needs to be in
[05:20] starters and this is the height and you
[05:22] know the width of
[05:24] of how it will operate essentially
[05:26] uh and yeah this is like a this is an
[05:28] armchair template so when the player
[05:30] sits in it um
[05:32] you know they'll have arm support and
[05:33] stuff
[05:34] um and yeah this is gonna be our
[05:36] starting point so what we're going to be
[05:37] doing
[05:38] is trying to convert this into a
[05:41] deployable camping chair so
[05:44] yeah i'm just going to get started yeah
[05:46] um
[05:47] and yeah we'll see where we go so
[05:50] let me get rid of these first now as
[05:51] usual as uh lewis works uh um
[05:55] you are uh we encourage you to submit
[05:58] questions in the chat
[05:59] preface with the word question in
[06:01] capital letters remember that lewis is
[06:03] an artist on the prop slash
[06:05] interactables team so if your question
[06:08] is about the current status of
[06:10] alpha3172
[06:12] or
[06:13] where the banning merchantman
[06:16] or anything else like that jake
[06:18] acappella is in the chat and you can
[06:19] just direct those to him
[06:21] in fact i encourage you to
[06:24] yeah i don't know anything just just
[06:25] just send
[06:26] every
[06:27] non-prop
[06:29] and interactable related question you
[06:31] have to jake acapella in the twitch chat
[06:33] right now and if you're watching on the
[06:36] youtube replay uh you can find them on
[06:38] twitter and do the same
[06:42] so you don't have to you don't have to
[06:44] miss out
[06:45] just because you're watching a replay
[06:51] so yeah essentially what i'm doing uh to
[06:53] begin with is because everything in the
[06:55] templates all together um we're gonna
[06:57] start out by separating some of the
[06:59] parts
[07:00] just so that we can um
[07:03] kind of work with them a bit better
[07:06] because i am not an animator um i can't
[07:09] rig or skin
[07:10] um meshes
[07:12] and apparently i can't do this either um
[07:16] but yeah essentially um
[07:18] we want to be able to move these bits
[07:19] individually so we're going to separate
[07:21] the arms seat um and the backrest
[07:30] here's a camping related question
[07:33] if you were a hot dog
[07:35] and you were starving
[07:37] would you eat yourself
[07:40] i know i would
[07:43] i put on some ketchup and some mustard
[07:46] and some relish i'd be delicious
[07:52] yeah i don't know about that one i
[07:54] didn't think it would be a very tasty
[07:55] hot dog tonight there's about 27 people
[07:57] in chat who got that reference
[08:00] and you're my people
[08:01] what's going on what did it
[08:10] there you guys saw it
[08:12] no
[08:17] already having technical issues
[08:19] pressure's on man
[08:21] plus is the way of the artist
[08:24] things never go right when you want them
[08:26] to
[08:27] there's only like a thousand people
[08:29] watching right now and then
[08:30] a couple ten thousand more on youtube so
[08:36] it's all right i'll just turn my youtube
[08:37] comments off for a
[08:40] two weeks
[08:41] so you're taking the basic pieces of the
[08:44] metric laden chair and
[08:47] reducing them to
[08:49] what could be like flat pack deployable
[08:52] parts without changing the overall
[08:54] metrics so you know that it's going to
[08:56] fit the player character
[08:58] yeah so um for example but the main
[09:01] important things on this are the contact
[09:03] points so the seat i've i've reduced the
[09:06] bottom because
[09:07] you know we don't want to sit on a
[09:08] massive block that wouldn't be very good
[09:10] to fold away um the backrest is still at
[09:13] the same angle but a bit thinner and the
[09:15] arms are now thinner as well
[09:17] um but they still have the same contact
[09:19] points when the player sits down
[09:21] their arms will still line up with these
[09:22] surfaces
[09:25] um
[09:28] i'm just trying
[09:32] to work out why my pivot
[09:34] is not letting me move that's so weird
[09:38] all right we'll work around it
[09:39] my guess would be user error
[09:42] yeah most likely
[09:44] is this as usual
[09:48] so i'm going to use these points instead
[09:50] which is probably a better idea
[09:53] a cyrenian in the chat says can this be
[09:55] called a camping chair if it does not
[09:57] have cup holders
[09:59] oh
[10:01] stretch goal cup holders now interesting
[10:04] like like what we're going to be doing
[10:05] today is essentially what you would
[10:07] if you if you were to to pick to find
[10:10] parody with like the ship pipeline you
[10:11] might already be familiar with we're
[10:13] going to be working in white box uh for
[10:15] most of today where we you know test
[10:17] functionality and develop functionality
[10:18] stuff so cupholders is definitely a
[10:21] gray box slash
[10:22] a final art
[10:24] kind of test
[10:28] but i will say if the camping chair does
[10:31] eventually make it into the game and it
[10:32] doesn't have cup holders uh you can go
[10:35] and message jake acapella on twitter
[10:39] and share your displeasure
[10:47] that'd be a cool thing to bear in mind
[10:49] if i go and take this further
[10:51] because this this actually started out
[10:53] as just a personal development task um
[10:56] but it got to the point where
[10:58] everyone thought it was actually pretty
[10:59] cool now like oh let's you know let's
[11:02] give this a try and show it off
[11:16] ah interesting
[11:39] so usually being super precise but i'm
[11:41] just going to be messy modelling today
[11:42] so
[11:44] don't worry this won't be the final
[11:47] yeah for for
[11:49] the the interactive team and what we're
[11:51] attempting to showcase for
[11:53] your workflow it's more about how the
[11:55] item can deploy can collapse and can be
[11:59] ultimately used uh by the player as
[12:01] opposed to
[12:03] any fine art
[12:04] folks who have watched
[12:06] game dev shows in the past
[12:08] we've been doing this for a few years
[12:09] now know that
[12:10] there's just about nothing in star
[12:12] citizen
[12:13] uh with the level of uh fidelity that we
[12:16] go for uh that can be created in under
[12:19] an hour
[12:21] so this will be a representation
[12:24] of of work except for the uh collected
[12:27] works of of jeremiah lee his his stuff
[12:30] is usually done in like 40 minutes with
[12:32] some time left over to
[12:35] wonder why nobody likes it
[12:40] there is um there's some absolute
[12:42] machines out there they could do our
[12:44] like absolute machines
[12:49] uh what did i get to look six
[13:02] oh why not start with the foldable
[13:05] chairs we are
[13:06] we see already present in the cutty
[13:12] so that'll be a good starting point
[13:13] we've had um so so part of this was i
[13:16] did go back and review some of the
[13:18] artwork that was already made to be fit
[13:20] for purpose
[13:21] um but the problem is a lot of them
[13:23] aren't built with the the animation in
[13:25] mind
[13:27] so
[13:29] um for example we have like a bunch of
[13:31] camping beds already in the game but
[13:33] they're not built in a way which means
[13:35] they can easily be deployed
[13:38] um so part of
[13:40] what we want to do
[13:41] is you know create some art from scratch
[13:44] that
[13:45] that will actually work off to get from
[13:47] the get-go
[13:50] so you're saying that in in situations
[13:52] like this it would be more
[13:55] uh
[13:57] time and cost effective to
[13:59] to
[14:00] adapt the art to the animation you then
[14:02] try to take something that was already
[14:04] created and
[14:05] read
[14:06] completely redo the animation
[14:09] exactly yeah because like sometimes when
[14:11] you're doing modeling um you take you
[14:13] know you can take shortcuts sometimes
[14:17] so for example you know if you have like
[14:19] a folding mechanism sometimes you'll
[14:21] just model it
[14:22] as it is folded out and then optimize
[14:25] the geometry behind where it folds so
[14:26] that if you actually tried to fold it
[14:29] like via the animation
[14:30] um
[14:31] it would not work
[14:33] um
[14:35] just because
[14:38] sorry i'm really bad at multitasking
[14:42] just because
[14:43] you know where you've tried to optimize
[14:44] it maybe the mesh like isn't clean on
[14:47] the other side or it just looks you know
[14:48] a bit jank or some faces have been
[14:50] deleted to save on you know polygons for
[14:53] optimization so going forward um so what
[14:57] we usually do is we we will set up a
[14:59] template um and then that template has
[15:02] you know the functionality that we is
[15:04] required
[15:05] um and then the artist will go on to
[15:07] make the actual um final art
[15:11] and again that's what we're doing here
[15:13] we are making a template for a
[15:15] deployable chair like that for
[15:18] what who is it that
[15:19] somebody in chat was like i can do
[15:21] better art than this it's like well the
[15:23] art's not the point of this particular
[15:25] demonstration the mechanics and not the
[15:27] point
[15:32] oh what is that i just got an i just got
[15:33] an email from uh
[15:35] oh it's from jeremiah
[15:38] oh he's not happy wonder what i said
[15:44] nothing at all
[15:48] right so we've got some like legs in
[15:50] place now um
[15:52] that are very
[15:53] very happily named
[15:55] don't show my boss anyone
[15:57] um
[16:00] and then yeah so what we're gonna do
[16:03] you can expand all these again
[16:07] basically what we're doing here is we're
[16:09] just creating a hierarchy so what
[16:11] happens is if we move
[16:13] you know this the rest of it moves with
[16:15] it
[16:16] if we move this the rest of it above
[16:18] moves and this just this means when we
[16:20] come to animate it it's going to be a
[16:21] hell of a lot easier than having to
[16:22] animate in each individual
[16:24] part
[16:26] so
[16:27] um
[16:31] for now
[16:39] i'm just going to grab all this stuff
[16:44] and i'm going to keyframe it really
[16:46] messily
[16:48] and i've got auto key down here set so
[16:50] basically when i move any of this it's
[16:52] going to remember so um
[16:55] like if i move this piece for example
[16:57] you'll see that it's placed like a
[16:58] little marker here
[17:01] and this means it's remembering uh where
[17:04] i'm moving these
[17:08] and you see the entire chair is moving
[17:09] down with this apart from the backrest
[17:12] but we'll sort that out in a second
[17:22] is there a scene available where this
[17:24] can be placed well the idea behind this
[17:25] uh uh of a
[17:27] frost falci i'm not i'm not the
[17:29] pronunciator is that this is the kind of
[17:31] chair that can be deployed
[17:33] anywhere out in the open world that's
[17:35] that's the whole idea
[17:37] so it's not one particular or specific
[17:39] scene
[17:40] it should be able to go out to microtech
[17:42] or
[17:43] out into the
[17:44] marshes of loreville or
[17:48] you know whatever
[17:50] and
[17:50] chair bed
[17:52] table
[17:53] you know be able to set yourself up a
[17:55] little scene
[17:57] it would be absolutely amazing to see
[18:00] like you know player because player
[18:02] already players are really organized
[18:03] stuff right so like you know for example
[18:05] the demar rally um can you imagine if
[18:08] players could bring their in like
[18:09] camping chairs and set up and watch
[18:11] alongside the track and stuff or you
[18:13] know
[18:14] later on um
[18:16] you know we're looking at
[18:18] potentially getting a programmer
[18:20] on our team and being able to create
[18:22] features and stuff like that so
[18:24] imagine
[18:26] you know
[18:27] cooking mechanics maybe
[18:29] or something like that a deployable
[18:30] stove
[18:32] uh where you can cook things to your
[18:34] mates
[18:35] you know tents um
[18:38] one of the ideas we really really liked
[18:40] the sound of was
[18:41] football goals
[18:42] so
[18:44] bringing a ball a football goal that
[18:46] deploys along with you
[18:48] i thought that would be a really cool
[18:49] idea
[18:51] but again this was a this here was a
[18:53] task just to kind of
[18:56] you know
[18:58] kind of learn some of the the more
[19:00] technical stuff
[19:01] um
[19:02] in regards to the setup
[19:04] [Music]
[19:06] because
[19:08] i know a lot of the art stuff but in
[19:10] terms of like setting it up in data
[19:11] forge and and basically making it
[19:14] actually work um i don't know it that
[19:16] well lack of a better word and
[19:18] interactable
[19:20] stuff like um when i did the med bed um
[19:25] that was that was already pre-set up by
[19:27] a different team um so all i had to do
[19:29] was place you know the points animate it
[19:32] um
[19:33] and then that was that was done so
[19:37] um
[19:39] yeah essentially
[19:41] this was a task to learn the setups
[19:43] behind creating uh deployables really
[19:48] bionics says does he mean soccer no he
[19:50] means football
[19:54] we're here in loyal subjects of of her
[19:56] majesty the queen now
[19:58] so
[19:59] it's football now
[20:02] you you wrap scallions you can't be
[20:04] bringing that kind of chat into here uh
[20:07] jack hiroshi says what is data forge
[20:09] please oh that's a that's a that's a
[20:10] that's a that's a big ask a data forge
[20:14] oh very cool it's pain it's pain
[20:17] it's drop down
[20:19] for just pain this is data forger data
[20:21] forge is basically the the place where
[20:25] we keep all of the
[20:27] connections between every individual
[20:30] item that makes up the universe
[20:33] and set up the rules and the guidelines
[20:36] uh in how that interacts with one
[20:38] another um
[20:40] the crazy
[20:42] insane database at the heart
[20:44] of the persistent universe
[20:47] you can find i'm sure some folks who
[20:49] have been
[20:50] uh around here around for a while uh
[20:53] might be able to remember
[20:55] uh links to old atvs where uh data forge
[20:59] was being developed originally and we
[21:00] did some segments on it
[21:02] way back when
[21:04] if you're really curious to learn more
[21:06] about it's a it's a totally internally
[21:08] developed
[21:09] way to store
[21:10] and uh retrieve uh the data that is
[21:13] necessary to make the persistent
[21:15] universe work
[21:19] and it get and one of the biggest things
[21:22] it did was it got us away from uh
[21:24] cryengine's xml system for a lot of
[21:27] stuff
[21:29] not everything for being completely
[21:31] honest but for most things
[21:39] i don't even really know what else you
[21:40] can compare it to really that's really
[21:42] really cool it's so
[21:45] you know what essentially what what i
[21:47] did
[21:48] when setting up like the first
[21:50] deployable that i ever did it was
[21:51] essentially mashing two data forged
[21:53] records together and learning how they
[21:55] both worked and it's a really cool
[21:57] modular system that actually do stuff
[21:58] like that it's really awesome
[22:01] there are other things like it from
[22:03] other developers that the issue is that
[22:05] other developers don't share them like
[22:08] they don't talk about them they don't
[22:09] expose the thing so
[22:11] the references wouldn't make any sense
[22:15] but
[22:17] sorry it's our version of a of of a
[22:19] common necessity for mmos
[22:29] okay cool so what i'm doing here is i'm
[22:31] again i'm just i'm looking at how the
[22:33] parts interact with each other and try
[22:34] and set them up on the left so that it
[22:37] makes sense and and
[22:39] you know for example the arms move
[22:41] because they're attached to the backrest
[22:42] they need to move with the backrest
[22:44] right so
[22:45] that's what that's being set up as yeah
[22:49] and
[22:50] so that's when that starts to move down
[22:52] so
[23:03] g kenny says
[23:04] dev whose name i didn't catch that's
[23:06] lewis can you please make something like
[23:07] this for the 100 series beds they could
[23:09] use a chair table now let's see that's
[23:12] ship team
[23:13] and and stuff
[23:15] so
[23:18] you can uh so uh uh gk you can take your
[23:21] request and uh if you go to twitter and
[23:24] send it to jake acapella
[23:27] uh here i'm typing his name into chat
[23:29] now
[23:30] uh so you'll have it there uh just send
[23:32] the request to jake acapella and he'll
[23:34] make sure it gets to the right person
[23:37] he's going to be very upset with you
[23:50] [Music]
[23:56] a futuristic fisherman foldable chair
[23:58] finally something to replace the wobbly
[24:00] thing i keep using now it could be used
[24:02] for fishing
[24:05] don't see why not we're gonna have a
[24:07] uh we'll have we'll have uh todd pappy
[24:09] on uh star citizen live next week uh for
[24:13] an all about alpha 317 317 one and three
[24:17] seventeen two just all about we haven't
[24:19] done it all about the patch q a with
[24:21] todd pappy in a while so he's on next
[24:23] week
[24:24] uh talking about the last three
[24:26] uh patches so uh maybe we'll see if we
[24:28] can sneak in a fishing question
[24:32] he loves to talk about fishing
[24:40] if you want todd pappy to answer
[24:41] questions about fishing uh head on over
[24:44] to twitter now and send a message to
[24:46] jake acapella again the name in the chat
[24:49] right now
[24:50] and let us know
[25:03] it's possible i had too much sugar today
[25:07] there's no such thing
[25:11] oh no i need to keep trying that first
[25:23] oh rotating the arms
[25:26] yeah so this is what i mean like uh you
[25:28] know on the template it's gonna look
[25:30] you know
[25:31] black yes
[25:33] because
[25:34] there's no mechanism for it right so you
[25:37] know the functionality is implied but
[25:40] eventually it will be down to the artist
[25:41] and this means that like
[25:44] we might see multiple versions of the
[25:45] chair so you can have like a
[25:48] you know a high-tech chair
[25:50] you know maybe it's like very smooth
[25:52] like panels move out the way and
[25:54] parts move out of it and stuff or you
[25:56] can have like you know a low-tech one
[25:59] which is literally just you know your
[26:00] default
[26:01] camping chair that you'd find nowadays
[26:04] yeah
[26:05] but again like it's just giving the
[26:07] intention so that the artist can then
[26:09] come in later and
[26:10] do what they want with it pretty much
[26:12] i think i think it's worth showing i
[26:14] think i think uh a lot of folks
[26:17] uh especially outside the star citizen
[26:19] community who
[26:21] you know don't have the same level of
[26:24] development content that that we do here
[26:28] tend to think that
[26:29] anything they see in a game was just
[26:31] built straight to that finished product
[26:34] and it's not everything has a pipeline
[26:37] yeah
[26:37] and you know we we explore the ship
[26:39] pipeline a bit more than most but
[26:42] everything has
[26:43] a pipeline very similar to that with
[26:46] with white box where you you build these
[26:48] you build these templates out and you
[26:49] make sure all the pieces work and they
[26:51] have space to go into each other and fit
[26:53] each other and and
[26:55] not uh
[26:56] you know not conflict and then gray box
[26:58] where you start to you know really model
[27:00] it out and stuff like this and then
[27:02] you can
[27:03] address any final problems that get
[27:05] discovered in gray box
[27:07] and then go into final art where where
[27:09] somebody comes in and does the
[27:11] meticulous uh you know lot zero version
[27:14] of an asset and then
[27:16] the you know the tech artists come in
[27:18] and do the loud versions and the lot
[27:20] four and the three and the two and the
[27:21] one versions
[27:23] and stuff like this it's it's definitely
[27:24] a
[27:25] a prolonged protracted process and we
[27:27] are showing the earliest
[27:30] parts
[27:30] of of the the process of creating an
[27:33] interactable right now which is building
[27:35] the template
[27:36] uh if we have some time i think we'll
[27:38] manage to fit it in uh we can show you
[27:40] uh a version of something similar that's
[27:43] a little farther along
[27:44] uh before we go
[27:46] definitely yeah um
[27:50] let's um so what we got so we've got
[27:54] we've got a closed up state
[27:57] up to a raised state
[27:59] so now we just all we need to do is kind
[28:01] of just grab
[28:02] uh
[28:04] grab this we can shift drag it
[28:07] yeah shift drag it uh oh sir 77 that's a
[28:10] great question well artists who build
[28:11] different versions of the foldable chair
[28:13] be limited to the same style like legs
[28:15] collapsing straight or can they build
[28:17] a scissors like folding chair with the
[28:19] same
[28:20] interactable template
[28:22] yes so um
[28:24] really all this is this is just some
[28:25] kind of demonstration geometry really
[28:27] the the main thing um is the actual
[28:30] record so
[28:32] you know i was talking about data forge
[28:34] earlier this is the record for that um
[28:37] and they can essentially do any kind of
[28:38] animation they want as long as they
[28:39] stick to those metrics so you know the
[28:42] chair metrics so the player always sits
[28:44] in the same position they're able to
[28:45] like rest um
[28:47] and as long as it folds up so they can
[28:49] carry it in the same the same way and
[28:51] there's no reason
[28:52] you know they can't change the animation
[28:54] up
[28:55] um you know even if it's a different
[28:56] size when it's folded down um they've
[28:59] got the ability to go into this record
[29:01] and actually change um
[29:04] down here i think
[29:06] they've got stuff like the grip data
[29:08] so they can change you know what
[29:10] orientations it can be picked up from um
[29:13] the kind of shape of the grip
[29:15] so they can change it so you know maybe
[29:16] it's a flat grip
[29:18] maybe it's a rounded grip
[29:20] the dimension of the hands
[29:22] so they can
[29:24] you know there's all sorts of feats you
[29:26] could you could spend all day in this
[29:27] just looking it up but there's a lot of
[29:30] customization um to be done through this
[29:32] and this is essentially just going to be
[29:34] the base
[29:34] um the base version um and then people
[29:38] can you know you can see down here
[29:39] there's there's all sorts of like
[29:41] different c chairs 890 c chair
[29:44] constantine hurston all the different
[29:47] yep
[29:48] exactly so they're all they're all based
[29:50] you know every chair in the game is sort
[29:51] of based from same original chair right
[29:53] it's always going to be the same sort of
[29:55] height and that just means that you know
[29:58] people can be more flexible in their
[30:00] approach when making stuff
[30:01] all the tech travels forever and
[30:04] yeah
[30:05] it's cool
[30:06] beans uh
[30:08] right
[30:11] this is where it could collapse in
[30:14] i know we should be right
[30:18] uh
[30:23] why do you need to quickly check
[30:27] where did i put my
[30:36] is this a product for armchair devs yes
[30:41] some proper comedians out there today
[30:45] uh koala 999 says how does one stay
[30:49] motivated doing this sounds very tedious
[30:54] um
[30:55] to be honest um since the new
[30:58] team update it's been pretty nice
[31:00] because um
[31:02] what it
[31:03] essentially like we were just making the
[31:05] art before um and now we have a real
[31:07] awesome chance to to kind of take our
[31:10] own work further um and develop our own
[31:13] stuff so for example this is just
[31:15] this is all
[31:17] you know i haven't been tasked with this
[31:18] specific thing this is just stuff i've
[31:20] been working on between tasks
[31:22] so they'll sometimes be like a day or
[31:25] two
[31:26] where
[31:26] you know you're waiting for your next
[31:28] task or you're waiting for it to kick
[31:29] off
[31:30] um so you're just kind of doing prep
[31:32] work to see you know see how you can
[31:33] prepare yourself for it
[31:35] um
[31:36] and this was one of those tasks for us
[31:37] we had we had a spare day
[31:39] um
[31:41] those things come up uh quite a bit you
[31:43] know because you know it's something
[31:45] you're supposed to be working on gets
[31:46] blocked by a dependency from somebody on
[31:48] another team
[31:50] and you need them to finish their thing
[31:51] before you can continue on the thing
[31:53] that you're supposed to be working on so
[31:55] so you find other other tasks to
[31:58] you know make sure that you're always
[32:00] being as productive
[32:01] uh as possible we actually uh uh
[32:04] i think we have an episode of isc
[32:07] dedicated to that phenomenon coming up
[32:08] later this court uh this next quarter i
[32:10] was just talking to some people about
[32:12] that about about
[32:13] the sort of middle tasks the the things
[32:16] that aren't necessarily uh laid out but
[32:19] tend to crop up during development when
[32:22] you have to wait on something from
[32:23] somebody else or whatnot
[32:25] um another way that folks are always um
[32:29] battling
[32:30] uh tedium and stuff like this uh
[32:33] you if again if you've been following
[32:35] the project for any prolonged period of
[32:37] time you've heard a lot about
[32:39] this team was supposed to work on this
[32:41] but they're moved over to this uh this
[32:43] artist was on this team and they're now
[32:45] on this team or that team and stuff like
[32:47] that part part of that
[32:49] the only constant in game development is
[32:51] change uh mentality is keeping things
[32:55] fresh and
[32:57] interesting and uh motivating for the
[33:00] people who are
[33:01] working on the project it's like that so
[33:03] there's there's
[33:07] of the many reasons decisions are made
[33:10] throughout game development
[33:12] one of them one of the considerations is
[33:14] always about trying to place the right
[33:16] person to the right task and the right
[33:19] person at the right task
[33:21] that this person might have been the
[33:22] right person for that task three months
[33:24] ago but they may not be the right person
[33:26] for that task today it might be somebody
[33:28] else because of the last thing they
[33:30] worked on or just where they are in
[33:33] their
[33:34] career development at that time stuff so
[33:36] it's a
[33:36] it's a it's an amazing calculus that is
[33:40] worked out by our producers and our
[33:42] directors
[33:46] and you can go back to uh
[33:48] gosh there was an seo we did
[33:50] i want to say 2017 2018 where we worked
[33:53] with producers and built a schedule
[33:55] out uh
[33:57] it was it was it was it was it was super
[34:00] it was super popular like literally we
[34:02] spent an hour building out a schedule
[34:04] and i got a lot of
[34:07] got a lot of crap for it
[34:10] but but it was you know it's another
[34:12] essential part of game development to
[34:14] show the various considerations that
[34:17] that go into why these people are on
[34:19] this thing and not this thing and stuff
[34:21] like that it's a
[34:22] it's an amazing calculus that i wish
[34:25] more
[34:26] game developers talked about
[34:29] oh
[34:30] what'd you do
[34:31] the pk circle of doom is trash matter i
[34:34] had the camera changed i came back and
[34:35] you're on a crash handler no
[34:40] how do you stay motivated um
[34:44] why are there so many picos in the scene
[34:46] literally i i click the way i come back
[34:48] and you've got to crash with like seven
[34:49] people oh wait you missed the teapot oh
[34:52] i i avoided the teapot
[34:55] no no t-bots i'm tired of tea bots
[35:00] football they wouldn't be able to deal
[35:01] with t the stupid 3ds max teapot it's
[35:04] been following me around like a plague
[35:08] 20 years
[35:10] because
[35:10] absolute coast
[35:12] we used to do a thing
[35:14] uh he's reloading by the way that's why
[35:16] that's why we're vamping right now uh we
[35:18] used to do a thing uh when you
[35:19] accidentally call a group chat on like
[35:21] teams or slack or whatever and you
[35:23] accidentally ring 30 people that you
[35:25] didn't mean to ring
[35:27] for anybody that picked up we used to
[35:28] make the person who made the call sing
[35:30] the teacup song
[35:32] oh nine
[35:34] dark days dark days
[35:36] days indeed
[35:38] all right so you're back up and running
[35:40] nah yeah
[35:41] oh yeah
[35:43] it's still loading still loading my
[35:45] computer's like
[35:46] clocked out i think my computer needs a
[35:48] way to be motivated more because
[35:51] she's old now
[35:53] she's not that old
[35:54] what's hurston and artcorp's mascot i
[35:57] feel like
[35:59] our corp is some kind of anthropomorphic
[36:02] smokestack
[36:04] although that could also be rehearsing
[36:05] for that matter
[36:07] pollution
[36:08] pollution is pretty good hurston's
[36:10] mascot is just a a cloud of dirty
[36:12] pollution
[36:14] uh with little stick figures smiley face
[36:16] it's like a really
[36:17] high res
[36:19] uh a very well done up cloud of
[36:22] pollution with crappy stick arms
[36:26] and and and and like and like googly
[36:28] eyes
[36:29] on it the dirty bubble as as as no no
[36:32] miso says
[36:34] and a top hat
[36:36] whatever they are they are based on a
[36:37] photo of jared only when jeremiah is
[36:40] drawing
[36:41] we don't do that anymore
[36:43] we we've we we've broken up with
[36:44] jeremiah we have we have we have
[36:46] frederick from the turbulent team now
[36:49] he's much nicer and
[36:50] doesn't base his work on
[36:53] unfortunate photos of me
[36:57] sorry for my head that my editor has
[36:58] taken its sweet time
[37:02] um i can show um
[37:05] our initial exploration of the goal post
[37:08] if you like
[37:09] sure
[37:11] it's a small screen so hang on um
[37:16] i can work on where i put it and doesn't
[37:18] break things gabriel will correct
[37:26] it's the pollution thing from fern gully
[37:28] there we go
[37:29] i'm sure ferngill is not using it
[37:30] anymore we could just take it right from
[37:32] there all right hold on
[37:34] all right so so this so this uh set this
[37:37] up before you play it
[37:39] okay so um yeah and initially we had
[37:42] when we had our initial brainstorm of
[37:43] what kind of deployable stuff we could
[37:45] do
[37:46] um
[37:47] we basically split off into groups so i
[37:48] did like a
[37:50] few camping equipment explorations um
[37:53] and then
[37:54] another dude on the team dan um he went
[37:57] away and did this uh
[37:59] football goal so the idea is essentially
[38:02] you know you rock up to a planet with
[38:04] this thing drop it on the ground
[38:06] um
[38:07] deploy it
[38:10] boom
[38:11] and then um
[38:13] we'll some will get
[38:14] you know again a ball working
[38:19] and then if you know you can set two of
[38:20] these up on a random field somewhere on
[38:23] a planet
[38:24] and then you can have a
[38:26] football match or a soccer match for
[38:28] those
[38:29] who don't agree with my terminology no
[38:31] no no but you you could use like render
[38:33] texture to to change the numbers in the
[38:35] corner and like count the score
[38:37] one two three you know every time
[38:38] something passes yeah exactly so
[38:42] you know it's only initial idea but you
[38:44] know we can have the color changing we
[38:45] can have different icons
[38:47] in different colors for when you score
[38:49] maybe you know maybe we can get vfx
[38:52] support we can even have
[38:53] fireworks going off or sink when you
[38:55] score a goal
[38:57] the possibilities aren't endless yeah
[38:59] you have to set it to like this a
[39:01] specific ball that goes through other
[39:02] otherwise people like jake acappella are
[39:04] just gonna like try to jump through it
[39:06] and have their
[39:07] body count
[39:09] for
[39:10] things if you want jake acapella uh to
[39:13] stop a cheating at imaginary uh star
[39:16] citizen football uh go to twitter at
[39:19] jacob acapella and tell him to stop
[39:25] why am i taking so long i don't know i'm
[39:27] running out of i'm i mean i can i can
[39:30] only do this jake acapella joke so many
[39:32] times while i'm trying to cover
[39:34] keep going
[39:35] do it
[39:38] this is sometimes
[39:40] uh right let's see what else you can do
[39:42] in here for the time being um
[39:46] i'll keep an eye on that
[39:48] so yeah essentially this is the mesh
[39:50] setup like pretty much
[39:52] there uh what is this
[39:56] well actually i'm gonna do i'm gonna
[39:59] i'm gonna position this in the correct
[40:00] spot
[40:05] so this is gonna be
[40:07] hopefully
[40:08] um where we can activate and deactivate
[40:12] this little point here
[40:14] where we can activate and deactivate the
[40:16] chair so on a on a final art mesh you
[40:18] might have it where
[40:21] maybe there's like a touch screen that
[40:23] you can interact with or or just a
[40:25] button
[40:27] again that's kind of
[40:30] this is our early exploration right so
[40:32] later on you know if we did decide to go
[40:34] forward with this
[40:36] we might get design involved and and
[40:38] they basically you know
[40:41] give us an idea of what else we could do
[40:43] with it uh whether it should be a screen
[40:45] or
[40:46] a button or whatever makes sense really
[40:49] for what it is
[40:50] and it's not just limited to
[40:52] you know chairs or whatever it's limited
[40:55] you know
[40:55] by whatever you can animate really so
[40:57] you can have deployable like any kind of
[40:59] deployable item so we showed the goal
[41:01] post for example
[41:03] oh hallelujah
[41:07] thank you oh hold on we're not there yet
[41:15] you know like a little summoning ritual
[41:17] here
[41:23] there we go we're back
[41:27] right
[41:29] any percent speed run camp chair let's
[41:31] go
[41:35] right cool so we're going to test the
[41:37] geometry make sure we've done the
[41:39] animation correctly so deploy
[41:44] that looks right to me
[41:46] it's not perfect but again we're not
[41:49] trying to get perfect at this point
[41:50] we're just trying to get something that
[41:52] functions so
[41:58] so happy that
[42:02] so yeah that um what we're gonna do now
[42:04] um
[42:05] so i've set up the date forge entity
[42:08] prior to this because
[42:10] there is no way
[42:11] you lot would want to sit and watch me
[42:13] go through this for an hour and try and
[42:15] work out
[42:17] what i've done wrong there's a lot of
[42:18] troubleshooting in this stage so
[42:21] i'll quickly just give you an overview
[42:23] like a brief overview um
[42:26] basically these props need to have um
[42:28] what's called a state machine set up and
[42:30] this is basically some code that tells
[42:33] the prop
[42:34] um
[42:35] what state it's currently in so i'll
[42:38] quickly
[42:39] jump in and
[42:42] see if this worked correctly
[42:45] uh they bring up the
[42:47] debug
[42:52] so um
[42:55] don't maximize yourself please thank you
[42:58] right so um here it says um so currently
[43:00] it's settled which means it's just
[43:02] placed on the ground there's nothing
[43:03] going on with it um
[43:06] but what we need to be able to do is go
[43:08] up to it and interact with it
[43:10] and obviously because it's a chair we
[43:12] don't want to be able to sit on the
[43:13] chair while it's in this state because
[43:16] that would not be a comfortable chair
[43:18] um
[43:21] yeah
[43:23] exactly
[43:24] so um yeah basically the state machine
[43:27] tells the prop
[43:29] um what it can
[43:31] what interactions we can have with it in
[43:33] its current state so settled um you
[43:36] can't do anything with it apart from
[43:38] pick it up
[43:39] um or activate it so
[43:41] you can see here
[43:42] i wonder if this will work no so this is
[43:45] one of the problems i had before the
[43:46] stream i couldn't get this quite working
[43:48] on this one um but yeah essentially
[43:50] you'd be able to use this to pick it up
[43:52] and carry it about um it's not working
[43:54] for this demo and i can show you on an
[43:57] asset layer that it does work on
[44:01] but for now
[44:05] there should be
[44:06] an interaction somewhere
[44:10] but it alas it looks like it is not
[44:13] there
[44:14] so we'll go back and quickly check
[44:19] so we have got
[44:24] you see all on the left there you see
[44:27] all the little parts that make up this
[44:29] incredibly simple
[44:31] just template version of the chair
[44:33] wait till it actually gets built out
[44:37] yeah so i mean this is just you know
[44:39] primitives at this point but on an
[44:41] actual mesh you'd have all sorts of
[44:43] moving parts and that's when it gets
[44:45] extremely complicated and when you have
[44:47] stuff like you know
[44:48] the suggestion earlier about the scissor
[44:51] um
[44:52] like this is the chair version yeah um
[44:55] you know you you'd probably want an
[44:57] animator to basically rig that so they
[44:59] all move correctly um
[45:01] and anchor to each
[45:02] other my animation knowledge is pretty
[45:05] basic
[45:06] so
[45:08] we do what we can here we go
[45:12] so we've got an activate so now you see
[45:15] the state current state deployed so
[45:19] you'll notice when i move over it it
[45:20] says deactivate now um
[45:23] because yeah you wouldn't be able to run
[45:24] the
[45:25] the activation animation if it's already
[45:27] out
[45:28] and then yeah we've got seating
[45:30] functionality unfortunately this is
[45:32] another book that i've not been able to
[45:35] solve it's become the chair before but
[45:37] yeah i mean just become the chair when
[45:40] in doubt just become the chair
[45:42] like so many of us over the pandemic
[45:48] all right we've got we got about 15
[45:49] minutes left why don't we why don't you
[45:51] show them the other thing that's a
[45:52] little further along
[45:55] sounds good to me
[45:58] so that's that's the start of something
[46:01] you know chair building a bit building a
[46:04] template uh some rudimentary animation
[46:07] tests stuff like this uh this next thing
[46:10] is a bit further along if we were
[46:12] talking like we've been comparing it to
[46:14] the ship pipeline if that was
[46:17] like the absolute early white box since
[46:19] i mean you literally saw it 40 minutes
[46:20] ago it was nothing
[46:22] this would be a little closer to early
[46:25] gray box
[46:30] assuming it loads and doesn't crash
[46:33] i'm safe have faith we can do this if it
[46:36] crashes we will blame uh but you know
[46:38] who will blame
[46:45] it work don't worry
[46:47] and if it doesn't
[46:49] then
[46:54] and don't worry about it
[46:59] we've switched to screen share because
[47:01] all you're missing on the screen share
[47:02] is a is a spinning donut i think we've
[47:04] already just been doing it
[47:06] so
[47:07] it just it doesn't like loading into
[47:08] levels it it basically crashes the
[47:10] editor but if you if you let that
[47:12] intimidate you into closing it in task
[47:14] manager then it never loads so you have
[47:16] to be patient with it it's one of the
[47:18] things like
[47:21] you think about the game like the
[47:23] release game that's that's alpha state
[47:26] and it comes with its own level of bugs
[47:28] and instability
[47:29] and then you think about ptu below that
[47:32] and it comes with its own level of bugs
[47:34] and stability then you think about
[47:35] evocati before that and it comes with
[47:38] its own bugs and instability then you
[47:40] think about isc where isc is capturing
[47:44] stuff and its own bugs and even before
[47:46] evocati so that you know another trouble
[47:48] that we go through getting footage for
[47:50] that
[47:50] then at the bottom of that is scl it's
[47:53] like now we're making something from the
[47:55] very beginning
[47:57] from the absolute thing imagine the bugs
[47:59] in the instability and that's
[48:01] what you're seeing
[48:03] so
[48:11] we won't tell you what happened
[48:13] but the editor crashed it's working as
[48:15] intended don't worry
[48:18] i then i don't know i'd love to hear any
[48:21] suggestions people had for interactables
[48:24] because
[48:25] obviously sure
[48:27] all the good ideas come from the
[48:29] community right yeah everybody as far as
[48:32] remember an interactable is a thing that
[48:34] as a
[48:35] character as a person
[48:37] you would be able to carry
[48:39] and then place
[48:41] you you know down somewhere you have to
[48:43] place it and it deploys so think about
[48:44] it
[48:46] say the word interactive think about
[48:47] deployable
[48:48] uh
[48:49] that might that might help the the
[48:51] nomenclature cooler boxes for food
[48:55] the banu prayer bowls
[48:57] um oh no i'm sorry don't put them here
[49:00] in chat uh go to twitter
[49:03] and i'm sorry
[49:05] i can't i can't keep it up even i have
[49:06] to stop i'm going to get an email
[49:10] [Music]
[49:12] now baseball bat is not a deployable
[49:13] baseball bat is a melee weapon that i've
[49:16] been asking for for years
[49:18] and that is technically
[49:20] there there there was one in the uh
[49:22] in the
[49:23] digital citizencon demo last year
[49:26] it wasn't used but if you watch it it
[49:28] was there behind the counter at the
[49:30] outpost
[49:33] so yeah so it's annoying that we've got
[49:36] that fine line between
[49:38] weapons and and props sometimes
[49:41] and while i'd love to make a deployable
[49:42] baseball bat listening
[49:45] weapons team would get that pleasure
[49:46] baseball still exist in 2952 you're darn
[49:49] right it does
[49:52] baseball and professional wrestling
[49:54] that's it everything else has died out
[49:57] and professional wrestling are still
[49:58] going in 29-52
[50:02] and they're right dave haddock
[50:05] he's not saying no so
[50:10] come on you can do it you know what i'd
[50:12] like in in 29.
[50:14] what what year are we in for star
[50:15] citizen now 29 29 52. it's only 1952
[50:20] yeah like a working
[50:22] working
[50:23] loading bar
[50:24] mate nah it behaves most of the time
[50:29] it's only when it's been live streamed
[50:31] carriable missiles that explode when you
[50:33] drop them when those recarriable bombs
[50:39] a hand cart a little little deployable
[50:41] hand cart
[50:44] that would be a oh my god
[50:46] that would be stress
[50:48] i did most i did a lot of the setup on
[50:50] the original trolleys and
[50:52] they are pain
[50:55] they got a lot of uh helpers and stuff
[50:59] yeah uh the deployable shields and stuff
[51:01] that's that's been on the that's been on
[51:03] the want list for a long long time
[51:06] uh deployable racing checkpoints yeah
[51:08] that's also been on the list you uh
[51:11] we we start we're talking about scramble
[51:13] races
[51:15] a couple years ago
[51:16] uh one of the things that got
[51:18] reprioritized
[51:19] uh down the list a bit but i was having
[51:22] a conversation with somebody about
[51:23] scramble races internally just earlier
[51:26] today
[51:27] and i said the words
[51:29] don't pull the rug out from under me
[51:30] when it gets further along then we'll
[51:32] talk about it
[51:33] um
[51:34] so that stuff
[51:38] deployable titan suit i don't know what
[51:40] that is
[51:42] that sounds like something sean tracy
[51:45] mentioned once again what time you say
[51:47] no
[51:49] nope
[51:51] that's on that's on sean tracy he
[51:53] mentioned that once like however many
[51:54] years ago and it's
[51:58] pain in my butt
[52:01] deployable jared i'm already deployed
[52:03] i'm here
[52:04] oh oh oh oh oh my god
[52:09] the brightness
[52:12] this is what we're looking at right now
[52:13] everybody just in case you think you're
[52:14] missing the show
[52:17] we're looking at a very bright error
[52:18] report
[52:20] we're vamping
[52:22] and this might have been the reason why
[52:23] i called the thing we were going to do
[52:25] in the last five minutes 15 minutes
[52:27] early
[52:28] yeah i mean
[52:30] that was a pro a pro strap
[52:36] are we going to try again
[52:38] right
[52:41] just wait for it to load in
[52:44] i don't know all my being so slow you
[52:45] might turn this i might turn this back
[52:47] down just for the oh it already is
[52:56] all right i'm just going to be very slow
[52:57] with it
[52:59] my pc's got stage fright
[53:02] slowly i move
[53:05] step by step
[53:09] that's the mood
[53:18] [Music]
[53:25] oh now the frame rate returns right cool
[53:27] let's see if
[53:28] i set up earlier
[53:30] the frame rate gets crushed by the
[53:31] zoomed screen share so you've got the
[53:33] frame rate
[53:34] but here on the here on the
[53:36] show
[53:37] all right so we see something in the
[53:39] back of the cutlass here
[53:41] what are these
[53:45] oh my god
[53:48] i'm stuck i'm saying
[53:54] so
[53:55] we arrive at this beautiful location
[53:58] that's obstructed by this very large
[53:59] object
[54:01] may have to change the way it's being
[54:03] held
[54:04] yeah that's something like i said
[54:06] this is a
[54:08] this is an early whip but yeah
[54:11] lovely location so what we're gonna do
[54:13] is we're gonna
[54:14] do do me a favor
[54:16] before you do this go up to zoom and
[54:18] change it to optimize for video so we
[54:20] can get a better frame rate on this it's
[54:22] at the top of zoom
[54:24] oh okay yeah little bar that shows up
[54:26] there
[54:28] it's gonna lower the picture quality a
[54:29] bit in the screen share but it'll give
[54:31] us our frame rate back
[54:33] this the this is zoom kill in the live
[54:35] stream right now there you go there we
[54:37] go it's not better a little bit
[54:40] we're working with zoom we're working
[54:41] with what we got
[54:46] when we're all back in the office we'll
[54:47] be able to do this
[54:49] live
[54:51] without the needed screen shares it'll
[54:53] be nice
[54:57] so yeah this looks like a nice spot
[55:02] this is like one of those really bad e3
[55:03] demos from before you know when they
[55:05] they've got like a clearly scripted
[55:08] section
[55:10] yeah i think we're set up here guys
[55:13] sorted
[55:22] i can sit down and chill
[55:24] here third person so we can see it
[55:26] there
[55:35] so yeah this is just the functioning
[55:38] prototype
[55:39] so there's still some junk to work out
[55:42] you know obviously like we won't be able
[55:43] to do stuff like log out
[55:45] on these beds because then you've
[55:47] essentially got mobile
[55:49] you know mobile camping points so you
[55:51] just log back in
[55:53] you know outside jump tower swing and
[55:55] well now wreak havoc
[55:57] not on the entry level tier one one
[55:59] anyway
[56:00] yeah yeah the the subscriber only pushes
[56:02] no
[56:04] no that's not to say
[56:05] there can't be something down the line
[56:07] that players work their way up to yeah
[56:09] for sure
[56:10] but essentially like that's what
[56:11] interactables is going to be about it's
[56:13] about you know what can we do as one
[56:16] small team with what we know now in
[56:18] order to bring more kind of emerging
[56:20] gameplay to the the pu
[56:22] um and giving players tools to you know
[56:24] make their own game play um
[56:27] you know stuff like this doesn't take a
[56:30] huge amount of time compared to you know
[56:31] the other you know massive missions that
[56:33] are being created and and the other
[56:35] content so
[56:37] you know in those in those patches where
[56:38] maybe there isn't as much content you
[56:40] know
[56:41] we can create some cool stuff that will
[56:43] hopefully bolster some
[56:45] some additional gameplay and
[56:47] and create opportunities for
[56:49] stuff
[56:53] and when you're done clean up your
[56:54] litter pick up
[56:56] run back to your ship
[56:59] it's even funny when you look at this
[57:00] perspective
[57:02] yeah that definitely is a pass by the
[57:04] actor feature team be like is this how
[57:06] we should be carrying this
[57:08] is this proper center of mass
[57:10] this is perfect this is fine
[57:15] but yeah uh somebody's already much uh
[57:17] mentioned this could be used for like
[57:19] stretchers
[57:21] oh yeah you know stretcher to to carry
[57:24] people off the
[57:25] off the field of
[57:26] battle and siege of origin or something
[57:30] yeah like uh essentially so this was um
[57:33] like i said because we're a brand new
[57:35] team this is for me to learn how to
[57:37] create this stuff essentially
[57:39] and i've you know i've combined an
[57:41] existing thing like a bed a chair uh
[57:44] with a carryable
[57:45] um and using those same techniques i've
[57:47] learned you know i can probably look at
[57:49] other things in the game like i know
[57:50] we've got the
[57:51] the gurneys and stuff
[57:54] and the trolleys and we can look at
[57:55] making
[57:57] deployable versions of those too and and
[57:59] just see where the future can take us
[58:01] really
[58:02] um
[58:03] and then hopefully when we get you know
[58:05] additional support and the team grows um
[58:07] we'll be bringing you know
[58:09] more or more complex stuff into the
[58:11] universe i think this is really the
[58:13] start of something really really awesome
[58:15] i'm very excited about it and i know you
[58:17] know the team is as well so
[58:19] it's cool beans
[58:20] will hayne is sending me tips for how to
[58:23] load uh microtech quicker in the editor
[58:25] and i'm not loading it will hayne lewis
[58:27] is
[58:28] send the tips to lewis
[58:30] tip one
[58:32] don't load into microtech
[58:35] all right so yeah that that does oh you
[58:37] want to show one more time here then let
[58:38] me go there you go yeah yeah i'm just
[58:40] going to mess around now like well no
[58:42] we're done we're out of time
[58:44] what are you going to do you try to
[58:45] stack one on top of another
[58:48] i'm just making campsite but i'm happy
[58:50] to sign up when you are
[58:53] i just like messing them out with these
[58:54] it's it's fun running around placing
[58:56] them and
[58:57] and just
[58:58] doing little configurations
[59:00] well having seen you in third person
[59:02] running around with this i want it to be
[59:04] an improvised melee weapon
[59:07] just fold up your comfort bed and fight
[59:09] off wildlife just beat somebody to death
[59:11] with a deployable camping bed
[59:15] oh we got an upside down
[59:21] it's a camping bed with teeth
[59:24] the views and opinions of lewis do not
[59:26] represent those of clad imperium games
[59:28] frogger space industry
[59:30] or it's subsidiaries
[59:35] that is satisfying
[59:37] and that's just a template like give me
[59:39] give me like two weeks or something to
[59:41] work on a set and i will come up with
[59:43] the most
[59:45] amazing animation yeah but you know beds
[59:49] chairs tables
[59:52] lights
[59:53] uh
[59:54] tents i mean
[59:56] this isn't me promising you that all
[59:58] those things are coming i'm just talking
[59:59] about these are the things that will be
[1:00:00] that that are will be explored and
[1:00:04] you know test it out you just bang your
[1:00:05] head on the
[1:00:11] i love that
[1:00:12] i love our game so much we'll just end
[1:00:14] the show there we'll end the show there
[1:00:16] all right everybody
[1:00:18] thanks for taking the time to hang out
[1:00:20] with us this week's uh star citizen live
[1:00:22] game dev uh
[1:00:24] slightly less than practical
[1:00:26] interactables
[1:00:28] isc is still on hiatus we're coming back
[1:00:31] uh june 28th
[1:00:33] uh so uh you know keep the fires going
[1:00:36] for that alpha 317.2
[1:00:38] is still on the ptu uh being tested and
[1:00:41] making progress every single day make
[1:00:43] sure you check out the
[1:00:44] robertsspaceindustries.com website and
[1:00:46] the various socials for details on
[1:00:48] whether that goes wider or when it goes
[1:00:50] live and stuff like this and then don't
[1:00:52] forget uh a special thing that made a
[1:00:55] well we'll get to that don't forget
[1:00:57] foundation festival is going on right
[1:00:59] now uh whole big thing with the guide
[1:01:01] system your chance to to get all kinds
[1:01:03] of new uh
[1:01:05] paints and stuff i don't know the
[1:01:07] details but again like always check out
[1:01:09] the robertsfaceindustries.com website to
[1:01:11] learn more
[1:01:13] and then something i want to make sure
[1:01:14] is on your radar that might not be it's
[1:01:16] a special kind of thing it's first of
[1:01:17] its kind on july 22nd the community team
[1:01:22] from
[1:01:23] from star citizen that's tyler and ulf
[1:01:27] and and and and and dan and all i
[1:01:30] already said off and others uh coming
[1:01:32] together with the community team uh from
[1:01:35] eve uh they have a dan
[1:01:37] and that's the only one that's the only
[1:01:38] one i know uh they are coming together
[1:01:40] here in manchester with me stuck in the
[1:01:43] middle uh running the broadcast they are
[1:01:45] gonna
[1:01:46] live stream for charity uh we're gonna
[1:01:48] be raising money for extra kids that is
[1:01:50] on a july 22nd so look out for more
[1:01:54] details like the start time uh and stuff
[1:01:56] like that it promises to be
[1:01:59] um
[1:02:02] some something unlike
[1:02:04] we've done in the past it's the best i
[1:02:06] can tell you uh i'm along for the ride
[1:02:08] on this one so we'll we'll see how it
[1:02:09] goes uh but it should be a lot of fun
[1:02:11] regardless so battle of the bricks uh
[1:02:15] july 22nd check that out uh we will be
[1:02:17] back here on twitch next friday uh with
[1:02:22] with the man the myth the legend the
[1:02:24] eyes uh todd pappy for all about alpha
[1:02:27] 317 317 1 and 317 2. uh the question for
[1:02:31] that the question thread for that
[1:02:33] usually goes up on spectrum on monday so
[1:02:35] keep an eye out for that uh everything
[1:02:37] related to the last three uh patches of
[1:02:40] star citizen is on the table and me
[1:02:43] trying to work in one question about
[1:02:44] fishing so yeah so louis thank you for
[1:02:49] taking the time to to to be here uh on
[1:02:52] the on the show this week um i think the
[1:02:55] uh i'm personally excited about the new
[1:02:57] interactables team i know it's a very
[1:02:59] small it's a very new i mean literally
[1:03:00] it was just created this week initiative
[1:03:03] so i'm excited to see it grow and all
[1:03:05] the things that come from it so take
[1:03:06] care we are going to raid looks like
[1:03:08] we're raiding a j fish
[1:03:10] uh uh that's probably jake acapella who
[1:03:12] did that jake acapella is rating j fish
[1:03:16] so when you see j fish say hi jake
[1:03:19] acapella sent sent me and don't forget
[1:03:22] to visit his twitter
[1:03:27] what's the
[1:03:28] music i'm suddenly hearing music are you
[1:03:31] hearing music in the background
[1:03:34] just start start the raid jake i don't
[1:03:36] that was your music wasn't it
[1:03:40] good music going just start the raid
[1:03:42] start
[1:03:47] you had music going didn't you
[1:03:50] maybe i started to hear it for a while

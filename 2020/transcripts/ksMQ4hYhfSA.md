# Star Citizen Live: Making Mountains

**Video:** https://www.youtube.com/watch?v=ksMQ4hYhfSA
**Date:** 2020-10-02
**Duration:** 1:04:22

## Transcript

[00:02] hi everybody
[00:03] welcome to another episode of call of
[00:05] nope see i almost did the wrong show
[00:07] there
[00:07] i've reversed the verse nope that's
[00:11] it's one of those that really wasn't on
[00:14] purpose that that that's me not knowing
[00:15] the end of the show star citizen live
[00:17] game dev
[00:18] uh making mountains uh on the show
[00:21] if you've never seen star citizen live
[00:23] before we have a couple different
[00:24] formats this week we are on our game dev
[00:26] format
[00:27] which is which is where we are going to
[00:28] hang out with one of our
[00:30] developers our designers our artists our
[00:33] our
[00:34] people who work on the game and explore
[00:36] a little bit about their process
[00:38] how they work and what they do for star
[00:40] citizen
[00:41] so joining me on the show this week is
[00:44] no stranger to
[00:45] star citizen live uh mr patrick gladys
[00:48] patrick how you doing
[00:50] oh good fantastic do you know the name
[00:53] of this this time from home
[00:54] huh do you know the name of the show
[00:56] because i don't apparently star citizen
[00:58] life star citizen live
[00:59] all right so uh patrick you are a member
[01:02] of the uh
[01:03] uh planet content team the planetary
[01:06] tech team
[01:06] what's what's uh correct me there's a
[01:09] bunch of different subdivisions
[01:10] what do you do for star citizen let's
[01:11] just go there
[01:14] we are or i am part of the environment
[01:16] art team specifically
[01:18] the environment art team from the
[01:20] germany office
[01:22] and we almost exclusively handle all
[01:25] all the things um organic
[01:28] right so that means planets geology
[01:32] vegetation and since we are the content
[01:35] team that
[01:36] almost exclusively works with all of
[01:38] that stuff or produces all of these
[01:39] things
[01:40] we are also the team that drives uh the
[01:43] planet tech forward in terms of
[01:46] communicating with the engineers who are
[01:48] actually programming and building the
[01:50] planet tech
[01:51] and so we we it's basically the
[01:54] ping-pong game between the the two the
[01:56] two of us
[01:57] you know the engineers and us and this
[01:59] is how yeah this is how
[02:01] we operate all right and the last time
[02:03] we had you on the show
[02:04] we uh we were painting planets we were
[02:07] using the
[02:08] the new painting tools to show how we
[02:10] can cover the surface of a planet
[02:12] um there's going to be some aspect of
[02:14] that involved today so
[02:15] just in case you know for people who
[02:17] have joined the project since then
[02:19] or who didn't see your wonderful panel
[02:21] it starts at a citizencon about it
[02:23] uh before we get into this give us a
[02:25] brief primer what what does it mean to
[02:27] paint the planet
[02:30] painting a planet uh meant something
[02:32] else a year ago
[02:33] than what it does by now as you know we
[02:36] are constantly
[02:37] uh pushing planet planet tech forward
[02:39] and all the features that are coming
[02:40] with it
[02:41] um so painting a planet means
[02:45] to a first um
[02:48] actually do an artistic paint pass which
[02:51] means applying color to the planet
[02:54] and then what it means as well is
[02:57] applying all the other pieces of content
[03:00] that are necessary to complete a planet
[03:03] as well through
[03:04] painting and as i said when when we had
[03:08] the star citizen live stream last time
[03:12] where painting was covered all of these
[03:15] individual pieces of content like the
[03:17] color the objects and the ground
[03:19] materials
[03:20] all of them were painted individually in
[03:23] individual passes
[03:25] but since then a lot of stuff has
[03:27] changed and we will see some of the
[03:28] painting
[03:29] in this live stream as well but i will
[03:31] not go
[03:33] into a super like much detail
[03:36] but i will definitely show it off a
[03:39] little bit
[03:40] what we will mostly focus on um will be
[03:43] the height map creation though okay
[03:46] now the the we've talked a bit about an
[03:49] isc over the last quarter
[03:51] uh showcasing through sprint reports and
[03:52] stuff how the
[03:54] uh painting tools have been evolving you
[03:56] know even since we
[03:58] we showed it last time uh what are some
[04:00] of the improvements
[04:02] uh that have been made over the last
[04:04] year
[04:05] at this point uh probably the biggest
[04:08] improvement probably would be um a much
[04:12] simpler and more compact design of those
[04:15] painting tools
[04:17] which means that whenever we do
[04:20] these painting passes and i told you you
[04:22] know that all
[04:23] all individual pieces of content have to
[04:26] be applied or hats to be applied
[04:28] separately
[04:29] with that simpler design we basically we
[04:32] basically pack
[04:33] everything into one single brush so
[04:36] um it's it's basically a reduction
[04:40] like four or five times quicker you know
[04:42] when we had to do
[04:43] actually like five separate painting
[04:45] passes before it's all reduced into one
[04:48] now
[04:49] and sorry and
[04:52] uh the cool thing is um all the color
[04:55] information
[04:56] and everything is saved dynamically
[04:59] in these brushes now so whenever we want
[05:02] to change the color
[05:03] or change the the objects or the ground
[05:05] materials
[05:06] we can do so after all the painting is
[05:09] done and we won't have to repaint
[05:10] anything so
[05:11] it's not just a more compact design and
[05:14] more simplistic design of
[05:16] the of the brushes that we use and on
[05:19] the painting tools
[05:20] but it's also a much more dynamic so we
[05:24] won't have to
[05:25] do tedious reworks and and repaints of
[05:28] something whenever we want something
[05:30] changed we can simply
[05:31] pick another color and we'll
[05:32] automatically update all over the planet
[05:34] and this will save us as i said lots and
[05:37] lots more time
[05:38] yeah i mean it was already pretty fast
[05:40] before like the atlantic v4 came online
[05:42] that was already pretty fast and then
[05:44] to here we did a whole we did a whole uh
[05:46] a segment on an isc and i think a lot of
[05:48] the comments were
[05:49] it goes they can't really be that fast
[05:51] and it's like now we've made it even
[05:52] you know faster and less labor-intensive
[05:55] and the results
[05:56] have gotten better i it's one of the if
[05:59] you you correct me if i'm wrong because
[06:01] i am the layman here but when i look at
[06:03] the new results
[06:03] when i'm looking at the before and after
[06:06] shots
[06:07] you know between you know the painting
[06:08] with the new tools today versus the
[06:10] painting with the tools that was done
[06:11] just
[06:12] a year ago uh it seems like things that
[06:14] there's a much better
[06:16] uh uh diversity in the elements
[06:20] yeah you you see a much better breakup
[06:22] between the rocks and the plants and the
[06:24] the various foliage and stuff and the
[06:26] different ground coverings um
[06:29] the textures seem to be greatly improved
[06:33] i'm not imagining that right the the
[06:34] textures like the the gravel textures
[06:36] and stuff we do and i showed this on ise
[06:38] and i was that the gravel textures alone
[06:41] seem to be way more detailed now than
[06:43] they used to be
[06:44] am i am i imagining this or am i right
[06:46] no
[06:47] actually not um we have we have actually
[06:51] gone through i think it was two or three
[06:54] weeks
[06:55] and we have reworked every single
[06:58] uh terrain texture that we had before
[07:00] and replaced them with
[07:02] i think it was 80 or 90 new ones
[07:05] um that are not just reworked but
[07:08] they are based on um
[07:12] realistic data like photogrammetry data
[07:15] it is actually photo scanned
[07:17] real life material that that is now um
[07:20] in our libraries that we can use and uh
[07:24] it's it's it's much higher quality the
[07:27] the definition on the ground uh is much
[07:30] higher now so it's more consistent and
[07:32] coherent with what you see on the rocks
[07:34] which has also been improved and updated
[07:37] and
[07:37] you know it's it's one of these things
[07:39] we are always try
[07:40] picking picking in a couple elements of
[07:44] our entire pipeline
[07:45] um and thinking about like how can we
[07:48] how can we improve this how can we
[07:50] how can we raise quality make this make
[07:52] this look nicer more consistent more
[07:54] coherent and such and when it comes to
[07:55] the painting tools
[07:59] one important aspect that probably um
[08:02] not many people think of right away when
[08:04] when we talk about it or mention it like
[08:06] this
[08:07] but a speed increase for us
[08:10] means that we have more time to iterate
[08:12] right
[08:13] if i have to do one paint pass instead
[08:16] of five paint passes that means i have
[08:18] five times as much time
[08:21] or five times longer to spend on
[08:24] this content and really polish it out
[08:26] until it works
[08:28] uh the way i wanted to and spend spent
[08:30] more time raising quality polishing
[08:32] things out
[08:32] tweaking things adjusting so on so the
[08:36] process of
[08:36] the process of making it faster and
[08:39] making
[08:40] it better it goes a long way towards uh
[08:42] one of the long-standing questions of
[08:45] how are we going to make every planet
[08:47] and every moon that we've set out to
[08:49] make
[08:50] it's it's it's this it's this you know
[08:52] this growth curve of
[08:54] you know as the tech improves and as
[08:55] things get better and things get faster
[08:57] that's how we're going to be it begin to
[08:59] work at scale
[09:00] and we're already seeing that in the a
[09:02] bit in the creation of the pyro now
[09:04] we're not we're not talking about pyro
[09:05] here
[09:06] but uh it's been it's been really
[09:08] delightful to see
[09:09] just how far you guys have been able to
[09:12] come so quickly
[09:13] uh as far as the the the groundwork now
[09:16] and of course we will be
[09:17] sharing more and more about pyro over
[09:19] the next you know several months so uh
[09:22] let's get to what we're doing today
[09:24] we've set the table enough we've
[09:26] recapped a bit and we've caught up with
[09:27] other things
[09:28] uh today you said we're exploring hype
[09:31] map stuff
[09:32] so uh at this point i'm gonna turn it
[09:34] over to you for a bit
[09:36] if you're watching live on twitch
[09:39] remember you can submit questions
[09:40] with the word question in capital
[09:42] letters surrounded by brackets
[09:44] and then our community management team
[09:46] will pull it out and
[09:47] send it on to us remember that patrick
[09:49] is an environment artist
[09:51] for planets and stuff so if your
[09:54] question is about
[09:55] uh when will this game feature come
[09:57] online that this wasn't the show for
[09:59] that if it's
[10:00] it's when will space stations get this
[10:01] he doesn't work on space stations it's
[10:03] the planetside stuff so
[10:04] planetside art related stuff that's our
[10:07] topic that's the stuff patrick will be
[10:09] able to speak to today
[10:10] so patrick if you want to share your
[10:12] screen i'll turn it over to you and i'll
[10:13] let you uh
[10:14] let you drive for a little bit all right
[10:20] that's so do you see my screen in a
[10:23] second
[10:24] zoom is put it on the wrong screen there
[10:26] we go now we see your screen
[10:28] oh good you see substance designer yep
[10:31] fantastic all right so um
[10:34] as you already said jared we are going
[10:36] to take a look at
[10:38] um a bit more like an in-depth look when
[10:41] it comes to height map creation
[10:43] some of these things changed as well you
[10:46] have talked about the citizencon
[10:49] citizencon demo that we have done in
[10:51] 2000 i think by the end of
[10:53] it was the end of 2018 i think so
[10:58] where we showed off the the process here
[11:01] uh but since then a lot of things
[11:03] changed and it has to do with the swap
[11:05] from v4 to no from v3 to v4
[11:09] um and yeah uh we thought let's let's
[11:12] have a bit of fun
[11:13] let's create one of these height maps
[11:14] from scratch and uh by the way explain
[11:17] some of the changes that have happened
[11:19] how it affects us as the art team how
[11:22] much time
[11:23] we get back from this how it affects
[11:26] quality and so on and so on
[11:28] you know so yeah how how
[11:31] how would you describe this shape what
[11:33] would you say this shape looks like
[11:35] this shape looks like a paraboloid
[11:41] this is official like this is you you
[11:43] can basically
[11:44] swap uh shapes here and the official
[11:47] name for this shape is a paraboloid
[11:49] terrible but uh i refer uh to it as
[11:52] a simple blob so all right
[11:58] not very scientific but whatever uh
[12:01] so yeah let's take a look at the editor
[12:03] real quick
[12:04] so this is a slightly modified version
[12:08] of
[12:08] microtech that i have here and if i fly
[12:12] around
[12:13] you can see that i have my my blob
[12:16] paraboloid shape um
[12:19] on the planet already looks very natural
[12:22] looks very natural right but this is
[12:24] usually
[12:25] um you know or one of the many ways that
[12:28] you could start with
[12:30] um what you can see though is that you
[12:32] know the
[12:34] how the color is distributed if you look
[12:36] at all the other height maps around it
[12:38] you have you have decent you know
[12:41] visuals
[12:41] it kind of all makes sense you can see
[12:43] that there are mountains and then there
[12:44] are valleys and they're filled with some
[12:46] gravel and such and it all follows the
[12:48] shapes nicely and
[12:50] so uh the same thing happens for this
[12:53] shape but
[12:54] you can see how this flatland here that
[12:58] has this swirly like a swirly pattern to
[13:00] it
[13:00] kind of creeps up our
[13:04] our half sphere here and it has to do
[13:07] with
[13:08] how um our height maps blend together
[13:11] it's not like we can simply produce or
[13:14] throw in this height map texture and it
[13:18] will always be
[13:19] the exact same or this exact
[13:22] uh cutout and visual because a lot of
[13:25] things happen
[13:26] in the editor on top right that might
[13:29] influence
[13:29] the the visual or the look of our height
[13:32] maps
[13:33] um let's take a look over here
[13:36] you can see that this blob appears many
[13:38] more times
[13:39] all over the planet and since it's
[13:41] really geometrical shape the data
[13:44] that you can see on it looks kind of
[13:46] janky right now
[13:48] uh sometimes a very young planet and
[13:52] it's
[13:52] preteen years going through some acne
[13:55] issues
[13:57] something like that but you can see that
[13:59] you know sometimes
[14:01] these shapes blend together sometimes we
[14:03] get
[14:04] we get multiple frequencies of these
[14:06] things blending together
[14:07] and forming entirely different
[14:10] formations
[14:11] and this is this is the um this is
[14:14] something we have to take into account
[14:16] um but it's also the beauty of of our
[14:19] planet tech in general because
[14:21] from one height map by shifting it
[14:23] around and making it blend with itself
[14:25] and blend with all the other surrounding
[14:27] height maps
[14:28] we get very very nice happy accidents
[14:32] like these that produce
[14:33] very interesting results
[14:36] so let's go back to our original
[14:40] one here so as you can see
[14:44] we have this elevation and it's it
[14:46] resembles exactly this texture
[14:49] um the dark pixels basically mean
[14:53] there's
[14:54] no elevation happening or basic or dark
[14:56] pixels mean
[14:58] in this case because okay i won't get
[15:01] into two
[15:02] crazy technical details here but if you
[15:04] look at this one
[15:05] i have changed the the values of it
[15:08] slightly so the dark is gone
[15:10] right so why why did i do that
[15:13] um if the pixels here on on the on the
[15:16] outer outside of our blob were dark it
[15:20] means that
[15:21] the height map on the planet surface
[15:24] would
[15:24] actually be pushing down but if we want
[15:28] a flat mountain that is simply just
[15:30] bumping up
[15:31] then we have to constrict it to
[15:35] a gray gray color value
[15:38] and from gray upwards our height maps
[15:41] will be bumping up
[15:43] and grey downwards they will be bumping
[15:45] down
[15:46] i can demonstrate this quite easily by
[15:51] for instance just
[15:55] famous last words here i can demonstrate
[15:57] this easily
[15:58] yeah yeah so minutes
[16:03] no no no no no i'm a professional
[16:08] those are other famous words
[16:12] i'm risking it right all right
[16:16] so i have just added another
[16:19] tiny blob and i'm going to put it in
[16:20] here you can see that
[16:23] the gray is our default base plane and
[16:27] now that i have added this
[16:29] these dark pixels you can see that this
[16:31] blob here
[16:32] is represented and it actually bumps
[16:34] down might not be super visible but
[16:38] oh wait i forgot this one so now now you
[16:41] can clearly see that it bumps down right
[16:44] so um this is fundamentally how we have
[16:47] to
[16:47] think of uh the text or textures and
[16:51] all the colors or the the values and our
[16:53] height
[16:54] textures this is actually something you
[16:56] know it's not specifically to us this is
[16:59] this functionality is very very common
[17:01] in in most game
[17:02] engines and and other games are using it
[17:05] precisely the same way
[17:08] so yes let's revert this one back
[17:13] and you can see it updating
[17:16] right and if you if you made the uh
[17:20] the second blob there a
[17:24] lighter color it would be a another
[17:27] mound next to it
[17:30] uh yes precisely um
[17:34] a lighter color
[17:37] yeah you could easily you could easily
[17:39] for example
[17:42] add multiple elements like for example
[17:44] i'm increasing the tiling here
[17:46] and now i have four of them on one
[17:48] texture so what happens if i export this
[17:51] right i'm just going to export this to
[17:54] the engine right now
[17:57] and then you can you already see that
[17:59] something happened
[18:01] but the height map didn't update and it
[18:03] has something to do with our planet we
[18:04] have to reload the planet
[18:06] that goes quite quickly and we do have
[18:09] our four
[18:10] blobs and the cool thing is all the
[18:12] color and
[18:14] everything else is adjusting dynamically
[18:17] to it within a second
[18:19] so i don't have to manually go in or
[18:22] retweet something or adjust the the
[18:24] trees
[18:24] or the ground materials or or anything
[18:27] anything really
[18:28] i can dynamically swap out this thing
[18:30] with um
[18:32] anything i like but uh yeah
[18:36] these are just um
[18:39] these are just a couple likes very
[18:40] simple geometrical shapes so how can we
[18:42] make this more interesting
[18:45] um just to also demonstrate
[18:48] how we could attempt to to
[18:51] if if it really was like a single
[18:53] mountain like this one
[18:55] or a single large hill or something how
[18:57] could we make this more interesting
[18:59] we have a couple nodes in substance
[19:01] designer that allow us to detail these
[19:03] things out for example like
[19:04] terracing node most of these nodes
[19:07] and are a couple of of them um we have
[19:10] built ourselves to
[19:12] um yeah simplify the or speed up the
[19:16] process
[19:16] and and have things that allow us to to
[19:19] simply put in the details that we need
[19:21] or like
[19:22] um other other games or in in
[19:25] like previously in the very beginnings
[19:26] when i joined early on we weren't even
[19:28] using substance designer for it but we
[19:30] decided to go for it because
[19:32] it's um it's a it's very nice
[19:35] we can basically replicate if we are
[19:38] missing anything
[19:39] we can replicate it in substance
[19:41] designer build our own custom nodes that
[19:43] do precisely what we need
[19:44] instead of diverting back to another
[19:46] software and that keeps our
[19:48] pipeline quite tidy and nodes are really
[19:52] useful uh for for
[19:55] for going back and identifying and
[19:57] tracking changes that happened
[19:59] you know six seven eight nine steps ago
[20:02] exactly and it's all dynamic yeah so
[20:05] this looks more
[20:06] like a cake now but let's export this
[20:08] one
[20:09] yeah so i've added i've added terracing
[20:11] now right like a cake
[20:16] see this looks odd but if i reload the
[20:17] planet one second
[20:20] bloop and we have our cake on the planet
[20:26] and you can see how the color again
[20:29] automatically adjusts
[20:30] and the bedrock is automatically sitting
[20:33] on or
[20:34] being applied where the slopes are but
[20:38] you you can also see that there's this
[20:39] part here
[20:41] where it's where it's you know it's not
[20:44] these layers are not continuous and
[20:47] that's something
[20:48] i mentioned before is the the
[20:51] surrounding height maps they start
[20:52] blending into that height map in order
[20:54] to fuse
[20:56] all of the elements together to not have
[20:59] any weird seams or cutoffs or hard
[21:01] repetition
[21:02] we blend all of the data together so
[21:05] that in
[21:07] in the end it looks like a nice
[21:10] continuous consistent
[21:11] landscape
[21:14] so this is still quite geometric
[21:18] uh although i've seen and i've seen
[21:20] things like that
[21:21] before i i grew up next to a uh a quarry
[21:24] actually as a kid and oh nice and and
[21:27] the mountain
[21:28] what started as a mountain at one point
[21:30] ended up being a very terraced
[21:32] looking thing as they were slowly you
[21:34] know systematically
[21:35] ripping into it so i've actually seen
[21:38] that exact structure
[21:39] very similar to that structure in real
[21:41] life not naturally occurring but
[21:45] yeah oh let's let's make this more
[21:47] similar to what you
[21:48] know then um because i can invert the
[21:51] entire
[21:52] thing right and then this is
[21:56] a little more query like but still very
[21:57] geometric and unnatural looking
[22:00] and i have to adjust these values
[22:02] because it's still bumping up and not
[22:04] down so that would actually result in a
[22:06] very very
[22:07] awkward um visual so i'm tweaking these
[22:11] the quarry i was talking about was
[22:12] actually a mountain it was when i was
[22:14] oh when i was five it was very big and
[22:17] when i was 10 it was smaller when i was
[22:19] 15 it was smaller
[22:20] and actually drove past it about two
[22:23] years ago for the first time in a decade
[22:25] and it's almost completely gone now
[22:27] they've almost completely just destroyed
[22:28] the mountain
[22:31] but but when i was growing up it looked
[22:32] very much like that they were
[22:33] systematically
[22:34] whittling it down terraced by terrorists
[22:37] by terrorists
[22:38] but yes this this also looks like this
[22:40] looks like the traditional dig
[22:42] you know down yeah yeah this is how i
[22:44] know quarries there's a big one
[22:46] close to my hometown and they they look
[22:48] more like this
[22:50] um so
[22:53] what i have done now i basically
[22:55] inverted the entire thing
[22:56] and defined the ranges here
[22:59] so that we have our grain gray default
[23:03] plane and all the other values here
[23:06] are just getting darker and darker and
[23:07] darker which means
[23:09] it's bumping down
[23:12] so this is what we get so now we get
[23:15] this white
[23:15] plane um cutting through
[23:19] so what could that be right um it is
[23:22] actually the ocean level
[23:23] we have bumped down our height map so
[23:25] much that we are hitting
[23:27] um that we are going past the ocean
[23:29] level
[23:31] all right so so the system at this point
[23:33] automatically fills the ocean in but
[23:36] what if you were
[23:37] is there a way to cut the ocean out of
[23:39] this
[23:41] because there's no ocean around you
[23:43] obviously
[23:46] we have a method of cutting in holes
[23:50] into the terrain specifically for caves
[23:53] and such
[23:54] i think it also works for the ocean but
[23:57] generally we don't
[23:58] do that because we simply by adjusting
[24:02] the entire elevation of the planet
[24:04] we decide where where the ocean should
[24:06] show up and where
[24:07] it should not show up yeah so uh yeah
[24:11] and then i told you about our custom
[24:13] nodes uh
[24:15] so we can take this and transform it to
[24:17] something more natural looking
[24:18] right so i'm going through oh from
[24:21] something very geometric
[24:24] and i can adjust these uh i can adjust
[24:28] that noise that frequency that we are
[24:30] adding to these edges here
[24:32] to produce a more realistic result so
[24:36] what is that note doing like it's
[24:39] basically
[24:40] taking the existing information and
[24:42] starts
[24:43] pushing these things in and outwards
[24:46] based on
[24:47] based on a noise based on a mathematical
[24:50] noise
[24:50] something like this
[24:55] okay
[24:59] uh how what like let's say
[25:03] something similar would be this here
[25:05] wait i'm gonna take
[25:07] another of our notes which is called
[25:09] vortex
[25:12] and i can for example put in
[25:17] whatever really
[25:20] let's do it like this
[25:24] so i have this noise up here and i can
[25:27] put it into the vortex node and it's
[25:31] driven by this bottom noise and by
[25:34] adjusting this
[25:35] you can see that i can start
[25:38] swirling and moving the existing
[25:41] information around
[25:44] so this is something very cool that you
[25:46] can do
[25:50] very interesting alien or even
[25:53] lava formations with i hooked it up into
[25:57] um an inflate note now so all
[26:00] all the bits and pieces if you look if
[26:02] you look at this
[26:03] string here it gets inflated
[26:07] so now all these shapes are pushing into
[26:09] one another and creating a more like
[26:11] like like something is flowing or
[26:14] something has been pushing these
[26:15] these things around like a dry it looks
[26:17] like a dried lava bed to me
[26:19] yeah yeah like lava had been through
[26:22] here before
[26:23] you know and it's all dried and cooled
[26:25] so just for the fun of it
[26:28] let's put it in here
[26:32] this is looking very very harsh right
[26:35] because we didn't adjust our ranges but
[26:38] if i do so
[26:40] if i give it a more reasonable range to
[26:42] live in
[26:44] i can constrict it maybe even further
[26:47] because these
[26:47] these shapes are quite quite intense
[26:52] okay so now let's export that
[26:58] and take a look at it here you can
[27:00] already see the data adjusted
[27:03] there we go but the height didn't so now
[27:05] i reload and the height adjusts
[27:08] and there we go
[27:14] see i didn't even detail this out uh at
[27:17] all
[27:18] but it's giving me quite a funky result
[27:20] so if we ever
[27:21] were to do and a weird alien planet that
[27:25] has these odd shapes due to
[27:28] very harsh wind they're all aliens
[27:35] we are also an alien planet
[27:38] that looks cool yeah right it's
[27:41] something that we
[27:42] uh we don't have yet
[27:46] it's a good example it's a good example
[27:48] of how the existing tech can be used to
[27:50] push things in new and exciting ways
[27:53] right not not everything new
[27:55] requires new tech you know so you know
[27:57] there's still a lot of
[27:58] there's still a lot we can pull out of
[27:59] the tech that we have at this moment
[28:03] so if we go back to
[28:06] to our little quarry
[28:10] um this is with the
[28:13] landform node applied so this noise that
[28:16] starts deforming everything a little
[28:19] and then i hook it up to a sediment node
[28:22] which adds a little bit of sedimentation
[28:25] on top so you can see now
[28:30] it's like the the soil started
[28:33] sliding down a little and accumulating
[28:37] then similar to how we did before with
[28:39] the swirly shapes we can
[28:41] can inflate or deflate this a little to
[28:44] to sharpen up some of these features
[28:51] and then export again and check in the
[28:53] editor
[28:55] and the cool thing is someone can be
[28:58] let's say
[28:59] uh pascal pascal is uh
[29:02] also not unknown um
[29:06] he has been on various shows multiple
[29:08] times right so let's say he
[29:10] he's working on the actual painting of
[29:12] the planet
[29:13] while i am defining out all the local
[29:17] height uh data and information just as
[29:20] we're doing right now
[29:21] and i'm just working through it and then
[29:22] pascal comes by and says hey you know
[29:24] what
[29:25] i finished the painting and i get his
[29:26] latest changing changes
[29:28] uh from the server and
[29:31] i see all my height maps with pascal's
[29:34] updated painting
[29:35] within like literally 30 seconds i just
[29:38] need to reopen
[29:40] i might need to reopen the editor one
[29:42] more time but uh that's about it
[29:45] so now now that we have applied huh i'm
[29:48] just saying this i was muttering to
[29:49] myself this is pretty cool
[29:52] and uh yeah now since uh we have uh
[29:56] we have applied this noise to the to
[29:57] this geometrical shape that we had
[29:59] before and it looks
[30:00] a lot more natural now i think it's
[30:02] something similar to the mining pits
[30:03] that we already have on
[30:04] hurston now that i think about it
[30:08] there are some mining pits on hertz yeah
[30:12] they might not look exactly like this
[30:14] but they feature similar visuals yeah
[30:16] i like this one a lot uh one of the
[30:18] questions from the chat
[30:20] how many of your nodes do you have that
[30:22] are custom made
[30:23] or scripted and uh do you have a
[30:26] favorite node that the did you like a
[30:27] go-to node
[30:33] so the custom ones that only i did
[30:37] are are these one and one two three four
[30:41] five six seven eight nine ten eleven
[30:43] eleven
[30:44] twelve thirteen and then there are a lot
[30:46] of notes that sebastian did you know
[30:49] because he's the techie guy so these are
[30:51] my non-tech artist notes that just give
[30:54] me
[30:54] funky visuals but he he does like crazy
[30:57] stuff he does
[30:58] he does the intense things like um
[31:02] like almost simulations on a 2d basis
[31:05] for example
[31:07] or erosion node
[31:11] so let's for example oh let's let's do
[31:13] something a little
[31:15] more from scratch so let's combine one
[31:17] of my notes with some of sebastian's
[31:19] notes right
[31:20] so let's go for the landform node and
[31:23] let's let's take a look at
[31:24] a simple noise sorry if you hear the
[31:28] emergency cars it's uh
[31:31] frankfurt central so we have a very
[31:34] simple up and down
[31:37] and i'm putting it into this landform
[31:39] node and i'm
[31:40] exaggerating the node properties here
[31:44] and you can see how
[31:46] the existing data gets shifted around so
[31:49] this
[31:50] is a very cool note because i can
[31:52] basically
[31:53] make something very terrain um
[31:56] very terrain-like or very believable
[32:00] terrain
[32:01] out of just two nodes see how because
[32:03] the the idea behind this note was
[32:07] how do land masses form right that
[32:10] messes formed by
[32:11] you know constantly or not constantly
[32:13] but sometimes
[32:15] being moved around or shifting into one
[32:17] another and deforming and fall
[32:20] like even faulting and all of that stuff
[32:23] so i thought like how cool would it be
[32:25] to just have one note that simply gives
[32:27] you that result
[32:28] in an instant right yeah so this is
[32:31] already quite believable
[32:33] uh when it comes to the basic shapes and
[32:35] and now i can take this and further
[32:36] detail it out but before we do so let's
[32:38] let's just simply check it out in the
[32:40] editor as we always do
[32:41] because ultimately how it looks like in
[32:44] substance design designer doesn't
[32:46] interest me that much i need to know
[32:47] that it really looks great
[32:50] in the editor right oh so now
[32:54] like another one of these happy
[32:55] accidents happened
[32:59] i can see my my features but what what
[33:02] happened here
[33:03] right i can i can double check here
[33:06] these values are all like be below gray
[33:10] right so this thing should be bumping up
[33:12] but it's bumping down
[33:14] so i need to adjust that
[33:17] maybe adjust the range just not have it
[33:20] be too extreme
[33:22] oh actually like this sorry
[33:26] okay and
[33:31] there we go now you can see the the
[33:33] visuals that i get in in the substance
[33:35] design of viewport are already
[33:37] highlighting these tips red that means
[33:38] you know they're high
[33:40] so it's it's high elevation
[33:44] so i can export this again and
[33:47] you know this is already quite
[33:48] interesting i don't i don't hate this
[33:50] right
[33:51] uh if i reload again just by changing
[33:55] these values
[33:56] i get a completely different visual
[33:58] suddenly like you know
[33:59] it's it's it's bumping up my landscape
[34:02] this look how it looks from the top you
[34:04] know you can see these forms deforming
[34:07] and shifting into one another
[34:08] it's quite cool it's a very good base to
[34:10] work uh to work from
[34:12] the the scale is interesting because
[34:14] when we look at it in substance designer
[34:16] it's it's it's i i'm seeing it on like a
[34:19] much more like
[34:20] macro scale when i see it when i saw
[34:22] what you were in
[34:23] designer i i see that and i look at
[34:26] something like that and i expect that to
[34:27] be like an entire mountain range
[34:29] and then because this this uh
[34:33] uh this particular height map is only
[34:34] mapped to this one little area here
[34:36] it's actually a much more condensed
[34:39] thing
[34:40] i don't know i don't know if i'm
[34:41] explaining myself uh but
[34:43] uh remember when i told you about how
[34:46] our um
[34:48] our height maps are splattered on the
[34:49] planet and sometimes if there are two
[34:51] right next to one another they will be
[34:52] blending together as well
[34:56] so we can check that out as well here
[34:57] like simply by flying over and seeing
[34:59] how it all behaves
[35:00] so look at this
[35:04] this is the exact same height map but
[35:06] it's but it's
[35:08] it sits here multiple times
[35:11] and blends together and forms an even
[35:14] greater landscape even
[35:15] greater mountain range
[35:20] instead of just being a single dot on
[35:22] the planet that gives you that
[35:23] that individual mountain and then you
[35:26] know if
[35:27] i would like to detail this out let's
[35:30] take one of these tools here and this is
[35:32] where we
[35:33] and we're not getting into the painting
[35:34] as much now but um
[35:36] if i wanted to i can take us them heavy
[35:40] spruce tree areas and be like okay you
[35:42] know what i want the
[35:44] spruce trees to live on this plane here
[35:48] and i click in here once and there we go
[35:51] spruce trees some of the stuff
[35:55] some of the other things are bleeding in
[35:58] you can see
[35:59] that has to be adjusted so um this is
[36:01] where you know
[36:02] we start polishing things out and such
[36:06] really clean that up
[36:09] and this is without any detail passes
[36:11] and you can kind of see that here that
[36:12] the data looks
[36:13] and even after the detail pass there
[36:16] might be some areas where you get to see
[36:18] um wonky wonky color application like
[36:20] this
[36:21] um but again all of this stuff are the
[36:25] bits and pieces that we continuously
[36:27] look at and and be like okay how can we
[36:30] improve this
[36:31] um let's polish this out let's improve
[36:34] this and
[36:35] we are making progress so all of that
[36:37] stuff that uh you might encounter on the
[36:39] planet
[36:40] and to look like huh what's what's
[36:41] happening here and you know we are
[36:42] probably looking at it
[36:44] at it already and and figuring things
[36:45] out for it but we have our priority
[36:48] lists
[36:48] that we need to work from uh
[36:51] so let's take the same mountain and we
[36:55] said we would like to
[36:56] reuse one of um sapp's node
[36:59] nodes this is like a really cool node
[37:02] erosion it really applies yeah no what
[37:05] it what it says it
[37:06] applies erosion to
[37:10] to whatever you put into it so let's
[37:13] give it a couple values to work from
[37:18] sediment strength zero thermal erosion
[37:22] angle
[37:23] let's go for something like
[37:28] this and i'm bumping up the iterations
[37:32] here and setting this
[37:36] up
[37:42] and trying to see what it gives me
[37:58] see if we can see something in the
[38:02] viewport
[38:04] okay uh
[38:07] let's try something something is
[38:10] off i'm gonna try something else
[38:14] okay it's no no no big deal though
[38:17] um it is something
[38:20] oh yeah we can show the diamond dynamic
[38:23] flow this
[38:24] this is also very similar to erosion and
[38:27] quite visible
[38:28] and doesn't need to uh to to render as
[38:31] as
[38:32] long so let's increase the flow depth
[38:35] here
[38:36] so you can see now that what what
[38:37] happens what would happen if um
[38:40] you know rain started having an effect
[38:43] on the site map
[38:45] and i can hook it up to this flow node
[38:50] i'm gonna enlarge this here and you know
[38:53] white is the peak of our mountains and
[38:54] then
[38:55] the dark it gets the lower we go but you
[38:57] can see that
[39:00] i can dial in this this hydraulic
[39:04] erosion this flow here
[39:08] as i like it's a very complex node
[39:11] very cool stuff definitely increase the
[39:14] quality of our
[39:16] existing height maps a lot so what i can
[39:18] do with this now
[39:20] is i can dial it in subtly and now
[39:23] pipe it in to our export nodes
[39:28] and then you get all of this stuff right
[39:31] a lot more detail but what looks like a
[39:35] subtle
[39:36] you know like a subtle blend here is
[39:38] actually quite extreme in terms of
[39:40] elevation so i need to dial it back even
[39:43] more
[39:46] until i i get a result that i like see
[39:49] this looks
[39:49] a lot a lot healthier now
[39:55] maybe even lower you know the
[39:59] the player experience is something that
[40:01] we have to really consider
[40:02] at this point as well because when we
[40:04] create these height maps
[40:06] uh we are speaking of you know elevation
[40:08] changes
[40:09] and frequencies and also bumpiness
[40:12] so if i was ever to do
[40:16] something crazy like
[40:19] like this
[40:26] you know if if i would really like our
[40:28] backers to hate us
[40:29] right
[40:35] you know have fun driving around in here
[40:38] right
[40:39] that's obviously an extreme example uh
[40:43] let's see it oh you really want to see
[40:46] it
[40:47] oh my god let's see it you know
[40:50] oh god jared is always making me do
[40:53] stuff guys
[40:55] it's crazy hey you're lucky i don't make
[40:58] you do devil's town
[41:00] please don't please don't fire me for
[41:03] this
[41:04] okay all right
[41:10] it's quite bumpy i have dialed it i have
[41:12] dialed it down a lot but it's quite
[41:14] bumpy
[41:15] could probably exist i know this is
[41:16] another height map already let's go over
[41:18] here
[41:19] there it is there it is you know so this
[41:21] this doesn't work
[41:22] um but it's it's fine i mean we also
[41:25] wanted to talk about limitations and
[41:27] what we can and cannot do
[41:28] right yes just because you can do it
[41:31] doesn't mean you should do a thing
[41:33] no absolutely not and we have our strict
[41:35] rules and
[41:36] uh for our workflows to prevent these
[41:39] visual errors from happening
[41:40] right because first of all how would you
[41:43] drive your cyclone
[41:44] through this right it's crazy it's not
[41:47] this is this is not enjoyable at all
[41:49] um i mean rocks are already an issue
[41:52] right which we try to solve now
[41:53] which is great uh but you also see that
[41:57] the data it's so
[41:58] it's so much elevation data and the
[42:02] the contrast that that is happening here
[42:05] um and the planet tech picks up all
[42:07] these little things and starts
[42:09] starts jamming all this data in between
[42:11] these crevices and cracks so
[42:13] this is something that we should
[42:14] definitely not do so you know uh
[42:16] we are very very cautious but let's
[42:19] let's go for
[42:20] um yeah let's go for it the same thing
[42:23] but a more healthier
[42:24] approach yeah now it's it's it's a
[42:26] question showcase that
[42:27] it's good to showcase that it's it's
[42:29] it's always important to remember that
[42:31] you know that it's it's one of the
[42:33] reasons you can't leave
[42:35] a procedural system up entirely to the
[42:37] procedural generation
[42:38] it's why these things have to be
[42:40] validated by artists
[42:42] and level designers and stuff like that
[42:44] because you know
[42:46] the the full breadth and scope of what's
[42:48] capable is not necessarily
[42:50] always a good thing it's you you have to
[42:52] use
[42:53] tools responsibly and we just showed a
[42:55] very irresponsible use of the tools yeah
[42:58] so that
[42:58] that was useful that was good okay but
[43:02] let's show a more responsible uh
[43:03] approach right so
[43:06] another note because if we if we don't
[43:11] if we don't detail things out um
[43:16] these areas will look a little you know
[43:19] a little flat and the
[43:20] the planet tech needs little pixel
[43:22] variation to pick up on all of these
[43:24] little
[43:25] crevices to to achieve things like these
[43:28] where
[43:28] where one biome is creeping in through
[43:31] the crevices of another biome
[43:33] and therefore creating this this
[43:35] interesting mix right this result right
[43:37] here for example
[43:39] um so we cannot leave it too flat but we
[43:41] also want it to have a reasonable amount
[43:43] of detail which is what we have done
[43:45] with this note now so i've added the the
[43:47] flow
[43:48] right which is still in there but now i
[43:51] have thrown
[43:53] uh maybe maybe let's maybe show it again
[43:55] so this is without
[43:57] this is with just the flow um
[44:01] also based on one of sep's node and then
[44:03] the detail
[44:04] soil node which which i have built to
[44:06] just quickly generate
[44:08] some of that close up nice a break up on
[44:11] top and i can basically
[44:13] decide if i want a simple noise
[44:16] um or if i wanted to be
[44:21] a more of a dry soil look
[44:25] so now i can sharpen this up
[44:29] and reduce the opacity here this is
[44:31] something we have to do individually but
[44:33] you now you see that
[44:34] it resembles more of a
[44:38] more of a dried out patchy kind of look
[44:42] right so again like maybe
[44:45] before
[44:49] yeah this is without and this is without
[44:52] some detailed soil application
[44:55] right now see it's just these little
[44:57] tiny bumps they but they do make a
[44:59] difference
[45:00] they absolutely do make a difference
[45:01] because our new painting tools
[45:04] they can pick up on the slightest pixel
[45:06] variation and therefore we can
[45:08] assign biomes to you know i could
[45:11] probably
[45:12] assign a biome to to this patch and this
[45:15] crevice individually you know and and
[45:18] in in the editor that would be a couple
[45:20] meters apart
[45:22] um so yeah let's export that again yeah
[45:24] let's get rid of our nightmare terrain
[45:27] uh if you have any questions uh i'm
[45:30] going to take them gladly
[45:34] folks have been asking if the system
[45:37] allows you to paint a planet
[45:40] and automatically use the correct
[45:42] material based on a planet temperature
[45:44] size atmosphere and stuff or do you have
[45:46] to
[45:47] go in and set all those things
[45:49] individually each time
[45:56] so it is something that we have been
[45:59] discussing in the team as well
[46:01] and yes there is a uh there is an option
[46:04] uh
[46:04] you you see that okay let's let's let's
[46:08] i have destroyed uh don't don't uh
[46:11] we have wrecked i have yeah we have
[46:14] wrecked it a little yeah that's
[46:15] but that's fine um
[46:19] if you take a look at this square over
[46:21] here right it's something that we have
[46:22] already discussed right
[46:24] um i can take for example the
[46:27] obsidian dark biome and paint it down
[46:31] and you can see that it automatically
[46:32] gets applied here
[46:34] right so what we could do because this
[46:38] texture and each and every corner of
[46:41] this texture
[46:42] resembles um specific humidity and
[46:45] temperature
[46:46] situations uh like
[46:49] the top right is cold and dry
[46:52] the bottom right is uh hot
[46:56] and dry the bottom left is um
[47:00] cold no wait cold dry
[47:04] uh hot dry cold wet hot wet
[47:08] warm dry warm wet and then cold
[47:11] wet yeah exactly so i could basically go
[47:15] in
[47:15] and and paint something
[47:20] paint something in that resembles the or
[47:22] that would uh
[47:24] logically resemble some um
[47:27] climate for example if if it was earth
[47:29] right
[47:30] uh i could where it's where it's cold
[47:32] and dry i could put my arctic areas and
[47:35] really
[47:36] paint this square out completely
[47:38] unrelated to any of
[47:40] any planet or or anything really and
[47:43] then we could throw any data at it and
[47:44] it would
[47:45] redistribute this data logically
[47:48] so no we don't the the answer would be
[47:51] we
[47:52] we don't have to go in and adjust the
[47:56] painting
[47:57] all the time and repaint our biomes and
[47:59] because you can see
[48:00] even even after or even only this
[48:04] local height map here it already adjusts
[48:07] to the new data and the same thing
[48:09] is happening globally so it's the it's a
[48:12] very
[48:12] sorry it's a very very same logic be
[48:15] being applied there
[48:16] so just by adjusting our workflow
[48:19] slightly we could totally do that
[48:21] yeah yeah so this this height map that
[48:24] we've been working on
[48:25] uh we've seen that it's it's in this one
[48:28] place we focus on but we also
[48:30] have seen that it's replicated in other
[48:31] places yeah
[48:33] how how what's that breakup like
[48:37] how many different patches are there on
[48:40] a planet how do you how do you keep
[48:41] these things from being
[48:43] too repetitious oh
[48:49] the power of death tools um
[48:53] you can see that what we have been
[48:54] adjusting and modifying right now
[48:56] is uh index or patch number three right
[49:00] you refer to it as patches uh it's
[49:02] actually okay
[49:03] um we tweaked patch number three
[49:06] right next to us it is patch number zero
[49:09] and let me show you something um we have
[49:12] a list
[49:13] in our planet editor tools whoops
[49:17] let's actually put it in here
[49:21] so this is something that we should that
[49:24] we don't show off quite frequently but
[49:26] you can see that we have
[49:27] our ecosystems and what we call as
[49:30] ecosystems are all the height maps
[49:32] right this is the list of all the hype
[49:34] maps that we use on all our planets we
[49:36] have
[49:37] we have hills we have ice dunes we have
[49:40] the mining pit
[49:41] or you can actually also let's let's do
[49:43] it properly here
[49:44] you have a preview of all of it here you
[49:47] have
[49:48] the mining pits you have mountains
[49:50] eroded and all of that stuff right
[49:53] so it's it's a it's a huge library of
[49:55] fightments
[49:56] all kinds of flatlands speeches and so
[49:59] on and so on so what i can do
[50:01] is simply select that second
[50:05] patch and for instance fill it with
[50:10] um
[50:12] fill it with something entirely
[50:13] different which is uh
[50:15] let's do mountain billowy mountain yeah
[50:19] mountain billowy o2
[50:22] that's my favorite all right
[50:26] let's jump back to our spot oh that was
[50:28] actually three not two sorry
[50:30] three oops and now turn this off so you
[50:33] can actually see what's happening
[50:35] and this is a good demonstration of the
[50:37] question that was asked previously
[50:40] see these are the billowy mountains and
[50:43] you can see that the data already
[50:45] adjusted but if i go back and
[50:48] put in something entirely new
[50:52] now
[50:55] see everything moved with it
[50:59] um let's take some let's take a height
[51:01] map that you guys have actually never
[51:03] seen before
[51:09] it's not on any of the current planets
[51:10] yet
[51:13] you saw it here first
[51:17] see i can just i can just go through
[51:20] this library and decide like okay
[51:22] what mountains could fit best right and
[51:24] i can i can define
[51:26] uh as as i've shown before
[51:30] so you see these funky colors right it's
[51:32] 0 to 15 so
[51:33] we have 15 patches 15 slots that we can
[51:36] fill
[51:39] so i can decide on a lineup of 15
[51:44] different height nets that's yeah
[51:47] there's a single volcano
[51:48] right here now it's 15 different height
[51:51] maps but each height map is used
[51:53] differently as well yeah we can
[51:56] it's not just a repeat every 15. that's
[52:00] cool
[52:00] get closer to that i want to see that
[52:06] you can see where bedrock is
[52:07] automatically we get these bedrock
[52:09] assets
[52:10] spawning in and defining out these
[52:12] slopes because you know
[52:14] it is just displacing
[52:18] upwards so if you want more silhouette
[52:21] from it you have to
[52:23] put assets on top which we scan scan
[52:25] sorry
[52:26] scatter on top procedurally as we do
[52:28] with anything else
[52:32] and that's how we can detail these out
[52:37] uh yeah so before i asked you to zoom in
[52:39] on that we were talking about how
[52:41] each version of those 15 are still
[52:43] different from each other
[52:46] uh different different type yeah it's 15
[52:49] unique individual completely different
[52:52] heightmaps
[52:53] yeah but but each version of three is
[52:55] not exactly the same
[52:56] as we've seen the beginning how how does
[52:59] it how does it make each version of
[53:02] that three different okay so um
[53:06] it is it is the exact same texture every
[53:08] single time
[53:09] but if i get in that
[53:12] volcano again
[53:15] then it's like like when we had that
[53:17] blob at the beginning
[53:19] some places we had one blob some places
[53:21] we had two blobs some places
[53:22] exactly exactly and together um maybe
[53:25] that's not the best
[53:27] let's take this one for instance
[53:30] not very visible too yeah the blob was
[53:32] probably the best example for that
[53:34] but fundamentally it's the thing that
[53:36] i've already explained to you
[53:38] um let's show this one again so
[53:42] the third patch here is isolated right
[53:45] there is no third patch around it but
[53:48] if we check this spot for example
[53:52] there are two two patches um
[53:55] next to one another right so what we do
[53:58] in
[53:59] like what the planet tech does for us
[54:01] let's take these mountains for instance
[54:03] it takes a height map and then it starts
[54:06] shifting it around
[54:08] and then it starts blending it with
[54:09] itself so you get you will get to see
[54:13] uh a somewhat new and unique look
[54:16] every single time you pass by the
[54:18] sitemap because it's
[54:20] it's blended together with its
[54:21] surroundings in
[54:23] a new way every single time so yes it is
[54:26] it is a little different every single
[54:28] time but it's still the same texture
[54:30] we we just you know we uh have these
[54:34] tricks and
[54:35] and processes that that allow us to make
[54:37] it look super unique by shifting the
[54:39] information around
[54:40] blending it with all its surroundings
[54:41] and the cool thing is
[54:43] every other height maps do the same you
[54:46] know and
[54:46] by by that you get this huge mumbo jumbo
[54:50] of of
[54:50] of blended height maps and every
[54:52] everything looks kind of unique
[54:54] that's cool so so so one version of
[54:56] three
[54:57] is blended with two and four so it looks
[55:00] one way and then another version of
[55:01] three is blended with 14 and 15.
[55:03] so it looks different every height map
[55:05] affects
[55:06] all the other height maps that's cool
[55:12] high students yeah
[55:15] so um i think
[55:18] unless you got one more thing to show us
[55:20] we're actually done yeah i actually i do
[55:21] have one more thing to show
[55:23] i think i think it's really cool example
[55:25] to show um
[55:26] we have been working on on very very as
[55:28] you can see
[55:29] we have done this tiny example here
[55:32] right we have done the blob we have done
[55:34] this um
[55:36] what we have what we see now
[55:39] so this is another graph let's take a
[55:42] look at this
[55:44] um this one for example is utilizing a
[55:47] melt note that we have
[55:50] that kind of streaks through our
[55:54] terrains and and resembles more or less
[55:56] some
[55:58] something like a lava flow or something
[56:00] you know it could be something volcanic
[56:01] something that we
[56:02] use quite often um but let's
[56:05] show something that we have done for
[56:07] pyro
[56:10] um and i believe the
[56:14] the specifically that one height map we
[56:16] have already shown
[56:18] um in some updates already
[56:22] now mind you we're not going to see pyro
[56:24] we're seeing a pyro no no
[56:26] as applied to micro attack exactly so
[56:30] you you see how small these graphs are
[56:32] and how simple they
[56:33] are and what what kind of sim you know
[56:35] what cool results we already get from
[56:37] this you know this is really powerful
[56:38] because with just a couple clicks you
[56:41] know i can throw a couple notes
[56:43] one two three whatever and then i get a
[56:45] reasonable result from it so this is
[56:47] what we wanted to achieve
[56:48] again speed right speed and quality um
[56:52] and our height maps like for all the
[56:54] game devs that i might be watching out
[56:55] there our height maps are only
[56:57] uh 1 000 by 1 000 you know 1k resolution
[57:01] basically so uh it's not like we can
[57:03] push for
[57:04] crazy amounts of detail no it's actually
[57:06] 2k but still
[57:07] um our height maps are 2
[57:11] uh roughly two by two and all the other
[57:14] data is one by one so
[57:16] it's not like we can push for crazy
[57:18] amounts of uh detail
[57:20] so this is this is this workflow and
[57:22] this approach we're taking is perfect
[57:23] for us
[57:24] but let's take a look at a more defined
[57:26] graph you can see that there's a lot
[57:28] more going on
[57:29] you know it's uh
[57:33] it yes it's it's a these decently long
[57:36] um decently long substance graph but
[57:39] it's
[57:40] it's still super manageable and and uh
[57:42] and okay and the this is the result we
[57:44] get from this
[57:46] um let's uh push this one away because
[57:48] we want to focus on that
[57:50] guy so we have these mountains there's
[57:53] some heavy erosion going on right you
[57:55] can see that
[57:56] we have um we have some some wind
[58:00] erosion or some type of erosion that
[58:01] started
[58:02] eroding one side but not the other
[58:04] indicating that there's there might be
[58:06] some winds going on or
[58:09] soil sliding down the hill as you can
[58:11] see by these streaks and such
[58:16] and something that you already mentioned
[58:20] jared is you know we can always go back
[58:22] to a node
[58:24] and then change an aspect about it and
[58:26] then
[58:27] generate a completely new heightmap from
[58:29] this so let's say
[58:30] i'm super happy with the result and
[58:32] everything works as
[58:33] i wanted to and now i'm going to work on
[58:36] pyro and let's say we need
[58:37] 15 of those right because we have 15 no
[58:41] sorry 16 slots
[58:42] right uh so let's say we need 15 of
[58:45] those okay so
[58:46] i can basically be like okay i'm going
[58:48] to take this um
[58:51] and simply you know
[58:54] change the seed a random seed so it will
[58:57] simply generate a new variation of the
[58:59] very first node
[59:01] but since that changed all the other
[59:03] notes will change as well
[59:05] and in the end as you can see now i'll
[59:08] get a completely different result
[59:11] by just changing a single value i can
[59:14] produce a completely
[59:15] new height map again not something
[59:18] specific to us
[59:19] this is very like by now this is
[59:22] standard in the entire uh games industry
[59:24] procedural materials
[59:25] um this is this is how
[59:29] most material artists work but we are
[59:31] applying this to height maps
[59:33] so now i can for instance change this
[59:35] from a basic noise to a billowy noise
[59:38] and it will again completely alter the
[59:40] look
[59:42] of this height map and give me an
[59:43] entirely different result i can also
[59:45] flatten it out if i want something
[59:47] flatter okay this is a little too
[59:48] extreme right
[59:50] but let's say i go down with the octaves
[59:54] and and restrict
[59:58] the range something healthier here
[1:00:01] because not all the mountains are using
[1:00:03] the entire range of our spectrum
[1:00:10] and there we go
[1:00:13] see just by adjusting two things quite
[1:00:15] quickly i can produce
[1:00:16] uh an entirely new result if i'm happy
[1:00:18] with this i'm exporting it to
[1:00:21] the editor which i can do
[1:00:27] validated on the planet
[1:00:34] oh i have actually replaced it so i'm
[1:00:36] going to
[1:00:37] get back to it there it is plop
[1:00:47] did i export it
[1:00:50] export again and of course it's
[1:00:53] important to remember that
[1:00:54] this is a hype map that's being designed
[1:00:56] for the terrain of pyro and not one that
[1:00:58] was designed for the
[1:00:59] terrain of microtech so uh the finished
[1:01:02] result you're gonna see here is
[1:01:03] not exactly uh the no this is yeah this
[1:01:06] is just for demonstration purposes right
[1:01:08] but you can see that parts of the height
[1:01:11] map are showing and other hearts are
[1:01:13] hidden because
[1:01:14] it's blending into all the other
[1:01:15] heightmaps and
[1:01:17] uh yeah as we already mentioned a couple
[1:01:19] of times all the biomes all the spruce
[1:01:21] trees here
[1:01:22] um i can for instance now
[1:01:26] take an obsidian area and
[1:01:29] paint it in here if i like to right and
[1:01:32] change the entire um biome and object
[1:01:35] scattering that we have
[1:01:37] on this specific area and yeah this is
[1:01:40] this is how we go about the creation of
[1:01:42] height maps basically these procedures
[1:01:44] these workflows going back and forth
[1:01:46] validating in substance validating in
[1:01:48] the editor
[1:01:49] uh checking if our um if our biomes are
[1:01:53] painted down correctly and if they
[1:01:55] if the if the data like these streaks
[1:01:57] here if it all picks up well if it's not
[1:01:59] too noisy
[1:02:00] making test drives on these right will
[1:02:02] people hate us or not
[1:02:05] so this is this is basically how how we
[1:02:08] go about these things
[1:02:09] yeah this is it and i think we're done
[1:02:12] jared right
[1:02:13] yeah we're done awesome any questions
[1:02:15] any closing
[1:02:16] no we're we're out of time you can stop
[1:02:18] your screen share okay cool
[1:02:22] i know that that's me that's that's two
[1:02:24] of me
[1:02:26] let's go back hi uh so yeah so patrick
[1:02:28] thank you so much for taking the time
[1:02:30] uh to be here on the show with us this
[1:02:32] week um
[1:02:34] uh as as usual you know uh with uh
[1:02:37] stress in live we always like to
[1:02:38] vacillate between the
[1:02:40] q a shows and the game dev shows where
[1:02:41] we showcase your process and i think
[1:02:43] i i really enjoyed it and i think
[1:02:45] looking from the chat the folks really
[1:02:47] enjoyed taking this look at
[1:02:48] you know just how how how something as
[1:02:51] seemingly simple
[1:02:52] as a height map is a little 2k texture
[1:02:55] file uh
[1:02:56] sits at the basis of a whole lot of what
[1:02:58] they see
[1:02:59] uh as the basis of every planet so
[1:03:01] that's very cool um
[1:03:02] as we usually do we are going to throw
[1:03:04] uh the raid to a star citizen streamer
[1:03:06] who's broadcasting right now
[1:03:08] uh i understand it is the dark law uh so
[1:03:11] if you see so if you're sitting here and
[1:03:12] you're watching
[1:03:13] uh live on twitch you should see a
[1:03:15] little raid indicator go up in the chat
[1:03:17] there
[1:03:17] go ahead and jump in there and when that
[1:03:20] starts tell them
[1:03:21] uh what what what should they tell for
[1:03:23] the dark law when they rate him patrick
[1:03:26] what does he do what's he up to i
[1:03:29] actually don't know the dark law very
[1:03:30] well
[1:03:31] i assume he's a he's a law enforcement
[1:03:34] person who operates at night ask him to
[1:03:37] do limbo or something like that i don't
[1:03:39] know
[1:03:40] i don't know i do know he's playing a
[1:03:42] 311 ptu today so you can check that out
[1:03:44] and uh just just tell them uh
[1:03:47] patrick says patrick says uh hello
[1:03:50] saying hi take care everybody see you
[1:03:53] next week
[1:03:54] have a nice weekend bye
[1:04:22] you

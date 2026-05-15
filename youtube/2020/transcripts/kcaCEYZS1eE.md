# Star Citizen Live: Painting Planets

**Video:** https://www.youtube.com/watch?v=kcaCEYZS1eE
**Date:** 2020-02-28
**Duration:** 1:02:15

## Transcript

[00:02] hi everybody welcome to another edition
[00:05] of star citizen live gamedev painting
[00:08] planets I'm your host Jared Huckaby and
[00:10] joining us on the show this week is
[00:12] senior environment artist from our
[00:14] Frankfort studio mr. Patrick Gladys
[00:16] Patrick how you doing all good man
[00:18] thanks for having you dude we we have a
[00:21] we noticed during our auditors we've got
[00:23] this little ASMR thing going you know
[00:25] she would just do this entire show in
[00:27] here somewhere if people if our
[00:32] communities into listening me that's me
[00:34] doing a saying that we'll save that for
[00:37] when Paul Jones and and Luke Presley do
[00:40] a show together so um so if you if
[00:44] you've never seen Star citizen live
[00:45] before it's our Friday broadcast we we
[00:48] have a couple different formats
[00:49] sometimes we do a big round table QA
[00:50] sometimes we do a game dev which is
[00:53] where we take and we take a period of
[00:55] time to sit with an artist or a designer
[00:57] or whomever and see a little bit of
[01:00] their craft a little bit of process that
[01:02] goes into their work on a daily basis
[01:04] and that's what we're doing here today
[01:06] so Patrick without further ado we're
[01:09] just gonna jump right into this you take
[01:12] the wheel
[01:12] I'm gonna jump in the passenger seat and
[01:13] play with the radio what are we doing
[01:15] today what we will do today is take a
[01:19] look at a couple planets check V for
[01:22] features we have talked about them in
[01:25] the past already also on this show when
[01:28] Michelle and Sebastian were on last time
[01:30] or some sums like a while back right but
[01:35] this time we're focusing more on the
[01:37] actual tools and the hands-on approach
[01:39] actually showing off what it is what is
[01:41] it like using the tools
[01:43] how fast are they how flexible can we
[01:46] change our content and make new planets
[01:48] if we like - sure well why don't you
[01:50] share your screen we'll get going
[01:52] alright cool screen one get rid of you
[01:57] Jarrett all right cool
[02:01] all right so um what we have here is
[02:04] basically damar but for all the people
[02:11] who know what they may looks like this
[02:13] is not really like the damar they wanted
[02:16] that people can play and go to right now
[02:19] since I've already changed the data
[02:23] that's that's basically driving how all
[02:28] this texture information looks like and
[02:32] we will go through all of that and
[02:34] explain what it what it is all about and
[02:36] how we modify these things and how its
[02:39] constructed so I hopefully by the end of
[02:42] the hour people will have a much better
[02:45] understanding understanding an idea of
[02:47] how we approached is on v4 first let's
[02:57] check out the color information of this
[03:00] planet all right so that we are now
[03:03] we're just looking at color this is the
[03:04] only thing that's really interesting to
[03:06] us right now
[03:08] and so what what is it different from v3
[03:12] to v4 one of the big big changes is the
[03:18] way we can't like our entire content is
[03:22] put together so what I mean by that is
[03:25] the color that you see from orbit the
[03:28] color that you see close up and then
[03:32] where are all our objects scattering
[03:35] groups and how are they laid out and
[03:37] then what about the ground materials and
[03:39] such and how how are they distributed
[03:42] right so all these different layers of
[03:45] content and how they are all constructed
[03:49] and put together has changed I think
[03:52] that's the that's the most drastic
[03:54] change when it comes from v3 to v4 but
[03:57] it is also the reason why why the
[04:01] process is so much faster because before
[04:04] all of these different things were
[04:07] basically individual files and every one
[04:10] everything was basically quite
[04:12] disconnected from one another
[04:15] but now with v4 the new approach is that
[04:19] we have base data that everything like
[04:26] basically two sets of data that we will
[04:28] also discuss in a bit that everything is
[04:31] based on so we take we take a very
[04:34] simple texture basically and have it
[04:38] drive everything that you see on the
[04:40] planet except for stuff like locations
[04:43] and outposts since they are not really
[04:45] belonging to the nature of the planet or
[04:48] the organic part of the planet your
[04:52] essence they're all map on all man-made
[04:53] right you know Pio eyes are added
[04:56] afterwards by exactly so if I jump back
[05:01] to the planet view here and let's maybe
[05:07] first check out the painting tools so I
[05:11] can select our painting tool here and
[05:13] the mode is set to surface and you can
[05:16] already see like a little highlight on
[05:17] the planet and that highlight basically
[05:21] tells me where I can apply color to so
[05:26] if I just now randomly choose for
[05:28] example white and increase the brush
[05:34] radius so I can just click into the
[05:36] planet once and you see that the color
[05:38] is applied
[05:39] now what's determining the area that
[05:43] you're affecting and obviously you're
[05:45] moving your mouse and it's selecting
[05:46] different areas we can see what areas
[05:48] you're selecting the blue but how is it
[05:50] determining what you're hitting what
[05:53] you're not hitting exactly so the thing
[05:55] I just talked about which is at that
[05:58] very simple texture that drives
[06:01] everything is basically what is being
[06:03] highlighted here and it's different
[06:05] portions of that texture we can take a
[06:08] look at it right now if you want to so
[06:11] but before I do that I can basically
[06:14] just go through and Stroke in here one
[06:18] more time so you can see that you know
[06:20] changes can be done quite easily and
[06:23] very fast but it's it's good to take a
[06:28] look at the text
[06:28] now it's now in a tool called substance
[06:31] designer where we generate most of our
[06:33] content when it comes to grant materials
[06:35] textures and so on it is entirely
[06:39] procedural so you see like there's these
[06:42] large chains of operations going on
[06:45] starting from noises and then we start
[06:47] modifying them and stuff like that
[06:50] without going into too much detail here
[06:52] but at some point when we start with a
[06:56] simple noise like this one which is a
[06:57] purlin noise we go all the way to the
[07:01] right where it basically shows the end
[07:03] result because the the entire graph is
[07:06] calculated from left to right right so
[07:08] the this part here is the result of it
[07:12] so we end up at something like this or
[07:14] rather something like this right and so
[07:18] what are we looking at here I have
[07:20] talked about one texture but we're
[07:21] clearly clearly seeing two things and
[07:26] what are these two if I visualize it
[07:31] like this so basically I just took that
[07:35] grayscale information from here and
[07:36] applied a little color to it to make it
[07:38] a little more obvious what this is all
[07:40] about what we're looking at is the
[07:42] temperature information of our planet
[07:45] and to further visualize that I can
[07:50] actually have a view on my sphere here
[07:54] so let's say this is our planet I'm
[07:58] trying to squeeze the windows that are
[07:59] usually among the two two screens onto
[08:01] one screen hey all right but as you can
[08:05] see here the texture if I if I chose the
[08:10] grayscale version of it right you can
[08:13] see that the dark values of the texture
[08:15] are at the top and bottom of the three
[08:18] which is basically our North and South
[08:21] Pole and around the equator also if I
[08:26] view this texture here you can see that
[08:29] here the top and the equator here this
[08:33] correlates right because it's mapped on
[08:36] the sphere right now so around the
[08:39] equator we have the brightest values
[08:41] which means the
[08:42] preacher there is greater than it is
[08:46] around the North or South Pole right so
[08:49] we have kind of a representation of what
[08:54] yeah what the temperature is like on our
[08:57] planet and also these deformations and
[08:58] such because you don't want it to be
[09:01] simple there are all kinds of things
[09:03] going on on a planet like mountains and
[09:05] oceans and all of these things can
[09:08] influence how the temperature can behave
[09:12] on the planet for example if you go up a
[09:14] mountain right you would expect the
[09:18] temperature to drop gradually as you're
[09:19] moving upwards so that was the top one
[09:24] right simple temperature let's look at
[09:27] the bottom one which is our humidity the
[09:32] humidity and the temperature are
[09:34] basically combined in the end and saved
[09:37] out as one texture but that one texture
[09:39] basically combines the data set this
[09:42] this these two textures so the the
[09:44] information of our temperature and
[09:46] humidity so I can also visualize that on
[09:49] our sphere here and you can see that the
[09:52] humidity isn't simply a gradient going
[09:55] from the North Pole to the equator and
[09:58] then it it is it has a lot more breakup
[10:02] to it there's a lot more variation going
[10:04] on the humidity is also usually
[10:09] influenced by things like the ocean and
[10:12] mountains and such we could also
[10:15] basically these textures are completely
[10:17] artists artists driven like we can
[10:20] create whatever we like if I decided to
[10:22] mmm let's say if I decided to swirl up
[10:28] that texture that would actually be my
[10:31] humidity so I am entirely free to do
[10:34] that
[10:34] like nothing stops me from doing that
[10:36] except for maybe our art director who
[10:38] would really dislike me for doing that
[10:42] so yeah but we we can do anything right
[10:46] so that there's no limits but we try to
[10:49] at least have it be based on some
[10:53] physical phenomena like some some phenom
[10:55] in weather and how mountains influence
[10:58] these two and as I already said my
[11:00] oceans and maybe wind currents and all
[11:04] of that stuff so we try to work in as
[11:06] much of that information into these two
[11:08] and the more precise it is the better
[11:10] but also we have to kind of watch out
[11:16] and look for specific shapes that are in
[11:21] there because if we go back to the
[11:25] editor and pick our painting tool again
[11:28] these shapes are precisely what the
[11:31] painting tool will start picking up on
[11:35] so if what if if there was no variety in
[11:40] this texture
[11:40] I couldn't get these interesting shapes
[11:43] that you see on the planet or moon right
[11:48] here so this texture gets combined and
[11:56] exported and then it looks a little
[11:58] funky it looks like this so but that
[12:01] that doesn't really that doesn't really
[12:03] matter in the end
[12:06] it's really the individual channels that
[12:08] the textures made of that matter to us
[12:10] so why why can I paint on the planet
[12:19] like this how how does the how are the
[12:22] textures combined and how can I paint on
[12:24] them so you see that the highlight is
[12:29] around the equator now and it's because
[12:31] around the equator I have a specific
[12:34] humidity value which is different from
[12:40] another spot on on the planet let's say
[12:43] oh that is actually a good one we have
[12:45] this brighter area and this darker area
[12:47] here right and I can totally if I hover
[12:49] above it you can clearly see that my
[12:52] highlight changes that means that the
[12:55] data underneath has changes is changing
[12:58] as well from this spot to that spot
[13:00] because of it if it was the same data
[13:02] this would all be white or dark or
[13:05] bright sand or dark sand and I can
[13:07] further visualize that
[13:09] by simply picking the planet and then
[13:14] showing you here is the humidity so for
[13:18] example here where we get brighter
[13:20] values it's very humid and then here in
[13:22] the darker areas it's very dry if I had
[13:26] to compare that to let's say earth where
[13:30] you have the same temperature let's look
[13:33] at the temperature again because you can
[13:35] you can totally see that we have mostly
[13:37] brighter values here in the temperature
[13:39] which means it's the there's a very
[13:43] similar temperature in this region but
[13:46] still I get a different look because the
[13:52] humidity differs so let's say it is hot
[13:55] and dry you would probably expect a
[13:58] desert right but if it was hot and very
[14:02] humid you would probably expect expect a
[14:06] jungle
[14:07] that's very lush and and the humidity
[14:09] would be super high if you entered the
[14:10] jungle so this is how we can control and
[14:13] have variety even though we are in the
[14:16] same region when it comes to the
[14:18] temperature right if I hover just around
[14:21] the equator you can see how that high
[14:23] light never reaches the pole because at
[14:28] the pole we have a different temperature
[14:30] and therefore I can paint this area
[14:33] individually from this area right
[14:36] because it's taking a it's taking a
[14:39] measurement between the temperature and
[14:41] the humidity exactly because both both
[14:45] datasets of temperature and humidity are
[14:47] working together at all times they are
[14:49] all they are being basically blended
[14:52] together and they work at the same time
[14:56] not not individually so you're using
[14:58] both at the same time when your paint
[15:00] what was that
[15:02] gradient square we were looking at
[15:03] earlier that gradient square if I find
[15:08] it on the planet here it's right around
[15:09] there yeah yeah it is it is basically
[15:12] just the same data that is spread over
[15:16] the entire planet if I just turn on
[15:19] humidity again it's basically just the
[15:22] entire data
[15:23] from from the dark values to the bright
[15:27] values from zero to 255 and it's
[15:31] basically just condensed into a square
[15:33] we are that's that's purely an artist
[15:36] kind of workflow that we came up with in
[15:40] order to depending on what we do save
[15:44] ourselves some time and work because if
[15:46] let's say I paint on this square you can
[15:52] see that the entire planet changes as
[15:54] well so if I wanted to save some time
[15:58] and be quicker in my workflow I can
[16:01] simply start filling out this entire
[16:03] range here in this square because it
[16:06] correlates to my entire planet so we can
[16:10] we can we can try that out right I still
[16:11] have my white color selected and I'm
[16:15] gonna tint this top left corner of of
[16:21] this square and now let's take a look at
[16:25] the temperature okay
[16:27] the temperature in the top-left corner
[16:29] seems to be cold right mm-hmm and now if
[16:33] I look at the humidity it is in that
[16:37] case cold as well so we have or low so
[16:40] it's not very humid and it's very cold
[16:44] so how does like what area on my planet
[16:48] describes very cold and dry areas if we
[16:55] take a look you can see that the area
[16:58] that describes this these two are
[17:02] actually my poles if I check the north
[17:04] pole and I've checked the South Pole
[17:05] there's even some more areas out here
[17:08] outside that also share this data so
[17:11] they automatically get that color
[17:13] applied right that I could do the same
[17:18] for let's say very hot and dry places so
[17:23] we would go down because it's hot and
[17:27] then dry would be not dry would also be
[17:30] here right yes we can already see that
[17:32] the highlight is showing the exact same
[17:35] spot that where it
[17:37] viewing here right so it doesn't matter
[17:41] if I hover my house hover my mouse over
[17:43] here or actually on this on the square
[17:46] because it's showing me the exact same
[17:47] data and spot so you know in the end I
[17:51] can just go in and start painting on
[17:54] this square do very very little more
[17:57] areas of modification very condensed in
[18:00] just this little spot but actually I'm
[18:03] influencing large portions of the entire
[18:05] planet and changing them right away that
[18:10] square it it doesn't you know it you
[18:13] don't have to be it's really just an
[18:16] artist workflow to speed things up we
[18:19] can for example go in here and define a
[18:22] couple biomes okay we have the snowy
[18:26] areas in here or maybe we have scourged
[18:30] whatever volcanic areas over here right
[18:33] I'm just visualizing right now with two
[18:35] colors and then that's how we basically
[18:37] block in the individual areas that we
[18:40] want as biomes right okay because it's
[18:43] the hottest and driest here and the
[18:45] coldest and driest here so that kind of
[18:47] makes sense if you lit know a little bit
[18:50] about weather conditions and temperature
[18:54] zones and biome distribution when it
[18:56] comes to planet Earth you know that
[18:58] around here somewhere in between the
[19:01] equator and the North Pole that which
[19:03] there would be our temperate zone so
[19:06] that's where most of Europe lies that's
[19:08] where you have to brought leave and
[19:10] needle-like pine tree forests and such
[19:12] right so I could already go in and kind
[19:15] of block that out and be like okay this
[19:17] is where I want these areas to be right
[19:19] and then maybe we're moving further up
[19:23] to a Tundra a kind of environment so I
[19:27] can start visualizing that of course
[19:29] does not final quality at all but we
[19:32] would first determine where do I want
[19:35] these individual areas to be on the
[19:38] planet and how do I want them to sit and
[19:41] use the data that is provided to me with
[19:46] the textures that I have actually built
[19:48] myself right
[19:49] so the
[19:50] the painting pass and these two textures
[19:54] they go together one determines how the
[19:58] other thing looks or can behave of
[20:02] course I can use the same data and do
[20:04] different kinds of paint passes right so
[20:07] technically and we do that on some of
[20:09] the moons but the players never notice
[20:11] because we give we give we can give them
[20:15] the same data but give them an entirely
[20:18] different paint path so they look look
[20:19] different and unrecognizable it's
[20:22] unrecognizable that they are actually
[20:23] using the same data so for example I can
[20:30] just go in here and be like okay around
[20:32] my poles I want a region where it's just
[20:36] just ice or something like that right
[20:39] and it transitions over all the way to
[20:41] my pine needle forests and then there
[20:44] come the broadleaf forests or something
[20:46] like that
[20:46] right so we can we can decide quite
[20:53] easily and quite swiftly where things go
[20:56] so far so good
[20:58] any questions Jarrod no I just you asked
[21:02] me you know those who know weather and
[21:04] stuff and I realized I live in Southern
[21:06] California my whole life I don't know
[21:07] anything about weather all right so it's
[21:11] so good so your your your color coding
[21:17] sections here yep how does that
[21:20] translate into what players see because
[21:23] obviously they don't see this it looks
[21:27] like Microsoft Paint color over the
[21:29] media right now right now it does
[21:31] because I'm I'm basically just or
[21:35] blocking in huge areas with different
[21:37] colors right but if I just reduce my
[21:42] brush radius right and then once I'm
[21:47] very low like once I'm happy with the
[21:49] entire layout of what I'm putting down
[21:52] here I can then do like a second detail
[21:55] pass of where things might go right so
[21:58] I'm again picking the snow or white
[22:02] again and I'm basically going in
[22:04] and working on transitions or how how
[22:09] does snow kind of blends in with all the
[22:13] other areas right so simply just by by
[22:17] clicking I can determine where these
[22:19] things should go and then if we go down
[22:24] now now now now now I can even go down
[22:27] to a ground level where this is dark now
[22:31] let me go to a spot where it's actually
[22:32] bright so I can go down to ground level
[22:39] maybe it let's show it here yeah
[22:42] go to all the way down to a ground level
[22:44] and then basically paint in quite
[22:47] detailed areas of of snow where it sits
[22:52] and how it blends into the entire rest
[22:54] right mm-hmm as simple as simple as that
[22:57] so that's actually we start off like
[23:03] that but everything that the players see
[23:06] on the planets right now and the entire
[23:08] color and color information is actually
[23:10] painted down like this by an artist it's
[23:13] just that if I went back to that spot
[23:17] again you know and I wanted to start
[23:21] doing my detail passes I can for example
[23:24] increase the smoothness here and then
[23:27] reduce the opacity of the brush kind of
[23:29] like you would know it from any other
[23:33] painting tool right and then I can start
[23:37] detailing these areas out or take like a
[23:40] contrast again and add a bit more detail
[23:46] and then you you can kind of see how it
[23:49] picks up on a lot of the information
[23:52] that is just that comes with the terrain
[23:54] and I'm basically filling that
[23:55] information with with color and that's
[23:58] basically how artists go in and work
[24:01] through the entire planet or that that's
[24:04] that simple square that I have shown you
[24:05] and until they get something like this
[24:10] right so someone actually went in and
[24:13] applied these darker darker areas of
[24:15] sand and brighter areas of sand
[24:18] but the important thing to note here is
[24:19] that even if you know I'm looking at
[24:24] this specific pit and this is a very
[24:26] like some some artists have to wrap
[24:29] their head around this before actually
[24:31] starting to construct planets because
[24:34] painting this area doesn't mean that I'm
[24:36] just painting this area so if I if I
[24:40] would just zoom out now you can kind of
[24:44] see that I'm actually affecting a huge
[24:48] portion of the planet just by painting
[24:50] that one pit I would change the entire
[24:54] area that's blue right now any any small
[25:00] my new modification that I do to the
[25:02] planet is represented everywhere
[25:06] elsewhere at this spot the humidity and
[25:11] temperature data is the same so if I now
[25:14] enable temperature again
[25:17] this is not very visible but there are
[25:20] maybe maybe it is visible on stream
[25:22] there's like very subtle grayscale
[25:25] differences here do you see that your
[25:27] yeah alright cool now let's look at the
[25:29] humidity again
[25:30] oh what a humidity is a bit more right
[25:32] so you can see that the pit here has
[25:34] different humidity values than those
[25:37] protrusions or these these these hills
[25:41] here all right so every single every
[25:47] single height information that we have
[25:51] on the planet that's basically covering
[25:53] the surface let's say the mountains and
[25:55] such hills or these mountains here they
[26:01] are all coming with the same set of data
[26:03] as the planet does and then we blend
[26:06] them together and that way which is
[26:08] which is super different from how how v3
[26:12] worked let me demonstrate
[26:14] so but people probably already noticed
[26:16] by playing that I can simply go in and
[26:21] let's pick some crazy color like this
[26:28] mmm-hmm let's find a good spot like
[26:31] maybe yeah like this right and now if i
[26:38] zoom out all the way from ground to
[26:46] orbit and can still see it you can still
[26:48] see it it's still like it still
[26:50] represents a pixel on your screen right
[26:52] it's still there and the cool thing
[26:54] about it is there's no blending
[26:57] happening between a planet texture and a
[27:00] close up ground texture which is which
[27:02] is fantastic because that way we could
[27:06] provide for details not just looking as
[27:10] if they would represent what's close up
[27:14] but they are actually what is there
[27:17] close up as well there's no blending
[27:19] happening in between this view and an
[27:24] orbit view it's the exact same data
[27:27] we're looking at there's no change
[27:28] happening when I when I fly fly out of
[27:30] the planet like this which was fantastic
[27:35] I'm really liking that green I don't
[27:37] know why would the green you you you
[27:42] touched on a little bit of elevation
[27:44] earlier a lot of folks in Cheddar asking
[27:47] how elevation what how elevation factors
[27:50] into any of this
[27:54] so elevation is not factored in by
[28:00] default but when I construct these two
[28:05] textures like the temperature and
[28:08] humidity right do you you see these
[28:11] smaller darker bits here right mm-hmm
[28:14] so in this in this live stream I
[28:16] actually wanted to focus on these two
[28:18] alone but we can also take a look at the
[28:22] height information of that planet right
[28:25] so now you have another representation
[28:28] as a texture where where the mountains
[28:33] are or where there's an increase in
[28:35] elevation and where it's where it's
[28:38] actually decrease decreased or like
[28:40] these dark
[28:41] values are lower the brighter values are
[28:43] higher right so what I could do is
[28:48] simply take that information give it a
[28:53] bit more contrast like this so I can
[28:55] actually work with it fully and now take
[29:00] the temperature and then tell this
[29:06] height information to be subtracted from
[29:12] my temperature maybe let's do it like
[29:16] this all right like this I could do that
[29:20] and then the elevation of the planet
[29:24] would be factored in to the temperature
[29:27] of the planet simply by me putting in
[29:30] that information from the height data
[29:32] that I get into the temperature data and
[29:34] now since I took the mountains and in
[29:37] the temperature I said wherever
[29:39] mountains are give me a darker value and
[29:42] a darker value means coal lower
[29:43] temperature so whenever you work up a
[29:47] huge you know higher altitude on the
[29:49] planet you would suddenly start
[29:51] transitioning from these these brighter
[29:53] values here over to the darker values
[29:55] until it gets really cold and then you
[29:58] know FX picks up on that and the wind
[30:00] picks up on that and the color
[30:02] information changes and the object
[30:04] presets that we apply change as well see
[30:07] this so you systemically change the
[30:10] temperature by just mixing two different
[30:14] textures yes because these two textures
[30:18] this one describes elevation this one
[30:21] describes temperature and if I mix them
[30:23] in mix them together using using certain
[30:28] math in that case it's simply
[30:30] subtracting that texture from that
[30:32] texture I get exactly what these people
[30:36] in the people in the chat asked for
[30:40] which is you know the height factored
[30:43] into the temperature of the planet which
[30:49] is cool
[30:50] so yeah any other questions or should I
[30:56] if yes I was watching I was mesmerizing
[31:00] right folks are asking what happened to
[31:04] the mountains on Hurston mountains on
[31:09] the Hurston oh yeah yeah so I mean this
[31:13] these painting tools are not the only
[31:16] thing we have changed with before and
[31:19] the fact that we are now applying our
[31:23] content very differently to the planets
[31:26] we had to adjust and align the content
[31:29] that we use on our planets which means
[31:30] the mountains the heights data and stuff
[31:33] like that
[31:33] it has it had to be all be changed in
[31:36] order to work fine with v4 and that's
[31:39] why you might see yeah you might see
[31:46] different mountains or maybe the
[31:48] elevation changed or maybe the look
[31:50] changed or something like that
[31:51] I mean it was a planet reworked after
[31:54] all we actually went through all the
[31:55] planets and reworked all of them and
[31:58] like including the moons right um also
[32:00] when whenever we talk internally of of
[32:02] planets we usually say we usually also
[32:04] mean the moons by it yeah I had learned
[32:07] that the hard way that when that
[32:09] internally you guys just refer to
[32:11] everything's planets yeah because it's a
[32:13] planet yeah and we just say planet to
[32:16] everything you're painting right now
[32:18] that this is the with the height map
[32:21] included I've notice that the oh the way
[32:24] it's selecting is drastically different
[32:26] than it was linking before actually it's
[32:29] not just it seems to be way more
[32:34] striations now because I whenever I
[32:39] change so I can increase the frustration
[32:41] yeah so if I change the brush radius I
[32:45] can cover huge areas at once right if I
[32:47] want snow to bear to be there everywhere
[32:50] and then leave these areas as you know
[32:53] just very barren deserts and but still
[32:56] super cold then I could do that but if I
[32:59] reduce my brush radius you can still see
[33:02] the highlight right but it's much
[33:04] dinner now so now I can go in and really
[33:06] detail out these places and that's what
[33:09] we do towards the end of the process
[33:13] because as you know I mean you have
[33:16] probably seen enough art processors
[33:17] Jarek to know that we usually go from
[33:20] big to small from rough to super
[33:24] detailed and that's just how all artists
[33:26] on the entire planet work because if
[33:31] anything that we do in regards to big
[33:34] changes if we're not happy with them
[33:37] then any type of detail we put into them
[33:39] will not work either right so as the
[33:42] base has to be established first before
[33:45] we dive into any type of detail and and
[33:48] start start tweaking that yeah you
[33:51] always start big will it down small it's
[33:54] like it's like sculpture or actually
[33:56] even applies to acting you know I did
[33:59] theater I did theater for three decades
[34:00] and you know they'll always tell you
[34:03] start big and let me let me bring you
[34:05] down because it's a it's a lot easier to
[34:08] bring to will something down than it is
[34:10] to try to build it back up yeah yeah for
[34:13] sure
[34:14] should we do like an experiment which
[34:17] would be very interesting to see so as
[34:23] long as it doesn't end with something in
[34:27] somebody's crotch yeah yeah I was afraid
[34:31] of that let's let's hope it doesn't
[34:32] happen but let's as we did before let's
[34:35] let's quickly block out something here
[34:37] right so I'm just gonna Josh Sherman are
[34:39] you here yeah huh nothing oh okay
[34:43] longtime viewers will know all right all
[34:50] right as we did before I'm just gonna
[34:51] apply a couple different greens here
[34:54] we're like temperate regions would be
[34:58] maybe like a darker green just to vary
[35:01] it up a little like this
[35:10] all right ah the opacity isn't up I see
[35:14] okay so we could do something like this
[35:17] and then for for these areas up here
[35:22] maybe we will also take something darker
[35:25] and just apply a couple details just to
[35:27] have something showing I don't know
[35:31] maybe exposed rocks or cliffs or areas
[35:34] of whatever it could be yeah because
[35:36] people volcanic regions or you know here
[35:40] like and burnt forest for example right
[35:42] could do that as well and then we leave
[35:45] a little bit of desert and maybe a bit
[35:52] more of that these green green zones
[35:55] like this all right let's say that's
[36:01] that's a bit of the the planet
[36:04] information that we have just just to
[36:06] for the sake of making the experiment
[36:09] right and now imagine that this is
[36:13] basically our planet and we're quite
[36:15] happy with it even though this is just
[36:17] you know blocked in information and it
[36:21] would be interesting to see how the
[36:23] entire planet changes simply based on
[36:27] changes that we do to these two textures
[36:32] right I will move move this one away so
[36:38] we can kind of look at these so let's
[36:41] first look at the temperature what could
[36:49] we do to the temperature oh yeah of
[36:52] course
[36:52] right now it is quite earth-like we have
[36:55] a North Pole and then it gets kind of
[36:58] hot around the equator and in between we
[37:00] have the forests right but what if we
[37:02] simply flip the entire thing or I should
[37:08] totally flip it here actually so now I
[37:11] have flipped the temperature on the
[37:14] entire planet we have the the poles
[37:18] which are hot and the equator which is
[37:20] cold
[37:22] so now I can just export that texture
[37:26] let me give a letter from Chery
[37:31] alright and now you can see what
[37:33] happened
[37:36] so without in just within a second and
[37:41] just a simple texture tweak I was able
[37:44] to completely flip the entire
[37:46] information that I have on the planet
[37:48] and what's really cool is it is not just
[37:52] a color information it is everything
[37:54] that we have talked about a couple of
[37:57] minutes ago so the grant materials the
[38:02] the object presets and such everything
[38:05] has rearranged automatically using the
[38:07] new data so even if we are in fact
[38:11] entirely done with a planet and we have
[38:14] distributed all these rocks and these
[38:17] plates and then we decided what ground
[38:19] materials go and where and painted all
[38:23] of these out and we did our detail
[38:26] passes and yeah well the biomes are
[38:28] blocked in any way right so even if we
[38:30] have put in all of that stuff already
[38:32] and we want to change something about
[38:34] the planet then we can just do it as
[38:37] quickly as I have just shown just plug
[38:40] in the node do the moderate modification
[38:42] that you want to do re export that
[38:44] texture and you're good for the fun of
[38:52] it let's change let's say oh maybe
[38:59] something directional instead something
[39:04] like this right but we will use it as a
[39:08] humidity so if I view it on the sphere
[39:11] you can see what happens on the sphere
[39:13] right I will simply override the
[39:17] humidity of our planet now entirely and
[39:21] export that BAM
[39:30] by one single texture change
[39:34] I have heavily influenced the look of
[39:38] the entire planet if I don't like it if
[39:41] I'm like oh it's a little weird that it
[39:43] you know my North Pole is is around the
[39:45] equator no problem I'll just go in and
[39:48] revert the change that I have done
[39:51] re-export the texture done this is how
[39:55] quick we can make changes in the end and
[39:57] we don't have to worry about any of the
[39:59] content that is applied to the planet
[40:01] close up as I have already said it so if
[40:04] you had forests in a section then you
[40:05] moved the temperate area the forest
[40:08] would move should we try yeah we will
[40:15] have to reload the planet this is where
[40:19] it can crash so let's hope that doesn't
[40:22] happen we will wait for like 10 seconds
[40:28] [Music]
[40:35] [Music]
[40:39] yeah well good and we didn't crash
[40:42] fantastic using a built from a while
[40:46] back as people know we're developing the
[40:50] game but we're also developing the tech
[40:51] at the same time which can be sometimes
[40:57] quite crashy for us because when the
[41:00] engineers you know build new things new
[41:03] new tech it can be buggy at first and
[41:05] then we simply have to live with the
[41:07] fact that sometimes our builds might
[41:09] crash so let's do let's do a forest you
[41:14] said right yeah okay let's do the forest
[41:17] in where should we do the forest let's
[41:21] maybe paint down some specific color for
[41:26] it like this this brown just to have
[41:31] okay one second
[41:35] oh no that's not the forest
[41:37] that's not the color this is the color
[41:41] okay and if I come close you will start
[41:47] seeing the forest appear and it's dark
[41:53] but it's no problem because I have the
[41:56] power of the Sun okay cool so right now
[42:00] there's the actually dis savanna from
[42:02] Hurston se which we have which we have
[42:05] applied on to this brown spot that we
[42:08] have just painted so so literally you
[42:11] just use when you pick the color brown
[42:14] yep you set a brush size yep you select
[42:19] it again again select an area based on
[42:23] temperature and humidity and then said I
[42:25] want this to be forest yep and it just
[42:28] planted all these trees everywhere yeah
[42:31] let's do this again but to close up this
[42:36] time so people can actually see what's
[42:37] happening so I'm basically just applying
[42:41] a white color here and then I'm swapping
[42:46] over to let's say obsidian set a from
[42:52] Microtech and I just changed that I said
[42:57] I want snow and our dark rocks on that
[42:59] snow and that's my new that's my new
[43:04] biome this is how quickly we can change
[43:05] things with v4 of course there's this is
[43:10] just one flat color right now I could go
[43:13] in and really detail this out and happen
[43:16] they give it different shades of like I
[43:19] don't want to say grey now but I have to
[43:21] say gray yeah yeah yeah yeah thanks
[43:29] let's do this I'm gonna get fired for
[43:34] this you know it wasn't my idea it was
[43:37] from the chat oh alright it's yellow
[43:41] snow I went in see a lot of yellow let's
[43:47] say an elephant walked by and yeah
[43:49] digestive problems or something
[43:52] yeah but we can totally do these changes
[43:55] in detail these areas out even more so
[43:57] if I wanted to enhance this area and
[44:04] let's say do cacti and I want it on the
[44:09] transition between between this savanna
[44:14] land and the dark shrubs I can totally
[44:16] have cacti in between and it will first
[44:18] go from the savanna areas over to the
[44:22] cacti and now the now the grass is
[44:24] spawning on on the snow which looks odd
[44:26] right but just for demonstration
[44:28] purposes no we've got high desert here
[44:31] and occasionally it snows in the high
[44:33] desert here so I've seen snow on
[44:34] cactuses before oh nice
[44:36] we have in California so yeah that's
[44:42] that's that's how quick we can change
[44:44] things and the thing is now I think by
[44:52] now people get a bit of a better idea of
[44:54] how fast v4 really is and how how much
[44:57] we can do but we said we wanted to put
[45:00] down some like a forest and then you
[45:03] know now we actually put down two things
[45:05] so we have these dark rocks and our
[45:07] savanna right okay and now let's zoom
[45:12] out and that's modify this so it occurs
[45:16] in a different area so I'm gonna go back
[45:18] and really like change my textures again
[45:24] wait temperature goes here humidity goes
[45:26] here and now I'm just updating that
[45:30] texture again that didn't work for some
[45:35] reason let's do it again ah now it works
[45:39] yeah this thing needs to pop up in order
[45:41] for it to work sometimes it gets stuck
[45:43] all right so now you can see that it
[45:45] changed right it just jumped it just
[45:50] jumped a little because we changed the
[45:51] data so if I go in here you can see that
[45:56] this is not matching anymore and that's
[46:01] exactly the reason why we have to reload
[46:02] the planet because the object scattering
[46:04] behaves
[46:05] differently than simply applying colors
[46:08] or I will have to just reload that
[46:10] planet and then we will see the dark
[46:15] rocks in these snowy areas here and the
[46:17] forest around them it takes it takes
[46:23] like ten seconds to reload of planets
[46:25] yeah yeah yeah she's reliving a planet
[46:28] okay now I can fly back in and do the
[46:34] dirt you can totally see we have this is
[46:38] wait a second
[46:40] maybe here I will explain what went what
[46:44] goes wrong here because we are in an
[46:53] area where the ocean starts to the ocean
[46:58] level starts to creep in and I'll
[47:00] explain what happens precisely but you
[47:02] can see that we have the dark rock and
[47:04] then the savanna right next to it right
[47:06] so this updated properly so why does
[47:09] this why do we get the coral spawning in
[47:12] here like why does that happen like this
[47:15] is weird right I didn't paint this down
[47:17] I didn't I didn't want this to happen
[47:19] originally but what the objects can
[47:26] basically read out and what they're also
[47:30] driven by is what on what kind of
[47:33] elevation on the planet they are sitting
[47:35] on and we can basically turn objects on
[47:38] and off based on what elevation level
[47:41] they are on so the reason why you're
[47:44] starting to see coral in this in this
[47:48] area is because we are actually but
[47:51] below ocean level we are very close to
[47:56] being at ocean level the thing is
[47:58] because this planet is based on de Mar
[48:01] de Mer doesn't have an ocean right yeah
[48:04] that's why we that's why we can simply
[48:06] hover above the ground and and and
[48:08] wonder but wonder about why coral
[48:10] appears but it's actually good that it
[48:12] happened because like then I can explain
[48:14] that if this was let's say Microtech
[48:17] this is how we can
[48:18] that for example on a hill there should
[48:21] be or on higher elevation there should
[48:24] be these spruce tree a pine tree forests
[48:27] that are completely snowed over right
[48:29] mm-hm and then as you move down and
[48:32] elevation towards the frozen ocean that
[48:34] you find on Microtech we can for example
[48:36] say okay add ocean level zero or minus
[48:40] one we want and that's and meters right
[48:43] we want ice blocks to spawn or you know
[48:48] shifting ice sheets on the ocean and
[48:50] that way we can detail out the ocean if
[48:52] the ocean wasn't frozen we can simply
[48:55] turn off the frozen ocean feature and
[48:58] then you can actually see a different
[49:01] types of assets spawning underneath the
[49:03] ocean level how how hard is it they give
[49:06] de marrón ocean we can we can activate
[49:14] it but then the shader has to be applied
[49:17] and such and it might not look great so
[49:21] yeah now just just adding it there's no
[49:23] problem I don't think that we can do it
[49:27] in ten minutes though fair enough
[49:29] and make and make look good yeah takes
[49:31] longer than ten minutes to make an ocean
[49:33] yeah but generally it can be if the
[49:36] shading is as clear and if it's all good
[49:39] and if it's all set up then it's that's
[49:40] very easy especially if we can reuse for
[49:43] example let's say we had default
[49:45] earth-like water ocean set up then I
[49:48] could simply just turn it on slap slap
[49:50] something on it and that's it but right
[49:54] now I'm not sure how how the ocean
[49:57] shading is set up in this build because
[49:59] this is a 3/8 build and that's when the
[50:03] frozen oceans came in so I don't want to
[50:07] just for not risking any crashes because
[50:10] we did changes to the ocean in this
[50:12] build I don't want to try but yeah let's
[50:18] go over to this area here can reuse the
[50:22] same assets if you have questions shoot
[50:25] it's no problem let's go back here oh
[50:29] this is
[50:32] let's take a for example just for the
[50:36] sake of doing it again he asked for
[50:37] questions and right off the bat why so
[50:39] many rocks ah no not that question why
[50:51] so many rocks Patrick wait wait wait why
[50:54] do you what do you know a rock did you
[50:56] did you have a pet rock when you were
[50:58] younger I loved rocks the more the
[51:01] better so the rock situation yeah in v3
[51:08] one of our big problems was that we
[51:11] couldn't detail out environments as
[51:14] nicely as we could and the more changes
[51:17] we added the more and more we progressed
[51:19] with the tech the more budget we we we
[51:24] could free up and the tech change it
[51:26] changed so we were able to put like
[51:29] simply scatter more stuff than before
[51:30] that's why people saw such an increase
[51:33] of detail in the last two years when it
[51:36] comes to planets in general so that's
[51:42] when also the rock density on the
[51:44] planets started increasing right and
[51:47] then at some point it simply became a
[51:51] problem because it started affecting
[51:52] travursel mm-hmm for example something
[51:55] like damar is fine you have some rocks
[51:57] here and there but sometimes it's very
[52:01] hard to predict where and how much of
[52:05] these rocks will spawn sits something
[52:07] like - it happens procedurally right but
[52:11] there's there's still some things that
[52:13] we need to figure out it's a discussion
[52:14] point it's something that we will
[52:15] definitely have meetings about and and
[52:19] figure figure out how we can tackle the
[52:20] problem because there's it is of course
[52:25] a problem for design but then art
[52:27] direction might want dense areas and
[52:30] stuff like that so there's there's a
[52:31] conflict there it's simply something
[52:32] that we will need to figure out as all
[52:34] the other stuff that we have talked
[52:36] about over the over the last years and
[52:39] try to find solutions and and we we
[52:42] definitely hear the people we read what
[52:44] everyone
[52:45] um we reread what everyone is posting on
[52:50] Reddit and and spectrum and stuff like
[52:52] that so we totally hear you guys and we
[52:56] will definitely find some solution for
[52:57] it but it's it's too early to tell but
[53:00] we are thinking about it that's that
[53:02] that for sure what was the the black
[53:10] when you were laying black it was a very
[53:12] dark color almost looked like the
[53:14] surface was burned a rock you mean I
[53:20] thought the whole the whole texture the
[53:21] planet was was was very dark it was
[53:23] almost black oh yeah I just painted it
[53:27] yeah painted it black yeah we're talking
[53:28] they don't want to interrupt you and ask
[53:29] you what it was and not no problem so I
[53:33] basically just just did the same thing
[53:35] as we as we did with the snow I painted
[53:40] some darker values down on the planet
[53:42] swapped to my object presets applied
[53:46] some darker plates to it and here we go
[53:49] like dark spots on the planet it could
[53:52] be anything really petrified roots let's
[53:55] say here we go again
[54:01] I'm not only changing this spot right
[54:04] here right so we are changing everything
[54:07] that turned dark in this area on the
[54:09] entire planet so it's never you're never
[54:13] just editing one area that you're
[54:15] looking at that's that's that's
[54:17] something that people constantly have to
[54:19] remind themselves of do you coming at
[54:25] this from like a photoshop standpoint do
[54:27] you have the ability to mask off a
[54:28] section like if you want to change
[54:31] everything on a planet except for one
[54:33] specific area like I do not want to
[54:35] change this area in terms of painting or
[54:40] texture it's a painting paying for well
[54:45] I'm thinking you have the ability to
[54:47] mask off so the painting tool will pick
[54:52] up on whatever the data is saying right
[54:55] if you
[54:58] let's say that just because like what
[55:01] are what we are viewing right now let's
[55:03] say this area right here I want to paint
[55:06] it but I don't want this area to be
[55:08] affected on the left here mm-hmm
[55:10] then in the tool right now there is no
[55:13] option to simply mask that area and only
[55:15] paint that area because it is sharing
[55:17] the same data right so it has to be the
[55:21] same because it's it's the same it's the
[55:23] same climate zone here the temperature
[55:25] and humidity what rise on the left as it
[55:27] is on the right so it has to be the same
[55:29] has to be the same color and biome and
[55:32] objects and and ground textures and
[55:34] stuff like that but I can simply go in
[55:38] find that spot on my texture here and
[55:44] basically assign new values to this
[55:48] region then I have let's say on this
[55:50] region right and then I can paint them
[55:53] paint them uniquely and individually
[55:57] from one another like that I was asking
[56:00] because I I was wondering if it's if
[56:05] it's possible to write your name on the
[56:07] planet like it I give you a if you had a
[56:11] master you just mask out Patrick but
[56:14] that's how would you like remember when
[56:17] I asked you if artists sign their work
[56:19] oh wow is there a way for you to
[56:24] literally sign that's not what I said
[56:28] I said Patrick
[56:41] all right okay
[56:50] this is a bit crazy but as I said
[56:53] nothing prevents us from doing anything
[56:56] so let's do this and swap our
[56:59] temperature texture with that these
[57:05] changes will go to damar live by the way
[57:07] oh yeah there we go
[57:10] the Jared biome but you ended up in the
[57:16] desert region Jared I'm sorry me too me
[57:18] too
[57:18] because it's too hot you know it's too
[57:21] hot yes yep see now we're starting to
[57:26] get the idea but we can also just flip
[57:30] it as we did before and have the snow be
[57:33] in our names because now it's cold right
[57:36] so it all you know it makes perfect
[57:38] sense in that regard and now all the all
[57:41] the other data because I gave our names
[57:44] this gradient bevel here around the edge
[57:47] as an effect right mm-hmm
[57:49] so now the temperate forests empty all
[57:52] the other regions are basically all
[57:53] focusing around around our names because
[57:59] it's going from cold to warm in a much
[58:04] shorter distance instead of just going
[58:06] from North Pole to equator we have
[58:09] basically forced the temperature to to
[58:11] change in a much yeah in a in a much
[58:14] smaller area I'll give you I'll make you
[58:20] a deal Patrick yep oh good I'll give you
[58:23] I'll give you five dollars American
[58:26] paint yellow snow if you take this image
[58:30] and drop it in a review folder for and
[58:38] at your next sprint check in just like
[58:40] this is what I worked on in
[58:44] okay let's talk about that off string
[58:47] shoot me sure and maybe at a zero all
[58:52] right yeah I think we have time for like
[58:55] a last question or something or actually
[58:59] we're pretty much done awesome we are
[59:02] done you can go ahead and shut down the
[59:06] the screen share if you want Patrick
[59:09] thank you so much for taking the time
[59:11] here on your Friday at the end of your
[59:14] week to join us here for our game dev
[59:17] painting planets if you haven't seen the
[59:20] IFC segments from last week check that
[59:24] out it was about how it was part two of
[59:27] our core long moon series about the work
[59:30] that Patrick and Pascal have been doing
[59:32] to create three moons with but with only
[59:36] two people in the span of a quarter this
[59:39] hopefully this shows you a little bit
[59:40] about how they're able to achieve that
[59:42] those tasks at that at that at that
[59:45] speed for weeks for weeks for weeks for
[59:48] weeks and moons that's pretty good oh
[59:51] and for people like like what about the
[59:54] concept like the concept was done before
[59:56] it's from concept to completion it
[59:59] didn't include the concept it was from
[1:00:01] concept we yeah we have seen that all
[1:00:05] read it as well but it happens we only
[1:00:12] started January when I came back from
[1:00:14] holidays that's when we started on the
[1:00:15] moons from on our end but yeah there was
[1:00:17] a concept thing than before as you said
[1:00:19] and you've you've made your you've made
[1:00:21] your go/no-go and now it's in the hands
[1:00:22] of system designers and VFX anything to
[1:00:26] put on the finishing touches
[1:00:27] yeah thank you a is checking it out
[1:00:29] seeing if there's any bugs you know
[1:00:30] anything that we might change maybe our
[1:00:32] direction is gonna have some feedback
[1:00:34] but not much and then hopefully yeah
[1:00:37] people get will get it and and play
[1:00:41] around with it and have fun
[1:00:42] yeah experiencing new new moons and
[1:00:44] without with all the new actor status
[1:00:46] stuff they'll have to contend with the
[1:00:48] temperature the temperature variations
[1:00:50] so I can all but already spoil that much
[1:00:53] the moons are very cold
[1:00:56] very cool I don't think that was much of
[1:00:59] a spoiler Patrick all right guys thank
[1:01:02] you so much if for any reason you're at
[1:01:06] PAX East we got Tyler and Molly are out
[1:01:08] there and now they've got they've got
[1:01:10] some giveaways if you track them down on
[1:01:12] the show floor be sure you spot them
[1:01:15] three eight to went live if you haven't
[1:01:18] checked that out be sure you check that
[1:01:19] out the kerrick's currently available
[1:01:21] for all four if you're in a Parador
[1:01:23] subscriber for instance you've got
[1:01:24] you've got access to the to the
[1:01:26] character the next seven days and no
[1:01:29] additional fee as a member as a perk of
[1:01:31] the imperatore testify program so
[1:01:33] imperative subscribers can look forward
[1:01:35] to that that's active right now until
[1:01:37] March 8th so yeah so I'm Jared that's
[1:01:43] Patrick that was JJ over there push the
[1:01:45] buttons we'll see you next week
[1:01:46] everybody take care see you bye
[1:01:56] you

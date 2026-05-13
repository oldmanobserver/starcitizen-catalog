# Star Citizen Live: Let There Be Light

**Video:** https://www.youtube.com/watch?v=7MkLV8Dklws
**Date:** 2020-09-04
**Duration:** 59:11

## Transcript

[00:03] uh hi everybody
[00:04] welcome to another episode of star
[00:06] citizen live game dev
[00:08] let there be light i'm your host jared
[00:10] huckabee and if you've never seen star
[00:12] citizen live before
[00:14] that's where we take about an hour out
[00:16] of our fridays at the end of our week
[00:18] and we goof off sometimes we answer some
[00:21] questions
[00:21] sometimes we review some process uh
[00:24] sometimes we sit down with
[00:25] one of our developers and we let we let
[00:28] them
[00:29] take us on a guided tour of their work
[00:31] and when that happens we call those
[00:32] episodes
[00:33] our game dev episodes and that's what
[00:35] we're doing this week joining us on the
[00:36] show this week
[00:37] is an esteemed guest from our lighting
[00:39] team mr chris campbell chris
[00:41] how you doing hey good thanks jared how
[00:44] are you this morning
[00:45] i'm all right uh thank you for agreeing
[00:48] to take the time
[00:49] out of your of every busy schedule as
[00:51] we're heading into the
[00:53] the the the final furlough of alpha
[00:55] three
[00:56] one here uh i know or three three three
[00:59] one one
[01:00] i did it three one takes me back yeah do
[01:03] i look like i know what year it is
[01:05] it's the time is 2018 we're pretty
[01:08] uh as we're approached three eleven uh
[01:11] what are we doing today you are you are
[01:13] of course a uh uh
[01:14] what is it lead lighting yeah i'm
[01:16] grounded
[01:17] artist for the persistent universe all
[01:20] right and what are we what are we doing
[01:21] today
[01:22] uh so i just thought we would do like a
[01:25] quick kind of
[01:26] re-light ish of a surface outpost on
[01:29] hurston okay and and
[01:32] and the purpose of this is to is to kind
[01:34] of show us a little bit about your
[01:36] process what goes into it uh
[01:39] you you know we've had a lot of talks
[01:40] offline uh lighting is something
[01:42] is one of the lighting and sound are two
[01:45] of my
[01:46] little uh pet projects with with game
[01:48] development because i i think there's a
[01:49] lot of misconceptions out there about
[01:52] what goes into it uh
[01:54] what makes good or effective lighting
[01:56] and stuff like that so um
[01:57] so we're gonna explore some of that
[01:58] process today uh
[02:00] if you want you're the driver on the
[02:02] passenger today so you can start your
[02:04] screen share
[02:05] and we'll just jump right into it okay
[02:10] share that there all right so yeah i
[02:12] mean i'll try and keep uh
[02:14] keep some of the boring technicalities
[02:16] out of it and focus on kind of
[02:17] making something cool and uh yeah just
[02:20] going through kind of my process of
[02:22] exploring a space and uh and kind of
[02:26] figuring out something to do with it so
[02:29] so yeah i've basically got this uh
[02:31] this little habitation outpost which
[02:34] i've put on hurston
[02:36] um i've got access to the the sun time
[02:38] of day so i can quickly and easily
[02:40] change the time of day which is going to
[02:42] be useful um but of course everyone
[02:44] loves a good sunset so we can
[02:46] we can start off there i think um does
[02:49] it ever make you just feel powerful just
[02:50] being able to grab the sun like that and
[02:52] just be like oh
[02:53] i wish i could do that in real life just
[02:55] make it sunset all day long
[02:59] right so yeah uh just to start with this
[03:02] is this is kind of
[03:03] what what everyone should already know
[03:06] from
[03:06] from the insides of these um these
[03:08] habitation units
[03:10] uh and so what i've done is i've done
[03:11] like a kind of very rough quick
[03:14] redressing pass mostly just because
[03:18] uh without it you know the lighting's
[03:20] very functional it's all kind of
[03:21] built into the um the structure
[03:25] uh and while there's there's a lot you
[03:27] can do when you're kind of
[03:28] building a space like this you can kind
[03:30] of design the lighting to fit in
[03:32] nice and neatly but since we're going to
[03:35] go a little bit crazy
[03:36] having a bit more freedom and a little
[03:38] bit more uh
[03:39] places and locations where we can kind
[03:41] of throw lights and
[03:43] cast weird shadows and stuff like that
[03:44] um yeah
[03:46] this is a this is going to be a good
[03:47] starting point all right so it's a
[03:49] oh then you you just turn on a layer or
[03:52] whatever so
[03:53] this you started with the base model uh
[03:56] rayari
[03:57] hab and then before the stream here
[03:59] you've spent some time redressing this
[04:02] yes yeah exactly i it's a maybe a little
[04:04] bit of cheating but i don't think anyone
[04:06] wants to watch me do
[04:07] horrible environment art dressing work
[04:10] uh i'll leave that to the
[04:11] the pros in that department that's going
[04:13] to say has this been validated by the
[04:14] environment
[04:15] yeah no they know you're going rogue
[04:17] apologies to ian
[04:20] for destroying his happier okay
[04:25] uh cool so um i'll basically i'll turn
[04:27] off
[04:28] what's already there um and we'll kind
[04:31] of kick it off
[04:32] from there so that's the the old lights
[04:35] now gone
[04:36] uh what i will do is i'll keep all the
[04:37] cube maps because i think again that's
[04:39] kind of
[04:41] i mean it's a it's a very critical part
[04:43] of the job is kind of laying out cube
[04:44] maps for the best ambient lighting
[04:46] but uh no one wants to watch me do that
[04:48] for an hour as well so
[04:50] i'll use the existing cube maps well
[04:52] let's go ahead and
[04:53] talk a little bit about what a cube map
[04:55] is though because the q map
[04:56] is incredibly important to lighting in
[04:59] the lumberyard engine
[05:00] so just introduce us to the concept of
[05:03] qmaps
[05:04] yeah sure so the cube map is um or the
[05:07] environment probe is kind of the the
[05:10] absolute fundamental
[05:11] part of our lighting kind of workflow
[05:15] so all without it you know we've just
[05:17] got basically a pitch black interior
[05:20] um it's pitch black because it's all
[05:23] interior and hidden away using visit
[05:25] areas and stuff which basically means
[05:26] that you start from
[05:27] absolutely zero lighting uh and what a
[05:30] an environment probe does
[05:31] is you kind of place a um
[05:35] kind of like an area of effect in this
[05:37] case these are all kind of cubes
[05:39] and with a little bit of softness on
[05:40] them and
[05:42] and what they do is they they capture
[05:44] what's called a cube map which is just
[05:46] like a a texture which
[05:48] is captured from like uh imagine that
[05:50] each one of these has like a little
[05:51] camera pointed in all six directions of
[05:53] the cube
[05:54] it takes a screenshot and then
[05:56] reprojects that ambient light
[05:58] into all four directions so the more
[06:01] that you have
[06:02] theoretically the more detail you can
[06:04] get in your ambient lighting
[06:06] um these are generally approximations
[06:10] uh so i mean for example like on this
[06:12] side
[06:13] um of of this uh bed over here
[06:16] it's actually receiving the light from
[06:17] this cube map
[06:19] um so if i turn that one off then
[06:22] it gets more lighting from this cube map
[06:24] and and vice versa so
[06:28] yeah i don't know i'm sorry chat i i
[06:29] want to say that i i see your puns
[06:32] and they are sustaining me keep them
[06:34] going
[06:35] um so that that's what a cube map is but
[06:38] why do we need cube maps why is this the
[06:43] is is why are cube maps necessary
[06:47] well without them and unfortunately
[06:50] still
[06:50] still not having any kind of rage racing
[06:53] or something like that
[06:54] um you need ambient lighting in the game
[06:57] uh you know a long time ago uh you would
[07:00] just have kind of a
[07:01] consistent ambient value which would be
[07:03] like some kind of gray or blue or
[07:05] taken from the sky color so some kind of
[07:08] orange
[07:09] and that would just be projected
[07:10] throughout the entire world
[07:12] in kind of a uniform way but cube maps
[07:15] allow us to uh kind of
[07:19] account for um occlusion based on
[07:22] like the window for example uh or the
[07:24] ceiling or the floor which makes things
[07:26] then appear darker
[07:28] which gives you more um uh depth of
[07:31] contrast between like the interior which
[07:33] is nice and dark here versus the
[07:34] exterior
[07:35] uh out there okay yeah
[07:39] and the the brighter it gets outside i
[07:41] i'm not sure how easily some of this
[07:43] will pick up on stream
[07:44] but the brighter gets on the outside uh
[07:46] the cube maps will recapture
[07:48] uh and then you'll get like even more
[07:50] kind of light spilling in
[07:52] so if we don't have any lights at all uh
[07:55] you get already this kind of nice
[07:57] bass ambient lighting um
[08:00] look yeah and
[08:04] if you want to actually see the cube
[08:05] maps i can turn on like this little
[08:07] uh debug mode and i'll turn off the
[08:10] screen space reflections
[08:12] so this is basically like all of the cur
[08:14] all of the materials have just turned
[08:15] into like a
[08:16] a glossy kind of like a chrome mirror
[08:19] for example
[08:20] and this shows you what each of the cube
[08:22] maps kind of reflection maps are picking
[08:24] up
[08:25] so obviously towards the the windows
[08:27] you're getting a lot of this
[08:28] exterior lighting and that's getting uh
[08:31] reprojected in
[08:32] into the the room so when i turn it back
[08:34] on uh you can see like these highlights
[08:36] coming in
[08:37] uh on the the more reflective surfaces
[08:40] and this is without any additional
[08:41] lighting whatsoever this is just the
[08:42] base kind of ambience
[08:45] nice all right yeah so that's that's
[08:48] where we'll start
[08:49] so we know like the so we know one of
[08:52] the
[08:52] the current hotness and video cards
[08:54] anything is ray tracing
[08:56] yeah and stuff like that but not
[08:57] everybody will have a card that's
[09:00] capable of doing ray tracing
[09:02] exactly i mean it's it's an extremely
[09:05] intensive
[09:07] graphically heavy process
[09:10] and i think it's it's still a ways out
[09:14] for
[09:14] a lot of game development um but
[09:18] obviously something that we we want to
[09:20] explore
[09:21] at some point for sure only we will have
[09:24] a couple unique challenges we'll have to
[09:25] figure out how it works with a 360
[09:28] degree
[09:29] fully realized planet and exactly all
[09:32] that stuff so we
[09:33] will have some challenges maybe some
[09:34] other folks may not but it's definitely
[09:36] something that we're
[09:37] we intend to pursue yeah yeah exactly
[09:40] but in the meantime environment probes
[09:43] in the meantime
[09:44] we've got cube maps and environment
[09:45] probes and uh that's
[09:48] you know that's that's good enough for
[09:49] like kind of 95 percent of cases
[09:53] cool so yeah so i apologize for
[09:56] derailing you
[09:57] you no that's that's totally fine um
[10:00] derail away
[10:02] uh okay so i find the topic very
[10:04] illuminating
[10:07] i totally stole that from chat
[10:10] yeah so i mean uh i i don't know i don't
[10:14] know if
[10:14] it's probably just me but i already
[10:15] really like uh looking at scenes where
[10:17] there are
[10:18] there's no lighting and it's basically
[10:20] just simulations of the
[10:22] um the exterior lighting kind of
[10:24] bouncing around in an interior i always
[10:26] think that looks really cool you get
[10:27] lots of nice
[10:28] reflections and stuff like that so uh
[10:30] you'll have to forgive me if i i might
[10:32] noodle around a bit and just kind of
[10:34] look at certain angles
[10:36] um but that's also kind of part of the
[10:37] lighting process is
[10:39] like finding good kind of i guess what
[10:41] we would call like screenshot
[10:43] moments where you find like a nice kind
[10:45] of uh
[10:46] a nice kind of framing um with like some
[10:48] nice dark spots some nice lighting spots
[10:51] uh and then we can kind of build from
[10:53] there so like uh yeah like here for
[10:55] example
[10:56] you get some nice spill through here
[10:57] it's getting a little bit dark over
[10:58] there
[10:59] and so maybe we'll we can start adding
[11:01] some light back there and just see what
[11:03] happens
[11:05] yeah by all means you do you alrighty
[11:07] you just tell us what you're doing
[11:09] all right i'm gonna add a light
[11:12] there we go and we're done so
[11:15] that's uh that's lighting for you
[11:18] uh so uh obviously
[11:22] just adding in a light by default just
[11:23] gives me a nice kind of white
[11:26] very boring light by itself
[11:29] but obviously you want to see what
[11:30] you're doing so um
[11:32] i mean a lot of people may notice where
[11:34] some of these props come from
[11:37] uh when i was building this uh this
[11:38] dressing i was kind of thinking it's
[11:40] maybe
[11:41] some guy who works in lowerville uh and
[11:44] he's kind of a little bit fed up of the
[11:45] hurstons and he's maybe stolen some
[11:47] stuff
[11:48] uh from lorville and he's brought it out
[11:49] to his little drug stash
[11:52] he stole some pictures of he stole
[11:54] pictures of the people that he hates and
[11:55] hung them on as well he broke in there
[11:57] and then he wants to you know
[11:58] graffiti them up a little bit all right
[12:00] again apologies to the environment art
[12:02] team
[12:03] no no we're just learning more about you
[12:04] than anything else yeah right
[12:07] all right so i'm gonna start with uh
[12:10] maybe
[12:10] like these these props already have uh
[12:12] some light fixtures built into them
[12:15] um so i think what could be cool to
[12:18] start with is just like some little kind
[12:20] of dim
[12:22] i don't know lighting or information
[12:23] over here uh just to
[12:25] make it a little bit less flat i'm gonna
[12:27] turn this guy on
[12:28] let's start with a nice dim
[12:31] kind of intensity i'm going to
[12:36] link the light to the picture frame
[12:38] which then uh
[12:39] so each uh each asset or material can
[12:41] have like a glow
[12:42] assigned to it and that can sometimes be
[12:44] controlled by a light source once we
[12:46] link it to it
[12:50] and then let's make this a projector
[12:52] light
[12:54] and we'll give it just a simple
[12:57] kind of projection
[13:02] widen it up a little bit and we're off
[13:04] to
[13:05] our start
[13:06] [Music]
[13:09] so that's kind of cool
[13:13] it's just a little bit uh horror movie
[13:15] desk like kind of the the pictures
[13:18] following you along the wall uh let's go
[13:21] with something a little bit
[13:23] warmer in color maybe
[13:27] i think this guy's a little bit sick so
[13:28] we'll use a lot of like kind of greenish
[13:30] greenish yellows and stuff like that
[13:34] reduce the radius because we're always
[13:36] thinking about performance
[13:39] let's expand it a little bit let's make
[13:41] it a little bit brighter
[13:46] you mentioned performance very casually
[13:48] there
[13:49] but it's there's always got to be this
[13:52] ever looming
[13:53] shadow this presence over everything you
[13:55] do where
[13:57] yeah it's you have to resist the urge to
[14:00] go
[14:01] hog wild or crazy but at the same time
[14:04] one of the tenants of star citizen is
[14:06] always pushing
[14:08] the envelope as they say you know as far
[14:10] as we can how do you balance that
[14:12] exactly i mean yeah as you say we're
[14:15] we're certainly not
[14:16] shying away from expensive uh lighting
[14:19] setups and
[14:20] and you know kind of pushing the
[14:21] boundaries there um
[14:23] but at the same time um yeah obviously
[14:27] we wanna we want people to be able to
[14:29] run the game uh at a somewhat decent
[14:31] frame rate
[14:32] uh so when we're when we're building our
[14:35] lighting
[14:35] uh for environments we always just try
[14:37] and keep it in the back of our mind like
[14:39] some rough guidelines of
[14:40] how many lights we can use uh how many
[14:43] shadow casting lights we can use
[14:45] and how many lights are overlapping in
[14:47] the scene at any given moment
[14:49] and those are just kind of things that
[14:51] we um we you feel out
[14:53] as you as you work on the project a
[14:54] little bit more
[14:56] um so i've got some some numbers in my
[14:59] head
[15:00] um and uh yeah it's just
[15:04] it's more a habit at this point so i
[15:06] just kind of
[15:07] try and stick with it i don't want to
[15:10] you know
[15:10] reveal too much of the magician's
[15:12] secrets but yeah
[15:14] you you mention it shadow casting lights
[15:17] uh
[15:17] the existing of a shadow casting light
[15:20] implies the existence of lights that
[15:22] don't cast
[15:23] shadows yes exactly
[15:26] um yeah so for example i mean
[15:29] you know especially for demonstration
[15:31] purposes we want it to look as good as
[15:32] possible so i'm turning on shadows quite
[15:34] often
[15:35] um but probably probably i guess like 80
[15:39] of the lights that we're placing
[15:41] generally don't cast shadows and
[15:42] uh the the basic kind of thought process
[15:45] there is that if it's
[15:47] if it's some kind of uh ambient light or
[15:49] it's just kind of acting as a fill for
[15:51] the environment
[15:52] uh you don't always need to have shadows
[15:54] turned on so like for example
[15:56] um let's say that this was quite bright
[16:00] let's make it a little bit brighter
[16:03] um and this is again like kind of one of
[16:05] those things where when you don't have
[16:06] ray tracing
[16:08] um and the kind of methods that offline
[16:10] renderers use you have to kind of
[16:11] fake a lot of things um so in this
[16:14] example like there's no bounce light
[16:16] coming from this uh
[16:17] this light here hitting the floor and
[16:19] then like shining back up
[16:21] you know if i turn it off and on there's
[16:23] no difference in this uh
[16:25] this part of the frame right so what
[16:27] we'll do sometimes is we'll add like a
[16:29] kind of a bounce light
[16:30] uh or a fill kind of light
[16:34] and in this case i'll just extend the
[16:36] bulb a little bit
[16:39] so it's a bit softer i'm kind of
[16:41] thinking that i want the light source to
[16:43] be
[16:43] about as big as the um
[16:47] the cone of this light hitting this uh
[16:49] this pile of dirty laundry on the floor
[16:52] so i'll bring that down to about there
[16:54] and then
[16:56] lighting is is pretty much all about
[16:58] ratios so it's all about
[17:00] how bright is your key light and then
[17:01] how bright are the subsequent bounce and
[17:03] fill lights and that kind of stuff to
[17:05] create
[17:05] contrast uh in your scene so right now
[17:07] this this fill light is just way too
[17:09] bright
[17:10] so i'd bring that way down and even more
[17:13] than that
[17:15] probably even more than that and so now
[17:18] it's very subtle
[17:19] but it just adds a little bit of that
[17:21] kind of greenish uh light kind of
[17:23] bouncing up into the ceiling
[17:25] and uh and against these these areas
[17:28] uh and this light because it's so subtle
[17:30] in the grand scheme of things it doesn't
[17:32] need shadow casting to go back to your
[17:34] initial point
[17:36] so key lights shadow casting fill lights
[17:39] no shadow casting
[17:40] [Music]
[17:42] it it's always a hard balance because
[17:45] yeah
[17:46] in an ideal situation of course every
[17:50] single light would be shadow casting and
[17:52] and ray tracing would be on everything
[17:55] and
[17:56] you know you obviously you you want you
[17:59] want to push these things as far as
[18:00] possible but
[18:01] the performance performance is and
[18:03] optimization is such an important
[18:05] consideration
[18:06] these things you always you take you
[18:08] take it to the point of looking awesome
[18:10] and then
[18:10] you often have to scale it back uh you
[18:13] know by
[18:14] degrees to get to the point where it's
[18:15] performative
[18:17] yeah yeah exactly i mean obviously we
[18:20] we try and replicate the real world as
[18:22] much as possible and
[18:24] you know in the real life in the real
[18:25] world i'm not sure i've i've heard of a
[18:27] light source that doesn't cast shadows
[18:29] um that would be interesting um
[18:33] so that's that's obviously the goal but
[18:36] then the
[18:36] the realities of kind of computer
[18:38] graphics uh tends to get in the way of
[18:40] that sometimes
[18:44] all right so
[18:47] uh yeah i'm i'm basically just like kind
[18:49] of putting in
[18:51] whatever i feel is going to kind of help
[18:54] the scene
[18:55] so one thing that i like to always try
[18:57] and add is a little bit of movement
[18:58] in the lighting um
[19:02] that also it helps especially in our
[19:05] engine like
[19:06] a lot of other engines use baked
[19:09] uh lighting which then tends to be very
[19:11] static and you know once it's baked
[19:12] that's kind of how it looks
[19:14] um but our engine is and always has been
[19:17] like purely dynamic
[19:19] uh the only thing that is baked would be
[19:20] kind of these cube maps uh and even then
[19:22] we
[19:23] we update and refresh those every now
[19:25] and then um
[19:26] so it's always nice to
[19:29] to make the most out of that uh those
[19:32] dynamic lights by
[19:33] you know making the move around or
[19:36] adding a little bit of uh
[19:37] extra animation and stuff like that to
[19:40] kind of help it out
[19:41] right you're talking about the uh the
[19:43] recently updated uh runtime
[19:45] probes yes yeah exactly so all of these
[19:47] probes are
[19:48] are set to be runtime so i'm not
[19:50] manually rebaking them
[19:52] but i do sometimes will i'll just select
[19:54] them all and then kind of hit refresh to
[19:56] force them to update
[19:57] in case they're not updating fast enough
[19:59] for my tastes
[20:03] so i'm going to create another weight
[20:06] uh from the chat uh what is the exposure
[20:09] control
[20:10] in a scene if you brighten it up a few
[20:12] stops uh does it change the scene much
[20:15] do we control exposure um we
[20:19] uh from it on an artist's perspective we
[20:21] don't control the exposure itself
[20:23] directly
[20:24] uh we kind of we control the exposure
[20:26] through
[20:27] how bright we make our lighting
[20:30] and in the background we have this kind
[20:32] of auto exposure system
[20:34] uh which you know has like a maximum
[20:36] brightness range and a darkness
[20:38] uh range and then it kind of you know
[20:40] tries to strike a balance in between
[20:42] so i've got these buttons up here which
[20:43] will let me kind of force the exposure
[20:45] to a certain
[20:46] um almost kind of like an f-stop but
[20:48] it's actually it's an ev value and an
[20:50] exposure value
[20:51] so like this for example i've got it
[20:53] locked to an ev of 10
[20:55] which works fine kind of outside
[20:59] and then you know once you get inside
[21:01] the the darker areas start getting
[21:02] really really dark
[21:03] uh almost pitch black and so without it
[21:06] um the auto exposure can kind of kick in
[21:08] and then lift those areas
[21:10] uh and that's kind of how you get like
[21:13] kind of blown out
[21:15] um and then um
[21:18] you know when you're outside looking in
[21:20] then you'd get kind of like
[21:22] darker looking interiors from a distance
[21:26] until you kind of enter them so that's
[21:27] kind of how we work with our dynamic
[21:29] range
[21:30] but we don't actually have any
[21:32] individual control like say if i wanted
[21:34] this room specifically to be a certain
[21:37] exposure brightness i i don't have that
[21:39] control
[21:41] which is fine because we have so many
[21:44] locations in our game
[21:45] having that extra level of control just
[21:47] means more time tweaking
[21:49] it more more opportunities for bugs to
[21:51] appear that kind of stuff
[21:55] i know star citizen and lumberyard
[21:58] support uh hdr
[22:01] how does that how does that affect your
[22:03] work
[22:05] um like uh hdr
[22:08] monitors or yeah i like your like high
[22:10] dynamic range monitors and stuff does
[22:12] that
[22:12] does that do that play a factor in how
[22:16] you light a scene
[22:17] um not so much actually i uh the
[22:20] the hdr um system is kind of like a it's
[22:24] a back end
[22:25] kind of a graphics uh system which will
[22:28] um
[22:28] i mean i can't i don't know the tactical
[22:30] so you'd have to ask someone like ali
[22:32] yeah um but uh basically it's all kind
[22:34] of uh
[22:35] behind the scenes so it takes whatever
[22:37] we've lit and then it
[22:38] you know pushes things in certain in
[22:40] certain directions to uh to work for hdr
[22:49] so i mean another kind of thing that i
[22:51] do
[22:52] when i am lighting a scene is
[22:55] uh i mean one of the kind of things that
[22:57] um that ian really likes as
[22:59] our environment art director um is he
[23:02] likes
[23:02] lots of like kind of low angle glancing
[23:06] lights um and this this comes from you
[23:09] know a lot of the art direction of our
[23:10] game comes from
[23:12] roger deakins and uh um
[23:15] uh james cameron uh you know aliens and
[23:18] that kind of stuff uh kind of 80s
[23:20] 90s sci-fi movies
[23:23] and you know it's in cinematics and
[23:25] movies you've always got
[23:27] very low lights you've always got lots
[23:28] of like specular highlights and stuff
[23:30] like that
[23:31] and so sometimes when i'm i'm looking to
[23:33] start lighting a scene i'll just kind of
[23:35] place a light
[23:37] and just kind of look around for again
[23:40] kind of looking for those moments where
[23:42] i can see like
[23:43] you know like oh maybe i really like how
[23:45] the light pings off this uh this locker
[23:46] here
[23:47] and gives me a nice hot spot down there
[23:49] and then when i find a spot where i like
[23:52] the light
[23:53] then i'll try and find a way to motivate
[23:55] it either by adding a light fixture
[23:57] there
[23:57] or you know something glowing or some
[24:00] reason for the light to be there
[24:02] because generally we we want to minimize
[24:04] how many lights just exist in the world
[24:06] but don't actually have a source right i
[24:09] was i was actually going to be my next
[24:10] question
[24:11] uh we started this by start working with
[24:14] one of the lights that were already
[24:16] there in the scene
[24:17] with the light that was uh embedded at
[24:19] the top of the picture frame
[24:20] but yeah as you work and as you go
[24:23] through
[24:24] my next question was how many times do
[24:26] you have to
[24:28] do do you have to go back to the
[24:30] environment artist or the prop
[24:31] artists and ask for a light here or
[24:33] there so that so that you can
[24:35] motivate your uh design decisions
[24:39] yeah that that's uh that's usually
[24:40] something that we try and do
[24:42] um as early in the process as possible
[24:44] so like the environment our team will
[24:45] will block
[24:46] out a location um and then we'll we'll
[24:49] come in and set up our cube maps and all
[24:51] the kind of
[24:51] technical basics um and at the same time
[24:54] try and think about where we want our
[24:56] key lights to come from and
[24:58] if we need to request any changes to the
[24:59] geometry or
[25:01] or the layout to accompany that um then
[25:04] that's that's usually the best time to
[25:05] do it
[25:06] um because uh later on when art starts
[25:09] getting final it's uh
[25:11] it gets a little a little tight to
[25:12] request these kind of changes
[25:14] right so i kind of like where this uh
[25:18] this light is here um i'm going to
[25:22] give it a light fixture uh and i'm just
[25:25] going to fly down
[25:26] to i kind of got a an asset zoo
[25:29] under the planet of all of the lighting
[25:31] fixtures that we tend to use
[25:33] in the game um this actually exists
[25:36] under the planets in the in the
[25:37] precision universe too guys
[25:39] if you oh yeah you can find it if
[25:42] sometimes if you
[25:43] fall through the planet at the right
[25:44] place you can find our acid zoos
[25:47] so this is a guy i like to use often
[25:51] so i'll basically just i i'm kidding
[25:54] about that don't don't tell ian i said
[25:55] that
[25:56] yeah this absolutely does not exist in
[25:58] the in the game
[25:59] i'd be in a lot of trouble i get an
[26:01] email from me and did you did you tell
[26:03] people we left lights under the planet
[26:09] here we go and now i've got it kind of
[26:11] just roughly rotated
[26:14] and then i'm gonna
[26:18] there we go that's not to say sometimes
[26:22] there's not something left under the
[26:24] planet an accident that has happened
[26:26] that does happen well you know it does
[26:28] happen
[26:30] completely unintentionally where they
[26:32] shouldn't spawn yeah
[26:34] that happens in almost every video game
[26:36] you just find a
[26:37] random asset somewhere where it's not
[26:38] supposed to be and it's like oops
[26:40] yeah but that's sometimes that's part of
[26:42] the fun is finding something that
[26:43] shouldn't be there
[26:44] [Music]
[26:50] so uh so yeah i mean one other thing
[26:54] like why i'm in this uh this kind of
[26:55] debug view
[26:57] um as a lighting artist you're often
[26:59] working in extremely dark
[27:00] locations and you know if you're trying
[27:02] to it would be like in real life trying
[27:04] to like put a light source
[27:06] while you're staring directly at it and
[27:07] figuring out where it goes against the
[27:09] wall
[27:09] uh so sometimes i just turn on this um
[27:12] this debug that just uh removes all
[27:14] lighting information and just shows me
[27:16] the
[27:16] the albedo textures and then i can see
[27:18] where i want to actually place my my
[27:19] light source
[27:21] do you know what albedo means
[27:24] oh that's uh you're putting me on the
[27:26] spot there i mean i i know roughly what
[27:29] i don't know what the the origin of the
[27:30] word is i assume it's really latin or
[27:32] something all right
[27:33] i've asked this question on three
[27:34] different shows where it's come up like
[27:36] this and nobody's had the answer
[27:38] so it's just a curiosity i know but i'm
[27:41] not going to tell you
[27:42] okay right i mean it's uh i mean the
[27:45] albedo itself is like the
[27:47] um it's like an index for how much light
[27:50] a as a material reflects
[27:54] uh from its surface all right there you
[27:56] go
[27:58] but the word itself i don't know
[28:01] alrighty
[28:02] so we've got this guy and again like uh
[28:04] it's it's very dark back up in the
[28:05] corners and you'd expect
[28:07] some level of bounce i think having this
[28:09] hit down here so i'm gonna go ahead and
[28:11] just add a
[28:13] a simple kind of uh bounce light and see
[28:16] see where we go
[28:17] with that and a lot of lighting uh just
[28:20] ends up being
[28:22] quite a bit of like trial and error and
[28:23] just figuring stuff out
[28:25] the more you do it then you kind of get
[28:28] a feeling
[28:28] for what is more likely to work than not
[28:32] um but there's there's still a lot of
[28:34] kind of exploration
[28:36] that goes into it so there we go so now
[28:38] we've got like some nice kind of
[28:39] highlights up here
[28:41] filling out the room a little bit more
[28:43] without it it's
[28:44] it's a little bit too contrasty
[28:49] then uh yeah it's always good good idea
[28:51] to remember to like refresh the probes
[28:53] because they will
[28:54] the more light you add the more light
[28:56] gets picked up by the probes and then
[28:57] once the probes get recalculated the
[28:59] scene gets brighter
[29:01] and then maybe that's too bright and
[29:02] then you you have to kind of balance the
[29:04] lighting back and forth
[29:05] that's a lot of balancing acts but it
[29:07] actually looks kind of cool from this uh
[29:09] this side as well
[29:10] um earlier in the show you said you had
[29:13] some numbers in your head
[29:15] uh we were talking about performance uh
[29:18] is there anything you could you can
[29:19] share the questions that was coming from
[29:20] the chat is
[29:21] was asking if you had a percentage
[29:23] quotient that you that you that you aim
[29:26] for when doing something like this
[29:29] sure uh i mean in terms of uh lights
[29:32] that we have on screen our general
[29:36] rule of thumb is to keep it around
[29:39] well not around but under like 280
[29:42] lights
[29:43] on screen at any given moment and you
[29:46] may
[29:46] think that that's like a lot and how
[29:48] would you ever get to that kind of
[29:49] number
[29:50] um but i mean especially in a sci-fi
[29:53] game almost
[29:54] all light sources are man-made light
[29:56] sources
[29:58] and you've got spaceships which all have
[30:00] lights
[30:01] built into them and you've got players
[30:02] running around with their flashlights
[30:04] and all of these kind of things add up
[30:05] to that that total
[30:08] so we actually we hit that limit
[30:10] frequently
[30:11] and uh and we hit it hard
[30:16] so i'm gonna counteract the blue from
[30:19] this light i'm just gonna make this one
[30:21] a warmer color instead
[30:28] if i was coming in here i'd want my my
[30:30] three identical
[30:31] jumpsuits to uh to be the main focus
[30:35] here
[30:37] so i'll just angle it a little bit more
[30:39] towards on the uh the suits themselves
[30:41] and when you said a 180 lights it was
[30:44] 180 right
[30:45] let's just say uh 200 200 200 so you
[30:47] said 208 lights
[30:48] that's on screen at any one time so
[30:50] that's not even like in a scene it's
[30:52] just
[30:53] wherever exactly this person can look in
[30:55] this camera frame so like there could be
[30:57] another 280 lights behind me but
[31:00] as long as it's only in the in the frame
[31:03] and that's kind of good
[31:04] um so yeah i mean some
[31:08] some environments like big city
[31:10] locations and stuff
[31:11] you know the total number of lights in
[31:13] that location could easily exceed
[31:16] like a thousand or two thousand um
[31:19] lights that we actually end up placing
[31:20] and then we we use as many tricks as we
[31:23] can to kind of keep that number down
[31:25] per frame um yeah
[31:32] we got those guys
[31:37] all right cool uh just as i'm just going
[31:39] to offer a correction to some
[31:41] things i'm saying in chat rtx was not
[31:44] answered as
[31:44] no we do not have retracing in right now
[31:48] uh it is something that we want to
[31:50] investigate and explore
[31:52] in the future so yeah there
[31:55] there was not a no to ray tracing as i'm
[31:58] seeing some people in chat
[32:00] uh regurgitate it's just
[32:03] on the list and there are other
[32:04] priorities ahead of it that's all
[32:07] exactly i mean again i don't want to
[32:10] i don't want to step on ali's shoes too
[32:12] much here but um
[32:14] you know before we even start talking
[32:16] about ray tracing we have to get the gen
[32:17] 12 renderer
[32:19] um up and running and that's kind of the
[32:20] main priority i think for the graphics
[32:22] team
[32:25] just like all things the game
[32:26] development priorities he can't
[32:28] fortunately we can't work on everything
[32:30] all at the same time
[32:32] exactly i'm going to try and find
[32:34] something else to use here
[32:36] [Music]
[32:37] thinking i'm thinking of something for
[32:40] his desk so i want like a
[32:42] i know like a desk light i guess
[32:46] so let's see if we got something in here
[32:53] jeez um i'm just gonna
[32:57] i'm gonna improvise a little bit i'm
[32:59] sure there's some props artists that's
[33:00] like
[33:02] yeah i've made 300 different light
[33:04] fixtures yeah exactly
[33:07] um yeah but if they don't tell us that
[33:09] they made it then
[33:11] then i don't know it exists
[33:13] [Music]
[33:16] okay he's looking kind of bright in here
[33:18] that's
[33:19] that's a bit of a worry let's not use
[33:22] him
[33:24] um
[33:25] [Music]
[33:29] where do we keep the well this kind of
[33:31] looks like a desk light let's use that
[33:36] but yeah we we certainly have a a lot of
[33:39] uh
[33:39] props in this game it can be very
[33:42] daunting trying to look through them
[33:44] for something oops
[33:48] i'm gonna put this in here there we go
[33:53] i'm just going to create a new light
[33:59] [Music]
[34:00] put it up here link it
[34:06] that linked let me see no
[34:14] select oh there it is okay
[34:19] all right same process and
[34:23] add a texture let's use something a
[34:26] little bit different now
[34:28] let's go with this one
[34:44] and of course it's slightly offset which
[34:46] makes my
[34:47] my life a little bit harder so now i
[34:48] have to manually kind of
[34:50] drag it into place
[34:54] so about all about finding the right
[34:56] camera angle to
[34:57] move something five centimeters
[35:04] all right that's that there let's
[35:07] lighten it up let's turn on the shadows
[35:13] link the light to the actual um mesh
[35:16] itself and then i can like drag them
[35:18] around together
[35:20] and find a decent kind of position for
[35:22] it
[35:24] we've had some questions about the uh
[35:26] aspect ratio you're working in
[35:28] this looks like what 21.9 uh
[35:31] yeah something like that it's um it's an
[35:34] ultra wide
[35:35] uh asus predator
[35:39] you're not getting paid don't do that
[35:43] uh i'll i'll take my check now asus
[35:47] uh is that just is there an advantage
[35:49] for your workflow to work in a
[35:51] ultra wide or is it just something you
[35:53] like um
[35:54] initially i like when i first got it it
[35:56] took a little bit of time to kind of get
[35:58] used to
[35:59] having such like a wide screen because i
[36:01] like having more vertical space as well
[36:02] like especially when you start
[36:04] having like all these properties to
[36:05] adjust um you can never have enough
[36:07] vertical space
[36:09] but the more that i've worked with it
[36:11] definitely
[36:12] um it's absolutely awesome for having
[36:15] just like a massive
[36:16] viewport that you can work with um and
[36:19] at the same time like
[36:21] uh you know the more cinematic you want
[36:23] to get obviously the wider
[36:25] the screen and then it it just makes it
[36:28] really easy to like get those kind of
[36:29] cinematic angles
[36:30] uh and and wide kind of letterbox uh
[36:33] moments
[36:34] um so that's good but definitely what
[36:37] helps more is a second monitor which uh
[36:39] is not being shared at the moment where
[36:41] i've got like it's just toolbars and uh
[36:44] and other kind of tool windows
[36:48] would be impossible without a second
[36:50] monitor for sure
[36:54] okay every time you go back to this
[36:56] section i just
[36:58] think about how we should open up like
[36:59] the like a lamps plus
[37:02] store in reverse that would be good
[37:05] it's a chain we have here in the states
[37:07] a story that just sells nothing but
[37:09] lights
[37:10] i'd be done with that
[37:17] at least they did in the 80s and early
[37:20] 90s i don't know if they're still around
[37:21] anymore
[37:22] yeah hey lamps plus if you're still
[37:25] around where's my check
[37:32] so i'm gonna make this it's like
[37:35] basically
[37:36] coming out of this this guy
[37:39] this would uh this could be a good
[37:42] excuse to actually use one of our planar
[37:44] lights
[37:46] so we do have um
[37:49] slash area lights uh in the engine
[37:53] um they're more expensive than normal
[37:55] lights so we can't use too many of them
[37:57] um they're also they don't cast area
[38:00] shadows
[38:01] which is a a bit of a limitation so
[38:04] we try to only use them in in areas
[38:07] where
[38:08] it would be really noticeable if the
[38:09] specular highlight wasn't the shape of
[38:12] the
[38:12] the light fixture itself
[38:16] so i'll try and see if it if it makes
[38:19] sense for this spot here
[38:21] i'm going to turn off the shadows
[38:23] because you can see you start getting
[38:24] like some really weird
[38:25] artifacts
[38:28] so let's turn that guy off
[38:33] that's kind of cool because now the the
[38:35] reflection kind of matches up with um
[38:38] with the light source itself yeah
[38:42] i spent 30 seconds trying to come up
[38:44] with a joke about
[38:46] the light being playing and i i didn't
[38:48] [ __ ] do it
[38:49] you can make it nice and boring a boring
[38:52] white light
[38:53] i'm just off i'm off today
[38:56] and chat with you yet chad wasn't there
[38:59] to help me
[39:03] all right so i think by itself this
[39:05] light's not
[39:06] not quite doing it for me um
[39:09] so you can see like what i what i'm kind
[39:11] of looking for here is again
[39:13] always trying to like pick out certain
[39:14] materials uh
[39:16] and i'm getting like a little bit of
[39:18] light on the tops of these of this uh
[39:20] kind of leather chair but i just want to
[39:22] add another light
[39:24] a little bit higher up kind of angled a
[39:25] little bit more down on this guy
[39:29] that's gonna that's gonna give me what i
[39:31] want
[39:32] and i'll try and position it so that i
[39:34] don't see like
[39:36] like an extra specular highlight
[39:39] [Music]
[39:41] and in this case i can add a little bit
[39:43] of shadows as well
[39:48] yeah there we go now if someone was
[39:51] sitting there
[39:52] they would look pretty cool
[39:56] um all righty what else we're going to
[39:58] do
[40:02] 20 minutes left wow this is uh
[40:07] not going as fast well maybe it just
[40:10] took a lot longer when i was setting
[40:11] this up initially
[40:13] um no that's okay it's one of the
[40:15] reality is every time we do this
[40:16] every time we do one of these shows it's
[40:18] work does not happen
[40:20] on an hour by hour basis there's very
[40:23] few things in game development you can
[40:24] complete
[40:26] uh in an hour nice and tidy in an hour
[40:29] but it i can do like maybe one of those
[40:31] cooking shows and here's one i prepared
[40:32] earlier kind of moments
[40:38] but uh i think that maybe maybe that's
[40:40] kind of cool and then we'll we can spend
[40:41] a bit of time
[40:42] looking at like a night time i'll do
[40:44] some some character lighting
[40:46] on this guy here um as i said he's very
[40:50] untrustworthy of people
[40:51] coming by his uh his little shack so
[40:53] he's prepared
[40:54] and got a pistol as well i know the
[40:57] other thing i really i was proud of this
[40:59] he like he stole some of the transit
[41:00] signs from louisville
[41:02] and brought them back to his place i'm
[41:05] gonna get a letter from the environment
[41:07] art team
[41:11] yeah there's a lot of things here that
[41:12] should not be
[41:14] in the same location all right so i'm
[41:16] just gonna turn on the
[41:17] the stuff that i had done kind of last
[41:19] time and i'll just run through
[41:20] a little bit of what i was looking at so
[41:24] again like kind of finding areas um
[41:27] in the location where there's like some
[41:29] interesting props or
[41:31] opportunities to add a little bit of
[41:32] kind of life
[41:34] um so i thought having some like broken
[41:37] broken lights hanging over by
[41:38] his t-shirts would be kind of cool um i
[41:41] get a lot of
[41:42] inspiration from um erica gagnon
[41:45] who's the the art director from uh deus
[41:48] ex of the new
[41:49] deus ex games and um we like to kind of
[41:52] do some kind of like light sculptures uh
[41:55] in a similar kind of way that he's uh
[41:57] that he's concepted and and that's in
[41:59] those games
[42:01] and it kind of matches the the hurston
[42:03] style like we took a lot of uh
[42:05] the loreville cbd art style
[42:08] um took a bit of inspiration from from
[42:11] those concepts as well so
[42:13] i thought that that kind of matched up
[42:15] with his uh his work desk
[42:17] he's uh he's a little bit lonely um
[42:21] so you've got to have some some company
[42:23] for your tea party
[42:26] when you when you're uh taking a few too
[42:29] many substances out in the desert
[42:35] all right so yeah let's uh let's look
[42:38] out here
[42:39] just a reminder to folks who are
[42:40] submitting questions in the chat uh
[42:42] chris is a lighting artist
[42:44] if your question is about process in how
[42:47] to light a scene
[42:48] those are the types of questions that
[42:49] are appropriate for chris if your
[42:51] question is gameplay related
[42:53] or even graphics related or engine
[42:55] related stuff
[42:56] which we've talked about to some extent
[42:58] uh those aren't questions that are
[42:59] appropriate for
[43:00] for chris that's my jam yeah so
[43:03] see a lot of really good and really
[43:05] interesting questions unfortunately
[43:06] chris is not the person
[43:08] uh for those in case you're wondering
[43:10] why are they answering asking my
[43:12] question
[43:13] i'd love to answer it if i knew the
[43:14] answer
[43:17] remember this is an art process stream
[43:19] so if your question is about
[43:21] the process of lighting or a space
[43:24] that's appropriate
[43:25] if it's can we shoot out lights or stuff
[43:28] like that or gameplay related stuff
[43:30] is not the stream for that unfortunately
[43:33] wrong chris
[43:36] one day maybe one day i'll know enough
[43:39] about everything
[43:40] that i can just do every question that
[43:43] you've got
[43:45] uh so what i'm gonna do now is just for
[43:47] the the sake of lighting this guy
[43:50] i'm gonna set up a camera that i can use
[43:53] here
[43:54] um and the main reason for that is just
[43:57] that i want to
[43:59] i want to get some nice depth of field
[44:02] and separation on the background here so
[44:04] i'm going to knock that down crank up
[44:07] the focus distance a bit
[44:12] see if i can find where that focal plane
[44:14] is
[44:17] about right uh we're missing some
[44:20] background there so
[44:22] [Music]
[44:24] a couple million kilometers of rendering
[44:27] distance
[44:31] and i'm just gonna try and angle this
[44:33] guy a little bit here
[44:35] so all right so actually it looks like
[44:37] just these
[44:38] these lights from the environment
[44:39] already do a pretty decent job
[44:42] um but i'm going to get rid of those
[44:46] lights and kind of do something else
[44:48] i think uh
[44:51] that's on this layer
[44:55] it looks like it's probably the probe
[44:57] [Music]
[45:00] a bit of uh some redness from something
[45:06] uh as a follow-up to your uh 280
[45:09] uh light source question do do vfx
[45:13] and and other intermittent light sources
[45:15] like that count against that number
[45:18] uh they would so if if vfx um
[45:21] was doing something i don't know like
[45:23] for example like fireflies
[45:25] and they were cut they had light sources
[45:27] they were giving off
[45:28] that would all count towards that that
[45:30] limit
[45:31] what i don't know though is if they were
[45:33] i don't know if there's a difference
[45:34] between like gpu particles if they were
[45:36] casting lights versus
[45:38] kind of the light entities that we place
[45:40] if that kind of runs through a different
[45:41] system or not
[45:42] uh but i would guess that they all kind
[45:44] of uh follow the same
[45:48] uh the same budget sorry i just had to
[45:51] delete a
[45:52] inappropriate message in chat there
[45:57] all right so right now i'm seeing like
[46:00] the
[46:00] my q map is picking up a lot of red and
[46:02] that's uh from the the glow that's kind
[46:04] of built into the um
[46:06] the structure here so i'm actually just
[46:08] gonna go in and
[46:11] i'm just gonna kill the glow in the
[46:12] material
[46:14] uh just because i want a as clean a a
[46:16] base as possible
[46:18] to light this guy's head chat seems to
[46:21] think this is a clem's
[46:23] uh twin brother cletus
[46:26] yeah exactly this is a desert climb
[46:34] so i'm gonna grab this glow and i'm
[46:36] gonna kill it there we go
[46:40] and i'll rebake this guy
[46:44] that's better so there's a little bit of
[46:47] uh of light coming from these guys back
[46:48] here but that'll be fine
[46:50] i'm just gonna add to it i think all
[46:53] right so
[46:55] uh when it comes to character lighting
[46:56] it's it's uh
[46:58] i guess it's kind of similar to doing
[46:59] environment lighting but um
[47:02] obviously you've got a single thing to
[47:03] focus on whereas in the environment
[47:05] you've got
[47:05] different camera angles um different
[47:07] points of interest that kind of stuff
[47:10] so for a character i'll start looking
[47:13] for
[47:14] a key light source and
[47:17] again i don't have anything immediately
[47:19] motivating in the scene i've got these
[47:21] guys back here so i'll probably use that
[47:23] as a motivated rim light and i'm just
[47:26] going to do like a basic
[47:27] um three point lighting setup which is
[47:30] kind of the
[47:31] the most common uh way to light
[47:34] characters
[47:36] or to light humans in general
[47:40] finding a good kind of brightness value
[47:43] for my
[47:44] for my key light and turn it into a
[47:46] projector
[47:47] and shine it at him
[47:54] and find where i want it to land
[48:00] something like that turn on shadows of
[48:03] course
[48:05] get some nice uh nice self shadowing
[48:10] i'll try and just move it around a
[48:12] little bit and
[48:13] see if i can find something kind of cool
[48:16] um
[48:16] so i made like for the for the real klim
[48:19] you know we had some very dramatic
[48:21] lights because that that kind of lent
[48:22] itself to his his cd
[48:25] environment um so i'll do something a
[48:28] little bit similar
[48:29] i mean his face just just begs for some
[48:32] sinister looking lighting so
[48:35] yeah it cannot be understated how
[48:36] important lighting is
[48:39] especially for character it's like when
[48:41] you had it there and it was
[48:42] completely blown out uh you know he just
[48:45] thought yeah kind of weird
[48:47] and off-putting but now he looks yeah
[48:50] yeah you can you can light something
[48:51] really bad really easily
[48:59] let's find a nice kind of mid-point here
[49:01] let's let's go with this
[49:03] um and let's let's find a nice color
[49:08] it's always interesting kind of picking
[49:10] a color sometimes you got to be careful
[49:12] because
[49:13] the more saturated you get you can
[49:15] really start making human skin
[49:17] look really sick and uh and dead
[49:21] um what's the
[49:24] uh let's go with something like from
[49:25] mandy that would be kind of cool we've
[49:27] got a little bit of
[49:28] frame rate slow down here is that is
[49:31] that happening in the engine or is that
[49:32] just uh
[49:33] our video chat uh i think it might be
[49:35] the video
[49:36] my frame rate's looking pretty good at
[49:38] the moment
[49:38] [Music]
[49:40] oh well we're working with what we got
[49:47] all right and now i'm gonna add a light
[49:50] kind of to
[49:51] help help the rim light here so i mean
[49:53] this is kind of exactly what you would
[49:54] do
[49:55] on a movie set as well you'd hide
[49:56] something
[49:58] up off screen if the lights themselves
[50:01] aren't enough then you just kind of
[50:03] add a little bit extra
[50:06] and in this case i'm not going to use a
[50:08] color i'm going to use an actual light
[50:10] temperature because we can basically
[50:13] pick uh with our lights if we want to
[50:15] use like a gel which would just be any
[50:17] kind of saturated rgb color
[50:19] uh obviously you can find the right
[50:20] colors in there but it's a bit more
[50:22] difficult
[50:23] or we also have like proper light
[50:25] temperatures from like a
[50:26] 1000 to 15k
[50:29] range but i'm gonna match these guys out
[50:33] there they look like they're about
[50:35] 35k
[50:39] all right so that's the rim light
[50:42] portion we'll just keep it there for
[50:44] time's sake and then just add a fill
[50:52] and again like with those ratios it's so
[50:54] easy to just completely
[50:57] nuke it uh with the fill light being too
[51:00] bright so let's
[51:03] let's bring that guy down
[51:05] [Music]
[51:07] and maybe let's see maybe this is like a
[51:11] slightly bluer
[51:13] i always like playing with some really
[51:16] extreme
[51:17] lighting colors uh maybe
[51:20] this is maybe this is like
[51:23] from the uh from the sky actually so
[51:26] let's
[51:26] jump out instead of coming from the
[51:28] bottom i'm going to bring this fill up
[51:34] kind of bring it out from the side or
[51:35] from the top
[51:39] [Music]
[51:41] yeah that's kind of cool
[51:42] [Music]
[51:45] there you go so we get some nice like
[51:46] subsurface scattering in his ears from
[51:48] the rim light
[51:49] i'm not loving my my brake lights
[51:53] uh key light here so let's let's try and
[51:56] find something else
[52:02] just go with something kind of sickly
[52:06] warm
[52:15] i mean and as as with kind of everything
[52:18] in lighting is like you can
[52:20] you're never really done you just kind
[52:22] of stop at some point when it looks good
[52:25] that's that is true of every
[52:28] every art well discipline there is you
[52:31] know
[52:32] i don't remember who had the original
[52:34] quote but art is never finished it's
[52:36] only abandoned
[52:38] yeah exactly so once the deadline hits
[52:41] then then i'm done
[52:42] but uh yeah you can you can tweak this
[52:44] stuff forever
[52:46] so now what i'm looking for is um if i
[52:49] turn this off and just go back into my
[52:51] camera
[52:52] his eyes are looking very flat and dead
[52:53] and that's just because the the
[52:55] placement of my lights just means that
[52:57] i'm not getting a specular highlight
[52:59] catching in his eyes which is very
[53:02] common
[53:02] in the in cg or computer graphics
[53:06] so i'm just going to add a specific
[53:09] catch light
[53:12] just to help that out a little bit um
[53:14] because without it
[53:16] eyes start to look really dead
[53:19] i gotta i gotta find this the sweet spot
[53:21] [Music]
[53:23] it's starting to come in now
[53:27] turn it way down
[53:34] yeah there we go
[53:38] [Music]
[53:39] all right as we demonstrated before you
[53:43] you're setting your lights down getting
[53:45] the lights you want and then you'll find
[53:48] fixtures to yeah exactly i mean
[53:51] in this case like maybe i'm i'm doing
[53:54] something for a cinematic
[53:55] uh so like the the pipeline for or
[53:57] workflow for lighting a cinematic is
[53:58] very different from
[53:59] what we would do in the pu so uh
[54:03] what we what we try and do is is make
[54:05] our characters look as good as possible
[54:07] all the time
[54:08] but you know the the difference between
[54:11] a
[54:12] a movie and a game like the primary
[54:14] difference obviously
[54:16] is that you can move around you can come
[54:17] at a character from any angle and uh
[54:20] therefore the artist doesn't really have
[54:21] any true control over how the character
[54:24] looks
[54:25] um in a movie you know everything is set
[54:28] up
[54:28] very very specifically in every single
[54:30] shot and lights don't
[54:32] generally make sense like they're just
[54:34] kind of placed in space around
[54:36] reflected that kind of stuff um for
[54:39] lighting
[54:40] a game like if this was a game character
[54:42] that we were doing
[54:43] this uh this light rig probably wouldn't
[54:46] work and i would have to kind of
[54:48] unfortunately kill kill everything i've
[54:50] just done
[54:52] uh weep a little bit and then start
[54:54] again
[54:56] and uh in this case i would um
[55:00] try and find a way to to motivate that
[55:02] light
[55:04] from the scene so i'd i'd pick a kind of
[55:07] a direction
[55:08] uh so maybe maybe he's got like some
[55:10] lights hanging off of his um
[55:13] off of his thing here and then i'll try
[55:15] and see if i can make something like
[55:16] that work
[55:17] like this kind of gives him a little bit
[55:18] of
[55:20] a bit mysterious kind of don't want to
[55:22] mess with him vibe
[55:24] and then again luckily because it's a
[55:27] sci-fi game we can kind of
[55:28] we can justify having lights in places
[55:32] where
[55:32] most people wouldn't actually put lights
[55:35] so if i put a light on the floor
[55:38] um kind of like how i had in in the
[55:41] original lighting setup
[55:42] you can have something down here and now
[55:45] now if this was like kind of game
[55:47] lighting or like in game lighting it
[55:48] would be a little bit closer to
[55:50] something like this
[55:52] and then we can kind of tweak things a
[55:53] little bit more
[55:55] um we just have a little bit less of
[55:57] that that really fine control
[55:59] like specifically with putting in a um
[56:03] a an eye catch light like the specular
[56:06] highlights on his eyes
[56:08] that's a lot more hard a lot harder to
[56:10] uh
[56:11] to motivate in an actual level design
[56:14] kind of sense of lighting
[56:18] cool yeah that's uh that's kind of cool
[56:21] there so
[56:26] yep did that light go i had a light in
[56:28] here
[56:29] oh well it's lost to the ages
[56:36] and i think finally we'll just
[56:39] pull the sun up
[56:43] and let cletus klim bask in the uh the
[56:47] morning glow
[56:49] of another day
[56:54] yeah there we go very
[56:58] cool thank you so much chris
[57:02] yeah anytime taking us through a bit of
[57:04] your process i mean obviously
[57:06] you know every time we do one of these
[57:07] shows whether it's lighting or
[57:09] props or weapons or characters or
[57:11] whatever uh
[57:12] you can't fit the uh you can't fit the
[57:15] entire process in the space of an hour
[57:18] yeah i mean there's so much more that i
[57:20] could do um
[57:22] so many different angles that you can
[57:24] approach this stuff from so
[57:26] we do appreciate the the the scratching
[57:29] the surface if you will
[57:30] uh taking this um you can go ahead and
[57:34] uh
[57:35] stop the screen share uh that's it for
[57:37] the show this week guys
[57:39] uh as we are as we like to do here we
[57:42] are going to throw the raid to a star
[57:45] citizen streamer who is streaming right
[57:47] now
[57:47] uh my understanding is that it is hc
[57:50] vertigo
[57:51] uh who haven't seen in quite some time i
[57:54] i i
[57:54] i've i'm at hc vertigo a couple of times
[57:57] um
[57:58] there's a pretty good streamer i think
[57:59] he's mining right now so
[58:01] um when you if you want to join in the
[58:04] raid you can hit the little button at
[58:06] the top of the chat and you join the
[58:07] raid
[58:07] and uh when you get there uh everybody
[58:10] scream
[58:11] turn the lights on he'll have absolutely
[58:15] no idea
[58:16] uh what's going on uh for for star
[58:19] citizen live
[58:20] uh i'm jared uh that's chris join us
[58:23] uh next week uh for a very special ship
[58:27] showdown live uh it's gonna be different
[58:30] uh until then we'll see you then uh take
[58:33] care
[58:34] uh be safe and uh
[58:37] keep on trucking
[58:40] i don't know see everybody
[59:10] you

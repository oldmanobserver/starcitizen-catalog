# Star Citizen Live Gamedev: Making Ship Up IV

**Video:** https://www.youtube.com/watch?v=GU9hwD7ZjHc
**Date:** 2024-06-07
**Duration:** 1:01:48

## Transcript

[00:04] hi everybody just talking the witchard
[00:06] three welcome to Star Citizen LIVE Game
[00:08] Dev making ship up for I'm your host
[00:11] Jared Huckabee and we're back I feel
[00:13] like we've only been off for like two
[00:16] weeks but it's uh feels like it's been a
[00:18] while hi welcome back uh if you've never
[00:22] seen Star Citizen live before it's where
[00:23] we take about an hour at the end of our
[00:25] week uh we invite some developers over
[00:28] uh tell them they have to stop doing
[00:30] whatever it was that they were doing
[00:31] because I
[00:32] mean it's probably not important come
[00:35] over here and goof off with me for about
[00:37] an hour and that's what we're doing this
[00:38] week sometimes we do a Q&A sometimes we
[00:41] do an interview and sometimes on our
[00:43] game dep specials we sit and watch
[00:45] somebody work for an hour and that's
[00:47] what we're doing this week so joining me
[00:49] on the show this week meet me at camera
[00:51] too we've got Alberto petronio and uh
[00:55] the sole member of the entire ship team
[00:57] Dan McCabe hello how you doing guys
[01:00] I'm well thank you uh because every show
[01:03] is somebody's first show let's take a
[01:04] few moments to introduce ourselves uh uh
[01:07] hi I'm Jared I just did an introduction
[01:08] so I won't do it again Alberto tell
[01:10] everybody who you are and what you do
[01:12] I'm Alberto and I'm the lead vehicle
[01:14] concept artist and what does a lead
[01:15] vehicle concept artist do it leads the
[01:17] vehicle concept art team we do the
[01:19] spaceships and some weapon spaceships
[01:22] and weapons we do the first part
[01:24] basically we take the ideas see where
[01:26] they can go see where they can fit in
[01:28] the game play stuff like this and then
[01:29] we
[01:30] give what we do to them and they do the
[01:33] rest and then tells you I can't do it
[01:35] yeah exactly that's do it Mark's the one
[01:38] who says we can't oh we didn't get even
[01:40] two minutes into the show before the
[01:41] Mark Gibson bashing we love Mark sorry
[01:43] Mark kind of and Dan tell everybody who
[01:46] you are and what you do so I'm Dan I'm a
[01:48] senior vehicle artist so after Alberto
[01:51] and his team have finished doing the
[01:52] concept he gets passed over to the
[01:54] production art team which I'm part of
[01:56] and then depending on the size of the
[01:58] ship like One Two Three or even more
[02:01] people could be working on it to get it
[02:04] into your hands but sometimes when
[02:06] you're the only person to do the
[02:07] interview it seems like it's just you
[02:09] yeah I get credit for all of it but Alex
[02:11] does most of the work to be
[02:13] honest
[02:15] Alex rest in
[02:18] peace Alex is alive it just it really
[02:21] for for it just for that episode for
[02:24] some reason the way we were talking
[02:25] about it it sounded like he passed away
[02:27] and it was just really unfortunate yeah
[02:29] we still care the trauma of that today
[02:31] Alex wherever you are we love
[02:34] you that was awkward Alberto yeah we are
[02:37] going to showcase the concept uh portion
[02:40] of of ship of ship development we are
[02:42] going to make something uh live attempt
[02:44] to make something in an hour I want to
[02:46] preface this that uh uh no ship can be
[02:49] concepted fully in an hour can't be
[02:51] concepted 50% can't be concepted 10% an
[02:54] hour but we're going to do a short
[02:56] abbreviated kit bash version of the
[02:58] process and you know see a little bit
[03:00] about how they work and discuss their
[03:02] process and how that all goes um what
[03:05] are we going to make today exactly today
[03:07] we're going to make a motorbike that can
[03:08] uh accommodate both a human and a less
[03:11] human creature and possibly on a side
[03:13] car possibly a sidec car maybe all right
[03:16] this going to be like a hover bike or
[03:17] are you talking like a ground hover bike
[03:19] so so uh so so a new hover bike uh kit
[03:23] bashed from existing parts yes maybe
[03:25] some surprises We Fresh of pulse we can
[03:27] uh cannibalize basically what we have on
[03:29] the polls uh show a bit of the early
[03:32] stages of the concepts and start to take
[03:34] St from that one and then go straight
[03:37] into a new one this is generally the
[03:39] workflow that takes places in the first
[03:41] days of dation of a concept before it
[03:43] actually got confirmed and got bringed
[03:45] over uh by a lot of iterations with our
[03:48] director with everyone and maybe we
[03:50] might see some older Concepts that fell
[03:54] to the white side while we go this SM so
[03:56] with that we're going to switch to the
[03:57] screen share and uh jump into
[04:00] uh what was a software blender yes this
[04:02] is blender and we absolutely will ignore
[04:04] what you're seeing right now this is the
[04:06] main software I use during my workday
[04:09] along with Photoshop but 3D uh in
[04:11] concept vehicle is generally the most
[04:14] important and most I spend 95 7% of my
[04:19] time here what what are we looking at
[04:21] now we looking at a
[04:23] cutipie you're looking at my dog which
[04:26] is a guest of every aspect of my life
[04:28] and I miss very very much
[04:30] zoom in there let's see uh who who is
[04:32] this this is bran this is bran yes and
[04:35] he is a seven-year-old good
[04:37] boy show them this show them this oh
[04:41] yeah oh and you made a little 3D print
[04:44] yeah it's very cute he couldn't he
[04:46] wouldn't come over without it it's like
[04:48] his emotional sport animal yeah like he
[04:49] can't go on flights without it all right
[04:51] you ready to work yes okay let's cut the
[04:54] camera see the full screen see the glory
[04:57] talk us through it so uh
[05:00] I have pieces of the PSE that we can try
[05:03] to reuse see like reusing materials we
[05:05] have three options that I really liked
[05:07] from the early PSE uh production there
[05:10] was a snoop fighter one completely
[05:13] covered uh there was a different kind of
[05:17] much bigger um motorbike like uh pulse
[05:21] uh you can see how we can uh test the
[05:24] animation work how if there are
[05:26] compenetracion
[05:29] in a different direction for the pulse
[05:31] or something smaller and there was
[05:33] another one more inspired to something
[05:35] that can actually fly rather than hover
[05:38] and yeah we can take some uh pieces from
[05:41] here and there and see what we can go
[05:43] from here so just to be clear these were
[05:45] three potential Concepts that you worked
[05:48] on for the pulse that were uh not chosen
[05:51] yeah exactly and we went for a more
[05:53] classic approach with the pulse that you
[05:54] know today yeah you can definitely see
[05:56] some uh razor DNA in that first one uh
[05:59] yeah we were trying to push into connect
[06:02] it with meai there was a lot of
[06:04] reference through the to the fury as
[06:07] well and I'm very satisfied with the
[06:10] final result too uh made in Germany says
[06:14] can the dog sit on the bike well if we
[06:15] remember at the end we'll see no no
[06:17] don't do it don't do it now save it for
[06:18] the end it's a carot at the end to keep
[06:20] them watching the whole show we will
[06:23] actively look
[06:24] for for a space for the dog okay first
[06:28] thing first so what is the first thing a
[06:31] saddle a saddle now do you always start
[06:34] with the cockpit the saddle the operator
[06:38] position it really depends by by the
[06:40] brief considering
[06:42] how uh like if I'm doing a capital ship
[06:45] uh our approach will be completely
[06:47] different but considering how a Motte
[06:51] works and how much of a human uh appears
[06:54] on a motorbike which is a good 30% the
[06:57] first things I will make sure I I have
[07:00] in the right position are the the
[07:03] steering wheel what's it called on the
[07:04] bike sorry the handle bars as my accent
[07:09] can tell you I'm not British and English
[07:11] is not my first
[07:13] language so I'll make sure that I have
[07:15] them in the right
[07:17] position I have the character fully
[07:19] rigged so I can move it I generally I
[07:22] also reference other animations from the
[07:24] game so sometimes we can recycle
[07:26] things that's a that's a consideration
[07:29] like you can cut down if you can reuse
[07:31] an existing animation for the enter and
[07:33] exit that cuts down development time yes
[07:36] development cost
[07:37] tremendously and it's all a matter of
[07:39] balance can we afford it can is an
[07:43] important uh something particularly
[07:45] important that we have to
[07:46] do and when you say uh can you afford it
[07:50] I continuously have to clarify we're
[07:51] talking about performance metrics yes
[07:53] and stuff it's it's a relative
[07:55] development term we but we we use the
[07:57] terms cost to mean performance not you
[08:00] know money or whatnot no eventually time
[08:04] time I think one thing as well is when
[08:06] you have like these um like this library
[08:09] of MOA entry exit anims we've got for
[08:12] different styles of vehicles if you have
[08:14] something that's a little bit more
[08:16] unique in its stance like take for
[08:18] example like the fury M like we had to
[08:21] make it so the seat would come out and
[08:22] lower down because it didn't really make
[08:24] sense for the player to like kind of
[08:26] scramble up and spin around in there so
[08:28] it ended up adding some more interest
[08:30] into the entry exit on him right like
[08:33] because of that limitation which is kind
[08:35] of Welcome really you know they say
[08:38] necessity is the mother of invention you
[08:40] know when you can't do everything you
[08:41] want you get Star Wars Empire Strikes
[08:44] Back between of the Jedi and you can do
[08:46] anything you want you get Phantom menus
[08:48] attack of the Clones Revenge of the Sith
[08:50] and I say that with all love to the
[08:52] prequels It's just sometimes not being
[08:55] able to do every silly thing you want is
[08:57] a bonus it forces creativity yeah yeah
[09:00] for
[09:01] sure one thing I I wanted to mention cuz
[09:04] I know as someone I don't actually use
[09:06] blender um on the concept team are
[09:09] heavily they heavily use blender it's
[09:12] really interesting to see the different
[09:15] style of workflow obviously Alberto is
[09:18] pretty wild with his hot Keys like more
[09:20] so than most people but yes I I said
[09:23] this the last time Alberto was on you
[09:24] I've been I've been doing this type of
[09:26] show for going on nine years now you
[09:28] know intermittently and I've never seen
[09:30] anybody un blender this fast yeah he is
[09:34] like if you if you're watching this as a
[09:36] blender user and you you get imposter
[09:37] syndrome for allti this don't worry
[09:39] we've got it as
[09:40] well but the um one thing that makes
[09:43] blender a really really strong software
[09:45] for something like concept artists um is
[09:49] its ability to just jump between
[09:51] different like subd disciplines so like
[09:53] for us on production art like if we need
[09:55] to sculpt something we usually go into
[09:57] zbrush if we want to um light something
[10:02] we'll go into the engine if we want to I
[10:05] don't know do like a paint over we'll go
[10:07] into Photoshop here they've got grease
[10:08] pencils do their paintovers they've got
[10:10] a sculpting tab they've got material
[10:12] geometry nodes they've got a lot of
[10:14] tools inside of the same software kit
[10:17] that allow them to get the visual goal
[10:21] of an object over to us really really
[10:24] fast and it it's it's been something
[10:26] blender has improved on a lot over the
[10:29] last last couple of years and it just
[10:30] keeps doing it do you have multiple
[10:32] versions of blender on the taskbar yes
[10:35] uh different options Sometimes some tool
[10:37] is not updated to uh the lastor so it's
[10:41] good to refer especially there is an
[10:43] update every 3 months a major one so not
[10:47] everything not every Creator keeps it
[10:49] updated yeah and and as Dan said you
[10:52] know Alberto uses uh blender but Dan
[10:55] does not we we're actually we're
[10:58] fairly tool agnostic here we have a
[11:00] wonderful tools team led by Martin
[11:02] senior and a whole host of folks who
[11:05] work with them who build all sorts of
[11:07] Integrations even the even our uh our
[11:09] partners at well I guess now they're
[11:11] part of the family you know cig Montreal
[11:14] yeah uh you know even then there's a
[11:16] tools team there too and they build
[11:18] things like Mighty bridge and and stuff
[11:20] that just help one program talk to
[11:22] another program you know let you import
[11:24] uh from one place and Export to another
[11:27] place so uh it's one of the ways that we
[11:31] can operate at scale is you you know you
[11:33] slow down if you force everybody to use
[11:35] the same program so there are certainly
[11:37] benefits of it but it it it limits who
[11:40] you can hire it limits you know how fast
[11:43] they were some people like like Alberto
[11:45] can be this fast in blender but he might
[11:47] not be this fast in 3D Max definely not
[11:49] definitely not this fast in 3D Max no
[11:52] you have like the different departments
[11:54] as well like depending on your
[11:55] specialism like certain software lends
[11:58] itself more to the other so just for
[12:00] example like Alberto mentioned that he
[12:02] does concept for weapon and vehicles
[12:04] yeah the weapons team use Maya the
[12:06] vehicle team uses maxly you know there's
[12:08] one example of the pipeline across those
[12:11] three departments that are all quite
[12:13] closely linked all completely different
[12:16] software packages and then everybody
[12:17] touches like substance designer or
[12:19] something yeah yeah substance is like uh
[12:22] a big pillar and so is Photoshop but the
[12:24] Adobe suite in general is kind of owns
[12:26] the texture and platform I heard I heard
[12:29] Photoshop recently updated the terms of
[12:30] service they're now my new
[12:33] Dad yeah it went down well now they're
[12:36] better than a boing I'll get used to
[12:41] it yeah I didn't actually see what that
[12:43] was about I just saw the memes and I was
[12:45] like okay I'm going just leave the
[12:46] internet for a day and I'll come back
[12:48] and
[12:49] check like Photoshop is now your new dad
[12:51] your old dad has to move out you have to
[12:54] call you have to call Photoshop dad or
[12:56] sir at all times and maintain eye
[12:58] contact can see him every other
[13:00] [Music]
[13:02] [Applause]
[13:08] Saturday
[13:10] alas the less I say about generative AI
[13:13] here the less likely I'll get in
[13:17] trouble yeah we should concept A grab
[13:19] love that doesn't blow up randomly can
[13:21] we do that is that within our ability
[13:23] I'm not that doesn't blow up yeah
[13:25] randomly oh I'm not sure I can make it
[13:29] that it blew up but I not sure if I can
[13:33] decide
[13:35] when I'm going to say no yeah astrub
[13:39] mentions you know only if you use their
[13:40] cloud service I saw that in the fact it
[13:42] still bothers me that it doesn't say
[13:43] that in the TOs and when when any uh
[13:47] legal proceedings happen you know
[13:49] they're going to go by the TOs or
[13:50] they're going to go by something in the
[13:51] in the fact that was on another part of
[13:53] the website I just put it in the to and
[13:56] I'll feel better having it in a third
[13:59] party or not third party but having it
[14:00] in a separate fact
[14:03] just I am not we we we should go to
[14:07] let's bring up my camera real quick Tom
[14:09] I am not a legal expert nor am I an
[14:12] expert in Adobe and
[14:14] uh just having a little fun with the
[14:16] current uh social media uh frenzy
[14:19] relating to it I'm sure it'll all work
[14:21] out fine it usually
[14:26] does Alberto putting that gun on the
[14:28] front the oh I think it's a gun is that
[14:31] is it a gun yeah it reminded me of
[14:33] something that I asked John if I was
[14:34] allowed to say and I am allowed to say
[14:36] it but um for those of you moaning about
[14:40] the turrets on the Polaris they're not
[14:42] moaning they have legitimate concerns
[14:44] yeah I agree with them jeez and so did
[14:46] the directors so okay back to my camera
[14:48] um the views and opinions of Dan mccab
[14:50] once again do not reflect those of Cl
[14:52] Imperium games Roberts SP Industries or
[14:54] me blame him you getting bigger guns
[15:00] specifically on the bottom turret that's
[15:01] all I'm allowed to say be guns on which
[15:03] bottom turret on the Polaris underneath
[15:06] the um cockpit there's like a big bottom
[15:09] turret yeah well it's not big at the
[15:11] moment but the guns will become big I
[15:14] can't say how big so don't
[15:16] ask but they won't look like toothpicks
[15:20] Chris Chris Dan is in chat but they were
[15:24] moaning send your letters to Chris
[15:27] STS six Manchester Goods
[15:32] yard thank you dks for standing up for
[15:35] [Music]
[15:40] me I'm already really digging this dude
[15:43] this got like a it's almost got like a
[15:45] Sci-Fi uh Easy Rider
[15:49] feel like the little low rider
[15:51] motorcycles with the extended front
[15:53] wheel I I don't I don't know if those
[15:54] have a name when when when the
[15:56] motorcycle has the the obviously further
[15:59] extended front wheel then might
[16:00] otherwise be normal does that have a
[16:02] specific name
[16:04] swoop yeah in Star Wars they were the
[16:06] swoop
[16:08] bikes I know if a if it has like larger
[16:11] rear wheels and Chopper thank you
[16:14] viticus that's the word I was missing
[16:16] for that's the word I was that was
[16:18] that's the word I was missing for wow I
[16:21] have been off for two
[16:23] weeks if it has like a bigger front
[16:25] wheel or rear wheel I forget which way
[16:28] around it is it's called a mullet as
[16:31] [Music]
[16:36] well do we want wings yes give
[16:41] Wings little
[16:43] wings that cool check if Ben agrees hey
[16:47] Ben are you
[16:48] watching should we do
[16:52] wings I think Ben would want
[16:55] wings I would't be surprised if he just
[16:57] walked in to be honest he usually
[16:59] messages me on teams let me
[17:02] see I was realizing that I don't know
[17:04] his I don't have no his twitch handle so
[17:07] oh there he is Ben Curtis S it SE sent a
[17:11] message let me know if you need me to
[17:13] come and ye Dan out of there for
[17:16] you look I'm not I'm not joking that's
[17:19] what you said well you know I don't
[17:22] blame him uh Ben par however says yes do
[17:25] wings but Ben's a producer so I really
[17:27] wasn't we can just leave him on B come
[17:36] on sincerely I love
[17:39] [Music]
[17:42] producers you know whatling without
[17:50] [Music]
[17:52] producers I'm trying to think what we
[17:54] can do to make this thing look
[17:55] ridiculous like give it a spoiler or
[17:57] something you know something that's just
[17:58] sound not Mur uh Bad Bad Robot says
[18:02] Jared does the ux uiux team use figma in
[18:05] their work I don't know if they still do
[18:09] I I know it's I I I know there was a big
[18:11] exploration of it we we have the UI ux
[18:15] team there's there's several teams now
[18:17] you know we I know we've been showcasing
[18:19] uh Zayn and Simon and Dr Emily and and
[18:22] and Bone lately but there's actually a a
[18:25] whole another group in uh Montreal uh
[18:28] who working I know I saw something
[18:31] months ago where they were looking it
[18:34] was either looking to see if it can fit
[18:35] in the workflow or somebody was already
[18:37] using like I said we people use
[18:39] different tools I don't know if it's
[18:41] actively being used today
[18:43] though um Ben says if it's gatack it
[18:47] needs three or four wings and they need
[18:49] to move thank you that I should have
[18:52] just shut
[18:54] up he given me PTSD oh goody I mean last
[18:59] last time I did a ship with oh Jesus
[19:01] Christ
[19:04] why so so well well they don't know
[19:07] about that
[19:08] yet um there's
[19:10] a whoever did it I hate you it's Emma I
[19:15] hate you oh that is an Amma thing to do
[19:17] yes am I showed them your text that's
[19:19] what they're reacting
[19:21] to oh it wasn't 's idea he's just oh
[19:24] probably probably was yeah seems like an
[19:26] Amma thing to do and the viewers are
[19:29] like what the hell are they talking
[19:30] about it's an internal cig thing learn
[19:35] learn about it later
[19:37] [Music]
[19:38] sorry I want the Star Wars bike from the
[19:41] Stormtroopers and Empire Strikes Back
[19:43] the Stormtroopers have bikes ire Strikes
[19:47] Back the speeder bikes were return the
[19:49] Jedi I don't remember any
[19:52] bikes watch we'll watch it back and
[19:54] pedal bik there there was the one from
[19:56] the toys there was there was the little
[19:58] there was a little like bouncing one
[20:00] from that was in the toys that was that
[20:02] was from ho I don't I don't think that
[20:03] was actually in the movie I think it was
[20:04] just in the toy
[20:07] line yeah I have no idea don't be like
[20:11] that benar we are doing
[20:14] wings and they have to move and they
[20:17] have to move that's what Ben is that
[20:18] what you're doing said I don't know I
[20:21] was going to say what are you doing are
[20:22] they guns like oh no no no they are they
[20:25] will be Wings
[20:26] eventually should make them like flap
[20:29] you know what I
[20:30] mean no no no what do you mean I make
[20:35] them like a bird yes ah you you want
[20:38] them to animate like this yeah yeah yeah
[20:40] that's that's a stretch
[20:42] but I'm I'm open to
[20:46] ideas hopefully chat is
[20:50] better you know
[20:53] what let's commit to that idea oh no now
[20:57] it looks like very June now this doesn't
[20:59] it which is fine that's so
[21:01] cool oh I looked away and looked back
[21:04] and looked like you gave him a really
[21:05] long cape at
[21:07] first making like the do you want him
[21:10] with a cape well I want all characters
[21:12] with a cape I'm still I'm still fighting
[21:14] that fight with
[21:17] Ian need more capes like he's playing a
[21:20] piano speed of which he's like typing on
[21:23] this keyboard now I hope the mic can't
[21:25] pick it up I hope he can it's so
[21:27] satisfying uh xat xat drat xat brat xat
[21:33] bra oh my gosh I have been off for two
[21:35] weeks uh says dragonfly Mark I the
[21:37] dragonfly was our first kind of the well
[21:40] the dragonfly was our first H bike but
[21:42] it's its original influence uh from the
[21:45] great Paul Jones uh
[21:47] Paul who's enjoying life in uh Canada
[21:50] now he went to work for Ubisoft I think
[21:53] um he originally designed it on based on
[21:56] his Chopper so yeah uh similar influence
[21:59] the very first hover bike was based on a
[22:00] chopper and then we and then all the
[22:02] hover bikes since then have been more
[22:05] modern kind of the less utilitarian bit
[22:08] more Sleek like the X1 and things yeah
[22:10] like like like like little rocket stuff
[22:12] and like this but yeah the the the brief
[22:15] when we when Alberto and I were
[22:16] discussing this earlier is like let's
[22:17] get back and see if we can do another
[22:19] Chopper we haven't done a chopper in a
[22:20] while but obviously with a not with a
[22:23] drake aesthetic with a with a GAC or
[22:25] alien aesthetic which is what he's doing
[22:27] here
[22:30] are you satisfied with the cape oh yeah
[22:32] Cape looks
[22:34] great I was quite impressed with how
[22:37] blender had a brush to just make ripples
[22:39] like that
[22:42] is careful we're getting into
[22:44] ornithopter territory
[22:46] now just
[22:49] got single pilot ornithopter this is
[22:53] pretty cool yeah
[22:59] I I especially appreciate how long that
[23:01] Cape is because it's s how long do not
[23:04] fix it do not fix it you you want me to
[23:07] make it worse this is we don't make good
[23:09] things here okay
[23:13] ridiculous like that was actually a
[23:15] conversation I had once you know when we
[23:17] were doing one of these a couple years
[23:18] ago somebody asked me what happens if
[23:20] they make something that we actually
[23:21] want to make and I'm like this iscl I
[23:24] promise that won't
[23:25] happen I think it's about two we only
[23:28] make
[23:29] bad stuff silly things this is this is
[23:31] pretty cool though do you remember like
[23:33] when Cory made that bowl of noodles with
[23:35] a
[23:37] knife remember that yes it like a
[23:40] Halloween special I think
[23:43] okay so is that a gun in the front or is
[23:45] or whatever you want it to be it's a bit
[23:48] small at the moment isn't it
[23:52] no n I don't want to go too close to the
[23:56] I don't think I I know I'm not feeling I
[23:58] feel like the gun give it three guns in
[24:00] like a triangle formation I feel like
[24:02] yeah now we're
[24:04] gaming I feel like maybe instead of the
[24:07] gun like maybe it could be a an intake
[24:10] or something some something that more
[24:12] approximates the wheel shape that would
[24:14] be at the front of a traditional this is
[24:17] not easy with the wheel okay but no you
[24:19] wouldn't make a wheel it would be a box
[24:21] like make it make it like a special kind
[24:22] of intake or something that's what we
[24:24] did with the pulse because we did the
[24:25] engine so that with that particular
[24:27] shape so that it could
[24:29] reconnect culturally with a wheel
[24:31] despite not being a wheel yeah I don't
[24:33] know what can we do here maybe it's just
[24:36] not as long a gun or
[24:39] something let's e this one for a bit let
[24:42] me see if Ben Curtis is saying anything
[24:43] oh Ben Curtis is saying
[24:45] something oh no maybe maybe lose the
[24:48] pulse front forks no no no I I like the
[24:50] front
[24:52] forks sorry Ben I I'm overriding Ben on
[24:55] that one I lost the the seink kit bash
[24:58] so I have to use the the pulse kit bash
[25:02] oh he says bring more Arrow Head into it
[25:04] Arro
[25:06] head what's that what's that mean Ben
[25:09] Curtis what's bring more Arrowhead into
[25:10] it we're all scratching our heads
[25:12] here one thing that look how confused we
[25:15] all look right now Ben look at this look
[25:18] at Tom I mean is going to make so many
[25:21] good so much good stuff from here where
[25:24] does Arrowhead be
[25:29] one thing um when Alberto is doing this
[25:32] like it gives most production artists
[25:34] like excitement and fear at the same
[25:36] time like one small decision they make
[25:38] here Bas like to like change yeah it
[25:42] will be like it will be just a pain to
[25:45] like actually get into game but there's
[25:47] one thing we always want to make sure we
[25:49] do right but it it can it can it can uh
[25:53] give you a massive headache it's just
[25:55] like why can it can it just be simpler
[25:59] no I mean with the cealing I gave you a
[26:02] couple of headaches uh so swordfish
[26:04] pilot says how is the workflow with lods
[26:07] does the artist oh chat went does the
[26:09] artist build a high po model and then
[26:11] move to Palms and substance that's for
[26:14] him um how does the L work yeah where
[26:16] does the lods come in they're at the
[26:18] very end really aren't they yeah yeah
[26:20] lods are like just before we
[26:22] um like we we put it into game really so
[26:24] we have like our white box gray box L
[26:27] zero and final art is the stage where
[26:30] Ling would happen and so how do you make
[26:31] the ls so LS typically would start with
[26:34] so um I'm assuming if you're asking
[26:37] about LS you've looked at our production
[26:39] art workflow a little bit if not there's
[26:41] there's some resources cuz it's a little
[26:42] bit unique but we basically start by
[26:45] removing our shamas or like our bevels
[26:47] which are like our small edges which
[26:49] give the nice little polished effect to
[26:51] our edges um and are like small Pals so
[26:55] like our palom lines and our like main
[26:57] decals that like are quite subtle and
[26:59] then that kind of gets you to L one and
[27:01] then the rest is kind of a more
[27:02] traditional Ling pipeline but we used to
[27:04] do you know back in theay olden days we
[27:07] used to do that by hand you know I'd go
[27:09] with I'd go I'd go past you know like
[27:12] pat pat Salo and stuff and he'd be in
[27:14] there you know creating the lods for
[27:15] things but we have a new we have a new
[27:17] LOD tool don't we that automates a bunch
[27:19] of that uh yeah but I like I was I'm not
[27:23] sure like how much I'm allowed to talk
[27:25] about that to be honest I just brought
[27:26] it up so you're allowed to talk about
[27:28] okay um yeah we have like a tool that's
[27:30] like developed by the Montreal guys
[27:32] which tries to use Houdini to automate a
[27:34] lot of the process it played an
[27:37] absolutely pivotal role in getting the
[27:40] Polaris flyby for Fleet week and so
[27:44] amazing work from the Montreal like um
[27:47] Tech doing that I like what you're doing
[27:50] there yeah that's a it's it's easy to
[27:53] forget that you know development time
[27:56] isn't just in making the things that the
[27:58] players get to see that that the things
[28:00] that go directly into their hands it's
[28:02] also the time we spend revising process
[28:05] and building tools like we mentioned we
[28:06] mentioned uh Martin Senor and his tool
[28:08] team we mentioned the the tool team
[28:10] turbulent uh things like Mighty Bridge
[28:13] you know super help up you help our
[28:15] development time tremendously things
[28:17] like that new that new LOD tool help
[28:20] speed that stuff up and it's why you
[28:22] know the I think the biggest you know
[28:24] the the biggest question anybody ever
[28:26] has for Star Citizen and stuff is you
[28:29] know when but the second question is how
[28:32] are you going to do everything that you
[28:35] want to do and that's because you know
[28:38] this
[28:39] stuff progresses uh exponentially isn't
[28:43] quite the right word it's it's it's I
[28:45] don't know what I suppose it is still
[28:46] right you just don't know what the
[28:47] number I guess there's there's a level
[28:48] to like the quality bar is always
[28:51] improving because as technology gets
[28:53] better it affords you more the point the
[28:55] point I'm trying to make is you know we
[28:56] made we' made more in6 than we did in
[28:58] 2015 we made more in 2017 than we did in
[29:01] 2016 uh I think folks are already seeing
[29:05] you know with 323 you know 2024 is
[29:08] already a banner year for Star ciem then
[29:10] when you see 4.0 next and uh what comes
[29:13] after that uh that you'll learn about
[29:16] eventually but not for me uh 2024 is
[29:19] going to go down as one of the major
[29:20] years in Star citizens development
[29:22] that's because of that exponential
[29:23] growth all the tools all the process all
[29:26] the you know all the stuff that we learn
[29:28] to do this better yeah for sure after
[29:30] year and year so yeah it was something I
[29:33] noticed when I was on um I helped fix
[29:36] some issues um on the Retaliator modules
[29:40] and stuff um and it was really
[29:42] interesting to see the contrast between
[29:44] like a really really old ship and like
[29:45] trying to bring it up to spec with some
[29:47] of the new processes and like things
[29:49] like the mini map you know when when you
[29:52] how do you like as a you know a company
[29:56] go about implementing all of but um new
[29:59] tech onto a you the 3D artist to clean
[30:02] up you don't have to clean that stuff up
[30:04] just going to clean it up yeah I'll
[30:05] clean it up don't wor I do the cool part
[30:08] yeah he does he gives me the headaches I
[30:11] just take the painkillers I give you the
[30:13] sh and you are happy about it shut up
[30:16] accept
[30:17] it but yeah things like the mini map
[30:19] were um were really really cool to bring
[30:21] in and
[30:23] like I just loved it I remember when I
[30:25] first dropped into game and I saw it in
[30:27] the top left and I was like oh my God
[30:29] this is awesome you know just in the
[30:30] edit chaos Gabriel in the chat your
[30:32] messages yeah you you got a perfectly
[30:34] normal harmless message but the Auto mod
[30:37] is blocking you because you're using the
[30:38] word naked in case you're wondering why
[30:40] your messages aren't going through what
[30:43] was his question oh no he's not question
[30:45] he's just talking about you know bikes
[30:46] uh bikes on the autobond and stuff like
[30:48] that but oh I
[30:50] see the the poor twitch Auto mod is like
[30:54] apparently it doesn't like the word
[30:55] naked
[31:00] sorry chaos
[31:03] Gabriel so okay we that's kind of
[31:07] majestic this
[31:08] is now the important part oh yeah how
[31:11] the hell are you going to get I was
[31:13] thinking you you still got half an hour
[31:15] or in the front in the side or in the
[31:18] rear no he needs to be in the front has
[31:21] to be the front like a little like a
[31:23] little R2 I got the vibe yes it's fine
[31:25] it's F so let's cut this part away yeah
[31:28] the cape cannot be compromised I mean I
[31:30] would have put the cape on
[31:32] br oh I see n no no you need to put him
[31:36] in the front Okay there he is Yo there
[31:40] he is
[31:42] bro is that not the sick thing so for
[31:45] those who Wonder yes I have a 3D model
[31:48] on my
[31:49] dog no I didn't 3D canet because he
[31:55] cannot understand to not move are you
[31:58] calling my my boss
[32:04] no h are you and yes I rigged it no I'm
[32:07] not I'm just holding I thought you were
[32:08] calling no no no Callum sent me a
[32:10] message says don't forget the sper brand
[32:12] but I didn't have to remind you Callum
[32:14] he's got it you you really think Alberto
[32:16] you think I'm going to forget about BR
[32:18] sear for a bit
[32:21] yeah I can let him look like he's
[32:23] driving
[32:25] too what if he is the one driving and
[32:28] y the
[32:31] pass his own little
[32:34] handlebars s uh yeah the little hle and
[32:38] and yes for for for for folks wondering
[32:40] this is not a sneak peek of of pets or
[32:43] anything like that this is Alberto's
[32:46] personal
[32:48] dog that we allow him to bring on the
[32:51] show cuz we like dogs I've never met
[32:54] friend but he seems
[32:56] nice he's a good boy give him sunglasses
[32:59] or goggles oh oh yes I also have the
[33:01] reference saved for this so ahead of
[33:04] everyone
[33:05] else I like dags I saw that originally
[33:10] um in like on the like as soon as we
[33:12] started someone went do you like dags
[33:14] and the beginning I was like like
[33:17] dags dogs yeah I like
[33:22] dogs oh who's calling oh I butt dialed
[33:26] Callum sorry Callum
[33:29] I normally don't get to have my phone in
[33:31] my hand during the
[33:32] show I saw my very first uh uh uh saw my
[33:36] very first uh what do they call them
[33:39] Travelers oh yeah yeah had my first run
[33:42] in with them all right couple weeks
[33:46] ago oh Safety First of course I will
[33:50] never put his life oh my God I love it
[33:53] it wants a watermelon texture doesn't
[33:56] it is this going to be an actual vehicle
[33:59] we can get uh uh that's up to you in how
[34:02] many times you message JN crew on
[34:06] Twitter at uh _ Jong
[34:12] crew uh if you message JN
[34:15] crew every day for three months but you
[34:19] can't break if you miss a day it doesn't
[34:21] count if you message John crew every
[34:24] single day on
[34:25] Twitter for three months straight
[34:28] they gave it a good go with that space
[34:30] trolley do you remember the space
[34:31] trolley with the gun on it mhm but never
[34:34] made
[34:38] it but you don't have a Twitter well I
[34:41] mean a good thing it's free to actually
[34:42] it might not be free to sign up anymore
[34:44] who knows what who
[34:48] knows I
[34:51] am immensely proud uh e uh big uh bingo
[34:57] Winchester uh there's an e at the end
[34:59] Jung crew give it like a next like a
[35:01] strut c r e w
[35:07] e do look a little but basically uh we
[35:12] decide uh what ships to put in
[35:14] production by how angry John crew is
[35:16] when he comes by my desk
[35:20] so that's secret how all ship decisions
[35:23] are made this some rage
[35:35] okay and then you have to give a little
[35:38] visor as well
[35:43] goggles uh space mom CI says I just got
[35:46] here what what am I seeing uh you're
[35:49] seeing uh game development in action
[35:53] that's right
[36:02] John knows what my price is he just has
[36:04] to make my
[36:05] Starliner once he makes my Starliner you
[36:08] leave all all of this stops all of this
[36:10] goes away I noticed you you can stop
[36:13] this at anytime John crew hold on let me
[36:15] talk right to John crew you can stop
[36:17] this anytime you want John crew you just
[36:21] you just make the Starliner and put that
[36:23] thing out or the jalap either one you
[36:26] make the star liner or you make the so
[36:27] happy you put those things out and this
[36:29] can all
[36:30] stop really it's on
[36:35] you I noticed you have like is that a
[36:38] Starliner trophy statue thing over there
[36:41] oh yeah that was a that was a gift from
[36:43] a backer that's really cool okay
[36:46] yo it's good enough yo
[37:01] uh astrub says what about the ptb 9000
[37:04] S2X that was The Great Cat 6000 sux uh
[37:08] and um I actually went back to it uh
[37:11] last year astropup uh to so I've made
[37:17] I've made a flying gray
[37:19] cat that actually that that actually
[37:21] works with the pipe system and all that
[37:23] stuff like this uh but I was basically
[37:24] like I wonder how much have I learned by
[37:26] recording all these interviews and and
[37:29] all the all the stuff that I've done and
[37:31] it turns out I was able to reverse
[37:32] engineer the pipe system from the the
[37:35] game thinks it's a it's an arrow but
[37:37] I've got a I've got a gray cat PTV that
[37:39] flies you can't it only works on a very
[37:41] old build it only work well well once
[37:43] they started the Resource Network stuff
[37:45] I it's it's I yeah it broke all the
[37:48] stuff that I knew how to do I got to
[37:50] spend more time with
[37:51] Torsten what color you want Cape ooh I
[37:55] think maybe we can do some variants
[37:57] yeah
[37:59] sure but yes I do I do have a about a
[38:02] year ago I I finally I I went back and
[38:04] tried to make the gr cat p uh 6000 sux
[38:07] and I made it flying made it Fly uh it
[38:09] looks way better than it used to do the
[38:11] wheels the wheels animate down when it
[38:13] when it lands the it the wheels come
[38:15] down and then when it takes off the
[38:16] wheels rotate up and become
[38:18] thrusters I was pretty proud of it yeah
[38:21] it looks sick like some DeLorean Back to
[38:23] the Future yep
[38:28] I
[38:30] got rudimentary skills most most of what
[38:33] I have is just not knowing what I can't
[38:37] do when you said like I have rudimentary
[38:40] skills I thought you're like going to
[38:41] make some like threat you know I have
[38:44] specific that be the worst Hitman threat
[38:47] in the world you don't want to mess with
[38:49] me what color do you want the I have
[38:51] rudimentary
[38:52] skills it'll hurt more because I don't
[38:55] know what I'm
[38:56] doing uh
[38:59] what does chat want what what color does
[39:01] chat what colors what colors
[39:05] chat I just realized they're going to
[39:07] say every color on they they're not
[39:08] going to have a
[39:10] consensus uh
[39:12] uh purple
[39:15] purple probably can't do that iridescent
[39:18] in
[39:20] blender yes I can yeah yeah cuz that
[39:22] that's really the the the Hallmark of
[39:24] the alien ship so that cool yeah you're
[39:27] right
[39:27] purple pearlescent yeah the viewing
[39:30] angle tint stuff
[39:35] okay let's make an experiment no hell
[39:38] divers black I'm tired of black
[39:39] spaceships I'm tired of black spaceships
[39:42] gray spaceships black
[39:48] spaceships and we we do it's fine um it
[39:54] do you like choose your like
[39:57] gradient ranges and do off the
[40:01] camera and it will do based on uh the
[40:04] angle so like now oh yeah see it's good
[40:07] play but you can do
[40:09] also
[40:10] some fancier ones oh yeah that's cool is
[40:14] it in
[40:18] it and look at that you delivered that's
[40:21] what they
[40:22] wanted I want to this is another example
[40:25] of why blender is a very good tool for
[40:27] concept because in Max that would have
[40:29] been a pain in the ass to
[40:31] do but um everything Max would have been
[40:34] a pain yeah it
[40:42] is some Max genius is going to correct
[40:45] me now go well actually press these 20
[40:47] but actually well
[40:49] actually it's fine as it
[40:52] this we just don't have the viewport
[40:54] power
[40:59] I feel like it needs
[41:02] um but does it have like a back hover
[41:05] plate thing you know what I mean like
[41:06] for the
[41:08] reare uh like in between the exhausts is
[41:10] there like some kind of like yeah it's
[41:12] like quite a void there should we put
[41:14] something for it to like balance with I
[41:16] would put it back
[41:19] that's put what back the KP just oh oh
[41:22] yeah that's
[41:24] fine oh yeah look at all this yeah there
[41:27] is all the stuff we can have a gun that
[41:29] shoots
[41:30] backwards uh elf win says question would
[41:32] it be possible to make a segment about
[41:34] the scheduling planning scheduling we
[41:36] actually did an episode gosh years ago
[41:40] uh it's still on our YouTube If you if
[41:43] you go if you go to the uh I I believe
[41:46] the Friday show was called happy hour
[41:49] when we did it so if you if you look uh
[41:52] on the you on our YouTube channel but we
[41:54] actually did a a whole hour with uh Eric
[41:57] Eric Kon Davis and um oh I can't I can't
[42:01] remember who else where we went through
[42:03] how producers make schedules and and
[42:06] plan for Dev development work and it's
[42:08] it's the same process for just about
[42:11] everything so it's I me you're asking
[42:12] specifically for ships but it's the it's
[42:15] the same uh information it's changed a
[42:18] little bit you know there there's
[42:20] there's agile and there's waterfall and
[42:22] stuff like that but for the most part I
[42:24] think it's still
[42:27] fairly accurate it it's a decent primer
[42:29] if you were curious that's up on the
[42:31] YouTube
[42:34] channel I got in a lot of trouble for
[42:36] doing a show with producers and how to
[42:38] make a schedule that's there were I
[42:41] think there were only like 177 citizens
[42:45] that enjoyed it they're like why are you
[42:47] doing a show with producers and I'm like
[42:49] because they're essential to the
[42:51] development of any video game and
[42:53] produces like the uh when you're in a
[42:56] meeting producers are the the like the
[42:59] comedians that keep it all together like
[43:01] they know how to run the meeting in a
[43:03] way that keeps everyone like there's
[43:06] nothing more boring than looking at like
[43:08] schedules and stuff like that for like
[43:09] artists so they do a really good job of
[43:12] making it fun for us sorry I I took a
[43:14] decision here of yeah I think that's a
[43:16] good one yeah Brown is now the soul
[43:19] [Applause]
[43:21] pilot it went a bit far from what we
[43:24] started from but I think it's G uh uh I
[43:28] don't want it to looks like it's choking
[43:29] it though yeah yeah you needs to be
[43:31] under his arm you have to be under the
[43:32] arm yeah right you have to lower the
[43:34] hands so the hands are there you
[43:41] go you know I grew up in the era of
[43:45] Benji movies and stuff you know you know
[43:48] and there's no rule that says a dog
[43:49] can't fly a hover bike I didn't see that
[43:52] rule either so yeah I'd say we go for it
[43:55] I think we will Le in a better War no
[43:57] rule it says a dog can't pilot a hover
[44:01] bike now do we want to consider now we
[44:04] got we we got to watch out from over
[44:06] producing this but do we want to
[44:08] consider like a gun rack or some like
[44:10] any kind of
[44:11] storage
[44:13] uh at the moment I think we can use the
[44:18] same escamotage we found on the on the
[44:21] pulse that that is the seat like a real
[44:24] motorbike so click and flicks up
[44:28] yeah that would make sense but no I will
[44:30] still consider a something that
[44:34] shoots backwards but like a missile
[44:37] rack a chafe yeah exactly the bike with
[44:41] with counter
[44:42] measures okay yeah can meas can we do
[44:45] like I don't um will we have enough time
[44:47] to make a animation of the wings like
[44:49] folding out ah yeah 15 minutes okay it
[44:53] won't take him long can we get the
[44:54] German Shepherd's name it's not ger oh
[44:57] it's got let Berto say the name yeah a
[45:00] mixed breed uh bran BR Bran Bran Bran is
[45:06] Tiny he's not like he's not like a big
[45:08] German Shepherd he's literally scale one
[45:10] to one yeah it's a 10 kilos dog my last
[45:16] dog was a German Shepherd rotweiler mix
[45:20] the thing he he weighed 200 lb he weigh
[45:24] I don't know what that's dog has no
[45:25] business I don't know what I don't know
[45:26] what
[45:27] I don't know what that's in kilograms
[45:28] but but yeah he's a he was a big big dog
[45:33] who did not understand why he couldn't
[45:35] sit in your
[45:37] lap I'm can sit where he wants 200 is
[45:40] about 90 kg yeah a heavy dog yeah that's
[45:44] pretty hardcore and he was as dumb as
[45:47] the day is long I bet he was terrifying
[45:49] for like
[45:51] people he was the sweetest dog I missed
[45:53] that
[45:54] dog except when he tried to sit on me
[45:57] that was less
[45:59] fun here we go I think he's going to
[46:01] animate so you want animations I really
[46:04] do hide the um hi Ben Curtis did say the
[46:07] wings had to move I need to change sorry
[46:11] said Ben Curtis did say the wings had to
[46:13] move oh he also said uh full rainbow
[46:17] please oh for the
[46:22] material sorry Ben I wasn't watching my
[46:25] chat I got you is it full ring no it is
[46:29] from one point to another oh that's
[46:30] really cool I I yeah you get I really
[46:33] like
[46:35] that
[46:39] yo that looks really
[46:43] cool and I like that oh there you go
[46:47] there you go so yeah depending on what
[46:48] angle you look at it so zero distance
[46:50] and on the front you have
[46:53] the it's very um what what is it spar
[46:58] yeah it's in Pense oh your so is your
[47:02] it's a little little hot doggy so is
[47:04] that like bottom color choosing your
[47:06] your main like like straight on angle
[47:09] color and
[47:10] then uh the rest of it was choosing the
[47:13] camera like offset color I tell you the
[47:16] first the last and he tell I tell him to
[47:19] go around it from the farest possible
[47:23] path or the nearest possible path
[47:27] I'm so glad you're here I don't really
[47:29] cannot talk in public yeah that's why we
[47:32] run animations this is going to look
[47:37] mint this is pretty nice so this is the
[47:40] arrival so I guess we put it at
[47:45] 50 chat's reminding you that you haven't
[47:47] restored the cape oh yeah yeah I get
[47:49] that sorry CH oh wait oh
[47:54] jeez oh [ __ ] oh that's on
[47:59] Reddit right well let's check on the guy
[48:03] what shape is he in you okay you okay
[48:06] guy he's fine you
[48:08] okay not too
[48:13] much he asked me to do it by way I did
[48:15] not you're making it
[48:18] worse the wings the
[48:23] wings okay where were we
[48:29] I don't even know it's still not as bad
[48:31] as Spider crotch if I survive spider
[48:33] crotch I can survive anything I'm I'll
[48:36] have to ask you after after this what
[48:39] might there's a generation that doesn't
[48:40] know spider cotch I'm sorry I brought it
[48:43] up then yo that looks very railen that
[48:45] doesn't
[48:47] it oh what if it lands on the on these
[48:50] things yeah oh the wings become skids
[48:55] yeah oh oh that's pretty cool oh okay
[49:00] let's save this and let's
[49:04] see have you saved no save for the love
[49:08] of God chat wants to know where the dog
[49:11] cape
[49:12] is oh could we do the cap but it's like
[49:14] in his face so he can't see anything
[49:17] well it's not driving so it's
[49:22] fine I knew this was distracting but
[49:24] it's important
[49:27] the dog is priority I will always
[49:31] support this what color should Bron's
[49:32] Kate
[49:36] be I think it should be
[49:38] different I was thinking what's brown
[49:41] favorite color but it will probably
[49:42] answer
[49:44] gray cuz he's color
[49:46] blind or so I
[49:50] thought no you have to have it like
[49:53] tilted up into the face yeah so you
[49:55] can't say anything
[49:59] we take our our job very seriously
[50:01] guys that's so good making games is
[50:04] supposed to be fun it is like if playing
[50:08] games is supposed to be fun then making
[50:09] games are supposed to be fun there's
[50:11] there's a lot of I mean I don't I don't
[50:13] need to relitigate the a lot of the
[50:17] press around the gaming industry from
[50:19] the last year year and a half but yeah
[50:22] you know there there are there are there
[50:24] there aren't enough times where we're
[50:25] gaming making games is fun so whenever
[50:28] we can make it fun I'm a big proponent
[50:30] at doing it this is maybe a little too
[50:33] much time on the cape though no he's
[50:35] he's done
[50:38] it that's
[50:40] perfect I strike my last comment from
[50:43] the
[50:48] record AR rean there's a good chance the
[50:51] community can convince John to let us do
[50:53] this remember me message a message uh uh
[50:59] x.com John crew j n c e we uh every day
[51:05] for 90 days if you miss a day it doesn't
[51:08] count I saw someone say they wanted like
[51:11] a gold cap can we do it like PBR correct
[51:13] gold so it's like metallic gold sure why
[51:18] not uh uh uh oh so here are some of your
[51:22] compatriots are watching on this one
[51:23] that's absolutely uh uh La says we need
[51:26] a better
[51:28] lead I can you can always leave
[51:31] life uh oh okay so oh so la is talking
[51:35] crap hold on uh uh uh um what's he
[51:38] saying can can we can we can we take a
[51:39] moment and and go to the gam uh La I see
[51:42] you I I see you talking crap in the chat
[51:46] here about Alberto and Dan here I think
[51:49] Alberto and Dan have something to
[51:51] something to tell you Le it was me
[51:56] do you want to tell him what was you no
[51:58] he
[51:59] knows it was Alberto he's creamy right
[52:02] now it was Alberto yeah he is screaming
[52:04] right
[52:05] now
[52:08] okay look at how gold that is they want
[52:12] go it's
[52:18] beautiful okay I think how's the
[52:21] animation
[52:24] looking okay nice so is that like the
[52:27] landed animation and then this is the
[52:29] flying animation the one we've been
[52:31] modeling yeah so when it lands you can
[52:32] climb into the back yeah oh I see you
[52:34] need you need to clear the back though
[52:36] do those part can you rotate that
[52:37] down yeah probably um you got eight
[52:41] minutes it's
[52:47] enough it's enough for Alberto the
[52:49] fastest blender in the and then the West
[52:53] I was trying to figure out what what
[52:55] what direction I as Manchester is
[52:57] generally referred to as the north
[52:59] though thewest yeah
[53:01] Northwest unless she's Scottish and then
[53:03] with
[53:05] be yeah that's free enough yeah that's
[53:07] cool I can and because it's Al because
[53:10] it's alien it has like the the hover
[53:12] technology so the parts don't we have
[53:14] some mechanics obviously but magic you
[53:17] know the mechanics can be some backups
[53:19] and stuff you don't have to have yeah
[53:21] the general rule when you're using like
[53:23] the xan like Space Magic cuz we don't
[53:26] really like to have Space Magic in the
[53:28] game is that it if it has power it
[53:31] should be connected to something
[53:33] physically you can't call it space magic
[53:35] it has a name I don't remember what it
[53:38] is but astrub probably does I don't know
[53:41] what it is astb what's the Shion Space
[53:44] Magic
[53:46] called yeah the rule is you can't if
[53:48] it's connected to the ship it has to
[53:51] have sorry if it's got power it should
[53:53] be connected to the ship so like for
[53:54] example the su's wings can't just be be
[53:56] floating like Rayman you know it needed
[53:58] like a mechanism to hold
[54:01] it well grab L is what causes it to fly
[54:04] but other ships have grab love I'm
[54:06] talking about the thing that that lets
[54:08] like this the steps go down like fly of
[54:10] the
[54:11] Navigator and stuff that that lets the
[54:13] the parts be disconnected from one
[54:15] another that's not called grab love grab
[54:17] love is what allows it to to fly we just
[54:19] well I know we just refer to it as
[54:21] giantech but I don't know if it has like
[54:22] a proper Nar you refer to it as Space
[54:24] Magic just like two minutes ago no I
[54:26] said we don't have Space Magic we make a
[54:29] point of if it's floaty it it can't have
[54:33] power Associated so let steps going into
[54:35] the sulen is uh is okay but Wings wonder
[54:39] wonder if Mark Gibson's watching Mark do
[54:41] you know what it's called you message me
[54:43] I can't remember Mark Mark will be
[54:44] clocked off like ages ago now for the
[54:48] week
[54:51] Mark Alberto messing him all mark
[54:56] this is
[54:59] amazing look at
[55:05] that okay
[55:06] so from this
[55:09] angle the the the red the only thing I'm
[55:12] not super sold on is the red it's a
[55:13] little too hot doggy for me hot doggy
[55:16] looks like hot dog mustard I feel like
[55:18] we want some some purple to Blue yeah do
[55:21] like purple or like we should still keep
[55:23] the full rainbow but I mean like the
[55:25] resting color should be like a purple to
[55:28] Blue so put it on the
[55:32] [Music]
[55:39] [Music]
[55:41] side I think that's good cuz it means it
[55:43] doesn't match the red cape either so it
[55:45] helps with that do we want to keep the
[55:46] red cape yeah I think so or should we
[55:50] have both on gold no no no no Brown is
[55:52] gold Brown is gold he a Golden Boy
[55:57] that's
[56:01] cool can we do give it some dramatic
[56:03] lighting do you think it's quite un
[56:05] let's do some lighting and then and then
[56:07] give it a full spin around you know so
[56:08] that people can make the gifts and then
[56:10] we'll call it a
[56:18] show there was a moment earlier this
[56:21] week where I was like Hey Berto if you
[56:23] know if you could if you can't like get
[56:25] it done in an hour we could always just
[56:27] come back next week you know I've got to
[56:28] fill a show every every Friday he was
[56:31] like maybe but I think I can do it in an
[56:33] hour oh yeah yeah you can now now I look
[56:36] cocky if you say this kind of
[56:39] stuff it's not it's not being cocky it's
[56:41] called being good you're good I look
[56:44] like the most arrogant guy ever every
[56:46] time I do a ANC his concepts are just so
[56:50] good my concepts are just so you're
[56:52] you're
[56:53] good Dan I'm all right I Alex is good
[56:58] but he
[57:01] did side joke we not explain
[57:04] this so they call it grab plate is what
[57:07] the tech is
[57:09] called thank you chat need to be a
[57:14] bit
[57:16] [Music]
[57:20] darker yes and for those of you who have
[57:23] watched star live for last eight8 N9
[57:26] years I did say something nice and
[57:28] positive about a
[57:31] coworker I've been off and I'm off my
[57:35] game I
[57:36] apologize I won't do it
[57:49] again I'm disappointed you didn't make
[57:53] my meat chip Alberto that's how I know
[57:55] it's I didn't have to say it it's armor
[57:58] that's Amma no
[58:01] doubts Amma I will not do mix
[58:04] ships here we
[58:15] go what are you doing he changing the
[58:18] camera changing the
[58:20] lights VI set fire okay now I see
[58:25] something
[58:26] [Music]
[58:33] the dog is a better pilot than most of
[58:35] the player base let's be real at least
[58:37] better than Captain
[58:49] bgs but especially my dog is a CutiePie
[58:52] and everyone has to know
[58:56] think okay it's
[59:01] fine yes
[59:05] um uh Alberto's dog brand is a CutiePie
[59:10] and that is supported by Robert Space
[59:12] Industries CL PR games and it
[59:19] subsidiaries
[59:23] I look at that
[59:27] yeah
[59:31] yeah there we
[59:34] go all right with one minute to
[59:39] spare someone slow him down yeah oh yeah
[59:41] give him the give the give the the the
[59:45] turntable blender you be better about
[59:48] realtime
[59:49] Shadows if that's what the program's for
[59:52] it's not play the animation play next
[59:54] month next month really yeah they
[59:56] released e 2.0 and that has better rol
[1:00:00] matrics and better
[1:00:02] Shadows when you go static is still
[1:00:04] horrible just let's give let's give
[1:00:07] Alberto a little clap come
[1:00:12] on that's been star s and live Game Dev
[1:00:15] making ship up number four uh this was
[1:00:18] Alberto patrono P patronio jeez robberto
[1:00:21] petronio on the on the keys doing the
[1:00:23] work that's been Dan McCabe uh doing all
[1:00:26] the talking and taking all the credit
[1:00:27] and I've been
[1:00:29] Jared I'm your host who uh at the end of
[1:00:33] every week goes back to the other
[1:00:34] building and ask if I still have a job
[1:00:37] uh thanks for watching we'll be back
[1:00:39] next week with another Star Citizen live
[1:00:40] I don't know what it is yet and if
[1:00:42] you're waiting for insight Star Citizen
[1:00:44] that Returns on July 20th uh we're in
[1:00:48] the process of filming a bunch of shows
[1:00:49] for that now uh can't wait to show you
[1:00:52] as we approach uh a pretty important
[1:00:55] milestone for inside Star Citizen um uh
[1:00:58] coming up uh did I say July 20th I meant
[1:01:01] um June
[1:01:04] 20th what month is this June June I
[1:01:08] meant June not July feels like December
[1:01:11] nobody ever looked at Jared hucky and
[1:01:13] said that guy knows what month it is uh
[1:01:15] so thanks for watching take care uh and
[1:01:18] we'll see you next week everybody bye
[1:01:20] bye
[1:01:24] guys for

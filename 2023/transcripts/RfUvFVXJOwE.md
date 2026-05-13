# Star Citizen Live: Mining, Salvage, Tractors, OH MY!

**Video:** https://www.youtube.com/watch?v=RfUvFVXJOwE
**Date:** 2023-05-05
**Duration:** 1:05:16

## Transcript

[00:04] foreign
[00:08] this week and there's just gray spray
[00:10] paint like how do you get spray paint
[00:13] off your hands
[00:17] no because that would have worked
[00:20] hi everybody uh welcome to this week's
[00:23] episode of Star Citizen live uh Mining
[00:26] and Salvage and tractor beams oh my I'm
[00:29] your host uh creative content lead Jared
[00:31] Huckabee I almost stumbled on my own
[00:33] title there again and if you've never
[00:35] seen Star Citizen live before that's
[00:36] where we take about an hour out of the
[00:38] end of our week and we invite our devs
[00:40] onto the show uh to chat uh their work
[00:44] on Star Citizen they're sometimes their
[00:46] history uh getting into the industry as
[00:49] soon as it's just to get to know you
[00:50] thing sometimes we do a Game Dev thing
[00:52] where you see how they how they make
[00:53] stuff and sometimes we answer your
[00:55] community questions uh on the show this
[00:58] week we have uh two folks who probably
[01:00] need no introduction but we're gonna do
[01:02] it anyway uh the uh uh uh
[01:06] I was trying to think of a real fun I've
[01:08] got the Kings coronation on my brain
[01:10] here let's go to the kings of of eupu uh
[01:13] Dan truffin and torson Lyman Dan torson
[01:16] how you doing
[01:18] I'm fine hey you're doing good
[01:23] I said it we were joked like oh yeah
[01:25] that's right I'm talking to frankfur
[01:26] folks how you doing fine
[01:28] fine no that's right
[01:30] um Dan torson because every show is
[01:32] somebody's first show uh let's take a
[01:35] few moments to introduce yourselves uh
[01:36] tell everybody who you are and what you
[01:38] do for Star Citizen
[01:42] um hi I'm Dan truffin I'm the assistant
[01:44] design director for pu content and I
[01:48] oversee a lot of the new work that's
[01:50] been done for pyro but not only the
[01:53] content side I also oversee the upu team
[01:56] which Thorson
[01:58] can talk a bit more
[02:00] okay tourism hello I'm to Austin I'm a
[02:04] lead system designer for the eopu team
[02:08] and uh yeah the eopu team is basically
[02:11] responsible for like most of the
[02:14] industrial gameplay Loops that we have
[02:17] in our game
[02:18] so as a
[02:20] as an expansion on that the you your
[02:24] teams are responsible for the gameplay
[02:26] features the the the functionality of
[02:29] mining the functionality of Salvage the
[02:32] functionality of tractor beams and stuff
[02:34] and then that goes on to other teams
[02:37] like the mission feature team or or or
[02:39] or other sandbox teams like sandbox one
[02:42] sandbox 2 or the Montreal team I think
[02:44] and they create missions and specific uh
[02:47] gameplay content to do in the processing
[02:49] Universe with the tools and the features
[02:52] that you your you and your team create
[02:55] and provide
[02:56] they basically we create these uh
[02:58] sandbox systems that then get well
[03:01] utilized in in those defined gameplay
[03:04] scenarios that are then like missions or
[03:07] any other content setup yes so just a
[03:09] bit oh God then
[03:11] sorry uh the flow kind of goes where the
[03:14] the feature teams create a feature and
[03:16] they try to open up a few hooks for the
[03:18] mission guys uh and uh then the mission
[03:21] guys come back and go hey could we also
[03:23] get some extra functionality here and
[03:25] they try to build the mission and the
[03:27] mission feature team builds a mission
[03:28] module that's being can be used in
[03:31] combined with other Mission modules to
[03:33] create content and they build the
[03:35] initial content and then the mission
[03:36] content guys take that over and build
[03:39] they go wide and build a large amount of
[03:43] missions using all of this well
[03:45] everything everyone has built in this
[03:46] chain so to drive the sandbox metaphor
[03:50] right into the ground your team is the
[03:52] one that puts the the shovel and the
[03:54] rake and the pail in the sandbox and
[03:56] then the other teams come in and take
[03:57] those things and build the castles and
[04:00] stuff out of it
[04:01] I think that's correct yeah sandbox
[04:04] do people do kids plan sandboxes anymore
[04:06] like do they have sandboxes at parks
[04:09] anymore or are we just really old
[04:11] they they do I have a neighbor of kids
[04:13] that that's just that old dating screen
[04:17] uh so yeah so we're going to talk over a
[04:20] couple things that uh the EU pu team uh
[04:23] has worked on uh some they some that
[04:25] you've been iterating on for quite some
[04:28] time uh others that you know are
[04:30] relatively new like Salvage I want to
[04:31] start with mining now way back when we
[04:35] did a uh we did what we thought was
[04:38] going to be our last ISC piece on mining
[04:40] for a while like yeah mining was set you
[04:42] know it's it's done we're really happy
[04:43] where it was and then uh about a year
[04:46] later we're like nope we're doing more
[04:47] updates that are coming in the upcoming
[04:49] Alpha 319 which is currently in wave one
[04:52] or two PTU testing right now
[04:55] um what was what was our
[04:57] what pulled us back into mining when we
[05:01] thought we were out for a while
[05:04] but one of the main aspects was actually
[05:06] the the community feedback that we
[05:08] received and that was pointing out that
[05:11] we were lacking some content especially
[05:13] for for bigger groups and uh
[05:17] like the
[05:19] mining in a mall in the in our
[05:22] multi-crew mining ship wasn't fun
[05:23] anymore and uh like there wasn't a real
[05:26] challenge even though that we thought
[05:29] back then that uh like money could be in
[05:32] particular situations especially for new
[05:34] players a bit more challenging and uh
[05:37] yeah we we learned the quick way that we
[05:41] were a bit off with with our assumptions
[05:44] there and uh
[05:45] yeah basically a made us rethink some of
[05:48] the the decisions we made with Mining
[05:51] and basically led us back at least
[05:54] uh to the drawing board not from the
[05:57] like actual gameplay or the like the the
[06:00] main gameplay that you're seeing but
[06:03] more on the balancing side so basically
[06:06] the mining that you will find now in 319
[06:08] is a
[06:09] it's not comparable to the mining that
[06:12] you that you knew from from 380 and
[06:15] before yeah that's yeah a lot of the
[06:17] feedback I'm already seeing from on
[06:19] streams and on YouTube and uh in uh
[06:22] spectrum is that you know people are
[06:24] getting in there and besides a bunch of
[06:26] the performance improvements that you
[06:28] know that improve the overall 319
[06:30] experience from what's currently on 318
[06:32] live service uh there are a lot more
[06:34] opportunities with mining uh more ways
[06:37] to customize your money your minable
[06:39] experience uh some of that has to do
[06:41] with you know the tractor beam stuff
[06:42] that we'll get into in a little bit but
[06:45] uh because we haven't talked about
[06:47] What specifically is in 319 right now uh
[06:50] can you give us a rundown of the mining
[06:54] improvements I know I I I realize I'm
[06:56] halfway through the question and I'm
[06:57] like I should have really like told them
[06:58] to have the Confluence page up and
[07:00] running you know so I didn't have to
[07:01] pull all this stuff out of his head but
[07:02] what sum it up for us what what what
[07:05] does change in 319 for mining
[07:08] okay the short version is everything
[07:12] [Music]
[07:14] but um yeah let me so I will probably
[07:17] forget some things because the list is
[07:19] actually quite
[07:20] bigger than
[07:23] than I was imagining like because I I
[07:26] wrote even the uh the the summary for
[07:30] our life experience team what actually
[07:32] changed and that this got bigger than I
[07:34] expected you know to be honest but yeah
[07:36] let's let's start with uh the resources
[07:39] I think that is the the biggest change
[07:42] because it not only affects the mining
[07:44] itself but it also has an impact on
[07:45] trading uh because right now resources
[07:49] are have
[07:50] resources have distinct locations in
[07:53] Stanton that means uh we defined now uh
[07:57] seven uh standard materials that have
[08:01] seven different locations or that can be
[08:03] in the combination of those in those
[08:06] locations and those standard materials
[08:08] or those standard resources you only
[08:10] find in those particular locations for
[08:13] example a standard is uh copper and iron
[08:17] so those who will only find in dedicated
[08:19] locations throughout Stanton
[08:22] and uh in addition to that we introduced
[08:25] uh Rarity to some resources and those
[08:29] are uh yeah we have a common one we have
[08:32] uncommon one and we have one rare one
[08:34] which is a quintanium
[08:36] so those are now more
[08:39] more sparse in in its General
[08:42] or appearance and uh yeah so that is
[08:46] like the the the thing that you will
[08:49] notice at First Sight uh another thing
[08:53] that is more hidden behind is that each
[08:55] resource now has its distinct density so
[08:58] that means that uh even though the the
[09:02] rocks look very similar in size in
[09:05] comparison to before they will have now
[09:07] drastically different masses so heavier
[09:10] elements will have a huge impact on the
[09:14] the mass of the Rock
[09:15] and uh yeah that that actually helped us
[09:18] a bit because that
[09:20] um
[09:21] made certain materials now more uh
[09:25] like more viable for for bigger ships or
[09:28] bigger lasers While others are now
[09:31] um better suited for for smaller ships
[09:34] or single player ships and smaller
[09:37] lasers so that that was already a big
[09:39] win for us
[09:42] um in addition to that we also
[09:44] introduced a new minor bill that is
[09:45] called generalite that is something that
[09:49] we introduced for FPS mining solely
[09:52] and it's located in the new caves so um
[09:56] yeah basically we wanted to make a
[09:58] mining outside of prison more attractive
[10:00] and now we have this super rare uh
[10:03] minable there that will earn you a
[10:06] fortune if you find it
[10:08] and uh
[10:10] yeah on the resource side not only did
[10:12] we update the
[10:14] distribution of the the standard
[10:16] materials and the materials in general
[10:18] we also adjusted all the probabilities
[10:20] of each of the sub elements and now they
[10:24] are no more well for us we have a better
[10:28] overview of what resources are where but
[10:31] uh for for players is like I think more
[10:35] of a
[10:36] yeah I think it's it's more fun to
[10:39] actually look for certain materials than
[10:40] it was before also we'll have to
[10:43] discover
[10:44] and I have to discover a completely new
[10:46] it's a completely new distribution and
[10:49] this it might be annoying or exciting
[10:51] depending on everyone's perspective on
[10:53] life
[10:55] one thing I wanted to add is one thing
[10:58] that uh we definitely add and I hope
[11:00] this helps is a lot of improvements on
[11:03] the mining UI and ux yes so there's
[11:06] there's a lot of small little things
[11:08] that just added together they just make
[11:11] it more user-friendly they make make it
[11:13] easier for a beginner to understand
[11:14] exactly what's happening why is it
[11:16] happening you know
[11:18] oh
[11:20] on the resources there is even things or
[11:22] rule sets that are still uncovered so I
[11:24] leave it up to the community or to
[11:26] uncover those rule sets because there
[11:29] might be some things that would help you
[11:31] to look for for certain materials
[11:35] more targeted
[11:37] um yeah but but that's all for for the
[11:39] resources then already talked about the
[11:40] UI changes so actually a shout out to to
[11:43] a person that is like ruling all our UI
[11:46] work in our team that is bastia so
[11:48] Bastian did a an amazing job uh with all
[11:51] the UI work that
[11:53] that we now have done uh for for the
[11:56] update
[11:57] yeah so for the UI we as then stated
[12:00] it's no more user friendly so we have
[12:02] clear indicators for what what you
[12:05] actually have equipped we now have uh
[12:07] dedicated helper that tells you if you
[12:10] should actually try out the work that
[12:12] you are facing or you should call in a
[12:14] friend because it says impossible and
[12:17] impossible means impossible for for your
[12:20] current setup so you definitely will
[12:22] need some help there
[12:24] and uh
[12:26] you know one one I think that I forgot
[12:29] it's actually a huge list like one more
[12:31] thing I forgot is that we now have even
[12:33] different scaling uh for for the
[12:35] resources so uh beforehand we had very
[12:39] limited scaling for for the size of the
[12:41] Rocks you find on on uh on those planets
[12:44] uh so now you even if you're lucky you
[12:47] even find like those little
[12:49] nuggets that that you don't even have to
[12:52] break you can just scoop them up and
[12:54] like so even if you were unlucky and
[12:57] didn't have the matching uh mining heads
[12:59] equipped uh you at least got away with
[13:01] with something and that directly leads
[13:04] to the the next big update which is the
[13:06] mining heads
[13:08] so what we did there is
[13:10] if we basically started from scratch so
[13:13] um we mapped out uh
[13:15] all the the resources and
[13:18] um defined their own individual
[13:21] parameter meaning like each resource has
[13:23] their own uh way of affecting the
[13:26] resistance and their own way of
[13:29] affecting the optimal window or the
[13:31] instability and all those parameters
[13:33] that you know from the mining ads and we
[13:37] mapped that against the the mining ads
[13:39] and then what we did was uh made some
[13:42] values exclusive for some of the sub
[13:45] items and basically did a full cleanup
[13:49] of the all the items that we had and
[13:53] then mapped a certain type of
[13:54] combinations and the mining Edge towards
[13:57] those properties of the resources so
[14:00] what we did is have one mining ad where
[14:04] we
[14:05] on our Excel sheets calculator but this
[14:08] these will work better with certain
[14:12] resources While others won't have such a
[14:16] benefit there
[14:17] doesn't mean that they won't work but uh
[14:20] so yeah it will be like more
[14:24] challenging for players with certain
[14:26] laser combinations to crack open uh yeah
[14:29] certain certain type of rocks
[14:32] uh and I'm going to interject here uh we
[14:36] we made it about 13 minutes into the
[14:38] show before the common question comes in
[14:40] uh Tom go and meet me at camera too
[14:44] hi Sirius it's really your name in
[14:48] twitch shittiest was the first person to
[14:50] ask if this show was live uh no it's not
[14:53] it's pre-taped and I just knew you were
[14:56] going to ask I can also see through the
[14:58] screen into your room and it's time to
[15:01] throw away all those caffeine-free Diet
[15:03] Coke cans
[15:06] okay
[15:07] uh you have to sit we have to sit next
[15:10] time with a newspaper here I don't know
[15:12] there's always there's always somebody
[15:14] every show
[15:15] um so with mining uh before we move on
[15:18] to stuff uh let's talk so let's let's
[15:20] that's what we're doing for 319 a little
[15:23] bit about what we're doing 318 obviously
[15:25] not a comprehensive list because I
[15:27] pulled the question out without
[15:28] preparing you and you didn't have the
[15:29] conversation the comprehensive left
[15:31] that's that's on me uh can you give us a
[15:33] little bit about where we want to go
[15:35] with mining going forward after 319. is
[15:38] this now it for a while or is there
[15:40] something else in the back of our head
[15:41] we already know uh we want it we want to
[15:44] do as our next steps
[15:47] so there are definitely some some next
[15:49] steps that are already planned out uh
[15:52] some but I don't want to talk about yet
[15:55] but others that we can definitely talk
[15:57] about which is uh for crafting and
[16:00] refining
[16:01] uh like this the distribution of the
[16:04] resources helps out drastically to
[16:06] already plan out all the next steps that
[16:10] will as then so nicely always occur
[16:13] mentions it's like we we really want to
[16:15] close out the loop right so you started
[16:18] mining you pick up the resources maybe
[16:20] mining may it be Salvage then you bring
[16:23] it to your Refinery you refine it to the
[16:25] process goods and once you have it in
[16:27] the process Goods you bring it to uh
[16:29] your crafting facility crafting ship
[16:32] crafting whatever and then you create uh
[16:35] the yeah requested items out of them and
[16:39] then you can even like Circle back to
[16:41] like recycling the other Goods that you
[16:44] created and bring them back into the
[16:45] into the loop so yeah this is this is
[16:49] the the ultimate goal
[16:51] and with the current mining update we
[16:54] are one step closer to achieving that
[16:57] while uh yeah we I think we already
[17:00] mentioned it that we are already working
[17:02] on the next steps in our team
[17:04] so um yeah it's an active development uh
[17:09] yeah but now it will not only be so but
[17:13] talking about mining
[17:14] in particular no that that's that's not
[17:17] the end of it and the reason is because
[17:20] there are still some ships missing that
[17:22] uh were announced right and they should
[17:24] have their their own treatment of how
[17:28] how you play mining with those things
[17:31] like they are Indians
[17:33] yeah exactly and I think there's there's
[17:36] also a lot of the things that are going
[17:37] to change exactly as we said we
[17:39] eventually It All Leads to crafting and
[17:41] making our own items out of nothing you
[17:44] start out with nothing with a ship and
[17:45] you get this but it's there's very few
[17:47] there's a few few very interesting
[17:49] things along the way one of the closest
[17:51] things right now are going to be those
[17:53] mining sacks we need to be able to eject
[17:56] collect put into a Refinery process all
[18:00] that or turn into refined materials take
[18:02] that to refining a manufacturing ship or
[18:06] sell it or whatever you want to do so
[18:08] this the the main thing is like we're
[18:10] seeing this as a mining operation we're
[18:12] seeing this as mining refining hauling
[18:15] production crafting manufacturing
[18:18] operation that you can run you can run
[18:21] it with two three people and or you can
[18:23] run it on a full scale where you have
[18:24] whatever 20 Prospectors five Refinery
[18:27] ships three haulers escort for all of
[18:30] them
[18:31] it's all that thing once that ecosystem
[18:33] system starts start starts going you're
[18:35] going to see some amazing operations in
[18:37] Star Citizen all these all these Loops
[18:40] you know connect to form a chain they
[18:42] all linked into one into another into
[18:44] another to basically you know work to do
[18:47] mining is also work that will affect
[18:49] crafting will affect refining and stuff
[18:51] it's all building out uh this way this
[18:54] Industrial Way of Life in the persistent
[18:56] universe
[18:58] pretty much all of these industrial
[19:00] professions are going to feed into some
[19:03] form of refining slash crafting that's
[19:05] that's kind of the the Pinnacle of
[19:06] everything whether you do it for mining
[19:08] where do you do it from salvaging or any
[19:10] other system that's going to be coming
[19:11] down the line whatever picking lovely
[19:14] flowers because they have some oil that
[19:16] you can extract from them and use that
[19:18] to lubricate your machine guns or
[19:20] whatever that's a different so it all
[19:22] fades into this thing where you can
[19:24] produce your own items and create the
[19:26] probably hopefully a very flourishing
[19:28] economy where people trade whatever they
[19:30] produce today with whatever someone else
[19:32] produced so let's let's straight let's
[19:35] flip over to another one of those game
[19:36] Loops that's linked Salvage uh obviously
[19:40] Salvage you know you made its debut in
[19:42] in 3 18 no we're talking about it for so
[19:47] long it's hard to hmm
[19:50] what's how's that going how's the
[19:52] response to that been are you are you
[19:55] happy with it are you content with it or
[19:58] do you do you see nothing but the
[20:00] problems and where you want to go next
[20:02] uh I invite you to be very candid in
[20:04] this well tell me tell me how you how
[20:06] you're seeing Salvage right now after
[20:08] the after its release
[20:11] come on Dan
[20:13] how should I do it I thought I'd leave
[20:16] this one to tourist that's the ski this
[20:17] is this is his baby he started this he
[20:20] brought it to completion I don't I don't
[20:22] want to talk about it from mining I have
[20:24] a lot of things to say because I started
[20:25] it and then Torsten is bringing it to
[20:28] completion but for this one I draw the
[20:30] Thorson
[20:34] so the question was where where we are
[20:37] at with it and how happy we are and I
[20:40] I'm I'm really happy with what what we
[20:43] have and especially with a short time uh
[20:46] that we actually got to to to work on
[20:50] that like yeah I know you all have been
[20:52] waiting for it for quite some time but
[20:53] actually the the the uh
[20:56] you know the the time frame it was
[20:58] thrown at us was quite short so I'm I'm
[21:01] really happy with with what we uh pulled
[21:04] out or what we we achieved in that in
[21:08] that time frame and I think it's
[21:10] I think I mentioned it already at some
[21:12] point that what I like the most about
[21:15] the The Savage that was introduced with
[21:18] 318 so the hull scraping is that it is
[21:20] such a nice contrast to all the other
[21:23] gameplay Loops that we have right we
[21:25] have a very action-based combat or we
[21:27] have an action-based combat we have uh
[21:29] mining that that is very uh now even
[21:33] more than than before but it is uh like
[21:37] challenging in terms of uh itemization
[21:40] planning and preparation and and stuff
[21:42] like that while uh Health scraping right
[21:45] now is uh you you jump into your your
[21:48] vulture or into your reclaimer you drive
[21:51] past some some debris pieces and
[21:55] you can just put on some music and relax
[21:58] and just scrape off their Hull and I
[22:00] think that is this
[22:01] like I think good games are made out of
[22:03] those like a variety of systems that
[22:07] deliver certain
[22:09] deliver on certain demands that you as
[22:11] the player have sometimes
[22:13] yeah you you might have a had a rough
[22:16] days or what you need is just sit back
[22:18] relax and I think house scraping is the
[22:21] perfect Loop for that so yeah I'm really
[22:24] happy with where yet and yeah we what
[22:27] I'm also proud of is that we uh
[22:30] managed to to deliver our first teams of
[22:34] crafting so having that in there with
[22:36] the with the illustrations also a very
[22:38] nice thing to have so it's like already
[22:41] a glimpse for for all of you players but
[22:43] uh yeah that what's to come you touch on
[22:46] something
[22:47] I'm sorry go ahead Dan
[22:49] sorry just wanted to fill in on this
[22:51] it's kind of funny because when we
[22:52] started working on this there was a bit
[22:54] of a clash of ideas which always happens
[22:56] with with anything you're designing uh
[22:59] Thorson was always trying to deliver
[23:01] this more chilled experience just you
[23:03] and your ship in the middle of nowhere
[23:04] just Parts Hall scraping whatever you
[23:07] found and I was like no no it needs to
[23:09] be challenging it needs to explode if
[23:10] you touch a wire or something like this
[23:12] and we're like no no just let's let's do
[23:15] it this way and indeed you need to have
[23:16] the variety if everything explodes the
[23:18] second you do something wrong you're
[23:20] always you always have that tension so
[23:22] it's nice to have the ups and now there
[23:24] will be there will be chances for
[23:25] explosions and stuff like this with
[23:27] other gameplay maybe with other parts of
[23:30] Salvage but uh yeah that it's it's nice
[23:33] to have a mix of everything and I do
[23:35] have to to add to what thorsten just
[23:38] said is like the team pulled off an
[23:40] amazing an amazing feature there were a
[23:42] lot of dependencies on other team and it
[23:44] came at the at the time when a lot of
[23:46] heavy Tech was coming and it's kind of
[23:49] influenced the delivery and they they
[23:52] did an amazing job yeah actually on that
[23:54] before it's forgotten because without
[23:56] the weapon feature team that did the the
[23:58] pre-phase work and the VFX team that
[24:01] pulled out like the the amazing damage
[24:03] map work that was required for that we
[24:05] wouldn't we would be sitting here and
[24:07] talking about this so like also like
[24:10] huge kudos to to the weapon feature team
[24:13] and to to the VFX team but really
[24:15] helped us achieve what what we have now
[24:18] yeah if if for for backers who who were
[24:22] used to Mining and exploding and dying
[24:24] uh you can send your letters to Dan
[24:26] treffen care of fat and pyramid games
[24:29] I don't know the new address I used to
[24:31] know the old address and I realized that
[24:32] you have the new the new address there I
[24:34] don't know it
[24:35] um first I want to touch on something
[24:36] that you touched on there's a
[24:39] there's an there's a misconception that
[24:41] applies to everything that that you
[24:44] touched on that when from the moment we
[24:48] say oh this is something we want to do
[24:50] that it must be an active development
[24:52] that all things are into active
[24:55] development at the same time
[24:57] um because we've been talking about
[24:59] salvaging for years and years and years
[25:01] that's not the same as you have had the
[25:03] resources available to you the schedule
[25:06] available to you and you and your people
[25:08] to actually work on it which like you
[25:11] said it was a relatively short window
[25:13] for this first iteration there and I
[25:15] just want to I want to mention that that
[25:17] phenomenon can be applied to every
[25:21] single aspect of Star Citizen it's when
[25:24] you saw your first jump points at
[25:26] citizen con 2019 jump points have not
[25:29] been in continuous development for the
[25:31] last four years the first time you saw
[25:33] the interior of the whole sea which has
[25:35] recently been added to the 320 Outlook
[25:40] um that has not been in continuous
[25:41] development for the last several years
[25:43] and stuff so I just I want to encourage
[25:44] people to utilize the resources uh the
[25:48] public roadmap which is overseen by uh
[25:50] you know uh Community manager Jacob
[25:52] capella who does a great job there not
[25:54] just the release view but the
[25:55] development view uh is probably your
[25:58] best way to see whether something is in
[26:00] active development or not sometimes it
[26:04] still falls out because sometimes things
[26:06] change and we don't up get the website
[26:08] updated quite as frequently no fall
[26:10] through Jake acapella just it's a big
[26:12] hairy machine with a thousand people
[26:14] across five Studios
[26:16] and then also the monthly reports uh the
[26:19] monthly reports that go up on the barber
[26:21] space industries.com website is another
[26:23] fantastic way to keep informed of the
[26:25] things that are in
[26:27] active development so if you're if
[26:29] there's a lot of uh we see a lot of
[26:32] comments and I'm going to get a little
[26:33] personal here so bear with me Dannon
[26:35] Tristan uh when folks in uh on the
[26:40] YouTube or the redditor Spectrum you
[26:42] comment on inside Star Citizen for
[26:43] instance like why are why are they not
[26:45] talking about this or whatnot the answer
[26:47] is almost always it's not in active
[26:50] development right now or if it is in
[26:52] active development it's not
[26:54] at a point where it's changed enough
[26:56] from the last time you see it you've
[26:58] seen it in order to show it to you again
[27:00] uh and or it's just it's not far enough
[27:03] a long period and we want to wait until
[27:05] it can we can present a more uh visually
[27:09] appealing and a sustainable uh story to
[27:13] you than uh earlier days and stuff so
[27:16] there are always many factors that go
[27:18] into it also sometimes it's just you
[27:20] know persons on vacation or person's
[27:21] over here and they're not unavailable or
[27:23] whatnot so there's always many factors
[27:24] but I encourage you to utilize the uh
[27:28] development tracker uh uh aspect of the
[27:31] public roadmap not just the release View
[27:33] and those monthly reports they're going
[27:35] to be your best best best best tool to
[27:38] know what is currently in active
[27:40] development and then ISC kind of comes
[27:42] at the end of of all that because you
[27:45] definitely want to show stuff we have a
[27:47] show where we just talk that's this one
[27:49] but I assume we want to we want to be
[27:51] able we want to make sure those things
[27:52] are far enough along to show whenever
[27:54] possible
[27:55] um
[27:57] so Salvage where do we want to go with
[28:00] this uh we know munching is is in our
[28:03] future uh talk to me about where we want
[28:06] to take munching what's next for uh
[28:09] whole scraping uh what can you tell us
[28:11] Thorson
[28:13] so high scraping for now is uh I want to
[28:17] say on the rest but that's not entirely
[28:19] true because it will be attached once we
[28:21] or why we are working right now on the
[28:23] munching aspect so some improvements
[28:25] will come uh with our munching release
[28:28] that will also affect the hull scraping
[28:31] part of it
[28:32] but uh yeah so the next step for Force
[28:36] which was uh yeah what was released
[28:38] right now in 319 which is the the item
[28:41] stripping so that is already a huge step
[28:44] forward for for the Savage gameplay look
[28:46] and I think it was even one of the
[28:49] most requested most weighted for however
[28:54] you want to phrase it but but like I I I
[28:56] personally am really happy about it
[28:58] because it ties in really nicely with
[28:59] all the features that we internally work
[29:01] on
[29:02] uh so it the the Synergy is really
[29:04] really nice with with uh like even with
[29:08] refueling in the end because you can
[29:10] switch out your your fuel pods uh
[29:13] there are still things that we need to
[29:15] do there right so um it was already
[29:17] called out in several points on Spectrum
[29:21] or in other in our community videos or
[29:24] from in other channels that there's
[29:26] still a lot of things that we need to do
[29:29] to make it work perfectly we are aware
[29:31] so and we are working on that
[29:34] um but yeah then the next big step and I
[29:36] think that will be the the most fun and
[29:38] I'm personally looking forward the most
[29:40] to that is actually the munching so yeah
[29:43] like every reclaimer owner will be happy
[29:47] to actually be able to use their their
[29:49] Claw at some point on on any debris ship
[29:52] and uh but not only is it important for
[29:55] for those ship owners but it's also
[29:57] important now with PS so I think that is
[30:00] I think that is even more important than
[30:02] any any gameplay right now we need we
[30:05] need cleanup and there is no better way
[30:08] to to clean up than uh to gamify it and
[30:12] then like have it rewarding
[30:15] in the sense of yeah you you destroy the
[30:18] ships it's fun to destroy those ships or
[30:21] those debris pieces and then you convert
[30:23] them into resources and then you are
[30:25] either either able to sell those for for
[30:28] like just profit or you use the
[30:31] resources together for for crafting them
[30:33] coming in the very far future
[30:35] so this is a sorry one one thing uh this
[30:40] is an important uh it's not a shift in
[30:42] mentality it's a good mentality that
[30:44] I've always had but I think it's it
[30:46] shows especially with PES yes we filled
[30:49] up the universe with a lot of wrecks and
[30:52] a lot of junk but what we're doing right
[30:53] now we're we're starting to introduce
[30:55] the gameplay that's going to clean it up
[30:57] and munching is just one of things we
[30:59] know there's a big mess happening on the
[31:02] space stations on the landing zones so
[31:04] we will be introducing systems that also
[31:06] will tackle that but we don't want to
[31:08] just have yeah just clean it up faster
[31:10] just to remove it and Destroy basically
[31:12] PS what we're gonna do is involve the
[31:15] player into it location it's cleaning
[31:18] then the players will will have a chance
[31:21] to do that and gain some rewards from
[31:24] that yeah so you're both you'd say
[31:26] you're both are really looking forward
[31:27] to munching
[31:30] you both like stripping there's nothing
[31:32] wrong with stripping but you're really
[31:34] looking forward to munching
[31:36] so I cannot talk about it that's in
[31:39] detail about uh I I'm I'm really really
[31:42] looking forward to to this yeah if you
[31:44] had to pick munching or stripping
[31:49] machine
[31:51] for the upcoming
[31:59] me camera too
[32:04] all right uh
[32:09] you're watching the last show of disco
[32:11] Lando homie at twitch.tv Star Citizen
[32:14] let's move on to tractor beams uh
[32:16] tractor beams uh getting uh a lot of fun
[32:19] stuff in 319. uh give us the quick
[32:22] rundown for folks who may not have seen
[32:24] last season's ISC on it Thorson
[32:28] uh you can now attach and detach any
[32:31] ship items and some of the internal
[32:34] components with your tractor beam of
[32:37] choice
[32:39] and has that been
[32:42] internally has that been a smooth
[32:45] addition to the game or no exactly
[32:49] not at all especially with like uh so
[32:53] there are several issues that we were
[32:55] facing right so I think the biggest one
[32:57] is actually
[32:58] um how do we get items
[33:00] comfortably out of the inventory and
[33:03] then place them
[33:04] uh
[33:06] on your ships right so your station
[33:08] inventory how do you get the items out
[33:10] of there and then have them accessible
[33:12] so that was
[33:13] and there we had a lot of painful uh
[33:16] sessions like when I was talking about I
[33:18] think in our last ISC that yeah we had
[33:20] the the Cutlass back repaired with
[33:23] prepared with with all the mining heads
[33:25] in there yeah yeah we can do that we can
[33:28] cheat and we can spawn items we don't
[33:30] have to do the the annoying part of
[33:33] actually equipping one of your ships and
[33:35] then like pulling the items off and then
[33:38] um
[33:39] yeah so so this is this is something
[33:42] that we uncovered and but yeah I think
[33:44] that the most drastic one is which which
[33:45] I'm
[33:47] yeah me as a player I'm really like not
[33:51] so happy about this decision but me as
[33:53] as sitting here with my cig hat on it's
[33:57] like I think that's the only decision we
[33:58] could come up with is uh deactivate
[34:01] instructor beams again in the green
[34:02] zones because uh
[34:05] I think in one of our earliest
[34:07] Fleet Week test sessions we had players
[34:09] like basically ripping out all the items
[34:12] and the entire fleet week Hall was just
[34:14] like
[34:15] uh impassable because like everything
[34:18] was lying around and yeah that that's
[34:20] not fun for players right because that
[34:23] also adds to yeah
[34:25] like even though you couldn't even carry
[34:28] out the the big weapons out of through
[34:31] the elevator out right so it didn't even
[34:33] have a benefit of it it was just like
[34:36] bringing Havoc to the world and making
[34:37] everyone else lives miserable so yeah we
[34:41] had to jump in and
[34:43] uh come up with this temporary solution
[34:45] and uh yeah deactivate the tractor beam
[34:48] in the green zones but yesterday we
[34:50] reactivated at least again in the
[34:52] hangars so there was yeah so shout out
[34:55] to to Yahoo who just did jump in and did
[34:58] a quick fix for that so yeah now it was
[35:02] a I think people were going into the
[35:04] showroom and pulling the components out
[35:07] of the display ships
[35:09] is that what I saw
[35:10] yeah yeah
[35:12] like it's like even from the display
[35:14] stands uh shops were insecure anymore
[35:17] like you could tear apart every shop and
[35:20] every every item in every shop and uh
[35:23] yeah also because in Fleet week we
[35:27] always allow you to enter those ships
[35:28] and like
[35:31] like figure out or like explore the
[35:33] ships that you don't own and that also
[35:35] means you can sit in their pilot seat
[35:37] and then you can because a crucial
[35:40] aspect of the tractor beam functionality
[35:42] is that you first have to unblock the
[35:44] items so that we don't have players
[35:46] grieving one another and just basically
[35:49] tearing your ship apart while even
[35:52] though you don't want it
[35:53] so in the fleet week you could sit in
[35:55] the pilot seat unlock the items and then
[35:56] like
[35:58] basically strip it strip every item away
[36:02] and then uh have another person that
[36:05] come in and then like why does the ship
[36:08] look so empty so yeah it's not as bad as
[36:10] our as bad as our first and uh uh uh iae
[36:14] where somebody actually started a ship
[36:16] and flew it through the convention
[36:18] center
[36:19] and I was like oh you can you can you
[36:21] can actually fully power these on and
[36:22] fly them okay that's a problem
[36:25] says this is this is what we always do
[36:27] we we add new things into a very complex
[36:31] environment and set of systems and there
[36:33] will be some point of failure and then
[36:35] we we look at those we try to fix them
[36:37] with the with the tractor beams kind of
[36:39] being used usable in in green zones uh
[36:43] there will have to be some updates to
[36:45] the law of the place that needs to
[36:48] support some things this torson said the
[36:50] the shops will need some updating this
[36:52] is what always happens you you you try
[36:56] something and then you realize there's a
[36:59] lot of things that get started in motion
[37:01] with emotion it's an avalanche and then
[37:03] you have to kind of
[37:05] get all the pieces fixed and that's
[37:07] because we build everything systemically
[37:09] though we we build everything to to
[37:12] function has no unscripting here exactly
[37:15] all is functionally and diegetically
[37:18] within the universe as possible so that
[37:20] those mysterious interactions are what
[37:23] generate you know uh
[37:25] emergent gameplay but they also generate
[37:28] a lot of the oh okay we're going to need
[37:30] something to you know address that
[37:31] turning them off ingredients is a
[37:33] temporary thing but yeah it's it's
[37:35] always emerging gameplay for for the
[37:37] players and headaches for us yeah we
[37:40] we'll get them done and we'll we'll move
[37:42] on to the next one
[37:43] so uh we're going to take a real short
[37:46] break here uh when we when we get back
[37:49] we'll get to some uh backer questions uh
[37:51] from Spectrum so stay tuned we'll be
[37:53] back in a minute I'm going to check my
[37:54] email
[37:57] [Music]
[38:15] thank you
[38:17] [Music]
[38:48] please
[38:52] [Music]
[39:07] foreign
[39:19] [Music]
[39:29] yes but I mean it is stripping and
[39:33] munching
[39:34] they didn't make anything up
[39:37] that's what they're working on
[39:42] okay
[39:45] love you too Chris bye
[39:48] all right so we're back and uh we're
[39:52] still here with dandruffin and torson
[39:53] Lyman talking about uh Mining and
[39:56] Salvage and tractors oh my at this point
[39:59] we put up a thread earlier in the week
[40:01] uh when I say earlier I think it was
[40:03] like actually yesterday open Spectrum to
[40:05] collect questions uh so we're going to
[40:07] pull some we're gonna pull some of the
[40:08] questions from the thread uh starting uh
[40:11] with uh no stranger to Star Citizen live
[40:15] a salty Mike who reads who wrote rather
[40:18] what are the plans on making the item
[40:20] Port flow much simpler than the current
[40:23] travel to armistice
[40:25] and remove items that and repeat for
[40:28] mining
[40:29] all right what are the plans on making
[40:30] the item Port flow much simpler than the
[40:32] current travel to Armistice and remove
[40:33] items and repeat for mining this is a
[40:35] key part of the new experience and it is
[40:37] severely hindered by the current item
[40:39] and inventory system
[40:42] so we cannot fix it for all the items
[40:44] right now but so we already have
[40:48] at least so today we got it internally
[40:51] working that you can move the at least
[40:55] the sub items for for the mining ads
[40:57] more Comfort the out of your station
[41:00] inventory onto the ground pick them up
[41:03] carry them
[41:04] and bring them over to to your ship but
[41:07] there are some some issues that we still
[41:08] have to solve so and uh
[41:12] once we get that sorted we will probably
[41:15] push it out but for the the other items
[41:18] especially for the bigger ones it's more
[41:20] complicated because
[41:24] um yeah there is no way right now even
[41:26] with the the tractor being deactivated
[41:28] in the green zones uh to prevent players
[41:31] from messing up your your spaces or even
[41:33] the the stations right so if you have uh
[41:36] like a giant uh Power Plant and you just
[41:38] drop it in Grim hex you could basically
[41:41] block away all the a sub Terminals and
[41:43] then no one would access that be able to
[41:45] access them because tractor beams won't
[41:47] work you cannot push them around and uh
[41:50] yeah so this is definitely not something
[41:52] that we can do for with all the issues
[41:55] that we pointed out with the tractor
[41:56] beam being activated in the green zones
[41:58] so sadly we cannot do that but also we
[42:02] want to do it right which means that we
[42:06] are dependent on the parade elevators
[42:07] because the freight elevators basically
[42:09] the proper
[42:12] uh
[42:13] connection between your your virtual
[42:16] inventories and your real space right
[42:18] because like pulling something out of
[42:19] thin air is weird yeah put it this way
[42:23] so you you definitely want to have the
[42:26] the freight elevators there
[42:29] uh next question is from Luxor uh uh
[42:35] caterpillar owner how will Hull mounted
[42:37] tractor beams like on the caterpillar be
[42:40] able to move cargo inside the ship
[42:42] considering the tractor beam is located
[42:44] outside of the ship and away from the
[42:46] cargo hold
[42:48] yeah we are aware of those so um we are
[42:52] working on uh also the vehicle side of
[42:54] the tractor beams and uh yeah those
[42:57] those need to be updated
[42:58] simply that's that when you say updated
[43:00] you mean the tractor bean locations
[43:01] moved
[43:03] um so we talked to to the vehicle team
[43:06] about that and uh they had to do
[43:09] especially for the owner ships they need
[43:12] to look into the tractor beam setup more
[43:15] thoroughly than just for for the newer
[43:18] ships so yes they there might be some
[43:20] some updates on the actual item position
[43:23] for those two
[43:25] like work actually properly with with
[43:27] the system right because the tractor
[43:29] means at present are very line of sight
[43:31] so you wouldn't want to be weird at the
[43:33] being like curved and turned and yeah
[43:38] it's a is the standard thing we do with
[43:40] the with all our ships we we release
[43:43] them and then the systems come online
[43:44] and we have to rethink a few things if
[43:46] people remember the prospector used to
[43:48] have this laser that was pointing
[43:49] downwards right yeah we just had to we
[43:52] just had to adjust based on the system
[43:54] and eventually it all works out things
[43:57] are built with the best information we
[43:59] have at the time and exactly so
[44:02] uh let's see Optimus no Knievel there we
[44:07] go uh will we be able to buy empty
[44:09] mining bags and also drop them from
[44:12] inventory to easily attach and trade uh
[44:15] the question about dropping items also
[44:17] applies to mining lasers mining
[44:18] components and other similar objects
[44:20] there were a lot of questions in the
[44:21] thread about mining bags
[44:25] so dropping no but using the freight
[44:28] elevator to pull them out and then using
[44:31] them or storing them in their cardboard
[44:33] yes because as described we don't want
[44:36] this
[44:38] magic appearance of items so we really
[44:41] want to wait for the proper system which
[44:43] is the freight elevator to pull out
[44:45] those entities into the real world
[44:49] when you're saying drop them from
[44:51] inventory you don't want to pull them
[44:53] out of
[44:54] imagining everything yeah right right
[44:56] yeah okay yeah
[44:58] uh they will definitely drop from the
[45:01] ship so once you fill them in your
[45:03] perspective you'll be able to drop them
[45:04] in a Refinery with a tractor beam or
[45:06] just pick them up take them empty them
[45:08] we find them drop the empty one you pick
[45:10] it up and put in your perspective song
[45:12] how about that that should already work
[45:15] right so you can already detach uh the
[45:18] uh the mining sex uh from from the
[45:21] prospector and the more you can already
[45:22] put them on the cargo grips sadly so
[45:25] this is also something that we are
[45:27] actively working on is making them
[45:30] detectable by the commodity stores so
[45:33] that you can sell it but also for the
[45:35] refinery so that you place them on
[45:38] someone else's ship and then fly to a
[45:41] Refinery and that person then is able to
[45:44] start the refining process for the
[45:47] prospector owner so that's also
[45:49] important to us that it's not only
[45:51] uh yeah basically it's all tying in with
[45:54] the group gameplay that members of your
[45:57] group can actually do the same actions
[45:59] as as you would as the owner and then
[46:02] there's there's some ownership stuff
[46:04] with the money bags like you know if if
[46:06] I'm out on my Prospect area and I fill
[46:08] it up and I detach the money bag and
[46:10] give it to somebody else uh there was a
[46:13] time where the other person was getting
[46:15] a crime stat because it was considered
[46:17] stolen goods or it is it owned by the
[46:19] other player can that player now go sell
[46:21] the contents of that mining bag because
[46:23] it's theirs now
[46:25] how is that working how should that work
[46:27] so it should work that every person that
[46:31] you allow to handle the content should
[46:34] be able to handle that content and yeah
[46:37] this is something that we are working on
[46:40] because what we also don't want is that
[46:43] if you're doing Group trade routes and
[46:46] you have to split like the the content
[46:49] of your ship or whatever that it doesn't
[46:51] have one dedicated owner but it can have
[46:53] multiple owners that are valid there
[46:55] okay so a way to designate you know I'm
[46:58] giving the saddle bag full of you know
[47:01] quantinium to this person and it is now
[47:02] theirs and they have full rights to it
[47:04] versus somebody has taken it and now
[47:07] they would be a criminal
[47:08] I think the the first step in this will
[47:11] be to allow party members basically to
[47:13] to share ownership and not get
[47:16] criminally charged or just it's not
[47:19] theft even if you're part of the same
[47:21] group basically and then you know for
[47:23] for the criminals uh you know who get
[47:26] the crime stat for intercepting a
[47:28] saddlebag you know obviously they might
[47:30] have trouble selling it at a more
[47:31] reputable vendor but as new locations
[47:34] come online that are less
[47:37] legally friendly there might be other
[47:39] opportunities for them to sell their
[47:40] Miss begotten Goods
[47:44] of course that is always the plan okay
[47:47] uh uh
[47:50] oh that we literally just answered
[47:51] Optimus is 13. Optimus 13's question
[47:53] we'll be able to skip cell phone my
[47:55] impods another player okay we just did
[47:56] that congratulations us
[47:58] um
[47:59] uh
[48:01] PC 101 says will we be able to use
[48:03] tractor beam in the Armistice Zone again
[48:05] we talked about that so we can skip that
[48:07] uh ehawk says will Hall stripping need
[48:11] to happen first when Sal will Hull
[48:14] stroping need to happen first when
[48:15] salvaging or can you just go straight
[48:17] into hole munching will the hull
[48:19] basically be a blocker to performing
[48:21] munching gameplay or where you just get
[48:23] less RMC if you don't strip the hole
[48:25] first
[48:27] yeah on this one you will completely
[48:29] lose out on the RMC because like
[48:33] yeah well you will at least lose some
[48:35] bits right if if you start the munching
[48:38] process and that will break apart uh
[48:40] your ship there will be like some Hull
[48:43] material will get lost so this is
[48:45] definitely some materials that you will
[48:47] have there
[48:49] I'm sorry do we expect the the munching
[48:52] to provide RMC or would it be like a
[48:54] different resource
[48:55] yeah well so in in our first iteration
[48:59] uh the the munching will not provide RMC
[49:04] but uh for for later once we have
[49:07] actually
[49:08] because the the well the explanation
[49:10] would take a bit longer because what
[49:12] what uh
[49:14] what we actually need to to have the
[49:17] proper materials is the the physicalized
[49:19] materials that like each component the
[49:22] ship made of is aware of which material
[49:25] it is made of right so if you break
[49:27] apart a ship that the piece exactly
[49:30] knows what it is made of and then you
[49:33] munch it and then you actually get the
[49:35] exact components about what it was made
[49:37] of this is something that
[49:40] um is more complicated to do than what
[49:43] we are currently working on currently we
[49:46] will be working on something that is
[49:48] more like it's converts it to a
[49:50] dedicated or defined mix of materials
[49:53] so
[49:54] um we don't know uh yet what the actual
[49:57] part is made of but that will then come
[50:00] once the physicalized materials will
[50:02] come in yeah so uh with that we don't
[50:05] plan to have RC being part of that
[50:08] because we want to leave it like
[50:11] exclusive to the hard scraping but for
[50:13] the future like even RMC as the material
[50:16] might might look a bit different or get
[50:19] a bit more variety into it and if folks
[50:22] who have read the most recent monthly
[50:24] report you'll know that they're
[50:25] prototyping munching uh now so during
[50:29] the pro timing phase anything can change
[50:31] whatever the truth today is can be a
[50:33] different truth tomorrow and stuff like
[50:34] this it's one of the reasons we don't do
[50:36] segments and stories you know too much
[50:38] in the prototyping phase because it's
[50:40] just we like to wait until as many of
[50:42] the details are locked down as possible
[50:44] true you know the only constant game
[50:46] development has changed but we do try to
[50:48] make a threshold you know at least you
[50:50] know get to a certain level of certainty
[50:51] before we start telling those stories
[50:54] um but ultimately what I heard is that
[50:56] it's really important to both strip and
[50:59] Munch whenever possible
[51:02] yes but it's it's not a requisite right
[51:04] you can Munch but you lose some material
[51:07] or some profit it might be with a
[51:09] reclaimer if you have enough things to
[51:11] munch you're just going to skip on the
[51:13] stripping because you just have so much
[51:14] stuff to munch that it's maybe more
[51:16] lucrative but if you have only one wreck
[51:18] then it's worth to squeeze every ounce
[51:20] of
[51:21] resources I'll do that
[51:27] I love my Frankfurt friends
[51:31] ah
[51:32] I I I I I I I hope they still like me
[51:35] after the show
[51:37] um storyal says will the tractor beams
[51:40] be a single focused Beam at ship level
[51:42] or will it be a variable cone with
[51:45] lowering power The Wider we go uh this
[51:48] person clearly wants to like cast a net
[51:50] over an area to see if they can pull in
[51:52] more things at once
[51:55] so uh
[51:58] for now it is a single Target theme and
[52:01] the reasons are more complex as well
[52:03] because we are facing some some
[52:07] like if we would allow the the ownership
[52:10] of the multiple items that will get
[52:12] really complicated with with physics and
[52:15] synchronizing those physics so we
[52:17] decided for now that we will just go for
[52:19] for one target per beam
[52:21] but uh yeah on the on the other side we
[52:25] were talking about like okay how can we
[52:27] utilize the technology that we have with
[52:29] the tractor beam to affect multiple
[52:31] objects so there we are like I think
[52:34] then brought it up at some point this
[52:35] Distortion fields or something like that
[52:37] right
[52:38] okay uh
[52:41] Jefferson okay sorry
[52:43] not not much to say about that right now
[52:46] it's still too early again this is stuff
[52:48] where it's uh at this point it's in I
[52:51] would call it ideation it hasn't even
[52:53] been prototyped yet right so confirming
[52:56] anything at this point would be a bit
[52:58] premature so let's see where we where we
[53:00] get to we'll update as soon as we have
[53:02] more
[53:04] um overseer uh zero five one three here
[53:08] o513 says we have seen the tractor being
[53:10] beat we have seen the tractor beam able
[53:13] to pull off components is there going to
[53:14] be a way to place them into station
[53:16] inventory so we can actually use them on
[53:18] the same line if we cannot pull
[53:20] components out of inventory how are we
[53:22] going to change the mining equipment
[53:25] I think we answered that already yes
[53:29] exactly so the cargo the cargo elevator
[53:31] the hunger cargo elevator is gonna it's
[53:32] gonna offer this functionality you'll be
[53:34] able to pull any item that you have in
[53:36] that station into that hanger through
[53:38] the cargo elevator then put it wherever
[53:39] you want the new ship equip it and it
[53:41] also works the other way around we pull
[53:43] from your ship put it on the cargo
[53:45] elevator goes into the station and one
[53:47] other thing you'll be able to pull with
[53:48] that is uh pull Vehicles so you'll be
[53:51] able to say well I want the ballista on
[53:53] my ship when you pull it with a cargo
[53:55] elevator comes with a cargo elevator you
[53:57] drive it up into your ship and take off
[54:00] we'll move move towards physicalizing as
[54:02] many aspects of the game as possible
[54:04] basically yeah no no more magical
[54:07] teleporting of inventory
[54:09] uh Brighton says will there be weight
[54:12] and volume restrictions on tractor beams
[54:15] and how will size and specialization of
[54:17] the tractor beam affect them
[54:20] yes there will be limits on uh the the
[54:24] mass uh tractor beam can carry that is
[54:27] uh and defined by the the tractor beam
[54:30] size as well as the volume and uh we
[54:33] were even considering like having
[54:35] exclusive uh tractor beams for that they
[54:38] are specialized in in handing cargo and
[54:41] others are specialized in handling uh
[54:44] basically the detaching mode so there
[54:48] are no clear decisions yet on how these
[54:50] exclusive tractor beams might look like
[54:52] or if we even go down that road but uh
[54:55] the the definite plan is yes there will
[54:58] be hard limits on the mass a tractor
[55:02] beam can carry and the volume the the
[55:04] multi-tool right now is just like
[55:07] and we wanted to allow you to play with
[55:10] this feature right and that meant uh we
[55:13] basically make it so overpowered that
[55:15] it's really unrealistic right uh like a
[55:18] tiny gun like carrying several tons of
[55:20] weight is just like yeah
[55:23] fun but but realistic
[55:27] um
[55:28] as far as the step that you get through
[55:29] Salvage are there plans to expand it to
[55:32] Composites glass Metals any other
[55:35] materials
[55:36] and we touched on that already with with
[55:38] yes so once the the physicalized
[55:41] material comes in you will have all the
[55:43] the uh different resources everything is
[55:45] made of sorry I'm clearly losing focus
[55:48] I'm just stuck on munching and stripping
[55:49] right now okay
[55:50] [Music]
[55:52] uh you you mentioned uh you mentioned a
[55:55] big uh part of the of the mining
[55:59] improvements in 319 was wanting to
[56:01] provide more use and viability for the
[56:04] Argo SRV with its multiple beams
[56:08] um
[56:09] this question's from disco Lando can you
[56:12] do anything about the rock DS
[56:14] [Laughter]
[56:18] you don't want an honest answer for me
[56:20] in this one
[56:21] hold on Dear John crew
[56:28] sorry
[56:29] um uh let's see uh
[56:37] one thing I wanted to point out it's not
[56:39] only the the Argo mall right so it's not
[56:41] only we didn't Focus only on the Argon
[56:43] ball multi-crew mining we also had
[56:45] prospector multi-crewing Mining and even
[56:48] multiple Argo Mall mining in mind right
[56:52] so the the
[56:54] there are areas and then where it is
[56:58] more or where it's more viable to have
[57:01] multiple Prospectors versus they are
[57:04] areas in standard where it's more viable
[57:06] to have
[57:07] the more running one running your mining
[57:10] business so no we didn't forget about
[57:13] the solo Miners and no we didn't forget
[57:16] about the solemn one is that from time
[57:17] to time want to work in a group with
[57:19] other solo miners so uh yeah this this
[57:23] is accounted for I know our balancing
[57:24] attack it's not solely on buffing more I
[57:27] I read so fast there is a
[57:31] there was a decision behind that that
[57:33] was
[57:34] basically buffering both ships in their
[57:37] own way or yeah and let's put it this
[57:40] way in different ways
[57:43] uh uh uh we'll have time for maybe one
[57:46] two or three more uh Carl pigeon
[57:50] I'm just gonna call it Carl uh tractored
[57:52] boxes damage the cargo grid whole of
[57:54] ships at an alarming rate when loading
[57:56] even at low speeds uh what can be done
[57:58] to make this contact softer uh less
[58:01] explosive
[58:05] an issue that we have to fix
[58:08] yep
[58:09] it's a bug we're we're researching we're
[58:11] working with the physics guys we're
[58:13] looking into why the the energy happens
[58:15] that it causes all this wreckage it's
[58:19] there's also some problems that come
[58:21] between networking and physics because
[58:23] sometimes there's some synchronization
[58:25] issues and yeah we're investigating
[58:28] we'll get we'll get the bottom of it
[58:30] right so it's not intentional okay so
[58:33] fair so it's not developing a new
[58:35] feature changing the feature it is
[58:36] figuring out what is causing them to hit
[58:38] the pad so hard and yeah just a bug okay
[58:42] uh
[58:43] McGonagall says will the Argo SRV
[58:46] tractor beam be capable of moving
[58:48] Asteroids for multiplayer mining Ops can
[58:51] we tug asteroids together for our party
[58:54] members in the prospector mole
[58:59] so uh right now how how we originally
[59:02] designed uh mining we just made all of
[59:06] our harvestables uh with which minables
[59:09] are part of we made them static and it
[59:12] was the simple thing to do back in those
[59:14] days and I think now we're starting to
[59:16] get to the point where with tractor beam
[59:19] and all these features there is a point
[59:21] in making it uh Dynamic so until now and
[59:25] even right now if you just crash into a
[59:27] fresh minable with your ship doesn't
[59:29] matter if you crush a Bengal carrier
[59:31] that's that rock is not moving but at
[59:35] this point we can start looking into
[59:37] having them movable and there's no
[59:39] reason if you can move if you have a
[59:41] tractor being strong enough to move a
[59:43] ship of that mass or the same mass as
[59:44] The Rock there's no reason it couldn't
[59:46] move that rock uh we've already we've
[59:49] already saw some uh some things
[59:50] happening when the lootable boxes were
[59:53] were tractor beamable so we know there's
[59:57] there's some small problems there that
[59:58] was to need to overcome but it is doable
[1:00:02] so we're probably going to be heading in
[1:00:04] that direction uh I I I I feel like if
[1:00:07] I'm allowed to speak for you I've known
[1:00:09] you and torsion long enough to know that
[1:00:12] if there's a way to make Towing
[1:00:15] asteroids around
[1:00:16] possible and relatively safe and not
[1:00:21] balance breaking something this will
[1:00:23] probably pursue it
[1:00:25] wait until they told them that it really
[1:00:28] ludicrous speeds and they crash them
[1:00:30] into stations just just wait for that
[1:00:32] that is the first thing everyone will do
[1:00:34] is to see whether you can you can bring
[1:00:36] it with you into quantum Let It Go like
[1:00:39] oh yeah
[1:00:40] I I don't I think it's a secret to say
[1:00:43] we want it we want to see what happens
[1:00:44] but uh yeah we'll at least try it okay
[1:00:48] and then uh the last question uh from
[1:00:51] somebody whose name I'm not even going
[1:00:52] to try to pronounce because it has a
[1:00:54] bunch of numbers in it
[1:00:55] um
[1:00:57] is everything going to be a beam
[1:01:00] no no
[1:01:03] we were joking so so I think it wasn't
[1:01:07] the last I see where you asked well we
[1:01:12] are aware of that we have a lot of beams
[1:01:14] in our game that doesn't mean that we
[1:01:17] want it right we also want to have like
[1:01:19] more variety in how like our gameplay
[1:01:24] are visually represented that means that
[1:01:27] we are actively looking into finding
[1:01:30] like interesting ways of of not
[1:01:33] utilizing beams for for the stuff that
[1:01:36] we are working on and
[1:01:38] yeah I can tell you like munching is uh
[1:01:40] is definitely up up there for for not
[1:01:44] using a beam at least for for the
[1:01:45] reclaimer side of it
[1:01:47] yeah it's a a a lot of folks in the in
[1:01:50] the comments we make a joke out of it
[1:01:52] right now but there are plenty of people
[1:01:53] in spectrum and Reddit and so does that
[1:01:55] they understand that you know beam is
[1:01:58] kind of the first and easiest way to get
[1:02:01] it to get a feature into players hands
[1:02:02] to test all you know a whole bunch of
[1:02:05] its functionality to to to start this
[1:02:08] process of development and iterative
[1:02:10] testing and stuff like this but uh yeah
[1:02:12] like Dan said before we want to
[1:02:14] physicalize as much as possible so I
[1:02:16] don't think Beams I don't think I don't
[1:02:18] think there's a version of the game
[1:02:19] that'll ever be devoid of beams because
[1:02:21] beams are all still cool and they're
[1:02:23] very sci-fi uh thing but uh yes as many
[1:02:27] opportunities to physicalize and put
[1:02:29] your hands on things as possible that's
[1:02:31] what the trolleys are for you you know
[1:02:33] people ask why are you putting trolleys
[1:02:35] in when we've got handheld tractor beams
[1:02:37] and stuff like this obviously munching
[1:02:39] freight elevators you know you know
[1:02:41] bring physically bringing stuff up
[1:02:43] instead of you know just dumping things
[1:02:45] into the hangar by beams just we're
[1:02:48] going to look for every opportunity to
[1:02:50] physicalize things whenever possible
[1:02:52] just maybe not in the very first
[1:02:53] iteration because we want to get things
[1:02:55] into people's hands
[1:02:58] am I right am I wrong I feel like I'm
[1:02:59] right oh yeah
[1:03:03] all right it's just I might you don't
[1:03:05] even want to see my team's notifications
[1:03:06] right now uh we're going to the bar
[1:03:09] after the show
[1:03:15] person you've completed another
[1:03:17] successful episode of Star Citizen live
[1:03:19] how do you feel
[1:03:21] good it was a pleasure
[1:03:23] uh thank you for watching uh Folks At
[1:03:26] Home Folks at work uh folks in your car
[1:03:29] Captain Richard you still watching your
[1:03:30] car I don't know maybe just go out there
[1:03:32] just to feel comfortable
[1:03:35] um join us uh next week uh next week's
[1:03:38] inside Star Citizen is our first look at
[1:03:40] content for the upcoming Alpha 320. uh
[1:03:43] we're going to look at uh the new
[1:03:45] derelict outposts that are being added
[1:03:46] to the planets of Stanton uh these are
[1:03:49] these are full-on villages in some in
[1:03:52] some cases all new places for a variety
[1:03:55] of of gameplay and missions and Mission
[1:03:57] content and stuff uh so you're not going
[1:03:59] to want to miss miss that especially
[1:04:01] fond of the uh one of the forest
[1:04:03] locations which you saw uh earlier in
[1:04:05] the show during our intermission uh and
[1:04:07] then we'll be right back here on Star
[1:04:08] Citizen live for our improved new player
[1:04:12] introduction where we'll have Todd Pappy
[1:04:14] on the show and we're basically going to
[1:04:16] take you through the the the the new
[1:04:19] player tutorial that's also coming
[1:04:20] online with Alpha 319 you might have
[1:04:22] seen the updated signage in in our
[1:04:24] corporate ending and we're going to run
[1:04:26] through the whole thing with a developer
[1:04:27] commentary here with Todd and some
[1:04:30] others so come on back for SEO for that
[1:04:33] next week for Dan and for torson I'm
[1:04:36] Jared uh take care be nice to each other
[1:04:40] and
[1:04:42] um I'm sorry for almost everything I've
[1:04:44] said this show
[1:04:46] bye bye

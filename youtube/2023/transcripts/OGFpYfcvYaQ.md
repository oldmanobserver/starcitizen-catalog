# CitizenCon 2953: Fix It And Fly It

**Video:** https://www.youtube.com/watch?v=OGFpYfcvYaQ
**Date:** 2023-10-31
**Duration:** 25:15

## Transcript

[00:18] [Music]
[00:23] hello I'm toon Lyman uh lead systems
[00:27] designer for the EOP team and uh uh
[00:30] welcome to this little presentation of
[00:32] our most ambitious feature uh that we
[00:35] are working on for quite a while already
[00:37] we already talked about it several times
[00:40] but this time it will be a little bit
[00:42] different so before we start jumping
[00:45] into the presentation here's a little
[00:48] disclaimer everything that you are about
[00:51] to see in this presentation was done by
[00:53] the euu team so well mostly we got help
[00:57] from the vehicle content team and the
[01:00] vgpu team so what you will see here is
[01:02] mainly placeholder art that was either
[01:05] done by guo Bas or me so members of our
[01:09] team and it's gameplay that we focus on
[01:12] in this presentation so what you will
[01:14] notice here is also that the UI is still
[01:17] work in progress so uh visual changes
[01:20] even throughout this uh entire
[01:22] presentation so we are still
[01:25] iterating but let's start with the
[01:27] actual
[01:28] presentation those that follow us for
[01:30] quite some time probably know that about
[01:33] the Resource Network already but let's
[01:35] do a brief recap we will be talking here
[01:39] about our technology that is Resource
[01:42] Network and the engineering gameplay
[01:44] that can be called a child of the
[01:47] Resource Network the engineering task
[01:50] will allow you to manage your ships
[01:52] outposts and possibly other
[01:55] things let's have G uh talk about the
[01:58] technology first uh so welcome on stage
[02:04] [Music]
[02:05] [Applause]
[02:05] [Music]
[02:08] G thank
[02:13] you hi everyone I'm Ge mobile B gameplay
[02:16] programmer for this team and I'm going
[02:19] to talk about the reson
[02:21] network so what is the reson network uh
[02:25] the main drive for the resour network
[02:27] was replacing the previous p system you
[02:30] might have heard about with a new system
[02:32] that was uh more generalized easier to
[02:35] expand and that will support all the
[02:37] gameplay we actually want to
[02:39] do and yeah so it is a network as you
[02:43] can see on that picture uh so in the
[02:46] connections between different items even
[02:48] those inside of your
[02:50] containers and it enables a specifically
[02:54] the relay gameplay we're going to S
[02:55] right after so it will have a global
[02:59] impact you're going to see it in sips
[03:00] you're going to see it in Outpost it's
[03:02] bu a to work with the cargo system in
[03:04] some
[03:06] ways and as for interacting with it uh
[03:09] the engineering gameplay where I show
[03:11] today is going to be the biggest example
[03:13] but you will also see it in other places
[03:15] especially in
[03:17] missions and let's have Thorston talk
[03:19] about it a bit
[03:28] more so hello
[03:31] again so as a crew member of a ship or
[03:34] as a person managing an outpost you have
[03:36] several
[03:37] responsibilities um where the
[03:39] engineering topic can be split in three
[03:42] activities and you can decide to share
[03:45] those responsibilities or take them all
[03:47] by yourself it's really up to you every
[03:49] task requires their own skills and their
[03:51] own tool sets there is tuning here you
[03:55] are responsible for preparing your ship
[03:57] your journey did not start yet so so you
[04:00] adjust your ship items based on your
[04:02] goals for the travels exchange sub items
[04:05] adjust the default settings of your
[04:07] power plant basically operations that
[04:10] require you to turn off the items or
[04:13] even remove them from it their
[04:15] sockets the next activity is maintaining
[04:18] and this is all about damage control and
[04:21] keeping the items in pristine or
[04:23] pristine enough
[04:26] State you are the mechanic uh that makes
[04:29] sure that everything is and stays
[04:32] operatable maybe even go further in the
[04:34] sense of caring for the items and what
[04:38] carrying means is here reducing the wear
[04:40] and tear rate by regularly removing dust
[04:44] or oiling the items just as as some
[04:47] quick
[04:48] examples so let's actually show you some
[04:51] of the maintenance you can already do
[04:53] and will be able to
[04:56] do so here we start with two gameplay
[05:00] mechanics that are already in the game
[05:03] so technically nothing new but the
[05:05] entire engineering Loop ties them nicely
[05:08] together uh here you saw me collecting
[05:11] uh RC or still collecting and uh now I
[05:15] will take the shield generator of the
[05:17] recently destroyed Gladius uh to use
[05:19] them as a spare part for
[05:28] myself so all of this is of course
[05:31] optional so you can p purchase those
[05:33] items already and in the future even
[05:36] assemble them for
[05:37] yourself so
[05:41] crafting
[05:42] um while the fury approaches uh you
[05:45] might get the glimpse of a debug UI so
[05:48] the there is the fury now coming uh I
[05:51] activated uh the debug UI to show you
[05:53] the health state of each
[05:55] item and uh what you should have seen is
[06:00] that the shield generator is fully
[06:02] destroyed and the power plant that I'm
[06:04] about to take out now is uh in low
[06:07] Health low Health means you can still
[06:10] repair it so which you will will be
[06:13] happening now with guo and Pete uh
[06:16] repairing the power plant after I
[06:18] removed it from the
[06:20] fury so it's making it fully functional
[06:25] again and here you see the Deb Qi the
[06:28] health is now fully up again and that
[06:30] means that it runs at at full uh yeah
[06:33] full efficiency
[06:35] again and here you also see that the
[06:38] shield generator is at zero health so
[06:40] the destroyed Shield generator cannot be
[06:42] repaired because it's destroyed so I
[06:45] have to exchange it with the spare one
[06:47] that I collected from the
[06:58] Gladius so with all those repairs being
[07:01] done uh the fur is operatable again and
[07:04] it can go its
[07:20] way so getting back to the
[07:22] responsibilities uh a big one is
[07:24] managing your ship which includes
[07:26] resources but also more General aspects
[07:29] uh you have to manage the power
[07:30] distribution and come up with informed
[07:33] decisions like reacting to hazards like
[07:36] malfunctions fire low energy but also
[07:39] calling out items that need repair and
[07:42] maintenance you will delegate the rest
[07:44] of your crew to keep your ships intact
[07:46] like giving clear priorities of what
[07:49] needs to be done first let's take a look
[07:52] at another video here so this is the
[07:55] first glimpse of the engineering UI in
[07:58] action it is still being worked on so
[08:01] it's heavy work in
[08:03] progress uh let's start with looking at
[08:05] the item
[08:06] [Music]
[08:08] [Applause]
[08:14] view so you can see the full setup of
[08:16] the network with the relays the green
[08:18] dots connecting to each other and the
[08:20] relays connecting to the
[08:22] items color and shape uh below the icons
[08:25] should help you identify the different
[08:27] item types like power PLS weapons also
[08:31] helping differentiate between consumer
[08:33] producer and
[08:35] converters you can tell the current
[08:37] state of the item that means the amount
[08:39] of energy it produces consumes or has
[08:41] stoed the health state it is in the
[08:44] current wear and tear on the item and
[08:46] the current state it runs in like
[08:48] charging or being in an idle
[08:51] State you can directly interact with
[08:53] these items turn them on and off and in
[08:55] the future even switch their
[08:58] states
[09:00] if you H hover over a relay that I will
[09:03] be hopefully doing
[09:07] soon you will also see that the amount
[09:09] of fuses that are still active and uh
[09:13] yeah because a relay consists of several
[09:16] fuses basically they their own uh set of
[09:20] lives and here you see all the the
[09:25] details like you can click on the items
[09:27] to see a 3D render of the the power
[09:29] plant here uh the Quantum Drive sorry
[09:31] and here's the the relay
[09:36] overlay uh here Pete shoots a relay to
[09:39] show the UI updates on the screen so
[09:41] once this relay got shot at you will see
[09:43] the update here on the UI that suddenly
[09:46] the entire right hand side of your ship
[09:48] lost a power
[09:51] connection
[09:53] and what you might have not picked up on
[09:55] the screen is that actually the power
[09:57] plant here that I'm now focusing on is
[09:59] on low health so I'm commanding Simon to
[10:03] repeal the power plant to get it fully
[10:05] operational
[10:12] [Music]
[10:13] again so something to highlight here
[10:16] take a closer look at the doors since we
[10:18] also track the door States you see that
[10:21] uh you can watch movement inside your
[10:23] ships now nicely so you can track
[10:26] players moving around in your ship and
[10:28] even Clos doors for them or like
[10:31] compartments in this case where Simon
[10:33] just forgot to close the
[10:35] [Music]
[10:40] compartment um yeah so Pete destroyed
[10:43] the relay we need the ship in fully
[10:44] functional state so um yeah I'm running
[10:47] now with a fuse and place it on the in
[10:49] the relay so make the relay work again
[10:52] um what you can also do with the doors
[10:54] is that you can create safe Pathways
[10:56] because you sitting at this engineering
[10:58] screen have more information in regards
[11:01] to your ship than the others so you open
[11:03] doors to create a path that the players
[11:06] on your ship has to have to
[11:08] take um now to the room view that is
[11:11] mainly the life support controls plus
[11:13] controlling all doors uh again we show
[11:16] the details of each room like the
[11:18] temperature pressure atmosphere
[11:20] composition so everything that is
[11:22] relevant for like you living on a ship
[11:26] we also show the door states where you
[11:27] can now have precise control control
[11:29] over each door in your ship as you see
[11:33] here uh this will also allow you to have
[11:35] a more control over which door or
[11:37] compartments to open so here the again
[11:40] showing the opening the power plant that
[11:43] also helps very much in in already
[11:45] telling players hey you should repair
[11:47] this item so I open that door for you
[11:49] and they directly know which item you
[11:52] mean um it also allows us to control
[11:56] like the outside facing doors much
[11:58] better
[11:59] [Music]
[12:00] so you can directly open if you just
[12:02] want to open the left side ramp or the
[12:04] front side facing ramp or the back
[12:06] facing
[12:06] [Music]
[12:22] [Music]
[12:27] ramp
[12:30] [Music]
[12:45] so we did it last year already but uh
[12:48] let's make our true suffocate again so
[12:51] the moment that you basically pull off
[12:53] their helmets and now me pressing the
[12:56] cycle button you see that the entire
[12:57] atmosphere in this room is vented and
[13:01] yeah well uh the consequence is uh
[13:06] [Music]
[13:11] [Applause]
[13:12] [Music]
[13:14] [Applause]
[13:18] death so as you can tell engineering
[13:21] gameplay will bring a lot of changes uh
[13:25] some of those changes are adding
[13:27] batteries to ships that will allow you
[13:29] to get a little bit of extra power for a
[13:32] short amount of time allowing you to
[13:34] control items directly where it's not
[13:36] only their onoff state but also their
[13:38] resource
[13:40] consumption and where the biggest change
[13:42] that will come in this update is to the
[13:44] resource is basically to the resource
[13:46] consumption and generation so let's talk
[13:49] about energy balance currently ships are
[13:52] balanced such that they consume less
[13:55] energy than they produce what I mean
[13:58] with that is that the sum of all items
[14:02] or requires less energy than the power
[14:05] plant will provide and this has to
[14:09] change the energy rebalance that I will
[14:12] explain to you now will affect mainly
[14:13] bigger ships single cers will be will
[14:16] still behave like they do now for Big
[14:19] Ships we will focus on item groups those
[14:22] require energy but your ships will not
[14:24] provide enough energy to have all
[14:26] components run at 100% all all the time
[14:29] instead you have to decide what you want
[14:31] to have permanently powered by your
[14:34] power plant so managing decisions will
[14:37] have an impact now you could decide as
[14:40] in this example to shut down your
[14:42] thrusters to turn on the weapons isn't
[14:45] the best choice since you will not be
[14:47] able to maneuver so might not help when
[14:49] you are attacked you would be able to
[14:51] shoot though and here comes in the
[14:54] batteries in scenarios where you need to
[14:58] react you can activate the batteries and
[15:01] use the additional
[15:03] power batteries won't last forever but
[15:06] you at least can power additional
[15:08] systems you will be able to recharge the
[15:10] batteries again but you need to free up
[15:12] energy from the power plant to direct
[15:15] into the
[15:16] batteries I think that was a little bit
[15:18] more than just a recap but uh now GMO
[15:22] will talk about
[15:27] malfunctions
[15:31] [Applause]
[15:33] so I will talk about my functions real
[15:35] quick and get you guys to the next video
[15:36] since we're a bit behind schedle uh what
[15:39] are more functions you've seen misfires
[15:41] in the persistent Universe for seals and
[15:42] for thrusters you've seen a very basic
[15:44] version of it we're making them more
[15:46] complex we're making them more lethal in
[15:48] some ways and more fun to interact with
[15:51] uh also some theal functions will
[15:54] include fire spreading misfires that
[15:56] represent electrical surges going
[15:57] through the ship or signature burst
[16:00] which increases your signature and makes
[16:02] you show up on enemy sensors more
[16:05] easily as for how you will counter them
[16:08] you've SE you've seen suffocating people
[16:10] with life support you will also be able
[16:11] to suffocate the fire with life support
[16:13] which is probably more useful you will
[16:15] be repairing them not necessarily only
[16:17] with a repair beam but also replacing
[16:18] parts or some bespoke Behavior per
[16:21] misfire and if all else fails yes turn
[16:24] it off and
[16:26] on and here's a video of the fire in
[16:30] action uh you've seen in other videos
[16:32] the fire this is a small fire you can
[16:34] just put it out with a fire extinguisher
[16:36] pretty simple it just
[16:41] works uh here's a bit of a bigger fire
[16:44] it might be that you Cann only put it
[16:46] out on your
[16:54] own so here we have one crew member
[16:56] that's going to try to put it out with a
[16:57] fire extinguisher
[17:01] uh to mix
[17:09] results and here we have the option of
[17:11] using the Live support system th and S
[17:13] up uh uh before and yes Bend in the
[17:27] area
[17:36] and now you can see that the fire once
[17:38] we get to that compartment has been
[17:40] successfully put
[17:48] out okay so let's get thst and back on
[17:50] stage and you see you saw a lot of the
[17:53] systems in action but let's get a video
[17:55] of one of our PlayStations which is
[17:57] going to probably show it a bit
[18:01] better so yeah um I have to excuse
[18:05] myself already because I I was leading
[18:08] this group of players being attacked by
[18:10] by the Gladius and I did a poor job but
[18:13] more to that uh in that
[18:16] video
[18:18] um yeah we wanted to talk about so for
[18:21] this demo we have modifi the damage
[18:23] system slightly to uh represent impact
[18:26] penetration on a very basic level so you
[18:28] are going to see that the the Quantum
[18:30] Drive is going to be hit by the Gladius
[18:32] attacking the
[18:33] ship
[18:34] so yeah being attack by Gladius for A2
[18:37] isn't like a big challenge but in this
[18:40] setup we were not like fully stared that
[18:42] means we had our Engineers running
[18:44] around and uh yeah no one being seated
[18:48] in the in the in the turrets uh so yeah
[18:52] our our goal was basically to flee the
[18:54] Gladius and uh yeah with the Gladius
[18:57] actually shooting the the the Quantum
[18:58] Drive and damaging it I thought hey it's
[19:01] a good idea to to tell uh Pete and Simon
[19:05] to to repair the Quantum Drive as a
[19:07] priority as you can see uh I somehow
[19:10] missed that uh the habitation room
[19:12] caught fire um I tried to yeah well um
[19:18] prevent further damage to it but uh yeah
[19:21] I I I failed
[19:24] um yeah so uh that that was causing a
[19:28] bit to the Panic so I even got
[19:30] distracted in this moment so uh we we
[19:33] managed to have the Quantum Drive
[19:34] survive but here I notice oh actually
[19:38] the the power plant also starts to take
[19:40] damage and at this moment I'm also
[19:43] telling uh Pete and and Simon to to
[19:46] switch their attention to the power
[19:48] plant because if we use lose the power
[19:49] plant it's also like almost impossible
[19:52] to flee so here I I realize oh my God we
[19:54] are going down fast and I think at this
[19:58] point now yeah I opened the uh
[20:00] compartment to make it excess faster but
[20:03] that was already too late so the power
[20:04] plant died and yeah so uh the backup is
[20:08] to activate the batteries which I did
[20:10] here so the yeah um Simon Pete still
[20:13] tried their very best to to fix it but
[20:17] um yeah didn't manage to
[20:20] um yeah uh the attack moved to the
[20:24] forward side uh targeting the the
[20:27] batteries because the player who was
[20:29] attacking us actually knew the ship
[20:31] layout and uh yeah here I I noticed that
[20:36] the second power plant is also got
[20:37] attacked so have to redirect the our our
[20:41] mechanics to it
[20:42] and at this point we wanted to flee and
[20:45] then I realized why does why doesn't the
[20:47] Quantum Drive work and uh as you saw
[20:50] that there is a relay that also got
[20:52] destroyed so here you see it very
[20:54] clearly that yeah with a relay being
[20:57] destroyed at the at the Quantum Drive
[21:00] position that means that the Quantum
[21:02] Drive cannot be accessed from the from
[21:04] the pilot seat that means that uh yeah I
[21:06] I also had to get that repaired so it
[21:09] was uh A bit
[21:12] chaotic um everything was also happening
[21:16] a bit too fast here trying to save the
[21:19] second power plant because we are we
[21:20] already running out of a battery life uh
[21:23] so yeah if we would have lost uh the the
[21:26] second power plant that would have been
[21:27] our certain death and I think at the in
[21:30] the next part of the video um yeah we
[21:36] yeah basically asked someone to to fix
[21:38] the the relay at the back so that we
[21:40] still be able to jump
[21:45] away yeah so we at least managed to to
[21:47] save one of the power
[21:57] plants
[21:59] [Music]
[22:06] yeah that's that's now uh I think it was
[22:09] Pete running there and fixing the fuse
[22:12] and the next step was uh the pilot
[22:15] trying to push uh the yeah
[22:18] the the Quantum Drive but it was too
[22:21] late uh we died
[22:25] and the end of the show
[22:29] yeah
[22:31] [Applause]
[22:34] thanks so what you just saw gives a good
[22:37] idea of idea of how busy ships will be
[22:40] and how what meaningful uh multic crew
[22:44] gameplay will look like but what about
[22:46] the future since we worked on technology
[22:49] that will be used throughout the entire
[22:51] game you will see more and more coming
[22:52] utilizing this Tech it will introduce
[22:55] system systemic gameplay uh with
[22:58] allowing players to come up with
[22:59] creative ways of uh manipulating their
[23:02] environments sabotaging a power plant or
[23:05] destroying a vital relay that connects
[23:07] it all to shut down an entire enemy base
[23:10] that can include its life support or
[23:12] security systems it would also tie in
[23:15] nicely with melstrom that you just saw
[23:18] um and anything that will break off will
[23:22] lose its connection the network to the
[23:24] network and therefore have an impact on
[23:26] its functionality so a real systemic
[23:29] feature the technology allows us also to
[23:32] take further steps into the crafting
[23:34] profession as well as in the base
[23:35] building where both are related to each
[23:38] other bases built by player will also
[23:41] form resource networks and come with a
[23:43] unique challenges similar to
[23:46] ships we are already we are all really
[23:50] excited about the future of this Tech
[23:52] and all the associated features so
[23:55] there's a huge thanks for for all people
[23:58] involved so thanks to the entire euu
[24:00] team the vehicle teams Jared active
[24:02] feature team and the arena Commander
[24:04] team they all were super supportive to
[24:07] get this uh Behemoth into a state that
[24:11] you could see
[24:15] here and it's something that has been a
[24:18] long time coming and we are really proud
[24:21] of it so thank you for sticking with us
[24:24] on this
[24:26] journey
[24:30] wait there's one more
[24:35] thing so we really want to get your
[24:38] hands uh we really want you to get your
[24:40] hands on this because we already had a
[24:42] lot of fun with it uh I hope all of you
[24:47] have heard of the experimental mode in
[24:49] the arena
[24:50] Commander so we want to bring you what
[24:52] you saw here as an experimental mode
[24:54] before we put everything into the Pu
[25:06] and uh this will be soon
[25:10] so thank
[25:13] you

# Star Citizen: Bugsmashers - Turret Control

**Video:** https://www.youtube.com/watch?v=fmF3tTeEaZQ
**Date:** 2017-08-30
**Duration:** 7:44

## Transcript

[00:06] [Music]
[00:15] I'm mark Hammond this is bug smashers
[00:19] [Music]
[00:33] [Music]
[00:40] [Music]
[00:43] hey everyone we are here in my fancy
[00:46] Dancy test level and we have a cutlass
[00:49] who has some awesome weapons on it and
[00:53] so we start shooting you can see all the
[00:56] fun stuff but unfortunately this guy is
[00:59] actually shooting the top turret weapons
[01:02] which is not supposed to happen I am
[01:05] moving around out of the Sun making it a
[01:09] little bit hard to see there we go
[01:11] right into the sunlight blindness guy's
[01:13] face okay he's living around a bit there
[01:18] we go so the way that these designers
[01:20] have set this guy up was in the front
[01:23] let me shoot these weapons there's four
[01:26] guns in the top are two two on the top
[01:28] two on the bottom four that the cope of
[01:31] that piece pilot one of those days for
[01:35] those weapons the pilot is only supposed
[01:37] to be able to shoot the turret itself is
[01:39] supposed to be a secluded little section
[01:41] that only the guy in the turret is
[01:42] supposed to shoot unfortunately the way
[01:45] that everything has managed is that the
[01:47] pilot is able to just go you know what
[01:49] screw your rules I'm doing everything
[01:50] I've turned on this little debug and on
[01:54] the bottom the fourth and fifth weapons
[01:58] as you can see are being controlled by
[02:00] me the guy sitting in the pilot's seat
[02:01] with a priority of 10 however the way
[02:04] that the XML is set it up is on the
[02:06] turret those weapons are supposed to be
[02:08] exclusive for the turret that means only
[02:10] he and only he alone give to control
[02:13] those well obviously the pilots like you
[02:15] not screw you I'm taking control of you
[02:17] got any problem too bad
[02:18] so what's happening well simple well fun
[02:23] simple we have here the control manager
[02:26] code and basically we have the top level
[02:30] vehicle and then it's kind of like a
[02:31] treat the control manager will have a
[02:35] list of controllers we'll have in this
[02:38] case we have weapon controllers so the
[02:40] pilot will have his own
[02:41] and controller and the chert will have
[02:42] its own weapon controller and then
[02:44] underneath that is the weapons
[02:45] the idea is you control the weapon
[02:49] controller and it has control the subset
[02:51] of weapons so if you're interacting with
[02:52] the UI you tell the weapon control what
[02:55] to do and the weapon controller tells
[02:56] the guns to do stuff you damage the
[02:58] weapon controller you can't control guns
[03:00] funds gameplay and when this thing the
[03:04] control Manor it's supposed to build
[03:06] this web of networks to figure out if I
[03:08] sit here where am I supposed to have
[03:10] control and then if I leave who would
[03:13] take control of it afterwards and we do
[03:15] this with a graph and on this graph this
[03:20] is where we create our links so as we
[03:21] create our little trees this establishes
[03:24] those links and when you sit down it
[03:27] figures out where the control paths
[03:29] should go unfortunately when you sit
[03:32] down so we have the pilot and he's on
[03:35] this section he's gonna look everywhere
[03:38] to see if he could link to stuff and
[03:40] he's figuring out oh I can link to these
[03:44] guns on the turret because well I am
[03:48] told to look into any weapon and have
[03:51] the priority of 10 just the way it is
[03:53] the turret is going well I should link
[03:57] to these but I have it exclusive so I'm
[03:59] gonna say exclusive however in the order
[04:02] of operations the seat comes first and
[04:05] it tries to make a link and it makes
[04:08] links to stuff but it and everything's
[04:10] good
[04:10] the turret comes in then makes its
[04:12] exclusive links but now we have two
[04:15] things linking and the weapon when you
[04:19] sit down in the seat he goes oh there's
[04:21] no one taking control of it I have party
[04:23] 10 I'm gonna do it then you go sit down
[04:25] the turret and I'll take it away but it
[04:27] shouldn't even be doing that so what we
[04:29] should do here is in this bit of code
[04:31] when we want to sit down we check to see
[04:34] what can control this node so if we are
[04:37] the weapon we look at all the links that
[04:40] are established to us and we see who's
[04:42] and why could control us and what we
[04:45] want to do is if we have we have this
[04:48] exclusive link on the turret we don't
[04:51] want to allow this
[04:53] a pathway to continue so we're gonna
[04:57] find this exclusive link and if it
[04:59] exists what we want to do is prevent the
[05:04] guy over here from accessing it now we
[05:07] still need that link because when he's
[05:08] sitting down he may want to observe that
[05:11] turret but he shouldn't be able to
[05:13] control it so we still need a link to
[05:16] everything so that we could see on our
[05:18] screen oh that gun is overheating or
[05:21] that gun is you know and taking too much
[05:24] power I'm able to turn it off but we
[05:27] shouldn't be able to control it so let's
[05:29] hit recode and see what happens alright
[05:34] so now we're recode we're still in the
[05:37] broken shipment so we're gonna spawn
[05:39] ourselves into a new ship so we're a new
[05:44] ship let's go find the priorities of
[05:47] this guy all right where to go there it
[05:53] is so as you can see now we don't have
[05:56] priority over the turrets because well
[05:57] we shouldn't the turret has the
[05:59] exclusive priority so we're at turn off
[06:03] the debug move our camera around a bit
[06:07] and you'll see that I'm actively
[06:09] shooting the four guns in the front but
[06:12] I no longer have control of the turn so
[06:14] now if you want to be able to shoot
[06:16] those you got to go tell your good buddy
[06:18] to go run to the back to shoot now this
[06:21] is totally up to the designers how they
[06:23] want to set up the ships you may have
[06:24] some ships that well the Turk can
[06:26] control because that's the functionality
[06:28] or this particular turret can't this is
[06:32] the beauty the priority system and then
[06:34] even extending into the future we be
[06:36] able to allow you guys to dictate who
[06:39] gets control of what within a limited
[06:41] scope but for now we need to make sure
[06:43] that the control flow follows the rules
[06:46] so that in the future everything will
[06:47] work as intended
[06:48] let's hope you guys enjoy them
[06:52] so we fixed this little bug just like
[06:54] how we took care of the hard drive that
[06:56] anymore we had a little bug where you
[06:59] sit in the seat take control of the
[07:01] turrets not cool have some fun with it
[07:03] made sure we fixed the priorities
[07:05] everything was good to go and then now
[07:08] pilot takes control of his stuff and the
[07:10] gunner takes control of his everyone's
[07:12] happy everyone has their own stuff and
[07:15] good to go hope you guys enjoyed until
[07:17] next time thank you for watching so if
[07:22] you want to keep up with the latest and
[07:23] greatest in star citizen and squadron 42
[07:25] development please follow us on our
[07:27] social media channels see you soon
[07:36] [Music]

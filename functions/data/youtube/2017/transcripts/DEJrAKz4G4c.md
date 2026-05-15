# Star Citizen: Bugsmashers - Incomplete Ship Insurance

**Video:** https://www.youtube.com/watch?v=DEJrAKz4G4c
**Date:** 2017-11-22
**Duration:** 17:24

## Transcript

[00:06] [Music]
[00:15] everyone welcome to mug smashers I'm
[00:18] your host Marc Abraham's I'm not on
[00:20] vacation this week so as I take a sip
[00:22] for my coffee tea company cup Spencer
[00:25] what you got for me I hate you it's mug
[00:27] slashers so this week we've got an
[00:32] insurance bug I talked about it briefly
[00:34] on a TV a few weeks ago but this one's
[00:37] pretty funny you you claim insurance on
[00:40] the ship you go and spawn it and then
[00:42] your Pierce right on the landing
[00:44] pad but there's no seats there's no
[00:47] doors there's no landing gear this is a
[00:50] really scummy insurance company and they
[00:51] did the bare minimum so basically like
[00:53] real life insurance yeah we were trying
[00:55] to really realistic you're too realistic
[00:56] for a game yeah so how about do we uh we
[00:59] step into this and I show you what's
[01:00] wrong hello everybody and welcome to
[01:08] learn of sort of bugs
[01:09] slashers the show where I refuse to let
[01:11] that joke die this week got an
[01:14] interesting book to show you you may
[01:16] have seen this on burned down a few
[01:18] weeks ago I talked a little bit about it
[01:20] but I wanted to go into a bit more depth
[01:22] about how we solve this problem and
[01:23] explain why it was happening so here we
[01:26] are and we just jump right in and show
[01:28] you so we're gonna go over here to our
[01:31] terminal we're gonna make a claim on a
[01:33] ship we're going with the Cutlass black
[01:35] today just run go make the claim on this
[01:38] ship and they're gonna expedite it yep
[01:40] eight seconds maybe a little bit shorter
[01:44] than what you'd expect to wait in the
[01:46] live version
[01:47] okay so we've we've claimed our ship and
[01:50] now that we wait for the time to finish
[01:53] now we're gonna go and spawn it
[01:57] let's not retrieve this
[01:59] [Music]
[02:03] okay and for the sake of time we're just
[02:06] gonna fly out here and it should
[02:07] probably be immediately noticeable
[02:09] what's wrong here I've spawned the ship
[02:12] there is no doors there's no landing
[02:15] gear you fly inside there's no seats and
[02:19] you know what there's no turret on top
[02:20] either
[02:21] this sham of an insurance company took
[02:24] our money and we get basically a ship on
[02:28] cinder blocks that does not work you
[02:29] cannot fly this it's just a husk of a
[02:32] ship and as you might imagine this not
[02:36] the the best feature to have so what
[02:40] went wrong why did this happen to us
[02:44] let me explain so we're gonna pause here
[02:47] we're gonna do hop into our code and
[02:52] we're gonna look at a function called
[02:53] generate persistent items and this lives
[02:56] in a piece of code called the
[02:58] entitlement processor which is a really
[03:00] important part of our code base what the
[03:03] entitlement processor does is when you
[03:05] start up the game we'll say for the
[03:08] first time after you've bought on the
[03:10] ship on the website you bought and you
[03:11] know whatever cutlass Hornet when you
[03:15] sign the first game we need to take this
[03:17] data of this ship that you own and
[03:19] basically translate it into game data so
[03:21] that you could persist it it could be in
[03:23] the air player database so that the game
[03:25] knows you own this Cutlass really
[03:29] important and it's a pretty
[03:30] sophisticated piece of code there's a
[03:32] bunch of stuff going on in here to make
[03:33] sure that things get sorted properly and
[03:36] players own the things that they need to
[03:37] and what we're gonna do for insurance
[03:40] we're going to use some of the
[03:42] functionality already here so that when
[03:44] you insure a ship and you blow it up and
[03:47] you make a claim you get a brand new one
[03:48] and it uses the same code path here but
[03:51] we are gonna have to make a few slight
[03:53] modifications because the code wasn't
[03:55] really intended to do this exactly we're
[03:57] kind of hijacking into doing what we
[03:59] want sort of a clever solution but as
[04:02] you'll see with many bugs it always
[04:05] starts off with all right so we tried to
[04:07] be clever and then this happened so
[04:11] let's talk a bit about in this function
[04:14] and how
[04:14] using it now generating persistent items
[04:17] is a recursive function which if you're
[04:20] not familiar with computer science
[04:22] you're probably familiar with this sort
[04:27] of image and I'm going to have a helper
[04:30] here I'm gonna drag OBS over here
[04:33] this is recursion when you see something
[04:36] that contains itself and in computer
[04:39] science if you have a piece of code you
[04:42] know a function that calls itself which
[04:45] calls itself which calls itself and ad
[04:47] infinitum just keeps happening and it's
[04:50] a really useful piece of tech and that's
[04:53] what the generate persistent items does
[04:55] because when you have an item you have a
[04:59] route and you have a tree of things that
[05:00] are its children I've got a helper image
[05:03] here because way more sophisticated than
[05:06] regular bug smashers when I'm hosting
[05:08] the show and as you can tell clearly
[05:11] made with my amazing art skills in
[05:14] mspaint
[05:14] um there's a reason why I'm not sitting
[05:17] on the other side of this building in
[05:18] the art department right so this is the
[05:23] item port tree for our Cutlass black or
[05:25] a rough approximation of it to give you
[05:27] an idea of how this works and I know you
[05:30] might be expecting code we're gonna jump
[05:31] into the code right after this but let
[05:33] me explain a bit about how this set up
[05:34] is so we've got our route here which is
[05:37] the ship which has no doors nothing on
[05:40] it it's basically just the model of only
[05:41] the ship and this is the parent this is
[05:43] the route and then you see attached to
[05:46] that on item ports the seats the turret
[05:49] the doors and those things that are
[05:51] attached can also have things attached
[05:52] to them so the turret has guns attached
[05:54] to it the seat is the dashboard that has
[05:56] to it right so this is the tree
[05:58] structure this is how things are set up
[05:59] like our ships and this is very
[06:01] important because the entitlement
[06:02] processor starts at the top and then
[06:05] gives you that ship and then will give
[06:07] you all of its children all the
[06:08] children's children now when we're doing
[06:12] this function for insurance purposes
[06:15] we're basically building a list of all
[06:17] of the pieces so that we can give you
[06:19] all the pieces individually and if we
[06:23] hop back into our code here you can see
[06:26] what we're doing here is we're
[06:27] generating a list
[06:28] of all these items were pushing it back
[06:30] into this list and very crucially we
[06:34] need to keep track of each of these
[06:35] items parents so if you look at this
[06:38] image again we need to know that the
[06:41] seat its parent is just the ship itself
[06:43] now we're gonna jump on to image number
[06:46] two here where I've labeled all these
[06:48] images here and given them an ID so you
[06:53] can see we start at the root like
[06:54] alright this is zero in computer science
[06:56] we start at zero not one for many
[06:59] reasons but anyway we start at zero and
[07:02] okay go down children it's one it's
[07:04] children to go back up alright then I
[07:06] need three okay back up for its children
[07:08] five six back up seven okay right so
[07:11] that's the order that we number all of
[07:13] these and give them IDs and that's what
[07:15] the entitlement processor does the
[07:18] problem that we run into when using this
[07:20] function for insurance I can hop in here
[07:24] and show you we were storing this ID in
[07:28] this variable here item the ID right
[07:32] there now in that variable every time we
[07:37] do this for coos recursive loop we add
[07:39] one to that variable and basically this
[07:42] is used to give new entity IDs to these
[07:45] entities when they are spawned so you
[07:47] make an entity you make its children you
[07:49] add one it's ID is one higher it's
[07:50] children one higher than that this
[07:54] doesn't work for our purposes because
[07:56] we're storing a slightly different
[07:58] number in that variable rather than the
[08:00] entity ID we're storing the offset in
[08:03] the list the IDS that were on the this
[08:05] image here is their offset the problem
[08:08] here is we were sending these numbers
[08:11] but really we need the parent of those
[08:14] numbers because of what we do later on
[08:18] in insurance here we want the parent
[08:21] number and so in my final image here I'm
[08:23] going to show you the numbers we're
[08:24] supposed to have instead of just putting
[08:27] the ID of the part itself which is what
[08:31] we were doing we're basically saying oh
[08:33] my parent is just the same number as me
[08:35] so it would entitle you all these pieces
[08:39] of the ship but then not know how to
[08:41] connect them back
[08:42] together seeds spawn the ship and it
[08:43] would just be the root of it and all the
[08:45] other pieces would be in your persistent
[08:46] database but they're not connected to
[08:48] the ship they have no knowledge of each
[08:49] other so they're just sort of floating
[08:51] out there in space metaphorically
[08:53] speaking anyway so if we look at our
[08:55] orange number here this is going to
[08:57] represent the parent that this belongs
[08:59] to and so we start at the root here
[09:02] doesn't really have a parent so we're
[09:04] gonna keep that zero but then for each
[09:06] of its children it's like okay well I'm
[09:09] number one but my parent was zero like
[09:11] I'm number three but my parent was zero
[09:12] we're down here I'm number five but my
[09:15] parent was four and so on so this is
[09:19] really crucial this is the number that
[09:21] we use later to say okay I know where my
[09:24] parent is in this list we can connect
[09:26] them all back together so let me show
[09:27] you the code that we did to change this
[09:29] it's not very much but sometimes really
[09:33] complicated bugs get solved in just a
[09:35] small amount of code so I'm gonna copy
[09:37] and paste a little bit of code that I
[09:39] had saved here and we're just going to
[09:42] put this there right so
[09:49] we've got this one little block here
[09:51] which is checking to see if this
[09:53] variable is negative one probably should
[09:56] have started with we're going to modify
[09:58] the function very slightly and it's a
[10:03] ton of arguments we got to scroll all
[10:05] the way to the side here and we're going
[10:08] to add an argument to this function
[10:16] called envy list parent index as the
[10:19] orange number we were talking about
[10:21] you're gonna add that to the header here
[10:24] I'm gonna default value it's a negative
[10:27] one this we're gonna put this in the
[10:37] source file as well okay so now we've
[10:40] got an extra argument to this function
[10:42] we need this number to keep track of the
[10:44] parent as I mentioned earlier now this
[10:46] little block of code down here that I
[10:48] accidentally copy and paste it to early
[10:50] is now checking to see if this isn't
[10:53] negative one I'll get back to that and
[10:55] then if it's not if we know that we want
[10:58] to be tracking this information we know
[11:00] that we entered this piece of code
[11:02] through insurance and so we're just
[11:04] going to store that in that variable I
[11:07] mentioned earlier right okay the reason
[11:10] we're checking if it's not equal to
[11:11] negative one is because we're trying to
[11:13] do several things at the same time here
[11:15] with this function if there's several
[11:17] different code paths that lead here we
[11:19] only want insurance to be taking
[11:20] advantage of this feature basically so
[11:22] we default this value to negative one
[11:27] negative one and you it did that default
[11:32] that value the negative one and we just
[11:34] ignore it if it is that but if it's not
[11:36] negative one we know we want to take
[11:38] track keep track of this information
[11:40] okay so we've got that small bit of code
[11:42] down there and then down here this is a
[11:45] little bit of a funky line I'm gonna
[11:47] type out here so we're gonna make an
[11:49] event here we're gonna call it new
[11:51] parent new parent index in entity list
[11:57] because I like my variables to be a
[11:58] mouthful okay now this will look a
[12:03] little bit weird over hid
[12:11] index not equal to negative one
[12:14] just like I said before you have to
[12:16] check that make sure that we are
[12:18] tracking this information okay so if
[12:21] that's true no Larry ternary operator
[12:26] here I'm just going to keep typing this
[12:32] and explain it in a minute
[12:47] okay we've got this little bit of a mess
[12:51] here but basically what we're tracking
[12:53] is are we tracking the parent index like
[12:58] I mentioned earlier we are tracking it
[13:00] and if this pointer here is not null we
[13:05] need to access it so we got a checks not
[13:07] null then if both of those are true we
[13:12] are going to take that number that we
[13:14] were keeping track over I GID do you
[13:16] reference it 2-1 because remember we
[13:19] started at 0 and if it wasn't true we're
[13:22] just gonna return negative 1 and then
[13:25] this integer we just created here goes
[13:28] as the new argument that we just added
[13:31] here new parent index entity list which
[13:35] is the thing that we added to this
[13:37] function and that we checked up here
[13:39] this is the new value and this is why
[13:41] recursion is cool because we've made
[13:43] this value on a parent we're gonna go
[13:45] back to our image here we've made that
[13:47] value here and propagate it to each of
[13:49] its children make the value here
[13:50] propagate to the children
[13:51] same thing here make the value that you
[13:53] call that recursive function and you
[13:55] give it to its children and that's
[13:56] what's really powerful about recursion
[13:58] is super quick to make a change like
[13:59] this okay so we've got that in there and
[14:04] now we have what should be everything we
[14:07] need to compile this and try try again
[14:11] maybe this time have a halfway-decent
[14:15] insurance company take care of us I know
[14:17] we're trying to be a realistic game but
[14:18] I think the insurance company should
[14:20] actually give you a working ship and
[14:24] we'll cut back after this finishes
[14:26] compiling alright we're back in game now
[14:30] so let's let's try again let's make
[14:34] another claim and hopefully now maybe
[14:37] we're being insured by a less seedy
[14:39] organization let's make a claim on our
[14:42] Cutlass black here
[14:46] pay our expedited fee and now we're
[14:50] gonna wait a little bit for this to
[14:52] finish up will spawn our ship and
[14:54] hopefully the good as new
[14:57] do a little dance okay
[15:00] that's probably ten seconds all right
[15:04] we're free of our ship
[15:11] yeah and I'm just gonna fly out of here
[15:13] for the sake of time and can see hey
[15:15] we've got doors this time and not only
[15:18] doors we've got turrets
[15:20] we've got engines we got seats the whole
[15:23] kit and caboodle this is an actual ship
[15:25] didn't show up on cinder blocks this
[15:27] time either
[15:28] cool so just to recap to put it quickly
[15:33] before we were keeping track of the list
[15:35] of all of these new items we needed to
[15:37] give to the player when they claimed
[15:39] insurance and when trying to keep track
[15:43] of which item had which parent we were
[15:46] not sending the right ID so we needed to
[15:49] get a new ID and propagate that down
[15:52] each the children during each of our
[15:53] recursive calls and that is what allowed
[15:56] us to attach everything when we spawn
[15:59] the ship and now you've got something
[16:01] that's good as new hopefully you guys
[16:03] enjoyed this episode and our little bit
[16:05] of a less Kody approach to it using
[16:07] images and more just descriptions of the
[16:11] problem and that's it we could vote for
[16:17] buck slashes below ok so insurance was a
[16:23] bit out of whack and gave us some pretty
[16:24] unusable ships but we went in there and
[16:27] made sure that each new thing in the
[16:29] item port tree knew correctly about what
[16:31] its parent was when we put it out on the
[16:33] list and then gave all that stuff to the
[16:35] player again so now your ships work no
[16:38] more janky insurance company that rips
[16:39] you off
[16:42] and note don't say I know you want to
[16:44] say it how's the weather from down there
[16:48] I really hate you so that's this week's
[16:52] episode of bug smashers I'm your host
[16:55] mark abent and Spencer Johnson Spencer
[16:59] until next time hope you guys enjoyed
[17:00] whoo thank you for watching so if you
[17:03] want to keep up with the latest and
[17:04] greatest in star citizen and squadron 42
[17:05] development please follow us on our
[17:07] social media channels see you soon
[17:16] [Music]

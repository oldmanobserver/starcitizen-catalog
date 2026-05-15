# Inside Star Citizen: Alpha 4.0 - Meshing Forward

**Video:** https://www.youtube.com/watch?v=Mgbgp4pRSJ4
**Date:** 2024-11-14
**Duration:** 17:41

## Transcript

[00:00] so it's been a while since we had you in
[00:02] here what's happened since then hi
[00:06] Steve uh well we all went back home and
[00:09] we didn't do anything for about a year
[00:12] and a half and then uh suddenly we made
[00:14] Ser Mission happen no we've been busy uh
[00:19] busy taking all of the feedback and all
[00:22] of the data that we gathered during the
[00:23] last series of tech preview tests we've
[00:26] really been developing the technology
[00:28] and making sure it's it covers all the
[00:30] use cases that the system requires uh
[00:34] and rolling that forward into new and
[00:37] exciting stuff what new and exciting
[00:41] [Music]
[00:49] [Music]
[00:54] stuff okay jumpo detected jump Point
[00:58] detected
[01:00] see don't
[01:02] oh you probably noticed we are pushing
[01:05] player counts higher and higher as the
[01:08] weeks go by why did we do this with real
[01:10] players why don't you guys just script
[01:12] something or use Bots it it never
[01:15] matches the actual real time environment
[01:18] that players can actually represent
[01:20] putting real players in the build is the
[01:24] only way to really see the true uh depth
[01:27] of the troubles that we're in we'll
[01:29] always always start out with a kind of a
[01:32] safe test at 100 players so we verify
[01:34] here that we don't we haven't introduced
[01:36] new crashes that would detriment The
[01:38] Experience uh and that the performance
[01:41] is on par with what we would expect for
[01:43] a single server with 100 players we let
[01:46] that run and soak for like 30 to an hour
[01:49] 30 minutes to an hour and then once that
[01:51] we've confirmed that that's actually
[01:52] functional then we go to higher numbers
[01:55] initially when we were pushing up to 500
[01:57] players that was putting a lot of burden
[01:59] on an number of systems uh it's one of
[02:01] the reasons why we needed to replace our
[02:04] message key where now we needed more
[02:06] parallelism into how we shuffled
[02:08] messages across the hybrid because the
[02:11] amount of data that it has to shuffle is
[02:13] a lot higher than we expected from what
[02:15] I understand same mesh so 250 four
[02:17] servers right now we're at 231
[02:20] players making our jump to pyro system
[02:24] so we decided to take a couple of months
[02:26] out and completely rewrite it we came
[02:28] back then what you've heard is referring
[02:30] to as the replication message Q or rmq
[02:33] so rmq is a product of the UK networking
[02:35] team so that's uh Cloud Johnson Dave
[02:38] Kaplan Jordan wood Nathan Matias Santi
[02:42] Ortiz those guys I mean they really put
[02:45] their heads down and I think they really
[02:46] delivered on something that is going to
[02:49] scale to the Future the intention of rmq
[02:52] was to provide us with a more stable
[02:54] foundation and going into the first test
[02:57] it being new code and it being written
[03:00] like especially for large volumes of
[03:04] messages we expected it to perform
[03:07] better than an
[03:08] mq it
[03:10] didn't rmq is performing actually pretty
[03:13] good the actual element that we
[03:16] identified back at the beginning of the
[03:19] year when we did our first server
[03:20] maching test were actually solved and
[03:22] we're now running at very fast speeds
[03:24] but it revealed another layer of the
[03:26] onion a lot of ships over here so yeah
[03:29] probably not which is too bad and I have
[03:32] no idea what's going on oh the FPS come
[03:34] on come back to me load load we were
[03:37] disappointed that we were still seeing
[03:40] interaction delay we were still seeing
[03:42] High latency on the back end we were
[03:44] seeing high levels of packet loss you
[03:47] are clear to launch oh no it's going to
[03:50] lock me in I might have to grab a
[03:51] smaller ship or something why am I
[03:53] locked in here so this hanger might be
[03:55] busted I just saw somebody else take off
[03:57] so not all hangers are busted that's not
[03:59] good interaction delay is caused by
[04:01] messages taking a long time to go
[04:03] through the hybrid so when you press F
[04:05] to open a door or exit a ship a message
[04:08] is sent from your client to the hybrid
[04:10] then processes the message and then
[04:12] sends it to a game server and back to
[04:14] your client so this Loop when it's too
[04:16] slow and takes time will manifest itself
[04:19] as an interaction delay now what causes
[04:21] interaction Delay from the hybrid's
[04:23] perspective is when we basically have a
[04:26] traffic jam on one thread so the
[04:28] application is using multiple CPUs but
[04:31] at some point in our code the way we're
[04:32] processing it we will be all jammed on
[04:35] one that will create a traffic jam which
[04:37] will cause the messages to take a long
[04:39] time to do that Loop and that
[04:41] immediately creates interaction delay
[04:43] when analyzing issues with interaction
[04:46] delay we saw that everything that was
[04:48] going wrong was kind of focused in on
[04:51] where all of the code that runs nmq was
[04:54] so when we went to try and optimize that
[04:57] we discovered that we're kind of in this
[04:59] dead end we can't really figure out how
[05:02] to with the structure of nmq improve it
[05:05] so um with rmq we kind of addressed
[05:09] those problems kind of at their route
[05:11] and really really thought about how we
[05:13] can not end up in this dead end again
[05:15] that is the jump point so we are going
[05:19] to oh well that is not the jump point
[05:21] that is where we're going uh within that
[05:26] amazing visual uh there is a delightful
[05:29] jump point for us to go through
[05:31] hopefully um I'm not entirely sure if
[05:33] it's working I know people were telling
[05:35] me uh because it's in evocati which is a
[05:38] very very very early build of 4.0
[05:42] sometimes it's not working but we'll
[05:45] find out together what we expected from
[05:48] that is that we would be able to achieve
[05:49] a much higher throughput um which it
[05:52] does it can achieve that but by
[05:55] optimizing that we see what was behind
[05:58] nmq that was also causing issues that
[06:02] wasn't getting the opportunity to really
[06:04] like stretch its legs to the point where
[06:06] it was able to become an issue nmq was
[06:09] at a dead end right there wasn't so much
[06:11] we could do there just to the nature of
[06:13] how that had been written the game we
[06:14] were building at the time when that was
[06:16] written radically different it couldn't
[06:18] grow it couldn't evolve exactly it was
[06:21] limited in its nature our game is
[06:24] massively complicated we produce so much
[06:27] data from everything not just players
[06:28] NPCs from ships from doors from ele to
[06:32] elevators to you know just everything
[06:34] kind of going on that the the nmq the
[06:36] nmq at least and then then the rmq is
[06:38] just like no so RM Q's Focus was yes to
[06:42] immediately try and you know solve some
[06:44] of the issues we had seen but also to
[06:47] provide us some room to grow uh and
[06:50] right away we noticed a distinct lack of
[06:53] parallelization when we update dirty
[06:55] messages so a dirty variable is a piece
[06:57] of information or a variable attached to
[06:59] an object that hasn't been communicated
[07:01] to all other members of the mesh the
[07:03] sink dirty stuff is just absolutely is
[07:08] it's taking up most of the frames so
[07:09] where we were originally seeing let's
[07:12] say like we have this this amount of
[07:13] space right we we were seeing like nmq
[07:15] take up this much and then like the rest
[07:16] of the network update taking this much
[07:18] but now we're seeing sink dirty take
[07:21] this much and the rest of the network
[07:22] updates take this much and then rmq just
[07:24] this tiny little sliver now so we've
[07:25] addressed rmq but oh wow that underneath
[07:28] all of this there was this other problem
[07:29] that never really got the chance to
[07:31] generate that load oh it's just
[07:35] closed
[07:37] huh oh
[07:40] no okay lining up oh my God entry
[07:43] requirements met oh my word this is
[07:48] happening tuning
[07:50] complete oh the music is actually giving
[07:53] me shivers down my spine so we fixed
[07:57] this by paralyzing the work or
[08:00] optimizing the work that's happening in
[08:02] that thread so that it goes faster and
[08:04] so there's multiple approaches to this
[08:06] but the number one thing that we've been
[08:08] doing in the first series of tests have
[08:11] really been optimizing and parallelizing
[08:13] the work for synchronizing dirty
[08:15] variables parallelizing this allows us
[08:17] to add more Lanes it's it's just like
[08:20] going from a single Lane Road onto a
[08:22] highway we can just handle much more at
[08:25] the same time so the server needs to
[08:28] send out any change that happens to the
[08:30] game you move you shoot and send it to
[08:33] every other client that that can also
[08:34] see that that entity what happens is
[08:37] that that then needs to go through every
[08:38] single client and go oh you can you see
[08:40] this can you see this can you see this
[08:41] can you see this and then synchronize
[08:43] dirty state that then is what produces
[08:46] the message that updates you what's a
[08:48] really really easy optimization to make
[08:49] there especially at higher player
[08:50] accounts is we can just go oh every
[08:52] every single client we can do at the
[08:54] same time they're not modifying any data
[08:56] they're just reading it because that's
[08:59] what that's what sending it out is
[09:00] you're just reading the data and reading
[09:02] the data mean just just reading the data
[09:04] not modifying it means that we can run
[09:05] all of that information at the same time
[09:07] so with not too much work we can get a
[09:10] really really big
[09:12] optimization
[09:14] oh
[09:16] okay opening jump Point guys what the
[09:19] heck man this is next level entering
[09:23] jump
[09:24] tunnel after that first wave of
[09:27] paralyzation we seen some immediate
[09:29] benefits it's feeling really good server
[09:31] is feeling good uh knock on wood no
[09:33] server errors so far no crashes stuff
[09:35] like that so I appreciate that greatly
[09:38] we started to see reductions in those
[09:40] those key metrics for interaction delay
[09:42] and game responsiveness and and packet
[09:46] loss that was quite a dramatic exit I
[09:49] have to say I got very lucky I didn't
[09:52] just get slammed into one of these
[09:55] asids can you hear me jump jump if you
[09:58] can hear me
[10:01] a jump again if you can hear me oh nice
[10:03] nice you can hear me let's go things
[10:05] were showing signs of improvement so
[10:06] you'll see we pushed the player count up
[10:09] again this was our first test going past
[10:11] 1 th000 players and pretty rapidly we
[10:14] ran into to the next bottleneck which
[10:17] was the binds uh and a bind in very
[10:20] simple terms is effectively the
[10:23] connection between your client and your
[10:25] view of the game world to the server's
[10:28] view of the game world so if I see a
[10:30] coffee cup on the table in front of me
[10:32] it's because my client running on my
[10:35] computer has bound over the network to
[10:37] the server's View and knowledge of the
[10:40] existence of that
[10:42] entity all right so here we go with more
[10:46] FPS
[10:47] drops cuz uh it's it primarily the
[10:50] medical area is terrible what is this
[10:53] open ooh
[10:56] fuses down with your colony our game we
[11:00] have a lot of entities uh last time I
[11:03] checked Stanton was at well over a
[11:06] million in an average kind of game
[11:09] session and and numbers just get bigger
[11:11] and bigger as time goes on Ian said
[11:13] there were a million entities that that
[11:16] that's like starter numbers right so um
[11:19] so that was just just with Stanton so
[11:21] Stanton initially when we seed sentence
[11:24] so seeding is like just us putting all
[11:26] the initial State there um that is about
[11:29] 720,000 entities I am at Area
[11:33] 18 so now we're going to have another
[11:36] experience oh my
[11:38] God AI definitely feels a lot more
[11:40] variety that's good looking good relax
[11:44] pal just walk right through me jeez
[11:46] after a little bit of soak time so say a
[11:49] week we see that very very quickly grow
[11:51] to around 3 million entities per shot so
[11:54] yeah things things grow pretty quickly
[11:56] and like from there we see things kind
[11:58] of continuous continue to grow this kind
[12:00] of why we need like this big focus on
[12:01] like cleaning up entities and stuff like
[12:03] that it doesn't just help the game it
[12:05] also helps the network with the
[12:06] replication and the interaction delay so
[12:08] in order to optimize the binds what we
[12:10] need to do is properly assess what part
[12:14] of a big bind can be done in parallel
[12:16] with another so that they don't interact
[12:18] with each other that allows us to go
[12:20] wide use more Lanes to go faster the
[12:23] motorway is completely clear we just
[12:24] can't get the things up the on-ramp fast
[12:26] enough so so what we're trying to do is
[12:29] basically add more
[12:30] onramps um so so with binds what that
[12:33] means is we might have the same number
[12:35] of entities that we need to actually get
[12:37] you that you that you want to see that
[12:38] you want to see updated but what we can
[12:41] try and do is try and do that faster so
[12:43] with
[12:44] parallelization with some clever
[12:46] optimizations among other things
[12:51] hopefully progress is looking positive
[12:54] so we've been working on a lot of the
[12:56] more like tedious little little details
[12:58] which has been like kind of like
[13:00] figuring out how we get information into
[13:03] our message queue in the most in the
[13:04] most optimal way possible um but that's
[13:07] also setting us up for being able to
[13:09] then very be very clever about how we
[13:11] parallelize the binance there we go I
[13:14] just click on the left click on the
[13:16] mouse so I open the the tunnel here we
[13:19] go here we go we are we are opening it
[13:22] all right entering jump channel here we
[13:25] go so smooth so smooth so smooth
[13:30] okay I am really excited to see this
[13:32] progress further already the jump Gates
[13:34] feel really smooth and reliable to make
[13:36] use of this is going to make a very
[13:38] exciting addition to the game when it
[13:40] comes to live and opens up so many
[13:42] possibilities for the future everyone at
[13:44] C is doing an incredible job of bringing
[13:47] this to reality amazing work all around
[13:50] all right so now that I kind of left the
[13:52] FPS kind of catch up with me here and
[13:54] you know I'm kind of trying to let the
[13:55] all the shaders load so that's probably
[13:57] hopefully a lot of what you're seeing
[13:58] with and it's not just optimization
[14:00] issues but it's starting to feel better
[14:03] now that I'm kind of just standing here
[14:04] for a moment we really think that
[14:06] unlocking that will allow us to go to at
[14:07] least 10x performance on the ver versus
[14:10] the current game experience on live
[14:12] which is at 100 players uh but this will
[14:14] also allow us to uncover more layers of
[14:17] the onion that we can optimize to go at
[14:19] even higher numbers on one single hybrid
[14:22] which will allow us to go bigger just
[14:23] like we did with rmq from nmq just like
[14:26] we did with the dir variables
[14:28] optimizations binds will allow us to go
[14:30] further but it's not the end of the
[14:31] tunnel we still have more work to do to
[14:33] get even more player counts on one
[14:36] hybrid all right we're going to see
[14:39] what's inside here oh my
[14:41] God this is so crazy oh too much
[14:51] light the visuals are crazy we want to
[14:55] push further and you know the message
[14:57] from Chris is go as big as we can as as
[15:00] quickly as we can uh we want to do that
[15:02] in a way that delivers a better feeling
[15:05] more responsive game uh we're not just
[15:07] going to jump to big numbers just
[15:08] because we can uh there's nothing
[15:10] stopping us going and putting a couple
[15:12] more zeros at the end of the player cap
[15:14] but that's not going to lead to a good
[15:16] experience until we continue to address
[15:19] the bottlenecks that we know we have uh
[15:22] and more that will discover as we go
[15:24] forward we have a lot that we can
[15:25] improve on and a lot of that conf like
[15:27] looks very very intimidating dating but
[15:30] like I'm excited would probably be the
[15:32] emotion to kind of um to kind of use for
[15:35] it because we spent so long trying to
[15:37] figure out how we can do server meshing
[15:39] that we've not really had a chance to
[15:40] like kind of slow down and look and now
[15:43] we're kind of in that phase where we can
[15:44] where we can kind of look at where like
[15:46] every like things that have existed for
[15:48] the past 10 years can be improved and
[15:51] being able to then like tear out huge
[15:54] systems and replace them like with nmq
[15:56] and rmq and like really try and like
[16:00] make the most the the best thing that we
[16:03] possibly can is is really
[16:08] exciting so what did we learn this week
[16:11] that the progress of moving server
[16:12] Mission forward is only made possible
[16:14] with the help of testers like you that
[16:17] each new win like rmq peels back another
[16:20] layer of the performance onion to be
[16:21] addressed next like binds which since
[16:24] the time these interviews were recorded
[16:26] have made tremendous progress and are
[16:28] already revealing in the next layers
[16:29] underneath and that this work doesn't
[16:32] stop with the upcoming Alpha 4.0 because
[16:35] as the game grows to the sight set in
[16:37] Star Citizen 1.0 and Beyond so too must
[16:40] the efforts to continuously optimize and
[16:42] I want to give a special thanks to Star
[16:44] citizens ater moth citizen Kate and will
[16:47] doinga even lease hybrid V let regular I
[16:51] tried morphologist all 43 speed Fragger
[16:54] and toata as well as everyone else who's
[16:56] been documenting this process from the
[16:59] other side of the table for inside Star
[17:01] Citizen I'm Jared hucke thanks for
[17:02] letting us share the people and process
[17:04] of game development with you and as next
[17:07] week is iae instead of ISC there's going
[17:10] to be something a little bit different
[17:11] coming your way next Friday we'll see
[17:13] you
[17:19] [Music]
[17:27] there for

# CitizenCon 2951: Server Meshing & The State Of Persistence

**Video:** https://www.youtube.com/watch?v=TSzUWl4r2rU
**Date:** 2021-10-09
**Duration:** 28:52

## Transcript

[00:08] - [Benoit] The concept of server,
which has been ingrained since the beginning,
[00:11] has changed to become a mesh of servers.
[00:14] - [Paul] So how do we solve this?
[00:15] The answer should be simple.
[00:18] SERVER MESHING AND THE STATE OF PERSISTENCE
[00:23] Hi, my name is Paul Reindell,
and I'm the Director for Online Technology here at CIG.
[00:26] I wanted to take this year's CitizenCon as an
opportunity to give you some insight into exciting
[00:33] persistent streaming and server meshing technology.
[00:36] In this talk, I will cover a quick overview of the
current streaming and server architecture,
[00:41] and how we plan to transform the existing tech into
what we call persistent streaming and server meshing.
[00:45] I also have Benoit Beauséjour with me,
who later in the talk will give you more insight
[00:50] into the graph database that
is powering persistent streaming.
[00:54] Hey, Ben.
How's it going?
[00:55] - [Benoit] Hi, Paul.
Hi, everybody.
[00:57] I'm super excited to share some of the details about
what the Game Services team at Turbulent has been
[01:02] working on to support the efforts to build this
technology and make it a reality for you guys.
[01:07] - Cool.
Let's get started.
[01:10] UNIVERSE SETUP
[01:15] Before we look into persistent streaming and server
meshing, and how this new technology will work,
[01:19] let's have a brief look at entity streaming and how our
solar system is set up.
[01:23] Each solar system can be seen as one giant level,
containing every single object inside the solar system,
[01:28] from the sun, to the meteor rock,
stand as one large map.
[01:33] Since this is a lot of data,
the setup is split up into a hierarchy of nested
[01:36] object containers, which can be
streamed in and out individually.
[01:40] If you look at an abstract view of Stanton,
it all starts as one solar system
[01:43] route object container.
[01:46] This object container contains the sun, the planets,
and the moons around each planet.
[01:51] Each of those locations then
has its own object container.
[01:53] And if you take a closer look at the moon,
you will find the entities placed around the moon
[01:57] inside this object container.
[01:59] For example, a space station orbiting the moon.
[02:02] This setup keeps repeating,
and the space station could be set
[02:05] up by via multiple rooms,
each defined by its own object container.
[02:09] Additionally, to the static hierarchy of object
containers, there are also other dynamic entities which
[02:14] bring the universe to life, NPCs,
an interactive vending machine, and of course,
[02:19] players and spaceships.
[02:21] Most of these entities are made of a hierarchy as well.
[02:24] For example, a player has his body, an under suit,
and armor attached to it.
[02:28] And they're all shard entities of the player.
[02:31] The streaming system treats these mini hierarchies as
streaming groups to make sure that an object like a
[02:36] spaceship is always treat them as one unit.
[02:38] Loading the entirety of Stanton into memory and
simulating every single entity would be very expensive,
[02:43] especially on the client, but also on a single server.
[02:48] STREAMING AND REPLICATION
[02:53] That's why we developed entity bind
culling and object container streaming,
[02:57] which allows us to stream object containers and
streaming groups individually.
[03:01] When the game server starts,
all entities and object containers in the solar system
[03:05] are loaded into local memory of that game server.
[03:09] These entities are not streamed in.
[03:10] We just store the initial state and server memory.
[03:13] When a player connects,
we create a so called streaming bubble
[03:17] around that player.
[03:18] And object containers as well as streaming groups that
are visible from the player's point of view are
[03:23] considered inside this bubble.
[03:26] Any object container that is inside the bubble will
stream its content, and any streaming group that's
[03:31] in the bubble will also be streamed in on the server
and then replicated to the client.
[03:37] Entities are considered inside the stream bubble if
their projected screen size on a virtual 1080P plane is
[03:42] larger than five pixel based on
the distance of the player.
[03:45] So while a large object like moon will be considered
inside the bubble from far away,
[03:50] a small object like ship will only be considered inside
when it's much closer to the player.
[03:56] When the player starts moving across the universe,
entities that leave the streaming bubble will become
[04:00] unbound and the replication layer will remove these
entities from the client.
[04:05] Entities that enter the streaming bubble will get bound
to the client, which cause the network layer
[04:10] to replicate these entities to the client,
effectively streaming them in.
[04:15] We call this technique entity bind culling because
streaming on the client is driven by the network layer,
[04:20] binding and unbinding entities.
[04:22] If entities are not in any client streaming bubble,
so no players in their vicinity,
[04:27] these entities are also streamed out on the server.
[04:31] They go back into a dormant
state where they are not simulated.
[04:36] PROBLEMS TO SOLVE
[04:41] This model works quite well on the client.
[04:44] However, it doesn't scale well on the server.
[04:47] While we do stream entities on the server if no
player's close to them,
[04:51] the poor distribution of players will cause the DGS to
load most entities.
[04:54] And the more clients we try to match to a given game
server, the likelihood of a player being at every
[04:59] single location increases.
[05:01] And that basically nullifies the
benefit of servers at streaming.
[05:06] So how do we solve this?
[05:07] The answer should be simple.
[05:08] Allow multiple instances of the game server to work
together so they can split up the work.
[05:14] Well, it's not quite that simple.
[05:16] Let's have a look at the current architecture.
[05:19] ARCHITECTURE
[05:24] As of today, we have
a traditional client server architecture.
[05:27] One instance of a dedicated game
server serves up to 50 clients.
[05:31] This is called instance,
as the dedicated game server has its own instance view
[05:35] of the persistent universe.
[05:37] Once a server is full, we start a new server instance,
which then serves additional 50 players.
[05:44] As we've seen before, when a DGS instance is created,
it loads a unique version of the Stanton System
[05:49] into its local server's memory.
[05:51] Therefore, each dedicated game server instance has a
unique copy of every single object that's
[05:56] part of Stanton.
[05:58] As these entities only exist in the memory of the game
server, when instances shut down,
[06:03] these entities are deleted.
[06:05] REPLICATION LAYER
[06:10] The goal of server meshing is to allow multiple DGS
instances to work together and divide simulation costs
[06:16] between each server and the mesh.
[06:18] In the best case, we can scale to infinity by adding
more nodes to the mesh.
[06:22] As we saw earlier, each server node
stores the state of entities locally.
[06:25] If you want to mesh these servers together,
we need to find an efficient way to synchronize state
[06:29] between each server.
[06:31] With our current architect,
depending on the vision of the simulation and
[06:36] the overlap, this would require a lot of
synchronization points between each node.
[06:41] It's an exponential problem, as in the worst case,
each node would need to talk to each other node
[06:45] in the mesh, severely limiting our ability to scale it.
[06:50] To solve this issue,
we are separating simulation and replication.
[06:54] Instead of just meshing multiple dedicated game servers
together, and have them synchronize state
[07:00] between each other, we are introducing a new layer
called replication layer.
[07:06] The replication layer has two major functions.
[07:08] It holds the state of every entity in memory and
replicates the state to clients,
[07:13] but also to server nodes.
[07:15] I said server nodes because in this set up,
the traditional dedicated game server becomes a
[07:20] game server node.
[07:21] This server node connects to the replication layer,
very similar to a client,
[07:25] and only a subset of entities
are replicated to that server node.
[07:29] Replication to server nodes is controlled by the
network bind culling algorithm that we saw earlier.
[07:34] And it's driven by streaming bubbles.
[07:36] And it works very similar to how it works on clients.
[07:40] The server node has certain streaming bubbles assigned
to it, which will cause the replication here
[07:44] to replicate entities from these streaming bubbles to
the server node.
[07:48] Contrary to a player's client,
a server node has the additional responsibility
[07:52] to execute server side authoritative code for those
entities, controlling AI, doing
[07:57] damage calculations, etc., etc.
[08:00] The result of the simulation is then written back from
the server node to the replication layer.
[08:05] And from there, it's replicated to all connected
clients and other server nodes.
[08:10] Since streaming bubbles can overlap,
entities may be replicated to multiple server nodes,
[08:14] exactly the same way how they are currently replicated
to multiple clients of players at the same location.
[08:20] To avoid two server nodes trying to simulate the same
entity, only one server node can have authority
[08:25] over any given entity.
[08:27] And only that server's allowed to write entity state
back to the replication layer.
[08:32] This is usually the first server node to replicate the
entity and other server nodes will only run client code
[08:38] on those entities.
[08:39] Basically, you can see a game server node as a client
with authority, to write the result of its local
[08:44] simulation back to the replication layer.
[08:47] Authority can transfer between server nodes.
[08:50] For example, if an entity leaves the streaming bubble
of the current authoritative server,
[08:54] it is then transferred to the next server node that has
this entity currently streamed in.
[08:58] Further authority can be transferred between server
nodes on demand, in order to load balance the mesh.
[09:05] SHARDS AND PERSISTENT STREAMING
[09:10] Since we've now meshed multiple server instances
together to simulate a shared state of the universe,
[09:15] we no longer call this instance, but instead,
we call it shard.
[09:20] A shard is still a unique version of the universe,
and we still have multiple shards running in parallel.
[09:26] However, the server mesh will lift our current hard
limit of 50 players and it will enable us to steadily
[09:30] increase the number of players we
can support within one shard.
[09:33] It will take some time,
and in our first version of server meshing,
[09:37] we will still have a very similar situation as we have
today, there's quite a few shards running in parallel.
[09:42] However, this technology is going to enable us to start
scaling the universe to become a true MMO experience.
[09:48] There are some fundamental differences between a shard
and an instance.
[09:52] And for this, we need to take a closer look at the
replication layer and talk a little bit
[09:56] about persistent streaming.
[09:58] Previously, the entity state was held entirely in
memory on the dedicated game server.
[10:02] And besides some selected persistent play items,
all that state would be lost when the servers shut
[10:07] down or crashed.
[10:10] The replication layer is fundamentally different as the
entire state of the universe is stored
[10:15] in a graph database.
[10:16] We call this entity graph and it's
an evolution of the original iCache.
[10:21] When we create a new shard,
the initial entity state of the universe is seeded
[10:24] into this database.
[10:25] This happens offline before we
let player join the shard.
[10:29] When the shard comes online,
the replication mesh caches the state
[10:32] from the entity graph.
[10:34] As player connect to the shard and as we start to spin
up new server nodes,
[10:38] simulation begins and alter the state of the universe.
[10:41] The replication layer does not only replicate the state
changes to connect players and server nodes,
[10:45] it also replicates the state into the entity graph.
[10:49] Since the entity graph is a persistent database,
the state of the shard is never lost.
[10:55] And even if the shard is shut down,
the state persistent can be resumed at a later time.
[11:00] Benoit is going to show you some more technical details
about the entity graph.
[11:04] - Thank you, Paul.
[11:06] Get ready for a deep dive
into the entity graph persistent database.
[11:11] PERSISTENCE
[11:16] The entity graph is our approach
to persisting the game world.
[11:19] This is fundamentally different to what is happening
today in the game, where only items you own
[11:24] are actually stored.
[11:25] Our objective is to be able to save the state of the
replication layer, which includes all entities in a
[11:31] given universe shard,
in order to provide a truly persistent world,
[11:35] where actions you take as a player can influence
environments in the game world, permanently.
[11:40] The entity graph, as the name implies,
stores game data as a graph.
[11:45] This representation is native for the game engine
because it is how internally,
[11:49] those data structures the game uses,
are addressed and manipulated.
[11:53] Using a graph also has several advantages.
[11:57] We're basically storing and retrieving from a gigantic
indexed list of nodes and edges.
[12:04] And those edges between those nodes
are optimized in a sharded database.
[12:09] But in order to properly explain the system,
we must first view the game world as the game
[12:14] engine sees it.
[12:15] Game objects are constructed of several game entities
linked together in hierarchical structure.
[12:21] You can picture this as a tree,
which is a specialized kind of graph.
[12:24] This is how the game engine holds and simulates the
elements on screen as it is running the simulation.
[12:30] In a server meshing world,
this is also how replicants hold the entities in memory
[12:35] for each of their assigned territories.
[12:37] For example, a ship is made up of several entities that
make up different parts of the entire playable vehicle.
[12:44] Each part is parented to another entity until the root
of the ship is reached.
[12:49] Each of these entity nodes holds properties with regard
to what the entity represents in the game.
[12:54] That class of object it is, the item type,
its legal owner, orientation, and of course,
[12:59] the very precise physical location
within the game world.
[13:03] Each edge in our graph qualifies
the relationship to the parent.
[13:07] In the case of the vehicle,
our edges store properties that tell the system which
[13:11] port is being used to attach the entity into the
parent, and what kind of attachment it is,
[13:16] an important attachment, a
zone attachment, many others.
[13:20] In a constellation, for example,
the different major sections of the hall are entity
[13:25] nodes with edges to the ship route.
[13:27] We call the small graph of item an aggregate,
because it is a whole movable unit.
[13:32] The ship route in this case is called the aggregate
route because it sits at the top of a logical object.
[13:38] You can think of what you normally call an item as an
aggregate, with the aggregate route being the actual
[13:43] item you're talking about.
[13:45] For example, a first person weapon with attached scope,
mag clips, and laser sights,
[13:49] is a small hierarchy of entities.
[13:52] We distinguish the aggregate route from other nodes by
giving it a label.
[13:56] Labels allow us to distinguish and rapidly look up and
find nodes of a specific type,
[14:01] either when we retrieve parts of the graph,
or when we look up specific nodes.
[14:05] Those labels exist to allow correct reversal of the
graph data when we query for specific things
[14:10] in the game world.
[14:11] Other labels include streaming groups, universe route,
star system route.
[14:17] This allows us to really look up and index those types.
[14:20] But the tree depth doesn't stop there.
[14:24] Additional information is required for
a fully functional ship.
[14:27] The insides of each of those structural entities have
to be flushed out.
[14:31] Object containers are the building blocks of how space
division is achieved,
[14:34] which aggregates what part of the hierarchy they're in.
[14:38] In fact, most major areas of ships are represented as
OC entities attached to the ship route or another OC.
[14:44] The shape of this data actually takes in reality is
driven by designers.
[14:50] Of course then, each of those object containers also
contain entity hierarchies as well,
[14:55] expanding to have the common static and dynamic
entities you're used to playing with, like elevators,
[15:00] beds, guns, seeds, gimbals, and others.
[15:04] In addition to object containers that make up the
structure of the ship,
[15:08] other aggregates can also be attached within the
hierarchy of our ship.
[15:11] For example, a rover parked in the cargo bay of our
colony will be attached as a sub-aggregate attached
[15:16] to your ship's cargo grid.
[15:18] Same goes for turrets, which are changeable,
and themselves expose item ports,
[15:22] allowing guns to be mounted.
[15:24] For each of those entity nodes,
a snapshot document is also stored.
[15:29] This document contains all the runtime values the game
components attach to those entities.
[15:34] This data is the dynamic part of the model where game
developers can persist variables on any entity in the
[15:39] game world, according to the rules of a game component.
[15:42] For example, damage state and health data are stored
within the snapshot document of those ship entities.
[15:50] Storing and retrieving data in graph form really have
some awesome properties.
[15:57] It's a native structure of the game engine,
so it gets loaded rapidly.
[15:59] It's very simple and effective to serialize and
transport, because it's just a list of nodes and edges.
[16:05] There are optimized databases that we can use that
allow us to fetch entities recursively
[16:11] in a traversal rapidly.
[16:13] And the data set can be sharded across multiple
database instance reliably.
[16:18] One key element here and one big advantage of having a
graph data is also that we can reduce writes.
[16:23] So, in order to reduce that,
all the hierarchical changes that we need to do
[16:30] can be minimized.
[16:31] For example, if we want a detach mutation command,
will detach an entity from the hierarchy.
[16:37] In this case, a single edge must be erased,
which is a very inexpensive operation.
[16:42] A nice side effect of this is also that it's the same
operation, whether we're detaching a single entity or
[16:48] an entire aggregate.
[16:49] In both cases, the single edge must be erased in order
to perform the detach.
[16:54] Rolling away in your stowed rover,
detaching a gun for a replacement,
[16:59] or selling a turret becomes really
a cheap operation to persist.
[17:03] That is good because it happens very frequently.
[17:07] Compared to a columnar approach where index columns
must be maintained for every write,
[17:10] linking all object to the aggregate route,
this is a really great performance improvement.
[17:16] The same properties apply with the attach command,
which will only have to create a single edge when
[17:21] rejoining items to the hierarchy,
be it via attachment or parking another vehicle
[17:25] on a docking hub.
[17:27] The attach and detach commands are two of the many
semantic commands that the entity graph API proposes,
[17:33] allowing to express a mutation to the graph.
[17:37] Other example of the different commands are, create,
possess, transfer, stack, unstack, change location,
[17:44] change snapshot, bury, stow, and unstow.
[17:49] One important change,
an addition that comes about with the entity graph is
[17:53] also how mutations are applied to the database.
[17:56] Each mutation is composed of multiple commands which
are executed in sequence,
[18:01] but committed transactionally to the database.
[18:03] They either succeed together or
fail and rollback together.
[18:08] This ensures that the changes to the graph are always
consistent, and no lost writes or errors can
[18:13] cause data corruption.
[18:15] For example, a mutation consisting of detached transfer
and attach commands would succeed only if all three
[18:22] commands are applied successfully.
[18:25] The system retrieves a constant ordered streams of
mutation from the replicant scribes that are part
[18:31] of the replication layer and are enqueued in durable
queues, to ensure that no message is lost even if the
[18:37] service is unavailable or paused.
[18:40] It's important to understand that the graph does not
only cover your ships and items,
[18:45] but the entire game world is made up this way.
[18:48] Your ship is actually attached to the zone host
location you travel in.
[18:52] Your playing character is attached to your ship seed
when you are piloting it,
[18:56] just like planets are attached
to their star system routes.
[18:59] SEEDING
[19:04] The game world, though, must exist in persistence,
before it can be replicated and mutated.
[19:10] This is part of a process called seeding,
where a new database is created
[19:13] by the replication layer.
[19:15] It is during that process that millions of entities are
initially created in a sort of a big bang.
[19:22] At this stage, every object container,
every minor or major entity, from planets to doorknobs,
[19:27] are inserted into the entity
graph in their default state.
[19:30] That is the state that the designers decided was the
initial state of the world.
[19:35] This process goes down from the universe route to the
star system route, and into the different areas
[19:40] and planets, into their landing zone, their buildings,
their rooms, down to the smallest possible entity.
[19:47] There are multiple types of entities that are created
during this process.
[19:52] First, are unstreamable entities,
which make up the skeleton of the universe.
[19:57] Those are entities you do not get to see but are part
of and are always present on every worker node
[20:02] in the mesh.
[20:03] It is by looking up unstreamable entities that the game
world is able to stream in the other types of entities
[20:09] into your client and into the server mesh.
[20:12] It is from those entities that other entities bloom.
[20:16] Static entities make up the game
world that you cannot interact with.
[20:20] Most map objects that makeup buildings like the
Hearthstone tower, rooms and walls of hospitals,
[20:26] or the bar G-Loc, are all made up of static entities.
[20:29] And the last type is dynamic entities.
[20:31] These are entities that you as a player can manipulate,
a bottle on a bar, a door and a level,
[20:37] a ship component, everything you interact with when
you're playing the game.
[20:42] Of course, during seeding,
all object containers are also seeded as part of this
[20:46] hierarchy and inform the shape
of the loadable sub-graphs.
[20:50] The seeding process takes a
couple of minutes to complete.
[20:54] Once created, this newly seeded database represents a
full dimension of the universe,
[20:59] and will now persist as it is modified by players.
[21:04] As you play the game and go about with your ship,
your playing character entity moves from location
[21:09] to location, getting attached to
new zones as you travel.
[21:13] Your player aggregate is itself part of the
[inaudible 00:21:15] graph,
[21:16] and your location and state are persisted by the
replication layer scribes to the entity graph
[21:21] of your given territory.
[21:23] When you interact with dynamic objects and their
properties change, the state of that entity will not
[21:28] persist until this instance of
the database is undeployed.
[21:33] There are in fact multiple copies of the universe that
are seeded at a given time.
[21:38] We call those shards.
[21:39] Each shard is a unique copy of the game world,
complete with all of its entities and unique states.
[21:45] Think of it as an alternate universe.
[21:47] Dynamic entities that have been modified in each
dimension will have different states.
[21:51] The bottle on the bar was moved or the door was
destroyed, might not be in the same
[21:54] state between shards.
[21:56] This technique is a way to gain scalability as our
player base grows.
[22:00] A single shard can grow to
host multiple millions of entities.
[22:04] Even if each shard database is itself clustered and can
grow substantially past a single machine,
[22:10] there is a point where multiple clusters are needed.
[22:13] As you join the persistent universe ,the matchmaking
system is getting retooled in order to select the
[22:18] correct universe shard for you to play on,
using multiple data points,
[22:22] like your friends' location, your active party,
your last game session,
[22:26] and/or which shards still have items
on it that you own.
[22:29] This is to ensure, as much as possible,
that you end up on the same shard you expect to be
[22:34] as a player.
[22:36] GLOBAL VS SHARD DATA
[22:41] In order to provide a seamless game experience,
it would be terrible if you lost items you used when
[22:47] you were in a given shard versus another,
or if your character was bound to a shard forever.
[22:52] To alleviate this, the system includes the concept of
stowed and unstowed entities.
[22:58] An item is considered unstowed when it is currently
active in a shard database and being actively simulated
[23:04] on by the worker nodes of the replication layer.
[23:07] Stowed entities are player owned entities that are
stowed in inventory containers or location inventories.
[23:14] Those entities live in another database entirely called
the global database,
[23:18] a large cluster database that spans all shards.
[23:22] Aggregate routes in that shard are stored and linked
with edges to inventory nodes.
[23:27] Any entity in a shard can have an inventory node in
global for stowing things in it.
[23:32] For example, a box entity that is unstowed in a shard
would have an inventory node in the global database
[23:38] to store its content.
[23:40] This allows to keep unstimulated entities in a
non-shard specific database,
[23:44] while keeping the live aggregate within the shard.
[23:48] As you transition between shards,
your playing character gets unstowed
[23:52] into the selected chart.
[23:53] This process effectively moves your player aggregate
data from the global database to the shard database.
[23:59] Your player entity now gets simulated by game worker
nodes and is being updated at a regular rate as you
[24:05] play and move around the game world.
[24:08] Accessing items that are stowed like a ship from the
Aesop terminal is basically reading the inventory
[24:13] contents of the global graph at your location.
[24:16] Same goes for personal inventories,
or cargo inventories.
[24:21] When you request the ship to be spawn,
the system will unstow the ship onto a landing pad
[24:26] by submitting a shard mutation.
[24:28] Alternatively, when a ship gets despawn during parking
at a rest stop, the ship gets stowed back into the
[24:34] global database, making it available
for unstow in any shard.
[24:39] The global database is where all
of your stowed items will live.
[24:43] Hero items will always be available for unstow in any
shard, if they are not already in use.
[24:49] The process of stowing and unstowing also helps to
alleviate problems related to entity authority so that
[24:56] only game worker nodes in the right shard can update
unstowed entities in that shard.
[25:01] This brings about a nice property of the server meshing
and persistent streaming architecture,
[25:06] in that the state of the entities are being persisted
transactionally during play,
[25:11] be it in a shard or a global database through stowing.
[25:13] A single server crash or 30K should
no longer result in item loss.
[25:19] This model also has a real scalability benefit that
stems from the separation of the read intensive
[25:25] workloads that are isolated to the global DB,
from the write intensive workloads that are handled
[25:31] by the individual shard database.
[25:33] The global graph exists to provide seamless access to
your belongings no matter what shard or alternate
[25:38] universe you're currently playing in.
[25:41] BENEFITS AND CHALLENGES
[25:46] Okay, let's go back to Paul to learn about some of the
benefits of the server meshing architecture.
[25:51] - Yeah.
[25:51] The first benefit is obviously the advantage that we
don't have this issue of synchronization
[25:56] between different server nodes.
[25:59] Each server node has one single connection to the
replication layer, which is used to push and get
[26:03] updates for entities of interest.
[26:05] The second advantage is that the same streaming and
replication logic that we already use for clients can
[26:11] be applied to servers.
[26:11] And that server nodes will only stream in a small area,
which will greatly increase performance.
[26:17] It also allows us to increase resilience down the road.
[26:20] As long as the client is connected to the replication
layer, the client stays connected even if the
[26:25] server node crashes.
[26:27] In this case, the simulation for an entity may be
stopped for a moment,
[26:32] but as soon as a new server comes online,
the simulation will just continue.
[26:36] While the underlying tech is close to completion,
there are some upcoming challenges that we need
[26:40] to solve before we can get that into your hands.
[26:43] The first version of this technology will contain a
static server mesh.
[26:46] Instead of the fully dynamic mesh that we saw earlier,
the static mesh assigns server nodes to predefined
[26:51] sections of the solar system.
[26:53] This will reduce the amount of authority transfer that
game code has to address in this first release.
[26:59] There will also be a lot of challenges for the game
services and game feature teams.
[27:04] Maybe Benoit can give a little bit more.
[27:06] - Yeah.
[27:07] There are many parts of the game that are affected by
this new server meshing architecture.
[27:12] So any game play features that has to rely on the
concept of a server, right?
[27:17] Currently, when you connect to a game server,
we know what match you're in.
[27:21] So to send messages and update to that server,
we simply locate your active match,
[27:25] and then send those messages out there.
[27:27] That concept needs to change because we now have a mesh
to deal with.
[27:31] And so there are multiple game servers that need to
receive this information.
[27:34] They need to be able to subscribe dynamically to it or
unsubscribe dynamically to players
[27:38] transitioning through them.
[27:41] So you can imagine that this will affect things like
missions that currently are spawned locally
[27:45] on the game server.
[27:46] These now need to be spawned globally within the shard
and also persist their state.
[27:50] So all services that are attached to missions,
whether it's the quantum system in the back end,
[27:57] or the quasar tools,
need to now know about the concept of a shard.
[28:01] This also goes deep into, like,
things that are mechanical.
[28:04] Like, you know, getting global chat
to work on a server.
[28:07] That concept now needs to be extended to the shard
where this will probably push us to implement this as a
[28:13] location based chat, for example.
[28:15] And so many teams in the company now need to change
their feature to take into account the meshing
[28:20] technology that's behind it,
because the concept of server which has been ingrained
[28:24] since the beginning has changed to
become a mesh of servers.
[28:27] - Yeah, exactly.
[28:29] So I also want to shout out to the network team who's
working on the replication layer and the bind culling,
[28:34] as well as the persistent tech team who's working on
the entity and object container streaming.
[28:39] And as Benoit said also,
all the other teams that work on game play features or
[28:43] game play services that are
affected by this new technology.
[28:46] There are a lot of devs working on this and we're very
excited to push on this new technology.
[28:51] Thank you for your time.
[28:55] ♪ [music] ♪

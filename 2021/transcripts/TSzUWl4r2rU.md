# CitizenCon 2951: Server Meshing & The State Of Persistence

**Video:** https://www.youtube.com/watch?v=TSzUWl4r2rU
**Date:** 2021-10-09
**Duration:** 28:52

## Transcript

- [Benoit] The concept of server,
which has been ingrained since the beginning,
has changed to become a mesh of servers.
- [Paul] So how do we solve this?
The answer should be simple.
SERVER MESHING AND THE STATE OF PERSISTENCE
Hi, my name is Paul Reindell,
and I'm the Director for Online Technology here at CIG.
I wanted to take this year's CitizenCon as an
opportunity to give you some insight into exciting
persistent streaming and server meshing technology.
In this talk, I will cover a quick overview of the
current streaming and server architecture,
and how we plan to transform the existing tech into
what we call persistent streaming and server meshing.
I also have Benoit Beauséjour with me,
who later in the talk will give you more insight
into the graph database that
is powering persistent streaming.
Hey, Ben.
How's it going?
- [Benoit] Hi, Paul.
Hi, everybody.
I'm super excited to share some of the details about
what the Game Services team at Turbulent has been
working on to support the efforts to build this
technology and make it a reality for you guys.
- Cool.
Let's get started.
UNIVERSE SETUP
Before we look into persistent streaming and server
meshing, and how this new technology will work,
let's have a brief look at entity streaming and how our
solar system is set up.
Each solar system can be seen as one giant level,
containing every single object inside the solar system,
from the sun, to the meteor rock,
stand as one large map.
Since this is a lot of data,
the setup is split up into a hierarchy of nested
object containers, which can be
streamed in and out individually.
If you look at an abstract view of Stanton,
it all starts as one solar system
route object container.
This object container contains the sun, the planets,
and the moons around each planet.
Each of those locations then
has its own object container.
And if you take a closer look at the moon,
you will find the entities placed around the moon
inside this object container.
For example, a space station orbiting the moon.
This setup keeps repeating,
and the space station could be set
up by via multiple rooms,
each defined by its own object container.
Additionally, to the static hierarchy of object
containers, there are also other dynamic entities which
bring the universe to life, NPCs,
an interactive vending machine, and of course,
players and spaceships.
Most of these entities are made of a hierarchy as well.
For example, a player has his body, an under suit,
and armor attached to it.
And they're all shard entities of the player.
The streaming system treats these mini hierarchies as
streaming groups to make sure that an object like a
spaceship is always treat them as one unit.
Loading the entirety of Stanton into memory and
simulating every single entity would be very expensive,
especially on the client, but also on a single server.
STREAMING AND REPLICATION
That's why we developed entity bind
culling and object container streaming,
which allows us to stream object containers and
streaming groups individually.
When the game server starts,
all entities and object containers in the solar system
are loaded into local memory of that game server.
These entities are not streamed in.
We just store the initial state and server memory.
When a player connects,
we create a so called streaming bubble
around that player.
And object containers as well as streaming groups that
are visible from the player's point of view are
considered inside this bubble.
Any object container that is inside the bubble will
stream its content, and any streaming group that's
in the bubble will also be streamed in on the server
and then replicated to the client.
Entities are considered inside the stream bubble if
their projected screen size on a virtual 1080P plane is
larger than five pixel based on
the distance of the player.
So while a large object like moon will be considered
inside the bubble from far away,
a small object like ship will only be considered inside
when it's much closer to the player.
When the player starts moving across the universe,
entities that leave the streaming bubble will become
unbound and the replication layer will remove these
entities from the client.
Entities that enter the streaming bubble will get bound
to the client, which cause the network layer
to replicate these entities to the client,
effectively streaming them in.
We call this technique entity bind culling because
streaming on the client is driven by the network layer,
binding and unbinding entities.
If entities are not in any client streaming bubble,
so no players in their vicinity,
these entities are also streamed out on the server.
They go back into a dormant
state where they are not simulated.
PROBLEMS TO SOLVE
This model works quite well on the client.
However, it doesn't scale well on the server.
While we do stream entities on the server if no
player's close to them,
the poor distribution of players will cause the DGS to
load most entities.
And the more clients we try to match to a given game
server, the likelihood of a player being at every
single location increases.
And that basically nullifies the
benefit of servers at streaming.
So how do we solve this?
The answer should be simple.
Allow multiple instances of the game server to work
together so they can split up the work.
Well, it's not quite that simple.
Let's have a look at the current architecture.
ARCHITECTURE
As of today, we have
a traditional client server architecture.
One instance of a dedicated game
server serves up to 50 clients.
This is called instance,
as the dedicated game server has its own instance view
of the persistent universe.
Once a server is full, we start a new server instance,
which then serves additional 50 players.
As we've seen before, when a DGS instance is created,
it loads a unique version of the Stanton System
into its local server's memory.
Therefore, each dedicated game server instance has a
unique copy of every single object that's
part of Stanton.
As these entities only exist in the memory of the game
server, when instances shut down,
these entities are deleted.
REPLICATION LAYER
The goal of server meshing is to allow multiple DGS
instances to work together and divide simulation costs
between each server and the mesh.
In the best case, we can scale to infinity by adding
more nodes to the mesh.
As we saw earlier, each server node
stores the state of entities locally.
If you want to mesh these servers together,
we need to find an efficient way to synchronize state
between each server.
With our current architect,
depending on the vision of the simulation and
the overlap, this would require a lot of
synchronization points between each node.
It's an exponential problem, as in the worst case,
each node would need to talk to each other node
in the mesh, severely limiting our ability to scale it.
To solve this issue,
we are separating simulation and replication.
Instead of just meshing multiple dedicated game servers
together, and have them synchronize state
between each other, we are introducing a new layer
called replication layer.
The replication layer has two major functions.
It holds the state of every entity in memory and
replicates the state to clients,
but also to server nodes.
I said server nodes because in this set up,
the traditional dedicated game server becomes a
game server node.
This server node connects to the replication layer,
very similar to a client,
and only a subset of entities
are replicated to that server node.
Replication to server nodes is controlled by the
network bind culling algorithm that we saw earlier.
And it's driven by streaming bubbles.
And it works very similar to how it works on clients.
The server node has certain streaming bubbles assigned
to it, which will cause the replication here
to replicate entities from these streaming bubbles to
the server node.
Contrary to a player's client,
a server node has the additional responsibility
to execute server side authoritative code for those
entities, controlling AI, doing
damage calculations, etc., etc.
The result of the simulation is then written back from
the server node to the replication layer.
And from there, it's replicated to all connected
clients and other server nodes.
Since streaming bubbles can overlap,
entities may be replicated to multiple server nodes,
exactly the same way how they are currently replicated
to multiple clients of players at the same location.
To avoid two server nodes trying to simulate the same
entity, only one server node can have authority
over any given entity.
And only that server's allowed to write entity state
back to the replication layer.
This is usually the first server node to replicate the
entity and other server nodes will only run client code
on those entities.
Basically, you can see a game server node as a client
with authority, to write the result of its local
simulation back to the replication layer.
Authority can transfer between server nodes.
For example, if an entity leaves the streaming bubble
of the current authoritative server,
it is then transferred to the next server node that has
this entity currently streamed in.
Further authority can be transferred between server
nodes on demand, in order to load balance the mesh.
SHARDS AND PERSISTENT STREAMING
Since we've now meshed multiple server instances
together to simulate a shared state of the universe,
we no longer call this instance, but instead,
we call it shard.
A shard is still a unique version of the universe,
and we still have multiple shards running in parallel.
However, the server mesh will lift our current hard
limit of 50 players and it will enable us to steadily
increase the number of players we
can support within one shard.
It will take some time,
and in our first version of server meshing,
we will still have a very similar situation as we have
today, there's quite a few shards running in parallel.
However, this technology is going to enable us to start
scaling the universe to become a true MMO experience.
There are some fundamental differences between a shard
and an instance.
And for this, we need to take a closer look at the
replication layer and talk a little bit
about persistent streaming.
Previously, the entity state was held entirely in
memory on the dedicated game server.
And besides some selected persistent play items,
all that state would be lost when the servers shut
down or crashed.
The replication layer is fundamentally different as the
entire state of the universe is stored
in a graph database.
We call this entity graph and it's
an evolution of the original iCache.
When we create a new shard,
the initial entity state of the universe is seeded
into this database.
This happens offline before we
let player join the shard.
When the shard comes online,
the replication mesh caches the state
from the entity graph.
As player connect to the shard and as we start to spin
up new server nodes,
simulation begins and alter the state of the universe.
The replication layer does not only replicate the state
changes to connect players and server nodes,
it also replicates the state into the entity graph.
Since the entity graph is a persistent database,
the state of the shard is never lost.
And even if the shard is shut down,
the state persistent can be resumed at a later time.
Benoit is going to show you some more technical details
about the entity graph.
- Thank you, Paul.
Get ready for a deep dive
into the entity graph persistent database.
PERSISTENCE
The entity graph is our approach
to persisting the game world.
This is fundamentally different to what is happening
today in the game, where only items you own
are actually stored.
Our objective is to be able to save the state of the
replication layer, which includes all entities in a
given universe shard,
in order to provide a truly persistent world,
where actions you take as a player can influence
environments in the game world, permanently.
The entity graph, as the name implies,
stores game data as a graph.
This representation is native for the game engine
because it is how internally,
those data structures the game uses,
are addressed and manipulated.
Using a graph also has several advantages.
We're basically storing and retrieving from a gigantic
indexed list of nodes and edges.
And those edges between those nodes
are optimized in a sharded database.
But in order to properly explain the system,
we must first view the game world as the game
engine sees it.
Game objects are constructed of several game entities
linked together in hierarchical structure.
You can picture this as a tree,
which is a specialized kind of graph.
This is how the game engine holds and simulates the
elements on screen as it is running the simulation.
In a server meshing world,
this is also how replicants hold the entities in memory
for each of their assigned territories.
For example, a ship is made up of several entities that
make up different parts of the entire playable vehicle.
Each part is parented to another entity until the root
of the ship is reached.
Each of these entity nodes holds properties with regard
to what the entity represents in the game.
That class of object it is, the item type,
its legal owner, orientation, and of course,
the very precise physical location
within the game world.
Each edge in our graph qualifies
the relationship to the parent.
In the case of the vehicle,
our edges store properties that tell the system which
port is being used to attach the entity into the
parent, and what kind of attachment it is,
an important attachment, a
zone attachment, many others.
In a constellation, for example,
the different major sections of the hall are entity
nodes with edges to the ship route.
We call the small graph of item an aggregate,
because it is a whole movable unit.
The ship route in this case is called the aggregate
route because it sits at the top of a logical object.
You can think of what you normally call an item as an
aggregate, with the aggregate route being the actual
item you're talking about.
For example, a first person weapon with attached scope,
mag clips, and laser sights,
is a small hierarchy of entities.
We distinguish the aggregate route from other nodes by
giving it a label.
Labels allow us to distinguish and rapidly look up and
find nodes of a specific type,
either when we retrieve parts of the graph,
or when we look up specific nodes.
Those labels exist to allow correct reversal of the
graph data when we query for specific things
in the game world.
Other labels include streaming groups, universe route,
star system route.
This allows us to really look up and index those types.
But the tree depth doesn't stop there.
Additional information is required for
a fully functional ship.
The insides of each of those structural entities have
to be flushed out.
Object containers are the building blocks of how space
division is achieved,
which aggregates what part of the hierarchy they're in.
In fact, most major areas of ships are represented as
OC entities attached to the ship route or another OC.
The shape of this data actually takes in reality is
driven by designers.
Of course then, each of those object containers also
contain entity hierarchies as well,
expanding to have the common static and dynamic
entities you're used to playing with, like elevators,
beds, guns, seeds, gimbals, and others.
In addition to object containers that make up the
structure of the ship,
other aggregates can also be attached within the
hierarchy of our ship.
For example, a rover parked in the cargo bay of our
colony will be attached as a sub-aggregate attached
to your ship's cargo grid.
Same goes for turrets, which are changeable,
and themselves expose item ports,
allowing guns to be mounted.
For each of those entity nodes,
a snapshot document is also stored.
This document contains all the runtime values the game
components attach to those entities.
This data is the dynamic part of the model where game
developers can persist variables on any entity in the
game world, according to the rules of a game component.
For example, damage state and health data are stored
within the snapshot document of those ship entities.
Storing and retrieving data in graph form really have
some awesome properties.
It's a native structure of the game engine,
so it gets loaded rapidly.
It's very simple and effective to serialize and
transport, because it's just a list of nodes and edges.
There are optimized databases that we can use that
allow us to fetch entities recursively
in a traversal rapidly.
And the data set can be sharded across multiple
database instance reliably.
One key element here and one big advantage of having a
graph data is also that we can reduce writes.
So, in order to reduce that,
all the hierarchical changes that we need to do
can be minimized.
For example, if we want a detach mutation command,
will detach an entity from the hierarchy.
In this case, a single edge must be erased,
which is a very inexpensive operation.
A nice side effect of this is also that it's the same
operation, whether we're detaching a single entity or
an entire aggregate.
In both cases, the single edge must be erased in order
to perform the detach.
Rolling away in your stowed rover,
detaching a gun for a replacement,
or selling a turret becomes really
a cheap operation to persist.
That is good because it happens very frequently.
Compared to a columnar approach where index columns
must be maintained for every write,
linking all object to the aggregate route,
this is a really great performance improvement.
The same properties apply with the attach command,
which will only have to create a single edge when
rejoining items to the hierarchy,
be it via attachment or parking another vehicle
on a docking hub.
The attach and detach commands are two of the many
semantic commands that the entity graph API proposes,
allowing to express a mutation to the graph.
Other example of the different commands are, create,
possess, transfer, stack, unstack, change location,
change snapshot, bury, stow, and unstow.
One important change,
an addition that comes about with the entity graph is
also how mutations are applied to the database.
Each mutation is composed of multiple commands which
are executed in sequence,
but committed transactionally to the database.
They either succeed together or
fail and rollback together.
This ensures that the changes to the graph are always
consistent, and no lost writes or errors can
cause data corruption.
For example, a mutation consisting of detached transfer
and attach commands would succeed only if all three
commands are applied successfully.
The system retrieves a constant ordered streams of
mutation from the replicant scribes that are part
of the replication layer and are enqueued in durable
queues, to ensure that no message is lost even if the
service is unavailable or paused.
It's important to understand that the graph does not
only cover your ships and items,
but the entire game world is made up this way.
Your ship is actually attached to the zone host
location you travel in.
Your playing character is attached to your ship seed
when you are piloting it,
just like planets are attached
to their star system routes.
SEEDING
The game world, though, must exist in persistence,
before it can be replicated and mutated.
This is part of a process called seeding,
where a new database is created
by the replication layer.
It is during that process that millions of entities are
initially created in a sort of a big bang.
At this stage, every object container,
every minor or major entity, from planets to doorknobs,
are inserted into the entity
graph in their default state.
That is the state that the designers decided was the
initial state of the world.
This process goes down from the universe route to the
star system route, and into the different areas
and planets, into their landing zone, their buildings,
their rooms, down to the smallest possible entity.
There are multiple types of entities that are created
during this process.
First, are unstreamable entities,
which make up the skeleton of the universe.
Those are entities you do not get to see but are part
of and are always present on every worker node
in the mesh.
It is by looking up unstreamable entities that the game
world is able to stream in the other types of entities
into your client and into the server mesh.
It is from those entities that other entities bloom.
Static entities make up the game
world that you cannot interact with.
Most map objects that makeup buildings like the
Hearthstone tower, rooms and walls of hospitals,
or the bar G-Loc, are all made up of static entities.
And the last type is dynamic entities.
These are entities that you as a player can manipulate,
a bottle on a bar, a door and a level,
a ship component, everything you interact with when
you're playing the game.
Of course, during seeding,
all object containers are also seeded as part of this
hierarchy and inform the shape
of the loadable sub-graphs.
The seeding process takes a
couple of minutes to complete.
Once created, this newly seeded database represents a
full dimension of the universe,
and will now persist as it is modified by players.
As you play the game and go about with your ship,
your playing character entity moves from location
to location, getting attached to
new zones as you travel.
Your player aggregate is itself part of the
[inaudible 00:21:15] graph,
and your location and state are persisted by the
replication layer scribes to the entity graph
of your given territory.
When you interact with dynamic objects and their
properties change, the state of that entity will not
persist until this instance of
the database is undeployed.
There are in fact multiple copies of the universe that
are seeded at a given time.
We call those shards.
Each shard is a unique copy of the game world,
complete with all of its entities and unique states.
Think of it as an alternate universe.
Dynamic entities that have been modified in each
dimension will have different states.
The bottle on the bar was moved or the door was
destroyed, might not be in the same
state between shards.
This technique is a way to gain scalability as our
player base grows.
A single shard can grow to
host multiple millions of entities.
Even if each shard database is itself clustered and can
grow substantially past a single machine,
there is a point where multiple clusters are needed.
As you join the persistent universe ,the matchmaking
system is getting retooled in order to select the
correct universe shard for you to play on,
using multiple data points,
like your friends' location, your active party,
your last game session,
and/or which shards still have items
on it that you own.
This is to ensure, as much as possible,
that you end up on the same shard you expect to be
as a player.
GLOBAL VS SHARD DATA
In order to provide a seamless game experience,
it would be terrible if you lost items you used when
you were in a given shard versus another,
or if your character was bound to a shard forever.
To alleviate this, the system includes the concept of
stowed and unstowed entities.
An item is considered unstowed when it is currently
active in a shard database and being actively simulated
on by the worker nodes of the replication layer.
Stowed entities are player owned entities that are
stowed in inventory containers or location inventories.
Those entities live in another database entirely called
the global database,
a large cluster database that spans all shards.
Aggregate routes in that shard are stored and linked
with edges to inventory nodes.
Any entity in a shard can have an inventory node in
global for stowing things in it.
For example, a box entity that is unstowed in a shard
would have an inventory node in the global database
to store its content.
This allows to keep unstimulated entities in a
non-shard specific database,
while keeping the live aggregate within the shard.
As you transition between shards,
your playing character gets unstowed
into the selected chart.
This process effectively moves your player aggregate
data from the global database to the shard database.
Your player entity now gets simulated by game worker
nodes and is being updated at a regular rate as you
play and move around the game world.
Accessing items that are stowed like a ship from the
Aesop terminal is basically reading the inventory
contents of the global graph at your location.
Same goes for personal inventories,
or cargo inventories.
When you request the ship to be spawn,
the system will unstow the ship onto a landing pad
by submitting a shard mutation.
Alternatively, when a ship gets despawn during parking
at a rest stop, the ship gets stowed back into the
global database, making it available
for unstow in any shard.
The global database is where all
of your stowed items will live.
Hero items will always be available for unstow in any
shard, if they are not already in use.
The process of stowing and unstowing also helps to
alleviate problems related to entity authority so that
only game worker nodes in the right shard can update
unstowed entities in that shard.
This brings about a nice property of the server meshing
and persistent streaming architecture,
in that the state of the entities are being persisted
transactionally during play,
be it in a shard or a global database through stowing.
A single server crash or 30K should
no longer result in item loss.
This model also has a real scalability benefit that
stems from the separation of the read intensive
workloads that are isolated to the global DB,
from the write intensive workloads that are handled
by the individual shard database.
The global graph exists to provide seamless access to
your belongings no matter what shard or alternate
universe you're currently playing in.
BENEFITS AND CHALLENGES
Okay, let's go back to Paul to learn about some of the
benefits of the server meshing architecture.
- Yeah.
The first benefit is obviously the advantage that we
don't have this issue of synchronization
between different server nodes.
Each server node has one single connection to the
replication layer, which is used to push and get
updates for entities of interest.
The second advantage is that the same streaming and
replication logic that we already use for clients can
be applied to servers.
And that server nodes will only stream in a small area,
which will greatly increase performance.
It also allows us to increase resilience down the road.
As long as the client is connected to the replication
layer, the client stays connected even if the
server node crashes.
In this case, the simulation for an entity may be
stopped for a moment,
but as soon as a new server comes online,
the simulation will just continue.
While the underlying tech is close to completion,
there are some upcoming challenges that we need
to solve before we can get that into your hands.
The first version of this technology will contain a
static server mesh.
Instead of the fully dynamic mesh that we saw earlier,
the static mesh assigns server nodes to predefined
sections of the solar system.
This will reduce the amount of authority transfer that
game code has to address in this first release.
There will also be a lot of challenges for the game
services and game feature teams.
Maybe Benoit can give a little bit more.
- Yeah.
There are many parts of the game that are affected by
this new server meshing architecture.
So any game play features that has to rely on the
concept of a server, right?
Currently, when you connect to a game server,
we know what match you're in.
So to send messages and update to that server,
we simply locate your active match,
and then send those messages out there.
That concept needs to change because we now have a mesh
to deal with.
And so there are multiple game servers that need to
receive this information.
They need to be able to subscribe dynamically to it or
unsubscribe dynamically to players
transitioning through them.
So you can imagine that this will affect things like
missions that currently are spawned locally
on the game server.
These now need to be spawned globally within the shard
and also persist their state.
So all services that are attached to missions,
whether it's the quantum system in the back end,
or the quasar tools,
need to now know about the concept of a shard.
This also goes deep into, like,
things that are mechanical.
Like, you know, getting global chat
to work on a server.
That concept now needs to be extended to the shard
where this will probably push us to implement this as a
location based chat, for example.
And so many teams in the company now need to change
their feature to take into account the meshing
technology that's behind it,
because the concept of server which has been ingrained
since the beginning has changed to
become a mesh of servers.
- Yeah, exactly.
So I also want to shout out to the network team who's
working on the replication layer and the bind culling,
as well as the persistent tech team who's working on
the entity and object container streaming.
And as Benoit said also,
all the other teams that work on game play features or
game play services that are
affected by this new technology.
There are a lot of devs working on this and we're very
excited to push on this new technology.
Thank you for your time.
♪ [music] ♪

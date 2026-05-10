# Squadron 42: Facial Animation Technology

**Video:** https://www.youtube.com/watch?v=G1eLecTsTSw
**Date:** 2015-10-10
**Duration:** 6:44

## Transcript

My name is Sean Tracy and I'm the
content technical director for Star
Citizen. We've been working on our
characters and more specifically the
facial aspect of this project for quite
some time. So we're excited to finally
reveal this to you. Here you can see
Gary Oldman, Admiral Bishop, making his
speech to the Senate. In terms of
technology, we've built upon the already
robust systems provided by the CryEngine
and have taken them a step further to
really push the boundaries of what's
possible in real time on PC. The high
fidelity work that you're seeing on the
facial skeleton, rig, and asset was done
by 3 Lateral and really makes all of
this possible. The animations you're
seeing are made with an incredible
attention to detail by Cubic Motion. My
name is Vladimir Mastilovic and I'm
leading 3 Lateral Studio.
We start our process with high
resolution scan data.
These are scans of individually
activated facial muscles
and basically each scan is consisted of
several million triangles.
This is a data set that cannot go
efficiently in the engine.
And each scan is a snapshot in time
and it doesn't have any correlation with
any other scan.
This is why we have written a tool that
will analyze the surface of the skin
and will find correspondences between
each scan.
Through this process we're finding
hundreds of thousands of correspondence
points between each scan pair
and this enables us
to produce blend shapes on any custom
topology for these scans.
Scans are then handled by our artists
who are examining for any unwanted
motion
and they are putting it in context
and modeling a constellation of hundreds
of shapes that will then be used to
produce a facial rig
which is essentially a digital puppet of
the character which can then be animated
and transferred to a game engine as an
optimized data set.
When it comes to photoreal characters,
everything is important.
Not only that character itself needs to
look correct in terms of its shape and
its texture, it also needs to look
correct when it's animated. This also
needs to extend to micro level so that
skin stretching and the pore stretching,
the blood flow in the skin, and even the
tiny layer of fluid between the eyelid
and the eyeball behaves correctly so
that it maintains the illusion of a live
character in the scene.
Essential for doing this on a such high
volume project is not only having large
team, but also having proper production
tools.
Essential also to solving this problem
are our production partners Cubic
Motion. At Cubic Motion, we're
responsible for accurately recreating
the actor's performances using the face
rig designed by 3 Lateral. Stage one of
the Cubic Motion face animation process
involves analyzing the actor's
performance. So that means tracking
hundreds of points on the face covering
all the main facial features such as
eyes, inner lips, teeth, and skin
creases.
In addition to that, we capture texture
information from the video and that
gives us this extra level of fidelity in
the data. After we have analyzed the
performance, we move on to stage two in
the process and this means solving the
data to the CG character's face rig.
Every rig control has its own measure
within the solver and each of these
measures looks at very specific regions
of the face and how those regions move
relative to another region. We can
combine multiple measures and what this
means is that we can then accurately
recreate realistic facial motion like
when you speak or when you emote. So
let's take two examples of the solver in
action. Firstly, we've got a funneling
mouth shape and this is the shape is
essential for face animation and lip
sync. A second example would be the
nuance that we can capture. So if you
look in this demo video, what you can
see
uh very small eye twitches that are
happening under the actor's skin almost
and
you can see then inside of Maya that the
solver's captured these and transferred
the data across to the relevant control
within the face rig.
Once we have solved the data to all of
the facial rig controls, we can then
finalize the animation and then pass
that data across to Cloud Imperium and
they can integrate it into the game
engine. The faces in Star Citizen
utilize a combination of both blend
shapes and bones to combine all the
techniques available to us for real-time
rendering. If I enable a debug overlay,
you'll see a color-coded wireframe that
indicates how many bone influences there
are per vert. This is important as it
gives us smoother and more realistic
deformation. Recent updates to our
technology allow us to compute this on
the GPU which means better performance
and even more characters using it. At
the same time, blend shapes are driven
by the animation. Bishop uses over 400
of these blend shapes to accurately
convey the actor's performance. We also
use these shapes to apply the tangents
to the mesh meaning the shading is
updated accurately as these shapes are
blended in between. One more obvious
addition is comprehensive support for
animated diffuse, also called blood flow
maps, as well as animated wrinkles.
When used together, this yields a whole
new level of facial performance. You can
see when I toggle the feature, the
change is dramatic. There are even more
subtle uses such as making the lips
lighter when they stretch or darker when
they purse. Where previous games on the
CryEngine used a single wrinkle map
texture, we have extended this to use
one, two, or even three wrinkle and
blood flow maps.
This ends up giving us 44 different
areas on the face to blend in diffuse
and normals making unique wrinkles and
expressions as accurate as possible. You
can get an idea of the complexity of the
system through this debug view where
white highlights indicate the blend
areas and their relative intensities.
We've made other subtle improvements to
add a bit more life to the eyes. One
such improvement is dynamic pupil
adaption which causes the pupils to
actually react to the changes in
lighting.
The animation for an asset of such
quality can be heavy.
Animating 200 bones and over 400 blend
shape creates an enormous amount of
data.
We compress this on the way into the
engine down from hundreds of megabytes
to just a few.
We do this compression very carefully as
Cubic Motion has provided highly
accurate and specific animation data of
the actor's performance.
This performance must be retained when
coming into the engine.
The facial pipeline within Star Citizen
is well on its way and as you can see
the characters push beyond where other
projects and technologies have gone
before. We are committed to delivering
the most lifelike characters possible to
enhance your immersion in the Star
Citizen universe.

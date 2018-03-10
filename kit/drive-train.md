---
layout: markdown
hero-image: url(/assets/images/about-us/work-in-progress.jpg)
hero-message: Kit Resources
---

Drive Trains
=======

##Purpose

The purpose of a drive train is to **provide a base** for the robot and **move the robot** around the game field.  A drive train’s effectiveness depends on multiple factors including the meta (common strategy) of the competition and how the mobility is intended to impact the given team’s strategy. 

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/7b065219cdd1b6f975fc49170f75f9a04c1ed1b0.png" width="274" height="216">

Fig. 1 A Basic Drive Train

Drive trains are likely the most important subsystem of a robot in a robotics competitions. As real estate is about getting the location, robotics games are really about **getting the desired positions efficiently**. Time is primarily spent on driving to get into positions, whether it to retrieve a game piece or getting in position to score.  An ability to control any area over the opposing alliance, if done right, allows for shutting down and disrupting the opposing alliance.  Additionally, if the drive base doesn’t measure up, the robot has the high probability of being constantly blocked and bullied by the opposing alliance. It is then very difficult to score points. 
 
##Effectiveness

Drive base’s effectiveness relies primarily on the amount and type of motors, amount and type/size of wheels, overall weight of robot, gearing, and shape of the perimeter of the robot.  Even though choosing the **right combination of speed and torque/power** is often considered a zero-sum game, one can always achieve both by just adding more motors or using stronger motors.  One can think of adding motors as just directly adding more torque to the shafts that turn the wheels which result in more force.  Unfortunately, this is not always the approach taken, as other things also need motors.  The tradeoff commonly seen between the drive base and other subsystems is based around motor quantity limitations.  Most teams will generally plan out their other subsystems first and only have two motors left for their drive base. This may be functional, but of course  it would be considerably weaker than a base with more motors.

##Wheels and Traction

In most cases with wheels, high traction is prefered but again that depends on the intent and strategy of the robot. Although PiE only  provides the standard 4” wheels, teams are allowed to purchase other wheels directly from VEX Robotics. Any **VEX EDR wheels** should be compatible with PiE pieces. However, we recommended consulting with PiE staff before purchasing any wheels from VEX. ([http://www.vexrobotics.com/edr-wheels.html](http://www.vexrobotics.com/edr-wheels.html)) Note: Vex Robotics sells additional wheels that are not mentioned in this document. Teams are welcome to purchase and use any wheels that are not prohibited by the official rules. 


### Types of Vex Wheels

Standard Wheels 
<img src="https://www.vexrobotics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/7/276-1497.jpg" width="100" height="100">

Omni Wheels
<img src="https://www.vexrobotics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/7/276-3526-plastic-insert.jpg" width="100" height="100">

Mecanum Wheels
<img src="https://www.vexrobotics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/217-2587.jpg" width="100" height="100">

[Vex Store](http://www.vexrobotics.com/edr-wheels.html)


+ **Larger wheels** will allow the robot to go faster, but may have mildly less power and usually raise the center of gravity of the robot, while smaller wheels generally do the exact opposite.  
Additionally, there are different types of wheels.  
+ **Standard wheels** are the most common. These wheels are generally popular due to their low costs.  They are provided in each team’s base kit.
+ **Omni** and **mecanum wheels** are excellent wheels for **increased maneuverability**.   However, they are significantly more expensive and do not provide great traction. This reduction in traction may decrease your robot’s ability to push other robots and may **allow your robot to be pushed by others**.  While omni’s aren’t great because they can easily be pushed from the side, they at least have some in-line traction. Conversely, mecanum wheels have absolutely no pushing power because of the 45 degree orientation of the rollers on the wheel.  Additionally, for pushing, the coefficient of friction plays a part, allowing identical robots to be clearly distinguished from each other in any pushing match. **Programming** mecanum wheel will require some degree of advanced programming. Please consult a PiE staff when considering mecanum wheels.

##Weight

The overall weight of the robot is less important than the other factors when designing and building a drive train. However, as expected, a lighter robot would be able to go faster but would not have as much pushing power compared to a heavier robot.  Additionally, **weight distribution** may affect the stability of the robot, as a top-heavy robot would not be great for a small drive base (as it may easily tip).

##Gearing

Gearing involves choosing the **optimal power to speed ratio** for your robot’s strategy. Size and motor attachment constraints may also affect the optimal gear ratio that can physically be used.

##Different Designs

The base kit provides pieces and instructions to build a four-wheel robot with regular 4’ wheels. However, we encourage each team to innovate and build alternative drive train designs. A six-wheel drive train instruction manual is provided to help teams begin their exploration of other designs. 

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/b7ff96b201cd064300d9808ba07507d9ff2ebef6.png" width="274" height="216">

4-Wheel Drive Train (Base Kit)

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/79182e130f4875452e6df8c4f4af19ee21548b7f.png" width="274" height="216">

6-Wheel Drive Train

Fig. 3 Drive Trains Designs With Instruction Manuals

##Advanced Designs

In addition to the designs provided above, advanced designs can be created using omni and mecanum wheels. These designs provide **superior maneuverability** but require **advanced programming knowledge**. We provide pictures and names of some alternative drive trains but suggest considerable research before attempting one of these designs. **Youtube** and the **VEX forum** are great places to begin. The examples below are VEX robots, however, with some creativity, the basic concepts can be applied to PiE robot. 


Mecanum Holonomic Drive

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/808c599d64e4d75d1218354984b5d541af1c90a8.png" width="100" height="100">

Omni-wheel H-Drive

<img src="https://forum.pierobotics.org/uploads/default/original/1X/28cbf296bf7624e1e482c64896714cf660a9d01a.png" width="100" height="100">

Omni-wheel X-Drive

<img src="https://www.vexforum.com/index.php/attachment/57129a66c4c91_meme.jpg" width="100" height="100">

Fig. 4 Advanced Drive Train Designs

##Summary

An effective drive train is crucial to a **winning robot**. Choose wheels and a gear ratio that support the overall objective of your robot which may include some combination of **speed**,  **control**, and **size**. 

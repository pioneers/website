---
layout: markdown
hero-image: url(/assets/images/about-us/work-in-progress.jpg)
hero-message: Kit Resources
---

Servo Controllers
=========

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/9121465f2aa6d72c5bb0547071a47c69e7657929.jpg" width="300" height="300">

The servo controller board powers and controls up to 2 [**Servo Motors**](#servo). 

####Block Diagram:

![block diagram](https://github.com/pioneers/SmartSensors/blob/master/Boards/ServoController/block_diag.png?raw=true)

####Details:

Servo motors require a relatively large current compared to the current supplied by an Arduino. External power (5V and 1A) is required. Power comes from an ATX connector. Servo motors are useful where precise and controlled rotation is necessary. For example, they would be suitable to control the arms of a robot.

---

##Servo <a name = "servo"></a>

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/29b399489f1c1059971ded9bce1a38a6719890fa.png" width="200" height="250">

Servo motors are normal electric motors which incorporate sensor feedback to provide controllers with position information (i.e. turn angle). This critical feature distinguishes servo motors from normal motors, as servos allow users to control how much they turn while motors are just turned on and off and rotate (depends on motor). Servo is commonly used for angle precise operations such as arm and door actuation, whereas motors are used for simpler movement

---

##Wiring

<img src="http://i.imgur.com/tom9h4u.jpg" width="300">

Make sure the Orange goes to Sig, Red goes to VCC, and Brown goes to GND, and the ATX is connected to the PDB with a 3A fuse.

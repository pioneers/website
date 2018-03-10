---
layout: markdown
hero-image: url(/assets/images/about-us/work-in-progress.jpg)
hero-message: Kit Resources
---

Smart Sensor
==========

#SmartSensor

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/ee7dbea01e4edbb7cadbe9ac013e54ee096f361f.jpg" width="300"height = 300">

A multipurpose board that interfaces with a line-following array, potentiometers, and limit switches.

As an interface with various sensors, the Smart Sensor Board connects the Arduino Pro Micro to a five-pin screw terminal. One Smart Sensor Board board can connect to up to three sensors, provided they are of the same type and require only one I/O line. 

---

##The Sensors

### List of Available Sensors

##### Limit Switch

A Limit Switch is a button. It is a passive component, so it requires a [pull up network](#pullUp). The level acts as a button to connect the two terminals. 

<img src="http://www.scoob.net/media/catalog/product/cache/1/thumbnail/500x/bfcca050e79a610d89c2b8c9089348e0/l/i/limit-switch01.png" width="200" height="200">

##### Potentiometer


<img src="http://www.conrad.de/medias/global/ce/4000_4999/4500/4520/4528/452824_BB_00_FB.EPS_1000.jpg" width="200" height="200">

##### Line Follower

The Line Follower is the only active sensor. This means it requires 5 Volts power. It works by shining Infrared light downwards, and then reading how much is reflected back. The tape we use is very reflective, so the line following will only work right on top of the tape. 

<img src="http://i.imgur.com/J90LMPS.jpg" width="200" height="360">

### Active vs. Passive Sensor

Active sensors require power to operate. There is some regulated output and sensed input that runs the sensor. 

Passive means that it does not require dedicated power, and runs off [pull up networks](#pullUp). 

* **The 5V Jumper on the board is necessary for the passive sensors.**

A jumper looks like this:

<img src="http://i.imgur.com/rRmn19J.jpg" width=100 height=100>

### What is a Pull Up Network? <a name="pullUp"></a>

A Pull Up Network is a part of a circuit that pull up the voltage at a node to a "High" Voltage so the Arduino can read the input as a Voltage.

![](http://www.seattlerobotics.org/encoder/mar97/basics1.gif)

---

##Wiring

Passive:
![Block Diagram](https://github.com/pioneers/SmartSensors/blob/master/Boards/TwistIt/pass_sensor.png?raw=true)

Active Sensor-interface setup:
![Block](https://github.com/pioneers/SmartSensors/blob/master/Boards/TwistIt/sens_interface.png?raw=true)
Examples:
<img src="http://i.imgur.com/o2dXvvP.jpg" width="600" height="450">

####Screw Terminal:

![screw terminal](http://i.imgur.com/gwrf49H.jpg)
For the screw terminal: going from right to left: 5V, A1, A2, A3, GND.

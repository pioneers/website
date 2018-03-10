---
layout: markdown
hero-image: url(/assets/images/about-us/work-in-progress.jpg)
hero-message: Kit Resources
---

Motor Controller (Yogi Bear)
==========

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/16669bbd4a295e770a0910f575382924339387c3.jpg" width="400" height="300">

A YogiBear is a motor controller included in all kits. Its sole purpose is to communicate with the motor and provide the ability to drive it as well as to receive information from it. The YogiBear provides direct drive through PWM inputs as well as more complex closed loop drive through a PID loop. In addition to this, the YogiBear is connected to an encoder which provides information about how fast the motor is spinning and how far it has spun. The YogiBear also has an internal safety feature called Current Limiting as well as three LEDs which provide information about the state of the motor.
>
[Types of Control](#control)
[Current Limiting](#current)
[LED Indicator](#LED)
[Wiring](#wiring)

---

##Types of Control <a name = "control"></a>

###Direct Drive
The motor can be controlled directly using PWM (Pulse Width Modulation) values (also known as duty cycle). [Here's](https://www.arduino.cc/en/Tutorial/PWM) a bit more information about PWM for those interested. These values are from -1 to 1 and describe both the direction and power of the motor. A positive value indicates clockwise motion, a negative value indicates counterclockwise motion, and the absolute value controls the power in the specified direction. What this means is that a PWM of 1 would drive the motor at full power in one direction and -1 would be full power in the opposite direction.

###PID
PID control is a special kind of closed loop control scheme that takes in a position in terms of encoder ticks and drives the motor to reach that position as quickly as possible without over shooting it. It accomplishes this using three factors to calculate a suitable PWM value: P - Proportional, I - Integral, and D - Derivative. [This](https://www.csimn.com/CSI_pages/PIDforDummies.html) page provides a pretty decent explanation of how the PID controller works as a closed loop control scheme. In our case, the sensor would be our encoder and our process would be driving the motor. Tuning the PID controller can be difficult which is why the default values for P, I, and D are provided as 1, 0, 0. This will suffice but is not optimal. Tuning P, I, and D is a difficult task but for those advanced enough, we encourage trying it out.

###Encoder
Every motor we provide has an encoder attached to it which is used to measure how far the motor has turned. The values from the encoder represent ticks and there are 46 ticks per rotation of the inner motor. In order to reach ticks per rotation of the visible motor shaft, you need to multiply this value by the gear ratio listed on the label of the motor. The encoder also provides velocity in the form of ticks per second. In order to make sense of the encoder values, it will be useful to convert number of ticks into a usable length. This can be done by calculating your own gear ratios in your drive train and wheel circumference to figure out how much distance is covered in every rotation of the visible motor shaft.

---

##Safety Features/Current Limiting<a name="current"></a>

The YogiBear implements a feature called Current Limiting which prevents damage to the motor by reducing its power output when current is dangerously high. Scenarios that lead to high current would include any time the motor is trying to drive at full power but is being mechanically stopped, i.e driving into a wall at full power. Once the current is above a threshold, which students can set but is defaulted to 3.5 Amps, the current limiting procedure begins. While this procedure is active, every PWM input is divided by 4 before being passed to the motor. About once a second, the controller allows the full PWM input to be fed to the motor and checks if doing so still bumps the current up to a dangerous value. If the current is below the threshold during the check, the current limiting procedure will end and behavior will return to normal. As this is a safety feature, please set the current threshold responsibly and reasonably, it should not be raised for the sake of performance as it could be dangerous to your robot as well as to those working on it.

---

##LED Indicators <a name = "LED"></a>
The YogiBear also has three LEDs on it which provide information on the state of the robot and the motor.

GREEN - Indicates the motor is driving clockwise
RED - Indicates the motor is driving counterclockwise
YELLOW - The YogiBear has entered Current Limiting
ALL THREE ON - The YogiBear is currently disabled

---

##Wiring<a name = "wiring"></a>
<img src="https://discourse.pierobotics.org/uploads/default/optimized/1X/2d0677ad141b4f2aecd3fe260fc5e30aee349afe_1_400x300.png" width="400" height="300">
The YogiBear takes in power directly from a 12V rail on the PDB. The power to the YogiBear should be plugged into the Anderson connectors pointing vertically upwards in the picture above. The Anderson connects pointing out of the side of the YogiBear is for a motor and also delivers 12V. The only other connector is the white pad with 4 pins on it which is reserved for the encoders attached to all motors we provide.

**Known Issues**
_Yogibear is heating up really quickly!_

1. UNPLUG IT! SAFETY FIRST!
2. Isolate Yogibear on robot and make sure everything else is unplugged
3. Try driving the Yogibear with only positive duty_cycle values
4. Try driving the Yogibear with only negative duty_cycle values
5. If one direction causes an issue, note which side and then return it to us and we will replace it

_The motor is behaving weirdly/changing speed a lot while I am driving_

1. Check the yellow LED when the Yogibear is on and the robot is enabled but the motor is not spinning
2. If the yellow LED is always on, even when the robot is not driving, then it is permanently in the current limiting state
3. Return the Yogibear to us and mention the issue and we will either fix it immediately or replace it

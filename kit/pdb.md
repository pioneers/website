---
layout: markdown
hero-image: url(/assets/images/about-us/work-in-progress.jpg)
hero-message: Kit Resources
---

Power Distribution Board (PDB)
=========

# What is the PDB?
The PDB (short for Power Distribuition Board) is the main board that safely manages the distribution of power to all other boards. The PDB also comes equipped with a circuit called the "Battery Buzzer", responsible for safely managing and monitoring the battery's charge, and preventing destruction of other parts should it experience dangerous circumstances. We will discuss this part of the board later. 
>
[PDB](#PDB)
[Battery Buzzer](#buzzer)
[Circuit Breaker](#circuitbreaker)
[Fuses](#fuse)
[Wiring Diagram](#wiring)


##PDB <a name="PDB"></a>
---
The PDB takes in a supply of 12 volts from the battery, then diverges into two sections. The 12 volt section, for motors, and the 5 volt section, for other boards/servos/etc. There are also fuses and a circuit breaker which act as another layer of protection against frying components. Fuses are designed to break if they experience too much current, so the connection to your parts will be severed. The circuit breaker acts as nothing more than a switch, however it will turn itself off should the current become too large. 

### Schematic:
<img src="https://discourse.pierobotics.org/uploads/default/optimized/1X/57d2f72030048d34e2cecb19aa409024608ca6bb_1_800x496.png" width="800" height="496">

### Battery Connection
* Battery power wire goes to female XT-60 connector
* Battery Cell Balance Wire goes to the female MTA connector. This plug is what gives the battery buzzer the information it needs to determine your battery voltage.

###Circuit Breaker<a name ="circuitbreaker"></a>
* Acts as the "on off" switch for your robot. The red button turns it off, by breaking the circuit. The yellow switch turns it on. 
* The circuit breaker will automatically turn off should too much current run through it.

###Power Rail
**12 V Rail**

* The so-called 12V rail is directly connected to the Battery through the Circuit Breaker, and is not regulated.  The 12V rail is designed to be the primary source of power for large loads, such as motor controllers.
* The 12V rail has 6 available connections, with fuses connecting the output to the battery. These fuse holders cannot be bypassed, so the use of fuses is required. 
* The connectors to the 12V rail are designed so that you cannot plug something that is not meant to receive 12V into it.

**5V Rail**

* Just like the above, this is a spot with many connections, however, all are 5V rather than 12V. 
* Used for powering other circuit boards and servos.

### Fuses <a name="fuse"></a>
* Serve the sole purpose of protection. They cannot be bypassed, so if they are not plugged in, nothing will work.
* Simply insert a fuse into the black, rectangular fuse holders for each device.

>
* **Motor - 10A or 20A**
* **BBB -  3A**
* **Servo Controller - 3A**
* **USB Hub - 3A**

## The Battery Buzzer <a name="buzzer"></a>
---
The battery buzzer does sort of exactly what it sounds like. It buzzes when something is going horribly wrong. Be rest assured that this circuit, once calibrated, will not randomly buzz just to annoy you! The circuit is designed to take very little power when idle, and also has audio and visual feedback for unsafe conditions.

The Battery Buzzer provides protection against situations where the battery is over or undercharges, as well as when the cells in the battery are unbalanced. **What's a cell?** Within the battery are distinct sections that all have their own voltage called a cell. Think of them like individual batteries themselves, jammed together to make one super large voltage. Imagine the batteries in a remote control, all the same, but adding together for more total power!

The system also has protection to guard against the effects of rapid changes in load. Note that the system can only warn the user, it cannot automatically disconnect the battery from use.

**To use this system, the main power connector of the battery must also be connected.**
###Schematic:

<img src="https://discourse.pierobotics.org/uploads/default/original/1X/85564002aefcf5576f16ff5ad5fe6810bc28f2c3.png" width="556" height="474">
###Voltage Display
* Shows the current voltage of your battery. It displays total Voltage and cycles through voltage of each individual cell.
####Arduino Pro Micro
* Acts as the "brain" for the battery buzzer.


####Block Diagram of How it Works:
<img src="https://discourse.pierobotics.org/uploads/default/original/1X/b68f55c49a63ca4045c528dde7bd6ff1157d5177.png" width="500" height="315">


## Wiring <a name="wiring"></a>
---
<img src="http://i.imgur.com/rIjfTCQ.jpg" width="400" height="720">

Make sure that the correct fuses are used. 3A goes to the left side with the ATX, 10A goes to the Andersons.

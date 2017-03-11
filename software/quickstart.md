---
layout: api
hero-message: "Quickstart Guide"
hero-button-url: /software
hero-button: Return to Software Hub
---
<div class="container" style="max-width:1400px">
<div class="row">

  <div class="col-sm-2">
    <nav id="toc" data-spy="affix" data-toggle="toc"></nav>
  </div>

  <div class="col-sm-10" markdown="1">

# Quickstart Guide - Driving a Robot

This guide covers running Dawn and using it to drive a base kit.

## Installation

Follow the instructions on the main Software Hub for downloading and installing Dawn.

Dawn has a built in interactive guided tour for beginners. You can start the tour by clicking the "Tour" button in the upper-right corner of Dawn (highlighted in red below).

<img src="/assets/student-resources/quickstart_tour.png" width="60%">

## Connecting to your robot

Step 1: Turn on your team's router by connecting it to your computer with a USB cable.

Step 2: Connect your computer to the router over WiFi (note that the router may take up to a minute to boot). The network will be named after your team number. The password is printed on the back side of your router, at the bottom right.

Step 3: Turn on your robot. Be sure that the robot is turned on _after_ your router is already running. Wait for the green light on your robot's USB WiFi dongle to light up or blink before continuing.

Step 4: Press the button in Dawn to configure your robot IP

<img src="/assets/student-resources/quickstart.001.png" width="60%">

Step 5: Type your robot IP address. It will be of the form `192.168.0.2XX`, substituting your two-digit team number for `XX`. For example, team 1 will have an address ending in 201.

<img src="/assets/student-resources/quickstart.002.png" width="60%">

Step 6: Dawn will start displaying peripheral information once you are successfully connected.

<img src="/assets/student-resources/quickstart.003.png" width="60%">

If Dawn fails to connect, try restarting your robot. (You should not need to restart the wifi router).

## Connecting a controller

To drive your robot, you will need to plug in an XBox controller. __Dawn will only detect the XBox controller once you press a button on it__.

The "Gamepads" section in Dawn originally looks like this:

<img src="/assets/student-resources/quickstart_gamepads_no.png" width="40%">

And here is what it looks like after plugging in a gamepad and pressing a button:

<img src="/assets/student-resources/quickstart_gamepads_yes.png" width="40%">

## Template code

Copy-paste the following code into Dawn. Be sure to substitute your motor device IDs into the top two lines of the code.

~~~python
left_motor = "YOUR MOTOR ID HERE"
right_motor = "YOUR MOTOR ID HERE"

def autonomous_setup():
    print("Autonomous mode has started!")
    Robot.run(autonomous_actions)

def autonomous_main():
    pass

async def autonomous_actions():
    print("Autonomous action sequence started")
    await Actions.sleep(1.0)
    print("1 second has passed in autonomous mode")

def teleop_setup():
    print("Tele-operated mode has started!")

def teleop_main():
    if Gamepad.get_value("joystick_right_y") > 0.5:
        Robot.set_value(left_motor, "duty_cycle", -1.0)
        Robot.set_value(right_motor, "duty_cycle", -1.0)
    else:
        Robot.set_value(left_motor, "duty_cycle", 0)
        Robot.set_value(right_motor, "duty_cycle", 0)

~~~
<p style="text-align: right"><a href="/assets/student-resources/quickstart.py"><i class="fa fa-download" aria-hidden="true"></i> Download sample code</a></p>

After you have added the code, Dawn will look something like the following. Motor IDs were copied from right panel in Dawn.

<img src="/assets/student-resources/quickstart.004.png" width="60%">


## Running the code

To run your code, perform the follow sequence of steps:

1. Save your file
2. Upload the saved file
3. Run the uploaded file
4. Press the "Toggle Console"

The console panel will display the results of `print` statements in your code. A "Tele-operated mode has started!" message will be printed once the sample code runs.

<img src="/assets/student-resources/quickstart.005.png" width="60%">

**IMPORTANT:** The "Run" button does not upload code, and the "Upload" button uploads your last saved code! Remember to always press Save-Upload-Run in sequence.

When you pull the right thumb-stick on your controller backwards, the robot should drive. You may need to flip the negative signs in the code above to get it to drive in the correct direction.

</div>
</div>
</div>

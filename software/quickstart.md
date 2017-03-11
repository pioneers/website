---
layout: api
hero-message: "Guide #0: Quickstart"
hero-button-url: /software
hero-button: Return to Software Hub
---
<div class="container" style="max-width:1400px">
<div class="row">

  <div class="col-sm-2">
    <nav id="toc" data-spy="affix" data-toggle="toc"></nav>
  </div>

  <div class="col-sm-10" markdown="1">

# 0. Quickstart Guide

## Installation

TODO: see the main page for instructions on installing Dawn

## Starting Dawn

TODO: screenshots, what to do about unauthorized developer error for Mac

## Connecting to your robot

Step 1: press the button to configure your robot IP

![Step 1](quickstart.001.png "Step 1")

Step 2: type your robot IP address
![Step 2](quickstart.002.png "Step 2")

Step 3: when connected, peripheral names will show up
![Step 3](quickstart.003.png "Step 3")

Step 4: plug in a gamepad and press a button until it shows up
![No gamepads](gamepads-no.png "No gamepads")

![Yes gamepads](gamepads-yes.png "Yes gamepads")

Step 5: Paste the template code into the editor. Copy your motor UIDs into the variables defined at the top of the file.
![Step 5](quickstart.004.png "Step 5")

Step 6: Press the following buttons in order: upload code (1), toggle console (2), and run code (3). You should see the "Tele-operated mode has started!" message print on the screen.
![Step 6](quickstart.005.png "Step 6")

**IMPORTANT:** The "Run" button does not upload code! You need to press the "Upload" button first

## Template code

Copy-paste the following code into Dawn.

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
<p style="text-align: right"><a href="/assets/student-resources/sample_template.py"><i class="fa fa-download" aria-hidden="true"></i> Download sample code</a></p>


### Basic Sample Code

~~~python
def autonomous_setup():
    pass

def autonomous_main():
  pass

def teleop_setup():
  pass

def teleop_main():
  pass
~~~

<p style="text-align: right"><a href="/assets/student-resources/blank_template.py"><i class="fa fa-download" aria-hidden="true"></i> Download blank code</a></p>

## Driving your robot

When you pull the right thumb-stick on your controller backwards, the robot should drive. You may need to flip the negative signs in the code above to get it to drive in the correct

## Next steps

TODO: link to tutorials and API/dawn reference

</div>
</div>
</div>

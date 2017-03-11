---
layout: api
hero-message: "Guide #1: Tele-Operated Code"
hero-button-url: /software
hero-button: Return to Software Hub
---
<div class="container" style="max-width:1400px">
<div class="row">

  <div class="col-sm-2">
    <nav id="toc" data-spy="affix" data-toggle="toc"></nav>
  </div>

  <div class="col-sm-10" markdown="1">

# 1. The `setup`/`loop` paradigm and tele-operated code
In this tutorial, we'll be going over the basics of coding for PiE, and write some sample tele-operated code.

NOTE: This tutorial is designed around a game different from this year's PiE game, and for a robot construction that may be different from yours. It will explain the tools available for you to program your robot -- it is not a library of code you can copy-paste into your robot and run without modifications.

<h2 data-toc-text="A example game">A example game: Tug-of-War</h2>

As a running example throughout the tutorials, we'll be showing how to program a robot to play tug-of-war.

Our robot will have four wheels, with one motor on each side. A rope will be tied to the robot frame, and the object of the game is to pull the opponent's robot onto your side of the field.

In this tutorial, we will explain how to drive backwards when commanded to with an XBox controller.

## Minimal code

We're going to assume you can open up Dawn and connect it to your robot. (For info on how to do that, see the Quickstart guide.)

You may already have some code in Dawn. We recommend you save that code and open up a new file.

Delete everything and start with the minimal code you need to have a working robot:

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

This defines four functions that will be run at various points throughout a match: `autonomous_setup`, `autonomous_main`, `teleop_setup`, `teleop_main`.

Currently, the contents of these functions are just `pass`. `pass` is an instruction that does nothing -- so with this code, your robot will never move!

## Progress of a match

A match consists of an autonomous and a tele-operated phase (see the game rules for more details). Your code will be run in the following order:

1. When autonomous mode starts, your entire file will be loaded.
2. The code in `autonomous_setup` will then be run once
3. After that, the code in `autonomous_main` will be run at a rate of 20 times a second
4. Once the autonomous period ends, your code will be shut down. (There may be a pause as referees tally the score.)
5. When tele-operated mode starts, your entire file will be loaded once again.
6. The code in `teleop_setup` will then be run once
7. After that, the code in `teleop_main` will be run at a rate of 20 times a second
8. All code will stop running when the match eds.

## Testing code with Dawn

For this tutorial, we'll be focusing only on the tele-operated code.

Change the tele-op code so that it looks like this:

~~~python
def teleop_setup():
    print("Tele-operated mode has started!")

def teleop_main():
    print("Tele-operated mode is ongoing")
~~~

Your entire file should now read like this: (from now on we'll only be showing the section of the file that need to be changed.)

~~~python
def autonomous_setup():
    pass

def autonomous_main():
    pass

def teleop_setup():
    print("Tele-operated mode has started!")

def teleop_main():
    print("Tele-operated mode is ongoing")
~~~

Now use Dawn to upload and run your code. (Remember to upload before pressing play to run the code!)

When you toggle the console, you should see the following:

![A picture of Dawn with console output]( "Information printed to the console comes from the robot.")



## Driving motors

Next, we need to write the code for driving the robot.

The kit uses unique numerical IDs to refer to all peripherals (motors, sensors, etc.) attached to you robot. We will create variables to hold the IDs for the left and right motor.

Add the following code to the top of the file, substituting your IDs:

~~~python
left_motor = "YOUR MOTOR ID HERE"
right_motor = "YOUR MOTOR ID HERE"
~~~

Afterwards, Dawn should look like the following:

![Picture of Dawn driving motors]( "Motor IDs must match what is in the sidebar!")

You will notice that in the sidebar, each Yogi Bear motor controller has several values: `duty_cycle`, `enc_pos`, `enc_vel`. These are known as "parameters" associated with the device. To make the motor drive, we will need to set the `duty_cycle` parameter.

Let's try driving the robot backwards:

~~~python
def teleop_main():
    Robot.set_value(left_motor, "duty_cycle", -1.0)
    Robot.set_value(right_motor, "duty_cycle", -1.0)
~~~

Note that you might need to flip the negative sign to get the robot to drive backwards (the direction the motors need to spin will depend on how you built and wired your robot.)

Try running this code in Dawn until the robot is able to drive backwards.

## Controllable Driving

Now let's actually make the driving controllable. The goal is to drive backwards when you pull the left thumb-stick on your controller backwards.

~~~python
def teleop_main():
    if Gamepad.get_value("joystick_right_y") > 0.5:
        Robot.set_value(left_motor, "duty_cycle", -1.0)
        Robot.set_value(right_motor, "duty_cycle", -1.0)
    else:
        Robot.set_value(left_motor, "duty_cycle", 0)
        Robot.set_value(right_motor, "duty_cycle", 0)
~~~

<h2 data-toc-text="Setup & sensors" markdown="1">`setup`, sensors, and remembering state</h2>

So far, we have not used `teleop_setup` in any way.

The `setup` functions exist to allow setting some values when a robot first starts running. As an example, let's assume that we have a limit switch mounted on the robot. Depending on whether the limit switch is pressed as the tele-operated period starts, we would like our robot to drive at different speeds.

Here is code that can accomplish this:

~~~python
limit_switch = "YOUR SENSOR ID HERE"

def teleop_setup():
    if Robot.get_value(limit_switch, "sensor0"):
        Robot.speed = 1.0
    else:
        Robot.speed = 0.5

def teleop_main():
    if Gamepad.get_value("joystick_right_y") > 0.5:
        Robot.set_value(left_motor, "duty_cycle", -Robot.speed)
        Robot.set_value(right_motor, "duty_cycle", -Robot.speed)
    else:
        Robot.set_value(left_motor, "duty_cycle", 0)
        Robot.set_value(right_motor, "duty_cycle", 0)
~~~

Note that we are assigning to a new `Robot.speed` variable. Variables created inside a function are cleared when the function finishes running -- therefore, we use the `Robot` object to ensure that our values are retained across all calls of both `teleop_setup` and `teleop_main`.
</div>
</div>
</div>

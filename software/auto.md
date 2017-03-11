---
layout: api
hero-message: "Guide #2: Autonomous Code"
hero-button-url: /software
hero-button: Return to Software Hub
---
<div class="container" style="max-width:1400px">
<div class="row">

  <div class="col-sm-2">
    <nav id="toc" data-spy="affix" data-toggle="toc"></nav>
  </div>

  <div class="col-sm-10" markdown="1">
# 2. `Robot.run` and autonomous code

Continuing from the last tutorial, we now turn to the question of how to make parts of the system behave autonomously.

This section assumes that you've already read part 1.

**NOTE:** this code is designed to play a game different from this year's PiE game, and for a robot construction that may be different from yours. This tutorial will explain the tools available for you to program your robot -- it is not a library of code you can copy-paste into your robot and run without modifications.

## Our robot

First, let's make a modification to our robot that plays tug-of-war.

It will still have two motors for driving, but let's add an extra motor for some additional pulling power. The rope the robot is pulling is now going to be attached to a spool, and the extra motor can reel it in to get some additional tug.

Let's also assume that the rules restrict the robot from coiling up more than 1 foot of rope.

We will be using the following variables, which you should add to the top of your code:

~~~ python
left_motor = "YOUR MOTOR ID HERE"
right_motor = "YOUR MOTOR ID HERE"
spool_motor = "YOUR MOTOR ID HERE"
~~~

<h2 data-toc-text="Fire-and-forget actuation">Our goal: fire-and-forget actuation</h2>

Before going to full-autonomous operation, let's first cover semi-autonomous operation.

Imagine we want to have the reeling-in mechanism activate when the driver presses a button. What's going to happen is that when the driver chooses, the motor will need to wind up a foot of rope and then turn off.

Let's say we want this winding process to stop automatically 1 second after the driver presses the button.


One might try to implement this by adding some code directly to the loop method:

~~~ python
########################################
#          This code is WRONG          #
########################################
def teleop_main():
    if Gamepad.get_value("joystick_right_y") > 0.5:
        Robot.set_value(left_motor, "duty_cycle", -1.0)
        Robot.set_value(right_motor, "duty_cycle", -1.0)
    else:
        Robot.set_value(left_motor, "duty_cycle", 0)
        Robot.set_value(right_motor, "duty_cycle", 0)

    if Gamepads.get_value("button_a"):
        Robot.set_value(spool_motor, "duty_cycle", 1.0)
        # Wait 1 second...
        Robot.set_value(spool_motor, "duty_cycle", 0.0)
~~~

Consider what would happen if the code paused for 1 second where the "Wait 1 second" comment is placed -- then the six lines of driving code at the start of `teleop_main` would not be running. This means that the robot will be unable to respond to new gamepad commands during that time!

Clearly, this is not what we want. To assist in debugging these sorts of errors, the student API will error if `teleop_main` (or `autonomous_main`) takes more than 1/20th of a second to complete.

What we want instead is to start an action that runs independently of the robot, like in the following code:

~~~ python
def teleop_main():
    if Gamepad.get_value("joystick_right_y") > 0.5:
        Robot.set_value(left_motor, "duty_cycle", -1.0)
        Robot.set_value(right_motor, "duty_cycle", -1.0)
    else:
        Robot.set_value(left_motor, "duty_cycle", 0)
        Robot.set_value(right_motor, "duty_cycle", 0)

    if Gamepads.get_value("button_a"):
        Robot.run(windup)
~~~

By using `Robot.run`, the `windup` action will be started independently of the `teleop_main` function.

The question remains how to code `windup`.

## Introducing `async def`

When writing `windup`, we need some way to indicate that it is intended to be run as an independent task.

To do this, we introduce the `async def` construct, as below:

~~~ python
async def windup():
    Robot.set_value(spool_motor, "duty_cycle", 1.0)
    # Wait 1 second...
    Robot.set_value(spool_motor, "duty_cycle", 0.0)
~~~

The `async` keyword is used to indicate that this function will run independently of the `setup`/`main` code.

__It is an error to pass a regular function to `Robot.run`, or to call an `async def` function directly.__

<h2 data-toc-text="'await'ing events" markdown="1">`await`ing for events in the world</h2>

Now `windup` is running independently of `setup`/`main`, but it still needs to wait for one second in between starting and stopping the motor.

The way this task can wait for events in the real world is by using the `await` keyword. The simplest event one can wait for is for time to pass, which can be coded as:

~~~ python
await Actions.sleep(1.0)
~~~

The `await` means that the code will pause until something happens -- in this case, the code will remain paused until one second passes.

__Note that `await` is the only way to wait for events in the world, and that `await` can only be used inside an `async def` function__

## Putting it all together

Here is the complete code for this example:

~~~ python
async def windup():
    Robot.set_value(spool_motor, "duty_cycle", 1.0)
    await Actions.sleep(1.0)
    Robot.set_value(spool_motor, "duty_cycle", 0.0)

def teleop_setup():
    pass

def teleop_main():
    if Gamepad.get_value("joystick_right_y") > 0.5:
        Robot.set_value(left_motor, "duty_cycle", -1.0)
        Robot.set_value(right_motor, "duty_cycle", -1.0)
    else:
        Robot.set_value(left_motor, "duty_cycle", 0)
        Robot.set_value(right_motor, "duty_cycle", 0)

    if Gamepads.get_value("button_a"):
        Robot.run(windup)
~~~

## Autonomous Mode

Now we are ready to move on from semi-autonomous operation to full-autonomous. We will now break with our tug-of-war game metaphor and instead try to design code that makes the robot drive forward, turn, and then drive forward again (all autonomously).

~~~ python
def autonomous_setup():
    Robot.run(open_loop_drive)

def autonomous_main():
    pass

async def open_loop_drive():
    # Drive forward for one second
    Robot.set_value(left_motor, "duty_cycle", 1.0)
    Robot.set_value(right_motor, "duty_cycle", 1.0)
    await Actions.sleep(1.0)

    # Turn right for half a second
    Robot.set_value(left_motor, "duty_cycle", 0.5)
    Robot.set_value(right_motor, "duty_cycle", -0.5)
    await Actions.sleep(0.5)

    # Drive forward again
    Robot.set_value(left_motor, "duty_cycle", 1.0)
    Robot.set_value(right_motor, "duty_cycle", 1.0)
    await Actions.sleep(0.5)

    # Stop
    Robot.set_value(left_motor, "duty_cycle", 0.0)
    Robot.set_value(right_motor, "duty_cycle", 0.0)

~~~

__NOTE:__ you will need to use the "Mode" dropdown menu in Dawn to ensure that it is the autonomous code that runs.


  </div>
</div>
</div>

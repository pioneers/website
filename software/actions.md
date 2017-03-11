---
layout: api
hero-message: "Guide: Robot Actions"
hero-button-url: /software
hero-button: Return to Software Hub
---
<div class="container" style="max-width:1400px">
<div class="row">

  <div class="col-sm-2">
    <nav id="toc" data-spy="affix" data-toggle="toc"></nav>
  </div>

  <div class="col-sm-10" markdown="1">
# A tutorial on robot actions

## The `setup`/`loop` paradigm

This tutorial assumes familiarity with the basic API, so the present section is just an overview.

A default teleop code for tank drive might look like the following:

```python
def setup():
    pass

def loop():
    left_speed = -Gamepads.get_value("left_y")
    right_speed = -Gamepads.get_value("right_y")
    Robot.set_value("left_motor", left_speed)
    Robot.set_value("right_motor", right_speed)
```

<h2 data-toc-text="Fire-and-forget actuation">Our goal: fire-and-forget actuation</h2>

Now imagine that you have a shooter mechanism that fires by driving a motor for one second, then turning it off.

One might try to implement this by adding some shooter code directly to the loop method:

```python
# This code is WRONG
def loop():
    left_speed = -Gamepads.get_value("left_y")
    right_speed = -Gamepads.get_value("right_y")
    Robot.set_value("left_motor", left_speed)
    Robot.set_value("right_motor", right_speed)

    if Gamepads.get_value("button_a"):
        Robot.set_value("shooter_motor", 1.0)
        # Wait 1 second...
        Robot.set_value("shooter_motor", 0.0)
```

Consider what would happen if the code paused for 1 second where the "Wait 1 second" comment is placed -- then the four lines of driving code at the start of `loop` would not be running. This means that firing the shooter would make the robot stop driving!

Clearly, this is not what we want. To assist in debugging these sorts of errors, the student API will error if `loop` takes more than 1/20th of a second to complete.

What we want instead is to start an action that runs independently of the robot, like in the following code:

```python
def loop():
    left_speed = -Gamepads.get_value("left_y")
    right_speed = -Gamepads.get_value("right_y")
    Robot.set_value("left_motor", left_speed)
    Robot.set_value("right_motor", right_speed)

    if Gamepads.get_value("button_a"):
        Robot.run(fire_shooter)
```

The question remains how to code `fire_shooter`.

## Introducing `async def`

When writing `fire_shooter`, we need some way to indicate that it is intended to be run as an independent task.

To do this, we introduce the `async def` construct, as below:

```python
async def fire_shooter():
    Robot.set_value("shooter_motor", 1.0)
    # Wait 1 second...
    Robot.set_value("shooter_motor", 0.0)
```

The `async` keyword is used to indicate that this function will run independently of the `setup`/`loop` code.

__It is an error to pass a regular function to `Robot.run`, or to call an `async def` function directly.__

<h2 markdown="1" data-toc-text="Awaiting events">`await`ing for events in the world</h2>

Now `fire_shooter` is running independently of `setup`/`loop`, but it still needs to wait for one second in between starting and stopping the motor.

The way this task can wait for events in the real world is by using the `await` keyword. The simplest event one can wait for is for time to pass, which can be coded as:
```python
await Actions.sleep(1.0)
```

The `await` means that the code will pause until something happens -- in this case, the code will remain paused until one second passes.

__Note that `await` is the only way to wait for events in the world, and that `await` can only be used inside an `async def` function__

## Putting it all together

Here is the complete code for this example:

```python
async def fire_shooter():
    Robot.set_value("shooter_motor", 1.0) # start motor
    await Actions.sleep(1.0) # wait 1 second
    Robot.set_value("shooter_motor", 0.0) # stop motor

def setup():
    pass

def loop():
    left_speed = -Gamepads.get_value("left_y")
    right_speed = -Gamepads.get_value("right_y")
    Robot.set_value("left_motor", left_speed)
    Robot.set_value("right_motor", right_speed)

    if Gamepads.get("button_a"):
        Robot.run(fire_shooter)
```

<h2 data-toc-text="Bonus - Autonomous">Bonus Section - Autonomous Mode</h2>

This functionality is also useful for implementing open-loop autonomous code. Imagine that you want your robot to drive forward, then turn right, then drive forward some more. This could be implemented as:

```python
def setup():
    Robot.run(open_loop_drive)

def loop():
    pass

async def open_loop_drive():
    # Drive forward for one second
    Robot.set_value("left_motor", 1.0)
    Robot.set_value("right_motor", 1.0)
    await Actions.sleep(1.0)

    # Turn right for half a second
    Robot.set_value("left_motor", 0.5)
    Robot.set_value("right_motor", -0.5)
    await Actions.sleep(0.5)

    # Drive forward again
    Robot.set_value("left_motor", 1.0)
    Robot.set_value("right_motor", 1.0)
    await Actions.sleep(0.5)

    # Stop
    Robot.set_value("left_motor", 0.0)
    Robot.set_value("right_motor", 0.0)
```


  </div>
</div>
</div>

---
layout: api
hero-message: "Guide: Tele-Operated Code"
hero-button-url: /software
hero-button: Return to Software Hub
---
<div class="container" style="max-width:1400px">
<div class="row">

  <div class="col-sm-2">
    <nav id="toc" data-spy="affix" data-toggle="toc"></nav>
  </div>

  <div class="col-sm-10" markdown="1">

# The `setup`/`loop` paradigm and tele-operated code

TODO(nikita): normalize names. I really don't like the use of the name `main` instead of `loop` in the current runtime code.

In this tutorial, we'll be going over the basics of coding for PiE, and write some sample tele-operated code.

**NOTE:** this code is designed to play a game different from this year's PiE game, and for a robot construction that may be different from yours. This tutorial will explain the tools available for you to program your robot -- it is not a library of code you can copy-paste into your robot and run without modifications.

<h2 data-toc-text="A example game">A example game: Tug-of-War</h2>

As a running example throughout this tutorial series, we'll be programming a robot to play tug-of-war.

Our robot will have a motor on each side (so left and right motor), and will be pulling on a rope. The goal is to pull the enemy team's robot past the line.

TODO(nikita): picture of Dawn with robot IDs

## Minimal code

We're going to assume you can open up Dawn and connect it to your robot. (For info on how to do that, see the Quickstart guide.)

You may already have some code in Dawn. We recommend you save that code and open up a new file.

Delete everything and start with the minimal code you need to have a working robot:

```python
def autonomous_setup():
    pass

def autonomous_main():
    pass

def teleop_setup():
    pass

def teleop_main():
    pass
```

This defines four functions that will be run at various points throughout a match: `autonomous_setup`, `autonomous_main`, `teleop_setup`, `teleop_main`.

Currently, the contents of these functions are just `pass`. `pass` is an instruction that does nothing -- so with this code, your robot will never move!

## Progress of a match

A match consists of an autonomous and a tele-operated phase (see the game rules for more details). Your code will be run in the following order:

1. As match begins, and your entire file will be loaded.
2. The code in `autonomous_setup` will run once, as the autonomous period begins.
3. After that, the code in `autonomous_main` will be run at a rate of 20 times a second
4. After the autonomous period ends, your code will be shut down. (There may be a pause as referees tally the score.)
5. The code in `teleop_setup` will run once, as the tele-operated period begins.
6. After that, the code in `teleop_main` will be run at a rate of 20 times a second
7. All code will stop running when the match eds.

## Testing code with Dawn

For this tutorial, we'll be focusing only on the teleop code.

Change the tele-op code so that it looks like this:

```python
def teleop_setup():
    print("Tele-operated mode has started!")

def teleop_main():
    print("Tele-operated mode is ongoing")
```

Your entire file should now read like this: (from now on we'll only be showing the section of the file that need to be changed.)

```python
def autonomous_setup():
    pass

def autonomous_main():
    pass

def teleop_setup():
    print("Tele-operated mode has started!")

def teleop_main():
    print("Tele-operated mode is ongoing")
```

During testing, you can run Dawn by ...
TODO(nikita): how to run tele-op mode in isolation?

## Driving the robot

TODO(nikita): instructions for looking up motor ids from Dawn

```python
left_motor = '12345'
right_motor = '54321'

def autonomous_setup():
    pass

def autonomous_main():
    pass

def teleop_setup():
    print("Tele-operated mode has started!")

def teleop_main():
    print("Tele-operated mode is ongoing")
```

Now it's time to actually write some driving code. First, let's try driving the robot backwards:

```python
def teleop_main():
    Robot.set_value(left_motor, 1.0)
    Robot.set_value(right_motor, -1.0)
```

Note that you might need to flip the negative sign to get the robot to drive backwards.

Now let's actually make the driving controllable. The goal is to drive backwards when you pull the left thumb-stick on your controller backwards.

```python
def teleop_main():
    if Gamepads.get_value("left_y") > 0.5:
        Robot.set_value(left_motor, 1.0)
        Robot.set_value(right_motor, -1.0)
```

<h2 data-toc-text="Using setup and variables" markdown="1">Using `setup` and setting variables</h2>

TODO(nikita): write this section. Also, do we really want to introduce the `global` statement?

```python
limit_switch = "1111"

def teleop_setup():
    global speed
    if Robot.get_value(limit_switch):
        speed = 1.0
    else:
        speed = 0.5

def teleop_main():
    global speed
    if Gamepads.get_value("left_y") > 0.5:
        Robot.set_value(left_motor, speed)
        Robot.set_value(right_motor, -speed)
```
</div>
</div>
</div>

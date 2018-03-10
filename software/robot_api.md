---
layout: api
hero-message: Robot API
hero-button-url: /software
hero-button: Return to Software Hub
---

<div class="container">
<div class="row">
<!-- sidebar, which will move to the top on a small screen -->
<div class="col-sm-3">

<nav id="toc" data-spy="affix" data-toggle="toc"></nav>
</div>

<div class="col-sm-9" markdown="1">

<h1 style="margin-top:0">Introduction</h1>
<div markdown="1">
The Pioneers in Engineering API (Application Program Interface) is a library of functions of that allows users to communicate with the robot. With a rich suite of sensors, your robot can detect and interpret its surroundings for powerful autonomous functionality. Precisely control your robot with new features such as asynchronous Python.
</div>

<br>
<h1>Robot Class</h1>

<h2 data-toc-text="Robot.get_value" markdown="1">Robot.get_value(device_id, param)</h2>

The `get_value` function returns a value associated with the `device_id` and `parameter` specified.

`device_id` <span style="font-variant: small-caps"> string </span> - the ID that identifies which sensor or controller will be read

`param` <span style="font-variant: small-caps">string</span> - Identifies which setting on the specified sensor or controller will be read. Possible `param` values depend on the specified `device`

This function is useful for checking the state of certain parts of your robot while it is driving. For example, calling this function with a **Limit Switch**’s ID and “`switch0`” then we would get the value `True` if the first Limit Switch was pressed down and `False` if it was not. Possible devices include:

- **Limit Switch**
- **Line Follower**
- **Potentiometer**
- **Team Flag**
- **Servo**
- **YogiBear**
- **RFID**


<h2 data-toc-text="Robot.get_value (limit switch)">Robot.get_value(device_id, param) <span style="font-variant: small-caps">limit switch</span></h2>

Returns a value associated with the `device_id` and `parameter` specified.

`parameters` for a **Limit Switch**:

- `“switch0”`
- `“switch1”`
- `“switch2”`

The parameters for a **Limit Switch** describe which of the three switches is being read. The <span style="font-variant: small-caps">boolean</span> value that is returned is `True` if the specified switch is being pressed and `False` if it is not.

**Sample Usage:** 

~~~python
#returns whether or not switch0 is pressed on limit switch controller named “limit_switch0”
Robot.get_value(limit_switch_id, "switch0") 
~~~

<h2 data-toc-text="Robot.get_value (line follower)">Robot.get_value(device_id, param) <span style="font-variant: small-caps">line follower</span></h2>

Returns a value associated with the `device` and `parameter` specified.

The `device` being specified is a **Line Follower**.

`parameters` for a **Line Follower**:

- `"left"`
- `"center"`
- `"right"`

The `parameters` for a **Line Follower** describe how much light is being reflected into each sensor. It returns a <span style="font-variant: small-caps">float</span> value between 0 and 1 where a lower value means less light and the sensor is farther off of the reflective tape. 

**Sample Usage:**

~~~python
#returns how much light is seen from the center sensor on the line follower named “line_follower0”
Robot.get_value(line_follower0, "center")
~~~

<h2 data-toc-text="Robot.get_value (potentiometer)">Robot.get_value(device_id, param) <span style="font-variant: small-caps">potentiometer</span></h2>

Returns a value associated with the `device` and `parameter` specified.

The `device` being specified is a **Potentiometer**.

`parameters` for a **Potentiometer**:

- `"pot0"`
- `"pot1"`
- `"pot2"`

The `parameters` for a **Potentiometer** describe what angle each potentiometer has been rotated to. It returns a <span style="font-variant: small-caps">float</span> value between 0 and 1 where the decimal returned represents what percentage of 360° it has rotated through.

**Sample Usage:**

~~~python
#returns the angle of pot0 on the potentiometer controller named “potentiometer_clock”
Robot.get_value(potentiometer_clock, "pot0") 
~~~

<h2 data-toc-text="Robot.get_value (servo)">Robot.get_value(device_id, param) <span style="font-variant: small-caps">servo</span></h2>

Returns a value associated with the `device` and `parameter` specified.

The `device` being specified is a **Servo**.

`parameters` for a **Servo**:

- `"servo0"`
- `"servo1"`

The `parameters` for a Servo describes what angle the servo has turned to. It returns a Float from -1 to 1 where both -1 and 1 represent the two end positions for the servo.

**Sample Usage:**

~~~python
#returns the angle servo0 is set to on the servo controller named “servo_arm”
Robot.get_value(servo_arm, "servo0")
~~~


<h2 data-toc-text="Robot.get_value (yogibear)">Robot.get_value(device_id, param) <span style="font-variant: small-caps">yogibear</span></h2>

Returns a value associated with the `device` and `parameter` specified.

The `device` being specified is a **YogiBear**.

`parameters` for a **YogiBear**:

- `"duty_cycle"`
- `"enc_pos"`
- `"enc_vel"`

The `parameters` for a **YogiBear** can be split into 2 categories:

**Motor Control** includes `duty_cycle` which returns a <span style="font-variant: small-caps">float</span> from -1 to 1 which describes the direction the motor is turning and at what percentage power where a larger absolute value indicates a higher power.

**Encoder Control** includes the two “enc” `parameters` which return information about the position and velocity of the robot. Position is returned as an <span style="font-variant: small-caps">integer</span> that represents the number of ticks of the encoder. There are 46 per revolution of the encoder. Read the YogiBear spec for more information about converting ticks to more sensible values. Velocity is returned as an <span style="font-variant: small-caps">integer</span> that represents the number of ticks per second.

**Sample Usage:**

~~~python
#returns the number of encoder ticks the yogibear named “yogibear_left” has read
Robot.get_value(yogibear_left, "enc_pos") 
~~~

<h2 data-toc-text="Robot.get_value (RFID)">Robot.get_value(device_id, param) <span style="font-variant: small-caps">rfid</span></h2>

Returns a value associated with the `device` and `parameter` specified.

The `device` being specified is an **RFID**.

`parameters` for an **RFID**:

- `"id"`
- `"tag_detect"`

The `parameters` for an **RFID** describe what tag is found near the RFID. If a tag is close enough, then `“id”` is updated to match the unique identifier for that tag and would return an integer representing that id. As long as that tag is close enough to the RFID, `“tag_detect”` would return `True` or else it would return `False`.

**Sample Usage:**

~~~python
#returns the number of encoder ticks the yogibear named “yogibear_left” has read
Robot.get_value(yogibear_left, "enc_pos") 
~~~

<h2 data-toc-text="Robot.set_value">Robot.set_value(device_id, param, value)</h2>
Sets a parameter on a device using the specified value
  
`device` <span style="font-variant:small-caps">string</span> - identifies which sensor or controller will be set. This string is defined by the user in Dawn

`param` <span style="font-variant:small-caps">string</span> - identifies which parameter (like a setting) on the specified sensor or controller will be set. Possible param values depend on the specified device

`value` - A variety of inputs depending on the specified device and parameter which change the value of the parameter. Valid values depend on the specified device and parameter as well

This function is useful for changing the state of certain parts of your robot while it is driving. For example, calling this function with a **YogiBear**’s name, the parameter `“duty_cycle”`, and the value -1, then the motor attached to the **YogiBear** would spin backwards at full power. Possible devices include:

- **Team Flag**
- **Servo**
- **YogiBear**

<h2 data-toc-text="Robot.set_value (yogibear)">Robot.set_value(device_id, param, value) <span style="font-variant: small-caps">yogibear</span></h2>

Sets a `parameter` on a `device` using the specified `value` 

The `device` being specified is a **YogiBear**

`parameters` and valid `values` for a **YogiBear:**

- `"duty_cycle"` <span style="font-variant: small-caps">float</span> - from -1 to 1
- `"pid_pos_setpoint"` <span style="font-variant: small-caps">float</span>
- `“pid_pos_kp”` <span style="font-variant: small-caps">float</span> - greater than 0
- `“pid_pos_ki”` <span style="font-variant: small-caps">float</span> - greater than 0
- `“pid_pos_kd”` <span style="font-variant: small-caps">float</span> - greater than 0
- `“current_thresh”` <span style="font-variant: small-caps">float</span> - reasonably from 2 to 10
- `“enc_pos”` <span style="font-variant: small-caps">integer</span> - 0

**Primary Control** is handled through the `“duty_cycle”` `parameter`. The `value` passed in tells the motor which direction it should spin and with how much power. The larger the absolute value of the input, the more power the motor tries to output. Also, the two signs of the value, negative or positive, indicate the two directions a motor can spin.

**Additional Features** of the **YogiBear** include the ability to utilize PID control. PID is a closed loop control scheme which uses three factors - `kp`, `ki`, and `kd` - to try and move the motors an exact distance, the specified setpoint. The values of the factors are defaulted to 1, 0, and 0 respectively but can be changed and optimized. The setpoint is in terms of encoder ticks and not distance, so a conversion is necessary to use this feature. In conjunction with the PID controls, `“enc_pos”` can be written to with the value 0 in order to reset the encoder that keeps track of position. It might prove useful to reset the encoder before attempting to drive the robot using PID controls so that the setpoint can be based off of a consistent and known value. The `“current_thresh”` `parameter` is used to set the current threshold that the motor must cross before it enters a Current Limiting state (see **YogiBear** spec for more details). This should be an appropriate value for your motor that will prevent it from being damaged due to overheating. It is defaulted to 3.5 Amps.

**Sample Usage:**

~~~python
#sets the yogibear named “yogibear_left” to drive the motor at maximum power in the clockwise direction
Robot.set_value(yogibear_left, "duty_cycle", 1) 
~~~

<h2 data-toc-text="Robot.set_value (servo)">Robot.set_value(device_id, param, value) <span style="font-variant: small-caps">servo</span></h2>

Sets a `parameter` on a `device` using the specified `value` 

The `device` being specified is a **Servo**

`parameters` and valid `values` for a **Servo:**

- `“servo0”` - <span style="font-variant: small-caps">float</span> from -1 to 1
- `“servo1”` - <span style="font-variant: small-caps">float</span> from -1 to 1

Changing values for the **Servo** spins the servo to an angle based on the value entered. The values -1 and 1 each refer to the maximum position of the servo in one direction. Any fraction of these values would set the servo to an angle proportional to the maximum positions. For example, if we described our minimum position to be 0°, and our maximum to be 180°, then 1 would set the servo to 180°, -1 would set the servo to 0°, and -0.5 would set it to be 45°.

**Sample Usage:**

~~~python
#sets servo0 on the servo controller named “servo_arm” to be at its maximum position
Robot.set_value(servo_arm, "servo0", 1) 
~~~

<h2 data-toc-text="Robot.set_value (team flag)">Robot.set_value(device_id, param, value) <span style="font-variant: small-caps">team flag</span></h2>

Sets a `parameter` on a `device` using the specified `value` 

The `device` being specified is a **Team Flag** 

`parameters` and valid `values` for a **Team Flag**: 

- `“led1”` <span style="font-variant: small-caps">boolean</span>
- `“led2”` <span style="font-variant: small-caps">boolean</span>
- `“led3”` <span style="font-variant: small-caps">boolean</span>
- `“led4”` <span style="font-variant: small-caps">boolean</span>

Changing values for the **Team Flag** turns on or off any of the 4 LEDs attached to the device. `True` turns the LED on and `False` turns the LED off.

**Sample Usage:**

~~~python
#sets the second LED of the team flag to on
Robot.set_value(team_flag, "led2", True) 
~~~


<h2 data-toc-text="Robot.run">Robot.run(async_function, *args)</h2>

Executes an async function with `*args` passed into the async function as inputs.

`async_function`: An async function, defined by creating a function with `async def` instead of just `def`

`*args`: This is a list of a variable number of inputs, depending on how many the `async_function` requires.

Any `async` function must be called by running this function. This function is running async, meaning the next line after this will continue running while this async function runs, both running simultaneously. The input `*args` indicates that any number of inputs can be entered in, and every input (except the first one, which is the async function) will be passed into the function. See the [autonomous guide](/software/auto.html) to learn more about async functions.

**Sample Usage:**

~~~python
#we define an async function async def hello_world(a, b, c, d)
#Notice we pass in four additional arguments because the function `hello_world` takes in four arguments.
Robot.run(hello_world, "hello", "world", "pie", "robotics")
~~~

<h2 data-toc-text="Robotis_running">Robot.is_running(async_function)</h2>

Returns a <span style="font-variant: small-caps">boolean</span> value indicating whether the specified async function is still running.

`async_function`: An async function, defined by creating a function with `async def` instead of just `def`

Async functions are run indepedently from where they are called (using `Robot.run(async_function, *args)`). This function allows the detection of whether an async function is still running. It will return `True` if the specified function is still running, and `False` if the specified function is not running.

**Sample Usage:**

~~~python
#we define an async function `async def hello_world(a, b, c, d):`
#check if the function is still running
Robot.is_running(hello_world)
~~~

<br>
<h1>Gamepad Class</h1>


<h2 data-toc-text="Gamepad.get_value">Gamepad.get_value(name)</h2>
Returns the state of the specified part of a specific gamepad.

`name` <span style="font-variant: small-caps">string</span> - Identifies which sensor or controller will be read. This string is defined by the user in Dawn.

This function is useful for checking the state of button or joysticks of your gamepad or controller. For example, calling this function with `”button_a”` would result in  `True` if the A button is pressed down and `False` if it was not. 

This function is essential for controlling your robot with the gamepad.

The most common inputs include:

- `"joystick_left_x"`
- `"joystick_left_y"`
- `"joystick_right_x"`
- `"joystick_right_y"`
- `"button_a"`
- `"button_b"`
- `"button_x"`
- `"button_y"`

Users should be careful to distinguish between values such as `“l_stick”` and values such as `“joystick_left_x”`. `“l_stick”` returns whether the joystick has been depressed like a button. `“joystick_left_x”` returns how far the joystick is tilted on the x-axis.

Possible devices include:

- `"joystick_left_x"`
- `"joystick_left_y"`
- `"joystick_right_x"`
- `"joystick_right_y"`
- `"button_a"`
- `"button_b"`
- `"button_x"`
- `"button_y"`
- `"l_bumper"`
- `"r_bumper"`
- `"l_trigger"`
- `"r_trigger"`
- `"button_back"`
- `"button_start"`
- `"l_stick"`
- `"r_stick"`
- `"dpad_up"`
- `"dpad_down"`
- `"dpad_left"`
- `"dpad_right"`
- `"Button_xbox"`

Advanced users may want to utilize multiple gamepads. Users can add an additional argument to the function call to specify the index of the desired gamepad. This is an experimental feature.

**Example:**

~~~python
    # Read the value of the first gamepad
    Gamepad.get_value("button_a", 0)

    # Read the value of the second gamepad
    Gamepad.get_value("button_a", 1)
~~~

<h2 data-toc-text="Gamepad.get_value">Gamepad.get_value(name) - Joysticks</h2>
Returns the state of the specified part of a specific gamepad.

`name` <span style="font-variant: small-caps">string</span> - Identifies the joystick to read

The joystick inputs are:

- `"joystick_left_x"`
- `"joystick_left_y"`
- `"joystick_right_x"`
- `"joystick_right_y"`

Each joystick has a reading in the x and y axes, essentially an (x, y) coordinate. The joysticks are distinguished as either the right or left. The x-value and y-value must be between -1 and 1 and are bounded by the [unit circle](https://www.geogebra.org/m/nv9vex3X).
<div class="row">
<div class="col-sm-4">
<img src="/assets/student-resources/robot_api_1.png" width="300px">
</div>
<div class="col-sm-6">
A joystick pointing fully pushed up has a x-value of 0 and a y-value of 1.
</div>
</div>

<div class="row">
<div class="col-sm-4">
<img src="/assets/student-resources/robot_api_2.png" width="300px">
</div>
<div class="col-sm-6">
A joystick fully pushed left has a x-value of -1 and a y-value of 0.
</div>
</div>

<div class="row">
<div class="col-sm-4">
<img src="/assets/student-resources/robot_api_3.png" width="300px">
</div>
<div class="col-sm-6">
A joystick fully pushed to the top right has a x-value of roughly .7 and a y-value of roughly .7.
</div>
</div>


Users should note some imprecision in the reading. An untouched joystick will likely have a value that slightly greater or less than 0.

<h2 data-toc-text="Gamepad.get_values (buttons)">Gamepad.get_value(name) - Buttons</h2>

Returns the state of the specified part of a specific button.
`name` <span style="font-variant: small-caps">string</span> - Identifies the button to read

A pushed button will return `True`. A untouched button will return `False`.

The inputs to read the buttons are:

- `"button_a"`
- `"button_b"`
- `"button_x"`
- `"button_y"`
- `"l_bumper"`
- `"r_bumper"`
- `"l_trigger"`
- `"r_trigger"`
- `"button_back"`
- `"button_start"`
- `"l_stick"`
- `"r_stick"`
- `"dpad_up"`
- `"dpad_down"`
- `"dpad_left"`
- `"dpad_right"`
- `"button_xbox"`

Joysticks also click when pushed down and thus can also be treated like buttons. While triggers traditionally indicate how far they are pushed down, the reading for triggers remains either `True` or `False`.


<br>
<h1>Actions Class</h1>

<h2 data-toc-text="Actions.sleep">Actions.sleep(seconds)</h2>

Suspends execution of the function for the specified number of `seconds` when used with the `await` keyword

`seconds` <span style="font-variant: small-caps">float</span> - Number of seconds to wait

This function temporarily stops the robot from taking in any new commands. New commands will be accepted after the waiting period. The robot will not cease all movement or function. If the robot is moving when `Actions.sleep` is called, the robot will continue moving at the same speed.

This function is useful when automating processes, such as moving forward for a certain number of seconds or closing a claw for a certain number of seconds.

Experienced programmers may be tempted to use the `time.sleep` function instead of `Actions.sleep`. `time.sleep` cannot be used in the setup or loop functions and will throw an error.

Can be used only in functions that have the header `"async def ..."`

**Sample usage:** 

~~~python
await Actions.sleep(1.0)
~~~

<br>
<h1>Example Code</h1>
<div markdown="1">
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
</div>

<br>
<h1>Glossary</h1>
<div markdown="1">
**amps**  Measure of how quickly electricity is flowing through a wire or device

**asynchronous (async)**  Type of function that can run simultaneously to other functions

**autonomous**  Form of robot control where the robot is only controlled only by code with no input from an xbox controller

**await** Programming keyword used for having the robot sleep

**boolean** Type of data, analagous to integer or character. Boolean variables have only 2 values: `True` and `False`

**device**  Electrical component that either can be controlled by the robot or gives information to the robot

**encoder** Component of motors that reports information on the velocity and position of the motor

**float** Type of data that can hold fractional numbers.

**function**  Set of instructions that can be easily reused to execute an action 

**gamepad** Controller

**integer (int)** Type of data than can hold only integers. Fractional numbers will be truncated to integer

**LED** Light emitting diode or a tiny light bulb

**limit switch**  Device that delivers information to the robot. Limit switches are like buttons and report whether they have been pressed or not.

**line follower** Device that delivers information to the robot. A Line follower is a sensor that detects only how reflective the surface in front of it is.

**motor** Powerful device that converts electrical power to rotation.

**paramameters (params)** Values that are given to a function when called. For example, `my_function(parameter1, parameter2)`

**PID** Short for Proporitional Integral Differntial. Process for maintaining a sensor value. Similar to cruise control.

**potentiometer** Device that delivers information to the robot. Potentiometers are like protractors and report angular displacement

**RFID**  Short for Radio Frequency Identification. A technology that allows passive (unpowered) devices to communicate data wirelessly using radio waves

**servo** Device similar to a motor. Servos can rotate to a specified degree, but cannot do a full rotation. Servos are roughly 100x weaker than motors

**sleep** Process in which the robot accepts no new instructions for a specified number of seconds

**string**  Type of data that can hold only a sequence of characters (or letters)

**tag** Small component that can be read with the RFID reader

**team flag** Device that indicates your team during official competition. Has 4 small controllable LEDs

**teleoperated (teleop)**  Period during the game in which robots are controlled by human input via controllers

**velocity**  Speed of something in a given direction

**YogiBear**  Device that communicates with the motors

</div>
</div>
</div>

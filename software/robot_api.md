---
layout: api
hero-message: Robot API
hero-button-url: /software
hero-button: Return to Software Hub
---

<div class="container">
<div class="row">
<!-- sidebar, which will move to the top on a small screen -->
<div class="col-sm-2">

<nav id="toc" data-spy="affix" data-toggle="toc"></nav>
</div>

<div class="col-sm-10">

<h1 style="margin-top:0">Introduction</h1>

<h1>Robot Class</h1>

<ul class="nav nav-tabs">
<li class="dropdown active">
<a class="dropdown-toggle" role="button" data-toggle="dropdown" href="#r_getval">get_value <span class="caret"></span></a>
<ul class="dropdown-menu mobile-dropdown-menu">
<li><a data-toggle="tab" href="#r_getval">Overview</a></li>
<li><a data-toggle="tab" href="#limitswitch">Limit Switch</a></li>
<li><a data-toggle="tab" href="#linefollower">Line Follower</a></li>
<li><a data-toggle="tab" href="#potentiometer">Potentiometer</a></li> 
<li><a data-toggle="tab" href="#yogibear">YogiBear</a></li>
<li><a data-toggle="tab" href="#rfid">RFID</a></li>
</ul>
</li>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#r_setval">set_value <span class="caret"></span></a>
<ul class="dropdown-menu mobile-dropdown-menu">
<li><a data-toggle="tab" href="#r_setval">Overview</a></li>
<li><a data-toggle="tab" href="#set_yogibear">YogiBear</a></li>
<li><a data-toggle="tab" href="#set_servo">Servo</a></li>
<li><a data-toggle="tab" href="#set_teamflag">Team Flag</a></li>
</ul>
</li>
<li><a data-toggle="tab" href="#r_run">run</a></li>
<li><a data-toggle="tab" href="#r_isrunning">is_running</a></li>
</ul>

<div class="tab-content">
<div markdown = "1" id="r_getval" class="tab-pane fade in active">
### Robot.get_value(device, param)

The `get_value` function returns a value associated with the device and setting specified.

`device` <span style="font-variant: small-caps"> string </span> - Identifies which sensor or controller will be read. This string is defined by the user in Dawn

`param` <span style="font-variant: small-caps">string</span> - Identifies which setting on the specified sensor or controller will be read. Possible `param` values depend on the specified `device`

This function is useful for checking the state of certain parts of your robot while it is driving. For example, calling this function with a <strong>`Limit Switch`</strong>’s name and “`switch0`” then we would get the value `True` if the first Limit Switch was pressed down and `False` if it was not. Possible devices include:

- **`Limit Switch`**
- **`Line Follower`**
- **`Potentiometer`**
- **`Team Flag`**
- **`Servo`**
- **`YogiBear`**
- **`RFID`**

</div>
<div markdown = "1" id="limitswitch" class="tab-pane fade">
### Robot.get_value(device_name, param) <span style="font-variant: small-caps">limit switch</span>

Returns a value associated with the device and setting specified.

The device being specified is a **`Limit Switch`**.

parameters for a **`Limit Switch`**:

- `“switch0”`
- `“switch1”`
- `“switch2”`

The parameters for a **`Limit Switch`** describe which of the three switches is being read. The <span style="font-variant: small-caps">boolean</span> value that is returned is `True` if the specified switch is being pressed and `False` if it is not.
</div>
<div id="linefollower" class="tab-pane fade" markdown="1">
### Robot.get_value(device_name, param) <span style="font-variant: small-caps">line follower</span>

Returns a value associated with the device and setting specified.

The device being specified is a **`Line Follower`**.

parameters for a **`Limit Switch`**:

- `"left"`
- `"center"`
- `"right"`

The parameters for a **`Line Follower`** describe how much light is being reflected into each sensor. It returns a <span style="font-variant: small-caps">float</span> value between 0 and 1 where a lower value means less light and the sensor is farther off of the reflective tape. 
</div>
<div id="potentiometer" class="tab-pane fade" markdown="1">
### Robot.get_value(device_name, param) <span style="font-variant: small-caps">potentiometer</span>

Returns a value associated with the device and setting specified.

The device being specified is a **`Potentiometer`**.

parameters for a **`Potentiometer`**:

- `"pot0"`
- `"pot1"`
- `"pot2"`

The parameters for a **`Potentiometer`** describe what angle each potentiometer has been rotated to. It returns a <span style="font-variant: small-caps">float</span> value between 0 and 1 where the decimal returned represents what percentage of 360° it has rotated through.
</div>
<div id="servo" class="tab-pane fade" markdown="1">
### Robot.get_value(device_name, param) <span style="font-variant: small-caps">servo</span>

Returns a value associated with the device and setting specified.

The device being specified is a **`Servo`**.

parameters for a **`Servo`**:

- `"servo0"`
- `"servo1"`

</div>
<div id="yogibear" class="tab-pane fade" markdown="1">
### Robot.get_value(device_name, param) <span style="font-variant: small-caps">yogibear</span>

Returns a value associated with the device and setting specified.

The device being specified is a **`YogiBear`**.

parameters for a **`YogiBear`**:

- `"duty_cycle"`
- `"enc_pos"`
- `"enc_vel"`

The parameters for a **`YogiBear`** can be split into 2 categories:

**Motor Control** includes `duty_cycle` which returns a <span style="font-variant: small-caps">float</span> from -1 to 1 which describes the direction the motor is turning and at what percentage power where a larger absolute value indicates a higher power.

**Encoder Control** includes the two “enc” parameters which return information about the position and velocity of the robot. Position is returned as an Integer that represents the number of ticks of the encoder. There are *FIXME* NUMBER OF TICKS *FIXME* per revolution of the encoder. Velocity is returned as an Integer that represents the number of ticks per second.
</div>
<div id="rfid" class="tab-pane fade" markdown="1">
### Robot.get_value(device_name, param) <span style="font-variant: small-caps">rfid</span>

Returns a value associated with the device and setting specified.

The device being specified is an **`RFID`**.

parameters for an **`RFID`**:

- `"id"`
- `"tag_detect"`

The parameters for an RFID describe what tag is found near the RFID. If a tag is close enough, then `“id”` is updated to match the unique identifier for that tag and would return an integer representing that id. As long as that tag is close enough to the RFID, `“tag_detect”` would return `True` or else it would return `False`.
</div>

<div id="r_setval" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value)
Sets a parameter on a device using the specified value
  
`device` <span style="font-variant:small-caps">string</span> - identifies which sensor or controller will be set. This string is defined by the user in Dawn
`param` <span style="font-variant:small-caps">string</span> - identifies which parameter (like a setting) on the specified sensor or controller will be set. Possible param values depend on the specified device
`value` - A variety of inputs depending on the specified device and parameter which change the value of the parameter. Valid values depend on the specified device and parameter as well

This function is useful for changing the state of certain parts of your robot while it is driving. For example, calling this function with a **`YogiBear`**’s name, the parameter `“duty_cycle”`, and the value -1, then the motor attached to the **`YogiBear`** would spin backwards at full power. Possible devices include:
- **` Team Flag`**
- **`Servo`**
- **`YogiBear`**

</div>
<div id="set_limitswitch" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">limit switch</span>
</div>
<div id="set_linefollower" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">line follower</span>
</div>
<div id="set_potentiometer" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">potentiometer</span>
</div>
<div id="set_yogibear" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">yogibear</span>

Sets a parameter on a device using the specified value 

The device being specified is a **`YogiBear`**

parameters and valid values for a **`YogiBear`:**
`"duty_cycle"` <span style="font-variant: small-caps">float</span> - from -1 to 1

`"pid_pos_setpoint"` <span style="font-variant: small-caps">float</span>

`“pid_pos_kp”` <span style="font-variant: small-caps">float</span> - greater than 0

`“pid_pos_ki”` <span style="font-variant: small-caps">float</span> - greater than 0

`“pid_pos_kd”` <span style="font-variant: small-caps">float</span> - greater than 0
`“current_thresh”` <span style="font-variant: small-caps">integer</span> - reasonably from 2 to 10

`“enc_pos”` <span style="font-variant: small-caps">integer</span> - 0

**Primary Control** is handled through the `“duty_cycle”` parameter. The value passed in tells the motor which direction it should spin and with how much power. The larger the absolute value of the input, the more power the motor tries to output. Also, the two signs of the value, negative or positive, indicate the two directions a motor can spin.

**Additional** Features of the **`YogiBear`** include the ability to utilize PID control. PID is a closed loop control scheme which uses three factors - `kp`, `ki`, and `kd` - to try and move the motors an exact distance, the specified setpoint. The values of the factors are defaulted to 1, 0, and 0 respectively but can be changed and optimized. The setpoint is in terms of encoder ticks and not distance, so a conversion is necessary to use this feature. In conjunction with the PID controls, `“enc_pos”` can be written to with the value 0 in order to reset the encoder that keeps track of position. It might prove useful to reset the encoder before attempting to drive the robot using PID controls so that the setpoint can be based off of a consistent and known value. The `“current_thresh”` parameter is used to set the current threshold that the motor must cross before it enters a Current Limiting state (see **`YogiBear`** spec for more details). This should be an appropriate value for your motor that will prevent it from being damaged due to overheating. It is defaulted to 3.5 Amps.
</div>
<div id="set_rfid" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">rfid</span>
</div>
<div id="set_servo" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">servo</span>

Sets a parameter on a device using the specified value 

The device being specified is a **`Servo`**

parameters and valid values for a **`Servo`:**

`“servo0”` - <span style="font-variant: small-caps">float</span> from -1 to 1

`“servo1”` - <span style="font-variant: small-caps">float</span> from -1 to 1

Changing values for the `Servo` spins the servo to an angle based on the value entered. The values -1 and 1 each refer to the maximum position of the servo in one direction. Any fraction of these values would set the servo to an angle proportional to the maximum positions. For example, if we described our minimum position to be 0°, and our maximum to be 180°, then 1 would set the servo to 180°, -1 would set the servo to 0°, and -0.5 would set it to be 45°.
</div>
<div id="set_teamflag" class="tab-pane fade" markdown="1">
### Robot.set_value(device_name, param, value) <span style="font-variant: small-caps">team flag</span>

Sets a parameter on a device using the specified value 

The device being specified is a **`Team Flag`** 

parameters and valid values for a **`Team Flag`**: 

`“s1”` <span style="font-variant: small-caps">boolean</span>

`“s2”` <span style="font-variant: small-caps">boolean</span>

`“s3”` <span style="font-variant: small-caps">boolean</span>

`“s4”` <span style="font-variant: small-caps">boolean</span>

Changing values for the **`Team Flag`** turns on or off any of the 4 LEDs attached to the device. `True` turns the LED on and `False` turns the LED off.
</div>
<div id="r_run" class="tab-pane fade" markdown="1">
### Robot.run(async_function, *args)
Calls async function on `args` 

**Throws**: `TypeError` 

Asynchronous functions must be executed using this function. To learn more about asynchronous functions, see autonomous guide.

**Sample usage:** `Robot.run(defined_async_function)`
</div>
<div id="r_isrunning" class="tab-pane fade" markdown="1">
### Robot.is_running(async_function)

Returns a <span style="font-variant: small-caps">boolean</span> signifying whether the async function is currently running.
</div>
</div>

<h1>Gamepad Class</h1>

<ul class="nav nav-tabs">
<li class="active dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#gp_getval">get_value <span class="caret"></span></a>
<ul class="dropdown-menu mobile-dropdown-menu">
<li><a data-toggle="tab" href="#gp_getval">Overview</a></li>
<li><a data-toggle="tab" href="#gp_getval_js">Joysticks</a></li>
<li><a data-toggle="tab" href="#gp_getval_b">Buttons</a></li>
</ul>
</li>
</ul>

<div class="tab-content">
<div id="gp_getval" class="tab-pane fade in active" markdown="1">
### Gamepad.get_value(name)
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

Users should be careful to distinguish between values such as `“l_stick”` and values such as `“joystick_left_x”`. `“l_stick”` returns whether the joystick has been depressed like a button. `“joystick_left_x”` returns how far the joystick is tilted on the x axis.

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

```python
    # Read the value of the first gamepad
    `Gamepad.get_value(“button_a”, 0)`

    # Read the value of the second gamepad
    `Gamepad.get_value(“button_a”, 1)`
```
</div>
<div id="gp_getval_js" class="tab-pane fade" markdown="1">
### Gamepad.get_value(name) - Joysticks
Returns the state of the specified part of a specific gamepad.

`name` <span style="font-variant: small-caps">string</span> - Identifies the joystick to read

This function is useful for checking the state of button or joysticks of your gamepad or controller. For example, calling this function with `”button_a”` would result in  `True` if the A button is pressed down and `False` if it was not. 

This function is essential for controlling your robot with the gamepad.

The most common inputs include:

- `"joystick_left_x"`
- `"joystick_left_y"`
- `"joystick_right_x"`
- `"joystick_right_y"`

Each joystick has a reading in the x and y axes, essentially an (x, y) coordinate. The joysticks are distinguished as either the right or left. The x-value and y-value must be between -1 and 1 and are bounded by the [unit circle](https://www.geogebra.org/m/nv9vex3X).

A joystick pointing fully pushed up has a x-value of 0 and a y-value of 1.

A joystick fully pushed left has a x-value of -1 and a y-value of 0.

A joystick fully pushed to the top right has a x-value of roughly .7 and a y-value of roughly .7.

Users should note some imprecision in the reading. An untouched joystick will likely have a value that slightly greater or less than 0.
</div>
<div id="gp_getval_b" class="tab-pane fade" markdown="1">
### Gamepad.get_value(name) - Buttons

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

</div>

<h1>Actions Class</h1>

<ul class="nav nav-tabs">
<li class="active">
<a data-toggle="tab" href="#a_sleep">sleep</a></li>
</ul>

<div class="tab-content">
<div id="a_sleep" class="tab-pane fade in active" markdown="1">
### Actions.sleep(seconds)

Suspends execution of the function for the specified number of `seconds` when used with the `await` keyword

`seconds` <span style="font-variant: small-caps">float</span> - Number of seconds to wait
This function temporarily stops the robot from taking in any new commands. New commands will be accepted after the waiting period. The robot will not cease all movement or function. If the robot is moving when `Actions.sleep` is called, the robot will continue moving at the same speed.

This function is useful when automating processes, such as moving forward for a certain number of seconds or closing a claw for a certain number of seconds.

Experienced programmers may be tempted to use the `time.sleep` function instead of `Actions.sleep`. `time.sleep` cannot be used in the setup or loop functions and will throw an error.

Can be used only in functions that have the header `"async def ..."`

**Sample usage:** `await Actions.sleep(1.0)`

</div>

<h1>Example Code</h1>
<p markdown="1">
Cold-pressed photo booth kickstarter jean shorts sartorial edison bulb brooklyn, lumbersexual pop-up. Stumptown VHS single-origin coffee hell of. 90's yr edison bulb pickled tattooed, letterpress before they sold out kogi narwhal readymade tousled try-hard `vaporware` copper mug. Cronut enamel pin dreamcatcher live-edge, street art raw denim synth tofu lo-fi meditation. Vice succulents `YOLO`, pabst butcher artisan gluten-free tattooed actually iPhone. Church-key gastropub williamsburg, air plant chicharrones fanny pack vape fixie disrupt. `Iceland` crucifix cardigan, beard copper mug air plant viral coloring book marfa neutra paleo wolf. <br>

Portland hexagon neutra pok pok, tilde vegan knausgaard vice locavore. Health goth roof party iPhone sustainable squid. Lomo leggings post-ironic, knausgaard brooklyn tote bag paleo try-hard letterpress helvetica cred. Activated charcoal scenester irony, kombucha tilde `blue bottle` post-ironic church-key tbh before they sold out bespoke jianbing tousled heirloom. Retro pour-over skateboard heirloom. Neutra copper mug tattooed scenester retro truffaut. Truffaut mustache `squid` butcher, plaid tattooed biodiesel stumptown meh paleo.

</p>
<h1>Glossary</h1>
</div>
</div>

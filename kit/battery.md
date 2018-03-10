---
layout: markdown
hero-image: url(/assets/images/about-us/work-in-progress.jpg)
hero-message: Kit Resources
---

Battery & Charging Guideline
============

![battery](https://hobbyking.com/media/catalog/product/cache/1/image/565x414/9df78eab33525d08d6e5fb8d27136e95/legacy/catalog/t2200-2-20.jpg)

The battery is a 12V Lithium Phosphate, 3-Cell battery. Battery voltage and individual cell voltage must fall within a certain range in order to operate safely. Cell voltages can not exceed 4.2V, and cannot dip below 3.3V each, meaning overall, the battery must remain in the range of 10-12.6V.  

However, it may be useful to recharge batteries before they come close to 10V, since Motor's performance is highly dependent on battery voltage.

---

#How to charge your battery

<img src="https://forum.pierobotics.org/uploads/default/original/1X/0c9d7c7d89fb4c63f42bf04e8be7710933513c7c.jpg" width="480" height="320">

This is Battery charger we provide in our base kit. You can find more detailed information [here in the product manual](http://www.skyrc.com/index.php?route=product/product/download&download_id=64).

###Charging Instructions:

1. Plug the adapter into the wall. All lights will light up for 1 second, and the "Charge Status" LED will flash green when it is ready to charge.
2. Connect the adapter to the charger with the red cable in the +, and the black cable in the - as shown below.

<img src="https://forum.pierobotics.org/uploads/default/optimized/1X/cec2a01d3151dd797adea8771469d0a0d9b0c1d5_1_300x400.jpg" width="300" height="400">

3. DO THIS BEFORE CONNECTING THE BATTERY: set the charge type on the bottom left to "LiPo", and the current limit on the bottom right to "2A."
4. Connect the battery to the adapter, with the smaller white connection plugging into the "3S" attachment on the right side. See picture below.

<img src="https://forum.pierobotics.org/uploads/default/optimized/1X/4f78b6aa632299148b96e18c8d6cf3f044ecfdda_1_300x300.jpg" width="300" height="300">

5. The charge status LED and the cell status LED will glow a constant red. You should see 1-3S lit up, since this is a 3 cell battery. 
6. When the battery is finished charging, the charge status LED will glow a constant green.

---

# Diagnose A Bad Battery

###A bad battery can look like this:

<img src="https://forum.pierobotics.org/uploads/default/optimized/1X/c5097285aeb252f575d8963a528717631a502d9f_1_400x300.jpg" width="400" height="300">

* Bad batteries look pudgy and more round
* They feel a bit squishy
* They can have a bad corrosive, chemical smell
* They fail to power the whole robot
* They measure low voltages constantly

### Using a Battery Buzzer
You can use the battery buzzer built in to the PDB to check the battery status by plugging it into the battery buzzer. It will tell you the voltage of your battery on the display.

<img src="https://forum.pierobotics.org/uploads/default/optimized/1X/86074dbe0968d2f7117fd0c86969379a154c31a7_1_481x600.jpg" width="481" height="600">

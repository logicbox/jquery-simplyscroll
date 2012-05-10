jQuery simplyScroll 2
=====================

2.0.5 20/05/12. Created by Will Kelly [@logicbox](http://twitter.com/logicbox)

simplyScroll is a jQuery plugin that can animate (scroll) a set of elements either automatically or manually, 
horizontally or vertically, forwards or backwards. This plugin can be performance intensive, so speed and 
framerate are fully configureable to accommodate lower spec systems.

## New in V2 ##

* Auto-scroll in either direction
* RTL support, normalises browser RTL scroll implementations
* Touch support
* Now supports unequal sized elements in loop mode
* Pause/resume

## Features ##

* Supports scrolling both horizontally and vertically both forwards and backwards
* Uses DOM ScrollTop/ScrollLeft for optimal performance
* Supports looped scrolling (infinite effect)
* Fully customisable via CSS & HTML
* jQuery 1.2.6 and higher, tested up-to 1.7.1
* Works on all major browsers (including IE6/7!)

[View plugin site for examples and more info](http://logicbox.net/jquery/simplyscroll/)

## Version History ##

* 2.0.5 20/05/12 - Bounce mode fixed. Touch scroll works as expected, disabled when links are present
* 2.0.4 24/02/12 - Fixed a bug in manual loop mode
* 2.0.3 11/02/12 - Simplified touch detection to counter a Chrome 17 false positive
* 2.0.2 09/02/12 - Scroll button bug when using mulitple scrollers
* 2.0.1 01/02/12 - Fixed touch support
* 2.0.0 31/01/12 - Initial release
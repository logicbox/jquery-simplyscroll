jQuery simplyScroll 2
=====================

## About

Created by Will Kelly [@logicbox](http://twitter.com/logicbox)

simplyScroll is a jQuery plugin that can animate (scroll) a set of elements either automatically or manually, 
horizontally or vertically, forwards or backwards. This plugin can be performance intensive, so speed and 
framerate are fully configureable to accommodate lower spec systems.

## Features ##

* Supports scrolling both horizontally and vertically both forwards and backwards
* Uses DOM ScrollTop/ScrollLeft for optimal performance
* RTL support, normalises browser RTL scroll implementations
* Supports looped scrolling (infinite effect)
* Fully customisable via CSS & HTML
* jQuery 1.2.6 and higher all the way
* Works on all modern browsers 

[View plugin site for download links, examples and more info](http://logicbox.net/jquery/simplyscroll/)

## Install

`yarn add jquery-simplyscroll` or `npm install jquery-simplyscroll`

## Version History ##

* 2.1.0 15/07/18 - NPM support, install & build process + requestAnimationFrame fix
* 2.0.6 23/06/18 - Added initialOffset & replaced setInterval with requestAnimationFrame
* 2.0.5 20/05/12 - Bounce mode fixed. Touch scroll works as expected, disabled when links are present
* 2.0.4 24/02/12 - Fixed a bug in manual loop mode
* 2.0.3 11/02/12 - Simplified touch detection to counter a Chrome 17 false positive
* 2.0.2 09/02/12 - Scroll button bug when using mulitple scrollers
* 2.0.1 01/02/12 - Fixed touch support
* 2.0.0 31/01/12 - Initial release

## Contributors ##

Thanks to all who over in the years have used, given feedback and contributed to this plugin. Including recently:

Paloaltowil (https://github.com/paloaltowil)

Zevero (https://github.com/zevero)

Bre7 (https://github.com/bre7)

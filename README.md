# Kidnei Tournament Tools

This directory contains all the tools used to present on-screen in Kidnei (an
English project for Hanoikids members, on which I'm working) at Kidnei
Tournament.

## Requirements

A *usable* browser: Firefox 20+, Google Chrome, or Chromium.  I don't (and
probably never will) support Internet Explorer.

## Usage

There are 2 HTML files in this directory:

* `./countdown.html` is a countdown clock.

* `./score_table.html` is a page to display scores.  The table ID is
  `scoreTable`, with `800 px` default width.

Should any modification be made, they need to take place in:

* `./kidnei_styles.css` for styling

* `./js/score_table.js` for updating score table, the code is pretty much
  self-explained.

* `./clock/kidnei_clock.js` for changing countdown clock, the code is
  self-explained.  `gVars.timeAmount` is the amount of seconds the clock
  starts counting down.

## License

All the source code and materials residing in this directory and its children
are licensed and legally re-licensed under the terms of the GNU General Public
License v3 (GPLv3).  See `COPYING` for further information about the GPLv3.

Copyright (c) 2013 Duong H. Nguyen <cmpitg AT gmailDOTcom>

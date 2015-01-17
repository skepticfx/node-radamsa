node-radamsa
=============

 A synchronous pipe to Radamsa tool from your nodejs programs.

 PS: You need to have the radamsa command line tool, already installed. [https://code.google.com/p/ouspg/wiki/Radamsa]

[![Build Status](https://travis-ci.org/skepticfx/node-radamsa.svg?branch=master)](https://travis-ci.org/skepticfx/node-radamsa)

### Usage

### Including in your program
````
npm install node-radamasa
````

### Scripting

````
var radamsa = require('node-radamsa');
var fuzzed = radamsa.run('file_name', '-n', '10');
````

### License

The MIT License (MIT)

Copyright (c) 2014 Ahamed Nafeez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

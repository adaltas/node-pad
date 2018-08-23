
# Node.js pad

[![Build Status](https://secure.travis-ci.org/adaltas/node-pad.png)](http://travis-ci.org/adaltas/node-pad)

Node Pad is a simple and elegant function to pad strings in both left and right directions.

## Usage

The API is quite simple:

```javascript
const pad = require('pad')
pad('pad', 5)      // "pad  "
pad(5, 'pad')      // "  pad"
pad('pad', 5, '+') // "pad++"
pad(5, 'pad', '+') // "++pad"
```

For TypeScript users, the type definition file is located in "./lib/index.d.ts"
and declared inside the "package.json" file.

This package is written for ES6 supported by Node.js version 7.5 and above. For
older browsers or older versions of Node.js, use the modules inside "./lib/es5".

```javascript
const pad = require('pad/lib/es5')
pad('pad', 5)      // "pad  "
```

## Options

Options are provided as a third argument and are all optional. A string argument
it is interpreted as the "char" option. Accepted options include:

* `char` (string)   
  The character used to fill the gap.
* `colors` (boolean)   
  Ajust to hidden terminal color characters, you may also use
  `require 'pad/lib/colors'` to avoid passing this option.
* `strip` (boolean)   
  Remove characters from text if length smaller than text length, default to
  "false".
* `fixed_width` (boolean)   
  An optimization option to disable the usage of the wcwdith package to handle
  the discovery of characters using more than one column for display.
  one column to display
* `wcwidth_options` (object)   
  Options passed to the wcwidth package used to calculate the display width of
  characters using more than one column.

## Left padding: `pad(length, text, [options])`

Left padding occurs when the first argument is a number and the second
argument is a string.

```javascript
var pad = require('pad');
pad(5, 'pad', '-').should.eql('--pad');
```

## Right padding: `pad(text, length, [options])`

Right padding occurs when the first argument is a string and the second
argument is a number.

```javascript
var pad = require('pad');
pad('pad', 6).should.eql('pad   ');
```

## Installing

Starting with version 1.1.0, Node pad rely on Node.js 4.0.0 or more recent.
Stick to version 1.0.x if using an older version of Node.js.

Via [npm](http://github.com/isaacs/npm):

```bash
npm install pad
```

Via git (or downloaded tarball), copy or link the project from a discoverable
Node.js directory:

```bash
git clone http://github.com/wdavidw/node-pad.git
```

## Testing

Clone the repo, install the development dependencies and run the suite:

```bash
git clone http://github.com/wdavidw/node-pad.git .
npm install
make test
```

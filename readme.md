
<pre style="font-family:courier">
 _   _           _        _____          _ 
| \ | |         | |      |  __ \        | |
|  \| | ___   __| | ___  | |__) |_ _  __| |
| . ` |/ _ \ / _` |/ _ \ |  ___/ _` |/ _` |
| |\  | (_) | (_| |  __/ | |  | (_| | (_| |
|_| \_|\___/ \__,_|\___| |_|   \__,_|\__,_| New BSD License
</pre>

Node Pad is a simple function to pad strings in the left and right directions.

Left padding
------------

Node Pad does left padding when the first argument is a string and the second 
argument is a number.

    var assert = require('assert');
	var pad = require('pad');
	assert.equal('pad   ', pad('pad', 6));

Right padding
-------------

Node Pad does right padding when the first argument is a number and the second 
argument is a string.

    var assert = require('assert');
    var pad = require('pad');
	assert.equal( '  pad', pad(5, 'pad'));

Installing
----------

Via git (or downloaded tarball):

    $ git clone http://github.com/wdavidw/node-pad.git

Then, simply copy or link the project inside a discoverable Node directory (node_modules).

Via [npm](http://github.com/isaacs/npm):

    $ npm install pad

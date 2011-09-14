
assert = require 'assert'
pad = require '../index'

module.exports = 
    'Padding right': ->
        assert.eql 'abc   ', pad('abc', 6)
    'Padding left': ->
        assert.eql '   abc', pad(6, 'abc')
        

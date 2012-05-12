
assert = require 'assert'
pad = require '../index'

module.exports = 
    'Padding right': ->
        assert.equal 'abc   ', pad('abc', 6)
    'Padding left': ->
        assert.equal '   abc', pad(6, 'abc')
    'Padding right with hyphen': ->
        assert.equal 'yeah--', pad('yeah', 6, '-')
    'Padding left with zero': ->
        assert.equal '000234', pad(6, '234', '0')
        

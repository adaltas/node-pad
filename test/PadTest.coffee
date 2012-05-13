
pad = require '../'
should = require 'should'


describe 'pad', ->
    it 'should pad right', (next) ->
        pad('abc', 6).should.eql 'abc   '
        next()
    it 'should pad left', (next) ->
        pad(6, 'abc').should.eql '   abc'
        next()
    it 'should pad right', (next) ->
        pad('yeah', 6, '-').should.eql 'yeah--'
        next()
    it 'should pad left', (next) ->
        pad(6, '234', '0').should.eql '000234'
        next()

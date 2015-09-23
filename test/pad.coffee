
should = require 'should'
pad = require '../lib'

describe 'pad', ->
  it 'should pad right', ->
    pad('abc', 6).should.eql 'abc   '
  it 'should pad left', ->
    pad(6, 'abc').should.eql '   abc'
  it 'should pad right', ->
    pad('yeah', 6, '-').should.eql 'yeah--'
  it 'should pad left', ->
    pad(6, '234', '0').should.eql '000234'
  it 'accept length inferior to text', ->
    pad(0, 'foo').should.eql 'foo'
  it 'strip if text longer than length', ->
    pad(2, 'abcdef', strip: true).should.eql 'ef'
  it 'strip if text longer than length', ->
    pad('abcdef', 2, strip: true).should.eql 'ab'

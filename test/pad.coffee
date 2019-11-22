
pad = require '../lib'

describe 'pad', ->

  it 'should pad right', ->
    pad('abc', 6).should.eql 'abc   '

  it 'should pad left', ->
    pad(6, 'abc').should.eql '   abc'

  it 'accept length inferior to text', ->
    pad(0, 'foo').should.eql 'foo'
  

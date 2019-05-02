
should = require 'should'
import pad from '../src'

console.log pad

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

  it 'characters with more than one colum', ->
    # 2 chinese characters
    chars = Buffer.from("e6938de4bd9c", 'hex').toString()
    pad(6, chars).length.should.eql 4
    pad(6, chars, fixed_width: true).length.should.eql 6
  

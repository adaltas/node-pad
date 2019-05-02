
should = require 'should'
import pad from '../src'

describe 'option.strip', ->

  it 'strip if text longer than length', ->
    pad(2, 'abcdef', strip: true).should.eql 'ef'

  it 'strip if text longer than length', ->
    pad('abcdef', 2, strip: true).should.eql 'ab'

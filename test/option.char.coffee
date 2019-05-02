
should = require 'should'
import pad from '../src'

describe 'option.char', ->

  it 'should pad right', ->
    pad('yeah', 6, '-').should.eql 'yeah--'
    pad('yeah', 6, char: '-').should.eql 'yeah--'

  it 'should pad left', ->
    pad(6, '234', '0').should.eql '000234'
    pad(6, '234', char: '0').should.eql '000234'

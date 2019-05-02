
should = require 'should'
import pad from '../src/colors'

describe 'colors', ->

  it 'should pad right', (next) ->
    pad('\u001b[33mabc\u001b[39m', 6).should.eql '\u001b[33mabc\u001b[39m   '
    next()

  it 'should pad left', (next) ->
    pad(6, '\u001b[33mabc\u001b[39m', '-').should.eql '---\u001b[33mabc\u001b[39m'
    next()

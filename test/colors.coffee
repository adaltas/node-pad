
should = require 'should'
import pad from '../src'

describe 'colors', ->

  it 'should pad right', (next) ->
    pad('\u001b[33mabc\u001b[39m', 6, colors: true).should.eql '\u001b[33mabc\u001b[39m   '
    next()

  it 'should pad left with an additionnal option', (next) ->
    pad(6, '\u001b[33mabc\u001b[39m', char: '-', colors: true).should.eql '---\u001b[33mabc\u001b[39m'
    next()

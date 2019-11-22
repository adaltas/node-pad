
pad = require '../lib'

describe 'option.colors', ->

  it 'should pad right', ->
    pad('\u001b[33mabc\u001b[39m', 6, colors: true)
    .should.eql '\u001b[33mabc\u001b[39m   '

  it 'should pad left with an additionnal option', ->
    pad(6, '\u001b[33mabc\u001b[39m', char: '-', colors: true)
    .should.eql '---\u001b[33mabc\u001b[39m'

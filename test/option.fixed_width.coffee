
should = require 'should'
import pad from '../src'

describe 'option.fixed_width', ->

  it 'characters with more than one colum', ->
    # 2 chinese characters
    chars = Buffer.from("e6938de4bd9c", 'hex').toString()
    pad(6, chars).length.should.eql 4
    pad(6, chars, fixed_width: true).length.should.eql 6

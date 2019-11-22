
import 'should'
import * as pad from '../lib'
// import pad from '../dist/pad.esm.js'

describe('API Types', () => {

  it('Arguments', () => {
    pad('text', 5).should.eql('text ')
    pad('text', 5, {}).should.eql('text ')
    pad(5, 'text').should.eql(' text')
    pad(5, 'text', {}).should.eql(' text')
  })
  
  it('Options', () => {
    pad('text', 5, {char: 'n'})
    pad('text', 5, {colors: true})
    pad('text', 5, {fixed_width: true})
    pad('text', 5, {strip: true})
    pad('text', 5, {wcwidth_options: {}})
  })
  
})

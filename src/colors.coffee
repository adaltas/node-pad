
import pad from './index'

color = (string, size, options={}) ->
  options = char: options if typeof options is 'string'
  options.colors = true
  pad string, size, options

export default color

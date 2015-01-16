
pad = require './index'

module.exports = (string, size, options={}) ->
  options = char: options if typeof options is 'string'
  options.colors = true
  pad string, size, options


wcwidth = require 'wcwidth'

module.exports = (text, length, options) ->
  options ?= {}
  invert = typeof text is 'number'
  [length, text] = [text, length] if invert
  options = char: options if typeof options is 'string'
  options.char ?= ' '
  options.strip ?= false
  text = text.toString() unless typeof text is 'string'
  textnocolors = null
  pad = ''
  if options.colors
    escapecolor = /\x1B\[(?:[0-9]{1,2}(?:;[0-9]{1,2})?)?[m|K]/g
    textnocolors = text.replace escapecolor, ''
  padlength = if options.fixed_width
  then length - (textnocolors || text).length
  else length - wcwidth.config(options.wcwidth_options)(textnocolors || text)
  if padlength < 0
    if options.strip
      return if invert
      then text.substr length * -1
      else text.substr 0, length
    return text
  pad += options.char.repeat padlength
  if invert
  then pad + text
  else text + pad


module.exports = (text, length, options={}) ->
  invert = typeof text is 'number'
  [length, text] = [text, length] if invert
  options = char: options if typeof options is 'string'
  options.char ?= ' '
  options.strip ?= false
  text = text.toString()
  pad = ''
  if options.colors
    escapecolor = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g
    length += text.length - text.replace(escapecolor, '').length
  padlength = length - text.length
  if padlength < 0
    if options.strip
      return if invert
      then text.substr length * -1
      else text.substr 0, length
    return text
  pad += options.char for i in [0 ... padlength]
  if invert
  then pad + text
  else text + pad

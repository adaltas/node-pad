
module.exports = (string, size, options={}) ->
  prefix = typeof string is 'number'
  [size, string] = [string, size] if prefix
  options = char: options if typeof options is 'string'
  options.char ?= ' '
  string = string.toString()
  pad = ''
  if options.colors
    escapecolor = /\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g
    size += string.length - string.replace(escapecolor, '').length
  size = size - string.length
  for i in [0 ... size]
    pad += options.char
  if prefix
  then pad + string
  else string + pad

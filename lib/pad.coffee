
module.exports = (string, size, opt_padString) ->
    if typeof string is 'number'
        _size = size
        size = string
        string = _size
    string = string.toString()
    pad = ''
    size = size - string.length
    padString = opt_padString or ' '
    for i in [0 ... size]
        pad += padString
    if _size
    then pad + string
    else string + pad

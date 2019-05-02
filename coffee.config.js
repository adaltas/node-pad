require('module').prototype.options = {
  transpile: require('./babel.config')
}
require('coffeescript/register')

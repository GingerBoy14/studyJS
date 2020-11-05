const functions = require('./compareFunctions')

function expect(value) {
  this.value = value
  Object.setPrototypeOf(functions(), this)
  return functions()
}
module.exports = expect

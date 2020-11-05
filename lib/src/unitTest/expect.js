const Storage = require('../classes/Storage')
const functions = require('./compareFunctions')

let initialMap = functions()

function expect(value) {
  this.value = value
  Object.setPrototypeOf(initialMap, this)
  return initialMap
}
module.exports = expect

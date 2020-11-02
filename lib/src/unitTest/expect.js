const Storage = require('../classes/Storage')

function expect(value) {
  return {
    // Match or Asserts that expected and actual objects are same.
    toBe: function (expected) {
      if (value === expected) {
        Storage.currIt.expects.push({
          name: `expect ${value} toBe ${expected}`,
          status: true
        })
        Storage.passedTests++
      } else {
        Storage.currIt.expects.push({
          name: `expect ${value} toBe ${expected}`,
          status: false
        })
        Storage.failedTests++
      }
    },

    // Match the expected and actual result of the test.

    toEqual: function (expected) {
      if (value == expected) {
        Storage.currIt.expects.push({
          name: `expect ${value} toEqual ${expected}`,
          status: true
        })
        Storage.passedTests++
      } else {
        Storage.currIt.expects.push({
          name: `expect ${value} toEqual ${expected}`,
          status: false
        })
        Storage.failedTests++
      }
    }
  }
}
module.exports = expect

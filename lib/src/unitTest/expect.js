const chalk = require('chalk')

const Storage = require('../classes/Storage')

function expect(received) {
  return {
    toBe: (expected) => {
      if (received !== expected) {
        Storage.setExpect({
          comment: `expect(${chalk.red(typeof received)}).toBe(${chalk.green(
            expected
          )})`,
          status: false,
          expected,
          received
        })
      } else if (Storage.getCurrentExpect().status) {
        Storage.setExpect({
          status: true
        })
      }
    }
  }
}

module.exports = expect

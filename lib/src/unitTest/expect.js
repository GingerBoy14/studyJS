const chalk = require('chalk')
const createCallsiteRecord = require('callsite-record')
const sep = require('path').sep

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
          code: createCallsiteRecord({ byFunctionName: 'toBe' }).renderSync({
            frameSize: 2,
            stackFilter: (frame, idx) => {
              if (!idx) {
                return frame.getFileName()
              }
            }
          }),
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

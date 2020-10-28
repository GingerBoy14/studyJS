const Storage = require('../classes/Storage')

const expect = (func) => {
  return {
    toBe: (val) => {
      if (func === val) {
        Storage.log.it[0].expects = { resultName: 'msgSucces', status: true }
      } else {
        Storage.log.it[0].expects = { resultName: 'msgFailure', status: false }
      }
    }
  }
}

module.exports = expect

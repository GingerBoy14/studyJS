const Storage = require('../classes/Storage')

const expect = (func) => {
  return {
    toBe: (val) => {
      if (func === val) {
        Storage.log.it[0].expects = { name: 'chot ne tak', status: true }
      } else {
        Storage.log.it[0].expects = { name: 'vse tak', status: false }
      }
    }
  }
}

module.exports = expect

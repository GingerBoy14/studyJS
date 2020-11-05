const Storage = require('../classes/Storage')

const expect = (func) => {
  return {
    toBe: (val) => {
      if (func === val) return true
      else throw new Error(`${func} isn't equal ${val}`)
    }
  }
}

module.exports = expect

const { describe, it, expect } = require('../../../unitTest')
// const { describe, it, expect } = require('../../../lib/src/unitTest')   // for console
//const Storage = require('../../../../lib/src/classes/Storage')

let sum = (a, b) => a + b

describe('Block of multi', () => {
  it('Testing multi', () => {
    expect(sum(1, 0)).toBe(2)
  })
  it('Testing multi', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('Testing multi', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
// console.log(Storage)

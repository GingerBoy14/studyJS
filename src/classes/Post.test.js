const { describe, it, expect } = require('../../../unitTest')
//const { describe, it, expect } = require('../lib/src/unitTest')   //for console

let sum = (a, b) => a + b

describe('Block of sums', () => {
  it('Testing sum', () => {
    expect(sum(1, 3)).toBe(5)
  })
  it('Testing sum', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('Testing sum', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

// console.log(Storage)

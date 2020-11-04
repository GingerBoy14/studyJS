const { describe, it, expect } = require('../../../unitTest')
// const { describe, it, expect } = require('./lib/src/unitTest')   // for console

let sum = (a, b) => a + b

describe('Block', () => {
  it('Testing divisions', () => {
    expect(sum(1, 0)).toBe(2)
  })
  it('Testing divisions', () => {
    expect(sum(1, 2)).toBe(4)
  })
  it('Testing divisions', () => {
    expect(sum(2, 3)).toBe(5)
  })
})


// TODO run all test, enter point
const { describe, it, expect } = require('./src/unitTest')

describe('comment', () => {
  it('Checking Num value', () => {
    expect(() => 5 + 5).toBe(10)
  })
})

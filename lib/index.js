// TODO run all test, enter point
const { describe, it, expect } = require('./src/unitTest')

describe('comment', () => {
  it('add Hello + World', () => {
    expect(() => 5 + 5).toBe(10)
  })
})

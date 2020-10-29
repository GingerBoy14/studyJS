const { describe, it, expect } = require('../lib/src/unitTest')

describe('first test', () => {
  it('should do smth', function () {
    expect(5).toBe(5)
    expect(4).toBe(4)
  })
})

describe('Math', () => {
  it('sum return 10', () => {
    expect(() => 5 + 5).toBe(10)
    expect(() => 5 + 5).toBe(25)
  })
  it('sum return 11', () => {
    const sum = () => 5 + 2
    expect(sum()).toBe(11)
  })
})
describe('Text', () => {
  it('add Hello + World', () => {
    expect(() => 'Hello World').toBe(10)
  })
  it('sum return hello', () => {
    const sum = () => 'hello'
    expect(sum()).toBe('hello')
  })
})

const { describe, it, expect } = require('../lib/src/unitTest')

describe('Matsdfsdfdh', () => {
  it('sum return 10', () => {
    expect(10).toBe(10)
  })
  it('sum return 11', () => {
    const sum = () => 5 + 6
    expect(sum()).toBe(11)
  })
})
describe('Tesdfsdfxt', () => {
  it('add Hello + World', () => {
    expect((() => 'Hello')()).toBe('Hello')
  })
  it('sum return hello', () => {
    const sum = () => 'hello'
    expect(sum()).toBe('hello')
  })
})

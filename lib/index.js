// TODO run all test, enter point
const { describe, it, expect } = require('./src/unitTest')
const logger = require('./src/helpers/logger')
const Storage = require('./src/classes/Storage')

describe('Math', () => {
  it('sum return 10', () => {
    expect(() => 5 + 5).toBe(10)
    expect(10).toBe(10)
  })
  it('sum return 11', () => {
    const sum = () => 5 + 6
    for (let i = 0; i < 1000; i++) {
      expect(sum()).toBe(11)
    }
  })
})
describe('Text', () => {
  it('add Hello + World', () => {
    expect((() => 'Hello World')()).toBe('Hello World')
  })
  it('sum return hello', () => {
    const sum = () => 'hello'
    expect(sum()).toBe('hedllo')
  })
})

Storage.finishTestSuites()
logger(Storage)

// TODO run all test, enter point
const { describe, it, expect } = require('./src/unitTest')
const showTestResult = require('./src/helpers/display/cli')
const Storage = require('./src/classes/Storage')

describe('Math', () => {
  it('sum return 10', () => {
    expect(10).toBe(1)
  })
  it('sum return 11', () => {
    const sum = () => 5 + 6
    expect(sum()).toBe(11)
  })
})
describe('Text', () => {
  it('add Hello + World', () => {
    expect((() => 'Hello')()).toBe('Hello')
  })
  it('sum return hello', () => {
    const sum = () => 'hello'
    expect(sum()).toBe('hello')
  })
})

Storage.finishTestSuites()
showTestResult()

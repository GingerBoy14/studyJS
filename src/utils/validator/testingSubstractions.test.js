const { add, sub } = require('../src/utils/validator/mathOperators')

describe('Adding numbers', () => {
  //Function "describe" check sum of two numbers
  it('should add 10 to 20', () => {
    expect(add(10, 20)).toBe(30)
  })
  it('should add 100 to 10', () => {
    expect(add(100, 10)).toBe(110)
  })
})

describe('Substracting value', () => {
  //Function "substracting" check result of two numbers
  it('decrease 12 to 3', () => {
    expect(sub(12, 3)).toBe(8)
  })
  it('decrease 55 to 55', () => {
    expect(sub(55, 55)).toBe(0)
  })
})

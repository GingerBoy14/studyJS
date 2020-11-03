function subtraction(a, b) {
  return a - b
}
function division(a, b) {
  return a / b
}
describe('subtraction', () => {
  it('True subtraction', () => {
    expect(subtraction(5, 5)).toBe(0)
  })
  it('False subtraction', () => {
    expect(subtraction(5, 5)).toBe(1)
  })
})

describe('Division', () => {
  it('False division', () => {
    expect(division(5, 5)).toBe(0)
  })
})

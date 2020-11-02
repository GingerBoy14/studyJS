function subtraction(a, b) {
  return a - b
}
function division(a, b) {
  return a / b
}
describe('Sum', () => {
  it('True subtraction(', () => {
    expect(subtraction(5, 5)).toEqual(0)
  })
  it('False subtraction(', () => {
    expect(subtraction(5, 5)).toEqual(1)
  })
})

describe('Multiplication', () => {
  it('False division', () => {
    expect(division(5, 5)).toEqual(0)
  })
})

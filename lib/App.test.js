function sum(a, b) {
  return a + b
}
function multiplication(a, b) {
  return a * b
}
describe('Sum', () => {
  it('True sum', () => {
    expect(sum(5, 5)).toBe(10)
  })
  it('False sum', () => {
    expect(sum(5, 5)).toBe(11)
  })
})

describe('Multiplication', () => {
  it('False multiplication', () => {
    expect(multiplication(5, 5)).toBe(25)
  })
})

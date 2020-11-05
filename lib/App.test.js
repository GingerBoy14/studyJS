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
describe('True', () => {
  it('True It', () => {
    expect(true).toTrue()
  })
})
describe('NUll', () => {
  it('True null', () => {
    expect(null).toNull()
  })
})
describe('Undefined', () => {
  it('True undefined', () => {
    expect(undefined).toUndefined()
  })
})
describe('NaN', () => {
  it('True NaN', () => {
    expect(NaN).toNaN()
  })
})
describe('Empty', () => {
  it('True empty', () => {
    expect([]).empty()
  })
})
describe('LengthOf', () => {
  it('True LengthOf', () => {
    expect([1, 2, 3]).lengthOf(3)
  })
})
describe('String', () => {
  it('True String', () => {
    expect('String').string()
  })
})
describe('Number', () => {
  it('True number', () => {
    expect(10).number()
  })
})
describe('Array', () => {
  it('True Array', () => {
    expect([1, 2, 3]).array()
  })
})
describe('Boolean', () => {
  it('True Boolean', () => {
    expect(true).boolean()
  })
})
describe('Object', () => {
  it('True object', () => {
    expect({}).object()
  })
})
describe('Function', () => {
  it('True Function', () => {
    expect(function fun() {
      return
    }).toFunction()
  })
})

const validatorNames = require('./validatorNames')
const check = require('./check')

const {
  toBe,
  toEqual,
  toNull,
  toTrue,
  toFalse,
  toUndefined,
  toNaN,
  empty,
  lengthOf,
  string,
  number,
  boolean,
  array,
  object,
  toFunction
} = validatorNames

const functionsMap = {
  [toBe]: (toBeValue) => check(toBe)(toBeValue),
  [toEqual]: (toBeValue) => check(toEqual)(toBeValue),
  [toNull]: (toBeValue) => check(toNull)((toBeValue = null)),
  [toTrue]: (toBeValue) => check(toTrue)((toBeValue = true)),
  [toFalse]: (toBeValue) => check(toFalse)((toBeValue = false)),
  [toUndefined]: (toBeValue) => check(toUndefined)((toBeValue = undefined)),
  [toNaN]: (toBeValue) => check(toNaN)((toBeValue = NaN)),
  [empty]: (toBeValue) => check(empty)((toBeValue = 0)),
  [lengthOf]: (toBeValue) => check(lengthOf)(toBeValue),
  [string]: (toBeValue) => check(string)((toBeValue = 'string')),
  [number]: (toBeValue) => check(number)((toBeValue = 'number')),
  [boolean]: (toBeValue) => check(boolean)((toBeValue = 'boolean')),
  [array]: (toBeValue) => check(array)((toBeValue = 'array')),
  [object]: (toBeValue) => check(object)((toBeValue = 'object')),
  [toFunction]: (toBeValue) => check(toFunction)((toBeValue = 'functions'))
}

module.exports = () => functionsMap

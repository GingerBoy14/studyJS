const validatorNames = require('./validatorNames')
const validatorsMap = {
  [validatorNames.toBe]: ({ value, expected }) => value === expected,
  [validatorNames.toEqual]: ({ value, expected }) =>
    JSON.stringify(value) === JSON.stringify(expected),
  [validatorNames.toNull]: ({ value }) => value === null,
  [validatorNames.toTrue]: ({ value, expected = true }) => value === expected,
  [validatorNames.toFalse]: ({ value }) => value === false,
  [validatorNames.toUndefined]: ({ value }) => value === undefined,
  [validatorNames.toNaN]: ({ value }) => isNaN(value),
  [validatorNames.empty]: ({ value }) => value.length === 0,
  [validatorNames.lengthOf]: ({ value, expected }) => value.length === expected,
  [validatorNames.string]: ({ value }) => typeof value === 'string',
  [validatorNames.number]: ({ value }) => typeof value === 'number',
  [validatorNames.boolean]: ({ value }) => typeof value === 'boolean',
  [validatorNames.array]: ({ value }) => Array.isArray(value),
  [validatorNames.object]: ({ value }) => typeof value === 'object',
  [validatorNames.toFunction]: ({ value }) => typeof value === 'function'
}
module.exports = validatorsMap

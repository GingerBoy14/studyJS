const getFunctionName = require('./getFunctionName')
const Storage = require('../classes/Storage')

// const VALIDATOR_NAMES = {
//   toBe: 'toBe',
//   toEqual: 'toEqual'
// }
//
// const { toBe, toEqual } = VALIDATOR_NAMES
//
// const functions = {
//   [toBe]: (value) => check(toBe),
//   [toEqual]: () => check(toEqual)
// }
//
// const validatorsMap = {
//   [VALIDATOR_NAMES.toBe]: ({ value, expected }) => value === expected
// }
//
// const check = ({ validatorName, expected, value }) => {
//   const status = validatorsMap[validatorName]({ value, expected })
//   const expect = `Expect ${value} ${validatorName} ${expected}`
//   const expectedObj = { expect, status }
//   Storage.currIt.expects.push(expectedObj)
//   status ? Storage.passedTests++ : Storage.failedTests++
// }

// Match or Asserts that expected and actual objects are same.
function toBe(expected) {
  const status = this.value === expected
  const expect = `Expect ${this.value} ${getFunctionName()} ${expected}`
  const expectedObj = { expect, status }
  Storage.currIt.expects.push(expectedObj)
  status ? Storage.passedTests++ : Storage.failedTests++
}

// Match the expected and actual result of the test.
const toEqual = (value, expected) => {
  const status = value === expected
  const expect = `Expect ${this.value} ${getFunctionName()} ${expected}`
  const expectedObj = { expect, status }
  Storage.currIt.expects.push(expectedObj)
  status ? Storage.passedTests++ : Storage.failedTests++
}
module.exports = { toBe, toEqual }

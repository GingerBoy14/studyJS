const validatorsMap = require('./validatorsMap')
const Storage = require('../classes/Storage')

const check = (validatorName) => (toBeValue) => {
  const status = validatorsMap[validatorName]({
    value: value,
    expected: toBeValue
  })
  const expect = `Expect ${value} ${validatorName} ${toBeValue}`
  const expectedObj = { expect, status }
  Storage.currIt.expects.push(expectedObj)
  status ? Storage.passedTests++ : Storage.failedTests++
}
module.exports = check

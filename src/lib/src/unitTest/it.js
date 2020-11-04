const describe = require('./describe.js')
const Storage = require('../classes/Storage')

const it = (testCaseMessage, callback) => {
  let status = true
  let errorText = ''
  try {
    callback()
  } catch (exception) {
    status = false
    errorText = exception.toString()
  }
  Storage.currentTestCase = {
    testCaseName: testCaseMessage,
    testCaseStatus: status,
    testCaseErrorText: errorText
  }
  Storage.currentTestBlock.testCasesArray.push(Storage.currentTestCase)
}

module.exports = it

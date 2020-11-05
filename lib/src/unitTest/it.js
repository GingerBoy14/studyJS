const Storage = require('../classes/Storage')

const it = (comment, callback) => {
  Storage.tmpTestCase = {}
  Storage.tmpTestCase.name = comment
  try {
    Storage.tmpTestCase.status = true
    callback()
    Storage.passedTests++
  } catch (e) {
    Storage.tmpTestCase.status = false
    Storage.failedTests++
  } finally {
    Storage.totalTests++
  }
  Storage.tempDescribe.testCasesArray.push(Storage.tmpTestCase)
}
// console.log(Storage.passedTests)
module.exports = it

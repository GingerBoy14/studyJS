const Storage = require('../classes/Storage')
//let testCasesArray = [];

const describe = (testBlockName, callback) => {
  Storage.currentTestBlock = { testBlockName, testCasesArray: [] }
  callback()
  Storage.log.push(Storage.currentTestBlock)
  return Storage.log
}

module.exports = describe /*, testCasesArray*/

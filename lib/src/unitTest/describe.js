const Storage = require('../classes/Storage')
const logger = require('../helpers/logger')

const describe = (comment, callback) => {
  Storage.tempDescribe = { testDescribe: comment, testCasesArray: [] }
  callback()
  Storage.log.push(Storage.tempDescribe)
}

// console.log(Storage.log)

module.exports = describe

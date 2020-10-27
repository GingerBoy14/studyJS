const Storage = require('../classes/Storage')
const logger = require('../helpers/logger')

const describe = (comment, callback) => {
  Storage.log = { testDescribe: comment }
  callback()
  logger(Storage.log)
}

module.exports = describe

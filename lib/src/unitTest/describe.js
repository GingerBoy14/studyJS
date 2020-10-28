const Storage = require('../classes/Storage')
const logger = require('../helpers/logger/logger')

const describe = (comment, callback) => {
  Storage.log = { testDescription: 'Testing numbers' }
  callback()
  logger(Storage.log)
}

module.exports = describe

const Storage = require('../classes/Storage')

const it = (comment, callback) => {
  Storage.log.it = [{ testCaseName: comment }]
  callback()
}

module.exports = it

const Storage = require('../classes/Storage')

const describe = (comment, callback) => {
  Storage.initDescribe(comment)
  callback()
  Storage.pushDescribe()
}

module.exports = describe

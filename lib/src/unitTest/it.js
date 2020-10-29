const Storage = require('../classes/Storage')

const it = (comment, callback) => {
  Storage.initIteration(comment)
  Storage.pushIterationToDescribe()

  Storage.timeOfExecuteIteration(callback)
  Storage.setIterationStatus()
}

module.exports = it

const Storage = require('../classes/Storage')

const it = (comment, callback) => {
  Storage.initIteration(comment)
  Storage.pushIterationToDescribe()

  Storage.timeOfExecuteIteration(callback)
  if (Storage.getCurrentExpect().status) {
    Storage.increasePassedTests()
  } else {
    Storage.increaseFailedTests()
  }
}

module.exports = it

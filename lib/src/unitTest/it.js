const Storage = require('../classes/Storage')

const it = (nameOfThisCase, callback) => {
  Storage.log.it = [{ Case1: 'Sum of 2 val are equal' }]
  callback()
}

module.exports = it

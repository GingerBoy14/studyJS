const Storage = require('../classes/Storage')

function describe(desc, fn) {
  Storage.currDesc = {
    it: []
  }
  for (var index = 0; index < Storage.beforeAlls.length; index++) {
    Storage.beforeAlls[index].apply(this)
  }
  Storage.currDesc.nameDescribe = desc
  fn.apply(this)
  for (var index = 0; index < Storage.afterAlls.length; index++) {
    Storage.afterAlls[index].apply(this)
  }
  Storage.results.push(Storage.currDesc)
}

module.exports = describe

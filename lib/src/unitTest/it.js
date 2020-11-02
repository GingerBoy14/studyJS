const Storage = require('../classes/Storage')

function it(desc, fn) {
  Storage.Totaltests++
  if (Storage.beforeEachs) {
    for (var index = 0; index < Storage.beforeEachs.length; index++) {
      Storage.beforeEachs[index].apply(this)
    }
  }
  //var f = stats[stats.length - 1]
  Storage.currIt = {
    name: desc,
    expects: []
  }
  //f.push(desc)
  fn.apply(this)
  for (var index = 0; index < Storage.afterEachs.length; index++) {
    Storage.afterEachs[index].apply(this)
  }
  Storage.currDesc.it.push(Storage.currIt)
}
module.exports = it

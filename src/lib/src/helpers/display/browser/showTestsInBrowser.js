const getFilesPaths = require('../../fileSystem/getTestPaths')
// const testFiles = getFilesPaths('./src')
const testFiles = getFilesPaths('../../../../../../src')
const Storage = require('../../../classes/Storage')
const fs = require('fs')

const show = () => {
  const runTests = () => {
    testFiles.forEach((file) => {
      eval(fs.readFileSync(file).toString())
      //      require(file)

    })
  }

  runTests()
  console.log(Storage.log)
  fs.writeFileSync('./tests.json', JSON.stringify(Storage.log))
  Storage.log = []
}

module.exports = show

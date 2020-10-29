// TODO run all test, enter point
const showTestResult = require('./src/helpers/display/cli')
const Storage = require('./src/classes/Storage')
const getFilesPaths = require('./src/helpers/fileSystem/searchTestPath')
const fs = require('fs')

// console.log(getFilesPaths('./src'))
getFilesPaths('./src').forEach((path) => {
  Storage.initFile(path)

  try {
    const func = eval(fs.readFileSync(path) + '')
    if (!!func) throw new Error('')
    Storage.finishTestSuites()
    Storage.pushLog()
  } catch (e) {
    Storage.setErrorToFile(`you have error in ${path}`)
    console.log(Storage.curFile.error)
  }
})
showTestResult()

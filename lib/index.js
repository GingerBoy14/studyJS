// TODO run all test, enter point
const showTestResult = require('./src/helpers/display/cli')
const Storage = require('./src/classes/Storage')
const getFilesPaths = require('./src/helpers/fileSystem/searchTestPath')
const fs = require('fs')
const chalk = require('chalk')
// console.log(getFilesPaths('./src'))
getFilesPaths('./src').forEach((path) => {
  Storage.initFile(path)

  try {
    eval(fs.readFileSync(path) + '')
    if (!Storage.curFile.describe[0]) {
      throw new Error('You should write unless one describe in')
    }
    Storage.finishTestSuites()
    Storage.pushLog()
  } catch (e) {
    Storage.setErrorToFile(chalk.bold`${e} in ${path}.\n`)
  }
  if (Storage.curFile.error) {
    console.log(Storage.curFile.error)
  }
  Storage.setLog(
    Storage.getLog().sort((a, b) =>
      a.status === b.status ? 0 : a.status ? -1 : 1
    )
  )
})
showTestResult()

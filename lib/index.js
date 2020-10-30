// TODO run all test, enter point
const fs = require('fs')
const chalk = require('chalk')
const showTestResult = require('./src/helpers/display/cli')
const Storage = require('./src/classes/Storage')
const getFilesPaths = require('./src/helpers/fileSystem/searchTestPath')
const writeFile = require('./src/helpers/logger/writeLog')
const emptyLog = require('./src/helpers/logger/emptyLog')
const logPath = require('./src/constants/path')

getFilesPaths('./src').forEach((path) => {
  Storage.initFile(path)
  emptyLog(logPath)
  try {
    eval(
      "const { describe, it, expect } = require('../lib/src/unitTest')\n" +
        fs.readFileSync(path) +
        ''
    )
    if (!Storage.curFile.describe[0]) {
      throw new Error('You should write unless one describe in')
    }
    Storage.finishTestSuites()
    Storage.pushLog()
    writeFile(logPath, Storage.getLog())
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

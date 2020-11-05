const Storage = require('./src/classes/Storage')
const writeLog = require('./src/helpers/logger/writeLog')
const readLog = require('./src/helpers/logger/readLog')
const emptyLog = require('./src/helpers/logger/emptyLog')
const fileName = require('./src/constants/path')
const getFilesPaths = require('./src/helpers/fileSystem/getFilesPaths')
const fs = require('fs')
const logSymbols = require('log-symbols')
const qrcode = require('qrcode-terminal')
getFilesPaths('./src').forEach((path) => {
  eval(
    "const { describe, it, expect } = require('./src/unitTest')\n" +
      fs.readFileSync(path, 'utf8')
  )
})

Storage.log.forEach((elem) => {
  // console.log(elem.testDescribe)
  elem.testCasesArray.forEach((it) => {
    console.log(`${it.name} - ${it.status}`)
    if (it.status) {
      console.log(logSymbols.success, 'Finished successfully!')
    } else {
      console.log(logSymbols.error, 'Test failed!')
    }
  })
})
emptyLog(fileName)
writeLog(fileName, {
  log: Storage.log,
  tests: {
    total: Storage.totalTests,
    passed: Storage.passedTests,
    failed: Storage.failedTests
  }
})

console.log(readLog(fileName).tests)
qrcode.generate('http://192.168.0.136:3000', { small: true })

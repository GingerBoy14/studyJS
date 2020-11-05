// TODO run all test, enter point
var qrcode = require('qrcode-terminal')
const Storage = require('./src/classes/Storage')
const writeLog = require('./src/helpers/logger/writeLog')
const readLog = require('./src/helpers/logger/readLog')
const emptyLog = require('./src/helpers/logger/emptyLog')
const fileName = require('./src/constants/path')
const logger = require('./src/helpers/logger/logger')
const fs = require('fs')
const searchTestPaths = require('./src/helpers/fileSystem/searchTestPath')

searchTestPaths('./lib').forEach((path) => {
  eval(
    "const { describe, it, expect } = require('./src/unitTest')\n" +
      fs.readFileSync(path, 'utf8')
  )
})
emptyLog(fileName)
writeLog(fileName, {
  results: Storage.results,
  totalTests: Storage.totalTests,
  passedTests: Storage.passedTests,
  failedTests: Storage.failedTests
})
logger(Storage)
console.log('readlog:', readLog(fileName))

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  qrcode.generate('http://' + add + ':3000/', { small: true })
})

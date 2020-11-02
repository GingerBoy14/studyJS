// TODO run all test, enter point
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
// emptyLog(fileName)
// writeLog(fileName, Storage)
logger(Storage)
//
// console.log(readLog(fileName))

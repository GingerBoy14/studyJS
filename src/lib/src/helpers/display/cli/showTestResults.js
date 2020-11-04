const getTestPaths = require('../../fileSystem/getTestPaths')
const testFiles = getTestPaths('./src')
const Storage = require('../../../classes/Storage')
const figures = require('figures')
const fs = require('fs')

const runTests = () => {
  testFiles.forEach((file) => {
    eval(fs.readFileSync(file).toString())
    //require(file)
  })
}

const showTestResults = () => {
  runTests()
  Storage.log.forEach((el) => {
    console.log(`\t${el.testBlockName}\r\n`)
    el.testCasesArray.forEach((elem) => {
      let reason = elem.testCaseErrorText
        ? `; reason: ${elem.testCaseErrorText}`
        : ''
      let successChar = elem.testCaseStatus ? figures('✔') : figures('✖')
      console.log(`\t\t${successChar} ${elem.testCaseName}${reason}`)
    })
    console.log('\r\n')
  })
}

showTestResults()
// console.log(Storage)

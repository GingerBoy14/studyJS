const Storage = require('../../classes/Storage')
const path = require('path')
const fs = require('fs')
const logSymbols = require('log-symbols')

const getFilesPaths = (dir, files) => {
  files = files || []
  let fileSystem = fs.readdirSync(dir)
  for (let i in fileSystem) {
    let name = path.join(dir, fileSystem[i])
    if (fs.statSync(name).isDirectory()) {
      getFilesPaths(name, files)
    } else {
      if (name.includes('.test.js')) files.push(name)
    }
  }
  return files
}

let tmp = getFilesPaths('../../../../src')
tmp.forEach((el) => {
  // console.log(el)
  const aa = fs.readFileSync(el, 'utf8')
  // console.log(aa)
  let result = eval(aa)
  // Storage.log.push(result)
  // console.log(Storage.log)
})

Storage.log.forEach((elem) => {
  console.log(elem.testDescribe)
  elem.testCasesArray.forEach((it) => {
    console.log(`${it.name} - ${it.status}`)
    if (it.status) {
      console.log(logSymbols.success, 'Finished successfully!')
    } else {
      console.log(logSymbols.error, 'Test failed!')
    }
  })
})

module.exports = getFilesPaths

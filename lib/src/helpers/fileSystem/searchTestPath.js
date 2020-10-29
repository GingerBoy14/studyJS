const path = require('path')
const fs = require('fs')

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
  console.log(el)
})

module.exports = getFilesPaths

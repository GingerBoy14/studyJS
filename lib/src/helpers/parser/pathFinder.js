const paths = []

const path = require('path')
const fs = require('fs')
function fromDir(startPath, filter) {
  // console.log('Starting from dir '+startPath+'/');
  if (!fs.existsSync(startPath)) {
    console.log('no dir ', startPath)
    return
  }
  let files = fs.readdirSync(startPath)
  for (let i = 0; i < files.length; i++) {
    let filename = path.join(startPath, files[i])
    let stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      fromDir(filename, filter) //recurse
    } else if (filename.indexOf(filter) >= 0) {
      console.log('-- found test file: ', filename)
      paths.push(filename)
    }
  }
}
// for (let i = 0; i < paths.length; i++) {
//   console.log(paths[i])
// }
fromDir('../studyJS/src', '.test.js')
// console.log(paths)

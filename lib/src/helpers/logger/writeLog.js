const fs = require('fs')

function writeLog(fileName, testResults) {
  // convert JSON object to string
  const data = JSON.stringify(testResults)
  // write JSON string to a file
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })
}
module.exports = writeLog

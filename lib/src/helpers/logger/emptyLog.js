const fs = require('fs')

const emptyLog = (fileName) => fs.writeFileSync(fileName, JSON.stringify([]))

module.exports = emptyLog

const fs = require('fs')

const readLog = (filename) => JSON.parse(fs.readFileSync(filename, 'utf-8'))

module.exports = readLog

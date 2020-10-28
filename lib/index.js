// TODO run all test, enter point
// const { describe, it, expect } = require('./src/unitTest')
//
// describe('comment', () => {
//   it('add Hello + World', () => {
//     expect(() => 5 + 5).toBe(10)
//   })
// })
const Storage = require('./src/classes/Storage')
const writeLog = require('./src/helpers/logger/writeLog')
const readLog = require('./src/helpers/logger/readLog')
const emptyLog = require('./src/helpers/logger/emptyLog')
const fileName = require('./src/constants/path')

////////////// test date
const log = {
  log: [],
  total: 100,
  passed: 100,
  failed: 100
}
// create a JSON object
const user = {
  id: 100000,
  name: 'John Doe',
  age: 22
}
const user2 = {
  id: 10,
  name: 'John Duck',
  age: 22
}
log.log.push(user)
log.log.push(user2)
////////////////

emptyLog(fileName)
writeLog(fileName, log)

console.log(readLog(fileName))

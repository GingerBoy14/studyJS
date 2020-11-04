class Storage {
  constructor() {
    this.log = []
    this.currentTestBlock = {}
    this.currentTestCase = {}
    this.totalTests = 0
    this.passedTests = 0
    this.failedTests = 0
  }
  toString = () => {
    return `testBlockName: ${this.log.testBlockName}, \r\n testCasesArray: ${this.log.testCasesArray}`
  }
}

const STORAGE = new Storage()

module.exports = STORAGE

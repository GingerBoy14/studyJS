class Storage {
  constructor() {
    this.log = []
    this.tempDescribe = {}
    this.tmpTestCase = {}
    this.totalTests = 0
    this.passedTests = 0
    this.failedTests = 0
  }
}
module.exports = new Storage()

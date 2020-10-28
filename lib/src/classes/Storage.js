class Storage {
  constructor() {
    this.log = []
    this.curItIdx = -1
    this.testSuites = {
      passed: 0,
      failed: 0,
      total: 0,
      status: false
    }
    this.tests = {
      passed: 0,
      failed: 0,
      total: 0
    }
  }

  getLog = () => this.log
  getCurrentItId = () => this.curItIdx
  getCurrentExpect = () => this.curDesc.it[this.getCurrentItId()].expects
  getTotalTests = () => this.tests.total
  getPassedTests = () => this.tests.passed
  getFailedTests = () => this.tests.failed
  getTotalTestsSuites = () => this.testSuites.total
  getPassedTestsSuites = () => this.testSuites.passed
  getFailedTestsSuites = () => this.testSuites.failed
  getTestsSuitesStatus = () => this.testSuites.status
  pushDescribeToLog = () => {
    this.log.push(this.curDesc)
  }
  pushIterationToDescribe = () => {
    this.curDesc.it.push(this.curIt)
    this.increaseItId()
    this.increaseTotalTests()
  }

  finishTestSuites = () => {
    this.testSuites.status = false
    this.testSuites.total++
    if (this.tests.failed === 0) {
      this.testSuites.status = true
      this.testSuites.passed++
    } else {
      this.testSuites.failed++
    }
  }

  setExpect = (data) => {
    this.curIt.expects = data
  }
  initDescribe = (name) => {
    this.curDesc = { testDescribe: name, it: [] }
    this.curItIdx = -1
  }
  initIteration = (name) => {
    this.curIt = { name, expects: { status: true } }
  }

  increaseItId = () => {
    this.curItIdx++
  }
  increaseTotalTests = () => {
    this.tests.total++
  }
  increasePassedTests = () => {
    this.tests.passed++
  }
  increaseFailedTests = () => {
    this.tests.failed++
  }

  timeOfExecuteIteration = (callback) => {
    const start = new Date().getTime()
    callback()
    const end = new Date().getTime()
    this.curDesc.it[this.getCurrentItId()].time = end - start
  }
}
module.exports = new Storage()

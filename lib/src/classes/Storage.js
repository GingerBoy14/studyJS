class Storage {
  constructor() {
    this.log = []
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
  getCurrentExpect = () => this.curDesc.it.slice(-1)[0].expects
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
    this.tests.total++
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
  }
  initIteration = (name) => {
    this.curIt = { name, expects: { status: true } }
  }

  timeOfExecuteIteration = (callback) => {
    const start = new Date().getTime()
    callback()
    const end = new Date().getTime()
    this.curDesc.it.slice(-1)[0].time = end - start
  }

  setIterationStatus = () => {
    if (this.getCurrentExpect().status) {
      this.tests.passed++
    } else {
      this.tests.failed++
    }
  }
}
module.exports = new Storage()

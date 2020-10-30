class Storage {
  constructor() {
    this.log = []
    this.testSuites = {
      passed: 0,
      failed: 0,
      total: 0
    }
    this.tests = {
      passed: 0,
      failed: 0,
      total: 0
    }
  }
  setLog = (log) => {
    this.log = log
  }
  getLog = () => this.log
  getCurrentExpect = () => this.curDesc.it.slice(-1)[0].expects
  getTotalTests = () => this.tests.total
  getPassedTests = () => this.tests.passed
  getFailedTests = () => this.tests.failed
  getTotalTestsSuites = () => this.testSuites.total
  getPassedTestsSuites = () => this.testSuites.passed
  getFailedTestsSuites = () => this.testSuites.failed
  getFileStatus = (idx) => this.log[idx].status

  pushLog = () => {
    this.log.push(this.curFile)
  }
  pushDescribe = () => {
    this.curFile.describe.push(this.curDesc)
  }
  pushIterationToDescribe = () => {
    this.curDesc.it.push(this.curIt)
    this.tests.total++
  }

  finishTestSuites = () => {
    this.testSuites.total++
    if (this.curTests.failed === 0) {
      this.curFile.status = true
      this.testSuites.passed++
    } else {
      this.curFile.status = false

      this.testSuites.failed++
    }
  }
  initFile = (filepath) => {
    this.curFile = { filepath, describe: [], status: false, error: '' }
    this.curTests = {
      passed: 0,
      failed: 0
    }
  }
  setErrorToFile = (errMes) => {
    this.curFile.error = errMes
  }
  setCurrentFileStatus = (status) => {
    this.curFile.status = status
  }
  setExpect = (data) => {
    this.curIt.expects = data
  }
  initDescribe = (name) => {
    this.curDesc = { textDescribe: name, it: [] }
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
      this.curTests.passed++
      this.tests.passed++
    } else {
      this.curTests.failed++
      this.tests.failed++
    }
  }
}
module.exports = new Storage()

class Storage {
  beforeEachs = []
  afterEachs = []
  afterAlls = []
  beforeAlls = []
  Totaltests = 0
  passedTests = 0
  failedTests = 0
  results = []
  currDesc = {
    it: []
  }
  currIt = {}

  beforeEach(fn) {
    this.beforeEachs.push(fn)
  }

  afterEach(fn) {
    this.afterEachs.push(fn)
  }

  beforeAll(fn) {
    this.beforeAlls.push(fn)
  }

  afterAll(fn) {
    this.afterAlls.push(fn)
  }
}
module.exports = new Storage()

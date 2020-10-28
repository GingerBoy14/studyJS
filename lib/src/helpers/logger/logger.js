const chalk = require('chalk')
const logSymbols = require('figures')

const logger = (Storage, fileName) => {
  fileName = './index.js'
  //todo file name + pass/fail'
  if (Storage.getTestsSuitesStatus()) {
    console.log(`${chalk.bgGreenBright(' PASS ')} ${fileName}`)
  } else {
    console.log(`${chalk.bgRedBright.bold(' FAIL ')} ${fileName}`)
  }
  Storage.getLog().forEach(({ testDescribe, it }) => {
    console.log(' ', testDescribe)
    it.forEach((data) => {
      if (!data.expects.status) {
        console.log(
          `    ${chalk.red(logSymbols.windows.cross)} ${data.name} (${
            data.time
          }ms)`
        )
      } else {
        console.log(
          `    ${chalk.green(logSymbols.windows.tick)} ${data.name} (${
            data.time
          }ms)`
        )
      }
    })
  })

  Storage.getLog().forEach(({ testDescribe, it }) => {
    it.forEach(({ expects, name }) => {
      if (!expects.status) {
        console.log(
          chalk.red`\n  ${logSymbols.main.bullet} ${testDescribe} > ${name}\n`
        )
        console.log(`    ${expects.comment}`)
      }
    })
  })
  const passedTestSuitesLayout = () => {
    const passed = Storage.getPassedTestsSuites()
    return passed > 0 ? `${chalk.green(`${passed} passed`)}, ` : ''
  }
  const failedTestSuitesLayout = () => {
    const failed = Storage.getFailedTestsSuites()
    return failed > 0 ? `${chalk.red(`${failed} failed`)}, ` : ''
  }

  console.log(
    `\nTests Suites: ${passedTestSuitesLayout()}${failedTestSuitesLayout()}${chalk.bold(
      Storage.getTotalTestsSuites()
    )} total`
  )

  const passedTestLayout = () => {
    const passed = Storage.getPassedTests()
    return passed > 0 ? `${chalk.green(`${passed} passed`)}, ` : ''
  }
  const failedTestLayout = () => {
    const failed = Storage.getFailedTests()
    return failed > 0 ? `${chalk.red(`${failed} failed`)}, ` : ''
  }

  console.log(
    `Tests: ${passedTestLayout()}${failedTestLayout()}${chalk.bold(
      Storage.getTotalTests()
    )} total`
  )
}

module.exports = logger

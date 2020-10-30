const chalk = require('chalk')
const logSymbols = require('figures')
const Storage = require('../../../classes/Storage')
const showTestResult = () => {
  Storage.getLog().forEach(({ filepath, describe, status }, idx) => {
    showFileStatus(filepath, idx)

    if (!status) {
      describe.forEach(({ textDescribe, it }) => {
        console.log(' ', textDescribe)
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
      describe.forEach(({ textDescribe, it }) => {
        it.forEach(({ expects, name }) => {
          if (!expects.status) {
            console.log(
              chalk.red`\n  ${logSymbols.main.bullet} ${textDescribe} > ${name}\n`
            )
            console.log(`    ${expects.comment}\n`)
            // console.log(expects.code)
          }
        })
      })
    }
  })

  showTestInfoBlock()
}

const showFileStatus = (fileName, idx) => {
  if (Storage.getFileStatus(idx)) {
    console.log(`${chalk.reset.black.bgGreenBright(' PASS ')} ${fileName}`)
  } else {
    console.log(`${chalk.reset.bgRed.black(' FAIL ')} ${fileName}`)
  }
}

const showTestInfoBlock = () => {
  const passedTestSuitesLayout = () => {
    const passed = Storage.getPassedTestsSuites()
    return passed > 0 ? `${chalk.green(`${passed} passed`)}, ` : ''
  }
  const failedTestSuitesLayout = () => {
    const failed = Storage.getFailedTestsSuites()
    return failed > 0 ? `${chalk.red(`${failed} failed`)}, ` : ''
  }
  const passedTestLayout = () => {
    const passed = Storage.getPassedTests()
    return passed > 0 ? `${chalk.green(`${passed} passed`)}, ` : ''
  }
  const failedTestLayout = () => {
    const failed = Storage.getFailedTests()
    return failed > 0 ? `${chalk.red(`${failed} failed`)}, ` : ''
  }

  console.log(
    `\nTests Suites: ${passedTestSuitesLayout()}${failedTestSuitesLayout()}${chalk.bold(
      Storage.getTotalTestsSuites()
    )} total`
  )

  console.log(
    `Tests: ${passedTestLayout()}${failedTestLayout()}${chalk.bold(
      Storage.getTotalTests()
    )} total`
  )
}

module.exports = showTestResult

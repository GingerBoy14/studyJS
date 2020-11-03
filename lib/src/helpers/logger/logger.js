const Storage = require('../../classes/Storage')
const logSymbols = require('log-symbols')
const chalk = require('chalk')
function logger() {
  console.log(
    `Total Test: ${Storage.Totaltests} \n Tests ${chalk.green(
      'passed = ' + chalk.green(Storage.passedTests)
    )} \n Tests ${
      chalk.red('failed = ') + chalk.red(Storage.failedTests, '\n')
    } `
  )
  const logTitle =
    Storage.failedTests > 0
      ? console.log(
          logSymbols.error,
          chalk.red.underline.bold(
            'Error! Not all test finished successfully! \n'
          )
        )
      : console.log(
          logSymbols.success,
          chalk.green.underline.bold('Finished successfully! \n')
        )
  console.log()
  for (var index = 0; index < Storage.results.length; index++) {
    var description = Storage.results[index]
    const descName = description.name
    const its = description.it
    console.log(
      'Block Describe - ',
      chalk.bgCyanBright.underline.bold(`${descName}`)
    )
    for (var i = 0; i < its.length; i++) {
      var itName = its[i]
      console.log(
        `Block it - `,
        chalk.bgCyanBright.underline.bold(`${itName.name}`)
      )
      for (var j = 0; j < itName.expects.length; j++) {
        const expect = itName.expects[j]
        console.log(
          `${
            expect.status === true
              ? chalk.green('Test passed', logSymbols.success, '\n')
              : chalk.red('Test failed', logSymbols.error, 'Error!', '\n')
          } ${expect.name}`
        )
      }
    }
  }
}

module.exports = logger

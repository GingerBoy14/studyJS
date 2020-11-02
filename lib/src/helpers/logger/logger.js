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
  for (var index = 0; index < Storage.stats.length; index++) {
    var description = Storage.stats[index]
    const descName = description.name
    const its = description.it
    console.log(chalk.bgCyan.underline.bold('Describe - ', descName))
    for (var i = 0; i < its.length; i++) {
      var itName = its[i]
      console.log(`   ${itName.name}`)
      for (var j = 0; j < itName.expects.length; j++) {
        const expect = itName.expects[j]
        console.log(
          `      ${
            expect.status === true
              ? console.log(chalk.green('Test passed', logSymbols.success))
              : console.log(
                  chalk.red('Test failed', logSymbols.error, 'Error!')
                )
          } ${expect.name}`
        )
      }
    }
  }
}

module.exports = logger

const childProcess = require('child_process')

const runScript = async (scriptPath, callback) => {
  let process = await childProcess.execSync(`node`, ['App.test.js'])
  console.log(process)
}

runScript()

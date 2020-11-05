import React, { useState } from 'react'
import data from './log'
const logSymbols = require('log-symbols')

const Stocks = () => {
  const [log] = useState(data)
  return (
    <>
      {log.log.map(({ testDescribe, testCasesArray }) => (
        <div>
          <h3>{testDescribe}</h3>
          {testCasesArray.map(({ name, status }) => (
            <div>
              <span>{status ? logSymbols.success : logSymbols.error}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default Stocks

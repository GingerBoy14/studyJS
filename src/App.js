// const args = { name: 'sd6', age: 5 }
// Validator.validate({ rules, args })
import React from 'react'
import log from './log.json'

const App = () => {
  return <div></div>
}

const Test = () => (
  <div>
    <h1>Result tests</h1>
    <h2 style={{ color: 'orange' }}>Total test = {log.totalTests}</h2>
    <h2 style={{ color: 'red' }}>Failed test = {log.failedTests}</h2>
    <h2 style={{ color: 'green' }}>Passed test = {log.passedTests}</h2>
    {log.results.map(({ it, nameDescribe }) => (
      <div>
        <h2 style={{ color: 'blue' }}> Name Describe = {nameDescribe}</h2>
        {it.map(({ nameIt, expects }) => (
          <div>
            <h2>Name It = {nameIt}</h2>
            {expects.map(({ expect, status }) => {
              const pass = () => (
                <span style={{ fontSize: 17, fontWeight: '600' }}>✅</span>
              )
              const fail = () => (
                <span style={{ fontSize: 17, fontWeight: '600' }}>❌</span>
              )
              return (
                <div>
                  <h3 style={{ color: 'gray', display: 'inline' }}>{expect}</h3>
                  {status ? pass() : fail()}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    ))}
  </div>
)

export { App, Test }

import React, { Component, useState, useEffect } from 'react'
import data from './tests.json'
import figures from 'figures'
// import show from './lib/src/helpers/display/browser/showTestsInBrowser'
// load in JSON data from file
// var data

const List = (props) => {
  const [log, setLog] = useState(data)
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("http://localhost:4000/testAPI")
      .then((res) => res.json())
      .then((logs) => {
        console.log(logs)
        setLog(logs)
      })
  }, [count])
  return (
    <>
      {log.map(({ testBlockName, testCasesArray }) => (
        <div>
          <h3>{testBlockName}</h3>
          {testCasesArray.map(
            ({ testCaseStatus, testCaseName, testCaseErrorText }) => (
              <div>
                <span>{testCaseStatus ? figures('✔') : figures('✖')} </span>
                <span>{testCaseName} </span>
                <span>{testCaseErrorText}</span>
              </div>
            )
          )}
        </div>
      ))}
      <button onClick={() => setCount(count + 1)}>Launch tests again</button>
    </>
  )
}
// export class List extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       stringData: data
//     }
//   }
//   render() {
//     const valuesArray = this.state.stringData
//     let describes = valuesArray.map(function (item) {
//       let describeName = item.testBlockName
//       let testCases = item.testCasesArray.map(function (testCase) {
//         let fig
//         if (testCase.testCaseStatus) fig = figures('✔')
//         else fig = figures('✖')
//         return (
//           <div>
//             <span>{fig} </span>
//             <span>{testCase.testCaseName} </span>
//             <span>{testCase.testCaseErrorText}</span>
//           </div>
//         )
//       })
//       return (
//         <div>
//           <h3>{describeName}</h3>
//           <div>{testCases}</div>
//         </div>
//       )
//     })
//     return (
//       <div>
//         <h3>{describes}</h3>
//       </div>
//     )
//   }
// }

export class Tests extends Component {
  render() {
    return (
      <div>
        <List data={data} />
      </div>
    )
  }
}

export default List

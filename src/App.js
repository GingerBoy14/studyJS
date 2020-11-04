import React, { Component } from 'react'
import CONSTANTS from './constants'
import { Post, Storage } from './classes'
import Validator from './utils/validator'
import List from './displayResults'

const post1 = new Post()
const post2 = new Post()
Storage.post(post1)
Storage.post(post2)

/**
 *
 * @type {{name: *, age: *}}
 */
// const rules = {
//   name: PropTypes.string().required().min(1).max(3),
//   age: PropTypes.number()
// }
// const args = { name: 'sd6', age: 5 }

// Validator.validate({ rules, args })
class App extends Component {
  render() {
    return <List />
  }
}

export default App

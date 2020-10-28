import React from 'react'
import CONSTANTS from './constants'
import { Post, Storage } from './classes'
import PropTypes from './utils/PropTypes'
import Validator from './utils/validator'

const post1 = new Post()
const post2 = new Post()
Storage.post(post1)
Storage.post(post2)

/**
 *
 * @type {{name: *, age: *}}
 */
const rules = {
  name: PropTypes.string().required().min(1).max(3),
  age: PropTypes.number()
<<<<<<< HEAD
} 
const args = { name: "sd6", age: 5 }
=======
}
const args = { name: 'sd6', age: 5 }
>>>>>>> c0760185793bdb106a623ac2807cf15f3f2b546a

Validator.validate({ rules, args })
const App = () => <h1>asdfasdf</h1>

export default App

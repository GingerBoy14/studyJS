import React from 'react'
import CONSTANTS from './constants'
import { Post, Storage } from './classes'
import PropTypes from './utils/PropTypes'
import Validator from './utils/validator'

const post1 = new Post()
const post2 = new Post()
Storage.post(post1)
Storage.post(post2)

const rules = {
  name: PropTypes.string().required().min(1),
  age: PropTypes.number()
}
const args = { name: 'sd6', age: 5 }

Validator.validate({ rules, args })
const App = () => <h1>asdfasdf</h1>

export default App

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CONSTANTS from './constants'
import { Post, Storage } from './classes'
import PropTypes from './utils/PropTypes'
import Validator from './utils/validator'

const post1 = new Post();
const post2 = new Post();
Storage.post(post1)
Storage.post(post2)
const rules = {
  name: PropTypes.string().required().min(1), 
  age: PropTypes.number()
}
const args = {name: "sd", age: 5}

Validator.validate({rules, args});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

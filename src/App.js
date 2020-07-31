import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and stay home.
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
      <Test 
        name="Sannu"
        email="asdasd@ajsd"
      />
    </div>
  );
}

export default withRouter(App);

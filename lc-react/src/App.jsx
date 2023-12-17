import logo from './logo.svg';
import './App.css';
import React, { Component, useState }  from 'react';
import Another from './Another.jsx';

function App() {

  const [count, setCount] = useState(0);

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  };

  return (
    <div className="App">
      <header className="App-header">
      <Another />
        <div>
          <span>{count}</span>
          <button type='button' onClick={decrement}>-</button>
          <button type='button' onClick={increment}>+</button>
        </div>
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

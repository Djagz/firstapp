import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';

const Dipesh = (props) => {
  return(
      <div>
        Name: <input type="text" />
        <br />
        <button>Add</button>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Dipesh />
       <Test />
      </header>
    </div>
  );
}

export default App;

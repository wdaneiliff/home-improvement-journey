/* @flow */
import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.name = 'Mike'
  }

  myTest = () => {
    console.log(this.name)
  }

  render() {
    this.myTest()
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

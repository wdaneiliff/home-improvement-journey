/* @flow */
import React, { Component } from 'react'
import logo from '../logo.svg'
import './app.css'

class App extends Component {
  render() {
    const {
      name
    } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React
          {
            name && <span>, {name}</span>
          }
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

App.defaultProps = {
  name: ''
}

export default App

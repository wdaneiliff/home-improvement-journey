import React, { Component, PropTypes } from 'react'
import logo from '../logo.svg'
import './app.css'
// import { loadProduct } from '../utils/bd-api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { product: {}}
  }

  componentDidMount() {
    // loadProduct('10089623').then((product) => this.setState({product}))
  }

  render() {
    const {
      name
    } = this.props

    // console.log(this.state.product)

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
        <span className="with-sass">I am styled with SASS</span>
      </div>
    )
  }
}

App.displayName = 'App'

App.propTypes = {
  name: PropTypes.string
}

App.defaultProps = {
  name: 'Mike'
}

export default App

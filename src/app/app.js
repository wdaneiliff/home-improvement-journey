import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import logo from '../logo.svg'
import './app.css'
// import { loadProduct } from '../utils/bd-api'

const Home = () => (
  <div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <span className="with-sass">I am styled with SASS</span>
  </div>
)

const About = (props) => {
  console.log(props)
  return (
    <h1>About</h1>
  )
}

const NoMatch = (props) => {
  console.log(props)
  return (
    <div>
      <h1>404</h1>
      <p>Sorry but didn’t match any pages</p>
    </div>
  )
}

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
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React
            {
              name && <span>, {name}</span>
            }
            </h2>
          </div>
          <Link to="/">Home</Link><span> | </span>
          <Link to="/about">About</Link>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Miss component={NoMatch}/>
        </div>
      </BrowserRouter>
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

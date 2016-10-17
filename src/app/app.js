import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Home from './components/home'
import NotFound from './components/not-found'
import Project from './components/project'
import MilestoneDetails from './components/project/milestones/details'
import ProjectList from './components/project-list'
import ProjectSetup from './components/project-setup'
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
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React
            {
              name && <span>, {name}</span>
            }
            </h2>
            <div className="breadcrumbs">
              <Link to="/">Home</Link><span> | </span>
              <Link to="/projects/add">Add Project</Link><span> | </span>
              <Link to="/projects">Projects</Link><span> | </span>
            </div>
          </div>

          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/projects" component={ProjectList} />
          <Match exactly pattern="/projects/:id(\d+)" component={Project} />
          <Match exactly pattern="/projects/:id(\d+)/milestones/(\d+)" component={MilestoneDetails} />
          <Match exactly pattern="/projects/add" component={ProjectSetup} />
          <Miss component={NotFound}/>
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

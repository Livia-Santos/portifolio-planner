import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList'

class App extends Component {
  state = {
    projects: null
  }

  render() {
    const { projects } = this.state

    return (
      <div className="App">
      {
        !!projects ? (
          <ProjectList items={ projects } />
        ) : (
          'Loading projects...'
        )
      }
      </div>
    );
  }

  // Run after our component instance first appears on screen
  componentDidMount() {
    fetch('/projects')
      // Parsing the JSON into JavaScript objects
      .then(res => res.json())
      //Update our component's state with the loaded projects
      .then(json => {
        this.setState({
          projects: json
        })
      })
  }
}

export default App;

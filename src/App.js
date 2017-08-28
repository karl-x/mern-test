import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
  // when the api should run
  componentDidMount() {
    const url ='http://gentle-savannah-81543.herokuapp.com/articles'
    console.log('calling the express api: ', url)

    fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      console.log('Parsed JSON', json)
    }).catch(function (ex) {
      console.log('Parsing JSON failed', ex);
    })
  }
}

export default App;

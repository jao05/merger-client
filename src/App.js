import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './components/homePage';

class App extends Component {
  render() {
    return (
      
      <div className="app">
        <NavBar />
        <HomePage />
      </div>
      
    );
  }
}

export default App;

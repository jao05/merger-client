import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import MergerPage from './components/mergerPage';
import AcquisitionPage from './components/acquisitionPage';
import SellPage from './components/sellPage';
import ExpertPage from './components/expertPage';
import SignIn from './components/signIn';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      	<div className="app">        
        	<NavBar />        	
        	<main>        		        
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
        		<Route exact path="/merger" component={MergerPage}/>
        		<Route exact path="/acquisition" component={AcquisitionPage}/>
        		<Route exact path="/sell" component={SellPage}/>
        		<Route exact path="/expert" component={ExpertPage}/>
            <Route exact path="/signIn" component={SignIn}/>
        	</main>        
      	</div>
      </Router>      
    );
  }
}

export default App;

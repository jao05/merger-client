import {connect} from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import LandingPage from './components/landingPage';
import HomePage from './components/homePage';
import MergerPage from './components/mergerPage';
import AcquisitionPage from './components/acquisitionPage';
import SellPage from './components/sellPage';
import ExpertPage from './components/expertPage';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import EditProfilePage from './components/editProfilePage';
import DeactivatePage from './components/deactivatePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
      	<div className="app">        
        	{this.props.user ? <NavBar /> : null}
                  	
        	<main>        		        
            <Route exact path="/navBar" component={NavBar}/> 
            <Route exact path="/" component={LandingPage}/> 
            <Route exact path="/home" component={HomePage}/>
        		<Route exact path="/merger" component={MergerPage}/>
        		<Route exact path="/acquisition" component={AcquisitionPage}/>
        		<Route exact path="/sell" component={SellPage}/>
        		<Route exact path="/expert" component={ExpertPage}/>
            <Route exact path="/signIn" component={SignIn}/>
            <Route exact path="/signUp" component={SignUp}/>
            <Route exact path="/editProfile" component={EditProfilePage}/>
            <Route path="/deactivatePage/:id" component={DeactivatePage}/>
        	</main>        
      	</div>
      </Router>      
    );
  }
}

const mapStateToProps = state => ({
  
  user: state.user
}) 

export default connect(mapStateToProps)(App);

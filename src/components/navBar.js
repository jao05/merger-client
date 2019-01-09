// Use to fix landingPage re-route issue
import { withRouter } from "react-router";

import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {signUserOut} from '../actions';
import store from '../store';
import './navBar.css';


export class NavBar extends React.Component {

    signOut = () => {
      console.log('HERE......'); // ***************************************
      this.props.dispatch(signUserOut());
      this.props.history.push('/'); // *** App should redirect to landingPage after user signs out ********
    }


    render(){
      if (this.props.user) {
        return (
          <nav role="navigation">
            <header>
              <h1><Link to="/home">Merger</Link></h1>         
            </header>
            <span>Signed in as {this.props.user.name}</span>
            <button onClick={() => this.signOut()}>Sign Out</button>
          </nav>
        );  
      }
      else {
        return (
          <nav role="navigation">
            <header>
              <h1>Merger</h1>         
            </header>          
          </nav>
        );
      }
    }    
}

export const mapStateToProps = state => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps)(NavBar));

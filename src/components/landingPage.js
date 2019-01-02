// This is the first page the user sees and gives the user the option to sign-in or sign-up

import React from 'react';
// import {connect} from 'react-redux';
// import store from '../store';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function LandingPage(props) {    

    return (
      <div>
        <p>
        	Welcome to Merger where small business owners who are fed up with being small
        	connect with each other to build larger, stronger organizations.
        </p>

        <Link to="/signIn"><button>Sign In</button></Link>
        <Link to="/signUp"><button>Sign Up</button></Link>        
      </div>
    );
}

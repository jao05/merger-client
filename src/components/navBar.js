import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export function NavBar(props) {
    
    if (props.user) {

      return (
        <nav role="navigation">
          <header>
            <h1>Merger</h1>         
          </header>

          <p>Signed in as {props.user.name}</p>

          <button>Sign Out</button>
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

export const mapStateToProps = state => ({
    
  user: state.user
});

export default connect(mapStateToProps)(NavBar);

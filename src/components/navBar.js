import React from 'react';
import {connect} from 'react-redux';

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

          <button>Sign In</button>
        </nav>
      );
    }

    
}

export const mapStateToProps = state => ({
    
    user: state.user
});

export default connect(mapStateToProps)(NavBar);

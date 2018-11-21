import React from 'react';
import {connect} from 'react-redux';

export function NavBar(props) {
    return (
      <nav role="navigation">
      	<header>
        	<h1>Merger</h1>        	
      	</header>

      	<p>Signed in as {props.user.name}</p>

      	<button>Log Out</button>
      </nav>
    );
}

export const mapStateToProps = state => ({
    
    user: state.user
});

export default connect(mapStateToProps)(NavBar);

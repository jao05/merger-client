import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {signUserOut} from '../actions';
// import store from '../store'


export class NavBar extends React.Component {


    signOut = () => {
        this.props.dispatch(signUserOut());
        this.props.history.push('/');     
    }


    render(){
      if (this.props.user) {

      return (
        <nav role="navigation">
          <header>
            <h1>Merger</h1>         
          </header>

          <p>Signed in as {this.props.user.name}</p>

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

export default connect(mapStateToProps)(NavBar);

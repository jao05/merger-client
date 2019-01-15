// Use to fix landingPage re-route issue
import { withRouter } from "react-router";
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signUserOut} from '../actions';

import './navBar.css';


export class NavBar extends React.Component {

    signOut = () => {      
      this.props.dispatch(signUserOut());
      this.props.history.push('/'); 
    }
    
    editProfile = (event) => {
      event.preventDefault();


      // Dispatch action      
      this.props.history.push('/editProfilePage');
    }

    deactivateAccount = (event) => {
      event.preventDefault();

      // Dispatch action
      this.props.history.push('/deactivatePage');
    }


    render(){
      if (this.props.user) {
        return (
          <nav role="navigation">
            <header>
              <p id='logo'><Link to="/home">Merger</Link></p>         
            </header>
            <p>Signed in as {this.props.user.name}</p>
            <p>Location: {this.props.user.location}</p>
            <p>Industry: {this.props.user.industry}</p>
            <button onClick={() => this.signOut()}>Sign Out</button>
            <Link to="/editProfile"><button >Edit Profile</button></Link>
            <Link to={`/deactivatePage/${this.props.user.id}`}><button >Deactivate Account</button></Link>
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

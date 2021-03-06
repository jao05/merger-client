// The user is directed to this component if they select to 'sign-in' on the landingPage
// After signing-in, the user is directed to the homePage

import React from 'react';
import {connect} from 'react-redux';

import {fetchUserForSignIn} from '../actions';

import './signIn.css';

export class SignIn extends React.Component {    

    constructor(props) {
    	super(props);

    	this.state = {
    		error: null
    	}
    }

    signIn = async (event) => {
        event.preventDefault();
        const userSignIn = {
	    	name: document.getElementById('companyName').value,    
	    	password: document.getElementById('password').value,
	    }	    
        
        this.props.dispatch(fetchUserForSignIn(userSignIn, ()=>{
            this.props.history.push('/home');
        }));        
    }

    render() {
        return (
	      <div>
	        <p>{this.props.error}</p>
	        <form>
	        	<div id='signInWrapper'>
                    <div className='inputDiv'>
                        <label>Company Name</label>
                        <input id='companyName' required/>
                    </div>
                
                    <div className='inputDiv'>
                        <label>Password</label>
                        <input id='password' type='password' required/>
                    </div>
                </div>
                  

		        <button type='Submit' onClick={(e) => this.signIn(e)}>Submit</button>
	        </form>	        
	      </div>
    	);
    }    
} 

const mapStateToProps = state => ({  
  error: state.error,
  authentication: state.authentication
})

export default connect(mapStateToProps)(SignIn);

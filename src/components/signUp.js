// The user is directed to this component if they select to 'sign-up' on the landingPage
// After signing-up, the user is directed to the homePage

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {createUserCompanyRequest} from '../actions';

export default class SignUp extends React.Component {    

    constructor(props)  {

      super(props);
    }

    submitSignUp(event) {
    	console.log('HERE....'); // *******************************
    	event.preventDefault();

    	const userSignUp = {
	    	name: document.getElementById('companyName').value,    
	    	location: {
	    		city: document.getElementById('companyCity').value,    
		    	state: document.getElementById('companyState').value,    
		    	country: document.getElementById('companyCountry').value,    
	    	},	    	
	    	industry: document.getElementById('industry').value,    
	    	contact: {
	    		firstName: document.getElementById('contactFirstName').value,    
		    	lastName: document.getElementById('contactLastName').value,    
		    	email: document.getElementById('contactEmail').value,    	
	    	},
	    	description: document.getElementById('companyDescription').value,    
	    	openToMerger: document.getElementById('openToMerger').value,    
	    	openToAcquisition: document.getElementById('openToAcquisition').value,    
	    	openToSell: document.getElementById('openToSell').value,	    	
	    	password: document.getElementById('password').value	
    	}

    	store.dispatch(createUserCompanyRequest(userSignUp));  	
    }

    render() {
    	return (
	      <div>
	        <form onSubmit={(e) => this.submitSignUp(e)}>
	        	<label>Company Name (Username)</label>
		        <input id='companyName'/>

		        <label>Company City</label>
		        <input id='companyCity'/>

		        <label>Company State</label>
		        <input id='companyState'/>

		        <label>Company Country</label>
		        <input id='companyCountry'/>

		        <label>Industry</label>
		        <input id='industry'/>

		        <p>Contact Person:</p>
		        <label>First Name</label>
		        <input id='contactFirstName'/>

		        <label>Last Name</label>
		        <input id='contactLastName'/>

		        <label>Email</label>
		        <input id='contactEmail'/>

		        <label>Open to Merger</label>
		        <select id='openToMerger'>
		        	<option value='true'>True</option>
		        	<option value='false'>False</option>
		        </select>

		        <label>Open to Acquisition</label>
		        <select id='openToAcquisition'>
		        	<option value='true'>True</option>
		        	<option value='false'>False</option>
		        </select>

		        <label>Open to Sell</label>
		        <select id='openToSell'>
		        	<option value='true'>Yes</option>
		        	<option value='false'>No</option>
		        </select>

		        <label>Company Description</label>
		        <input id='companyDescription'/>

		        <label type='password'>Password</label>
		        <input id='password'/> 

		        <button type='Submit'>Submit</button>
	        </form>        
	      </div>
    	);
    }    
}

// The user is directed to this component if they select to 'sign-up' on the landingPage
// After signing-up, the user is directed to the homePage
import React from 'react';
import store from '../store';
import {createUserCompanyRequest} from '../actions';

import './signUp.css';

export default class SignUp extends React.Component {    

    // constructor(props)  {

    //   super(props);
    // }

    submitSignUp(event) {    	
    	event.preventDefault();

    	const userSignUp = {
	    	name: document.getElementById('companyName').value,    
	    	location: document.getElementById('location').value,	    	
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
    	this.props.history.push('/home'); 	
    }

    cancelSignUp(event) {
		event.preventDefault();
		console.log('CANCELLING....'); // ****************************************
		this.props.history.push('/');
	}

    render() {
    	return (
	      <div>
	        <form onSubmit={(e) => this.submitSignUp(e)}>
	        	<section className='companyInfo'>
	        		<p>Company Info:</p>
	        		<label>Company Name (Username)</label>
			        <input id='companyName' required/>

			        <label type='password'>Password</label>
			        <input id='password' required/> 

			        <label>Location</label>
			        <select id='location' required>
		              <option value="New York">New York</option>
		              <option value="Atlanta">Atlanta</option>
		              <option value="Memphis">Memphis</option>
		              <option value="San Francisco">San Francisco</option>
	            	</select>

			        <label>Industry</label>
			        <select id='industry' required>
		              <option value="Technology">Technology</option>
		              <option value="Financial">Financial</option>
		              <option value="Beauty">Beauty</option>
		              <option value="Health">Health</option>
	            	</select>
	        	</section>
	        	

		        <section className='contactInfo' required>
		        	<p>Contact Person:</p>
			        <label>First Name</label>
			        <input id='contactFirstName' required/>

			        <label>Last Name</label>
			        <input id='contactLastName' required/>

			        <label>Email</label>
			        <input id='contactEmail' required/>
		        </section>
		        

		        <section className='companyAttributes'>
		        	<p>Attributes:</p>
		        	<label>Open to Merger</label>
			        <select id='openToMerger' required>
			        	<option value='true'>Yes</option>
			        	<option value='false'>No</option>
			        </select>

			        <label>Open to Acquisition</label>
			        <select id='openToAcquisition' required>
			        	<option value='true'>Yes</option>
			        	<option value='false'>No</option>
			        </select>

			        <label>Open to Sell</label>
			        <select id='openToSell' required>
			        	<option value='true'>Yes</option>
			        	<option value='false'>No</option>
			        </select>

			        <label>Company Description</label>
			        <textarea id='companyDescription' type='text' required></textarea>			        
		        </section>
		        

		        <button type='Submit'>Submit</button>
		        <button onClick={e => this.cancelSignUp(e)}>Cancel</button>
	        </form>        
	      </div>
    	);
    }    
}

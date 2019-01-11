import React from 'react';
import store from '../store';
import {connect} from 'react-redux';
import {createUserCompanyUpdate} from '../actions';

import './editProfilePage.css';

export class EditProfilePage extends React.Component {

	editUserProfile(event) {
		event.preventDefault();

		const userProfileEdits = {
			id: this.props.user.id,
			name: document.getElementById('editCompanyName').value,    
		    location: document.getElementById('editLocation').value,	    	
		    industry: document.getElementById('editIndustry').value,
		    openToMerger: document.getElementById('editOpenToMerger').value,    
		    openToAcquisition: document.getElementById('editOpenToAcquisition').value,    
		    openToSell: document.getElementById('editOpenToSell').value,	    	    
		}
		// console.log('ID is...', this.props.user.id); // **********************************************
		// console.log('ID is...', this.props.user._id); // **********************************************
		store.dispatch(createUserCompanyUpdate(userProfileEdits));
	}

	cancelChanges(event) {
		event.preventDefault();		
		this.props.history.push('/home');
	}

	render() {
		
		return (
			<div>
				<form onSubmit={(e) => this.editUserProfile(e)}>
					<div class='inputDiv'>
						<label>Company Name (Username)</label>
						<input id='editCompanyName' defaultValue={this.props.user.name}/>
					</div>
					

					<div class='inputDiv'>
						<label>Location</label>
						<select id='editLocation'>
					      	<option value="New York">New York</option>
					        <option value="Atlanta">Atlanta</option>
					        <option value="Memphis">Memphis</option>
					        <option value="San Francisco">San Francisco</option>
				        </select>
					</div>
					
					<div class='inputDiv'>
						<label>Industry</label>
						<select id='editIndustry'>
					        <option value="Technology">Technology</option>
					        <option value="Financial">Financial</option>
					        <option value="Beauty">Beauty</option>
					        <option value="Health">Health</option>
				        </select>
					</div>
			        

			        <div class='inputDiv'>
			        	<label>Open to Merger</label>
			        	<select id='editOpenToMerger'>
						    <option value='true'>Yes</option>
						    <option value='false'>No</option>
						</select>
			        </div>
			        
					

					<div class='inputDiv'>
						<label>Open to Acquisition</label>
						<select id='editOpenToAcquisition'>
						    <option value='true'>Yes</option>
						    <option value='false'>No</option>
						</select>
					</div>
					

					<div class='inputDiv'>
						<label>Open to Sell</label>
						<select id='editOpenToSell'>
						    <option value='true'>Yes</option>
						    <option value='false'>No</option>
						</select>
					</div>
					
					

					<button type='Submit'>Save Changes</button>
					<button onClick={e => this.cancelChanges(e)}>Cancel</button>
				</form>
			</div>
		);		
	}
}

export const mapStateToProps = state => ({
  
  user: state.user
}) 

export default connect(mapStateToProps)(EditProfilePage);
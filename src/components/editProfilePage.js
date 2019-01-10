import React from 'react';
import store from '../store';
import {connect} from 'react-redux';
import {createUserCompanyUpdate} from '../actions';

export class EditProfilePage extends React.Component {

	editUserProfile(event) {
		event.preventDefault();

		const userProfileEdits = {
			id: this.props.user._id,
			name: document.getElementById('editCompanyName').value,    
		    location: document.getElementById('editLocation').value,	    	
		    industry: document.getElementById('editIndustry').value,
		    openToMerger: document.getElementById('editOpenToMerger').value,    
		    openToAcquisition: document.getElementById('editOpenToAcquisition').value,    
		    openToSell: document.getElementById('editOpenToSell').value,	    	    
		}
		console.log('ID is...', this.props.user); // **********************************************
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
					<label>Company Name (Username)</label>
					<input id='editCompanyName'/>

					<label>Location</label>
					<select id='editLocation'>
				      	<option value="New York">New York</option>
				        <option value="Atlanta">Atlanta</option>
				        <option value="Memphis">Memphis</option>
				        <option value="San Francisco">San Francisco</option>
			        </select>

			        <label>Industry</label>
					<select id='editIndustry'>
				        <option value="Technology">Technology</option>
				        <option value="Financial">Financial</option>
				        <option value="Beauty">Beauty</option>
				        <option value="Health">Health</option>
			        </select>

			        <label>Open to Merger</label>
					<select id='editOpenToMerger'>
					    <option value='true'>Yes</option>
					    <option value='false'>No</option>
					</select>

					<label>Open to Acquisition</label>
					<select id='editOpenToAcquisition'>
					    <option value='true'>Yes</option>
					    <option value='false'>No</option>
					</select>

					<label>Open to Sell</label>
					<select id='editOpenToSell'>
					    <option value='true'>Yes</option>
					    <option value='false'>No</option>
					</select>

					<button type='Submit'>Save Changes</button>
					<button onClick={e => this.cancelChanges(e)}>Cancel</button>
				</form>
			</div>
		);		
	}
}

const mapStateToProps = state => ({
  
  user: state.user
}) 

export default connect(mapStateToProps)(EditProfilePage);
import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {deleteUserCompanyRequest} from '../actions'; 

export class DeactivatePage extends React.Component {

	deactivateUserProfile(event) {
		event.preventDefault();		

		// Dispatch action to delete/deactivate user
		// Log user out by clearing out the state
		// Redirect back to landing page 
		const idOfUserToBeDeleted = {
			id: this.props.match.params.id			
		}		
		store.dispatch(deleteUserCompanyRequest(idOfUserToBeDeleted));		
		this.props.history.push('/');

	}


	cancelDeactivation(event) {
		event.preventDefault();
		this.props.history.push('/home');
	}

	render() {
		return (
			<div>
				<p>Are you sure?  A deactivation CAN NOT be undone!</p>
				<form id='deactivationForm' onSubmit={(e) => this.deactivateUserProfile(e)}>
					<button type='Submit'>Yes</button>
					<button onClick={e => this.cancelDeactivation(e)}>Cancel</button>
				</form>				
			</div>
		);
	}
}

const mapStateToProps = state => ({
  
  user: state.user
}) 

export default connect(mapStateToProps)(DeactivatePage);
import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {deleteUserCompanyRequest} from '../actions'; 

export class DeactivatePage extends React.Component {

	deactivateUserProfile(event) {
		event.preventDefault();
		console.log('DEACTIVATING.....'); // ***********************************************

		// Dispatch action to delete/deactivate user
		// Log user out *********************************************
		// Redirect back to landing page *********************************
		const idOfUserToBeDeleted = {
			id: this.props.user._id			
		}
		console.log('ID is...', this.props.user._id); // **********************************************
		store.dispatch(deleteUserCompanyRequest(idOfUserToBeDeleted));
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
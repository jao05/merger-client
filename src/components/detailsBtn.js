// This component will allow the user to clear the search company results

import {} from '../actions';
import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

export class DetailsBtn extends React.Component {

	constructor(props)  {

      super(props);
    }

    
    showDetails () {

    	// Dispatch action to show the company description
    	store.dispatch();
    }


    render() {

    	return (

    		<button id='showDetailBtn' onClick={this.showDetails}>Details</button>
    	);
    }
}


const mapStateToProps = state => ({
  
  companies: state.companies // ******???????????????
}) 

export default connect(mapStateToProps)(DetailsBtn);
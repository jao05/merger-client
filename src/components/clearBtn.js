// This component will allow the user to clear the search company results

import {clearSearchCompanies, setMessage} from '../actions';
import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

export class ClearBtn extends React.Component {

	constructor(props)  {

      super(props);
    }

    
    clearCompResults () {

    	// Dispatch action to clear 'companies' array located in the store?
    	store.dispatch(clearSearchCompanies());
        store.dispatch(setMessage(null));
    }


    render() {

    	return (

    		<button id='clearBtn' onClick={this.clearCompResults}>Clear</button>
    	);
    }
}


const mapStateToProps = state => ({
  
  companies: state.companies
}) 

export default connect(mapStateToProps)(ClearBtn);
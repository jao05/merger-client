// This component creates company choice options after data queried from our api

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

export class CompanyChoice extends React.Component {

	constructor(props)  {

      super(props);
    }

    render() {

    	return (

    		<input type='radio' key={index} value={index} /> {company.name} {company.industry} {company.location.city}
    	);
    }
}


const mapStateToProps = state => ({
  
  companies: state.companies // ******??????????????? **************
}) 

export default connect(mapStateToProps)(CompanyChoice);
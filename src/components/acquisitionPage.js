import React from 'react';
import {connect} from 'react-redux';
import {fetchAcquisitionCompanies} from '../actions';
import store from '../store';

export class AcquisitionPage extends React.Component {
    
    constructor(props)  {

      super(props);
    }

    showAcquisitionComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchAcquisitionCompanies(industry, location));

    }

    render() {

      console.log(this.props.companies); // *******************************
      const companies = this.props.companies.companies.map((company, index) => { // ****index not working properly ******
        return (
            <li key={index}>{company.name} {company.industry} {company.location.city}</li>
          )
      });

      return (
        <div id="acquisitionPage">
          <h2>Acquisition Page Header</h2>
          <p>Enter search criteria to find companies that are interested in being acquired.</p>

          <form>
            <label>Industry</label>
            <select id='industry'>
              <option value="Technology">Technology</option>
              <option value="Financial">Financial</option>
              <option value="Beauty">Beauty</option>
              <option value="Health">Health</option>
            </select>

            <label>Location</label>
            <select id='location'>
              <option value="New York">New York</option>
              <option value="Atlanta">Atlanta</option>
              <option value="Memphis">Memphis</option>
              <option value="San Francisco">San Francisco</option>
            </select>          

            <button onClick={this.showAcquisitionComps}>Search</button>
          </form>

          <div id="potentialAcqComps">
            <ul>{companies}</ul>
          </div>
          <div id="potentialAcqCompDetail">Company Details</div>
        </div>
      );
    }    
}


const mapStateToProps = state => ({
  
  companies: state.companies
}) 

export default connect(mapStateToProps)(AcquisitionPage);

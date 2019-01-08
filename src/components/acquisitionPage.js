import React from 'react';
import {connect} from 'react-redux';
import {fetchAcquisitionCompanies} from '../actions';
import store from '../store';
import ClearBtn from './clearBtn';

export class AcquisitionPage extends React.Component {
    
    // constructor(props)  {

    //   super(props);
    // }

    showAcquisitionComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchAcquisitionCompanies(industry, location));

    }

    render() {

      console.log(this.props.companies); // *******************************
      const companyDivs = this.props.companies.map((company, index) => { // ****index not working properly ******
        return (
          <div className='resultDiv' key={index} value={index}>
            <p>
              Name: {company.name} 
              Industry: {company.industry} 
              Location: {company.location} 
            </p>
            <p>
              Description: {company.description}
            </p>
            <p>
              Contact {company.contact.firstName} {company.contact.lastName} at {company.contact.email} 
            </p>
          </div>
        )
      });

      return (
        <div id="acquisitionPage">
          <h2>Acquire</h2>
          <p>
            Grow your company by acquiring businesses that are similar to yours.
            Enter search criteria to find companies that are interested in making a deal.
          </p>
          <p>Contact those that interest you.</p>

          <form>
            <div className='inputDiv'>
              <label>Industry</label>
              <select id='industry'>
                <option value="Technology">Technology</option>
                <option value="Financial">Financial</option>
                <option value="Beauty">Beauty</option>
                <option value="Health">Health</option>
              </select>
            </div>
            

            <div className='inputDiv'>
              <label>Location</label>
              <select id='location'>
                <option value="New York">New York</option>
                <option value="Atlanta">Atlanta</option>
                <option value="Memphis">Memphis</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>                      

            <button onClick={this.showAcquisitionComps}>Search</button>
          </form>

          <div id="potentialAcqComps">
            <ul>{companyDivs}</ul>
          </div>

          <ClearBtn />          
        </div>
      );
    }    
}


const mapStateToProps = state => ({
  
  companies: state.acquisitionCompanies
}) 

export default connect(mapStateToProps)(AcquisitionPage);

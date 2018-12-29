import React from 'react';
import {connect} from 'react-redux';
import {fetchMergerCompanies} from '../actions';
import store from '../store';
import ClearBtn from './clearBtn';

export class MergerPage extends React.Component {
    
    constructor(props)  {

      super(props);
    }

    showMergerComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;    

      let location = document.getElementById('location').value;

      store.dispatch(fetchMergerCompanies(industry, location));

    }    
    

    render() {
      console.log(this.props.companies); // *******************************
      let companyDivs = this.props.companies.map((company, index) => { // ****index not working properly ******        

        return ( 
          <div key={index} value={index}>
            Name: {company.name} 
            Industry: {company.industry} 
            Location: {company.location} 
            Description: {company.description}
            Contact: {company.contact.firstName} {company.contact.lastName} at {company.contact.email} 
          </div>
        )
      });   
      

      return (
        <div id="mergerPage">
          <h2>Merge</h2>
          <p>
            Grow your company by merging with one or more businesses that are similar to yours.
            Enter search criteria to find companies that are interested.
          </p>
          <p>Contact those that interest you.</p>

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

            <button onClick={this.showMergerComps}>Search</button>
          </form>

          <div id="potentialMergComps">
            <ul>{companyDivs}</ul>            
          </div>
          
          <ClearBtn />

          <div id="potentialMergCompDetail"></div>
        </div>     
      );  
    }    
}

const mapStateToProps = state => ({
  
  companies: state.mergerCompanies
}) 

export default connect(mapStateToProps)(MergerPage);

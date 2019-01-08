import React from 'react';
import {connect} from 'react-redux';
import {fetchSellCompanies} from '../actions';
import store from '../store';
import ClearBtn from './clearBtn';

export class SellPage extends React.Component {
    
    constructor(props)  {

      super(props);
    }

    showSellComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchSellCompanies(industry, location));

    }

    render() {

      console.log(this.props.companies); // *******************************
      const companyDivs = this.props.companies.map((company, index) => { // ****index not working properly ******
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
        <div id="sellPage">
          <h2>Sell</h2>
          <p>Enter search criteria to find companies that are interested in buying other companies.</p>
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
                      

            <button onClick={this.showSellComps}>Search</button>
          </form>

          <div id="potentialSellComps">
            <ul>{companyDivs}</ul>
          </div>

          <ClearBtn />          
        </div>
      );  
    }    
}


const mapStateToProps = state => ({
  
  companies: state.sellCompanies
}) 

export default connect(mapStateToProps)(SellPage);
import React from 'react';
import {connect} from 'react-redux';
import {fetchSellCompanies} from '../actions';
import store from '../store';
import ClearBtn from './clearBtn';

export class SellPage extends React.Component {
    
    showSellComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchSellCompanies(industry, location));

    }

    render() {
      const {companies, message} = this.props
      let companyDivs;
        
      if(companies && companies.length > 0){
        companyDivs = this.props.companies.map((company, index) => { // ****index not working properly ******        
          return ( 
            <div className='resultDiv' key={index} value={index}>
              <p>
                Name: {company.name}<br/>
                Industry: {company.industry}<br/>
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
      }

      return (
        <div id="sellPage">
          <h2>Sell</h2>
          <p>
            Enter search criteria to find companies that are interested in buying other companies.
            Contact those that interest you.
          </p>
          
          
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
            <p>{message}</p>
            <ul>{companyDivs}</ul>
          </div>

          <ClearBtn />          
        </div>
      );  
    }    
}


const mapStateToProps = state => ({
  
  companies: state.sellCompanies,
  message: state.message
}) 

export default connect(mapStateToProps)(SellPage);
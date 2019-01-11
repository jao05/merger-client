import React from 'react';
import {connect} from 'react-redux';
import {fetchExpertCompanies} from '../actions';
import store from '../store';
import ClearBtn from './clearBtn';

export class ExpertPage extends React.Component {
    
    showExperts(event) {

      event.preventDefault();      

      let type = document.getElementById('type').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchExpertCompanies(type, location));

    }

    render() {

      const {companies, message} = this.props
      let companyDivs;
        
      if(companies && companies.length > 0){
        companyDivs = this.props.companies.map((company, index) => { // ****index not working properly ******        
          return ( 
            <div className='resultDiv' key={index} value={index}>
              <p>
                Name: {company.name} 
                Industry: {company.type} 
                Location: {company.location} 
              </p>
              
              <p>
                Contact {company.contact.firstName} at {company.name} 
              </p>
            </div>
          )
        });
      }

      return (
        <div id="expertPage">
          <h2>Find an Expert</h2>
          <p>
            Get expert help to close your deal. Enter criteria to find them and then contact those that interest you.
          </p>
          
          <form>
            <div className='inputDiv'>
              <label>Type</label>
              <select id='type'>
                <option value="Legal">Legal</option>
                <option value="Financial">Financial</option>
              </select>
            </div>            

            <div className='inputDiv'>
              <label>Location</label>
              <select id='location'>
                <option value="New York">New York</option>
                <option value="Boston">Boston</option>
              </select>
            </div>                      

            <button onClick={this.showExperts}>Search</button>
          </form>

          <div id="selectExpertSection">            
            
            <ul>
              {message}
              {companyDivs}              
            </ul>
              
            <ClearBtn />            
          </div>
        </div>
      );  
    }   
}


const mapStateToProps = state => ({
  
  companies: state.expertCompanies,
  message: state.message
}) 

export default connect(mapStateToProps)(ExpertPage);

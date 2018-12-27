import React from 'react';
import {connect} from 'react-redux';
import {fetchExpertCompanies} from '../actions';
import store from '../store';
import ClearBtn from './clearBtn';

export class ExpertPage extends React.Component {
    
    constructor(props)  {

      super(props);
    }

    showExperts(event) {

      event.preventDefault();      

      let type = document.getElementById('type').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchExpertCompanies(type, location));

    }

    render() {

      console.log(this.props.companies); // *******************************
      const companies = this.props.companies.map((company, index) => { // ****index not working properly ******
        return (
            <li key={index}>{company.name} {company.industry} {company.location.city}</li>
          )
      });

      return (
        <div id="expertPage">
          <h2>Expert Page Header</h2>
          <p>Get expert help to close your deal.</p>
          <p>Enter criteria...</p>

          <form>
            <label>Type</label>
            <select id='type'>
              <option value="Legal">Legal</option>
              <option value="Financial">Financial</option>
            </select>

            <label>Location</label>
            <select id='location'>
              <option value="New York">New York</option>
              <option value="Boston">Boston</option>
            </select>          

            <button onClick={this.showExperts}>Search</button>
          </form>

          <div id="selectExpertSection">
            <p>Select an Expert...</p>
            <form>
              <ul>
                {companies}
              </ul>
              
              <ClearBtn />

              <button>Choose</button>
            </form>
          </div>
        </div>
      );  
    }   
}


const mapStateToProps = state => ({
  
  companies: state.expertCompanies
}) 

export default connect(mapStateToProps)(ExpertPage);

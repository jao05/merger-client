import React from 'react';
import {connect} from 'react-redux';
import {fetchExpertCompanies} from '../actions';
import store from '../store';

export default function ExpertPage(props) {
    
    function showExperts(event) {

      event.preventDefault();      

      let type = document.getElementById('type').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchExpertCompanies(type, location));

    }

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

          <button onClick={showExperts}>Search</button>
        </form>

        <div id="selectExpertSection">
          <p>Select an Expert...</p>
          <form>
            <input type="radio" />
            <button>Choose</button>
          </form>
        </div>
      </div>
    );
}

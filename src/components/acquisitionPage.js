import React from 'react';
import {connect} from 'react-redux';
import {fetchAcquisitionCompanies} from '../actions';
import store from '../store';

export default function AcquisitionPage(props) {
    
    function showAcquisitionComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchAcquisitionCompanies(industry, location));

    }

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

          <button onClick={showAcquisitionComps}>Search</button>
        </form>

        <div id="potentialAcqComps">Potential Acquisition Comps</div>
        <div id="potentialAcqCompDetail">Company Details</div>
      </div>
    );
}

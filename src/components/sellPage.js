import React from 'react';
import {connect} from 'react-redux';
import {fetchSellCompanies} from '../actions';
import store from '../store';

export default function SellPage(props) {
    
	function showSellComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchSellCompanies(industry, location));

    }

    return (
      <div id="sellPage">
        <h2>Sell Page Header</h2>
        <p>Enter search criteria to find companies that are interested in buying other companies.</p>
        
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

          <button onClick={showSellComps}>Search</button>
        </form>

        <div id="potentialSellComps">Potential Sell Comps</div>
        <div id="potentialSellCompDetail">Company Details</div>
      </div>
    );
}

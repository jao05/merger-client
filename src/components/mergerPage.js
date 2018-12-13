import React from 'react';
import {connect} from 'react-redux';
import {fetchMergerCompanies} from '../actions';
import store from '../store';

export function MergerPage(props) {
    
    function showMergerComps(event) {

      event.preventDefault();      

      let industry = document.getElementById('industry').value;      

      let location = document.getElementById('location').value;

      store.dispatch(fetchMergerCompanies(industry, location));

    }

    return (
      <div id="mergerPage">
        <h2>Merger Page Header</h2>
        <p>Enter search criteria to find companies that are interested in merging.</p>

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

          <button onClick={showMergerComps}>Search</button>
        </form>

        <div id="potentialMergComps">Potential Merge Comps Placeholder</div>
        <div id="potentialMergCompDetail">Company Details Placeholder</div>
      </div>
    );
}

export const mapStateToProps = state => ({
    
    companies: state.companies
});

export default connect(mapStateToProps)(MergerPage);

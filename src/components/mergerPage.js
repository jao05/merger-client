import React from 'react';
import {connect} from 'react-redux';

export function MergerPage(props) {
    
    function demoShowComps(event) {

      event.preventDefault();

      const companies = props.companies.map(company => {
        console.log(company); // *****************
        return (

            `<div>${company.name} ${company.location} ${company.industry} ${company.profile}</div>`
          ); 
      });
      console.log(companies)
      document.getElementById("potentialMergComps").innerHTML = companies;

    }

    return (
      <div id="mergerPage">
        <h2>Merger Page Header</h2>
        <p>Enter search criteria to find companies that are interested in merging.</p>

        <form>
          <label>Industry</label>
          <select>
            <option value="Technology">Technology</option>
            <option value="Financial">Financial</option>
            <option value="Beauty">Beauty</option>
            <option value="Health">Health</option>
          </select>

          <label>Location</label>
          <select>
            <option value="New York">New York</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Memphis">Memphis</option>
            <option value="San Francisco">San Francisco</option>
          </select>          

          <button onClick={demoShowComps}>Search</button>
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

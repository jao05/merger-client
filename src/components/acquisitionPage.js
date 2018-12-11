import React from 'react';

export default function AcquisitionPage(props) {
    return (
      <div id="acquisitionPage">
        <h2>Acquisition Page Header</h2>
        <p>Enter search criteria to find companies that are interested in being acquired.</p>

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

          <button>Search</button>
        </form>

        <div id="potentialAcqComps">Potential Acquisition Comps</div>
        <div id="potentialAcqCompDetail">Company Details</div>
      </div>
    );
}

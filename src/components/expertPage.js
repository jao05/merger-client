import React from 'react';

export default function ExpertPage(props) {
    return (
      <div id="expertPage">
        <h2>Expert Page Header</h2>
        <p>Get expert help to close your deal.</p>
        <p>Enter criteria...</p>

        <form>
          <label>Type</label>
          <select>
            <option value="Legal">Legal</option>
            <option value="Financial">Financial</option>
          </select>

          <label>Location</label>
          <select>
            <option value="New York">New York</option>
            <option value="Boston">Boston</option>
          </select>          

          <button>Search</button>
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

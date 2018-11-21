import React from 'react';

export default function HomePage(props) {
    return (
      <div id="acquisitionPage">
        <h2>Acquisition Page Header</h2>
        <p>Enter criteria...</p>

        <form>
          <label>Label</label>
          <input>

          <label>Label</label>
          <input>

          <label>Label</label>
          <input>

          <label>Label</label>
          <input>

          <button>Search</button>
        </form>

        <div id="potentialAcqComps">Potential Acquisition Comps</div>
        <div id="potentialAcqCompDetail">Company Details</div>
      </div>
    );
}

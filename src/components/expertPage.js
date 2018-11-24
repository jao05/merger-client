import React from 'react';

export default function ExpertPage(props) {
    return (
      <div id="expertPage">
        <h2>Expert Page Header</h2>
        <p>Get expert help...</p>
        <p>Enter criteria...</p>

        <form>
          <label>Label</label>
          <input />

          <label>Label</label>
          <input />

          <label>Label</label>
          <input />

          <label>Label</label>
          <input />

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

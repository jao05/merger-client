import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function HomePage(props) {
    return (
      <div id="homePage">
        <h2>Home Page Header</h2>
        
        <p>Description</p>
        <Link to="/merger"><button>Merger</button></Link>

        <p>Description</p>
        <Link to="/acquisition"><button>Acquisition</button></Link>

        <p>Description</p>
        <Link to="/sell"><button>Sell</button></Link>

        <p>Found interested party? Now, find an expert to help...</p>
        <Link to="/expert"><button>Find an Expert</button></Link>
      </div>
    );
}

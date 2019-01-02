import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './navBar';

export default function HomePage(props) {
    return (
      <div id="homePage">
        <h2>Home Page Header</h2>
        
        <p>Find companies that are interested in merging.</p>
        <Link to="/merger"><button>Merger</button></Link>

        <p>Find companies that are interested in being acquired.</p>
        <Link to="/acquisition"><button>Acquisition</button></Link>

        <p>Find companies that are interested in purchasing other companies.</p>
        <Link to="/sell"><button>Sell</button></Link>

        <p>Found an interested party? Now, find an experts to help close the deal.</p>
        <Link to="/expert"><button>Find an Expert</button></Link>
      </div>
    );
}

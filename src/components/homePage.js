import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function HomePage(props) {
    return (
      <div id="homePage">        
        <p>Find companies that are interested in MERGING.</p>
        <Link to="/merger"><button>Merger</button></Link>

        <p>Find companies that are interested in BEING ACQUIRED.</p>
        <Link to="/acquisition"><button>Acquisition</button></Link>

        <p>Want to sell your company? Find companies that are interested in PURCHASING other companies.</p>
        <Link to="/sell"><button>Sell</button></Link>

        <p>Found an interested party? Now, find an EXPERT to help close the deal.</p>
        <Link to="/expert"><button>Find an Expert</button></Link>
      </div>
    );
}

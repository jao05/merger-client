// The user is directed to this component if they select to 'sign-up' on the landingPage
// After signing-up, the user is directed to the homePage

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default function SignUp(props) {    

    return (
      <div>
        <label>Company Name (Username)</label>
        <input/>

        <label>Company City</label>
        <input/>

        <label>Company State</label>
        <input/>

        <label>Company Country</label>
        <input/>

        <label>Industry</label>
        <input/>

        <p>Contact Person:</p>
        <label>First Name</label>
        <input/>

        <label>Last Name</label>
        <input/>

        <label>Email</label>
        <input/>

        <label>Company Description</label>
        <input/>

        <label type='password'>Password</label>
        <input/>

        <label type='password'>Re-enter Password</label>
        <input/>

        <button type='Submit'>Submit</button>
      </div>
    );
}

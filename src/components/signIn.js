// The user is directed to this component if they select to 'sign-in' on the landingPage
// After signing-in, the user is directed to the homePage

import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default function SignIn(props) {    

    return (
      <div>
        <label>Company Name</label>
        <input/>

        <label type='password'>Password</label>
        <input/>

        <button type='Submit'>Submit</button>
      </div>
    );
}

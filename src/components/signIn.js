import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

export default function SignIn(props) {    

    return (
      <div>
        <label>Username</label>
        <input/>

        <label type='password'>Password</label>
        <input/>

        <button type='Submit'>Submit</button>
      </div>
    );
}

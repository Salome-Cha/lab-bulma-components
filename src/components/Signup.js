import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'
import './Navbar.css';
import './FormField.css';
import './CoolButton.css';
import './Signup.css';


const Signup = () => {
  return (
    <div>
          <Navbar />
          <div class='form-group-signup'>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" />
          <CoolButton myClass="is-black signup-button"> Signup </CoolButton>
          </div>
    </div>
  )
};

export default Signup;

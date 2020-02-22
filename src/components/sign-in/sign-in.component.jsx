import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

import {signInWithGoogle} from '../../firebase/firebase.utils';

export default () => {
  const [email,setemail] = React.useState('');
  const [password,setpassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setemail('');
    setpassword('');
  }

  const handleEmail = e => {
    setemail(e.target.value);
  }
  
  const handlePassword = e => {
    setpassword(e.target.value);
  }

  return (
    <div className="sign-in">
      <h2>I have already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" id="email" name="email" required label="Email" value={email} handleChange={handleEmail} />
        <FormInput type="password" name="password" id="password" required label="Password" value={password} handleChange={handlePassword} />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>{' '}SIGN IN WITH GOOGLE {' '}</CustomButton>
        </div>
      </form>
    </div>
  );
}
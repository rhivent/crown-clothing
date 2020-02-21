import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

export default () => {
  const [email,setemail] = React.useState('');
  const [password,setpassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setemail('');
    setpassword('');
  }

  return (
    <div className="sign-in">
      <h2>I have already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="" onSubmit={handleSubmit}>
        <FormInput type="email" id="email" name="email" required label="Email" value={email} handleChange={e => setemail(e.target.value)} />
        <FormInput type="password" name="password" id="password" required label="Password" value={password} handleChange={e => setpassword(e.target.value)} />

        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
    </div>
  );
}
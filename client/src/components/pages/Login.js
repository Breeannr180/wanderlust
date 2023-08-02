import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Login = () => {
  return (
    <div>
      <Header />
      <div className='login'>
        <h2>Login</h2>
        <form>
          <input type='text' placeholder='Email' required />
          <input type='password' placeholder='Password' required />
          <button type='submit'>Log In</button>
          <button type='button'>Sign Up Instead</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

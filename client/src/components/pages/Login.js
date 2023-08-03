import React from 'react';

const Login = () => {
  return (
    <div>
      <div className='login'>
        <h2>Login</h2>
        <form>
          <input type='text' placeholder='Email' required />
          <input type='password' placeholder='Password' required />
          <button type='submit'>Log In</button>
          <button type='button'>Sign Up Instead</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';

const Login = () => {
  const [loggingIn, setLoggingIn] = useState(true);
  const handleToggle = () => {
    setLoggingIn(!loggingIn);
  };

  return (
    <div>
      <div className='card'>
        {loggingIn ? (
          <div className='card-body'>
            <h2 className='card-title'>Login</h2>
            <form className='form-control'>
              <input
                className='input input-bordered'
                type='text'
                placeholder='Email'
                required
              />
              <input
                className='input input-bordered'
                type='password'
                placeholder='Password'
                required
              />
              <div className='card-actions'>
                <button className='btn btn-wide' type='submit'>
                  Log In
                </button>
              </div>
            </form>

            <button type='button' onClick={handleToggle}>
              Sign Up Instead
            </button>
          </div>
        ) : (
          <div className='card-body'>
            <h2 className='card-title'>Sign Up</h2>
            <form className='form-control'>
              <input
                className='input input-bordered'
                type='text'
                placeholder='Email'
                required
              />
              <input
                className='input input-bordered'
                type='password'
                placeholder='Password'
                required
              />
              <div className='card-actions'>
                <button className='btn btn-wide' type='submit'>
                  Sign Up
                </button>
              </div>
            </form>
            <button type='button' onClick={handleToggle}>
              Already have an account? Log In Here
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

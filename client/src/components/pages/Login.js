
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js'

const Login = () => {

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  
  const Login = () => {
  const [loggingIn, setLoggingIn] = useState(true);
  const handleToggle = () => {
    setLoggingIn(!loggingIn);

  const [login, { err, userData }] = useMutation(LOGIN_USER);
  const [addUser, { error, newUserData }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const createNewUser = async (event) => {
    event.preventDefault();

    try {
      const { newUserData } = await addUser({
        variables: { ...formState },
      });

      Auth.login(newUserData.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const { userData } = await login({
        variables: { ...formState },
      });

      Auth.login(userData.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className='card'>
        {loggingIn ? (
          <div className='card-body'>
            <h2 className='card-title'>Login</h2>
            <form className='form-control' onSubmit={loginUser}>
              <input
                className='input input-bordered'
                placeholder='Username' name="username" value={formState.name} onChange={handleChange} required
              />
              <input
                className='input input-bordered'
                type='password' placeholder='Password' name="password" value={formState.password} onChange={handleChange} required
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
            <form className='form-control' onSubmit={createNewUser}>
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

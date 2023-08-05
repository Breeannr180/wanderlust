import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js';
import { useProfileContext } from '../../utils/GlobalState.js';

const Login = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [loggingIn, setLoggingIn] = useState(true);
  const handleToggle = () => {
    setLoggingIn(!loggingIn);
  };

  const [login, { er, userData }] = useMutation(LOGIN_USER);
  const [addUser, { error, newUserData }] = useMutation(ADD_USER);
  const [profile, setProfile] = useProfileContext();

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
      const { username, password } = formState
      const { data } = await addUser({
        variables: { username, password },
      });
      console.log(data);
      if (data.addUser.token == 0) {
        console.log('username taken');
        return
      }
      setProfile({ _id: data.addUser._id, username: data.addUser.username })
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const { username, password } = formState
      const { data } = await login({
        variables: { username, password },
      });
      setProfile({ _id: data.login._id, username: data.login.username })
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className='card'>
        {loggingIn ? (
          <div className='card-body'>
            <h2 className='card-title'>Login</h2>
            <form
              className='form-control'
              onSubmit={loginUser}
            >
              <input
                className='input input-bordered'
                placeholder='Username'
                name='username'
                value={formState.username}
                onChange={handleChange}
                required
              />
              <input
                className='input input-bordered'
                type='password'
                placeholder='Password'
                name='password'
                value={formState.password}
                onChange={handleChange}
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
            <form
              className='form-control'
              onSubmit={createNewUser}
            >
              <input
                className='input input-bordered'
                type='text'
                placeholder='Username'
                name='username'
                value={formState.username}
                onChange={handleChange}
                required
              />
              <input
                className='input input-bordered'
                type='password'
                name='password'
                placeholder='Password'
                value={formState.password}
                onChange={handleChange}
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

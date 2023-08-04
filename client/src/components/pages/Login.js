import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations.js';
import Auth from '../../utils/auth.js'

const Login = () => {

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

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
      <div className='login'>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <input type='text' placeholder='Username' name="username" value={formState.name} onChange={handleChange} required />
          <input type='password' placeholder='Password' name="password" value={formState.password} onChange={handleChange} required />
          <button type='submit' >Log In</button>
        </form>
        <form onSubmit={createNewUser}>
          <input type='text' placeholder='Username' required />
          <input type='password' placeholder='Password' required />
          <button type='button'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

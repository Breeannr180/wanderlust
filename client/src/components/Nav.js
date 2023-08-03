import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
      </ul>
      {Auth.loggedIn() ? (
        <button className='btn'>
          <Link to='/login'>Login</Link>
        </button>
      ) : (
        <button className='btn'>
          <Link to='/profile'>Profile</Link>
        </button>
      )}
    </nav>
  );
};

export default Nav;

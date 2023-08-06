import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Nav = () => {

  return (
    <div className='navbar-end'>
      <Link to='/search'>
        <button className='btn btn-primary'>Search</button>
      </Link>
      <Link to='/profile'>
        <button className='btn'>Saved Locations</button>
      </Link>
      {Auth.loggedIn() ? (
        <Link to='/login'>
          <button className='btn'>Login</button>
        </Link>
      ) : (
        <button className='btn' onClick={Auth.logout}>Logout</button>
      )}
    </div>
  );
};

export default Nav;

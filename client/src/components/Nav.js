import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Nav = () => {

  return (
    <div className='navbar-end'>
      <Link to='/search'>
        <button className='btn btn-primary'>Search</button>
      </Link>
      {Auth.loggedIn() ? (
        <div>
          <Link to='/profile'>
            <button className='btn'>Saved Locations</button>
          </Link>
          <button className='btn' onClick={Auth.logout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>
          <button className='btn'>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Nav;

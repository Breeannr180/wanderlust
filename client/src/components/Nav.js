import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Nav = () => {
  return (
    <div className='navbar-end'>
      <button className='btn btn-primary'>
        <Link to='/search'>Search</Link>
      </button>
      {/* {Auth.loggedIn() ? ( */}
      <button className='btn'>
        <Link to='/login'>Login</Link>
      </button>
      {/* ) : ( */}
      <button className='btn'>
        <Link to='/profile'>Profile</Link>
      </button>
      {/* )} */}
    </div>
  );
};

export default Nav;

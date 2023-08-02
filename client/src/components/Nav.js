import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='./'>Home</Link>
        </li>
        <li>
          <Link to='/components/Wiki/Search'>Search</Link>
        </li>
      </ul>
      <button className='btn'>
        <Link to='./components/Auth/Register'>Register</Link>
      </button>
      <button className='btn'>
        <Link to='/components/Auth/Login'>Login</Link>
      </button>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <nav className='navbar bg-neutral'>
      <div className='navbar-start'>
      <img src={logo} alt='logo' className='logo' />
        <button className='btn btn-active bg-base-300 text-xl p2'>
          <Link to='/'>Travel Wanderlust  </Link>
        </button>
      </div>
      <Nav />
    </nav>
  );
};

export default Header;

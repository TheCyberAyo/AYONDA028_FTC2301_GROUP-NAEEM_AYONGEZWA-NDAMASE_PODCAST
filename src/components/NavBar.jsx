import React from 'react';
import Logo from '../Pictures/Logo.png'

const NavBar = () => {

  return (
      <nav className='Nav'>
        <div className='Logo' >
        <img src={Logo} alt="Logo" />
          <h1 className='Title'>Ayofy</h1>
        </div>
        
        <ul className='Menu'>
          <li>home</li>
          <li>library </li>
          <li>favorites</li>
          <li>contacts</li>
        </ul>
        <h2 className='Out'>Log out</h2>
      </nav>
  );
};

export default NavBar; 
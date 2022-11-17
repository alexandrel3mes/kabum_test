import React from 'react';
import logo from '../icons/logo.png'
import '../style/Header.css'

function Header() {
    return (
      <header>
        <img alt='Kabum logo' className='logo' src={logo} />
      </header>
    );
}

export default Header
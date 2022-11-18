import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../icons/logo.png'
import '../style/DashHeader.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

function DashboardHeader() {
  const redirect = useNavigate();

  function handleLogout() {
    localStorage.clear();
    redirect('/login');
  }

    return (
      <header className='dash_header'>
        <div>
          <img alt='Kabum logo' className='logo' src={logo} />
        </div>
        <div>
        <NavDropdown title="Perfil" id="nav-dropdown">
          <NavDropdown.Item
            onClick={ handleLogout }
            eventKey="4.1">Log Out
          </NavDropdown.Item>
        </NavDropdown>
        </div>
      </header>
    );
}

export default DashboardHeader
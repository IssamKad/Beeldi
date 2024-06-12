import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools } from '@fortawesome/free-solid-svg-icons';

function Layout() {
  const navLinks = [
    { to: '/', icon: faHome, text: 'Home' },
    { to: '/equipments', icon: faTools, text: 'Equipments' }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
        <ul className="navbar-nav">
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <NavLink to={link.to} className="nav-link" activeclassname="active">
                <FontAwesomeIcon icon={link.icon} className="mr-2" />
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

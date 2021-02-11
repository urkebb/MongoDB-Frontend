import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>SVI KORISNICI</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">MOJA MESTA</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">DODAJ MESTO</NavLink>
    </li>
    <li>
      <NavLink to="/auth">AUTENTIFIKACIJA</NavLink>
    </li>
  </ul>
};

export default NavLinks;
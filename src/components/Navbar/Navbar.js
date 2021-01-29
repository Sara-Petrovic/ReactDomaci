import React, { useState, useEffect } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import Ulogujse from '../pages/Ulogujse';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="NavbarItems">
      <Link to='/' className='navbar-logo' style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Moje zgrade <i className='fas fa-home' /></Link>
      <div className="menu-icon" onClick={handleClick} >
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'} >
        {MenuItems.map((item, index) => {
          return (
            <li className='nav-item' key={index}>
              <Link to={item.url} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
            </li>
          )
        })}
        <li >
          <div id='login-btn-mobile' className='login'>
            <Ulogujse></Ulogujse>
          </div>
        </li>
      </ul>

      <div id='login-btn' className='login'>
        <Ulogujse></Ulogujse>
      </div>
    </nav>
  )


}

export default Navbar;
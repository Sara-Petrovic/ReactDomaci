import React, { useState,useEffect } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar (){
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () =>  setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => { //da se ne bi dugme pojavilo u mobile view kad se refreshuje stranica
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

        return (
            <nav className="NavbarItems">
                <Link to='/' className='navbar-logo' style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Moje zgrade<i className='fas fa-home'/></Link>
                <div className="menu-icon"  onClick={handleClick} >
                     <i className={click? 'fas fa-times' : 'fas fa-bars'}></i> 
                </div>
                <ul  className={click ? 'nav-menu active' : 'nav-menu'} >
                    {MenuItems.map((item, index) => {
                        return (
                            <li className='nav-item' >
                                <Link to={item.url} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
                            </li>    
                        )
                    })}
                </ul>
             {button && <Button buttonStyle='btn--outline'>Uloguj se</Button> }
            </nav>
        )
}

export default Navbar;
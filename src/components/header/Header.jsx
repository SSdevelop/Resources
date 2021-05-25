import React, { useState} from 'react';
import './Header.css';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='header'>
        <div className='header-container'>
          <a href='/' className='header-logo' onClick={closeMobileMenu}>
            <i class="fa fa-heartbeat" />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ContactUs
              </a>
            </li>

            <li>
              <a
                href='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              > Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header

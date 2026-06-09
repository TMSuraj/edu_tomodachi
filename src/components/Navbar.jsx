import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Logo from './Logo';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const toggleSubmenu = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <header className='header'>
      <Logo />
      <div
        className='header__nav__barmenu'
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle menu"
      >
        <div className="barmenu__bar"></div>
        <div className="barmenu__bar"></div>
        <div className="barmenu__bar"></div>
      </div>
      <nav className={`header__nav ${navOpen ? 'open' : ''}`}>
        <ul className='header__nav__links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li
            className={openItem === 'study' ? 'open' : ''}
            onClick={() => toggleSubmenu('study')}
          >
            Study Abroad
            <ul className='submenu'>
              <li><Link to="study_abroad/australia">Australia</Link></li>
              <li><Link to='study_abroad/canada'>Canada</Link></li>
              <li><Link to='study_abroad/japan'>Japan</Link></li>
            </ul>
          </li>
          <li><Link to="/services">Services</Link></li>
          <li
            className={openItem === 'classes' ? 'open' : ''}
            onClick={() => toggleSubmenu('classes')}
          >
            Preparation Classes
            <ul className='submenu'>
              <li><Link to="/classes/ielts">IELTS</Link></li>
              <li><Link to="classes/pte">PTE</Link></li>
              <li><Link to="classes/jlpt">JLPT</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Link className='header__contact-link' to="/contact">Contact Us</Link>
    </header>
  );
};

export default Navbar;
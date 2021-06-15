import React from "react";
import ClickAwayListener from "react-click-away-listener";

import './navbar.scss'

const Navbar = ({mobileMenu, handleClickAway}) => {

  return (
  <ClickAwayListener onClickAway={handleClickAway}>
    <header className="header">
      <nav className="navbar">
        <a href="/#" className="nav-link nav-name">
          Dru Daniels
        </a>

        <ul className="nav-menu" id="nav-menu" onClickAway={mobileMenu}>
            <li className="nav-item">
                <a href="/#about" className="nav-link" onClick={mobileMenu}>About</a>
            </li>
            <li className="nav-item">
                <a href="/#projects" className="nav-link" onClick={mobileMenu}>Projects</a>
            </li>
            <li className="nav-item">
                <a 
                  href="mailto:drudaniels@gmail.com?subject=Business%20Inquiry" 
                  target="blank" 
                  className="button nav-link contact" 
                  onClick={mobileMenu}
                >
                    Contact
                </a>
            </li>
        </ul>
        <div className="hamburger" id="hamburger" onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
      </nav>
    </header>
  </ClickAwayListener>
  );
};

export default Navbar
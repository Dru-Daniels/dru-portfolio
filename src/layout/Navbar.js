import React from "react";

import './navbar.scss'

const Navbar = () => {

  const mobileMenu = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/#" className="nav-link nav-name">
          Dru Daniels
        </a>
        <ul className="nav-menu" id="nav-menu">
            <li className="nav-item">
                <a href="/#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
                <a href="/#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
                <a 
                  href="mailto:drudaniels@gmail.com?subject=Business%20Inquiry" 
                  target="blank" 
                  className="button nav-link contact">
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
  );
};

export default Navbar
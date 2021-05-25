import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav-logo">
              <video autoPlay>
                <source src="/Logo.mp4" type="video/mp4"/>
              </video>
            </Link>
            <ul className="nav-menu" id="nav-menu">
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
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

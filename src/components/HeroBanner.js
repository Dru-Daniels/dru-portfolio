import React from 'react'
import './heroBanner.scss'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HeroImg from '../images/HeroImg'

const HeroBanner = (props) => {
  return (
    <div className="hero-container">
      <HeroImg/>
      <section className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Dru</span>.</h1>
            <div className="hello-word">
              <span><h1>Web Dev</h1></span>
              <span><h1>Front End</h1></span>
              <span><h1>Back End</h1></span>
              <span><h1>UX/UI</h1></span>
              <span><h1>Full Stack</h1></span>
            </div>
          </div>
        <a 
          href="mailto:drudaniels@gmail.com?subject=Business%20Inquiry" 
          target="blank" 
          className="button hero-contact"
        >
          Learn More <ChevronRightIcon />
        </a>
      </section>
    </div>
  )
}

export default HeroBanner
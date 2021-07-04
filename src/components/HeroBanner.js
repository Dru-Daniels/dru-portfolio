import React, { useEffect } from 'react'
import './heroBanner.scss'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HeroImg from '../images/HeroImg'

import { gsap } from "gsap/dist/gsap";

const HeroBanner = (props) => {
  
  useEffect(() => {
    let tl = gsap.timeline()
    
    gsap.from(".d3-anim", {
      stagger: .5,
      y: -1000,
      duration: 3.5,
      ease: "power4. in"
    }, "+=3")
    
    gsap.from(".d3-anim1", {
      stagger: .5,
      y: -1000,
      duration: 3.5,
      ease: "power4. in"
    }, "+=6")

    tl.from( '.hero-container', { 
      duration: 2,
      ease: "power4. inOut",
      y: -200,
      opacity: 0, 
      }, "+=.5");
              
    tl.from('.hero-contact', {
      duration: .5,
      ease: "power4. in",
      opacity: 0,
    }, "+=2")
      
  }, [])

  return (
    <div className="hero-container">
      <HeroImg className="hero-design"/>
      <section className="hero-btn">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Dru</span>.</h1>
            <div className="hello-word">
              <span><h1 className="hero-title">Web Dev</h1></span>
              <span><h1 className="hero-title">Front End</h1></span>
              <span><h1 className="hero-title">Back End</h1></span>
              <span><h1 className="hero-title">UX/UI</h1></span>
              <span><h1 className="hero-title">Full Stack</h1></span>
            </div>
          </div>
        <a href="/#about"className="hero-contact">
          Learn More 
          <ChevronRightIcon className="learn-btn-icon" />
        </a>
      </section>
    </div>
  )
}

export default HeroBanner
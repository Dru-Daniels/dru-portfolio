import React, { useEffect } from 'react'
import './feature.scss'

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = (props) => {  
  
  useEffect (()=> {
    gsap.from(".transition2", {
      scrollTrigger: {
        trigger:".transition2",
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 1.3,
      stagger: .6
    })
    gsap.from(".transition22", {
      scrollTrigger: {
        trigger:".transition22",
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 2.3,
      stagger: .6,
    })
    
    gsap.from(".transition3", {
      scrollTrigger: {
        trigger:".transition3",
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: 1.3,
      stagger: .7
    })
  }, [])

  return (
    <section className="feature" id="about">
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle">About Dru</p>
          <a href="https://youtu.be/GPFTQ6Od1MM?t=2019" className="featured-title" target="blank">Opera <SwapHorizIcon/> Techie</a>
          <p className="featured-desc">Opera singer turned techie, I love creative problem solving--whether it be onstage or online. I seek out working with people that value mentorship, best practices, keeping up with the latest tech, diversity, and having a positive impact. Feel free to reach out!</p>
          <a 
            className="primary-btn" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="mailto:drudaniels@gmail.com?subject=Business%20Inquiry" 
          >
            Get in Touch<ChevronRightIcon/>
          </a>
        </div>
      </div>
      <img className="right transition2 dru-img" src="/DruPic.png" alt="Dru Headshot"></img>
    </section>
  )
}

export default Feature
import React from 'react'
import './skill.scss'

import FrontEndSVG from '../images/FrontEndSVG'
import SoftSkillsSVG from '../images/SoftSkillsSVG'
import BackEndSVG from '../images/BackEndSVG'

const Skill = (props) => {

  return (
    <section className="skills">
      <h1 className="skills-title">Making it right<span className=" title-accent">.</span></h1>
      <h4 className="skills-title-sub">
        I design, develop, and deliver experiences that are technically
        impressive and easy to use.
      </h4>
      <div className="skills-container">
        <ul>
          <li className="transition22">
            <div className="icon-container one">
              <img className="icon-img" src="/face1.png" alt="Front End Icon"/> 
              <FrontEndSVG/>
            </div>
            <p className="skill-title">Front End Development</p>
          </li>
          <li className="transition22">
            <div className="icon-container three">
              <img className="icon-img" src="/fullstack.png" alt="Front End Icon"/>
              <SoftSkillsSVG/>
            </div>
            <p className="skill-title">Full Stack & Soft Skills</p>
          </li>
          <li className="transition22">
            <div className="icon-container two">
              <img className="icon-img" src="/barGraph.png" alt="Back End Icon"/>
            </div>
            <p className="skill-title">Back End Development</p>
            <BackEndSVG/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skill
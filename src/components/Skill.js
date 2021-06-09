import React from 'react'
import './skill.scss'

const Skill = (props) => {

  return (
    <section className="skills">
      <div className="skills-container">
        <ul>
          <li className="transition2">
            <div className="icon-container one">
              <img className="icon-img" src="/face1.png" alt="Front End Icon"/>
            </div>
            <p className="skill-title">Front End Development</p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img className="icon-img" src="/fullstack.png" alt="Front End Icon"/>
            </div>
            <p className="skill-title">Full Stack & Soft Skills</p>
          </li>
          <li className="transition2">
            <div className="icon-container two">
              <img className="icon-img" src="/barGraph.png" alt="Back End Icon"/>
            </div>
            <p className="skill-title">Back End Development</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skill
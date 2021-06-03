import React from 'react'
import './skills.scss'

const Skills = (props) => {

  return (
    <section className="skills">
      <div className="skills-container">
        <ul>
          <li className="transition2">
            <div className="icon-container one">
              <img src="/face1.png" alt="Front End Icon"/>
            </div>
            <p classNam="skill-title">Front End</p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src="/fullstack.png" alt="Front End Icon"/>
            </div>
            <p classNam="skill-title">Full Stack & Soft Skills</p>
          </li>
          <li className="transition2">
            <div className="icon-container two">
              <img src="/barGraph.png" alt="Back End Icon"/>
            </div>
            <p classNam="skill-title">Back End</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
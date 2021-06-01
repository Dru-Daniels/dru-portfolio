import React from 'react'
import './heroBanner.scss'


const HeroBanner = (props) => {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Hi, I'm <span className="highlight">Dru</span>.</h1>
          <div className="hello-word">
            <span><h1>Developer</h1></span>
            <span><h1>Front End</h1></span>
            <span><h1>Back End</h1></span>
            <span><h1>UX/UI</h1></span>
            <span><h1>Full Stack</h1></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
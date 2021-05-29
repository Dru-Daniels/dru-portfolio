import React from 'react'
import './heroBanner.scss'

import WomanWireframe from './components/WomanWireframe'

const HeroBanner = (props) => {
  return (
    <>
      <section className="red-section">
        <div className="hello-container">
          <div className="left-side">
            <div className="hello-title">
              <h2>Hi!</h2>
              <h2>I'm <span className="highlight">Dru</span>.</h2>
            </div>
            <div className="hello-word">
              <span>Web Dev</span>
              <span>Musician</span>
              <span>Foodie</span>
              <span>Creative</span>
              <span>Caring</span>
            </div>
          </div>
          <div className="right-side">
            <WomanWireframe/>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
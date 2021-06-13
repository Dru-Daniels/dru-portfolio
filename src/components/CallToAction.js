import React from 'react'
import './callToAction.scss'

const CallToAction = (props) => {
  
  return (
    <section className="action">
      <div className="action-wrapper">
        <h1 className="action-title">Start a project
        <span>.</span>
        </h1>
        <p className="action-desc">
          Interested in working together? We should queue up a chat. I’ll buy the coffee.
        </p>
        <div>
          <a 
            href="mailto:drudaniels@gmail.com?subject=Business%20Inquiry" 
            target="blank" 
            class="call-btn"
          >
            Let's do this
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
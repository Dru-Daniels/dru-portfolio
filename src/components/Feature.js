import React from 'react'
import './feature.scss'

const Feature = (props) => {

  return (
    <section className="feature" id="about">
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle">About Dru</p>
          <a href="/#" className="featured-title">About Dru</a>
          <p className="featured-desc">Opera singer turned techie, I love creative problem solving--whether it be onstage or online. Both bring people around the world together for one-of-a-kind experiences! I’m currently seeking a full stack or front end position with a company that values strong mentorship, best practices, keeping up with the latest tech, inclusion, diversity, and having a positive impact. Please feel free to reach out!</p>
        </div>
      </div>
      <img className="right transition2 dru-img" src="/DruPic.png" alt="Dru Headshot"></img>
    </section>
  )
}

export default Feature
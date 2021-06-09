import React from 'react'
import './feature.scss'

const Feature = (props) => {

  return (
    <section className="feature" id="about">
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle">About Dru</p>
          <a href="https://youtu.be/GPFTQ6Od1MM?t=2019" className="featured-title" target="blank">See Dru Sing Opera</a>
          <p className="featured-desc">Opera singer turned techie, I love creative problem solving--whether it be onstage or online. I’m currently seeking a full stack or front end position with a company that values mentorship, best practices, keeping up with the latest tech, diversity, and having a positive impact. Feel free to reach out!</p>
        </div>
      </div>
      <img className="right transition2 dru-img" src="/DruPic.png" alt="Dru Headshot"></img>
    </section>
  )
}

export default Feature